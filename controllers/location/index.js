'use strict';

var LocationModel = require('../../models/location');
var errorHandler = require('../../lib/handleError');

module.exports = function (router) {
    var model = new LocationModel();

    router.get('/suggestions', function (req, res) {
      var location = req.query.localities;
      var type = req.query.type || 'material';

      if( !location || !type ) {
        return res.send({error:true, message: 'location and type parameters required'});
      }

      location = JSON.parse(location);

      model.suggestions(type, location, function(err, result){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(result);
      });
    });
};
