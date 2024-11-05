"use strict";

let bookSections = parseInt(prompt("Įveskite knygos skyrių skaičių"));
const bookSectionsStatic = bookSections;

let day = 0;
let readSections = 1;

while (bookSections > 0) {
  if (day > 1) {
    readSections++;
  }
  bookSections -= readSections;

  if (bookSections > 0) {
    day++;
  }
}

console.log(`Tadas visą knygą perskaitys per ${day} dienas (-ų)`);
console.log(
  `Tadas vidutinškai per dieną perskaitė ${(bookSectionsStatic / day).toFixed(
    2
  )} skyrius (-ų)`
);
