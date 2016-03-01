'use strict';

var uuid = require('node-uuid');
var authorityModel = require('./authority');
var utils = require('../lib/modelUtils');
var db = require('../lib/mongo').get();
var sdk = require('../lib/sdk');
var history = require('mongo-object-history');
var async = require('async');
var extend = require('extend');
var mapreduceAttributes = require('../lib/mapreduceAttributes');
var keywordSearch = require('./utils/keywordSearch');

var init = true;
var schema = sdk.schema();
var strip = sdk.utils.strip;

var materialGroupCollection = 'materialNameGrouping';
var collection, suggestCollection, keywordCollection;
// units can be an empty string, just not undefined or null
var required = ['price', 'units', 'type'];

module.exports = function() {
  if( init ) {
    collection = db.collection('material');
    suggestCollection = db.collection(materialGroupCollection);
    keywordCollection = db.collection('materialKeywords');
    authorityModel = new authorityModel();
    init = false;
  }

  return {
      name: 'Material',
      find : find,
      search : search,
      keywordSearch : function(query, callback) {
        keywordSearch(keywordCollection, query, callback);
      },
      save : save,
      get : get,
      delete : remove,
      nameSuggest : nameSuggest,
      mapReduceAll : mapReduceAll,
      hasRequired : hasRequired,
      getWithRequired : getWithRequired
  };
};

function get(id, callback){
  collection.findOne({id: id}, {_id: 0}, callback);
}

/*
  Returns material with required materials if they can be found with same
  authority and location.
*/
function getWithRequired(id, callback) {
  get(id,function(err, material){
    if( err ) {
      return callback(err);
    }

    var result = {
      material : material,
      required : []
    };

    if( material.type === 'simple' || !material.materials ) {
      return callback(null, result);
    }

    getRequired(material, {}, function(required){
      for( var name in required ) {
        result.required.push(required[name]);
      }
      callback(null, result);
    });
  });
}

function getRequired(material, found, callback) {
  var baseQuery = {
    $and : [{
        authority : material.authority
    }]
  };

  for( var i = 0; i < material.locality.length; i++ ) {
    baseQuery.$and.push({locality: material.locality[i]});
  }

  var materials = [];
  for( var name in material.materials ) {
    if( material.unique && material.unique[name] ) {
      continue;
    }
    if( found[name] ) {
      continue;
    }
    materials.push(name);
  }

  async.eachSeries(
    materials,
    function(material, next) {
      var query = extend(true, {}, baseQuery);
      query.$and.push({name : material});

      collection.findOne(query, {_id: 0}, function(err, resp){
        if( !err && resp ) {
          found[resp.name] = resp;

          if( resp.type === 'complex' ) {
            getRequired(resp, found, function(){
              next();
            });
            return;
          }
        }
        next();
      });
    },
    function(err) {
      callback(found);
    }
  );
}

function save(material, username, callback) {
  if( !material ) {
    return callback('No material provided');
  }

  for( var i = 0; i < required.length; i++ ) {
    if( material[required[i]] === undefined || material[required[i]] === null ) {
      if( material.type === 'complex' && required[i] === 'price' ) {
        continue;
      }
      return callback(required[i]+' is required');
    }
  }

  utils.validate(material, username, authorityModel, function(err){
    if( err ) {
      return callback(err);
    }

    // remove common attachments from app
    cleanMaterial(material);


    if( !material.id ) {
      material.id = uuid.v4();
    }

    // update
    history.track('material', material, username, function(err, result){
      if( err ) {
        return callback(err);
      }

      material.distinctId = material.name+material.authority+material.locality.join(',')+(material.year || '');

      // TODO: check if item exists, if so, check rename.  if material is renamed, update budget...
      // Since operation materials do have id's, can we just update name next time material is accessed?
      // This will give use notification of what we are doing.

      collection.update(
        {id: material.id},
        material,
        {upsert: true},
        function(err, result) {
          if( err ) {
            return callback(err);
          }
          mapReduceMaterial(material.name);

          callback(null, result);
        }
      );
    });
  });
}

function remove(id, username, callback) {
  if( !id ) {
    return callback('No id provided');
  }

  history.delete('material', id, username, function(err, result){
    if( err ) {
      return callback(err);
    }

    collection.update(
      {id: id},
      { $set : { deleted : true } },
      function(err, result) {
        if( err ) {
          return callback(err);
        }
        return callback(null, {success:true});
      }
    );
  });
}

function search(query, start, stop, callback) {

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


  var cursor = collection.find(
    q,
    {
      _id: 0,
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

function find(query, callback) {
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

function nameSuggest(text, callback) {
  var re = new RegExp('.*'+text+'.*','i');

  suggestCollection
    .find({_id: re})
    .limit(10)
    .toArray(function(err, result){
      if( err ) {
        return callback(err);
      }

      var resp = [];
      for( var i = 0; i < result.length; i++ ) {
        resp.push(result[i].value);
      }
      callback(null, resp);
    });
}

function mapReduceMaterial(name, callback) {
  collection.mapReduce(
    MapReduce.map,
    MapReduce.reduce,
    {
      out : materialGroupCollection,
      query : {name: name},
      finalize : MapReduce.finalize
    },
    function(err, resp){
      var keys = ['authority', 'locality', 'class'];
      mapreduceAttributes.run(collection, 'materialKeywords', {keys: keys});

      if( !callback ) {
        return;
      }

      if( err ) {
        return callback(err);
      }
      callback(null, {success: true});
    });
}

function mapReduceAll(callback) {
  collection.mapReduce(
    MapReduce.map,
    MapReduce.reduce,
    {
      out : materialGroupCollection,
      finalize : MapReduce.finalize
    },
    function(err, resp){
      if( err ) {
        return callback(err);
      }
      callback(null, {success: true});
    });
}

var MapReduce = {
  map : function() {
    var item = {
      material : this.name,
      authorities : {}
    };

    item.authorities[this.authority] = 1;
    emit(this.name, item);
  },
  reduce : function(key, values) {
    var resp = {
      material : key,
      authorities : {}
    };

    for( var i = 0; i < values.length; i++ ) {
      for( var key in values[i].authorities ) {
        resp.authorities[key] = 1;
      }
    }

    return resp;
  },
  finalize : function(key, value) {
    value.authorities = Object.keys(value.authorities);
    return value;
  }
};
