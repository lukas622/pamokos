/*
Write a JavaScript function to get the day of the month, 2 digits with leading zeros. 
Test Data :
d= new Date(2015, 10, 1); 
console.log(day_of_the_month(d));
"01"
*/

const day_of_the_month = (date) => {
  let day = date.getDate().toString();
  if (day.length === 1) {
    return "0" + day;
  }
  return day;
};

d = new Date(2015, 10, 1);
console.log(day_of_the_month(d));
