/*
Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/

const capitalize_Words = (string) => {
  const split = string.split(" ");

  const cap = split.map(
    (string) => string.charAt(0).toUpperCase() + string.slice(1)
  );

  return cap.join(" ");
};

console.log(capitalize_Words("js string exercises"));
