'use strict';
// common helper functions for models

var required = ['name', 'authority', 'locality'];

// make sure objects that require name, authority and locality are valid
function validate(obj, username, authorityModel, callback) {
  var i;

  for( i = 0; i < required.length; i++ ) {
    if( obj[required[i]] === undefined || obj[required[i]] === null ) {
      return callback(required[i]+' is required');
    }
  }

  try {
    if( obj.name.length < 3 ) {
      return callback('Name must be more than 3 characters');
    }
  } catch(e) {
    return callback(e);
  }

  if( typeof obj.locality === 'string' ) {
    obj.locality = [obj.locality];
  }

  try {
    for( i = 0; i < obj.locality.length; i++ ) {
      obj.locality[i] = clean(obj.locality[i]);
    }
  } catch(e) {
    return callback('Error converting locality to lower case.  Perhaps not an array?');
  }

  // a user can be the authority
  if( obj.authority === username ) {
    return callback();
  }

  authorityModel.get(obj.authority, function(err, result){
    if( err ) {
      return callback(err);
    } else if( !result ) {
      return callback('Authority doesn\'t exist: '+obj.authority);
    }

    callback();
  });
}

function prepareQuery(query) {
  var q = [];

  if( query.locality ) {
    if( query.locality.match(/^\[.*\]$/) || query.locality.match(/^\[.*\]$/) ) {
      query.locality = JSON.parse(query.locality);
    }

    if( Array.isArray(query.locality) ) {
      for( var i = 0; i < query.locality.length; i++ ) {
        q.push({locality: clean(query.locality[i])});
      }
    } else if( typeof query.locality === 'object' ) {
      if( query.locality.$and ) {
        q.push(query.locality.$and);
      }
      if( query.locality.$or ) {
        q.push(query.locality.$or);
      }
    } else {
      q.push({locality: clean(query.locality)});
    }
    delete query.locality;
  }

  if( query.name ) {
    if( query.regex ) {
      q.push({name: new RegExp(query.name, 'i')});
    } else {
      q.push({name: query.name});
    }
    delete query.name;
  }

  for( var key in query ) {
    var t = {};
    t[key] = query[key];
    q.push(t);
  }

  return q;
}


function clean(txt) {
  return txt.toLowerCase().trim();
}

module.exports = {
  prepareQuery : prepareQuery,
  validate : validate
};
