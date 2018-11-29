const sum = (num1, num2) => {
  return num1 + num2;
}

const multiply = (num1, num2) => {
  return num1*num2;
}

const divide = (num, div) => {
  return num/div;
}

const square = (num) => {
  return num**2;
}

module.exports = {
  sum: sum,
  mult: multiply,
  div: divide,
  sq: square
}
