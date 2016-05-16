/**
 * Always use class. Avoid manipulating prototype directly.
 *
 * Why? class syntax is more concise and easier to reason about.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#constructors--use-class
 */

// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function pop() {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};
