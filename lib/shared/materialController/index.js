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

    var resp = _recalc(m, [m.name]);
    m.price = resp.price;
    m.recalcErrors = resp.errors;
  }

  if( debug ) {
    console.log('Complex Material Recalc: '+(new Date().getTime() - t)+'ms');
  }
}

function _recalc(material, materialChain){
  var price = 0;
  var errors = [];

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
      setMaterialDefError(material.materials[key], m.message, errors);
      continue;
    }

    if( m.price === null && m.type === 'complex' ) {
      // make sure no recursion
      if( materialChain.indexOf(m.name) === -1 ) {
        var resp = _recalc(m, extendChain(materialChain, m.name));
        m.price = resp.price;
        m.recalcErrors = resp.errors;

        // This isn't working!?
        // errors.contact(resp.errors);
        if( resp.errors.length > 0 ) {
          setMaterialDefError(material.materials[key], m.name+' has errors', []);
          for( var i = 0; i < resp.errors.length; i++ ) {
            errors.push(resp.errors[i]);
          }
          continue;
        }

      } else {
        // BADNESS
        setMaterialDefError(material.materials[key], 'Recusive materials found, ignoring', errors);
        continue;
      }
    }

    // now actually calculate value
    var value = units.calculateComplexPrice(m, material.materials[m.name], material);

    if( value.error ) {
      setMaterialDefError(material.materials[m.name], value.message, errors);
    } else {
      material.materials[key].error = null;
      material.materials[key].message = null;
      material.materials[m.name].price = value.value;
    }

    price += material.materials[m.name].price;
  }

  return {
    price: price,
    errors : errors
  };
}

function setMaterialDefError(materialDef, msg, errors) {
  materialDef.price = 0;
  materialDef.error = true;
  materialDef.message = msg;
  errors.push(msg);
}

function extendChain(chain, m) {
  var newChain = chain.slice();
  newChain.push(m);
  return newChain;
}

function materialRecalc(material) {
  if( typeof material !== 'object' ) {
    return;
  } else if( material.type !== 'complex' ) {
    return;
  }

  var resp = _recalc(material);
  material.price = resp.price;
  material.recalcErrors = resp.errors;
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
