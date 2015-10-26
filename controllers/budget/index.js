'use strict';

var BudgetModel = require('../../models/budget');
var errorHandler = require('../../lib/handleError');

module.exports = function (router) {
    var model = new BudgetModel();

    router.get('/get', function (req, res) {
      var id = req.query.id;

      model.get(id, function(err, budget){
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
};
