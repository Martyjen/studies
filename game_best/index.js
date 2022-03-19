let tankGame = {
  mapVertecal: 400,
  mapHorizontal: 400,
  tank: document.querySelector("#tank"),
  speedTank: 3,
  verticalPosition: 0,
  horisontalPosition: 0,
}

let tankVertical;
let tankHorisont;
document.addEventListener('keydown', function (event) {
  if (event.key == "ArrowDown"){
    tankGame.verticalPosition = tankGame.verticalPosition + tankGame.speedTank;
    tank.style.top = tankGame.verticalPosition + "px";
    tankVertical = tank.style.top.replace(/[a-zа-яё]/gi, '');
    console.log (tankVertical);
  }
  if (event.key == "ArrowUp"){
    tankGame.verticalPosition = tankGame.verticalPosition - tankGame.speedTank;
    tank.style.top = tankGame.verticalPosition + "px";
    tankVertical = tank.style.top.replace(/[a-zа-яё]/gi, '');
    console.log (tankVertical);
  }
  if (event.key == "ArrowLeft"){
    tankGame.horisontalPosition = tankGame.horisontalPosition - tankGame.speedTank;
    tank.style.left = tankGame.horisontalPosition + "px";
    tankHorisont = tank.style.left.replace(/[a-zа-яё]/gi, '');
    console.log (tankHorisont);
  }
  if (event.key == "ArrowRight"){
    tankGame.horisontalPosition = tankGame.horisontalPosition + tankGame.speedTank;
    tank.style.left = tankGame.horisontalPosition + "px";
     tankHorisont = tank.style.left.replace(/[a-zа-яё]/gi, '');
    console.log (tankHorisont);
  }
  if (tankHorisont <= 0) {
    tankGame.horisontalPosition = 0 + 3;
    tank.style.left = 0 + "px";
  }
  if (tankHorisont >= 350) {
    tankGame.horisontalPosition = 350 - 3;
    tank.style.left = 350 + "px";
  }
  if (tankVertical <= 0) {
    tankGame.verticalPosition = 0 + 3;
    tank.style.top = 0 + "px";
  }
  if (tankVertical >= 350) {
    tankGame.verticalPosition = 350 - 3;
    tank.style.top = 350 + "px";
  }
});