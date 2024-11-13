"use strict";

let sum = 0;

while (true) {
  let num = parseInt(prompt("Enter a number"));

  if (num < 0) {
    console.log(sum);
    break;
  }
  sum += num;
}
