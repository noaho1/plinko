//namespacing - giving short name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ball1;


 
function setup() {
  createCanvas(1200,800);

  //create engine
  engine = Engine.create();

  //create world using engine
  world = engine.world;

  ball = new Ball(400,100,20,"green",false);
  ball1 = new Ball(400,150,20,"gray",true);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  ball.display();
  ball1.display();

}