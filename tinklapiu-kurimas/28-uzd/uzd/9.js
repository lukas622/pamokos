"use strict";

const bakedCookies = parseInt(prompt("Kiek sausanių iškepė Tautvydas?"));
const extraCookieFriends = parseInt(
  prompt("Keli  draugai dar atsinešė po tiek pat sausainių?")
);
const totalParticipants = parseInt(
  prompt("Kiek žmonių iš viso dalyvavo šventėje?")
);

const cookiesForEachParticipant = Math.floor(
  (bakedCookies + extraCookieFriends * bakedCookies) / totalParticipants
);

console.log(
  `Kiekvienas šventės dalyvis gavo po ${cookiesForEachParticipant} sausainius`
);
console.log(
  `Tautvydui papildomai atiteko ${
    bakedCookies +
    extraCookieFriends * bakedCookies -
    cookiesForEachParticipant * totalParticipants
  } sausainiai`
);
