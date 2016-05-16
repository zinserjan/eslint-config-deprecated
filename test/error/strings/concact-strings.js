/* eslint-disable no-unused-vars */

/**
 * When programmatically building up strings, use template strings instead of concatenation
 * Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#es6-template-literals
 */

// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi2(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi3(name) {
  return `How are you, ${ name }?`;
}
