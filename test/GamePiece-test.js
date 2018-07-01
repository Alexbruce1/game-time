const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function () {

  it('should have properties', function () {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    const expectedObj = {
      x: 50,
      y: 50,
      height: 10,
      width: 10,
      color: 'rgb(250, 0, 0)',
      dx: 1,
      dxv: 0
    };

    assert.deepEqual(gamePiece, expectedObj);
  });

  it('should start back at the right side when it reaches the left side', function () {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', -1);
    assert.equal(gamePiece.x, 50);
    gamePiece.checkBounds();
    assert.equal(gamePiece.x, 50);
    gamePiece.x = -81;
    gamePiece.checkBounds(gamePiece.x, 600);
  });

  it('should start back at the left side when it reaches the right side', function () {
    const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
    assert.equal(gamePiece.x, 50);
    gamePiece.checkBounds();
    assert.equal(gamePiece.x, 50);
    gamePiece.x = 601;
    gamePiece.checkBounds(gamePiece.x, 520);
  });

  // it('should draw to the canvas', function() {
  //   const gamePiece = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);

  //   gamePiece.draw('2d');

  //   assert.equal(gamePiece, );

  // })

})