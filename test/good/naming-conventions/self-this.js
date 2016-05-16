/* eslint-disable no-unused-vars, no-console, func-names */

/**
 * Don't save references to this. Use arrow functions or Function#bind.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#naming--self-this
 */

// good
function foo() {
  return () => {
    console.log(this);
  };
}
