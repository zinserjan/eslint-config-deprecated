/* eslint-disable no-unused-vars, no-console */

/**
 *  Numbers: Use Number for type casting and parseInt always with a radix for parsing strings.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#coercion--numbers
 */

const inputValue = '4';

// good
const val1 = Number(inputValue);

// good
const val2 = parseInt(inputValue, 10);
