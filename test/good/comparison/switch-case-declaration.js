/* eslint-disable no-unused-vars */

/**
 * Use braces to create blocks in case and default clauses that contain
 * lexical declarations (e.g. let, const, function, and class).
 *
 * Why? Lexical declarations are visible in the entire switch block but only
 * get initialized when assigned, which only happens when its case is reached.
 * This causes problems when multiple case clauses attempt to define the same thing.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#comparison--switch-blocks
 */

function bar() {
  return true;
}
const num = 5;


// good
switch (num) {
  case 1: {
    const x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
