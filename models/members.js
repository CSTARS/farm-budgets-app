'use strict';

var db = require('../lib/mongo').get();
var extend = require('extend');

var usersCollection = db.collection('users');

module.exports = function() {

  return {
    search : search
  };
};

function search(query, callback) {
  var re;
  try {
    re = new RegExp(query, 'i');
  } catch(e) {
    return callback(e);
  }

  query = {
    $or : [
      {'gitkit.email' : re},
      {'gitkit.display_name' : re}
    ]
  };

  usersCollection
    .find(query,{'gitkit.email': 1, _id: 0, 'gitkit.display_name': 1})
    .limit(5)
    .toArray(function(err, results){
      if( err ) {
        return callback(err);
      }

      results = results.map(function(user){
        return {
          email : user.gitkit.email || '',
          display_name : user.gitkit.display_name || ''
        };
      });

      callback(null, results);
  });
}
