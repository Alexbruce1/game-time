var GamePiece = require('./GamePiece.js');

module.exports = class Vehicle extends GamePiece {
  constructor(x, y, width, height, color, dx, dxv) {
    super(x, y, width, height, color, dx, dxv);
  }

  checkVehicleBounds() {
    this.x > 600 ? this.x = -this.width : this.x;
  }
}


