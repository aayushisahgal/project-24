
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,plane,stone,rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand8,sand9,sand10,sand11,sand12,sand13,sand14,sand15;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new Hammer(300,300,100,50);
	plane=new Plane(400,490,1000,30);
	stone=new Stone(200,300,50,50);
	rubber=new Rubber(300,200,40);
	sand1=new Sand(355,255,10);
	sand2=new Sand(365,255,10);
	sand3=new Sand(375,275,10);
	sand4=new Sand(385,285,10);
	sand5=new Sand(395,295,10);
	sand6=new Sand(400,255,10);
	sand7=new Sand(410,255,10);
	sand8=new Sand(420,255,10);
	sand9=new Sand(430,255,10);
	sand10=new Sand(440,255,10);
	sand11=new Sand(450,255,10);
	sand12=new Sand(460,255,10);
	sand13=new Sand(470,255,10);
	sand14=new Sand(415,255,10);
	sand15=new Sand(423,255,10);
	iron= new Iron(700,300,120,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('red');
  hammer1.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();
  iron.display();
  drawSprites();
 
}



