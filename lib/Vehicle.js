var GamePiece = require('./GamePiece.js');

module.exports = class Vehicle extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(x, y, height, width, color);
    this.dx = dx || 1;
    this.dxv = dxv || .3;
  }
  move() {
    this.x += this.dx * this.dxv;
  }
}