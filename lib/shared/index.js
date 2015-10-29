'use strict';

/**
 *  Namespace module
 *  Exposes other modules
 **/

var materialController = require('./materialController');
var operationController = require('./operationController');
operationController.init(materialController);
materialController.init(operationController);

var currentData = {};

function reset() {
  operationController.reset();
  materialController.reset();

  // tmp for now
  var fixed = ['Estimate', 'Taxes','Insurance','Capitol Cost Recover','Lube & Repairs'];
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
}

function load(data) {
  // by default adding/updating materials fires events and recalcs
  // budget.  We don't want to do this on initial load
  var options = {
    noEvent : true,
    noRecalc : true
  };

  data.materials.forEach(function(material){
    materialController.add(material, options);
  });

  materialController.recalc();

  operationController.setFarmSize((data.farm && data.farm.size) ? parseInt(data.farm.size) : 1);
  data.operations.forEach(function(operation){
    operationController.add(operation, options);
  });

  operationController.recalc();

  delete data.materials;
  currentData = data;
}

module.exports = {
  utils : require('./utils')(operationController, materialController),
  operationController : operationController,
  materialController : materialController,
  transform : require('./transform'),
  ucum : require('ucum.js'),
  units : require('./units'),
  save : require('./save'),
  getData : function() {
    return currentData;
  },
  load : load,
  reset : reset
};
