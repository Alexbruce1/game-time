var Game = require('./Game.js');

var scoreInDom = document.querySelector('#score');
var livesCounter = document.querySelector('#lives');
var timer = document.querySelector('#timer');
var canvas = document.querySelector('#game');
var logImg = document.getElementById('log-image');
var leftCarImg = document.getElementById('left-car-image');
var rightCarImg = document.getElementById('right-car-image');
var frogImg = document.getElementById('frog-image');

var ctx = canvas.getContext('2d');

let color;
let message;

var game = new Game();
let logs = game.generateLogs(logImg);
let vehicles = game.generateVehicles(rightCarImg, leftCarImg);
let frog = game.generateFrog(frogImg);

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
      frog.loseALife();
    }
  });
  
  frog.draw(ctx);
  frog.hopOnLog(logs);
  scoreInDom.innerText = `Score: ${frog.score}`;
  timer.innerText = `Time: ${game.timeRemaining} sec`;

  if (frog.lives > 0) {
    livesCounter.innerText = `Lives Remaining: ${frog.lives - 1}`;
  }

  if (frog.y < 280 && frog.y > 0 && !frog.onLog) {
    frog.loseALife();
  }

  if (game.timeRemaining <= 0 || frog.lives === 0) {
    game.isGameOver = true;
    color = 'red';
    message = 'GAME OVER';
  } else if (frog.score === 140) {
    game.isGameOver = true;
    color = 'lime';
    message = 'YOU WON!';
  } else {
    game.isGameOver = false;
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (game.isGameOver) {
    ctx.textAlign = "center";
    ctx.fillStyle = color;
    ctx.font = '95px VT323';
    ctx.fillText(message, 300, 200);
    ctx.font = '55px VT323';
    ctx.fillStyle = 'lime';
    ctx.fillText(`${scoreInDom.innerText.toUpperCase()}`, 300, 265);
    ctx.font = '35px VT323';
    ctx.fillText('HIT SPACEBAR TO START NEW GAME', 300, 325);
  } else {
    animate();
    game.countDown();
  }

  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    location.reload();
  } else if (event.keyCode === 70) {
    requestAnimationFrame(gameLoop);
  } else {
    frog.getKeyAndMove(event);
  }
});


