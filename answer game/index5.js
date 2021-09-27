
var start = document.getElementById("buttonId");
start.addEventListener('click', startGameRandom);

function replaceBackground(background) { // функция с пораметром "bagraund" которая заменить "class" у элимента c ID "select_block".
    var backgroundColor = document.getElementById("select_block"); //Находим элемент по ID ==>
    backgroundColor.className = background; //Изменяем элементу class значение которого передаст параметр "bagraund".
}


function startGameRandom() {
    var randomNumber = Math.floor(Math.random() * 2); //присвоить переменной "randomNumber" случайное число от 0 до 1.99 округлённое до целого. 0 или 1.
    if (randomNumber == 1) { //Если переменная randomNumber равна 1, то =>
        replaceBackground("bagraundGreen"); //Передать функции replaceBackground, атрибут "bagraundGreen".
        document.getElementById("h2_id").innerHTML = "Да.";
    } else { //Иначе ==>
        document.getElementById("h2_id").innerHTML = "Нет.";
        replaceBackground("bagraundRed"); //Передать функции replaceBackground, атрибут "bagraundRed".
    }

}
