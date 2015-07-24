'use strict';

var pg = require('pg');

// hack for filling in tmp data;
var operations = [];

module.exports.connect = function(config, callback) {
  var client = new pg.Client(config.get('postgres').url);

  client.connect(function(err) {
    if( err ) {
      return callback(err);
    }

    global.pgClient = client;
    runHack(client, config);

    callback();
  });
};

function runHack(pg, config) {
  pg.query('select * from '+config.get('postgres').schema+'.operation', function(err, result){
      if( err ) {
        return console.log(err);
      }
      
      global.pgOperations = result.rows;
  });
}
