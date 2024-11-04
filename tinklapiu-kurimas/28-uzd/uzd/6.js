"use strict"

const ilPagrindoIlgis = parseInt(prompt("Trapecijos ilgesniojo pagrindo ilgis"))
const trPagrindoIlgis = parseInt(prompt("Trapecijos trumpesniojo pagrindo ilgis"))
const aukstinesIlgis = parseInt(prompt("Aukštinės ilgis"))

console.log(`Trapecijos plotas: ${((ilPagrindoIlgis+trPagrindoIlgis)/2)*aukstinesIlgis}`)