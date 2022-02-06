let buttonId = document.querySelectorAll(".button_bt"); //Получил массив кнопок с классом ".button_bt".
var inputId = document.getElementById('input_id');
let arrySymbol = ["--", "++", "**", "//", "+-", "-+", "*+", "+*", "/+", "+/", "-*", "*-", "-/", "/-", "*/", "/*", "-*", "-/", "-.", "*.", "/.", "+."];

for (let i = 0; i < buttonId.length; i++) {

    buttonId[i].addEventListener('click', function (event) {
        myFunction();
        if (inputId.value === "Делить на 0 нельзя!!!") {
            inputId.value = "";
        }
        if (event.path[0].value === "ce") {
            inputId.value = "";
        }
        else if (event.path[0].value === "delite") {
            let stringValue = inputId.value;
            inputId.value = stringValue.slice(0, -1);
        }
        else if (event.path[0].value == "=") {
            calculateResult();
            noUndefined();
        }
        else {
            let keyValue = event.path[0].value;
            inputId.value += keyValue;
            noInput();
            noDubbleSigns();
            noDubbleDot();
        }
        if (String(inputId.value) === " Infinity" || String(inputId.value) === " -Infinity") {
            inputId.value = "Делить на 0 нельзя!!!";
        }
    });
}

function noUndefined() {
    if (String(inputId.value) === " undefined") {
        inputId.value = "";
    } else if (String(inputId.value) === " 46938") {
        inputId.value = "Mixer: v 0.3 - Немоквич Евгений.";
    }
}

//Уменьшает размер символов в "input". ========================
function myFunction() {
    var initialSize = 50 - inputId.value.length;
    initialSize = initialSize <= 25 ? 25 : initialSize;
    inputId.style.fontSize = initialSize + "px";
    console.log(inputId.style.fontSize);
}

//Вычисление.
function calculateResult() {
    inputId.value = eval(inputId.value);
    inputId.value = " " + inputId.value; // добавляет пробел в начало строки.
}

//Запрет ввода первым символом + - * /.
function noInput() {
    if (inputId.value[0] == '+' || inputId.value[0] == "-" || inputId.value[0] == "/" || inputId.value[0] == "*") {
        var stringValue = inputId.value;
        inputId.value = stringValue.slice(0, -1);
    }
}

//Запрет двух символов подряд.
function noDubbleSigns() {
    let stringVl = inputId.value.length - 1;
    let stringVlMinusOne = inputId.value.length - 2;
    let a = inputId.value[stringVl];
    let b = inputId.value[stringVlMinusOne];

    for (let i = 0; i < arrySymbol.length; ++i) {
        if (a + b == arrySymbol[i]) {
            var stringValue = inputId.value;
            inputId.value = stringValue.slice(0, -1);
        }
    }
}

//Запрет двух точек
function noDubbleDot() {
    var tochka = 0;
    for (let i = 0; i < inputId.value.length; ++i) {
        let simvol = inputId.value[i];
        if (simvol == ".") {
            ++tochka;
            if (tochka == 2) {
                var stringValue = inputId.value;
                inputId.value = stringValue.slice(0, -1);
            }
        } else if (simvol == "+" || simvol == "-" || simvol == "*" || simvol == "/") {
            tochka = 0;
        }
    }
}