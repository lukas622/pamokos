"use strict";

const anyPositive = (array) => {
  let anyPositive = false;

  for (const element of array) {
    if (element > 0) [(anyPositive = true)];
  }

  return anyPositive;
};

console.log(anyPositive([0, 0, 0, 1]));
