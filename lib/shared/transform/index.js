'use strict';

/**
 * Transform the plv8 object description to app object description.
 * in the end, this shouldn't do much.  just a little app sugar.
 **/

 module.exports = function(config) {
   var app = {
     classes : {},
     materials : [],
     operations : [],
     farm : {}
   };

   if( config.materials ) {
     app.materials = getMaterials(config.materials);
     app.classes = getClasses(app.materials);
   }
   if( config.prices ) {
     joinPrices(app.materials, config.prices);
   }

   if( config.farm ) {
     var farm = config.farm[0];
     app.farm = getFarm(farm);

     if( farm.operations ) {
       app.operations = getOperations(farm.operations);
     }
     if( farm.schedule ) {
       joinSchedule(app.operations, farm.schedule);
     }
   }

   return app;
 };

 function joinSchedule(operations, schedules) {
   for( var i = 0; i < schedules.length; i++ ) {
     var schedule = schedules[i];
     for( var j = 0; j < operations.length; j++ ) {
       if( schedule.operation === operations[j].name ) {
         var parts = schedule.duration.split(' ');

         if( parts[1].match(/mon/) ) {
           parts[1] = 'month';
         } else if ( parts[1].match(/year/) ) {
           parts[1] = 'year';
         } else {
           parts[1] = 'day';
         }

        operations[j].schedule.push({
          date : schedule.start,
          length : parts[0],
          units : parts[1]
        });

        break;
       }
     }
   }
 }

function joinPrices(materials, prices) {
  for( var i = 0; i < prices.length; i++ ) {
    var price = prices[i];
    var found = false;

    for( var j = 0; j < materials.length; j++ ) {
      if( materials[j].name == price.material ) {
        materials[j].price = price.price;
        materials[j].units = price.unit;
        found = true;
        break;
      }
    }

    if( !found ) {
      console.log({
        name : price.material,
        price : price.price,
        units : price.unit
      });

      materials.push({
        name : price.material,
        price : price.price,
        units : price.unit
      }); // TODO: some materials do not seem to appear in material list
    }

  }
}

function getMaterials(info) {
  var materials = [];

  info.forEach(function(i){
    i.name = i.material;
    delete i.material;

    i.units = i.unit;
    delete i.unit;

    if( !i.requires ) {
      materials.push(i);
      return;
    }

    i.type = 'complex';
    i.materials = {};

    for( var j = 0; j < i.requires.length; j++ ) {
      i.materials[i.requires[j].material] = {
        amount : i.requires[j].amount,
        units : i.requires[j].unit
      };
    }

    delete i.requires;

    materials.push(i);
  });

  return materials;
}

function getOperations(info) {
  var ops = [];

  info.forEach(function(i){
    var op = {
      name : i.operation,
      materials : {},
      schedule : []
    };

    for( var j = 0; j < i.materials.length; j++ ) {
      op.materials[i.materials[j].material] = i.materials[j];
    }

    ops.push(op);
  });

  return ops;
}

function getFarm(info) {
  var farm = {};
  for( var key in info ) {
    if( typeof info[key] === 'string' ) {
      farm[key] = info[key];
    }
  }
  return farm;
}

function getClasses(materials) {
  var classes = {};

  materials.forEach(function(material){
    if( classes[material.class] ) {
      classes[material.class].push(material.name);
    } else {
      classes[material.class] = [material.name];
    }
  });

  return classes;
}
