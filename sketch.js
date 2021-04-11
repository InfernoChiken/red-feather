const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(850,350,70,70);
    ground = new Ground(600,height,1200,20);
    pig = new Pig(775, 350);
    log = new Log(775, 300, 250, PI/2);
    box3 = new Box(700,250,70,70);
    box4 = new Box(850,250,70,70);
    pig2 = new Pig(775, 250);
    log2 = new Log(775, 200, 250, PI/2);
    box5 = new Box(780, 150,70,70);
    log3 = new Log(745, 125, 120, PI/7);
    log4 = new Log(800, 125, 125, PI/-7);
    bird = new Birb(200, 1);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}