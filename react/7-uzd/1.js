"use strict";

const total = (arr) => {
  return arr.reduce((acc, curval) => acc + curval, 0);
};

console.log(total([1, 2, 3]));
