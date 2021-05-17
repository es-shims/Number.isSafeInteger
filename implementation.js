'use strict';

var IsInteger = require('es-abstract/2020/IsInteger');
var abs = Math.abs;
var firstUnsafeInteger = 0x20000000000000; // 2 ** 53

module.exports = function isSafeInteger(value) {
	return IsInteger(value) && abs(value) < firstUnsafeInteger;
};
