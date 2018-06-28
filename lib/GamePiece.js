module.exports = class GamePiece {

  constructor(x, y, width, height, color, dx = 0, dxv = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = dx;   // direction: 1 === right, -1 === left, 0 === stop
    this.dxv = dxv; // velocity / speed
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }

  draw(ctx) {
    const { x, y, width, height, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
  }

  checkBounds() {
    this.x < -this.width ? this.x = 600 : this.x;
  }
}