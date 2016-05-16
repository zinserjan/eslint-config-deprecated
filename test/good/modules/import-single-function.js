/**
 * Always use modules (import/export) over a non-standard module system.
 * You can always transpile to your preferred module system.
 * Why? Modules are the future, let's start using the future now.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#modules--use-them
 *
 */

// best
import { join } from 'path';
export default join;
