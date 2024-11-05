"use strict";

const frogWeight = parseInt(prompt("Kiek sveria varlė?"));
const frogsToTrack = parseInt(prompt("Kiek varlių norima stebėti?"));

const totalFrogWeight = frogWeight * frogsToTrack;

if (totalFrogWeight > 5000) {
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}
