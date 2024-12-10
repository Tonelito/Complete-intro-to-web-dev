// variables
let result = "0";
let sign = "";
let variables = [];
let signs = [];

//paragraph that shows the result
let resultDisplayed = document.querySelector("p.result");

// asign every button in the array the handleClick function
const buttons = document.querySelectorAll(".calc-btn");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => handleClick(button));
});

// recieves the button and handles events depending on the button clicked
function handleClick(button) {
  if (
    button.innerText === "0" ||
    button.innerText === "1" ||
    button.innerText === "2" ||
    button.innerText === "3" ||
    button.innerText === "4" ||
    button.innerText === "5" ||
    button.innerText === "6" ||
    button.innerText === "7" ||
    button.innerText === "8" ||
    button.innerText === "9"
  ) {
    addNumber(button.innerText);
  } else if (button.innerText === "←") {
    deleteLastCharacter(resultDisplayed);
  } else if (button.innerText === "C") {
    clear();
  } else if (button.innerText === "+") {
    storeVariable();
    storeSign(button.innerText);
    resultDisplayed.textContent = "0";
  } else if (button.innerText === "-") {
    storeVariable();
    storeSign(button.innerText);
    resultDisplayed.textContent = "0";
  } else if (button.innerText === "×") {
    storeVariable();
    sign = "*";
    storeSign(sign);
    resultDisplayed.textContent = "0";
  } else if (button.innerText === "÷") {
    storeVariable();
    sign = "/";
    storeSign(sign);
    resultDisplayed.textContent = "0";
  } else if (button.innerText === "=") {
    calculation(resultDisplayed);
  }
}

// adds the number of the button pressed to the screen of the calculator
function addNumber(number) {
  if (result === "0") {
    result = number;
    resultDisplayed.textContent = result;
  } else {
    result += number;
    resultDisplayed.textContent = result;
  }
}

// resets all variables
function clear() {
  result = "0";
  resultDisplayed.textContent = result;
  variables.length = 0;
  signs.length = 0;
}

// deletes last character of the string
function deleteLastCharacter(resultDisplayed) {
  let resultSliced = resultDisplayed.textContent.slice(0, -1);
  if (resultSliced === "") {
    result = "0";
    resultDisplayed.textContent = "0";
  } else {
    result = resultSliced;
    resultDisplayed.textContent = resultSliced;
  }
}

// stores the variables for the calculation
function storeVariable() {
  const variableValue = result;
  variables.push({
    value: parseInt(variableValue),
  });
  result = "0";
}

// stores the signs for the calculation
function storeSign(buttonSign) {
  signs.push({
    sign: buttonSign,
  });
}

// calculates the total putting all together the expression and calculating with eval()
function calculation(numberDisplayed) {
  let calculation = 0;
  let finalCalculation = 0;
  for (let i = 0; i < signs.length; i++) {
    calculation += variables[i].value;
    calculation += signs[i].sign;
  }
  calculation += numberDisplayed.innerText;
  finalCalculation = eval(calculation);
  result = finalCalculation;
  resultDisplayed.textContent = finalCalculation;

  //resetting variables for next calculations.
  calculation = 0;
  finalCalculation = 0;
  variables.length = 0;
  signs.length = 0;
  sign = "";
}
