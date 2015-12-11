'use strict';
/**
 * keeps track of materials, prices and complex materials.  mostly for client app.
 **/

 var events = require('events').EventEmitter;
 var units = require('../units');
 events = new events();
 events.setMaxListeners(1000);

var debug = false;
var data = {};

function reset() {
  data = {};
  events.removeAllListeners();
}

function remove(name) {
  if( data[name] ) {
    delete data[name];
    events.emit('material-removed', {
      material : name
    });
  }

  return setError(name, 'material '+name+' does not exist', 1);
}

function add(material, options) {
  if( !options ) {
    options = {};
  }

  if( data[material.name] && !options.replace ) {
    return setError(material.name, 'material already exists', 2);
  }

  var isNew = false;
  if( !data[material.name] ) {
    isNew = true;
  }

  if( !material.type ) {
    if( material.materials ) {
      material.type = 'complex';
    } else {
      material.type = 'simple';
    }
  }

  data[material.name] = material;

  if( options.rename ) {
    remove(options.rename);
  }

  if( !options.noRecalc ) {
    recalc();
  }

  var response = {
    material : material,
    isNew : isNew,
    replaced : options.rename,
    flag : options.flag, // let the caller pass it's own flags
    success : true
  };

  if( !options.noEvent ) {
    events.emit('material-update', response);
  }

  return response;
}

function get(name, material) {
  if( !name ) {
    return data;
  }

  if( data[name] ) {
    return data[name];
  }

  return setError(name, name+' is not in the material list', 3);
}

function asArray() {
  var arr = [], key;
  for( key in data ) {
    arr.push(data[key]);
  }
  return arr;
}

function find(txt, ignore) {
  var re = new RegExp('.*'+txt+'.*', 'i');
  var results = [], key;

  for( key in data ) {
    if( key.match(re) && key !== ignore ) {
      results.push(data[key]);
    }
  }

  for( var i = 0; i < results.length; i++ ) {
    if( results[i].name === txt ) {
      var m = results.splice(i, 1)[0];
      results.splice(0,0,m);
      break;
    }
  }

  return results;
}

// recalc all complex material costs
function recalc() {
  var t = new Date().getTime();

  var material, m;

  for( material in data ) {
    if( data[material].type !== 'complex' ) {
      continue;
    }

    data[material].price = null;
  }

  for( material in data ) {
    m = data[material];
    if( m.type !== 'complex' ) {
      continue;
    }

    if( m.price !== null ) {
        continue;
    }
    m.price = _recalc(m, [m.name]);
  }

  if( debug ) {
    console.log('Complex Material Recalc: '+(new Date().getTime() - t)+'ms');
  }
}

function _recalc(material, materialChain){
  var price = 0;

  for( var key in material.materials ) {
    var m;

    // check the unique list
    if( material.unique && material.unique[key] ) {
      m = {
        name : key,
        price : material.unique[key].price,
        units : material.unique[key].units
      };
    } else { // otherwise use this module to get a material
      m = get(key);
    }

    // if error finding material, set error on material reference and continue;
    if( m.error ) {
      material.materials[key].error = m.error;
      continue;
    }

    if( m.price === null && m.type === 'complex' ) {
      // make sure no recursion
      if( materialChain.indexOf(m.name) === -1 ) {
        m.price = _recalc(m, extendChain(materialChain, m.name));
      } else {
        // BADNESS
        var error = 'Recusive materials found, ignoring: '+materialChain.join('i')+' && '+m.name;
        material.materials[key].error = error;
        if( debug ) {
          console.log(error);
        }
        continue;
      }
    }

    // now actually calculate value
    var value = units.calculateComplexPrice(m, material.materials[m.name], material);

    if( value.error ) {
      material.materials[m.name].price = 0;
      material.materials[m.name].error = value;
    } else {
      material.materials[key].error = null;
      material.materials[m.name].price = value.value;
    }

    price += material.materials[m.name].price;
  }

  return price;
}

function extendChain(chain, m) {
  var newChain = chain.slice();
  newChain.push(m);
  return chain;
}

function materialRecalc(material) {
  if( typeof material !== 'object' ) {
    return;
  } else if( material.type !== 'complex' ) {
    return;
  }
  material.price = _recalc(material);
}

function getErrors() {
  var errors = [];

  for( var m in data.materials ) {
    if( data.materials[m].error ) {
      errors.push(data.materials[m]);
    }
  }

  for( var i in data.complex ) {
    if( data.complex[i].error ) {
      errors.push(data.complex[i]);
    } else {
      for( m in data.complex[i].materials ) {
        if( data.complex[i].materials[m].error ) {
          errors.push(data.complex[i]);
          break;
        }
      }
    }


    for( m in data.complex[i].materials ) {
      var material = get(m);
      if( material.error ) {
        material.from = data.complex[i];
        errors.push(material);
      }
    }
  }

  return errors;
}


function success() {
  return {success: true};
}

function setError(name, msg, code) {
  return {
    name : name,
    error : true,
    message : msg,
    code : code
  };
}

// does a material contain or have a dependency on a given material name
function contains(material, name, replaced) {
  if( material.name === name || material.name === replaced ) {
    return true;
  }

  if( material.type !== 'complex' || material.materials === undefined ) {
    return false;
  }

  for( var key in material.materials ) {
    if( key === name || key === replaced ) {
      return true;
    }

    var childContains = contains(get(key), name, replaced);
    if( childContains ) {
      return true;
    }
  }

  return false;
}


module.exports = {
  // add a material
  debug : function(d){
    debug = d;
  },
  add : add,
  get : get,
  asArray : asArray,
  remove : remove,
  find : find,
  getErrors : getErrors,
  on : function(event, listener){
    events.on(event, listener);
  },
  removeListener : function(event, listener){
    events.removeListener(event, listener);
  },
  // mostly for unit testing
  getEventsModule : function() {
    return events;
  },
  recalc : recalc,
  materialRecalc : materialRecalc,
  contains : contains,
  reset : reset
};
