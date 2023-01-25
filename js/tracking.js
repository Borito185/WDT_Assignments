let numClicks = 0;
let startTime = Date.now();

let fields = Array();

// Map<Field, Int>: counts how many presses per field
let keyPresses = new Map();

// Map<Field, Int>: keeps length of input per field
let numCharTyped = new Map();

// Add all fields to array, by appending individual elements
let inputs = document.querySelectorAll("input");
let textArea = document.querySelector("textarea");
let select = document.querySelector("select");

for (let i of inputs)
    fields.push(i);

fields.push(textArea);
fields.push(select);


// For each field, initialise counter and set its events
for (let f of fields)
{
    keyPresses.set(f, 0);
    numCharTyped.set(f, 0);

    f.addEventListener("keypress", keyPressField);
    f.addEventListener("change", charTyped);
}

// Submit event for the form
// document.forms["register-form"].addEventListener("submit", OnSubmit);

// Click: increase click counter
document.onclick = function()
{
    ++numClicks;
};

// Key press: ncrement the field's counter by one
function keyPressField(event)
{
    keyPresses.set(this, keyPresses.get(this) + 1);
}

// On change: update the length of the string in the field
function charTyped(event)
{
    numCharTyped.set(this, this.value.length);
}

function ShowTrackingData(){
    //Adds the html with data to the div
    let div = document.getElementById("form-tracking-data");

    div.innerHTML = "";

    let node = document.createElement("div");
    node.innerHTML = "Number of mouse clicks: " + numClicks;
    node.innerHTML += "</br>Total time spent (ms): " + (Date.now() - startTime);
    node.innerHTML += "</br>Total key presses: " + GetSumOfValues(keyPresses);
    node.innerHTML += "</br>Total number of characters typed: " + GetSumOfValues(numCharTyped);

    div.appendChild(node);

    // Make div visible
    div.classList.remove("hide");

    alertAllValues();

    return false;
}

// Calculates the sum of all values of the map
function GetSumOfValues(map){
    let sum = 0;
    map.forEach((v) => {
      sum += v;
    });
    return sum;
}