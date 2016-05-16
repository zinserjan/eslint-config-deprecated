/* eslint-disable no-unused-vars */

/**
 * Use default parameter syntax rather than mutating function arguments.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#es6-default-parameters
 */

// good
function handleThings(opts = {}) {
  // ...
}

// always put parameters last

// good
function handleThings2(name, opts = {}) {
  // ...
}
