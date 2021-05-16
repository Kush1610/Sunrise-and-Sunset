const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    gettime()
    backgroundImg = loadImage("load.png");
    treeImg= loadImage("tree.png");
    cactus1Img= loadImage("cactus1.png");
    cactus2Img= loadImage("cactus2.png");
    snakeImg= loadAnimation("snake.png");
    snake2Img= loadAnimation("snake2.png");
    eagleImg= loadAnimation("eagle.png");
    eagle2Img= loadAnimation("eagle2.png");
    eagle3Img= loadAnimation("eagle3.png");
    lobsterImg= loadAnimation("lobster.png");
    lobster2Img= loadAnimation("lobster2.png");
    batlImg= loadAnimation("bat2.png");
    batrImg= loadAnimation("bat.png");
    tornadoImg= loadAnimation("tornado1.png","tornado2.png","tornado3.png",);
    tornado2Img= loadAnimation("tornado4.png","tornado5.png","tornado6.png");
    camelImg= loadAnimation("camel1.png","camel1.png","camel2.png","camel2.png","camel4.png","camel4.png");
    vultureImg= loadAnimation("vulture.png");
    vulture2Img= loadAnimation("vulture2.png");
    vulture3Img= loadAnimation("vulture3.png");
    wolfImg= loadAnimation("wolf3.png","wolf3.png","wolf3.png","wolf3.png","wolf3.png","wolf3.png","wolf2.png","wolf2.png","wolf2.png","wolf1.png","wolf1.png","wolf1.png","wolf1.png","wolf1.png","wolf1.png","wolf1.png","wolf1.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    lobster4=createSprite( 600,610,40,10);  
    lobster4.addAnimation("left2",lobsterImg);
    lobster4.addAnimation("right2",lobster2Img);
    lobster4.scale=0.16;
    lobster4.visible=false

    lobster3=createSprite(300,410,40,10);  
    lobster3.addAnimation("right",lobster2Img);
    lobster3.addAnimation("left",lobsterImg);
    lobster3.scale=0.16;
    lobster3.visible=false


    cactus1=createSprite(600,600,50,200);
    cactus1.addImage(cactus1Img);
    cactus1.scale=0.2;
    cactus1.visible=false


    cactus2=createSprite(300,400,50,200);
    cactus2.addImage(cactus1Img);
    cactus2.scale=0.2;
    cactus2.visible=false

    cactus3=createSprite(1000,400,50,200);
    cactus3.addImage(cactus2Img);
    cactus3.scale=0.7;
    cactus3.visible=false

    snake=createSprite(1200,500,50,200);
    snake.addAnimation("snakeright",snakeImg);
    snake.addAnimation("snakeleft",snake2Img);
    snake.scale=0.3;
    snake.visible=false
  

    eagle=createSprite(0,100,50,200);
    eagle.addAnimation("snakefly",eagleImg);
    eagle.addAnimation("snakehunt",eagle2Img);
    eagle.addAnimation("snakecatch",eagle3Img);
    eagle.scale=1;
    eagle.visible=false

    vulture=createSprite(0,100,50,200);
    vulture.addAnimation("snakefly",vultureImg);
    vulture.addAnimation("snake2fly",vulture2Img);
    vulture.scale=0.5;
    vulture.visible=false

    vulture2=createSprite(1200,200,50,200);
    vulture2.addAnimation("snake2fly",vulture2Img);
    vulture2.addAnimation("snakefly",vultureImg);
    vulture2.scale=0.5;
    vulture2.visible=false

    wolf=createSprite(200,550,40,10);  
    wolf.addAnimation("left",wolfImg);
    wolf.scale=3.5;
   // wolf.velocityX=-3.5;
    wolf.visible=false


    bat=createSprite(30,190,40,10);  
    bat.addAnimation("right",batrImg);
    bat.addAnimation("left",batlImg);
    bat.scale=0.5;
    bat.velocityX=3.5;
    bat.visible=false

    bat2=createSprite(1200,30,40,10);  
    bat2.addAnimation("left",batlImg);
    bat2.addAnimation("right",batrImg);
    bat2.scale=0.5;
    bat2.velocityX=-3.5;
    bat2.visible=false

    lobster=createSprite(30,550,40,10);  
    lobster.addAnimation("right",lobster2Img);
    lobster.addAnimation("left",lobsterImg);
    lobster.scale=0.15;
    lobster.velocityX=2.5;
    lobster.visible=false

    lobster2=createSprite(1200,450,40,10);  
    lobster2.addAnimation("left",lobsterImg);
    lobster2.addAnimation("right",lobster2Img);
    lobster2.scale=0.15;
    lobster2.velocityX=-2.5;
    lobster2.visible=false


    camel=createSprite(10,470,40,10);  
    camel.addAnimation("left",camelImg);
    camel.scale=1.22;
    camel.visible=false

    camel2=createSprite(-170,470,40,10);  
    camel2.addAnimation("left",camelImg);
    camel2.scale=1.22;
    camel2.visible=false

    camel3=createSprite(-340,470,40,10);  
    camel3.addAnimation("left",camelImg);
    camel3.scale=1.22;
    camel3.visible=false

    camel4=createSprite(-520,470,40,10);  
    camel4.addAnimation("left",camelImg);
    camel4.scale=1.22;
    camel4.visible=false

    camel5=createSprite(-690,470,40,10);  
    camel5.addAnimation("left",camelImg);
    camel5.scale=1.22;
    camel5.visible=false

    camel6=createSprite(-850,470,40,10);  
    camel6.addAnimation("left",camelImg);
    camel6.scale=1.22;
    camel6.visible=false

    tornado2=createSprite(1200,330,40,10);  
    tornado2.addAnimation("left",tornado2Img);
    tornado2.scale=1.8;
    tornado2.visible=false

    tornado=createSprite(30,390,40,10);  
    tornado.addAnimation("right",tornadoImg);
    tornado.scale=1.8;
    tornado.visible=false

    tree=createSprite(910,400,50,200);
    tree.addImage(treeImg);
    tree.scale=1.7;
    tree.visible=false

    vulture3=createSprite(1000,220,50,200);
    vulture3.addAnimation("vulsit",vulture3Img);
    vulture3.scale=0.5;
    vulture3.visible=false

}

