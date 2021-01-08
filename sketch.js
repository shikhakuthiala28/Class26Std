const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4, log5;
var pig2, pig1;
var platform;

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    ground = new Ground(150,555,300,170);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig3 = new Pig(810, 320);

    log3 =  new Log(810,280,300, PI/2);

    box5 = new Box(810,260,70,70);
    log4 = new Log(760,220,150, PI/7);
    log5 = new Log(870,220,150, -PI/7);

    bird = new Bird(100,100);

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
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
}