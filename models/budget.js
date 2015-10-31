'use strict';

var schema = require('../lib/shared/save/schema')();
var strip = require('../lib/shared/save/strip');
var utils = require('../lib/modelUtils');
var authorityModel = require('./authority');
var materialModel = require('./materials');
var uuid = require('node-uuid');
var async = require('async');

var collection = global.db.collection('budget');
var materialCollection = global.db.collection('material');
var history = require('mongo-object-history');

authorityModel = new authorityModel();
materialModel = new materialModel();

module.exports = function() {
  return {
      name: 'Budget',
      find: find,
      findCount : findCount,
      save: save,
      get : get
  };
};


function save(budget, username, callback) {
  if( !budget ) {
    return callback('No budget provided');
  }

  utils.validate(budget, username, authorityModel, function(err){
    if( err ) {
      return callback(err);
    }

    // set guid, might be useful, we will see
    if( !budget.id ) {
      budget.id = uuid.v4();
    }

    if( budget.farm && budget.farm.commodity ) {
      budget.farm.commodity = budget.farm.commodity.trim().toLowerCase();
    }

    // clean app data from budget
    cleanBudget(budget);

    // validate material id's
    if( !budget.materialIds ) {
      budget.materialIds = [];
    }
    validateMaterials(budget.materialIds, function(err) {
      if( err ) {
        return callback('Invalid material id(s): '+JSON.stringify(err));
      }

      history.track('budget', budget, username, function(err, result){
        if( err ) {
          return callback(err);
        }

        // update
        collection.update({id: budget.id}, budget, {upsert: true}, function(error, result) {
          if( err ) {
            return callback(err);
          }
          callback(null, budget);
        });
      });
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
  return strip(schema.budget, budget);
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
      result.operations = [];
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

function findCount(query, callback) {
  collection.count(query, function(err, resp){
    if( err ) {
      return callback(err);
    }
    callback(null, {count: resp});
  });
}

function find(query, callback) {
  collection
    .find(query, {operations: 0, materialIds: 0})
    .limit(20)
    .toArray(callback);
}
