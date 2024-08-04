const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
	const sumOfArray = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sumOfArray 
};

const multiply = function(array) {
	const multiplyOfArray = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return multiplyOfArray 
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1
  } else {
    let createArray = Array.from({ length: num }, (_, i) => i+1);
    return createArray.reduce((Acc, curVal) => Acc * curVal, 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
