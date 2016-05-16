/* eslint-disable no-unused-vars */

/**
 * Always use class. Avoid manipulating prototype directly.
 *
 * Why? class syntax is more concise and easier to reason about.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#constructors--use-class
 */

// good
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}
