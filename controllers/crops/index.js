'use strict';

var CropsModel = require('../../models/crops');
var errorHandler = require('../../lib/handleError');

module.exports = function (router) {
    var model = new CropsModel();

    router.get('/get', function (req, res) {
      var location = req.query.location;
      if( location ) {
        location = JSON.parse(location);
      }

      model.get(location, function(err, crops){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(crops);
      });
    });
};
