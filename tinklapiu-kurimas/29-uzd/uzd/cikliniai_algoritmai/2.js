"use strict";

let stepsAmount = parseInt(prompt("Įveskite žingsnių kiekį iki mokyklos"));

let claps = 0;
let clicks = 0;

for (stepsAmount; stepsAmount > 0; stepsAmount--) {
  if (stepsAmount % 10 === 0) {
    claps++;
  } else if (stepsAmount % 10 === 5) {
    clicks++;
  }
}

console.log(`Suplojimų bus ${claps}`);
151;
console.log(`Spragtelėjimų bus ${clicks}`);
