var GamePiece = require('./GamePiece.js');

module.exports = class Frog extends GamePiece {
  constructor(image, x, y, width, height, dx, dxv) {
    super(image, x, y, width, height, dx, dxv);
    this.x = 280,
    this.y = 560,
    this.width = 40,
    this.height = 40,
    this.onLog = false;
    this.score = 0;
    this.lives = 3;
  }

  getKeyAndMove(e) {
    switch (e.keyCode) {
    case 37:
      this.moveLeft();
      break;
    case 38:
      this.moveUp();
      this.generateScore();
      break;
    case 39:
      this.moveRight();
      break;
    case 40:
      this.moveDown();
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
    const logUnderFrog = logs.find(log => 
      log.y - 1 === this.y && 
      this.x >= log.x - 20 && 
      this.x <= log.x + log.width - 20
    );

    if (logUnderFrog) {
      this.onLog = true;
      this.x -= logUnderFrog.dxv;
    } else {
      this.onLog = false;
    }
  }

  loseALife() {
    this.lives--;
    this.x = 280;
    this.y = 560;
  }

  generateScore() {
    const frogPosition = ((this.y / 4) - 140) * -1;

    if (frogPosition > this.score) {
      this.score = frogPosition;
    } else {
      this.score = this.score;
    }
  }
  
};