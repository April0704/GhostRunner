var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
end=1;


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
 tower.addImage("tower",towerImg);
  tower.velocityY = 1;


  ghost = createSprite(150,150,20,10);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.4

 spookySound.play();

  
}

function draw() {
  background(200);
  text (mouseX+","+mouseY,mouseX,mouseY)
  if(tower.y > 400){
      tower.y = 300
    }

if(gameState==="play"){
if(keyDown("space")){
  ghost.velocityY=-10
  
}
ghost.velocityY=ghost.velocityY+1

if(keyDown("right")){
  ghost.x=ghost.x+3
}

if(keyDown("left")){
  ghost.x=ghost.x-3
}


}
spawnClimbers()
spawnDoors()
drawSprites()
}

function spawnClimbers(){


if(frameCount%200===0){
  climber = createSprite(420,50,10,10);
  climber.addImage("climber",climberImg)
  climber.velocityY=3
climber.x=Math.round(random(20,200));
}



}

function spawnDoors(){

  if(frameCount%200===0){
  door = createSprite(432,-20,10,15)
  door.addImage("door",doorImg);
  door.velocityY=3
  door.x=climber.x
  }



}

if(ghost.IsTouching(climber)){
  gameState=end
spooky.play()
}






    

