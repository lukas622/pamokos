"use strict";

const positives = (array) => {
  if (typeof array != "object") {
    console.log("Error, incorrect data!");
    return;
  }

  const positives = array.filter((num) => num > 0);
  return positives;
};

console.log(positives([1, -3, 5, -3, 0]));
