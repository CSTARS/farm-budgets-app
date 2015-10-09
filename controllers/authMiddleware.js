'use strict';

module.exports = function(req, res, next) {
  if( !req.user ) {
    return res.send({error:true, message: 'login required'});
  }
};
