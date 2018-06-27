var GamePiece = require('./GamePiece.js');

module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, dx = .1) {
    super(x, y, height, width, color, dx = .1);
    this.keyPress = false;
    this.dxv = 0;
  }

  getKeyAndMove(e) {
    console.log(e.keyCode);
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
    this.x -= this.width;
  }

  moveUp() {
    this.y -= this.height;
  }

  moveRight() {
    this.x += this.width;
  }

  moveDown() {
    this.y += this.height;
  }

}