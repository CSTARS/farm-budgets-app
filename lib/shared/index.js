'use strict';

/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);

var examples = {
  // database formatted
  db : {
//    'default' : require('./config/default'),
    'alfalfa (CA)': require('./config/ca_alfalfa_swap'),
    'poplar bad' : require('./config/poplar-example')
  },
  // application formatted, probably from the 'json dump'
  app : {
    'poplar good' : require('./config/app/poplar')
  }
};

module.exports = {
  utils : require('./utils')(operationController, materialController),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  examples : examples,
  ucum : require('ucum.js'),
  units : require('./units')
};
