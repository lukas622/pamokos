"use strict";

const cupsToPackage = parseInt(
  prompt("Puodelių, kuriuos reikia supakuoti, skaičius")
);

const fullBoxes = (cupsToPackage / 3).toFixed(0);

console.log(`Pilnų dėžučių skaičius: ${fullBoxes}`);

console.log(`Nesupakuotų puodelių skaičius: ${cupsToPackage - fullBoxes * 3}`);
