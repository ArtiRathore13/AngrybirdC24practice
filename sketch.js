const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Box1,Box2,Box3,Box4;
var Ground1;
var Pig1;
var Log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES);

    Ground1=new Ground(600,height,1200,20);
    

  Box1=new Box(700,320,70,70);
  Box2=new Box(920,320,70,70);

  Pig1=new Pig(810,350);
  Log1=new Log(810,260,300,90);
  Box3=new Box(700,240,70,70);
  Box4=new Box(920,240,70,70);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    Box1.display();
    Box2.display();
    Ground1.display();
    Pig1.display();
    Log1.display();
    Box3.display();
    Box4.display();
   
}