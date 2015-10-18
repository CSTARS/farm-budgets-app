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
function getAll(user, callback) {
  if( user.admin ) {
    console.log(1);
    collection.find({},{name: 1, _id: 0}).toArray(callback);
  } else {
    console.log(2);
    global.auth.acl.userRoles(user.username, callback);
  }
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
