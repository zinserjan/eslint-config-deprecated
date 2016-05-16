/* eslint-disable no-unused-vars */

/**
 * Avoid confusing arrow function syntax (=>) with comparison operators (<=, >=).
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrows--confusing
 */

// bad
const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight2 = (item) => item.height > 256 ? item.largeSize : item.smallSize;
