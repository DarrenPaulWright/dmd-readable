const path = require('path');
const changeCase = require('change-case');
const packageJson = require(path.resolve(process.cwd(), 'package.json'));

/**
 * Reads info from the package.json file.
 * @see [docs.hbs](docs.hbs) for an example of how to use this function
 *
 * @function package
 *
 * @param {string} key - The package property you want returned
 *
 * @returns {*}
 */
exports.package = function(key) {
	return packageJson[key];
};

/**
 * Implements the library [change-case](https://github.com/blakeembrey/change-case).
 * @see _[docs.hbs](docs.hbs) for an example of how to use this function_
 *
 * @function changeCase
 *
 * @param {string} to - Shorthand or full name for the change-case function.
 * @param {string} string - The string to modify
 *
 * @returns {string}
 */
exports.changeCase = function(to, string) {
	if (to.indexOf('Case') === -1) {
		to += 'Case';
	}
	return changeCase[to](string);
};

/**
 * Prefixes a string to the beginning of each line in the first string
 *
 * @function prefixLines
 *
 * @param {string} string - The string to modify
 * @param {string} replacer - The string to prefix to each line
 *
 * @returns {string}
 */
exports.prefixLines = function(string, replacer = '') {
	if (string) {
		return replacer + string.replace(/[\r\n]/g, '$&' + replacer);
	}
};
