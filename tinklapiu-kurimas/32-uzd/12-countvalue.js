"use strict";

const countValue = (array, value) => {
  let count = 0;

  for (const element of array) {
    if (element === value) {
      count++;
    }
  }

  return count;
};

console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
