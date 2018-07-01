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

  })

  it('should be able to lose 3 lives', function () {
    
  })

});