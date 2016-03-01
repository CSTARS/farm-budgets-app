'use strict';

var cors = require('cors');
var async = require('async');
var authUtils = require('../auth');
var db = require('../../lib/mongo').get();
var errorHandler = require('../../lib/handleError');
var MaterialModel = require('../../models/materials');
var model;
var collection = db.collection('material');

module.exports = function (router) {
    model = new MaterialModel();

    router.get('/hasRequired', cors(), function (req, res) {
      model.hasRequired(req.query.id, function(err, checklist){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(checklist);
      });
    });

    router.get('/get', cors(), function (req, res) {
      model.get(req.query.id, function(err, material){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(material);
      });
    });

    router.get('/getWithRequired', cors(), function (req, res) {
      model.getWithRequired(req.query.id, function(err, materials){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(materials);
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

    router.get('/mapReduceAll', function (req, res) {
      //if( !req.user.admin ) {
      //  return res.send({error: true, message: 'nope.'});
      //}

      model.mapReduceAll(function(err, resp){
        if( err ) {
          return res.send({error:true, message: err});
        }

        res.send(resp);
      });
    });

    router.get('/suggest', cors(), function (req, res) {
      var text = req.query.q || '';
      model.nameSuggest(text, function(err, resp){
        if( err ) {
          return res.send({error:true, message: err});
        }
        res.send(resp);
      });
    });

    router.get('/delete', function (req, res) {
      var id = req.query.id;

      if( !id ) {
        return errorHandler('material id required', res);
      }

      model.get(id, function(err, material){
        if( err ) {
          return res.send({error:true, message: err});
        }
        if( !material ) {
          return res.send({error: true, message: 'Unknown material id: '+id});
        }

        authUtils.hasAccessObject(req.user, material, function(err, hasRole){
          if( err ) {
            return res.send({error:true, message: err});
          }

          model.delete(id, req.user.email, function(err, resp){
            if( err ) {
              return res.send({error:true, message: err});
            }
            res.send(resp);
          });
        });
      });
    });

    router.post('/save', function (req, res) {
      var material = req.body;

      if( !material ) {
        return errorHandler('material required', res);
      }

      checkAccess(req.user, material, function(err, hasAccess){
        if( err ) {
          if( typeof err === 'object' ) {
            return res.send(err);
          } else {
            return res.send({error:true, message: err});
          }
        }

        if( !hasAccess ) { // this shouldn't really fire
          return res.send({error:true, message: 'You do not have access to this authority'});
        }

        model.save(material, req.user.email, function(err, result){
          if( err ) {
            return res.send({error:true, message: err});
          }

          res.send(result);
        });
      });
    });

};

// the user needs to have access to both the old authority and the new authority
function checkAccess(user, newmaterial, callback) {
  collection.findOne({id: newmaterial.id}, {authority: 1}, function(err, material){
    if( err ) {
      return callback(err);
    }


    if( !material ) { // this is a new material
      authUtils.hasAccessObject(user, newmaterial, function(err, hasRole){
        if( err ) {
          return callback(err);
        }
        if( !hasRole ) {
          return callback('You do not have access to authority: '+newmaterial.authority);
        }

        callback(null, true);
      });

      return;
    }

    authUtils.hasAccessObject(user, material, function(err, hasRole){
      if( err ) {
        return callback(err);
      }
      if( !hasRole ) {
        return callback({error: true, message: 'You do not have access to authority: '+material.authority, code: 10});
      }

      authUtils.hasAccessObject(user, newmaterial, function(err, hasRole){
        if( err ) {
          return callback(err);
        }
        if( !hasRole ) {
          return callback('You do not have access to authority: '+newmaterial.authority);
        }

        callback(null, true);
      });

    });
  });
}

function save(material, user, callback) {
  authUtils.hasAccessObject(user, material, function(err, hasRole){
    if( err ) {
      return callback(err);
    }
    if( !hasRole ) {
      return callback('You do not have access to this authority');
    }

    model.save(material, user.email, callback);
  });
}
