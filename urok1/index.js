function findCarInLot(car){
    for (var i = 0; i < lot.length; i++){
        if (car === lot[i]){
            return i;
        }
    }
    return -1;
}

var chery = {
    make: "Chervy",
    model: "Bel Air"
}
var taxi = {
    make: "webvill",
    model: "TAXI"
}
var fiat = {
    make: "Fiat",
    model: "500"
}
var fiat2 = {
    make: "Fiat",
    model: "500"
}

var lot = [chery, taxi, fiat, fiat2];

var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chery);
var loc4 = findCarInLot(fiat);

console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc1);