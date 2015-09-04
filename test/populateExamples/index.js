'use strict';

/*
var authority = 'UCD Ext';
var locality = ['California', 'northern'];
var name = 'qjh/alfalfa';
*/
var authority = 'AHB';
var locality = ['California', 'clarksburg', '95612'];
var name = 'qjh/poplar';

var data = require('../../lib/shared');
var connect = require('../../lib/cmd/connect');
var async = require('async');

var materialModel = require('../../models/materials');
var budgetModel = require('../../models/budget');

connect(function(err, db){
  if( err ) {
    error(err);
  }

  global.db = db;
  run();
});

function run() {
  materialModel = new materialModel();
  budgetModel = new budgetModel();

  var budget = data.examples.app[name];

  insertMaterials(budget, function(err, nameLookup) {
    if( err ) {
      return console.log(err);
    }

    setMaterialIds(budget, nameLookup);

    insertBudget(budget);

  });
}

function insertBudget(budget) {
  budget.authority = authority;
  budget.name = name;
  budget.locality = locality;

  var search = {
    locality : locality,
    name : name,
    authority : authority
  };

  budgetModel.find(search, function(err, result){
    if( err ) {
      return;
    }

    if( result.length > 0 ) {
      budget.id = result[0].id;
      console.log('UPDATING: '+budget.name);
    } else {
      console.log('INSERTING: '+budget.name);
    }

    budgetModel.save(budget, function(err){
      global.db.close();
      if( err ) {
        return console.log(err);
      }

      console.log('success');
    });
  });
}

function setMaterialIds(budget, nameLookup) {
  if( !budget.operations ) {
    budget.operations = [];
  }

  budget.operations.forEach(function(operation){
    if( !operation.materials ) {
      operation.materials = [];
    }

    operation.materials.forEach(function(material){
      material.id = nameLookup[material.name];
    });
  });
}

function insertMaterials(budget, callback) {
  var nameLookup = {};

  for( var i = 0; i < budget.materials.length; i++ ) {
    budget.materials[i].authority = authority;
    budget.materials[i].locality = locality;
  }

  async.eachSeries(
    budget.materials,
    function(material, next) {

      var search = {
        locality : material.locality,
        name : material.name,
        authority : material.authority
      };

      materialModel.find(search, function(err, result){
        if( err ) {
          console.log(err);
          return next();
        }

        if( result.length > 0 ) {
          material.id = result[0].id;
          console.log('UPDATING: '+material.name);
        } else {
          console.log('INSERTING: '+material.name);
        }

        materialModel.save(material, function(err, result){
          if( err ) {
            console.log(err);
          }

          nameLookup[material.name] = material.id;
          next();
        });
      });
    },
    function() {
      callback(null, nameLookup);
    }
  );
}

function error(msg) {
  console.log(msg);

  if( global.db ) {
    try {
      global.db.close();
    } catch(e) {}
  }

  process.exit(-1);
}
