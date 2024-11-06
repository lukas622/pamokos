"use strict";

const callNTimes = (times, fn) => {
  for (let i = 1; i <= times; i++) {
    fn();
  }
};

callNTimes(5, () => {
  console.log("Hello, world!");
});
