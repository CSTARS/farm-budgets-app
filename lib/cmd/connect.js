'use strict';

var path = require('path');
var confit = require('confit');
var authStack = require('express-auth');
var history = require('mongo-object-history');
var MongoClient = require('mongodb').MongoClient;

module.exports = function(callback) {
  var basedir = path.join(__dirname, '..', '..', 'config');

  confit(basedir).create(function (err, config) {
    try {
      if( err ) {
        return callback(err);
      }



      MongoClient.connect(config.get('mongo').url, function(err, db){
        var authSetup = {
          db : db,
          config : config.get('auth'),
        };

        setupHistoryTracking(db);
        global.auth = authStack.init(authSetup);

        callback(err, db);
      });
    } catch(e) {
      callback(e);
    }
  });
};

function setupHistoryTracking(db) {
  var budgetCollection = db.collection('budget');
  var materialCollection = db.collection('material');
  var historyCollection = db.collection('history');

  var config = {
    get : {
      budget : function(id, callback) {
        budgetCollection.findOne({id: id}, callback);
      },
      material : function(id, callback) {
        materialCollection.findOne({id: id}, callback);
      }
    },
    collection : historyCollection
  };

  history.init(config);
}
