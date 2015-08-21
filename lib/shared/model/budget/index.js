"use strict";
var ucum = require('ucum.js')
  , um = require('../unit_math')
  , prices = {}
  , materials = {}
  ;

// Given a set of operations, return prices
function get_prices(material_list) {
  var i
  , j
  , item
  , material
  , requirements
  , adds
  , total_requirements
  , material_price
  , subtotal=0
  , parsed
  , price
  , priced=[];
  ;

  for(i=0;i<material_list.length;i++) {
    item=material_list[i];
    console.log(item);
    material=materials[item.material];
    price=prices[item.material];

    total_requirements={value:0};
    if (material && material.requires) {
      console.log("Adding Requirements",material.requires);
      requirements=get_prices(material.requires);
      adds=[];
      for(j=0;j<requirements.length;j++) {
        adds.push(requirements[j].total);
      }
      total_requirements=um.sum(adds);
    }
    material_price={value:0};
    if (price) {
      price.unit=price.unit.replace('us$','1');
      console.log('Found Price',price);
      material_price=um.multiply(item,price,{value:'amount'},{value:"price"});
      console.log('material_orice',material_price);
    } else {
      console.error('prices['+item.material+'] not found');
    }

    if(material_price.unit && total_requirements.unit &&
      material_price.unit !== total_requirements.unit) {
      throw new Error("Material "+material_price.unit+" and requires" +total_requirements.unit+"differ");
    }

    item.total={value:total_requirements.value+material_price.value,
      unit:(material_price.unit)?material_price.unit:total_requirements.unit};
    priced.push(item);
  }
  return(priced);
}

module.exports=function(config) {
  var i
  , p
  ;

  if (config.prices) {
    for (i=0;i<config.prices.length;i++) {
      prices[config.prices[i]['material']]=config.prices[i];
    }
  }
  if (config.materials) {
    for (i=0;i<config.materials.length;i++) {
      materials[config.materials[i]['material']]=config.materials[i];
    }
  }
//  console.log(materials.hoeing[3]);

  return {
    get_prices:get_prices
  }
}
