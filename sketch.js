var fixed,moving,object1,object2;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="red";
  moving=createSprite(300,100,50,50);
  object1=createSprite(100,300,60,60);
  object1.shapeColor="lime";
  object2=createSprite(700,300,60,60);
  object2.shapeColor="cyan";
  object1.velocityX=2;
  object2.velocityX=-2;
}

function draw() {
  background(0);  
  drawSprites();
  moving.x=mouseX;
  moving.y=mouseY;
  if(isTouching(moving,fixed)){
    fixed.shapeColor="blue";
  }
  else{
    fixed.shapeColor="red";
  }
  bounceOff(object1,object2);
}
 
function isTouching(a,b){
  if(a.x-b.x<=a.width/2+b.width/2 &&
    b.x-a.x<=a.width/2+b.width/2 &&
    a.y-b.y<=a.height/2+b.height/2 &&
    b.y-a.y<=a.height/2+b.height/2){
return true;
  }
  else{
    return false;
  }
}
function bounceOff(a,b){
  if(a.x-b.x<=a.width/2+b.width/2 &&
    b.x-a.x<=a.width/2+b.width/2 ){
      a.velocityX=-1*a.velocityX;
      b.velocityX=-1*b.velocityX;
    }
    if(a.y-b.y<=a.height/2+b.height/2 &&
      b.y-a.y<=a.height/2+b.height/2){
        a.velocityY=-1*a.velocityY;
        b.velocityY=-1*b.velocityY;
      }
}