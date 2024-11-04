const sienosIlgis = parseFloat(prompt("Sienos ilgis (m)"))
const sienosAukstis = parseFloat(prompt("Sienos aukštis (m)"))
const plytosKaina = parseFloat(prompt("Plytos kaina (Lt)"))

const plytuKiekis = (sienosIlgis/0.2)*(sienosAukstis/0.1)
const visuPlytuKaina = plytuKiekis*plytosKaina

console.log(`Plytų kiekis: ${plytuKiekis}`)
console.log(`Plytos kainuos ${visuPlytuKaina.toFixed(2)} Lt`)