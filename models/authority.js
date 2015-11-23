'use strict';

var collection = global.db.collection('authority');
var accountCollection = global.db.collection('accounts');

var allowedKeys = ['name','description'];

module.exports = function() {
  return {
      name: 'Authority',
      get : get,
      getAll : getAll,
      save : save,
      create : create,
      grantAccess: grantAccess,
      removeAccess: removeAccess
  };
};


function get(name, callback) {
  collection.findOne({name: name}, {_id: 0}, function(err, authority){
    if( err ) {
      return callback(err);
    }
    if( !authority ) {
      return callback('Unknown authority: '+name);
    }

    global.auth.acl().roleUsers(authority.name, function(err, users){
      if( err ) {
        callback(err);
      }

      authority.users = users;
      callback(null, authority);
    });
  });
}

// get all authorities for a user
function getAll(user, callback) {
  if( !user.username ) {
    callback(null, []);
  } else if( user.admin ) {
    collection.find({},{name: 1, _id: 0}).toArray(function(err, result){
      if( err ) {
        return callback(err);
      }

      var arr = [];
      for( var i = 0; i < result.length; i++ ) {
        arr.push(result[i].name);
      }
      arr.sort();
      callback(null, arr);
    });
  } else {
    global.auth.acl().userRoles(user.username, callback);
  }
}

function grantAccess(username, authority, callback) {
  accountCollection.findOne({username: username},{_id: 1}, function(err, user){
    if( err ) {
      return callback(err);
    }
    if( !user ) {
      return callback('Invalid username');
    }

    global.auth.acl().addUserRoles(username, authority, function(err){
      if( err ) {
        return callback(err);
      }
      callback(null, {success: true});
    });
  });
}

function removeAccess(username, authority, callback) {
  global.auth.acl().removeUserRoles(username, authority, function(err){
    if( err ) {
      return callback(err);
    }
    callback(null, {success: true});
  });
}

function create(authority, user, callback) {
  if( !authority.name ) {
    return callback('Authority name required');
  }
  if( authority.name.length > 10 ) {
    return callback('Authority name can be no more than 10 characters');
  }

  collection.findOne({name: authority.name}, {_id: 1, name:1}, function(err, auth){
    if( err ) {
      return callback(err);
    }
    if( auth ) {
      return callback('Authority already exists');
    }

    save(authority, function(err, resp){
      if( err ) {
        return callback(err);
      }

      grantAccess(user.username, authority.name, callback);
    });
  });
}

function save(authority, callback) {
  if( !authority ) {
    return callback('No authority provided');
  }
  if( !authority.name ) {
    return callback('Authority name required');
  }

  for( var key in authority ) {
    if( allowedKeys.indexOf(key) === -1 ) {
      delete authority[key];
    }
  }

  collection.update({name: authority.name}, authority, {upsert: true}, callback);
}
