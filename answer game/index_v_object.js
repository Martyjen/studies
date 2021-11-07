
var randomData = {
    arreyData: [["Да", "Нет", "Возможно"], ["bagraundGreen", "bagraundRed", "bagraundYellow"]], // 1 массив: Добавить имя + 2 массив: добавить class.
    button: "select_block", //Добавить ID элемента на нажатие которого будет реакция - "кнопка СТАРТ".
    text: "h2_id", //Добавить ID места вывода результата из масивва "arreyData".
    nameClass: "select_block", //Добавить class блока для замены его из масивва "arreyData".
    i: 0,
    r: 0,

    start: function () {
        var thet = this;
        document.getElementById(this.button).addEventListener('click', animationBackground);
        
        function animationBackground() {
            showResultAndColor(thet.i);
            thet.i++;
            if (thet.i < thet.arreyData[0].length) {
                setTimeout(animationBackground, 100);
            }
            else if (thet.r < thet.arreyData[0].length) {
                thet.i = 0;
                thet.r++;
                setTimeout(animationBackground, 100);
            }
            else {
                thet.r = 0;
                thet.i = 0;
                var key = Math.floor(Math.random() * thet.arreyData[0].length);
                showResultAndColor(key);
            }
        };

        function showResultAndColor(key) {
            document.getElementById("h2_id").innerHTML = thet.arreyData[0][key];
            document.getElementById("select_block").className = thet.arreyData[1][key];
        }
    }
}