"use strict";

const grade1 = parseInt(prompt("Kokius pažymius gavo Petriukas?"));
const grade2 = parseInt(prompt("Kokius pažymius gavo Petriukas?"));
const grade3 = parseInt(prompt("Kokius pažymius gavo Petriukas?"));
const grade4 = parseInt(prompt("Kokius pažymius gavo Petriukas?"));
const grade5 = parseInt(prompt("Kokius pažymius gavo Petriukas?"));

const gradeAverage = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

if (gradeAverage > 9) {
  console.log("Petriukas gaus tris saldainius");
} else if (gradeAverage >= 7 && gradeAverage <= 9) {
  console.log("Petriukas gaus du saldainius");
} else {
  console.log("Petriukas gaus vieną saldainį");
}
