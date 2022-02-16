var input_st = document.querySelectorAll(".input_class");
let childrenVl = 40; //Один ребёнок.
let multiChildrenVl = 75 //Два и более ребёнка.

//Вывод данных:

// localStorage.setItem('input_st', JSON.stringify(input_st));
hour.value = localStorage.getItem('hour') == null ? hour.value : localStorage.getItem('hour');// Тариф/час.
professionalism.value = localStorage.getItem('professionalism') == null ? professionalism.value : localStorage.getItem('professionalism'); // Профмастерство.
childrenId.value = localStorage.getItem('childrenId') == null ? childrenId.value : localStorage.getItem('childrenId'); // Количество детей.
harmfulness.value = localStorage.getItem('harmfulness') == null ? harmfulness.value : localStorage.getItem('harmfulness'); // Должность.
experience.value = localStorage.getItem('experience') == null ? experience.value : localStorage.getItem('experience'); // Стаж.
prizeResaultId.value = localStorage.getItem('prizeResaultId') == null ? prizeResaultId.value : localStorage.getItem('prizeResaultId');  // Ежемесячная премия.
intensityId.value = localStorage.getItem('intensityId') == null ? intensityId.value : localStorage.getItem('intensityId'); // Ежемесячная премия.
managment.value = localStorage.getItem('managment') == null ? managment.value : localStorage.getItem('managment'); // Руководство бригадой
managmentPrize.value = localStorage.getItem('managmentPrize') == null ? managmentPrize.value : localStorage.getItem('managmentPrize'); // Надбавка за управление бригадой.


//Сохраниние данных:

button_st.addEventListener('click', () => {
    localStorage.setItem('hour', hour.value);
    localStorage.setItem('professionalism', professionalism.value);
    localStorage.setItem('childrenId', childrenId.value);
    localStorage.setItem('harmfulness', harmfulness.value);
    localStorage.setItem('experience', experience.value);
    localStorage.setItem('prizeResaultId', prizeResaultId.value);
    localStorage.setItem('intensityId', intensityId.value);
    localStorage.setItem('managment', managment.value);
    localStorage.setItem('managmentPrize', managmentPrize.value);

});


button_rst.addEventListener('click', () => {
    localStorage.clear();
});
