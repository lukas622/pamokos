/*
Write a JavaScript function to uncamelize a string. 
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
*/

const uncamelize = (str, separator = " ") => {
  return str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();
};

console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
