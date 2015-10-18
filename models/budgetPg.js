'use strict';

var pg = global.pgClient;
var stateHash = require('../lib/states.json');
var schema = global.appConfig.get('postgres').schema;

module.exports = function() {
  return {
      name: 'Budget',
      get: getBudget
  };
};

// get budget ex:
// SELECT * FROM farm_budget_data.production pr
// LEFT JOIN farm_budget_data.price pp
// ON pr.material = pp.material and pr.location = pp.location
// WHERE pr.location = 'CA' and pr.commodity = 'ASPARAGUS';
function getBudget(crop, location, callback) {
  if( stateHash[location] ) {
    location = stateHash[location];
  }
  if( crop ) {
    crop = crop.toUpperCase();
  }

  var query = 'SELECT * '+
    'FROM '+schema+'.production pr, '+schema+'.price pp, '+schema+'.material m ' +
    'WHERE pr.location = $1 and pr.commodity = $2 and '+
    'pr.material = pp.material and pr.material = m.material and pr.location = pp.location';

  pg.query(query,
    [location, crop],
    function(err, result) {
      if( err ) {
        return callback(err);
      }

      var rows = fillTmpData(result.rows);
      callback(null, rows);
    }
  );
}

function fillTmpData(rows) {
  var operations = global.pgOperations;

  for( var i = 0; i < rows.length; i++ ) {
    var tmp = operations[Math.floor(Math.random() * operations.length)];

    rows[i].phase = tmp.phase;
    rows[i].operation = tmp.operation;
  }

  return rows;
}
