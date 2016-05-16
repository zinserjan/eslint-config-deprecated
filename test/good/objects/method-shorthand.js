/* eslint-disable no-unused-vars */

/**
 * Use object method shorthand
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#es6-object-shorthand
 */

 // good
 const atom = {
   value: 1,

   addValue(value) {
     return atom.value + value;
   },
 };
