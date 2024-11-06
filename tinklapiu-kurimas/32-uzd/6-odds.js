"use strict";

const odds = (array) => {
  const result = array.filter((number) => number % 2 !== 0);

  return result;
};

console.log(odds([1, 2, 4, 3, 8]));
