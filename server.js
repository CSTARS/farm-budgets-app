'use strict';

var app = require('./index');
var fs = require('fs');
var http = require('http');


var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);

if( fs.existsSync('/etc/farm-budgets-app/config.json') ) {
  var c = JSON.parse(fs.readFileSync('/etc/farm-budgets-app/config.json', 'utf-8'));
  if( c.port ) {
    server.listen(c.port);
  } else {
    server.listen(process.env.PORT || 8000);
  }
}

server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
