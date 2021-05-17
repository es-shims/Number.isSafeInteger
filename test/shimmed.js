'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Number.isSafeInteger.length, 1, 'Number.isSafeInteger has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Number.isSafeInteger.name, 'isSafeInteger', 'Number.isSafeInteger has name "isSafeInteger"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'isSafeInteger'), 'Number.isSafeInteger is not enumerable');
		et.end();
	});

	runTests(Number.isSafeInteger, t);

	t.end();
});
