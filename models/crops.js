'use strict';

var utils = require('../lib/modelUtils');
var collection = global.db.collection('budget');

module.exports = function() {

  return {
      name: 'Crop',
      findForLocality : findForLocality
  };
};


function findForLocality(localities, callback) {
  if( !Array.isArray(localities) ) {
    localities = [localities];
  }
  for( var i = 0; i < localities.length; i++ ) {
    localities[i] = {locality: localities[i].toLowerCase().trim()};
  }

  var query = {};
  if( localities.length > 0 ) {
    query.$and = localities;
  }

  collection.distinct('farm.commodity', query ,callback);
}
