"use strict";

const positives = (array) => {
  const result = array.filter((number) => number > 0);

  return result;
};

console.log(positives([1, -3, 5, -3, 0]));
