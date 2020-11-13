var bullet;
var wall;

var speed, weight, thickness;

function setup(){

    createCanvas(1600,400);

    //to assign random numbers
    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,83);

    //to create bullet sprites
    bullet = createSprite(100,200,80,18);
    //velocity x of sprite
    bullet.velocityX = speed;
    //colour
    bullet.shapeColor ="white";

    //to create wall sprite
    wall = createSprite(1200,200,thickness,height/2);
    //colour
    wall.shapeColor = color(80,80,80);

}

function draw(){

  //background colour
  background("skyblue");

  if(hasCollided(bullet, wall)){
    
    //speed of spite
    bullet.velocityX = 0;
    
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    //if damage is greater then 10
    if(damage > 10){

      //sprite color
      wall.shapeColor = color("red");

    }

    //is damage is less than 10
    if(damage < 10){

      //sprite color
      wall.shapeColor = color("green");

    }
  }

  //to create sprites
   drawSprites();

}

//collided function
function hasCollided(bbullet,wwall){

  bulletRightEdge = bbullet.x + bbullet.width;
  
  wallLeftEdge = wwall.x;

  if(bulletRightEdge >= wallLeftEdge){

    return true;
  }

  return false;

}