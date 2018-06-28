// var game = require('./Game.js');
// var GamePiece = require('./GamePiece.js');
var Frog = require('./Frog.js');
var Log = require('./Log.js');

// var firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)');
// var secondBlock = new GamePiece(75, 50, 10, 10, 'rgb(0, 200, 0)');
// var log = new Log(600, 250, 80, 30, '#d2691e', -1, 1);
// var log2 = new Log(750, 250, 80, 30, '#d2691e', -1, 1);
var log = new Log();
// var log = new Log(600, 250, 80, 30, '#d2691e', -1, .5);
var frog = new Frog();
var logs = log.generateLogs();


var gamePieces = [
  frog
]

gamePieces = gamePieces.concat(logs);

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

function animate() {
  gamePieces.forEach(function (gamePiece, i) {
    gamePiece.draw(context);
    gamePiece.move();
    gamePiece.checkBounds();

    gamePieces.forEach(function (gamePiece2, j) {
      if (i !== j && gamePiece.isCollidingWith(gamePiece2)) {
        console.log('FUCK')
        game.isGameOver = true;
      }
    })
  });
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (game.isGameOver) {
    // do some shit
  } else {
    animate();
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

// canvas.addEventListener('click', function (event) {
//   var newBlock = new GamePiece(event.layerX, event.layerY, 10, 10, 'rgb(0, 0, 200)', );
//   blocks.push(newBlock);
//   console.log(blocks);
// });

document.addEventListener('keydown', function(event) {
  frog.getKeyAndMove(event);
});