let divCalc = document.querySelectorAll(".button_bt"); //Получил массив кнопок с классом ".button_bt".
var elNumber1 = document.getElementById('number1');


for (let i = 0; i < divCalc.length; i++) {

    divCalc[i].addEventListener('click', function (event) {
        myFunction()
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
            calculateResult()
        }
        else {

            let keyValue = event.path[0].value;
            elNumber1.value += keyValue;
        }

        if (String(elNumber1.value) === "Infinity") {
            elNumber1.value = "Делить на 0 нельзя!!!";
            console.log(typeof elNumber1.value);
        }

    });

}

//Уменьшает размер символов в "input". ========================

function myFunction() {
    var x = elNumber1;
    var initialSize = 37 - x.value.length;
    initialSize = initialSize <= 28 ? 28 : initialSize;
    x.style.fontSize = initialSize + "px";
}

//Вычисление.---------------------------------------------

function calculateResult() {
    elNumber1.value = eval(elNumber1.value);
}

