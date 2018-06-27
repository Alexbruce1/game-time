const { assert } = require('chai');
const Frog = require('../lib/Frog.js');

describe('Frog', function () {
  var frog;

  beforeEach('initialize frog', function() {
    frog = new Frog(280, 560, 40, 40, 'rgb(0, 200, 0)');
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
  frog.moveDown();
  assert.equal(frog.y, 600);  
  });

})