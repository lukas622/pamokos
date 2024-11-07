"use strict";

const yellowButton = document.querySelector("#yellow");
const greenButton = document.querySelector("#green");
const redButton = document.querySelector("#red");

const changeToYellow = () => {
  document.querySelector("#paragraph").style.color = "yellow";
};

const changeToRed = () => {
  document.querySelector("#paragraph").style.color = "red";
};

const changeToGreen = () => {
  document.querySelector("#paragraph").style.color = "green";
};

yellowButton.addEventListener("click", changeToYellow);
redButton.addEventListener("click", changeToRed);
greenButton.addEventListener("click", changeToGreen);
