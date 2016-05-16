/**
 * In case the expression spans over multiple lines, wrap it in parentheses for better readability.
 *
 * Why? It shows clearly where the function starts and ends.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrows--paren-wrap
 */

// good
[1, 2, 3].map((number) => (
  `As time went by, the string containing the ${number} became much ` +
  'longer. So we needed to break it over multiple lines.'
));
