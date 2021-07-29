var iss, spaceCraft, bg;
var issImg, scImg1, scImg2, scImg3, scImg4;
var hasDocked = false;


function preload(){
  bg = loadImage("images/spacebg.jpg");
  issImg = loadImage("images/iss.png");
  scImg1 = loadImage("images/spacecraft1.png");
  scImg2 = loadImage("images/spacecraft2.png");
  scImg3 = loadImage("images/spacecraft3.png");
  scImg4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(280, 240);
  spaceCraft.addImage(scImg1);
  spaceCraft.scale = 0.15;

  iss = createSprite(330,30);
  iss.addImage(issImg);
  iss.scale = 0.25;
}

function draw() {
  background(bg); 
  
  spaceCraft.addImage(scImg2);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y - 2;
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(scImg3);
      spaceCraft.x = spaceCraft.x - 1;
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(scImg4);
      spaceCraft.x = spaceCraft.x + 1;
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(scImg1);
      spaceCraft.y = spaceCraft.y + 2;
    }
  }

  if(spaceCraft.y<=(iss.y + 70) && spaceCraft.x<=(iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!", 200,300);
  }
  drawSprites();
}