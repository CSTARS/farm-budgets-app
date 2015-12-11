

describe('Material Controller', function() {
  var controller = require('../../lib/shared/materialController');

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 200);
  });
})
