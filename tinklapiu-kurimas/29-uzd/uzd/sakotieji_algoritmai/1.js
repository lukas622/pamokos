"use strict";

const jumpHeight = parseFloat(prompt("Iš kokio aukščio šoka parašiutininkas?"));
const parachuteOpenTimeSeconds = parseFloat(
  prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?")
);

const fallTime = Math.sqrt((2 * jumpHeight) / 9.8);

if (parachuteOpenTimeSeconds < fallTime) {
  console.log("Parašiutas išsiskleis");
} else {
  console.log("Parašiutas neišsiskleis");
}
