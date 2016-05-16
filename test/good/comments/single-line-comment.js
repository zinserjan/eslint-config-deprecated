/* eslint-disable no-unused-vars, no-console */

/**
 * Use // for single line comments.
 *
 * Place single line comments on a newline above the subject of the comment.
 * Put an empty line before the comment unless it's on the first line of a block.
 */

// good
// is current tab
const active = true;

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType2() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
