/*
Write a JavaScript function to get the quarter (1 to 4) of the year. 

Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
*/

const quarter_of_the_year = (date) => {
  const month = date.getMonth();
  return Math.floor((month + 3) / 3);
};

console.log(quarter_of_the_year(new Date(2015, 1, 21)));
