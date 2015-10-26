'use strict';

var authUtils = require('../auth');
var errorHandler = require('../../lib/handleError');
var MaterialModel = require('../../models/materials');

module.exports = function (router) {
    var model = new MaterialModel();
    var auth = global.auth;
    var authMiddleware = authUtils.middleware;


    router.get('/hasRequired', function (req, res) {
      model.hasRequired(req.query.id, function(err, checklist){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(checklist);
      });
    });

    router.post('/find', function (req, res) {
      model.find(req.body.query, function(err, materials){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(materials);
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
