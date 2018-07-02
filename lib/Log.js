var GamePiece = require('./GamePiece.js');

module.exports = class Log extends GamePiece {
  constructor(x, y, width, height, color, dx, dxv) {
    super(x, y, width, height, color, dx, dxv);
  }
};