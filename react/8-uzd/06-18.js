/*
Write a JavaScript program to calculate age. 

Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/

const calculate_age = (date) => {
  const curdate = new Date();

  let age = curdate.getFullYear() - date.getFullYear();

  const month = curdate.getMonth() - date.getMonth();

  if (month < 0 || (month === 0 && curdate.getDate() < date.getDate())) {
    age--;
  }

  return age;
};

console.log(calculate_age(new Date(1982, 11, 4)));
