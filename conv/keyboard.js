let divCalc = document.querySelectorAll(".button_bt");
var elNumber1 = document.getElementById("number1");
for (let i = 0; i < divCalc.length; i++) {

    divCalc[i].addEventListener('click', function (event) {
        console.log(event.path[0].value);
        myFunction()
        if (event.path[0].value === "ce") {
            let keyValue = "";
            document.querySelector("#number1").value = keyValue;
        }
        else if (event.path[0].value === "delite") {
            let stringValue = elNumber1.value; //переменная "elNumber1" - получина из JS файла index.js.
            document.querySelector("#number1").value = stringValue.slice(0, -1);
        }
        else {
            let keyValue = event.path[0].value;
            document.querySelector("#number1").value += keyValue;
        }
    });
}

function myFunction(){
    var x=document.getElementById("number1");
        var initialSize=45-x.value.length;
        initialSize=initialSize<=10?10:initialSize;
    x.style.fontSize = initialSize + "px";
    }








    // arreyButton[i] = divCalc[i].value;
    // });

// divCalc[0].addEventListener




//     if (event.path[0].value === "ce") {
//         let keyValue = "";
//         document.querySelector("#number1").value = keyValue;
//     }
//     else if (event.path[0].value === "delite") {
//        let stringValue = elNumber1.value; //переменная "elNumber1" - получина из JS файла index.js.
//        document.querySelector("#number1").value = stringValue.slice(0, -1);
//     }
//     else if (event.path[0].value === undefined) {
//         console.log("undefined");
//         document.querySelector("#number1").value = elNumber1.value;
//     }
//     else {
//         let keyValue = event.path[0].value;
//         document.querySelector("#number1").value += keyValue;
//     }
// });