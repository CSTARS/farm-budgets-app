"use strict";
var ucum=require('ucum.js');

// These throw errs, and need to be in try catch
function multiply(a,b) {
  var parsed
    , unit
    , pre=[]
    , mult={}
    ;

  parsed = ucum.parse([a.unit,b.unit].join('.'));
  mult.value=a.value*b.value*parsed.value;

  // Convert unit back
  for (unit in parsed.units) {
    pre.push(unit+parsed.units[unit]);
  }
  mult.unit=pre.join('.');
  return mult;
}

function multiply_to_unitless(a,b) {
  var mult=unit_mulitply(a,b);
  if (mult.unit !== {}) {
    throw m+" is not unitless";
  }
  return mult;
}

function sum(list) {
  var sum
  , i
  , i_unit
  ;
  sum =(list.length > 0)?list[0]:{value:0,unit:{}};
  for (i=1;i<list.length;i++) {
    i_unit= ucum.convert(list[i].unit,sum.unit);
    if (i_unit === sum.unit) {
      sum.value+=i.value*i_unit.value;
    } else {
      throw "Items to add have different units";
    }
  }
  return sum;
}

module.exports = {
   sum:sum,
   mulitply:multiply
   multiply_to_unitless:multiply_to_unitless
 };
