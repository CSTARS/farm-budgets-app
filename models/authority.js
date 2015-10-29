'use strict';

var collection = global.db.collection('authority');

module.exports = function() {

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

function save(authority, callback) {
  if( !authority ) {
    return callback('No authority provided');
  }
  if( !authority.name ) {
    return callback('Authority name required');
  }

  collection.update({name: authority.name}, authority, {upsert: true}, callback);
}
