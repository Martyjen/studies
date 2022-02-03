let inputId = document.getElementById("input_id");
let buttonId = document.getElementById("button_id");

buttonId.addEventListener('click', function () {
  inputId.value = eval(inputId.value);
});


function noTochek() {
  var tochka = 0;
  for (let i = 0; i < inputId.value.length; ++i) {
      let simvol = inputId.value[i];
      if (simvol == ".") {
          ++tochka;
          if (tochka == 2) {
              var stringValue = inputId.value;
              inputId.value = stringValue.slice(0, -1);
          }
      } else if (simvol == "+" || simvol == "-" || simvol == "*" || simvol == "/") {
          tochka = 0;
     }

  }
}