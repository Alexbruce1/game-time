const { assert } = require('chai');
const Game = require('../lib/Game.js');
const Frog = require('../lib/Frog.js');
const Vehicle = require('../lib/Vehicle.js');

describe('Game', function () {
  var game;

  beforeEach('initialize game', function() {
    game = new Game();
    frog = new Frog();
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
    assert.isArray(game.generateLogs(null));
  });

  it('should generate vehicles', function () {
    assert.isArray(game.generateVehicles(null));
  });

  it('should generate a frog', function () {
    assert.isObject(game.generateFrog(null));
  });

  it('should have a timer that counts down from 40 seconds', function() {
    assert.equal(game.timeRemaining, 40);
    assert.equal(game.currentFrame, 0);

    for (let i = 0; i < 60; i++) {
      game.countDown();
    }

    assert.equal(game.timeRemaining, 39);

  });

  // it('should be over if the frog\'s lives equal 0', function () {
  //   assert.isTrue(game.isGameOver);
  //   assert.isFalse(game.isGameOver);
  // });

  // it('should be over if the frog collides with a vehicle', function () {
  //   assert.isTrue(game.isGameOver);
  //   assert.isFalse(game.isGameOver);
  // });

  // it('should be over if the frog doesn't land on a log, function () {
  //   assert.isTrue(game.isGameOver);
  //   assert.isFalse(game.isGameOver);
  // });

});