// Экран - display
document.querySelector('#inputOneTwoThree').innerHTML = displayInput; // загрузка параметров экрана из файла display.js;

let radioInput = document.querySelectorAll('.radio-checked');
let dubbleDislay = document.querySelector('#bubble_display');

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
    inputTwo.style.fontSize = 37 + "px";
    inputTwo.style.color = "red";
    inputThree.style.fontSize = 37 + "px";
    inputThree.style.color = "red";
}

// -=Двойным нажатием возвращать на второй экран, значение на первый экран=-
document.addEventListener('dblclick', function (e) {
    if (e.target.id === "bubble_display") {
        inputOne.value = dubbleDislay.innerHTML.slice(0, -1);

    }
});

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
       buttonId[i].classList.remove("full");
        buttonId[i].classList.add("normal");
        if (radioInput[1].checked == true) {
            buttonId[i].classList.remove("normal");
            buttonId[i].classList.add("full");
        }

        buttonId[i].addEventListener('click', function () {
            // console.log(buttonId[i].value); //выводить В консоль значение нажатой кнопки
            //Реакции на нажатие клавиш.
            fontSize();
            if (inputOne.value === "ОГО-ГО-ГО какое число!" || inputOne.value === "Mixer - Немоквич Евгений.") {
                inputOne.value = "";
            }
            if (buttonId[i].value === "ce") {
                inputOne.value = "";
            }
            else if (buttonId[i].value === "delite") {
                oneDelSimbol(-1);
            }
            else if (buttonId[i].value == " -") {
                modulMunus();
            }
            else if (buttonId[i].value == "%") { // Проценты - введённое число делим на 100 для получения 1%.
                calculateResult();
                outputChange();
                inputOne.value = inputOne.value / 100;
            }
            else if (buttonId[i].value == "PI") {  // Число ПИ
                inputOne.value += "3.141592653589793"
            }
            else if (buttonId[i].value == "=") {
                addInput3();
                calculateResult();
                fontSize();
                outputChange();
            }
            else if (buttonId[i].value == "save") {
                console.log(dubbleDislay.innerHTML);
                dubbleDislay.innerHTML = dubbleDislay.innerHTML + inputOne.value + "+"; // добавляет значение к уже имеющемуся на дополнительном экране
            }
            else if (buttonId[i].value == "del_dubble") {

                dubbleDislay.innerHTML = dubbleDislay.innerHTML.slice(0, -1);//Удаляем последний символ на дополнительном экране
            }
            else if (buttonId[i].value == "ce_dubble") { //Очищаем дополнительный экран
                dubbleDislay.innerHTML = "";
            }
            else {
                inputOne.value += buttonId[i].value;
                noInput();
                noDubbleSigns();
                noDubbleDot();
            }
        });
    }

    //модуль "минус" - временное решение.
    function modulMunus() {
        if (inputOne.value[0] == "-") {
            inputOne.value = inputOne.value.slice(1);
        } else if (inputOne.value[0] != "-") {
            let arryInput = inputOne.value.split(''); // разбить строку на массив.
            arryInput.unshift("-"); // добавить "-" в начало массива.
            inputOne.value = arryInput.join(""); // все объекты массива объединить в строку.
        }
    }

    //Сравнение и вывод:
    function outputChange() {
        if (String(inputOne.value) === "Infinity" || String(inputOne.value) === "-Infinity") {
            inputOne.value = "ОГО-ГО-ГО какое число!";
            inputOne.style.fontSize = 35 + "px";
        } else if (String(inputOne.value) === "undefined") {
            inputOne.value = "";
        } else if (String(inputOne.value) === "46938") {
            inputOne.value = "Mixer - Немоквич Евгений.";
            inputOne.style.fontSize = 50 + "px";
        }
    }

    //Уменьшает размер символов в "input". ========================
    function fontSize() {
        let fontSizePx = 56 - inputOne.value.length;
        inputOne.style.fontSize = fontSizePx <= 25 ? 25 : fontSizePx + "px";
    }

    //Вычисление.
    function calculateResult() {
        inputTwo.value = inputOne.value;
        inputOne.value = eval(inputOne.value); // Вычисление.
        inputOne.value = inputOne.value; // Добавляет пробел в начало строки.
        inputTwo.value = inputTwo.value + " = " + inputOne.value;
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

    //Запрет ввода групп символов из массива "arrySymbol".
    function noDubbleSigns() {
        let a = inputOne.value[inputOne.value.length - 1];
        let b = inputOne.value[inputOne.value.length - 2];
        let c = inputOne.value[inputOne.value.length - 3];
        let d = inputOne.value[inputOne.value.length - 4];
        for (let i = 0; i < arrySymbol.length; ++i) {

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

