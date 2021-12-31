var bk, bg;

var astronaut, sleep, brush, gym, eat, drink, bath;

function preload(){
bg = loadImage("./Astronaut's daily routine/iss.png");
sleep = loadImage("./Astronaut's daily routine/sleep.png");
brush = loadImage("./Astronaut's daily routine/brush.png");
gym = loadImage("./Astronaut's daily routine/gym1.png", "./Astronaut's daily routine/gym2.png", "./Astronaut's daily routine/gum11.png", "./Astronaut's daily routine/gym12.png");
eat = loadImage("./Astronaut's daily routine/eat2.png", "./Astronaut's daily routine/eat1.png" );
drink = loadImage("./Astronaut's daily routine/drink1.png", "./Astronaut's daily routine/drink2.png");
bath = loadImage("././Astronaut's daily routine/bath1.png", "./Astronaut's daily routine/bath2.png");
move = loadImage("./Astronaut's daily routine/move.png", "./Astronaut's daily routine/move1.png");
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