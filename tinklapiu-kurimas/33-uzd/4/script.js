"use strict";

const randomNumber = Math.floor(Math.random() * 100) + 1;

const message = document.createElement("p");

const form = document.querySelector("[name='form']");

form.appendChild(message);

let guesses = 0;

const guessNumber = (event) => {
  event.preventDefault();

  const guessedNumber = Number(document.querySelector("#number").value);

  guesses++;

  if (guessedNumber === randomNumber) {
    message.innerHTML = `Your guess is correct! <br> You have guessed ${guesses} times`;
  } else if (guessedNumber > randomNumber) {
    message.innerHTML = `The guessed number is bigger! <br> You have guessed ${guesses} times`;
  } else {
    message.innerHTML = `The guessed number is smaller! <br> You have guessed ${guesses} times`;
  }
};

document.addEventListener("submit", guessNumber);
