/* eslint-disable no-unused-vars */

/**
 *  Classes have a default constructor if one is not specified.
 *  An empty constructor function or one that just delegates to a parent class is unnecessary.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#constructors--no-useless
 */

// good
class Jedi {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// good
class Rey extends Jedi {
  constructor() {
    super('rey');
  }
}
