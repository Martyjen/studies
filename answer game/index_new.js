var arreyData = [["Да", "Нет", "Возможно"], ["bagraundGreen", "bagraundRed", "bagraundYellow"]];
var i = 0;
var r = 0;

document.getElementById("buttonId").addEventListener('click', rotateBackground);

function rotateBackground() {
    document.getElementById("select_block").className = arreyData[1][i];
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
        resaultSelected();
        r = 0;
        i = 0;
    }
}

function resaultSelected() {
    var key = Math.floor(Math.random() * arreyData[0].length); document.getElementById("h2_id").innerHTML = arreyData[0][key];
    document.getElementById("select_block").className = arreyData[1][key];
}