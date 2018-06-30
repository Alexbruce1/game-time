var Game = require('./Game.js');

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');

var game = new Game();

let logs = game.generateLogs();
let vehicles = game.generateVehicles();
let frog = game.generateFrog();

function animate() {
  ctx.fillStyle = 'lime';
  ctx.fillRect(0, 0, 600, 40);
  ctx.fillRect(0, 280, 600, 40);
  ctx.fillRect(0, 560, 600, 40);
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 40, 600, 240);

  logs.forEach( log => {
    log.draw(ctx);
    log.move();
    log.checkLogBounds();
  });

  vehicles.forEach( vehicle => {
    vehicle.draw(ctx);
    vehicle.move();
    vehicle.checkVehicleBounds();
    if (vehicle.isCollidingWith(frog)) {
      game.isGameOver = true;
    };
  });
  
  frog.draw(ctx);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (game.isGameOver) {
    // do some shit
  } else {
    animate();
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

document.addEventListener('keydown', function(event) {
  frog.getKeyAndMove(event);
});