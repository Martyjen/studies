var view = {

	displayMassage: function (msg){
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss"); //Добавляем новый класс для переменной cell.
	}
}
var model = {
	boartSize: 7,
	numShips: 3,
	shipLength: 2,
	shipsSunk: 0,
	ships: [
	{locations: ["10", "20", "30"], hits: ["", "", "hit"]},
	{locations: ["32", "33", "34"], hits: ["", "hit", ""]},
	{locations: ["63", "64", "65"], hits: ["", "", ""]}
],
fire: function(guess){
	for (var i = 0; i < this.numShips; i++){ // i - перебираем колиство масивов (караблей)
		var ship = this.ships[i]; // this.ships[i] передаёт данные о количестве объектов в масиве [0-2] переменной "ship".
		var index = ship.locations.indexOf(guess); //Найти в массиве "ship" значение переданное параметром "guess" и передать его переменной "index".
		if (index >= 0){
			ship.hits[index] = "hit";
			view.displayHit(guess);
			view.displayMassage("Попали!");
			if (this.isSunk(ship)){ 
				view.displayMassage("Вы потапили корабль!");
				this.shipsSunk++; // Если значение массива
			}
			return true;
		}
		
	}
	view.displayMiss(guess);
	view.displayMassage("Вы промахнулись");
	return false;
},
isSunk: function(ship){
	for (var i = 0; i , this.shipLength; i++){
		if (ship.hits[i] !=="hit"){
			return false;
		}
	}
	return true;
}
};

var controller = {
	guesses: 0,
	processGuess: function(guess){

	}
};

function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "F", "G"];
	
	if (guess === null || guess.length !==2){
		alert ("Ошибка ввода координат!");
	} else {
		firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);

		if (isNan(row) || isNaN(column)) {
			alert("вы ввели некорректные данные.");
		
		} else if (row < 0 || row >= model.boardSize ||
			column < 0 || column >= model.boardSize){
				alert ("Нет таких данных");
			}
				}

		}

// model.fire("53");
// model.fire("06");
// model.fire("14");
// model.fire("33");
// model.fire("32");
// model.fire("22");



// console.log(ships[0]["locations"][1]);

// view.displayHit("01");
// view.displayMassage("hey boy");
// view.displayMiss("22");
// view.displayHit("03");
// view.displayMassage("hey boy");
// view.displayMiss("21");
