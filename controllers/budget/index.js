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

    router.get('/uses', function (req, res) {
      var materialId = req.query.material;
      if( !materialId ) {
        res.send({error: true, message: 'material id required'});
      }

      model.uses(materialId, function(err, budgets){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budgets);
      });
    });

    router.get('/delete', authMiddleware, function (req, res) {
      var id = req.query.id;

      if( !id ) {
        return errorHandler('budget id required', res);
      }

      model.get(id, function(err, budget){
        if( err ) {
          return res.send({error:true, message: err});
        }
        if( !budget ) {
          return res.send({error: true, message: 'Unknown budget id'});
        }

        authUtils.hasAccessObject(req.user, budget, function(err, hasRole){
          if( err ) {
            return res.send({error:true, message: err});
          }
          if( !hasRole ) {
            return res.send({error:true, message: 'You do not have access to this authority'});
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
        if( !hasRole ) {
          return res.send({error:true, message: 'You do not have access to this authority'});
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
