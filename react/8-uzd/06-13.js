/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

const timeConvert = (time) => {
  const hours = time / 60;
  const hoursf = Math.floor(hours);

  const minutes = Math.floor((hours - hoursf) * 60);

  return `${time} minutes = ${hoursf} hour(s) and ${minutes} minutes(s).`;
};

console.log(timeConvert(200));
