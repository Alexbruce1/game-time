var GamePiece = require('./GamePiece.js');

module.exports = class Vehicle extends GamePiece {
  constructor(x, y, width, height, color, dx, dxv) {
    super(x, y, width, height, color, dx, dxv);
  }

  move() {
    this.x += this.dx * this.dxv;
  }
}