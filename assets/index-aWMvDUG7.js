var yb=Object.defineProperty;var _b=(r,a,i)=>a in r?yb(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i;var Bn=(r,a,i)=>_b(r,typeof a!="symbol"?a+"":a,i);function xb(r,a){for(var i=0;i<a.length;i++){const o=a[i];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in r)){const c=Object.getOwnPropertyDescriptor(o,s);c&&Object.defineProperty(r,s,c.get?c:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function I0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Sb(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var a=r.default;if(typeof a=="function"){var i=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};i.prototype=a.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(r).forEach(function(o){var s=Object.getOwnPropertyDescriptor(r,o);Object.defineProperty(i,o,s.get?s:{enumerable:!0,get:function(){return r[o]}})}),i}var Ku={exports:{}},vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function wb(){if(Bp)return vr;Bp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(o,s,c){var h=null;if(c!==void 0&&(h=""+c),s.key!==void 0&&(h=""+s.key),"key"in s){c={};for(var g in s)g!=="key"&&(c[g]=s[g])}else c=s;return s=c.ref,{$$typeof:r,type:o,key:h,ref:s!==void 0?s:null,props:c}}return vr.Fragment=a,vr.jsx=i,vr.jsxs=i,vr}var Pp;function Ob(){return Pp||(Pp=1,Ku.exports=wb()),Ku.exports}var M=Ob(),Ju={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Tb(){if(Hp)return le;Hp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=y&&S[y]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,A={};function T(S,B,Z){this.props=S,this.context=B,this.refs=A,this.updater=Z||k}T.prototype.isReactComponent={},T.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},T.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function G(){}G.prototype=T.prototype;function V(S,B,Z){this.props=S,this.context=B,this.refs=A,this.updater=Z||k}var z=V.prototype=new G;z.constructor=V,O(z,T.prototype),z.isPureReactComponent=!0;var Y=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function ee(S,B,Z,$,F,pe){return Z=pe.ref,{$$typeof:r,type:S,key:B,ref:Z!==void 0?Z:null,props:pe}}function Ae(S,B){return ee(S.type,B,void 0,void 0,void 0,S.props)}function we(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function rt(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Z){return B[Z]})}var Xt=/\/+/g;function Fe(S,B){return typeof S=="object"&&S!==null&&S.key!=null?rt(""+S.key):B.toString(36)}function Zn(){}function Kn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Zn,Zn):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function We(S,B,Z,$,F){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var ie=!1;if(S===null)ie=!0;else switch(pe){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(S.$$typeof){case r:case a:ie=!0;break;case v:return ie=S._init,We(ie(S._payload),B,Z,$,F)}}if(ie)return F=F(S),ie=$===""?"."+Fe(S,0):$,Y(F)?(Z="",ie!=null&&(Z=ie.replace(Xt,"$&/")+"/"),We(F,B,Z,"",function(pn){return pn})):F!=null&&(we(F)&&(F=Ae(F,Z+(F.key==null||S&&S.key===F.key?"":(""+F.key).replace(Xt,"$&/")+"/")+ie)),B.push(F)),1;ie=0;var ht=$===""?".":$+":";if(Y(S))for(var je=0;je<S.length;je++)$=S[je],pe=ht+Fe($,je),ie+=We($,B,Z,pe,F);else if(je=x(S),typeof je=="function")for(S=je.call(S),je=0;!($=S.next()).done;)$=$.value,pe=ht+Fe($,je++),ie+=We($,B,Z,pe,F);else if(pe==="object"){if(typeof S.then=="function")return We(Kn(S),B,Z,$,F);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ie}function N(S,B,Z){if(S==null)return S;var $=[],F=0;return We(S,$,"","",function(pe){return B.call(Z,pe,F++)}),$}function Q(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(Z){(S._status===0||S._status===-1)&&(S._status=1,S._result=Z)},function(Z){(S._status===0||S._status===-1)&&(S._status=2,S._result=Z)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var ne=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Oe(){}return le.Children={map:N,forEach:function(S,B,Z){N(S,function(){B.apply(this,arguments)},Z)},count:function(S){var B=0;return N(S,function(){B++}),B},toArray:function(S){return N(S,function(B){return B})||[]},only:function(S){if(!we(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},le.Component=T,le.Fragment=i,le.Profiler=s,le.PureComponent=V,le.StrictMode=o,le.Suspense=d,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,le.__COMPILER_RUNTIME={__proto__:null,c:function(S){return H.H.useMemoCache(S)}},le.cache=function(S){return function(){return S.apply(null,arguments)}},le.cloneElement=function(S,B,Z){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var $=O({},S.props),F=S.key,pe=void 0;if(B!=null)for(ie in B.ref!==void 0&&(pe=void 0),B.key!==void 0&&(F=""+B.key),B)!X.call(B,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&B.ref===void 0||($[ie]=B[ie]);var ie=arguments.length-2;if(ie===1)$.children=Z;else if(1<ie){for(var ht=Array(ie),je=0;je<ie;je++)ht[je]=arguments[je+2];$.children=ht}return ee(S.type,F,void 0,void 0,pe,$)},le.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},le.createElement=function(S,B,Z){var $,F={},pe=null;if(B!=null)for($ in B.key!==void 0&&(pe=""+B.key),B)X.call(B,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(F[$]=B[$]);var ie=arguments.length-2;if(ie===1)F.children=Z;else if(1<ie){for(var ht=Array(ie),je=0;je<ie;je++)ht[je]=arguments[je+2];F.children=ht}if(S&&S.defaultProps)for($ in ie=S.defaultProps,ie)F[$]===void 0&&(F[$]=ie[$]);return ee(S,pe,void 0,void 0,null,F)},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:g,render:S}},le.isValidElement=we,le.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:Q}},le.memo=function(S,B){return{$$typeof:p,type:S,compare:B===void 0?null:B}},le.startTransition=function(S){var B=H.T,Z={};H.T=Z;try{var $=S(),F=H.S;F!==null&&F(Z,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Oe,ne)}catch(pe){ne(pe)}finally{H.T=B}},le.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},le.use=function(S){return H.H.use(S)},le.useActionState=function(S,B,Z){return H.H.useActionState(S,B,Z)},le.useCallback=function(S,B){return H.H.useCallback(S,B)},le.useContext=function(S){return H.H.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S,B){return H.H.useDeferredValue(S,B)},le.useEffect=function(S,B,Z){var $=H.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(S,B)},le.useId=function(){return H.H.useId()},le.useImperativeHandle=function(S,B,Z){return H.H.useImperativeHandle(S,B,Z)},le.useInsertionEffect=function(S,B){return H.H.useInsertionEffect(S,B)},le.useLayoutEffect=function(S,B){return H.H.useLayoutEffect(S,B)},le.useMemo=function(S,B){return H.H.useMemo(S,B)},le.useOptimistic=function(S,B){return H.H.useOptimistic(S,B)},le.useReducer=function(S,B,Z){return H.H.useReducer(S,B,Z)},le.useRef=function(S){return H.H.useRef(S)},le.useState=function(S){return H.H.useState(S)},le.useSyncExternalStore=function(S,B,Z){return H.H.useSyncExternalStore(S,B,Z)},le.useTransition=function(){return H.H.useTransition()},le.version="19.1.0",le}var Gp;function Mc(){return Gp||(Gp=1,Ju.exports=Tb()),Ju.exports}var P=Mc();const ye=I0(P),Eb=xb({__proto__:null,default:ye},[P]);var Iu={exports:{}},br={},Fu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function kb(){return Yp||(Yp=1,function(r){function a(N,Q){var ne=N.length;N.push(Q);e:for(;0<ne;){var Oe=ne-1>>>1,S=N[Oe];if(0<s(S,Q))N[Oe]=Q,N[ne]=S,ne=Oe;else break e}}function i(N){return N.length===0?null:N[0]}function o(N){if(N.length===0)return null;var Q=N[0],ne=N.pop();if(ne!==Q){N[0]=ne;e:for(var Oe=0,S=N.length,B=S>>>1;Oe<B;){var Z=2*(Oe+1)-1,$=N[Z],F=Z+1,pe=N[F];if(0>s($,ne))F<S&&0>s(pe,$)?(N[Oe]=pe,N[F]=ne,Oe=F):(N[Oe]=$,N[Z]=ne,Oe=Z);else if(F<S&&0>s(pe,ne))N[Oe]=pe,N[F]=ne,Oe=F;else break e}}return Q}function s(N,Q){var ne=N.sortIndex-Q.sortIndex;return ne!==0?ne:N.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,g=h.now();r.unstable_now=function(){return h.now()-g}}var d=[],p=[],v=1,y=null,x=3,k=!1,O=!1,A=!1,T=!1,G=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function Y(N){for(var Q=i(p);Q!==null;){if(Q.callback===null)o(p);else if(Q.startTime<=N)o(p),Q.sortIndex=Q.expirationTime,a(d,Q);else break;Q=i(p)}}function H(N){if(A=!1,Y(N),!O)if(i(d)!==null)O=!0,X||(X=!0,Fe());else{var Q=i(p);Q!==null&&We(H,Q.startTime-N)}}var X=!1,ee=-1,Ae=5,we=-1;function rt(){return T?!0:!(r.unstable_now()-we<Ae)}function Xt(){if(T=!1,X){var N=r.unstable_now();we=N;var Q=!0;try{e:{O=!1,A&&(A=!1,V(ee),ee=-1),k=!0;var ne=x;try{t:{for(Y(N),y=i(d);y!==null&&!(y.expirationTime>N&&rt());){var Oe=y.callback;if(typeof Oe=="function"){y.callback=null,x=y.priorityLevel;var S=Oe(y.expirationTime<=N);if(N=r.unstable_now(),typeof S=="function"){y.callback=S,Y(N),Q=!0;break t}y===i(d)&&o(d),Y(N)}else o(d);y=i(d)}if(y!==null)Q=!0;else{var B=i(p);B!==null&&We(H,B.startTime-N),Q=!1}}break e}finally{y=null,x=ne,k=!1}Q=void 0}}finally{Q?Fe():X=!1}}}var Fe;if(typeof z=="function")Fe=function(){z(Xt)};else if(typeof MessageChannel<"u"){var Zn=new MessageChannel,Kn=Zn.port2;Zn.port1.onmessage=Xt,Fe=function(){Kn.postMessage(null)}}else Fe=function(){G(Xt,0)};function We(N,Q){ee=G(function(){N(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(N){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var ne=x;x=Q;try{return N()}finally{x=ne}},r.unstable_requestPaint=function(){T=!0},r.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=x;x=N;try{return Q()}finally{x=ne}},r.unstable_scheduleCallback=function(N,Q,ne){var Oe=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Oe+ne:Oe):ne=Oe,N){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ne+S,N={id:v++,callback:Q,priorityLevel:N,startTime:ne,expirationTime:S,sortIndex:-1},ne>Oe?(N.sortIndex=ne,a(p,N),i(d)===null&&N===i(p)&&(A?(V(ee),ee=-1):A=!0,We(H,ne-Oe))):(N.sortIndex=S,a(d,N),O||k||(O=!0,X||(X=!0,Fe()))),N},r.unstable_shouldYield=rt,r.unstable_wrapCallback=function(N){var Q=x;return function(){var ne=x;x=Q;try{return N.apply(this,arguments)}finally{x=ne}}}}(Wu)),Wu}var $p;function Ab(){return $p||($p=1,Fu.exports=kb()),Fu.exports}var ec={exports:{}},nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function jb(){if(Xp)return nt;Xp=1;var r=Mc();function a(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(d,p,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:d,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,nt.createPortal=function(d,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return c(d,p,null,v)},nt.flushSync=function(d){var p=h.T,v=o.p;try{if(h.T=null,o.p=2,d)return d()}finally{h.T=p,o.p=v,o.d.f()}},nt.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(d,p))},nt.prefetchDNS=function(d){typeof d=="string"&&o.d.D(d)},nt.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var v=p.as,y=g(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?o.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:k}):v==="script"&&o.d.X(d,{crossOrigin:y,integrity:x,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},nt.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=g(p.as,p.crossOrigin);o.d.M(d,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(d)},nt.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,y=g(v,p.crossOrigin);o.d.L(d,v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},nt.preloadModule=function(d,p){if(typeof d=="string")if(p){var v=g(p.as,p.crossOrigin);o.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(d)},nt.requestFormReset=function(d){o.d.r(d)},nt.unstable_batchedUpdates=function(d,p){return d(p)},nt.useFormState=function(d,p,v){return h.H.useFormState(d,p,v)},nt.useFormStatus=function(){return h.H.useHostTransitionStatus()},nt.version="19.1.0",nt}var Qp;function F0(){if(Qp)return ec.exports;Qp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),ec.exports=jb(),ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Rb(){if(Vp)return br;Vp=1;var r=Ab(),a=Mc(),i=F0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(o(188))}function d(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var u=n.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){n=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===n)return g(u),e;if(f===l)return g(u),t;f=f.sibling}throw Error(o(188))}if(n.return!==l.return)n=u,l=f;else{for(var m=!1,b=u.child;b;){if(b===n){m=!0,n=u,l=f;break}if(b===l){m=!0,l=u,n=f;break}b=b.sibling}if(!m){for(b=f.child;b;){if(b===n){m=!0,n=f,l=u;break}if(b===l){m=!0,l=f,n=u;break}b=b.sibling}if(!m)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),z=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),Xt=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=Xt&&e[Xt]||e["@@iterator"],typeof e=="function"?e:null)}var Zn=Symbol.for("react.client.reference");function Kn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Zn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case T:return"Profiler";case A:return"StrictMode";case H:return"Suspense";case X:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case z:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Kn(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Kn(e(t))}catch{}}return null}var We=Array.isArray,N=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Oe=[],S=-1;function B(e){return{current:e}}function Z(e){0>S||(e.current=Oe[S],Oe[S]=null,S--)}function $(e,t){S++,Oe[S]=e.current,e.current=t}var F=B(null),pe=B(null),ie=B(null),ht=B(null);function je(e,t){switch($(ie,t),$(pe,e),$(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dp(t),e=pp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(F),$(F,e)}function pn(){Z(F),Z(pe),Z(ie)}function Uo(e){e.memoizedState!==null&&$(ht,e);var t=F.current,n=pp(t,e.type);t!==n&&($(pe,e),$(F,n))}function Xr(e){pe.current===e&&(Z(F),Z(pe)),ht.current===e&&(Z(ht),hr._currentValue=ne)}var zo=Object.prototype.hasOwnProperty,No=r.unstable_scheduleCallback,qo=r.unstable_cancelCallback,Ig=r.unstable_shouldYield,Fg=r.unstable_requestPaint,Bt=r.unstable_now,Wg=r.unstable_getCurrentPriorityLevel,Qc=r.unstable_ImmediatePriority,Vc=r.unstable_UserBlockingPriority,Qr=r.unstable_NormalPriority,em=r.unstable_LowPriority,Zc=r.unstable_IdlePriority,tm=r.log,nm=r.unstable_setDisableYieldValue,_i=null,dt=null;function gn(e){if(typeof tm=="function"&&nm(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(_i,e)}catch{}}var pt=Math.clz32?Math.clz32:rm,am=Math.log,im=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(am(e)/im|0)|0}var Vr=256,Zr=4194304;function Jn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kr(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?u=Jn(l):(m&=b,m!==0?u=Jn(m):n||(n=b&~e,n!==0&&(u=Jn(n))))):(b=l&~f,b!==0?u=Jn(b):m!==0?u=Jn(m):n||(n=l&~e,n!==0&&(u=Jn(n)))),u===0?0:t!==0&&t!==u&&(t&f)===0&&(f=u&-u,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:u}function xi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kc(){var e=Vr;return Vr<<=1,(Vr&4194048)===0&&(Vr=256),e}function Jc(){var e=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),e}function Lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function om(e,t,n,l,u,f){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,_=e.expirationTimes,R=e.hiddenUpdates;for(n=m&~n;0<n;){var U=31-pt(n),L=1<<U;b[U]=0,_[U]=-1;var C=R[U];if(C!==null)for(R[U]=null,U=0;U<C.length;U++){var D=C[U];D!==null&&(D.lane&=-536870913)}n&=~L}l!==0&&Ic(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(m&~t))}function Ic(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function Fc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-pt(n),u=1<<l;u&t|e[l]&t&&(e[l]|=t),n&=~u}}function Bo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Po(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wc(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Mp(e.type))}function sm(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var mn=Math.random().toString(36).slice(2),et="__reactFiber$"+mn,lt="__reactProps$"+mn,_a="__reactContainer$"+mn,Ho="__reactEvents$"+mn,um="__reactListeners$"+mn,cm="__reactHandles$"+mn,ef="__reactResources$"+mn,wi="__reactMarker$"+mn;function Go(e){delete e[et],delete e[lt],delete e[Ho],delete e[um],delete e[cm]}function xa(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_a]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bp(e);e!==null;){if(n=e[et])return n;e=bp(e)}return t}e=n,n=e.parentNode}return null}function Sa(e){if(e=e[et]||e[_a]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Oi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function wa(e){var t=e[ef];return t||(t=e[ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[wi]=!0}var tf=new Set,nf={};function In(e,t){Oa(e,t),Oa(e+"Capture",t)}function Oa(e,t){for(nf[e]=t,e=0;e<t.length;e++)tf.add(t[e])}var fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),af={},rf={};function hm(e){return zo.call(rf,e)?!0:zo.call(af,e)?!1:fm.test(e)?rf[e]=!0:(af[e]=!0,!1)}function Jr(e,t,n){if(hm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ir(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Qt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Yo,lf;function Ta(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||"",lf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yo+e+lf}var $o=!1;function Xo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(D){var C=D}Reflect.construct(e,[],L)}else{try{L.call()}catch(D){C=D}e.call(L.prototype)}}else{try{throw Error()}catch(D){C=D}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(D){if(D&&C&&typeof D.stack=="string")return[D.stack,C.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),m=f[0],b=f[1];if(m&&b){var _=m.split(`
`),R=b.split(`
`);for(u=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;if(l===_.length||u===R.length)for(l=_.length-1,u=R.length-1;1<=l&&0<=u&&_[l]!==R[u];)u--;for(;1<=l&&0<=u;l--,u--)if(_[l]!==R[u]){if(l!==1||u!==1)do if(l--,u--,0>u||_[l]!==R[u]){var U=`
`+_[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=u);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ta(n):""}function dm(e){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Xo(e.type,!1);case 11:return Xo(e.type.render,!1);case 1:return Xo(e.type,!0);case 31:return Ta("Activity");default:return""}}function of(e){try{var t="";do t+=dm(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,f=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(m){l=""+m,f.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fr(e){e._valueTracker||(e._valueTracker=pm(e))}function uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=sf(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gm=/[\n"\\]/g;function Ot(e){return e.replace(gm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Qo(e,t,n,l,u,f,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Vo(e,m,wt(t)):n!=null?Vo(e,m,wt(n)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+wt(b):e.removeAttribute("name")}function cf(e,t,n,l,u,f,m,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;n=n!=null?""+wt(n):"",t=t!=null?""+wt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function Vo(e,t,n){t==="number"&&Wr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ea(e,t,n,l){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&l&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function ff(e,t,n){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+wt(n):""}function hf(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(We(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=wt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function ka(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function df(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||mm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function pf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in t)l=t[u],t.hasOwnProperty(u)&&n[u]!==l&&df(e,u,l)}else for(var f in t)t.hasOwnProperty(f)&&df(e,f,t[f])}function Zo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return bm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ko=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,ja=null;function gf(e){var t=Sa(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Qo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var u=l[lt]||null;if(!u)throw Error(o(90));Qo(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&uf(l)}break e;case"textarea":ff(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ea(e,!!n.multiple,t,!1)}}}var Io=!1;function mf(e,t,n){if(Io)return e(t,n);Io=!0;try{var l=e(t);return l}finally{if(Io=!1,(Aa!==null||ja!==null)&&(Bl(),Aa&&(t=Aa,e=ja,ja=Aa=null,gf(t),e)))for(t=0;t<e.length;t++)gf(e[t])}}function Ti(e,t){var n=e.stateNode;if(n===null)return null;var l=n[lt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fo=!1;if(Vt)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Fo=!1}var vn=null,Wo=null,tl=null;function vf(){if(tl)return tl;var e,t=Wo,n=t.length,l,u="value"in vn?vn.value:vn.textContent,f=u.length;for(e=0;e<n&&t[e]===u[e];e++);var m=n-e;for(l=1;l<=m&&t[n-l]===u[f-l];l++);return tl=u.slice(e,1<l?1-l:void 0)}function nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function bf(){return!1}function ot(e){function t(n,l,u,f,m){this._reactName=n,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:bf,this.isPropagationStopped=bf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=ot(Fn),ki=v({},Fn,{view:0,detail:0}),ym=ot(ki),es,ts,Ai,rl=v({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(es=e.screenX-Ai.screenX,ts=e.screenY-Ai.screenY):ts=es=0,Ai=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),yf=ot(rl),_m=v({},rl,{dataTransfer:0}),xm=ot(_m),Sm=v({},ki,{relatedTarget:0}),ns=ot(Sm),wm=v({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Om=ot(wm),Tm=v({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Em=ot(Tm),km=v({},Fn,{data:0}),_f=ot(km),Am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rm[e])?!!t[e]:!1}function as(){return Cm}var Dm=v({},ki,{key:function(e){if(e.key){var t=Am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mm=ot(Dm),Um=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=ot(Um),zm=v({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),Nm=ot(zm),qm=v({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=ot(qm),Bm=v({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pm=ot(Bm),Hm=v({},Fn,{newState:0,oldState:0}),Gm=ot(Hm),Ym=[9,13,27,32],is=Vt&&"CompositionEvent"in window,ji=null;Vt&&"documentMode"in document&&(ji=document.documentMode);var $m=Vt&&"TextEvent"in window&&!ji,Sf=Vt&&(!is||ji&&8<ji&&11>=ji),wf=" ",Of=!1;function Tf(e,t){switch(e){case"keyup":return Ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function Xm(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(Of=!0,wf);case"textInput":return e=t.data,e===wf&&Of?null:e;default:return null}}function Qm(e,t){if(Ra)return e==="compositionend"||!is&&Tf(e,t)?(e=vf(),tl=Wo=vn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var Vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vm[e.type]:t==="textarea"}function Af(e,t,n,l){Aa?ja?ja.push(l):ja=[l]:Aa=l,t=Xl(t,"onChange"),0<t.length&&(n=new il("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ri=null,Ci=null;function Zm(e){sp(e,0)}function ll(e){var t=Oi(e);if(uf(t))return e}function jf(e,t){if(e==="change")return t}var Rf=!1;if(Vt){var rs;if(Vt){var ls="oninput"in document;if(!ls){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),ls=typeof Cf.oninput=="function"}rs=ls}else rs=!1;Rf=rs&&(!document.documentMode||9<document.documentMode)}function Df(){Ri&&(Ri.detachEvent("onpropertychange",Mf),Ci=Ri=null)}function Mf(e){if(e.propertyName==="value"&&ll(Ci)){var t=[];Af(t,Ci,e,Jo(e)),mf(Zm,t)}}function Km(e,t,n){e==="focusin"?(Df(),Ri=t,Ci=n,Ri.attachEvent("onpropertychange",Mf)):e==="focusout"&&Df()}function Jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Ci)}function Im(e,t){if(e==="click")return ll(t)}function Fm(e,t){if(e==="input"||e==="change")return ll(t)}function Wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Wm;function Di(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var u=n[l];if(!zo.call(t,u)||!gt(e[u],t[u]))return!1}return!0}function Uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var n=Uf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uf(n)}}function Nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ev=Vt&&"documentMode"in document&&11>=document.documentMode,Ca=null,ss=null,Mi=null,us=!1;function Lf(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Ca==null||Ca!==Wr(l)||(l=Ca,"selectionStart"in l&&os(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mi&&Di(Mi,l)||(Mi=l,l=Xl(ss,"onSelect"),0<l.length&&(t=new il("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ca)))}function Wn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Da={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionrun:Wn("Transition","TransitionRun"),transitionstart:Wn("Transition","TransitionStart"),transitioncancel:Wn("Transition","TransitionCancel"),transitionend:Wn("Transition","TransitionEnd")},cs={},Bf={};Vt&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function ea(e){if(cs[e])return cs[e];if(!Da[e])return e;var t=Da[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bf)return cs[e]=t[n];return e}var Pf=ea("animationend"),Hf=ea("animationiteration"),Gf=ea("animationstart"),tv=ea("transitionrun"),nv=ea("transitionstart"),av=ea("transitioncancel"),Yf=ea("transitionend"),$f=new Map,fs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fs.push("scrollEnd");function Dt(e,t){$f.set(e,t),In(t,[e])}var Xf=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var n=Xf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:of(t)},Xf.set(e,t),t)}return{value:e,source:t,stack:of(t)}}var Et=[],Ma=0,hs=0;function ol(){for(var e=Ma,t=hs=Ma=0;t<e;){var n=Et[t];Et[t++]=null;var l=Et[t];Et[t++]=null;var u=Et[t];Et[t++]=null;var f=Et[t];if(Et[t++]=null,l!==null&&u!==null){var m=l.pending;m===null?u.next=u:(u.next=m.next,m.next=u),l.pending=u}f!==0&&Qf(n,u,f)}}function sl(e,t,n,l){Et[Ma++]=e,Et[Ma++]=t,Et[Ma++]=n,Et[Ma++]=l,hs|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ds(e,t,n,l){return sl(e,t,n,l),ul(e)}function Ua(e,t){return sl(e,null,null,t),ul(e)}function Qf(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var u=!1,f=e.return;f!==null;)f.childLanes|=n,l=f.alternate,l!==null&&(l.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&t!==null&&(u=31-pt(n),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[t]:l.push(t),t.lane=n|536870912),f):null}function ul(e){if(50<ir)throw ir=0,yu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var za={};function iv(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,l){return new iv(e,t,n,l)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cl(e,t,n,l,u,f){var m=0;if(l=e,typeof e=="function")ps(e)&&(m=1);else if(typeof e=="string")m=lb(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=mt(31,n,t,u),e.elementType=we,e.lanes=f,e;case O:return ta(n.children,u,f,t);case A:m=8,u|=24;break;case T:return e=mt(12,n,t,u|2),e.elementType=T,e.lanes=f,e;case H:return e=mt(13,n,t,u),e.elementType=H,e.lanes=f,e;case X:return e=mt(19,n,t,u),e.elementType=X,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:case z:m=10;break e;case V:m=9;break e;case Y:m=11;break e;case ee:m=14;break e;case Ae:m=16,l=null;break e}m=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=mt(m,n,t,u),t.elementType=e,t.type=l,t.lanes=f,t}function ta(e,t,n,l){return e=mt(7,e,l,t),e.lanes=n,e}function gs(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Na=[],qa=0,fl=null,hl=0,kt=[],At=0,na=null,Kt=1,Jt="";function aa(e,t){Na[qa++]=hl,Na[qa++]=fl,fl=e,hl=t}function Zf(e,t,n){kt[At++]=Kt,kt[At++]=Jt,kt[At++]=na,na=e;var l=Kt;e=Jt;var u=32-pt(l)-1;l&=~(1<<u),n+=1;var f=32-pt(t)+u;if(30<f){var m=u-u%5;f=(l&(1<<m)-1).toString(32),l>>=m,u-=m,Kt=1<<32-pt(t)+u|n<<u|l,Jt=f+e}else Kt=1<<f|n<<u|l,Jt=e}function vs(e){e.return!==null&&(aa(e,1),Zf(e,1,0))}function bs(e){for(;e===fl;)fl=Na[--qa],Na[qa]=null,hl=Na[--qa],Na[qa]=null;for(;e===na;)na=kt[--At],kt[At]=null,Jt=kt[--At],kt[At]=null,Kt=kt[--At],kt[At]=null}var at=null,Me=null,me=!1,ia=null,Pt=!1,ys=Error(o(519));function ra(e){var t=Error(o(418,""));throw Ni(Tt(t,e)),ys}function Kf(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[et]=e,t[lt]=l,n){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(n=0;n<lr.length;n++)ce(lr[n],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),cf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Fr(t);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),hf(t,l.value,l.defaultValue,l.children),Fr(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||hp(t.textContent,n)?(l.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),l.onScroll!=null&&ce("scroll",t),l.onScrollEnd!=null&&ce("scrollend",t),l.onClick!=null&&(t.onclick=Ql),t=!0):t=!1,t||ra(e)}function Jf(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:at=at.return}}function Ui(e){if(e!==at)return!1;if(!me)return Jf(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zu(e.type,e.memoizedProps)),n=!n),n&&Me&&ra(e),Jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Me=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Me=null}}else t===27?(t=Me,Mn(e.type)?(e=Bu,Bu=null,Me=e):Me=t):Me=at?Ut(e.stateNode.nextSibling):null;return!0}function zi(){Me=at=null,me=!1}function If(){var e=ia;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ia=null),e}function Ni(e){ia===null?ia=[e]:ia.push(e)}var _s=B(null),la=null,It=null;function bn(e,t,n){$(_s,t._currentValue),t._currentValue=n}function Ft(e){e._currentValue=_s.current,Z(_s)}function xs(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ss(e,t,n,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var m=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var _=0;_<t.length;_++)if(b.context===t[_]){f.lanes|=n,b=f.alternate,b!==null&&(b.lanes|=n),xs(f.return,n,e),l||(m=null);break e}f=b.next}}else if(u.tag===18){if(m=u.return,m===null)throw Error(o(341));m.lanes|=n,f=m.alternate,f!==null&&(f.lanes|=n),xs(m,n,e),m=null}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===e){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}}function qi(e,t,n,l){e=null;for(var u=t,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var m=u.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var b=u.type;gt(u.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(u===ht.current){if(m=u.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(hr):e=[hr])}u=u.return}e!==null&&Ss(t,e,n,l),t.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){la=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Ff(la,e)}function pl(e,t){return la===null&&oa(e),Ff(e,t)}function Ff(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(o(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var rv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},lv=r.unstable_scheduleCallback,ov=r.unstable_NormalPriority,Pe={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ws(){return{controller:new rv,data:new Map,refCount:0}}function Li(e){e.refCount--,e.refCount===0&&lv(ov,function(){e.controller.abort()})}var Bi=null,Os=0,La=0,Ba=null;function sv(e,t){if(Bi===null){var n=Bi=[];Os=0,La=Eu(),Ba={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Os++,t.then(Wf,Wf),t}function Wf(){if(--Os===0&&Bi!==null){Ba!==null&&(Ba.status="fulfilled");var e=Bi;Bi=null,La=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function uv(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var u=0;u<n.length;u++)(0,n[u])(t)},function(u){for(l.status="rejected",l.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),l}var eh=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&sv(e,t),eh!==null&&eh(e,t)};var sa=B(null);function Ts(){var e=sa.current;return e!==null?e:Ee.pooledCache}function gl(e,t){t===null?$(sa,sa.current):$(sa,t.pool)}function th(){var e=Ts();return e===null?null:{parent:Pe._currentValue,pool:e}}var Pi=Error(o(460)),nh=Error(o(474)),ml=Error(o(542)),Es={then:function(){}};function ah(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function ih(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(vl,vl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e;default:if(typeof t.status=="string")t.then(vl,vl);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=l}},function(l){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lh(e),e}throw Hi=t,Pi}}var Hi=null;function rh(){if(Hi===null)throw Error(o(459));var e=Hi;return Hi=null,e}function lh(e){if(e===Pi||e===ml)throw Error(o(483))}var yn=!1;function ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function As(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,t=ul(e),Qf(e,null,n),t}return sl(e,l,t,n),ul(e)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Fc(e,n)}}function js(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var u=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?u=f=m:f=f.next=m,n=n.next}while(n!==null);f===null?u=f=t:f=f.next=t}else u=f=t;n={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rs=!1;function Yi(){if(Rs){var e=Ba;if(e!==null)throw e}}function $i(e,t,n,l){Rs=!1;var u=e.updateQueue;yn=!1;var f=u.firstBaseUpdate,m=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var _=b,R=_.next;_.next=null,m===null?f=R:m.next=R,m=_;var U=e.alternate;U!==null&&(U=U.updateQueue,b=U.lastBaseUpdate,b!==m&&(b===null?U.firstBaseUpdate=R:b.next=R,U.lastBaseUpdate=_))}if(f!==null){var L=u.baseState;m=0,U=R=_=null,b=f;do{var C=b.lane&-536870913,D=C!==b.lane;if(D?(de&C)===C:(l&C)===C){C!==0&&C===La&&(Rs=!0),U!==null&&(U=U.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ae=e,W=b;C=t;var Se=n;switch(W.tag){case 1:if(ae=W.payload,typeof ae=="function"){L=ae.call(Se,L,C);break e}L=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=W.payload,C=typeof ae=="function"?ae.call(Se,L,C):ae,C==null)break e;L=v({},L,C);break e;case 2:yn=!0}}C=b.callback,C!==null&&(e.flags|=64,D&&(e.flags|=8192),D=u.callbacks,D===null?u.callbacks=[C]:D.push(C))}else D={lane:C,tag:b.tag,payload:b.payload,callback:b.callback,next:null},U===null?(R=U=D,_=L):U=U.next=D,m|=C;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;D=b,b=D.next,D.next=null,u.lastBaseUpdate=D,u.shared.pending=null}}while(!0);U===null&&(_=L),u.baseState=_,u.firstBaseUpdate=R,u.lastBaseUpdate=U,f===null&&(u.shared.lanes=0),jn|=m,e.lanes=m,e.memoizedState=L}}function oh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function sh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)oh(n[e],t)}var Pa=B(null),bl=B(0);function uh(e,t){e=ln,$(bl,e),$(Pa,t),ln=e|t.baseLanes}function Cs(){$(bl,ln),$(Pa,Pa.current)}function Ds(){ln=bl.current,Z(Pa),Z(bl)}var Sn=0,oe=null,_e=null,qe=null,yl=!1,Ha=!1,ua=!1,_l=0,Xi=0,Ga=null,cv=0;function ze(){throw Error(o(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Us(e,t,n,l,u,f){return Sn=f,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Qh:Vh,ua=!1,f=n(l,u),ua=!1,Ha&&(f=fh(t,n,l,u)),ch(e),f}function ch(e){N.H=El;var t=_e!==null&&_e.next!==null;if(Sn=0,qe=_e=oe=null,yl=!1,Xi=0,Ga=null,t)throw Error(o(300));e===null||$e||(e=e.dependencies,e!==null&&dl(e)&&($e=!0))}function fh(e,t,n,l){oe=e;var u=0;do{if(Ha&&(Ga=null),Xi=0,Ha=!1,25<=u)throw Error(o(301));if(u+=1,qe=_e=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=vv,f=t(n,l)}while(Ha);return f}function fv(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Qi(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(oe.flags|=1024),t}function zs(){var e=_l!==0;return _l=0,e}function Ns(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function qs(e){if(yl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yl=!1}Sn=0,qe=_e=oe=null,Ha=!1,Xi=_l=0,Ga=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?oe.memoizedState=qe=e:qe=qe.next=e,qe}function Le(){if(_e===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=qe===null?oe.memoizedState:qe.next;if(t!==null)qe=t,_e=e;else{if(e===null)throw oe.alternate===null?Error(o(467)):Error(o(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},qe===null?oe.memoizedState=qe=e:qe=qe.next=e}return qe}function Ls(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qi(e){var t=Xi;return Xi+=1,Ga===null&&(Ga=[]),e=ih(Ga,e,t),t=oe,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Qh:Vh),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qi(e);if(e.$$typeof===z)return tt(e)}throw Error(o(438,String(e)))}function Bs(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ls(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=rt;return t.index++,n}function Wt(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=Le();return Ps(t,_e,e)}function Ps(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var m=u.next;u.next=f.next,f.next=m}t.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{t=u.next;var b=m=null,_=null,R=t,U=!1;do{var L=R.lane&-536870913;if(L!==R.lane?(de&L)===L:(Sn&L)===L){var C=R.revertLane;if(C===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),L===La&&(U=!0);else if((Sn&C)===C){R=R.next,C===La&&(U=!0);continue}else L={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},_===null?(b=_=L,m=f):_=_.next=L,oe.lanes|=C,jn|=C;L=R.action,ua&&n(f,L),f=R.hasEagerState?R.eagerState:n(f,L)}else C={lane:L,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},_===null?(b=_=C,m=f):_=_.next=C,oe.lanes|=L,jn|=L;R=R.next}while(R!==null&&R!==t);if(_===null?m=f:_.next=b,!gt(f,e.memoizedState)&&($e=!0,U&&(n=Ba,n!==null)))throw n;e.memoizedState=f,e.baseState=m,e.baseQueue=_,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Hs(e){var t=Le(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,u=n.pending,f=t.memoizedState;if(u!==null){n.pending=null;var m=u=u.next;do f=e(f,m.action),m=m.next;while(m!==u);gt(f,t.memoizedState)||($e=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,l]}function hh(e,t,n){var l=oe,u=Le(),f=me;if(f){if(n===void 0)throw Error(o(407));n=n()}else n=t();var m=!gt((_e||u).memoizedState,n);m&&(u.memoizedState=n,$e=!0),u=u.queue;var b=gh.bind(null,l,u,e);if(Vi(2048,8,b,[e]),u.getSnapshot!==t||m||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Ya(9,wl(),ph.bind(null,l,u,n,t),null),Ee===null)throw Error(o(349));f||(Sn&124)!==0||dh(l,t,n)}return n}function dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=Ls(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ph(e,t,n,l){t.value=n,t.getSnapshot=l,mh(t)&&vh(e)}function gh(e,t,n){return n(function(){mh(t)&&vh(e)})}function mh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function vh(e){var t=Ua(e,2);t!==null&&xt(t,e,2)}function Gs(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ua){gn(!0);try{n()}finally{gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function bh(e,t,n,l){return e.baseState=n,Ps(e,_e,typeof l=="function"?l:Wt)}function hv(e,t,n,l,u){if(Tl(e))throw Error(o(485));if(e=t.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){f.listeners.push(m)}};N.T!==null?n(!0):f.isTransition=!1,l(f),n=t.pending,n===null?(f.next=t.pending=f,yh(t,f)):(f.next=n.next,t.pending=n.next=f)}}function yh(e,t){var n=t.action,l=t.payload,u=e.state;if(t.isTransition){var f=N.T,m={};N.T=m;try{var b=n(u,l),_=N.S;_!==null&&_(m,b),_h(e,t,b)}catch(R){Ys(e,t,R)}finally{N.T=f}}else try{f=n(u,l),_h(e,t,f)}catch(R){Ys(e,t,R)}}function _h(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){xh(e,t,l)},function(l){return Ys(e,t,l)}):xh(e,t,n)}function xh(e,t,n){t.status="fulfilled",t.value=n,Sh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,yh(e,n)))}function Ys(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Sh(t),t=t.next;while(t!==l)}e.action=null}function Sh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wh(e,t){return t}function Oh(e,t){if(me){var n=Ee.formState;if(n!==null){e:{var l=oe;if(me){if(Me){t:{for(var u=Me,f=Pt;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ut(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Me=Ut(u.nextSibling),l=u.data==="F!";break e}}ra(l)}l=!1}l&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wh,lastRenderedState:t},n.queue=l,n=Yh.bind(null,oe,l),l.dispatch=n,l=Gs(!1),f=Zs.bind(null,oe,!1,l.queue),l=st(),u={state:t,dispatch:null,action:e,pending:null},l.queue=u,n=hv.bind(null,oe,u,f,n),u.dispatch=n,l.memoizedState=e,[t,n,!1]}function Th(e){var t=Le();return Eh(t,_e,e)}function Eh(e,t,n){if(t=Ps(e,t,wh)[0],e=Sl(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Qi(t)}catch(m){throw m===Pi?ml:m}else l=t;t=Le();var u=t.queue,f=u.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,Ya(9,wl(),dv.bind(null,u,n),null)),[l,f,e]}function dv(e,t){e.action=t}function kh(e){var t=Le(),n=_e;if(n!==null)return Eh(t,n,e);Le(),t=t.memoizedState,n=Le();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ya(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Ls(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function wl(){return{destroy:void 0,resource:void 0}}function Ah(){return Le().memoizedState}function Ol(e,t,n,l){var u=st();l=l===void 0?null:l,oe.flags|=e,u.memoizedState=Ya(1|t,wl(),n,l)}function Vi(e,t,n,l){var u=Le();l=l===void 0?null:l;var f=u.memoizedState.inst;_e!==null&&l!==null&&Ms(l,_e.memoizedState.deps)?u.memoizedState=Ya(t,f,n,l):(oe.flags|=e,u.memoizedState=Ya(1|t,f,n,l))}function jh(e,t){Ol(8390656,8,e,t)}function Rh(e,t){Vi(2048,8,e,t)}function Ch(e,t){return Vi(4,2,e,t)}function Dh(e,t){return Vi(4,4,e,t)}function Mh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uh(e,t,n){n=n!=null?n.concat([e]):null,Vi(4,4,Mh.bind(null,t,e),n)}function $s(){}function zh(e,t){var n=Le();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Ms(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Nh(e,t){var n=Le();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Ms(t,l[1]))return l[0];if(l=e(),ua){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l}function Xs(e,t,n){return n===void 0||(Sn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Bd(),oe.lanes|=e,jn|=e,n)}function qh(e,t,n,l){return gt(n,t)?n:Pa.current!==null?(e=Xs(e,n,l),gt(e,t)||($e=!0),e):(Sn&42)===0?($e=!0,e.memoizedState=n):(e=Bd(),oe.lanes|=e,jn|=e,t)}function Lh(e,t,n,l,u){var f=Q.p;Q.p=f!==0&&8>f?f:8;var m=N.T,b={};N.T=b,Zs(e,!1,t,n);try{var _=u(),R=N.S;if(R!==null&&R(b,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var U=uv(_,l);Zi(e,t,U,_t(e))}else Zi(e,t,l,_t(e))}catch(L){Zi(e,t,{then:function(){},status:"rejected",reason:L},_t())}finally{Q.p=f,N.T=m}}function pv(){}function Qs(e,t,n,l){if(e.tag!==5)throw Error(o(476));var u=Bh(e).queue;Lh(e,u,t,ne,n===null?pv:function(){return Ph(e),n(l)})}function Bh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ph(e){var t=Bh(e).next.queue;Zi(e,t,{},_t())}function Vs(){return tt(hr)}function Hh(){return Le().memoizedState}function Gh(){return Le().memoizedState}function gv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=_n(n);var l=xn(t,e,n);l!==null&&(xt(l,t,n),Gi(l,t,n)),t={cache:ws()},e.payload=t;return}t=t.return}}function mv(e,t,n){var l=_t();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Tl(e)?$h(t,n):(n=ds(e,t,n,l),n!==null&&(xt(n,e,l),Xh(n,t,l)))}function Yh(e,t,n){var l=_t();Zi(e,t,n,l)}function Zi(e,t,n,l){var u={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))$h(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var m=t.lastRenderedState,b=f(m,n);if(u.hasEagerState=!0,u.eagerState=b,gt(b,m))return sl(e,t,u,0),Ee===null&&ol(),!1}catch{}finally{}if(n=ds(e,t,u,l),n!==null)return xt(n,e,l),Xh(n,t,l),!0}return!1}function Zs(e,t,n,l){if(l={lane:2,revertLane:Eu(),action:l,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(t)throw Error(o(479))}else t=ds(e,n,l,2),t!==null&&xt(t,e,2)}function Tl(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function $h(e,t){Ha=yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Fc(e,n)}}var El={readContext:tt,use:xl,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze},Qh={readContext:tt,use:xl,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:jh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ol(4194308,4,Mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ol(4194308,4,e,t)},useInsertionEffect:function(e,t){Ol(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var l=e();if(ua){gn(!0);try{e()}finally{gn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=st();if(n!==void 0){var u=n(t);if(ua){gn(!0);try{n(t)}finally{gn(!1)}}}else u=t;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=mv.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Gs(e);var t=e.queue,n=Yh.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$s,useDeferredValue:function(e,t){var n=st();return Xs(n,e,t)},useTransition:function(){var e=Gs(!1);return e=Lh.bind(null,oe,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=oe,u=st();if(me){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ee===null)throw Error(o(349));(de&124)!==0||dh(l,t,n)}u.memoizedState=n;var f={value:n,getSnapshot:t};return u.queue=f,jh(gh.bind(null,l,f,e),[e]),l.flags|=2048,Ya(9,wl(),ph.bind(null,l,f,n,t),null),n},useId:function(){var e=st(),t=Ee.identifierPrefix;if(me){var n=Jt,l=Kt;n=(l&~(1<<32-pt(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=_l++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=cv++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Vs,useFormState:Oh,useActionState:Oh,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Zs.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bs,useCacheRefresh:function(){return st().memoizedState=gv.bind(null,oe)}},Vh={readContext:tt,use:xl,useCallback:zh,useContext:tt,useEffect:Rh,useImperativeHandle:Uh,useInsertionEffect:Ch,useLayoutEffect:Dh,useMemo:Nh,useReducer:Sl,useRef:Ah,useState:function(){return Sl(Wt)},useDebugValue:$s,useDeferredValue:function(e,t){var n=Le();return qh(n,_e.memoizedState,e,t)},useTransition:function(){var e=Sl(Wt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:Qi(e),t]},useSyncExternalStore:hh,useId:Hh,useHostTransitionStatus:Vs,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var n=Le();return bh(n,_e,e,t)},useMemoCache:Bs,useCacheRefresh:Gh},vv={readContext:tt,use:xl,useCallback:zh,useContext:tt,useEffect:Rh,useImperativeHandle:Uh,useInsertionEffect:Ch,useLayoutEffect:Dh,useMemo:Nh,useReducer:Hs,useRef:Ah,useState:function(){return Hs(Wt)},useDebugValue:$s,useDeferredValue:function(e,t){var n=Le();return _e===null?Xs(n,e,t):qh(n,_e.memoizedState,e,t)},useTransition:function(){var e=Hs(Wt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:Qi(e),t]},useSyncExternalStore:hh,useId:Hh,useHostTransitionStatus:Vs,useFormState:kh,useActionState:kh,useOptimistic:function(e,t){var n=Le();return _e!==null?bh(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bs,useCacheRefresh:Gh},$a=null,Ki=0;function kl(e){var t=Ki;return Ki+=1,$a===null&&($a=[]),ih($a,e,t)}function Ji(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Al(e,t){throw t.$$typeof===y?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zh(e){var t=e._init;return t(e._payload)}function Kh(e){function t(E,w){if(e){var j=E.deletions;j===null?(E.deletions=[w],E.flags|=16):j.push(w)}}function n(E,w){if(!e)return null;for(;w!==null;)t(E,w),w=w.sibling;return null}function l(E){for(var w=new Map;E!==null;)E.key!==null?w.set(E.key,E):w.set(E.index,E),E=E.sibling;return w}function u(E,w){return E=Zt(E,w),E.index=0,E.sibling=null,E}function f(E,w,j){return E.index=j,e?(j=E.alternate,j!==null?(j=j.index,j<w?(E.flags|=67108866,w):j):(E.flags|=67108866,w)):(E.flags|=1048576,w)}function m(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function b(E,w,j,q){return w===null||w.tag!==6?(w=gs(j,E.mode,q),w.return=E,w):(w=u(w,j),w.return=E,w)}function _(E,w,j,q){var K=j.type;return K===O?U(E,w,j.props.children,q,j.key):w!==null&&(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Zh(K)===w.type)?(w=u(w,j.props),Ji(w,j),w.return=E,w):(w=cl(j.type,j.key,j.props,null,E.mode,q),Ji(w,j),w.return=E,w)}function R(E,w,j,q){return w===null||w.tag!==4||w.stateNode.containerInfo!==j.containerInfo||w.stateNode.implementation!==j.implementation?(w=ms(j,E.mode,q),w.return=E,w):(w=u(w,j.children||[]),w.return=E,w)}function U(E,w,j,q,K){return w===null||w.tag!==7?(w=ta(j,E.mode,q,K),w.return=E,w):(w=u(w,j),w.return=E,w)}function L(E,w,j){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=gs(""+w,E.mode,j),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case x:return j=cl(w.type,w.key,w.props,null,E.mode,j),Ji(j,w),j.return=E,j;case k:return w=ms(w,E.mode,j),w.return=E,w;case Ae:var q=w._init;return w=q(w._payload),L(E,w,j)}if(We(w)||Fe(w))return w=ta(w,E.mode,j,null),w.return=E,w;if(typeof w.then=="function")return L(E,kl(w),j);if(w.$$typeof===z)return L(E,pl(E,w),j);Al(E,w)}return null}function C(E,w,j,q){var K=w!==null?w.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return K!==null?null:b(E,w,""+j,q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return j.key===K?_(E,w,j,q):null;case k:return j.key===K?R(E,w,j,q):null;case Ae:return K=j._init,j=K(j._payload),C(E,w,j,q)}if(We(j)||Fe(j))return K!==null?null:U(E,w,j,q,null);if(typeof j.then=="function")return C(E,w,kl(j),q);if(j.$$typeof===z)return C(E,w,pl(E,j),q);Al(E,j)}return null}function D(E,w,j,q,K){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return E=E.get(j)||null,b(w,E,""+q,K);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return E=E.get(q.key===null?j:q.key)||null,_(w,E,q,K);case k:return E=E.get(q.key===null?j:q.key)||null,R(w,E,q,K);case Ae:var se=q._init;return q=se(q._payload),D(E,w,j,q,K)}if(We(q)||Fe(q))return E=E.get(j)||null,U(w,E,q,K,null);if(typeof q.then=="function")return D(E,w,j,kl(q),K);if(q.$$typeof===z)return D(E,w,j,pl(w,q),K);Al(w,q)}return null}function ae(E,w,j,q){for(var K=null,se=null,I=w,te=w=0,Qe=null;I!==null&&te<j.length;te++){I.index>te?(Qe=I,I=null):Qe=I.sibling;var ge=C(E,I,j[te],q);if(ge===null){I===null&&(I=Qe);break}e&&I&&ge.alternate===null&&t(E,I),w=f(ge,w,te),se===null?K=ge:se.sibling=ge,se=ge,I=Qe}if(te===j.length)return n(E,I),me&&aa(E,te),K;if(I===null){for(;te<j.length;te++)I=L(E,j[te],q),I!==null&&(w=f(I,w,te),se===null?K=I:se.sibling=I,se=I);return me&&aa(E,te),K}for(I=l(I);te<j.length;te++)Qe=D(I,E,te,j[te],q),Qe!==null&&(e&&Qe.alternate!==null&&I.delete(Qe.key===null?te:Qe.key),w=f(Qe,w,te),se===null?K=Qe:se.sibling=Qe,se=Qe);return e&&I.forEach(function(Ln){return t(E,Ln)}),me&&aa(E,te),K}function W(E,w,j,q){if(j==null)throw Error(o(151));for(var K=null,se=null,I=w,te=w=0,Qe=null,ge=j.next();I!==null&&!ge.done;te++,ge=j.next()){I.index>te?(Qe=I,I=null):Qe=I.sibling;var Ln=C(E,I,ge.value,q);if(Ln===null){I===null&&(I=Qe);break}e&&I&&Ln.alternate===null&&t(E,I),w=f(Ln,w,te),se===null?K=Ln:se.sibling=Ln,se=Ln,I=Qe}if(ge.done)return n(E,I),me&&aa(E,te),K;if(I===null){for(;!ge.done;te++,ge=j.next())ge=L(E,ge.value,q),ge!==null&&(w=f(ge,w,te),se===null?K=ge:se.sibling=ge,se=ge);return me&&aa(E,te),K}for(I=l(I);!ge.done;te++,ge=j.next())ge=D(I,E,te,ge.value,q),ge!==null&&(e&&ge.alternate!==null&&I.delete(ge.key===null?te:ge.key),w=f(ge,w,te),se===null?K=ge:se.sibling=ge,se=ge);return e&&I.forEach(function(bb){return t(E,bb)}),me&&aa(E,te),K}function Se(E,w,j,q){if(typeof j=="object"&&j!==null&&j.type===O&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case x:e:{for(var K=j.key;w!==null;){if(w.key===K){if(K=j.type,K===O){if(w.tag===7){n(E,w.sibling),q=u(w,j.props.children),q.return=E,E=q;break e}}else if(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ae&&Zh(K)===w.type){n(E,w.sibling),q=u(w,j.props),Ji(q,j),q.return=E,E=q;break e}n(E,w);break}else t(E,w);w=w.sibling}j.type===O?(q=ta(j.props.children,E.mode,q,j.key),q.return=E,E=q):(q=cl(j.type,j.key,j.props,null,E.mode,q),Ji(q,j),q.return=E,E=q)}return m(E);case k:e:{for(K=j.key;w!==null;){if(w.key===K)if(w.tag===4&&w.stateNode.containerInfo===j.containerInfo&&w.stateNode.implementation===j.implementation){n(E,w.sibling),q=u(w,j.children||[]),q.return=E,E=q;break e}else{n(E,w);break}else t(E,w);w=w.sibling}q=ms(j,E.mode,q),q.return=E,E=q}return m(E);case Ae:return K=j._init,j=K(j._payload),Se(E,w,j,q)}if(We(j))return ae(E,w,j,q);if(Fe(j)){if(K=Fe(j),typeof K!="function")throw Error(o(150));return j=K.call(j),W(E,w,j,q)}if(typeof j.then=="function")return Se(E,w,kl(j),q);if(j.$$typeof===z)return Se(E,w,pl(E,j),q);Al(E,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,w!==null&&w.tag===6?(n(E,w.sibling),q=u(w,j),q.return=E,E=q):(n(E,w),q=gs(j,E.mode,q),q.return=E,E=q),m(E)):n(E,w)}return function(E,w,j,q){try{Ki=0;var K=Se(E,w,j,q);return $a=null,K}catch(I){if(I===Pi||I===ml)throw I;var se=mt(29,I,null,E.mode);return se.lanes=q,se.return=E,se}finally{}}}var Xa=Kh(!0),Jh=Kh(!1),jt=B(null),Ht=null;function wn(e){var t=e.alternate;$(He,He.current&1),$(jt,e),Ht===null&&(t===null||Pa.current!==null||t.memoizedState!==null)&&(Ht=e)}function Ih(e){if(e.tag===22){if($(He,He.current),$(jt,e),Ht===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ht=e)}}else On()}function On(){$(He,He.current),$(jt,jt.current)}function en(e){Z(jt),Ht===e&&(Ht=null),Z(He)}var He=B(0);function jl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Lu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ks(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=_t(),u=_n(l);u.payload=t,n!=null&&(u.callback=n),t=xn(e,u,l),t!==null&&(xt(t,e,l),Gi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=_t(),u=_n(l);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=xn(e,u,l),t!==null&&(xt(t,e,l),Gi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),l=_n(n);l.tag=2,t!=null&&(l.callback=t),t=xn(e,l,n),t!==null&&(xt(t,e,n),Gi(t,e,n))}};function Fh(e,t,n,l,u,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,m):t.prototype&&t.prototype.isPureReactComponent?!Di(n,l)||!Di(u,f):!0}function Wh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function ca(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ed(e){Rl(e)}function td(e){console.error(e)}function nd(e){Rl(e)}function Cl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ad(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Is(e,t,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Cl(e,t)},n}function id(e){return e=_n(e),e.tag=3,e}function rd(e,t,n,l){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){ad(t,n,l)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){ad(t,n,l),typeof u!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function bv(e,t,n,l,u){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&qi(t,n,u,!0),n=jt.current,n!==null){switch(n.tag){case 13:return Ht===null?xu():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=u,l===Es?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),wu(e,l,u)),!1;case 22:return n.flags|=65536,l===Es?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),wu(e,l,u)),!1}throw Error(o(435,n.tag))}return wu(e,l,u),xu(),!1}if(me)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,l!==ys&&(e=Error(o(422),{cause:l}),Ni(Tt(e,n)))):(l!==ys&&(t=Error(o(423),{cause:l}),Ni(Tt(t,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Tt(l,n),u=Is(e.stateNode,l,u),js(e,u),Ue!==4&&(Ue=2)),!1;var f=Error(o(520),{cause:l});if(f=Tt(f,n),ar===null?ar=[f]:ar.push(f),Ue!==4&&(Ue=2),t===null)return!0;l=Tt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=Is(n.stateNode,l,e),js(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Rn===null||!Rn.has(f))))return n.flags|=65536,u&=-u,n.lanes|=u,u=id(u),rd(u,e,n,l),js(n,u),!1}n=n.return}while(n!==null);return!1}var ld=Error(o(461)),$e=!1;function Ke(e,t,n,l){t.child=e===null?Jh(t,null,n,l):Xa(t,e.child,n,l)}function od(e,t,n,l,u){n=n.render;var f=t.ref;if("ref"in l){var m={};for(var b in l)b!=="ref"&&(m[b]=l[b])}else m=l;return oa(t),l=Us(e,t,n,m,f,u),b=zs(),e!==null&&!$e?(Ns(e,t,u),tn(e,t,u)):(me&&b&&vs(t),t.flags|=1,Ke(e,t,l,u),t.child)}function sd(e,t,n,l,u){if(e===null){var f=n.type;return typeof f=="function"&&!ps(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,ud(e,t,f,l,u)):(e=cl(n.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!ru(e,u)){var m=f.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(m,l)&&e.ref===t.ref)return tn(e,t,u)}return t.flags|=1,e=Zt(f,l),e.ref=t.ref,e.return=t,t.child=e}function ud(e,t,n,l,u){if(e!==null){var f=e.memoizedProps;if(Di(f,l)&&e.ref===t.ref)if($e=!1,t.pendingProps=l=f,ru(e,u))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,tn(e,t,u)}return Fs(e,t,n,l,u)}function cd(e,t,n){var l=t.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=f!==null?f.baseLanes|n:n,e!==null){for(u=t.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;t.childLanes=f&~l}else t.childLanes=0,t.child=null;return fd(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(t,f!==null?f.cachePool:null),f!==null?uh(t,f):Cs(),Ih(t);else return t.lanes=t.childLanes=536870912,fd(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(gl(t,f.cachePool),uh(t,f),On(),t.memoizedState=null):(e!==null&&gl(t,null),Cs(),On());return Ke(e,t,u,n),t.child}function fd(e,t,n,l){var u=Ts();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&gl(t,null),Cs(),Ih(t),e!==null&&qi(e,t,l,!0),null}function Dl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Fs(e,t,n,l,u){return oa(t),n=Us(e,t,n,l,void 0,u),l=zs(),e!==null&&!$e?(Ns(e,t,u),tn(e,t,u)):(me&&l&&vs(t),t.flags|=1,Ke(e,t,n,u),t.child)}function hd(e,t,n,l,u,f){return oa(t),t.updateQueue=null,n=fh(t,l,n,u),ch(e),l=zs(),e!==null&&!$e?(Ns(e,t,f),tn(e,t,f)):(me&&l&&vs(t),t.flags|=1,Ke(e,t,n,f),t.child)}function dd(e,t,n,l,u){if(oa(t),t.stateNode===null){var f=za,m=n.contextType;typeof m=="object"&&m!==null&&(f=tt(m)),f=new n(l,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Js,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=l,f.state=t.memoizedState,f.refs={},ks(t),m=n.contextType,f.context=typeof m=="object"&&m!==null?tt(m):za,f.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Ks(t,n,m,l),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(m=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),m!==f.state&&Js.enqueueReplaceState(f,f.state,null),$i(t,l,f,u),Yi(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){f=t.stateNode;var b=t.memoizedProps,_=ca(n,b);f.props=_;var R=f.context,U=n.contextType;m=za,typeof U=="object"&&U!==null&&(m=tt(U));var L=n.getDerivedStateFromProps;U=typeof L=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,U||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||R!==m)&&Wh(t,f,l,m),yn=!1;var C=t.memoizedState;f.state=C,$i(t,l,f,u),Yi(),R=t.memoizedState,b||C!==R||yn?(typeof L=="function"&&(Ks(t,n,L,l),R=t.memoizedState),(_=yn||Fh(t,n,_,l,C,R,m))?(U||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),f.props=l,f.state=R,f.context=m,l=_):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{f=t.stateNode,As(e,t),m=t.memoizedProps,U=ca(n,m),f.props=U,L=t.pendingProps,C=f.context,R=n.contextType,_=za,typeof R=="object"&&R!==null&&(_=tt(R)),b=n.getDerivedStateFromProps,(R=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==L||C!==_)&&Wh(t,f,l,_),yn=!1,C=t.memoizedState,f.state=C,$i(t,l,f,u),Yi();var D=t.memoizedState;m!==L||C!==D||yn||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof b=="function"&&(Ks(t,n,b,l),D=t.memoizedState),(U=yn||Fh(t,n,U,l,C,D,_)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(R||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,D,_),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,D,_)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=D),f.props=l,f.state=D,f.context=_,l=U):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),l=!1)}return f=l,Dl(e,t),l=(t.flags&128)!==0,f||l?(f=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&l?(t.child=Xa(t,e.child,null,u),t.child=Xa(t,null,n,u)):Ke(e,t,n,u),t.memoizedState=f.state,e=t.child):e=tn(e,t,u),e}function pd(e,t,n,l){return zi(),t.flags|=256,Ke(e,t,n,l),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eu(e){return{baseLanes:e,cachePool:th()}}function tu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function gd(e,t,n){var l=t.pendingProps,u=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),m&&(u=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(u?wn(t):On(),me){var b=Me,_;if(_=b){e:{for(_=b,b=Pt;_.nodeType!==8;){if(!b){b=null;break e}if(_=Ut(_.nextSibling),_===null){b=null;break e}}b=_}b!==null?(t.memoizedState={dehydrated:b,treeContext:na!==null?{id:Kt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},_=mt(18,null,null,0),_.stateNode=b,_.return=t,t.child=_,at=t,Me=null,_=!0):_=!1}_||ra(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Lu(b)?t.lanes=32:t.lanes=536870912,null;en(t)}return b=l.children,l=l.fallback,u?(On(),u=t.mode,b=Ml({mode:"hidden",children:b},u),l=ta(l,u,n,null),b.return=t,l.return=t,b.sibling=l,t.child=b,u=t.child,u.memoizedState=eu(n),u.childLanes=tu(e,m,n),t.memoizedState=Ws,l):(wn(t),nu(t,b))}if(_=e.memoizedState,_!==null&&(b=_.dehydrated,b!==null)){if(f)t.flags&256?(wn(t),t.flags&=-257,t=au(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),u=l.fallback,b=t.mode,l=Ml({mode:"visible",children:l.children},b),u=ta(u,b,n,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,Xa(t,e.child,null,n),l=t.child,l.memoizedState=eu(n),l.childLanes=tu(e,m,n),t.memoizedState=Ws,t=u);else if(wn(t),Lu(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var R=m.dgst;m=R,l=Error(o(419)),l.stack="",l.digest=m,Ni({value:l,source:null,stack:null}),t=au(e,t,n)}else if($e||qi(e,t,n,!1),m=(n&e.childLanes)!==0,$e||m){if(m=Ee,m!==null&&(l=n&-n,l=(l&42)!==0?1:Bo(l),l=(l&(m.suspendedLanes|n))!==0?0:l,l!==0&&l!==_.retryLane))throw _.retryLane=l,Ua(e,l),xt(m,e,l),ld;b.data==="$?"||xu(),t=au(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,Me=Ut(b.nextSibling),at=t,me=!0,ia=null,Pt=!1,e!==null&&(kt[At++]=Kt,kt[At++]=Jt,kt[At++]=na,Kt=e.id,Jt=e.overflow,na=t),t=nu(t,l.children),t.flags|=4096);return t}return u?(On(),u=l.fallback,b=t.mode,_=e.child,R=_.sibling,l=Zt(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,R!==null?u=Zt(R,u):(u=ta(u,b,n,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,l=u,u=t.child,b=e.child.memoizedState,b===null?b=eu(n):(_=b.cachePool,_!==null?(R=Pe._currentValue,_=_.parent!==R?{parent:R,pool:R}:_):_=th(),b={baseLanes:b.baseLanes|n,cachePool:_}),u.memoizedState=b,u.childLanes=tu(e,m,n),t.memoizedState=Ws,l):(wn(t),n=e.child,e=n.sibling,n=Zt(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function nu(e,t){return t=Ml({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ml(e,t){return e=mt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function au(e,t,n){return Xa(t,e.child,null,n),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function md(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),xs(e.return,t,n)}function iu(e,t,n,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=n,f.tailMode=u)}function vd(e,t,n){var l=t.pendingProps,u=l.revealOrder,f=l.tail;if(Ke(e,t,l.children,n),l=He.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,n,t);else if(e.tag===19)md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch($(He,l),u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&jl(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),iu(t,!1,u,n,f);break;case"backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&jl(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}iu(t,!0,n,null,f);break;case"together":iu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ru(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function yv(e,t,n){switch(t.tag){case 3:je(t,t.stateNode.containerInfo),bn(t,Pe,e.memoizedState.cache),zi();break;case 27:case 5:Uo(t);break;case 4:je(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(wn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?gd(e,t,n):(wn(t),e=tn(e,t,n),e!==null?e.sibling:null);wn(t);break;case 19:var u=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(qi(e,t,n,!1),l=(n&t.childLanes)!==0),u){if(l)return vd(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),$(He,He.current),l)break;return null;case 22:case 23:return t.lanes=0,cd(e,t,n);case 24:bn(t,Pe,e.memoizedState.cache)}return tn(e,t,n)}function bd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!ru(e,n)&&(t.flags&128)===0)return $e=!1,yv(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,me&&(t.flags&1048576)!==0&&Zf(t,hl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,u=l._init;if(l=u(l._payload),t.type=l,typeof l=="function")ps(l)?(e=ca(l,e),t.tag=1,t=dd(null,t,l,e,n)):(t.tag=0,t=Fs(null,t,l,e,n));else{if(l!=null){if(u=l.$$typeof,u===Y){t.tag=11,t=od(null,t,l,e,n);break e}else if(u===ee){t.tag=14,t=sd(null,t,l,e,n);break e}}throw t=Kn(l)||l,Error(o(306,t,""))}}return t;case 0:return Fs(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,u=ca(l,t.pendingProps),dd(e,t,l,u,n);case 3:e:{if(je(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var f=t.memoizedState;u=f.element,As(e,t),$i(t,l,null,n);var m=t.memoizedState;if(l=m.cache,bn(t,Pe,l),l!==f.cache&&Ss(t,[Pe],n,!0),Yi(),l=m.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=pd(e,t,l,n);break e}else if(l!==u){u=Tt(Error(o(424)),t),Ni(u),t=pd(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Ut(e.firstChild),at=t,me=!0,ia=null,Pt=!0,n=Jh(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zi(),l===u){t=tn(e,t,n);break e}Ke(e,t,l,n)}t=t.child}return t;case 26:return Dl(e,t),e===null?(n=Sp(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,l=Vl(ie.current).createElement(n),l[et]=t,l[lt]=e,Ie(l,n,e),Ye(l),t.stateNode=l):t.memoizedState=Sp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Uo(t),e===null&&me&&(l=t.stateNode=yp(t.type,t.pendingProps,ie.current),at=t,Pt=!0,u=Me,Mn(t.type)?(Bu=u,Me=Ut(l.firstChild)):Me=u),Ke(e,t,t.pendingProps.children,n),Dl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((u=l=Me)&&(l=Vv(l,t.type,t.pendingProps,Pt),l!==null?(t.stateNode=l,at=t,Me=Ut(l.firstChild),Pt=!1,u=!0):u=!1),u||ra(t)),Uo(t),u=t.type,f=t.pendingProps,m=e!==null?e.memoizedProps:null,l=f.children,zu(u,f)?l=null:m!==null&&zu(u,m)&&(t.flags|=32),t.memoizedState!==null&&(u=Us(e,t,fv,null,null,n),hr._currentValue=u),Dl(e,t),Ke(e,t,l,n),t.child;case 6:return e===null&&me&&((e=n=Me)&&(n=Zv(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,at=t,Me=null,e=!0):e=!1),e||ra(t)),null;case 13:return gd(e,t,n);case 4:return je(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Xa(t,null,l,n):Ke(e,t,l,n),t.child;case 11:return od(e,t,t.type,t.pendingProps,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,bn(t,t.type,l.value),Ke(e,t,l.children,n),t.child;case 9:return u=t.type._context,l=t.pendingProps.children,oa(t),u=tt(u),l=l(u),t.flags|=1,Ke(e,t,l,n),t.child;case 14:return sd(e,t,t.type,t.pendingProps,n);case 15:return ud(e,t,t.type,t.pendingProps,n);case 19:return vd(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Ml(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Zt(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return cd(e,t,n);case 24:return oa(t),l=tt(Pe),e===null?(u=Ts(),u===null&&(u=Ee,f=ws(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=n),u=f),t.memoizedState={parent:l,cache:u},ks(t),bn(t,Pe,u)):((e.lanes&n)!==0&&(As(e,t),$i(t,null,null,n),Yi()),u=e.memoizedState,f=t.memoizedState,u.parent!==l?(u={parent:l,cache:l},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),bn(t,Pe,l)):(l=f.cache,bn(t,Pe,l),l!==u.cache&&Ss(t,[Pe],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function nn(e){e.flags|=4}function yd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kp(t)){if(t=jt.current,t!==null&&((de&4194048)===de?Ht!==null:(de&62914560)!==de&&(de&536870912)===0||t!==Ht))throw Hi=Es,nh;e.flags|=8192}}function Ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jc():536870912,e.lanes|=t,Ka|=t)}function Ii(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function _v(e,t,n){var l=t.pendingProps;switch(bs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Pe),pn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,If())),De(t),null;case 26:return n=t.memoizedState,e===null?(nn(t),n!==null?(De(t),yd(t,n)):(De(t),t.flags&=-16777217)):n?n!==e.memoizedState?(nn(t),De(t),yd(t,n)):(De(t),t.flags&=-16777217):(e.memoizedProps!==l&&nn(t),De(t),t.flags&=-16777217),null;case 27:Xr(t),n=ie.current;var u=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return De(t),null}e=F.current,Ui(t)?Kf(t):(e=yp(u,l,n),t.stateNode=e,nn(t))}return De(t),null;case 5:if(Xr(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return De(t),null}if(e=F.current,Ui(t))Kf(t);else{switch(u=Vl(ie.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}e[et]=t,e[lt]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=e;e:switch(Ie(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&nn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&nn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ie.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,u=at,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||hp(e.nodeValue,n)),e||ra(t)}else e=Vl(e).createTextNode(l),e[et]=t,t.stateNode=e}return De(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ui(t),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[et]=t}else zi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),u=!1}else u=If(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(en(t),t):(en(t),null)}if(en(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ul(t,t.updateQueue),De(t),null;case 4:return pn(),e===null&&Ru(t.stateNode.containerInfo),De(t),null;case 10:return Ft(t.type),De(t),null;case 19:if(Z(He),u=t.memoizedState,u===null)return De(t),null;if(l=(t.flags&128)!==0,f=u.rendering,f===null)if(l)Ii(u,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=jl(e),f!==null){for(t.flags|=128,Ii(u,!1),e=f.updateQueue,t.updateQueue=e,Ul(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Vf(n,e),n=n.sibling;return $(He,He.current&1|2),t.child}e=e.sibling}u.tail!==null&&Bt()>ql&&(t.flags|=128,l=!0,Ii(u,!1),t.lanes=4194304)}else{if(!l)if(e=jl(f),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ul(t,e),Ii(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!me)return De(t),null}else 2*Bt()-u.renderingStartTime>ql&&n!==536870912&&(t.flags|=128,l=!0,Ii(u,!1),t.lanes=4194304);u.isBackwards?(f.sibling=t.child,t.child=f):(e=u.last,e!==null?e.sibling=f:t.child=f,u.last=f)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Bt(),t.sibling=null,e=He.current,$(He,l?e&1|2:e&1),t):(De(t),null);case 22:case 23:return en(t),Ds(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&Ul(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Z(sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ft(Pe),De(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function xv(e,t){switch(bs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Pe),pn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xr(t),null;case 13:if(en(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(He),null;case 4:return pn(),null;case 10:return Ft(t.type),null;case 22:case 23:return en(t),Ds(),e!==null&&Z(sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Pe),null;case 25:return null;default:return null}}function _d(e,t){switch(bs(t),t.tag){case 3:Ft(Pe),pn();break;case 26:case 27:case 5:Xr(t);break;case 4:pn();break;case 13:en(t);break;case 19:Z(He);break;case 10:Ft(t.type);break;case 22:case 23:en(t),Ds(),e!==null&&Z(sa);break;case 24:Ft(Pe)}}function Fi(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var u=l.next;n=u;do{if((n.tag&e)===e){l=void 0;var f=n.create,m=n.inst;l=f(),m.destroy=l}n=n.next}while(n!==u)}}catch(b){Te(t,t.return,b)}}function Tn(e,t,n){try{var l=t.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var m=l.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,u=t;var _=n,R=b;try{R()}catch(U){Te(u,_,U)}}}l=l.next}while(l!==f)}}catch(U){Te(t,t.return,U)}}function xd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sh(t,n)}catch(l){Te(e,e.return,l)}}}function Sd(e,t,n){n.props=ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Te(e,t,l)}}function Wi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(u){Te(e,t,u)}}function Gt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(u){Te(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Te(e,t,u)}else n.current=null}function wd(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(u){Te(e,e.return,u)}}function lu(e,t,n){try{var l=e.stateNode;Gv(l,e.type,n,t),l[lt]=t}catch(u){Te(e,e.return,u)}}function Od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mn(e.type)||e.tag===4}function ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function su(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ql));else if(l!==4&&(l===27&&Mn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}function zl(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Mn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function Td(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);Ie(t,l,n),t[et]=e,t[lt]=n}catch(f){Te(e,e.return,f)}}var an=!1,Ne=!1,uu=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Sv(e,t){if(e=e.containerInfo,Mu=Wl,e=qf(e),os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var m=0,b=-1,_=-1,R=0,U=0,L=e,C=null;t:for(;;){for(var D;L!==n||u!==0&&L.nodeType!==3||(b=m+u),L!==f||l!==0&&L.nodeType!==3||(_=m+l),L.nodeType===3&&(m+=L.nodeValue.length),(D=L.firstChild)!==null;)C=L,L=D;for(;;){if(L===e)break t;if(C===n&&++R===u&&(b=m),C===f&&++U===l&&(_=m),(D=L.nextSibling)!==null)break;L=C,C=L.parentNode}L=D}n=b===-1||_===-1?null:{start:b,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:e,selectionRange:n},Wl=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,u=f.memoizedProps,f=f.memoizedState,l=n.stateNode;try{var ae=ca(n.type,u,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(ae,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){Te(n,n.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function kd(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:En(e,n),l&4&&Fi(5,n);break;case 1:if(En(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Te(n,n.return,m)}else{var u=ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Te(n,n.return,m)}}l&64&&xd(n),l&512&&Wi(n,n.return);break;case 3:if(En(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sh(e,t)}catch(m){Te(n,n.return,m)}}break;case 27:t===null&&l&4&&Td(n);case 26:case 5:En(e,n),t===null&&l&4&&wd(n),l&512&&Wi(n,n.return);break;case 12:En(e,n);break;case 13:En(e,n),l&4&&Rd(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Cv.bind(null,n),Kv(e,n))));break;case 22:if(l=n.memoizedState!==null||an,!l){t=t!==null&&t.memoizedState!==null||Ne,u=an;var f=Ne;an=l,(Ne=t)&&!f?kn(e,n,(n.subtreeFlags&8772)!==0):En(e,n),an=u,Ne=f}break;case 30:break;default:En(e,n)}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Go(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,ut=!1;function rn(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(_i,n)}catch{}switch(n.tag){case 26:Ne||Gt(n,t),rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Gt(n,t);var l=Re,u=ut;Mn(n.type)&&(Re=n.stateNode,ut=!1),rn(e,t,n),sr(n.stateNode),Re=l,ut=u;break;case 5:Ne||Gt(n,t);case 6:if(l=Re,u=ut,Re=null,rn(e,t,n),Re=l,ut=u,Re!==null)if(ut)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(f){Te(n,t,f)}else try{Re.removeChild(n.stateNode)}catch(f){Te(n,t,f)}break;case 18:Re!==null&&(ut?(e=Re,vp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),mr(e)):vp(Re,n.stateNode));break;case 4:l=Re,u=ut,Re=n.stateNode.containerInfo,ut=!0,rn(e,t,n),Re=l,ut=u;break;case 0:case 11:case 14:case 15:Ne||Tn(2,n,t),Ne||Tn(4,n,t),rn(e,t,n);break;case 1:Ne||(Gt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Sd(n,t,l)),rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:Ne=(l=Ne)||n.memoizedState!==null,rn(e,t,n),Ne=l;break;default:rn(e,t,n)}}function Rd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mr(e)}catch(n){Te(t,t.return,n)}}function wv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ed),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ed),t;default:throw Error(o(435,e.tag))}}function cu(e,t){var n=wv(e);t.forEach(function(l){var u=Dv.bind(null,e,l);n.has(l)||(n.add(l),l.then(u,u))})}function vt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var u=n[l],f=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(Mn(b.type)){Re=b.stateNode,ut=!1;break e}break;case 5:Re=b.stateNode,ut=!1;break e;case 3:case 4:Re=b.stateNode.containerInfo,ut=!0;break e}b=b.return}if(Re===null)throw Error(o(160));jd(f,m,u),Re=null,ut=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}var Mt=null;function Cd(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),bt(e),l&4&&(Tn(3,e,e.return),Fi(3,e),Tn(5,e,e.return));break;case 1:vt(t,e),bt(e),l&512&&(Ne||n===null||Gt(n,n.return)),l&64&&an&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var u=Mt;if(vt(t,e),bt(e),l&512&&(Ne||n===null||Gt(n,n.return)),l&4){var f=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wi]||f[et]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),Ie(f,l,n),f[et]=e,Ye(f),l=f;break e;case"link":var m=Tp("link","href",u).get(l+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(f=m[b],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}f=u.createElement(l),Ie(f,l,n),u.head.appendChild(f);break;case"meta":if(m=Tp("meta","content",u).get(l+(n.content||""))){for(b=0;b<m.length;b++)if(f=m[b],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}f=u.createElement(l),Ie(f,l,n),u.head.appendChild(f);break;default:throw Error(o(468,l))}f[et]=e,Ye(f),l=f}e.stateNode=l}else Ep(u,e.type,e.stateNode);else e.stateNode=Op(u,l,e.memoizedProps);else f!==l?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,l===null?Ep(u,e.type,e.stateNode):Op(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&lu(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),bt(e),l&512&&(Ne||n===null||Gt(n,n.return)),n!==null&&l&4&&lu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),bt(e),l&512&&(Ne||n===null||Gt(n,n.return)),e.flags&32){u=e.stateNode;try{ka(u,"")}catch(D){Te(e,e.return,D)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,lu(e,u,n!==null?n.memoizedProps:u)),l&1024&&(uu=!0);break;case 6:if(vt(t,e),bt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(D){Te(e,e.return,D)}}break;case 3:if(Jl=null,u=Mt,Mt=Zl(t.containerInfo),vt(t,e),Mt=u,bt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(D){Te(e,e.return,D)}uu&&(uu=!1,Dd(e));break;case 4:l=Mt,Mt=Zl(e.stateNode.containerInfo),vt(t,e),bt(e),Mt=l;break;case 12:vt(t,e),bt(e);break;case 13:vt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(mu=Bt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cu(e,l)));break;case 22:u=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,R=an,U=Ne;if(an=R||u,Ne=U||_,vt(t,e),Ne=U,an=R,bt(e),l&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(n===null||_||an||Ne||fa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(f=_.stateNode,u)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=_.stateNode;var L=_.memoizedProps.style,C=L!=null&&L.hasOwnProperty("display")?L.display:null;b.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(D){Te(_,_.return,D)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=u?"":_.memoizedProps}catch(D){Te(_,_.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,cu(e,n))));break;case 19:vt(t,e),bt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cu(e,l)));break;case 30:break;case 21:break;default:vt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Od(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var u=n.stateNode,f=ou(e);zl(e,f,u);break;case 5:var m=n.stateNode;n.flags&32&&(ka(m,""),n.flags&=-33);var b=ou(e);zl(e,b,m);break;case 3:case 4:var _=n.stateNode.containerInfo,R=ou(e);su(e,R,_);break;default:throw Error(o(161))}}catch(U){Te(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Dd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function En(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kd(e,t.alternate,t),t=t.sibling}function fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Tn(4,t,t.return),fa(t);break;case 1:Gt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Sd(t,t.return,n),fa(t);break;case 27:sr(t.stateNode);case 26:case 5:Gt(t,t.return),fa(t);break;case 22:t.memoizedState===null&&fa(t);break;case 30:fa(t);break;default:fa(t)}e=e.sibling}}function kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,u=e,f=t,m=f.flags;switch(f.tag){case 0:case 11:case 15:kn(u,f,n),Fi(4,f);break;case 1:if(kn(u,f,n),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(R){Te(l,l.return,R)}if(l=f,u=l.updateQueue,u!==null){var b=l.stateNode;try{var _=u.shared.hiddenCallbacks;if(_!==null)for(u.shared.hiddenCallbacks=null,u=0;u<_.length;u++)oh(_[u],b)}catch(R){Te(l,l.return,R)}}n&&m&64&&xd(f),Wi(f,f.return);break;case 27:Td(f);case 26:case 5:kn(u,f,n),n&&l===null&&m&4&&wd(f),Wi(f,f.return);break;case 12:kn(u,f,n);break;case 13:kn(u,f,n),n&&m&4&&Rd(u,f);break;case 22:f.memoizedState===null&&kn(u,f,n),Wi(f,f.return);break;case 30:break;default:kn(u,f,n)}t=t.sibling}}function fu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Li(n))}function hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Li(e))}function Yt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Md(e,t,n,l),t=t.sibling}function Md(e,t,n,l){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,n,l),u&2048&&Fi(9,t);break;case 1:Yt(e,t,n,l);break;case 3:Yt(e,t,n,l),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Li(e)));break;case 12:if(u&2048){Yt(e,t,n,l),e=t.stateNode;try{var f=t.memoizedProps,m=f.id,b=f.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Te(t,t.return,_)}}else Yt(e,t,n,l);break;case 13:Yt(e,t,n,l);break;case 23:break;case 22:f=t.stateNode,m=t.alternate,t.memoizedState!==null?f._visibility&2?Yt(e,t,n,l):er(e,t):f._visibility&2?Yt(e,t,n,l):(f._visibility|=2,Qa(e,t,n,l,(t.subtreeFlags&10256)!==0)),u&2048&&fu(m,t);break;case 24:Yt(e,t,n,l),u&2048&&hu(t.alternate,t);break;default:Yt(e,t,n,l)}}function Qa(e,t,n,l,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,m=t,b=n,_=l,R=m.flags;switch(m.tag){case 0:case 11:case 15:Qa(f,m,b,_,u),Fi(8,m);break;case 23:break;case 22:var U=m.stateNode;m.memoizedState!==null?U._visibility&2?Qa(f,m,b,_,u):er(f,m):(U._visibility|=2,Qa(f,m,b,_,u)),u&&R&2048&&fu(m.alternate,m);break;case 24:Qa(f,m,b,_,u),u&&R&2048&&hu(m.alternate,m);break;default:Qa(f,m,b,_,u)}t=t.sibling}}function er(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,u=l.flags;switch(l.tag){case 22:er(n,l),u&2048&&fu(l.alternate,l);break;case 24:er(n,l),u&2048&&hu(l.alternate,l);break;default:er(n,l)}t=t.sibling}}var tr=8192;function Va(e){if(e.subtreeFlags&tr)for(e=e.child;e!==null;)Ud(e),e=e.sibling}function Ud(e){switch(e.tag){case 26:Va(e),e.flags&tr&&e.memoizedState!==null&&sb(Mt,e.memoizedState,e.memoizedProps);break;case 5:Va(e);break;case 3:case 4:var t=Mt;Mt=Zl(e.stateNode.containerInfo),Va(e),Mt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=tr,tr=16777216,Va(e),tr=t):Va(e));break;default:Va(e)}}function zd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function nr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Xe=l,qd(l,e)}zd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nd(e),e=e.sibling}function Nd(e){switch(e.tag){case 0:case 11:case 15:nr(e),e.flags&2048&&Tn(9,e,e.return);break;case 3:nr(e);break;case 12:nr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nl(e)):nr(e);break;default:nr(e)}}function Nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Xe=l,qd(l,e)}zd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Tn(8,t,t.return),Nl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nl(t));break;default:Nl(t)}e=e.sibling}}function qd(e,t){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:Tn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Li(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Xe=l;else e:for(n=e;Xe!==null;){l=Xe;var u=l.sibling,f=l.return;if(Ad(l),l===n){Xe=null;break e}if(u!==null){u.return=f,Xe=u;break e}Xe=f}}}var Ov={getCacheForType:function(e){var t=tt(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Tv=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ee=null,ue=null,de=0,be=0,yt=null,An=!1,Za=!1,du=!1,ln=0,Ue=0,jn=0,ha=0,pu=0,Rt=0,Ka=0,ar=null,ct=null,gu=!1,mu=0,ql=1/0,Ll=null,Rn=null,Je=0,Cn=null,Ja=null,Ia=0,vu=0,bu=null,Ld=null,ir=0,yu=null;function _t(){if((ve&2)!==0&&de!==0)return de&-de;if(N.T!==null){var e=La;return e!==0?e:Eu()}return Wc()}function Bd(){Rt===0&&(Rt=(de&536870912)===0||me?Kc():536870912);var e=jt.current;return e!==null&&(e.flags|=32),Rt}function xt(e,t,n){(e===Ee&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Fa(e,0),Dn(e,de,Rt,!1)),Si(e,n),((ve&2)===0||e!==Ee)&&(e===Ee&&((ve&2)===0&&(ha|=n),Ue===4&&Dn(e,de,Rt,!1)),$t(e))}function Pd(e,t,n){if((ve&6)!==0)throw Error(o(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||xi(e,t),u=l?Av(e,t):Su(e,t,!0),f=l;do{if(u===0){Za&&!l&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!Ev(n)){u=Su(e,t,!1),f=!1;continue}if(u===2){if(f=t,e.errorRecoveryDisabledLanes&f)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;u=ar;var _=b.current.memoizedState.isDehydrated;if(_&&(Fa(b,m).flags|=256),m=Su(b,m,!1),m!==2){if(du&&!_){b.errorRecoveryDisabledLanes|=f,ha|=f,u=4;break e}f=ct,ct=u,f!==null&&(ct===null?ct=f:ct.push.apply(ct,f))}u=m}if(f=!1,u!==2)continue}}if(u===1){Fa(e,0),Dn(e,t,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Dn(l,t,Rt,!An);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=mu+300-Bt(),10<u)){if(Dn(l,t,Rt,!An),Kr(l,0,!0)!==0)break e;l.timeoutHandle=gp(Hd.bind(null,l,n,ct,Ll,gu,t,Rt,ha,Ka,An,f,2,-0,0),u);break e}Hd(l,n,ct,Ll,gu,t,Rt,ha,Ka,An,f,0,-0,0)}}break}while(!0);$t(e)}function Hd(e,t,n,l,u,f,m,b,_,R,U,L,C,D){if(e.timeoutHandle=-1,L=t.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(fr={stylesheets:null,count:0,unsuspend:ob},Ud(t),L=ub(),L!==null)){e.cancelPendingCommit=L(Zd.bind(null,e,t,f,n,l,u,m,b,_,U,1,C,D)),Dn(e,f,m,!R);return}Zd(e,t,f,n,l,u,m,b,_)}function Ev(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var u=n[l],f=u.getSnapshot;u=u.value;try{if(!gt(f(),u))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,l){t&=~pu,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var u=t;0<u;){var f=31-pt(u),m=1<<f;l[f]=-1,u&=~m}n!==0&&Ic(e,n,t)}function Bl(){return(ve&6)===0?(rr(0),!1):!0}function _u(){if(ue!==null){if(be===0)var e=ue.return;else e=ue,It=la=null,qs(e),$a=null,Ki=0,e=ue;for(;e!==null;)_d(e.alternate,e),e=e.return;ue=null}}function Fa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,$v(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_u(),Ee=e,ue=n=Zt(e.current,null),de=t,be=0,yt=null,An=!1,Za=xi(e,t),du=!1,Ka=Rt=pu=ha=jn=Ue=0,ct=ar=null,gu=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var u=31-pt(l),f=1<<u;t|=e[u],l&=~f}return ln=t,ol(),n}function Gd(e,t){oe=null,N.H=El,t===Pi||t===ml?(t=rh(),be=3):t===nh?(t=rh(),be=4):be=t===ld?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ue===null&&(Ue=1,Cl(e,Tt(t,e.current)))}function Yd(){var e=N.H;return N.H=El,e===null?El:e}function $d(){var e=N.A;return N.A=Ov,e}function xu(){Ue=4,An||(de&4194048)!==de&&jt.current!==null||(Za=!0),(jn&134217727)===0&&(ha&134217727)===0||Ee===null||Dn(Ee,de,Rt,!1)}function Su(e,t,n){var l=ve;ve|=2;var u=Yd(),f=$d();(Ee!==e||de!==t)&&(Ll=null,Fa(e,t)),t=!1;var m=Ue;e:do try{if(be!==0&&ue!==null){var b=ue,_=yt;switch(be){case 8:_u(),m=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var R=be;if(be=0,yt=null,Wa(e,b,_,R),n&&Za){m=0;break e}break;default:R=be,be=0,yt=null,Wa(e,b,_,R)}}kv(),m=Ue;break}catch(U){Gd(e,U)}while(!0);return t&&e.shellSuspendCounter++,It=la=null,ve=l,N.H=u,N.A=f,ue===null&&(Ee=null,de=0,ol()),m}function kv(){for(;ue!==null;)Xd(ue)}function Av(e,t){var n=ve;ve|=2;var l=Yd(),u=$d();Ee!==e||de!==t?(Ll=null,ql=Bt()+500,Fa(e,t)):Za=xi(e,t);e:do try{if(be!==0&&ue!==null){t=ue;var f=yt;t:switch(be){case 1:be=0,yt=null,Wa(e,t,f,1);break;case 2:case 9:if(ah(f)){be=0,yt=null,Qd(t);break}t=function(){be!==2&&be!==9||Ee!==e||(be=7),$t(e)},f.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:ah(f)?(be=0,yt=null,Qd(t)):(be=0,yt=null,Wa(e,t,f,7));break;case 5:var m=null;switch(ue.tag){case 26:m=ue.memoizedState;case 5:case 27:var b=ue;if(!m||kp(m)){be=0,yt=null;var _=b.sibling;if(_!==null)ue=_;else{var R=b.return;R!==null?(ue=R,Pl(R)):ue=null}break t}}be=0,yt=null,Wa(e,t,f,5);break;case 6:be=0,yt=null,Wa(e,t,f,6);break;case 8:_u(),Ue=6;break e;default:throw Error(o(462))}}jv();break}catch(U){Gd(e,U)}while(!0);return It=la=null,N.H=l,N.A=u,ve=n,ue!==null?0:(Ee=null,de=0,ol(),Ue)}function jv(){for(;ue!==null&&!Ig();)Xd(ue)}function Xd(e){var t=bd(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?Pl(e):ue=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hd(n,t,t.pendingProps,t.type,void 0,de);break;case 11:t=hd(n,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:qs(t);default:_d(n,t),t=ue=Vf(t,ln),t=bd(n,t,ln)}e.memoizedProps=e.pendingProps,t===null?Pl(e):ue=t}function Wa(e,t,n,l){It=la=null,qs(t),$a=null,Ki=0;var u=t.return;try{if(bv(e,u,t,n,de)){Ue=1,Cl(e,Tt(n,e.current)),ue=null;return}}catch(f){if(u!==null)throw ue=u,f;Ue=1,Cl(e,Tt(n,e.current)),ue=null;return}t.flags&32768?(me||l===1?e=!0:Za||(de&536870912)!==0?e=!1:(An=e=!0,(l===2||l===9||l===3||l===6)&&(l=jt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vd(t,e)):Pl(t)}function Pl(e){var t=e;do{if((t.flags&32768)!==0){Vd(t,An);return}e=t.return;var n=_v(t.alternate,t,ln);if(n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Ue===0&&(Ue=5)}function Vd(e,t){do{var n=xv(e.alternate,e);if(n!==null){n.flags&=32767,ue=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=n}while(e!==null);Ue=6,ue=null}function Zd(e,t,n,l,u,f,m,b,_){e.cancelPendingCommit=null;do Hl();while(Je!==0);if((ve&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(f=t.lanes|t.childLanes,f|=hs,om(e,n,f,m,b,_),e===Ee&&(ue=Ee=null,de=0),Ja=t,Cn=e,Ia=n,vu=f,bu=u,Ld=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Mv(Qr,function(){return Wd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,u=Q.p,Q.p=2,m=ve,ve|=4;try{Sv(e,t,n)}finally{ve=m,Q.p=u,N.T=l}}Je=1,Kd(),Jd(),Id()}}function Kd(){if(Je===1){Je=0;var e=Cn,t=Ja,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var l=Q.p;Q.p=2;var u=ve;ve|=4;try{Cd(t,e);var f=Uu,m=qf(e.containerInfo),b=f.focusedElem,_=f.selectionRange;if(m!==b&&b&&b.ownerDocument&&Nf(b.ownerDocument.documentElement,b)){if(_!==null&&os(b)){var R=_.start,U=_.end;if(U===void 0&&(U=R),"selectionStart"in b)b.selectionStart=R,b.selectionEnd=Math.min(U,b.value.length);else{var L=b.ownerDocument||document,C=L&&L.defaultView||window;if(C.getSelection){var D=C.getSelection(),ae=b.textContent.length,W=Math.min(_.start,ae),Se=_.end===void 0?W:Math.min(_.end,ae);!D.extend&&W>Se&&(m=Se,Se=W,W=m);var E=zf(b,W),w=zf(b,Se);if(E&&w&&(D.rangeCount!==1||D.anchorNode!==E.node||D.anchorOffset!==E.offset||D.focusNode!==w.node||D.focusOffset!==w.offset)){var j=L.createRange();j.setStart(E.node,E.offset),D.removeAllRanges(),W>Se?(D.addRange(j),D.extend(w.node,w.offset)):(j.setEnd(w.node,w.offset),D.addRange(j))}}}}for(L=[],D=b;D=D.parentNode;)D.nodeType===1&&L.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<L.length;b++){var q=L[b];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Wl=!!Mu,Uu=Mu=null}finally{ve=u,Q.p=l,N.T=n}}e.current=t,Je=2}}function Jd(){if(Je===2){Je=0;var e=Cn,t=Ja,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var l=Q.p;Q.p=2;var u=ve;ve|=4;try{kd(e,t.alternate,t)}finally{ve=u,Q.p=l,N.T=n}}Je=3}}function Id(){if(Je===4||Je===3){Je=0,Fg();var e=Cn,t=Ja,n=Ia,l=Ld;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Ja=Cn=null,Fd(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Rn=null),Po(n),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(_i,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=N.T,u=Q.p,Q.p=2,N.T=null;try{for(var f=e.onRecoverableError,m=0;m<l.length;m++){var b=l[m];f(b.value,{componentStack:b.stack})}}finally{N.T=t,Q.p=u}}(Ia&3)!==0&&Hl(),$t(e),u=e.pendingLanes,(n&4194090)!==0&&(u&42)!==0?e===yu?ir++:(ir=0,yu=e):ir=0,rr(0)}}function Fd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Li(t)))}function Hl(e){return Kd(),Jd(),Id(),Wd()}function Wd(){if(Je!==5)return!1;var e=Cn,t=vu;vu=0;var n=Po(Ia),l=N.T,u=Q.p;try{Q.p=32>n?32:n,N.T=null,n=bu,bu=null;var f=Cn,m=Ia;if(Je=0,Ja=Cn=null,Ia=0,(ve&6)!==0)throw Error(o(331));var b=ve;if(ve|=4,Nd(f.current),Md(f,f.current,m,n),ve=b,rr(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(_i,f)}catch{}return!0}finally{Q.p=u,N.T=l,Fd(e,t)}}function ep(e,t,n){t=Tt(n,t),t=Is(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(Si(e,2),$t(e))}function Te(e,t,n){if(e.tag===3)ep(e,e,n);else for(;t!==null;){if(t.tag===3){ep(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rn===null||!Rn.has(l))){e=Tt(n,e),n=id(2),l=xn(t,n,2),l!==null&&(rd(n,l,t,e),Si(l,2),$t(l));break}}t=t.return}}function wu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Tv;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(n)||(du=!0,u.add(n),e=Rv.bind(null,e,t,n),t.then(e,e))}function Rv(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(de&n)===n&&(Ue===4||Ue===3&&(de&62914560)===de&&300>Bt()-mu?(ve&2)===0&&Fa(e,0):pu|=n,Ka===de&&(Ka=0)),$t(e)}function tp(e,t){t===0&&(t=Jc()),e=Ua(e,t),e!==null&&(Si(e,t),$t(e))}function Cv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tp(e,n)}function Dv(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),tp(e,n)}function Mv(e,t){return No(e,t)}var Gl=null,ei=null,Ou=!1,Yl=!1,Tu=!1,da=0;function $t(e){e!==ei&&e.next===null&&(ei===null?Gl=ei=e:ei=ei.next=e),Yl=!0,Ou||(Ou=!0,zv())}function rr(e,t){if(!Tu&&Yl){Tu=!0;do for(var n=!1,l=Gl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var m=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-pt(42|e)+1)-1,f&=u&~(m&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,rp(l,f))}else f=de,f=Kr(l,l===Ee?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||xi(l,f)||(n=!0,rp(l,f));l=l.next}while(n);Tu=!1}}function Uv(){np()}function np(){Yl=Ou=!1;var e=0;da!==0&&(Yv()&&(e=da),da=0);for(var t=Bt(),n=null,l=Gl;l!==null;){var u=l.next,f=ap(l,t);f===0?(l.next=null,n===null?Gl=u:n.next=u,u===null&&(ei=n)):(n=l,(e!==0||(f&3)!==0)&&(Yl=!0)),l=u}rr(e)}function ap(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var m=31-pt(f),b=1<<m,_=u[m];_===-1?((b&n)===0||(b&l)!==0)&&(u[m]=lm(b,t)):_<=t&&(e.expiredLanes|=b),f&=~b}if(t=Ee,n=de,n=Kr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qo(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&qo(l),Po(n)){case 2:case 8:n=Vc;break;case 32:n=Qr;break;case 268435456:n=Zc;break;default:n=Qr}return l=ip.bind(null,e),n=No(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&qo(l),e.callbackPriority=2,e.callbackNode=null,2}function ip(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hl()&&e.callbackNode!==n)return null;var l=de;return l=Kr(e,e===Ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Pd(e,l,t),ap(e,Bt()),e.callbackNode!=null&&e.callbackNode===n?ip.bind(null,e):null)}function rp(e,t){if(Hl())return null;Pd(e,t,!0)}function zv(){Xv(function(){(ve&6)!==0?No(Qc,Uv):np()})}function Eu(){return da===0&&(da=Kc()),da}function lp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function op(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Nv(e,t,n,l,u){if(t==="submit"&&n&&n.stateNode===u){var f=lp((u[lt]||null).action),m=l.submitter;m&&(t=(t=m[lt]||null)?lp(t.formAction):m.getAttribute("formAction"),t!==null&&(f=t,m=null));var b=new il("action","action",null,l,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(da!==0){var _=m?op(u,m):new FormData(u);Qs(n,{pending:!0,data:_,method:u.method,action:f},null,_)}}else typeof f=="function"&&(b.preventDefault(),_=m?op(u,m):new FormData(u),Qs(n,{pending:!0,data:_,method:u.method,action:f},f,_))},currentTarget:u}]})}}for(var ku=0;ku<fs.length;ku++){var Au=fs[ku],qv=Au.toLowerCase(),Lv=Au[0].toUpperCase()+Au.slice(1);Dt(qv,"on"+Lv)}Dt(Pf,"onAnimationEnd"),Dt(Hf,"onAnimationIteration"),Dt(Gf,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(tv,"onTransitionRun"),Dt(nv,"onTransitionStart"),Dt(av,"onTransitionCancel"),Dt(Yf,"onTransitionEnd"),Oa("onMouseEnter",["mouseout","mouseover"]),Oa("onMouseLeave",["mouseout","mouseover"]),Oa("onPointerEnter",["pointerout","pointerover"]),Oa("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lr));function sp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],u=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var m=l.length-1;0<=m;m--){var b=l[m],_=b.instance,R=b.currentTarget;if(b=b.listener,_!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=R;try{f(u)}catch(U){Rl(U)}u.currentTarget=null,f=_}else for(m=0;m<l.length;m++){if(b=l[m],_=b.instance,R=b.currentTarget,b=b.listener,_!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=R;try{f(u)}catch(U){Rl(U)}u.currentTarget=null,f=_}}}}function ce(e,t){var n=t[Ho];n===void 0&&(n=t[Ho]=new Set);var l=e+"__bubble";n.has(l)||(up(t,e,2,!1),n.add(l))}function ju(e,t,n){var l=0;t&&(l|=4),up(n,e,l,t)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Ru(e){if(!e[$l]){e[$l]=!0,tf.forEach(function(n){n!=="selectionchange"&&(Bv.has(n)||ju(n,!1,e),ju(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$l]||(t[$l]=!0,ju("selectionchange",!1,t))}}function up(e,t,n,l){switch(Mp(t)){case 2:var u=hb;break;case 8:u=db;break;default:u=$u}n=u.bind(null,t,n,e),u=void 0,!Fo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function Cu(e,t,n,l,u){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var b=l.stateNode.containerInfo;if(b===u)break;if(m===4)for(m=l.return;m!==null;){var _=m.tag;if((_===3||_===4)&&m.stateNode.containerInfo===u)return;m=m.return}for(;b!==null;){if(m=xa(b),m===null)return;if(_=m.tag,_===5||_===6||_===26||_===27){l=f=m;continue e}b=b.parentNode}}l=l.return}mf(function(){var R=f,U=Jo(n),L=[];e:{var C=$f.get(e);if(C!==void 0){var D=il,ae=e;switch(e){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":D=Mm;break;case"focusin":ae="focus",D=ns;break;case"focusout":ae="blur",D=ns;break;case"beforeblur":case"afterblur":D=ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Nm;break;case Pf:case Hf:case Gf:D=Om;break;case Yf:D=Lm;break;case"scroll":case"scrollend":D=ym;break;case"wheel":D=Pm;break;case"copy":case"cut":case"paste":D=Em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=xf;break;case"toggle":case"beforetoggle":D=Gm}var W=(t&4)!==0,Se=!W&&(e==="scroll"||e==="scrollend"),E=W?C!==null?C+"Capture":null:C;W=[];for(var w=R,j;w!==null;){var q=w;if(j=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||j===null||E===null||(q=Ti(w,E),q!=null&&W.push(or(w,q,j))),Se)break;w=w.return}0<W.length&&(C=new D(C,ae,null,n,U),L.push({event:C,listeners:W}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",C&&n!==Ko&&(ae=n.relatedTarget||n.fromElement)&&(xa(ae)||ae[_a]))break e;if((D||C)&&(C=U.window===U?U:(C=U.ownerDocument)?C.defaultView||C.parentWindow:window,D?(ae=n.relatedTarget||n.toElement,D=R,ae=ae?xa(ae):null,ae!==null&&(Se=c(ae),W=ae.tag,ae!==Se||W!==5&&W!==27&&W!==6)&&(ae=null)):(D=null,ae=R),D!==ae)){if(W=yf,q="onMouseLeave",E="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(W=xf,q="onPointerLeave",E="onPointerEnter",w="pointer"),Se=D==null?C:Oi(D),j=ae==null?C:Oi(ae),C=new W(q,w+"leave",D,n,U),C.target=Se,C.relatedTarget=j,q=null,xa(U)===R&&(W=new W(E,w+"enter",ae,n,U),W.target=j,W.relatedTarget=Se,q=W),Se=q,D&&ae)t:{for(W=D,E=ae,w=0,j=W;j;j=ti(j))w++;for(j=0,q=E;q;q=ti(q))j++;for(;0<w-j;)W=ti(W),w--;for(;0<j-w;)E=ti(E),j--;for(;w--;){if(W===E||E!==null&&W===E.alternate)break t;W=ti(W),E=ti(E)}W=null}else W=null;D!==null&&cp(L,C,D,W,!1),ae!==null&&Se!==null&&cp(L,Se,ae,W,!0)}}e:{if(C=R?Oi(R):window,D=C.nodeName&&C.nodeName.toLowerCase(),D==="select"||D==="input"&&C.type==="file")var K=jf;else if(kf(C))if(Rf)K=Fm;else{K=Jm;var se=Km}else D=C.nodeName,!D||D.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?R&&Zo(R.elementType)&&(K=jf):K=Im;if(K&&(K=K(e,R))){Af(L,K,n,U);break e}se&&se(e,C,R),e==="focusout"&&R&&C.type==="number"&&R.memoizedProps.value!=null&&Vo(C,"number",C.value)}switch(se=R?Oi(R):window,e){case"focusin":(kf(se)||se.contentEditable==="true")&&(Ca=se,ss=R,Mi=null);break;case"focusout":Mi=ss=Ca=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,Lf(L,n,U);break;case"selectionchange":if(ev)break;case"keydown":case"keyup":Lf(L,n,U)}var I;if(is)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Ra?Tf(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Sf&&n.locale!=="ko"&&(Ra||te!=="onCompositionStart"?te==="onCompositionEnd"&&Ra&&(I=vf()):(vn=U,Wo="value"in vn?vn.value:vn.textContent,Ra=!0)),se=Xl(R,te),0<se.length&&(te=new _f(te,e,null,n,U),L.push({event:te,listeners:se}),I?te.data=I:(I=Ef(n),I!==null&&(te.data=I)))),(I=$m?Xm(e,n):Qm(e,n))&&(te=Xl(R,"onBeforeInput"),0<te.length&&(se=new _f("onBeforeInput","beforeinput",null,n,U),L.push({event:se,listeners:te}),se.data=I)),Nv(L,e,R,n,U)}sp(L,t)})}function or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xl(e,t){for(var n=t+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ti(e,n),u!=null&&l.unshift(or(e,u,f)),u=Ti(e,t),u!=null&&l.push(or(e,u,f))),e.tag===3)return l;e=e.return}return[]}function ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cp(e,t,n,l,u){for(var f=t._reactName,m=[];n!==null&&n!==l;){var b=n,_=b.alternate,R=b.stateNode;if(b=b.tag,_!==null&&_===l)break;b!==5&&b!==26&&b!==27||R===null||(_=R,u?(R=Ti(n,f),R!=null&&m.unshift(or(n,R,_))):u||(R=Ti(n,f),R!=null&&m.push(or(n,R,_)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Pv=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function fp(e){return(typeof e=="string"?e:""+e).replace(Pv,`
`).replace(Hv,"")}function hp(e,t){return t=fp(t),fp(e)===t}function Ql(){}function xe(e,t,n,l,u,f){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ka(e,""+l);break;case"className":Ir(e,"class",l);break;case"tabIndex":Ir(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ir(e,n,l);break;case"style":pf(e,l,f);break;case"data":if(t!=="object"){Ir(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=el(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&xe(e,t,"name",u.name,u,null),xe(e,t,"formEncType",u.formEncType,u,null),xe(e,t,"formMethod",u.formMethod,u,null),xe(e,t,"formTarget",u.formTarget,u,null)):(xe(e,t,"encType",u.encType,u,null),xe(e,t,"method",u.method,u,null),xe(e,t,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=el(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ql);break;case"onScroll":l!=null&&ce("scroll",e);break;case"onScrollEnd":l!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=el(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":ce("beforetoggle",e),ce("toggle",e),Jr(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Jr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=vm.get(n)||n,Jr(e,n,l))}}function Du(e,t,n,l,u,f){switch(n){case"style":pf(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?ka(e,l):(typeof l=="number"||typeof l=="bigint")&&ka(e,""+l);break;case"onScroll":l!=null&&ce("scroll",e);break;case"onScrollEnd":l!=null&&ce("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),t=n.slice(2,u?n.length-7:void 0),f=e[lt]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,u);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Jr(e,n,l)}}}function Ie(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var l=!1,u=!1,f;for(f in n)if(n.hasOwnProperty(f)){var m=n[f];if(m!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,f,m,n,null)}}u&&xe(e,t,"srcSet",n.srcSet,n,null),l&&xe(e,t,"src",n.src,n,null);return;case"input":ce("invalid",e);var b=f=m=u=null,_=null,R=null;for(l in n)if(n.hasOwnProperty(l)){var U=n[l];if(U!=null)switch(l){case"name":u=U;break;case"type":m=U;break;case"checked":_=U;break;case"defaultChecked":R=U;break;case"value":f=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:xe(e,t,l,U,n,null)}}cf(e,f,b,_,R,m,u,!1),Fr(e);return;case"select":ce("invalid",e),l=m=f=null;for(u in n)if(n.hasOwnProperty(u)&&(b=n[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":m=b;break;case"multiple":l=b;default:xe(e,t,u,b,n,null)}t=f,n=m,e.multiple=!!l,t!=null?Ea(e,!!l,t,!1):n!=null&&Ea(e,!!l,n,!0);return;case"textarea":ce("invalid",e),f=u=l=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":l=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:xe(e,t,m,b,n,null)}hf(e,l,u,f),Fr(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(l=n[_],l!=null))switch(_){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xe(e,t,_,l,n,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(l=0;l<lr.length;l++)ce(lr[l],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(l=n[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,R,l,n,null)}return;default:if(Zo(t)){for(U in n)n.hasOwnProperty(U)&&(l=n[U],l!==void 0&&Du(e,t,U,l,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!=null&&xe(e,t,b,l,n,null))}function Gv(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,m=null,b=null,_=null,R=null,U=null;for(D in n){var L=n[D];if(n.hasOwnProperty(D)&&L!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":_=L;default:l.hasOwnProperty(D)||xe(e,t,D,null,l,L)}}for(var C in l){var D=l[C];if(L=n[C],l.hasOwnProperty(C)&&(D!=null||L!=null))switch(C){case"type":f=D;break;case"name":u=D;break;case"checked":R=D;break;case"defaultChecked":U=D;break;case"value":m=D;break;case"defaultValue":b=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==L&&xe(e,t,C,D,l,L)}}Qo(e,m,b,_,R,U,f,u);return;case"select":D=m=b=C=null;for(f in n)if(_=n[f],n.hasOwnProperty(f)&&_!=null)switch(f){case"value":break;case"multiple":D=_;default:l.hasOwnProperty(f)||xe(e,t,f,null,l,_)}for(u in l)if(f=l[u],_=n[u],l.hasOwnProperty(u)&&(f!=null||_!=null))switch(u){case"value":C=f;break;case"defaultValue":b=f;break;case"multiple":m=f;default:f!==_&&xe(e,t,u,f,l,_)}t=b,n=m,l=D,C!=null?Ea(e,!!n,C,!1):!!l!=!!n&&(t!=null?Ea(e,!!n,t,!0):Ea(e,!!n,n?[]:"",!1));return;case"textarea":D=C=null;for(b in n)if(u=n[b],n.hasOwnProperty(b)&&u!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:xe(e,t,b,null,l,u)}for(m in l)if(u=l[m],f=n[m],l.hasOwnProperty(m)&&(u!=null||f!=null))switch(m){case"value":C=u;break;case"defaultValue":D=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==f&&xe(e,t,m,u,l,f)}ff(e,C,D);return;case"option":for(var ae in n)if(C=n[ae],n.hasOwnProperty(ae)&&C!=null&&!l.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:xe(e,t,ae,null,l,C)}for(_ in l)if(C=l[_],D=n[_],l.hasOwnProperty(_)&&C!==D&&(C!=null||D!=null))switch(_){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:xe(e,t,_,C,l,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)C=n[W],n.hasOwnProperty(W)&&C!=null&&!l.hasOwnProperty(W)&&xe(e,t,W,null,l,C);for(R in l)if(C=l[R],D=n[R],l.hasOwnProperty(R)&&C!==D&&(C!=null||D!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,t));break;default:xe(e,t,R,C,l,D)}return;default:if(Zo(t)){for(var Se in n)C=n[Se],n.hasOwnProperty(Se)&&C!==void 0&&!l.hasOwnProperty(Se)&&Du(e,t,Se,void 0,l,C);for(U in l)C=l[U],D=n[U],!l.hasOwnProperty(U)||C===D||C===void 0&&D===void 0||Du(e,t,U,C,l,D);return}}for(var E in n)C=n[E],n.hasOwnProperty(E)&&C!=null&&!l.hasOwnProperty(E)&&xe(e,t,E,null,l,C);for(L in l)C=l[L],D=n[L],!l.hasOwnProperty(L)||C===D||C==null&&D==null||xe(e,t,L,C,l,D)}var Mu=null,Uu=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function dp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nu=null;function Yv(){var e=window.event;return e&&e.type==="popstate"?e===Nu?!1:(Nu=e,!0):(Nu=null,!1)}var gp=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(e){return mp.resolve(null).then(e).catch(Qv)}:gp;function Qv(e){setTimeout(function(){throw e})}function Mn(e){return e==="head"}function vp(e,t){var n=t,l=0,u=0;do{var f=n.nextSibling;if(e.removeChild(n),f&&f.nodeType===8)if(n=f.data,n==="/$"){if(0<l&&8>l){n=l;var m=e.ownerDocument;if(n&1&&sr(m.documentElement),n&2&&sr(m.body),n&4)for(n=m.head,sr(n),m=n.firstChild;m;){var b=m.nextSibling,_=m.nodeName;m[wi]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=b}}if(u===0){e.removeChild(f),mr(t);return}u--}else n==="$"||n==="$?"||n==="$!"?u++:l=n.charCodeAt(0)-48;else l=0;n=f}while(n);mr(t)}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qu(n),Go(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vv(e,t,n,l){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Zv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function Lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Kv(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Bu=null;function bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function yp(e,t,n){switch(t=Vl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function sr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Go(e)}var Ct=new Map,_p=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=Q.d;Q.d={f:Jv,r:Iv,D:Fv,C:Wv,L:eb,m:tb,X:ab,S:nb,M:ib};function Jv(){var e=on.f(),t=Bl();return e||t}function Iv(e){var t=Sa(e);t!==null&&t.tag===5&&t.type==="form"?Ph(t):on.r(e)}var ni=typeof document>"u"?null:document;function xp(e,t,n){var l=ni;if(l&&typeof t=="string"&&t){var u=Ot(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),_p.has(u)||(_p.add(u),e={rel:e,crossOrigin:n,href:t},l.querySelector(u)===null&&(t=l.createElement("link"),Ie(t,"link",e),Ye(t),l.head.appendChild(t)))}}function Fv(e){on.D(e),xp("dns-prefetch",e,null)}function Wv(e,t){on.C(e,t),xp("preconnect",e,t)}function eb(e,t,n){on.L(e,t,n);var l=ni;if(l&&e&&t){var u='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Ot(n.imageSizes)+'"]')):u+='[href="'+Ot(e)+'"]';var f=u;switch(t){case"style":f=ai(e);break;case"script":f=ii(e)}Ct.has(f)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ct.set(f,e),l.querySelector(u)!==null||t==="style"&&l.querySelector(ur(f))||t==="script"&&l.querySelector(cr(f))||(t=l.createElement("link"),Ie(t,"link",e),Ye(t),l.head.appendChild(t)))}}function tb(e,t){on.m(e,t);var n=ni;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ii(e)}if(!Ct.has(f)&&(e=v({rel:"modulepreload",href:e},t),Ct.set(f,e),n.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(cr(f)))return}l=n.createElement("link"),Ie(l,"link",e),Ye(l),n.head.appendChild(l)}}}function nb(e,t,n){on.S(e,t,n);var l=ni;if(l&&e){var u=wa(l).hoistableStyles,f=ai(e);t=t||"default";var m=u.get(f);if(!m){var b={loading:0,preload:null};if(m=l.querySelector(ur(f)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ct.get(f))&&Pu(e,n);var _=m=l.createElement("link");Ye(_),Ie(_,"link",e),_._p=new Promise(function(R,U){_.onload=R,_.onerror=U}),_.addEventListener("load",function(){b.loading|=1}),_.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Kl(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:b},u.set(f,m)}}}function ab(e,t){on.X(e,t);var n=ni;if(n&&e){var l=wa(n).hoistableScripts,u=ii(e),f=l.get(u);f||(f=n.querySelector(cr(u)),f||(e=v({src:e,async:!0},t),(t=Ct.get(u))&&Hu(e,t),f=n.createElement("script"),Ye(f),Ie(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function ib(e,t){on.M(e,t);var n=ni;if(n&&e){var l=wa(n).hoistableScripts,u=ii(e),f=l.get(u);f||(f=n.querySelector(cr(u)),f||(e=v({src:e,async:!0,type:"module"},t),(t=Ct.get(u))&&Hu(e,t),f=n.createElement("script"),Ye(f),Ie(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function Sp(e,t,n,l){var u=(u=ie.current)?Zl(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ai(n.href),n=wa(u).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ai(n.href);var f=wa(u).hoistableStyles,m=f.get(e);if(m||(u=u.ownerDocument||u,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,m),(f=u.querySelector(ur(e)))&&!f._p&&(m.instance=f,m.state.loading=5),Ct.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ct.set(e,n),f||rb(u,e,n,m.state))),t&&l===null)throw Error(o(528,""));return m}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(n),n=wa(u).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ai(e){return'href="'+Ot(e)+'"'}function ur(e){return'link[rel="stylesheet"]['+e+"]"}function wp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function rb(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ie(t,"link",n),Ye(t),e.head.appendChild(t))}function ii(e){return'[src="'+Ot(e)+'"]'}function cr(e){return"script[async]"+e}function Op(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(l)return t.instance=l,Ye(l),l;var u=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ye(l),Ie(l,"style",u),Kl(l,n.precedence,e),t.instance=l;case"stylesheet":u=ai(n.href);var f=e.querySelector(ur(u));if(f)return t.state.loading|=4,t.instance=f,Ye(f),f;l=wp(n),(u=Ct.get(u))&&Pu(l,u),f=(e.ownerDocument||e).createElement("link"),Ye(f);var m=f;return m._p=new Promise(function(b,_){m.onload=b,m.onerror=_}),Ie(f,"link",l),t.state.loading|=4,Kl(f,n.precedence,e),t.instance=f;case"script":return f=ii(n.src),(u=e.querySelector(cr(f)))?(t.instance=u,Ye(u),u):(l=n,(u=Ct.get(f))&&(l=v({},n),Hu(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ye(u),Ie(u,"link",l),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Kl(l,n.precedence,e));return t.instance}function Kl(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,m=0;m<l.length;m++){var b=l[m];if(b.dataset.precedence===t)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Jl=null;function Tp(e,t,n){if(Jl===null){var l=new Map,u=Jl=new Map;u.set(n,l)}else u=Jl,l=u.get(n),l||(l=new Map,u.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var f=n[u];if(!(f[wi]||f[et]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var m=f.getAttribute(t)||"";m=e+m;var b=l.get(m);b?b.push(f):l.set(m,[f])}}return l}function Ep(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function lb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fr=null;function ob(){}function sb(e,t,n){if(fr===null)throw Error(o(475));var l=fr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=ai(n.href),f=e.querySelector(ur(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Il.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=f,Ye(f);return}f=e.ownerDocument||e,n=wp(n),(u=Ct.get(u))&&Pu(n,u),f=f.createElement("link"),Ye(f);var m=f;m._p=new Promise(function(b,_){m.onload=b,m.onerror=_}),Ie(f,"link",n),t.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Il.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function ub(){if(fr===null)throw Error(o(475));var e=fr;return e.stylesheets&&e.count===0&&Gu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Gu(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Il(){if(this.count--,this.count===0){if(this.stylesheets)Gu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fl=null;function Gu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fl=new Map,t.forEach(cb,e),Fl=null,Il.call(e))}function cb(e,t){if(!(t.state.loading&4)){var n=Fl.get(e);if(n)var l=n.get(null);else{n=new Map,Fl.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var m=u[f];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),l=m)}l&&n.set(null,l)}u=t.instance,m=u.getAttribute("data-precedence"),f=n.get(m)||l,f===l&&n.set(null,u),n.set(m,u),this.count++,l=Il.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var hr={$$typeof:z,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function fb(e,t,n,l,u,f,m,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.hiddenUpdates=Lo(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ap(e,t,n,l,u,f,m,b,_,R,U,L){return e=new fb(e,t,n,m,b,_,R,L),t=1,f===!0&&(t|=24),f=mt(3,null,null,t),e.current=f,f.stateNode=e,t=ws(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:l,isDehydrated:n,cache:t},ks(f),e}function jp(e){return e?(e=za,e):za}function Rp(e,t,n,l,u,f){u=jp(u),l.context===null?l.context=u:l.pendingContext=u,l=_n(t),l.payload={element:n},f=f===void 0?null:f,f!==null&&(l.callback=f),n=xn(e,l,t),n!==null&&(xt(n,e,t),Gi(n,e,t))}function Cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yu(e,t){Cp(e,t),(e=e.alternate)&&Cp(e,t)}function Dp(e){if(e.tag===13){var t=Ua(e,67108864);t!==null&&xt(t,e,67108864),Yu(e,67108864)}}var Wl=!0;function hb(e,t,n,l){var u=N.T;N.T=null;var f=Q.p;try{Q.p=2,$u(e,t,n,l)}finally{Q.p=f,N.T=u}}function db(e,t,n,l){var u=N.T;N.T=null;var f=Q.p;try{Q.p=8,$u(e,t,n,l)}finally{Q.p=f,N.T=u}}function $u(e,t,n,l){if(Wl){var u=Xu(l);if(u===null)Cu(e,t,l,eo,n),Up(e,l);else if(gb(u,e,t,n,l))l.stopPropagation();else if(Up(e,l),t&4&&-1<pb.indexOf(e)){for(;u!==null;){var f=Sa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var m=Jn(f.pendingLanes);if(m!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var _=1<<31-pt(m);b.entanglements[1]|=_,m&=~_}$t(f),(ve&6)===0&&(ql=Bt()+500,rr(0))}}break;case 13:b=Ua(f,2),b!==null&&xt(b,f,2),Bl(),Yu(f,2)}if(f=Xu(l),f===null&&Cu(e,t,l,eo,n),f===u)break;u=f}u!==null&&l.stopPropagation()}else Cu(e,t,l,null,n)}}function Xu(e){return e=Jo(e),Qu(e)}var eo=null;function Qu(e){if(eo=null,e=xa(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return eo=e,null}function Mp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wg()){case Qc:return 2;case Vc:return 8;case Qr:case em:return 32;case Zc:return 268435456;default:return 32}default:return 32}}var Vu=!1,Un=null,zn=null,Nn=null,dr=new Map,pr=new Map,qn=[],pb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Up(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function gr(e,t,n,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},t!==null&&(t=Sa(t),t!==null&&Dp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function gb(e,t,n,l,u){switch(t){case"focusin":return Un=gr(Un,e,t,n,l,u),!0;case"dragenter":return zn=gr(zn,e,t,n,l,u),!0;case"mouseover":return Nn=gr(Nn,e,t,n,l,u),!0;case"pointerover":var f=u.pointerId;return dr.set(f,gr(dr.get(f)||null,e,t,n,l,u)),!0;case"gotpointercapture":return f=u.pointerId,pr.set(f,gr(pr.get(f)||null,e,t,n,l,u)),!0}return!1}function zp(e){var t=xa(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,sm(e.priority,function(){if(n.tag===13){var l=_t();l=Bo(l);var u=Ua(n,l);u!==null&&xt(u,n,l),Yu(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Ko=l,n.target.dispatchEvent(l),Ko=null}else return t=Sa(n),t!==null&&Dp(t),e.blockedOn=n,!1;t.shift()}return!0}function Np(e,t,n){to(e)&&n.delete(t)}function mb(){Vu=!1,Un!==null&&to(Un)&&(Un=null),zn!==null&&to(zn)&&(zn=null),Nn!==null&&to(Nn)&&(Nn=null),dr.forEach(Np),pr.forEach(Np)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,Vu||(Vu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,mb)))}var ao=null;function qp(e){ao!==e&&(ao=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ao===e&&(ao=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],u=e[t+2];if(typeof l!="function"){if(Qu(l||n)===null)continue;break}var f=Sa(n);f!==null&&(e.splice(t,3),t-=3,Qs(f,{pending:!0,data:u,method:n.method,action:l},l,u))}}))}function mr(e){function t(_){return no(_,e)}Un!==null&&no(Un,e),zn!==null&&no(zn,e),Nn!==null&&no(Nn,e),dr.forEach(t),pr.forEach(t);for(var n=0;n<qn.length;n++){var l=qn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)zp(n),n.blockedOn===null&&qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var u=n[l],f=n[l+1],m=u[lt]||null;if(typeof f=="function")m||qp(n);else if(m){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,m=f[lt]||null)b=m.formAction;else if(Qu(u)!==null)continue}else b=m.action;typeof b=="function"?n[l+1]=b:(n.splice(l,3),l-=3),qp(n)}}}function Zu(e){this._internalRoot=e}io.prototype.render=Zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=_t();Rp(n,l,e,t,null,null)},io.prototype.unmount=Zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rp(e.current,2,null,e,null,null),Bl(),t[_a]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qn.length&&t!==0&&t<qn[n].priority;n++);qn.splice(n,0,e),n===0&&zp(e)}};var Lp=a.version;if(Lp!=="19.1.0")throw Error(o(527,Lp,"19.1.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=d(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var vb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{_i=ro.inject(vb),dt=ro}catch{}}return br.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,l="",u=ed,f=td,m=nd,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=Ap(e,1,!1,null,null,n,l,u,f,m,b,null),e[_a]=t.current,Ru(e),new Zu(t)},br.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var l=!1,u="",f=ed,m=td,b=nd,_=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=Ap(e,1,!0,t,n??null,l,u,f,m,b,_,R),t.context=jp(null),n=t.current,l=_t(),l=Bo(l),u=_n(l),u.callback=null,xn(n,u,l),n=l,t.current.lanes=n,Si(t,n),$t(t),e[_a]=t.current,Ru(e),new io(t)},br.version="19.1.0",br}var Zp;function Cb(){if(Zp)return Iu.exports;Zp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Iu.exports=Rb(),Iu.exports}var Db=Cb();F0();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},Cr.apply(this,arguments)}var $n;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})($n||($n={}));const Kp="popstate";function Mb(r){r===void 0&&(r={});function a(s,c){let{pathname:h="/",search:g="",hash:d=""}=va(s.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),dc("",{pathname:h,search:g,hash:d},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(s,c){let h=s.document.querySelector("base"),g="";if(h&&h.getAttribute("href")){let d=s.location.href,p=d.indexOf("#");g=p===-1?d:d.slice(0,p)}return g+"#"+(typeof c=="string"?c:So(c))}function o(s,c){Uc(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return zb(a,i,o,r)}function Be(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function Uc(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Ub(){return Math.random().toString(36).substr(2,8)}function Jp(r,a){return{usr:r.state,key:r.key,idx:a}}function dc(r,a,i,o){return i===void 0&&(i=null),Cr({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof a=="string"?va(a):a,{state:i,key:a&&a.key||o||Ub()})}function So(r){let{pathname:a="/",search:i="",hash:o=""}=r;return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function va(r){let a={};if(r){let i=r.indexOf("#");i>=0&&(a.hash=r.substr(i),r=r.substr(0,i));let o=r.indexOf("?");o>=0&&(a.search=r.substr(o),r=r.substr(0,o)),r&&(a.pathname=r)}return a}function zb(r,a,i,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:c=!1}=o,h=s.history,g=$n.Pop,d=null,p=v();p==null&&(p=0,h.replaceState(Cr({},h.state,{idx:p}),""));function v(){return(h.state||{idx:null}).idx}function y(){g=$n.Pop;let T=v(),G=T==null?null:T-p;p=T,d&&d({action:g,location:A.location,delta:G})}function x(T,G){g=$n.Push;let V=dc(A.location,T,G);i&&i(V,T),p=v()+1;let z=Jp(V,p),Y=A.createHref(V);try{h.pushState(z,"",Y)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;s.location.assign(Y)}c&&d&&d({action:g,location:A.location,delta:1})}function k(T,G){g=$n.Replace;let V=dc(A.location,T,G);i&&i(V,T),p=v();let z=Jp(V,p),Y=A.createHref(V);h.replaceState(z,"",Y),c&&d&&d({action:g,location:A.location,delta:0})}function O(T){let G=s.location.origin!=="null"?s.location.origin:s.location.href,V=typeof T=="string"?T:So(T);return V=V.replace(/ $/,"%20"),Be(G,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,G)}let A={get action(){return g},get location(){return r(s,h)},listen(T){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Kp,y),d=T,()=>{s.removeEventListener(Kp,y),d=null}},createHref(T){return a(s,T)},createURL:O,encodeLocation(T){let G=O(T);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:x,replace:k,go(T){return h.go(T)}};return A}var Ip;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Ip||(Ip={}));function Nb(r,a,i){return i===void 0&&(i="/"),qb(r,a,i)}function qb(r,a,i,o){let s=typeof a=="string"?va(a):a,c=zc(s.pathname||"/",i);if(c==null)return null;let h=W0(r);Lb(h);let g=null;for(let d=0;g==null&&d<h.length;++d){let p=Jb(c);g=Vb(h[d],p)}return g}function W0(r,a,i,o){a===void 0&&(a=[]),i===void 0&&(i=[]),o===void 0&&(o="");let s=(c,h,g)=>{let d={relativePath:g===void 0?c.path||"":g,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};d.relativePath.startsWith("/")&&(Be(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let p=Xn([o,d.relativePath]),v=i.concat(d);c.children&&c.children.length>0&&(Be(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),W0(c.children,a,v,p)),!(c.path==null&&!c.index)&&a.push({path:p,score:Xb(p,c.index),routesMeta:v})};return r.forEach((c,h)=>{var g;if(c.path===""||!((g=c.path)!=null&&g.includes("?")))s(c,h);else for(let d of eg(c.path))s(c,h,d)}),a}function eg(r){let a=r.split("/");if(a.length===0)return[];let[i,...o]=a,s=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let h=eg(o.join("/")),g=[];return g.push(...h.map(d=>d===""?c:[c,d].join("/"))),s&&g.push(...h),g.map(d=>r.startsWith("/")&&d===""?"/":d)}function Lb(r){r.sort((a,i)=>a.score!==i.score?i.score-a.score:Qb(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const Bb=/^:[\w-]+$/,Pb=3,Hb=2,Gb=1,Yb=10,$b=-2,Fp=r=>r==="*";function Xb(r,a){let i=r.split("/"),o=i.length;return i.some(Fp)&&(o+=$b),a&&(o+=Hb),i.filter(s=>!Fp(s)).reduce((s,c)=>s+(Bb.test(c)?Pb:c===""?Gb:Yb),o)}function Qb(r,a){return r.length===a.length&&r.slice(0,-1).every((o,s)=>o===a[s])?r[r.length-1]-a[a.length-1]:0}function Vb(r,a,i){let{routesMeta:o}=r,s={},c="/",h=[];for(let g=0;g<o.length;++g){let d=o[g],p=g===o.length-1,v=c==="/"?a:a.slice(c.length)||"/",y=Zb({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},v),x=d.route;if(!y)return null;Object.assign(s,y.params),h.push({params:s,pathname:Xn([c,y.pathname]),pathnameBase:ey(Xn([c,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(c=Xn([c,y.pathnameBase]))}return h}function Zb(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,o]=Kb(r.path,r.caseSensitive,r.end),s=a.match(i);if(!s)return null;let c=s[0],h=c.replace(/(.)\/+$/,"$1"),g=s.slice(1);return{params:o.reduce((p,v,y)=>{let{paramName:x,isOptional:k}=v;if(x==="*"){let A=g[y]||"";h=c.slice(0,c.length-A.length).replace(/(.)\/+$/,"$1")}const O=g[y];return k&&!O?p[x]=void 0:p[x]=(O||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:h,pattern:r}}function Kb(r,a,i){a===void 0&&(a=!1),i===void 0&&(i=!0),Uc(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let o=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,d)=>(o.push({paramName:g,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),o]}function Jb(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Uc(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),r}}function zc(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=r.charAt(i);return o&&o!=="/"?null:r.slice(i)||"/"}function Ib(r,a){a===void 0&&(a="/");let{pathname:i,search:o="",hash:s=""}=typeof r=="string"?va(r):r;return{pathname:i?i.startsWith("/")?i:Fb(i,a):a,search:ty(o),hash:ny(s)}}function Fb(r,a){let i=a.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function tc(r,a,i,o){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wb(r){return r.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function tg(r,a){let i=Wb(r);return a?i.map((o,s)=>s===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function ng(r,a,i,o){o===void 0&&(o=!1);let s;typeof r=="string"?s=va(r):(s=Cr({},r),Be(!s.pathname||!s.pathname.includes("?"),tc("?","pathname","search",s)),Be(!s.pathname||!s.pathname.includes("#"),tc("#","pathname","hash",s)),Be(!s.search||!s.search.includes("#"),tc("#","search","hash",s)));let c=r===""||s.pathname==="",h=c?"/":s.pathname,g;if(h==null)g=i;else{let y=a.length-1;if(!o&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),y-=1;s.pathname=x.join("/")}g=y>=0?a[y]:"/"}let d=Ib(s,g),p=h&&h!=="/"&&h.endsWith("/"),v=(c||h===".")&&i.endsWith("/");return!d.pathname.endsWith("/")&&(p||v)&&(d.pathname+="/"),d}const Xn=r=>r.join("/").replace(/\/\/+/g,"/"),ey=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ty=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ny=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function ay(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const ag=["post","put","patch","delete"];new Set(ag);const iy=["get",...ag];new Set(iy);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},Dr.apply(this,arguments)}const Nc=P.createContext(null),ry=P.createContext(null),ba=P.createContext(null),jo=P.createContext(null),Qn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),ig=P.createContext(null);function ly(r,a){let{relative:i}=a===void 0?{}:a;Nr()||Be(!1);let{basename:o,navigator:s}=P.useContext(ba),{hash:c,pathname:h,search:g}=lg(r,{relative:i}),d=h;return o!=="/"&&(d=h==="/"?o:Xn([o,h])),s.createHref({pathname:d,search:g,hash:c})}function Nr(){return P.useContext(jo)!=null}function bi(){return Nr()||Be(!1),P.useContext(jo).location}function rg(r){P.useContext(ba).static||P.useLayoutEffect(r)}function oy(){let{isDataRoute:r}=P.useContext(Qn);return r?xy():sy()}function sy(){Nr()||Be(!1);let r=P.useContext(Nc),{basename:a,future:i,navigator:o}=P.useContext(ba),{matches:s}=P.useContext(Qn),{pathname:c}=bi(),h=JSON.stringify(tg(s,i.v7_relativeSplatPath)),g=P.useRef(!1);return rg(()=>{g.current=!0}),P.useCallback(function(p,v){if(v===void 0&&(v={}),!g.current)return;if(typeof p=="number"){o.go(p);return}let y=ng(p,JSON.parse(h),c,v.relative==="path");r==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:Xn([a,y.pathname])),(v.replace?o.replace:o.push)(y,v.state,v)},[a,o,h,c,r])}function uy(){let{matches:r}=P.useContext(Qn),a=r[r.length-1];return a?a.params:{}}function lg(r,a){let{relative:i}=a===void 0?{}:a,{future:o}=P.useContext(ba),{matches:s}=P.useContext(Qn),{pathname:c}=bi(),h=JSON.stringify(tg(s,o.v7_relativeSplatPath));return P.useMemo(()=>ng(r,JSON.parse(h),c,i==="path"),[r,h,c,i])}function cy(r,a){return fy(r,a)}function fy(r,a,i,o){Nr()||Be(!1);let{navigator:s}=P.useContext(ba),{matches:c}=P.useContext(Qn),h=c[c.length-1],g=h?h.params:{};h&&h.pathname;let d=h?h.pathnameBase:"/";h&&h.route;let p=bi(),v;if(a){var y;let T=typeof a=="string"?va(a):a;d==="/"||(y=T.pathname)!=null&&y.startsWith(d)||Be(!1),v=T}else v=p;let x=v.pathname||"/",k=x;if(d!=="/"){let T=d.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(T.length).join("/")}let O=Nb(r,{pathname:k}),A=my(O&&O.map(T=>Object.assign({},T,{params:Object.assign({},g,T.params),pathname:Xn([d,s.encodeLocation?s.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?d:Xn([d,s.encodeLocation?s.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),c,i,o);return a&&A?P.createElement(jo.Provider,{value:{location:Dr({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:$n.Pop}},A):A}function hy(){let r=_y(),a=ay(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},a),i?P.createElement("pre",{style:s},i):null,null)}const dy=P.createElement(hy,null);class py extends P.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?P.createElement(Qn.Provider,{value:this.props.routeContext},P.createElement(ig.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gy(r){let{routeContext:a,match:i,children:o}=r,s=P.useContext(Nc);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),P.createElement(Qn.Provider,{value:a},o)}function my(r,a,i,o){var s;if(a===void 0&&(a=[]),i===void 0&&(i=null),o===void 0&&(o=null),r==null){var c;if(!i)return null;if(i.errors)r=i.matches;else if((c=o)!=null&&c.v7_partialHydration&&a.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let h=r,g=(s=i)==null?void 0:s.errors;if(g!=null){let v=h.findIndex(y=>y.route.id&&(g==null?void 0:g[y.route.id])!==void 0);v>=0||Be(!1),h=h.slice(0,Math.min(h.length,v+1))}let d=!1,p=-1;if(i&&o&&o.v7_partialHydration)for(let v=0;v<h.length;v++){let y=h[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=v),y.route.id){let{loaderData:x,errors:k}=i,O=y.route.loader&&x[y.route.id]===void 0&&(!k||k[y.route.id]===void 0);if(y.route.lazy||O){d=!0,p>=0?h=h.slice(0,p+1):h=[h[0]];break}}}return h.reduceRight((v,y,x)=>{let k,O=!1,A=null,T=null;i&&(k=g&&y.route.id?g[y.route.id]:void 0,A=y.route.errorElement||dy,d&&(p<0&&x===0?(Sy("route-fallback"),O=!0,T=null):p===x&&(O=!0,T=y.route.hydrateFallbackElement||null)));let G=a.concat(h.slice(0,x+1)),V=()=>{let z;return k?z=A:O?z=T:y.route.Component?z=P.createElement(y.route.Component,null):y.route.element?z=y.route.element:z=v,P.createElement(gy,{match:y,routeContext:{outlet:v,matches:G,isDataRoute:i!=null},children:z})};return i&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?P.createElement(py,{location:i.location,revalidation:i.revalidation,component:A,error:k,children:V(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):V()},null)}var og=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(og||{}),sg=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(sg||{});function vy(r){let a=P.useContext(Nc);return a||Be(!1),a}function by(r){let a=P.useContext(ry);return a||Be(!1),a}function yy(r){let a=P.useContext(Qn);return a||Be(!1),a}function ug(r){let a=yy(),i=a.matches[a.matches.length-1];return i.route.id||Be(!1),i.route.id}function _y(){var r;let a=P.useContext(ig),i=by(),o=ug();return a!==void 0?a:(r=i.errors)==null?void 0:r[o]}function xy(){let{router:r}=vy(og.UseNavigateStable),a=ug(sg.UseNavigateStable),i=P.useRef(!1);return rg(()=>{i.current=!0}),P.useCallback(function(s,c){c===void 0&&(c={}),i.current&&(typeof s=="number"?r.navigate(s):r.navigate(s,Dr({fromRouteId:a},c)))},[r,a])}const Wp={};function Sy(r,a,i){Wp[r]||(Wp[r]=!0)}function wy(r,a){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Or(r){Be(!1)}function Oy(r){let{basename:a="/",children:i=null,location:o,navigationType:s=$n.Pop,navigator:c,static:h=!1,future:g}=r;Nr()&&Be(!1);let d=a.replace(/^\/*/,"/"),p=P.useMemo(()=>({basename:d,navigator:c,static:h,future:Dr({v7_relativeSplatPath:!1},g)}),[d,g,c,h]);typeof o=="string"&&(o=va(o));let{pathname:v="/",search:y="",hash:x="",state:k=null,key:O="default"}=o,A=P.useMemo(()=>{let T=zc(v,d);return T==null?null:{location:{pathname:T,search:y,hash:x,state:k,key:O},navigationType:s}},[d,v,y,x,k,O,s]);return A==null?null:P.createElement(ba.Provider,{value:p},P.createElement(jo.Provider,{children:i,value:A}))}function Ty(r){let{children:a,location:i}=r;return cy(pc(a),i)}new Promise(()=>{});function pc(r,a){a===void 0&&(a=[]);let i=[];return P.Children.forEach(r,(o,s)=>{if(!P.isValidElement(o))return;let c=[...a,s];if(o.type===P.Fragment){i.push.apply(i,pc(o.props.children,c));return}o.type!==Or&&Be(!1),!o.props.index||!o.props.children||Be(!1);let h={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=pc(o.props.children,c)),i.push(h)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gc(){return gc=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},gc.apply(this,arguments)}function Ey(r,a){if(r==null)return{};var i={},o=Object.keys(r),s,c;for(c=0;c<o.length;c++)s=o[c],!(a.indexOf(s)>=0)&&(i[s]=r[s]);return i}function ky(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ay(r,a){return r.button===0&&(!a||a==="_self")&&!ky(r)}const jy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ry="6";try{window.__reactRouterVersion=Ry}catch{}const Cy="startTransition",e0=Eb[Cy];function Dy(r){let{basename:a,children:i,future:o,window:s}=r,c=P.useRef();c.current==null&&(c.current=Mb({window:s,v5Compat:!0}));let h=c.current,[g,d]=P.useState({action:h.action,location:h.location}),{v7_startTransition:p}=o||{},v=P.useCallback(y=>{p&&e0?e0(()=>d(y)):d(y)},[d,p]);return P.useLayoutEffect(()=>h.listen(v),[h,v]),P.useEffect(()=>wy(o),[o]),P.createElement(Oy,{basename:a,children:i,location:g.location,navigationType:g.action,navigator:h,future:o})}const My=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fn=P.forwardRef(function(a,i){let{onClick:o,relative:s,reloadDocument:c,replace:h,state:g,target:d,to:p,preventScrollReset:v,viewTransition:y}=a,x=Ey(a,jy),{basename:k}=P.useContext(ba),O,A=!1;if(typeof p=="string"&&Uy.test(p)&&(O=p,My))try{let z=new URL(window.location.href),Y=p.startsWith("//")?new URL(z.protocol+p):new URL(p),H=zc(Y.pathname,k);Y.origin===z.origin&&H!=null?p=H+Y.search+Y.hash:A=!0}catch{}let T=ly(p,{relative:s}),G=zy(p,{replace:h,state:g,target:d,preventScrollReset:v,relative:s,viewTransition:y});function V(z){o&&o(z),z.defaultPrevented||G(z)}return P.createElement("a",gc({},x,{href:O||T,onClick:A||c?o:V,ref:i,target:d}))});var t0;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(t0||(t0={}));var n0;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(n0||(n0={}));function zy(r,a){let{target:i,replace:o,state:s,preventScrollReset:c,relative:h,viewTransition:g}=a===void 0?{}:a,d=oy(),p=bi(),v=lg(r,{relative:h});return P.useCallback(y=>{if(Ay(y,i)){y.preventDefault();let x=o!==void 0?o:So(p)===So(v);d(r,{replace:x,state:s,preventScrollReset:c,relative:h,viewTransition:g})}},[p,d,v,o,s,i,r,c,h,g])}const Ny="modulepreload",qy=function(r){return"/"+r},a0={},qr=function(a,i,o){let s=Promise.resolve();if(i&&i.length>0){let h=function(p){return Promise.all(p.map(v=>Promise.resolve(v).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),d=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));s=h(i.map(p=>{if(p=qy(p),p in a0)return;a0[p]=!0;const v=p.endsWith(".css"),y=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const x=document.createElement("link");if(x.rel=v?"stylesheet":Ny,v||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),v)return new Promise((k,O)=>{x.addEventListener("load",k),x.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h}return s.then(h=>{for(const g of h||[])g.status==="rejected"&&c(g.reason);return a().catch(c)})},Ly=r=>{let a;return r?a=r:typeof fetch>"u"?a=(...i)=>qr(async()=>{const{default:o}=await Promise.resolve().then(()=>yi);return{default:o}},void 0).then(({default:o})=>o(...i)):a=fetch,(...i)=>a(...i)};class qc extends Error{constructor(a,i="FunctionsError",o){super(a),this.name=i,this.context=o}}class By extends qc{constructor(a){super("Failed to send a request to the Edge Function","FunctionsFetchError",a)}}class Py extends qc{constructor(a){super("Relay Error invoking the Edge Function","FunctionsRelayError",a)}}class Hy extends qc{constructor(a){super("Edge Function returned a non-2xx status code","FunctionsHttpError",a)}}var mc;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(mc||(mc={}));var Gy=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};class Yy{constructor(a,{headers:i={},customFetch:o,region:s=mc.Any}={}){this.url=a,this.headers=i,this.region=s,this.fetch=Ly(o)}setAuth(a){this.headers.Authorization=`Bearer ${a}`}invoke(a,i={}){var o;return Gy(this,void 0,void 0,function*(){try{const{headers:s,method:c,body:h}=i;let g={},{region:d}=i;d||(d=this.region),d&&d!=="any"&&(g["x-region"]=d);let p;h&&(s&&!Object.prototype.hasOwnProperty.call(s,"Content-Type")||!s)&&(typeof Blob<"u"&&h instanceof Blob||h instanceof ArrayBuffer?(g["Content-Type"]="application/octet-stream",p=h):typeof h=="string"?(g["Content-Type"]="text/plain",p=h):typeof FormData<"u"&&h instanceof FormData?p=h:(g["Content-Type"]="application/json",p=JSON.stringify(h)));const v=yield this.fetch(`${this.url}/${a}`,{method:c||"POST",headers:Object.assign(Object.assign(Object.assign({},g),this.headers),s),body:p}).catch(O=>{throw new By(O)}),y=v.headers.get("x-relay-error");if(y&&y==="true")throw new Py(v);if(!v.ok)throw new Hy(v);let x=((o=v.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),k;return x==="application/json"?k=yield v.json():x==="application/octet-stream"?k=yield v.blob():x==="text/event-stream"?k=v:x==="multipart/form-data"?k=yield v.formData():k=yield v.text(),{data:k,error:null}}catch(s){return{data:null,error:s}}})}}var Ve={},ri={},li={},oi={},si={},ui={},$y=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},vi=$y();const Xy=vi.fetch,cg=vi.fetch.bind(vi),fg=vi.Headers,Qy=vi.Request,Vy=vi.Response,yi=Object.freeze(Object.defineProperty({__proto__:null,Headers:fg,Request:Qy,Response:Vy,default:cg,fetch:Xy},Symbol.toStringTag,{value:"Module"})),Zy=Sb(yi);var lo={},i0;function hg(){if(i0)return lo;i0=1,Object.defineProperty(lo,"__esModule",{value:!0});class r extends Error{constructor(i){super(i.message),this.name="PostgrestError",this.details=i.details,this.hint=i.hint,this.code=i.code}}return lo.default=r,lo}var r0;function dg(){if(r0)return ui;r0=1;var r=ui&&ui.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ui,"__esModule",{value:!0});const a=r(Zy),i=r(hg());class o{constructor(c){this.shouldThrowOnError=!1,this.method=c.method,this.url=c.url,this.headers=c.headers,this.schema=c.schema,this.body=c.body,this.shouldThrowOnError=c.shouldThrowOnError,this.signal=c.signal,this.isMaybeSingle=c.isMaybeSingle,c.fetch?this.fetch=c.fetch:typeof fetch>"u"?this.fetch=a.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(c,h){return this.headers=Object.assign({},this.headers),this.headers[c]=h,this}then(c,h){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const g=this.fetch;let d=g(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async p=>{var v,y,x;let k=null,O=null,A=null,T=p.status,G=p.statusText;if(p.ok){if(this.method!=="HEAD"){const H=await p.text();H===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?O=H:O=JSON.parse(H))}const z=(v=this.headers.Prefer)===null||v===void 0?void 0:v.match(/count=(exact|planned|estimated)/),Y=(y=p.headers.get("content-range"))===null||y===void 0?void 0:y.split("/");z&&Y&&Y.length>1&&(A=parseInt(Y[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(O)&&(O.length>1?(k={code:"PGRST116",details:`Results contain ${O.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},O=null,A=null,T=406,G="Not Acceptable"):O.length===1?O=O[0]:O=null)}else{const z=await p.text();try{k=JSON.parse(z),Array.isArray(k)&&p.status===404&&(O=[],k=null,T=200,G="OK")}catch{p.status===404&&z===""?(T=204,G="No Content"):k={message:z}}if(k&&this.isMaybeSingle&&(!((x=k==null?void 0:k.details)===null||x===void 0)&&x.includes("0 rows"))&&(k=null,T=200,G="OK"),k&&this.shouldThrowOnError)throw new i.default(k)}return{error:k,data:O,count:A,status:T,statusText:G}});return this.shouldThrowOnError||(d=d.catch(p=>{var v,y,x;return{error:{message:`${(v=p==null?void 0:p.name)!==null&&v!==void 0?v:"FetchError"}: ${p==null?void 0:p.message}`,details:`${(y=p==null?void 0:p.stack)!==null&&y!==void 0?y:""}`,hint:"",code:`${(x=p==null?void 0:p.code)!==null&&x!==void 0?x:""}`},data:null,count:null,status:0,statusText:""}})),d.then(c,h)}returns(){return this}overrideTypes(){return this}}return ui.default=o,ui}var l0;function pg(){if(l0)return si;l0=1;var r=si&&si.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(si,"__esModule",{value:!0});const a=r(dg());class i extends a.default{select(s){let c=!1;const h=(s??"*").split("").map(g=>/\s/.test(g)&&!c?"":(g==='"'&&(c=!c),g)).join("");return this.url.searchParams.set("select",h),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(s,{ascending:c=!0,nullsFirst:h,foreignTable:g,referencedTable:d=g}={}){const p=d?`${d}.order`:"order",v=this.url.searchParams.get(p);return this.url.searchParams.set(p,`${v?`${v},`:""}${s}.${c?"asc":"desc"}${h===void 0?"":h?".nullsfirst":".nullslast"}`),this}limit(s,{foreignTable:c,referencedTable:h=c}={}){const g=typeof h>"u"?"limit":`${h}.limit`;return this.url.searchParams.set(g,`${s}`),this}range(s,c,{foreignTable:h,referencedTable:g=h}={}){const d=typeof g>"u"?"offset":`${g}.offset`,p=typeof g>"u"?"limit":`${g}.limit`;return this.url.searchParams.set(d,`${s}`),this.url.searchParams.set(p,`${c-s+1}`),this}abortSignal(s){return this.signal=s,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:s=!1,verbose:c=!1,settings:h=!1,buffers:g=!1,wal:d=!1,format:p="text"}={}){var v;const y=[s?"analyze":null,c?"verbose":null,h?"settings":null,g?"buffers":null,d?"wal":null].filter(Boolean).join("|"),x=(v=this.headers.Accept)!==null&&v!==void 0?v:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${p}; for="${x}"; options=${y};`,p==="json"?this:this}rollback(){var s;return((s=this.headers.Prefer)!==null&&s!==void 0?s:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}return si.default=i,si}var o0;function Lc(){if(o0)return oi;o0=1;var r=oi&&oi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(oi,"__esModule",{value:!0});const a=r(pg());class i extends a.default{eq(s,c){return this.url.searchParams.append(s,`eq.${c}`),this}neq(s,c){return this.url.searchParams.append(s,`neq.${c}`),this}gt(s,c){return this.url.searchParams.append(s,`gt.${c}`),this}gte(s,c){return this.url.searchParams.append(s,`gte.${c}`),this}lt(s,c){return this.url.searchParams.append(s,`lt.${c}`),this}lte(s,c){return this.url.searchParams.append(s,`lte.${c}`),this}like(s,c){return this.url.searchParams.append(s,`like.${c}`),this}likeAllOf(s,c){return this.url.searchParams.append(s,`like(all).{${c.join(",")}}`),this}likeAnyOf(s,c){return this.url.searchParams.append(s,`like(any).{${c.join(",")}}`),this}ilike(s,c){return this.url.searchParams.append(s,`ilike.${c}`),this}ilikeAllOf(s,c){return this.url.searchParams.append(s,`ilike(all).{${c.join(",")}}`),this}ilikeAnyOf(s,c){return this.url.searchParams.append(s,`ilike(any).{${c.join(",")}}`),this}is(s,c){return this.url.searchParams.append(s,`is.${c}`),this}in(s,c){const h=Array.from(new Set(c)).map(g=>typeof g=="string"&&new RegExp("[,()]").test(g)?`"${g}"`:`${g}`).join(",");return this.url.searchParams.append(s,`in.(${h})`),this}contains(s,c){return typeof c=="string"?this.url.searchParams.append(s,`cs.${c}`):Array.isArray(c)?this.url.searchParams.append(s,`cs.{${c.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(c)}`),this}containedBy(s,c){return typeof c=="string"?this.url.searchParams.append(s,`cd.${c}`):Array.isArray(c)?this.url.searchParams.append(s,`cd.{${c.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(c)}`),this}rangeGt(s,c){return this.url.searchParams.append(s,`sr.${c}`),this}rangeGte(s,c){return this.url.searchParams.append(s,`nxl.${c}`),this}rangeLt(s,c){return this.url.searchParams.append(s,`sl.${c}`),this}rangeLte(s,c){return this.url.searchParams.append(s,`nxr.${c}`),this}rangeAdjacent(s,c){return this.url.searchParams.append(s,`adj.${c}`),this}overlaps(s,c){return typeof c=="string"?this.url.searchParams.append(s,`ov.${c}`):this.url.searchParams.append(s,`ov.{${c.join(",")}}`),this}textSearch(s,c,{config:h,type:g}={}){let d="";g==="plain"?d="pl":g==="phrase"?d="ph":g==="websearch"&&(d="w");const p=h===void 0?"":`(${h})`;return this.url.searchParams.append(s,`${d}fts${p}.${c}`),this}match(s){return Object.entries(s).forEach(([c,h])=>{this.url.searchParams.append(c,`eq.${h}`)}),this}not(s,c,h){return this.url.searchParams.append(s,`not.${c}.${h}`),this}or(s,{foreignTable:c,referencedTable:h=c}={}){const g=h?`${h}.or`:"or";return this.url.searchParams.append(g,`(${s})`),this}filter(s,c,h){return this.url.searchParams.append(s,`${c}.${h}`),this}}return oi.default=i,oi}var s0;function gg(){if(s0)return li;s0=1;var r=li&&li.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(li,"__esModule",{value:!0});const a=r(Lc());class i{constructor(s,{headers:c={},schema:h,fetch:g}){this.url=s,this.headers=c,this.schema=h,this.fetch=g}select(s,{head:c=!1,count:h}={}){const g=c?"HEAD":"GET";let d=!1;const p=(s??"*").split("").map(v=>/\s/.test(v)&&!d?"":(v==='"'&&(d=!d),v)).join("");return this.url.searchParams.set("select",p),h&&(this.headers.Prefer=`count=${h}`),new a.default({method:g,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(s,{count:c,defaultToNull:h=!0}={}){const g="POST",d=[];if(this.headers.Prefer&&d.push(this.headers.Prefer),c&&d.push(`count=${c}`),h||d.push("missing=default"),this.headers.Prefer=d.join(","),Array.isArray(s)){const p=s.reduce((v,y)=>v.concat(Object.keys(y)),[]);if(p.length>0){const v=[...new Set(p)].map(y=>`"${y}"`);this.url.searchParams.set("columns",v.join(","))}}return new a.default({method:g,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}upsert(s,{onConflict:c,ignoreDuplicates:h=!1,count:g,defaultToNull:d=!0}={}){const p="POST",v=[`resolution=${h?"ignore":"merge"}-duplicates`];if(c!==void 0&&this.url.searchParams.set("on_conflict",c),this.headers.Prefer&&v.push(this.headers.Prefer),g&&v.push(`count=${g}`),d||v.push("missing=default"),this.headers.Prefer=v.join(","),Array.isArray(s)){const y=s.reduce((x,k)=>x.concat(Object.keys(k)),[]);if(y.length>0){const x=[...new Set(y)].map(k=>`"${k}"`);this.url.searchParams.set("columns",x.join(","))}}return new a.default({method:p,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}update(s,{count:c}={}){const h="PATCH",g=[];return this.headers.Prefer&&g.push(this.headers.Prefer),c&&g.push(`count=${c}`),this.headers.Prefer=g.join(","),new a.default({method:h,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}delete({count:s}={}){const c="DELETE",h=[];return s&&h.push(`count=${s}`),this.headers.Prefer&&h.unshift(this.headers.Prefer),this.headers.Prefer=h.join(","),new a.default({method:c,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}return li.default=i,li}var yr={},_r={},u0;function Ky(){return u0||(u0=1,Object.defineProperty(_r,"__esModule",{value:!0}),_r.version=void 0,_r.version="0.0.0-automated"),_r}var c0;function Jy(){if(c0)return yr;c0=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.DEFAULT_HEADERS=void 0;const r=Ky();return yr.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${r.version}`},yr}var f0;function Iy(){if(f0)return ri;f0=1;var r=ri&&ri.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(ri,"__esModule",{value:!0});const a=r(gg()),i=r(Lc()),o=Jy();class s{constructor(h,{headers:g={},schema:d,fetch:p}={}){this.url=h,this.headers=Object.assign(Object.assign({},o.DEFAULT_HEADERS),g),this.schemaName=d,this.fetch=p}from(h){const g=new URL(`${this.url}/${h}`);return new a.default(g,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(h){return new s(this.url,{headers:this.headers,schema:h,fetch:this.fetch})}rpc(h,g={},{head:d=!1,get:p=!1,count:v}={}){let y;const x=new URL(`${this.url}/rpc/${h}`);let k;d||p?(y=d?"HEAD":"GET",Object.entries(g).filter(([A,T])=>T!==void 0).map(([A,T])=>[A,Array.isArray(T)?`{${T.join(",")}}`:`${T}`]).forEach(([A,T])=>{x.searchParams.append(A,T)})):(y="POST",k=g);const O=Object.assign({},this.headers);return v&&(O.Prefer=`count=${v}`),new i.default({method:y,url:x,headers:O,schema:this.schemaName,body:k,fetch:this.fetch,allowEmpty:!1})}}return ri.default=s,ri}var h0;function Fy(){if(h0)return Ve;h0=1;var r=Ve&&Ve.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.PostgrestError=Ve.PostgrestBuilder=Ve.PostgrestTransformBuilder=Ve.PostgrestFilterBuilder=Ve.PostgrestQueryBuilder=Ve.PostgrestClient=void 0;const a=r(Iy());Ve.PostgrestClient=a.default;const i=r(gg());Ve.PostgrestQueryBuilder=i.default;const o=r(Lc());Ve.PostgrestFilterBuilder=o.default;const s=r(pg());Ve.PostgrestTransformBuilder=s.default;const c=r(dg());Ve.PostgrestBuilder=c.default;const h=r(hg());return Ve.PostgrestError=h.default,Ve.default={PostgrestClient:a.default,PostgrestQueryBuilder:i.default,PostgrestFilterBuilder:o.default,PostgrestTransformBuilder:s.default,PostgrestBuilder:c.default,PostgrestError:h.default},Ve}var Wy=Fy();const e1=I0(Wy),{PostgrestClient:t1,PostgrestQueryBuilder:OS,PostgrestFilterBuilder:TS,PostgrestTransformBuilder:ES,PostgrestBuilder:kS,PostgrestError:AS}=e1;let vc;typeof window>"u"?vc=require("ws"):vc=window.WebSocket;const n1="2.11.10",a1={"X-Client-Info":`realtime-js/${n1}`},i1="1.0.0",mg=1e4,r1=1e3;var mi;(function(r){r[r.connecting=0]="connecting",r[r.open=1]="open",r[r.closing=2]="closing",r[r.closed=3]="closed"})(mi||(mi={}));var it;(function(r){r.closed="closed",r.errored="errored",r.joined="joined",r.joining="joining",r.leaving="leaving"})(it||(it={}));var qt;(function(r){r.close="phx_close",r.error="phx_error",r.join="phx_join",r.reply="phx_reply",r.leave="phx_leave",r.access_token="access_token"})(qt||(qt={}));var bc;(function(r){r.websocket="websocket"})(bc||(bc={}));var ma;(function(r){r.Connecting="connecting",r.Open="open",r.Closing="closing",r.Closed="closed"})(ma||(ma={}));class l1{constructor(){this.HEADER_LENGTH=1}decode(a,i){return a.constructor===ArrayBuffer?i(this._binaryDecode(a)):i(typeof a=="string"?JSON.parse(a):{})}_binaryDecode(a){const i=new DataView(a),o=new TextDecoder;return this._decodeBroadcast(a,i,o)}_decodeBroadcast(a,i,o){const s=i.getUint8(1),c=i.getUint8(2);let h=this.HEADER_LENGTH+2;const g=o.decode(a.slice(h,h+s));h=h+s;const d=o.decode(a.slice(h,h+c));h=h+c;const p=JSON.parse(o.decode(a.slice(h,a.byteLength)));return{ref:null,topic:g,event:d,payload:p}}}class vg{constructor(a,i){this.callback=a,this.timerCalc=i,this.timer=void 0,this.tries=0,this.callback=a,this.timerCalc=i}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var ke;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(ke||(ke={}));const d0=(r,a,i={})=>{var o;const s=(o=i.skipTypes)!==null&&o!==void 0?o:[];return Object.keys(a).reduce((c,h)=>(c[h]=o1(h,r,a,s),c),{})},o1=(r,a,i,o)=>{const s=a.find(g=>g.name===r),c=s==null?void 0:s.type,h=i[r];return c&&!o.includes(c)?bg(c,h):yc(h)},bg=(r,a)=>{if(r.charAt(0)==="_"){const i=r.slice(1,r.length);return f1(a,i)}switch(r){case ke.bool:return s1(a);case ke.float4:case ke.float8:case ke.int2:case ke.int4:case ke.int8:case ke.numeric:case ke.oid:return u1(a);case ke.json:case ke.jsonb:return c1(a);case ke.timestamp:return h1(a);case ke.abstime:case ke.date:case ke.daterange:case ke.int4range:case ke.int8range:case ke.money:case ke.reltime:case ke.text:case ke.time:case ke.timestamptz:case ke.timetz:case ke.tsrange:case ke.tstzrange:return yc(a);default:return yc(a)}},yc=r=>r,s1=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},u1=r=>{if(typeof r=="string"){const a=parseFloat(r);if(!Number.isNaN(a))return a}return r},c1=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch(a){return console.log(`JSON parse error: ${a}`),r}return r},f1=(r,a)=>{if(typeof r!="string")return r;const i=r.length-1,o=r[i];if(r[0]==="{"&&o==="}"){let c;const h=r.slice(1,i);try{c=JSON.parse("["+h+"]")}catch{c=h?h.split(","):[]}return c.map(g=>bg(a,g))}return r},h1=r=>typeof r=="string"?r.replace(" ","T"):r,yg=r=>{let a=r;return a=a.replace(/^ws/i,"http"),a=a.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),a.replace(/\/+$/,"")};class nc{constructor(a,i,o={},s=mg){this.channel=a,this.event=i,this.payload=o,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(a){this.timeout=a,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(a){this.payload=Object.assign(Object.assign({},this.payload),a)}receive(a,i){var o;return this._hasReceived(a)&&i((o=this.receivedResp)===null||o===void 0?void 0:o.response),this.recHooks.push({status:a,callback:i}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const a=i=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=i,this._matchReceive(i)};this.channel._on(this.refEvent,{},a),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(a,i){this.refEvent&&this.channel._trigger(this.refEvent,{status:a,response:i})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:a,response:i}){this.recHooks.filter(o=>o.status===a).forEach(o=>o.callback(i))}_hasReceived(a){return this.receivedResp&&this.receivedResp.status===a}}var p0;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(p0||(p0={}));class kr{constructor(a,i){this.channel=a,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const o=(i==null?void 0:i.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(o.state,{},s=>{const{onJoin:c,onLeave:h,onSync:g}=this.caller;this.joinRef=this.channel._joinRef(),this.state=kr.syncState(this.state,s,c,h),this.pendingDiffs.forEach(d=>{this.state=kr.syncDiff(this.state,d,c,h)}),this.pendingDiffs=[],g()}),this.channel._on(o.diff,{},s=>{const{onJoin:c,onLeave:h,onSync:g}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=kr.syncDiff(this.state,s,c,h),g())}),this.onJoin((s,c,h)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:c,newPresences:h})}),this.onLeave((s,c,h)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:c,leftPresences:h})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(a,i,o,s){const c=this.cloneDeep(a),h=this.transformState(i),g={},d={};return this.map(c,(p,v)=>{h[p]||(d[p]=v)}),this.map(h,(p,v)=>{const y=c[p];if(y){const x=v.map(T=>T.presence_ref),k=y.map(T=>T.presence_ref),O=v.filter(T=>k.indexOf(T.presence_ref)<0),A=y.filter(T=>x.indexOf(T.presence_ref)<0);O.length>0&&(g[p]=O),A.length>0&&(d[p]=A)}else g[p]=v}),this.syncDiff(c,{joins:g,leaves:d},o,s)}static syncDiff(a,i,o,s){const{joins:c,leaves:h}={joins:this.transformState(i.joins),leaves:this.transformState(i.leaves)};return o||(o=()=>{}),s||(s=()=>{}),this.map(c,(g,d)=>{var p;const v=(p=a[g])!==null&&p!==void 0?p:[];if(a[g]=this.cloneDeep(d),v.length>0){const y=a[g].map(k=>k.presence_ref),x=v.filter(k=>y.indexOf(k.presence_ref)<0);a[g].unshift(...x)}o(g,v,d)}),this.map(h,(g,d)=>{let p=a[g];if(!p)return;const v=d.map(y=>y.presence_ref);p=p.filter(y=>v.indexOf(y.presence_ref)<0),a[g]=p,s(g,p,d),p.length===0&&delete a[g]}),a}static map(a,i){return Object.getOwnPropertyNames(a).map(o=>i(o,a[o]))}static transformState(a){return a=this.cloneDeep(a),Object.getOwnPropertyNames(a).reduce((i,o)=>{const s=a[o];return"metas"in s?i[o]=s.metas.map(c=>(c.presence_ref=c.phx_ref,delete c.phx_ref,delete c.phx_ref_prev,c)):i[o]=s,i},{})}static cloneDeep(a){return JSON.parse(JSON.stringify(a))}onJoin(a){this.caller.onJoin=a}onLeave(a){this.caller.onLeave=a}onSync(a){this.caller.onSync=a}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var g0;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(g0||(g0={}));var m0;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(m0||(m0={}));var cn;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(cn||(cn={}));class Bc{constructor(a,i={config:{}},o){this.topic=a,this.params=i,this.socket=o,this.bindings={},this.state=it.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=a.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},i.config),this.timeout=this.socket.timeout,this.joinPush=new nc(this,qt.join,this.params,this.timeout),this.rejoinTimer=new vg(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=it.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(s=>s.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=it.closed,this.socket._remove(this)}),this._onError(s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=it.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=it.errored,this.rejoinTimer.scheduleTimeout())}),this._on(qt.reply,{},(s,c)=>{this._trigger(this._replyEventName(c),s)}),this.presence=new kr(this),this.broadcastEndpointURL=yg(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(a,i=this.timeout){var o,s;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:c,presence:h,private:g}}=this.params;this._onError(v=>a==null?void 0:a(cn.CHANNEL_ERROR,v)),this._onClose(()=>a==null?void 0:a(cn.CLOSED));const d={},p={broadcast:c,presence:h,postgres_changes:(s=(o=this.bindings.postgres_changes)===null||o===void 0?void 0:o.map(v=>v.filter))!==null&&s!==void 0?s:[],private:g};this.socket.accessTokenValue&&(d.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:p},d)),this.joinedOnce=!0,this._rejoin(i),this.joinPush.receive("ok",async({postgres_changes:v})=>{var y;if(this.socket.setAuth(),v===void 0){a==null||a(cn.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,k=(y=x==null?void 0:x.length)!==null&&y!==void 0?y:0,O=[];for(let A=0;A<k;A++){const T=x[A],{filter:{event:G,schema:V,table:z,filter:Y}}=T,H=v&&v[A];if(H&&H.event===G&&H.schema===V&&H.table===z&&H.filter===Y)O.push(Object.assign(Object.assign({},T),{id:H.id}));else{this.unsubscribe(),this.state=it.errored,a==null||a(cn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=O,a&&a(cn.SUBSCRIBED);return}}).receive("error",v=>{this.state=it.errored,a==null||a(cn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(v).join(", ")||"error")))}).receive("timeout",()=>{a==null||a(cn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(a,i={}){return await this.send({type:"presence",event:"track",payload:a},i.timeout||this.timeout)}async untrack(a={}){return await this.send({type:"presence",event:"untrack"},a)}on(a,i,o){return this._on(a,i,o)}async send(a,i={}){var o,s;if(!this._canPush()&&a.type==="broadcast"){const{event:c,payload:h}=a,d={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:h,private:this.private}]})};try{const p=await this._fetchWithTimeout(this.broadcastEndpointURL,d,(o=i.timeout)!==null&&o!==void 0?o:this.timeout);return await((s=p.body)===null||s===void 0?void 0:s.cancel()),p.ok?"ok":"error"}catch(p){return p.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var h,g,d;const p=this._push(a.type,a,i.timeout||this.timeout);a.type==="broadcast"&&!(!((d=(g=(h=this.params)===null||h===void 0?void 0:h.config)===null||g===void 0?void 0:g.broadcast)===null||d===void 0)&&d.ack)&&c("ok"),p.receive("ok",()=>c("ok")),p.receive("error",()=>c("error")),p.receive("timeout",()=>c("timed out"))})}updateJoinPayload(a){this.joinPush.updatePayload(a)}unsubscribe(a=this.timeout){this.state=it.leaving;const i=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(qt.close,"leave",this._joinRef())};return this.joinPush.destroy(),new Promise(o=>{const s=new nc(this,qt.leave,{},a);s.receive("ok",()=>{i(),o("ok")}).receive("timeout",()=>{i(),o("timed out")}).receive("error",()=>{o("error")}),s.send(),this._canPush()||s.trigger("ok",{})})}teardown(){this.pushBuffer.forEach(a=>a.destroy()),this.rejoinTimer&&clearTimeout(this.rejoinTimer.timer),this.joinPush.destroy()}async _fetchWithTimeout(a,i,o){const s=new AbortController,c=setTimeout(()=>s.abort(),o),h=await this.socket.fetch(a,Object.assign(Object.assign({},i),{signal:s.signal}));return clearTimeout(c),h}_push(a,i,o=this.timeout){if(!this.joinedOnce)throw`tried to push '${a}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new nc(this,a,i,o);return this._canPush()?s.send():(s.startTimeout(),this.pushBuffer.push(s)),s}_onMessage(a,i,o){return i}_isMember(a){return this.topic===a}_joinRef(){return this.joinPush.ref}_trigger(a,i,o){var s,c;const h=a.toLocaleLowerCase(),{close:g,error:d,leave:p,join:v}=qt;if(o&&[g,d,p,v].indexOf(h)>=0&&o!==this._joinRef())return;let x=this._onMessage(h,i,o);if(i&&!x)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(h)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(k=>{var O,A,T;return((O=k.filter)===null||O===void 0?void 0:O.event)==="*"||((T=(A=k.filter)===null||A===void 0?void 0:A.event)===null||T===void 0?void 0:T.toLocaleLowerCase())===h}).map(k=>k.callback(x,o)):(c=this.bindings[h])===null||c===void 0||c.filter(k=>{var O,A,T,G,V,z;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in k){const Y=k.id,H=(O=k.filter)===null||O===void 0?void 0:O.event;return Y&&((A=i.ids)===null||A===void 0?void 0:A.includes(Y))&&(H==="*"||(H==null?void 0:H.toLocaleLowerCase())===((T=i.data)===null||T===void 0?void 0:T.type.toLocaleLowerCase()))}else{const Y=(V=(G=k==null?void 0:k.filter)===null||G===void 0?void 0:G.event)===null||V===void 0?void 0:V.toLocaleLowerCase();return Y==="*"||Y===((z=i==null?void 0:i.event)===null||z===void 0?void 0:z.toLocaleLowerCase())}else return k.type.toLocaleLowerCase()===h}).map(k=>{if(typeof x=="object"&&"ids"in x){const O=x.data,{schema:A,table:T,commit_timestamp:G,type:V,errors:z}=O;x=Object.assign(Object.assign({},{schema:A,table:T,commit_timestamp:G,eventType:V,new:{},old:{},errors:z}),this._getPayloadRecords(O))}k.callback(x,o)})}_isClosed(){return this.state===it.closed}_isJoined(){return this.state===it.joined}_isJoining(){return this.state===it.joining}_isLeaving(){return this.state===it.leaving}_replyEventName(a){return`chan_reply_${a}`}_on(a,i,o){const s=a.toLocaleLowerCase(),c={type:s,filter:i,callback:o};return this.bindings[s]?this.bindings[s].push(c):this.bindings[s]=[c],this}_off(a,i){const o=a.toLocaleLowerCase();return this.bindings[o]=this.bindings[o].filter(s=>{var c;return!(((c=s.type)===null||c===void 0?void 0:c.toLocaleLowerCase())===o&&Bc.isEqual(s.filter,i))}),this}static isEqual(a,i){if(Object.keys(a).length!==Object.keys(i).length)return!1;for(const o in a)if(a[o]!==i[o])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(a){this._on(qt.close,{},a)}_onError(a){this._on(qt.error,{},i=>a(i))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(a=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=it.joining,this.joinPush.resend(a))}_getPayloadRecords(a){const i={new:{},old:{}};return(a.type==="INSERT"||a.type==="UPDATE")&&(i.new=d0(a.columns,a.record)),(a.type==="UPDATE"||a.type==="DELETE")&&(i.old=d0(a.columns,a.old_record)),i}}const v0=()=>{},d1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class p1{constructor(a,i){var o;this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers=a1,this.params={},this.timeout=mg,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=v0,this.ref=0,this.logger=v0,this.conn=null,this.sendBuffer=[],this.serializer=new l1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=c=>{let h;return c?h=c:typeof fetch>"u"?h=(...g)=>qr(async()=>{const{default:d}=await Promise.resolve().then(()=>yi);return{default:d}},void 0).then(({default:d})=>d(...g)):h=fetch,(...g)=>h(...g)},this.endPoint=`${a}/${bc.websocket}`,this.httpEndpoint=yg(a),i!=null&&i.transport?this.transport=i.transport:this.transport=null,i!=null&&i.params&&(this.params=i.params),i!=null&&i.headers&&(this.headers=Object.assign(Object.assign({},this.headers),i.headers)),i!=null&&i.timeout&&(this.timeout=i.timeout),i!=null&&i.logger&&(this.logger=i.logger),(i!=null&&i.logLevel||i!=null&&i.log_level)&&(this.logLevel=i.logLevel||i.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),i!=null&&i.heartbeatIntervalMs&&(this.heartbeatIntervalMs=i.heartbeatIntervalMs);const s=(o=i==null?void 0:i.params)===null||o===void 0?void 0:o.apikey;if(s&&(this.accessTokenValue=s,this.apiKey=s),this.reconnectAfterMs=i!=null&&i.reconnectAfterMs?i.reconnectAfterMs:c=>[1e3,2e3,5e3,1e4][c-1]||1e4,this.encode=i!=null&&i.encode?i.encode:(c,h)=>h(JSON.stringify(c)),this.decode=i!=null&&i.decode?i.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new vg(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(i==null?void 0:i.fetch),i!=null&&i.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(i==null?void 0:i.worker)||!1,this.workerUrl=i==null?void 0:i.workerUrl}this.accessToken=(i==null?void 0:i.accessToken)||null}connect(){if(!this.conn){if(this.transport||(this.transport=vc),this.transport){typeof window<"u"&&this.transport===window.WebSocket?this.conn=new this.transport(this.endpointURL()):this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection();return}this.conn=new g1(this.endpointURL(),void 0,{close:()=>{this.conn=null}})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:i1}))}disconnect(a,i){this.conn&&(this.conn.onclose=function(){},a?this.conn.close(a,i??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset(),this.channels.forEach(o=>o.teardown()))}getChannels(){return this.channels}async removeChannel(a){const i=await a.unsubscribe();return this.channels=this.channels.filter(o=>o._joinRef!==a._joinRef),this.channels.length===0&&this.disconnect(),i}async removeAllChannels(){const a=await Promise.all(this.channels.map(i=>i.unsubscribe()));return this.channels=[],this.disconnect(),a}log(a,i,o){this.logger(a,i,o)}connectionState(){switch(this.conn&&this.conn.readyState){case mi.connecting:return ma.Connecting;case mi.open:return ma.Open;case mi.closing:return ma.Closing;default:return ma.Closed}}isConnected(){return this.connectionState()===ma.Open}channel(a,i={config:{}}){const o=`realtime:${a}`,s=this.getChannels().find(c=>c.topic===o);if(s)return s;{const c=new Bc(`realtime:${a}`,i,this);return this.channels.push(c),c}}push(a){const{topic:i,event:o,payload:s,ref:c}=a,h=()=>{this.encode(a,g=>{var d;(d=this.conn)===null||d===void 0||d.send(g)})};this.log("push",`${i} ${o} (${c})`,s),this.isConnected()?h():this.sendBuffer.push(h)}async setAuth(a=null){let i=a||this.accessToken&&await this.accessToken()||this.accessTokenValue;this.accessTokenValue!=i&&(this.accessTokenValue=i,this.channels.forEach(o=>{i&&o.updateJoinPayload({access_token:i,version:this.headers&&this.headers["X-Client-Info"]}),o.joinedOnce&&o._isJoined()&&o._push(qt.access_token,{access_token:i})}))}async sendHeartbeat(){var a;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),(a=this.conn)===null||a===void 0||a.close(r1,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),await this.setAuth()}onHeartbeat(a){this.heartbeatCallback=a}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(a=>a()),this.sendBuffer=[])}_makeRef(){let a=this.ref+1;return a===this.ref?this.ref=0:this.ref=a,this.ref.toString()}_leaveOpenTopic(a){let i=this.channels.find(o=>o.topic===a&&(o._isJoined()||o._isJoining()));i&&(this.log("transport",`leaving duplicate topic "${a}"`),i.unsubscribe())}_remove(a){this.channels=this.channels.filter(i=>i.topic!==a.topic)}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=a=>this._onConnError(a),this.conn.onmessage=a=>this._onConnMessage(a),this.conn.onclose=a=>this._onConnClose(a))}_onConnMessage(a){this.decode(a.data,i=>{let{topic:o,event:s,payload:c,ref:h}=i;o==="phoenix"&&s==="phx_reply"&&this.heartbeatCallback(i.payload.status=="ok"?"ok":"error"),h&&h===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${c.status||""} ${o} ${s} ${h&&"("+h+")"||""}`,c),Array.from(this.channels).filter(g=>g._isMember(o)).forEach(g=>g._trigger(s,c,h)),this.stateChangeCallbacks.message.forEach(g=>g(i))})}_onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const a=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(a),this.workerRef.onerror=i=>{this.log("worker","worker error",i.message),this.workerRef.terminate()},this.workerRef.onmessage=i=>{i.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(a=>a())}_onConnClose(a){this.log("transport","close",a),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(i=>i(a))}_onConnError(a){this.log("transport",a.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(i=>i(a))}_triggerChanError(){this.channels.forEach(a=>a._trigger(qt.error))}_appendParams(a,i){if(Object.keys(i).length===0)return a;const o=a.match(/\?/)?"&":"?",s=new URLSearchParams(i);return`${a}${o}${s}`}_workerObjectUrl(a){let i;if(a)i=a;else{const o=new Blob([d1],{type:"application/javascript"});i=URL.createObjectURL(o)}return i}}class g1{constructor(a,i,o){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=mi.connecting,this.send=()=>{},this.url=null,this.url=a,this.close=o.close}}class Pc extends Error{constructor(a){super(a),this.__isStorageError=!0,this.name="StorageError"}}function Ze(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}class m1 extends Pc{constructor(a,i){super(a),this.name="StorageApiError",this.status=i}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class _c extends Pc{constructor(a,i){super(a),this.name="StorageUnknownError",this.originalError=i}}var v1=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};const _g=r=>{let a;return r?a=r:typeof fetch>"u"?a=(...i)=>qr(async()=>{const{default:o}=await Promise.resolve().then(()=>yi);return{default:o}},void 0).then(({default:o})=>o(...i)):a=fetch,(...i)=>a(...i)},b1=()=>v1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield qr(()=>Promise.resolve().then(()=>yi),void 0)).Response:Response}),xc=r=>{if(Array.isArray(r))return r.map(i=>xc(i));if(typeof r=="function"||r!==Object(r))return r;const a={};return Object.entries(r).forEach(([i,o])=>{const s=i.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));a[s]=xc(o)}),a};var ya=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};const ac=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),y1=(r,a,i)=>ya(void 0,void 0,void 0,function*(){const o=yield b1();r instanceof o&&!(i!=null&&i.noResolveJson)?r.json().then(s=>{a(new m1(ac(s),r.status||500))}).catch(s=>{a(new _c(ac(s),s))}):a(new _c(ac(r),r))}),_1=(r,a,i,o)=>{const s={method:r,headers:(a==null?void 0:a.headers)||{}};return r==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json"},a==null?void 0:a.headers),o&&(s.body=JSON.stringify(o)),Object.assign(Object.assign({},s),i))};function Lr(r,a,i,o,s,c){return ya(this,void 0,void 0,function*(){return new Promise((h,g)=>{r(i,_1(a,o,s,c)).then(d=>{if(!d.ok)throw d;return o!=null&&o.noResolveJson?d:d.json()}).then(d=>h(d)).catch(d=>y1(d,g,o))})})}function wo(r,a,i,o){return ya(this,void 0,void 0,function*(){return Lr(r,"GET",a,i,o)})}function Gn(r,a,i,o,s){return ya(this,void 0,void 0,function*(){return Lr(r,"POST",a,o,s,i)})}function x1(r,a,i,o,s){return ya(this,void 0,void 0,function*(){return Lr(r,"PUT",a,o,s,i)})}function S1(r,a,i,o){return ya(this,void 0,void 0,function*(){return Lr(r,"HEAD",a,Object.assign(Object.assign({},i),{noResolveJson:!0}),o)})}function xg(r,a,i,o,s){return ya(this,void 0,void 0,function*(){return Lr(r,"DELETE",a,o,s,i)})}var ft=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};const w1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},b0={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class O1{constructor(a,i={},o,s){this.url=a,this.headers=i,this.bucketId=o,this.fetch=_g(s)}uploadOrUpdate(a,i,o,s){return ft(this,void 0,void 0,function*(){try{let c;const h=Object.assign(Object.assign({},b0),s);let g=Object.assign(Object.assign({},this.headers),a==="POST"&&{"x-upsert":String(h.upsert)});const d=h.metadata;typeof Blob<"u"&&o instanceof Blob?(c=new FormData,c.append("cacheControl",h.cacheControl),d&&c.append("metadata",this.encodeMetadata(d)),c.append("",o)):typeof FormData<"u"&&o instanceof FormData?(c=o,c.append("cacheControl",h.cacheControl),d&&c.append("metadata",this.encodeMetadata(d))):(c=o,g["cache-control"]=`max-age=${h.cacheControl}`,g["content-type"]=h.contentType,d&&(g["x-metadata"]=this.toBase64(this.encodeMetadata(d)))),s!=null&&s.headers&&(g=Object.assign(Object.assign({},g),s.headers));const p=this._removeEmptyFolders(i),v=this._getFinalPath(p),y=yield this.fetch(`${this.url}/object/${v}`,Object.assign({method:a,body:c,headers:g},h!=null&&h.duplex?{duplex:h.duplex}:{})),x=yield y.json();return y.ok?{data:{path:p,id:x.Id,fullPath:x.Key},error:null}:{data:null,error:x}}catch(c){if(Ze(c))return{data:null,error:c};throw c}})}upload(a,i,o){return ft(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",a,i,o)})}uploadToSignedUrl(a,i,o,s){return ft(this,void 0,void 0,function*(){const c=this._removeEmptyFolders(a),h=this._getFinalPath(c),g=new URL(this.url+`/object/upload/sign/${h}`);g.searchParams.set("token",i);try{let d;const p=Object.assign({upsert:b0.upsert},s),v=Object.assign(Object.assign({},this.headers),{"x-upsert":String(p.upsert)});typeof Blob<"u"&&o instanceof Blob?(d=new FormData,d.append("cacheControl",p.cacheControl),d.append("",o)):typeof FormData<"u"&&o instanceof FormData?(d=o,d.append("cacheControl",p.cacheControl)):(d=o,v["cache-control"]=`max-age=${p.cacheControl}`,v["content-type"]=p.contentType);const y=yield this.fetch(g.toString(),{method:"PUT",body:d,headers:v}),x=yield y.json();return y.ok?{data:{path:c,fullPath:x.Key},error:null}:{data:null,error:x}}catch(d){if(Ze(d))return{data:null,error:d};throw d}})}createSignedUploadUrl(a,i){return ft(this,void 0,void 0,function*(){try{let o=this._getFinalPath(a);const s=Object.assign({},this.headers);i!=null&&i.upsert&&(s["x-upsert"]="true");const c=yield Gn(this.fetch,`${this.url}/object/upload/sign/${o}`,{},{headers:s}),h=new URL(this.url+c.url),g=h.searchParams.get("token");if(!g)throw new Pc("No token returned by API");return{data:{signedUrl:h.toString(),path:a,token:g},error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}update(a,i,o){return ft(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",a,i,o)})}move(a,i,o){return ft(this,void 0,void 0,function*(){try{return{data:yield Gn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:a,destinationKey:i,destinationBucket:o==null?void 0:o.destinationBucket},{headers:this.headers}),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}copy(a,i,o){return ft(this,void 0,void 0,function*(){try{return{data:{path:(yield Gn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:a,destinationKey:i,destinationBucket:o==null?void 0:o.destinationBucket},{headers:this.headers})).Key},error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}createSignedUrl(a,i,o){return ft(this,void 0,void 0,function*(){try{let s=this._getFinalPath(a),c=yield Gn(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:i},o!=null&&o.transform?{transform:o.transform}:{}),{headers:this.headers});const h=o!=null&&o.download?`&download=${o.download===!0?"":o.download}`:"";return c={signedUrl:encodeURI(`${this.url}${c.signedURL}${h}`)},{data:c,error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}createSignedUrls(a,i,o){return ft(this,void 0,void 0,function*(){try{const s=yield Gn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:i,paths:a},{headers:this.headers}),c=o!=null&&o.download?`&download=${o.download===!0?"":o.download}`:"";return{data:s.map(h=>Object.assign(Object.assign({},h),{signedUrl:h.signedURL?encodeURI(`${this.url}${h.signedURL}${c}`):null})),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}download(a,i){return ft(this,void 0,void 0,function*(){const s=typeof(i==null?void 0:i.transform)<"u"?"render/image/authenticated":"object",c=this.transformOptsToQueryString((i==null?void 0:i.transform)||{}),h=c?`?${c}`:"";try{const g=this._getFinalPath(a);return{data:yield(yield wo(this.fetch,`${this.url}/${s}/${g}${h}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(g){if(Ze(g))return{data:null,error:g};throw g}})}info(a){return ft(this,void 0,void 0,function*(){const i=this._getFinalPath(a);try{const o=yield wo(this.fetch,`${this.url}/object/info/${i}`,{headers:this.headers});return{data:xc(o),error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}exists(a){return ft(this,void 0,void 0,function*(){const i=this._getFinalPath(a);try{return yield S1(this.fetch,`${this.url}/object/${i}`,{headers:this.headers}),{data:!0,error:null}}catch(o){if(Ze(o)&&o instanceof _c){const s=o.originalError;if([400,404].includes(s==null?void 0:s.status))return{data:!1,error:o}}throw o}})}getPublicUrl(a,i){const o=this._getFinalPath(a),s=[],c=i!=null&&i.download?`download=${i.download===!0?"":i.download}`:"";c!==""&&s.push(c);const g=typeof(i==null?void 0:i.transform)<"u"?"render/image":"object",d=this.transformOptsToQueryString((i==null?void 0:i.transform)||{});d!==""&&s.push(d);let p=s.join("&");return p!==""&&(p=`?${p}`),{data:{publicUrl:encodeURI(`${this.url}/${g}/public/${o}${p}`)}}}remove(a){return ft(this,void 0,void 0,function*(){try{return{data:yield xg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:a},{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}list(a,i,o){return ft(this,void 0,void 0,function*(){try{const s=Object.assign(Object.assign(Object.assign({},w1),i),{prefix:a||""});return{data:yield Gn(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},o),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}encodeMetadata(a){return JSON.stringify(a)}toBase64(a){return typeof Buffer<"u"?Buffer.from(a).toString("base64"):btoa(a)}_getFinalPath(a){return`${this.bucketId}/${a}`}_removeEmptyFolders(a){return a.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(a){const i=[];return a.width&&i.push(`width=${a.width}`),a.height&&i.push(`height=${a.height}`),a.resize&&i.push(`resize=${a.resize}`),a.format&&i.push(`format=${a.format}`),a.quality&&i.push(`quality=${a.quality}`),i.join("&")}}const T1="2.7.1",E1={"X-Client-Info":`storage-js/${T1}`};var ci=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};class k1{constructor(a,i={},o){this.url=a,this.headers=Object.assign(Object.assign({},E1),i),this.fetch=_g(o)}listBuckets(){return ci(this,void 0,void 0,function*(){try{return{data:yield wo(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(a){if(Ze(a))return{data:null,error:a};throw a}})}getBucket(a){return ci(this,void 0,void 0,function*(){try{return{data:yield wo(this.fetch,`${this.url}/bucket/${a}`,{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}createBucket(a,i={public:!1}){return ci(this,void 0,void 0,function*(){try{return{data:yield Gn(this.fetch,`${this.url}/bucket`,{id:a,name:a,public:i.public,file_size_limit:i.fileSizeLimit,allowed_mime_types:i.allowedMimeTypes},{headers:this.headers}),error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}updateBucket(a,i){return ci(this,void 0,void 0,function*(){try{return{data:yield x1(this.fetch,`${this.url}/bucket/${a}`,{id:a,name:a,public:i.public,file_size_limit:i.fileSizeLimit,allowed_mime_types:i.allowedMimeTypes},{headers:this.headers}),error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}emptyBucket(a){return ci(this,void 0,void 0,function*(){try{return{data:yield Gn(this.fetch,`${this.url}/bucket/${a}/empty`,{},{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}deleteBucket(a){return ci(this,void 0,void 0,function*(){try{return{data:yield xg(this.fetch,`${this.url}/bucket/${a}`,{},{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}}class A1 extends k1{constructor(a,i={},o){super(a,i,o)}from(a){return new O1(this.url,this.headers,a,this.fetch)}}const j1="2.50.0";let Tr="";typeof Deno<"u"?Tr="deno":typeof document<"u"?Tr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Tr="react-native":Tr="node";const R1={"X-Client-Info":`supabase-js-${Tr}/${j1}`},C1={headers:R1},D1={schema:"public"},M1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},U1={};var z1=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};const N1=r=>{let a;return r?a=r:typeof fetch>"u"?a=cg:a=fetch,(...i)=>a(...i)},q1=()=>typeof Headers>"u"?fg:Headers,L1=(r,a,i)=>{const o=N1(i),s=q1();return(c,h)=>z1(void 0,void 0,void 0,function*(){var g;const d=(g=yield a())!==null&&g!==void 0?g:r;let p=new s(h==null?void 0:h.headers);return p.has("apikey")||p.set("apikey",r),p.has("Authorization")||p.set("Authorization",`Bearer ${d}`),o(c,Object.assign(Object.assign({},h),{headers:p}))})};var B1=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};function P1(r){return r.endsWith("/")?r:r+"/"}function H1(r,a){var i,o;const{db:s,auth:c,realtime:h,global:g}=r,{db:d,auth:p,realtime:v,global:y}=a,x={db:Object.assign(Object.assign({},d),s),auth:Object.assign(Object.assign({},p),c),realtime:Object.assign(Object.assign({},v),h),global:Object.assign(Object.assign(Object.assign({},y),g),{headers:Object.assign(Object.assign({},(i=y==null?void 0:y.headers)!==null&&i!==void 0?i:{}),(o=g==null?void 0:g.headers)!==null&&o!==void 0?o:{})}),accessToken:()=>B1(this,void 0,void 0,function*(){return""})};return r.accessToken?x.accessToken=r.accessToken:delete x.accessToken,x}const Sg="2.70.0",gi=30*1e3,Sc=3,ic=Sc*gi,G1="http://localhost:9999",Y1="supabase.auth.token",$1={"X-Client-Info":`gotrue-js/${Sg}`},wc="X-Supabase-Api-Version",wg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},X1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Q1=6e5;class Hc extends Error{constructor(a,i,o){super(a),this.__isAuthError=!0,this.name="AuthError",this.status=i,this.code=o}}function re(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class V1 extends Hc{constructor(a,i,o){super(a,i,o),this.name="AuthApiError",this.status=i,this.code=o}}function Z1(r){return re(r)&&r.name==="AuthApiError"}class Og extends Hc{constructor(a,i){super(a),this.name="AuthUnknownError",this.originalError=i}}class Vn extends Hc{constructor(a,i,o,s){super(a,o,s),this.name=i,this.status=o}}class Hn extends Vn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function K1(r){return re(r)&&r.name==="AuthSessionMissingError"}class oo extends Vn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class so extends Vn{constructor(a){super(a,"AuthInvalidCredentialsError",400,void 0)}}class uo extends Vn{constructor(a,i=null){super(a,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=i}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function J1(r){return re(r)&&r.name==="AuthImplicitGrantRedirectError"}class y0 extends Vn{constructor(a,i=null){super(a,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=i}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Oc extends Vn{constructor(a,i){super(a,"AuthRetryableFetchError",i,void 0)}}function rc(r){return re(r)&&r.name==="AuthRetryableFetchError"}class _0 extends Vn{constructor(a,i,o){super(a,"AuthWeakPasswordError",i,"weak_password"),this.reasons=o}}class Ar extends Vn{constructor(a){super(a,"AuthInvalidJwtError",400,"invalid_jwt")}}const Oo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),x0=` 	
\r=`.split(""),I1=(()=>{const r=new Array(128);for(let a=0;a<r.length;a+=1)r[a]=-1;for(let a=0;a<x0.length;a+=1)r[x0[a].charCodeAt(0)]=-2;for(let a=0;a<Oo.length;a+=1)r[Oo[a].charCodeAt(0)]=a;return r})();function S0(r,a,i){if(r!==null)for(a.queue=a.queue<<8|r,a.queuedBits+=8;a.queuedBits>=6;){const o=a.queue>>a.queuedBits-6&63;i(Oo[o]),a.queuedBits-=6}else if(a.queuedBits>0)for(a.queue=a.queue<<6-a.queuedBits,a.queuedBits=6;a.queuedBits>=6;){const o=a.queue>>a.queuedBits-6&63;i(Oo[o]),a.queuedBits-=6}}function Tg(r,a,i){const o=I1[r];if(o>-1)for(a.queue=a.queue<<6|o,a.queuedBits+=6;a.queuedBits>=8;)i(a.queue>>a.queuedBits-8&255),a.queuedBits-=8;else{if(o===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function w0(r){const a=[],i=h=>{a.push(String.fromCodePoint(h))},o={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},c=h=>{e_(h,o,i)};for(let h=0;h<r.length;h+=1)Tg(r.charCodeAt(h),s,c);return a.join("")}function F1(r,a){if(r<=127){a(r);return}else if(r<=2047){a(192|r>>6),a(128|r&63);return}else if(r<=65535){a(224|r>>12),a(128|r>>6&63),a(128|r&63);return}else if(r<=1114111){a(240|r>>18),a(128|r>>12&63),a(128|r>>6&63),a(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function W1(r,a){for(let i=0;i<r.length;i+=1){let o=r.charCodeAt(i);if(o>55295&&o<=56319){const s=(o-55296)*1024&65535;o=(r.charCodeAt(i+1)-56320&65535|s)+65536,i+=1}F1(o,a)}}function e_(r,a,i){if(a.utf8seq===0){if(r<=127){i(r);return}for(let o=1;o<6;o+=1)if((r>>7-o&1)===0){a.utf8seq=o;break}if(a.utf8seq===2)a.codepoint=r&31;else if(a.utf8seq===3)a.codepoint=r&15;else if(a.utf8seq===4)a.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");a.utf8seq-=1}else if(a.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");a.codepoint=a.codepoint<<6|r&63,a.utf8seq-=1,a.utf8seq===0&&i(a.codepoint)}}function t_(r){const a=[],i={queue:0,queuedBits:0},o=s=>{a.push(s)};for(let s=0;s<r.length;s+=1)Tg(r.charCodeAt(s),i,o);return new Uint8Array(a)}function n_(r){const a=[];return W1(r,i=>a.push(i)),new Uint8Array(a)}function a_(r){const a=[],i={queue:0,queuedBits:0},o=s=>{a.push(s)};return r.forEach(s=>S0(s,i,o)),S0(null,i,o),a.join("")}function i_(r){return Math.round(Date.now()/1e3)+r}function r_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){const a=Math.random()*16|0;return(r=="x"?a:a&3|8).toString(16)})}const zt=()=>typeof window<"u"&&typeof document<"u",pa={tested:!1,writable:!1},jr=()=>{if(!zt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(pa.tested)return pa.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),pa.tested=!0,pa.writable=!0}catch{pa.tested=!0,pa.writable=!1}return pa.writable};function l_(r){const a={},i=new URL(r);if(i.hash&&i.hash[0]==="#")try{new URLSearchParams(i.hash.substring(1)).forEach((s,c)=>{a[c]=s})}catch{}return i.searchParams.forEach((o,s)=>{a[s]=o}),a}const Eg=r=>{let a;return r?a=r:typeof fetch>"u"?a=(...i)=>qr(async()=>{const{default:o}=await Promise.resolve().then(()=>yi);return{default:o}},void 0).then(({default:o})=>o(...i)):a=fetch,(...i)=>a(...i)},o_=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",kg=async(r,a,i)=>{await r.setItem(a,JSON.stringify(i))},co=async(r,a)=>{const i=await r.getItem(a);if(!i)return null;try{return JSON.parse(i)}catch{return i}},fo=async(r,a)=>{await r.removeItem(a)};class Ro{constructor(){this.promise=new Ro.promiseConstructor((a,i)=>{this.resolve=a,this.reject=i})}}Ro.promiseConstructor=Promise;function lc(r){const a=r.split(".");if(a.length!==3)throw new Ar("Invalid JWT structure");for(let o=0;o<a.length;o++)if(!X1.test(a[o]))throw new Ar("JWT not in base64url format");return{header:JSON.parse(w0(a[0])),payload:JSON.parse(w0(a[1])),signature:t_(a[2]),raw:{header:a[0],payload:a[1]}}}async function s_(r){return await new Promise(a=>{setTimeout(()=>a(null),r)})}function u_(r,a){return new Promise((o,s)=>{(async()=>{for(let c=0;c<1/0;c++)try{const h=await r(c);if(!a(c,null,h)){o(h);return}}catch(h){if(!a(c,h)){s(h);return}}})()})}function c_(r){return("0"+r.toString(16)).substr(-2)}function f_(){const a=new Uint32Array(56);if(typeof crypto>"u"){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",o=i.length;let s="";for(let c=0;c<56;c++)s+=i.charAt(Math.floor(Math.random()*o));return s}return crypto.getRandomValues(a),Array.from(a,c_).join("")}async function h_(r){const i=new TextEncoder().encode(r),o=await crypto.subtle.digest("SHA-256",i),s=new Uint8Array(o);return Array.from(s).map(c=>String.fromCharCode(c)).join("")}async function d_(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const i=await h_(r);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function fi(r,a,i=!1){const o=f_();let s=o;i&&(s+="/PASSWORD_RECOVERY"),await kg(r,`${a}-code-verifier`,s);const c=await d_(o);return[c,o===c?"plain":"s256"]}const p_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function g_(r){const a=r.headers.get(wc);if(!a||!a.match(p_))return null;try{return new Date(`${a}T00:00:00.0Z`)}catch{return null}}function m_(r){if(!r)throw new Error("Missing exp claim");const a=Math.floor(Date.now()/1e3);if(r<=a)throw new Error("JWT has expired")}function v_(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const b_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function hi(r){if(!b_.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}var y_=function(r,a){var i={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&a.indexOf(o)<0&&(i[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(r);s<o.length;s++)a.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(r,o[s])&&(i[o[s]]=r[o[s]]);return i};const ga=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),__=[502,503,504];async function O0(r){var a;if(!o_(r))throw new Oc(ga(r),0);if(__.includes(r.status))throw new Oc(ga(r),r.status);let i;try{i=await r.json()}catch(c){throw new Og(ga(c),c)}let o;const s=g_(r);if(s&&s.getTime()>=wg["2024-01-01"].timestamp&&typeof i=="object"&&i&&typeof i.code=="string"?o=i.code:typeof i=="object"&&i&&typeof i.error_code=="string"&&(o=i.error_code),o){if(o==="weak_password")throw new _0(ga(i),r.status,((a=i.weak_password)===null||a===void 0?void 0:a.reasons)||[]);if(o==="session_not_found")throw new Hn}else if(typeof i=="object"&&i&&typeof i.weak_password=="object"&&i.weak_password&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.reasons.reduce((c,h)=>c&&typeof h=="string",!0))throw new _0(ga(i),r.status,i.weak_password.reasons);throw new V1(ga(i),r.status||500,o)}const x_=(r,a,i,o)=>{const s={method:r,headers:(a==null?void 0:a.headers)||{}};return r==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},a==null?void 0:a.headers),s.body=JSON.stringify(o),Object.assign(Object.assign({},s),i))};async function fe(r,a,i,o){var s;const c=Object.assign({},o==null?void 0:o.headers);c[wc]||(c[wc]=wg["2024-01-01"].name),o!=null&&o.jwt&&(c.Authorization=`Bearer ${o.jwt}`);const h=(s=o==null?void 0:o.query)!==null&&s!==void 0?s:{};o!=null&&o.redirectTo&&(h.redirect_to=o.redirectTo);const g=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",d=await S_(r,a,i+g,{headers:c,noResolveJson:o==null?void 0:o.noResolveJson},{},o==null?void 0:o.body);return o!=null&&o.xform?o==null?void 0:o.xform(d):{data:Object.assign({},d),error:null}}async function S_(r,a,i,o,s,c){const h=x_(a,o,s,c);let g;try{g=await r(i,Object.assign({},h))}catch(d){throw console.error(d),new Oc(ga(d),0)}if(g.ok||await O0(g),o!=null&&o.noResolveJson)return g;try{return await g.json()}catch(d){await O0(d)}}function un(r){var a;let i=null;E_(r)&&(i=Object.assign({},r),r.expires_at||(i.expires_at=i_(r.expires_in)));const o=(a=r.user)!==null&&a!==void 0?a:r;return{data:{session:i,user:o},error:null}}function T0(r){const a=un(r);return!a.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((i,o)=>i&&typeof o=="string",!0)&&(a.data.weak_password=r.weak_password),a}function Yn(r){var a;return{data:{user:(a=r.user)!==null&&a!==void 0?a:r},error:null}}function w_(r){return{data:r,error:null}}function O_(r){const{action_link:a,email_otp:i,hashed_token:o,redirect_to:s,verification_type:c}=r,h=y_(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),g={action_link:a,email_otp:i,hashed_token:o,redirect_to:s,verification_type:c},d=Object.assign({},h);return{data:{properties:g,user:d},error:null}}function T_(r){return r}function E_(r){return r.access_token&&r.refresh_token&&r.expires_in}const oc=["global","local","others"];var k_=function(r,a){var i={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&a.indexOf(o)<0&&(i[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(r);s<o.length;s++)a.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(r,o[s])&&(i[o[s]]=r[o[s]]);return i};class A_{constructor({url:a="",headers:i={},fetch:o}){this.url=a,this.headers=i,this.fetch=Eg(o),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(a,i=oc[0]){if(oc.indexOf(i)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${oc.join(", ")}`);try{return await fe(this.fetch,"POST",`${this.url}/logout?scope=${i}`,{headers:this.headers,jwt:a,noResolveJson:!0}),{data:null,error:null}}catch(o){if(re(o))return{data:null,error:o};throw o}}async inviteUserByEmail(a,i={}){try{return await fe(this.fetch,"POST",`${this.url}/invite`,{body:{email:a,data:i.data},headers:this.headers,redirectTo:i.redirectTo,xform:Yn})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async generateLink(a){try{const{options:i}=a,o=k_(a,["options"]),s=Object.assign(Object.assign({},o),i);return"newEmail"in o&&(s.new_email=o==null?void 0:o.newEmail,delete s.newEmail),await fe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:O_,redirectTo:i==null?void 0:i.redirectTo})}catch(i){if(re(i))return{data:{properties:null,user:null},error:i};throw i}}async createUser(a){try{return await fe(this.fetch,"POST",`${this.url}/admin/users`,{body:a,headers:this.headers,xform:Yn})}catch(i){if(re(i))return{data:{user:null},error:i};throw i}}async listUsers(a){var i,o,s,c,h,g,d;try{const p={nextPage:null,lastPage:0,total:0},v=await fe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(o=(i=a==null?void 0:a.page)===null||i===void 0?void 0:i.toString())!==null&&o!==void 0?o:"",per_page:(c=(s=a==null?void 0:a.perPage)===null||s===void 0?void 0:s.toString())!==null&&c!==void 0?c:""},xform:T_});if(v.error)throw v.error;const y=await v.json(),x=(h=v.headers.get("x-total-count"))!==null&&h!==void 0?h:0,k=(d=(g=v.headers.get("link"))===null||g===void 0?void 0:g.split(","))!==null&&d!==void 0?d:[];return k.length>0&&(k.forEach(O=>{const A=parseInt(O.split(";")[0].split("=")[1].substring(0,1)),T=JSON.parse(O.split(";")[1].split("=")[1]);p[`${T}Page`]=A}),p.total=parseInt(x)),{data:Object.assign(Object.assign({},y),p),error:null}}catch(p){if(re(p))return{data:{users:[]},error:p};throw p}}async getUserById(a){hi(a);try{return await fe(this.fetch,"GET",`${this.url}/admin/users/${a}`,{headers:this.headers,xform:Yn})}catch(i){if(re(i))return{data:{user:null},error:i};throw i}}async updateUserById(a,i){hi(a);try{return await fe(this.fetch,"PUT",`${this.url}/admin/users/${a}`,{body:i,headers:this.headers,xform:Yn})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async deleteUser(a,i=!1){hi(a);try{return await fe(this.fetch,"DELETE",`${this.url}/admin/users/${a}`,{headers:this.headers,body:{should_soft_delete:i},xform:Yn})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async _listFactors(a){hi(a.userId);try{const{data:i,error:o}=await fe(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:i,error:o}}catch(i){if(re(i))return{data:null,error:i};throw i}}async _deleteFactor(a){hi(a.userId),hi(a.id);try{return{data:await fe(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/factors/${a.id}`,{headers:this.headers}),error:null}}catch(i){if(re(i))return{data:null,error:i};throw i}}}const j_={getItem:r=>jr()?globalThis.localStorage.getItem(r):null,setItem:(r,a)=>{jr()&&globalThis.localStorage.setItem(r,a)},removeItem:r=>{jr()&&globalThis.localStorage.removeItem(r)}};function E0(r={}){return{getItem:a=>r[a]||null,setItem:(a,i)=>{r[a]=i},removeItem:a=>{delete r[a]}}}function R_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const di={debug:!!(globalThis&&jr()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Ag extends Error{constructor(a){super(a),this.isAcquireTimeout=!0}}class C_ extends Ag{}async function D_(r,a,i){di.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,a);const o=new globalThis.AbortController;return a>0&&setTimeout(()=>{o.abort(),di.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},a),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,a===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:o.signal},async s=>{if(s){di.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,s.name);try{return await i()}finally{di.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,s.name)}}else{if(a===0)throw di.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new C_(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if(di.debug)try{const c=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(c,null,"  "))}catch(c){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",c)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await i()}}))}R_();const M_={url:G1,storageKey:Y1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:$1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function k0(r,a,i){return await i()}class Mr{constructor(a){var i,o;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Mr.nextInstanceID,Mr.nextInstanceID+=1,this.instanceID>0&&zt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const s=Object.assign(Object.assign({},M_),a);if(this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.persistSession=s.persistSession,this.storageKey=s.storageKey,this.autoRefreshToken=s.autoRefreshToken,this.admin=new A_({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=Eg(s.fetch),this.lock=s.lock||k0,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,s.lock?this.lock=s.lock:zt()&&(!((i=globalThis==null?void 0:globalThis.navigator)===null||i===void 0)&&i.locks)?this.lock=D_:this.lock=k0,this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?s.storage?this.storage=s.storage:jr()?this.storage=j_:(this.memoryStorage={},this.storage=E0(this.memoryStorage)):(this.memoryStorage={},this.storage=E0(this.memoryStorage)),zt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(c){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",c)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async c=>{this._debug("received broadcast notification from other tab or client",c),await this._notifyAllSubscribers(c.data.event,c.data.session,!1)})}this.initialize()}_debug(...a){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Sg}) ${new Date().toISOString()}`,...a),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var a;try{const i=l_(window.location.href);let o="none";if(this._isImplicitGrantCallback(i)?o="implicit":await this._isPKCECallback(i)&&(o="pkce"),zt()&&this.detectSessionInUrl&&o!=="none"){const{data:s,error:c}=await this._getSessionFromURL(i,o);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),J1(c)){const d=(a=c.details)===null||a===void 0?void 0:a.code;if(d==="identity_already_exists"||d==="identity_not_found"||d==="single_identity_not_deletable")return{error:c}}return await this._removeSession(),{error:c}}const{session:h,redirectType:g}=s;return this._debug("#_initialize()","detected session in URL",h,"redirect type",g),await this._saveSession(h),setTimeout(async()=>{g==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(i){return re(i)?{error:i}:{error:new Og("Unexpected error during initialization",i)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(a){var i,o,s;try{const c=await fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(o=(i=a==null?void 0:a.options)===null||i===void 0?void 0:i.data)!==null&&o!==void 0?o:{},gotrue_meta_security:{captcha_token:(s=a==null?void 0:a.options)===null||s===void 0?void 0:s.captchaToken}},xform:un}),{data:h,error:g}=c;if(g||!h)return{data:{user:null,session:null},error:g};const d=h.session,p=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",d)),{data:{user:p,session:d},error:null}}catch(c){if(re(c))return{data:{user:null,session:null},error:c};throw c}}async signUp(a){var i,o,s;try{let c;if("email"in a){const{email:v,password:y,options:x}=a;let k=null,O=null;this.flowType==="pkce"&&([k,O]=await fi(this.storage,this.storageKey)),c=await fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:v,password:y,data:(i=x==null?void 0:x.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:k,code_challenge_method:O},xform:un})}else if("phone"in a){const{phone:v,password:y,options:x}=a;c=await fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:v,password:y,data:(o=x==null?void 0:x.data)!==null&&o!==void 0?o:{},channel:(s=x==null?void 0:x.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:un})}else throw new so("You must provide either an email or phone number and a password");const{data:h,error:g}=c;if(g||!h)return{data:{user:null,session:null},error:g};const d=h.session,p=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",d)),{data:{user:p,session:d},error:null}}catch(c){if(re(c))return{data:{user:null,session:null},error:c};throw c}}async signInWithPassword(a){try{let i;if("email"in a){const{email:c,password:h,options:g}=a;i=await fe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:h,gotrue_meta_security:{captcha_token:g==null?void 0:g.captchaToken}},xform:T0})}else if("phone"in a){const{phone:c,password:h,options:g}=a;i=await fe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:h,gotrue_meta_security:{captcha_token:g==null?void 0:g.captchaToken}},xform:T0})}else throw new so("You must provide either an email or phone number and a password");const{data:o,error:s}=i;return s?{data:{user:null,session:null},error:s}:!o||!o.session||!o.user?{data:{user:null,session:null},error:new oo}:(o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",o.session)),{data:Object.assign({user:o.user,session:o.session},o.weak_password?{weakPassword:o.weak_password}:null),error:s})}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithOAuth(a){var i,o,s,c;return await this._handleProviderSignIn(a.provider,{redirectTo:(i=a.options)===null||i===void 0?void 0:i.redirectTo,scopes:(o=a.options)===null||o===void 0?void 0:o.scopes,queryParams:(s=a.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(c=a.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(a){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(a))}async signInWithWeb3(a){const{chain:i}=a;if(i==="solana")return await this.signInWithSolana(a);throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`)}async signInWithSolana(a){var i,o,s,c,h,g,d,p,v,y,x,k;let O,A;if("message"in a)O=a.message,A=a.signature;else{const{chain:T,wallet:G,statement:V,options:z}=a;let Y;if(zt())if(typeof G=="object")Y=G;else{const X=window;if("solana"in X&&typeof X.solana=="object"&&("signIn"in X.solana&&typeof X.solana.signIn=="function"||"signMessage"in X.solana&&typeof X.solana.signMessage=="function"))Y=X.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof G!="object"||!(z!=null&&z.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");Y=G}const H=new URL((i=z==null?void 0:z.url)!==null&&i!==void 0?i:window.location.href);if("signIn"in Y&&Y.signIn){const X=await Y.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},z==null?void 0:z.signInWithSolana),{version:"1",domain:H.host,uri:H.href}),V?{statement:V}:null));let ee;if(Array.isArray(X)&&X[0]&&typeof X[0]=="object")ee=X[0];else if(X&&typeof X=="object"&&"signedMessage"in X&&"signature"in X)ee=X;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in ee&&"signature"in ee&&(typeof ee.signedMessage=="string"||ee.signedMessage instanceof Uint8Array)&&ee.signature instanceof Uint8Array)O=typeof ee.signedMessage=="string"?ee.signedMessage:new TextDecoder().decode(ee.signedMessage),A=ee.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in Y)||typeof Y.signMessage!="function"||!("publicKey"in Y)||typeof Y!="object"||!Y.publicKey||!("toBase58"in Y.publicKey)||typeof Y.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");O=[`${H.host} wants you to sign in with your Solana account:`,Y.publicKey.toBase58(),...V?["",V,""]:[""],"Version: 1",`URI: ${H.href}`,`Issued At: ${(s=(o=z==null?void 0:z.signInWithSolana)===null||o===void 0?void 0:o.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((c=z==null?void 0:z.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${z.signInWithSolana.notBefore}`]:[],...!((h=z==null?void 0:z.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${z.signInWithSolana.expirationTime}`]:[],...!((g=z==null?void 0:z.signInWithSolana)===null||g===void 0)&&g.chainId?[`Chain ID: ${z.signInWithSolana.chainId}`]:[],...!((d=z==null?void 0:z.signInWithSolana)===null||d===void 0)&&d.nonce?[`Nonce: ${z.signInWithSolana.nonce}`]:[],...!((p=z==null?void 0:z.signInWithSolana)===null||p===void 0)&&p.requestId?[`Request ID: ${z.signInWithSolana.requestId}`]:[],...!((y=(v=z==null?void 0:z.signInWithSolana)===null||v===void 0?void 0:v.resources)===null||y===void 0)&&y.length?["Resources",...z.signInWithSolana.resources.map(ee=>`- ${ee}`)]:[]].join(`
`);const X=await Y.signMessage(new TextEncoder().encode(O),"utf8");if(!X||!(X instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");A=X}}try{const{data:T,error:G}=await fe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:O,signature:a_(A)},!((x=a.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(k=a.options)===null||k===void 0?void 0:k.captchaToken}}:null),xform:un});if(G)throw G;return!T||!T.session||!T.user?{data:{user:null,session:null},error:new oo}:(T.session&&(await this._saveSession(T.session),await this._notifyAllSubscribers("SIGNED_IN",T.session)),{data:Object.assign({},T),error:G})}catch(T){if(re(T))return{data:{user:null,session:null},error:T};throw T}}async _exchangeCodeForSession(a){const i=await co(this.storage,`${this.storageKey}-code-verifier`),[o,s]=(i??"").split("/");try{const{data:c,error:h}=await fe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:a,code_verifier:o},xform:un});if(await fo(this.storage,`${this.storageKey}-code-verifier`),h)throw h;return!c||!c.session||!c.user?{data:{user:null,session:null,redirectType:null},error:new oo}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:Object.assign(Object.assign({},c),{redirectType:s??null}),error:h})}catch(c){if(re(c))return{data:{user:null,session:null,redirectType:null},error:c};throw c}}async signInWithIdToken(a){try{const{options:i,provider:o,token:s,access_token:c,nonce:h}=a,g=await fe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:o,id_token:s,access_token:c,nonce:h,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},xform:un}),{data:d,error:p}=g;return p?{data:{user:null,session:null},error:p}:!d||!d.session||!d.user?{data:{user:null,session:null},error:new oo}:(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",d.session)),{data:d,error:p})}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithOtp(a){var i,o,s,c,h;try{if("email"in a){const{email:g,options:d}=a;let p=null,v=null;this.flowType==="pkce"&&([p,v]=await fi(this.storage,this.storageKey));const{error:y}=await fe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:g,data:(i=d==null?void 0:d.data)!==null&&i!==void 0?i:{},create_user:(o=d==null?void 0:d.shouldCreateUser)!==null&&o!==void 0?o:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:p,code_challenge_method:v},redirectTo:d==null?void 0:d.emailRedirectTo});return{data:{user:null,session:null},error:y}}if("phone"in a){const{phone:g,options:d}=a,{data:p,error:v}=await fe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:g,data:(s=d==null?void 0:d.data)!==null&&s!==void 0?s:{},create_user:(c=d==null?void 0:d.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},channel:(h=d==null?void 0:d.channel)!==null&&h!==void 0?h:"sms"}});return{data:{user:null,session:null,messageId:p==null?void 0:p.message_id},error:v}}throw new so("You must provide either an email or phone number.")}catch(g){if(re(g))return{data:{user:null,session:null},error:g};throw g}}async verifyOtp(a){var i,o;try{let s,c;"options"in a&&(s=(i=a.options)===null||i===void 0?void 0:i.redirectTo,c=(o=a.options)===null||o===void 0?void 0:o.captchaToken);const{data:h,error:g}=await fe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},a),{gotrue_meta_security:{captcha_token:c}}),redirectTo:s,xform:un});if(g)throw g;if(!h)throw new Error("An error occurred on token verification.");const d=h.session,p=h.user;return d!=null&&d.access_token&&(await this._saveSession(d),await this._notifyAllSubscribers(a.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",d)),{data:{user:p,session:d},error:null}}catch(s){if(re(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithSSO(a){var i,o,s;try{let c=null,h=null;return this.flowType==="pkce"&&([c,h]=await fi(this.storage,this.storageKey)),await fe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in a?{provider_id:a.providerId}:null),"domain"in a?{domain:a.domain}:null),{redirect_to:(o=(i=a.options)===null||i===void 0?void 0:i.redirectTo)!==null&&o!==void 0?o:void 0}),!((s=a==null?void 0:a.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:a.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:c,code_challenge_method:h}),headers:this.headers,xform:w_})}catch(c){if(re(c))return{data:null,error:c};throw c}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async a=>{const{data:{session:i},error:o}=a;if(o)throw o;if(!i)throw new Hn;const{error:s}=await fe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:i.access_token});return{data:{user:null,session:null},error:s}})}catch(a){if(re(a))return{data:{user:null,session:null},error:a};throw a}}async resend(a){try{const i=`${this.url}/resend`;if("email"in a){const{email:o,type:s,options:c}=a,{error:h}=await fe(this.fetch,"POST",i,{headers:this.headers,body:{email:o,type:s,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},redirectTo:c==null?void 0:c.emailRedirectTo});return{data:{user:null,session:null},error:h}}else if("phone"in a){const{phone:o,type:s,options:c}=a,{data:h,error:g}=await fe(this.fetch,"POST",i,{headers:this.headers,body:{phone:o,type:s,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}}});return{data:{user:null,session:null,messageId:h==null?void 0:h.message_id},error:g}}throw new so("You must provide either an email or phone number and a type")}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async i=>i))}async _acquireLock(a,i){this._debug("#_acquireLock","begin",a);try{if(this.lockAcquired){const o=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await o,await i()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,a,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const o=i();for(this.pendingInLock.push((async()=>{try{await o}catch{}})()),await o;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await o}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(a){this._debug("#_useSession","begin");try{const i=await this.__loadSession();return await a(i)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let a=null;const i=await co(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",i),i!==null&&(this._isValidSession(i)?a=i:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!a)return{data:{session:null},error:null};const o=a.expires_at?a.expires_at*1e3-Date.now()<ic:!1;if(this._debug("#__loadSession()",`session has${o?"":" not"} expired`,"expires_at",a.expires_at),!o){if(this.storage.isServer){let h=this.suppressGetSessionWarning;a=new Proxy(a,{get:(d,p,v)=>(!h&&p==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),h=!0,this.suppressGetSessionWarning=!0),Reflect.get(d,p,v))})}return{data:{session:a},error:null}}const{session:s,error:c}=await this._callRefreshToken(a.refresh_token);return c?{data:{session:null},error:c}:{data:{session:s},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(a){return a?await this._getUser(a):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(a){try{return a?await fe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:a,xform:Yn}):await this._useSession(async i=>{var o,s,c;const{data:h,error:g}=i;if(g)throw g;return!(!((o=h.session)===null||o===void 0)&&o.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Hn}:await fe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(s=h.session)===null||s===void 0?void 0:s.access_token)!==null&&c!==void 0?c:void 0,xform:Yn})})}catch(i){if(re(i))return K1(i)&&(await this._removeSession(),await fo(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:i};throw i}}async updateUser(a,i={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(a,i))}async _updateUser(a,i={}){try{return await this._useSession(async o=>{const{data:s,error:c}=o;if(c)throw c;if(!s.session)throw new Hn;const h=s.session;let g=null,d=null;this.flowType==="pkce"&&a.email!=null&&([g,d]=await fi(this.storage,this.storageKey));const{data:p,error:v}=await fe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:i==null?void 0:i.emailRedirectTo,body:Object.assign(Object.assign({},a),{code_challenge:g,code_challenge_method:d}),jwt:h.access_token,xform:Yn});if(v)throw v;return h.user=p.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),{data:{user:h.user},error:null}})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async setSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(a))}async _setSession(a){try{if(!a.access_token||!a.refresh_token)throw new Hn;const i=Date.now()/1e3;let o=i,s=!0,c=null;const{payload:h}=lc(a.access_token);if(h.exp&&(o=h.exp,s=o<=i),s){const{session:g,error:d}=await this._callRefreshToken(a.refresh_token);if(d)return{data:{user:null,session:null},error:d};if(!g)return{data:{user:null,session:null},error:null};c=g}else{const{data:g,error:d}=await this._getUser(a.access_token);if(d)throw d;c={access_token:a.access_token,refresh_token:a.refresh_token,user:g.user,token_type:"bearer",expires_in:o-i,expires_at:o},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return{data:{user:c.user,session:c},error:null}}catch(i){if(re(i))return{data:{session:null,user:null},error:i};throw i}}async refreshSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(a))}async _refreshSession(a){try{return await this._useSession(async i=>{var o;if(!a){const{data:h,error:g}=i;if(g)throw g;a=(o=h.session)!==null&&o!==void 0?o:void 0}if(!(a!=null&&a.refresh_token))throw new Hn;const{session:s,error:c}=await this._callRefreshToken(a.refresh_token);return c?{data:{user:null,session:null},error:c}:s?{data:{user:s.user,session:s},error:null}:{data:{user:null,session:null},error:null}})}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async _getSessionFromURL(a,i){try{if(!zt())throw new uo("No browser detected.");if(a.error||a.error_description||a.error_code)throw new uo(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});switch(i){case"implicit":if(this.flowType==="pkce")throw new y0("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new uo("Not a valid implicit grant flow url.");break;default:}if(i==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!a.code)throw new y0("No code detected.");const{data:V,error:z}=await this._exchangeCodeForSession(a.code);if(z)throw z;const Y=new URL(window.location.href);return Y.searchParams.delete("code"),window.history.replaceState(window.history.state,"",Y.toString()),{data:{session:V.session,redirectType:null},error:null}}const{provider_token:o,provider_refresh_token:s,access_token:c,refresh_token:h,expires_in:g,expires_at:d,token_type:p}=a;if(!c||!g||!h||!p)throw new uo("No session defined in URL");const v=Math.round(Date.now()/1e3),y=parseInt(g);let x=v+y;d&&(x=parseInt(d));const k=x-v;k*1e3<=gi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${k}s, should have been closer to ${y}s`);const O=x-y;v-O>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",O,x,v):v-O<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",O,x,v);const{data:A,error:T}=await this._getUser(c);if(T)throw T;const G={provider_token:o,provider_refresh_token:s,access_token:c,expires_in:y,expires_at:x,refresh_token:h,token_type:p,user:A.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:G,redirectType:a.type},error:null}}catch(o){if(re(o))return{data:{session:null,redirectType:null},error:o};throw o}}_isImplicitGrantCallback(a){return!!(a.access_token||a.error_description)}async _isPKCECallback(a){const i=await co(this.storage,`${this.storageKey}-code-verifier`);return!!(a.code&&i)}async signOut(a={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(a))}async _signOut({scope:a}={scope:"global"}){return await this._useSession(async i=>{var o;const{data:s,error:c}=i;if(c)return{error:c};const h=(o=s.session)===null||o===void 0?void 0:o.access_token;if(h){const{error:g}=await this.admin.signOut(h,a);if(g&&!(Z1(g)&&(g.status===404||g.status===401||g.status===403)))return{error:g}}return a!=="others"&&(await this._removeSession(),await fo(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(a){const i=r_(),o={id:i,callback:a,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",i),this.stateChangeEmitters.delete(i)}};return this._debug("#onAuthStateChange()","registered callback with id",i),this.stateChangeEmitters.set(i,o),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(i)})))(),{data:{subscription:o}}}async _emitInitialSession(a){return await this._useSession(async i=>{var o,s;try{const{data:{session:c},error:h}=i;if(h)throw h;await((o=this.stateChangeEmitters.get(a))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",a,"session",c)}catch(c){await((s=this.stateChangeEmitters.get(a))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",a,"error",c),console.error(c)}})}async resetPasswordForEmail(a,i={}){let o=null,s=null;this.flowType==="pkce"&&([o,s]=await fi(this.storage,this.storageKey,!0));try{return await fe(this.fetch,"POST",`${this.url}/recover`,{body:{email:a,code_challenge:o,code_challenge_method:s,gotrue_meta_security:{captcha_token:i.captchaToken}},headers:this.headers,redirectTo:i.redirectTo})}catch(c){if(re(c))return{data:null,error:c};throw c}}async getUserIdentities(){var a;try{const{data:i,error:o}=await this.getUser();if(o)throw o;return{data:{identities:(a=i.user.identities)!==null&&a!==void 0?a:[]},error:null}}catch(i){if(re(i))return{data:null,error:i};throw i}}async linkIdentity(a){var i;try{const{data:o,error:s}=await this._useSession(async c=>{var h,g,d,p,v;const{data:y,error:x}=c;if(x)throw x;const k=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,a.provider,{redirectTo:(h=a.options)===null||h===void 0?void 0:h.redirectTo,scopes:(g=a.options)===null||g===void 0?void 0:g.scopes,queryParams:(d=a.options)===null||d===void 0?void 0:d.queryParams,skipBrowserRedirect:!0});return await fe(this.fetch,"GET",k,{headers:this.headers,jwt:(v=(p=y.session)===null||p===void 0?void 0:p.access_token)!==null&&v!==void 0?v:void 0})});if(s)throw s;return zt()&&!(!((i=a.options)===null||i===void 0)&&i.skipBrowserRedirect)&&window.location.assign(o==null?void 0:o.url),{data:{provider:a.provider,url:o==null?void 0:o.url},error:null}}catch(o){if(re(o))return{data:{provider:a.provider,url:null},error:o};throw o}}async unlinkIdentity(a){try{return await this._useSession(async i=>{var o,s;const{data:c,error:h}=i;if(h)throw h;return await fe(this.fetch,"DELETE",`${this.url}/user/identities/${a.identity_id}`,{headers:this.headers,jwt:(s=(o=c.session)===null||o===void 0?void 0:o.access_token)!==null&&s!==void 0?s:void 0})})}catch(i){if(re(i))return{data:null,error:i};throw i}}async _refreshAccessToken(a){const i=`#_refreshAccessToken(${a.substring(0,5)}...)`;this._debug(i,"begin");try{const o=Date.now();return await u_(async s=>(s>0&&await s_(200*Math.pow(2,s-1)),this._debug(i,"refreshing attempt",s),await fe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:a},headers:this.headers,xform:un})),(s,c)=>{const h=200*Math.pow(2,s);return c&&rc(c)&&Date.now()+h-o<gi})}catch(o){if(this._debug(i,"error",o),re(o))return{data:{session:null,user:null},error:o};throw o}finally{this._debug(i,"end")}}_isValidSession(a){return typeof a=="object"&&a!==null&&"access_token"in a&&"refresh_token"in a&&"expires_at"in a}async _handleProviderSignIn(a,i){const o=await this._getUrlForProvider(`${this.url}/authorize`,a,{redirectTo:i.redirectTo,scopes:i.scopes,queryParams:i.queryParams});return this._debug("#_handleProviderSignIn()","provider",a,"options",i,"url",o),zt()&&!i.skipBrowserRedirect&&window.location.assign(o),{data:{provider:a,url:o},error:null}}async _recoverAndRefresh(){var a;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const o=await co(this.storage,this.storageKey);if(this._debug(i,"session from storage",o),!this._isValidSession(o)){this._debug(i,"session is not valid"),o!==null&&await this._removeSession();return}const s=((a=o.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<ic;if(this._debug(i,`session has${s?"":" not"} expired with margin of ${ic}s`),s){if(this.autoRefreshToken&&o.refresh_token){const{error:c}=await this._callRefreshToken(o.refresh_token);c&&(console.error(c),rc(c)||(this._debug(i,"refresh failed with a non-retryable error, removing the session",c),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(i,"error",o),console.error(o);return}finally{this._debug(i,"end")}}async _callRefreshToken(a){var i,o;if(!a)throw new Hn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${a.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new Ro;const{data:c,error:h}=await this._refreshAccessToken(a);if(h)throw h;if(!c.session)throw new Hn;await this._saveSession(c.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",c.session);const g={session:c.session,error:null};return this.refreshingDeferred.resolve(g),g}catch(c){if(this._debug(s,"error",c),re(c)){const h={session:null,error:c};return rc(c)||await this._removeSession(),(i=this.refreshingDeferred)===null||i===void 0||i.resolve(h),h}throw(o=this.refreshingDeferred)===null||o===void 0||o.reject(c),c}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(a,i,o=!0){const s=`#_notifyAllSubscribers(${a})`;this._debug(s,"begin",i,`broadcast = ${o}`);try{this.broadcastChannel&&o&&this.broadcastChannel.postMessage({event:a,session:i});const c=[],h=Array.from(this.stateChangeEmitters.values()).map(async g=>{try{await g.callback(a,i)}catch(d){c.push(d)}});if(await Promise.all(h),c.length>0){for(let g=0;g<c.length;g+=1)console.error(c[g]);throw c[0]}}finally{this._debug(s,"end")}}async _saveSession(a){this._debug("#_saveSession()",a),this.suppressGetSessionWarning=!0,await kg(this.storage,this.storageKey,a)}async _removeSession(){this._debug("#_removeSession()"),await fo(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const a=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{a&&zt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",a)}catch(i){console.error("removing visibilitychange callback failed",i)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const a=setInterval(()=>this._autoRefreshTokenTick(),gi);this.autoRefreshTicker=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const a=this.autoRefreshTicker;this.autoRefreshTicker=null,a&&clearInterval(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const a=Date.now();try{return await this._useSession(async i=>{const{data:{session:o}}=i;if(!o||!o.refresh_token||!o.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((o.expires_at*1e3-a)/gi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${gi}ms, refresh threshold is ${Sc} ticks`),s<=Sc&&await this._callRefreshToken(o.refresh_token)})}catch(i){console.error("Auto refresh tick failed with error. This is likely a transient error.",i)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(a){if(a.isAcquireTimeout||a instanceof Ag)this._debug("auto refresh token tick lock not available");else throw a}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!zt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(a){console.error("_handleVisibilityChange",a)}}async _onVisibilityChanged(a){const i=`#_onVisibilityChanged(${a})`;this._debug(i,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),a||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(i,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(a,i,o){const s=[`provider=${encodeURIComponent(i)}`];if(o!=null&&o.redirectTo&&s.push(`redirect_to=${encodeURIComponent(o.redirectTo)}`),o!=null&&o.scopes&&s.push(`scopes=${encodeURIComponent(o.scopes)}`),this.flowType==="pkce"){const[c,h]=await fi(this.storage,this.storageKey),g=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(h)}`});s.push(g.toString())}if(o!=null&&o.queryParams){const c=new URLSearchParams(o.queryParams);s.push(c.toString())}return o!=null&&o.skipBrowserRedirect&&s.push(`skip_http_redirect=${o.skipBrowserRedirect}`),`${a}?${s.join("&")}`}async _unenroll(a){try{return await this._useSession(async i=>{var o;const{data:s,error:c}=i;return c?{data:null,error:c}:await fe(this.fetch,"DELETE",`${this.url}/factors/${a.factorId}`,{headers:this.headers,jwt:(o=s==null?void 0:s.session)===null||o===void 0?void 0:o.access_token})})}catch(i){if(re(i))return{data:null,error:i};throw i}}async _enroll(a){try{return await this._useSession(async i=>{var o,s;const{data:c,error:h}=i;if(h)return{data:null,error:h};const g=Object.assign({friendly_name:a.friendlyName,factor_type:a.factorType},a.factorType==="phone"?{phone:a.phone}:{issuer:a.issuer}),{data:d,error:p}=await fe(this.fetch,"POST",`${this.url}/factors`,{body:g,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});return p?{data:null,error:p}:(a.factorType==="totp"&&(!((s=d==null?void 0:d.totp)===null||s===void 0)&&s.qr_code)&&(d.totp.qr_code=`data:image/svg+xml;utf-8,${d.totp.qr_code}`),{data:d,error:null})})}catch(i){if(re(i))return{data:null,error:i};throw i}}async _verify(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async i=>{var o;const{data:s,error:c}=i;if(c)return{data:null,error:c};const{data:h,error:g}=await fe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/verify`,{body:{code:a.code,challenge_id:a.challengeId},headers:this.headers,jwt:(o=s==null?void 0:s.session)===null||o===void 0?void 0:o.access_token});return g?{data:null,error:g}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+h.expires_in},h)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",h),{data:h,error:g})})}catch(i){if(re(i))return{data:null,error:i};throw i}})}async _challenge(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async i=>{var o;const{data:s,error:c}=i;return c?{data:null,error:c}:await fe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/challenge`,{body:{channel:a.channel},headers:this.headers,jwt:(o=s==null?void 0:s.session)===null||o===void 0?void 0:o.access_token})})}catch(i){if(re(i))return{data:null,error:i};throw i}})}async _challengeAndVerify(a){const{data:i,error:o}=await this._challenge({factorId:a.factorId});return o?{data:null,error:o}:await this._verify({factorId:a.factorId,challengeId:i.id,code:a.code})}async _listFactors(){const{data:{user:a},error:i}=await this.getUser();if(i)return{data:null,error:i};const o=(a==null?void 0:a.factors)||[],s=o.filter(h=>h.factor_type==="totp"&&h.status==="verified"),c=o.filter(h=>h.factor_type==="phone"&&h.status==="verified");return{data:{all:o,totp:s,phone:c},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async a=>{var i,o;const{data:{session:s},error:c}=a;if(c)return{data:null,error:c};if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:h}=lc(s.access_token);let g=null;h.aal&&(g=h.aal);let d=g;((o=(i=s.user.factors)===null||i===void 0?void 0:i.filter(y=>y.status==="verified"))!==null&&o!==void 0?o:[]).length>0&&(d="aal2");const v=h.amr||[];return{data:{currentLevel:g,nextLevel:d,currentAuthenticationMethods:v},error:null}}))}async fetchJwk(a,i={keys:[]}){let o=i.keys.find(h=>h.kid===a);if(o||(o=this.jwks.keys.find(h=>h.kid===a),o&&this.jwks_cached_at+Q1>Date.now()))return o;const{data:s,error:c}=await fe(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(c)throw c;if(!s.keys||s.keys.length===0)throw new Ar("JWKS is empty");if(this.jwks=s,this.jwks_cached_at=Date.now(),o=s.keys.find(h=>h.kid===a),!o)throw new Ar("No matching signing key found in JWKS");return o}async getClaims(a,i={keys:[]}){try{let o=a;if(!o){const{data:k,error:O}=await this.getSession();if(O||!k.session)return{data:null,error:O};o=k.session.access_token}const{header:s,payload:c,signature:h,raw:{header:g,payload:d}}=lc(o);if(m_(c.exp),!s.kid||s.alg==="HS256"||!("crypto"in globalThis&&"subtle"in globalThis.crypto)){const{error:k}=await this.getUser(o);if(k)throw k;return{data:{claims:c,header:s,signature:h},error:null}}const p=v_(s.alg),v=await this.fetchJwk(s.kid,i),y=await crypto.subtle.importKey("jwk",v,p,!0,["verify"]);if(!await crypto.subtle.verify(p,y,h,n_(`${g}.${d}`)))throw new Ar("Invalid JWT signature");return{data:{claims:c,header:s,signature:h},error:null}}catch(o){if(re(o))return{data:null,error:o};throw o}}}Mr.nextInstanceID=0;const U_=Mr;class z_ extends U_{constructor(a){super(a)}}var N_=function(r,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(v){try{p(o.next(v))}catch(y){h(y)}}function d(v){try{p(o.throw(v))}catch(y){h(y)}}function p(v){v.done?c(v.value):s(v.value).then(g,d)}p((o=o.apply(r,a||[])).next())})};class q_{constructor(a,i,o){var s,c,h;if(this.supabaseUrl=a,this.supabaseKey=i,!a)throw new Error("supabaseUrl is required.");if(!i)throw new Error("supabaseKey is required.");const g=P1(a),d=new URL(g);this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const p=`sb-${d.hostname.split(".")[0]}-auth-token`,v={db:D1,realtime:U1,auth:Object.assign(Object.assign({},M1),{storageKey:p}),global:C1},y=H1(o??{},v);this.storageKey=(s=y.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(c=y.global.headers)!==null&&c!==void 0?c:{},y.accessToken?(this.accessToken=y.accessToken,this.auth=new Proxy({},{get:(x,k)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(k)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((h=y.auth)!==null&&h!==void 0?h:{},this.headers,y.global.fetch),this.fetch=L1(i,this._getAccessToken.bind(this),y.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},y.realtime)),this.rest=new t1(new URL("rest/v1",d).href,{headers:this.headers,schema:y.db.schema,fetch:this.fetch}),y.accessToken||this._listenForAuthEvents()}get functions(){return new Yy(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}get storage(){return new A1(this.storageUrl.href,this.headers,this.fetch)}from(a){return this.rest.from(a)}schema(a){return this.rest.schema(a)}rpc(a,i={},o={}){return this.rest.rpc(a,i,o)}channel(a,i={config:{}}){return this.realtime.channel(a,i)}getChannels(){return this.realtime.getChannels()}removeChannel(a){return this.realtime.removeChannel(a)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var a,i;return N_(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:o}=yield this.auth.getSession();return(i=(a=o.session)===null||a===void 0?void 0:a.access_token)!==null&&i!==void 0?i:null})}_initSupabaseAuthClient({autoRefreshToken:a,persistSession:i,detectSessionInUrl:o,storage:s,storageKey:c,flowType:h,lock:g,debug:d},p,v){const y={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new z_({url:this.authUrl.href,headers:Object.assign(Object.assign({},y),p),storageKey:c,autoRefreshToken:a,persistSession:i,detectSessionInUrl:o,storage:s,flowType:h,lock:g,debug:d,fetch:v,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(a){return new p1(this.realtimeUrl.href,Object.assign(Object.assign({},a),{params:Object.assign({apikey:this.supabaseKey},a==null?void 0:a.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((i,o)=>{this._handleTokenChanged(i,"CLIENT",o==null?void 0:o.access_token)})}_handleTokenChanged(a,i,o){(a==="TOKEN_REFRESHED"||a==="SIGNED_IN")&&this.changedAccessToken!==o?this.changedAccessToken=o:a==="SIGNED_OUT"&&(this.realtime.setAuth(),i=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const L_=(r,a,i)=>new q_(r,a,i);function Ge(r,a){a===void 0&&(a={});var i=a.insertAt;if(r&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=r:s.appendChild(document.createTextNode(r))}}Ge(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var he=function(){return he=Object.assign||function(r){for(var a,i=1,o=arguments.length;i<o;i++)for(var s in a=arguments[i])Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s]);return r},he.apply(this,arguments)};function To(r){return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},To(r)}var B_=/^\s+/,P_=/\s+$/;function J(r,a){if(a=a||{},(r=r||"")instanceof J)return r;if(!(this instanceof J))return new J(r,a);var i=function(o){var s={r:0,g:0,b:0},c=1,h=null,g=null,d=null,p=!1,v=!1;typeof o=="string"&&(o=function(O){O=O.replace(B_,"").replace(P_,"").toLowerCase();var A,T=!1;if(Tc[O])O=Tc[O],T=!0;else if(O=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(A=Nt.rgb.exec(O))?{r:A[1],g:A[2],b:A[3]}:(A=Nt.rgba.exec(O))?{r:A[1],g:A[2],b:A[3],a:A[4]}:(A=Nt.hsl.exec(O))?{h:A[1],s:A[2],l:A[3]}:(A=Nt.hsla.exec(O))?{h:A[1],s:A[2],l:A[3],a:A[4]}:(A=Nt.hsv.exec(O))?{h:A[1],s:A[2],v:A[3]}:(A=Nt.hsva.exec(O))?{h:A[1],s:A[2],v:A[3],a:A[4]}:(A=Nt.hex8.exec(O))?{r:St(A[1]),g:St(A[2]),b:St(A[3]),a:M0(A[4]),format:T?"name":"hex8"}:(A=Nt.hex6.exec(O))?{r:St(A[1]),g:St(A[2]),b:St(A[3]),format:T?"name":"hex"}:(A=Nt.hex4.exec(O))?{r:St(A[1]+""+A[1]),g:St(A[2]+""+A[2]),b:St(A[3]+""+A[3]),a:M0(A[4]+""+A[4]),format:T?"name":"hex8"}:(A=Nt.hex3.exec(O))?{r:St(A[1]+""+A[1]),g:St(A[2]+""+A[2]),b:St(A[3]+""+A[3]),format:T?"name":"hex"}:!1}(o)),To(o)=="object"&&(sn(o.r)&&sn(o.g)&&sn(o.b)?(y=o.r,x=o.g,k=o.b,s={r:255*Ce(y,255),g:255*Ce(x,255),b:255*Ce(k,255)},p=!0,v=String(o.r).substr(-1)==="%"?"prgb":"rgb"):sn(o.h)&&sn(o.s)&&sn(o.v)?(h=Er(o.s),g=Er(o.v),s=function(O,A,T){O=6*Ce(O,360),A=Ce(A,100),T=Ce(T,100);var G=Math.floor(O),V=O-G,z=T*(1-A),Y=T*(1-V*A),H=T*(1-(1-V)*A),X=G%6,ee=[T,Y,z,z,H,T][X],Ae=[H,T,T,Y,z,z][X],we=[z,z,H,T,T,Y][X];return{r:255*ee,g:255*Ae,b:255*we}}(o.h,h,g),p=!0,v="hsv"):sn(o.h)&&sn(o.s)&&sn(o.l)&&(h=Er(o.s),d=Er(o.l),s=function(O,A,T){var G,V,z;function Y(ee,Ae,we){return we<0&&(we+=1),we>1&&(we-=1),we<1/6?ee+6*(Ae-ee)*we:we<.5?Ae:we<2/3?ee+(Ae-ee)*(2/3-we)*6:ee}if(O=Ce(O,360),A=Ce(A,100),T=Ce(T,100),A===0)G=V=z=T;else{var H=T<.5?T*(1+A):T+A-T*A,X=2*T-H;G=Y(X,H,O+1/3),V=Y(X,H,O),z=Y(X,H,O-1/3)}return{r:255*G,g:255*V,b:255*z}}(o.h,h,d),p=!0,v="hsl"),o.hasOwnProperty("a")&&(c=o.a));var y,x,k;return c=jg(c),{ok:p,format:o.format||v,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:c}}(r);this._originalInput=r,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=a.format||i.format,this._gradientType=a.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function A0(r,a,i){r=Ce(r,255),a=Ce(a,255),i=Ce(i,255);var o,s,c=Math.max(r,a,i),h=Math.min(r,a,i),g=(c+h)/2;if(c==h)o=s=0;else{var d=c-h;switch(s=g>.5?d/(2-c-h):d/(c+h),c){case r:o=(a-i)/d+(a<i?6:0);break;case a:o=(i-r)/d+2;break;case i:o=(r-a)/d+4}o/=6}return{h:o,s,l:g}}function j0(r,a,i){r=Ce(r,255),a=Ce(a,255),i=Ce(i,255);var o,s,c=Math.max(r,a,i),h=Math.min(r,a,i),g=c,d=c-h;if(s=c===0?0:d/c,c==h)o=0;else{switch(c){case r:o=(a-i)/d+(a<i?6:0);break;case a:o=(i-r)/d+2;break;case i:o=(r-a)/d+4}o/=6}return{h:o,s,v:g}}function R0(r,a,i,o){var s=[Lt(Math.round(r).toString(16)),Lt(Math.round(a).toString(16)),Lt(Math.round(i).toString(16))];return o&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function C0(r,a,i,o){return[Lt(Rg(o)),Lt(Math.round(r).toString(16)),Lt(Math.round(a).toString(16)),Lt(Math.round(i).toString(16))].join("")}function H_(r,a){a=a===0?0:a||10;var i=J(r).toHsl();return i.s-=a/100,i.s=Co(i.s),J(i)}function G_(r,a){a=a===0?0:a||10;var i=J(r).toHsl();return i.s+=a/100,i.s=Co(i.s),J(i)}function Y_(r){return J(r).desaturate(100)}function $_(r,a){a=a===0?0:a||10;var i=J(r).toHsl();return i.l+=a/100,i.l=Co(i.l),J(i)}function X_(r,a){a=a===0?0:a||10;var i=J(r).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-a/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-a/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-a/100*255))),J(i)}function Q_(r,a){a=a===0?0:a||10;var i=J(r).toHsl();return i.l-=a/100,i.l=Co(i.l),J(i)}function V_(r,a){var i=J(r).toHsl(),o=(i.h+a)%360;return i.h=o<0?360+o:o,J(i)}function Z_(r){var a=J(r).toHsl();return a.h=(a.h+180)%360,J(a)}function D0(r,a){if(isNaN(a)||a<=0)throw new Error("Argument to polyad must be a positive number");for(var i=J(r).toHsl(),o=[J(r)],s=360/a,c=1;c<a;c++)o.push(J({h:(i.h+c*s)%360,s:i.s,l:i.l}));return o}function K_(r){var a=J(r).toHsl(),i=a.h;return[J(r),J({h:(i+72)%360,s:a.s,l:a.l}),J({h:(i+216)%360,s:a.s,l:a.l})]}function J_(r,a,i){a=a||6,i=i||30;var o=J(r).toHsl(),s=360/i,c=[J(r)];for(o.h=(o.h-(s*a>>1)+720)%360;--a;)o.h=(o.h+s)%360,c.push(J(o));return c}function I_(r,a){a=a||6;for(var i=J(r).toHsv(),o=i.h,s=i.s,c=i.v,h=[],g=1/a;a--;)h.push(J({h:o,s,v:c})),c=(c+g)%1;return h}J.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,a,i,o=this.toRgb();return r=o.r/255,a=o.g/255,i=o.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(r){return this._a=jg(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=j0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=j0(this._r,this._g,this._b),a=Math.round(360*r.h),i=Math.round(100*r.s),o=Math.round(100*r.v);return this._a==1?"hsv("+a+", "+i+"%, "+o+"%)":"hsva("+a+", "+i+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var r=A0(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=A0(this._r,this._g,this._b),a=Math.round(360*r.h),i=Math.round(100*r.s),o=Math.round(100*r.l);return this._a==1?"hsl("+a+", "+i+"%, "+o+"%)":"hsla("+a+", "+i+"%, "+o+"%, "+this._roundA+")"},toHex:function(r){return R0(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(a,i,o,s,c){var h=[Lt(Math.round(a).toString(16)),Lt(Math.round(i).toString(16)),Lt(Math.round(o).toString(16)),Lt(Rg(s))];return c&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ce(this._r,255))+"%",g:Math.round(100*Ce(this._g,255))+"%",b:Math.round(100*Ce(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ce(this._r,255))+"%, "+Math.round(100*Ce(this._g,255))+"%, "+Math.round(100*Ce(this._b,255))+"%)":"rgba("+Math.round(100*Ce(this._r,255))+"%, "+Math.round(100*Ce(this._g,255))+"%, "+Math.round(100*Ce(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(F_[R0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var a="#"+C0(this._r,this._g,this._b,this._a),i=a,o=this._gradientType?"GradientType = 1, ":"";if(r){var s=J(r);i="#"+C0(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+a+",endColorstr="+i+")"},toString:function(r){var a=!!r;r=r||this._format;var i=!1,o=this._a<1&&this._a>=0;return a||!o||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(i=this.toRgbString()),r==="prgb"&&(i=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(i=this.toHexString()),r==="hex3"&&(i=this.toHexString(!0)),r==="hex4"&&(i=this.toHex8String(!0)),r==="hex8"&&(i=this.toHex8String()),r==="name"&&(i=this.toName()),r==="hsl"&&(i=this.toHslString()),r==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return J(this.toString())},_applyModification:function(r,a){var i=r.apply(null,[this].concat([].slice.call(a)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification($_,arguments)},brighten:function(){return this._applyModification(X_,arguments)},darken:function(){return this._applyModification(Q_,arguments)},desaturate:function(){return this._applyModification(H_,arguments)},saturate:function(){return this._applyModification(G_,arguments)},greyscale:function(){return this._applyModification(Y_,arguments)},spin:function(){return this._applyModification(V_,arguments)},_applyCombination:function(r,a){return r.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(J_,arguments)},complement:function(){return this._applyCombination(Z_,arguments)},monochromatic:function(){return this._applyCombination(I_,arguments)},splitcomplement:function(){return this._applyCombination(K_,arguments)},triad:function(){return this._applyCombination(D0,[3])},tetrad:function(){return this._applyCombination(D0,[4])}},J.fromRatio=function(r,a){if(To(r)=="object"){var i={};for(var o in r)r.hasOwnProperty(o)&&(i[o]=o==="a"?r[o]:Er(r[o]));r=i}return J(r,a)},J.equals=function(r,a){return!(!r||!a)&&J(r).toRgbString()==J(a).toRgbString()},J.random=function(){return J.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},J.mix=function(r,a,i){i=i===0?0:i||50;var o=J(r).toRgb(),s=J(a).toRgb(),c=i/100;return J({r:(s.r-o.r)*c+o.r,g:(s.g-o.g)*c+o.g,b:(s.b-o.b)*c+o.b,a:(s.a-o.a)*c+o.a})},J.readability=function(r,a){var i=J(r),o=J(a);return(Math.max(i.getLuminance(),o.getLuminance())+.05)/(Math.min(i.getLuminance(),o.getLuminance())+.05)},J.isReadable=function(r,a,i){var o,s,c=J.readability(r,a);switch(s=!1,(o=function(h){var g,d;return g=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),d=(h.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),d!=="small"&&d!=="large"&&(d="small"),{level:g,size:d}}(i)).level+o.size){case"AAsmall":case"AAAlarge":s=c>=4.5;break;case"AAlarge":s=c>=3;break;case"AAAsmall":s=c>=7}return s},J.mostReadable=function(r,a,i){var o,s,c,h,g=null,d=0;s=(i=i||{}).includeFallbackColors,c=i.level,h=i.size;for(var p=0;p<a.length;p++)(o=J.readability(r,a[p]))>d&&(d=o,g=J(a[p]));return J.isReadable(r,g,{level:c,size:h})||!s?g:(i.includeFallbackColors=!1,J.mostReadable(r,["#fff","#000"],i))};var Tc=J.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},F_=J.hexNames=function(r){var a={};for(var i in r)r.hasOwnProperty(i)&&(a[r[i]]=i);return a}(Tc);function jg(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Ce(r,a){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(r)&&(r="100%");var i=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(r);return r=Math.min(a,Math.max(0,parseFloat(r))),i&&(r=parseInt(r*a,10)/100),Math.abs(r-a)<1e-6?1:r%a/parseFloat(a)}function Co(r){return Math.min(1,Math.max(0,r))}function St(r){return parseInt(r,16)}function Lt(r){return r.length==1?"0"+r:""+r}function Er(r){return r<=1&&(r=100*r+"%"),r}function Rg(r){return Math.round(255*parseFloat(r)).toString(16)}function M0(r){return St(r)/255}var Pn,ho,po,Nt=(ho="[\\s|\\(]+("+(Pn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Pn+")[,|\\s]+("+Pn+")\\s*\\)?",po="[\\s|\\(]+("+Pn+")[,|\\s]+("+Pn+")[,|\\s]+("+Pn+")[,|\\s]+("+Pn+")\\s*\\)?",{CSS_UNIT:new RegExp(Pn),rgb:new RegExp("rgb"+ho),rgba:new RegExp("rgba"+po),hsl:new RegExp("hsl"+ho),hsla:new RegExp("hsla"+po),hsv:new RegExp("hsv"+ho),hsva:new RegExp("hsva"+po),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function sn(r){return!!Nt.CSS_UNIT.exec(r)}var Br=function(r,a){var i=(typeof r=="string"?parseInt(r):r)||0;if(i>=-5&&i<=5){var o=i,s=parseFloat(a),c=s+o*(s/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:a}},Pr=function(r,a){var i=r||{},o="";switch(a){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var s={};if(i.fontSize){var c=i.fontSize;s=function(h,g){var d={};for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&g.indexOf(p)<0&&(d[p]=h[p]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(p=Object.getOwnPropertySymbols(h);v<p.length;v++)g.indexOf(p[v])<0&&Object.prototype.propertyIsEnumerable.call(h,p[v])&&(d[p[v]]=h[p[v]])}return d}(i,["fontSize"]),o=c}return{fontSize:o,styles:s}},W_={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Hr=function(r){var a=r.className,i=r.text,o=r.textColor,s=r.staticText,c=r.style;return i?ye.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(a||"").trim(),style:he(he(he({},s&&W_),o&&{color:o,mixBlendMode:"unset"}),c&&c)},typeof i=="string"&&i.length?i:"loading"):null},hn="rgb(50, 205, 50)";function Gr(r,a){if(a===void 0&&(a=0),r.length===0)throw new Error("Input array cannot be empty!");var i=[];return function o(s,c){return c===void 0&&(c=0),i.push.apply(i,s),i.length<c&&o(i,c),i.slice(0,c)}(r,a)}Ge(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);J(hn).toRgb();Array.from({length:4},function(r,a){return"--atom-phase".concat(a+1,"-rgb")});Ge(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--commet-phase".concat(a+1,"-color")});Ge(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var go=Array.from({length:4},function(r,a){return"--OP-annulus-phase".concat(a+1,"-color")}),ex=function(r){var a,i=Pr(r==null?void 0:r.style,r==null?void 0:r.size),o=i.styles,s=i.fontSize,c=r==null?void 0:r.easing,h=Br(r==null?void 0:r.speedPlus,"1.5s").animationPeriod,g=function(p){var v={},y=go.length;if(p instanceof Array){for(var x=Gr(p,y),k=0;k<x.length&&!(k>=4);k++)v[go[k]]=x[k];return v}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)v[go[O]]=p}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)v[go[O]]=hn}return v}((a=r==null?void 0:r.color)!==null&&a!==void 0?a:""),d=r!=null&&r.dense?4.3:2.9;return ye.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},ye.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},ye.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:d,strokeMiterlimit:"10"})),ye.createElement(Hr,{className:"OP-annulus-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};function sc(r){return r&&r.Math===Math&&r}Ge(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var pi=sc(typeof window=="object"&&window)||sc(typeof self=="object"&&self)||sc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Cg(){var r,a;return!((r=pi==null?void 0:pi.crypto)===null||r===void 0)&&r.randomUUID?pi.crypto.randomUUID():!((a=pi==null?void 0:pi.btoa)===null||a===void 0)&&a.name?pi.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var mo=Array.from({length:4},function(r,a){return"--OP-dotted-phase".concat(a+1,"-color")}),tx=function(r){var a,i=Pr(r==null?void 0:r.style,r==null?void 0:r.size),o=i.styles,s=i.fontSize,c=r==null?void 0:r.easing,h=Br(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,g=function(p){var v={},y=mo.length;if(p instanceof Array){for(var x=Gr(p,y),k=0;k<x.length&&!(k>=4);k++)v[mo[k]]=x[k];return v}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)v[mo[O]]=p}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)v[mo[O]]=hn}return v}((a=r==null?void 0:r.color)!==null&&a!==void 0?a:""),d=r!=null&&r.dense?16:12;return ye.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:d}).map(function(p,v){var y=function(O,A,T){if(A===16){var G=360*O/A,V=A-O,z=Number.parseFloat(T)/A*V*-1;return{transform:"rotate(".concat(G,"deg)"),animationDelay:"".concat(z,"s")}}return{transform:"",animationDelay:""}}(v,d,h),x=y.animationDelay,k=y.transform;return ye.createElement("span",{key:Cg(),className:"rli-d-i-b dot-shape-holder",style:k?{transform:k}:void 0},ye.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),ye.createElement(Hr,{className:"OP-dotted-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};Ge(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var vo=Array.from({length:4},function(r,a){return"--OP-spokes-phase".concat(a+1,"-color")}),nx=function(r){var a,i=Pr(r==null?void 0:r.style,r==null?void 0:r.size),o=i.styles,s=i.fontSize,c=r==null?void 0:r.easing,h=Br(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,g=function(p){var v={},y=vo.length;if(p instanceof Array){for(var x=Gr(p,y),k=0;k<x.length&&!(k>=4);k++)v[vo[k]]=x[k];return v}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)v[vo[O]]=p}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)v[vo[O]]=hn}return v}((a=r==null?void 0:r.color)!==null&&a!==void 0?a:""),d=r!=null&&r.dense?16:12;return ye.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:d},function(p,v){return ye.createElement("span",{key:Cg(),className:"rli-d-i-b spoke",style:ax(v,d,h)})})),ye.createElement(Hr,{text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor}))};function ax(r,a,i){if(a===16){var o=a-r,s=Number.parseFloat(i)/a;return{transform:"rotate(".concat(360*r/a,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((o-1)*s*-1,"s")}}}Ge(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var bo=Array.from({length:4},function(r,a){return"--OP-annulus-dual-sectors-phase".concat(a+1,"-color")}),ix=function(r){var a,i=Pr(r==null?void 0:r.style,r==null?void 0:r.size),o=i.styles,s=i.fontSize,c=r==null?void 0:r.easing,h=Br(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,g=function(p){var v={},y=bo.length;if(p instanceof Array){for(var x=Gr(p,y),k=0;k<x.length&&!(k>=4);k++)v[bo[k]]=x[k];return v}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)v[bo[O]]=p}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)v[bo[O]]=hn}return v}((a=r==null?void 0:r.color)!==null&&a!==void 0?a:""),d=r.dense?"0.45em":"";return ye.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},ye.createElement("span",{className:"rli-d-i-b annulus-sectors",style:he({},d&&{borderWidth:d})}),ye.createElement(Hr,{className:"OP-annulus-dual-sectors-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};Ge(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var xr=Array.from({length:4},function(r,a){return["--OP-annulus-track-phase".concat(a+1,"-color"),"--OP-annulus-sector-phase".concat(a+1,"-color")]}),yo=function(r){return r===void 0&&(r=1),.25*r},rx=function(r){var a,i=Pr(r==null?void 0:r.style,r==null?void 0:r.size),o=i.styles,s=i.fontSize,c=r==null?void 0:r.easing,h=Br(r==null?void 0:r.speedPlus,"1s").animationPeriod,g=function(p){var v={},y=xr.length;if(p instanceof Array){for(var x=Gr(p,y),k=0;k<x.length&&!(k>=4);k++){var O=xr[k];try{if(!(G=J(x[k])).isValid())throw new Error("Invalid Color: ".concat(G.getOriginalInput()));var A=G.setAlpha(yo(G.getAlpha())).toRgbString(),T=x[k];v[O[0]]=A,v[O[1]]=T}catch{T=hn,A=(G=J(hn)).setAlpha(yo(G.getAlpha())).toRgbString(),v[O[0]]=A,v[O[1]]=T}}return v}try{var G=J(p);if(typeof p!="string")throw new Error("Color String expected");if(!G.isValid())throw new Error("Invalid Color: ".concat(G.getOriginalInput()));T=p,A=G.setAlpha(yo(G.getAlpha())).toRgbString();for(var V=0;V<y;V++)v[(O=xr[V])[0]]=A,v[O[1]]=T}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),T=hn,A=(G=J(hn)).setAlpha(yo(G.getAlpha())).toRgbString(),V=0;V<xr.length;V++)v[(O=xr[V])[0]]=A,v[O[1]]=T}return v}((a=r==null?void 0:r.color)!==null&&a!==void 0?a:""),d=r.dense?"0.45em":"";return ye.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},ye.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:he({},d&&{borderWidth:d})}),ye.createElement(Hr,{className:"OP-annulus-sector-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))},lx=function(r){var a=Object(r).variant,i=a===void 0?"disc":a;return i==="dotted"?ye.createElement(tx,he({},r)):i==="spokes"?ye.createElement(nx,he({},r)):i==="disc"?ye.createElement(ex,he({},r)):i==="split-disc"?ye.createElement(ix,he({},r)):i==="track-disc"?ye.createElement(rx,he({},r)):null};Ge(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--four-square-phase".concat(a+1,"-color")});Ge(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--mosaic-phase".concat(a+1,"-color")});Ge(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--riple-phase".concat(a+1,"-color")});Ge(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--TD-pulsate-phase".concat(a+1,"-color")});Ge(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--TD-brick-stack-phase".concat(a+1,"-color")});Ge(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--TD-bob-phase".concat(a+1,"-color")});Ge(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--TD-bounce-phase".concat(a+1,"-color")});Ge(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--shape-phase".concat(a+1,"-color")});Ge(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--trophySpin-phase".concat(a+1,"-color")});Ge(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--slab-phase".concat(a+1,"-color")});Ge(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(r,a){return"--life-line-phase".concat(a+1,"-color")});function ox(){const[r,a]=P.useState(!1),[i,o]=P.useState(!1),s=bi(),c=s.pathname==="/",h=P.useRef(0),g=()=>{const v=window.innerHeight*.2;window.scrollY>v?o(!0):o(!1)};P.useEffect(()=>(window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}),[]),P.useEffect(()=>(r?(h.current=window.scrollY,document.body.style.top=`-${h.current}px`,document.body.classList.add("menu-open-body")):(document.body.classList.remove("menu-open-body"),document.body.style.top="",window.scrollTo(0,h.current)),()=>{document.body.classList.remove("menu-open-body"),document.body.style.top=""}),[r]);function d(){a(!r)}const p=()=>{a(!1)};return M.jsx("header",{className:`${i?"header--scrolled":""} ${r?"navMenu--open":""} ${c?"header--fixed":""}`,children:M.jsxs("div",{className:"header-content",children:[M.jsx(fn,{to:"/",onClick:p,children:M.jsx("img",{src:"/img/logo-white.svg",alt:"Portfolio Logo"})}),M.jsx("iconify-icon",{className:"menuToggleBtn",icon:"material-symbols:menu-rounded",width:"24",height:"24",onClick:d}),M.jsx("nav",{className:`navMenu ${r?"navMenu--open":""}`,children:M.jsxs("ul",{children:[M.jsx("li",{children:M.jsx(fn,{to:"/",onClick:p,className:s.pathname==="/"?"active":"",children:"My"})}),M.jsx("li",{children:M.jsx(fn,{to:"/project",onClick:p,className:s.pathname==="/project"?"active":"",children:"Projects"})}),M.jsx("li",{children:M.jsx(fn,{to:"/doc",onClick:p,className:s.pathname==="/doc"?"active":"",children:"Documentation"})}),M.jsx("li",{children:M.jsx(fn,{to:"/contact",onClick:p,className:s.pathname==="/contact"?"active":"",children:"Contact"})})]})})]})})}function Ec(){return Ec=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r},Ec.apply(this,arguments)}var sx={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(r){},onComplete:function(r){},preStringTyped:function(r,a){},onStringTyped:function(r,a){},onLastStringBackspaced:function(r){},onTypingPaused:function(r,a){},onTypingResumed:function(r,a){},onReset:function(r){},onStop:function(r,a){},onStart:function(r,a){},onDestroy:function(r){}},ux=new(function(){function r(){}var a=r.prototype;return a.load=function(i,o,s){if(i.el=typeof s=="string"?document.querySelector(s):s,i.options=Ec({},sx,o),i.isInput=i.el.tagName.toLowerCase()==="input",i.attr=i.options.attr,i.bindInputFocusEvents=i.options.bindInputFocusEvents,i.showCursor=!i.isInput&&i.options.showCursor,i.cursorChar=i.options.cursorChar,i.cursorBlinking=!0,i.elContent=i.attr?i.el.getAttribute(i.attr):i.el.textContent,i.contentType=i.options.contentType,i.typeSpeed=i.options.typeSpeed,i.startDelay=i.options.startDelay,i.backSpeed=i.options.backSpeed,i.smartBackspace=i.options.smartBackspace,i.backDelay=i.options.backDelay,i.fadeOut=i.options.fadeOut,i.fadeOutClass=i.options.fadeOutClass,i.fadeOutDelay=i.options.fadeOutDelay,i.isPaused=!1,i.strings=i.options.strings.map(function(p){return p.trim()}),i.stringsElement=typeof i.options.stringsElement=="string"?document.querySelector(i.options.stringsElement):i.options.stringsElement,i.stringsElement){i.strings=[],i.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var c=Array.prototype.slice.apply(i.stringsElement.children),h=c.length;if(h)for(var g=0;g<h;g+=1)i.strings.push(c[g].innerHTML.trim())}for(var d in i.strPos=0,i.currentElContent=this.getCurrentElContent(i),i.currentElContent&&i.currentElContent.length>0&&(i.strPos=i.currentElContent.length-1,i.strings.unshift(i.currentElContent)),i.sequence=[],i.strings)i.sequence[d]=d;i.arrayPos=0,i.stopNum=0,i.loop=i.options.loop,i.loopCount=i.options.loopCount,i.curLoop=0,i.shuffle=i.options.shuffle,i.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},i.typingComplete=!1,i.autoInsertCss=i.options.autoInsertCss,i.autoInsertCss&&(this.appendCursorAnimationCss(i),this.appendFadeOutAnimationCss(i))},a.getCurrentElContent=function(i){return i.attr?i.el.getAttribute(i.attr):i.isInput?i.el.value:i.contentType==="html"?i.el.innerHTML:i.el.textContent},a.appendCursorAnimationCss=function(i){var o="data-typed-js-cursor-css";if(i.showCursor&&!document.querySelector("["+o+"]")){var s=document.createElement("style");s.setAttribute(o,"true"),s.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(s)}},a.appendFadeOutAnimationCss=function(i){var o="data-typed-fadeout-js-css";if(i.fadeOut&&!document.querySelector("["+o+"]")){var s=document.createElement("style");s.setAttribute(o,"true"),s.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(s)}},r}()),U0=new(function(){function r(){}var a=r.prototype;return a.typeHtmlChars=function(i,o,s){if(s.contentType!=="html")return o;var c=i.substring(o).charAt(0);if(c==="<"||c==="&"){var h;for(h=c==="<"?">":";";i.substring(o+1).charAt(0)!==h&&!(1+ ++o>i.length););o++}return o},a.backSpaceHtmlChars=function(i,o,s){if(s.contentType!=="html")return o;var c=i.substring(o).charAt(0);if(c===">"||c===";"){var h;for(h=c===">"?"<":"&";i.substring(o-1).charAt(0)!==h&&!(--o<0););o--}return o},r}()),cx=function(){function r(i,o){ux.load(this,o,i),this.begin()}var a=r.prototype;return a.toggle=function(){this.pause.status?this.start():this.stop()},a.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},a.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},a.destroy=function(){this.reset(!1),this.options.onDestroy(this)},a.reset=function(i){i===void 0&&(i=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,i&&(this.insertCursor(),this.options.onReset(this),this.begin())},a.begin=function(){var i=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){i.strPos===0?i.typewrite(i.strings[i.sequence[i.arrayPos]],i.strPos):i.backspace(i.strings[i.sequence[i.arrayPos]],i.strPos)},this.startDelay)},a.typewrite=function(i,o){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var c=this.humanizer(this.typeSpeed),h=1;this.pause.status!==!0?this.timeout=setTimeout(function(){o=U0.typeHtmlChars(i,o,s);var g=0,d=i.substring(o);if(d.charAt(0)==="^"&&/^\^\d+/.test(d)){var p=1;p+=(d=/\d+/.exec(d)[0]).length,g=parseInt(d),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),i=i.substring(0,o)+i.substring(o+p),s.toggleBlinking(!0)}if(d.charAt(0)==="`"){for(;i.substring(o+h).charAt(0)!=="`"&&(h++,!(o+h>i.length)););var v=i.substring(0,o),y=i.substring(v.length+1,o+h),x=i.substring(o+h+1);i=v+y+x,h--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),o>=i.length?s.doneTyping(i,o):s.keepTyping(i,o,h),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},g)},c):this.setPauseStatus(i,o,!0)},a.keepTyping=function(i,o,s){o===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var c=i.substring(0,o+=s);this.replaceText(c),this.typewrite(i,o)},a.doneTyping=function(i,o){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(i,o)},this.backDelay))},a.backspace=function(i,o){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var c=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){o=U0.backSpaceHtmlChars(i,o,s);var h=i.substring(0,o);if(s.replaceText(h),s.smartBackspace){var g=s.strings[s.arrayPos+1];s.stopNum=g&&h===g.substring(0,o)?o:0}o>s.stopNum?(o--,s.backspace(i,o)):o<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],o))},c)}else this.setPauseStatus(i,o,!1)},a.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},a.setPauseStatus=function(i,o,s){this.pause.typewrite=s,this.pause.curString=i,this.pause.curStrPos=o},a.toggleBlinking=function(i){this.cursor&&(this.pause.status||this.cursorBlinking!==i&&(this.cursorBlinking=i,i?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},a.humanizer=function(i){return Math.round(Math.random()*i/2)+i},a.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},a.initFadeOut=function(){var i=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){i.arrayPos++,i.replaceText(""),i.strings.length>i.arrayPos?i.typewrite(i.strings[i.sequence[i.arrayPos]],0):(i.typewrite(i.strings[0],0),i.arrayPos=0)},this.fadeOutDelay)},a.replaceText=function(i){this.attr?this.el.setAttribute(this.attr,i):this.isInput?this.el.value=i:this.contentType==="html"?this.el.innerHTML=i:this.el.textContent=i},a.bindFocusEvents=function(){var i=this;this.isInput&&(this.el.addEventListener("focus",function(o){i.stop()}),this.el.addEventListener("blur",function(o){i.el.value&&i.el.value.length!==0||i.start()}))},a.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},r}();function uc({icon:r,href:a,id:i}){return M.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"social-button",id:i,children:M.jsx("iconify-icon",{icon:r})})}function fx({to:r,label:a}){return M.jsxs(fn,{to:r,className:"back-button",children:[M.jsx("iconify-icon",{icon:"ic:baseline-keyboard-backspace",width:"24",height:"24"}),a]})}function hx({icon:r,label:a,action:i}){return M.jsxs("button",{className:"open-button",onClick:i,children:[M.jsx("iconify-icon",{icon:r,width:"24",height:"24"}),a]})}function dx(){return M.jsxs("div",{className:"social-list",children:[M.jsx(uc,{href:"https://linkedin.com/in/hirakada/",icon:"mdi:linkedin",id:"linkedin"}),M.jsx(uc,{href:"https://instagram.com/hirakada/",icon:"mdi:instagram",id:"instagram"}),M.jsx(uc,{href:"https://github.com/Hirakada",icon:"mdi:github",id:"github"})]})}function Gc({id:r,coverImage:a,title:i,collaborators:o,attributes:s,projectUrl:c,descriptiveTitleSlug:h}){const g=h;return M.jsx(fn,{to:`/project/${g}`,className:"project-card-link",style:{textDecoration:"none",color:"inherit"},children:M.jsxs("div",{className:"project",children:[M.jsx("img",{src:a,alt:`Cover image for ${i}`,className:"cardImage"}),M.jsx("h5",{className:"projectName",children:i}),M.jsxs("div",{className:"cardSection",children:[s&&s.length>0&&M.jsx("ul",{className:"attributesList",children:s.map(d=>M.jsx("li",{className:"attributeItem",children:d.name},d.id))}),o&&o.length>0&&M.jsx("ul",{className:"collaboratorsList",children:o.map(d=>M.jsx("li",{className:"collaboratorItem",children:d.profileImage&&M.jsx("img",{src:d.profileImage,alt:`Profile of ${d.name}`,className:"collaborator-profile-pic"})},d.id))})]})]})})}function Dg({iconUrl:r,name:a,type:i}){return M.jsxs("div",{className:"tag-item","data-type":i,children:[r&&M.jsx("img",{src:r,alt:a,className:"tag-icon"}),M.jsx("span",{className:"tag-name",children:a})]})}function px({imageUrl:r,name:a,websiteUrl:i,linkedinUrl:o,roleOnProject:s}){const[c,h]=P.useState(!1),g=P.useRef(null),d=i&&o,p=i&&!o||!i&&o,v=i&&!o,y=o&&!i;P.useEffect(()=>{function k(O){g.current&&!g.current.contains(O.target)&&h(!1)}return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[g]);const x=()=>{d?h(k=>!k):v?window.open(i,"_blank","noopener noreferrer"):y&&window.open(o,"_blank","noopener noreferrer")};return M.jsxs("div",{className:`collaborator-tag ${d||p?"clickable":""}`,onClick:x,ref:g,children:[r&&M.jsx("img",{src:r,alt:a,className:"collaborator-avatar"}),M.jsx("span",{className:"collaborator-name",children:a}),M.jsx("p",{className:"project-role",children:s}),d&&M.jsx("div",{className:"dropdown-indicator",children:"▼"}),d&&c&&M.jsxs("div",{className:"collaborator-dropdown",children:[M.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"dropdown-link",onClick:()=>h(!1),children:"Website"}),M.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"dropdown-link",onClick:()=>h(!1),children:"LinkedIn"})]})]})}function gx({projects:r,attributes:a,globalLoading:i}){const o=P.useRef(null);let[s,c]=P.useState([]),[h,g]=P.useState([]);return P.useEffect(()=>{if(!i&&o.current){const d=new cx(o.current,{strings:["UI/UX Designer","Frontend Developer","Graphic Designer","Digital Marketer"],typeSpeed:80,backSpeed:50,backDelay:1e3,loop:!0,showCursor:!1});return()=>{d.destroy()}}},[i]),P.useEffect(()=>{if(!i){if(r&&r.length>0){let d=r.filter(p=>p.isFeatured===!0);c(d),d.length===0&&r.length>0}else c([]);if(a&&a.length>0){let d=a.filter(p=>p.type&&p.type!=="skill");g(d),d.length===0&&a.length>0}else g([])}},[r,a,i]),M.jsxs(M.Fragment,{children:[M.jsxs("section",{className:"hero-section",children:[M.jsxs("div",{className:"greeting",children:[M.jsx("h3",{children:"Hi! I am"}),M.jsx("h1",{className:"role",children:M.jsx("span",{className:"auto-type",id:"role",ref:o})})]}),M.jsx(dx,{})]}),M.jsx("div",{className:"key-skills-section",children:h.length>0?M.jsx("div",{className:"skills-grid",children:h.map(d=>M.jsx(Dg,{iconUrl:d.icon_url,name:d.name,type:d.type},d.id))}):null}),M.jsxs("section",{className:"featured-projects-section",children:[M.jsx("h2",{children:"Featured Projects"}),s.length>0?M.jsx("div",{className:"normal-grid",children:s.map(d=>M.jsx(Gc,{id:d.id,coverImage:d.coverImage,title:d.title,collaborators:d.collaborators,attributes:d.attributes,projectUrl:d.projectUrl,descriptiveTitleSlug:d.descriptiveTitleSlug},d.id))}):null]})]})}function mx({projects:r,attributes:a,globalLoading:i}){let[o,s]=P.useState([]),[c,h]=P.useState([]);return P.useEffect(()=>{i?(s([]),h([])):(s(r||[]),h(a||[]))},[r,a,i]),i?null:M.jsx(M.Fragment,{children:M.jsxs("section",{className:"projects-section",children:[M.jsx("h2",{children:"My Projects"}),o.length>0?M.jsx("div",{className:"normal-grid",children:o.map(g=>M.jsx(Gc,{id:g.id,coverImage:g.coverImage,title:g.title,collaborators:g.collaborators,attributes:g.attributes,projectUrl:g.projectUrl,descriptiveTitleSlug:g.descriptiveTitleSlug},g.id))}):null]})})}const vx=r=>{let a=r.length,i;for(;a!==0;)i=Math.floor(Math.random()*a),a--,[r[a],r[i]]=[r[i],r[a]];return r};function bx({projects:r,globalLoading:a}){let{descriptiveTitleSlug:i}=uy(),[o,s]=P.useState(null),[c,h]=P.useState(null);if(P.useEffect(()=>{if(h(null),s(null),!i){h("No project slug found in URL.");return}if(!a&&r)if(r.length>0){let y=r.find(x=>x.descriptiveTitleSlug===i);y?s(y):h("Project not found. It might have been removed or the link is invalid.")}else h("No project data available. Please visit the main projects page first.")},[i,r,a]),a)return null;if(c)return M.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen text-red-600 p-4",children:[M.jsx("h2",{children:"Error Loading Project Details"}),M.jsx("p",{children:c}),M.jsx(fn,{to:"/",className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Go back to Projects"})]});if(!o)return null;let g=r.filter(y=>y.id!==o.id),v=vx([...g]).slice(0,3);return M.jsxs(M.Fragment,{children:[M.jsx("span",{className:"back",children:M.jsx(fx,{to:"/project",label:"Back to Projects"})}),M.jsxs("section",{className:"project-detail-section",children:[o.coverImage&&M.jsx("img",{src:o.coverImage,alt:o.title,className:"project-cover-image"}),M.jsxs("div",{className:"project-detail-content",children:[M.jsx("h1",{className:"project-title",children:o.title}),M.jsx("p",{className:"project-description",children:o.description}),o.attributes&&o.attributes.length>0&&M.jsxs("div",{className:"project-attributes",children:[M.jsx("h3",{children:"Tools:"}),M.jsx("div",{className:"attributes-grid",children:o.attributes.map(y=>M.jsx(Dg,{name:y.name,iconUrl:y.iconUrl},y.id))})]}),o.collaborators&&o.collaborators.length>0&&M.jsxs("div",{className:"project-collaborators",children:[M.jsx("h3",{children:"Collaborators:"}),M.jsx("div",{className:"collaborators-list",children:o.collaborators.map(y=>M.jsx(px,{name:y.name,imageUrl:y.profileImage,websiteUrl:y.websiteUrl,linkedinUrl:y.linkedinUrl,roleOnProject:y.roleOnProject},y.id))})]}),o.projectImages&&o.projectImages.length>1&&M.jsxs("div",{className:"project-gallery",children:[M.jsx("h3",{children:"More Images:"}),M.jsx("div",{className:"image-grid",children:o.projectImages.filter(y=>y.image_url!==o.coverImage).sort((y,x)=>y.order-x.order).map(y=>M.jsx("img",{src:y.image_url,alt:`Project image ${y.id}`,className:"project-gallery-image"},y.id))})]}),o.projectUrl&&M.jsx(hx,{icon:"mdi:open-in-new",label:"Open Project",action:()=>window.open(o.projectUrl,"_blank","noopener noreferrer")})]})]}),M.jsxs("section",{className:"other-projects-section",children:[M.jsx("h2",{children:"Other Projects"}),v.length>0?M.jsx("div",{className:"normal-grid",children:v.map(y=>M.jsx(Gc,{id:y.id,coverImage:y.coverImage,title:y.title,collaborators:y.collaborators,attributes:y.attributes,projectUrl:y.projectUrl,descriptiveTitleSlug:y.descriptiveTitleSlug},y.id))}):M.jsx("p",{children:"No other projects available."})]})]})}function yx(){const{pathname:r}=bi();return P.useEffect(()=>{window.scrollTo(0,0)},[r]),null}const z0=L_("https://haackkpsvjlpttequfou.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhYWNra3BzdmpscHR0ZXF1Zm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzUzODQsImV4cCI6MjA2NTA1MTM4NH0.KafohzUXKVzBo6Fs3lXULzXZ5XRWgCY8Jx-wONLTXuI"),_x=r=>r.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");function xx(){const[r,a]=P.useState(!0);let[i,o]=P.useState([]),[s,c]=P.useState([]),[h,g]=P.useState(null);return P.useEffect(()=>{async function d(){a(!0),g(null);try{let p=sessionStorage.getItem("allProjectsData"),v=sessionStorage.getItem("allAttributesData");if(p&&v)try{console.log("App.jsx: Loading all data from sessionStorage cache."),o(JSON.parse(p)),c(JSON.parse(v)),a(!1);return}catch(T){console.error("App.jsx: Error parsing cached data:",T),sessionStorage.removeItem("allProjectsData"),sessionStorage.removeItem("allAttributesData")}console.log("App.jsx: No valid cache found. Fetching all data from Supabase.");let{data:y,error:x}=await z0.from("projects").select(`
                        *,
                        project_attributes (
                            attributes (
                                id, name, type, icon_url
                            )
                        ),
                        project_collaborators (
                            collaborators (
                                id, name, profile_image_url, website_url, linkedin_url
                            )
                        ),
                        project_images (
                            *
                        )
                    `);if(x)throw new Error(x.message);let{data:k,error:O}=await z0.from("attributes").select("*");if(O)throw new Error(k.message);let A=y.map(T=>{let G=T.project_attributes.map(H=>({id:H.attributes.id,name:H.attributes.name,type:H.attributes.type,iconUrl:H.attributes.icon_url})),V=T.project_collaborators.map(H=>({id:H.collaborators.id,name:H.collaborators.name,profileImage:H.collaborators.profile_image_url,websiteUrl:H.collaborators.website_url,linkedinUrl:H.collaborators.linkedin_url})),z=null;T.project_images&&T.project_images.length>0&&(z=[...T.project_images].sort((X,ee)=>X.order-ee.order)[0].image_url);let Y=_x(T.title);return{id:T.id,title:T.title,description:T.long_description,coverImage:z,attributes:G,collaborators:V,projectImages:T.project_images,projectUrl:T.project_url,isFeatured:T.is_featured,descriptiveTitleSlug:Y}});o(A),c(k),sessionStorage.setItem("allProjectsData",JSON.stringify(A)),sessionStorage.setItem("allAttributesData",JSON.stringify(k))}catch(p){g(p.message||"Failed to load application data."),o([]),c([]),sessionStorage.removeItem("allProjectsData"),sessionStorage.removeItem("allAttributesData")}finally{a(!1)}}d()},[]),h?M.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen text-red-600 p-4",children:[M.jsx("h1",{children:"Application Error"}),M.jsx("p",{children:h}),M.jsx("p",{children:"Please refresh the page or try again later."})]}):M.jsxs(Dy,{basename:"/",children:[M.jsx(yx,{}),r&&M.jsx("div",{className:"flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black z-50 pointer-events-none",children:M.jsx(lx,{color:"#E0E0E0",size:"medium",text:"",textColor:""})}),M.jsx(ox,{}),M.jsx("main",{children:M.jsxs(Ty,{children:[M.jsx(Or,{path:"/",element:M.jsx(gx,{projects:i,attributes:s,globalLoading:r})}),M.jsx(Or,{path:"/project",element:M.jsx(mx,{projects:i,attributes:s,globalLoading:r})}),M.jsx(Or,{path:"/project/:descriptiveTitleSlug",element:M.jsx(bx,{projects:i,globalLoading:r})}),M.jsx(Or,{path:"*",element:M.jsxs("div",{className:`
                                        flex flex-col items-center justify-center
                                        text-gray-700 bg-gray-50 p-4
                                    `,style:{minHeight:"calc(100vh - 64px)"},children:[M.jsx("h1",{className:"text-6xl font-extrabold text-red-600",children:"404"}),M.jsx("p",{className:"text-2xl mt-4",children:"Page Not Found"}),M.jsx("p",{className:"mt-2 text-lg",children:"The page you are looking for does not exist."}),M.jsx(fn,{to:"/",className:"mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300",children:"Go to Home"})]})})]})})]})}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.0
*/const Mg=Object.freeze({left:0,top:0,width:16,height:16}),Eo=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Yr=Object.freeze({...Mg,...Eo}),kc=Object.freeze({...Yr,body:"",hidden:!1}),Sx=Object.freeze({width:null,height:null}),Ug=Object.freeze({...Sx,...Eo});function wx(r,a=0){const i=r.replace(/^-?[0-9.]*/,"");function o(s){for(;s<0;)s+=4;return s%4}if(i===""){const s=parseInt(r);return isNaN(s)?0:o(s)}else if(i!==r){let s=0;switch(i){case"%":s=25;break;case"deg":s=90}if(s){let c=parseFloat(r.slice(0,r.length-i.length));return isNaN(c)?0:(c=c/s,c%1===0?o(c):0)}}return a}const Ox=/[\s,]+/;function Tx(r,a){a.split(Ox).forEach(i=>{switch(i.trim()){case"horizontal":r.hFlip=!0;break;case"vertical":r.vFlip=!0;break}})}const zg={...Ug,preserveAspectRatio:""};function N0(r){const a={...zg},i=(o,s)=>r.getAttribute(o)||s;return a.width=i("width",null),a.height=i("height",null),a.rotate=wx(i("rotate","")),Tx(a,i("flip","")),a.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),a}function Ex(r,a){for(const i in zg)if(r[i]!==a[i])return!0;return!1}const Ng=/^[a-z0-9]+(-[a-z0-9]+)*$/,$r=(r,a,i,o="")=>{const s=r.split(":");if(r.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;o=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const g=s.pop(),d=s.pop(),p={provider:s.length>0?s[0]:o,prefix:d,name:g};return a&&!_o(p)?null:p}const c=s[0],h=c.split("-");if(h.length>1){const g={provider:o,prefix:h.shift(),name:h.join("-")};return a&&!_o(g)?null:g}if(i&&o===""){const g={provider:o,prefix:"",name:c};return a&&!_o(g,i)?null:g}return null},_o=(r,a)=>r?!!((a&&r.prefix===""||r.prefix)&&r.name):!1;function kx(r,a){const i={};!r.hFlip!=!a.hFlip&&(i.hFlip=!0),!r.vFlip!=!a.vFlip&&(i.vFlip=!0);const o=((r.rotate||0)+(a.rotate||0))%4;return o&&(i.rotate=o),i}function q0(r,a){const i=kx(r,a);for(const o in kc)o in Eo?o in r&&!(o in i)&&(i[o]=Eo[o]):o in a?i[o]=a[o]:o in r&&(i[o]=r[o]);return i}function Ax(r,a){const i=r.icons,o=r.aliases||Object.create(null),s=Object.create(null);function c(h){if(i[h])return s[h]=[];if(!(h in s)){s[h]=null;const g=o[h]&&o[h].parent,d=g&&c(g);d&&(s[h]=[g].concat(d))}return s[h]}return Object.keys(i).concat(Object.keys(o)).forEach(c),s}function jx(r,a,i){const o=r.icons,s=r.aliases||Object.create(null);let c={};function h(g){c=q0(o[g]||s[g],c)}return h(a),i.forEach(h),q0(r,c)}function qg(r,a){const i=[];if(typeof r!="object"||typeof r.icons!="object")return i;r.not_found instanceof Array&&r.not_found.forEach(s=>{a(s,null),i.push(s)});const o=Ax(r);for(const s in o){const c=o[s];c&&(a(s,jx(r,s,c)),i.push(s))}return i}const Rx={provider:"",aliases:{},not_found:{},...Mg};function cc(r,a){for(const i in a)if(i in r&&typeof r[i]!=typeof a[i])return!1;return!0}function Lg(r){if(typeof r!="object"||r===null)return null;const a=r;if(typeof a.prefix!="string"||!r.icons||typeof r.icons!="object"||!cc(r,Rx))return null;const i=a.icons;for(const s in i){const c=i[s];if(!s||typeof c.body!="string"||!cc(c,kc))return null}const o=a.aliases||Object.create(null);for(const s in o){const c=o[s],h=c.parent;if(!s||typeof h!="string"||!i[h]&&!o[h]||!cc(c,kc))return null}return a}const ko=Object.create(null);function Cx(r,a){return{provider:r,prefix:a,icons:Object.create(null),missing:new Set}}function dn(r,a){const i=ko[r]||(ko[r]=Object.create(null));return i[a]||(i[a]=Cx(r,a))}function Bg(r,a){return Lg(a)?qg(a,(i,o)=>{o?r.icons[i]=o:r.missing.add(i)}):[]}function Dx(r,a,i){try{if(typeof i.body=="string")return r.icons[a]={...i},!0}catch{}return!1}function Mx(r,a){let i=[];return(typeof r=="string"?[r]:Object.keys(ko)).forEach(s=>{(typeof s=="string"&&typeof a=="string"?[a]:Object.keys(ko[s]||{})).forEach(h=>{const g=dn(s,h);i=i.concat(Object.keys(g.icons).map(d=>(s!==""?"@"+s+":":"")+h+":"+d))})}),i}let Ur=!1;function Pg(r){return typeof r=="boolean"&&(Ur=r),Ur}function zr(r){const a=typeof r=="string"?$r(r,!0,Ur):r;if(a){const i=dn(a.provider,a.prefix),o=a.name;return i.icons[o]||(i.missing.has(o)?null:void 0)}}function Hg(r,a){const i=$r(r,!0,Ur);if(!i)return!1;const o=dn(i.provider,i.prefix);return a?Dx(o,i.name,a):(o.missing.add(i.name),!0)}function L0(r,a){if(typeof r!="object")return!1;if(typeof a!="string"&&(a=r.provider||""),Ur&&!a&&!r.prefix){let s=!1;return Lg(r)&&(r.prefix="",qg(r,(c,h)=>{Hg(c,h)&&(s=!0)})),s}const i=r.prefix;if(!_o({prefix:i,name:"a"}))return!1;const o=dn(a,i);return!!Bg(o,r)}function Ux(r){return!!zr(r)}function zx(r){const a=zr(r);return a&&{...Yr,...a}}function Nx(r){const a={loaded:[],missing:[],pending:[]},i=Object.create(null);r.sort((s,c)=>s.provider!==c.provider?s.provider.localeCompare(c.provider):s.prefix!==c.prefix?s.prefix.localeCompare(c.prefix):s.name.localeCompare(c.name));let o={provider:"",prefix:"",name:""};return r.forEach(s=>{if(o.name===s.name&&o.prefix===s.prefix&&o.provider===s.provider)return;o=s;const c=s.provider,h=s.prefix,g=s.name,d=i[c]||(i[c]=Object.create(null)),p=d[h]||(d[h]=dn(c,h));let v;g in p.icons?v=a.loaded:h===""||p.missing.has(g)?v=a.missing:v=a.pending;const y={provider:c,prefix:h,name:g};v.push(y)}),a}function Gg(r,a){r.forEach(i=>{const o=i.loaderCallbacks;o&&(i.loaderCallbacks=o.filter(s=>s.id!==a))})}function qx(r){r.pendingCallbacksFlag||(r.pendingCallbacksFlag=!0,setTimeout(()=>{r.pendingCallbacksFlag=!1;const a=r.loaderCallbacks?r.loaderCallbacks.slice(0):[];if(!a.length)return;let i=!1;const o=r.provider,s=r.prefix;a.forEach(c=>{const h=c.icons,g=h.pending.length;h.pending=h.pending.filter(d=>{if(d.prefix!==s)return!0;const p=d.name;if(r.icons[p])h.loaded.push({provider:o,prefix:s,name:p});else if(r.missing.has(p))h.missing.push({provider:o,prefix:s,name:p});else return i=!0,!0;return!1}),h.pending.length!==g&&(i||Gg([r],c.id),c.callback(h.loaded.slice(0),h.missing.slice(0),h.pending.slice(0),c.abort))})}))}let Lx=0;function Bx(r,a,i){const o=Lx++,s=Gg.bind(null,i,o);if(!a.pending.length)return s;const c={id:o,icons:a,callback:r,abort:s};return i.forEach(h=>{(h.loaderCallbacks||(h.loaderCallbacks=[])).push(c)}),s}const Ac=Object.create(null);function B0(r,a){Ac[r]=a}function jc(r){return Ac[r]||Ac[""]}function Px(r,a=!0,i=!1){const o=[];return r.forEach(s=>{const c=typeof s=="string"?$r(s,a,i):s;c&&o.push(c)}),o}var Hx={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Gx(r,a,i,o){const s=r.resources.length,c=r.random?Math.floor(Math.random()*s):r.index;let h;if(r.random){let X=r.resources.slice(0);for(h=[];X.length>1;){const ee=Math.floor(Math.random()*X.length);h.push(X[ee]),X=X.slice(0,ee).concat(X.slice(ee+1))}h=h.concat(X)}else h=r.resources.slice(c).concat(r.resources.slice(0,c));const g=Date.now();let d="pending",p=0,v,y=null,x=[],k=[];typeof o=="function"&&k.push(o);function O(){y&&(clearTimeout(y),y=null)}function A(){d==="pending"&&(d="aborted"),O(),x.forEach(X=>{X.status==="pending"&&(X.status="aborted")}),x=[]}function T(X,ee){ee&&(k=[]),typeof X=="function"&&k.push(X)}function G(){return{startTime:g,payload:a,status:d,queriesSent:p,queriesPending:x.length,subscribe:T,abort:A}}function V(){d="failed",k.forEach(X=>{X(void 0,v)})}function z(){x.forEach(X=>{X.status==="pending"&&(X.status="aborted")}),x=[]}function Y(X,ee,Ae){const we=ee!=="success";switch(x=x.filter(rt=>rt!==X),d){case"pending":break;case"failed":if(we||!r.dataAfterTimeout)return;break;default:return}if(ee==="abort"){v=Ae,V();return}if(we){v=Ae,x.length||(h.length?H():V());return}if(O(),z(),!r.random){const rt=r.resources.indexOf(X.resource);rt!==-1&&rt!==r.index&&(r.index=rt)}d="completed",k.forEach(rt=>{rt(Ae)})}function H(){if(d!=="pending")return;O();const X=h.shift();if(X===void 0){if(x.length){y=setTimeout(()=>{O(),d==="pending"&&(z(),V())},r.timeout);return}V();return}const ee={status:"pending",resource:X,callback:(Ae,we)=>{Y(ee,Ae,we)}};x.push(ee),p++,y=setTimeout(H,r.rotate),i(X,a,ee.callback)}return setTimeout(H),G}function Yg(r){const a={...Hx,...r};let i=[];function o(){i=i.filter(g=>g().status==="pending")}function s(g,d,p){const v=Gx(a,g,d,(y,x)=>{o(),p&&p(y,x)});return i.push(v),v}function c(g){return i.find(d=>g(d))||null}return{query:s,find:c,setIndex:g=>{a.index=g},getIndex:()=>a.index,cleanup:o}}function Yc(r){let a;if(typeof r.resources=="string")a=[r.resources];else if(a=r.resources,!(a instanceof Array)||!a.length)return null;return{resources:a,path:r.path||"/",maxURL:r.maxURL||500,rotate:r.rotate||750,timeout:r.timeout||5e3,random:r.random===!0,index:r.index||0,dataAfterTimeout:r.dataAfterTimeout!==!1}}const Do=Object.create(null),Sr=["https://api.simplesvg.com","https://api.unisvg.com"],xo=[];for(;Sr.length>0;)Sr.length===1||Math.random()>.5?xo.push(Sr.shift()):xo.push(Sr.pop());Do[""]=Yc({resources:["https://api.iconify.design"].concat(xo)});function P0(r,a){const i=Yc(a);return i===null?!1:(Do[r]=i,!0)}function Mo(r){return Do[r]}function Yx(){return Object.keys(Do)}function H0(){}const fc=Object.create(null);function $x(r){if(!fc[r]){const a=Mo(r);if(!a)return;const i=Yg(a),o={config:a,redundancy:i};fc[r]=o}return fc[r]}function $g(r,a,i){let o,s;if(typeof r=="string"){const c=jc(r);if(!c)return i(void 0,424),H0;s=c.send;const h=$x(r);h&&(o=h.redundancy)}else{const c=Yc(r);if(c){o=Yg(c);const h=r.resources?r.resources[0]:"",g=jc(h);g&&(s=g.send)}}return!o||!s?(i(void 0,424),H0):o.query(a,s,i)().abort}function G0(){}function Xx(r){r.iconsLoaderFlag||(r.iconsLoaderFlag=!0,setTimeout(()=>{r.iconsLoaderFlag=!1,qx(r)}))}function Qx(r){const a=[],i=[];return r.forEach(o=>{(o.match(Ng)?a:i).push(o)}),{valid:a,invalid:i}}function wr(r,a,i){function o(){const s=r.pendingIcons;a.forEach(c=>{s&&s.delete(c),r.icons[c]||r.missing.add(c)})}if(i&&typeof i=="object")try{if(!Bg(r,i).length){o();return}}catch(s){console.error(s)}o(),Xx(r)}function Y0(r,a){r instanceof Promise?r.then(i=>{a(i)}).catch(()=>{a(null)}):a(r)}function Vx(r,a){r.iconsToLoad?r.iconsToLoad=r.iconsToLoad.concat(a).sort():r.iconsToLoad=a,r.iconsQueueFlag||(r.iconsQueueFlag=!0,setTimeout(()=>{r.iconsQueueFlag=!1;const{provider:i,prefix:o}=r,s=r.iconsToLoad;if(delete r.iconsToLoad,!s||!s.length)return;const c=r.loadIcon;if(r.loadIcons&&(s.length>1||!c)){Y0(r.loadIcons(s,o,i),v=>{wr(r,s,v)});return}if(c){s.forEach(v=>{const y=c(v,o,i);Y0(y,x=>{const k=x?{prefix:o,icons:{[v]:x}}:null;wr(r,[v],k)})});return}const{valid:h,invalid:g}=Qx(s);if(g.length&&wr(r,g,null),!h.length)return;const d=o.match(Ng)?jc(i):null;if(!d){wr(r,h,null);return}d.prepare(i,o,h).forEach(v=>{$g(i,v,y=>{wr(r,v.icons,y)})})}))}const $c=(r,a)=>{const i=Px(r,!0,Pg()),o=Nx(i);if(!o.pending.length){let d=!0;return a&&setTimeout(()=>{d&&a(o.loaded,o.missing,o.pending,G0)}),()=>{d=!1}}const s=Object.create(null),c=[];let h,g;return o.pending.forEach(d=>{const{provider:p,prefix:v}=d;if(v===g&&p===h)return;h=p,g=v,c.push(dn(p,v));const y=s[p]||(s[p]=Object.create(null));y[v]||(y[v]=[])}),o.pending.forEach(d=>{const{provider:p,prefix:v,name:y}=d,x=dn(p,v),k=x.pendingIcons||(x.pendingIcons=new Set);k.has(y)||(k.add(y),s[p][v].push(y))}),c.forEach(d=>{const p=s[d.provider][d.prefix];p.length&&Vx(d,p)}),a?Bx(a,o,c):G0},Zx=r=>new Promise((a,i)=>{const o=typeof r=="string"?$r(r,!0):r;if(!o){i(r);return}$c([o||r],s=>{if(s.length&&o){const c=zr(o);if(c){a({...Yr,...c});return}}i(r)})});function $0(r){try{const a=typeof r=="string"?JSON.parse(r):r;if(typeof a.body=="string")return{...a}}catch{}}function Kx(r,a){if(typeof r=="object")return{data:$0(r),value:r};if(typeof r!="string")return{value:r};if(r.includes("{")){const c=$0(r);if(c)return{data:c,value:r}}const i=$r(r,!0,!0);if(!i)return{value:r};const o=zr(i);if(o!==void 0||!i.prefix)return{value:r,name:i,data:o};const s=$c([i],()=>a(r,i,zr(i)));return{value:r,name:i,loading:s}}let Xg=!1;try{Xg=navigator.vendor.indexOf("Apple")===0}catch{}function Jx(r,a){switch(a){case"svg":case"bg":case"mask":return a}return a!=="style"&&(Xg||r.indexOf("<a")===-1)?"svg":r.indexOf("currentColor")===-1?"bg":"mask"}const Ix=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Fx=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Rc(r,a,i){if(a===1)return r;if(i=i||100,typeof r=="number")return Math.ceil(r*a*i)/i;if(typeof r!="string")return r;const o=r.split(Ix);if(o===null||!o.length)return r;const s=[];let c=o.shift(),h=Fx.test(c);for(;;){if(h){const g=parseFloat(c);isNaN(g)?s.push(c):s.push(Math.ceil(g*a*i)/i)}else s.push(c);if(c=o.shift(),c===void 0)return s.join("");h=!h}}function Wx(r,a="defs"){let i="";const o=r.indexOf("<"+a);for(;o>=0;){const s=r.indexOf(">",o),c=r.indexOf("</"+a);if(s===-1||c===-1)break;const h=r.indexOf(">",c);if(h===-1)break;i+=r.slice(s+1,c).trim(),r=r.slice(0,o).trim()+r.slice(h+1)}return{defs:i,content:r}}function eS(r,a){return r?"<defs>"+r+"</defs>"+a:a}function tS(r,a,i){const o=Wx(r);return eS(o.defs,a+o.content+i)}const nS=r=>r==="unset"||r==="undefined"||r==="none";function Qg(r,a){const i={...Yr,...r},o={...Ug,...a},s={left:i.left,top:i.top,width:i.width,height:i.height};let c=i.body;[i,o].forEach(A=>{const T=[],G=A.hFlip,V=A.vFlip;let z=A.rotate;G?V?z+=2:(T.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),T.push("scale(-1 1)"),s.top=s.left=0):V&&(T.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),T.push("scale(1 -1)"),s.top=s.left=0);let Y;switch(z<0&&(z-=Math.floor(z/4)*4),z=z%4,z){case 1:Y=s.height/2+s.top,T.unshift("rotate(90 "+Y.toString()+" "+Y.toString()+")");break;case 2:T.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:Y=s.width/2+s.left,T.unshift("rotate(-90 "+Y.toString()+" "+Y.toString()+")");break}z%2===1&&(s.left!==s.top&&(Y=s.left,s.left=s.top,s.top=Y),s.width!==s.height&&(Y=s.width,s.width=s.height,s.height=Y)),T.length&&(c=tS(c,'<g transform="'+T.join(" ")+'">',"</g>"))});const h=o.width,g=o.height,d=s.width,p=s.height;let v,y;h===null?(y=g===null?"1em":g==="auto"?p:g,v=Rc(y,d/p)):(v=h==="auto"?d:h,y=g===null?Rc(v,p/d):g==="auto"?p:g);const x={},k=(A,T)=>{nS(T)||(x[A]=T.toString())};k("width",v),k("height",y);const O=[s.left,s.top,d,p];return x.viewBox=O.join(" "),{attributes:x,viewBox:O,body:c}}function Xc(r,a){let i=r.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in a)i+=" "+o+'="'+a[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+r+"</svg>"}function aS(r){return r.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function iS(r){return"data:image/svg+xml,"+aS(r)}function Vg(r){return'url("'+iS(r)+'")'}const rS=()=>{let r;try{if(r=fetch,typeof r=="function")return r}catch{}};let Ao=rS();function lS(r){Ao=r}function oS(){return Ao}function sS(r,a){const i=Mo(r);if(!i)return 0;let o;if(!i.maxURL)o=0;else{let s=0;i.resources.forEach(h=>{s=Math.max(s,h.length)});const c=a+".json?icons=";o=i.maxURL-s-i.path.length-c.length}return o}function uS(r){return r===404}const cS=(r,a,i)=>{const o=[],s=sS(r,a),c="icons";let h={type:c,provider:r,prefix:a,icons:[]},g=0;return i.forEach((d,p)=>{g+=d.length+1,g>=s&&p>0&&(o.push(h),h={type:c,provider:r,prefix:a,icons:[]},g=d.length),h.icons.push(d)}),o.push(h),o};function fS(r){if(typeof r=="string"){const a=Mo(r);if(a)return a.path}return"/"}const hS=(r,a,i)=>{if(!Ao){i("abort",424);return}let o=fS(a.provider);switch(a.type){case"icons":{const c=a.prefix,g=a.icons.join(","),d=new URLSearchParams({icons:g});o+=c+".json?"+d.toString();break}case"custom":{const c=a.uri;o+=c.slice(0,1)==="/"?c.slice(1):c;break}default:i("abort",400);return}let s=503;Ao(r+o).then(c=>{const h=c.status;if(h!==200){setTimeout(()=>{i(uS(h)?"abort":"next",h)});return}return s=501,c.json()}).then(c=>{if(typeof c!="object"||c===null){setTimeout(()=>{c===404?i("abort",c):i("next",s)});return}setTimeout(()=>{i("success",c)})}).catch(()=>{i("next",s)})},dS={prepare:cS,send:hS};function pS(r,a,i){dn(i||"",a).loadIcons=r}function gS(r,a,i){dn(i||"",a).loadIcon=r}const hc="data-style";let Zg="";function mS(r){Zg=r}function X0(r,a){let i=Array.from(r.childNodes).find(o=>o.hasAttribute&&o.hasAttribute(hc));i||(i=document.createElement("style"),i.setAttribute(hc,hc),r.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(a?"-0.125em":"0")+"}span,svg{display:block;margin:auto}"+Zg}function Kg(){B0("",dS),Pg(!0);let r;try{r=window}catch{}if(r){if(r.IconifyPreload!==void 0){const i=r.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof i=="object"&&i!==null&&(i instanceof Array?i:[i]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!L0(s))&&console.error(o)}catch{console.error(o)}})}if(r.IconifyProviders!==void 0){const i=r.IconifyProviders;if(typeof i=="object"&&i!==null)for(const o in i){const s="IconifyProviders["+o+"] is invalid.";try{const c=i[o];if(typeof c!="object"||!c||c.resources===void 0)continue;P0(o,c)||console.error(s)}catch{console.error(s)}}}}return{iconLoaded:Ux,getIcon:zx,listIcons:Mx,addIcon:Hg,addCollection:L0,calculateSize:Rc,buildIcon:Qg,iconToHTML:Xc,svgToURL:Vg,loadIcons:$c,loadIcon:Zx,addAPIProvider:P0,setCustomIconLoader:gS,setCustomIconsLoader:pS,appendCustomStyle:mS,_api:{getAPIConfig:Mo,setAPIModule:B0,sendAPIQuery:$g,setFetch:lS,getFetch:oS,listAPIProviders:Yx}}}const Cc={"background-color":"currentColor"},Jg={"background-color":"transparent"},Q0={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},V0={"-webkit-mask":Cc,mask:Cc,background:Jg};for(const r in V0){const a=V0[r];for(const i in Q0)a[r+"-"+i]=Q0[i]}function Z0(r){return r?r+(r.match(/^[-0-9.]+$/)?"px":""):"inherit"}function vS(r,a,i){const o=document.createElement("span");let s=r.body;s.indexOf("<a")!==-1&&(s+="<!-- "+Date.now()+" -->");const c=r.attributes,h=Xc(s,{...c,width:a.width+"",height:a.height+""}),g=Vg(h),d=o.style,p={"--svg":g,width:Z0(c.width),height:Z0(c.height),...i?Cc:Jg};for(const v in p)d.setProperty(v,p[v]);return o}let Rr;function bS(){try{Rr=window.trustedTypes.createPolicy("iconify",{createHTML:r=>r})}catch{Rr=null}}function yS(r){return Rr===void 0&&bS(),Rr?Rr.createHTML(r):r}function _S(r){const a=document.createElement("span"),i=r.attributes;let o="";i.width||(o="width: inherit;"),i.height||(o+="height: inherit;"),o&&(i.style=o);const s=Xc(r.body,i);return a.innerHTML=yS(s),a.firstChild}function Dc(r){return Array.from(r.childNodes).find(a=>{const i=a.tagName&&a.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function K0(r,a){const i=a.icon.data,o=a.customisations,s=Qg(i,o);o.preserveAspectRatio&&(s.attributes.preserveAspectRatio=o.preserveAspectRatio);const c=a.renderedMode;let h;switch(c){case"svg":h=_S(s);break;default:h=vS(s,{...Yr,...i},c==="mask")}const g=Dc(r);g?h.tagName==="SPAN"&&g.tagName===h.tagName?g.setAttribute("style",h.getAttribute("style")):r.replaceChild(h,g):r.appendChild(h)}function J0(r,a,i){const o=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:a,icon:r,lastRender:o}}function xS(r="iconify-icon"){let a,i;try{a=window.customElements,i=window.HTMLElement}catch{return}if(!a||!i)return;const o=a.get(r);if(o)return o;const s=["icon","mode","inline","noobserver","width","height","rotate","flip"],c=class extends i{constructor(){super();Bn(this,"_shadowRoot");Bn(this,"_initialised",!1);Bn(this,"_state");Bn(this,"_checkQueued",!1);Bn(this,"_connected",!1);Bn(this,"_observer",null);Bn(this,"_visible",!0);const d=this._shadowRoot=this.attachShadow({mode:"open"}),p=this.hasAttribute("inline");X0(d,p),this._state=J0({value:""},p),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return s.slice(0)}attributeChangedCallback(d){switch(d){case"inline":{const p=this.hasAttribute("inline"),v=this._state;p!==v.inline&&(v.inline=p,X0(this._shadowRoot,p));break}case"noobserver":{this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const d=this.getAttribute("icon");if(d&&d.slice(0,1)==="{")try{return JSON.parse(d)}catch{}return d}set icon(d){typeof d=="object"&&(d=JSON.stringify(d)),this.setAttribute("icon",d)}get inline(){return this.hasAttribute("inline")}set inline(d){d?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(d){d?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const d=this._state;if(d.rendered){const p=this._shadowRoot;if(d.renderedMode==="svg")try{p.lastChild.setCurrentTime(0);return}catch{}K0(p,d)}}get status(){const d=this._state;return d.rendered?"rendered":d.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const d=this._state,p=this.getAttribute("icon");if(p!==d.icon.value){this._iconChanged(p);return}if(!d.rendered||!this._visible)return;const v=this.getAttribute("mode"),y=N0(this);(d.attrMode!==v||Ex(d.customisations,y)||!Dc(this._shadowRoot))&&this._renderIcon(d.icon,y,v)}_iconChanged(d){const p=Kx(d,(v,y,x)=>{const k=this._state;if(k.rendered||this.getAttribute("icon")!==v)return;const O={value:v,name:y,data:x};O.data?this._gotIconData(O):k.icon=O});p.data?this._gotIconData(p):this._state=J0(p,this._state.inline,this._state)}_forceRender(){if(!this._visible){const d=Dc(this._shadowRoot);d&&this._shadowRoot.removeChild(d);return}this._queueCheck()}_gotIconData(d){this._checkQueued=!1,this._renderIcon(d,N0(this),this.getAttribute("mode"))}_renderIcon(d,p,v){const y=Jx(d.data.body,v),x=this._state.inline;K0(this._shadowRoot,this._state={rendered:!0,icon:d,inline:x,customisations:p,attrMode:v,renderedMode:y})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(d=>{const p=d.some(v=>v.isIntersecting);p!==this._visible&&(this._visible=p,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};s.forEach(g=>{g in c.prototype||Object.defineProperty(c.prototype,g,{get:function(){return this.getAttribute(g)},set:function(d){d!==null?this.setAttribute(g,d):this.removeAttribute(g)}})});const h=Kg();for(const g in h)c[g]=c.prototype[g]=h[g];return a.define(r,c),c}const SS=xS()||Kg(),{iconLoaded:jS,getIcon:RS,listIcons:CS,addIcon:DS,addCollection:MS,calculateSize:US,buildIcon:zS,iconToHTML:NS,svgToURL:qS,loadIcons:LS,loadIcon:BS,setCustomIconLoader:PS,setCustomIconsLoader:HS,addAPIProvider:GS,_api:YS}=SS;Db.createRoot(document.getElementById("root")).render(M.jsx(P.StrictMode,{children:M.jsx(xx,{})}));
