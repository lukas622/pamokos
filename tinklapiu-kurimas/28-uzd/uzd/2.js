"use strict";

const zuvuKiekis = parseInt(prompt("Kiek žuvų gyvena akvariume?"));
const zuvuKiekvienaDiena = parseInt(
  prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?")
);
const dienuPraejo = parseInt(prompt("Kiek dienų praėjo?"));

console.log(
  `Po ${dienuPraejo} dienų akvariume gyvens ${
    zuvuKiekis + zuvuKiekvienaDiena * dienuPraejo
  } žuvų.`
);
