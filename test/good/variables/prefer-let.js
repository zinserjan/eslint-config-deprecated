/* eslint-disable no-constant-condition */

/**
 * If you must reassign references, use let instead of var.
 * Why? let is block-scoped rather than function-scoped like var.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#references--disallow-var
 */

// good, use the let.
let count = 1;

if (true) {
  count += 1;
}

console.log(count); // eslint-disable-line no-console
