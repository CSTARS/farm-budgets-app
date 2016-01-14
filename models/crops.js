'use strict';

var db = require('../lib/mongo').get();
var utils = require('../lib/modelUtils');
var collection = db.collection('budget');

module.exports = function() {

  return {
      name: 'Crop',
      findForLocality : findForLocality
  };
};


function findForLocality(query, callback) {
  collection.distinct('commodity', query ,callback);
}
