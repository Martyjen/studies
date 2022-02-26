let elNumber1 = document.getElementById('number1');
let resault = document.getElementById('resault_id');
let elSelect1 = document.getElementById('select1_id');
let elSelect2 = document.getElementById('select2_id');
let buttonId = document.querySelectorAll(".button_bt"); // Получаю массив кнопок.

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
    // if (elSelect1.value > elSelect2.value) {
    resault.value = elSelect1.value * elNumber1.value / elSelect2.value;
    // } else if (elSelect1.value < elSelect2.value) {
    //     resault.value = elSelect1.value * elNumber1.value / elSelect2.value;
    // }
}

//Сравнивает значения в select, Если значение одинаковое, меняет значение на +1 в select2.
elSelect1.addEventListener('change', function () {
    noDuble();
    localStorage.setItem('select1', elSelect1.value);
});
elSelect2.addEventListener('change', function () {
    noDuble();
    localStorage.setItem('select2', elSelect2.value);
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
        elSelect1.value = localStorage.getItem('select1');
        elSelect2.value = localStorage.getItem('select2');
    }
}

// Сравнивает значения NaN и Infinity. В случаи обноружения, очищает input.
function noInfinityNan() {
    if (String(resault.value) == "Infinity" || String(resault.value) == "NaN") {
        resault.value = "";
    }
}

// Клавиатура ==============================================
for (let i = 0; i < buttonId.length; i++) {

    buttonId[i].addEventListener('click', function (event) {

        if (event.path[0].value === "ce") {
            let keyValue = "";
            elNumber1.value = keyValue;
            resault.value = keyValue;
        }
        else if (event.path[0].value === "delite") {
            elNumber1.value = elNumber1.value.slice(0, -1);
            noDubbleDot();
            convertingValues();
        }
        else {
            elNumber1.value += event.path[0].value;
            noDubbleDot();
            elNumber1.value = elNumber1.value == "00" ? elNumber1.value.slice(0, -1) : elNumber1.value;
            convertingValues();
        }
        noInfinityNan()
    });
}

//Запрет ввода двух и более точек.
function noDubbleDot() {
    var tochka = 0;
    for (let i = 0; i < elNumber1.value.length; ++i) {
        if (elNumber1.value[i] == ".") {
            ++tochka;
            if (tochka == 2) {
                elNumber1.value = elNumber1.value.slice(0, -1);
            }
        }
    }
}