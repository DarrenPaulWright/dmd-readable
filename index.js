/**
 * With npm:
 * ```
 * npm install dmd-readable
 * ```
 *
 * @name Installation
 */

/**
 * Pass the plug-in name to `jsdoc2md` or `dmd`:
 *
 * ```
 * jsdoc2md --plugin dmd-readable
 * ```
 *
 * This plugin (which was used to generate this readme) does a few things:
 * - removes global indexes
 * - places descriptions in block-quotes
 * - adds more whitespace before headings
 * - changes the delimiter for multiple types in param tables to a comma
 * - adds alias output
 *
 * @name Usage
 */
module.exports = function() {
	return {
		partial: __dirname + "/partials/**/*.hbs",
		helper: __dirname + "/helper.js"
	};
};
