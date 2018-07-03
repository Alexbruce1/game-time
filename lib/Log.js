var GamePiece = require('./GamePiece.js');

module.exports = class Log extends GamePiece {
  constructor(image, x, y, width, height, dx, dxv) {
    super(image, x, y, width, height, dx, dxv);
  }
};