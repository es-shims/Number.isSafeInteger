/* eslint-disable max-lines-per-function */

'use strict';

module.exports = function (isSafeInteger, t) {
	t.test('should be truthy on integers', function (st) {
		st.equal(isSafeInteger(4), true);
		st.equal(isSafeInteger(4.0), true);
		st.equal(isSafeInteger(1234), true);
		st.equal(isSafeInteger(-1234), true);
		st.equal(isSafeInteger(Math.pow(2, 53) - 1), true);
		st.equal(isSafeInteger(-Math.pow(2, 53) + 1), true);
		st.equal(isSafeInteger(0), true);
		st.equal(isSafeInteger(-0), true);
		st.end();
	});

	t.test('should be false when the type is not number', function (st) {
		st.equal(isSafeInteger(undefined), false);
		st.equal(isSafeInteger(null), false);
		st.equal(isSafeInteger('foo'), false);
		st.equal(isSafeInteger({ valueOf: function () { return 3; } }), false);
		st.equal(isSafeInteger({ valueOf: function () { throw new Error(); } }), false);

		if (typeof BigInt === 'function') { st.equal(isSafeInteger(BigInt(2)), false); }

		st.end();
	});

	t.test('should be false when NaN', function (st) {
		st.equal(isSafeInteger(NaN), false);
		st.end();
	});

	t.test('should be false when ∞', function (st) {
		st.equal(isSafeInteger(Infinity), false);
		st.equal(isSafeInteger(-Infinity), false);
		st.end();
	});

	t.test('should be false when number is not integer', function (st) {
		st.equal(isSafeInteger(3.4), false);
		st.equal(isSafeInteger(-3.4), false);
		st.end();
	});

	t.test('should be false when abs(number) is 2^53 or larger', function (st) {
		st.equal(isSafeInteger(Math.pow(2, 53)), false);
		st.equal(isSafeInteger(Math.pow(2, 54)), false);
		st.equal(isSafeInteger(-Math.pow(2, 53)), false);
		st.equal(isSafeInteger(-Math.pow(2, 54)), false);
		st.end();
	});
};
