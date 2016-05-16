/* eslint-disable no-unused-vars, no-console */

/**
 * Use PascalCase only when naming constructors or classes.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#naming--PascalCase
 */


// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
