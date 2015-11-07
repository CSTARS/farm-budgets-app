'use strict';

var authUtils = require('../auth');
var BudgetModel = require('../../models/budget');
var errorHandler = require('../../lib/handleError');

module.exports = function (router) {
    var model = new BudgetModel();
    var authMiddleware = authUtils.middleware;

    router.get('/get', function (req, res) {
      var id = req.query.id;

      model.get(id, function(err, budget){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budget);
      });
    });

    router.get('/contributedTo', authMiddleware, function (req, res) {
      model.contributedTo(req.user.username, function(err, budget){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budget);
      });
    });

    router.get('/find', function (req, res) {

      var query = req.query.query || '';

      if( query !== '' ) {
        try {
          query = JSON.parse(query);
        } catch(e) {
          return errorHandler('Query should by JSON formatted', res);
        }
      }

      model.find(query, function(err, budget){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budget);
      });
    });

    router.get('/findCount', function (req, res) {

      var query = req.query.query || '';

      if( query !== '' ) {
        try {
          query = JSON.parse(query);
        } catch(e) {
          return errorHandler('Query should by JSON formatted', res);
        }
      }

      model.findCount(query, function(err, budget){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budget);
      });
    });

    router.post('/save', authMiddleware, function (req, res) {
      var budget = req.body;

      if( !budget ) {
        return errorHandler('budget required', res);
      }

      authUtils.hasAccessObject(req.user, budget, function(err, hasRole){
        if( err ) {
          return res.send({error:true, message: err});
        }

        model.save(budget, req.user.username, function(err, result){
          if( err ) {
            return res.send({error:true, message: err});
          }

          res.send(result);
        });
      });
    });
};
