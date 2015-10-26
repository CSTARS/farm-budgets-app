'use strict';

var MongoClient = require('mongodb').MongoClient;
var database;

function connect(config, callback) {
  MongoClient.connect(config.get('mongo').url, function(err, db){
    if( err ) {
      return callback(err);
    }

    database = db;
    // TODO: switch to module require
    global.db = db;

    callback(null, db);
  });
}

function ensureIndexes() {
  var budget = database.collection('budget');

  budget.createIndex(
      { 'id': 1 },
      null,
      function(err, results) {
        if( err ) {
          console.log('budget.id index failed');
        }
      }
   );

   budget.createIndex(
       { 'locality': 1 },
       null,
       function(err, results) {
         if( err ) {
           console.log('budget.locality index failed');
         }
       }
    );

    budget.createIndex(
        { 'farm.commodity': 1 },
        null,
        function(err, results) {
          if( err ) {
            console.log('budget.farm.commodity index failed');
          }
        }
     );

   budget.createIndex(
       { 'name': 1 },
       null,
       function(err, results) {
         if( err ) {
           console.log('budget.name index failed');
         }
       }
    );

    budget.createIndex(
        {
            name: 'text',
            'farm.commodity' : 'text',
            'farm.farm' : 'text',
            locality : 'text'
        },
        { name : 'TextIndex'},
        function(err, results) {
          if( err ) {
            console.log('budget.text index failed');
            console.log(err);
          }
        }
     );

     var material = database.collection('material');
     material.createIndex(
         {
             name: 'text',
             locality : 'text'
         },
         { name : 'TextIndex'},
         function(err, results) {
           if( err ) {
             console.log('material.text index failed');
           }
         }
      );

    material.createIndex(
        { 'id': 1 },
        null,
        function(err, results) {
          if( err ) {
            console.log('material.id index failed');
          }
        }
     );

     material.createIndex(
         { 'locality': 1 },
         null,
         function(err, results) {
           if( err ) {
             console.log('material.locality index failed');
           }
         }
      );

      budget.createIndex(
          { 'name': 1 },
          null,
          function(err, results) {
            if( err ) {
              console.log('material.name index failed');
            }
          }
       );

}


module.exports = {
  connect : connect,
  getDb : function() {
    return database;
  },
  ensureIndexes : ensureIndexes
};
