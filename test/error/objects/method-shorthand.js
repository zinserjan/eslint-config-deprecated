/* eslint-disable no-unused-vars, func-names */

/**
 * Use object method shorthand
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#es6-object-shorthand
 */


 // bad
 const atom = {
   value: 1,

   addValue: function (value) {
     return atom.value + value;
   },
 };
