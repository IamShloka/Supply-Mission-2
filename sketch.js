var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var body1,body2,body3;
var body1Sprite,body2Sprite,body3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	
	
	//creating sprite objects to display bodies
 
	body1Sprite=createSprite(400,650,200,20)
	body1Sprite.shapeColor="red"
	body2Sprite=createSprite(500,620,20,100)
	body2Sprite.shapeColor="red"
	body3Sprite=createSprite(300,620,20,100)
	body3Sprite.shapeColor="red"
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //creating 3 bodies
	body1=Bodies.rectangle(400,640,200,20,{isStatic:false})
	body2=Bodies.rectangle(500,620,20,100,{isStatic:false})
	body3=Bodies.rectangle(300,620,20,100,{isStatic:false})
	World.add(world,body1)
	World.add(world,body2)
	World.add(world,body3)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  body1Sprite.x=body1.position.x;
  body1Sprite.y=body1.position.y;
  body2Sprite.x=body2.position.x;
  body2Sprite.y=body2.position.y;
  body3Sprite.x=body3.position.x;
  body3Sprite.y=body3.position.y;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y
  //rect(body1.position.x,body1.position.y,200,20)
 // rect(body2.position.x,body2.position.y,20,100)
  //rect(body3.position.x,body3.position.y,20,100)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



