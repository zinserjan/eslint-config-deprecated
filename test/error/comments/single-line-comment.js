/* eslint-disable no-unused-vars, no-console */

/**
 * Use // for single line comments.
 *
 * Place single line comments on a newline above the subject of the comment.
 * Put an empty line before the comment unless it's on the first line of a block.
 */

// bad
const active = true;  // is current tab

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
