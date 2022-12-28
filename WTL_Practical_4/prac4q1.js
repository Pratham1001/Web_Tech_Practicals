const process = require("process");

function multiTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num, "*", i, "=", num * i);
  }
}

const checkYear = (year) => {
  if ((year % 100 !== 0 && year % 4 == 0) || year % 400 == 0) {
    console.log("It's a leap year");
    return;
  }
  console.log("Not a leap year");
};

const isPalindrome = (palindrome) => {
  pLength = palindrome.length;
  var half = Math.floor(pLength / 2);
  for (let i = 0; i < half; i++) {
    if (palindrome[i] !== palindrome[pLength - 1 - i]) {
      console.log("Not a palindrome");
    }
  }
  console.log("It is a palindrome");
};

process.nextTick(multiTable, 5);
setImmediate(checkYear, 2016);
const intervalHandler = setInterval(isPalindrome, 500, "TENET");

setTimeout(() => {
  clearInterval(intervalHandler);
}, 600);
