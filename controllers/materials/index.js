'use strict';

var async = require('async');
var authUtils = require('../auth');
var errorHandler = require('../../lib/handleError');
var MaterialModel = require('../../models/materials');
var model;

module.exports = function (router) {
    model = new MaterialModel();
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

    router.get('/delete', authMiddleware, function (req, res) {
      var id = req.query.id;

      if( !id ) {
        return errorHandler('material id required', res);
      }

      model.get(id, function(err, material){
        if( err ) {
          return res.send({error:true, message: err});
        }
        if( !material ) {
          return res.send({error: true, message: 'Unknown material id'});
        }

        authUtils.hasAccessObject(req.user, material, function(err, hasRole){
          if( err ) {
            return res.send({error:true, message: err});
          }

          model.delete(id, req.user, function(err, resp){
            if( err ) {
              return res.send({error:true, message: err});
            }
            res.send(resp);
          });
        });
      });
    });

    router.post('/save', authMiddleware, function (req, res) {
      var material = req.body;

      if( !material ) {
        return errorHandler('material required', res);
      }

      save(material, req.user, function(err, resp){
        if( err ) {
          return res.send({error:true, message: err});
        }
        res.send(resp);
      });
    });

    router.post('/saveBulk', authMiddleware, function (req, res) {
      var materials = req.body.materials;

      if( !materials ) {
        return errorHandler('materials required', res);
      }
      if( !Array.isArray(materials) ) {
        return errorHandler('materials must be an array', res);
      }

      var results = [];

      async.eachSeries(
        materials,
        function(material, next){
          save(material, req.user, function(err, resp){
            if( err ) {
              results.push({error:true, message: err});
            } else {
              results.push(resp);
            }
            next();
          });
        },
        function(err) {
          res.send({
            error : err,
            results : results
          });
        }
      );

    });
};

function save(material, user, callback) {
  authUtils.hasAccessObject(user, material, function(err, hasRole){
    if( err ) {
      return callback(err);
    }
    if( !hasRole ) {
      return callback('You do not have access to this authority');
    }

    model.save(material, user.username, callback);
  });
}
