/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);

var examples = {
  'default' : require('./config/default'),
  'poplar' : require('./config/poplar-example')
};

module.exports = {
  helloWorld : require('./test'),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  examples : examples
};
