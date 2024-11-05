"use strict";

const intervalStart = parseInt(prompt("Įveskite intervalo pradžią"));
const intervalEnd = parseInt(prompt("Įveskite intervalo pabaigą"));

let shirtsAmount = 0;

for (let i = intervalStart; i <= intervalEnd; i++) {
  if (i % 6 === 0) {
    shirtsAmount++;
  }
}

console.log(`Reikalingų marškinėlių skaičius ${shirtsAmount}`);
