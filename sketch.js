
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,ball,dustbin,dustbinImg,paperImg;

function preload(){

dustbinImg = loadImage("dustbingreen.png");
paperImg = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball = new Ball(100,640,50);

 
 ground = new Ground(400,680,800,20);
 
 leftBar = new Dustbin(550,620,30,100);
 rightBar = new Dustbin(650,620,30,100);
 bottomBar = new Dustbin(610,660,100,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 
  ground.display();
  leftBar.display();
  rightBar.display();
  bottomBar.display();
 
  
  ball.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{ x:29,y: -65})

}

}

  