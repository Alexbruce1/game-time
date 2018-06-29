var Frog = require('./Frog.js');
var Log = require('./Log.js');
var Vehicle = require('./Vehicle.js');

let logs = [
  new Log(600, 55, 80, 40, '#d2691e', -1, 1),
  new Log(650, 105, 100, 40, '#d2691e', -1, .5),
  new Log(700, 155, 70, 40, '#d2691e', -1, .8),
  new Log(750, 205, 95, 40, '#d2691e', -1, 1.2),
];

let vehicles = [
  new Vehicle(-100, 305, 80, 40, '#999', 1, 1),
  new Vehicle(0, 355, 40, 40, '#999', 1, .2),
  new Vehicle(-150, 405, 60, 40, '#999', 1, 1.5),
  new Vehicle(-225, 455, 40, 40, '#999', 1, .8),
  new Vehicle(-400, 505, 80, 40, '#999', 1, 1.2),
];

let frog = new Frog();

var gamePieces = [
  frog
]

gamePieces = gamePieces.concat(logs);
gamePieces = gamePieces.concat(vehicles);

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

function animate() {
  context.fillStyle = 'lime';
  context.fillRect(0, 0, 600, 40);
  context.fillRect(0, 280, 600, 40);
  context.fillRect(0, 560, 600, 40);
  context.fillStyle = 'blue';
  context.fillRect(0, 40, 600, 240);


  gamePieces.forEach(function (gamePiece, i) {
    // gamePiece.draw(context);
    gamePiece.move();
  });
  logs.forEach( log => {
    log.draw(context);
    log.checkLogBounds()
    if (log.isNotUnder(frog) && frog.y <= 245) {
      console.log('Not on log')
      // game.isGameOver = true;
    }
  });
  vehicles.forEach( vehicle => {
    vehicle.draw(context);
    vehicle.checkVehicleBounds()
    if (vehicle.isCollidingWith(frog)) {
      game.isGameOver = true;
    }
  });
  frog.draw(context);
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