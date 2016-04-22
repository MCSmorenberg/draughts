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
  var white = "#ffffff";
  var black = "#000000";

  var blackPiece1 = new Piece(37, 37, black);
  pieces.push(blackPiece1);
  var blackPiece2 = new Piece(187, 37, black);
  pieces.push(blackPiece2);
  var blackPiece3 = new Piece(337, 37, black);
  pieces.push(blackPiece3);
  var blackPiece4 = new Piece(487, 37, black);
  pieces.push(blackPiece4);
  var blackPiece5 = new Piece(637, 37, black);
  pieces.push(blackPiece5);
  var blackPiece6 = new Piece(112, 112, black);
  pieces.push(blackPiece6);
  var blackPiece7 = new Piece(262, 112, black);
  pieces.push(blackPiece7);
  var blackPiece8 = new Piece(412, 112, black);
  pieces.push(blackPiece8);
  var blackPiece9 = new Piece(562, 112, black);
  pieces.push(blackPiece9);
  var blackPiece10 = new Piece(712, 112, black);
  pieces.push(blackPiece10);
  var blackPiece11 = new Piece(37, 187, black);
  pieces.push(blackPiece11);
  var blackPiece12 = new Piece(187, 187, black);
  pieces.push(blackPiece12);
  var blackPiece13 = new Piece(337, 187, black);
  pieces.push(blackPiece13);
  var blackPiece14 = new Piece(487, 187, black);
  pieces.push(blackPiece14);
  var blackPiece15 = new Piece(637, 187, black);
  pieces.push(blackPiece15);
  var blackPiece16 = new Piece(112, 262, black);
  pieces.push(blackPiece16);
  var blackPiece17 = new Piece(262, 262, black);
  pieces.push(blackPiece17);
  var blackPiece18 = new Piece(412, 262, black);
  pieces.push(blackPiece18);
  var blackPiece19 = new Piece(562, 262, black);
  pieces.push(blackPiece19);
  var blackPiece20 = new Piece(712, 262, black);
  pieces.push(blackPiece20);

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
  //These properties may go in the ctx.arc function
  ctx.beginPath();
  ctx.fillStyle = piece.color;
  ctx.strokeStyle = '#696969';
  ctx.lineWidth = 2;
  //        x        y    rad sAng   eAng
  ctx.arc(piece.x, piece.y, 33, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
