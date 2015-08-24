'use strict';

var definitions = require('./definitions');
var math = require('../model/unit_math');
var ucum = require('ucum.js');

var lookup = {};
for( var type in definitions ) {
  var array = definitions[type];

  for( var i = 0; i < array.length; i++ ) {
    array[i].type = type;

    lookup[array[i].name] = array[i];
    if( array[i].symbol ) {
      lookup[array[i].symbol] = array[i];
    }
    if( array[i].accepted ) {
      for( var j = 0; j < array[i].accepted.length; j++ ) {
        lookup[array[i].accepted[j]] = array[i];
      }
    }
  }
}

// get label for name.  mostly for getting us$ as $ or [us_gal] as gallon.
function getLabel(name, short) {
  var parts, label;

  if( name.indexOf('/') > -1 ) {
    parts = name.split('/');

    label = [];
    parts.forEach(function(p){
      label.push(getLabel(p, short));
    });

    return label.join('/');
  }

  if( name.indexOf('.') > -1 ) {
    parts = name.split('.');

    label = [];
    parts.forEach(function(p){
      label.push(getLabel(p, short));
    });

    return label.join('*');
  }

  var txt = name.toLowerCase();
  if( lookup[txt] ) {
    if( short ) {
      return lookup[txt].accepted ? lookup[txt].accepted[0] : lookup[txt].symbol;
    }
    return lookup[txt].name;
  }
  return name;
}

// get units of same type
function getLikeUnits(name) {
  var txt = name.toLowerCase();
  if( !lookup[txt] ) {
    return [];
  }

  return definitions[lookup[txt].type];
}

function calculateComplexPrice(materialDef, materialImpl, complexMaterial) {
  var units = materialImpl.units;


  var convert = convertUnits(materialImpl.units, complexMaterial.units, materialDef.units);
  if( convert.error ) {
    return convert;
  } else if( Object.keys(convert.units).length > 1 ) {
    return {
      error: true,
      message : 'Units didn\'t cancel',
      math : materialImpl.units+' * '+complexMaterial.units+' * '+materialDef.units
    };
  }

  convert.debug2 = materialImpl.amount+' * '+materialDef.price+' * '+convert.value;
  convert.value = materialImpl.amount * materialDef.price * convert.value;


  if( complexMaterial.name === 'hoeing' ) {
    console.log(convert);
  }

  return convert;
}

function convertUnits(u1, u2, u3) {
  try {
    var t =  ucum.canonicalize('('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+').('+math.cleanDollars(u3)+')');
    t.debug = '('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+').('+math.cleanDollars(u3)+')';
    return t;
  } catch(e) {
    return {
      error : true,
      message : 'Unable to convert units',
      math : u1+' * '+u2+' * '+u3,
      debug : '('+math.cleanDollars(u1)+').('+ math.cleanDollars(u2)+').('+math.cleanDollars(u3)+')'
    };
  }
}


module.exports = {
  getLabel : getLabel,
  getLikeUnits : getLikeUnits,
  math : math,
  calculateComplexPrice : calculateComplexPrice,
  lookup : lookup
};
