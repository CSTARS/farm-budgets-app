'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/
var uuid = require('node-uuid');
var events = require('events').EventEmitter;
events = new events();

var data = [], materialController;

function init(controller) {
  materialController = controller;

  materialController.on('material-update', handleMaterialUpdates);
}

function remove(id) {
  if( typeof id === 'object' && data.indexOf(id) > -1 ) {
    data.splice(data.indexOf(id), 1);
    return success();
  } else {
    for( var i = 0; i < data.length; i++ ) {
      if( data[i].id === id  ) {
        data.splice(i, 1);
        return success();
      }
    }
  }

  return error('operation '+(typeof id === 'object' ? id.id : id)+' does not exist');
}

function add(operation, options) {
  if( !options ) {
    options = {};
  }

  operation.id = uuid.v4();
  data.push(operation);

  recalc();

  if( !options.noEvent ) {
    events.emit('operation-update', {
      operation : operation
    });
  }

  return success();
}

function get(id) {
  if( !id ) {
    return data;
  }

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].id === id ) {
      return data[i];
    }
  }

  return error(id+' is not in the material list');
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  if( txt.length === 0 ) {
    return results;
  }

  for( var i = 0; i < data.length; i++ ) {
    if( data[i].match(re) && data[i] !== ignore ) {
      results.push(data[i]);
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var operation, materialDef, materialImpl, total;

  for( var i = 0; i < data.length; i++ ) {
    total = 0;
    operation = data[i];
    for( var j = 0; j < operation.materials.length; j++ ) {
      materialImpl = operation.materials[i];
      materialDef = materialController.get(materialImpl.name);

      if( materialImpl.units !== undefined && materialImpl.units !== materialDef ) {
        // TODO: need to wire up unit conversions
        materialImpl.price = materialImpl.amount * materialImpl.price * 2;
      } else {
        materialImpl.price = materialImpl.amount * materialImpl.price;
      }

      total += materialImpl.price;
    }
  }
}

function handleMaterialUpdates(e) {
  var material = e.detail.material;
  var replaced = e.detail.replaced;

  recalc();

  for( var i = 0; i < data.length; i++ ) {
    var operation = data[i];
    var fireChange = false;

    for( var j = 0; j < operation.materials.length; i++ ) {
      // update any renames
      if( operation.materials[i].name === replaced ) {
        operation.materials[i].name = material.name;
      }

      // look to see if this operation has the updated material
      if( operation.materials[i].name === material.name ) {
        fireChange = true;
      }
    }

    if( fireChange ) {
      events.emit('operation-update', operation);
    }
  }
}

function success() {
  return {success: true};
}

function error(msg) {
  return {
    error : true,
    message : msg
  };
}


module.exports = {
  add : add,
  get : get,
  remove : remove,
  find : find,
  on : function(event, listener){
    events.on(event, listener);
  },
  recalc : recalc,
  init : init
};
