let inputIn = document.querySelector(".input-in");
let button = document.querySelector("#button");
let divEl = document.querySelector("#one");
button.onclick = () => {
    let b = +inputIn.value;

    console.log(b);

    switch (b) {
        case 5:
            console.log("'получи 5 баллов'");
            break;

        case 6:
            console.log("'8 баллов!'");
            break;
        case 9:
            console.log("'tut текст'");
            break;
        default:
            console.log("'ooookkkk'");
    }
}
