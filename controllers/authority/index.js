'use strict';

// checks the user is logged in
var authUtils = require('../authMiddleware');
var errorHandler = require('../../lib/handleError');
var AuthorityModel = require('../../models/authority');
var authMiddleware = authUtils.middleware;

module.exports = function (router) {
    var model = new AuthorityModel();
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
      if( !req.query.authority ) {
        return errorHandler('authority name required', res);
      }

      authUtils.hasAccess(req.user, req.query.authority, function(hasAccess){
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.query.authority, res);
        }

        model.get(req.user.authority, function(err, authority){
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
        return errorHandler('authority name required', res);
      }

      if( !auth.acl.hasRole(req.user.username, req.query.authority) ) {
        return errorHandler('You do not have access to authority: '+req.query.authority, res);
      }

      model.create(req.user.authority, function(err, authority){
        if( err ) {
          return errorHandler(err, res);
        }

        res.send(authority);
      });
    });

    router.post('/update', authMiddleware, function (req, res) {
      if( !req.query.authority ) {
        return errorHandler('authority name required', res);
      }

      if( !auth.acl.hasRole(req.query.authority) ) {
        return errorHandler('You do not have access to authority: '+req.query.authority, res);
      }

      model.update(req.user.authority, function(err, authority){
        if( err ) {
          return errorHandler(err, res);
        }

        res.send(authority);
      });
    });
};
