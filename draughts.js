var Draughts = {};

var canvas;
var ctx;
var elements = [];


Draughts.initialize = function() {
  initCanvas();
  initBoard();
  drawBoard();
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

function drawBoard() {

    // Render elements.
    elements.forEach(function (element) {
      ctx.fillStyle = element.colour;
      ctx.fillRect(element.left, element.top, element.width, element.height);
  });
};
