/* eslint-disable no-unused-vars */

const numbers = [1, 2, 3, 4, 5];

// good
let sum = 0;
for (const num of numbers) {
  sum += num;
}


// best (use the functional force)
const sum2 = numbers.reduce((total, num) => total + num, 0);
