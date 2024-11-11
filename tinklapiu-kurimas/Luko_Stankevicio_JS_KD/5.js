"use strict";

const submit = (event) => {
  event.preventDefault();
  const amount = Number(document.querySelector("#amount").value);
  const interest = Number(document.querySelector("#interest").value);
  const numyears = Number(document.querySelector("#numyears").value);

  const result = (amount * interest * numyears) / 100;

  const curYear = new Date().getFullYear();

  document.querySelector(
    "#info"
  ).textContent = `If you deposit ${amount} at an interest rate of ${interest}%, you will receive ${result}, in the year ${
    curYear + numyears
  }`;
};

addEventListener("submit", submit);
