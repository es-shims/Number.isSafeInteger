import isSafeInteger, * as isSafeIntegerModule from 'number.issafeinteger';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(isSafeInteger, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(isSafeIntegerModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = isSafeIntegerModule;
	t.equal(await import('number.issafeinteger/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('number.issafeinteger/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('number.issafeinteger/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
