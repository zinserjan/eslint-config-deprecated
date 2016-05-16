/* eslint-disable no-unused-vars, no-console, func-names */

/**
 * Don't save references to this. Use arrow functions or Function#bind.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#naming--self-this
 */

// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo1() {
  const that = this;
  return function () {
    console.log(that);
  };
}
