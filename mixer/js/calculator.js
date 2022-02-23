let buttonId = document.querySelectorAll(".button_bt"); //Получил массив кнопок с классом ".button_bt".
// let inputClass = document.querySelectorAll(".input-class"); //Получил массив кнопок с классом ".button_bt".
var inputId = document.getElementById('input_id');
var input_id2 = document.getElementById('input_id2');
var input_id3 = document.getElementById('input_id3');
let arrySymbol = ["--", "++", "**", "//", "+-", "-+", "*+", "+*", "/+", "+/", "-*", "*-", "-/", "/-", "*/", "/*", "-*", "-/", "-.", "*.", "/.", "+.", ". -", "- .", " - -", "- - "];
for (let i = 0; i < buttonId.length; i++) {
    buttonId[i].addEventListener('click', function (event) {
        fontSize();
        if (inputId.value === "ОГО-ГО-ГО какое число!" || inputId.value === "Mixer - Немоквич Евгений.") {
            inputId.value = "";
        }
        if (event.path[0].value === "ce") {
            inputId.value = "";
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
            inputId.value += event.path[0].value;
            noInput();
            noDubbleSigns();
            noDubbleDot();
        }
    });
}

//Сравнение и вывод:
function outputChange() {
    if (String(inputId.value) === " Infinity" || String(inputId.value) === " -Infinity") {
        inputId.value = "ОГО-ГО-ГО какое число!";
        inputId.style.fontSize = 30 + "px";
    } else if (String(inputId.value) === " undefined") {
        inputId.value = "";
    } else if (String(inputId.value) === " 46938") {
        inputId.value = "Mixer - Немоквич Евгений.";
        inputId.style.fontSize = 25 + "px";
    }
}

//Уменьшает размер символов в "input". ========================
function fontSize() {
    let fontSizePx = 48 - inputId.value.length;
    inputId.style.fontSize = fontSizePx <= 25 ? 25 : fontSizePx + "px";
}

//Вычисление.
function calculateResult() {
    input_id2.value = inputId.value.trimStart();
    input_id2.style.fontSize = 23 + "px";
    input_id2.style.color = "red";
    inputId.value = eval(inputId.value);
    inputId.value = " " + inputId.value; // Добавляет пробел в начало строки.
    input_id2.value = input_id2.value + " =" + inputId.value;
}

function addInput3() {
    input_id3.value = input_id2.value; // Удалить проблелы в начале строки.
    input_id3.style.fontSize = 23 + "px";
    input_id3.style.color = "red";
}

//Запрет ввода первым математических операторов + - * / и 00 .
function noInput() {
    for (let i = 0; i < 10; ++i) {
        if (inputId.value == '+' || inputId.value == "-" || inputId.value == "/" || inputId.value == "*" || inputId.value == "0" + i || inputId.value == " 0" + i) {
            oneDelSimbol(-1);
        }
    }
}

//Запрет ввода груп символов из массива "arrySymbol".
function noDubbleSigns() {
    for (let i = 0; i < arrySymbol.length; ++i) {
        if (inputId.value[inputId.value.length - 1] + inputId.value[inputId.value.length - 2] == arrySymbol[i] || inputId.value[inputId.value.length - 2] + inputId.value[inputId.value.length - 1] == "/0") {
            oneDelSimbol(-1);
        } else if (inputId.value[inputId.value.length - 1] + inputId.value[inputId.value.length - 2] + inputId.value[inputId.value.length - 3] == arrySymbol[i] || inputId.value[inputId.value.length - 1] + inputId.value[inputId.value.length - 2] + inputId.value[inputId.value.length - 3] + inputId.value[inputId.value.length - 4] == arrySymbol[i]) {
            oneDelSimbol(-2);
        }
    }
}

// //Запрет двух точек
function noDubbleDot() {
    let tochka = 0;
    for (let i = 0; i < inputId.value.length; ++i) {
        if (inputId.value[i] == ".") {
            ++tochka;
            if (tochka == 2) {
                oneDelSimbol(-1);
            }
        } else if (inputId.value[i] == "+" || inputId.value[i] == "-" || inputId.value[i] == "*" || inputId.value[i] == "/") {
            tochka = 0;
        }
    }
}

// Функция удаления последнего символа.
function oneDelSimbol(i) {
    inputId.value = inputId.value.slice(0, i);
}