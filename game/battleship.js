var view = {

	displayMassage: function (msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function (location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function (location) {
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
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],
	
	fire: function (guess) {
		for (var i = 0; i < this.numShips; i++) { // i - перебираем колиство масивов (караблей)
			var ship = this.ships[i]; // this.ships[i] передаёт данные о количестве объектов в масиве [0-2] переменной "ship".
			var index = ship.locations.indexOf(guess); //Найти в массиве "ship" значение переданное параметром "guess" и передать его переменной "index".
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMassage("Попали!");
				if (this.isSunk(ship)) {
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

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = model.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;

	},

	generateShipLocations: function () {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},



	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
		} else { // vertical
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},


	isSunk: function (ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	}
};


var controller = {
	guesses: 0,
	processGuess: function (guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMassage("вы победили.");
			}
		}

	}
};


function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "F", "G"];

	if (guess === null || guess.length !== 2) { //Если "guess" равен null или длина параметра не равна 2, то ==> 
		alert("Ошибка ввода координат!");
	} else { // иначе ==>
		firstChar = guess.charAt(0); //"charAt" получает первый символ из переменной "guess" присвоить его переменной "firstChar".
		var row = alphabet.indexOf(firstChar); // "indexOf" ищит в массиве "alphabet" сравнивает значение со значением в переменной "firstChar", если находит совпадение, присветвает порядковый номер буквы в массиве переменной "row".
		var column = guess.charAt(1); //"charAt" получает второй символ из переменной "guess" присвоить его переменной "column".

		if (isNaN(row) || isNaN(column)) { //"isNaN" - если значение в переменных "row" и "column" не являются числом, то ==>
			alert("вы ввели некорректные данные.");

		} else if (row < 0 || row >= model.boardSize ||
			column < 0 || column >= model.boardSize) {
			alert("Нет таких данных");
		} else {
			return row + column;
		}
	}
	return null;

}

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
	
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode == 13) {
		fireButton.click();
		return false;
	}
}

function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}

window.onload = init;



// console.log(parseGuess("A0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G0"));
// console.log(parseGuess("H0"));
// console.log(parseGuess("A1"));

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
