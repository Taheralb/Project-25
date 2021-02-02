
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject
var invidust;	
var world;

function preload() {
	dustimg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	invdust = createSprite(1200, 560, 10, 10);
	invdust.addImage(dustimg);
	invdust.scale = 0.6;

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Box(1200,650);
	paperObject=new Crumbledpaper(250,450,55);
	groundObject=new Ground(width/2,670,width,20);
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(255);

 

  
  dustbinObj.display();
  drawSprites();
  
  paperObject.display();
  groundObject.display();


}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:165,y:-170});

  	}
} 
