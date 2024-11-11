"use strict";

const filterItems = (array, phrase) => {
  let result = array.filter((el) =>
    el.toLowerCase().includes(phrase.toLowerCase())
  );
  result.sort();
  result = result.map((x) => "*" + x);
  return result;
};

const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

console.log(filterItems(friends, "e"));
