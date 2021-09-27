
var randomAnswer = {
    button: document.getElementById("buttonId"),
    backgroundColor: document.getElementById("select_block"),

    
    start: function () {
        this.button.addEventListener('click', this.startGameRandom);
    },

    //Случайный выбор значения "0 любо 1", с последующим выводом сообщения "Да любо нет".
    startGameRandom: function () {
        let randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber == 1) {
            randomAnswer.replaceBackground("bagraundGreen");
            document.getElementById("h2_id").innerHTML = "Да.";
        } else {
            document.getElementById("h2_id").innerHTML = "Нет.";
            randomAnswer.replaceBackground("bagraundRed");
        }

    },
    // Присвоение нового класса пораметру "backgroundColor".
    replaceBackground: function(background) {
        this.backgroundColor.className = background;
    },
 }







