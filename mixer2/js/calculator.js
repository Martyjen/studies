// Экран - display
document.querySelector('#inputOneTwoThree').innerHTML = displayInput; // загрузка параметров экрана из файла display.js;

let radioInput = document.querySelectorAll('.radio-checked');

// Кнопки - button
let buttonKeyAll = document.querySelector('#outButton');
buttonKeyAll.innerHTML = buttonNormal; //Вариант клавиатуры при загрузке программы.

// Инициализация и загрузка данных.
calculiator(); // Инициализировать скрипт калькулятора.
inputTwo.value = localStorage.getItem('calcInputTwo'); // Загрузка сохранённых данных.
inputThree.value = localStorage.getItem('calcInputThree'); // Загрузка сохранённых данных.
slyleInput(); // Загрузка стилей.


// Оформление Input-ов.
function slyleInput() {
inputTwo.style.fontSize = 23 + "px";
inputTwo.style.color = "red";
inputThree.style.fontSize = 23 + "px";
inputThree.style.color = "red";
}

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

function calculiator() {
    let buttonId = document.querySelectorAll(".button_bt"); //Получил массив кнопок с классом ".button_bt".
    let arrySymbol = ["--", "++", "**", "//", "+-", "-+", "*+", "+*", "/+", "+/", "-*", "*-", "-/", "/-", "*/", "/*", "-*", "-/", "-.", "*.", "/.", "+.", ". -", "- .", " - -", "- - "];
    for (let i = 0; i < buttonId.length; i++) {
        buttonId[i].classList.add("normal");
        if (radioInput[1].checked == true) {
            buttonId[i].classList.add("full");
        }
        buttonId[i].addEventListener('click', function (event) {

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
            else if (event.path[0].value == " -"){
                modulMunus();
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

    //модуль -
       function modulMunus(){

        if (inputOne.value[0] != "-"){
      let arryInput = inputOne.value.split('');
      arryInput.unshift("-");
      inputOne.value = arryInput.join("");
        } else if (inputOne.value[0] == "-"){
            inputOne.value = inputOne.value.slice(1);
        }
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
        inputTwo.value = inputOne.value.trimStart(); // Удалить проблелы в начале строки.
        inputOne.value = eval(inputOne.value); // Вычисление.
        inputOne.value = " " + inputOne.value; // Добавляет пробел в начало строки.
        inputTwo.value = inputTwo.value + " =" + inputOne.value;
        localStorage.setItem('calcInputTwo', inputTwo.value);
    }

    function addInput3() {
        inputThree.value = inputTwo.value; 
        localStorage.setItem('calcInputThree', inputThree.value);
    }

    //Запрет ввода первым математических операторов + - * / и 00 .
    function noInput() {
        for (let i = 0; i < 10; ++i) { 
            if (inputOne.value == '+' || inputOne.value == "-" || inputOne.value == "/" || inputOne.value == "*" || inputOne.value == "0" + i || inputOne.value == " 0" + i) {
                oneDelSimbol(-1);
            }
        }
    }

    //Запрет ввода груп символов из массива "arrySymbol".
    function noDubbleSigns() {
        for (let i = 0; i < arrySymbol.length; ++i) {
            let a = inputOne.value[inputOne.value.length - 1];
            let b = inputOne.value[inputOne.value.length - 2];
            let c = inputOne.value[inputOne.value.length - 3];
            let d = inputOne.value[inputOne.value.length - 4];
            if (a + b == arrySymbol[i] || c + b + a == "/00" || c + b + a == "+00" || c + b + a == "-00" || c + b + a == "*00") {
                oneDelSimbol(-1);
            } else if (a + b + c == arrySymbol[i] || a + b + c + d == arrySymbol[i]) {
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