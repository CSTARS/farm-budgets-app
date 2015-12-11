var assert = require('assert');


describe('Material Controller', function() {
  var controller = require('../../../../lib/shared/materialController');
  var data;

  beforeEach(function(){
    data = require('./data')();
  });

  it('add simple material', function(){
    var response = controller.add(data.simple1);

    assert.equal(response.success, true);
    assert.equal(controller.get('labor').name, 'labor');
  });

  it('fire event on add', function(done){
    controller.on('material-update', function(response){
      assert.equal(response.success, true);
      done();
    });

    assert.equal(controller.getEventsModule().listenerCount('material-update'), 1);
    controller.add(data.simple2);
  });

  it('should reset', function(){
    controller.reset();

    assert.equal(Object.keys(controller.get()).length, 0);
    assert.equal(controller.getEventsModule().listenerCount('material-update'), 0);
  });

  it('not allow duplicate materials', function(){
    var response = controller.add(data.simple1);

    assert.equal(response.success, true);

    response = controller.add(data.simple1);
    assert.equal(response.error, true);
    assert.equal(response.code, 2);
  });

  it('should allow updates', function(){
    controller.reset();

    controller.add(data.simple1);
    assert.equal(controller.get('labor').price, 1);

    var update = require('./data')().simple1;
    update.price = 2;
    var response = controller.add(update, {replace: true});

    assert.equal(response.success, true);
    assert.equal(controller.get('labor').price, 2);
  });
})
