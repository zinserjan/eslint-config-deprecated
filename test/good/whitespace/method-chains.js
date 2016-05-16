/* eslint-disable no-unused-vars */
/* global $ */

/**
 * Use indentation when making long method chains (more than 2 method chains).
 * Use a leading dot, which emphasizes that the line is a method call, not a new statement
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#whitespace--chains
 */

// good
$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();


// good
const leds = $('#items').selectAll('.led').data({ test: 1 });
