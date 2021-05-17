'use strict';

var isSafeInteger = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(isSafeInteger, t);

	t.end();
});
