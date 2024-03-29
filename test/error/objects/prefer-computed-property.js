/**
 * Use computed property names when creating objects with dynamic property names.
 * Why? They allow you to define all the properties of an object in one place.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#es6-computed-properties
 */


function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;
