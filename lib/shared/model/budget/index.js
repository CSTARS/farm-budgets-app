"use strict";
var ucum=require('ucum.js')
  , prices = {}
  , materials = {}
  ;

// Maybe break into pieces?
//  , prices = require("prices.js")(config.budget.example.prices)
  ;

// Giitemen a material, return the price
function get_prices(oper) {
  var i
  , j
  , item
  , subs
  , subtotal=0
  , parsed
  , price
  , priced=[];
  ;

  for(i=0;i<oper.length;i++) {
    item=oper[i];
    console.log(item);
    if (materials[item[0]] && materials[item[0]][3]) {
      console.log("sub-material",materials[item[0]][3]);
      subs=get_prices(materials[item[0]][3]);
      console.log("returned",subs);
      for(j=0;j<subs.length;j++) {
        subtotal+=subs[j][4];
      }
    } else {
      console.log('No Sub',item[0]);
    }
    price=prices[item[0]];
    if (price) {
      console.log('Found Price',price,[item[2],price[2].replace('us$','1')].join('.'));
      parsed = ucum.parse([item[2],price[2].replace('us$','1')].join('.'));
      if (parsed) {
        if (parsed.units==={})
        subtotal += item[1]*price[1]*units.value;
        console.log('Parsed to ',subtotal);
      } else {
        console.log('Units Error',[item[2],price[2].replace('us$','1')].join('.'),parsed);
      }
    } else {
      console.log('Not Found',item[0],'subtotal',subtotal);
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
