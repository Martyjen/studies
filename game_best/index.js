let tankGame = {
  mapGame: document.querySelector(".game"),
  mapVertecal: 600, // Вертикальный развер карты - кратное скорости танка.
  mapHorizontal: 1200, // Горизантальный развер карты - кратное скорости танка.
  tank: document.querySelector("#tank"),
  tank3: document.querySelector("#tank3"),
  speedTank: 25, // Скорость танка - половина от размера танка.
  tankSize: 50, // Размер танка.
  verticalPosition: 0,
  horisontalPosition: 0,
}

let tankGame2 = {
  mapVertecal: 600, // Вертикальный развер карты - кратное скорости танка.
  mapHorizontal: 1200, // Горизантальный развер карты - кратное скорости танка.
  tank: document.querySelector("#tank2"),
  speedTank: 25, // Скорость танка - половина от размера танка.
  tankSize: 50, // Размер танка.
  verticalPosition: 0,
  horisontalPosition: 1175,

}

//Инициализация игры.


tankGame.mapGame.style.width = tankGame.mapHorizontal + tankGame.speedTank + "px";
tankGame.mapGame.style.height = tankGame.mapVertecal + tankGame.speedTank + "px";
tankGame.tank.style.width = tankGame.tankSize + "px";
tankGame.tank.style.height = tankGame.tankSize + "px";
tankGame.tank.style.left = tankGame.verticalPosition + "px";
tankGame.tank.style.top = tankGame.horisontalPosition + "px";

tankGame.tank3.style.width = tankGame.tankSize + "px";
tankGame.tank3.style.height = tankGame.tankSize + "px";
tankGame.tank3.style.left = tankGame.verticalPosition + "px";
tankGame.tank3.style.top = tankGame.horisontalPosition + "px";


tankGame2.tank.style.width = tankGame2.tankSize + "px";
tankGame2.tank.style.height = tankGame2.tankSize + "px";
tankGame2.tank.style.left = tankGame2.horisontalPosition + "px";
tankGame2.tank.style.top = tankGame2.verticalPosition + "px";


  let i = 0;
  while (i < 1){
      ++i;
      setInterval(randomF, 100)
 
}
function randomF(){
  let rendome = (Math.floor(Math.random() * 4));

if (rendome === 1 ) {
  up();
}
if (rendome === 2) {
  down();
}
if (rendome === 3) {
  left()
}
if (rendome === 0) {
  right();
}
}

  function up() {
    tankGame.verticalPosition = tankGame.verticalPosition - tankGame.speedTank;
    tank.style.top = tankGame.verticalPosition + "px";
    console.log(tankGame.verticalPosition);
    blockMap();
  }

  function down() {
    tankGame.verticalPosition = tankGame.verticalPosition + tankGame.speedTank;
    tank.style.top = tankGame.verticalPosition + "px";
    console.log(tankGame.verticalPosition);
    blockMap();
  }

  function right() {
    tankGame.horisontalPosition = tankGame.horisontalPosition + tankGame.speedTank;
    tank.style.left = tankGame.horisontalPosition + "px";
    console.log(tankGame.horisontalPosition);
    blockMap();
  }

  function left() {
    tankGame.horisontalPosition = tankGame.horisontalPosition - tankGame.speedTank;
    tank.style.left = tankGame.horisontalPosition + "px";
    console.log(tankGame.horisontalPosition);
    blockMap();
  }

  //===================================================================================
  
  function blockMap() {
  
  if (tankGame.horisontalPosition <= 0) {
    tankGame.horisontalPosition = 0;
    tank.style.left = 0 + "px";
  }
  if (tankGame.horisontalPosition >= tankGame.mapHorizontal) {
    tankGame.horisontalPosition = tankGame.mapHorizontal - tankGame.speedTank;
    tank.style.left = tankGame.mapHorizontal - tankGame.tankSize + tankGame.speedTank + "px";
  }
  if (tankGame.verticalPosition <= 0) {
    tankGame.verticalPosition = 0;
    tank.style.top = 0 + "px";
  }
  if (tankGame.verticalPosition >= tankGame.mapVertecal) {
    tankGame.verticalPosition = tankGame.mapVertecal - tankGame.speedTank;
    tank.style.top = tankGame.mapVertecal - tankGame.tankSize + tankGame.speedTank + "px";
  }
}

//=======================================================================================================

document.addEventListener('keydown', function (event) {

  if (event.key == "ArrowDown"){
    tankGame2.verticalPosition = tankGame2.verticalPosition + tankGame2.speedTank;
    tank2.style.top = tankGame2.verticalPosition + "px";
    console.log (tankGame2.verticalPosition);
   
  }
  if (event.key == "ArrowUp"){
    tankGame2.verticalPosition = tankGame2.verticalPosition - tankGame2.speedTank;
    tank2.style.top = tankGame2.verticalPosition + "px";
    console.log (tankGame2.verticalPosition);
    
  }
  if (event.key == "ArrowLeft"){
    tankGame2.horisontalPosition = tankGame2.horisontalPosition - tankGame2.speedTank;
    tank2.style.left = tankGame2.horisontalPosition + "px";
    console.log (tankGame2.horisontalPosition);
    
  }
  if (event.key == "ArrowRight"){
    tankGame2.horisontalPosition = tankGame2.horisontalPosition + tankGame2.speedTank;
    tank2.style.left = tankGame2.horisontalPosition + "px";
    console.log (tankGame2.horisontalPosition);
   
  }
  
    if (tankGame2.horisontalPosition <= 0) {
      tankGame2.horisontalPosition = 0;
      tank2.style.left = 0 + "px";
    }
    if (tankGame2.horisontalPosition >= tankGame2.mapHorizontal) {
      tankGame2.horisontalPosition = tankGame2.mapHorizontal - tankGame2.speedTank;
      tank2.style.left = tankGame2.mapHorizontal - tankGame2.tankSize + tankGame2.speedTank + "px";
    }
    if (tankGame2.verticalPosition <= 0) {
      tankGame2.verticalPosition = 0;
      tank2.style.top = 0 + "px";
    }
    if (tankGame2.verticalPosition >= tankGame2.mapVertecal) {
      tankGame2.verticalPosition = tankGame2.mapVertecal - tankGame2.speedTank;
      tank2.style.top = tankGame2.mapVertecal - tankGame2.tankSize + tankGame2.speedTank + "px";
    }
  
  });