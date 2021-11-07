var converter =
    [
        { name: "Нанометр", value: 0.000001 },
        { name: "Микрометр", value: 0.001 },
        { name: "Милиметр", value: 1 },
        { name: "Сантиметр", value: 10 },
        { name: "Дециметр", value: 100 },
        { name: "Метр", value: 1000 },
        { name: "Километр", value: 1000000 },
        { name: "Верста", value: 106680 },
        { name: "Миля", value: 1609344 },
        { name: "Морская миля", value: 1852000 },
        { name: "Ярд", value: 914.4000000315285 },
        { name: "Фут", value: 304.8 },
        { name: "Пядь", value: 177.8 },
        { name: "Палайста", value: 70 },
        { name: "Декаметр", value: 10000 },
        { name: "Эксаметр", value: 999999999999999900000 },
        { name: "Гигаметр", value: 999999999999.9999 },
        { name: "Гектометр", value: 100000 },
        { name: "Световой год", value: 9460528404880087000 },
        { name: "Гектометр", value: 100000 },
        { name: "Астрономическая единица", value: 149597870700000 },
        { name: "Парсек", value: 30856778570831270000 },
        
            ];

var elNumber1 = document.getElementById('number1');
var resault = document.getElementById('resault_id');
var elButton = document.getElementById('button_Id');
var elSelect1 = document.getElementById('select1_id');
var elSelect2 = document.getElementById('select2_id');
elButton.addEventListener('click', convertingValues);

optionsId();

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
function convertingValues() {
    if (elSelect1.value < elSelect2.value) {
        resault.value = elSelect1.value / elNumber1.value / elSelect2.value;
    } else if (elSelect1.value > elSelect2.value) {
        resault.value = elSelect1.value * elNumber1.value / elSelect2.value;
    } else {
        resault.value = 'Не выбрали параметры конвертирования';
    }
}