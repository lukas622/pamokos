"use strict";

const integers = (array) => {
  const result = array.filter((number) => Number.isInteger(number));

  return result;
};

console.log(integers([1, 2, 4, 3, 8]));
