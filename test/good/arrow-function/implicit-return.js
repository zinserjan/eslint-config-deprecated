/**
 * If the function body consists of a single expression use the implicit return.
 * Otherwise use a return statement.
 *
 * Why? Syntactic sugar. It reads well when multiple functions are chained together.
 *
 */

// good
[1, 2, 3].map((number) => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  index: number,
}));
