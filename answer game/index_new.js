var arreyResault = ["Да", "Нет", "Возможно"];
var arreybagraundColor = ["bagraundGreen", "bagraundRed", "bagraundYellow"]

document.getElementById("buttonId").addEventListener('click', function () {
    var key = Math.floor(Math.random() * arreyResault.length); //Присваеваем переменной "key" случайное число которое не больше длины массива "arreyResault".
    document.getElementById("select_block").className = arreybagraundColor[key];
    document.getElementById("h2_id").innerHTML = arreyResault[key];
});


//Строка 5 - использовал длину массива "arreyResault.length" вместо зачения "3" - мне кажется, ==>
// что так более универсальней. При добавлении в массив новых данных, не нужно будет менять значение "3"