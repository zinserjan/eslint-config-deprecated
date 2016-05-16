/* global $ */

/**
 * Use indentation when making long method chains (more than 2 method chains).
 * Use a leading dot, which emphasizes that the line is a method call, not a new statement
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#whitespace--chains
 */

// bad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// bad
$('#items').
  find('.selected').
    highlight().
    end().
  find('.open').
    updateCount();
