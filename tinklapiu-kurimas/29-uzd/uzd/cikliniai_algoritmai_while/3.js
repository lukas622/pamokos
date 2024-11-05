"use strict";

let remainingCandies = parseInt(prompt("Petriukas gavo saldainių"));
let remainingCandiesLeft = 0;
let candiesEaten = 0;

let days = 0;

while (remainingCandies > 0) {
  candiesEaten = parseInt(prompt("Per dieną suvalgė"));
  remainingCandies -= candiesEaten;

  if (remainingCandies > 0) {
    remainingCandiesLeft = remainingCandies;
    days++;
  }
}

console.log(
  `Petriukui saldainių užteks ${days} dienoms ir jam liks ${remainingCandiesLeft} saldainiai25`
);
