const penkiuCentu = parseInt(prompt("Kiek yra monetų po 5 ct?"))
const dvidesimtCentu = parseInt(prompt("Kiek yra monetų po 20 ct?"))
const duLt = parseInt(prompt("Kiek yra monetų po 2 Lt?"))

console.log(`Taupyklėje yra ${(0.05*penkiuCentu)+(0.20*dvidesimtCentu)+(2*duLt)} Lt.`)