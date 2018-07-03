module.exports = class GamePiece {

  constructor(image, x, y, width, height, dx = 0, dxv = 0) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;   // direction: 1 === right, -1 === left, 0 === stop
    this.dxv = dxv; // velocity / speed
  }

  draw(ctx) {
    const {image, x, y, width, height } = this;
    ctx.drawImage(image, x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
  }

  checkBounds() {
    if (this.dx === -1) {
      this.x < -this.width ? this.x = 600 : this.x;
    } else {
      this.x > 600 ? this.x = -this.width : this.x;
    }
  }
};