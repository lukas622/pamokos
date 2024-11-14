"use strict";

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Peter", age: 32, voted: true },
  { name: "Patrick", age: 25, voted: false },
  { name: "John", age: 20, voted: false },
  { name: "Saul", age: 21, voted: true },
];

const totalVotes = (arr) => {
  return arr.reduce((acc, val) => {
    if (val.voted) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

console.log(totalVotes(voters));
