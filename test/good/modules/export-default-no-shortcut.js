/**
 * And do not export directly from an import.
 * Why? Although the one-liner is concise, having one clear way to import
 * and one clear way to export makes things consistent.
 *
 * see https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v9.0.1#modules--no-export-from-import
 *
 */


// good
// filename es6.js
import { join } from 'path';
export default join;
