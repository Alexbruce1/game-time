var GamePiece = require('./GamePiece.js');
var Frog = require('./Frog.js');

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');


var firstBlock = new GamePiece(50, 50, 10, 10, 'rgb(200, 0, 0)');
var secondBlock = new GamePiece(75, 50, 10, 10, 'rgb(0, 200, 0)');
var frog = new Frog(270, 540, 60, 60, 'rgb(0, 200, 0)')

var isGameOver = false;

var blocks = [
  firstBlock,
  secondBlock,
  frog
];

function animate() {
  blocks.forEach(function (block, i) {
    block.draw(context);
    block.move();

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

canvas.addEventListener('click', function (event) {
  var newBlock = new GamePiece(event.layerX, event.layerY, 10, 10, 'rgb(0, 0, 200)', );
  blocks.push(newBlock);
  console.log(blocks);
});