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


  draw(ctx) {
    const { x, y, width, height, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
  }
}