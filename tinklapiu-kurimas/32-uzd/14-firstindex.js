"use strict";

const firstIndexOf = (array, value) => {
  let index = 0;
  for (const element of array) {
    index++;
    if (element === value) {
      break;
    }
  }
  return index;
};

console.log(firstIndexOf([10, 20, 30, 20], 20));
