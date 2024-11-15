/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

const abbrev_name = (string) => {
  const modified = string.split(" ");

  return `${modified[0]} ${modified[1].charAt(0)}.`;
};

console.log(abbrev_name("Robin Singh"));
