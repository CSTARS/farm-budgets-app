'use strict';

var express = require('express');
var kraken = require('kraken-js');
var merge = require('merge-util');
var fs = require('fs');
var postgres = require('./lib/postgres');

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
            if( tmpConfig ) merge(tmpConfig, c[key]);
          }
        }

        global.config = config;

        // connect to pg instance
        postgres.connect(config, function(err){
          if( err ) {
            console.log(err);
            process.exit();
          }
          next(null, config);
        });
    }
};

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
