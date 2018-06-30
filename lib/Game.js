var Frog = require('./Frog.js');
var Log = require('./Log.js');
var Vehicle = require('./Vehicle.js');
// var score = Frog.totalScore;

// var score = scoreUp - scoreDown;

module.exports = class Game {
  constructor() {
    this.isGameOver = false;
    this.score = 0;
    this.lives = 3;
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
      new Vehicle(-100, 321, 80, 38, '#999', 1, 1),
      new Vehicle(0, 361, 40, 38, '#999', 1, .2),
      new Vehicle(-150, 401, 60, 38, '#999', 1, 1.5),
      new Vehicle(-225, 441, 40, 38, '#999', 1, .8),
      new Vehicle(-400, 481, 80, 38, '#999', 1, 1.2),
      new Vehicle(-300, 521, 60, 38, '#999', 1, 1.2),
    ];
    return vehicles;
  }

  generateFrog() {
    let frog = new Frog();
    return frog;
  }

  generateScore(frog) {
    let scoreUp = parseInt(frog.scoreUp);
    let scoreDown = parseInt(frog.scoreDown);
    return this.score = scoreUp - scoreDown;
  }
  resetGame(frog) {
    frog.x = 280;
    frog.y = 560;
    if (this.lives < 0) {
      this.isGameOver = true;
  }
}