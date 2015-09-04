'use strict';

var path = require('path');
var confit = require('confit');
var MongoClient = require('mongodb').MongoClient;

module.exports = function(callback) {
  var basedir = path.join(__dirname, '..', '..', 'config');

  confit(basedir).create(function (err, config) {
    try {
      if( err ) {
        return callback(err);
      }

      MongoClient.connect(config.get('mongo').url, callback);
    } catch(e) {
      callback(e);
    }
  });
};
