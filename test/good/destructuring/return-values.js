/* eslint-disable no-unused-vars */

/**
 * Use object destructuring for multiple return values, not array destructuring
 * Why? You can add new properties over time or change the order of things without breaking call sites.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#destructuring--object-over-array
 */


 // good
 function processInput(input) {
   // then a miracle occurs
   const left = 0;
   const right = 0;
   const top = 0;
   const bottom = 0;
   return { left, right, top, bottom };
 }

 // the caller selects only the data they need
 const { left, top } = processInput('test');
