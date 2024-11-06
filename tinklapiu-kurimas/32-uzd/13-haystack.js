"use strict";

const findInHaystack = (array, value) => {
  for (const element of array) {
    if (element === value) {
      return true;
    }
  }

  return false;
};

console.log(findInHaystack([1, 2, 30, -10], 30));
