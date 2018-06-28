var GamePiece = require('./GamePiece.js');

module.exports = class Vehicle extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(x, y, height, width, color, dx, dxv);
  }

  move() {
    this.x += this.dx * this.dxv;
  }
}