var bk, bg;

var astronaut, sleep, brush, gym, eat, drink, bath;

function preload(){
bg = loadImage("iss.png");
sleep = loadImage("sleep.png");
brush = loadImage("routine/brush.png");
gym = loadImage("gym1.png", "gym2.png", "gym11.png", "gym12.png");
eat = loadImage("eat2.png", "eat1.png" );
drink = loadImage("drink1.png", "drink2.png");
bath = loadImage("bath1.png", "bath2.png");
move = loadImage("move.png", "move1.png");
} 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep );
  astronaut.scale = 0.1;

  rectMode(CENTER);

}

function draw() {
  background(255,255,255);  
  image(bg,0,0,width,height);

  //Text("up arrow key = brushing");
  //Text("down arrow key = gyming");
  //Text("right arrow key = bathing");
  //Text("left arrow key = eating");
  //Text("m key key = moving");

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.x = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x= 30;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 50;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }


  drawSprites();
}
