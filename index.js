/**
 * @name Installation
 * @summary
 *
 * ```
 * npm install dmd-readable
 * ```
 */

/**
 * @name Usage
 * @summary
 * Pass the plug-in name to [`jsdoc2md`](https://github.com/jsdoc2md/jsdoc-to-markdown) or [`dmd`](https://github.com/jsdoc2md/dmd):
 *
 * ```
 * jsdoc2md --plugin dmd-readable
 * ```
 *
 * This plugin (which was used to generate this readme) does a few things:
 * - removes global indexes (see below)
 * - places descriptions in block-quotes (Use @summary for descriptions without block quotes)
 * - adds more whitespace before headings
 * - changes the delimiter for multiple types in param tables to a comma
 * - adds alias output
 *
 * The removal of global indexes is now a setting in the [template](docs.hbs). If you are using your own template and you wish to retain this feature, add the following line to your template:
 *
 * ```
 * {{optionSet "global-index-format" "none"~}}
 * ```
 *
 * All options for global-index-format are "none", "grouped", "table", "dl". Other options and more info can be found [here](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/docs/API.md#jsdoctomarkdown-).
 *
 * This plugin also provides the following helper functions:
 *
 */
module.exports = function() {
	return {
		partial: __dirname + "/partials/**/*.hbs",
		helper: __dirname + "/helper.js"
	};
};
