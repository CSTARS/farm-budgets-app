'use strict';

var express = require('express');
var kraken = require('kraken-js');
var merge = require('merge-util');
var fs = require('fs');
var postgres = require('./lib/postgres');
var mongo = require('./lib/mongo');

var authStack = require('../../../watershed/express-auth');

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
          var c = require('/etc/farm-budgets-app/config.js');

          for( var key in c ) {
            var tmpConfig = config.get(key);
            if( tmpConfig ) {
              merge(tmpConfig, c[key]);
            }
          }
        }

        // allow command line switch from serving /dist to /app
        if( config.get('dev') ) {
          var middleware = config.get('middleware').static;
          middleware.module.arguments[0] = middleware.module.arguments[0].replace(/dist$/,'public');
          console.log('Servering ./public');
        }

        global.config = config;

        // connect to pg instance
        postgres.connect(config, function(err){
          if( err ) {
            console.log(err);
            process.exit();
          }

          mongo.connect(config, function(err){
            if( err ) {
              console.log(err);
              process.exit();
            }

            var auth = {
              db : global.db,
              app : app,
              config : config.get('auth'),
              oauthNoUser : oauthNoUser
            };
            authStack.init(auth);

            global.auth = auth;

            next(null, config);
          });
        });
    }
};

function oauthNoUser(collection, accessToken, refreshToken, profile, done) {
  profile.refreshToken = refreshToken;
  delete profile._raw;

  var user = {
    name : profile.displayName,
    email : profile.emails[0].value,
    username : profile.emails[0].value,
    oauth : {
      google : profile,
    }
  };

  collection.insert(user, function(err, result){
    done(err, user);
  });
}

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
