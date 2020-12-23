const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var t_engine, t_world;


function setup() {
  createCanvas(400,400);

  t_engine = Engine.create();
  t_world = t_engine.world;

  var options = {
    isStatic : true
  }
  ob1 = Bodies.rectangle(200,390,400,10, options);
  World.add(t_world , ob1);
  console.log(ob1.position.y);

  var balloptions = {
    restitution : 1
  }

  ball = Bodies.circle(200,200,15,balloptions);
  World.add(t_world, ball);
  
}
function draw() {
  background("black"); 
  
  Engine.update(t_engine);

  rectMode(CENTER);
  rect(ob1.position.x , ob1.position.y, 400, 10);
  
  ellipse(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
}