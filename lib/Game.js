var Frog = require('./Frog.js');
var Log = require('./Log.js');
var Vehicle = require('./Vehicle.js');

module.exports = class Game {
  constructor() {
    this.isGameOver = false;
  }

  loadStartScreen(ctx) {
    const logo = new Image();
    logo.src = 'images/frogger-logo.png';
    logo.onload = () => {ctx.drawImage(logo, 150, 100, 300, 95)};
    ctx.textAlign = "center";
    ctx.fillStyle = 'red';
    ctx.font = '35px VT323';
    ctx.fillText('USE ARROW KEYS TO MOVE THE FROG', 300, 265);
    const img = new Image();
    img.src = 'images/keyboard.svg';
    img.onload = () => {ctx.drawImage(img, 250, 280, 100, 100)};
    ctx.font = '55px VT323';
    ctx.fillText('HIT F TO START', 300, 425);
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

  generateLogs(img) {
    let logs = [
      new Log(img, 600, 41, 160, 38, -1, 1.5),
      new Log(img, 320, 81, 160, 38, -1, .5),
      new Log(img, 600, 81, 160, 38, -1, .5),
      new Log(img, 720, 121, 160, 38, -1, 1.5),
      new Log(img, 320, 121, 160, 38, -1, 1.5),
      new Log(img, 200, 161, 160, 38, -1, 1.2),
      new Log(img, 520, 161, 160, 38, -1, 1.2),
      new Log(img, 800, 201, 160, 38, -1, 1),
      new Log(img, 520, 241, 160, 38, -1, 1.2),
      new Log(img, 920, 241, 160, 38, -1, 1.2)
    ];
    
    return logs;
  }

  generateVehicles(img1, img2) {
    let vehicles = [
      new Vehicle(img1, 300, 321, 80, 38, 1, 1),
      new Vehicle(img1, 0, 361, 40, 38, 1, 2),
      new Vehicle(img2, -150, 401, 60, 38, -1, 1.5),
      new Vehicle(img2, 150, 441, 40, 38, -1, .8),
      new Vehicle(img1, -400, 481, 80, 38, 1, 2),
      new Vehicle(img1, 80, 521, 60, 38, 1, 1.2)
    ];

    return vehicles;
  }

  generateFrog(image) {
    let frog = new Frog(image);
    return frog;
  }
};