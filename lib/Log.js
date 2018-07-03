var GamePiece = require('./GamePiece.js');
var image = document.getElementById('log-image');


module.exports = class Log extends GamePiece {
  constructor(x, y, width, height, color, dx, dxv) {
    super(x, y, width, height, color, dx, dxv);
  }

  drawLog(ctx) {
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  }
};