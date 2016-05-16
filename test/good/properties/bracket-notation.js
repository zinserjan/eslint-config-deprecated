/* eslint-disable no-unused-vars */

/**
 *  Use bracket notation [] when accessing properties with a variable.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#properties--dot
 */

const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
