/**
 * If your function takes a single argument use also braces, but omit the parentheses.
 *
 */

// good
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map((number) => (
  `A long string with the ${number}. It’s so long that we’ve broken it ` +
  'over multiple lines!'
));

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
