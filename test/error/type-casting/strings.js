/* eslint-disable no-unused-vars, no-console, prefer-template */

/**
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#coercion--strings
 */

const reviewScore = 5;

// bad
// invokes this.reviewScore.valueOf()
const totalScore1 = reviewScore + '';

// bad
// isn't guaranteed to return a string
const totalScore2 = reviewScore.toString();
