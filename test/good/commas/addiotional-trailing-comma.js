/* eslint-disable no-unused-vars, no-console */

/**
 * Additional trailing comma: Yup
 *
 * Why? This leads to cleaner git diffs.
 * Also, transpilers like Babel will remove the additional trailing comma in
 * the transpiled code which means you don't have to worry about the trailing
 * comma problem in legacy browsers.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#commas--dangling
 */

// good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};

const heroes = [
  'Batman',
  'Superman',
];
