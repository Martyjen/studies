let buttonId = document.querySelectorAll(".button_bt"); //Получил массив кнопок с классом ".button_bt".
var inputId = document.getElementById('input_id');
let arrySymbol = ["--", "++", "**", "//", "+-", "-+", "*+", "+*", "/+", "+/", "-*", "*-", "-/", "/-", "*/", "/*", "-*", "-/", "-.", "*.", "/.", "+.", ". -", "- .", " - -", "- - "];
for (let i = 0; i < buttonId.length; i++) {

    buttonId[i].addEventListener('click', function (event) {
        fontSize();
        if (inputId.value === "ОГО-ГО-ГО какое число!") {
            inputId.value = "";
        }
        if (event.path[0].value === "ce") {
            inputId.value = "";
        }
        else if (event.path[0].value === "delite") {
            oneDelSimbol(-1);
        }
        else if (event.path[0].value == "=") {
            calculateResult();
            fontSize();
            outputChange()
        }
        else {
            let keyValue = event.path[0].value;
            inputId.value += keyValue;
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
        inputId.value = "Mixer: v 0.4 - Немоквич Евгений.";
        inputId.style.fontSize = 30 + "px";
    }
}
//Уменьшает размер символов в "input". ========================
function fontSize() {
    let fontSizePx = 50 - inputId.value.length;
    inputId.style.fontSize = fontSizePx <= 25 ? 25 : fontSizePx + "px";
    // console.log(fontSizePx);
}

//Вычисление.
function calculateResult() {
    inputId.value = eval(inputId.value);
    inputId.value = " " + inputId.value; // Добавляет пробел в начало строки.
}

//Запрет ввода первым математических операторов + - * /.
function noInput() {
    if (inputId.value[0] == '+' || inputId.value[0] == "-" || inputId.value[0] == "/" || inputId.value[0] == "*") {
        oneDelSimbol(-1);
    }
}

//Запрет ввода груп символов из массива "arrySymbol".
function noDubbleSigns() {
    for (let i = 0; i < arrySymbol.length; ++i) {
        let a = inputId.value[inputId.value.length - 1];
        let b = inputId.value[inputId.value.length - 2];
        let c = inputId.value[inputId.value.length - 3];
        let d = inputId.value[inputId.value.length - 4];
        if (a + b == arrySymbol[i] || b + a == "/0") {
            oneDelSimbol(-1);
        } else if (a + b + c == arrySymbol[i] || a + b + c + d == arrySymbol[i]) {
            oneDelSimbol(-2);

        }
    }
}

//Запрет двух точек
function noDubbleDot() {
    let tochka = 0;
    for (let i = 0; i < inputId.value.length; ++i) {
        let simvol = inputId.value[i];
        if (simvol == ".") {
            ++tochka;
            if (tochka == 2) {
                oneDelSimbol(-1);
            }
        } else if (simvol == "+" || simvol == "-" || simvol == "*" || simvol == "/") {
            tochka = 0;
        }
    }
}

// Функция удаления последнего символа.
function oneDelSimbol(i) {
    var stringValue = inputId.value;
    inputId.value = stringValue.slice(0, i);
}