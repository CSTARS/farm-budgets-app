'use strict';

var collection = global.db.collection('history');

module.exports = function() {
  return {
      name: 'History',
      get : get,
      all : all
  };
};

function all(id, callback) {
  collection
    .find({id: id},{_id: 0})
    .sort({datetime: -1})
    .toArray(callback);
}

function get(id, callback) {
  collection
    .find({id: id},{_id: 0, diff: 0,id:0,type:0})
    .sort({datetime: -1})
    .toArray(callback);
}
