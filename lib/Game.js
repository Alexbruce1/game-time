var Frog = require('./Frog.js');
var Log = require('./Log.js');
var Vehicle = require('./Vehicle.js');
// var score = Frog.totalScore;

// var score = scoreUp - scoreDown;

module.exports = class Game {
  constructor() {
    this.isGameOver = false;
    this.score = 0;
  }

  generateLogs() {
    let logs = [
      new Log(600, 41, 80, 38, '#d2691e', -1, 1),
      new Log(650, 81, 100, 38, '#d2691e', -1, .5),
      new Log(700, 121, 70, 38, '#d2691e', -1, .8),
      new Log(750, 161, 95, 38, '#d2691e', -1, 1.2),
      new Log(800, 201, 105, 38, '#d2691e', -1, 1.2),
      new Log(650, 241, 85, 38, '#d2691e', -1, 1.2),
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
}