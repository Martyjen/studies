let resaultVl;
var oneDay;
//---------------------- Проверка ввода. Если нет сохранённых данных, то выводить значение "value"

day_rate.value = localStorage.getItem('day_rate') == null ? day_rate.value : localStorage.getItem('day_rate'); // Норма рабочих дней в месяц.
tarif_no_day.value = localStorage.getItem('tarif_no_day') == null ? tarif_no_day.value : localStorage.getItem('tarif_no_day'); // Суммарное количества отработаных часов за неполные рабочие дни.
worked_day.value = localStorage.getItem('worked_day') == null ? worked_day.value : localStorage.getItem('worked_day'); // Количество отработанных рабочих дней (по 8 часов).
vacation_day.value = localStorage.getItem('vacation_day') == null ? vacation_day.value : localStorage.getItem('vacation_day'); // Количество дней в отпуске (На больничном или за свой счёт.)
dayOffId.value = localStorage.getItem('dayOffId') == null ? dayOffId.value : localStorage.getItem('dayOffId'); // Сумма часов за выходное и сверхурочное время.
prizeId.value = localStorage.getItem('prizeId') == null ? prizeId.value : localStorage.getItem('prizeId'); // Единоразовая премия.

// Проверка на ввод данных в настройках.
if (localStorage.getItem('intensityId')
  && localStorage.getItem('hour')
  && localStorage.getItem('professionalism')
  && localStorage.getItem('childrenId')
  && localStorage.getItem('harmfulness')
  && localStorage.getItem('experience')
  && localStorage.getItem('prizeResaultId')) {
  document.querySelector("#no-profile").innerHTML = "";
} else {
  document.querySelector("#no-profile").innerHTML =
    "<hr> <font  color=red> Для начала работы с приложением, настройте профиль!</font> <font  color=blue>Нажмите на шестерёнку справа вверху. </font></p6> <hr>  ";
  img_set_id.style.background = 'red';
  document.querySelector("#no-profile").style.background = 'yellow';
}

