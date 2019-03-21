const path = require('path');
const changeCase = require('change-case');
const packageJson = require(path.resolve(process.cwd(), 'package.json'));

exports.package = function(key) {
	return packageJson[key];
};

exports.changeCase = function(to, string) {
	return changeCase[to + 'Case'](string);
};
