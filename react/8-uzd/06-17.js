/*
 Write a JavaScript function to convert a Unix timestamp to time.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/

const Unix_timestamp = (time) => {
  return new Date(time * 1000).toLocaleTimeString();
};

console.log(Unix_timestamp(1412743274));
