/* eslint-disable no-unused-vars */

/**
 * Never reassign parameters. eslint: no-param-reassign
 *
 * Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the arguments object. It can also cause optimization issues, especially in V8.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#functions--reassign-params
 */

 // bad
 function f1(a) {
   a = 1;
 }

 function f2(a) {
   if (!a) {
     a = 1;
   }
 }
