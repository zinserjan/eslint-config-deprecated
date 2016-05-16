/* eslint-disable no-unused-vars, no-console */

/**
 * Do not use trailing or leading underscores.
 *
 * Why?
 * JavaScript does not have the concept of privacy in terms of properties or methods.
 * Although a leading underscore is a common convention to mean “private”,
 * in fact, these properties are fully public, and as such, are part of your
 * public API contract.
 * This convention might lead developers to wrongly think that a change
 * won't count as breaking, or that tests aren't needed.
 *
 * If you want something to be “private”, it must not be observably present.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#naming--leading-underscore
 */

function test() {
  // bad
  this.__firstName__ = 'Panda';
  this.firstName_ = 'Panda';
  this._firstName = 'Panda';
}
