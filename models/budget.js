'use strict';

var utils = require('../lib/modelUtils');
var authorityModel = require('./authority');
var materialModel = require('./materials');
var uuid = require('node-uuid');
var async = require('async');

var collection = global.db.collection('budget');
var materialCollection = global.db.collection('material');

authorityModel = new authorityModel();
materialModel = new materialModel();

module.exports = function() {
  return {
      name: 'Budget',
      find: find,
      save: save,
      get : get
  };
};


function save(budget, callback) {
  if( !budget ) {
    return callback('No budget provided');
  }

  utils.validate(budget, authorityModel, function(err){
    if( err ) {
      return callback(err);
    }

    // set guid, might be useful, we will see
    if( !budget.id ) {
      budget.id = uuid.v4();
    }

    // clean app data from budget
    var materialIds = cleanBudget(budget);

    // validate material id's
    validateMaterials(materialIds, function(err) {
      if( err ) {
        return callback('Invalid material id(s): '+JSON.stringify(err));
      }

      budget.materialIds = materialIds;

      // update
      collection.update({id: budget.id}, budget, {upsert: true}, callback);
    });

  });
}

function validateMaterials(ids, callback) {
  var hasError = false;
  var invalids = [];

  async.eachSeries(
    ids,
    function(id, next) {
      if( hasError ) {
        return next();
      }

      if( id === null || id === undefined ) {
        hasError = true;
        invalids.push(id);
        return next();
      }

      materialModel.get(id, function(err, material){
        if( err ) {
          invalids.push(id);
          hasError = true;
        } else if( !material ) {
          invalids.push(id);
          hasError = true;
        }

        next();
      });
    },
    function(err) {
      if( hasError ) {
        callback(invalids);
      } else {
        callback();
      }
    }
  );
}

function cleanBudget(budget) {
  var ids = {};

  delete budget.classes;

  if( budget.materials ) {
    for( var i = 0; i < budget.materials.length; i++ ) {
      ids[budget.materials[i].id] = 1;
    }
    delete budget.materials;
  }

  if( !budget.operations ) {
    budget.operations = [];
  }

  budget.operations.forEach(function(operation){
    delete operation.error;

    if( !operation.materials ) {
      operation.materials = [];
    }

    operation.materials.forEach(function(material){
      delete material.error;
      ids[material.id] = 1;
    });
  });

  return Object.keys(ids);
}

function get(id, callback) {
  collection.findOne({id: id}, {_id: 0}, function(err, result){
    if( err ) {
      return callback(err);
    }
    if( !result ) {
      return callback('Invalid budget id');
    }

    if( !result.operations ) {
      return callback(null, result);
    }

    materialCollection
      .find({id : {'$in': result.materialIds}}, {_id: 0})
      .toArray(function(err, materials){
        if( err ) {
          return callback(err);
        }

        result.materials = materials;
        delete result.materialIds;
        callback(null, result);
      });
  });
}

function find(query, callback) {
  var q = [];
  if( query !== '' ) {
    q = utils.prepareQuery(query);
  }

  query = {};
  if( q.length > 0 ) {
    query.$and = q;
  }

  collection
    .find(query, {operations: 0, materialIds: 0})
    .limit(20)
    .toArray(callback);
}
