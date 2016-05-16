/* eslint-disable no-unused-vars */

/**
 * Ternaries should not be nested and generally be single line expressions.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#comparison--nested-ternaries
 */

const maybe1 = 10;
const maybe2 = 10;

const value1 = 1;
const value2 = 2;

// bad
const foo = maybe1 > maybe2 ? 'bar' : value1 > value2 ? 'baz' : null;
