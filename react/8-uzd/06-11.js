/*
 Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/

const max_date = (datearray) => {
  let maxDate = 0;
  for (date of datearray) {
    if (date > maxDate) {
      maxDate = date;
    }
  }
  return maxDate.toLocaleDateString();
};

console.log(
  max_date([
    new Date("2015/02/01"),
    new Date("2015/02/02"),
    new Date("2015/01/03"),
  ])
);
