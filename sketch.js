
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var engine,world,object;
var ball;

function setup() {
  createCanvas(400,400);
///creating angry bird universe
  engine=Engine.create();
  //angry bird world

  world=engine.world;

var options={

  isStatic:true
}


  ///create Object 
  object=Bodies.rectangle(200,370,400,10,options); 
  World.add(world,object); 
  console.log(object);
  var ball_options={
    restitution:2
  }
  ball=Bodies.circle(200,100,30,ball_options);
  World.add(world,ball); 

}

function draw() {
  background(0); 

  Engine.update(engine);
rectMode(CENTER);
  rect(object.position.x,object.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,30);
}