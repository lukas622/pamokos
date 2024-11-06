"use strict";

const countEvens = (array) => {
  let evensAmount = 0;

  for (const element of array) {
    if (element % 2 === 0) {
      evensAmount++;
    }
  }

  return evensAmount;
};

console.log(countEvens([10, 10, 10]));
