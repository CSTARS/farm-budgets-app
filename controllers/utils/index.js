'use strict';

module.exports = function (router) {

    router.post('/export', function (req, res) {
      res.set('Content-Type', 'text/plain');
      res.set('Content-Disposition','attachment; filename="budget.json"');
      res.send(req.body);
    });
};
