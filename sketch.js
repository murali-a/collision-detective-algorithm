var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 30);
  fixedrect.shapeColor="blue"

  movingrect=createSprite(300, 200, 80, 30);
  movingrect.shapeColor="blue"
}

function draw() {





  background(0,0,0);  
  movingrect.x=mouseX
  movingrect.y=mouseY

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2
    &&fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2)
    {
      fixedrect.shapeColor="yellow"
      movingrect.shapeColor="yellow"
    }
    else{movingrect.shapeColor="blue"
        movingrect.shapeColor="blue"}





  drawSprites();
}