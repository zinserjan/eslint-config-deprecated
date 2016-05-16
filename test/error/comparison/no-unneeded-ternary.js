/* eslint-disable no-unused-vars */

/**
 * Avoid unneeded ternary statements.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#comparison--unneeded-ternary
 */

const a = null;
const b = 'test';
const c = null;

// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
