'use strict';

var uuid = require('node-uuid');
var authorityModel = require('./authority');
var utils = require('../lib/modelUtils');
var init = true;

var schema = require('../lib/shared/save/schema')();
var strip = require('../lib/shared/save/strip');
var history = require('mongo-object-history');

var collection;
// units can be an empty string, just not undefined or null
var required = ['price', 'units', 'type'];

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
  collection.findOne({id: id}, {_id: 0}, callback);
}

function save(material, username, callback) {
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
    history.track('material', material, username, function(err, result){
      if( err ) {
        return callback(err);
      }

      collection.update(
        {id: material.id},
        material,
        {upsert: true},
        function(err, result) {
          if( err ) {
            return callback(err);
          }
          callback(null, result);
        }
      );
    });
  });
}


function find(query, callback) {
  var q = {
    $and : [
      {$or : [
        {fixed : {'$exists' : false}},
        {fixed : false},
      ]},
      query
    ]
  };

  // by default, don't search children, unless specifically asked for
  var isChildQuery = false;
  if( query && query.$text && query.$text.$search ) {
    if( query.$text.$search.match(/--/) ) {
      isChildQuery = true;
    }
  }
  if( !isChildQuery ) {
    q.$and.push({name : {'$not' : new RegExp('--')}});
  }

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
      .find(query, {name: 1, id: 1})
      .toArray(function(err, results){
        if( err ) {
          return callback(err);
        }

        for( var i = 0; i < results.length; i++ ) {
          checklist[results[i].name] = results[i].id;
        }

        callback(null, checklist);
      });
  });
}

function cleanMaterial(material) {
  if( material.type === 'complex' ) {
    strip(schema.complexMaterial, material);
  } else {
    strip(schema.material, material);
  }
}
