'use strict';

/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);
materialController.init(operationController);

var examples = {
  // database formatted
  db : {
    //'default' : require('./config/default'),
    //'alfalfa (CA)': require('./config/ca_alfalfa_swap'),
    'alfalfa swap Estimates' : require('./config/ca_alfalfa_swap_estimate')
    //'poplar bad' : require('./config/poplar-example')
  },
  // application formatted, probably from the 'json dump'
  app : {
    //'poplar good' : require('./config/app/poplar'),
    'jm/alfalfa' : require('./config/app/alfalfa'),
    'blank' : require('./config/app/blank'),
    //'testing' : require('./config/app/testing'),
    'qjh/alfalfa': require('./config/app/qjh-alfalfa'),
    'qjh/poplar' : require('./config/app/qjh-poplar')
  }
};

// tmp for now
var fixed = ['Estimate', 'Taxes','Insurance','Capitol Cost Recover'];
for( var i = 0; i < fixed.length; i++ ) {
  materialController.add({
    name : fixed[i],
    price : 1,
    units : 'us$',
    fixed : true,
    description : 'Provide fixed cost for complex material'
  },{
    noEvent : true,
    noRecalc : true
  });
}

module.exports = {
  utils : require('./utils')(operationController, materialController),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  examples : examples,
  ucum : require('ucum.js'),
  units : require('./units')
};
