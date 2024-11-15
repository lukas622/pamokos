/*
 Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
*/

const camelize = (string) => {
  const split = string.split(" ");

  const cap = split.map(
    (string) => string.charAt(0).toUpperCase() + string.slice(1)
  );

  return cap.join("");
};

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
