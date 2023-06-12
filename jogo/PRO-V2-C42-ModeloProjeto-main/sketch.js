var fundo;
var bk;
function preload(){
  fundo= loadImage("fundomario1.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  bk = createSprite(width/2 ,height/2,width,height)
  bk.addImage("fundo",fundo)
  bk.scale =3.0;
  bk.x = bk.width/2 + 600;
  bk.velocityX = -4;
}
function draw(){
  background(0);
  if(bk.x < 520){
    bk.x = bk.width/2 +600;
  }
  drawSprites();
  
}