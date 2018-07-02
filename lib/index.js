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

game.loadStartScreen(ctx);

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
    }
  });
  
  frog.draw(ctx);
  frog.hopOnLog(logs);
  scoreInDom.innerText = `Score: ${frog.score}`;

  if (game.lives > 0) {
    livesCounter.innerText = `Lives Remaining: ${game.lives - 1}`;
  }

  if (frog.y < 280 && frog.y > 0 && !frog.onLog) {
    frog.loseALife(game);
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (game.isGameOver) {
    ctx.textAlign = "center";
    ctx.fillStyle = 'red';
    ctx.font = '95px VT323';
    ctx.fillText('GAME OVER', 300, 200);
    ctx.font = '55px VT323';
    ctx.fillStyle = 'lime';
    ctx.fillText(`${scoreInDom.innerText.toUpperCase()}`, 300, 265);
    ctx.font = '35px VT323';
    ctx.fillText('HIT SPACEBAR TO START NEW GAME', 300, 325);
  } else {
    animate();
  }
  
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    location.reload();
  } else if (event.keyCode === 83) {
    requestAnimationFrame(gameLoop);
  } else {
    frog.getKeyAndMove(event);
  }
});


