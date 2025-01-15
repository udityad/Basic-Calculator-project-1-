let display = document.getElementById("display");

// Append value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculateResult() {
    try {
        // Evaluate the expression using eval (make sure to handle only valid inputs)
        let result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error("Math error");
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
