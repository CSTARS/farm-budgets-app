'use strict';

var authMiddleware = require('../authMiddleware');
var errorHandler = require('../../lib/handleError');
var MaterialModel = require('../../models/materials');

module.exports = function (router) {
    var model = new MaterialModel();
    var auth = global.auth;

    router.get('/find', function (req, res) {
      model.get(req.query, function(err, budget){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(budget);
      });
    });

    router.post('/save', authMiddleware, function (req, res) {
      var material = req.body;

      if( !material ) {
        return errorHandler('material required', res);
      }
      if( !material.authority ) {
        return errorHandler('no material authority provided', res);
      }

      if( !auth.acl.hasRole(req.user.username, material.authority) ) {
        return errorHandler('You do not have access to authority: '+req.query.authority, res);
      }

      model.save(material, function(err, result){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(result);
      });
    });
};
