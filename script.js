function addToDisplay(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function backspace() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
    var result = document.getElementById("result").value;
    var calculation = eval(result);
    document.getElementById("result").value = calculation;
}
