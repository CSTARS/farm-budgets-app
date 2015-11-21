'use strict';

// checks the user is logged in
var authUtils = require('../auth');
var errorHandler = require('../../lib/handleError');
var AuthorityModel = require('../../models/authority');
var authMiddleware = authUtils.middleware;
var model = new AuthorityModel();

global.auth.deserialize = function(user, done) {
  model.getAll(user, function(err, authorities){
    if( err ) {
      return done(err);
    }

    user.authorities = authorities;

    done(null, user);
  });
};

module.exports = function (router) {
    var auth = global.auth;

    router.get('/get/all', authMiddleware, function (req, res) {
      model.getAll(req.user, function(err, authorities){
        if( err ) {
          return errorHandler(err, res);
        }

        res.send(authorities);
      });
    });

    router.get('/get', authMiddleware, function (req, res) {
      if( !req.query.name ) {
        return errorHandler('authority name required', res);
      }

      authUtils.hasAccess(req.user, req.query.name, function(err, hasAccess){
        if( err ) {
          return errorHandler(err, res);
        }
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.query.name, res);
        }

        model.get(req.query.name, function(err, authority){
          if( err ) {
            return errorHandler(err, res);
          }

          res.send(authority);
        });
      });
    });

    router.post('/create', authMiddleware, function (req, res) {
      var authority = req.body;
      if( !authority ) {
        return errorHandler('authority required', res);
      }

      model.create(authority, req.user, function(err, authority){
        if( err ) {
          return errorHandler(err, res);
        }

        res.send(authority);
      });
    });

    router.get('/grantAccess', authMiddleware, function (req, res) {
      if( !req.query.name || !req.query.username ) {
        return errorHandler('authority name and username required', res);
      }

      authUtils.hasAccess(req.user, req.query.name, function(err, hasAccess){
        if( err ) {
          return errorHandler(err, res);
        }
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.query.authority, res);
        }

        model.grantAccess(req.query.username, req.query.name, function(err, result){
          if( err ) {
            return errorHandler(err, res);
          }

          res.send(result);
        });
      });
    });

    router.get('/removeAccess', authMiddleware, function (req, res) {
      if( !req.query.name || !req.query.username ) {
        return errorHandler('authority name and username required', res);
      }

      authUtils.hasAccess(req.user, req.query.name, function(err, hasAccess){
        if( err ) {
          return errorHandler(err, res);
        }
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.query.authority, res);
        }

        model.removeAccess(req.query.username, req.query.name, function(err, result){
          if( err ) {
            return errorHandler(err, res);
          }

          res.send(result);
        });
      });
    });

    router.post('/update', authMiddleware, function (req, res) {
      if( !req.body.name ) {
        return errorHandler('authority name required', res);
      }

      authUtils.hasAccess(req.user, req.body.authority, function(err, hasAccess){
        if( err ) {
          return errorHandler(err, res);
        }
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.query.authority, res);
        }

        model.update(req.body, function(err, authority){
          if( err ) {
            return errorHandler(err, res);
          }

          res.send(authority);
        });
      });
    });
};
