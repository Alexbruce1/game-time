const { assert } = require('chai');
const Game = require('../lib/Game.js');
const Frog = require('../lib/Frog.js');
const Vehicle = require('../lib/Vehicle.js');

describe('Game', function () {
  var game;
  // var frog;
  // var vehicle;

  beforeEach('initialize game', function() {
    game = new Game();
    // frog = new Frog();
    // vehicle = new Vehicle(null, -100, 321, 80, 38, 1, 1);
  })

  it('should have properties', function () {
    const expectedObj = {
      isGameOver: false,
      currentFrame: 0,
      timeRemaining: 40
    };

    assert.deepEqual(game, expectedObj);
  });

  it('should generate logs', function () {
    
  });

  it('should generate vechicles', function () {

  });

  it('should generate a frog', function () {

  });

  it('should have a timer that ends game after 40 seconds', function() {

  });

  // it('should be over if the frog\'s lives equal 0', function () {

  // });

  // it('should be over if the frog collides with a vehicle', function () {

  // });

  // it('should be over if the frog doesn't land on a log, function () {

  // });

});