/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/

const swapcase = (str) => {
  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/)) {
        return char.toUpperCase();
      } else if (char.match(/[A-Z]/)) {
        return char.toLowerCase();
      }
      return char;
    })
    .join("");
};

console.log(swapcase("AaBbc"));
