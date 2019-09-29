
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,300);
ctx.lineTo(600,300);
ctx.stroke();

function startGame() {
  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("myCanvas"),
  start : function() {
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}