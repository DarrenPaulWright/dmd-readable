# Dmd Readable

> A plugin for dmd and jsdoc-to-markdown to provide more readable docs
>
> [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="Installation"></a>

### Installation
```npm install dmd-readable```

<br><a name="Usage"></a>

### Usage
Pass the plug-in name to `jsdoc2md` or `dmd`:```jsdoc2md --plugin dmd-readable```This plugin (which was used to generate this readme) does a few things:- removes global indexes- places descriptions in block-quotes- adds more whitespace before headings- changes the delimiter for multiple types in param tables to a comma- adds alias outputUse @summary for descriptions without block quotes.

<br><a name="package"></a>

### package(key) ⇒ <code>\*</code>
> Reads info from the package.json file.

**See**: [docs.hbs](docs.hbs) for an example of how to use this function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The package property you want returned |


<br><a name="changeCase"></a>

### changeCase(to, string) ⇒ <code>string</code>
> Implements the library [change-case](https://github.com/blakeembrey/change-case).

**See**: _[docs.hbs](docs.hbs) for an example of how to use this function_  

| Param | Type | Description |
| --- | --- | --- |
| to | <code>string</code> | Shorthand or full name for the change-case function. |
| string | <code>string</code> | The string to modify |


<br><a name="prefixLines"></a>

### prefixLines(string, replacer) ⇒ <code>string</code>
> Prefixes a string to the beginning of each line in the first string


| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to modify |
| replacer | <code>string</code> | The string to prefix to each line |


[npm]: https://img.shields.io/npm/v/dmd-readable.svg
[npm-url]: https://npmjs.com/package/dmd-readable
[deps]: https://david-dm.org/darrenpaulwright/dmd-readable.svg
[deps-url]: https://david-dm.org/darrenpaulwright/dmd-readable
[size]: https://packagephobia.now.sh/badge?p&#x3D;dmd-readable
[size-url]: https://packagephobia.now.sh/result?p&#x3D;dmd-readable
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/dmd-readable/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/dmd-readable?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/dmd-readable.svg
[license-url]: https://npmjs.com/package/dmd-readable/LICENSE.md
