var GamePiece = require('./GamePiece.js');
var leftImage = document.getElementById('left-car-image');
var rightImage = document.getElementById('right-car-image');

module.exports = class Vehicle extends GamePiece {
  constructor(x, y, width, height, color, dx, dxv) {
    super(x, y, width, height, color, dx, dxv);
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width ||
      this.y > object.y + object.height
    )
  };


  drawCar(ctx) {
    if (this.dx > 0) {
      ctx.drawImage(rightImage, this.x, this.y, this.width, this.height);
    } else {
      ctx.drawImage(leftImage, this.x, this.y, this.width, this.height);
    }
  }
};
