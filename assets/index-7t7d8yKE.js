var vb=Object.defineProperty;var mb=(l,a,i)=>a in l?vb(l,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[a]=i;var Bn=(l,a,i)=>mb(l,typeof a!="symbol"?a+"":a,i);function bb(l,a){for(var i=0;i<a.length;i++){const o=a[i];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in l)){const c=Object.getOwnPropertyDescriptor(o,s);c&&Object.defineProperty(l,s,c.get?c:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function Z0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function yb(l){if(Object.prototype.hasOwnProperty.call(l,"__esModule"))return l;var a=l.default;if(typeof a=="function"){var i=function o(){return this instanceof o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};i.prototype=a.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(l).forEach(function(o){var s=Object.getOwnPropertyDescriptor(l,o);Object.defineProperty(i,o,s.get?s:{enumerable:!0,get:function(){return l[o]}})}),i}var Zu={exports:{}},vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function _b(){if(qp)return vr;qp=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(o,s,c){var h=null;if(c!==void 0&&(h=""+c),s.key!==void 0&&(h=""+s.key),"key"in s){c={};for(var g in s)g!=="key"&&(c[g]=s[g])}else c=s;return s=c.ref,{$$typeof:l,type:o,key:h,ref:s!==void 0?s:null,props:c}}return vr.Fragment=a,vr.jsx=i,vr.jsxs=i,vr}var Bp;function xb(){return Bp||(Bp=1,Zu.exports=_b()),Zu.exports}var K=xb(),Ku={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Sb(){if(Lp)return le;Lp=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=y&&S[y]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,E={};function A(S,B,Q){this.props=S,this.context=B,this.refs=E,this.updater=Q||k}A.prototype.isReactComponent={},A.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},A.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function L(){}L.prototype=A.prototype;function V(S,B,Q){this.props=S,this.context=B,this.refs=E,this.updater=Q||k}var z=V.prototype=new L;z.constructor=V,O(z,A.prototype),z.isPureReactComponent=!0;var P=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function ne(S,B,Q,G,F,pe){return Q=pe.ref,{$$typeof:l,type:S,key:B,ref:Q!==void 0?Q:null,props:pe}}function Ae(S,B){return ne(S.type,B,void 0,void 0,void 0,S.props)}function we(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function rt(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Q){return B[Q]})}var Xt=/\/+/g;function Fe(S,B){return typeof S=="object"&&S!==null&&S.key!=null?rt(""+S.key):B.toString(36)}function Qn(){}function Vn(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Qn,Qn):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function We(S,B,Q,G,F){var pe=typeof S;(pe==="undefined"||pe==="boolean")&&(S=null);var ie=!1;if(S===null)ie=!0;else switch(pe){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(S.$$typeof){case l:case a:ie=!0;break;case m:return ie=S._init,We(ie(S._payload),B,Q,G,F)}}if(ie)return F=F(S),ie=G===""?"."+Fe(S,0):G,P(F)?(Q="",ie!=null&&(Q=ie.replace(Xt,"$&/")+"/"),We(F,B,Q,"",function(dn){return dn})):F!=null&&(we(F)&&(F=Ae(F,Q+(F.key==null||S&&S.key===F.key?"":(""+F.key).replace(Xt,"$&/")+"/")+ie)),B.push(F)),1;ie=0;var ht=G===""?".":G+":";if(P(S))for(var Re=0;Re<S.length;Re++)G=S[Re],pe=ht+Fe(G,Re),ie+=We(G,B,Q,pe,F);else if(Re=x(S),typeof Re=="function")for(S=Re.call(S),Re=0;!(G=S.next()).done;)G=G.value,pe=ht+Fe(G,Re++),ie+=We(G,B,Q,pe,F);else if(pe==="object"){if(typeof S.then=="function")return We(Vn(S),B,Q,G,F);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ie}function U(S,B,Q){if(S==null)return S;var G=[],F=0;return We(S,G,"","",function(pe){return B.call(Q,pe,F++)}),G}function $(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(Q){(S._status===0||S._status===-1)&&(S._status=1,S._result=Q)},function(Q){(S._status===0||S._status===-1)&&(S._status=2,S._result=Q)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var te=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Oe(){}return le.Children={map:U,forEach:function(S,B,Q){U(S,function(){B.apply(this,arguments)},Q)},count:function(S){var B=0;return U(S,function(){B++}),B},toArray:function(S){return U(S,function(B){return B})||[]},only:function(S){if(!we(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},le.Component=A,le.Fragment=i,le.Profiler=s,le.PureComponent=V,le.StrictMode=o,le.Suspense=d,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,le.__COMPILER_RUNTIME={__proto__:null,c:function(S){return H.H.useMemoCache(S)}},le.cache=function(S){return function(){return S.apply(null,arguments)}},le.cloneElement=function(S,B,Q){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var G=O({},S.props),F=S.key,pe=void 0;if(B!=null)for(ie in B.ref!==void 0&&(pe=void 0),B.key!==void 0&&(F=""+B.key),B)!X.call(B,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&B.ref===void 0||(G[ie]=B[ie]);var ie=arguments.length-2;if(ie===1)G.children=Q;else if(1<ie){for(var ht=Array(ie),Re=0;Re<ie;Re++)ht[Re]=arguments[Re+2];G.children=ht}return ne(S.type,F,void 0,void 0,pe,G)},le.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},le.createElement=function(S,B,Q){var G,F={},pe=null;if(B!=null)for(G in B.key!==void 0&&(pe=""+B.key),B)X.call(B,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(F[G]=B[G]);var ie=arguments.length-2;if(ie===1)F.children=Q;else if(1<ie){for(var ht=Array(ie),Re=0;Re<ie;Re++)ht[Re]=arguments[Re+2];F.children=ht}if(S&&S.defaultProps)for(G in ie=S.defaultProps,ie)F[G]===void 0&&(F[G]=ie[G]);return ne(S,pe,void 0,void 0,null,F)},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:g,render:S}},le.isValidElement=we,le.lazy=function(S){return{$$typeof:m,_payload:{_status:-1,_result:S},_init:$}},le.memo=function(S,B){return{$$typeof:p,type:S,compare:B===void 0?null:B}},le.startTransition=function(S){var B=H.T,Q={};H.T=Q;try{var G=S(),F=H.S;F!==null&&F(Q,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Oe,te)}catch(pe){te(pe)}finally{H.T=B}},le.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},le.use=function(S){return H.H.use(S)},le.useActionState=function(S,B,Q){return H.H.useActionState(S,B,Q)},le.useCallback=function(S,B){return H.H.useCallback(S,B)},le.useContext=function(S){return H.H.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S,B){return H.H.useDeferredValue(S,B)},le.useEffect=function(S,B,Q){var G=H.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(S,B)},le.useId=function(){return H.H.useId()},le.useImperativeHandle=function(S,B,Q){return H.H.useImperativeHandle(S,B,Q)},le.useInsertionEffect=function(S,B){return H.H.useInsertionEffect(S,B)},le.useLayoutEffect=function(S,B){return H.H.useLayoutEffect(S,B)},le.useMemo=function(S,B){return H.H.useMemo(S,B)},le.useOptimistic=function(S,B){return H.H.useOptimistic(S,B)},le.useReducer=function(S,B,Q){return H.H.useReducer(S,B,Q)},le.useRef=function(S){return H.H.useRef(S)},le.useState=function(S){return H.H.useState(S)},le.useSyncExternalStore=function(S,B,Q){return H.H.useSyncExternalStore(S,B,Q)},le.useTransition=function(){return H.H.useTransition()},le.version="19.1.0",le}var Pp;function Mc(){return Pp||(Pp=1,Ku.exports=Sb()),Ku.exports}var Y=Mc();const ye=Z0(Y),wb=bb({__proto__:null,default:ye},[Y]);var Ju={exports:{}},mr={},Iu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Ob(){return Hp||(Hp=1,function(l){function a(U,$){var te=U.length;U.push($);e:for(;0<te;){var Oe=te-1>>>1,S=U[Oe];if(0<s(S,$))U[Oe]=$,U[te]=S,te=Oe;else break e}}function i(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var $=U[0],te=U.pop();if(te!==$){U[0]=te;e:for(var Oe=0,S=U.length,B=S>>>1;Oe<B;){var Q=2*(Oe+1)-1,G=U[Q],F=Q+1,pe=U[F];if(0>s(G,te))F<S&&0>s(pe,G)?(U[Oe]=pe,U[F]=te,Oe=F):(U[Oe]=G,U[Q]=te,Oe=Q);else if(F<S&&0>s(pe,te))U[Oe]=pe,U[F]=te,Oe=F;else break e}}return $}function s(U,$){var te=U.sortIndex-$.sortIndex;return te!==0?te:U.id-$.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;l.unstable_now=function(){return c.now()}}else{var h=Date,g=h.now();l.unstable_now=function(){return h.now()-g}}var d=[],p=[],m=1,y=null,x=3,k=!1,O=!1,E=!1,A=!1,L=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function P(U){for(var $=i(p);$!==null;){if($.callback===null)o(p);else if($.startTime<=U)o(p),$.sortIndex=$.expirationTime,a(d,$);else break;$=i(p)}}function H(U){if(E=!1,P(U),!O)if(i(d)!==null)O=!0,X||(X=!0,Fe());else{var $=i(p);$!==null&&We(H,$.startTime-U)}}var X=!1,ne=-1,Ae=5,we=-1;function rt(){return A?!0:!(l.unstable_now()-we<Ae)}function Xt(){if(A=!1,X){var U=l.unstable_now();we=U;var $=!0;try{e:{O=!1,E&&(E=!1,V(ne),ne=-1),k=!0;var te=x;try{t:{for(P(U),y=i(d);y!==null&&!(y.expirationTime>U&&rt());){var Oe=y.callback;if(typeof Oe=="function"){y.callback=null,x=y.priorityLevel;var S=Oe(y.expirationTime<=U);if(U=l.unstable_now(),typeof S=="function"){y.callback=S,P(U),$=!0;break t}y===i(d)&&o(d),P(U)}else o(d);y=i(d)}if(y!==null)$=!0;else{var B=i(p);B!==null&&We(H,B.startTime-U),$=!1}}break e}finally{y=null,x=te,k=!1}$=void 0}}finally{$?Fe():X=!1}}}var Fe;if(typeof z=="function")Fe=function(){z(Xt)};else if(typeof MessageChannel<"u"){var Qn=new MessageChannel,Vn=Qn.port2;Qn.port1.onmessage=Xt,Fe=function(){Vn.postMessage(null)}}else Fe=function(){L(Xt,0)};function We(U,$){ne=L(function(){U(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(U){U.callback=null},l.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<U?Math.floor(1e3/U):5},l.unstable_getCurrentPriorityLevel=function(){return x},l.unstable_next=function(U){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var te=x;x=$;try{return U()}finally{x=te}},l.unstable_requestPaint=function(){A=!0},l.unstable_runWithPriority=function(U,$){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=x;x=U;try{return $()}finally{x=te}},l.unstable_scheduleCallback=function(U,$,te){var Oe=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Oe+te:Oe):te=Oe,U){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=te+S,U={id:m++,callback:$,priorityLevel:U,startTime:te,expirationTime:S,sortIndex:-1},te>Oe?(U.sortIndex=te,a(p,U),i(d)===null&&U===i(p)&&(E?(V(ne),ne=-1):E=!0,We(H,te-Oe))):(U.sortIndex=S,a(d,U),O||k||(O=!0,X||(X=!0,Fe()))),U},l.unstable_shouldYield=rt,l.unstable_wrapCallback=function(U){var $=x;return function(){var te=x;x=$;try{return U.apply(this,arguments)}finally{x=te}}}}(Fu)),Fu}var Gp;function Tb(){return Gp||(Gp=1,Iu.exports=Ob()),Iu.exports}var Wu={exports:{}},nt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Eb(){if(Yp)return nt;Yp=1;var l=Mc();function a(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(d,p,m){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:d,containerInfo:p,implementation:m}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,nt.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return c(d,p,null,m)},nt.flushSync=function(d){var p=h.T,m=o.p;try{if(h.T=null,o.p=2,d)return d()}finally{h.T=p,o.p=m,o.d.f()}},nt.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(d,p))},nt.prefetchDNS=function(d){typeof d=="string"&&o.d.D(d)},nt.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,y=g(m,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?o.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:k}):m==="script"&&o.d.X(d,{crossOrigin:y,integrity:x,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},nt.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=g(p.as,p.crossOrigin);o.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(d)},nt.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,y=g(m,p.crossOrigin);o.d.L(d,m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},nt.preloadModule=function(d,p){if(typeof d=="string")if(p){var m=g(p.as,p.crossOrigin);o.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(d)},nt.requestFormReset=function(d){o.d.r(d)},nt.unstable_batchedUpdates=function(d,p){return d(p)},nt.useFormState=function(d,p,m){return h.H.useFormState(d,p,m)},nt.useFormStatus=function(){return h.H.useHostTransitionStatus()},nt.version="19.1.0",nt}var $p;function K0(){if($p)return Wu.exports;$p=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Wu.exports=Eb(),Wu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function kb(){if(Xp)return mr;Xp=1;var l=Tb(),a=Mc(),i=K0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(o(188))}function d(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var u=n.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){n=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===n)return g(u),e;if(f===r)return g(u),t;f=f.sibling}throw Error(o(188))}if(n.return!==r.return)n=u,r=f;else{for(var v=!1,b=u.child;b;){if(b===n){v=!0,n=u,r=f;break}if(b===r){v=!0,r=u,n=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===n){v=!0,n=f,r=u;break}if(b===r){v=!0,r=f,n=u;break}b=b.sibling}if(!v)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),z=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),Xt=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=Xt&&e[Xt]||e["@@iterator"],typeof e=="function"?e:null)}var Qn=Symbol.for("react.client.reference");function Vn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case A:return"Profiler";case E:return"StrictMode";case H:return"Suspense";case X:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case z:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:Vn(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Vn(e(t))}catch{}}return null}var We=Array.isArray,U=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},Oe=[],S=-1;function B(e){return{current:e}}function Q(e){0>S||(e.current=Oe[S],Oe[S]=null,S--)}function G(e,t){S++,Oe[S]=e.current,e.current=t}var F=B(null),pe=B(null),ie=B(null),ht=B(null);function Re(e,t){switch(G(ie,t),G(pe,e),G(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=hp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(F),G(F,e)}function dn(){Q(F),Q(pe),Q(ie)}function Mo(e){e.memoizedState!==null&&G(ht,e);var t=F.current,n=hp(t,e.type);t!==n&&(G(pe,e),G(F,n))}function $r(e){pe.current===e&&(Q(F),Q(pe)),ht.current===e&&(Q(ht),fr._currentValue=te)}var Uo=Object.prototype.hasOwnProperty,zo=l.unstable_scheduleCallback,No=l.unstable_cancelCallback,Zg=l.unstable_shouldYield,Kg=l.unstable_requestPaint,Lt=l.unstable_now,Jg=l.unstable_getCurrentPriorityLevel,$c=l.unstable_ImmediatePriority,Xc=l.unstable_UserBlockingPriority,Xr=l.unstable_NormalPriority,Ig=l.unstable_LowPriority,Qc=l.unstable_IdlePriority,Fg=l.log,Wg=l.unstable_setDisableYieldValue,yi=null,dt=null;function pn(e){if(typeof Fg=="function"&&Wg(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(yi,e)}catch{}}var pt=Math.clz32?Math.clz32:nv,ev=Math.log,tv=Math.LN2;function nv(e){return e>>>=0,e===0?32:31-(ev(e)/tv|0)|0}var Qr=256,Vr=4194304;function Zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zr(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=Zn(r):(v&=b,v!==0?u=Zn(v):n||(n=b&~e,n!==0&&(u=Zn(n))))):(b=r&~f,b!==0?u=Zn(b):v!==0?u=Zn(v):n||(n=r&~e,n!==0&&(u=Zn(n)))),u===0?0:t!==0&&t!==u&&(t&f)===0&&(f=u&-u,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:u}function _i(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function av(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vc(){var e=Qr;return Qr<<=1,(Qr&4194048)===0&&(Qr=256),e}function Zc(){var e=Vr;return Vr<<=1,(Vr&62914560)===0&&(Vr=4194304),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function iv(e,t,n,r,u,f){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,_=e.expirationTimes,C=e.hiddenUpdates;for(n=v&~n;0<n;){var M=31-pt(n),q=1<<M;b[M]=0,_[M]=-1;var j=C[M];if(j!==null)for(C[M]=null,M=0;M<j.length;M++){var D=j[M];D!==null&&(D.lane&=-536870913)}n&=~q}r!==0&&Kc(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~t))}function Kc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-pt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function Jc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),u=1<<r;u&t|e[r]&t&&(e[r]|=t),n&=~u}}function Bo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ic(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:jp(e.type))}function rv(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}var gn=Math.random().toString(36).slice(2),et="__reactFiber$"+gn,lt="__reactProps$"+gn,ba="__reactContainer$"+gn,Po="__reactEvents$"+gn,lv="__reactListeners$"+gn,ov="__reactHandles$"+gn,Fc="__reactResources$"+gn,Si="__reactMarker$"+gn;function Ho(e){delete e[et],delete e[lt],delete e[Po],delete e[lv],delete e[ov]}function ya(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ba]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vp(e);e!==null;){if(n=e[et])return n;e=vp(e)}return t}e=n,n=e.parentNode}return null}function _a(e){if(e=e[et]||e[ba]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function xa(e){var t=e[Fc];return t||(t=e[Fc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Si]=!0}var Wc=new Set,ef={};function Kn(e,t){Sa(e,t),Sa(e+"Capture",t)}function Sa(e,t){for(ef[e]=t,e=0;e<t.length;e++)Wc.add(t[e])}var sv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tf={},nf={};function uv(e){return Uo.call(nf,e)?!0:Uo.call(tf,e)?!1:sv.test(e)?nf[e]=!0:(tf[e]=!0,!1)}function Kr(e,t,n){if(uv(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var Go,af;function wa(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||"",af=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Go+e+af}var Yo=!1;function $o(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(D){var j=D}Reflect.construct(e,[],q)}else{try{q.call()}catch(D){j=D}e.call(q.prototype)}}else{try{throw Error()}catch(D){j=D}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(D){if(D&&j&&typeof D.stack=="string")return[D.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var _=v.split(`
`),C=b.split(`
`);for(u=r=0;r<_.length&&!_[r].includes("DetermineComponentFrameRoot");)r++;for(;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;if(r===_.length||u===C.length)for(r=_.length-1,u=C.length-1;1<=r&&0<=u&&_[r]!==C[u];)u--;for(;1<=r&&0<=u;r--,u--)if(_[r]!==C[u]){if(r!==1||u!==1)do if(r--,u--,0>u||_[r]!==C[u]){var M=`
`+_[r].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=r&&0<=u);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?wa(n):""}function cv(e){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return $o(e.type,!1);case 11:return $o(e.type.render,!1);case 1:return $o(e.type,!0);case 31:return wa("Activity");default:return""}}function rf(e){try{var t="";do t+=cv(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fv(e){var t=lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,f=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(v){r=""+v,f.call(this,v)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=fv(e))}function of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hv=/[\n"\\]/g;function Ot(e){return e.replace(hv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xo(e,t,n,r,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?Qo(e,v,wt(t)):n!=null?Qo(e,v,wt(n)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+wt(b):e.removeAttribute("name")}function sf(e,t,n,r,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;n=n!=null?""+wt(n):"",t=t!=null?""+wt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Qo(e,t,n){t==="number"&&Fr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Oa(e,t,n,r){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function uf(e,t,n){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+wt(n):""}function cf(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(o(92));if(We(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=wt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function Ta(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ff(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||dv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function hf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in t)r=t[u],t.hasOwnProperty(u)&&n[u]!==r&&ff(e,u,r)}else for(var f in t)t.hasOwnProperty(f)&&ff(e,f,t[f])}function Vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wr(e){return gv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ea=null,ka=null;function df(e){var t=_a(e);if(t&&(e=t.stateNode)){var n=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Xo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var u=r[lt]||null;if(!u)throw Error(o(90));Xo(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&of(r)}break e;case"textarea":uf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Oa(e,!!n.multiple,t,!1)}}}var Jo=!1;function pf(e,t,n){if(Jo)return e(t,n);Jo=!0;try{var r=e(t);return r}finally{if(Jo=!1,(Ea!==null||ka!==null)&&(Bl(),Ea&&(t=Ea,e=ka,ka=Ea=null,df(t),e)))for(t=0;t<e.length;t++)df(e[t])}}function Oi(e,t){var n=e.stateNode;if(n===null)return null;var r=n[lt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;if(Vt)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){Io=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{Io=!1}var vn=null,Fo=null,el=null;function gf(){if(el)return el;var e,t=Fo,n=t.length,r,u="value"in vn?vn.value:vn.textContent,f=u.length;for(e=0;e<n&&t[e]===u[e];e++);var v=n-e;for(r=1;r<=v&&t[n-r]===u[f-r];r++);return el=u.slice(e,1<r?1-r:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function vf(){return!1}function ot(e){function t(n,r,u,f,v){this._reactName=n,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:vf,this.isPropagationStopped=vf,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=ot(Jn),Ei=m({},Jn,{view:0,detail:0}),vv=ot(Ei),Wo,es,ki,il=m({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(Wo=e.screenX-ki.screenX,es=e.screenY-ki.screenY):es=Wo=0,ki=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:es}}),mf=ot(il),mv=m({},il,{dataTransfer:0}),bv=ot(mv),yv=m({},Ei,{relatedTarget:0}),ts=ot(yv),_v=m({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=ot(_v),Sv=m({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wv=ot(Sv),Ov=m({},Jn,{data:0}),bf=ot(Ov),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kv[e])?!!t[e]:!1}function ns(){return Av}var Rv=m({},Ei,{key:function(e){if(e.key){var t=Tv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ev[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=ot(Rv),jv=m({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=ot(jv),Dv=m({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),Mv=ot(Dv),Uv=m({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=ot(Uv),Nv=m({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=ot(Nv),Bv=m({},Jn,{newState:0,oldState:0}),Lv=ot(Bv),Pv=[9,13,27,32],as=Vt&&"CompositionEvent"in window,Ai=null;Vt&&"documentMode"in document&&(Ai=document.documentMode);var Hv=Vt&&"TextEvent"in window&&!Ai,_f=Vt&&(!as||Ai&&8<Ai&&11>=Ai),xf=" ",Sf=!1;function wf(e,t){switch(e){case"keyup":return Pv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Aa=!1;function Gv(e,t){switch(e){case"compositionend":return Of(t);case"keypress":return t.which!==32?null:(Sf=!0,xf);case"textInput":return e=t.data,e===xf&&Sf?null:e;default:return null}}function Yv(e,t){if(Aa)return e==="compositionend"||!as&&wf(e,t)?(e=gf(),el=Fo=vn=null,Aa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _f&&t.locale!=="ko"?null:t.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$v[e.type]:t==="textarea"}function Ef(e,t,n,r){Ea?ka?ka.push(r):ka=[r]:Ea=r,t=$l(t,"onChange"),0<t.length&&(n=new al("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ri=null,Ci=null;function Xv(e){lp(e,0)}function rl(e){var t=wi(e);if(of(t))return e}function kf(e,t){if(e==="change")return t}var Af=!1;if(Vt){var is;if(Vt){var rs="oninput"in document;if(!rs){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),rs=typeof Rf.oninput=="function"}is=rs}else is=!1;Af=is&&(!document.documentMode||9<document.documentMode)}function Cf(){Ri&&(Ri.detachEvent("onpropertychange",jf),Ci=Ri=null)}function jf(e){if(e.propertyName==="value"&&rl(Ci)){var t=[];Ef(t,Ci,e,Ko(e)),pf(Xv,t)}}function Qv(e,t,n){e==="focusin"?(Cf(),Ri=t,Ci=n,Ri.attachEvent("onpropertychange",jf)):e==="focusout"&&Cf()}function Vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Ci)}function Zv(e,t){if(e==="click")return rl(t)}function Kv(e,t){if(e==="input"||e==="change")return rl(t)}function Jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Jv;function ji(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var u=n[r];if(!Uo.call(t,u)||!gt(e[u],t[u]))return!1}return!0}function Df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mf(e,t){var n=Df(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Df(n)}}function Uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Iv=Vt&&"documentMode"in document&&11>=document.documentMode,Ra=null,os=null,Di=null,ss=!1;function Nf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ss||Ra==null||Ra!==Fr(r)||(r=Ra,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&ji(Di,r)||(Di=r,r=$l(os,"onSelect"),0<r.length&&(t=new al("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ra)))}function In(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ca={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionrun:In("Transition","TransitionRun"),transitionstart:In("Transition","TransitionStart"),transitioncancel:In("Transition","TransitionCancel"),transitionend:In("Transition","TransitionEnd")},us={},qf={};Vt&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function Fn(e){if(us[e])return us[e];if(!Ca[e])return e;var t=Ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qf)return us[e]=t[n];return e}var Bf=Fn("animationend"),Lf=Fn("animationiteration"),Pf=Fn("animationstart"),Fv=Fn("transitionrun"),Wv=Fn("transitionstart"),em=Fn("transitioncancel"),Hf=Fn("transitionend"),Gf=new Map,cs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cs.push("scrollEnd");function Dt(e,t){Gf.set(e,t),Kn(t,[e])}var Yf=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var n=Yf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:rf(t)},Yf.set(e,t),t)}return{value:e,source:t,stack:rf(t)}}var Et=[],ja=0,fs=0;function ll(){for(var e=ja,t=fs=ja=0;t<e;){var n=Et[t];Et[t++]=null;var r=Et[t];Et[t++]=null;var u=Et[t];Et[t++]=null;var f=Et[t];if(Et[t++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&$f(n,u,f)}}function ol(e,t,n,r){Et[ja++]=e,Et[ja++]=t,Et[ja++]=n,Et[ja++]=r,fs|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hs(e,t,n,r){return ol(e,t,n,r),sl(e)}function Da(e,t){return ol(e,null,null,t),sl(e)}function $f(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var u=!1,f=e.return;f!==null;)f.childLanes|=n,r=f.alternate,r!==null&&(r.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&t!==null&&(u=31-pt(n),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[t]:r.push(t),t.lane=n|536870912),f):null}function sl(e){if(50<ar)throw ar=0,bu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ma={};function tm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new tm(e,t,n,r)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Xf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ul(e,t,n,r,u,f){var v=0;if(r=e,typeof e=="function")ds(e)&&(v=1);else if(typeof e=="string")v=ab(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=vt(31,n,t,u),e.elementType=we,e.lanes=f,e;case O:return Wn(n.children,u,f,t);case E:v=8,u|=24;break;case A:return e=vt(12,n,t,u|2),e.elementType=A,e.lanes=f,e;case H:return e=vt(13,n,t,u),e.elementType=H,e.lanes=f,e;case X:return e=vt(19,n,t,u),e.elementType=X,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case z:v=10;break e;case V:v=9;break e;case P:v=11;break e;case ne:v=14;break e;case Ae:v=16,r=null;break e}v=29,n=Error(o(130,e===null?"null":typeof e,"")),r=null}return t=vt(v,n,t,u),t.elementType=e,t.type=r,t.lanes=f,t}function Wn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function ps(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function gs(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ua=[],za=0,cl=null,fl=0,kt=[],At=0,ea=null,Kt=1,Jt="";function ta(e,t){Ua[za++]=fl,Ua[za++]=cl,cl=e,fl=t}function Qf(e,t,n){kt[At++]=Kt,kt[At++]=Jt,kt[At++]=ea,ea=e;var r=Kt;e=Jt;var u=32-pt(r)-1;r&=~(1<<u),n+=1;var f=32-pt(t)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Kt=1<<32-pt(t)+u|n<<u|r,Jt=f+e}else Kt=1<<f|n<<u|r,Jt=e}function vs(e){e.return!==null&&(ta(e,1),Qf(e,1,0))}function ms(e){for(;e===cl;)cl=Ua[--za],Ua[za]=null,fl=Ua[--za],Ua[za]=null;for(;e===ea;)ea=kt[--At],kt[At]=null,Jt=kt[--At],kt[At]=null,Kt=kt[--At],kt[At]=null}var at=null,Me=null,ve=!1,na=null,Pt=!1,bs=Error(o(519));function aa(e){var t=Error(o(418,""));throw zi(Tt(t,e)),bs}function Vf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[et]=e,t[lt]=r,n){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(n=0;n<rr.length;n++)ce(rr[n],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),sf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Ir(t);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),cf(t,r.value,r.defaultValue,r.children),Ir(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||cp(t.textContent,n)?(r.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),r.onScroll!=null&&ce("scroll",t),r.onScrollEnd!=null&&ce("scrollend",t),r.onClick!=null&&(t.onclick=Xl),t=!0):t=!1,t||aa(e)}function Zf(e){for(at=e.return;at;)switch(at.tag){case 5:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:at=at.return}}function Mi(e){if(e!==at)return!1;if(!ve)return Zf(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Uu(e.type,e.memoizedProps)),n=!n),n&&Me&&aa(e),Zf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Me=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Me=null}}else t===27?(t=Me,Dn(e.type)?(e=Bu,Bu=null,Me=e):Me=t):Me=at?Ut(e.stateNode.nextSibling):null;return!0}function Ui(){Me=at=null,ve=!1}function Kf(){var e=na;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),na=null),e}function zi(e){na===null?na=[e]:na.push(e)}var ys=B(null),ia=null,It=null;function mn(e,t,n){G(ys,t._currentValue),t._currentValue=n}function Ft(e){e._currentValue=ys.current,Q(ys)}function _s(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xs(e,t,n,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=u;for(var _=0;_<t.length;_++)if(b.context===t[_]){f.lanes|=n,b=f.alternate,b!==null&&(b.lanes|=n),_s(f.return,n,e),r||(v=null);break e}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(o(341));v.lanes|=n,f=v.alternate,f!==null&&(f.lanes|=n),_s(v,n,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ni(e,t,n,r){e=null;for(var u=t,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var b=u.type;gt(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===ht.current){if(v=u.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(fr):e=[fr])}u=u.return}e!==null&&xs(t,e,n,r),t.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){ia=e,It=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Jf(ia,e)}function dl(e,t){return ia===null&&ra(e),Jf(e,t)}function Jf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},It===null){if(e===null)throw Error(o(308));It=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else It=It.next=t;return n}var nm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},am=l.unstable_scheduleCallback,im=l.unstable_NormalPriority,Pe={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ss(){return{controller:new nm,data:new Map,refCount:0}}function qi(e){e.refCount--,e.refCount===0&&am(im,function(){e.controller.abort()})}var Bi=null,ws=0,Na=0,qa=null;function rm(e,t){if(Bi===null){var n=Bi=[];ws=0,Na=Tu(),qa={status:"pending",value:void 0,then:function(r){n.push(r)}}}return ws++,t.then(If,If),t}function If(){if(--ws===0&&Bi!==null){qa!==null&&(qa.status="fulfilled");var e=Bi;Bi=null,Na=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lm(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var u=0;u<n.length;u++)(0,n[u])(t)},function(u){for(r.status="rejected",r.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),r}var Ff=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&rm(e,t),Ff!==null&&Ff(e,t)};var la=B(null);function Os(){var e=la.current;return e!==null?e:Ee.pooledCache}function pl(e,t){t===null?G(la,la.current):G(la,t.pool)}function Wf(){var e=Os();return e===null?null:{parent:Pe._currentValue,pool:e}}var Li=Error(o(460)),eh=Error(o(474)),gl=Error(o(542)),Ts={then:function(){}};function th(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function nh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(vl,vl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e;default:if(typeof t.status=="string")t.then(vl,vl);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=r}},function(r){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e}throw Pi=t,Li}}var Pi=null;function ah(){if(Pi===null)throw Error(o(459));var e=Pi;return Pi=null,e}function ih(e){if(e===Li||e===gl)throw Error(o(483))}var bn=!1;function Es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ks(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var u=r.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),r.pending=t,t=sl(e),$f(e,null,n),t}return ol(e,r,t,n),sl(e)}function Hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jc(e,n)}}function As(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var u=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,n=n.next}while(n!==null);f===null?u=f=t:f=f.next=t}else u=f=t;n={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Rs=!1;function Gi(){if(Rs){var e=qa;if(e!==null)throw e}}function Yi(e,t,n,r){Rs=!1;var u=e.updateQueue;bn=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var _=b,C=_.next;_.next=null,v===null?f=C:v.next=C,v=_;var M=e.alternate;M!==null&&(M=M.updateQueue,b=M.lastBaseUpdate,b!==v&&(b===null?M.firstBaseUpdate=C:b.next=C,M.lastBaseUpdate=_))}if(f!==null){var q=u.baseState;v=0,M=C=_=null,b=f;do{var j=b.lane&-536870913,D=j!==b.lane;if(D?(de&j)===j:(r&j)===j){j!==0&&j===Na&&(Rs=!0),M!==null&&(M=M.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ae=e,W=b;j=t;var Se=n;switch(W.tag){case 1:if(ae=W.payload,typeof ae=="function"){q=ae.call(Se,q,j);break e}q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=W.payload,j=typeof ae=="function"?ae.call(Se,q,j):ae,j==null)break e;q=m({},q,j);break e;case 2:bn=!0}}j=b.callback,j!==null&&(e.flags|=64,D&&(e.flags|=8192),D=u.callbacks,D===null?u.callbacks=[j]:D.push(j))}else D={lane:j,tag:b.tag,payload:b.payload,callback:b.callback,next:null},M===null?(C=M=D,_=q):M=M.next=D,v|=j;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;D=b,b=D.next,D.next=null,u.lastBaseUpdate=D,u.shared.pending=null}}while(!0);M===null&&(_=q),u.baseState=_,u.firstBaseUpdate=C,u.lastBaseUpdate=M,f===null&&(u.shared.lanes=0),An|=v,e.lanes=v,e.memoizedState=q}}function rh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function lh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)rh(n[e],t)}var Ba=B(null),ml=B(0);function oh(e,t){e=ln,G(ml,e),G(Ba,t),ln=e|t.baseLanes}function Cs(){G(ml,ln),G(Ba,Ba.current)}function js(){ln=ml.current,Q(Ba),Q(ml)}var xn=0,oe=null,_e=null,qe=null,bl=!1,La=!1,oa=!1,yl=0,$i=0,Pa=null,om=0;function ze(){throw Error(o(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Ms(e,t,n,r,u,f){return xn=f,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?$h:Xh,oa=!1,f=n(r,u),oa=!1,La&&(f=uh(t,n,r,u)),sh(e),f}function sh(e){U.H=Tl;var t=_e!==null&&_e.next!==null;if(xn=0,qe=_e=oe=null,bl=!1,$i=0,Pa=null,t)throw Error(o(300));e===null||$e||(e=e.dependencies,e!==null&&hl(e)&&($e=!0))}function uh(e,t,n,r){oe=e;var u=0;do{if(La&&(Pa=null),$i=0,La=!1,25<=u)throw Error(o(301));if(u+=1,qe=_e=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=pm,f=t(n,r)}while(La);return f}function sm(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Xi(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(oe.flags|=1024),t}function Us(){var e=yl!==0;return yl=0,e}function zs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ns(e){if(bl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bl=!1}xn=0,qe=_e=oe=null,La=!1,$i=yl=0,Pa=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?oe.memoizedState=qe=e:qe=qe.next=e,qe}function Be(){if(_e===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=qe===null?oe.memoizedState:qe.next;if(t!==null)qe=t,_e=e;else{if(e===null)throw oe.alternate===null?Error(o(467)):Error(o(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},qe===null?oe.memoizedState=qe=e:qe=qe.next=e}return qe}function qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xi(e){var t=$i;return $i+=1,Pa===null&&(Pa=[]),e=nh(Pa,e,t),t=oe,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?$h:Xh),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xi(e);if(e.$$typeof===z)return tt(e)}throw Error(o(438,String(e)))}function Bs(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qs(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=rt;return t.index++,n}function Wt(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=Be();return Ls(t,_e,e)}function Ls(e,t,n){var r=e.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}t.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{t=u.next;var b=v=null,_=null,C=t,M=!1;do{var q=C.lane&-536870913;if(q!==C.lane?(de&q)===q:(xn&q)===q){var j=C.revertLane;if(j===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),q===Na&&(M=!0);else if((xn&j)===j){C=C.next,j===Na&&(M=!0);continue}else q={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},_===null?(b=_=q,v=f):_=_.next=q,oe.lanes|=j,An|=j;q=C.action,oa&&n(f,q),f=C.hasEagerState?C.eagerState:n(f,q)}else j={lane:q,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},_===null?(b=_=j,v=f):_=_.next=j,oe.lanes|=q,An|=q;C=C.next}while(C!==null&&C!==t);if(_===null?v=f:_.next=b,!gt(f,e.memoizedState)&&($e=!0,M&&(n=qa,n!==null)))throw n;e.memoizedState=f,e.baseState=v,e.baseQueue=_,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ps(e){var t=Be(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,u=n.pending,f=t.memoizedState;if(u!==null){n.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);gt(f,t.memoizedState)||($e=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,r]}function ch(e,t,n){var r=oe,u=Be(),f=ve;if(f){if(n===void 0)throw Error(o(407));n=n()}else n=t();var v=!gt((_e||u).memoizedState,n);v&&(u.memoizedState=n,$e=!0),u=u.queue;var b=dh.bind(null,r,u,e);if(Qi(2048,8,b,[e]),u.getSnapshot!==t||v||qe!==null&&qe.memoizedState.tag&1){if(r.flags|=2048,Ha(9,Sl(),hh.bind(null,r,u,n,t),null),Ee===null)throw Error(o(349));f||(xn&124)!==0||fh(r,t,n)}return n}function fh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=qs(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hh(e,t,n,r){t.value=n,t.getSnapshot=r,ph(t)&&gh(e)}function dh(e,t,n){return n(function(){ph(t)&&gh(e)})}function ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function gh(e){var t=Da(e,2);t!==null&&xt(t,e,2)}function Hs(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),oa){pn(!0);try{n()}finally{pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function vh(e,t,n,r){return e.baseState=n,Ls(e,_e,typeof r=="function"?r:Wt)}function um(e,t,n,r,u){if(Ol(e))throw Error(o(485));if(e=t.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};U.T!==null?n(!0):f.isTransition=!1,r(f),n=t.pending,n===null?(f.next=t.pending=f,mh(t,f)):(f.next=n.next,t.pending=n.next=f)}}function mh(e,t){var n=t.action,r=t.payload,u=e.state;if(t.isTransition){var f=U.T,v={};U.T=v;try{var b=n(u,r),_=U.S;_!==null&&_(v,b),bh(e,t,b)}catch(C){Gs(e,t,C)}finally{U.T=f}}else try{f=n(u,r),bh(e,t,f)}catch(C){Gs(e,t,C)}}function bh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){yh(e,t,r)},function(r){return Gs(e,t,r)}):yh(e,t,n)}function yh(e,t,n){t.status="fulfilled",t.value=n,_h(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mh(e,n)))}function Gs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,_h(t),t=t.next;while(t!==r)}e.action=null}function _h(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xh(e,t){return t}function Sh(e,t){if(ve){var n=Ee.formState;if(n!==null){e:{var r=oe;if(ve){if(Me){t:{for(var u=Me,f=Pt;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ut(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Me=Ut(u.nextSibling),r=u.data==="F!";break e}}aa(r)}r=!1}r&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xh,lastRenderedState:t},n.queue=r,n=Hh.bind(null,oe,r),r.dispatch=n,r=Hs(!1),f=Vs.bind(null,oe,!1,r.queue),r=st(),u={state:t,dispatch:null,action:e,pending:null},r.queue=u,n=um.bind(null,oe,u,f,n),u.dispatch=n,r.memoizedState=e,[t,n,!1]}function wh(e){var t=Be();return Oh(t,_e,e)}function Oh(e,t,n){if(t=Ls(e,t,xh)[0],e=xl(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Xi(t)}catch(v){throw v===Li?gl:v}else r=t;t=Be();var u=t.queue,f=u.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,Ha(9,Sl(),cm.bind(null,u,n),null)),[r,f,e]}function cm(e,t){e.action=t}function Th(e){var t=Be(),n=_e;if(n!==null)return Oh(t,n,e);Be(),t=t.memoizedState,n=Be();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ha(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=oe.updateQueue,t===null&&(t=qs(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Sl(){return{destroy:void 0,resource:void 0}}function Eh(){return Be().memoizedState}function wl(e,t,n,r){var u=st();r=r===void 0?null:r,oe.flags|=e,u.memoizedState=Ha(1|t,Sl(),n,r)}function Qi(e,t,n,r){var u=Be();r=r===void 0?null:r;var f=u.memoizedState.inst;_e!==null&&r!==null&&Ds(r,_e.memoizedState.deps)?u.memoizedState=Ha(t,f,n,r):(oe.flags|=e,u.memoizedState=Ha(1|t,f,n,r))}function kh(e,t){wl(8390656,8,e,t)}function Ah(e,t){Qi(2048,8,e,t)}function Rh(e,t){return Qi(4,2,e,t)}function Ch(e,t){return Qi(4,4,e,t)}function jh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dh(e,t,n){n=n!=null?n.concat([e]):null,Qi(4,4,jh.bind(null,t,e),n)}function Ys(){}function Mh(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uh(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Ds(t,r[1]))return r[0];if(r=e(),oa){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[r,t],r}function $s(e,t,n){return n===void 0||(xn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=qd(),oe.lanes|=e,An|=e,n)}function zh(e,t,n,r){return gt(n,t)?n:Ba.current!==null?(e=$s(e,n,r),gt(e,t)||($e=!0),e):(xn&42)===0?($e=!0,e.memoizedState=n):(e=qd(),oe.lanes|=e,An|=e,t)}function Nh(e,t,n,r,u){var f=$.p;$.p=f!==0&&8>f?f:8;var v=U.T,b={};U.T=b,Vs(e,!1,t,n);try{var _=u(),C=U.S;if(C!==null&&C(b,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var M=lm(_,r);Vi(e,t,M,_t(e))}else Vi(e,t,r,_t(e))}catch(q){Vi(e,t,{then:function(){},status:"rejected",reason:q},_t())}finally{$.p=f,U.T=v}}function fm(){}function Xs(e,t,n,r){if(e.tag!==5)throw Error(o(476));var u=qh(e).queue;Nh(e,u,t,te,n===null?fm:function(){return Bh(e),n(r)})}function qh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Bh(e){var t=qh(e).next.queue;Vi(e,t,{},_t())}function Qs(){return tt(fr)}function Lh(){return Be().memoizedState}function Ph(){return Be().memoizedState}function hm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_t();e=yn(n);var r=_n(t,e,n);r!==null&&(xt(r,t,n),Hi(r,t,n)),t={cache:Ss()},e.payload=t;return}t=t.return}}function dm(e,t,n){var r=_t();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Gh(t,n):(n=hs(e,t,n,r),n!==null&&(xt(n,e,r),Yh(n,t,r)))}function Hh(e,t,n){var r=_t();Vi(e,t,n,r)}function Vi(e,t,n,r){var u={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Gh(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var v=t.lastRenderedState,b=f(v,n);if(u.hasEagerState=!0,u.eagerState=b,gt(b,v))return ol(e,t,u,0),Ee===null&&ll(),!1}catch{}finally{}if(n=hs(e,t,u,r),n!==null)return xt(n,e,r),Yh(n,t,r),!0}return!1}function Vs(e,t,n,r){if(r={lane:2,revertLane:Tu(),action:r,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(t)throw Error(o(479))}else t=hs(e,n,r,2),t!==null&&xt(t,e,2)}function Ol(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Gh(e,t){La=bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yh(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jc(e,n)}}var Tl={readContext:tt,use:_l,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze},$h={readContext:tt,use:_l,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:kh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,wl(4194308,4,jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){wl(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var r=e();if(oa){pn(!0);try{e()}finally{pn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=st();if(n!==void 0){var u=n(t);if(oa){pn(!0);try{n(t)}finally{pn(!1)}}}else u=t;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=dm.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Hs(e);var t=e.queue,n=Hh.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ys,useDeferredValue:function(e,t){var n=st();return $s(n,e,t)},useTransition:function(){var e=Hs(!1);return e=Nh.bind(null,oe,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=oe,u=st();if(ve){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ee===null)throw Error(o(349));(de&124)!==0||fh(r,t,n)}u.memoizedState=n;var f={value:n,getSnapshot:t};return u.queue=f,kh(dh.bind(null,r,f,e),[e]),r.flags|=2048,Ha(9,Sl(),hh.bind(null,r,f,n,t),null),n},useId:function(){var e=st(),t=Ee.identifierPrefix;if(ve){var n=Jt,r=Kt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=yl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=om++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:Sh,useActionState:Sh,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vs.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bs,useCacheRefresh:function(){return st().memoizedState=hm.bind(null,oe)}},Xh={readContext:tt,use:_l,useCallback:Mh,useContext:tt,useEffect:Ah,useImperativeHandle:Dh,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Uh,useReducer:xl,useRef:Eh,useState:function(){return xl(Wt)},useDebugValue:Ys,useDeferredValue:function(e,t){var n=Be();return zh(n,_e.memoizedState,e,t)},useTransition:function(){var e=xl(Wt)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:ch,useId:Lh,useHostTransitionStatus:Qs,useFormState:wh,useActionState:wh,useOptimistic:function(e,t){var n=Be();return vh(n,_e,e,t)},useMemoCache:Bs,useCacheRefresh:Ph},pm={readContext:tt,use:_l,useCallback:Mh,useContext:tt,useEffect:Ah,useImperativeHandle:Dh,useInsertionEffect:Rh,useLayoutEffect:Ch,useMemo:Uh,useReducer:Ps,useRef:Eh,useState:function(){return Ps(Wt)},useDebugValue:Ys,useDeferredValue:function(e,t){var n=Be();return _e===null?$s(n,e,t):zh(n,_e.memoizedState,e,t)},useTransition:function(){var e=Ps(Wt)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:ch,useId:Lh,useHostTransitionStatus:Qs,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var n=Be();return _e!==null?vh(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bs,useCacheRefresh:Ph},Ga=null,Zi=0;function El(e){var t=Zi;return Zi+=1,Ga===null&&(Ga=[]),nh(Ga,e,t)}function Ki(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function kl(e,t){throw t.$$typeof===y?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qh(e){var t=e._init;return t(e._payload)}function Vh(e){function t(T,w){if(e){var R=T.deletions;R===null?(T.deletions=[w],T.flags|=16):R.push(w)}}function n(T,w){if(!e)return null;for(;w!==null;)t(T,w),w=w.sibling;return null}function r(T){for(var w=new Map;T!==null;)T.key!==null?w.set(T.key,T):w.set(T.index,T),T=T.sibling;return w}function u(T,w){return T=Zt(T,w),T.index=0,T.sibling=null,T}function f(T,w,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<w?(T.flags|=67108866,w):R):(T.flags|=67108866,w)):(T.flags|=1048576,w)}function v(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function b(T,w,R,N){return w===null||w.tag!==6?(w=ps(R,T.mode,N),w.return=T,w):(w=u(w,R),w.return=T,w)}function _(T,w,R,N){var Z=R.type;return Z===O?M(T,w,R.props.children,N,R.key):w!==null&&(w.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ae&&Qh(Z)===w.type)?(w=u(w,R.props),Ki(w,R),w.return=T,w):(w=ul(R.type,R.key,R.props,null,T.mode,N),Ki(w,R),w.return=T,w)}function C(T,w,R,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=gs(R,T.mode,N),w.return=T,w):(w=u(w,R.children||[]),w.return=T,w)}function M(T,w,R,N,Z){return w===null||w.tag!==7?(w=Wn(R,T.mode,N,Z),w.return=T,w):(w=u(w,R),w.return=T,w)}function q(T,w,R){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=ps(""+w,T.mode,R),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case x:return R=ul(w.type,w.key,w.props,null,T.mode,R),Ki(R,w),R.return=T,R;case k:return w=gs(w,T.mode,R),w.return=T,w;case Ae:var N=w._init;return w=N(w._payload),q(T,w,R)}if(We(w)||Fe(w))return w=Wn(w,T.mode,R,null),w.return=T,w;if(typeof w.then=="function")return q(T,El(w),R);if(w.$$typeof===z)return q(T,dl(T,w),R);kl(T,w)}return null}function j(T,w,R,N){var Z=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return Z!==null?null:b(T,w,""+R,N);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return R.key===Z?_(T,w,R,N):null;case k:return R.key===Z?C(T,w,R,N):null;case Ae:return Z=R._init,R=Z(R._payload),j(T,w,R,N)}if(We(R)||Fe(R))return Z!==null?null:M(T,w,R,N,null);if(typeof R.then=="function")return j(T,w,El(R),N);if(R.$$typeof===z)return j(T,w,dl(T,R),N);kl(T,R)}return null}function D(T,w,R,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return T=T.get(R)||null,b(w,T,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case x:return T=T.get(N.key===null?R:N.key)||null,_(w,T,N,Z);case k:return T=T.get(N.key===null?R:N.key)||null,C(w,T,N,Z);case Ae:var se=N._init;return N=se(N._payload),D(T,w,R,N,Z)}if(We(N)||Fe(N))return T=T.get(R)||null,M(w,T,N,Z,null);if(typeof N.then=="function")return D(T,w,R,El(N),Z);if(N.$$typeof===z)return D(T,w,R,dl(w,N),Z);kl(w,N)}return null}function ae(T,w,R,N){for(var Z=null,se=null,I=w,ee=w=0,Qe=null;I!==null&&ee<R.length;ee++){I.index>ee?(Qe=I,I=null):Qe=I.sibling;var ge=j(T,I,R[ee],N);if(ge===null){I===null&&(I=Qe);break}e&&I&&ge.alternate===null&&t(T,I),w=f(ge,w,ee),se===null?Z=ge:se.sibling=ge,se=ge,I=Qe}if(ee===R.length)return n(T,I),ve&&ta(T,ee),Z;if(I===null){for(;ee<R.length;ee++)I=q(T,R[ee],N),I!==null&&(w=f(I,w,ee),se===null?Z=I:se.sibling=I,se=I);return ve&&ta(T,ee),Z}for(I=r(I);ee<R.length;ee++)Qe=D(I,T,ee,R[ee],N),Qe!==null&&(e&&Qe.alternate!==null&&I.delete(Qe.key===null?ee:Qe.key),w=f(Qe,w,ee),se===null?Z=Qe:se.sibling=Qe,se=Qe);return e&&I.forEach(function(qn){return t(T,qn)}),ve&&ta(T,ee),Z}function W(T,w,R,N){if(R==null)throw Error(o(151));for(var Z=null,se=null,I=w,ee=w=0,Qe=null,ge=R.next();I!==null&&!ge.done;ee++,ge=R.next()){I.index>ee?(Qe=I,I=null):Qe=I.sibling;var qn=j(T,I,ge.value,N);if(qn===null){I===null&&(I=Qe);break}e&&I&&qn.alternate===null&&t(T,I),w=f(qn,w,ee),se===null?Z=qn:se.sibling=qn,se=qn,I=Qe}if(ge.done)return n(T,I),ve&&ta(T,ee),Z;if(I===null){for(;!ge.done;ee++,ge=R.next())ge=q(T,ge.value,N),ge!==null&&(w=f(ge,w,ee),se===null?Z=ge:se.sibling=ge,se=ge);return ve&&ta(T,ee),Z}for(I=r(I);!ge.done;ee++,ge=R.next())ge=D(I,T,ee,ge.value,N),ge!==null&&(e&&ge.alternate!==null&&I.delete(ge.key===null?ee:ge.key),w=f(ge,w,ee),se===null?Z=ge:se.sibling=ge,se=ge);return e&&I.forEach(function(gb){return t(T,gb)}),ve&&ta(T,ee),Z}function Se(T,w,R,N){if(typeof R=="object"&&R!==null&&R.type===O&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case x:e:{for(var Z=R.key;w!==null;){if(w.key===Z){if(Z=R.type,Z===O){if(w.tag===7){n(T,w.sibling),N=u(w,R.props.children),N.return=T,T=N;break e}}else if(w.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ae&&Qh(Z)===w.type){n(T,w.sibling),N=u(w,R.props),Ki(N,R),N.return=T,T=N;break e}n(T,w);break}else t(T,w);w=w.sibling}R.type===O?(N=Wn(R.props.children,T.mode,N,R.key),N.return=T,T=N):(N=ul(R.type,R.key,R.props,null,T.mode,N),Ki(N,R),N.return=T,T=N)}return v(T);case k:e:{for(Z=R.key;w!==null;){if(w.key===Z)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(T,w.sibling),N=u(w,R.children||[]),N.return=T,T=N;break e}else{n(T,w);break}else t(T,w);w=w.sibling}N=gs(R,T.mode,N),N.return=T,T=N}return v(T);case Ae:return Z=R._init,R=Z(R._payload),Se(T,w,R,N)}if(We(R))return ae(T,w,R,N);if(Fe(R)){if(Z=Fe(R),typeof Z!="function")throw Error(o(150));return R=Z.call(R),W(T,w,R,N)}if(typeof R.then=="function")return Se(T,w,El(R),N);if(R.$$typeof===z)return Se(T,w,dl(T,R),N);kl(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,w!==null&&w.tag===6?(n(T,w.sibling),N=u(w,R),N.return=T,T=N):(n(T,w),N=ps(R,T.mode,N),N.return=T,T=N),v(T)):n(T,w)}return function(T,w,R,N){try{Zi=0;var Z=Se(T,w,R,N);return Ga=null,Z}catch(I){if(I===Li||I===gl)throw I;var se=vt(29,I,null,T.mode);return se.lanes=N,se.return=T,se}finally{}}}var Ya=Vh(!0),Zh=Vh(!1),Rt=B(null),Ht=null;function Sn(e){var t=e.alternate;G(He,He.current&1),G(Rt,e),Ht===null&&(t===null||Ba.current!==null||t.memoizedState!==null)&&(Ht=e)}function Kh(e){if(e.tag===22){if(G(He,He.current),G(Rt,e),Ht===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ht=e)}}else wn()}function wn(){G(He,He.current),G(Rt,Rt.current)}function en(e){Q(Rt),Ht===e&&(Ht=null),Q(He)}var He=B(0);function Al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||qu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_t(),u=yn(r);u.payload=t,n!=null&&(u.callback=n),t=_n(e,u,r),t!==null&&(xt(t,e,r),Hi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_t(),u=yn(r);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=_n(e,u,r),t!==null&&(xt(t,e,r),Hi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),r=yn(n);r.tag=2,t!=null&&(r.callback=t),t=_n(e,r,n),t!==null&&(xt(t,e,n),Hi(t,e,n))}};function Jh(e,t,n,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):t.prototype&&t.prototype.isPureReactComponent?!ji(n,r)||!ji(u,f):!0}function Ih(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function sa(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=m({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Fh(e){Rl(e)}function Wh(e){console.error(e)}function ed(e){Rl(e)}function Cl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function td(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Js(e,t,n){return n=yn(n),n.tag=3,n.payload={element:null},n.callback=function(){Cl(e,t)},n}function nd(e){return e=yn(e),e.tag=3,e}function ad(e,t,n,r){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){td(t,n,r)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){td(t,n,r),typeof u!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function gm(e,t,n,r,u){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Ni(t,n,u,!0),n=Rt.current,n!==null){switch(n.tag){case 13:return Ht===null?_u():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=u,r===Ts?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Su(e,r,u)),!1;case 22:return n.flags|=65536,r===Ts?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Su(e,r,u)),!1}throw Error(o(435,n.tag))}return Su(e,r,u),_u(),!1}if(ve)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,r!==bs&&(e=Error(o(422),{cause:r}),zi(Tt(e,n)))):(r!==bs&&(t=Error(o(423),{cause:r}),zi(Tt(t,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Tt(r,n),u=Js(e.stateNode,r,u),As(e,u),Ue!==4&&(Ue=2)),!1;var f=Error(o(520),{cause:r});if(f=Tt(f,n),nr===null?nr=[f]:nr.push(f),Ue!==4&&(Ue=2),t===null)return!0;r=Tt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=Js(n.stateNode,r,e),As(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Rn===null||!Rn.has(f))))return n.flags|=65536,u&=-u,n.lanes|=u,u=nd(u),ad(u,e,n,r),As(n,u),!1}n=n.return}while(n!==null);return!1}var id=Error(o(461)),$e=!1;function Ke(e,t,n,r){t.child=e===null?Zh(t,null,n,r):Ya(t,e.child,n,r)}function rd(e,t,n,r,u){n=n.render;var f=t.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return ra(t),r=Ms(e,t,n,v,f,u),b=Us(),e!==null&&!$e?(zs(e,t,u),tn(e,t,u)):(ve&&b&&vs(t),t.flags|=1,Ke(e,t,r,u),t.child)}function ld(e,t,n,r,u){if(e===null){var f=n.type;return typeof f=="function"&&!ds(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,od(e,t,f,r,u)):(e=ul(n.type,null,r,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!iu(e,u)){var v=f.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(v,r)&&e.ref===t.ref)return tn(e,t,u)}return t.flags|=1,e=Zt(f,r),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,r,u){if(e!==null){var f=e.memoizedProps;if(ji(f,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=f,iu(e,u))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,tn(e,t,u)}return Is(e,t,n,r,u)}function sd(e,t,n){var r=t.pendingProps,u=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=f!==null?f.baseLanes|n:n,e!==null){for(u=t.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;t.childLanes=f&~r}else t.childLanes=0,t.child=null;return ud(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(t,f!==null?f.cachePool:null),f!==null?oh(t,f):Cs(),Kh(t);else return t.lanes=t.childLanes=536870912,ud(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(pl(t,f.cachePool),oh(t,f),wn(),t.memoizedState=null):(e!==null&&pl(t,null),Cs(),wn());return Ke(e,t,u,n),t.child}function ud(e,t,n,r){var u=Os();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&pl(t,null),Cs(),Kh(t),e!==null&&Ni(e,t,r,!0),null}function jl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Is(e,t,n,r,u){return ra(t),n=Ms(e,t,n,r,void 0,u),r=Us(),e!==null&&!$e?(zs(e,t,u),tn(e,t,u)):(ve&&r&&vs(t),t.flags|=1,Ke(e,t,n,u),t.child)}function cd(e,t,n,r,u,f){return ra(t),t.updateQueue=null,n=uh(t,r,n,u),sh(e),r=Us(),e!==null&&!$e?(zs(e,t,f),tn(e,t,f)):(ve&&r&&vs(t),t.flags|=1,Ke(e,t,n,f),t.child)}function fd(e,t,n,r,u){if(ra(t),t.stateNode===null){var f=Ma,v=n.contextType;typeof v=="object"&&v!==null&&(f=tt(v)),f=new n(r,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ks,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=r,f.state=t.memoizedState,f.refs={},Es(t),v=n.contextType,f.context=typeof v=="object"&&v!==null?tt(v):Ma,f.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(Zs(t,n,v,r),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ks.enqueueReplaceState(f,f.state,null),Yi(t,r,f,u),Gi(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){f=t.stateNode;var b=t.memoizedProps,_=sa(n,b);f.props=_;var C=f.context,M=n.contextType;v=Ma,typeof M=="object"&&M!==null&&(v=tt(M));var q=n.getDerivedStateFromProps;M=typeof q=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,M||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||C!==v)&&Ih(t,f,r,v),bn=!1;var j=t.memoizedState;f.state=j,Yi(t,r,f,u),Gi(),C=t.memoizedState,b||j!==C||bn?(typeof q=="function"&&(Zs(t,n,q,r),C=t.memoizedState),(_=bn||Jh(t,n,_,r,j,C,v))?(M||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=C),f.props=r,f.state=C,f.context=v,r=_):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{f=t.stateNode,ks(e,t),v=t.memoizedProps,M=sa(n,v),f.props=M,q=t.pendingProps,j=f.context,C=n.contextType,_=Ma,typeof C=="object"&&C!==null&&(_=tt(C)),b=n.getDerivedStateFromProps,(C=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==q||j!==_)&&Ih(t,f,r,_),bn=!1,j=t.memoizedState,f.state=j,Yi(t,r,f,u),Gi();var D=t.memoizedState;v!==q||j!==D||bn||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof b=="function"&&(Zs(t,n,b,r),D=t.memoizedState),(M=bn||Jh(t,n,M,r,j,D,_)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(C||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,D,_),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,D,_)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=D),f.props=r,f.state=D,f.context=_,r=M):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return f=r,jl(e,t),r=(t.flags&128)!==0,f||r?(f=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&r?(t.child=Ya(t,e.child,null,u),t.child=Ya(t,null,n,u)):Ke(e,t,n,u),t.memoizedState=f.state,e=t.child):e=tn(e,t,u),e}function hd(e,t,n,r){return Ui(),t.flags|=256,Ke(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ws(e){return{baseLanes:e,cachePool:Wf()}}function eu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ct),e}function dd(e,t,n){var r=t.pendingProps,u=!1,f=(t.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),v&&(u=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(u?Sn(t):wn(),ve){var b=Me,_;if(_=b){e:{for(_=b,b=Pt;_.nodeType!==8;){if(!b){b=null;break e}if(_=Ut(_.nextSibling),_===null){b=null;break e}}b=_}b!==null?(t.memoizedState={dehydrated:b,treeContext:ea!==null?{id:Kt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},_=vt(18,null,null,0),_.stateNode=b,_.return=t,t.child=_,at=t,Me=null,_=!0):_=!1}_||aa(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return qu(b)?t.lanes=32:t.lanes=536870912,null;en(t)}return b=r.children,r=r.fallback,u?(wn(),u=t.mode,b=Dl({mode:"hidden",children:b},u),r=Wn(r,u,n,null),b.return=t,r.return=t,b.sibling=r,t.child=b,u=t.child,u.memoizedState=Ws(n),u.childLanes=eu(e,v,n),t.memoizedState=Fs,r):(Sn(t),tu(t,b))}if(_=e.memoizedState,_!==null&&(b=_.dehydrated,b!==null)){if(f)t.flags&256?(Sn(t),t.flags&=-257,t=nu(e,t,n)):t.memoizedState!==null?(wn(),t.child=e.child,t.flags|=128,t=null):(wn(),u=r.fallback,b=t.mode,r=Dl({mode:"visible",children:r.children},b),u=Wn(u,b,n,null),u.flags|=2,r.return=t,u.return=t,r.sibling=u,t.child=r,Ya(t,e.child,null,n),r=t.child,r.memoizedState=Ws(n),r.childLanes=eu(e,v,n),t.memoizedState=Fs,t=u);else if(Sn(t),qu(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var C=v.dgst;v=C,r=Error(o(419)),r.stack="",r.digest=v,zi({value:r,source:null,stack:null}),t=nu(e,t,n)}else if($e||Ni(e,t,n,!1),v=(n&e.childLanes)!==0,$e||v){if(v=Ee,v!==null&&(r=n&-n,r=(r&42)!==0?1:Bo(r),r=(r&(v.suspendedLanes|n))!==0?0:r,r!==0&&r!==_.retryLane))throw _.retryLane=r,Da(e,r),xt(v,e,r),id;b.data==="$?"||_u(),t=nu(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,Me=Ut(b.nextSibling),at=t,ve=!0,na=null,Pt=!1,e!==null&&(kt[At++]=Kt,kt[At++]=Jt,kt[At++]=ea,Kt=e.id,Jt=e.overflow,ea=t),t=tu(t,r.children),t.flags|=4096);return t}return u?(wn(),u=r.fallback,b=t.mode,_=e.child,C=_.sibling,r=Zt(_,{mode:"hidden",children:r.children}),r.subtreeFlags=_.subtreeFlags&65011712,C!==null?u=Zt(C,u):(u=Wn(u,b,n,null),u.flags|=2),u.return=t,r.return=t,r.sibling=u,t.child=r,r=u,u=t.child,b=e.child.memoizedState,b===null?b=Ws(n):(_=b.cachePool,_!==null?(C=Pe._currentValue,_=_.parent!==C?{parent:C,pool:C}:_):_=Wf(),b={baseLanes:b.baseLanes|n,cachePool:_}),u.memoizedState=b,u.childLanes=eu(e,v,n),t.memoizedState=Fs,r):(Sn(t),n=e.child,e=n.sibling,n=Zt(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=n,t.memoizedState=null,n)}function tu(e,t){return t=Dl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dl(e,t){return e=vt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function nu(e,t,n){return Ya(t,e.child,null,n),e=tu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_s(e.return,t,n)}function au(e,t,n,r,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=n,f.tailMode=u)}function gd(e,t,n){var r=t.pendingProps,u=r.revealOrder,f=r.tail;if(Ke(e,t,r.children,n),r=He.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,n,t);else if(e.tag===19)pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(G(He,r),u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&Al(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),au(t,!1,u,n,f);break;case"backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}au(t,!0,n,null,f);break;case"together":au(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ni(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function vm(e,t,n){switch(t.tag){case 3:Re(t,t.stateNode.containerInfo),mn(t,Pe,e.memoizedState.cache),Ui();break;case 27:case 5:Mo(t);break;case 4:Re(t,t.stateNode.containerInfo);break;case 10:mn(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Sn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?dd(e,t,n):(Sn(t),e=tn(e,t,n),e!==null?e.sibling:null);Sn(t);break;case 19:var u=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Ni(e,t,n,!1),r=(n&t.childLanes)!==0),u){if(r)return gd(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),G(He,He.current),r)break;return null;case 22:case 23:return t.lanes=0,sd(e,t,n);case 24:mn(t,Pe,e.memoizedState.cache)}return tn(e,t,n)}function vd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!iu(e,n)&&(t.flags&128)===0)return $e=!1,vm(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,ve&&(t.flags&1048576)!==0&&Qf(t,fl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,u=r._init;if(r=u(r._payload),t.type=r,typeof r=="function")ds(r)?(e=sa(r,e),t.tag=1,t=fd(null,t,r,e,n)):(t.tag=0,t=Is(null,t,r,e,n));else{if(r!=null){if(u=r.$$typeof,u===P){t.tag=11,t=rd(null,t,r,e,n);break e}else if(u===ne){t.tag=14,t=ld(null,t,r,e,n);break e}}throw t=Vn(r)||r,Error(o(306,t,""))}}return t;case 0:return Is(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,u=sa(r,t.pendingProps),fd(e,t,r,u,n);case 3:e:{if(Re(t,t.stateNode.containerInfo),e===null)throw Error(o(387));r=t.pendingProps;var f=t.memoizedState;u=f.element,ks(e,t),Yi(t,r,null,n);var v=t.memoizedState;if(r=v.cache,mn(t,Pe,r),r!==f.cache&&xs(t,[Pe],n,!0),Gi(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=hd(e,t,r,n);break e}else if(r!==u){u=Tt(Error(o(424)),t),zi(u),t=hd(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Ut(e.firstChild),at=t,ve=!0,na=null,Pt=!0,n=Zh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===u){t=tn(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 26:return jl(e,t),e===null?(n=_p(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,r=Ql(ie.current).createElement(n),r[et]=t,r[lt]=e,Ie(r,n,e),Ye(r),t.stateNode=r):t.memoizedState=_p(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mo(t),e===null&&ve&&(r=t.stateNode=mp(t.type,t.pendingProps,ie.current),at=t,Pt=!0,u=Me,Dn(t.type)?(Bu=u,Me=Ut(r.firstChild)):Me=u),Ke(e,t,t.pendingProps.children,n),jl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((u=r=Me)&&(r=$m(r,t.type,t.pendingProps,Pt),r!==null?(t.stateNode=r,at=t,Me=Ut(r.firstChild),Pt=!1,u=!0):u=!1),u||aa(t)),Mo(t),u=t.type,f=t.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Uu(u,f)?r=null:v!==null&&Uu(u,v)&&(t.flags|=32),t.memoizedState!==null&&(u=Ms(e,t,sm,null,null,n),fr._currentValue=u),jl(e,t),Ke(e,t,r,n),t.child;case 6:return e===null&&ve&&((e=n=Me)&&(n=Xm(n,t.pendingProps,Pt),n!==null?(t.stateNode=n,at=t,Me=null,e=!0):e=!1),e||aa(t)),null;case 13:return dd(e,t,n);case 4:return Re(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ya(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return rd(e,t,t.type,t.pendingProps,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,mn(t,t.type,r.value),Ke(e,t,r.children,n),t.child;case 9:return u=t.type._context,r=t.pendingProps.children,ra(t),u=tt(u),r=r(u),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return ld(e,t,t.type,t.pendingProps,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 19:return gd(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=Dl(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Zt(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return sd(e,t,n);case 24:return ra(t),r=tt(Pe),e===null?(u=Os(),u===null&&(u=Ee,f=Ss(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=n),u=f),t.memoizedState={parent:r,cache:u},Es(t),mn(t,Pe,u)):((e.lanes&n)!==0&&(ks(e,t),Yi(t,null,null,n),Gi()),u=e.memoizedState,f=t.memoizedState,u.parent!==r?(u={parent:r,cache:r},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),mn(t,Pe,r)):(r=f.cache,mn(t,Pe,r),r!==u.cache&&xs(t,[Pe],n,!0))),Ke(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function nn(e){e.flags|=4}function md(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tp(t)){if(t=Rt.current,t!==null&&((de&4194048)===de?Ht!==null:(de&62914560)!==de&&(de&536870912)===0||t!==Ht))throw Pi=Ts,eh;e.flags|=8192}}function Ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Zc():536870912,e.lanes|=t,Va|=t)}function Ji(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mm(e,t,n){var r=t.pendingProps;switch(ms(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ft(Pe),dn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Kf())),De(t),null;case 26:return n=t.memoizedState,e===null?(nn(t),n!==null?(De(t),md(t,n)):(De(t),t.flags&=-16777217)):n?n!==e.memoizedState?(nn(t),De(t),md(t,n)):(De(t),t.flags&=-16777217):(e.memoizedProps!==r&&nn(t),De(t),t.flags&=-16777217),null;case 27:$r(t),n=ie.current;var u=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&nn(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return De(t),null}e=F.current,Mi(t)?Vf(t):(e=mp(u,r,n),t.stateNode=e,nn(t))}return De(t),null;case 5:if($r(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&nn(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return De(t),null}if(e=F.current,Mi(t))Vf(t);else{switch(u=Ql(ie.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?u.createElement("select",{is:r.is}):u.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?u.createElement(n,{is:r.is}):u.createElement(n)}}e[et]=t,e[lt]=r;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=e;e:switch(Ie(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&nn(t)}}return De(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&nn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(e=ie.current,Mi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,u=at,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||cp(e.nodeValue,n)),e||aa(t)}else e=Ql(e).createTextNode(r),e[et]=t,t.stateNode=e}return De(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[et]=t}else Ui(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),u=!1}else u=Kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(en(t),t):(en(t),null)}if(en(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ml(t,t.updateQueue),De(t),null;case 4:return dn(),e===null&&Ru(t.stateNode.containerInfo),De(t),null;case 10:return Ft(t.type),De(t),null;case 19:if(Q(He),u=t.memoizedState,u===null)return De(t),null;if(r=(t.flags&128)!==0,f=u.rendering,f===null)if(r)Ji(u,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Al(e),f!==null){for(t.flags|=128,Ji(u,!1),e=f.updateQueue,t.updateQueue=e,Ml(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Xf(n,e),n=n.sibling;return G(He,He.current&1|2),t.child}e=e.sibling}u.tail!==null&&Lt()>Nl&&(t.flags|=128,r=!0,Ji(u,!1),t.lanes=4194304)}else{if(!r)if(e=Al(f),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ml(t,e),Ji(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!ve)return De(t),null}else 2*Lt()-u.renderingStartTime>Nl&&n!==536870912&&(t.flags|=128,r=!0,Ji(u,!1),t.lanes=4194304);u.isBackwards?(f.sibling=t.child,t.child=f):(e=u.last,e!==null?e.sibling=f:t.child=f,u.last=f)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Lt(),t.sibling=null,e=He.current,G(He,r?e&1|2:e&1),t):(De(t),null);case 22:case 23:return en(t),js(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&Ml(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Q(la),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ft(Pe),De(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function bm(e,t){switch(ms(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Pe),dn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $r(t),null;case 13:if(en(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(He),null;case 4:return dn(),null;case 10:return Ft(t.type),null;case 22:case 23:return en(t),js(),e!==null&&Q(la),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Pe),null;case 25:return null;default:return null}}function bd(e,t){switch(ms(t),t.tag){case 3:Ft(Pe),dn();break;case 26:case 27:case 5:$r(t);break;case 4:dn();break;case 13:en(t);break;case 19:Q(He);break;case 10:Ft(t.type);break;case 22:case 23:en(t),js(),e!==null&&Q(la);break;case 24:Ft(Pe)}}function Ii(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var u=r.next;n=u;do{if((n.tag&e)===e){r=void 0;var f=n.create,v=n.inst;r=f(),v.destroy=r}n=n.next}while(n!==u)}}catch(b){Te(t,t.return,b)}}function On(e,t,n){try{var r=t.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=t;var _=n,C=b;try{C()}catch(M){Te(u,_,M)}}}r=r.next}while(r!==f)}}catch(M){Te(t,t.return,M)}}function yd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{lh(t,n)}catch(r){Te(e,e.return,r)}}}function _d(e,t,n){n.props=sa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Te(e,t,r)}}function Fi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(u){Te(e,t,u)}}function Gt(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(u){Te(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Te(e,t,u)}else n.current=null}function xd(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(u){Te(e,e.return,u)}}function ru(e,t,n){try{var r=e.stateNode;Lm(r,e.type,n,t),r[lt]=t}catch(u){Te(e,e.return,u)}}function Sd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dn(e.type)||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xl));else if(r!==4&&(r===27&&Dn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Dn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function wd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);Ie(t,r,n),t[et]=e,t[lt]=n}catch(f){Te(e,e.return,f)}}var an=!1,Ne=!1,su=!1,Od=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function ym(e,t){if(e=e.containerInfo,Du=Fl,e=zf(e),ls(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var v=0,b=-1,_=-1,C=0,M=0,q=e,j=null;t:for(;;){for(var D;q!==n||u!==0&&q.nodeType!==3||(b=v+u),q!==f||r!==0&&q.nodeType!==3||(_=v+r),q.nodeType===3&&(v+=q.nodeValue.length),(D=q.firstChild)!==null;)j=q,q=D;for(;;){if(q===e)break t;if(j===n&&++C===u&&(b=v),j===f&&++M===r&&(_=v),(D=q.nextSibling)!==null)break;q=j,j=q.parentNode}q=D}n=b===-1||_===-1?null:{start:b,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mu={focusedElem:e,selectionRange:n},Fl=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,u=f.memoizedProps,f=f.memoizedState,r=n.stateNode;try{var ae=sa(n.type,u,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(ae,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(W){Te(n,n.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Nu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function Td(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),r&4&&Ii(5,n);break;case 1:if(Tn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){Te(n,n.return,v)}else{var u=sa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Te(n,n.return,v)}}r&64&&yd(n),r&512&&Fi(n,n.return);break;case 3:if(Tn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{lh(e,t)}catch(v){Te(n,n.return,v)}}break;case 27:t===null&&r&4&&wd(n);case 26:case 5:Tn(e,n),t===null&&r&4&&xd(n),r&512&&Fi(n,n.return);break;case 12:Tn(e,n);break;case 13:Tn(e,n),r&4&&Ad(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Am.bind(null,n),Qm(e,n))));break;case 22:if(r=n.memoizedState!==null||an,!r){t=t!==null&&t.memoizedState!==null||Ne,u=an;var f=Ne;an=r,(Ne=t)&&!f?En(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),an=u,Ne=f}break;case 30:break;default:Tn(e,n)}}function Ed(e){var t=e.alternate;t!==null&&(e.alternate=null,Ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ho(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,ut=!1;function rn(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(yi,n)}catch{}switch(n.tag){case 26:Ne||Gt(n,t),rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ne||Gt(n,t);var r=Ce,u=ut;Dn(n.type)&&(Ce=n.stateNode,ut=!1),rn(e,t,n),or(n.stateNode),Ce=r,ut=u;break;case 5:Ne||Gt(n,t);case 6:if(r=Ce,u=ut,Ce=null,rn(e,t,n),Ce=r,ut=u,Ce!==null)if(ut)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(f){Te(n,t,f)}else try{Ce.removeChild(n.stateNode)}catch(f){Te(n,t,f)}break;case 18:Ce!==null&&(ut?(e=Ce,gp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),gr(e)):gp(Ce,n.stateNode));break;case 4:r=Ce,u=ut,Ce=n.stateNode.containerInfo,ut=!0,rn(e,t,n),Ce=r,ut=u;break;case 0:case 11:case 14:case 15:Ne||On(2,n,t),Ne||On(4,n,t),rn(e,t,n);break;case 1:Ne||(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&_d(n,t,r)),rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:Ne=(r=Ne)||n.memoizedState!==null,rn(e,t,n),Ne=r;break;default:rn(e,t,n)}}function Ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gr(e)}catch(n){Te(t,t.return,n)}}function _m(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Od),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Od),t;default:throw Error(o(435,e.tag))}}function uu(e,t){var n=_m(e);t.forEach(function(r){var u=Rm.bind(null,e,r);n.has(r)||(n.add(r),r.then(u,u))})}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var u=n[r],f=e,v=t,b=v;e:for(;b!==null;){switch(b.tag){case 27:if(Dn(b.type)){Ce=b.stateNode,ut=!1;break e}break;case 5:Ce=b.stateNode,ut=!1;break e;case 3:case 4:Ce=b.stateNode.containerInfo,ut=!0;break e}b=b.return}if(Ce===null)throw Error(o(160));kd(f,v,u),Ce=null,ut=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Rd(t,e),t=t.sibling}var Mt=null;function Rd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),bt(e),r&4&&(On(3,e,e.return),Ii(3,e),On(5,e,e.return));break;case 1:mt(t,e),bt(e),r&512&&(Ne||n===null||Gt(n,n.return)),r&64&&an&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var u=Mt;if(mt(t,e),bt(e),r&512&&(Ne||n===null||Gt(n,n.return)),r&4){var f=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Si]||f[et]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Ie(f,r,n),f[et]=e,Ye(f),r=f;break e;case"link":var v=wp("link","href",u).get(r+(n.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(b,1);break t}}f=u.createElement(r),Ie(f,r,n),u.head.appendChild(f);break;case"meta":if(v=wp("meta","content",u).get(r+(n.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(b,1);break t}}f=u.createElement(r),Ie(f,r,n),u.head.appendChild(f);break;default:throw Error(o(468,r))}f[et]=e,Ye(f),r=f}e.stateNode=r}else Op(u,e.type,e.stateNode);else e.stateNode=Sp(u,r,e.memoizedProps);else f!==r?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,r===null?Op(u,e.type,e.stateNode):Sp(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&ru(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),bt(e),r&512&&(Ne||n===null||Gt(n,n.return)),n!==null&&r&4&&ru(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),bt(e),r&512&&(Ne||n===null||Gt(n,n.return)),e.flags&32){u=e.stateNode;try{Ta(u,"")}catch(D){Te(e,e.return,D)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,ru(e,u,n!==null?n.memoizedProps:u)),r&1024&&(su=!0);break;case 6:if(mt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(D){Te(e,e.return,D)}}break;case 3:if(Kl=null,u=Mt,Mt=Vl(t.containerInfo),mt(t,e),Mt=u,bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(D){Te(e,e.return,D)}su&&(su=!1,Cd(e));break;case 4:r=Mt,Mt=Vl(e.stateNode.containerInfo),mt(t,e),bt(e),Mt=r;break;case 12:mt(t,e),bt(e);break;case 13:mt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(gu=Lt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,uu(e,r)));break;case 22:u=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,C=an,M=Ne;if(an=C||u,Ne=M||_,mt(t,e),Ne=M,an=C,bt(e),r&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(n===null||_||an||Ne||ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(f=_.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=_.stateNode;var q=_.memoizedProps.style,j=q!=null&&q.hasOwnProperty("display")?q.display:null;b.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(D){Te(_,_.return,D)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=u?"":_.memoizedProps}catch(D){Te(_,_.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,uu(e,n))));break;case 19:mt(t,e),bt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,uu(e,r)));break;case 30:break;case 21:break;default:mt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Sd(r)){n=r;break}r=r.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var u=n.stateNode,f=lu(e);Ul(e,f,u);break;case 5:var v=n.stateNode;n.flags&32&&(Ta(v,""),n.flags&=-33);var b=lu(e);Ul(e,b,v);break;case 3:case 4:var _=n.stateNode.containerInfo,C=lu(e);ou(e,C,_);break;default:throw Error(o(161))}}catch(M){Te(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Td(e,t.alternate,t),t=t.sibling}function ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:On(4,t,t.return),ua(t);break;case 1:Gt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_d(t,t.return,n),ua(t);break;case 27:or(t.stateNode);case 26:case 5:Gt(t,t.return),ua(t);break;case 22:t.memoizedState===null&&ua(t);break;case 30:ua(t);break;default:ua(t)}e=e.sibling}}function En(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,u=e,f=t,v=f.flags;switch(f.tag){case 0:case 11:case 15:En(u,f,n),Ii(4,f);break;case 1:if(En(u,f,n),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(C){Te(r,r.return,C)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var _=u.shared.hiddenCallbacks;if(_!==null)for(u.shared.hiddenCallbacks=null,u=0;u<_.length;u++)rh(_[u],b)}catch(C){Te(r,r.return,C)}}n&&v&64&&yd(f),Fi(f,f.return);break;case 27:wd(f);case 26:case 5:En(u,f,n),n&&r===null&&v&4&&xd(f),Fi(f,f.return);break;case 12:En(u,f,n);break;case 13:En(u,f,n),n&&v&4&&Ad(u,f);break;case 22:f.memoizedState===null&&En(u,f,n),Fi(f,f.return);break;case 30:break;default:En(u,f,n)}t=t.sibling}}function cu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qi(n))}function fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qi(e))}function Yt(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jd(e,t,n,r),t=t.sibling}function jd(e,t,n,r){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,n,r),u&2048&&Ii(9,t);break;case 1:Yt(e,t,n,r);break;case 3:Yt(e,t,n,r),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qi(e)));break;case 12:if(u&2048){Yt(e,t,n,r),e=t.stateNode;try{var f=t.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Te(t,t.return,_)}}else Yt(e,t,n,r);break;case 13:Yt(e,t,n,r);break;case 23:break;case 22:f=t.stateNode,v=t.alternate,t.memoizedState!==null?f._visibility&2?Yt(e,t,n,r):Wi(e,t):f._visibility&2?Yt(e,t,n,r):(f._visibility|=2,$a(e,t,n,r,(t.subtreeFlags&10256)!==0)),u&2048&&cu(v,t);break;case 24:Yt(e,t,n,r),u&2048&&fu(t.alternate,t);break;default:Yt(e,t,n,r)}}function $a(e,t,n,r,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,v=t,b=n,_=r,C=v.flags;switch(v.tag){case 0:case 11:case 15:$a(f,v,b,_,u),Ii(8,v);break;case 23:break;case 22:var M=v.stateNode;v.memoizedState!==null?M._visibility&2?$a(f,v,b,_,u):Wi(f,v):(M._visibility|=2,$a(f,v,b,_,u)),u&&C&2048&&cu(v.alternate,v);break;case 24:$a(f,v,b,_,u),u&&C&2048&&fu(v.alternate,v);break;default:$a(f,v,b,_,u)}t=t.sibling}}function Wi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,u=r.flags;switch(r.tag){case 22:Wi(n,r),u&2048&&cu(r.alternate,r);break;case 24:Wi(n,r),u&2048&&fu(r.alternate,r);break;default:Wi(n,r)}t=t.sibling}}var er=8192;function Xa(e){if(e.subtreeFlags&er)for(e=e.child;e!==null;)Dd(e),e=e.sibling}function Dd(e){switch(e.tag){case 26:Xa(e),e.flags&er&&e.memoizedState!==null&&rb(Mt,e.memoizedState,e.memoizedProps);break;case 5:Xa(e);break;case 3:case 4:var t=Mt;Mt=Vl(e.stateNode.containerInfo),Xa(e),Mt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=er,er=16777216,Xa(e),er=t):Xa(e));break;default:Xa(e)}}function Md(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Xe=r,zd(r,e)}Md(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ud(e),e=e.sibling}function Ud(e){switch(e.tag){case 0:case 11:case 15:tr(e),e.flags&2048&&On(9,e,e.return);break;case 3:tr(e);break;case 12:tr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zl(e)):tr(e);break;default:tr(e)}}function zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Xe=r,zd(r,e)}Md(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:On(8,t,t.return),zl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zl(t));break;default:zl(t)}e=e.sibling}}function zd(e,t){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:On(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:qi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Xe=r;else e:for(n=e;Xe!==null;){r=Xe;var u=r.sibling,f=r.return;if(Ed(r),r===n){Xe=null;break e}if(u!==null){u.return=f,Xe=u;break e}Xe=f}}}var xm={getCacheForType:function(e){var t=tt(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Sm=typeof WeakMap=="function"?WeakMap:Map,me=0,Ee=null,ue=null,de=0,be=0,yt=null,kn=!1,Qa=!1,hu=!1,ln=0,Ue=0,An=0,ca=0,du=0,Ct=0,Va=0,nr=null,ct=null,pu=!1,gu=0,Nl=1/0,ql=null,Rn=null,Je=0,Cn=null,Za=null,Ka=0,vu=0,mu=null,Nd=null,ar=0,bu=null;function _t(){if((me&2)!==0&&de!==0)return de&-de;if(U.T!==null){var e=Na;return e!==0?e:Tu()}return Ic()}function qd(){Ct===0&&(Ct=(de&536870912)===0||ve?Vc():536870912);var e=Rt.current;return e!==null&&(e.flags|=32),Ct}function xt(e,t,n){(e===Ee&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Ja(e,0),jn(e,de,Ct,!1)),xi(e,n),((me&2)===0||e!==Ee)&&(e===Ee&&((me&2)===0&&(ca|=n),Ue===4&&jn(e,de,Ct,!1)),$t(e))}function Bd(e,t,n){if((me&6)!==0)throw Error(o(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||_i(e,t),u=r?Tm(e,t):xu(e,t,!0),f=r;do{if(u===0){Qa&&!r&&jn(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!wm(n)){u=xu(e,t,!1),f=!1;continue}if(u===2){if(f=t,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var b=e;u=nr;var _=b.current.memoizedState.isDehydrated;if(_&&(Ja(b,v).flags|=256),v=xu(b,v,!1),v!==2){if(hu&&!_){b.errorRecoveryDisabledLanes|=f,ca|=f,u=4;break e}f=ct,ct=u,f!==null&&(ct===null?ct=f:ct.push.apply(ct,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Ja(e,0),jn(e,t,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:jn(r,t,Ct,!kn);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=gu+300-Lt(),10<u)){if(jn(r,t,Ct,!kn),Zr(r,0,!0)!==0)break e;r.timeoutHandle=dp(Ld.bind(null,r,n,ct,ql,pu,t,Ct,ca,Va,kn,f,2,-0,0),u);break e}Ld(r,n,ct,ql,pu,t,Ct,ca,Va,kn,f,0,-0,0)}}break}while(!0);$t(e)}function Ld(e,t,n,r,u,f,v,b,_,C,M,q,j,D){if(e.timeoutHandle=-1,q=t.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(cr={stylesheets:null,count:0,unsuspend:ib},Dd(t),q=lb(),q!==null)){e.cancelPendingCommit=q(Qd.bind(null,e,t,f,n,r,u,v,b,_,M,1,j,D)),jn(e,f,v,!C);return}Qd(e,t,f,n,r,u,v,b,_)}function wm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var u=n[r],f=u.getSnapshot;u=u.value;try{if(!gt(f(),u))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t,n,r){t&=~du,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var u=t;0<u;){var f=31-pt(u),v=1<<f;r[f]=-1,u&=~v}n!==0&&Kc(e,n,t)}function Bl(){return(me&6)===0?(ir(0),!1):!0}function yu(){if(ue!==null){if(be===0)var e=ue.return;else e=ue,It=ia=null,Ns(e),Ga=null,Zi=0,e=ue;for(;e!==null;)bd(e.alternate,e),e=e.return;ue=null}}function Ja(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Hm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),yu(),Ee=e,ue=n=Zt(e.current,null),de=t,be=0,yt=null,kn=!1,Qa=_i(e,t),hu=!1,Va=Ct=du=ca=An=Ue=0,ct=nr=null,pu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var u=31-pt(r),f=1<<u;t|=e[u],r&=~f}return ln=t,ll(),n}function Pd(e,t){oe=null,U.H=Tl,t===Li||t===gl?(t=ah(),be=3):t===eh?(t=ah(),be=4):be=t===id?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ue===null&&(Ue=1,Cl(e,Tt(t,e.current)))}function Hd(){var e=U.H;return U.H=Tl,e===null?Tl:e}function Gd(){var e=U.A;return U.A=xm,e}function _u(){Ue=4,kn||(de&4194048)!==de&&Rt.current!==null||(Qa=!0),(An&134217727)===0&&(ca&134217727)===0||Ee===null||jn(Ee,de,Ct,!1)}function xu(e,t,n){var r=me;me|=2;var u=Hd(),f=Gd();(Ee!==e||de!==t)&&(ql=null,Ja(e,t)),t=!1;var v=Ue;e:do try{if(be!==0&&ue!==null){var b=ue,_=yt;switch(be){case 8:yu(),v=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var C=be;if(be=0,yt=null,Ia(e,b,_,C),n&&Qa){v=0;break e}break;default:C=be,be=0,yt=null,Ia(e,b,_,C)}}Om(),v=Ue;break}catch(M){Pd(e,M)}while(!0);return t&&e.shellSuspendCounter++,It=ia=null,me=r,U.H=u,U.A=f,ue===null&&(Ee=null,de=0,ll()),v}function Om(){for(;ue!==null;)Yd(ue)}function Tm(e,t){var n=me;me|=2;var r=Hd(),u=Gd();Ee!==e||de!==t?(ql=null,Nl=Lt()+500,Ja(e,t)):Qa=_i(e,t);e:do try{if(be!==0&&ue!==null){t=ue;var f=yt;t:switch(be){case 1:be=0,yt=null,Ia(e,t,f,1);break;case 2:case 9:if(th(f)){be=0,yt=null,$d(t);break}t=function(){be!==2&&be!==9||Ee!==e||(be=7),$t(e)},f.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:th(f)?(be=0,yt=null,$d(t)):(be=0,yt=null,Ia(e,t,f,7));break;case 5:var v=null;switch(ue.tag){case 26:v=ue.memoizedState;case 5:case 27:var b=ue;if(!v||Tp(v)){be=0,yt=null;var _=b.sibling;if(_!==null)ue=_;else{var C=b.return;C!==null?(ue=C,Ll(C)):ue=null}break t}}be=0,yt=null,Ia(e,t,f,5);break;case 6:be=0,yt=null,Ia(e,t,f,6);break;case 8:yu(),Ue=6;break e;default:throw Error(o(462))}}Em();break}catch(M){Pd(e,M)}while(!0);return It=ia=null,U.H=r,U.A=u,me=n,ue!==null?0:(Ee=null,de=0,ll(),Ue)}function Em(){for(;ue!==null&&!Zg();)Yd(ue)}function Yd(e){var t=vd(e.alternate,e,ln);e.memoizedProps=e.pendingProps,t===null?Ll(e):ue=t}function $d(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=cd(n,t,t.pendingProps,t.type,void 0,de);break;case 11:t=cd(n,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:Ns(t);default:bd(n,t),t=ue=Xf(t,ln),t=vd(n,t,ln)}e.memoizedProps=e.pendingProps,t===null?Ll(e):ue=t}function Ia(e,t,n,r){It=ia=null,Ns(t),Ga=null,Zi=0;var u=t.return;try{if(gm(e,u,t,n,de)){Ue=1,Cl(e,Tt(n,e.current)),ue=null;return}}catch(f){if(u!==null)throw ue=u,f;Ue=1,Cl(e,Tt(n,e.current)),ue=null;return}t.flags&32768?(ve||r===1?e=!0:Qa||(de&536870912)!==0?e=!1:(kn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Rt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Xd(t,e)):Ll(t)}function Ll(e){var t=e;do{if((t.flags&32768)!==0){Xd(t,kn);return}e=t.return;var n=mm(t.alternate,t,ln);if(n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Ue===0&&(Ue=5)}function Xd(e,t){do{var n=bm(e.alternate,e);if(n!==null){n.flags&=32767,ue=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=n}while(e!==null);Ue=6,ue=null}function Qd(e,t,n,r,u,f,v,b,_){e.cancelPendingCommit=null;do Pl();while(Je!==0);if((me&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(f=t.lanes|t.childLanes,f|=fs,iv(e,n,f,v,b,_),e===Ee&&(ue=Ee=null,de=0),Za=t,Cn=e,Ka=n,vu=f,mu=u,Nd=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cm(Xr,function(){return Id(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,u=$.p,$.p=2,v=me,me|=4;try{ym(e,t,n)}finally{me=v,$.p=u,U.T=r}}Je=1,Vd(),Zd(),Kd()}}function Vd(){if(Je===1){Je=0;var e=Cn,t=Za,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var r=$.p;$.p=2;var u=me;me|=4;try{Rd(t,e);var f=Mu,v=zf(e.containerInfo),b=f.focusedElem,_=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&Uf(b.ownerDocument.documentElement,b)){if(_!==null&&ls(b)){var C=_.start,M=_.end;if(M===void 0&&(M=C),"selectionStart"in b)b.selectionStart=C,b.selectionEnd=Math.min(M,b.value.length);else{var q=b.ownerDocument||document,j=q&&q.defaultView||window;if(j.getSelection){var D=j.getSelection(),ae=b.textContent.length,W=Math.min(_.start,ae),Se=_.end===void 0?W:Math.min(_.end,ae);!D.extend&&W>Se&&(v=Se,Se=W,W=v);var T=Mf(b,W),w=Mf(b,Se);if(T&&w&&(D.rangeCount!==1||D.anchorNode!==T.node||D.anchorOffset!==T.offset||D.focusNode!==w.node||D.focusOffset!==w.offset)){var R=q.createRange();R.setStart(T.node,T.offset),D.removeAllRanges(),W>Se?(D.addRange(R),D.extend(w.node,w.offset)):(R.setEnd(w.node,w.offset),D.addRange(R))}}}}for(q=[],D=b;D=D.parentNode;)D.nodeType===1&&q.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<q.length;b++){var N=q[b];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Fl=!!Du,Mu=Du=null}finally{me=u,$.p=r,U.T=n}}e.current=t,Je=2}}function Zd(){if(Je===2){Je=0;var e=Cn,t=Za,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var r=$.p;$.p=2;var u=me;me|=4;try{Td(e,t.alternate,t)}finally{me=u,$.p=r,U.T=n}}Je=3}}function Kd(){if(Je===4||Je===3){Je=0,Kg();var e=Cn,t=Za,n=Ka,r=Nd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Je=5:(Je=0,Za=Cn=null,Jd(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Rn=null),Lo(n),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(yi,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=U.T,u=$.p,$.p=2,U.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var b=r[v];f(b.value,{componentStack:b.stack})}}finally{U.T=t,$.p=u}}(Ka&3)!==0&&Pl(),$t(e),u=e.pendingLanes,(n&4194090)!==0&&(u&42)!==0?e===bu?ar++:(ar=0,bu=e):ar=0,ir(0)}}function Jd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qi(t)))}function Pl(e){return Vd(),Zd(),Kd(),Id()}function Id(){if(Je!==5)return!1;var e=Cn,t=vu;vu=0;var n=Lo(Ka),r=U.T,u=$.p;try{$.p=32>n?32:n,U.T=null,n=mu,mu=null;var f=Cn,v=Ka;if(Je=0,Za=Cn=null,Ka=0,(me&6)!==0)throw Error(o(331));var b=me;if(me|=4,Ud(f.current),jd(f,f.current,v,n),me=b,ir(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(yi,f)}catch{}return!0}finally{$.p=u,U.T=r,Jd(e,t)}}function Fd(e,t,n){t=Tt(n,t),t=Js(e.stateNode,t,2),e=_n(e,t,2),e!==null&&(xi(e,2),$t(e))}function Te(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=Tt(n,e),n=nd(2),r=_n(t,n,2),r!==null&&(ad(n,r,t,e),xi(r,2),$t(r));break}}t=t.return}}function Su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sm;var u=new Set;r.set(t,u)}else u=r.get(t),u===void 0&&(u=new Set,r.set(t,u));u.has(n)||(hu=!0,u.add(n),e=km.bind(null,e,t,n),t.then(e,e))}function km(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(de&n)===n&&(Ue===4||Ue===3&&(de&62914560)===de&&300>Lt()-gu?(me&2)===0&&Ja(e,0):du|=n,Va===de&&(Va=0)),$t(e)}function Wd(e,t){t===0&&(t=Zc()),e=Da(e,t),e!==null&&(xi(e,t),$t(e))}function Am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wd(e,n)}function Rm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(t),Wd(e,n)}function Cm(e,t){return zo(e,t)}var Hl=null,Fa=null,wu=!1,Gl=!1,Ou=!1,fa=0;function $t(e){e!==Fa&&e.next===null&&(Fa===null?Hl=Fa=e:Fa=Fa.next=e),Gl=!0,wu||(wu=!0,Dm())}function ir(e,t){if(!Ou&&Gl){Ou=!0;do for(var n=!1,r=Hl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-pt(42|e)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,ap(r,f))}else f=de,f=Zr(r,r===Ee?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||_i(r,f)||(n=!0,ap(r,f));r=r.next}while(n);Ou=!1}}function jm(){ep()}function ep(){Gl=wu=!1;var e=0;fa!==0&&(Pm()&&(e=fa),fa=0);for(var t=Lt(),n=null,r=Hl;r!==null;){var u=r.next,f=tp(r,t);f===0?(r.next=null,n===null?Hl=u:n.next=u,u===null&&(Fa=n)):(n=r,(e!==0||(f&3)!==0)&&(Gl=!0)),r=u}ir(e)}function tp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-pt(f),b=1<<v,_=u[v];_===-1?((b&n)===0||(b&r)!==0)&&(u[v]=av(b,t)):_<=t&&(e.expiredLanes|=b),f&=~b}if(t=Ee,n=de,n=Zr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&No(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_i(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&No(r),Lo(n)){case 2:case 8:n=Xc;break;case 32:n=Xr;break;case 268435456:n=Qc;break;default:n=Xr}return r=np.bind(null,e),n=zo(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&No(r),e.callbackPriority=2,e.callbackNode=null,2}function np(e,t){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Pl()&&e.callbackNode!==n)return null;var r=de;return r=Zr(e,e===Ee?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Bd(e,r,t),tp(e,Lt()),e.callbackNode!=null&&e.callbackNode===n?np.bind(null,e):null)}function ap(e,t){if(Pl())return null;Bd(e,t,!0)}function Dm(){Gm(function(){(me&6)!==0?zo($c,jm):ep()})}function Tu(){return fa===0&&(fa=Vc()),fa}function ip(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wr(""+e)}function rp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Mm(e,t,n,r,u){if(t==="submit"&&n&&n.stateNode===u){var f=ip((u[lt]||null).action),v=r.submitter;v&&(t=(t=v[lt]||null)?ip(t.formAction):v.getAttribute("formAction"),t!==null&&(f=t,v=null));var b=new al("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(fa!==0){var _=v?rp(u,v):new FormData(u);Xs(n,{pending:!0,data:_,method:u.method,action:f},null,_)}}else typeof f=="function"&&(b.preventDefault(),_=v?rp(u,v):new FormData(u),Xs(n,{pending:!0,data:_,method:u.method,action:f},f,_))},currentTarget:u}]})}}for(var Eu=0;Eu<cs.length;Eu++){var ku=cs[Eu],Um=ku.toLowerCase(),zm=ku[0].toUpperCase()+ku.slice(1);Dt(Um,"on"+zm)}Dt(Bf,"onAnimationEnd"),Dt(Lf,"onAnimationIteration"),Dt(Pf,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Fv,"onTransitionRun"),Dt(Wv,"onTransitionStart"),Dt(em,"onTransitionCancel"),Dt(Hf,"onTransitionEnd"),Sa("onMouseEnter",["mouseout","mouseover"]),Sa("onMouseLeave",["mouseout","mouseover"]),Sa("onPointerEnter",["pointerout","pointerover"]),Sa("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rr));function lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],u=r.event;r=r.listeners;e:{var f=void 0;if(t)for(var v=r.length-1;0<=v;v--){var b=r[v],_=b.instance,C=b.currentTarget;if(b=b.listener,_!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=C;try{f(u)}catch(M){Rl(M)}u.currentTarget=null,f=_}else for(v=0;v<r.length;v++){if(b=r[v],_=b.instance,C=b.currentTarget,b=b.listener,_!==f&&u.isPropagationStopped())break e;f=b,u.currentTarget=C;try{f(u)}catch(M){Rl(M)}u.currentTarget=null,f=_}}}}function ce(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(op(t,e,2,!1),n.add(r))}function Au(e,t,n){var r=0;t&&(r|=4),op(n,e,r,t)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Ru(e){if(!e[Yl]){e[Yl]=!0,Wc.forEach(function(n){n!=="selectionchange"&&(Nm.has(n)||Au(n,!1,e),Au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yl]||(t[Yl]=!0,Au("selectionchange",!1,t))}}function op(e,t,n,r){switch(jp(t)){case 2:var u=ub;break;case 8:u=cb;break;default:u=Yu}n=u.bind(null,t,n,e),u=void 0,!Io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function Cu(e,t,n,r,u){var f=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=r.return;v!==null;){var _=v.tag;if((_===3||_===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=ya(b),v===null)return;if(_=v.tag,_===5||_===6||_===26||_===27){r=f=v;continue e}b=b.parentNode}}r=r.return}pf(function(){var C=f,M=Ko(n),q=[];e:{var j=Gf.get(e);if(j!==void 0){var D=al,ae=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":D=Cv;break;case"focusin":ae="focus",D=ts;break;case"focusout":ae="blur",D=ts;break;case"beforeblur":case"afterblur":D=ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Mv;break;case Bf:case Lf:case Pf:D=xv;break;case Hf:D=zv;break;case"scroll":case"scrollend":D=vv;break;case"wheel":D=qv;break;case"copy":case"cut":case"paste":D=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=yf;break;case"toggle":case"beforetoggle":D=Lv}var W=(t&4)!==0,Se=!W&&(e==="scroll"||e==="scrollend"),T=W?j!==null?j+"Capture":null:j;W=[];for(var w=C,R;w!==null;){var N=w;if(R=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||R===null||T===null||(N=Oi(w,T),N!=null&&W.push(lr(w,N,R))),Se)break;w=w.return}0<W.length&&(j=new D(j,ae,null,n,M),q.push({event:j,listeners:W}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",j&&n!==Zo&&(ae=n.relatedTarget||n.fromElement)&&(ya(ae)||ae[ba]))break e;if((D||j)&&(j=M.window===M?M:(j=M.ownerDocument)?j.defaultView||j.parentWindow:window,D?(ae=n.relatedTarget||n.toElement,D=C,ae=ae?ya(ae):null,ae!==null&&(Se=c(ae),W=ae.tag,ae!==Se||W!==5&&W!==27&&W!==6)&&(ae=null)):(D=null,ae=C),D!==ae)){if(W=mf,N="onMouseLeave",T="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(W=yf,N="onPointerLeave",T="onPointerEnter",w="pointer"),Se=D==null?j:wi(D),R=ae==null?j:wi(ae),j=new W(N,w+"leave",D,n,M),j.target=Se,j.relatedTarget=R,N=null,ya(M)===C&&(W=new W(T,w+"enter",ae,n,M),W.target=R,W.relatedTarget=Se,N=W),Se=N,D&&ae)t:{for(W=D,T=ae,w=0,R=W;R;R=Wa(R))w++;for(R=0,N=T;N;N=Wa(N))R++;for(;0<w-R;)W=Wa(W),w--;for(;0<R-w;)T=Wa(T),R--;for(;w--;){if(W===T||T!==null&&W===T.alternate)break t;W=Wa(W),T=Wa(T)}W=null}else W=null;D!==null&&sp(q,j,D,W,!1),ae!==null&&Se!==null&&sp(q,Se,ae,W,!0)}}e:{if(j=C?wi(C):window,D=j.nodeName&&j.nodeName.toLowerCase(),D==="select"||D==="input"&&j.type==="file")var Z=kf;else if(Tf(j))if(Af)Z=Kv;else{Z=Vv;var se=Qv}else D=j.nodeName,!D||D.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?C&&Vo(C.elementType)&&(Z=kf):Z=Zv;if(Z&&(Z=Z(e,C))){Ef(q,Z,n,M);break e}se&&se(e,j,C),e==="focusout"&&C&&j.type==="number"&&C.memoizedProps.value!=null&&Qo(j,"number",j.value)}switch(se=C?wi(C):window,e){case"focusin":(Tf(se)||se.contentEditable==="true")&&(Ra=se,os=C,Di=null);break;case"focusout":Di=os=Ra=null;break;case"mousedown":ss=!0;break;case"contextmenu":case"mouseup":case"dragend":ss=!1,Nf(q,n,M);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Nf(q,n,M)}var I;if(as)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Aa?wf(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&(_f&&n.locale!=="ko"&&(Aa||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Aa&&(I=gf()):(vn=M,Fo="value"in vn?vn.value:vn.textContent,Aa=!0)),se=$l(C,ee),0<se.length&&(ee=new bf(ee,e,null,n,M),q.push({event:ee,listeners:se}),I?ee.data=I:(I=Of(n),I!==null&&(ee.data=I)))),(I=Hv?Gv(e,n):Yv(e,n))&&(ee=$l(C,"onBeforeInput"),0<ee.length&&(se=new bf("onBeforeInput","beforeinput",null,n,M),q.push({event:se,listeners:ee}),se.data=I)),Mm(q,e,C,n,M)}lp(q,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Oi(e,n),u!=null&&r.unshift(lr(e,u,f)),u=Oi(e,t),u!=null&&r.push(lr(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Wa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sp(e,t,n,r,u){for(var f=t._reactName,v=[];n!==null&&n!==r;){var b=n,_=b.alternate,C=b.stateNode;if(b=b.tag,_!==null&&_===r)break;b!==5&&b!==26&&b!==27||C===null||(_=C,u?(C=Oi(n,f),C!=null&&v.unshift(lr(n,C,_))):u||(C=Oi(n,f),C!=null&&v.push(lr(n,C,_)))),n=n.return}v.length!==0&&e.push({event:t,listeners:v})}var qm=/\r\n?/g,Bm=/\u0000|\uFFFD/g;function up(e){return(typeof e=="string"?e:""+e).replace(qm,`
`).replace(Bm,"")}function cp(e,t){return t=up(t),up(e)===t}function Xl(){}function xe(e,t,n,r,u,f){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Ta(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Ta(e,""+r);break;case"className":Jr(e,"class",r);break;case"tabIndex":Jr(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jr(e,n,r);break;case"style":hf(e,r,f);break;case"data":if(t!=="object"){Jr(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Wr(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&xe(e,t,"name",u.name,u,null),xe(e,t,"formEncType",u.formEncType,u,null),xe(e,t,"formMethod",u.formMethod,u,null),xe(e,t,"formTarget",u.formTarget,u,null)):(xe(e,t,"encType",u.encType,u,null),xe(e,t,"method",u.method,u,null),xe(e,t,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Wr(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=Xl);break;case"onScroll":r!=null&&ce("scroll",e);break;case"onScrollEnd":r!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Wr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":ce("beforetoggle",e),ce("toggle",e),Kr(e,"popover",r);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Kr(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=pv.get(n)||n,Kr(e,n,r))}}function ju(e,t,n,r,u,f){switch(n){case"style":hf(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Ta(e,r):(typeof r=="number"||typeof r=="bigint")&&Ta(e,""+r);break;case"onScroll":r!=null&&ce("scroll",e);break;case"onScrollEnd":r!=null&&ce("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ef.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),t=n.slice(2,u?n.length-7:void 0),f=e[lt]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,u);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Kr(e,n,r)}}}function Ie(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var r=!1,u=!1,f;for(f in n)if(n.hasOwnProperty(f)){var v=n[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,f,v,n,null)}}u&&xe(e,t,"srcSet",n.srcSet,n,null),r&&xe(e,t,"src",n.src,n,null);return;case"input":ce("invalid",e);var b=f=v=u=null,_=null,C=null;for(r in n)if(n.hasOwnProperty(r)){var M=n[r];if(M!=null)switch(r){case"name":u=M;break;case"type":v=M;break;case"checked":_=M;break;case"defaultChecked":C=M;break;case"value":f=M;break;case"defaultValue":b=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:xe(e,t,r,M,n,null)}}sf(e,f,b,_,C,v,u,!1),Ir(e);return;case"select":ce("invalid",e),r=v=f=null;for(u in n)if(n.hasOwnProperty(u)&&(b=n[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:xe(e,t,u,b,n,null)}t=f,n=v,e.multiple=!!r,t!=null?Oa(e,!!r,t,!1):n!=null&&Oa(e,!!r,n,!0);return;case"textarea":ce("invalid",e),f=u=r=null;for(v in n)if(n.hasOwnProperty(v)&&(b=n[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:xe(e,t,v,b,n,null)}cf(e,r,u,f),Ir(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(r=n[_],r!=null))switch(_){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:xe(e,t,_,r,n,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(r=0;r<rr.length;r++)ce(rr[r],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(r=n[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,C,r,n,null)}return;default:if(Vo(t)){for(M in n)n.hasOwnProperty(M)&&(r=n[M],r!==void 0&&ju(e,t,M,r,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(r=n[b],r!=null&&xe(e,t,b,r,n,null))}function Lm(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,_=null,C=null,M=null;for(D in n){var q=n[D];if(n.hasOwnProperty(D)&&q!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":_=q;default:r.hasOwnProperty(D)||xe(e,t,D,null,r,q)}}for(var j in r){var D=r[j];if(q=n[j],r.hasOwnProperty(j)&&(D!=null||q!=null))switch(j){case"type":f=D;break;case"name":u=D;break;case"checked":C=D;break;case"defaultChecked":M=D;break;case"value":v=D;break;case"defaultValue":b=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:D!==q&&xe(e,t,j,D,r,q)}}Xo(e,v,b,_,C,M,f,u);return;case"select":D=v=b=j=null;for(f in n)if(_=n[f],n.hasOwnProperty(f)&&_!=null)switch(f){case"value":break;case"multiple":D=_;default:r.hasOwnProperty(f)||xe(e,t,f,null,r,_)}for(u in r)if(f=r[u],_=n[u],r.hasOwnProperty(u)&&(f!=null||_!=null))switch(u){case"value":j=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==_&&xe(e,t,u,f,r,_)}t=b,n=v,r=D,j!=null?Oa(e,!!n,j,!1):!!r!=!!n&&(t!=null?Oa(e,!!n,t,!0):Oa(e,!!n,n?[]:"",!1));return;case"textarea":D=j=null;for(b in n)if(u=n[b],n.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:xe(e,t,b,null,r,u)}for(v in r)if(u=r[v],f=n[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":j=u;break;case"defaultValue":D=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==f&&xe(e,t,v,u,r,f)}uf(e,j,D);return;case"option":for(var ae in n)if(j=n[ae],n.hasOwnProperty(ae)&&j!=null&&!r.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:xe(e,t,ae,null,r,j)}for(_ in r)if(j=r[_],D=n[_],r.hasOwnProperty(_)&&j!==D&&(j!=null||D!=null))switch(_){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:xe(e,t,_,j,r,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)j=n[W],n.hasOwnProperty(W)&&j!=null&&!r.hasOwnProperty(W)&&xe(e,t,W,null,r,j);for(C in r)if(j=r[C],D=n[C],r.hasOwnProperty(C)&&j!==D&&(j!=null||D!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:xe(e,t,C,j,r,D)}return;default:if(Vo(t)){for(var Se in n)j=n[Se],n.hasOwnProperty(Se)&&j!==void 0&&!r.hasOwnProperty(Se)&&ju(e,t,Se,void 0,r,j);for(M in r)j=r[M],D=n[M],!r.hasOwnProperty(M)||j===D||j===void 0&&D===void 0||ju(e,t,M,j,r,D);return}}for(var T in n)j=n[T],n.hasOwnProperty(T)&&j!=null&&!r.hasOwnProperty(T)&&xe(e,t,T,null,r,j);for(q in r)j=r[q],D=n[q],!r.hasOwnProperty(q)||j===D||j==null&&D==null||xe(e,t,q,j,r,D)}var Du=null,Mu=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zu=null;function Pm(){var e=window.event;return e&&e.type==="popstate"?e===zu?!1:(zu=e,!0):(zu=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,Gm=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(e){return pp.resolve(null).then(e).catch(Ym)}:dp;function Ym(e){setTimeout(function(){throw e})}function Dn(e){return e==="head"}function gp(e,t){var n=t,r=0,u=0;do{var f=n.nextSibling;if(e.removeChild(n),f&&f.nodeType===8)if(n=f.data,n==="/$"){if(0<r&&8>r){n=r;var v=e.ownerDocument;if(n&1&&or(v.documentElement),n&2&&or(v.body),n&4)for(n=v.head,or(n),v=n.firstChild;v;){var b=v.nextSibling,_=v.nodeName;v[Si]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&v.rel.toLowerCase()==="stylesheet"||n.removeChild(v),v=b}}if(u===0){e.removeChild(f),gr(t);return}u--}else n==="$"||n==="$?"||n==="$!"?u++:r=n.charCodeAt(0)-48;else r=0;n=f}while(n);gr(t)}function Nu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Nu(n),Ho(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $m(e,t,n,r){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Si])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Xm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Qm(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Bu=null;function vp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function mp(e,t,n){switch(t=Ql(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function or(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ho(e)}var jt=new Map,bp=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=$.d;$.d={f:Vm,r:Zm,D:Km,C:Jm,L:Im,m:Fm,X:eb,S:Wm,M:tb};function Vm(){var e=on.f(),t=Bl();return e||t}function Zm(e){var t=_a(e);t!==null&&t.tag===5&&t.type==="form"?Bh(t):on.r(e)}var ei=typeof document>"u"?null:document;function yp(e,t,n){var r=ei;if(r&&typeof t=="string"&&t){var u=Ot(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),bp.has(u)||(bp.add(u),e={rel:e,crossOrigin:n,href:t},r.querySelector(u)===null&&(t=r.createElement("link"),Ie(t,"link",e),Ye(t),r.head.appendChild(t)))}}function Km(e){on.D(e),yp("dns-prefetch",e,null)}function Jm(e,t){on.C(e,t),yp("preconnect",e,t)}function Im(e,t,n){on.L(e,t,n);var r=ei;if(r&&e&&t){var u='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Ot(n.imageSizes)+'"]')):u+='[href="'+Ot(e)+'"]';var f=u;switch(t){case"style":f=ti(e);break;case"script":f=ni(e)}jt.has(f)||(e=m({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),jt.set(f,e),r.querySelector(u)!==null||t==="style"&&r.querySelector(sr(f))||t==="script"&&r.querySelector(ur(f))||(t=r.createElement("link"),Ie(t,"link",e),Ye(t),r.head.appendChild(t)))}}function Fm(e,t){on.m(e,t);var n=ei;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Ot(r)+'"][href="'+Ot(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ni(e)}if(!jt.has(f)&&(e=m({rel:"modulepreload",href:e},t),jt.set(f,e),n.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ur(f)))return}r=n.createElement("link"),Ie(r,"link",e),Ye(r),n.head.appendChild(r)}}}function Wm(e,t,n){on.S(e,t,n);var r=ei;if(r&&e){var u=xa(r).hoistableStyles,f=ti(e);t=t||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(sr(f)))b.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":t},n),(n=jt.get(f))&&Lu(e,n);var _=v=r.createElement("link");Ye(_),Ie(_,"link",e),_._p=new Promise(function(C,M){_.onload=C,_.onerror=M}),_.addEventListener("load",function(){b.loading|=1}),_.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Zl(v,t,r)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function eb(e,t){on.X(e,t);var n=ei;if(n&&e){var r=xa(n).hoistableScripts,u=ni(e),f=r.get(u);f||(f=n.querySelector(ur(u)),f||(e=m({src:e,async:!0},t),(t=jt.get(u))&&Pu(e,t),f=n.createElement("script"),Ye(f),Ie(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function tb(e,t){on.M(e,t);var n=ei;if(n&&e){var r=xa(n).hoistableScripts,u=ni(e),f=r.get(u);f||(f=n.querySelector(ur(u)),f||(e=m({src:e,async:!0,type:"module"},t),(t=jt.get(u))&&Pu(e,t),f=n.createElement("script"),Ye(f),Ie(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function _p(e,t,n,r){var u=(u=ie.current)?Vl(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ti(n.href),n=xa(u).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ti(n.href);var f=xa(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(sr(e)))&&!f._p&&(v.instance=f,v.state.loading=5),jt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},jt.set(e,n),f||nb(u,e,n,v.state))),t&&r===null)throw Error(o(528,""));return v}if(t&&r!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ni(n),n=xa(u).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function ti(e){return'href="'+Ot(e)+'"'}function sr(e){return'link[rel="stylesheet"]['+e+"]"}function xp(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function nb(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Ie(t,"link",n),Ye(t),e.head.appendChild(t))}function ni(e){return'[src="'+Ot(e)+'"]'}function ur(e){return"script[async]"+e}function Sp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(r)return t.instance=r,Ye(r),r;var u=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ye(r),Ie(r,"style",u),Zl(r,n.precedence,e),t.instance=r;case"stylesheet":u=ti(n.href);var f=e.querySelector(sr(u));if(f)return t.state.loading|=4,t.instance=f,Ye(f),f;r=xp(n),(u=jt.get(u))&&Lu(r,u),f=(e.ownerDocument||e).createElement("link"),Ye(f);var v=f;return v._p=new Promise(function(b,_){v.onload=b,v.onerror=_}),Ie(f,"link",r),t.state.loading|=4,Zl(f,n.precedence,e),t.instance=f;case"script":return f=ni(n.src),(u=e.querySelector(ur(f)))?(t.instance=u,Ye(u),u):(r=n,(u=jt.get(f))&&(r=m({},n),Pu(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ye(u),Ie(u,"link",r),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Zl(r,n.precedence,e));return t.instance}function Zl(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===t)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Kl=null;function wp(e,t,n){if(Kl===null){var r=new Map,u=Kl=new Map;u.set(n,r)}else u=Kl,r=u.get(n),r||(r=new Map,u.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var f=n[u];if(!(f[Si]||f[et]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(t)||"";v=e+v;var b=r.get(v);b?b.push(f):r.set(v,[f])}}return r}function Op(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ab(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Tp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var cr=null;function ib(){}function rb(e,t,n){if(cr===null)throw Error(o(475));var r=cr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=ti(n.href),f=e.querySelector(sr(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Jl.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=f,Ye(f);return}f=e.ownerDocument||e,n=xp(n),(u=jt.get(u))&&Lu(n,u),f=f.createElement("link"),Ye(f);var v=f;v._p=new Promise(function(b,_){v.onload=b,v.onerror=_}),Ie(f,"link",n),t.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=Jl.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function lb(){if(cr===null)throw Error(o(475));var e=cr;return e.stylesheets&&e.count===0&&Hu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Hu(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Jl(){if(this.count--,this.count===0){if(this.stylesheets)Hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function Hu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,t.forEach(ob,e),Il=null,Jl.call(e))}function ob(e,t){if(!(t.state.loading&4)){var n=Il.get(e);if(n)var r=n.get(null);else{n=new Map,Il.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),r=v)}r&&n.set(null,r)}u=t.instance,v=u.getAttribute("data-precedence"),f=n.get(v)||r,f===r&&n.set(null,u),n.set(v,u),this.count++,r=Jl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var fr={$$typeof:z,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function sb(e,t,n,r,u,f,v,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.hiddenUpdates=qo(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Ep(e,t,n,r,u,f,v,b,_,C,M,q){return e=new sb(e,t,n,v,b,_,C,q),t=1,f===!0&&(t|=24),f=vt(3,null,null,t),e.current=f,f.stateNode=e,t=Ss(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:r,isDehydrated:n,cache:t},Es(f),e}function kp(e){return e?(e=Ma,e):Ma}function Ap(e,t,n,r,u,f){u=kp(u),r.context===null?r.context=u:r.pendingContext=u,r=yn(t),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=_n(e,r,t),n!==null&&(xt(n,e,t),Hi(n,e,t))}function Rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gu(e,t){Rp(e,t),(e=e.alternate)&&Rp(e,t)}function Cp(e){if(e.tag===13){var t=Da(e,67108864);t!==null&&xt(t,e,67108864),Gu(e,67108864)}}var Fl=!0;function ub(e,t,n,r){var u=U.T;U.T=null;var f=$.p;try{$.p=2,Yu(e,t,n,r)}finally{$.p=f,U.T=u}}function cb(e,t,n,r){var u=U.T;U.T=null;var f=$.p;try{$.p=8,Yu(e,t,n,r)}finally{$.p=f,U.T=u}}function Yu(e,t,n,r){if(Fl){var u=$u(r);if(u===null)Cu(e,t,r,Wl,n),Dp(e,r);else if(hb(u,e,t,n,r))r.stopPropagation();else if(Dp(e,r),t&4&&-1<fb.indexOf(e)){for(;u!==null;){var f=_a(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Zn(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var _=1<<31-pt(v);b.entanglements[1]|=_,v&=~_}$t(f),(me&6)===0&&(Nl=Lt()+500,ir(0))}}break;case 13:b=Da(f,2),b!==null&&xt(b,f,2),Bl(),Gu(f,2)}if(f=$u(r),f===null&&Cu(e,t,r,Wl,n),f===u)break;u=f}u!==null&&r.stopPropagation()}else Cu(e,t,r,null,n)}}function $u(e){return e=Ko(e),Xu(e)}var Wl=null;function Xu(e){if(Wl=null,e=ya(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wl=e,null}function jp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jg()){case $c:return 2;case Xc:return 8;case Xr:case Ig:return 32;case Qc:return 268435456;default:return 32}default:return 32}}var Qu=!1,Mn=null,Un=null,zn=null,hr=new Map,dr=new Map,Nn=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dp(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function pr(e,t,n,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},t!==null&&(t=_a(t),t!==null&&Cp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function hb(e,t,n,r,u){switch(t){case"focusin":return Mn=pr(Mn,e,t,n,r,u),!0;case"dragenter":return Un=pr(Un,e,t,n,r,u),!0;case"mouseover":return zn=pr(zn,e,t,n,r,u),!0;case"pointerover":var f=u.pointerId;return hr.set(f,pr(hr.get(f)||null,e,t,n,r,u)),!0;case"gotpointercapture":return f=u.pointerId,dr.set(f,pr(dr.get(f)||null,e,t,n,r,u)),!0}return!1}function Mp(e){var t=ya(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,rv(e.priority,function(){if(n.tag===13){var r=_t();r=Bo(r);var u=Da(n,r);u!==null&&xt(u,n,r),Gu(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$u(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zo=r,n.target.dispatchEvent(r),Zo=null}else return t=_a(n),t!==null&&Cp(t),e.blockedOn=n,!1;t.shift()}return!0}function Up(e,t,n){eo(e)&&n.delete(t)}function db(){Qu=!1,Mn!==null&&eo(Mn)&&(Mn=null),Un!==null&&eo(Un)&&(Un=null),zn!==null&&eo(zn)&&(zn=null),hr.forEach(Up),dr.forEach(Up)}function to(e,t){e.blockedOn===t&&(e.blockedOn=null,Qu||(Qu=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,db)))}var no=null;function zp(e){no!==e&&(no=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){no===e&&(no=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],u=e[t+2];if(typeof r!="function"){if(Xu(r||n)===null)continue;break}var f=_a(n);f!==null&&(e.splice(t,3),t-=3,Xs(f,{pending:!0,data:u,method:n.method,action:r},r,u))}}))}function gr(e){function t(_){return to(_,e)}Mn!==null&&to(Mn,e),Un!==null&&to(Un,e),zn!==null&&to(zn,e),hr.forEach(t),dr.forEach(t);for(var n=0;n<Nn.length;n++){var r=Nn[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)Mp(n),n.blockedOn===null&&Nn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var u=n[r],f=n[r+1],v=u[lt]||null;if(typeof f=="function")v||zp(n);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[lt]||null)b=v.formAction;else if(Xu(u)!==null)continue}else b=v.action;typeof b=="function"?n[r+1]=b:(n.splice(r,3),r-=3),zp(n)}}}function Vu(e){this._internalRoot=e}ao.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,r=_t();Ap(n,r,e,t,null,null)},ao.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ap(e.current,2,null,e,null,null),Bl(),t[ba]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ic();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&Mp(e)}};var Np=a.version;if(Np!=="19.1.0")throw Error(o(527,Np,"19.1.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=d(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var pb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{yi=io.inject(pb),dt=io}catch{}}return mr.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",u=Fh,f=Wh,v=ed,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=Ep(e,1,!1,null,null,n,r,u,f,v,b,null),e[ba]=t.current,Ru(e),new Vu(t)},mr.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,u="",f=Fh,v=Wh,b=ed,_=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=Ep(e,1,!0,t,n??null,r,u,f,v,b,_,C),t.context=kp(null),n=t.current,r=_t(),r=Bo(r),u=yn(r),u.callback=null,_n(n,u,r),n=r,t.current.lanes=n,xi(t,n),$t(t),e[ba]=t.current,Ru(e),new ao(t)},mr.version="19.1.0",mr}var Qp;function Ab(){if(Qp)return Ju.exports;Qp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Ju.exports=kb(),Ju.exports}var Rb=Ab();function Ge(l,a){a===void 0&&(a={});var i=a.insertAt;if(l&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",i==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=l:s.appendChild(document.createTextNode(l))}}Ge(`.react-loading-indicator-normalize,
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
}`);var he=function(){return he=Object.assign||function(l){for(var a,i=1,o=arguments.length;i<o;i++)for(var s in a=arguments[i])Object.prototype.hasOwnProperty.call(a,s)&&(l[s]=a[s]);return l},he.apply(this,arguments)};function xo(l){return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},xo(l)}var Cb=/^\s+/,jb=/\s+$/;function J(l,a){if(a=a||{},(l=l||"")instanceof J)return l;if(!(this instanceof J))return new J(l,a);var i=function(o){var s={r:0,g:0,b:0},c=1,h=null,g=null,d=null,p=!1,m=!1;typeof o=="string"&&(o=function(O){O=O.replace(Cb,"").replace(jb,"").toLowerCase();var E,A=!1;if(hc[O])O=hc[O],A=!0;else if(O=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(E=zt.rgb.exec(O))?{r:E[1],g:E[2],b:E[3]}:(E=zt.rgba.exec(O))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=zt.hsl.exec(O))?{h:E[1],s:E[2],l:E[3]}:(E=zt.hsla.exec(O))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=zt.hsv.exec(O))?{h:E[1],s:E[2],v:E[3]}:(E=zt.hsva.exec(O))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=zt.hex8.exec(O))?{r:St(E[1]),g:St(E[2]),b:St(E[3]),a:Fp(E[4]),format:A?"name":"hex8"}:(E=zt.hex6.exec(O))?{r:St(E[1]),g:St(E[2]),b:St(E[3]),format:A?"name":"hex"}:(E=zt.hex4.exec(O))?{r:St(E[1]+""+E[1]),g:St(E[2]+""+E[2]),b:St(E[3]+""+E[3]),a:Fp(E[4]+""+E[4]),format:A?"name":"hex8"}:(E=zt.hex3.exec(O))?{r:St(E[1]+""+E[1]),g:St(E[2]+""+E[2]),b:St(E[3]+""+E[3]),format:A?"name":"hex"}:!1}(o)),xo(o)=="object"&&(sn(o.r)&&sn(o.g)&&sn(o.b)?(y=o.r,x=o.g,k=o.b,s={r:255*je(y,255),g:255*je(x,255),b:255*je(k,255)},p=!0,m=String(o.r).substr(-1)==="%"?"prgb":"rgb"):sn(o.h)&&sn(o.s)&&sn(o.v)?(h=wr(o.s),g=wr(o.v),s=function(O,E,A){O=6*je(O,360),E=je(E,100),A=je(A,100);var L=Math.floor(O),V=O-L,z=A*(1-E),P=A*(1-V*E),H=A*(1-(1-V)*E),X=L%6,ne=[A,P,z,z,H,A][X],Ae=[H,A,A,P,z,z][X],we=[z,z,H,A,A,P][X];return{r:255*ne,g:255*Ae,b:255*we}}(o.h,h,g),p=!0,m="hsv"):sn(o.h)&&sn(o.s)&&sn(o.l)&&(h=wr(o.s),d=wr(o.l),s=function(O,E,A){var L,V,z;function P(ne,Ae,we){return we<0&&(we+=1),we>1&&(we-=1),we<1/6?ne+6*(Ae-ne)*we:we<.5?Ae:we<2/3?ne+(Ae-ne)*(2/3-we)*6:ne}if(O=je(O,360),E=je(E,100),A=je(A,100),E===0)L=V=z=A;else{var H=A<.5?A*(1+E):A+E-A*E,X=2*A-H;L=P(X,H,O+1/3),V=P(X,H,O),z=P(X,H,O-1/3)}return{r:255*L,g:255*V,b:255*z}}(o.h,h,d),p=!0,m="hsl"),o.hasOwnProperty("a")&&(c=o.a));var y,x,k;return c=J0(c),{ok:p,format:o.format||m,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:c}}(l);this._originalInput=l,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=a.format||i.format,this._gradientType=a.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function Vp(l,a,i){l=je(l,255),a=je(a,255),i=je(i,255);var o,s,c=Math.max(l,a,i),h=Math.min(l,a,i),g=(c+h)/2;if(c==h)o=s=0;else{var d=c-h;switch(s=g>.5?d/(2-c-h):d/(c+h),c){case l:o=(a-i)/d+(a<i?6:0);break;case a:o=(i-l)/d+2;break;case i:o=(l-a)/d+4}o/=6}return{h:o,s,l:g}}function Zp(l,a,i){l=je(l,255),a=je(a,255),i=je(i,255);var o,s,c=Math.max(l,a,i),h=Math.min(l,a,i),g=c,d=c-h;if(s=c===0?0:d/c,c==h)o=0;else{switch(c){case l:o=(a-i)/d+(a<i?6:0);break;case a:o=(i-l)/d+2;break;case i:o=(l-a)/d+4}o/=6}return{h:o,s,v:g}}function Kp(l,a,i,o){var s=[Bt(Math.round(l).toString(16)),Bt(Math.round(a).toString(16)),Bt(Math.round(i).toString(16))];return o&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Jp(l,a,i,o){return[Bt(I0(o)),Bt(Math.round(l).toString(16)),Bt(Math.round(a).toString(16)),Bt(Math.round(i).toString(16))].join("")}function Db(l,a){a=a===0?0:a||10;var i=J(l).toHsl();return i.s-=a/100,i.s=Ao(i.s),J(i)}function Mb(l,a){a=a===0?0:a||10;var i=J(l).toHsl();return i.s+=a/100,i.s=Ao(i.s),J(i)}function Ub(l){return J(l).desaturate(100)}function zb(l,a){a=a===0?0:a||10;var i=J(l).toHsl();return i.l+=a/100,i.l=Ao(i.l),J(i)}function Nb(l,a){a=a===0?0:a||10;var i=J(l).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-a/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-a/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-a/100*255))),J(i)}function qb(l,a){a=a===0?0:a||10;var i=J(l).toHsl();return i.l-=a/100,i.l=Ao(i.l),J(i)}function Bb(l,a){var i=J(l).toHsl(),o=(i.h+a)%360;return i.h=o<0?360+o:o,J(i)}function Lb(l){var a=J(l).toHsl();return a.h=(a.h+180)%360,J(a)}function Ip(l,a){if(isNaN(a)||a<=0)throw new Error("Argument to polyad must be a positive number");for(var i=J(l).toHsl(),o=[J(l)],s=360/a,c=1;c<a;c++)o.push(J({h:(i.h+c*s)%360,s:i.s,l:i.l}));return o}function Pb(l){var a=J(l).toHsl(),i=a.h;return[J(l),J({h:(i+72)%360,s:a.s,l:a.l}),J({h:(i+216)%360,s:a.s,l:a.l})]}function Hb(l,a,i){a=a||6,i=i||30;var o=J(l).toHsl(),s=360/i,c=[J(l)];for(o.h=(o.h-(s*a>>1)+720)%360;--a;)o.h=(o.h+s)%360,c.push(J(o));return c}function Gb(l,a){a=a||6;for(var i=J(l).toHsv(),o=i.h,s=i.s,c=i.v,h=[],g=1/a;a--;)h.push(J({h:o,s,v:c})),c=(c+g)%1;return h}J.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,a,i,o=this.toRgb();return l=o.r/255,a=o.g/255,i=o.b/255,.2126*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.7152*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(l){return this._a=J0(l),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var l=Zp(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=Zp(this._r,this._g,this._b),a=Math.round(360*l.h),i=Math.round(100*l.s),o=Math.round(100*l.v);return this._a==1?"hsv("+a+", "+i+"%, "+o+"%)":"hsva("+a+", "+i+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var l=Vp(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=Vp(this._r,this._g,this._b),a=Math.round(360*l.h),i=Math.round(100*l.s),o=Math.round(100*l.l);return this._a==1?"hsl("+a+", "+i+"%, "+o+"%)":"hsla("+a+", "+i+"%, "+o+"%, "+this._roundA+")"},toHex:function(l){return Kp(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return function(a,i,o,s,c){var h=[Bt(Math.round(a).toString(16)),Bt(Math.round(i).toString(16)),Bt(Math.round(o).toString(16)),Bt(I0(s))];return c&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*je(this._r,255))+"%",g:Math.round(100*je(this._g,255))+"%",b:Math.round(100*je(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*je(this._r,255))+"%, "+Math.round(100*je(this._g,255))+"%, "+Math.round(100*je(this._b,255))+"%)":"rgba("+Math.round(100*je(this._r,255))+"%, "+Math.round(100*je(this._g,255))+"%, "+Math.round(100*je(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Yb[Kp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var a="#"+Jp(this._r,this._g,this._b,this._a),i=a,o=this._gradientType?"GradientType = 1, ":"";if(l){var s=J(l);i="#"+Jp(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+a+",endColorstr="+i+")"},toString:function(l){var a=!!l;l=l||this._format;var i=!1,o=this._a<1&&this._a>=0;return a||!o||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(i=this.toRgbString()),l==="prgb"&&(i=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(i=this.toHexString()),l==="hex3"&&(i=this.toHexString(!0)),l==="hex4"&&(i=this.toHex8String(!0)),l==="hex8"&&(i=this.toHex8String()),l==="name"&&(i=this.toName()),l==="hsl"&&(i=this.toHslString()),l==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return J(this.toString())},_applyModification:function(l,a){var i=l.apply(null,[this].concat([].slice.call(a)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(zb,arguments)},brighten:function(){return this._applyModification(Nb,arguments)},darken:function(){return this._applyModification(qb,arguments)},desaturate:function(){return this._applyModification(Db,arguments)},saturate:function(){return this._applyModification(Mb,arguments)},greyscale:function(){return this._applyModification(Ub,arguments)},spin:function(){return this._applyModification(Bb,arguments)},_applyCombination:function(l,a){return l.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(Hb,arguments)},complement:function(){return this._applyCombination(Lb,arguments)},monochromatic:function(){return this._applyCombination(Gb,arguments)},splitcomplement:function(){return this._applyCombination(Pb,arguments)},triad:function(){return this._applyCombination(Ip,[3])},tetrad:function(){return this._applyCombination(Ip,[4])}},J.fromRatio=function(l,a){if(xo(l)=="object"){var i={};for(var o in l)l.hasOwnProperty(o)&&(i[o]=o==="a"?l[o]:wr(l[o]));l=i}return J(l,a)},J.equals=function(l,a){return!(!l||!a)&&J(l).toRgbString()==J(a).toRgbString()},J.random=function(){return J.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},J.mix=function(l,a,i){i=i===0?0:i||50;var o=J(l).toRgb(),s=J(a).toRgb(),c=i/100;return J({r:(s.r-o.r)*c+o.r,g:(s.g-o.g)*c+o.g,b:(s.b-o.b)*c+o.b,a:(s.a-o.a)*c+o.a})},J.readability=function(l,a){var i=J(l),o=J(a);return(Math.max(i.getLuminance(),o.getLuminance())+.05)/(Math.min(i.getLuminance(),o.getLuminance())+.05)},J.isReadable=function(l,a,i){var o,s,c=J.readability(l,a);switch(s=!1,(o=function(h){var g,d;return g=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),d=(h.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),d!=="small"&&d!=="large"&&(d="small"),{level:g,size:d}}(i)).level+o.size){case"AAsmall":case"AAAlarge":s=c>=4.5;break;case"AAlarge":s=c>=3;break;case"AAAsmall":s=c>=7}return s},J.mostReadable=function(l,a,i){var o,s,c,h,g=null,d=0;s=(i=i||{}).includeFallbackColors,c=i.level,h=i.size;for(var p=0;p<a.length;p++)(o=J.readability(l,a[p]))>d&&(d=o,g=J(a[p]));return J.isReadable(l,g,{level:c,size:h})||!s?g:(i.includeFallbackColors=!1,J.mostReadable(l,["#fff","#000"],i))};var hc=J.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Yb=J.hexNames=function(l){var a={};for(var i in l)l.hasOwnProperty(i)&&(a[l[i]]=i);return a}(hc);function J0(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function je(l,a){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(l)&&(l="100%");var i=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(l);return l=Math.min(a,Math.max(0,parseFloat(l))),i&&(l=parseInt(l*a,10)/100),Math.abs(l-a)<1e-6?1:l%a/parseFloat(a)}function Ao(l){return Math.min(1,Math.max(0,l))}function St(l){return parseInt(l,16)}function Bt(l){return l.length==1?"0"+l:""+l}function wr(l){return l<=1&&(l=100*l+"%"),l}function I0(l){return Math.round(255*parseFloat(l)).toString(16)}function Fp(l){return St(l)/255}var Ln,ro,lo,zt=(ro="[\\s|\\(]+("+(Ln="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ln+")[,|\\s]+("+Ln+")\\s*\\)?",lo="[\\s|\\(]+("+Ln+")[,|\\s]+("+Ln+")[,|\\s]+("+Ln+")[,|\\s]+("+Ln+")\\s*\\)?",{CSS_UNIT:new RegExp(Ln),rgb:new RegExp("rgb"+ro),rgba:new RegExp("rgba"+lo),hsl:new RegExp("hsl"+ro),hsla:new RegExp("hsla"+lo),hsv:new RegExp("hsv"+ro),hsva:new RegExp("hsva"+lo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function sn(l){return!!zt.CSS_UNIT.exec(l)}var Ur=function(l,a){var i=(typeof l=="string"?parseInt(l):l)||0;if(i>=-5&&i<=5){var o=i,s=parseFloat(a),c=s+o*(s/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:a}},zr=function(l,a){var i=l||{},o="";switch(a){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var s={};if(i.fontSize){var c=i.fontSize;s=function(h,g){var d={};for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&g.indexOf(p)<0&&(d[p]=h[p]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var m=0;for(p=Object.getOwnPropertySymbols(h);m<p.length;m++)g.indexOf(p[m])<0&&Object.prototype.propertyIsEnumerable.call(h,p[m])&&(d[p[m]]=h[p[m]])}return d}(i,["fontSize"]),o=c}return{fontSize:o,styles:s}},$b={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Nr=function(l){var a=l.className,i=l.text,o=l.textColor,s=l.staticText,c=l.style;return i?ye.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(a||"").trim(),style:he(he(he({},s&&$b),o&&{color:o,mixBlendMode:"unset"}),c&&c)},typeof i=="string"&&i.length?i:"loading"):null},fn="rgb(50, 205, 50)";function qr(l,a){if(a===void 0&&(a=0),l.length===0)throw new Error("Input array cannot be empty!");var i=[];return function o(s,c){return c===void 0&&(c=0),i.push.apply(i,s),i.length<c&&o(i,c),i.slice(0,c)}(l,a)}Ge(`.atom-rli-bounding-box {
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
}`);J(fn).toRgb();Array.from({length:4},function(l,a){return"--atom-phase".concat(a+1,"-rgb")});Ge(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--commet-phase".concat(a+1,"-color")});Ge(`.OP-annulus-rli-bounding-box {
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
}`);var oo=Array.from({length:4},function(l,a){return"--OP-annulus-phase".concat(a+1,"-color")}),Xb=function(l){var a,i=zr(l==null?void 0:l.style,l==null?void 0:l.size),o=i.styles,s=i.fontSize,c=l==null?void 0:l.easing,h=Ur(l==null?void 0:l.speedPlus,"1.5s").animationPeriod,g=function(p){var m={},y=oo.length;if(p instanceof Array){for(var x=qr(p,y),k=0;k<x.length&&!(k>=4);k++)m[oo[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)m[oo[O]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)m[oo[O]]=fn}return m}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),d=l!=null&&l.dense?4.3:2.9;return ye.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},ye.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},ye.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:d,strokeMiterlimit:"10"})),ye.createElement(Nr,{className:"OP-annulus-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))};function ec(l){return l&&l.Math===Math&&l}Ge(`.OP-dotted-rli-bounding-box {
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
}`);var ai=ec(typeof window=="object"&&window)||ec(typeof self=="object"&&self)||ec(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function F0(){var l,a;return!((l=ai==null?void 0:ai.crypto)===null||l===void 0)&&l.randomUUID?ai.crypto.randomUUID():!((a=ai==null?void 0:ai.btoa)===null||a===void 0)&&a.name?ai.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var so=Array.from({length:4},function(l,a){return"--OP-dotted-phase".concat(a+1,"-color")}),Qb=function(l){var a,i=zr(l==null?void 0:l.style,l==null?void 0:l.size),o=i.styles,s=i.fontSize,c=l==null?void 0:l.easing,h=Ur(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},y=so.length;if(p instanceof Array){for(var x=qr(p,y),k=0;k<x.length&&!(k>=4);k++)m[so[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)m[so[O]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)m[so[O]]=fn}return m}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),d=l!=null&&l.dense?16:12;return ye.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:d}).map(function(p,m){var y=function(O,E,A){if(E===16){var L=360*O/E,V=E-O,z=Number.parseFloat(A)/E*V*-1;return{transform:"rotate(".concat(L,"deg)"),animationDelay:"".concat(z,"s")}}return{transform:"",animationDelay:""}}(m,d,h),x=y.animationDelay,k=y.transform;return ye.createElement("span",{key:F0(),className:"rli-d-i-b dot-shape-holder",style:k?{transform:k}:void 0},ye.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),ye.createElement(Nr,{className:"OP-dotted-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))};Ge(`.OP-spokes-rli-bounding-box {
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
}`);var uo=Array.from({length:4},function(l,a){return"--OP-spokes-phase".concat(a+1,"-color")}),Vb=function(l){var a,i=zr(l==null?void 0:l.style,l==null?void 0:l.size),o=i.styles,s=i.fontSize,c=l==null?void 0:l.easing,h=Ur(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},y=uo.length;if(p instanceof Array){for(var x=qr(p,y),k=0;k<x.length&&!(k>=4);k++)m[uo[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)m[uo[O]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)m[uo[O]]=fn}return m}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),d=l!=null&&l.dense?16:12;return ye.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:d},function(p,m){return ye.createElement("span",{key:F0(),className:"rli-d-i-b spoke",style:Zb(m,d,h)})})),ye.createElement(Nr,{text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor}))};function Zb(l,a,i){if(a===16){var o=a-l,s=Number.parseFloat(i)/a;return{transform:"rotate(".concat(360*l/a,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((o-1)*s*-1,"s")}}}Ge(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var co=Array.from({length:4},function(l,a){return"--OP-annulus-dual-sectors-phase".concat(a+1,"-color")}),Kb=function(l){var a,i=zr(l==null?void 0:l.style,l==null?void 0:l.size),o=i.styles,s=i.fontSize,c=l==null?void 0:l.easing,h=Ur(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,g=function(p){var m={},y=co.length;if(p instanceof Array){for(var x=qr(p,y),k=0;k<x.length&&!(k>=4);k++)m[co[k]]=x[k];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var O=0;O<y;O++)m[co[O]]=p}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),O=0;O<y;O++)m[co[O]]=fn}return m}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),d=l.dense?"0.45em":"";return ye.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},ye.createElement("span",{className:"rli-d-i-b annulus-sectors",style:he({},d&&{borderWidth:d})}),ye.createElement(Nr,{className:"OP-annulus-dual-sectors-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))};Ge(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var br=Array.from({length:4},function(l,a){return["--OP-annulus-track-phase".concat(a+1,"-color"),"--OP-annulus-sector-phase".concat(a+1,"-color")]}),fo=function(l){return l===void 0&&(l=1),.25*l},Jb=function(l){var a,i=zr(l==null?void 0:l.style,l==null?void 0:l.size),o=i.styles,s=i.fontSize,c=l==null?void 0:l.easing,h=Ur(l==null?void 0:l.speedPlus,"1s").animationPeriod,g=function(p){var m={},y=br.length;if(p instanceof Array){for(var x=qr(p,y),k=0;k<x.length&&!(k>=4);k++){var O=br[k];try{if(!(L=J(x[k])).isValid())throw new Error("Invalid Color: ".concat(L.getOriginalInput()));var E=L.setAlpha(fo(L.getAlpha())).toRgbString(),A=x[k];m[O[0]]=E,m[O[1]]=A}catch{A=fn,E=(L=J(fn)).setAlpha(fo(L.getAlpha())).toRgbString(),m[O[0]]=E,m[O[1]]=A}}return m}try{var L=J(p);if(typeof p!="string")throw new Error("Color String expected");if(!L.isValid())throw new Error("Invalid Color: ".concat(L.getOriginalInput()));A=p,E=L.setAlpha(fo(L.getAlpha())).toRgbString();for(var V=0;V<y;V++)m[(O=br[V])[0]]=E,m[O[1]]=A}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),A=fn,E=(L=J(fn)).setAlpha(fo(L.getAlpha())).toRgbString(),V=0;V<br.length;V++)m[(O=br[V])[0]]=E,m[O[1]]=A}return m}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),d=l.dense?"0.45em":"";return ye.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:he(he(he(he(he({},s&&{fontSize:s}),h&&{"--rli-animation-duration":h}),c&&{"--rli-animation-function":c}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},ye.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},ye.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:he({},d&&{borderWidth:d})}),ye.createElement(Nr,{className:"OP-annulus-sector-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))},Ib=function(l){var a=Object(l).variant,i=a===void 0?"disc":a;return i==="dotted"?ye.createElement(Qb,he({},l)):i==="spokes"?ye.createElement(Vb,he({},l)):i==="disc"?ye.createElement(Xb,he({},l)):i==="split-disc"?ye.createElement(Kb,he({},l)):i==="track-disc"?ye.createElement(Jb,he({},l)):null};Ge(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--four-square-phase".concat(a+1,"-color")});Ge(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--mosaic-phase".concat(a+1,"-color")});Ge(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--riple-phase".concat(a+1,"-color")});Ge(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-pulsate-phase".concat(a+1,"-color")});Ge(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-brick-stack-phase".concat(a+1,"-color")});Ge(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-bob-phase".concat(a+1,"-color")});Ge(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-bounce-phase".concat(a+1,"-color")});Ge(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--shape-phase".concat(a+1,"-color")});Ge(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--trophySpin-phase".concat(a+1,"-color")});Ge(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--slab-phase".concat(a+1,"-color")});Ge(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--life-line-phase".concat(a+1,"-color")});K0();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rr(){return Rr=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(l[o]=i[o])}return l},Rr.apply(this,arguments)}var Yn;(function(l){l.Pop="POP",l.Push="PUSH",l.Replace="REPLACE"})(Yn||(Yn={}));const Wp="popstate";function Fb(l){l===void 0&&(l={});function a(o,s){let{pathname:c,search:h,hash:g}=o.location;return dc("",{pathname:c,search:h,hash:g},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(o,s){return typeof s=="string"?s:So(s)}return ey(a,i,null,l)}function Le(l,a){if(l===!1||l===null||typeof l>"u")throw new Error(a)}function W0(l,a){if(!l){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Wb(){return Math.random().toString(36).substr(2,8)}function e0(l,a){return{usr:l.state,key:l.key,idx:a}}function dc(l,a,i,o){return i===void 0&&(i=null),Rr({pathname:typeof l=="string"?l:l.pathname,search:"",hash:""},typeof a=="string"?mi(a):a,{state:i,key:a&&a.key||o||Wb()})}function So(l){let{pathname:a="/",search:i="",hash:o=""}=l;return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function mi(l){let a={};if(l){let i=l.indexOf("#");i>=0&&(a.hash=l.substr(i),l=l.substr(0,i));let o=l.indexOf("?");o>=0&&(a.search=l.substr(o),l=l.substr(0,o)),l&&(a.pathname=l)}return a}function ey(l,a,i,o){o===void 0&&(o={});let{window:s=document.defaultView,v5Compat:c=!1}=o,h=s.history,g=Yn.Pop,d=null,p=m();p==null&&(p=0,h.replaceState(Rr({},h.state,{idx:p}),""));function m(){return(h.state||{idx:null}).idx}function y(){g=Yn.Pop;let A=m(),L=A==null?null:A-p;p=A,d&&d({action:g,location:E.location,delta:L})}function x(A,L){g=Yn.Push;let V=dc(E.location,A,L);p=m()+1;let z=e0(V,p),P=E.createHref(V);try{h.pushState(z,"",P)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;s.location.assign(P)}c&&d&&d({action:g,location:E.location,delta:1})}function k(A,L){g=Yn.Replace;let V=dc(E.location,A,L);p=m();let z=e0(V,p),P=E.createHref(V);h.replaceState(z,"",P),c&&d&&d({action:g,location:E.location,delta:0})}function O(A){let L=s.location.origin!=="null"?s.location.origin:s.location.href,V=typeof A=="string"?A:So(A);return V=V.replace(/ $/,"%20"),Le(L,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,L)}let E={get action(){return g},get location(){return l(s,h)},listen(A){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Wp,y),d=A,()=>{s.removeEventListener(Wp,y),d=null}},createHref(A){return a(s,A)},createURL:O,encodeLocation(A){let L=O(A);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:x,replace:k,go(A){return h.go(A)}};return E}var t0;(function(l){l.data="data",l.deferred="deferred",l.redirect="redirect",l.error="error"})(t0||(t0={}));function ty(l,a,i){return i===void 0&&(i="/"),ny(l,a,i)}function ny(l,a,i,o){let s=typeof a=="string"?mi(a):a,c=Uc(s.pathname||"/",i);if(c==null)return null;let h=eg(l);ay(h);let g=null;for(let d=0;g==null&&d<h.length;++d){let p=gy(c);g=hy(h[d],p)}return g}function eg(l,a,i,o){a===void 0&&(a=[]),i===void 0&&(i=[]),o===void 0&&(o="");let s=(c,h,g)=>{let d={relativePath:g===void 0?c.path||"":g,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};d.relativePath.startsWith("/")&&(Le(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let p=$n([o,d.relativePath]),m=i.concat(d);c.children&&c.children.length>0&&(Le(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),eg(c.children,a,m,p)),!(c.path==null&&!c.index)&&a.push({path:p,score:cy(p,c.index),routesMeta:m})};return l.forEach((c,h)=>{var g;if(c.path===""||!((g=c.path)!=null&&g.includes("?")))s(c,h);else for(let d of tg(c.path))s(c,h,d)}),a}function tg(l){let a=l.split("/");if(a.length===0)return[];let[i,...o]=a,s=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let h=tg(o.join("/")),g=[];return g.push(...h.map(d=>d===""?c:[c,d].join("/"))),s&&g.push(...h),g.map(d=>l.startsWith("/")&&d===""?"/":d)}function ay(l){l.sort((a,i)=>a.score!==i.score?i.score-a.score:fy(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const iy=/^:[\w-]+$/,ry=3,ly=2,oy=1,sy=10,uy=-2,n0=l=>l==="*";function cy(l,a){let i=l.split("/"),o=i.length;return i.some(n0)&&(o+=uy),a&&(o+=ly),i.filter(s=>!n0(s)).reduce((s,c)=>s+(iy.test(c)?ry:c===""?oy:sy),o)}function fy(l,a){return l.length===a.length&&l.slice(0,-1).every((o,s)=>o===a[s])?l[l.length-1]-a[a.length-1]:0}function hy(l,a,i){let{routesMeta:o}=l,s={},c="/",h=[];for(let g=0;g<o.length;++g){let d=o[g],p=g===o.length-1,m=c==="/"?a:a.slice(c.length)||"/",y=dy({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},m),x=d.route;if(!y)return null;Object.assign(s,y.params),h.push({params:s,pathname:$n([c,y.pathname]),pathnameBase:yy($n([c,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(c=$n([c,y.pathnameBase]))}return h}function dy(l,a){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[i,o]=py(l.path,l.caseSensitive,l.end),s=a.match(i);if(!s)return null;let c=s[0],h=c.replace(/(.)\/+$/,"$1"),g=s.slice(1);return{params:o.reduce((p,m,y)=>{let{paramName:x,isOptional:k}=m;if(x==="*"){let E=g[y]||"";h=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const O=g[y];return k&&!O?p[x]=void 0:p[x]=(O||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:h,pattern:l}}function py(l,a,i){a===void 0&&(a=!1),i===void 0&&(i=!0),W0(l==="*"||!l.endsWith("*")||l.endsWith("/*"),'Route path "'+l+'" will be treated as if it were '+('"'+l.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+l.replace(/\*$/,"/*")+'".'));let o=[],s="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,d)=>(o.push({paramName:g,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(o.push({paramName:"*"}),s+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":l!==""&&l!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),o]}function gy(l){try{return l.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return W0(!1,'The URL path "'+l+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),l}}function Uc(l,a){if(a==="/")return l;if(!l.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=l.charAt(i);return o&&o!=="/"?null:l.slice(i)||"/"}function vy(l,a){a===void 0&&(a="/");let{pathname:i,search:o="",hash:s=""}=typeof l=="string"?mi(l):l;return{pathname:i?i.startsWith("/")?i:my(i,a):a,search:_y(o),hash:xy(s)}}function my(l,a){let i=a.replace(/\/+$/,"").split("/");return l.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function tc(l,a,i,o){return"Cannot include a '"+l+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function by(l){return l.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function ng(l,a){let i=by(l);return a?i.map((o,s)=>s===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function ag(l,a,i,o){o===void 0&&(o=!1);let s;typeof l=="string"?s=mi(l):(s=Rr({},l),Le(!s.pathname||!s.pathname.includes("?"),tc("?","pathname","search",s)),Le(!s.pathname||!s.pathname.includes("#"),tc("#","pathname","hash",s)),Le(!s.search||!s.search.includes("#"),tc("#","search","hash",s)));let c=l===""||s.pathname==="",h=c?"/":s.pathname,g;if(h==null)g=i;else{let y=a.length-1;if(!o&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),y-=1;s.pathname=x.join("/")}g=y>=0?a[y]:"/"}let d=vy(s,g),p=h&&h!=="/"&&h.endsWith("/"),m=(c||h===".")&&i.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}const $n=l=>l.join("/").replace(/\/\/+/g,"/"),yy=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),_y=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,xy=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function Sy(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}const ig=["post","put","patch","delete"];new Set(ig);const wy=["get",...ig];new Set(wy);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cr(){return Cr=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(l[o]=i[o])}return l},Cr.apply(this,arguments)}const zc=Y.createContext(null),Oy=Y.createContext(null),ga=Y.createContext(null),Ro=Y.createContext(null),va=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),rg=Y.createContext(null);function Ty(l,a){let{relative:i}=a===void 0?{}:a;Br()||Le(!1);let{basename:o,navigator:s}=Y.useContext(ga),{hash:c,pathname:h,search:g}=og(l,{relative:i}),d=h;return o!=="/"&&(d=h==="/"?o:$n([o,h])),s.createHref({pathname:d,search:g,hash:c})}function Br(){return Y.useContext(Ro)!=null}function Lr(){return Br()||Le(!1),Y.useContext(Ro).location}function lg(l){Y.useContext(ga).static||Y.useLayoutEffect(l)}function Ey(){let{isDataRoute:l}=Y.useContext(va);return l?Ly():ky()}function ky(){Br()||Le(!1);let l=Y.useContext(zc),{basename:a,future:i,navigator:o}=Y.useContext(ga),{matches:s}=Y.useContext(va),{pathname:c}=Lr(),h=JSON.stringify(ng(s,i.v7_relativeSplatPath)),g=Y.useRef(!1);return lg(()=>{g.current=!0}),Y.useCallback(function(p,m){if(m===void 0&&(m={}),!g.current)return;if(typeof p=="number"){o.go(p);return}let y=ag(p,JSON.parse(h),c,m.relative==="path");l==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:$n([a,y.pathname])),(m.replace?o.replace:o.push)(y,m.state,m)},[a,o,h,c,l])}function og(l,a){let{relative:i}=a===void 0?{}:a,{future:o}=Y.useContext(ga),{matches:s}=Y.useContext(va),{pathname:c}=Lr(),h=JSON.stringify(ng(s,o.v7_relativeSplatPath));return Y.useMemo(()=>ag(l,JSON.parse(h),c,i==="path"),[l,h,c,i])}function Ay(l,a){return Ry(l,a)}function Ry(l,a,i,o){Br()||Le(!1);let{navigator:s}=Y.useContext(ga),{matches:c}=Y.useContext(va),h=c[c.length-1],g=h?h.params:{};h&&h.pathname;let d=h?h.pathnameBase:"/";h&&h.route;let p=Lr(),m;if(a){var y;let A=typeof a=="string"?mi(a):a;d==="/"||(y=A.pathname)!=null&&y.startsWith(d)||Le(!1),m=A}else m=p;let x=m.pathname||"/",k=x;if(d!=="/"){let A=d.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(A.length).join("/")}let O=ty(l,{pathname:k}),E=Uy(O&&O.map(A=>Object.assign({},A,{params:Object.assign({},g,A.params),pathname:$n([d,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?d:$n([d,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),c,i,o);return a&&E?Y.createElement(Ro.Provider,{value:{location:Cr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Yn.Pop}},E):E}function Cy(){let l=By(),a=Sy(l)?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),i=l instanceof Error?l.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},a),i?Y.createElement("pre",{style:s},i):null,null)}const jy=Y.createElement(Cy,null);class Dy extends Y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?Y.createElement(va.Provider,{value:this.props.routeContext},Y.createElement(rg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function My(l){let{routeContext:a,match:i,children:o}=l,s=Y.useContext(zc);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),Y.createElement(va.Provider,{value:a},o)}function Uy(l,a,i,o){var s;if(a===void 0&&(a=[]),i===void 0&&(i=null),o===void 0&&(o=null),l==null){var c;if(!i)return null;if(i.errors)l=i.matches;else if((c=o)!=null&&c.v7_partialHydration&&a.length===0&&!i.initialized&&i.matches.length>0)l=i.matches;else return null}let h=l,g=(s=i)==null?void 0:s.errors;if(g!=null){let m=h.findIndex(y=>y.route.id&&(g==null?void 0:g[y.route.id])!==void 0);m>=0||Le(!1),h=h.slice(0,Math.min(h.length,m+1))}let d=!1,p=-1;if(i&&o&&o.v7_partialHydration)for(let m=0;m<h.length;m++){let y=h[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=m),y.route.id){let{loaderData:x,errors:k}=i,O=y.route.loader&&x[y.route.id]===void 0&&(!k||k[y.route.id]===void 0);if(y.route.lazy||O){d=!0,p>=0?h=h.slice(0,p+1):h=[h[0]];break}}}return h.reduceRight((m,y,x)=>{let k,O=!1,E=null,A=null;i&&(k=g&&y.route.id?g[y.route.id]:void 0,E=y.route.errorElement||jy,d&&(p<0&&x===0?(Py("route-fallback"),O=!0,A=null):p===x&&(O=!0,A=y.route.hydrateFallbackElement||null)));let L=a.concat(h.slice(0,x+1)),V=()=>{let z;return k?z=E:O?z=A:y.route.Component?z=Y.createElement(y.route.Component,null):y.route.element?z=y.route.element:z=m,Y.createElement(My,{match:y,routeContext:{outlet:m,matches:L,isDataRoute:i!=null},children:z})};return i&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?Y.createElement(Dy,{location:i.location,revalidation:i.revalidation,component:E,error:k,children:V(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):V()},null)}var sg=function(l){return l.UseBlocker="useBlocker",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l}(sg||{}),ug=function(l){return l.UseBlocker="useBlocker",l.UseLoaderData="useLoaderData",l.UseActionData="useActionData",l.UseRouteError="useRouteError",l.UseNavigation="useNavigation",l.UseRouteLoaderData="useRouteLoaderData",l.UseMatches="useMatches",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l.UseRouteId="useRouteId",l}(ug||{});function zy(l){let a=Y.useContext(zc);return a||Le(!1),a}function Ny(l){let a=Y.useContext(Oy);return a||Le(!1),a}function qy(l){let a=Y.useContext(va);return a||Le(!1),a}function cg(l){let a=qy(),i=a.matches[a.matches.length-1];return i.route.id||Le(!1),i.route.id}function By(){var l;let a=Y.useContext(rg),i=Ny(),o=cg();return a!==void 0?a:(l=i.errors)==null?void 0:l[o]}function Ly(){let{router:l}=zy(sg.UseNavigateStable),a=cg(ug.UseNavigateStable),i=Y.useRef(!1);return lg(()=>{i.current=!0}),Y.useCallback(function(s,c){c===void 0&&(c={}),i.current&&(typeof s=="number"?l.navigate(s):l.navigate(s,Cr({fromRouteId:a},c)))},[l,a])}const a0={};function Py(l,a,i){a0[l]||(a0[l]=!0)}function Hy(l,a){l==null||l.v7_startTransition,l==null||l.v7_relativeSplatPath}function pc(l){Le(!1)}function Gy(l){let{basename:a="/",children:i=null,location:o,navigationType:s=Yn.Pop,navigator:c,static:h=!1,future:g}=l;Br()&&Le(!1);let d=a.replace(/^\/*/,"/"),p=Y.useMemo(()=>({basename:d,navigator:c,static:h,future:Cr({v7_relativeSplatPath:!1},g)}),[d,g,c,h]);typeof o=="string"&&(o=mi(o));let{pathname:m="/",search:y="",hash:x="",state:k=null,key:O="default"}=o,E=Y.useMemo(()=>{let A=Uc(m,d);return A==null?null:{location:{pathname:A,search:y,hash:x,state:k,key:O},navigationType:s}},[d,m,y,x,k,O,s]);return E==null?null:Y.createElement(ga.Provider,{value:p},Y.createElement(Ro.Provider,{children:i,value:E}))}function Yy(l){let{children:a,location:i}=l;return Ay(gc(a),i)}new Promise(()=>{});function gc(l,a){a===void 0&&(a=[]);let i=[];return Y.Children.forEach(l,(o,s)=>{if(!Y.isValidElement(o))return;let c=[...a,s];if(o.type===Y.Fragment){i.push.apply(i,gc(o.props.children,c));return}o.type!==pc&&Le(!1),!o.props.index||!o.props.children||Le(!1);let h={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=gc(o.props.children,c)),i.push(h)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vc(){return vc=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(l[o]=i[o])}return l},vc.apply(this,arguments)}function $y(l,a){if(l==null)return{};var i={},o=Object.keys(l),s,c;for(c=0;c<o.length;c++)s=o[c],!(a.indexOf(s)>=0)&&(i[s]=l[s]);return i}function Xy(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Qy(l,a){return l.button===0&&(!a||a==="_self")&&!Xy(l)}const Vy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Zy="6";try{window.__reactRouterVersion=Zy}catch{}const Ky="startTransition",i0=wb[Ky];function Jy(l){let{basename:a,children:i,future:o,window:s}=l,c=Y.useRef();c.current==null&&(c.current=Fb({window:s,v5Compat:!0}));let h=c.current,[g,d]=Y.useState({action:h.action,location:h.location}),{v7_startTransition:p}=o||{},m=Y.useCallback(y=>{p&&i0?i0(()=>d(y)):d(y)},[d,p]);return Y.useLayoutEffect(()=>h.listen(m),[h,m]),Y.useEffect(()=>Hy(o),[o]),Y.createElement(Gy,{basename:a,children:i,location:g.location,navigationType:g.action,navigator:h,future:o})}const Iy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,di=Y.forwardRef(function(a,i){let{onClick:o,relative:s,reloadDocument:c,replace:h,state:g,target:d,to:p,preventScrollReset:m,viewTransition:y}=a,x=$y(a,Vy),{basename:k}=Y.useContext(ga),O,E=!1;if(typeof p=="string"&&Fy.test(p)&&(O=p,Iy))try{let z=new URL(window.location.href),P=p.startsWith("//")?new URL(z.protocol+p):new URL(p),H=Uc(P.pathname,k);P.origin===z.origin&&H!=null?p=H+P.search+P.hash:E=!0}catch{}let A=Ty(p,{relative:s}),L=Wy(p,{replace:h,state:g,target:d,preventScrollReset:m,relative:s,viewTransition:y});function V(z){o&&o(z),z.defaultPrevented||L(z)}return Y.createElement("a",vc({},x,{href:O||A,onClick:E||c?o:V,ref:i,target:d}))});var r0;(function(l){l.UseScrollRestoration="useScrollRestoration",l.UseSubmit="useSubmit",l.UseSubmitFetcher="useSubmitFetcher",l.UseFetcher="useFetcher",l.useViewTransitionState="useViewTransitionState"})(r0||(r0={}));var l0;(function(l){l.UseFetcher="useFetcher",l.UseFetchers="useFetchers",l.UseScrollRestoration="useScrollRestoration"})(l0||(l0={}));function Wy(l,a){let{target:i,replace:o,state:s,preventScrollReset:c,relative:h,viewTransition:g}=a===void 0?{}:a,d=Ey(),p=Lr(),m=og(l,{relative:h});return Y.useCallback(y=>{if(Qy(y,i)){y.preventDefault();let x=o!==void 0?o:So(p)===So(m);d(l,{replace:x,state:s,preventScrollReset:c,relative:h,viewTransition:g})}},[p,d,m,o,s,i,l,c,h,g])}const e1="modulepreload",t1=function(l){return"/"+l},o0={},Pr=function(a,i,o){let s=Promise.resolve();if(i&&i.length>0){let h=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),d=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));s=h(i.map(p=>{if(p=t1(p),p in o0)return;o0[p]=!0;const m=p.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${y}`))return;const x=document.createElement("link");if(x.rel=m?"stylesheet":e1,m||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),m)return new Promise((k,O)=>{x.addEventListener("load",k),x.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h}return s.then(h=>{for(const g of h||[])g.status==="rejected"&&c(g.reason);return a().catch(c)})},n1=l=>{let a;return l?a=l:typeof fetch>"u"?a=(...i)=>Pr(async()=>{const{default:o}=await Promise.resolve().then(()=>bi);return{default:o}},void 0).then(({default:o})=>o(...i)):a=fetch,(...i)=>a(...i)};class Nc extends Error{constructor(a,i="FunctionsError",o){super(a),this.name=i,this.context=o}}class a1 extends Nc{constructor(a){super("Failed to send a request to the Edge Function","FunctionsFetchError",a)}}class i1 extends Nc{constructor(a){super("Relay Error invoking the Edge Function","FunctionsRelayError",a)}}class r1 extends Nc{constructor(a){super("Edge Function returned a non-2xx status code","FunctionsHttpError",a)}}var mc;(function(l){l.Any="any",l.ApNortheast1="ap-northeast-1",l.ApNortheast2="ap-northeast-2",l.ApSouth1="ap-south-1",l.ApSoutheast1="ap-southeast-1",l.ApSoutheast2="ap-southeast-2",l.CaCentral1="ca-central-1",l.EuCentral1="eu-central-1",l.EuWest1="eu-west-1",l.EuWest2="eu-west-2",l.EuWest3="eu-west-3",l.SaEast1="sa-east-1",l.UsEast1="us-east-1",l.UsWest1="us-west-1",l.UsWest2="us-west-2"})(mc||(mc={}));var l1=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};class o1{constructor(a,{headers:i={},customFetch:o,region:s=mc.Any}={}){this.url=a,this.headers=i,this.region=s,this.fetch=n1(o)}setAuth(a){this.headers.Authorization=`Bearer ${a}`}invoke(a,i={}){var o;return l1(this,void 0,void 0,function*(){try{const{headers:s,method:c,body:h}=i;let g={},{region:d}=i;d||(d=this.region),d&&d!=="any"&&(g["x-region"]=d);let p;h&&(s&&!Object.prototype.hasOwnProperty.call(s,"Content-Type")||!s)&&(typeof Blob<"u"&&h instanceof Blob||h instanceof ArrayBuffer?(g["Content-Type"]="application/octet-stream",p=h):typeof h=="string"?(g["Content-Type"]="text/plain",p=h):typeof FormData<"u"&&h instanceof FormData?p=h:(g["Content-Type"]="application/json",p=JSON.stringify(h)));const m=yield this.fetch(`${this.url}/${a}`,{method:c||"POST",headers:Object.assign(Object.assign(Object.assign({},g),this.headers),s),body:p}).catch(O=>{throw new a1(O)}),y=m.headers.get("x-relay-error");if(y&&y==="true")throw new i1(m);if(!m.ok)throw new r1(m);let x=((o=m.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),k;return x==="application/json"?k=yield m.json():x==="application/octet-stream"?k=yield m.blob():x==="text/event-stream"?k=m:x==="multipart/form-data"?k=yield m.formData():k=yield m.text(),{data:k,error:null}}catch(s){return{data:null,error:s}}})}}var Ve={},ii={},ri={},li={},oi={},si={},s1=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},vi=s1();const u1=vi.fetch,fg=vi.fetch.bind(vi),hg=vi.Headers,c1=vi.Request,f1=vi.Response,bi=Object.freeze(Object.defineProperty({__proto__:null,Headers:hg,Request:c1,Response:f1,default:fg,fetch:u1},Symbol.toStringTag,{value:"Module"})),h1=yb(bi);var ho={},s0;function dg(){if(s0)return ho;s0=1,Object.defineProperty(ho,"__esModule",{value:!0});class l extends Error{constructor(i){super(i.message),this.name="PostgrestError",this.details=i.details,this.hint=i.hint,this.code=i.code}}return ho.default=l,ho}var u0;function pg(){if(u0)return si;u0=1;var l=si&&si.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(si,"__esModule",{value:!0});const a=l(h1),i=l(dg());class o{constructor(c){this.shouldThrowOnError=!1,this.method=c.method,this.url=c.url,this.headers=c.headers,this.schema=c.schema,this.body=c.body,this.shouldThrowOnError=c.shouldThrowOnError,this.signal=c.signal,this.isMaybeSingle=c.isMaybeSingle,c.fetch?this.fetch=c.fetch:typeof fetch>"u"?this.fetch=a.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(c,h){return this.headers=Object.assign({},this.headers),this.headers[c]=h,this}then(c,h){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const g=this.fetch;let d=g(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async p=>{var m,y,x;let k=null,O=null,E=null,A=p.status,L=p.statusText;if(p.ok){if(this.method!=="HEAD"){const H=await p.text();H===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?O=H:O=JSON.parse(H))}const z=(m=this.headers.Prefer)===null||m===void 0?void 0:m.match(/count=(exact|planned|estimated)/),P=(y=p.headers.get("content-range"))===null||y===void 0?void 0:y.split("/");z&&P&&P.length>1&&(E=parseInt(P[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(O)&&(O.length>1?(k={code:"PGRST116",details:`Results contain ${O.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},O=null,E=null,A=406,L="Not Acceptable"):O.length===1?O=O[0]:O=null)}else{const z=await p.text();try{k=JSON.parse(z),Array.isArray(k)&&p.status===404&&(O=[],k=null,A=200,L="OK")}catch{p.status===404&&z===""?(A=204,L="No Content"):k={message:z}}if(k&&this.isMaybeSingle&&(!((x=k==null?void 0:k.details)===null||x===void 0)&&x.includes("0 rows"))&&(k=null,A=200,L="OK"),k&&this.shouldThrowOnError)throw new i.default(k)}return{error:k,data:O,count:E,status:A,statusText:L}});return this.shouldThrowOnError||(d=d.catch(p=>{var m,y,x;return{error:{message:`${(m=p==null?void 0:p.name)!==null&&m!==void 0?m:"FetchError"}: ${p==null?void 0:p.message}`,details:`${(y=p==null?void 0:p.stack)!==null&&y!==void 0?y:""}`,hint:"",code:`${(x=p==null?void 0:p.code)!==null&&x!==void 0?x:""}`},data:null,count:null,status:0,statusText:""}})),d.then(c,h)}returns(){return this}overrideTypes(){return this}}return si.default=o,si}var c0;function gg(){if(c0)return oi;c0=1;var l=oi&&oi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(oi,"__esModule",{value:!0});const a=l(pg());class i extends a.default{select(s){let c=!1;const h=(s??"*").split("").map(g=>/\s/.test(g)&&!c?"":(g==='"'&&(c=!c),g)).join("");return this.url.searchParams.set("select",h),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(s,{ascending:c=!0,nullsFirst:h,foreignTable:g,referencedTable:d=g}={}){const p=d?`${d}.order`:"order",m=this.url.searchParams.get(p);return this.url.searchParams.set(p,`${m?`${m},`:""}${s}.${c?"asc":"desc"}${h===void 0?"":h?".nullsfirst":".nullslast"}`),this}limit(s,{foreignTable:c,referencedTable:h=c}={}){const g=typeof h>"u"?"limit":`${h}.limit`;return this.url.searchParams.set(g,`${s}`),this}range(s,c,{foreignTable:h,referencedTable:g=h}={}){const d=typeof g>"u"?"offset":`${g}.offset`,p=typeof g>"u"?"limit":`${g}.limit`;return this.url.searchParams.set(d,`${s}`),this.url.searchParams.set(p,`${c-s+1}`),this}abortSignal(s){return this.signal=s,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:s=!1,verbose:c=!1,settings:h=!1,buffers:g=!1,wal:d=!1,format:p="text"}={}){var m;const y=[s?"analyze":null,c?"verbose":null,h?"settings":null,g?"buffers":null,d?"wal":null].filter(Boolean).join("|"),x=(m=this.headers.Accept)!==null&&m!==void 0?m:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${p}; for="${x}"; options=${y};`,p==="json"?this:this}rollback(){var s;return((s=this.headers.Prefer)!==null&&s!==void 0?s:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}return oi.default=i,oi}var f0;function qc(){if(f0)return li;f0=1;var l=li&&li.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(li,"__esModule",{value:!0});const a=l(gg());class i extends a.default{eq(s,c){return this.url.searchParams.append(s,`eq.${c}`),this}neq(s,c){return this.url.searchParams.append(s,`neq.${c}`),this}gt(s,c){return this.url.searchParams.append(s,`gt.${c}`),this}gte(s,c){return this.url.searchParams.append(s,`gte.${c}`),this}lt(s,c){return this.url.searchParams.append(s,`lt.${c}`),this}lte(s,c){return this.url.searchParams.append(s,`lte.${c}`),this}like(s,c){return this.url.searchParams.append(s,`like.${c}`),this}likeAllOf(s,c){return this.url.searchParams.append(s,`like(all).{${c.join(",")}}`),this}likeAnyOf(s,c){return this.url.searchParams.append(s,`like(any).{${c.join(",")}}`),this}ilike(s,c){return this.url.searchParams.append(s,`ilike.${c}`),this}ilikeAllOf(s,c){return this.url.searchParams.append(s,`ilike(all).{${c.join(",")}}`),this}ilikeAnyOf(s,c){return this.url.searchParams.append(s,`ilike(any).{${c.join(",")}}`),this}is(s,c){return this.url.searchParams.append(s,`is.${c}`),this}in(s,c){const h=Array.from(new Set(c)).map(g=>typeof g=="string"&&new RegExp("[,()]").test(g)?`"${g}"`:`${g}`).join(",");return this.url.searchParams.append(s,`in.(${h})`),this}contains(s,c){return typeof c=="string"?this.url.searchParams.append(s,`cs.${c}`):Array.isArray(c)?this.url.searchParams.append(s,`cs.{${c.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(c)}`),this}containedBy(s,c){return typeof c=="string"?this.url.searchParams.append(s,`cd.${c}`):Array.isArray(c)?this.url.searchParams.append(s,`cd.{${c.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(c)}`),this}rangeGt(s,c){return this.url.searchParams.append(s,`sr.${c}`),this}rangeGte(s,c){return this.url.searchParams.append(s,`nxl.${c}`),this}rangeLt(s,c){return this.url.searchParams.append(s,`sl.${c}`),this}rangeLte(s,c){return this.url.searchParams.append(s,`nxr.${c}`),this}rangeAdjacent(s,c){return this.url.searchParams.append(s,`adj.${c}`),this}overlaps(s,c){return typeof c=="string"?this.url.searchParams.append(s,`ov.${c}`):this.url.searchParams.append(s,`ov.{${c.join(",")}}`),this}textSearch(s,c,{config:h,type:g}={}){let d="";g==="plain"?d="pl":g==="phrase"?d="ph":g==="websearch"&&(d="w");const p=h===void 0?"":`(${h})`;return this.url.searchParams.append(s,`${d}fts${p}.${c}`),this}match(s){return Object.entries(s).forEach(([c,h])=>{this.url.searchParams.append(c,`eq.${h}`)}),this}not(s,c,h){return this.url.searchParams.append(s,`not.${c}.${h}`),this}or(s,{foreignTable:c,referencedTable:h=c}={}){const g=h?`${h}.or`:"or";return this.url.searchParams.append(g,`(${s})`),this}filter(s,c,h){return this.url.searchParams.append(s,`${c}.${h}`),this}}return li.default=i,li}var h0;function vg(){if(h0)return ri;h0=1;var l=ri&&ri.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(ri,"__esModule",{value:!0});const a=l(qc());class i{constructor(s,{headers:c={},schema:h,fetch:g}){this.url=s,this.headers=c,this.schema=h,this.fetch=g}select(s,{head:c=!1,count:h}={}){const g=c?"HEAD":"GET";let d=!1;const p=(s??"*").split("").map(m=>/\s/.test(m)&&!d?"":(m==='"'&&(d=!d),m)).join("");return this.url.searchParams.set("select",p),h&&(this.headers.Prefer=`count=${h}`),new a.default({method:g,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(s,{count:c,defaultToNull:h=!0}={}){const g="POST",d=[];if(this.headers.Prefer&&d.push(this.headers.Prefer),c&&d.push(`count=${c}`),h||d.push("missing=default"),this.headers.Prefer=d.join(","),Array.isArray(s)){const p=s.reduce((m,y)=>m.concat(Object.keys(y)),[]);if(p.length>0){const m=[...new Set(p)].map(y=>`"${y}"`);this.url.searchParams.set("columns",m.join(","))}}return new a.default({method:g,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}upsert(s,{onConflict:c,ignoreDuplicates:h=!1,count:g,defaultToNull:d=!0}={}){const p="POST",m=[`resolution=${h?"ignore":"merge"}-duplicates`];if(c!==void 0&&this.url.searchParams.set("on_conflict",c),this.headers.Prefer&&m.push(this.headers.Prefer),g&&m.push(`count=${g}`),d||m.push("missing=default"),this.headers.Prefer=m.join(","),Array.isArray(s)){const y=s.reduce((x,k)=>x.concat(Object.keys(k)),[]);if(y.length>0){const x=[...new Set(y)].map(k=>`"${k}"`);this.url.searchParams.set("columns",x.join(","))}}return new a.default({method:p,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}update(s,{count:c}={}){const h="PATCH",g=[];return this.headers.Prefer&&g.push(this.headers.Prefer),c&&g.push(`count=${c}`),this.headers.Prefer=g.join(","),new a.default({method:h,url:this.url,headers:this.headers,schema:this.schema,body:s,fetch:this.fetch,allowEmpty:!1})}delete({count:s}={}){const c="DELETE",h=[];return s&&h.push(`count=${s}`),this.headers.Prefer&&h.unshift(this.headers.Prefer),this.headers.Prefer=h.join(","),new a.default({method:c,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}return ri.default=i,ri}var yr={},_r={},d0;function d1(){return d0||(d0=1,Object.defineProperty(_r,"__esModule",{value:!0}),_r.version=void 0,_r.version="0.0.0-automated"),_r}var p0;function p1(){if(p0)return yr;p0=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.DEFAULT_HEADERS=void 0;const l=d1();return yr.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${l.version}`},yr}var g0;function g1(){if(g0)return ii;g0=1;var l=ii&&ii.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(ii,"__esModule",{value:!0});const a=l(vg()),i=l(qc()),o=p1();class s{constructor(h,{headers:g={},schema:d,fetch:p}={}){this.url=h,this.headers=Object.assign(Object.assign({},o.DEFAULT_HEADERS),g),this.schemaName=d,this.fetch=p}from(h){const g=new URL(`${this.url}/${h}`);return new a.default(g,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(h){return new s(this.url,{headers:this.headers,schema:h,fetch:this.fetch})}rpc(h,g={},{head:d=!1,get:p=!1,count:m}={}){let y;const x=new URL(`${this.url}/rpc/${h}`);let k;d||p?(y=d?"HEAD":"GET",Object.entries(g).filter(([E,A])=>A!==void 0).map(([E,A])=>[E,Array.isArray(A)?`{${A.join(",")}}`:`${A}`]).forEach(([E,A])=>{x.searchParams.append(E,A)})):(y="POST",k=g);const O=Object.assign({},this.headers);return m&&(O.Prefer=`count=${m}`),new i.default({method:y,url:x,headers:O,schema:this.schemaName,body:k,fetch:this.fetch,allowEmpty:!1})}}return ii.default=s,ii}var v0;function v1(){if(v0)return Ve;v0=1;var l=Ve&&Ve.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.PostgrestError=Ve.PostgrestBuilder=Ve.PostgrestTransformBuilder=Ve.PostgrestFilterBuilder=Ve.PostgrestQueryBuilder=Ve.PostgrestClient=void 0;const a=l(g1());Ve.PostgrestClient=a.default;const i=l(vg());Ve.PostgrestQueryBuilder=i.default;const o=l(qc());Ve.PostgrestFilterBuilder=o.default;const s=l(gg());Ve.PostgrestTransformBuilder=s.default;const c=l(pg());Ve.PostgrestBuilder=c.default;const h=l(dg());return Ve.PostgrestError=h.default,Ve.default={PostgrestClient:a.default,PostgrestQueryBuilder:i.default,PostgrestFilterBuilder:o.default,PostgrestTransformBuilder:s.default,PostgrestBuilder:c.default,PostgrestError:h.default},Ve}var m1=v1();const b1=Z0(m1),{PostgrestClient:y1,PostgrestQueryBuilder:pS,PostgrestFilterBuilder:gS,PostgrestTransformBuilder:vS,PostgrestBuilder:mS,PostgrestError:bS}=b1;let bc;typeof window>"u"?bc=require("ws"):bc=window.WebSocket;const _1="2.11.10",x1={"X-Client-Info":`realtime-js/${_1}`},S1="1.0.0",mg=1e4,w1=1e3;var gi;(function(l){l[l.connecting=0]="connecting",l[l.open=1]="open",l[l.closing=2]="closing",l[l.closed=3]="closed"})(gi||(gi={}));var it;(function(l){l.closed="closed",l.errored="errored",l.joined="joined",l.joining="joining",l.leaving="leaving"})(it||(it={}));var qt;(function(l){l.close="phx_close",l.error="phx_error",l.join="phx_join",l.reply="phx_reply",l.leave="phx_leave",l.access_token="access_token"})(qt||(qt={}));var yc;(function(l){l.websocket="websocket"})(yc||(yc={}));var pa;(function(l){l.Connecting="connecting",l.Open="open",l.Closing="closing",l.Closed="closed"})(pa||(pa={}));class O1{constructor(){this.HEADER_LENGTH=1}decode(a,i){return a.constructor===ArrayBuffer?i(this._binaryDecode(a)):i(typeof a=="string"?JSON.parse(a):{})}_binaryDecode(a){const i=new DataView(a),o=new TextDecoder;return this._decodeBroadcast(a,i,o)}_decodeBroadcast(a,i,o){const s=i.getUint8(1),c=i.getUint8(2);let h=this.HEADER_LENGTH+2;const g=o.decode(a.slice(h,h+s));h=h+s;const d=o.decode(a.slice(h,h+c));h=h+c;const p=JSON.parse(o.decode(a.slice(h,a.byteLength)));return{ref:null,topic:g,event:d,payload:p}}}class bg{constructor(a,i){this.callback=a,this.timerCalc=i,this.timer=void 0,this.tries=0,this.callback=a,this.timerCalc=i}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var ke;(function(l){l.abstime="abstime",l.bool="bool",l.date="date",l.daterange="daterange",l.float4="float4",l.float8="float8",l.int2="int2",l.int4="int4",l.int4range="int4range",l.int8="int8",l.int8range="int8range",l.json="json",l.jsonb="jsonb",l.money="money",l.numeric="numeric",l.oid="oid",l.reltime="reltime",l.text="text",l.time="time",l.timestamp="timestamp",l.timestamptz="timestamptz",l.timetz="timetz",l.tsrange="tsrange",l.tstzrange="tstzrange"})(ke||(ke={}));const m0=(l,a,i={})=>{var o;const s=(o=i.skipTypes)!==null&&o!==void 0?o:[];return Object.keys(a).reduce((c,h)=>(c[h]=T1(h,l,a,s),c),{})},T1=(l,a,i,o)=>{const s=a.find(g=>g.name===l),c=s==null?void 0:s.type,h=i[l];return c&&!o.includes(c)?yg(c,h):_c(h)},yg=(l,a)=>{if(l.charAt(0)==="_"){const i=l.slice(1,l.length);return R1(a,i)}switch(l){case ke.bool:return E1(a);case ke.float4:case ke.float8:case ke.int2:case ke.int4:case ke.int8:case ke.numeric:case ke.oid:return k1(a);case ke.json:case ke.jsonb:return A1(a);case ke.timestamp:return C1(a);case ke.abstime:case ke.date:case ke.daterange:case ke.int4range:case ke.int8range:case ke.money:case ke.reltime:case ke.text:case ke.time:case ke.timestamptz:case ke.timetz:case ke.tsrange:case ke.tstzrange:return _c(a);default:return _c(a)}},_c=l=>l,E1=l=>{switch(l){case"t":return!0;case"f":return!1;default:return l}},k1=l=>{if(typeof l=="string"){const a=parseFloat(l);if(!Number.isNaN(a))return a}return l},A1=l=>{if(typeof l=="string")try{return JSON.parse(l)}catch(a){return console.log(`JSON parse error: ${a}`),l}return l},R1=(l,a)=>{if(typeof l!="string")return l;const i=l.length-1,o=l[i];if(l[0]==="{"&&o==="}"){let c;const h=l.slice(1,i);try{c=JSON.parse("["+h+"]")}catch{c=h?h.split(","):[]}return c.map(g=>yg(a,g))}return l},C1=l=>typeof l=="string"?l.replace(" ","T"):l,_g=l=>{let a=l;return a=a.replace(/^ws/i,"http"),a=a.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),a.replace(/\/+$/,"")};class nc{constructor(a,i,o={},s=mg){this.channel=a,this.event=i,this.payload=o,this.timeout=s,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(a){this.timeout=a,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(a){this.payload=Object.assign(Object.assign({},this.payload),a)}receive(a,i){var o;return this._hasReceived(a)&&i((o=this.receivedResp)===null||o===void 0?void 0:o.response),this.recHooks.push({status:a,callback:i}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const a=i=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=i,this._matchReceive(i)};this.channel._on(this.refEvent,{},a),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(a,i){this.refEvent&&this.channel._trigger(this.refEvent,{status:a,response:i})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:a,response:i}){this.recHooks.filter(o=>o.status===a).forEach(o=>o.callback(i))}_hasReceived(a){return this.receivedResp&&this.receivedResp.status===a}}var b0;(function(l){l.SYNC="sync",l.JOIN="join",l.LEAVE="leave"})(b0||(b0={}));class Tr{constructor(a,i){this.channel=a,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const o=(i==null?void 0:i.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(o.state,{},s=>{const{onJoin:c,onLeave:h,onSync:g}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Tr.syncState(this.state,s,c,h),this.pendingDiffs.forEach(d=>{this.state=Tr.syncDiff(this.state,d,c,h)}),this.pendingDiffs=[],g()}),this.channel._on(o.diff,{},s=>{const{onJoin:c,onLeave:h,onSync:g}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=Tr.syncDiff(this.state,s,c,h),g())}),this.onJoin((s,c,h)=>{this.channel._trigger("presence",{event:"join",key:s,currentPresences:c,newPresences:h})}),this.onLeave((s,c,h)=>{this.channel._trigger("presence",{event:"leave",key:s,currentPresences:c,leftPresences:h})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(a,i,o,s){const c=this.cloneDeep(a),h=this.transformState(i),g={},d={};return this.map(c,(p,m)=>{h[p]||(d[p]=m)}),this.map(h,(p,m)=>{const y=c[p];if(y){const x=m.map(A=>A.presence_ref),k=y.map(A=>A.presence_ref),O=m.filter(A=>k.indexOf(A.presence_ref)<0),E=y.filter(A=>x.indexOf(A.presence_ref)<0);O.length>0&&(g[p]=O),E.length>0&&(d[p]=E)}else g[p]=m}),this.syncDiff(c,{joins:g,leaves:d},o,s)}static syncDiff(a,i,o,s){const{joins:c,leaves:h}={joins:this.transformState(i.joins),leaves:this.transformState(i.leaves)};return o||(o=()=>{}),s||(s=()=>{}),this.map(c,(g,d)=>{var p;const m=(p=a[g])!==null&&p!==void 0?p:[];if(a[g]=this.cloneDeep(d),m.length>0){const y=a[g].map(k=>k.presence_ref),x=m.filter(k=>y.indexOf(k.presence_ref)<0);a[g].unshift(...x)}o(g,m,d)}),this.map(h,(g,d)=>{let p=a[g];if(!p)return;const m=d.map(y=>y.presence_ref);p=p.filter(y=>m.indexOf(y.presence_ref)<0),a[g]=p,s(g,p,d),p.length===0&&delete a[g]}),a}static map(a,i){return Object.getOwnPropertyNames(a).map(o=>i(o,a[o]))}static transformState(a){return a=this.cloneDeep(a),Object.getOwnPropertyNames(a).reduce((i,o)=>{const s=a[o];return"metas"in s?i[o]=s.metas.map(c=>(c.presence_ref=c.phx_ref,delete c.phx_ref,delete c.phx_ref_prev,c)):i[o]=s,i},{})}static cloneDeep(a){return JSON.parse(JSON.stringify(a))}onJoin(a){this.caller.onJoin=a}onLeave(a){this.caller.onLeave=a}onSync(a){this.caller.onSync=a}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var y0;(function(l){l.ALL="*",l.INSERT="INSERT",l.UPDATE="UPDATE",l.DELETE="DELETE"})(y0||(y0={}));var _0;(function(l){l.BROADCAST="broadcast",l.PRESENCE="presence",l.POSTGRES_CHANGES="postgres_changes",l.SYSTEM="system"})(_0||(_0={}));var cn;(function(l){l.SUBSCRIBED="SUBSCRIBED",l.TIMED_OUT="TIMED_OUT",l.CLOSED="CLOSED",l.CHANNEL_ERROR="CHANNEL_ERROR"})(cn||(cn={}));class Bc{constructor(a,i={config:{}},o){this.topic=a,this.params=i,this.socket=o,this.bindings={},this.state=it.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=a.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},i.config),this.timeout=this.socket.timeout,this.joinPush=new nc(this,qt.join,this.params,this.timeout),this.rejoinTimer=new bg(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=it.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(s=>s.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=it.closed,this.socket._remove(this)}),this._onError(s=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,s),this.state=it.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=it.errored,this.rejoinTimer.scheduleTimeout())}),this._on(qt.reply,{},(s,c)=>{this._trigger(this._replyEventName(c),s)}),this.presence=new Tr(this),this.broadcastEndpointURL=_g(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(a,i=this.timeout){var o,s;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:c,presence:h,private:g}}=this.params;this._onError(m=>a==null?void 0:a(cn.CHANNEL_ERROR,m)),this._onClose(()=>a==null?void 0:a(cn.CLOSED));const d={},p={broadcast:c,presence:h,postgres_changes:(s=(o=this.bindings.postgres_changes)===null||o===void 0?void 0:o.map(m=>m.filter))!==null&&s!==void 0?s:[],private:g};this.socket.accessTokenValue&&(d.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:p},d)),this.joinedOnce=!0,this._rejoin(i),this.joinPush.receive("ok",async({postgres_changes:m})=>{var y;if(this.socket.setAuth(),m===void 0){a==null||a(cn.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,k=(y=x==null?void 0:x.length)!==null&&y!==void 0?y:0,O=[];for(let E=0;E<k;E++){const A=x[E],{filter:{event:L,schema:V,table:z,filter:P}}=A,H=m&&m[E];if(H&&H.event===L&&H.schema===V&&H.table===z&&H.filter===P)O.push(Object.assign(Object.assign({},A),{id:H.id}));else{this.unsubscribe(),this.state=it.errored,a==null||a(cn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=O,a&&a(cn.SUBSCRIBED);return}}).receive("error",m=>{this.state=it.errored,a==null||a(cn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(m).join(", ")||"error")))}).receive("timeout",()=>{a==null||a(cn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(a,i={}){return await this.send({type:"presence",event:"track",payload:a},i.timeout||this.timeout)}async untrack(a={}){return await this.send({type:"presence",event:"untrack"},a)}on(a,i,o){return this._on(a,i,o)}async send(a,i={}){var o,s;if(!this._canPush()&&a.type==="broadcast"){const{event:c,payload:h}=a,d={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:h,private:this.private}]})};try{const p=await this._fetchWithTimeout(this.broadcastEndpointURL,d,(o=i.timeout)!==null&&o!==void 0?o:this.timeout);return await((s=p.body)===null||s===void 0?void 0:s.cancel()),p.ok?"ok":"error"}catch(p){return p.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var h,g,d;const p=this._push(a.type,a,i.timeout||this.timeout);a.type==="broadcast"&&!(!((d=(g=(h=this.params)===null||h===void 0?void 0:h.config)===null||g===void 0?void 0:g.broadcast)===null||d===void 0)&&d.ack)&&c("ok"),p.receive("ok",()=>c("ok")),p.receive("error",()=>c("error")),p.receive("timeout",()=>c("timed out"))})}updateJoinPayload(a){this.joinPush.updatePayload(a)}unsubscribe(a=this.timeout){this.state=it.leaving;const i=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(qt.close,"leave",this._joinRef())};return this.joinPush.destroy(),new Promise(o=>{const s=new nc(this,qt.leave,{},a);s.receive("ok",()=>{i(),o("ok")}).receive("timeout",()=>{i(),o("timed out")}).receive("error",()=>{o("error")}),s.send(),this._canPush()||s.trigger("ok",{})})}teardown(){this.pushBuffer.forEach(a=>a.destroy()),this.rejoinTimer&&clearTimeout(this.rejoinTimer.timer),this.joinPush.destroy()}async _fetchWithTimeout(a,i,o){const s=new AbortController,c=setTimeout(()=>s.abort(),o),h=await this.socket.fetch(a,Object.assign(Object.assign({},i),{signal:s.signal}));return clearTimeout(c),h}_push(a,i,o=this.timeout){if(!this.joinedOnce)throw`tried to push '${a}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let s=new nc(this,a,i,o);return this._canPush()?s.send():(s.startTimeout(),this.pushBuffer.push(s)),s}_onMessage(a,i,o){return i}_isMember(a){return this.topic===a}_joinRef(){return this.joinPush.ref}_trigger(a,i,o){var s,c;const h=a.toLocaleLowerCase(),{close:g,error:d,leave:p,join:m}=qt;if(o&&[g,d,p,m].indexOf(h)>=0&&o!==this._joinRef())return;let x=this._onMessage(h,i,o);if(i&&!x)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(h)?(s=this.bindings.postgres_changes)===null||s===void 0||s.filter(k=>{var O,E,A;return((O=k.filter)===null||O===void 0?void 0:O.event)==="*"||((A=(E=k.filter)===null||E===void 0?void 0:E.event)===null||A===void 0?void 0:A.toLocaleLowerCase())===h}).map(k=>k.callback(x,o)):(c=this.bindings[h])===null||c===void 0||c.filter(k=>{var O,E,A,L,V,z;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in k){const P=k.id,H=(O=k.filter)===null||O===void 0?void 0:O.event;return P&&((E=i.ids)===null||E===void 0?void 0:E.includes(P))&&(H==="*"||(H==null?void 0:H.toLocaleLowerCase())===((A=i.data)===null||A===void 0?void 0:A.type.toLocaleLowerCase()))}else{const P=(V=(L=k==null?void 0:k.filter)===null||L===void 0?void 0:L.event)===null||V===void 0?void 0:V.toLocaleLowerCase();return P==="*"||P===((z=i==null?void 0:i.event)===null||z===void 0?void 0:z.toLocaleLowerCase())}else return k.type.toLocaleLowerCase()===h}).map(k=>{if(typeof x=="object"&&"ids"in x){const O=x.data,{schema:E,table:A,commit_timestamp:L,type:V,errors:z}=O;x=Object.assign(Object.assign({},{schema:E,table:A,commit_timestamp:L,eventType:V,new:{},old:{},errors:z}),this._getPayloadRecords(O))}k.callback(x,o)})}_isClosed(){return this.state===it.closed}_isJoined(){return this.state===it.joined}_isJoining(){return this.state===it.joining}_isLeaving(){return this.state===it.leaving}_replyEventName(a){return`chan_reply_${a}`}_on(a,i,o){const s=a.toLocaleLowerCase(),c={type:s,filter:i,callback:o};return this.bindings[s]?this.bindings[s].push(c):this.bindings[s]=[c],this}_off(a,i){const o=a.toLocaleLowerCase();return this.bindings[o]=this.bindings[o].filter(s=>{var c;return!(((c=s.type)===null||c===void 0?void 0:c.toLocaleLowerCase())===o&&Bc.isEqual(s.filter,i))}),this}static isEqual(a,i){if(Object.keys(a).length!==Object.keys(i).length)return!1;for(const o in a)if(a[o]!==i[o])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(a){this._on(qt.close,{},a)}_onError(a){this._on(qt.error,{},i=>a(i))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(a=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=it.joining,this.joinPush.resend(a))}_getPayloadRecords(a){const i={new:{},old:{}};return(a.type==="INSERT"||a.type==="UPDATE")&&(i.new=m0(a.columns,a.record)),(a.type==="UPDATE"||a.type==="DELETE")&&(i.old=m0(a.columns,a.old_record)),i}}const x0=()=>{},j1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class D1{constructor(a,i){var o;this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers=x1,this.params={},this.timeout=mg,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=x0,this.ref=0,this.logger=x0,this.conn=null,this.sendBuffer=[],this.serializer=new O1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=c=>{let h;return c?h=c:typeof fetch>"u"?h=(...g)=>Pr(async()=>{const{default:d}=await Promise.resolve().then(()=>bi);return{default:d}},void 0).then(({default:d})=>d(...g)):h=fetch,(...g)=>h(...g)},this.endPoint=`${a}/${yc.websocket}`,this.httpEndpoint=_g(a),i!=null&&i.transport?this.transport=i.transport:this.transport=null,i!=null&&i.params&&(this.params=i.params),i!=null&&i.headers&&(this.headers=Object.assign(Object.assign({},this.headers),i.headers)),i!=null&&i.timeout&&(this.timeout=i.timeout),i!=null&&i.logger&&(this.logger=i.logger),(i!=null&&i.logLevel||i!=null&&i.log_level)&&(this.logLevel=i.logLevel||i.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),i!=null&&i.heartbeatIntervalMs&&(this.heartbeatIntervalMs=i.heartbeatIntervalMs);const s=(o=i==null?void 0:i.params)===null||o===void 0?void 0:o.apikey;if(s&&(this.accessTokenValue=s,this.apiKey=s),this.reconnectAfterMs=i!=null&&i.reconnectAfterMs?i.reconnectAfterMs:c=>[1e3,2e3,5e3,1e4][c-1]||1e4,this.encode=i!=null&&i.encode?i.encode:(c,h)=>h(JSON.stringify(c)),this.decode=i!=null&&i.decode?i.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new bg(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(i==null?void 0:i.fetch),i!=null&&i.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(i==null?void 0:i.worker)||!1,this.workerUrl=i==null?void 0:i.workerUrl}this.accessToken=(i==null?void 0:i.accessToken)||null}connect(){if(!this.conn){if(this.transport||(this.transport=bc),this.transport){typeof window<"u"&&this.transport===window.WebSocket?this.conn=new this.transport(this.endpointURL()):this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection();return}this.conn=new M1(this.endpointURL(),void 0,{close:()=>{this.conn=null}})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:S1}))}disconnect(a,i){this.conn&&(this.conn.onclose=function(){},a?this.conn.close(a,i??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset(),this.channels.forEach(o=>o.teardown()))}getChannels(){return this.channels}async removeChannel(a){const i=await a.unsubscribe();return this.channels=this.channels.filter(o=>o._joinRef!==a._joinRef),this.channels.length===0&&this.disconnect(),i}async removeAllChannels(){const a=await Promise.all(this.channels.map(i=>i.unsubscribe()));return this.channels=[],this.disconnect(),a}log(a,i,o){this.logger(a,i,o)}connectionState(){switch(this.conn&&this.conn.readyState){case gi.connecting:return pa.Connecting;case gi.open:return pa.Open;case gi.closing:return pa.Closing;default:return pa.Closed}}isConnected(){return this.connectionState()===pa.Open}channel(a,i={config:{}}){const o=`realtime:${a}`,s=this.getChannels().find(c=>c.topic===o);if(s)return s;{const c=new Bc(`realtime:${a}`,i,this);return this.channels.push(c),c}}push(a){const{topic:i,event:o,payload:s,ref:c}=a,h=()=>{this.encode(a,g=>{var d;(d=this.conn)===null||d===void 0||d.send(g)})};this.log("push",`${i} ${o} (${c})`,s),this.isConnected()?h():this.sendBuffer.push(h)}async setAuth(a=null){let i=a||this.accessToken&&await this.accessToken()||this.accessTokenValue;this.accessTokenValue!=i&&(this.accessTokenValue=i,this.channels.forEach(o=>{i&&o.updateJoinPayload({access_token:i,version:this.headers&&this.headers["X-Client-Info"]}),o.joinedOnce&&o._isJoined()&&o._push(qt.access_token,{access_token:i})}))}async sendHeartbeat(){var a;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),(a=this.conn)===null||a===void 0||a.close(w1,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),await this.setAuth()}onHeartbeat(a){this.heartbeatCallback=a}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(a=>a()),this.sendBuffer=[])}_makeRef(){let a=this.ref+1;return a===this.ref?this.ref=0:this.ref=a,this.ref.toString()}_leaveOpenTopic(a){let i=this.channels.find(o=>o.topic===a&&(o._isJoined()||o._isJoining()));i&&(this.log("transport",`leaving duplicate topic "${a}"`),i.unsubscribe())}_remove(a){this.channels=this.channels.filter(i=>i.topic!==a.topic)}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=a=>this._onConnError(a),this.conn.onmessage=a=>this._onConnMessage(a),this.conn.onclose=a=>this._onConnClose(a))}_onConnMessage(a){this.decode(a.data,i=>{let{topic:o,event:s,payload:c,ref:h}=i;o==="phoenix"&&s==="phx_reply"&&this.heartbeatCallback(i.payload.status=="ok"?"ok":"error"),h&&h===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${c.status||""} ${o} ${s} ${h&&"("+h+")"||""}`,c),Array.from(this.channels).filter(g=>g._isMember(o)).forEach(g=>g._trigger(s,c,h)),this.stateChangeCallbacks.message.forEach(g=>g(i))})}_onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const a=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(a),this.workerRef.onerror=i=>{this.log("worker","worker error",i.message),this.workerRef.terminate()},this.workerRef.onmessage=i=>{i.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(a=>a())}_onConnClose(a){this.log("transport","close",a),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(i=>i(a))}_onConnError(a){this.log("transport",a.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(i=>i(a))}_triggerChanError(){this.channels.forEach(a=>a._trigger(qt.error))}_appendParams(a,i){if(Object.keys(i).length===0)return a;const o=a.match(/\?/)?"&":"?",s=new URLSearchParams(i);return`${a}${o}${s}`}_workerObjectUrl(a){let i;if(a)i=a;else{const o=new Blob([j1],{type:"application/javascript"});i=URL.createObjectURL(o)}return i}}class M1{constructor(a,i,o){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=gi.connecting,this.send=()=>{},this.url=null,this.url=a,this.close=o.close}}class Lc extends Error{constructor(a){super(a),this.__isStorageError=!0,this.name="StorageError"}}function Ze(l){return typeof l=="object"&&l!==null&&"__isStorageError"in l}class U1 extends Lc{constructor(a,i){super(a),this.name="StorageApiError",this.status=i}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class xc extends Lc{constructor(a,i){super(a),this.name="StorageUnknownError",this.originalError=i}}var z1=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};const xg=l=>{let a;return l?a=l:typeof fetch>"u"?a=(...i)=>Pr(async()=>{const{default:o}=await Promise.resolve().then(()=>bi);return{default:o}},void 0).then(({default:o})=>o(...i)):a=fetch,(...i)=>a(...i)},N1=()=>z1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Pr(()=>Promise.resolve().then(()=>bi),void 0)).Response:Response}),Sc=l=>{if(Array.isArray(l))return l.map(i=>Sc(i));if(typeof l=="function"||l!==Object(l))return l;const a={};return Object.entries(l).forEach(([i,o])=>{const s=i.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));a[s]=Sc(o)}),a};var ma=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};const ac=l=>l.msg||l.message||l.error_description||l.error||JSON.stringify(l),q1=(l,a,i)=>ma(void 0,void 0,void 0,function*(){const o=yield N1();l instanceof o&&!(i!=null&&i.noResolveJson)?l.json().then(s=>{a(new U1(ac(s),l.status||500))}).catch(s=>{a(new xc(ac(s),s))}):a(new xc(ac(l),l))}),B1=(l,a,i,o)=>{const s={method:l,headers:(a==null?void 0:a.headers)||{}};return l==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json"},a==null?void 0:a.headers),o&&(s.body=JSON.stringify(o)),Object.assign(Object.assign({},s),i))};function Hr(l,a,i,o,s,c){return ma(this,void 0,void 0,function*(){return new Promise((h,g)=>{l(i,B1(a,o,s,c)).then(d=>{if(!d.ok)throw d;return o!=null&&o.noResolveJson?d:d.json()}).then(d=>h(d)).catch(d=>q1(d,g,o))})})}function wo(l,a,i,o){return ma(this,void 0,void 0,function*(){return Hr(l,"GET",a,i,o)})}function Hn(l,a,i,o,s){return ma(this,void 0,void 0,function*(){return Hr(l,"POST",a,o,s,i)})}function L1(l,a,i,o,s){return ma(this,void 0,void 0,function*(){return Hr(l,"PUT",a,o,s,i)})}function P1(l,a,i,o){return ma(this,void 0,void 0,function*(){return Hr(l,"HEAD",a,Object.assign(Object.assign({},i),{noResolveJson:!0}),o)})}function Sg(l,a,i,o,s){return ma(this,void 0,void 0,function*(){return Hr(l,"DELETE",a,o,s,i)})}var ft=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};const H1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},S0={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class G1{constructor(a,i={},o,s){this.url=a,this.headers=i,this.bucketId=o,this.fetch=xg(s)}uploadOrUpdate(a,i,o,s){return ft(this,void 0,void 0,function*(){try{let c;const h=Object.assign(Object.assign({},S0),s);let g=Object.assign(Object.assign({},this.headers),a==="POST"&&{"x-upsert":String(h.upsert)});const d=h.metadata;typeof Blob<"u"&&o instanceof Blob?(c=new FormData,c.append("cacheControl",h.cacheControl),d&&c.append("metadata",this.encodeMetadata(d)),c.append("",o)):typeof FormData<"u"&&o instanceof FormData?(c=o,c.append("cacheControl",h.cacheControl),d&&c.append("metadata",this.encodeMetadata(d))):(c=o,g["cache-control"]=`max-age=${h.cacheControl}`,g["content-type"]=h.contentType,d&&(g["x-metadata"]=this.toBase64(this.encodeMetadata(d)))),s!=null&&s.headers&&(g=Object.assign(Object.assign({},g),s.headers));const p=this._removeEmptyFolders(i),m=this._getFinalPath(p),y=yield this.fetch(`${this.url}/object/${m}`,Object.assign({method:a,body:c,headers:g},h!=null&&h.duplex?{duplex:h.duplex}:{})),x=yield y.json();return y.ok?{data:{path:p,id:x.Id,fullPath:x.Key},error:null}:{data:null,error:x}}catch(c){if(Ze(c))return{data:null,error:c};throw c}})}upload(a,i,o){return ft(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",a,i,o)})}uploadToSignedUrl(a,i,o,s){return ft(this,void 0,void 0,function*(){const c=this._removeEmptyFolders(a),h=this._getFinalPath(c),g=new URL(this.url+`/object/upload/sign/${h}`);g.searchParams.set("token",i);try{let d;const p=Object.assign({upsert:S0.upsert},s),m=Object.assign(Object.assign({},this.headers),{"x-upsert":String(p.upsert)});typeof Blob<"u"&&o instanceof Blob?(d=new FormData,d.append("cacheControl",p.cacheControl),d.append("",o)):typeof FormData<"u"&&o instanceof FormData?(d=o,d.append("cacheControl",p.cacheControl)):(d=o,m["cache-control"]=`max-age=${p.cacheControl}`,m["content-type"]=p.contentType);const y=yield this.fetch(g.toString(),{method:"PUT",body:d,headers:m}),x=yield y.json();return y.ok?{data:{path:c,fullPath:x.Key},error:null}:{data:null,error:x}}catch(d){if(Ze(d))return{data:null,error:d};throw d}})}createSignedUploadUrl(a,i){return ft(this,void 0,void 0,function*(){try{let o=this._getFinalPath(a);const s=Object.assign({},this.headers);i!=null&&i.upsert&&(s["x-upsert"]="true");const c=yield Hn(this.fetch,`${this.url}/object/upload/sign/${o}`,{},{headers:s}),h=new URL(this.url+c.url),g=h.searchParams.get("token");if(!g)throw new Lc("No token returned by API");return{data:{signedUrl:h.toString(),path:a,token:g},error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}update(a,i,o){return ft(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",a,i,o)})}move(a,i,o){return ft(this,void 0,void 0,function*(){try{return{data:yield Hn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:a,destinationKey:i,destinationBucket:o==null?void 0:o.destinationBucket},{headers:this.headers}),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}copy(a,i,o){return ft(this,void 0,void 0,function*(){try{return{data:{path:(yield Hn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:a,destinationKey:i,destinationBucket:o==null?void 0:o.destinationBucket},{headers:this.headers})).Key},error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}createSignedUrl(a,i,o){return ft(this,void 0,void 0,function*(){try{let s=this._getFinalPath(a),c=yield Hn(this.fetch,`${this.url}/object/sign/${s}`,Object.assign({expiresIn:i},o!=null&&o.transform?{transform:o.transform}:{}),{headers:this.headers});const h=o!=null&&o.download?`&download=${o.download===!0?"":o.download}`:"";return c={signedUrl:encodeURI(`${this.url}${c.signedURL}${h}`)},{data:c,error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}createSignedUrls(a,i,o){return ft(this,void 0,void 0,function*(){try{const s=yield Hn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:i,paths:a},{headers:this.headers}),c=o!=null&&o.download?`&download=${o.download===!0?"":o.download}`:"";return{data:s.map(h=>Object.assign(Object.assign({},h),{signedUrl:h.signedURL?encodeURI(`${this.url}${h.signedURL}${c}`):null})),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}download(a,i){return ft(this,void 0,void 0,function*(){const s=typeof(i==null?void 0:i.transform)<"u"?"render/image/authenticated":"object",c=this.transformOptsToQueryString((i==null?void 0:i.transform)||{}),h=c?`?${c}`:"";try{const g=this._getFinalPath(a);return{data:yield(yield wo(this.fetch,`${this.url}/${s}/${g}${h}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(g){if(Ze(g))return{data:null,error:g};throw g}})}info(a){return ft(this,void 0,void 0,function*(){const i=this._getFinalPath(a);try{const o=yield wo(this.fetch,`${this.url}/object/info/${i}`,{headers:this.headers});return{data:Sc(o),error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}exists(a){return ft(this,void 0,void 0,function*(){const i=this._getFinalPath(a);try{return yield P1(this.fetch,`${this.url}/object/${i}`,{headers:this.headers}),{data:!0,error:null}}catch(o){if(Ze(o)&&o instanceof xc){const s=o.originalError;if([400,404].includes(s==null?void 0:s.status))return{data:!1,error:o}}throw o}})}getPublicUrl(a,i){const o=this._getFinalPath(a),s=[],c=i!=null&&i.download?`download=${i.download===!0?"":i.download}`:"";c!==""&&s.push(c);const g=typeof(i==null?void 0:i.transform)<"u"?"render/image":"object",d=this.transformOptsToQueryString((i==null?void 0:i.transform)||{});d!==""&&s.push(d);let p=s.join("&");return p!==""&&(p=`?${p}`),{data:{publicUrl:encodeURI(`${this.url}/${g}/public/${o}${p}`)}}}remove(a){return ft(this,void 0,void 0,function*(){try{return{data:yield Sg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:a},{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}list(a,i,o){return ft(this,void 0,void 0,function*(){try{const s=Object.assign(Object.assign(Object.assign({},H1),i),{prefix:a||""});return{data:yield Hn(this.fetch,`${this.url}/object/list/${this.bucketId}`,s,{headers:this.headers},o),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}encodeMetadata(a){return JSON.stringify(a)}toBase64(a){return typeof Buffer<"u"?Buffer.from(a).toString("base64"):btoa(a)}_getFinalPath(a){return`${this.bucketId}/${a}`}_removeEmptyFolders(a){return a.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(a){const i=[];return a.width&&i.push(`width=${a.width}`),a.height&&i.push(`height=${a.height}`),a.resize&&i.push(`resize=${a.resize}`),a.format&&i.push(`format=${a.format}`),a.quality&&i.push(`quality=${a.quality}`),i.join("&")}}const Y1="2.7.1",$1={"X-Client-Info":`storage-js/${Y1}`};var ui=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};class X1{constructor(a,i={},o){this.url=a,this.headers=Object.assign(Object.assign({},$1),i),this.fetch=xg(o)}listBuckets(){return ui(this,void 0,void 0,function*(){try{return{data:yield wo(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(a){if(Ze(a))return{data:null,error:a};throw a}})}getBucket(a){return ui(this,void 0,void 0,function*(){try{return{data:yield wo(this.fetch,`${this.url}/bucket/${a}`,{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}createBucket(a,i={public:!1}){return ui(this,void 0,void 0,function*(){try{return{data:yield Hn(this.fetch,`${this.url}/bucket`,{id:a,name:a,public:i.public,file_size_limit:i.fileSizeLimit,allowed_mime_types:i.allowedMimeTypes},{headers:this.headers}),error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}updateBucket(a,i){return ui(this,void 0,void 0,function*(){try{return{data:yield L1(this.fetch,`${this.url}/bucket/${a}`,{id:a,name:a,public:i.public,file_size_limit:i.fileSizeLimit,allowed_mime_types:i.allowedMimeTypes},{headers:this.headers}),error:null}}catch(o){if(Ze(o))return{data:null,error:o};throw o}})}emptyBucket(a){return ui(this,void 0,void 0,function*(){try{return{data:yield Hn(this.fetch,`${this.url}/bucket/${a}/empty`,{},{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}deleteBucket(a){return ui(this,void 0,void 0,function*(){try{return{data:yield Sg(this.fetch,`${this.url}/bucket/${a}`,{},{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}}class Q1 extends X1{constructor(a,i={},o){super(a,i,o)}from(a){return new G1(this.url,this.headers,a,this.fetch)}}const V1="2.50.0";let Or="";typeof Deno<"u"?Or="deno":typeof document<"u"?Or="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Or="react-native":Or="node";const Z1={"X-Client-Info":`supabase-js-${Or}/${V1}`},K1={headers:Z1},J1={schema:"public"},I1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},F1={};var W1=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};const e_=l=>{let a;return l?a=l:typeof fetch>"u"?a=fg:a=fetch,(...i)=>a(...i)},t_=()=>typeof Headers>"u"?hg:Headers,n_=(l,a,i)=>{const o=e_(i),s=t_();return(c,h)=>W1(void 0,void 0,void 0,function*(){var g;const d=(g=yield a())!==null&&g!==void 0?g:l;let p=new s(h==null?void 0:h.headers);return p.has("apikey")||p.set("apikey",l),p.has("Authorization")||p.set("Authorization",`Bearer ${d}`),o(c,Object.assign(Object.assign({},h),{headers:p}))})};var a_=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};function i_(l){return l.endsWith("/")?l:l+"/"}function r_(l,a){var i,o;const{db:s,auth:c,realtime:h,global:g}=l,{db:d,auth:p,realtime:m,global:y}=a,x={db:Object.assign(Object.assign({},d),s),auth:Object.assign(Object.assign({},p),c),realtime:Object.assign(Object.assign({},m),h),global:Object.assign(Object.assign(Object.assign({},y),g),{headers:Object.assign(Object.assign({},(i=y==null?void 0:y.headers)!==null&&i!==void 0?i:{}),(o=g==null?void 0:g.headers)!==null&&o!==void 0?o:{})}),accessToken:()=>a_(this,void 0,void 0,function*(){return""})};return l.accessToken?x.accessToken=l.accessToken:delete x.accessToken,x}const wg="2.70.0",pi=30*1e3,wc=3,ic=wc*pi,l_="http://localhost:9999",o_="supabase.auth.token",s_={"X-Client-Info":`gotrue-js/${wg}`},Oc="X-Supabase-Api-Version",Og={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},u_=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,c_=6e5;class Pc extends Error{constructor(a,i,o){super(a),this.__isAuthError=!0,this.name="AuthError",this.status=i,this.code=o}}function re(l){return typeof l=="object"&&l!==null&&"__isAuthError"in l}class f_ extends Pc{constructor(a,i,o){super(a,i,o),this.name="AuthApiError",this.status=i,this.code=o}}function h_(l){return re(l)&&l.name==="AuthApiError"}class Tg extends Pc{constructor(a,i){super(a),this.name="AuthUnknownError",this.originalError=i}}class Xn extends Pc{constructor(a,i,o,s){super(a,o,s),this.name=i,this.status=o}}class Pn extends Xn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function d_(l){return re(l)&&l.name==="AuthSessionMissingError"}class po extends Xn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class go extends Xn{constructor(a){super(a,"AuthInvalidCredentialsError",400,void 0)}}class vo extends Xn{constructor(a,i=null){super(a,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=i}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function p_(l){return re(l)&&l.name==="AuthImplicitGrantRedirectError"}class w0 extends Xn{constructor(a,i=null){super(a,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=i}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Tc extends Xn{constructor(a,i){super(a,"AuthRetryableFetchError",i,void 0)}}function rc(l){return re(l)&&l.name==="AuthRetryableFetchError"}class O0 extends Xn{constructor(a,i,o){super(a,"AuthWeakPasswordError",i,"weak_password"),this.reasons=o}}class Er extends Xn{constructor(a){super(a,"AuthInvalidJwtError",400,"invalid_jwt")}}const Oo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),T0=` 	
\r=`.split(""),g_=(()=>{const l=new Array(128);for(let a=0;a<l.length;a+=1)l[a]=-1;for(let a=0;a<T0.length;a+=1)l[T0[a].charCodeAt(0)]=-2;for(let a=0;a<Oo.length;a+=1)l[Oo[a].charCodeAt(0)]=a;return l})();function E0(l,a,i){if(l!==null)for(a.queue=a.queue<<8|l,a.queuedBits+=8;a.queuedBits>=6;){const o=a.queue>>a.queuedBits-6&63;i(Oo[o]),a.queuedBits-=6}else if(a.queuedBits>0)for(a.queue=a.queue<<6-a.queuedBits,a.queuedBits=6;a.queuedBits>=6;){const o=a.queue>>a.queuedBits-6&63;i(Oo[o]),a.queuedBits-=6}}function Eg(l,a,i){const o=g_[l];if(o>-1)for(a.queue=a.queue<<6|o,a.queuedBits+=6;a.queuedBits>=8;)i(a.queue>>a.queuedBits-8&255),a.queuedBits-=8;else{if(o===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(l)}"`)}}function k0(l){const a=[],i=h=>{a.push(String.fromCodePoint(h))},o={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},c=h=>{b_(h,o,i)};for(let h=0;h<l.length;h+=1)Eg(l.charCodeAt(h),s,c);return a.join("")}function v_(l,a){if(l<=127){a(l);return}else if(l<=2047){a(192|l>>6),a(128|l&63);return}else if(l<=65535){a(224|l>>12),a(128|l>>6&63),a(128|l&63);return}else if(l<=1114111){a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63);return}throw new Error(`Unrecognized Unicode codepoint: ${l.toString(16)}`)}function m_(l,a){for(let i=0;i<l.length;i+=1){let o=l.charCodeAt(i);if(o>55295&&o<=56319){const s=(o-55296)*1024&65535;o=(l.charCodeAt(i+1)-56320&65535|s)+65536,i+=1}v_(o,a)}}function b_(l,a,i){if(a.utf8seq===0){if(l<=127){i(l);return}for(let o=1;o<6;o+=1)if((l>>7-o&1)===0){a.utf8seq=o;break}if(a.utf8seq===2)a.codepoint=l&31;else if(a.utf8seq===3)a.codepoint=l&15;else if(a.utf8seq===4)a.codepoint=l&7;else throw new Error("Invalid UTF-8 sequence");a.utf8seq-=1}else if(a.utf8seq>0){if(l<=127)throw new Error("Invalid UTF-8 sequence");a.codepoint=a.codepoint<<6|l&63,a.utf8seq-=1,a.utf8seq===0&&i(a.codepoint)}}function y_(l){const a=[],i={queue:0,queuedBits:0},o=s=>{a.push(s)};for(let s=0;s<l.length;s+=1)Eg(l.charCodeAt(s),i,o);return new Uint8Array(a)}function __(l){const a=[];return m_(l,i=>a.push(i)),new Uint8Array(a)}function x_(l){const a=[],i={queue:0,queuedBits:0},o=s=>{a.push(s)};return l.forEach(s=>E0(s,i,o)),E0(null,i,o),a.join("")}function S_(l){return Math.round(Date.now()/1e3)+l}function w_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){const a=Math.random()*16|0;return(l=="x"?a:a&3|8).toString(16)})}const Nt=()=>typeof window<"u"&&typeof document<"u",ha={tested:!1,writable:!1},kr=()=>{if(!Nt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ha.tested)return ha.writable;const l=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(l,l),globalThis.localStorage.removeItem(l),ha.tested=!0,ha.writable=!0}catch{ha.tested=!0,ha.writable=!1}return ha.writable};function O_(l){const a={},i=new URL(l);if(i.hash&&i.hash[0]==="#")try{new URLSearchParams(i.hash.substring(1)).forEach((s,c)=>{a[c]=s})}catch{}return i.searchParams.forEach((o,s)=>{a[s]=o}),a}const kg=l=>{let a;return l?a=l:typeof fetch>"u"?a=(...i)=>Pr(async()=>{const{default:o}=await Promise.resolve().then(()=>bi);return{default:o}},void 0).then(({default:o})=>o(...i)):a=fetch,(...i)=>a(...i)},T_=l=>typeof l=="object"&&l!==null&&"status"in l&&"ok"in l&&"json"in l&&typeof l.json=="function",Ag=async(l,a,i)=>{await l.setItem(a,JSON.stringify(i))},mo=async(l,a)=>{const i=await l.getItem(a);if(!i)return null;try{return JSON.parse(i)}catch{return i}},bo=async(l,a)=>{await l.removeItem(a)};class Co{constructor(){this.promise=new Co.promiseConstructor((a,i)=>{this.resolve=a,this.reject=i})}}Co.promiseConstructor=Promise;function lc(l){const a=l.split(".");if(a.length!==3)throw new Er("Invalid JWT structure");for(let o=0;o<a.length;o++)if(!u_.test(a[o]))throw new Er("JWT not in base64url format");return{header:JSON.parse(k0(a[0])),payload:JSON.parse(k0(a[1])),signature:y_(a[2]),raw:{header:a[0],payload:a[1]}}}async function E_(l){return await new Promise(a=>{setTimeout(()=>a(null),l)})}function k_(l,a){return new Promise((o,s)=>{(async()=>{for(let c=0;c<1/0;c++)try{const h=await l(c);if(!a(c,null,h)){o(h);return}}catch(h){if(!a(c,h)){s(h);return}}})()})}function A_(l){return("0"+l.toString(16)).substr(-2)}function R_(){const a=new Uint32Array(56);if(typeof crypto>"u"){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",o=i.length;let s="";for(let c=0;c<56;c++)s+=i.charAt(Math.floor(Math.random()*o));return s}return crypto.getRandomValues(a),Array.from(a,A_).join("")}async function C_(l){const i=new TextEncoder().encode(l),o=await crypto.subtle.digest("SHA-256",i),s=new Uint8Array(o);return Array.from(s).map(c=>String.fromCharCode(c)).join("")}async function j_(l){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),l;const i=await C_(l);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ci(l,a,i=!1){const o=R_();let s=o;i&&(s+="/PASSWORD_RECOVERY"),await Ag(l,`${a}-code-verifier`,s);const c=await j_(o);return[c,o===c?"plain":"s256"]}const D_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function M_(l){const a=l.headers.get(Oc);if(!a||!a.match(D_))return null;try{return new Date(`${a}T00:00:00.0Z`)}catch{return null}}function U_(l){if(!l)throw new Error("Missing exp claim");const a=Math.floor(Date.now()/1e3);if(l<=a)throw new Error("JWT has expired")}function z_(l){switch(l){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const N_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function fi(l){if(!N_.test(l))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}var q_=function(l,a){var i={};for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&a.indexOf(o)<0&&(i[o]=l[o]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(l);s<o.length;s++)a.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(l,o[s])&&(i[o[s]]=l[o[s]]);return i};const da=l=>l.msg||l.message||l.error_description||l.error||JSON.stringify(l),B_=[502,503,504];async function A0(l){var a;if(!T_(l))throw new Tc(da(l),0);if(B_.includes(l.status))throw new Tc(da(l),l.status);let i;try{i=await l.json()}catch(c){throw new Tg(da(c),c)}let o;const s=M_(l);if(s&&s.getTime()>=Og["2024-01-01"].timestamp&&typeof i=="object"&&i&&typeof i.code=="string"?o=i.code:typeof i=="object"&&i&&typeof i.error_code=="string"&&(o=i.error_code),o){if(o==="weak_password")throw new O0(da(i),l.status,((a=i.weak_password)===null||a===void 0?void 0:a.reasons)||[]);if(o==="session_not_found")throw new Pn}else if(typeof i=="object"&&i&&typeof i.weak_password=="object"&&i.weak_password&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.reasons.reduce((c,h)=>c&&typeof h=="string",!0))throw new O0(da(i),l.status,i.weak_password.reasons);throw new f_(da(i),l.status||500,o)}const L_=(l,a,i,o)=>{const s={method:l,headers:(a==null?void 0:a.headers)||{}};return l==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},a==null?void 0:a.headers),s.body=JSON.stringify(o),Object.assign(Object.assign({},s),i))};async function fe(l,a,i,o){var s;const c=Object.assign({},o==null?void 0:o.headers);c[Oc]||(c[Oc]=Og["2024-01-01"].name),o!=null&&o.jwt&&(c.Authorization=`Bearer ${o.jwt}`);const h=(s=o==null?void 0:o.query)!==null&&s!==void 0?s:{};o!=null&&o.redirectTo&&(h.redirect_to=o.redirectTo);const g=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",d=await P_(l,a,i+g,{headers:c,noResolveJson:o==null?void 0:o.noResolveJson},{},o==null?void 0:o.body);return o!=null&&o.xform?o==null?void 0:o.xform(d):{data:Object.assign({},d),error:null}}async function P_(l,a,i,o,s,c){const h=L_(a,o,s,c);let g;try{g=await l(i,Object.assign({},h))}catch(d){throw console.error(d),new Tc(da(d),0)}if(g.ok||await A0(g),o!=null&&o.noResolveJson)return g;try{return await g.json()}catch(d){await A0(d)}}function un(l){var a;let i=null;$_(l)&&(i=Object.assign({},l),l.expires_at||(i.expires_at=S_(l.expires_in)));const o=(a=l.user)!==null&&a!==void 0?a:l;return{data:{session:i,user:o},error:null}}function R0(l){const a=un(l);return!a.error&&l.weak_password&&typeof l.weak_password=="object"&&Array.isArray(l.weak_password.reasons)&&l.weak_password.reasons.length&&l.weak_password.message&&typeof l.weak_password.message=="string"&&l.weak_password.reasons.reduce((i,o)=>i&&typeof o=="string",!0)&&(a.data.weak_password=l.weak_password),a}function Gn(l){var a;return{data:{user:(a=l.user)!==null&&a!==void 0?a:l},error:null}}function H_(l){return{data:l,error:null}}function G_(l){const{action_link:a,email_otp:i,hashed_token:o,redirect_to:s,verification_type:c}=l,h=q_(l,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),g={action_link:a,email_otp:i,hashed_token:o,redirect_to:s,verification_type:c},d=Object.assign({},h);return{data:{properties:g,user:d},error:null}}function Y_(l){return l}function $_(l){return l.access_token&&l.refresh_token&&l.expires_in}const oc=["global","local","others"];var X_=function(l,a){var i={};for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&a.indexOf(o)<0&&(i[o]=l[o]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(l);s<o.length;s++)a.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(l,o[s])&&(i[o[s]]=l[o[s]]);return i};class Q_{constructor({url:a="",headers:i={},fetch:o}){this.url=a,this.headers=i,this.fetch=kg(o),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(a,i=oc[0]){if(oc.indexOf(i)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${oc.join(", ")}`);try{return await fe(this.fetch,"POST",`${this.url}/logout?scope=${i}`,{headers:this.headers,jwt:a,noResolveJson:!0}),{data:null,error:null}}catch(o){if(re(o))return{data:null,error:o};throw o}}async inviteUserByEmail(a,i={}){try{return await fe(this.fetch,"POST",`${this.url}/invite`,{body:{email:a,data:i.data},headers:this.headers,redirectTo:i.redirectTo,xform:Gn})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async generateLink(a){try{const{options:i}=a,o=X_(a,["options"]),s=Object.assign(Object.assign({},o),i);return"newEmail"in o&&(s.new_email=o==null?void 0:o.newEmail,delete s.newEmail),await fe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:G_,redirectTo:i==null?void 0:i.redirectTo})}catch(i){if(re(i))return{data:{properties:null,user:null},error:i};throw i}}async createUser(a){try{return await fe(this.fetch,"POST",`${this.url}/admin/users`,{body:a,headers:this.headers,xform:Gn})}catch(i){if(re(i))return{data:{user:null},error:i};throw i}}async listUsers(a){var i,o,s,c,h,g,d;try{const p={nextPage:null,lastPage:0,total:0},m=await fe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(o=(i=a==null?void 0:a.page)===null||i===void 0?void 0:i.toString())!==null&&o!==void 0?o:"",per_page:(c=(s=a==null?void 0:a.perPage)===null||s===void 0?void 0:s.toString())!==null&&c!==void 0?c:""},xform:Y_});if(m.error)throw m.error;const y=await m.json(),x=(h=m.headers.get("x-total-count"))!==null&&h!==void 0?h:0,k=(d=(g=m.headers.get("link"))===null||g===void 0?void 0:g.split(","))!==null&&d!==void 0?d:[];return k.length>0&&(k.forEach(O=>{const E=parseInt(O.split(";")[0].split("=")[1].substring(0,1)),A=JSON.parse(O.split(";")[1].split("=")[1]);p[`${A}Page`]=E}),p.total=parseInt(x)),{data:Object.assign(Object.assign({},y),p),error:null}}catch(p){if(re(p))return{data:{users:[]},error:p};throw p}}async getUserById(a){fi(a);try{return await fe(this.fetch,"GET",`${this.url}/admin/users/${a}`,{headers:this.headers,xform:Gn})}catch(i){if(re(i))return{data:{user:null},error:i};throw i}}async updateUserById(a,i){fi(a);try{return await fe(this.fetch,"PUT",`${this.url}/admin/users/${a}`,{body:i,headers:this.headers,xform:Gn})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async deleteUser(a,i=!1){fi(a);try{return await fe(this.fetch,"DELETE",`${this.url}/admin/users/${a}`,{headers:this.headers,body:{should_soft_delete:i},xform:Gn})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async _listFactors(a){fi(a.userId);try{const{data:i,error:o}=await fe(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:i,error:o}}catch(i){if(re(i))return{data:null,error:i};throw i}}async _deleteFactor(a){fi(a.userId),fi(a.id);try{return{data:await fe(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/factors/${a.id}`,{headers:this.headers}),error:null}}catch(i){if(re(i))return{data:null,error:i};throw i}}}const V_={getItem:l=>kr()?globalThis.localStorage.getItem(l):null,setItem:(l,a)=>{kr()&&globalThis.localStorage.setItem(l,a)},removeItem:l=>{kr()&&globalThis.localStorage.removeItem(l)}};function C0(l={}){return{getItem:a=>l[a]||null,setItem:(a,i)=>{l[a]=i},removeItem:a=>{delete l[a]}}}function Z_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const hi={debug:!!(globalThis&&kr()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Rg extends Error{constructor(a){super(a),this.isAcquireTimeout=!0}}class K_ extends Rg{}async function J_(l,a,i){hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",l,a);const o=new globalThis.AbortController;return a>0&&setTimeout(()=>{o.abort(),hi.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",l)},a),await Promise.resolve().then(()=>globalThis.navigator.locks.request(l,a===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:o.signal},async s=>{if(s){hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",l,s.name);try{return await i()}finally{hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",l,s.name)}}else{if(a===0)throw hi.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",l),new K_(`Acquiring an exclusive Navigator LockManager lock "${l}" immediately failed`);if(hi.debug)try{const c=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(c,null,"  "))}catch(c){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",c)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await i()}}))}Z_();const I_={url:l_,storageKey:o_,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:s_,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function j0(l,a,i){return await i()}class jr{constructor(a){var i,o;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=jr.nextInstanceID,jr.nextInstanceID+=1,this.instanceID>0&&Nt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const s=Object.assign(Object.assign({},I_),a);if(this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.persistSession=s.persistSession,this.storageKey=s.storageKey,this.autoRefreshToken=s.autoRefreshToken,this.admin=new Q_({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=kg(s.fetch),this.lock=s.lock||j0,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,s.lock?this.lock=s.lock:Nt()&&(!((i=globalThis==null?void 0:globalThis.navigator)===null||i===void 0)&&i.locks)?this.lock=J_:this.lock=j0,this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?s.storage?this.storage=s.storage:kr()?this.storage=V_:(this.memoryStorage={},this.storage=C0(this.memoryStorage)):(this.memoryStorage={},this.storage=C0(this.memoryStorage)),Nt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(c){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",c)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async c=>{this._debug("received broadcast notification from other tab or client",c),await this._notifyAllSubscribers(c.data.event,c.data.session,!1)})}this.initialize()}_debug(...a){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${wg}) ${new Date().toISOString()}`,...a),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var a;try{const i=O_(window.location.href);let o="none";if(this._isImplicitGrantCallback(i)?o="implicit":await this._isPKCECallback(i)&&(o="pkce"),Nt()&&this.detectSessionInUrl&&o!=="none"){const{data:s,error:c}=await this._getSessionFromURL(i,o);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),p_(c)){const d=(a=c.details)===null||a===void 0?void 0:a.code;if(d==="identity_already_exists"||d==="identity_not_found"||d==="single_identity_not_deletable")return{error:c}}return await this._removeSession(),{error:c}}const{session:h,redirectType:g}=s;return this._debug("#_initialize()","detected session in URL",h,"redirect type",g),await this._saveSession(h),setTimeout(async()=>{g==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(i){return re(i)?{error:i}:{error:new Tg("Unexpected error during initialization",i)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(a){var i,o,s;try{const c=await fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(o=(i=a==null?void 0:a.options)===null||i===void 0?void 0:i.data)!==null&&o!==void 0?o:{},gotrue_meta_security:{captcha_token:(s=a==null?void 0:a.options)===null||s===void 0?void 0:s.captchaToken}},xform:un}),{data:h,error:g}=c;if(g||!h)return{data:{user:null,session:null},error:g};const d=h.session,p=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",d)),{data:{user:p,session:d},error:null}}catch(c){if(re(c))return{data:{user:null,session:null},error:c};throw c}}async signUp(a){var i,o,s;try{let c;if("email"in a){const{email:m,password:y,options:x}=a;let k=null,O=null;this.flowType==="pkce"&&([k,O]=await ci(this.storage,this.storageKey)),c=await fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:m,password:y,data:(i=x==null?void 0:x.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:k,code_challenge_method:O},xform:un})}else if("phone"in a){const{phone:m,password:y,options:x}=a;c=await fe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:m,password:y,data:(o=x==null?void 0:x.data)!==null&&o!==void 0?o:{},channel:(s=x==null?void 0:x.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:un})}else throw new go("You must provide either an email or phone number and a password");const{data:h,error:g}=c;if(g||!h)return{data:{user:null,session:null},error:g};const d=h.session,p=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",d)),{data:{user:p,session:d},error:null}}catch(c){if(re(c))return{data:{user:null,session:null},error:c};throw c}}async signInWithPassword(a){try{let i;if("email"in a){const{email:c,password:h,options:g}=a;i=await fe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:h,gotrue_meta_security:{captcha_token:g==null?void 0:g.captchaToken}},xform:R0})}else if("phone"in a){const{phone:c,password:h,options:g}=a;i=await fe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:h,gotrue_meta_security:{captcha_token:g==null?void 0:g.captchaToken}},xform:R0})}else throw new go("You must provide either an email or phone number and a password");const{data:o,error:s}=i;return s?{data:{user:null,session:null},error:s}:!o||!o.session||!o.user?{data:{user:null,session:null},error:new po}:(o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",o.session)),{data:Object.assign({user:o.user,session:o.session},o.weak_password?{weakPassword:o.weak_password}:null),error:s})}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithOAuth(a){var i,o,s,c;return await this._handleProviderSignIn(a.provider,{redirectTo:(i=a.options)===null||i===void 0?void 0:i.redirectTo,scopes:(o=a.options)===null||o===void 0?void 0:o.scopes,queryParams:(s=a.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(c=a.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(a){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(a))}async signInWithWeb3(a){const{chain:i}=a;if(i==="solana")return await this.signInWithSolana(a);throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`)}async signInWithSolana(a){var i,o,s,c,h,g,d,p,m,y,x,k;let O,E;if("message"in a)O=a.message,E=a.signature;else{const{chain:A,wallet:L,statement:V,options:z}=a;let P;if(Nt())if(typeof L=="object")P=L;else{const X=window;if("solana"in X&&typeof X.solana=="object"&&("signIn"in X.solana&&typeof X.solana.signIn=="function"||"signMessage"in X.solana&&typeof X.solana.signMessage=="function"))P=X.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof L!="object"||!(z!=null&&z.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");P=L}const H=new URL((i=z==null?void 0:z.url)!==null&&i!==void 0?i:window.location.href);if("signIn"in P&&P.signIn){const X=await P.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},z==null?void 0:z.signInWithSolana),{version:"1",domain:H.host,uri:H.href}),V?{statement:V}:null));let ne;if(Array.isArray(X)&&X[0]&&typeof X[0]=="object")ne=X[0];else if(X&&typeof X=="object"&&"signedMessage"in X&&"signature"in X)ne=X;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in ne&&"signature"in ne&&(typeof ne.signedMessage=="string"||ne.signedMessage instanceof Uint8Array)&&ne.signature instanceof Uint8Array)O=typeof ne.signedMessage=="string"?ne.signedMessage:new TextDecoder().decode(ne.signedMessage),E=ne.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in P)||typeof P.signMessage!="function"||!("publicKey"in P)||typeof P!="object"||!P.publicKey||!("toBase58"in P.publicKey)||typeof P.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");O=[`${H.host} wants you to sign in with your Solana account:`,P.publicKey.toBase58(),...V?["",V,""]:[""],"Version: 1",`URI: ${H.href}`,`Issued At: ${(s=(o=z==null?void 0:z.signInWithSolana)===null||o===void 0?void 0:o.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((c=z==null?void 0:z.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${z.signInWithSolana.notBefore}`]:[],...!((h=z==null?void 0:z.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${z.signInWithSolana.expirationTime}`]:[],...!((g=z==null?void 0:z.signInWithSolana)===null||g===void 0)&&g.chainId?[`Chain ID: ${z.signInWithSolana.chainId}`]:[],...!((d=z==null?void 0:z.signInWithSolana)===null||d===void 0)&&d.nonce?[`Nonce: ${z.signInWithSolana.nonce}`]:[],...!((p=z==null?void 0:z.signInWithSolana)===null||p===void 0)&&p.requestId?[`Request ID: ${z.signInWithSolana.requestId}`]:[],...!((y=(m=z==null?void 0:z.signInWithSolana)===null||m===void 0?void 0:m.resources)===null||y===void 0)&&y.length?["Resources",...z.signInWithSolana.resources.map(ne=>`- ${ne}`)]:[]].join(`
`);const X=await P.signMessage(new TextEncoder().encode(O),"utf8");if(!X||!(X instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");E=X}}try{const{data:A,error:L}=await fe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:O,signature:x_(E)},!((x=a.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(k=a.options)===null||k===void 0?void 0:k.captchaToken}}:null),xform:un});if(L)throw L;return!A||!A.session||!A.user?{data:{user:null,session:null},error:new po}:(A.session&&(await this._saveSession(A.session),await this._notifyAllSubscribers("SIGNED_IN",A.session)),{data:Object.assign({},A),error:L})}catch(A){if(re(A))return{data:{user:null,session:null},error:A};throw A}}async _exchangeCodeForSession(a){const i=await mo(this.storage,`${this.storageKey}-code-verifier`),[o,s]=(i??"").split("/");try{const{data:c,error:h}=await fe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:a,code_verifier:o},xform:un});if(await bo(this.storage,`${this.storageKey}-code-verifier`),h)throw h;return!c||!c.session||!c.user?{data:{user:null,session:null,redirectType:null},error:new po}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:Object.assign(Object.assign({},c),{redirectType:s??null}),error:h})}catch(c){if(re(c))return{data:{user:null,session:null,redirectType:null},error:c};throw c}}async signInWithIdToken(a){try{const{options:i,provider:o,token:s,access_token:c,nonce:h}=a,g=await fe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:o,id_token:s,access_token:c,nonce:h,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},xform:un}),{data:d,error:p}=g;return p?{data:{user:null,session:null},error:p}:!d||!d.session||!d.user?{data:{user:null,session:null},error:new po}:(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",d.session)),{data:d,error:p})}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithOtp(a){var i,o,s,c,h;try{if("email"in a){const{email:g,options:d}=a;let p=null,m=null;this.flowType==="pkce"&&([p,m]=await ci(this.storage,this.storageKey));const{error:y}=await fe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:g,data:(i=d==null?void 0:d.data)!==null&&i!==void 0?i:{},create_user:(o=d==null?void 0:d.shouldCreateUser)!==null&&o!==void 0?o:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},code_challenge:p,code_challenge_method:m},redirectTo:d==null?void 0:d.emailRedirectTo});return{data:{user:null,session:null},error:y}}if("phone"in a){const{phone:g,options:d}=a,{data:p,error:m}=await fe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:g,data:(s=d==null?void 0:d.data)!==null&&s!==void 0?s:{},create_user:(c=d==null?void 0:d.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken},channel:(h=d==null?void 0:d.channel)!==null&&h!==void 0?h:"sms"}});return{data:{user:null,session:null,messageId:p==null?void 0:p.message_id},error:m}}throw new go("You must provide either an email or phone number.")}catch(g){if(re(g))return{data:{user:null,session:null},error:g};throw g}}async verifyOtp(a){var i,o;try{let s,c;"options"in a&&(s=(i=a.options)===null||i===void 0?void 0:i.redirectTo,c=(o=a.options)===null||o===void 0?void 0:o.captchaToken);const{data:h,error:g}=await fe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},a),{gotrue_meta_security:{captcha_token:c}}),redirectTo:s,xform:un});if(g)throw g;if(!h)throw new Error("An error occurred on token verification.");const d=h.session,p=h.user;return d!=null&&d.access_token&&(await this._saveSession(d),await this._notifyAllSubscribers(a.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",d)),{data:{user:p,session:d},error:null}}catch(s){if(re(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithSSO(a){var i,o,s;try{let c=null,h=null;return this.flowType==="pkce"&&([c,h]=await ci(this.storage,this.storageKey)),await fe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in a?{provider_id:a.providerId}:null),"domain"in a?{domain:a.domain}:null),{redirect_to:(o=(i=a.options)===null||i===void 0?void 0:i.redirectTo)!==null&&o!==void 0?o:void 0}),!((s=a==null?void 0:a.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:a.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:c,code_challenge_method:h}),headers:this.headers,xform:H_})}catch(c){if(re(c))return{data:null,error:c};throw c}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async a=>{const{data:{session:i},error:o}=a;if(o)throw o;if(!i)throw new Pn;const{error:s}=await fe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:i.access_token});return{data:{user:null,session:null},error:s}})}catch(a){if(re(a))return{data:{user:null,session:null},error:a};throw a}}async resend(a){try{const i=`${this.url}/resend`;if("email"in a){const{email:o,type:s,options:c}=a,{error:h}=await fe(this.fetch,"POST",i,{headers:this.headers,body:{email:o,type:s,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},redirectTo:c==null?void 0:c.emailRedirectTo});return{data:{user:null,session:null},error:h}}else if("phone"in a){const{phone:o,type:s,options:c}=a,{data:h,error:g}=await fe(this.fetch,"POST",i,{headers:this.headers,body:{phone:o,type:s,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}}});return{data:{user:null,session:null,messageId:h==null?void 0:h.message_id},error:g}}throw new go("You must provide either an email or phone number and a type")}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async i=>i))}async _acquireLock(a,i){this._debug("#_acquireLock","begin",a);try{if(this.lockAcquired){const o=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await o,await i()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,a,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const o=i();for(this.pendingInLock.push((async()=>{try{await o}catch{}})()),await o;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await o}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(a){this._debug("#_useSession","begin");try{const i=await this.__loadSession();return await a(i)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let a=null;const i=await mo(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",i),i!==null&&(this._isValidSession(i)?a=i:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!a)return{data:{session:null},error:null};const o=a.expires_at?a.expires_at*1e3-Date.now()<ic:!1;if(this._debug("#__loadSession()",`session has${o?"":" not"} expired`,"expires_at",a.expires_at),!o){if(this.storage.isServer){let h=this.suppressGetSessionWarning;a=new Proxy(a,{get:(d,p,m)=>(!h&&p==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),h=!0,this.suppressGetSessionWarning=!0),Reflect.get(d,p,m))})}return{data:{session:a},error:null}}const{session:s,error:c}=await this._callRefreshToken(a.refresh_token);return c?{data:{session:null},error:c}:{data:{session:s},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(a){return a?await this._getUser(a):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(a){try{return a?await fe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:a,xform:Gn}):await this._useSession(async i=>{var o,s,c;const{data:h,error:g}=i;if(g)throw g;return!(!((o=h.session)===null||o===void 0)&&o.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Pn}:await fe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(s=h.session)===null||s===void 0?void 0:s.access_token)!==null&&c!==void 0?c:void 0,xform:Gn})})}catch(i){if(re(i))return d_(i)&&(await this._removeSession(),await bo(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:i};throw i}}async updateUser(a,i={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(a,i))}async _updateUser(a,i={}){try{return await this._useSession(async o=>{const{data:s,error:c}=o;if(c)throw c;if(!s.session)throw new Pn;const h=s.session;let g=null,d=null;this.flowType==="pkce"&&a.email!=null&&([g,d]=await ci(this.storage,this.storageKey));const{data:p,error:m}=await fe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:i==null?void 0:i.emailRedirectTo,body:Object.assign(Object.assign({},a),{code_challenge:g,code_challenge_method:d}),jwt:h.access_token,xform:Gn});if(m)throw m;return h.user=p.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),{data:{user:h.user},error:null}})}catch(o){if(re(o))return{data:{user:null},error:o};throw o}}async setSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(a))}async _setSession(a){try{if(!a.access_token||!a.refresh_token)throw new Pn;const i=Date.now()/1e3;let o=i,s=!0,c=null;const{payload:h}=lc(a.access_token);if(h.exp&&(o=h.exp,s=o<=i),s){const{session:g,error:d}=await this._callRefreshToken(a.refresh_token);if(d)return{data:{user:null,session:null},error:d};if(!g)return{data:{user:null,session:null},error:null};c=g}else{const{data:g,error:d}=await this._getUser(a.access_token);if(d)throw d;c={access_token:a.access_token,refresh_token:a.refresh_token,user:g.user,token_type:"bearer",expires_in:o-i,expires_at:o},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return{data:{user:c.user,session:c},error:null}}catch(i){if(re(i))return{data:{session:null,user:null},error:i};throw i}}async refreshSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(a))}async _refreshSession(a){try{return await this._useSession(async i=>{var o;if(!a){const{data:h,error:g}=i;if(g)throw g;a=(o=h.session)!==null&&o!==void 0?o:void 0}if(!(a!=null&&a.refresh_token))throw new Pn;const{session:s,error:c}=await this._callRefreshToken(a.refresh_token);return c?{data:{user:null,session:null},error:c}:s?{data:{user:s.user,session:s},error:null}:{data:{user:null,session:null},error:null}})}catch(i){if(re(i))return{data:{user:null,session:null},error:i};throw i}}async _getSessionFromURL(a,i){try{if(!Nt())throw new vo("No browser detected.");if(a.error||a.error_description||a.error_code)throw new vo(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});switch(i){case"implicit":if(this.flowType==="pkce")throw new w0("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new vo("Not a valid implicit grant flow url.");break;default:}if(i==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!a.code)throw new w0("No code detected.");const{data:V,error:z}=await this._exchangeCodeForSession(a.code);if(z)throw z;const P=new URL(window.location.href);return P.searchParams.delete("code"),window.history.replaceState(window.history.state,"",P.toString()),{data:{session:V.session,redirectType:null},error:null}}const{provider_token:o,provider_refresh_token:s,access_token:c,refresh_token:h,expires_in:g,expires_at:d,token_type:p}=a;if(!c||!g||!h||!p)throw new vo("No session defined in URL");const m=Math.round(Date.now()/1e3),y=parseInt(g);let x=m+y;d&&(x=parseInt(d));const k=x-m;k*1e3<=pi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${k}s, should have been closer to ${y}s`);const O=x-y;m-O>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",O,x,m):m-O<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",O,x,m);const{data:E,error:A}=await this._getUser(c);if(A)throw A;const L={provider_token:o,provider_refresh_token:s,access_token:c,expires_in:y,expires_at:x,refresh_token:h,token_type:p,user:E.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:L,redirectType:a.type},error:null}}catch(o){if(re(o))return{data:{session:null,redirectType:null},error:o};throw o}}_isImplicitGrantCallback(a){return!!(a.access_token||a.error_description)}async _isPKCECallback(a){const i=await mo(this.storage,`${this.storageKey}-code-verifier`);return!!(a.code&&i)}async signOut(a={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(a))}async _signOut({scope:a}={scope:"global"}){return await this._useSession(async i=>{var o;const{data:s,error:c}=i;if(c)return{error:c};const h=(o=s.session)===null||o===void 0?void 0:o.access_token;if(h){const{error:g}=await this.admin.signOut(h,a);if(g&&!(h_(g)&&(g.status===404||g.status===401||g.status===403)))return{error:g}}return a!=="others"&&(await this._removeSession(),await bo(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(a){const i=w_(),o={id:i,callback:a,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",i),this.stateChangeEmitters.delete(i)}};return this._debug("#onAuthStateChange()","registered callback with id",i),this.stateChangeEmitters.set(i,o),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(i)})))(),{data:{subscription:o}}}async _emitInitialSession(a){return await this._useSession(async i=>{var o,s;try{const{data:{session:c},error:h}=i;if(h)throw h;await((o=this.stateChangeEmitters.get(a))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",a,"session",c)}catch(c){await((s=this.stateChangeEmitters.get(a))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",a,"error",c),console.error(c)}})}async resetPasswordForEmail(a,i={}){let o=null,s=null;this.flowType==="pkce"&&([o,s]=await ci(this.storage,this.storageKey,!0));try{return await fe(this.fetch,"POST",`${this.url}/recover`,{body:{email:a,code_challenge:o,code_challenge_method:s,gotrue_meta_security:{captcha_token:i.captchaToken}},headers:this.headers,redirectTo:i.redirectTo})}catch(c){if(re(c))return{data:null,error:c};throw c}}async getUserIdentities(){var a;try{const{data:i,error:o}=await this.getUser();if(o)throw o;return{data:{identities:(a=i.user.identities)!==null&&a!==void 0?a:[]},error:null}}catch(i){if(re(i))return{data:null,error:i};throw i}}async linkIdentity(a){var i;try{const{data:o,error:s}=await this._useSession(async c=>{var h,g,d,p,m;const{data:y,error:x}=c;if(x)throw x;const k=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,a.provider,{redirectTo:(h=a.options)===null||h===void 0?void 0:h.redirectTo,scopes:(g=a.options)===null||g===void 0?void 0:g.scopes,queryParams:(d=a.options)===null||d===void 0?void 0:d.queryParams,skipBrowserRedirect:!0});return await fe(this.fetch,"GET",k,{headers:this.headers,jwt:(m=(p=y.session)===null||p===void 0?void 0:p.access_token)!==null&&m!==void 0?m:void 0})});if(s)throw s;return Nt()&&!(!((i=a.options)===null||i===void 0)&&i.skipBrowserRedirect)&&window.location.assign(o==null?void 0:o.url),{data:{provider:a.provider,url:o==null?void 0:o.url},error:null}}catch(o){if(re(o))return{data:{provider:a.provider,url:null},error:o};throw o}}async unlinkIdentity(a){try{return await this._useSession(async i=>{var o,s;const{data:c,error:h}=i;if(h)throw h;return await fe(this.fetch,"DELETE",`${this.url}/user/identities/${a.identity_id}`,{headers:this.headers,jwt:(s=(o=c.session)===null||o===void 0?void 0:o.access_token)!==null&&s!==void 0?s:void 0})})}catch(i){if(re(i))return{data:null,error:i};throw i}}async _refreshAccessToken(a){const i=`#_refreshAccessToken(${a.substring(0,5)}...)`;this._debug(i,"begin");try{const o=Date.now();return await k_(async s=>(s>0&&await E_(200*Math.pow(2,s-1)),this._debug(i,"refreshing attempt",s),await fe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:a},headers:this.headers,xform:un})),(s,c)=>{const h=200*Math.pow(2,s);return c&&rc(c)&&Date.now()+h-o<pi})}catch(o){if(this._debug(i,"error",o),re(o))return{data:{session:null,user:null},error:o};throw o}finally{this._debug(i,"end")}}_isValidSession(a){return typeof a=="object"&&a!==null&&"access_token"in a&&"refresh_token"in a&&"expires_at"in a}async _handleProviderSignIn(a,i){const o=await this._getUrlForProvider(`${this.url}/authorize`,a,{redirectTo:i.redirectTo,scopes:i.scopes,queryParams:i.queryParams});return this._debug("#_handleProviderSignIn()","provider",a,"options",i,"url",o),Nt()&&!i.skipBrowserRedirect&&window.location.assign(o),{data:{provider:a,url:o},error:null}}async _recoverAndRefresh(){var a;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const o=await mo(this.storage,this.storageKey);if(this._debug(i,"session from storage",o),!this._isValidSession(o)){this._debug(i,"session is not valid"),o!==null&&await this._removeSession();return}const s=((a=o.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<ic;if(this._debug(i,`session has${s?"":" not"} expired with margin of ${ic}s`),s){if(this.autoRefreshToken&&o.refresh_token){const{error:c}=await this._callRefreshToken(o.refresh_token);c&&(console.error(c),rc(c)||(this._debug(i,"refresh failed with a non-retryable error, removing the session",c),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(i,"error",o),console.error(o);return}finally{this._debug(i,"end")}}async _callRefreshToken(a){var i,o;if(!a)throw new Pn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const s=`#_callRefreshToken(${a.substring(0,5)}...)`;this._debug(s,"begin");try{this.refreshingDeferred=new Co;const{data:c,error:h}=await this._refreshAccessToken(a);if(h)throw h;if(!c.session)throw new Pn;await this._saveSession(c.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",c.session);const g={session:c.session,error:null};return this.refreshingDeferred.resolve(g),g}catch(c){if(this._debug(s,"error",c),re(c)){const h={session:null,error:c};return rc(c)||await this._removeSession(),(i=this.refreshingDeferred)===null||i===void 0||i.resolve(h),h}throw(o=this.refreshingDeferred)===null||o===void 0||o.reject(c),c}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(a,i,o=!0){const s=`#_notifyAllSubscribers(${a})`;this._debug(s,"begin",i,`broadcast = ${o}`);try{this.broadcastChannel&&o&&this.broadcastChannel.postMessage({event:a,session:i});const c=[],h=Array.from(this.stateChangeEmitters.values()).map(async g=>{try{await g.callback(a,i)}catch(d){c.push(d)}});if(await Promise.all(h),c.length>0){for(let g=0;g<c.length;g+=1)console.error(c[g]);throw c[0]}}finally{this._debug(s,"end")}}async _saveSession(a){this._debug("#_saveSession()",a),this.suppressGetSessionWarning=!0,await Ag(this.storage,this.storageKey,a)}async _removeSession(){this._debug("#_removeSession()"),await bo(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const a=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{a&&Nt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",a)}catch(i){console.error("removing visibilitychange callback failed",i)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const a=setInterval(()=>this._autoRefreshTokenTick(),pi);this.autoRefreshTicker=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const a=this.autoRefreshTicker;this.autoRefreshTicker=null,a&&clearInterval(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const a=Date.now();try{return await this._useSession(async i=>{const{data:{session:o}}=i;if(!o||!o.refresh_token||!o.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((o.expires_at*1e3-a)/pi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${pi}ms, refresh threshold is ${wc} ticks`),s<=wc&&await this._callRefreshToken(o.refresh_token)})}catch(i){console.error("Auto refresh tick failed with error. This is likely a transient error.",i)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(a){if(a.isAcquireTimeout||a instanceof Rg)this._debug("auto refresh token tick lock not available");else throw a}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Nt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(a){console.error("_handleVisibilityChange",a)}}async _onVisibilityChanged(a){const i=`#_onVisibilityChanged(${a})`;this._debug(i,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),a||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(i,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(a,i,o){const s=[`provider=${encodeURIComponent(i)}`];if(o!=null&&o.redirectTo&&s.push(`redirect_to=${encodeURIComponent(o.redirectTo)}`),o!=null&&o.scopes&&s.push(`scopes=${encodeURIComponent(o.scopes)}`),this.flowType==="pkce"){const[c,h]=await ci(this.storage,this.storageKey),g=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(h)}`});s.push(g.toString())}if(o!=null&&o.queryParams){const c=new URLSearchParams(o.queryParams);s.push(c.toString())}return o!=null&&o.skipBrowserRedirect&&s.push(`skip_http_redirect=${o.skipBrowserRedirect}`),`${a}?${s.join("&")}`}async _unenroll(a){try{return await this._useSession(async i=>{var o;const{data:s,error:c}=i;return c?{data:null,error:c}:await fe(this.fetch,"DELETE",`${this.url}/factors/${a.factorId}`,{headers:this.headers,jwt:(o=s==null?void 0:s.session)===null||o===void 0?void 0:o.access_token})})}catch(i){if(re(i))return{data:null,error:i};throw i}}async _enroll(a){try{return await this._useSession(async i=>{var o,s;const{data:c,error:h}=i;if(h)return{data:null,error:h};const g=Object.assign({friendly_name:a.friendlyName,factor_type:a.factorType},a.factorType==="phone"?{phone:a.phone}:{issuer:a.issuer}),{data:d,error:p}=await fe(this.fetch,"POST",`${this.url}/factors`,{body:g,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});return p?{data:null,error:p}:(a.factorType==="totp"&&(!((s=d==null?void 0:d.totp)===null||s===void 0)&&s.qr_code)&&(d.totp.qr_code=`data:image/svg+xml;utf-8,${d.totp.qr_code}`),{data:d,error:null})})}catch(i){if(re(i))return{data:null,error:i};throw i}}async _verify(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async i=>{var o;const{data:s,error:c}=i;if(c)return{data:null,error:c};const{data:h,error:g}=await fe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/verify`,{body:{code:a.code,challenge_id:a.challengeId},headers:this.headers,jwt:(o=s==null?void 0:s.session)===null||o===void 0?void 0:o.access_token});return g?{data:null,error:g}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+h.expires_in},h)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",h),{data:h,error:g})})}catch(i){if(re(i))return{data:null,error:i};throw i}})}async _challenge(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async i=>{var o;const{data:s,error:c}=i;return c?{data:null,error:c}:await fe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/challenge`,{body:{channel:a.channel},headers:this.headers,jwt:(o=s==null?void 0:s.session)===null||o===void 0?void 0:o.access_token})})}catch(i){if(re(i))return{data:null,error:i};throw i}})}async _challengeAndVerify(a){const{data:i,error:o}=await this._challenge({factorId:a.factorId});return o?{data:null,error:o}:await this._verify({factorId:a.factorId,challengeId:i.id,code:a.code})}async _listFactors(){const{data:{user:a},error:i}=await this.getUser();if(i)return{data:null,error:i};const o=(a==null?void 0:a.factors)||[],s=o.filter(h=>h.factor_type==="totp"&&h.status==="verified"),c=o.filter(h=>h.factor_type==="phone"&&h.status==="verified");return{data:{all:o,totp:s,phone:c},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async a=>{var i,o;const{data:{session:s},error:c}=a;if(c)return{data:null,error:c};if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:h}=lc(s.access_token);let g=null;h.aal&&(g=h.aal);let d=g;((o=(i=s.user.factors)===null||i===void 0?void 0:i.filter(y=>y.status==="verified"))!==null&&o!==void 0?o:[]).length>0&&(d="aal2");const m=h.amr||[];return{data:{currentLevel:g,nextLevel:d,currentAuthenticationMethods:m},error:null}}))}async fetchJwk(a,i={keys:[]}){let o=i.keys.find(h=>h.kid===a);if(o||(o=this.jwks.keys.find(h=>h.kid===a),o&&this.jwks_cached_at+c_>Date.now()))return o;const{data:s,error:c}=await fe(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(c)throw c;if(!s.keys||s.keys.length===0)throw new Er("JWKS is empty");if(this.jwks=s,this.jwks_cached_at=Date.now(),o=s.keys.find(h=>h.kid===a),!o)throw new Er("No matching signing key found in JWKS");return o}async getClaims(a,i={keys:[]}){try{let o=a;if(!o){const{data:k,error:O}=await this.getSession();if(O||!k.session)return{data:null,error:O};o=k.session.access_token}const{header:s,payload:c,signature:h,raw:{header:g,payload:d}}=lc(o);if(U_(c.exp),!s.kid||s.alg==="HS256"||!("crypto"in globalThis&&"subtle"in globalThis.crypto)){const{error:k}=await this.getUser(o);if(k)throw k;return{data:{claims:c,header:s,signature:h},error:null}}const p=z_(s.alg),m=await this.fetchJwk(s.kid,i),y=await crypto.subtle.importKey("jwk",m,p,!0,["verify"]);if(!await crypto.subtle.verify(p,y,h,__(`${g}.${d}`)))throw new Er("Invalid JWT signature");return{data:{claims:c,header:s,signature:h},error:null}}catch(o){if(re(o))return{data:null,error:o};throw o}}}jr.nextInstanceID=0;const F_=jr;class W_ extends F_{constructor(a){super(a)}}var ex=function(l,a,i,o){function s(c){return c instanceof i?c:new i(function(h){h(c)})}return new(i||(i=Promise))(function(c,h){function g(m){try{p(o.next(m))}catch(y){h(y)}}function d(m){try{p(o.throw(m))}catch(y){h(y)}}function p(m){m.done?c(m.value):s(m.value).then(g,d)}p((o=o.apply(l,a||[])).next())})};class tx{constructor(a,i,o){var s,c,h;if(this.supabaseUrl=a,this.supabaseKey=i,!a)throw new Error("supabaseUrl is required.");if(!i)throw new Error("supabaseKey is required.");const g=i_(a),d=new URL(g);this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const p=`sb-${d.hostname.split(".")[0]}-auth-token`,m={db:J1,realtime:F1,auth:Object.assign(Object.assign({},I1),{storageKey:p}),global:K1},y=r_(o??{},m);this.storageKey=(s=y.auth.storageKey)!==null&&s!==void 0?s:"",this.headers=(c=y.global.headers)!==null&&c!==void 0?c:{},y.accessToken?(this.accessToken=y.accessToken,this.auth=new Proxy({},{get:(x,k)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(k)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((h=y.auth)!==null&&h!==void 0?h:{},this.headers,y.global.fetch),this.fetch=n_(i,this._getAccessToken.bind(this),y.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},y.realtime)),this.rest=new y1(new URL("rest/v1",d).href,{headers:this.headers,schema:y.db.schema,fetch:this.fetch}),y.accessToken||this._listenForAuthEvents()}get functions(){return new o1(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}get storage(){return new Q1(this.storageUrl.href,this.headers,this.fetch)}from(a){return this.rest.from(a)}schema(a){return this.rest.schema(a)}rpc(a,i={},o={}){return this.rest.rpc(a,i,o)}channel(a,i={config:{}}){return this.realtime.channel(a,i)}getChannels(){return this.realtime.getChannels()}removeChannel(a){return this.realtime.removeChannel(a)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var a,i;return ex(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:o}=yield this.auth.getSession();return(i=(a=o.session)===null||a===void 0?void 0:a.access_token)!==null&&i!==void 0?i:null})}_initSupabaseAuthClient({autoRefreshToken:a,persistSession:i,detectSessionInUrl:o,storage:s,storageKey:c,flowType:h,lock:g,debug:d},p,m){const y={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new W_({url:this.authUrl.href,headers:Object.assign(Object.assign({},y),p),storageKey:c,autoRefreshToken:a,persistSession:i,detectSessionInUrl:o,storage:s,flowType:h,lock:g,debug:d,fetch:m,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(a){return new D1(this.realtimeUrl.href,Object.assign(Object.assign({},a),{params:Object.assign({apikey:this.supabaseKey},a==null?void 0:a.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((i,o)=>{this._handleTokenChanged(i,"CLIENT",o==null?void 0:o.access_token)})}_handleTokenChanged(a,i,o){(a==="TOKEN_REFRESHED"||a==="SIGNED_IN")&&this.changedAccessToken!==o?this.changedAccessToken=o:a==="SIGNED_OUT"&&(this.realtime.setAuth(),i=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const nx=(l,a,i)=>new tx(l,a,i);function ax(){const[l,a]=Y.useState(!1),[i,o]=Y.useState(!1),s=Lr(),c=()=>{const d=window.innerHeight*.2;window.scrollY>d?o(!0):o(!1)};Y.useEffect(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[]);function h(){a(!l)}const g=d=>{if(d.currentTarget.getAttribute("href").startsWith("#")){d.preventDefault();const p=d.currentTarget.getAttribute("href"),m=document.querySelector(p);m&&(m.scrollIntoView({behavior:"smooth"}),a(!1))}};return K.jsx("header",{className:i?"header--scrolled":"",children:K.jsxs("div",{className:"header-content",children:[K.jsx(di,{to:"/",children:K.jsx("img",{src:"/img/logo-white.svg",alt:"Portfolio Logo"})}),K.jsx("iconify-icon",{className:"menuToggleBtn",icon:"material-symbols:menu-rounded",width:"24",height:"24",onClick:h}),K.jsx("nav",{className:`navMenu ${l?"navMenu--open":""}`,children:K.jsxs("ul",{children:[K.jsx("li",{children:K.jsx(di,{to:"/#my",onClick:g,className:s.hash==="#my"?"active":"",children:"My"})}),K.jsx("li",{children:K.jsx(di,{to:"/#projects",onClick:g,className:s.hash==="#projects"?"active":"",children:"Projects"})}),K.jsx("li",{children:K.jsx(di,{to:"/#documentation",onClick:g,className:s.hash==="#documentation"?"active":"",children:"Documentation"})}),K.jsx("li",{children:K.jsx(di,{to:"/contact",onClick:g,className:s.pathname==="/contact"?"active":"",children:"Contact"})})]})})]})})}function Ec(){return Ec=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(l[o]=i[o])}return l},Ec.apply(this,arguments)}var ix={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(l){},onComplete:function(l){},preStringTyped:function(l,a){},onStringTyped:function(l,a){},onLastStringBackspaced:function(l){},onTypingPaused:function(l,a){},onTypingResumed:function(l,a){},onReset:function(l){},onStop:function(l,a){},onStart:function(l,a){},onDestroy:function(l){}},rx=new(function(){function l(){}var a=l.prototype;return a.load=function(i,o,s){if(i.el=typeof s=="string"?document.querySelector(s):s,i.options=Ec({},ix,o),i.isInput=i.el.tagName.toLowerCase()==="input",i.attr=i.options.attr,i.bindInputFocusEvents=i.options.bindInputFocusEvents,i.showCursor=!i.isInput&&i.options.showCursor,i.cursorChar=i.options.cursorChar,i.cursorBlinking=!0,i.elContent=i.attr?i.el.getAttribute(i.attr):i.el.textContent,i.contentType=i.options.contentType,i.typeSpeed=i.options.typeSpeed,i.startDelay=i.options.startDelay,i.backSpeed=i.options.backSpeed,i.smartBackspace=i.options.smartBackspace,i.backDelay=i.options.backDelay,i.fadeOut=i.options.fadeOut,i.fadeOutClass=i.options.fadeOutClass,i.fadeOutDelay=i.options.fadeOutDelay,i.isPaused=!1,i.strings=i.options.strings.map(function(p){return p.trim()}),i.stringsElement=typeof i.options.stringsElement=="string"?document.querySelector(i.options.stringsElement):i.options.stringsElement,i.stringsElement){i.strings=[],i.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var c=Array.prototype.slice.apply(i.stringsElement.children),h=c.length;if(h)for(var g=0;g<h;g+=1)i.strings.push(c[g].innerHTML.trim())}for(var d in i.strPos=0,i.currentElContent=this.getCurrentElContent(i),i.currentElContent&&i.currentElContent.length>0&&(i.strPos=i.currentElContent.length-1,i.strings.unshift(i.currentElContent)),i.sequence=[],i.strings)i.sequence[d]=d;i.arrayPos=0,i.stopNum=0,i.loop=i.options.loop,i.loopCount=i.options.loopCount,i.curLoop=0,i.shuffle=i.options.shuffle,i.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},i.typingComplete=!1,i.autoInsertCss=i.options.autoInsertCss,i.autoInsertCss&&(this.appendCursorAnimationCss(i),this.appendFadeOutAnimationCss(i))},a.getCurrentElContent=function(i){return i.attr?i.el.getAttribute(i.attr):i.isInput?i.el.value:i.contentType==="html"?i.el.innerHTML:i.el.textContent},a.appendCursorAnimationCss=function(i){var o="data-typed-js-cursor-css";if(i.showCursor&&!document.querySelector("["+o+"]")){var s=document.createElement("style");s.setAttribute(o,"true"),s.innerHTML=`
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
      `,document.body.appendChild(s)}},l}()),D0=new(function(){function l(){}var a=l.prototype;return a.typeHtmlChars=function(i,o,s){if(s.contentType!=="html")return o;var c=i.substring(o).charAt(0);if(c==="<"||c==="&"){var h;for(h=c==="<"?">":";";i.substring(o+1).charAt(0)!==h&&!(1+ ++o>i.length););o++}return o},a.backSpaceHtmlChars=function(i,o,s){if(s.contentType!=="html")return o;var c=i.substring(o).charAt(0);if(c===">"||c===";"){var h;for(h=c===">"?"<":"&";i.substring(o-1).charAt(0)!==h&&!(--o<0););o--}return o},l}()),lx=function(){function l(i,o){rx.load(this,o,i),this.begin()}var a=l.prototype;return a.toggle=function(){this.pause.status?this.start():this.stop()},a.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},a.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},a.destroy=function(){this.reset(!1),this.options.onDestroy(this)},a.reset=function(i){i===void 0&&(i=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,i&&(this.insertCursor(),this.options.onReset(this),this.begin())},a.begin=function(){var i=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){i.strPos===0?i.typewrite(i.strings[i.sequence[i.arrayPos]],i.strPos):i.backspace(i.strings[i.sequence[i.arrayPos]],i.strPos)},this.startDelay)},a.typewrite=function(i,o){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var c=this.humanizer(this.typeSpeed),h=1;this.pause.status!==!0?this.timeout=setTimeout(function(){o=D0.typeHtmlChars(i,o,s);var g=0,d=i.substring(o);if(d.charAt(0)==="^"&&/^\^\d+/.test(d)){var p=1;p+=(d=/\d+/.exec(d)[0]).length,g=parseInt(d),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),i=i.substring(0,o)+i.substring(o+p),s.toggleBlinking(!0)}if(d.charAt(0)==="`"){for(;i.substring(o+h).charAt(0)!=="`"&&(h++,!(o+h>i.length)););var m=i.substring(0,o),y=i.substring(m.length+1,o+h),x=i.substring(o+h+1);i=m+y+x,h--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),o>=i.length?s.doneTyping(i,o):s.keepTyping(i,o,h),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},g)},c):this.setPauseStatus(i,o,!0)},a.keepTyping=function(i,o,s){o===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var c=i.substring(0,o+=s);this.replaceText(c),this.typewrite(i,o)},a.doneTyping=function(i,o){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(i,o)},this.backDelay))},a.backspace=function(i,o){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var c=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){o=D0.backSpaceHtmlChars(i,o,s);var h=i.substring(0,o);if(s.replaceText(h),s.smartBackspace){var g=s.strings[s.arrayPos+1];s.stopNum=g&&h===g.substring(0,o)?o:0}o>s.stopNum?(o--,s.backspace(i,o)):o<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],o))},c)}else this.setPauseStatus(i,o,!1)},a.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},a.setPauseStatus=function(i,o,s){this.pause.typewrite=s,this.pause.curString=i,this.pause.curStrPos=o},a.toggleBlinking=function(i){this.cursor&&(this.pause.status||this.cursorBlinking!==i&&(this.cursorBlinking=i,i?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},a.humanizer=function(i){return Math.round(Math.random()*i/2)+i},a.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},a.initFadeOut=function(){var i=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){i.arrayPos++,i.replaceText(""),i.strings.length>i.arrayPos?i.typewrite(i.strings[i.sequence[i.arrayPos]],0):(i.typewrite(i.strings[0],0),i.arrayPos=0)},this.fadeOutDelay)},a.replaceText=function(i){this.attr?this.el.setAttribute(this.attr,i):this.isInput?this.el.value=i:this.contentType==="html"?this.el.innerHTML=i:this.el.textContent=i},a.bindFocusEvents=function(){var i=this;this.isInput&&(this.el.addEventListener("focus",function(o){i.stop()}),this.el.addEventListener("blur",function(o){i.el.value&&i.el.value.length!==0||i.start()}))},a.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},l}();function sc({icon:l,href:a,id:i}){return K.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"social-button",id:i,children:K.jsx("iconify-icon",{icon:l})})}function ox(){return K.jsxs("div",{className:"social-list",children:[K.jsx(sc,{href:"https://linkedin.com/in/hirakada/",icon:"mdi:linkedin",id:"linkedin"}),K.jsx(sc,{href:"https://instagram.com/hirakada/",icon:"mdi:instagram",id:"instagram"}),K.jsx(sc,{href:"https://github.com/Hirakada",icon:"mdi:github",id:"github"})]})}function sx({id:l,coverImage:a,title:i,collaborators:o,attributes:s,projectUrl:c}){return K.jsxs("div",{className:"featuredProject",onClick:()=>{console.log("URL being opened:",c),window.open(c,"_blank")},children:[K.jsx("img",{src:a,alt:`Cover image for ${i}`,className:"cardImage"}),K.jsx("h5",{className:"projectName",children:i}),K.jsxs("div",{className:"cardSection",children:[s&&s.length>0&&K.jsx("ul",{className:"attributesList",children:s.map(h=>K.jsx("li",{className:"attributeItem",children:h.name},h.id))}),o&&o.length>0&&K.jsx("ul",{className:"collaboratorsList",children:o.map(h=>K.jsx("li",{className:"collaboratorItem",children:h.profileImage&&K.jsx("img",{src:h.profileImage,alt:`Profile of ${h.name}`,className:"collaborator-profile-pic"})},h.id))})]})]})}function ux({projects:l}){const a=Y.useRef(null);Y.useEffect(()=>{if(a.current){const o=new lx(a.current,{strings:["UI/UX Designer","Frontend Developer","Digital Marketer"],typeSpeed:80,backSpeed:50,backDelay:1e3,loop:!0,showCursor:!1});return()=>{o.destroy()}}},[]);const i=l||[];return K.jsxs(K.Fragment,{children:[K.jsxs("section",{className:"hero-section",children:[K.jsxs("div",{className:"greeting",children:[K.jsx("h3",{children:"Hi! I am"}),K.jsx("h1",{className:"role",children:K.jsx("span",{className:"auto-type",id:"role",ref:a})})]}),K.jsx(ox,{})]}),K.jsxs("section",{className:"featured-projects-section",children:[K.jsx("h2",{children:"Featured Projects"}),i.length>0?K.jsx("div",{className:"featured-projects-grid",children:i.map(o=>K.jsx(sx,{coverImage:o.coverImage,title:o.title,collaborators:o.collaborators,attributes:o.attributes,projectUrl:o.projectUrl},o.id))}):K.jsx("p",{children:"No featured projects available."})]})]})}const cx=nx("https://haackkpsvjlpttequfou.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhYWNra3BzdmpscHR0ZXF1Zm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzUzODQsImV4cCI6MjA2NTA1MTM4NH0.KafohzUXKVzBo6Fs3lXULzXZ5XRWgCY8Jx-wONLTXuI");function fx(){const[l,a]=Y.useState([]),[i,o]=Y.useState(!0),[s,c]=Y.useState(null);Y.useEffect(()=>{h()},[]);async function h(){o(!0),c(null);try{const{data:g,error:d}=await cx.from("projects").select(`
          *,
          project_attributes (
            attributes (
              *
            )
          ),
          project_collaborators (
            collaborators (
              *
            )
          ),
          project_images (
            *
          )
        `);if(d)console.error("Error fetching projects with details:",d),c(d.message),a([]);else{console.log("Raw data fetched from Supabase (all columns, nested):",g);const p=g.map(m=>{const y=m.project_attributes.map(O=>({id:O.attributes.id,name:O.attributes.name,iconUrl:O.attributes.icon_url})),x=m.project_collaborators.map(O=>({id:O.collaborators.id,name:O.collaborators.name,profileImage:O.collaborators.profile_image_url,websiteUrl:O.collaborators.website_url,linkediUrl:O.collaborators.linkedin_url}));let k=null;return m.project_images&&m.project_images.length>0&&(k=[...m.project_images].sort((E,A)=>E.order-A.order)[0].image_url),{id:m.id,title:m.title,description:m.description,coverImage:k,attributes:y,collaborators:x,projectUrl:m.project_url}});console.log("Transformed data for components:",p),a(p)}}catch(g){console.error("An unexpected error occurred:",g),c("An unexpected error occurred while fetching project data.")}finally{o(!1)}}return i?K.jsx("div",{className:"flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-white/80 z-50",children:K.jsx(Ib,{color:"#E0E0E0",size:"medium",text:"",textColor:""})}):s?K.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen text-red-600 p-4",children:[K.jsx("h2",{children:"Error Loading Data"}),K.jsx("p",{children:s}),K.jsx("button",{onClick:h,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Try Again"})]}):K.jsxs(Jy,{basename:"/",children:[K.jsx(ax,{}),K.jsx("main",{children:K.jsxs(Yy,{children:[K.jsx(pc,{path:"/",element:K.jsx(ux,{projects:l})}),K.jsx(pc,{path:"*",element:K.jsxs("div",{className:`
                  flex flex-col items-center justify-center 
                  text-gray-700 bg-gray-50 p-4
                `,style:{minHeight:"calc(100vh - 64px)"},children:[K.jsx("h1",{className:"text-6xl font-extrabold text-red-600",children:"404"}),K.jsx("p",{className:"text-2xl mt-4",children:"Page Not Found"}),K.jsx("p",{className:"mt-2 text-lg",children:"The page you are looking for does not exist."}),K.jsx(di,{to:"/",className:"mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300",children:"Go to Home"})]})})]})})]})}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.0
*/const Cg=Object.freeze({left:0,top:0,width:16,height:16}),To=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Gr=Object.freeze({...Cg,...To}),kc=Object.freeze({...Gr,body:"",hidden:!1}),hx=Object.freeze({width:null,height:null}),jg=Object.freeze({...hx,...To});function dx(l,a=0){const i=l.replace(/^-?[0-9.]*/,"");function o(s){for(;s<0;)s+=4;return s%4}if(i===""){const s=parseInt(l);return isNaN(s)?0:o(s)}else if(i!==l){let s=0;switch(i){case"%":s=25;break;case"deg":s=90}if(s){let c=parseFloat(l.slice(0,l.length-i.length));return isNaN(c)?0:(c=c/s,c%1===0?o(c):0)}}return a}const px=/[\s,]+/;function gx(l,a){a.split(px).forEach(i=>{switch(i.trim()){case"horizontal":l.hFlip=!0;break;case"vertical":l.vFlip=!0;break}})}const Dg={...jg,preserveAspectRatio:""};function M0(l){const a={...Dg},i=(o,s)=>l.getAttribute(o)||s;return a.width=i("width",null),a.height=i("height",null),a.rotate=dx(i("rotate","")),gx(a,i("flip","")),a.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),a}function vx(l,a){for(const i in Dg)if(l[i]!==a[i])return!0;return!1}const Mg=/^[a-z0-9]+(-[a-z0-9]+)*$/,Yr=(l,a,i,o="")=>{const s=l.split(":");if(l.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;o=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const g=s.pop(),d=s.pop(),p={provider:s.length>0?s[0]:o,prefix:d,name:g};return a&&!yo(p)?null:p}const c=s[0],h=c.split("-");if(h.length>1){const g={provider:o,prefix:h.shift(),name:h.join("-")};return a&&!yo(g)?null:g}if(i&&o===""){const g={provider:o,prefix:"",name:c};return a&&!yo(g,i)?null:g}return null},yo=(l,a)=>l?!!((a&&l.prefix===""||l.prefix)&&l.name):!1;function mx(l,a){const i={};!l.hFlip!=!a.hFlip&&(i.hFlip=!0),!l.vFlip!=!a.vFlip&&(i.vFlip=!0);const o=((l.rotate||0)+(a.rotate||0))%4;return o&&(i.rotate=o),i}function U0(l,a){const i=mx(l,a);for(const o in kc)o in To?o in l&&!(o in i)&&(i[o]=To[o]):o in a?i[o]=a[o]:o in l&&(i[o]=l[o]);return i}function bx(l,a){const i=l.icons,o=l.aliases||Object.create(null),s=Object.create(null);function c(h){if(i[h])return s[h]=[];if(!(h in s)){s[h]=null;const g=o[h]&&o[h].parent,d=g&&c(g);d&&(s[h]=[g].concat(d))}return s[h]}return Object.keys(i).concat(Object.keys(o)).forEach(c),s}function yx(l,a,i){const o=l.icons,s=l.aliases||Object.create(null);let c={};function h(g){c=U0(o[g]||s[g],c)}return h(a),i.forEach(h),U0(l,c)}function Ug(l,a){const i=[];if(typeof l!="object"||typeof l.icons!="object")return i;l.not_found instanceof Array&&l.not_found.forEach(s=>{a(s,null),i.push(s)});const o=bx(l);for(const s in o){const c=o[s];c&&(a(s,yx(l,s,c)),i.push(s))}return i}const _x={provider:"",aliases:{},not_found:{},...Cg};function uc(l,a){for(const i in a)if(i in l&&typeof l[i]!=typeof a[i])return!1;return!0}function zg(l){if(typeof l!="object"||l===null)return null;const a=l;if(typeof a.prefix!="string"||!l.icons||typeof l.icons!="object"||!uc(l,_x))return null;const i=a.icons;for(const s in i){const c=i[s];if(!s||typeof c.body!="string"||!uc(c,kc))return null}const o=a.aliases||Object.create(null);for(const s in o){const c=o[s],h=c.parent;if(!s||typeof h!="string"||!i[h]&&!o[h]||!uc(c,kc))return null}return a}const Eo=Object.create(null);function xx(l,a){return{provider:l,prefix:a,icons:Object.create(null),missing:new Set}}function hn(l,a){const i=Eo[l]||(Eo[l]=Object.create(null));return i[a]||(i[a]=xx(l,a))}function Ng(l,a){return zg(a)?Ug(a,(i,o)=>{o?l.icons[i]=o:l.missing.add(i)}):[]}function Sx(l,a,i){try{if(typeof i.body=="string")return l.icons[a]={...i},!0}catch{}return!1}function wx(l,a){let i=[];return(typeof l=="string"?[l]:Object.keys(Eo)).forEach(s=>{(typeof s=="string"&&typeof a=="string"?[a]:Object.keys(Eo[s]||{})).forEach(h=>{const g=hn(s,h);i=i.concat(Object.keys(g.icons).map(d=>(s!==""?"@"+s+":":"")+h+":"+d))})}),i}let Dr=!1;function qg(l){return typeof l=="boolean"&&(Dr=l),Dr}function Mr(l){const a=typeof l=="string"?Yr(l,!0,Dr):l;if(a){const i=hn(a.provider,a.prefix),o=a.name;return i.icons[o]||(i.missing.has(o)?null:void 0)}}function Bg(l,a){const i=Yr(l,!0,Dr);if(!i)return!1;const o=hn(i.provider,i.prefix);return a?Sx(o,i.name,a):(o.missing.add(i.name),!0)}function z0(l,a){if(typeof l!="object")return!1;if(typeof a!="string"&&(a=l.provider||""),Dr&&!a&&!l.prefix){let s=!1;return zg(l)&&(l.prefix="",Ug(l,(c,h)=>{Bg(c,h)&&(s=!0)})),s}const i=l.prefix;if(!yo({prefix:i,name:"a"}))return!1;const o=hn(a,i);return!!Ng(o,l)}function Ox(l){return!!Mr(l)}function Tx(l){const a=Mr(l);return a&&{...Gr,...a}}function Ex(l){const a={loaded:[],missing:[],pending:[]},i=Object.create(null);l.sort((s,c)=>s.provider!==c.provider?s.provider.localeCompare(c.provider):s.prefix!==c.prefix?s.prefix.localeCompare(c.prefix):s.name.localeCompare(c.name));let o={provider:"",prefix:"",name:""};return l.forEach(s=>{if(o.name===s.name&&o.prefix===s.prefix&&o.provider===s.provider)return;o=s;const c=s.provider,h=s.prefix,g=s.name,d=i[c]||(i[c]=Object.create(null)),p=d[h]||(d[h]=hn(c,h));let m;g in p.icons?m=a.loaded:h===""||p.missing.has(g)?m=a.missing:m=a.pending;const y={provider:c,prefix:h,name:g};m.push(y)}),a}function Lg(l,a){l.forEach(i=>{const o=i.loaderCallbacks;o&&(i.loaderCallbacks=o.filter(s=>s.id!==a))})}function kx(l){l.pendingCallbacksFlag||(l.pendingCallbacksFlag=!0,setTimeout(()=>{l.pendingCallbacksFlag=!1;const a=l.loaderCallbacks?l.loaderCallbacks.slice(0):[];if(!a.length)return;let i=!1;const o=l.provider,s=l.prefix;a.forEach(c=>{const h=c.icons,g=h.pending.length;h.pending=h.pending.filter(d=>{if(d.prefix!==s)return!0;const p=d.name;if(l.icons[p])h.loaded.push({provider:o,prefix:s,name:p});else if(l.missing.has(p))h.missing.push({provider:o,prefix:s,name:p});else return i=!0,!0;return!1}),h.pending.length!==g&&(i||Lg([l],c.id),c.callback(h.loaded.slice(0),h.missing.slice(0),h.pending.slice(0),c.abort))})}))}let Ax=0;function Rx(l,a,i){const o=Ax++,s=Lg.bind(null,i,o);if(!a.pending.length)return s;const c={id:o,icons:a,callback:l,abort:s};return i.forEach(h=>{(h.loaderCallbacks||(h.loaderCallbacks=[])).push(c)}),s}const Ac=Object.create(null);function N0(l,a){Ac[l]=a}function Rc(l){return Ac[l]||Ac[""]}function Cx(l,a=!0,i=!1){const o=[];return l.forEach(s=>{const c=typeof s=="string"?Yr(s,a,i):s;c&&o.push(c)}),o}var jx={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Dx(l,a,i,o){const s=l.resources.length,c=l.random?Math.floor(Math.random()*s):l.index;let h;if(l.random){let X=l.resources.slice(0);for(h=[];X.length>1;){const ne=Math.floor(Math.random()*X.length);h.push(X[ne]),X=X.slice(0,ne).concat(X.slice(ne+1))}h=h.concat(X)}else h=l.resources.slice(c).concat(l.resources.slice(0,c));const g=Date.now();let d="pending",p=0,m,y=null,x=[],k=[];typeof o=="function"&&k.push(o);function O(){y&&(clearTimeout(y),y=null)}function E(){d==="pending"&&(d="aborted"),O(),x.forEach(X=>{X.status==="pending"&&(X.status="aborted")}),x=[]}function A(X,ne){ne&&(k=[]),typeof X=="function"&&k.push(X)}function L(){return{startTime:g,payload:a,status:d,queriesSent:p,queriesPending:x.length,subscribe:A,abort:E}}function V(){d="failed",k.forEach(X=>{X(void 0,m)})}function z(){x.forEach(X=>{X.status==="pending"&&(X.status="aborted")}),x=[]}function P(X,ne,Ae){const we=ne!=="success";switch(x=x.filter(rt=>rt!==X),d){case"pending":break;case"failed":if(we||!l.dataAfterTimeout)return;break;default:return}if(ne==="abort"){m=Ae,V();return}if(we){m=Ae,x.length||(h.length?H():V());return}if(O(),z(),!l.random){const rt=l.resources.indexOf(X.resource);rt!==-1&&rt!==l.index&&(l.index=rt)}d="completed",k.forEach(rt=>{rt(Ae)})}function H(){if(d!=="pending")return;O();const X=h.shift();if(X===void 0){if(x.length){y=setTimeout(()=>{O(),d==="pending"&&(z(),V())},l.timeout);return}V();return}const ne={status:"pending",resource:X,callback:(Ae,we)=>{P(ne,Ae,we)}};x.push(ne),p++,y=setTimeout(H,l.rotate),i(X,a,ne.callback)}return setTimeout(H),L}function Pg(l){const a={...jx,...l};let i=[];function o(){i=i.filter(g=>g().status==="pending")}function s(g,d,p){const m=Dx(a,g,d,(y,x)=>{o(),p&&p(y,x)});return i.push(m),m}function c(g){return i.find(d=>g(d))||null}return{query:s,find:c,setIndex:g=>{a.index=g},getIndex:()=>a.index,cleanup:o}}function Hc(l){let a;if(typeof l.resources=="string")a=[l.resources];else if(a=l.resources,!(a instanceof Array)||!a.length)return null;return{resources:a,path:l.path||"/",maxURL:l.maxURL||500,rotate:l.rotate||750,timeout:l.timeout||5e3,random:l.random===!0,index:l.index||0,dataAfterTimeout:l.dataAfterTimeout!==!1}}const jo=Object.create(null),xr=["https://api.simplesvg.com","https://api.unisvg.com"],_o=[];for(;xr.length>0;)xr.length===1||Math.random()>.5?_o.push(xr.shift()):_o.push(xr.pop());jo[""]=Hc({resources:["https://api.iconify.design"].concat(_o)});function q0(l,a){const i=Hc(a);return i===null?!1:(jo[l]=i,!0)}function Do(l){return jo[l]}function Mx(){return Object.keys(jo)}function B0(){}const cc=Object.create(null);function Ux(l){if(!cc[l]){const a=Do(l);if(!a)return;const i=Pg(a),o={config:a,redundancy:i};cc[l]=o}return cc[l]}function Hg(l,a,i){let o,s;if(typeof l=="string"){const c=Rc(l);if(!c)return i(void 0,424),B0;s=c.send;const h=Ux(l);h&&(o=h.redundancy)}else{const c=Hc(l);if(c){o=Pg(c);const h=l.resources?l.resources[0]:"",g=Rc(h);g&&(s=g.send)}}return!o||!s?(i(void 0,424),B0):o.query(a,s,i)().abort}function L0(){}function zx(l){l.iconsLoaderFlag||(l.iconsLoaderFlag=!0,setTimeout(()=>{l.iconsLoaderFlag=!1,kx(l)}))}function Nx(l){const a=[],i=[];return l.forEach(o=>{(o.match(Mg)?a:i).push(o)}),{valid:a,invalid:i}}function Sr(l,a,i){function o(){const s=l.pendingIcons;a.forEach(c=>{s&&s.delete(c),l.icons[c]||l.missing.add(c)})}if(i&&typeof i=="object")try{if(!Ng(l,i).length){o();return}}catch(s){console.error(s)}o(),zx(l)}function P0(l,a){l instanceof Promise?l.then(i=>{a(i)}).catch(()=>{a(null)}):a(l)}function qx(l,a){l.iconsToLoad?l.iconsToLoad=l.iconsToLoad.concat(a).sort():l.iconsToLoad=a,l.iconsQueueFlag||(l.iconsQueueFlag=!0,setTimeout(()=>{l.iconsQueueFlag=!1;const{provider:i,prefix:o}=l,s=l.iconsToLoad;if(delete l.iconsToLoad,!s||!s.length)return;const c=l.loadIcon;if(l.loadIcons&&(s.length>1||!c)){P0(l.loadIcons(s,o,i),m=>{Sr(l,s,m)});return}if(c){s.forEach(m=>{const y=c(m,o,i);P0(y,x=>{const k=x?{prefix:o,icons:{[m]:x}}:null;Sr(l,[m],k)})});return}const{valid:h,invalid:g}=Nx(s);if(g.length&&Sr(l,g,null),!h.length)return;const d=o.match(Mg)?Rc(i):null;if(!d){Sr(l,h,null);return}d.prepare(i,o,h).forEach(m=>{Hg(i,m,y=>{Sr(l,m.icons,y)})})}))}const Gc=(l,a)=>{const i=Cx(l,!0,qg()),o=Ex(i);if(!o.pending.length){let d=!0;return a&&setTimeout(()=>{d&&a(o.loaded,o.missing,o.pending,L0)}),()=>{d=!1}}const s=Object.create(null),c=[];let h,g;return o.pending.forEach(d=>{const{provider:p,prefix:m}=d;if(m===g&&p===h)return;h=p,g=m,c.push(hn(p,m));const y=s[p]||(s[p]=Object.create(null));y[m]||(y[m]=[])}),o.pending.forEach(d=>{const{provider:p,prefix:m,name:y}=d,x=hn(p,m),k=x.pendingIcons||(x.pendingIcons=new Set);k.has(y)||(k.add(y),s[p][m].push(y))}),c.forEach(d=>{const p=s[d.provider][d.prefix];p.length&&qx(d,p)}),a?Rx(a,o,c):L0},Bx=l=>new Promise((a,i)=>{const o=typeof l=="string"?Yr(l,!0):l;if(!o){i(l);return}Gc([o||l],s=>{if(s.length&&o){const c=Mr(o);if(c){a({...Gr,...c});return}}i(l)})});function H0(l){try{const a=typeof l=="string"?JSON.parse(l):l;if(typeof a.body=="string")return{...a}}catch{}}function Lx(l,a){if(typeof l=="object")return{data:H0(l),value:l};if(typeof l!="string")return{value:l};if(l.includes("{")){const c=H0(l);if(c)return{data:c,value:l}}const i=Yr(l,!0,!0);if(!i)return{value:l};const o=Mr(i);if(o!==void 0||!i.prefix)return{value:l,name:i,data:o};const s=Gc([i],()=>a(l,i,Mr(i)));return{value:l,name:i,loading:s}}let Gg=!1;try{Gg=navigator.vendor.indexOf("Apple")===0}catch{}function Px(l,a){switch(a){case"svg":case"bg":case"mask":return a}return a!=="style"&&(Gg||l.indexOf("<a")===-1)?"svg":l.indexOf("currentColor")===-1?"bg":"mask"}const Hx=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Gx=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Cc(l,a,i){if(a===1)return l;if(i=i||100,typeof l=="number")return Math.ceil(l*a*i)/i;if(typeof l!="string")return l;const o=l.split(Hx);if(o===null||!o.length)return l;const s=[];let c=o.shift(),h=Gx.test(c);for(;;){if(h){const g=parseFloat(c);isNaN(g)?s.push(c):s.push(Math.ceil(g*a*i)/i)}else s.push(c);if(c=o.shift(),c===void 0)return s.join("");h=!h}}function Yx(l,a="defs"){let i="";const o=l.indexOf("<"+a);for(;o>=0;){const s=l.indexOf(">",o),c=l.indexOf("</"+a);if(s===-1||c===-1)break;const h=l.indexOf(">",c);if(h===-1)break;i+=l.slice(s+1,c).trim(),l=l.slice(0,o).trim()+l.slice(h+1)}return{defs:i,content:l}}function $x(l,a){return l?"<defs>"+l+"</defs>"+a:a}function Xx(l,a,i){const o=Yx(l);return $x(o.defs,a+o.content+i)}const Qx=l=>l==="unset"||l==="undefined"||l==="none";function Yg(l,a){const i={...Gr,...l},o={...jg,...a},s={left:i.left,top:i.top,width:i.width,height:i.height};let c=i.body;[i,o].forEach(E=>{const A=[],L=E.hFlip,V=E.vFlip;let z=E.rotate;L?V?z+=2:(A.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),A.push("scale(-1 1)"),s.top=s.left=0):V&&(A.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),A.push("scale(1 -1)"),s.top=s.left=0);let P;switch(z<0&&(z-=Math.floor(z/4)*4),z=z%4,z){case 1:P=s.height/2+s.top,A.unshift("rotate(90 "+P.toString()+" "+P.toString()+")");break;case 2:A.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:P=s.width/2+s.left,A.unshift("rotate(-90 "+P.toString()+" "+P.toString()+")");break}z%2===1&&(s.left!==s.top&&(P=s.left,s.left=s.top,s.top=P),s.width!==s.height&&(P=s.width,s.width=s.height,s.height=P)),A.length&&(c=Xx(c,'<g transform="'+A.join(" ")+'">',"</g>"))});const h=o.width,g=o.height,d=s.width,p=s.height;let m,y;h===null?(y=g===null?"1em":g==="auto"?p:g,m=Cc(y,d/p)):(m=h==="auto"?d:h,y=g===null?Cc(m,p/d):g==="auto"?p:g);const x={},k=(E,A)=>{Qx(A)||(x[E]=A.toString())};k("width",m),k("height",y);const O=[s.left,s.top,d,p];return x.viewBox=O.join(" "),{attributes:x,viewBox:O,body:c}}function Yc(l,a){let i=l.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in a)i+=" "+o+'="'+a[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+l+"</svg>"}function Vx(l){return l.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Zx(l){return"data:image/svg+xml,"+Vx(l)}function $g(l){return'url("'+Zx(l)+'")'}const Kx=()=>{let l;try{if(l=fetch,typeof l=="function")return l}catch{}};let ko=Kx();function Jx(l){ko=l}function Ix(){return ko}function Fx(l,a){const i=Do(l);if(!i)return 0;let o;if(!i.maxURL)o=0;else{let s=0;i.resources.forEach(h=>{s=Math.max(s,h.length)});const c=a+".json?icons=";o=i.maxURL-s-i.path.length-c.length}return o}function Wx(l){return l===404}const eS=(l,a,i)=>{const o=[],s=Fx(l,a),c="icons";let h={type:c,provider:l,prefix:a,icons:[]},g=0;return i.forEach((d,p)=>{g+=d.length+1,g>=s&&p>0&&(o.push(h),h={type:c,provider:l,prefix:a,icons:[]},g=d.length),h.icons.push(d)}),o.push(h),o};function tS(l){if(typeof l=="string"){const a=Do(l);if(a)return a.path}return"/"}const nS=(l,a,i)=>{if(!ko){i("abort",424);return}let o=tS(a.provider);switch(a.type){case"icons":{const c=a.prefix,g=a.icons.join(","),d=new URLSearchParams({icons:g});o+=c+".json?"+d.toString();break}case"custom":{const c=a.uri;o+=c.slice(0,1)==="/"?c.slice(1):c;break}default:i("abort",400);return}let s=503;ko(l+o).then(c=>{const h=c.status;if(h!==200){setTimeout(()=>{i(Wx(h)?"abort":"next",h)});return}return s=501,c.json()}).then(c=>{if(typeof c!="object"||c===null){setTimeout(()=>{c===404?i("abort",c):i("next",s)});return}setTimeout(()=>{i("success",c)})}).catch(()=>{i("next",s)})},aS={prepare:eS,send:nS};function iS(l,a,i){hn(i||"",a).loadIcons=l}function rS(l,a,i){hn(i||"",a).loadIcon=l}const fc="data-style";let Xg="";function lS(l){Xg=l}function G0(l,a){let i=Array.from(l.childNodes).find(o=>o.hasAttribute&&o.hasAttribute(fc));i||(i=document.createElement("style"),i.setAttribute(fc,fc),l.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(a?"-0.125em":"0")+"}span,svg{display:block;margin:auto}"+Xg}function Qg(){N0("",aS),qg(!0);let l;try{l=window}catch{}if(l){if(l.IconifyPreload!==void 0){const i=l.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof i=="object"&&i!==null&&(i instanceof Array?i:[i]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!z0(s))&&console.error(o)}catch{console.error(o)}})}if(l.IconifyProviders!==void 0){const i=l.IconifyProviders;if(typeof i=="object"&&i!==null)for(const o in i){const s="IconifyProviders["+o+"] is invalid.";try{const c=i[o];if(typeof c!="object"||!c||c.resources===void 0)continue;q0(o,c)||console.error(s)}catch{console.error(s)}}}}return{iconLoaded:Ox,getIcon:Tx,listIcons:wx,addIcon:Bg,addCollection:z0,calculateSize:Cc,buildIcon:Yg,iconToHTML:Yc,svgToURL:$g,loadIcons:Gc,loadIcon:Bx,addAPIProvider:q0,setCustomIconLoader:rS,setCustomIconsLoader:iS,appendCustomStyle:lS,_api:{getAPIConfig:Do,setAPIModule:N0,sendAPIQuery:Hg,setFetch:Jx,getFetch:Ix,listAPIProviders:Mx}}}const jc={"background-color":"currentColor"},Vg={"background-color":"transparent"},Y0={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},$0={"-webkit-mask":jc,mask:jc,background:Vg};for(const l in $0){const a=$0[l];for(const i in Y0)a[l+"-"+i]=Y0[i]}function X0(l){return l?l+(l.match(/^[-0-9.]+$/)?"px":""):"inherit"}function oS(l,a,i){const o=document.createElement("span");let s=l.body;s.indexOf("<a")!==-1&&(s+="<!-- "+Date.now()+" -->");const c=l.attributes,h=Yc(s,{...c,width:a.width+"",height:a.height+""}),g=$g(h),d=o.style,p={"--svg":g,width:X0(c.width),height:X0(c.height),...i?jc:Vg};for(const m in p)d.setProperty(m,p[m]);return o}let Ar;function sS(){try{Ar=window.trustedTypes.createPolicy("iconify",{createHTML:l=>l})}catch{Ar=null}}function uS(l){return Ar===void 0&&sS(),Ar?Ar.createHTML(l):l}function cS(l){const a=document.createElement("span"),i=l.attributes;let o="";i.width||(o="width: inherit;"),i.height||(o+="height: inherit;"),o&&(i.style=o);const s=Yc(l.body,i);return a.innerHTML=uS(s),a.firstChild}function Dc(l){return Array.from(l.childNodes).find(a=>{const i=a.tagName&&a.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function Q0(l,a){const i=a.icon.data,o=a.customisations,s=Yg(i,o);o.preserveAspectRatio&&(s.attributes.preserveAspectRatio=o.preserveAspectRatio);const c=a.renderedMode;let h;switch(c){case"svg":h=cS(s);break;default:h=oS(s,{...Gr,...i},c==="mask")}const g=Dc(l);g?h.tagName==="SPAN"&&g.tagName===h.tagName?g.setAttribute("style",h.getAttribute("style")):l.replaceChild(h,g):l.appendChild(h)}function V0(l,a,i){const o=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:a,icon:l,lastRender:o}}function fS(l="iconify-icon"){let a,i;try{a=window.customElements,i=window.HTMLElement}catch{return}if(!a||!i)return;const o=a.get(l);if(o)return o;const s=["icon","mode","inline","noobserver","width","height","rotate","flip"],c=class extends i{constructor(){super();Bn(this,"_shadowRoot");Bn(this,"_initialised",!1);Bn(this,"_state");Bn(this,"_checkQueued",!1);Bn(this,"_connected",!1);Bn(this,"_observer",null);Bn(this,"_visible",!0);const d=this._shadowRoot=this.attachShadow({mode:"open"}),p=this.hasAttribute("inline");G0(d,p),this._state=V0({value:""},p),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return s.slice(0)}attributeChangedCallback(d){switch(d){case"inline":{const p=this.hasAttribute("inline"),m=this._state;p!==m.inline&&(m.inline=p,G0(this._shadowRoot,p));break}case"noobserver":{this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const d=this.getAttribute("icon");if(d&&d.slice(0,1)==="{")try{return JSON.parse(d)}catch{}return d}set icon(d){typeof d=="object"&&(d=JSON.stringify(d)),this.setAttribute("icon",d)}get inline(){return this.hasAttribute("inline")}set inline(d){d?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(d){d?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const d=this._state;if(d.rendered){const p=this._shadowRoot;if(d.renderedMode==="svg")try{p.lastChild.setCurrentTime(0);return}catch{}Q0(p,d)}}get status(){const d=this._state;return d.rendered?"rendered":d.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const d=this._state,p=this.getAttribute("icon");if(p!==d.icon.value){this._iconChanged(p);return}if(!d.rendered||!this._visible)return;const m=this.getAttribute("mode"),y=M0(this);(d.attrMode!==m||vx(d.customisations,y)||!Dc(this._shadowRoot))&&this._renderIcon(d.icon,y,m)}_iconChanged(d){const p=Lx(d,(m,y,x)=>{const k=this._state;if(k.rendered||this.getAttribute("icon")!==m)return;const O={value:m,name:y,data:x};O.data?this._gotIconData(O):k.icon=O});p.data?this._gotIconData(p):this._state=V0(p,this._state.inline,this._state)}_forceRender(){if(!this._visible){const d=Dc(this._shadowRoot);d&&this._shadowRoot.removeChild(d);return}this._queueCheck()}_gotIconData(d){this._checkQueued=!1,this._renderIcon(d,M0(this),this.getAttribute("mode"))}_renderIcon(d,p,m){const y=Px(d.data.body,m),x=this._state.inline;Q0(this._shadowRoot,this._state={rendered:!0,icon:d,inline:x,customisations:p,attrMode:m,renderedMode:y})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(d=>{const p=d.some(m=>m.isIntersecting);p!==this._visible&&(this._visible=p,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};s.forEach(g=>{g in c.prototype||Object.defineProperty(c.prototype,g,{get:function(){return this.getAttribute(g)},set:function(d){d!==null?this.setAttribute(g,d):this.removeAttribute(g)}})});const h=Qg();for(const g in h)c[g]=c.prototype[g]=h[g];return a.define(l,c),c}const hS=fS()||Qg(),{iconLoaded:yS,getIcon:_S,listIcons:xS,addIcon:SS,addCollection:wS,calculateSize:OS,buildIcon:TS,iconToHTML:ES,svgToURL:kS,loadIcons:AS,loadIcon:RS,setCustomIconLoader:CS,setCustomIconsLoader:jS,addAPIProvider:DS,_api:MS}=hS;Rb.createRoot(document.getElementById("root")).render(K.jsx(Y.StrictMode,{children:K.jsx(fx,{})}));
