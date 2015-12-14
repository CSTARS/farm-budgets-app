'use strict';

var express = require('express');
var kraken = require('kraken-js');
var merge = require('merge-util');
var fs = require('fs');
var mongo = require('./lib/mongo');

var authStack = require('express-auth');
var history = require('mongo-object-history');

var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {
        /*
         * Add any additional config setup or overrides here. `config` is an initialized
         * `confit` (https://github.com/krakenjs/confit/) configuration object.
         */


        if( fs.existsSync('/etc/farm-budgets-app/config.js') ) {
          config.use('/etc/farm-budgets-app/config.js');
          /*var c = require('/etc/farm-budgets-app/config.js');

          for( var key in c ) {
            var tmpConfig = config.get(key);
            if( tmpConfig ) {
              merge(tmpConfig, c[key]);
            }
          }*/
        }

        // allow command line switch from serving /dist to /app
        if( config.get('dev') ) {
          var middleware = config.get('middleware').static;
          middleware.module.arguments[0] = middleware.module.arguments[0].replace(/dist$/,'public');
          console.log('Servering ./public');
        }

        global.appConfig = config;

        mongo.connect(config, function(err){
          if( err ) {
            console.log(err);
            process.exit();
          }

          mongo.ensureIndexes();
          setupHistoryTracking();

          var authSetup = {
            db : mongo.get(),
            app : app,
            config : config.get('auth'),
          };
          global.auth = authStack.init(authSetup);

          next(null, config);
        });
    }
};

function setupHistoryTracking() {
  var db = mongo.get();
  var budgetCollection = db.collection('budget');
  var materialCollection = db.collection('material');
  var historyCollection = db.collection('history');

  var config = {
    get : {
      budget : function(id, callback) {
        budgetCollection.findOne({id: id}, callback);
      },
      material : function(id, callback) {
        materialCollection.findOne({id: id}, callback);
      }
    },
    collection : historyCollection
  };

  history.init(config);
}

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
