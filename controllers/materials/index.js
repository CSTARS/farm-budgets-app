'use strict';

var MaterialModel = require('../../models/materials');

module.exports = function (router) {
    var model = new MaterialModel();

    router.get('/find', function (req, res) {

      model.get(req.query, function(err, budget){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(budget);
      });
    });
};
