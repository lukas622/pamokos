"use strict";

const stringConcat = (arr) => {
  return arr.reduce((acc, curval) => String(acc) + String(curval), "");
};

console.log(stringConcat([1, 2, 3]));
