'use strict';

var connect = require('../lib/mongo');
var async = require('async');
var fs = require('fs');
var path = require('path');
var budgetCollection, materialCollection;
var budgets = ['97ba17c3-9b8b-4b5b-94db-60c1b4b8fcfe', '0113c437-a889-449b-a000-e0e6478f52c6'];
var fileData = [];
var database;

connect(function(err, db){
  if( err ) {
    console.log(err);
    return;
  }
  database = db;
  budgetCollection = db.collection('budget');
  materialCollection = db.collection('material');

  run();
});


function run(){
  async.eachSeries(budgets,
    function(id, next) {
      prepareBudget(id, next);
    },
    function(){
      for( var i = 0; i < fileData.length; i++ ) {
        fs.writeFileSync(path.join(__dirname, fileData[i].budget.farm.commodity+'.json'), JSON.stringify(fileData[i], '  ', '  '));
      }
      database.close();
    }
  );
}

function prepareBudget(id, next) {
  budgetCollection.findOne({id: id},{_id: 0}, function(err, budget){
    if( err ) {
      console.log(err);
      return next();
    }

    var data = {
      budget: budget,
      materials : []
    };

    materialCollection
    .find({id : {$in: budget.materialIds}},{_id: 0})
    .toArray(function(err, resp){
      if( err ) {
        console.log(err);
        return next();
      }

      data.materials = resp;

      fileData.push(data);
      next();
    });

  });
}
