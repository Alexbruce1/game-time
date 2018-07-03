const { assert } = require('chai');
const Game = require('../lib/Game.js');
const Frog = require('../lib/Frog.js');
const Vehicle = require('../lib/Vehicle.js');

describe('Game', function () {
  var game;
  var frog;
  var vehicle;

  beforeEach('initialize game', function() {
    game = new Game();
    frog = new Frog();
    vehicle = new Vehicle(null, -100, 321, 80, 38, 1, 1);
  })

  it('should have a game over property that starts at false and changes to true when 3 lives are used', function () {
    assert.equal(game.isGameOver, false);
    frog.loseALife(game);
    frog.loseALife(game);
    frog.loseALife(game);
    assert.equal(game.isGameOver, true)
  })

  it('should have a property of lives that decreases after a collision or lands on water', function () {
    assert.equal(game.lives, 3);
    frog.loseALife(game);
    assert.equal(game.lives, 2);
    frog.loseALife(game);
    assert.equal(game.lives, 1);

  })

  it('should reset frog\'s location after a life is lost', function () {

  })

  it('should increase score every time the frog moves up', function () {

  })

  it('should generate logs', function() {

  })

  it('should generate vehicles', function() {

  })

  it('should generate a frog', function () {

  })
});