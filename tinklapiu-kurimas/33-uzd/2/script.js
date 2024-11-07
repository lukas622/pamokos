"use strict";

const reduceButton = document.querySelector("#reduce");
const enlargeButton = document.querySelector("#enlarge");

const reduceImage = () => {
  const image = document.querySelector("#dimage");

  image.style.width = "100px";
  image.style.height = "100px";
};

const enlargeImage = () => {
  const image = document.querySelector("#dimage");

  image.style.width = "400px";
  image.style.height = "400px";
};

reduceButton.addEventListener("click", reduceImage);
enlargeButton.addEventListener("click", enlargeImage);
