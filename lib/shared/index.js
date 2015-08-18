/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);

module.exports = {
  helloWorld : require('./test'),
  operationController : operationController,
  materialController : materialController
};
