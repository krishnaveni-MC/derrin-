var PacManPlayer;
var Ghost1 , Ghost2 , Ghost3 , Ghost4;
var Points;
var Energy;

function preload(){
  
}

function setup(){
  canvas = createCanvas(1980, 1080);



  PacManPlayer = createSprite(1970,1030,100,100);
  PacManPlayer.shapeColor="yellow";

  Ghost1 = createSprite(400,400,100,100);
  Ghost1.shapeColor="Green";

  Ghost2 = createSprite(600,600,100,100);
  Ghost2.shapeColor = "Red";

  Ghost3 = createSprite(800,800,100,100);
  Ghost3.shapeColor = "Purple";

  Ghost4 = createSprite(1000,1000,100,100);
  Ghost4.shapeColor = "Blue";

  
  
}


function draw(){
  background("yellow");

 if(keyIsDown(UP_ARROW)){

   PacManPlayer.velocityY = 2

  }
  if(keyIsDown(DOWN_ARROW)){

   PacManPlayer.velocityY = -2

  }

  if(keyIsDown(RIGHT_ARROW)){

    PacManPlayer.velocoityX = 2;

 }

 if(keyIsDown(LEFT_ARROW)){

   PacManPlayer.velocityX = -2;

  }

}

