/* eslint-disable no-unused-vars */

/**
 * Only import from a path in one place.
 * Why? Having multiple lines that import from the same path can make code harder to maintain.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#modules--no-duplicate-imports
 */

 import path from 'path';
 import { join, resolve } from 'path';
