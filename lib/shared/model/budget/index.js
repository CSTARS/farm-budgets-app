"use strict";
var ucum=require('ucum.js')
  , um = require('./unit_math')
  , prices = {}
  , materials = {}
  ;

// Given a set of operations, return prices
function get_prices(oper) {
  var i
  , j
  , item
  , material
  , requirements
  , adds
  , total_requirements
  , subtotal=0
  , parsed
  , price
  , priced=[];
  ;

  for(i=0;i<oper.length;i++) {
    item=oper[i];
    console.log(item);
    material=materials[item[0]];
    price=prices[item[0]];

    total_requirements={};
    if (material && material[3]) {
      console.log("Adding Requirements",material[3]);
      requirements=get_prices(material[3]);
      console.log("Requirements",requirements);
      adds=[];
      for(j=0;j<requirements.length;j++) {
        adds.push({value:requirements[j][4],unit:requirements[j][5]});
      }
      total_requirements=um.sum(adds);
    }
    if (price) {
      console.log('Found Price',price);
      material_price=um.multiply({value:price[1],unit:price[2]},
        {value:item[1],unit:item[2]});
    }
    item[4]=subtotal;
    item[5]='us$';
    priced.push(item);
  }
  return(priced);
}

module.exports=function(config) {
  var i
  , p
  ;

  if (config.prices) {
    // Initial Example Prices
    for(i=0; i< config.prices.length; i++ ) {
      p=config.prices[i];
      prices[p[0]]=p;
    }
  }
  if (config.materials) {
    // Initial Example Prices
    for(i=0; i< config.materials.length; i++ ) {
      p=config.materials[i];
      materials[p[0]]=p;
    }
  }
//  console.log(materials.hoeing[3]);

  return {
    get_prices:get_prices
  }
}
