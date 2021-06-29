var path;
var runner;
var coin;

function preload(){
  //pre-load images
  runnerimage = loadAnimation("Runner-1.png","Runner-2.png");
  pathimage = loadImage("path.png");
  coinimage = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,200,400,400);
  path.addImage(pathimage);
  path.y=path.height/2;
  
  
  runner = createSprite(200,380,50,50);
  runner.addAnimation("runner",runnerimage);
  runner.scale = 0.05;

  coin = createSprite(random(100,310),200,30,30);
  coin.addImage(coinimage);
  coin.scale = 0.3;
  coin.velocityY = 2;


 
  

  
   
  

}

function draw() {
  background("white");
  
  if (path.y < 200){
  path.y=path.height/2;

  }
  console.log(mouseX);
  runner.x=mouseX;

  if (runner.x>310){
    runner.x=310
  }

  if (runner.x<100){
    runner.x=100
  }

  if (runner.isTouching(coin)) {
    coin.x = random(100,310);
    coin.y = 170;
  }

  path.velocityY=2;

  drawSprites(); 

}

