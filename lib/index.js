var Game = require('./Game.js');
var scoreInDom = document.querySelector('#score');
var livesCounter = document.querySelector('#lives');
var timer = document.querySelector('#timer');
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');

var game = new Game();

let logs = game.generateLogs();
let vehicles = game.generateVehicles();
let frog = game.generateFrog();

function animate() {
  game.drawBackground(ctx);

  logs.forEach( log => {
    log.draw(ctx);
    log.move();
    // log.checkLogBounds();
    log.checkBounds();
  });

  vehicles.forEach( vehicle => {
    vehicle.draw(ctx);
    vehicle.move();
    // vehicle.checkVehicleBounds();
    vehicle.checkBounds();
    if (vehicle.isCollidingWith(frog)) {
      frog.loseALife(game);
    };
  });
  
  frog.draw(ctx);
  frog.hopOnLog(logs);
  scoreInDom.innerText = `Score: ${frog.score}`;

  if (game.lives > 0) {
    livesCounter.innerText = `Lives Remaining: ${game.lives - 1}`;
  } else {
    livesCounter.innerText = `GAME OVER`;
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