function draw(){
    background(backgroundImg);
    // add condition to check if any background image is there to add

    
    if (snake.x>=1201)
    {
        snake.velocityX=-3;
        snake.changeAnimation("snakeright",snakeImg);
    }
    
    if ((eagle.x>=450)&&(eagle.y>=440))
    {
      eagle.velocityX=3;
      eagle.velocityY=-3;
      eagle.changeAnimation("snakecatch",eagle3Img);
      eagle.scale=0.6;

      snake.visible=false
    }

    if (eagle.y<-3000)
    {
      eagle.x=0;
      eagle.y=100;
      eagle.velocityX=3;
      eagle.velocityY=2;
      eagle.changeAnimation("snakefly",eagleImg);
      eagle.scale=1;

      snake.visible=true
      snake.x=1200;
      snake.y=500;

    }


    if (eagle.y<0)
    {
      tornado.velocityX=3;
      tornado.visible=true
      tornado2.velocityX=-3;
      tornado2.visible=true
    }

    if (eagle.y<-1000)
    {
  
      tornado.velocityX=0;
      tornado.visible=false
      tornado2.velocityX=0;
      tornado2.visible=false
      tornado.x=30
      tornado.y=390
      tornado2.x=1200
      tornado2.y=330

      //lobster3.visible=true
      //lobster4.visible=true

      //lobster4.velocityX=-4; 
      //lobster3.velocityX=4;
    }

    if (eagle.y===-1000)
    {

      lobster3.visible=true
      lobster4.visible=true

      lobster4.velocityX=-4; 
      lobster3.velocityX=4;
    }

    if (eagle.y>0)
    {
      lobster3.x=300
      lobster3.y=410
      lobster3.changeAnimation("right",lobster2Img);

      lobster4.x=600
      lobster4.y=610
      lobster4.changeAnimation("left2",lobsterImg);

      
      lobster4.velocityX=0; 
     lobster3.velocityX=0;

     lobster3.visible=false
     lobster4.visible=false
    }


    if (bat.x>=1201)
    {
      bat.velocityX=-3.5;
      bat.changeAnimation("left",batlImg);
    }

    if (bat.x<=0)
    {
      bat.velocityX=3.5;
      bat.changeAnimation("right",batrImg);
    }

    if (bat2.x>=1201)
    {
      bat2.velocityX=-3.5;
      bat2.changeAnimation("left",batlImg);
    }

    if (bat2.x<=0)
    {
      bat2.velocityX=3.5;
      bat2.changeAnimation("right",batrImg);
    }

    if (lobster.x>=1201)
    {
      lobster.velocityX=-2.5;
      lobster.changeAnimation("left",lobsterImg);
    }

    if (lobster.x<=0)
    {
      lobster.velocityX=2.5;
      lobster.changeAnimation("right",lobster2Img);
    }

    if (lobster2.x>=1201)
    {
      lobster2.velocityX=-2.5;
      lobster2.changeAnimation("left",lobsterImg);
    }

    if (lobster2.x<=0)
    {
      lobster2.velocityX=2.5;
      lobster2.changeAnimation("right",lobster2Img);
    }

    if (tornado.x>=1201)
    {
      tornado.velocityX=-3;
      //tornado.changeAnimation("left",batlImg);
    }

    if (tornado.x<=0)
    {
      tornado.velocityX=3;
      //tornado.changeAnimation("right",batrImg);
    }

    if (tornado2.x>=1201)
    {
      tornado2.velocityX=-3;
      //tornado2.changeAnimation("left",batlImg);
    }

    if (tornado2.x<=0)
    {
      tornado2.velocityX=3;
      //tornado2.changeAnimation("right",batrImg);
    }

    if (lobster3.x===1200)
    {
      //lobster3.x=30
      //lobster3.y=610
      lobster3.velocityX=-3;
      lobster3.changeAnimation("left",lobsterImg);
    }

    if (lobster4.x===1200)
    {
      //lobster4.x=1000
      //lobster4.y=410
      lobster4.velocityX=-3;
      lobster4.changeAnimation("left2",lobsterImg);
    }

    if (lobster3.x===0)
    {
      //lobster3.x=30
      //lobster3.y=610
      lobster3.velocityX=3;
      lobster3.changeAnimation("right",lobster2Img);
    }

    if (lobster4.x===0)
    {
      //lobster4.x=1000
      //lobster4.y=410
      lobster4.velocityX=3;
      lobster4.changeAnimation("right2",lobster2Img);
    }

    if (camel6.x>=1210)
    {
      camel.x=10

      camel2.x=-170
      
      camel3.x=-340
      
      camel4.x=-520
      
      camel5.x=-690
      
      camel6.x=-850
      
    }

    if (vulture.x>=1201)
    {
      vulture.velocityX=-3;
      vulture.changeAnimation("snake2fly",vulture2Img);
    }

    if (vulture.x<=0)
    {
      vulture.velocityX=3;
      vulture.changeAnimation("snakefly",vultureImg);
    }

    if (vulture2.x>=1201)
    {
      vulture2.velocityX=-3;
      vulture2.changeAnimation("snake2fly",vulture2Img);
    }

    if (vulture2.x<=0)
    {
      vulture2.velocityX=3;
      vulture2.changeAnimation("snakefly",vultureImg);
    }

    Engine.update(engine);
    drawSprites()

}
async function gettime()
{ 
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
var responseJSON = await response.json(); 
console.log(responseJSON);
var datetime = responseJSON.datetime;
console.log(datetime );

var hour = datetime.slice(11,13);
console.log(hour );

if(hour>=04 && hour<=05)
{ 
 bg = "sunrise1.png"; 
 vulture.velocityX=3;
 vulture.visible=true
 vulture2.velocityX=-3;
 vulture2.visible=true
 wolf.visible=true
 vulture3.visible=true
} 

if(hour>=05 && hour<=06)
{ 
 bg = "sunrise2.png"; 
 vulture.velocityX=3;
 vulture.visible=true
 vulture2.velocityX=-3;
 vulture2.visible=true
 wolf.visible=true
 vulture3.visible=true
} 

if(hour>=06 && hour<=08)
{ 
 bg = "sunrise3.png"; 
 vulture.velocityX=3;
 vulture.visible=true
 vulture2.velocityX=-3;
 vulture2.visible=true
 wolf.visible=true
 vulture3.visible=true
} 

if(hour>=08 && hour<=11)
{ 
 bg = "sunrise4.png"; 
 eagle.velocityX=3;
eagle.velocityY=2;
snake.velocityX=-3;
eagle.visible=true
snake.visible=true
vulture.visible=false
vulture2.visible=false
} 

if(hour>=11 && hour<=15)
{ 
 bg = "sunrise5.png"; 
 eagle.velocityX=3;
eagle.velocityY=2;
snake.velocityX=-3;
eagle.visible=true
snake.visible=true
vulture.visible=false
vulture2.visible=false
} 

if(hour>=15 && hour<=16)
{ 
 bg = "sunrise6.png"; 
 eagle.velocityX=3;
eagle.velocityY=2;
snake.velocityX=-3;
eagle.visible=true
snake.visible=true
vulture.visible=false
vulture2.visible=false
} 

if(hour>=16 && hour<=18)
{ 
 bg = "sunset7.png"; 
 camel.velocityX=2;
 camel2.velocityX=2;
 camel3.velocityX=2;
 camel4.velocityX=2;
 camel5.velocityX=2;
 camel6.velocityX=2;
 camel.visible=true
 camel2.visible=true
 camel3.visible=true
 camel4.visible=true
 camel5.visible=true
 camel6.visible=true
 eagle.visible=false
snake.visible=false
vulture.visible=false
vulture2.visible=false
} 

if(hour>=18 && hour<=20)
{ 
 bg = "sunset8.png"; 
 camel.velocityX=2;
 camel2.velocityX=2;
 camel3.velocityX=2;
 camel4.velocityX=2;
 camel5.velocityX=2;
 camel6.velocityX=2;
 camel.visible=true
 camel2.visible=true
 camel3.visible=true
 camel4.visible=true
 camel5.visible=true
 camel6.visible=true
 eagle.visible=false
 snake.visible=false
 vulture.visible=false
 vulture2.visible=false
} 

if(hour>=21 && hour<=22)
{ 
  bg = "sunset11.png"; 
  bat.visible=true
  bat2.visible=true
  lobster.visible=true
  lobster2.visible=true

  camel.visible=false
  camel2.visible=false
  camel3.visible=false
  camel4.visible=false
  camel5.visible=false
  camel6.visible=false
  eagle.visible=false
  snake.visible=false
  vulture.visible=false
  vulture2.visible=false
} 

if(hour>=22 && hour<=24)
{ 
  bg = "sunset12.png"; 
  bat.visible=true
  bat2.visible=true
  lobster.visible=true
  lobster2.visible=true

  camel.visible=false
  camel2.visible=false
  camel3.visible=false
  camel4.visible=false
  camel5.visible=false
  camel6.visible=false
  eagle.visible=false
  snake.visible=false
  vulture.visible=false
  vulture2.visible=false
} 

if(hour>=01 && hour<=0)
{ 
  bg = "sunset12.png"; 
  bat.visible=true
  bat2.visible=true
  lobster.visible=true
  lobster2.visible=true

  camel.visible=false
  camel2.visible=false
  camel3.visible=false
  camel4.visible=false
  camel5.visible=false
  camel6.visible=false
  eagle.visible=false
  snake.visible=false
  vulture.visible=false
  vulture2.visible=false
} 

if(hour>=03 && hour<=04)
{ 
  bg = "sunset10.png";  
  bat.visible=true
  bat2.visible=true
  lobster.visible=true
  lobster2.visible=true

  camel.visible=false
  camel2.visible=false
  camel3.visible=false
  camel4.visible=false
  camel5.visible=false
  camel6.visible=false
  eagle.visible=false
  snake.visible=false
  vulture.visible=false
  vulture2.visible=false
}

tree.visible=true
cactus3.visible=true
cactus1.visible=true
cactus2.visible=true

backgroundImg = loadImage(bg); 
console.log(backgroundImg);

}

