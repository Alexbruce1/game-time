var Frog = require('./Frog.js');
var Log = require('./Log.js');
var Vehicle = require('./Vehicle.js');

let logs = [
  new Log(625, 250, 80, 40, '#d2691e', -1, 1),
];

let vehicles = [
  new Vehicle(0, 300, 80, 40, '#999', 1, .2),
];

var frog = new Frog();

var gamePieces = [
  frog
]

gamePieces = gamePieces.concat(logs);
gamePieces = gamePieces.concat(vehicles);

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

function animate() {

  gamePieces.forEach(function (gamePiece, i) {
    gamePiece.draw(context);
    gamePiece.move();
    gamePiece.checkBounds();
    if (gamePiece !== frog && gamePiece.isCollidingWith(frog)) {
      console.log('FUCK')
      game.isGameOver = true;
    }
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