// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(i,n,o){var m;if(!s(i))throw new TypeError(e(" invalid argument. First argument must be an object. Value: `%s`.",i));if(!r(n))throw new TypeError(e("null2H",n));for(m in i)if(t(i,m)&&n.call(o,i[m],m,i))return!1;return!0}export{i as default};
//# sourceMappingURL=index.mjs.map
