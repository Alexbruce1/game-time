// var game = require('./Game.js');
// var GamePiece = require('./GamePiece.js');
var Frog = require('./Frog.js');
var Log = require('./Log.js');

// var firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)');
// var secondBlock = new GamePiece(75, 50, 10, 10, 'rgb(0, 200, 0)');
var frog = new Frog(280, 560, 40, 40, 'rgb(0, 200, 0)');
var log = new Log(600, 250, 80, 20, '#d2691e');

var blocks = [
  log,
  frog
];

var isGameOver = false;

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

function animate() {
  blocks.forEach(function (block, i) {
    block.draw(context);
    log.move();

    blocks.forEach(function (block2, j) {
      if (i !== j && block.isCollidingWith(block2)) {
        console.log('FUCK')
        isGameOver = true;
      }
    })
  });
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (isGameOver) {
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