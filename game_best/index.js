let tankGame = {
  mapGame: document.querySelector(".game"),
  mapVertecal: 600, // Вертикальный развер карты - кратное скорости танка.
  mapHorizontal: 1200, // Горизантальный развер карты - кратное скорости танка.
  tank: document.querySelector("#tank"),
  speedTank: 25, // Скорость танка - половина от размера танка.
  tankSize: 50, // Размер танка.
  verticalPosition: 0,
  horisontalPosition: 0,
}

//Инициализация игры.
tankGame.mapGame.style.width = tankGame.mapHorizontal + tankGame.speedTank + "px";
tankGame.mapGame.style.height = tankGame.mapVertecal + tankGame.speedTank + "px";
tankGame.tank.style.width = tankGame.tankSize + "px";
tankGame.tank.style.height = tankGame.tankSize + "px";

document.addEventListener('keydown', function (event) {

  if (event.key == "ArrowDown"){
    tankGame.verticalPosition = tankGame.verticalPosition + tankGame.speedTank;
    tank.style.top = tankGame.verticalPosition + "px";
    console.log (tankGame.verticalPosition);
  }
  if (event.key == "ArrowUp"){
    tankGame.verticalPosition = tankGame.verticalPosition - tankGame.speedTank;
    tank.style.top = tankGame.verticalPosition + "px";
    console.log (tankGame.verticalPosition);
  }
  if (event.key == "ArrowLeft"){
    tankGame.horisontalPosition = tankGame.horisontalPosition - tankGame.speedTank;
    tank.style.left = tankGame.horisontalPosition + "px";
    console.log (tankGame.horisontalPosition);
  }
  if (event.key == "ArrowRight"){
    tankGame.horisontalPosition = tankGame.horisontalPosition + tankGame.speedTank;
    tank.style.left = tankGame.horisontalPosition + "px";
    console.log (tankGame.horisontalPosition);
  }

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
    tank.style.top = tankGame.mapVertecal -  tankGame.tankSize + tankGame.speedTank + "px";
  
}
});