// This is just a test that needs to be moved

"use strict";
var config=require('config')
  , budget=require('./budget')(config)
  , farm
  ;

farm=config.get('farm')[0];
//console.log(farm.operations[0].materials);
console.log('testing:'+farm.operations[0].operation);
budget.get_prices(farm.operations[0].materials);
