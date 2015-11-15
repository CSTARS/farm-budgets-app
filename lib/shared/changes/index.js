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

function setOriginal(budget, materials) {
  console.log('## setting data');
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
    if( !original.materials[materials[i].id] ) {
      differences.push({
        id : materials[i].id,
        type : materials[i].type,
        diff : diff({}, materials[i]) || []
      });
    } else {
      differences.push({
        id : materials[i].id,
        type : materials[i].type,
        diff : diff(original.materials[materials[i].id], materials[i]) || []
      });
    }
  }

  // remove things we don't care about
  for( i = differences.length-1; i >= 0; i-- ) {
    ignoreAttributes(differences[i].diff, differences[i].type === 'complex' ? checkList.complexMaterial : checkList.simpleMaterial);
    if( differences[i].diff.length === 0 ) {
      differences.splice(i, 1);
    }
  }

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
  console.log('## checking for changes');
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
  _checkBudget(budget);
  _checkMaterials(materials);

  if( differenceState.budget.length > 0 || differenceState.materials.length > 0 ) {
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
  for( var key in schema ) {
    if( typeof schema[key] === 'string' ) {
      list.push(new RegExp('^'+path+(path.length > 0 ? ',' : '')+key+'$'));
      continue;
    }

    if( Array.isArray(schema[key]) ) {
      if( schema[key][0]._object_array_ ) {
        prepSchema(path+',.*,'+key, schema[key][0], list);
      } else {
        prepSchema(path+','+key, schema[key][0], list);
      }
    } else if( typeof schema[key] === 'object' ) {
      prepSchema(path+','+key, schema[key], list);
    }
  }
}

function on(event, listener){
  events.on(event, listener);
}

function removeListener(event, listener){
  events.removeListener(event, listener);
}

module.exports = {
  setOriginal : setOriginal,
  checkBudget : checkBudget,
  checkMaterials : checkMaterials,
  forceCheckAll : forceCheckAll,
  getDifferences : getDifferences,
  on : on,
  removeListener : removeListener
};

 prep(require('../save/schema')());
