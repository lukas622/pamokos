/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/

const date_diff_indays = (date1, date2) => {
  const dif = date2.getTime() - date1.getTime();

  return Math.round(dif / (1000 * 3600 * 24));
};

console.log(date_diff_indays(new Date("04/02/2014"), new Date("11/04/2014")));
