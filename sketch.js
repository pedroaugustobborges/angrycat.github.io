const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backGroundImg;

function preload() {
 backGroundImg = loadImage("sprites/bg.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(1200,400);

}

function draw() {
  Engine.update(engine);

  background(backGroundImg);
 
}


