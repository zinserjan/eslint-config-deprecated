/* eslint-disable no-unused-vars */

/**
 * Never use the Function constructor to create a new function.
 * Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#functions--constructor
 */

// bad
const add = new Function('a', 'b', 'return a + b');
