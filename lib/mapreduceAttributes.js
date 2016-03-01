'use strict';

var timers = {};
function run(collection, out, scope) {
  if( !timers[out] ) {
    timers[out] = -1;
  }

  if( timers[out] !== -1 ) {
    clearTimeout(timers[out]);
  }

  timers[out] = setTimeout(function(){
    timers[out] = -1;
    _run(collection, out, scope);
  }, 1000);
}

function _run(collection, out, scope) {
  collection.mapReduce(
      map,
      reduce,
      {
          out : out,
          scope : scope
      }
  );
}


function map() {
    var item = this;

    var fkeys = ['commodity', 'authority', 'locality'];
    if( typeof keys !== undefined ) {
      fkeys = keys;
    }

    for( var i = 0; i < fkeys.length; i++ ) {
        if( !item[keys[i]] ) {
          continue;
        }

        var attrs = item[fkeys[i]];

        if( Array.isArray(attrs) ) {
          attrs.forEach(function(attr){
            emit(fkeys[i]+'-'+attr, {key: fkeys[i], value: attr, count: 1});
          });
        } else {
          emit(fkeys[i]+'-'+attrs, {key: fkeys[i], value: attrs, count: 1});
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
