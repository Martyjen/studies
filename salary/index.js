let box = document.querySelectorAll(".input_class");
let button = document.querySelector("#button");
let resault;
button.addEventListener('click', function () {

let summ = +box[3].value * 8; // Часов за полные дни

if (box[4].value > 0) {
    var summHourDay = summ + +box[4].value; // Сумма часов за все дни.
} else {
   var summHourDay = summ;
}

let summHour = +box[2].value * summHourDay; // оплата по тарифу. сумма всех часов и умноженые на тариф час.



let prizeResault = summHour / 100 * +box[5].value; // ежемесячная премия.
let summHourIntensity = +box[6].value / +box[0].value * (+box[0].value - +box[1].value); //Интенсивность. Кофицент 10.45 (230 рублей / месяц).
let professionalism = summHour / 100 * +box[7].value; //Профмастерство.--------------
let experience = summHour / 100 * +box[8].value; //За стаж. --------------------
let harmfulness = summHourDay * +box[9].value; //За вредность. Кофицент 0.278. ---------

if (box[10].value > 0) {
    var managment = summHour / 100 * +box[8].value; // Бригадир.
    resault = summHour + prizeResault + professionalism + experience + harmfulness + summHourIntensity + managment;
} else {
    resault = summHour + prizeResault + professionalism + experience + harmfulness + summHourIntensity;
}

// let resault = summHour + prizeResault + professionalism + experience + harmfulness + summHourIntensity + managment;

box[12].value = resault;

console.log(resault + " -Грязные");

console.log(summHour + " - Оплата по часавому тарифу - полный месяц");
console.log(prizeResault + " - Премия за производственные результаты. Ежемесечкая премия");
console.log(summHour + " - Сумма часов за неполные дни.");
console.log(summHourDay + " - Сумма часов за все дни.");
console.log(summHourIntensity + " - Интенсивность. (230 рублей / месяц)");
console.log(professionalism + " - Профмастерство");
console.log(experience + " - За стаж.");
console.log(harmfulness + " - За вредность. Кофицент 3.584.");
console.log(managment + " - Руководство бригадой");
});


