const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world

function setup(){

createCanvas(3000,800)

engine = Engine.create();
world = engine.world;


fill("brown")
ground=new Ground(1500,780,3000,10)


fill("yellow")
box1=new Box(320,460,30,40)
box2=new Box(350,460,30,40)
box3=new Box(380,460,30,40)
box4=new Box(410,460,30,40)
box5=new Box(440,460,30,40)
box6=new Box(470,460,30,40)
box7=new Box(500,460,30,40)

box8=new Box(350,420,30,40)
box9=new Box(380,420,30,40)
box10=new Box(410,420,30,40)
box11=new Box(440,420,30,40)
box12=new Box(470,420,30,40)

ball=Bodies.circle(200,200,30)
World.add(world,ball)

slingshot=new Sling(ball.body,{x:125,y:460})

}

function draw(){

background("white")
rectMode(CENTER)
text (mouseX+ "," +mouseY,mouseX,mouseY)

ground.display()
ground1.display()
fill("lightBlue")
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
fill("pink")
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()

ellipseMode(RADIUS)
ellipse(ball.body.position.x,ball.body.position.y,30,30)

slingshot.display()
}

//making functions
function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}
