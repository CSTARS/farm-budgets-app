'use strict';

var uuid = require('node-uuid');
var authorityModel = require('./authority');
var utils = require('../lib/modelUtils');
var init = true;

var collection;
// units can be an empty string, just not undefined or null
var required = ['price', 'units'];

module.exports = function() {
  if( init ) {
    collection = global.db.collection('material');
    authorityModel = new authorityModel();
    init = false;
  }

  return {
      name: 'Material',
      find : find,
      save : save,
      get : get,
      hasRequired : hasRequired
  };
};

function get(id, callback){
  collection.findOne({id: id}, callback);
}

function save(material, callback) {
  if( !material ) {
    return callback('No material provided');
  }

  for( var i = 0; i < required.length; i++ ) {
    if( material[required[i]] === undefined || material[required[i]] === null ) {
      return callback(required[i]+' is required');
    }
  }

  utils.validate(material, authorityModel, function(err){
    if( err ) {
      return callback(err);
    }

    // remove common attachments from app
    cleanMaterial(material);


    // set guid, might be useful, we will see
    if( !material.id ) {
      material.id = uuid.v4();
    }

    // update
    collection.update({id: material.id}, material, {upsert: true}, callback);
  });
}


function find(query, callback) {
  var q = {
    $and : [
      {name : {'$not' : new RegExp('--')}},
      query
    ]
  };

  collection.find(
    q,
    {
      _id: 0,
      score: {
        $meta: 'textScore'
      }
    }).sort({ score: { $meta: 'textScore' } }).limit(20).toArray(callback);
}

// given a complex material id.  Does the same authority have the materials
// in the same location
function hasRequired(id, callback) {
  get(id, function(err, material){
    if( err ) {
      return callback(err);
    }

    if( !material ) {
      return callback('Invalid material id');
    }

    if( !material.materials ) {
      return callback(null, {});
    }

    var localityQuery = [];
    for( var i = 0; i < material.locality.length; i++ ) {
      localityQuery.push({
        locality : material.locality[i]
      });
    }

    var query = {
      $or : []
    };

    var checklist = {};
    for( var key in material.materials ) {
      checklist[key] = false;
      query.$or.push({
        name : key,
        authority : material.authority,
        $and : localityQuery
      });
    }

    collection
      .find(query, {name: 1})
      .toArray(function(err, results){
        if( err ) {
          return callback(err);
        }

        for( var i = 0; i < results.length; i++ ) {
          checklist[results[i].name] = true;
        }

        callback(null, checklist);
      });
  });
}

function cleanMaterial(material) {
  delete material.error;

  if( !material.materials ) {
    material.type = 'simple';
    return;
  }

  material.type = 'complex';
  delete material.price;

  for( var key in material.materials ) {
    delete material.materials[key].error;
    delete material.materials[key].name;
    delete material.materials[key].originalAmount;
    delete material.materials[key].price;
  }
}
