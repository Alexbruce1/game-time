const { assert } = require('chai');
const Frog = require('../lib/Frog.js');
const Log = require('../lib/Log.js');
const Image = require('../lib/Image.js');

describe('Frog', function () {
  var frog;

  beforeEach('initialize frog', function() {
    const img = new Image();
    img.src = '../images/Frog.png';
    frog = new Frog(img);
  });

  it('should have properties', function () {
    const expectedObj = {
      image:  { "src": "../images/Frog.png" },
      x: 280,
      y: 560,
      height: 40,
      width: 40,
      onLog: false,
      score: 0,
      lives: 3,
      dx: 0,
      dxv: 0
    };

    assert.deepEqual(frog, expectedObj);
  });

  it('should move left when left arrow key is pressed', function() {
    frog.moveLeft();
    assert.equal(frog.x, 240);
  });

  it('should move up when up arrow key is pressed', function() {
    frog.moveUp();
    assert.equal(frog.y, 520);  
  });

  it('should move right when right arrow key is pressed', function() {
    frog.moveRight();
    assert.equal(frog.x, 320); 
  });

  it('should move down when down arrow kye is pressed', function() {
    frog.moveUp();
    frog.moveDown();
    assert.equal(frog.y, 560);  
  });

  it('should not move off the canvas', function() {
    frog.moveDown();
    assert.equal(frog.y, 560); 

    for (var i = 0; i < 20; i++) {
      frog.moveLeft();
    }; 
    assert.equal(frog.x, 0); 

    for (var i = 0; i < 20; i++) {
      frog.moveUp();
    };  
    assert.equal(frog.y, 0); 

    for (var i = 0; i < 20; i++) {
      frog.moveRight();
    };  
    assert.equal(frog.x, 560);
  });

  it('should be able to hop on a log', function() {
    const log1 = new Log(null, 600, 41, 160, 38, -1, 1.5);
    const log2 = new Log(null, 320, 81, 160, 38, -1, .5);
    const logs = [log1, log2];
    assert.equal(frog.onLog, false);

    frog.x = 600;
    frog.y = 40;
    frog.hopOnLog(logs);

    assert.equal(frog.onLog, true);

  });

  it('should be able to lose a life and start back at the beginning', function () {
    assert.equal(frog.lives, 3);

    frog.loseALife();

    assert.equal(frog.lives, 2);
    assert.equal(frog.x, 280);
    assert.equal(frog.y, 560);
  });

  it('should generate a score based on how far it makes it up the screen', function () {
    assert.equal(frog.score, 0);

    frog.moveUp()
    frog.generateScore();

    assert.equal(frog.score, 10);
  });

});