var Draughts = {};

var canvas;
var ctx;
var elements = [];
var pieces = [];

var Piece = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = 75;
  this.height = 75;
  this.color = color;
};

Draughts.initialize = function() {
  initCanvas();
  initBoard();
  //initPieces();
  drawBoard();
  initPieces();
};

Draughts.draw = function() {
};

Draughts.update = function() {
};

Draughts.initialize();



// Game interaction
function initCanvas() {
  canvas = document.getElementById('board'),
  ctx = canvas.getContext('2d'),
  //Board boxes
  elements = [];
};

function initBoard() {

  var fillBrown = "#7a5230";
  var fillBeige = "#f5f5dc";
  var flipflop = true;
  var i, j;

  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      if (flipflop) {
        //Add brown block
        elements.push({
          colour: fillBrown,
          width: 75,
          height: 75,
          top: i * 75,
          left: j * 75
        });
      }
      else {
        //Print beige
        elements.push({
          colour: fillBeige,
          width: 75,
          height: 75,
          top: i * 75,
          left: j * 75
        });
      }
      //Flip over our flipflop
      //If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.
      flipflop = flipflop ? false : true;
    }
    flipflop = flipflop ? false : true;
  }
};

function initPieces() {
  var blackPiece1 = new Piece(37, 37, 'black');
  pieces.push(blackPiece1);

  // Draw the pieces
  pieces.forEach(function(piece) {
    drawPiece(piece);
  })
};

function drawBoard() {

    // Render elements.
    elements.forEach(function (element) {
      ctx.fillStyle = element.colour;
      ctx.fillRect(element.left, element.top, element.width, element.height);
  });
};

function drawPiece(piece) {

  ctx.beginPath();
  ctx.fillStyle = piece.color;
  //         x        y    rad sAng   eAng      antiC   line    fill
  ctx.arc(piece.x, piece.y, 30, 0, 2 * Math.PI);
  ctx.fill();
  //ctx.closePath();

  // ctx.strokeStyle = '#003300';

}
