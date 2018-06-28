var GamePiece = require('./GamePiece.js');

module.exports = class Log extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(x, y, height, width, color, dx, dxv);
  }

  generateLogs() {
    const logs = [];
    var posX = 625;
    var posY = 250;

    for (var i = 0; i < 4; i++) {
      let log = new Log (posX, posY, 80, 30, '#d2691e', -1, 1);
      posX += 160;
      posY -= 50;
      logs.push(log);
    }
    return logs;
  }

}