'use strict';

var MongoClient = require('mongodb').MongoClient;
var async = require('async');

var unique = {};
var complex = {};
var removeList = [];
var collection;

MongoClient.connect('mongodb://localhost:27017/farmBudgets', function(err, db){
  collection = db.collection('material');
  collection.find({}).toArray(transform);
});


function transform(err, materials) {
  if( err ) {
    return console.log(err);
  }

  for( var i = 0; i < materials.length; i++ ) {
    if( !materials[i].name.match(/--/) ) {
      if( materials[i].type == 'complex' ) {
        complex[materials[i].name] = materials[i];
      }
      continue;
    }

    var parts = materials[i].name.split('--');
    var uMaterial = {
      units : materials[i].units,
      price : materials[i].price,
    };
    removeList.push(materials[i].id);

    if( !unique[parts[0]] ) {
      unique[parts[0]] = {};
    }
    unique[parts[0]][parts[1]] = uMaterial;
  }

  run();
}

function run() {
  for( var name in unique ) {
    var complexM = complex[name];
    if( !complexM ) {
      console.log('Could not find '+name);
      process.exit();
    }

    for( var u in unique[name] ) {
      if( !complexM.unique ) {
        complexM.unique = {};
      }

      complexM.unique[u] = unique[name][u];

      complexM.materials[u] = complexM.materials[complexM.name+'--'+u];
      delete complexM.materials[complexM.name+'--'+u];
    }
  }

  var updateList = [];
  for( var key in complex ) {
    if(complex[key].unique) {
      updateList.push(complex);
    }
  }

  async.eachSeries(
    updateList,
    function(item, next) {
      collection.update({id: item.id}, item, function(err, result){
        if( err ) {
          console.log(err);
        } else {
          console.log(item);
        }
        next();
      });
    },
    function(){
      removeOld();
    }
  );
}

function removeOld() {
  async.eachSeries(
    removeList,
    function(id, next) {
      collection.remove({id: id}, function(err, result){
        if( err ) {
          console.log(err);
        } else {
          console.log(id);
        }
        next();
      });
    },
    function(){
      process.exit();
    }
  );
}
