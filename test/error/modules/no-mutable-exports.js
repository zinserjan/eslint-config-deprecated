/**
 * Do not export mutable bindings. eslint: import/no-mutable-exports
 * Why? Mutation should be avoided in general, but in particular when exporting mutable bindings.
 * While this technique may be needed for some special cases, in general, only constant references should be exported.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#modules--no-mutable-exports
 */

// bad
 let foo = 3;
 export { foo }
