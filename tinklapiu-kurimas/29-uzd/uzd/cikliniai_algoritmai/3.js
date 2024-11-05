"use strict";

let snowflakeFallInSecond = parseInt(
  prompt("Įveskite, kiek snaigių nukrito per pirmąją sekundę")
);
const snowTime = parseInt(prompt("Įveskite, kiek sekundžių snigo"));

let fallenSnowflakes = 0;

for (let i = 1; i <= snowTime; i++) {
  if (i > 1) {
    snowflakeFallInSecond *= 2;
  }
  fallenSnowflakes += snowflakeFallInSecond;
}

console.log(fallenSnowflakes);
