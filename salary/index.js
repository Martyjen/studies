let box = document.querySelectorAll(".input_class");
let prizeResaultId = 30; //Премия 30%.
let intensityId = 230; //Интенсивность.
let childrenVl = 37; //
let resaultVl;

button.addEventListener('click', function () {

let summ = +worked_day.value * 8; // Часов за полные дни

if (tarif_no_day.value > 0) {
    var summHourDay = +summ + +tarif_no_day.value; // Сумма часов за все дни.
} else {
   var summHourDay = +summ;
}

let summHour = +hour.value * +summHourDay; // оплата по тарифу. сумма всех часов и умноженые на тариф час.
let prizeResault = +summHour / 100 * +prizeResaultId; // ежемесячная премия.
let summHourIntensity = +intensityId / +day_rate.value * (+day_rate.value - +vacation_day.value); //Интенсивность. Кофицент 10.45 (230 рублей / месяц).
let professionalismVl = +summHour / 100 * +professionalism.value; //Профмастерство.
let experienceVl = +summHour / 100 * +experience.value; //За стаж.
let harmfulnessVl = +summHourDay * +harmfulness.value; //За вредность. Кофицент 0.278.

if (managment.value > 0) {
    var managmentVl = summHour / 100 * +experience.value; // Бригадир.
    resaultVl = +summHour + +prizeResault + +professionalismVl + +experienceVl + +harmfulnessVl + +summHourIntensity + +managmentVl + +prizeId.value;
} else {
    resaultVl = +summHour + +prizeResault + +professionalismVl + +experienceVl + +harmfulnessVl + +summHourIntensity + +prizeId.value;
}


let childrenDel = +childrenId.value * childrenVl * 0.13; //Налоговые вычеты на детей.

if (childrenId.value > 0) {
    let childrenSumm = +childrenVl * +childrenId.value;
    resaultClear.value = +resaultVl - (+resaultVl - +childrenSumm) * 0.13; //Грязные с вычетом налогов за ребёнка.
    resault.value = +resaultVl; //Результат грязными.
  } else {
    resaultClear.value = +resaultVl / 100 * 86 ; //Чистыми, на руки.
    resault.value = +resaultVl; //Результат грязными.
  }



console.log(resaultClear.value + " -Чистыми, на руки");
console.log(resault.value + " -Грязные");
console.log(summHour + " - Оплата по часавому тарифу - полный месяц");
console.log(prizeResault + " - Премия за производственные результаты. Ежемесечкая премия");
console.log(summHourDay + " - Сумма часов за все дни.");
console.log(summHourIntensity + " - Интенсивность. (230 рублей / месяц)");
console.log(professionalism.value + " - Профмастерство");
console.log(experience.value + " - За стаж.");
console.log(harmfulness.value + " - За вредность. Кофицент 3.584.");
console.log(managment.value + " - Руководство бригадой");
console.log(childrenDel + " - Налоговые вычаты на детей. ");

});


