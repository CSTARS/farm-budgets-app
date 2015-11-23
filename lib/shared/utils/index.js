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
