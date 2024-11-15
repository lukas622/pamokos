/*
Write a JavaScript function to get the current date. 

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/')); 
console.log(curday('-'));
Output :
"11/13/2014" 
"11-13-2014"
*/

const curday = (separator) => {
  const date = new Date();

  return (
    String(date.getDay()) +
    separator +
    String(date.getMonth()) +
    separator +
    String(date.getFullYear())
  );
};

console.log(curday("-"));
