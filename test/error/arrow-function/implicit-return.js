/**
 * If the function body consists of a single expression, omit the braces and use the implicit return.
 * Otherwise, keep the braces and use a return statement.
 *
 * Why? Syntactic sugar. It reads well when multiple functions are chained together.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrows--implicit-return
 */

// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});
