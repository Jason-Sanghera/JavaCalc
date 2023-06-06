// Get the number buttons
const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

// Get the operator buttons
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");

// Get the other buttons
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");

// Get the display element
const display = document.getElementById("display");

// Add event listeners to the number buttons
zeroButton.addEventListener("click", function () {
    addToDisplay("0");
});

oneButton.addEventListener("click", function () {
    addToDisplay("1");
});

twoButton.addEventListener("click", function () {
    addToDisplay("2");
});

threeButton.addEventListener("click", function () {
    addToDisplay("3");
});

fourButton.addEventListener("click", function () {
    addToDisplay("4");
});

fiveButton.addEventListener("click", function () {
    addToDisplay("5");
});

sixButton.addEventListener("click", function () {
    addToDisplay("6");
});

sevenButton.addEventListener("click", function () {
    addToDisplay("7");
});

eightButton.addEventListener("click", function () {
    addToDisplay("8");
});

nineButton.addEventListener("click", function () {
    addToDisplay("9");
});

// Add event listeners to the operator buttons
divideButton.addEventListener("click", function () {
    resetDecimalFlag();
    addToDisplay("/");
});

multiplyButton.addEventListener("click", function () {
    resetDecimalFlag();
    addToDisplay("*");
});

subtractButton.addEventListener("click", function () {
    resetDecimalFlag();
    addToDisplay("-");
});

addButton.addEventListener("click", function () {
    resetDecimalFlag();
    addToDisplay("+");
});

// Add event listener to the clear button
clearButton.addEventListener("click", function () {
    clearDisplay();
});

// Add event listener to the decimal button
decimalButton.addEventListener("click", function () {
    addToDisplay(".");
});

// Add event listener to the equals button
equalsButton.addEventListener("click", function () {
    evaluateExpression();
});

// Function to reset the decimal flag
function resetDecimalFlag() {
    hasDecimal = false;
}

let hasDecimal = false;

// Function to add characters to the display
function addToDisplay(value) {
    if (value === "." && hasDecimal) {
        return; // Ignore if a decimal point already exists within the current number
    }

    if (value === ".") {
        hasDecimal = true; // Set the flag indicating a decimal point has been added
    }

    if (display.innerHTML === "0" && value === "0") {
        return; // Ignore multiple leading zeros
    }

    if (display.innerHTML === "0") {
        display.innerHTML = ""; // Remove leading zero if it exists
    }

    display.innerHTML += value;
}


// Function to check if a character is an operator
function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
}



// Function to clear the display
function clearDisplay() {
    display.innerHTML = "0";
    hasDecimal = false; // Reset the flag for decimal point
}

// Function to evaluate the mathematical expression
/*function evaluateExpression() {
    try {
        const result = eval(display.innerHTML);
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = "Error";
    }
}*/

function evaluateExpression() {
    const expression = display.innerHTML;
    const filtered = expression.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');

    try {
        const result = eval(filtered);
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = "Error";
    }
}
// got help with this code from chat gpt and here https://forum.freecodecamp.org/t/js-calculator-story-13/423931/2











