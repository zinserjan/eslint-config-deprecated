/**
 * When you must use function expressions (as when passing an anonymous function), use arrow function notation.
 *
 * Why? It creates a version of the function that executes in the context of this, which is usually what you want, and is a more concise syntax.
 * Why not? If you have a fairly complicated function, you might move that logic out into its own function declaration.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrows--use-them
 */

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
