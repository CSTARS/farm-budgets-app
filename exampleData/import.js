'use strict';

var connect = require('../lib/cmd/connect');
var async = require('async');
var fs = require('fs');
var path = require('path');
var budgetCollection, materialCollection, historyCollection;
var budgets = ['alfalfa.json', 'poplar.json'];
var materialModel, budgetModel;
var fileData = [];
var user = 'jrmerz';
var database;

connect(function(err, db){
  if( err ) {
    console.log(err);
    return;
  }
  global.db = db;
  database = db;
  budgetCollection = db.collection('budget');
  materialCollection = db.collection('material');
  historyCollection = db.collection('history');

  materialModel = require('../models/materials')();
  budgetModel = require('../models/budget')();

  run();
});

function run() {
  async.eachSeries(budgets, function(file, next){
    importData(file, next);
  }, function(){
    database.close();
  });
}

function importData(file, next) {
  var data = require('./'+file);

  var budget = data.budget;
  if( budget.farm.commodity ) {
    budget.commodity = budget.farm.commodity;
    delete budget.farm.commodity;
  }
  if( budget.farm.farm ) {
    budget.farm.name = budget.farm.farm;
    delete budget.farm.farm;
  }
  if( budget.farm.unit ) {
    budget.farm.units = budget.farm.unit;
    delete budget.farm.unit;
  }

  async.eachSeries(data.materials,
    function(material, next) {
      update(materialCollection, materialModel, material, next);
    },
    function() {
      update(budgetCollection, budgetModel, budget, next);
    }
  );
}

function update(collection, model, object, callback) {
  historyCollection.remove({id: object.id}, function(err){
    collection.remove({id: object.id}, function(err){
      if( err ) {
        console.log(err);
        return callback();
      }

      model.save(object, user, function(err){
        if( err ) {
          console.log(err);
        }
        callback();
      });
    });
  });
}
