'use strict';

var utils = require('../lib/modelUtils');
var collection = global.db.collection('budget');

module.exports = function() {

  return {
      name: 'Crop',
      findForLocality : findForLocality
  };
};


function findForLocality(query, callback) {
  collection.distinct('commodity', query ,callback);
}
