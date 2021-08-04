var mario;

function setup() {
  createCanvas(1200,500);
  mario=createSprite(50, 460, 50, 50);
mario.shapeColor="blue";
  ground=createSprite(680,490,3000,20);
  ground.velocityX=-5;
  
  

}

function draw() {
  background(0);  
  if(ground.x<100){
ground.x=200;
  }
  if(keyDown("SPACE")){
    mario.velocityY=-13;
   
  }
  mario.velocityY+=0.8;
  mario.collide(ground) ;
  

  
  drawSprites();
 

}
