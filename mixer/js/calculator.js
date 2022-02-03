let divCalc = document.querySelectorAll(".button_bt"); //Получил массив кнопок с классом ".button_bt".
var elNumber1 = document.getElementById('number1');

for (let i = 0; i < divCalc.length; i++) {

    divCalc[i].addEventListener('click', function (event) {
        myFunction();

        if (elNumber1.value === "Делить на 0 нельзя!!!") {
            elNumber1.value = "";
        }
        if (event.path[0].value === "ce") {
            elNumber1.value = "";
        }
        else if (event.path[0].value === "delite") {
            let stringValue = elNumber1.value;
            elNumber1.value = stringValue.slice(0, -1);
        }
        else if (event.path[0].value == "=") {
            calculateResult();
            noUndefined();
        }
        else {
            let keyValue = event.path[0].value;
            elNumber1.value += keyValue;
            onInput();
            noZnaki();
            noTochek();
        }
        if (String(elNumber1.value) === " Infinity" || String(elNumber1.value) === " -Infinity") {
            elNumber1.value = "Делить на 0 нельзя!!!";
        }
    });
}

function noUndefined() {
    if (String(elNumber1.value) === " undefined") {
        elNumber1.value = "";
    } else if (String(elNumber1.value) === " 46938") {
        elNumber1.value = "Mixer: v 0.3 - Немоквич Евгений.";
    }
}

//Уменьшает размер символов в "input". ========================
function myFunction() {
    var initialSize = 50 - elNumber1.value.length;
    initialSize = initialSize <= 25 ? 25 : initialSize;
    elNumber1.style.fontSize = initialSize + "px";
    console.log(elNumber1.style.fontSize);
}

//Вычисление.
function calculateResult() {
    elNumber1.value = eval(elNumber1.value);
    elNumber1.value = " " + elNumber1.value; // добавляет пробел в начало строки.
}

//Запрет ввода первым символом + - * /.
function onInput() {
    if (elNumber1.value[0] == '+' || elNumber1.value[0] == "-" || elNumber1.value[0] == "/" || elNumber1.value[0] == "*") {
        var stringValue = elNumber1.value;
        elNumber1.value = stringValue.slice(0, -1);
    }
}

//Запрет двух символов подряд.
function noZnaki() {
    let stringVl = elNumber1.value.length - 1;
    let stringVlMinusOne = elNumber1.value.length - 2;
    let a = elNumber1.value[stringVl];
    let b = elNumber1.value[stringVlMinusOne];
    // console.log(a + " a");
    // console.log(b + " b");
    if (a + b == "++"
        || a + b == "--"
        || a + b == "**"
        || a + b == "//"
        || a + b == "+-"
        || a + b == "-+"
        || a + b == "*+"
        || a + b == "+*"
        || a + b == "/+"
        || a + b == "+/"
        || a + b == "-*"
        || a + b == "*-"
        || a + b == "-/"
        || a + b == "/-"
        || a + b == "*/"
        || a + b == "/*"
        || a + b == "-*"
        || a + b == "-/"
        || a + b == "-."
        || a + b == "*."
        || a + b == "/."
        || a + b == "+.") {
        var stringValue = elNumber1.value;
        elNumber1.value = stringValue.slice(0, -1);
    }
}


//Запрет двух точек

function noTochek() {
    var tochka = 0;
    for (let i = 0; i < elNumber1.value.length; ++i) {
        let simvol = elNumber1.value[i];
        if (simvol == ".") {
            ++tochka;
            if (tochka == 2) {
                var stringValue = elNumber1.value;
                elNumber1.value = stringValue.slice(0, -1);
            }
        } else if (simvol == "+" || simvol == "-" || simvol == "*" || simvol == "/") {
            tochka = 0;
        }

    }
}


