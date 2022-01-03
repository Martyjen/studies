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

// let simvol = elNumber1.value.replace(/[0-9]/g, ''); //удалить все цивры, получиное передать переменной "simvol"

function calculateResult() {
    elNumber1.value = eval(elNumber1.value);
    // console.log(typeof +elNumber1.value);
}
    // if (elNumber1.value.includes("-")) { // "includes" проверяет сроку на наличие "-", если он присуствует то "true"
    //     let [box1, box3] = elNumber1.value.split("-"); //"split" разбивает строку на две отдельные переменных, "box1 и box3", делителем служет символ "-"
    //     elNumber1.value = +box1 - +box3;
    // } else if (elNumber1.value.includes("+")) {
    //     let [box1, box3] = elNumber1.value.split("+");
    //     elNumber1.value = +box1 + +box3;
    // } else if (elNumber1.value.includes("/")) {
    //     let [box1, box3] = elNumber1.value.split("/");
    //     elNumber1.value = +box1 / +box3;
    // } else if (elNumber1.value.includes("*")) {
    //     let [box1, box3] = elNumber1.value.split("*");
    //         elNumber1.value = +box1 * +box3;
    // }
// }

