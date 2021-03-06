'use strict';
var auth = require('express-auth');

function middleware(req, res, next) {
  if( !req.user && !req.query.key ) {
    return res.send({error:true, message: 'login required', code: 1});
  }

  //if( !req.user && req.query.key ) {
  //  return res.send({error:true, message: 'login required'});
  //} else {
    next();
  //}
}

// TODO: do we really need to error check grr.
function hasAccess(user, authority, callback) {
  if( user.admin ) {
    return callback(null, true);
  }

  if( user.email === authority ) {
    return callback(null, true);
  }

  auth.acl.hasRole(user.email, authority, function(err, hasRole){
    callback(err, hasRole);
  });
}

function hasAccessObject(user, object, callback) {
  if( !object.authority ) {
    return callback('no authority provided');
  }

  hasAccess(user, object.authority, function(err, hasRole){
    if( err ) {
      return callback(err);
    }
    if( !hasRole ) {
      return callback('You do not have access to authority: '+object.authority);
    }

    callback(null, true);
  });
}

module.exports = {
  middleware : middleware,
  hasAccess : hasAccess,
  hasAccessObject : hasAccessObject
};
