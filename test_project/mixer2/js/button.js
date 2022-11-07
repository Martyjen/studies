let buttonNormal = [];
const buttons = [
    {
        name: "&#171",
        value: "delite",
        class: "blue1"
      },
    {
        name: "ce",
        value: "ce",
        class: "red"
    },
    {
        name: "&plusmn;",
        value: "1",
        class: " -"
    },
    {
        name: "&divide;",
        value: "/",
        class: "grey_01 pink_font"
    },
    {
        name: "1",
        value: "1",
        class: ""
    },
    {
        name: "2",
        value: "2",
        class: ""
    },
    {
        name: "3",
        value: "3",
        class: ""
    },
    {
        name: "&times;",
        value: "*",
        class: "grey_01 yellow_font"
    },
    {
        name: "4",
        value: "4",
        class: ""
    },
    {
        name: "5",
        value: "5",
        class: ""
    },
    {
        name: "6",
        value: "6",
        class: ""
    },
    {
        name: "&#8722;",
        value: "-",
        class: "grey_01 green_font"
    },
    {
        name: "7",
        value: "7",
        class: ""
    },
    {
        name: "8",
        value: "8",
        class: ""
    },
    {
        name: "9",
        value: "9",
        class: ""
    },
    {
        name: "&plus;",
        value: "+",
        class: "grey_01 blue_font"
    },
    {
        name: ".",
        value: ".",
        class: ""
    },
    {
        name: "0",
        value: "0",
        class: ""
    },
    {
        name: "%",
        value: "%",
        class: ""
    },
    {
        name: "&equals;",
        value: "=",
        class: "grey"
    },
    
];

for (let i = 0; i < buttons.length; i++) {
    buttonNormal += `<button class="button_bt ${buttons[i].class}" value="${buttons[i].value}">${buttons[i].name}</button>`;
};

const buttonFull =
    `<button class="button_bt" id="1_id" value="1">1</button>
<button class="button_bt" id="2_id" value="2">2</button>
<button class="button_bt" id="3_id" value="3">3</button>
<button class="button_bt grey_01 yellow_font" id="x_id" value="*">&times;</button>
<button class="button_bt" id="C_id" value="(">(</button>
<button class="button_bt" id="C1_id" value=")">)</button>
<button class="button_bt" id="4_id" value="4">4</button>
<button class="button_bt" id="5_id" value="5">5</button>
<button class="button_bt" id="6_id" value="6">6</button>
<button class="button_bt grey_01 green_font" id="minus" value="-">&#8722;</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="7_id" value="7">7</button>
<button class="button_bt" id="8_id" value="8">8</button>
<button class="button_bt" id="9_id" value="9">9</button>
<button class="button_bt grey_01 blue_font" id="plus_id" value="+">&plus;</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" value=".">.</button>
<button class="button_bt" id="0_id" value="0">0</button>
<button class="button_bt" id="minus-" value=" -">&plusmn;</button>
<button class="button_bt grey_01 pink_font" id="multi_id" value="/">&divide;</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="proc_id" value="%">%</button>
<button class="button_bt" id="PI_id" value="PI">&pi;</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="x_id" value="-">%</button>
<button class="button_bt" id="66_id" value="66">66</button>
<button class="button_bt red" value="ce">CE</button>
<button class="button_bt blue1" value="delite">&#171;</button>
<button class="button_bt button_resault grey" id="equally" value="=">&equals;</button>`;