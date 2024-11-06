"use strict";

const compareBMI = (markWeight, markHeight, johnWeight, johnHeight) => {
  const markBMI = markWeight / markHeight ** 2;
  const johnBMI = johnWeight / johnHeight ** 2;

  const markHasHigherBMI = markBMI > johnBMI;

  return markHasHigherBMI;
};

console.log(compareBMI(70, 1.85, 68, 1.87));
