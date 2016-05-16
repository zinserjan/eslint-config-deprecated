/* eslint-disable no-unused-vars, no-console */

/**
 *  Numbers: Use Number for type casting and parseInt always with a radix for parsing strings.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#coercion--numbers
 */

const inputValue = '4';

// bad
const val1 = new Number(inputValue);

// bad
const val2 = +inputValue;

// bad
const val3 = inputValue >> 0;

// bad
const val4 = parseInt(inputValue);
