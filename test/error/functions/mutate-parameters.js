/* eslint-disable no-unused-vars */

/**
 * Never mutate parameters.
 * Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#functions--mutate-params
 */

 // bad
 function f1(obj) {
   obj.key = 1;
 }
