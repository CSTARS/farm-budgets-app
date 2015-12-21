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
    //delete original.materialIds[material.id];
    return;
  }

  original.materials[material.id] = material;
  //original.materialIds[material.id] = 1;
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
      var o = original.materials[materials[i].id];
      if( o.deleted && !materials[i].deleted ) {
        materials[i].deleted = true;
      } else if( !o.deleted && materials[i].deleted ) {
        o.deleted = true;
      }

      differences.push({
        id : materials[i].id,
        type : materials[i].type,
        updated : true,
        diff : diff(o, materials[i]) || []
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
