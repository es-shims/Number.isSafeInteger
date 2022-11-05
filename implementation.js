'use strict';

var IsIntegralNumber = require('es-abstract/2022/IsIntegralNumber');
var abs = Math.abs;
var firstUnsafeInteger = 0x20000000000000; // 2 ** 53

module.exports = function isSafeInteger(value) {
	return IsIntegralNumber(value) && abs(value) < firstUnsafeInteger;
};
