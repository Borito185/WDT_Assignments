let numClicks = 0, totalKeyPresses = 0;

let fields = Array();
let keyPresses = new Map();
let numCharTyped = new Map();

let inputs = document.querySelectorAll("input");
let textArea = document.querySelector("textarea");
let select = document.querySelector("select");

for (let i of inputs)
    fields.push(i);

fields.push(textArea);
fields.push(select);

for (let f of fields)
{
    keyPresses.set(f, 0);
    numCharTyped.set(f, 0);

    f.addEventListener("keypress", keyPressField);
    f.addEventListener("change", charTyped);
}

document.onclick = function()
{
    ++numClicks;
};

function keyPressField(event)
{
    keyPresses.set(this, keyPresses.get(this) + 1);

    // console.table(keyPresses);
}

function charTyped(event)
{
    numCharTyped.set(this, this.value.length);

    // console.table(numCharTyped);
}

