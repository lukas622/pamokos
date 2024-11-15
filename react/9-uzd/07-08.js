/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/

const capitalize = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

console.log(capitalize("js string exercises"));
