'use strict';

var uuid = require('node-uuid');
var authorityModel = require('./authority');
var utils = require('../lib/modelUtils');
var db = require('../lib/mongo').get();
var sdk = require('../lib/sdk');
var history = require('mongo-object-history');

var init = true;
var schema = sdk.schema();
var strip = sdk.utils.strip;

var materialGroupCollection = 'materialNameGrouping';
var collection, suggestCollection;
// units can be an empty string, just not undefined or null
var required = ['price', 'units', 'type'];

module.exports = function() {
  if( init ) {
    collection = db.collection('material');
    suggestCollection = db.collection(materialGroupCollection);
    authorityModel = new authorityModel();
    init = false;
  }

  return {
      name: 'Material',
      find : find,
      search : search,
      save : save,
      get : get,
      delete : remove,
      nameSuggest : nameSuggest,
      mapReduceAll : mapReduceAll,
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

    // set guid, might be useful, we will see
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

  searchFilters(q, function(err, filters){
    if( err ) {
      return callback(err);
    }

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
          results : results,
          filters : filters,
        };
        callback(null, response);
      });
    });
  });
}

function searchFilters(q, callback) {
  //collection.count(q, function(err, count){
  //  if( err ) {
  //    return callback(err);
  //  }

    collection.distinct('locality', q, function(err, localityFilters){
      if( err ) {
        return callback(err);
      }

      collection.distinct('authority', q, function(err, authorityFilters){
        if( err ) {
          return callback(err);
        }

        callback(null,{
          //total : count,
          //filters : {
            authority : authorityFilters,
            locality : localityFilters
          //}
        });
      });
    });
  //});
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
