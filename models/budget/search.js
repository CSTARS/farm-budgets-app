'use strict';

var collection, loadReference;

function search(query, start, stop, includeFilters, callback) {

  query.deleted = {$ne: true};
  var q = {
    $and : [
      {$or : [
        {fixed : {'$exists' : false}},
        {fixed : false},
      ]},
      query
    ]
  };

  searchFilters(q, includeFilters, function(err, filters){
    if( err ) {
      return callback(err);
    }

    var cursor = collection.find(
      q,
      {
        _id: 0,
        id:1,
        'farm.name':1,
        'commodity':1,
        'name':1,
        'authority':1,
        'locality':1,
        score: {
          $meta: 'textScore'
        }
      });
    cursor.count(function(err, count){
      cursor.sort({
        score: { $meta: 'textScore' }
      })
      .skip(start)
      .limit(start-stop)
      .toArray(function(err, results){
        if( err ) {
          return callback(err);
        }

        var response = {
          total : count,
          start : start,
          stop : count < stop ? count : stop,
          results : results,
          filters : filters,
        };
        callback(null, response);
      });
    });
  });
}

function loadReferences() {
  
}

function searchFilters(q, includeFilters, callback) {
  if( !includeFilters ) {
    return callback(null, {});
  }

  collection.distinct('commodity', q, function(err, commodityFilters){
    if( err ) {
      return callback(err);
    }

    collection.distinct('locality', q, function(err, localityFilters){
      if( err ) {
        return callback(err);
      }

      collection.distinct('authority', q, function(err, authorityFilters){
        if( err ) {
          return callback(err);
        }

        callback(null,{
          authority : authorityFilters,
          locality : localityFilters,
          commodity: commodityFilters
        });
      });
    });
  });
}

module.exports = function(co, lr) {
  collection = co;
  loadReference = loadReference;
  return search;
};
