const defaultValue = 0;

let currentResult = defaultValue;

let entries = [];

function getUserInp() {
  return parseInt(userInput.value);
}

function buildExpression(operator, firstNumber, secondNumber) {
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  outputResult(currentResult, expression);
}

function writeLogEntry(operation, prevResult, num, result) {
  const logEntry = {
    op: operation,
    prevResult: prevResult,
    operand: num,
    result: result,
  };
  entries.push(logEntry);
  console.log(entries);
}

function calculateResult(operationType) {
  const inp = getUserInp();
  const initialVal = currentResult;
  let mathSymbol;
  if (operationType === "ADD") {
    currentResult += inp;
    mathSymbol = "+";
  } else if (operationType === "SUBTRACT") {
    currentResult -= inp;
    mathSymbol = "-";
  } else if (operationType === "MULTIPLY") {
    currentResult *= inp;
    mathSymbol = "*";
  } else if (operationType === "DIVIDE") {
    currentResult /= inp;
    mathSymbol = "/";
  }
  buildExpression(mathSymbol, initialVal, inp);
  writeLogEntry(operationType, initialVal, inp, currentResult);
}

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));
