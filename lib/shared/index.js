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
    'default' : require('./config/default'),
    'poplar bad' : require('./config/poplar-example')
  },
  // application formatted, probably from the 'json dump'
  app : {
    'poplar good' : require('./config/app/poplar')
  }
};

module.exports = {
  helloWorld : require('./test'),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  examples : examples,
  ucum : require('ucum.js'),
  units : require('./units')
};
