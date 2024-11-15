/*
Write a JavaScript function to test whether a date is a weekend. 

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend" 
"weekend" 
undefined
*/

const is_weekend = (date) => {
  if (date.getDay() === 0 || date.getDay() === 6) {
    return "weekend";
  }
};

console.log(is_weekend(new Date("Nov 17, 2014")));
