"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=s(function(w,u){
var o=require('@stdlib/assert-has-own-property/dist'),f=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-object/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r,e,a){var n;if(!m(r))throw new TypeError(t(" invalid argument. First argument must be an object. Value: `%s`.",r));if(!f(e))throw new TypeError(t('1sx2H',e));for(n in r)if(o(r,n)&&e.call(a,r[n],n,r))return!1;return!0}u.exports=v
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
