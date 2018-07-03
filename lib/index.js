var Game = require('./Game.js');
var scoreInDom = document.querySelector('#score');
var livesCounter = document.querySelector('#lives');
var timer = document.querySelector('#timer');
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var currentFrame = 0;
var timeRemaining = 40;

var game = new Game();

let logs = game.generateLogs();
let vehicles = game.generateVehicles();
let frog = game.generateFrog(ctx);

game.loadStartScreen(ctx);

function animate() {
  game.drawBackground(ctx);

  logs.forEach( log => {
    log.draw(ctx);
    log.move();
    log.checkBounds();
  });

  vehicles.forEach( vehicle => {
    vehicle.draw(ctx);
    vehicle.move();
    vehicle.checkBounds();
    if (vehicle.isCollidingWith(frog)) {
      frog.loseALife(game);
    }
  });
  
  game.generateFrog(ctx);
  frog.drawFrog(ctx);
  frog.draw(ctx);
  frog.hopOnLog(logs);
  scoreInDom.innerText = `Score: ${frog.score}`;
  timer.innerText = `Time: ${timeRemaining} sec`;

  if (game.lives > 0) {
    livesCounter.innerText = `Lives Remaining: ${game.lives - 1}`;
  }

  if (frog.y < 280 && frog.y > 0 && !frog.onLog) {
    frog.loseALife(game);
  }

  if (currentFrame === 60) {
    currentFrame = 0;
    timeRemaining--;
  } 

  timeRemaining < 0 || game.lives === 0 ? game.isGameOver = true : game.isGameOver = false;
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
    currentFrame++;
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


