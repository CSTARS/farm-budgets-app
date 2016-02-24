'use strict';

var db = require('../../lib/mongo').get();
var sdk = require('../../lib/sdk');
var utils = require('../../lib/modelUtils');
var authorityModel = require('../authority');
var materialModel = require('../materials');
var uuid = require('node-uuid');
var async = require('async');

var schema = sdk.schema();
var strip = sdk.utils.strip;

var collection = db.collection('budget');
var materialCollection = db.collection('material');
var historyCollection = db.collection('history');
var history = require('mongo-object-history');

authorityModel = new authorityModel();
materialModel = new materialModel();

module.exports = function() {
  return {
      name: 'Budget',
      find: find,
      findCount : findCount,
      search : require('./search')(collection, loadReference),
      save: save,
      get : get,
      delete : remove,
      contributedTo : contributedTo,
      uses : uses
  };
};


function save(budget, username, callback) {
  if( !budget ) {
    return callback('No budget provided');
  }

  utils.validate(budget, username, authorityModel, function(err){
    if( err ) {
      return callback(err);
    }

    // set guid, might be useful, we will see
    if( !budget.id ) {
      budget.id = uuid.v4();
    }

    if( budget.commodity ) {
      budget.commodity = budget.commodity.trim().toLowerCase();
    }

    // clean app data from budget
    cleanBudget(budget);

    // set the farmname for the text index
    if( budget.farm ) {
      budget.farmname = budget.farm.name;
    }

    // validate material id's
    if( !budget.materialIds ) {
      budget.materialIds = [];
    }

    validateMaterials(budget.materialIds, function(err) {
      if( err ) {
        return callback('Invalid material id(s): '+JSON.stringify(err));
      }

      history.track('budget', budget, username, function(err, result){
        if( err ) {
          return callback(err);
        }

        // update
        collection.update({id: budget.id}, budget, {upsert: true}, function(error, result) {
          if( err ) {
            return callback(err);
          }
          callback(null, budget);
        });
      });
    });
  });
}


function remove(id, username, callback) {
  if( !id ) {
    return callback('No id provided');
  }

  history.delete('budget', id, username, function(err, result){
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

function uses(materialId, callback) {
  collection
    .find({
      materialIds: materialId,
      deleted : {$ne : true},
    },{
      _id:0,
      id:1,
      'farm.name':1,
      'commodity':1,
      'name':1,
      'authority':1,
      'locality':1
    })
    .toArray(function(err, resp){
      if( err ) {
        return callback(err);
      }
      callback(null, resp);
    });
}

function validateMaterials(ids, callback) {
  var hasError = false;
  var invalids = [];

  async.eachSeries(
    ids,
    function(id, next) {
      if( hasError ) {
        return next();
      }

      if( id === null || id === undefined ) {
        hasError = true;
        invalids.push(id);
        return next();
      }

      materialModel.get(id, function(err, material){
        if( err ) {
          invalids.push(id);
          hasError = true;
        } else if( !material ) {
          invalids.push(id);
          hasError = true;
        }

        next();
      });
    },
    function(err) {
      if( hasError ) {
        callback(invalids);
      } else {
        callback();
      }
    }
  );
}

function cleanBudget(budget) {
  strip(schema.budget, budget);

  if( budget.reference ) {
    // we need to store the scale factors
    var scales = {};
    if( budget.operations )  {
      budget.operations.forEach(function(op){
        if( !op.materials ) {
          return;
        }

        op.materials.forEach(function(impl){
          if( impl.scale !== undefined ) {
            scales[impl.uid] = impl.scale;
          }
        });
      });
    }

    budget.scales = scales;
    budget.operations = [];
  } else {
    // make sure all impl's have uids
    if( budget.operations ) {
      budget.operations.forEach(function(op){
        if( !op.materials ) {
          return;
        }

        op.materials.forEach(function(impl){
          if( impl.uid === undefined ) {
            impl.uid = uuid.v4();
          }
        });
      });
    }
  }
}

function get(id, callback) {
  collection.findOne({id: id}, {_id: 0}, function(err, budget){
    if( err ) {
      return callback(err);
    }
    if( !budget ) {
      return callback('Invalid budget id');
    }

    if( !budget.operations ) {
      budget.operations = [];
    }

    delete budget.farmname;

    materialCollection
      .find({id : {'$in': budget.materialIds}}, {_id: 0})
      .toArray(function(err, materials){
        if( err ) {
          return callback(err);
        }

        delete budget.materialIds;
        var result = {
          budget : budget,
          materials : materials
        };

        // now handle reference budgets
        if( budget.reference ) {
          loadReference(result, callback);
        } else {
          callback(null, result);
        }
      });
  });
}

function loadReference(result, callback) {
  collection.findOne({id: result.budget.reference}, {_id: 0}, function(err, reference){
    if( err ) {
      return callback(err);
    }
    if( !result ) {
      return callback('Could not load reference: '+result.budget.reference);
    }

    result.budget.operations = reference.operations;
    if( !result.budget.operations ) {
      result.budget.operations = [];
    }

    if( !result.budget.farm ) {
      result.budget.farm = {};
    }
    if( !reference.farm ) {
      result.budget.farm = {};
    }
    result.budget.farm.size = reference.farm.size;
    result.budget.farm.unit = reference.farm.unit;
    result.budget.aliases = reference.aliases;

    result.budget.referenceInfo = {
      name : reference.name,
      authority : reference.authority,
      commodity : reference.commodity,
      locality : reference.locality,
      deleted : reference.deleted ? true : false
    };

    // now attach scale factors
    if( result.budget.scales ) {
      result.budget.operations.forEach(function(op){
        if( !op.materials ) {
          return;
        }
        op.materials.forEach(function(impl){
          if( result.budget.scales[impl.uid] !== undefined ) {
            impl.scale = result.budget.scales[impl.uid];
          }
        });
      });

      delete result.budget.scale;
    }


    callback(null, result);
  });
}

function findCount(query, callback) {
  query.deleted = {$ne: true};
  collection.count(query, function(err, resp){
    if( err ) {
      return callback(err);
    }
    callback(null, {count: resp});
  });
}

function find(query, callback) {
  query.deleted = {$ne: true};

  collection
    .find(query, {
      operations: 0,
      materialIds: 0,
      _id : 0,
      score: {
        $meta: 'textScore'
      }
    })
    .sort({ score: { $meta: 'textScore' } })
    .limit(20)
    .toArray(callback);
}

function contributedTo(username, callback) {
  historyCollection
    .distinct('id',
      {user: username, type: 'budget'},
      function(err, resp){
      if( err ) {
        return callback(err);
      }

      find({
        id: {$in : resp},
        deleted : {$ne: true}
      }, callback);
    });
}
