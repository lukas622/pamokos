"use strict";

const countLessThan = (array, threshold) => {
  const result = array.filter((number) => number < threshold);

  return result.length;
};

console.log(countLessThan([1, 2, 3, 4, 5], 17));
