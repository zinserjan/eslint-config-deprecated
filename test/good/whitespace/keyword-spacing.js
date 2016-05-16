/* eslint-disable no-unused-vars, no-console */

/**
 * Place 1 space before the opening parenthesis in control statements (if, while etc.).
 * Place no space between the argument list and the function name in function calls and declarations.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#whitespace--around-keywords
 *
 */


const isJedi = false;

// good
function fight() {
  console.log('Swooosh!');
}


// good
if (isJedi) {
  fight();
}
