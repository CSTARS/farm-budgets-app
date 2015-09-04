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
      get : get
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
  var q = utils.prepareQuery(query);

  if( query.class ) {
    q.push({class: query.class});
  }

  // for now, do not return child materials
  q.push({name : {'$not' : new RegExp('--')}});

  collection.find({'$and': q}).limit(20).toArray(callback);
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
