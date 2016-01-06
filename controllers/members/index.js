'use strict';

var model = require('../../models/members');
model = new model();

module.exports = function (router) {

    // we are not going to do any acl checks, but the user does need to be logged in.
    router.get('/search', function (req, res) {
      model.search(req.query.q, function(err, members){
        if( err ) {
          return res.send({error: true, message: err});
        }

        res.send(members);
      });
    });
};
