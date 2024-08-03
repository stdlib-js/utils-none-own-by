// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Object.prototype.hasOwnProperty;function r(r,t){return null!=r&&e.call(r,t)}var t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,_=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,m,"e"),t=d.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,y,"e-0$1"),e.alternate&&(t=d.call(t,b,"$1."),t=d.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var S=String.fromCharCode,x=Array.isArray;function k(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,a,l,u,f,p,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",l=1,u=0;u<e.length;u++)if(n=e[u],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+E(h):E(h)+p)),a+=n.arg||"",l+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function C(e){var r,t;if("string"!=typeof e)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return A.apply(null,r)}var I,$=Object.prototype,P=$.toString,R=$.__defineGetter__,B=$.__defineSetter__,L=$.__lookupGetter__,G=$.__lookupSetter__;I=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var Z=I;function U(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var H="function"==typeof Symbol?Symbol:void 0,N="function"==typeof H?H.toStringTag:"";var q=X()?function(e){var t,n,i;if(null==e)return z.call(e);n=e[N],t=r(e,N);try{e[N]=void 0}catch(r){return z.call(e)}return i=z.call(e),t?e[N]=n:delete e[N],i}:function(e){return z.call(e)},D=Boolean,J=Boolean.prototype.toString;var K=X();function Q(e){return"object"==typeof e&&(e instanceof D||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function Y(e){return W(e)||Q(e)}U(Y,"isPrimitive",W),U(Y,"isObject",Q);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ne="object"==typeof te?te:null,ie="object"==typeof globalThis?globalThis:null;var oe=function(e){if(arguments.length){if(!W(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ie)return ie;if(ee)return ee;if(re)return re;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ce=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;U(le,"REGEXP",ue);var se=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function fe(e){return null!==e&&"object"==typeof e}function pe(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ue.exec(n.toString()))return r[1]}return fe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(fe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!se(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(fe));var ge="function"==typeof t||"object"==typeof ce||"function"==typeof ae?function(e){return pe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?pe(e).toLowerCase():r};function de(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function he(e,t,n){var i,o;if("object"!=typeof(o=e)||null===o||se(o))throw new TypeError(de(" invalid argument. First argument must be an object. Value: `%s`.",e));if(!function(e){return"function"===ge(e)}(t))throw new TypeError(de("null2H",t));for(i in e)if(r(e,i)&&t.call(n,e[i],i,e))return!1;return!0}export{he as default};
//# sourceMappingURL=mod.js.map