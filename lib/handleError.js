'use strict';

// Default handling of error responses for rest API
module.exports = function(err, res) {
  res.send({error:true, message: err});
};
