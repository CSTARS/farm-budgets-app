'use strict';

var utils = require('../lib/modelUtils');

var budgetCollection = global.db.collection('budget');
var materialCollection = global.db.collection('material');


module.exports = function() {
  return {
    suggestions : suggestions
  };
};

function suggestions(type, locality, callback) {
  var query = {
    '$or' : []
  };
  for( var i = 0; i < locality.length; i++ ) {
    query.$or.push({locality: locality[i].trim().toLowerCase()});
  }

  var collection;
  if( type === 'material' ){
    collection = materialCollection;
  } else {
    collection = budgetCollection;
  }

  collection
    .find(query, {locality: 1})
    .limit(1000)
    .toArray(function(err, result){
      if( err ) {
        return callback(err);
      }
      createSuggestResult(type, result, locality, callback);
    });
}

function createSuggestResult(type, result, locality, callback) {
  var results = {}, i, j;
  for( i = 0; i < result.length; i++ ) {
    for( j = 0; j < result[i].locality.length; j++ ) {
      if( locality.indexOf(result[i].locality[j]) > -1 ) {
        continue;
      }
      results[result[i].locality[j]] = 1;
    }
  }

  results = {
    type : type,
    suggestions : Object.keys(results)
  };
  callback(null, results);
}
