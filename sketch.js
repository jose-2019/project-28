const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload() {

}

function setup(){
    var canvas = createCanvas(2200,600);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
 
    ground=new Ground(1200,590,3000,20);

    tree=new Tree(200,200,500,500);

    boy=new Boy(200,200,250,300);

stone=new Stone(140,450,70)

mango1=new Mango(880,280,70);
mango2=new Mango(1000,220,70);
mango3=new Mango(1100,260,70);
mango4=new Mango(1190,300,70);
mango5=new Mango(970,300,70);

slingshot= new SlingShot(stone.body,{x:140,y:450});

}

function draw(){

Engine.update(engine);

background("white");

ground.display();
boy.display();
tree.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
slingshot.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);

}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
    
    }
    
    function mouseReleased(){
      slingshot.fly();
    }


function detectCollision(lstone,lmango){

mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(lmango.body,false)

}

}


function keyPressed(){

if(keyCode===32){

Matter.Body.setPosition(stone.body,{x:140, y:450})
slingshot.attach(stone.body)

}

}