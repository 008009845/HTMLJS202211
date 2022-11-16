var canvas=document.getElementById("c");
var ctx=canvas.getContext("2d");

//Draw Square fillRect(x,y,width,height)
ctx.fillStyle(yellow);
ctx.strokeStyle();
ctx.linewidth="5";

ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(600,140);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Draw a circle
ctx.beginPath();
ctx.arc(400,300,50, 0, (3 * Math.PI)/2, false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Draw a line
ctx.stroke=rgb(255,0,0);
ctx.fill();

//Draw a star
ctx.fill(ffff00);
ctx.stroke(rgb(32,32,32));
ctx.linewidth(5);
