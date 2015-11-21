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
        { 'commodity': 1 },
        null,
        function(err, results) {
          if( err ) {
            console.log('budget.commodity index failed');
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
            commodity : 'text',
            farmname : 'text',
            locality : 'text',
            authority : 'text'
        },
        {
          weights: {
           commodity : 10,
           name: 5,
           locality: 5,
           farmname : 1,
           authority : 1
          },
          name : 'TextIndex'
        },
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
             description: 'text',
             locality : 'text',
             authority : 'text'
         },
         {
           weights: {
            name: 10,
            description : 2,
            authority : 1,
            locality: 1
           },
           name : 'TextIndex'
         },
         function(err, results) {
           if( err ) {
             console.log(err);
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

    var history = database.collection('history');
    history.createIndex(
      { 'id': 1 },
      null,
      function(err, results) {
        if( err ) {
          console.log('material.name index failed');
        }
      }
    );

    history.createIndex(
       { 'datetime': -1 },
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
