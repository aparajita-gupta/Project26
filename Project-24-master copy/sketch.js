
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, trash1, ground1, leftb, middleb, rightb;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper();
  trash1 = new Trash(500,650,50,100);
  ground1 = createSprite(0,700,800000,10)
    ground1.shapeColor = ("white");

    /*
  leftb = new Trash(600,610, 10, 100);
    leftb.shapeColor = ("red");	
  middleb = new Trash(650,650,100,10);
    middleb.shapeColor = ("red");
  rightb = new Trash(700,610, 10, 100);
    rightb.shapeColor = ("red");
*/
    
  ground = new Trash(400,680,800,5);
    ground.shapeColor = ("white");

	Engine.run(engine);
  
}


function draw() {
  background(0);
  //Engine.update(engine);
  paper1.display();
  //leftb.display();
  //middleb.display();
  //rightb.display();
  ground.display();

  
  drawSprites();
 
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:16,y:-16});
  }
}

