'use strict';

var collection, init = true;

module.exports = function() {
  if( init ) {
    collection = global.db.collection('authority');
    init = false;
  }

  return {
      name: 'Authority',
      get : get,
      getAll : getAll,
      save : save
  };
};

function get(name, callback) {
  collection.findOne({name: name}, callback);
}

// get all authorities for a user
function getAll(username, callback) {
  global.auth.acl.userRoles(username, callback);
}

function save(authority, callback) {
  if( !authority ) {
    return callback('No authority provided');
  }
  if( !authority.name ) {
    return callback('Authority name required');
  }

  collection.update({name: authority.name}, authority, {upsert: true}, callback);
}
