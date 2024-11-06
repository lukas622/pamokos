"use strict";

const max = (array) => {
  let highestNumber = 0;
  array.forEach((element, index) => {
    if (element > highestNumber) {
      highestNumber = element;
    }
  });

  return highestNumber;
};

const numbers = [1, 5, 10, 9, 4, 1];

console.log(max(numbers));
