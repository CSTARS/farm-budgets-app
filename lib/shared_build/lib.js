(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FB = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var diff = require('deep-diff');
var extend = require('extend');
var events = require('events').EventEmitter;

events = new events();
events.setMaxListeners(1000);

var budgetTimer = -1;
var materialTimer = -1;

var checkList = {
  budget : [],
  simpleMaterial : [],
  complexMaterial : []
};

var original = {
  budget : {},
  materials : {},
  materialIds : {}
};

var differenceState = {
  budget : [],
  materialIds : [],
  materials : []
};

// list of unsaved materials
var unsaved = {};
if( typeof window !== undefined ) {
  try {
    var t = window.localStorage.getItem('unsaved-materials');
    if( t ) unsaved = JSON.parse(t);
  } catch(e) {
    debugger;
    console.log(e);
  }
}

function setOriginal(budget, materials) {
  var i;
  original.materialIds = {};

  if( materials === undefined && budget.materials ) {
    original.budget = extend(true, {}, budget);

    materials = original.budget.materials;
    delete original.budget.materials;

    original.materials = {};

    for( i = 0; i < materials.length; i++ ) {
      // materials are already copied, no reason to re-extend
      original.materials[materials[i].id] = materials[i];
      original.materialIds[materials[i].id] = 1;
    }

  } else {
    original.budget = extend(true, {}, budget);

    original.materials = {};
    for( i = 0; i < materials.length; i++ ) {
      original.materials[materials[i].id] = extend(true, {}, materials[i]);
      original.materialIds[materials[i].id] = 1;
    }
  }

  differenceState = {
    budget : [],
    materialIds : [],
    materials : []
  };

  events.emit('material-diff', []);
  events.emit('budget-diff', differenceState);
}

function updateMaterial(material, deleted) {
  if( deleted ) {
    delete original.materials[material.id];
    delete original.materialIds[material.id];
    return;
  }

  original.materials[material.id] = material;
  original.materialIds[material.id] = 1;
}

function checkMaterials(materials) {
  if( materialTimer !== -1 ) {
    clearTimeout(materialTimer);
  }

  materialTimer = setTimeout(function(){
    materialTimer = -1;
    _checkMaterials(materials);
  }, 100);
}


function _checkMaterials(materials) {
  var differences = [], i;


  for( i = 0; i < materials.length; i++ ) {
    if( !materials[i].id ) {
      continue;
    }

    if( original.materials[materials[i].id] ) {
      differences.push({
        id : materials[i].id,
        type : materials[i].type,
        updated : true,
        diff : diff(original.materials[materials[i].id], materials[i]) || []
      });
    }
  }

  // remove things we don't care about
  for( i = differences.length-1; i >= 0; i-- ) {
    if( !differences[i].diff ) {
      continue;
    }

    ignoreAttributes(differences[i].diff, differences[i].type === 'complex' ? checkList.complexMaterial : checkList.simpleMaterial);
    if( differences[i].diff.length === 0 ) {
      differences.splice(i, 1);
    }
  }

  differenceState.materials = differences;
  events.emit('material-diff', differences);
}


function checkBudget(budget, materials) {
  if( budgetTimer !== -1 ) {
    clearTimeout(budgetTimer);
  }

  budgetTimer = setTimeout(function(){
    budgetTimer = -1;
    _checkBudget(budget, materials);
  }, 100);
}


function _checkBudget(budget, materials) {
  var differences = diff(original.budget, budget) || [];

  // remove things we don't care about
  ignoreAttributes(differences, checkList.budget);

  var ids = {};
  for( var i = 0; i < materials.length; i++ ) {
    if( !materials[i].id ) {
      continue;
    }
    ids[materials[i].id] = 1;
  }
  differenceState.materialIds = diff(original.materialIds, ids) || [];
  differenceState.budget = differences;

  events.emit('budget-diff', differenceState);
}

function ignoreAttributes(differences, list) {
  var i, j, path;
  for( i = differences.length-1; i >= 0; i-- ) {
    path = differences[i].path.join(',');
    var found = false;

    for( j = 0; j < list.length; j++ ) {
      if( list[j].test(path) ) {
        found = true;
        break;
      }
    }

    if( !found ) {
      differences.splice(i, 1);
    }
  }
}

function forceCheckAll(budget, materials) {
  _checkBudget(budget, materials);
  _checkMaterials(materials);

  if( differenceState.budget.length > 0 || differenceState.materials.length > 0 || differenceState.materialIds.length > 0 ) {
    return true;
  }

  return false;
}

function getDifferences() {
  return differenceState;
}

function prep(schema) {
  prepSchema('', schema.budget, checkList.budget);
  prepSchema('', schema.material, checkList.simpleMaterial);
  prepSchema('', schema.complexMaterial, checkList.complexMaterial);
}

function prepSchema(path, schema, list) {
  var comma = path.length > 0 ? ',' : '';

  for( var key in schema ) {
    if( typeof schema[key] === 'string' ) {
      list.push(new RegExp('^'+path+comma+key+'$'));
      continue;
    }

    if( Array.isArray(schema[key]) ) {
      if( schema[key][0]._object_array_ ) {
        prepSchema(path+comma+'.*,'+key, schema[key][0], list);
      } else {
        prepSchema(path+comma+key, schema[key][0], list);
      }
    } else if( typeof schema[key] === 'object' ) {
      prepSchema(path+comma+key, schema[key], list);
    }
  }
}

function on(event, listener){
  events.on(event, listener);
}

function removeListener(event, listener){
  events.removeListener(event, listener);
}

function hasChanges(material) {
  if( material ) {
    if( !original.materials[material.id] ) {
      return null;
    }
    var d = diff(original.materials[material.id], material);
    if( d ) {
      ignoreAttributes(d, material.type === 'complex' ? checkList.complexMaterial : checkList.simpleMaterial);
      if( d.length === 0 ) {
        return null;
      }
    }
    return d;
  }

  for( var key in differenceState ) {
    if( differenceState[key].length > 0 ) {
      return true;
    }
  }
  if( Object.keys(unsaved).length > 0 ) {
    return true;
  }

  return false;
}

// this only removes material from original list,
// it does not touch the budget
function removeMaterial(material) {
  if( original.materials[material.id] ) {
    delete original.materials[material.id];
  }
}

function addMaterial(material) {
  original.materials[material.id] = material;
}

module.exports = {
  setOriginal : setOriginal,
  checkBudget : checkBudget,
  checkMaterials : checkMaterials,
  forceCheckAll : forceCheckAll,
  getDifferences : getDifferences,
  hasChanges : hasChanges,
  on : on,
  removeListener : removeListener,
  updateMaterial : updateMaterial,
  removeMaterial : removeMaterial,
  addMaterial : addMaterial,
  getOriginal : function() {
    return original;
  },
  setUnsaved : function(materials) {
    unsaved = materials;
  },
  getUnsaved : function() {
    return unsaved;
  }
};

 prep(require('../save/schema')());

},{"../save/schema":8,"deep-diff":15,"events":17,"extend":16}],2:[function(require,module,exports){
'use strict';

/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);
materialController.init(operationController);

var currentData = {};

function reset() {
  operationController.reset();
  materialController.reset();

  // tmp for now
  var fixed = ['Estimate', 'Taxes','Insurance','Capitol Cost Recover','Lube & Repairs'];
  for( var i = 0; i < fixed.length; i++ ) {
    materialController.add({
      name : fixed[i],
      price : 1,
      units : 'us$',
      fixed : true,
      description : 'Provide fixed cost for complex material'
    },{
      noEvent : true,
      noRecalc : true
    });
  }
}

function load(data) {
  // by default adding/updating materials fires events and recalcs
  // budget.  We don't want to do this on initial load
  var options = {
    noEvent : true,
    noRecalc : true
  };

  data.materials.forEach(function(material){
    materialController.add(material, options);
  });

  materialController.recalc();

  operationController.setFarmSize((data.budget.farm && data.budget.farm.size) ? parseInt(data.budget.farm.size) : 1);
  data.budget.operations.forEach(function(operation){
    operationController.add(operation, options);
  });

  operationController.recalc();

  currentData = data;
}

// TODO: this is used by several widgets.  Controller should just keep a list
function getMaterialIds() {
  var ids = [];
  var materials = materialController.get();
  for( var type in materials ) {
    for( var name in materials[type] ) {
      if( materials[type][name].id ) {
        ids.push(materials[type][name].id);
      }
    }
  }
  return ids;
}



module.exports = {
  utils : require('./utils')(operationController, materialController),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  ucum : require('ucum.js'),
  units : require('./units'),
  save : require('./save'),
  changes : require('./changes'),
  getMaterialIds : getMaterialIds,
  getBudget : function() {
    if( !currentData.budget ) {
      return {};
    }
    currentData.budget.operations = operationController.get();
    return currentData.budget;
  },
  load : load,
  reset : reset
};

},{"./changes":1,"./materialController":3,"./operationController":5,"./save":7,"./transform":10,"./units":12,"./utils":13,"ucum.js":24}],3:[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/

 var events = require('events').EventEmitter;
 var units = require('../units');
 events = new events();
 events.setMaxListeners(1000);

var data = {
 materials : {},
 complex : {}
};
var operationController;

function init(controller) {
  operationController = controller;
}

function reset() {
  data = {
   materials : {},
   complex : {}
  };
}

function remove(name) {
  if( data.materials[name] ) {
    delete data.materials[name];
    events.emit('material-removed', {
      material : name
    });
    return success();
  } else if( data.complex[name] ) {
    delete data.complex[name];
    events.emit('material-removed', {
      material : name
    });
    return success();
  }

  return setError(name, 'material '+name+' does not exist', 1);
}

// bulk add/update items with only one recalc
function bulkAdd(materials, options) {
  var addOptions = {}, i;
  for( var key in options ) {
    addOptions[key] = options;
  }

  addOptions.noRecalc = true;
  addOptions.noEvent = true;

  var responses = {};
  for( i = 0; i < materials.length; i++ ) {
    responses[materials[i].name] = add(materials[i], addOptions);
  }

  // now just recalc once
  recalc();
  operationController.recalc();

  for( i = 0; i < materials.length; i++ ) {
    if( responses[materials[i].name].error ) {
      continue;
    }
    responses[materials[i].name].bluk = true;
    events.emit('material-update', responses[materials[i].name]);
  }

  return responses;
}

function add(material, options) {
  if( !options ) {
    options = {};
  }

  if( data.materials[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists', 2);
  } else if( data.complex[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists', 2);
  }

  var isNew = false;
  if( !data.materials[material.name] && !data.complex[material.name] ) {
    isNew = true;
  }

  if( material.type === 'complex' ) {
    data.complex[material.name] = material;
  } else {
    material.type = 'simple';
    data.materials[material.name] = material;
  }

  if( options.rename ) {
    remove(options.rename);
  }

  if( !options.noRecalc ) {
    recalc();
  }

  var response = {
    material : material,
    isNew : isNew,
    replaced : options.rename,
    flag : options.flag, // let the caller pass it's own flags
    success : true
  };

  if( !options.noEvent ) {
    events.emit('material-update', response);
  }

  return response;
}

function get(name, material) {
  if( !name ) {
    return data;
  }

  if( data.materials[name] ) {
    return data.materials[name];
  } else if( data.complex[name] ) {
    return data.complex[name];
  }

  return setError(name, name+' is not in the material list', 3);
}

function asArray() {
  var arr = [], key;
  for( key in data.materials ) {
    arr.push(data.materials[key]);
  }
  for( key in data.complex ) {
    arr.push(data.complex[key]);
  }
  return arr;
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( key in data.materials ) {
    if( key.match(re) && key !== ignore ) {
      results.push(data.materials[key]);
    }
  }
  for( key in data.complex ) {
    if( key.match(re) && key !== ignore  ) {
      results.push(data.complex[key]);
    }
  }

  for( var i = 0; i < results.length; i++ ) {
    if( results[i].name === txt ) {
      var m = results.splice(i, 1)[0];
      results.splice(0,0,m);
      break;
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var t = new Date().getTime();

  var material;

  for( material in data.complex ) {
    data.complex[material].price = null;
  }

  for( material in data.complex ) {
    var m = data.complex[material];

    if( m.price !== null ) {
        continue;
    }
    m.price = _recalc(m, [m.name]);
  }

  console.log('Material Recalc: '+(new Date().getTime() - t)+'ms');
}

function _recalc(material, materialChain){
  var price = 0;

  for( var key in material.materials ) {
    var m = get(key);

    if( m.error ) {
      if( material.unique && material.unique[key] ) {
        m = {
          name : key,
          price : material.unique[key].price,
          units : material.unique[key].units
        };
      }
    }

    if( m.error ) {
      material.materials[key].error = m.error;
      continue;
    }
    material.materials[key].error = null;

    if( m.price === null && m.type === 'complex' ) {
      // make sure no recursion
      // TODO: should probably add error to stack if issue.
      if( materialChain.indexOf(m.name) === -1 ) {
        m.price = _recalc(m, extendChain(materialChain, m.name));
      } else {
        // BADNESS
        console.log('Recusive materials found, ignoring: '+materialChain.join('i')+' && '+m.name);
      }
    }

    var value = units.calculateComplexPrice(m, material.materials[m.name], material);

    if( value.error ) {
      material.materials[m.name].price = 0;
      material.materials[m.name].error = value;
    } else {
      material.materials[m.name].price = value.value;
    }

    price += material.materials[m.name].price;

  }
  return price;
}

function extendChain(chain, m) {
  var newChain = chain.slice();
  newChain.push(m);
  return chain;
}

function materialRecalc(material) {
  if( typeof material !== 'object' ) {
    return;
  } else if( material.type !== 'complex' ) {
    return;
  }
  material.price = _recalc(material);
}

function getErrors() {
  var errors = [];

  for( var m in data.materials ) {
    if( data.materials[m].error ) {
      errors.push(data.materials[m]);
    }
  }

  for( var i in data.complex ) {
    if( data.complex[i].error ) {
      errors.push(data.complex[i]);
    } else {
      for( m in data.complex[i].materials ) {
        if( data.complex[i].materials[m].error ) {
          errors.push(data.complex[i]);
          break;
        }
      }
    }


    for( m in data.complex[i].materials ) {
      var material = get(m);
      if( material.error ) {
        material.from = data.complex[i];
        errors.push(material);
      }
    }
  }

  return errors;
}


function success() {
  return {success: true};
}

function setError(name, msg, code) {
  return {
    name : name,
    error : true,
    message : msg,
    code : code
  };
}

// does a material contain or have a dependency on a given material name
function contains(material, name, replaced) {
  if( material.name === name || material.name === replaced ) {
    return true;
  }

  if( material.type !== 'complex' || material.materials === undefined ) {
    return false;
  }

  for( var key in material.materials ) {
    if( key === name || key === replaced ) {
      return true;
    }

    var childContains = contains(get(key), name, replaced);
    if( childContains ) {
      return true;
    }
  }

  return false;
}


module.exports = {
  init : init,
  add : add,
  get : get,
  asArray : asArray,
  remove : remove,
  find : find,
  getErrors : getErrors,
  bulkAdd : bulkAdd,
  on : function(event, listener){
    events.on(event, listener);
  },
  removeListener : function(event, listener){
    events.removeListener(event, listener);
  },
  recalc : recalc,
  materialRecalc : materialRecalc,
  contains : contains,
  reset : reset
};

},{"../units":12,"events":17}],4:[function(require,module,exports){
"use strict";
var ucum=require('ucum.js');

// These throw errs, and need to be in try catch
function multiply(a,b,a_names,b_names) {
  var an={value:"value",unit:"unit"}
  , bn={value:"value",unit:"unit"}
  , parsed
    , unit
    , pre=[]
    , mult={}
    ;

    if (a_names) {
      if (a_names.unit) an.unit=a_names.unit;
      if (a_names.value) an.value=a_names.value;
    }
    if (b_names) {
      if (b_names.unit) bn.unit=b_names.unit;
      if (b_names.value) bn.value=b_names.value;
    }

  parsed = ucum.parse('('+[a[an.unit]+').('+b[bn.unit]]+')');
  mult.value=((a[an.value])?a[an.value]:1)*((b[bn.value])?b[bn.value]:1)*parsed.value;

  // Convert unit back
  for (unit in parsed.units) {
    pre.push(unit+parsed.units[unit]);
  }
  mult.unit=pre.join('.');
  return mult;
}

function multiply_to_unitless(a,b,an,bn) {
  var mult=unit_mulitply(a,b,an,bn);
  if (mult.unit !== {}) {
    throw m+" is not unitless";
  }
  return mult;
}

function sum(list,names) {
  var n={value:"value",unit:"unit"}
  , sum
  , i
  , i_unit
  ;

  if (names) {
    if (names.unit) n.unit=names.unit;
    if (names.value) n.value=names.value;
  }
  sum =(list.length > 0)?{value:list[0][n.value],unit:list[0][n.unit]}:{value:0,unit:{}};
  for (i=1;i<list.length;i++) {
    i_unit= ucum.convert(list[i][n.value],list[i][n.unit],sum.unit);
    sum.value+=i_unit.value;
  }
  return {'value':sum.value,'unit':sum.unit};
}


function cleanDollars(units) {
  if( units === undefined ) {
    return '1';
  }
  return units.replace(/(us)?\$/g, '1');
}


module.exports = {
   sum : sum,
   multiply : multiply,
   multiply_to_unitless : multiply_to_unitless,
   cleanDollars : cleanDollars
 };

},{"ucum.js":24}],5:[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/
var uuid = require('node-uuid');
var units = require('../units');
var utils = require('./utils');
var events = require('events').EventEmitter;
events = new events();
events.setMaxListeners(1000);

var total = 0;
var farmSize = 1;
var currentTotal = null;
var data = [], materialController, lastRecalcMsg;

function init(controller) {
  materialController = controller;
  materialController.on('material-update', handleMaterialUpdates);
  utils.init(this);
}

function reset() {
  total = 0;
  farmSize = 1;
  currentTotal = null;
  data = [];
}

function remove(name) {
  var op;

  if( typeof name === 'object' && data.indexOf(name) > -1 ) {
    op = data.splice(data.indexOf(name), 1)[0];
    fireUpdate('operation-removed', {operation: op});

    return success();
  } else {
    for( var i = 0; i < data.length; i++ ) {
      if( data[i].name === name  ) {
        op = data.splice(i, 1)[0];
        fireUpdate('operation-removed', {operation: op});
        return success();
      }
    }
  }

  return setError('operation '+(typeof name === 'object' ? name.name : name)+' does not exist');
}

function add(operation, options) {
  if( !options ) {
    options = {};
  }

  var op = get(operation.name);
  if( !op.error && !options.replace ) {
    return setError(operation.name, 'operation already exists');
  }

  if( !operation.materials ) {
    operation.materials = [];
  }

  // WHY?
  //for( var i = 0; i < operation.materials.length; i++ ) {
  //  operation.materials[i].id = uuid.v4();
  //}

  var isNew = false;
  if( op.error ) {
    isNew = true;
    data.push(operation);
  } else {
    data[data.indexOf(op)] = operation;
  }



  if( options.rename ) {
    remove(options.rename);
  }

  if( !options.noRecalc ) {
    recalc();
  }

  var response = {
    operation : operation,
    isNew : isNew,
    replaced : options.rename,
    flag : options.flag, // let the caller pass it's own flags
    success : true
  };

  if( !options.noEvent ) {
    fireUpdate('operation-update', response);
  }

  return response;
}

// bulk add/update items with only one recalc
function bulkAdd(operations, options) {
  var addOptions = {}, i;
  for( var key in options ) {
    addOptions[key] = options;
  }

  addOptions.noRecalc = true;
  addOptions.noEvent = true;

  var responses = {};
  for( i = 0; i < operations.length; i++ ) {
    responses[operations[i].name] = add(operations[i], addOptions);
  }

  // now just recalc once
  recalc();

  for( i = 0; i < operations.length; i++ ) {
    if( responses[operations[i].name].error ) {
      continue;
    }
    responses[operations[i].name].bluk = true;
    fireUpdate('operation-update', responses[operations[i].name]);
  }

  return responses;
}

function get(name) {
  if( !name ) {
    return data;
  }

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].name === name ) {
      return data[i];
    }
  }

  return setError(name+' is not in the operation list');
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].name.match(re) && data[i].name !== ignore ) {
      results.push(data[i]);
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var t = new Date().getTime();

  var operation, messages = [];
  total = 0;
  var range = {
    start : null,
    stop : null,
    all : []
  };

  for( var i = 0; i < data.length; i++ ) {
    operation = data[i];
    var newMessages = operationRecalc(operation);
    for( var j = 0; j < newMessages.length; j++ ) {
      messages.push(newMessages[j]);
    }

    var scheduled = operation.schedule ? operation.schedule.length : 0;

    if( !operation.schedule ) {
      messages.push({
        index : i,
        operation : operation.name,
        warning : warn('No schedule set')
      });
    } else {
      updateScheduleRange(operation.schedule, range, operation.name);
    }

    operation.total = scheduled * operation.subtotal;
    total += operation.total;
  }


  var spendingByMonth = utils.calculatePerMonth(range);

  console.log('Operation Recalc: '+(new Date().getTime() - t)+'ms');

  currentTotal = {
    total : total,
    range : range,
    spendingByMonth : spendingByMonth
  };

  fireUpdate('total-update', currentTotal);

  lastRecalcMsg = messages;
  return messages;
}

function operationRecalc(operation) {
  var materialDef, materialImpl, opTotal = 0;
  var messages = [];

  for( var i = 0; i < operation.materials.length; i++ ) {
    materialImpl = operation.materials[i];
    materialImpl.error = null;

    materialDef = materialController.get(materialImpl.name);

    // was a specified material not found?
    if( materialDef.error ) {
      materialImpl.error = materialDef; // this is actually the error response object
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        error : materialDef
      });
      continue;
    }

    // was a material amount not specified?
    if( typeof materialDef.price !== 'number' || isNaN(materialDef.price) ) {
      materialImpl.error = setError(materialDef.name+' found but price is not a number.');
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        warning : materialImpl.error
      });
      continue;
    }

    // was a material amount not specified?
    if( materialImpl.amount === undefined ) {
      materialImpl.warning = warn('No amount set.  Setting to 1.');
      messages.push({
        id : materialImpl.id,
        material : materialImpl.name,
        operation : operation.name,
        warning : materialImpl.warning
      });
      materialImpl.amount = 1;
    }

    var value = units.calculateOpMaterialPrice(materialDef, materialImpl);
    if( value.error ) {
      materialImpl.price = 0;
      materialImpl.error = value;
    } else {
      materialImpl.price = value.value;
    }

    // did something bad happen in price calculation?
    if( isNaN(materialImpl.price) ) {
      materialImpl.error = setError('Price calculated to NaN.  Material not included in total.');
      messages.push({
        operation : operation.name,
        material : materialImpl.name,
        id : materialImpl.id,
        error : materialImpl.error
      });
      continue;
    }

    opTotal += materialImpl.price;
  }

  operation.subtotal = opTotal;

  return messages;
}


function updateScheduleRange(schedule, range, name) {
  var parts, date;
  schedule.forEach(function(d){
    parts = d.date.split('-');
    date = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));

    var interval = {
      date : date,
      length : d.length,
      units : d.units,
      name : name
    };

    range.all.push(interval);

    if( range.start === null ) {
      range.start = date;
    } else if( range.start.getTime() > date.getTime() ) {
      range.start = date;
    }

    var end = getStopDate(interval);
    if( range.stop === null ) {
      range.stop = end;
    } else if( range.stop.getTime() < end.getTime() ) {
      range.stop = end;
    }
  });
}

function getStopDate(interval) {
  var l = parseInt(interval.length);

  if( interval.units === 'year' ) {
    l = l * 86400000 * 365;
  } else if( interval.units === 'day' ) {
    l = l * 86400000;
  } else {
    l = l * 86400000 * 30;
  }

  return new Date(interval.date.getTime()+l);
}

function handleMaterialUpdates(e) {

  if( e.bluk ) {
    return; // ignore event from bluk updates
    // bluk updater will manually poke recalc();
  }

  var material = e.material;
  var replaced = e.replaced;

  recalc();

  for( var i = 0; i < data.length; i++ ) {
    var operation = data[i];
    var fireChange = false;

    for( var j = 0; j < operation.materials.length; j++ ) {
      var materialImpl = operation.materials[j];

      // update any renames
      if( materialImpl.name === replaced ) {
        materialImpl.name = material.name;
        fireChange = true;

      // look to see if this operation has the updated material
      // recursively check complex elements
      } else if( materialController.contains(materialImpl, material.name, replaced) ) {
          fireChange = true;
      }

      if( fireChange ) {
        fireUpdate('operation-update', {
          operation: operation
        });
        break;
      }
    }
  }
}

function setFarmSize(size) {
  farmSize = size;
}

function getLastRecalcMsg() {
  return lastRecalcMsg;
}

function success() {
  return {success: true};
}

function setError(msg) {
  return {
    error : true,
    message : msg
  };
}

function warn(msg) {
  return {
    warning : true,
    message : msg
  };
}

function getCurrentTotal() {
  return currentTotal;
}

function addUpdateMaterial(operation, material) {
  var resp = utils.addUpdateMaterial(operation, material);
  fireUpdate('material-added',{
    material : material.name,
    operation : operation.name
  });
  return resp;
}

// fire event and general update event
function fireUpdate(e, details) {
  // give UI a sec to run
  setTimeout(function(){
    if( e ) {
      events.emit(e,details);
    }
    events.emit('update');
  }, 100);
}

module.exports = {
  add : add,
  get : get,
  remove : remove,
  bulkAdd : bulkAdd,
  find : find,
  on : function(event, listener){
    events.on(event, listener);
  },
  removeListener : function(event, listener){
    events.removeListener(event, listener);
  },
  recalc : recalc,
  init : init,
  getLastRecalcMsg : getLastRecalcMsg,
  addUpdateMaterial : addUpdateMaterial,
  replaceMaterial : utils.replaceMaterial,
  setFarmSize : setFarmSize,
  getCurrentTotal : getCurrentTotal,
  reset : reset,
  fireUpdate : fireUpdate
};

},{"../units":12,"./utils":6,"events":17,"node-uuid":18}],6:[function(require,module,exports){
'use strict';

var uuid = require('node-uuid');
var operationController;
var msPerDay = 86400000;

function init(controller) {
  operationController = controller;
}

function addUpdateMaterial(operation, materialImpl) {
  if( !materialImpl.id ) {
    materialImpl.id = uuid.v4();
    operation.materials.push(materialImpl);
    return {success:true, message: 'added'};
  }

  for( var i = 0; i < operation.materials.length; i++ ) {
    if( operation.materials[i].id === materialImpl.id ) {
      operation.materials[i] = materialImpl;
      return {success:true, message: 'updated'};
    }
  }

  operation.materials.push(materialImpl);
  return {success:true, message: 'added'};
}

function replaceMaterial(materialName, newId) {
  var ops = operationController.get();

  for( var i = 0; i < ops.length; i++ ) {
    for( var j = 0; j < ops[i].materials.length; j++ ) {
      if( ops[i].materials[j].name === materialName ) {
        ops[i].materials[j].id = newId;
      }
    }
  }
}

function calculatePerMonth(range) {

  var numMonths = getNumMonths(range);

  var months = [];

  if( !range.start ) {
    return months;
  }

  var last = range.start;
  months.push({
    month : toMonthString(last),
    total : 0
  });

  for( var i = 1; i < numMonths; i++ ) {
    last = nextMonth(last);

    months.push({
      month : toMonthString(last),
      total : 0
    });
  }

  var operations = operationController.get();
  for( var z = 0; z < operations.length; z++ ) {
    var operation = operations[z];
    if( !operation.schedule ) {
      continue;
    }

    for( var j = 0; j < operation.schedule.length; j++ ) {
      var date = operation.schedule[j];

      var d = toDate(date.date);
      var index = getMonthIndex(toMonthString(d), months);
      var length = getIntervalTime(date);

      for( i = 0; i < length; i++ ) {
        if( months.length <= i+index ) {
          months.push({
            month : toMonthString(d),
            total : 0
          });
        }

        months[i+index].total += (operation.subtotal / length);
        months[i+index][operation.name] = operation.subtotal / length;
      }
    }
  }

  return months;
}

function getMonthIndex(month, months) {
  var t = new Date().getTime();
  for( var i = 0; i < months.length; i++ ) {
    if( months[i].month === month ) {
      return i;
    }
  }
  return 0;
}

function toDate(dateStr) {
  var parts = dateStr.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
}

function toMonthString(date) {
  if( !date ) {
    return '1/1900';
  }
  return (date.getMonth()+1)+'/'+(date.getYear()+1900);
}

function nextMonth(date) {
  return new Date(date.getYear()+1900, date.getMonth()+1, date.getDate());
}

function getNumMonths(range) {
  if( !range.stop || !range.start ) {
    return 1;
  }

  var diff = range.stop.getTime() - range.start.getTime();
  if( diff < 86400000 * 30 ) {
    diff = 86400000 * 30;
  }

  // Months between years.
  var months = (range.stop.getFullYear() - range.start.getFullYear()) * 12;

  // Months between... months.
  months += range.stop.getMonth() - range.start.getMonth();

  // Subtract one month if b's date is less that a's.
  if (range.stop.getDate() < range.start.getDate()) {
      months--;
  }

  return months;

  //var days = diff / 86400000;
  //return Math.ceil(days / 30);
}

function getIntervalTime(date) {
  var l = parseInt(date.length);
  if( date.units === 'year' ) {
    return l * 12;
  } else if( date.units === 'month' ) {
    return l;
  } else {
    return 1;
  }
}

module.exports = {
  init : init,
  calculatePerMonth : calculatePerMonth,
  addUpdateMaterial : addUpdateMaterial,
  replaceMaterial : replaceMaterial
};

},{"node-uuid":18}],7:[function(require,module,exports){
'use strict';

var extend = require('extend');
var schema = require('./schema')();

var originalState = {};
var originalIds = {};

// set the initial state of a budget
function init(budget) {
  originalState = extend(true, {}, budget);
  originalIds = {};
  if( !originalState.materials ) {
    return;
  }
  for( var i = 0; i < originalState.materials.length; i++ ) {
    originalIds[originalState.materials[i].id] = 1;
  }
}

function checkBudget(budget) {
  if( !budget ) {
    return false;
  }
  if( !originalState ) {
    return false;
  }
  return hasChanges(schema.budget, originalState, budget);
}

function checkMaterials(materials) {
  var i;
  if( materials.length !== Object.keys(originalIds).length ) {
    return true;
  }

  for( i = 0; i < materials.length; i++ ) {
    if( !materials[i].id ) {
      continue;
    }
    if( !originalIds[materials[i].id] ) {
      return true;
    }
  }

  return false;
}

function materialChanges(materials, user) {
  var i, result = [];
  for( i = 0; i < materials.length; i++ ) {
    if( materials[i].fixed ) {
      continue;
    }

    if( materials[i].id === undefined ) {
      result.materials.push({
        name : materials[i].name,
        isNew : true,
        access : true,
        changes : true
      });
      continue;
    }

    var originalMaterial = getById(materials[i].id);

    if( originalMaterial.type !== materials[i].type ) {
      result.materials.push({
        changes : true,
        access : (user.authorities.indexOf(originalMaterial.authority) > -1) ? true : false,
        original : originalMaterial,
        id : materials[i].id
      });
    } else if( originalMaterial.type === 'complex' ) {
      result.materials.push({
        changes : hasChanges(schema.complexMaterial, originalMaterial, materials[i]),
        access : (user.authorities.indexOf(originalMaterial.authority) > -1) ? true : false,
        original : originalMaterial,
        id : materials[i].id
      });
    } else {
      result.materials.push({
        changes : hasChanges(schema.material, originalMaterial, materials[i]),
        access : (user.authorities.indexOf(originalMaterial.authority) > -1) ? true : false,
        original : originalMaterial,
        id : materials[i].id
      });
    }
  }
  return result;
}


// check the current state of a budget
// if user provided, permissions will be checked as well
function check(budget, user) {
  var result = {
    budget : {
      changes : false,
      access : false,
    },
    materials : []
  };


  result.budget.changes = hasChanges(schema.budget, originalState, budget);
  if( user.authorities.indexOf(budget.authority) > -1 ) {
    result.budget.access = true;
  }

  return result;
}

function getById(id) {
  for( var i = 0; i < originalState.materials.length; i++ ) {
    if( originalState.materials[i].id === id ) {
      return originalState.materials[i];
    }
  }
}

function hasChanges(schema, original, object) {
  for( var key in schema ) {
    if( original[key] === undefined || object[key] === undefined ) {
      if( keyDiff(key, original, object) ) {
        return true;
      }
      continue;
    }

    var param = schema[key], changes;

    if( param === 'string' || param === 'number') {
      if( original[key]+'' !== object[key]+'' ) {
        return true;
      }
    } else if ( Array.isArray(param) ) {

      if( keyDiff(key, original, object) ) {
        return true;
      } else if( param[0]._object_array_ ) {
        changes = checkObjectArray(param[0], original[key], object[key]);
        if( changes ) {
          return true;
        }
      } else if( original[key].length !== object[key].length ) {
        return true;
      }

      for( var i = 0; i < original[key].length; i++ ) {
        if( hasChanges(param[0], original[key][i], object[key][i]) ) {
          return true;
        }
      }

    } else if ( typeof param === 'object' ) {
      if( hasChanges(param, original[key], object[key]) ) {
        return true;
      }
    }
  }

  return false;
}

function checkObjectArray(param, original, object) {
  var key;
  for( key in original ) {
    if( !object[key] ) {
      return true;
    }

    var changes = hasChanges(param, original[key], object[key]);
    if( changes ) {
      return true;
    }
  }

  for( key in object ) {
    if( !original[key] ) {
      return true;
    }
  }
}

// MongoDB does not store empty arrays, so undefined === [] should not trip a change
function keyDiff(key, original, object) {
  if( original[key] === undefined || object[key] === undefined  ) {
    if( original[key] === undefined && object[key] !== undefined ) {
      if( Array.isArray(object[key]) && object[key].length === 0 ) {
        return false;
      }

      return true;
    } else if( original[key] !== undefined && object[key] === undefined ) {
      if( Array.isArray(original[key]) && original[key].length === 0 ) {
        return false;
      }

      return true;
    }
  }
  return false;
}

module.exports = {
  schema : schema,
  init : init,
  strip : require('./strip')
};

},{"./schema":8,"./strip":9,"extend":16}],8:[function(require,module,exports){
'use strict';

module.exports = function() {
  return {
    budget : {
      authority : 'string',
      locality : 'array',
      name : 'string',
      id : 'string',
      materialIds : 'array',
      reference : 'string',
      deleted : 'boolean',
      commodity : 'string',

      farm : {
        name : 'string',
        size : 'string',
        units : 'string'
      },

      operations : [{
        name : 'string',
        units : 'string',

        schedule : [{
          date : 'string',
          length : 'string',
          units : 'string'
        }],

        materials : [{
          amount : 'number',
          id : 'string',
          name : 'string',
          note : 'string',
          units : 'string'
        }]
      }]
    },

    material : {
      authority : 'string',
      source : 'string',
      class : 'string',
      id : 'string',
      locality : 'array',
      name : 'string',
      description : 'string',
      price : 'number',
      type : 'string',
      units : 'string',
      deleted : 'boolean'
    },

    complexMaterial : {
      authority : 'string',
      class : 'string',
      source : 'string',
      id : 'string',
      locality : 'array',
      name : 'string',
      description : 'string',
      type : 'string',
      units : 'string',
      deleted : 'boolean',

      materials : [{
        _object_array_ : true,
        amount : 'number',
        units : 'string'
      }],
      
      unique : [{
        _object_array_ : true,
        price : 'number',
        units : 'string'
      }]
    }
  };
};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function(schema, object) {
  return strip(schema, object);
};

function strip(schema, object) {
  for( var key in object ) {
    if( !schema[key] ) {
      delete object[key];
      continue;
    }

    var param = schema[key];

    if( param === 'string') {
      if( typeof object[key] !== 'string' ) {
        object[key] = object[key]+'';
      }
    } else if( param === 'number') {
      checkNum(key, object);
    } else if ( Array.isArray(param) ) {

      if( param[0]._object_array_ ) {
         cleanObjectArray(param[0], object[key]);
      } else {
        for( var i = 0; i < object[key].length; i++ ) {
          strip(param[0], object[key][i]);
        }
      }
    } else if ( typeof param === 'object' ) {
      strip(param, object[key]);
    }
  }
}

function cleanObjectArray(schema, object) {
  for( var key in object ) {
    strip(schema, object[key]);
  }
}

function checkNum(key, object) {
  if( typeof object[key] !== 'number' ) {
    try {
      var org = object[key];
      object[key] = parseFloat(object[key]);
      if( isNaN(object[key]) ) {
        object[key] = org;
      }
    } catch(e) {}

  }
}

},{}],10:[function(require,module,exports){
'use strict';

/**
 * Transform the plv8 object description to app object description.
 * in the end, this shouldn't do much.  just a little app sugar.
 **/

 module.exports = function(config) {
   var app = {
     classes : {},
     materials : [],
     operations : [],
     farm : {}
   };

   if( config.materials ) {
     app.materials = getMaterials(config.materials);
     app.classes = getClasses(app.materials);
   }
   if( config.prices ) {
     joinPrices(app.materials, config.prices);
   }

   if( config.farm ) {
     var farm = config.farm[0];
     app.farm = getFarm(farm);

     if( farm.operations ) {
       app.operations = getOperations(farm.operations);
     }
     if( farm.schedule ) {
       joinSchedule(app.operations, farm.schedule);
     }
   }

   return app;
 };

 function joinSchedule(operations, schedules) {
   for( var i = 0; i < schedules.length; i++ ) {
     var schedule = schedules[i];
     for( var j = 0; j < operations.length; j++ ) {
       if( schedule.operation === operations[j].name ) {
         var parts = schedule.duration.split(' ');

         if( parts[1].match(/mon/) ) {
           parts[1] = 'month';
         } else if ( parts[1].match(/year/) ) {
           parts[1] = 'year';
         } else {
           parts[1] = 'day';
         }

        operations[j].schedule.push({
          date : schedule.start,
          length : parts[0],
          units : parts[1]
        });

        break;
       }
     }
   }
 }

function joinPrices(materials, prices) {
  for( var i = 0; i < prices.length; i++ ) {
    var price = prices[i];
    var found = false;

    for( var j = 0; j < materials.length; j++ ) {
      if( materials[j].name === price.material ) {

        if( materials[j].type === 'complex' ) {
          materials[j].materials.Estimate = {
            units : 'us$',
            amount : price.price
          };
        } else {
          materials[j].price = price.price;
          materials[j].units = price.unit;
        }

        found = true;
        break;

      }
    }

    if( !found ) {
      /*console.log({
        name : price.material,
        price : price.price,
        units : price.unit
      });*/

      materials.push({
        name : price.material,
        price : price.price,
        units : price.unit
      }); // TODO: some materials do not seem to appear in material list
    }

  }
}

function getMaterials(info) {
  var materials = [];

  info.forEach(function(i){
    i.name = i.material;
    delete i.material;

    i.units = i.unit;
    delete i.unit;

    if( !i.requires ) {
      materials.push(i);
      return;
    }

    i.type = 'complex';
    i.materials = {};

    for( var j = 0; j < i.requires.length; j++ ) {
      i.materials[i.requires[j].material] = {
        amount : i.requires[j].amount,
        originalAmount : i.requires[j].amount,
        units : i.requires[j].unit
      };
    }

    delete i.requires;

    materials.push(i);
  });

  return materials;
}

function getOperations(info) {
  var ops = [];

  info.forEach(function(i){
    var op = {
      name : i.operation,
      materials : [],
      units : '[acr_us]',
      schedule : []
    };

    for( var j = 0; j < i.materials.length; j++ ) {
      i.materials[j].units = i.materials[j].unit;
      delete i.materials[j].unit;
      
      i.materials[j].name = i.materials[j].material;
      delete i.materials[j].material;

      op.materials.push(i.materials[j]);
    }

    ops.push(op);
  });

  return ops;
}

function getFarm(info) {
  var farm = {};
  for( var key in info ) {
    if( typeof info[key] === 'string' ) {
      farm[key] = info[key];
    }
  }
  return farm;
}

function getClasses(materials) {
  var classes = {};

  materials.forEach(function(material){
    if( classes[material.class] ) {
      classes[material.class].push(material.name);
    } else {
      classes[material.class] = [material.name];
    }
  });

  return classes;
}

},{}],11:[function(require,module,exports){
/**
 * helper file for things like UI selectors
 **/

var time = [
  {
    name : 'minute',
    symbol : 'min'
  },
  {
    name : 'hour',
    symbol : 'h'
  },
  {
    name : 'day',
    symbol : 'd'
  },
  {
    name : 'year',
    symbol : 'a'
  }
];

var length = [
  {
    name : 'centimeter',
    symbol : 'cm',
  },
  {
    name : 'inch',
    symbol : '[in_us]',
    accepted : ['in']
  },
  {
    name : 'foot',
    symbol : '[ft_us]',
    accepted : ['ft']
  },
  {
    name : 'meter',
    symbol : 'm',
  },
  {
    name : 'yard',
    symbol : '[yd_us]',
    accepted : ['yd']
  },
  {
    name : 'mile',
    symbol : '[mi_us]',
    accepted : ['mi']
  },
  {
    name : 'kilometer',
    symbol : 'km',
  }
];

var area = [
  {
    name : 'hectare',
    symbol : 'har',
    accept : ['ar']
  },
  {
    name : 'acre',
    symbol : '[acr_us]',
    accepted : ['ac']
  }
];

var weight = [
  {
    name : 'ounce',
    symbol : '[oz_av]',
    accepted : ['oz']
  },
  {
    name : 'pound',
    symbol : '[lb_av]',
    accepted : ['lb']
  }
];

var volume = [
  {
    name : 'cup',
    symbol : '[cup_us]'
  },
  {
    name : 'quart',
    symbol : '[qt_us]',
    accepted : ['qt']
  },
  {
    name : 'pint',
    symbol : '[pt_us]',
    accepted : ['pt']
  },
  {
    name : 'gallon',
    symbol : '[gal_us]',
    accepted : ['gal']
  },
  {
    name : 'fluid ounce',
    symbol : '[foz_us]',
    accepted : ['floz']
  }
];

var price = [
  {
    name : 'dollar',
    symbol : '',
    accepted : ['$', 'us$']
  }
];

module.exports = {
  price : price,
  volume : volume,
  weight : weight,
  time : time,
  length : length,
  area : area
}

},{}],12:[function(require,module,exports){
'use strict';

var definitions = require('./definitions');
var math = require('../model/unit_math');
var ucum = require('ucum.js');
var extend = require('extend');

var ucumCache = {};

var lookup = {};
for( var type in definitions ) {
  var array = definitions[type];

  for( var i = 0; i < array.length; i++ ) {
    array[i].type = type;

    lookup[array[i].name] = array[i];
    if( array[i].symbol ) {
      lookup[array[i].symbol] = array[i];
    }
    if( array[i].accepted ) {
      for( var j = 0; j < array[i].accepted.length; j++ ) {
        lookup[array[i].accepted[j]] = array[i];
      }
    }
  }
}

// get label for name.  mostly for getting us$ as $ or [us_gal] as gallon.
function getLabel(name, short) {
  var parts, label;

  if( name === undefined ) {
    return '';
  }

  if( name.indexOf('/') > -1 ) {
    parts = name.split('/');

    label = [];
    parts.forEach(function(p){
      label.push(getLabel(p, short));
    });

    return label.join('/');
  }

  if( name.indexOf('.') > -1 ) {
    parts = name.split('.');

    label = [];
    parts.forEach(function(p){
      label.push(getLabel(p, short));
    });

    return label.join('*');
  }

  var txt = name.toLowerCase();
  if( lookup[txt] ) {
    if( short ) {
      return lookup[txt].accepted ? lookup[txt].accepted[0] : lookup[txt].symbol;
    }
    return lookup[txt].name;
  }
  return name;
}

// get units of same type
function getLikeUnits(name) {
  var txt = name.toLowerCase();
  if( !lookup[txt] ) {
    return [];
  }

  return definitions[lookup[txt].type];
}

function invert(units) {
  units = math.cleanDollars(units);
  var result;
  try {
    result = ucumParse('1/('+units+')');
  } catch(e) {
    return units;
  }

  var d = [], n = [];
  for( var key in result.units ) {
    if( result.units[key] === -1 ) {
      d.push(key);
    } else {
      n.push(key);
    }
  }

  if( result.value > 1 ) {
    n.push(result.value);
  } else if ( result.value < 0 ) {
    d.push(1 / result.value);
  }

  units = n.join('.');

  if( units === '' ) {
    units = 'us$';
  }
  if( d.length > 0 ) {
    units += '/'+d.join('.');
  }

  return units;
}

function calculateOpMaterialPrice(materialDef, materialImpl) {
  var convert;

  // TODO: this is strange... mind is tired... is this correct?
  var units = materialDef.units;
  if( materialDef.type === 'complex' ) {
    units = '1/('+units+')';
  }

  if( materialImpl.amount === undefined ) {
    materialImpl.amount = 1;
  }

  convert = convertUnits(materialImpl.units, units);
  convert.debug2 = materialImpl.amount+' * '+materialDef.price+' * '+convert.value;
  convert.value = materialImpl.amount * materialDef.price * convert.value;

  return convert;
}

function calculateComplexPrice(materialDef, materialImpl, complexMaterial) {
  // TODO: this is strange... mind is tired... is this correct?
  var units = materialDef.units;
  if( materialDef.type === 'complex' ) {
    units = '1/('+units+')';
  }
  var convert = convertUnits(materialImpl.units, units);


  if( convert.error ) {
    return convert;
  } else if( Object.keys(convert.units).length > 1 ) {
    return {
      error: true,
      message : 'Units didn\'t cancel',
      math : materialImpl.units+' * '+materialDef.units
    };
  }

  if( materialImpl.amount === undefined ) {
    materialImpl.amount = 1;
  }

  convert.debug2 = materialImpl.amount+' * '+materialDef.price+' * '+convert.value;
  convert.value = materialImpl.amount * materialDef.price * convert.value;

  return convert;
}

function convertUnits(u1, u2) {
  var time = new Date().getTime();
  try {
    var t1 = math.cleanDollars(u1);
    var t2 = math.cleanDollars(u2);

    // try and see if we can fake it
    if( t2 === '1/'+t1 || t2 === '1/('+t1+')' || t1 === '1/'+t2 || t1 === '1/('+t2+')' || (t1 === '' && t2 === '') ) {
      return {
        value : 1,
        units : {},
        simple : true,
        debug : '('+t1+').('+t2+')'
      };
    }

    // we all blank units as dollars
    if( t1 === '' ) {
      t1 = 1;
    }
    if( t2 === '' ) {
      t2 = 1;
    }

    var tmp = '('+t1+').('+t2+')';
    //var t = ucum.canonicalize(tmp);
    var t = ucumParse(tmp);
    t.debug = tmp;
    return t;
  } catch(e) {
    return {
      error : true,
      message : 'Unable to convert units',
      math : u1+' * '+u2,
      debug : '('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+')'
    };
  }
}

function ucumParse(value) {
  if( ucumCache[value] ) {
    return extend(true, {}, ucumCache[value]);
  }
  var response = ucum.parse(value);
  ucumCache[value] = extend(true, {}, response);
  return response;
}

module.exports = {
  invert : invert,
  convertUnits : convertUnits,
  getLabel : getLabel,
  getLikeUnits : getLikeUnits,
  math : math,
  calculateComplexPrice : calculateComplexPrice,
  calculateOpMaterialPrice : calculateOpMaterialPrice,
  lookup : lookup,
  ucumParse : ucumParse
};

},{"../model/unit_math":4,"./definitions":11,"extend":16,"ucum.js":24}],13:[function(require,module,exports){
'use strict';

var uuid = require('node-uuid');
var extend = require('extend');
var states = require('./states');

var materialController, operationController;

var statesLookup = {};
for( var key in states ) {
  statesLookup[states[key].toLowerCase()] = key;
}

module.exports = function(oControl, mControl) {
  operationController = oControl;
  materialController = mControl;

  return {
    guid : function() {
      return uuid.v4();
    },
    hasAccess : hasAccess,
    queryHelper : queryHelper,
    getActiveMaterials : getActiveMaterials,
    states : states,
    statesLookup : statesLookup
  };
};

function hasAccess(user, authority) {
  if( !user ) {
    return false;
  }
  if( !user.authorities ) {
    return false;
  }
  if( user.authorities.indexOf(authority) > -1 ) {
    return true;
  }
  if( user.username === authority ) {
    return true;
  }

  return false;
}

// get materials currently in use by operations controller
function getActiveMaterials() {
  var materials = [];

  var operations = operationController.get();
  operations.forEach(function(op){
    _getActiveMaterials(op, materials);
  });

  materials.sort();
  return materials;
}

function _getActiveMaterials(obj, list) {
  if( !obj.materials ) {
    return;
  }

  for( var name in obj.materials ) {
    var def = materialController.get(name);

    if( list.indexOf(def.name) === -1 ) {
      list.push(def.name);
    }

    if( def.type === 'complex' ) {
      _getActiveMaterials(def, list);
    }
  }
}

function queryHelper(localities, crop, text) {
  var query = {};

  if( localities ) {
    var loc = extend(true, [], localities);

    if( loc.length === 1 ) {
      query.locality = loc[0].toLowerCase();
    } else if( loc.length === 2 ) {
      query.$and = [];
      appendToQuery(query.$and, loc);
    } else if( loc.length > 2 ){
      var orQuery = {$or : []};
      query.$and = [{locality: loc.splice(0,1)[0].toLowerCase()}, orQuery];
      appendToQuery(orQuery.$or, loc);
    }
  }

  if( crop ) {
    query.commodity = crop;
  }

  if( text ) {
    query.$text = { $search: text };
  }

  return query;
}

function appendToQuery(arr, filters) {
  for( var i = 0; i < filters.length; i++ ) {
    arr.push({locality: filters[i].toLowerCase()});
  }
}

},{"./states":14,"extend":16,"node-uuid":18}],14:[function(require,module,exports){
module.exports={
  "alabama": "AL",
  "alaska": "AK",
  "american samoa": "AS",
  "arizona": "AZ",
  "arkansas": "AR",
  "california": "CA",
  "colorado": "CO",
  "connecticut": "CT",
  "delaware": "DE",
  "district of columbia": "DC",
  "federated states of micronesia": "FM",
  "florida": "FL",
  "georgia": "GA",
  "guam": "GU",
  "hawaii": "HI",
  "idaho": "ID",
  "illinois": "IL",
  "indiana": "IN",
  "iowa": "IA",
  "kansas": "KS",
  "kentucky": "KY",
  "louisiana": "LA",
  "maine": "ME",
  "marshall islands": "MH",
  "maryland": "MD",
  "massachusetts": "MA",
  "michigan": "MI",
  "minnesota": "MN",
  "mississippi": "MS",
  "missouri": "MO",
  "montana": "MT",
  "nebraska": "NE",
  "nevada": "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  "northern mariana islands": "MP",
  "ohio": "OH",
  "oklahoma": "OK",
  "oregon": "OR",
  "palau": "PW",
  "pennsylvania": "PA",
  "puerto rico": "PR",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  "tennessee": "TN",
  "texas": "TX",
  "utah": "UT",
  "vermont": "VT",
  "virgin islands": "VI",
  "virginia": "VA",
  "washington": "WA",
  "west virginia": "WV",
  "wisconsin": "WI",
  "wyoming": "WY"
}

},{}],15:[function(require,module,exports){
(function (global){
/*!
 * deep-diff.
 * Licensed under the MIT License.
 */
;(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.DeepDiff = factory();
  }
}(this, function(undefined) {
  'use strict';

  var $scope, conflict, conflictResolution = [];
  if (typeof global === 'object' && global) {
    $scope = global;
  } else if (typeof window !== 'undefined') {
    $scope = window;
  } else {
    $scope = {};
  }
  conflict = $scope.DeepDiff;
  if (conflict) {
    conflictResolution.push(
      function() {
        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
          $scope.DeepDiff = conflict;
          conflict = undefined;
        }
      });
  }

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (subject instanceof Date) {
      return 'date';
    } else if (/^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    path = path || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined') {
      if (prefilter && prefilter(currentPath, key, { lhs: lhs, rhs: rhs })) {
        return;
      }
      currentPath.push(key);
    }
    var ltype = typeof lhs;
    var rtype = typeof rhs;
    if (ltype === 'undefined') {
      if (rtype !== 'undefined') {
        changes(new DiffNew(currentPath, rhs));
      }
    } else if (rtype === 'undefined') {
      changes(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (lhs instanceof Date && rhs instanceof Date && ((lhs - rhs) !== 0)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      stack = stack || [];
      if (stack.indexOf(lhs) < 0) {
        stack.push(lhs);
        if (Array.isArray(lhs)) {
          var i, len = lhs.length;
          for (i = 0; i < lhs.length; i++) {
            if (i >= rhs.length) {
              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
            } else {
              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
            }
          }
          while (i < rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          akeys.forEach(function(k, i) {
            var other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
              pkeys = arrayRemove(pkeys, other);
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
            }
          });
          pkeys.forEach(function(k) {
            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
          });
        }
        stack.length = stack.length - 1;
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    accum = accum || [];
    deepDiff(lhs, rhs,
      function(diff) {
        if (diff) {
          accum.push(diff);
        }
      },
      prefilter);
    return (accum.length) ? accum : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
        i = -1,
        last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
        i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function(change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      deepDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    observableDiff: {
      value: deepDiff,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function() {
        return 'undefined' !== typeof conflict;
      },
      enumerable: true
    },
    noConflict: {
      value: function() {
        if (conflictResolution) {
          conflictResolution.forEach(function(it) {
            it();
          });
          conflictResolution = null;
        }
        return accumulateDiff;
      },
      enumerable: true
    }
  });

  return accumulateDiff;
}));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],16:[function(require,module,exports){
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0],
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


},{}],17:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],18:[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

(function() {
  var _global = this;

  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var _rng;

  // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
  //
  // Moderately fast, high quality
  if (typeof(_global.require) == 'function') {
    try {
      var _rb = _global.require('crypto').randomBytes;
      _rng = _rb && function() {return _rb(16);};
    } catch(e) {}
  }

  if (!_rng && _global.crypto && crypto.getRandomValues) {
    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
    //
    // Moderately fast, high quality
    var _rnds8 = new Uint8Array(16);
    _rng = function whatwgRNG() {
      crypto.getRandomValues(_rnds8);
      return _rnds8;
    };
  }

  if (!_rng) {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var  _rnds = new Array(16);
    _rng = function() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return _rnds;
    };
  }

  // Buffer class to use
  var BufferClass = typeof(_global.Buffer) == 'function' ? _global.Buffer : Array;

  // Maps for number <-> hex string conversion
  var _byteToHex = [];
  var _hexToByte = {};
  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  // **`parse()` - Parse a UUID into it's component bytes**
  function parse(s, buf, offset) {
    var i = (buf && offset) || 0, ii = 0;

    buf = buf || [];
    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
      if (ii < 16) { // Don't overflow!
        buf[i + ii++] = _hexToByte[oct];
      }
    });

    // Zero out remaining bytes if string was short
    while (ii < 16) {
      buf[i + ii++] = 0;
    }

    return buf;
  }

  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
  function unparse(buf, offset) {
    var i = offset || 0, bth = _byteToHex;
    return  bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
  }

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = _rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [
    _seedBytes[0] | 0x01,
    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
  ];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0, _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = options.clockseq != null ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs != null ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    return buf ? buf : unparse(b);
  }

  // **`v4()` - Generate random UUID**

  // See https://github.com/broofa/node-uuid for API details
  function v4(options, buf, offset) {
    // Deprecated - 'format' argument, as supported in v1.2
    var i = buf && offset || 0;

    if (typeof(options) == 'string') {
      buf = options == 'binary' ? new BufferClass(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || _rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ii++) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || unparse(rnds);
  }

  // Export public API
  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;
  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;

  if (typeof(module) != 'undefined' && module.exports) {
    // Publish as node.js module
    module.exports = uuid;
  } else  if (typeof define === 'function' && define.amd) {
    // Publish as AMD module
    define(function() {return uuid;});
 

  } else {
    // Publish as global (in browsers)
    var _previousRoot = _global.uuid;

    // **`noConflict()` - (browser only) to reset global 'uuid' var**
    uuid.noConflict = function() {
      _global.uuid = _previousRoot;
      return uuid;
    };

    _global.uuid = uuid;
  }
}).call(this);

},{}],19:[function(require,module,exports){
module.exports={
  "10*": {
    "value": 10,
    "ucum": "1"
  },
  "10^": {
    "value": 10,
    "ucum": "1"
  },
  "[pi]": {
    "value": 3.141592653589793,
    "ucum": "1"
  },
  "%": {
    "value": 1,
    "ucum": "10*-2"
  },
  "[ppth]": {
    "value": 1,
    "ucum": "10*-3"
  },
  "[ppm]": {
    "value": 1,
    "ucum": "10*-6"
  },
  "[ppb]": {
    "value": 1,
    "ucum": "10*-9"
  },
  "[pptr]": {
    "value": 1,
    "ucum": "10*-12"
  },
  "mol": {
    "value": 6.0221367,
    "ucum": "10*23"
  },
  "sr": {
    "value": 1,
    "ucum": "rad2"
  },
  "Hz": {
    "value": 1,
    "ucum": "s-1"
  },
  "N": {
    "value": 1,
    "ucum": "kg.m/s2"
  },
  "Pa": {
    "value": 1,
    "ucum": "N/m2"
  },
  "J": {
    "value": 1,
    "ucum": "N.m"
  },
  "W": {
    "value": 1,
    "ucum": "J/s"
  },
  "A": {
    "value": 1,
    "ucum": "C/s"
  },
  "V": {
    "value": 1,
    "ucum": "J/C"
  },
  "F": {
    "value": 1,
    "ucum": "C/V"
  },
  "Ohm": {
    "value": 1,
    "ucum": "V/A"
  },
  "S": {
    "value": 1,
    "ucum": "Ohm-1"
  },
  "Wb": {
    "value": 1,
    "ucum": "V.s"
  },
  "Cel": {
    "value": null,
    "ucum": "cel(1 K)"
  },
  "T": {
    "value": 1,
    "ucum": "Wb/m2"
  },
  "H": {
    "value": 1,
    "ucum": "Wb/A"
  },
  "lm": {
    "value": 1,
    "ucum": "cd.sr"
  },
  "lx": {
    "value": 1,
    "ucum": "lm/m2"
  },
  "Bq": {
    "value": 1,
    "ucum": "s-1"
  },
  "Gy": {
    "value": 1,
    "ucum": "J/kg"
  },
  "Sv": {
    "value": 1,
    "ucum": "J/kg"
  },
  "gon": {
    "value": 0.9,
    "ucum": "deg"
  },
  "deg": {
    "value": 2,
    "ucum": "[pi].rad/360"
  },
  "'": {
    "value": 1,
    "ucum": "deg/60"
  },
  "''": {
    "value": 1,
    "ucum": "'/60"
  },
  "l": {
    "value": 1,
    "ucum": "dm3"
  },
  "L": {
    "value": 1,
    "ucum": "l"
  },
  "ar": {
    "value": 100,
    "ucum": "m2"
  },
  "min": {
    "value": 60,
    "ucum": "s"
  },
  "h": {
    "value": 60,
    "ucum": "min"
  },
  "d": {
    "value": 24,
    "ucum": "h"
  },
  "a_t": {
    "value": 365.24219,
    "ucum": "d"
  },
  "a_j": {
    "value": 365.25,
    "ucum": "d"
  },
  "a_g": {
    "value": 365.2425,
    "ucum": "d"
  },
  "a": {
    "value": 1,
    "ucum": "a_j"
  },
  "wk": {
    "value": 7,
    "ucum": "d"
  },
  "mo_s": {
    "value": 29.53059,
    "ucum": "d"
  },
  "mo_j": {
    "value": 1,
    "ucum": "a_j/12"
  },
  "mo_g": {
    "value": 1,
    "ucum": "a_g/12"
  },
  "mo": {
    "value": 1,
    "ucum": "mo_j"
  },
  "t": {
    "value": 1000,
    "ucum": "kg"
  },
  "bar": {
    "value": 100000,
    "ucum": "Pa"
  },
  "u": {
    "value": 1.6605402e-24,
    "ucum": "g"
  },
  "eV": {
    "value": 1,
    "ucum": "[e].V"
  },
  "AU": {
    "value": 149597.870691,
    "ucum": "Mm"
  },
  "pc": {
    "value": 30856780000000000,
    "ucum": "m"
  },
  "[c]": {
    "value": 299792458,
    "ucum": "m/s"
  },
  "[h]": {
    "value": 6.6260755e-24,
    "ucum": "J.s"
  },
  "[k]": {
    "value": 1.380658e-23,
    "ucum": "J/K"
  },
  "[eps_0]": {
    "value": 8.854187817e-12,
    "ucum": "F/m"
  },
  "[mu_0]": {
    "value": 1,
    "ucum": "4.[pi].10*-7.N/A2"
  },
  "[e]": {
    "value": 1.60217733e-19,
    "ucum": "C"
  },
  "[m_e]": {
    "value": 9.1093897e-28,
    "ucum": "g"
  },
  "[m_p]": {
    "value": 1.6726231e-24,
    "ucum": "g"
  },
  "[G]": {
    "value": 6.67259e-11,
    "ucum": "m3.kg-1.s-2"
  },
  "[g]": {
    "value": 9.80665,
    "ucum": "m/s2"
  },
  "atm": {
    "value": 101325,
    "ucum": "Pa"
  },
  "[ly]": {
    "value": 1,
    "ucum": "[c].a_j"
  },
  "gf": {
    "value": 1,
    "ucum": "g.[g]"
  },
  "[lbf_av]": {
    "value": 1,
    "ucum": "[lb_av].[g]"
  },
  "Ky": {
    "value": 1,
    "ucum": "cm-1"
  },
  "Gal": {
    "value": 1,
    "ucum": "cm/s2"
  },
  "dyn": {
    "value": 1,
    "ucum": "g.cm/s2"
  },
  "erg": {
    "value": 1,
    "ucum": "dyn.cm"
  },
  "P": {
    "value": 1,
    "ucum": "dyn.s/cm2"
  },
  "Bi": {
    "value": 10,
    "ucum": "A"
  },
  "St": {
    "value": 1,
    "ucum": "cm2/s"
  },
  "Mx": {
    "value": 1e-8,
    "ucum": "Wb"
  },
  "G": {
    "value": 0.0001,
    "ucum": "T"
  },
  "Oe": {
    "value": 250,
    "ucum": "/[pi].A/m"
  },
  "Gb": {
    "value": 1,
    "ucum": "Oe.cm"
  },
  "sb": {
    "value": 1,
    "ucum": "cd/cm2"
  },
  "Lmb": {
    "value": 1,
    "ucum": "cd/cm2/[pi]"
  },
  "ph": {
    "value": 0.0001,
    "ucum": "lx"
  },
  "Ci": {
    "value": 37000000000,
    "ucum": "Bq"
  },
  "R": {
    "value": 0.000258,
    "ucum": "C/kg"
  },
  "RAD": {
    "value": 100,
    "ucum": "erg/g"
  },
  "REM": {
    "value": 1,
    "ucum": "RAD"
  },
  "[in_i]": {
    "value": 2.54,
    "ucum": "cm"
  },
  "[ft_i]": {
    "value": 12,
    "ucum": "[in_i]"
  },
  "[yd_i]": {
    "value": 3,
    "ucum": "[ft_i]"
  },
  "[mi_i]": {
    "value": 5280,
    "ucum": "[ft_i]"
  },
  "[fth_i]": {
    "value": 6,
    "ucum": "[ft_i]"
  },
  "[nmi_i]": {
    "value": 1852,
    "ucum": "m"
  },
  "[kn_i]": {
    "value": 1,
    "ucum": "[nmi_i]/h"
  },
  "[sin_i]": {
    "value": 1,
    "ucum": "[in_i]2"
  },
  "[sft_i]": {
    "value": 1,
    "ucum": "[ft_i]2"
  },
  "[syd_i]": {
    "value": 1,
    "ucum": "[yd_i]2"
  },
  "[cin_i]": {
    "value": 1,
    "ucum": "[in_i]3"
  },
  "[cft_i]": {
    "value": 1,
    "ucum": "[ft_i]3"
  },
  "[cyd_i]": {
    "value": 1,
    "ucum": "[yd_i]3"
  },
  "[bf_i]": {
    "value": 144,
    "ucum": "[in_i]3"
  },
  "[cr_i]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[mil_i]": {
    "value": 0.001,
    "ucum": "[in_i]"
  },
  "[cml_i]": {
    "value": 1,
    "ucum": "[pi]/4.[mil_i]2"
  },
  "[hd_i]": {
    "value": 4,
    "ucum": "[in_i]"
  },
  "[ft_us]": {
    "value": 1200,
    "ucum": "m/3937"
  },
  "[yd_us]": {
    "value": 3,
    "ucum": "[ft_us]"
  },
  "[in_us]": {
    "value": 1,
    "ucum": "[ft_us]/12"
  },
  "[rd_us]": {
    "value": 16.5,
    "ucum": "[ft_us]"
  },
  "[ch_us]": {
    "value": 4,
    "ucum": "[rd_us]"
  },
  "[lk_us]": {
    "value": 1,
    "ucum": "[ch_us]/100"
  },
  "[rch_us]": {
    "value": 100,
    "ucum": "[ft_us]"
  },
  "[rlk_us]": {
    "value": 1,
    "ucum": "[rch_us]/100"
  },
  "[fth_us]": {
    "value": 6,
    "ucum": "[ft_us]"
  },
  "[fur_us]": {
    "value": 40,
    "ucum": "[rd_us]"
  },
  "[mi_us]": {
    "value": 8,
    "ucum": "[fur_us]"
  },
  "[acr_us]": {
    "value": 160,
    "ucum": "[rd_us]2"
  },
  "[srd_us]": {
    "value": 1,
    "ucum": "[rd_us]2"
  },
  "[smi_us]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[sct]": {
    "value": 1,
    "ucum": "[mi_us]2"
  },
  "[twp]": {
    "value": 36,
    "ucum": "[sct]"
  },
  "[mil_us]": {
    "value": 0.001,
    "ucum": "[in_us]"
  },
  "[in_br]": {
    "value": 2.539998,
    "ucum": "cm"
  },
  "[ft_br]": {
    "value": 12,
    "ucum": "[in_br]"
  },
  "[rd_br]": {
    "value": 16.5,
    "ucum": "[ft_br]"
  },
  "[ch_br]": {
    "value": 4,
    "ucum": "[rd_br]"
  },
  "[lk_br]": {
    "value": 1,
    "ucum": "[ch_br]/100"
  },
  "[fth_br]": {
    "value": 6,
    "ucum": "[ft_br]"
  },
  "[pc_br]": {
    "value": 2.5,
    "ucum": "[ft_br]"
  },
  "[yd_br]": {
    "value": 3,
    "ucum": "[ft_br]"
  },
  "[mi_br]": {
    "value": 5280,
    "ucum": "[ft_br]"
  },
  "[nmi_br]": {
    "value": 6080,
    "ucum": "[ft_br]"
  },
  "[kn_br]": {
    "value": 1,
    "ucum": "[nmi_br]/h"
  },
  "[acr_br]": {
    "value": 4840,
    "ucum": "[yd_br]2"
  },
  "[gal_us]": {
    "value": 231,
    "ucum": "[in_i]3"
  },
  "[bbl_us]": {
    "value": 42,
    "ucum": "[gal_us]"
  },
  "[qt_us]": {
    "value": 1,
    "ucum": "[gal_us]/4"
  },
  "[pt_us]": {
    "value": 1,
    "ucum": "[qt_us]/2"
  },
  "[gil_us]": {
    "value": 1,
    "ucum": "[pt_us]/4"
  },
  "[foz_us]": {
    "value": 1,
    "ucum": "[gil_us]/4"
  },
  "[fdr_us]": {
    "value": 1,
    "ucum": "[foz_us]/8"
  },
  "[min_us]": {
    "value": 1,
    "ucum": "[fdr_us]/60"
  },
  "[crd_us]": {
    "value": 128,
    "ucum": "[ft_i]3"
  },
  "[bu_us]": {
    "value": 2150.42,
    "ucum": "[in_i]3"
  },
  "[gal_wi]": {
    "value": 1,
    "ucum": "[bu_us]/8"
  },
  "[pk_us]": {
    "value": 1,
    "ucum": "[bu_us]/4"
  },
  "[dqt_us]": {
    "value": 1,
    "ucum": "[pk_us]/8"
  },
  "[dpt_us]": {
    "value": 1,
    "ucum": "[dqt_us]/2"
  },
  "[tbs_us]": {
    "value": 1,
    "ucum": "[foz_us]/2"
  },
  "[tsp_us]": {
    "value": 1,
    "ucum": "[tbs_us]/3"
  },
  "[cup_us]": {
    "value": 16,
    "ucum": "[tbs_us]"
  },
  "[foz_m]": {
    "value": 30,
    "ucum": "mL"
  },
  "[cup_m]": {
    "value": 240,
    "ucum": "mL"
  },
  "[tsp_m]": {
    "value": 5,
    "ucum": "mL"
  },
  "[tbs_m]": {
    "value": 15,
    "ucum": "mL"
  },
  "[gal_br]": {
    "value": 4.54609,
    "ucum": "l"
  },
  "[pk_br]": {
    "value": 2,
    "ucum": "[gal_br]"
  },
  "[bu_br]": {
    "value": 4,
    "ucum": "[pk_br]"
  },
  "[qt_br]": {
    "value": 1,
    "ucum": "[gal_br]/4"
  },
  "[pt_br]": {
    "value": 1,
    "ucum": "[qt_br]/2"
  },
  "[gil_br]": {
    "value": 1,
    "ucum": "[pt_br]/4"
  },
  "[foz_br]": {
    "value": 1,
    "ucum": "[gil_br]/5"
  },
  "[fdr_br]": {
    "value": 1,
    "ucum": "[foz_br]/8"
  },
  "[min_br]": {
    "value": 1,
    "ucum": "[fdr_br]/60"
  },
  "[gr]": {
    "value": 64.79891,
    "ucum": "mg"
  },
  "[lb_av]": {
    "value": 7000,
    "ucum": "[gr]"
  },
  "[oz_av]": {
    "value": 1,
    "ucum": "[lb_av]/16"
  },
  "[dr_av]": {
    "value": 1,
    "ucum": "[oz_av]/16"
  },
  "[scwt_av]": {
    "value": 100,
    "ucum": "[lb_av]"
  },
  "[lcwt_av]": {
    "value": 112,
    "ucum": "[lb_av]"
  },
  "[ston_av]": {
    "value": 20,
    "ucum": "[scwt_av]"
  },
  "[lton_av]": {
    "value": 20,
    "ucum": "[lcwt_av]"
  },
  "[stone_av]": {
    "value": 14,
    "ucum": "[lb_av]"
  },
  "[pwt_tr]": {
    "value": 24,
    "ucum": "[gr]"
  },
  "[oz_tr]": {
    "value": 20,
    "ucum": "[pwt_tr]"
  },
  "[lb_tr]": {
    "value": 12,
    "ucum": "[oz_tr]"
  },
  "[sc_ap]": {
    "value": 20,
    "ucum": "[gr]"
  },
  "[dr_ap]": {
    "value": 3,
    "ucum": "[sc_ap]"
  },
  "[oz_ap]": {
    "value": 8,
    "ucum": "[dr_ap]"
  },
  "[lb_ap]": {
    "value": 12,
    "ucum": "[oz_ap]"
  },
  "[oz_m]": {
    "value": 28,
    "ucum": "g"
  },
  "[lne]": {
    "value": 1,
    "ucum": "[in_i]/12"
  },
  "[pnt]": {
    "value": 1,
    "ucum": "[lne]/6"
  },
  "[pca]": {
    "value": 12,
    "ucum": "[pnt]"
  },
  "[pnt_pr]": {
    "value": 0.013837,
    "ucum": "[in_i]"
  },
  "[pca_pr]": {
    "value": 12,
    "ucum": "[pnt_pr]"
  },
  "[pied]": {
    "value": 32.48,
    "ucum": "cm"
  },
  "[pouce]": {
    "value": 1,
    "ucum": "[pied]/12"
  },
  "[ligne]": {
    "value": 1,
    "ucum": "[pouce]/12"
  },
  "[didot]": {
    "value": 1,
    "ucum": "[ligne]/6"
  },
  "[cicero]": {
    "value": 12,
    "ucum": "[didot]"
  },
  "[degF]": {
    "value": null,
    "ucum": "degf(5 K/9)"
  },
  "[degR]": {
    "value": 5,
    "ucum": "K/9"
  },
  "cal_[15]": {
    "value": 4.1858,
    "ucum": "J"
  },
  "cal_[20]": {
    "value": 4.1819,
    "ucum": "J"
  },
  "cal_m": {
    "value": 4.19002,
    "ucum": "J"
  },
  "cal_IT": {
    "value": 4.1868,
    "ucum": "J"
  },
  "cal_th": {
    "value": 4.184,
    "ucum": "J"
  },
  "cal": {
    "value": 1,
    "ucum": "cal_th"
  },
  "[Cal]": {
    "value": 1,
    "ucum": "kcal_th"
  },
  "[Btu_39]": {
    "value": 1.05967,
    "ucum": "kJ"
  },
  "[Btu_59]": {
    "value": 1.0548,
    "ucum": "kJ"
  },
  "[Btu_60]": {
    "value": 1.05468,
    "ucum": "kJ"
  },
  "[Btu_m]": {
    "value": 1.05587,
    "ucum": "kJ"
  },
  "[Btu_IT]": {
    "value": 1.05505585262,
    "ucum": "kJ"
  },
  "[Btu_th]": {
    "value": 1.05435,
    "ucum": "kJ"
  },
  "[Btu]": {
    "value": 1,
    "ucum": "[Btu_th]"
  },
  "[HP]": {
    "value": 550,
    "ucum": "[ft_i].[lbf_av]/s"
  },
  "tex": {
    "value": 1,
    "ucum": "g/km"
  },
  "[den]": {
    "value": 1,
    "ucum": "g/9/km"
  },
  "m[H2O]": {
    "value": 9.80665,
    "ucum": "kPa"
  },
  "m[Hg]": {
    "value": 133.322,
    "ucum": "kPa"
  },
  "[in_i'H2O]": {
    "value": 1,
    "ucum": "m[H2O].[in_i]/m"
  },
  "[in_i'Hg]": {
    "value": 1,
    "ucum": "m[Hg].[in_i]/m"
  },
  "[PRU]": {
    "value": 1,
    "ucum": "mm[Hg].s/ml"
  },
  "[wood'U]": {
    "value": 1,
    "ucum": "mm[Hg].min/L"
  },
  "[diop]": {
    "value": 1,
    "ucum": "/m"
  },
  "[p'diop]": {
    "value": null,
    "ucum": "100tan(1 rad)"
  },
  "%[slope]": {
    "value": null,
    "ucum": "100tan(1 rad)"
  },
  "[mesh_i]": {
    "value": 1,
    "ucum": "/[in_i]"
  },
  "[Ch]": {
    "value": 1,
    "ucum": "mm/3"
  },
  "[drp]": {
    "value": 1,
    "ucum": "ml/20"
  },
  "[hnsf'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MET]": {
    "value": 3.5,
    "ucum": "mL/min/kg"
  },
  "[hp'_X]": {
    "value": null,
    "ucum": "hpX(1 1)"
  },
  "[hp'_C]": {
    "value": null,
    "ucum": "hpC(1 1)"
  },
  "[hp'_M]": {
    "value": null,
    "ucum": "hpM(1 1)"
  },
  "[hp'_Q]": {
    "value": null,
    "ucum": "hpQ(1 1)"
  },
  "[hp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[hp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_X]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_C]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_M]": {
    "value": 1,
    "ucum": "1"
  },
  "[kp_Q]": {
    "value": 1,
    "ucum": "1"
  },
  "eq": {
    "value": 1,
    "ucum": "mol"
  },
  "osm": {
    "value": 1,
    "ucum": "mol"
  },
  "[pH]": {
    "value": null,
    "ucum": "pH(1 mol/l)"
  },
  "g%": {
    "value": 1,
    "ucum": "g/dl"
  },
  "[S]": {
    "value": 1,
    "ucum": "10*-13.s"
  },
  "[HPF]": {
    "value": 1,
    "ucum": "1"
  },
  "[LPF]": {
    "value": 100,
    "ucum": "1"
  },
  "kat": {
    "value": 1,
    "ucum": "mol/s"
  },
  "U": {
    "value": 1,
    "ucum": "umol/min"
  },
  "[iU]": {
    "value": 1,
    "ucum": "1"
  },
  "[IU]": {
    "value": 1,
    "ucum": "[iU]"
  },
  "[arb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[USP'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[GPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[MPL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[APL'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[beth'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[anti'Xa'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[todd'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[dye'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[smgy'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[bdsk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[ka'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[knk'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[mclg'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[tb'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[CCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[TCID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[EID_50]": {
    "value": 1,
    "ucum": "1"
  },
  "[PFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[FFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[CFU]": {
    "value": 1,
    "ucum": "1"
  },
  "[BAU]": {
    "value": 1,
    "ucum": "1"
  },
  "[AU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Amb'a'1'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[PNU]": {
    "value": 1,
    "ucum": "1"
  },
  "[Lf]": {
    "value": 1,
    "ucum": "1"
  },
  "[D'ag'U]": {
    "value": 1,
    "ucum": "1"
  },
  "[FEU]": {
    "value": 1,
    "ucum": "1"
  },
  "[ELU]": {
    "value": 1,
    "ucum": "1"
  },
  "[EU]": {
    "value": 1,
    "ucum": "1"
  },
  "Np": {
    "value": null,
    "ucum": "ln(1 1)"
  },
  "B": {
    "value": null,
    "ucum": "lg(1 1)"
  },
  "B[SPL]": {
    "value": null,
    "ucum": "2lg(2 10*-5.Pa)"
  },
  "B[V]": {
    "value": null,
    "ucum": "2lg(1 V)"
  },
  "B[mV]": {
    "value": null,
    "ucum": "2lg(1 mV)"
  },
  "B[uV]": {
    "value": null,
    "ucum": "2lg(1 uV)"
  },
  "B[10.nV]": {
    "value": null,
    "ucum": "2lg(10 nV)"
  },
  "B[W]": {
    "value": null,
    "ucum": "lg(1 W)"
  },
  "B[kW]": {
    "value": null,
    "ucum": "lg(1 kW)"
  },
  "st": {
    "value": 1,
    "ucum": "m3"
  },
  "Ao": {
    "value": 0.1,
    "ucum": "nm"
  },
  "b": {
    "value": 100,
    "ucum": "fm2"
  },
  "att": {
    "value": 1,
    "ucum": "kgf/cm2"
  },
  "mho": {
    "value": 1,
    "ucum": "S"
  },
  "[psi]": {
    "value": 1,
    "ucum": "[lbf_av]/[in_i]2"
  },
  "circ": {
    "value": 2,
    "ucum": "[pi].rad"
  },
  "sph": {
    "value": 4,
    "ucum": "[pi].sr"
  },
  "[car_m]": {
    "value": 0.2,
    "ucum": "g"
  },
  "[car_Au]": {
    "value": 1,
    "ucum": "/24"
  },
  "[smoot]": {
    "value": 67,
    "ucum": "[in_i]"
  },
  "bit_s": {
    "value": null,
    "ucum": "ld(1 1)"
  },
  "bit": {
    "value": 1,
    "ucum": "1"
  },
  "By": {
    "value": 8,
    "ucum": "bit"
  },
  "Bd": {
    "value": 1,
    "ucum": "/s"
  }
}

},{}],20:[function(require,module,exports){
module.exports={"mol":true,"sr":true,"Hz":true,"N":true,"Pa":true,"J":true,"W":true,"A":true,"V":true,"F":true,"Ohm":true,"S":true,"Wb":true,"Cel":true,"T":true,"H":true,"lm":true,"lx":true,"Bq":true,"Gy":true,"Sv":true,"l":true,"L":true,"ar":true,"t":true,"bar":true,"u":true,"eV":true,"pc":true,"[c]":true,"[h]":true,"[k]":true,"[eps_0]":true,"[mu_0]":true,"[e]":true,"[m_e]":true,"[m_p]":true,"[G]":true,"[g]":true,"[ly]":true,"gf":true,"Ky":true,"Gal":true,"dyn":true,"erg":true,"P":true,"Bi":true,"St":true,"Mx":true,"G":true,"Oe":true,"Gb":true,"sb":true,"Lmb":true,"ph":true,"Ci":true,"R":true,"RAD":true,"REM":true,"cal_[15]":true,"cal_[20]":true,"cal_m":true,"cal_IT":true,"cal_th":true,"cal":true,"tex":true,"m[H2O]":true,"m[Hg]":true,"eq":true,"osm":true,"g%":true,"kat":true,"U":true,"[iU]":true,"[IU]":true,"Np":true,"B":true,"B[SPL]":true,"B[V]":true,"B[mV]":true,"B[uV]":true,"B[10.nV]":true,"B[W]":true,"B[kW]":true,"st":true,"mho":true,"bit":true,"By":true,"Bd":true,"m":true,"s":true,"g":true,"rad":true,"K":true,"C":true,"cd":true}

},{}],21:[function(require,module,exports){
module.exports={
  "Y": 1e+24,
  "Z": 1e+21,
  "E": 1000000000000000000,
  "P": 1000000000000000,
  "T": 1000000000000,
  "G": 1000000000,
  "M": 1000000,
  "k": 1000,
  "h": 100,
  "da": 10,
  "d": 0.1,
  "c": 0.01,
  "m": 0.001,
  "u": 0.000001,
  "n": 1e-9,
  "p": 1e-12,
  "f": 1e-15,
  "a": 1e-18,
  "z": 1e-21,
  "y": 1e-24,
  "Ki": 1024,
  "Mi": 1048576,
  "Gi": 1073741824,
  "Ti": 1099511627776
}

},{}],22:[function(require,module,exports){
module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleIndices = { start: 0 },
        peg$startRuleIndex   = 0,

        peg$consts = [
          function(e) {
            return e ; // cleanup(e);
          },
          peg$FAILED,
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          function(e) {return multiply({value:1, units:{}}, [["/", e]]);},
          ".",
          { type: "literal", value: ".", description: "\".\"" },
          [],
          function(t, ms) {
            return multiply(t, ms);
          },
          null,
          function(e, exp) {return e.ann && exp;},
          void 0,
          function(e, exp) {
            return topower(e, exp);
          },
          function(d) {
           var ret = {
              value: d,
              units: {}
            };
            return ret;
          },
          function(u) {return u;},
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          function(e) {return e;},
          /^[+\-]/,
          { type: "class", value: "[+\\-]", description: "[+\\-]" },
          function(s, d) {return (s=="-") ? (-1*d) : d},
          function(p, a) {return(p && !ismetric(a));},
          function(p, a) {
            var ret = a;
            if (p) ret.value = ret.value * prefixes[p];
            return ret;
          },
          /^[0-9]/,
          { type: "class", value: "[0-9]", description: "[0-9]" },
          "e",
          { type: "literal", value: "e", description: "\"e\"" },
          function(v, epresent, e) {return (!epresent && !!e);},
          function(v, epresent, e) {
            return parseInt(v.join(""))*Math.pow(10, e||0);
          },
          "{",
          { type: "literal", value: "{", description: "\"{\"" },
          /^[^}]/,
          { type: "class", value: "[^}]", description: "[^}]" },
          "}",
          { type: "literal", value: "}", description: "\"}\"" },
          function(m) {return /[^\x00-\x7F]/.test(m);},
          function(m) { return {value: 1, units:{}, ann: m} },
          "[anti'Xa'U]",
          { type: "literal", value: "[anti'Xa'U]", description: "\"[anti'Xa'U]\"" },
          function(u) {return {value: 1, units: {"[anti'Xa'U]": 1}};},
          "[Amb'a'1'U]",
          { type: "literal", value: "[Amb'a'1'U]", description: "\"[Amb'a'1'U]\"" },
          function(u) {return {value: 1, units: {"[Amb'a'1'U]": 1}};},
          "[stone_av]",
          { type: "literal", value: "[stone_av]", description: "\"[stone_av]\"" },
          function(u) {return {value: 1, units: {"[stone_av]": 1}};},
          "[in_i'H2O]",
          { type: "literal", value: "[in_i'H2O]", description: "\"[in_i'H2O]\"" },
          function(u) {return {value: 1, units: {"[in_i'H2O]": 1}};},
          "[ston_av]",
          { type: "literal", value: "[ston_av]", description: "\"[ston_av]\"" },
          function(u) {return {value: 1, units: {"[ston_av]": 1}};},
          "[TCID_50]",
          { type: "literal", value: "[TCID_50]", description: "\"[TCID_50]\"" },
          function(u) {return {value: 1, units: {"[TCID_50]": 1}};},
          "[CCID_50]",
          { type: "literal", value: "[CCID_50]", description: "\"[CCID_50]\"" },
          function(u) {return {value: 1, units: {"[CCID_50]": 1}};},
          "[scwt_av]",
          { type: "literal", value: "[scwt_av]", description: "\"[scwt_av]\"" },
          function(u) {return {value: 1, units: {"[scwt_av]": 1}};},
          "[lcwt_av]",
          { type: "literal", value: "[lcwt_av]", description: "\"[lcwt_av]\"" },
          function(u) {return {value: 1, units: {"[lcwt_av]": 1}};},
          "[lton_av]",
          { type: "literal", value: "[lton_av]", description: "\"[lton_av]\"" },
          function(u) {return {value: 1, units: {"[lton_av]": 1}};},
          "[in_i'Hg]",
          { type: "literal", value: "[in_i'Hg]", description: "\"[in_i'Hg]\"" },
          function(u) {return {value: 1, units: {"[in_i'Hg]": 1}};},
          "[tbs_us]",
          { type: "literal", value: "[tbs_us]", description: "\"[tbs_us]\"" },
          function(u) {return {value: 1, units: {"[tbs_us]": 1}};},
          "[dpt_us]",
          { type: "literal", value: "[dpt_us]", description: "\"[dpt_us]\"" },
          function(u) {return {value: 1, units: {"[dpt_us]": 1}};},
          "[bdsk'U]",
          { type: "literal", value: "[bdsk'U]", description: "\"[bdsk'U]\"" },
          function(u) {return {value: 1, units: {"[bdsk'U]": 1}};},
          "[smgy'U]",
          { type: "literal", value: "[smgy'U]", description: "\"[smgy'U]\"" },
          function(u) {return {value: 1, units: {"[smgy'U]": 1}};},
          "[dqt_us]",
          { type: "literal", value: "[dqt_us]", description: "\"[dqt_us]\"" },
          function(u) {return {value: 1, units: {"[dqt_us]": 1}};},
          "[todd'U]",
          { type: "literal", value: "[todd'U]", description: "\"[todd'U]\"" },
          function(u) {return {value: 1, units: {"[todd'U]": 1}};},
          "[D'ag'U]",
          { type: "literal", value: "[D'ag'U]", description: "\"[D'ag'U]\"" },
          function(u) {return {value: 1, units: {"[D'ag'U]": 1}};},
          "[beth'U]",
          { type: "literal", value: "[beth'U]", description: "\"[beth'U]\"" },
          function(u) {return {value: 1, units: {"[beth'U]": 1}};},
          "[gal_wi]",
          { type: "literal", value: "[gal_wi]", description: "\"[gal_wi]\"" },
          function(u) {return {value: 1, units: {"[gal_wi]": 1}};},
          "[crd_us]",
          { type: "literal", value: "[crd_us]", description: "\"[crd_us]\"" },
          function(u) {return {value: 1, units: {"[crd_us]": 1}};},
          "[min_us]",
          { type: "literal", value: "[min_us]", description: "\"[min_us]\"" },
          function(u) {return {value: 1, units: {"[min_us]": 1}};},
          "[fdr_us]",
          { type: "literal", value: "[fdr_us]", description: "\"[fdr_us]\"" },
          function(u) {return {value: 1, units: {"[fdr_us]": 1}};},
          "[foz_us]",
          { type: "literal", value: "[foz_us]", description: "\"[foz_us]\"" },
          function(u) {return {value: 1, units: {"[foz_us]": 1}};},
          "[gil_us]",
          { type: "literal", value: "[gil_us]", description: "\"[gil_us]\"" },
          function(u) {return {value: 1, units: {"[gil_us]": 1}};},
          "[bbl_us]",
          { type: "literal", value: "[bbl_us]", description: "\"[bbl_us]\"" },
          function(u) {return {value: 1, units: {"[bbl_us]": 1}};},
          "[gal_us]",
          { type: "literal", value: "[gal_us]", description: "\"[gal_us]\"" },
          function(u) {return {value: 1, units: {"[gal_us]": 1}};},
          "[acr_br]",
          { type: "literal", value: "[acr_br]", description: "\"[acr_br]\"" },
          function(u) {return {value: 1, units: {"[acr_br]": 1}};},
          "[nmi_br]",
          { type: "literal", value: "[nmi_br]", description: "\"[nmi_br]\"" },
          function(u) {return {value: 1, units: {"[nmi_br]": 1}};},
          "[fth_br]",
          { type: "literal", value: "[fth_br]", description: "\"[fth_br]\"" },
          function(u) {return {value: 1, units: {"[fth_br]": 1}};},
          "[mil_us]",
          { type: "literal", value: "[mil_us]", description: "\"[mil_us]\"" },
          function(u) {return {value: 1, units: {"[mil_us]": 1}};},
          "[smi_us]",
          { type: "literal", value: "[smi_us]", description: "\"[smi_us]\"" },
          function(u) {return {value: 1, units: {"[smi_us]": 1}};},
          "[acr_us]",
          { type: "literal", value: "[acr_us]", description: "\"[acr_us]\"" },
          function(u) {return {value: 1, units: {"[acr_us]": 1}};},
          "[fur_us]",
          { type: "literal", value: "[fur_us]", description: "\"[fur_us]\"" },
          function(u) {return {value: 1, units: {"[fur_us]": 1}};},
          "[fth_us]",
          { type: "literal", value: "[fth_us]", description: "\"[fth_us]\"" },
          function(u) {return {value: 1, units: {"[fth_us]": 1}};},
          "[rlk_us]",
          { type: "literal", value: "[rlk_us]", description: "\"[rlk_us]\"" },
          function(u) {return {value: 1, units: {"[rlk_us]": 1}};},
          "[rch_us]",
          { type: "literal", value: "[rch_us]", description: "\"[rch_us]\"" },
          function(u) {return {value: 1, units: {"[rch_us]": 1}};},
          "[lbf_av]",
          { type: "literal", value: "[lbf_av]", description: "\"[lbf_av]\"" },
          function(u) {return {value: 1, units: {"[lbf_av]": 1}};},
          "[hnsf'U]",
          { type: "literal", value: "[hnsf'U]", description: "\"[hnsf'U]\"" },
          function(u) {return {value: 1, units: {"[hnsf'U]": 1}};},
          "[mesh_i]",
          { type: "literal", value: "[mesh_i]", description: "\"[mesh_i]\"" },
          function(u) {return {value: 1, units: {"[mesh_i]": 1}};},
          "%[slope]",
          { type: "literal", value: "%[slope]", description: "\"%[slope]\"" },
          function(u) {return {value: 1, units: {"%[slope]": 1}};},
          "[p'diop]",
          { type: "literal", value: "[p'diop]", description: "\"[p'diop]\"" },
          function(u) {return {value: 1, units: {"[p'diop]": 1}};},
          "[gil_br]",
          { type: "literal", value: "[gil_br]", description: "\"[gil_br]\"" },
          function(u) {return {value: 1, units: {"[gil_br]": 1}};},
          "[wood'U]",
          { type: "literal", value: "[wood'U]", description: "\"[wood'U]\"" },
          function(u) {return {value: 1, units: {"[wood'U]": 1}};},
          "cal_[15]",
          { type: "literal", value: "cal_[15]", description: "\"cal_[15]\"" },
          function(u) {return {value: 1, units: {"cal_[15]": 1}};},
          "cal_[20]",
          { type: "literal", value: "cal_[20]", description: "\"cal_[20]\"" },
          function(u) {return {value: 1, units: {"cal_[20]": 1}};},
          "[foz_br]",
          { type: "literal", value: "[foz_br]", description: "\"[foz_br]\"" },
          function(u) {return {value: 1, units: {"[foz_br]": 1}};},
          "[fdr_br]",
          { type: "literal", value: "[fdr_br]", description: "\"[fdr_br]\"" },
          function(u) {return {value: 1, units: {"[fdr_br]": 1}};},
          "[srd_us]",
          { type: "literal", value: "[srd_us]", description: "\"[srd_us]\"" },
          function(u) {return {value: 1, units: {"[srd_us]": 1}};},
          "[min_br]",
          { type: "literal", value: "[min_br]", description: "\"[min_br]\"" },
          function(u) {return {value: 1, units: {"[min_br]": 1}};},
          "[EID_50]",
          { type: "literal", value: "[EID_50]", description: "\"[EID_50]\"" },
          function(u) {return {value: 1, units: {"[EID_50]": 1}};},
          "[Btu_th]",
          { type: "literal", value: "[Btu_th]", description: "\"[Btu_th]\"" },
          function(u) {return {value: 1, units: {"[Btu_th]": 1}};},
          "[Btu_IT]",
          { type: "literal", value: "[Btu_IT]", description: "\"[Btu_IT]\"" },
          function(u) {return {value: 1, units: {"[Btu_IT]": 1}};},
          "[car_Au]",
          { type: "literal", value: "[car_Au]", description: "\"[car_Au]\"" },
          function(u) {return {value: 1, units: {"[car_Au]": 1}};},
          "[Btu_60]",
          { type: "literal", value: "[Btu_60]", description: "\"[Btu_60]\"" },
          function(u) {return {value: 1, units: {"[Btu_60]": 1}};},
          "[Btu_59]",
          { type: "literal", value: "[Btu_59]", description: "\"[Btu_59]\"" },
          function(u) {return {value: 1, units: {"[Btu_59]": 1}};},
          "[Btu_39]",
          { type: "literal", value: "[Btu_39]", description: "\"[Btu_39]\"" },
          function(u) {return {value: 1, units: {"[Btu_39]": 1}};},
          "[cup_us]",
          { type: "literal", value: "[cup_us]", description: "\"[cup_us]\"" },
          function(u) {return {value: 1, units: {"[cup_us]": 1}};},
          "B[10.nV]",
          { type: "literal", value: "B[10.nV]", description: "\"B[10.nV]\"" },
          function(u) {return {value: 1, units: {"B[10.nV]": 1}};},
          "[tsp_us]",
          { type: "literal", value: "[tsp_us]", description: "\"[tsp_us]\"" },
          function(u) {return {value: 1, units: {"[tsp_us]": 1}};},
          "[mclg'U]",
          { type: "literal", value: "[mclg'U]", description: "\"[mclg'U]\"" },
          function(u) {return {value: 1, units: {"[mclg'U]": 1}};},
          "[cicero]",
          { type: "literal", value: "[cicero]", description: "\"[cicero]\"" },
          function(u) {return {value: 1, units: {"[cicero]": 1}};},
          "[pwt_tr]",
          { type: "literal", value: "[pwt_tr]", description: "\"[pwt_tr]\"" },
          function(u) {return {value: 1, units: {"[pwt_tr]": 1}};},
          "[pnt_pr]",
          { type: "literal", value: "[pnt_pr]", description: "\"[pnt_pr]\"" },
          function(u) {return {value: 1, units: {"[pnt_pr]": 1}};},
          "[pca_pr]",
          { type: "literal", value: "[pca_pr]", description: "\"[pca_pr]\"" },
          function(u) {return {value: 1, units: {"[pca_pr]": 1}};},
          "[gal_br]",
          { type: "literal", value: "[gal_br]", description: "\"[gal_br]\"" },
          function(u) {return {value: 1, units: {"[gal_br]": 1}};},
          "[yd_us]",
          { type: "literal", value: "[yd_us]", description: "\"[yd_us]\"" },
          function(u) {return {value: 1, units: {"[yd_us]": 1}};},
          "[ligne]",
          { type: "literal", value: "[ligne]", description: "\"[ligne]\"" },
          function(u) {return {value: 1, units: {"[ligne]": 1}};},
          "[tbs_m]",
          { type: "literal", value: "[tbs_m]", description: "\"[tbs_m]\"" },
          function(u) {return {value: 1, units: {"[tbs_m]": 1}};},
          "[lb_ap]",
          { type: "literal", value: "[lb_ap]", description: "\"[lb_ap]\"" },
          function(u) {return {value: 1, units: {"[lb_ap]": 1}};},
          "[oz_ap]",
          { type: "literal", value: "[oz_ap]", description: "\"[oz_ap]\"" },
          function(u) {return {value: 1, units: {"[oz_ap]": 1}};},
          "[dr_ap]",
          { type: "literal", value: "[dr_ap]", description: "\"[dr_ap]\"" },
          function(u) {return {value: 1, units: {"[dr_ap]": 1}};},
          "[sc_ap]",
          { type: "literal", value: "[sc_ap]", description: "\"[sc_ap]\"" },
          function(u) {return {value: 1, units: {"[sc_ap]": 1}};},
          "[tsp_m]",
          { type: "literal", value: "[tsp_m]", description: "\"[tsp_m]\"" },
          function(u) {return {value: 1, units: {"[tsp_m]": 1}};},
          "[cup_m]",
          { type: "literal", value: "[cup_m]", description: "\"[cup_m]\"" },
          function(u) {return {value: 1, units: {"[cup_m]": 1}};},
          "[lb_tr]",
          { type: "literal", value: "[lb_tr]", description: "\"[lb_tr]\"" },
          function(u) {return {value: 1, units: {"[lb_tr]": 1}};},
          "[oz_tr]",
          { type: "literal", value: "[oz_tr]", description: "\"[oz_tr]\"" },
          function(u) {return {value: 1, units: {"[oz_tr]": 1}};},
          "[didot]",
          { type: "literal", value: "[didot]", description: "\"[didot]\"" },
          function(u) {return {value: 1, units: {"[didot]": 1}};},
          "[foz_m]",
          { type: "literal", value: "[foz_m]", description: "\"[foz_m]\"" },
          function(u) {return {value: 1, units: {"[foz_m]": 1}};},
          "[car_m]",
          { type: "literal", value: "[car_m]", description: "\"[car_m]\"" },
          function(u) {return {value: 1, units: {"[car_m]": 1}};},
          "[smoot]",
          { type: "literal", value: "[smoot]", description: "\"[smoot]\"" },
          function(u) {return {value: 1, units: {"[smoot]": 1}};},
          "[knk'U]",
          { type: "literal", value: "[knk'U]", description: "\"[knk'U]\"" },
          function(u) {return {value: 1, units: {"[knk'U]": 1}};},
          "[Btu_m]",
          { type: "literal", value: "[Btu_m]", description: "\"[Btu_m]\"" },
          function(u) {return {value: 1, units: {"[Btu_m]": 1}};},
          "[dr_av]",
          { type: "literal", value: "[dr_av]", description: "\"[dr_av]\"" },
          function(u) {return {value: 1, units: {"[dr_av]": 1}};},
          "[oz_av]",
          { type: "literal", value: "[oz_av]", description: "\"[oz_av]\"" },
          function(u) {return {value: 1, units: {"[oz_av]": 1}};},
          "[lb_av]",
          { type: "literal", value: "[lb_av]", description: "\"[lb_av]\"" },
          function(u) {return {value: 1, units: {"[lb_av]": 1}};},
          "[dye'U]",
          { type: "literal", value: "[dye'U]", description: "\"[dye'U]\"" },
          function(u) {return {value: 1, units: {"[dye'U]": 1}};},
          "[pk_us]",
          { type: "literal", value: "[pk_us]", description: "\"[pk_us]\"" },
          function(u) {return {value: 1, units: {"[pk_us]": 1}};},
          "[APL'U]",
          { type: "literal", value: "[APL'U]", description: "\"[APL'U]\"" },
          function(u) {return {value: 1, units: {"[APL'U]": 1}};},
          "[bu_us]",
          { type: "literal", value: "[bu_us]", description: "\"[bu_us]\"" },
          function(u) {return {value: 1, units: {"[bu_us]": 1}};},
          "[pt_br]",
          { type: "literal", value: "[pt_br]", description: "\"[pt_br]\"" },
          function(u) {return {value: 1, units: {"[pt_br]": 1}};},
          "[qt_br]",
          { type: "literal", value: "[qt_br]", description: "\"[qt_br]\"" },
          function(u) {return {value: 1, units: {"[qt_br]": 1}};},
          "[bu_br]",
          { type: "literal", value: "[bu_br]", description: "\"[bu_br]\"" },
          function(u) {return {value: 1, units: {"[bu_br]": 1}};},
          "[hp'_X]",
          { type: "literal", value: "[hp'_X]", description: "\"[hp'_X]\"" },
          function(u) {return {value: 1, units: {"[hp'_X]": 1}};},
          "[MPL'U]",
          { type: "literal", value: "[MPL'U]", description: "\"[MPL'U]\"" },
          function(u) {return {value: 1, units: {"[MPL'U]": 1}};},
          "[GPL'U]",
          { type: "literal", value: "[GPL'U]", description: "\"[GPL'U]\"" },
          function(u) {return {value: 1, units: {"[GPL'U]": 1}};},
          "[USP'U]",
          { type: "literal", value: "[USP'U]", description: "\"[USP'U]\"" },
          function(u) {return {value: 1, units: {"[USP'U]": 1}};},
          "[eps_0]",
          { type: "literal", value: "[eps_0]", description: "\"[eps_0]\"" },
          function(u) {return {value: 1, units: {"[eps_0]": 1}};},
          "[fth_i]",
          { type: "literal", value: "[fth_i]", description: "\"[fth_i]\"" },
          function(u) {return {value: 1, units: {"[fth_i]": 1}};},
          "[nmi_i]",
          { type: "literal", value: "[nmi_i]", description: "\"[nmi_i]\"" },
          function(u) {return {value: 1, units: {"[nmi_i]": 1}};},
          "[pt_us]",
          { type: "literal", value: "[pt_us]", description: "\"[pt_us]\"" },
          function(u) {return {value: 1, units: {"[pt_us]": 1}};},
          "[sin_i]",
          { type: "literal", value: "[sin_i]", description: "\"[sin_i]\"" },
          function(u) {return {value: 1, units: {"[sin_i]": 1}};},
          "[sft_i]",
          { type: "literal", value: "[sft_i]", description: "\"[sft_i]\"" },
          function(u) {return {value: 1, units: {"[sft_i]": 1}};},
          "[syd_i]",
          { type: "literal", value: "[syd_i]", description: "\"[syd_i]\"" },
          function(u) {return {value: 1, units: {"[syd_i]": 1}};},
          "[cin_i]",
          { type: "literal", value: "[cin_i]", description: "\"[cin_i]\"" },
          function(u) {return {value: 1, units: {"[cin_i]": 1}};},
          "[cft_i]",
          { type: "literal", value: "[cft_i]", description: "\"[cft_i]\"" },
          function(u) {return {value: 1, units: {"[cft_i]": 1}};},
          "[cyd_i]",
          { type: "literal", value: "[cyd_i]", description: "\"[cyd_i]\"" },
          function(u) {return {value: 1, units: {"[cyd_i]": 1}};},
          "[qt_us]",
          { type: "literal", value: "[qt_us]", description: "\"[qt_us]\"" },
          function(u) {return {value: 1, units: {"[qt_us]": 1}};},
          "[arb'U]",
          { type: "literal", value: "[arb'U]", description: "\"[arb'U]\"" },
          function(u) {return {value: 1, units: {"[arb'U]": 1}};},
          "[mil_i]",
          { type: "literal", value: "[mil_i]", description: "\"[mil_i]\"" },
          function(u) {return {value: 1, units: {"[mil_i]": 1}};},
          "[cml_i]",
          { type: "literal", value: "[cml_i]", description: "\"[cml_i]\"" },
          function(u) {return {value: 1, units: {"[cml_i]": 1}};},
          "[kn_br]",
          { type: "literal", value: "[kn_br]", description: "\"[kn_br]\"" },
          function(u) {return {value: 1, units: {"[kn_br]": 1}};},
          "[ft_us]",
          { type: "literal", value: "[ft_us]", description: "\"[ft_us]\"" },
          function(u) {return {value: 1, units: {"[ft_us]": 1}};},
          "[pouce]",
          { type: "literal", value: "[pouce]", description: "\"[pouce]\"" },
          function(u) {return {value: 1, units: {"[pouce]": 1}};},
          "[in_us]",
          { type: "literal", value: "[in_us]", description: "\"[in_us]\"" },
          function(u) {return {value: 1, units: {"[in_us]": 1}};},
          "[rd_us]",
          { type: "literal", value: "[rd_us]", description: "\"[rd_us]\"" },
          function(u) {return {value: 1, units: {"[rd_us]": 1}};},
          "[ch_us]",
          { type: "literal", value: "[ch_us]", description: "\"[ch_us]\"" },
          function(u) {return {value: 1, units: {"[ch_us]": 1}};},
          "[lk_us]",
          { type: "literal", value: "[lk_us]", description: "\"[lk_us]\"" },
          function(u) {return {value: 1, units: {"[lk_us]": 1}};},
          "[hp'_C]",
          { type: "literal", value: "[hp'_C]", description: "\"[hp'_C]\"" },
          function(u) {return {value: 1, units: {"[hp'_C]": 1}};},
          "[hp'_M]",
          { type: "literal", value: "[hp'_M]", description: "\"[hp'_M]\"" },
          function(u) {return {value: 1, units: {"[hp'_M]": 1}};},
          "[hp'_Q]",
          { type: "literal", value: "[hp'_Q]", description: "\"[hp'_Q]\"" },
          function(u) {return {value: 1, units: {"[hp'_Q]": 1}};},
          "[mi_br]",
          { type: "literal", value: "[mi_br]", description: "\"[mi_br]\"" },
          function(u) {return {value: 1, units: {"[mi_br]": 1}};},
          "[mi_us]",
          { type: "literal", value: "[mi_us]", description: "\"[mi_us]\"" },
          function(u) {return {value: 1, units: {"[mi_us]": 1}};},
          "[yd_br]",
          { type: "literal", value: "[yd_br]", description: "\"[yd_br]\"" },
          function(u) {return {value: 1, units: {"[yd_br]": 1}};},
          "[pk_br]",
          { type: "literal", value: "[pk_br]", description: "\"[pk_br]\"" },
          function(u) {return {value: 1, units: {"[pk_br]": 1}};},
          "[pc_br]",
          { type: "literal", value: "[pc_br]", description: "\"[pc_br]\"" },
          function(u) {return {value: 1, units: {"[pc_br]": 1}};},
          "[lk_br]",
          { type: "literal", value: "[lk_br]", description: "\"[lk_br]\"" },
          function(u) {return {value: 1, units: {"[lk_br]": 1}};},
          "[in_br]",
          { type: "literal", value: "[in_br]", description: "\"[in_br]\"" },
          function(u) {return {value: 1, units: {"[in_br]": 1}};},
          "[ft_br]",
          { type: "literal", value: "[ft_br]", description: "\"[ft_br]\"" },
          function(u) {return {value: 1, units: {"[ft_br]": 1}};},
          "[rd_br]",
          { type: "literal", value: "[rd_br]", description: "\"[rd_br]\"" },
          function(u) {return {value: 1, units: {"[rd_br]": 1}};},
          "[ch_br]",
          { type: "literal", value: "[ch_br]", description: "\"[ch_br]\"" },
          function(u) {return {value: 1, units: {"[ch_br]": 1}};},
          "[ft_i]",
          { type: "literal", value: "[ft_i]", description: "\"[ft_i]\"" },
          function(u) {return {value: 1, units: {"[ft_i]": 1}};},
          "[hp_Q]",
          { type: "literal", value: "[hp_Q]", description: "\"[hp_Q]\"" },
          function(u) {return {value: 1, units: {"[hp_Q]": 1}};},
          "[hp_M]",
          { type: "literal", value: "[hp_M]", description: "\"[hp_M]\"" },
          function(u) {return {value: 1, units: {"[hp_M]": 1}};},
          "[hp_C]",
          { type: "literal", value: "[hp_C]", description: "\"[hp_C]\"" },
          function(u) {return {value: 1, units: {"[hp_C]": 1}};},
          "[hp_X]",
          { type: "literal", value: "[hp_X]", description: "\"[hp_X]\"" },
          function(u) {return {value: 1, units: {"[hp_X]": 1}};},
          "[kp_C]",
          { type: "literal", value: "[kp_C]", description: "\"[kp_C]\"" },
          function(u) {return {value: 1, units: {"[kp_C]": 1}};},
          "[hd_i]",
          { type: "literal", value: "[hd_i]", description: "\"[hd_i]\"" },
          function(u) {return {value: 1, units: {"[hd_i]": 1}};},
          "[kp_M]",
          { type: "literal", value: "[kp_M]", description: "\"[kp_M]\"" },
          function(u) {return {value: 1, units: {"[kp_M]": 1}};},
          "[kp_Q]",
          { type: "literal", value: "[kp_Q]", description: "\"[kp_Q]\"" },
          function(u) {return {value: 1, units: {"[kp_Q]": 1}};},
          "[cr_i]",
          { type: "literal", value: "[cr_i]", description: "\"[cr_i]\"" },
          function(u) {return {value: 1, units: {"[cr_i]": 1}};},
          "[bf_i]",
          { type: "literal", value: "[bf_i]", description: "\"[bf_i]\"" },
          function(u) {return {value: 1, units: {"[bf_i]": 1}};},
          "[kn_i]",
          { type: "literal", value: "[kn_i]", description: "\"[kn_i]\"" },
          function(u) {return {value: 1, units: {"[kn_i]": 1}};},
          "[mu_0]",
          { type: "literal", value: "[mu_0]", description: "\"[mu_0]\"" },
          function(u) {return {value: 1, units: {"[mu_0]": 1}};},
          "[mi_i]",
          { type: "literal", value: "[mi_i]", description: "\"[mi_i]\"" },
          function(u) {return {value: 1, units: {"[mi_i]": 1}};},
          "[yd_i]",
          { type: "literal", value: "[yd_i]", description: "\"[yd_i]\"" },
          function(u) {return {value: 1, units: {"[yd_i]": 1}};},
          "[kp_X]",
          { type: "literal", value: "[kp_X]", description: "\"[kp_X]\"" },
          function(u) {return {value: 1, units: {"[kp_X]": 1}};},
          "[in_i]",
          { type: "literal", value: "[in_i]", description: "\"[in_i]\"" },
          function(u) {return {value: 1, units: {"[in_i]": 1}};},
          "[diop]",
          { type: "literal", value: "[diop]", description: "\"[diop]\"" },
          function(u) {return {value: 1, units: {"[diop]": 1}};},
          "cal_IT",
          { type: "literal", value: "cal_IT", description: "\"cal_IT\"" },
          function(u) {return {value: 1, units: {"cal_IT": 1}};},
          "cal_th",
          { type: "literal", value: "cal_th", description: "\"cal_th\"" },
          function(u) {return {value: 1, units: {"cal_th": 1}};},
          "m[H2O]",
          { type: "literal", value: "m[H2O]", description: "\"m[H2O]\"" },
          function(u) {return {value: 1, units: {"m[H2O]": 1}};},
          "[ka'U]",
          { type: "literal", value: "[ka'U]", description: "\"[ka'U]\"" },
          function(u) {return {value: 1, units: {"[ka'U]": 1}};},
          "B[SPL]",
          { type: "literal", value: "B[SPL]", description: "\"B[SPL]\"" },
          function(u) {return {value: 1, units: {"B[SPL]": 1}};},
          "[tb'U]",
          { type: "literal", value: "[tb'U]", description: "\"[tb'U]\"" },
          function(u) {return {value: 1, units: {"[tb'U]": 1}};},
          "[degR]",
          { type: "literal", value: "[degR]", description: "\"[degR]\"" },
          function(u) {return {value: 1, units: {"[degR]": 1}};},
          "[degF]",
          { type: "literal", value: "[degF]", description: "\"[degF]\"" },
          function(u) {return {value: 1, units: {"[degF]": 1}};},
          "[pptr]",
          { type: "literal", value: "[pptr]", description: "\"[pptr]\"" },
          function(u) {return {value: 1, units: {"[pptr]": 1}};},
          "[ppth]",
          { type: "literal", value: "[ppth]", description: "\"[ppth]\"" },
          function(u) {return {value: 1, units: {"[ppth]": 1}};},
          "[oz_m]",
          { type: "literal", value: "[oz_m]", description: "\"[oz_m]\"" },
          function(u) {return {value: 1, units: {"[oz_m]": 1}};},
          "[pied]",
          { type: "literal", value: "[pied]", description: "\"[pied]\"" },
          function(u) {return {value: 1, units: {"[pied]": 1}};},
          "[ppm]",
          { type: "literal", value: "[ppm]", description: "\"[ppm]\"" },
          function(u) {return {value: 1, units: {"[ppm]": 1}};},
          "[ppb]",
          { type: "literal", value: "[ppb]", description: "\"[ppb]\"" },
          function(u) {return {value: 1, units: {"[ppb]": 1}};},
          "bit_s",
          { type: "literal", value: "bit_s", description: "\"bit_s\"" },
          function(u) {return {value: 1, units: {"bit_s": 1}};},
          "[PNU]",
          { type: "literal", value: "[PNU]", description: "\"[PNU]\"" },
          function(u) {return {value: 1, units: {"[PNU]": 1}};},
          "[psi]",
          { type: "literal", value: "[psi]", description: "\"[psi]\"" },
          function(u) {return {value: 1, units: {"[psi]": 1}};},
          "[BAU]",
          { type: "literal", value: "[BAU]", description: "\"[BAU]\"" },
          function(u) {return {value: 1, units: {"[BAU]": 1}};},
          "[Cal]",
          { type: "literal", value: "[Cal]", description: "\"[Cal]\"" },
          function(u) {return {value: 1, units: {"[Cal]": 1}};},
          "B[mV]",
          { type: "literal", value: "B[mV]", description: "\"B[mV]\"" },
          function(u) {return {value: 1, units: {"B[mV]": 1}};},
          "B[uV]",
          { type: "literal", value: "B[uV]", description: "\"B[uV]\"" },
          function(u) {return {value: 1, units: {"B[uV]": 1}};},
          "[CFU]",
          { type: "literal", value: "[CFU]", description: "\"[CFU]\"" },
          function(u) {return {value: 1, units: {"[CFU]": 1}};},
          "[FFU]",
          { type: "literal", value: "[FFU]", description: "\"[FFU]\"" },
          function(u) {return {value: 1, units: {"[FFU]": 1}};},
          "B[kW]",
          { type: "literal", value: "B[kW]", description: "\"B[kW]\"" },
          function(u) {return {value: 1, units: {"B[kW]": 1}};},
          "[PFU]",
          { type: "literal", value: "[PFU]", description: "\"[PFU]\"" },
          function(u) {return {value: 1, units: {"[PFU]": 1}};},
          "cal_m",
          { type: "literal", value: "cal_m", description: "\"cal_m\"" },
          function(u) {return {value: 1, units: {"cal_m": 1}};},
          "[ELU]",
          { type: "literal", value: "[ELU]", description: "\"[ELU]\"" },
          function(u) {return {value: 1, units: {"[ELU]": 1}};},
          "[FEU]",
          { type: "literal", value: "[FEU]", description: "\"[FEU]\"" },
          function(u) {return {value: 1, units: {"[FEU]": 1}};},
          "[PRU]",
          { type: "literal", value: "[PRU]", description: "\"[PRU]\"" },
          function(u) {return {value: 1, units: {"[PRU]": 1}};},
          "[m_e]",
          { type: "literal", value: "[m_e]", description: "\"[m_e]\"" },
          function(u) {return {value: 1, units: {"[m_e]": 1}};},
          "[m_p]",
          { type: "literal", value: "[m_p]", description: "\"[m_p]\"" },
          function(u) {return {value: 1, units: {"[m_p]": 1}};},
          "m[Hg]",
          { type: "literal", value: "m[Hg]", description: "\"m[Hg]\"" },
          function(u) {return {value: 1, units: {"m[Hg]": 1}};},
          "[pca]",
          { type: "literal", value: "[pca]", description: "\"[pca]\"" },
          function(u) {return {value: 1, units: {"[pca]": 1}};},
          "[pnt]",
          { type: "literal", value: "[pnt]", description: "\"[pnt]\"" },
          function(u) {return {value: 1, units: {"[pnt]": 1}};},
          "[lne]",
          { type: "literal", value: "[lne]", description: "\"[lne]\"" },
          function(u) {return {value: 1, units: {"[lne]": 1}};},
          "[LPF]",
          { type: "literal", value: "[LPF]", description: "\"[LPF]\"" },
          function(u) {return {value: 1, units: {"[LPF]": 1}};},
          "[den]",
          { type: "literal", value: "[den]", description: "\"[den]\"" },
          function(u) {return {value: 1, units: {"[den]": 1}};},
          "[sct]",
          { type: "literal", value: "[sct]", description: "\"[sct]\"" },
          function(u) {return {value: 1, units: {"[sct]": 1}};},
          "[twp]",
          { type: "literal", value: "[twp]", description: "\"[twp]\"" },
          function(u) {return {value: 1, units: {"[twp]": 1}};},
          "[Btu]",
          { type: "literal", value: "[Btu]", description: "\"[Btu]\"" },
          function(u) {return {value: 1, units: {"[Btu]": 1}};},
          "[MET]",
          { type: "literal", value: "[MET]", description: "\"[MET]\"" },
          function(u) {return {value: 1, units: {"[MET]": 1}};},
          "[HPF]",
          { type: "literal", value: "[HPF]", description: "\"[HPF]\"" },
          function(u) {return {value: 1, units: {"[HPF]": 1}};},
          "[drp]",
          { type: "literal", value: "[drp]", description: "\"[drp]\"" },
          function(u) {return {value: 1, units: {"[drp]": 1}};},
          "[AU]",
          { type: "literal", value: "[AU]", description: "\"[AU]\"" },
          function(u) {return {value: 1, units: {"[AU]": 1}};},
          "[IU]",
          { type: "literal", value: "[IU]", description: "\"[IU]\"" },
          function(u) {return {value: 1, units: {"[IU]": 1}};},
          "mo_s",
          { type: "literal", value: "mo_s", description: "\"mo_s\"" },
          function(u) {return {value: 1, units: {"mo_s": 1}};},
          "[gr]",
          { type: "literal", value: "[gr]", description: "\"[gr]\"" },
          function(u) {return {value: 1, units: {"[gr]": 1}};},
          "circ",
          { type: "literal", value: "circ", description: "\"circ\"" },
          function(u) {return {value: 1, units: {"circ": 1}};},
          "[pi]",
          { type: "literal", value: "[pi]", description: "\"[pi]\"" },
          function(u) {return {value: 1, units: {"[pi]": 1}};},
          "[EU]",
          { type: "literal", value: "[EU]", description: "\"[EU]\"" },
          function(u) {return {value: 1, units: {"[EU]": 1}};},
          "[Lf]",
          { type: "literal", value: "[Lf]", description: "\"[Lf]\"" },
          function(u) {return {value: 1, units: {"[Lf]": 1}};},
          "mo_j",
          { type: "literal", value: "mo_j", description: "\"mo_j\"" },
          function(u) {return {value: 1, units: {"mo_j": 1}};},
          "B[W]",
          { type: "literal", value: "B[W]", description: "\"B[W]\"" },
          function(u) {return {value: 1, units: {"B[W]": 1}};},
          "B[V]",
          { type: "literal", value: "B[V]", description: "\"B[V]\"" },
          function(u) {return {value: 1, units: {"B[V]": 1}};},
          "mo_g",
          { type: "literal", value: "mo_g", description: "\"mo_g\"" },
          function(u) {return {value: 1, units: {"mo_g": 1}};},
          "[iU]",
          { type: "literal", value: "[iU]", description: "\"[iU]\"" },
          function(u) {return {value: 1, units: {"[iU]": 1}};},
          "[HP]",
          { type: "literal", value: "[HP]", description: "\"[HP]\"" },
          function(u) {return {value: 1, units: {"[HP]": 1}};},
          "[Ch]",
          { type: "literal", value: "[Ch]", description: "\"[Ch]\"" },
          function(u) {return {value: 1, units: {"[Ch]": 1}};},
          "[ly]",
          { type: "literal", value: "[ly]", description: "\"[ly]\"" },
          function(u) {return {value: 1, units: {"[ly]": 1}};},
          "[pH]",
          { type: "literal", value: "[pH]", description: "\"[pH]\"" },
          function(u) {return {value: 1, units: {"[pH]": 1}};},
          "a_j",
          { type: "literal", value: "a_j", description: "\"a_j\"" },
          function(u) {return {value: 1, units: {"a_j": 1}};},
          "rad",
          { type: "literal", value: "rad", description: "\"rad\"" },
          function(u) {return {value: 1, units: {"rad": 1}};},
          "a_t",
          { type: "literal", value: "a_t", description: "\"a_t\"" },
          function(u) {return {value: 1, units: {"a_t": 1}};},
          "Ohm",
          { type: "literal", value: "Ohm", description: "\"Ohm\"" },
          function(u) {return {value: 1, units: {"Ohm": 1}};},
          "sph",
          { type: "literal", value: "sph", description: "\"sph\"" },
          function(u) {return {value: 1, units: {"sph": 1}};},
          "bit",
          { type: "literal", value: "bit", description: "\"bit\"" },
          function(u) {return {value: 1, units: {"bit": 1}};},
          "mho",
          { type: "literal", value: "mho", description: "\"mho\"" },
          function(u) {return {value: 1, units: {"mho": 1}};},
          "min",
          { type: "literal", value: "min", description: "\"min\"" },
          function(u) {return {value: 1, units: {"min": 1}};},
          "mol",
          { type: "literal", value: "mol", description: "\"mol\"" },
          function(u) {return {value: 1, units: {"mol": 1}};},
          "deg",
          { type: "literal", value: "deg", description: "\"deg\"" },
          function(u) {return {value: 1, units: {"deg": 1}};},
          "gon",
          { type: "literal", value: "gon", description: "\"gon\"" },
          function(u) {return {value: 1, units: {"gon": 1}};},
          "Cel",
          { type: "literal", value: "Cel", description: "\"Cel\"" },
          function(u) {return {value: 1, units: {"Cel": 1}};},
          "kat",
          { type: "literal", value: "kat", description: "\"kat\"" },
          function(u) {return {value: 1, units: {"kat": 1}};},
          "att",
          { type: "literal", value: "att", description: "\"att\"" },
          function(u) {return {value: 1, units: {"att": 1}};},
          "osm",
          { type: "literal", value: "osm", description: "\"osm\"" },
          function(u) {return {value: 1, units: {"osm": 1}};},
          "tex",
          { type: "literal", value: "tex", description: "\"tex\"" },
          function(u) {return {value: 1, units: {"tex": 1}};},
          "cal",
          { type: "literal", value: "cal", description: "\"cal\"" },
          function(u) {return {value: 1, units: {"cal": 1}};},
          "REM",
          { type: "literal", value: "REM", description: "\"REM\"" },
          function(u) {return {value: 1, units: {"REM": 1}};},
          "RAD",
          { type: "literal", value: "RAD", description: "\"RAD\"" },
          function(u) {return {value: 1, units: {"RAD": 1}};},
          "a_g",
          { type: "literal", value: "a_g", description: "\"a_g\"" },
          function(u) {return {value: 1, units: {"a_g": 1}};},
          "Lmb",
          { type: "literal", value: "Lmb", description: "\"Lmb\"" },
          function(u) {return {value: 1, units: {"Lmb": 1}};},
          "atm",
          { type: "literal", value: "atm", description: "\"atm\"" },
          function(u) {return {value: 1, units: {"atm": 1}};},
          "erg",
          { type: "literal", value: "erg", description: "\"erg\"" },
          function(u) {return {value: 1, units: {"erg": 1}};},
          "dyn",
          { type: "literal", value: "dyn", description: "\"dyn\"" },
          function(u) {return {value: 1, units: {"dyn": 1}};},
          "Gal",
          { type: "literal", value: "Gal", description: "\"Gal\"" },
          function(u) {return {value: 1, units: {"Gal": 1}};},
          "10^",
          { type: "literal", value: "10^", description: "\"10^\"" },
          function(u) {return {value: 1, units: {"10^": 1}};},
          "10*",
          { type: "literal", value: "10*", description: "\"10*\"" },
          function(u) {return {value: 1, units: {"10*": 1}};},
          "[S]",
          { type: "literal", value: "[S]", description: "\"[S]\"" },
          function(u) {return {value: 1, units: {"[S]": 1}};},
          "[g]",
          { type: "literal", value: "[g]", description: "\"[g]\"" },
          function(u) {return {value: 1, units: {"[g]": 1}};},
          "[G]",
          { type: "literal", value: "[G]", description: "\"[G]\"" },
          function(u) {return {value: 1, units: {"[G]": 1}};},
          "[e]",
          { type: "literal", value: "[e]", description: "\"[e]\"" },
          function(u) {return {value: 1, units: {"[e]": 1}};},
          "[k]",
          { type: "literal", value: "[k]", description: "\"[k]\"" },
          function(u) {return {value: 1, units: {"[k]": 1}};},
          "[h]",
          { type: "literal", value: "[h]", description: "\"[h]\"" },
          function(u) {return {value: 1, units: {"[h]": 1}};},
          "[c]",
          { type: "literal", value: "[c]", description: "\"[c]\"" },
          function(u) {return {value: 1, units: {"[c]": 1}};},
          "bar",
          { type: "literal", value: "bar", description: "\"bar\"" },
          function(u) {return {value: 1, units: {"bar": 1}};},
          "lm",
          { type: "literal", value: "lm", description: "\"lm\"" },
          function(u) {return {value: 1, units: {"lm": 1}};},
          "Ci",
          { type: "literal", value: "Ci", description: "\"Ci\"" },
          function(u) {return {value: 1, units: {"Ci": 1}};},
          "ph",
          { type: "literal", value: "ph", description: "\"ph\"" },
          function(u) {return {value: 1, units: {"ph": 1}};},
          "cd",
          { type: "literal", value: "cd", description: "\"cd\"" },
          function(u) {return {value: 1, units: {"cd": 1}};},
          "Ao",
          { type: "literal", value: "Ao", description: "\"Ao\"" },
          function(u) {return {value: 1, units: {"Ao": 1}};},
          "Wb",
          { type: "literal", value: "Wb", description: "\"Wb\"" },
          function(u) {return {value: 1, units: {"Wb": 1}};},
          "Gb",
          { type: "literal", value: "Gb", description: "\"Gb\"" },
          function(u) {return {value: 1, units: {"Gb": 1}};},
          "Oe",
          { type: "literal", value: "Oe", description: "\"Oe\"" },
          function(u) {return {value: 1, units: {"Oe": 1}};},
          "lx",
          { type: "literal", value: "lx", description: "\"lx\"" },
          function(u) {return {value: 1, units: {"lx": 1}};},
          "Mx",
          { type: "literal", value: "Mx", description: "\"Mx\"" },
          function(u) {return {value: 1, units: {"Mx": 1}};},
          "St",
          { type: "literal", value: "St", description: "\"St\"" },
          function(u) {return {value: 1, units: {"St": 1}};},
          "Bi",
          { type: "literal", value: "Bi", description: "\"Bi\"" },
          function(u) {return {value: 1, units: {"Bi": 1}};},
          "Bq",
          { type: "literal", value: "Bq", description: "\"Bq\"" },
          function(u) {return {value: 1, units: {"Bq": 1}};},
          "Np",
          { type: "literal", value: "Np", description: "\"Np\"" },
          function(u) {return {value: 1, units: {"Np": 1}};},
          "AU",
          { type: "literal", value: "AU", description: "\"AU\"" },
          function(u) {return {value: 1, units: {"AU": 1}};},
          "mo",
          { type: "literal", value: "mo", description: "\"mo\"" },
          function(u) {return {value: 1, units: {"mo": 1}};},
          "Ky",
          { type: "literal", value: "Ky", description: "\"Ky\"" },
          function(u) {return {value: 1, units: {"Ky": 1}};},
          "gf",
          { type: "literal", value: "gf", description: "\"gf\"" },
          function(u) {return {value: 1, units: {"gf": 1}};},
          "wk",
          { type: "literal", value: "wk", description: "\"wk\"" },
          function(u) {return {value: 1, units: {"wk": 1}};},
          "Pa",
          { type: "literal", value: "Pa", description: "\"Pa\"" },
          function(u) {return {value: 1, units: {"Pa": 1}};},
          "g%",
          { type: "literal", value: "g%", description: "\"g%\"" },
          function(u) {return {value: 1, units: {"g%": 1}};},
          "sr",
          { type: "literal", value: "sr", description: "\"sr\"" },
          function(u) {return {value: 1, units: {"sr": 1}};},
          "Bd",
          { type: "literal", value: "Bd", description: "\"Bd\"" },
          function(u) {return {value: 1, units: {"Bd": 1}};},
          "eq",
          { type: "literal", value: "eq", description: "\"eq\"" },
          function(u) {return {value: 1, units: {"eq": 1}};},
          "By",
          { type: "literal", value: "By", description: "\"By\"" },
          function(u) {return {value: 1, units: {"By": 1}};},
          "Hz",
          { type: "literal", value: "Hz", description: "\"Hz\"" },
          function(u) {return {value: 1, units: {"Hz": 1}};},
          "''",
          { type: "literal", value: "''", description: "\"''\"" },
          function(u) {return {value: 1, units: {"''": 1}};},
          "pc",
          { type: "literal", value: "pc", description: "\"pc\"" },
          function(u) {return {value: 1, units: {"pc": 1}};},
          "eV",
          { type: "literal", value: "eV", description: "\"eV\"" },
          function(u) {return {value: 1, units: {"eV": 1}};},
          "Gy",
          { type: "literal", value: "Gy", description: "\"Gy\"" },
          function(u) {return {value: 1, units: {"Gy": 1}};},
          "st",
          { type: "literal", value: "st", description: "\"st\"" },
          function(u) {return {value: 1, units: {"st": 1}};},
          "Sv",
          { type: "literal", value: "Sv", description: "\"Sv\"" },
          function(u) {return {value: 1, units: {"Sv": 1}};},
          "ar",
          { type: "literal", value: "ar", description: "\"ar\"" },
          function(u) {return {value: 1, units: {"ar": 1}};},
          "sb",
          { type: "literal", value: "sb", description: "\"sb\"" },
          function(u) {return {value: 1, units: {"sb": 1}};},
          "L",
          { type: "literal", value: "L", description: "\"L\"" },
          function(u) {return {value: 1, units: {"L": 1}};},
          "t",
          { type: "literal", value: "t", description: "\"t\"" },
          function(u) {return {value: 1, units: {"t": 1}};},
          "u",
          { type: "literal", value: "u", description: "\"u\"" },
          function(u) {return {value: 1, units: {"u": 1}};},
          "P",
          { type: "literal", value: "P", description: "\"P\"" },
          function(u) {return {value: 1, units: {"P": 1}};},
          "G",
          { type: "literal", value: "G", description: "\"G\"" },
          function(u) {return {value: 1, units: {"G": 1}};},
          "R",
          { type: "literal", value: "R", description: "\"R\"" },
          function(u) {return {value: 1, units: {"R": 1}};},
          "H",
          { type: "literal", value: "H", description: "\"H\"" },
          function(u) {return {value: 1, units: {"H": 1}};},
          "T",
          { type: "literal", value: "T", description: "\"T\"" },
          function(u) {return {value: 1, units: {"T": 1}};},
          "U",
          { type: "literal", value: "U", description: "\"U\"" },
          function(u) {return {value: 1, units: {"U": 1}};},
          "B",
          { type: "literal", value: "B", description: "\"B\"" },
          function(u) {return {value: 1, units: {"B": 1}};},
          "S",
          { type: "literal", value: "S", description: "\"S\"" },
          function(u) {return {value: 1, units: {"S": 1}};},
          "m",
          { type: "literal", value: "m", description: "\"m\"" },
          function(u) {return {value: 1, units: {"m": 1}};},
          "s",
          { type: "literal", value: "s", description: "\"s\"" },
          function(u) {return {value: 1, units: {"s": 1}};},
          "F",
          { type: "literal", value: "F", description: "\"F\"" },
          function(u) {return {value: 1, units: {"F": 1}};},
          "l",
          { type: "literal", value: "l", description: "\"l\"" },
          function(u) {return {value: 1, units: {"l": 1}};},
          "V",
          { type: "literal", value: "V", description: "\"V\"" },
          function(u) {return {value: 1, units: {"V": 1}};},
          "A",
          { type: "literal", value: "A", description: "\"A\"" },
          function(u) {return {value: 1, units: {"A": 1}};},
          "W",
          { type: "literal", value: "W", description: "\"W\"" },
          function(u) {return {value: 1, units: {"W": 1}};},
          "K",
          { type: "literal", value: "K", description: "\"K\"" },
          function(u) {return {value: 1, units: {"K": 1}};},
          "C",
          { type: "literal", value: "C", description: "\"C\"" },
          function(u) {return {value: 1, units: {"C": 1}};},
          "b",
          { type: "literal", value: "b", description: "\"b\"" },
          function(u) {return {value: 1, units: {"b": 1}};},
          "%",
          { type: "literal", value: "%", description: "\"%\"" },
          function(u) {return {value: 1, units: {"%": 1}};},
          "J",
          { type: "literal", value: "J", description: "\"J\"" },
          function(u) {return {value: 1, units: {"J": 1}};},
          "'",
          { type: "literal", value: "'", description: "\"'\"" },
          function(u) {return {value: 1, units: {"'": 1}};},
          "h",
          { type: "literal", value: "h", description: "\"h\"" },
          function(u) {return {value: 1, units: {"h": 1}};},
          "d",
          { type: "literal", value: "d", description: "\"d\"" },
          function(u) {return {value: 1, units: {"d": 1}};},
          "N",
          { type: "literal", value: "N", description: "\"N\"" },
          function(u) {return {value: 1, units: {"N": 1}};},
          "a",
          { type: "literal", value: "a", description: "\"a\"" },
          function(u) {return {value: 1, units: {"a": 1}};},
          "g",
          { type: "literal", value: "g", description: "\"g\"" },
          function(u) {return {value: 1, units: {"g": 1}};},
          "Y",
          { type: "literal", value: "Y", description: "\"Y\"" },
          "Z",
          { type: "literal", value: "Z", description: "\"Z\"" },
          "E",
          { type: "literal", value: "E", description: "\"E\"" },
          "M",
          { type: "literal", value: "M", description: "\"M\"" },
          "k",
          { type: "literal", value: "k", description: "\"k\"" },
          "da",
          { type: "literal", value: "da", description: "\"da\"" },
          "c",
          { type: "literal", value: "c", description: "\"c\"" },
          "n",
          { type: "literal", value: "n", description: "\"n\"" },
          "p",
          { type: "literal", value: "p", description: "\"p\"" },
          "f",
          { type: "literal", value: "f", description: "\"f\"" },
          "z",
          { type: "literal", value: "z", description: "\"z\"" },
          "y",
          { type: "literal", value: "y", description: "\"y\"" },
          "Ki",
          { type: "literal", value: "Ki", description: "\"Ki\"" },
          "Mi",
          { type: "literal", value: "Mi", description: "\"Mi\"" },
          "Gi",
          { type: "literal", value: "Gi", description: "\"Gi\"" },
          "Ti",
          { type: "literal", value: "Ti", description: "\"Ti\"" }
        ],

        peg$bytecode = [
          peg$decode("!7!+' 4!6 !! %"),
          peg$decode("!.\"\"\"2\"3#+2$7#+(%4\"6$\"! %$\"# !\"# !*# \"7#"),
          peg$decode("!.%\"\"2%3&+-$7$+#%'\"%$\"# !\"# !*> \"!.\"\"\"2\"3#+-$7$+#%'\"%$\"# !\"# !"),
          peg$decode("!7$+;$ '7\",#&7\"\"+)%4\"6(\"\"! %$\"# !\"# !"),
          peg$decode("!7%+c$7&*# \" )+S% '7),#&7)\"+A%56* \"\"!)##\" !\" ++)%4$6,$\"#\"%$$# !$## !$\"# !\"# !*E \"!7(+:$ '7),#&7)\"+(%4\"6-\"!!%$\"# !\"# !"),
          peg$decode("!7'+' 4!6.!! %*Y \"!./\"\"2/30+B$7#+8%.1\"\"2132+(%4#63#!!%$## !$\"# !\"# !*# \"7)"),
          peg$decode("!04\"\"1!35*# \" )+3$7(+)%4\"66\"\"! %$\"# !\"# !"),
          peg$decode("!7+*# \" )+K$7*+A%567 \"! )##\" !\" ++)%4#68#\"\"!%$## !$\"# !\"# !*# \"7*"),
          peg$decode("! '09\"\"1!3:+,$,)&09\"\"1!3:\"\"\" !+i$.;\"\"2;3<*# \" )+S%7&*# \" )+C%56= #\"! )##\" !\" ++*%4$6>$##\"!%$$# !$## !$\"# !\"# !"),
          peg$decode("!.?\"\"2?3@+t$ '0A\"\"1!3B+,$,)&0A\"\"1!3B\"\"\" !+O%.C\"\"2C3D+?%56E !!)##\" !\" ++(%4$6F$!\"%$$# !$## !$\"# !\"# !"),
          peg$decode("!.G\"\"2G3H+' 4!6I!! %*\u1CCD \"!.J\"\"2J3K+' 4!6L!! %*\u1CB5 \"!.M\"\"2M3N+' 4!6O!! %*\u1C9D \"!.P\"\"2P3Q+' 4!6R!! %*\u1C85 \"!.S\"\"2S3T+' 4!6U!! %*\u1C6D \"!.V\"\"2V3W+' 4!6X!! %*\u1C55 \"!.Y\"\"2Y3Z+' 4!6[!! %*\u1C3D \"!.\\\"\"2\\3]+' 4!6^!! %*\u1C25 \"!._\"\"2_3`+' 4!6a!! %*\u1C0D \"!.b\"\"2b3c+' 4!6d!! %*\u1BF5 \"!.e\"\"2e3f+' 4!6g!! %*\u1BDD \"!.h\"\"2h3i+' 4!6j!! %*\u1BC5 \"!.k\"\"2k3l+' 4!6m!! %*\u1BAD \"!.n\"\"2n3o+' 4!6p!! %*\u1B95 \"!.q\"\"2q3r+' 4!6s!! %*\u1B7D \"!.t\"\"2t3u+' 4!6v!! %*\u1B65 \"!.w\"\"2w3x+' 4!6y!! %*\u1B4D \"!.z\"\"2z3{+' 4!6|!! %*\u1B35 \"!.}\"\"2}3~+' 4!6!! %*\u1B1D \"!.\x80\"\"2\x803\x81+' 4!6\x82!! %*\u1B05 \"!.\x83\"\"2\x833\x84+' 4!6\x85!! %*\u1AED \"!.\x86\"\"2\x863\x87+' 4!6\x88!! %*\u1AD5 \"!.\x89\"\"2\x893\x8A+' 4!6\x8B!! %*\u1ABD \"!.\x8C\"\"2\x8C3\x8D+' 4!6\x8E!! %*\u1AA5 \"!.\x8F\"\"2\x8F3\x90+' 4!6\x91!! %*\u1A8D \"!.\x92\"\"2\x923\x93+' 4!6\x94!! %*\u1A75 \"!.\x95\"\"2\x953\x96+' 4!6\x97!! %*\u1A5D \"!.\x98\"\"2\x983\x99+' 4!6\x9A!! %*\u1A45 \"!.\x9B\"\"2\x9B3\x9C+' 4!6\x9D!! %*\u1A2D \"!.\x9E\"\"2\x9E3\x9F+' 4!6\xA0!! %*\u1A15 \"!.\xA1\"\"2\xA13\xA2+' 4!6\xA3!! %*\u19FD \"!.\xA4\"\"2\xA43\xA5+' 4!6\xA6!! %*\u19E5 \"!.\xA7\"\"2\xA73\xA8+' 4!6\xA9!! %*\u19CD \"!.\xAA\"\"2\xAA3\xAB+' 4!6\xAC!! %*\u19B5 \"!.\xAD\"\"2\xAD3\xAE+' 4!6\xAF!! %*\u199D \"!.\xB0\"\"2\xB03\xB1+' 4!6\xB2!! %*\u1985 \"!.\xB3\"\"2\xB33\xB4+' 4!6\xB5!! %*\u196D \"!.\xB6\"\"2\xB63\xB7+' 4!6\xB8!! %*\u1955 \"!.\xB9\"\"2\xB93\xBA+' 4!6\xBB!! %*\u193D \"!.\xBC\"\"2\xBC3\xBD+' 4!6\xBE!! %*\u1925 \"!.\xBF\"\"2\xBF3\xC0+' 4!6\xC1!! %*\u190D \"!.\xC2\"\"2\xC23\xC3+' 4!6\xC4!! %*\u18F5 \"!.\xC5\"\"2\xC53\xC6+' 4!6\xC7!! %*\u18DD \"!.\xC8\"\"2\xC83\xC9+' 4!6\xCA!! %*\u18C5 \"!.\xCB\"\"2\xCB3\xCC+' 4!6\xCD!! %*\u18AD \"!.\xCE\"\"2\xCE3\xCF+' 4!6\xD0!! %*\u1895 \"!.\xD1\"\"2\xD13\xD2+' 4!6\xD3!! %*\u187D \"!.\xD4\"\"2\xD43\xD5+' 4!6\xD6!! %*\u1865 \"!.\xD7\"\"2\xD73\xD8+' 4!6\xD9!! %*\u184D \"!.\xDA\"\"2\xDA3\xDB+' 4!6\xDC!! %*\u1835 \"!.\xDD\"\"2\xDD3\xDE+' 4!6\xDF!! %*\u181D \"!.\xE0\"\"2\xE03\xE1+' 4!6\xE2!! %*\u1805 \"!.\xE3\"\"2\xE33\xE4+' 4!6\xE5!! %*\u17ED \"!.\xE6\"\"2\xE63\xE7+' 4!6\xE8!! %*\u17D5 \"!.\xE9\"\"2\xE93\xEA+' 4!6\xEB!! %*\u17BD \"!.\xEC\"\"2\xEC3\xED+' 4!6\xEE!! %*\u17A5 \"!.\xEF\"\"2\xEF3\xF0+' 4!6\xF1!! %*\u178D \"!.\xF2\"\"2\xF23\xF3+' 4!6\xF4!! %*\u1775 \"!.\xF5\"\"2\xF53\xF6+' 4!6\xF7!! %*\u175D \"!.\xF8\"\"2\xF83\xF9+' 4!6\xFA!! %*\u1745 \"!.\xFB\"\"2\xFB3\xFC+' 4!6\xFD!! %*\u172D \"!.\xFE\"\"2\xFE3\xFF+' 4!6\u0100!! %*\u1715 \"!.\u0101\"\"2\u01013\u0102+' 4!6\u0103!! %*\u16FD \"!.\u0104\"\"2\u01043\u0105+' 4!6\u0106!! %*\u16E5 \"!.\u0107\"\"2\u01073\u0108+' 4!6\u0109!! %*\u16CD \"!.\u010A\"\"2\u010A3\u010B+' 4!6\u010C!! %*\u16B5 \"!.\u010D\"\"2\u010D3\u010E+' 4!6\u010F!! %*\u169D \"!.\u0110\"\"2\u01103\u0111+' 4!6\u0112!! %*\u1685 \"!.\u0113\"\"2\u01133\u0114+' 4!6\u0115!! %*\u166D \"!.\u0116\"\"2\u01163\u0117+' 4!6\u0118!! %*\u1655 \"!.\u0119\"\"2\u01193\u011A+' 4!6\u011B!! %*\u163D \"!.\u011C\"\"2\u011C3\u011D+' 4!6\u011E!! %*\u1625 \"!.\u011F\"\"2\u011F3\u0120+' 4!6\u0121!! %*\u160D \"!.\u0122\"\"2\u01223\u0123+' 4!6\u0124!! %*\u15F5 \"!.\u0125\"\"2\u01253\u0126+' 4!6\u0127!! %*\u15DD \"!.\u0128\"\"2\u01283\u0129+' 4!6\u012A!! %*\u15C5 \"!.\u012B\"\"2\u012B3\u012C+' 4!6\u012D!! %*\u15AD \"!.\u012E\"\"2\u012E3\u012F+' 4!6\u0130!! %*\u1595 \"!.\u0131\"\"2\u01313\u0132+' 4!6\u0133!! %*\u157D \"!.\u0134\"\"2\u01343\u0135+' 4!6\u0136!! %*\u1565 \"!.\u0137\"\"2\u01373\u0138+' 4!6\u0139!! %*\u154D \"!.\u013A\"\"2\u013A3\u013B+' 4!6\u013C!! %*\u1535 \"!.\u013D\"\"2\u013D3\u013E+' 4!6\u013F!! %*\u151D \"!.\u0140\"\"2\u01403\u0141+' 4!6\u0142!! %*\u1505 \"!.\u0143\"\"2\u01433\u0144+' 4!6\u0145!! %*\u14ED \"!.\u0146\"\"2\u01463\u0147+' 4!6\u0148!! %*\u14D5 \"!.\u0149\"\"2\u01493\u014A+' 4!6\u014B!! %*\u14BD \"!.\u014C\"\"2\u014C3\u014D+' 4!6\u014E!! %*\u14A5 \"!.\u014F\"\"2\u014F3\u0150+' 4!6\u0151!! %*\u148D \"!.\u0152\"\"2\u01523\u0153+' 4!6\u0154!! %*\u1475 \"!.\u0155\"\"2\u01553\u0156+' 4!6\u0157!! %*\u145D \"!.\u0158\"\"2\u01583\u0159+' 4!6\u015A!! %*\u1445 \"!.\u015B\"\"2\u015B3\u015C+' 4!6\u015D!! %*\u142D \"!.\u015E\"\"2\u015E3\u015F+' 4!6\u0160!! %*\u1415 \"!.\u0161\"\"2\u01613\u0162+' 4!6\u0163!! %*\u13FD \"!.\u0164\"\"2\u01643\u0165+' 4!6\u0166!! %*\u13E5 \"!.\u0167\"\"2\u01673\u0168+' 4!6\u0169!! %*\u13CD \"!.\u016A\"\"2\u016A3\u016B+' 4!6\u016C!! %*\u13B5 \"!.\u016D\"\"2\u016D3\u016E+' 4!6\u016F!! %*\u139D \"!.\u0170\"\"2\u01703\u0171+' 4!6\u0172!! %*\u1385 \"!.\u0173\"\"2\u01733\u0174+' 4!6\u0175!! %*\u136D \"!.\u0176\"\"2\u01763\u0177+' 4!6\u0178!! %*\u1355 \"!.\u0179\"\"2\u01793\u017A+' 4!6\u017B!! %*\u133D \"!.\u017C\"\"2\u017C3\u017D+' 4!6\u017E!! %*\u1325 \"!.\u017F\"\"2\u017F3\u0180+' 4!6\u0181!! %*\u130D \"!.\u0182\"\"2\u01823\u0183+' 4!6\u0184!! %*\u12F5 \"!.\u0185\"\"2\u01853\u0186+' 4!6\u0187!! %*\u12DD \"!.\u0188\"\"2\u01883\u0189+' 4!6\u018A!! %*\u12C5 \"!.\u018B\"\"2\u018B3\u018C+' 4!6\u018D!! %*\u12AD \"!.\u018E\"\"2\u018E3\u018F+' 4!6\u0190!! %*\u1295 \"!.\u0191\"\"2\u01913\u0192+' 4!6\u0193!! %*\u127D \"!.\u0194\"\"2\u01943\u0195+' 4!6\u0196!! %*\u1265 \"!.\u0197\"\"2\u01973\u0198+' 4!6\u0199!! %*\u124D \"!.\u019A\"\"2\u019A3\u019B+' 4!6\u019C!! %*\u1235 \"!.\u019D\"\"2\u019D3\u019E+' 4!6\u019F!! %*\u121D \"!.\u01A0\"\"2\u01A03\u01A1+' 4!6\u01A2!! %*\u1205 \"!.\u01A3\"\"2\u01A33\u01A4+' 4!6\u01A5!! %*\u11ED \"!.\u01A6\"\"2\u01A63\u01A7+' 4!6\u01A8!! %*\u11D5 \"!.\u01A9\"\"2\u01A93\u01AA+' 4!6\u01AB!! %*\u11BD \"!.\u01AC\"\"2\u01AC3\u01AD+' 4!6\u01AE!! %*\u11A5 \"!.\u01AF\"\"2\u01AF3\u01B0+' 4!6\u01B1!! %*\u118D \"!.\u01B2\"\"2\u01B23\u01B3+' 4!6\u01B4!! %*\u1175 \"!.\u01B5\"\"2\u01B53\u01B6+' 4!6\u01B7!! %*\u115D \"!.\u01B8\"\"2\u01B83\u01B9+' 4!6\u01BA!! %*\u1145 \"!.\u01BB\"\"2\u01BB3\u01BC+' 4!6\u01BD!! %*\u112D \"!.\u01BE\"\"2\u01BE3\u01BF+' 4!6\u01C0!! %*\u1115 \"!.\u01C1\"\"2\u01C13\u01C2+' 4!6\u01C3!! %*\u10FD \"!.\u01C4\"\"2\u01C43\u01C5+' 4!6\u01C6!! %*\u10E5 \"!.\u01C7\"\"2\u01C73\u01C8+' 4!6\u01C9!! %*\u10CD \"!.\u01CA\"\"2\u01CA3\u01CB+' 4!6\u01CC!! %*\u10B5 \"!.\u01CD\"\"2\u01CD3\u01CE+' 4!6\u01CF!! %*\u109D \"!.\u01D0\"\"2\u01D03\u01D1+' 4!6\u01D2!! %*\u1085 \"!.\u01D3\"\"2\u01D33\u01D4+' 4!6\u01D5!! %*\u106D \"!.\u01D6\"\"2\u01D63\u01D7+' 4!6\u01D8!! %*\u1055 \"!.\u01D9\"\"2\u01D93\u01DA+' 4!6\u01DB!! %*\u103D \"!.\u01DC\"\"2\u01DC3\u01DD+' 4!6\u01DE!! %*\u1025 \"!.\u01DF\"\"2\u01DF3\u01E0+' 4!6\u01E1!! %*\u100D \"!.\u01E2\"\"2\u01E23\u01E3+' 4!6\u01E4!! %*\u0FF5 \"!.\u01E5\"\"2\u01E53\u01E6+' 4!6\u01E7!! %*\u0FDD \"!.\u01E8\"\"2\u01E83\u01E9+' 4!6\u01EA!! %*\u0FC5 \"!.\u01EB\"\"2\u01EB3\u01EC+' 4!6\u01ED!! %*\u0FAD \"!.\u01EE\"\"2\u01EE3\u01EF+' 4!6\u01F0!! %*\u0F95 \"!.\u01F1\"\"2\u01F13\u01F2+' 4!6\u01F3!! %*\u0F7D \"!.\u01F4\"\"2\u01F43\u01F5+' 4!6\u01F6!! %*\u0F65 \"!.\u01F7\"\"2\u01F73\u01F8+' 4!6\u01F9!! %*\u0F4D \"!.\u01FA\"\"2\u01FA3\u01FB+' 4!6\u01FC!! %*\u0F35 \"!.\u01FD\"\"2\u01FD3\u01FE+' 4!6\u01FF!! %*\u0F1D \"!.\u0200\"\"2\u02003\u0201+' 4!6\u0202!! %*\u0F05 \"!.\u0203\"\"2\u02033\u0204+' 4!6\u0205!! %*\u0EED \"!.\u0206\"\"2\u02063\u0207+' 4!6\u0208!! %*\u0ED5 \"!.\u0209\"\"2\u02093\u020A+' 4!6\u020B!! %*\u0EBD \"!.\u020C\"\"2\u020C3\u020D+' 4!6\u020E!! %*\u0EA5 \"!.\u020F\"\"2\u020F3\u0210+' 4!6\u0211!! %*\u0E8D \"!.\u0212\"\"2\u02123\u0213+' 4!6\u0214!! %*\u0E75 \"!.\u0215\"\"2\u02153\u0216+' 4!6\u0217!! %*\u0E5D \"!.\u0218\"\"2\u02183\u0219+' 4!6\u021A!! %*\u0E45 \"!.\u021B\"\"2\u021B3\u021C+' 4!6\u021D!! %*\u0E2D \"!.\u021E\"\"2\u021E3\u021F+' 4!6\u0220!! %*\u0E15 \"!.\u0221\"\"2\u02213\u0222+' 4!6\u0223!! %*\u0DFD \"!.\u0224\"\"2\u02243\u0225+' 4!6\u0226!! %*\u0DE5 \"!.\u0227\"\"2\u02273\u0228+' 4!6\u0229!! %*\u0DCD \"!.\u022A\"\"2\u022A3\u022B+' 4!6\u022C!! %*\u0DB5 \"!.\u022D\"\"2\u022D3\u022E+' 4!6\u022F!! %*\u0D9D \"!.\u0230\"\"2\u02303\u0231+' 4!6\u0232!! %*\u0D85 \"!.\u0233\"\"2\u02333\u0234+' 4!6\u0235!! %*\u0D6D \"!.\u0236\"\"2\u02363\u0237+' 4!6\u0238!! %*\u0D55 \"!.\u0239\"\"2\u02393\u023A+' 4!6\u023B!! %*\u0D3D \"!.\u023C\"\"2\u023C3\u023D+' 4!6\u023E!! %*\u0D25 \"!.\u023F\"\"2\u023F3\u0240+' 4!6\u0241!! %*\u0D0D \"!.\u0242\"\"2\u02423\u0243+' 4!6\u0244!! %*\u0CF5 \"!.\u0245\"\"2\u02453\u0246+' 4!6\u0247!! %*\u0CDD \"!.\u0248\"\"2\u02483\u0249+' 4!6\u024A!! %*\u0CC5 \"!.\u024B\"\"2\u024B3\u024C+' 4!6\u024D!! %*\u0CAD \"!.\u024E\"\"2\u024E3\u024F+' 4!6\u0250!! %*\u0C95 \"!.\u0251\"\"2\u02513\u0252+' 4!6\u0253!! %*\u0C7D \"!.\u0254\"\"2\u02543\u0255+' 4!6\u0256!! %*\u0C65 \"!.\u0257\"\"2\u02573\u0258+' 4!6\u0259!! %*\u0C4D \"!.\u025A\"\"2\u025A3\u025B+' 4!6\u025C!! %*\u0C35 \"!.\u025D\"\"2\u025D3\u025E+' 4!6\u025F!! %*\u0C1D \"!.\u0260\"\"2\u02603\u0261+' 4!6\u0262!! %*\u0C05 \"!.\u0263\"\"2\u02633\u0264+' 4!6\u0265!! %*\u0BED \"!.\u0266\"\"2\u02663\u0267+' 4!6\u0268!! %*\u0BD5 \"!.\u0269\"\"2\u02693\u026A+' 4!6\u026B!! %*\u0BBD \"!.\u026C\"\"2\u026C3\u026D+' 4!6\u026E!! %*\u0BA5 \"!.\u026F\"\"2\u026F3\u0270+' 4!6\u0271!! %*\u0B8D \"!.\u0272\"\"2\u02723\u0273+' 4!6\u0274!! %*\u0B75 \"!.\u0275\"\"2\u02753\u0276+' 4!6\u0277!! %*\u0B5D \"!.\u0278\"\"2\u02783\u0279+' 4!6\u027A!! %*\u0B45 \"!.\u027B\"\"2\u027B3\u027C+' 4!6\u027D!! %*\u0B2D \"!.\u027E\"\"2\u027E3\u027F+' 4!6\u0280!! %*\u0B15 \"!.\u0281\"\"2\u02813\u0282+' 4!6\u0283!! %*\u0AFD \"!.\u0284\"\"2\u02843\u0285+' 4!6\u0286!! %*\u0AE5 \"!.\u0287\"\"2\u02873\u0288+' 4!6\u0289!! %*\u0ACD \"!.\u028A\"\"2\u028A3\u028B+' 4!6\u028C!! %*\u0AB5 \"!.\u028D\"\"2\u028D3\u028E+' 4!6\u028F!! %*\u0A9D \"!.\u0290\"\"2\u02903\u0291+' 4!6\u0292!! %*\u0A85 \"!.\u0293\"\"2\u02933\u0294+' 4!6\u0295!! %*\u0A6D \"!.\u0296\"\"2\u02963\u0297+' 4!6\u0298!! %*\u0A55 \"!.\u0299\"\"2\u02993\u029A+' 4!6\u029B!! %*\u0A3D \"!.\u029C\"\"2\u029C3\u029D+' 4!6\u029E!! %*\u0A25 \"!.\u029F\"\"2\u029F3\u02A0+' 4!6\u02A1!! %*\u0A0D \"!.\u02A2\"\"2\u02A23\u02A3+' 4!6\u02A4!! %*\u09F5 \"!.\u02A5\"\"2\u02A53\u02A6+' 4!6\u02A7!! %*\u09DD \"!.\u02A8\"\"2\u02A83\u02A9+' 4!6\u02AA!! %*\u09C5 \"!.\u02AB\"\"2\u02AB3\u02AC+' 4!6\u02AD!! %*\u09AD \"!.\u02AE\"\"2\u02AE3\u02AF+' 4!6\u02B0!! %*\u0995 \"!.\u02B1\"\"2\u02B13\u02B2+' 4!6\u02B3!! %*\u097D \"!.\u02B4\"\"2\u02B43\u02B5+' 4!6\u02B6!! %*\u0965 \"!.\u02B7\"\"2\u02B73\u02B8+' 4!6\u02B9!! %*\u094D \"!.\u02BA\"\"2\u02BA3\u02BB+' 4!6\u02BC!! %*\u0935 \"!.\u02BD\"\"2\u02BD3\u02BE+' 4!6\u02BF!! %*\u091D \"!.\u02C0\"\"2\u02C03\u02C1+' 4!6\u02C2!! %*\u0905 \"!.\u02C3\"\"2\u02C33\u02C4+' 4!6\u02C5!! %*\u08ED \"!.\u02C6\"\"2\u02C63\u02C7+' 4!6\u02C8!! %*\u08D5 \"!.\u02C9\"\"2\u02C93\u02CA+' 4!6\u02CB!! %*\u08BD \"!.\u02CC\"\"2\u02CC3\u02CD+' 4!6\u02CE!! %*\u08A5 \"!.\u02CF\"\"2\u02CF3\u02D0+' 4!6\u02D1!! %*\u088D \"!.\u02D2\"\"2\u02D23\u02D3+' 4!6\u02D4!! %*\u0875 \"!.\u02D5\"\"2\u02D53\u02D6+' 4!6\u02D7!! %*\u085D \"!.\u02D8\"\"2\u02D83\u02D9+' 4!6\u02DA!! %*\u0845 \"!.\u02DB\"\"2\u02DB3\u02DC+' 4!6\u02DD!! %*\u082D \"!.\u02DE\"\"2\u02DE3\u02DF+' 4!6\u02E0!! %*\u0815 \"!.\u02E1\"\"2\u02E13\u02E2+' 4!6\u02E3!! %*\u07FD \"!.\u02E4\"\"2\u02E43\u02E5+' 4!6\u02E6!! %*\u07E5 \"!.\u02E7\"\"2\u02E73\u02E8+' 4!6\u02E9!! %*\u07CD \"!.\u02EA\"\"2\u02EA3\u02EB+' 4!6\u02EC!! %*\u07B5 \"!.\u02ED\"\"2\u02ED3\u02EE+' 4!6\u02EF!! %*\u079D \"!.\u02F0\"\"2\u02F03\u02F1+' 4!6\u02F2!! %*\u0785 \"!.\u02F3\"\"2\u02F33\u02F4+' 4!6\u02F5!! %*\u076D \"!.\u02F6\"\"2\u02F63\u02F7+' 4!6\u02F8!! %*\u0755 \"!.\u02F9\"\"2\u02F93\u02FA+' 4!6\u02FB!! %*\u073D \"!.\u02FC\"\"2\u02FC3\u02FD+' 4!6\u02FE!! %*\u0725 \"!.\u02FF\"\"2\u02FF3\u0300+' 4!6\u0301!! %*\u070D \"!.\u0302\"\"2\u03023\u0303+' 4!6\u0304!! %*\u06F5 \"!.\u0305\"\"2\u03053\u0306+' 4!6\u0307!! %*\u06DD \"!.\u0308\"\"2\u03083\u0309+' 4!6\u030A!! %*\u06C5 \"!.\u030B\"\"2\u030B3\u030C+' 4!6\u030D!! %*\u06AD \"!.\u030E\"\"2\u030E3\u030F+' 4!6\u0310!! %*\u0695 \"!.\u0311\"\"2\u03113\u0312+' 4!6\u0313!! %*\u067D \"!.\u0314\"\"2\u03143\u0315+' 4!6\u0316!! %*\u0665 \"!.\u0317\"\"2\u03173\u0318+' 4!6\u0319!! %*\u064D \"!.\u031A\"\"2\u031A3\u031B+' 4!6\u031C!! %*\u0635 \"!.\u031D\"\"2\u031D3\u031E+' 4!6\u031F!! %*\u061D \"!.\u0320\"\"2\u03203\u0321+' 4!6\u0322!! %*\u0605 \"!.\u0323\"\"2\u03233\u0324+' 4!6\u0325!! %*\u05ED \"!.\u0326\"\"2\u03263\u0327+' 4!6\u0328!! %*\u05D5 \"!.\u0329\"\"2\u03293\u032A+' 4!6\u032B!! %*\u05BD \"!.\u032C\"\"2\u032C3\u032D+' 4!6\u032E!! %*\u05A5 \"!.\u032F\"\"2\u032F3\u0330+' 4!6\u0331!! %*\u058D \"!.\u0332\"\"2\u03323\u0333+' 4!6\u0334!! %*\u0575 \"!.\u0335\"\"2\u03353\u0336+' 4!6\u0337!! %*\u055D \"!.\u0338\"\"2\u03383\u0339+' 4!6\u033A!! %*\u0545 \"!.\u033B\"\"2\u033B3\u033C+' 4!6\u033D!! %*\u052D \"!.\u033E\"\"2\u033E3\u033F+' 4!6\u0340!! %*\u0515 \"!.\u0341\"\"2\u03413\u0342+' 4!6\u0343!! %*\u04FD \"!.\u0344\"\"2\u03443\u0345+' 4!6\u0346!! %*\u04E5 \"!.\u0347\"\"2\u03473\u0348+' 4!6\u0349!! %*\u04CD \"!.\u034A\"\"2\u034A3\u034B+' 4!6\u034C!! %*\u04B5 \"!.\u034D\"\"2\u034D3\u034E+' 4!6\u034F!! %*\u049D \"!.\u0350\"\"2\u03503\u0351+' 4!6\u0352!! %*\u0485 \"!.\u0353\"\"2\u03533\u0354+' 4!6\u0355!! %*\u046D \"!.\u0356\"\"2\u03563\u0357+' 4!6\u0358!! %*\u0455 \"!.\u0359\"\"2\u03593\u035A+' 4!6\u035B!! %*\u043D \"!.\u035C\"\"2\u035C3\u035D+' 4!6\u035E!! %*\u0425 \"!.\u035F\"\"2\u035F3\u0360+' 4!6\u0361!! %*\u040D \"!.\u0362\"\"2\u03623\u0363+' 4!6\u0364!! %*\u03F5 \"!.\u0365\"\"2\u03653\u0366+' 4!6\u0367!! %*\u03DD \"!.\u0368\"\"2\u03683\u0369+' 4!6\u036A!! %*\u03C5 \"!.\u036B\"\"2\u036B3\u036C+' 4!6\u036D!! %*\u03AD \"!.\u036E\"\"2\u036E3\u036F+' 4!6\u0370!! %*\u0395 \"!.\u0371\"\"2\u03713\u0372+' 4!6\u0373!! %*\u037D \"!.\u0374\"\"2\u03743\u0375+' 4!6\u0376!! %*\u0365 \"!.\u0377\"\"2\u03773\u0378+' 4!6\u0379!! %*\u034D \"!.\u037A\"\"2\u037A3\u037B+' 4!6\u037C!! %*\u0335 \"!.\u037D\"\"2\u037D3\u037E+' 4!6\u037F!! %*\u031D \"!.\u0380\"\"2\u03803\u0381+' 4!6\u0382!! %*\u0305 \"!.\u0383\"\"2\u03833\u0384+' 4!6\u0385!! %*\u02ED \"!.\u0386\"\"2\u03863\u0387+' 4!6\u0388!! %*\u02D5 \"!.\u0389\"\"2\u03893\u038A+' 4!6\u038B!! %*\u02BD \"!.\u038C\"\"2\u038C3\u038D+' 4!6\u038E!! %*\u02A5 \"!.\u038F\"\"2\u038F3\u0390+' 4!6\u0391!! %*\u028D \"!.\u0392\"\"2\u03923\u0393+' 4!6\u0394!! %*\u0275 \"!.\u0395\"\"2\u03953\u0396+' 4!6\u0397!! %*\u025D \"!.\u0398\"\"2\u03983\u0399+' 4!6\u039A!! %*\u0245 \"!.\u039B\"\"2\u039B3\u039C+' 4!6\u039D!! %*\u022D \"!.\u039E\"\"2\u039E3\u039F+' 4!6\u03A0!! %*\u0215 \"!.\u03A1\"\"2\u03A13\u03A2+' 4!6\u03A3!! %*\u01FD \"!.\u03A4\"\"2\u03A43\u03A5+' 4!6\u03A6!! %*\u01E5 \"!.\u03A7\"\"2\u03A73\u03A8+' 4!6\u03A9!! %*\u01CD \"!.\u03AA\"\"2\u03AA3\u03AB+' 4!6\u03AC!! %*\u01B5 \"!.\u03AD\"\"2\u03AD3\u03AE+' 4!6\u03AF!! %*\u019D \"!.\u03B0\"\"2\u03B03\u03B1+' 4!6\u03B2!! %*\u0185 \"!.\u03B3\"\"2\u03B33\u03B4+' 4!6\u03B5!! %*\u016D \"!.\u03B6\"\"2\u03B63\u03B7+' 4!6\u03B8!! %*\u0155 \"!.\u03B9\"\"2\u03B93\u03BA+' 4!6\u03BB!! %*\u013D \"!.\u03BC\"\"2\u03BC3\u03BD+' 4!6\u03BE!! %*\u0125 \"!.\u03BF\"\"2\u03BF3\u03C0+' 4!6\u03C1!! %*\u010D \"!.\u03C2\"\"2\u03C23\u03C3+' 4!6\u03C4!! %*\xF5 \"!.\u03C5\"\"2\u03C53\u03C6+' 4!6\u03C7!! %*\xDD \"!.\u03C8\"\"2\u03C83\u03C9+' 4!6\u03CA!! %*\xC5 \"!.\u03CB\"\"2\u03CB3\u03CC+' 4!6\u03CD!! %*\xAD \"!.\u03CE\"\"2\u03CE3\u03CF+' 4!6\u03D0!! %*\x95 \"!.\u03D1\"\"2\u03D13\u03D2+' 4!6\u03D3!! %*} \"!.\u03D4\"\"2\u03D43\u03D5+' 4!6\u03D6!! %*e \"!.\u03D7\"\"2\u03D73\u03D8+' 4!6\u03D9!! %*M \"!.\u03DA\"\"2\u03DA3\u03DB+' 4!6\u03DC!! %*5 \"!.\u03DD\"\"2\u03DD3\u03DE+' 4!6\u03DF!! %"),
          peg$decode(".\u03E0\"\"2\u03E03\u03E1*\u0131 \".\u03E2\"\"2\u03E23\u03E3*\u0125 \".\u03E4\"\"2\u03E43\u03E5*\u0119 \".\u0392\"\"2\u03923\u0393*\u010D \".\u039E\"\"2\u039E3\u039F*\u0101 \".\u0395\"\"2\u03953\u0396*\xF5 \".\u03E6\"\"2\u03E63\u03E7*\xE9 \".\u03E8\"\"2\u03E83\u03E9*\xDD \".\u03D1\"\"2\u03D13\u03D2*\xD1 \".\u03EA\"\"2\u03EA3\u03EB*\xC5 \".\u03D4\"\"2\u03D43\u03D5*\xB9 \".\u03EC\"\"2\u03EC3\u03ED*\xAD \".\u03AA\"\"2\u03AA3\u03AB*\xA1 \".\u038F\"\"2\u038F3\u0390*\x95 \".\u03EE\"\"2\u03EE3\u03EF*\x89 \".\u03F0\"\"2\u03F03\u03F1*} \".\u03F2\"\"2\u03F23\u03F3*q \".\u03DA\"\"2\u03DA3\u03DB*e \".\u03F4\"\"2\u03F43\u03F5*Y \".\u03F6\"\"2\u03F63\u03F7*M \".\u03F8\"\"2\u03F83\u03F9*A \".\u03FA\"\"2\u03FA3\u03FB*5 \".\u03FC\"\"2\u03FC3\u03FD*) \".\u03FE\"\"2\u03FE3\u03FF")
        ],

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      function protect(object) {
        return Object.prototype.toString.apply(object) === "[object Array]" ? [] : object;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(protect(peg$consts[bc[ip + 1]]));
              ip += 2;
              break;

            case 1:
              stack.push(peg$currPos);
              ip++;
              break;

            case 2:
              stack.pop();
              ip++;
              break;

            case 3:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 4:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 5:
              stack.splice(-2, 1);
              ip++;
              break;

            case 6:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 7:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 8:
              stack.pop();
              stack.push(input.substring(stack[stack.length - 1], peg$currPos));
              ip++;
              break;

            case 9:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 10:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 11:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 12:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 16:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 17:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 18:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 19:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 20:
              peg$reportedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 21:
              peg$reportedPos = peg$currPos;
              ip++;
              break;

            case 22:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 23:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 24:
              peg$silentFails++;
              ip++;
              break;

            case 25:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      return stack[0];
    }


      helpers = require('../lib/helpers');
      prefixes = require('./prefixes.json');
      metrics = require('./metrics.json');
      multiply = helpers.multiply;
      topower = helpers.topower;
      cleanup = helpers.cleanup;
      ismetric = helpers.ismetric(metrics);


    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();

},{"../lib/helpers":23,"./metrics.json":20,"./prefixes.json":21}],23:[function(require,module,exports){
module.exports = {

  multiply: function multiply(t, ms) {
    if (ms.length == 0) return t;

    var ret = t;
    ms.forEach(function(mterm){

      var sign = (mterm[0] == "." ? 1 : -1);
      var b = mterm[1];

      ret.value *= Math.pow(b.value, sign);
      Object.keys(b.units).forEach(function(u){
        ret.units[u] = ret.units[u] || 0;
        ret.units[u] = ret.units[u] + sign*b.units[u];
        if (ret.units[u] == 0){
          delete ret.units[u];
        }
      });

    });
    return ret;
  },

  topower: function topower(e, exp){
    if (!exp) {exp = 1;}
    var ret = e;
    ret.value = Math.pow(ret.value, exp);
    Object.keys(e.units).forEach(function(u){
      ret.units[u] = e.units[u] * exp;
    });

    return ret;
  },

  cleanup: function cleanup(e) {
    ["10^", "10*"].forEach(function(k){
      if (e.units[k]) {
        e.value *= Math.pow(10, e.units[k]);
        delete e.units[k];
      }
    })
    return e;
  },

  ismetric: function(metrics) {
    return function(u) {
      return metrics[Object.keys(u.units)[0]] !== undefined;
    };
  }
}

},{}],24:[function(require,module,exports){
parser = require('./generated/ucum-parser.js');
equivalents = require('./generated/equivalents.json');
helpers = require('./lib/helpers.js');

module.exports = {
  parse: parse,
  canonicalize: canonicalize,
  convert: convert
};

function parse(value, units){

  if (arguments.length === 1 || units === undefined){
    units = value;
    value = 1
  }

  if (units.match(/^\//)){
    units = '1'+units;
  }

  if (units === '') units = '1';

  var ret = parser.parse(units);
  ret.value *= value;
  return ret;
}

function nonBaseUnit(u){
  return equivalents[u] !== undefined;
}

function remainingNonBaseUnits(value) {
  return Object.keys(value.units).filter(nonBaseUnit)
}

function canonicalize(value, units){

  value = parse(value, units);

  var remaining = remainingNonBaseUnits(value);

  while (remaining.length) {
    if (remaining.length === 0) {
      return false;
    }

    remaining.forEach(function(u){
      var sub = parse(equivalents[u].ucum);
      sub.value *= equivalents[u].value;
      sub = helpers.topower(sub, value.units[u]);
      value = helpers.multiply(value, [['.', sub]]);
      delete value.units[u];
    });

    remaining = remainingNonBaseUnits(value);
  }

  return value;
}

function conformant(a, b){
  var ret = true;
  Object.keys(a.units)
  .concat(Object.keys(b.units))
  .forEach(function(k){
    if (a.units[k] !== b.units[k]) {
      ret = false;
    }
  });
  
  return ret;
}

function convert(fromValue, fromUnits, toUnits){
 fromc = canonicalize(fromValue, fromUnits);
 toc = canonicalize(toUnits);

 if (!conformant(fromc, toc)){
   throw "Non-conformant units; can't convert from " + fromUnits + " to " + toUnits ;
 }

 return fromc.value / toc.value;

}

},{"./generated/equivalents.json":19,"./generated/ucum-parser.js":22,"./lib/helpers.js":23}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvc2hhcmVkL2NoYW5nZXMvaW5kZXguanMiLCJsaWIvc2hhcmVkL2luZGV4LmpzIiwibGliL3NoYXJlZC9tYXRlcmlhbENvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL21vZGVsL3VuaXRfbWF0aC9pbmRleC5qcyIsImxpYi9zaGFyZWQvb3BlcmF0aW9uQ29udHJvbGxlci9pbmRleC5qcyIsImxpYi9zaGFyZWQvb3BlcmF0aW9uQ29udHJvbGxlci91dGlscy5qcyIsImxpYi9zaGFyZWQvc2F2ZS9pbmRleC5qcyIsImxpYi9zaGFyZWQvc2F2ZS9zY2hlbWEuanMiLCJsaWIvc2hhcmVkL3NhdmUvc3RyaXAuanMiLCJsaWIvc2hhcmVkL3RyYW5zZm9ybS9pbmRleC5qcyIsImxpYi9zaGFyZWQvdW5pdHMvZGVmaW5pdGlvbnMuanMiLCJsaWIvc2hhcmVkL3VuaXRzL2luZGV4LmpzIiwibGliL3NoYXJlZC91dGlscy9pbmRleC5qcyIsImxpYi9zaGFyZWQvdXRpbHMvc3RhdGVzLmpzb24iLCJub2RlX21vZHVsZXMvZGVlcC1kaWZmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwibm9kZV9tb2R1bGVzL25vZGUtdXVpZC91dWlkLmpzIiwibm9kZV9tb2R1bGVzL3VjdW0uanMvZ2VuZXJhdGVkL2VxdWl2YWxlbnRzLmpzb24iLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvbWV0cmljcy5qc29uIiwibm9kZV9tb2R1bGVzL3VjdW0uanMvZ2VuZXJhdGVkL3ByZWZpeGVzLmpzb24iLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvdWN1bS1wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvdWN1bS5qcy9saWIvaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL3VjdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDblpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xyQ0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzMrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGlmZiA9IHJlcXVpcmUoJ2RlZXAtZGlmZicpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpO1xudmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxuZXZlbnRzID0gbmV3IGV2ZW50cygpO1xuZXZlbnRzLnNldE1heExpc3RlbmVycygxMDAwKTtcblxudmFyIGJ1ZGdldFRpbWVyID0gLTE7XG52YXIgbWF0ZXJpYWxUaW1lciA9IC0xO1xuXG52YXIgY2hlY2tMaXN0ID0ge1xuICBidWRnZXQgOiBbXSxcbiAgc2ltcGxlTWF0ZXJpYWwgOiBbXSxcbiAgY29tcGxleE1hdGVyaWFsIDogW11cbn07XG5cbnZhciBvcmlnaW5hbCA9IHtcbiAgYnVkZ2V0IDoge30sXG4gIG1hdGVyaWFscyA6IHt9LFxuICBtYXRlcmlhbElkcyA6IHt9XG59O1xuXG52YXIgZGlmZmVyZW5jZVN0YXRlID0ge1xuICBidWRnZXQgOiBbXSxcbiAgbWF0ZXJpYWxJZHMgOiBbXSxcbiAgbWF0ZXJpYWxzIDogW11cbn07XG5cbi8vIGxpc3Qgb2YgdW5zYXZlZCBtYXRlcmlhbHNcbnZhciB1bnNhdmVkID0ge307XG5pZiggdHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkICkge1xuICB0cnkge1xuICAgIHZhciB0ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bnNhdmVkLW1hdGVyaWFscycpO1xuICAgIGlmKCB0ICkgdW5zYXZlZCA9IEpTT04ucGFyc2UodCk7XG4gIH0gY2F0Y2goZSkge1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldE9yaWdpbmFsKGJ1ZGdldCwgbWF0ZXJpYWxzKSB7XG4gIHZhciBpO1xuICBvcmlnaW5hbC5tYXRlcmlhbElkcyA9IHt9O1xuXG4gIGlmKCBtYXRlcmlhbHMgPT09IHVuZGVmaW5lZCAmJiBidWRnZXQubWF0ZXJpYWxzICkge1xuICAgIG9yaWdpbmFsLmJ1ZGdldCA9IGV4dGVuZCh0cnVlLCB7fSwgYnVkZ2V0KTtcblxuICAgIG1hdGVyaWFscyA9IG9yaWdpbmFsLmJ1ZGdldC5tYXRlcmlhbHM7XG4gICAgZGVsZXRlIG9yaWdpbmFsLmJ1ZGdldC5tYXRlcmlhbHM7XG5cbiAgICBvcmlnaW5hbC5tYXRlcmlhbHMgPSB7fTtcblxuICAgIGZvciggaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAvLyBtYXRlcmlhbHMgYXJlIGFscmVhZHkgY29waWVkLCBubyByZWFzb24gdG8gcmUtZXh0ZW5kXG4gICAgICBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWxzW2ldLmlkXSA9IG1hdGVyaWFsc1tpXTtcbiAgICAgIG9yaWdpbmFsLm1hdGVyaWFsSWRzW21hdGVyaWFsc1tpXS5pZF0gPSAxO1xuICAgIH1cblxuICB9IGVsc2Uge1xuICAgIG9yaWdpbmFsLmJ1ZGdldCA9IGV4dGVuZCh0cnVlLCB7fSwgYnVkZ2V0KTtcblxuICAgIG9yaWdpbmFsLm1hdGVyaWFscyA9IHt9O1xuICAgIGZvciggaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWxzW2ldLmlkXSA9IGV4dGVuZCh0cnVlLCB7fSwgbWF0ZXJpYWxzW2ldKTtcbiAgICAgIG9yaWdpbmFsLm1hdGVyaWFsSWRzW21hdGVyaWFsc1tpXS5pZF0gPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRpZmZlcmVuY2VTdGF0ZSA9IHtcbiAgICBidWRnZXQgOiBbXSxcbiAgICBtYXRlcmlhbElkcyA6IFtdLFxuICAgIG1hdGVyaWFscyA6IFtdXG4gIH07XG5cbiAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLWRpZmYnLCBbXSk7XG4gIGV2ZW50cy5lbWl0KCdidWRnZXQtZGlmZicsIGRpZmZlcmVuY2VTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1hdGVyaWFsKG1hdGVyaWFsLCBkZWxldGVkKSB7XG4gIGlmKCBkZWxldGVkICkge1xuICAgIGRlbGV0ZSBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWwuaWRdO1xuICAgIGRlbGV0ZSBvcmlnaW5hbC5tYXRlcmlhbElkc1ttYXRlcmlhbC5pZF07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3JpZ2luYWwubWF0ZXJpYWxzW21hdGVyaWFsLmlkXSA9IG1hdGVyaWFsO1xuICBvcmlnaW5hbC5tYXRlcmlhbElkc1ttYXRlcmlhbC5pZF0gPSAxO1xufVxuXG5mdW5jdGlvbiBjaGVja01hdGVyaWFscyhtYXRlcmlhbHMpIHtcbiAgaWYoIG1hdGVyaWFsVGltZXIgIT09IC0xICkge1xuICAgIGNsZWFyVGltZW91dChtYXRlcmlhbFRpbWVyKTtcbiAgfVxuXG4gIG1hdGVyaWFsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgbWF0ZXJpYWxUaW1lciA9IC0xO1xuICAgIF9jaGVja01hdGVyaWFscyhtYXRlcmlhbHMpO1xuICB9LCAxMDApO1xufVxuXG5cbmZ1bmN0aW9uIF9jaGVja01hdGVyaWFscyhtYXRlcmlhbHMpIHtcbiAgdmFyIGRpZmZlcmVuY2VzID0gW10sIGk7XG5cblxuICBmb3IoIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCAhbWF0ZXJpYWxzW2ldLmlkICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYoIG9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbHNbaV0uaWRdICkge1xuICAgICAgZGlmZmVyZW5jZXMucHVzaCh7XG4gICAgICAgIGlkIDogbWF0ZXJpYWxzW2ldLmlkLFxuICAgICAgICB0eXBlIDogbWF0ZXJpYWxzW2ldLnR5cGUsXG4gICAgICAgIHVwZGF0ZWQgOiB0cnVlLFxuICAgICAgICBkaWZmIDogZGlmZihvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWxzW2ldLmlkXSwgbWF0ZXJpYWxzW2ldKSB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVtb3ZlIHRoaW5ncyB3ZSBkb24ndCBjYXJlIGFib3V0XG4gIGZvciggaSA9IGRpZmZlcmVuY2VzLmxlbmd0aC0xOyBpID49IDA7IGktLSApIHtcbiAgICBpZiggIWRpZmZlcmVuY2VzW2ldLmRpZmYgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZ25vcmVBdHRyaWJ1dGVzKGRpZmZlcmVuY2VzW2ldLmRpZmYsIGRpZmZlcmVuY2VzW2ldLnR5cGUgPT09ICdjb21wbGV4JyA/IGNoZWNrTGlzdC5jb21wbGV4TWF0ZXJpYWwgOiBjaGVja0xpc3Quc2ltcGxlTWF0ZXJpYWwpO1xuICAgIGlmKCBkaWZmZXJlbmNlc1tpXS5kaWZmLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIGRpZmZlcmVuY2VzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBkaWZmZXJlbmNlU3RhdGUubWF0ZXJpYWxzID0gZGlmZmVyZW5jZXM7XG4gIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC1kaWZmJywgZGlmZmVyZW5jZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGNoZWNrQnVkZ2V0KGJ1ZGdldCwgbWF0ZXJpYWxzKSB7XG4gIGlmKCBidWRnZXRUaW1lciAhPT0gLTEgKSB7XG4gICAgY2xlYXJUaW1lb3V0KGJ1ZGdldFRpbWVyKTtcbiAgfVxuXG4gIGJ1ZGdldFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgIGJ1ZGdldFRpbWVyID0gLTE7XG4gICAgX2NoZWNrQnVkZ2V0KGJ1ZGdldCwgbWF0ZXJpYWxzKTtcbiAgfSwgMTAwKTtcbn1cblxuXG5mdW5jdGlvbiBfY2hlY2tCdWRnZXQoYnVkZ2V0LCBtYXRlcmlhbHMpIHtcbiAgdmFyIGRpZmZlcmVuY2VzID0gZGlmZihvcmlnaW5hbC5idWRnZXQsIGJ1ZGdldCkgfHwgW107XG5cbiAgLy8gcmVtb3ZlIHRoaW5ncyB3ZSBkb24ndCBjYXJlIGFib3V0XG4gIGlnbm9yZUF0dHJpYnV0ZXMoZGlmZmVyZW5jZXMsIGNoZWNrTGlzdC5idWRnZXQpO1xuXG4gIHZhciBpZHMgPSB7fTtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoICFtYXRlcmlhbHNbaV0uaWQgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWRzW21hdGVyaWFsc1tpXS5pZF0gPSAxO1xuICB9XG4gIGRpZmZlcmVuY2VTdGF0ZS5tYXRlcmlhbElkcyA9IGRpZmYob3JpZ2luYWwubWF0ZXJpYWxJZHMsIGlkcykgfHwgW107XG4gIGRpZmZlcmVuY2VTdGF0ZS5idWRnZXQgPSBkaWZmZXJlbmNlcztcblxuICBldmVudHMuZW1pdCgnYnVkZ2V0LWRpZmYnLCBkaWZmZXJlbmNlU3RhdGUpO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGVzKGRpZmZlcmVuY2VzLCBsaXN0KSB7XG4gIHZhciBpLCBqLCBwYXRoO1xuICBmb3IoIGkgPSBkaWZmZXJlbmNlcy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0gKSB7XG4gICAgcGF0aCA9IGRpZmZlcmVuY2VzW2ldLnBhdGguam9pbignLCcpO1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yKCBqID0gMDsgaiA8IGxpc3QubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpZiggbGlzdFtqXS50ZXN0KHBhdGgpICkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCAhZm91bmQgKSB7XG4gICAgICBkaWZmZXJlbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcmNlQ2hlY2tBbGwoYnVkZ2V0LCBtYXRlcmlhbHMpIHtcbiAgX2NoZWNrQnVkZ2V0KGJ1ZGdldCwgbWF0ZXJpYWxzKTtcbiAgX2NoZWNrTWF0ZXJpYWxzKG1hdGVyaWFscyk7XG5cbiAgaWYoIGRpZmZlcmVuY2VTdGF0ZS5idWRnZXQubGVuZ3RoID4gMCB8fCBkaWZmZXJlbmNlU3RhdGUubWF0ZXJpYWxzLmxlbmd0aCA+IDAgfHwgZGlmZmVyZW5jZVN0YXRlLm1hdGVyaWFsSWRzLmxlbmd0aCA+IDAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERpZmZlcmVuY2VzKCkge1xuICByZXR1cm4gZGlmZmVyZW5jZVN0YXRlO1xufVxuXG5mdW5jdGlvbiBwcmVwKHNjaGVtYSkge1xuICBwcmVwU2NoZW1hKCcnLCBzY2hlbWEuYnVkZ2V0LCBjaGVja0xpc3QuYnVkZ2V0KTtcbiAgcHJlcFNjaGVtYSgnJywgc2NoZW1hLm1hdGVyaWFsLCBjaGVja0xpc3Quc2ltcGxlTWF0ZXJpYWwpO1xuICBwcmVwU2NoZW1hKCcnLCBzY2hlbWEuY29tcGxleE1hdGVyaWFsLCBjaGVja0xpc3QuY29tcGxleE1hdGVyaWFsKTtcbn1cblxuZnVuY3Rpb24gcHJlcFNjaGVtYShwYXRoLCBzY2hlbWEsIGxpc3QpIHtcbiAgdmFyIGNvbW1hID0gcGF0aC5sZW5ndGggPiAwID8gJywnIDogJyc7XG5cbiAgZm9yKCB2YXIga2V5IGluIHNjaGVtYSApIHtcbiAgICBpZiggdHlwZW9mIHNjaGVtYVtrZXldID09PSAnc3RyaW5nJyApIHtcbiAgICAgIGxpc3QucHVzaChuZXcgUmVnRXhwKCdeJytwYXRoK2NvbW1hK2tleSsnJCcpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKCBBcnJheS5pc0FycmF5KHNjaGVtYVtrZXldKSApIHtcbiAgICAgIGlmKCBzY2hlbWFba2V5XVswXS5fb2JqZWN0X2FycmF5XyApIHtcbiAgICAgICAgcHJlcFNjaGVtYShwYXRoK2NvbW1hKycuKiwnK2tleSwgc2NoZW1hW2tleV1bMF0sIGxpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJlcFNjaGVtYShwYXRoK2NvbW1hK2tleSwgc2NoZW1hW2tleV1bMF0sIGxpc3QpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiggdHlwZW9mIHNjaGVtYVtrZXldID09PSAnb2JqZWN0JyApIHtcbiAgICAgIHByZXBTY2hlbWEocGF0aCtjb21tYStrZXksIHNjaGVtYVtrZXldLCBsaXN0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcil7XG4gIGV2ZW50cy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBoYXNDaGFuZ2VzKG1hdGVyaWFsKSB7XG4gIGlmKCBtYXRlcmlhbCApIHtcbiAgICBpZiggIW9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbC5pZF0gKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGQgPSBkaWZmKG9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbC5pZF0sIG1hdGVyaWFsKTtcbiAgICBpZiggZCApIHtcbiAgICAgIGlnbm9yZUF0dHJpYnV0ZXMoZCwgbWF0ZXJpYWwudHlwZSA9PT0gJ2NvbXBsZXgnID8gY2hlY2tMaXN0LmNvbXBsZXhNYXRlcmlhbCA6IGNoZWNrTGlzdC5zaW1wbGVNYXRlcmlhbCk7XG4gICAgICBpZiggZC5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIGZvciggdmFyIGtleSBpbiBkaWZmZXJlbmNlU3RhdGUgKSB7XG4gICAgaWYoIGRpZmZlcmVuY2VTdGF0ZVtrZXldLmxlbmd0aCA+IDAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYoIE9iamVjdC5rZXlzKHVuc2F2ZWQpLmxlbmd0aCA+IDAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoaXMgb25seSByZW1vdmVzIG1hdGVyaWFsIGZyb20gb3JpZ2luYWwgbGlzdCxcbi8vIGl0IGRvZXMgbm90IHRvdWNoIHRoZSBidWRnZXRcbmZ1bmN0aW9uIHJlbW92ZU1hdGVyaWFsKG1hdGVyaWFsKSB7XG4gIGlmKCBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWwuaWRdICkge1xuICAgIGRlbGV0ZSBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWwuaWRdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE1hdGVyaWFsKG1hdGVyaWFsKSB7XG4gIG9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbC5pZF0gPSBtYXRlcmlhbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldE9yaWdpbmFsIDogc2V0T3JpZ2luYWwsXG4gIGNoZWNrQnVkZ2V0IDogY2hlY2tCdWRnZXQsXG4gIGNoZWNrTWF0ZXJpYWxzIDogY2hlY2tNYXRlcmlhbHMsXG4gIGZvcmNlQ2hlY2tBbGwgOiBmb3JjZUNoZWNrQWxsLFxuICBnZXREaWZmZXJlbmNlcyA6IGdldERpZmZlcmVuY2VzLFxuICBoYXNDaGFuZ2VzIDogaGFzQ2hhbmdlcyxcbiAgb24gOiBvbixcbiAgcmVtb3ZlTGlzdGVuZXIgOiByZW1vdmVMaXN0ZW5lcixcbiAgdXBkYXRlTWF0ZXJpYWwgOiB1cGRhdGVNYXRlcmlhbCxcbiAgcmVtb3ZlTWF0ZXJpYWwgOiByZW1vdmVNYXRlcmlhbCxcbiAgYWRkTWF0ZXJpYWwgOiBhZGRNYXRlcmlhbCxcbiAgZ2V0T3JpZ2luYWwgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gb3JpZ2luYWw7XG4gIH0sXG4gIHNldFVuc2F2ZWQgOiBmdW5jdGlvbihtYXRlcmlhbHMpIHtcbiAgICB1bnNhdmVkID0gbWF0ZXJpYWxzO1xuICB9LFxuICBnZXRVbnNhdmVkIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHVuc2F2ZWQ7XG4gIH1cbn07XG5cbiBwcmVwKHJlcXVpcmUoJy4uL3NhdmUvc2NoZW1hJykoKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIE5hbWVzcGFjZSBtb2R1bGVcbiAqICBFeHBvc2VzIG90aGVyIG1vZHVsZXNcbiAqKi9cblxudmFyIG1hdGVyaWFsQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbWF0ZXJpYWxDb250cm9sbGVyJyk7XG52YXIgb3BlcmF0aW9uQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vb3BlcmF0aW9uQ29udHJvbGxlcicpO1xub3BlcmF0aW9uQ29udHJvbGxlci5pbml0KG1hdGVyaWFsQ29udHJvbGxlcik7XG5tYXRlcmlhbENvbnRyb2xsZXIuaW5pdChvcGVyYXRpb25Db250cm9sbGVyKTtcblxudmFyIGN1cnJlbnREYXRhID0ge307XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICBvcGVyYXRpb25Db250cm9sbGVyLnJlc2V0KCk7XG4gIG1hdGVyaWFsQ29udHJvbGxlci5yZXNldCgpO1xuXG4gIC8vIHRtcCBmb3Igbm93XG4gIHZhciBmaXhlZCA9IFsnRXN0aW1hdGUnLCAnVGF4ZXMnLCdJbnN1cmFuY2UnLCdDYXBpdG9sIENvc3QgUmVjb3ZlcicsJ0x1YmUgJiBSZXBhaXJzJ107XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZml4ZWQubGVuZ3RoOyBpKysgKSB7XG4gICAgbWF0ZXJpYWxDb250cm9sbGVyLmFkZCh7XG4gICAgICBuYW1lIDogZml4ZWRbaV0sXG4gICAgICBwcmljZSA6IDEsXG4gICAgICB1bml0cyA6ICd1cyQnLFxuICAgICAgZml4ZWQgOiB0cnVlLFxuICAgICAgZGVzY3JpcHRpb24gOiAnUHJvdmlkZSBmaXhlZCBjb3N0IGZvciBjb21wbGV4IG1hdGVyaWFsJ1xuICAgIH0se1xuICAgICAgbm9FdmVudCA6IHRydWUsXG4gICAgICBub1JlY2FsYyA6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkKGRhdGEpIHtcbiAgLy8gYnkgZGVmYXVsdCBhZGRpbmcvdXBkYXRpbmcgbWF0ZXJpYWxzIGZpcmVzIGV2ZW50cyBhbmQgcmVjYWxjc1xuICAvLyBidWRnZXQuICBXZSBkb24ndCB3YW50IHRvIGRvIHRoaXMgb24gaW5pdGlhbCBsb2FkXG4gIHZhciBvcHRpb25zID0ge1xuICAgIG5vRXZlbnQgOiB0cnVlLFxuICAgIG5vUmVjYWxjIDogdHJ1ZVxuICB9O1xuXG4gIGRhdGEubWF0ZXJpYWxzLmZvckVhY2goZnVuY3Rpb24obWF0ZXJpYWwpe1xuICAgIG1hdGVyaWFsQ29udHJvbGxlci5hZGQobWF0ZXJpYWwsIG9wdGlvbnMpO1xuICB9KTtcblxuICBtYXRlcmlhbENvbnRyb2xsZXIucmVjYWxjKCk7XG5cbiAgb3BlcmF0aW9uQ29udHJvbGxlci5zZXRGYXJtU2l6ZSgoZGF0YS5idWRnZXQuZmFybSAmJiBkYXRhLmJ1ZGdldC5mYXJtLnNpemUpID8gcGFyc2VJbnQoZGF0YS5idWRnZXQuZmFybS5zaXplKSA6IDEpO1xuICBkYXRhLmJ1ZGdldC5vcGVyYXRpb25zLmZvckVhY2goZnVuY3Rpb24ob3BlcmF0aW9uKXtcbiAgICBvcGVyYXRpb25Db250cm9sbGVyLmFkZChvcGVyYXRpb24sIG9wdGlvbnMpO1xuICB9KTtcblxuICBvcGVyYXRpb25Db250cm9sbGVyLnJlY2FsYygpO1xuXG4gIGN1cnJlbnREYXRhID0gZGF0YTtcbn1cblxuLy8gVE9ETzogdGhpcyBpcyB1c2VkIGJ5IHNldmVyYWwgd2lkZ2V0cy4gIENvbnRyb2xsZXIgc2hvdWxkIGp1c3Qga2VlcCBhIGxpc3RcbmZ1bmN0aW9uIGdldE1hdGVyaWFsSWRzKCkge1xuICB2YXIgaWRzID0gW107XG4gIHZhciBtYXRlcmlhbHMgPSBtYXRlcmlhbENvbnRyb2xsZXIuZ2V0KCk7XG4gIGZvciggdmFyIHR5cGUgaW4gbWF0ZXJpYWxzICkge1xuICAgIGZvciggdmFyIG5hbWUgaW4gbWF0ZXJpYWxzW3R5cGVdICkge1xuICAgICAgaWYoIG1hdGVyaWFsc1t0eXBlXVtuYW1lXS5pZCApIHtcbiAgICAgICAgaWRzLnB1c2gobWF0ZXJpYWxzW3R5cGVdW25hbWVdLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkcztcbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1dGlscyA6IHJlcXVpcmUoJy4vdXRpbHMnKShvcGVyYXRpb25Db250cm9sbGVyLCBtYXRlcmlhbENvbnRyb2xsZXIpLFxuICBvcGVyYXRpb25Db250cm9sbGVyIDogb3BlcmF0aW9uQ29udHJvbGxlcixcbiAgbWF0ZXJpYWxDb250cm9sbGVyIDogbWF0ZXJpYWxDb250cm9sbGVyLFxuICB0cmFuc2Zvcm0gOiByZXF1aXJlKCcuL3RyYW5zZm9ybScpLFxuICB1Y3VtIDogcmVxdWlyZSgndWN1bS5qcycpLFxuICB1bml0cyA6IHJlcXVpcmUoJy4vdW5pdHMnKSxcbiAgc2F2ZSA6IHJlcXVpcmUoJy4vc2F2ZScpLFxuICBjaGFuZ2VzIDogcmVxdWlyZSgnLi9jaGFuZ2VzJyksXG4gIGdldE1hdGVyaWFsSWRzIDogZ2V0TWF0ZXJpYWxJZHMsXG4gIGdldEJ1ZGdldCA6IGZ1bmN0aW9uKCkge1xuICAgIGlmKCAhY3VycmVudERhdGEuYnVkZ2V0ICkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjdXJyZW50RGF0YS5idWRnZXQub3BlcmF0aW9ucyA9IG9wZXJhdGlvbkNvbnRyb2xsZXIuZ2V0KCk7XG4gICAgcmV0dXJuIGN1cnJlbnREYXRhLmJ1ZGdldDtcbiAgfSxcbiAgbG9hZCA6IGxvYWQsXG4gIHJlc2V0IDogcmVzZXRcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIGtlZXBzIHRyYWNrIG9mIG1hdGVyaWFscywgcHJpY2VzIGFuZCBjb21wbGV4IG1hdGVyaWFscy4gIG1vc3RseSBmb3IgY2xpZW50IGFwcC5cbiAqKi9cblxuIHZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG4gdmFyIHVuaXRzID0gcmVxdWlyZSgnLi4vdW5pdHMnKTtcbiBldmVudHMgPSBuZXcgZXZlbnRzKCk7XG4gZXZlbnRzLnNldE1heExpc3RlbmVycygxMDAwKTtcblxudmFyIGRhdGEgPSB7XG4gbWF0ZXJpYWxzIDoge30sXG4gY29tcGxleCA6IHt9XG59O1xudmFyIG9wZXJhdGlvbkNvbnRyb2xsZXI7XG5cbmZ1bmN0aW9uIGluaXQoY29udHJvbGxlcikge1xuICBvcGVyYXRpb25Db250cm9sbGVyID0gY29udHJvbGxlcjtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gIGRhdGEgPSB7XG4gICBtYXRlcmlhbHMgOiB7fSxcbiAgIGNvbXBsZXggOiB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICBpZiggZGF0YS5tYXRlcmlhbHNbbmFtZV0gKSB7XG4gICAgZGVsZXRlIGRhdGEubWF0ZXJpYWxzW25hbWVdO1xuICAgIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC1yZW1vdmVkJywge1xuICAgICAgbWF0ZXJpYWwgOiBuYW1lXG4gICAgfSk7XG4gICAgcmV0dXJuIHN1Y2Nlc3MoKTtcbiAgfSBlbHNlIGlmKCBkYXRhLmNvbXBsZXhbbmFtZV0gKSB7XG4gICAgZGVsZXRlIGRhdGEuY29tcGxleFtuYW1lXTtcbiAgICBldmVudHMuZW1pdCgnbWF0ZXJpYWwtcmVtb3ZlZCcsIHtcbiAgICAgIG1hdGVyaWFsIDogbmFtZVxuICAgIH0pO1xuICAgIHJldHVybiBzdWNjZXNzKCk7XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IobmFtZSwgJ21hdGVyaWFsICcrbmFtZSsnIGRvZXMgbm90IGV4aXN0JywgMSk7XG59XG5cbi8vIGJ1bGsgYWRkL3VwZGF0ZSBpdGVtcyB3aXRoIG9ubHkgb25lIHJlY2FsY1xuZnVuY3Rpb24gYnVsa0FkZChtYXRlcmlhbHMsIG9wdGlvbnMpIHtcbiAgdmFyIGFkZE9wdGlvbnMgPSB7fSwgaTtcbiAgZm9yKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XG4gICAgYWRkT3B0aW9uc1trZXldID0gb3B0aW9ucztcbiAgfVxuXG4gIGFkZE9wdGlvbnMubm9SZWNhbGMgPSB0cnVlO1xuICBhZGRPcHRpb25zLm5vRXZlbnQgPSB0cnVlO1xuXG4gIHZhciByZXNwb25zZXMgPSB7fTtcbiAgZm9yKCBpID0gMDsgaSA8IG1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgICByZXNwb25zZXNbbWF0ZXJpYWxzW2ldLm5hbWVdID0gYWRkKG1hdGVyaWFsc1tpXSwgYWRkT3B0aW9ucyk7XG4gIH1cblxuICAvLyBub3cganVzdCByZWNhbGMgb25jZVxuICByZWNhbGMoKTtcbiAgb3BlcmF0aW9uQ29udHJvbGxlci5yZWNhbGMoKTtcblxuICBmb3IoIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCByZXNwb25zZXNbbWF0ZXJpYWxzW2ldLm5hbWVdLmVycm9yICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJlc3BvbnNlc1ttYXRlcmlhbHNbaV0ubmFtZV0uYmx1ayA9IHRydWU7XG4gICAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLXVwZGF0ZScsIHJlc3BvbnNlc1ttYXRlcmlhbHNbaV0ubmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlcztcbn1cblxuZnVuY3Rpb24gYWRkKG1hdGVyaWFsLCBvcHRpb25zKSB7XG4gIGlmKCAhb3B0aW9ucyApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiggZGF0YS5tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gJiYgIW9wdGlvbnMucmVwbGFjZSApIHtcbiAgICByZXR1cm4gc2V0RXJyb3IobWF0ZXJpYWwubmFtZSwgJ21hdGVyaWFsIGFscmVhZHkgZXhpc3RzJywgMik7XG4gIH0gZWxzZSBpZiggZGF0YS5jb21wbGV4W21hdGVyaWFsLm5hbWVdICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKG1hdGVyaWFsLm5hbWUsICdtYXRlcmlhbCBhbHJlYWR5IGV4aXN0cycsIDIpO1xuICB9XG5cbiAgdmFyIGlzTmV3ID0gZmFsc2U7XG4gIGlmKCAhZGF0YS5tYXRlcmlhbHNbbWF0ZXJpYWwubmFtZV0gJiYgIWRhdGEuY29tcGxleFttYXRlcmlhbC5uYW1lXSApIHtcbiAgICBpc05ldyA9IHRydWU7XG4gIH1cblxuICBpZiggbWF0ZXJpYWwudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgIGRhdGEuY29tcGxleFttYXRlcmlhbC5uYW1lXSA9IG1hdGVyaWFsO1xuICB9IGVsc2Uge1xuICAgIG1hdGVyaWFsLnR5cGUgPSAnc2ltcGxlJztcbiAgICBkYXRhLm1hdGVyaWFsc1ttYXRlcmlhbC5uYW1lXSA9IG1hdGVyaWFsO1xuICB9XG5cbiAgaWYoIG9wdGlvbnMucmVuYW1lICkge1xuICAgIHJlbW92ZShvcHRpb25zLnJlbmFtZSk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMubm9SZWNhbGMgKSB7XG4gICAgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgbWF0ZXJpYWwgOiBtYXRlcmlhbCxcbiAgICBpc05ldyA6IGlzTmV3LFxuICAgIHJlcGxhY2VkIDogb3B0aW9ucy5yZW5hbWUsXG4gICAgZmxhZyA6IG9wdGlvbnMuZmxhZywgLy8gbGV0IHRoZSBjYWxsZXIgcGFzcyBpdCdzIG93biBmbGFnc1xuICAgIHN1Y2Nlc3MgOiB0cnVlXG4gIH07XG5cbiAgaWYoICFvcHRpb25zLm5vRXZlbnQgKSB7XG4gICAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLXVwZGF0ZScsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gZ2V0KG5hbWUsIG1hdGVyaWFsKSB7XG4gIGlmKCAhbmFtZSApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmKCBkYXRhLm1hdGVyaWFsc1tuYW1lXSApIHtcbiAgICByZXR1cm4gZGF0YS5tYXRlcmlhbHNbbmFtZV07XG4gIH0gZWxzZSBpZiggZGF0YS5jb21wbGV4W25hbWVdICkge1xuICAgIHJldHVybiBkYXRhLmNvbXBsZXhbbmFtZV07XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IobmFtZSwgbmFtZSsnIGlzIG5vdCBpbiB0aGUgbWF0ZXJpYWwgbGlzdCcsIDMpO1xufVxuXG5mdW5jdGlvbiBhc0FycmF5KCkge1xuICB2YXIgYXJyID0gW10sIGtleTtcbiAgZm9yKCBrZXkgaW4gZGF0YS5tYXRlcmlhbHMgKSB7XG4gICAgYXJyLnB1c2goZGF0YS5tYXRlcmlhbHNba2V5XSk7XG4gIH1cbiAgZm9yKCBrZXkgaW4gZGF0YS5jb21wbGV4ICkge1xuICAgIGFyci5wdXNoKGRhdGEuY29tcGxleFtrZXldKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBmaW5kKHR4dCwgaWdub3JlKSB7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJy4qJyt0eHQrJy4qJywgJ2knKTtcbiAgdmFyIHJlc3VsdHMgPSBbXSwga2V5O1xuXG4gIGZvcigga2V5IGluIGRhdGEubWF0ZXJpYWxzICkge1xuICAgIGlmKCBrZXkubWF0Y2gocmUpICYmIGtleSAhPT0gaWdub3JlICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGEubWF0ZXJpYWxzW2tleV0pO1xuICAgIH1cbiAgfVxuICBmb3IoIGtleSBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgaWYoIGtleS5tYXRjaChyZSkgJiYga2V5ICE9PSBpZ25vcmUgICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGEuY29tcGxleFtrZXldKTtcbiAgICB9XG4gIH1cblxuICBmb3IoIHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIHJlc3VsdHNbaV0ubmFtZSA9PT0gdHh0ICkge1xuICAgICAgdmFyIG0gPSByZXN1bHRzLnNwbGljZShpLCAxKVswXTtcbiAgICAgIHJlc3VsdHMuc3BsaWNlKDAsMCxtKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyByZWNhbGMgYWxsIGNvbXBsZXggbWF0ZXJpYWwgY29zdHNcbmZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB2YXIgbWF0ZXJpYWw7XG5cbiAgZm9yKCBtYXRlcmlhbCBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgZGF0YS5jb21wbGV4W21hdGVyaWFsXS5wcmljZSA9IG51bGw7XG4gIH1cblxuICBmb3IoIG1hdGVyaWFsIGluIGRhdGEuY29tcGxleCApIHtcbiAgICB2YXIgbSA9IGRhdGEuY29tcGxleFttYXRlcmlhbF07XG5cbiAgICBpZiggbS5wcmljZSAhPT0gbnVsbCApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuICAgIG0ucHJpY2UgPSBfcmVjYWxjKG0sIFttLm5hbWVdKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdNYXRlcmlhbCBSZWNhbGM6ICcrKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdCkrJ21zJyk7XG59XG5cbmZ1bmN0aW9uIF9yZWNhbGMobWF0ZXJpYWwsIG1hdGVyaWFsQ2hhaW4pe1xuICB2YXIgcHJpY2UgPSAwO1xuXG4gIGZvciggdmFyIGtleSBpbiBtYXRlcmlhbC5tYXRlcmlhbHMgKSB7XG4gICAgdmFyIG0gPSBnZXQoa2V5KTtcblxuICAgIGlmKCBtLmVycm9yICkge1xuICAgICAgaWYoIG1hdGVyaWFsLnVuaXF1ZSAmJiBtYXRlcmlhbC51bmlxdWVba2V5XSApIHtcbiAgICAgICAgbSA9IHtcbiAgICAgICAgICBuYW1lIDoga2V5LFxuICAgICAgICAgIHByaWNlIDogbWF0ZXJpYWwudW5pcXVlW2tleV0ucHJpY2UsXG4gICAgICAgICAgdW5pdHMgOiBtYXRlcmlhbC51bmlxdWVba2V5XS51bml0c1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBtLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW2tleV0uZXJyb3IgPSBtLmVycm9yO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIG1hdGVyaWFsLm1hdGVyaWFsc1trZXldLmVycm9yID0gbnVsbDtcblxuICAgIGlmKCBtLnByaWNlID09PSBudWxsICYmIG0udHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgICAgLy8gbWFrZSBzdXJlIG5vIHJlY3Vyc2lvblxuICAgICAgLy8gVE9ETzogc2hvdWxkIHByb2JhYmx5IGFkZCBlcnJvciB0byBzdGFjayBpZiBpc3N1ZS5cbiAgICAgIGlmKCBtYXRlcmlhbENoYWluLmluZGV4T2YobS5uYW1lKSA9PT0gLTEgKSB7XG4gICAgICAgIG0ucHJpY2UgPSBfcmVjYWxjKG0sIGV4dGVuZENoYWluKG1hdGVyaWFsQ2hhaW4sIG0ubmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQkFETkVTU1xuICAgICAgICBjb25zb2xlLmxvZygnUmVjdXNpdmUgbWF0ZXJpYWxzIGZvdW5kLCBpZ25vcmluZzogJyttYXRlcmlhbENoYWluLmpvaW4oJ2knKSsnICYmICcrbS5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB1bml0cy5jYWxjdWxhdGVDb21wbGV4UHJpY2UobSwgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0sIG1hdGVyaWFsKTtcblxuICAgIGlmKCB2YWx1ZS5lcnJvciApIHtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnByaWNlID0gMDtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLmVycm9yID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1ttLm5hbWVdLnByaWNlID0gdmFsdWUudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpY2UgKz0gbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2U7XG5cbiAgfVxuICByZXR1cm4gcHJpY2U7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZENoYWluKGNoYWluLCBtKSB7XG4gIHZhciBuZXdDaGFpbiA9IGNoYWluLnNsaWNlKCk7XG4gIG5ld0NoYWluLnB1c2gobSk7XG4gIHJldHVybiBjaGFpbjtcbn1cblxuZnVuY3Rpb24gbWF0ZXJpYWxSZWNhbGMobWF0ZXJpYWwpIHtcbiAgaWYoIHR5cGVvZiBtYXRlcmlhbCAhPT0gJ29iamVjdCcgKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYoIG1hdGVyaWFsLnR5cGUgIT09ICdjb21wbGV4JyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbWF0ZXJpYWwucHJpY2UgPSBfcmVjYWxjKG1hdGVyaWFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3JzKCkge1xuICB2YXIgZXJyb3JzID0gW107XG5cbiAgZm9yKCB2YXIgbSBpbiBkYXRhLm1hdGVyaWFscyApIHtcbiAgICBpZiggZGF0YS5tYXRlcmlhbHNbbV0uZXJyb3IgKSB7XG4gICAgICBlcnJvcnMucHVzaChkYXRhLm1hdGVyaWFsc1ttXSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKCB2YXIgaSBpbiBkYXRhLmNvbXBsZXggKSB7XG4gICAgaWYoIGRhdGEuY29tcGxleFtpXS5lcnJvciApIHtcbiAgICAgIGVycm9ycy5wdXNoKGRhdGEuY29tcGxleFtpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciggbSBpbiBkYXRhLmNvbXBsZXhbaV0ubWF0ZXJpYWxzICkge1xuICAgICAgICBpZiggZGF0YS5jb21wbGV4W2ldLm1hdGVyaWFsc1ttXS5lcnJvciApIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChkYXRhLmNvbXBsZXhbaV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBmb3IoIG0gaW4gZGF0YS5jb21wbGV4W2ldLm1hdGVyaWFscyApIHtcbiAgICAgIHZhciBtYXRlcmlhbCA9IGdldChtKTtcbiAgICAgIGlmKCBtYXRlcmlhbC5lcnJvciApIHtcbiAgICAgICAgbWF0ZXJpYWwuZnJvbSA9IGRhdGEuY29tcGxleFtpXTtcbiAgICAgICAgZXJyb3JzLnB1c2gobWF0ZXJpYWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG5cblxuZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgcmV0dXJuIHtzdWNjZXNzOiB0cnVlfTtcbn1cblxuZnVuY3Rpb24gc2V0RXJyb3IobmFtZSwgbXNnLCBjb2RlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZSA6IG5hbWUsXG4gICAgZXJyb3IgOiB0cnVlLFxuICAgIG1lc3NhZ2UgOiBtc2csXG4gICAgY29kZSA6IGNvZGVcbiAgfTtcbn1cblxuLy8gZG9lcyBhIG1hdGVyaWFsIGNvbnRhaW4gb3IgaGF2ZSBhIGRlcGVuZGVuY3kgb24gYSBnaXZlbiBtYXRlcmlhbCBuYW1lXG5mdW5jdGlvbiBjb250YWlucyhtYXRlcmlhbCwgbmFtZSwgcmVwbGFjZWQpIHtcbiAgaWYoIG1hdGVyaWFsLm5hbWUgPT09IG5hbWUgfHwgbWF0ZXJpYWwubmFtZSA9PT0gcmVwbGFjZWQgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiggbWF0ZXJpYWwudHlwZSAhPT0gJ2NvbXBsZXgnIHx8IG1hdGVyaWFsLm1hdGVyaWFscyA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciggdmFyIGtleSBpbiBtYXRlcmlhbC5tYXRlcmlhbHMgKSB7XG4gICAgaWYoIGtleSA9PT0gbmFtZSB8fCBrZXkgPT09IHJlcGxhY2VkICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkQ29udGFpbnMgPSBjb250YWlucyhnZXQoa2V5KSwgbmFtZSwgcmVwbGFjZWQpO1xuICAgIGlmKCBjaGlsZENvbnRhaW5zICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0IDogaW5pdCxcbiAgYWRkIDogYWRkLFxuICBnZXQgOiBnZXQsXG4gIGFzQXJyYXkgOiBhc0FycmF5LFxuICByZW1vdmUgOiByZW1vdmUsXG4gIGZpbmQgOiBmaW5kLFxuICBnZXRFcnJvcnMgOiBnZXRFcnJvcnMsXG4gIGJ1bGtBZGQgOiBidWxrQWRkLFxuICBvbiA6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0sXG4gIHJlbW92ZUxpc3RlbmVyIDogZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSxcbiAgcmVjYWxjIDogcmVjYWxjLFxuICBtYXRlcmlhbFJlY2FsYyA6IG1hdGVyaWFsUmVjYWxjLFxuICBjb250YWlucyA6IGNvbnRhaW5zLFxuICByZXNldCA6IHJlc2V0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdWN1bT1yZXF1aXJlKCd1Y3VtLmpzJyk7XG5cbi8vIFRoZXNlIHRocm93IGVycnMsIGFuZCBuZWVkIHRvIGJlIGluIHRyeSBjYXRjaFxuZnVuY3Rpb24gbXVsdGlwbHkoYSxiLGFfbmFtZXMsYl9uYW1lcykge1xuICB2YXIgYW49e3ZhbHVlOlwidmFsdWVcIix1bml0OlwidW5pdFwifVxuICAsIGJuPXt2YWx1ZTpcInZhbHVlXCIsdW5pdDpcInVuaXRcIn1cbiAgLCBwYXJzZWRcbiAgICAsIHVuaXRcbiAgICAsIHByZT1bXVxuICAgICwgbXVsdD17fVxuICAgIDtcblxuICAgIGlmIChhX25hbWVzKSB7XG4gICAgICBpZiAoYV9uYW1lcy51bml0KSBhbi51bml0PWFfbmFtZXMudW5pdDtcbiAgICAgIGlmIChhX25hbWVzLnZhbHVlKSBhbi52YWx1ZT1hX25hbWVzLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoYl9uYW1lcykge1xuICAgICAgaWYgKGJfbmFtZXMudW5pdCkgYm4udW5pdD1iX25hbWVzLnVuaXQ7XG4gICAgICBpZiAoYl9uYW1lcy52YWx1ZSkgYm4udmFsdWU9Yl9uYW1lcy52YWx1ZTtcbiAgICB9XG5cbiAgcGFyc2VkID0gdWN1bS5wYXJzZSgnKCcrW2FbYW4udW5pdF0rJykuKCcrYltibi51bml0XV0rJyknKTtcbiAgbXVsdC52YWx1ZT0oKGFbYW4udmFsdWVdKT9hW2FuLnZhbHVlXToxKSooKGJbYm4udmFsdWVdKT9iW2JuLnZhbHVlXToxKSpwYXJzZWQudmFsdWU7XG5cbiAgLy8gQ29udmVydCB1bml0IGJhY2tcbiAgZm9yICh1bml0IGluIHBhcnNlZC51bml0cykge1xuICAgIHByZS5wdXNoKHVuaXQrcGFyc2VkLnVuaXRzW3VuaXRdKTtcbiAgfVxuICBtdWx0LnVuaXQ9cHJlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIG11bHQ7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5X3RvX3VuaXRsZXNzKGEsYixhbixibikge1xuICB2YXIgbXVsdD11bml0X211bGl0cGx5KGEsYixhbixibik7XG4gIGlmIChtdWx0LnVuaXQgIT09IHt9KSB7XG4gICAgdGhyb3cgbStcIiBpcyBub3QgdW5pdGxlc3NcIjtcbiAgfVxuICByZXR1cm4gbXVsdDtcbn1cblxuZnVuY3Rpb24gc3VtKGxpc3QsbmFtZXMpIHtcbiAgdmFyIG49e3ZhbHVlOlwidmFsdWVcIix1bml0OlwidW5pdFwifVxuICAsIHN1bVxuICAsIGlcbiAgLCBpX3VuaXRcbiAgO1xuXG4gIGlmIChuYW1lcykge1xuICAgIGlmIChuYW1lcy51bml0KSBuLnVuaXQ9bmFtZXMudW5pdDtcbiAgICBpZiAobmFtZXMudmFsdWUpIG4udmFsdWU9bmFtZXMudmFsdWU7XG4gIH1cbiAgc3VtID0obGlzdC5sZW5ndGggPiAwKT97dmFsdWU6bGlzdFswXVtuLnZhbHVlXSx1bml0Omxpc3RbMF1bbi51bml0XX06e3ZhbHVlOjAsdW5pdDp7fX07XG4gIGZvciAoaT0xO2k8bGlzdC5sZW5ndGg7aSsrKSB7XG4gICAgaV91bml0PSB1Y3VtLmNvbnZlcnQobGlzdFtpXVtuLnZhbHVlXSxsaXN0W2ldW24udW5pdF0sc3VtLnVuaXQpO1xuICAgIHN1bS52YWx1ZSs9aV91bml0LnZhbHVlO1xuICB9XG4gIHJldHVybiB7J3ZhbHVlJzpzdW0udmFsdWUsJ3VuaXQnOnN1bS51bml0fTtcbn1cblxuXG5mdW5jdGlvbiBjbGVhbkRvbGxhcnModW5pdHMpIHtcbiAgaWYoIHVuaXRzID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuICcxJztcbiAgfVxuICByZXR1cm4gdW5pdHMucmVwbGFjZSgvKHVzKT9cXCQvZywgJzEnKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgIHN1bSA6IHN1bSxcbiAgIG11bHRpcGx5IDogbXVsdGlwbHksXG4gICBtdWx0aXBseV90b191bml0bGVzcyA6IG11bHRpcGx5X3RvX3VuaXRsZXNzLFxuICAgY2xlYW5Eb2xsYXJzIDogY2xlYW5Eb2xsYXJzXG4gfTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICoga2VlcHMgdHJhY2sgb2YgbWF0ZXJpYWxzLCBwcmljZXMgYW5kIGNvbXBsZXggbWF0ZXJpYWxzLiAgbW9zdGx5IGZvciBjbGllbnQgYXBwLlxuICoqL1xudmFyIHV1aWQgPSByZXF1aXJlKCdub2RlLXV1aWQnKTtcbnZhciB1bml0cyA9IHJlcXVpcmUoJy4uL3VuaXRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuZXZlbnRzID0gbmV3IGV2ZW50cygpO1xuZXZlbnRzLnNldE1heExpc3RlbmVycygxMDAwKTtcblxudmFyIHRvdGFsID0gMDtcbnZhciBmYXJtU2l6ZSA9IDE7XG52YXIgY3VycmVudFRvdGFsID0gbnVsbDtcbnZhciBkYXRhID0gW10sIG1hdGVyaWFsQ29udHJvbGxlciwgbGFzdFJlY2FsY01zZztcblxuZnVuY3Rpb24gaW5pdChjb250cm9sbGVyKSB7XG4gIG1hdGVyaWFsQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gIG1hdGVyaWFsQ29udHJvbGxlci5vbignbWF0ZXJpYWwtdXBkYXRlJywgaGFuZGxlTWF0ZXJpYWxVcGRhdGVzKTtcbiAgdXRpbHMuaW5pdCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gIHRvdGFsID0gMDtcbiAgZmFybVNpemUgPSAxO1xuICBjdXJyZW50VG90YWwgPSBudWxsO1xuICBkYXRhID0gW107XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gIHZhciBvcDtcblxuICBpZiggdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIGRhdGEuaW5kZXhPZihuYW1lKSA+IC0xICkge1xuICAgIG9wID0gZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKG5hbWUpLCAxKVswXTtcbiAgICBmaXJlVXBkYXRlKCdvcGVyYXRpb24tcmVtb3ZlZCcsIHtvcGVyYXRpb246IG9wfSk7XG5cbiAgICByZXR1cm4gc3VjY2VzcygpO1xuICB9IGVsc2Uge1xuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGlmKCBkYXRhW2ldLm5hbWUgPT09IG5hbWUgICkge1xuICAgICAgICBvcCA9IGRhdGEuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICBmaXJlVXBkYXRlKCdvcGVyYXRpb24tcmVtb3ZlZCcsIHtvcGVyYXRpb246IG9wfSk7XG4gICAgICAgIHJldHVybiBzdWNjZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNldEVycm9yKCdvcGVyYXRpb24gJysodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnID8gbmFtZS5uYW1lIDogbmFtZSkrJyBkb2VzIG5vdCBleGlzdCcpO1xufVxuXG5mdW5jdGlvbiBhZGQob3BlcmF0aW9uLCBvcHRpb25zKSB7XG4gIGlmKCAhb3B0aW9ucyApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgb3AgPSBnZXQob3BlcmF0aW9uLm5hbWUpO1xuICBpZiggIW9wLmVycm9yICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKG9wZXJhdGlvbi5uYW1lLCAnb3BlcmF0aW9uIGFscmVhZHkgZXhpc3RzJyk7XG4gIH1cblxuICBpZiggIW9wZXJhdGlvbi5tYXRlcmlhbHMgKSB7XG4gICAgb3BlcmF0aW9uLm1hdGVyaWFscyA9IFtdO1xuICB9XG5cbiAgLy8gV0hZP1xuICAvL2ZvciggdmFyIGkgPSAwOyBpIDwgb3BlcmF0aW9uLm1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgLy8gIG9wZXJhdGlvbi5tYXRlcmlhbHNbaV0uaWQgPSB1dWlkLnY0KCk7XG4gIC8vfVxuXG4gIHZhciBpc05ldyA9IGZhbHNlO1xuICBpZiggb3AuZXJyb3IgKSB7XG4gICAgaXNOZXcgPSB0cnVlO1xuICAgIGRhdGEucHVzaChvcGVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbZGF0YS5pbmRleE9mKG9wKV0gPSBvcGVyYXRpb247XG4gIH1cblxuXG5cbiAgaWYoIG9wdGlvbnMucmVuYW1lICkge1xuICAgIHJlbW92ZShvcHRpb25zLnJlbmFtZSk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMubm9SZWNhbGMgKSB7XG4gICAgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLFxuICAgIGlzTmV3IDogaXNOZXcsXG4gICAgcmVwbGFjZWQgOiBvcHRpb25zLnJlbmFtZSxcbiAgICBmbGFnIDogb3B0aW9ucy5mbGFnLCAvLyBsZXQgdGhlIGNhbGxlciBwYXNzIGl0J3Mgb3duIGZsYWdzXG4gICAgc3VjY2VzcyA6IHRydWVcbiAgfTtcblxuICBpZiggIW9wdGlvbnMubm9FdmVudCApIHtcbiAgICBmaXJlVXBkYXRlKCdvcGVyYXRpb24tdXBkYXRlJywgcmVzcG9uc2UpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG4vLyBidWxrIGFkZC91cGRhdGUgaXRlbXMgd2l0aCBvbmx5IG9uZSByZWNhbGNcbmZ1bmN0aW9uIGJ1bGtBZGQob3BlcmF0aW9ucywgb3B0aW9ucykge1xuICB2YXIgYWRkT3B0aW9ucyA9IHt9LCBpO1xuICBmb3IoIHZhciBrZXkgaW4gb3B0aW9ucyApIHtcbiAgICBhZGRPcHRpb25zW2tleV0gPSBvcHRpb25zO1xuICB9XG5cbiAgYWRkT3B0aW9ucy5ub1JlY2FsYyA9IHRydWU7XG4gIGFkZE9wdGlvbnMubm9FdmVudCA9IHRydWU7XG5cbiAgdmFyIHJlc3BvbnNlcyA9IHt9O1xuICBmb3IoIGkgPSAwOyBpIDwgb3BlcmF0aW9ucy5sZW5ndGg7IGkrKyApIHtcbiAgICByZXNwb25zZXNbb3BlcmF0aW9uc1tpXS5uYW1lXSA9IGFkZChvcGVyYXRpb25zW2ldLCBhZGRPcHRpb25zKTtcbiAgfVxuXG4gIC8vIG5vdyBqdXN0IHJlY2FsYyBvbmNlXG4gIHJlY2FsYygpO1xuXG4gIGZvciggaSA9IDA7IGkgPCBvcGVyYXRpb25zLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCByZXNwb25zZXNbb3BlcmF0aW9uc1tpXS5uYW1lXS5lcnJvciApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXNwb25zZXNbb3BlcmF0aW9uc1tpXS5uYW1lXS5ibHVrID0gdHJ1ZTtcbiAgICBmaXJlVXBkYXRlKCdvcGVyYXRpb24tdXBkYXRlJywgcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlcztcbn1cblxuZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgaWYoICFuYW1lICkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCBkYXRhW2ldLm5hbWUgPT09IG5hbWUgKSB7XG4gICAgICByZXR1cm4gZGF0YVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2V0RXJyb3IobmFtZSsnIGlzIG5vdCBpbiB0aGUgb3BlcmF0aW9uIGxpc3QnKTtcbn1cblxuZnVuY3Rpb24gZmluZCh0eHQsIGlnbm9yZSkge1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCcuKicrdHh0KycuKicsICdpJyk7XG4gIHZhciByZXN1bHRzID0gW10sIGtleTtcblxuICBmb3IoIHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIGRhdGFbaV0ubmFtZS5tYXRjaChyZSkgJiYgZGF0YVtpXS5uYW1lICE9PSBpZ25vcmUgKSB7XG4gICAgICByZXN1bHRzLnB1c2goZGF0YVtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbi8vIHJlY2FsYyBhbGwgY29tcGxleCBtYXRlcmlhbCBjb3N0c1xuZnVuY3Rpb24gcmVjYWxjKCkge1xuICB2YXIgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIHZhciBvcGVyYXRpb24sIG1lc3NhZ2VzID0gW107XG4gIHRvdGFsID0gMDtcbiAgdmFyIHJhbmdlID0ge1xuICAgIHN0YXJ0IDogbnVsbCxcbiAgICBzdG9wIDogbnVsbCxcbiAgICBhbGwgOiBbXVxuICB9O1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBvcGVyYXRpb24gPSBkYXRhW2ldO1xuICAgIHZhciBuZXdNZXNzYWdlcyA9IG9wZXJhdGlvblJlY2FsYyhvcGVyYXRpb24pO1xuICAgIGZvciggdmFyIGogPSAwOyBqIDwgbmV3TWVzc2FnZXMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBtZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2VzW2pdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NoZWR1bGVkID0gb3BlcmF0aW9uLnNjaGVkdWxlID8gb3BlcmF0aW9uLnNjaGVkdWxlLmxlbmd0aCA6IDA7XG5cbiAgICBpZiggIW9wZXJhdGlvbi5zY2hlZHVsZSApIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBpbmRleCA6IGksXG4gICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICB3YXJuaW5nIDogd2FybignTm8gc2NoZWR1bGUgc2V0JylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVTY2hlZHVsZVJhbmdlKG9wZXJhdGlvbi5zY2hlZHVsZSwgcmFuZ2UsIG9wZXJhdGlvbi5uYW1lKTtcbiAgICB9XG5cbiAgICBvcGVyYXRpb24udG90YWwgPSBzY2hlZHVsZWQgKiBvcGVyYXRpb24uc3VidG90YWw7XG4gICAgdG90YWwgKz0gb3BlcmF0aW9uLnRvdGFsO1xuICB9XG5cblxuICB2YXIgc3BlbmRpbmdCeU1vbnRoID0gdXRpbHMuY2FsY3VsYXRlUGVyTW9udGgocmFuZ2UpO1xuXG4gIGNvbnNvbGUubG9nKCdPcGVyYXRpb24gUmVjYWxjOiAnKyhuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHQpKydtcycpO1xuXG4gIGN1cnJlbnRUb3RhbCA9IHtcbiAgICB0b3RhbCA6IHRvdGFsLFxuICAgIHJhbmdlIDogcmFuZ2UsXG4gICAgc3BlbmRpbmdCeU1vbnRoIDogc3BlbmRpbmdCeU1vbnRoXG4gIH07XG5cbiAgZmlyZVVwZGF0ZSgndG90YWwtdXBkYXRlJywgY3VycmVudFRvdGFsKTtcblxuICBsYXN0UmVjYWxjTXNnID0gbWVzc2FnZXM7XG4gIHJldHVybiBtZXNzYWdlcztcbn1cblxuZnVuY3Rpb24gb3BlcmF0aW9uUmVjYWxjKG9wZXJhdGlvbikge1xuICB2YXIgbWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCwgb3BUb3RhbCA9IDA7XG4gIHZhciBtZXNzYWdlcyA9IFtdO1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgb3BlcmF0aW9uLm1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgICBtYXRlcmlhbEltcGwgPSBvcGVyYXRpb24ubWF0ZXJpYWxzW2ldO1xuICAgIG1hdGVyaWFsSW1wbC5lcnJvciA9IG51bGw7XG5cbiAgICBtYXRlcmlhbERlZiA9IG1hdGVyaWFsQ29udHJvbGxlci5nZXQobWF0ZXJpYWxJbXBsLm5hbWUpO1xuXG4gICAgLy8gd2FzIGEgc3BlY2lmaWVkIG1hdGVyaWFsIG5vdCBmb3VuZD9cbiAgICBpZiggbWF0ZXJpYWxEZWYuZXJyb3IgKSB7XG4gICAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSBtYXRlcmlhbERlZjsgLy8gdGhpcyBpcyBhY3R1YWxseSB0aGUgZXJyb3IgcmVzcG9uc2Ugb2JqZWN0XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgaWQgOiBtYXRlcmlhbEltcGwuaWQsXG4gICAgICAgIG1hdGVyaWFsIDogbWF0ZXJpYWxJbXBsLm5hbWUsXG4gICAgICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lLFxuICAgICAgICBlcnJvciA6IG1hdGVyaWFsRGVmXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHdhcyBhIG1hdGVyaWFsIGFtb3VudCBub3Qgc3BlY2lmaWVkP1xuICAgIGlmKCB0eXBlb2YgbWF0ZXJpYWxEZWYucHJpY2UgIT09ICdudW1iZXInIHx8IGlzTmFOKG1hdGVyaWFsRGVmLnByaWNlKSApIHtcbiAgICAgIG1hdGVyaWFsSW1wbC5lcnJvciA9IHNldEVycm9yKG1hdGVyaWFsRGVmLm5hbWUrJyBmb3VuZCBidXQgcHJpY2UgaXMgbm90IGEgbnVtYmVyLicpO1xuICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgIGlkIDogbWF0ZXJpYWxJbXBsLmlkLFxuICAgICAgICBtYXRlcmlhbCA6IG1hdGVyaWFsSW1wbC5uYW1lLFxuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgd2FybmluZyA6IG1hdGVyaWFsSW1wbC5lcnJvclxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB3YXMgYSBtYXRlcmlhbCBhbW91bnQgbm90IHNwZWNpZmllZD9cbiAgICBpZiggbWF0ZXJpYWxJbXBsLmFtb3VudCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgbWF0ZXJpYWxJbXBsLndhcm5pbmcgPSB3YXJuKCdObyBhbW91bnQgc2V0LiAgU2V0dGluZyB0byAxLicpO1xuICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgIGlkIDogbWF0ZXJpYWxJbXBsLmlkLFxuICAgICAgICBtYXRlcmlhbCA6IG1hdGVyaWFsSW1wbC5uYW1lLFxuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgd2FybmluZyA6IG1hdGVyaWFsSW1wbC53YXJuaW5nXG4gICAgICB9KTtcbiAgICAgIG1hdGVyaWFsSW1wbC5hbW91bnQgPSAxO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHVuaXRzLmNhbGN1bGF0ZU9wTWF0ZXJpYWxQcmljZShtYXRlcmlhbERlZiwgbWF0ZXJpYWxJbXBsKTtcbiAgICBpZiggdmFsdWUuZXJyb3IgKSB7XG4gICAgICBtYXRlcmlhbEltcGwucHJpY2UgPSAwO1xuICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGVyaWFsSW1wbC5wcmljZSA9IHZhbHVlLnZhbHVlO1xuICAgIH1cblxuICAgIC8vIGRpZCBzb21ldGhpbmcgYmFkIGhhcHBlbiBpbiBwcmljZSBjYWxjdWxhdGlvbj9cbiAgICBpZiggaXNOYU4obWF0ZXJpYWxJbXBsLnByaWNlKSApIHtcbiAgICAgIG1hdGVyaWFsSW1wbC5lcnJvciA9IHNldEVycm9yKCdQcmljZSBjYWxjdWxhdGVkIHRvIE5hTi4gIE1hdGVyaWFsIG5vdCBpbmNsdWRlZCBpbiB0b3RhbC4nKTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgbWF0ZXJpYWwgOiBtYXRlcmlhbEltcGwubmFtZSxcbiAgICAgICAgaWQgOiBtYXRlcmlhbEltcGwuaWQsXG4gICAgICAgIGVycm9yIDogbWF0ZXJpYWxJbXBsLmVycm9yXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIG9wVG90YWwgKz0gbWF0ZXJpYWxJbXBsLnByaWNlO1xuICB9XG5cbiAgb3BlcmF0aW9uLnN1YnRvdGFsID0gb3BUb3RhbDtcblxuICByZXR1cm4gbWVzc2FnZXM7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlU2NoZWR1bGVSYW5nZShzY2hlZHVsZSwgcmFuZ2UsIG5hbWUpIHtcbiAgdmFyIHBhcnRzLCBkYXRlO1xuICBzY2hlZHVsZS5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xuICAgIHBhcnRzID0gZC5kYXRlLnNwbGl0KCctJyk7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KHBhcnRzWzBdKSwgcGFyc2VJbnQocGFydHNbMV0pLTEsIHBhcnNlSW50KHBhcnRzWzJdKSk7XG5cbiAgICB2YXIgaW50ZXJ2YWwgPSB7XG4gICAgICBkYXRlIDogZGF0ZSxcbiAgICAgIGxlbmd0aCA6IGQubGVuZ3RoLFxuICAgICAgdW5pdHMgOiBkLnVuaXRzLFxuICAgICAgbmFtZSA6IG5hbWVcbiAgICB9O1xuXG4gICAgcmFuZ2UuYWxsLnB1c2goaW50ZXJ2YWwpO1xuXG4gICAgaWYoIHJhbmdlLnN0YXJ0ID09PSBudWxsICkge1xuICAgICAgcmFuZ2Uuc3RhcnQgPSBkYXRlO1xuICAgIH0gZWxzZSBpZiggcmFuZ2Uuc3RhcnQuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCkgKSB7XG4gICAgICByYW5nZS5zdGFydCA9IGRhdGU7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGdldFN0b3BEYXRlKGludGVydmFsKTtcbiAgICBpZiggcmFuZ2Uuc3RvcCA9PT0gbnVsbCApIHtcbiAgICAgIHJhbmdlLnN0b3AgPSBlbmQ7XG4gICAgfSBlbHNlIGlmKCByYW5nZS5zdG9wLmdldFRpbWUoKSA8IGVuZC5nZXRUaW1lKCkgKSB7XG4gICAgICByYW5nZS5zdG9wID0gZW5kO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3BEYXRlKGludGVydmFsKSB7XG4gIHZhciBsID0gcGFyc2VJbnQoaW50ZXJ2YWwubGVuZ3RoKTtcblxuICBpZiggaW50ZXJ2YWwudW5pdHMgPT09ICd5ZWFyJyApIHtcbiAgICBsID0gbCAqIDg2NDAwMDAwICogMzY1O1xuICB9IGVsc2UgaWYoIGludGVydmFsLnVuaXRzID09PSAnZGF5JyApIHtcbiAgICBsID0gbCAqIDg2NDAwMDAwO1xuICB9IGVsc2Uge1xuICAgIGwgPSBsICogODY0MDAwMDAgKiAzMDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZShpbnRlcnZhbC5kYXRlLmdldFRpbWUoKStsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTWF0ZXJpYWxVcGRhdGVzKGUpIHtcblxuICBpZiggZS5ibHVrICkge1xuICAgIHJldHVybjsgLy8gaWdub3JlIGV2ZW50IGZyb20gYmx1ayB1cGRhdGVzXG4gICAgLy8gYmx1ayB1cGRhdGVyIHdpbGwgbWFudWFsbHkgcG9rZSByZWNhbGMoKTtcbiAgfVxuXG4gIHZhciBtYXRlcmlhbCA9IGUubWF0ZXJpYWw7XG4gIHZhciByZXBsYWNlZCA9IGUucmVwbGFjZWQ7XG5cbiAgcmVjYWxjKCk7XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBvcGVyYXRpb24gPSBkYXRhW2ldO1xuICAgIHZhciBmaXJlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG9wZXJhdGlvbi5tYXRlcmlhbHMubGVuZ3RoOyBqKysgKSB7XG4gICAgICB2YXIgbWF0ZXJpYWxJbXBsID0gb3BlcmF0aW9uLm1hdGVyaWFsc1tqXTtcblxuICAgICAgLy8gdXBkYXRlIGFueSByZW5hbWVzXG4gICAgICBpZiggbWF0ZXJpYWxJbXBsLm5hbWUgPT09IHJlcGxhY2VkICkge1xuICAgICAgICBtYXRlcmlhbEltcGwubmFtZSA9IG1hdGVyaWFsLm5hbWU7XG4gICAgICAgIGZpcmVDaGFuZ2UgPSB0cnVlO1xuXG4gICAgICAvLyBsb29rIHRvIHNlZSBpZiB0aGlzIG9wZXJhdGlvbiBoYXMgdGhlIHVwZGF0ZWQgbWF0ZXJpYWxcbiAgICAgIC8vIHJlY3Vyc2l2ZWx5IGNoZWNrIGNvbXBsZXggZWxlbWVudHNcbiAgICAgIH0gZWxzZSBpZiggbWF0ZXJpYWxDb250cm9sbGVyLmNvbnRhaW5zKG1hdGVyaWFsSW1wbCwgbWF0ZXJpYWwubmFtZSwgcmVwbGFjZWQpICkge1xuICAgICAgICAgIGZpcmVDaGFuZ2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiggZmlyZUNoYW5nZSApIHtcbiAgICAgICAgZmlyZVVwZGF0ZSgnb3BlcmF0aW9uLXVwZGF0ZScsIHtcbiAgICAgICAgICBvcGVyYXRpb246IG9wZXJhdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEZhcm1TaXplKHNpemUpIHtcbiAgZmFybVNpemUgPSBzaXplO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0UmVjYWxjTXNnKCkge1xuICByZXR1cm4gbGFzdFJlY2FsY01zZztcbn1cblxuZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgcmV0dXJuIHtzdWNjZXNzOiB0cnVlfTtcbn1cblxuZnVuY3Rpb24gc2V0RXJyb3IobXNnKSB7XG4gIHJldHVybiB7XG4gICAgZXJyb3IgOiB0cnVlLFxuICAgIG1lc3NhZ2UgOiBtc2dcbiAgfTtcbn1cblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgcmV0dXJuIHtcbiAgICB3YXJuaW5nIDogdHJ1ZSxcbiAgICBtZXNzYWdlIDogbXNnXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRUb3RhbCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRUb3RhbDtcbn1cblxuZnVuY3Rpb24gYWRkVXBkYXRlTWF0ZXJpYWwob3BlcmF0aW9uLCBtYXRlcmlhbCkge1xuICB2YXIgcmVzcCA9IHV0aWxzLmFkZFVwZGF0ZU1hdGVyaWFsKG9wZXJhdGlvbiwgbWF0ZXJpYWwpO1xuICBmaXJlVXBkYXRlKCdtYXRlcmlhbC1hZGRlZCcse1xuICAgIG1hdGVyaWFsIDogbWF0ZXJpYWwubmFtZSxcbiAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZVxuICB9KTtcbiAgcmV0dXJuIHJlc3A7XG59XG5cbi8vIGZpcmUgZXZlbnQgYW5kIGdlbmVyYWwgdXBkYXRlIGV2ZW50XG5mdW5jdGlvbiBmaXJlVXBkYXRlKGUsIGRldGFpbHMpIHtcbiAgLy8gZ2l2ZSBVSSBhIHNlYyB0byBydW5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgIGlmKCBlICkge1xuICAgICAgZXZlbnRzLmVtaXQoZSxkZXRhaWxzKTtcbiAgICB9XG4gICAgZXZlbnRzLmVtaXQoJ3VwZGF0ZScpO1xuICB9LCAxMDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkIDogYWRkLFxuICBnZXQgOiBnZXQsXG4gIHJlbW92ZSA6IHJlbW92ZSxcbiAgYnVsa0FkZCA6IGJ1bGtBZGQsXG4gIGZpbmQgOiBmaW5kLFxuICBvbiA6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0sXG4gIHJlbW92ZUxpc3RlbmVyIDogZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSxcbiAgcmVjYWxjIDogcmVjYWxjLFxuICBpbml0IDogaW5pdCxcbiAgZ2V0TGFzdFJlY2FsY01zZyA6IGdldExhc3RSZWNhbGNNc2csXG4gIGFkZFVwZGF0ZU1hdGVyaWFsIDogYWRkVXBkYXRlTWF0ZXJpYWwsXG4gIHJlcGxhY2VNYXRlcmlhbCA6IHV0aWxzLnJlcGxhY2VNYXRlcmlhbCxcbiAgc2V0RmFybVNpemUgOiBzZXRGYXJtU2l6ZSxcbiAgZ2V0Q3VycmVudFRvdGFsIDogZ2V0Q3VycmVudFRvdGFsLFxuICByZXNldCA6IHJlc2V0LFxuICBmaXJlVXBkYXRlIDogZmlyZVVwZGF0ZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV1aWQgPSByZXF1aXJlKCdub2RlLXV1aWQnKTtcbnZhciBvcGVyYXRpb25Db250cm9sbGVyO1xudmFyIG1zUGVyRGF5ID0gODY0MDAwMDA7XG5cbmZ1bmN0aW9uIGluaXQoY29udHJvbGxlcikge1xuICBvcGVyYXRpb25Db250cm9sbGVyID0gY29udHJvbGxlcjtcbn1cblxuZnVuY3Rpb24gYWRkVXBkYXRlTWF0ZXJpYWwob3BlcmF0aW9uLCBtYXRlcmlhbEltcGwpIHtcbiAgaWYoICFtYXRlcmlhbEltcGwuaWQgKSB7XG4gICAgbWF0ZXJpYWxJbXBsLmlkID0gdXVpZC52NCgpO1xuICAgIG9wZXJhdGlvbi5tYXRlcmlhbHMucHVzaChtYXRlcmlhbEltcGwpO1xuICAgIHJldHVybiB7c3VjY2Vzczp0cnVlLCBtZXNzYWdlOiAnYWRkZWQnfTtcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgb3BlcmF0aW9uLm1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggb3BlcmF0aW9uLm1hdGVyaWFsc1tpXS5pZCA9PT0gbWF0ZXJpYWxJbXBsLmlkICkge1xuICAgICAgb3BlcmF0aW9uLm1hdGVyaWFsc1tpXSA9IG1hdGVyaWFsSW1wbDtcbiAgICAgIHJldHVybiB7c3VjY2Vzczp0cnVlLCBtZXNzYWdlOiAndXBkYXRlZCd9O1xuICAgIH1cbiAgfVxuXG4gIG9wZXJhdGlvbi5tYXRlcmlhbHMucHVzaChtYXRlcmlhbEltcGwpO1xuICByZXR1cm4ge3N1Y2Nlc3M6dHJ1ZSwgbWVzc2FnZTogJ2FkZGVkJ307XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VNYXRlcmlhbChtYXRlcmlhbE5hbWUsIG5ld0lkKSB7XG4gIHZhciBvcHMgPSBvcGVyYXRpb25Db250cm9sbGVyLmdldCgpO1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgb3BzLmxlbmd0aDsgaSsrICkge1xuICAgIGZvciggdmFyIGogPSAwOyBqIDwgb3BzW2ldLm1hdGVyaWFscy5sZW5ndGg7IGorKyApIHtcbiAgICAgIGlmKCBvcHNbaV0ubWF0ZXJpYWxzW2pdLm5hbWUgPT09IG1hdGVyaWFsTmFtZSApIHtcbiAgICAgICAgb3BzW2ldLm1hdGVyaWFsc1tqXS5pZCA9IG5ld0lkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVQZXJNb250aChyYW5nZSkge1xuXG4gIHZhciBudW1Nb250aHMgPSBnZXROdW1Nb250aHMocmFuZ2UpO1xuXG4gIHZhciBtb250aHMgPSBbXTtcblxuICBpZiggIXJhbmdlLnN0YXJ0ICkge1xuICAgIHJldHVybiBtb250aHM7XG4gIH1cblxuICB2YXIgbGFzdCA9IHJhbmdlLnN0YXJ0O1xuICBtb250aHMucHVzaCh7XG4gICAgbW9udGggOiB0b01vbnRoU3RyaW5nKGxhc3QpLFxuICAgIHRvdGFsIDogMFxuICB9KTtcblxuICBmb3IoIHZhciBpID0gMTsgaSA8IG51bU1vbnRoczsgaSsrICkge1xuICAgIGxhc3QgPSBuZXh0TW9udGgobGFzdCk7XG5cbiAgICBtb250aHMucHVzaCh7XG4gICAgICBtb250aCA6IHRvTW9udGhTdHJpbmcobGFzdCksXG4gICAgICB0b3RhbCA6IDBcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBvcGVyYXRpb25zID0gb3BlcmF0aW9uQ29udHJvbGxlci5nZXQoKTtcbiAgZm9yKCB2YXIgeiA9IDA7IHogPCBvcGVyYXRpb25zLmxlbmd0aDsgeisrICkge1xuICAgIHZhciBvcGVyYXRpb24gPSBvcGVyYXRpb25zW3pdO1xuICAgIGlmKCAhb3BlcmF0aW9uLnNjaGVkdWxlICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBvcGVyYXRpb24uc2NoZWR1bGUubGVuZ3RoOyBqKysgKSB7XG4gICAgICB2YXIgZGF0ZSA9IG9wZXJhdGlvbi5zY2hlZHVsZVtqXTtcblxuICAgICAgdmFyIGQgPSB0b0RhdGUoZGF0ZS5kYXRlKTtcbiAgICAgIHZhciBpbmRleCA9IGdldE1vbnRoSW5kZXgodG9Nb250aFN0cmluZyhkKSwgbW9udGhzKTtcbiAgICAgIHZhciBsZW5ndGggPSBnZXRJbnRlcnZhbFRpbWUoZGF0ZSk7XG5cbiAgICAgIGZvciggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYoIG1vbnRocy5sZW5ndGggPD0gaStpbmRleCApIHtcbiAgICAgICAgICBtb250aHMucHVzaCh7XG4gICAgICAgICAgICBtb250aCA6IHRvTW9udGhTdHJpbmcoZCksXG4gICAgICAgICAgICB0b3RhbCA6IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbnRoc1tpK2luZGV4XS50b3RhbCArPSAob3BlcmF0aW9uLnN1YnRvdGFsIC8gbGVuZ3RoKTtcbiAgICAgICAgbW9udGhzW2kraW5kZXhdW29wZXJhdGlvbi5uYW1lXSA9IG9wZXJhdGlvbi5zdWJ0b3RhbCAvIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbW9udGhzO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aEluZGV4KG1vbnRoLCBtb250aHMpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBtb250aHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIG1vbnRoc1tpXS5tb250aCA9PT0gbW9udGggKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIHRvRGF0ZShkYXRlU3RyKSB7XG4gIHZhciBwYXJ0cyA9IGRhdGVTdHIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHBhcnRzWzBdKSwgcGFyc2VJbnQocGFydHNbMV0pLTEsIHBhcnNlSW50KHBhcnRzWzJdKSk7XG59XG5cbmZ1bmN0aW9uIHRvTW9udGhTdHJpbmcoZGF0ZSkge1xuICBpZiggIWRhdGUgKSB7XG4gICAgcmV0dXJuICcxLzE5MDAnO1xuICB9XG4gIHJldHVybiAoZGF0ZS5nZXRNb250aCgpKzEpKycvJysoZGF0ZS5nZXRZZWFyKCkrMTkwMCk7XG59XG5cbmZ1bmN0aW9uIG5leHRNb250aChkYXRlKSB7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFllYXIoKSsxOTAwLCBkYXRlLmdldE1vbnRoKCkrMSwgZGF0ZS5nZXREYXRlKCkpO1xufVxuXG5mdW5jdGlvbiBnZXROdW1Nb250aHMocmFuZ2UpIHtcbiAgaWYoICFyYW5nZS5zdG9wIHx8ICFyYW5nZS5zdGFydCApIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBkaWZmID0gcmFuZ2Uuc3RvcC5nZXRUaW1lKCkgLSByYW5nZS5zdGFydC5nZXRUaW1lKCk7XG4gIGlmKCBkaWZmIDwgODY0MDAwMDAgKiAzMCApIHtcbiAgICBkaWZmID0gODY0MDAwMDAgKiAzMDtcbiAgfVxuXG4gIC8vIE1vbnRocyBiZXR3ZWVuIHllYXJzLlxuICB2YXIgbW9udGhzID0gKHJhbmdlLnN0b3AuZ2V0RnVsbFllYXIoKSAtIHJhbmdlLnN0YXJ0LmdldEZ1bGxZZWFyKCkpICogMTI7XG5cbiAgLy8gTW9udGhzIGJldHdlZW4uLi4gbW9udGhzLlxuICBtb250aHMgKz0gcmFuZ2Uuc3RvcC5nZXRNb250aCgpIC0gcmFuZ2Uuc3RhcnQuZ2V0TW9udGgoKTtcblxuICAvLyBTdWJ0cmFjdCBvbmUgbW9udGggaWYgYidzIGRhdGUgaXMgbGVzcyB0aGF0IGEncy5cbiAgaWYgKHJhbmdlLnN0b3AuZ2V0RGF0ZSgpIDwgcmFuZ2Uuc3RhcnQuZ2V0RGF0ZSgpKSB7XG4gICAgICBtb250aHMtLTtcbiAgfVxuXG4gIHJldHVybiBtb250aHM7XG5cbiAgLy92YXIgZGF5cyA9IGRpZmYgLyA4NjQwMDAwMDtcbiAgLy9yZXR1cm4gTWF0aC5jZWlsKGRheXMgLyAzMCk7XG59XG5cbmZ1bmN0aW9uIGdldEludGVydmFsVGltZShkYXRlKSB7XG4gIHZhciBsID0gcGFyc2VJbnQoZGF0ZS5sZW5ndGgpO1xuICBpZiggZGF0ZS51bml0cyA9PT0gJ3llYXInICkge1xuICAgIHJldHVybiBsICogMTI7XG4gIH0gZWxzZSBpZiggZGF0ZS51bml0cyA9PT0gJ21vbnRoJyApIHtcbiAgICByZXR1cm4gbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCA6IGluaXQsXG4gIGNhbGN1bGF0ZVBlck1vbnRoIDogY2FsY3VsYXRlUGVyTW9udGgsXG4gIGFkZFVwZGF0ZU1hdGVyaWFsIDogYWRkVXBkYXRlTWF0ZXJpYWwsXG4gIHJlcGxhY2VNYXRlcmlhbCA6IHJlcGxhY2VNYXRlcmlhbFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpO1xudmFyIHNjaGVtYSA9IHJlcXVpcmUoJy4vc2NoZW1hJykoKTtcblxudmFyIG9yaWdpbmFsU3RhdGUgPSB7fTtcbnZhciBvcmlnaW5hbElkcyA9IHt9O1xuXG4vLyBzZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgYSBidWRnZXRcbmZ1bmN0aW9uIGluaXQoYnVkZ2V0KSB7XG4gIG9yaWdpbmFsU3RhdGUgPSBleHRlbmQodHJ1ZSwge30sIGJ1ZGdldCk7XG4gIG9yaWdpbmFsSWRzID0ge307XG4gIGlmKCAhb3JpZ2luYWxTdGF0ZS5tYXRlcmlhbHMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgb3JpZ2luYWxTdGF0ZS5tYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgb3JpZ2luYWxJZHNbb3JpZ2luYWxTdGF0ZS5tYXRlcmlhbHNbaV0uaWRdID0gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0J1ZGdldChidWRnZXQpIHtcbiAgaWYoICFidWRnZXQgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKCAhb3JpZ2luYWxTdGF0ZSApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGhhc0NoYW5nZXMoc2NoZW1hLmJ1ZGdldCwgb3JpZ2luYWxTdGF0ZSwgYnVkZ2V0KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tNYXRlcmlhbHMobWF0ZXJpYWxzKSB7XG4gIHZhciBpO1xuICBpZiggbWF0ZXJpYWxzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMob3JpZ2luYWxJZHMpLmxlbmd0aCApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZvciggaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoICFtYXRlcmlhbHNbaV0uaWQgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoICFvcmlnaW5hbElkc1ttYXRlcmlhbHNbaV0uaWRdICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtYXRlcmlhbENoYW5nZXMobWF0ZXJpYWxzLCB1c2VyKSB7XG4gIHZhciBpLCByZXN1bHQgPSBbXTtcbiAgZm9yKCBpID0gMDsgaSA8IG1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggbWF0ZXJpYWxzW2ldLmZpeGVkICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYoIG1hdGVyaWFsc1tpXS5pZCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgcmVzdWx0Lm1hdGVyaWFscy5wdXNoKHtcbiAgICAgICAgbmFtZSA6IG1hdGVyaWFsc1tpXS5uYW1lLFxuICAgICAgICBpc05ldyA6IHRydWUsXG4gICAgICAgIGFjY2VzcyA6IHRydWUsXG4gICAgICAgIGNoYW5nZXMgOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbE1hdGVyaWFsID0gZ2V0QnlJZChtYXRlcmlhbHNbaV0uaWQpO1xuXG4gICAgaWYoIG9yaWdpbmFsTWF0ZXJpYWwudHlwZSAhPT0gbWF0ZXJpYWxzW2ldLnR5cGUgKSB7XG4gICAgICByZXN1bHQubWF0ZXJpYWxzLnB1c2goe1xuICAgICAgICBjaGFuZ2VzIDogdHJ1ZSxcbiAgICAgICAgYWNjZXNzIDogKHVzZXIuYXV0aG9yaXRpZXMuaW5kZXhPZihvcmlnaW5hbE1hdGVyaWFsLmF1dGhvcml0eSkgPiAtMSkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIG9yaWdpbmFsIDogb3JpZ2luYWxNYXRlcmlhbCxcbiAgICAgICAgaWQgOiBtYXRlcmlhbHNbaV0uaWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiggb3JpZ2luYWxNYXRlcmlhbC50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgICByZXN1bHQubWF0ZXJpYWxzLnB1c2goe1xuICAgICAgICBjaGFuZ2VzIDogaGFzQ2hhbmdlcyhzY2hlbWEuY29tcGxleE1hdGVyaWFsLCBvcmlnaW5hbE1hdGVyaWFsLCBtYXRlcmlhbHNbaV0pLFxuICAgICAgICBhY2Nlc3MgOiAodXNlci5hdXRob3JpdGllcy5pbmRleE9mKG9yaWdpbmFsTWF0ZXJpYWwuYXV0aG9yaXR5KSA+IC0xKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgb3JpZ2luYWwgOiBvcmlnaW5hbE1hdGVyaWFsLFxuICAgICAgICBpZCA6IG1hdGVyaWFsc1tpXS5pZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHMucHVzaCh7XG4gICAgICAgIGNoYW5nZXMgOiBoYXNDaGFuZ2VzKHNjaGVtYS5tYXRlcmlhbCwgb3JpZ2luYWxNYXRlcmlhbCwgbWF0ZXJpYWxzW2ldKSxcbiAgICAgICAgYWNjZXNzIDogKHVzZXIuYXV0aG9yaXRpZXMuaW5kZXhPZihvcmlnaW5hbE1hdGVyaWFsLmF1dGhvcml0eSkgPiAtMSkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIG9yaWdpbmFsIDogb3JpZ2luYWxNYXRlcmlhbCxcbiAgICAgICAgaWQgOiBtYXRlcmlhbHNbaV0uaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbi8vIGNoZWNrIHRoZSBjdXJyZW50IHN0YXRlIG9mIGEgYnVkZ2V0XG4vLyBpZiB1c2VyIHByb3ZpZGVkLCBwZXJtaXNzaW9ucyB3aWxsIGJlIGNoZWNrZWQgYXMgd2VsbFxuZnVuY3Rpb24gY2hlY2soYnVkZ2V0LCB1c2VyKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgYnVkZ2V0IDoge1xuICAgICAgY2hhbmdlcyA6IGZhbHNlLFxuICAgICAgYWNjZXNzIDogZmFsc2UsXG4gICAgfSxcbiAgICBtYXRlcmlhbHMgOiBbXVxuICB9O1xuXG5cbiAgcmVzdWx0LmJ1ZGdldC5jaGFuZ2VzID0gaGFzQ2hhbmdlcyhzY2hlbWEuYnVkZ2V0LCBvcmlnaW5hbFN0YXRlLCBidWRnZXQpO1xuICBpZiggdXNlci5hdXRob3JpdGllcy5pbmRleE9mKGJ1ZGdldC5hdXRob3JpdHkpID4gLTEgKSB7XG4gICAgcmVzdWx0LmJ1ZGdldC5hY2Nlc3MgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICBmb3IoIHZhciBpID0gMDsgaSA8IG9yaWdpbmFsU3RhdGUubWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCBvcmlnaW5hbFN0YXRlLm1hdGVyaWFsc1tpXS5pZCA9PT0gaWQgKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxTdGF0ZS5tYXRlcmlhbHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc0NoYW5nZXMoc2NoZW1hLCBvcmlnaW5hbCwgb2JqZWN0KSB7XG4gIGZvciggdmFyIGtleSBpbiBzY2hlbWEgKSB7XG4gICAgaWYoIG9yaWdpbmFsW2tleV0gPT09IHVuZGVmaW5lZCB8fCBvYmplY3Rba2V5XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgaWYoIGtleURpZmYoa2V5LCBvcmlnaW5hbCwgb2JqZWN0KSApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyYW0gPSBzY2hlbWFba2V5XSwgY2hhbmdlcztcblxuICAgIGlmKCBwYXJhbSA9PT0gJ3N0cmluZycgfHwgcGFyYW0gPT09ICdudW1iZXInKSB7XG4gICAgICBpZiggb3JpZ2luYWxba2V5XSsnJyAhPT0gb2JqZWN0W2tleV0rJycgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIEFycmF5LmlzQXJyYXkocGFyYW0pICkge1xuXG4gICAgICBpZigga2V5RGlmZihrZXksIG9yaWdpbmFsLCBvYmplY3QpICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiggcGFyYW1bMF0uX29iamVjdF9hcnJheV8gKSB7XG4gICAgICAgIGNoYW5nZXMgPSBjaGVja09iamVjdEFycmF5KHBhcmFtWzBdLCBvcmlnaW5hbFtrZXldLCBvYmplY3Rba2V5XSk7XG4gICAgICAgIGlmKCBjaGFuZ2VzICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYoIG9yaWdpbmFsW2tleV0ubGVuZ3RoICE9PSBvYmplY3Rba2V5XS5sZW5ndGggKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IoIHZhciBpID0gMDsgaSA8IG9yaWdpbmFsW2tleV0ubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGlmKCBoYXNDaGFuZ2VzKHBhcmFtWzBdLCBvcmlnaW5hbFtrZXldW2ldLCBvYmplY3Rba2V5XVtpXSkgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICBpZiggaGFzQ2hhbmdlcyhwYXJhbSwgb3JpZ2luYWxba2V5XSwgb2JqZWN0W2tleV0pICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoZWNrT2JqZWN0QXJyYXkocGFyYW0sIG9yaWdpbmFsLCBvYmplY3QpIHtcbiAgdmFyIGtleTtcbiAgZm9yKCBrZXkgaW4gb3JpZ2luYWwgKSB7XG4gICAgaWYoICFvYmplY3Rba2V5XSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjaGFuZ2VzID0gaGFzQ2hhbmdlcyhwYXJhbSwgb3JpZ2luYWxba2V5XSwgb2JqZWN0W2tleV0pO1xuICAgIGlmKCBjaGFuZ2VzICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZm9yKCBrZXkgaW4gb2JqZWN0ICkge1xuICAgIGlmKCAhb3JpZ2luYWxba2V5XSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBNb25nb0RCIGRvZXMgbm90IHN0b3JlIGVtcHR5IGFycmF5cywgc28gdW5kZWZpbmVkID09PSBbXSBzaG91bGQgbm90IHRyaXAgYSBjaGFuZ2VcbmZ1bmN0aW9uIGtleURpZmYoa2V5LCBvcmlnaW5hbCwgb2JqZWN0KSB7XG4gIGlmKCBvcmlnaW5hbFtrZXldID09PSB1bmRlZmluZWQgfHwgb2JqZWN0W2tleV0gPT09IHVuZGVmaW5lZCAgKSB7XG4gICAgaWYoIG9yaWdpbmFsW2tleV0gPT09IHVuZGVmaW5lZCAmJiBvYmplY3Rba2V5XSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgaWYoIEFycmF5LmlzQXJyYXkob2JqZWN0W2tleV0pICYmIG9iamVjdFtrZXldLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIG9yaWdpbmFsW2tleV0gIT09IHVuZGVmaW5lZCAmJiBvYmplY3Rba2V5XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgaWYoIEFycmF5LmlzQXJyYXkob3JpZ2luYWxba2V5XSkgJiYgb3JpZ2luYWxba2V5XS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNjaGVtYSA6IHNjaGVtYSxcbiAgaW5pdCA6IGluaXQsXG4gIHN0cmlwIDogcmVxdWlyZSgnLi9zdHJpcCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGJ1ZGdldCA6IHtcbiAgICAgIGF1dGhvcml0eSA6ICdzdHJpbmcnLFxuICAgICAgbG9jYWxpdHkgOiAnYXJyYXknLFxuICAgICAgbmFtZSA6ICdzdHJpbmcnLFxuICAgICAgaWQgOiAnc3RyaW5nJyxcbiAgICAgIG1hdGVyaWFsSWRzIDogJ2FycmF5JyxcbiAgICAgIHJlZmVyZW5jZSA6ICdzdHJpbmcnLFxuICAgICAgZGVsZXRlZCA6ICdib29sZWFuJyxcbiAgICAgIGNvbW1vZGl0eSA6ICdzdHJpbmcnLFxuXG4gICAgICBmYXJtIDoge1xuICAgICAgICBuYW1lIDogJ3N0cmluZycsXG4gICAgICAgIHNpemUgOiAnc3RyaW5nJyxcbiAgICAgICAgdW5pdHMgOiAnc3RyaW5nJ1xuICAgICAgfSxcblxuICAgICAgb3BlcmF0aW9ucyA6IFt7XG4gICAgICAgIG5hbWUgOiAnc3RyaW5nJyxcbiAgICAgICAgdW5pdHMgOiAnc3RyaW5nJyxcblxuICAgICAgICBzY2hlZHVsZSA6IFt7XG4gICAgICAgICAgZGF0ZSA6ICdzdHJpbmcnLFxuICAgICAgICAgIGxlbmd0aCA6ICdzdHJpbmcnLFxuICAgICAgICAgIHVuaXRzIDogJ3N0cmluZydcbiAgICAgICAgfV0sXG5cbiAgICAgICAgbWF0ZXJpYWxzIDogW3tcbiAgICAgICAgICBhbW91bnQgOiAnbnVtYmVyJyxcbiAgICAgICAgICBpZCA6ICdzdHJpbmcnLFxuICAgICAgICAgIG5hbWUgOiAnc3RyaW5nJyxcbiAgICAgICAgICBub3RlIDogJ3N0cmluZycsXG4gICAgICAgICAgdW5pdHMgOiAnc3RyaW5nJ1xuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9LFxuXG4gICAgbWF0ZXJpYWwgOiB7XG4gICAgICBhdXRob3JpdHkgOiAnc3RyaW5nJyxcbiAgICAgIHNvdXJjZSA6ICdzdHJpbmcnLFxuICAgICAgY2xhc3MgOiAnc3RyaW5nJyxcbiAgICAgIGlkIDogJ3N0cmluZycsXG4gICAgICBsb2NhbGl0eSA6ICdhcnJheScsXG4gICAgICBuYW1lIDogJ3N0cmluZycsXG4gICAgICBkZXNjcmlwdGlvbiA6ICdzdHJpbmcnLFxuICAgICAgcHJpY2UgOiAnbnVtYmVyJyxcbiAgICAgIHR5cGUgOiAnc3RyaW5nJyxcbiAgICAgIHVuaXRzIDogJ3N0cmluZycsXG4gICAgICBkZWxldGVkIDogJ2Jvb2xlYW4nXG4gICAgfSxcblxuICAgIGNvbXBsZXhNYXRlcmlhbCA6IHtcbiAgICAgIGF1dGhvcml0eSA6ICdzdHJpbmcnLFxuICAgICAgY2xhc3MgOiAnc3RyaW5nJyxcbiAgICAgIHNvdXJjZSA6ICdzdHJpbmcnLFxuICAgICAgaWQgOiAnc3RyaW5nJyxcbiAgICAgIGxvY2FsaXR5IDogJ2FycmF5JyxcbiAgICAgIG5hbWUgOiAnc3RyaW5nJyxcbiAgICAgIGRlc2NyaXB0aW9uIDogJ3N0cmluZycsXG4gICAgICB0eXBlIDogJ3N0cmluZycsXG4gICAgICB1bml0cyA6ICdzdHJpbmcnLFxuICAgICAgZGVsZXRlZCA6ICdib29sZWFuJyxcblxuICAgICAgbWF0ZXJpYWxzIDogW3tcbiAgICAgICAgX29iamVjdF9hcnJheV8gOiB0cnVlLFxuICAgICAgICBhbW91bnQgOiAnbnVtYmVyJyxcbiAgICAgICAgdW5pdHMgOiAnc3RyaW5nJ1xuICAgICAgfV0sXG4gICAgICBcbiAgICAgIHVuaXF1ZSA6IFt7XG4gICAgICAgIF9vYmplY3RfYXJyYXlfIDogdHJ1ZSxcbiAgICAgICAgcHJpY2UgOiAnbnVtYmVyJyxcbiAgICAgICAgdW5pdHMgOiAnc3RyaW5nJ1xuICAgICAgfV1cbiAgICB9XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNjaGVtYSwgb2JqZWN0KSB7XG4gIHJldHVybiBzdHJpcChzY2hlbWEsIG9iamVjdCk7XG59O1xuXG5mdW5jdGlvbiBzdHJpcChzY2hlbWEsIG9iamVjdCkge1xuICBmb3IoIHZhciBrZXkgaW4gb2JqZWN0ICkge1xuICAgIGlmKCAhc2NoZW1hW2tleV0gKSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyYW0gPSBzY2hlbWFba2V5XTtcblxuICAgIGlmKCBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmKCB0eXBlb2Ygb2JqZWN0W2tleV0gIT09ICdzdHJpbmcnICkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IG9iamVjdFtrZXldKycnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiggcGFyYW0gPT09ICdudW1iZXInKSB7XG4gICAgICBjaGVja051bShrZXksIG9iamVjdCk7XG4gICAgfSBlbHNlIGlmICggQXJyYXkuaXNBcnJheShwYXJhbSkgKSB7XG5cbiAgICAgIGlmKCBwYXJhbVswXS5fb2JqZWN0X2FycmF5XyApIHtcbiAgICAgICAgIGNsZWFuT2JqZWN0QXJyYXkocGFyYW1bMF0sIG9iamVjdFtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgb2JqZWN0W2tleV0ubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgc3RyaXAocGFyYW1bMF0sIG9iamVjdFtrZXldW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICBzdHJpcChwYXJhbSwgb2JqZWN0W2tleV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbk9iamVjdEFycmF5KHNjaGVtYSwgb2JqZWN0KSB7XG4gIGZvciggdmFyIGtleSBpbiBvYmplY3QgKSB7XG4gICAgc3RyaXAoc2NoZW1hLCBvYmplY3Rba2V5XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tOdW0oa2V5LCBvYmplY3QpIHtcbiAgaWYoIHR5cGVvZiBvYmplY3Rba2V5XSAhPT0gJ251bWJlcicgKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcmcgPSBvYmplY3Rba2V5XTtcbiAgICAgIG9iamVjdFtrZXldID0gcGFyc2VGbG9hdChvYmplY3Rba2V5XSk7XG4gICAgICBpZiggaXNOYU4ob2JqZWN0W2tleV0pICkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IG9yZztcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHt9XG5cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgcGx2OCBvYmplY3QgZGVzY3JpcHRpb24gdG8gYXBwIG9iamVjdCBkZXNjcmlwdGlvbi5cbiAqIGluIHRoZSBlbmQsIHRoaXMgc2hvdWxkbid0IGRvIG11Y2guICBqdXN0IGEgbGl0dGxlIGFwcCBzdWdhci5cbiAqKi9cblxuIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICB2YXIgYXBwID0ge1xuICAgICBjbGFzc2VzIDoge30sXG4gICAgIG1hdGVyaWFscyA6IFtdLFxuICAgICBvcGVyYXRpb25zIDogW10sXG4gICAgIGZhcm0gOiB7fVxuICAgfTtcblxuICAgaWYoIGNvbmZpZy5tYXRlcmlhbHMgKSB7XG4gICAgIGFwcC5tYXRlcmlhbHMgPSBnZXRNYXRlcmlhbHMoY29uZmlnLm1hdGVyaWFscyk7XG4gICAgIGFwcC5jbGFzc2VzID0gZ2V0Q2xhc3NlcyhhcHAubWF0ZXJpYWxzKTtcbiAgIH1cbiAgIGlmKCBjb25maWcucHJpY2VzICkge1xuICAgICBqb2luUHJpY2VzKGFwcC5tYXRlcmlhbHMsIGNvbmZpZy5wcmljZXMpO1xuICAgfVxuXG4gICBpZiggY29uZmlnLmZhcm0gKSB7XG4gICAgIHZhciBmYXJtID0gY29uZmlnLmZhcm1bMF07XG4gICAgIGFwcC5mYXJtID0gZ2V0RmFybShmYXJtKTtcblxuICAgICBpZiggZmFybS5vcGVyYXRpb25zICkge1xuICAgICAgIGFwcC5vcGVyYXRpb25zID0gZ2V0T3BlcmF0aW9ucyhmYXJtLm9wZXJhdGlvbnMpO1xuICAgICB9XG4gICAgIGlmKCBmYXJtLnNjaGVkdWxlICkge1xuICAgICAgIGpvaW5TY2hlZHVsZShhcHAub3BlcmF0aW9ucywgZmFybS5zY2hlZHVsZSk7XG4gICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIGFwcDtcbiB9O1xuXG4gZnVuY3Rpb24gam9pblNjaGVkdWxlKG9wZXJhdGlvbnMsIHNjaGVkdWxlcykge1xuICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBzY2hlZHVsZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgIHZhciBzY2hlZHVsZSA9IHNjaGVkdWxlc1tpXTtcbiAgICAgZm9yKCB2YXIgaiA9IDA7IGogPCBvcGVyYXRpb25zLmxlbmd0aDsgaisrICkge1xuICAgICAgIGlmKCBzY2hlZHVsZS5vcGVyYXRpb24gPT09IG9wZXJhdGlvbnNbal0ubmFtZSApIHtcbiAgICAgICAgIHZhciBwYXJ0cyA9IHNjaGVkdWxlLmR1cmF0aW9uLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgIGlmKCBwYXJ0c1sxXS5tYXRjaCgvbW9uLykgKSB7XG4gICAgICAgICAgIHBhcnRzWzFdID0gJ21vbnRoJztcbiAgICAgICAgIH0gZWxzZSBpZiAoIHBhcnRzWzFdLm1hdGNoKC95ZWFyLykgKSB7XG4gICAgICAgICAgIHBhcnRzWzFdID0gJ3llYXInO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgcGFydHNbMV0gPSAnZGF5JztcbiAgICAgICAgIH1cblxuICAgICAgICBvcGVyYXRpb25zW2pdLnNjaGVkdWxlLnB1c2goe1xuICAgICAgICAgIGRhdGUgOiBzY2hlZHVsZS5zdGFydCxcbiAgICAgICAgICBsZW5ndGggOiBwYXJ0c1swXSxcbiAgICAgICAgICB1bml0cyA6IHBhcnRzWzFdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgIH1cbiAgICAgfVxuICAgfVxuIH1cblxuZnVuY3Rpb24gam9pblByaWNlcyhtYXRlcmlhbHMsIHByaWNlcykge1xuICBmb3IoIHZhciBpID0gMDsgaSA8IHByaWNlcy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgcHJpY2UgPSBwcmljZXNbaV07XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG1hdGVyaWFscy5sZW5ndGg7IGorKyApIHtcbiAgICAgIGlmKCBtYXRlcmlhbHNbal0ubmFtZSA9PT0gcHJpY2UubWF0ZXJpYWwgKSB7XG5cbiAgICAgICAgaWYoIG1hdGVyaWFsc1tqXS50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgICAgICAgbWF0ZXJpYWxzW2pdLm1hdGVyaWFscy5Fc3RpbWF0ZSA9IHtcbiAgICAgICAgICAgIHVuaXRzIDogJ3VzJCcsXG4gICAgICAgICAgICBhbW91bnQgOiBwcmljZS5wcmljZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0ZXJpYWxzW2pdLnByaWNlID0gcHJpY2UucHJpY2U7XG4gICAgICAgICAgbWF0ZXJpYWxzW2pdLnVuaXRzID0gcHJpY2UudW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggIWZvdW5kICkge1xuICAgICAgLypjb25zb2xlLmxvZyh7XG4gICAgICAgIG5hbWUgOiBwcmljZS5tYXRlcmlhbCxcbiAgICAgICAgcHJpY2UgOiBwcmljZS5wcmljZSxcbiAgICAgICAgdW5pdHMgOiBwcmljZS51bml0XG4gICAgICB9KTsqL1xuXG4gICAgICBtYXRlcmlhbHMucHVzaCh7XG4gICAgICAgIG5hbWUgOiBwcmljZS5tYXRlcmlhbCxcbiAgICAgICAgcHJpY2UgOiBwcmljZS5wcmljZSxcbiAgICAgICAgdW5pdHMgOiBwcmljZS51bml0XG4gICAgICB9KTsgLy8gVE9ETzogc29tZSBtYXRlcmlhbHMgZG8gbm90IHNlZW0gdG8gYXBwZWFyIGluIG1hdGVyaWFsIGxpc3RcbiAgICB9XG5cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNYXRlcmlhbHMoaW5mbykge1xuICB2YXIgbWF0ZXJpYWxzID0gW107XG5cbiAgaW5mby5mb3JFYWNoKGZ1bmN0aW9uKGkpe1xuICAgIGkubmFtZSA9IGkubWF0ZXJpYWw7XG4gICAgZGVsZXRlIGkubWF0ZXJpYWw7XG5cbiAgICBpLnVuaXRzID0gaS51bml0O1xuICAgIGRlbGV0ZSBpLnVuaXQ7XG5cbiAgICBpZiggIWkucmVxdWlyZXMgKSB7XG4gICAgICBtYXRlcmlhbHMucHVzaChpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpLnR5cGUgPSAnY29tcGxleCc7XG4gICAgaS5tYXRlcmlhbHMgPSB7fTtcblxuICAgIGZvciggdmFyIGogPSAwOyBqIDwgaS5yZXF1aXJlcy5sZW5ndGg7IGorKyApIHtcbiAgICAgIGkubWF0ZXJpYWxzW2kucmVxdWlyZXNbal0ubWF0ZXJpYWxdID0ge1xuICAgICAgICBhbW91bnQgOiBpLnJlcXVpcmVzW2pdLmFtb3VudCxcbiAgICAgICAgb3JpZ2luYWxBbW91bnQgOiBpLnJlcXVpcmVzW2pdLmFtb3VudCxcbiAgICAgICAgdW5pdHMgOiBpLnJlcXVpcmVzW2pdLnVuaXRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVsZXRlIGkucmVxdWlyZXM7XG5cbiAgICBtYXRlcmlhbHMucHVzaChpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1hdGVyaWFscztcbn1cblxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9ucyhpbmZvKSB7XG4gIHZhciBvcHMgPSBbXTtcblxuICBpbmZvLmZvckVhY2goZnVuY3Rpb24oaSl7XG4gICAgdmFyIG9wID0ge1xuICAgICAgbmFtZSA6IGkub3BlcmF0aW9uLFxuICAgICAgbWF0ZXJpYWxzIDogW10sXG4gICAgICB1bml0cyA6ICdbYWNyX3VzXScsXG4gICAgICBzY2hlZHVsZSA6IFtdXG4gICAgfTtcblxuICAgIGZvciggdmFyIGogPSAwOyBqIDwgaS5tYXRlcmlhbHMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpLm1hdGVyaWFsc1tqXS51bml0cyA9IGkubWF0ZXJpYWxzW2pdLnVuaXQ7XG4gICAgICBkZWxldGUgaS5tYXRlcmlhbHNbal0udW5pdDtcbiAgICAgIFxuICAgICAgaS5tYXRlcmlhbHNbal0ubmFtZSA9IGkubWF0ZXJpYWxzW2pdLm1hdGVyaWFsO1xuICAgICAgZGVsZXRlIGkubWF0ZXJpYWxzW2pdLm1hdGVyaWFsO1xuXG4gICAgICBvcC5tYXRlcmlhbHMucHVzaChpLm1hdGVyaWFsc1tqXSk7XG4gICAgfVxuXG4gICAgb3BzLnB1c2gob3ApO1xuICB9KTtcblxuICByZXR1cm4gb3BzO1xufVxuXG5mdW5jdGlvbiBnZXRGYXJtKGluZm8pIHtcbiAgdmFyIGZhcm0gPSB7fTtcbiAgZm9yKCB2YXIga2V5IGluIGluZm8gKSB7XG4gICAgaWYoIHR5cGVvZiBpbmZvW2tleV0gPT09ICdzdHJpbmcnICkge1xuICAgICAgZmFybVtrZXldID0gaW5mb1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFybTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NlcyhtYXRlcmlhbHMpIHtcbiAgdmFyIGNsYXNzZXMgPSB7fTtcblxuICBtYXRlcmlhbHMuZm9yRWFjaChmdW5jdGlvbihtYXRlcmlhbCl7XG4gICAgaWYoIGNsYXNzZXNbbWF0ZXJpYWwuY2xhc3NdICkge1xuICAgICAgY2xhc3Nlc1ttYXRlcmlhbC5jbGFzc10ucHVzaChtYXRlcmlhbC5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3Nlc1ttYXRlcmlhbC5jbGFzc10gPSBbbWF0ZXJpYWwubmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2xhc3Nlcztcbn1cbiIsIi8qKlxuICogaGVscGVyIGZpbGUgZm9yIHRoaW5ncyBsaWtlIFVJIHNlbGVjdG9yc1xuICoqL1xuXG52YXIgdGltZSA9IFtcbiAge1xuICAgIG5hbWUgOiAnbWludXRlJyxcbiAgICBzeW1ib2wgOiAnbWluJ1xuICB9LFxuICB7XG4gICAgbmFtZSA6ICdob3VyJyxcbiAgICBzeW1ib2wgOiAnaCdcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnZGF5JyxcbiAgICBzeW1ib2wgOiAnZCdcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAneWVhcicsXG4gICAgc3ltYm9sIDogJ2EnXG4gIH1cbl07XG5cbnZhciBsZW5ndGggPSBbXG4gIHtcbiAgICBuYW1lIDogJ2NlbnRpbWV0ZXInLFxuICAgIHN5bWJvbCA6ICdjbScsXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2luY2gnLFxuICAgIHN5bWJvbCA6ICdbaW5fdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnaW4nXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdmb290JyxcbiAgICBzeW1ib2wgOiAnW2Z0X3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2Z0J11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnbWV0ZXInLFxuICAgIHN5bWJvbCA6ICdtJyxcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAneWFyZCcsXG4gICAgc3ltYm9sIDogJ1t5ZF91c10nLFxuICAgIGFjY2VwdGVkIDogWyd5ZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ21pbGUnLFxuICAgIHN5bWJvbCA6ICdbbWlfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnbWknXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdraWxvbWV0ZXInLFxuICAgIHN5bWJvbCA6ICdrbScsXG4gIH1cbl07XG5cbnZhciBhcmVhID0gW1xuICB7XG4gICAgbmFtZSA6ICdoZWN0YXJlJyxcbiAgICBzeW1ib2wgOiAnaGFyJyxcbiAgICBhY2NlcHQgOiBbJ2FyJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnYWNyZScsXG4gICAgc3ltYm9sIDogJ1thY3JfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnYWMnXVxuICB9XG5dO1xuXG52YXIgd2VpZ2h0ID0gW1xuICB7XG4gICAgbmFtZSA6ICdvdW5jZScsXG4gICAgc3ltYm9sIDogJ1tvel9hdl0nLFxuICAgIGFjY2VwdGVkIDogWydveiddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3BvdW5kJyxcbiAgICBzeW1ib2wgOiAnW2xiX2F2XScsXG4gICAgYWNjZXB0ZWQgOiBbJ2xiJ11cbiAgfVxuXTtcblxudmFyIHZvbHVtZSA9IFtcbiAge1xuICAgIG5hbWUgOiAnY3VwJyxcbiAgICBzeW1ib2wgOiAnW2N1cF91c10nXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3F1YXJ0JyxcbiAgICBzeW1ib2wgOiAnW3F0X3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ3F0J11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAncGludCcsXG4gICAgc3ltYm9sIDogJ1twdF91c10nLFxuICAgIGFjY2VwdGVkIDogWydwdCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2dhbGxvbicsXG4gICAgc3ltYm9sIDogJ1tnYWxfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsnZ2FsJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnZmx1aWQgb3VuY2UnLFxuICAgIHN5bWJvbCA6ICdbZm96X3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2Zsb3onXVxuICB9XG5dO1xuXG52YXIgcHJpY2UgPSBbXG4gIHtcbiAgICBuYW1lIDogJ2RvbGxhcicsXG4gICAgc3ltYm9sIDogJycsXG4gICAgYWNjZXB0ZWQgOiBbJyQnLCAndXMkJ11cbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByaWNlIDogcHJpY2UsXG4gIHZvbHVtZSA6IHZvbHVtZSxcbiAgd2VpZ2h0IDogd2VpZ2h0LFxuICB0aW1lIDogdGltZSxcbiAgbGVuZ3RoIDogbGVuZ3RoLFxuICBhcmVhIDogYXJlYVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5pdGlvbnMgPSByZXF1aXJlKCcuL2RlZmluaXRpb25zJyk7XG52YXIgbWF0aCA9IHJlcXVpcmUoJy4uL21vZGVsL3VuaXRfbWF0aCcpO1xudmFyIHVjdW0gPSByZXF1aXJlKCd1Y3VtLmpzJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyk7XG5cbnZhciB1Y3VtQ2FjaGUgPSB7fTtcblxudmFyIGxvb2t1cCA9IHt9O1xuZm9yKCB2YXIgdHlwZSBpbiBkZWZpbml0aW9ucyApIHtcbiAgdmFyIGFycmF5ID0gZGVmaW5pdGlvbnNbdHlwZV07XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyApIHtcbiAgICBhcnJheVtpXS50eXBlID0gdHlwZTtcblxuICAgIGxvb2t1cFthcnJheVtpXS5uYW1lXSA9IGFycmF5W2ldO1xuICAgIGlmKCBhcnJheVtpXS5zeW1ib2wgKSB7XG4gICAgICBsb29rdXBbYXJyYXlbaV0uc3ltYm9sXSA9IGFycmF5W2ldO1xuICAgIH1cbiAgICBpZiggYXJyYXlbaV0uYWNjZXB0ZWQgKSB7XG4gICAgICBmb3IoIHZhciBqID0gMDsgaiA8IGFycmF5W2ldLmFjY2VwdGVkLmxlbmd0aDsgaisrICkge1xuICAgICAgICBsb29rdXBbYXJyYXlbaV0uYWNjZXB0ZWRbal1dID0gYXJyYXlbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGdldCBsYWJlbCBmb3IgbmFtZS4gIG1vc3RseSBmb3IgZ2V0dGluZyB1cyQgYXMgJCBvciBbdXNfZ2FsXSBhcyBnYWxsb24uXG5mdW5jdGlvbiBnZXRMYWJlbChuYW1lLCBzaG9ydCkge1xuICB2YXIgcGFydHMsIGxhYmVsO1xuXG4gIGlmKCBuYW1lID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYoIG5hbWUuaW5kZXhPZignLycpID4gLTEgKSB7XG4gICAgcGFydHMgPSBuYW1lLnNwbGl0KCcvJyk7XG5cbiAgICBsYWJlbCA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICBsYWJlbC5wdXNoKGdldExhYmVsKHAsIHNob3J0KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWwuam9pbignLycpO1xuICB9XG5cbiAgaWYoIG5hbWUuaW5kZXhPZignLicpID4gLTEgKSB7XG4gICAgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG5cbiAgICBsYWJlbCA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICBsYWJlbC5wdXNoKGdldExhYmVsKHAsIHNob3J0KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWwuam9pbignKicpO1xuICB9XG5cbiAgdmFyIHR4dCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYoIGxvb2t1cFt0eHRdICkge1xuICAgIGlmKCBzaG9ydCApIHtcbiAgICAgIHJldHVybiBsb29rdXBbdHh0XS5hY2NlcHRlZCA/IGxvb2t1cFt0eHRdLmFjY2VwdGVkWzBdIDogbG9va3VwW3R4dF0uc3ltYm9sO1xuICAgIH1cbiAgICByZXR1cm4gbG9va3VwW3R4dF0ubmFtZTtcbiAgfVxuICByZXR1cm4gbmFtZTtcbn1cblxuLy8gZ2V0IHVuaXRzIG9mIHNhbWUgdHlwZVxuZnVuY3Rpb24gZ2V0TGlrZVVuaXRzKG5hbWUpIHtcbiAgdmFyIHR4dCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYoICFsb29rdXBbdHh0XSApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbnNbbG9va3VwW3R4dF0udHlwZV07XG59XG5cbmZ1bmN0aW9uIGludmVydCh1bml0cykge1xuICB1bml0cyA9IG1hdGguY2xlYW5Eb2xsYXJzKHVuaXRzKTtcbiAgdmFyIHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSB1Y3VtUGFyc2UoJzEvKCcrdW5pdHMrJyknKTtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuIHVuaXRzO1xuICB9XG5cbiAgdmFyIGQgPSBbXSwgbiA9IFtdO1xuICBmb3IoIHZhciBrZXkgaW4gcmVzdWx0LnVuaXRzICkge1xuICAgIGlmKCByZXN1bHQudW5pdHNba2V5XSA9PT0gLTEgKSB7XG4gICAgICBkLnB1c2goa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbi5wdXNoKGtleSk7XG4gICAgfVxuICB9XG5cbiAgaWYoIHJlc3VsdC52YWx1ZSA+IDEgKSB7XG4gICAgbi5wdXNoKHJlc3VsdC52YWx1ZSk7XG4gIH0gZWxzZSBpZiAoIHJlc3VsdC52YWx1ZSA8IDAgKSB7XG4gICAgZC5wdXNoKDEgLyByZXN1bHQudmFsdWUpO1xuICB9XG5cbiAgdW5pdHMgPSBuLmpvaW4oJy4nKTtcblxuICBpZiggdW5pdHMgPT09ICcnICkge1xuICAgIHVuaXRzID0gJ3VzJCc7XG4gIH1cbiAgaWYoIGQubGVuZ3RoID4gMCApIHtcbiAgICB1bml0cyArPSAnLycrZC5qb2luKCcuJyk7XG4gIH1cblxuICByZXR1cm4gdW5pdHM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU9wTWF0ZXJpYWxQcmljZShtYXRlcmlhbERlZiwgbWF0ZXJpYWxJbXBsKSB7XG4gIHZhciBjb252ZXJ0O1xuXG4gIC8vIFRPRE86IHRoaXMgaXMgc3RyYW5nZS4uLiBtaW5kIGlzIHRpcmVkLi4uIGlzIHRoaXMgY29ycmVjdD9cbiAgdmFyIHVuaXRzID0gbWF0ZXJpYWxEZWYudW5pdHM7XG4gIGlmKCBtYXRlcmlhbERlZi50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgdW5pdHMgPSAnMS8oJyt1bml0cysnKSc7XG4gIH1cblxuICBpZiggbWF0ZXJpYWxJbXBsLmFtb3VudCA9PT0gdW5kZWZpbmVkICkge1xuICAgIG1hdGVyaWFsSW1wbC5hbW91bnQgPSAxO1xuICB9XG5cbiAgY29udmVydCA9IGNvbnZlcnRVbml0cyhtYXRlcmlhbEltcGwudW5pdHMsIHVuaXRzKTtcbiAgY29udmVydC5kZWJ1ZzIgPSBtYXRlcmlhbEltcGwuYW1vdW50KycgKiAnK21hdGVyaWFsRGVmLnByaWNlKycgKiAnK2NvbnZlcnQudmFsdWU7XG4gIGNvbnZlcnQudmFsdWUgPSBtYXRlcmlhbEltcGwuYW1vdW50ICogbWF0ZXJpYWxEZWYucHJpY2UgKiBjb252ZXJ0LnZhbHVlO1xuXG4gIHJldHVybiBjb252ZXJ0O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb21wbGV4UHJpY2UobWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCwgY29tcGxleE1hdGVyaWFsKSB7XG4gIC8vIFRPRE86IHRoaXMgaXMgc3RyYW5nZS4uLiBtaW5kIGlzIHRpcmVkLi4uIGlzIHRoaXMgY29ycmVjdD9cbiAgdmFyIHVuaXRzID0gbWF0ZXJpYWxEZWYudW5pdHM7XG4gIGlmKCBtYXRlcmlhbERlZi50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgdW5pdHMgPSAnMS8oJyt1bml0cysnKSc7XG4gIH1cbiAgdmFyIGNvbnZlcnQgPSBjb252ZXJ0VW5pdHMobWF0ZXJpYWxJbXBsLnVuaXRzLCB1bml0cyk7XG5cblxuICBpZiggY29udmVydC5lcnJvciApIHtcbiAgICByZXR1cm4gY29udmVydDtcbiAgfSBlbHNlIGlmKCBPYmplY3Qua2V5cyhjb252ZXJ0LnVuaXRzKS5sZW5ndGggPiAxICkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIG1lc3NhZ2UgOiAnVW5pdHMgZGlkblxcJ3QgY2FuY2VsJyxcbiAgICAgIG1hdGggOiBtYXRlcmlhbEltcGwudW5pdHMrJyAqICcrbWF0ZXJpYWxEZWYudW5pdHNcbiAgICB9O1xuICB9XG5cbiAgaWYoIG1hdGVyaWFsSW1wbC5hbW91bnQgPT09IHVuZGVmaW5lZCApIHtcbiAgICBtYXRlcmlhbEltcGwuYW1vdW50ID0gMTtcbiAgfVxuXG4gIGNvbnZlcnQuZGVidWcyID0gbWF0ZXJpYWxJbXBsLmFtb3VudCsnICogJyttYXRlcmlhbERlZi5wcmljZSsnICogJytjb252ZXJ0LnZhbHVlO1xuICBjb252ZXJ0LnZhbHVlID0gbWF0ZXJpYWxJbXBsLmFtb3VudCAqIG1hdGVyaWFsRGVmLnByaWNlICogY29udmVydC52YWx1ZTtcblxuICByZXR1cm4gY29udmVydDtcbn1cblxuZnVuY3Rpb24gY29udmVydFVuaXRzKHUxLCB1Mikge1xuICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB0cnkge1xuICAgIHZhciB0MSA9IG1hdGguY2xlYW5Eb2xsYXJzKHUxKTtcbiAgICB2YXIgdDIgPSBtYXRoLmNsZWFuRG9sbGFycyh1Mik7XG5cbiAgICAvLyB0cnkgYW5kIHNlZSBpZiB3ZSBjYW4gZmFrZSBpdFxuICAgIGlmKCB0MiA9PT0gJzEvJyt0MSB8fCB0MiA9PT0gJzEvKCcrdDErJyknIHx8IHQxID09PSAnMS8nK3QyIHx8IHQxID09PSAnMS8oJyt0MisnKScgfHwgKHQxID09PSAnJyAmJiB0MiA9PT0gJycpICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUgOiAxLFxuICAgICAgICB1bml0cyA6IHt9LFxuICAgICAgICBzaW1wbGUgOiB0cnVlLFxuICAgICAgICBkZWJ1ZyA6ICcoJyt0MSsnKS4oJyt0MisnKSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2UgYWxsIGJsYW5rIHVuaXRzIGFzIGRvbGxhcnNcbiAgICBpZiggdDEgPT09ICcnICkge1xuICAgICAgdDEgPSAxO1xuICAgIH1cbiAgICBpZiggdDIgPT09ICcnICkge1xuICAgICAgdDIgPSAxO1xuICAgIH1cblxuICAgIHZhciB0bXAgPSAnKCcrdDErJykuKCcrdDIrJyknO1xuICAgIC8vdmFyIHQgPSB1Y3VtLmNhbm9uaWNhbGl6ZSh0bXApO1xuICAgIHZhciB0ID0gdWN1bVBhcnNlKHRtcCk7XG4gICAgdC5kZWJ1ZyA9IHRtcDtcbiAgICByZXR1cm4gdDtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yIDogdHJ1ZSxcbiAgICAgIG1lc3NhZ2UgOiAnVW5hYmxlIHRvIGNvbnZlcnQgdW5pdHMnLFxuICAgICAgbWF0aCA6IHUxKycgKiAnK3UyLFxuICAgICAgZGVidWcgOiAnKCcrbWF0aC5jbGVhbkRvbGxhcnModTEpKycpLignKyBtYXRoLmNsZWFuRG9sbGFycyh1MikrJyknXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1Y3VtUGFyc2UodmFsdWUpIHtcbiAgaWYoIHVjdW1DYWNoZVt2YWx1ZV0gKSB7XG4gICAgcmV0dXJuIGV4dGVuZCh0cnVlLCB7fSwgdWN1bUNhY2hlW3ZhbHVlXSk7XG4gIH1cbiAgdmFyIHJlc3BvbnNlID0gdWN1bS5wYXJzZSh2YWx1ZSk7XG4gIHVjdW1DYWNoZVt2YWx1ZV0gPSBleHRlbmQodHJ1ZSwge30sIHJlc3BvbnNlKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW52ZXJ0IDogaW52ZXJ0LFxuICBjb252ZXJ0VW5pdHMgOiBjb252ZXJ0VW5pdHMsXG4gIGdldExhYmVsIDogZ2V0TGFiZWwsXG4gIGdldExpa2VVbml0cyA6IGdldExpa2VVbml0cyxcbiAgbWF0aCA6IG1hdGgsXG4gIGNhbGN1bGF0ZUNvbXBsZXhQcmljZSA6IGNhbGN1bGF0ZUNvbXBsZXhQcmljZSxcbiAgY2FsY3VsYXRlT3BNYXRlcmlhbFByaWNlIDogY2FsY3VsYXRlT3BNYXRlcmlhbFByaWNlLFxuICBsb29rdXAgOiBsb29rdXAsXG4gIHVjdW1QYXJzZSA6IHVjdW1QYXJzZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV1aWQgPSByZXF1aXJlKCdub2RlLXV1aWQnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBzdGF0ZXMgPSByZXF1aXJlKCcuL3N0YXRlcycpO1xuXG52YXIgbWF0ZXJpYWxDb250cm9sbGVyLCBvcGVyYXRpb25Db250cm9sbGVyO1xuXG52YXIgc3RhdGVzTG9va3VwID0ge307XG5mb3IoIHZhciBrZXkgaW4gc3RhdGVzICkge1xuICBzdGF0ZXNMb29rdXBbc3RhdGVzW2tleV0udG9Mb3dlckNhc2UoKV0gPSBrZXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob0NvbnRyb2wsIG1Db250cm9sKSB7XG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIgPSBvQ29udHJvbDtcbiAgbWF0ZXJpYWxDb250cm9sbGVyID0gbUNvbnRyb2w7XG5cbiAgcmV0dXJuIHtcbiAgICBndWlkIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXVpZC52NCgpO1xuICAgIH0sXG4gICAgaGFzQWNjZXNzIDogaGFzQWNjZXNzLFxuICAgIHF1ZXJ5SGVscGVyIDogcXVlcnlIZWxwZXIsXG4gICAgZ2V0QWN0aXZlTWF0ZXJpYWxzIDogZ2V0QWN0aXZlTWF0ZXJpYWxzLFxuICAgIHN0YXRlcyA6IHN0YXRlcyxcbiAgICBzdGF0ZXNMb29rdXAgOiBzdGF0ZXNMb29rdXBcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGhhc0FjY2Vzcyh1c2VyLCBhdXRob3JpdHkpIHtcbiAgaWYoICF1c2VyICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiggIXVzZXIuYXV0aG9yaXRpZXMgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKCB1c2VyLmF1dGhvcml0aWVzLmluZGV4T2YoYXV0aG9yaXR5KSA+IC0xICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKCB1c2VyLnVzZXJuYW1lID09PSBhdXRob3JpdHkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIGdldCBtYXRlcmlhbHMgY3VycmVudGx5IGluIHVzZSBieSBvcGVyYXRpb25zIGNvbnRyb2xsZXJcbmZ1bmN0aW9uIGdldEFjdGl2ZU1hdGVyaWFscygpIHtcbiAgdmFyIG1hdGVyaWFscyA9IFtdO1xuXG4gIHZhciBvcGVyYXRpb25zID0gb3BlcmF0aW9uQ29udHJvbGxlci5nZXQoKTtcbiAgb3BlcmF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wKXtcbiAgICBfZ2V0QWN0aXZlTWF0ZXJpYWxzKG9wLCBtYXRlcmlhbHMpO1xuICB9KTtcblxuICBtYXRlcmlhbHMuc29ydCgpO1xuICByZXR1cm4gbWF0ZXJpYWxzO1xufVxuXG5mdW5jdGlvbiBfZ2V0QWN0aXZlTWF0ZXJpYWxzKG9iaiwgbGlzdCkge1xuICBpZiggIW9iai5tYXRlcmlhbHMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yKCB2YXIgbmFtZSBpbiBvYmoubWF0ZXJpYWxzICkge1xuICAgIHZhciBkZWYgPSBtYXRlcmlhbENvbnRyb2xsZXIuZ2V0KG5hbWUpO1xuXG4gICAgaWYoIGxpc3QuaW5kZXhPZihkZWYubmFtZSkgPT09IC0xICkge1xuICAgICAgbGlzdC5wdXNoKGRlZi5uYW1lKTtcbiAgICB9XG5cbiAgICBpZiggZGVmLnR5cGUgPT09ICdjb21wbGV4JyApIHtcbiAgICAgIF9nZXRBY3RpdmVNYXRlcmlhbHMoZGVmLCBsaXN0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlIZWxwZXIobG9jYWxpdGllcywgY3JvcCwgdGV4dCkge1xuICB2YXIgcXVlcnkgPSB7fTtcblxuICBpZiggbG9jYWxpdGllcyApIHtcbiAgICB2YXIgbG9jID0gZXh0ZW5kKHRydWUsIFtdLCBsb2NhbGl0aWVzKTtcblxuICAgIGlmKCBsb2MubGVuZ3RoID09PSAxICkge1xuICAgICAgcXVlcnkubG9jYWxpdHkgPSBsb2NbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYoIGxvYy5sZW5ndGggPT09IDIgKSB7XG4gICAgICBxdWVyeS4kYW5kID0gW107XG4gICAgICBhcHBlbmRUb1F1ZXJ5KHF1ZXJ5LiRhbmQsIGxvYyk7XG4gICAgfSBlbHNlIGlmKCBsb2MubGVuZ3RoID4gMiApe1xuICAgICAgdmFyIG9yUXVlcnkgPSB7JG9yIDogW119O1xuICAgICAgcXVlcnkuJGFuZCA9IFt7bG9jYWxpdHk6IGxvYy5zcGxpY2UoMCwxKVswXS50b0xvd2VyQ2FzZSgpfSwgb3JRdWVyeV07XG4gICAgICBhcHBlbmRUb1F1ZXJ5KG9yUXVlcnkuJG9yLCBsb2MpO1xuICAgIH1cbiAgfVxuXG4gIGlmKCBjcm9wICkge1xuICAgIHF1ZXJ5LmNvbW1vZGl0eSA9IGNyb3A7XG4gIH1cblxuICBpZiggdGV4dCApIHtcbiAgICBxdWVyeS4kdGV4dCA9IHsgJHNlYXJjaDogdGV4dCB9O1xuICB9XG5cbiAgcmV0dXJuIHF1ZXJ5O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1F1ZXJ5KGFyciwgZmlsdGVycykge1xuICBmb3IoIHZhciBpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgYXJyLnB1c2goe2xvY2FsaXR5OiBmaWx0ZXJzW2ldLnRvTG93ZXJDYXNlKCl9KTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcImFsYWJhbWFcIjogXCJBTFwiLFxuICBcImFsYXNrYVwiOiBcIkFLXCIsXG4gIFwiYW1lcmljYW4gc2Ftb2FcIjogXCJBU1wiLFxuICBcImFyaXpvbmFcIjogXCJBWlwiLFxuICBcImFya2Fuc2FzXCI6IFwiQVJcIixcbiAgXCJjYWxpZm9ybmlhXCI6IFwiQ0FcIixcbiAgXCJjb2xvcmFkb1wiOiBcIkNPXCIsXG4gIFwiY29ubmVjdGljdXRcIjogXCJDVFwiLFxuICBcImRlbGF3YXJlXCI6IFwiREVcIixcbiAgXCJkaXN0cmljdCBvZiBjb2x1bWJpYVwiOiBcIkRDXCIsXG4gIFwiZmVkZXJhdGVkIHN0YXRlcyBvZiBtaWNyb25lc2lhXCI6IFwiRk1cIixcbiAgXCJmbG9yaWRhXCI6IFwiRkxcIixcbiAgXCJnZW9yZ2lhXCI6IFwiR0FcIixcbiAgXCJndWFtXCI6IFwiR1VcIixcbiAgXCJoYXdhaWlcIjogXCJISVwiLFxuICBcImlkYWhvXCI6IFwiSURcIixcbiAgXCJpbGxpbm9pc1wiOiBcIklMXCIsXG4gIFwiaW5kaWFuYVwiOiBcIklOXCIsXG4gIFwiaW93YVwiOiBcIklBXCIsXG4gIFwia2Fuc2FzXCI6IFwiS1NcIixcbiAgXCJrZW50dWNreVwiOiBcIktZXCIsXG4gIFwibG91aXNpYW5hXCI6IFwiTEFcIixcbiAgXCJtYWluZVwiOiBcIk1FXCIsXG4gIFwibWFyc2hhbGwgaXNsYW5kc1wiOiBcIk1IXCIsXG4gIFwibWFyeWxhbmRcIjogXCJNRFwiLFxuICBcIm1hc3NhY2h1c2V0dHNcIjogXCJNQVwiLFxuICBcIm1pY2hpZ2FuXCI6IFwiTUlcIixcbiAgXCJtaW5uZXNvdGFcIjogXCJNTlwiLFxuICBcIm1pc3Npc3NpcHBpXCI6IFwiTVNcIixcbiAgXCJtaXNzb3VyaVwiOiBcIk1PXCIsXG4gIFwibW9udGFuYVwiOiBcIk1UXCIsXG4gIFwibmVicmFza2FcIjogXCJORVwiLFxuICBcIm5ldmFkYVwiOiBcIk5WXCIsXG4gIFwibmV3IGhhbXBzaGlyZVwiOiBcIk5IXCIsXG4gIFwibmV3IGplcnNleVwiOiBcIk5KXCIsXG4gIFwibmV3IG1leGljb1wiOiBcIk5NXCIsXG4gIFwibmV3IHlvcmtcIjogXCJOWVwiLFxuICBcIm5vcnRoIGNhcm9saW5hXCI6IFwiTkNcIixcbiAgXCJub3J0aCBkYWtvdGFcIjogXCJORFwiLFxuICBcIm5vcnRoZXJuIG1hcmlhbmEgaXNsYW5kc1wiOiBcIk1QXCIsXG4gIFwib2hpb1wiOiBcIk9IXCIsXG4gIFwib2tsYWhvbWFcIjogXCJPS1wiLFxuICBcIm9yZWdvblwiOiBcIk9SXCIsXG4gIFwicGFsYXVcIjogXCJQV1wiLFxuICBcInBlbm5zeWx2YW5pYVwiOiBcIlBBXCIsXG4gIFwicHVlcnRvIHJpY29cIjogXCJQUlwiLFxuICBcInJob2RlIGlzbGFuZFwiOiBcIlJJXCIsXG4gIFwic291dGggY2Fyb2xpbmFcIjogXCJTQ1wiLFxuICBcInNvdXRoIGRha290YVwiOiBcIlNEXCIsXG4gIFwidGVubmVzc2VlXCI6IFwiVE5cIixcbiAgXCJ0ZXhhc1wiOiBcIlRYXCIsXG4gIFwidXRhaFwiOiBcIlVUXCIsXG4gIFwidmVybW9udFwiOiBcIlZUXCIsXG4gIFwidmlyZ2luIGlzbGFuZHNcIjogXCJWSVwiLFxuICBcInZpcmdpbmlhXCI6IFwiVkFcIixcbiAgXCJ3YXNoaW5ndG9uXCI6IFwiV0FcIixcbiAgXCJ3ZXN0IHZpcmdpbmlhXCI6IFwiV1ZcIixcbiAgXCJ3aXNjb25zaW5cIjogXCJXSVwiLFxuICBcInd5b21pbmdcIjogXCJXWVwiXG59XG4iLCIvKiFcbiAqIGRlZXAtZGlmZi5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuOyhmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIHJvb3QuRGVlcERpZmYgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24odW5kZWZpbmVkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgJHNjb3BlLCBjb25mbGljdCwgY29uZmxpY3RSZXNvbHV0aW9uID0gW107XG4gIGlmICh0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHtcbiAgICAkc2NvcGUgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAkc2NvcGUgPSB3aW5kb3c7XG4gIH0gZWxzZSB7XG4gICAgJHNjb3BlID0ge307XG4gIH1cbiAgY29uZmxpY3QgPSAkc2NvcGUuRGVlcERpZmY7XG4gIGlmIChjb25mbGljdCkge1xuICAgIGNvbmZsaWN0UmVzb2x1dGlvbi5wdXNoKFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGNvbmZsaWN0ICYmICRzY29wZS5EZWVwRGlmZiA9PT0gYWNjdW11bGF0ZURpZmYpIHtcbiAgICAgICAgICAkc2NvcGUuRGVlcERpZmYgPSBjb25mbGljdDtcbiAgICAgICAgICBjb25mbGljdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvLyBub2RlanMgY29tcGF0aWJsZSBvbiBzZXJ2ZXIgc2lkZSBhbmQgaW4gdGhlIGJyb3dzZXIuXG4gIGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yO1xuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIERpZmYoa2luZCwgcGF0aCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAna2luZCcsIHtcbiAgICAgIHZhbHVlOiBraW5kLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3BhdGgnLCB7XG4gICAgICAgIHZhbHVlOiBwYXRoLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBEaWZmRWRpdChwYXRoLCBvcmlnaW4sIHZhbHVlKSB7XG4gICAgRGlmZkVkaXQuc3VwZXJfLmNhbGwodGhpcywgJ0UnLCBwYXRoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2xocycsIHtcbiAgICAgIHZhbHVlOiBvcmlnaW4sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyaHMnLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgaW5oZXJpdHMoRGlmZkVkaXQsIERpZmYpO1xuXG4gIGZ1bmN0aW9uIERpZmZOZXcocGF0aCwgdmFsdWUpIHtcbiAgICBEaWZmTmV3LnN1cGVyXy5jYWxsKHRoaXMsICdOJywgcGF0aCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyaHMnLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgaW5oZXJpdHMoRGlmZk5ldywgRGlmZik7XG5cbiAgZnVuY3Rpb24gRGlmZkRlbGV0ZWQocGF0aCwgdmFsdWUpIHtcbiAgICBEaWZmRGVsZXRlZC5zdXBlcl8uY2FsbCh0aGlzLCAnRCcsIHBhdGgpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbGhzJywge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGluaGVyaXRzKERpZmZEZWxldGVkLCBEaWZmKTtcblxuICBmdW5jdGlvbiBEaWZmQXJyYXkocGF0aCwgaW5kZXgsIGl0ZW0pIHtcbiAgICBEaWZmQXJyYXkuc3VwZXJfLmNhbGwodGhpcywgJ0EnLCBwYXRoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2luZGV4Jywge1xuICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaXRlbScsIHtcbiAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGluaGVyaXRzKERpZmZBcnJheSwgRGlmZik7XG5cbiAgZnVuY3Rpb24gYXJyYXlSZW1vdmUoYXJyLCBmcm9tLCB0bykge1xuICAgIHZhciByZXN0ID0gYXJyLnNsaWNlKCh0byB8fCBmcm9tKSArIDEgfHwgYXJyLmxlbmd0aCk7XG4gICAgYXJyLmxlbmd0aCA9IGZyb20gPCAwID8gYXJyLmxlbmd0aCArIGZyb20gOiBmcm9tO1xuICAgIGFyci5wdXNoLmFwcGx5KGFyciwgcmVzdCk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWxUeXBlT2Yoc3ViamVjdCkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3Q7XG4gICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG5cbiAgICBpZiAoc3ViamVjdCA9PT0gTWF0aCkge1xuICAgICAgcmV0dXJuICdtYXRoJztcbiAgICB9IGVsc2UgaWYgKHN1YmplY3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHN1YmplY3QpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHN1YmplY3QgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ2RhdGUnO1xuICAgIH0gZWxzZSBpZiAoL15cXC8uKlxcLy8udGVzdChzdWJqZWN0LnRvU3RyaW5nKCkpKSB7XG4gICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgfVxuICAgIHJldHVybiAnb2JqZWN0JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZXBEaWZmKGxocywgcmhzLCBjaGFuZ2VzLCBwcmVmaWx0ZXIsIHBhdGgsIGtleSwgc3RhY2spIHtcbiAgICBwYXRoID0gcGF0aCB8fCBbXTtcbiAgICB2YXIgY3VycmVudFBhdGggPSBwYXRoLnNsaWNlKDApO1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHByZWZpbHRlciAmJiBwcmVmaWx0ZXIoY3VycmVudFBhdGgsIGtleSwgeyBsaHM6IGxocywgcmhzOiByaHMgfSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY3VycmVudFBhdGgucHVzaChrZXkpO1xuICAgIH1cbiAgICB2YXIgbHR5cGUgPSB0eXBlb2YgbGhzO1xuICAgIHZhciBydHlwZSA9IHR5cGVvZiByaHM7XG4gICAgaWYgKGx0eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHJ0eXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjaGFuZ2VzKG5ldyBEaWZmTmV3KGN1cnJlbnRQYXRoLCByaHMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJ0eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2hhbmdlcyhuZXcgRGlmZkRlbGV0ZWQoY3VycmVudFBhdGgsIGxocykpO1xuICAgIH0gZWxzZSBpZiAocmVhbFR5cGVPZihsaHMpICE9PSByZWFsVHlwZU9mKHJocykpIHtcbiAgICAgIGNoYW5nZXMobmV3IERpZmZFZGl0KGN1cnJlbnRQYXRoLCBsaHMsIHJocykpO1xuICAgIH0gZWxzZSBpZiAobGhzIGluc3RhbmNlb2YgRGF0ZSAmJiByaHMgaW5zdGFuY2VvZiBEYXRlICYmICgobGhzIC0gcmhzKSAhPT0gMCkpIHtcbiAgICAgIGNoYW5nZXMobmV3IERpZmZFZGl0KGN1cnJlbnRQYXRoLCBsaHMsIHJocykpO1xuICAgIH0gZWxzZSBpZiAobHR5cGUgPT09ICdvYmplY3QnICYmIGxocyAhPT0gbnVsbCAmJiByaHMgIT09IG51bGwpIHtcbiAgICAgIHN0YWNrID0gc3RhY2sgfHwgW107XG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihsaHMpIDwgMCkge1xuICAgICAgICBzdGFjay5wdXNoKGxocyk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxocykpIHtcbiAgICAgICAgICB2YXIgaSwgbGVuID0gbGhzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSByaHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNoYW5nZXMobmV3IERpZmZBcnJheShjdXJyZW50UGF0aCwgaSwgbmV3IERpZmZEZWxldGVkKHVuZGVmaW5lZCwgbGhzW2ldKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVlcERpZmYobGhzW2ldLCByaHNbaV0sIGNoYW5nZXMsIHByZWZpbHRlciwgY3VycmVudFBhdGgsIGksIHN0YWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKGkgPCByaHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjaGFuZ2VzKG5ldyBEaWZmQXJyYXkoY3VycmVudFBhdGgsIGksIG5ldyBEaWZmTmV3KHVuZGVmaW5lZCwgcmhzW2krK10pKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBha2V5cyA9IE9iamVjdC5rZXlzKGxocyk7XG4gICAgICAgICAgdmFyIHBrZXlzID0gT2JqZWN0LmtleXMocmhzKTtcbiAgICAgICAgICBha2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGssIGkpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IHBrZXlzLmluZGV4T2Yoayk7XG4gICAgICAgICAgICBpZiAob3RoZXIgPj0gMCkge1xuICAgICAgICAgICAgICBkZWVwRGlmZihsaHNba10sIHJoc1trXSwgY2hhbmdlcywgcHJlZmlsdGVyLCBjdXJyZW50UGF0aCwgaywgc3RhY2spO1xuICAgICAgICAgICAgICBwa2V5cyA9IGFycmF5UmVtb3ZlKHBrZXlzLCBvdGhlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWVwRGlmZihsaHNba10sIHVuZGVmaW5lZCwgY2hhbmdlcywgcHJlZmlsdGVyLCBjdXJyZW50UGF0aCwgaywgc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBrZXlzLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgZGVlcERpZmYodW5kZWZpbmVkLCByaHNba10sIGNoYW5nZXMsIHByZWZpbHRlciwgY3VycmVudFBhdGgsIGssIHN0YWNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5sZW5ndGggPSBzdGFjay5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGhzICE9PSByaHMpIHtcbiAgICAgIGlmICghKGx0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTihsaHMpICYmIGlzTmFOKHJocykpKSB7XG4gICAgICAgIGNoYW5nZXMobmV3IERpZmZFZGl0KGN1cnJlbnRQYXRoLCBsaHMsIHJocykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY3VtdWxhdGVEaWZmKGxocywgcmhzLCBwcmVmaWx0ZXIsIGFjY3VtKSB7XG4gICAgYWNjdW0gPSBhY2N1bSB8fCBbXTtcbiAgICBkZWVwRGlmZihsaHMsIHJocyxcbiAgICAgIGZ1bmN0aW9uKGRpZmYpIHtcbiAgICAgICAgaWYgKGRpZmYpIHtcbiAgICAgICAgICBhY2N1bS5wdXNoKGRpZmYpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJlZmlsdGVyKTtcbiAgICByZXR1cm4gKGFjY3VtLmxlbmd0aCkgPyBhY2N1bSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5QXJyYXlDaGFuZ2UoYXJyLCBpbmRleCwgY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5wYXRoICYmIGNoYW5nZS5wYXRoLmxlbmd0aCkge1xuICAgICAgdmFyIGl0ID0gYXJyW2luZGV4XSxcbiAgICAgICAgaSwgdSA9IGNoYW5nZS5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdTsgaSsrKSB7XG4gICAgICAgIGl0ID0gaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChjaGFuZ2Uua2luZCkge1xuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICBhcHBseUFycmF5Q2hhbmdlKGl0W2NoYW5nZS5wYXRoW2ldXSwgY2hhbmdlLmluZGV4LCBjaGFuZ2UuaXRlbSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgIGRlbGV0ZSBpdFtjaGFuZ2UucGF0aFtpXV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICBpdFtjaGFuZ2UucGF0aFtpXV0gPSBjaGFuZ2UucmhzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGNoYW5nZS5raW5kKSB7XG4gICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgIGFwcGx5QXJyYXlDaGFuZ2UoYXJyW2luZGV4XSwgY2hhbmdlLmluZGV4LCBjaGFuZ2UuaXRlbSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgIGFyciA9IGFycmF5UmVtb3ZlKGFyciwgaW5kZXgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgYXJyW2luZGV4XSA9IGNoYW5nZS5yaHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUNoYW5nZSh0YXJnZXQsIHNvdXJjZSwgY2hhbmdlKSB7XG4gICAgaWYgKHRhcmdldCAmJiBzb3VyY2UgJiYgY2hhbmdlICYmIGNoYW5nZS5raW5kKSB7XG4gICAgICB2YXIgaXQgPSB0YXJnZXQsXG4gICAgICAgIGkgPSAtMSxcbiAgICAgICAgbGFzdCA9IGNoYW5nZS5wYXRoID8gY2hhbmdlLnBhdGgubGVuZ3RoIC0gMSA6IDA7XG4gICAgICB3aGlsZSAoKytpIDwgbGFzdCkge1xuICAgICAgICBpZiAodHlwZW9mIGl0W2NoYW5nZS5wYXRoW2ldXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpdFtjaGFuZ2UucGF0aFtpXV0gPSAodHlwZW9mIGNoYW5nZS5wYXRoW2ldID09PSAnbnVtYmVyJykgPyBbXSA6IHt9O1xuICAgICAgICB9XG4gICAgICAgIGl0ID0gaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChjaGFuZ2Uua2luZCkge1xuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICBhcHBseUFycmF5Q2hhbmdlKGNoYW5nZS5wYXRoID8gaXRbY2hhbmdlLnBhdGhbaV1dIDogaXQsIGNoYW5nZS5pbmRleCwgY2hhbmdlLml0ZW0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICBkZWxldGUgaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgaXRbY2hhbmdlLnBhdGhbaV1dID0gY2hhbmdlLnJocztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRBcnJheUNoYW5nZShhcnIsIGluZGV4LCBjaGFuZ2UpIHtcbiAgICBpZiAoY2hhbmdlLnBhdGggJiYgY2hhbmdlLnBhdGgubGVuZ3RoKSB7XG4gICAgICAvLyB0aGUgc3RydWN0dXJlIG9mIHRoZSBvYmplY3QgYXQgdGhlIGluZGV4IGhhcyBjaGFuZ2VkLi4uXG4gICAgICB2YXIgaXQgPSBhcnJbaW5kZXhdLFxuICAgICAgICBpLCB1ID0gY2hhbmdlLnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB1OyBpKyspIHtcbiAgICAgICAgaXQgPSBpdFtjaGFuZ2UucGF0aFtpXV07XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGNoYW5nZS5raW5kKSB7XG4gICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgIHJldmVydEFycmF5Q2hhbmdlKGl0W2NoYW5nZS5wYXRoW2ldXSwgY2hhbmdlLmluZGV4LCBjaGFuZ2UuaXRlbSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgIGl0W2NoYW5nZS5wYXRoW2ldXSA9IGNoYW5nZS5saHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgIGl0W2NoYW5nZS5wYXRoW2ldXSA9IGNoYW5nZS5saHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgIGRlbGV0ZSBpdFtjaGFuZ2UucGF0aFtpXV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoZSBhcnJheSBpdGVtIGlzIGRpZmZlcmVudC4uLlxuICAgICAgc3dpdGNoIChjaGFuZ2Uua2luZCkge1xuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICByZXZlcnRBcnJheUNoYW5nZShhcnJbaW5kZXhdLCBjaGFuZ2UuaW5kZXgsIGNoYW5nZS5pdGVtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgYXJyW2luZGV4XSA9IGNoYW5nZS5saHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgIGFycltpbmRleF0gPSBjaGFuZ2UubGhzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICBhcnIgPSBhcnJheVJlbW92ZShhcnIsIGluZGV4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydENoYW5nZSh0YXJnZXQsIHNvdXJjZSwgY2hhbmdlKSB7XG4gICAgaWYgKHRhcmdldCAmJiBzb3VyY2UgJiYgY2hhbmdlICYmIGNoYW5nZS5raW5kKSB7XG4gICAgICB2YXIgaXQgPSB0YXJnZXQsXG4gICAgICAgIGksIHU7XG4gICAgICB1ID0gY2hhbmdlLnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB1OyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdFtjaGFuZ2UucGF0aFtpXV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaXRbY2hhbmdlLnBhdGhbaV1dID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaXQgPSBpdFtjaGFuZ2UucGF0aFtpXV07XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGNoYW5nZS5raW5kKSB7XG4gICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgIC8vIEFycmF5IHdhcyBtb2RpZmllZC4uLlxuICAgICAgICAgIC8vIGl0IHdpbGwgYmUgYW4gYXJyYXkuLi5cbiAgICAgICAgICByZXZlcnRBcnJheUNoYW5nZShpdFtjaGFuZ2UucGF0aFtpXV0sIGNoYW5nZS5pbmRleCwgY2hhbmdlLml0ZW0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAvLyBJdGVtIHdhcyBkZWxldGVkLi4uXG4gICAgICAgICAgaXRbY2hhbmdlLnBhdGhbaV1dID0gY2hhbmdlLmxocztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgLy8gSXRlbSB3YXMgZWRpdGVkLi4uXG4gICAgICAgICAgaXRbY2hhbmdlLnBhdGhbaV1dID0gY2hhbmdlLmxocztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgLy8gSXRlbSBpcyBuZXcuLi5cbiAgICAgICAgICBkZWxldGUgaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5RGlmZih0YXJnZXQsIHNvdXJjZSwgZmlsdGVyKSB7XG4gICAgaWYgKHRhcmdldCAmJiBzb3VyY2UpIHtcbiAgICAgIHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgICAgICBpZiAoIWZpbHRlciB8fCBmaWx0ZXIodGFyZ2V0LCBzb3VyY2UsIGNoYW5nZSkpIHtcbiAgICAgICAgICBhcHBseUNoYW5nZSh0YXJnZXQsIHNvdXJjZSwgY2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRlZXBEaWZmKHRhcmdldCwgc291cmNlLCBvbkNoYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYWNjdW11bGF0ZURpZmYsIHtcblxuICAgIGRpZmY6IHtcbiAgICAgIHZhbHVlOiBhY2N1bXVsYXRlRGlmZixcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LFxuICAgIG9ic2VydmFibGVEaWZmOiB7XG4gICAgICB2YWx1ZTogZGVlcERpZmYsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBhcHBseURpZmY6IHtcbiAgICAgIHZhbHVlOiBhcHBseURpZmYsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBhcHBseUNoYW5nZToge1xuICAgICAgdmFsdWU6IGFwcGx5Q2hhbmdlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgcmV2ZXJ0Q2hhbmdlOiB7XG4gICAgICB2YWx1ZTogcmV2ZXJ0Q2hhbmdlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgaXNDb25mbGljdDoge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBjb25mbGljdDtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBub0NvbmZsaWN0OiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25mbGljdFJlc29sdXRpb24pIHtcbiAgICAgICAgICBjb25mbGljdFJlc29sdXRpb24uZm9yRWFjaChmdW5jdGlvbihpdCkge1xuICAgICAgICAgICAgaXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25mbGljdFJlc29sdXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRlRGlmZjtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYWNjdW11bGF0ZURpZmY7XG59KSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7LyoqL31cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9IGVsc2UgaWYgKCh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB8fCB0YXJnZXQgPT0gbnVsbCkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBjb3B5KSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsIi8vICAgICB1dWlkLmpzXG4vL1xuLy8gICAgIENvcHlyaWdodCAoYykgMjAxMC0yMDEyIFJvYmVydCBLaWVmZmVyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIF9nbG9iYWwgPSB0aGlzO1xuXG4gIC8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBXZSBmZWF0dXJlXG4gIC8vIGRldGVjdCB0byBkZXRlcm1pbmUgdGhlIGJlc3QgUk5HIHNvdXJjZSwgbm9ybWFsaXppbmcgdG8gYSBmdW5jdGlvbiB0aGF0XG4gIC8vIHJldHVybnMgMTI4LWJpdHMgb2YgcmFuZG9tbmVzcywgc2luY2UgdGhhdCdzIHdoYXQncyB1c3VhbGx5IHJlcXVpcmVkXG4gIHZhciBfcm5nO1xuXG4gIC8vIE5vZGUuanMgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly9ub2RlanMub3JnL2RvY3MvdjAuNi4yL2FwaS9jcnlwdG8uaHRtbFxuICAvL1xuICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICBpZiAodHlwZW9mKF9nbG9iYWwucmVxdWlyZSkgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX3JiID0gX2dsb2JhbC5yZXF1aXJlKCdjcnlwdG8nKS5yYW5kb21CeXRlcztcbiAgICAgIF9ybmcgPSBfcmIgJiYgZnVuY3Rpb24oKSB7cmV0dXJuIF9yYigxNik7fTtcbiAgICB9IGNhdGNoKGUpIHt9XG4gIH1cblxuICBpZiAoIV9ybmcgJiYgX2dsb2JhbC5jcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIFdIQVRXRyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICAgIC8vXG4gICAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcbiAgICB2YXIgX3JuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIF9ybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKF9ybmRzOCk7XG4gICAgICByZXR1cm4gX3JuZHM4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIV9ybmcpIHtcbiAgICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gICAgLy9cbiAgICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAgIC8vIHF1YWxpdHkuXG4gICAgdmFyICBfcm5kcyA9IG5ldyBBcnJheSgxNik7XG4gICAgX3JuZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgICBfcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9ybmRzO1xuICAgIH07XG4gIH1cblxuICAvLyBCdWZmZXIgY2xhc3MgdG8gdXNlXG4gIHZhciBCdWZmZXJDbGFzcyA9IHR5cGVvZihfZ2xvYmFsLkJ1ZmZlcikgPT0gJ2Z1bmN0aW9uJyA/IF9nbG9iYWwuQnVmZmVyIDogQXJyYXk7XG5cbiAgLy8gTWFwcyBmb3IgbnVtYmVyIDwtPiBoZXggc3RyaW5nIGNvbnZlcnNpb25cbiAgdmFyIF9ieXRlVG9IZXggPSBbXTtcbiAgdmFyIF9oZXhUb0J5dGUgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIF9ieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICAgIF9oZXhUb0J5dGVbX2J5dGVUb0hleFtpXV0gPSBpO1xuICB9XG5cbiAgLy8gKipgcGFyc2UoKWAgLSBQYXJzZSBhIFVVSUQgaW50byBpdCdzIGNvbXBvbmVudCBieXRlcyoqXG4gIGZ1bmN0aW9uIHBhcnNlKHMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSAoYnVmICYmIG9mZnNldCkgfHwgMCwgaWkgPSAwO1xuXG4gICAgYnVmID0gYnVmIHx8IFtdO1xuICAgIHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bMC05YS1mXXsyfS9nLCBmdW5jdGlvbihvY3QpIHtcbiAgICAgIGlmIChpaSA8IDE2KSB7IC8vIERvbid0IG92ZXJmbG93IVxuICAgICAgICBidWZbaSArIGlpKytdID0gX2hleFRvQnl0ZVtvY3RdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gWmVybyBvdXQgcmVtYWluaW5nIGJ5dGVzIGlmIHN0cmluZyB3YXMgc2hvcnRcbiAgICB3aGlsZSAoaWkgPCAxNikge1xuICAgICAgYnVmW2kgKyBpaSsrXSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIC8vICoqYHVucGFyc2UoKWAgLSBDb252ZXJ0IFVVSUQgYnl0ZSBhcnJheSAoYWxhIHBhcnNlKCkpIGludG8gYSBzdHJpbmcqKlxuICBmdW5jdGlvbiB1bnBhcnNlKGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSBvZmZzZXQgfHwgMCwgYnRoID0gX2J5dGVUb0hleDtcbiAgICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xuICB9XG5cbiAgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuICAvL1xuICAvLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuICAvLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4gIC8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG4gIHZhciBfc2VlZEJ5dGVzID0gX3JuZygpO1xuXG4gIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICB2YXIgX25vZGVJZCA9IFtcbiAgICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICBfc2VlZEJ5dGVzWzFdLCBfc2VlZEJ5dGVzWzJdLCBfc2VlZEJ5dGVzWzNdLCBfc2VlZEJ5dGVzWzRdLCBfc2VlZEJ5dGVzWzVdXG4gIF07XG5cbiAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgdmFyIF9jbG9ja3NlcSA9IChfc2VlZEJ5dGVzWzZdIDw8IDggfCBfc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcblxuICAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbiAgdmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG4gIGZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gICAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT0gbnVsbCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAgIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gICAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gICAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9IG51bGwgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gICAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9IG51bGwgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gICAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAgIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgICAvLyB0aW1lIGludGVydmFsXG4gICAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09IG51bGwpIHtcbiAgICAgIG5zZWNzID0gMDtcbiAgICB9XG5cbiAgICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gICAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgICB9XG5cbiAgICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gICAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gICAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgICAvLyBgdGltZV9sb3dgXG4gICAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICAgIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gICAgLy8gYHRpbWVfbWlkYFxuICAgIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAgIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICAgIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAgIC8vIGBjbG9ja19zZXFfbG93YFxuICAgIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAgIC8vIGBub2RlYFxuICAgIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyBuKyspIHtcbiAgICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmID8gYnVmIDogdW5wYXJzZShiKTtcbiAgfVxuXG4gIC8vICoqYHY0KClgIC0gR2VuZXJhdGUgcmFuZG9tIFVVSUQqKlxuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbiAgZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICAvLyBEZXByZWNhdGVkIC0gJ2Zvcm1hdCcgYXJndW1lbnQsIGFzIHN1cHBvcnRlZCBpbiB2MS4yXG4gICAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgICBidWYgPSBvcHRpb25zID09ICdiaW5hcnknID8gbmV3IEJ1ZmZlckNsYXNzKDE2KSA6IG51bGw7XG4gICAgICBvcHRpb25zID0gbnVsbDtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nKSgpO1xuXG4gICAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgICBpZiAoYnVmKSB7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7IGlpKyspIHtcbiAgICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVmIHx8IHVucGFyc2Uocm5kcyk7XG4gIH1cblxuICAvLyBFeHBvcnQgcHVibGljIEFQSVxuICB2YXIgdXVpZCA9IHY0O1xuICB1dWlkLnYxID0gdjE7XG4gIHV1aWQudjQgPSB2NDtcbiAgdXVpZC5wYXJzZSA9IHBhcnNlO1xuICB1dWlkLnVucGFyc2UgPSB1bnBhcnNlO1xuICB1dWlkLkJ1ZmZlckNsYXNzID0gQnVmZmVyQ2xhc3M7XG5cbiAgaWYgKHR5cGVvZihtb2R1bGUpICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gUHVibGlzaCBhcyBub2RlLmpzIG1vZHVsZVxuICAgIG1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiAgfSBlbHNlICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUHVibGlzaCBhcyBBTUQgbW9kdWxlXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge3JldHVybiB1dWlkO30pO1xuIFxuXG4gIH0gZWxzZSB7XG4gICAgLy8gUHVibGlzaCBhcyBnbG9iYWwgKGluIGJyb3dzZXJzKVxuICAgIHZhciBfcHJldmlvdXNSb290ID0gX2dsb2JhbC51dWlkO1xuXG4gICAgLy8gKipgbm9Db25mbGljdCgpYCAtIChicm93c2VyIG9ubHkpIHRvIHJlc2V0IGdsb2JhbCAndXVpZCcgdmFyKipcbiAgICB1dWlkLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIF9nbG9iYWwudXVpZCA9IF9wcmV2aW91c1Jvb3Q7XG4gICAgICByZXR1cm4gdXVpZDtcbiAgICB9O1xuXG4gICAgX2dsb2JhbC51dWlkID0gdXVpZDtcbiAgfVxufSkuY2FsbCh0aGlzKTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCIxMCpcIjoge1xuICAgIFwidmFsdWVcIjogMTAsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiMTBeXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltwaV1cIjoge1xuICAgIFwidmFsdWVcIjogMy4xNDE1OTI2NTM1ODk3OTMsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiJVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi0yXCJcbiAgfSxcbiAgXCJbcHB0aF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotM1wiXG4gIH0sXG4gIFwiW3BwbV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotNlwiXG4gIH0sXG4gIFwiW3BwYl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotOVwiXG4gIH0sXG4gIFwiW3BwdHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTEyXCJcbiAgfSxcbiAgXCJtb2xcIjoge1xuICAgIFwidmFsdWVcIjogNi4wMjIxMzY3LFxuICAgIFwidWN1bVwiOiBcIjEwKjIzXCJcbiAgfSxcbiAgXCJzclwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcInJhZDJcIlxuICB9LFxuICBcIkh6XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwicy0xXCJcbiAgfSxcbiAgXCJOXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwia2cubS9zMlwiXG4gIH0sXG4gIFwiUGFcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJOL20yXCJcbiAgfSxcbiAgXCJKXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiTi5tXCJcbiAgfSxcbiAgXCJXXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiSi9zXCJcbiAgfSxcbiAgXCJBXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiQy9zXCJcbiAgfSxcbiAgXCJWXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiSi9DXCJcbiAgfSxcbiAgXCJGXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiQy9WXCJcbiAgfSxcbiAgXCJPaG1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJWL0FcIlxuICB9LFxuICBcIlNcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJPaG0tMVwiXG4gIH0sXG4gIFwiV2JcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJWLnNcIlxuICB9LFxuICBcIkNlbFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImNlbCgxIEspXCJcbiAgfSxcbiAgXCJUXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiV2IvbTJcIlxuICB9LFxuICBcIkhcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJXYi9BXCJcbiAgfSxcbiAgXCJsbVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNkLnNyXCJcbiAgfSxcbiAgXCJseFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImxtL20yXCJcbiAgfSxcbiAgXCJCcVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcInMtMVwiXG4gIH0sXG4gIFwiR3lcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJKL2tnXCJcbiAgfSxcbiAgXCJTdlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkova2dcIlxuICB9LFxuICBcImdvblwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjksXG4gICAgXCJ1Y3VtXCI6IFwiZGVnXCJcbiAgfSxcbiAgXCJkZWdcIjoge1xuICAgIFwidmFsdWVcIjogMixcbiAgICBcInVjdW1cIjogXCJbcGldLnJhZC8zNjBcIlxuICB9LFxuICBcIidcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJkZWcvNjBcIlxuICB9LFxuICBcIicnXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiJy82MFwiXG4gIH0sXG4gIFwibFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImRtM1wiXG4gIH0sXG4gIFwiTFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImxcIlxuICB9LFxuICBcImFyXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJtMlwiXG4gIH0sXG4gIFwibWluXCI6IHtcbiAgICBcInZhbHVlXCI6IDYwLFxuICAgIFwidWN1bVwiOiBcInNcIlxuICB9LFxuICBcImhcIjoge1xuICAgIFwidmFsdWVcIjogNjAsXG4gICAgXCJ1Y3VtXCI6IFwibWluXCJcbiAgfSxcbiAgXCJkXCI6IHtcbiAgICBcInZhbHVlXCI6IDI0LFxuICAgIFwidWN1bVwiOiBcImhcIlxuICB9LFxuICBcImFfdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNjUuMjQyMTksXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwiYV9qXCI6IHtcbiAgICBcInZhbHVlXCI6IDM2NS4yNSxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJhX2dcIjoge1xuICAgIFwidmFsdWVcIjogMzY1LjI0MjUsXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwiYVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImFfalwiXG4gIH0sXG4gIFwid2tcIjoge1xuICAgIFwidmFsdWVcIjogNyxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJtb19zXCI6IHtcbiAgICBcInZhbHVlXCI6IDI5LjUzMDU5LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcIm1vX2pcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJhX2ovMTJcIlxuICB9LFxuICBcIm1vX2dcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJhX2cvMTJcIlxuICB9LFxuICBcIm1vXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9falwiXG4gIH0sXG4gIFwidFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAwLFxuICAgIFwidWN1bVwiOiBcImtnXCJcbiAgfSxcbiAgXCJiYXJcIjoge1xuICAgIFwidmFsdWVcIjogMTAwMDAwLFxuICAgIFwidWN1bVwiOiBcIlBhXCJcbiAgfSxcbiAgXCJ1XCI6IHtcbiAgICBcInZhbHVlXCI6IDEuNjYwNTQwMmUtMjQsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiZVZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZV0uVlwiXG4gIH0sXG4gIFwiQVVcIjoge1xuICAgIFwidmFsdWVcIjogMTQ5NTk3Ljg3MDY5MSxcbiAgICBcInVjdW1cIjogXCJNbVwiXG4gIH0sXG4gIFwicGNcIjoge1xuICAgIFwidmFsdWVcIjogMzA4NTY3ODAwMDAwMDAwMDAsXG4gICAgXCJ1Y3VtXCI6IFwibVwiXG4gIH0sXG4gIFwiW2NdXCI6IHtcbiAgICBcInZhbHVlXCI6IDI5OTc5MjQ1OCxcbiAgICBcInVjdW1cIjogXCJtL3NcIlxuICB9LFxuICBcIltoXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LjYyNjA3NTVlLTI0LFxuICAgIFwidWN1bVwiOiBcIkouc1wiXG4gIH0sXG4gIFwiW2tdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMzgwNjU4ZS0yMyxcbiAgICBcInVjdW1cIjogXCJKL0tcIlxuICB9LFxuICBcIltlcHNfMF1cIjoge1xuICAgIFwidmFsdWVcIjogOC44NTQxODc4MTdlLTEyLFxuICAgIFwidWN1bVwiOiBcIkYvbVwiXG4gIH0sXG4gIFwiW211XzBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiNC5bcGldLjEwKi03Lk4vQTJcIlxuICB9LFxuICBcIltlXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjYwMjE3NzMzZS0xOSxcbiAgICBcInVjdW1cIjogXCJDXCJcbiAgfSxcbiAgXCJbbV9lXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA5LjEwOTM4OTdlLTI4LFxuICAgIFwidWN1bVwiOiBcImdcIlxuICB9LFxuICBcIlttX3BdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuNjcyNjIzMWUtMjQsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiW0ddXCI6IHtcbiAgICBcInZhbHVlXCI6IDYuNjcyNTllLTExLFxuICAgIFwidWN1bVwiOiBcIm0zLmtnLTEucy0yXCJcbiAgfSxcbiAgXCJbZ11cIjoge1xuICAgIFwidmFsdWVcIjogOS44MDY2NSxcbiAgICBcInVjdW1cIjogXCJtL3MyXCJcbiAgfSxcbiAgXCJhdG1cIjoge1xuICAgIFwidmFsdWVcIjogMTAxMzI1LFxuICAgIFwidWN1bVwiOiBcIlBhXCJcbiAgfSxcbiAgXCJbbHldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2NdLmFfalwiXG4gIH0sXG4gIFwiZ2ZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnLltnXVwiXG4gIH0sXG4gIFwiW2xiZl9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdLltnXVwiXG4gIH0sXG4gIFwiS3lcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjbS0xXCJcbiAgfSxcbiAgXCJHYWxcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjbS9zMlwiXG4gIH0sXG4gIFwiZHluXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy5jbS9zMlwiXG4gIH0sXG4gIFwiZXJnXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZHluLmNtXCJcbiAgfSxcbiAgXCJQXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZHluLnMvY20yXCJcbiAgfSxcbiAgXCJCaVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICBcInVjdW1cIjogXCJBXCJcbiAgfSxcbiAgXCJTdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNtMi9zXCJcbiAgfSxcbiAgXCJNeFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxZS04LFxuICAgIFwidWN1bVwiOiBcIldiXCJcbiAgfSxcbiAgXCJHXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAwMSxcbiAgICBcInVjdW1cIjogXCJUXCJcbiAgfSxcbiAgXCJPZVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyNTAsXG4gICAgXCJ1Y3VtXCI6IFwiL1twaV0uQS9tXCJcbiAgfSxcbiAgXCJHYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIk9lLmNtXCJcbiAgfSxcbiAgXCJzYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNkL2NtMlwiXG4gIH0sXG4gIFwiTG1iXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY2QvY20yL1twaV1cIlxuICB9LFxuICBcInBoXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAwMSxcbiAgICBcInVjdW1cIjogXCJseFwiXG4gIH0sXG4gIFwiQ2lcIjoge1xuICAgIFwidmFsdWVcIjogMzcwMDAwMDAwMDAsXG4gICAgXCJ1Y3VtXCI6IFwiQnFcIlxuICB9LFxuICBcIlJcIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDAyNTgsXG4gICAgXCJ1Y3VtXCI6IFwiQy9rZ1wiXG4gIH0sXG4gIFwiUkFEXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJlcmcvZ1wiXG4gIH0sXG4gIFwiUkVNXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiUkFEXCJcbiAgfSxcbiAgXCJbaW5faV1cIjoge1xuICAgIFwidmFsdWVcIjogMi41NCxcbiAgICBcInVjdW1cIjogXCJjbVwiXG4gIH0sXG4gIFwiW2Z0X2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiW3lkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDMsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldXCJcbiAgfSxcbiAgXCJbbWlfaV1cIjoge1xuICAgIFwidmFsdWVcIjogNTI4MCxcbiAgICBcInVjdW1cIjogXCJbZnRfaV1cIlxuICB9LFxuICBcIltmdGhfaV1cIjoge1xuICAgIFwidmFsdWVcIjogNixcbiAgICBcInVjdW1cIjogXCJbZnRfaV1cIlxuICB9LFxuICBcIltubWlfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMTg1MixcbiAgICBcInVjdW1cIjogXCJtXCJcbiAgfSxcbiAgXCJba25faV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbm1pX2ldL2hcIlxuICB9LFxuICBcIltzaW5faV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV0yXCJcbiAgfSxcbiAgXCJbc2Z0X2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldMlwiXG4gIH0sXG4gIFwiW3N5ZF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlt5ZF9pXTJcIlxuICB9LFxuICBcIltjaW5faV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV0zXCJcbiAgfSxcbiAgXCJbY2Z0X2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldM1wiXG4gIH0sXG4gIFwiW2N5ZF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlt5ZF9pXTNcIlxuICB9LFxuICBcIltiZl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNDQsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldM1wiXG4gIH0sXG4gIFwiW2NyX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyOCxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0zXCJcbiAgfSxcbiAgXCJbbWlsX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiW2NtbF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwaV0vNC5bbWlsX2ldMlwiXG4gIH0sXG4gIFwiW2hkX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJbZnRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyMDAsXG4gICAgXCJ1Y3VtXCI6IFwibS8zOTM3XCJcbiAgfSxcbiAgXCJbeWRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDMsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXVwiXG4gIH0sXG4gIFwiW2luX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmdF91c10vMTJcIlxuICB9LFxuICBcIltyZF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTYuNSxcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdXCJcbiAgfSxcbiAgXCJbY2hfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXVwiXG4gIH0sXG4gIFwiW2xrX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltjaF91c10vMTAwXCJcbiAgfSxcbiAgXCJbcmNoX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXVwiXG4gIH0sXG4gIFwiW3Jsa191c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcmNoX3VzXS8xMDBcIlxuICB9LFxuICBcIltmdGhfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDYsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXVwiXG4gIH0sXG4gIFwiW2Z1cl91c11cIjoge1xuICAgIFwidmFsdWVcIjogNDAsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXVwiXG4gIH0sXG4gIFwiW21pX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA4LFxuICAgIFwidWN1bVwiOiBcIltmdXJfdXNdXCJcbiAgfSxcbiAgXCJbYWNyX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxNjAsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXTJcIlxuICB9LFxuICBcIltzcmRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX3VzXTJcIlxuICB9LFxuICBcIltzbWlfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW21pX3VzXTJcIlxuICB9LFxuICBcIltzY3RdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW21pX3VzXTJcIlxuICB9LFxuICBcIlt0d3BdXCI6IHtcbiAgICBcInZhbHVlXCI6IDM2LFxuICAgIFwidWN1bVwiOiBcIltzY3RdXCJcbiAgfSxcbiAgXCJbbWlsX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAwMSxcbiAgICBcInVjdW1cIjogXCJbaW5fdXNdXCJcbiAgfSxcbiAgXCJbaW5fYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIuNTM5OTk4LFxuICAgIFwidWN1bVwiOiBcImNtXCJcbiAgfSxcbiAgXCJbZnRfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltpbl9icl1cIlxuICB9LFxuICBcIltyZF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMTYuNSxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbY2hfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW3JkX2JyXVwiXG4gIH0sXG4gIFwiW2xrX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltjaF9icl0vMTAwXCJcbiAgfSxcbiAgXCJbZnRoX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIltwY19icl1cIjoge1xuICAgIFwidmFsdWVcIjogMi41LFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIlt5ZF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbbWlfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDUyODAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW25taV9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNjA4MCxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJba25fYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW25taV9icl0vaFwiXG4gIH0sXG4gIFwiW2Fjcl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNDg0MCxcbiAgICBcInVjdW1cIjogXCJbeWRfYnJdMlwiXG4gIH0sXG4gIFwiW2dhbF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMjMxLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTNcIlxuICB9LFxuICBcIltiYmxfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQyLFxuICAgIFwidWN1bVwiOiBcIltnYWxfdXNdXCJcbiAgfSxcbiAgXCJbcXRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dhbF91c10vNFwiXG4gIH0sXG4gIFwiW3B0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltxdF91c10vMlwiXG4gIH0sXG4gIFwiW2dpbF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcHRfdXNdLzRcIlxuICB9LFxuICBcIltmb3pfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2dpbF91c10vNFwiXG4gIH0sXG4gIFwiW2Zkcl91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZm96X3VzXS84XCJcbiAgfSxcbiAgXCJbbWluX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmZHJfdXNdLzYwXCJcbiAgfSxcbiAgXCJbY3JkX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMjgsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldM1wiXG4gIH0sXG4gIFwiW2J1X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMTUwLjQyLFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTNcIlxuICB9LFxuICBcIltnYWxfd2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2J1X3VzXS84XCJcbiAgfSxcbiAgXCJbcGtfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2J1X3VzXS80XCJcbiAgfSxcbiAgXCJbZHF0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwa191c10vOFwiXG4gIH0sXG4gIFwiW2RwdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZHF0X3VzXS8yXCJcbiAgfSxcbiAgXCJbdGJzX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmb3pfdXNdLzJcIlxuICB9LFxuICBcIlt0c3BfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3Ric191c10vM1wiXG4gIH0sXG4gIFwiW2N1cF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTYsXG4gICAgXCJ1Y3VtXCI6IFwiW3Ric191c11cIlxuICB9LFxuICBcIltmb3pfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMzAsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIltjdXBfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMjQwLFxuICAgIFwidWN1bVwiOiBcIm1MXCJcbiAgfSxcbiAgXCJbdHNwX21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDUsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIlt0YnNfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMTUsXG4gICAgXCJ1Y3VtXCI6IFwibUxcIlxuICB9LFxuICBcIltnYWxfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuNTQ2MDksXG4gICAgXCJ1Y3VtXCI6IFwibFwiXG4gIH0sXG4gIFwiW3BrX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLFxuICAgIFwidWN1bVwiOiBcIltnYWxfYnJdXCJcbiAgfSxcbiAgXCJbYnVfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW3BrX2JyXVwiXG4gIH0sXG4gIFwiW3F0X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltnYWxfYnJdLzRcIlxuICB9LFxuICBcIltwdF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcXRfYnJdLzJcIlxuICB9LFxuICBcIltnaWxfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3B0X2JyXS80XCJcbiAgfSxcbiAgXCJbZm96X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltnaWxfYnJdLzVcIlxuICB9LFxuICBcIltmZHJfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zvel9icl0vOFwiXG4gIH0sXG4gIFwiW21pbl9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZmRyX2JyXS82MFwiXG4gIH0sXG4gIFwiW2dyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2NC43OTg5MSxcbiAgICBcInVjdW1cIjogXCJtZ1wiXG4gIH0sXG4gIFwiW2xiX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA3MDAwLFxuICAgIFwidWN1bVwiOiBcIltncl1cIlxuICB9LFxuICBcIltvel9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdLzE2XCJcbiAgfSxcbiAgXCJbZHJfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW296X2F2XS8xNlwiXG4gIH0sXG4gIFwiW3Njd3RfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdXCJcbiAgfSxcbiAgXCJbbGN3dF9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMTEyLFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl1cIlxuICB9LFxuICBcIltzdG9uX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMCxcbiAgICBcInVjdW1cIjogXCJbc2N3dF9hdl1cIlxuICB9LFxuICBcIltsdG9uX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMCxcbiAgICBcInVjdW1cIjogXCJbbGN3dF9hdl1cIlxuICB9LFxuICBcIltzdG9uZV9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMTQsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiX2F2XVwiXG4gIH0sXG4gIFwiW3B3dF90cl1cIjoge1xuICAgIFwidmFsdWVcIjogMjQsXG4gICAgXCJ1Y3VtXCI6IFwiW2dyXVwiXG4gIH0sXG4gIFwiW296X3RyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMCxcbiAgICBcInVjdW1cIjogXCJbcHd0X3RyXVwiXG4gIH0sXG4gIFwiW2xiX3RyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbb3pfdHJdXCJcbiAgfSxcbiAgXCJbc2NfYXBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIwLFxuICAgIFwidWN1bVwiOiBcIltncl1cIlxuICB9LFxuICBcIltkcl9hcF1cIjoge1xuICAgIFwidmFsdWVcIjogMyxcbiAgICBcInVjdW1cIjogXCJbc2NfYXBdXCJcbiAgfSxcbiAgXCJbb3pfYXBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDgsXG4gICAgXCJ1Y3VtXCI6IFwiW2RyX2FwXVwiXG4gIH0sXG4gIFwiW2xiX2FwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbb3pfYXBdXCJcbiAgfSxcbiAgXCJbb3pfbV1cIjoge1xuICAgIFwidmFsdWVcIjogMjgsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiW2xuZV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV0vMTJcIlxuICB9LFxuICBcIltwbnRdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2xuZV0vNlwiXG4gIH0sXG4gIFwiW3BjYV1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW3BudF1cIlxuICB9LFxuICBcIltwbnRfcHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDEzODM3LFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiW3BjYV9wcl1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW3BudF9wcl1cIlxuICB9LFxuICBcIltwaWVkXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzMi40OCxcbiAgICBcInVjdW1cIjogXCJjbVwiXG4gIH0sXG4gIFwiW3BvdWNlXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwaWVkXS8xMlwiXG4gIH0sXG4gIFwiW2xpZ25lXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwb3VjZV0vMTJcIlxuICB9LFxuICBcIltkaWRvdF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbbGlnbmVdLzZcIlxuICB9LFxuICBcIltjaWNlcm9dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltkaWRvdF1cIlxuICB9LFxuICBcIltkZWdGXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImRlZ2YoNSBLLzkpXCJcbiAgfSxcbiAgXCJbZGVnUl1cIjoge1xuICAgIFwidmFsdWVcIjogNSxcbiAgICBcInVjdW1cIjogXCJLLzlcIlxuICB9LFxuICBcImNhbF9bMTVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTg1OCxcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxfWzIwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE4MTksXG4gICAgXCJ1Y3VtXCI6IFwiSlwiXG4gIH0sXG4gIFwiY2FsX21cIjoge1xuICAgIFwidmFsdWVcIjogNC4xOTAwMixcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxfSVRcIjoge1xuICAgIFwidmFsdWVcIjogNC4xODY4LFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbF90aFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE4NCxcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjYWxfdGhcIlxuICB9LFxuICBcIltDYWxdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwia2NhbF90aFwiXG4gIH0sXG4gIFwiW0J0dV8zOV1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTk2NyxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV81OV1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTQ4LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1XzYwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1NDY4LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1X21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU1ODcsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfSVRdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU1MDU1ODUyNjIsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfdGhdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU0MzUsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW0J0dV90aF1cIlxuICB9LFxuICBcIltIUF1cIjoge1xuICAgIFwidmFsdWVcIjogNTUwLFxuICAgIFwidWN1bVwiOiBcIltmdF9pXS5bbGJmX2F2XS9zXCJcbiAgfSxcbiAgXCJ0ZXhcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnL2ttXCJcbiAgfSxcbiAgXCJbZGVuXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcvOS9rbVwiXG4gIH0sXG4gIFwibVtIMk9dXCI6IHtcbiAgICBcInZhbHVlXCI6IDkuODA2NjUsXG4gICAgXCJ1Y3VtXCI6IFwia1BhXCJcbiAgfSxcbiAgXCJtW0hnXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMzMuMzIyLFxuICAgIFwidWN1bVwiOiBcImtQYVwiXG4gIH0sXG4gIFwiW2luX2knSDJPXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1bSDJPXS5baW5faV0vbVwiXG4gIH0sXG4gIFwiW2luX2knSGddXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibVtIZ10uW2luX2ldL21cIlxuICB9LFxuICBcIltQUlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW1bSGddLnMvbWxcIlxuICB9LFxuICBcIlt3b29kJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW1bSGddLm1pbi9MXCJcbiAgfSxcbiAgXCJbZGlvcF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIvbVwiXG4gIH0sXG4gIFwiW3AnZGlvcF1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIxMDB0YW4oMSByYWQpXCJcbiAgfSxcbiAgXCIlW3Nsb3BlXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjEwMHRhbigxIHJhZClcIlxuICB9LFxuICBcIlttZXNoX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiL1tpbl9pXVwiXG4gIH0sXG4gIFwiW0NoXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1tLzNcIlxuICB9LFxuICBcIltkcnBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibWwvMjBcIlxuICB9LFxuICBcIltobnNmJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW01FVF1cIjoge1xuICAgIFwidmFsdWVcIjogMy41LFxuICAgIFwidWN1bVwiOiBcIm1ML21pbi9rZ1wiXG4gIH0sXG4gIFwiW2hwJ19YXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImhwWCgxIDEpXCJcbiAgfSxcbiAgXCJbaHAnX0NdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiaHBDKDEgMSlcIlxuICB9LFxuICBcIltocCdfTV1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJocE0oMSAxKVwiXG4gIH0sXG4gIFwiW2hwJ19RXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImhwUSgxIDEpXCJcbiAgfSxcbiAgXCJbaHBfWF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbaHBfQ11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbaHBfTV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbaHBfUV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfWF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfQ11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfTV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba3BfUV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJlcVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1vbFwiXG4gIH0sXG4gIFwib3NtXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibW9sXCJcbiAgfSxcbiAgXCJbcEhdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwicEgoMSBtb2wvbClcIlxuICB9LFxuICBcImclXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy9kbFwiXG4gIH0sXG4gIFwiW1NdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTEzLnNcIlxuICB9LFxuICBcIltIUEZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0xQRl1cIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcImthdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1vbC9zXCJcbiAgfSxcbiAgXCJVXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwidW1vbC9taW5cIlxuICB9LFxuICBcIltpVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbSVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2lVXVwiXG4gIH0sXG4gIFwiW2FyYidVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltVU1AnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbR1BMJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW01QTCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltBUEwnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbYmV0aCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIlthbnRpJ1hhJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3RvZGQnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbZHllJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW3NtZ3knVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbYmRzaydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrYSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltrbmsnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbbWNsZydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIlt0YidVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltDQ0lEXzUwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltUQ0lEXzUwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltFSURfNTBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW1BGVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRkZVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltDRlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0JBVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0FtYidhJzEnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbUE5VXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltMZl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRCdhZydVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltGRVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0VMVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiTnBcIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsbigxIDEpXCJcbiAgfSxcbiAgXCJCXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibGcoMSAxKVwiXG4gIH0sXG4gIFwiQltTUExdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDIgMTAqLTUuUGEpXCJcbiAgfSxcbiAgXCJCW1ZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDEgVilcIlxuICB9LFxuICBcIkJbbVZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDEgbVYpXCJcbiAgfSxcbiAgXCJCW3VWXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjJsZygxIHVWKVwiXG4gIH0sXG4gIFwiQlsxMC5uVl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMTAgblYpXCJcbiAgfSxcbiAgXCJCW1ddXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibGcoMSBXKVwiXG4gIH0sXG4gIFwiQltrV11cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJsZygxIGtXKVwiXG4gIH0sXG4gIFwic3RcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtM1wiXG4gIH0sXG4gIFwiQW9cIjoge1xuICAgIFwidmFsdWVcIjogMC4xLFxuICAgIFwidWN1bVwiOiBcIm5tXCJcbiAgfSxcbiAgXCJiXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCJmbTJcIlxuICB9LFxuICBcImF0dFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImtnZi9jbTJcIlxuICB9LFxuICBcIm1ob1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlNcIlxuICB9LFxuICBcIltwc2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiZl9hdl0vW2luX2ldMlwiXG4gIH0sXG4gIFwiY2lyY1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLFxuICAgIFwidWN1bVwiOiBcIltwaV0ucmFkXCJcbiAgfSxcbiAgXCJzcGhcIjoge1xuICAgIFwidmFsdWVcIjogNCxcbiAgICBcInVjdW1cIjogXCJbcGldLnNyXCJcbiAgfSxcbiAgXCJbY2FyX21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMixcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJbY2FyX0F1XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIi8yNFwiXG4gIH0sXG4gIFwiW3Ntb290XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2NyxcbiAgICBcInVjdW1cIjogXCJbaW5faV1cIlxuICB9LFxuICBcImJpdF9zXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibGQoMSAxKVwiXG4gIH0sXG4gIFwiYml0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiQnlcIjoge1xuICAgIFwidmFsdWVcIjogOCxcbiAgICBcInVjdW1cIjogXCJiaXRcIlxuICB9LFxuICBcIkJkXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiL3NcIlxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cz17XCJtb2xcIjp0cnVlLFwic3JcIjp0cnVlLFwiSHpcIjp0cnVlLFwiTlwiOnRydWUsXCJQYVwiOnRydWUsXCJKXCI6dHJ1ZSxcIldcIjp0cnVlLFwiQVwiOnRydWUsXCJWXCI6dHJ1ZSxcIkZcIjp0cnVlLFwiT2htXCI6dHJ1ZSxcIlNcIjp0cnVlLFwiV2JcIjp0cnVlLFwiQ2VsXCI6dHJ1ZSxcIlRcIjp0cnVlLFwiSFwiOnRydWUsXCJsbVwiOnRydWUsXCJseFwiOnRydWUsXCJCcVwiOnRydWUsXCJHeVwiOnRydWUsXCJTdlwiOnRydWUsXCJsXCI6dHJ1ZSxcIkxcIjp0cnVlLFwiYXJcIjp0cnVlLFwidFwiOnRydWUsXCJiYXJcIjp0cnVlLFwidVwiOnRydWUsXCJlVlwiOnRydWUsXCJwY1wiOnRydWUsXCJbY11cIjp0cnVlLFwiW2hdXCI6dHJ1ZSxcIltrXVwiOnRydWUsXCJbZXBzXzBdXCI6dHJ1ZSxcIlttdV8wXVwiOnRydWUsXCJbZV1cIjp0cnVlLFwiW21fZV1cIjp0cnVlLFwiW21fcF1cIjp0cnVlLFwiW0ddXCI6dHJ1ZSxcIltnXVwiOnRydWUsXCJbbHldXCI6dHJ1ZSxcImdmXCI6dHJ1ZSxcIkt5XCI6dHJ1ZSxcIkdhbFwiOnRydWUsXCJkeW5cIjp0cnVlLFwiZXJnXCI6dHJ1ZSxcIlBcIjp0cnVlLFwiQmlcIjp0cnVlLFwiU3RcIjp0cnVlLFwiTXhcIjp0cnVlLFwiR1wiOnRydWUsXCJPZVwiOnRydWUsXCJHYlwiOnRydWUsXCJzYlwiOnRydWUsXCJMbWJcIjp0cnVlLFwicGhcIjp0cnVlLFwiQ2lcIjp0cnVlLFwiUlwiOnRydWUsXCJSQURcIjp0cnVlLFwiUkVNXCI6dHJ1ZSxcImNhbF9bMTVdXCI6dHJ1ZSxcImNhbF9bMjBdXCI6dHJ1ZSxcImNhbF9tXCI6dHJ1ZSxcImNhbF9JVFwiOnRydWUsXCJjYWxfdGhcIjp0cnVlLFwiY2FsXCI6dHJ1ZSxcInRleFwiOnRydWUsXCJtW0gyT11cIjp0cnVlLFwibVtIZ11cIjp0cnVlLFwiZXFcIjp0cnVlLFwib3NtXCI6dHJ1ZSxcImclXCI6dHJ1ZSxcImthdFwiOnRydWUsXCJVXCI6dHJ1ZSxcIltpVV1cIjp0cnVlLFwiW0lVXVwiOnRydWUsXCJOcFwiOnRydWUsXCJCXCI6dHJ1ZSxcIkJbU1BMXVwiOnRydWUsXCJCW1ZdXCI6dHJ1ZSxcIkJbbVZdXCI6dHJ1ZSxcIkJbdVZdXCI6dHJ1ZSxcIkJbMTAublZdXCI6dHJ1ZSxcIkJbV11cIjp0cnVlLFwiQltrV11cIjp0cnVlLFwic3RcIjp0cnVlLFwibWhvXCI6dHJ1ZSxcImJpdFwiOnRydWUsXCJCeVwiOnRydWUsXCJCZFwiOnRydWUsXCJtXCI6dHJ1ZSxcInNcIjp0cnVlLFwiZ1wiOnRydWUsXCJyYWRcIjp0cnVlLFwiS1wiOnRydWUsXCJDXCI6dHJ1ZSxcImNkXCI6dHJ1ZX1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJZXCI6IDFlKzI0LFxuICBcIlpcIjogMWUrMjEsXG4gIFwiRVwiOiAxMDAwMDAwMDAwMDAwMDAwMDAwLFxuICBcIlBcIjogMTAwMDAwMDAwMDAwMDAwMCxcbiAgXCJUXCI6IDEwMDAwMDAwMDAwMDAsXG4gIFwiR1wiOiAxMDAwMDAwMDAwLFxuICBcIk1cIjogMTAwMDAwMCxcbiAgXCJrXCI6IDEwMDAsXG4gIFwiaFwiOiAxMDAsXG4gIFwiZGFcIjogMTAsXG4gIFwiZFwiOiAwLjEsXG4gIFwiY1wiOiAwLjAxLFxuICBcIm1cIjogMC4wMDEsXG4gIFwidVwiOiAwLjAwMDAwMSxcbiAgXCJuXCI6IDFlLTksXG4gIFwicFwiOiAxZS0xMixcbiAgXCJmXCI6IDFlLTE1LFxuICBcImFcIjogMWUtMTgsXG4gIFwielwiOiAxZS0yMSxcbiAgXCJ5XCI6IDFlLTI0LFxuICBcIktpXCI6IDEwMjQsXG4gIFwiTWlcIjogMTA0ODU3NixcbiAgXCJHaVwiOiAxMDczNzQxODI0LFxuICBcIlRpXCI6IDEwOTk1MTE2Mjc3NzZcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAvKlxuICAgKiBHZW5lcmF0ZWQgYnkgUEVHLmpzIDAuOC4wLlxuICAgKlxuICAgKiBodHRwOi8vcGVnanMubWFqZGEuY3ovXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHBlZyRzdWJjbGFzcyhjaGlsZCwgcGFyZW50KSB7XG4gICAgZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9XG4gICAgY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICAgIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7XG4gIH1cblxuICBmdW5jdGlvbiBTeW50YXhFcnJvcihtZXNzYWdlLCBleHBlY3RlZCwgZm91bmQsIG9mZnNldCwgbGluZSwgY29sdW1uKSB7XG4gICAgdGhpcy5tZXNzYWdlICA9IG1lc3NhZ2U7XG4gICAgdGhpcy5leHBlY3RlZCA9IGV4cGVjdGVkO1xuICAgIHRoaXMuZm91bmQgICAgPSBmb3VuZDtcbiAgICB0aGlzLm9mZnNldCAgID0gb2Zmc2V0O1xuICAgIHRoaXMubGluZSAgICAgPSBsaW5lO1xuICAgIHRoaXMuY29sdW1uICAgPSBjb2x1bW47XG5cbiAgICB0aGlzLm5hbWUgICAgID0gXCJTeW50YXhFcnJvclwiO1xuICB9XG5cbiAgcGVnJHN1YmNsYXNzKFN5bnRheEVycm9yLCBFcnJvcik7XG5cbiAgZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDoge30sXG5cbiAgICAgICAgcGVnJEZBSUxFRCA9IHt9LFxuXG4gICAgICAgIHBlZyRzdGFydFJ1bGVJbmRpY2VzID0geyBzdGFydDogMCB9LFxuICAgICAgICBwZWckc3RhcnRSdWxlSW5kZXggICA9IDAsXG5cbiAgICAgICAgcGVnJGNvbnN0cyA9IFtcbiAgICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSA7IC8vIGNsZWFudXAoZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwZWckRkFJTEVELFxuICAgICAgICAgIFwiL1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIi9cIiwgZGVzY3JpcHRpb246IFwiXFxcIi9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbihlKSB7cmV0dXJuIG11bHRpcGx5KHt2YWx1ZToxLCB1bml0czp7fX0sIFtbXCIvXCIsIGVdXSk7fSxcbiAgICAgICAgICBcIi5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIuXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIuXFxcIlwiIH0sXG4gICAgICAgICAgW10sXG4gICAgICAgICAgZnVuY3Rpb24odCwgbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBtdWx0aXBseSh0LCBtcyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZ1bmN0aW9uKGUsIGV4cCkge3JldHVybiBlLmFubiAmJiBleHA7fSxcbiAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgZnVuY3Rpb24oZSwgZXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9wb3dlcihlLCBleHApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogZCxcbiAgICAgICAgICAgICAgdW5pdHM6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4gdTt9LFxuICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIihcIiwgZGVzY3JpcHRpb246IFwiXFxcIihcXFwiXCIgfSxcbiAgICAgICAgICBcIilcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIpXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24oZSkge3JldHVybiBlO30sXG4gICAgICAgICAgL15bK1xcLV0vLFxuICAgICAgICAgIHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbK1xcXFwtXVwiLCBkZXNjcmlwdGlvbjogXCJbK1xcXFwtXVwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24ocywgZCkge3JldHVybiAocz09XCItXCIpID8gKC0xKmQpIDogZH0sXG4gICAgICAgICAgZnVuY3Rpb24ocCwgYSkge3JldHVybihwICYmICFpc21ldHJpYyhhKSk7fSxcbiAgICAgICAgICBmdW5jdGlvbihwLCBhKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gYTtcbiAgICAgICAgICAgIGlmIChwKSByZXQudmFsdWUgPSByZXQudmFsdWUgKiBwcmVmaXhlc1twXTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAvXlswLTldLyxcbiAgICAgICAgICB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiWzAtOV1cIiwgZGVzY3JpcHRpb246IFwiWzAtOV1cIiB9LFxuICAgICAgICAgIFwiZVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImVcIiwgZGVzY3JpcHRpb246IFwiXFxcImVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih2LCBlcHJlc2VudCwgZSkge3JldHVybiAoIWVwcmVzZW50ICYmICEhZSk7fSxcbiAgICAgICAgICBmdW5jdGlvbih2LCBlcHJlc2VudCwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYuam9pbihcIlwiKSkqTWF0aC5wb3coMTAsIGV8fDApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ7XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwie1wiLCBkZXNjcmlwdGlvbjogXCJcXFwie1xcXCJcIiB9LFxuICAgICAgICAgIC9eW159XS8sXG4gICAgICAgICAgeyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIltefV1cIiwgZGVzY3JpcHRpb246IFwiW159XVwiIH0sXG4gICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwifVwiLCBkZXNjcmlwdGlvbjogXCJcXFwifVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKG0pIHtyZXR1cm4gL1teXFx4MDAtXFx4N0ZdLy50ZXN0KG0pO30sXG4gICAgICAgICAgZnVuY3Rpb24obSkgeyByZXR1cm4ge3ZhbHVlOiAxLCB1bml0czp7fSwgYW5uOiBtfSB9LFxuICAgICAgICAgIFwiW2FudGknWGEnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYW50aSdYYSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2FudGknWGEnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlthbnRpJ1hhJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0FtYidhJzEnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQW1iJ2EnMSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0FtYidhJzEnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltBbWInYScxJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3N0b25lX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzdG9uZV9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzdG9uZV9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzdG9uZV9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaW5faSdIMk9dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX2knSDJPXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX2knSDJPXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2luX2knSDJPXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzdG9uX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzdG9uX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3N0b25fYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc3Rvbl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbVENJRF81MF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbVENJRF81MF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltUQ0lEXzUwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1RDSURfNTBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NDSURfNTBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0NDSURfNTBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ0NJRF81MF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDQ0lEXzUwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzY3d0X2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzY3d0X2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Njd3RfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2N3dF9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGN3dF9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGN3dF9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsY3d0X2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xjd3RfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2x0b25fYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2x0b25fYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbHRvbl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsdG9uX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9pJ0hnXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl9pJ0hnXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX2knSGddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5faSdIZ11cIjogMX19O30sXG4gICAgICAgICAgXCJbdGJzX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0YnNfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdGJzX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Ric191c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZHB0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcHRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHB0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RwdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYmRzaydVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiZHNrJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmRzaydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Jkc2snVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc21neSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzbWd5J1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc21neSdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NtZ3knVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZHF0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcXRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHF0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RxdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbdG9kZCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0b2RkJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdG9kZCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3RvZGQnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbRCdhZydVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltEJ2FnJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRCdhZydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0QnYWcnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbYmV0aCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiZXRoJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmV0aCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2JldGgnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2FsX3dpXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnYWxfd2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2FsX3dpXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dhbF93aV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3JkX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjcmRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3JkX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NyZF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbWluX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaW5fdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWluX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pbl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZmRyX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmZHJfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZmRyX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zkcl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZm96X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmb3pfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZm96X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zvel91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2lsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnaWxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2lsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dpbF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYmJsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiYmxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYmJsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2JibF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2FsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnYWxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2FsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dhbF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYWNyX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlthY3JfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYWNyX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Fjcl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbm1pX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltubWlfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbm1pX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW25taV9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRoX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdGhfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRoX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0aF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWlsX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaWxfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlsX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pbF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbc21pX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzbWlfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc21pX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NtaV91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYWNyX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlthY3JfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYWNyX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Fjcl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZnVyX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdXJfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnVyX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z1cl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRoX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdGhfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRoX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0aF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcmxrX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltybGtfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmxrX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Jsa191c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcmNoX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltyY2hfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmNoX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3JjaF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbGJmX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsYmZfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJmX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xiZl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaG5zZidVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltobnNmJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaG5zZidVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2huc2YnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWVzaF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttZXNoX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWVzaF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21lc2hfaV1cIjogMX19O30sXG4gICAgICAgICAgXCIlW3Nsb3BlXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIiVbc2xvcGVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIlW3Nsb3BlXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiJVtzbG9wZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcCdkaW9wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwJ2Rpb3BdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcCdkaW9wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3AnZGlvcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2lsX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnaWxfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2lsX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dpbF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbd29vZCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt3b29kJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbd29vZCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3dvb2QnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfWzE1XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF9bMTVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfWzE1XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX1sxNV1cIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfWzIwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF9bMjBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfWzIwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX1syMF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZm96X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmb3pfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZm96X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zvel9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZmRyX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmZHJfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZmRyX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zkcl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbc3JkX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzcmRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc3JkX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NyZF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbWluX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaW5fYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWluX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pbl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbRUlEXzUwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltFSURfNTBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRUlEXzUwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0VJRF81MF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1X3RoXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfdGhdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1X3RoXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV90aF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1X0lUXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfSVRdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1X0lUXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV9JVF1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2FyX0F1XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjYXJfQXVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2FyX0F1XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Nhcl9BdV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XzYwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfNjBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XzYwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV82MF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XzU5XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfNTldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XzU5XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV81OV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1XzM5XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltCdHVfMzldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1XzM5XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV8zOV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3VwX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjdXBfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3VwX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2N1cF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJCWzEwLm5WXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbMTAublZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCWzEwLm5WXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQlsxMC5uVl1cIjogMX19O30sXG4gICAgICAgICAgXCJbdHNwX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0c3BfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdHNwX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3RzcF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbWNsZydVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttY2xnJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWNsZydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21jbGcnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2ljZXJvXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaWNlcm9dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2ljZXJvXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NpY2Vyb11cIjogMX19O30sXG4gICAgICAgICAgXCJbcHd0X3RyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwd3RfdHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHd0X3RyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3B3dF90cl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcG50X3ByXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwbnRfcHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcG50X3ByXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BudF9wcl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGNhX3ByXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwY2FfcHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGNhX3ByXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BjYV9wcl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZ2FsX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltnYWxfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ2FsX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2dhbF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbeWRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3lkX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3lkX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3lkX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsaWduZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGlnbmVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGlnbmVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGlnbmVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Ric19tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt0YnNfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0YnNfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0YnNfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGJfYXBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xiX2FwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xiX2FwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xiX2FwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel9hcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbb3pfYXBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfYXBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfYXBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RyX2FwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcl9hcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcl9hcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcl9hcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbc2NfYXBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NjX2FwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NjX2FwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NjX2FwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0c3BfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdHNwX21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdHNwX21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdHNwX21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2N1cF9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjdXBfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjdXBfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjdXBfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGJfdHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xiX3RyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xiX3RyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xiX3RyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel90cl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbb3pfdHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbb3pfdHJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfdHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RpZG90XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkaWRvdF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkaWRvdF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkaWRvdF1cIjogMX19O30sXG4gICAgICAgICAgXCJbZm96X21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Zvel9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Zvel9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Zvel9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjYXJfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2FyX21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2FyX21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2FyX21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Ntb290XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzbW9vdF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzbW9vdF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzbW9vdF1cIjogMX19O30sXG4gICAgICAgICAgXCJba25rJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2tuaydVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tuaydVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tuaydVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1X21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQnR1X21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1X21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RyX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkcl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbb3pfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW296X2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW296X2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW296X2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsYl9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGJfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGJfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbGJfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2R5ZSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkeWUnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkeWUnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkeWUnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGtfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BrX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BrX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BrX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltBUEwnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQVBMJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQVBMJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQVBMJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2J1X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltidV91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltidV91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltidV91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcHRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3B0X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3B0X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3B0X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltxdF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcXRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcXRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcXRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2J1X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltidV9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltidV9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltidV9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHAnX1hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwJ19YXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwJ19YXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwJ19YXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltNUEwnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTVBMJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbTVBMJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbTVBMJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0dQTCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltHUEwnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltHUEwnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltHUEwnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbVVNQJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1VTUCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1VTUCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1VTUCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltlcHNfMF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZXBzXzBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZXBzXzBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZXBzXzBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0aF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdGhfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdGhfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdGhfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbm1pX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW25taV9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW25taV9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW25taV9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwdF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Npbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzaW5faV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzaW5faV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzaW5faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc2Z0X2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NmdF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NmdF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3NmdF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzeWRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc3lkX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc3lkX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc3lkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Npbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaW5faV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaW5faV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjaW5faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2Z0X2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NmdF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NmdF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NmdF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjeWRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY3lkX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3lkX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3lkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3F0X3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltxdF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltxdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltxdF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbYXJiJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2FyYidVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2FyYidVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2FyYidVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaWxfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWlsX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlsX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlsX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NtbF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjbWxfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjbWxfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjbWxfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJba25fYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2tuX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2tuX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tuX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BvdWNlXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwb3VjZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwb3VjZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwb3VjZV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaW5fdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2luX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltyZF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcmRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcmRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcmRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NoX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjaF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjaF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjaF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbGtfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xrX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xrX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xrX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocCdfQ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHAnX0NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHAnX0NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHAnX0NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwJ19NXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocCdfTV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocCdfTV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocCdfTV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHAnX1FdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwJ19RXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwJ19RXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwJ19RXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaV9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWlfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaV91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaV91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaV91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbeWRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3lkX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3lkX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3lkX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwa19icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGtfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGtfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGtfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BjX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwY19icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwY19icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwY19icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGtfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xrX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xrX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xrX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5fYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaW5fYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5fYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmdF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcmRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3JkX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3JkX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3JkX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjaF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2hfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2hfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2hfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0X2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0X2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocF9RXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocF9RXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwX1FdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHBfUV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHBfTV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHBfTV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocF9NXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwX01dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwX0NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwX0NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHBfQ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocF9DXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocF9YXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocF9YXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwX1hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHBfWF1cIjogMX19O30sXG4gICAgICAgICAgXCJba3BfQ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba3BfQ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrcF9DXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2twX0NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hkX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hkX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaGRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltoZF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrcF9NXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrcF9NXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2twX01dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba3BfTV1cIjogMX19O30sXG4gICAgICAgICAgXCJba3BfUV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba3BfUV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrcF9RXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2twX1FdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NyX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NyX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3JfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjcl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltiZl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltiZl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2JmX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYmZfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJba25faV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba25faV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrbl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tuX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW211XzBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW211XzBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbXVfMF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttdV8wXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaV9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttaV9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbeWRfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbeWRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt5ZF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3lkX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2twX1hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2twX1hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba3BfWF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrcF9YXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltpbl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaW5faV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGlvcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGlvcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkaW9wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Rpb3BdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX0lUXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX0lUXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxfSVRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF9JVFwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF90aFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF90aFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsX3RoXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfdGhcIjogMX19O30sXG4gICAgICAgICAgXCJtW0gyT11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtW0gyT11cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1bSDJPXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibVtIMk9dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2thJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2thJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba2EnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrYSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbU1BMXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbU1BMXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltTUExdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW1NQTF1cIjogMX19O30sXG4gICAgICAgICAgXCJbdGInVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdGInVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0YidVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3RiJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RlZ1JdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RlZ1JdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGVnUl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkZWdSXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkZWdGXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkZWdGXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RlZ0ZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZGVnRl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHB0cl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHB0cl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwcHRyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BwdHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BwdGhdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BwdGhdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHB0aF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwcHRoXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltvel9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltvel9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW296X21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbb3pfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGllZF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGllZF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwaWVkXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BpZWRdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BwbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHBtXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BwbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwcG1dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BwYl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHBiXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BwYl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwcGJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYml0X3NcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiaXRfc1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiYml0X3NcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImJpdF9zXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1BOVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbUE5VXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1BOVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltQTlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BzaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHNpXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BzaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwc2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0JBVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQkFVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0JBVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCQVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NhbF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ2FsXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0NhbF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDYWxdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQlttVl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW21WXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQlttVl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbbVZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQlt1Vl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW3VWXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQlt1Vl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbdVZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0NGVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ0ZVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0NGVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltDRlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0ZGVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRkZVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0ZGVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltGRlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQltrV11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW2tXXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltrV11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJba1ddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1BGVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbUEZVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1BGVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltQRlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX21cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxfbVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsX21cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF9tXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0VMVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRUxVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0VMVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltFTFVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0ZFVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRkVVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0ZFVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltGRVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1BSVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbUFJVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1BSVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltQUlVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21fZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbV9lXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21fZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttX2VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21fcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbV9wXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21fcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttX3BdXCI6IDF9fTt9LFxuICAgICAgICAgIFwibVtIZ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtW0hnXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwibVtIZ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1bSGddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BjYV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGNhXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BjYV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwY2FdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BudF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcG50XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BudF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwbnRdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xuZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbG5lXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xuZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsbmVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0xQRl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTFBGXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0xQRl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltMUEZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Rlbl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGVuXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Rlbl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkZW5dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3NjdF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2N0XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NjdF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzY3RdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3R3cF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdHdwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3R3cF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0d3BdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW01FVF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbTUVUXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW01FVF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltNRVRdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0hQRl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbSFBGXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0hQRl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltIUEZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RycF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZHJwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RycF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcnBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0FVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltBVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltBVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltBVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbSVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0lVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0lVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0lVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vX3NcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb19zXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb19zXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb19zXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2dyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltncl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltncl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltncl1cIjogMX19O30sXG4gICAgICAgICAgXCJjaXJjXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2lyY1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2lyY1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2lyY1wiOiAxfX07fSxcbiAgICAgICAgICBcIltwaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0VVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltFVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltFVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltFVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbTGZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0xmXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0xmXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0xmXVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vX2pcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb19qXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb19qXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb19qXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQltXXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbV11cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbV11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbV11cIjogMX19O30sXG4gICAgICAgICAgXCJCW1ZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQltWXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQltWXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQltWXVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vX2dcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb19nXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb19nXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb19nXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2lVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbSFBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0hQXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0hQXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0hQXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltDaF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQ2hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQ2hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQ2hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2x5XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltseV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltseV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltseV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcEhdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BIXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BIXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BIXVwiOiAxfX07fSxcbiAgICAgICAgICBcImFfalwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFfalwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYV9qXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhX2pcIjogMX19O30sXG4gICAgICAgICAgXCJyYWRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJyYWRcIiwgZGVzY3JpcHRpb246IFwiXFxcInJhZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wicmFkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYV90XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYV90XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhX3RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFfdFwiOiAxfX07fSxcbiAgICAgICAgICBcIk9obVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk9obVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiT2htXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJPaG1cIjogMX19O30sXG4gICAgICAgICAgXCJzcGhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzcGhcIiwgZGVzY3JpcHRpb246IFwiXFxcInNwaFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wic3BoXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYml0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYml0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJiaXRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImJpdFwiOiAxfX07fSxcbiAgICAgICAgICBcIm1ob1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1ob1wiLCBkZXNjcmlwdGlvbjogXCJcXFwibWhvXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtaG9cIjogMX19O30sXG4gICAgICAgICAgXCJtaW5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtaW5cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1pblxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibWluXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9sXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibW9sXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtb2xcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vbFwiOiAxfX07fSxcbiAgICAgICAgICBcImRlZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImRlZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiZGVnXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJkZWdcIjogMX19O30sXG4gICAgICAgICAgXCJnb25cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnb25cIiwgZGVzY3JpcHRpb246IFwiXFxcImdvblxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZ29uXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQ2VsXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQ2VsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJDZWxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkNlbFwiOiAxfX07fSxcbiAgICAgICAgICBcImthdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImthdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwia2F0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJrYXRcIjogMX19O30sXG4gICAgICAgICAgXCJhdHRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhdHRcIiwgZGVzY3JpcHRpb246IFwiXFxcImF0dFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYXR0XCI6IDF9fTt9LFxuICAgICAgICAgIFwib3NtXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwib3NtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJvc21cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm9zbVwiOiAxfX07fSxcbiAgICAgICAgICBcInRleFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInRleFwiLCBkZXNjcmlwdGlvbjogXCJcXFwidGV4XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJ0ZXhcIjogMX19O30sXG4gICAgICAgICAgXCJjYWxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxcIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUkVNXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUkVNXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJSRU1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlJFTVwiOiAxfX07fSxcbiAgICAgICAgICBcIlJBRFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlJBRFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUkFEXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJSQURcIjogMX19O30sXG4gICAgICAgICAgXCJhX2dcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhX2dcIiwgZGVzY3JpcHRpb246IFwiXFxcImFfZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYV9nXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTG1iXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTG1iXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJMbWJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkxtYlwiOiAxfX07fSxcbiAgICAgICAgICBcImF0bVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImF0bVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYXRtXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhdG1cIjogMX19O30sXG4gICAgICAgICAgXCJlcmdcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJlcmdcIiwgZGVzY3JpcHRpb246IFwiXFxcImVyZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZXJnXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZHluXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZHluXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJkeW5cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImR5blwiOiAxfX07fSxcbiAgICAgICAgICBcIkdhbFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkdhbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR2FsXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJHYWxcIjogMX19O30sXG4gICAgICAgICAgXCIxMF5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIxMF5cIiwgZGVzY3JpcHRpb246IFwiXFxcIjEwXlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiMTBeXCI6IDF9fTt9LFxuICAgICAgICAgIFwiMTAqXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiMTAqXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIxMCpcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIjEwKlwiOiAxfX07fSxcbiAgICAgICAgICBcIltTXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltTXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW1NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbU11cIjogMX19O30sXG4gICAgICAgICAgXCJbZ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltnXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2ddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0ddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0ddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbR11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltHXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltlXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltlXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZV1cIjogMX19O30sXG4gICAgICAgICAgXCJba11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2tdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltoXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY11cIjogMX19O30sXG4gICAgICAgICAgXCJiYXJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiYXJcIiwgZGVzY3JpcHRpb246IFwiXFxcImJhclxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYmFyXCI6IDF9fTt9LFxuICAgICAgICAgIFwibG1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJsbVwiLCBkZXNjcmlwdGlvbjogXCJcXFwibG1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImxtXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQ2lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJDaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQ2lcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkNpXCI6IDF9fTt9LFxuICAgICAgICAgIFwicGhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJwaFwiLCBkZXNjcmlwdGlvbjogXCJcXFwicGhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInBoXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQW9cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJBb1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiQW9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkFvXCI6IDF9fTt9LFxuICAgICAgICAgIFwiV2JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJXYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiV2JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIldiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiR2JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR2JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkdiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiT2VcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJPZVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiT2VcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk9lXCI6IDF9fTt9LFxuICAgICAgICAgIFwibHhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJseFwiLCBkZXNjcmlwdGlvbjogXCJcXFwibHhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImx4XCI6IDF9fTt9LFxuICAgICAgICAgIFwiTXhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJNeFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTXhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk14XCI6IDF9fTt9LFxuICAgICAgICAgIFwiU3RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJTdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiU3RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlN0XCI6IDF9fTt9LFxuICAgICAgICAgIFwiQmlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQmlcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJpXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQnFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCcVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQnFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJxXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTnBcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJOcFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTnBcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIk5wXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQVVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJBVVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQVVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkFVXCI6IDF9fTt9LFxuICAgICAgICAgIFwibW9cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtb1wiLCBkZXNjcmlwdGlvbjogXCJcXFwibW9cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1vXCI6IDF9fTt9LFxuICAgICAgICAgIFwiS3lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJLeVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiS3lcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkt5XCI6IDF9fTt9LFxuICAgICAgICAgIFwiZ2ZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnZlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZ2ZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImdmXCI6IDF9fTt9LFxuICAgICAgICAgIFwid2tcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ3a1wiLCBkZXNjcmlwdGlvbjogXCJcXFwid2tcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIndrXCI6IDF9fTt9LFxuICAgICAgICAgIFwiUGFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJQYVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUGFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlBhXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZyVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJnJVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZyVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImclXCI6IDF9fTt9LFxuICAgICAgICAgIFwic3JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzclwiLCBkZXNjcmlwdGlvbjogXCJcXFwic3JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInNyXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQmRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQmRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJkXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZXFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJlcVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZXFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImVxXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQnlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCeVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQnlcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJ5XCI6IDF9fTt9LFxuICAgICAgICAgIFwiSHpcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJIelwiLCBkZXNjcmlwdGlvbjogXCJcXFwiSHpcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkh6XCI6IDF9fTt9LFxuICAgICAgICAgIFwiJydcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCInJ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiJydcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIicnXCI6IDF9fTt9LFxuICAgICAgICAgIFwicGNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJwY1wiLCBkZXNjcmlwdGlvbjogXCJcXFwicGNcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInBjXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZVZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJlVlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZVZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImVWXCI6IDF9fTt9LFxuICAgICAgICAgIFwiR3lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHeVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR3lcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkd5XCI6IDF9fTt9LFxuICAgICAgICAgIFwic3RcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwic3RcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInN0XCI6IDF9fTt9LFxuICAgICAgICAgIFwiU3ZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJTdlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiU3ZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlN2XCI6IDF9fTt9LFxuICAgICAgICAgIFwiYXJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhclwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYXJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFyXCI6IDF9fTt9LFxuICAgICAgICAgIFwic2JcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwic2JcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInNiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiTFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkxcIiwgZGVzY3JpcHRpb246IFwiXFxcIkxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkxcIjogMX19O30sXG4gICAgICAgICAgXCJ0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwidFwiLCBkZXNjcmlwdGlvbjogXCJcXFwidFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1widFwiOiAxfX07fSxcbiAgICAgICAgICBcInVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ1XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ1XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJ1XCI6IDF9fTt9LFxuICAgICAgICAgIFwiUFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlBcIiwgZGVzY3JpcHRpb246IFwiXFxcIlBcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlBcIjogMX19O30sXG4gICAgICAgICAgXCJHXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiR1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiR1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiR1wiOiAxfX07fSxcbiAgICAgICAgICBcIlJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJSXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJSXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJSXCI6IDF9fTt9LFxuICAgICAgICAgIFwiSFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkhcIiwgZGVzY3JpcHRpb246IFwiXFxcIkhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkhcIjogMX19O30sXG4gICAgICAgICAgXCJUXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiVFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiVFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiVFwiOiAxfX07fSxcbiAgICAgICAgICBcIlVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJVXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJVXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJVXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJcIiwgZGVzY3JpcHRpb246IFwiXFxcIkJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJcIjogMX19O30sXG4gICAgICAgICAgXCJTXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiU1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiU1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiU1wiOiAxfX07fSxcbiAgICAgICAgICBcIm1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtXCI6IDF9fTt9LFxuICAgICAgICAgIFwic1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInNcIiwgZGVzY3JpcHRpb246IFwiXFxcInNcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInNcIjogMX19O30sXG4gICAgICAgICAgXCJGXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiRlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiRlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiRlwiOiAxfX07fSxcbiAgICAgICAgICBcImxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJsXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJsXCI6IDF9fTt9LFxuICAgICAgICAgIFwiVlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlZcIiwgZGVzY3JpcHRpb246IFwiXFxcIlZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlZcIjogMX19O30sXG4gICAgICAgICAgXCJBXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQVwiOiAxfX07fSxcbiAgICAgICAgICBcIldcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJXXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJXXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJXXCI6IDF9fTt9LFxuICAgICAgICAgIFwiS1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIktcIiwgZGVzY3JpcHRpb246IFwiXFxcIktcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIktcIjogMX19O30sXG4gICAgICAgICAgXCJDXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiQ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQ1wiOiAxfX07fSxcbiAgICAgICAgICBcImJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJiXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJiXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJiXCI6IDF9fTt9LFxuICAgICAgICAgIFwiJVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIiVcIiwgZGVzY3JpcHRpb246IFwiXFxcIiVcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIiVcIjogMX19O30sXG4gICAgICAgICAgXCJKXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiSlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiSlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiSlwiOiAxfX07fSxcbiAgICAgICAgICBcIidcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCInXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCInXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCInXCI6IDF9fTt9LFxuICAgICAgICAgIFwiaFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImhcIiwgZGVzY3JpcHRpb246IFwiXFxcImhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImhcIjogMX19O30sXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZFwiOiAxfX07fSxcbiAgICAgICAgICBcIk5cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJOXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJOXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJOXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFcIiwgZGVzY3JpcHRpb246IFwiXFxcImFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFcIjogMX19O30sXG4gICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZ1wiOiAxfX07fSxcbiAgICAgICAgICBcIllcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJZXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJZXFxcIlwiIH0sXG4gICAgICAgICAgXCJaXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiWlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiWlxcXCJcIiB9LFxuICAgICAgICAgIFwiRVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkVcIiwgZGVzY3JpcHRpb246IFwiXFxcIkVcXFwiXCIgfSxcbiAgICAgICAgICBcIk1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJNXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJNXFxcIlwiIH0sXG4gICAgICAgICAgXCJrXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwia1wiLCBkZXNjcmlwdGlvbjogXCJcXFwia1xcXCJcIiB9LFxuICAgICAgICAgIFwiZGFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkYVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZGFcXFwiXCIgfSxcbiAgICAgICAgICBcImNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjXFxcIlwiIH0sXG4gICAgICAgICAgXCJuXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiblwiLCBkZXNjcmlwdGlvbjogXCJcXFwiblxcXCJcIiB9LFxuICAgICAgICAgIFwicFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInBcIiwgZGVzY3JpcHRpb246IFwiXFxcInBcXFwiXCIgfSxcbiAgICAgICAgICBcImZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJmXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJmXFxcIlwiIH0sXG4gICAgICAgICAgXCJ6XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwielwiLCBkZXNjcmlwdGlvbjogXCJcXFwielxcXCJcIiB9LFxuICAgICAgICAgIFwieVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInlcIiwgZGVzY3JpcHRpb246IFwiXFxcInlcXFwiXCIgfSxcbiAgICAgICAgICBcIktpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiS2lcIiwgZGVzY3JpcHRpb246IFwiXFxcIktpXFxcIlwiIH0sXG4gICAgICAgICAgXCJNaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIk1pXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJNaVxcXCJcIiB9LFxuICAgICAgICAgIFwiR2lcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiR2lcXFwiXCIgfSxcbiAgICAgICAgICBcIlRpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiVGlcIiwgZGVzY3JpcHRpb246IFwiXFxcIlRpXFxcIlwiIH1cbiAgICAgICAgXSxcblxuICAgICAgICBwZWckYnl0ZWNvZGUgPSBbXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3ISsnIDQhNiAhISAlXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLlxcXCJcXFwiXFxcIjJcXFwiMyMrMiQ3IysoJTRcXFwiNiRcXFwiISAlJFxcXCIjICFcXFwiIyAhKiMgXFxcIjcjXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhLiVcXFwiXFxcIjIlMyYrLSQ3JCsjJSdcXFwiJSRcXFwiIyAhXFxcIiMgISo+IFxcXCIhLlxcXCJcXFwiXFxcIjJcXFwiMyMrLSQ3JCsjJSdcXFwiJSRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITckKzskICc3XFxcIiwjJjdcXFwiXFxcIispJTRcXFwiNihcXFwiXFxcIiEgJSRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITclK2MkNyYqIyBcXFwiICkrUyUgJzcpLCMmNylcXFwiK0ElNTYqIFxcXCJcXFwiISkjI1xcXCIgIVxcXCIgKyspJTQkNiwkXFxcIiNcXFwiJSQkIyAhJCMjICEkXFxcIiMgIVxcXCIjICEqRSBcXFwiITcoKzokICc3KSwjJjcpXFxcIisoJTRcXFwiNi1cXFwiISElJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNycrJyA0ITYuISEgJSpZIFxcXCIhLi9cXFwiXFxcIjIvMzArQiQ3Iys4JS4xXFxcIlxcXCIyMTMyKyglNCM2MyMhISUkIyMgISRcXFwiIyAhXFxcIiMgISojIFxcXCI3KVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITA0XFxcIlxcXCIxITM1KiMgXFxcIiApKzMkNygrKSU0XFxcIjY2XFxcIlxcXCIhICUkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3KyojIFxcXCIgKStLJDcqK0ElNTY3IFxcXCIhICkjI1xcXCIgIVxcXCIgKyspJTQjNjgjXFxcIlxcXCIhJSQjIyAhJFxcXCIjICFcXFwiIyAhKiMgXFxcIjcqXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhICcwOVxcXCJcXFwiMSEzOissJCwpJjA5XFxcIlxcXCIxITM6XFxcIlxcXCJcXFwiICEraSQuO1xcXCJcXFwiMjszPCojIFxcXCIgKStTJTcmKiMgXFxcIiApK0MlNTY9ICNcXFwiISApIyNcXFwiICFcXFwiICsrKiU0JDY+JCMjXFxcIiElJCQjICEkIyMgISRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiIS4/XFxcIlxcXCIyPzNAK3QkICcwQVxcXCJcXFwiMSEzQissJCwpJjBBXFxcIlxcXCIxITNCXFxcIlxcXCJcXFwiICErTyUuQ1xcXCJcXFwiMkMzRCs/JTU2RSAhISkjI1xcXCIgIVxcXCIgKysoJTQkNkYkIVxcXCIlJCQjICEkIyMgISRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiIS5HXFxcIlxcXCIyRzNIKycgNCE2SSEhICUqXFx1MUNDRCBcXFwiIS5KXFxcIlxcXCIySjNLKycgNCE2TCEhICUqXFx1MUNCNSBcXFwiIS5NXFxcIlxcXCIyTTNOKycgNCE2TyEhICUqXFx1MUM5RCBcXFwiIS5QXFxcIlxcXCIyUDNRKycgNCE2UiEhICUqXFx1MUM4NSBcXFwiIS5TXFxcIlxcXCIyUzNUKycgNCE2VSEhICUqXFx1MUM2RCBcXFwiIS5WXFxcIlxcXCIyVjNXKycgNCE2WCEhICUqXFx1MUM1NSBcXFwiIS5ZXFxcIlxcXCIyWTNaKycgNCE2WyEhICUqXFx1MUMzRCBcXFwiIS5cXFxcXFxcIlxcXCIyXFxcXDNdKycgNCE2XiEhICUqXFx1MUMyNSBcXFwiIS5fXFxcIlxcXCIyXzNgKycgNCE2YSEhICUqXFx1MUMwRCBcXFwiIS5iXFxcIlxcXCIyYjNjKycgNCE2ZCEhICUqXFx1MUJGNSBcXFwiIS5lXFxcIlxcXCIyZTNmKycgNCE2ZyEhICUqXFx1MUJERCBcXFwiIS5oXFxcIlxcXCIyaDNpKycgNCE2aiEhICUqXFx1MUJDNSBcXFwiIS5rXFxcIlxcXCIyazNsKycgNCE2bSEhICUqXFx1MUJBRCBcXFwiIS5uXFxcIlxcXCIybjNvKycgNCE2cCEhICUqXFx1MUI5NSBcXFwiIS5xXFxcIlxcXCIycTNyKycgNCE2cyEhICUqXFx1MUI3RCBcXFwiIS50XFxcIlxcXCIydDN1KycgNCE2diEhICUqXFx1MUI2NSBcXFwiIS53XFxcIlxcXCIydzN4KycgNCE2eSEhICUqXFx1MUI0RCBcXFwiIS56XFxcIlxcXCIyejN7KycgNCE2fCEhICUqXFx1MUIzNSBcXFwiIS59XFxcIlxcXCIyfTN+KycgNCE2fyEhICUqXFx1MUIxRCBcXFwiIS5cXHg4MFxcXCJcXFwiMlxceDgwM1xceDgxKycgNCE2XFx4ODIhISAlKlxcdTFCMDUgXFxcIiEuXFx4ODNcXFwiXFxcIjJcXHg4MzNcXHg4NCsnIDQhNlxceDg1ISEgJSpcXHUxQUVEIFxcXCIhLlxceDg2XFxcIlxcXCIyXFx4ODYzXFx4ODcrJyA0ITZcXHg4OCEhICUqXFx1MUFENSBcXFwiIS5cXHg4OVxcXCJcXFwiMlxceDg5M1xceDhBKycgNCE2XFx4OEIhISAlKlxcdTFBQkQgXFxcIiEuXFx4OENcXFwiXFxcIjJcXHg4QzNcXHg4RCsnIDQhNlxceDhFISEgJSpcXHUxQUE1IFxcXCIhLlxceDhGXFxcIlxcXCIyXFx4OEYzXFx4OTArJyA0ITZcXHg5MSEhICUqXFx1MUE4RCBcXFwiIS5cXHg5MlxcXCJcXFwiMlxceDkyM1xceDkzKycgNCE2XFx4OTQhISAlKlxcdTFBNzUgXFxcIiEuXFx4OTVcXFwiXFxcIjJcXHg5NTNcXHg5NisnIDQhNlxceDk3ISEgJSpcXHUxQTVEIFxcXCIhLlxceDk4XFxcIlxcXCIyXFx4OTgzXFx4OTkrJyA0ITZcXHg5QSEhICUqXFx1MUE0NSBcXFwiIS5cXHg5QlxcXCJcXFwiMlxceDlCM1xceDlDKycgNCE2XFx4OUQhISAlKlxcdTFBMkQgXFxcIiEuXFx4OUVcXFwiXFxcIjJcXHg5RTNcXHg5RisnIDQhNlxceEEwISEgJSpcXHUxQTE1IFxcXCIhLlxceEExXFxcIlxcXCIyXFx4QTEzXFx4QTIrJyA0ITZcXHhBMyEhICUqXFx1MTlGRCBcXFwiIS5cXHhBNFxcXCJcXFwiMlxceEE0M1xceEE1KycgNCE2XFx4QTYhISAlKlxcdTE5RTUgXFxcIiEuXFx4QTdcXFwiXFxcIjJcXHhBNzNcXHhBOCsnIDQhNlxceEE5ISEgJSpcXHUxOUNEIFxcXCIhLlxceEFBXFxcIlxcXCIyXFx4QUEzXFx4QUIrJyA0ITZcXHhBQyEhICUqXFx1MTlCNSBcXFwiIS5cXHhBRFxcXCJcXFwiMlxceEFEM1xceEFFKycgNCE2XFx4QUYhISAlKlxcdTE5OUQgXFxcIiEuXFx4QjBcXFwiXFxcIjJcXHhCMDNcXHhCMSsnIDQhNlxceEIyISEgJSpcXHUxOTg1IFxcXCIhLlxceEIzXFxcIlxcXCIyXFx4QjMzXFx4QjQrJyA0ITZcXHhCNSEhICUqXFx1MTk2RCBcXFwiIS5cXHhCNlxcXCJcXFwiMlxceEI2M1xceEI3KycgNCE2XFx4QjghISAlKlxcdTE5NTUgXFxcIiEuXFx4QjlcXFwiXFxcIjJcXHhCOTNcXHhCQSsnIDQhNlxceEJCISEgJSpcXHUxOTNEIFxcXCIhLlxceEJDXFxcIlxcXCIyXFx4QkMzXFx4QkQrJyA0ITZcXHhCRSEhICUqXFx1MTkyNSBcXFwiIS5cXHhCRlxcXCJcXFwiMlxceEJGM1xceEMwKycgNCE2XFx4QzEhISAlKlxcdTE5MEQgXFxcIiEuXFx4QzJcXFwiXFxcIjJcXHhDMjNcXHhDMysnIDQhNlxceEM0ISEgJSpcXHUxOEY1IFxcXCIhLlxceEM1XFxcIlxcXCIyXFx4QzUzXFx4QzYrJyA0ITZcXHhDNyEhICUqXFx1MThERCBcXFwiIS5cXHhDOFxcXCJcXFwiMlxceEM4M1xceEM5KycgNCE2XFx4Q0EhISAlKlxcdTE4QzUgXFxcIiEuXFx4Q0JcXFwiXFxcIjJcXHhDQjNcXHhDQysnIDQhNlxceENEISEgJSpcXHUxOEFEIFxcXCIhLlxceENFXFxcIlxcXCIyXFx4Q0UzXFx4Q0YrJyA0ITZcXHhEMCEhICUqXFx1MTg5NSBcXFwiIS5cXHhEMVxcXCJcXFwiMlxceEQxM1xceEQyKycgNCE2XFx4RDMhISAlKlxcdTE4N0QgXFxcIiEuXFx4RDRcXFwiXFxcIjJcXHhENDNcXHhENSsnIDQhNlxceEQ2ISEgJSpcXHUxODY1IFxcXCIhLlxceEQ3XFxcIlxcXCIyXFx4RDczXFx4RDgrJyA0ITZcXHhEOSEhICUqXFx1MTg0RCBcXFwiIS5cXHhEQVxcXCJcXFwiMlxceERBM1xceERCKycgNCE2XFx4REMhISAlKlxcdTE4MzUgXFxcIiEuXFx4RERcXFwiXFxcIjJcXHhERDNcXHhERSsnIDQhNlxceERGISEgJSpcXHUxODFEIFxcXCIhLlxceEUwXFxcIlxcXCIyXFx4RTAzXFx4RTErJyA0ITZcXHhFMiEhICUqXFx1MTgwNSBcXFwiIS5cXHhFM1xcXCJcXFwiMlxceEUzM1xceEU0KycgNCE2XFx4RTUhISAlKlxcdTE3RUQgXFxcIiEuXFx4RTZcXFwiXFxcIjJcXHhFNjNcXHhFNysnIDQhNlxceEU4ISEgJSpcXHUxN0Q1IFxcXCIhLlxceEU5XFxcIlxcXCIyXFx4RTkzXFx4RUErJyA0ITZcXHhFQiEhICUqXFx1MTdCRCBcXFwiIS5cXHhFQ1xcXCJcXFwiMlxceEVDM1xceEVEKycgNCE2XFx4RUUhISAlKlxcdTE3QTUgXFxcIiEuXFx4RUZcXFwiXFxcIjJcXHhFRjNcXHhGMCsnIDQhNlxceEYxISEgJSpcXHUxNzhEIFxcXCIhLlxceEYyXFxcIlxcXCIyXFx4RjIzXFx4RjMrJyA0ITZcXHhGNCEhICUqXFx1MTc3NSBcXFwiIS5cXHhGNVxcXCJcXFwiMlxceEY1M1xceEY2KycgNCE2XFx4RjchISAlKlxcdTE3NUQgXFxcIiEuXFx4RjhcXFwiXFxcIjJcXHhGODNcXHhGOSsnIDQhNlxceEZBISEgJSpcXHUxNzQ1IFxcXCIhLlxceEZCXFxcIlxcXCIyXFx4RkIzXFx4RkMrJyA0ITZcXHhGRCEhICUqXFx1MTcyRCBcXFwiIS5cXHhGRVxcXCJcXFwiMlxceEZFM1xceEZGKycgNCE2XFx1MDEwMCEhICUqXFx1MTcxNSBcXFwiIS5cXHUwMTAxXFxcIlxcXCIyXFx1MDEwMTNcXHUwMTAyKycgNCE2XFx1MDEwMyEhICUqXFx1MTZGRCBcXFwiIS5cXHUwMTA0XFxcIlxcXCIyXFx1MDEwNDNcXHUwMTA1KycgNCE2XFx1MDEwNiEhICUqXFx1MTZFNSBcXFwiIS5cXHUwMTA3XFxcIlxcXCIyXFx1MDEwNzNcXHUwMTA4KycgNCE2XFx1MDEwOSEhICUqXFx1MTZDRCBcXFwiIS5cXHUwMTBBXFxcIlxcXCIyXFx1MDEwQTNcXHUwMTBCKycgNCE2XFx1MDEwQyEhICUqXFx1MTZCNSBcXFwiIS5cXHUwMTBEXFxcIlxcXCIyXFx1MDEwRDNcXHUwMTBFKycgNCE2XFx1MDEwRiEhICUqXFx1MTY5RCBcXFwiIS5cXHUwMTEwXFxcIlxcXCIyXFx1MDExMDNcXHUwMTExKycgNCE2XFx1MDExMiEhICUqXFx1MTY4NSBcXFwiIS5cXHUwMTEzXFxcIlxcXCIyXFx1MDExMzNcXHUwMTE0KycgNCE2XFx1MDExNSEhICUqXFx1MTY2RCBcXFwiIS5cXHUwMTE2XFxcIlxcXCIyXFx1MDExNjNcXHUwMTE3KycgNCE2XFx1MDExOCEhICUqXFx1MTY1NSBcXFwiIS5cXHUwMTE5XFxcIlxcXCIyXFx1MDExOTNcXHUwMTFBKycgNCE2XFx1MDExQiEhICUqXFx1MTYzRCBcXFwiIS5cXHUwMTFDXFxcIlxcXCIyXFx1MDExQzNcXHUwMTFEKycgNCE2XFx1MDExRSEhICUqXFx1MTYyNSBcXFwiIS5cXHUwMTFGXFxcIlxcXCIyXFx1MDExRjNcXHUwMTIwKycgNCE2XFx1MDEyMSEhICUqXFx1MTYwRCBcXFwiIS5cXHUwMTIyXFxcIlxcXCIyXFx1MDEyMjNcXHUwMTIzKycgNCE2XFx1MDEyNCEhICUqXFx1MTVGNSBcXFwiIS5cXHUwMTI1XFxcIlxcXCIyXFx1MDEyNTNcXHUwMTI2KycgNCE2XFx1MDEyNyEhICUqXFx1MTVERCBcXFwiIS5cXHUwMTI4XFxcIlxcXCIyXFx1MDEyODNcXHUwMTI5KycgNCE2XFx1MDEyQSEhICUqXFx1MTVDNSBcXFwiIS5cXHUwMTJCXFxcIlxcXCIyXFx1MDEyQjNcXHUwMTJDKycgNCE2XFx1MDEyRCEhICUqXFx1MTVBRCBcXFwiIS5cXHUwMTJFXFxcIlxcXCIyXFx1MDEyRTNcXHUwMTJGKycgNCE2XFx1MDEzMCEhICUqXFx1MTU5NSBcXFwiIS5cXHUwMTMxXFxcIlxcXCIyXFx1MDEzMTNcXHUwMTMyKycgNCE2XFx1MDEzMyEhICUqXFx1MTU3RCBcXFwiIS5cXHUwMTM0XFxcIlxcXCIyXFx1MDEzNDNcXHUwMTM1KycgNCE2XFx1MDEzNiEhICUqXFx1MTU2NSBcXFwiIS5cXHUwMTM3XFxcIlxcXCIyXFx1MDEzNzNcXHUwMTM4KycgNCE2XFx1MDEzOSEhICUqXFx1MTU0RCBcXFwiIS5cXHUwMTNBXFxcIlxcXCIyXFx1MDEzQTNcXHUwMTNCKycgNCE2XFx1MDEzQyEhICUqXFx1MTUzNSBcXFwiIS5cXHUwMTNEXFxcIlxcXCIyXFx1MDEzRDNcXHUwMTNFKycgNCE2XFx1MDEzRiEhICUqXFx1MTUxRCBcXFwiIS5cXHUwMTQwXFxcIlxcXCIyXFx1MDE0MDNcXHUwMTQxKycgNCE2XFx1MDE0MiEhICUqXFx1MTUwNSBcXFwiIS5cXHUwMTQzXFxcIlxcXCIyXFx1MDE0MzNcXHUwMTQ0KycgNCE2XFx1MDE0NSEhICUqXFx1MTRFRCBcXFwiIS5cXHUwMTQ2XFxcIlxcXCIyXFx1MDE0NjNcXHUwMTQ3KycgNCE2XFx1MDE0OCEhICUqXFx1MTRENSBcXFwiIS5cXHUwMTQ5XFxcIlxcXCIyXFx1MDE0OTNcXHUwMTRBKycgNCE2XFx1MDE0QiEhICUqXFx1MTRCRCBcXFwiIS5cXHUwMTRDXFxcIlxcXCIyXFx1MDE0QzNcXHUwMTREKycgNCE2XFx1MDE0RSEhICUqXFx1MTRBNSBcXFwiIS5cXHUwMTRGXFxcIlxcXCIyXFx1MDE0RjNcXHUwMTUwKycgNCE2XFx1MDE1MSEhICUqXFx1MTQ4RCBcXFwiIS5cXHUwMTUyXFxcIlxcXCIyXFx1MDE1MjNcXHUwMTUzKycgNCE2XFx1MDE1NCEhICUqXFx1MTQ3NSBcXFwiIS5cXHUwMTU1XFxcIlxcXCIyXFx1MDE1NTNcXHUwMTU2KycgNCE2XFx1MDE1NyEhICUqXFx1MTQ1RCBcXFwiIS5cXHUwMTU4XFxcIlxcXCIyXFx1MDE1ODNcXHUwMTU5KycgNCE2XFx1MDE1QSEhICUqXFx1MTQ0NSBcXFwiIS5cXHUwMTVCXFxcIlxcXCIyXFx1MDE1QjNcXHUwMTVDKycgNCE2XFx1MDE1RCEhICUqXFx1MTQyRCBcXFwiIS5cXHUwMTVFXFxcIlxcXCIyXFx1MDE1RTNcXHUwMTVGKycgNCE2XFx1MDE2MCEhICUqXFx1MTQxNSBcXFwiIS5cXHUwMTYxXFxcIlxcXCIyXFx1MDE2MTNcXHUwMTYyKycgNCE2XFx1MDE2MyEhICUqXFx1MTNGRCBcXFwiIS5cXHUwMTY0XFxcIlxcXCIyXFx1MDE2NDNcXHUwMTY1KycgNCE2XFx1MDE2NiEhICUqXFx1MTNFNSBcXFwiIS5cXHUwMTY3XFxcIlxcXCIyXFx1MDE2NzNcXHUwMTY4KycgNCE2XFx1MDE2OSEhICUqXFx1MTNDRCBcXFwiIS5cXHUwMTZBXFxcIlxcXCIyXFx1MDE2QTNcXHUwMTZCKycgNCE2XFx1MDE2QyEhICUqXFx1MTNCNSBcXFwiIS5cXHUwMTZEXFxcIlxcXCIyXFx1MDE2RDNcXHUwMTZFKycgNCE2XFx1MDE2RiEhICUqXFx1MTM5RCBcXFwiIS5cXHUwMTcwXFxcIlxcXCIyXFx1MDE3MDNcXHUwMTcxKycgNCE2XFx1MDE3MiEhICUqXFx1MTM4NSBcXFwiIS5cXHUwMTczXFxcIlxcXCIyXFx1MDE3MzNcXHUwMTc0KycgNCE2XFx1MDE3NSEhICUqXFx1MTM2RCBcXFwiIS5cXHUwMTc2XFxcIlxcXCIyXFx1MDE3NjNcXHUwMTc3KycgNCE2XFx1MDE3OCEhICUqXFx1MTM1NSBcXFwiIS5cXHUwMTc5XFxcIlxcXCIyXFx1MDE3OTNcXHUwMTdBKycgNCE2XFx1MDE3QiEhICUqXFx1MTMzRCBcXFwiIS5cXHUwMTdDXFxcIlxcXCIyXFx1MDE3QzNcXHUwMTdEKycgNCE2XFx1MDE3RSEhICUqXFx1MTMyNSBcXFwiIS5cXHUwMTdGXFxcIlxcXCIyXFx1MDE3RjNcXHUwMTgwKycgNCE2XFx1MDE4MSEhICUqXFx1MTMwRCBcXFwiIS5cXHUwMTgyXFxcIlxcXCIyXFx1MDE4MjNcXHUwMTgzKycgNCE2XFx1MDE4NCEhICUqXFx1MTJGNSBcXFwiIS5cXHUwMTg1XFxcIlxcXCIyXFx1MDE4NTNcXHUwMTg2KycgNCE2XFx1MDE4NyEhICUqXFx1MTJERCBcXFwiIS5cXHUwMTg4XFxcIlxcXCIyXFx1MDE4ODNcXHUwMTg5KycgNCE2XFx1MDE4QSEhICUqXFx1MTJDNSBcXFwiIS5cXHUwMThCXFxcIlxcXCIyXFx1MDE4QjNcXHUwMThDKycgNCE2XFx1MDE4RCEhICUqXFx1MTJBRCBcXFwiIS5cXHUwMThFXFxcIlxcXCIyXFx1MDE4RTNcXHUwMThGKycgNCE2XFx1MDE5MCEhICUqXFx1MTI5NSBcXFwiIS5cXHUwMTkxXFxcIlxcXCIyXFx1MDE5MTNcXHUwMTkyKycgNCE2XFx1MDE5MyEhICUqXFx1MTI3RCBcXFwiIS5cXHUwMTk0XFxcIlxcXCIyXFx1MDE5NDNcXHUwMTk1KycgNCE2XFx1MDE5NiEhICUqXFx1MTI2NSBcXFwiIS5cXHUwMTk3XFxcIlxcXCIyXFx1MDE5NzNcXHUwMTk4KycgNCE2XFx1MDE5OSEhICUqXFx1MTI0RCBcXFwiIS5cXHUwMTlBXFxcIlxcXCIyXFx1MDE5QTNcXHUwMTlCKycgNCE2XFx1MDE5QyEhICUqXFx1MTIzNSBcXFwiIS5cXHUwMTlEXFxcIlxcXCIyXFx1MDE5RDNcXHUwMTlFKycgNCE2XFx1MDE5RiEhICUqXFx1MTIxRCBcXFwiIS5cXHUwMUEwXFxcIlxcXCIyXFx1MDFBMDNcXHUwMUExKycgNCE2XFx1MDFBMiEhICUqXFx1MTIwNSBcXFwiIS5cXHUwMUEzXFxcIlxcXCIyXFx1MDFBMzNcXHUwMUE0KycgNCE2XFx1MDFBNSEhICUqXFx1MTFFRCBcXFwiIS5cXHUwMUE2XFxcIlxcXCIyXFx1MDFBNjNcXHUwMUE3KycgNCE2XFx1MDFBOCEhICUqXFx1MTFENSBcXFwiIS5cXHUwMUE5XFxcIlxcXCIyXFx1MDFBOTNcXHUwMUFBKycgNCE2XFx1MDFBQiEhICUqXFx1MTFCRCBcXFwiIS5cXHUwMUFDXFxcIlxcXCIyXFx1MDFBQzNcXHUwMUFEKycgNCE2XFx1MDFBRSEhICUqXFx1MTFBNSBcXFwiIS5cXHUwMUFGXFxcIlxcXCIyXFx1MDFBRjNcXHUwMUIwKycgNCE2XFx1MDFCMSEhICUqXFx1MTE4RCBcXFwiIS5cXHUwMUIyXFxcIlxcXCIyXFx1MDFCMjNcXHUwMUIzKycgNCE2XFx1MDFCNCEhICUqXFx1MTE3NSBcXFwiIS5cXHUwMUI1XFxcIlxcXCIyXFx1MDFCNTNcXHUwMUI2KycgNCE2XFx1MDFCNyEhICUqXFx1MTE1RCBcXFwiIS5cXHUwMUI4XFxcIlxcXCIyXFx1MDFCODNcXHUwMUI5KycgNCE2XFx1MDFCQSEhICUqXFx1MTE0NSBcXFwiIS5cXHUwMUJCXFxcIlxcXCIyXFx1MDFCQjNcXHUwMUJDKycgNCE2XFx1MDFCRCEhICUqXFx1MTEyRCBcXFwiIS5cXHUwMUJFXFxcIlxcXCIyXFx1MDFCRTNcXHUwMUJGKycgNCE2XFx1MDFDMCEhICUqXFx1MTExNSBcXFwiIS5cXHUwMUMxXFxcIlxcXCIyXFx1MDFDMTNcXHUwMUMyKycgNCE2XFx1MDFDMyEhICUqXFx1MTBGRCBcXFwiIS5cXHUwMUM0XFxcIlxcXCIyXFx1MDFDNDNcXHUwMUM1KycgNCE2XFx1MDFDNiEhICUqXFx1MTBFNSBcXFwiIS5cXHUwMUM3XFxcIlxcXCIyXFx1MDFDNzNcXHUwMUM4KycgNCE2XFx1MDFDOSEhICUqXFx1MTBDRCBcXFwiIS5cXHUwMUNBXFxcIlxcXCIyXFx1MDFDQTNcXHUwMUNCKycgNCE2XFx1MDFDQyEhICUqXFx1MTBCNSBcXFwiIS5cXHUwMUNEXFxcIlxcXCIyXFx1MDFDRDNcXHUwMUNFKycgNCE2XFx1MDFDRiEhICUqXFx1MTA5RCBcXFwiIS5cXHUwMUQwXFxcIlxcXCIyXFx1MDFEMDNcXHUwMUQxKycgNCE2XFx1MDFEMiEhICUqXFx1MTA4NSBcXFwiIS5cXHUwMUQzXFxcIlxcXCIyXFx1MDFEMzNcXHUwMUQ0KycgNCE2XFx1MDFENSEhICUqXFx1MTA2RCBcXFwiIS5cXHUwMUQ2XFxcIlxcXCIyXFx1MDFENjNcXHUwMUQ3KycgNCE2XFx1MDFEOCEhICUqXFx1MTA1NSBcXFwiIS5cXHUwMUQ5XFxcIlxcXCIyXFx1MDFEOTNcXHUwMURBKycgNCE2XFx1MDFEQiEhICUqXFx1MTAzRCBcXFwiIS5cXHUwMURDXFxcIlxcXCIyXFx1MDFEQzNcXHUwMUREKycgNCE2XFx1MDFERSEhICUqXFx1MTAyNSBcXFwiIS5cXHUwMURGXFxcIlxcXCIyXFx1MDFERjNcXHUwMUUwKycgNCE2XFx1MDFFMSEhICUqXFx1MTAwRCBcXFwiIS5cXHUwMUUyXFxcIlxcXCIyXFx1MDFFMjNcXHUwMUUzKycgNCE2XFx1MDFFNCEhICUqXFx1MEZGNSBcXFwiIS5cXHUwMUU1XFxcIlxcXCIyXFx1MDFFNTNcXHUwMUU2KycgNCE2XFx1MDFFNyEhICUqXFx1MEZERCBcXFwiIS5cXHUwMUU4XFxcIlxcXCIyXFx1MDFFODNcXHUwMUU5KycgNCE2XFx1MDFFQSEhICUqXFx1MEZDNSBcXFwiIS5cXHUwMUVCXFxcIlxcXCIyXFx1MDFFQjNcXHUwMUVDKycgNCE2XFx1MDFFRCEhICUqXFx1MEZBRCBcXFwiIS5cXHUwMUVFXFxcIlxcXCIyXFx1MDFFRTNcXHUwMUVGKycgNCE2XFx1MDFGMCEhICUqXFx1MEY5NSBcXFwiIS5cXHUwMUYxXFxcIlxcXCIyXFx1MDFGMTNcXHUwMUYyKycgNCE2XFx1MDFGMyEhICUqXFx1MEY3RCBcXFwiIS5cXHUwMUY0XFxcIlxcXCIyXFx1MDFGNDNcXHUwMUY1KycgNCE2XFx1MDFGNiEhICUqXFx1MEY2NSBcXFwiIS5cXHUwMUY3XFxcIlxcXCIyXFx1MDFGNzNcXHUwMUY4KycgNCE2XFx1MDFGOSEhICUqXFx1MEY0RCBcXFwiIS5cXHUwMUZBXFxcIlxcXCIyXFx1MDFGQTNcXHUwMUZCKycgNCE2XFx1MDFGQyEhICUqXFx1MEYzNSBcXFwiIS5cXHUwMUZEXFxcIlxcXCIyXFx1MDFGRDNcXHUwMUZFKycgNCE2XFx1MDFGRiEhICUqXFx1MEYxRCBcXFwiIS5cXHUwMjAwXFxcIlxcXCIyXFx1MDIwMDNcXHUwMjAxKycgNCE2XFx1MDIwMiEhICUqXFx1MEYwNSBcXFwiIS5cXHUwMjAzXFxcIlxcXCIyXFx1MDIwMzNcXHUwMjA0KycgNCE2XFx1MDIwNSEhICUqXFx1MEVFRCBcXFwiIS5cXHUwMjA2XFxcIlxcXCIyXFx1MDIwNjNcXHUwMjA3KycgNCE2XFx1MDIwOCEhICUqXFx1MEVENSBcXFwiIS5cXHUwMjA5XFxcIlxcXCIyXFx1MDIwOTNcXHUwMjBBKycgNCE2XFx1MDIwQiEhICUqXFx1MEVCRCBcXFwiIS5cXHUwMjBDXFxcIlxcXCIyXFx1MDIwQzNcXHUwMjBEKycgNCE2XFx1MDIwRSEhICUqXFx1MEVBNSBcXFwiIS5cXHUwMjBGXFxcIlxcXCIyXFx1MDIwRjNcXHUwMjEwKycgNCE2XFx1MDIxMSEhICUqXFx1MEU4RCBcXFwiIS5cXHUwMjEyXFxcIlxcXCIyXFx1MDIxMjNcXHUwMjEzKycgNCE2XFx1MDIxNCEhICUqXFx1MEU3NSBcXFwiIS5cXHUwMjE1XFxcIlxcXCIyXFx1MDIxNTNcXHUwMjE2KycgNCE2XFx1MDIxNyEhICUqXFx1MEU1RCBcXFwiIS5cXHUwMjE4XFxcIlxcXCIyXFx1MDIxODNcXHUwMjE5KycgNCE2XFx1MDIxQSEhICUqXFx1MEU0NSBcXFwiIS5cXHUwMjFCXFxcIlxcXCIyXFx1MDIxQjNcXHUwMjFDKycgNCE2XFx1MDIxRCEhICUqXFx1MEUyRCBcXFwiIS5cXHUwMjFFXFxcIlxcXCIyXFx1MDIxRTNcXHUwMjFGKycgNCE2XFx1MDIyMCEhICUqXFx1MEUxNSBcXFwiIS5cXHUwMjIxXFxcIlxcXCIyXFx1MDIyMTNcXHUwMjIyKycgNCE2XFx1MDIyMyEhICUqXFx1MERGRCBcXFwiIS5cXHUwMjI0XFxcIlxcXCIyXFx1MDIyNDNcXHUwMjI1KycgNCE2XFx1MDIyNiEhICUqXFx1MERFNSBcXFwiIS5cXHUwMjI3XFxcIlxcXCIyXFx1MDIyNzNcXHUwMjI4KycgNCE2XFx1MDIyOSEhICUqXFx1MERDRCBcXFwiIS5cXHUwMjJBXFxcIlxcXCIyXFx1MDIyQTNcXHUwMjJCKycgNCE2XFx1MDIyQyEhICUqXFx1MERCNSBcXFwiIS5cXHUwMjJEXFxcIlxcXCIyXFx1MDIyRDNcXHUwMjJFKycgNCE2XFx1MDIyRiEhICUqXFx1MEQ5RCBcXFwiIS5cXHUwMjMwXFxcIlxcXCIyXFx1MDIzMDNcXHUwMjMxKycgNCE2XFx1MDIzMiEhICUqXFx1MEQ4NSBcXFwiIS5cXHUwMjMzXFxcIlxcXCIyXFx1MDIzMzNcXHUwMjM0KycgNCE2XFx1MDIzNSEhICUqXFx1MEQ2RCBcXFwiIS5cXHUwMjM2XFxcIlxcXCIyXFx1MDIzNjNcXHUwMjM3KycgNCE2XFx1MDIzOCEhICUqXFx1MEQ1NSBcXFwiIS5cXHUwMjM5XFxcIlxcXCIyXFx1MDIzOTNcXHUwMjNBKycgNCE2XFx1MDIzQiEhICUqXFx1MEQzRCBcXFwiIS5cXHUwMjNDXFxcIlxcXCIyXFx1MDIzQzNcXHUwMjNEKycgNCE2XFx1MDIzRSEhICUqXFx1MEQyNSBcXFwiIS5cXHUwMjNGXFxcIlxcXCIyXFx1MDIzRjNcXHUwMjQwKycgNCE2XFx1MDI0MSEhICUqXFx1MEQwRCBcXFwiIS5cXHUwMjQyXFxcIlxcXCIyXFx1MDI0MjNcXHUwMjQzKycgNCE2XFx1MDI0NCEhICUqXFx1MENGNSBcXFwiIS5cXHUwMjQ1XFxcIlxcXCIyXFx1MDI0NTNcXHUwMjQ2KycgNCE2XFx1MDI0NyEhICUqXFx1MENERCBcXFwiIS5cXHUwMjQ4XFxcIlxcXCIyXFx1MDI0ODNcXHUwMjQ5KycgNCE2XFx1MDI0QSEhICUqXFx1MENDNSBcXFwiIS5cXHUwMjRCXFxcIlxcXCIyXFx1MDI0QjNcXHUwMjRDKycgNCE2XFx1MDI0RCEhICUqXFx1MENBRCBcXFwiIS5cXHUwMjRFXFxcIlxcXCIyXFx1MDI0RTNcXHUwMjRGKycgNCE2XFx1MDI1MCEhICUqXFx1MEM5NSBcXFwiIS5cXHUwMjUxXFxcIlxcXCIyXFx1MDI1MTNcXHUwMjUyKycgNCE2XFx1MDI1MyEhICUqXFx1MEM3RCBcXFwiIS5cXHUwMjU0XFxcIlxcXCIyXFx1MDI1NDNcXHUwMjU1KycgNCE2XFx1MDI1NiEhICUqXFx1MEM2NSBcXFwiIS5cXHUwMjU3XFxcIlxcXCIyXFx1MDI1NzNcXHUwMjU4KycgNCE2XFx1MDI1OSEhICUqXFx1MEM0RCBcXFwiIS5cXHUwMjVBXFxcIlxcXCIyXFx1MDI1QTNcXHUwMjVCKycgNCE2XFx1MDI1QyEhICUqXFx1MEMzNSBcXFwiIS5cXHUwMjVEXFxcIlxcXCIyXFx1MDI1RDNcXHUwMjVFKycgNCE2XFx1MDI1RiEhICUqXFx1MEMxRCBcXFwiIS5cXHUwMjYwXFxcIlxcXCIyXFx1MDI2MDNcXHUwMjYxKycgNCE2XFx1MDI2MiEhICUqXFx1MEMwNSBcXFwiIS5cXHUwMjYzXFxcIlxcXCIyXFx1MDI2MzNcXHUwMjY0KycgNCE2XFx1MDI2NSEhICUqXFx1MEJFRCBcXFwiIS5cXHUwMjY2XFxcIlxcXCIyXFx1MDI2NjNcXHUwMjY3KycgNCE2XFx1MDI2OCEhICUqXFx1MEJENSBcXFwiIS5cXHUwMjY5XFxcIlxcXCIyXFx1MDI2OTNcXHUwMjZBKycgNCE2XFx1MDI2QiEhICUqXFx1MEJCRCBcXFwiIS5cXHUwMjZDXFxcIlxcXCIyXFx1MDI2QzNcXHUwMjZEKycgNCE2XFx1MDI2RSEhICUqXFx1MEJBNSBcXFwiIS5cXHUwMjZGXFxcIlxcXCIyXFx1MDI2RjNcXHUwMjcwKycgNCE2XFx1MDI3MSEhICUqXFx1MEI4RCBcXFwiIS5cXHUwMjcyXFxcIlxcXCIyXFx1MDI3MjNcXHUwMjczKycgNCE2XFx1MDI3NCEhICUqXFx1MEI3NSBcXFwiIS5cXHUwMjc1XFxcIlxcXCIyXFx1MDI3NTNcXHUwMjc2KycgNCE2XFx1MDI3NyEhICUqXFx1MEI1RCBcXFwiIS5cXHUwMjc4XFxcIlxcXCIyXFx1MDI3ODNcXHUwMjc5KycgNCE2XFx1MDI3QSEhICUqXFx1MEI0NSBcXFwiIS5cXHUwMjdCXFxcIlxcXCIyXFx1MDI3QjNcXHUwMjdDKycgNCE2XFx1MDI3RCEhICUqXFx1MEIyRCBcXFwiIS5cXHUwMjdFXFxcIlxcXCIyXFx1MDI3RTNcXHUwMjdGKycgNCE2XFx1MDI4MCEhICUqXFx1MEIxNSBcXFwiIS5cXHUwMjgxXFxcIlxcXCIyXFx1MDI4MTNcXHUwMjgyKycgNCE2XFx1MDI4MyEhICUqXFx1MEFGRCBcXFwiIS5cXHUwMjg0XFxcIlxcXCIyXFx1MDI4NDNcXHUwMjg1KycgNCE2XFx1MDI4NiEhICUqXFx1MEFFNSBcXFwiIS5cXHUwMjg3XFxcIlxcXCIyXFx1MDI4NzNcXHUwMjg4KycgNCE2XFx1MDI4OSEhICUqXFx1MEFDRCBcXFwiIS5cXHUwMjhBXFxcIlxcXCIyXFx1MDI4QTNcXHUwMjhCKycgNCE2XFx1MDI4QyEhICUqXFx1MEFCNSBcXFwiIS5cXHUwMjhEXFxcIlxcXCIyXFx1MDI4RDNcXHUwMjhFKycgNCE2XFx1MDI4RiEhICUqXFx1MEE5RCBcXFwiIS5cXHUwMjkwXFxcIlxcXCIyXFx1MDI5MDNcXHUwMjkxKycgNCE2XFx1MDI5MiEhICUqXFx1MEE4NSBcXFwiIS5cXHUwMjkzXFxcIlxcXCIyXFx1MDI5MzNcXHUwMjk0KycgNCE2XFx1MDI5NSEhICUqXFx1MEE2RCBcXFwiIS5cXHUwMjk2XFxcIlxcXCIyXFx1MDI5NjNcXHUwMjk3KycgNCE2XFx1MDI5OCEhICUqXFx1MEE1NSBcXFwiIS5cXHUwMjk5XFxcIlxcXCIyXFx1MDI5OTNcXHUwMjlBKycgNCE2XFx1MDI5QiEhICUqXFx1MEEzRCBcXFwiIS5cXHUwMjlDXFxcIlxcXCIyXFx1MDI5QzNcXHUwMjlEKycgNCE2XFx1MDI5RSEhICUqXFx1MEEyNSBcXFwiIS5cXHUwMjlGXFxcIlxcXCIyXFx1MDI5RjNcXHUwMkEwKycgNCE2XFx1MDJBMSEhICUqXFx1MEEwRCBcXFwiIS5cXHUwMkEyXFxcIlxcXCIyXFx1MDJBMjNcXHUwMkEzKycgNCE2XFx1MDJBNCEhICUqXFx1MDlGNSBcXFwiIS5cXHUwMkE1XFxcIlxcXCIyXFx1MDJBNTNcXHUwMkE2KycgNCE2XFx1MDJBNyEhICUqXFx1MDlERCBcXFwiIS5cXHUwMkE4XFxcIlxcXCIyXFx1MDJBODNcXHUwMkE5KycgNCE2XFx1MDJBQSEhICUqXFx1MDlDNSBcXFwiIS5cXHUwMkFCXFxcIlxcXCIyXFx1MDJBQjNcXHUwMkFDKycgNCE2XFx1MDJBRCEhICUqXFx1MDlBRCBcXFwiIS5cXHUwMkFFXFxcIlxcXCIyXFx1MDJBRTNcXHUwMkFGKycgNCE2XFx1MDJCMCEhICUqXFx1MDk5NSBcXFwiIS5cXHUwMkIxXFxcIlxcXCIyXFx1MDJCMTNcXHUwMkIyKycgNCE2XFx1MDJCMyEhICUqXFx1MDk3RCBcXFwiIS5cXHUwMkI0XFxcIlxcXCIyXFx1MDJCNDNcXHUwMkI1KycgNCE2XFx1MDJCNiEhICUqXFx1MDk2NSBcXFwiIS5cXHUwMkI3XFxcIlxcXCIyXFx1MDJCNzNcXHUwMkI4KycgNCE2XFx1MDJCOSEhICUqXFx1MDk0RCBcXFwiIS5cXHUwMkJBXFxcIlxcXCIyXFx1MDJCQTNcXHUwMkJCKycgNCE2XFx1MDJCQyEhICUqXFx1MDkzNSBcXFwiIS5cXHUwMkJEXFxcIlxcXCIyXFx1MDJCRDNcXHUwMkJFKycgNCE2XFx1MDJCRiEhICUqXFx1MDkxRCBcXFwiIS5cXHUwMkMwXFxcIlxcXCIyXFx1MDJDMDNcXHUwMkMxKycgNCE2XFx1MDJDMiEhICUqXFx1MDkwNSBcXFwiIS5cXHUwMkMzXFxcIlxcXCIyXFx1MDJDMzNcXHUwMkM0KycgNCE2XFx1MDJDNSEhICUqXFx1MDhFRCBcXFwiIS5cXHUwMkM2XFxcIlxcXCIyXFx1MDJDNjNcXHUwMkM3KycgNCE2XFx1MDJDOCEhICUqXFx1MDhENSBcXFwiIS5cXHUwMkM5XFxcIlxcXCIyXFx1MDJDOTNcXHUwMkNBKycgNCE2XFx1MDJDQiEhICUqXFx1MDhCRCBcXFwiIS5cXHUwMkNDXFxcIlxcXCIyXFx1MDJDQzNcXHUwMkNEKycgNCE2XFx1MDJDRSEhICUqXFx1MDhBNSBcXFwiIS5cXHUwMkNGXFxcIlxcXCIyXFx1MDJDRjNcXHUwMkQwKycgNCE2XFx1MDJEMSEhICUqXFx1MDg4RCBcXFwiIS5cXHUwMkQyXFxcIlxcXCIyXFx1MDJEMjNcXHUwMkQzKycgNCE2XFx1MDJENCEhICUqXFx1MDg3NSBcXFwiIS5cXHUwMkQ1XFxcIlxcXCIyXFx1MDJENTNcXHUwMkQ2KycgNCE2XFx1MDJENyEhICUqXFx1MDg1RCBcXFwiIS5cXHUwMkQ4XFxcIlxcXCIyXFx1MDJEODNcXHUwMkQ5KycgNCE2XFx1MDJEQSEhICUqXFx1MDg0NSBcXFwiIS5cXHUwMkRCXFxcIlxcXCIyXFx1MDJEQjNcXHUwMkRDKycgNCE2XFx1MDJERCEhICUqXFx1MDgyRCBcXFwiIS5cXHUwMkRFXFxcIlxcXCIyXFx1MDJERTNcXHUwMkRGKycgNCE2XFx1MDJFMCEhICUqXFx1MDgxNSBcXFwiIS5cXHUwMkUxXFxcIlxcXCIyXFx1MDJFMTNcXHUwMkUyKycgNCE2XFx1MDJFMyEhICUqXFx1MDdGRCBcXFwiIS5cXHUwMkU0XFxcIlxcXCIyXFx1MDJFNDNcXHUwMkU1KycgNCE2XFx1MDJFNiEhICUqXFx1MDdFNSBcXFwiIS5cXHUwMkU3XFxcIlxcXCIyXFx1MDJFNzNcXHUwMkU4KycgNCE2XFx1MDJFOSEhICUqXFx1MDdDRCBcXFwiIS5cXHUwMkVBXFxcIlxcXCIyXFx1MDJFQTNcXHUwMkVCKycgNCE2XFx1MDJFQyEhICUqXFx1MDdCNSBcXFwiIS5cXHUwMkVEXFxcIlxcXCIyXFx1MDJFRDNcXHUwMkVFKycgNCE2XFx1MDJFRiEhICUqXFx1MDc5RCBcXFwiIS5cXHUwMkYwXFxcIlxcXCIyXFx1MDJGMDNcXHUwMkYxKycgNCE2XFx1MDJGMiEhICUqXFx1MDc4NSBcXFwiIS5cXHUwMkYzXFxcIlxcXCIyXFx1MDJGMzNcXHUwMkY0KycgNCE2XFx1MDJGNSEhICUqXFx1MDc2RCBcXFwiIS5cXHUwMkY2XFxcIlxcXCIyXFx1MDJGNjNcXHUwMkY3KycgNCE2XFx1MDJGOCEhICUqXFx1MDc1NSBcXFwiIS5cXHUwMkY5XFxcIlxcXCIyXFx1MDJGOTNcXHUwMkZBKycgNCE2XFx1MDJGQiEhICUqXFx1MDczRCBcXFwiIS5cXHUwMkZDXFxcIlxcXCIyXFx1MDJGQzNcXHUwMkZEKycgNCE2XFx1MDJGRSEhICUqXFx1MDcyNSBcXFwiIS5cXHUwMkZGXFxcIlxcXCIyXFx1MDJGRjNcXHUwMzAwKycgNCE2XFx1MDMwMSEhICUqXFx1MDcwRCBcXFwiIS5cXHUwMzAyXFxcIlxcXCIyXFx1MDMwMjNcXHUwMzAzKycgNCE2XFx1MDMwNCEhICUqXFx1MDZGNSBcXFwiIS5cXHUwMzA1XFxcIlxcXCIyXFx1MDMwNTNcXHUwMzA2KycgNCE2XFx1MDMwNyEhICUqXFx1MDZERCBcXFwiIS5cXHUwMzA4XFxcIlxcXCIyXFx1MDMwODNcXHUwMzA5KycgNCE2XFx1MDMwQSEhICUqXFx1MDZDNSBcXFwiIS5cXHUwMzBCXFxcIlxcXCIyXFx1MDMwQjNcXHUwMzBDKycgNCE2XFx1MDMwRCEhICUqXFx1MDZBRCBcXFwiIS5cXHUwMzBFXFxcIlxcXCIyXFx1MDMwRTNcXHUwMzBGKycgNCE2XFx1MDMxMCEhICUqXFx1MDY5NSBcXFwiIS5cXHUwMzExXFxcIlxcXCIyXFx1MDMxMTNcXHUwMzEyKycgNCE2XFx1MDMxMyEhICUqXFx1MDY3RCBcXFwiIS5cXHUwMzE0XFxcIlxcXCIyXFx1MDMxNDNcXHUwMzE1KycgNCE2XFx1MDMxNiEhICUqXFx1MDY2NSBcXFwiIS5cXHUwMzE3XFxcIlxcXCIyXFx1MDMxNzNcXHUwMzE4KycgNCE2XFx1MDMxOSEhICUqXFx1MDY0RCBcXFwiIS5cXHUwMzFBXFxcIlxcXCIyXFx1MDMxQTNcXHUwMzFCKycgNCE2XFx1MDMxQyEhICUqXFx1MDYzNSBcXFwiIS5cXHUwMzFEXFxcIlxcXCIyXFx1MDMxRDNcXHUwMzFFKycgNCE2XFx1MDMxRiEhICUqXFx1MDYxRCBcXFwiIS5cXHUwMzIwXFxcIlxcXCIyXFx1MDMyMDNcXHUwMzIxKycgNCE2XFx1MDMyMiEhICUqXFx1MDYwNSBcXFwiIS5cXHUwMzIzXFxcIlxcXCIyXFx1MDMyMzNcXHUwMzI0KycgNCE2XFx1MDMyNSEhICUqXFx1MDVFRCBcXFwiIS5cXHUwMzI2XFxcIlxcXCIyXFx1MDMyNjNcXHUwMzI3KycgNCE2XFx1MDMyOCEhICUqXFx1MDVENSBcXFwiIS5cXHUwMzI5XFxcIlxcXCIyXFx1MDMyOTNcXHUwMzJBKycgNCE2XFx1MDMyQiEhICUqXFx1MDVCRCBcXFwiIS5cXHUwMzJDXFxcIlxcXCIyXFx1MDMyQzNcXHUwMzJEKycgNCE2XFx1MDMyRSEhICUqXFx1MDVBNSBcXFwiIS5cXHUwMzJGXFxcIlxcXCIyXFx1MDMyRjNcXHUwMzMwKycgNCE2XFx1MDMzMSEhICUqXFx1MDU4RCBcXFwiIS5cXHUwMzMyXFxcIlxcXCIyXFx1MDMzMjNcXHUwMzMzKycgNCE2XFx1MDMzNCEhICUqXFx1MDU3NSBcXFwiIS5cXHUwMzM1XFxcIlxcXCIyXFx1MDMzNTNcXHUwMzM2KycgNCE2XFx1MDMzNyEhICUqXFx1MDU1RCBcXFwiIS5cXHUwMzM4XFxcIlxcXCIyXFx1MDMzODNcXHUwMzM5KycgNCE2XFx1MDMzQSEhICUqXFx1MDU0NSBcXFwiIS5cXHUwMzNCXFxcIlxcXCIyXFx1MDMzQjNcXHUwMzNDKycgNCE2XFx1MDMzRCEhICUqXFx1MDUyRCBcXFwiIS5cXHUwMzNFXFxcIlxcXCIyXFx1MDMzRTNcXHUwMzNGKycgNCE2XFx1MDM0MCEhICUqXFx1MDUxNSBcXFwiIS5cXHUwMzQxXFxcIlxcXCIyXFx1MDM0MTNcXHUwMzQyKycgNCE2XFx1MDM0MyEhICUqXFx1MDRGRCBcXFwiIS5cXHUwMzQ0XFxcIlxcXCIyXFx1MDM0NDNcXHUwMzQ1KycgNCE2XFx1MDM0NiEhICUqXFx1MDRFNSBcXFwiIS5cXHUwMzQ3XFxcIlxcXCIyXFx1MDM0NzNcXHUwMzQ4KycgNCE2XFx1MDM0OSEhICUqXFx1MDRDRCBcXFwiIS5cXHUwMzRBXFxcIlxcXCIyXFx1MDM0QTNcXHUwMzRCKycgNCE2XFx1MDM0QyEhICUqXFx1MDRCNSBcXFwiIS5cXHUwMzREXFxcIlxcXCIyXFx1MDM0RDNcXHUwMzRFKycgNCE2XFx1MDM0RiEhICUqXFx1MDQ5RCBcXFwiIS5cXHUwMzUwXFxcIlxcXCIyXFx1MDM1MDNcXHUwMzUxKycgNCE2XFx1MDM1MiEhICUqXFx1MDQ4NSBcXFwiIS5cXHUwMzUzXFxcIlxcXCIyXFx1MDM1MzNcXHUwMzU0KycgNCE2XFx1MDM1NSEhICUqXFx1MDQ2RCBcXFwiIS5cXHUwMzU2XFxcIlxcXCIyXFx1MDM1NjNcXHUwMzU3KycgNCE2XFx1MDM1OCEhICUqXFx1MDQ1NSBcXFwiIS5cXHUwMzU5XFxcIlxcXCIyXFx1MDM1OTNcXHUwMzVBKycgNCE2XFx1MDM1QiEhICUqXFx1MDQzRCBcXFwiIS5cXHUwMzVDXFxcIlxcXCIyXFx1MDM1QzNcXHUwMzVEKycgNCE2XFx1MDM1RSEhICUqXFx1MDQyNSBcXFwiIS5cXHUwMzVGXFxcIlxcXCIyXFx1MDM1RjNcXHUwMzYwKycgNCE2XFx1MDM2MSEhICUqXFx1MDQwRCBcXFwiIS5cXHUwMzYyXFxcIlxcXCIyXFx1MDM2MjNcXHUwMzYzKycgNCE2XFx1MDM2NCEhICUqXFx1MDNGNSBcXFwiIS5cXHUwMzY1XFxcIlxcXCIyXFx1MDM2NTNcXHUwMzY2KycgNCE2XFx1MDM2NyEhICUqXFx1MDNERCBcXFwiIS5cXHUwMzY4XFxcIlxcXCIyXFx1MDM2ODNcXHUwMzY5KycgNCE2XFx1MDM2QSEhICUqXFx1MDNDNSBcXFwiIS5cXHUwMzZCXFxcIlxcXCIyXFx1MDM2QjNcXHUwMzZDKycgNCE2XFx1MDM2RCEhICUqXFx1MDNBRCBcXFwiIS5cXHUwMzZFXFxcIlxcXCIyXFx1MDM2RTNcXHUwMzZGKycgNCE2XFx1MDM3MCEhICUqXFx1MDM5NSBcXFwiIS5cXHUwMzcxXFxcIlxcXCIyXFx1MDM3MTNcXHUwMzcyKycgNCE2XFx1MDM3MyEhICUqXFx1MDM3RCBcXFwiIS5cXHUwMzc0XFxcIlxcXCIyXFx1MDM3NDNcXHUwMzc1KycgNCE2XFx1MDM3NiEhICUqXFx1MDM2NSBcXFwiIS5cXHUwMzc3XFxcIlxcXCIyXFx1MDM3NzNcXHUwMzc4KycgNCE2XFx1MDM3OSEhICUqXFx1MDM0RCBcXFwiIS5cXHUwMzdBXFxcIlxcXCIyXFx1MDM3QTNcXHUwMzdCKycgNCE2XFx1MDM3QyEhICUqXFx1MDMzNSBcXFwiIS5cXHUwMzdEXFxcIlxcXCIyXFx1MDM3RDNcXHUwMzdFKycgNCE2XFx1MDM3RiEhICUqXFx1MDMxRCBcXFwiIS5cXHUwMzgwXFxcIlxcXCIyXFx1MDM4MDNcXHUwMzgxKycgNCE2XFx1MDM4MiEhICUqXFx1MDMwNSBcXFwiIS5cXHUwMzgzXFxcIlxcXCIyXFx1MDM4MzNcXHUwMzg0KycgNCE2XFx1MDM4NSEhICUqXFx1MDJFRCBcXFwiIS5cXHUwMzg2XFxcIlxcXCIyXFx1MDM4NjNcXHUwMzg3KycgNCE2XFx1MDM4OCEhICUqXFx1MDJENSBcXFwiIS5cXHUwMzg5XFxcIlxcXCIyXFx1MDM4OTNcXHUwMzhBKycgNCE2XFx1MDM4QiEhICUqXFx1MDJCRCBcXFwiIS5cXHUwMzhDXFxcIlxcXCIyXFx1MDM4QzNcXHUwMzhEKycgNCE2XFx1MDM4RSEhICUqXFx1MDJBNSBcXFwiIS5cXHUwMzhGXFxcIlxcXCIyXFx1MDM4RjNcXHUwMzkwKycgNCE2XFx1MDM5MSEhICUqXFx1MDI4RCBcXFwiIS5cXHUwMzkyXFxcIlxcXCIyXFx1MDM5MjNcXHUwMzkzKycgNCE2XFx1MDM5NCEhICUqXFx1MDI3NSBcXFwiIS5cXHUwMzk1XFxcIlxcXCIyXFx1MDM5NTNcXHUwMzk2KycgNCE2XFx1MDM5NyEhICUqXFx1MDI1RCBcXFwiIS5cXHUwMzk4XFxcIlxcXCIyXFx1MDM5ODNcXHUwMzk5KycgNCE2XFx1MDM5QSEhICUqXFx1MDI0NSBcXFwiIS5cXHUwMzlCXFxcIlxcXCIyXFx1MDM5QjNcXHUwMzlDKycgNCE2XFx1MDM5RCEhICUqXFx1MDIyRCBcXFwiIS5cXHUwMzlFXFxcIlxcXCIyXFx1MDM5RTNcXHUwMzlGKycgNCE2XFx1MDNBMCEhICUqXFx1MDIxNSBcXFwiIS5cXHUwM0ExXFxcIlxcXCIyXFx1MDNBMTNcXHUwM0EyKycgNCE2XFx1MDNBMyEhICUqXFx1MDFGRCBcXFwiIS5cXHUwM0E0XFxcIlxcXCIyXFx1MDNBNDNcXHUwM0E1KycgNCE2XFx1MDNBNiEhICUqXFx1MDFFNSBcXFwiIS5cXHUwM0E3XFxcIlxcXCIyXFx1MDNBNzNcXHUwM0E4KycgNCE2XFx1MDNBOSEhICUqXFx1MDFDRCBcXFwiIS5cXHUwM0FBXFxcIlxcXCIyXFx1MDNBQTNcXHUwM0FCKycgNCE2XFx1MDNBQyEhICUqXFx1MDFCNSBcXFwiIS5cXHUwM0FEXFxcIlxcXCIyXFx1MDNBRDNcXHUwM0FFKycgNCE2XFx1MDNBRiEhICUqXFx1MDE5RCBcXFwiIS5cXHUwM0IwXFxcIlxcXCIyXFx1MDNCMDNcXHUwM0IxKycgNCE2XFx1MDNCMiEhICUqXFx1MDE4NSBcXFwiIS5cXHUwM0IzXFxcIlxcXCIyXFx1MDNCMzNcXHUwM0I0KycgNCE2XFx1MDNCNSEhICUqXFx1MDE2RCBcXFwiIS5cXHUwM0I2XFxcIlxcXCIyXFx1MDNCNjNcXHUwM0I3KycgNCE2XFx1MDNCOCEhICUqXFx1MDE1NSBcXFwiIS5cXHUwM0I5XFxcIlxcXCIyXFx1MDNCOTNcXHUwM0JBKycgNCE2XFx1MDNCQiEhICUqXFx1MDEzRCBcXFwiIS5cXHUwM0JDXFxcIlxcXCIyXFx1MDNCQzNcXHUwM0JEKycgNCE2XFx1MDNCRSEhICUqXFx1MDEyNSBcXFwiIS5cXHUwM0JGXFxcIlxcXCIyXFx1MDNCRjNcXHUwM0MwKycgNCE2XFx1MDNDMSEhICUqXFx1MDEwRCBcXFwiIS5cXHUwM0MyXFxcIlxcXCIyXFx1MDNDMjNcXHUwM0MzKycgNCE2XFx1MDNDNCEhICUqXFx4RjUgXFxcIiEuXFx1MDNDNVxcXCJcXFwiMlxcdTAzQzUzXFx1MDNDNisnIDQhNlxcdTAzQzchISAlKlxceEREIFxcXCIhLlxcdTAzQzhcXFwiXFxcIjJcXHUwM0M4M1xcdTAzQzkrJyA0ITZcXHUwM0NBISEgJSpcXHhDNSBcXFwiIS5cXHUwM0NCXFxcIlxcXCIyXFx1MDNDQjNcXHUwM0NDKycgNCE2XFx1MDNDRCEhICUqXFx4QUQgXFxcIiEuXFx1MDNDRVxcXCJcXFwiMlxcdTAzQ0UzXFx1MDNDRisnIDQhNlxcdTAzRDAhISAlKlxceDk1IFxcXCIhLlxcdTAzRDFcXFwiXFxcIjJcXHUwM0QxM1xcdTAzRDIrJyA0ITZcXHUwM0QzISEgJSp9IFxcXCIhLlxcdTAzRDRcXFwiXFxcIjJcXHUwM0Q0M1xcdTAzRDUrJyA0ITZcXHUwM0Q2ISEgJSplIFxcXCIhLlxcdTAzRDdcXFwiXFxcIjJcXHUwM0Q3M1xcdTAzRDgrJyA0ITZcXHUwM0Q5ISEgJSpNIFxcXCIhLlxcdTAzREFcXFwiXFxcIjJcXHUwM0RBM1xcdTAzREIrJyA0ITZcXHUwM0RDISEgJSo1IFxcXCIhLlxcdTAzRERcXFwiXFxcIjJcXHUwM0REM1xcdTAzREUrJyA0ITZcXHUwM0RGISEgJVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiLlxcdTAzRTBcXFwiXFxcIjJcXHUwM0UwM1xcdTAzRTEqXFx1MDEzMSBcXFwiLlxcdTAzRTJcXFwiXFxcIjJcXHUwM0UyM1xcdTAzRTMqXFx1MDEyNSBcXFwiLlxcdTAzRTRcXFwiXFxcIjJcXHUwM0U0M1xcdTAzRTUqXFx1MDExOSBcXFwiLlxcdTAzOTJcXFwiXFxcIjJcXHUwMzkyM1xcdTAzOTMqXFx1MDEwRCBcXFwiLlxcdTAzOUVcXFwiXFxcIjJcXHUwMzlFM1xcdTAzOUYqXFx1MDEwMSBcXFwiLlxcdTAzOTVcXFwiXFxcIjJcXHUwMzk1M1xcdTAzOTYqXFx4RjUgXFxcIi5cXHUwM0U2XFxcIlxcXCIyXFx1MDNFNjNcXHUwM0U3KlxceEU5IFxcXCIuXFx1MDNFOFxcXCJcXFwiMlxcdTAzRTgzXFx1MDNFOSpcXHhERCBcXFwiLlxcdTAzRDFcXFwiXFxcIjJcXHUwM0QxM1xcdTAzRDIqXFx4RDEgXFxcIi5cXHUwM0VBXFxcIlxcXCIyXFx1MDNFQTNcXHUwM0VCKlxceEM1IFxcXCIuXFx1MDNENFxcXCJcXFwiMlxcdTAzRDQzXFx1MDNENSpcXHhCOSBcXFwiLlxcdTAzRUNcXFwiXFxcIjJcXHUwM0VDM1xcdTAzRUQqXFx4QUQgXFxcIi5cXHUwM0FBXFxcIlxcXCIyXFx1MDNBQTNcXHUwM0FCKlxceEExIFxcXCIuXFx1MDM4RlxcXCJcXFwiMlxcdTAzOEYzXFx1MDM5MCpcXHg5NSBcXFwiLlxcdTAzRUVcXFwiXFxcIjJcXHUwM0VFM1xcdTAzRUYqXFx4ODkgXFxcIi5cXHUwM0YwXFxcIlxcXCIyXFx1MDNGMDNcXHUwM0YxKn0gXFxcIi5cXHUwM0YyXFxcIlxcXCIyXFx1MDNGMjNcXHUwM0YzKnEgXFxcIi5cXHUwM0RBXFxcIlxcXCIyXFx1MDNEQTNcXHUwM0RCKmUgXFxcIi5cXHUwM0Y0XFxcIlxcXCIyXFx1MDNGNDNcXHUwM0Y1KlkgXFxcIi5cXHUwM0Y2XFxcIlxcXCIyXFx1MDNGNjNcXHUwM0Y3Kk0gXFxcIi5cXHUwM0Y4XFxcIlxcXCIyXFx1MDNGODNcXHUwM0Y5KkEgXFxcIi5cXHUwM0ZBXFxcIlxcXCIyXFx1MDNGQTNcXHUwM0ZCKjUgXFxcIi5cXHUwM0ZDXFxcIlxcXCIyXFx1MDNGQzNcXHUwM0ZEKikgXFxcIi5cXHUwM0ZFXFxcIlxcXCIyXFx1MDNGRTNcXHUwM0ZGXCIpXG4gICAgICAgIF0sXG5cbiAgICAgICAgcGVnJGN1cnJQb3MgICAgICAgICAgPSAwLFxuICAgICAgICBwZWckcmVwb3J0ZWRQb3MgICAgICA9IDAsXG4gICAgICAgIHBlZyRjYWNoZWRQb3MgICAgICAgID0gMCxcbiAgICAgICAgcGVnJGNhY2hlZFBvc0RldGFpbHMgPSB7IGxpbmU6IDEsIGNvbHVtbjogMSwgc2VlbkNSOiBmYWxzZSB9LFxuICAgICAgICBwZWckbWF4RmFpbFBvcyAgICAgICA9IDAsXG4gICAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQgID0gW10sXG4gICAgICAgIHBlZyRzaWxlbnRGYWlscyAgICAgID0gMCxcblxuICAgICAgICBwZWckcmVzdWx0O1xuXG4gICAgaWYgKFwic3RhcnRSdWxlXCIgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKCEob3B0aW9ucy5zdGFydFJ1bGUgaW4gcGVnJHN0YXJ0UnVsZUluZGljZXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHN0YXJ0IHBhcnNpbmcgZnJvbSBydWxlIFxcXCJcIiArIG9wdGlvbnMuc3RhcnRSdWxlICsgXCJcXFwiLlwiKTtcbiAgICAgIH1cblxuICAgICAgcGVnJHN0YXJ0UnVsZUluZGV4ID0gcGVnJHN0YXJ0UnVsZUluZGljZXNbb3B0aW9ucy5zdGFydFJ1bGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgICByZXR1cm4gaW5wdXQuc3Vic3RyaW5nKHBlZyRyZXBvcnRlZFBvcywgcGVnJGN1cnJQb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICAgIHJldHVybiBwZWckcmVwb3J0ZWRQb3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZSgpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5saW5lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbHVtbigpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5jb2x1bW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwZWN0ZWQoZGVzY3JpcHRpb24pIHtcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW3sgdHlwZTogXCJvdGhlclwiLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfV0sXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24obWVzc2FnZSwgbnVsbCwgcGVnJHJlcG9ydGVkUG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckY29tcHV0ZVBvc0RldGFpbHMocG9zKSB7XG4gICAgICBmdW5jdGlvbiBhZHZhbmNlKGRldGFpbHMsIHN0YXJ0UG9zLCBlbmRQb3MpIHtcbiAgICAgICAgdmFyIHAsIGNoO1xuXG4gICAgICAgIGZvciAocCA9IHN0YXJ0UG9zOyBwIDwgZW5kUG9zOyBwKyspIHtcbiAgICAgICAgICBjaCA9IGlucHV0LmNoYXJBdChwKTtcbiAgICAgICAgICBpZiAoY2ggPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGlmICghZGV0YWlscy5zZWVuQ1IpIHsgZGV0YWlscy5saW5lKys7IH1cbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gXCJcXHJcIiB8fCBjaCA9PT0gXCJcXHUyMDI4XCIgfHwgY2ggPT09IFwiXFx1MjAyOVwiKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmxpbmUrKztcbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4rKztcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwZWckY2FjaGVkUG9zICE9PSBwb3MpIHtcbiAgICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgPiBwb3MpIHtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zID0gMDtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgYWR2YW5jZShwZWckY2FjaGVkUG9zRGV0YWlscywgcGVnJGNhY2hlZFBvcywgcG9zKTtcbiAgICAgICAgcGVnJGNhY2hlZFBvcyA9IHBvcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBlZyRjYWNoZWRQb3NEZXRhaWxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRmYWlsKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJGN1cnJQb3MgPCBwZWckbWF4RmFpbFBvcykgeyByZXR1cm47IH1cblxuICAgICAgaWYgKHBlZyRjdXJyUG9zID4gcGVnJG1heEZhaWxQb3MpIHtcbiAgICAgICAgcGVnJG1heEZhaWxQb3MgPSBwZWckY3VyclBvcztcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwZWckbWF4RmFpbEV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBleHBlY3RlZCwgcG9zKSB7XG4gICAgICBmdW5jdGlvbiBjbGVhbnVwRXhwZWN0ZWQoZXhwZWN0ZWQpIHtcbiAgICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICAgIGV4cGVjdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIGlmIChhLmRlc2NyaXB0aW9uIDwgYi5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYS5kZXNjcmlwdGlvbiA+IGIuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdoaWxlIChpIDwgZXhwZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGV4cGVjdGVkW2kgLSAxXSA9PT0gZXhwZWN0ZWRbaV0pIHtcbiAgICAgICAgICAgIGV4cGVjdGVkLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSB7XG4gICAgICAgIGZ1bmN0aW9uIHN0cmluZ0VzY2FwZShzKSB7XG4gICAgICAgICAgZnVuY3Rpb24gaGV4KGNoKSB7IHJldHVybiBjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpOyB9XG5cbiAgICAgICAgICByZXR1cm4gc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwvZywgICAnXFxcXFxcXFwnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICAgICdcXFxcXCInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA4L2csICdcXFxcYicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx0L2csICAgJ1xcXFx0JylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgICAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcZi9nLCAgICdcXFxcZicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxyL2csICAgJ1xcXFxyJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4MDAtXFx4MDdcXHgwQlxceDBFXFx4MEZdL2csIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgwJyArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4ODAtXFx4RkZdL2csICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgnICArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAxODAtXFx1MEZGRl0vZywgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx1MCcgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUxMDgwLVxcdUZGRkZdL2csICAgICAgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxcdScgICsgaGV4KGNoKTsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwZWN0ZWREZXNjcyA9IG5ldyBBcnJheShleHBlY3RlZC5sZW5ndGgpLFxuICAgICAgICAgICAgZXhwZWN0ZWREZXNjLCBmb3VuZERlc2MsIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV4cGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXhwZWN0ZWREZXNjc1tpXSA9IGV4cGVjdGVkW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhwZWN0ZWREZXNjID0gZXhwZWN0ZWQubGVuZ3RoID4gMVxuICAgICAgICAgID8gZXhwZWN0ZWREZXNjcy5zbGljZSgwLCAtMSkuam9pbihcIiwgXCIpXG4gICAgICAgICAgICAgICsgXCIgb3IgXCJcbiAgICAgICAgICAgICAgKyBleHBlY3RlZERlc2NzW2V4cGVjdGVkLmxlbmd0aCAtIDFdXG4gICAgICAgICAgOiBleHBlY3RlZERlc2NzWzBdO1xuXG4gICAgICAgIGZvdW5kRGVzYyA9IGZvdW5kID8gXCJcXFwiXCIgKyBzdHJpbmdFc2NhcGUoZm91bmQpICsgXCJcXFwiXCIgOiBcImVuZCBvZiBpbnB1dFwiO1xuXG4gICAgICAgIHJldHVybiBcIkV4cGVjdGVkIFwiICsgZXhwZWN0ZWREZXNjICsgXCIgYnV0IFwiICsgZm91bmREZXNjICsgXCIgZm91bmQuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3NEZXRhaWxzID0gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcyksXG4gICAgICAgICAgZm91bmQgICAgICA9IHBvcyA8IGlucHV0Lmxlbmd0aCA/IGlucHV0LmNoYXJBdChwb3MpIDogbnVsbDtcblxuICAgICAgaWYgKGV4cGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgIG1lc3NhZ2UgIT09IG51bGwgPyBtZXNzYWdlIDogYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCksXG4gICAgICAgIGV4cGVjdGVkLFxuICAgICAgICBmb3VuZCxcbiAgICAgICAgcG9zLFxuICAgICAgICBwb3NEZXRhaWxzLmxpbmUsXG4gICAgICAgIHBvc0RldGFpbHMuY29sdW1uXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRkZWNvZGUocykge1xuICAgICAgdmFyIGJjID0gbmV3IEFycmF5KHMubGVuZ3RoKSwgaTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmNbaV0gPSBzLmNoYXJDb2RlQXQoaSkgLSAzMjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJjO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZVJ1bGUoaW5kZXgpIHtcbiAgICAgIHZhciBiYyAgICA9IHBlZyRieXRlY29kZVtpbmRleF0sXG4gICAgICAgICAgaXAgICAgPSAwLFxuICAgICAgICAgIGlwcyAgID0gW10sXG4gICAgICAgICAgZW5kICAgPSBiYy5sZW5ndGgsXG4gICAgICAgICAgZW5kcyAgPSBbXSxcbiAgICAgICAgICBzdGFjayA9IFtdLFxuICAgICAgICAgIHBhcmFtcywgaTtcblxuICAgICAgZnVuY3Rpb24gcHJvdGVjdChvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkob2JqZWN0KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiID8gW10gOiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHdoaWxlIChpcCA8IGVuZCkge1xuICAgICAgICAgIHN3aXRjaCAoYmNbaXBdKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocHJvdGVjdChwZWckY29uc3RzW2JjW2lwICsgMV1dKSk7XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocGVnJGN1cnJQb3MpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgc3RhY2subGVuZ3RoIC09IGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIHN0YWNrLnNwbGljZSgtMiwgMSk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDJdLnB1c2goc3RhY2sucG9wKCkpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0YWNrLnNwbGljZShzdGFjay5sZW5ndGggLSBiY1tpcCArIDFdLCBiY1tpcCArIDFdKSk7XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKGlucHV0LnN1YnN0cmluZyhzdGFja1tzdGFjay5sZW5ndGggLSAxXSwgcGVnJGN1cnJQb3MpKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdKTtcblxuICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICAgIGlwICs9IDM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgICAgaXBzLnB1c2goaXApO1xuXG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAyICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlwICs9IDIgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IHBlZyRjdXJyUG9zKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgcGVnJGNvbnN0c1tiY1tpcCArIDFdXS5sZW5ndGgpID09PSBwZWckY29uc3RzW2JjW2lwICsgMV1dKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgcGVnJGNvbnN0c1tiY1tpcCArIDFdXS5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM107XG4gICAgICAgICAgICAgICAgaXAgKz0gNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZCk7XG4gICAgICAgICAgICAgIGlwcy5wdXNoKGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdKTtcblxuICAgICAgICAgICAgICBpZiAocGVnJGNvbnN0c1tiY1tpcCArIDFdXS50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCBiY1tpcCArIDFdKSk7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IGJjW2lwICsgMV07XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHBlZyRjb25zdHNbYmNbaXAgKyAxXV0pO1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyArPSBwZWckY29uc3RzW2JjW2lwICsgMV1dLmxlbmd0aDtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocGVnJEZBSUxFRCk7XG4gICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZWckZmFpbChwZWckY29uc3RzW2JjW2lwICsgMV1dKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMSAtIGJjW2lwICsgMV1dO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICBwYXJhbXMgPSBiYy5zbGljZShpcCArIDQsIGlwICsgNCArIGJjW2lwICsgM10pO1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYmNbaXAgKyAzXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2ldID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMSAtIHBhcmFtc1tpXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdGFjay5zcGxpY2UoXG4gICAgICAgICAgICAgICAgc3RhY2subGVuZ3RoIC0gYmNbaXAgKyAyXSxcbiAgICAgICAgICAgICAgICBiY1tpcCArIDJdLFxuICAgICAgICAgICAgICAgIHBlZyRjb25zdHNbYmNbaXAgKyAxXV0uYXBwbHkobnVsbCwgcGFyYW1zKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlwICs9IDQgKyBiY1tpcCArIDNdO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwZWckcGFyc2VSdWxlKGJjW2lwICsgMV0pKTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgIHBlZyRzaWxlbnRGYWlscysrO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgICAgcGVnJHNpbGVudEZhaWxzLS07XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wY29kZTogXCIgKyBiY1tpcF0gKyBcIi5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVuZCA9IGVuZHMucG9wKCk7XG4gICAgICAgICAgaXAgPSBpcHMucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YWNrWzBdO1xuICAgIH1cblxuXG4gICAgICBoZWxwZXJzID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcnMnKTtcbiAgICAgIHByZWZpeGVzID0gcmVxdWlyZSgnLi9wcmVmaXhlcy5qc29uJyk7XG4gICAgICBtZXRyaWNzID0gcmVxdWlyZSgnLi9tZXRyaWNzLmpzb24nKTtcbiAgICAgIG11bHRpcGx5ID0gaGVscGVycy5tdWx0aXBseTtcbiAgICAgIHRvcG93ZXIgPSBoZWxwZXJzLnRvcG93ZXI7XG4gICAgICBjbGVhbnVwID0gaGVscGVycy5jbGVhbnVwO1xuICAgICAgaXNtZXRyaWMgPSBoZWxwZXJzLmlzbWV0cmljKG1ldHJpY3MpO1xuXG5cbiAgICBwZWckcmVzdWx0ID0gcGVnJHBhcnNlUnVsZShwZWckc3RhcnRSdWxlSW5kZXgpO1xuXG4gICAgaWYgKHBlZyRyZXN1bHQgIT09IHBlZyRGQUlMRUQgJiYgcGVnJGN1cnJQb3MgPT09IGlucHV0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHBlZyRyZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIHBlZyRmYWlsKHsgdHlwZTogXCJlbmRcIiwgZGVzY3JpcHRpb246IFwiZW5kIG9mIGlucHV0XCIgfSk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihudWxsLCBwZWckbWF4RmFpbEV4cGVjdGVkLCBwZWckbWF4RmFpbFBvcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBTeW50YXhFcnJvcjogU3ludGF4RXJyb3IsXG4gICAgcGFyc2U6ICAgICAgIHBhcnNlXG4gIH07XG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgbXVsdGlwbHk6IGZ1bmN0aW9uIG11bHRpcGx5KHQsIG1zKSB7XG4gICAgaWYgKG1zLmxlbmd0aCA9PSAwKSByZXR1cm4gdDtcblxuICAgIHZhciByZXQgPSB0O1xuICAgIG1zLmZvckVhY2goZnVuY3Rpb24obXRlcm0pe1xuXG4gICAgICB2YXIgc2lnbiA9IChtdGVybVswXSA9PSBcIi5cIiA/IDEgOiAtMSk7XG4gICAgICB2YXIgYiA9IG10ZXJtWzFdO1xuXG4gICAgICByZXQudmFsdWUgKj0gTWF0aC5wb3coYi52YWx1ZSwgc2lnbik7XG4gICAgICBPYmplY3Qua2V5cyhiLnVuaXRzKS5mb3JFYWNoKGZ1bmN0aW9uKHUpe1xuICAgICAgICByZXQudW5pdHNbdV0gPSByZXQudW5pdHNbdV0gfHwgMDtcbiAgICAgICAgcmV0LnVuaXRzW3VdID0gcmV0LnVuaXRzW3VdICsgc2lnbipiLnVuaXRzW3VdO1xuICAgICAgICBpZiAocmV0LnVuaXRzW3VdID09IDApe1xuICAgICAgICAgIGRlbGV0ZSByZXQudW5pdHNbdV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICB0b3Bvd2VyOiBmdW5jdGlvbiB0b3Bvd2VyKGUsIGV4cCl7XG4gICAgaWYgKCFleHApIHtleHAgPSAxO31cbiAgICB2YXIgcmV0ID0gZTtcbiAgICByZXQudmFsdWUgPSBNYXRoLnBvdyhyZXQudmFsdWUsIGV4cCk7XG4gICAgT2JqZWN0LmtleXMoZS51bml0cykuZm9yRWFjaChmdW5jdGlvbih1KXtcbiAgICAgIHJldC51bml0c1t1XSA9IGUudW5pdHNbdV0gKiBleHA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIGNsZWFudXA6IGZ1bmN0aW9uIGNsZWFudXAoZSkge1xuICAgIFtcIjEwXlwiLCBcIjEwKlwiXS5mb3JFYWNoKGZ1bmN0aW9uKGspe1xuICAgICAgaWYgKGUudW5pdHNba10pIHtcbiAgICAgICAgZS52YWx1ZSAqPSBNYXRoLnBvdygxMCwgZS51bml0c1trXSk7XG4gICAgICAgIGRlbGV0ZSBlLnVuaXRzW2tdO1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGU7XG4gIH0sXG5cbiAgaXNtZXRyaWM6IGZ1bmN0aW9uKG1ldHJpY3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odSkge1xuICAgICAgcmV0dXJuIG1ldHJpY3NbT2JqZWN0LmtleXModS51bml0cylbMF1dICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfVxufVxuIiwicGFyc2VyID0gcmVxdWlyZSgnLi9nZW5lcmF0ZWQvdWN1bS1wYXJzZXIuanMnKTtcbmVxdWl2YWxlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmF0ZWQvZXF1aXZhbGVudHMuanNvbicpO1xuaGVscGVycyA9IHJlcXVpcmUoJy4vbGliL2hlbHBlcnMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhcnNlOiBwYXJzZSxcbiAgY2Fub25pY2FsaXplOiBjYW5vbmljYWxpemUsXG4gIGNvbnZlcnQ6IGNvbnZlcnRcbn07XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlLCB1bml0cyl7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgfHwgdW5pdHMgPT09IHVuZGVmaW5lZCl7XG4gICAgdW5pdHMgPSB2YWx1ZTtcbiAgICB2YWx1ZSA9IDFcbiAgfVxuXG4gIGlmICh1bml0cy5tYXRjaCgvXlxcLy8pKXtcbiAgICB1bml0cyA9ICcxJyt1bml0cztcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJycpIHVuaXRzID0gJzEnO1xuXG4gIHZhciByZXQgPSBwYXJzZXIucGFyc2UodW5pdHMpO1xuICByZXQudmFsdWUgKj0gdmFsdWU7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG5vbkJhc2VVbml0KHUpe1xuICByZXR1cm4gZXF1aXZhbGVudHNbdV0gIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gcmVtYWluaW5nTm9uQmFzZVVuaXRzKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZS51bml0cykuZmlsdGVyKG5vbkJhc2VVbml0KVxufVxuXG5mdW5jdGlvbiBjYW5vbmljYWxpemUodmFsdWUsIHVuaXRzKXtcblxuICB2YWx1ZSA9IHBhcnNlKHZhbHVlLCB1bml0cyk7XG5cbiAgdmFyIHJlbWFpbmluZyA9IHJlbWFpbmluZ05vbkJhc2VVbml0cyh2YWx1ZSk7XG5cbiAgd2hpbGUgKHJlbWFpbmluZy5sZW5ndGgpIHtcbiAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbWFpbmluZy5mb3JFYWNoKGZ1bmN0aW9uKHUpe1xuICAgICAgdmFyIHN1YiA9IHBhcnNlKGVxdWl2YWxlbnRzW3VdLnVjdW0pO1xuICAgICAgc3ViLnZhbHVlICo9IGVxdWl2YWxlbnRzW3VdLnZhbHVlO1xuICAgICAgc3ViID0gaGVscGVycy50b3Bvd2VyKHN1YiwgdmFsdWUudW5pdHNbdV0pO1xuICAgICAgdmFsdWUgPSBoZWxwZXJzLm11bHRpcGx5KHZhbHVlLCBbWycuJywgc3ViXV0pO1xuICAgICAgZGVsZXRlIHZhbHVlLnVuaXRzW3VdO1xuICAgIH0pO1xuXG4gICAgcmVtYWluaW5nID0gcmVtYWluaW5nTm9uQmFzZVVuaXRzKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY29uZm9ybWFudChhLCBiKXtcbiAgdmFyIHJldCA9IHRydWU7XG4gIE9iamVjdC5rZXlzKGEudW5pdHMpXG4gIC5jb25jYXQoT2JqZWN0LmtleXMoYi51bml0cykpXG4gIC5mb3JFYWNoKGZ1bmN0aW9uKGspe1xuICAgIGlmIChhLnVuaXRzW2tdICE9PSBiLnVuaXRzW2tdKSB7XG4gICAgICByZXQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gY29udmVydChmcm9tVmFsdWUsIGZyb21Vbml0cywgdG9Vbml0cyl7XG4gZnJvbWMgPSBjYW5vbmljYWxpemUoZnJvbVZhbHVlLCBmcm9tVW5pdHMpO1xuIHRvYyA9IGNhbm9uaWNhbGl6ZSh0b1VuaXRzKTtcblxuIGlmICghY29uZm9ybWFudChmcm9tYywgdG9jKSl7XG4gICB0aHJvdyBcIk5vbi1jb25mb3JtYW50IHVuaXRzOyBjYW4ndCBjb252ZXJ0IGZyb20gXCIgKyBmcm9tVW5pdHMgKyBcIiB0byBcIiArIHRvVW5pdHMgO1xuIH1cblxuIHJldHVybiBmcm9tYy52YWx1ZSAvIHRvYy52YWx1ZTtcblxufVxuIl19
