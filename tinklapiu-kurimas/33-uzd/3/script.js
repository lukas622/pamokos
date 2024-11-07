"use strict";

const calculateSum = (event) => {
  event.preventDefault();

  const num1 = Number(document.querySelector("[name='firstNumber']").value);
  const num2 = Number(document.querySelector("[name='secondNumber']").value);

  const sumSpan = document.querySelector("#sum");

  sumSpan.textContent = num1 + num2;
};

document.addEventListener("submit", calculateSum);
