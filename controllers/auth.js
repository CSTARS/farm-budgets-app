'use strict';
var auth = global.auth;

function middleware(req, res, next) {
  if( !req.user ) {
    return res.send({error:true, message: 'login required'});
  }
  next();
}

// TODO: do we really need to error check grr.
function hasAccess(user, authority, callback) {
  if( user.admin ) {
    return callback(true);
  }

  auth.acl.hasRole(user.username, authority, function(err, hasRole){
    callback(hasRole);
  });
}

module.exports = {
  middleware : middleware,
  hasAccess : hasAccess
};
