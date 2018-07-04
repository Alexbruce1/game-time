var GamePiece = require('./GamePiece.js');

module.exports = class Vehicle extends GamePiece {
  constructor(image, x, y, width, height, dx, dxv) {
    super(image, x, y, width, height, dx, dxv);
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width ||
      this.y > object.y + object.height
    );
  }
};
