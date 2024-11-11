"use strict";

const numSum = (num) => {
  let totalSum = 0;
  for (let i = 1; i < num; i++) {
    if (i > 0 && i % 2 === 0) {
      totalSum += i;
    }
  }
  return totalSum;
};

console.log(numSum(20));
