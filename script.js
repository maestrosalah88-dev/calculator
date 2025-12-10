let display = document.getElementById("display");
let historyDiv = document.getElementById("history");
let history = [];
let currentInput = "";

function press(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);

        // Save to history array
        history.push(`${currentInput} = ${result}`);

        // Show on screen
        updateHistory();

        // Show result on display
        currentInput = result.toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}

function updateHistory() {
    historyDiv.innerHTML = "";
    history.forEach((entry, index) => {
        historyDiv.innerHTML += `<p>${index + 1}. ${entry}</p>`;
    });
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}
