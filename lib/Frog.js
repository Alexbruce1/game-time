var GamePiece = require('./GamePiece.js');

module.exports = class Frog extends GamePiece {
  constructor(image, x, y, height, width, dx, dxv) {
    super(image, x, y, height, width, dx, dxv);
    this.x = 280,
    this.y = 560,
    this.height = 40,
    this.width = 40,
    this.onLog = false;
    this.score = 0;
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
      this.x >= log.x && 
      this.x <= log.x + log.width - 40
    );

    if (logUnderFrog) {
      this.onLog = true;
      this.x -= logUnderFrog.dxv;
    } else {
      this.onLog = false;
    }
  }

  loseALife(game) {
    game.lives--;
    game.resetFrog(this);
  }

  generateScore() {
    const frogPosition = ((this.y / 4) - 140) * -1;
    frogPosition > this.score ? this.score = frogPosition : this.score = this.score;
  }
};