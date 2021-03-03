var backgroundImage
var ground 
var boy
var boyImage
var hut
var hutImage
var school 
var schoolImage
var beehive
var beehiveImage
var bear
var bearImage
var brokentree
var brokentreeImage

function preload(){
backgroundImage= loadImage("images/bg.png")
boyImage = loadImage("images/schoolboy.png")
hutImage = loadImage("images/hutt.png")
schoolImage = loadImage("images/schoool.png")
beehiveImage = loadImage("images/poop.png")
bearImage = loadImage("images/polar bear.png")
brokentreeImage = loadImage("images/brokentreee.png")
}

function setup() {
  createCanvas(1700,800);
  ground = createSprite(800,700,1700,20);
  ground.visible=false
  boy = createSprite(100,580,50,80);
  boy.addImage(boyImage);
  boy.scale = 0.5
}

function draw() {
  background(backgroundImage); 
  if(keyDown(RIGHT_ARROW)){
   boy.velocityY = -20

  }
boy.velocityY++
boy.collide(ground)

events();
  drawSprites();
}

function events(){
if(frameCount%500===0){
  var obstacles=createSprite(2000,500,100,100)
  obstacles.velocityX = -5
  var rn = [1,2,3,4,5]
  switch(rn){
    case 1 : obstacles.addImage(hutImage);
    obstacles.scale = 0.3
    break;
    case 2 : obstacles.addImage(schoolImage);
    obstacles.scale = 0.3
    break;
    case 3 : obstacles.addImage(bearImage);
    obstacles.scale = 0.3
    break;
    case 4 : obstacles.addImage(beehiveImage);
    obstacles.scale = 0.3
    break;
    case 5 : obstacles.addImage(brokentreeImage);
    obstacles.scale = 0.3
    obstacles.velocityX = 0
    if(obstacles.isTouching(boy)){
      var jump=createButton ('jump')
      jump.position(obstacles.x-50,obstacles.y)
      var walk=createButton ('walk')
      waalk.position(obstacles.x-100,obstacles.y)
    }
    break;

  }
}


}