const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;


function setup(){
 createCanvas(1000,500);
 engine=Engine.create()
 world=engine.world

 

 
  bol1 = new Bol(0,200,50,50)
  bol2 = new Bol(350,200,50,50)
  bol3 = new Bol(400,200,50,50)
  bol4 = new Bol(450,200,50,50)
  bol5 = new Bol(500,200,50,50)

 rope1 = new Rope(bol1.body,{x:300,y:50})
 rope2 = new Rope(bol2.body,{x:350,y:50})
 rope3 = new Rope(bol3.body,{x:400,y:50})
 rope4 = new Rope(bol4.body,{x:450,y:50})
 rope5 = new Rope(bol5.body,{x:500,y:50})
}

function draw(){
  background("cyan")  
Engine.update(engine)


  bol1.display();
  bol2.display();
  bol3.display();
  bol4.display();
  bol5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}