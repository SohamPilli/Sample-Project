var box
function setup() {
  createCanvas(1000,1000);
  box = createSprite(200,200,100,100)
  box.shapeColor = "blue"
}

function draw() 
{
  background(30);
  if(keyDown("up")){
    box.velocityY = -3
  }
  if(keyDown("down")){
    box.velocityY = 3
  }
  if(keyDown("left")){
    box.velocityX = -3
  }
  if(keyDown("right")){
    box.velocityX = 3
  }
drawSprites()
}




