/* eslint-env browser */
/* eslint-disable no-unused-vars */

/**
 * Use multi-line comments.
 * Include a description, specify types and values for all parameters and return values.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#comments--multiline
 */

// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  return document.createElement(tag);
}
