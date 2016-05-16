/* eslint-disable no-else-return */

/**
 * Use return statements in array method callbacks.
 * It's ok to omit the return if the function body consists of a single statement.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrays--callback-return
 */

// bad
const flat = {};
[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
  const flatten = memo.concat(item);
  flat[index] = flatten;
});
