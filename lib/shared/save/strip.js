'use strict';

module.exports = function(schema, object) {
  return strip(schema, object);
};

function strip(schema, object) {
  for( var key in object ) {
    if( !schema[key] ) {
      delete object[key];
      continue;
    }

    var param = schema[key];

    if( param === 'string') {
      if( typeof object[key] !== 'string' ) {
        object[key] = object[key]+'';
      }
    } else if( param === 'number') {
      checkNum(key, object);
    } else if ( Array.isArray(param) ) {

      if( param[0]._object_array_ ) {
         cleanObjectArray(param[0], object[key]);
      } else {
        for( var i = 0; i < object[key].length; i++ ) {
          strip(param[0], object[key][i]);
        }
      }
    } else if ( typeof param === 'object' ) {
      strip(param, object[key]);
    }
  }
}

function cleanObjectArray(schema, object) {
  for( var key in object ) {
    strip(schema, object[key]);
  }
}

function checkNum(key, object) {
  if( typeof object[key] !== 'number' ) {
    try {
      var org = object[key];
      object[key] = parseFloat(object[key]);
      if( isNaN(object[key]) ) {
        object[key] = org;
      }
    } catch(e) {}

  }
}