button.addEventListener('click', function (e) {
  localStorage.setItem('day_rate', day_rate.value); // Норма рабочих дней в месяц.
  localStorage.setItem('worked_day', worked_day.value); // Количество отработанных рабочих дней (по 8 часов).
  localStorage.setItem('tarif_no_day', tarif_no_day.value); // Суммарное количества отработаных часов за неполные рабочие дни.
  localStorage.setItem('vacation_day', vacation_day.value); // Количество дней в отпуске (На больничном или за свой счёт.)
  localStorage.setItem('dayOffId', dayOffId.value); // Сумма часов за выходное и сверхурочное время.
  localStorage.setItem('prizeId', prizeId.value); // Единоразовая премия.

  let summ = +worked_day.value * 8; // Сумма времени за полные дни.

  //---===== Рассчитать сверхурочные и сокращённые дни ====------
  if (tarif_no_day.value > 0) {
    var summHourDay = +summ + +tarif_no_day.value + +dayOffId.value; // Сумма времени за все дни + сверхурочные и неполные дни.
  } else {
    var summHourDay = +summ + +dayOffId.value; // Без сверхурочных.
  }

  let dayOff = +hour.value * +dayOffId.value;
  let summHour = +hour.value * +summHourDay; // Оплата по тарифу. сумма всех часов и умноженые на тариф час.
  let prizeResault = +summHour / 100 * +prizeResaultId.value; // ежемесячная премия.
  let summHourIntensity = +intensityId.value / +day_rate.value * (+day_rate.value - +vacation_day.value); //Интенсивность. Коэффициент 10.45 (230 рублей / месяц).
  let professionalismVl = +summHour / 100 * +professionalism.value; //Профмастерство.
  let experienceVl = +summHour / 100 * +experience.value; //За стаж.
  let harmfulnessVl = +summHourDay * +harmfulness.value; //За вредность. Коэффициент 0.278.

  if (managment.value > 0) {
    managmentVl = summHour / 100 * +managmentPrize.value; // Бригадир.
    resaultVl = +summHour + +prizeResault + +professionalismVl + +experienceVl + +harmfulnessVl + +summHourIntensity + +managmentVl + +prizeId.value + dayOff;
    oneDay = (((+hour.value * 8) * (prizeResaultId.value / 100)) + +hour.value * 8) + ((+hour.value * 8) * (experience.value / 100)) + ((+hour.value * 8) * (professionalism.value / 100) + (harmfulness.value * 8) + (intensityId.value / (day_rate.value * 8) * 8)) + ((+hour.value * 8) * (managmentPrize.value / 100));

  } else {
    resaultVl = +summHour + +prizeResault + +professionalismVl + +experienceVl + +harmfulnessVl + +summHourIntensity + +prizeId.value + dayOff;
    managmentVl = 0;
    oneDay = (((+hour.value * 8) * (prizeResaultId.value / 100)) + +hour.value * 8) + ((+hour.value * 8) * (experience.value / 100)) + ((+hour.value * 8) * (professionalism.value / 100) + (harmfulness.value * 8) + (intensityId.value / (day_rate.value * 8) * 8)); // Заработок за один день.
  }

  //-----======= Налоговые вычеты на детей. =====----------
  if (childrenId.value == 1) {
    var childrenDel = +childrenId.value * childrenVl * 0.13; //Налоговые вычеты на детей.
    let childrenSumm = +childrenVl * +childrenId.value;
    var resaultClearVl = +resaultVl - (+resaultVl - +childrenSumm) * 0.13 - 0.01 * +resaultVl; //Грязные с вычетом налогов за ребёнка.
    resaultPr = +resaultVl; //Результат грязными.
  } else if (childrenId.value > 1) {
    var childrenDel = +childrenId.value * multiChildrenVl * 0.13; //Налоговые вычеты на детей.
    let childrenSumm = +multiChildrenVl * +childrenId.value;
    var resaultClearVl = +resaultVl - (+resaultVl - +childrenSumm) * 0.13 - 0.01 * +resaultVl; //Грязные с вычетом налогов за ребёнка.
    resaultPr = +resaultVl; //Результат грязными.
  } else {
    var childrenDel = 0;
    resaultClearVl = +resaultVl / 100 * 86; //Чистыми, на руки.
    resaultPr = +resaultVl; //Результат грязными.
  }
  resaultClear = resaultClearVl.toFixed(2);
  resault = resaultPr.toFixed(2)

  //==============Расчёт====================
  let totalResault = resaultVl * 0.13 - childrenDel; //Подоходный налог
  let retirementTax = resaultVl * 0.01 //Пенсионный налог

  //----======Дополнительные вычисления===------

  //---===Расчёт одного выходного дня.
  let oneDeyOff = oneDay + (+hour.value * 8); // Оплата за выходной день.
  let taxOneDeyOff = oneDeyOff - oneDeyOff * 0.14 ; // Выходной день с вычетам налогов.
  let taxOneDay = oneDay - oneDay * 0.14 ; // Оплата рабочего дня с вычетом налогов.


  e.preventDefault();
  page();

  // Вывод подсчётов.

  function page() {
    total.innerHTML =
      "<img src=./logo.png>" + " <hr>" +
      "<font  color=green> Начислено:</font> " +
      "<br><b><p align=left>" + prizeResault.toFixed(2) + "</b> - Премия за производственные результаты." +
      "<br><b>" + summHourIntensity.toFixed(2) + "</b> - Интенсивность." +
      "<br><b>" + summHour.toFixed(2) + "</b> - Оплата по часовому тарифу." +
      "<br><b>" + professionalismVl.toFixed(2) + "</b> - Профмастерство " + professionalism.value + "%." +
      "<br><b>" + experienceVl.toFixed(2) + "</b> - За стаж " + experience.value + "%." +
      "<br><b>" + prizeId.value + "</b> - Единоразовая премия." +
      "<br><b>" + harmfulnessVl.toFixed(2) + "</b> - За вредность." +
      "<br><b>" + dayOff.toFixed(2) + "</b> - За выходное и сверхурочное время." +
      "<hr> <font  color=red> Удержано:</font>" +
      "<br><b><p align=left>" + totalResault.toFixed(2) + "</b> - Подоходный налог." +
      "<br><b>" + retirementTax.toFixed(2) + "</b> - Пенсионный налог.</p>" +
      "<hr> <font color=red> <b>Всего начислено:</b> </font> <font style=background-color:#ffff00;><b>" + resault + "</b></font><font  color=green> || <b> К выплате: </b> </font><font style=background-color:#ffff00;><b>" + resaultClear +
      "</b></p></font> <hr> <b>========== Другое ===========</b>" +
      "<br><b><p align=left>+" + childrenDel.toFixed(2) + "</b> - Налоговые вычаты на детей." +
      "<br> <font color=red>~" + oneDay.toFixed(2) + "</font>  <b>/</b> <font color=green>" + taxOneDay.toFixed(2) + "</font> ~ Зарабатываешь за один день" +
      "<br> <font color=red>~" + oneDeyOff.toFixed(2) + "</font>  <b>/</b> <font color=green>" + taxOneDeyOff.toFixed(2) + "</font> ~ Зарабатываешь за один выходной день </p><br>";
  };

  overlay.style.display = 'block';

  //Проверка консольная
  // console.log(resaultClear + " -Чистыми, на руки");
  // console.log(resault + " -Грязные");
  // console.log(summHour + " - Оплата по часавому тарифу - полный месяц");
  // console.log(prizeResault + " - Премия за производственные результаты. Ежемесечкая премия");
  // console.log(summHourDay + " - Сумма часов за все дни.");
  // console.log(summHourIntensity + " - Интенсивность. (230 рублей / месяц)");
  // console.log(professionalismVl + " - Профмастерство");
  // console.log(experienceVl + " - За стаж.");
  // console.log(harmfulnessVl + " - За вредность.");
  // console.log(managmentVl + " - Руководство бригадой");
  // console.log(childrenDel + " - Налоговые вычаты на детей.");
  // console.log(prizeId.value + " - Единоразовая премия.");
  // console.log(dayOff + " - Выходные и сверхурочные.");
  // console.log(oneDay + " ~ За один день");
  // console.log(oneDeyOff + " ~ За один выходной день");

}, false);


overlay.addEventListener('click', function (e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
}, false);