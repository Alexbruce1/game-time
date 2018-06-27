var GamePiece = require('./GamePiece.js');

module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
  }

  getKeyAndMove(e) {
    switch (e.keyCode) {
      case 37:
        this.moveLeft();
        break;
      case 38:
        this.moveUp();
        break;
      case 39:
        this.moveRight();
        break;
      case 40:
        this.moveDown();
        break;  
      default:
        break;
    }
  }

  moveLeft() {
    this.x > 0 ? this.x -= this.width : this.x = 0;
  }

  moveUp() {
    this.y > 0 ? this.y -= this.height : this.y = 0;
  }

  moveRight() {
    this.x < 560 ? this.x += this.width : this.x = 560;
  }

  moveDown() {
    this.y < 560 ? this.y += this.height : this.y = 560;
  }

}