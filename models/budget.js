'use strict';

var utils = require('../lib/modelUtils');
var authorityModel = require('./authority');
var materialModel = require('./materials');
var uuid = require('node-uuid');
var async = require('async');

var collection, init = true;

module.exports = function() {
  if( init ) {
    collection = global.db.collection('budget');
    authorityModel = new authorityModel();
    materialModel = new materialModel();
    init = false;
  }

  return {
      name: 'Budget',
      find: find,
      save: save
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
  var ids = [];

  delete budget.classes;
  delete budget.materials;

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
      ids.push(material.id);
    });
  });

  return ids;
}

function find(query, callback) {
  var q = utils.prepareQuery(query);

  collection.find({'$and': q}).limit(20).toArray(callback);
}
