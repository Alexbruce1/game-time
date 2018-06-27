var GamePiece = require('./GamePiece.js');

module.exports = class Log extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    this.dx = -1;   // direction: 1 === right, -1 === left, 0 === stop
    this.dxv = .5; // velocity / speed
  }

  move() {
    this.x += this.dx * this.dxv;
  }

}