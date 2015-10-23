'use strict';

var extend = require('extend');

var schema = {
  budget : {
    authority : 'string',
    locality : 'array',
    name : 'string',
    id : 'string',

    farm : {
      commodity : 'string',
      farm : 'string',
      size : 'string',
      unit : 'string'
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
    class : 'string',
    id : 'string',
    locality : 'array',
    name : 'string',
    price : 'number',
    type : 'string',
    units : 'string'
  }
};

var originalState = {};

// set the initial state of a budget
function init(budget) {
  originalState = extend(true, {}, budget);
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

  for( var i = 0; i < budget.materials.length; i++ ) {
    if( budget.materials[i].id === undefined ) {
      result.materials.push({
        name : budget.materials[i].name,
        isNew : true,
        access : true,
        changes : true
      });
      continue;
    }

    var originalMaterial = getById(budget.materials[i].id);
    result.materials.push({
      changes : hasChanges(schema.material, originalMaterial, budget.materials[i]),
      access : (user.authorities.indexOf(originalMaterial.authority) > -1) ? true : false,
      original : originalMaterial,
      id : budget.materials[i].id
    });
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
  for( var key in object ) {
    if( !schema[key] ) {
      continue;
    }
    var param = schema[key];

    if( param === 'string' || param === 'number') {
      if( original[key] !== object[key] ) {
        return true;
      }
    } else if ( Array.isArray(param) ) {
      if( keyDiff(key, original, object) ) {
        return true;
      } else if( original[key].length !== object[key].length ) {
        return true;
      }

      for( var i = 0; i < original.length; i++ ) {
        if( hasChanges(param[0], original[key], object[key]) ) {
          return true;
        }
      }

    } else if ( typeof param === 'object' ) {
      if( keyDiff(key, original, object) ) {
        return true;
      }

      return hasChanges(param, original[key], object[key]);
    }
  }

  return false;
}

function keyDiff(key, original, object) {
  if( original[key] ||  object[key] ) {
    if( !original[key] ) {
      return true;
    } else if( !object[key] ) {
      return true;
    }
  }
  return false;
}

module.exports = {
  init : init,
  check : check
};
