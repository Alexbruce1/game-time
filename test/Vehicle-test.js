const { assert } = require('chai');
const Vehicle = require('../lib/Vehicle.js');
const Frog = require('../lib/Frog.js');


describe('Vehicle', function() {
  var vehicle;
  var frog;

  beforeEach('initialize vehicle', function () {
    frog = new Frog(280, 560, 40, 40, 'rgb(0, 200, 0)');
    vehicle = new Vehicle(100, 321, 80, 38, '#999', 1, 1);
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

  it('should start back at the left side when it reaches the right side', function () {
    assert.equal(vehicle.x, 100);
    vehicle.checkVehicleBounds();
    assert.equal(vehicle.x, 100);
    vehicle.x = 601;
    vehicle.checkVehicleBounds(vehicle.x, 520);
  });
})