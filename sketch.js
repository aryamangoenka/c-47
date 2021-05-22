var plane,planeimg;
var edge1,edge2;
var meteor,meteorimg,meteorGroup;
var bullet;
var score=0;
function preload(){
  planeimg=loadImage('aircraft project (1).jpg')
  meteorimg=loadImage('meteor image.jpg')
}
function setup() {
  createCanvas(800,600);
  plane= createSprite(400, 530, 50, 50);
plane.addImage(planeimg)
plane.scale=0.5
  edge1= createSprite(830, 550, 50, 50);
  edge2= createSprite(-30, 550, 50, 50);
  
    
meteorGroup=new Group();

}

function draw() {
  background(0);  
  drawSprites();
 plane.collide(edge1)
 plane.collide(edge2)
 
  if(keyWentDown("right")){
    plane.velocityX=(8 + 3*score);
  }
  if(keyWentDown("left")){
    plane.velocityX=-(8 + 3*score);
  }
  if(keyWentDown("up")){
   
    bullet=createSprite(plane.x,plane.y,20,20);
  bullet.velocityY=-8;
    plane.velocityX=0
  }
  fill('red')
textSize(20)
text("METEORS DESTROYED:"+score,300,30)
  if(meteorGroup.isTouching(bullet)){
    meteorGroup.destroyEach();
    score=score+20;
  }
  if(score===20){
    text("YOU WIN!!",350,300)
    plane.velocityX=0;
    meteorGroup.setLifetimeEach(-1);
    bullet.velocityY=0;

  }
 
  spawnmeteor();
  
}

function spawnmeteor(){
if(frameCount%120===0){


  meteor= createSprite(400, 30, 50, 50);
  meteor.addImage(meteorimg)
  meteor.scale=0.3
  meteor.x=Math.round(random(750,350))
  meteor.velocityY=(8 + 3*score);
  
  meteorGroup.add(meteor)
}

}



