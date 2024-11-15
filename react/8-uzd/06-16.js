/*
Write a JavaScript function to count the number of days passed since beginning of the year.

Test Data :
console.log(days_passed(new Date(2015, 0, 15))); 
15
console.log(days_passed(new Date(2015, 11, 14)));
348
*/

const days_passed = (date) => {
  const beginningYear = new Date(date.getFullYear(), 0, 1);

  return Math.ceil((date - beginningYear + 1) / 86400000);
};

console.log(days_passed(new Date(2015, 11, 14)));
