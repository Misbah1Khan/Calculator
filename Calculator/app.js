function appendToInput(value) {
    const inputElement = document.getElementById("input");
    inputElement.value += value;
}

function clearEntry() {
    const inputElement = document.getElementById("input");
    inputElement.value = "";
}

function clearInput() {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    inputElement.value = "";
    resultElement.value = "";
}

function calculateResult() {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    resultElement.value = eval(inputElement.value);
            
}