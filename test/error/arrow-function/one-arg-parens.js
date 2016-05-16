/**
 * If your function takes a single argument and doesn’t use braces, omit the parentheses.
 * Otherwise, always include parentheses around arguments.
 *
 * Why? Less visual clutter.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrows--one-arg-parens
 */

// bad
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});
