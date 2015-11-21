'use strict';

var dataList = [
  {
    authority : 'UCD Ext',
    locality : ['California', 'northern'],
    name : 'qjh/alfalfa',
    moduleName : 'qjh-alfalfa'
  },
  {
    authority : 'AHB',
    locality : ['California', 'clarksburg', '95612'],
    name : 'qjh/poplar',
    moduleName : 'qjh-poplar'
  }
];

var data = require('../../lib/shared');
var connect = require('../../lib/cmd/connect');
var async = require('async');

var materialModel;
var budgetModel;

connect(function(err, db){
  if( err ) {
    error(err);
  }
  global.db = db;

  materialModel = require('../../models/materials');
  budgetModel = require('../../models/budget');

  run();
});

var authority, locality, name, moduleName;

function run() {

  materialModel = new materialModel();
  budgetModel = new budgetModel();

  async.eachSeries(dataList, function(item, next){
    authority = item.authority;
    locality = item.locality;
    name = item.name;
    moduleName = item.moduleName;
    var budget = require('../../lib/shared/config/app/'+moduleName);

    insertMaterials(budget, function(err, nameLookup) {
      if( err ) {
        console.log(err);
        return next();
      }

      setMaterialIds(budget, nameLookup);

      insertBudget(budget, next);
    });

  }, function(err){
    console.log('done');
    global.db.close();
  });
}

function insertBudget(budget, next) {
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

      if( err ) {
        console.log(err);
        return next();
      }

      console.log('success');
      next();
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

  var materials = [];
  for( var i = 0; i < budget.materials.length; i++ ) {
    materials.push(budget.materials);
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
