'use strict';

var db = require('../lib/mongo').get();
var collections = ['material', 'authority', 'budget', 'history', 'users'];
var async = require('async');

module.exports = function() {
  return {
      name: 'Authority',
      clearTesting : clearTesting
  };
};

function clearTesting(callback) {
  var resp = {};

  async.eachSeries(
    collections,
    function(name, next) {
      var collection = db.collection(name);
      collection.remove({testing:true}, function(err, result){
        if( err ) {
          resp[name] = err;
        } else {
          resp[name] = result;
        }

        next();
      });
    },
    function(err) {
      callback(err, resp);
    }
  );
}
