"use strict";

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const voterResults = (arr) => {
  const youngPeople = arr.reduce((acc, val) => {
    if (val.age >= 18 && val.age <= 25) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const youngVotes = arr.reduce((acc, val) => {
    if (val.age >= 18 && val.age <= 25 && val.voted) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const midsPeople = arr.reduce((acc, val) => {
    if (val.age >= 26 && val.age <= 35) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const midVotesPeople = arr.reduce((acc, val) => {
    if (val.age >= 26 && val.age <= 35 && val.voted) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const oldsPeople = arr.reduce((acc, val) => {
    if (val.age >= 36 && val.age <= 55) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const oldVotesPeople = arr.reduce((acc, val) => {
    if (val.age >= 36 && val.age <= 55 && val.voted) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const newObj = {
    numYoungVotes: youngVotes,
    numYoungPeople: youngPeople,
    numMidVotesPeople: midVotesPeople,
    numMidsPeople: midsPeople,
    numOldVotesPeople: oldVotesPeople,
    numOldsPeople: oldsPeople,
  };

  return newObj;
};

console.log(voterResults(voters));
