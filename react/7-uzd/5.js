"use strict";

const flatten = (arr) => {
  return arr.reduce((acc, e) => acc.concat(e));
};

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays));
