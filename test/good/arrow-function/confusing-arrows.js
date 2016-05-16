/* eslint-disable no-unused-vars */

// todo remove the following disable statement when eslint fixed it
/* eslint-disable arrow-body-style */

/**
 * Avoid confusing arrow function syntax (=>) with comparison operators (<=, >=).
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrows--confusing
 */

// good
const itemHeight = (item) => { return item.height > 256 ? item.largeSize : item.smallSize; };
