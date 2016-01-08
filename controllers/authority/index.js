'use strict';

// checks the user is logged in
var authUtils = require('../auth');
var errorHandler = require('../../lib/handleError');
var AuthorityModel = require('../../models/authority');
var model = new AuthorityModel();

module.exports = function (router) {
    router.get('/get/all', function (req, res) {
      model.getAll(req.user, function(err, authorities){
        if( err ) {
          return errorHandler(err, res);
        }

        res.send(authorities);
      });
    });

    router.get('/get', function (req, res) {
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

    router.post('/create', function (req, res) {
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

    router.get('/grantAccess', function (req, res) {
      if( !req.query.name || !req.query.email ) {
        return errorHandler('authority name and email required', res);
      }

      authUtils.hasAccess(req.user, req.query.name, function(err, hasAccess){
        if( err ) {
          return errorHandler(err, res);
        }
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.query.authority, res);
        }

        model.grantAccess(req.query.email, req.query.name, function(err, result){
          if( err ) {
            return errorHandler(err, res);
          }

          res.send(result);
        });
      });
    });

    router.get('/removeAccess', function (req, res) {
      if( !req.query.name || !req.query.email ) {
        return errorHandler('authority name and email required', res);
      }

      authUtils.hasAccess(req.user, req.query.name, function(err, hasAccess){
        if( err ) {
          return errorHandler(err, res);
        }
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.query.authority, res);
        }

        model.removeAccess(req.query.email, req.query.name, function(err, result){
          if( err ) {
            return errorHandler(err, res);
          }

          res.send(result);
        });
      });
    });

    router.post('/update', function (req, res) {
      if( !req.body.name ) {
        return errorHandler('authority name required', res);
      }

      authUtils.hasAccess(req.user, req.body.name, function(err, hasAccess){
        if( err ) {
          return errorHandler(err, res);
        }
        if( !hasAccess ) {
          return errorHandler('You do not have access to authority: '+req.body.name, res);
        }

        model.save(req.body, function(err, authority){
          if( err ) {
            return errorHandler(err, res);
          }

          res.send(authority);
        });
      });
    });

    // patch in user authorities to ExpressAuth namespace
    router.get('/lib.js', function(req, res){
      res.setHeader('Content-Type', 'application/javascript');
      var lib = 'if(ExpressAuth && ExpressAuth.user) ExpressAuth.user.authorities=';

      if( req.user ) {
        model.getAll(req.user, function(err, authorities){
          if( err ) {
            lib += '[];';
          } else {
            lib += JSON.stringify(authorities)+';';
          }

          res.end(lib);
        });
      } else {
        lib += '[];';
        res.end(lib);
      }
    });
};
