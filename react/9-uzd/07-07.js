/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/

const string_parameterize = (string) => {
  return string.replaceAll(" ", "-").replaceAll(".", "").toLowerCase();
};

console.log(string_parameterize("Robin Singh from USA."));
