"use strict";

const evens = (array) => {
  const result = array.filter((number) => number % 2 === 0);

  return result;
};

console.log(evens([1, 2, 4, 3, 8]));
