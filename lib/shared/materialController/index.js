'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/

 var events = require('events').EventEmitter;
 events = new events();

var data = {
 materials : {},
 complex : {}
};

function remove(name) {
  if( data.materials[name] ) {
    delete data.materials[name];
    return success();
  } else if( data.complex[name] ) {
    delete data.complex[name];
    return success();
  }

  return error('material '+name+' does not exist');
}

function add(material, options) {
  if( !options ) {
    options = {};
  }

  if( data.materials[material.name] && !options.replace ) {
    return error('material already exists');
  } else if( data.complex[material.name] && !options.replace ) {
    return error('material already exists');
  }

  if( material.type === 'complex' ) {
    data.complex[material.name] = material;
  } else {
    material.type = 'simple';
    data.materials[material.name] = material;
  }

  if( options.rename ) {
    remove(options.rename);
  }

  recalc();

  if( !options.noEvent ) {
    events.emit('material-update', {
      material : material,
      replaced : options.rename
    });
  }

  return success();
}

function get(name) {
  if( !name ) {
    return data;
  }

  if( data.materials[name] ) {
    return data.materials[name];
  } else if( data.complex[name] ) {
    return data.complex[name];
  }

  return error(name+' is not in the material list');
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  if( txt.length === 0 ) {
    return results;
  }

  for( key in data.materials ) {
    if( key.match(re) && key !== ignore ) {
      results.push(data.materials[key]);
    }
  }
  for( key in data.complex ) {
    if( key.match(re) && key !== ignore  ) {
      results.push(data.complex[key]);
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var material;
  for( material in data.complex ) {
    data.complex[material].price = null;
  }

  for( material in data.complex ) {
    var m = data.complex[material];

    if( m.price !== null ) {
        continue;
    }
    m.price = _recalc(m);
  }
}

function _recalc(material){
  var price = 0;
  for( var m in material.materials ) {
    m = get(m);

    if( m.price !== null ) { // doesn't matter if complex or not
      price += material.materials[m.name].amount * getPriceForUnits(m, material.materials[m.name].units);
    } else if ( m.type === 'complex' ) {
      m.price = _recalc(m);

      price += material.materials[m.name].amount * getPriceForUnits(m, material.materials[m.name].units);
    }
  }
  return price;
}

function getPriceForUnits(m, units) {
  if( units && units !== m.units ) {
    // TODO: really you need to convert units here
    return m.price;
  }
  return m.price;
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
  recalc : recalc
};
