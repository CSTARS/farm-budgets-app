var model = require('../../models/members');
model = new model();

module.exports = function (router) {

    router.get('/search', function (req, res) {
      model.search(req.query.q, function(err, members){
        if( err ) {
          return res.send({error: true, message: err});
        }

        res.send(members);
      });
    });
};
