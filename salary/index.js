let box = document.querySelectorAll(".input_class");
let prizeResaultId = 30; //Премия 30%.
let intensityId = 230; //Интенсивность.
let childrenVl = 37; //
let managmentVl = 0; //Бригадир.
let resaultVl;

button.addEventListener('click', function (e) {

  let summ = +worked_day.value * 8; // Часов за полные дни.

  if (tarif_no_day.value > 0) {
    var summHourDay = +summ + +tarif_no_day.value; // Сумма часов за все дни.
  } else {
    var summHourDay = +summ;
  }

  let childrenDel = +childrenId.value * childrenVl * 0.13; //Налоговые вычеты на детей.
  let summHour = +hour.value * +summHourDay; // оплата по тарифу. сумма всех часов и умноженые на тариф час.
  let prizeResault = +summHour / 100 * +prizeResaultId; // ежемесячная премия.
  let summHourIntensity = +intensityId / +day_rate.value * (+day_rate.value - +vacation_day.value); //Интенсивность. Кофицент 10.45 (230 рублей / месяц).
  let professionalismVl = +summHour / 100 * +professionalism.value; //Профмастерство.
  let experienceVl = +summHour / 100 * +experience.value; //За стаж.
  let harmfulnessVl = +summHourDay * +harmfulness.value; //За вредность. Кофицент 0.278.

  if (managment.value > 0) {
    managmentVl = summHour / 100 * +experience.value; // Бригадир.
    resaultVl = +summHour + +prizeResault + +professionalismVl + +experienceVl + +harmfulnessVl + +summHourIntensity + +managmentVl + +prizeId.value;
  } else {
    resaultVl = +summHour + +prizeResault + +professionalismVl + +experienceVl + +harmfulnessVl + +summHourIntensity + +prizeId.value;
  }

  if (childrenId.value > 0) {
    let childrenSumm = +childrenVl * +childrenId.value;
    var resaultClearVl = +resaultVl - (+resaultVl - +childrenSumm) * 0.13 - 0.01 * +resaultVl; //Грязные с вычетом налогов за ребёнка.
    resaultPr = +resaultVl; //Результат грязными.
  } else {
    resaultClearVl = +resaultVl / 100 * 86; //Чистыми, на руки.
    resaultPr = +resaultVl; //Результат грязными.
  }
  resaultClear = resaultClearVl.toFixed(2);
  resault = resaultPr.toFixed(2)

  //==============Расчёт====================
let totalResault = resaultVl * 0.13;
let retirementTax = resaultVl * 0.01

e.preventDefault();
page();
function page () {
     total.innerHTML =
    "<img src=./logo.png>" + "<br> <hr>" +
    "<br> <font  color=green> Начислено:</font> <br>" +
      "<br>" + prizeResault.toFixed(2) + " - Премия за производственные результаты." +
      "<br>" + summHourIntensity.toFixed(2) + " - Интенсивность." +
      "<br>" + summHour.toFixed(2) + " - Оплата по часовому тарифу." +
      "<br>" + professionalismVl.toFixed(2) + " - Профмастерство " + professionalism.value + "%." +
      "<br>" + experienceVl.toFixed(2) + " - За стаж." +
      "<br>" + prizeId.value + " - Единоразовая премия." +
      "<br>" + harmfulnessVl.toFixed(2) + " - За вредность." +
      "<hr> <font  color=red> Удержено:</font> <br>" +
      "<br>" + totalResault.toFixed(2) + " - Подоходный налог." +
      "<br>" + retirementTax.toFixed(2) + " - Пенсионный налог." +
      "<hr> <font color=red> Всего начислено: </font>" + resault + "<font  color=green> || К выплате: </font>" + resaultClear;
      
};
    overlay.style.display = 'block';

      

  console.log(resaultClear + " -Чистыми, на руки");
  console.log(resault + " -Грязные");
  console.log(summHour + " - Оплата по часавому тарифу - полный месяц");
  console.log(prizeResault + " - Премия за производственные результаты. Ежемесечкая премия");
  console.log(summHourDay + " - Сумма часов за все дни.");
  console.log(summHourIntensity + " - Интенсивность. (230 рублей / месяц)");
  console.log(professionalismVl + " - Профмастерство");
  console.log(experienceVl + " - За стаж.");
  console.log(harmfulnessVl + " - За вредность.");
  console.log(managmentVl + " - Руководство бригадой");
  console.log(childrenDel + " - Налоговые вычаты на детей.");
  console.log(childrenDel + " - Единоразовая премия.");

}, false);


overlay.addEventListener('click', function(e){
  if( e.target === this ) {
      this.style.display = 'none';
}
}, false);



