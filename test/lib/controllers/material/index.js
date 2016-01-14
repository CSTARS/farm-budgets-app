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
    assert.equal(controller.get(data.simple1.name).name, 'labor');
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
    assert.equal(controller.get(data.simple1.name).price, 1);

    var update = require('./data')().simple1;
    update.price = 2;
    var response = controller.add(update, {replace: true});

    assert.equal(response.success, true);
    assert.equal(controller.get(data.simple1.name).price, 2);
  });

  it('calculate complex materials', function(){
    controller.reset();

    controller.add(data.simple1);
    controller.add(data.simple2);

    // add complex1
    var response = controller.add(data.complex1);
    assert.equal(response.success, true);

    var m = controller.get(data.complex1.name);
    assert.equal(m.price, 12.25);

    // add complex 2
    response = controller.add(data.complex2);
    assert.equal(response.success, true);

    var m = controller.get(data.complex2.name);
    // complex to is complex1 + 4 more liters of fuel.
    // so 4 * fuel price (3.75) * gal to liter (0.264172) = 3.96258;
    // 3.96258 + 12.25 = 16.21258
    assert.equal(m.price.toFixed(5), '16.21258');
  });

  it('should complain with missing required material', function(){
    controller.reset();
    controller.add(data.complex1);
    var m = controller.get(data.complex1.name);
    assert.equal(m.recalcErrors.length, 2);
  });

  it('should not allow cyclical complex material dependencies', function(){
    controller.reset();
    controller.add(data.simple1);

    controller.add(data.complex3);
    controller.add(data.complex4);

    assert.equal(data.complex3.recalcErrors.length, 1);
    assert.equal(data.complex4.recalcErrors.length, 1);
  });

  it('should let you fix last test cyclical errors', function(){
    var complex3 = controller.get(data.complex3.name);
    var complex4 = controller.get(data.complex4.name);

    // we should be able to fix these errors as well;
    delete complex3.materials[complex4.name];
    controller.add(complex3, {replace: true});

    assert.equal(complex3.recalcErrors.length, 0);
    assert.equal(complex4.recalcErrors.length, 0);
    assert.equal(complex4.price, 4);
  });

  it('not fire update event with noEvent flag', function(){
    controller.reset();

    controller.on('material-update', function(response){
      assert.equal(true, false);
    });

    setTimeout(function(response){
      assert.equal(true, true);
      done();
    }, 100);

    controller.add(data.simple1, {noEvent: true});
  });

  it('should not recalc with noRecalc flag', function(){
    controller.reset();

    controller.add(data.simple1);
    controller.add(data.simple2);
    controller.add(data.complex1);

    // test no update
    var newData = require('./data')().simple1;
    newData.price = 2;
    var resp = controller.add(newData, {noRecalc: true, replace: true});
    assert.equal(resp.success, true);
    assert.equal(controller.get(data.complex1.name).price, 12.25);

    // now actually update
    var resp = controller.add(newData,  {replace: true});
    assert.equal(resp.success, true);
    assert.equal(controller.get(data.complex1.name).price, 13.25);
  });

  it('should let you remove a material', function(){
    controller.reset();

    var resp = controller.add(data.simple1);
    assert.equal(resp.success, true);

    resp = controller.remove('foo');
    assert.equal(resp.error, true);

    resp = controller.remove(data.simple1.name);
    assert.equal(resp.success, true);

    resp = controller.get(data.simple1.name);
    assert.equal(resp.error, true);
  });

  it('should let you rename a material', function(){
    controller.reset();

    var resp = controller.add(data.simple1);
    assert.equal(resp.success, true);

    var orgName = data.simple1.name;
    var newName = data.simple1.name+' updated';
    data.simple1.name = newName;

    resp = controller.add(data.simple1, {rename: orgName});
    assert.equal(resp.success, true);

    resp = controller.get(newName);
    assert.equal(resp.error, undefined);

    resp = controller.get(orgName);
    assert.equal(resp.error, true);
  });
});
