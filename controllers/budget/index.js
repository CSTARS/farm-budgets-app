'use strict';

var cors = require('cors');
var db = require('../../lib/mongo').get();
var authUtils = require('../auth');
var BudgetModel = require('../../models/budget');
var errorHandler = require('../../lib/handleError');
var model;
var collection = db.collection('budget');


module.exports = function (router) {
    model = new BudgetModel();

    router.get('/get', cors(), function (req, res) {
      var id = req.query.id;

      model.get(id, function(err, budget){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budget);
      });
    });

    router.get('/contributedTo', function (req, res) {
      model.contributedTo(req.user.email, function(err, budget){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budget);
      });
    });

    router.get('/uses', cors(), function (req, res) {
      var materialId = req.query.material;
      if( !materialId ) {
        return res.send({error: true, message: 'material id required'});
      }

      model.uses(materialId, function(err, budgets){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(budgets);
      });
    });

    router.get('/search', cors(), function (req, res) {
      var query = {};
      try {
        if( req.query.query ) {
          query = JSON.parse(req.query.query);
        }
      } catch(e) {
        return res.send({error:true, message: e});
      }

      var start = 0;
      var stop = 10;

      if( req.query.start ) {
        start = parseInt(req.query.start);
      }
      if( req.query.stop ) {
        stop = parseInt(req.query.stop);
      }
      if( stop > 100 ) {
        stop = 100;
      }

      model.search(query, start, stop, function(err, response){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(response);
      });
    });

    router.get('/keywords', cors(), function (req, res) {
      var q = req.query.q || '';

      model.keywordSearch(q, function(err, response){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(response);
      });
    });

    router.get('/delete', function (req, res) {
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

        authUtils.hasAccessObject(req.user, budget.budget, function(err, hasRole){
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

    router.post('/save', function (req, res) {
      var budget = req.body;

      if( !budget ) {
        return errorHandler('budget required', res);
      }

      checkAccess(req.user, budget, function(err, hasRole){
        if( err ) {
          if( typeof err === 'object' ) {
            return res.send(err);
          } else {
            return res.send({error:true, message: err, code: 1});
          }
        }

        if( !hasRole ) { // this shouldn't really fire
          return res.send({error:true, message: 'You do not have access to this authority'});
        }

        model.save(budget, req.user.email, function(err, result){
          if( err ) {
            return res.send({error:true, message: err});
          }

          res.send(result);
        });
      });
    });
};

// the user needs to have access to both the old authority and the new authority
function checkAccess(user, newbudget, callback) {
  collection.findOne({id: newbudget.id}, {authority: 1}, function(err, budget){
    if( err ) {
      return callback(err);
    }

    if( !budget ) { // this is a new budget
      authUtils.hasAccessObject(user, newbudget, function(err, hasRole){
        if( err ) {
          return callback(err);
        }
        if( !hasRole ) {
          return callback({
            error: true,
            message : 'You do not have access to authority: '+newbudget.authority,
            code : 2
          });
        }

        callback(null, true);
      });

      return;
    }

    authUtils.hasAccessObject(user, budget, function(err, hasRole){
      if( err ) {
        return callback(err);
      }
      if( !hasRole ) {
        return callback({error: true, message: 'You do not have access to authority: '+budget.authority, code: 2});
      }

      authUtils.hasAccessObject(user, newbudget, function(err, hasRole){
        if( err ) {
          return callback(err);
        }
        if( !hasRole ) {
          return callback({error: true, message: 'You do not have access to authority: '+newbudget.authority, code: 2});
        }

        callback(null, true);
      });

    });
  });
}
