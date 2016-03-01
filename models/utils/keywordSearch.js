'use strict';

module.exports = function(collection, query, callback) {
  query = new RegExp('^'+query+'.*', 'i');

  collection.find({
      'value.value' : query
    })
    .sort({'value.count':1})
    .limit(20)
    .toArray(function(err, resp){
      if( err ) {
        return callback(err);
      }

      callback(err, resp.map(getValues));
    });
};

function getValues(item) {
  return item.value;
}
