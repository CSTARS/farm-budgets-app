'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/
var uuid = require('node-uuid');
var events = require('events').EventEmitter;
events = new events();
events.setMaxListeners(1000);

var data = [], materialController, lastRecalcMsg;

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

function update(operation, options) {
  if( !options ) {
    options = {};
  }

  var found = false;
  for( var i = 0; i < data.length; i++ ) {
    if( operation.id === data[i].id ) {
      data[i] = operation;
      found = true;
      break;
    }
  }

  if( !found ) {
    return error('Operation '+operation.id+' not found');
  }

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
  var operation, materialDef, materialImpl, total, messages = [];

  for( var i = 0; i < data.length; i++ ) {
    total = 0;
    operation = data[i];

    for( var m in operation.materials ) {
      materialImpl = operation.materials[m];
      materialDef = materialController.get(m);

      // was a specified material not found?
      if( materialDef.error ) {
        materialImpl.error = materialDef; // this is actually the error response object
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          error : materialDef
        });
        continue;
      }

      // was a material amount not specified?
      if( typeof materialDef.price !== 'number' || isNaN(materialDef.price) ) {
        materialImpl.error = error(materialDef.name+' found but price is not a number.');
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          warning : materialImpl.error
        });
        continue;
      }

      // was a material amount not specified?
      if( materialImpl.amount === undefined ) {
        materialImpl.warning = warn('No amount set.  Setting to 1.');
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          warning : materialImpl.warning
        });
        materialImpl.amount = 1;
      }


      // to we need to switch units?
      if( materialImpl.units !== undefined && materialImpl.units !== materialDef.units ) {
        messages.push({
          index : i,
          material : m,
          operation : operation.name,
          message : 'Converting from '+materialDef.units+' to '+materialImpl.units
        });

        // TODO: need to wire up unit conversions
        materialImpl.price = materialImpl.amount * materialDef.price * 2;
      } else {
        materialImpl.price = materialImpl.amount * materialDef.price;
      }

      // did something bad happen in price calculation?
      if( isNaN(materialImpl.price) ) {
        materialImpl.error = error('Price calculated to NaN.  Material not included in total.');
        messages.push({
          index : i,
          operation : operation.name,
          material : m,
          error : materialImpl.error
        });
        continue;
      }

      total += materialImpl.price;
    }

    operation.subtotal = total;

    var scheduled = operation.schedule ? operation.schedule.length : 0;
    if( !operation.scheduled ) {
      messages.push({
        index : i,
        operation : operation.name,
        warning : warn('No schedule set')
      });
    }

    operation.total = scheduled * operation.subtotal;

  }

  lastRecalcMsg = messages;
  return messages;
}

function handleMaterialUpdates(e) {
  var material = e.material;
  var replaced = e.replaced;

  recalc();

  for( var i = 0; i < data.length; i++ ) {
    var operation = data[i];
    var fireChange = false;

    for( var m in operation.materials ) {
      // update any renames
      if( m === replaced ) {
        operation.materials[m].name = material.name;
        operation.materials[m] = operation.materials[replaced];
        delete operation.materials[m];
        fireChange = true;

      // look to see if this operation has the updated material
      } else if( m === material.name ) {
        fireChange = true;
      }
    }

    if( fireChange ) {
      events.emit('operation-update', operation);
    }
  }
}

function getLastRecalcMsg() {
  return lastRecalcMsg;
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

function warn(msg) {
  return {
    warrning : true,
    message : msg
  };
}


module.exports = {
  add : add,
  get : get,
  remove : remove,
  update : update,
  find : find,
  on : function(event, listener){
    events.on(event, listener);
  },
  recalc : recalc,
  init : init,
  getLastRecalcMsg : getLastRecalcMsg
};
