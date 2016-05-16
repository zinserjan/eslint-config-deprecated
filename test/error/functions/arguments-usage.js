/* eslint-disable no-unused-vars */

// see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#es6-rest

// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}
