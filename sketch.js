const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var back,backImg

var engine, world;
var hammer;
var iron;
var stone;
var rubber
var sand;

function preload(){

backImg = loadImage("background.jpg")



    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300,50,50,50)
    stone = new Stone(400,60,100,100)
    rubber = new Rubber(700,60, 50)
    sand = new Sand(700,60, 10)
    sand1 = new Sand(710,60, 10)
    sand2 = new Sand(720,60, 10)
    sand3 = new Sand(730,60, 10)
    sand4 = new Sand(740,60, 10)
    sand5 = new Sand(750,60, 10)

  


}

function draw(){
    background(backImg);
    Engine.update(engine);


    plane.display();
    rubber.display()
    hammer.display();
    iron.display()
    stone.display()
    sand.display()
    sand1.display()
    sand2.display()
    sand3.display()
    sand4.display()
    sand5.display()


    
 
}