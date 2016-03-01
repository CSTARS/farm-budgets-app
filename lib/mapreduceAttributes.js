'use strict';

var timers = {};
function run(collection, out) {
  if( !timers[out] ) {
    timers[out] = -1;
  }

  if( timers[out] !== -1 ) {
    clearTimeout(timers[out]);
  }

  timers[out] = setTimeout(function(){
    timers[out] = -1;
    _run(collection, out);
  }, 1000);
}

function _run(collection, out) {
  collection.mapReduce(
      map,
      reduce,
      {
          out: out
      }
  );
}


function map() {
    var item = this;
    var keys = ['commodity', 'authority', 'locality'];

    for( var i = 0; i < keys.length; i++ ) {
        if( !item[keys[i]] ) {
          continue;
        }

        var attrs = item[keys[i]];

        if( Array.isArray(attrs) ) {
          attrs.forEach(function(attr){
            emit(keys[i]+'-'+attr, {key: keys[i], value: attr, count: 1});
          });
        } else {
          emit(keys[i]+'-'+attrs, {key: keys[i], value: attrs, count: 1});
        }
    }
}

function reduce(key, values){
    var result = {
        key : '',
        count : 0,
        value : ''
    };

    var v;
    for( i = 0; i < values.length; i++ ) {
        v = values[i];

        // key track of all metadata attribute and wavelengths
        if( v.count !== undefined) {
            result.count += v.count;
            result.key = v.key;
            result.value = v.value;
        }
    }

    return result;
}

module.exports = {
  run : run
};
