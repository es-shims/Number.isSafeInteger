import callBind from 'call-bind';

import getPolyfill from 'number.issafeinteger/polyfill';

export default callBind(getPolyfill(), Number);

export { default as getPolyfill } from 'number.issafeinteger/polyfill';
export { default as implementation } from 'number.issafeinteger/implementation';
export { default as shim } from 'number.issafeinteger/shim';
