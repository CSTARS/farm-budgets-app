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

    router.get('/get', function (req, res) {
      model.get(req.query.id, function(err, material){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(material);
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

      authUtils.hasAccessObject(req.user, material, function(err, hasRole){
        if( err ) {
          return errorHandler(err, res);
        }

        model.save(material, function(err, result){
          if( err ) {
            return res.send({error:true, message: err});
          }
          res.send(result);
        });
      });
    });
};
