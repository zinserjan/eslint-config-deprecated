/* eslint-disable no-unused-vars */

/**
 * Use object destructuring when accessing and using multiple properties of an object.
 * Why? Destructuring saves you from creating temporary references for those properties.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#destructuring--object
 */

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}
