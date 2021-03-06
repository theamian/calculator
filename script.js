function add(a, b) {
    return +a + +b;
}

function substract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
    return "Operator error."
}

function ispisivanje(disp) {
    let val = Number(disp);
    if(val.toString().length < 13) {
        display.textContent = val;
    }
    else {
        display.textContent = val.toPrecision(12);
    }
}

function equals() {
    second = display_value;
    display_value = action === "" ? "0" : operate(first, second, action);
    action = "";
    first = "";
    second = "";
    ispisivanje(display_value);
 }


 function calculating(op) {
    if(op === "del") {
        if(display_value.length == 0) display_value = "0";
        else {
            display_value = display_value.slice(0,display_value.length-1);
        }
        ispisivanje(display_value);
    }

    else if(op !== "=" && op !== "clear") {
        if(action !== "") {
            equals();
        }
        first = display_value;
        action = op;
        ispisivanje(display_value);
        display_value = "";
    }
    else if(op === "=") {
        equals();
    }
    else if(op === "clear") {
        display_value = "0";
        first = "";
        second = "";
        action = "";
        operator = "";
        ispisivanje(display_value);
    }
 }


const numbers = document.querySelectorAll(".number-item");
const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operator-item");

let display_value = "0";
let operator = "";
let first;
let second;
let action = "";

numbers.forEach(item => {
    item.addEventListener("mouseup", (e) => {
        if(e.target.attributes.name.value === "." && display_value.includes(".")) {}
        else {
            display_value += e.target.attributes.name.value;
        }
        ispisivanje(display_value);
    })
    item.addEventListener("mouseover", () => item.classList.toggle("highlight"));
    item.addEventListener("mouseout", () => item.classList.toggle("highlight"));
})

operators.forEach(item => {
    item.addEventListener("mouseup", (e) => {
        operator = e.target.attributes.name.value;
        calculating(operator);
    })
    item.addEventListener("mouseover", () => item.classList.toggle("highlight"));
    item.addEventListener("mouseout", () => item.classList.toggle("highlight"));
})
