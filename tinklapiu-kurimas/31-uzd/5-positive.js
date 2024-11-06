"use strict";

const allPositive = (array) => {
  let positive = true;

  array.forEach((element) => {
    if (element < 1) {
      positive = false;
    }
  });

  return positive;
};

console.log(allPositive([0, 0, 1]));
