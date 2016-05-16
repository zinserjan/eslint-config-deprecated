/* eslint-disable no-unused-vars, no-console */

/**
 * Leave a blank line after blocks and before the next statement.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#whitespace--after-blocks
 */

const test = 'test';

// bad
if (test) {
  console.log('test');
}
console.log('test');

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
console.log('test');

// bad
const arr = [
  function foo() {
  },
  function bar() {
  },
];
console.log('test');
