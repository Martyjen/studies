
var randomAnswer = {
    button: document.getElementById("buttonId"),
    backgroundColor: document.getElementById("select_block"),


    start: function () {
        var that = this;
        this.button.addEventListener('click', function() {
            that.startGameRandom();
        });
    },

    //Случайный выбор значения "0 любо 1", с последующим выводом сообщения "Да любо нет".
    startGameRandom: function () {
        var that = this;
        let randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber == 1) {
            that.replaceBackground("bagraundGreen");
            document.getElementById("h2_id").innerHTML = "Да.";
        } else {
            document.getElementById("h2_id").innerHTML = "Нет.";
            that.replaceBackground("bagraundRed");
        }

    },
    // Присвоение нового класса пораметру "backgroundColor".
    replaceBackground: function (background) {
        this.backgroundColor.className = background;
    },
}







