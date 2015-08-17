// This is just a test that needs to be moved

"use strict";
var config=require('config')
  , budget=require('./budget')(config)
  ;

//console.log(config.materials);
console.log(config.farms[0][5][0][1]);
budget.get_prices(config.farms[0][5][0][1]);
