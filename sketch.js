//Create variables here
var Dog, Happydog, database, foodS, foodStock;
var dog1, dog2;

function preload()
{
	//load images here

  Dog = loadImage("images/Dog.png")
  Happydog = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog1 = createSprite(250,300)
  dog1.addImage("Dog")

  foodStock=databse.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(39)){
    writesStock(foodS);
    dog1.addImage(Happydog);
  }
  drawSprites();
  text("Food Remaining :" + foodS, 250,200)
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writesStock(x){
  if(x <= 0){
    x = 0
  }
  else {
    x = x-1
  }
  database.ref('/').update({
    food: x
  })
}



