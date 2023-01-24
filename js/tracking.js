let numClicks = 0;
let startTime = Date.now();

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
document.forms["register-form"].addEventListener("submit", OnSubmit);

function keyPressField(event)
{
    keyPresses.set(this, keyPresses.get(this) + 1);
}

function charTyped(event)
{
    numCharTyped.set(this, this.value.length);
}

function OnSubmit(e){
    let div = document.getElementById("form-tracking-data");

    div.innerHTML = "";

    let node = document.createElement("div");
    node.innerHTML = "Number of mouse clicks: " + numClicks;
    console.log
    node.innerHTML += "</br>time spent on page: " + (Date.now() - startTime);
    div.appendChild(node);
    fields.forEach(element => {
        if (element.id == "") return;

        let node = document.createElement("div");
        node.innerHTML = element.id + "</br> key presses: " + keyPresses.get(element) + "</br>characters typed: " + numCharTyped.get(element);
        div.appendChild(node)
    });
    for (let f in fields){

    }

    div.classList.remove("hide");
    return false;
}