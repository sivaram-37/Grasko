// Rest parameter and Spread operator
const ADD = "ADD";
const SUB = "SUBTRACT";

const calculate = (cb, operator, ...arr) => {
  const isValidNumber = (num) => {
    return isNaN(num) ? 0 : num;
  };
  let sum = 0;
  for (const i of arr) {
    if (operator === ADD) {
      sum += isValidNumber(i);
    } else {
      sum -= isValidNumber(i);
    }
  }
  cb(sum);
};

const showResult = (msg, res) => alert(msg + res);

calculate(showResult.bind(this, "The addition of all number is = "), ADD, 1, 2, 3, 4, 5);
calculate(
  showResult.bind(this, "The addition of all number is = "),
  ADD,
  5,
  6,
  9,
  10,
  "hello"
);
calculate(
  showResult.bind(this, "The subtraction of all number is = "),
  SUB,
  1,
  2,
  3,
  4,
  6
);
