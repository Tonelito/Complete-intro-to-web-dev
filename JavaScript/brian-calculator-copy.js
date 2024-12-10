let buffer = "0";
let runningTotal = 0;
let previousOperator = null;

const screen = document.querySelector(".result");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  render();
}

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "+":
      handleMath(symbol);
      break;
    case "-":
      handleMath(symbol);
      break;
    case "×":
      handleMath(symbol);
      break;
    case "÷":
      handleMath(symbol);
      break;
    case "←":
      if (buffer.length > 1) {
        buffer = buffer.slice(0, -1);
      } else {
        buffer = "0";
      }
      break;
    case "C":
      buffer = "0";
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      buffer = runningTotal.toString();
      runningTotal = 0;
      previousOperator = null;
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function render() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector(".calculator")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
