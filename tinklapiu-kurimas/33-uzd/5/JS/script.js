"use strict";

const addItem = (event) => {
  event.preventDefault();

  const item = document.querySelector("#task").value;

  const list = document.querySelector("#list");

  const newItem = document.createElement("li");

  newItem.textContent = item;

  list.appendChild(newItem);
};

document.addEventListener("submit", addItem);
