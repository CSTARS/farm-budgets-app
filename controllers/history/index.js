'use strict';

var HistoryModel = require('../../models/history');
var errorHandler = require('../../lib/handleError');

module.exports = function (router) {
    var model = new HistoryModel();

    router.get('/:id', function (req, res) {
      var id = req.params.id;
      if( !id ) {
        res.send({error: true, message: 'id required'});
        return;
      }

      model.get(id, function(err, history){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(history);
      });
    });

    router.get('/diff/:id', function (req, res) {
      var id = req.params.id;
      if( !id ) {
        res.send({error: true, message: 'id required'});
        return;
      }

      model.all(id, function(err, history){
        if( err ) {
          return errorHandler(err, res);
        }
        res.send(history);
      });
    });
};
