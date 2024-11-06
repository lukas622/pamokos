"use strict";

const initialValue = 0;

const sumNumbers = (array) => {
  const sumArray = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sumArray;
};

console.log(sumNumbers([1, 4, 8]));
