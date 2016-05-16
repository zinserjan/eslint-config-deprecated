/**
 *
 * Conditional statements such as the if statement evaluate their expression
 * using coercion with the ToBoolean abstract method and always follow
 * these simple rules:
 * 		Objects evaluate to true
 * 		Undefined evaluates to false
 * 		Null evaluates to false
 * 		Booleans evaluate to the value of the boolean
 * 		Numbers evaluate to false if +0, -0, or NaN, otherwise true
 * 		Strings evaluate to false if an empty string '', otherwise true
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#comparison--if
 */


const name = 'test';
const collection = [];

// good
if (name) {
  // ...stuff...
}

// good
if (collection.length) {
 // ...stuff...
}
