'use strict';

var BudgetModel = require('../../models/budget');
var errorHandler = require('../../lib/handleError');

module.exports = function (router) {
    var model = new BudgetModel();

    router.get('/get', function (req, res) {

      var location = req.query.location;
      var crop = req.query.crop;

      model.get(crop, location, function(err, budget){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budget);
      });
    });
};
