/*
Write a JavaScript function to remove specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

const truncate_string = (string, value) => {
  return string.slice(0, value);
};

console.log(truncate_string("Robin Singh", 4));
