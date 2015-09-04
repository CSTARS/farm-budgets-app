'use strict';

var connect = require('./connect');
var argv = require('minimist')(process.argv.slice(2));
var model;


function run() {
  var model, modelname, fn, params;

  if( !argv.m && !argv.model ) {
    error('Missing modal argument', true);
  } else if( !argv.f && !argv.function ) {
    error('Missing function argument', true);
  }

  model = argv.m || argv.model;
  fn = argv.f || argv.function;

  for( var i = 0; i < argv._.length; i++ ) {
    if( argv._[i].match(/^\{.*\}$/) ) {
      try {
        argv._[i] = eval('('+argv._[i]+')');
      } catch(e) {
        console.log(e);
        error('Unable to parse parameter as JSON: '+argv._[i]);
      }
    }
  }
  params = argv._;

  try {
    modelname = model;
    model = require('../../models/'+model);
    model = new model();
  } catch(e) {
    console.log(e);
    error('Unable to load model: '+modelname);
  }

  if( !model[fn] ) {
    error(modelname+' has no function: '+fn+'()');
  }

  try {
    params.push(callback);
    model[fn].apply(model, params);
  } catch(e) {
    error(e);
  }
}

function callback(err, result) {
  if( err ) {
    error(err);
  }

  console.log(result);

  global.db.close();
  process.exit();
}


function error(msg, showUsage) {
  console.log(msg);

  if( showUsage ) {
    console.log('Usage: [-m | --model] [model_name] [-f | --function] [function_name] parameters');
  }

  if( global.db ) {
    try {
      global.db.close();
    } catch(e) {}
  }

  process.exit(-1);
}

connect(function(err, db){
  if( err ) {
    error(err);
  }

  global.db = db;
  run();
});
