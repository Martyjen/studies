var arreyData = [["Да", "Нет", "Возможно"], ["bagraundGreen", "bagraundRed", "bagraundYellow"]];
var i = 0;
var r = 0;

document.getElementById("buttonId").addEventListener('click', rotateBackground);

function rotateBackground() {
    showResultAndColor(i);
    i++;
    if (i < arreyData[0].length) {
        setTimeout(rotateBackground, 100);
    }
    else if (r < arreyData[0].length) {
        i = 0;
        r++;
        setTimeout(rotateBackground, 100);
    }
    else {
        r = 0;
        i = 0;
        var key = Math.floor(Math.random() * arreyData[0].length);
        showResultAndColor(key);
    }
}

function showResultAndColor(key) {
    document.getElementById("h2_id").innerHTML = arreyData[0][key];
    document.getElementById("select_block").className = arreyData[1][key];
}