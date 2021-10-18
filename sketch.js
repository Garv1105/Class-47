var START= 0;
var PLAY = 1;
var END = 2;
var gameState = START;
function preload(){
  back1img = loadImage("back1.jpg");
  backimg = loadImage("back.jpg");
  playimg = loadImage("play.png")
  bg2img = loadImage("bg2.jpg");
  playerimg = loadImage("First Person Img.png");
  restartimg = loadImage("restart.png");
}
function setup(){
createCanvas (windowWidth,windowHeight)
back1 = createSprite(windowWidth/2, windowHeight/2);
back1.addImage(back1img);
playBtn = createSprite(windowWidth/2 - 430, height - 250);
playBtn.addImage(playimg);
back2 = createSprite(windowWidth/2, windowHeight/2);
back2.addImage(bg2img);
back2.visible = false;
player = createSprite(width/2,height-150,30,30)
player.addImage(playerimg);
player.scale = 0.8;
player.rotation = 30;
player.visible = false;
restart = createSprite(width/2,height/2);
restart.addImage(restartimg);
restart.scale = 0.7;
restart.visible = false;
}
function draw(){
background(180);
drawSprites();
if(gameState === START){
  if(mousePressedOver(playBtn)){
    gameState = PLAY;
      
  }
  if(gameState === PLAY){
    back1.visible = false;
    playBtn.visible = false;
    back2.visible = true;
    back2.velocityY = 5;
    player.visible = true;
    if(back2.y > height){
      back2.y = height/2;
        }
  }
}
}