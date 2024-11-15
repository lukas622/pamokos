/*
Write a JavaScript function to concatenates a given string n times (default is 1). 
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
*/

const repeat = (string, value = 1) => {
  let newString = "";
  for (let i = 1; i <= value; i++) {
    newString += string;
  }
  return newString;
};

console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));
