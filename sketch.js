const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var ground;
var ball;
var rope;
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   b1=new Box(800,600);
   b2=new Box(800,565);
   b3=new Box(800,530 );
   b4=new Box(800,495);
   b5=new Box(800,460);
   b6=new Box(800,425);
   b7=new Box(700,600);
   b8=new Box(700,565);
   b9=new Box(700,530 );
   b10=new Box(700,495);
   b11=new Box(700,460);
   b12=new Box(700,425);
   b13=new Box(600,600);
   b14=new Box(600,565);
   b15=new Box(600,530 );
   b16=new Box(600,495);
   b17=new Box(600,460);
   b18=new Box(600,425);
   b19=new Box(600,390);
   b20=new Box(600,355);
   ball=new Ball(200,200);
   rope=new SlingShot(ball.body,{x:500,y:50});
}

function draw(){

    Engine.update(engine);
background(255);
ground.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
ball.display();
rope.display();

}
function mouseDragged() { Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY }); }