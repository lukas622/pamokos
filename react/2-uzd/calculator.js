"use strict";

const calculate = (num1, num2, op) => {
  try {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          throw new Error("ERROR: Cannot devide by zero");
        }
        return num1 / num2;
      default:
        throw new Error("ERROR: Invalid operation");
    }
  } catch (error) {
    console.error(error.message);
  }
};

console.log(calculate(10, 2, "/"));
