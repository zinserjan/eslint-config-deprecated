/* eslint-disable no-unused-vars */

/**
 * Avoid duplicate class members. eslint: no-dupe-class-members
 *
 * Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#classes--no-duplicate-members
 */

// bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}
