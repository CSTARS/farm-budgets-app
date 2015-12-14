(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FB = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/changes/index.js":[function(require,module,exports){
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
    if( !budget.operations ) {
      budget.operations = [];
    }

    for( var i = 0; i < budget.operations.length; i++ ) {
      if( !budget.operations[i].materials ) {
        budget.operations[i].materials = {};
      }
    }

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

      //if( path.length > 0 ) {
        list.push(new RegExp('^'+path+comma+key+'$'));
        prepSchema(path+comma+key+',.*', schema[key][0], list);
      //} else {
      //  prepSchema(key, schema[key][0], list);
      //}


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

},{"../save/schema":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/save/schema.js","deep-diff":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/deep-diff/index.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/extend/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js":[function(require,module,exports){
'use strict';

/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);
//materialController.init(operationController);

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

},{"./changes":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/changes/index.js","./materialController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js","./operationController":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/index.js","./save":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/save/index.js","./transform":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/transform/index.js","./units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/utils/index.js","ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/materialController/index.js":[function(require,module,exports){
'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/

 var events = require('events').EventEmitter;
 var units = require('../units');
 events = new events();
 events.setMaxListeners(1000);

var debug = false;
var data = {};

function reset() {
  data = {};
  events.removeAllListeners();
}

function remove(name, options) {
  if( !options ) {
    options = {};
  }

  if( data[name] ) {
    delete data[name];

    var e = {
      material : name,
      success : true
    };

    if( !options.noRecalc ) {
      recalc();
    }

    events.emit('material-removed', e);
    return e;
  }

  return setError(name, 'material '+name+' does not exist', 1);
}

function add(material, options) {
  if( !options ) {
    options = {};
  }

  if( data[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists', 2);
  }

  var isNew = false;
  if( !data[material.name] ) {
    isNew = true;
  }

  if( !material.type ) {
    if( material.materials ) {
      material.type = 'complex';
    } else {
      material.type = 'simple';
    }
  }

  data[material.name] = material;

  if( options.rename ) {
    remove(options.rename, {noRecalc: true});
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

  if( data[name] ) {
    return data[name];
  }

  return setError(name, name+' is not in the material list', 3);
}

function asArray() {
  var arr = [], key;
  for( key in data ) {
    arr.push(data[key]);
  }
  return arr;
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( key in data ) {
    if( key.match(re) && key !== ignore ) {
      results.push(data[key]);
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

  var material, m;

  for( material in data ) {
    if( data[material].type !== 'complex' ) {
      continue;
    }

    data[material].price = null;
  }

  for( material in data ) {
    m = data[material];
    if( m.type !== 'complex' ) {
      continue;
    }

    if( m.price !== null ) {
        continue;
    }

    var resp = _recalc(m, [m.name]);
    m.price = resp.price;
    m.recalcErrors = resp.errors;
  }

  if( debug ) {
    console.log('Complex Material Recalc: '+(new Date().getTime() - t)+'ms');
  }
}

function _recalc(material, materialChain){
  var price = 0;
  var errors = [];

  for( var key in material.materials ) {
    var m;

    // check the unique list
    if( material.unique && material.unique[key] ) {
      m = {
        name : key,
        price : material.unique[key].price,
        units : material.unique[key].units
      };
    } else { // otherwise use this module to get a material
      m = get(key);
    }

    // if error finding material, set error on material reference and continue;
    if( m.error ) {
      setMaterialDefError(material.materials[key], m.message, errors);
      continue;
    }

    if( m.price === null && m.type === 'complex' ) {
      // make sure no recursion
      if( materialChain.indexOf(m.name) === -1 ) {
        var resp = _recalc(m, extendChain(materialChain, m.name));
        m.price = resp.price;
        m.recalcErrors = resp.errors;

        // This isn't working!?
        // errors.contact(resp.errors);
        if( resp.errors.length > 0 ) {
          setMaterialDefError(material.materials[key], m.name+' has errors', []);
          for( var i = 0; i < resp.errors.length; i++ ) {
            errors.push(resp.errors[i]);
          }
          continue;
        }

      } else {
        // BADNESS
        setMaterialDefError(material.materials[key], 'Recusive materials found, ignoring', errors);
        continue;
      }
    }

    // now actually calculate value
    var value = units.calculateComplexPrice(m, material.materials[m.name], material);

    if( value.error ) {
      setMaterialDefError(material.materials[m.name], value.message, errors);
    } else {
      material.materials[key].error = null;
      material.materials[key].message = null;
      material.materials[m.name].price = value.value;
    }

    price += material.materials[m.name].price;
  }

  return {
    price: price,
    errors : errors
  };
}

function setMaterialDefError(materialDef, msg, errors) {
  materialDef.price = 0;
  materialDef.error = true;
  materialDef.message = msg;
  errors.push(msg);
}

function extendChain(chain, m) {
  var newChain = chain.slice();
  newChain.push(m);
  return newChain;
}

function materialRecalc(material) {
  if( typeof material !== 'object' ) {
    return;
  } else if( material.type !== 'complex' ) {
    return;
  }

  var resp = _recalc(material);
  material.price = resp.price;
  material.recalcErrors = resp.errors;
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
  // add a material
  debug : function(d){
    debug = d;
  },
  add : add,
  get : get,
  asArray : asArray,
  remove : remove,
  find : find,
  getErrors : getErrors,
  on : function(event, listener){
    events.on(event, listener);
  },
  removeListener : function(event, listener){
    events.removeListener(event, listener);
  },
  // mostly for unit testing
  getEventsModule : function() {
    return events;
  },
  recalc : recalc,
  materialRecalc : materialRecalc,
  contains : contains,
  reset : reset
};

},{"../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/index.js":[function(require,module,exports){
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

var debug = false;
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
  events.removeAllListeners();
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
    success : true,
    from : 'operation-add'
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

  if( debug ) {
    console.log('Operation Recalc: '+(new Date().getTime() - t)+'ms');
  }

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
          operation: operation,
          from : 'material-update'
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
  // TODO: this should not be the controllers reponsibility
  /*setTimeout(function(){
    if( e ) {
      events.emit(e,details);
    }
    events.emit('update');
  }, 100);*/
  if( e ) {
    events.emit(e,details);
  }
  events.emit('update');
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
  fireUpdate : fireUpdate,
  // mostly for unit testing
  getEventsModule : function() {
    return events;
  },
  debug : function(mode) {
    debug = mode;
  }
};

},{"../units":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js","./utils":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/utils.js","events":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js","node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/operationController/utils.js":[function(require,module,exports){
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

},{"node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/save/index.js":[function(require,module,exports){
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

},{"./schema":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/save/schema.js","./strip":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/save/strip.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/extend/index.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/save/schema.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/save/strip.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/transform/index.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/cleanDollars.js":[function(require,module,exports){
'use strict';

module.exports = function(units) {
  if( units === undefined ) {
    return '1';
  }
  return units.replace(/(us)?\$/g, '1');
};

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/definitions.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/index.js":[function(require,module,exports){
'use strict';

var definitions = require('./definitions');
var ucum = require('ucum.js');
var extend = require('extend');
var cleanDollars = require('./cleanDollars');

// cache for standard ucum calculations
// these can happen a lot a really slowdown the ur;
var ucumCache = {};
var convertCache = {};
// unit lookup hash
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
  units = cleanDollars(units);

  units = units.split('/');
  units = '('+units.join(')/(')+')';

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

// convert units for complex materials
function calculateComplexPrice(materialDef, materialImpl) {
  var value, diff;

  var mUnits = cleanDollars(materialDef.units.trim());
  mUnits = mUnits.replace(/^1\//g, '');
  var iUnits = cleanDollars(materialImpl.units);

  try {
    if( convertCache[iUnits+'-'+mUnits] !== undefined ) {
      diff = convertCache[iUnits+'-'+mUnits];
    } else if( iUnits === mUnits ) {
      diff = 1;
    } else {
      // transfer from what they game us to what we have
      diff = ucum.convert(1, iUnits, mUnits);
      convertCache[iUnits+'-'+mUnits] = diff;
    }

    value = materialDef.price * diff * materialImpl.amount;

  } catch(e) {
    return {
      error: true,
      ucumError : e,
      message : 'Can not convert units: '+materialImpl.units+' to '+mUnits,
      math : mUnits+' to '+materialImpl.units
    };
  }

  var resp = {
    success : true,
    debug : materialDef.price+' * '+diff+' * '+materialImpl.amount,
    value : value
  };

  return resp;
}

function isDollar(value) {
  value = value.trim().toLowerCase();
  if( value === 'us$' || value === '$' || value === '1' || value === '' ) {
    return true;
  }
  return false;
}

/*function calculateComplexPrice(materialDef, materialImpl, complexMaterial) {
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
      convert : convert,
      message : 'Units didn\'t cancel',
      math : materialImpl.units+' * '+units
    };
  }

  if( materialImpl.amount === undefined ) {
    materialImpl.amount = 1;
  }

  convert.debug2 = materialImpl.amount+' * '+materialDef.price+' * '+convert.value;
  convert.value = materialImpl.amount * materialDef.price * convert.value;

  return convert;
}*/

function convertUnits(u1, u2) {
  var time = new Date().getTime();
  try {
    var t1 = cleanDollars(u1);
    var t2 = cleanDollars(u2);

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
      debug : '('+cleanDollars(u1)+').('+ cleanDollars(u2)+')'
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
  calculateComplexPrice : calculateComplexPrice,
  calculateOpMaterialPrice : calculateOpMaterialPrice,
  lookup : lookup,
  ucumParse : ucumParse,
  cleanDollars : cleanDollars
};

},{"./cleanDollars":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/cleanDollars.js","./definitions":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/units/definitions.js","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/extend/index.js","ucum.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/utils/index.js":[function(require,module,exports){
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

},{"./states":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/utils/states.json","extend":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/extend/index.js","node-uuid":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/utils/states.json":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/deep-diff/index.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/extend/index.js":[function(require,module,exports){
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


},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/node-uuid/uuid.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/equivalents.json":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/metrics.json":[function(require,module,exports){
module.exports={"mol":true,"sr":true,"Hz":true,"N":true,"Pa":true,"J":true,"W":true,"A":true,"V":true,"F":true,"Ohm":true,"S":true,"Wb":true,"Cel":true,"T":true,"H":true,"lm":true,"lx":true,"Bq":true,"Gy":true,"Sv":true,"l":true,"L":true,"ar":true,"t":true,"bar":true,"u":true,"eV":true,"pc":true,"[c]":true,"[h]":true,"[k]":true,"[eps_0]":true,"[mu_0]":true,"[e]":true,"[m_e]":true,"[m_p]":true,"[G]":true,"[g]":true,"[ly]":true,"gf":true,"Ky":true,"Gal":true,"dyn":true,"erg":true,"P":true,"Bi":true,"St":true,"Mx":true,"G":true,"Oe":true,"Gb":true,"sb":true,"Lmb":true,"ph":true,"Ci":true,"R":true,"RAD":true,"REM":true,"cal_[15]":true,"cal_[20]":true,"cal_m":true,"cal_IT":true,"cal_th":true,"cal":true,"tex":true,"m[H2O]":true,"m[Hg]":true,"eq":true,"osm":true,"g%":true,"kat":true,"U":true,"[iU]":true,"[IU]":true,"Np":true,"B":true,"B[SPL]":true,"B[V]":true,"B[mV]":true,"B[uV]":true,"B[10.nV]":true,"B[W]":true,"B[kW]":true,"st":true,"mho":true,"bit":true,"By":true,"Bd":true,"m":true,"s":true,"g":true,"rad":true,"K":true,"C":true,"cd":true}

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/prefixes.json":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/ucum-parser.js":[function(require,module,exports){
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

},{"../lib/helpers":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/lib/helpers.js","./metrics.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/metrics.json","./prefixes.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/prefixes.json"}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/lib/helpers.js":[function(require,module,exports){
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

},{}],"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/ucum.js":[function(require,module,exports){
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

},{"./generated/equivalents.json":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/equivalents.json","./generated/ucum-parser.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/generated/ucum-parser.js","./lib/helpers.js":"/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/node_modules/ucum.js/lib/helpers.js"}]},{},["/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js"])("/Users/jrmerz/dev/cstars/AHB/farm-budgets-app/lib/shared/index.js")
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvc2hhcmVkL2NoYW5nZXMvaW5kZXguanMiLCJsaWIvc2hhcmVkL2luZGV4LmpzIiwibGliL3NoYXJlZC9tYXRlcmlhbENvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL29wZXJhdGlvbkNvbnRyb2xsZXIvaW5kZXguanMiLCJsaWIvc2hhcmVkL29wZXJhdGlvbkNvbnRyb2xsZXIvdXRpbHMuanMiLCJsaWIvc2hhcmVkL3NhdmUvaW5kZXguanMiLCJsaWIvc2hhcmVkL3NhdmUvc2NoZW1hLmpzIiwibGliL3NoYXJlZC9zYXZlL3N0cmlwLmpzIiwibGliL3NoYXJlZC90cmFuc2Zvcm0vaW5kZXguanMiLCJsaWIvc2hhcmVkL3VuaXRzL2NsZWFuRG9sbGFycy5qcyIsImxpYi9zaGFyZWQvdW5pdHMvZGVmaW5pdGlvbnMuanMiLCJsaWIvc2hhcmVkL3VuaXRzL2luZGV4LmpzIiwibGliL3NoYXJlZC91dGlscy9pbmRleC5qcyIsImxpYi9zaGFyZWQvdXRpbHMvc3RhdGVzLmpzb24iLCJub2RlX21vZHVsZXMvZGVlcC1kaWZmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwibm9kZV9tb2R1bGVzL25vZGUtdXVpZC91dWlkLmpzIiwibm9kZV9tb2R1bGVzL3VjdW0uanMvZ2VuZXJhdGVkL2VxdWl2YWxlbnRzLmpzb24iLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvbWV0cmljcy5qc29uIiwibm9kZV9tb2R1bGVzL3VjdW0uanMvZ2VuZXJhdGVkL3ByZWZpeGVzLmpzb24iLCJub2RlX21vZHVsZXMvdWN1bS5qcy9nZW5lcmF0ZWQvdWN1bS1wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvdWN1bS5qcy9saWIvaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy91Y3VtLmpzL3VjdW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25aQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsckNBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRpZmYgPSByZXF1aXJlKCdkZWVwLWRpZmYnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5cbmV2ZW50cyA9IG5ldyBldmVudHMoKTtcbmV2ZW50cy5zZXRNYXhMaXN0ZW5lcnMoMTAwMCk7XG5cbnZhciBidWRnZXRUaW1lciA9IC0xO1xudmFyIG1hdGVyaWFsVGltZXIgPSAtMTtcblxudmFyIGNoZWNrTGlzdCA9IHtcbiAgYnVkZ2V0IDogW10sXG4gIHNpbXBsZU1hdGVyaWFsIDogW10sXG4gIGNvbXBsZXhNYXRlcmlhbCA6IFtdXG59O1xuXG52YXIgb3JpZ2luYWwgPSB7XG4gIGJ1ZGdldCA6IHt9LFxuICBtYXRlcmlhbHMgOiB7fSxcbiAgbWF0ZXJpYWxJZHMgOiB7fVxufTtcblxudmFyIGRpZmZlcmVuY2VTdGF0ZSA9IHtcbiAgYnVkZ2V0IDogW10sXG4gIG1hdGVyaWFsSWRzIDogW10sXG4gIG1hdGVyaWFscyA6IFtdXG59O1xuXG4vLyBsaXN0IG9mIHVuc2F2ZWQgbWF0ZXJpYWxzXG52YXIgdW5zYXZlZCA9IHt9O1xuaWYoIHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCApIHtcbiAgdHJ5IHtcbiAgICB2YXIgdCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5zYXZlZC1tYXRlcmlhbHMnKTtcbiAgICBpZiggdCApIHVuc2F2ZWQgPSBKU09OLnBhcnNlKHQpO1xuICB9IGNhdGNoKGUpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRPcmlnaW5hbChidWRnZXQsIG1hdGVyaWFscykge1xuICB2YXIgaTtcbiAgb3JpZ2luYWwubWF0ZXJpYWxJZHMgPSB7fTtcblxuICBpZiggbWF0ZXJpYWxzID09PSB1bmRlZmluZWQgJiYgYnVkZ2V0Lm1hdGVyaWFscyApIHtcbiAgICBvcmlnaW5hbC5idWRnZXQgPSBleHRlbmQodHJ1ZSwge30sIGJ1ZGdldCk7XG5cbiAgICBtYXRlcmlhbHMgPSBvcmlnaW5hbC5idWRnZXQubWF0ZXJpYWxzO1xuICAgIGRlbGV0ZSBvcmlnaW5hbC5idWRnZXQubWF0ZXJpYWxzO1xuXG4gICAgb3JpZ2luYWwubWF0ZXJpYWxzID0ge307XG5cbiAgICBmb3IoIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgICAgLy8gbWF0ZXJpYWxzIGFyZSBhbHJlYWR5IGNvcGllZCwgbm8gcmVhc29uIHRvIHJlLWV4dGVuZFxuICAgICAgb3JpZ2luYWwubWF0ZXJpYWxzW21hdGVyaWFsc1tpXS5pZF0gPSBtYXRlcmlhbHNbaV07XG4gICAgICBvcmlnaW5hbC5tYXRlcmlhbElkc1ttYXRlcmlhbHNbaV0uaWRdID0gMTtcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICBpZiggIWJ1ZGdldC5vcGVyYXRpb25zICkge1xuICAgICAgYnVkZ2V0Lm9wZXJhdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IGJ1ZGdldC5vcGVyYXRpb25zLmxlbmd0aDsgaSsrICkge1xuICAgICAgaWYoICFidWRnZXQub3BlcmF0aW9uc1tpXS5tYXRlcmlhbHMgKSB7XG4gICAgICAgIGJ1ZGdldC5vcGVyYXRpb25zW2ldLm1hdGVyaWFscyA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIG9yaWdpbmFsLmJ1ZGdldCA9IGV4dGVuZCh0cnVlLCB7fSwgYnVkZ2V0KTtcblxuICAgIG9yaWdpbmFsLm1hdGVyaWFscyA9IHt9O1xuICAgIGZvciggaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWxzW2ldLmlkXSA9IGV4dGVuZCh0cnVlLCB7fSwgbWF0ZXJpYWxzW2ldKTtcbiAgICAgIG9yaWdpbmFsLm1hdGVyaWFsSWRzW21hdGVyaWFsc1tpXS5pZF0gPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRpZmZlcmVuY2VTdGF0ZSA9IHtcbiAgICBidWRnZXQgOiBbXSxcbiAgICBtYXRlcmlhbElkcyA6IFtdLFxuICAgIG1hdGVyaWFscyA6IFtdXG4gIH07XG5cbiAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLWRpZmYnLCBbXSk7XG4gIGV2ZW50cy5lbWl0KCdidWRnZXQtZGlmZicsIGRpZmZlcmVuY2VTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1hdGVyaWFsKG1hdGVyaWFsLCBkZWxldGVkKSB7XG4gIGlmKCBkZWxldGVkICkge1xuICAgIGRlbGV0ZSBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWwuaWRdO1xuICAgIGRlbGV0ZSBvcmlnaW5hbC5tYXRlcmlhbElkc1ttYXRlcmlhbC5pZF07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3JpZ2luYWwubWF0ZXJpYWxzW21hdGVyaWFsLmlkXSA9IG1hdGVyaWFsO1xuICBvcmlnaW5hbC5tYXRlcmlhbElkc1ttYXRlcmlhbC5pZF0gPSAxO1xufVxuXG5mdW5jdGlvbiBjaGVja01hdGVyaWFscyhtYXRlcmlhbHMpIHtcbiAgaWYoIG1hdGVyaWFsVGltZXIgIT09IC0xICkge1xuICAgIGNsZWFyVGltZW91dChtYXRlcmlhbFRpbWVyKTtcbiAgfVxuXG4gIG1hdGVyaWFsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgbWF0ZXJpYWxUaW1lciA9IC0xO1xuICAgIF9jaGVja01hdGVyaWFscyhtYXRlcmlhbHMpO1xuICB9LCAxMDApO1xufVxuXG5cbmZ1bmN0aW9uIF9jaGVja01hdGVyaWFscyhtYXRlcmlhbHMpIHtcbiAgdmFyIGRpZmZlcmVuY2VzID0gW10sIGk7XG5cblxuICBmb3IoIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCAhbWF0ZXJpYWxzW2ldLmlkICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYoIG9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbHNbaV0uaWRdICkge1xuICAgICAgZGlmZmVyZW5jZXMucHVzaCh7XG4gICAgICAgIGlkIDogbWF0ZXJpYWxzW2ldLmlkLFxuICAgICAgICB0eXBlIDogbWF0ZXJpYWxzW2ldLnR5cGUsXG4gICAgICAgIHVwZGF0ZWQgOiB0cnVlLFxuICAgICAgICBkaWZmIDogZGlmZihvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWxzW2ldLmlkXSwgbWF0ZXJpYWxzW2ldKSB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVtb3ZlIHRoaW5ncyB3ZSBkb24ndCBjYXJlIGFib3V0XG4gIGZvciggaSA9IGRpZmZlcmVuY2VzLmxlbmd0aC0xOyBpID49IDA7IGktLSApIHtcbiAgICBpZiggIWRpZmZlcmVuY2VzW2ldLmRpZmYgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZ25vcmVBdHRyaWJ1dGVzKGRpZmZlcmVuY2VzW2ldLmRpZmYsIGRpZmZlcmVuY2VzW2ldLnR5cGUgPT09ICdjb21wbGV4JyA/IGNoZWNrTGlzdC5jb21wbGV4TWF0ZXJpYWwgOiBjaGVja0xpc3Quc2ltcGxlTWF0ZXJpYWwpO1xuICAgIGlmKCBkaWZmZXJlbmNlc1tpXS5kaWZmLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIGRpZmZlcmVuY2VzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBkaWZmZXJlbmNlU3RhdGUubWF0ZXJpYWxzID0gZGlmZmVyZW5jZXM7XG4gIGV2ZW50cy5lbWl0KCdtYXRlcmlhbC1kaWZmJywgZGlmZmVyZW5jZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGNoZWNrQnVkZ2V0KGJ1ZGdldCwgbWF0ZXJpYWxzKSB7XG4gIGlmKCBidWRnZXRUaW1lciAhPT0gLTEgKSB7XG4gICAgY2xlYXJUaW1lb3V0KGJ1ZGdldFRpbWVyKTtcbiAgfVxuXG4gIGJ1ZGdldFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgIGJ1ZGdldFRpbWVyID0gLTE7XG4gICAgX2NoZWNrQnVkZ2V0KGJ1ZGdldCwgbWF0ZXJpYWxzKTtcbiAgfSwgMTAwKTtcbn1cblxuXG5mdW5jdGlvbiBfY2hlY2tCdWRnZXQoYnVkZ2V0LCBtYXRlcmlhbHMpIHtcbiAgdmFyIGRpZmZlcmVuY2VzID0gZGlmZihvcmlnaW5hbC5idWRnZXQsIGJ1ZGdldCkgfHwgW107XG5cbiAgLy8gcmVtb3ZlIHRoaW5ncyB3ZSBkb24ndCBjYXJlIGFib3V0XG4gIGlnbm9yZUF0dHJpYnV0ZXMoZGlmZmVyZW5jZXMsIGNoZWNrTGlzdC5idWRnZXQpO1xuXG4gIHZhciBpZHMgPSB7fTtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoICFtYXRlcmlhbHNbaV0uaWQgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWRzW21hdGVyaWFsc1tpXS5pZF0gPSAxO1xuICB9XG4gIGRpZmZlcmVuY2VTdGF0ZS5tYXRlcmlhbElkcyA9IGRpZmYob3JpZ2luYWwubWF0ZXJpYWxJZHMsIGlkcykgfHwgW107XG4gIGRpZmZlcmVuY2VTdGF0ZS5idWRnZXQgPSBkaWZmZXJlbmNlcztcblxuICBldmVudHMuZW1pdCgnYnVkZ2V0LWRpZmYnLCBkaWZmZXJlbmNlU3RhdGUpO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGVzKGRpZmZlcmVuY2VzLCBsaXN0KSB7XG4gIHZhciBpLCBqLCBwYXRoO1xuICBmb3IoIGkgPSBkaWZmZXJlbmNlcy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0gKSB7XG4gICAgcGF0aCA9IGRpZmZlcmVuY2VzW2ldLnBhdGguam9pbignLCcpO1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yKCBqID0gMDsgaiA8IGxpc3QubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpZiggbGlzdFtqXS50ZXN0KHBhdGgpICkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCAhZm91bmQgKSB7XG4gICAgICBkaWZmZXJlbmNlcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcmNlQ2hlY2tBbGwoYnVkZ2V0LCBtYXRlcmlhbHMpIHtcbiAgX2NoZWNrQnVkZ2V0KGJ1ZGdldCwgbWF0ZXJpYWxzKTtcbiAgX2NoZWNrTWF0ZXJpYWxzKG1hdGVyaWFscyk7XG5cbiAgaWYoIGRpZmZlcmVuY2VTdGF0ZS5idWRnZXQubGVuZ3RoID4gMCB8fCBkaWZmZXJlbmNlU3RhdGUubWF0ZXJpYWxzLmxlbmd0aCA+IDAgfHwgZGlmZmVyZW5jZVN0YXRlLm1hdGVyaWFsSWRzLmxlbmd0aCA+IDAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERpZmZlcmVuY2VzKCkge1xuICByZXR1cm4gZGlmZmVyZW5jZVN0YXRlO1xufVxuXG5mdW5jdGlvbiBwcmVwKHNjaGVtYSkge1xuICBwcmVwU2NoZW1hKCcnLCBzY2hlbWEuYnVkZ2V0LCBjaGVja0xpc3QuYnVkZ2V0KTtcbiAgcHJlcFNjaGVtYSgnJywgc2NoZW1hLm1hdGVyaWFsLCBjaGVja0xpc3Quc2ltcGxlTWF0ZXJpYWwpO1xuICBwcmVwU2NoZW1hKCcnLCBzY2hlbWEuY29tcGxleE1hdGVyaWFsLCBjaGVja0xpc3QuY29tcGxleE1hdGVyaWFsKTtcbn1cblxuZnVuY3Rpb24gcHJlcFNjaGVtYShwYXRoLCBzY2hlbWEsIGxpc3QpIHtcbiAgdmFyIGNvbW1hID0gcGF0aC5sZW5ndGggPiAwID8gJywnIDogJyc7XG5cbiAgZm9yKCB2YXIga2V5IGluIHNjaGVtYSApIHtcbiAgICBpZiggdHlwZW9mIHNjaGVtYVtrZXldID09PSAnc3RyaW5nJyApIHtcbiAgICAgIGxpc3QucHVzaChuZXcgUmVnRXhwKCdeJytwYXRoK2NvbW1hK2tleSsnJCcpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKCBBcnJheS5pc0FycmF5KHNjaGVtYVtrZXldKSApIHtcblxuICAgICAgLy9pZiggcGF0aC5sZW5ndGggPiAwICkge1xuICAgICAgICBsaXN0LnB1c2gobmV3IFJlZ0V4cCgnXicrcGF0aCtjb21tYStrZXkrJyQnKSk7XG4gICAgICAgIHByZXBTY2hlbWEocGF0aCtjb21tYStrZXkrJywuKicsIHNjaGVtYVtrZXldWzBdLCBsaXN0KTtcbiAgICAgIC8vfSBlbHNlIHtcbiAgICAgIC8vICBwcmVwU2NoZW1hKGtleSwgc2NoZW1hW2tleV1bMF0sIGxpc3QpO1xuICAgICAgLy99XG5cblxuICAgIH0gZWxzZSBpZiggdHlwZW9mIHNjaGVtYVtrZXldID09PSAnb2JqZWN0JyApIHtcbiAgICAgIHByZXBTY2hlbWEocGF0aCtjb21tYStrZXksIHNjaGVtYVtrZXldLCBsaXN0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcil7XG4gIGV2ZW50cy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBoYXNDaGFuZ2VzKG1hdGVyaWFsKSB7XG4gIGlmKCBtYXRlcmlhbCApIHtcbiAgICBpZiggIW9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbC5pZF0gKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGQgPSBkaWZmKG9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbC5pZF0sIG1hdGVyaWFsKTtcbiAgICBpZiggZCApIHtcbiAgICAgIGlnbm9yZUF0dHJpYnV0ZXMoZCwgbWF0ZXJpYWwudHlwZSA9PT0gJ2NvbXBsZXgnID8gY2hlY2tMaXN0LmNvbXBsZXhNYXRlcmlhbCA6IGNoZWNrTGlzdC5zaW1wbGVNYXRlcmlhbCk7XG4gICAgICBpZiggZC5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIGZvciggdmFyIGtleSBpbiBkaWZmZXJlbmNlU3RhdGUgKSB7XG4gICAgaWYoIGRpZmZlcmVuY2VTdGF0ZVtrZXldLmxlbmd0aCA+IDAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYoIE9iamVjdC5rZXlzKHVuc2F2ZWQpLmxlbmd0aCA+IDAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoaXMgb25seSByZW1vdmVzIG1hdGVyaWFsIGZyb20gb3JpZ2luYWwgbGlzdCxcbi8vIGl0IGRvZXMgbm90IHRvdWNoIHRoZSBidWRnZXRcbmZ1bmN0aW9uIHJlbW92ZU1hdGVyaWFsKG1hdGVyaWFsKSB7XG4gIGlmKCBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWwuaWRdICkge1xuICAgIGRlbGV0ZSBvcmlnaW5hbC5tYXRlcmlhbHNbbWF0ZXJpYWwuaWRdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE1hdGVyaWFsKG1hdGVyaWFsKSB7XG4gIG9yaWdpbmFsLm1hdGVyaWFsc1ttYXRlcmlhbC5pZF0gPSBtYXRlcmlhbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldE9yaWdpbmFsIDogc2V0T3JpZ2luYWwsXG4gIGNoZWNrQnVkZ2V0IDogY2hlY2tCdWRnZXQsXG4gIGNoZWNrTWF0ZXJpYWxzIDogY2hlY2tNYXRlcmlhbHMsXG4gIGZvcmNlQ2hlY2tBbGwgOiBmb3JjZUNoZWNrQWxsLFxuICBnZXREaWZmZXJlbmNlcyA6IGdldERpZmZlcmVuY2VzLFxuICBoYXNDaGFuZ2VzIDogaGFzQ2hhbmdlcyxcbiAgb24gOiBvbixcbiAgcmVtb3ZlTGlzdGVuZXIgOiByZW1vdmVMaXN0ZW5lcixcbiAgdXBkYXRlTWF0ZXJpYWwgOiB1cGRhdGVNYXRlcmlhbCxcbiAgcmVtb3ZlTWF0ZXJpYWwgOiByZW1vdmVNYXRlcmlhbCxcbiAgYWRkTWF0ZXJpYWwgOiBhZGRNYXRlcmlhbCxcbiAgZ2V0T3JpZ2luYWwgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gb3JpZ2luYWw7XG4gIH0sXG4gIHNldFVuc2F2ZWQgOiBmdW5jdGlvbihtYXRlcmlhbHMpIHtcbiAgICB1bnNhdmVkID0gbWF0ZXJpYWxzO1xuICB9LFxuICBnZXRVbnNhdmVkIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHVuc2F2ZWQ7XG4gIH1cbn07XG5cbiBwcmVwKHJlcXVpcmUoJy4uL3NhdmUvc2NoZW1hJykoKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIE5hbWVzcGFjZSBtb2R1bGVcbiAqICBFeHBvc2VzIG90aGVyIG1vZHVsZXNcbiAqKi9cblxudmFyIG1hdGVyaWFsQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vbWF0ZXJpYWxDb250cm9sbGVyJyk7XG52YXIgb3BlcmF0aW9uQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vb3BlcmF0aW9uQ29udHJvbGxlcicpO1xub3BlcmF0aW9uQ29udHJvbGxlci5pbml0KG1hdGVyaWFsQ29udHJvbGxlcik7XG4vL21hdGVyaWFsQ29udHJvbGxlci5pbml0KG9wZXJhdGlvbkNvbnRyb2xsZXIpO1xuXG52YXIgY3VycmVudERhdGEgPSB7fTtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIucmVzZXQoKTtcbiAgbWF0ZXJpYWxDb250cm9sbGVyLnJlc2V0KCk7XG5cbiAgLy8gdG1wIGZvciBub3dcbiAgdmFyIGZpeGVkID0gWydFc3RpbWF0ZScsICdUYXhlcycsJ0luc3VyYW5jZScsJ0NhcGl0b2wgQ29zdCBSZWNvdmVyJywnTHViZSAmIFJlcGFpcnMnXTtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBmaXhlZC5sZW5ndGg7IGkrKyApIHtcbiAgICBtYXRlcmlhbENvbnRyb2xsZXIuYWRkKHtcbiAgICAgIG5hbWUgOiBmaXhlZFtpXSxcbiAgICAgIHByaWNlIDogMSxcbiAgICAgIHVuaXRzIDogJ3VzJCcsXG4gICAgICBmaXhlZCA6IHRydWUsXG4gICAgICBkZXNjcmlwdGlvbiA6ICdQcm92aWRlIGZpeGVkIGNvc3QgZm9yIGNvbXBsZXggbWF0ZXJpYWwnXG4gICAgfSx7XG4gICAgICBub0V2ZW50IDogdHJ1ZSxcbiAgICAgIG5vUmVjYWxjIDogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWQoZGF0YSkge1xuICAvLyBieSBkZWZhdWx0IGFkZGluZy91cGRhdGluZyBtYXRlcmlhbHMgZmlyZXMgZXZlbnRzIGFuZCByZWNhbGNzXG4gIC8vIGJ1ZGdldC4gIFdlIGRvbid0IHdhbnQgdG8gZG8gdGhpcyBvbiBpbml0aWFsIGxvYWRcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgbm9FdmVudCA6IHRydWUsXG4gICAgbm9SZWNhbGMgOiB0cnVlXG4gIH07XG5cbiAgZGF0YS5tYXRlcmlhbHMuZm9yRWFjaChmdW5jdGlvbihtYXRlcmlhbCl7XG4gICAgbWF0ZXJpYWxDb250cm9sbGVyLmFkZChtYXRlcmlhbCwgb3B0aW9ucyk7XG4gIH0pO1xuXG4gIG1hdGVyaWFsQ29udHJvbGxlci5yZWNhbGMoKTtcblxuICBvcGVyYXRpb25Db250cm9sbGVyLnNldEZhcm1TaXplKChkYXRhLmJ1ZGdldC5mYXJtICYmIGRhdGEuYnVkZ2V0LmZhcm0uc2l6ZSkgPyBwYXJzZUludChkYXRhLmJ1ZGdldC5mYXJtLnNpemUpIDogMSk7XG4gIGRhdGEuYnVkZ2V0Lm9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRpb24pe1xuICAgIG9wZXJhdGlvbkNvbnRyb2xsZXIuYWRkKG9wZXJhdGlvbiwgb3B0aW9ucyk7XG4gIH0pO1xuXG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIucmVjYWxjKCk7XG5cbiAgY3VycmVudERhdGEgPSBkYXRhO1xufVxuXG4vLyBUT0RPOiB0aGlzIGlzIHVzZWQgYnkgc2V2ZXJhbCB3aWRnZXRzLiAgQ29udHJvbGxlciBzaG91bGQganVzdCBrZWVwIGEgbGlzdFxuZnVuY3Rpb24gZ2V0TWF0ZXJpYWxJZHMoKSB7XG4gIHZhciBpZHMgPSBbXTtcbiAgdmFyIG1hdGVyaWFscyA9IG1hdGVyaWFsQ29udHJvbGxlci5nZXQoKTtcbiAgZm9yKCB2YXIgdHlwZSBpbiBtYXRlcmlhbHMgKSB7XG4gICAgZm9yKCB2YXIgbmFtZSBpbiBtYXRlcmlhbHNbdHlwZV0gKSB7XG4gICAgICBpZiggbWF0ZXJpYWxzW3R5cGVdW25hbWVdLmlkICkge1xuICAgICAgICBpZHMucHVzaChtYXRlcmlhbHNbdHlwZV1bbmFtZV0uaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gaWRzO1xufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHV0aWxzIDogcmVxdWlyZSgnLi91dGlscycpKG9wZXJhdGlvbkNvbnRyb2xsZXIsIG1hdGVyaWFsQ29udHJvbGxlciksXG4gIG9wZXJhdGlvbkNvbnRyb2xsZXIgOiBvcGVyYXRpb25Db250cm9sbGVyLFxuICBtYXRlcmlhbENvbnRyb2xsZXIgOiBtYXRlcmlhbENvbnRyb2xsZXIsXG4gIHRyYW5zZm9ybSA6IHJlcXVpcmUoJy4vdHJhbnNmb3JtJyksXG4gIHVjdW0gOiByZXF1aXJlKCd1Y3VtLmpzJyksXG4gIHVuaXRzIDogcmVxdWlyZSgnLi91bml0cycpLFxuICBzYXZlIDogcmVxdWlyZSgnLi9zYXZlJyksXG4gIGNoYW5nZXMgOiByZXF1aXJlKCcuL2NoYW5nZXMnKSxcbiAgZ2V0TWF0ZXJpYWxJZHMgOiBnZXRNYXRlcmlhbElkcyxcbiAgZ2V0QnVkZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgaWYoICFjdXJyZW50RGF0YS5idWRnZXQgKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGN1cnJlbnREYXRhLmJ1ZGdldC5vcGVyYXRpb25zID0gb3BlcmF0aW9uQ29udHJvbGxlci5nZXQoKTtcbiAgICByZXR1cm4gY3VycmVudERhdGEuYnVkZ2V0O1xuICB9LFxuICBsb2FkIDogbG9hZCxcbiAgcmVzZXQgOiByZXNldFxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICoga2VlcHMgdHJhY2sgb2YgbWF0ZXJpYWxzLCBwcmljZXMgYW5kIGNvbXBsZXggbWF0ZXJpYWxzLiAgbW9zdGx5IGZvciBjbGllbnQgYXBwLlxuICoqL1xuXG4gdmFyIGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiB2YXIgdW5pdHMgPSByZXF1aXJlKCcuLi91bml0cycpO1xuIGV2ZW50cyA9IG5ldyBldmVudHMoKTtcbiBldmVudHMuc2V0TWF4TGlzdGVuZXJzKDEwMDApO1xuXG52YXIgZGVidWcgPSBmYWxzZTtcbnZhciBkYXRhID0ge307XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICBkYXRhID0ge307XG4gIGV2ZW50cy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYoICFvcHRpb25zICkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmKCBkYXRhW25hbWVdICkge1xuICAgIGRlbGV0ZSBkYXRhW25hbWVdO1xuXG4gICAgdmFyIGUgPSB7XG4gICAgICBtYXRlcmlhbCA6IG5hbWUsXG4gICAgICBzdWNjZXNzIDogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiggIW9wdGlvbnMubm9SZWNhbGMgKSB7XG4gICAgICByZWNhbGMoKTtcbiAgICB9XG5cbiAgICBldmVudHMuZW1pdCgnbWF0ZXJpYWwtcmVtb3ZlZCcsIGUpO1xuICAgIHJldHVybiBlO1xuICB9XG5cbiAgcmV0dXJuIHNldEVycm9yKG5hbWUsICdtYXRlcmlhbCAnK25hbWUrJyBkb2VzIG5vdCBleGlzdCcsIDEpO1xufVxuXG5mdW5jdGlvbiBhZGQobWF0ZXJpYWwsIG9wdGlvbnMpIHtcbiAgaWYoICFvcHRpb25zICkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmKCBkYXRhW21hdGVyaWFsLm5hbWVdICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKG1hdGVyaWFsLm5hbWUsICdtYXRlcmlhbCBhbHJlYWR5IGV4aXN0cycsIDIpO1xuICB9XG5cbiAgdmFyIGlzTmV3ID0gZmFsc2U7XG4gIGlmKCAhZGF0YVttYXRlcmlhbC5uYW1lXSApIHtcbiAgICBpc05ldyA9IHRydWU7XG4gIH1cblxuICBpZiggIW1hdGVyaWFsLnR5cGUgKSB7XG4gICAgaWYoIG1hdGVyaWFsLm1hdGVyaWFscyApIHtcbiAgICAgIG1hdGVyaWFsLnR5cGUgPSAnY29tcGxleCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGVyaWFsLnR5cGUgPSAnc2ltcGxlJztcbiAgICB9XG4gIH1cblxuICBkYXRhW21hdGVyaWFsLm5hbWVdID0gbWF0ZXJpYWw7XG5cbiAgaWYoIG9wdGlvbnMucmVuYW1lICkge1xuICAgIHJlbW92ZShvcHRpb25zLnJlbmFtZSwge25vUmVjYWxjOiB0cnVlfSk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMubm9SZWNhbGMgKSB7XG4gICAgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgbWF0ZXJpYWwgOiBtYXRlcmlhbCxcbiAgICBpc05ldyA6IGlzTmV3LFxuICAgIHJlcGxhY2VkIDogb3B0aW9ucy5yZW5hbWUsXG4gICAgZmxhZyA6IG9wdGlvbnMuZmxhZywgLy8gbGV0IHRoZSBjYWxsZXIgcGFzcyBpdCdzIG93biBmbGFnc1xuICAgIHN1Y2Nlc3MgOiB0cnVlXG4gIH07XG5cbiAgaWYoICFvcHRpb25zLm5vRXZlbnQgKSB7XG4gICAgZXZlbnRzLmVtaXQoJ21hdGVyaWFsLXVwZGF0ZScsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuZnVuY3Rpb24gZ2V0KG5hbWUsIG1hdGVyaWFsKSB7XG4gIGlmKCAhbmFtZSApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmKCBkYXRhW25hbWVdICkge1xuICAgIHJldHVybiBkYXRhW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHNldEVycm9yKG5hbWUsIG5hbWUrJyBpcyBub3QgaW4gdGhlIG1hdGVyaWFsIGxpc3QnLCAzKTtcbn1cblxuZnVuY3Rpb24gYXNBcnJheSgpIHtcbiAgdmFyIGFyciA9IFtdLCBrZXk7XG4gIGZvcigga2V5IGluIGRhdGEgKSB7XG4gICAgYXJyLnB1c2goZGF0YVtrZXldKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBmaW5kKHR4dCwgaWdub3JlKSB7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoJy4qJyt0eHQrJy4qJywgJ2knKTtcbiAgdmFyIHJlc3VsdHMgPSBbXSwga2V5O1xuXG4gIGZvcigga2V5IGluIGRhdGEgKSB7XG4gICAgaWYoIGtleS5tYXRjaChyZSkgJiYga2V5ICE9PSBpZ25vcmUgKSB7XG4gICAgICByZXN1bHRzLnB1c2goZGF0YVtrZXldKTtcbiAgICB9XG4gIH1cblxuICBmb3IoIHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIHJlc3VsdHNbaV0ubmFtZSA9PT0gdHh0ICkge1xuICAgICAgdmFyIG0gPSByZXN1bHRzLnNwbGljZShpLCAxKVswXTtcbiAgICAgIHJlc3VsdHMuc3BsaWNlKDAsMCxtKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyByZWNhbGMgYWxsIGNvbXBsZXggbWF0ZXJpYWwgY29zdHNcbmZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB2YXIgbWF0ZXJpYWwsIG07XG5cbiAgZm9yKCBtYXRlcmlhbCBpbiBkYXRhICkge1xuICAgIGlmKCBkYXRhW21hdGVyaWFsXS50eXBlICE9PSAnY29tcGxleCcgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBkYXRhW21hdGVyaWFsXS5wcmljZSA9IG51bGw7XG4gIH1cblxuICBmb3IoIG1hdGVyaWFsIGluIGRhdGEgKSB7XG4gICAgbSA9IGRhdGFbbWF0ZXJpYWxdO1xuICAgIGlmKCBtLnR5cGUgIT09ICdjb21wbGV4JyApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKCBtLnByaWNlICE9PSBudWxsICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzcCA9IF9yZWNhbGMobSwgW20ubmFtZV0pO1xuICAgIG0ucHJpY2UgPSByZXNwLnByaWNlO1xuICAgIG0ucmVjYWxjRXJyb3JzID0gcmVzcC5lcnJvcnM7XG4gIH1cblxuICBpZiggZGVidWcgKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbXBsZXggTWF0ZXJpYWwgUmVjYWxjOiAnKyhuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHQpKydtcycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZWNhbGMobWF0ZXJpYWwsIG1hdGVyaWFsQ2hhaW4pe1xuICB2YXIgcHJpY2UgPSAwO1xuICB2YXIgZXJyb3JzID0gW107XG5cbiAgZm9yKCB2YXIga2V5IGluIG1hdGVyaWFsLm1hdGVyaWFscyApIHtcbiAgICB2YXIgbTtcblxuICAgIC8vIGNoZWNrIHRoZSB1bmlxdWUgbGlzdFxuICAgIGlmKCBtYXRlcmlhbC51bmlxdWUgJiYgbWF0ZXJpYWwudW5pcXVlW2tleV0gKSB7XG4gICAgICBtID0ge1xuICAgICAgICBuYW1lIDoga2V5LFxuICAgICAgICBwcmljZSA6IG1hdGVyaWFsLnVuaXF1ZVtrZXldLnByaWNlLFxuICAgICAgICB1bml0cyA6IG1hdGVyaWFsLnVuaXF1ZVtrZXldLnVuaXRzXG4gICAgICB9O1xuICAgIH0gZWxzZSB7IC8vIG90aGVyd2lzZSB1c2UgdGhpcyBtb2R1bGUgdG8gZ2V0IGEgbWF0ZXJpYWxcbiAgICAgIG0gPSBnZXQoa2V5KTtcbiAgICB9XG5cbiAgICAvLyBpZiBlcnJvciBmaW5kaW5nIG1hdGVyaWFsLCBzZXQgZXJyb3Igb24gbWF0ZXJpYWwgcmVmZXJlbmNlIGFuZCBjb250aW51ZTtcbiAgICBpZiggbS5lcnJvciApIHtcbiAgICAgIHNldE1hdGVyaWFsRGVmRXJyb3IobWF0ZXJpYWwubWF0ZXJpYWxzW2tleV0sIG0ubWVzc2FnZSwgZXJyb3JzKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKCBtLnByaWNlID09PSBudWxsICYmIG0udHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgICAgLy8gbWFrZSBzdXJlIG5vIHJlY3Vyc2lvblxuICAgICAgaWYoIG1hdGVyaWFsQ2hhaW4uaW5kZXhPZihtLm5hbWUpID09PSAtMSApIHtcbiAgICAgICAgdmFyIHJlc3AgPSBfcmVjYWxjKG0sIGV4dGVuZENoYWluKG1hdGVyaWFsQ2hhaW4sIG0ubmFtZSkpO1xuICAgICAgICBtLnByaWNlID0gcmVzcC5wcmljZTtcbiAgICAgICAgbS5yZWNhbGNFcnJvcnMgPSByZXNwLmVycm9ycztcblxuICAgICAgICAvLyBUaGlzIGlzbid0IHdvcmtpbmchP1xuICAgICAgICAvLyBlcnJvcnMuY29udGFjdChyZXNwLmVycm9ycyk7XG4gICAgICAgIGlmKCByZXNwLmVycm9ycy5sZW5ndGggPiAwICkge1xuICAgICAgICAgIHNldE1hdGVyaWFsRGVmRXJyb3IobWF0ZXJpYWwubWF0ZXJpYWxzW2tleV0sIG0ubmFtZSsnIGhhcyBlcnJvcnMnLCBbXSk7XG4gICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCByZXNwLmVycm9ycy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHJlc3AuZXJyb3JzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQkFETkVTU1xuICAgICAgICBzZXRNYXRlcmlhbERlZkVycm9yKG1hdGVyaWFsLm1hdGVyaWFsc1trZXldLCAnUmVjdXNpdmUgbWF0ZXJpYWxzIGZvdW5kLCBpZ25vcmluZycsIGVycm9ycyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5vdyBhY3R1YWxseSBjYWxjdWxhdGUgdmFsdWVcbiAgICB2YXIgdmFsdWUgPSB1bml0cy5jYWxjdWxhdGVDb21wbGV4UHJpY2UobSwgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0sIG1hdGVyaWFsKTtcblxuICAgIGlmKCB2YWx1ZS5lcnJvciApIHtcbiAgICAgIHNldE1hdGVyaWFsRGVmRXJyb3IobWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0sIHZhbHVlLm1lc3NhZ2UsIGVycm9ycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1trZXldLmVycm9yID0gbnVsbDtcbiAgICAgIG1hdGVyaWFsLm1hdGVyaWFsc1trZXldLm1lc3NhZ2UgPSBudWxsO1xuICAgICAgbWF0ZXJpYWwubWF0ZXJpYWxzW20ubmFtZV0ucHJpY2UgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG5cbiAgICBwcmljZSArPSBtYXRlcmlhbC5tYXRlcmlhbHNbbS5uYW1lXS5wcmljZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJpY2U6IHByaWNlLFxuICAgIGVycm9ycyA6IGVycm9yc1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRNYXRlcmlhbERlZkVycm9yKG1hdGVyaWFsRGVmLCBtc2csIGVycm9ycykge1xuICBtYXRlcmlhbERlZi5wcmljZSA9IDA7XG4gIG1hdGVyaWFsRGVmLmVycm9yID0gdHJ1ZTtcbiAgbWF0ZXJpYWxEZWYubWVzc2FnZSA9IG1zZztcbiAgZXJyb3JzLnB1c2gobXNnKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kQ2hhaW4oY2hhaW4sIG0pIHtcbiAgdmFyIG5ld0NoYWluID0gY2hhaW4uc2xpY2UoKTtcbiAgbmV3Q2hhaW4ucHVzaChtKTtcbiAgcmV0dXJuIG5ld0NoYWluO1xufVxuXG5mdW5jdGlvbiBtYXRlcmlhbFJlY2FsYyhtYXRlcmlhbCkge1xuICBpZiggdHlwZW9mIG1hdGVyaWFsICE9PSAnb2JqZWN0JyApIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiggbWF0ZXJpYWwudHlwZSAhPT0gJ2NvbXBsZXgnICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByZXNwID0gX3JlY2FsYyhtYXRlcmlhbCk7XG4gIG1hdGVyaWFsLnByaWNlID0gcmVzcC5wcmljZTtcbiAgbWF0ZXJpYWwucmVjYWxjRXJyb3JzID0gcmVzcC5lcnJvcnM7XG59XG5cbmZ1bmN0aW9uIGdldEVycm9ycygpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIGZvciggdmFyIG0gaW4gZGF0YS5tYXRlcmlhbHMgKSB7XG4gICAgaWYoIGRhdGEubWF0ZXJpYWxzW21dLmVycm9yICkge1xuICAgICAgZXJyb3JzLnB1c2goZGF0YS5tYXRlcmlhbHNbbV0pO1xuICAgIH1cbiAgfVxuXG4gIGZvciggdmFyIGkgaW4gZGF0YS5jb21wbGV4ICkge1xuICAgIGlmKCBkYXRhLmNvbXBsZXhbaV0uZXJyb3IgKSB7XG4gICAgICBlcnJvcnMucHVzaChkYXRhLmNvbXBsZXhbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IoIG0gaW4gZGF0YS5jb21wbGV4W2ldLm1hdGVyaWFscyApIHtcbiAgICAgICAgaWYoIGRhdGEuY29tcGxleFtpXS5tYXRlcmlhbHNbbV0uZXJyb3IgKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goZGF0YS5jb21wbGV4W2ldKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgZm9yKCBtIGluIGRhdGEuY29tcGxleFtpXS5tYXRlcmlhbHMgKSB7XG4gICAgICB2YXIgbWF0ZXJpYWwgPSBnZXQobSk7XG4gICAgICBpZiggbWF0ZXJpYWwuZXJyb3IgKSB7XG4gICAgICAgIG1hdGVyaWFsLmZyb20gPSBkYXRhLmNvbXBsZXhbaV07XG4gICAgICAgIGVycm9ycy5wdXNoKG1hdGVyaWFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufVxuXG5cbmZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gIHJldHVybiB7c3VjY2VzczogdHJ1ZX07XG59XG5cbmZ1bmN0aW9uIHNldEVycm9yKG5hbWUsIG1zZywgY29kZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWUgOiBuYW1lLFxuICAgIGVycm9yIDogdHJ1ZSxcbiAgICBtZXNzYWdlIDogbXNnLFxuICAgIGNvZGUgOiBjb2RlXG4gIH07XG59XG5cbi8vIGRvZXMgYSBtYXRlcmlhbCBjb250YWluIG9yIGhhdmUgYSBkZXBlbmRlbmN5IG9uIGEgZ2l2ZW4gbWF0ZXJpYWwgbmFtZVxuZnVuY3Rpb24gY29udGFpbnMobWF0ZXJpYWwsIG5hbWUsIHJlcGxhY2VkKSB7XG4gIGlmKCBtYXRlcmlhbC5uYW1lID09PSBuYW1lIHx8IG1hdGVyaWFsLm5hbWUgPT09IHJlcGxhY2VkICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYoIG1hdGVyaWFsLnR5cGUgIT09ICdjb21wbGV4JyB8fCBtYXRlcmlhbC5tYXRlcmlhbHMgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IoIHZhciBrZXkgaW4gbWF0ZXJpYWwubWF0ZXJpYWxzICkge1xuICAgIGlmKCBrZXkgPT09IG5hbWUgfHwga2V5ID09PSByZXBsYWNlZCApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZENvbnRhaW5zID0gY29udGFpbnMoZ2V0KGtleSksIG5hbWUsIHJlcGxhY2VkKTtcbiAgICBpZiggY2hpbGRDb250YWlucyApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYWRkIGEgbWF0ZXJpYWxcbiAgZGVidWcgOiBmdW5jdGlvbihkKXtcbiAgICBkZWJ1ZyA9IGQ7XG4gIH0sXG4gIGFkZCA6IGFkZCxcbiAgZ2V0IDogZ2V0LFxuICBhc0FycmF5IDogYXNBcnJheSxcbiAgcmVtb3ZlIDogcmVtb3ZlLFxuICBmaW5kIDogZmluZCxcbiAgZ2V0RXJyb3JzIDogZ2V0RXJyb3JzLFxuICBvbiA6IGZ1bmN0aW9uKGV2ZW50LCBsaXN0ZW5lcil7XG4gICAgZXZlbnRzLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0sXG4gIHJlbW92ZUxpc3RlbmVyIDogZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgICBldmVudHMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSxcbiAgLy8gbW9zdGx5IGZvciB1bml0IHRlc3RpbmdcbiAgZ2V0RXZlbnRzTW9kdWxlIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGV2ZW50cztcbiAgfSxcbiAgcmVjYWxjIDogcmVjYWxjLFxuICBtYXRlcmlhbFJlY2FsYyA6IG1hdGVyaWFsUmVjYWxjLFxuICBjb250YWlucyA6IGNvbnRhaW5zLFxuICByZXNldCA6IHJlc2V0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBrZWVwcyB0cmFjayBvZiBtYXRlcmlhbHMsIHByaWNlcyBhbmQgY29tcGxleCBtYXRlcmlhbHMuICBtb3N0bHkgZm9yIGNsaWVudCBhcHAuXG4gKiovXG52YXIgdXVpZCA9IHJlcXVpcmUoJ25vZGUtdXVpZCcpO1xudmFyIHVuaXRzID0gcmVxdWlyZSgnLi4vdW5pdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG5ldmVudHMgPSBuZXcgZXZlbnRzKCk7XG5ldmVudHMuc2V0TWF4TGlzdGVuZXJzKDEwMDApO1xuXG52YXIgZGVidWcgPSBmYWxzZTtcbnZhciB0b3RhbCA9IDA7XG52YXIgZmFybVNpemUgPSAxO1xudmFyIGN1cnJlbnRUb3RhbCA9IG51bGw7XG52YXIgZGF0YSA9IFtdLCBtYXRlcmlhbENvbnRyb2xsZXIsIGxhc3RSZWNhbGNNc2c7XG5cbmZ1bmN0aW9uIGluaXQoY29udHJvbGxlcikge1xuICBtYXRlcmlhbENvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICBtYXRlcmlhbENvbnRyb2xsZXIub24oJ21hdGVyaWFsLXVwZGF0ZScsIGhhbmRsZU1hdGVyaWFsVXBkYXRlcyk7XG4gIHV0aWxzLmluaXQodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICB0b3RhbCA9IDA7XG4gIGZhcm1TaXplID0gMTtcbiAgY3VycmVudFRvdGFsID0gbnVsbDtcbiAgZGF0YSA9IFtdO1xuICBldmVudHMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gIHZhciBvcDtcblxuICBpZiggdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnICYmIGRhdGEuaW5kZXhPZihuYW1lKSA+IC0xICkge1xuICAgIG9wID0gZGF0YS5zcGxpY2UoZGF0YS5pbmRleE9mKG5hbWUpLCAxKVswXTtcbiAgICBmaXJlVXBkYXRlKCdvcGVyYXRpb24tcmVtb3ZlZCcsIHtvcGVyYXRpb246IG9wfSk7XG5cbiAgICByZXR1cm4gc3VjY2VzcygpO1xuICB9IGVsc2Uge1xuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGlmKCBkYXRhW2ldLm5hbWUgPT09IG5hbWUgICkge1xuICAgICAgICBvcCA9IGRhdGEuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICBmaXJlVXBkYXRlKCdvcGVyYXRpb24tcmVtb3ZlZCcsIHtvcGVyYXRpb246IG9wfSk7XG4gICAgICAgIHJldHVybiBzdWNjZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNldEVycm9yKCdvcGVyYXRpb24gJysodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnID8gbmFtZS5uYW1lIDogbmFtZSkrJyBkb2VzIG5vdCBleGlzdCcpO1xufVxuXG5mdW5jdGlvbiBhZGQob3BlcmF0aW9uLCBvcHRpb25zKSB7XG4gIGlmKCAhb3B0aW9ucyApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgb3AgPSBnZXQob3BlcmF0aW9uLm5hbWUpO1xuICBpZiggIW9wLmVycm9yICYmICFvcHRpb25zLnJlcGxhY2UgKSB7XG4gICAgcmV0dXJuIHNldEVycm9yKG9wZXJhdGlvbi5uYW1lLCAnb3BlcmF0aW9uIGFscmVhZHkgZXhpc3RzJyk7XG4gIH1cblxuICBpZiggIW9wZXJhdGlvbi5tYXRlcmlhbHMgKSB7XG4gICAgb3BlcmF0aW9uLm1hdGVyaWFscyA9IFtdO1xuICB9XG5cbiAgdmFyIGlzTmV3ID0gZmFsc2U7XG4gIGlmKCBvcC5lcnJvciApIHtcbiAgICBpc05ldyA9IHRydWU7XG4gICAgZGF0YS5wdXNoKG9wZXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtkYXRhLmluZGV4T2Yob3ApXSA9IG9wZXJhdGlvbjtcbiAgfVxuXG5cbiAgaWYoIG9wdGlvbnMucmVuYW1lICkge1xuICAgIHJlbW92ZShvcHRpb25zLnJlbmFtZSk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMubm9SZWNhbGMgKSB7XG4gICAgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLFxuICAgIGlzTmV3IDogaXNOZXcsXG4gICAgcmVwbGFjZWQgOiBvcHRpb25zLnJlbmFtZSxcbiAgICBmbGFnIDogb3B0aW9ucy5mbGFnLCAvLyBsZXQgdGhlIGNhbGxlciBwYXNzIGl0J3Mgb3duIGZsYWdzXG4gICAgc3VjY2VzcyA6IHRydWUsXG4gICAgZnJvbSA6ICdvcGVyYXRpb24tYWRkJ1xuICB9O1xuXG5cbiAgaWYoICFvcHRpb25zLm5vRXZlbnQgKSB7XG4gICAgZmlyZVVwZGF0ZSgnb3BlcmF0aW9uLXVwZGF0ZScsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gYnVsayBhZGQvdXBkYXRlIGl0ZW1zIHdpdGggb25seSBvbmUgcmVjYWxjXG5mdW5jdGlvbiBidWxrQWRkKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgdmFyIGFkZE9wdGlvbnMgPSB7fSwgaTtcbiAgZm9yKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XG4gICAgYWRkT3B0aW9uc1trZXldID0gb3B0aW9ucztcbiAgfVxuXG4gIGFkZE9wdGlvbnMubm9SZWNhbGMgPSB0cnVlO1xuICBhZGRPcHRpb25zLm5vRXZlbnQgPSB0cnVlO1xuXG4gIHZhciByZXNwb25zZXMgPSB7fTtcbiAgZm9yKCBpID0gMDsgaSA8IG9wZXJhdGlvbnMubGVuZ3RoOyBpKysgKSB7XG4gICAgcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0gPSBhZGQob3BlcmF0aW9uc1tpXSwgYWRkT3B0aW9ucyk7XG4gIH1cblxuICAvLyBub3cganVzdCByZWNhbGMgb25jZVxuICByZWNhbGMoKTtcblxuICBmb3IoIGkgPSAwOyBpIDwgb3BlcmF0aW9ucy5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0uZXJyb3IgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmVzcG9uc2VzW29wZXJhdGlvbnNbaV0ubmFtZV0uYmx1ayA9IHRydWU7XG4gICAgZmlyZVVwZGF0ZSgnb3BlcmF0aW9uLXVwZGF0ZScsIHJlc3BvbnNlc1tvcGVyYXRpb25zW2ldLm5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZXM7XG59XG5cbmZ1bmN0aW9uIGdldChuYW1lKSB7XG4gIGlmKCAhbmFtZSApIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggZGF0YVtpXS5uYW1lID09PSBuYW1lICkge1xuICAgICAgcmV0dXJuIGRhdGFbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNldEVycm9yKG5hbWUrJyBpcyBub3QgaW4gdGhlIG9wZXJhdGlvbiBsaXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGZpbmQodHh0LCBpZ25vcmUpIHtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnLionK3R4dCsnLionLCAnaScpO1xuICB2YXIgcmVzdWx0cyA9IFtdLCBrZXk7XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCBkYXRhW2ldLm5hbWUubWF0Y2gocmUpICYmIGRhdGFbaV0ubmFtZSAhPT0gaWdub3JlICkge1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG4vLyByZWNhbGMgYWxsIGNvbXBsZXggbWF0ZXJpYWwgY29zdHNcbmZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB2YXIgb3BlcmF0aW9uLCBtZXNzYWdlcyA9IFtdO1xuICB0b3RhbCA9IDA7XG4gIHZhciByYW5nZSA9IHtcbiAgICBzdGFydCA6IG51bGwsXG4gICAgc3RvcCA6IG51bGwsXG4gICAgYWxsIDogW11cbiAgfTtcblxuICBmb3IoIHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKysgKSB7XG4gICAgb3BlcmF0aW9uID0gZGF0YVtpXTtcbiAgICB2YXIgbmV3TWVzc2FnZXMgPSBvcGVyYXRpb25SZWNhbGMob3BlcmF0aW9uKTtcbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG5ld01lc3NhZ2VzLmxlbmd0aDsgaisrICkge1xuICAgICAgbWVzc2FnZXMucHVzaChuZXdNZXNzYWdlc1tqXSk7XG4gICAgfVxuXG4gICAgdmFyIHNjaGVkdWxlZCA9IG9wZXJhdGlvbi5zY2hlZHVsZSA/IG9wZXJhdGlvbi5zY2hlZHVsZS5sZW5ndGggOiAwO1xuXG4gICAgaWYoICFvcGVyYXRpb24uc2NoZWR1bGUgKSB7XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgaW5kZXggOiBpLFxuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgd2FybmluZyA6IHdhcm4oJ05vIHNjaGVkdWxlIHNldCcpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlU2NoZWR1bGVSYW5nZShvcGVyYXRpb24uc2NoZWR1bGUsIHJhbmdlLCBvcGVyYXRpb24ubmFtZSk7XG4gICAgfVxuXG4gICAgb3BlcmF0aW9uLnRvdGFsID0gc2NoZWR1bGVkICogb3BlcmF0aW9uLnN1YnRvdGFsO1xuICAgIHRvdGFsICs9IG9wZXJhdGlvbi50b3RhbDtcbiAgfVxuXG5cbiAgdmFyIHNwZW5kaW5nQnlNb250aCA9IHV0aWxzLmNhbGN1bGF0ZVBlck1vbnRoKHJhbmdlKTtcblxuICBpZiggZGVidWcgKSB7XG4gICAgY29uc29sZS5sb2coJ09wZXJhdGlvbiBSZWNhbGM6ICcrKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdCkrJ21zJyk7XG4gIH1cblxuICBjdXJyZW50VG90YWwgPSB7XG4gICAgdG90YWwgOiB0b3RhbCxcbiAgICByYW5nZSA6IHJhbmdlLFxuICAgIHNwZW5kaW5nQnlNb250aCA6IHNwZW5kaW5nQnlNb250aFxuICB9O1xuXG4gIGZpcmVVcGRhdGUoJ3RvdGFsLXVwZGF0ZScsIGN1cnJlbnRUb3RhbCk7XG5cbiAgbGFzdFJlY2FsY01zZyA9IG1lc3NhZ2VzO1xuICByZXR1cm4gbWVzc2FnZXM7XG59XG5cbmZ1bmN0aW9uIG9wZXJhdGlvblJlY2FsYyhvcGVyYXRpb24pIHtcbiAgdmFyIG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwsIG9wVG90YWwgPSAwO1xuICB2YXIgbWVzc2FnZXMgPSBbXTtcblxuICBmb3IoIHZhciBpID0gMDsgaSA8IG9wZXJhdGlvbi5tYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgbWF0ZXJpYWxJbXBsID0gb3BlcmF0aW9uLm1hdGVyaWFsc1tpXTtcbiAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSBudWxsO1xuXG4gICAgbWF0ZXJpYWxEZWYgPSBtYXRlcmlhbENvbnRyb2xsZXIuZ2V0KG1hdGVyaWFsSW1wbC5uYW1lKTtcblxuICAgIC8vIHdhcyBhIHNwZWNpZmllZCBtYXRlcmlhbCBub3QgZm91bmQ/XG4gICAgaWYoIG1hdGVyaWFsRGVmLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWxJbXBsLmVycm9yID0gbWF0ZXJpYWxEZWY7IC8vIHRoaXMgaXMgYWN0dWFsbHkgdGhlIGVycm9yIHJlc3BvbnNlIG9iamVjdFxuICAgICAgbWVzc2FnZXMucHVzaCh7XG4gICAgICAgIGlkIDogbWF0ZXJpYWxJbXBsLmlkLFxuICAgICAgICBtYXRlcmlhbCA6IG1hdGVyaWFsSW1wbC5uYW1lLFxuICAgICAgICBvcGVyYXRpb24gOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgZXJyb3IgOiBtYXRlcmlhbERlZlxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB3YXMgYSBtYXRlcmlhbCBhbW91bnQgbm90IHNwZWNpZmllZD9cbiAgICBpZiggdHlwZW9mIG1hdGVyaWFsRGVmLnByaWNlICE9PSAnbnVtYmVyJyB8fCBpc05hTihtYXRlcmlhbERlZi5wcmljZSkgKSB7XG4gICAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSBzZXRFcnJvcihtYXRlcmlhbERlZi5uYW1lKycgZm91bmQgYnV0IHByaWNlIGlzIG5vdCBhIG51bWJlci4nKTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBpZCA6IG1hdGVyaWFsSW1wbC5pZCxcbiAgICAgICAgbWF0ZXJpYWwgOiBtYXRlcmlhbEltcGwubmFtZSxcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIHdhcm5pbmcgOiBtYXRlcmlhbEltcGwuZXJyb3JcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gd2FzIGEgbWF0ZXJpYWwgYW1vdW50IG5vdCBzcGVjaWZpZWQ/XG4gICAgaWYoIG1hdGVyaWFsSW1wbC5hbW91bnQgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIG1hdGVyaWFsSW1wbC53YXJuaW5nID0gd2FybignTm8gYW1vdW50IHNldC4gIFNldHRpbmcgdG8gMS4nKTtcbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBpZCA6IG1hdGVyaWFsSW1wbC5pZCxcbiAgICAgICAgbWF0ZXJpYWwgOiBtYXRlcmlhbEltcGwubmFtZSxcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIHdhcm5pbmcgOiBtYXRlcmlhbEltcGwud2FybmluZ1xuICAgICAgfSk7XG4gICAgICBtYXRlcmlhbEltcGwuYW1vdW50ID0gMTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB1bml0cy5jYWxjdWxhdGVPcE1hdGVyaWFsUHJpY2UobWF0ZXJpYWxEZWYsIG1hdGVyaWFsSW1wbCk7XG4gICAgaWYoIHZhbHVlLmVycm9yICkge1xuICAgICAgbWF0ZXJpYWxJbXBsLnByaWNlID0gMDtcbiAgICAgIG1hdGVyaWFsSW1wbC5lcnJvciA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRlcmlhbEltcGwucHJpY2UgPSB2YWx1ZS52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBkaWQgc29tZXRoaW5nIGJhZCBoYXBwZW4gaW4gcHJpY2UgY2FsY3VsYXRpb24/XG4gICAgaWYoIGlzTmFOKG1hdGVyaWFsSW1wbC5wcmljZSkgKSB7XG4gICAgICBtYXRlcmlhbEltcGwuZXJyb3IgPSBzZXRFcnJvcignUHJpY2UgY2FsY3VsYXRlZCB0byBOYU4uICBNYXRlcmlhbCBub3QgaW5jbHVkZWQgaW4gdG90YWwuJyk7XG4gICAgICBtZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgb3BlcmF0aW9uIDogb3BlcmF0aW9uLm5hbWUsXG4gICAgICAgIG1hdGVyaWFsIDogbWF0ZXJpYWxJbXBsLm5hbWUsXG4gICAgICAgIGlkIDogbWF0ZXJpYWxJbXBsLmlkLFxuICAgICAgICBlcnJvciA6IG1hdGVyaWFsSW1wbC5lcnJvclxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBvcFRvdGFsICs9IG1hdGVyaWFsSW1wbC5wcmljZTtcbiAgfVxuXG4gIG9wZXJhdGlvbi5zdWJ0b3RhbCA9IG9wVG90YWw7XG5cbiAgcmV0dXJuIG1lc3NhZ2VzO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVNjaGVkdWxlUmFuZ2Uoc2NoZWR1bGUsIHJhbmdlLCBuYW1lKSB7XG4gIHZhciBwYXJ0cywgZGF0ZTtcbiAgc2NoZWR1bGUuZm9yRWFjaChmdW5jdGlvbihkKXtcbiAgICBwYXJ0cyA9IGQuZGF0ZS5zcGxpdCgnLScpO1xuICAgIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChwYXJ0c1swXSksIHBhcnNlSW50KHBhcnRzWzFdKS0xLCBwYXJzZUludChwYXJ0c1syXSkpO1xuXG4gICAgdmFyIGludGVydmFsID0ge1xuICAgICAgZGF0ZSA6IGRhdGUsXG4gICAgICBsZW5ndGggOiBkLmxlbmd0aCxcbiAgICAgIHVuaXRzIDogZC51bml0cyxcbiAgICAgIG5hbWUgOiBuYW1lXG4gICAgfTtcblxuICAgIHJhbmdlLmFsbC5wdXNoKGludGVydmFsKTtcblxuICAgIGlmKCByYW5nZS5zdGFydCA9PT0gbnVsbCApIHtcbiAgICAgIHJhbmdlLnN0YXJ0ID0gZGF0ZTtcbiAgICB9IGVsc2UgaWYoIHJhbmdlLnN0YXJ0LmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpICkge1xuICAgICAgcmFuZ2Uuc3RhcnQgPSBkYXRlO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBnZXRTdG9wRGF0ZShpbnRlcnZhbCk7XG4gICAgaWYoIHJhbmdlLnN0b3AgPT09IG51bGwgKSB7XG4gICAgICByYW5nZS5zdG9wID0gZW5kO1xuICAgIH0gZWxzZSBpZiggcmFuZ2Uuc3RvcC5nZXRUaW1lKCkgPCBlbmQuZ2V0VGltZSgpICkge1xuICAgICAgcmFuZ2Uuc3RvcCA9IGVuZDtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9wRGF0ZShpbnRlcnZhbCkge1xuICB2YXIgbCA9IHBhcnNlSW50KGludGVydmFsLmxlbmd0aCk7XG5cbiAgaWYoIGludGVydmFsLnVuaXRzID09PSAneWVhcicgKSB7XG4gICAgbCA9IGwgKiA4NjQwMDAwMCAqIDM2NTtcbiAgfSBlbHNlIGlmKCBpbnRlcnZhbC51bml0cyA9PT0gJ2RheScgKSB7XG4gICAgbCA9IGwgKiA4NjQwMDAwMDtcbiAgfSBlbHNlIHtcbiAgICBsID0gbCAqIDg2NDAwMDAwICogMzA7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUoaW50ZXJ2YWwuZGF0ZS5nZXRUaW1lKCkrbCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1hdGVyaWFsVXBkYXRlcyhlKSB7XG5cbiAgaWYoIGUuYmx1ayApIHtcbiAgICByZXR1cm47IC8vIGlnbm9yZSBldmVudCBmcm9tIGJsdWsgdXBkYXRlc1xuICAgIC8vIGJsdWsgdXBkYXRlciB3aWxsIG1hbnVhbGx5IHBva2UgcmVjYWxjKCk7XG4gIH1cblxuICB2YXIgbWF0ZXJpYWwgPSBlLm1hdGVyaWFsO1xuICB2YXIgcmVwbGFjZWQgPSBlLnJlcGxhY2VkO1xuXG4gIHJlY2FsYygpO1xuXG4gIGZvciggdmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gZGF0YVtpXTtcbiAgICB2YXIgZmlyZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBvcGVyYXRpb24ubWF0ZXJpYWxzLmxlbmd0aDsgaisrICkge1xuICAgICAgdmFyIG1hdGVyaWFsSW1wbCA9IG9wZXJhdGlvbi5tYXRlcmlhbHNbal07XG5cbiAgICAgIC8vIHVwZGF0ZSBhbnkgcmVuYW1lc1xuICAgICAgaWYoIG1hdGVyaWFsSW1wbC5uYW1lID09PSByZXBsYWNlZCApIHtcbiAgICAgICAgbWF0ZXJpYWxJbXBsLm5hbWUgPSBtYXRlcmlhbC5uYW1lO1xuICAgICAgICBmaXJlQ2hhbmdlID0gdHJ1ZTtcblxuICAgICAgLy8gbG9vayB0byBzZWUgaWYgdGhpcyBvcGVyYXRpb24gaGFzIHRoZSB1cGRhdGVkIG1hdGVyaWFsXG4gICAgICAvLyByZWN1cnNpdmVseSBjaGVjayBjb21wbGV4IGVsZW1lbnRzXG4gICAgICB9IGVsc2UgaWYoIG1hdGVyaWFsQ29udHJvbGxlci5jb250YWlucyhtYXRlcmlhbEltcGwsIG1hdGVyaWFsLm5hbWUsIHJlcGxhY2VkKSApIHtcbiAgICAgICAgICBmaXJlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIGZpcmVDaGFuZ2UgKSB7XG4gICAgICAgIGZpcmVVcGRhdGUoJ29wZXJhdGlvbi11cGRhdGUnLCB7XG4gICAgICAgICAgb3BlcmF0aW9uOiBvcGVyYXRpb24sXG4gICAgICAgICAgZnJvbSA6ICdtYXRlcmlhbC11cGRhdGUnXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RmFybVNpemUoc2l6ZSkge1xuICBmYXJtU2l6ZSA9IHNpemU7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RSZWNhbGNNc2coKSB7XG4gIHJldHVybiBsYXN0UmVjYWxjTXNnO1xufVxuXG5mdW5jdGlvbiBzdWNjZXNzKCkge1xuICByZXR1cm4ge3N1Y2Nlc3M6IHRydWV9O1xufVxuXG5mdW5jdGlvbiBzZXRFcnJvcihtc2cpIHtcbiAgcmV0dXJuIHtcbiAgICBlcnJvciA6IHRydWUsXG4gICAgbWVzc2FnZSA6IG1zZ1xuICB9O1xufVxuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICByZXR1cm4ge1xuICAgIHdhcm5pbmcgOiB0cnVlLFxuICAgIG1lc3NhZ2UgOiBtc2dcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFRvdGFsKCkge1xuICByZXR1cm4gY3VycmVudFRvdGFsO1xufVxuXG5mdW5jdGlvbiBhZGRVcGRhdGVNYXRlcmlhbChvcGVyYXRpb24sIG1hdGVyaWFsKSB7XG4gIHZhciByZXNwID0gdXRpbHMuYWRkVXBkYXRlTWF0ZXJpYWwob3BlcmF0aW9uLCBtYXRlcmlhbCk7XG4gIGZpcmVVcGRhdGUoJ21hdGVyaWFsLWFkZGVkJyx7XG4gICAgbWF0ZXJpYWwgOiBtYXRlcmlhbC5uYW1lLFxuICAgIG9wZXJhdGlvbiA6IG9wZXJhdGlvbi5uYW1lXG4gIH0pO1xuICByZXR1cm4gcmVzcDtcbn1cblxuLy8gZmlyZSBldmVudCBhbmQgZ2VuZXJhbCB1cGRhdGUgZXZlbnRcbmZ1bmN0aW9uIGZpcmVVcGRhdGUoZSwgZGV0YWlscykge1xuICAvLyBnaXZlIFVJIGEgc2VjIHRvIHJ1blxuICAvLyBUT0RPOiB0aGlzIHNob3VsZCBub3QgYmUgdGhlIGNvbnRyb2xsZXJzIHJlcG9uc2liaWxpdHlcbiAgLypzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgaWYoIGUgKSB7XG4gICAgICBldmVudHMuZW1pdChlLGRldGFpbHMpO1xuICAgIH1cbiAgICBldmVudHMuZW1pdCgndXBkYXRlJyk7XG4gIH0sIDEwMCk7Ki9cbiAgaWYoIGUgKSB7XG4gICAgZXZlbnRzLmVtaXQoZSxkZXRhaWxzKTtcbiAgfVxuICBldmVudHMuZW1pdCgndXBkYXRlJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQgOiBhZGQsXG4gIGdldCA6IGdldCxcbiAgcmVtb3ZlIDogcmVtb3ZlLFxuICBidWxrQWRkIDogYnVsa0FkZCxcbiAgZmluZCA6IGZpbmQsXG4gIG9uIDogZnVuY3Rpb24oZXZlbnQsIGxpc3RlbmVyKXtcbiAgICBldmVudHMub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSxcbiAgcmVtb3ZlTGlzdGVuZXIgOiBmdW5jdGlvbihldmVudCwgbGlzdGVuZXIpe1xuICAgIGV2ZW50cy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICB9LFxuICByZWNhbGMgOiByZWNhbGMsXG4gIGluaXQgOiBpbml0LFxuICBnZXRMYXN0UmVjYWxjTXNnIDogZ2V0TGFzdFJlY2FsY01zZyxcbiAgYWRkVXBkYXRlTWF0ZXJpYWwgOiBhZGRVcGRhdGVNYXRlcmlhbCxcbiAgcmVwbGFjZU1hdGVyaWFsIDogdXRpbHMucmVwbGFjZU1hdGVyaWFsLFxuICBzZXRGYXJtU2l6ZSA6IHNldEZhcm1TaXplLFxuICBnZXRDdXJyZW50VG90YWwgOiBnZXRDdXJyZW50VG90YWwsXG4gIHJlc2V0IDogcmVzZXQsXG4gIGZpcmVVcGRhdGUgOiBmaXJlVXBkYXRlLFxuICAvLyBtb3N0bHkgZm9yIHVuaXQgdGVzdGluZ1xuICBnZXRFdmVudHNNb2R1bGUgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZXZlbnRzO1xuICB9LFxuICBkZWJ1ZyA6IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICBkZWJ1ZyA9IG1vZGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dWlkID0gcmVxdWlyZSgnbm9kZS11dWlkJyk7XG52YXIgb3BlcmF0aW9uQ29udHJvbGxlcjtcbnZhciBtc1BlckRheSA9IDg2NDAwMDAwO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRyb2xsZXIpIHtcbiAgb3BlcmF0aW9uQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG59XG5cbmZ1bmN0aW9uIGFkZFVwZGF0ZU1hdGVyaWFsKG9wZXJhdGlvbiwgbWF0ZXJpYWxJbXBsKSB7XG4gIGlmKCAhbWF0ZXJpYWxJbXBsLmlkICkge1xuICAgIG1hdGVyaWFsSW1wbC5pZCA9IHV1aWQudjQoKTtcbiAgICBvcGVyYXRpb24ubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWxJbXBsKTtcbiAgICByZXR1cm4ge3N1Y2Nlc3M6dHJ1ZSwgbWVzc2FnZTogJ2FkZGVkJ307XG4gIH1cblxuICBmb3IoIHZhciBpID0gMDsgaSA8IG9wZXJhdGlvbi5tYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIG9wZXJhdGlvbi5tYXRlcmlhbHNbaV0uaWQgPT09IG1hdGVyaWFsSW1wbC5pZCApIHtcbiAgICAgIG9wZXJhdGlvbi5tYXRlcmlhbHNbaV0gPSBtYXRlcmlhbEltcGw7XG4gICAgICByZXR1cm4ge3N1Y2Nlc3M6dHJ1ZSwgbWVzc2FnZTogJ3VwZGF0ZWQnfTtcbiAgICB9XG4gIH1cblxuICBvcGVyYXRpb24ubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWxJbXBsKTtcbiAgcmV0dXJuIHtzdWNjZXNzOnRydWUsIG1lc3NhZ2U6ICdhZGRlZCd9O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlTWF0ZXJpYWwobWF0ZXJpYWxOYW1lLCBuZXdJZCkge1xuICB2YXIgb3BzID0gb3BlcmF0aW9uQ29udHJvbGxlci5nZXQoKTtcblxuICBmb3IoIHZhciBpID0gMDsgaSA8IG9wcy5sZW5ndGg7IGkrKyApIHtcbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IG9wc1tpXS5tYXRlcmlhbHMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpZiggb3BzW2ldLm1hdGVyaWFsc1tqXS5uYW1lID09PSBtYXRlcmlhbE5hbWUgKSB7XG4gICAgICAgIG9wc1tpXS5tYXRlcmlhbHNbal0uaWQgPSBuZXdJZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUGVyTW9udGgocmFuZ2UpIHtcblxuICB2YXIgbnVtTW9udGhzID0gZ2V0TnVtTW9udGhzKHJhbmdlKTtcblxuICB2YXIgbW9udGhzID0gW107XG5cbiAgaWYoICFyYW5nZS5zdGFydCApIHtcbiAgICByZXR1cm4gbW9udGhzO1xuICB9XG5cbiAgdmFyIGxhc3QgPSByYW5nZS5zdGFydDtcbiAgbW9udGhzLnB1c2goe1xuICAgIG1vbnRoIDogdG9Nb250aFN0cmluZyhsYXN0KSxcbiAgICB0b3RhbCA6IDBcbiAgfSk7XG5cbiAgZm9yKCB2YXIgaSA9IDE7IGkgPCBudW1Nb250aHM7IGkrKyApIHtcbiAgICBsYXN0ID0gbmV4dE1vbnRoKGxhc3QpO1xuXG4gICAgbW9udGhzLnB1c2goe1xuICAgICAgbW9udGggOiB0b01vbnRoU3RyaW5nKGxhc3QpLFxuICAgICAgdG90YWwgOiAwXG4gICAgfSk7XG4gIH1cblxuICB2YXIgb3BlcmF0aW9ucyA9IG9wZXJhdGlvbkNvbnRyb2xsZXIuZ2V0KCk7XG4gIGZvciggdmFyIHogPSAwOyB6IDwgb3BlcmF0aW9ucy5sZW5ndGg7IHorKyApIHtcbiAgICB2YXIgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1t6XTtcbiAgICBpZiggIW9wZXJhdGlvbi5zY2hlZHVsZSApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGZvciggdmFyIGogPSAwOyBqIDwgb3BlcmF0aW9uLnNjaGVkdWxlLmxlbmd0aDsgaisrICkge1xuICAgICAgdmFyIGRhdGUgPSBvcGVyYXRpb24uc2NoZWR1bGVbal07XG5cbiAgICAgIHZhciBkID0gdG9EYXRlKGRhdGUuZGF0ZSk7XG4gICAgICB2YXIgaW5kZXggPSBnZXRNb250aEluZGV4KHRvTW9udGhTdHJpbmcoZCksIG1vbnRocyk7XG4gICAgICB2YXIgbGVuZ3RoID0gZ2V0SW50ZXJ2YWxUaW1lKGRhdGUpO1xuXG4gICAgICBmb3IoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGlmKCBtb250aHMubGVuZ3RoIDw9IGkraW5kZXggKSB7XG4gICAgICAgICAgbW9udGhzLnB1c2goe1xuICAgICAgICAgICAgbW9udGggOiB0b01vbnRoU3RyaW5nKGQpLFxuICAgICAgICAgICAgdG90YWwgOiAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtb250aHNbaStpbmRleF0udG90YWwgKz0gKG9wZXJhdGlvbi5zdWJ0b3RhbCAvIGxlbmd0aCk7XG4gICAgICAgIG1vbnRoc1tpK2luZGV4XVtvcGVyYXRpb24ubmFtZV0gPSBvcGVyYXRpb24uc3VidG90YWwgLyBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1vbnRocztcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGhJbmRleChtb250aCwgbW9udGhzKSB7XG4gIHZhciB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgbW9udGhzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCBtb250aHNbaV0ubW9udGggPT09IG1vbnRoICkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiB0b0RhdGUoZGF0ZVN0cikge1xuICB2YXIgcGFydHMgPSBkYXRlU3RyLnNwbGl0KCctJyk7XG4gIHJldHVybiBuZXcgRGF0ZShwYXJzZUludChwYXJ0c1swXSksIHBhcnNlSW50KHBhcnRzWzFdKS0xLCBwYXJzZUludChwYXJ0c1syXSkpO1xufVxuXG5mdW5jdGlvbiB0b01vbnRoU3RyaW5nKGRhdGUpIHtcbiAgaWYoICFkYXRlICkge1xuICAgIHJldHVybiAnMS8xOTAwJztcbiAgfVxuICByZXR1cm4gKGRhdGUuZ2V0TW9udGgoKSsxKSsnLycrKGRhdGUuZ2V0WWVhcigpKzE5MDApO1xufVxuXG5mdW5jdGlvbiBuZXh0TW9udGgoZGF0ZSkge1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRZZWFyKCkrMTkwMCwgZGF0ZS5nZXRNb250aCgpKzEsIGRhdGUuZ2V0RGF0ZSgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TnVtTW9udGhzKHJhbmdlKSB7XG4gIGlmKCAhcmFuZ2Uuc3RvcCB8fCAhcmFuZ2Uuc3RhcnQgKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgZGlmZiA9IHJhbmdlLnN0b3AuZ2V0VGltZSgpIC0gcmFuZ2Uuc3RhcnQuZ2V0VGltZSgpO1xuICBpZiggZGlmZiA8IDg2NDAwMDAwICogMzAgKSB7XG4gICAgZGlmZiA9IDg2NDAwMDAwICogMzA7XG4gIH1cblxuICAvLyBNb250aHMgYmV0d2VlbiB5ZWFycy5cbiAgdmFyIG1vbnRocyA9IChyYW5nZS5zdG9wLmdldEZ1bGxZZWFyKCkgLSByYW5nZS5zdGFydC5nZXRGdWxsWWVhcigpKSAqIDEyO1xuXG4gIC8vIE1vbnRocyBiZXR3ZWVuLi4uIG1vbnRocy5cbiAgbW9udGhzICs9IHJhbmdlLnN0b3AuZ2V0TW9udGgoKSAtIHJhbmdlLnN0YXJ0LmdldE1vbnRoKCk7XG5cbiAgLy8gU3VidHJhY3Qgb25lIG1vbnRoIGlmIGIncyBkYXRlIGlzIGxlc3MgdGhhdCBhJ3MuXG4gIGlmIChyYW5nZS5zdG9wLmdldERhdGUoKSA8IHJhbmdlLnN0YXJ0LmdldERhdGUoKSkge1xuICAgICAgbW9udGhzLS07XG4gIH1cblxuICByZXR1cm4gbW9udGhzO1xuXG4gIC8vdmFyIGRheXMgPSBkaWZmIC8gODY0MDAwMDA7XG4gIC8vcmV0dXJuIE1hdGguY2VpbChkYXlzIC8gMzApO1xufVxuXG5mdW5jdGlvbiBnZXRJbnRlcnZhbFRpbWUoZGF0ZSkge1xuICB2YXIgbCA9IHBhcnNlSW50KGRhdGUubGVuZ3RoKTtcbiAgaWYoIGRhdGUudW5pdHMgPT09ICd5ZWFyJyApIHtcbiAgICByZXR1cm4gbCAqIDEyO1xuICB9IGVsc2UgaWYoIGRhdGUudW5pdHMgPT09ICdtb250aCcgKSB7XG4gICAgcmV0dXJuIGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQgOiBpbml0LFxuICBjYWxjdWxhdGVQZXJNb250aCA6IGNhbGN1bGF0ZVBlck1vbnRoLFxuICBhZGRVcGRhdGVNYXRlcmlhbCA6IGFkZFVwZGF0ZU1hdGVyaWFsLFxuICByZXBsYWNlTWF0ZXJpYWwgOiByZXBsYWNlTWF0ZXJpYWxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBzY2hlbWEgPSByZXF1aXJlKCcuL3NjaGVtYScpKCk7XG5cbnZhciBvcmlnaW5hbFN0YXRlID0ge307XG52YXIgb3JpZ2luYWxJZHMgPSB7fTtcblxuLy8gc2V0IHRoZSBpbml0aWFsIHN0YXRlIG9mIGEgYnVkZ2V0XG5mdW5jdGlvbiBpbml0KGJ1ZGdldCkge1xuICBvcmlnaW5hbFN0YXRlID0gZXh0ZW5kKHRydWUsIHt9LCBidWRnZXQpO1xuICBvcmlnaW5hbElkcyA9IHt9O1xuICBpZiggIW9yaWdpbmFsU3RhdGUubWF0ZXJpYWxzICkge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IoIHZhciBpID0gMDsgaSA8IG9yaWdpbmFsU3RhdGUubWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIG9yaWdpbmFsSWRzW29yaWdpbmFsU3RhdGUubWF0ZXJpYWxzW2ldLmlkXSA9IDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tCdWRnZXQoYnVkZ2V0KSB7XG4gIGlmKCAhYnVkZ2V0ICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiggIW9yaWdpbmFsU3RhdGUgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBoYXNDaGFuZ2VzKHNjaGVtYS5idWRnZXQsIG9yaWdpbmFsU3RhdGUsIGJ1ZGdldCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTWF0ZXJpYWxzKG1hdGVyaWFscykge1xuICB2YXIgaTtcbiAgaWYoIG1hdGVyaWFscy5sZW5ndGggIT09IE9iamVjdC5rZXlzKG9yaWdpbmFsSWRzKS5sZW5ndGggKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmb3IoIGkgPSAwOyBpIDwgbWF0ZXJpYWxzLmxlbmd0aDsgaSsrICkge1xuICAgIGlmKCAhbWF0ZXJpYWxzW2ldLmlkICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKCAhb3JpZ2luYWxJZHNbbWF0ZXJpYWxzW2ldLmlkXSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWF0ZXJpYWxDaGFuZ2VzKG1hdGVyaWFscywgdXNlcikge1xuICB2YXIgaSwgcmVzdWx0ID0gW107XG4gIGZvciggaSA9IDA7IGkgPCBtYXRlcmlhbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgaWYoIG1hdGVyaWFsc1tpXS5maXhlZCApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmKCBtYXRlcmlhbHNbaV0uaWQgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHJlc3VsdC5tYXRlcmlhbHMucHVzaCh7XG4gICAgICAgIG5hbWUgOiBtYXRlcmlhbHNbaV0ubmFtZSxcbiAgICAgICAgaXNOZXcgOiB0cnVlLFxuICAgICAgICBhY2Nlc3MgOiB0cnVlLFxuICAgICAgICBjaGFuZ2VzIDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgb3JpZ2luYWxNYXRlcmlhbCA9IGdldEJ5SWQobWF0ZXJpYWxzW2ldLmlkKTtcblxuICAgIGlmKCBvcmlnaW5hbE1hdGVyaWFsLnR5cGUgIT09IG1hdGVyaWFsc1tpXS50eXBlICkge1xuICAgICAgcmVzdWx0Lm1hdGVyaWFscy5wdXNoKHtcbiAgICAgICAgY2hhbmdlcyA6IHRydWUsXG4gICAgICAgIGFjY2VzcyA6ICh1c2VyLmF1dGhvcml0aWVzLmluZGV4T2Yob3JpZ2luYWxNYXRlcmlhbC5hdXRob3JpdHkpID4gLTEpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBvcmlnaW5hbCA6IG9yaWdpbmFsTWF0ZXJpYWwsXG4gICAgICAgIGlkIDogbWF0ZXJpYWxzW2ldLmlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYoIG9yaWdpbmFsTWF0ZXJpYWwudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgICAgcmVzdWx0Lm1hdGVyaWFscy5wdXNoKHtcbiAgICAgICAgY2hhbmdlcyA6IGhhc0NoYW5nZXMoc2NoZW1hLmNvbXBsZXhNYXRlcmlhbCwgb3JpZ2luYWxNYXRlcmlhbCwgbWF0ZXJpYWxzW2ldKSxcbiAgICAgICAgYWNjZXNzIDogKHVzZXIuYXV0aG9yaXRpZXMuaW5kZXhPZihvcmlnaW5hbE1hdGVyaWFsLmF1dGhvcml0eSkgPiAtMSkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIG9yaWdpbmFsIDogb3JpZ2luYWxNYXRlcmlhbCxcbiAgICAgICAgaWQgOiBtYXRlcmlhbHNbaV0uaWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQubWF0ZXJpYWxzLnB1c2goe1xuICAgICAgICBjaGFuZ2VzIDogaGFzQ2hhbmdlcyhzY2hlbWEubWF0ZXJpYWwsIG9yaWdpbmFsTWF0ZXJpYWwsIG1hdGVyaWFsc1tpXSksXG4gICAgICAgIGFjY2VzcyA6ICh1c2VyLmF1dGhvcml0aWVzLmluZGV4T2Yob3JpZ2luYWxNYXRlcmlhbC5hdXRob3JpdHkpID4gLTEpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBvcmlnaW5hbCA6IG9yaWdpbmFsTWF0ZXJpYWwsXG4gICAgICAgIGlkIDogbWF0ZXJpYWxzW2ldLmlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vLyBjaGVjayB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIGJ1ZGdldFxuLy8gaWYgdXNlciBwcm92aWRlZCwgcGVybWlzc2lvbnMgd2lsbCBiZSBjaGVja2VkIGFzIHdlbGxcbmZ1bmN0aW9uIGNoZWNrKGJ1ZGdldCwgdXNlcikge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIGJ1ZGdldCA6IHtcbiAgICAgIGNoYW5nZXMgOiBmYWxzZSxcbiAgICAgIGFjY2VzcyA6IGZhbHNlLFxuICAgIH0sXG4gICAgbWF0ZXJpYWxzIDogW11cbiAgfTtcblxuXG4gIHJlc3VsdC5idWRnZXQuY2hhbmdlcyA9IGhhc0NoYW5nZXMoc2NoZW1hLmJ1ZGdldCwgb3JpZ2luYWxTdGF0ZSwgYnVkZ2V0KTtcbiAgaWYoIHVzZXIuYXV0aG9yaXRpZXMuaW5kZXhPZihidWRnZXQuYXV0aG9yaXR5KSA+IC0xICkge1xuICAgIHJlc3VsdC5idWRnZXQuYWNjZXNzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFN0YXRlLm1hdGVyaWFscy5sZW5ndGg7IGkrKyApIHtcbiAgICBpZiggb3JpZ2luYWxTdGF0ZS5tYXRlcmlhbHNbaV0uaWQgPT09IGlkICkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsU3RhdGUubWF0ZXJpYWxzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNDaGFuZ2VzKHNjaGVtYSwgb3JpZ2luYWwsIG9iamVjdCkge1xuICBmb3IoIHZhciBrZXkgaW4gc2NoZW1hICkge1xuICAgIGlmKCBvcmlnaW5hbFtrZXldID09PSB1bmRlZmluZWQgfHwgb2JqZWN0W2tleV0gPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGlmKCBrZXlEaWZmKGtleSwgb3JpZ2luYWwsIG9iamVjdCkgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHBhcmFtID0gc2NoZW1hW2tleV0sIGNoYW5nZXM7XG5cbiAgICBpZiggcGFyYW0gPT09ICdzdHJpbmcnIHx8IHBhcmFtID09PSAnbnVtYmVyJykge1xuICAgICAgaWYoIG9yaWdpbmFsW2tleV0rJycgIT09IG9iamVjdFtrZXldKycnICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCBBcnJheS5pc0FycmF5KHBhcmFtKSApIHtcblxuICAgICAgaWYoIGtleURpZmYoa2V5LCBvcmlnaW5hbCwgb2JqZWN0KSApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYoIHBhcmFtWzBdLl9vYmplY3RfYXJyYXlfICkge1xuICAgICAgICBjaGFuZ2VzID0gY2hlY2tPYmplY3RBcnJheShwYXJhbVswXSwgb3JpZ2luYWxba2V5XSwgb2JqZWN0W2tleV0pO1xuICAgICAgICBpZiggY2hhbmdlcyApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmKCBvcmlnaW5hbFtrZXldLmxlbmd0aCAhPT0gb2JqZWN0W2tleV0ubGVuZ3RoICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFtrZXldLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBpZiggaGFzQ2hhbmdlcyhwYXJhbVswXSwgb3JpZ2luYWxba2V5XVtpXSwgb2JqZWN0W2tleV1baV0pICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnICkge1xuICAgICAgaWYoIGhhc0NoYW5nZXMocGFyYW0sIG9yaWdpbmFsW2tleV0sIG9iamVjdFtrZXldKSApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja09iamVjdEFycmF5KHBhcmFtLCBvcmlnaW5hbCwgb2JqZWN0KSB7XG4gIHZhciBrZXk7XG4gIGZvcigga2V5IGluIG9yaWdpbmFsICkge1xuICAgIGlmKCAhb2JqZWN0W2tleV0gKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hhbmdlcyA9IGhhc0NoYW5nZXMocGFyYW0sIG9yaWdpbmFsW2tleV0sIG9iamVjdFtrZXldKTtcbiAgICBpZiggY2hhbmdlcyApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZvcigga2V5IGluIG9iamVjdCApIHtcbiAgICBpZiggIW9yaWdpbmFsW2tleV0gKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTW9uZ29EQiBkb2VzIG5vdCBzdG9yZSBlbXB0eSBhcnJheXMsIHNvIHVuZGVmaW5lZCA9PT0gW10gc2hvdWxkIG5vdCB0cmlwIGEgY2hhbmdlXG5mdW5jdGlvbiBrZXlEaWZmKGtleSwgb3JpZ2luYWwsIG9iamVjdCkge1xuICBpZiggb3JpZ2luYWxba2V5XSA9PT0gdW5kZWZpbmVkIHx8IG9iamVjdFtrZXldID09PSB1bmRlZmluZWQgICkge1xuICAgIGlmKCBvcmlnaW5hbFtrZXldID09PSB1bmRlZmluZWQgJiYgb2JqZWN0W2tleV0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGlmKCBBcnJheS5pc0FycmF5KG9iamVjdFtrZXldKSAmJiBvYmplY3Rba2V5XS5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmKCBvcmlnaW5hbFtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0W2tleV0gPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGlmKCBBcnJheS5pc0FycmF5KG9yaWdpbmFsW2tleV0pICYmIG9yaWdpbmFsW2tleV0ubGVuZ3RoID09PSAwICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzY2hlbWEgOiBzY2hlbWEsXG4gIGluaXQgOiBpbml0LFxuICBzdHJpcCA6IHJlcXVpcmUoJy4vc3RyaXAnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBidWRnZXQgOiB7XG4gICAgICBhdXRob3JpdHkgOiAnc3RyaW5nJyxcbiAgICAgIGxvY2FsaXR5IDogJ2FycmF5JyxcbiAgICAgIG5hbWUgOiAnc3RyaW5nJyxcbiAgICAgIGlkIDogJ3N0cmluZycsXG4gICAgICBtYXRlcmlhbElkcyA6ICdhcnJheScsXG4gICAgICByZWZlcmVuY2UgOiAnc3RyaW5nJyxcbiAgICAgIGRlbGV0ZWQgOiAnYm9vbGVhbicsXG4gICAgICBjb21tb2RpdHkgOiAnc3RyaW5nJyxcblxuICAgICAgZmFybSA6IHtcbiAgICAgICAgbmFtZSA6ICdzdHJpbmcnLFxuICAgICAgICBzaXplIDogJ3N0cmluZycsXG4gICAgICAgIHVuaXRzIDogJ3N0cmluZydcbiAgICAgIH0sXG5cbiAgICAgIG9wZXJhdGlvbnMgOiBbe1xuICAgICAgICBuYW1lIDogJ3N0cmluZycsXG4gICAgICAgIHVuaXRzIDogJ3N0cmluZycsXG5cbiAgICAgICAgc2NoZWR1bGUgOiBbe1xuICAgICAgICAgIGRhdGUgOiAnc3RyaW5nJyxcbiAgICAgICAgICBsZW5ndGggOiAnc3RyaW5nJyxcbiAgICAgICAgICB1bml0cyA6ICdzdHJpbmcnXG4gICAgICAgIH1dLFxuXG4gICAgICAgIG1hdGVyaWFscyA6IFt7XG4gICAgICAgICAgYW1vdW50IDogJ251bWJlcicsXG4gICAgICAgICAgaWQgOiAnc3RyaW5nJyxcbiAgICAgICAgICBuYW1lIDogJ3N0cmluZycsXG4gICAgICAgICAgbm90ZSA6ICdzdHJpbmcnLFxuICAgICAgICAgIHVuaXRzIDogJ3N0cmluZydcbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfSxcblxuICAgIG1hdGVyaWFsIDoge1xuICAgICAgYXV0aG9yaXR5IDogJ3N0cmluZycsXG4gICAgICBzb3VyY2UgOiAnc3RyaW5nJyxcbiAgICAgIGNsYXNzIDogJ3N0cmluZycsXG4gICAgICBpZCA6ICdzdHJpbmcnLFxuICAgICAgbG9jYWxpdHkgOiAnYXJyYXknLFxuICAgICAgbmFtZSA6ICdzdHJpbmcnLFxuICAgICAgZGVzY3JpcHRpb24gOiAnc3RyaW5nJyxcbiAgICAgIHByaWNlIDogJ251bWJlcicsXG4gICAgICB0eXBlIDogJ3N0cmluZycsXG4gICAgICB1bml0cyA6ICdzdHJpbmcnLFxuICAgICAgZGVsZXRlZCA6ICdib29sZWFuJ1xuICAgIH0sXG5cbiAgICBjb21wbGV4TWF0ZXJpYWwgOiB7XG4gICAgICBhdXRob3JpdHkgOiAnc3RyaW5nJyxcbiAgICAgIGNsYXNzIDogJ3N0cmluZycsXG4gICAgICBzb3VyY2UgOiAnc3RyaW5nJyxcbiAgICAgIGlkIDogJ3N0cmluZycsXG4gICAgICBsb2NhbGl0eSA6ICdhcnJheScsXG4gICAgICBuYW1lIDogJ3N0cmluZycsXG4gICAgICBkZXNjcmlwdGlvbiA6ICdzdHJpbmcnLFxuICAgICAgdHlwZSA6ICdzdHJpbmcnLFxuICAgICAgdW5pdHMgOiAnc3RyaW5nJyxcbiAgICAgIGRlbGV0ZWQgOiAnYm9vbGVhbicsXG5cbiAgICAgIG1hdGVyaWFscyA6IFt7XG4gICAgICAgIF9vYmplY3RfYXJyYXlfIDogdHJ1ZSxcbiAgICAgICAgYW1vdW50IDogJ251bWJlcicsXG4gICAgICAgIHVuaXRzIDogJ3N0cmluZydcbiAgICAgIH1dLFxuICAgICAgXG4gICAgICB1bmlxdWUgOiBbe1xuICAgICAgICBfb2JqZWN0X2FycmF5XyA6IHRydWUsXG4gICAgICAgIHByaWNlIDogJ251bWJlcicsXG4gICAgICAgIHVuaXRzIDogJ3N0cmluZydcbiAgICAgIH1dXG4gICAgfVxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzY2hlbWEsIG9iamVjdCkge1xuICByZXR1cm4gc3RyaXAoc2NoZW1hLCBvYmplY3QpO1xufTtcblxuZnVuY3Rpb24gc3RyaXAoc2NoZW1hLCBvYmplY3QpIHtcbiAgZm9yKCB2YXIga2V5IGluIG9iamVjdCApIHtcbiAgICBpZiggIXNjaGVtYVtrZXldICkge1xuICAgICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHBhcmFtID0gc2NoZW1hW2tleV07XG5cbiAgICBpZiggcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiggdHlwZW9mIG9iamVjdFtrZXldICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBvYmplY3Rba2V5XSsnJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoIHBhcmFtID09PSAnbnVtYmVyJykge1xuICAgICAgY2hlY2tOdW0oa2V5LCBvYmplY3QpO1xuICAgIH0gZWxzZSBpZiAoIEFycmF5LmlzQXJyYXkocGFyYW0pICkge1xuXG4gICAgICBpZiggcGFyYW1bMF0uX29iamVjdF9hcnJheV8gKSB7XG4gICAgICAgICBjbGVhbk9iamVjdEFycmF5KHBhcmFtWzBdLCBvYmplY3Rba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IG9iamVjdFtrZXldLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgIHN0cmlwKHBhcmFtWzBdLCBvYmplY3Rba2V5XVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnICkge1xuICAgICAgc3RyaXAocGFyYW0sIG9iamVjdFtrZXldKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5PYmplY3RBcnJheShzY2hlbWEsIG9iamVjdCkge1xuICBmb3IoIHZhciBrZXkgaW4gb2JqZWN0ICkge1xuICAgIHN0cmlwKHNjaGVtYSwgb2JqZWN0W2tleV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrTnVtKGtleSwgb2JqZWN0KSB7XG4gIGlmKCB0eXBlb2Ygb2JqZWN0W2tleV0gIT09ICdudW1iZXInICkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgb3JnID0gb2JqZWN0W2tleV07XG4gICAgICBvYmplY3Rba2V5XSA9IHBhcnNlRmxvYXQob2JqZWN0W2tleV0pO1xuICAgICAgaWYoIGlzTmFOKG9iamVjdFtrZXldKSApIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBvcmc7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7fVxuXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIHBsdjggb2JqZWN0IGRlc2NyaXB0aW9uIHRvIGFwcCBvYmplY3QgZGVzY3JpcHRpb24uXG4gKiBpbiB0aGUgZW5kLCB0aGlzIHNob3VsZG4ndCBkbyBtdWNoLiAganVzdCBhIGxpdHRsZSBhcHAgc3VnYXIuXG4gKiovXG5cbiBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgdmFyIGFwcCA9IHtcbiAgICAgY2xhc3NlcyA6IHt9LFxuICAgICBtYXRlcmlhbHMgOiBbXSxcbiAgICAgb3BlcmF0aW9ucyA6IFtdLFxuICAgICBmYXJtIDoge31cbiAgIH07XG5cbiAgIGlmKCBjb25maWcubWF0ZXJpYWxzICkge1xuICAgICBhcHAubWF0ZXJpYWxzID0gZ2V0TWF0ZXJpYWxzKGNvbmZpZy5tYXRlcmlhbHMpO1xuICAgICBhcHAuY2xhc3NlcyA9IGdldENsYXNzZXMoYXBwLm1hdGVyaWFscyk7XG4gICB9XG4gICBpZiggY29uZmlnLnByaWNlcyApIHtcbiAgICAgam9pblByaWNlcyhhcHAubWF0ZXJpYWxzLCBjb25maWcucHJpY2VzKTtcbiAgIH1cblxuICAgaWYoIGNvbmZpZy5mYXJtICkge1xuICAgICB2YXIgZmFybSA9IGNvbmZpZy5mYXJtWzBdO1xuICAgICBhcHAuZmFybSA9IGdldEZhcm0oZmFybSk7XG5cbiAgICAgaWYoIGZhcm0ub3BlcmF0aW9ucyApIHtcbiAgICAgICBhcHAub3BlcmF0aW9ucyA9IGdldE9wZXJhdGlvbnMoZmFybS5vcGVyYXRpb25zKTtcbiAgICAgfVxuICAgICBpZiggZmFybS5zY2hlZHVsZSApIHtcbiAgICAgICBqb2luU2NoZWR1bGUoYXBwLm9wZXJhdGlvbnMsIGZhcm0uc2NoZWR1bGUpO1xuICAgICB9XG4gICB9XG5cbiAgIHJldHVybiBhcHA7XG4gfTtcblxuIGZ1bmN0aW9uIGpvaW5TY2hlZHVsZShvcGVyYXRpb25zLCBzY2hlZHVsZXMpIHtcbiAgIGZvciggdmFyIGkgPSAwOyBpIDwgc2NoZWR1bGVzLmxlbmd0aDsgaSsrICkge1xuICAgICB2YXIgc2NoZWR1bGUgPSBzY2hlZHVsZXNbaV07XG4gICAgIGZvciggdmFyIGogPSAwOyBqIDwgb3BlcmF0aW9ucy5sZW5ndGg7IGorKyApIHtcbiAgICAgICBpZiggc2NoZWR1bGUub3BlcmF0aW9uID09PSBvcGVyYXRpb25zW2pdLm5hbWUgKSB7XG4gICAgICAgICB2YXIgcGFydHMgPSBzY2hlZHVsZS5kdXJhdGlvbi5zcGxpdCgnICcpO1xuXG4gICAgICAgICBpZiggcGFydHNbMV0ubWF0Y2goL21vbi8pICkge1xuICAgICAgICAgICBwYXJ0c1sxXSA9ICdtb250aCc7XG4gICAgICAgICB9IGVsc2UgaWYgKCBwYXJ0c1sxXS5tYXRjaCgveWVhci8pICkge1xuICAgICAgICAgICBwYXJ0c1sxXSA9ICd5ZWFyJztcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHBhcnRzWzFdID0gJ2RheSc7XG4gICAgICAgICB9XG5cbiAgICAgICAgb3BlcmF0aW9uc1tqXS5zY2hlZHVsZS5wdXNoKHtcbiAgICAgICAgICBkYXRlIDogc2NoZWR1bGUuc3RhcnQsXG4gICAgICAgICAgbGVuZ3RoIDogcGFydHNbMF0sXG4gICAgICAgICAgdW5pdHMgOiBwYXJ0c1sxXVxuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiB9XG5cbmZ1bmN0aW9uIGpvaW5QcmljZXMobWF0ZXJpYWxzLCBwcmljZXMpIHtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBwcmljZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHByaWNlID0gcHJpY2VzW2ldO1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yKCB2YXIgaiA9IDA7IGogPCBtYXRlcmlhbHMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpZiggbWF0ZXJpYWxzW2pdLm5hbWUgPT09IHByaWNlLm1hdGVyaWFsICkge1xuXG4gICAgICAgIGlmKCBtYXRlcmlhbHNbal0udHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgICAgICAgIG1hdGVyaWFsc1tqXS5tYXRlcmlhbHMuRXN0aW1hdGUgPSB7XG4gICAgICAgICAgICB1bml0cyA6ICd1cyQnLFxuICAgICAgICAgICAgYW1vdW50IDogcHJpY2UucHJpY2VcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGVyaWFsc1tqXS5wcmljZSA9IHByaWNlLnByaWNlO1xuICAgICAgICAgIG1hdGVyaWFsc1tqXS51bml0cyA9IHByaWNlLnVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoICFmb3VuZCApIHtcbiAgICAgIC8qY29uc29sZS5sb2coe1xuICAgICAgICBuYW1lIDogcHJpY2UubWF0ZXJpYWwsXG4gICAgICAgIHByaWNlIDogcHJpY2UucHJpY2UsXG4gICAgICAgIHVuaXRzIDogcHJpY2UudW5pdFxuICAgICAgfSk7Ki9cblxuICAgICAgbWF0ZXJpYWxzLnB1c2goe1xuICAgICAgICBuYW1lIDogcHJpY2UubWF0ZXJpYWwsXG4gICAgICAgIHByaWNlIDogcHJpY2UucHJpY2UsXG4gICAgICAgIHVuaXRzIDogcHJpY2UudW5pdFxuICAgICAgfSk7IC8vIFRPRE86IHNvbWUgbWF0ZXJpYWxzIGRvIG5vdCBzZWVtIHRvIGFwcGVhciBpbiBtYXRlcmlhbCBsaXN0XG4gICAgfVxuXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TWF0ZXJpYWxzKGluZm8pIHtcbiAgdmFyIG1hdGVyaWFscyA9IFtdO1xuXG4gIGluZm8uZm9yRWFjaChmdW5jdGlvbihpKXtcbiAgICBpLm5hbWUgPSBpLm1hdGVyaWFsO1xuICAgIGRlbGV0ZSBpLm1hdGVyaWFsO1xuXG4gICAgaS51bml0cyA9IGkudW5pdDtcbiAgICBkZWxldGUgaS51bml0O1xuXG4gICAgaWYoICFpLnJlcXVpcmVzICkge1xuICAgICAgbWF0ZXJpYWxzLnB1c2goaSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaS50eXBlID0gJ2NvbXBsZXgnO1xuICAgIGkubWF0ZXJpYWxzID0ge307XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IGkucmVxdWlyZXMubGVuZ3RoOyBqKysgKSB7XG4gICAgICBpLm1hdGVyaWFsc1tpLnJlcXVpcmVzW2pdLm1hdGVyaWFsXSA9IHtcbiAgICAgICAgYW1vdW50IDogaS5yZXF1aXJlc1tqXS5hbW91bnQsXG4gICAgICAgIG9yaWdpbmFsQW1vdW50IDogaS5yZXF1aXJlc1tqXS5hbW91bnQsXG4gICAgICAgIHVuaXRzIDogaS5yZXF1aXJlc1tqXS51bml0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlbGV0ZSBpLnJlcXVpcmVzO1xuXG4gICAgbWF0ZXJpYWxzLnB1c2goaSk7XG4gIH0pO1xuXG4gIHJldHVybiBtYXRlcmlhbHM7XG59XG5cbmZ1bmN0aW9uIGdldE9wZXJhdGlvbnMoaW5mbykge1xuICB2YXIgb3BzID0gW107XG5cbiAgaW5mby5mb3JFYWNoKGZ1bmN0aW9uKGkpe1xuICAgIHZhciBvcCA9IHtcbiAgICAgIG5hbWUgOiBpLm9wZXJhdGlvbixcbiAgICAgIG1hdGVyaWFscyA6IFtdLFxuICAgICAgdW5pdHMgOiAnW2Fjcl91c10nLFxuICAgICAgc2NoZWR1bGUgOiBbXVxuICAgIH07XG5cbiAgICBmb3IoIHZhciBqID0gMDsgaiA8IGkubWF0ZXJpYWxzLmxlbmd0aDsgaisrICkge1xuICAgICAgaS5tYXRlcmlhbHNbal0udW5pdHMgPSBpLm1hdGVyaWFsc1tqXS51bml0O1xuICAgICAgZGVsZXRlIGkubWF0ZXJpYWxzW2pdLnVuaXQ7XG4gICAgICBcbiAgICAgIGkubWF0ZXJpYWxzW2pdLm5hbWUgPSBpLm1hdGVyaWFsc1tqXS5tYXRlcmlhbDtcbiAgICAgIGRlbGV0ZSBpLm1hdGVyaWFsc1tqXS5tYXRlcmlhbDtcblxuICAgICAgb3AubWF0ZXJpYWxzLnB1c2goaS5tYXRlcmlhbHNbal0pO1xuICAgIH1cblxuICAgIG9wcy5wdXNoKG9wKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG9wcztcbn1cblxuZnVuY3Rpb24gZ2V0RmFybShpbmZvKSB7XG4gIHZhciBmYXJtID0ge307XG4gIGZvciggdmFyIGtleSBpbiBpbmZvICkge1xuICAgIGlmKCB0eXBlb2YgaW5mb1trZXldID09PSAnc3RyaW5nJyApIHtcbiAgICAgIGZhcm1ba2V5XSA9IGluZm9ba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhcm07XG59XG5cbmZ1bmN0aW9uIGdldENsYXNzZXMobWF0ZXJpYWxzKSB7XG4gIHZhciBjbGFzc2VzID0ge307XG5cbiAgbWF0ZXJpYWxzLmZvckVhY2goZnVuY3Rpb24obWF0ZXJpYWwpe1xuICAgIGlmKCBjbGFzc2VzW21hdGVyaWFsLmNsYXNzXSApIHtcbiAgICAgIGNsYXNzZXNbbWF0ZXJpYWwuY2xhc3NdLnB1c2gobWF0ZXJpYWwubmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzZXNbbWF0ZXJpYWwuY2xhc3NdID0gW21hdGVyaWFsLm5hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNsYXNzZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odW5pdHMpIHtcbiAgaWYoIHVuaXRzID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuICcxJztcbiAgfVxuICByZXR1cm4gdW5pdHMucmVwbGFjZSgvKHVzKT9cXCQvZywgJzEnKTtcbn07XG4iLCIvKipcbiAqIGhlbHBlciBmaWxlIGZvciB0aGluZ3MgbGlrZSBVSSBzZWxlY3RvcnNcbiAqKi9cblxudmFyIHRpbWUgPSBbXG4gIHtcbiAgICBuYW1lIDogJ21pbnV0ZScsXG4gICAgc3ltYm9sIDogJ21pbidcbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnaG91cicsXG4gICAgc3ltYm9sIDogJ2gnXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2RheScsXG4gICAgc3ltYm9sIDogJ2QnXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3llYXInLFxuICAgIHN5bWJvbCA6ICdhJ1xuICB9XG5dO1xuXG52YXIgbGVuZ3RoID0gW1xuICB7XG4gICAgbmFtZSA6ICdjZW50aW1ldGVyJyxcbiAgICBzeW1ib2wgOiAnY20nLFxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdpbmNoJyxcbiAgICBzeW1ib2wgOiAnW2luX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2luJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAnZm9vdCcsXG4gICAgc3ltYm9sIDogJ1tmdF91c10nLFxuICAgIGFjY2VwdGVkIDogWydmdCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ21ldGVyJyxcbiAgICBzeW1ib2wgOiAnbScsXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3lhcmQnLFxuICAgIHN5bWJvbCA6ICdbeWRfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsneWQnXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdtaWxlJyxcbiAgICBzeW1ib2wgOiAnW21pX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ21pJ11cbiAgfSxcbiAge1xuICAgIG5hbWUgOiAna2lsb21ldGVyJyxcbiAgICBzeW1ib2wgOiAna20nLFxuICB9XG5dO1xuXG52YXIgYXJlYSA9IFtcbiAge1xuICAgIG5hbWUgOiAnaGVjdGFyZScsXG4gICAgc3ltYm9sIDogJ2hhcicsXG4gICAgYWNjZXB0IDogWydhciddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2FjcmUnLFxuICAgIHN5bWJvbCA6ICdbYWNyX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2FjJ11cbiAgfVxuXTtcblxudmFyIHdlaWdodCA9IFtcbiAge1xuICAgIG5hbWUgOiAnb3VuY2UnLFxuICAgIHN5bWJvbCA6ICdbb3pfYXZdJyxcbiAgICBhY2NlcHRlZCA6IFsnb3onXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdwb3VuZCcsXG4gICAgc3ltYm9sIDogJ1tsYl9hdl0nLFxuICAgIGFjY2VwdGVkIDogWydsYiddXG4gIH1cbl07XG5cbnZhciB2b2x1bWUgPSBbXG4gIHtcbiAgICBuYW1lIDogJ2N1cCcsXG4gICAgc3ltYm9sIDogJ1tjdXBfdXNdJ1xuICB9LFxuICB7XG4gICAgbmFtZSA6ICdxdWFydCcsXG4gICAgc3ltYm9sIDogJ1txdF91c10nLFxuICAgIGFjY2VwdGVkIDogWydxdCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ3BpbnQnLFxuICAgIHN5bWJvbCA6ICdbcHRfdXNdJyxcbiAgICBhY2NlcHRlZCA6IFsncHQnXVxuICB9LFxuICB7XG4gICAgbmFtZSA6ICdnYWxsb24nLFxuICAgIHN5bWJvbCA6ICdbZ2FsX3VzXScsXG4gICAgYWNjZXB0ZWQgOiBbJ2dhbCddXG4gIH0sXG4gIHtcbiAgICBuYW1lIDogJ2ZsdWlkIG91bmNlJyxcbiAgICBzeW1ib2wgOiAnW2Zvel91c10nLFxuICAgIGFjY2VwdGVkIDogWydmbG96J11cbiAgfVxuXTtcblxudmFyIHByaWNlID0gW1xuICB7XG4gICAgbmFtZSA6ICdkb2xsYXInLFxuICAgIHN5bWJvbCA6ICcnLFxuICAgIGFjY2VwdGVkIDogWyckJywgJ3VzJCddXG4gIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmljZSA6IHByaWNlLFxuICB2b2x1bWUgOiB2b2x1bWUsXG4gIHdlaWdodCA6IHdlaWdodCxcbiAgdGltZSA6IHRpbWUsXG4gIGxlbmd0aCA6IGxlbmd0aCxcbiAgYXJlYSA6IGFyZWFcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluaXRpb25zID0gcmVxdWlyZSgnLi9kZWZpbml0aW9ucycpO1xudmFyIHVjdW0gPSByZXF1aXJlKCd1Y3VtLmpzJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyk7XG52YXIgY2xlYW5Eb2xsYXJzID0gcmVxdWlyZSgnLi9jbGVhbkRvbGxhcnMnKTtcblxuLy8gY2FjaGUgZm9yIHN0YW5kYXJkIHVjdW0gY2FsY3VsYXRpb25zXG4vLyB0aGVzZSBjYW4gaGFwcGVuIGEgbG90IGEgcmVhbGx5IHNsb3dkb3duIHRoZSB1cjtcbnZhciB1Y3VtQ2FjaGUgPSB7fTtcbnZhciBjb252ZXJ0Q2FjaGUgPSB7fTtcbi8vIHVuaXQgbG9va3VwIGhhc2hcbnZhciBsb29rdXAgPSB7fTtcblxuZm9yKCB2YXIgdHlwZSBpbiBkZWZpbml0aW9ucyApIHtcbiAgdmFyIGFycmF5ID0gZGVmaW5pdGlvbnNbdHlwZV07XG5cbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyApIHtcbiAgICBhcnJheVtpXS50eXBlID0gdHlwZTtcblxuICAgIGxvb2t1cFthcnJheVtpXS5uYW1lXSA9IGFycmF5W2ldO1xuICAgIGlmKCBhcnJheVtpXS5zeW1ib2wgKSB7XG4gICAgICBsb29rdXBbYXJyYXlbaV0uc3ltYm9sXSA9IGFycmF5W2ldO1xuICAgIH1cbiAgICBpZiggYXJyYXlbaV0uYWNjZXB0ZWQgKSB7XG4gICAgICBmb3IoIHZhciBqID0gMDsgaiA8IGFycmF5W2ldLmFjY2VwdGVkLmxlbmd0aDsgaisrICkge1xuICAgICAgICBsb29rdXBbYXJyYXlbaV0uYWNjZXB0ZWRbal1dID0gYXJyYXlbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIGdldCBsYWJlbCBmb3IgbmFtZS4gIG1vc3RseSBmb3IgZ2V0dGluZyB1cyQgYXMgJCBvciBbdXNfZ2FsXSBhcyBnYWxsb24uXG5mdW5jdGlvbiBnZXRMYWJlbChuYW1lLCBzaG9ydCkge1xuICB2YXIgcGFydHMsIGxhYmVsO1xuXG4gIGlmKCBuYW1lID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYoIG5hbWUuaW5kZXhPZignLycpID4gLTEgKSB7XG4gICAgcGFydHMgPSBuYW1lLnNwbGl0KCcvJyk7XG5cbiAgICBsYWJlbCA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICBsYWJlbC5wdXNoKGdldExhYmVsKHAsIHNob3J0KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWwuam9pbignLycpO1xuICB9XG5cbiAgaWYoIG5hbWUuaW5kZXhPZignLicpID4gLTEgKSB7XG4gICAgcGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG5cbiAgICBsYWJlbCA9IFtdO1xuICAgIHBhcnRzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICBsYWJlbC5wdXNoKGdldExhYmVsKHAsIHNob3J0KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWwuam9pbignKicpO1xuICB9XG5cbiAgdmFyIHR4dCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYoIGxvb2t1cFt0eHRdICkge1xuICAgIGlmKCBzaG9ydCApIHtcbiAgICAgIHJldHVybiBsb29rdXBbdHh0XS5hY2NlcHRlZCA/IGxvb2t1cFt0eHRdLmFjY2VwdGVkWzBdIDogbG9va3VwW3R4dF0uc3ltYm9sO1xuICAgIH1cbiAgICByZXR1cm4gbG9va3VwW3R4dF0ubmFtZTtcbiAgfVxuICByZXR1cm4gbmFtZTtcbn1cblxuLy8gZ2V0IHVuaXRzIG9mIHNhbWUgdHlwZVxuZnVuY3Rpb24gZ2V0TGlrZVVuaXRzKG5hbWUpIHtcbiAgdmFyIHR4dCA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgaWYoICFsb29rdXBbdHh0XSApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gZGVmaW5pdGlvbnNbbG9va3VwW3R4dF0udHlwZV07XG59XG5cbmZ1bmN0aW9uIGludmVydCh1bml0cykge1xuICB1bml0cyA9IGNsZWFuRG9sbGFycyh1bml0cyk7XG5cbiAgdW5pdHMgPSB1bml0cy5zcGxpdCgnLycpO1xuICB1bml0cyA9ICcoJyt1bml0cy5qb2luKCcpLygnKSsnKSc7XG5cbiAgdmFyIHJlc3VsdDtcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSB1Y3VtUGFyc2UoJzEvKCcrdW5pdHMrJyknKTtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuIHVuaXRzO1xuICB9XG5cbiAgdmFyIGQgPSBbXSwgbiA9IFtdO1xuICBmb3IoIHZhciBrZXkgaW4gcmVzdWx0LnVuaXRzICkge1xuICAgIGlmKCByZXN1bHQudW5pdHNba2V5XSA9PT0gLTEgKSB7XG4gICAgICBkLnB1c2goa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbi5wdXNoKGtleSk7XG4gICAgfVxuICB9XG5cbiAgaWYoIHJlc3VsdC52YWx1ZSA+IDEgKSB7XG4gICAgbi5wdXNoKHJlc3VsdC52YWx1ZSk7XG4gIH0gZWxzZSBpZiAoIHJlc3VsdC52YWx1ZSA8IDAgKSB7XG4gICAgZC5wdXNoKDEgLyByZXN1bHQudmFsdWUpO1xuICB9XG5cbiAgdW5pdHMgPSBuLmpvaW4oJy4nKTtcblxuICBpZiggdW5pdHMgPT09ICcnICkge1xuICAgIHVuaXRzID0gJ3VzJCc7XG4gIH1cbiAgaWYoIGQubGVuZ3RoID4gMCApIHtcbiAgICB1bml0cyArPSAnLycrZC5qb2luKCcuJyk7XG4gIH1cblxuICByZXR1cm4gdW5pdHM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU9wTWF0ZXJpYWxQcmljZShtYXRlcmlhbERlZiwgbWF0ZXJpYWxJbXBsKSB7XG4gIHZhciBjb252ZXJ0O1xuXG4gIC8vIFRPRE86IHRoaXMgaXMgc3RyYW5nZS4uLiBtaW5kIGlzIHRpcmVkLi4uIGlzIHRoaXMgY29ycmVjdD9cbiAgdmFyIHVuaXRzID0gbWF0ZXJpYWxEZWYudW5pdHM7XG4gIGlmKCBtYXRlcmlhbERlZi50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgdW5pdHMgPSAnMS8oJyt1bml0cysnKSc7XG4gIH1cblxuICBpZiggbWF0ZXJpYWxJbXBsLmFtb3VudCA9PT0gdW5kZWZpbmVkICkge1xuICAgIG1hdGVyaWFsSW1wbC5hbW91bnQgPSAxO1xuICB9XG5cbiAgY29udmVydCA9IGNvbnZlcnRVbml0cyhtYXRlcmlhbEltcGwudW5pdHMsIHVuaXRzKTtcbiAgY29udmVydC5kZWJ1ZzIgPSBtYXRlcmlhbEltcGwuYW1vdW50KycgKiAnK21hdGVyaWFsRGVmLnByaWNlKycgKiAnK2NvbnZlcnQudmFsdWU7XG4gIGNvbnZlcnQudmFsdWUgPSBtYXRlcmlhbEltcGwuYW1vdW50ICogbWF0ZXJpYWxEZWYucHJpY2UgKiBjb252ZXJ0LnZhbHVlO1xuXG4gIHJldHVybiBjb252ZXJ0O1xufVxuXG4vLyBjb252ZXJ0IHVuaXRzIGZvciBjb21wbGV4IG1hdGVyaWFsc1xuZnVuY3Rpb24gY2FsY3VsYXRlQ29tcGxleFByaWNlKG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwpIHtcbiAgdmFyIHZhbHVlLCBkaWZmO1xuXG4gIHZhciBtVW5pdHMgPSBjbGVhbkRvbGxhcnMobWF0ZXJpYWxEZWYudW5pdHMudHJpbSgpKTtcbiAgbVVuaXRzID0gbVVuaXRzLnJlcGxhY2UoL14xXFwvL2csICcnKTtcbiAgdmFyIGlVbml0cyA9IGNsZWFuRG9sbGFycyhtYXRlcmlhbEltcGwudW5pdHMpO1xuXG4gIHRyeSB7XG4gICAgaWYoIGNvbnZlcnRDYWNoZVtpVW5pdHMrJy0nK21Vbml0c10gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGRpZmYgPSBjb252ZXJ0Q2FjaGVbaVVuaXRzKyctJyttVW5pdHNdO1xuICAgIH0gZWxzZSBpZiggaVVuaXRzID09PSBtVW5pdHMgKSB7XG4gICAgICBkaWZmID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdHJhbnNmZXIgZnJvbSB3aGF0IHRoZXkgZ2FtZSB1cyB0byB3aGF0IHdlIGhhdmVcbiAgICAgIGRpZmYgPSB1Y3VtLmNvbnZlcnQoMSwgaVVuaXRzLCBtVW5pdHMpO1xuICAgICAgY29udmVydENhY2hlW2lVbml0cysnLScrbVVuaXRzXSA9IGRpZmY7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBtYXRlcmlhbERlZi5wcmljZSAqIGRpZmYgKiBtYXRlcmlhbEltcGwuYW1vdW50O1xuXG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIHVjdW1FcnJvciA6IGUsXG4gICAgICBtZXNzYWdlIDogJ0NhbiBub3QgY29udmVydCB1bml0czogJyttYXRlcmlhbEltcGwudW5pdHMrJyB0byAnK21Vbml0cyxcbiAgICAgIG1hdGggOiBtVW5pdHMrJyB0byAnK21hdGVyaWFsSW1wbC51bml0c1xuICAgIH07XG4gIH1cblxuICB2YXIgcmVzcCA9IHtcbiAgICBzdWNjZXNzIDogdHJ1ZSxcbiAgICBkZWJ1ZyA6IG1hdGVyaWFsRGVmLnByaWNlKycgKiAnK2RpZmYrJyAqICcrbWF0ZXJpYWxJbXBsLmFtb3VudCxcbiAgICB2YWx1ZSA6IHZhbHVlXG4gIH07XG5cbiAgcmV0dXJuIHJlc3A7XG59XG5cbmZ1bmN0aW9uIGlzRG9sbGFyKHZhbHVlKSB7XG4gIHZhbHVlID0gdmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIGlmKCB2YWx1ZSA9PT0gJ3VzJCcgfHwgdmFsdWUgPT09ICckJyB8fCB2YWx1ZSA9PT0gJzEnIHx8IHZhbHVlID09PSAnJyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qZnVuY3Rpb24gY2FsY3VsYXRlQ29tcGxleFByaWNlKG1hdGVyaWFsRGVmLCBtYXRlcmlhbEltcGwsIGNvbXBsZXhNYXRlcmlhbCkge1xuICAvLyBUT0RPOiB0aGlzIGlzIHN0cmFuZ2UuLi4gbWluZCBpcyB0aXJlZC4uLiBpcyB0aGlzIGNvcnJlY3Q/XG4gIHZhciB1bml0cyA9IG1hdGVyaWFsRGVmLnVuaXRzO1xuICBpZiggbWF0ZXJpYWxEZWYudHlwZSA9PT0gJ2NvbXBsZXgnICkge1xuICAgIHVuaXRzID0gJzEvKCcrdW5pdHMrJyknO1xuICB9XG4gIHZhciBjb252ZXJ0ID0gY29udmVydFVuaXRzKG1hdGVyaWFsSW1wbC51bml0cywgdW5pdHMpO1xuXG5cbiAgaWYoIGNvbnZlcnQuZXJyb3IgKSB7XG4gICAgcmV0dXJuIGNvbnZlcnQ7XG4gIH0gZWxzZSBpZiggT2JqZWN0LmtleXMoY29udmVydC51bml0cykubGVuZ3RoID4gMSApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBjb252ZXJ0IDogY29udmVydCxcbiAgICAgIG1lc3NhZ2UgOiAnVW5pdHMgZGlkblxcJ3QgY2FuY2VsJyxcbiAgICAgIG1hdGggOiBtYXRlcmlhbEltcGwudW5pdHMrJyAqICcrdW5pdHNcbiAgICB9O1xuICB9XG5cbiAgaWYoIG1hdGVyaWFsSW1wbC5hbW91bnQgPT09IHVuZGVmaW5lZCApIHtcbiAgICBtYXRlcmlhbEltcGwuYW1vdW50ID0gMTtcbiAgfVxuXG4gIGNvbnZlcnQuZGVidWcyID0gbWF0ZXJpYWxJbXBsLmFtb3VudCsnICogJyttYXRlcmlhbERlZi5wcmljZSsnICogJytjb252ZXJ0LnZhbHVlO1xuICBjb252ZXJ0LnZhbHVlID0gbWF0ZXJpYWxJbXBsLmFtb3VudCAqIG1hdGVyaWFsRGVmLnByaWNlICogY29udmVydC52YWx1ZTtcblxuICByZXR1cm4gY29udmVydDtcbn0qL1xuXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHModTEsIHUyKSB7XG4gIHZhciB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHRyeSB7XG4gICAgdmFyIHQxID0gY2xlYW5Eb2xsYXJzKHUxKTtcbiAgICB2YXIgdDIgPSBjbGVhbkRvbGxhcnModTIpO1xuXG4gICAgLy8gdHJ5IGFuZCBzZWUgaWYgd2UgY2FuIGZha2UgaXRcbiAgICBpZiggdDIgPT09ICcxLycrdDEgfHwgdDIgPT09ICcxLygnK3QxKycpJyB8fCB0MSA9PT0gJzEvJyt0MiB8fCB0MSA9PT0gJzEvKCcrdDIrJyknIHx8ICh0MSA9PT0gJycgJiYgdDIgPT09ICcnKSApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlIDogMSxcbiAgICAgICAgdW5pdHMgOiB7fSxcbiAgICAgICAgc2ltcGxlIDogdHJ1ZSxcbiAgICAgICAgZGVidWcgOiAnKCcrdDErJykuKCcrdDIrJyknXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHdlIGFsbCBibGFuayB1bml0cyBhcyBkb2xsYXJzXG4gICAgaWYoIHQxID09PSAnJyApIHtcbiAgICAgIHQxID0gMTtcbiAgICB9XG4gICAgaWYoIHQyID09PSAnJyApIHtcbiAgICAgIHQyID0gMTtcbiAgICB9XG5cbiAgICB2YXIgdG1wID0gJygnK3QxKycpLignK3QyKycpJztcbiAgICAvL3ZhciB0ID0gdWN1bS5jYW5vbmljYWxpemUodG1wKTtcbiAgICB2YXIgdCA9IHVjdW1QYXJzZSh0bXApO1xuICAgIHQuZGVidWcgPSB0bXA7XG4gICAgcmV0dXJuIHQ7XG4gIH0gY2F0Y2goZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvciA6IHRydWUsXG4gICAgICBtZXNzYWdlIDogJ1VuYWJsZSB0byBjb252ZXJ0IHVuaXRzJyxcbiAgICAgIG1hdGggOiB1MSsnICogJyt1MixcbiAgICAgIGRlYnVnIDogJygnK2NsZWFuRG9sbGFycyh1MSkrJykuKCcrIGNsZWFuRG9sbGFycyh1MikrJyknXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1Y3VtUGFyc2UodmFsdWUpIHtcbiAgaWYoIHVjdW1DYWNoZVt2YWx1ZV0gKSB7XG4gICAgcmV0dXJuIGV4dGVuZCh0cnVlLCB7fSwgdWN1bUNhY2hlW3ZhbHVlXSk7XG4gIH1cbiAgdmFyIHJlc3BvbnNlID0gdWN1bS5wYXJzZSh2YWx1ZSk7XG4gIHVjdW1DYWNoZVt2YWx1ZV0gPSBleHRlbmQodHJ1ZSwge30sIHJlc3BvbnNlKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW52ZXJ0IDogaW52ZXJ0LFxuICBjb252ZXJ0VW5pdHMgOiBjb252ZXJ0VW5pdHMsXG4gIGdldExhYmVsIDogZ2V0TGFiZWwsXG4gIGdldExpa2VVbml0cyA6IGdldExpa2VVbml0cyxcbiAgY2FsY3VsYXRlQ29tcGxleFByaWNlIDogY2FsY3VsYXRlQ29tcGxleFByaWNlLFxuICBjYWxjdWxhdGVPcE1hdGVyaWFsUHJpY2UgOiBjYWxjdWxhdGVPcE1hdGVyaWFsUHJpY2UsXG4gIGxvb2t1cCA6IGxvb2t1cCxcbiAgdWN1bVBhcnNlIDogdWN1bVBhcnNlLFxuICBjbGVhbkRvbGxhcnMgOiBjbGVhbkRvbGxhcnNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dWlkID0gcmVxdWlyZSgnbm9kZS11dWlkJyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJyk7XG52YXIgc3RhdGVzID0gcmVxdWlyZSgnLi9zdGF0ZXMnKTtcblxudmFyIG1hdGVyaWFsQ29udHJvbGxlciwgb3BlcmF0aW9uQ29udHJvbGxlcjtcblxudmFyIHN0YXRlc0xvb2t1cCA9IHt9O1xuZm9yKCB2YXIga2V5IGluIHN0YXRlcyApIHtcbiAgc3RhdGVzTG9va3VwW3N0YXRlc1trZXldLnRvTG93ZXJDYXNlKCldID0ga2V5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9Db250cm9sLCBtQ29udHJvbCkge1xuICBvcGVyYXRpb25Db250cm9sbGVyID0gb0NvbnRyb2w7XG4gIG1hdGVyaWFsQ29udHJvbGxlciA9IG1Db250cm9sO1xuXG4gIHJldHVybiB7XG4gICAgZ3VpZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV1aWQudjQoKTtcbiAgICB9LFxuICAgIGhhc0FjY2VzcyA6IGhhc0FjY2VzcyxcbiAgICBxdWVyeUhlbHBlciA6IHF1ZXJ5SGVscGVyLFxuICAgIGdldEFjdGl2ZU1hdGVyaWFscyA6IGdldEFjdGl2ZU1hdGVyaWFscyxcbiAgICBzdGF0ZXMgOiBzdGF0ZXMsXG4gICAgc3RhdGVzTG9va3VwIDogc3RhdGVzTG9va3VwXG4gIH07XG59O1xuXG5mdW5jdGlvbiBoYXNBY2Nlc3ModXNlciwgYXV0aG9yaXR5KSB7XG4gIGlmKCAhdXNlciApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoICF1c2VyLmF1dGhvcml0aWVzICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiggdXNlci5hdXRob3JpdGllcy5pbmRleE9mKGF1dGhvcml0eSkgPiAtMSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiggdXNlci51c2VybmFtZSA9PT0gYXV0aG9yaXR5ICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBnZXQgbWF0ZXJpYWxzIGN1cnJlbnRseSBpbiB1c2UgYnkgb3BlcmF0aW9ucyBjb250cm9sbGVyXG5mdW5jdGlvbiBnZXRBY3RpdmVNYXRlcmlhbHMoKSB7XG4gIHZhciBtYXRlcmlhbHMgPSBbXTtcblxuICB2YXIgb3BlcmF0aW9ucyA9IG9wZXJhdGlvbkNvbnRyb2xsZXIuZ2V0KCk7XG4gIG9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbihvcCl7XG4gICAgX2dldEFjdGl2ZU1hdGVyaWFscyhvcCwgbWF0ZXJpYWxzKTtcbiAgfSk7XG5cbiAgbWF0ZXJpYWxzLnNvcnQoKTtcbiAgcmV0dXJuIG1hdGVyaWFscztcbn1cblxuZnVuY3Rpb24gX2dldEFjdGl2ZU1hdGVyaWFscyhvYmosIGxpc3QpIHtcbiAgaWYoICFvYmoubWF0ZXJpYWxzICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciggdmFyIG5hbWUgaW4gb2JqLm1hdGVyaWFscyApIHtcbiAgICB2YXIgZGVmID0gbWF0ZXJpYWxDb250cm9sbGVyLmdldChuYW1lKTtcblxuICAgIGlmKCBsaXN0LmluZGV4T2YoZGVmLm5hbWUpID09PSAtMSApIHtcbiAgICAgIGxpc3QucHVzaChkZWYubmFtZSk7XG4gICAgfVxuXG4gICAgaWYoIGRlZi50eXBlID09PSAnY29tcGxleCcgKSB7XG4gICAgICBfZ2V0QWN0aXZlTWF0ZXJpYWxzKGRlZiwgbGlzdCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SGVscGVyKGxvY2FsaXRpZXMsIGNyb3AsIHRleHQpIHtcbiAgdmFyIHF1ZXJ5ID0ge307XG5cbiAgaWYoIGxvY2FsaXRpZXMgKSB7XG4gICAgdmFyIGxvYyA9IGV4dGVuZCh0cnVlLCBbXSwgbG9jYWxpdGllcyk7XG5cbiAgICBpZiggbG9jLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgIHF1ZXJ5LmxvY2FsaXR5ID0gbG9jWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIGlmKCBsb2MubGVuZ3RoID09PSAyICkge1xuICAgICAgcXVlcnkuJGFuZCA9IFtdO1xuICAgICAgYXBwZW5kVG9RdWVyeShxdWVyeS4kYW5kLCBsb2MpO1xuICAgIH0gZWxzZSBpZiggbG9jLmxlbmd0aCA+IDIgKXtcbiAgICAgIHZhciBvclF1ZXJ5ID0geyRvciA6IFtdfTtcbiAgICAgIHF1ZXJ5LiRhbmQgPSBbe2xvY2FsaXR5OiBsb2Muc3BsaWNlKDAsMSlbMF0udG9Mb3dlckNhc2UoKX0sIG9yUXVlcnldO1xuICAgICAgYXBwZW5kVG9RdWVyeShvclF1ZXJ5LiRvciwgbG9jKTtcbiAgICB9XG4gIH1cblxuICBpZiggY3JvcCApIHtcbiAgICBxdWVyeS5jb21tb2RpdHkgPSBjcm9wO1xuICB9XG5cbiAgaWYoIHRleHQgKSB7XG4gICAgcXVlcnkuJHRleHQgPSB7ICRzZWFyY2g6IHRleHQgfTtcbiAgfVxuXG4gIHJldHVybiBxdWVyeTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9RdWVyeShhcnIsIGZpbHRlcnMpIHtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aDsgaSsrICkge1xuICAgIGFyci5wdXNoKHtsb2NhbGl0eTogZmlsdGVyc1tpXS50b0xvd2VyQ2FzZSgpfSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJhbGFiYW1hXCI6IFwiQUxcIixcbiAgXCJhbGFza2FcIjogXCJBS1wiLFxuICBcImFtZXJpY2FuIHNhbW9hXCI6IFwiQVNcIixcbiAgXCJhcml6b25hXCI6IFwiQVpcIixcbiAgXCJhcmthbnNhc1wiOiBcIkFSXCIsXG4gIFwiY2FsaWZvcm5pYVwiOiBcIkNBXCIsXG4gIFwiY29sb3JhZG9cIjogXCJDT1wiLFxuICBcImNvbm5lY3RpY3V0XCI6IFwiQ1RcIixcbiAgXCJkZWxhd2FyZVwiOiBcIkRFXCIsXG4gIFwiZGlzdHJpY3Qgb2YgY29sdW1iaWFcIjogXCJEQ1wiLFxuICBcImZlZGVyYXRlZCBzdGF0ZXMgb2YgbWljcm9uZXNpYVwiOiBcIkZNXCIsXG4gIFwiZmxvcmlkYVwiOiBcIkZMXCIsXG4gIFwiZ2VvcmdpYVwiOiBcIkdBXCIsXG4gIFwiZ3VhbVwiOiBcIkdVXCIsXG4gIFwiaGF3YWlpXCI6IFwiSElcIixcbiAgXCJpZGFob1wiOiBcIklEXCIsXG4gIFwiaWxsaW5vaXNcIjogXCJJTFwiLFxuICBcImluZGlhbmFcIjogXCJJTlwiLFxuICBcImlvd2FcIjogXCJJQVwiLFxuICBcImthbnNhc1wiOiBcIktTXCIsXG4gIFwia2VudHVja3lcIjogXCJLWVwiLFxuICBcImxvdWlzaWFuYVwiOiBcIkxBXCIsXG4gIFwibWFpbmVcIjogXCJNRVwiLFxuICBcIm1hcnNoYWxsIGlzbGFuZHNcIjogXCJNSFwiLFxuICBcIm1hcnlsYW5kXCI6IFwiTURcIixcbiAgXCJtYXNzYWNodXNldHRzXCI6IFwiTUFcIixcbiAgXCJtaWNoaWdhblwiOiBcIk1JXCIsXG4gIFwibWlubmVzb3RhXCI6IFwiTU5cIixcbiAgXCJtaXNzaXNzaXBwaVwiOiBcIk1TXCIsXG4gIFwibWlzc291cmlcIjogXCJNT1wiLFxuICBcIm1vbnRhbmFcIjogXCJNVFwiLFxuICBcIm5lYnJhc2thXCI6IFwiTkVcIixcbiAgXCJuZXZhZGFcIjogXCJOVlwiLFxuICBcIm5ldyBoYW1wc2hpcmVcIjogXCJOSFwiLFxuICBcIm5ldyBqZXJzZXlcIjogXCJOSlwiLFxuICBcIm5ldyBtZXhpY29cIjogXCJOTVwiLFxuICBcIm5ldyB5b3JrXCI6IFwiTllcIixcbiAgXCJub3J0aCBjYXJvbGluYVwiOiBcIk5DXCIsXG4gIFwibm9ydGggZGFrb3RhXCI6IFwiTkRcIixcbiAgXCJub3J0aGVybiBtYXJpYW5hIGlzbGFuZHNcIjogXCJNUFwiLFxuICBcIm9oaW9cIjogXCJPSFwiLFxuICBcIm9rbGFob21hXCI6IFwiT0tcIixcbiAgXCJvcmVnb25cIjogXCJPUlwiLFxuICBcInBhbGF1XCI6IFwiUFdcIixcbiAgXCJwZW5uc3lsdmFuaWFcIjogXCJQQVwiLFxuICBcInB1ZXJ0byByaWNvXCI6IFwiUFJcIixcbiAgXCJyaG9kZSBpc2xhbmRcIjogXCJSSVwiLFxuICBcInNvdXRoIGNhcm9saW5hXCI6IFwiU0NcIixcbiAgXCJzb3V0aCBkYWtvdGFcIjogXCJTRFwiLFxuICBcInRlbm5lc3NlZVwiOiBcIlROXCIsXG4gIFwidGV4YXNcIjogXCJUWFwiLFxuICBcInV0YWhcIjogXCJVVFwiLFxuICBcInZlcm1vbnRcIjogXCJWVFwiLFxuICBcInZpcmdpbiBpc2xhbmRzXCI6IFwiVklcIixcbiAgXCJ2aXJnaW5pYVwiOiBcIlZBXCIsXG4gIFwid2FzaGluZ3RvblwiOiBcIldBXCIsXG4gIFwid2VzdCB2aXJnaW5pYVwiOiBcIldWXCIsXG4gIFwid2lzY29uc2luXCI6IFwiV0lcIixcbiAgXCJ3eW9taW5nXCI6IFwiV1lcIlxufVxuIiwiLyohXG4gKiBkZWVwLWRpZmYuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbjsoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICByb290LkRlZXBEaWZmID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyICRzY29wZSwgY29uZmxpY3QsIGNvbmZsaWN0UmVzb2x1dGlvbiA9IFtdO1xuICBpZiAodHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB7XG4gICAgJHNjb3BlID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgJHNjb3BlID0gd2luZG93O1xuICB9IGVsc2Uge1xuICAgICRzY29wZSA9IHt9O1xuICB9XG4gIGNvbmZsaWN0ID0gJHNjb3BlLkRlZXBEaWZmO1xuICBpZiAoY29uZmxpY3QpIHtcbiAgICBjb25mbGljdFJlc29sdXRpb24ucHVzaChcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBjb25mbGljdCAmJiAkc2NvcGUuRGVlcERpZmYgPT09IGFjY3VtdWxhdGVEaWZmKSB7XG4gICAgICAgICAgJHNjb3BlLkRlZXBEaWZmID0gY29uZmxpY3Q7XG4gICAgICAgICAgY29uZmxpY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gbm9kZWpzIGNvbXBhdGlibGUgb24gc2VydmVyIHNpZGUgYW5kIGluIHRoZSBicm93c2VyLlxuICBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvcjtcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBEaWZmKGtpbmQsIHBhdGgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2tpbmQnLCB7XG4gICAgICB2YWx1ZToga2luZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdwYXRoJywge1xuICAgICAgICB2YWx1ZTogcGF0aCxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gRGlmZkVkaXQocGF0aCwgb3JpZ2luLCB2YWx1ZSkge1xuICAgIERpZmZFZGl0LnN1cGVyXy5jYWxsKHRoaXMsICdFJywgcGF0aCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdsaHMnLCB7XG4gICAgICB2YWx1ZTogb3JpZ2luLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmhzJywge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGluaGVyaXRzKERpZmZFZGl0LCBEaWZmKTtcblxuICBmdW5jdGlvbiBEaWZmTmV3KHBhdGgsIHZhbHVlKSB7XG4gICAgRGlmZk5ldy5zdXBlcl8uY2FsbCh0aGlzLCAnTicsIHBhdGgpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmhzJywge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGluaGVyaXRzKERpZmZOZXcsIERpZmYpO1xuXG4gIGZ1bmN0aW9uIERpZmZEZWxldGVkKHBhdGgsIHZhbHVlKSB7XG4gICAgRGlmZkRlbGV0ZWQuc3VwZXJfLmNhbGwodGhpcywgJ0QnLCBwYXRoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2xocycsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICBpbmhlcml0cyhEaWZmRGVsZXRlZCwgRGlmZik7XG5cbiAgZnVuY3Rpb24gRGlmZkFycmF5KHBhdGgsIGluZGV4LCBpdGVtKSB7XG4gICAgRGlmZkFycmF5LnN1cGVyXy5jYWxsKHRoaXMsICdBJywgcGF0aCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdpbmRleCcsIHtcbiAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2l0ZW0nLCB7XG4gICAgICB2YWx1ZTogaXRlbSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICBpbmhlcml0cyhEaWZmQXJyYXksIERpZmYpO1xuXG4gIGZ1bmN0aW9uIGFycmF5UmVtb3ZlKGFyciwgZnJvbSwgdG8pIHtcbiAgICB2YXIgcmVzdCA9IGFyci5zbGljZSgodG8gfHwgZnJvbSkgKyAxIHx8IGFyci5sZW5ndGgpO1xuICAgIGFyci5sZW5ndGggPSBmcm9tIDwgMCA/IGFyci5sZW5ndGggKyBmcm9tIDogZnJvbTtcbiAgICBhcnIucHVzaC5hcHBseShhcnIsIHJlc3QpO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBmdW5jdGlvbiByZWFsVHlwZU9mKHN1YmplY3QpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0O1xuICAgIGlmICh0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgaWYgKHN1YmplY3QgPT09IE1hdGgpIHtcbiAgICAgIHJldHVybiAnbWF0aCc7XG4gICAgfSBlbHNlIGlmIChzdWJqZWN0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzdWJqZWN0KSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfSBlbHNlIGlmIChzdWJqZWN0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuICdkYXRlJztcbiAgICB9IGVsc2UgaWYgKC9eXFwvLipcXC8vLnRlc3Qoc3ViamVjdC50b1N0cmluZygpKSkge1xuICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgIH1cbiAgICByZXR1cm4gJ29iamVjdCc7XG4gIH1cblxuICBmdW5jdGlvbiBkZWVwRGlmZihsaHMsIHJocywgY2hhbmdlcywgcHJlZmlsdGVyLCBwYXRoLCBrZXksIHN0YWNrKSB7XG4gICAgcGF0aCA9IHBhdGggfHwgW107XG4gICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aC5zbGljZSgwKTtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChwcmVmaWx0ZXIgJiYgcHJlZmlsdGVyKGN1cnJlbnRQYXRoLCBrZXksIHsgbGhzOiBsaHMsIHJoczogcmhzIH0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRQYXRoLnB1c2goa2V5KTtcbiAgICB9XG4gICAgdmFyIGx0eXBlID0gdHlwZW9mIGxocztcbiAgICB2YXIgcnR5cGUgPSB0eXBlb2YgcmhzO1xuICAgIGlmIChsdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChydHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2hhbmdlcyhuZXcgRGlmZk5ldyhjdXJyZW50UGF0aCwgcmhzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNoYW5nZXMobmV3IERpZmZEZWxldGVkKGN1cnJlbnRQYXRoLCBsaHMpKTtcbiAgICB9IGVsc2UgaWYgKHJlYWxUeXBlT2YobGhzKSAhPT0gcmVhbFR5cGVPZihyaHMpKSB7XG4gICAgICBjaGFuZ2VzKG5ldyBEaWZmRWRpdChjdXJyZW50UGF0aCwgbGhzLCByaHMpKTtcbiAgICB9IGVsc2UgaWYgKGxocyBpbnN0YW5jZW9mIERhdGUgJiYgcmhzIGluc3RhbmNlb2YgRGF0ZSAmJiAoKGxocyAtIHJocykgIT09IDApKSB7XG4gICAgICBjaGFuZ2VzKG5ldyBEaWZmRWRpdChjdXJyZW50UGF0aCwgbGhzLCByaHMpKTtcbiAgICB9IGVsc2UgaWYgKGx0eXBlID09PSAnb2JqZWN0JyAmJiBsaHMgIT09IG51bGwgJiYgcmhzICE9PSBudWxsKSB7XG4gICAgICBzdGFjayA9IHN0YWNrIHx8IFtdO1xuICAgICAgaWYgKHN0YWNrLmluZGV4T2YobGhzKSA8IDApIHtcbiAgICAgICAgc3RhY2sucHVzaChsaHMpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaHMpKSB7XG4gICAgICAgICAgdmFyIGksIGxlbiA9IGxocy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPj0gcmhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBjaGFuZ2VzKG5ldyBEaWZmQXJyYXkoY3VycmVudFBhdGgsIGksIG5ldyBEaWZmRGVsZXRlZCh1bmRlZmluZWQsIGxoc1tpXSkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZXBEaWZmKGxoc1tpXSwgcmhzW2ldLCBjaGFuZ2VzLCBwcmVmaWx0ZXIsIGN1cnJlbnRQYXRoLCBpLCBzdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChpIDwgcmhzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2hhbmdlcyhuZXcgRGlmZkFycmF5KGN1cnJlbnRQYXRoLCBpLCBuZXcgRGlmZk5ldyh1bmRlZmluZWQsIHJoc1tpKytdKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYWtleXMgPSBPYmplY3Qua2V5cyhsaHMpO1xuICAgICAgICAgIHZhciBwa2V5cyA9IE9iamVjdC5rZXlzKHJocyk7XG4gICAgICAgICAgYWtleXMuZm9yRWFjaChmdW5jdGlvbihrLCBpKSB7XG4gICAgICAgICAgICB2YXIgb3RoZXIgPSBwa2V5cy5pbmRleE9mKGspO1xuICAgICAgICAgICAgaWYgKG90aGVyID49IDApIHtcbiAgICAgICAgICAgICAgZGVlcERpZmYobGhzW2tdLCByaHNba10sIGNoYW5nZXMsIHByZWZpbHRlciwgY3VycmVudFBhdGgsIGssIHN0YWNrKTtcbiAgICAgICAgICAgICAgcGtleXMgPSBhcnJheVJlbW92ZShwa2V5cywgb3RoZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVlcERpZmYobGhzW2tdLCB1bmRlZmluZWQsIGNoYW5nZXMsIHByZWZpbHRlciwgY3VycmVudFBhdGgsIGssIHN0YWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgIGRlZXBEaWZmKHVuZGVmaW5lZCwgcmhzW2tdLCBjaGFuZ2VzLCBwcmVmaWx0ZXIsIGN1cnJlbnRQYXRoLCBrLCBzdGFjayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2subGVuZ3RoID0gc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxocyAhPT0gcmhzKSB7XG4gICAgICBpZiAoIShsdHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4obGhzKSAmJiBpc05hTihyaHMpKSkge1xuICAgICAgICBjaGFuZ2VzKG5ldyBEaWZmRWRpdChjdXJyZW50UGF0aCwgbGhzLCByaHMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhY2N1bXVsYXRlRGlmZihsaHMsIHJocywgcHJlZmlsdGVyLCBhY2N1bSkge1xuICAgIGFjY3VtID0gYWNjdW0gfHwgW107XG4gICAgZGVlcERpZmYobGhzLCByaHMsXG4gICAgICBmdW5jdGlvbihkaWZmKSB7XG4gICAgICAgIGlmIChkaWZmKSB7XG4gICAgICAgICAgYWNjdW0ucHVzaChkaWZmKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpbHRlcik7XG4gICAgcmV0dXJuIChhY2N1bS5sZW5ndGgpID8gYWNjdW0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUFycmF5Q2hhbmdlKGFyciwgaW5kZXgsIGNoYW5nZSkge1xuICAgIGlmIChjaGFuZ2UucGF0aCAmJiBjaGFuZ2UucGF0aC5sZW5ndGgpIHtcbiAgICAgIHZhciBpdCA9IGFycltpbmRleF0sXG4gICAgICAgIGksIHUgPSBjaGFuZ2UucGF0aC5sZW5ndGggLSAxO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHU7IGkrKykge1xuICAgICAgICBpdCA9IGl0W2NoYW5nZS5wYXRoW2ldXTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoY2hhbmdlLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgYXBwbHlBcnJheUNoYW5nZShpdFtjaGFuZ2UucGF0aFtpXV0sIGNoYW5nZS5pbmRleCwgY2hhbmdlLml0ZW0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICBkZWxldGUgaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgaXRbY2hhbmdlLnBhdGhbaV1dID0gY2hhbmdlLnJocztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChjaGFuZ2Uua2luZCkge1xuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICBhcHBseUFycmF5Q2hhbmdlKGFycltpbmRleF0sIGNoYW5nZS5pbmRleCwgY2hhbmdlLml0ZW0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICBhcnIgPSBhcnJheVJlbW92ZShhcnIsIGluZGV4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgIGFycltpbmRleF0gPSBjaGFuZ2UucmhzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlDaGFuZ2UodGFyZ2V0LCBzb3VyY2UsIGNoYW5nZSkge1xuICAgIGlmICh0YXJnZXQgJiYgc291cmNlICYmIGNoYW5nZSAmJiBjaGFuZ2Uua2luZCkge1xuICAgICAgdmFyIGl0ID0gdGFyZ2V0LFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIGxhc3QgPSBjaGFuZ2UucGF0aCA/IGNoYW5nZS5wYXRoLmxlbmd0aCAtIDEgOiAwO1xuICAgICAgd2hpbGUgKCsraSA8IGxhc3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdFtjaGFuZ2UucGF0aFtpXV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaXRbY2hhbmdlLnBhdGhbaV1dID0gKHR5cGVvZiBjaGFuZ2UucGF0aFtpXSA9PT0gJ251bWJlcicpID8gW10gOiB7fTtcbiAgICAgICAgfVxuICAgICAgICBpdCA9IGl0W2NoYW5nZS5wYXRoW2ldXTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoY2hhbmdlLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgYXBwbHlBcnJheUNoYW5nZShjaGFuZ2UucGF0aCA/IGl0W2NoYW5nZS5wYXRoW2ldXSA6IGl0LCBjaGFuZ2UuaW5kZXgsIGNoYW5nZS5pdGVtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgZGVsZXRlIGl0W2NoYW5nZS5wYXRoW2ldXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgIGl0W2NoYW5nZS5wYXRoW2ldXSA9IGNoYW5nZS5yaHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0QXJyYXlDaGFuZ2UoYXJyLCBpbmRleCwgY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5wYXRoICYmIGNoYW5nZS5wYXRoLmxlbmd0aCkge1xuICAgICAgLy8gdGhlIHN0cnVjdHVyZSBvZiB0aGUgb2JqZWN0IGF0IHRoZSBpbmRleCBoYXMgY2hhbmdlZC4uLlxuICAgICAgdmFyIGl0ID0gYXJyW2luZGV4XSxcbiAgICAgICAgaSwgdSA9IGNoYW5nZS5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdTsgaSsrKSB7XG4gICAgICAgIGl0ID0gaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChjaGFuZ2Uua2luZCkge1xuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICByZXZlcnRBcnJheUNoYW5nZShpdFtjaGFuZ2UucGF0aFtpXV0sIGNoYW5nZS5pbmRleCwgY2hhbmdlLml0ZW0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICBpdFtjaGFuZ2UucGF0aFtpXV0gPSBjaGFuZ2UubGhzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICBpdFtjaGFuZ2UucGF0aFtpXV0gPSBjaGFuZ2UubGhzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdOJzpcbiAgICAgICAgICBkZWxldGUgaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGUgYXJyYXkgaXRlbSBpcyBkaWZmZXJlbnQuLi5cbiAgICAgIHN3aXRjaCAoY2hhbmdlLmtpbmQpIHtcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgcmV2ZXJ0QXJyYXlDaGFuZ2UoYXJyW2luZGV4XSwgY2hhbmdlLmluZGV4LCBjaGFuZ2UuaXRlbSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgIGFycltpbmRleF0gPSBjaGFuZ2UubGhzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICBhcnJbaW5kZXhdID0gY2hhbmdlLmxocztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgYXJyID0gYXJyYXlSZW1vdmUoYXJyLCBpbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRDaGFuZ2UodGFyZ2V0LCBzb3VyY2UsIGNoYW5nZSkge1xuICAgIGlmICh0YXJnZXQgJiYgc291cmNlICYmIGNoYW5nZSAmJiBjaGFuZ2Uua2luZCkge1xuICAgICAgdmFyIGl0ID0gdGFyZ2V0LFxuICAgICAgICBpLCB1O1xuICAgICAgdSA9IGNoYW5nZS5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdTsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRbY2hhbmdlLnBhdGhbaV1dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGl0W2NoYW5nZS5wYXRoW2ldXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGl0ID0gaXRbY2hhbmdlLnBhdGhbaV1dO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChjaGFuZ2Uua2luZCkge1xuICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAvLyBBcnJheSB3YXMgbW9kaWZpZWQuLi5cbiAgICAgICAgICAvLyBpdCB3aWxsIGJlIGFuIGFycmF5Li4uXG4gICAgICAgICAgcmV2ZXJ0QXJyYXlDaGFuZ2UoaXRbY2hhbmdlLnBhdGhbaV1dLCBjaGFuZ2UuaW5kZXgsIGNoYW5nZS5pdGVtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRCc6XG4gICAgICAgICAgLy8gSXRlbSB3YXMgZGVsZXRlZC4uLlxuICAgICAgICAgIGl0W2NoYW5nZS5wYXRoW2ldXSA9IGNoYW5nZS5saHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0UnOlxuICAgICAgICAgIC8vIEl0ZW0gd2FzIGVkaXRlZC4uLlxuICAgICAgICAgIGl0W2NoYW5nZS5wYXRoW2ldXSA9IGNoYW5nZS5saHM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgIC8vIEl0ZW0gaXMgbmV3Li4uXG4gICAgICAgICAgZGVsZXRlIGl0W2NoYW5nZS5wYXRoW2ldXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseURpZmYodGFyZ2V0LCBzb3VyY2UsIGZpbHRlcikge1xuICAgIGlmICh0YXJnZXQgJiYgc291cmNlKSB7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbihjaGFuZ2UpIHtcbiAgICAgICAgaWYgKCFmaWx0ZXIgfHwgZmlsdGVyKHRhcmdldCwgc291cmNlLCBjaGFuZ2UpKSB7XG4gICAgICAgICAgYXBwbHlDaGFuZ2UodGFyZ2V0LCBzb3VyY2UsIGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkZWVwRGlmZih0YXJnZXQsIHNvdXJjZSwgb25DaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGFjY3VtdWxhdGVEaWZmLCB7XG5cbiAgICBkaWZmOiB7XG4gICAgICB2YWx1ZTogYWNjdW11bGF0ZURpZmYsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBvYnNlcnZhYmxlRGlmZjoge1xuICAgICAgdmFsdWU6IGRlZXBEaWZmLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgYXBwbHlEaWZmOiB7XG4gICAgICB2YWx1ZTogYXBwbHlEaWZmLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgYXBwbHlDaGFuZ2U6IHtcbiAgICAgIHZhbHVlOiBhcHBseUNoYW5nZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LFxuICAgIHJldmVydENoYW5nZToge1xuICAgICAgdmFsdWU6IHJldmVydENoYW5nZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9LFxuICAgIGlzQ29uZmxpY3Q6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnICE9PSB0eXBlb2YgY29uZmxpY3Q7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgbm9Db25mbGljdDoge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uZmxpY3RSZXNvbHV0aW9uKSB7XG4gICAgICAgICAgY29uZmxpY3RSZXNvbHV0aW9uLmZvckVhY2goZnVuY3Rpb24oaXQpIHtcbiAgICAgICAgICAgIGl0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uZmxpY3RSZXNvbHV0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0ZURpZmY7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFjY3VtdWxhdGVEaWZmO1xufSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgey8qKi99XG5cblx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzBdLFxuXHRcdGkgPSAxLFxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fSBlbHNlIGlmICgodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykgfHwgdGFyZ2V0ID09IG51bGwpIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzW2ldO1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAob3B0aW9ucyAhPSBudWxsKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSAwO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVtaXR0ZXIuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gMTtcbiAgZWxzZVxuICAgIHJldCA9IGVtaXR0ZXIuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCIvLyAgICAgdXVpZC5qc1xuLy9cbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMiBSb2JlcnQgS2llZmZlclxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBfZ2xvYmFsID0gdGhpcztcblxuICAvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgV2UgZmVhdHVyZVxuICAvLyBkZXRlY3QgdG8gZGV0ZXJtaW5lIHRoZSBiZXN0IFJORyBzb3VyY2UsIG5vcm1hbGl6aW5nIHRvIGEgZnVuY3Rpb24gdGhhdFxuICAvLyByZXR1cm5zIDEyOC1iaXRzIG9mIHJhbmRvbW5lc3MsIHNpbmNlIHRoYXQncyB3aGF0J3MgdXN1YWxseSByZXF1aXJlZFxuICB2YXIgX3JuZztcblxuICAvLyBOb2RlLmpzIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vbm9kZWpzLm9yZy9kb2NzL3YwLjYuMi9hcGkvY3J5cHRvLmh0bWxcbiAgLy9cbiAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcbiAgaWYgKHR5cGVvZihfZ2xvYmFsLnJlcXVpcmUpID09ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9yYiA9IF9nbG9iYWwucmVxdWlyZSgnY3J5cHRvJykucmFuZG9tQnl0ZXM7XG4gICAgICBfcm5nID0gX3JiICYmIGZ1bmN0aW9uKCkge3JldHVybiBfcmIoMTYpO307XG4gICAgfSBjYXRjaChlKSB7fVxuICB9XG5cbiAgaWYgKCFfcm5nICYmIF9nbG9iYWwuY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBXSEFUV0cgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgICAvL1xuICAgIC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG4gICAgdmFyIF9ybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICBfcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhfcm5kczgpO1xuICAgICAgcmV0dXJuIF9ybmRzODtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFfcm5nKSB7XG4gICAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAgIC8vXG4gICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgICAvLyBxdWFsaXR5LlxuICAgIHZhciAgX3JuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICAgIF9ybmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgICAgX3JuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcm5kcztcbiAgICB9O1xuICB9XG5cbiAgLy8gQnVmZmVyIGNsYXNzIHRvIHVzZVxuICB2YXIgQnVmZmVyQ2xhc3MgPSB0eXBlb2YoX2dsb2JhbC5CdWZmZXIpID09ICdmdW5jdGlvbicgPyBfZ2xvYmFsLkJ1ZmZlciA6IEFycmF5O1xuXG4gIC8vIE1hcHMgZm9yIG51bWJlciA8LT4gaGV4IHN0cmluZyBjb252ZXJzaW9uXG4gIHZhciBfYnl0ZVRvSGV4ID0gW107XG4gIHZhciBfaGV4VG9CeXRlID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBfYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgICBfaGV4VG9CeXRlW19ieXRlVG9IZXhbaV1dID0gaTtcbiAgfVxuXG4gIC8vICoqYHBhcnNlKClgIC0gUGFyc2UgYSBVVUlEIGludG8gaXQncyBjb21wb25lbnQgYnl0ZXMqKlxuICBmdW5jdGlvbiBwYXJzZShzLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gKGJ1ZiAmJiBvZmZzZXQpIHx8IDAsIGlpID0gMDtcblxuICAgIGJ1ZiA9IGJ1ZiB8fCBbXTtcbiAgICBzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWzAtOWEtZl17Mn0vZywgZnVuY3Rpb24ob2N0KSB7XG4gICAgICBpZiAoaWkgPCAxNikgeyAvLyBEb24ndCBvdmVyZmxvdyFcbiAgICAgICAgYnVmW2kgKyBpaSsrXSA9IF9oZXhUb0J5dGVbb2N0XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFplcm8gb3V0IHJlbWFpbmluZyBieXRlcyBpZiBzdHJpbmcgd2FzIHNob3J0XG4gICAgd2hpbGUgKGlpIDwgMTYpIHtcbiAgICAgIGJ1ZltpICsgaWkrK10gPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICAvLyAqKmB1bnBhcnNlKClgIC0gQ29udmVydCBVVUlEIGJ5dGUgYXJyYXkgKGFsYSBwYXJzZSgpKSBpbnRvIGEgc3RyaW5nKipcbiAgZnVuY3Rpb24gdW5wYXJzZShidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gb2Zmc2V0IHx8IDAsIGJ0aCA9IF9ieXRlVG9IZXg7XG4gICAgcmV0dXJuICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbiAgfVxuXG4gIC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbiAgLy9cbiAgLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbiAgLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxuICAvLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxuICB2YXIgX3NlZWRCeXRlcyA9IF9ybmcoKTtcblxuICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgdmFyIF9ub2RlSWQgPSBbXG4gICAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuICBdO1xuXG4gIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gIHZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbiAgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG4gIHZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuICBmdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICAgIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9IG51bGwgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gICAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAgIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAgIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gICAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPSBudWxsID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAgIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gICAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPSBudWxsID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gICAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICAgIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gICAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gICAgLy8gdGltZSBpbnRlcnZhbFxuICAgIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PSBudWxsKSB7XG4gICAgICBuc2VjcyA9IDA7XG4gICAgfVxuXG4gICAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICAgIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gICAgfVxuXG4gICAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICAgIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAgIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gICAgLy8gYHRpbWVfbG93YFxuICAgIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAgIC8vIGB0aW1lX21pZGBcbiAgICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gICAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gICAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgICAvLyBgbm9kZWBcbiAgICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgbisrKSB7XG4gICAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IHVucGFyc2UoYik7XG4gIH1cblxuICAvLyAqKmB2NCgpYCAtIEdlbmVyYXRlIHJhbmRvbSBVVUlEKipcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG4gIGZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgLy8gRGVwcmVjYXRlZCAtICdmb3JtYXQnIGFyZ3VtZW50LCBhcyBzdXBwb3J0ZWQgaW4gdjEuMlxuICAgIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gICAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBCdWZmZXJDbGFzcygxNikgOiBudWxsO1xuICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZykoKTtcblxuICAgIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gICAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gICAgaWYgKGJ1Zikge1xuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyBpaSsrKSB7XG4gICAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZiB8fCB1bnBhcnNlKHJuZHMpO1xuICB9XG5cbiAgLy8gRXhwb3J0IHB1YmxpYyBBUElcbiAgdmFyIHV1aWQgPSB2NDtcbiAgdXVpZC52MSA9IHYxO1xuICB1dWlkLnY0ID0gdjQ7XG4gIHV1aWQucGFyc2UgPSBwYXJzZTtcbiAgdXVpZC51bnBhcnNlID0gdW5wYXJzZTtcbiAgdXVpZC5CdWZmZXJDbGFzcyA9IEJ1ZmZlckNsYXNzO1xuXG4gIGlmICh0eXBlb2YobW9kdWxlKSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIC8vIFB1Ymxpc2ggYXMgbm9kZS5qcyBtb2R1bGVcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4gIH0gZWxzZSAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIFB1Ymxpc2ggYXMgQU1EIG1vZHVsZVxuICAgIGRlZmluZShmdW5jdGlvbigpIHtyZXR1cm4gdXVpZDt9KTtcbiBcblxuICB9IGVsc2Uge1xuICAgIC8vIFB1Ymxpc2ggYXMgZ2xvYmFsIChpbiBicm93c2VycylcbiAgICB2YXIgX3ByZXZpb3VzUm9vdCA9IF9nbG9iYWwudXVpZDtcblxuICAgIC8vICoqYG5vQ29uZmxpY3QoKWAgLSAoYnJvd3NlciBvbmx5KSB0byByZXNldCBnbG9iYWwgJ3V1aWQnIHZhcioqXG4gICAgdXVpZC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBfZ2xvYmFsLnV1aWQgPSBfcHJldmlvdXNSb290O1xuICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfTtcblxuICAgIF9nbG9iYWwudXVpZCA9IHV1aWQ7XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiMTAqXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIjEwXlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMCxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbcGldXCI6IHtcbiAgICBcInZhbHVlXCI6IDMuMTQxNTkyNjUzNTg5NzkzLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIiVcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxMCotMlwiXG4gIH0sXG4gIFwiW3BwdGhdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTNcIlxuICB9LFxuICBcIltwcG1dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTZcIlxuICB9LFxuICBcIltwcGJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMTAqLTlcIlxuICB9LFxuICBcIltwcHRyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi0xMlwiXG4gIH0sXG4gIFwibW9sXCI6IHtcbiAgICBcInZhbHVlXCI6IDYuMDIyMTM2NyxcbiAgICBcInVjdW1cIjogXCIxMCoyM1wiXG4gIH0sXG4gIFwic3JcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJyYWQyXCJcbiAgfSxcbiAgXCJIelwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcInMtMVwiXG4gIH0sXG4gIFwiTlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImtnLm0vczJcIlxuICB9LFxuICBcIlBhXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiTi9tMlwiXG4gIH0sXG4gIFwiSlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIk4ubVwiXG4gIH0sXG4gIFwiV1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkovc1wiXG4gIH0sXG4gIFwiQVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkMvc1wiXG4gIH0sXG4gIFwiVlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkovQ1wiXG4gIH0sXG4gIFwiRlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIkMvVlwiXG4gIH0sXG4gIFwiT2htXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiVi9BXCJcbiAgfSxcbiAgXCJTXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiT2htLTFcIlxuICB9LFxuICBcIldiXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiVi5zXCJcbiAgfSxcbiAgXCJDZWxcIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJjZWwoMSBLKVwiXG4gIH0sXG4gIFwiVFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIldiL20yXCJcbiAgfSxcbiAgXCJIXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiV2IvQVwiXG4gIH0sXG4gIFwibG1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjZC5zclwiXG4gIH0sXG4gIFwibHhcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJsbS9tMlwiXG4gIH0sXG4gIFwiQnFcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJzLTFcIlxuICB9LFxuICBcIkd5XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiSi9rZ1wiXG4gIH0sXG4gIFwiU3ZcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJKL2tnXCJcbiAgfSxcbiAgXCJnb25cIjoge1xuICAgIFwidmFsdWVcIjogMC45LFxuICAgIFwidWN1bVwiOiBcImRlZ1wiXG4gIH0sXG4gIFwiZGVnXCI6IHtcbiAgICBcInZhbHVlXCI6IDIsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpXS5yYWQvMzYwXCJcbiAgfSxcbiAgXCInXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZGVnLzYwXCJcbiAgfSxcbiAgXCInJ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIicvNjBcIlxuICB9LFxuICBcImxcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJkbTNcIlxuICB9LFxuICBcIkxcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJsXCJcbiAgfSxcbiAgXCJhclwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwibTJcIlxuICB9LFxuICBcIm1pblwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2MCxcbiAgICBcInVjdW1cIjogXCJzXCJcbiAgfSxcbiAgXCJoXCI6IHtcbiAgICBcInZhbHVlXCI6IDYwLFxuICAgIFwidWN1bVwiOiBcIm1pblwiXG4gIH0sXG4gIFwiZFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyNCxcbiAgICBcInVjdW1cIjogXCJoXCJcbiAgfSxcbiAgXCJhX3RcIjoge1xuICAgIFwidmFsdWVcIjogMzY1LjI0MjE5LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcImFfalwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNjUuMjUsXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwiYV9nXCI6IHtcbiAgICBcInZhbHVlXCI6IDM2NS4yNDI1LFxuICAgIFwidWN1bVwiOiBcImRcIlxuICB9LFxuICBcImFcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJhX2pcIlxuICB9LFxuICBcIndrXCI6IHtcbiAgICBcInZhbHVlXCI6IDcsXG4gICAgXCJ1Y3VtXCI6IFwiZFwiXG4gIH0sXG4gIFwibW9fc1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyOS41MzA1OSxcbiAgICBcInVjdW1cIjogXCJkXCJcbiAgfSxcbiAgXCJtb19qXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiYV9qLzEyXCJcbiAgfSxcbiAgXCJtb19nXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiYV9nLzEyXCJcbiAgfSxcbiAgXCJtb1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1vX2pcIlxuICB9LFxuICBcInRcIjoge1xuICAgIFwidmFsdWVcIjogMTAwMCxcbiAgICBcInVjdW1cIjogXCJrZ1wiXG4gIH0sXG4gIFwiYmFyXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMDAwMCxcbiAgICBcInVjdW1cIjogXCJQYVwiXG4gIH0sXG4gIFwidVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjY2MDU0MDJlLTI0LFxuICAgIFwidWN1bVwiOiBcImdcIlxuICB9LFxuICBcImVWXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2VdLlZcIlxuICB9LFxuICBcIkFVXCI6IHtcbiAgICBcInZhbHVlXCI6IDE0OTU5Ny44NzA2OTEsXG4gICAgXCJ1Y3VtXCI6IFwiTW1cIlxuICB9LFxuICBcInBjXCI6IHtcbiAgICBcInZhbHVlXCI6IDMwODU2NzgwMDAwMDAwMDAwLFxuICAgIFwidWN1bVwiOiBcIm1cIlxuICB9LFxuICBcIltjXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyOTk3OTI0NTgsXG4gICAgXCJ1Y3VtXCI6IFwibS9zXCJcbiAgfSxcbiAgXCJbaF1cIjoge1xuICAgIFwidmFsdWVcIjogNi42MjYwNzU1ZS0yNCxcbiAgICBcInVjdW1cIjogXCJKLnNcIlxuICB9LFxuICBcIltrXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjM4MDY1OGUtMjMsXG4gICAgXCJ1Y3VtXCI6IFwiSi9LXCJcbiAgfSxcbiAgXCJbZXBzXzBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDguODU0MTg3ODE3ZS0xMixcbiAgICBcInVjdW1cIjogXCJGL21cIlxuICB9LFxuICBcIlttdV8wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjQuW3BpXS4xMCotNy5OL0EyXCJcbiAgfSxcbiAgXCJbZV1cIjoge1xuICAgIFwidmFsdWVcIjogMS42MDIxNzczM2UtMTksXG4gICAgXCJ1Y3VtXCI6IFwiQ1wiXG4gIH0sXG4gIFwiW21fZV1cIjoge1xuICAgIFwidmFsdWVcIjogOS4xMDkzODk3ZS0yOCxcbiAgICBcInVjdW1cIjogXCJnXCJcbiAgfSxcbiAgXCJbbV9wXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjY3MjYyMzFlLTI0LFxuICAgIFwidWN1bVwiOiBcImdcIlxuICB9LFxuICBcIltHXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LjY3MjU5ZS0xMSxcbiAgICBcInVjdW1cIjogXCJtMy5rZy0xLnMtMlwiXG4gIH0sXG4gIFwiW2ddXCI6IHtcbiAgICBcInZhbHVlXCI6IDkuODA2NjUsXG4gICAgXCJ1Y3VtXCI6IFwibS9zMlwiXG4gIH0sXG4gIFwiYXRtXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMTMyNSxcbiAgICBcInVjdW1cIjogXCJQYVwiXG4gIH0sXG4gIFwiW2x5XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltjXS5hX2pcIlxuICB9LFxuICBcImdmXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy5bZ11cIlxuICB9LFxuICBcIltsYmZfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiX2F2XS5bZ11cIlxuICB9LFxuICBcIkt5XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY20tMVwiXG4gIH0sXG4gIFwiR2FsXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY20vczJcIlxuICB9LFxuICBcImR5blwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcuY20vczJcIlxuICB9LFxuICBcImVyZ1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImR5bi5jbVwiXG4gIH0sXG4gIFwiUFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImR5bi5zL2NtMlwiXG4gIH0sXG4gIFwiQmlcIjoge1xuICAgIFwidmFsdWVcIjogMTAsXG4gICAgXCJ1Y3VtXCI6IFwiQVwiXG4gIH0sXG4gIFwiU3RcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjbTIvc1wiXG4gIH0sXG4gIFwiTXhcIjoge1xuICAgIFwidmFsdWVcIjogMWUtOCxcbiAgICBcInVjdW1cIjogXCJXYlwiXG4gIH0sXG4gIFwiR1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAwMDEsXG4gICAgXCJ1Y3VtXCI6IFwiVFwiXG4gIH0sXG4gIFwiT2VcIjoge1xuICAgIFwidmFsdWVcIjogMjUwLFxuICAgIFwidWN1bVwiOiBcIi9bcGldLkEvbVwiXG4gIH0sXG4gIFwiR2JcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJPZS5jbVwiXG4gIH0sXG4gIFwic2JcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJjZC9jbTJcIlxuICB9LFxuICBcIkxtYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImNkL2NtMi9bcGldXCJcbiAgfSxcbiAgXCJwaFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAwMDEsXG4gICAgXCJ1Y3VtXCI6IFwibHhcIlxuICB9LFxuICBcIkNpXCI6IHtcbiAgICBcInZhbHVlXCI6IDM3MDAwMDAwMDAwLFxuICAgIFwidWN1bVwiOiBcIkJxXCJcbiAgfSxcbiAgXCJSXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMDAwMjU4LFxuICAgIFwidWN1bVwiOiBcIkMva2dcIlxuICB9LFxuICBcIlJBRFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwiZXJnL2dcIlxuICB9LFxuICBcIlJFTVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlJBRFwiXG4gIH0sXG4gIFwiW2luX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDIuNTQsXG4gICAgXCJ1Y3VtXCI6IFwiY21cIlxuICB9LFxuICBcIltmdF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbaW5faV1cIlxuICB9LFxuICBcIlt5ZF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLFxuICAgIFwidWN1bVwiOiBcIltmdF9pXVwiXG4gIH0sXG4gIFwiW21pX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDUyODAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldXCJcbiAgfSxcbiAgXCJbZnRoX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDYsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldXCJcbiAgfSxcbiAgXCJbbm1pX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDE4NTIsXG4gICAgXCJ1Y3VtXCI6IFwibVwiXG4gIH0sXG4gIFwiW2tuX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW25taV9pXS9oXCJcbiAgfSxcbiAgXCJbc2luX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldMlwiXG4gIH0sXG4gIFwiW3NmdF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmdF9pXTJcIlxuICB9LFxuICBcIltzeWRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbeWRfaV0yXCJcbiAgfSxcbiAgXCJbY2luX2ldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldM1wiXG4gIH0sXG4gIFwiW2NmdF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmdF9pXTNcIlxuICB9LFxuICBcIltjeWRfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbeWRfaV0zXCJcbiAgfSxcbiAgXCJbYmZfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMTQ0LFxuICAgIFwidWN1bVwiOiBcIltpbl9pXTNcIlxuICB9LFxuICBcIltjcl9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMjgsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2ldM1wiXG4gIH0sXG4gIFwiW21pbF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAwMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV1cIlxuICB9LFxuICBcIltjbWxfaV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcGldLzQuW21pbF9pXTJcIlxuICB9LFxuICBcIltoZF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LFxuICAgIFwidWN1bVwiOiBcIltpbl9pXVwiXG4gIH0sXG4gIFwiW2Z0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMjAwLFxuICAgIFwidWN1bVwiOiBcIm0vMzkzN1wiXG4gIH0sXG4gIFwiW3lkX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzLFxuICAgIFwidWN1bVwiOiBcIltmdF91c11cIlxuICB9LFxuICBcIltpbl91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZnRfdXNdLzEyXCJcbiAgfSxcbiAgXCJbcmRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDE2LjUsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X3VzXVwiXG4gIH0sXG4gIFwiW2NoX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LFxuICAgIFwidWN1bVwiOiBcIltyZF91c11cIlxuICB9LFxuICBcIltsa191c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbY2hfdXNdLzEwMFwiXG4gIH0sXG4gIFwiW3JjaF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTAwLFxuICAgIFwidWN1bVwiOiBcIltmdF91c11cIlxuICB9LFxuICBcIltybGtfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3JjaF91c10vMTAwXCJcbiAgfSxcbiAgXCJbZnRoX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA2LFxuICAgIFwidWN1bVwiOiBcIltmdF91c11cIlxuICB9LFxuICBcIltmdXJfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQwLFxuICAgIFwidWN1bVwiOiBcIltyZF91c11cIlxuICB9LFxuICBcIlttaV91c11cIjoge1xuICAgIFwidmFsdWVcIjogOCxcbiAgICBcInVjdW1cIjogXCJbZnVyX3VzXVwiXG4gIH0sXG4gIFwiW2Fjcl91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTYwLFxuICAgIFwidWN1bVwiOiBcIltyZF91c10yXCJcbiAgfSxcbiAgXCJbc3JkX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltyZF91c10yXCJcbiAgfSxcbiAgXCJbc21pX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlttaV91c10yXCJcbiAgfSxcbiAgXCJbc2N0XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlttaV91c10yXCJcbiAgfSxcbiAgXCJbdHdwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAzNixcbiAgICBcInVjdW1cIjogXCJbc2N0XVwiXG4gIH0sXG4gIFwiW21pbF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMC4wMDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX3VzXVwiXG4gIH0sXG4gIFwiW2luX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyLjUzOTk5OCxcbiAgICBcInVjdW1cIjogXCJjbVwiXG4gIH0sXG4gIFwiW2Z0X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbaW5fYnJdXCJcbiAgfSxcbiAgXCJbcmRfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDE2LjUsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW2NoX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LFxuICAgIFwidWN1bVwiOiBcIltyZF9icl1cIlxuICB9LFxuICBcIltsa19icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbY2hfYnJdLzEwMFwiXG4gIH0sXG4gIFwiW2Z0aF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogNixcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbcGNfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIuNSxcbiAgICBcInVjdW1cIjogXCJbZnRfYnJdXCJcbiAgfSxcbiAgXCJbeWRfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDMsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW21pX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1MjgwLFxuICAgIFwidWN1bVwiOiBcIltmdF9icl1cIlxuICB9LFxuICBcIltubWlfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDYwODAsXG4gICAgXCJ1Y3VtXCI6IFwiW2Z0X2JyXVwiXG4gIH0sXG4gIFwiW2tuX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltubWlfYnJdL2hcIlxuICB9LFxuICBcIlthY3JfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDQ4NDAsXG4gICAgXCJ1Y3VtXCI6IFwiW3lkX2JyXTJcIlxuICB9LFxuICBcIltnYWxfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDIzMSxcbiAgICBcInVjdW1cIjogXCJbaW5faV0zXCJcbiAgfSxcbiAgXCJbYmJsX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0MixcbiAgICBcInVjdW1cIjogXCJbZ2FsX3VzXVwiXG4gIH0sXG4gIFwiW3F0X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltnYWxfdXNdLzRcIlxuICB9LFxuICBcIltwdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcXRfdXNdLzJcIlxuICB9LFxuICBcIltnaWxfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3B0X3VzXS80XCJcbiAgfSxcbiAgXCJbZm96X3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltnaWxfdXNdLzRcIlxuICB9LFxuICBcIltmZHJfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zvel91c10vOFwiXG4gIH0sXG4gIFwiW21pbl91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZmRyX3VzXS82MFwiXG4gIH0sXG4gIFwiW2NyZF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMTI4LFxuICAgIFwidWN1bVwiOiBcIltmdF9pXTNcIlxuICB9LFxuICBcIltidV91c11cIjoge1xuICAgIFwidmFsdWVcIjogMjE1MC40MixcbiAgICBcInVjdW1cIjogXCJbaW5faV0zXCJcbiAgfSxcbiAgXCJbZ2FsX3dpXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltidV91c10vOFwiXG4gIH0sXG4gIFwiW3BrX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltidV91c10vNFwiXG4gIH0sXG4gIFwiW2RxdF91c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcGtfdXNdLzhcIlxuICB9LFxuICBcIltkcHRfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2RxdF91c10vMlwiXG4gIH0sXG4gIFwiW3Ric191c11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZm96X3VzXS8yXCJcbiAgfSxcbiAgXCJbdHNwX3VzXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIlt0YnNfdXNdLzNcIlxuICB9LFxuICBcIltjdXBfdXNdXCI6IHtcbiAgICBcInZhbHVlXCI6IDE2LFxuICAgIFwidWN1bVwiOiBcIlt0YnNfdXNdXCJcbiAgfSxcbiAgXCJbZm96X21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDMwLFxuICAgIFwidWN1bVwiOiBcIm1MXCJcbiAgfSxcbiAgXCJbY3VwX21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDI0MCxcbiAgICBcInVjdW1cIjogXCJtTFwiXG4gIH0sXG4gIFwiW3RzcF9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA1LFxuICAgIFwidWN1bVwiOiBcIm1MXCJcbiAgfSxcbiAgXCJbdGJzX21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDE1LFxuICAgIFwidWN1bVwiOiBcIm1MXCJcbiAgfSxcbiAgXCJbZ2FsX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjU0NjA5LFxuICAgIFwidWN1bVwiOiBcImxcIlxuICB9LFxuICBcIltwa19icl1cIjoge1xuICAgIFwidmFsdWVcIjogMixcbiAgICBcInVjdW1cIjogXCJbZ2FsX2JyXVwiXG4gIH0sXG4gIFwiW2J1X2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LFxuICAgIFwidWN1bVwiOiBcIltwa19icl1cIlxuICB9LFxuICBcIltxdF9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZ2FsX2JyXS80XCJcbiAgfSxcbiAgXCJbcHRfYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW3F0X2JyXS8yXCJcbiAgfSxcbiAgXCJbZ2lsX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltwdF9icl0vNFwiXG4gIH0sXG4gIFwiW2Zvel9icl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbZ2lsX2JyXS81XCJcbiAgfSxcbiAgXCJbZmRyX2JyXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltmb3pfYnJdLzhcIlxuICB9LFxuICBcIlttaW5fYnJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2Zkcl9icl0vNjBcIlxuICB9LFxuICBcIltncl1cIjoge1xuICAgIFwidmFsdWVcIjogNjQuNzk4OTEsXG4gICAgXCJ1Y3VtXCI6IFwibWdcIlxuICB9LFxuICBcIltsYl9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogNzAwMCxcbiAgICBcInVjdW1cIjogXCJbZ3JdXCJcbiAgfSxcbiAgXCJbb3pfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiX2F2XS8xNlwiXG4gIH0sXG4gIFwiW2RyX2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltvel9hdl0vMTZcIlxuICB9LFxuICBcIltzY3d0X2F2XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwiW2xiX2F2XVwiXG4gIH0sXG4gIFwiW2xjd3RfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDExMixcbiAgICBcInVjdW1cIjogXCJbbGJfYXZdXCJcbiAgfSxcbiAgXCJbc3Rvbl9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMjAsXG4gICAgXCJ1Y3VtXCI6IFwiW3Njd3RfYXZdXCJcbiAgfSxcbiAgXCJbbHRvbl9hdl1cIjoge1xuICAgIFwidmFsdWVcIjogMjAsXG4gICAgXCJ1Y3VtXCI6IFwiW2xjd3RfYXZdXCJcbiAgfSxcbiAgXCJbc3RvbmVfYXZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDE0LFxuICAgIFwidWN1bVwiOiBcIltsYl9hdl1cIlxuICB9LFxuICBcIltwd3RfdHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDI0LFxuICAgIFwidWN1bVwiOiBcIltncl1cIlxuICB9LFxuICBcIltvel90cl1cIjoge1xuICAgIFwidmFsdWVcIjogMjAsXG4gICAgXCJ1Y3VtXCI6IFwiW3B3dF90cl1cIlxuICB9LFxuICBcIltsYl90cl1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW296X3RyXVwiXG4gIH0sXG4gIFwiW3NjX2FwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAyMCxcbiAgICBcInVjdW1cIjogXCJbZ3JdXCJcbiAgfSxcbiAgXCJbZHJfYXBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDMsXG4gICAgXCJ1Y3VtXCI6IFwiW3NjX2FwXVwiXG4gIH0sXG4gIFwiW296X2FwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA4LFxuICAgIFwidWN1bVwiOiBcIltkcl9hcF1cIlxuICB9LFxuICBcIltsYl9hcF1cIjoge1xuICAgIFwidmFsdWVcIjogMTIsXG4gICAgXCJ1Y3VtXCI6IFwiW296X2FwXVwiXG4gIH0sXG4gIFwiW296X21dXCI6IHtcbiAgICBcInZhbHVlXCI6IDI4LFxuICAgIFwidWN1bVwiOiBcImdcIlxuICB9LFxuICBcIltsbmVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldLzEyXCJcbiAgfSxcbiAgXCJbcG50XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsbmVdLzZcIlxuICB9LFxuICBcIltwY2FdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltwbnRdXCJcbiAgfSxcbiAgXCJbcG50X3ByXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjAxMzgzNyxcbiAgICBcInVjdW1cIjogXCJbaW5faV1cIlxuICB9LFxuICBcIltwY2FfcHJdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEyLFxuICAgIFwidWN1bVwiOiBcIltwbnRfcHJdXCJcbiAgfSxcbiAgXCJbcGllZF1cIjoge1xuICAgIFwidmFsdWVcIjogMzIuNDgsXG4gICAgXCJ1Y3VtXCI6IFwiY21cIlxuICB9LFxuICBcIltwb3VjZV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcGllZF0vMTJcIlxuICB9LFxuICBcIltsaWduZV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJbcG91Y2VdLzEyXCJcbiAgfSxcbiAgXCJbZGlkb3RdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiW2xpZ25lXS82XCJcbiAgfSxcbiAgXCJbY2ljZXJvXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMixcbiAgICBcInVjdW1cIjogXCJbZGlkb3RdXCJcbiAgfSxcbiAgXCJbZGVnRl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJkZWdmKDUgSy85KVwiXG4gIH0sXG4gIFwiW2RlZ1JdXCI6IHtcbiAgICBcInZhbHVlXCI6IDUsXG4gICAgXCJ1Y3VtXCI6IFwiSy85XCJcbiAgfSxcbiAgXCJjYWxfWzE1XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA0LjE4NTgsXG4gICAgXCJ1Y3VtXCI6IFwiSlwiXG4gIH0sXG4gIFwiY2FsX1syMF1cIjoge1xuICAgIFwidmFsdWVcIjogNC4xODE5LFxuICAgIFwidWN1bVwiOiBcIkpcIlxuICB9LFxuICBcImNhbF9tXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTkwMDIsXG4gICAgXCJ1Y3VtXCI6IFwiSlwiXG4gIH0sXG4gIFwiY2FsX0lUXCI6IHtcbiAgICBcInZhbHVlXCI6IDQuMTg2OCxcbiAgICBcInVjdW1cIjogXCJKXCJcbiAgfSxcbiAgXCJjYWxfdGhcIjoge1xuICAgIFwidmFsdWVcIjogNC4xODQsXG4gICAgXCJ1Y3VtXCI6IFwiSlwiXG4gIH0sXG4gIFwiY2FsXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiY2FsX3RoXCJcbiAgfSxcbiAgXCJbQ2FsXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImtjYWxfdGhcIlxuICB9LFxuICBcIltCdHVfMzldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU5NjcsXG4gICAgXCJ1Y3VtXCI6IFwia0pcIlxuICB9LFxuICBcIltCdHVfNTldXCI6IHtcbiAgICBcInZhbHVlXCI6IDEuMDU0OCxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV82MF1cIjoge1xuICAgIFwidmFsdWVcIjogMS4wNTQ2OCxcbiAgICBcInVjdW1cIjogXCJrSlwiXG4gIH0sXG4gIFwiW0J0dV9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1NTg3LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1X0lUXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1NTA1NTg1MjYyLFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1X3RoXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLjA1NDM1LFxuICAgIFwidWN1bVwiOiBcImtKXCJcbiAgfSxcbiAgXCJbQnR1XVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltCdHVfdGhdXCJcbiAgfSxcbiAgXCJbSFBdXCI6IHtcbiAgICBcInZhbHVlXCI6IDU1MCxcbiAgICBcInVjdW1cIjogXCJbZnRfaV0uW2xiZl9hdl0vc1wiXG4gIH0sXG4gIFwidGV4XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiZy9rbVwiXG4gIH0sXG4gIFwiW2Rlbl1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJnLzkva21cIlxuICB9LFxuICBcIm1bSDJPXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiA5LjgwNjY1LFxuICAgIFwidWN1bVwiOiBcImtQYVwiXG4gIH0sXG4gIFwibVtIZ11cIjoge1xuICAgIFwidmFsdWVcIjogMTMzLjMyMixcbiAgICBcInVjdW1cIjogXCJrUGFcIlxuICB9LFxuICBcIltpbl9pJ0gyT11cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtW0gyT10uW2luX2ldL21cIlxuICB9LFxuICBcIltpbl9pJ0hnXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1bSGddLltpbl9pXS9tXCJcbiAgfSxcbiAgXCJbUFJVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1tW0hnXS5zL21sXCJcbiAgfSxcbiAgXCJbd29vZCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1tW0hnXS5taW4vTFwiXG4gIH0sXG4gIFwiW2Rpb3BdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiL21cIlxuICB9LFxuICBcIltwJ2Rpb3BdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMTAwdGFuKDEgcmFkKVwiXG4gIH0sXG4gIFwiJVtzbG9wZV1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIxMDB0YW4oMSByYWQpXCJcbiAgfSxcbiAgXCJbbWVzaF9pXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIi9baW5faV1cIlxuICB9LFxuICBcIltDaF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtbS8zXCJcbiAgfSxcbiAgXCJbZHJwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1sLzIwXCJcbiAgfSxcbiAgXCJbaG5zZidVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltNRVRdXCI6IHtcbiAgICBcInZhbHVlXCI6IDMuNSxcbiAgICBcInVjdW1cIjogXCJtTC9taW4va2dcIlxuICB9LFxuICBcIltocCdfWF1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJocFgoMSAxKVwiXG4gIH0sXG4gIFwiW2hwJ19DXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImhwQygxIDEpXCJcbiAgfSxcbiAgXCJbaHAnX01dXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiaHBNKDEgMSlcIlxuICB9LFxuICBcIltocCdfUV1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCJocFEoMSAxKVwiXG4gIH0sXG4gIFwiW2hwX1hdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2hwX0NdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2hwX01dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2hwX1FdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2twX1hdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2twX0NdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2twX01dXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2twX1FdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiZXFcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtb2xcIlxuICB9LFxuICBcIm9zbVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIm1vbFwiXG4gIH0sXG4gIFwiW3BIXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcInBIKDEgbW9sL2wpXCJcbiAgfSxcbiAgXCJnJVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcImcvZGxcIlxuICB9LFxuICBcIltTXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjEwKi0xMy5zXCJcbiAgfSxcbiAgXCJbSFBGXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltMUEZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEwMCxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJrYXRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJtb2wvc1wiXG4gIH0sXG4gIFwiVVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcInVtb2wvbWluXCJcbiAgfSxcbiAgXCJbaVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0lVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltpVV1cIlxuICB9LFxuICBcIlthcmInVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbVVNQJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0dQTCdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltNUEwnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQVBMJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2JldGgnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbYW50aSdYYSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIlt0b2RkJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2R5ZSdVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltzbWd5J1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW2Jkc2snVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba2EnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJba25rJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW21jbGcnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbdGInVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQ0NJRF81MF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbVENJRF81MF1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRUlEXzUwXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltQRlVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0ZGVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbQ0ZVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltCQVVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0FVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltBbWInYScxJ1VdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW1BOVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbTGZdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0QnYWcnVV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIxXCJcbiAgfSxcbiAgXCJbRkVVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIltFTFVdXCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwiMVwiXG4gIH0sXG4gIFwiW0VVXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIk5wXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibG4oMSAxKVwiXG4gIH0sXG4gIFwiQlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImxnKDEgMSlcIlxuICB9LFxuICBcIkJbU1BMXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjJsZygyIDEwKi01LlBhKVwiXG4gIH0sXG4gIFwiQltWXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjJsZygxIFYpXCJcbiAgfSxcbiAgXCJCW21WXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcIjJsZygxIG1WKVwiXG4gIH0sXG4gIFwiQlt1Vl1cIjoge1xuICAgIFwidmFsdWVcIjogbnVsbCxcbiAgICBcInVjdW1cIjogXCIybGcoMSB1VilcIlxuICB9LFxuICBcIkJbMTAublZdXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwiMmxnKDEwIG5WKVwiXG4gIH0sXG4gIFwiQltXXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImxnKDEgVylcIlxuICB9LFxuICBcIkJba1ddXCI6IHtcbiAgICBcInZhbHVlXCI6IG51bGwsXG4gICAgXCJ1Y3VtXCI6IFwibGcoMSBrVylcIlxuICB9LFxuICBcInN0XCI6IHtcbiAgICBcInZhbHVlXCI6IDEsXG4gICAgXCJ1Y3VtXCI6IFwibTNcIlxuICB9LFxuICBcIkFvXCI6IHtcbiAgICBcInZhbHVlXCI6IDAuMSxcbiAgICBcInVjdW1cIjogXCJubVwiXG4gIH0sXG4gIFwiYlwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxMDAsXG4gICAgXCJ1Y3VtXCI6IFwiZm0yXCJcbiAgfSxcbiAgXCJhdHRcIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJrZ2YvY20yXCJcbiAgfSxcbiAgXCJtaG9cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCJTXCJcbiAgfSxcbiAgXCJbcHNpXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIltsYmZfYXZdL1tpbl9pXTJcIlxuICB9LFxuICBcImNpcmNcIjoge1xuICAgIFwidmFsdWVcIjogMixcbiAgICBcInVjdW1cIjogXCJbcGldLnJhZFwiXG4gIH0sXG4gIFwic3BoXCI6IHtcbiAgICBcInZhbHVlXCI6IDQsXG4gICAgXCJ1Y3VtXCI6IFwiW3BpXS5zclwiXG4gIH0sXG4gIFwiW2Nhcl9tXVwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAwLjIsXG4gICAgXCJ1Y3VtXCI6IFwiZ1wiXG4gIH0sXG4gIFwiW2Nhcl9BdV1cIjoge1xuICAgIFwidmFsdWVcIjogMSxcbiAgICBcInVjdW1cIjogXCIvMjRcIlxuICB9LFxuICBcIltzbW9vdF1cIjoge1xuICAgIFwidmFsdWVcIjogNjcsXG4gICAgXCJ1Y3VtXCI6IFwiW2luX2ldXCJcbiAgfSxcbiAgXCJiaXRfc1wiOiB7XG4gICAgXCJ2YWx1ZVwiOiBudWxsLFxuICAgIFwidWN1bVwiOiBcImxkKDEgMSlcIlxuICB9LFxuICBcImJpdFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIjFcIlxuICB9LFxuICBcIkJ5XCI6IHtcbiAgICBcInZhbHVlXCI6IDgsXG4gICAgXCJ1Y3VtXCI6IFwiYml0XCJcbiAgfSxcbiAgXCJCZFwiOiB7XG4gICAgXCJ2YWx1ZVwiOiAxLFxuICAgIFwidWN1bVwiOiBcIi9zXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHM9e1wibW9sXCI6dHJ1ZSxcInNyXCI6dHJ1ZSxcIkh6XCI6dHJ1ZSxcIk5cIjp0cnVlLFwiUGFcIjp0cnVlLFwiSlwiOnRydWUsXCJXXCI6dHJ1ZSxcIkFcIjp0cnVlLFwiVlwiOnRydWUsXCJGXCI6dHJ1ZSxcIk9obVwiOnRydWUsXCJTXCI6dHJ1ZSxcIldiXCI6dHJ1ZSxcIkNlbFwiOnRydWUsXCJUXCI6dHJ1ZSxcIkhcIjp0cnVlLFwibG1cIjp0cnVlLFwibHhcIjp0cnVlLFwiQnFcIjp0cnVlLFwiR3lcIjp0cnVlLFwiU3ZcIjp0cnVlLFwibFwiOnRydWUsXCJMXCI6dHJ1ZSxcImFyXCI6dHJ1ZSxcInRcIjp0cnVlLFwiYmFyXCI6dHJ1ZSxcInVcIjp0cnVlLFwiZVZcIjp0cnVlLFwicGNcIjp0cnVlLFwiW2NdXCI6dHJ1ZSxcIltoXVwiOnRydWUsXCJba11cIjp0cnVlLFwiW2Vwc18wXVwiOnRydWUsXCJbbXVfMF1cIjp0cnVlLFwiW2VdXCI6dHJ1ZSxcIlttX2VdXCI6dHJ1ZSxcIlttX3BdXCI6dHJ1ZSxcIltHXVwiOnRydWUsXCJbZ11cIjp0cnVlLFwiW2x5XVwiOnRydWUsXCJnZlwiOnRydWUsXCJLeVwiOnRydWUsXCJHYWxcIjp0cnVlLFwiZHluXCI6dHJ1ZSxcImVyZ1wiOnRydWUsXCJQXCI6dHJ1ZSxcIkJpXCI6dHJ1ZSxcIlN0XCI6dHJ1ZSxcIk14XCI6dHJ1ZSxcIkdcIjp0cnVlLFwiT2VcIjp0cnVlLFwiR2JcIjp0cnVlLFwic2JcIjp0cnVlLFwiTG1iXCI6dHJ1ZSxcInBoXCI6dHJ1ZSxcIkNpXCI6dHJ1ZSxcIlJcIjp0cnVlLFwiUkFEXCI6dHJ1ZSxcIlJFTVwiOnRydWUsXCJjYWxfWzE1XVwiOnRydWUsXCJjYWxfWzIwXVwiOnRydWUsXCJjYWxfbVwiOnRydWUsXCJjYWxfSVRcIjp0cnVlLFwiY2FsX3RoXCI6dHJ1ZSxcImNhbFwiOnRydWUsXCJ0ZXhcIjp0cnVlLFwibVtIMk9dXCI6dHJ1ZSxcIm1bSGddXCI6dHJ1ZSxcImVxXCI6dHJ1ZSxcIm9zbVwiOnRydWUsXCJnJVwiOnRydWUsXCJrYXRcIjp0cnVlLFwiVVwiOnRydWUsXCJbaVVdXCI6dHJ1ZSxcIltJVV1cIjp0cnVlLFwiTnBcIjp0cnVlLFwiQlwiOnRydWUsXCJCW1NQTF1cIjp0cnVlLFwiQltWXVwiOnRydWUsXCJCW21WXVwiOnRydWUsXCJCW3VWXVwiOnRydWUsXCJCWzEwLm5WXVwiOnRydWUsXCJCW1ddXCI6dHJ1ZSxcIkJba1ddXCI6dHJ1ZSxcInN0XCI6dHJ1ZSxcIm1ob1wiOnRydWUsXCJiaXRcIjp0cnVlLFwiQnlcIjp0cnVlLFwiQmRcIjp0cnVlLFwibVwiOnRydWUsXCJzXCI6dHJ1ZSxcImdcIjp0cnVlLFwicmFkXCI6dHJ1ZSxcIktcIjp0cnVlLFwiQ1wiOnRydWUsXCJjZFwiOnRydWV9XG4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiWVwiOiAxZSsyNCxcbiAgXCJaXCI6IDFlKzIxLFxuICBcIkVcIjogMTAwMDAwMDAwMDAwMDAwMDAwMCxcbiAgXCJQXCI6IDEwMDAwMDAwMDAwMDAwMDAsXG4gIFwiVFwiOiAxMDAwMDAwMDAwMDAwLFxuICBcIkdcIjogMTAwMDAwMDAwMCxcbiAgXCJNXCI6IDEwMDAwMDAsXG4gIFwia1wiOiAxMDAwLFxuICBcImhcIjogMTAwLFxuICBcImRhXCI6IDEwLFxuICBcImRcIjogMC4xLFxuICBcImNcIjogMC4wMSxcbiAgXCJtXCI6IDAuMDAxLFxuICBcInVcIjogMC4wMDAwMDEsXG4gIFwiblwiOiAxZS05LFxuICBcInBcIjogMWUtMTIsXG4gIFwiZlwiOiAxZS0xNSxcbiAgXCJhXCI6IDFlLTE4LFxuICBcInpcIjogMWUtMjEsXG4gIFwieVwiOiAxZS0yNCxcbiAgXCJLaVwiOiAxMDI0LFxuICBcIk1pXCI6IDEwNDg1NzYsXG4gIFwiR2lcIjogMTA3Mzc0MTgyNCxcbiAgXCJUaVwiOiAxMDk5NTExNjI3Nzc2XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgLypcbiAgICogR2VuZXJhdGVkIGJ5IFBFRy5qcyAwLjguMC5cbiAgICpcbiAgICogaHR0cDovL3BlZ2pzLm1hamRhLmN6L1xuICAgKi9cblxuICBmdW5jdGlvbiBwZWckc3ViY2xhc3MoY2hpbGQsIHBhcmVudCkge1xuICAgIGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfVxuICAgIGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gU3ludGF4RXJyb3IobWVzc2FnZSwgZXhwZWN0ZWQsIGZvdW5kLCBvZmZzZXQsIGxpbmUsIGNvbHVtbikge1xuICAgIHRoaXMubWVzc2FnZSAgPSBtZXNzYWdlO1xuICAgIHRoaXMuZXhwZWN0ZWQgPSBleHBlY3RlZDtcbiAgICB0aGlzLmZvdW5kICAgID0gZm91bmQ7XG4gICAgdGhpcy5vZmZzZXQgICA9IG9mZnNldDtcbiAgICB0aGlzLmxpbmUgICAgID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiAgID0gY29sdW1uO1xuXG4gICAgdGhpcy5uYW1lICAgICA9IFwiU3ludGF4RXJyb3JcIjtcbiAgfVxuXG4gIHBlZyRzdWJjbGFzcyhTeW50YXhFcnJvciwgRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuXG4gICAgICAgIHBlZyRGQUlMRUQgPSB7fSxcblxuICAgICAgICBwZWckc3RhcnRSdWxlSW5kaWNlcyA9IHsgc3RhcnQ6IDAgfSxcbiAgICAgICAgcGVnJHN0YXJ0UnVsZUluZGV4ICAgPSAwLFxuXG4gICAgICAgIHBlZyRjb25zdHMgPSBbXG4gICAgICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgOyAvLyBjbGVhbnVwKGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGVnJEZBSUxFRCxcbiAgICAgICAgICBcIi9cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIvXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIvXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24oZSkge3JldHVybiBtdWx0aXBseSh7dmFsdWU6MSwgdW5pdHM6e319LCBbW1wiL1wiLCBlXV0pO30sXG4gICAgICAgICAgXCIuXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiLlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiLlxcXCJcIiB9LFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIGZ1bmN0aW9uKHQsIG1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbXVsdGlwbHkodCwgbXMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmdW5jdGlvbihlLCBleHApIHtyZXR1cm4gZS5hbm4gJiYgZXhwO30sXG4gICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgIGZ1bmN0aW9uKGUsIGV4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvcG93ZXIoZSwgZXhwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IGQsXG4gICAgICAgICAgICAgIHVuaXRzOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHU7fSxcbiAgICAgICAgICBcIihcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIoXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIoXFxcIlwiIH0sXG4gICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiKVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiKVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKGUpIHtyZXR1cm4gZTt9LFxuICAgICAgICAgIC9eWytcXC1dLyxcbiAgICAgICAgICB7IHR5cGU6IFwiY2xhc3NcIiwgdmFsdWU6IFwiWytcXFxcLV1cIiwgZGVzY3JpcHRpb246IFwiWytcXFxcLV1cIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHMsIGQpIHtyZXR1cm4gKHM9PVwiLVwiKSA/ICgtMSpkKSA6IGR9LFxuICAgICAgICAgIGZ1bmN0aW9uKHAsIGEpIHtyZXR1cm4ocCAmJiAhaXNtZXRyaWMoYSkpO30sXG4gICAgICAgICAgZnVuY3Rpb24ocCwgYSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IGE7XG4gICAgICAgICAgICBpZiAocCkgcmV0LnZhbHVlID0gcmV0LnZhbHVlICogcHJlZml4ZXNbcF07XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgL15bMC05XS8sXG4gICAgICAgICAgeyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlswLTldXCIsIGRlc2NyaXB0aW9uOiBcIlswLTldXCIgfSxcbiAgICAgICAgICBcImVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJlXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJlXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odiwgZXByZXNlbnQsIGUpIHtyZXR1cm4gKCFlcHJlc2VudCAmJiAhIWUpO30sXG4gICAgICAgICAgZnVuY3Rpb24odiwgZXByZXNlbnQsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2LmpvaW4oXCJcIikpKk1hdGgucG93KDEwLCBlfHwwKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwie1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIntcIiwgZGVzY3JpcHRpb246IFwiXFxcIntcXFwiXCIgfSxcbiAgICAgICAgICAvXltefV0vLFxuICAgICAgICAgIHsgdHlwZTogXCJjbGFzc1wiLCB2YWx1ZTogXCJbXn1dXCIsIGRlc2NyaXB0aW9uOiBcIltefV1cIiB9LFxuICAgICAgICAgIFwifVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIn1cIiwgZGVzY3JpcHRpb246IFwiXFxcIn1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbihtKSB7cmV0dXJuIC9bXlxceDAwLVxceDdGXS8udGVzdChtKTt9LFxuICAgICAgICAgIGZ1bmN0aW9uKG0pIHsgcmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6e30sIGFubjogbX0gfSxcbiAgICAgICAgICBcIlthbnRpJ1hhJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2FudGknWGEnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlthbnRpJ1hhJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYW50aSdYYSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltBbWInYScxJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0FtYidhJzEnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltBbWInYScxJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQW1iJ2EnMSdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzdG9uZV9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc3RvbmVfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc3RvbmVfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc3RvbmVfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX2knSDJPXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl9pJ0gyT11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpbl9pJ0gyT11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl9pJ0gyT11cIjogMX19O30sXG4gICAgICAgICAgXCJbc3Rvbl9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc3Rvbl9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzdG9uX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3N0b25fYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1RDSURfNTBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1RDSURfNTBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbVENJRF81MF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltUQ0lEXzUwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltDQ0lEXzUwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltDQ0lEXzUwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0NDSURfNTBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQ0NJRF81MF1cIjogMX19O30sXG4gICAgICAgICAgXCJbc2N3dF9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2N3dF9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzY3d0X2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3Njd3RfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xjd3RfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xjd3RfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbGN3dF9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsY3d0X2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsdG9uX2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsdG9uX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2x0b25fYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbHRvbl9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaW5faSdIZ11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5faSdIZ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpbl9pJ0hnXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2luX2knSGddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Ric191c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdGJzX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Ric191c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0YnNfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RwdF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZHB0X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RwdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcHRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Jkc2snVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYmRzaydVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Jkc2snVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltiZHNrJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3NtZ3knVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc21neSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NtZ3knVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzbWd5J1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2RxdF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZHF0X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RxdF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkcXRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3RvZGQnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdG9kZCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3RvZGQnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0b2RkJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0QnYWcnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRCdhZydVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0QnYWcnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltEJ2FnJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2JldGgnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYmV0aCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2JldGgnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltiZXRoJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2dhbF93aV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ2FsX3dpXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2dhbF93aV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltnYWxfd2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NyZF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY3JkX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NyZF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjcmRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pbl91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWluX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pbl91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaW5fdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Zkcl91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZmRyX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Zkcl91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmZHJfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Zvel91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZm96X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Zvel91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmb3pfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2dpbF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ2lsX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2dpbF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltnaWxfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2JibF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYmJsX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2JibF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltiYmxfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2dhbF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ2FsX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2dhbF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltnYWxfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Fjcl9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYWNyX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Fjcl9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlthY3JfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW25taV9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbm1pX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW25taV9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltubWlfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0aF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRoX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0aF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdGhfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pbF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWlsX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pbF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaWxfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3NtaV91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc21pX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NtaV91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzbWlfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Fjcl91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYWNyX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Fjcl91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlthY3JfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z1cl91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnVyX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z1cl91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdXJfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Z0aF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRoX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0aF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmdGhfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3Jsa191c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcmxrX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3Jsa191c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltybGtfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3JjaF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcmNoX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3JjaF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltyY2hfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xiZl9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbGJmX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xiZl9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsYmZfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2huc2YnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaG5zZidVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2huc2YnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltobnNmJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21lc2hfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWVzaF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21lc2hfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttZXNoX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiJVtzbG9wZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIlW3Nsb3BlXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiJVtzbG9wZV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIiVbc2xvcGVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3AnZGlvcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcCdkaW9wXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3AnZGlvcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwJ2Rpb3BdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2dpbF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ2lsX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2dpbF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltnaWxfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3dvb2QnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbd29vZCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3dvb2QnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt3b29kJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX1sxNV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxfWzE1XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsX1sxNV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF9bMTVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsX1syMF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxfWzIwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsX1syMF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbF9bMjBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Zvel9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZm96X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Zvel9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmb3pfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Zkcl9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZmRyX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Zkcl9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmZHJfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3NyZF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc3JkX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3NyZF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzcmRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21pbl9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWluX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pbl9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttaW5fYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0VJRF81MF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRUlEXzUwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0VJRF81MF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltFSURfNTBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV90aF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1X3RoXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV90aF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVfdGhdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV9JVF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1X0lUXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV9JVF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVfSVRdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Nhcl9BdV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2FyX0F1XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Nhcl9BdV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjYXJfQXVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV82MF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1XzYwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV82MF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVfNjBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV81OV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1XzU5XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV81OV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVfNTldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0J0dV8zOV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQnR1XzM5XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV8zOV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltCdHVfMzldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2N1cF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY3VwX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2N1cF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjdXBfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQlsxMC5uVl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCWzEwLm5WXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQlsxMC5uVl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbMTAublZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3RzcF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdHNwX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3RzcF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0c3BfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW21jbGcnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWNsZydVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21jbGcnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlttY2xnJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NpY2Vyb11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2ljZXJvXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NpY2Vyb11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjaWNlcm9dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3B3dF90cl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcHd0X3RyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3B3dF90cl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwd3RfdHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BudF9wcl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcG50X3ByXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BudF9wcl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwbnRfcHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BjYV9wcl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGNhX3ByXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BjYV9wcl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwY2FfcHJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2dhbF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ2FsX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2dhbF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltnYWxfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3lkX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt5ZF91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt5ZF91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt5ZF91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbbGlnbmVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xpZ25lXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xpZ25lXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xpZ25lXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0YnNfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbdGJzX21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdGJzX21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdGJzX21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xiX2FwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsYl9hcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsYl9hcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsYl9hcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbb3pfYXBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW296X2FwXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW296X2FwXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW296X2FwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkcl9hcF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZHJfYXBdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHJfYXBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHJfYXBdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3NjX2FwXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzY19hcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzY19hcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzY19hcF1cIjogMX19O30sXG4gICAgICAgICAgXCJbdHNwX21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3RzcF9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3RzcF9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3RzcF9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjdXBfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY3VwX21dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY3VwX21dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3VwX21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xiX3RyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsYl90cl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsYl90cl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsYl90cl1cIjogMX19O30sXG4gICAgICAgICAgXCJbb3pfdHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW296X3RyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW296X3RyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW296X3RyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkaWRvdF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGlkb3RdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGlkb3RdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZGlkb3RdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Zvel9tXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmb3pfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltmb3pfbV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltmb3pfbV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2FyX21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Nhcl9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Nhcl9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Nhcl9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzbW9vdF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc21vb3RdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc21vb3RdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc21vb3RdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2tuaydVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrbmsnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrbmsnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrbmsnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbQnR1X21dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV9tXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0J0dV9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0J0dV9tXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkcl9hdl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZHJfYXZdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHJfYXZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHJfYXZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW296X2F2XVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltvel9hdl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltvel9hdl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltvel9hdl1cIjogMX19O30sXG4gICAgICAgICAgXCJbbGJfYXZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xiX2F2XVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2xiX2F2XVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2xiX2F2XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkeWUnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZHllJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZHllJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHllJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BrX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwa191c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwa191c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwa191c11cIjogMX19O30sXG4gICAgICAgICAgXCJbQVBMJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0FQTCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0FQTCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0FQTCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltidV91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYnVfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYnVfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYnVfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3B0X2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwdF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwdF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwdF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcXRfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3F0X2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3F0X2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3F0X2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltidV9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYnVfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbYnVfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbYnVfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwJ19YXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocCdfWF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocCdfWF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocCdfWF1cIjogMX19O30sXG4gICAgICAgICAgXCJbTVBMJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW01QTCdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW01QTCdVXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW01QTCdVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltHUEwnVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbR1BMJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbR1BMJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbR1BMJ1VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW1VTUCdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltVU1AnVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltVU1AnVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltVU1AnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbZXBzXzBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Vwc18wXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Vwc18wXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Vwc18wXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdGhfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRoX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRoX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRoX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW25taV9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltubWlfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltubWlfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltubWlfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbcHRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3B0X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3B0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3B0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzaW5faV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbc2luX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbc2luX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2luX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3NmdF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltzZnRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzZnRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltzZnRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbc3lkX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3N5ZF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3N5ZF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3N5ZF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjaW5faV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2luX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2luX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2luX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2NmdF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjZnRfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjZnRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltjZnRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbY3lkX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2N5ZF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2N5ZF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2N5ZF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltxdF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcXRfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcXRfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcXRfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2FyYidVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlthcmInVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlthcmInVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlthcmInVV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWlsX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pbF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pbF9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pbF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjbWxfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY21sX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY21sX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY21sX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2tuX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrbl9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrbl9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrbl9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZnRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Z0X3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0X3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2Z0X3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwb3VjZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcG91Y2VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcG91Y2VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcG91Y2VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2luX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltpbl91c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpbl91c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltpbl91c11cIjogMX19O30sXG4gICAgICAgICAgXCJbcmRfdXNdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3JkX3VzXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3JkX3VzXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3JkX3VzXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjaF91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY2hfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbY2hfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY2hfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xrX3VzXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsa191c11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsa191c11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsa191c11cIjogMX19O30sXG4gICAgICAgICAgXCJbaHAnX0NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwJ19DXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwJ19DXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwJ19DXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocCdfTV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHAnX01dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHAnX01dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHAnX01dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwJ19RXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocCdfUV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocCdfUV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocCdfUV1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWlfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21pX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW21pX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttaV91c11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWlfdXNdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbWlfdXNdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbWlfdXNdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3lkX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlt5ZF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt5ZF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt5ZF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbcGtfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BrX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BrX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BrX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwY19icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbcGNfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGNfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGNfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2xrX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltsa19icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsa19icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltsa19icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbaW5fYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2luX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2luX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2luX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdF9icl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZnRfYnJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZnRfYnJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRfYnJdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3JkX2JyXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltyZF9icl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltyZF9icl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltyZF9icl1cIjogMX19O30sXG4gICAgICAgICAgXCJbY2hfYnJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2NoX2JyXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NoX2JyXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NoX2JyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltmdF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltmdF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2Z0X2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZnRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbaHBfUV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHBfUV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocF9RXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwX1FdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2hwX01dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2hwX01dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaHBfTV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltocF9NXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltocF9DXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltocF9DXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hwX0NdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaHBfQ11cIjogMX19O30sXG4gICAgICAgICAgXCJbaHBfWF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaHBfWF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltocF9YXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2hwX1hdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2twX0NdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2twX0NdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba3BfQ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrcF9DXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltoZF9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltoZF9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hkX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaGRfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJba3BfTV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJba3BfTV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltrcF9NXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2twX01dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2twX1FdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2twX1FdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba3BfUV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrcF9RXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltjcl9pXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltjcl9pXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2NyX2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbY3JfaV1cIjogMX19O30sXG4gICAgICAgICAgXCJbYmZfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbYmZfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltiZl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2JmX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2tuX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2tuX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba25faV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrbl9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttdV8wXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlttdV8wXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW211XzBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbXVfMF1cIjogMX19O30sXG4gICAgICAgICAgXCJbbWlfaV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbWlfaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttaV9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW21pX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3lkX2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3lkX2ldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbeWRfaV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt5ZF9pXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrcF9YXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrcF9YXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2twX1hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba3BfWF1cIjogMX19O30sXG4gICAgICAgICAgXCJbaW5faV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaW5faV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltpbl9pXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2luX2ldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2Rpb3BdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Rpb3BdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZGlvcF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltkaW9wXVwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF9JVFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNhbF9JVFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiY2FsX0lUXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfSVRcIjogMX19O30sXG4gICAgICAgICAgXCJjYWxfdGhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJjYWxfdGhcIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF90aFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiY2FsX3RoXCI6IDF9fTt9LFxuICAgICAgICAgIFwibVtIMk9dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibVtIMk9dXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtW0gyT11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1bSDJPXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltrYSdVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltrYSdVXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2thJ1VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJba2EnVV1cIjogMX19O30sXG4gICAgICAgICAgXCJCW1NQTF1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW1NQTF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbU1BMXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiQltTUExdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3RiJ1VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3RiJ1VdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbdGInVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlt0YidVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkZWdSXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltkZWdSXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2RlZ1JdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZGVnUl1cIjogMX19O30sXG4gICAgICAgICAgXCJbZGVnRl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZGVnRl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkZWdGXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2RlZ0ZdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BwdHJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BwdHJdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcHB0cl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwcHRyXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwcHRoXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwcHRoXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BwdGhdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHB0aF1cIjogMX19O30sXG4gICAgICAgICAgXCJbb3pfbV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbb3pfbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltvel9tXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW296X21dXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BpZWRdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BpZWRdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbcGllZF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwaWVkXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwcG1dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BwbV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwcG1dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHBtXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwcGJdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BwYl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwcGJdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHBiXVwiOiAxfX07fSxcbiAgICAgICAgICBcImJpdF9zXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYml0X3NcIiwgZGVzY3JpcHRpb246IFwiXFxcImJpdF9zXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJiaXRfc1wiOiAxfX07fSxcbiAgICAgICAgICBcIltQTlVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1BOVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltQTlVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbUE5VXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwc2ldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BzaV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwc2ldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcHNpXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCQVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0JBVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCQVVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQkFVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltDYWxdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0NhbF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltDYWxdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQ2FsXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbbVZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQlttVl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbbVZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW21WXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbdVZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQlt1Vl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbdVZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW3VWXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltDRlVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0NGVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltDRlVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQ0ZVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltGRlVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0ZGVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltGRlVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRkZVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJba1ddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQltrV11cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJba1ddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW2tXXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltQRlVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1BGVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltQRlVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbUEZVXVwiOiAxfX07fSxcbiAgICAgICAgICBcImNhbF9tXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsX21cIiwgZGVzY3JpcHRpb246IFwiXFxcImNhbF9tXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjYWxfbVwiOiAxfX07fSxcbiAgICAgICAgICBcIltFTFVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0VMVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltFTFVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRUxVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltGRVVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0ZFVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltGRVVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRkVVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltQUlVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW1BSVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltQUlVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbUFJVXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttX2VdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21fZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttX2VdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbV9lXVwiOiAxfX07fSxcbiAgICAgICAgICBcIlttX3BdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW21fcF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlttX3BdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbV9wXVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1bSGddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibVtIZ11cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1bSGddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtW0hnXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwY2FdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BjYV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwY2FdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcGNhXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltwbnRdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BudF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwbnRdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbcG50XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltsbmVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2xuZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltsbmVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbG5lXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltMUEZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0xQRl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltMUEZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbTFBGXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkZW5dXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2Rlbl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkZW5dXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZGVuXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltzY3RdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3NjdF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltzY3RdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbc2N0XVwiOiAxfX07fSxcbiAgICAgICAgICBcIlt0d3BdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3R3cF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIlt0d3BdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbdHdwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltCdHVdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0J0dV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltCdHVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQnR1XVwiOiAxfX07fSxcbiAgICAgICAgICBcIltNRVRdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW01FVF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltNRVRdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbTUVUXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltIUEZdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0hQRl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltIUEZdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbSFBGXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltkcnBdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2RycF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltkcnBdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZHJwXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltBVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbQVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbQVVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbQVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0lVXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltJVV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltJVV1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltJVV1cIjogMX19O30sXG4gICAgICAgICAgXCJtb19zXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibW9fc1wiLCBkZXNjcmlwdGlvbjogXCJcXFwibW9fc1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibW9fc1wiOiAxfX07fSxcbiAgICAgICAgICBcIltncl1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZ3JdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ3JdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbZ3JdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2lyY1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImNpcmNcIiwgZGVzY3JpcHRpb246IFwiXFxcImNpcmNcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNpcmNcIjogMX19O30sXG4gICAgICAgICAgXCJbcGldXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW3BpXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW3BpXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW3BpXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltFVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbRVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbRVVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbRVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0xmXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltMZl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltMZl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltMZl1cIjogMX19O30sXG4gICAgICAgICAgXCJtb19qXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibW9falwiLCBkZXNjcmlwdGlvbjogXCJcXFwibW9falxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibW9falwiOiAxfX07fSxcbiAgICAgICAgICBcIkJbV11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCW1ddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCW1ddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCW1ddXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQltWXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkJbVl1cIiwgZGVzY3JpcHRpb246IFwiXFxcIkJbVl1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkJbVl1cIjogMX19O30sXG4gICAgICAgICAgXCJtb19nXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibW9fZ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwibW9fZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibW9fZ1wiOiAxfX07fSxcbiAgICAgICAgICBcIltpVV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbaVVdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbaVVdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaVVdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW0hQXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltIUF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltIUF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltIUF1cIjogMX19O30sXG4gICAgICAgICAgXCJbQ2hdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW0NoXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0NoXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW0NoXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltseV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbbHldXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbbHldXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbbHldXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW3BIXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltwSF1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltwSF1cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltwSF1cIjogMX19O30sXG4gICAgICAgICAgXCJhX2pcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhX2pcIiwgZGVzY3JpcHRpb246IFwiXFxcImFfalxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYV9qXCI6IDF9fTt9LFxuICAgICAgICAgIFwicmFkXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwicmFkXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJyYWRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInJhZFwiOiAxfX07fSxcbiAgICAgICAgICBcImFfdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImFfdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYV90XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhX3RcIjogMX19O30sXG4gICAgICAgICAgXCJPaG1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJPaG1cIiwgZGVzY3JpcHRpb246IFwiXFxcIk9obVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiT2htXCI6IDF9fTt9LFxuICAgICAgICAgIFwic3BoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic3BoXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzcGhcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInNwaFwiOiAxfX07fSxcbiAgICAgICAgICBcImJpdFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImJpdFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYml0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJiaXRcIjogMX19O30sXG4gICAgICAgICAgXCJtaG9cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJtaG9cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1ob1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibWhvXCI6IDF9fTt9LFxuICAgICAgICAgIFwibWluXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibWluXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJtaW5cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIm1pblwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vbFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm1vbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwibW9sXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb2xcIjogMX19O30sXG4gICAgICAgICAgXCJkZWdcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJkZWdcIiwgZGVzY3JpcHRpb246IFwiXFxcImRlZ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiZGVnXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZ29uXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZ29uXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJnb25cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImdvblwiOiAxfX07fSxcbiAgICAgICAgICBcIkNlbFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkNlbFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiQ2VsXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJDZWxcIjogMX19O30sXG4gICAgICAgICAgXCJrYXRcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJrYXRcIiwgZGVzY3JpcHRpb246IFwiXFxcImthdFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wia2F0XCI6IDF9fTt9LFxuICAgICAgICAgIFwiYXR0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYXR0XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhdHRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImF0dFwiOiAxfX07fSxcbiAgICAgICAgICBcIm9zbVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm9zbVwiLCBkZXNjcmlwdGlvbjogXCJcXFwib3NtXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJvc21cIjogMX19O30sXG4gICAgICAgICAgXCJ0ZXhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ0ZXhcIiwgZGVzY3JpcHRpb246IFwiXFxcInRleFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1widGV4XCI6IDF9fTt9LFxuICAgICAgICAgIFwiY2FsXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2FsXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJjYWxcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImNhbFwiOiAxfX07fSxcbiAgICAgICAgICBcIlJFTVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlJFTVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUkVNXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJSRU1cIjogMX19O30sXG4gICAgICAgICAgXCJSQURcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJSQURcIiwgZGVzY3JpcHRpb246IFwiXFxcIlJBRFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUkFEXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYV9nXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYV9nXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhX2dcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImFfZ1wiOiAxfX07fSxcbiAgICAgICAgICBcIkxtYlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkxtYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTG1iXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJMbWJcIjogMX19O30sXG4gICAgICAgICAgXCJhdG1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhdG1cIiwgZGVzY3JpcHRpb246IFwiXFxcImF0bVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYXRtXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZXJnXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZXJnXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJlcmdcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImVyZ1wiOiAxfX07fSxcbiAgICAgICAgICBcImR5blwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImR5blwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZHluXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJkeW5cIjogMX19O30sXG4gICAgICAgICAgXCJHYWxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJHYWxcIiwgZGVzY3JpcHRpb246IFwiXFxcIkdhbFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiR2FsXCI6IDF9fTt9LFxuICAgICAgICAgIFwiMTBeXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiMTBeXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIxMF5cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIjEwXlwiOiAxfX07fSxcbiAgICAgICAgICBcIjEwKlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIjEwKlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiMTAqXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCIxMCpcIjogMX19O30sXG4gICAgICAgICAgXCJbU11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbU11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltTXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW1NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2ddXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2ddXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJbZ11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltnXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltHXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltHXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW0ddXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbR11cIjogMX19O30sXG4gICAgICAgICAgXCJbZV1cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbZV1cIiwgZGVzY3JpcHRpb246IFwiXFxcIltlXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2VdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiW2tdXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiW2tdXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJba11cXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIltrXVwiOiAxfX07fSxcbiAgICAgICAgICBcIltoXVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIltoXVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiW2hdXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJbaF1cIjogMX19O30sXG4gICAgICAgICAgXCJbY11cIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJbY11cIiwgZGVzY3JpcHRpb246IFwiXFxcIltjXVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiW2NdXCI6IDF9fTt9LFxuICAgICAgICAgIFwiYmFyXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYmFyXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJiYXJcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImJhclwiOiAxfX07fSxcbiAgICAgICAgICBcImxtXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibG1cIiwgZGVzY3JpcHRpb246IFwiXFxcImxtXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJsbVwiOiAxfX07fSxcbiAgICAgICAgICBcIkNpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQ2lcIiwgZGVzY3JpcHRpb246IFwiXFxcIkNpXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJDaVwiOiAxfX07fSxcbiAgICAgICAgICBcInBoXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwicGhcIiwgZGVzY3JpcHRpb246IFwiXFxcInBoXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJwaFwiOiAxfX07fSxcbiAgICAgICAgICBcImNkXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY2RcIiwgZGVzY3JpcHRpb246IFwiXFxcImNkXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJjZFwiOiAxfX07fSxcbiAgICAgICAgICBcIkFvXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQW9cIiwgZGVzY3JpcHRpb246IFwiXFxcIkFvXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJBb1wiOiAxfX07fSxcbiAgICAgICAgICBcIldiXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiV2JcIiwgZGVzY3JpcHRpb246IFwiXFxcIldiXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJXYlwiOiAxfX07fSxcbiAgICAgICAgICBcIkdiXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiR2JcIiwgZGVzY3JpcHRpb246IFwiXFxcIkdiXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJHYlwiOiAxfX07fSxcbiAgICAgICAgICBcIk9lXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiT2VcIiwgZGVzY3JpcHRpb246IFwiXFxcIk9lXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJPZVwiOiAxfX07fSxcbiAgICAgICAgICBcImx4XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibHhcIiwgZGVzY3JpcHRpb246IFwiXFxcImx4XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJseFwiOiAxfX07fSxcbiAgICAgICAgICBcIk14XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTXhcIiwgZGVzY3JpcHRpb246IFwiXFxcIk14XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJNeFwiOiAxfX07fSxcbiAgICAgICAgICBcIlN0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiU3RcIiwgZGVzY3JpcHRpb246IFwiXFxcIlN0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJTdFwiOiAxfX07fSxcbiAgICAgICAgICBcIkJpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQmlcIiwgZGVzY3JpcHRpb246IFwiXFxcIkJpXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCaVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJxXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQnFcIiwgZGVzY3JpcHRpb246IFwiXFxcIkJxXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCcVwiOiAxfX07fSxcbiAgICAgICAgICBcIk5wXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTnBcIiwgZGVzY3JpcHRpb246IFwiXFxcIk5wXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJOcFwiOiAxfX07fSxcbiAgICAgICAgICBcIkFVXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQVVcIiwgZGVzY3JpcHRpb246IFwiXFxcIkFVXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJBVVwiOiAxfX07fSxcbiAgICAgICAgICBcIm1vXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibW9cIiwgZGVzY3JpcHRpb246IFwiXFxcIm1vXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJtb1wiOiAxfX07fSxcbiAgICAgICAgICBcIkt5XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiS3lcIiwgZGVzY3JpcHRpb246IFwiXFxcIkt5XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJLeVwiOiAxfX07fSxcbiAgICAgICAgICBcImdmXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZ2ZcIiwgZGVzY3JpcHRpb246IFwiXFxcImdmXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJnZlwiOiAxfX07fSxcbiAgICAgICAgICBcIndrXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwid2tcIiwgZGVzY3JpcHRpb246IFwiXFxcIndrXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJ3a1wiOiAxfX07fSxcbiAgICAgICAgICBcIlBhXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUGFcIiwgZGVzY3JpcHRpb246IFwiXFxcIlBhXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJQYVwiOiAxfX07fSxcbiAgICAgICAgICBcImclXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZyVcIiwgZGVzY3JpcHRpb246IFwiXFxcImclXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJnJVwiOiAxfX07fSxcbiAgICAgICAgICBcInNyXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic3JcIiwgZGVzY3JpcHRpb246IFwiXFxcInNyXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJzclwiOiAxfX07fSxcbiAgICAgICAgICBcIkJkXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQmRcIiwgZGVzY3JpcHRpb246IFwiXFxcIkJkXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCZFwiOiAxfX07fSxcbiAgICAgICAgICBcImVxXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZXFcIiwgZGVzY3JpcHRpb246IFwiXFxcImVxXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJlcVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJ5XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiQnlcIiwgZGVzY3JpcHRpb246IFwiXFxcIkJ5XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCeVwiOiAxfX07fSxcbiAgICAgICAgICBcIkh6XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiSHpcIiwgZGVzY3JpcHRpb246IFwiXFxcIkh6XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJIelwiOiAxfX07fSxcbiAgICAgICAgICBcIicnXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiJydcIiwgZGVzY3JpcHRpb246IFwiXFxcIicnXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCInJ1wiOiAxfX07fSxcbiAgICAgICAgICBcInBjXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwicGNcIiwgZGVzY3JpcHRpb246IFwiXFxcInBjXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJwY1wiOiAxfX07fSxcbiAgICAgICAgICBcImVWXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZVZcIiwgZGVzY3JpcHRpb246IFwiXFxcImVWXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJlVlwiOiAxfX07fSxcbiAgICAgICAgICBcIkd5XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiR3lcIiwgZGVzY3JpcHRpb246IFwiXFxcIkd5XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJHeVwiOiAxfX07fSxcbiAgICAgICAgICBcInN0XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic3RcIiwgZGVzY3JpcHRpb246IFwiXFxcInN0XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJzdFwiOiAxfX07fSxcbiAgICAgICAgICBcIlN2XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiU3ZcIiwgZGVzY3JpcHRpb246IFwiXFxcIlN2XFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJTdlwiOiAxfX07fSxcbiAgICAgICAgICBcImFyXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYXJcIiwgZGVzY3JpcHRpb246IFwiXFxcImFyXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhclwiOiAxfX07fSxcbiAgICAgICAgICBcInNiXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwic2JcIiwgZGVzY3JpcHRpb246IFwiXFxcInNiXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJzYlwiOiAxfX07fSxcbiAgICAgICAgICBcIkxcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJMXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJMXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJMXCI6IDF9fTt9LFxuICAgICAgICAgIFwidFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInRcIiwgZGVzY3JpcHRpb246IFwiXFxcInRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcInRcIjogMX19O30sXG4gICAgICAgICAgXCJ1XCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwidVwiLCBkZXNjcmlwdGlvbjogXCJcXFwidVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1widVwiOiAxfX07fSxcbiAgICAgICAgICBcIlBcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJQXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJQXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJQXCI6IDF9fTt9LFxuICAgICAgICAgIFwiR1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkdcIiwgZGVzY3JpcHRpb246IFwiXFxcIkdcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkdcIjogMX19O30sXG4gICAgICAgICAgXCJSXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiUlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiUlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiUlwiOiAxfX07fSxcbiAgICAgICAgICBcIkhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJIXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJIXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJIXCI6IDF9fTt9LFxuICAgICAgICAgIFwiVFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlRcIiwgZGVzY3JpcHRpb246IFwiXFxcIlRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlRcIjogMX19O30sXG4gICAgICAgICAgXCJVXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiVVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiVVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiVVwiOiAxfX07fSxcbiAgICAgICAgICBcIkJcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJCXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJCXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJCXCI6IDF9fTt9LFxuICAgICAgICAgIFwiU1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlNcIiwgZGVzY3JpcHRpb246IFwiXFxcIlNcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIlNcIjogMX19O30sXG4gICAgICAgICAgXCJtXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibVwiLCBkZXNjcmlwdGlvbjogXCJcXFwibVxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibVwiOiAxfX07fSxcbiAgICAgICAgICBcInNcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJzXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJzXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJzXCI6IDF9fTt9LFxuICAgICAgICAgIFwiRlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkZcIiwgZGVzY3JpcHRpb246IFwiXFxcIkZcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkZcIjogMX19O30sXG4gICAgICAgICAgXCJsXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwibFwiLCBkZXNjcmlwdGlvbjogXCJcXFwibFxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wibFwiOiAxfX07fSxcbiAgICAgICAgICBcIlZcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJWXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJWXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJWXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkFcIiwgZGVzY3JpcHRpb246IFwiXFxcIkFcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkFcIjogMX19O30sXG4gICAgICAgICAgXCJXXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiV1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiV1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiV1wiOiAxfX07fSxcbiAgICAgICAgICBcIktcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJLXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJLXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJLXCI6IDF9fTt9LFxuICAgICAgICAgIFwiQ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkNcIiwgZGVzY3JpcHRpb246IFwiXFxcIkNcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkNcIjogMX19O30sXG4gICAgICAgICAgXCJiXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiYlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiYlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiYlwiOiAxfX07fSxcbiAgICAgICAgICBcIiVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIlXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCIlXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCIlXCI6IDF9fTt9LFxuICAgICAgICAgIFwiSlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIkpcIiwgZGVzY3JpcHRpb246IFwiXFxcIkpcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcIkpcIjogMX19O30sXG4gICAgICAgICAgXCInXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiJ1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiJ1xcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiJ1wiOiAxfX07fSxcbiAgICAgICAgICBcImhcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJoXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJoXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJoXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImRcIiwgZGVzY3JpcHRpb246IFwiXFxcImRcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImRcIjogMX19O30sXG4gICAgICAgICAgXCJOXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTlxcXCJcIiB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHUpIHtyZXR1cm4ge3ZhbHVlOiAxLCB1bml0czoge1wiTlwiOiAxfX07fSxcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJhXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJhXFxcIlwiIH0sXG4gICAgICAgICAgZnVuY3Rpb24odSkge3JldHVybiB7dmFsdWU6IDEsIHVuaXRzOiB7XCJhXCI6IDF9fTt9LFxuICAgICAgICAgIFwiZ1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImdcIiwgZGVzY3JpcHRpb246IFwiXFxcImdcXFwiXCIgfSxcbiAgICAgICAgICBmdW5jdGlvbih1KSB7cmV0dXJuIHt2YWx1ZTogMSwgdW5pdHM6IHtcImdcIjogMX19O30sXG4gICAgICAgICAgXCJZXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiWVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiWVxcXCJcIiB9LFxuICAgICAgICAgIFwiWlwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlpcIiwgZGVzY3JpcHRpb246IFwiXFxcIlpcXFwiXCIgfSxcbiAgICAgICAgICBcIkVcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJFXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJFXFxcIlwiIH0sXG4gICAgICAgICAgXCJNXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiTVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTVxcXCJcIiB9LFxuICAgICAgICAgIFwia1wiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcImtcIiwgZGVzY3JpcHRpb246IFwiXFxcImtcXFwiXCIgfSxcbiAgICAgICAgICBcImRhXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZGFcIiwgZGVzY3JpcHRpb246IFwiXFxcImRhXFxcIlwiIH0sXG4gICAgICAgICAgXCJjXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiY1wiLCBkZXNjcmlwdGlvbjogXCJcXFwiY1xcXCJcIiB9LFxuICAgICAgICAgIFwiblwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIm5cIiwgZGVzY3JpcHRpb246IFwiXFxcIm5cXFwiXCIgfSxcbiAgICAgICAgICBcInBcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJwXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJwXFxcIlwiIH0sXG4gICAgICAgICAgXCJmXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiZlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiZlxcXCJcIiB9LFxuICAgICAgICAgIFwielwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcInpcIiwgZGVzY3JpcHRpb246IFwiXFxcInpcXFwiXCIgfSxcbiAgICAgICAgICBcInlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ5XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ5XFxcIlwiIH0sXG4gICAgICAgICAgXCJLaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIktpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJLaVxcXCJcIiB9LFxuICAgICAgICAgIFwiTWlcIixcbiAgICAgICAgICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJNaVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiTWlcXFwiXCIgfSxcbiAgICAgICAgICBcIkdpXCIsXG4gICAgICAgICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiR2lcIiwgZGVzY3JpcHRpb246IFwiXFxcIkdpXFxcIlwiIH0sXG4gICAgICAgICAgXCJUaVwiLFxuICAgICAgICAgIHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIlRpXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJUaVxcXCJcIiB9XG4gICAgICAgIF0sXG5cbiAgICAgICAgcGVnJGJ5dGVjb2RlID0gW1xuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNyErJyA0ITYgISEgJVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiIS5cXFwiXFxcIlxcXCIyXFxcIjMjKzIkNyMrKCU0XFxcIjYkXFxcIiEgJSRcXFwiIyAhXFxcIiMgISojIFxcXCI3I1wiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiIS4lXFxcIlxcXCIyJTMmKy0kNyQrIyUnXFxcIiUkXFxcIiMgIVxcXCIjICEqPiBcXFwiIS5cXFwiXFxcIlxcXCIyXFxcIjMjKy0kNyQrIyUnXFxcIiUkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3JCs7JCAnN1xcXCIsIyY3XFxcIlxcXCIrKSU0XFxcIjYoXFxcIlxcXCIhICUkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiE3JStjJDcmKiMgXFxcIiApK1MlICc3KSwjJjcpXFxcIitBJTU2KiBcXFwiXFxcIiEpIyNcXFwiICFcXFwiICsrKSU0JDYsJFxcXCIjXFxcIiUkJCMgISQjIyAhJFxcXCIjICFcXFwiIyAhKkUgXFxcIiE3KCs6JCAnNyksIyY3KVxcXCIrKCU0XFxcIjYtXFxcIiEhJSRcXFwiIyAhXFxcIiMgIVwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiITcnKycgNCE2LiEhICUqWSBcXFwiIS4vXFxcIlxcXCIyLzMwK0IkNyMrOCUuMVxcXCJcXFwiMjEzMisoJTQjNjMjISElJCMjICEkXFxcIiMgIVxcXCIjICEqIyBcXFwiNylcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEwNFxcXCJcXFwiMSEzNSojIFxcXCIgKSszJDcoKyklNFxcXCI2NlxcXCJcXFwiISAlJFxcXCIjICFcXFwiIyAhXCIpLFxuICAgICAgICAgIHBlZyRkZWNvZGUoXCIhNysqIyBcXFwiICkrSyQ3KitBJTU2NyBcXFwiISApIyNcXFwiICFcXFwiICsrKSU0IzY4I1xcXCJcXFwiISUkIyMgISRcXFwiIyAhXFxcIiMgISojIFxcXCI3KlwiKSxcbiAgICAgICAgICBwZWckZGVjb2RlKFwiISAnMDlcXFwiXFxcIjEhMzorLCQsKSYwOVxcXCJcXFwiMSEzOlxcXCJcXFwiXFxcIiAhK2kkLjtcXFwiXFxcIjI7MzwqIyBcXFwiICkrUyU3JiojIFxcXCIgKStDJTU2PSAjXFxcIiEgKSMjXFxcIiAhXFxcIiArKyolNCQ2PiQjI1xcXCIhJSQkIyAhJCMjICEkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEuP1xcXCJcXFwiMj8zQCt0JCAnMEFcXFwiXFxcIjEhM0IrLCQsKSYwQVxcXCJcXFwiMSEzQlxcXCJcXFwiXFxcIiAhK08lLkNcXFwiXFxcIjJDM0QrPyU1NkUgISEpIyNcXFwiICFcXFwiICsrKCU0JDZGJCFcXFwiJSQkIyAhJCMjICEkXFxcIiMgIVxcXCIjICFcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIiEuR1xcXCJcXFwiMkczSCsnIDQhNkkhISAlKlxcdTFDQ0QgXFxcIiEuSlxcXCJcXFwiMkozSysnIDQhNkwhISAlKlxcdTFDQjUgXFxcIiEuTVxcXCJcXFwiMk0zTisnIDQhNk8hISAlKlxcdTFDOUQgXFxcIiEuUFxcXCJcXFwiMlAzUSsnIDQhNlIhISAlKlxcdTFDODUgXFxcIiEuU1xcXCJcXFwiMlMzVCsnIDQhNlUhISAlKlxcdTFDNkQgXFxcIiEuVlxcXCJcXFwiMlYzVysnIDQhNlghISAlKlxcdTFDNTUgXFxcIiEuWVxcXCJcXFwiMlkzWisnIDQhNlshISAlKlxcdTFDM0QgXFxcIiEuXFxcXFxcXCJcXFwiMlxcXFwzXSsnIDQhNl4hISAlKlxcdTFDMjUgXFxcIiEuX1xcXCJcXFwiMl8zYCsnIDQhNmEhISAlKlxcdTFDMEQgXFxcIiEuYlxcXCJcXFwiMmIzYysnIDQhNmQhISAlKlxcdTFCRjUgXFxcIiEuZVxcXCJcXFwiMmUzZisnIDQhNmchISAlKlxcdTFCREQgXFxcIiEuaFxcXCJcXFwiMmgzaSsnIDQhNmohISAlKlxcdTFCQzUgXFxcIiEua1xcXCJcXFwiMmszbCsnIDQhNm0hISAlKlxcdTFCQUQgXFxcIiEublxcXCJcXFwiMm4zbysnIDQhNnAhISAlKlxcdTFCOTUgXFxcIiEucVxcXCJcXFwiMnEzcisnIDQhNnMhISAlKlxcdTFCN0QgXFxcIiEudFxcXCJcXFwiMnQzdSsnIDQhNnYhISAlKlxcdTFCNjUgXFxcIiEud1xcXCJcXFwiMnczeCsnIDQhNnkhISAlKlxcdTFCNEQgXFxcIiEuelxcXCJcXFwiMnozeysnIDQhNnwhISAlKlxcdTFCMzUgXFxcIiEufVxcXCJcXFwiMn0zfisnIDQhNn8hISAlKlxcdTFCMUQgXFxcIiEuXFx4ODBcXFwiXFxcIjJcXHg4MDNcXHg4MSsnIDQhNlxceDgyISEgJSpcXHUxQjA1IFxcXCIhLlxceDgzXFxcIlxcXCIyXFx4ODMzXFx4ODQrJyA0ITZcXHg4NSEhICUqXFx1MUFFRCBcXFwiIS5cXHg4NlxcXCJcXFwiMlxceDg2M1xceDg3KycgNCE2XFx4ODghISAlKlxcdTFBRDUgXFxcIiEuXFx4ODlcXFwiXFxcIjJcXHg4OTNcXHg4QSsnIDQhNlxceDhCISEgJSpcXHUxQUJEIFxcXCIhLlxceDhDXFxcIlxcXCIyXFx4OEMzXFx4OEQrJyA0ITZcXHg4RSEhICUqXFx1MUFBNSBcXFwiIS5cXHg4RlxcXCJcXFwiMlxceDhGM1xceDkwKycgNCE2XFx4OTEhISAlKlxcdTFBOEQgXFxcIiEuXFx4OTJcXFwiXFxcIjJcXHg5MjNcXHg5MysnIDQhNlxceDk0ISEgJSpcXHUxQTc1IFxcXCIhLlxceDk1XFxcIlxcXCIyXFx4OTUzXFx4OTYrJyA0ITZcXHg5NyEhICUqXFx1MUE1RCBcXFwiIS5cXHg5OFxcXCJcXFwiMlxceDk4M1xceDk5KycgNCE2XFx4OUEhISAlKlxcdTFBNDUgXFxcIiEuXFx4OUJcXFwiXFxcIjJcXHg5QjNcXHg5QysnIDQhNlxceDlEISEgJSpcXHUxQTJEIFxcXCIhLlxceDlFXFxcIlxcXCIyXFx4OUUzXFx4OUYrJyA0ITZcXHhBMCEhICUqXFx1MUExNSBcXFwiIS5cXHhBMVxcXCJcXFwiMlxceEExM1xceEEyKycgNCE2XFx4QTMhISAlKlxcdTE5RkQgXFxcIiEuXFx4QTRcXFwiXFxcIjJcXHhBNDNcXHhBNSsnIDQhNlxceEE2ISEgJSpcXHUxOUU1IFxcXCIhLlxceEE3XFxcIlxcXCIyXFx4QTczXFx4QTgrJyA0ITZcXHhBOSEhICUqXFx1MTlDRCBcXFwiIS5cXHhBQVxcXCJcXFwiMlxceEFBM1xceEFCKycgNCE2XFx4QUMhISAlKlxcdTE5QjUgXFxcIiEuXFx4QURcXFwiXFxcIjJcXHhBRDNcXHhBRSsnIDQhNlxceEFGISEgJSpcXHUxOTlEIFxcXCIhLlxceEIwXFxcIlxcXCIyXFx4QjAzXFx4QjErJyA0ITZcXHhCMiEhICUqXFx1MTk4NSBcXFwiIS5cXHhCM1xcXCJcXFwiMlxceEIzM1xceEI0KycgNCE2XFx4QjUhISAlKlxcdTE5NkQgXFxcIiEuXFx4QjZcXFwiXFxcIjJcXHhCNjNcXHhCNysnIDQhNlxceEI4ISEgJSpcXHUxOTU1IFxcXCIhLlxceEI5XFxcIlxcXCIyXFx4QjkzXFx4QkErJyA0ITZcXHhCQiEhICUqXFx1MTkzRCBcXFwiIS5cXHhCQ1xcXCJcXFwiMlxceEJDM1xceEJEKycgNCE2XFx4QkUhISAlKlxcdTE5MjUgXFxcIiEuXFx4QkZcXFwiXFxcIjJcXHhCRjNcXHhDMCsnIDQhNlxceEMxISEgJSpcXHUxOTBEIFxcXCIhLlxceEMyXFxcIlxcXCIyXFx4QzIzXFx4QzMrJyA0ITZcXHhDNCEhICUqXFx1MThGNSBcXFwiIS5cXHhDNVxcXCJcXFwiMlxceEM1M1xceEM2KycgNCE2XFx4QzchISAlKlxcdTE4REQgXFxcIiEuXFx4QzhcXFwiXFxcIjJcXHhDODNcXHhDOSsnIDQhNlxceENBISEgJSpcXHUxOEM1IFxcXCIhLlxceENCXFxcIlxcXCIyXFx4Q0IzXFx4Q0MrJyA0ITZcXHhDRCEhICUqXFx1MThBRCBcXFwiIS5cXHhDRVxcXCJcXFwiMlxceENFM1xceENGKycgNCE2XFx4RDAhISAlKlxcdTE4OTUgXFxcIiEuXFx4RDFcXFwiXFxcIjJcXHhEMTNcXHhEMisnIDQhNlxceEQzISEgJSpcXHUxODdEIFxcXCIhLlxceEQ0XFxcIlxcXCIyXFx4RDQzXFx4RDUrJyA0ITZcXHhENiEhICUqXFx1MTg2NSBcXFwiIS5cXHhEN1xcXCJcXFwiMlxceEQ3M1xceEQ4KycgNCE2XFx4RDkhISAlKlxcdTE4NEQgXFxcIiEuXFx4REFcXFwiXFxcIjJcXHhEQTNcXHhEQisnIDQhNlxceERDISEgJSpcXHUxODM1IFxcXCIhLlxceEREXFxcIlxcXCIyXFx4REQzXFx4REUrJyA0ITZcXHhERiEhICUqXFx1MTgxRCBcXFwiIS5cXHhFMFxcXCJcXFwiMlxceEUwM1xceEUxKycgNCE2XFx4RTIhISAlKlxcdTE4MDUgXFxcIiEuXFx4RTNcXFwiXFxcIjJcXHhFMzNcXHhFNCsnIDQhNlxceEU1ISEgJSpcXHUxN0VEIFxcXCIhLlxceEU2XFxcIlxcXCIyXFx4RTYzXFx4RTcrJyA0ITZcXHhFOCEhICUqXFx1MTdENSBcXFwiIS5cXHhFOVxcXCJcXFwiMlxceEU5M1xceEVBKycgNCE2XFx4RUIhISAlKlxcdTE3QkQgXFxcIiEuXFx4RUNcXFwiXFxcIjJcXHhFQzNcXHhFRCsnIDQhNlxceEVFISEgJSpcXHUxN0E1IFxcXCIhLlxceEVGXFxcIlxcXCIyXFx4RUYzXFx4RjArJyA0ITZcXHhGMSEhICUqXFx1MTc4RCBcXFwiIS5cXHhGMlxcXCJcXFwiMlxceEYyM1xceEYzKycgNCE2XFx4RjQhISAlKlxcdTE3NzUgXFxcIiEuXFx4RjVcXFwiXFxcIjJcXHhGNTNcXHhGNisnIDQhNlxceEY3ISEgJSpcXHUxNzVEIFxcXCIhLlxceEY4XFxcIlxcXCIyXFx4RjgzXFx4RjkrJyA0ITZcXHhGQSEhICUqXFx1MTc0NSBcXFwiIS5cXHhGQlxcXCJcXFwiMlxceEZCM1xceEZDKycgNCE2XFx4RkQhISAlKlxcdTE3MkQgXFxcIiEuXFx4RkVcXFwiXFxcIjJcXHhGRTNcXHhGRisnIDQhNlxcdTAxMDAhISAlKlxcdTE3MTUgXFxcIiEuXFx1MDEwMVxcXCJcXFwiMlxcdTAxMDEzXFx1MDEwMisnIDQhNlxcdTAxMDMhISAlKlxcdTE2RkQgXFxcIiEuXFx1MDEwNFxcXCJcXFwiMlxcdTAxMDQzXFx1MDEwNSsnIDQhNlxcdTAxMDYhISAlKlxcdTE2RTUgXFxcIiEuXFx1MDEwN1xcXCJcXFwiMlxcdTAxMDczXFx1MDEwOCsnIDQhNlxcdTAxMDkhISAlKlxcdTE2Q0QgXFxcIiEuXFx1MDEwQVxcXCJcXFwiMlxcdTAxMEEzXFx1MDEwQisnIDQhNlxcdTAxMEMhISAlKlxcdTE2QjUgXFxcIiEuXFx1MDEwRFxcXCJcXFwiMlxcdTAxMEQzXFx1MDEwRSsnIDQhNlxcdTAxMEYhISAlKlxcdTE2OUQgXFxcIiEuXFx1MDExMFxcXCJcXFwiMlxcdTAxMTAzXFx1MDExMSsnIDQhNlxcdTAxMTIhISAlKlxcdTE2ODUgXFxcIiEuXFx1MDExM1xcXCJcXFwiMlxcdTAxMTMzXFx1MDExNCsnIDQhNlxcdTAxMTUhISAlKlxcdTE2NkQgXFxcIiEuXFx1MDExNlxcXCJcXFwiMlxcdTAxMTYzXFx1MDExNysnIDQhNlxcdTAxMTghISAlKlxcdTE2NTUgXFxcIiEuXFx1MDExOVxcXCJcXFwiMlxcdTAxMTkzXFx1MDExQSsnIDQhNlxcdTAxMUIhISAlKlxcdTE2M0QgXFxcIiEuXFx1MDExQ1xcXCJcXFwiMlxcdTAxMUMzXFx1MDExRCsnIDQhNlxcdTAxMUUhISAlKlxcdTE2MjUgXFxcIiEuXFx1MDExRlxcXCJcXFwiMlxcdTAxMUYzXFx1MDEyMCsnIDQhNlxcdTAxMjEhISAlKlxcdTE2MEQgXFxcIiEuXFx1MDEyMlxcXCJcXFwiMlxcdTAxMjIzXFx1MDEyMysnIDQhNlxcdTAxMjQhISAlKlxcdTE1RjUgXFxcIiEuXFx1MDEyNVxcXCJcXFwiMlxcdTAxMjUzXFx1MDEyNisnIDQhNlxcdTAxMjchISAlKlxcdTE1REQgXFxcIiEuXFx1MDEyOFxcXCJcXFwiMlxcdTAxMjgzXFx1MDEyOSsnIDQhNlxcdTAxMkEhISAlKlxcdTE1QzUgXFxcIiEuXFx1MDEyQlxcXCJcXFwiMlxcdTAxMkIzXFx1MDEyQysnIDQhNlxcdTAxMkQhISAlKlxcdTE1QUQgXFxcIiEuXFx1MDEyRVxcXCJcXFwiMlxcdTAxMkUzXFx1MDEyRisnIDQhNlxcdTAxMzAhISAlKlxcdTE1OTUgXFxcIiEuXFx1MDEzMVxcXCJcXFwiMlxcdTAxMzEzXFx1MDEzMisnIDQhNlxcdTAxMzMhISAlKlxcdTE1N0QgXFxcIiEuXFx1MDEzNFxcXCJcXFwiMlxcdTAxMzQzXFx1MDEzNSsnIDQhNlxcdTAxMzYhISAlKlxcdTE1NjUgXFxcIiEuXFx1MDEzN1xcXCJcXFwiMlxcdTAxMzczXFx1MDEzOCsnIDQhNlxcdTAxMzkhISAlKlxcdTE1NEQgXFxcIiEuXFx1MDEzQVxcXCJcXFwiMlxcdTAxM0EzXFx1MDEzQisnIDQhNlxcdTAxM0MhISAlKlxcdTE1MzUgXFxcIiEuXFx1MDEzRFxcXCJcXFwiMlxcdTAxM0QzXFx1MDEzRSsnIDQhNlxcdTAxM0YhISAlKlxcdTE1MUQgXFxcIiEuXFx1MDE0MFxcXCJcXFwiMlxcdTAxNDAzXFx1MDE0MSsnIDQhNlxcdTAxNDIhISAlKlxcdTE1MDUgXFxcIiEuXFx1MDE0M1xcXCJcXFwiMlxcdTAxNDMzXFx1MDE0NCsnIDQhNlxcdTAxNDUhISAlKlxcdTE0RUQgXFxcIiEuXFx1MDE0NlxcXCJcXFwiMlxcdTAxNDYzXFx1MDE0NysnIDQhNlxcdTAxNDghISAlKlxcdTE0RDUgXFxcIiEuXFx1MDE0OVxcXCJcXFwiMlxcdTAxNDkzXFx1MDE0QSsnIDQhNlxcdTAxNEIhISAlKlxcdTE0QkQgXFxcIiEuXFx1MDE0Q1xcXCJcXFwiMlxcdTAxNEMzXFx1MDE0RCsnIDQhNlxcdTAxNEUhISAlKlxcdTE0QTUgXFxcIiEuXFx1MDE0RlxcXCJcXFwiMlxcdTAxNEYzXFx1MDE1MCsnIDQhNlxcdTAxNTEhISAlKlxcdTE0OEQgXFxcIiEuXFx1MDE1MlxcXCJcXFwiMlxcdTAxNTIzXFx1MDE1MysnIDQhNlxcdTAxNTQhISAlKlxcdTE0NzUgXFxcIiEuXFx1MDE1NVxcXCJcXFwiMlxcdTAxNTUzXFx1MDE1NisnIDQhNlxcdTAxNTchISAlKlxcdTE0NUQgXFxcIiEuXFx1MDE1OFxcXCJcXFwiMlxcdTAxNTgzXFx1MDE1OSsnIDQhNlxcdTAxNUEhISAlKlxcdTE0NDUgXFxcIiEuXFx1MDE1QlxcXCJcXFwiMlxcdTAxNUIzXFx1MDE1QysnIDQhNlxcdTAxNUQhISAlKlxcdTE0MkQgXFxcIiEuXFx1MDE1RVxcXCJcXFwiMlxcdTAxNUUzXFx1MDE1RisnIDQhNlxcdTAxNjAhISAlKlxcdTE0MTUgXFxcIiEuXFx1MDE2MVxcXCJcXFwiMlxcdTAxNjEzXFx1MDE2MisnIDQhNlxcdTAxNjMhISAlKlxcdTEzRkQgXFxcIiEuXFx1MDE2NFxcXCJcXFwiMlxcdTAxNjQzXFx1MDE2NSsnIDQhNlxcdTAxNjYhISAlKlxcdTEzRTUgXFxcIiEuXFx1MDE2N1xcXCJcXFwiMlxcdTAxNjczXFx1MDE2OCsnIDQhNlxcdTAxNjkhISAlKlxcdTEzQ0QgXFxcIiEuXFx1MDE2QVxcXCJcXFwiMlxcdTAxNkEzXFx1MDE2QisnIDQhNlxcdTAxNkMhISAlKlxcdTEzQjUgXFxcIiEuXFx1MDE2RFxcXCJcXFwiMlxcdTAxNkQzXFx1MDE2RSsnIDQhNlxcdTAxNkYhISAlKlxcdTEzOUQgXFxcIiEuXFx1MDE3MFxcXCJcXFwiMlxcdTAxNzAzXFx1MDE3MSsnIDQhNlxcdTAxNzIhISAlKlxcdTEzODUgXFxcIiEuXFx1MDE3M1xcXCJcXFwiMlxcdTAxNzMzXFx1MDE3NCsnIDQhNlxcdTAxNzUhISAlKlxcdTEzNkQgXFxcIiEuXFx1MDE3NlxcXCJcXFwiMlxcdTAxNzYzXFx1MDE3NysnIDQhNlxcdTAxNzghISAlKlxcdTEzNTUgXFxcIiEuXFx1MDE3OVxcXCJcXFwiMlxcdTAxNzkzXFx1MDE3QSsnIDQhNlxcdTAxN0IhISAlKlxcdTEzM0QgXFxcIiEuXFx1MDE3Q1xcXCJcXFwiMlxcdTAxN0MzXFx1MDE3RCsnIDQhNlxcdTAxN0UhISAlKlxcdTEzMjUgXFxcIiEuXFx1MDE3RlxcXCJcXFwiMlxcdTAxN0YzXFx1MDE4MCsnIDQhNlxcdTAxODEhISAlKlxcdTEzMEQgXFxcIiEuXFx1MDE4MlxcXCJcXFwiMlxcdTAxODIzXFx1MDE4MysnIDQhNlxcdTAxODQhISAlKlxcdTEyRjUgXFxcIiEuXFx1MDE4NVxcXCJcXFwiMlxcdTAxODUzXFx1MDE4NisnIDQhNlxcdTAxODchISAlKlxcdTEyREQgXFxcIiEuXFx1MDE4OFxcXCJcXFwiMlxcdTAxODgzXFx1MDE4OSsnIDQhNlxcdTAxOEEhISAlKlxcdTEyQzUgXFxcIiEuXFx1MDE4QlxcXCJcXFwiMlxcdTAxOEIzXFx1MDE4QysnIDQhNlxcdTAxOEQhISAlKlxcdTEyQUQgXFxcIiEuXFx1MDE4RVxcXCJcXFwiMlxcdTAxOEUzXFx1MDE4RisnIDQhNlxcdTAxOTAhISAlKlxcdTEyOTUgXFxcIiEuXFx1MDE5MVxcXCJcXFwiMlxcdTAxOTEzXFx1MDE5MisnIDQhNlxcdTAxOTMhISAlKlxcdTEyN0QgXFxcIiEuXFx1MDE5NFxcXCJcXFwiMlxcdTAxOTQzXFx1MDE5NSsnIDQhNlxcdTAxOTYhISAlKlxcdTEyNjUgXFxcIiEuXFx1MDE5N1xcXCJcXFwiMlxcdTAxOTczXFx1MDE5OCsnIDQhNlxcdTAxOTkhISAlKlxcdTEyNEQgXFxcIiEuXFx1MDE5QVxcXCJcXFwiMlxcdTAxOUEzXFx1MDE5QisnIDQhNlxcdTAxOUMhISAlKlxcdTEyMzUgXFxcIiEuXFx1MDE5RFxcXCJcXFwiMlxcdTAxOUQzXFx1MDE5RSsnIDQhNlxcdTAxOUYhISAlKlxcdTEyMUQgXFxcIiEuXFx1MDFBMFxcXCJcXFwiMlxcdTAxQTAzXFx1MDFBMSsnIDQhNlxcdTAxQTIhISAlKlxcdTEyMDUgXFxcIiEuXFx1MDFBM1xcXCJcXFwiMlxcdTAxQTMzXFx1MDFBNCsnIDQhNlxcdTAxQTUhISAlKlxcdTExRUQgXFxcIiEuXFx1MDFBNlxcXCJcXFwiMlxcdTAxQTYzXFx1MDFBNysnIDQhNlxcdTAxQTghISAlKlxcdTExRDUgXFxcIiEuXFx1MDFBOVxcXCJcXFwiMlxcdTAxQTkzXFx1MDFBQSsnIDQhNlxcdTAxQUIhISAlKlxcdTExQkQgXFxcIiEuXFx1MDFBQ1xcXCJcXFwiMlxcdTAxQUMzXFx1MDFBRCsnIDQhNlxcdTAxQUUhISAlKlxcdTExQTUgXFxcIiEuXFx1MDFBRlxcXCJcXFwiMlxcdTAxQUYzXFx1MDFCMCsnIDQhNlxcdTAxQjEhISAlKlxcdTExOEQgXFxcIiEuXFx1MDFCMlxcXCJcXFwiMlxcdTAxQjIzXFx1MDFCMysnIDQhNlxcdTAxQjQhISAlKlxcdTExNzUgXFxcIiEuXFx1MDFCNVxcXCJcXFwiMlxcdTAxQjUzXFx1MDFCNisnIDQhNlxcdTAxQjchISAlKlxcdTExNUQgXFxcIiEuXFx1MDFCOFxcXCJcXFwiMlxcdTAxQjgzXFx1MDFCOSsnIDQhNlxcdTAxQkEhISAlKlxcdTExNDUgXFxcIiEuXFx1MDFCQlxcXCJcXFwiMlxcdTAxQkIzXFx1MDFCQysnIDQhNlxcdTAxQkQhISAlKlxcdTExMkQgXFxcIiEuXFx1MDFCRVxcXCJcXFwiMlxcdTAxQkUzXFx1MDFCRisnIDQhNlxcdTAxQzAhISAlKlxcdTExMTUgXFxcIiEuXFx1MDFDMVxcXCJcXFwiMlxcdTAxQzEzXFx1MDFDMisnIDQhNlxcdTAxQzMhISAlKlxcdTEwRkQgXFxcIiEuXFx1MDFDNFxcXCJcXFwiMlxcdTAxQzQzXFx1MDFDNSsnIDQhNlxcdTAxQzYhISAlKlxcdTEwRTUgXFxcIiEuXFx1MDFDN1xcXCJcXFwiMlxcdTAxQzczXFx1MDFDOCsnIDQhNlxcdTAxQzkhISAlKlxcdTEwQ0QgXFxcIiEuXFx1MDFDQVxcXCJcXFwiMlxcdTAxQ0EzXFx1MDFDQisnIDQhNlxcdTAxQ0MhISAlKlxcdTEwQjUgXFxcIiEuXFx1MDFDRFxcXCJcXFwiMlxcdTAxQ0QzXFx1MDFDRSsnIDQhNlxcdTAxQ0YhISAlKlxcdTEwOUQgXFxcIiEuXFx1MDFEMFxcXCJcXFwiMlxcdTAxRDAzXFx1MDFEMSsnIDQhNlxcdTAxRDIhISAlKlxcdTEwODUgXFxcIiEuXFx1MDFEM1xcXCJcXFwiMlxcdTAxRDMzXFx1MDFENCsnIDQhNlxcdTAxRDUhISAlKlxcdTEwNkQgXFxcIiEuXFx1MDFENlxcXCJcXFwiMlxcdTAxRDYzXFx1MDFENysnIDQhNlxcdTAxRDghISAlKlxcdTEwNTUgXFxcIiEuXFx1MDFEOVxcXCJcXFwiMlxcdTAxRDkzXFx1MDFEQSsnIDQhNlxcdTAxREIhISAlKlxcdTEwM0QgXFxcIiEuXFx1MDFEQ1xcXCJcXFwiMlxcdTAxREMzXFx1MDFERCsnIDQhNlxcdTAxREUhISAlKlxcdTEwMjUgXFxcIiEuXFx1MDFERlxcXCJcXFwiMlxcdTAxREYzXFx1MDFFMCsnIDQhNlxcdTAxRTEhISAlKlxcdTEwMEQgXFxcIiEuXFx1MDFFMlxcXCJcXFwiMlxcdTAxRTIzXFx1MDFFMysnIDQhNlxcdTAxRTQhISAlKlxcdTBGRjUgXFxcIiEuXFx1MDFFNVxcXCJcXFwiMlxcdTAxRTUzXFx1MDFFNisnIDQhNlxcdTAxRTchISAlKlxcdTBGREQgXFxcIiEuXFx1MDFFOFxcXCJcXFwiMlxcdTAxRTgzXFx1MDFFOSsnIDQhNlxcdTAxRUEhISAlKlxcdTBGQzUgXFxcIiEuXFx1MDFFQlxcXCJcXFwiMlxcdTAxRUIzXFx1MDFFQysnIDQhNlxcdTAxRUQhISAlKlxcdTBGQUQgXFxcIiEuXFx1MDFFRVxcXCJcXFwiMlxcdTAxRUUzXFx1MDFFRisnIDQhNlxcdTAxRjAhISAlKlxcdTBGOTUgXFxcIiEuXFx1MDFGMVxcXCJcXFwiMlxcdTAxRjEzXFx1MDFGMisnIDQhNlxcdTAxRjMhISAlKlxcdTBGN0QgXFxcIiEuXFx1MDFGNFxcXCJcXFwiMlxcdTAxRjQzXFx1MDFGNSsnIDQhNlxcdTAxRjYhISAlKlxcdTBGNjUgXFxcIiEuXFx1MDFGN1xcXCJcXFwiMlxcdTAxRjczXFx1MDFGOCsnIDQhNlxcdTAxRjkhISAlKlxcdTBGNEQgXFxcIiEuXFx1MDFGQVxcXCJcXFwiMlxcdTAxRkEzXFx1MDFGQisnIDQhNlxcdTAxRkMhISAlKlxcdTBGMzUgXFxcIiEuXFx1MDFGRFxcXCJcXFwiMlxcdTAxRkQzXFx1MDFGRSsnIDQhNlxcdTAxRkYhISAlKlxcdTBGMUQgXFxcIiEuXFx1MDIwMFxcXCJcXFwiMlxcdTAyMDAzXFx1MDIwMSsnIDQhNlxcdTAyMDIhISAlKlxcdTBGMDUgXFxcIiEuXFx1MDIwM1xcXCJcXFwiMlxcdTAyMDMzXFx1MDIwNCsnIDQhNlxcdTAyMDUhISAlKlxcdTBFRUQgXFxcIiEuXFx1MDIwNlxcXCJcXFwiMlxcdTAyMDYzXFx1MDIwNysnIDQhNlxcdTAyMDghISAlKlxcdTBFRDUgXFxcIiEuXFx1MDIwOVxcXCJcXFwiMlxcdTAyMDkzXFx1MDIwQSsnIDQhNlxcdTAyMEIhISAlKlxcdTBFQkQgXFxcIiEuXFx1MDIwQ1xcXCJcXFwiMlxcdTAyMEMzXFx1MDIwRCsnIDQhNlxcdTAyMEUhISAlKlxcdTBFQTUgXFxcIiEuXFx1MDIwRlxcXCJcXFwiMlxcdTAyMEYzXFx1MDIxMCsnIDQhNlxcdTAyMTEhISAlKlxcdTBFOEQgXFxcIiEuXFx1MDIxMlxcXCJcXFwiMlxcdTAyMTIzXFx1MDIxMysnIDQhNlxcdTAyMTQhISAlKlxcdTBFNzUgXFxcIiEuXFx1MDIxNVxcXCJcXFwiMlxcdTAyMTUzXFx1MDIxNisnIDQhNlxcdTAyMTchISAlKlxcdTBFNUQgXFxcIiEuXFx1MDIxOFxcXCJcXFwiMlxcdTAyMTgzXFx1MDIxOSsnIDQhNlxcdTAyMUEhISAlKlxcdTBFNDUgXFxcIiEuXFx1MDIxQlxcXCJcXFwiMlxcdTAyMUIzXFx1MDIxQysnIDQhNlxcdTAyMUQhISAlKlxcdTBFMkQgXFxcIiEuXFx1MDIxRVxcXCJcXFwiMlxcdTAyMUUzXFx1MDIxRisnIDQhNlxcdTAyMjAhISAlKlxcdTBFMTUgXFxcIiEuXFx1MDIyMVxcXCJcXFwiMlxcdTAyMjEzXFx1MDIyMisnIDQhNlxcdTAyMjMhISAlKlxcdTBERkQgXFxcIiEuXFx1MDIyNFxcXCJcXFwiMlxcdTAyMjQzXFx1MDIyNSsnIDQhNlxcdTAyMjYhISAlKlxcdTBERTUgXFxcIiEuXFx1MDIyN1xcXCJcXFwiMlxcdTAyMjczXFx1MDIyOCsnIDQhNlxcdTAyMjkhISAlKlxcdTBEQ0QgXFxcIiEuXFx1MDIyQVxcXCJcXFwiMlxcdTAyMkEzXFx1MDIyQisnIDQhNlxcdTAyMkMhISAlKlxcdTBEQjUgXFxcIiEuXFx1MDIyRFxcXCJcXFwiMlxcdTAyMkQzXFx1MDIyRSsnIDQhNlxcdTAyMkYhISAlKlxcdTBEOUQgXFxcIiEuXFx1MDIzMFxcXCJcXFwiMlxcdTAyMzAzXFx1MDIzMSsnIDQhNlxcdTAyMzIhISAlKlxcdTBEODUgXFxcIiEuXFx1MDIzM1xcXCJcXFwiMlxcdTAyMzMzXFx1MDIzNCsnIDQhNlxcdTAyMzUhISAlKlxcdTBENkQgXFxcIiEuXFx1MDIzNlxcXCJcXFwiMlxcdTAyMzYzXFx1MDIzNysnIDQhNlxcdTAyMzghISAlKlxcdTBENTUgXFxcIiEuXFx1MDIzOVxcXCJcXFwiMlxcdTAyMzkzXFx1MDIzQSsnIDQhNlxcdTAyM0IhISAlKlxcdTBEM0QgXFxcIiEuXFx1MDIzQ1xcXCJcXFwiMlxcdTAyM0MzXFx1MDIzRCsnIDQhNlxcdTAyM0UhISAlKlxcdTBEMjUgXFxcIiEuXFx1MDIzRlxcXCJcXFwiMlxcdTAyM0YzXFx1MDI0MCsnIDQhNlxcdTAyNDEhISAlKlxcdTBEMEQgXFxcIiEuXFx1MDI0MlxcXCJcXFwiMlxcdTAyNDIzXFx1MDI0MysnIDQhNlxcdTAyNDQhISAlKlxcdTBDRjUgXFxcIiEuXFx1MDI0NVxcXCJcXFwiMlxcdTAyNDUzXFx1MDI0NisnIDQhNlxcdTAyNDchISAlKlxcdTBDREQgXFxcIiEuXFx1MDI0OFxcXCJcXFwiMlxcdTAyNDgzXFx1MDI0OSsnIDQhNlxcdTAyNEEhISAlKlxcdTBDQzUgXFxcIiEuXFx1MDI0QlxcXCJcXFwiMlxcdTAyNEIzXFx1MDI0QysnIDQhNlxcdTAyNEQhISAlKlxcdTBDQUQgXFxcIiEuXFx1MDI0RVxcXCJcXFwiMlxcdTAyNEUzXFx1MDI0RisnIDQhNlxcdTAyNTAhISAlKlxcdTBDOTUgXFxcIiEuXFx1MDI1MVxcXCJcXFwiMlxcdTAyNTEzXFx1MDI1MisnIDQhNlxcdTAyNTMhISAlKlxcdTBDN0QgXFxcIiEuXFx1MDI1NFxcXCJcXFwiMlxcdTAyNTQzXFx1MDI1NSsnIDQhNlxcdTAyNTYhISAlKlxcdTBDNjUgXFxcIiEuXFx1MDI1N1xcXCJcXFwiMlxcdTAyNTczXFx1MDI1OCsnIDQhNlxcdTAyNTkhISAlKlxcdTBDNEQgXFxcIiEuXFx1MDI1QVxcXCJcXFwiMlxcdTAyNUEzXFx1MDI1QisnIDQhNlxcdTAyNUMhISAlKlxcdTBDMzUgXFxcIiEuXFx1MDI1RFxcXCJcXFwiMlxcdTAyNUQzXFx1MDI1RSsnIDQhNlxcdTAyNUYhISAlKlxcdTBDMUQgXFxcIiEuXFx1MDI2MFxcXCJcXFwiMlxcdTAyNjAzXFx1MDI2MSsnIDQhNlxcdTAyNjIhISAlKlxcdTBDMDUgXFxcIiEuXFx1MDI2M1xcXCJcXFwiMlxcdTAyNjMzXFx1MDI2NCsnIDQhNlxcdTAyNjUhISAlKlxcdTBCRUQgXFxcIiEuXFx1MDI2NlxcXCJcXFwiMlxcdTAyNjYzXFx1MDI2NysnIDQhNlxcdTAyNjghISAlKlxcdTBCRDUgXFxcIiEuXFx1MDI2OVxcXCJcXFwiMlxcdTAyNjkzXFx1MDI2QSsnIDQhNlxcdTAyNkIhISAlKlxcdTBCQkQgXFxcIiEuXFx1MDI2Q1xcXCJcXFwiMlxcdTAyNkMzXFx1MDI2RCsnIDQhNlxcdTAyNkUhISAlKlxcdTBCQTUgXFxcIiEuXFx1MDI2RlxcXCJcXFwiMlxcdTAyNkYzXFx1MDI3MCsnIDQhNlxcdTAyNzEhISAlKlxcdTBCOEQgXFxcIiEuXFx1MDI3MlxcXCJcXFwiMlxcdTAyNzIzXFx1MDI3MysnIDQhNlxcdTAyNzQhISAlKlxcdTBCNzUgXFxcIiEuXFx1MDI3NVxcXCJcXFwiMlxcdTAyNzUzXFx1MDI3NisnIDQhNlxcdTAyNzchISAlKlxcdTBCNUQgXFxcIiEuXFx1MDI3OFxcXCJcXFwiMlxcdTAyNzgzXFx1MDI3OSsnIDQhNlxcdTAyN0EhISAlKlxcdTBCNDUgXFxcIiEuXFx1MDI3QlxcXCJcXFwiMlxcdTAyN0IzXFx1MDI3QysnIDQhNlxcdTAyN0QhISAlKlxcdTBCMkQgXFxcIiEuXFx1MDI3RVxcXCJcXFwiMlxcdTAyN0UzXFx1MDI3RisnIDQhNlxcdTAyODAhISAlKlxcdTBCMTUgXFxcIiEuXFx1MDI4MVxcXCJcXFwiMlxcdTAyODEzXFx1MDI4MisnIDQhNlxcdTAyODMhISAlKlxcdTBBRkQgXFxcIiEuXFx1MDI4NFxcXCJcXFwiMlxcdTAyODQzXFx1MDI4NSsnIDQhNlxcdTAyODYhISAlKlxcdTBBRTUgXFxcIiEuXFx1MDI4N1xcXCJcXFwiMlxcdTAyODczXFx1MDI4OCsnIDQhNlxcdTAyODkhISAlKlxcdTBBQ0QgXFxcIiEuXFx1MDI4QVxcXCJcXFwiMlxcdTAyOEEzXFx1MDI4QisnIDQhNlxcdTAyOEMhISAlKlxcdTBBQjUgXFxcIiEuXFx1MDI4RFxcXCJcXFwiMlxcdTAyOEQzXFx1MDI4RSsnIDQhNlxcdTAyOEYhISAlKlxcdTBBOUQgXFxcIiEuXFx1MDI5MFxcXCJcXFwiMlxcdTAyOTAzXFx1MDI5MSsnIDQhNlxcdTAyOTIhISAlKlxcdTBBODUgXFxcIiEuXFx1MDI5M1xcXCJcXFwiMlxcdTAyOTMzXFx1MDI5NCsnIDQhNlxcdTAyOTUhISAlKlxcdTBBNkQgXFxcIiEuXFx1MDI5NlxcXCJcXFwiMlxcdTAyOTYzXFx1MDI5NysnIDQhNlxcdTAyOTghISAlKlxcdTBBNTUgXFxcIiEuXFx1MDI5OVxcXCJcXFwiMlxcdTAyOTkzXFx1MDI5QSsnIDQhNlxcdTAyOUIhISAlKlxcdTBBM0QgXFxcIiEuXFx1MDI5Q1xcXCJcXFwiMlxcdTAyOUMzXFx1MDI5RCsnIDQhNlxcdTAyOUUhISAlKlxcdTBBMjUgXFxcIiEuXFx1MDI5RlxcXCJcXFwiMlxcdTAyOUYzXFx1MDJBMCsnIDQhNlxcdTAyQTEhISAlKlxcdTBBMEQgXFxcIiEuXFx1MDJBMlxcXCJcXFwiMlxcdTAyQTIzXFx1MDJBMysnIDQhNlxcdTAyQTQhISAlKlxcdTA5RjUgXFxcIiEuXFx1MDJBNVxcXCJcXFwiMlxcdTAyQTUzXFx1MDJBNisnIDQhNlxcdTAyQTchISAlKlxcdTA5REQgXFxcIiEuXFx1MDJBOFxcXCJcXFwiMlxcdTAyQTgzXFx1MDJBOSsnIDQhNlxcdTAyQUEhISAlKlxcdTA5QzUgXFxcIiEuXFx1MDJBQlxcXCJcXFwiMlxcdTAyQUIzXFx1MDJBQysnIDQhNlxcdTAyQUQhISAlKlxcdTA5QUQgXFxcIiEuXFx1MDJBRVxcXCJcXFwiMlxcdTAyQUUzXFx1MDJBRisnIDQhNlxcdTAyQjAhISAlKlxcdTA5OTUgXFxcIiEuXFx1MDJCMVxcXCJcXFwiMlxcdTAyQjEzXFx1MDJCMisnIDQhNlxcdTAyQjMhISAlKlxcdTA5N0QgXFxcIiEuXFx1MDJCNFxcXCJcXFwiMlxcdTAyQjQzXFx1MDJCNSsnIDQhNlxcdTAyQjYhISAlKlxcdTA5NjUgXFxcIiEuXFx1MDJCN1xcXCJcXFwiMlxcdTAyQjczXFx1MDJCOCsnIDQhNlxcdTAyQjkhISAlKlxcdTA5NEQgXFxcIiEuXFx1MDJCQVxcXCJcXFwiMlxcdTAyQkEzXFx1MDJCQisnIDQhNlxcdTAyQkMhISAlKlxcdTA5MzUgXFxcIiEuXFx1MDJCRFxcXCJcXFwiMlxcdTAyQkQzXFx1MDJCRSsnIDQhNlxcdTAyQkYhISAlKlxcdTA5MUQgXFxcIiEuXFx1MDJDMFxcXCJcXFwiMlxcdTAyQzAzXFx1MDJDMSsnIDQhNlxcdTAyQzIhISAlKlxcdTA5MDUgXFxcIiEuXFx1MDJDM1xcXCJcXFwiMlxcdTAyQzMzXFx1MDJDNCsnIDQhNlxcdTAyQzUhISAlKlxcdTA4RUQgXFxcIiEuXFx1MDJDNlxcXCJcXFwiMlxcdTAyQzYzXFx1MDJDNysnIDQhNlxcdTAyQzghISAlKlxcdTA4RDUgXFxcIiEuXFx1MDJDOVxcXCJcXFwiMlxcdTAyQzkzXFx1MDJDQSsnIDQhNlxcdTAyQ0IhISAlKlxcdTA4QkQgXFxcIiEuXFx1MDJDQ1xcXCJcXFwiMlxcdTAyQ0MzXFx1MDJDRCsnIDQhNlxcdTAyQ0UhISAlKlxcdTA4QTUgXFxcIiEuXFx1MDJDRlxcXCJcXFwiMlxcdTAyQ0YzXFx1MDJEMCsnIDQhNlxcdTAyRDEhISAlKlxcdTA4OEQgXFxcIiEuXFx1MDJEMlxcXCJcXFwiMlxcdTAyRDIzXFx1MDJEMysnIDQhNlxcdTAyRDQhISAlKlxcdTA4NzUgXFxcIiEuXFx1MDJENVxcXCJcXFwiMlxcdTAyRDUzXFx1MDJENisnIDQhNlxcdTAyRDchISAlKlxcdTA4NUQgXFxcIiEuXFx1MDJEOFxcXCJcXFwiMlxcdTAyRDgzXFx1MDJEOSsnIDQhNlxcdTAyREEhISAlKlxcdTA4NDUgXFxcIiEuXFx1MDJEQlxcXCJcXFwiMlxcdTAyREIzXFx1MDJEQysnIDQhNlxcdTAyREQhISAlKlxcdTA4MkQgXFxcIiEuXFx1MDJERVxcXCJcXFwiMlxcdTAyREUzXFx1MDJERisnIDQhNlxcdTAyRTAhISAlKlxcdTA4MTUgXFxcIiEuXFx1MDJFMVxcXCJcXFwiMlxcdTAyRTEzXFx1MDJFMisnIDQhNlxcdTAyRTMhISAlKlxcdTA3RkQgXFxcIiEuXFx1MDJFNFxcXCJcXFwiMlxcdTAyRTQzXFx1MDJFNSsnIDQhNlxcdTAyRTYhISAlKlxcdTA3RTUgXFxcIiEuXFx1MDJFN1xcXCJcXFwiMlxcdTAyRTczXFx1MDJFOCsnIDQhNlxcdTAyRTkhISAlKlxcdTA3Q0QgXFxcIiEuXFx1MDJFQVxcXCJcXFwiMlxcdTAyRUEzXFx1MDJFQisnIDQhNlxcdTAyRUMhISAlKlxcdTA3QjUgXFxcIiEuXFx1MDJFRFxcXCJcXFwiMlxcdTAyRUQzXFx1MDJFRSsnIDQhNlxcdTAyRUYhISAlKlxcdTA3OUQgXFxcIiEuXFx1MDJGMFxcXCJcXFwiMlxcdTAyRjAzXFx1MDJGMSsnIDQhNlxcdTAyRjIhISAlKlxcdTA3ODUgXFxcIiEuXFx1MDJGM1xcXCJcXFwiMlxcdTAyRjMzXFx1MDJGNCsnIDQhNlxcdTAyRjUhISAlKlxcdTA3NkQgXFxcIiEuXFx1MDJGNlxcXCJcXFwiMlxcdTAyRjYzXFx1MDJGNysnIDQhNlxcdTAyRjghISAlKlxcdTA3NTUgXFxcIiEuXFx1MDJGOVxcXCJcXFwiMlxcdTAyRjkzXFx1MDJGQSsnIDQhNlxcdTAyRkIhISAlKlxcdTA3M0QgXFxcIiEuXFx1MDJGQ1xcXCJcXFwiMlxcdTAyRkMzXFx1MDJGRCsnIDQhNlxcdTAyRkUhISAlKlxcdTA3MjUgXFxcIiEuXFx1MDJGRlxcXCJcXFwiMlxcdTAyRkYzXFx1MDMwMCsnIDQhNlxcdTAzMDEhISAlKlxcdTA3MEQgXFxcIiEuXFx1MDMwMlxcXCJcXFwiMlxcdTAzMDIzXFx1MDMwMysnIDQhNlxcdTAzMDQhISAlKlxcdTA2RjUgXFxcIiEuXFx1MDMwNVxcXCJcXFwiMlxcdTAzMDUzXFx1MDMwNisnIDQhNlxcdTAzMDchISAlKlxcdTA2REQgXFxcIiEuXFx1MDMwOFxcXCJcXFwiMlxcdTAzMDgzXFx1MDMwOSsnIDQhNlxcdTAzMEEhISAlKlxcdTA2QzUgXFxcIiEuXFx1MDMwQlxcXCJcXFwiMlxcdTAzMEIzXFx1MDMwQysnIDQhNlxcdTAzMEQhISAlKlxcdTA2QUQgXFxcIiEuXFx1MDMwRVxcXCJcXFwiMlxcdTAzMEUzXFx1MDMwRisnIDQhNlxcdTAzMTAhISAlKlxcdTA2OTUgXFxcIiEuXFx1MDMxMVxcXCJcXFwiMlxcdTAzMTEzXFx1MDMxMisnIDQhNlxcdTAzMTMhISAlKlxcdTA2N0QgXFxcIiEuXFx1MDMxNFxcXCJcXFwiMlxcdTAzMTQzXFx1MDMxNSsnIDQhNlxcdTAzMTYhISAlKlxcdTA2NjUgXFxcIiEuXFx1MDMxN1xcXCJcXFwiMlxcdTAzMTczXFx1MDMxOCsnIDQhNlxcdTAzMTkhISAlKlxcdTA2NEQgXFxcIiEuXFx1MDMxQVxcXCJcXFwiMlxcdTAzMUEzXFx1MDMxQisnIDQhNlxcdTAzMUMhISAlKlxcdTA2MzUgXFxcIiEuXFx1MDMxRFxcXCJcXFwiMlxcdTAzMUQzXFx1MDMxRSsnIDQhNlxcdTAzMUYhISAlKlxcdTA2MUQgXFxcIiEuXFx1MDMyMFxcXCJcXFwiMlxcdTAzMjAzXFx1MDMyMSsnIDQhNlxcdTAzMjIhISAlKlxcdTA2MDUgXFxcIiEuXFx1MDMyM1xcXCJcXFwiMlxcdTAzMjMzXFx1MDMyNCsnIDQhNlxcdTAzMjUhISAlKlxcdTA1RUQgXFxcIiEuXFx1MDMyNlxcXCJcXFwiMlxcdTAzMjYzXFx1MDMyNysnIDQhNlxcdTAzMjghISAlKlxcdTA1RDUgXFxcIiEuXFx1MDMyOVxcXCJcXFwiMlxcdTAzMjkzXFx1MDMyQSsnIDQhNlxcdTAzMkIhISAlKlxcdTA1QkQgXFxcIiEuXFx1MDMyQ1xcXCJcXFwiMlxcdTAzMkMzXFx1MDMyRCsnIDQhNlxcdTAzMkUhISAlKlxcdTA1QTUgXFxcIiEuXFx1MDMyRlxcXCJcXFwiMlxcdTAzMkYzXFx1MDMzMCsnIDQhNlxcdTAzMzEhISAlKlxcdTA1OEQgXFxcIiEuXFx1MDMzMlxcXCJcXFwiMlxcdTAzMzIzXFx1MDMzMysnIDQhNlxcdTAzMzQhISAlKlxcdTA1NzUgXFxcIiEuXFx1MDMzNVxcXCJcXFwiMlxcdTAzMzUzXFx1MDMzNisnIDQhNlxcdTAzMzchISAlKlxcdTA1NUQgXFxcIiEuXFx1MDMzOFxcXCJcXFwiMlxcdTAzMzgzXFx1MDMzOSsnIDQhNlxcdTAzM0EhISAlKlxcdTA1NDUgXFxcIiEuXFx1MDMzQlxcXCJcXFwiMlxcdTAzM0IzXFx1MDMzQysnIDQhNlxcdTAzM0QhISAlKlxcdTA1MkQgXFxcIiEuXFx1MDMzRVxcXCJcXFwiMlxcdTAzM0UzXFx1MDMzRisnIDQhNlxcdTAzNDAhISAlKlxcdTA1MTUgXFxcIiEuXFx1MDM0MVxcXCJcXFwiMlxcdTAzNDEzXFx1MDM0MisnIDQhNlxcdTAzNDMhISAlKlxcdTA0RkQgXFxcIiEuXFx1MDM0NFxcXCJcXFwiMlxcdTAzNDQzXFx1MDM0NSsnIDQhNlxcdTAzNDYhISAlKlxcdTA0RTUgXFxcIiEuXFx1MDM0N1xcXCJcXFwiMlxcdTAzNDczXFx1MDM0OCsnIDQhNlxcdTAzNDkhISAlKlxcdTA0Q0QgXFxcIiEuXFx1MDM0QVxcXCJcXFwiMlxcdTAzNEEzXFx1MDM0QisnIDQhNlxcdTAzNEMhISAlKlxcdTA0QjUgXFxcIiEuXFx1MDM0RFxcXCJcXFwiMlxcdTAzNEQzXFx1MDM0RSsnIDQhNlxcdTAzNEYhISAlKlxcdTA0OUQgXFxcIiEuXFx1MDM1MFxcXCJcXFwiMlxcdTAzNTAzXFx1MDM1MSsnIDQhNlxcdTAzNTIhISAlKlxcdTA0ODUgXFxcIiEuXFx1MDM1M1xcXCJcXFwiMlxcdTAzNTMzXFx1MDM1NCsnIDQhNlxcdTAzNTUhISAlKlxcdTA0NkQgXFxcIiEuXFx1MDM1NlxcXCJcXFwiMlxcdTAzNTYzXFx1MDM1NysnIDQhNlxcdTAzNTghISAlKlxcdTA0NTUgXFxcIiEuXFx1MDM1OVxcXCJcXFwiMlxcdTAzNTkzXFx1MDM1QSsnIDQhNlxcdTAzNUIhISAlKlxcdTA0M0QgXFxcIiEuXFx1MDM1Q1xcXCJcXFwiMlxcdTAzNUMzXFx1MDM1RCsnIDQhNlxcdTAzNUUhISAlKlxcdTA0MjUgXFxcIiEuXFx1MDM1RlxcXCJcXFwiMlxcdTAzNUYzXFx1MDM2MCsnIDQhNlxcdTAzNjEhISAlKlxcdTA0MEQgXFxcIiEuXFx1MDM2MlxcXCJcXFwiMlxcdTAzNjIzXFx1MDM2MysnIDQhNlxcdTAzNjQhISAlKlxcdTAzRjUgXFxcIiEuXFx1MDM2NVxcXCJcXFwiMlxcdTAzNjUzXFx1MDM2NisnIDQhNlxcdTAzNjchISAlKlxcdTAzREQgXFxcIiEuXFx1MDM2OFxcXCJcXFwiMlxcdTAzNjgzXFx1MDM2OSsnIDQhNlxcdTAzNkEhISAlKlxcdTAzQzUgXFxcIiEuXFx1MDM2QlxcXCJcXFwiMlxcdTAzNkIzXFx1MDM2QysnIDQhNlxcdTAzNkQhISAlKlxcdTAzQUQgXFxcIiEuXFx1MDM2RVxcXCJcXFwiMlxcdTAzNkUzXFx1MDM2RisnIDQhNlxcdTAzNzAhISAlKlxcdTAzOTUgXFxcIiEuXFx1MDM3MVxcXCJcXFwiMlxcdTAzNzEzXFx1MDM3MisnIDQhNlxcdTAzNzMhISAlKlxcdTAzN0QgXFxcIiEuXFx1MDM3NFxcXCJcXFwiMlxcdTAzNzQzXFx1MDM3NSsnIDQhNlxcdTAzNzYhISAlKlxcdTAzNjUgXFxcIiEuXFx1MDM3N1xcXCJcXFwiMlxcdTAzNzczXFx1MDM3OCsnIDQhNlxcdTAzNzkhISAlKlxcdTAzNEQgXFxcIiEuXFx1MDM3QVxcXCJcXFwiMlxcdTAzN0EzXFx1MDM3QisnIDQhNlxcdTAzN0MhISAlKlxcdTAzMzUgXFxcIiEuXFx1MDM3RFxcXCJcXFwiMlxcdTAzN0QzXFx1MDM3RSsnIDQhNlxcdTAzN0YhISAlKlxcdTAzMUQgXFxcIiEuXFx1MDM4MFxcXCJcXFwiMlxcdTAzODAzXFx1MDM4MSsnIDQhNlxcdTAzODIhISAlKlxcdTAzMDUgXFxcIiEuXFx1MDM4M1xcXCJcXFwiMlxcdTAzODMzXFx1MDM4NCsnIDQhNlxcdTAzODUhISAlKlxcdTAyRUQgXFxcIiEuXFx1MDM4NlxcXCJcXFwiMlxcdTAzODYzXFx1MDM4NysnIDQhNlxcdTAzODghISAlKlxcdTAyRDUgXFxcIiEuXFx1MDM4OVxcXCJcXFwiMlxcdTAzODkzXFx1MDM4QSsnIDQhNlxcdTAzOEIhISAlKlxcdTAyQkQgXFxcIiEuXFx1MDM4Q1xcXCJcXFwiMlxcdTAzOEMzXFx1MDM4RCsnIDQhNlxcdTAzOEUhISAlKlxcdTAyQTUgXFxcIiEuXFx1MDM4RlxcXCJcXFwiMlxcdTAzOEYzXFx1MDM5MCsnIDQhNlxcdTAzOTEhISAlKlxcdTAyOEQgXFxcIiEuXFx1MDM5MlxcXCJcXFwiMlxcdTAzOTIzXFx1MDM5MysnIDQhNlxcdTAzOTQhISAlKlxcdTAyNzUgXFxcIiEuXFx1MDM5NVxcXCJcXFwiMlxcdTAzOTUzXFx1MDM5NisnIDQhNlxcdTAzOTchISAlKlxcdTAyNUQgXFxcIiEuXFx1MDM5OFxcXCJcXFwiMlxcdTAzOTgzXFx1MDM5OSsnIDQhNlxcdTAzOUEhISAlKlxcdTAyNDUgXFxcIiEuXFx1MDM5QlxcXCJcXFwiMlxcdTAzOUIzXFx1MDM5QysnIDQhNlxcdTAzOUQhISAlKlxcdTAyMkQgXFxcIiEuXFx1MDM5RVxcXCJcXFwiMlxcdTAzOUUzXFx1MDM5RisnIDQhNlxcdTAzQTAhISAlKlxcdTAyMTUgXFxcIiEuXFx1MDNBMVxcXCJcXFwiMlxcdTAzQTEzXFx1MDNBMisnIDQhNlxcdTAzQTMhISAlKlxcdTAxRkQgXFxcIiEuXFx1MDNBNFxcXCJcXFwiMlxcdTAzQTQzXFx1MDNBNSsnIDQhNlxcdTAzQTYhISAlKlxcdTAxRTUgXFxcIiEuXFx1MDNBN1xcXCJcXFwiMlxcdTAzQTczXFx1MDNBOCsnIDQhNlxcdTAzQTkhISAlKlxcdTAxQ0QgXFxcIiEuXFx1MDNBQVxcXCJcXFwiMlxcdTAzQUEzXFx1MDNBQisnIDQhNlxcdTAzQUMhISAlKlxcdTAxQjUgXFxcIiEuXFx1MDNBRFxcXCJcXFwiMlxcdTAzQUQzXFx1MDNBRSsnIDQhNlxcdTAzQUYhISAlKlxcdTAxOUQgXFxcIiEuXFx1MDNCMFxcXCJcXFwiMlxcdTAzQjAzXFx1MDNCMSsnIDQhNlxcdTAzQjIhISAlKlxcdTAxODUgXFxcIiEuXFx1MDNCM1xcXCJcXFwiMlxcdTAzQjMzXFx1MDNCNCsnIDQhNlxcdTAzQjUhISAlKlxcdTAxNkQgXFxcIiEuXFx1MDNCNlxcXCJcXFwiMlxcdTAzQjYzXFx1MDNCNysnIDQhNlxcdTAzQjghISAlKlxcdTAxNTUgXFxcIiEuXFx1MDNCOVxcXCJcXFwiMlxcdTAzQjkzXFx1MDNCQSsnIDQhNlxcdTAzQkIhISAlKlxcdTAxM0QgXFxcIiEuXFx1MDNCQ1xcXCJcXFwiMlxcdTAzQkMzXFx1MDNCRCsnIDQhNlxcdTAzQkUhISAlKlxcdTAxMjUgXFxcIiEuXFx1MDNCRlxcXCJcXFwiMlxcdTAzQkYzXFx1MDNDMCsnIDQhNlxcdTAzQzEhISAlKlxcdTAxMEQgXFxcIiEuXFx1MDNDMlxcXCJcXFwiMlxcdTAzQzIzXFx1MDNDMysnIDQhNlxcdTAzQzQhISAlKlxceEY1IFxcXCIhLlxcdTAzQzVcXFwiXFxcIjJcXHUwM0M1M1xcdTAzQzYrJyA0ITZcXHUwM0M3ISEgJSpcXHhERCBcXFwiIS5cXHUwM0M4XFxcIlxcXCIyXFx1MDNDODNcXHUwM0M5KycgNCE2XFx1MDNDQSEhICUqXFx4QzUgXFxcIiEuXFx1MDNDQlxcXCJcXFwiMlxcdTAzQ0IzXFx1MDNDQysnIDQhNlxcdTAzQ0QhISAlKlxceEFEIFxcXCIhLlxcdTAzQ0VcXFwiXFxcIjJcXHUwM0NFM1xcdTAzQ0YrJyA0ITZcXHUwM0QwISEgJSpcXHg5NSBcXFwiIS5cXHUwM0QxXFxcIlxcXCIyXFx1MDNEMTNcXHUwM0QyKycgNCE2XFx1MDNEMyEhICUqfSBcXFwiIS5cXHUwM0Q0XFxcIlxcXCIyXFx1MDNENDNcXHUwM0Q1KycgNCE2XFx1MDNENiEhICUqZSBcXFwiIS5cXHUwM0Q3XFxcIlxcXCIyXFx1MDNENzNcXHUwM0Q4KycgNCE2XFx1MDNEOSEhICUqTSBcXFwiIS5cXHUwM0RBXFxcIlxcXCIyXFx1MDNEQTNcXHUwM0RCKycgNCE2XFx1MDNEQyEhICUqNSBcXFwiIS5cXHUwM0REXFxcIlxcXCIyXFx1MDNERDNcXHUwM0RFKycgNCE2XFx1MDNERiEhICVcIiksXG4gICAgICAgICAgcGVnJGRlY29kZShcIi5cXHUwM0UwXFxcIlxcXCIyXFx1MDNFMDNcXHUwM0UxKlxcdTAxMzEgXFxcIi5cXHUwM0UyXFxcIlxcXCIyXFx1MDNFMjNcXHUwM0UzKlxcdTAxMjUgXFxcIi5cXHUwM0U0XFxcIlxcXCIyXFx1MDNFNDNcXHUwM0U1KlxcdTAxMTkgXFxcIi5cXHUwMzkyXFxcIlxcXCIyXFx1MDM5MjNcXHUwMzkzKlxcdTAxMEQgXFxcIi5cXHUwMzlFXFxcIlxcXCIyXFx1MDM5RTNcXHUwMzlGKlxcdTAxMDEgXFxcIi5cXHUwMzk1XFxcIlxcXCIyXFx1MDM5NTNcXHUwMzk2KlxceEY1IFxcXCIuXFx1MDNFNlxcXCJcXFwiMlxcdTAzRTYzXFx1MDNFNypcXHhFOSBcXFwiLlxcdTAzRThcXFwiXFxcIjJcXHUwM0U4M1xcdTAzRTkqXFx4REQgXFxcIi5cXHUwM0QxXFxcIlxcXCIyXFx1MDNEMTNcXHUwM0QyKlxceEQxIFxcXCIuXFx1MDNFQVxcXCJcXFwiMlxcdTAzRUEzXFx1MDNFQipcXHhDNSBcXFwiLlxcdTAzRDRcXFwiXFxcIjJcXHUwM0Q0M1xcdTAzRDUqXFx4QjkgXFxcIi5cXHUwM0VDXFxcIlxcXCIyXFx1MDNFQzNcXHUwM0VEKlxceEFEIFxcXCIuXFx1MDNBQVxcXCJcXFwiMlxcdTAzQUEzXFx1MDNBQipcXHhBMSBcXFwiLlxcdTAzOEZcXFwiXFxcIjJcXHUwMzhGM1xcdTAzOTAqXFx4OTUgXFxcIi5cXHUwM0VFXFxcIlxcXCIyXFx1MDNFRTNcXHUwM0VGKlxceDg5IFxcXCIuXFx1MDNGMFxcXCJcXFwiMlxcdTAzRjAzXFx1MDNGMSp9IFxcXCIuXFx1MDNGMlxcXCJcXFwiMlxcdTAzRjIzXFx1MDNGMypxIFxcXCIuXFx1MDNEQVxcXCJcXFwiMlxcdTAzREEzXFx1MDNEQiplIFxcXCIuXFx1MDNGNFxcXCJcXFwiMlxcdTAzRjQzXFx1MDNGNSpZIFxcXCIuXFx1MDNGNlxcXCJcXFwiMlxcdTAzRjYzXFx1MDNGNypNIFxcXCIuXFx1MDNGOFxcXCJcXFwiMlxcdTAzRjgzXFx1MDNGOSpBIFxcXCIuXFx1MDNGQVxcXCJcXFwiMlxcdTAzRkEzXFx1MDNGQio1IFxcXCIuXFx1MDNGQ1xcXCJcXFwiMlxcdTAzRkMzXFx1MDNGRCopIFxcXCIuXFx1MDNGRVxcXCJcXFwiMlxcdTAzRkUzXFx1MDNGRlwiKVxuICAgICAgICBdLFxuXG4gICAgICAgIHBlZyRjdXJyUG9zICAgICAgICAgID0gMCxcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zICAgICAgPSAwLFxuICAgICAgICBwZWckY2FjaGVkUG9zICAgICAgICA9IDAsXG4gICAgICAgIHBlZyRjYWNoZWRQb3NEZXRhaWxzID0geyBsaW5lOiAxLCBjb2x1bW46IDEsIHNlZW5DUjogZmFsc2UgfSxcbiAgICAgICAgcGVnJG1heEZhaWxQb3MgICAgICAgPSAwLFxuICAgICAgICBwZWckbWF4RmFpbEV4cGVjdGVkICA9IFtdLFxuICAgICAgICBwZWckc2lsZW50RmFpbHMgICAgICA9IDAsXG5cbiAgICAgICAgcGVnJHJlc3VsdDtcblxuICAgIGlmIChcInN0YXJ0UnVsZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICghKG9wdGlvbnMuc3RhcnRSdWxlIGluIHBlZyRzdGFydFJ1bGVJbmRpY2VzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBwYXJzaW5nIGZyb20gcnVsZSBcXFwiXCIgKyBvcHRpb25zLnN0YXJ0UnVsZSArIFwiXFxcIi5cIik7XG4gICAgICB9XG5cbiAgICAgIHBlZyRzdGFydFJ1bGVJbmRleCA9IHBlZyRzdGFydFJ1bGVJbmRpY2VzW29wdGlvbnMuc3RhcnRSdWxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXh0KCkge1xuICAgICAgcmV0dXJuIGlucHV0LnN1YnN0cmluZyhwZWckcmVwb3J0ZWRQb3MsIHBlZyRjdXJyUG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgICByZXR1cm4gcGVnJHJlcG9ydGVkUG9zO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmUoKSB7XG4gICAgICByZXR1cm4gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBlZyRyZXBvcnRlZFBvcykubGluZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2x1bW4oKSB7XG4gICAgICByZXR1cm4gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBlZyRyZXBvcnRlZFBvcykuY29sdW1uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cGVjdGVkKGRlc2NyaXB0aW9uKSB7XG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24oXG4gICAgICAgIG51bGwsXG4gICAgICAgIFt7IHR5cGU6IFwib3RoZXJcIiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIH1dLFxuICAgICAgICBwZWckcmVwb3J0ZWRQb3NcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgICAgdGhyb3cgcGVnJGJ1aWxkRXhjZXB0aW9uKG1lc3NhZ2UsIG51bGwsIHBlZyRyZXBvcnRlZFBvcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcykge1xuICAgICAgZnVuY3Rpb24gYWR2YW5jZShkZXRhaWxzLCBzdGFydFBvcywgZW5kUG9zKSB7XG4gICAgICAgIHZhciBwLCBjaDtcblxuICAgICAgICBmb3IgKHAgPSBzdGFydFBvczsgcCA8IGVuZFBvczsgcCsrKSB7XG4gICAgICAgICAgY2ggPSBpbnB1dC5jaGFyQXQocCk7XG4gICAgICAgICAgaWYgKGNoID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBpZiAoIWRldGFpbHMuc2VlbkNSKSB7IGRldGFpbHMubGluZSsrOyB9XG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbiA9IDE7XG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiXFxyXCIgfHwgY2ggPT09IFwiXFx1MjAyOFwiIHx8IGNoID09PSBcIlxcdTIwMjlcIikge1xuICAgICAgICAgICAgZGV0YWlscy5saW5lKys7XG4gICAgICAgICAgICBkZXRhaWxzLmNvbHVtbiA9IDE7XG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uKys7XG4gICAgICAgICAgICBkZXRhaWxzLnNlZW5DUiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGVnJGNhY2hlZFBvcyAhPT0gcG9zKSB7XG4gICAgICAgIGlmIChwZWckY2FjaGVkUG9zID4gcG9zKSB7XG4gICAgICAgICAgcGVnJGNhY2hlZFBvcyA9IDA7XG4gICAgICAgICAgcGVnJGNhY2hlZFBvc0RldGFpbHMgPSB7IGxpbmU6IDEsIGNvbHVtbjogMSwgc2VlbkNSOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIGFkdmFuY2UocGVnJGNhY2hlZFBvc0RldGFpbHMsIHBlZyRjYWNoZWRQb3MsIHBvcyk7XG4gICAgICAgIHBlZyRjYWNoZWRQb3MgPSBwb3M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwZWckY2FjaGVkUG9zRGV0YWlscztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckZmFpbChleHBlY3RlZCkge1xuICAgICAgaWYgKHBlZyRjdXJyUG9zIDwgcGVnJG1heEZhaWxQb3MpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmIChwZWckY3VyclBvcyA+IHBlZyRtYXhGYWlsUG9zKSB7XG4gICAgICAgIHBlZyRtYXhGYWlsUG9zID0gcGVnJGN1cnJQb3M7XG4gICAgICAgIHBlZyRtYXhGYWlsRXhwZWN0ZWQgPSBbXTtcbiAgICAgIH1cblxuICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZC5wdXNoKGV4cGVjdGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckYnVpbGRFeGNlcHRpb24obWVzc2FnZSwgZXhwZWN0ZWQsIHBvcykge1xuICAgICAgZnVuY3Rpb24gY2xlYW51cEV4cGVjdGVkKGV4cGVjdGVkKSB7XG4gICAgICAgIHZhciBpID0gMTtcblxuICAgICAgICBleHBlY3RlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5kZXNjcmlwdGlvbiA8IGIuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGEuZGVzY3JpcHRpb24gPiBiLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB3aGlsZSAoaSA8IGV4cGVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChleHBlY3RlZFtpIC0gMV0gPT09IGV4cGVjdGVkW2ldKSB7XG4gICAgICAgICAgICBleHBlY3RlZC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCkge1xuICAgICAgICBmdW5jdGlvbiBzdHJpbmdFc2NhcGUocykge1xuICAgICAgICAgIGZ1bmN0aW9uIGhleChjaCkgeyByZXR1cm4gY2guY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgfVxuXG4gICAgICAgICAgcmV0dXJuIHNcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcL2csICAgJ1xcXFxcXFxcJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAgICAnXFxcXFwiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHgwOC9nLCAnXFxcXGInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcdC9nLCAgICdcXFxcdCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxuL2csICAgJ1xcXFxuJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXGYvZywgICAnXFxcXGYnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcci9nLCAgICdcXFxccicpXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDAwLVxceDA3XFx4MEJcXHgwRVxceDBGXS9nLCBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx4MCcgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHgxMC1cXHgxRlxceDgwLVxceEZGXS9nLCAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx4JyAgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMTgwLVxcdTBGRkZdL2csICAgICAgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxcdTAnICsgaGV4KGNoKTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MTA4MC1cXHVGRkZGXS9nLCAgICAgICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHUnICArIGhleChjaCk7IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cGVjdGVkRGVzY3MgPSBuZXcgQXJyYXkoZXhwZWN0ZWQubGVuZ3RoKSxcbiAgICAgICAgICAgIGV4cGVjdGVkRGVzYywgZm91bmREZXNjLCBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBleHBlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGV4cGVjdGVkRGVzY3NbaV0gPSBleHBlY3RlZFtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4cGVjdGVkRGVzYyA9IGV4cGVjdGVkLmxlbmd0aCA+IDFcbiAgICAgICAgICA/IGV4cGVjdGVkRGVzY3Muc2xpY2UoMCwgLTEpLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICArIFwiIG9yIFwiXG4gICAgICAgICAgICAgICsgZXhwZWN0ZWREZXNjc1tleHBlY3RlZC5sZW5ndGggLSAxXVxuICAgICAgICAgIDogZXhwZWN0ZWREZXNjc1swXTtcblxuICAgICAgICBmb3VuZERlc2MgPSBmb3VuZCA/IFwiXFxcIlwiICsgc3RyaW5nRXNjYXBlKGZvdW5kKSArIFwiXFxcIlwiIDogXCJlbmQgb2YgaW5wdXRcIjtcblxuICAgICAgICByZXR1cm4gXCJFeHBlY3RlZCBcIiArIGV4cGVjdGVkRGVzYyArIFwiIGJ1dCBcIiArIGZvdW5kRGVzYyArIFwiIGZvdW5kLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9zRGV0YWlscyA9IHBlZyRjb21wdXRlUG9zRGV0YWlscyhwb3MpLFxuICAgICAgICAgIGZvdW5kICAgICAgPSBwb3MgPCBpbnB1dC5sZW5ndGggPyBpbnB1dC5jaGFyQXQocG9zKSA6IG51bGw7XG5cbiAgICAgIGlmIChleHBlY3RlZCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhbnVwRXhwZWN0ZWQoZXhwZWN0ZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFN5bnRheEVycm9yKFxuICAgICAgICBtZXNzYWdlICE9PSBudWxsID8gbWVzc2FnZSA6IGJ1aWxkTWVzc2FnZShleHBlY3RlZCwgZm91bmQpLFxuICAgICAgICBleHBlY3RlZCxcbiAgICAgICAgZm91bmQsXG4gICAgICAgIHBvcyxcbiAgICAgICAgcG9zRGV0YWlscy5saW5lLFxuICAgICAgICBwb3NEZXRhaWxzLmNvbHVtblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckZGVjb2RlKHMpIHtcbiAgICAgIHZhciBiYyA9IG5ldyBBcnJheShzLmxlbmd0aCksIGk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJjW2ldID0gcy5jaGFyQ29kZUF0KGkpIC0gMzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiYztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VSdWxlKGluZGV4KSB7XG4gICAgICB2YXIgYmMgICAgPSBwZWckYnl0ZWNvZGVbaW5kZXhdLFxuICAgICAgICAgIGlwICAgID0gMCxcbiAgICAgICAgICBpcHMgICA9IFtdLFxuICAgICAgICAgIGVuZCAgID0gYmMubGVuZ3RoLFxuICAgICAgICAgIGVuZHMgID0gW10sXG4gICAgICAgICAgc3RhY2sgPSBbXSxcbiAgICAgICAgICBwYXJhbXMsIGk7XG5cbiAgICAgIGZ1bmN0aW9uIHByb3RlY3Qob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KG9iamVjdCkgPT09IFwiW29iamVjdCBBcnJheV1cIiA/IFtdIDogb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB3aGlsZSAoaXAgPCBlbmQpIHtcbiAgICAgICAgICBzd2l0Y2ggKGJjW2lwXSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHByb3RlY3QocGVnJGNvbnN0c1tiY1tpcCArIDFdXSkpO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHBlZyRjdXJyUG9zKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIHN0YWNrLmxlbmd0aCAtPSBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBzdGFjay5zcGxpY2UoLTIsIDEpO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICBzdGFja1tzdGFjay5sZW5ndGggLSAyXS5wdXNoKHN0YWNrLnBvcCgpKTtcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChzdGFjay5zcGxpY2Uoc3RhY2subGVuZ3RoIC0gYmNbaXAgKyAxXSwgYmNbaXAgKyAxXSkpO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChpbnB1dC5zdWJzdHJpbmcoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0sIHBlZyRjdXJyUG9zKSk7XG4gICAgICAgICAgICAgIGlwKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV0gKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICAgIGlwICs9IDMgKyBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICAgIGlwcy5wdXNoKGlwKTtcblxuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMiArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpcCArPSAyICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyAzICsgYmNbaXAgKyAxXSArIGJjW2lwICsgMl0pO1xuXG4gICAgICAgICAgICAgIGlmIChpbnB1dC5sZW5ndGggPiBwZWckY3VyclBvcykge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgMyArIGJjW2lwICsgMV07XG4gICAgICAgICAgICAgICAgaXAgKz0gMztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDMgKyBiY1tpcCArIDFdICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSAzICsgYmNbaXAgKyAxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM10pO1xuXG4gICAgICAgICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIHBlZyRjb25zdHNbYmNbaXAgKyAxXV0ubGVuZ3RoKSA9PT0gcGVnJGNvbnN0c1tiY1tpcCArIDFdXSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gNDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICBlbmRzLnB1c2goZW5kKTtcbiAgICAgICAgICAgICAgaXBzLnB1c2goaXAgKyA0ICsgYmNbaXAgKyAyXSArIGJjW2lwICsgM10pO1xuXG4gICAgICAgICAgICAgIGlmIChpbnB1dC5zdWJzdHIocGVnJGN1cnJQb3MsIHBlZyRjb25zdHNbYmNbaXAgKyAxXV0ubGVuZ3RoKS50b0xvd2VyQ2FzZSgpID09PSBwZWckY29uc3RzW2JjW2lwICsgMV1dKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gaXAgKyA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl0gKyBiY1tpcCArIDNdO1xuICAgICAgICAgICAgICAgIGlwICs9IDQgKyBiY1tpcCArIDJdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgIGVuZHMucHVzaChlbmQpO1xuICAgICAgICAgICAgICBpcHMucHVzaChpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXSk7XG5cbiAgICAgICAgICAgICAgaWYgKHBlZyRjb25zdHNbYmNbaXAgKyAxXV0udGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IGlwICsgNCArIGJjW2lwICsgMl07XG4gICAgICAgICAgICAgICAgaXAgKz0gNDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBpcCArIDQgKyBiY1tpcCArIDJdICsgYmNbaXAgKyAzXTtcbiAgICAgICAgICAgICAgICBpcCArPSA0ICsgYmNbaXAgKyAyXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgYmNbaXAgKyAxXSkpO1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyArPSBiY1tpcCArIDFdO1xuICAgICAgICAgICAgICBpcCArPSAyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgc3RhY2sucHVzaChwZWckY29uc3RzW2JjW2lwICsgMV1dKTtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgKz0gcGVnJGNvbnN0c1tiY1tpcCArIDFdXS5sZW5ndGg7XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHBlZyRGQUlMRUQpO1xuICAgICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGVnJGZhaWwocGVnJGNvbnN0c1tiY1tpcCArIDFdXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDEgLSBiY1tpcCArIDFdXTtcbiAgICAgICAgICAgICAgaXAgKz0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHBlZyRjdXJyUG9zO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgcGFyYW1zID0gYmMuc2xpY2UoaXAgKyA0LCBpcCArIDQgKyBiY1tpcCArIDNdKTtcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJjW2lwICsgM107IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tpXSA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDEgLSBwYXJhbXNbaV1dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3RhY2suc3BsaWNlKFxuICAgICAgICAgICAgICAgIHN0YWNrLmxlbmd0aCAtIGJjW2lwICsgMl0sXG4gICAgICAgICAgICAgICAgYmNbaXAgKyAyXSxcbiAgICAgICAgICAgICAgICBwZWckY29uc3RzW2JjW2lwICsgMV1dLmFwcGx5KG51bGwsIHBhcmFtcylcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpcCArPSA0ICsgYmNbaXAgKyAzXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2gocGVnJHBhcnNlUnVsZShiY1tpcCArIDFdKSk7XG4gICAgICAgICAgICAgIGlwICs9IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICBwZWckc2lsZW50RmFpbHMrKztcbiAgICAgICAgICAgICAgaXArKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgIHBlZyRzaWxlbnRGYWlscy0tO1xuICAgICAgICAgICAgICBpcCsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcGNvZGU6IFwiICsgYmNbaXBdICsgXCIuXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlbmQgPSBlbmRzLnBvcCgpO1xuICAgICAgICAgIGlwID0gaXBzLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGFja1swXTtcbiAgICB9XG5cblxuICAgICAgaGVscGVycyA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXJzJyk7XG4gICAgICBwcmVmaXhlcyA9IHJlcXVpcmUoJy4vcHJlZml4ZXMuanNvbicpO1xuICAgICAgbWV0cmljcyA9IHJlcXVpcmUoJy4vbWV0cmljcy5qc29uJyk7XG4gICAgICBtdWx0aXBseSA9IGhlbHBlcnMubXVsdGlwbHk7XG4gICAgICB0b3Bvd2VyID0gaGVscGVycy50b3Bvd2VyO1xuICAgICAgY2xlYW51cCA9IGhlbHBlcnMuY2xlYW51cDtcbiAgICAgIGlzbWV0cmljID0gaGVscGVycy5pc21ldHJpYyhtZXRyaWNzKTtcblxuXG4gICAgcGVnJHJlc3VsdCA9IHBlZyRwYXJzZVJ1bGUocGVnJHN0YXJ0UnVsZUluZGV4KTtcblxuICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwZWckcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGVnJHJlc3VsdCAhPT0gcGVnJEZBSUxFRCAmJiBwZWckY3VyclBvcyA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICBwZWckZmFpbCh7IHR5cGU6IFwiZW5kXCIsIGRlc2NyaXB0aW9uOiBcImVuZCBvZiBpbnB1dFwiIH0pO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24obnVsbCwgcGVnJG1heEZhaWxFeHBlY3RlZCwgcGVnJG1heEZhaWxQb3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgU3ludGF4RXJyb3I6IFN5bnRheEVycm9yLFxuICAgIHBhcnNlOiAgICAgICBwYXJzZVxuICB9O1xufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIG11bHRpcGx5OiBmdW5jdGlvbiBtdWx0aXBseSh0LCBtcykge1xuICAgIGlmIChtcy5sZW5ndGggPT0gMCkgcmV0dXJuIHQ7XG5cbiAgICB2YXIgcmV0ID0gdDtcbiAgICBtcy5mb3JFYWNoKGZ1bmN0aW9uKG10ZXJtKXtcblxuICAgICAgdmFyIHNpZ24gPSAobXRlcm1bMF0gPT0gXCIuXCIgPyAxIDogLTEpO1xuICAgICAgdmFyIGIgPSBtdGVybVsxXTtcblxuICAgICAgcmV0LnZhbHVlICo9IE1hdGgucG93KGIudmFsdWUsIHNpZ24pO1xuICAgICAgT2JqZWN0LmtleXMoYi51bml0cykuZm9yRWFjaChmdW5jdGlvbih1KXtcbiAgICAgICAgcmV0LnVuaXRzW3VdID0gcmV0LnVuaXRzW3VdIHx8IDA7XG4gICAgICAgIHJldC51bml0c1t1XSA9IHJldC51bml0c1t1XSArIHNpZ24qYi51bml0c1t1XTtcbiAgICAgICAgaWYgKHJldC51bml0c1t1XSA9PSAwKXtcbiAgICAgICAgICBkZWxldGUgcmV0LnVuaXRzW3VdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgdG9wb3dlcjogZnVuY3Rpb24gdG9wb3dlcihlLCBleHApe1xuICAgIGlmICghZXhwKSB7ZXhwID0gMTt9XG4gICAgdmFyIHJldCA9IGU7XG4gICAgcmV0LnZhbHVlID0gTWF0aC5wb3cocmV0LnZhbHVlLCBleHApO1xuICAgIE9iamVjdC5rZXlzKGUudW5pdHMpLmZvckVhY2goZnVuY3Rpb24odSl7XG4gICAgICByZXQudW5pdHNbdV0gPSBlLnVuaXRzW3VdICogZXhwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICBjbGVhbnVwOiBmdW5jdGlvbiBjbGVhbnVwKGUpIHtcbiAgICBbXCIxMF5cIiwgXCIxMCpcIl0uZm9yRWFjaChmdW5jdGlvbihrKXtcbiAgICAgIGlmIChlLnVuaXRzW2tdKSB7XG4gICAgICAgIGUudmFsdWUgKj0gTWF0aC5wb3coMTAsIGUudW5pdHNba10pO1xuICAgICAgICBkZWxldGUgZS51bml0c1trXTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBlO1xuICB9LFxuXG4gIGlzbWV0cmljOiBmdW5jdGlvbihtZXRyaWNzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHUpIHtcbiAgICAgIHJldHVybiBtZXRyaWNzW09iamVjdC5rZXlzKHUudW5pdHMpWzBdXSAhPT0gdW5kZWZpbmVkO1xuICAgIH07XG4gIH1cbn1cbiIsInBhcnNlciA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVkL3VjdW0tcGFyc2VyLmpzJyk7XG5lcXVpdmFsZW50cyA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVkL2VxdWl2YWxlbnRzLmpzb24nKTtcbmhlbHBlcnMgPSByZXF1aXJlKCcuL2xpYi9oZWxwZXJzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZTogcGFyc2UsXG4gIGNhbm9uaWNhbGl6ZTogY2Fub25pY2FsaXplLFxuICBjb252ZXJ0OiBjb252ZXJ0XG59O1xuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSwgdW5pdHMpe1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IHVuaXRzID09PSB1bmRlZmluZWQpe1xuICAgIHVuaXRzID0gdmFsdWU7XG4gICAgdmFsdWUgPSAxXG4gIH1cblxuICBpZiAodW5pdHMubWF0Y2goL15cXC8vKSl7XG4gICAgdW5pdHMgPSAnMScrdW5pdHM7XG4gIH1cblxuICBpZiAodW5pdHMgPT09ICcnKSB1bml0cyA9ICcxJztcblxuICB2YXIgcmV0ID0gcGFyc2VyLnBhcnNlKHVuaXRzKTtcbiAgcmV0LnZhbHVlICo9IHZhbHVlO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBub25CYXNlVW5pdCh1KXtcbiAgcmV0dXJuIGVxdWl2YWxlbnRzW3VdICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbWFpbmluZ05vbkJhc2VVbml0cyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUudW5pdHMpLmZpbHRlcihub25CYXNlVW5pdClcbn1cblxuZnVuY3Rpb24gY2Fub25pY2FsaXplKHZhbHVlLCB1bml0cyl7XG5cbiAgdmFsdWUgPSBwYXJzZSh2YWx1ZSwgdW5pdHMpO1xuXG4gIHZhciByZW1haW5pbmcgPSByZW1haW5pbmdOb25CYXNlVW5pdHModmFsdWUpO1xuXG4gIHdoaWxlIChyZW1haW5pbmcubGVuZ3RoKSB7XG4gICAgaWYgKHJlbWFpbmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1haW5pbmcuZm9yRWFjaChmdW5jdGlvbih1KXtcbiAgICAgIHZhciBzdWIgPSBwYXJzZShlcXVpdmFsZW50c1t1XS51Y3VtKTtcbiAgICAgIHN1Yi52YWx1ZSAqPSBlcXVpdmFsZW50c1t1XS52YWx1ZTtcbiAgICAgIHN1YiA9IGhlbHBlcnMudG9wb3dlcihzdWIsIHZhbHVlLnVuaXRzW3VdKTtcbiAgICAgIHZhbHVlID0gaGVscGVycy5tdWx0aXBseSh2YWx1ZSwgW1snLicsIHN1Yl1dKTtcbiAgICAgIGRlbGV0ZSB2YWx1ZS51bml0c1t1XTtcbiAgICB9KTtcblxuICAgIHJlbWFpbmluZyA9IHJlbWFpbmluZ05vbkJhc2VVbml0cyh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNvbmZvcm1hbnQoYSwgYil7XG4gIHZhciByZXQgPSB0cnVlO1xuICBPYmplY3Qua2V5cyhhLnVuaXRzKVxuICAuY29uY2F0KE9iamVjdC5rZXlzKGIudW5pdHMpKVxuICAuZm9yRWFjaChmdW5jdGlvbihrKXtcbiAgICBpZiAoYS51bml0c1trXSAhPT0gYi51bml0c1trXSkge1xuICAgICAgcmV0ID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnQoZnJvbVZhbHVlLCBmcm9tVW5pdHMsIHRvVW5pdHMpe1xuIGZyb21jID0gY2Fub25pY2FsaXplKGZyb21WYWx1ZSwgZnJvbVVuaXRzKTtcbiB0b2MgPSBjYW5vbmljYWxpemUodG9Vbml0cyk7XG5cbiBpZiAoIWNvbmZvcm1hbnQoZnJvbWMsIHRvYykpe1xuICAgdGhyb3cgXCJOb24tY29uZm9ybWFudCB1bml0czsgY2FuJ3QgY29udmVydCBmcm9tIFwiICsgZnJvbVVuaXRzICsgXCIgdG8gXCIgKyB0b1VuaXRzIDtcbiB9XG5cbiByZXR1cm4gZnJvbWMudmFsdWUgLyB0b2MudmFsdWU7XG5cbn1cbiJdfQ==
