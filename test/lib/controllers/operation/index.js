var assert = require('assert');


describe('Operation Controller', function() {
  var controller = require('../../../../lib/shared/operationController');
  var materialController = require('../../../../lib/shared/materialController');
  var data, materialData;

  function getMaterialData() {
    materialData = require('../material/data')();
  }

  before(function(){
    controller.init(materialController);
  });

  beforeEach(function(){
    data = require('./data')();
  });

  it('can add operation', function(){
    var resp = controller.add(data.sample1);
    assert.equal(resp.success, true);

    var resp = controller.get(data.sample1.name);
    assert.equal(resp.error, undefined);
  });

  it('can reset controller', function(){
    controller.reset();
    var resp = controller.add(data.sample1);
    assert.equal(resp.success, true);

    controller.reset();
    var resp = controller.get(data.sample1.name);
    assert.equal(resp.error, true);
  });

  it('returns error if operation already exists', function(){
    controller.reset();
    var resp = controller.add(data.sample1);
    assert.equal(resp.success, true);

    var resp = controller.add(data.sample1.name);
    assert.equal(resp.error, true);
  });

  it('can remove operation', function(){
    controller.reset();
    var resp = controller.add(data.sample1);
    assert.equal(resp.success, true);

    resp = controller.remove(data.sample1.name);
    assert.equal(resp.success, true);

    resp = controller.get(data.sample1.name);
    assert.equal(resp.error, true);
  });

  it('can replace operation', function(){
    controller.reset();
    controller.add(data.sample1);

    var newOp = require('./data')().sample1;
    newOp.units = 'foo';

    resp = controller.add(newOp, {replace: true});
    assert.equal(resp.success, true);

    var c = controller.get(data.sample1.name);
    assert.equal(c.units, 'foo');
  });

  it('can replace operation', function(){
    controller.reset();
    controller.add(data.sample1);

    var newOp = require('./data')().sample1;
    newOp.units = 'foo';

    resp = controller.add(newOp, {replace: true});
    assert.equal(resp.success, true);

    var c = controller.get(data.sample1.name);
    assert.equal(c.units, 'foo');
  });

  it('calculates simple operation total', function(){
    controller.reset();
    getMaterialData();

    materialController.add(materialData.simple1);
    controller.add(data.sample1);
    var op = controller.get(data.sample1.name);

    assert.equal(op.subtotal, 5);
    assert.equal(op.total, 10);
    assert.equal(controller.getCurrentTotal().total, 10);
  });

  it('does not recalc with flag', function(){
    data.sample1.schedule.splice(0, 1);
    controller.add(data.sample1, {replace: true, noRecalc: true});

    var op = controller.get(data.sample1.name);

    assert.equal(op.subtotal, undefined);
    assert.equal(op.total, undefined);
  });

  it('can manually recalc', function(){
    controller.recalc();
    var op = controller.get(data.sample1.name);

    assert.equal(op.subtotal, 5);
    assert.equal(op.total, 5);
  });

  it('fire event on add', function(done){
    controller.reset();

    controller.on('operation-update', function(response){
      assert.equal(response.success, true);
      done();
    });

    assert.equal(controller.getEventsModule().listenerCount('operation-update'), 1);
    controller.add(data.sample1);
  });

  it('fire event on total update', function(done){
    controller.reset();

    controller.on('total-update', function(response){
      assert.equal(response.total, 10);
      done();
    });

    assert.equal(controller.getEventsModule().listenerCount('total-update'), 1);
    controller.add(data.sample1);
  });



});
