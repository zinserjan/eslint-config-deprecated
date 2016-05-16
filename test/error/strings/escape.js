/* eslint-disable no-unused-vars */

/**
 * Do not unnecessarily escape characters in strings.
 *
 * Why? Backslashes harm readability, thus they should only be present when necessary.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#strings--escaping
 */

// bad
const foo = '\'this\' \i\s \"quoted\"';
