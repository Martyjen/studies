// Загрузка варианта кнопок из файла button.js.
let buttonKeyAll = document.getElementById('outButton');
var inputOne = document.getElementById('input_id');
var inputTwo = document.getElementById('input_id2');
var inputThree = document.getElementById('input_id3');
var radioInput = document.querySelectorAll('.radio-checked');

buttonKeyAll.innerHTML = buttonNormal; //Вариант клавиатуры при загрузке программы.
calculiator();

function calculiator() {
    let buttonId = document.querySelectorAll(".button_bt"); //Получил массив кнопок с классом ".button_bt".
    let arrySymbol = ["--", "++", "**", "//", "+-", "-+", "*+", "+*", "/+", "+/", "-*", "*-", "-/", "/-", "*/", "/*", "-*", "-/", "-.", "*.", "/.", "+.", ". -", "- .", " - -", "- - "];
    
    for (let i = 0; i < buttonId.length; i++) {
        buttonId[i].addEventListener('click', function (event) {

            //-== Варианты клавиатуры==-
            for (let i = 0; i < radioInput.length; ++i) {
                radioInput[i].addEventListener('click', function () {
                    if (radioInput[0].checked == true) {
                        buttonKeyAll.innerHTML = buttonNormal;
                    } if (radioInput[1].checked == true) {
                        buttonKeyAll.innerHTML = buttonFull;

                    }
                    calculiator();
                });
            }
            //Реакии на нажатие клавиш.
            fontSize();
            if (inputOne.value === "ОГО-ГО-ГО какое число!" || inputOne.value === "Mixer - Немоквич Евгений.") {
                inputOne.value = "";
            }
            if (event.path[0].value === "ce") {
                inputOne.value = "";
            }
            else if (event.path[0].value === "delite") {
                oneDelSimbol(-1);
            }
            else if (event.path[0].value == "=") {
                addInput3();
                calculateResult();
                fontSize();
                outputChange();
            }
            else {
                inputOne.value += event.path[0].value;
                noInput();
                noDubbleSigns();
                noDubbleDot();
            }
        });
    }

    //Сравнение и вывод:
    function outputChange() {
        if (String(inputOne.value) === " Infinity" || String(inputOne.value) === " -Infinity") {
            inputOne.value = "ОГО-ГО-ГО какое число!";
            inputOne.style.fontSize = 30 + "px";
        } else if (String(inputOne.value) === " undefined") {
            inputOne.value = "";
        } else if (String(inputOne.value) === " 46938") {
            inputOne.value = "Mixer - Немоквич Евгений.";
            inputOne.style.fontSize = 25 + "px";
        }
    }

    //Уменьшает размер символов в "input". ========================
    function fontSize() {
        let fontSizePx = 48 - inputOne.value.length;
        inputOne.style.fontSize = fontSizePx <= 25 ? 25 : fontSizePx + "px";
    }

    //Вычисление.
    function calculateResult() {
        inputTwo.value = inputOne.value.trimStart();
        inputTwo.style.fontSize = 23 + "px";
        inputTwo.style.color = "red";
        inputOne.value = eval(inputOne.value);
        inputOne.value = " " + inputOne.value; // Добавляет пробел в начало строки.
        inputTwo.value = inputTwo.value + " =" + inputOne.value;
    }

    function addInput3() {
        inputThree.value = inputTwo.value; // Удалить проблелы в начале строки.
        inputThree.style.fontSize = 23 + "px";
        inputThree.style.color = "red";
    }

    //Запрет ввода первым математических операторов + - * / и 00 .
    function noInput() {
        for (let i = 0; i < 1; ++i) {
            if (inputOne.value == '+' || inputOne.value == "-" || inputOne.value == "/" || inputOne.value == "*" || inputOne.value == "0" + i || inputOne.value == " 0" + i) {
                oneDelSimbol(-1);
            }
        }
    }

    //Запрет ввода груп символов из массива "arrySymbol".
    function noDubbleSigns() {
        for (let i = 0; i < arrySymbol.length; ++i) {
            if (inputOne.value[inputOne.value.length - 1] + inputOne.value[inputOne.value.length - 2] == arrySymbol[i] || inputOne.value[inputOne.value.length - 2] + inputOne.value[inputOne.value.length - 1] == "/0") {
                oneDelSimbol(-1);
            } else if (inputOne.value[inputOne.value.length - 1] + inputOne.value[inputOne.value.length - 2] + inputOne.value[inputOne.value.length - 3] == arrySymbol[i] || inputOne.value[inputOne.value.length - 1] + inputOne.value[inputOne.value.length - 2] + inputOne.value[inputOne.value.length - 3] + inputOne.value[inputOne.value.length - 4] == arrySymbol[i]) {
                oneDelSimbol(-2);
            }
        }
    }

    // //Запрет двух точек
    function noDubbleDot() {
        let tochka = 0;
        for (let i = 0; i < inputOne.value.length; ++i) {
            if (inputOne.value[i] == ".") {
                ++tochka;
                if (tochka == 2) {
                    oneDelSimbol(-1);
                }
            } else if (inputOne.value[i] == "+" || inputOne.value[i] == "-" || inputOne.value[i] == "*" || inputOne.value[i] == "/") {
                tochka = 0;
            }
        }
    }

    // Функция удаления символов.
    function oneDelSimbol(i) {
        inputOne.value = inputOne.value.slice(0, i);
    }
}