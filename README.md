# dmd-readable
A plugin for dmd/jsdoc-to-markdown

<br>

### Installation
With npm:
```
npm install dmd-readable
```

<br>

### Usage
```
jsdoc2md --plugin dmd-readable
```

### Helper
The helper provides two functions:
- changeCase: implements the library [change-case](https://github.com/blakeembrey/change-case). Takes two params, the first is the short-hand for the change-case function, the second is the string to modify
- package: Reads info from the package.json file. Takes one param, the key of the package property you want returned.
