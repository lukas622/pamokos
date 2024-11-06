"use strict";

const squareDance = (array) => {
  const result = array.map((number) => number ** 2);

  return result;
};

console.log(squareDance([1, 2, 3]));
