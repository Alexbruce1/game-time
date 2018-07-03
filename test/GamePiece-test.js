const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function () {
  var gamePiece;

  beforeEach('initialize frog', function() {
    gamePiece = new GamePiece(null, 50, 50, 10, 10, 1, .5);
  });

  it('should have properties', function () {
    const expectedObj = {
      image: null,
      x: 50,
      y: 50,
      width: 10,
      height: 10,
      dx: 1,
      dxv: .5
    };

    assert.deepEqual(gamePiece, expectedObj);
  });

  it('should move across the screen', function () {
    gamePiece.move();

    assert.equal(gamePiece.x, 50.5);

    gamePiece.move();
    gamePiece.move();
    gamePiece.move();

    assert.equal(gamePiece.x, 52);
  });

  it('should start back at the right side when it reaches the left side', function () {
    gamePiece.dx = -1;
    assert.equal(gamePiece.x, 50);

    gamePiece.checkBounds();
    
    assert.equal(gamePiece.x, 50);

    gamePiece.x = -11;
    gamePiece.checkBounds();

    assert.equal(gamePiece.x, 600);
  });

  it('should start back at the left side when it reaches the right side', function () {
    assert.equal(gamePiece.x, 50);

    gamePiece.checkBounds();

    assert.equal(gamePiece.x, 50);

    gamePiece.x = 611;
    gamePiece.checkBounds();

    assert.equal(gamePiece.x, -10);
  });
})