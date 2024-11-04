"use strict";

const carCount = parseInt(prompt("Automobilių skaičius"));
const carLimit = parseInt(prompt("Į keltą telpa automobilių"));

const carTransferTimes = Math.floor(carCount / carLimit);

console.log(`Perkels per kartų: ${carTransferTimes}`);
console.log(`Liks neperkelta: ${carCount - carTransferTimes * carLimit}`);
