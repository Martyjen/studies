var input_st = document.querySelectorAll(".input_class");
let childrenVl = 37; //



//Вывод данных:

// localStorage.setItem('input_st', JSON.stringify(input_st));

hour.value = localStorage.getItem('hour'); // Тариф/час.
professionalism.value = localStorage.getItem('professionalism'); // Профмастерство.
childrenId.value = localStorage.getItem('childrenId'); // Количество детей.
harmfulness.value = localStorage.getItem('harmfulness'); // Должность.
experience.value = localStorage.getItem('experience'); // Стаж.
managment.value = localStorage.getItem('managment'); // Руководство бригадой
prizeResaultId.value = localStorage.getItem('prizeResaultId'); // Ежемесячная премия.
intensityId.value = localStorage.getItem('intensityId'); // интенсивность.
managmentPrize.value = localStorage.getItem('managmentPrize'); // Надбавка за управление бригадой.

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
