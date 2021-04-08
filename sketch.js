const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine , box
function setup() {
  createCanvas(800,800);
  myEngine= Engine.create();
  myWorld = myEngine.world;
  var box_features = {
    isStatic : true
  }
  box = Bodies.rectangle(400,400,50,50,box_features)
  World.add(myWorld,box)
  console.log(box)
  
}

function draw() {
  background("black");  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect (box.position.x,box.position.y,50,50)
  
}




