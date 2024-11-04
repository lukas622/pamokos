"use strict"

const pirmadienis = parseInt(prompt("Kiek pamokų yra pirmadienį?"))
const antradienis = parseInt(prompt("Kiek pamokų yra antradienį?"))
const treciadienis = parseInt(prompt("Kiek pamokų yra trečiadienį?"))
const ketvirtadienis = parseInt(prompt("Kiek pamokų yra ketvirtadienį?"))
const penktadienis = parseInt(prompt("Kiek pamokų yra penktadienį?"))

const pamokuSkaicius = pirmadienis+antradienis+treciadienis+ketvirtadienis+penktadienis

console.log(`Pamokų skaičius: ${pamokuSkaicius}`)
console.log(`Tai sudaro minučių: ${pamokuSkaicius*45}`)