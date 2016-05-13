'use strict';

var collection, loadReference;

function search(query, start, stop, callback) {
  query.deleted = {$ne: true};


  var cursor = collection.find(
    query,
    {
      _id: 0,
      id:1,
      'farm.name':1,
      'commodity':1,
      'name':1,
      'description':1,
      'authority':1,
      'locality':1,
      draft : 1,
      'reference' : 1,
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
        results : results
      };
      callback(null, response);
    });
  });
}

module.exports = function(co, lr) {
  collection = co;
  loadReference = loadReference;
  return search;
};
