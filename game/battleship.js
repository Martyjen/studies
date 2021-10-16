var view = {

	displayMassage: function (msg){
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	},

	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit"); //Добавляем новый класс для переменной cell.
	}
}
var model = {
	boartSize: 7,
	numShips: 3,
	shipLength: 2,
	shipsSunk: 0,

ships = [
	{locations: ["10", "20", "30"], hits: ["", "", "hit"]},
	{locations: ["32", "33", "34"], hits: ["", "hit", ""]},
	{locations: ["63", "64", "65"], hits: ["", "", ""]}
],
fire: function(){
	for (var i = 0; i < this.numShips; i++){ // i - перебираем колиство масивов (караблей)
		var ship = this.ships[i]; // this.ships[i] передаёт данные о количестве объектов в масиве [0-2] переменной "ship".
		var index = ship.locations.indexOf(guess);
		if (index >= 0){
			ship.hits[index] = "hit";
			if (this.shipsSunk(ship)){ 
				this.shipsSunk++; // Если значение массива
			}
			return true;
		}
		
	}
	return false;
},
};



// console.log(ships[0]["locations"][1]);

// view.displayHit("01");
// view.displayMassage("hey boy");
// view.displayMiss("22");
// view.displayHit("03");
// view.displayMassage("hey boy");
// view.displayMiss("21");