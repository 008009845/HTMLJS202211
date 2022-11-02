//Single line JavaScript Comment
/*
    Miltiline JavaScript Comment
*/

//Defines variables to access properties of Canvas by ID
var canvas= document.getElementById("canvas");
//Define the drawing context of the Canvas Element
var ctx= canvas.getContext('2d');

//Draw stuff
//Sets up color and outline styles
ctx.fillStyle="rgb(0,0,255)";
ctx.strokeStyle="green";
ctx.linewidth="5";

//Draws a Rectangle fillRect(x,y,width,height)
ctx.fillRect(30,30,200,100);
ctx.strokeRect(300,30,200,100);

//Draw lines
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,250);
ctx.lineTo(800,0);
ctx.stroke();

ctx.strokeStyle="red";

ctx.beginPath();
ctx.moveTo(800,600);
ctx.lineTo(400,350);
ctx.lineTo(0,600);
ctx.stroke();

//Draw a Circle
ctx.beginPath();
ctx.arc(400,300,50, 0, (3 * Math.PI)/2, false);
ctx.lineTo(400,300);
ctx.closePath();
ctx.fill();
ctx.stroke();

//Some Random Shape
ctx.fillStyle="#55ddef";
ctx.strokeStyle="yellow";
ctx.linewidth="2";

ctx.beginPath();
ctx.moveTo(650,100);
ctx.lineTo(700,140);
ctx.lineTo(675,200);
ctx.lineTo(600,140);
ctx.closePath();
ctx.fill();
ctx.stroke();


//Draw an image to the Canvas
var mario=new Image();
mario.src="images/mario.png";

mario.onload=function(){
    ctx.drawImage(mario, 470, 300, 80,80)
}
