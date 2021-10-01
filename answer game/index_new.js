var arreyData = [["Да", "Нет", "Возможно"], ["bagraundGreen", "bagraundRed", "bagraundYellow"]];

document.getElementById("buttonId").addEventListener('click', function () {
    var key = Math.floor(Math.random() * arreyData[0].length); //Присваеваем переменной "key" случайное число которое не больше длины массива "arreyData".
    document.getElementById("h2_id").innerHTML = arreyData[0][key];
    document.getElementById("select_block").className = arreyData[1][key];
});


//Строка 5 - использовал длину массива "arreyData.length" вместо зачения "3" - мне кажется, ==>
// что так более универсальней. При добавлении в массив новых данных, не нужно будет менять значение "3"