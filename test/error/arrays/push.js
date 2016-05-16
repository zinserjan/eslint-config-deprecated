/**
 * Use Array#push instead of direct assignment to add items to an array.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#arrays--push
 */

 const someStack = [];

 // bad
 someStack[someStack.length] = 'abracadabra';
