/* eslint-disable no-unused-vars, no-console */

/**
 * Use PascalCase only when naming constructors or classes.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#naming--PascalCase
 */


// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});
