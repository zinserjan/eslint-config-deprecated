/* eslint-disable no-unused-vars */

/**
 * Only quote properties that are invalid identifiers.
 *
 * Why? In general we consider it subjectively easier to read.
 * It improves syntax highlighting, and is also more easily optimized by many JS engines.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#objects-quoted-props
 * */


// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
