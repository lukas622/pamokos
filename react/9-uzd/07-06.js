/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

const protect_email = (string) => {
  const split = string.split("@");

  const hiddenName = split[0].slice(0, 4);

  return `${hiddenName}...@${split[1]}`;
};

console.log(protect_email("robin_singh@example.com"));
