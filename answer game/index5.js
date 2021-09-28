document.getElementById("buttonId").addEventListener('click', function(){
    Math.floor(Math.random() * 2) === 1 ? showResault("Да.", "bagraundGreen") : showResault("Нет.", "bagraundRed");
});

function showResault(resault, resaultBackground) { 
    document.getElementById("select_block").className = resaultBackground; 
    document.getElementById("h2_id").innerHTML = resault;
}