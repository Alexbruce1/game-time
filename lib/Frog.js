var GamePiece = require('./GamePiece.js');

module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, dx = .1) {
    super(x, y, height, width, color, dx = .1);
    this.keyPress = false;

  }
  move() {
    switch (key) {
      case value:
      
      break;
      
      default:
      break;
    }
  }
}
canvas.addEventListener('keydown', function() {
  this.isMoving = true;
  frog.move();
});