'use strict';

var MongoClient = require('mongodb').MongoClient;
var database;

function connect(config, callback) {
  var url;

  if( config.get('docker') ) {
    url = 'mongodb://mongo:27017/'+config.get('mongo').database;
  } else {
    url = config.get('mongo').url+config.get('mongo').database;
  }

  MongoClient.connect(url, function(err, db){
    if( err ) {
      return callback(err);
    }

    database = db;
    callback(null, db);
  });
}




module.exports = {
  connect : connect,
  get : function() {
    return database;
  },
  ensureIndexes : function() {
    require('./ensureIndexes')(database);
  }
};
