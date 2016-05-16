/* eslint-disable no-unused-vars */

/**
 * If you're using multi-line blocks with if and else,
 * put else on the same line as your if block's closing brace.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#blocks--cuddled-elses
 */

const test = 'test';

// bad
if (test) {
  const x = 5;
  const y = 6;
}
else {
  const z = 5;
}
