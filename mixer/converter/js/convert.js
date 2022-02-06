let elNumber1 = document.getElementById('number1');
let resault = document.getElementById('resault_id');
let elButton = document.getElementById('button_Id');
let elSelect1 = document.getElementById('select1_id');
let elSelect2 = document.getElementById('select2_id');
let divCalc = document.querySelectorAll(".button_bt"); // Получаю массив кнопок.

optionsId(); // Запускает функцию добовления параметров Option для Select. // переменная "converter" подключена отдельно: Папка base - файл "base.js"
selectOption(); // Не допускает одинаковые параметры у Select1 и Select2;

function optionsId() {
    for (let i = 0; i < converter.length; i++) {
        elSelect1.options[i] = new Option; //Создать параметр Option, для переменной elSelect1.
        elSelect2.options[i] = new Option;
        elSelect1[i].innerHTML = converter[i].name; //Присваеваем
        elSelect1[i].value = converter[i].value;
        elSelect2[i].innerHTML = converter[i].name;
        elSelect2[i].value = converter[i].value;
    }
}

// Конвертер.
function convertingValues() {
    if (elSelect1.value < elSelect2.value) {
        resault.value = elSelect1.value / elNumber1.value / elSelect2.value;
    } else if (elSelect1.value > elSelect2.value) {
        resault.value = elSelect1.value * elNumber1.value / elSelect2.value;
    }
}

//Сравнивает значения в select, Если значение одинаковое, меняет значение на +1 в select2.
elSelect1.addEventListener('change', function () {
    noDuble()
});
elSelect2.addEventListener('change', function () {
    noDuble()
});
function noDuble() {
    selectOption();
    convertingValues();
    noInfinityNan()
}

// Не позволяет выбрать одинаковый пункт (Option) в меню (Select).
function selectOption() {
    if (elSelect1.selectedIndex === elSelect2.selectedIndex) {
        ++elSelect2.selectedIndex;
        if (elSelect2.selectedIndex === -1) {
            elSelect2.selectedIndex = elSelect2[0];
        }
    }
}

// Сравнивает значения NaN и Infinity. В случаи обноружения, очищает input.
function noInfinityNan() {
    if (String(resault.value) == "Infinity" || String(resault.value) == "NaN") {
        resault.value = "";
    }
}

for (let i = 0; i < elNumber1.value.length; ++i) {
    var simbol = elNumber1.value[i];
    if (simbol == "..") {
        elNumber1.value = simbol.slice(0, -1);

    }
}

// Клавиатура ==============================================
for (let i = 0; i < divCalc.length; i++) {

    divCalc[i].addEventListener('click', function (event) {

        if (event.path[0].value === "ce") {
            let keyValue = "";
            elNumber1.value = keyValue;
            resault.value = keyValue;
            noTochka();
        }
        else if (event.path[0].value === "delite") {
            let stringValue = elNumber1.value;
            elNumber1.value = stringValue.slice(0, -1);
            noDubbleDot();
            convertingValues();
        }
        else {
            let keyValue = event.path[0].value;
            elNumber1.value += keyValue;
            noDubbleDot();
            convertingValues();
        }
        noInfinityNan()
    });
}

//Запрет ввода двух и более точек.
function noDubbleDot() {
    var tochka = 0;
    for (let i = 0; i < elNumber1.value.length; ++i) {
        let simvol = elNumber1.value[i];
        if (simvol == ".") {
            ++tochka;
            if (tochka == 2) {
                var stringValue = elNumber1.value;
                elNumber1.value = stringValue.slice(0, -1);
            }
        }
    }
}
