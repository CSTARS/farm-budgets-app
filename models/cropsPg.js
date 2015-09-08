'use strict';

var pg = global.pgClient;
var stateHash = require('../lib/states.json');
var schema = global.config.get('postgres').schema;

module.exports = function() {
  return {
      name: 'Location',
      get: getCropsForLocation
  };
};

function getCropsForLocation(location, callback) {
  var state = stateHash[location.state];

  pg.query('select distinct commodity, location from ' + schema +
    '.production where location = $1 or location = $2 or location = $3 order by location',
    [state, location.county, location.zipCode],
    function(err, result) {
      if( err ) {
        return callback(err);
      }

      callback(null, result.rows);
    }
  );
}
