/* eslint-disable no-unused-vars */

/**
 * Group your shorthand properties at the beginning of your object declaration.
 * Why? It's easier to tell which properties are using the shorthand.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#objects--grouped-shorthand
 */

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
