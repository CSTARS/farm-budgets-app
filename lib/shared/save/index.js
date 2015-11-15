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
