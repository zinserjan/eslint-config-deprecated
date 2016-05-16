/* eslint-disable no-unused-vars, no-console */

/**
 * Leave a blank line after blocks and before the next statement.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#whitespace--after-blocks
 */

const test = 'test';

// good
if (test) {
  console.log('test');
}

console.log('test');

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

console.log('test');

// good
const arr = [
  function foo() {
  },

  function bar() {
  },
];

console.log('test');
