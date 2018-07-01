var GamePiece = require('./GamePiece.js');

module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, dx, dxv) {
    super(280, 560, 40, 40, 'rgb(0, 200, 0)');
    this.scoreUp = 0;
    this.scoreDown = 0;
    this.totalScore = this.scoreUp - this.scoreDown;
    this.onLog = false;
  }

  getKeyAndMove(e) {
    switch (e.keyCode) {
      case 37:
        this.moveLeft();
        break;
      case 38:
        this.moveUp();
        this.scoreUp++;
        console.log('Up = ' + this.scoreUp);
        break;
      case 39:
        this.moveRight();
        break;
      case 40:
        this.moveDown();
        this.scoreDown++;
        console.log('Down = ' + this.scoreDown);
        break;  
      default:
        break;
    }
  }

  moveLeft() {
    this.x > 0 ? this.x -= 40 : this.x = 0;
  }

  moveUp() {
    this.y > 0 ? this.y -= 40 : this.y = 0;
  }
  
  moveRight() {
    this.x < 560 ? this.x += 40 : this.x = 560;
  }
  
  moveDown() {
    this.y < 560 ? this.y += 40 : this.y = 560;
  }

  hopOnLog(logs) {
    const logUnderFrog = logs.find(log => log.y - 1 === this.y && this.x >= log.x 
      && this.x <= log.x + log.width - 40);
    if (logUnderFrog) {
      this.onLog = true;
      this.x -= logUnderFrog.dxv;
    } else {
      this.onLog = false;
    }
  }

  loseALife(game) {
    game.lives--;
    game.resetGame(this);
  }

}