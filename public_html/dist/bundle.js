(()=>{"use strict"
var e,t,n={160:(e,t,n)=>{var r=n(540)
var a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useSyncExternalStore,l=r.useRef,i=r.useEffect,u=r.useMemo,c=r.useDebugValue
t.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var f=l(null)
if(null===f.current){var d={hasValue:!1,value:null}
f.current=d}else d=f.current
f=u(function(){function e(e){if(!i){if(i=!0,o=e,e=r(e),void 0!==s&&d.hasValue){var t=d.value
if(s(t,e))return l=t}return l=e}if(t=l,a(o,e))return t
var n=r(e)
return void 0!==s&&s(t,n)?(o=e,t):(o=e,l=n)}var o,l,i=!1,u=void 0===n?null:n
return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,s])
var p=o(e,f[0],f[1])
return i(function(){d.hasValue=!0,d.value=p},[p]),c(p),p}},221:(e,t,n)=>{var r=n(540)
function a(e){var t="https://react.dev/errors/"+e
if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1])
for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal")
var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
function c(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null
if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299))
return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:i,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=u.T,n=l.p
try{if(u.T=null,l.p=2,e)return e()}finally{u.T=t,l.p=n,l.d.f()}},t.preconnect=function(e,t){"string"==typeof e&&(t?t="string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,l.d.C(e,t))},t.prefetchDNS=function(e){"string"==typeof e&&l.d.D(e)},t.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0
"style"===n?l.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&l.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin)
l.d.M(e,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&l.d.M(e)},t.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var n=t.as,r=c(n,t.crossOrigin)
l.d.L(e,n,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"==typeof e)if(t){var n=c(t.as,t.crossOrigin)
l.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else l.d.m(e)},t.requestFormReset=function(e){l.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},t.useFormStatus=function(){return u.H.useHostTransitionStatus()},t.version="19.2.0"},247:(e,t,n)=>{var r=n(982),a=n(540),o=n(961)
function l(e){var t="https://react.dev/errors/"+e
if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1])
for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function u(e){var t=e,n=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function s(e){if(31===e.tag){var t=e.memoizedState
if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function f(e){if(u(e)!==e)throw Error(l(188))}function d(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e
for(e=e.child;null!==e;){if(null!==(t=d(e)))return t
e=e.sibling}return null}var p=Object.assign,m=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),O=Symbol.for("react.lazy")
Symbol.for("react.scope")
var P=Symbol.for("react.activity")
Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker")
var C=Symbol.for("react.memo_cache_sentinel")
Symbol.for("react.view_transition")
var T=Symbol.iterator
function j(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=T&&e[T]||e["@@iterator"])?e:null}var N=Symbol.for("react.client.reference")
function z(e){if(null==e)return null
if("function"==typeof e)return e.$$typeof===N?null:e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case y:return"Fragment"
case g:return"Profiler"
case b:return"StrictMode"
case k:return"Suspense"
case _:return"SuspenseList"
case P:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case v:return"Portal"
case S:return e.displayName||"Context"
case w:return(e._context.displayName||"Context")+".Consumer"
case E:var t=e.render
return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e
case x:return null!==(t=e.displayName||null)?t:z(e.type)||"Memo"
case O:t=e._payload,e=e._init
try{return z(e(t))}catch(e){}}return null}var A=Array.isArray,L=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},M=[],D=-1
function I(e){return{current:e}}function U(e){0>D||(e.current=M[D],M[D]=null,D--)}function G(e,t){D++,M[D]=e.current,e.current=t}var B,$,H=I(null),V=I(null),W=I(null),q=I(null)
function Q(e,t){switch(G(W,t),G(V,e),G(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bf(e):0
break
default:if(e=t.tagName,t=t.namespaceURI)e=gf(t=bf(t),e)
else switch(e){case"svg":e=1
break
case"math":e=2
break
default:e=0}}U(H),G(H,e)}function K(){U(H),U(V),U(W)}function X(e){null!==e.memoizedState&&G(q,e)
var t=H.current,n=gf(t,e.type)
t!==n&&(G(V,e),G(H,n))}function Y(e){V.current===e&&(U(H),U(V)),q.current===e&&(U(q),fd._currentValue=F)}function J(e){if(void 0===B)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/)
B=t&&t[1]||"",$=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+B+e+$}var Z=!1
function ee(e,t){if(!e||Z)return""
Z=!0
var n=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()}
if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(e){if(e&&r&&"string"==typeof e.stack)return[e.stack,r.stack]}return[null,null]}}
r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot"
var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name")
a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"})
var o=r.DetermineComponentFrameRoot(),l=o[0],i=o[1]
if(l&&i){var u=l.split("\n"),c=i.split("\n")
for(a=r=0;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++
for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++
if(r===u.length||a===c.length)for(r=u.length-1,a=c.length-1;1<=r&&0<=a&&u[r]!==c[a];)a--
for(;1<=r&&0<=a;r--,a--)if(u[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||u[r]!==c[a]){var s="\n"+u[r].replace(" at new "," at ")
return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=r&&0<=a)
break}}}finally{Z=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type)
case 16:return J("Lazy")
case 13:return e.child!==t&&null!==t?J("Suspense Fallback"):J("Suspense")
case 19:return J("SuspenseList")
case 0:case 15:return ee(e.type,!1)
case 11:return ee(e.type.render,!1)
case 1:return ee(e.type,!0)
case 31:return J("Activity")
default:return""}}function ne(e){try{var t="",n=null
do{t+=te(e,n),n=e,e=e.return}while(e)
return t}catch(e){return"\nError generating stack: "+e.message+"\n"+e.stack}}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,le=r.unstable_shouldYield,ie=r.unstable_requestPaint,ue=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,se=r.unstable_ImmediatePriority,fe=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,pe=r.unstable_LowPriority,me=r.unstable_IdlePriority,he=r.log,ve=r.unstable_setDisableYieldValue,ye=null,be=null
function ge(e){if("function"==typeof he&&ve(e),be&&"function"==typeof be.setStrictMode)try{be.setStrictMode(ye,e)}catch(e){}}var we=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(Se(e)/Ee|0)|0},Se=Math.log,Ee=Math.LN2
var ke=256,_e=262144,xe=4194304
function Oe(e){var t=42&e
if(0!==t)return t
switch(e&-e){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:return 64
case 128:return 128
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e
case 262144:case 524288:case 1048576:case 2097152:return 3932160&e
case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e
case 67108864:return 67108864
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 0
default:return e}}function Pe(e,t,n){var r=e.pendingLanes
if(0===r)return 0
var a=0,o=e.suspendedLanes,l=e.pingedLanes
e=e.warmLanes
var i=134217727&r
return 0!==i?0!==(r=i&~o)?a=Oe(r):0!==(l&=i)?a=Oe(l):n||0!==(n=i&~e)&&(a=Oe(n)):0!==(i=r&~o)?a=Oe(i):0!==l?a=Oe(l):n||0!==(n=r&~e)&&(a=Oe(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&4194048&n)?t:a}function Ce(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Te(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250
case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function je(){var e=xe
return!(62914560&(xe<<=1))&&(xe=4194304),e}function Ne(e){for(var t=[],n=0;31>n;n++)t.push(e)
return t}function ze(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ae(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t
var r=31-we(t)
e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Le(e,t){var n=e.entangledLanes|=t
for(e=e.entanglements;n;){var r=31-we(n),a=1<<r
a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Re(e,t){var n=t&-t
return 0!==((n=42&n?1:Fe(n))&(e.suspendedLanes|t))?0:n}function Fe(e){switch(e){case 2:e=1
break
case 8:e=4
break
case 32:e=16
break
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128
break
case 268435456:e=134217728
break
default:e=0}return e}function Me(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}function De(){var e=R.p
return 0!==e?e:void 0===(e=window.event)?32:Pd(e.type)}function Ie(e,t){var n=R.p
try{return R.p=e,t()}finally{R.p=n}}var Ue=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Ue,Be="__reactProps$"+Ue,$e="__reactContainer$"+Ue,He="__reactEvents$"+Ue,Ve="__reactListeners$"+Ue,We="__reactHandles$"+Ue,qe="__reactResources$"+Ue,Qe="__reactMarker$"+Ue
function Ke(e){delete e[Ge],delete e[Be],delete e[He],delete e[Ve],delete e[We]}function Xe(e){var t=e[Ge]
if(t)return t
for(var n=e.parentNode;n;){if(t=n[$e]||n[Ge]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Mf(e);null!==e;){if(n=e[Ge])return n
e=Mf(e)}return t}n=(e=n).parentNode}return null}function Ye(e){if(e=e[Ge]||e[$e]){var t=e.tag
if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Je(e){var t=e.tag
if(5===t||26===t||27===t||6===t)return e.stateNode
throw Error(l(33))}function Ze(e){var t=e[qe]
return t||(t=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[Qe]=!0}var tt=new Set,nt={}
function rt(e,t){at(e,t),at(e+"Capture",t)}function at(e,t){for(nt[e]=t,e=0;e<t.length;e++)tt.add(t[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},it={}
function ut(e,t,n){if(a=t,re.call(it,a)||!re.call(lt,a)&&(ot.test(a)?it[a]=!0:(lt[a]=!0,0)))if(null===n)e.removeAttribute(t)
else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t)
case"boolean":var r=t.toLowerCase().slice(0,5)
if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function ct(e,t,n){if(null===n)e.removeAttribute(t)
else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function st(e,t,n,r){if(null===r)e.removeAttribute(n)
else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function dt(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function pt(e){if(!e._valueTracker){var t=dt(e)?"checked":"value"
e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t)
if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var a=r.get,o=r.set
return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function mt(e){if(!e)return!1
var t=e._valueTracker
if(!t)return!0
var n=t.getValue(),r=""
return e&&(r=dt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}var vt=/[\n"\\]/g
function yt(e){return e.replace(vt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bt(e,t,n,r,a,o,l,i){e.name="",null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l?e.type=l:e.removeAttribute("type"),null!=t?"number"===l?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):"submit"!==l&&"reset"!==l||e.removeAttribute("value"),null!=t?wt(e,l,ft(t)):null!=n?wt(e,l,ft(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!=typeof a&&"symbol"!=typeof a),null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.name=""+ft(i):e.removeAttribute("name")}function gt(e,t,n,r,a,o,l,i){if(null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o&&(e.type=o),null!=t||null!=n){if(("submit"===o||"reset"===o)&&null==t)return void pt(e)
n=null!=n?""+ft(n):"",t=null!=t?""+ft(t):n,i||t===e.value||(e.value=t),e.defaultValue=t}r="function"!=typeof(r=null!=r?r:a)&&"symbol"!=typeof r&&!!r,e.checked=i?e.checked:!!r,e.defaultChecked=!!r,null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l&&(e.name=l),pt(e)}function wt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function St(e,t,n,r){if(e=e.options,t){t={}
for(var a=0;a<n.length;a++)t["$"+n[a]]=!0
for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0))
null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function Et(e,t,n){null==t||((t=""+ft(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ft(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function kt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(l(92))
if(A(r)){if(1<r.length)throw Error(l(93))
r=r[0]}n=r}null==n&&(n=""),t=n}n=ft(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),pt(e)}function _t(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "))
function Ot(e,t,n){var r=0===t.indexOf("--")
null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||xt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Pt(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(l(62))
if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="")
for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Ot(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Ot(e,o,t[o])}function Ct(e){if(-1===e.indexOf("-"))return!1
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
function Nt(e){return jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zt(){}var At=null
function Lt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Ft=null
function Mt(e){var t=Ye(e)
if(t&&(e=t.stateNode)){var n=e[Be]||null
e:switch(e=t.stateNode,t.type){case"input":if(bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t]
if(r!==e&&r.form===e.form){var a=r[Be]||null
if(!a)throw Error(l(90))
bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&mt(r)}break e
case"textarea":Et(e,n.value,n.defaultValue)
break e
case"select":null!=(t=n.value)&&St(e,!!n.multiple,t,!1)}}}var Dt=!1
function It(e,t,n){if(Dt)return e(t,n)
Dt=!0
try{return e(t)}finally{if(Dt=!1,(null!==Rt||null!==Ft)&&(Zc(),Rt&&(t=Rt,e=Ft,Ft=Rt=null,Mt(t),e)))for(t=0;t<e.length;t++)Mt(e[t])}}function Ut(e,t){var n=e.stateNode
if(null===n)return null
var r=n[Be]||null
if(null===r)return null
n=r[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r
break e
default:e=!1}if(e)return null
if(n&&"function"!=typeof n)throw Error(l(231,t,typeof n))
return n}var Gt=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),Bt=!1
if(Gt)try{var $t={}
Object.defineProperty($t,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(e){Bt=!1}var Ht=null,Vt=null,Wt=null
function qt(){if(Wt)return Wt
var e,t,n=Vt,r=n.length,a="value"in Ht?Ht.value:Ht.textContent,o=a.length
for(e=0;e<r&&n[e]===a[e];e++);var l=r-e
for(t=1;t<=l&&n[r-t]===a[o-t];t++);return Wt=a.slice(e,1<t?1-t:void 0)}function Qt(e){var t=e.keyCode
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Kt(){return!0}function Xt(){return!1}function Yt(e){function t(t,n,r,a,o){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l])
return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Kt:Xt,this.isPropagationStopped=Xt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Kt)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Kt)},persist:function(){},isPersistent:Kt}),t}var Jt,Zt,en,tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nn=Yt(tn),rn=p({},tn,{view:0,detail:0}),an=Yt(rn),on=p({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&"mousemove"===e.type?(Jt=e.screenX-en.screenX,Zt=e.screenY-en.screenY):Zt=Jt=0,en=e),Jt)},movementY:function(e){return"movementY"in e?e.movementY:Zt}}),ln=Yt(on),un=Yt(p({},on,{dataTransfer:0})),cn=Yt(p({},rn,{relatedTarget:0})),sn=Yt(p({},tn,{animationName:0,elapsedTime:0,pseudoElement:0})),fn=Yt(p({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),dn=Yt(p({},tn,{data:0})),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
function vn(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=hn[e])&&!!t[e]}function yn(){return vn}var bn=Yt(p({},rn,{key:function(e){if(e.key){var t=pn[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yn,charCode:function(e){return"keypress"===e.type?Qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Yt(p({},on,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),wn=Yt(p({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yn})),Sn=Yt(p({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),En=Yt(p({},on,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),kn=Yt(p({},tn,{newState:0,oldState:0})),_n=[9,13,27,32],xn=Gt&&"CompositionEvent"in window,On=null
Gt&&"documentMode"in document&&(On=document.documentMode)
var Pn=Gt&&"TextEvent"in window&&!On,Cn=Gt&&(!xn||On&&8<On&&11>=On),Tn=String.fromCharCode(32),jn=!1
function Nn(e,t){switch(e){case"keyup":return-1!==_n.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return!0
default:return!1}}function zn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1
var Ln={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!Ln[e.type]:"textarea"===t}function Fn(e,t,n,r){Rt?Ft?Ft.push(r):Ft=[r]:Rt=r,0<(t=rf(t,"onChange")).length&&(n=new nn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Dn=null
function In(e){Ks(e,0)}function Un(e){if(mt(Je(e)))return e}function Gn(e,t){if("change"===e)return t}var Bn=!1
if(Gt){var $n
if(Gt){var Hn="oninput"in document
if(!Hn){var Vn=document.createElement("div")
Vn.setAttribute("oninput","return;"),Hn="function"==typeof Vn.oninput}$n=Hn}else $n=!1
Bn=$n&&(!document.documentMode||9<document.documentMode)}function Wn(){Mn&&(Mn.detachEvent("onpropertychange",qn),Dn=Mn=null)}function qn(e){if("value"===e.propertyName&&Un(Dn)){var t=[]
Fn(t,Dn,e,Lt(e)),It(In,t)}}function Qn(e,t,n){"focusin"===e?(Wn(),Dn=n,(Mn=t).attachEvent("onpropertychange",qn)):"focusout"===e&&Wn()}function Kn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Un(Dn)}function Xn(e,t){if("click"===e)return Un(t)}function Yn(e,t){if("input"===e||"change"===e)return Un(t)}var Jn="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}
function Zn(e,t){if(Jn(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(r=0;r<n.length;r++){var a=n[r]
if(!re.call(t,a)||!Jn(e[a],t[a]))return!1}return!0}function er(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function tr(e,t){var n,r=er(e)
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e}
e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling
break e}r=r.parentNode}r=void 0}r=er(r)}}function nr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?nr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function rr(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break
t=ht((e=t.contentWindow).document)}return t}function ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var or=Gt&&"documentMode"in document&&11>=document.documentMode,lr=null,ir=null,ur=null,cr=!1
function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument
cr||null==lr||lr!==ht(r)||("selectionStart"in(r=lr)&&ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ur&&Zn(ur,r)||(ur=r,0<(r=rf(ir,"onSelect")).length&&(t=new nn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function fr(e,t){var n={}
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},pr={},mr={}
function hr(e){if(pr[e])return pr[e]
if(!dr[e])return e
var t,n=dr[e]
for(t in n)if(n.hasOwnProperty(t)&&t in mr)return pr[e]=n[t]
return e}Gt&&(mr=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition)
var vr=hr("animationend"),yr=hr("animationiteration"),br=hr("animationstart"),gr=hr("transitionrun"),wr=hr("transitionstart"),Sr=hr("transitioncancel"),Er=hr("transitionend"),kr=new Map,_r="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
function xr(e,t){kr.set(e,t),rt(t,[e])}_r.push("scrollEnd")
var Or="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)
console.error(e)},Pr=[],Cr=0,Tr=0
function jr(){for(var e=Cr,t=Tr=Cr=0;t<e;){var n=Pr[t]
Pr[t++]=null
var r=Pr[t]
Pr[t++]=null
var a=Pr[t]
Pr[t++]=null
var o=Pr[t]
if(Pr[t++]=null,null!==r&&null!==a){var l=r.pending
null===l?a.next=a:(a.next=l.next,l.next=a),r.pending=a}0!==o&&Lr(n,a,o)}}function Nr(e,t,n,r){Pr[Cr++]=e,Pr[Cr++]=t,Pr[Cr++]=n,Pr[Cr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function zr(e,t,n,r){return Nr(e,t,n,r),Rr(e)}function Ar(e,t){return Nr(e,null,null,t),Rr(e)}function Lr(e,t,n){e.lanes|=n
var r=e.alternate
null!==r&&(r.lanes|=n)
for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return
return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-we(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Rr(e){if(50<Hc)throw Hc=0,Vc=null,Error(l(185))
for(var t=e.return;null!==t;)t=(e=t).return
return 3===e.tag?e.stateNode:null}var Fr={}
function Mr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dr(e,t,n,r){return new Mr(e,t,n,r)}function Ir(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ur(e,t){var n=e.alternate
return null===n?((n=Dr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Gr(e,t){e.flags&=65011714
var n=e.alternate
return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Br(e,t,n,r,a,o){var i=0
if(r=e,"function"==typeof e)Ir(e)&&(i=1)
else if("string"==typeof e)i=function(e,t,n){if(1===n||null!=t.itemProp)return!1
switch(e){case"meta":case"title":return!0
case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break
return!0
case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break
return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e)
case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,n,H.current)?26:"html"===e||"head"===e||"body"===e?27:5
else e:switch(e){case P:return(e=Dr(31,n,t,a)).elementType=P,e.lanes=o,e
case y:return $r(n.children,a,o,t)
case b:i=8,a|=24
break
case g:return(e=Dr(12,n,t,2|a)).elementType=g,e.lanes=o,e
case k:return(e=Dr(13,n,t,a)).elementType=k,e.lanes=o,e
case _:return(e=Dr(19,n,t,a)).elementType=_,e.lanes=o,e
default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case S:i=10
break e
case w:i=9
break e
case E:i=11
break e
case x:i=14
break e
case O:i=16,r=null
break e}i=29,n=Error(l(130,null===e?"null":typeof e,"")),r=null}return(t=Dr(i,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function $r(e,t,n,r){return(e=Dr(7,e,r,t)).lanes=n,e}function Hr(e,t,n){return(e=Dr(6,e,null,t)).lanes=n,e}function Vr(e){var t=Dr(18,null,null,0)
return t.stateNode=e,t}function Wr(e,t,n){return(t=Dr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qr=new WeakMap
function Qr(e,t){if("object"==typeof e&&null!==e){var n=qr.get(e)
return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},qr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var Kr=[],Xr=0,Yr=null,Jr=0,Zr=[],ea=0,ta=null,na=1,ra=""
function aa(e,t){Kr[Xr++]=Jr,Kr[Xr++]=Yr,Yr=e,Jr=t}function oa(e,t,n){Zr[ea++]=na,Zr[ea++]=ra,Zr[ea++]=ta,ta=e
var r=na
e=ra
var a=32-we(r)-1
r&=~(1<<a),n+=1
var o=32-we(t)+a
if(30<o){var l=a-a%5
o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,na=1<<32-we(t)+a|n<<a|r,ra=o+e}else na=1<<o|n<<a|r,ra=e}function la(e){null!==e.return&&(aa(e,1),oa(e,1,0))}function ia(e){for(;e===Yr;)Yr=Kr[--Xr],Kr[Xr]=null,Jr=Kr[--Xr],Kr[Xr]=null
for(;e===ta;)ta=Zr[--ea],Zr[ea]=null,ra=Zr[--ea],Zr[ea]=null,na=Zr[--ea],Zr[ea]=null}function ua(e,t){Zr[ea++]=na,Zr[ea++]=ra,Zr[ea++]=ta,na=t.id,ra=t.overflow,ta=e}var ca=null,sa=null,fa=!1,da=null,pa=!1,ma=Error(l(519))
function ha(e){throw Sa(Qr(Error(l(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ma}function va(e){var t=e.stateNode,n=e.type,r=e.memoizedProps
switch(t[Ge]=e,t[Be]=r,n){case"dialog":Xs("cancel",t),Xs("close",t)
break
case"iframe":case"object":case"embed":Xs("load",t)
break
case"video":case"audio":for(n=0;n<qs.length;n++)Xs(qs[n],t)
break
case"source":Xs("error",t)
break
case"img":case"image":case"link":Xs("error",t),Xs("load",t)
break
case"details":Xs("toggle",t)
break
case"input":Xs("invalid",t),gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0)
break
case"select":Xs("invalid",t)
break
case"textarea":Xs("invalid",t),kt(t,r.value,r.defaultValue,r.children)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||sf(t.textContent,n)?(null!=r.popover&&(Xs("beforetoggle",t),Xs("toggle",t)),null!=r.onScroll&&Xs("scroll",t),null!=r.onScrollEnd&&Xs("scrollend",t),null!=r.onClick&&(t.onclick=zt),t=!0):t=!1,t||ha(e,!0)}function ya(e){for(ca=e.return;ca;)switch(ca.tag){case 5:case 31:case 13:return void(pa=!1)
case 27:case 3:return void(pa=!0)
default:ca=ca.return}}function ba(e){if(e!==ca)return!1
if(!fa)return ya(e),fa=!0,!1
var t,n=e.tag
if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||wf(e.type,e.memoizedProps)),t=!t),t&&sa&&ha(e),ya(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317))
sa=Ff(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317))
sa=Ff(e)}else 27===n?(n=sa,Pf(e.type)?(e=Rf,Rf=null,sa=e):sa=n):sa=ca?Lf(e.stateNode.nextSibling):null
return!0}function ga(){sa=ca=null,fa=!1}function wa(){var e=da
return null!==e&&(null===jc?jc=e:jc.push.apply(jc,e),da=null),e}function Sa(e){null===da?da=[e]:da.push(e)}var Ea=I(null),ka=null,_a=null
function xa(e,t,n){G(Ea,t._currentValue),t._currentValue=n}function Oa(e){e._currentValue=Ea.current,U(Ea)}function Pa(e,t,n){for(;null!==e;){var r=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break
e=e.return}}function Ca(e,t,n,r){var a=e.child
for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies
if(null!==o){var i=a.child
o=o.firstContext
e:for(;null!==o;){var u=o
o=a
for(var c=0;c<t.length;c++)if(u.context===t[c]){o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Pa(o.return,n,e),r||(i=null)
break e}o=u.next}}else if(18===a.tag){if(null===(i=a.return))throw Error(l(341))
i.lanes|=n,null!==(o=i.alternate)&&(o.lanes|=n),Pa(i,n,e),i=null}else i=a.child
if(null!==i)i.return=a
else for(i=a;null!==i;){if(i===e){i=null
break}if(null!==(a=i.sibling)){a.return=i.return,i=a
break}i=i.return}a=i}}function Ta(e,t,n,r){e=null
for(var a=t,o=!1;null!==a;){if(!o)if(524288&a.flags)o=!0
else if(262144&a.flags)break
if(10===a.tag){var i=a.alternate
if(null===i)throw Error(l(387))
if(null!==(i=i.memoizedProps)){var u=a.type
Jn(a.pendingProps.value,i.value)||(null!==e?e.push(u):e=[u])}}else if(a===q.current){if(null===(i=a.alternate))throw Error(l(387))
i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(fd):e=[fd])}a=a.return}null!==e&&Ca(t,e,n,r),t.flags|=262144}function ja(e){for(e=e.firstContext;null!==e;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0
e=e.next}return!1}function Na(e){ka=e,_a=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function za(e){return La(ka,e)}function Aa(e,t){return null===ka&&Na(e),La(e,t)}function La(e,t){var n=t._currentValue
if(t={context:t,memoizedValue:n,next:null},null===_a){if(null===e)throw Error(l(308))
_a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _a=_a.next=t
return n}var Ra="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}}
this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Fa=r.unstable_scheduleCallback,Ma=r.unstable_NormalPriority,Da={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0}
function Ia(){return{controller:new Ra,data:new Map,refCount:0}}function Ua(e){e.refCount--,0===e.refCount&&Fa(Ma,function(){e.controller.abort()})}var Ga=null,Ba=0,$a=0,Ha=null
function Va(){if(0===--Ba&&null!==Ga){null!==Ha&&(Ha.status="fulfilled")
var e=Ga
Ga=null,$a=0,Ha=null
for(var t=0;t<e.length;t++)(0,e[t])()}}var Wa=L.S
L.S=function(e,t){Ac=ue(),"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Ga){var n=Ga=[]
Ba=0,$a=Bs(),Ha={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ba++,t.then(Va,Va)}(0,t),null!==Wa&&Wa(e,t)}
var qa=I(null)
function Qa(){var e=qa.current
return null!==e?e:mc.pooledCache}function Ka(e,t){G(qa,null===t?qa.current:t.pool)}function Xa(){var e=Qa()
return null===e?null:{parent:Da._currentValue,pool:e}}var Ya=Error(l(460)),Ja=Error(l(474)),Za=Error(l(542)),eo={then:function(){}}
function to(e){return"fulfilled"===(e=e.status)||"rejected"===e}function no(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(zt,zt),t=n),t.status){case"fulfilled":return t.value
case"rejected":throw lo(e=t.reason),e
default:if("string"==typeof t.status)t.then(zt,zt)
else{if(null!==(e=mc)&&100<e.shellSuspendCounter)throw Error(l(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t
n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t
n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value
case"rejected":throw lo(e=t.reason),e}throw ao=t,Ya}}function ro(e){try{return(0,e._init)(e._payload)}catch(e){if(null!==e&&"object"==typeof e&&"function"==typeof e.then)throw ao=e,Ya
throw e}}var ao=null
function oo(){if(null===ao)throw Error(l(459))
var e=ao
return ao=null,e}function lo(e){if(e===Ya||e===Za)throw Error(l(483))}var io=null,uo=0
function co(e){var t=uo
return uo+=1,null===io&&(io=[]),no(io,e,t)}function so(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function fo(e,t){if(t.$$typeof===m)throw Error(l(525))
throw e=Object.prototype.toString.call(t),Error(l(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function po(e){function t(t,n){if(e){var r=t.deletions
null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling
return t}function a(e,t){return(e=Ur(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=Hr(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type
return o===y?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===O&&ro(o)===t.type)?(so(t=a(t,n.props),n),t.return=e,t):(so(t=Br(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?((t=$r(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=Hr(""+t,e.mode,n)).return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case h:return so(n=Br(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n
case v:return(t=Wr(t,e.mode,n)).return=e,t
case O:return d(e,t=ro(t),n)}if(A(t)||j(t))return(t=$r(t,e.mode,n,null)).return=e,t
if("function"==typeof t.then)return d(e,co(t),n)
if(t.$$typeof===S)return d(e,Aa(e,t),n)
fo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null
if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==a?null:u(e,t,""+n,r)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===a?c(e,t,n,r):null
case v:return n.key===a?s(e,t,n,r):null
case O:return p(e,t,n=ro(n),r)}if(A(n)||j(n))return null!==a?null:f(e,t,n,r,null)
if("function"==typeof n.then)return p(e,t,co(n),r)
if(n.$$typeof===S)return p(e,t,Aa(e,n),r)
fo(e,n)}return null}function m(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return u(t,e=e.get(n)||null,""+r,a)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case v:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case O:return m(e,t,n,r=ro(r),a)}if(A(r)||j(r))return f(t,e=e.get(n)||null,r,a,null)
if("function"==typeof r.then)return m(e,t,n,co(r),a)
if(r.$$typeof===S)return m(e,t,n,Aa(t,r),a)
fo(t,r)}return null}function b(u,c,s,f){if("object"==typeof s&&null!==s&&s.type===y&&null===s.key&&(s=s.props.children),"object"==typeof s&&null!==s){switch(s.$$typeof){case h:e:{for(var g=s.key;null!==c;){if(c.key===g){if((g=s.type)===y){if(7===c.tag){n(u,c.sibling),(f=a(c,s.props.children)).return=u,u=f
break e}}else if(c.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===O&&ro(g)===c.type){n(u,c.sibling),so(f=a(c,s.props),s),f.return=u,u=f
break e}n(u,c)
break}t(u,c),c=c.sibling}s.type===y?((f=$r(s.props.children,u.mode,f,s.key)).return=u,u=f):(so(f=Br(s.type,s.key,s.props,null,u.mode,f),s),f.return=u,u=f)}return i(u)
case v:e:{for(g=s.key;null!==c;){if(c.key===g){if(4===c.tag&&c.stateNode.containerInfo===s.containerInfo&&c.stateNode.implementation===s.implementation){n(u,c.sibling),(f=a(c,s.children||[])).return=u,u=f
break e}n(u,c)
break}t(u,c),c=c.sibling}(f=Wr(s,u.mode,f)).return=u,u=f}return i(u)
case O:return b(u,c,s=ro(s),f)}if(A(s))return function(a,l,i,u){for(var c=null,s=null,f=l,h=l=0,v=null;null!==f&&h<i.length;h++){f.index>h?(v=f,f=null):v=f.sibling
var y=p(a,f,i[h],u)
if(null===y){null===f&&(f=v)
break}e&&f&&null===y.alternate&&t(a,f),l=o(y,l,h),null===s?c=y:s.sibling=y,s=y,f=v}if(h===i.length)return n(a,f),fa&&aa(a,h),c
if(null===f){for(;h<i.length;h++)null!==(f=d(a,i[h],u))&&(l=o(f,l,h),null===s?c=f:s.sibling=f,s=f)
return fa&&aa(a,h),c}for(f=r(f);h<i.length;h++)null!==(v=m(f,a,h,i[h],u))&&(e&&null!==v.alternate&&f.delete(null===v.key?h:v.key),l=o(v,l,h),null===s?c=v:s.sibling=v,s=v)
return e&&f.forEach(function(e){return t(a,e)}),fa&&aa(a,h),c}(u,c,s,f)
if(j(s)){if("function"!=typeof(g=j(s)))throw Error(l(150))
return function(a,i,u,c){if(null==u)throw Error(l(151))
for(var s=null,f=null,h=i,v=i=0,y=null,b=u.next();null!==h&&!b.done;v++,b=u.next()){h.index>v?(y=h,h=null):y=h.sibling
var g=p(a,h,b.value,c)
if(null===g){null===h&&(h=y)
break}e&&h&&null===g.alternate&&t(a,h),i=o(g,i,v),null===f?s=g:f.sibling=g,f=g,h=y}if(b.done)return n(a,h),fa&&aa(a,v),s
if(null===h){for(;!b.done;v++,b=u.next())null!==(b=d(a,b.value,c))&&(i=o(b,i,v),null===f?s=b:f.sibling=b,f=b)
return fa&&aa(a,v),s}for(h=r(h);!b.done;v++,b=u.next())null!==(b=m(h,a,v,b.value,c))&&(e&&null!==b.alternate&&h.delete(null===b.key?v:b.key),i=o(b,i,v),null===f?s=b:f.sibling=b,f=b)
return e&&h.forEach(function(e){return t(a,e)}),fa&&aa(a,v),s}(u,c,s=g.call(s),f)}if("function"==typeof s.then)return b(u,c,co(s),f)
if(s.$$typeof===S)return b(u,c,Aa(u,s),f)
fo(u,s)}return"string"==typeof s&&""!==s||"number"==typeof s||"bigint"==typeof s?(s=""+s,null!==c&&6===c.tag?(n(u,c.sibling),(f=a(c,s)).return=u,u=f):(n(u,c),(f=Hr(s,u.mode,f)).return=u,u=f),i(u)):n(u,c)}return function(e,t,n,r){try{uo=0
var a=b(e,t,n,r)
return io=null,a}catch(t){if(t===Ya||t===Za)throw t
var o=Dr(29,t,null,e.mode)
return o.lanes=r,o.return=e,o}}}var mo=po(!0),ho=po(!1),vo=!1
function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function go(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wo(e,t,n){var r=e.updateQueue
if(null===r)return null
if(r=r.shared,2&pc){var a=r.pending
return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Rr(e),Lr(e,null,n),t}return Nr(e,r,t,n),Rr(e)}function So(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Le(e,n)}}function Eo(e,t){var n=e.updateQueue,r=e.alternate
if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null
if(null!==(n=n.firstBaseUpdate)){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null}
null===o?a=o=l:o=o.next=l,n=n.next}while(null!==n)
null===o?a=o=t:o=o.next=t}else a=o=t
return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ko=!1
function _o(){if(ko){if(null!==Ha)throw Ha}}function xo(e,t,n,r){ko=!1
var a=e.updateQueue
vo=!1
var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending
if(null!==i){a.shared.pending=null
var u=i,c=u.next
u.next=null,null===l?o=c:l.next=c,l=u
var s=e.alternate
null!==s&&((i=(s=s.updateQueue).lastBaseUpdate)!==l&&(null===i?s.firstBaseUpdate=c:i.next=c,s.lastBaseUpdate=u))}if(null!==o){var f=a.baseState
for(l=0,s=c=u=null,i=o;;){var d=-536870913&i.lane,m=d!==i.lane
if(m?(vc&d)===d:(r&d)===d){0!==d&&d===$a&&(ko=!0),null!==s&&(s=s.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null})
e:{var h=e,v=i
d=t
var y=n
switch(v.tag){case 1:if("function"==typeof(h=v.payload)){f=h.call(y,f,d)
break e}f=h
break e
case 3:h.flags=-65537&h.flags|128
case 0:if(null==(d="function"==typeof(h=v.payload)?h.call(y,f,d):h))break e
f=p({},f,d)
break e
case 2:vo=!0}}null!==(d=i.callback)&&(e.flags|=64,m&&(e.flags|=8192),null===(m=a.callbacks)?a.callbacks=[d]:m.push(d))}else m={lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===s?(c=s=m,u=f):s=s.next=m,l|=d
if(null===(i=i.next)){if(null===(i=a.shared.pending))break
i=(m=i).next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}null===s&&(u=f),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=s,null===o&&(a.shared.lanes=0),_c|=l,e.lanes=l,e.memoizedState=f}}function Oo(e,t){if("function"!=typeof e)throw Error(l(191,e))
e.call(t)}function Po(e,t){var n=e.callbacks
if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Oo(n[e],t)}var Co=I(null),To=I(0)
function jo(e,t){G(To,e=Ec),G(Co,t),Ec=e|t.baseLanes}function No(){G(To,Ec),G(Co,Co.current)}function zo(){Ec=To.current,U(Co),U(To)}var Ao=I(null),Lo=null
function Ro(e){var t=e.alternate
G(Uo,1&Uo.current),G(Ao,e),null===Lo&&(null===t||null!==Co.current||null!==t.memoizedState)&&(Lo=e)}function Fo(e){G(Uo,Uo.current),G(Ao,e),null===Lo&&(Lo=e)}function Mo(e){22===e.tag?(G(Uo,Uo.current),G(Ao,e),null===Lo&&(Lo=e)):Do()}function Do(){G(Uo,Uo.current),G(Ao,Ao.current)}function Io(e){U(Ao),Lo===e&&(Lo=null),U(Uo)}var Uo=I(0)
function Go(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState
if(null!==n&&(null===(n=n.dehydrated)||zf(n)||Af(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child
continue}}else if(128&t.flags)return t
if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bo=0,$o=null,Ho=null,Vo=null,Wo=!1,qo=!1,Qo=!1,Ko=0,Xo=0,Yo=null,Jo=0
function Zo(){throw Error(l(321))}function el(e,t){if(null===t)return!1
for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1
return!0}function tl(e,t,n,r,a,o){return Bo=o,$o=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=null===e||null===e.memoizedState?vi:yi,Qo=!1,o=n(r,a),Qo=!1,qo&&(o=rl(t,n,r,a)),nl(e),o}function nl(e){L.H=hi
var t=null!==Ho&&null!==Ho.next
if(Bo=0,Vo=Ho=$o=null,Wo=!1,Xo=0,Yo=null,t)throw Error(l(300))
null===e||Ai||null!==(e=e.dependencies)&&ja(e)&&(Ai=!0)}function rl(e,t,n,r){$o=e
var a=0
do{if(qo&&(Yo=null),Xo=0,qo=!1,25<=a)throw Error(l(301))
if(a+=1,Vo=Ho=null,null!=e.updateQueue){var o=e.updateQueue
o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}L.H=bi,o=t(n,r)}while(qo)
return o}function al(){var e=L.H,t=e.useState()[0]
return t="function"==typeof t.then?sl(t):t,e=e.useState()[0],(null!==Ho?Ho.memoizedState:null)!==e&&($o.flags|=1024),t}function ol(){var e=0!==Ko
return Ko=0,e}function ll(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function il(e){if(Wo){for(e=e.memoizedState;null!==e;){var t=e.queue
null!==t&&(t.pending=null),e=e.next}Wo=!1}Bo=0,Vo=Ho=$o=null,qo=!1,Xo=Ko=0,Yo=null}function ul(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===Vo?$o.memoizedState=Vo=e:Vo=Vo.next=e,Vo}function cl(){if(null===Ho){var e=$o.alternate
e=null!==e?e.memoizedState:null}else e=Ho.next
var t=null===Vo?$o.memoizedState:Vo.next
if(null!==t)Vo=t,Ho=e
else{if(null===e){if(null===$o.alternate)throw Error(l(467))
throw Error(l(310))}e={memoizedState:(Ho=e).memoizedState,baseState:Ho.baseState,baseQueue:Ho.baseQueue,queue:Ho.queue,next:null},null===Vo?$o.memoizedState=Vo=e:Vo=Vo.next=e}return Vo}function sl(e){var t=Xo
return Xo+=1,null===Yo&&(Yo=[]),e=no(Yo,e,t),t=$o,null===(null===Vo?t.memoizedState:Vo.next)&&(t=t.alternate,L.H=null===t||null===t.memoizedState?vi:yi),e}function fl(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return sl(e)
if(e.$$typeof===S)return za(e)}throw Error(l(438,String(e)))}function dl(e){var t=null,n=$o.updateQueue
if(null!==n&&(t=n.memoCache),null==t){var r=$o.alternate
null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},$o.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=C
return t.index++,n}function pl(e,t){return"function"==typeof t?t(e):t}function ml(e){return hl(cl(),Ho,e)}function hl(e,t,n){var r=e.queue
if(null===r)throw Error(l(311))
r.lastRenderedReducer=n
var a=e.baseQueue,o=r.pending
if(null!==o){if(null!==a){var i=a.next
a.next=o.next,o.next=i}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o
else{var u=i=null,c=null,s=t=a.next,f=!1
do{var d=-536870913&s.lane
if(d!==s.lane?(vc&d)===d:(Bo&d)===d){var p=s.revertLane
if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),d===$a&&(f=!0)
else{if((Bo&p)===p){s=s.next,p===$a&&(f=!0)
continue}d={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},null===c?(u=c=d,i=o):c=c.next=d,$o.lanes|=p,_c|=p}d=s.action,Qo&&n(o,d),o=s.hasEagerState?s.eagerState:n(o,d)}else p={lane:d,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},null===c?(u=c=p,i=o):c=c.next=p,$o.lanes|=d,_c|=d
s=s.next}while(null!==s&&s!==t)
if(null===c?i=o:c.next=u,!Jn(o,e.memoizedState)&&(Ai=!0,f&&null!==(n=Ha)))throw n
e.memoizedState=o,e.baseState=i,e.baseQueue=c,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function vl(e){var t=cl(),n=t.queue
if(null===n)throw Error(l(311))
n.lastRenderedReducer=e
var r=n.dispatch,a=n.pending,o=t.memoizedState
if(null!==a){n.pending=null
var i=a=a.next
do{o=e(o,i.action),i=i.next}while(i!==a)
Jn(o,t.memoizedState)||(Ai=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function yl(e,t,n){var r=$o,a=cl(),o=fa
if(o){if(void 0===n)throw Error(l(407))
n=n()}else n=t()
var i=!Jn((Ho||a).memoizedState,n)
if(i&&(a.memoizedState=n,Ai=!0),a=a.queue,Bl(wl.bind(null,r,a,e),[e]),a.getSnapshot!==t||i||null!==Vo&&1&Vo.memoizedState.tag){if(r.flags|=2048,Ml(9,{destroy:void 0},gl.bind(null,r,a,n,t),null),null===mc)throw Error(l(349))
o||127&Bo||bl(r,t,n)}return n}function bl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=$o.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},$o.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function gl(e,t,n,r){t.value=n,t.getSnapshot=r,Sl(t)&&El(e)}function wl(e,t,n){return n(function(){Sl(t)&&El(e)})}function Sl(e){var t=e.getSnapshot
e=e.value
try{var n=t()
return!Jn(e,n)}catch(e){return!0}}function El(e){var t=Ar(e,2)
null!==t&&Qc(t,e,2)}function kl(e){var t=ul()
if("function"==typeof e){var n=e
if(e=n(),Qo){ge(!0)
try{n()}finally{ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:e},t}function _l(e,t,n,r){return e.baseState=n,hl(e,Ho,"function"==typeof r?r:pl)}function xl(e,t,n,r,a){if(di(e))throw Error(l(485))
if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}}
null!==L.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,Ol(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ol(e,t){var n=t.action,r=t.payload,a=e.state
if(t.isTransition){var o=L.T,l={}
L.T=l
try{var i=n(a,r),u=L.S
null!==u&&u(l,i),Pl(e,t,i)}catch(n){Tl(e,t,n)}finally{null!==o&&null!==l.types&&(o.types=l.types),L.T=o}}else try{Pl(e,t,o=n(a,r))}catch(n){Tl(e,t,n)}}function Pl(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){Cl(e,t,n)},function(n){return Tl(e,t,n)}):Cl(e,t,n)}function Cl(e,t,n){t.status="fulfilled",t.value=n,jl(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Ol(e,n)))}function Tl(e,t,n){var r=e.pending
if(e.pending=null,null!==r){r=r.next
do{t.status="rejected",t.reason=n,jl(t),t=t.next}while(t!==r)}e.action=null}function jl(e){e=e.listeners
for(var t=0;t<e.length;t++)(0,e[t])()}function Nl(e,t){return t}function zl(e,t){if(fa){var n=mc.formState
if(null!==n){e:{var r=$o
if(fa){if(sa){t:{for(var a=sa,o=pa;8!==a.nodeType;){if(!o){a=null
break t}if(null===(a=Lf(a.nextSibling))){a=null
break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){sa=Lf(a.nextSibling),r="F!"===a.data
break e}}ha(r)}r=!1}r&&(t=n[0])}}return(n=ul()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nl,lastRenderedState:t},n.queue=r,n=ci.bind(null,$o,r),r.dispatch=n,r=kl(!1),o=fi.bind(null,$o,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=ul()).queue=a,n=xl.bind(null,$o,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Al(e){return Ll(cl(),Ho,e)}function Ll(e,t,n){if(t=hl(e,t,Nl)[0],e=ml(pl)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var r=sl(t)}catch(e){if(e===Ya)throw Za
throw e}else r=t
var a=(t=cl()).queue,o=a.dispatch
return n!==t.memoizedState&&($o.flags|=2048,Ml(9,{destroy:void 0},Rl.bind(null,a,n),null)),[r,o,e]}function Rl(e,t){e.action=t}function Fl(e){var t=cl(),n=Ho
if(null!==n)return Ll(t,n,e)
cl(),t=t.memoizedState
var r=(n=cl()).queue.dispatch
return n.memoizedState=e,[t,r,!1]}function Ml(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=$o.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},$o.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Dl(){return cl().memoizedState}function Il(e,t,n,r){var a=ul()
$o.flags|=e,a.memoizedState=Ml(1|t,{destroy:void 0},n,void 0===r?null:r)}function Ul(e,t,n,r){var a=cl()
r=void 0===r?null:r
var o=a.memoizedState.inst
null!==Ho&&null!==r&&el(r,Ho.memoizedState.deps)?a.memoizedState=Ml(t,o,n,r):($o.flags|=e,a.memoizedState=Ml(1|t,o,n,r))}function Gl(e,t){Il(8390656,8,e,t)}function Bl(e,t){Ul(2048,8,e,t)}function $l(e){var t=cl().memoizedState
return function(e){$o.flags|=4
var t=$o.updateQueue
if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},$o.updateQueue=t,t.events=[e]
else{var n=t.events
null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(2&pc)throw Error(l(440))
return t.impl.apply(void 0,arguments)}}function Hl(e,t){return Ul(4,2,e,t)}function Vl(e,t){return Ul(4,4,e,t)}function Wl(e,t){if("function"==typeof t){e=e()
var n=t(e)
return function(){"function"==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function ql(e,t,n){n=null!=n?n.concat([e]):null,Ul(4,4,Wl.bind(null,t,e),n)}function Ql(){}function Kl(e,t){var n=cl()
t=void 0===t?null:t
var r=n.memoizedState
return null!==t&&el(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xl(e,t){var n=cl()
t=void 0===t?null:t
var r=n.memoizedState
if(null!==t&&el(t,r[1]))return r[0]
if(r=e(),Qo){ge(!0)
try{e()}finally{ge(!1)}}return n.memoizedState=[r,t],r}function Yl(e,t,n){return void 0===n||1073741824&Bo&&!(261930&vc)?e.memoizedState=t:(e.memoizedState=n,e=qc(),$o.lanes|=e,_c|=e,n)}function Jl(e,t,n,r){return Jn(n,t)?n:null!==Co.current?(e=Yl(e,n,r),Jn(e,t)||(Ai=!0),e):42&Bo&&(!(1073741824&Bo)||261930&vc)?(e=qc(),$o.lanes|=e,_c|=e,t):(Ai=!0,e.memoizedState=n)}function Zl(e,t,n,r,a){var o=R.p
R.p=0!==o&&8>o?o:8
var l,i,u,c=L.T,s={}
L.T=s,fi(e,!1,t,n)
try{var f=a(),d=L.S
if(null!==d&&d(s,f),null!==f&&"object"==typeof f&&"function"==typeof f.then)si(e,t,(l=r,i=[],u={status:"pending",value:null,reason:null,then:function(e){i.push(e)}},f.then(function(){u.status="fulfilled",u.value=l
for(var e=0;e<i.length;e++)(0,i[e])(l)},function(e){for(u.status="rejected",u.reason=e,e=0;e<i.length;e++)(0,i[e])(void 0)}),u),Wc())
else si(e,t,r,Wc())}catch(n){si(e,t,{then:function(){},status:"rejected",reason:n},Wc())}finally{R.p=o,null!==c&&null!==s.types&&(c.types=s.types),L.T=c}}function ei(){}function ti(e,t,n,r){if(5!==e.tag)throw Error(l(476))
var a=ni(e).queue
Zl(e,a,t,F,null===n?ei:function(){return ri(e),n(r)})}function ni(e){var t=e.memoizedState
if(null!==t)return t
var n={}
return(t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:F},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function ri(e){var t=ni(e)
null===t.next&&(t=e.alternate.memoizedState),si(e,t.next.queue,{},Wc())}function ai(){return za(fd)}function oi(){return cl().memoizedState}function li(){return cl().memoizedState}function ii(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Wc(),r=wo(t,e=go(n),n)
return null!==r&&(Qc(r,t,n),So(r,t,n)),t={cache:Ia()},void(e.payload=t)}t=t.return}}function ui(e,t,n){var r=Wc()
n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},di(e)?pi(t,n):null!==(n=zr(e,t,n,r))&&(Qc(n,e,r),mi(n,t,r))}function ci(e,t,n){si(e,t,n,Wc())}function si(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null}
if(di(e))pi(t,a)
else{var o=e.alternate
if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=o(l,n)
if(a.hasEagerState=!0,a.eagerState=i,Jn(i,l))return Nr(e,t,a,0),null===mc&&jr(),!1}catch(e){}if(null!==(n=zr(e,t,a,r)))return Qc(n,e,r),mi(n,t,r),!0}return!1}function fi(e,t,n,r){if(r={lane:2,revertLane:Bs(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},di(e)){if(t)throw Error(l(479))}else null!==(t=zr(e,n,r,2))&&Qc(t,e,2)}function di(e){var t=e.alternate
return e===$o||null!==t&&t===$o}function pi(e,t){qo=Wo=!0
var n=e.pending
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mi(e,t,n){if(4194048&n){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,Le(e,n)}}var hi={readContext:za,use:fl,useCallback:Zo,useContext:Zo,useEffect:Zo,useImperativeHandle:Zo,useLayoutEffect:Zo,useInsertionEffect:Zo,useMemo:Zo,useReducer:Zo,useRef:Zo,useState:Zo,useDebugValue:Zo,useDeferredValue:Zo,useTransition:Zo,useSyncExternalStore:Zo,useId:Zo,useHostTransitionStatus:Zo,useFormState:Zo,useActionState:Zo,useOptimistic:Zo,useMemoCache:Zo,useCacheRefresh:Zo}
hi.useEffectEvent=Zo
var vi={readContext:za,use:fl,useCallback:function(e,t){return ul().memoizedState=[e,void 0===t?null:t],e},useContext:za,useEffect:Gl,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,Il(4194308,4,Wl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){Il(4,2,e,t)},useMemo:function(e,t){var n=ul()
t=void 0===t?null:t
var r=e()
if(Qo){ge(!0)
try{e()}finally{ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ul()
if(void 0!==n){var a=n(t)
if(Qo){ge(!0)
try{n(t)}finally{ge(!1)}}}else a=t
return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=ui.bind(null,$o,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ul().memoizedState=e},useState:function(e){var t=(e=kl(e)).queue,n=ci.bind(null,$o,t)
return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ql,useDeferredValue:function(e,t){return Yl(ul(),e,t)},useTransition:function(){var e=kl(!1)
return e=Zl.bind(null,$o,e.queue,!0,!1),ul().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=$o,a=ul()
if(fa){if(void 0===n)throw Error(l(407))
n=n()}else{if(n=t(),null===mc)throw Error(l(349))
127&vc||bl(r,t,n)}a.memoizedState=n
var o={value:n,getSnapshot:t}
return a.queue=o,Gl(wl.bind(null,r,o,e),[e]),r.flags|=2048,Ml(9,{destroy:void 0},gl.bind(null,r,o,n,t),null),n},useId:function(){var e=ul(),t=mc.identifierPrefix
if(fa){var n=ra
t="_"+t+"R_"+(n=(na&~(1<<32-we(na)-1)).toString(32)+n),0<(n=Ko++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Jo++).toString(32)+"_"
return e.memoizedState=t},useHostTransitionStatus:ai,useFormState:zl,useActionState:zl,useOptimistic:function(e){var t=ul()
t.memoizedState=t.baseState=e
var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null}
return t.queue=n,t=fi.bind(null,$o,!0,n),n.dispatch=t,[e,t]},useMemoCache:dl,useCacheRefresh:function(){return ul().memoizedState=ii.bind(null,$o)},useEffectEvent:function(e){var t=ul(),n={impl:e}
return t.memoizedState=n,function(){if(2&pc)throw Error(l(440))
return n.impl.apply(void 0,arguments)}}},yi={readContext:za,use:fl,useCallback:Kl,useContext:za,useEffect:Bl,useImperativeHandle:ql,useInsertionEffect:Hl,useLayoutEffect:Vl,useMemo:Xl,useReducer:ml,useRef:Dl,useState:function(){return ml(pl)},useDebugValue:Ql,useDeferredValue:function(e,t){return Jl(cl(),Ho.memoizedState,e,t)},useTransition:function(){var e=ml(pl)[0],t=cl().memoizedState
return["boolean"==typeof e?e:sl(e),t]},useSyncExternalStore:yl,useId:oi,useHostTransitionStatus:ai,useFormState:Al,useActionState:Al,useOptimistic:function(e,t){return _l(cl(),0,e,t)},useMemoCache:dl,useCacheRefresh:li}
yi.useEffectEvent=$l
var bi={readContext:za,use:fl,useCallback:Kl,useContext:za,useEffect:Bl,useImperativeHandle:ql,useInsertionEffect:Hl,useLayoutEffect:Vl,useMemo:Xl,useReducer:vl,useRef:Dl,useState:function(){return vl(pl)},useDebugValue:Ql,useDeferredValue:function(e,t){var n=cl()
return null===Ho?Yl(n,e,t):Jl(n,Ho.memoizedState,e,t)},useTransition:function(){var e=vl(pl)[0],t=cl().memoizedState
return["boolean"==typeof e?e:sl(e),t]},useSyncExternalStore:yl,useId:oi,useHostTransitionStatus:ai,useFormState:Fl,useActionState:Fl,useOptimistic:function(e,t){var n=cl()
return null!==Ho?_l(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:dl,useCacheRefresh:li}
function gi(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}bi.useEffectEvent=$l
var wi={enqueueSetState:function(e,t,n){e=e._reactInternals
var r=Wc(),a=go(r)
a.payload=t,null!=n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Qc(t,e,r),So(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals
var r=Wc(),a=go(r)
a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=wo(e,a,r))&&(Qc(t,e,r),So(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals
var n=Wc(),r=go(n)
r.tag=2,null!=t&&(r.callback=t),null!==(t=wo(e,r,n))&&(Qc(t,e,n),So(t,e,n))}}
function Si(e,t,n,r,a,o,l){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!t.prototype||!t.prototype.isPureReactComponent||(!Zn(n,r)||!Zn(a,o))}function Ei(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function ki(e,t){var n=t
if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r])
if(e=e.defaultProps)for(var a in n===t&&(n=p({},n)),e)void 0===n[a]&&(n[a]=e[a])
return n}function _i(e){Or(e)}function xi(e){console.error(e)}function Oi(e){Or(e)}function Pi(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ci(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ti(e,t,n){return(n=go(n)).tag=3,n.payload={element:null},n.callback=function(){Pi(e,t)},n}function ji(e){return(e=go(e)).tag=3,e}function Ni(e,t,n,r){var a=n.type.getDerivedStateFromError
if("function"==typeof a){var o=r.value
e.payload=function(){return a(o)},e.callback=function(){Ci(t,n,r)}}var l=n.stateNode
null!==l&&"function"==typeof l.componentDidCatch&&(e.callback=function(){Ci(t,n,r),"function"!=typeof a&&(null===Fc?Fc=new Set([this]):Fc.add(this))
var e=r.stack
this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var zi=Error(l(461)),Ai=!1
function Li(e,t,n,r){t.child=null===e?ho(t,null,n,r):mo(t,e.child,n,r)}function Ri(e,t,n,r,a){n=n.render
var o=t.ref
if("ref"in r){var l={}
for(var i in r)"ref"!==i&&(l[i]=r[i])}else l=r
return Na(t),r=tl(e,t,n,l,o,a),i=ol(),null===e||Ai?(fa&&i&&la(t),t.flags|=1,Li(e,t,r,a),t.child):(ll(e,t,a),au(e,t,a))}function Fi(e,t,n,r,a){if(null===e){var o=n.type
return"function"!=typeof o||Ir(o)||void 0!==o.defaultProps||null!==n.compare?((e=Br(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Mi(e,t,o,r,a))}if(o=e.child,!ou(e,a)){var l=o.memoizedProps
if((n=null!==(n=n.compare)?n:Zn)(l,r)&&e.ref===t.ref)return au(e,t,a)}return t.flags|=1,(e=Ur(o,r)).ref=t.ref,e.return=t,t.child=e}function Mi(e,t,n,r,a){if(null!==e){var o=e.memoizedProps
if(Zn(o,r)&&e.ref===t.ref){if(Ai=!1,t.pendingProps=r=o,!ou(e,a))return t.lanes=e.lanes,au(e,t,a)
131072&e.flags&&(Ai=!0)}}return Hi(e,t,n,r,a)}function Di(e,t,n,r){var a=r.children,o=null!==e?e.memoizedState:null
if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(128&t.flags){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling
r=a&~o}else r=0,t.child=null
return Ui(e,t,o,n,r)}if(!(536870912&n))return r=t.lanes=536870912,Ui(e,t,null!==o?o.baseLanes|n:n,n,r)
t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ka(0,null!==o?o.cachePool:null),null!==o?jo(t,o):No(),Mo(t)}else null!==o?(Ka(0,o.cachePool),jo(t,o),Do(),t.memoizedState=null):(null!==e&&Ka(0,null),No(),Do())
return Li(e,t,a,n),t.child}function Ii(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ui(e,t,n,r,a){var o=Qa()
return o=null===o?null:{parent:Da._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Ka(0,null),No(),Mo(t),null!==e&&Ta(e,t,r,!0),t.childLanes=a,null}function Gi(e,t){return(t=Zi({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Bi(e,t,n){return mo(t,e.child,null,n),(e=Gi(t,t.pendingProps)).flags|=2,Io(t),t.memoizedState=null,e}function $i(e,t){var n=t.ref
if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816)
else{if("function"!=typeof n&&"object"!=typeof n)throw Error(l(284))
null!==e&&e.ref===n||(t.flags|=4194816)}}function Hi(e,t,n,r,a){return Na(t),n=tl(e,t,n,r,void 0,a),r=ol(),null===e||Ai?(fa&&r&&la(t),t.flags|=1,Li(e,t,n,a),t.child):(ll(e,t,a),au(e,t,a))}function Vi(e,t,n,r,a,o){return Na(t),t.updateQueue=null,n=rl(t,r,n,a),nl(e),r=ol(),null===e||Ai?(fa&&r&&la(t),t.flags|=1,Li(e,t,n,o),t.child):(ll(e,t,o),au(e,t,o))}function Wi(e,t,n,r,a){if(Na(t),null===t.stateNode){var o=Fr,l=n.contextType
"object"==typeof l&&null!==l&&(o=za(l)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=wi,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},yo(t),l=n.contextType,o.context="object"==typeof l&&null!==l?za(l):Fr,o.state=t.memoizedState,"function"==typeof(l=n.getDerivedStateFromProps)&&(gi(t,n,l,r),o.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(l=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),l!==o.state&&wi.enqueueReplaceState(o,o.state,null),xo(t,r,o,a),_o(),o.state=t.memoizedState),"function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode
var i=t.memoizedProps,u=ki(n,i)
o.props=u
var c=o.context,s=n.contextType
l=Fr,"object"==typeof s&&null!==s&&(l=za(s))
var f=n.getDerivedStateFromProps
s="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate,i=t.pendingProps!==i,s||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(i||c!==l)&&Ei(t,o,r,l),vo=!1
var d=t.memoizedState
o.state=d,xo(t,r,o,a),_o(),c=t.memoizedState,i||d!==c||vo?("function"==typeof f&&(gi(t,n,f,r),c=t.memoizedState),(u=vo||Si(t,n,u,r,d,c,l))?(s||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=u):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bo(e,t),s=ki(n,l=t.memoizedProps),o.props=s,f=t.pendingProps,d=o.context,c=n.contextType,u=Fr,"object"==typeof c&&null!==c&&(u=za(c)),(c="function"==typeof(i=n.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(l!==f||d!==u)&&Ei(t,o,r,u),vo=!1,d=t.memoizedState,o.state=d,xo(t,r,o,a),_o()
var p=t.memoizedState
l!==f||d!==p||vo||null!==e&&null!==e.dependencies&&ja(e.dependencies)?("function"==typeof i&&(gi(t,n,i,r),p=t.memoizedState),(s=vo||Si(t,n,s,r,d,p,u)||null!==e&&null!==e.dependencies&&ja(e.dependencies))?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,u),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,u)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=u,r=s):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,$i(e,t),r=!!(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!=typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=mo(t,e.child,null,a),t.child=mo(t,null,n,a)):Li(e,t,n,a),t.memoizedState=o.state,e=t.child):e=au(e,t,a),e}function qi(e,t,n,r){return ga(),t.flags|=256,Li(e,t,n,r),t.child}var Qi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null}
function Ki(e){return{baseLanes:e,cachePool:Xa()}}function Xi(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Pc),e}function Yi(e,t,n){var r,a=t.pendingProps,o=!1,i=!!(128&t.flags)
if((r=i)||(r=(null===e||null!==e.memoizedState)&&!!(2&Uo.current)),r&&(o=!0,t.flags&=-129),r=!!(32&t.flags),t.flags&=-33,null===e){if(fa){if(o?Ro(t):Do(),(e=sa)?null!==(e=null!==(e=Nf(e,pa))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ta?{id:na,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},(n=Vr(e)).return=t,t.child=n,ca=t,sa=null):e=null,null===e)throw ha(t)
return Af(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children
return a=a.fallback,o?(Do(),u=Zi({mode:"hidden",children:u},o=t.mode),a=$r(a,o,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,(a=t.child).memoizedState=Ki(n),a.childLanes=Xi(e,r,n),t.memoizedState=Qi,Ii(null,a)):(Ro(t),Ji(t,u))}var c=e.memoizedState
if(null!==c&&null!==(u=c.dehydrated)){if(i)256&t.flags?(Ro(t),t.flags&=-257,t=eu(e,t,n)):null!==t.memoizedState?(Do(),t.child=e.child,t.flags|=128,t=null):(Do(),u=a.fallback,o=t.mode,a=Zi({mode:"visible",children:a.children},o),(u=$r(u,o,n,null)).flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,mo(t,e.child,null,n),(a=t.child).memoizedState=Ki(n),a.childLanes=Xi(e,r,n),t.memoizedState=Qi,t=Ii(null,a))
else if(Ro(t),Af(u)){if(r=u.nextSibling&&u.nextSibling.dataset)var s=r.dgst
r=s,(a=Error(l(419))).stack="",a.digest=r,Sa({value:a,source:null,stack:null}),t=eu(e,t,n)}else if(Ai||Ta(e,t,n,!1),r=0!==(n&e.childLanes),Ai||r){if(null!==(r=mc)&&(0!==(a=Re(r,n))&&a!==c.retryLane))throw c.retryLane=a,Ar(e,a),Qc(r,e,a),zi
zf(u)||ls(),t=eu(e,t,n)}else zf(u)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,sa=Lf(u.nextSibling),ca=t,fa=!0,da=null,pa=!1,null!==e&&ua(t,e),(t=Ji(t,a.children)).flags|=4096)
return t}return o?(Do(),u=a.fallback,o=t.mode,s=(c=e.child).sibling,(a=Ur(c,{mode:"hidden",children:a.children})).subtreeFlags=65011712&c.subtreeFlags,null!==s?u=Ur(s,u):(u=$r(u,o,n,null)).flags|=2,u.return=t,a.return=t,a.sibling=u,t.child=a,Ii(null,a),a=t.child,null===(u=e.child.memoizedState)?u=Ki(n):(null!==(o=u.cachePool)?(c=Da._currentValue,o=o.parent!==c?{parent:c,pool:c}:o):o=Xa(),u={baseLanes:u.baseLanes|n,cachePool:o}),a.memoizedState=u,a.childLanes=Xi(e,r,n),t.memoizedState=Qi,Ii(e.child,a)):(Ro(t),e=(n=e.child).sibling,(n=Ur(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ji(e,t){return(t=Zi({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Zi(e,t){return(e=Dr(22,e,null,t)).lanes=0,e}function eu(e,t,n){return mo(t,e.child,null,n),(e=Ji(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function tu(e,t,n){e.lanes|=t
var r=e.alternate
null!==r&&(r.lanes|=t),Pa(e.return,t,n)}function nu(e,t,n,r,a,o){var l=e.memoizedState
null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a,l.treeForkCount=o)}function ru(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail
r=r.children
var l=Uo.current,i=!!(2&l)
if(i?(l=1&l|2,t.flags|=128):l&=1,G(Uo,l),Li(e,t,r,n),r=fa?Jr:0,!i&&null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&tu(e,n,t)
else if(19===e.tag)tu(e,n,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Go(e)&&(a=n),n=n.sibling
null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),nu(t,!1,a,n,o,r)
break
case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Go(e)){t.child=a
break}e=a.sibling,a.sibling=n,n=a,a=e}nu(t,!0,n,null,o,r)
break
case"together":nu(t,!1,null,null,void 0,r)
break
default:t.memoizedState=null}return t.child}function au(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),_c|=t.lanes,0===(n&t.childLanes)){if(null===e)return null
if(Ta(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(l(153))
if(null!==t.child){for(n=Ur(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ur(e,e.pendingProps)).return=t
n.sibling=null}return t.child}function ou(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!ja(e))}function lu(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ai=!0
else{if(!(ou(e,n)||128&t.flags))return Ai=!1,function(e,t,n){switch(t.tag){case 3:Q(t,t.stateNode.containerInfo),xa(0,Da,e.memoizedState.cache),ga()
break
case 27:case 5:X(t)
break
case 4:Q(t,t.stateNode.containerInfo)
break
case 10:xa(0,t.type,t.memoizedProps.value)
break
case 31:if(null!==t.memoizedState)return t.flags|=128,Fo(t),null
break
case 13:var r=t.memoizedState
if(null!==r)return null!==r.dehydrated?(Ro(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Yi(e,t,n):(Ro(t),null!==(e=au(e,t,n))?e.sibling:null)
Ro(t)
break
case 19:var a=!!(128&e.flags)
if((r=0!==(n&t.childLanes))||(Ta(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return ru(e,t,n)
t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),G(Uo,Uo.current),r)break
return null
case 22:return t.lanes=0,Di(e,t,n,t.pendingProps)
case 24:xa(0,Da,e.memoizedState.cache)}return au(e,t,n)}(e,t,n)
Ai=!!(131072&e.flags)}else Ai=!1,fa&&1048576&t.flags&&oa(t,Jr,t.index)
switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps
if(e=ro(t.elementType),t.type=e,"function"!=typeof e){if(null!=e){var a=e.$$typeof
if(a===E){t.tag=11,t=Ri(null,t,e,r,n)
break e}if(a===x){t.tag=14,t=Fi(null,t,e,r,n)
break e}}throw t=z(e)||e,Error(l(306,t,""))}Ir(e)?(r=ki(e,r),t.tag=1,t=Wi(null,t,e,r,n)):(t.tag=0,t=Hi(null,t,e,r,n))}return t
case 0:return Hi(e,t,t.type,t.pendingProps,n)
case 1:return Wi(e,t,r=t.type,a=ki(r,t.pendingProps),n)
case 3:e:{if(Q(t,t.stateNode.containerInfo),null===e)throw Error(l(387))
r=t.pendingProps
var o=t.memoizedState
a=o.element,bo(e,t),xo(t,r,null,n)
var i=t.memoizedState
if(r=i.cache,xa(0,Da,r),r!==o.cache&&Ca(t,[Da],n,!0),_o(),r=i.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=qi(e,t,r,n)
break e}if(r!==a){Sa(a=Qr(Error(l(424)),t)),t=qi(e,t,r,n)
break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body
else e="HTML"===e.nodeName?e.ownerDocument.body:e
for(sa=Lf(e.firstChild),ca=t,fa=!0,da=null,pa=!0,n=ho(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ga(),r===a){t=au(e,t,n)
break e}Li(e,t,r,n)}t=t.child}return t
case 26:return $i(e,t),null===e?(n=Wf(t.type,null,t.pendingProps,null))?t.memoizedState=n:fa||(n=t.type,e=t.pendingProps,(r=yf(W.current).createElement(n))[Ge]=t,r[Be]=e,pf(r,n,e),et(r),t.stateNode=r):t.memoizedState=Wf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null
case 27:return X(t),null===e&&fa&&(r=t.stateNode=Df(t.type,t.pendingProps,W.current),ca=t,pa=!0,a=sa,Pf(t.type)?(Rf=a,sa=Lf(r.firstChild)):sa=a),Li(e,t,t.pendingProps.children,n),$i(e,t),null===e&&(t.flags|=4194304),t.child
case 5:return null===e&&fa&&((a=r=sa)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n
if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Qe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break
return e
case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break
if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break
return e
case"style":if(e.hasAttribute("data-precedence"))break
return e
case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break
return e
default:return e}}else{if("input"!==t||"hidden"!==e.type)return e
var o=null==a.name?null:""+a.name
if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=Lf(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,pa))?(t.stateNode=r,ca=t,sa=Lf(r.firstChild),pa=!1,a=!0):a=!1),a||ha(t)),X(t),a=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,r=o.children,wf(a,o)?r=null:null!==i&&wf(a,i)&&(t.flags|=32),null!==t.memoizedState&&(a=tl(e,t,al,null,null,n),fd._currentValue=a),$i(e,t),Li(e,t,r,n),t.child
case 6:return null===e&&fa&&((e=n=sa)&&(null!==(n=function(e,t,n){if(""===t)return null
for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null
if(null===(e=Lf(e.nextSibling)))return null}return e}(n,t.pendingProps,pa))?(t.stateNode=n,ca=t,sa=null,e=!0):e=!1),e||ha(t)),null
case 13:return Yi(e,t,n)
case 4:return Q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=mo(t,null,r,n):Li(e,t,r,n),t.child
case 11:return Ri(e,t,t.type,t.pendingProps,n)
case 7:return Li(e,t,t.pendingProps,n),t.child
case 8:case 12:return Li(e,t,t.pendingProps.children,n),t.child
case 10:return r=t.pendingProps,xa(0,t.type,r.value),Li(e,t,r.children,n),t.child
case 9:return a=t.type._context,r=t.pendingProps.children,Na(t),r=r(a=za(a)),t.flags|=1,Li(e,t,r,n),t.child
case 14:return Fi(e,t,t.type,t.pendingProps,n)
case 15:return Mi(e,t,t.type,t.pendingProps,n)
case 19:return ru(e,t,n)
case 31:return function(e,t,n){var r=t.pendingProps,a=!!(128&t.flags)
if(t.flags&=-129,null===e){if(fa){if("hidden"===r.mode)return e=Gi(t,r),t.lanes=536870912,Ii(null,e)
if(Fo(t),(e=sa)?null!==(e=null!==(e=Nf(e,pa))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ta?{id:na,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},(n=Vr(e)).return=t,t.child=n,ca=t,sa=null):e=null,null===e)throw ha(t)
return t.lanes=536870912,null}return Gi(t,r)}var o=e.memoizedState
if(null!==o){var i=o.dehydrated
if(Fo(t),a)if(256&t.flags)t.flags&=-257,t=Bi(e,t,n)
else{if(null===t.memoizedState)throw Error(l(558))
t.child=e.child,t.flags|=128,t=null}else if(Ai||Ta(e,t,n,!1),a=0!==(n&e.childLanes),Ai||a){if(null!==(r=mc)&&0!==(i=Re(r,n))&&i!==o.retryLane)throw o.retryLane=i,Ar(e,i),Qc(r,e,i),zi
ls(),t=Bi(e,t,n)}else e=o.treeContext,sa=Lf(i.nextSibling),ca=t,fa=!0,da=null,pa=!1,null!==e&&ua(t,e),(t=Gi(t,r)).flags|=4096
return t}return(e=Ur(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n)
case 22:return Di(e,t,n,t.pendingProps)
case 24:return Na(t),r=za(Da),null===e?(null===(a=Qa())&&(a=mc,o=Ia(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},yo(t),xa(0,Da,a)):(0!==(e.lanes&n)&&(bo(e,t),xo(t,null,null,n),_o()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),xa(0,Da,r)):(r=o.cache,xa(0,Da,r),r!==a.cache&&Ca(t,[Da],n,!0))),Li(e,t,t.pendingProps.children,n),t.child
case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function iu(e){e.flags|=4}function uu(e,t,n,r,a){if((t=!!(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192
else{if(!rs())throw ao=eo,Ja
e.flags|=8192}}else e.flags&=-16777217}function cu(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217
else if(e.flags|=16777216,!od(t)){if(!rs())throw ao=eo,Ja
e.flags|=8192}}function su(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?je():536870912,e.lanes|=t,Cc|=t)}function fu(e,t){if(!fa)switch(e.tailMode){case"hidden":t=e.tail
for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling
null===n?e.tail=null:n.sibling=null
break
case"collapsed":n=e.tail
for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function du(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0
if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling
else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling
return e.subtreeFlags|=r,e.childLanes=n,t}function pu(e,t,n){var r=t.pendingProps
switch(ia(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return du(t),null
case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Oa(Da),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ba(t)?iu(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,wa())),du(t),null
case 26:var a=t.type,o=t.memoizedState
return null===e?(iu(t),null!==o?(du(t),cu(t,o)):(du(t),uu(t,a,0,0,n))):o?o!==e.memoizedState?(iu(t),du(t),cu(t,o)):(du(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&iu(t),du(t),uu(t,a,0,0,n)),null
case 27:if(Y(t),n=W.current,a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&iu(t)
else{if(!r){if(null===t.stateNode)throw Error(l(166))
return du(t),null}e=H.current,ba(t)?va(t):(e=Df(a,r,n),t.stateNode=e,iu(t))}return du(t),null
case 5:if(Y(t),a=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&iu(t)
else{if(!r){if(null===t.stateNode)throw Error(l(166))
return du(t),null}if(o=H.current,ba(t))va(t)
else{var i=yf(W.current)
switch(o){case 1:o=i.createElementNS("http://www.w3.org/2000/svg",a)
break
case 2:o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a)
break
default:switch(a){case"svg":o=i.createElementNS("http://www.w3.org/2000/svg",a)
break
case"math":o=i.createElementNS("http://www.w3.org/1998/Math/MathML",a)
break
case"script":(o=i.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)
break
case"select":o="string"==typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size)
break
default:o="string"==typeof r.is?i.createElement(a,{is:r.is}):i.createElement(a)}}o[Ge]=t,o[Be]=r
e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)o.appendChild(i.stateNode)
else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child
continue}if(i===t)break e
for(;null===i.sibling;){if(null===i.return||i.return===t)break e
i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=o
e:switch(pf(o,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus
break e
case"img":r=!0
break e
default:r=!1}r&&iu(t)}}return du(t),uu(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null
case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&iu(t)
else{if("string"!=typeof r&&null===t.stateNode)throw Error(l(166))
if(e=W.current,ba(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ca))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ge]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||sf(e.nodeValue,n)))||ha(t,!0)}else(e=yf(e).createTextNode(r))[Ge]=t,t.stateNode=e}return du(t),null
case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=ba(t),null!==n){if(null===e){if(!r)throw Error(l(318))
if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(l(557))
e[Ge]=t}else ga(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4
du(t),e=!1}else n=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0
if(!e)return 256&t.flags?(Io(t),t):(Io(t),null)
if(128&t.flags)throw Error(l(558))}return du(t),null
case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ba(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(l(318))
if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(l(317))
a[Ge]=t}else ga(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4
du(t),a=!1}else a=wa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0
if(!a)return 256&t.flags?(Io(t),t):(Io(t),null)}return Io(t),128&t.flags?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool),o=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),su(t,t.updateQueue),du(t),null)
case 4:return K(),null===e&&Zs(t.stateNode.containerInfo),du(t),null
case 10:return Oa(t.type),du(t),null
case 19:if(U(Uo),null===(r=t.memoizedState))return du(t),null
if(a=!!(128&t.flags),null===(o=r.rendering))if(a)fu(r,!1)
else{if(0!==kc||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=Go(e))){for(t.flags|=128,fu(r,!1),e=o.updateQueue,t.updateQueue=e,su(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Gr(n,e),n=n.sibling
return G(Uo,1&Uo.current|2),fa&&aa(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&ue()>Lc&&(t.flags|=128,a=!0,fu(r,!1),t.lanes=4194304)}else{if(!a)if(null!==(e=Go(o))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,su(t,e),fu(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!fa)return du(t),null}else 2*ue()-r.renderingStartTime>Lc&&536870912!==n&&(t.flags|=128,a=!0,fu(r,!1),t.lanes=4194304)
r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ue(),e.sibling=null,n=Uo.current,G(Uo,a?1&n|2:1&n),fa&&aa(t,r.treeForkCount),e):(du(t),null)
case 22:case 23:return Io(t),zo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?!!(536870912&n)&&!(128&t.flags)&&(du(t),6&t.subtreeFlags&&(t.flags|=8192)):du(t),null!==(n=t.updateQueue)&&su(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&U(qa),null
case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Oa(Da),du(t),null
case 25:case 30:return null}throw Error(l(156,t.tag))}function mu(e,t){switch(ia(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 3:return Oa(Da),K(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null
case 26:case 27:case 5:return Y(t),null
case 31:if(null!==t.memoizedState){if(Io(t),null===t.alternate)throw Error(l(340))
ga()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 13:if(Io(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(l(340))
ga()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 19:return U(Uo),null
case 4:return K(),null
case 10:return Oa(t.type),null
case 22:case 23:return Io(t),zo(),null!==e&&U(qa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 24:return Oa(Da),null
default:return null}}function hu(e,t){switch(ia(t),t.tag){case 3:Oa(Da),K()
break
case 26:case 27:case 5:Y(t)
break
case 4:K()
break
case 31:null!==t.memoizedState&&Io(t)
break
case 13:Io(t)
break
case 19:U(Uo)
break
case 10:Oa(t.type)
break
case 22:case 23:Io(t),zo(),null!==e&&U(qa)
break
case 24:Oa(Da)}}function vu(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null
if(null!==r){var a=r.next
n=a
do{if((n.tag&e)===e){r=void 0
var o=n.create,l=n.inst
r=o(),l.destroy=r}n=n.next}while(n!==a)}}catch(e){ks(t,t.return,e)}}function yu(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null
if(null!==a){var o=a.next
r=o
do{if((r.tag&e)===e){var l=r.inst,i=l.destroy
if(void 0!==i){l.destroy=void 0,a=t
var u=n,c=i
try{c()}catch(e){ks(a,u,e)}}}r=r.next}while(r!==o)}}catch(e){ks(t,t.return,e)}}function bu(e){var t=e.updateQueue
if(null!==t){var n=e.stateNode
try{Po(t,n)}catch(t){ks(e,e.return,t)}}}function gu(e,t,n){n.props=ki(e.type,e.memoizedProps),n.state=e.memoizedState
try{n.componentWillUnmount()}catch(n){ks(e,t,n)}}function wu(e,t){try{var n=e.ref
if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode
break
default:r=e.stateNode}"function"==typeof n?e.refCleanup=n(r):n.current=r}}catch(n){ks(e,t,n)}}function Su(e,t){var n=e.ref,r=e.refCleanup
if(null!==n)if("function"==typeof r)try{r()}catch(n){ks(e,t,n)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(n){ks(e,t,n)}else n.current=null}function Eu(e){var t=e.type,n=e.memoizedProps,r=e.stateNode
try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus()
break e
case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ks(e,e.return,t)}}function ku(e,t,n){try{var r=e.stateNode
!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"input":var a=null,o=null,i=null,u=null,c=null,s=null,f=null
for(m in n){var d=n[m]
if(n.hasOwnProperty(m)&&null!=d)switch(m){case"checked":case"value":break
case"defaultValue":c=d
default:r.hasOwnProperty(m)||ff(e,t,m,null,r,d)}}for(var p in r){var m=r[p]
if(d=n[p],r.hasOwnProperty(p)&&(null!=m||null!=d))switch(p){case"type":o=m
break
case"name":a=m
break
case"checked":s=m
break
case"defaultChecked":f=m
break
case"value":i=m
break
case"defaultValue":u=m
break
case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(l(137,t))
break
default:m!==d&&ff(e,t,p,m,r,d)}}return void bt(e,i,u,c,s,f,o,a)
case"select":for(o in m=i=u=p=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break
case"multiple":m=c
default:r.hasOwnProperty(o)||ff(e,t,o,null,r,c)}for(a in r)if(o=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=o||null!=c))switch(a){case"value":p=o
break
case"defaultValue":u=o
break
case"multiple":i=o
default:o!==c&&ff(e,t,a,o,r,c)}return t=u,n=i,r=m,void(null!=p?St(e,!!n,p,!1):!!r!=!!n&&(null!=t?St(e,!!n,t,!0):St(e,!!n,n?[]:"",!1)))
case"textarea":for(u in m=p=null,n)if(a=n[u],n.hasOwnProperty(u)&&null!=a&&!r.hasOwnProperty(u))switch(u){case"value":case"children":break
default:ff(e,t,u,null,r,a)}for(i in r)if(a=r[i],o=n[i],r.hasOwnProperty(i)&&(null!=a||null!=o))switch(i){case"value":p=a
break
case"defaultValue":m=a
break
case"children":break
case"dangerouslySetInnerHTML":if(null!=a)throw Error(l(91))
break
default:a!==o&&ff(e,t,i,a,r,o)}return void Et(e,p,m)
case"option":for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&null!=p&&!r.hasOwnProperty(h))if("selected"===h)e.selected=!1
else ff(e,t,h,null,r,p)
for(c in r)if(p=r[c],m=n[c],r.hasOwnProperty(c)&&p!==m&&(null!=p||null!=m))if("selected"===c)e.selected=p&&"function"!=typeof p&&"symbol"!=typeof p
else ff(e,t,c,p,r,m)
return
case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!r.hasOwnProperty(v)&&ff(e,t,v,null,r,p)
for(s in r)if(p=r[s],m=n[s],r.hasOwnProperty(s)&&p!==m&&(null!=p||null!=m))switch(s){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(l(137,t))
break
default:ff(e,t,s,p,r,m)}return
default:if(Ct(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&df(e,t,y,void 0,r,p)
for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||void 0===p&&void 0===m||df(e,t,f,p,r,m)
return}}for(var b in n)p=n[b],n.hasOwnProperty(b)&&null!=p&&!r.hasOwnProperty(b)&&ff(e,t,b,null,r,p)
for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||null==p&&null==m||ff(e,t,d,p,r,m)}(r,e.type,n,t),r[Be]=t}catch(t){ks(e,e.return,t)}}function _u(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Pf(e.type)||4===e.tag}function xu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||_u(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Pf(e.type))continue e
if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Ou(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=zt))
else if(4!==r&&(27===r&&Pf(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(Ou(e,t,n),e=e.sibling;null!==e;)Ou(e,t,n),e=e.sibling}function Pu(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e)
else if(4!==r&&(27===r&&Pf(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Pu(e,t,n),e=e.sibling;null!==e;)Pu(e,t,n),e=e.sibling}function Cu(e){var t=e.stateNode,n=e.memoizedProps
try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0])
pf(t,r,n),t[Ge]=e,t[Be]=n}catch(t){ks(e,e.return,t)}}var Tu=!1,ju=!1,Nu=!1,zu="function"==typeof WeakSet?WeakSet:Set,Au=null
function Lu(e,t,n){var r=n.flags
switch(n.tag){case 0:case 11:case 15:Qu(e,n),4&r&&vu(5,n)
break
case 1:if(Qu(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(e){ks(n,n.return,e)}else{var a=ki(n.type,t.memoizedProps)
t=t.memoizedState
try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ks(n,n.return,e)}}64&r&&bu(n),512&r&&wu(n,n.return)
break
case 3:if(Qu(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{Po(e,t)}catch(e){ks(n,n.return,e)}}break
case 27:null===t&&4&r&&Cu(n)
case 26:case 5:Qu(e,n),null===t&&4&r&&Eu(n),512&r&&wu(n,n.return)
break
case 12:Qu(e,n)
break
case 31:Qu(e,n),4&r&&Uu(e,n)
break
case 13:Qu(e,n),4&r&&Gu(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument
if("$~"===e.data)e._reactRetry=t
else if("$?"!==e.data||"loading"!==n.readyState)t()
else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)}
n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Ps.bind(null,n))))
break
case 22:if(!(r=null!==n.memoizedState||Tu)){t=null!==t&&null!==t.memoizedState||ju,a=Tu
var o=ju
Tu=r,(ju=t)&&!o?Xu(e,n,!!(8772&n.subtreeFlags)):Qu(e,n),Tu=a,ju=o}break
case 30:break
default:Qu(e,n)}}function Ru(e){var t=e.alternate
null!==t&&(e.alternate=null,Ru(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ke(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fu=null,Mu=!1
function Du(e,t,n){for(n=n.child;null!==n;)Iu(e,t,n),n=n.sibling}function Iu(e,t,n){if(be&&"function"==typeof be.onCommitFiberUnmount)try{be.onCommitFiberUnmount(ye,n)}catch(e){}switch(n.tag){case 26:ju||Su(n,t),Du(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n)
break
case 27:ju||Su(n,t)
var r=Fu,a=Mu
Pf(n.type)&&(Fu=n.stateNode,Mu=!1),Du(e,t,n),If(n.stateNode),Fu=r,Mu=a
break
case 5:ju||Su(n,t)
case 6:if(r=Fu,a=Mu,Fu=null,Du(e,t,n),Mu=a,null!==(Fu=r))if(Mu)try{(9===Fu.nodeType?Fu.body:"HTML"===Fu.nodeName?Fu.ownerDocument.body:Fu).removeChild(n.stateNode)}catch(e){ks(n,t,e)}else try{Fu.removeChild(n.stateNode)}catch(e){ks(n,t,e)}break
case 18:null!==Fu&&(Mu?(Cf(9===(e=Fu).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Vd(e)):Cf(Fu,n.stateNode))
break
case 4:r=Fu,a=Mu,Fu=n.stateNode.containerInfo,Mu=!0,Du(e,t,n),Fu=r,Mu=a
break
case 0:case 11:case 14:case 15:yu(2,n,t),ju||yu(4,n,t),Du(e,t,n)
break
case 1:ju||(Su(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount&&gu(n,t,r)),Du(e,t,n)
break
case 21:Du(e,t,n)
break
case 22:ju=(r=ju)||null!==n.memoizedState,Du(e,t,n),ju=r
break
default:Du(e,t,n)}}function Uu(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated
try{Vd(e)}catch(e){ks(t,t.return,e)}}}function Gu(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Vd(e)}catch(e){ks(t,t.return,e)}}function Bu(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode
return null===t&&(t=e.stateNode=new zu),t
case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new zu),t
default:throw Error(l(435,e.tag))}}(e)
t.forEach(function(t){if(!n.has(t)){n.add(t)
var r=Cs.bind(null,e,t)
t.then(r,r)}})}function $u(e,t){var n=t.deletions
if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,i=t,u=i
e:for(;null!==u;){switch(u.tag){case 27:if(Pf(u.type)){Fu=u.stateNode,Mu=!1
break e}break
case 5:Fu=u.stateNode,Mu=!1
break e
case 3:case 4:Fu=u.stateNode.containerInfo,Mu=!0
break e}u=u.return}if(null===Fu)throw Error(l(160))
Iu(o,i,a),Fu=null,Mu=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Vu(t,e),t=t.sibling}var Hu=null
function Vu(e,t){var n=e.alternate,r=e.flags
switch(e.tag){case 0:case 11:case 14:case 15:$u(t,e),Wu(e),4&r&&(yu(3,e,e.return),vu(3,e),yu(5,e,e.return))
break
case 1:$u(t,e),Wu(e),512&r&&(ju||null===n||Su(n,n.return)),64&r&&Tu&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))))
break
case 26:var a=Hu
if($u(t,e),Wu(e),512&r&&(ju||null===n||Su(n,n.return)),4&r){var o=null!==n?n.memoizedState:null
if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a
t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Qe]||o[Ge]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),pf(o,r,n),o[Ge]=e,et(o),r=o
break e
case"link":var i=rd("link","href",a).get(r+(n.href||""))
if(i)for(var u=0;u<i.length;u++)if((o=i[u]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(u,1)
break t}pf(o=a.createElement(r),r,n),a.head.appendChild(o)
break
case"meta":if(i=rd("meta","content",a).get(r+(n.content||"")))for(u=0;u<i.length;u++)if((o=i[u]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(u,1)
break t}pf(o=a.createElement(r),r,n),a.head.appendChild(o)
break
default:throw Error(l(468,r))}o[Ge]=e,et(o),r=o}e.stateNode=r}else ad(a,e.type,e.stateNode)
else e.stateNode=Jf(a,r,e.memoizedProps)
else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?ad(a,e.type,e.stateNode):Jf(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ku(e,e.memoizedProps,n.memoizedProps)}break
case 27:$u(t,e),Wu(e),512&r&&(ju||null===n||Su(n,n.return)),null!==n&&4&r&&ku(e,e.memoizedProps,n.memoizedProps)
break
case 5:if($u(t,e),Wu(e),512&r&&(ju||null===n||Su(n,n.return)),32&e.flags){a=e.stateNode
try{_t(a,"")}catch(t){ks(e,e.return,t)}}4&r&&null!=e.stateNode&&ku(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(Nu=!0)
break
case 6:if($u(t,e),Wu(e),4&r){if(null===e.stateNode)throw Error(l(162))
r=e.memoizedProps,n=e.stateNode
try{n.nodeValue=r}catch(t){ks(e,e.return,t)}}break
case 3:if(nd=null,a=Hu,Hu=Bf(t.containerInfo),$u(t,e),Hu=a,Wu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vd(t.containerInfo)}catch(t){ks(e,e.return,t)}Nu&&(Nu=!1,qu(e))
break
case 4:r=Hu,Hu=Bf(e.stateNode.containerInfo),$u(t,e),Wu(e),Hu=r
break
case 12:default:$u(t,e),Wu(e)
break
case 31:case 19:$u(t,e),Wu(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Bu(e,r)))
break
case 13:$u(t,e),Wu(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==n&&null!==n.memoizedState)&&(zc=ue()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Bu(e,r)))
break
case 22:a=null!==e.memoizedState
var c=null!==n&&null!==n.memoizedState,s=Tu,f=ju
if(Tu=s||a,ju=f||c,$u(t,e),ju=f,Tu=s,Wu(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||c||Tu||ju||Ku(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t
try{if(o=c.stateNode,a)"function"==typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none"
else{u=c.stateNode
var d=c.memoizedProps.style,p=null!=d&&d.hasOwnProperty("display")?d.display:null
u.style.display=null==p||"boolean"==typeof p?"":(""+p).trim()}}catch(e){ks(c,c.return,e)}}}else if(6===t.tag){if(null===n){c=t
try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(e){ks(c,c.return,e)}}}else if(18===t.tag){if(null===n){c=t
try{var m=c.stateNode
a?Tf(m,!0):Tf(c.stateNode,!1)}catch(e){ks(c,c.return,e)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break e
for(;null===t.sibling;){if(null===t.return||t.return===e)break e
n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Bu(e,n))))
case 30:case 21:}}function Wu(e){var t=e.flags
if(2&t){try{for(var n,r=e.return;null!==r;){if(_u(r)){n=r
break}r=r.return}if(null==n)throw Error(l(160))
switch(n.tag){case 27:var a=n.stateNode
Pu(e,xu(e),a)
break
case 5:var o=n.stateNode
32&n.flags&&(_t(o,""),n.flags&=-33),Pu(e,xu(e),o)
break
case 3:case 4:var i=n.stateNode.containerInfo
Ou(e,xu(e),i)
break
default:throw Error(l(161))}}catch(t){ks(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function qu(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e
qu(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Qu(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Lu(e,t.alternate,t),t=t.sibling}function Ku(e){for(e=e.child;null!==e;){var t=e
switch(t.tag){case 0:case 11:case 14:case 15:yu(4,t,t.return),Ku(t)
break
case 1:Su(t,t.return)
var n=t.stateNode
"function"==typeof n.componentWillUnmount&&gu(t,t.return,n),Ku(t)
break
case 27:If(t.stateNode)
case 26:case 5:Su(t,t.return),Ku(t)
break
case 22:null===t.memoizedState&&Ku(t)
break
default:Ku(t)}e=e.sibling}}function Xu(e,t,n){for(n=n&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,l=o.flags
switch(o.tag){case 0:case 11:case 15:Xu(a,o,n),vu(4,o)
break
case 1:if(Xu(a,o,n),"function"==typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(e){ks(r,r.return,e)}if(null!==(a=(r=o).updateQueue)){var i=r.stateNode
try{var u=a.shared.hiddenCallbacks
if(null!==u)for(a.shared.hiddenCallbacks=null,a=0;a<u.length;a++)Oo(u[a],i)}catch(e){ks(r,r.return,e)}}n&&64&l&&bu(o),wu(o,o.return)
break
case 27:Cu(o)
case 26:case 5:Xu(a,o,n),n&&null===r&&4&l&&Eu(o),wu(o,o.return)
break
case 12:Xu(a,o,n)
break
case 31:Xu(a,o,n),n&&4&l&&Uu(a,o)
break
case 13:Xu(a,o,n),n&&4&l&&Gu(a,o)
break
case 22:null===o.memoizedState&&Xu(a,o,n),wu(o,o.return)
break
case 30:break
default:Xu(a,o,n)}t=t.sibling}}function Yu(e,t){var n=null
null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ua(n))}function Ju(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e))}function Zu(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)ec(e,t,n,r),t=t.sibling}function ec(e,t,n,r){var a=t.flags
switch(t.tag){case 0:case 11:case 15:Zu(e,t,n,r),2048&a&&vu(9,t)
break
case 1:case 31:case 13:default:Zu(e,t,n,r)
break
case 3:Zu(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ua(e)))
break
case 12:if(2048&a){Zu(e,t,n,r),e=t.stateNode
try{var o=t.memoizedProps,l=o.id,i=o.onPostCommit
"function"==typeof i&&i(l,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(e){ks(t,t.return,e)}}else Zu(e,t,n,r)
break
case 23:break
case 22:o=t.stateNode,l=t.alternate,null!==t.memoizedState?2&o._visibility?Zu(e,t,n,r):nc(e,t):2&o._visibility?Zu(e,t,n,r):(o._visibility|=2,tc(e,t,n,r,!!(10256&t.subtreeFlags)||!1)),2048&a&&Yu(l,t)
break
case 24:Zu(e,t,n,r),2048&a&&Ju(t.alternate,t)}}function tc(e,t,n,r,a){for(a=a&&(!!(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,l=t,i=n,u=r,c=l.flags
switch(l.tag){case 0:case 11:case 15:tc(o,l,i,u,a),vu(8,l)
break
case 23:break
case 22:var s=l.stateNode
null!==l.memoizedState?2&s._visibility?tc(o,l,i,u,a):nc(o,l):(s._visibility|=2,tc(o,l,i,u,a)),a&&2048&c&&Yu(l.alternate,l)
break
case 24:tc(o,l,i,u,a),a&&2048&c&&Ju(l.alternate,l)
break
default:tc(o,l,i,u,a)}t=t.sibling}}function nc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags
switch(r.tag){case 22:nc(n,r),2048&a&&Yu(r.alternate,r)
break
case 24:nc(n,r),2048&a&&Ju(r.alternate,r)
break
default:nc(n,r)}t=t.sibling}}var rc=8192
function ac(e,t,n){if(e.subtreeFlags&rc)for(e=e.child;null!==e;)oc(e,t,n),e=e.sibling}function oc(e,t,n){switch(e.tag){case 26:ac(e,t,n),e.flags&rc&&null!==e.memoizedState&&function(e,t,n,r){if(!("stylesheet"!==n.type||"string"==typeof r.media&&!1===matchMedia(r.media).matches||4&n.state.loading)){if(null===n.instance){var a=qf(r.href),o=t.querySelector(Qf(a))
if(o)return null!==(t=o._p)&&"object"==typeof t&&"function"==typeof t.then&&(e.count++,e=id.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void et(o)
o=t.ownerDocument||t,r=Kf(r),(a=Uf.get(a))&&ed(r,a),et(o=o.createElement("link"))
var l=o
l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),pf(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(3&n.state.loading)&&(e.count++,n=id.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Hu,e.memoizedState,e.memoizedProps)
break
case 5:default:ac(e,t,n)
break
case 3:case 4:var r=Hu
Hu=Bf(e.stateNode.containerInfo),ac(e,t,n),Hu=r
break
case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=rc,rc=16777216,ac(e,t,n),rc=r):ac(e,t,n))}}function lc(e){var t=e.alternate
if(null!==t&&null!==(e=t.child)){t.child=null
do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ic(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
Au=r,sc(r,e)}lc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)uc(e),e=e.sibling}function uc(e){switch(e.tag){case 0:case 11:case 15:ic(e),2048&e.flags&&yu(9,e,e.return)
break
case 3:case 12:default:ic(e)
break
case 22:var t=e.stateNode
null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,cc(e)):ic(e)}}function cc(e){var t=e.deletions
if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n]
Au=r,sc(r,e)}lc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:yu(8,t,t.return),cc(t)
break
case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,cc(t))
break
default:cc(t)}e=e.sibling}}function sc(e,t){for(;null!==Au;){var n=Au
switch(n.tag){case 0:case 11:case 15:yu(8,n,t)
break
case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool
null!=r&&r.refCount++}break
case 24:Ua(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Au=r
else e:for(n=e;null!==Au;){var a=(r=Au).sibling,o=r.return
if(Ru(r),r===n){Au=null
break e}if(null!==a){a.return=o,Au=a
break e}Au=o}}}var fc={getCacheForType:function(e){var t=za(Da),n=t.data.get(e)
return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return za(Da).controller.signal}},dc="function"==typeof WeakMap?WeakMap:Map,pc=0,mc=null,hc=null,vc=0,yc=0,bc=null,gc=!1,wc=!1,Sc=!1,Ec=0,kc=0,_c=0,xc=0,Oc=0,Pc=0,Cc=0,Tc=null,jc=null,Nc=!1,zc=0,Ac=0,Lc=1/0,Rc=null,Fc=null,Mc=0,Dc=null,Ic=null,Uc=0,Gc=0,Bc=null,$c=null,Hc=0,Vc=null
function Wc(){return 2&pc&&0!==vc?vc&-vc:null!==L.T?Bs():De()}function qc(){if(0===Pc)if(536870912&vc&&!fa)Pc=536870912
else{var e=_e
!(3932160&(_e<<=1))&&(_e=262144),Pc=e}return null!==(e=Ao.current)&&(e.flags|=32),Pc}function Qc(e,t,n){(e!==mc||2!==yc&&9!==yc)&&null===e.cancelPendingCommit||(ts(e,0),Jc(e,vc,Pc,!1)),ze(e,n),2&pc&&e===mc||(e===mc&&(!(2&pc)&&(xc|=n),4===kc&&Jc(e,vc,Pc,!1)),Rs(e))}function Kc(e,t,n){if(6&pc)throw Error(l(327))
for(var r=!n&&!(127&t)&&0===(t&e.expiredLanes)||Ce(e,t),a=r?function(e,t){var n=pc
pc|=2
var r=as(),a=os()
mc!==e||vc!==t?(Rc=null,Lc=ue()+500,ts(e,t)):wc=Ce(e,t)
e:for(;;)try{if(0!==yc&&null!==hc){t=hc
var o=bc
t:switch(yc){case 1:yc=0,bc=null,ds(e,t,o,1)
break
case 2:case 9:if(to(o)){yc=0,bc=null,fs(t)
break}t=function(){2!==yc&&9!==yc||mc!==e||(yc=7),Rs(e)},o.then(t,t)
break e
case 3:yc=7
break e
case 4:yc=5
break e
case 7:to(o)?(yc=0,bc=null,fs(t)):(yc=0,bc=null,ds(e,t,o,7))
break
case 5:var i=null
switch(hc.tag){case 26:i=hc.memoizedState
case 5:case 27:var u=hc
if(i?od(i):u.stateNode.complete){yc=0,bc=null
var c=u.sibling
if(null!==c)hc=c
else{var s=u.return
null!==s?(hc=s,ps(s)):hc=null}break t}}yc=0,bc=null,ds(e,t,o,5)
break
case 6:yc=0,bc=null,ds(e,t,o,6)
break
case 8:es(),kc=6
break e
default:throw Error(l(462))}}cs()
break}catch(t){ns(e,t)}return _a=ka=null,L.H=r,L.A=a,pc=n,null!==hc?0:(mc=null,vc=0,jr(),kc)}(e,t):is(e,t,!0),o=r;;){if(0===a){wc&&!r&&Jc(e,t,0,!1)
break}if(n=e.current.alternate,!o||Yc(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var i=0
else i=0!==(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0
if(0!==i){t=i
e:{var u=e
a=Tc
var c=u.current.memoizedState.isDehydrated
if(c&&(ts(u,i).flags|=256),2!==(i=is(u,i,!1))){if(Sc&&!c){u.errorRecoveryDisabledLanes|=o,xc|=o,a=4
break e}o=jc,jc=a,null!==o&&(null===jc?jc=o:jc.push.apply(jc,o))}a=i}if(o=!1,2!==a)continue}}if(1===a){ts(e,0),Jc(e,t,0,!0)
break}e:{switch(r=e,o=a){case 0:case 1:throw Error(l(345))
case 4:if((4194048&t)!==t)break
case 6:Jc(r,t,Pc,!gc)
break e
case 2:jc=null
break
case 3:case 5:break
default:throw Error(l(329))}if((62914560&t)===t&&10<(a=zc+300-ue())){if(Jc(r,t,Pc,!gc),0!==Pe(r,0,!0))break e
Uc=t,r.timeoutHandle=Ef(Xc.bind(null,r,n,jc,Rc,Nc,t,Pc,xc,Cc,gc,o,"Throttled",-0,0),a)}else Xc(r,n,jc,Rc,Nc,t,Pc,xc,Cc,gc,o,null,-0,0)}break}a=is(e,t,!1),o=!1}Rs(e)}function Xc(e,t,n,r,a,o,l,i,u,c,s,f,d,p){if(e.timeoutHandle=-1,8192&(f=t.subtreeFlags)||!(16785408&~f)){oc(t,o,f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zt})
var m=(62914560&o)===o?zc-ue():(4194048&o)===o?Ac-ue():0
if(null!==(m=function(e,t){return e.stylesheets&&0===e.count&&cd(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&cd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend
e.unsuspend=null,t()}},6e4+t)
0<e.imgBytes&&0===ld&&(ld=62500*function(){if("function"==typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,l=a.initiatorType,i=a.duration
if(o&&i&&mf(l)){for(l=0,i=a.responseEnd,r+=1;r<n.length;r++){var u=n[r],c=u.startTime
if(c>i)break
var s=u.transferSize,f=u.initiatorType
s&&mf(f)&&(l+=s*((u=u.responseEnd)<i?1:(i-c)/(u-c)))}if(--r,t+=8*(o+l)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"==typeof(e=navigator.connection.downlink)?e:5}())
var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&cd(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend
e.unsuspend=null,t()}},(e.imgBytes>ld?50:800)+t)
return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(f,m)))return Uc=o,e.cancelPendingCommit=m(hs.bind(null,e,t,o,n,r,a,l,i,u,s,f,null,d,p)),void Jc(e,o,l,!c)}hs(e,t,o,n,r,a,l,i,u)}function Yc(e){for(var t=e;;){var n=t.tag
if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot
a=a.value
try{if(!Jn(o(),a))return!1}catch(e){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return!0
t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jc(e,t,n,r){t&=~Oc,t&=~xc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes
for(var a=t;0<a;){var o=31-we(a),l=1<<o
r[o]=-1,a&=~l}0!==n&&Ae(e,n,t)}function Zc(){return!!(6&pc)||(Fs(0,!1),!1)}function es(){if(null!==hc){if(0===yc)var e=hc.return
else _a=ka=null,il(e=hc),io=null,uo=0,e=hc
for(;null!==e;)hu(e.alternate,e),e=e.return
hc=null}}function ts(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,kf(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc=0,es(),mc=e,hc=n=Ur(e.current,null),vc=t,yc=0,bc=null,gc=!1,wc=Ce(e,t),Sc=!1,Cc=Pc=Oc=xc=_c=kc=0,jc=Tc=null,Nc=!1,8&t&&(t|=32&t)
var r=e.entangledLanes
if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-we(r),o=1<<a
t|=e[a],r&=~o}return Ec=t,jr(),n}function ns(e,t){$o=null,L.H=hi,t===Ya||t===Za?(t=oo(),yc=3):t===Ja?(t=oo(),yc=4):yc=t===zi?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,bc=t,null===hc&&(kc=1,Pi(e,Qr(t,e.current)))}function rs(){var e=Ao.current
return null===e||((4194048&vc)===vc?null===Lo:!!((62914560&vc)===vc||536870912&vc)&&e===Lo)}function as(){var e=L.H
return L.H=hi,null===e?hi:e}function os(){var e=L.A
return L.A=fc,e}function ls(){kc=4,gc||(4194048&vc)!==vc&&null!==Ao.current||(wc=!0),!(134217727&_c)&&!(134217727&xc)||null===mc||Jc(mc,vc,Pc,!1)}function is(e,t,n){var r=pc
pc|=2
var a=as(),o=os()
mc===e&&vc===t||(Rc=null,ts(e,t)),t=!1
var l=kc
e:for(;;)try{if(0!==yc&&null!==hc){var i=hc,u=bc
switch(yc){case 8:es(),l=6
break e
case 3:case 2:case 9:case 6:null===Ao.current&&(t=!0)
var c=yc
if(yc=0,bc=null,ds(e,i,u,c),n&&wc){l=0
break e}break
default:c=yc,yc=0,bc=null,ds(e,i,u,c)}}us(),l=kc
break}catch(t){ns(e,t)}return t&&e.shellSuspendCounter++,_a=ka=null,pc=r,L.H=a,L.A=o,null===hc&&(mc=null,vc=0,jr()),l}function us(){for(;null!==hc;)ss(hc)}function cs(){for(;null!==hc&&!le();)ss(hc)}function ss(e){var t=lu(e.alternate,e,Ec)
e.memoizedProps=e.pendingProps,null===t?ps(e):hc=t}function fs(e){var t=e,n=t.alternate
switch(t.tag){case 15:case 0:t=Vi(n,t,t.pendingProps,t.type,void 0,vc)
break
case 11:t=Vi(n,t,t.pendingProps,t.type.render,t.ref,vc)
break
case 5:il(t)
default:hu(n,t),t=lu(n,t=hc=Gr(t,Ec),Ec)}e.memoizedProps=e.pendingProps,null===t?ps(e):hc=t}function ds(e,t,n,r){_a=ka=null,il(t),io=null,uo=0
var a=t.return
try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"==typeof r&&"function"==typeof r.then){if(null!==(t=n.alternate)&&Ta(t,n,a,!0),null!==(n=Ao.current)){switch(n.tag){case 31:case 13:return null===Lo?ls():null===n.alternate&&0===kc&&(kc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===eo?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),_s(e,r,a)),!1
case 22:return n.flags|=65536,r===eo?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),_s(e,r,a)),!1}throw Error(l(435,n.tag))}return _s(e,r,a),ls(),!1}if(fa)return null!==(t=Ao.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ma&&Sa(Qr(e=Error(l(422),{cause:r}),n))):(r!==ma&&Sa(Qr(t=Error(l(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Qr(r,n),Eo(e,a=Ti(e.stateNode,r,a)),4!==kc&&(kc=2)),!1
var o=Error(l(520),{cause:r})
if(o=Qr(o,n),null===Tc?Tc=[o]:Tc.push(o),4!==kc&&(kc=2),null===t)return!0
r=Qr(r,n),n=t
do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,Eo(n,e=Ti(n.stateNode,r,e)),!1
case 1:if(t=n.type,o=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===o||"function"!=typeof o.componentDidCatch||null!==Fc&&Fc.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Ni(a=ji(a),e,n,r),Eo(n,a),!1}n=n.return}while(null!==n)
return!1}(e,a,t,n,vc))return kc=1,Pi(e,Qr(n,e.current)),void(hc=null)}catch(t){if(null!==a)throw hc=a,t
return kc=1,Pi(e,Qr(n,e.current)),void(hc=null)}32768&t.flags?(fa||1===r?e=!0:wc||536870912&vc?e=!1:(gc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Ao.current)&&13===r.tag&&(r.flags|=16384))),ms(t,e)):ps(t)}function ps(e){var t=e
do{if(32768&t.flags)return void ms(t,gc)
e=t.return
var n=pu(t.alternate,t,Ec)
if(null!==n)return void(hc=n)
if(null!==(t=t.sibling))return void(hc=t)
hc=t=e}while(null!==t)
0===kc&&(kc=5)}function ms(e,t){do{var n=mu(e.alternate,e)
if(null!==n)return n.flags&=32767,void(hc=n)
if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(hc=e)
hc=e=n}while(null!==e)
kc=6,hc=null}function hs(e,t,n,r,a,o,i,u,c){e.cancelPendingCommit=null
do{ws()}while(0!==Mc)
if(6&pc)throw Error(l(327))
if(null!==t){if(t===e.current)throw Error(l(177))
if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var l=e.pendingLanes
e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0
var i=e.entanglements,u=e.expirationTimes,c=e.hiddenUpdates
for(n=l&~n;0<n;){var s=31-we(n),f=1<<s
i[s]=0,u[s]=-1
var d=c[s]
if(null!==d)for(c[s]=null,s=0;s<d.length;s++){var p=d[s]
null!==p&&(p.lane&=-536870913)}n&=~f}0!==r&&Ae(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(l&~t))}(e,n,o|=Tr,i,u,c),e===mc&&(hc=mc=null,vc=0),Ic=t,Dc=e,Uc=n,Gc=o,Bc=a,$c=r,10256&t.subtreeFlags||10256&t.flags?(e.callbackNode=null,e.callbackPriority=0,ae(de,function(){return Ss(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(13878&t.flags),13878&t.subtreeFlags||r){r=L.T,L.T=null,a=R.p,R.p=2,i=pc,pc|=4
try{!function(e,t){if(e=e.containerInfo,hf=wd,ar(e=rr(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd}
else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection()
if(r&&0!==r.rangeCount){n=r.anchorNode
var a=r.anchorOffset,o=r.focusNode
r=r.focusOffset
try{n.nodeType,o.nodeType}catch(e){n=null
break e}var i=0,u=-1,c=-1,s=0,f=0,d=e,p=null
t:for(;;){for(var m;d!==n||0!==a&&3!==d.nodeType||(u=i+a),d!==o||0!==r&&3!==d.nodeType||(c=i+r),3===d.nodeType&&(i+=d.nodeValue.length),null!==(m=d.firstChild);)p=d,d=m
for(;;){if(d===e)break t
if(p===n&&++s===a&&(u=i),p===o&&++f===r&&(c=i),null!==(m=d.nextSibling))break
p=(d=p).parentNode}d=m}n=-1===u||-1===c?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null
for(vf={focusedElem:e,selectionRange:n},wd=!1,Au=t;null!==Au;)if(e=(t=Au).child,1028&t.subtreeFlags&&null!==e)e.return=t,Au=e
else for(;null!==Au;){switch(o=(t=Au).alternate,e=t.flags,t.tag){case 0:if(4&e&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(a=e[n]).ref.impl=a.nextImpl
break
case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break
case 1:if(1024&e&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode
try{var h=ki(n.type,a)
e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){ks(n,n.return,e)}}break
case 3:if(1024&e)if(9===(n=(e=t.stateNode.containerInfo).nodeType))jf(e)
else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jf(e)
break
default:e.textContent=""}break
default:if(1024&e)throw Error(l(163))}if(null!==(e=t.sibling)){e.return=t.return,Au=e
break}Au=t.return}}(e,t)}finally{pc=i,R.p=a,L.T=r}}Mc=1,vs(),ys(),bs()}}function vs(){if(1===Mc){Mc=0
var e=Dc,t=Ic,n=!!(13878&t.flags)
if(13878&t.subtreeFlags||n){n=L.T,L.T=null
var r=R.p
R.p=2
var a=pc
pc|=4
try{Vu(t,e)
var o=vf,l=rr(e.containerInfo),i=o.focusedElem,u=o.selectionRange
if(l!==i&&i&&i.ownerDocument&&nr(i.ownerDocument.documentElement,i)){if(null!==u&&ar(i)){var c=u.start,s=u.end
if(void 0===s&&(s=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(s,i.value.length)
else{var f=i.ownerDocument||document,d=f&&f.defaultView||window
if(d.getSelection){var p=d.getSelection(),m=i.textContent.length,h=Math.min(u.start,m),v=void 0===u.end?h:Math.min(u.end,m)
!p.extend&&h>v&&(l=v,v=h,h=l)
var y=tr(i,h),b=tr(i,v)
if(y&&b&&(1!==p.rangeCount||p.anchorNode!==y.node||p.anchorOffset!==y.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var g=f.createRange()
g.setStart(y.node,y.offset),p.removeAllRanges(),h>v?(p.addRange(g),p.extend(b.node,b.offset)):(g.setEnd(b.node,b.offset),p.addRange(g))}}}}for(f=[],p=i;p=p.parentNode;)1===p.nodeType&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop})
for("function"==typeof i.focus&&i.focus(),i=0;i<f.length;i++){var w=f[i]
w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}wd=!!hf,vf=hf=null}finally{pc=a,R.p=r,L.T=n}}e.current=t,Mc=2}}function ys(){if(2===Mc){Mc=0
var e=Dc,t=Ic,n=!!(8772&t.flags)
if(8772&t.subtreeFlags||n){n=L.T,L.T=null
var r=R.p
R.p=2
var a=pc
pc|=4
try{Lu(e,t.alternate,t)}finally{pc=a,R.p=r,L.T=n}}Mc=3}}function bs(){if(4===Mc||3===Mc){Mc=0,ie()
var e=Dc,t=Ic,n=Uc,r=$c
10256&t.subtreeFlags||10256&t.flags?Mc=5:(Mc=0,Ic=Dc=null,gs(e,e.pendingLanes))
var a=e.pendingLanes
if(0===a&&(Fc=null),Me(n),t=t.stateNode,be&&"function"==typeof be.onCommitFiberRoot)try{be.onCommitFiberRoot(ye,t,void 0,!(128&~t.current.flags))}catch(e){}if(null!==r){t=L.T,a=R.p,R.p=2,L.T=null
try{for(var o=e.onRecoverableError,l=0;l<r.length;l++){var i=r[l]
o(i.value,{componentStack:i.stack})}}finally{L.T=t,R.p=a}}3&Uc&&ws(),Rs(e),a=e.pendingLanes,261930&n&&42&a?e===Vc?Hc++:(Hc=0,Vc=e):Hc=0,Fs(0,!1)}}function gs(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ua(t)))}function ws(){return vs(),ys(),bs(),Ss()}function Ss(){if(5!==Mc)return!1
var e=Dc,t=Gc
Gc=0
var n=Me(Uc),r=L.T,a=R.p
try{R.p=32>n?32:n,L.T=null,n=Bc,Bc=null
var o=Dc,i=Uc
if(Mc=0,Ic=Dc=null,Uc=0,6&pc)throw Error(l(331))
var u=pc
if(pc|=4,uc(o.current),ec(o,o.current,i,n),pc=u,Fs(0,!1),be&&"function"==typeof be.onPostCommitFiberRoot)try{be.onPostCommitFiberRoot(ye,o)}catch(e){}return!0}finally{R.p=a,L.T=r,gs(e,t)}}function Es(e,t,n){t=Qr(n,t),null!==(e=wo(e,t=Ti(e.stateNode,t,2),2))&&(ze(e,2),Rs(e))}function ks(e,t,n){if(3===e.tag)Es(e,e,n)
else for(;null!==t;){if(3===t.tag){Es(t,e,n)
break}if(1===t.tag){var r=t.stateNode
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Fc||!Fc.has(r))){e=Qr(n,e),null!==(r=wo(t,n=ji(2),2))&&(Ni(n,r,t,e),ze(r,2),Rs(r))
break}}t=t.return}}function _s(e,t,n){var r=e.pingCache
if(null===r){r=e.pingCache=new dc
var a=new Set
r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a))
a.has(n)||(Sc=!0,a.add(n),e=xs.bind(null,e,t,n),t.then(e,e))}function xs(e,t,n){var r=e.pingCache
null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,mc===e&&(vc&n)===n&&(4===kc||3===kc&&(62914560&vc)===vc&&300>ue()-zc?!(2&pc)&&ts(e,0):Oc|=n,Cc===vc&&(Cc=0)),Rs(e)}function Os(e,t){0===t&&(t=je()),null!==(e=Ar(e,t))&&(ze(e,t),Rs(e))}function Ps(e){var t=e.memoizedState,n=0
null!==t&&(n=t.retryLane),Os(e,n)}function Cs(e,t){var n=0
switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState
null!==a&&(n=a.retryLane)
break
case 19:r=e.stateNode
break
case 22:r=e.stateNode._retryCache
break
default:throw Error(l(314))}null!==r&&r.delete(t),Os(e,n)}var Ts=null,js=null,Ns=!1,zs=!1,As=!1,Ls=0
function Rs(e){e!==js&&null===e.next&&(null===js?Ts=js=e:js=js.next=e),zs=!0,Ns||(Ns=!0,xf(function(){6&pc?ae(se,Ms):Ds()}))}function Fs(e,t){if(!As&&zs){As=!0
do{for(var n=!1,r=Ts;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes
if(0===a)var o=0
else{var l=r.suspendedLanes,i=r.pingedLanes
o=(1<<31-we(42|e)+1)-1,o=201326741&(o&=a&~(l&~i))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Gs(r,o))}else o=vc,!(3&(o=Pe(r,r===mc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Ce(r,o)||(n=!0,Gs(r,o))
r=r.next}}while(n)
As=!1}}function Ms(){Ds()}function Ds(){zs=Ns=!1
var e=0
0!==Ls&&function(){var e=window.event
if(e&&"popstate"===e.type)return e!==Sf&&(Sf=e,!0)
return Sf=null,!1}()&&(e=Ls)
for(var t=ue(),n=null,r=Ts;null!==r;){var a=r.next,o=Is(r,t)
0===o?(r.next=null,null===n?Ts=a:n.next=a,null===a&&(js=n)):(n=r,(0!==e||3&o)&&(zs=!0)),r=a}0!==Mc&&5!==Mc||Fs(e,!1),0!==Ls&&(Ls=0)}function Is(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var l=31-we(o),i=1<<l,u=a[l];-1===u?0!==(i&n)&&0===(i&r)||(a[l]=Te(i,t)):u<=t&&(e.expiredLanes|=i),o&=~i}if(n=vc,n=Pe(e,e===(t=mc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===yc||9===yc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0
if(!(3&n)||Ce(e,n)){if((t=n&-n)===e.callbackPriority)return t
switch(null!==r&&oe(r),Me(n)){case 2:case 8:n=fe
break
case 32:default:n=de
break
case 268435456:n=me}return r=Us.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Us(e,t){if(0!==Mc&&5!==Mc)return e.callbackNode=null,e.callbackPriority=0,null
var n=e.callbackNode
if(ws()&&e.callbackNode!==n)return null
var r=vc
return 0===(r=Pe(e,e===mc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Kc(e,r,t),Is(e,ue()),null!=e.callbackNode&&e.callbackNode===n?Us.bind(null,e):null)}function Gs(e,t){if(ws())return null
Kc(e,t,!0)}function Bs(){if(0===Ls){var e=$a
0===e&&(e=ke,!(261888&(ke<<=1))&&(ke=256)),Ls=e}return Ls}function $s(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Nt(""+e)}function Hs(e,t){var n=t.ownerDocument.createElement("input")
return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Vs=0;Vs<_r.length;Vs++){var Ws=_r[Vs]
xr(Ws.toLowerCase(),"on"+(Ws[0].toUpperCase()+Ws.slice(1)))}xr(vr,"onAnimationEnd"),xr(yr,"onAnimationIteration"),xr(br,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(gr,"onTransitionRun"),xr(wr,"onTransitionStart"),xr(Sr,"onTransitionCancel"),xr(Er,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qs=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qs))
function Ks(e,t){t=!!(4&t)
for(var n=0;n<e.length;n++){var r=e[n],a=r.event
r=r.listeners
e:{var o=void 0
if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],u=i.instance,c=i.currentTarget
if(i=i.listener,u!==o&&a.isPropagationStopped())break e
o=i,a.currentTarget=c
try{o(a)}catch(e){Or(e)}a.currentTarget=null,o=u}else for(l=0;l<r.length;l++){if(u=(i=r[l]).instance,c=i.currentTarget,i=i.listener,u!==o&&a.isPropagationStopped())break e
o=i,a.currentTarget=c
try{o(a)}catch(e){Or(e)}a.currentTarget=null,o=u}}}}function Xs(e,t){var n=t[He]
void 0===n&&(n=t[He]=new Set)
var r=e+"__bubble"
n.has(r)||(ef(t,e,2,!1),n.add(r))}function Ys(e,t,n){var r=0
t&&(r|=4),ef(n,e,r,t)}var Js="_reactListening"+Math.random().toString(36).slice(2)
function Zs(e){if(!e[Js]){e[Js]=!0,tt.forEach(function(t){"selectionchange"!==t&&(Qs.has(t)||Ys(t,!1,e),Ys(t,!0,e))})
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[Js]||(t[Js]=!0,Ys("selectionchange",!1,t))}}function ef(e,t,n,r){switch(Pd(t)){case 2:var a=Sd
break
case 8:a=Ed
break
default:a=kd}n=a.bind(null,t,n,e),a=void 0,!Bt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function tf(e,t,n,r,a){var o=r
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return
var l=r.tag
if(3===l||4===l){var i=r.stateNode.containerInfo
if(i===a)break
if(4===l)for(l=r.return;null!==l;){var c=l.tag
if((3===c||4===c)&&l.stateNode.containerInfo===a)return
l=l.return}for(;null!==i;){if(null===(l=Xe(i)))return
if(5===(c=l.tag)||6===c||26===c||27===c){r=o=l
continue e}i=i.parentNode}}r=r.return}It(function(){var r=o,a=Lt(n),l=[]
e:{var i=kr.get(e)
if(void 0!==i){var c=nn,s=e
switch(e){case"keypress":if(0===Qt(n))break e
case"keydown":case"keyup":c=bn
break
case"focusin":s="focus",c=cn
break
case"focusout":s="blur",c=cn
break
case"beforeblur":case"afterblur":c=cn
break
case"click":if(2===n.button)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=ln
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=un
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=wn
break
case vr:case yr:case br:c=sn
break
case Er:c=Sn
break
case"scroll":case"scrollend":c=an
break
case"wheel":c=En
break
case"copy":case"cut":case"paste":c=fn
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn
break
case"toggle":case"beforetoggle":c=kn}var f=!!(4&t),d=!f&&("scroll"===e||"scrollend"===e),p=f?null!==i?i+"Capture":null:i
f=[]
for(var m,h=r;null!==h;){var v=h
if(m=v.stateNode,5!==(v=v.tag)&&26!==v&&27!==v||null===m||null===p||null!=(v=Ut(h,p))&&f.push(nf(h,v,m)),d)break
h=h.return}0<f.length&&(i=new c(i,s,null,n,a),l.push({event:i,listeners:f}))}}if(!(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===At||!(s=n.relatedTarget||n.fromElement)||!Xe(s)&&!s[$e])&&(c||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,c?(c=r,null!==(s=(s=n.relatedTarget||n.toElement)?Xe(s):null)&&(d=u(s),f=s.tag,s!==d||5!==f&&27!==f&&6!==f)&&(s=null)):(c=null,s=r),c!==s)){if(f=ln,v="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(f=gn,v="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==c?i:Je(c),m=null==s?i:Je(s),(i=new f(v,h+"leave",c,n,a)).target=d,i.relatedTarget=m,v=null,Xe(a)===r&&((f=new f(p,h+"enter",s,n,a)).target=m,f.relatedTarget=d,v=f),d=v,c&&s)e:{for(f=af,h=s,m=0,v=p=c;v;v=f(v))m++
v=0
for(var y=h;y;y=f(y))v++
for(;0<m-v;)p=f(p),m--
for(;0<v-m;)h=f(h),v--
for(;m--;){if(p===h||null!==h&&p===h.alternate){f=p
break e}p=f(p),h=f(h)}f=null}else f=null
null!==c&&of(l,i,c,f,!1),null!==s&&null!==d&&of(l,d,s,f,!0)}if("select"===(c=(i=r?Je(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===c&&"file"===i.type)var b=Gn
else if(Rn(i))if(Bn)b=Yn
else{b=Kn
var g=Qn}else!(c=i.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==i.type&&"radio"!==i.type?r&&Ct(r.elementType)&&(b=Gn):b=Xn
switch(b&&(b=b(e,r))?Fn(l,b,n,a):(g&&g(e,i,r),"focusout"===e&&r&&"number"===i.type&&null!=r.memoizedProps.value&&wt(i,"number",i.value)),g=r?Je(r):window,e){case"focusin":(Rn(g)||"true"===g.contentEditable)&&(lr=g,ir=r,ur=null)
break
case"focusout":ur=ir=lr=null
break
case"mousedown":cr=!0
break
case"contextmenu":case"mouseup":case"dragend":cr=!1,sr(l,n,a)
break
case"selectionchange":if(or)break
case"keydown":case"keyup":sr(l,n,a)}var w
if(xn)e:{switch(e){case"compositionstart":var S="onCompositionStart"
break e
case"compositionend":S="onCompositionEnd"
break e
case"compositionupdate":S="onCompositionUpdate"
break e}S=void 0}else An?Nn(e,n)&&(S="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(S="onCompositionStart")
S&&(Cn&&"ko"!==n.locale&&(An||"onCompositionStart"!==S?"onCompositionEnd"===S&&An&&(w=qt()):(Vt="value"in(Ht=a)?Ht.value:Ht.textContent,An=!0)),0<(g=rf(r,S)).length&&(S=new dn(S,e,null,n,a),l.push({event:S,listeners:g}),w?S.data=w:null!==(w=zn(n))&&(S.data=w))),(w=Pn?function(e,t){switch(e){case"compositionend":return zn(t)
case"keypress":return 32!==t.which?null:(jn=!0,Tn)
case"textInput":return(e=t.data)===Tn&&jn?null:e
default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!xn&&Nn(e,t)?(e=qt(),Wt=Vt=Ht=null,An=!1,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(S=rf(r,"onBeforeInput")).length&&(g=new dn("onBeforeInput","beforeinput",null,n,a),l.push({event:g,listeners:S}),g.data=w)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=$s((a[Be]||null).action),l=r.submitter
l&&null!==(t=(t=l[Be]||null)?$s(t.formAction):l.getAttribute("formAction"))&&(o=t,l=null)
var i=new nn("action","action",null,r,a)
e.push({event:i,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Ls){var e=l?Hs(a,l):new FormData(a)
ti(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"==typeof o&&(i.preventDefault(),e=l?Hs(a,l):new FormData(a),ti(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(l,e,r,n,a)}Ks(l,t)})}function nf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rf(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode
if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Ut(e,n))&&r.unshift(nf(e,a,o)),null!=(a=Ut(e,t))&&r.push(nf(e,a,o))),3===e.tag)return r
e=e.return}return[]}function af(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag&&27!==e.tag)
return e||null}function of(e,t,n,r,a){for(var o=t._reactName,l=[];null!==n&&n!==r;){var i=n,u=i.alternate,c=i.stateNode
if(i=i.tag,null!==u&&u===r)break
5!==i&&26!==i&&27!==i||null===c||(u=c,a?null!=(c=Ut(n,o))&&l.unshift(nf(n,c,u)):a||null!=(c=Ut(n,o))&&l.push(nf(n,c,u))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var lf=/\r\n?/g,uf=/\u0000|\uFFFD/g
function cf(e){return("string"==typeof e?e:""+e).replace(lf,"\n").replace(uf,"")}function sf(e,t){return t=cf(t),cf(e)===t}function ff(e,t,n,r,a,o){switch(n){case"children":"string"==typeof r?"body"===t||"textarea"===t&&""===r||_t(e,r):("number"==typeof r||"bigint"==typeof r)&&"body"!==t&&_t(e,""+r)
break
case"className":ct(e,"class",r)
break
case"tabIndex":ct(e,"tabindex",r)
break
case"dir":case"role":case"viewBox":case"width":case"height":ct(e,n,r)
break
case"style":Pt(e,r,o)
break
case"data":if("object"!==t){ct(e,"data",r)
break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n)
break}if(null==r||"function"==typeof r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n)
break}r=Nt(""+r),e.setAttribute(n,r)
break
case"action":case"formAction":if("function"==typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')")
break}if("function"==typeof o&&("formAction"===n?("input"!==t&&ff(e,t,"name",a.name,a,null),ff(e,t,"formEncType",a.formEncType,a,null),ff(e,t,"formMethod",a.formMethod,a,null),ff(e,t,"formTarget",a.formTarget,a,null)):(ff(e,t,"encType",a.encType,a,null),ff(e,t,"method",a.method,a,null),ff(e,t,"target",a.target,a,null))),null==r||"symbol"==typeof r||"boolean"==typeof r){e.removeAttribute(n)
break}r=Nt(""+r),e.setAttribute(n,r)
break
case"onClick":null!=r&&(e.onclick=zt)
break
case"onScroll":null!=r&&Xs("scroll",e)
break
case"onScrollEnd":null!=r&&Xs("scrollend",e)
break
case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(l(61))
if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60))
e.innerHTML=n}}break
case"multiple":e.multiple=r&&"function"!=typeof r&&"symbol"!=typeof r
break
case"muted":e.muted=r&&"function"!=typeof r&&"symbol"!=typeof r
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break
case"xlinkHref":if(null==r||"function"==typeof r||"boolean"==typeof r||"symbol"==typeof r){e.removeAttribute("xlink:href")
break}n=Nt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n)
break
case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""+r):e.removeAttribute(n)
break
case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,""):e.removeAttribute(n)
break
case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!=typeof r&&"symbol"!=typeof r?e.setAttribute(n,r):e.removeAttribute(n)
break
case"cols":case"rows":case"size":case"span":null!=r&&"function"!=typeof r&&"symbol"!=typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n)
break
case"rowSpan":case"start":null==r||"function"==typeof r||"symbol"==typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r)
break
case"popover":Xs("beforetoggle",e),Xs("toggle",e),ut(e,"popover",r)
break
case"xlinkActuate":st(e,"http://www.w3.org/1999/xlink","xlink:actuate",r)
break
case"xlinkArcrole":st(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r)
break
case"xlinkRole":st(e,"http://www.w3.org/1999/xlink","xlink:role",r)
break
case"xlinkShow":st(e,"http://www.w3.org/1999/xlink","xlink:show",r)
break
case"xlinkTitle":st(e,"http://www.w3.org/1999/xlink","xlink:title",r)
break
case"xlinkType":st(e,"http://www.w3.org/1999/xlink","xlink:type",r)
break
case"xmlBase":st(e,"http://www.w3.org/XML/1998/namespace","xml:base",r)
break
case"xmlLang":st(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r)
break
case"xmlSpace":st(e,"http://www.w3.org/XML/1998/namespace","xml:space",r)
break
case"is":ut(e,"is",r)
break
case"innerText":case"textContent":break
default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ut(e,n=Tt.get(n)||n,r)}}function df(e,t,n,r,a,o){switch(n){case"style":Pt(e,r,o)
break
case"dangerouslySetInnerHTML":if(null!=r){if("object"!=typeof r||!("__html"in r))throw Error(l(61))
if(null!=(n=r.__html)){if(null!=a.children)throw Error(l(60))
e.innerHTML=n}}break
case"children":"string"==typeof r?_t(e,r):("number"==typeof r||"bigint"==typeof r)&&_t(e,""+r)
break
case"onScroll":null!=r&&Xs("scroll",e)
break
case"onScrollEnd":null!=r&&Xs("scrollend",e)
break
case"onClick":null!=r&&(e.onclick=zt)
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break
default:nt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"==typeof(o=null!=(o=e[Be]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!=typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):ut(e,n,r):("function"!=typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function pf(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"img":Xs("error",e),Xs("load",e)
var r,a=!1,o=!1
for(r in n)if(n.hasOwnProperty(r)){var i=n[r]
if(null!=i)switch(r){case"src":a=!0
break
case"srcSet":o=!0
break
case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t))
default:ff(e,t,r,i,n,null)}}return o&&ff(e,t,"srcSet",n.srcSet,n,null),void(a&&ff(e,t,"src",n.src,n,null))
case"input":Xs("invalid",e)
var u=r=i=o=null,c=null,s=null
for(a in n)if(n.hasOwnProperty(a)){var f=n[a]
if(null!=f)switch(a){case"name":o=f
break
case"type":i=f
break
case"checked":c=f
break
case"defaultChecked":s=f
break
case"value":r=f
break
case"defaultValue":u=f
break
case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(l(137,t))
break
default:ff(e,t,a,f,n,null)}}return void gt(e,r,u,c,s,i,o,!1)
case"select":for(o in Xs("invalid",e),a=i=r=null,n)if(n.hasOwnProperty(o)&&null!=(u=n[o]))switch(o){case"value":r=u
break
case"defaultValue":i=u
break
case"multiple":a=u
default:ff(e,t,o,u,n,null)}return t=r,n=i,e.multiple=!!a,void(null!=t?St(e,!!a,t,!1):null!=n&&St(e,!!a,n,!0))
case"textarea":for(i in Xs("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(i)&&null!=(u=n[i]))switch(i){case"value":a=u
break
case"defaultValue":o=u
break
case"children":r=u
break
case"dangerouslySetInnerHTML":if(null!=u)throw Error(l(91))
break
default:ff(e,t,i,u,n,null)}return void kt(e,a,o,r)
case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!=typeof a&&"symbol"!=typeof a
else ff(e,t,c,a,n,null)
return
case"dialog":Xs("beforetoggle",e),Xs("toggle",e),Xs("cancel",e),Xs("close",e)
break
case"iframe":case"object":Xs("load",e)
break
case"video":case"audio":for(a=0;a<qs.length;a++)Xs(qs[a],e)
break
case"image":Xs("error",e),Xs("load",e)
break
case"details":Xs("toggle",e)
break
case"embed":case"source":case"link":Xs("error",e),Xs("load",e)
case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in n)if(n.hasOwnProperty(s)&&null!=(a=n[s]))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t))
default:ff(e,t,s,a,n,null)}return
default:if(Ct(t)){for(f in n)n.hasOwnProperty(f)&&(void 0!==(a=n[f])&&df(e,t,f,a,n,void 0))
return}}for(u in n)n.hasOwnProperty(u)&&(null!=(a=n[u])&&ff(e,t,u,a,n,null))}function mf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0
default:return!1}}var hf=null,vf=null
function yf(e){return 9===e.nodeType?e:e.ownerDocument}function bf(e){switch(e){case"http://www.w3.org/2000/svg":return 1
case"http://www.w3.org/1998/Math/MathML":return 2
default:return 0}}function gf(e,t){if(0===e)switch(t){case"svg":return 1
case"math":return 2
default:return 0}return 1===e&&"foreignObject"===t?0:e}function wf(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Sf=null
var Ef="function"==typeof setTimeout?setTimeout:void 0,kf="function"==typeof clearTimeout?clearTimeout:void 0,_f="function"==typeof Promise?Promise:void 0,xf="function"==typeof queueMicrotask?queueMicrotask:void 0!==_f?function(e){return _f.resolve(null).then(e).catch(Of)}:Ef
function Of(e){setTimeout(function(){throw e})}function Pf(e){return"head"===e}function Cf(e,t){var n=t,r=0
do{var a=n.nextSibling
if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void Vd(t)
r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++
else if("html"===n)If(e.ownerDocument.documentElement)
else if("head"===n){If(n=e.ownerDocument.head)
for(var o=n.firstChild;o;){var l=o.nextSibling,i=o.nodeName
o[Qe]||"SCRIPT"===i||"STYLE"===i||"LINK"===i&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=l}}else"body"===n&&If(e.ownerDocument.body)
n=a}while(n)
Vd(t)}function Tf(e,t){var n=e
e=0
do{var r=n.nextSibling
if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break
e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++
n=r}while(n)}function jf(e){var t=e.firstChild
for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t
switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":jf(n),Ke(n)
continue
case"SCRIPT":case"STYLE":continue
case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Nf(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null
if(null===(e=Lf(e.nextSibling)))return null}return e}function zf(e){return"$?"===e.data||"$~"===e.data}function Af(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Lf(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break
if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break
if("/$"===t||"/&"===t)return null}}return e}var Rf=null
function Ff(e){e=e.nextSibling
for(var t=0;e;){if(8===e.nodeType){var n=e.data
if("/$"===n||"/&"===n){if(0===t)return Lf(e.nextSibling)
t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Mf(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var n=e.data
if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e
t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Df(e,t,n){switch(t=yf(n),e){case"html":if(!(e=t.documentElement))throw Error(l(452))
return e
case"head":if(!(e=t.head))throw Error(l(453))
return e
case"body":if(!(e=t.body))throw Error(l(454))
return e
default:throw Error(l(451))}}function If(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0])
Ke(e)}var Uf=new Map,Gf=new Set
function Bf(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var $f=R.d
R.d={f:function(){var e=$f.f(),t=Zc()
return e||t},r:function(e){var t=Ye(e)
null!==t&&5===t.tag&&"form"===t.type?ri(t):$f.r(e)},D:function(e){$f.D(e),Vf("dns-prefetch",e,null)},C:function(e,t){$f.C(e,t),Vf("preconnect",e,t)},L:function(e,t,n){$f.L(e,t,n)
var r=Hf
if(r&&e&&t){var a='link[rel="preload"][as="'+yt(t)+'"]'
"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(a+='[imagesizes="'+yt(n.imageSizes)+'"]')):a+='[href="'+yt(e)+'"]'
var o=a
switch(t){case"style":o=qf(e)
break
case"script":o=Xf(e)}Uf.has(o)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Uf.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Qf(o))||"script"===t&&r.querySelector(Yf(o))||(pf(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}},m:function(e,t){$f.m(e,t)
var n=Hf
if(n&&e){var r=t&&"string"==typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+yt(r)+'"][href="'+yt(e)+'"]',o=a
switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Xf(e)}if(!Uf.has(o)&&(e=p({rel:"modulepreload",href:e},t),Uf.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yf(o)))return}pf(r=n.createElement("link"),"link",e),et(r),n.head.appendChild(r)}}},X:function(e,t){$f.X(e,t)
var n=Hf
if(n&&e){var r=Ze(n).hoistableScripts,a=Xf(e),o=r.get(a)
o||((o=n.querySelector(Yf(a)))||(e=p({src:e,async:!0},t),(t=Uf.get(a))&&td(e,t),et(o=n.createElement("script")),pf(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){$f.S(e,t,n)
var r=Hf
if(r&&e){var a=Ze(r).hoistableStyles,o=qf(e)
t=t||"default"
var l=a.get(o)
if(!l){var i={loading:0,preload:null}
if(l=r.querySelector(Qf(o)))i.loading=5
else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Uf.get(o))&&ed(e,n)
var u=l=r.createElement("link")
et(u),pf(u,"link",e),u._p=new Promise(function(e,t){u.onload=e,u.onerror=t}),u.addEventListener("load",function(){i.loading|=1}),u.addEventListener("error",function(){i.loading|=2}),i.loading|=4,Zf(l,t,r)}l={type:"stylesheet",instance:l,count:1,state:i},a.set(o,l)}}},M:function(e,t){$f.M(e,t)
var n=Hf
if(n&&e){var r=Ze(n).hoistableScripts,a=Xf(e),o=r.get(a)
o||((o=n.querySelector(Yf(a)))||(e=p({src:e,async:!0,type:"module"},t),(t=Uf.get(a))&&td(e,t),et(o=n.createElement("script")),pf(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}}
var Hf="undefined"==typeof document?null:document
function Vf(e,t,n){var r=Hf
if(r&&"string"==typeof t&&t){var a=yt(t)
a='link[rel="'+e+'"][href="'+a+'"]',"string"==typeof n&&(a+='[crossorigin="'+n+'"]'),Gf.has(a)||(Gf.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(pf(t=r.createElement("link"),"link",e),et(t),r.head.appendChild(t)))}}function Wf(e,t,n,r){var a,o,i,u,c=(c=W.current)?Bf(c):null
if(!c)throw Error(l(446))
switch(e){case"meta":case"title":return null
case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(t=qf(n.href),(r=(n=Ze(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null}
case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=qf(n.href)
var s=Ze(c).hoistableStyles,f=s.get(e)
if(f||(c=c.ownerDocument||c,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,f),(s=c.querySelector(Qf(e)))&&!s._p&&(f.instance=s,f.state.loading=5),Uf.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Uf.set(e,n),s||(a=c,o=e,i=n,u=f.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?u.loading=1:(o=a.createElement("link"),u.preload=o,o.addEventListener("load",function(){return u.loading|=1}),o.addEventListener("error",function(){return u.loading|=2}),pf(o,"link",i),et(o),a.head.appendChild(o))))),t&&null===r)throw Error(l(528,""))
return f}if(t&&null!==r)throw Error(l(529,""))
return null
case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=Xf(n),(r=(n=Ze(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null}
default:throw Error(l(444,e))}}function qf(e){return'href="'+yt(e)+'"'}function Qf(e){return'link[rel="stylesheet"]['+e+"]"}function Kf(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Xf(e){return'[src="'+yt(e)+'"]'}function Yf(e){return"script[async]"+e}function Jf(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+yt(n.href)+'"]')
if(r)return t.instance=r,et(r),r
var a=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null})
return et(r=(e.ownerDocument||e).createElement("style")),pf(r,"style",a),Zf(r,n.precedence,e),t.instance=r
case"stylesheet":a=qf(n.href)
var o=e.querySelector(Qf(a))
if(o)return t.state.loading|=4,t.instance=o,et(o),o
r=Kf(n),(a=Uf.get(a))&&ed(r,a),et(o=(e.ownerDocument||e).createElement("link"))
var i=o
return i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),pf(o,"link",r),t.state.loading|=4,Zf(o,n.precedence,e),t.instance=o
case"script":return o=Xf(n.src),(a=e.querySelector(Yf(o)))?(t.instance=a,et(a),a):(r=n,(a=Uf.get(o))&&td(r=p({},n),a),et(a=(e=e.ownerDocument||e).createElement("script")),pf(a,"link",r),e.head.appendChild(a),t.instance=a)
case"void":return null
default:throw Error(l(443,t.type))}else"stylesheet"===t.type&&!(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Zf(r,n.precedence,e))
return t.instance}function Zf(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,l=0;l<r.length;l++){var i=r[l]
if(i.dataset.precedence===t)o=i
else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function ed(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function td(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nd=null
function rd(e,t,n){if(null===nd){var r=new Map,a=nd=new Map
a.set(n,r)}else(r=(a=nd).get(n))||(r=new Map,a.set(n,r))
if(r.has(e))return r
for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a]
if(!(o[Qe]||o[Ge]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var l=o.getAttribute(t)||""
l=e+l
var i=r.get(l)
i?i.push(o):r.set(l,[o])}}return r}function ad(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function od(e){return!!("stylesheet"!==e.type||3&e.state.loading)}var ld=0
function id(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)cd(this,this.stylesheets)
else if(this.unsuspend){var e=this.unsuspend
this.unsuspend=null,e()}}var ud=null
function cd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,ud=new Map,t.forEach(sd,e),ud=null,id.call(e))}function sd(e,t){if(!(4&t.state.loading)){var n=ud.get(e)
if(n)var r=n.get(null)
else{n=new Map,ud.set(e,n)
for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var l=a[o]
"LINK"!==l.nodeName&&"not all"===l.getAttribute("media")||(n.set(l.dataset.precedence,l),r=l)}r&&n.set(null,r)}l=(a=t.instance).getAttribute("data-precedence"),(o=n.get(l)||r)===r&&n.set(null,a),n.set(l,a),this.count++,r=id.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var fd={$$typeof:S,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0}
function dd(e,t,n,r,a,o,l,i,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function pd(e,t,n,r,a,o,l,i,u,c,s,f){return e=new dd(e,t,n,l,u,c,s,f,i),t=1,!0===o&&(t|=24),o=Dr(3,null,null,t),e.current=o,o.stateNode=e,(t=Ia()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},yo(o),e}function md(e){return e?e=Fr:Fr}function hd(e,t,n,r,a,o){a=md(a),null===r.context?r.context=a:r.pendingContext=a,(r=go(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=wo(e,r,t))&&(Qc(n,0,t),So(n,e,t))}function vd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane
e.retryLane=0!==n&&n<t?n:t}}function yd(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function bd(e){if(13===e.tag||31===e.tag){var t=Ar(e,67108864)
null!==t&&Qc(t,0,67108864),yd(e,67108864)}}function gd(e){if(13===e.tag||31===e.tag){var t=Wc(),n=Ar(e,t=Fe(t))
null!==n&&Qc(n,0,t),yd(e,t)}}var wd=!0
function Sd(e,t,n,r){var a=L.T
L.T=null
var o=R.p
try{R.p=2,kd(e,t,n,r)}finally{R.p=o,L.T=a}}function Ed(e,t,n,r){var a=L.T
L.T=null
var o=R.p
try{R.p=8,kd(e,t,n,r)}finally{R.p=o,L.T=a}}function kd(e,t,n,r){if(wd){var a=_d(r)
if(null===a)tf(e,t,r,xd,n),Fd(e,r)
else if(function(e,t,n,r,a){switch(t){case"focusin":return Td=Md(Td,e,t,n,r,a),!0
case"dragenter":return jd=Md(jd,e,t,n,r,a),!0
case"mouseover":return Nd=Md(Nd,e,t,n,r,a),!0
case"pointerover":var o=a.pointerId
return zd.set(o,Md(zd.get(o)||null,e,t,n,r,a)),!0
case"gotpointercapture":return o=a.pointerId,Ad.set(o,Md(Ad.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation()
else if(Fd(e,r),4&t&&-1<Rd.indexOf(e)){for(;null!==a;){var o=Ye(a)
if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var l=Oe(o.pendingLanes)
if(0!==l){var i=o
for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var u=1<<31-we(l)
i.entanglements[1]|=u,l&=~u}Rs(o),!(6&pc)&&(Lc=ue()+500,Fs(0,!1))}}break
case 31:case 13:null!==(i=Ar(o,2))&&Qc(i,0,2),Zc(),yd(o,2)}if(null===(o=_d(r))&&tf(e,t,r,xd,n),o===a)break
a=o}null!==a&&r.stopPropagation()}else tf(e,t,r,null,n)}}function _d(e){return Od(e=Lt(e))}var xd=null
function Od(e){if(xd=null,null!==(e=Xe(e))){var t=u(e)
if(null===t)e=null
else{var n=t.tag
if(13===n){if(null!==(e=c(t)))return e
e=null}else if(31===n){if(null!==(e=s(t)))return e
e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)}}return xd=e,null}function Pd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8
case"message":switch(ce()){case se:return 2
case fe:return 8
case de:case pe:return 32
case me:return 268435456
default:return 32}default:return 32}}var Cd=!1,Td=null,jd=null,Nd=null,zd=new Map,Ad=new Map,Ld=[],Rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ")
function Fd(e,t){switch(e){case"focusin":case"focusout":Td=null
break
case"dragenter":case"dragleave":jd=null
break
case"mouseover":case"mouseout":Nd=null
break
case"pointerover":case"pointerout":zd.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":Ad.delete(t.pointerId)}}function Md(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Ye(t))&&bd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Dd(e){var t=Xe(e.target)
if(null!==t){var n=u(t)
if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Ie(e.priority,function(){gd(n)})}else if(31===t){if(null!==(t=s(n)))return e.blockedOn=t,void Ie(e.priority,function(){gd(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Id(e){if(null!==e.blockedOn)return!1
for(var t=e.targetContainers;0<t.length;){var n=_d(e.nativeEvent)
if(null!==n)return null!==(t=Ye(n))&&bd(t),e.blockedOn=n,!1
var r=new(n=e.nativeEvent).constructor(n.type,n)
At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function Ud(e,t,n){Id(e)&&n.delete(t)}function Gd(){Cd=!1,null!==Td&&Id(Td)&&(Td=null),null!==jd&&Id(jd)&&(jd=null),null!==Nd&&Id(Nd)&&(Nd=null),zd.forEach(Ud),Ad.forEach(Ud)}function Bd(e,t){e.blockedOn===t&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Gd)))}var $d=null
function Hd(e){$d!==e&&($d=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$d===e&&($d=null)
for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2]
if("function"!=typeof r){if(null===Od(r||n))continue
break}var o=Ye(n)
null!==o&&(e.splice(t,3),t-=3,ti(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Vd(e){function t(t){return Bd(t,e)}null!==Td&&Bd(Td,e),null!==jd&&Bd(jd,e),null!==Nd&&Bd(Nd,e),zd.forEach(t),Ad.forEach(t)
for(var n=0;n<Ld.length;n++){var r=Ld[n]
r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ld.length&&null===(n=Ld[0]).blockedOn;)Dd(n),null===n.blockedOn&&Ld.shift()
if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],l=a[Be]||null
if("function"==typeof o)l||Hd(n)
else if(l){var i=null
if(o&&o.hasAttribute("formAction")){if(a=o,l=o[Be]||null)i=l.formAction
else if(null!==Od(a))continue}else i=l.action
"function"==typeof i?n[r+1]=i:(n.splice(r,3),r-=3),Hd(n)}}}function Wd(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry
e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"==typeof navigation){var r=!1,a=null
return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function qd(e){this._internalRoot=e}function Qd(e){this._internalRoot=e}Qd.prototype.render=qd.prototype.render=function(e){var t=this._internalRoot
if(null===t)throw Error(l(409))
hd(t.current,Wc(),e,t,null,null)},Qd.prototype.unmount=qd.prototype.unmount=function(){var e=this._internalRoot
if(null!==e){this._internalRoot=null
var t=e.containerInfo
hd(e.current,2,null,e,null,null),Zc(),t[$e]=null}},Qd.prototype.unstable_scheduleHydration=function(e){if(e){var t=De()
e={blockedOn:null,target:e,priority:t}
for(var n=0;n<Ld.length&&0!==t&&t<Ld[n].priority;n++);Ld.splice(n,0,e),0===n&&Dd(e)}}
var Kd=a.version
if("19.2.0"!==Kd)throw Error(l(527,Kd,"19.2.0"))
R.findDOMNode=function(e){var t=e._reactInternals
if(void 0===t){if("function"==typeof e.render)throw Error(l(188))
throw e=Object.keys(e).join(","),Error(l(268,e))}return e=function(e){var t=e.alternate
if(!t){if(null===(t=u(e)))throw Error(l(188))
return t!==e?null:e}for(var n=e,r=t;;){var a=n.return
if(null===a)break
var o=a.alternate
if(null===o){if(null!==(r=a.return)){n=r
continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return f(a),e
if(o===r)return f(a),t
o=o.sibling}throw Error(l(188))}if(n.return!==r.return)n=a,r=o
else{for(var i=!1,c=a.child;c;){if(c===n){i=!0,n=a,r=o
break}if(c===r){i=!0,r=a,n=o
break}c=c.sibling}if(!i){for(c=o.child;c;){if(c===n){i=!0,n=o,r=a
break}if(c===r){i=!0,r=o,n=a
break}c=c.sibling}if(!i)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(3!==n.tag)throw Error(l(188))
return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode}
var Xd={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.0"}
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Yd=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!Yd.isDisabled&&Yd.supportsFiber)try{ye=Yd.inject(Xd),be=Yd}catch(e){}}t.createRoot=function(e,t){if(!i(e))throw Error(l(299))
var n=!1,r="",a=_i,o=xi,u=Oi
return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(u=t.onRecoverableError)),t=pd(e,1,!1,null,0,n,r,null,a,o,u,Wd),e[$e]=t.current,Zs(e),new qd(t)}},338:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(247)},418:(e,t,n)=>{e.exports=n(160)},477:(e,t)=>{function n(e,t){var n=e.length
e.push(t)
e:for(;0<n;){var r=n-1>>>1,a=e[r]
if(!(0<o(a,t)))break e
e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null
var t=e[0],n=e.pop()
if(n!==t){e[0]=n
e:for(var r=0,a=e.length,l=a>>>1;r<l;){var i=2*(r+1)-1,u=e[i],c=i+1,s=e[c]
if(0>o(u,n))c<a&&0>o(s,u)?(e[r]=s,e[c]=n,r=c):(e[r]=u,e[i]=n,r=i)
else{if(!(c<a&&0>o(s,n)))break e
e[r]=s,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex
return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l=performance
t.unstable_now=function(){return l.now()}}else{var i=Date,u=i.now()
t.unstable_now=function(){return i.now()-u}}var c=[],s=[],f=1,d=null,p=3,m=!1,h=!1,v=!1,y=!1,b="function"==typeof setTimeout?setTimeout:null,g="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null
function S(e){for(var t=r(s);null!==t;){if(null===t.callback)a(s)
else{if(!(t.startTime<=e))break
a(s),t.sortIndex=t.expirationTime,n(c,t)}t=r(s)}}function E(e){if(v=!1,S(e),!h)if(null!==r(c))h=!0,_||(_=!0,k())
else{var t=r(s)
null!==t&&z(E,t.startTime-e)}}var k,_=!1,x=-1,O=5,P=-1
function C(){return!!y||!(t.unstable_now()-P<O)}function T(){if(y=!1,_){var e=t.unstable_now()
P=e
var n=!0
try{e:{h=!1,v&&(v=!1,g(x),x=-1),m=!0
var o=p
try{t:{for(S(e),d=r(c);null!==d&&!(d.expirationTime>e&&C());){var l=d.callback
if("function"==typeof l){d.callback=null,p=d.priorityLevel
var i=l(d.expirationTime<=e)
if(e=t.unstable_now(),"function"==typeof i){d.callback=i,S(e),n=!0
break t}d===r(c)&&a(c),S(e)}else a(c)
d=r(c)}if(null!==d)n=!0
else{var u=r(s)
null!==u&&z(E,u.startTime-e),n=!1}}break e}finally{d=null,p=o,m=!1}n=void 0}}finally{n?k():_=!1}}}if("function"==typeof w)k=function(){w(T)}
else if("undefined"!=typeof MessageChannel){var j=new MessageChannel,N=j.port2
j.port1.onmessage=T,k=function(){N.postMessage(null)}}else k=function(){b(T,0)}
function z(e,n){x=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3
break
default:t=p}var n=p
p=t
try{return e()}finally{p=n}},t.unstable_requestPaint=function(){y=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=p
p=e
try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var l=t.unstable_now()
switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?l+o:l:o=l,e){case 1:var i=-1
break
case 2:i=250
break
case 5:i=1073741823
break
case 4:i=1e4
break
default:i=5e3}return e={id:f++,callback:a,priorityLevel:e,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(e.sortIndex=o,n(s,e),null===r(c)&&e===r(s)&&(v?(g(x),x=-1):v=!0,z(E,o-l))):(e.sortIndex=i,n(c,e),h||m||(h=!0,_||(_=!0,k()))),e},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(e){var t=p
return function(){var n=p
p=t
try{return e.apply(this,arguments)}finally{p=n}}}},540:(e,t,n)=>{e.exports=n(869)},869:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.consumer"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),m=Symbol.iterator
var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,y={}
function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.")
this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype
var S=w.prototype=new g
S.constructor=w,v(S,b.prototype),S.isPureReactComponent=!0
var E=Array.isArray
function k(){}var _={H:null,A:null,T:null,S:null},x=Object.prototype.hasOwnProperty
function O(e,t,r){var a=r.ref
return{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g
function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)
var n,r}function j(e,t,a,o,l){var i=typeof e
"undefined"!==i&&"boolean"!==i||(e=null)
var u,c,s=!1
if(null===e)s=!0
else switch(i){case"bigint":case"string":case"number":s=!0
break
case"object":switch(e.$$typeof){case n:case r:s=!0
break
case d:return j((s=e._init)(e._payload),t,a,o,l)}}if(s)return l=l(e),s=""===o?"."+T(e,0):o,E(l)?(a="",null!=s&&(a=s.replace(C,"$&/")+"/"),j(l,t,a,"",function(e){return e})):null!=l&&(P(l)&&(u=l,c=a+(null==l.key||e&&e.key===l.key?"":(""+l.key).replace(C,"$&/")+"/")+s,l=O(u.type,c,u.props)),t.push(l)),1
s=0
var f,p=""===o?".":o+":"
if(E(e))for(var h=0;h<e.length;h++)s+=j(o=e[h],t,a,i=p+T(o,h),l)
else if("function"==typeof(h=null===(f=e)||"object"!=typeof f?null:"function"==typeof(f=m&&f[m]||f["@@iterator"])?f:null))for(e=h.call(e),h=0;!(o=e.next()).done;)s+=j(o=o.value,t,a,i=p+T(o,h++),l)
else if("object"===i){if("function"==typeof e.then)return j(function(e){switch(e.status){case"fulfilled":return e.value
case"rejected":throw e.reason
default:switch("string"==typeof e.status?e.then(k,k):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value
case"rejected":throw e.reason}}throw e}(e),t,a,o,l)
throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function N(e,t,n){if(null==e)return e
var r=[],a=0
return j(e,r,"","",function(e){return t.call(n,e,a++)}),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default
throw e._result}var A="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e})
if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)
console.error(e)},L={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0
return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.")
return e}}
t.Activity=p,t.Children=L,t.Component=b,t.Fragment=a,t.Profiler=l,t.PureComponent=w,t.StrictMode=o,t.Suspense=s,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return _.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".")
var r=v({},e.props),a=e.key
if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)!x.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o])
var o=arguments.length-2
if(1===o)r.children=n
else if(1<o){for(var l=Array(o),i=0;i<o;i++)l[i]=arguments[i+2]
r.children=l}return O(e.type,a,r)},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:i,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null
if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)x.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r])
var l=arguments.length-2
if(1===l)a.children=n
else if(1<l){for(var i=Array(l),u=0;u<l;u++)i[u]=arguments[u+2]
a.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r])
return O(e,o,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=_.T,n={}
_.T=n
try{var r=e(),a=_.S
null!==a&&a(n,r),"object"==typeof r&&null!==r&&"function"==typeof r.then&&r.then(k,A)}catch(e){A(e)}finally{null!==t&&null!==n.types&&(t.types=n.types),_.T=t}},t.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},t.use=function(e){return _.H.use(e)},t.useActionState=function(e,t,n){return _.H.useActionState(e,t,n)},t.useCallback=function(e,t){return _.H.useCallback(e,t)},t.useContext=function(e){return _.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return _.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return _.H.useEffect(e,t)},t.useEffectEvent=function(e){return _.H.useEffectEvent(e)},t.useId=function(){return _.H.useId()},t.useImperativeHandle=function(e,t,n){return _.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return _.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return _.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return _.H.useMemo(e,t)},t.useOptimistic=function(e,t){return _.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return _.H.useReducer(e,t,n)},t.useRef=function(e){return _.H.useRef(e)},t.useState=function(e){return _.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return _.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return _.H.useTransition()},t.version="19.2.0"},961:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(221)},982:(e,t,n)=>{e.exports=n(477)}},r={}
function a(e){var t=r[e]
if(void 0!==t)return t.exports
var o=r[e]={exports:{}}
return n[e](o,o.exports,a),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n
if("object"==typeof n&&n){if(4&r&&n.__esModule)return n
if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null)
a.r(o)
var l={}
e=e||[null,t({}),t([]),t(t)]
for(var i=2&r&&n;("object"==typeof i||"function"==typeof i)&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach(e=>l[e]=()=>n[e])
return l.default=()=>n,a.d(o,l),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}
var o=a(540),l=a.t(o,2),i=a(338),u=a(418)
function c(e){e()}var s={notify(){},get:()=>[]}
function f(e,t){let n,r=s,a=0,o=!1
function l(){f.onStateChange&&f.onStateChange()}function i(){a++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=function(){let e=null,t=null
return{clear(){e=null,t=null},notify(){c(()=>{let t=e
for(;t;)t.callback(),t=t.next})},get(){const t=[]
let n=e
for(;n;)t.push(n),n=n.next
return t},subscribe(n){let r=!0
const a=t={callback:n,next:null,prev:t}
return a.prev?a.prev.next=a:e=a,function(){r&&null!==e&&(r=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}())}function u(){a--,n&&0===a&&(n(),n=void 0,r.clear(),r=s)}const f={addNestedSub:function(e){i()
const t=r.subscribe(e)
let n=!1
return()=>{n||(n=!0,t(),u())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:l,isSubscribed:function(){return o},trySubscribe:function(){o||(o=!0,i())},tryUnsubscribe:function(){o&&(o=!1,u())},getListeners:()=>r}
return f}var d=(()=>!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement))(),p=(()=>"undefined"!=typeof navigator&&"ReactNative"===navigator.product)(),m=(()=>d||p?o.useLayoutEffect:o.useEffect)()
Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype
var h=Symbol.for("react-redux-context"),v="undefined"!=typeof globalThis?globalThis:{}
function y(){if(!o.createContext)return{}
const e=v[h]??=new Map
let t=e.get(o.createContext)
return t||(t=o.createContext(null),e.set(o.createContext,t)),t}var b=y()
var g=function(e){const{children:t,context:n,serverState:r,store:a}=e,l=o.useMemo(()=>{const e=f(a)
return{store:a,subscription:e,getServerState:r?()=>r:void 0}},[a,r]),i=o.useMemo(()=>a.getState(),[a])
m(()=>{const{subscription:e}=l
return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==a.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[l,i])
const u=n||b
return o.createElement(u.Provider,{value:l},t)}
function w(e=b){return function(){return o.useContext(e)}}var S=w()
function E(e=b){const t=e===b?S:w(e),n=()=>{const{store:e}=t()
return e}
return Object.assign(n,{withTypes:()=>n}),n}var k=E()
function _(e=b){const t=e===b?k:E(e),n=()=>t().dispatch
return Object.assign(n,{withTypes:()=>n}),n}var x=_(),O=(e,t)=>e===t
function P(e=b){const t=e===b?S:w(e),n=(e,n={})=>{const{equalityFn:r=O}="function"==typeof n?{equalityFn:n}:n
const a=t(),{store:l,subscription:i,getServerState:c}=a,s=(o.useRef(!0),o.useCallback({[e.name]:t=>e(t)}[e.name],[e])),f=(0,u.useSyncExternalStoreWithSelector)(i.addNestedSub,l.getState,c||l.getState,s,r)
return o.useDebugValue(f),f}
return Object.assign(n,{withTypes:()=>n}),n}var C=P()
function T(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var j=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),N=()=>Math.random().toString(36).substring(7).split("").join("."),z={INIT:`@@redux/INIT${N()}`,REPLACE:`@@redux/REPLACE${N()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${N()}`}
function A(e){if("object"!=typeof e||null===e)return!1
let t=e
for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t)
return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function L(e,t,n){if("function"!=typeof e)throw new Error(T(2))
if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(T(0))
if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(T(1))
return n(L)(e,t)}let r=e,a=t,o=new Map,l=o,i=0,u=!1
function c(){l===o&&(l=new Map,o.forEach((e,t)=>{l.set(t,e)}))}function s(){if(u)throw new Error(T(3))
return a}function f(e){if("function"!=typeof e)throw new Error(T(4))
if(u)throw new Error(T(5))
let t=!0
c()
const n=i++
return l.set(n,e),function(){if(t){if(u)throw new Error(T(6))
t=!1,c(),l.delete(n),o=null}}}function d(e){if(!A(e))throw new Error(T(7))
if(void 0===e.type)throw new Error(T(8))
if("string"!=typeof e.type)throw new Error(T(17))
if(u)throw new Error(T(9))
try{u=!0,a=r(a,e)}finally{u=!1}return(o=l).forEach(e=>{e()}),e}d({type:z.INIT})
return{dispatch:d,subscribe:f,getState:s,replaceReducer:function(e){if("function"!=typeof e)throw new Error(T(10))
r=e,d({type:z.REPLACE})},[j]:function(){const e=f
return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(T(11))
function n(){const e=t
e.next&&e.next(s())}n()
return{unsubscribe:e(n)}},[j](){return this}}}}}function R(e){const t=Object.keys(e),n={}
for(let r=0;r<t.length;r++){const a=t[r]
0,"function"==typeof e[a]&&(n[a]=e[a])}const r=Object.keys(n)
let a
try{!function(e){Object.keys(e).forEach(t=>{const n=e[t]
if(void 0===n(void 0,{type:z.INIT}))throw new Error(T(12))
if(void 0===n(void 0,{type:z.PROBE_UNKNOWN_ACTION()}))throw new Error(T(13))})}(n)}catch(e){a=e}return function(e={},t){if(a)throw a
let o=!1
const l={}
for(let a=0;a<r.length;a++){const i=r[a],u=n[i],c=e[i],s=u(c,t)
if(void 0===s){t&&t.type
throw new Error(T(14))}l[i]=s,o=o||s!==c}return o=o||r.length!==Object.keys(e).length,o?l:e}}function F(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function M(e){return({dispatch:t,getState:n})=>r=>a=>"function"==typeof a?a(t,n,e):r(a)}var D=M(),I=M,U=Symbol.for("immer-nothing"),G=Symbol.for("immer-draftable"),B=Symbol.for("immer-state")
function $(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var H=Object.getPrototypeOf
function V(e){return!!e&&!!e[B]}function W(e){return!!e&&(K(e)||Array.isArray(e)||!!e[G]||!!e.constructor?.[G]||ee(e)||te(e))}var q=Object.prototype.constructor.toString(),Q=new WeakMap
function K(e){if(!e||"object"!=typeof e)return!1
const t=Object.getPrototypeOf(e)
if(null===t||t===Object.prototype)return!0
const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor
if(n===Object)return!0
if("function"!=typeof n)return!1
let r=Q.get(n)
return void 0===r&&(r=Function.toString.call(n),Q.set(n,r)),r===q}function X(e,t,n=!0){if(0===Y(e)){(n?Reflect.ownKeys(e):Object.keys(e)).forEach(n=>{t(n,e[n],e)})}else e.forEach((n,r)=>t(r,n,e))}function Y(e){const t=e[B]
return t?t.type_:Array.isArray(e)?1:ee(e)?2:te(e)?3:0}function J(e,t){return 2===Y(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Z(e,t,n){const r=Y(e)
2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function ee(e){return e instanceof Map}function te(e){return e instanceof Set}function ne(e){return e.copy_||e.base_}function re(e,t){if(ee(e))return new Map(e)
if(te(e))return new Set(e)
if(Array.isArray(e))return Array.prototype.slice.call(e)
const n=K(e)
if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e)
delete t[B]
let n=Reflect.ownKeys(t)
for(let r=0;r<n.length;r++){const a=n[r],o=t[a]
!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[a]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[a]})}return Object.create(H(e),t)}{const t=H(e)
if(null!==t&&n)return{...e}
const r=Object.create(t)
return Object.assign(r,e)}}function ae(e,t=!1){return le(e)||V(e)||!W(e)||(Y(e)>1&&Object.defineProperties(e,{set:oe,add:oe,clear:oe,delete:oe}),Object.freeze(e),t&&Object.values(e).forEach(e=>ae(e,!0))),e}var oe={value:function(){$(2)}}
function le(e){return null===e||"object"!=typeof e||Object.isFrozen(e)}var ie,ue={}
function ce(e){const t=ue[e]
return t||$(0),t}function se(){return ie}function fe(e,t){t&&(ce("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function de(e){pe(e),e.drafts_.forEach(he),e.drafts_=null}function pe(e){e===ie&&(ie=e.parent_)}function me(e){return ie={drafts_:[],parent_:ie,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function he(e){const t=e[B]
0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ve(e,t){t.unfinalizedDrafts_=t.drafts_.length
const n=t.drafts_[0]
return void 0!==e&&e!==n?(n[B].modified_&&(de(t),$(4)),W(e)&&(e=ye(t,e),t.parent_||ge(t,e)),t.patches_&&ce("Patches").generateReplacementPatches_(n[B].base_,e,t.patches_,t.inversePatches_)):e=ye(t,n,[]),de(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==U?e:void 0}function ye(e,t,n){if(le(t))return t
const r=e.immer_.shouldUseStrictIteration(),a=t[B]
if(!a)return X(t,(r,o)=>be(e,a,t,r,o,n),r),t
if(a.scope_!==e)return t
if(!a.modified_)return ge(e,a.base_,!0),a.base_
if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--
const t=a.copy_
let o=t,l=!1
3===a.type_&&(o=new Set(t),t.clear(),l=!0),X(o,(r,o)=>be(e,a,t,r,o,n,l),r),ge(e,t,!1),n&&e.patches_&&ce("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function be(e,t,n,r,a,o,l){if(null==a)return
if("object"!=typeof a&&!l)return
const i=le(a)
if(!i||l){if(V(a)){const l=ye(e,a,o&&t&&3!==t.type_&&!J(t.assigned_,r)?o.concat(r):void 0)
if(Z(n,r,l),!V(l))return
e.canAutoFreeze_=!1}else l&&n.add(a)
if(W(a)&&!i){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return
if(t&&t.base_&&t.base_[r]===a&&i)return
ye(e,a),t&&t.scope_.parent_||"symbol"==typeof r||!(ee(n)?n.has(r):Object.prototype.propertyIsEnumerable.call(n,r))||ge(e,a)}}}function ge(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ae(t,n)}var we={get(e,t){if(t===B)return e
const n=ne(e)
if(!J(n,t))return function(e,t,n){const r=ke(t,n)
return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t)
const r=n[t]
return e.finalized_||!W(r)?r:r===Ee(e.base_,t)?(xe(e),e.copy_[t]=Oe(r,e)):r},has:(e,t)=>t in ne(e),ownKeys:e=>Reflect.ownKeys(ne(e)),set(e,t,n){const r=ke(ne(e),t)
if(r?.set)return r.set.call(e.draft_,n),!0
if(!e.modified_){const r=Ee(ne(e),t),l=r?.[B]
if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0
if(((a=n)===(o=r)?0!==a||1/a==1/o:a!=a&&o!=o)&&(void 0!==n||J(e.base_,t)))return!0
xe(e),_e(e)}var a,o
return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Ee(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,xe(e),_e(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=ne(e),r=Reflect.getOwnPropertyDescriptor(n,t)
return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){$(11)},getPrototypeOf:e=>H(e.base_),setPrototypeOf(){$(12)}},Se={}
function Ee(e,t){const n=e[B]
return(n?ne(n):e)[t]}function ke(e,t){if(!(t in e))return
let n=H(e)
for(;n;){const e=Object.getOwnPropertyDescriptor(n,t)
if(e)return e
n=H(n)}}function _e(e){e.modified_||(e.modified_=!0,e.parent_&&_e(e.parent_))}function xe(e){e.copy_||(e.copy_=re(e.base_,e.scope_.immer_.useStrictShallowCopy_))}X(we,(e,t)=>{Se[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Se.deleteProperty=function(e,t){return Se.set.call(this,e,t,void 0)},Se.set=function(e,t,n){return we.set.call(this,e[0],t,n,e[0])}
function Oe(e,t){const n=ee(e)?ce("MapSet").proxyMap_(e,t):te(e)?ce("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:se(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1}
let a=r,o=we
n&&(a=[r],o=Se)
const{revoke:l,proxy:i}=Proxy.revocable(a,o)
return r.draft_=i,r.revoke_=l,i}(e,t)
return(t?t.scope_:se()).drafts_.push(n),n}function Pe(e){if(!W(e)||le(e))return e
const t=e[B]
let n,r=!0
if(t){if(!t.modified_)return t.base_
t.finalized_=!0,n=re(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=re(e,!0)
return X(n,(e,t)=>{Z(n,e,Pe(t))},r),t&&(t.finalized_=!1),n}var Ce=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t
t=e
const r=this
return function(e=n,...a){return r.produce(e,e=>t.call(this,e,...a))}}let r
if("function"!=typeof t&&$(6),void 0!==n&&"function"!=typeof n&&$(7),W(e)){const a=me(this),o=Oe(e,void 0)
let l=!0
try{r=t(o),l=!1}finally{l?de(a):pe(a)}return fe(a,n),ve(r,a)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===U&&(r=void 0),this.autoFreeze_&&ae(r,!0),n){const t=[],a=[]
ce("Patches").generateReplacementPatches_(e,r,t,a),n(t,a)}return r}$(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n))
let n,r
return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),"boolean"==typeof e?.useStrictIteration&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){W(e)||$(8),V(e)&&(e=function(e){V(e)||$(10)
return Pe(e)}(e))
const t=me(this),n=Oe(e,void 0)
return n[B].isManual_=!0,pe(t),n}finishDraft(e,t){const n=e&&e[B]
n&&n.isManual_||$(9)
const{scope_:r}=n
return fe(r,t),ve(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n
for(n=t.length-1;n>=0;n--){const r=t[n]
if(0===r.path.length&&"replace"===r.op){e=r.value
break}}n>-1&&(t=t.slice(n+1))
const r=ce("Patches").applyPatches_
return V(e)?r(e,t):this.produce(e,e=>r(e,t))}},Te=Ce.produce
var je="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?F:F.apply(null,arguments)}
"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__
function Ne(e,t){function n(...n){if(t){let r=t(...n)
if(!r)throw new Error(We(0))
return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>function(e){return A(e)&&"type"in e&&"string"==typeof e.type}(t)&&t.type===e,n}var ze=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}}
function Ae(e){return W(e)?Te(e,()=>{}):e}function Le(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var Re="RTK_autoBatch",Fe=e=>t=>{setTimeout(t,e)},Me=e=>function(t){const{autoBatch:n=!0}=t??{}
let r=new ze(e)
return n&&r.push(((e={type:"raf"})=>t=>(...n)=>{const r=t(...n)
let a=!0,o=!1,l=!1
const i=new Set,u="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Fe(10):"callback"===e.type?e.queueNotification:Fe(e.timeout),c=()=>{l=!1,o&&(o=!1,i.forEach(e=>e()))}
return Object.assign({},r,{subscribe(e){const t=r.subscribe(()=>a&&e())
return i.add(e),()=>{t(),i.delete(e)}},dispatch(e){try{return a=!e?.meta?.[Re],o=!a,o&&(l||(l=!0,u(c))),r.dispatch(e)}finally{a=!0}}})})("object"==typeof n?n:void 0)),r}
function De(e){const t={},n=[]
let r
const a={addCase(e,n){const r="string"==typeof e?e:e.type
if(!r)throw new Error(We(28))
if(r in t)throw new Error(We(29))
return t[r]=n,a},addAsyncThunk:(e,r)=>(r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),a),addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),a),addDefaultCase:e=>(r=e,a)}
return e(a),[t,n,r]}var Ie=Symbol.for("rtk-slice-createasyncthunk")
function Ue(e,t){return`${e}/${t}`}function Ge({creators:e}={}){const t=e?.asyncThunk?.[Ie]
return function(e){const{name:n,reducerPath:r=n}=e
if(!n)throw new Error(We(11))
const a=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},o=Object.keys(a),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},i={addCase(e,t){const n="string"==typeof e?e:e.type
if(!n)throw new Error(We(12))
if(n in l.sliceCaseReducersByType)throw new Error(We(13))
return l.sliceCaseReducersByType[n]=t,i},addMatcher:(e,t)=>(l.sliceMatchers.push({matcher:e,reducer:t}),i),exposeAction:(e,t)=>(l.actionCreators[e]=t,i),exposeCaseReducer:(e,t)=>(l.sliceCaseReducersByName[e]=t,i)}
function u(){const[t={},n=[],r]="function"==typeof e.extraReducers?De(e.extraReducers):[e.extraReducers],a={...t,...l.sliceCaseReducersByType}
return function(e,t){let n,[r,a,o]=De(t)
if("function"==typeof e)n=()=>Ae(e())
else{const t=Ae(e)
n=()=>t}function l(e=n(),t){let l=[r[t.type],...a.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)]
return 0===l.filter(e=>!!e).length&&(l=[o]),l.reduce((e,n)=>{if(n){if(V(e)){const r=n(e,t)
return void 0===r?e:r}if(W(e))return Te(e,e=>n(e,t))
{const r=n(e,t)
if(void 0===r){if(null===e)return e
throw Error("A case reducer on a non-draftable value must not return undefined")}return r}}return e},e)}return l.getInitialState=n,l}(e.initialState,e=>{for(let t in a)e.addCase(t,a[t])
for(let t of l.sliceMatchers)e.addMatcher(t.matcher,t.reducer)
for(let t of n)e.addMatcher(t.matcher,t.reducer)
r&&e.addDefaultCase(r)})}o.forEach(r=>{const o=a[r],l={reducerName:r,type:Ue(n,r),createNotation:"function"==typeof e.reducers}
!function(e){return"asyncThunk"===e._reducerDefinitionType}(o)?function({type:e,reducerName:t,createNotation:n},r,a){let o,l
if("reducer"in r){if(n&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(r))throw new Error(We(17))
o=r.reducer,l=r.prepare}else o=r
a.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,l?Ne(e,l):Ne(e))}(l,o,i):function({type:e,reducerName:t},n,r,a){if(!a)throw new Error(We(18))
const{payloadCreator:o,fulfilled:l,pending:i,rejected:u,settled:c,options:s}=n,f=a(e,o,s)
r.exposeAction(t,f),l&&r.addCase(f.fulfilled,l)
i&&r.addCase(f.pending,i)
u&&r.addCase(f.rejected,u)
c&&r.addMatcher(f.settled,c)
r.exposeCaseReducer(t,{fulfilled:l||He,pending:i||He,rejected:u||He,settled:c||He})}(l,o,i,t)})
const c=e=>e,s=new Map,f=new WeakMap
let d
function p(e,t){return d||(d=u()),d(e,t)}function m(){return d||(d=u()),d.getInitialState()}function h(t,n=!1){function r(e){let a=e[t]
return void 0===a&&n&&(a=Le(f,r,m)),a}function a(t=c){const r=Le(s,n,()=>new WeakMap)
return Le(r,t,()=>{const r={}
for(const[a,o]of Object.entries(e.selectors??{}))r[a]=Be(o,t,()=>Le(f,t,m),n)
return r})}return{reducerPath:t,getSelectors:a,get selectors(){return a(r)},selectSlice:r}}const v={name:n,reducer:p,actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){const a=t??r
return e.inject({reducerPath:a,reducer:p},n),{...v,...h(a,!0)}}}
return v}}function Be(e,t,n,r){function a(a,...o){let l=t(a)
return void 0===l&&r&&(l=n()),e(l,...o)}return a.unwrapped=e,a}var $e=Ge()
function He(){}var{assign:Ve}=Object
Symbol.for("rtk-state-proxy-original")
function We(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var qe,Qe=a(961),Ke=a.t(Qe,2)
function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xe.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(qe||(qe={}))
const Ye="popstate"
function Je(e,t){if(!1===e||null==e)throw new Error(t)}function Ze(e,t){if(!e){"undefined"!=typeof console&&console.warn(t)
try{throw new Error(t)}catch(e){}}}function et(e,t){return{usr:e.state,key:e.key,idx:t}}function tt(e,t,n,r){return void 0===n&&(n=null),Xe({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?rt(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function nt(e){let{pathname:t="/",search:n="",hash:r=""}=e
return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function rt(e){let t={}
if(e){let n=e.indexOf("#")
n>=0&&(t.hash=e.substr(n),e=e.substr(0,n))
let r=e.indexOf("?")
r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function at(e,t,n,r){void 0===r&&(r={})
let{window:a=document.defaultView,v5Compat:o=!1}=r,l=a.history,i=qe.Pop,u=null,c=s()
function s(){return(l.state||{idx:null}).idx}function f(){i=qe.Pop
let e=s(),t=null==e?null:e-c
c=e,u&&u({action:i,location:p.location,delta:t})}function d(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:nt(e)
return n=n.replace(/ $/,"%20"),Je(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,l.replaceState(Xe({},l.state,{idx:c}),""))
let p={get action(){return i},get location(){return e(a,l)},listen(e){if(u)throw new Error("A history only accepts one active listener")
return a.addEventListener(Ye,f),u=e,()=>{a.removeEventListener(Ye,f),u=null}},createHref:e=>t(a,e),createURL:d,encodeLocation(e){let t=d(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){i=qe.Push
let r=tt(p.location,e,t)
n&&n(r,e),c=s()+1
let f=et(r,c),d=p.createHref(r)
try{l.pushState(f,"",d)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e
a.location.assign(d)}o&&u&&u({action:i,location:p.location,delta:1})},replace:function(e,t){i=qe.Replace
let r=tt(p.location,e,t)
n&&n(r,e),c=s()
let a=et(r,c),f=p.createHref(r)
l.replaceState(a,"",f),o&&u&&u({action:i,location:p.location,delta:0})},go:e=>l.go(e)}
return p}var ot
!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(ot||(ot={}))
new Set(["lazy","caseSensitive","path","id","index","children"])
function lt(e,t,n){return void 0===n&&(n="/"),it(e,t,n,!1)}function it(e,t,n,r){let a=St(("string"==typeof t?rt(t):t).pathname||"/",n)
if(null==a)return null
let o=ut(e)
!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])
return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o)
let l=null
for(let e=0;null==l&&e<o.length;++e){let t=wt(a)
l=bt(o[e],t,r)}return l}function ut(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="")
let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e}
l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length))
let i=Ot([r,l.relativePath]),u=n.concat(l)
e.children&&e.children.length>0&&(Je(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+i+'".'),ut(e.children,t,u,i)),(null!=e.path||e.index)&&t.push({path:i,score:yt(i,e.index),routesMeta:u})}
return e.forEach((e,t)=>{var n
if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of ct(e.path))a(e,t,n)
else a(e,t)}),t}function ct(e){let t=e.split("/")
if(0===t.length)return[]
let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"")
if(0===r.length)return a?[o,""]:[o]
let l=ct(r.join("/")),i=[]
return i.push(...l.map(e=>""===e?o:[o,e].join("/"))),a&&i.push(...l),i.map(t=>e.startsWith("/")&&""===t?"/":t)}const st=/^:[\w-]+$/,ft=3,dt=2,pt=1,mt=10,ht=-2,vt=e=>"*"===e
function yt(e,t){let n=e.split("/"),r=n.length
return n.some(vt)&&(r+=ht),t&&(r+=dt),n.filter(e=>!vt(e)).reduce((e,t)=>e+(st.test(t)?ft:""===t?pt:mt),r)}function bt(e,t,n){void 0===n&&(n=!1)
let{routesMeta:r}=e,a={},o="/",l=[]
for(let e=0;e<r.length;++e){let i=r[e],u=e===r.length-1,c="/"===o?t:t.slice(o.length)||"/",s=gt({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},c),f=i.route
if(!s&&u&&n&&!r[r.length-1].route.index&&(s=gt({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},c)),!s)return null
Object.assign(a,s.params),l.push({params:a,pathname:Ot([o,s.pathname]),pathnameBase:Pt(Ot([o,s.pathnameBase])),route:f}),"/"!==s.pathnameBase&&(o=Ot([o,s.pathnameBase]))}return l}function gt(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0})
let[n,r]=function(e,t,n){void 0===t&&(t=!1)
void 0===n&&(n=!0)
Ze("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".')
let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"))
e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))")
let o=new RegExp(a,t?void 0:"i")
return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n)
if(!a)return null
let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1)
return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t
if("*"===r){let e=i[n]||""
l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const u=i[n]
return e[r]=a&&!u?void 0:(u||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:l,pattern:e}}function wt(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return Ze(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function St(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n)
return r&&"/"!==r?null:e.slice(n)||"/"}function Et(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function kt(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function _t(e,t){let n=kt(e)
return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function xt(e,t,n,r){let a
void 0===r&&(r=!1),"string"==typeof e?a=rt(e):(a=Xe({},e),Je(!a.pathname||!a.pathname.includes("?"),Et("?","pathname","search",a)),Je(!a.pathname||!a.pathname.includes("#"),Et("#","pathname","hash",a)),Je(!a.search||!a.search.includes("#"),Et("#","search","hash",a)))
let o,l=""===e||""===a.pathname,i=l?"/":a.pathname
if(null==i)o=n
else{let e=t.length-1
if(!r&&i.startsWith("..")){let t=i.split("/")
for(;".."===t[0];)t.shift(),e-=1
a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/")
let{pathname:n,search:r="",hash:a=""}="string"==typeof e?rt(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t
return{pathname:o,search:Ct(r),hash:Tt(a)}}(a,o),c=i&&"/"!==i&&i.endsWith("/"),s=(l||"."===i)&&n.endsWith("/")
return u.pathname.endsWith("/")||!c&&!s||(u.pathname+="/"),u}const Ot=e=>e.join("/").replace(/\/\/+/g,"/"),Pt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ct=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Tt=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
Error
function jt(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const Nt=["post","put","patch","delete"],zt=(new Set(Nt),["get",...Nt])
new Set(zt),new Set([301,302,303,307,308]),new Set([307,308])
Symbol("deferred")
function At(){return At=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},At.apply(this,arguments)}const Lt=o.createContext(null)
const Rt=o.createContext(null)
const Ft=o.createContext(null)
const Mt=o.createContext(null)
const Dt=o.createContext({outlet:null,matches:[],isDataRoute:!1})
const It=o.createContext(null)
function Ut(){return null!=o.useContext(Mt)}function Gt(){return Ut()||Je(!1),o.useContext(Mt).location}function Bt(e){o.useContext(Ft).static||o.useLayoutEffect(e)}function $t(){let{isDataRoute:e}=o.useContext(Dt)
return e?function(){let{router:e}=tn(Zt.UseNavigateStable),t=rn(en.UseNavigateStable),n=o.useRef(!1)
return Bt(()=>{n.current=!0}),o.useCallback(function(r,a){void 0===a&&(a={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,At({fromRouteId:t},a)))},[e,t])}():function(){Ut()||Je(!1)
let e=o.useContext(Lt),{basename:t,future:n,navigator:r}=o.useContext(Ft),{matches:a}=o.useContext(Dt),{pathname:l}=Gt(),i=JSON.stringify(_t(a,n.v7_relativeSplatPath)),u=o.useRef(!1)
return Bt(()=>{u.current=!0}),o.useCallback(function(n,a){if(void 0===a&&(a={}),!u.current)return
if("number"==typeof n)return void r.go(n)
let o=xt(n,JSON.parse(i),l,"path"===a.relative)
null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:Ot([t,o.pathname])),(a.replace?r.replace:r.push)(o,a.state,a)},[t,r,i,l,e])}()}const Ht=o.createContext(null)
function Vt(){let{matches:e}=o.useContext(Dt),t=e[e.length-1]
return t?t.params:{}}function Wt(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=o.useContext(Ft),{matches:a}=o.useContext(Dt),{pathname:l}=Gt(),i=JSON.stringify(_t(a,r.v7_relativeSplatPath))
return o.useMemo(()=>xt(e,JSON.parse(i),l,"path"===n),[e,i,l,n])}function qt(e,t,n,r){Ut()||Je(!1)
let{navigator:a}=o.useContext(Ft),{matches:l}=o.useContext(Dt),i=l[l.length-1],u=i?i.params:{},c=(i&&i.pathname,i?i.pathnameBase:"/")
i&&i.route
let s,f=Gt()
if(t){var d
let e="string"==typeof t?rt(t):t
"/"===c||(null==(d=e.pathname)?void 0:d.startsWith(c))||Je(!1),s=e}else s=f
let p=s.pathname||"/",m=p
if("/"!==c){let e=c.replace(/^\//,"").split("/")
m="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let h=lt(e,{pathname:m})
let v=Jt(h&&h.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:Ot([c,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Ot([c,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,n,r)
return t&&v?o.createElement(Mt.Provider,{value:{location:At({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:qe.Pop}},v):v}function Qt(){let e=function(){var e
let t=o.useContext(It),n=nn(en.UseRouteError),r=rn(en.UseRouteError)
if(void 0!==t)return t
return null==(e=n.errors)?void 0:e[r]}(),t=jt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r}
return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:a},n):null,null)}const Kt=o.createElement(Qt,null)
class Xt extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(Dt.Provider,{value:this.props.routeContext},o.createElement(It.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yt(e){let{routeContext:t,match:n,children:r}=e,a=o.useContext(Lt)
return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(Dt.Provider,{value:t},r)}function Jt(e,t,n,r){var a
if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var l
if(!n)return null
if(n.errors)e=n.matches
else{if(!(null!=(l=r)&&l.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null
e=n.matches}}let i=e,u=null==(a=n)?void 0:a.errors
if(null!=u){let e=i.findIndex(e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id]))
e>=0||Je(!1),i=i.slice(0,Math.min(i.length,e+1))}let c=!1,s=-1
if(n&&r&&r.v7_partialHydration)for(let e=0;e<i.length;e++){let t=i[e]
if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:r}=n,a=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id])
if(t.route.lazy||a){c=!0,i=s>=0?i.slice(0,s+1):[i[0]]
break}}}return i.reduceRight((e,r,a)=>{let l,f=!1,d=null,p=null
var m
n&&(l=u&&r.route.id?u[r.route.id]:void 0,d=r.route.errorElement||Kt,c&&(s<0&&0===a?(m="route-fallback",!1||an[m]||(an[m]=!0),f=!0,p=null):s===a&&(f=!0,p=r.route.hydrateFallbackElement||null)))
let h=t.concat(i.slice(0,a+1)),v=()=>{let t
return t=l?d:f?p:r.route.Component?o.createElement(r.route.Component,null):r.route.element?r.route.element:e,o.createElement(Yt,{match:r,routeContext:{outlet:e,matches:h,isDataRoute:null!=n},children:t})}
return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?o.createElement(Xt,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var Zt=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zt||{}),en=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(en||{})
function tn(e){let t=o.useContext(Lt)
return t||Je(!1),t}function nn(e){let t=o.useContext(Rt)
return t||Je(!1),t}function rn(e){let t=function(){let e=o.useContext(Dt)
return e||Je(!1),e}(),n=t.matches[t.matches.length-1]
return n.route.id||Je(!1),n.route.id}const an={}
function on(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}l.startTransition
function ln(e){return function(e){let t=o.useContext(Dt).outlet
return t?o.createElement(Ht.Provider,{value:e},t):t}(e.context)}function un(e){Je(!1)}function cn(e){let{basename:t="/",children:n=null,location:r,navigationType:a=qe.Pop,navigator:l,static:i=!1,future:u}=e
Ut()&&Je(!1)
let c=t.replace(/^\/*/,"/"),s=o.useMemo(()=>({basename:c,navigator:l,static:i,future:At({v7_relativeSplatPath:!1},u)}),[c,u,l,i])
"string"==typeof r&&(r=rt(r))
let{pathname:f="/",search:d="",hash:p="",state:m=null,key:h="default"}=r,v=o.useMemo(()=>{let e=St(f,c)
return null==e?null:{location:{pathname:e,search:d,hash:p,state:m,key:h},navigationType:a}},[c,f,d,p,m,h,a])
return null==v?null:o.createElement(Ft.Provider,{value:s},o.createElement(Mt.Provider,{children:n,value:v}))}function sn(e){let{children:t,location:n}=e
return qt(fn(t),n)}new Promise(()=>{})
o.Component
function fn(e,t){void 0===t&&(t=[])
let n=[]
return o.Children.forEach(e,(e,r)=>{if(!o.isValidElement(e))return
let a=[...t,r]
if(e.type===o.Fragment)return void n.push.apply(n,fn(e.props.children,a))
e.type!==un&&Je(!1),e.props.index&&e.props.children&&Je(!1)
let l={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy}
e.props.children&&(l.children=fn(e.props.children,a)),n.push(l)}),n}function dn(){return dn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dn.apply(this,arguments)}function pn(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n])
return a}function mn(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n]
return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
const hn=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"]
try{window.__reactRouterVersion="6"}catch(e){}new Map
const vn=l.startTransition
Ke.flushSync,l.useId
function yn(e){let{basename:t,children:n,future:r,window:a}=e,l=o.useRef()
var i
null==l.current&&(l.current=(void 0===(i={window:a,v5Compat:!0})&&(i={}),at(function(e,t){let{pathname:n,search:r,hash:a}=e.location
return tt("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:nt(t)},null,i)))
let u=l.current,[c,s]=o.useState({action:u.action,location:u.location}),{v7_startTransition:f}=r||{},d=o.useCallback(e=>{f&&vn?vn(()=>s(e)):s(e)},[s,f])
return o.useLayoutEffect(()=>u.listen(d),[u,d]),o.useEffect(()=>on(r),[r]),o.createElement(cn,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:u,future:r})}const bn="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,gn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wn=o.forwardRef(function(e,t){let n,{onClick:r,relative:a,reloadDocument:l,replace:i,state:u,target:c,to:s,preventScrollReset:f,viewTransition:d}=e,p=pn(e,hn),{basename:m}=o.useContext(Ft),h=!1
if("string"==typeof s&&gn.test(s)&&(n=s,bn))try{let e=new URL(window.location.href),t=s.startsWith("//")?new URL(e.protocol+s):new URL(s),n=St(t.pathname,m)
t.origin===e.origin&&null!=n?s=n+t.search+t.hash:h=!0}catch(e){}let v=function(e,t){let{relative:n}=void 0===t?{}:t
Ut()||Je(!1)
let{basename:r,navigator:a}=o.useContext(Ft),{hash:l,pathname:i,search:u}=Wt(e,{relative:n}),c=i
return"/"!==r&&(c="/"===i?r:Ot([r,i])),a.createHref({pathname:c,search:u,hash:l})}(s,{relative:a}),y=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:i,viewTransition:u}=void 0===t?{}:t,c=$t(),s=Gt(),f=Wt(e,{relative:i})
return o.useCallback(t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault()
let n=void 0!==r?r:nt(s)===nt(f)
c(e,{replace:n,state:a,preventScrollReset:l,relative:i,viewTransition:u})}},[s,c,f,r,a,n,e,l,i,u])}(s,{replace:i,state:u,target:c,preventScrollReset:f,relative:a,viewTransition:d})
return o.createElement("a",dn({},p,{href:n||v,onClick:h||l?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:t,target:c}))})
var Sn,En
function kn(e){let t=o.useRef(mn(e)),n=o.useRef(!1),r=Gt(),a=o.useMemo(()=>function(e,t){let n=mn(e)
return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}(r.search,n.current?null:t.current),[r.search]),l=$t(),i=o.useCallback((e,t)=>{const r=mn("function"==typeof e?e(a):e)
n.current=!0,l("?"+r,t)},[l,a])
return[a,i]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sn||(Sn={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(En||(En={}))
function _n(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return xn(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(xn(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,xn(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,xn(f,"constructor",c),xn(c,"constructor",u),u.displayName="GeneratorFunction",xn(c,a,"GeneratorFunction"),xn(f),xn(f,a,"Generator"),xn(f,r,function(){return this}),xn(f,"toString",function(){return"[object Generator]"}),(_n=function(){return{w:o,m:d}})()}function xn(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}xn=function(e,t,n,r){function o(t,n){xn(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},xn(e,t,n,r)}function On(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Pn(e,t,n,r){return Cn.apply(this,arguments)}function Cn(){var e
return e=_n().m(function e(t,n,r,a){var o,l,i
return _n().w(function(e){for(;;)switch(e.n){case 0:return o={method:n},r&&(o.headers={"Content-Type":"application/json"},o.body=JSON.stringify(r)),e.n=1,fetch(t,o)
case 1:return l=e.v,e.n=2,l.json()
case 2:return i=e.v,a&&a(i),e.a(2,i)}},e)}),Cn=function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){On(o,r,a,l,i,"next",e)}function i(e){On(o,r,a,l,i,"throw",e)}l(void 0)})},Cn.apply(this,arguments)}var Tn=$e({name:"project",initialState:{projects:[],selected:null},reducers:{setProjects:function(e,t){e.projects=t.payload},selectProject:function(e,t){e.selected=t.payload}}}),jn=Tn.actions,Nn=$e({name:"board",initialState:{boards:{},selected:null,columns:[]},reducers:{setBoards:function(e,t){t.payload.forEach(function(t){e.boards[t.project]||(e.boards[t.project]=[])
var n=e.boards[t.project].find(function(e){return e.id==t.id})
n?Object.assign(n,t):e.boards[t.project].push(t)})},selectBoard:function(e,t){e.selected=t.payload},setColumns:function(e,t){e.columns=t.payload}}}),zn=Nn.actions,An=$e({name:"ticket",initialState:{tickets:[],ticketsByColumn:{},boardid:null},reducers:{setBoardId:function(e,t){e.boardid=t.payload.boardid},setTickets:function(e,t){e.tickets=t.payload,e.ticketsByColumn={},e.tickets.forEach(function(t){e.ticketsByColumn[t.column]||(e.ticketsByColumn[t.column]=[]),e.ticketsByColumn[t.column].push(t)})}}}),Ln=An.actions
function Rn(){var e=C(function(e){return e.project.projects}),t=x();(0,o.useEffect)(function(){return Pn("/api/projects","GET",null,function(e){return t(jn.setProjects(e))}),function(){}},[])
var n=e.map(function(e){return o.createElement("div",{key:e.id},o.createElement(wn,{to:"/projects/edit/"+e.id,className:"edit-btn"},"Edit"),o.createElement("span",null," "),o.createElement(wn,{to:"/projects/view/"+e.id,className:"view-btn"},e.title," [",e.id,"]"),o.createElement("span",null," "),o.createElement(wn,{to:"/boards/create?projectid="+e.id,className:"create-board-btn"},"Create Board"),o.createElement("span",null," "),o.createElement(wn,{to:"/boards/list/"+e.id,className:"view-boards-btn"},"View Boards"))})
return o.createElement("div",null,o.createElement("h2",null,"List Projects"),o.createElement("div",{className:"projects-list"},n))}function Fn(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return Mn(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(Mn(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,Mn(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,Mn(f,"constructor",c),Mn(c,"constructor",u),u.displayName="GeneratorFunction",Mn(c,a,"GeneratorFunction"),Mn(f),Mn(f,a,"Generator"),Mn(f,r,function(){return this}),Mn(f,"toString",function(){return"[object Generator]"}),(Fn=function(){return{w:o,m:d}})()}function Mn(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}Mn=function(e,t,n,r){function o(t,n){Mn(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},Mn(e,t,n,r)}function Dn(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function In(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){Dn(o,r,a,l,i,"next",e)}function i(e){Dn(o,r,a,l,i,"throw",e)}l(void 0)})}}function Un(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Gn(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gn(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Gn(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function Bn(e){var t=e.projectid,n=Un((0,o.useState)(null),2),r=n[0],a=n[1]
return(0,o.useMemo)(In(Fn().m(function e(){var n
return Fn().w(function(e){for(;;)switch(e.n){case 0:return n=a,e.n=1,Pn("/api/projects/"+t,"GET")
case 1:return e.a(2,n(e.v))}},e)})),[t]),o.createElement("div",null,o.createElement("h2",null,"Project View"),o.createElement("div",{className:"project-view"},o.createElement("div",null,"Id: ",r?r.id:"Loading"),o.createElement("div",null,"Name: ",r&&r.name),o.createElement("div",null,"Title: ",r&&r.title),o.createElement("div",null,"Description: ",r&&r.description),o.createElement("div",null,"Created At: ",r&&r.createdAt),o.createElement("div",null,"Updated At: ",r&&r.updatedAt),o.createElement("div",null,o.createElement(wn,{to:"/projects/edit/"+t,className:"nav-btn"},"Edit Project"))))}function $n(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return Hn(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(Hn(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,Hn(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,Hn(f,"constructor",c),Hn(c,"constructor",u),u.displayName="GeneratorFunction",Hn(c,a,"GeneratorFunction"),Hn(f),Hn(f,a,"Generator"),Hn(f,r,function(){return this}),Hn(f,"toString",function(){return"[object Generator]"}),($n=function(){return{w:o,m:d}})()}function Hn(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}Hn=function(e,t,n,r){function o(t,n){Hn(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},Hn(e,t,n,r)}function Vn(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Wn(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){Vn(o,r,a,l,i,"next",e)}function i(e){Vn(o,r,a,l,i,"throw",e)}l(void 0)})}}function qn(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Qn(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qn(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qn(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function Kn(e){var t=e.projectid,n=qn((0,o.useState)(null),2),r=n[0],a=n[1];(0,o.useMemo)(Wn($n().m(function e(){var n,r
return $n().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Pn("/api/projects/"+t,"GET")
case 1:n=e.v,(r=l.current).name.value=n.name,r.title.value=n.title,r.description.value=n.description,a(n)
case 2:return e.a(2)}},e)})),[t])
var l=(0,o.useRef)()
function i(){return(i=Wn($n().m(function e(n){var r,a
return $n().w(function(e){for(;;)switch(e.n){case 0:return n.preventDefault(),r=l.current,a={name:r.name.value,title:r.title.value,description:r.description.value},e.n=1,Pn("/api/projects/"+t,"POST",a)
case 1:return e.a(2)}},e)}))).apply(this,arguments)}return o.createElement("div",null,o.createElement("h2",null,"Project Edit [",r&&r.id,"]"),o.createElement("div",{className:"project-edit"},o.createElement("div",null,o.createElement(wn,{to:"/projects/view/"+t,className:"nav-btn"},"View Project")),o.createElement("form",{ref:l,className:"form-edit",onSubmit:function(e){return i.apply(this,arguments)}},o.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0}),o.createElement("br",null),o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("textarea",{name:"description",placeholder:"Description",required:!0}),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function Xn(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return Yn(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(Yn(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,Yn(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,Yn(f,"constructor",c),Yn(c,"constructor",u),u.displayName="GeneratorFunction",Yn(c,a,"GeneratorFunction"),Yn(f),Yn(f,a,"Generator"),Yn(f,r,function(){return this}),Yn(f,"toString",function(){return"[object Generator]"}),(Xn=function(){return{w:o,m:d}})()}function Yn(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}Yn=function(e,t,n,r){function o(t,n){Yn(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},Yn(e,t,n,r)}function Jn(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Zn(){var e=(0,o.useRef)(),t=$t()
function n(){var r
return r=Xn().m(function n(r){var a,o,l
return Xn().w(function(n){for(;;)switch(n.n){case 0:return r.preventDefault(),a=e.current,o={name:a.name.value,title:a.title.value,description:a.description.value},n.n=1,Pn("/api/projects","POST",o)
case 1:l=n.v,t("/projects/view/"+l.id)
case 2:return n.a(2)}},n)}),n=function(){var e=this,t=arguments
return new Promise(function(n,a){var o=r.apply(e,t)
function l(e){Jn(o,n,a,l,i,"next",e)}function i(e){Jn(o,n,a,l,i,"throw",e)}l(void 0)})},n.apply(this,arguments)}return o.createElement("div",null,o.createElement("h2",null,"Project Create"),o.createElement("div",{className:"project-create"},o.createElement("form",{ref:e,className:"form-create",onSubmit:function(e){return n.apply(this,arguments)}},o.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0}),o.createElement("br",null),o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("textarea",{name:"description",placeholder:"Description",required:!0}),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function er(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return tr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(tr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,tr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,tr(f,"constructor",c),tr(c,"constructor",u),u.displayName="GeneratorFunction",tr(c,a,"GeneratorFunction"),tr(f),tr(f,a,"Generator"),tr(f,r,function(){return this}),tr(f,"toString",function(){return"[object Generator]"}),(er=function(){return{w:o,m:d}})()}function tr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}tr=function(e,t,n,r){function o(t,n){tr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},tr(e,t,n,r)}function nr(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function rr(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){nr(o,r,a,l,i,"next",e)}function i(e){nr(o,r,a,l,i,"throw",e)}l(void 0)})}}function ar(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return or(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?or(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function or(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function lr(){var e=ar(kn(),1)[0].get("projectid"),t=ar((0,o.useState)(e),2),n=t[0],r=t[1],a=(0,o.useRef)(),l=$t(),i=C(function(e){return e.project.projects}),u=x()
function c(){return(c=rr(er().m(function e(t){var n,r,o
return er().w(function(e){for(;;)switch(e.n){case 0:return t.preventDefault(),n=a.current,r={name:n.name.value,title:n.title.value,project:+n.project.value},e.n=1,Pn("/api/boards","POST",r)
case 1:o=e.v,l("/boards/view/"+o.id)
case 2:return e.a(2)}},e)}))).apply(this,arguments)}(0,o.useMemo)(rr(er().m(function e(){var t,n
return er().w(function(e){for(;;)switch(e.n){case 0:return t=u,n=jn,e.n=1,Pn("/api/projects","GET")
case 1:return e.a(2,t(n.setProjects.call(n,e.v)))}},e)})),[])
var s=i.map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Board Create"),o.createElement("div",{className:"board-create"},o.createElement("form",{ref:a,className:"form-create",onSubmit:function(e){return c.apply(this,arguments)}},o.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0}),o.createElement("br",null),o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("select",{name:"project",onChange:function(){r(+a.current.project.value)},value:n},s),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function ir(e){var t=e.projectid,n=C(function(e){return e.board.boards}),r=x();(0,o.useEffect)(function(){return Pn("/api/boards/project/"+t,"GET",null,function(e){return r(zn.setBoards(e))}),function(){}},[t])
var a=(n[t]||[]).map(function(e){return o.createElement("div",{key:e.id},o.createElement(wn,{to:"/boards/edit/"+e.id,className:"edit-btn"},"Edit"),o.createElement("span",null," "),o.createElement(wn,{to:"/boards/view/"+e.id,className:"view-btn"},e.title," [",e.id,"]"),o.createElement("span",null," "),o.createElement(wn,{to:"/boards/create_column?boardid="+e.id,className:"create-column-btn"},"Create Column"),o.createElement("span",null," "),o.createElement(wn,{to:"/tickets/create?boardid="+e.id,className:"create-ticket-btn"},"Create Ticket"),o.createElement("span",null," "),o.createElement(wn,{to:"/boards/view_columns/"+e.id,className:"view-board-columns-btn"},"View Board Columns"))})
return o.createElement("div",null,o.createElement("h2",null,"List Boards By Project"),o.createElement("div",{className:"boards-list"},a))}function ur(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return cr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(cr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,cr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,cr(f,"constructor",c),cr(c,"constructor",u),u.displayName="GeneratorFunction",cr(c,a,"GeneratorFunction"),cr(f),cr(f,a,"Generator"),cr(f,r,function(){return this}),cr(f,"toString",function(){return"[object Generator]"}),(ur=function(){return{w:o,m:d}})()}function cr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}cr=function(e,t,n,r){function o(t,n){cr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},cr(e,t,n,r)}function sr(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function fr(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){sr(o,r,a,l,i,"next",e)}function i(e){sr(o,r,a,l,i,"throw",e)}l(void 0)})}}function dr(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return pr(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pr(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pr(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function mr(e){var t,n=e.boardid,r=dr((0,o.useState)(),2),a=r[0],l=r[1],i=dr((0,o.useState)(),2),u=i[0],c=i[1]
return(0,o.useMemo)(fr(ur().m(function e(){var t
return ur().w(function(e){for(;;)switch(e.n){case 0:return t=l,e.n=1,Pn("/api/boards/"+n,"GET")
case 1:return e.a(2,t(e.v))}},e)})),[n]),(0,o.useMemo)(fr(ur().m(function e(){return ur().w(function(e){for(;;)switch(e.n){case 0:if(!a||!a.project){e.n=2
break}return e.n=1,Pn("/api/projects/"+a.project,"GET")
case 1:a.projectobj=e.v,c(a)
case 2:return e.a(2)}},e)})),a),u&&(t=a.projectobj?a.projectobj.title+"["+a.project+"]":a.project),o.createElement("div",null,o.createElement("h2",null,"Board View"),o.createElement("div",{className:"board-view"},o.createElement("div",null,"Id: ",a?a.id:"Loading"),o.createElement("div",null,"Name: ",a&&a.name),o.createElement("div",null,"Title: ",a&&a.title),o.createElement("div",null,"Project: ",a&&t),o.createElement("div",null,"Created At: ",a&&a.createdAt),o.createElement("div",null,"Updated At: ",a&&a.updatedAt),o.createElement("div",null,o.createElement(wn,{to:"/boards/edit/"+n,className:"nav-btn"},"Edit Board"),o.createElement("br",null),o.createElement(wn,{to:a&&a.project?"/boards/list/"+a.project:"",className:"nav-btn"},"List Boards by Project"))))}function hr(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return vr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(vr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,vr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,vr(f,"constructor",c),vr(c,"constructor",u),u.displayName="GeneratorFunction",vr(c,a,"GeneratorFunction"),vr(f),vr(f,a,"Generator"),vr(f,r,function(){return this}),vr(f,"toString",function(){return"[object Generator]"}),(hr=function(){return{w:o,m:d}})()}function vr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}vr=function(e,t,n,r){function o(t,n){vr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},vr(e,t,n,r)}function yr(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function br(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){yr(o,r,a,l,i,"next",e)}function i(e){yr(o,r,a,l,i,"throw",e)}l(void 0)})}}function gr(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return wr(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wr(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wr(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function Sr(e){var t=e.boardid,n=gr((0,o.useState)(null),2),r=n[0],a=n[1];(0,o.useMemo)(br(hr().m(function e(){var n,r
return hr().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Pn("/api/boards/"+t,"GET")
case 1:n=e.v,(r=l.current).name.value=n.name,r.title.value=n.title,d(n.project),a(n)
case 2:return e.a(2)}},e)})),[t])
var l=(0,o.useRef)(),i=C(function(e){return e.project.projects}),u=x();(0,o.useMemo)(br(hr().m(function e(){var t,n
return hr().w(function(e){for(;;)switch(e.n){case 0:return t=u,n=jn,e.n=1,Pn("/api/projects","GET")
case 1:return e.a(2,t(n.setProjects.call(n,e.v)))}},e)})),[])
var c=(null==r?void 0:r.project)||null,s=gr((0,o.useState)(c),2),f=s[0],d=s[1]
function p(){return(p=br(hr().m(function e(n){var r,a
return hr().w(function(e){for(;;)switch(e.n){case 0:return n.preventDefault(),r=l.current,a={name:r.name.value,title:r.title.value,project:+r.project.value},e.n=1,Pn("/api/boards/"+t,"POST",a)
case 1:return e.a(2)}},e)}))).apply(this,arguments)}var m=i.map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Board Edit [",r&&r.id,"]"),o.createElement("div",{className:"board-edit"},o.createElement("div",null,o.createElement(wn,{to:"/boards/view/"+t,className:"nav-btn"},"View Board")),o.createElement("form",{ref:l,className:"form-edit",onSubmit:function(e){return p.apply(this,arguments)}},o.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0}),o.createElement("br",null),o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("select",{name:"project",onChange:function(){d(+l.current.project.value)},value:f},m),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function Er(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return kr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(kr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,kr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,kr(f,"constructor",c),kr(c,"constructor",u),u.displayName="GeneratorFunction",kr(c,a,"GeneratorFunction"),kr(f),kr(f,a,"Generator"),kr(f,r,function(){return this}),kr(f,"toString",function(){return"[object Generator]"}),(Er=function(){return{w:o,m:d}})()}function kr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}kr=function(e,t,n,r){function o(t,n){kr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},kr(e,t,n,r)}function _r(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function xr(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){_r(o,r,a,l,i,"next",e)}function i(e){_r(o,r,a,l,i,"throw",e)}l(void 0)})}}function Or(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Pr(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pr(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pr(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function Cr(){var e=Or(kn(),1)[0].get("boardid"),t=Or((0,o.useState)(e),2),n=t[0],r=t[1],a=Or((0,o.useReducer)(function(e,t){if("getBoard"===t.type)return t.payload},{id:e}),2),l=a[0],i=a[1];(0,o.useMemo)(xr(Er().m(function t(){var n,r
return Er().w(function(t){for(;;)switch(t.n){case 0:return n=i,t.n=1,Pn("/api/boards/"+e,"GET")
case 1:return r=t.v,t.a(2,n({payload:r,type:"getBoard"}))}},t)})),[])
var u=(0,o.useRef)(),c=$t(),s=C(function(e){return e.board.boards}),f=x()
function d(){return(d=xr(Er().m(function e(t){var n,r
return Er().w(function(e){for(;;)switch(e.n){case 0:return t.preventDefault(),n=u.current,r={name:n.name.value,title:n.title.value,board:+n.board.value,index:+n.index.value},e.n=1,Pn("/api/boards/column/create","POST",r)
case 1:c("/boards/view_columns/"+r.board)
case 2:return e.a(2)}},e)}))).apply(this,arguments)}(0,o.useMemo)(xr(Er().m(function e(){var t,n
return Er().w(function(e){for(;;)switch(e.n){case 0:if(!l.project){e.n=2
break}return t=f,n=zn,e.n=1,Pn("/api/boards/project/"+l.project,"GET")
case 1:t(n.setBoards.call(n,e.v))
case 2:return e.a(2)}},e)})),[l])
var p=(s[l.project]||[]).map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Column Create"),o.createElement("div",{className:"column-create"},o.createElement("form",{ref:u,className:"form-create",onSubmit:function(e){return d.apply(this,arguments)}},o.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0}),o.createElement("br",null),o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("select",{name:"board",onChange:function(){r(+u.current.board.value)},value:n},p),o.createElement("br",null),o.createElement("input",{type:"number",name:"index",placeholder:"Index",required:!0}),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function Tr(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return jr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(jr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,jr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,jr(f,"constructor",c),jr(c,"constructor",u),u.displayName="GeneratorFunction",jr(c,a,"GeneratorFunction"),jr(f),jr(f,a,"Generator"),jr(f,r,function(){return this}),jr(f,"toString",function(){return"[object Generator]"}),(Tr=function(){return{w:o,m:d}})()}function jr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}jr=function(e,t,n,r){function o(t,n){jr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},jr(e,t,n,r)}function Nr(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function zr(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){Nr(o,r,a,l,i,"next",e)}function i(e){Nr(o,r,a,l,i,"throw",e)}l(void 0)})}}function Ar(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Lr(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lr(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Lr(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function Rr(e){var t=e.columnid,n=Ar((0,o.useState)(),2),r=(n[0],n[1]);(0,o.useMemo)(zr(Tr().m(function e(){var n,a
return Tr().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Pn("/api/boards/column/"+t,"GET")
case 1:n=e.v,(a=f.current).name.value=n.name,a.title.value=n.title,a.index.value=n.index,i(n.board),r(n)
case 2:return e.a(2)}},e)})),[t])
var a=Ar((0,o.useState)(),2),l=a[0],i=a[1],u=Ar((0,o.useReducer)(function(e,t){if("getBoard"===t.type)return t.payload},{id:l}),2),c=u[0],s=u[1];(0,o.useMemo)(zr(Tr().m(function e(){var t,n
return Tr().w(function(e){for(;;)switch(e.n){case 0:if(!l){e.n=2
break}return t=s,e.n=1,Pn("/api/boards/"+l)
case 1:n=e.v,t({payload:n,type:"getBoard"},"GET")
case 2:return e.a(2)}},e)})),[l])
var f=(0,o.useRef)(),d=$t(),p=C(function(e){return e.board.boards}),m=x()
function h(){return(h=zr(Tr().m(function e(n){var r,a
return Tr().w(function(e){for(;;)switch(e.n){case 0:return n.preventDefault(),r=f.current,a={name:r.name.value,title:r.title.value,board:+r.board.value,index:+r.index.value},e.n=1,Pn("/api/boards/column/"+t,"POST",a)
case 1:d("/boards/view_columns/"+a.board)
case 2:return e.a(2)}},e)}))).apply(this,arguments)}(0,o.useMemo)(zr(Tr().m(function e(){var t,n
return Tr().w(function(e){for(;;)switch(e.n){case 0:if(!c.project){e.n=2
break}return t=m,n=zn,e.n=1,Pn("/api/boards/project/"+c.project,"GET")
case 1:t(n.setBoards.call(n,e.v))
case 2:return e.a(2)}},e)})),[c])
var v=(p[c.project]||[]).map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Column Edit"),o.createElement("div",{className:"column-edit"},o.createElement("form",{ref:f,className:"form-edit",onSubmit:function(e){return h.apply(this,arguments)}},o.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0}),o.createElement("br",null),o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("select",{name:"board",onChange:function(){i(+f.current.board.value)},value:l},v),o.createElement("br",null),o.createElement("input",{type:"number",name:"index",placeholder:"Index",required:!0}),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function Fr(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return Mr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(Mr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,Mr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,Mr(f,"constructor",c),Mr(c,"constructor",u),u.displayName="GeneratorFunction",Mr(c,a,"GeneratorFunction"),Mr(f),Mr(f,a,"Generator"),Mr(f,r,function(){return this}),Mr(f,"toString",function(){return"[object Generator]"}),(Fr=function(){return{w:o,m:d}})()}function Mr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}Mr=function(e,t,n,r){function o(t,n){Mr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},Mr(e,t,n,r)}function Dr(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Ir(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){Dr(o,r,a,l,i,"next",e)}function i(e){Dr(o,r,a,l,i,"throw",e)}l(void 0)})}}function Ur(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Gr(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gr(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Gr(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function Br(e){var t=e.boardid,n=Ur((0,o.useState)(t),2),r=n[0],a=n[1],l=Ur((0,o.useState)({id:t}),2),i=l[0],u=l[1],c=Ur((0,o.useState)(),2),s=c[0],f=c[1];(0,o.useMemo)(Ir(Fr().m(function e(){var n
return Fr().w(function(e){for(;;)switch(e.n){case 0:return n=u,e.n=1,Pn("/api/boards/"+t,"GET")
case 1:return e.a(2,n(e.v))}},e)})),[t])
var d=(0,o.useRef)(),p=$t(),m=C(function(e){return e.board.boards}),h=x()
function v(){return(v=Ir(Fr().m(function e(t){var n,r,a
return Fr().w(function(e){for(;;)switch(e.n){case 0:return t.preventDefault(),n=d.current,r={title:n.title.value,description:n.description.value,board:+n.board.value,column:+n.column.value},e.n=1,Pn("/api/tickets","POST",r)
case 1:a=e.v,p("/tickets/view/"+a.id)
case 2:return e.a(2)}},e)}))).apply(this,arguments)}(0,o.useMemo)(Ir(Fr().m(function e(){var t,n
return Fr().w(function(e){for(;;)switch(e.n){case 0:if(!i.project){e.n=2
break}return t=h,n=zn,e.n=1,Pn("/api/boards/project/"+i.project,"GET")
case 1:t(n.setBoards.call(n,e.v))
case 2:return e.a(2)}},e)})),[i]),(0,o.useMemo)(Ir(Fr().m(function e(){var t
return Fr().w(function(e){for(;;)switch(e.n){case 0:return t=f,e.n=1,Pn("/api/boards/column_board/"+r,"GET")
case 1:return e.a(2,t(e.v))}},e)})),[r])
var y=(m[i.project]||[]).map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")}),b=(s||[]).map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Create Ticket"),o.createElement("div",{className:"ticket-create"},o.createElement("form",{ref:d,className:"form-create",onSubmit:function(e){return v.apply(this,arguments)}},o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("textarea",{name:"description",placeholder:"Description",required:!0}),o.createElement("br",null),o.createElement("select",{name:"board",onChange:function(){a(+d.current.board.value)},value:r},y),o.createElement("br",null),o.createElement("select",{name:"column"},b),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function $r(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return Hr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(Hr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,Hr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,Hr(f,"constructor",c),Hr(c,"constructor",u),u.displayName="GeneratorFunction",Hr(c,a,"GeneratorFunction"),Hr(f),Hr(f,a,"Generator"),Hr(f,r,function(){return this}),Hr(f,"toString",function(){return"[object Generator]"}),($r=function(){return{w:o,m:d}})()}function Hr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}Hr=function(e,t,n,r){function o(t,n){Hr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},Hr(e,t,n,r)}function Vr(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Wr(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){Vr(o,r,a,l,i,"next",e)}function i(e){Vr(o,r,a,l,i,"throw",e)}l(void 0)})}}function qr(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Qr(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qr(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qr(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function Kr(e){var t=e.ticketid,n=qr((0,o.useState)(),2),r=n[0],a=n[1];(0,o.useMemo)(Wr($r().m(function e(){var n,r
return $r().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Pn("/api/tickets/"+t,"GET")
case 1:n=e.v,a(n),(r=b.current).title.value=n.title,r.description.value=n.description,u(n.board),f(n.column)
case 2:return e.a(2)}},e)})),[t])
var l=qr((0,o.useState)(),2),i=l[0],u=l[1],c=qr((0,o.useState)(),2),s=c[0],f=c[1],d=qr((0,o.useState)({id:null}),2),p=d[0],m=d[1],h=qr((0,o.useState)(),2),v=h[0],y=h[1];(0,o.useMemo)(Wr($r().m(function e(){var t
return $r().w(function(e){for(;;)switch(e.n){case 0:if(!r||!r.board){e.n=2
break}return t=m,e.n=1,Pn("/api/boards/"+r.board,"GET")
case 1:t(e.v)
case 2:return e.a(2)}},e)})),[r])
var b=(0,o.useRef)(),g=C(function(e){return e.board.boards}),w=x();(0,o.useMemo)(Wr($r().m(function e(){var t,n
return $r().w(function(e){for(;;)switch(e.n){case 0:if(!p||!p.project){e.n=2
break}return t=w,n=zn,e.n=1,Pn("/api/boards/project/"+p.project,"GET")
case 1:t(n.setBoards.call(n,e.v))
case 2:return e.a(2)}},e)})),[p]),(0,o.useMemo)(Wr($r().m(function e(){var t
return $r().w(function(e){for(;;)switch(e.n){case 0:if(!i){e.n=2
break}return t=y,e.n=1,Pn("/api/boards/column_board/"+i,"GET")
case 1:t(e.v)
case 2:return e.a(2)}},e)})),[i])
var S=$t()
function E(){return(E=Wr($r().m(function e(n){var r,a
return $r().w(function(e){for(;;)switch(e.n){case 0:return n.preventDefault(),r=b.current,a={title:r.title.value,description:r.description.value,board:+r.board.value,column:+r.column.value},e.n=1,Pn("/api/tickets/"+t,"POST",a)
case 1:S("/tickets/view/"+t)
case 2:return e.a(2)}},e)}))).apply(this,arguments)}var k=(g[p.project]||[]).map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")}),_=(v||[]).map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Edit Ticket [",t,"]"),o.createElement("div",{className:"ticket-edit"},o.createElement("div",null,o.createElement(wn,{to:"/tickets/view/"+t,className:"nav-btn"},"View Ticket")),o.createElement("form",{ref:b,className:"form-create",onSubmit:function(e){return E.apply(this,arguments)}},o.createElement("input",{type:"text",name:"title",placeholder:"Title",required:!0}),o.createElement("br",null),o.createElement("textarea",{name:"description",placeholder:"Description",required:!0}),o.createElement("br",null),o.createElement("select",{name:"board",onChange:function(){u(+b.current.board.value)},value:i},k),o.createElement("br",null),o.createElement("select",{name:"column",onChange:function(){f(+b.current.column.value)},value:s},_),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function Xr(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return Yr(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(Yr(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,Yr(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,Yr(f,"constructor",c),Yr(c,"constructor",u),u.displayName="GeneratorFunction",Yr(c,a,"GeneratorFunction"),Yr(f),Yr(f,a,"Generator"),Yr(f,r,function(){return this}),Yr(f,"toString",function(){return"[object Generator]"}),(Xr=function(){return{w:o,m:d}})()}function Yr(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}Yr=function(e,t,n,r){function o(t,n){Yr(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},Yr(e,t,n,r)}function Jr(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Zr(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){Jr(o,r,a,l,i,"next",e)}function i(e){Jr(o,r,a,l,i,"throw",e)}l(void 0)})}}function ea(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ta(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ta(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ta(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function na(e){var t=e.ticketid,n=ea((0,o.useState)(),2),r=n[0],a=n[1];(0,o.useMemo)(Zr(Xr().m(function e(){var n
return Xr().w(function(e){for(;;)switch(e.n){case 0:return n=a,e.n=1,Pn("/api/tickets/comment_ticket/"+t,"GET")
case 1:return e.a(2,n(e.v))}},e)})),[t])
var l=(r||[]).map(function(e){return o.createElement("div",{key:e.id,className:"comment-item"},o.createElement("div",null,"Id: [",e.id,"]"),o.createElement("div",null,o.createElement(wn,{to:"/tickets/edit_comment/"+e.id,className:"nav-btn"},"Edit Comment")),o.createElement("div",null,o.createElement("b",null,"Username:")," ",e.username),o.createElement("div",null,o.createElement("b",null,"Text:")),o.createElement("div",null,e.text))})
return o.createElement("div",null,o.createElement("h2",null,"Comments"),o.createElement("div",null,l))}function ra(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return aa(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(aa(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,aa(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,aa(f,"constructor",c),aa(c,"constructor",u),u.displayName="GeneratorFunction",aa(c,a,"GeneratorFunction"),aa(f),aa(f,a,"Generator"),aa(f,r,function(){return this}),aa(f,"toString",function(){return"[object Generator]"}),(ra=function(){return{w:o,m:d}})()}function aa(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}aa=function(e,t,n,r){function o(t,n){aa(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},aa(e,t,n,r)}function oa(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function la(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){oa(o,r,a,l,i,"next",e)}function i(e){oa(o,r,a,l,i,"throw",e)}l(void 0)})}}function ia(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ua(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ua(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ua(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function ca(e){var t,n,r=e.ticketid,a=ia((0,o.useState)(),2),l=a[0],i=a[1],u=ia((0,o.useState)(),2),c=u[0],s=u[1]
return(0,o.useMemo)(la(ra().m(function e(){var t
return ra().w(function(e){for(;;)switch(e.n){case 0:return t=i,e.n=1,Pn("/api/tickets/"+r,"GET")
case 1:return e.a(2,t(e.v))}},e)})),[r]),(0,o.useMemo)(la(ra().m(function e(){return ra().w(function(e){for(;;)switch(e.n){case 0:if(!(l&&l.board&&l.column)){e.n=3
break}return e.n=1,Pn("/api/boards/"+l.board,"GET")
case 1:return l.boardobj=e.v,e.n=2,Pn("/api/boards/column/"+l.column,"GET")
case 2:l.columnobj=e.v,s(l)
case 3:return e.a(2)}},e)})),l),c&&(t=l.boardobj?l.boardobj.title+"["+l.board+"]":l.board,n=l.columnobj?l.columnobj.title+"["+l.column+"]":l.column),o.createElement("div",null,o.createElement("h2",null,"View Ticket"),o.createElement("div",{className:"ticket-view"},o.createElement("div",null,"Id: ",l?l.id:"Loading"),o.createElement("div",null,"Title: ",l&&l.title),o.createElement("div",null,"Description: ",l&&l.description),o.createElement("div",null,"Board: ",l&&t),o.createElement("div",null,"Column: ",l&&n),o.createElement("div",null,"Created At: ",l&&l.createdAt),o.createElement("div",null,"Updated At: ",l&&l.updatedAt),o.createElement("div",null,o.createElement(wn,{to:"/tickets/edit/"+r,className:"nav-btn"},"Edit Ticket"),o.createElement(wn,{to:"/boards/view_columns/"+(l?l.board:""),className:"nav-btn"},"View Board Columns"))),o.createElement("div",{className:"comment-view"},o.createElement("div",null,o.createElement(wn,{to:"/tickets/comment?ticketid="+r,className:"nav-btn"},"Create Comment")),o.createElement(na,{ticketid:r})))}function sa(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return fa(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(fa(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,fa(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,fa(f,"constructor",c),fa(c,"constructor",u),u.displayName="GeneratorFunction",fa(c,a,"GeneratorFunction"),fa(f),fa(f,a,"Generator"),fa(f,r,function(){return this}),fa(f,"toString",function(){return"[object Generator]"}),(sa=function(){return{w:o,m:d}})()}function fa(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}fa=function(e,t,n,r){function o(t,n){fa(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},fa(e,t,n,r)}function da(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function pa(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){da(o,r,a,l,i,"next",e)}function i(e){da(o,r,a,l,i,"throw",e)}l(void 0)})}}function ma(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ha(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ha(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ha(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function va(){var e=ma(kn(),1)[0].get("ticketid"),t=ma((0,o.useState)(e),2),n=t[0],r=t[1],a=ma((0,o.useState)(),2),l=a[0],i=a[1],u=(0,o.useRef)(),c=$t(),s=C(function(e){return e.ticket.tickets}),f=x()
function d(){return(d=pa(sa().m(function t(n){var r,a
return sa().w(function(t){for(;;)switch(t.n){case 0:return n.preventDefault(),r=u.current,a={username:r.username.value,text:r.text.value,ticket:+r.ticket.value},t.n=1,Pn("/api/tickets/comment/create","POST",a)
case 1:c("/tickets/view/"+e)
case 2:return t.a(2)}},t)}))).apply(this,arguments)}(0,o.useMemo)(pa(sa().m(function t(){var n
return sa().w(function(t){for(;;)switch(t.n){case 0:return n=i,t.n=1,Pn("/api/tickets/"+e,"GET")
case 1:return t.a(2,n(t.v))}},t)})),[e]),(0,o.useMemo)(pa(sa().m(function e(){var t,n
return sa().w(function(e){for(;;)switch(e.n){case 0:if(!l){e.n=2
break}return t=f,n=Ln,e.n=1,Pn("/api/tickets/board/"+l.board,"GET")
case 1:t(n.setTickets.call(n,e.v)),f(Ln.setBoardId(l.board))
case 2:return e.a(2)}},e)})),[l])
var p=s.map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Create Comment"),o.createElement("div",{className:"comment-create"},o.createElement("form",{ref:u,className:"form-create",onSubmit:function(e){return d.apply(this,arguments)}},o.createElement("input",{type:"text",name:"username",placeholder:"Username",required:!0}),o.createElement("br",null),o.createElement("textarea",{type:"text",name:"text",placeholder:"Text",required:!0}),o.createElement("br",null),o.createElement("select",{name:"ticket",onChange:function(){r(+u.current.ticket.value)},value:n},p),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function ya(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return ba(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(ba(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,ba(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,ba(f,"constructor",c),ba(c,"constructor",u),u.displayName="GeneratorFunction",ba(c,a,"GeneratorFunction"),ba(f),ba(f,a,"Generator"),ba(f,r,function(){return this}),ba(f,"toString",function(){return"[object Generator]"}),(ya=function(){return{w:o,m:d}})()}function ba(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}ba=function(e,t,n,r){function o(t,n){ba(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},ba(e,t,n,r)}function ga(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function wa(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){ga(o,r,a,l,i,"next",e)}function i(e){ga(o,r,a,l,i,"throw",e)}l(void 0)})}}function Sa(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ea(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ea(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ea(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function ka(e){var t=e.commentid,n=Sa((0,o.useState)(),2),r=n[0],a=n[1],l=Sa((0,o.useState)(),2),i=l[0],u=l[1],c=Sa((0,o.useState)(),2),s=c[0],f=c[1],d=(0,o.useRef)(),p=$t(),m=C(function(e){return e.ticket.tickets}),h=x()
function v(){return(v=wa(ya().m(function e(n){var r,a
return ya().w(function(e){for(;;)switch(e.n){case 0:return n.preventDefault(),r=d.current,a={username:r.username.value,text:r.text.value,ticket:+r.ticket.value},e.n=1,Pn("/api/tickets/comment/"+t,"POST",a)
case 1:p("/tickets/view/"+i.id)
case 2:return e.a(2)}},e)}))).apply(this,arguments)}(0,o.useMemo)(wa(ya().m(function e(){var n,r
return ya().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Pn("/api/tickets/comment/"+t,"GET")
case 1:n=e.v,f(n),(r=d.current).username.value=n.username,r.text.value=n.text
case 2:return e.a(2)}},e)})),[t]),(0,o.useMemo)(wa(ya().m(function e(){var t
return ya().w(function(e){for(;;)switch(e.n){case 0:if(!s){e.n=2
break}return t=u,e.n=1,Pn("/api/tickets/"+s.ticket,"GET")
case 1:t(e.v),a(s.ticket)
case 2:return e.a(2)}},e)})),[s]),(0,o.useMemo)(wa(ya().m(function e(){var t,n
return ya().w(function(e){for(;;)switch(e.n){case 0:if(!i){e.n=2
break}return t=h,n=Ln,e.n=1,Pn("/api/tickets/board/"+i.board,"GET")
case 1:t(n.setTickets.call(n,e.v)),h(Ln.setBoardId(i.board))
case 2:return e.a(2)}},e)})),[i])
var y=m.map(function(e){return o.createElement("option",{key:e.id,value:e.id},e.title," [",e.id,"]")})
return o.createElement("div",null,o.createElement("h2",null,"Edit Comment [",t,"]"),o.createElement("div",{className:"comment-edit"},o.createElement("form",{ref:d,className:"form-edit",onSubmit:function(e){return v.apply(this,arguments)}},o.createElement("input",{type:"text",name:"username",placeholder:"Username",required:!0}),o.createElement("br",null),o.createElement("textarea",{type:"text",name:"text",placeholder:"Text",required:!0}),o.createElement("br",null),o.createElement("select",{name:"ticket",onChange:function(){a(+d.current.ticket.value)},value:r},y),o.createElement("br",null),o.createElement("button",{type:"submit"},"Submit"))))}function _a(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof i?r:i,c=Object.create(u.prototype)
return xa(c,"_invoke",function(n,r,a){var o,i,u,c=0,s=a||[],f=!1,d={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return o=t,i=0,u=e,d.n=n,l}}
function p(n,r){for(i=n,u=r,t=0;!f&&c&&!a&&t<s.length;t++){var a,o=s[t],p=d.p,m=o[2]
n>3?(a=m===r)&&(u=o[(i=o[4])?5:(i=3,3)],o[4]=o[5]=e):o[0]<=p&&((a=n<2&&p<o[1])?(i=0,d.v=r,d.n=o[1]):p<m&&(a=n<3||o[0]>r||r>m)&&(o[4]=n,o[5]=r,d.n=m,i=0))}if(a||n>1)return l
throw f=!0,r}return function(a,s,m){if(c>1)throw TypeError("Generator is already running")
for(f&&1===s&&p(s,m),i=s,u=m;(t=i<2?e:u)||!f;){o||(i?i<3?(i>1&&(d.n=-1),p(i,u)):d.n=u:d.v=u)
try{if(c=2,o){if(i||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,i<2&&(i=0)}else 1===i&&(t=o.return)&&t.call(o),i<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),i=1)
o=e}else if((t=(f=d.n<0)?u:n.call(r,d))!==l)break}catch(t){o=e,i=1,u=t}finally{c=1}}return{value:t,done:f}}}(n,a,o),!0),c}var l={}
function i(){}function u(){}function c(){}t=Object.getPrototypeOf
var s=[][r]?t(t([][r]())):(xa(t={},r,function(){return this}),t),f=c.prototype=i.prototype=Object.create(s)
function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,c):(e.__proto__=c,xa(e,a,"GeneratorFunction")),e.prototype=Object.create(f),e}return u.prototype=c,xa(f,"constructor",c),xa(c,"constructor",u),u.displayName="GeneratorFunction",xa(c,a,"GeneratorFunction"),xa(f),xa(f,a,"Generator"),xa(f,r,function(){return this}),xa(f,"toString",function(){return"[object Generator]"}),(_a=function(){return{w:o,m:d}})()}function xa(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}xa=function(e,t,n,r){function o(t,n){xa(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},xa(e,t,n,r)}function Oa(e,t,n,r,a,o,l){try{var i=e[o](l),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Pa(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function l(e){Oa(o,r,a,l,i,"next",e)}function i(e){Oa(o,r,a,l,i,"throw",e)}l(void 0)})}}function Ca(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Ta(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ta(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ta(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function ja(e){var t=e.boardid,n=Ca((0,o.useState)(),2),r=n[0],a=n[1];(0,o.useMemo)(Pa(_a().m(function e(){var n
return _a().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,Pn("/api/boards/"+t,"GET")
case 1:n=e.v,a(n)
case 2:return e.a(2)}},e)})),[t])
var l=Ca((0,o.useState)(),2),i=l[0],u=l[1],c=Ca((0,o.useState)(),2),s=c[0],f=c[1],d=C(function(e){return e.ticket.ticketsByColumn}),p=x();(0,o.useMemo)(Pa(_a().m(function e(){var t,n,a
return _a().w(function(e){for(;;)switch(e.n){case 0:if(!r){e.n=4
break}return n=u,e.n=1,Pn("/api/projects/"+r.project,"GET")
case 1:return n(e.v),e.n=2,Pn("/api/tickets/board/"+r.id,"GET")
case 2:return t=e.v,p(Ln.setTickets(t)),p(Ln.setBoardId(r.id)),a=f,e.n=3,Pn("/api/boards/column_board/"+r.id,"GET")
case 3:a(e.v)
case 4:return e.a(2)}},e)})),[r])
var m=(s||[]).map(function(e){return o.createElement("div",{key:e.id,className:"board-column"},o.createElement("div",null,o.createElement("b",null,e.title)),o.createElement("div",null,o.createElement(Na,{columnid:e.id,ticketData:d[e.id]})))})
return o.createElement("div",null,o.createElement("h2",null,"View Board Columns with Tickets"),o.createElement("div",{className:"project-div"},o.createElement("b",null,"Project [",i&&i.id,"]"),o.createElement("br",null),i&&i.title,o.createElement("br",null),i&&i.description),o.createElement("div",{className:"board-div"},o.createElement("b",null,"Board Title:")," ",r&&r.title," [",r&&r.id,"]"),o.createElement("div",{className:"board-columns"},m))}function Na(e){var t=e.columnid,n=(e.ticketData||[]).map(function(e){return o.createElement("div",{key:e.id,className:"column-ticket"},o.createElement("div",null,o.createElement("b",null,"Title:")," ",e.title),o.createElement("div",null,o.createElement(wn,{to:"/tickets/view/"+e.id,className:"nav-btn"},"View Ticket")))})
return o.createElement("div",null,o.createElement("div",null,"Tickets in Column [",t,"]"),o.createElement("div",{className:"tickets"},n))}function za(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,l,i=[],u=!0,c=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Aa(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Aa(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Aa(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}var La=(0,o.createContext)(),Ra=(0,o.createContext)(),Fa=function(){return o.createElement("div",null,o.createElement("h2",null,"Home"))},Ma=function(){return o.createElement("div",null,o.createElement("h2",null,"Projects"),o.createElement("nav",null,o.createElement("ul",null,o.createElement("li",null,o.createElement(wn,{to:"create"},"Create Project")),o.createElement("li",null,o.createElement(wn,{to:"list"},"List Projects")))),o.createElement(ln,null))},Da=function(){return o.createElement("div",null,o.createElement(Zn,null))},Ia=function(){return o.createElement("div",null,o.createElement(Rn,null))},Ua=function(){var e=Vt().projectid
return o.createElement("div",null,o.createElement(Kn,{projectid:e}))},Ga=function(){var e=Vt().projectid
return o.createElement("div",null,o.createElement(Bn,{projectid:e}))},Ba=function(){return o.createElement("div",null,o.createElement("h2",null,"Boards"),o.createElement(ln,null))},$a=function(){return o.createElement("div",null,o.createElement(lr,null))},Ha=function(){var e=Vt().projectid
return o.createElement("div",null,o.createElement(ir,{projectid:e}))},Va=function(){var e=Vt().boardid
return o.createElement("div",null,o.createElement(Sr,{boardid:e}))},Wa=function(){var e=Vt().boardid
return o.createElement("div",null,o.createElement(mr,{boardid:e}))},qa=function(){var e=Vt().boardid
return o.createElement("div",null,o.createElement(ja,{boardid:e}))},Qa=function(){return o.createElement("div",null,o.createElement(Cr,null))},Ka=function(){var e=Vt().columnid
return o.createElement("div",null,o.createElement(Rr,{columnid:e}))},Xa=function(){return o.createElement("div",null,o.createElement("h2",null,"Tickets"),o.createElement(ln,null))},Ya=function(){var e=za(kn(),1)[0].get("boardid")
return o.createElement("div",null,o.createElement(Br,{boardid:e}))},Ja=function(){var e=Vt().ticketid
return o.createElement("div",null,o.createElement(Kr,{ticketid:e}))},Za=function(){var e=Vt().ticketid
return o.createElement("div",null,o.createElement(ca,{ticketid:e}))},eo=function(){return o.createElement("div",null,o.createElement(va,null))},to=function(){var e=Vt().commentid
return o.createElement("div",null,o.createElement(ka,{commentid:e}))}
function no(){return o.createElement("div",null,o.createElement("h1",null,"Board Management"),o.createElement(yn,null,o.createElement("nav",null,o.createElement("ul",null,o.createElement("li",null,o.createElement(wn,{to:"/"},"Home")),o.createElement("li",null,o.createElement(wn,{to:"/projects/"},"Projects")))),o.createElement(sn,null,o.createElement(un,{path:"/",element:o.createElement(Fa,null)}),o.createElement(un,{path:"/projects/",element:o.createElement(Ma,null)},o.createElement(un,{path:"create",element:o.createElement(Da,null)}),o.createElement(un,{path:"list",element:o.createElement(Ia,null)}),o.createElement(un,{path:"edit/:projectid",element:o.createElement(Ua,null)}),o.createElement(un,{path:"view/:projectid",element:o.createElement(Ga,null)})),o.createElement(un,{path:"/boards/",element:o.createElement(Ba,null)},o.createElement(un,{path:"create",element:o.createElement($a,null)}),o.createElement(un,{path:"list/:projectid",element:o.createElement(Ha,null)}),o.createElement(un,{path:"edit/:boardid",element:o.createElement(Va,null)}),o.createElement(un,{path:"view/:boardid",element:o.createElement(Wa,null)}),o.createElement(un,{path:"view_columns/:boardid",element:o.createElement(qa,null)}),o.createElement(un,{path:"create_column",element:o.createElement(Qa,null)}),o.createElement(un,{path:"edit_column/:columnid",element:o.createElement(Ka,null)})),o.createElement(un,{path:"/tickets/",element:o.createElement(Xa,null)},o.createElement(un,{path:"create",element:o.createElement(Ya,null)}),o.createElement(un,{path:"edit/:ticketid",element:o.createElement(Ja,null)}),o.createElement(un,{path:"view/:ticketid",element:o.createElement(Za,null)}),o.createElement(un,{path:"comment",element:o.createElement(eo,null)}),o.createElement(un,{path:"edit_comment/:commentid",element:o.createElement(to,null)})))))}function ro(){var e=C(function(e){return e.project.selected}),t=C(function(e){return e.board.selected})
return o.createElement(La,{value:e},o.createElement(Ra,{value:t},o.createElement(no,null)))}var ao=function(e){const t=function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:a=!0}=e??{}
let o=new ze
return t&&("boolean"==typeof t?o.push(D):o.push(I(t.extraArgument))),o},{reducer:n,middleware:r,devTools:a=!0,duplicateMiddlewareCheck:o=!0,preloadedState:l,enhancers:i}=e||{}
let u,c
if("function"==typeof n)u=n
else{if(!A(n))throw new Error(We(1))
u=R(n)}c="function"==typeof r?r(t):t()
let s=F
a&&(s=je({trace:!1,..."object"==typeof a&&a}))
const f=function(...e){return t=>(n,r)=>{const a=t(n,r)
let o=()=>{throw new Error(T(15))}
const l={getState:a.getState,dispatch:(e,...t)=>o(e,...t)},i=e.map(e=>e(l))
return o=F(...i)(a.dispatch),{...a,dispatch:o}}}(...c),d=Me(f)
return L(u,l,s(..."function"==typeof i?i(d):d()))}({reducer:{project:Tn.reducer,board:Nn.reducer,ticket:An.reducer}})
window.bodyOnLoad=function(){var e=document.getElementById("root");(0,i.createRoot)(e).render(o.createElement(g,{store:ao},o.createElement(ro,null)))}})()
