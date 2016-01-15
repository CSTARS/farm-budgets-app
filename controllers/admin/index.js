'use strict';

// checks the user is logged in
var errorHandler = require('../../lib/handleError');
var AdminModel = require('../../models/admin');
var model = new AdminModel();

module.exports = function (router) {
    router.get('/clearTesting', function (req, res) {
      model.clearTesting(function(err, result){
        if( err ) {
          return errorHandler(err, res);
        }

        res.send(result);
      });
    });
};
