var Frog = require('./Frog.js');

var Log = require('./Log.js');

var Vehicle = require('./Vehicle.js');

module.exports = class Game {
  constructor() {
    this.isGameOver = false;
    this.score = 0;
    this.lives = 3;
  }

  drawBackground(ctx) {
    ctx.fillStyle = 'lime';
    ctx.fillRect(0, 0, 600, 40);
    ctx.fillRect(0, 280, 600, 40);
    ctx.fillRect(0, 560, 600, 40);

    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 40, 600, 240);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 320, 600, 240);

    ctx.beginPath();
    ctx.moveTo(0, 359);
    ctx.lineTo(600, 359);
    ctx.strokeStyle = 'white';
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 399);
    ctx.lineTo(600, 399);
    ctx.strokeStyle = 'white';
    ctx.setLineDash([0]);
    ctx.strokeWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 439);
    ctx.lineTo(600, 439);
    ctx.strokeStyle = 'white';
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 479);
    ctx.lineTo(600, 479);
    ctx.strokeStyle = 'white';
    ctx.setLineDash([0]);
    ctx.strokeWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 519);
    ctx.lineTo(600, 519);
    ctx.strokeStyle = 'white';
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();
  }

  generateLogs() {
    let logs = [
      new Log(600, 41, 160, 38, '#d2691e', -1, 1.5),
      new Log(320, 81, 160, 38, '#d2691e', -1, .5),
      new Log(600, 81, 160, 38, '#d2691e', -1, .5),
      new Log(720, 121, 160, 38, '#d2691e', -1, 1.5),
      new Log(320, 121, 160, 38, '#d2691e', -1, 1.5),
      new Log(200, 161, 160, 38, '#d2691e', -1, 1.2),
      new Log(520, 161, 160, 38, '#d2691e', -1, 1.2),
      new Log(800, 201, 160, 38, '#d2691e', -1, 1),
      new Log(520, 241, 160, 38, '#d2691e', -1, 1.2),
      new Log(920, 241, 160, 38, '#d2691e', -1, 1.2),
    ];
    
    return logs;
  }

  generateVehicles() {
    let vehicles = [
      new Vehicle(300, 321, 80, 38, '#999', 1, 1),
      new Vehicle(0, 361, 40, 38, '#999', 1, 2),
      new Vehicle(-150, 401, 60, 38, '#999', -1, 1.5),
      new Vehicle(150, 441, 40, 38, '#999', -1, .8),
      new Vehicle(-400, 481, 80, 38, '#999', 1, 2),
      new Vehicle(80, 521, 60, 38, '#999', 1, 1.2),
    ];

    return vehicles;
  }

  generateFrog() {
    let frog = new Frog();

    return frog;
  }

  // generateScore(frog) {
  //   let scoreUp = parseInt(frog.scoreUp);
  //   let scoreDown = parseInt(frog.scoreDown);
  //   return this.score = scoreUp - scoreDown;
  // }

  resetGame(frog) {
    frog.x = 280;
    frog.y = 560;
    if (this.lives === 0) {
      this.isGameOver = true;
    }
  }

  // generateScore(frog) {
  //   this.score = ((frog.y / 4) - 140) * -1;
  // }
};