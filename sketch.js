const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld,img;

function preload(){
img=loadImage("polygon.png");
}

function setup(){
createCanvas(1000,550);

myEngine = Engine.create(); 
myWorld = myEngine.world;

gr1=new Ground(500,540,1000,10);
gr2=new Ground(450,350,240,10);
gr3=new Ground(800,200,240,10);

//orange blocks
bl1=new Block(450,340,30,30);
bl2=new Block(482,340,30,30);
bl3=new Block(418,340,30,30);
bl4=new Block(386,340,30,30);
bl5=new Block(514,340,30,30);

bl10=new Block(800,190,30,30);
bl11=new Block(832,190,30,30);
bl12=new Block(864,190,30,30);
bl13=new Block(768,190,30,30);
bl14=new Block(736,190,30,30);

//white blocks
bl6=new Block(450,320,30,30);
bl7=new Block(482,320,30,30);
bl8=new Block(418,320,30,30);

bl15=new Block(800,180,30,30);
bl16=new Block(832,180,30,30);
bl17=new Block(768,180,30,30);

//green blocks
bl9=new Block(450,300,30,30);

bl18=new Block(800,170,30,30);

Poly1=new Polygon(150,200,35,35);
chain=new Slingshot(Poly1.body,{x:150,y:200})
}
function draw(){    
background("lightblue"); 
textSize(15);
fill("#0084FF");
text("Drag the Hexagonal stone and release it, to launch it towards the blocks.",300,70);   
text("Press space key to get an extra chance to play.",650,500);

Engine.update(myEngine);

gr1.display();
gr2.display();
gr3.display();

chain.display();

fill("orange");
bl1.display();
bl2.display();
bl3.display();
bl4.display();
bl5.display();

bl10.display();
bl11.display();
bl12.display();
bl13.display()
bl14.display()

fill("white");
bl6.display();
bl7.display();
bl8.display();

bl15.display();
bl16.display();
bl17.display();


fill("green");
bl9.display();

bl18.display();

fill("white");
Poly1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(Poly1.body,{x: mouseX,y: mouseY});  
} 

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode===32){
       chain.attach(Poly1.body);
       Matter.Body.setPosition(Poly1.body,{x:150,y:200}); 
    }
}