var fixedrect, movingrect;




function setup() {
  createCanvas(800,400);
fixedrect=createSprite(200,200,50,80);
movingrect=createSprite(300,300,50,80); 
movingrect.shapeColor = "blue";
fixedrect.shapeColor = "blue";

}

function draw() {
  background(255,255,255);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  //console.log(movingrect.x-fixedrect.x);
 if (isTouching(movingrect,fixedrect))  {
fixedrect.shapeColor = "red";
movingrect.shapeColor = "red";

 }
 else
 {
  fixedrect.shapeColor = "blue";
  movingrect.shapeColor = "blue";


 } 
  drawSprites();

}
function isTouching (object1,object2) {
  if   (object1.x-object2.x < object2.width/2+object1.width/2
    && object2.x-object1.x < object2.width/2 + object1.width/2
    && object1.y-object2.y < object2.height/2 + object1.height/2
    && object2.y-object1.y < object1.height/2 + object2.height/2
  
      )  {  
  //fixedrect.shapeColor = "red";
  //movingrect.shapeColor = "red";
  return true;
    }
    else      {
   // fixedrect.shapeColor = "blue";
   // movingrect.shapeColor = "blue";
   return false;
  }
  


}