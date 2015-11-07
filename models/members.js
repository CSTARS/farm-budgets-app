'use strict';

var extend = require('extend');

var accountsCollection = global.db.collection('accounts');
var usersCollection = global.db.collection('users');

module.exports = function() {

  return {
    search : search
  };
};

function search(query, callback) {
  try {
    query = new RegExp(query, 'i');
  } catch(e) {
    return callback(e);
  }

  searchUsers(query, function(err, results1){
    if( err ) {
      return callback(err);
    }

    searchAccounts(query, function(err, results2){
      if( err ) {
        return callback(err);
      }

      mergeResults(results1, results2, callback);
    });
  });
}

function searchUsers(query, callback) {
  accountsCollection
    .find({username: query},{username: 1, _id: 0, id: 1})
    .limit(5)
    .toArray(function(err, results){
      if( err ) {
        return callback(err);
      }
      if( results.length === 0 ) {
        return callback(null, results);
      }

      var ids = [];
      for( var i = 0; i < results.length; i++ ) {
        ids.push(results[i].id);
      }

      usersCollection
        .find({id : {'$in' : ids}}, {_id: 0, id: 1, name: 1})
        .toArray(function(err, users){
          if( err ) {
            callback(err);
          }

          results = merge(results, users);
          callback(null, results);
        });
  });
}

function searchAccounts(query, callback) {
  usersCollection
    .find({name: query},{name: 1, _id: 0, id: 1})
    .limit(5)
    .toArray(function(err, results){
      if( err ) {
        return callback(err);
      }
      if( results.length === 0 ) {
        return callback(null, results);
      }

      var ids = [];
      for( var i = 0; i < results.length; i++ ) {
        ids.push(results[i].id);
      }

      accountsCollection
        .find({id : {'$in' : ids}},{_id: 0, id: 1, username: 1})
        .toArray(function(err, accounts){
          if( err ) {
            callback(err);
          }

          results = merge(results, accounts);
          callback(null, results);
        });
  });
}

function mergeResults(results1, results2, callback) {
  var tmp = {};
  for( var i = 0; i < results1.length; i++ ) {
    tmp[results1[i].id] = results1[i];
  }
  for( var i = 0; i < results2.length; i++ ) {
    tmp[results2[i].id] = results2[i];
  }

  var results = [];
  for( var key in tmp ) {
    delete tmp[key].id;
    results.push(tmp[key]);
  }

  callback(null, results);
}

function merge(set1, set2) {
  for( var i = 0; i < set1.length; i++ ) {
    for( var j = 0; j < set2.length; j++ ) {
      if( set1[i].id === set2[j].id ) {
        set1[i] = extend(true, set1[i], set2[j]);
        break;
      }
    }
  }

  return set1;
}
