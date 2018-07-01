var Game = require('./Game.js');
var scoreInDom = document.querySelector('#score');
var livesCounter = document.querySelector('#lives')
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
  ctx.fillStyle = 'white';
  ctx.fillRect(20, 359, 80, 2);
  ctx.fillRect(140, 359, 80, 2);
  ctx.fillRect(260, 359, 80, 2);
  ctx.fillRect(380, 359, 80, 2);
  ctx.fillRect(500, 359, 80, 2);
  ctx.fillRect(20, 399, 80, 2);
  ctx.fillRect(140, 399, 80, 2);
  ctx.fillRect(260, 399, 80, 2);
  ctx.fillRect(380, 399, 80, 2);
  ctx.fillRect(500, 399, 80, 2);
  ctx.fillRect(20, 439, 80, 2);
  ctx.fillRect(140, 439, 80, 2);
  ctx.fillRect(260, 439, 80, 2);
  ctx.fillRect(380, 439, 80, 2);
  ctx.fillRect(500, 439, 80, 2);
  ctx.fillRect(20, 479, 80, 2);
  ctx.fillRect(140, 479, 80, 2);
  ctx.fillRect(260, 479, 80, 2);
  ctx.fillRect(380, 479, 80, 2);
  ctx.fillRect(500, 479, 80, 2);
  ctx.fillRect(20, 519, 80, 2);
  ctx.fillRect(140, 519, 80, 2);
  ctx.fillRect(260, 519, 80, 2);
  ctx.fillRect(380, 519, 80, 2);
  ctx.fillRect(500, 519, 80, 2);

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
      frog.loseALife(game);
    };
  });
  
  frog.draw(ctx);

  let score = game.generateScore(frog);
  scoreInDom.innerText = `Score: ${score}`;
  frog.hopOnLog(logs);
  // console.log(frog.onLog);

  if (game.lives >= 0) {
    livesCounter.innerText = `Lives: ${game.lives + 1}`
  } else {
    livesCounter.innerText = `GAME OVER`
  }

  if (frog.y < 280 && frog.y > 0 && !frog.onLog) {
    frog.loseALife(game);
  }
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

