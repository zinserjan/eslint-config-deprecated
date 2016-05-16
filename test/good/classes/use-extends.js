/* eslint-disable no-unused-vars */

/**
 * Use extends for inheritance.
 *
 * Why? It is a built-in way to inherit prototype functionality without breaking instanceof.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#constructors--extends
 */

 // good

class Queue {
  constructor() {
    this.queue = [];
  }

  add(item) {
    this.queue.push(item);
  }

}

class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
