# Number.isSafeInteger <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Number.isSafeInteger` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-number.issafeinteger).

## Getting started

```sh
npm install --save number.issafeinteger
```

## Usage/Examples

```js
console.log(Number.isSafeInteger(-3)); // true
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
console.log(Number.isSafeInteger("7")); // false
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/number.issafeinteger
[npm-version-svg]: https://versionbadg.es/es-shims/Number.isSafeInteger.svg
[deps-svg]: https://david-dm.org/es-shims/Number.isSafeInteger.svg
[deps-url]: https://david-dm.org/es-shims/Number.isSafeInteger
[dev-deps-svg]: https://david-dm.org/es-shims/Number.isSafeInteger/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Number.isSafeInteger#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/number.issafeinteger.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/number.issafeinteger.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/number.issafeinteger.svg
[downloads-url]: https://npm-stat.com/charts.html?package=number.issafeinteger
[codecov-image]: https://codecov.io/gh/es-shims/Number.isSafeInteger/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Number.isSafeInteger/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Number.isSafeInteger
[actions-url]: https://github.com/es-shims/Number.isSafeInteger/actions
