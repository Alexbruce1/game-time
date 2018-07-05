const Game = require('./Game.js');

const scoreInDom = document.querySelector('#score');
const livesCounter = document.querySelector('#lives');
const timer = document.querySelector('#timer');
const canvas = document.querySelector('#game');
const logImg = document.getElementById('log-image');
const turtlesImg = document.getElementById('turtles-image');
const leftCarImg = document.getElementById('left-car-image');
const rightCarImg = document.getElementById('right-car-image');
const audio = document.getElementById('audio');

const frogImg = new Image();

frogImg.src = '../images/Frog.png';

const ctx = canvas.getContext('2d');

let color;
let message;

const game = new Game();
const logs = game.generateLogs(logImg, turtlesImg);
const vehicles = game.generateVehicles(rightCarImg, leftCarImg);
const frog = game.generateFrog(frogImg);

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
    event.preventDefault();
    location.reload();
  } else if (event.keyCode === 70) {
    requestAnimationFrame(gameLoop);
    audio.play();
  } else {
    event.preventDefault();
    frog.getKeyAndMove(event);
  }
});