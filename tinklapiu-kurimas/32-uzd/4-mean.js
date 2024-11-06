"use strict";

const mean = (array) => {
  let sum = 0;
  let elements = 0;

  for (const element of array) {
    sum += element;
    elements++;
  }

  return sum / elements;
};

console.log(mean([-10, 10]));
