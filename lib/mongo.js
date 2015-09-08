'use strict';

var MongoClient = require('mongodb').MongoClient;


module.exports.connect = function(config, callback) {
  MongoClient.connect(config.get('mongo').url, function(err, db){
    if( err ) {
      return callback(err);
    }

    global.db = db;

    callback(null, db);
  });
};
