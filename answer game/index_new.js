
var arreyData = [["Да", "Нет", "Возможно"], ["bagraundGreen", "bagraundRed", "bagraundYellow"]];
var i = 0;
var r = 0;

//Обработка нажатия кнопки. ==> Анимация: смена фона и результата по кругу.
document.getElementById("buttonId").addEventListener('click', function animationBackground(){
    showResultAndColor(i);
    i++;
    if (i < arreyData[0].length) {
        setTimeout(animationBackground, 100);
    }
    else if (r < arreyData[0].length) {
        i = 0;
        r++;
        setTimeout(animationBackground, 100);
    }
    else {
        r = 0;
        i = 0;
        var key = Math.floor(Math.random() * arreyData[0].length);
        showResultAndColor(key);
    }
});

//Показать результат и цвет фона.
function showResultAndColor(key) {
    document.getElementById("h2_id").innerHTML = arreyData[0][key];
    document.getElementById("select_block").className = arreyData[1][key];
}