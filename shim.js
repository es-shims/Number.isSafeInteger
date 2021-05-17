'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathIsSafeInteger() {
	var polyfill = getPolyfill();
	define(Number, { isSafeInteger: polyfill });
	return polyfill;
};
