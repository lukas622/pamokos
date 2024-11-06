"use strict";

const glueArrays = (array1, array2) => {
  const result = array1.concat(array2);

  return result;
};

console.log(glueArrays([1, 2, 3], [4, 5, 6]));
