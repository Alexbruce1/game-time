const { assert } = require('chai');
const Vehicle = require('../lib/Vehicle.js');
const Frog = require('../lib/Frog.js');


describe('Vehicle', function() {
  var vehicle;
  var frog;

  beforeEach('initialize vehicle', function () {
    frog = new Frog();
    vehicle = new Vehicle(null, 100, 321, 80, 38, 1, 1);
  });

  it('should be able to collide with the frog', function () {
    frog.x = 100;
    frog.y = 321;
    const isColliding = vehicle.isCollidingWith(frog);

    assert.isTrue(isColliding);
  });

  it('should not collide with the frog when they don\'t overlap', function () {
    const isColliding = vehicle.isCollidingWith(frog);

    assert.isFalse(isColliding);
  });

})