/* eslint-disable no-unused-vars, no-console */

/**
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#coercion--booleans
 */

const age = 0;

// good
const hasAge1 = Boolean(age);

// best
const hasAge2 = !!age;
