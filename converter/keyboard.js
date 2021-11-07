let divCalc = document.querySelector(".calc");

divCalc.addEventListener('click', function (event) {

    
    if (event.path[0].value === "ce") {
        let keyValue = "";
        document.querySelector("#number1").value = keyValue;
    }
    else if (event.path[0].value === "delite") {
       let stringValue = elNumber1.value; //переменная "elNumber1" - получина из JS файла index.js.
       document.querySelector("#number1").value = stringValue.slice(0, -1);
    }
    else if (event.path[0].value === undefined) {
        console.log("undefined");
        document.querySelector("#number1").value = elNumber1.value;
    }
    else {
        let keyValue = event.path[0].value;
        document.querySelector("#number1").value += keyValue;
    }
});