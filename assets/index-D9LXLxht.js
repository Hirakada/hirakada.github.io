var Tb=Object.defineProperty;var Eb=(l,a,r)=>a in l?Tb(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r;var Hn=(l,a,r)=>Eb(l,typeof a!="symbol"?a+"":a,r);function kb(l,a){for(var r=0;r<a.length;r++){const s=a[r];if(typeof s!="string"&&!Array.isArray(s)){for(const u in s)if(u!=="default"&&!(u in l)){const f=Object.getOwnPropertyDescriptor(s,u);f&&Object.defineProperty(l,u,f.get?f:{enumerable:!0,get:()=>s[u]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function r(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=r(u);fetch(u.href,f)}})();function tg(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}function Ab(l){if(Object.prototype.hasOwnProperty.call(l,"__esModule"))return l;var a=l.default;if(typeof a=="function"){var r=function s(){return this instanceof s?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};r.prototype=a.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(l).forEach(function(s){var u=Object.getOwnPropertyDescriptor(l,s);Object.defineProperty(r,s,u.get?u:{enumerable:!0,get:function(){return l[s]}})}),r}var Fu={exports:{}},_r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function jb(){if(Gp)return _r;Gp=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:l,type:s,key:h,ref:u!==void 0?u:null,props:f}}return _r.Fragment=a,_r.jsx=r,_r.jsxs=r,_r}var $p;function Rb(){return $p||($p=1,Fu.exports=jb()),Fu.exports}var U=Rb(),Wu={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Cb(){if(Yp)return oe;Yp=1;var l=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,k={};function A(O,H,K){this.props=O,this.context=H,this.refs=k,this.updater=K||T}A.prototype.isReactComponent={},A.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},A.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=A.prototype;function X(O,H,K){this.props=O,this.context=H,this.refs=k,this.updater=K||T}var z=X.prototype=new P;z.constructor=X,w(z,A.prototype),z.isPureReactComponent=!0;var $=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function I(O,H,K,V,ee,ve){return K=ve.ref,{$$typeof:l,type:O,key:H,ref:K!==void 0?K:null,props:ve}}function se(O,H){return I(O.type,H,void 0,void 0,void 0,O.props)}function ce(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function Xe(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(K){return H[K]})}var dt=/\/+/g;function Le(O,H){return typeof O=="object"&&O!==null&&O.key!=null?Xe(""+O.key):H.toString(36)}function Ut(){}function Jn(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(Ut,Ut):(O.status="pending",O.then(function(H){O.status==="pending"&&(O.status="fulfilled",O.value=H)},function(H){O.status==="pending"&&(O.status="rejected",O.reason=H)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function tt(O,H,K,V,ee){var ve=typeof O;(ve==="undefined"||ve==="boolean")&&(O=null);var re=!1;if(O===null)re=!0;else switch(ve){case"bigint":case"string":case"number":re=!0;break;case"object":switch(O.$$typeof){case l:case a:re=!0;break;case v:return re=O._init,tt(re(O._payload),H,K,V,ee)}}if(re)return ee=ee(O),re=V===""?"."+Le(O,0):V,$(ee)?(K="",re!=null&&(K=re.replace(dt,"$&/")+"/"),tt(ee,H,K,"",function(mn){return mn})):ee!=null&&(ce(ee)&&(ee=se(ee,K+(ee.key==null||O&&O.key===ee.key?"":(""+ee.key).replace(dt,"$&/")+"/")+re)),H.push(ee)),1;re=0;var pt=V===""?".":V+":";if($(O))for(var Re=0;Re<O.length;Re++)V=O[Re],ve=pt+Le(V,Re),re+=tt(V,H,K,ve,ee);else if(Re=x(O),typeof Re=="function")for(O=Re.call(O),Re=0;!(V=O.next()).done;)V=V.value,ve=pt+Le(V,Re++),re+=tt(V,H,K,ve,ee);else if(ve==="object"){if(typeof O.then=="function")return tt(Jn(O),H,K,V,ee);throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return re}function q(O,H,K){if(O==null)return O;var V=[],ee=0;return tt(O,V,"","",function(ve){return H.call(K,ve,ee++)}),V}function Z(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(K){(O._status===0||O._status===-1)&&(O._status=1,O._result=K)},function(K){(O._status===0||O._status===-1)&&(O._status=2,O._result=K)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var ae=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ee(){}return oe.Children={map:q,forEach:function(O,H,K){q(O,function(){H.apply(this,arguments)},K)},count:function(O){var H=0;return q(O,function(){H++}),H},toArray:function(O){return q(O,function(H){return H})||[]},only:function(O){if(!ce(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},oe.Component=A,oe.Fragment=r,oe.Profiler=u,oe.PureComponent=X,oe.StrictMode=s,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,oe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return Y.H.useMemoCache(O)}},oe.cache=function(O){return function(){return O.apply(null,arguments)}},oe.cloneElement=function(O,H,K){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var V=w({},O.props),ee=O.key,ve=void 0;if(H!=null)for(re in H.ref!==void 0&&(ve=void 0),H.key!==void 0&&(ee=""+H.key),H)!G.call(H,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&H.ref===void 0||(V[re]=H[re]);var re=arguments.length-2;if(re===1)V.children=K;else if(1<re){for(var pt=Array(re),Re=0;Re<re;Re++)pt[Re]=arguments[Re+2];V.children=pt}return I(O.type,ee,void 0,void 0,ve,V)},oe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},oe.createElement=function(O,H,K){var V,ee={},ve=null;if(H!=null)for(V in H.key!==void 0&&(ve=""+H.key),H)G.call(H,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=H[V]);var re=arguments.length-2;if(re===1)ee.children=K;else if(1<re){for(var pt=Array(re),Re=0;Re<re;Re++)pt[Re]=arguments[Re+2];ee.children=pt}if(O&&O.defaultProps)for(V in re=O.defaultProps,re)ee[V]===void 0&&(ee[V]=re[V]);return I(O,ve,void 0,void 0,null,ee)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(O){return{$$typeof:m,render:O}},oe.isValidElement=ce,oe.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Z}},oe.memo=function(O,H){return{$$typeof:g,type:O,compare:H===void 0?null:H}},oe.startTransition=function(O){var H=Y.T,K={};Y.T=K;try{var V=O(),ee=Y.S;ee!==null&&ee(K,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Ee,ae)}catch(ve){ae(ve)}finally{Y.T=H}},oe.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},oe.use=function(O){return Y.H.use(O)},oe.useActionState=function(O,H,K){return Y.H.useActionState(O,H,K)},oe.useCallback=function(O,H){return Y.H.useCallback(O,H)},oe.useContext=function(O){return Y.H.useContext(O)},oe.useDebugValue=function(){},oe.useDeferredValue=function(O,H){return Y.H.useDeferredValue(O,H)},oe.useEffect=function(O,H,K){var V=Y.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(O,H)},oe.useId=function(){return Y.H.useId()},oe.useImperativeHandle=function(O,H,K){return Y.H.useImperativeHandle(O,H,K)},oe.useInsertionEffect=function(O,H){return Y.H.useInsertionEffect(O,H)},oe.useLayoutEffect=function(O,H){return Y.H.useLayoutEffect(O,H)},oe.useMemo=function(O,H){return Y.H.useMemo(O,H)},oe.useOptimistic=function(O,H){return Y.H.useOptimistic(O,H)},oe.useReducer=function(O,H,K){return Y.H.useReducer(O,H,K)},oe.useRef=function(O){return Y.H.useRef(O)},oe.useState=function(O){return Y.H.useState(O)},oe.useSyncExternalStore=function(O,H,K){return Y.H.useSyncExternalStore(O,H,K)},oe.useTransition=function(){return Y.H.useTransition()},oe.version="19.1.0",oe}var Xp;function Nc(){return Xp||(Xp=1,Wu.exports=Cb()),Wu.exports}var Q=Nc();const Se=tg(Q),Db=kb({__proto__:null,default:Se},[Q]);var ec={exports:{}},xr={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Mb(){return Qp||(Qp=1,function(l){function a(q,Z){var ae=q.length;q.push(Z);e:for(;0<ae;){var Ee=ae-1>>>1,O=q[Ee];if(0<u(O,Z))q[Ee]=Z,q[ae]=O,ae=Ee;else break e}}function r(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var Z=q[0],ae=q.pop();if(ae!==Z){q[0]=ae;e:for(var Ee=0,O=q.length,H=O>>>1;Ee<H;){var K=2*(Ee+1)-1,V=q[K],ee=K+1,ve=q[ee];if(0>u(V,ae))ee<O&&0>u(ve,V)?(q[Ee]=ve,q[ee]=ae,Ee=ee):(q[Ee]=V,q[K]=ae,Ee=K);else if(ee<O&&0>u(ve,ae))q[Ee]=ve,q[ee]=ae,Ee=ee;else break e}}return Z}function u(q,Z){var ae=q.sortIndex-Z.sortIndex;return ae!==0?ae:q.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();l.unstable_now=function(){return h.now()-m}}var p=[],g=[],v=1,_=null,x=3,T=!1,w=!1,k=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function $(q){for(var Z=r(g);Z!==null;){if(Z.callback===null)s(g);else if(Z.startTime<=q)s(g),Z.sortIndex=Z.expirationTime,a(p,Z);else break;Z=r(g)}}function Y(q){if(k=!1,$(q),!w)if(r(p)!==null)w=!0,G||(G=!0,Le());else{var Z=r(g);Z!==null&&tt(Y,Z.startTime-q)}}var G=!1,I=-1,se=5,ce=-1;function Xe(){return A?!0:!(l.unstable_now()-ce<se)}function dt(){if(A=!1,G){var q=l.unstable_now();ce=q;var Z=!0;try{e:{w=!1,k&&(k=!1,X(I),I=-1),T=!0;var ae=x;try{t:{for($(q),_=r(p);_!==null&&!(_.expirationTime>q&&Xe());){var Ee=_.callback;if(typeof Ee=="function"){_.callback=null,x=_.priorityLevel;var O=Ee(_.expirationTime<=q);if(q=l.unstable_now(),typeof O=="function"){_.callback=O,$(q),Z=!0;break t}_===r(p)&&s(p),$(q)}else s(p);_=r(p)}if(_!==null)Z=!0;else{var H=r(g);H!==null&&tt(Y,H.startTime-q),Z=!1}}break e}finally{_=null,x=ae,T=!1}Z=void 0}}finally{Z?Le():G=!1}}}var Le;if(typeof z=="function")Le=function(){z(dt)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,Jn=Ut.port2;Ut.port1.onmessage=dt,Le=function(){Jn.postMessage(null)}}else Le=function(){P(dt,0)};function tt(q,Z){I=P(function(){q(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(q){q.callback=null},l.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<q?Math.floor(1e3/q):5},l.unstable_getCurrentPriorityLevel=function(){return x},l.unstable_next=function(q){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var ae=x;x=Z;try{return q()}finally{x=ae}},l.unstable_requestPaint=function(){A=!0},l.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=x;x=q;try{return Z()}finally{x=ae}},l.unstable_scheduleCallback=function(q,Z,ae){var Ee=l.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ee+ae:Ee):ae=Ee,q){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ae+O,q={id:v++,callback:Z,priorityLevel:q,startTime:ae,expirationTime:O,sortIndex:-1},ae>Ee?(q.sortIndex=ae,a(g,q),r(p)===null&&q===r(g)&&(k?(X(I),I=-1):k=!0,tt(Y,ae-Ee))):(q.sortIndex=O,a(p,q),w||T||(w=!0,G||(G=!0,Le()))),q},l.unstable_shouldYield=Xe,l.unstable_wrapCallback=function(q){var Z=x;return function(){var ae=x;x=Z;try{return q.apply(this,arguments)}finally{x=ae}}}}(nc)),nc}var Vp;function Ub(){return Vp||(Vp=1,tc.exports=Mb()),tc.exports}var ac={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function zb(){if(Zp)return it;Zp=1;var l=Nc();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(p,g,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:_==null?null:""+_,children:p,containerInfo:g,implementation:v}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,it.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return f(p,g,null,v)},it.flushSync=function(p){var g=h.T,v=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=g,s.p=v,s.d.f()}},it.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},it.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},it.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,_=m(v,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:T}):v==="script"&&s.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},it.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},it.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,_=m(v,g.crossOrigin);s.d.L(p,v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},it.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},it.requestFormReset=function(p){s.d.r(p)},it.unstable_batchedUpdates=function(p,g){return p(g)},it.useFormState=function(p,g,v){return h.H.useFormState(p,g,v)},it.useFormStatus=function(){return h.H.useHostTransitionStatus()},it.version="19.1.0",it}var Kp;function ng(){if(Kp)return ac.exports;Kp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),ac.exports=zb(),ac.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Nb(){if(Jp)return xr;Jp=1;var l=Ub(),a=Nc(),r=ng();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,o=t;;){var c=n.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){n=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===n)return m(c),e;if(d===o)return m(c),t;d=d.sibling}throw Error(s(188))}if(n.return!==o.return)n=c,o=d;else{for(var b=!1,y=c.child;y;){if(y===n){b=!0,n=c,o=d;break}if(y===o){b=!0,o=c,n=d;break}y=y.sibling}if(!b){for(y=d.child;y;){if(y===n){b=!0,n=d,o=c;break}if(y===o){b=!0,o=d,n=c;break}y=y.sibling}if(!b)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),Xe=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Symbol.for("react.client.reference");function Jn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case A:return"Profiler";case k:return"StrictMode";case Y:return"Suspense";case G:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case z:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:Jn(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return Jn(e(t))}catch{}}return null}var tt=Array.isArray,q=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Ee=[],O=-1;function H(e){return{current:e}}function K(e){0>O||(e.current=Ee[O],Ee[O]=null,O--)}function V(e,t){O++,Ee[O]=e.current,e.current=t}var ee=H(null),ve=H(null),re=H(null),pt=H(null);function Re(e,t){switch(V(re,t),V(ve,e),V(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mp(t),e=vp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(ee),V(ee,e)}function mn(){K(ee),K(ve),K(re)}function qo(e){e.memoizedState!==null&&V(pt,e);var t=ee.current,n=vp(t,e.type);t!==n&&(V(ve,e),V(ee,n))}function Vr(e){ve.current===e&&(K(ee),K(ve)),pt.current===e&&(K(pt),gr._currentValue=ae)}var Lo=Object.prototype.hasOwnProperty,Bo=l.unstable_scheduleCallback,Po=l.unstable_cancelCallback,am=l.unstable_shouldYield,im=l.unstable_requestPaint,Gt=l.unstable_now,rm=l.unstable_getCurrentPriorityLevel,Kc=l.unstable_ImmediatePriority,Jc=l.unstable_UserBlockingPriority,Zr=l.unstable_NormalPriority,lm=l.unstable_LowPriority,Ic=l.unstable_IdlePriority,om=l.log,sm=l.unstable_setDisableYieldValue,wi=null,gt=null;function vn(e){if(typeof om=="function"&&sm(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(wi,e)}catch{}}var mt=Math.clz32?Math.clz32:fm,um=Math.log,cm=Math.LN2;function fm(e){return e>>>=0,e===0?32:31-(um(e)/cm|0)|0}var Kr=256,Jr=4194304;function In(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ir(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var y=o&134217727;return y!==0?(o=y&~d,o!==0?c=In(o):(b&=y,b!==0?c=In(b):n||(n=y&~e,n!==0&&(c=In(n))))):(y=o&~d,y!==0?c=In(y):b!==0?c=In(b):n||(n=o&~e,n!==0&&(c=In(n)))),c===0?0:t!==0&&t!==c&&(t&d)===0&&(d=c&-c,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:c}function Oi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fc(){var e=Kr;return Kr<<=1,(Kr&4194048)===0&&(Kr=256),e}function Wc(){var e=Jr;return Jr<<=1,(Jr&62914560)===0&&(Jr=4194304),e}function Ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ti(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dm(e,t,n,o,c,d){var b=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,C=e.hiddenUpdates;for(n=b&~n;0<n;){var N=31-mt(n),B=1<<N;y[N]=0,S[N]=-1;var D=C[N];if(D!==null)for(C[N]=null,N=0;N<D.length;N++){var M=D[N];M!==null&&(M.lane&=-536870913)}n&=~B}o!==0&&ef(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~t))}function ef(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-mt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&4194090}function tf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-mt(n),c=1<<o;c&t|e[o]&t&&(e[o]|=t),n&=~c}}function Go(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nf(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Np(e.type))}function pm(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var bn=Math.random().toString(36).slice(2),nt="__reactFiber$"+bn,ot="__reactProps$"+bn,Sa="__reactContainer$"+bn,Yo="__reactEvents$"+bn,gm="__reactListeners$"+bn,mm="__reactHandles$"+bn,af="__reactResources$"+bn,Ei="__reactMarker$"+bn;function Xo(e){delete e[nt],delete e[ot],delete e[Yo],delete e[gm],delete e[mm]}function wa(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sa]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xp(e);e!==null;){if(n=e[nt])return n;e=xp(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){if(e=e[nt]||e[Sa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ki(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ta(e){var t=e[af];return t||(t=e[af]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Ei]=!0}var rf=new Set,lf={};function Fn(e,t){Ea(e,t),Ea(e+"Capture",t)}function Ea(e,t){for(lf[e]=t,e=0;e<t.length;e++)rf.add(t[e])}var vm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),of={},sf={};function bm(e){return Lo.call(sf,e)?!0:Lo.call(of,e)?!1:vm.test(e)?sf[e]=!0:(of[e]=!0,!1)}function Fr(e,t,n){if(bm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Wr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Zt(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}var Qo,uf;function ka(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||"",uf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qo+e+uf}var Vo=!1;function Zo(e,t){if(!e||Vo)return"";Vo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(M){var D=M}Reflect.construct(e,[],B)}else{try{B.call()}catch(M){D=M}e.call(B.prototype)}}else{try{throw Error()}catch(M){D=M}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(M){if(M&&D&&typeof M.stack=="string")return[M.stack,D.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],y=d[1];if(b&&y){var S=b.split(`
`),C=y.split(`
`);for(c=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;if(o===S.length||c===C.length)for(o=S.length-1,c=C.length-1;1<=o&&0<=c&&S[o]!==C[c];)c--;for(;1<=o&&0<=c;o--,c--)if(S[o]!==C[c]){if(o!==1||c!==1)do if(o--,c--,0>c||S[o]!==C[c]){var N=`
`+S[o].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=o&&0<=c);break}}}finally{Vo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ka(n):""}function ym(e){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return Zo(e.type,!1);case 11:return Zo(e.type.render,!1);case 1:return Zo(e.type,!0);case 31:return ka("Activity");default:return""}}function cf(e){try{var t="";do t+=ym(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _m(e){var t=ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var c=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(b){o=""+b,d.call(this,b)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function el(e){e._valueTracker||(e._valueTracker=_m(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ff(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function tl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xm=/[\n"\\]/g;function Et(e){return e.replace(xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ko(e,t,n,o,c,d,b,y){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?Jo(e,b,Tt(t)):n!=null?Jo(e,b,Tt(n)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Tt(y):e.removeAttribute("name")}function df(e,t,n,o,c,d,b,y){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null))return;n=n!=null?""+Tt(n):"",t=t!=null?""+Tt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=y?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function Jo(e,t,n){t==="number"&&tl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Aa(e,t,n,o){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function pf(e,t,n){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Tt(n):""}function gf(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=Tt(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o)}function ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mf(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||Sm.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vf(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in t)o=t[c],t.hasOwnProperty(c)&&n[c]!==o&&mf(e,c,o)}else for(var d in t)t.hasOwnProperty(d)&&mf(e,d,t[d])}function Io(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Om=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return Om.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Fo=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,Ca=null;function bf(e){var t=Oa(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ko(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var c=o[ot]||null;if(!c)throw Error(s(90));Ko(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&hf(o)}break e;case"textarea":pf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Aa(e,!!n.multiple,t,!1)}}}var es=!1;function yf(e,t,n){if(es)return e(t,n);es=!0;try{var o=e(t);return o}finally{if(es=!1,(Ra!==null||Ca!==null)&&(Hl(),Ra&&(t=Ra,e=Ca,Ca=Ra=null,bf(t),e)))for(t=0;t<e.length;t++)bf(e[t])}}function Ai(e,t){var n=e.stateNode;if(n===null)return null;var o=n[ot]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=!1;if(Kt)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){ts=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{ts=!1}var yn=null,ns=null,al=null;function _f(){if(al)return al;var e,t=ns,n=t.length,o,c="value"in yn?yn.value:yn.textContent,d=c.length;for(e=0;e<n&&t[e]===c[e];e++);var b=n-e;for(o=1;o<=b&&t[n-o]===c[d-o];o++);return al=c.slice(e,1<o?1-o:void 0)}function il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function xf(){return!1}function st(e){function t(n,o,c,d,b){this._reactName=n,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?rl:xf,this.isPropagationStopped=xf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=st(Wn),Ri=v({},Wn,{view:0,detail:0}),Tm=st(Ri),as,is,Ci,ol=v({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ci&&(Ci&&e.type==="mousemove"?(as=e.screenX-Ci.screenX,is=e.screenY-Ci.screenY):is=as=0,Ci=e),as)},movementY:function(e){return"movementY"in e?e.movementY:is}}),Sf=st(ol),Em=v({},ol,{dataTransfer:0}),km=st(Em),Am=v({},Ri,{relatedTarget:0}),rs=st(Am),jm=v({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rm=st(jm),Cm=v({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dm=st(Cm),Mm=v({},Wn,{data:0}),wf=st(Mm),Um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nm[e])?!!t[e]:!1}function ls(){return qm}var Lm=v({},Ri,{key:function(e){if(e.key){var t=Um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bm=st(Lm),Pm=v({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=st(Pm),Hm=v({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Gm=st(Hm),$m=v({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=st($m),Xm=v({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qm=st(Xm),Vm=v({},Wn,{newState:0,oldState:0}),Zm=st(Vm),Km=[9,13,27,32],os=Kt&&"CompositionEvent"in window,Di=null;Kt&&"documentMode"in document&&(Di=document.documentMode);var Jm=Kt&&"TextEvent"in window&&!Di,Tf=Kt&&(!os||Di&&8<Di&&11>=Di),Ef=" ",kf=!1;function Af(e,t){switch(e){case"keyup":return Km.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Da=!1;function Im(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(kf=!0,Ef);case"textInput":return e=t.data,e===Ef&&kf?null:e;default:return null}}function Fm(e,t){if(Da)return e==="compositionend"||!os&&Af(e,t)?(e=_f(),al=ns=yn=null,Da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tf&&t.locale!=="ko"?null:t.data;default:return null}}var Wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wm[e.type]:t==="textarea"}function Cf(e,t,n,o){Ra?Ca?Ca.push(o):Ca=[o]:Ra=o,t=Vl(t,"onChange"),0<t.length&&(n=new ll("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Mi=null,Ui=null;function ev(e){fp(e,0)}function sl(e){var t=ki(e);if(hf(t))return e}function Df(e,t){if(e==="change")return t}var Mf=!1;if(Kt){var ss;if(Kt){var us="oninput"in document;if(!us){var Uf=document.createElement("div");Uf.setAttribute("oninput","return;"),us=typeof Uf.oninput=="function"}ss=us}else ss=!1;Mf=ss&&(!document.documentMode||9<document.documentMode)}function zf(){Mi&&(Mi.detachEvent("onpropertychange",Nf),Ui=Mi=null)}function Nf(e){if(e.propertyName==="value"&&sl(Ui)){var t=[];Cf(t,Ui,e,Wo(e)),yf(ev,t)}}function tv(e,t,n){e==="focusin"?(zf(),Mi=t,Ui=n,Mi.attachEvent("onpropertychange",Nf)):e==="focusout"&&zf()}function nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Ui)}function av(e,t){if(e==="click")return sl(t)}function iv(e,t){if(e==="input"||e==="change")return sl(t)}function rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:rv;function zi(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var c=n[o];if(!Lo.call(t,c)||!vt(e[c],t[c]))return!1}return!0}function qf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=qf(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function Bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tl(e.document)}return t}function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lv=Kt&&"documentMode"in document&&11>=document.documentMode,Ma=null,fs=null,Ni=null,hs=!1;function Hf(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hs||Ma==null||Ma!==tl(o)||(o=Ma,"selectionStart"in o&&cs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ni&&zi(Ni,o)||(Ni=o,o=Vl(fs,"onSelect"),0<o.length&&(t=new ll("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Ma)))}function ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ua={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},ds={},Gf={};Kt&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function ta(e){if(ds[e])return ds[e];if(!Ua[e])return e;var t=Ua[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gf)return ds[e]=t[n];return e}var $f=ta("animationend"),Yf=ta("animationiteration"),Xf=ta("animationstart"),ov=ta("transitionrun"),sv=ta("transitionstart"),uv=ta("transitioncancel"),Qf=ta("transitionend"),Vf=new Map,ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ps.push("scrollEnd");function zt(e,t){Vf.set(e,t),Fn(t,[e])}var Zf=new WeakMap;function kt(e,t){if(typeof e=="object"&&e!==null){var n=Zf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:cf(t)},Zf.set(e,t),t)}return{value:e,source:t,stack:cf(t)}}var At=[],za=0,gs=0;function ul(){for(var e=za,t=gs=za=0;t<e;){var n=At[t];At[t++]=null;var o=At[t];At[t++]=null;var c=At[t];At[t++]=null;var d=At[t];if(At[t++]=null,o!==null&&c!==null){var b=o.pending;b===null?c.next=c:(c.next=b.next,b.next=c),o.pending=c}d!==0&&Kf(n,c,d)}}function cl(e,t,n,o){At[za++]=e,At[za++]=t,At[za++]=n,At[za++]=o,gs|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ms(e,t,n,o){return cl(e,t,n,o),fl(e)}function Na(e,t){return cl(e,null,null,t),fl(e)}function Kf(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var c=!1,d=e.return;d!==null;)d.childLanes|=n,o=d.alternate,o!==null&&(o.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&t!==null&&(c=31-mt(n),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[t]:o.push(t),t.lane=n|536870912),d):null}function fl(e){if(50<or)throw or=0,Su=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qa={};function cv(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,o){return new cv(e,t,n,o)}function vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Jf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hl(e,t,n,o,c,d){var b=0;if(o=e,typeof e=="function")vs(e)&&(b=1);else if(typeof e=="string")b=hb(e,n,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=bt(31,n,t,c),e.elementType=ce,e.lanes=d,e;case w:return na(n.children,c,d,t);case k:b=8,c|=24;break;case A:return e=bt(12,n,t,c|2),e.elementType=A,e.lanes=d,e;case Y:return e=bt(13,n,t,c),e.elementType=Y,e.lanes=d,e;case G:return e=bt(19,n,t,c),e.elementType=G,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:case z:b=10;break e;case X:b=9;break e;case $:b=11;break e;case I:b=14;break e;case se:b=16,o=null;break e}b=29,n=Error(s(130,e===null?"null":typeof e,"")),o=null}return t=bt(b,n,t,c),t.elementType=e,t.type=o,t.lanes=d,t}function na(e,t,n,o){return e=bt(7,e,o,t),e.lanes=n,e}function bs(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function ys(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var La=[],Ba=0,dl=null,pl=0,jt=[],Rt=0,aa=null,It=1,Ft="";function ia(e,t){La[Ba++]=pl,La[Ba++]=dl,dl=e,pl=t}function If(e,t,n){jt[Rt++]=It,jt[Rt++]=Ft,jt[Rt++]=aa,aa=e;var o=It;e=Ft;var c=32-mt(o)-1;o&=~(1<<c),n+=1;var d=32-mt(t)+c;if(30<d){var b=c-c%5;d=(o&(1<<b)-1).toString(32),o>>=b,c-=b,It=1<<32-mt(t)+c|n<<c|o,Ft=d+e}else It=1<<d|n<<c|o,Ft=e}function _s(e){e.return!==null&&(ia(e,1),If(e,1,0))}function xs(e){for(;e===dl;)dl=La[--Ba],La[Ba]=null,pl=La[--Ba],La[Ba]=null;for(;e===aa;)aa=jt[--Rt],jt[Rt]=null,Ft=jt[--Rt],jt[Rt]=null,It=jt[--Rt],jt[Rt]=null}var rt=null,Ue=null,ye=!1,ra=null,$t=!1,Ss=Error(s(519));function la(e){var t=Error(s(418,""));throw Bi(kt(t,e)),Ss}function Ff(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[nt]=e,t[ot]=o,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<ur.length;n++)de(ur[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),df(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),el(t);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),gf(t,o.value,o.defaultValue,o.children),el(t)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||gp(t.textContent,n)?(o.popover!=null&&(de("beforetoggle",t),de("toggle",t)),o.onScroll!=null&&de("scroll",t),o.onScrollEnd!=null&&de("scrollend",t),o.onClick!=null&&(t.onclick=Zl),t=!0):t=!1,t||la(e)}function Wf(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:rt=rt.return}}function qi(e){if(e!==rt)return!1;if(!ye)return Wf(e),ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lu(e.type,e.memoizedProps)),n=!n),n&&Ue&&la(e),Wf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ue=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ue=null}}else t===27?(t=Ue,zn(e.type)?(e=Gu,Gu=null,Ue=e):Ue=t):Ue=rt?qt(e.stateNode.nextSibling):null;return!0}function Li(){Ue=rt=null,ye=!1}function eh(){var e=ra;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),ra=null),e}function Bi(e){ra===null?ra=[e]:ra.push(e)}var ws=H(null),oa=null,Wt=null;function _n(e,t,n){V(ws,t._currentValue),t._currentValue=n}function en(e){e._currentValue=ws.current,K(ws)}function Os(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ts(e,t,n,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var b=c.child;d=d.firstContext;e:for(;d!==null;){var y=d;d=c;for(var S=0;S<t.length;S++)if(y.context===t[S]){d.lanes|=n,y=d.alternate,y!==null&&(y.lanes|=n),Os(d.return,n,e),o||(b=null);break e}d=y.next}}else if(c.tag===18){if(b=c.return,b===null)throw Error(s(341));b.lanes|=n,d=b.alternate,d!==null&&(d.lanes|=n),Os(b,n,e),b=null}else b=c.child;if(b!==null)b.return=c;else for(b=c;b!==null;){if(b===e){b=null;break}if(c=b.sibling,c!==null){c.return=b.return,b=c;break}b=b.return}c=b}}function Pi(e,t,n,o){e=null;for(var c=t,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var b=c.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var y=c.type;vt(c.pendingProps.value,b.value)||(e!==null?e.push(y):e=[y])}}else if(c===pt.current){if(b=c.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(gr):e=[gr])}c=c.return}e!==null&&Ts(t,e,n,o),t.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!vt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){oa=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return th(oa,e)}function ml(e,t){return oa===null&&sa(e),th(e,t)}function th(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wt===null){if(e===null)throw Error(s(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return n}var fv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},hv=l.unstable_scheduleCallback,dv=l.unstable_NormalPriority,Ge={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Es(){return{controller:new fv,data:new Map,refCount:0}}function Hi(e){e.refCount--,e.refCount===0&&hv(dv,function(){e.controller.abort()})}var Gi=null,ks=0,Pa=0,Ha=null;function pv(e,t){if(Gi===null){var n=Gi=[];ks=0,Pa=ju(),Ha={status:"pending",value:void 0,then:function(o){n.push(o)}}}return ks++,t.then(nh,nh),t}function nh(){if(--ks===0&&Gi!==null){Ha!==null&&(Ha.status="fulfilled");var e=Gi;Gi=null,Pa=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gv(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(o.status="rejected",o.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),o}var ah=q.S;q.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&pv(e,t),ah!==null&&ah(e,t)};var ua=H(null);function As(){var e=ua.current;return e!==null?e:Ae.pooledCache}function vl(e,t){t===null?V(ua,ua.current):V(ua,t.pool)}function ih(){var e=As();return e===null?null:{parent:Ge._currentValue,pool:e}}var $i=Error(s(460)),rh=Error(s(474)),bl=Error(s(542)),js={then:function(){}};function lh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yl(){}function oh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yl,yl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then(yl,yl);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=o}},function(o){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw Yi=t,$i}}var Yi=null;function sh(){if(Yi===null)throw Error(s(459));var e=Yi;return Yi=null,e}function uh(e){if(e===$i||e===bl)throw Error(s(483))}var xn=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(_e&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,t=fl(e),Kf(e,null,n),t}return cl(e,o,t,n),fl(e)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,tf(e,n)}}function Ds(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var c=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var b={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?c=d=b:d=d.next=b,n=n.next}while(n!==null);d===null?c=d=t:d=d.next=t}else c=d=t;n={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ms=!1;function Qi(){if(Ms){var e=Ha;if(e!==null)throw e}}function Vi(e,t,n,o){Ms=!1;var c=e.updateQueue;xn=!1;var d=c.firstBaseUpdate,b=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var S=y,C=S.next;S.next=null,b===null?d=C:b.next=C,b=S;var N=e.alternate;N!==null&&(N=N.updateQueue,y=N.lastBaseUpdate,y!==b&&(y===null?N.firstBaseUpdate=C:y.next=C,N.lastBaseUpdate=S))}if(d!==null){var B=c.baseState;b=0,N=C=S=null,y=d;do{var D=y.lane&-536870913,M=D!==y.lane;if(M?(me&D)===D:(o&D)===D){D!==0&&D===Pa&&(Ms=!0),N!==null&&(N=N.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ie=e,te=y;D=t;var Te=n;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){B=ie.call(Te,B,D);break e}B=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,D=typeof ie=="function"?ie.call(Te,B,D):ie,D==null)break e;B=v({},B,D);break e;case 2:xn=!0}}D=y.callback,D!==null&&(e.flags|=64,M&&(e.flags|=8192),M=c.callbacks,M===null?c.callbacks=[D]:M.push(D))}else M={lane:D,tag:y.tag,payload:y.payload,callback:y.callback,next:null},N===null?(C=N=M,S=B):N=N.next=M,b|=D;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;M=y,y=M.next,M.next=null,c.lastBaseUpdate=M,c.shared.pending=null}}while(!0);N===null&&(S=B),c.baseState=S,c.firstBaseUpdate=C,c.lastBaseUpdate=N,d===null&&(c.shared.lanes=0),Cn|=b,e.lanes=b,e.memoizedState=B}}function ch(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function fh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ch(n[e],t)}var Ga=H(null),_l=H(0);function hh(e,t){e=sn,V(_l,e),V(Ga,t),sn=e|t.baseLanes}function Us(){V(_l,sn),V(Ga,Ga.current)}function zs(){sn=_l.current,K(Ga),K(_l)}var On=0,ue=null,we=null,Be=null,xl=!1,$a=!1,ca=!1,Sl=0,Zi=0,Ya=null,mv=0;function Ne(){throw Error(s(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function qs(e,t,n,o,c,d){return On=d,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?Kh:Jh,ca=!1,d=n(o,c),ca=!1,$a&&(d=ph(t,n,o,c)),dh(e),d}function dh(e){q.H=Al;var t=we!==null&&we.next!==null;if(On=0,Be=we=ue=null,xl=!1,Zi=0,Ya=null,t)throw Error(s(300));e===null||Ve||(e=e.dependencies,e!==null&&gl(e)&&(Ve=!0))}function ph(e,t,n,o){ue=e;var c=0;do{if($a&&(Ya=null),Zi=0,$a=!1,25<=c)throw Error(s(301));if(c+=1,Be=we=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}q.H=wv,d=t(n,o)}while($a);return d}function vv(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?Ki(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(ue.flags|=1024),t}function Ls(){var e=Sl!==0;return Sl=0,e}function Bs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ps(e){if(xl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xl=!1}On=0,Be=we=ue=null,$a=!1,Zi=Sl=0,Ya=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ue.memoizedState=Be=e:Be=Be.next=e,Be}function Pe(){if(we===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Be===null?ue.memoizedState:Be.next;if(t!==null)Be=t,we=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Be===null?ue.memoizedState=Be=e:Be=Be.next=e}return Be}function Hs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ki(e){var t=Zi;return Zi+=1,Ya===null&&(Ya=[]),e=oh(Ya,e,t),t=ue,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?Kh:Jh),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ki(e);if(e.$$typeof===z)return at(e)}throw Error(s(438,String(e)))}function Gs(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Hs(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=Xe;return t.index++,n}function tn(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=Pe();return $s(t,we,e)}function $s(e,t,n){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var b=c.next;c.next=d.next,d.next=b}t.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{t=c.next;var y=b=null,S=null,C=t,N=!1;do{var B=C.lane&-536870913;if(B!==C.lane?(me&B)===B:(On&B)===B){var D=C.revertLane;if(D===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),B===Pa&&(N=!0);else if((On&D)===D){C=C.next,D===Pa&&(N=!0);continue}else B={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(y=S=B,b=d):S=S.next=B,ue.lanes|=D,Cn|=D;B=C.action,ca&&n(d,B),d=C.hasEagerState?C.eagerState:n(d,B)}else D={lane:B,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(y=S=D,b=d):S=S.next=D,ue.lanes|=B,Cn|=B;C=C.next}while(C!==null&&C!==t);if(S===null?b=d:S.next=y,!vt(d,e.memoizedState)&&(Ve=!0,N&&(n=Ha,n!==null)))throw n;e.memoizedState=d,e.baseState=b,e.baseQueue=S,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ys(e){var t=Pe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var o=n.dispatch,c=n.pending,d=t.memoizedState;if(c!==null){n.pending=null;var b=c=c.next;do d=e(d,b.action),b=b.next;while(b!==c);vt(d,t.memoizedState)||(Ve=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,o]}function gh(e,t,n){var o=ue,c=Pe(),d=ye;if(d){if(n===void 0)throw Error(s(407));n=n()}else n=t();var b=!vt((we||c).memoizedState,n);b&&(c.memoizedState=n,Ve=!0),c=c.queue;var y=bh.bind(null,o,c,e);if(Ji(2048,8,y,[e]),c.getSnapshot!==t||b||Be!==null&&Be.memoizedState.tag&1){if(o.flags|=2048,Xa(9,Tl(),vh.bind(null,o,c,n,t),null),Ae===null)throw Error(s(349));d||(On&124)!==0||mh(o,t,n)}return n}function mh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=Hs(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vh(e,t,n,o){t.value=n,t.getSnapshot=o,yh(t)&&_h(e)}function bh(e,t,n){return n(function(){yh(t)&&_h(e)})}function yh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function _h(e){var t=Na(e,2);t!==null&&wt(t,e,2)}function Xs(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),ca){vn(!0);try{n()}finally{vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t}function xh(e,t,n,o){return e.baseState=n,$s(e,we,typeof o=="function"?o:tn)}function bv(e,t,n,o,c){if(kl(e))throw Error(s(485));if(e=t.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};q.T!==null?n(!0):d.isTransition=!1,o(d),n=t.pending,n===null?(d.next=t.pending=d,Sh(t,d)):(d.next=n.next,t.pending=n.next=d)}}function Sh(e,t){var n=t.action,o=t.payload,c=e.state;if(t.isTransition){var d=q.T,b={};q.T=b;try{var y=n(c,o),S=q.S;S!==null&&S(b,y),wh(e,t,y)}catch(C){Qs(e,t,C)}finally{q.T=d}}else try{d=n(c,o),wh(e,t,d)}catch(C){Qs(e,t,C)}}function wh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Oh(e,t,o)},function(o){return Qs(e,t,o)}):Oh(e,t,n)}function Oh(e,t,n){t.status="fulfilled",t.value=n,Th(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sh(e,n)))}function Qs(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,Th(t),t=t.next;while(t!==o)}e.action=null}function Th(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Eh(e,t){return t}function kh(e,t){if(ye){var n=Ae.formState;if(n!==null){e:{var o=ue;if(ye){if(Ue){t:{for(var c=Ue,d=$t;c.nodeType!==8;){if(!d){c=null;break t}if(c=qt(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Ue=qt(c.nextSibling),o=c.data==="F!";break e}}la(o)}o=!1}o&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eh,lastRenderedState:t},n.queue=o,n=Qh.bind(null,ue,o),o.dispatch=n,o=Xs(!1),d=Is.bind(null,ue,!1,o.queue),o=ut(),c={state:t,dispatch:null,action:e,pending:null},o.queue=c,n=bv.bind(null,ue,c,d,n),c.dispatch=n,o.memoizedState=e,[t,n,!1]}function Ah(e){var t=Pe();return jh(t,we,e)}function jh(e,t,n){if(t=$s(e,t,Eh)[0],e=Ol(tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Ki(t)}catch(b){throw b===$i?bl:b}else o=t;t=Pe();var c=t.queue,d=c.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,Xa(9,Tl(),yv.bind(null,c,n),null)),[o,d,e]}function yv(e,t){e.action=t}function Rh(e){var t=Pe(),n=we;if(n!==null)return jh(t,n,e);Pe(),t=t.memoizedState,n=Pe();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Xa(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Hs(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function Tl(){return{destroy:void 0,resource:void 0}}function Ch(){return Pe().memoizedState}function El(e,t,n,o){var c=ut();o=o===void 0?null:o,ue.flags|=e,c.memoizedState=Xa(1|t,Tl(),n,o)}function Ji(e,t,n,o){var c=Pe();o=o===void 0?null:o;var d=c.memoizedState.inst;we!==null&&o!==null&&Ns(o,we.memoizedState.deps)?c.memoizedState=Xa(t,d,n,o):(ue.flags|=e,c.memoizedState=Xa(1|t,d,n,o))}function Dh(e,t){El(8390656,8,e,t)}function Mh(e,t){Ji(2048,8,e,t)}function Uh(e,t){return Ji(4,2,e,t)}function zh(e,t){return Ji(4,4,e,t)}function Nh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qh(e,t,n){n=n!=null?n.concat([e]):null,Ji(4,4,Nh.bind(null,t,e),n)}function Vs(){}function Lh(e,t){var n=Pe();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Ns(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Bh(e,t){var n=Pe();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Ns(t,o[1]))return o[0];if(o=e(),ca){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[o,t],o}function Zs(e,t,n){return n===void 0||(On&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Gd(),ue.lanes|=e,Cn|=e,n)}function Ph(e,t,n,o){return vt(n,t)?n:Ga.current!==null?(e=Zs(e,n,o),vt(e,t)||(Ve=!0),e):(On&42)===0?(Ve=!0,e.memoizedState=n):(e=Gd(),ue.lanes|=e,Cn|=e,t)}function Hh(e,t,n,o,c){var d=Z.p;Z.p=d!==0&&8>d?d:8;var b=q.T,y={};q.T=y,Is(e,!1,t,n);try{var S=c(),C=q.S;if(C!==null&&C(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var N=gv(S,o);Ii(e,t,N,St(e))}else Ii(e,t,o,St(e))}catch(B){Ii(e,t,{then:function(){},status:"rejected",reason:B},St())}finally{Z.p=d,q.T=b}}function _v(){}function Ks(e,t,n,o){if(e.tag!==5)throw Error(s(476));var c=Gh(e).queue;Hh(e,c,t,ae,n===null?_v:function(){return $h(e),n(o)})}function Gh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $h(e){var t=Gh(e).next.queue;Ii(e,t,{},St())}function Js(){return at(gr)}function Yh(){return Pe().memoizedState}function Xh(){return Pe().memoizedState}function xv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=St();e=Sn(n);var o=wn(t,e,n);o!==null&&(wt(o,t,n),Xi(o,t,n)),t={cache:Es()},e.payload=t;return}t=t.return}}function Sv(e,t,n){var o=St();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},kl(e)?Vh(t,n):(n=ms(e,t,n,o),n!==null&&(wt(n,e,o),Zh(n,t,o)))}function Qh(e,t,n){var o=St();Ii(e,t,n,o)}function Ii(e,t,n,o){var c={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(kl(e))Vh(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var b=t.lastRenderedState,y=d(b,n);if(c.hasEagerState=!0,c.eagerState=y,vt(y,b))return cl(e,t,c,0),Ae===null&&ul(),!1}catch{}finally{}if(n=ms(e,t,c,o),n!==null)return wt(n,e,o),Zh(n,t,o),!0}return!1}function Is(e,t,n,o){if(o={lane:2,revertLane:ju(),action:o,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(t)throw Error(s(479))}else t=ms(e,n,o,2),t!==null&&wt(t,e,2)}function kl(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Vh(e,t){$a=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zh(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,tf(e,n)}}var Al={readContext:at,use:wl,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Kh={readContext:at,use:wl,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Dh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,El(4194308,4,Nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return El(4194308,4,e,t)},useInsertionEffect:function(e,t){El(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var o=e();if(ca){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=ut();if(n!==void 0){var c=n(t);if(ca){vn(!0);try{n(t)}finally{vn(!1)}}}else c=t;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Sv.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Xs(e);var t=e.queue,n=Qh.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vs,useDeferredValue:function(e,t){var n=ut();return Zs(n,e,t)},useTransition:function(){var e=Xs(!1);return e=Hh.bind(null,ue,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=ue,c=ut();if(ye){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ae===null)throw Error(s(349));(me&124)!==0||mh(o,t,n)}c.memoizedState=n;var d={value:n,getSnapshot:t};return c.queue=d,Dh(bh.bind(null,o,d,e),[e]),o.flags|=2048,Xa(9,Tl(),vh.bind(null,o,d,n,t),null),n},useId:function(){var e=ut(),t=Ae.identifierPrefix;if(ye){var n=Ft,o=It;n=(o&~(1<<32-mt(o)-1)).toString(32)+n,t="«"+t+"R"+n,n=Sl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=mv++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Js,useFormState:kh,useActionState:kh,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gs,useCacheRefresh:function(){return ut().memoizedState=xv.bind(null,ue)}},Jh={readContext:at,use:wl,useCallback:Lh,useContext:at,useEffect:Mh,useImperativeHandle:qh,useInsertionEffect:Uh,useLayoutEffect:zh,useMemo:Bh,useReducer:Ol,useRef:Ch,useState:function(){return Ol(tn)},useDebugValue:Vs,useDeferredValue:function(e,t){var n=Pe();return Ph(n,we.memoizedState,e,t)},useTransition:function(){var e=Ol(tn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ki(e),t]},useSyncExternalStore:gh,useId:Yh,useHostTransitionStatus:Js,useFormState:Ah,useActionState:Ah,useOptimistic:function(e,t){var n=Pe();return xh(n,we,e,t)},useMemoCache:Gs,useCacheRefresh:Xh},wv={readContext:at,use:wl,useCallback:Lh,useContext:at,useEffect:Mh,useImperativeHandle:qh,useInsertionEffect:Uh,useLayoutEffect:zh,useMemo:Bh,useReducer:Ys,useRef:Ch,useState:function(){return Ys(tn)},useDebugValue:Vs,useDeferredValue:function(e,t){var n=Pe();return we===null?Zs(n,e,t):Ph(n,we.memoizedState,e,t)},useTransition:function(){var e=Ys(tn)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ki(e),t]},useSyncExternalStore:gh,useId:Yh,useHostTransitionStatus:Js,useFormState:Rh,useActionState:Rh,useOptimistic:function(e,t){var n=Pe();return we!==null?xh(n,we,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gs,useCacheRefresh:Xh},Qa=null,Fi=0;function jl(e){var t=Fi;return Fi+=1,Qa===null&&(Qa=[]),oh(Qa,e,t)}function Wi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Rl(e,t){throw t.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ih(e){var t=e._init;return t(e._payload)}function Fh(e){function t(j,E){if(e){var R=j.deletions;R===null?(j.deletions=[E],j.flags|=16):R.push(E)}}function n(j,E){if(!e)return null;for(;E!==null;)t(j,E),E=E.sibling;return null}function o(j){for(var E=new Map;j!==null;)j.key!==null?E.set(j.key,j):E.set(j.index,j),j=j.sibling;return E}function c(j,E){return j=Jt(j,E),j.index=0,j.sibling=null,j}function d(j,E,R){return j.index=R,e?(R=j.alternate,R!==null?(R=R.index,R<E?(j.flags|=67108866,E):R):(j.flags|=67108866,E)):(j.flags|=1048576,E)}function b(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function y(j,E,R,L){return E===null||E.tag!==6?(E=bs(R,j.mode,L),E.return=j,E):(E=c(E,R),E.return=j,E)}function S(j,E,R,L){var J=R.type;return J===w?N(j,E,R.props.children,L,R.key):E!==null&&(E.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===se&&Ih(J)===E.type)?(E=c(E,R.props),Wi(E,R),E.return=j,E):(E=hl(R.type,R.key,R.props,null,j.mode,L),Wi(E,R),E.return=j,E)}function C(j,E,R,L){return E===null||E.tag!==4||E.stateNode.containerInfo!==R.containerInfo||E.stateNode.implementation!==R.implementation?(E=ys(R,j.mode,L),E.return=j,E):(E=c(E,R.children||[]),E.return=j,E)}function N(j,E,R,L,J){return E===null||E.tag!==7?(E=na(R,j.mode,L,J),E.return=j,E):(E=c(E,R),E.return=j,E)}function B(j,E,R){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=bs(""+E,j.mode,R),E.return=j,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case x:return R=hl(E.type,E.key,E.props,null,j.mode,R),Wi(R,E),R.return=j,R;case T:return E=ys(E,j.mode,R),E.return=j,E;case se:var L=E._init;return E=L(E._payload),B(j,E,R)}if(tt(E)||Le(E))return E=na(E,j.mode,R,null),E.return=j,E;if(typeof E.then=="function")return B(j,jl(E),R);if(E.$$typeof===z)return B(j,ml(j,E),R);Rl(j,E)}return null}function D(j,E,R,L){var J=E!==null?E.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return J!==null?null:y(j,E,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return R.key===J?S(j,E,R,L):null;case T:return R.key===J?C(j,E,R,L):null;case se:return J=R._init,R=J(R._payload),D(j,E,R,L)}if(tt(R)||Le(R))return J!==null?null:N(j,E,R,L,null);if(typeof R.then=="function")return D(j,E,jl(R),L);if(R.$$typeof===z)return D(j,E,ml(j,R),L);Rl(j,R)}return null}function M(j,E,R,L,J){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return j=j.get(R)||null,y(E,j,""+L,J);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return j=j.get(L.key===null?R:L.key)||null,S(E,j,L,J);case T:return j=j.get(L.key===null?R:L.key)||null,C(E,j,L,J);case se:var fe=L._init;return L=fe(L._payload),M(j,E,R,L,J)}if(tt(L)||Le(L))return j=j.get(R)||null,N(E,j,L,J,null);if(typeof L.then=="function")return M(j,E,R,jl(L),J);if(L.$$typeof===z)return M(j,E,R,ml(E,L),J);Rl(E,L)}return null}function ie(j,E,R,L){for(var J=null,fe=null,W=E,ne=E=0,Ke=null;W!==null&&ne<R.length;ne++){W.index>ne?(Ke=W,W=null):Ke=W.sibling;var be=D(j,W,R[ne],L);if(be===null){W===null&&(W=Ke);break}e&&W&&be.alternate===null&&t(j,W),E=d(be,E,ne),fe===null?J=be:fe.sibling=be,fe=be,W=Ke}if(ne===R.length)return n(j,W),ye&&ia(j,ne),J;if(W===null){for(;ne<R.length;ne++)W=B(j,R[ne],L),W!==null&&(E=d(W,E,ne),fe===null?J=W:fe.sibling=W,fe=W);return ye&&ia(j,ne),J}for(W=o(W);ne<R.length;ne++)Ke=M(W,j,ne,R[ne],L),Ke!==null&&(e&&Ke.alternate!==null&&W.delete(Ke.key===null?ne:Ke.key),E=d(Ke,E,ne),fe===null?J=Ke:fe.sibling=Ke,fe=Ke);return e&&W.forEach(function(Pn){return t(j,Pn)}),ye&&ia(j,ne),J}function te(j,E,R,L){if(R==null)throw Error(s(151));for(var J=null,fe=null,W=E,ne=E=0,Ke=null,be=R.next();W!==null&&!be.done;ne++,be=R.next()){W.index>ne?(Ke=W,W=null):Ke=W.sibling;var Pn=D(j,W,be.value,L);if(Pn===null){W===null&&(W=Ke);break}e&&W&&Pn.alternate===null&&t(j,W),E=d(Pn,E,ne),fe===null?J=Pn:fe.sibling=Pn,fe=Pn,W=Ke}if(be.done)return n(j,W),ye&&ia(j,ne),J;if(W===null){for(;!be.done;ne++,be=R.next())be=B(j,be.value,L),be!==null&&(E=d(be,E,ne),fe===null?J=be:fe.sibling=be,fe=be);return ye&&ia(j,ne),J}for(W=o(W);!be.done;ne++,be=R.next())be=M(W,j,ne,be.value,L),be!==null&&(e&&be.alternate!==null&&W.delete(be.key===null?ne:be.key),E=d(be,E,ne),fe===null?J=be:fe.sibling=be,fe=be);return e&&W.forEach(function(Ob){return t(j,Ob)}),ye&&ia(j,ne),J}function Te(j,E,R,L){if(typeof R=="object"&&R!==null&&R.type===w&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case x:e:{for(var J=R.key;E!==null;){if(E.key===J){if(J=R.type,J===w){if(E.tag===7){n(j,E.sibling),L=c(E,R.props.children),L.return=j,j=L;break e}}else if(E.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===se&&Ih(J)===E.type){n(j,E.sibling),L=c(E,R.props),Wi(L,R),L.return=j,j=L;break e}n(j,E);break}else t(j,E);E=E.sibling}R.type===w?(L=na(R.props.children,j.mode,L,R.key),L.return=j,j=L):(L=hl(R.type,R.key,R.props,null,j.mode,L),Wi(L,R),L.return=j,j=L)}return b(j);case T:e:{for(J=R.key;E!==null;){if(E.key===J)if(E.tag===4&&E.stateNode.containerInfo===R.containerInfo&&E.stateNode.implementation===R.implementation){n(j,E.sibling),L=c(E,R.children||[]),L.return=j,j=L;break e}else{n(j,E);break}else t(j,E);E=E.sibling}L=ys(R,j.mode,L),L.return=j,j=L}return b(j);case se:return J=R._init,R=J(R._payload),Te(j,E,R,L)}if(tt(R))return ie(j,E,R,L);if(Le(R)){if(J=Le(R),typeof J!="function")throw Error(s(150));return R=J.call(R),te(j,E,R,L)}if(typeof R.then=="function")return Te(j,E,jl(R),L);if(R.$$typeof===z)return Te(j,E,ml(j,R),L);Rl(j,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,E!==null&&E.tag===6?(n(j,E.sibling),L=c(E,R),L.return=j,j=L):(n(j,E),L=bs(R,j.mode,L),L.return=j,j=L),b(j)):n(j,E)}return function(j,E,R,L){try{Fi=0;var J=Te(j,E,R,L);return Qa=null,J}catch(W){if(W===$i||W===bl)throw W;var fe=bt(29,W,null,j.mode);return fe.lanes=L,fe.return=j,fe}finally{}}}var Va=Fh(!0),Wh=Fh(!1),Ct=H(null),Yt=null;function Tn(e){var t=e.alternate;V($e,$e.current&1),V(Ct,e),Yt===null&&(t===null||Ga.current!==null||t.memoizedState!==null)&&(Yt=e)}function ed(e){if(e.tag===22){if(V($e,$e.current),V(Ct,e),Yt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Yt=e)}}else En()}function En(){V($e,$e.current),V(Ct,Ct.current)}function nn(e){K(Ct),Yt===e&&(Yt=null),K($e)}var $e=H(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Hu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Fs(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=St(),c=Sn(o);c.payload=t,n!=null&&(c.callback=n),t=wn(e,c,o),t!==null&&(wt(t,e,o),Xi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=St(),c=Sn(o);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=wn(e,c,o),t!==null&&(wt(t,e,o),Xi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=St(),o=Sn(n);o.tag=2,t!=null&&(o.callback=t),t=wn(e,o,n),t!==null&&(wt(t,e,n),Xi(t,e,n))}};function td(e,t,n,o,c,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,b):t.prototype&&t.prototype.isPureReactComponent?!zi(n,o)||!zi(c,d):!0}function nd(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ad(e){Dl(e)}function id(e){console.error(e)}function rd(e){Dl(e)}function Ml(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function ld(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function eu(e,t,n){return n=Sn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ml(e,t)},n}function od(e){return e=Sn(e),e.tag=3,e}function sd(e,t,n,o){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){ld(t,n,o)}}var b=n.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){ld(t,n,o),typeof c!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var y=o.stack;this.componentDidCatch(o.value,{componentStack:y!==null?y:""})})}function Ov(e,t,n,o,c){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Pi(t,n,c,!0),n=Ct.current,n!==null){switch(n.tag){case 13:return Yt===null?Ou():n.alternate===null&&ze===0&&(ze=3),n.flags&=-257,n.flags|=65536,n.lanes=c,o===js?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),Eu(e,o,c)),!1;case 22:return n.flags|=65536,o===js?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),Eu(e,o,c)),!1}throw Error(s(435,n.tag))}return Eu(e,o,c),Ou(),!1}if(ye)return t=Ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,o!==Ss&&(e=Error(s(422),{cause:o}),Bi(kt(e,n)))):(o!==Ss&&(t=Error(s(423),{cause:o}),Bi(kt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=kt(o,n),c=eu(e.stateNode,o,c),Ds(e,c),ze!==4&&(ze=2)),!1;var d=Error(s(520),{cause:o});if(d=kt(d,n),lr===null?lr=[d]:lr.push(d),ze!==4&&(ze=2),t===null)return!0;o=kt(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=eu(n.stateNode,o,e),Ds(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dn===null||!Dn.has(d))))return n.flags|=65536,c&=-c,n.lanes|=c,c=od(c),sd(c,e,n,o),Ds(n,c),!1}n=n.return}while(n!==null);return!1}var ud=Error(s(461)),Ve=!1;function Fe(e,t,n,o){t.child=e===null?Wh(t,null,n,o):Va(t,e.child,n,o)}function cd(e,t,n,o,c){n=n.render;var d=t.ref;if("ref"in o){var b={};for(var y in o)y!=="ref"&&(b[y]=o[y])}else b=o;return sa(t),o=qs(e,t,n,b,d,c),y=Ls(),e!==null&&!Ve?(Bs(e,t,c),an(e,t,c)):(ye&&y&&_s(t),t.flags|=1,Fe(e,t,o,c),t.child)}function fd(e,t,n,o,c){if(e===null){var d=n.type;return typeof d=="function"&&!vs(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,hd(e,t,d,o,c)):(e=hl(n.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!su(e,c)){var b=d.memoizedProps;if(n=n.compare,n=n!==null?n:zi,n(b,o)&&e.ref===t.ref)return an(e,t,c)}return t.flags|=1,e=Jt(d,o),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,n,o,c){if(e!==null){var d=e.memoizedProps;if(zi(d,o)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=o=d,su(e,c))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,an(e,t,c)}return tu(e,t,n,o,c)}function dd(e,t,n){var o=t.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((t.flags&128)!==0){if(o=d!==null?d.baseLanes|n:n,e!==null){for(c=t.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;t.childLanes=d&~o}else t.childLanes=0,t.child=null;return pd(e,t,o,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(t,d!==null?d.cachePool:null),d!==null?hh(t,d):Us(),ed(t);else return t.lanes=t.childLanes=536870912,pd(e,t,d!==null?d.baseLanes|n:n,n)}else d!==null?(vl(t,d.cachePool),hh(t,d),En(),t.memoizedState=null):(e!==null&&vl(t,null),Us(),En());return Fe(e,t,c,n),t.child}function pd(e,t,n,o){var c=As();return c=c===null?null:{parent:Ge._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&vl(t,null),Us(),ed(t),e!==null&&Pi(e,t,o,!0),null}function Ul(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function tu(e,t,n,o,c){return sa(t),n=qs(e,t,n,o,void 0,c),o=Ls(),e!==null&&!Ve?(Bs(e,t,c),an(e,t,c)):(ye&&o&&_s(t),t.flags|=1,Fe(e,t,n,c),t.child)}function gd(e,t,n,o,c,d){return sa(t),t.updateQueue=null,n=ph(t,o,n,c),dh(e),o=Ls(),e!==null&&!Ve?(Bs(e,t,d),an(e,t,d)):(ye&&o&&_s(t),t.flags|=1,Fe(e,t,n,d),t.child)}function md(e,t,n,o,c){if(sa(t),t.stateNode===null){var d=qa,b=n.contextType;typeof b=="object"&&b!==null&&(d=at(b)),d=new n(o,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ws,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=o,d.state=t.memoizedState,d.refs={},Rs(t),b=n.contextType,d.context=typeof b=="object"&&b!==null?at(b):qa,d.state=t.memoizedState,b=n.getDerivedStateFromProps,typeof b=="function"&&(Fs(t,n,b,o),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Ws.enqueueReplaceState(d,d.state,null),Vi(t,o,d,c),Qi(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){d=t.stateNode;var y=t.memoizedProps,S=fa(n,y);d.props=S;var C=d.context,N=n.contextType;b=qa,typeof N=="object"&&N!==null&&(b=at(N));var B=n.getDerivedStateFromProps;N=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,N||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y||C!==b)&&nd(t,d,o,b),xn=!1;var D=t.memoizedState;d.state=D,Vi(t,o,d,c),Qi(),C=t.memoizedState,y||D!==C||xn?(typeof B=="function"&&(Fs(t,n,B,o),C=t.memoizedState),(S=xn||td(t,n,S,o,D,C,b))?(N||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=C),d.props=o,d.state=C,d.context=b,o=S):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,Cs(e,t),b=t.memoizedProps,N=fa(n,b),d.props=N,B=t.pendingProps,D=d.context,C=n.contextType,S=qa,typeof C=="object"&&C!==null&&(S=at(C)),y=n.getDerivedStateFromProps,(C=typeof y=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==B||D!==S)&&nd(t,d,o,S),xn=!1,D=t.memoizedState,d.state=D,Vi(t,o,d,c),Qi();var M=t.memoizedState;b!==B||D!==M||xn||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof y=="function"&&(Fs(t,n,y,o),M=t.memoizedState),(N=xn||td(t,n,N,o,D,M,S)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(C||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,M,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,M,S)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=M),d.props=o,d.state=M,d.context=S,o=N):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),o=!1)}return d=o,Ul(e,t),o=(t.flags&128)!==0,d||o?(d=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&o?(t.child=Va(t,e.child,null,c),t.child=Va(t,null,n,c)):Fe(e,t,n,c),t.memoizedState=d.state,e=t.child):e=an(e,t,c),e}function vd(e,t,n,o){return Li(),t.flags|=256,Fe(e,t,n,o),t.child}var nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function au(e){return{baseLanes:e,cachePool:ih()}}function iu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Dt),e}function bd(e,t,n){var o=t.pendingProps,c=!1,d=(t.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),b&&(c=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(c?Tn(t):En(),ye){var y=Ue,S;if(S=y){e:{for(S=y,y=$t;S.nodeType!==8;){if(!y){y=null;break e}if(S=qt(S.nextSibling),S===null){y=null;break e}}y=S}y!==null?(t.memoizedState={dehydrated:y,treeContext:aa!==null?{id:It,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},S=bt(18,null,null,0),S.stateNode=y,S.return=t,t.child=S,rt=t,Ue=null,S=!0):S=!1}S||la(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return Hu(y)?t.lanes=32:t.lanes=536870912,null;nn(t)}return y=o.children,o=o.fallback,c?(En(),c=t.mode,y=zl({mode:"hidden",children:y},c),o=na(o,c,n,null),y.return=t,o.return=t,y.sibling=o,t.child=y,c=t.child,c.memoizedState=au(n),c.childLanes=iu(e,b,n),t.memoizedState=nu,o):(Tn(t),ru(t,y))}if(S=e.memoizedState,S!==null&&(y=S.dehydrated,y!==null)){if(d)t.flags&256?(Tn(t),t.flags&=-257,t=lu(e,t,n)):t.memoizedState!==null?(En(),t.child=e.child,t.flags|=128,t=null):(En(),c=o.fallback,y=t.mode,o=zl({mode:"visible",children:o.children},y),c=na(c,y,n,null),c.flags|=2,o.return=t,c.return=t,o.sibling=c,t.child=o,Va(t,e.child,null,n),o=t.child,o.memoizedState=au(n),o.childLanes=iu(e,b,n),t.memoizedState=nu,t=c);else if(Tn(t),Hu(y)){if(b=y.nextSibling&&y.nextSibling.dataset,b)var C=b.dgst;b=C,o=Error(s(419)),o.stack="",o.digest=b,Bi({value:o,source:null,stack:null}),t=lu(e,t,n)}else if(Ve||Pi(e,t,n,!1),b=(n&e.childLanes)!==0,Ve||b){if(b=Ae,b!==null&&(o=n&-n,o=(o&42)!==0?1:Go(o),o=(o&(b.suspendedLanes|n))!==0?0:o,o!==0&&o!==S.retryLane))throw S.retryLane=o,Na(e,o),wt(b,e,o),ud;y.data==="$?"||Ou(),t=lu(e,t,n)}else y.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ue=qt(y.nextSibling),rt=t,ye=!0,ra=null,$t=!1,e!==null&&(jt[Rt++]=It,jt[Rt++]=Ft,jt[Rt++]=aa,It=e.id,Ft=e.overflow,aa=t),t=ru(t,o.children),t.flags|=4096);return t}return c?(En(),c=o.fallback,y=t.mode,S=e.child,C=S.sibling,o=Jt(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&65011712,C!==null?c=Jt(C,c):(c=na(c,y,n,null),c.flags|=2),c.return=t,o.return=t,o.sibling=c,t.child=o,o=c,c=t.child,y=e.child.memoizedState,y===null?y=au(n):(S=y.cachePool,S!==null?(C=Ge._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=ih(),y={baseLanes:y.baseLanes|n,cachePool:S}),c.memoizedState=y,c.childLanes=iu(e,b,n),t.memoizedState=nu,o):(Tn(t),n=e.child,e=n.sibling,n=Jt(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=n,t.memoizedState=null,n)}function ru(e,t){return t=zl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zl(e,t){return e=bt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function lu(e,t,n){return Va(t,e.child,null,n),e=ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Os(e.return,t,n)}function ou(e,t,n,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=n,d.tailMode=c)}function _d(e,t,n){var o=t.pendingProps,c=o.revealOrder,d=o.tail;if(Fe(e,t,o.children,n),o=$e.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,n,t);else if(e.tag===19)yd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(V($e,o),c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),ou(t,!1,c,n,d);break;case"backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Cl(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}ou(t,!0,n,null,d);break;case"together":ou(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Pi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function su(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function Tv(e,t,n){switch(t.tag){case 3:Re(t,t.stateNode.containerInfo),_n(t,Ge,e.memoizedState.cache),Li();break;case 27:case 5:qo(t);break;case 4:Re(t,t.stateNode.containerInfo);break;case 10:_n(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Tn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bd(e,t,n):(Tn(t),e=an(e,t,n),e!==null?e.sibling:null);Tn(t);break;case 19:var c=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(Pi(e,t,n,!1),o=(n&t.childLanes)!==0),c){if(o)return _d(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),V($e,$e.current),o)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,n);case 24:_n(t,Ge,e.memoizedState.cache)}return an(e,t,n)}function xd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!su(e,n)&&(t.flags&128)===0)return Ve=!1,Tv(e,t,n);Ve=(e.flags&131072)!==0}else Ve=!1,ye&&(t.flags&1048576)!==0&&If(t,pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,c=o._init;if(o=c(o._payload),t.type=o,typeof o=="function")vs(o)?(e=fa(o,e),t.tag=1,t=md(null,t,o,e,n)):(t.tag=0,t=tu(null,t,o,e,n));else{if(o!=null){if(c=o.$$typeof,c===$){t.tag=11,t=cd(null,t,o,e,n);break e}else if(c===I){t.tag=14,t=fd(null,t,o,e,n);break e}}throw t=Jn(o)||o,Error(s(306,t,""))}}return t;case 0:return tu(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,c=fa(o,t.pendingProps),md(e,t,o,c,n);case 3:e:{if(Re(t,t.stateNode.containerInfo),e===null)throw Error(s(387));o=t.pendingProps;var d=t.memoizedState;c=d.element,Cs(e,t),Vi(t,o,null,n);var b=t.memoizedState;if(o=b.cache,_n(t,Ge,o),o!==d.cache&&Ts(t,[Ge],n,!0),Qi(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=vd(e,t,o,n);break e}else if(o!==c){c=kt(Error(s(424)),t),Bi(c),t=vd(e,t,o,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=qt(e.firstChild),rt=t,ye=!0,ra=null,$t=!0,n=Wh(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Li(),o===c){t=an(e,t,n);break e}Fe(e,t,o,n)}t=t.child}return t;case 26:return Ul(e,t),e===null?(n=Tp(t.type,null,t.pendingProps,null))?t.memoizedState=n:ye||(n=t.type,e=t.pendingProps,o=Kl(re.current).createElement(n),o[nt]=t,o[ot]=e,et(o,n,e),Qe(o),t.stateNode=o):t.memoizedState=Tp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qo(t),e===null&&ye&&(o=t.stateNode=Sp(t.type,t.pendingProps,re.current),rt=t,$t=!0,c=Ue,zn(t.type)?(Gu=c,Ue=qt(o.firstChild)):Ue=c),Fe(e,t,t.pendingProps.children,n),Ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((c=o=Ue)&&(o=Wv(o,t.type,t.pendingProps,$t),o!==null?(t.stateNode=o,rt=t,Ue=qt(o.firstChild),$t=!1,c=!0):c=!1),c||la(t)),qo(t),c=t.type,d=t.pendingProps,b=e!==null?e.memoizedProps:null,o=d.children,Lu(c,d)?o=null:b!==null&&Lu(c,b)&&(t.flags|=32),t.memoizedState!==null&&(c=qs(e,t,vv,null,null,n),gr._currentValue=c),Ul(e,t),Fe(e,t,o,n),t.child;case 6:return e===null&&ye&&((e=n=Ue)&&(n=eb(n,t.pendingProps,$t),n!==null?(t.stateNode=n,rt=t,Ue=null,e=!0):e=!1),e||la(t)),null;case 13:return bd(e,t,n);case 4:return Re(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Va(t,null,o,n):Fe(e,t,o,n),t.child;case 11:return cd(e,t,t.type,t.pendingProps,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,_n(t,t.type,o.value),Fe(e,t,o.children,n),t.child;case 9:return c=t.type._context,o=t.pendingProps.children,sa(t),c=at(c),o=o(c),t.flags|=1,Fe(e,t,o,n),t.child;case 14:return fd(e,t,t.type,t.pendingProps,n);case 15:return hd(e,t,t.type,t.pendingProps,n);case 19:return _d(e,t,n);case 31:return o=t.pendingProps,n=t.mode,o={mode:o.mode,children:o.children},e===null?(n=zl(o,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Jt(e.child,o),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return dd(e,t,n);case 24:return sa(t),o=at(Ge),e===null?(c=As(),c===null&&(c=Ae,d=Es(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=n),c=d),t.memoizedState={parent:o,cache:c},Rs(t),_n(t,Ge,c)):((e.lanes&n)!==0&&(Cs(e,t),Vi(t,null,null,n),Qi()),c=e.memoizedState,d=t.memoizedState,c.parent!==o?(c={parent:o,cache:o},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),_n(t,Ge,o)):(o=d.cache,_n(t,Ge,o),o!==c.cache&&Ts(t,[Ge],n,!0))),Fe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function rn(e){e.flags|=4}function Sd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rp(t)){if(t=Ct.current,t!==null&&((me&4194048)===me?Yt!==null:(me&62914560)!==me&&(me&536870912)===0||t!==Yt))throw Yi=js,rh;e.flags|=8192}}function Nl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Wc():536870912,e.lanes|=t,Ia|=t)}function er(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Ev(e,t,n){var o=t.pendingProps;switch(xs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),en(Ge),mn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,eh())),Me(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(Me(t),Sd(t,n)):(Me(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),Me(t),Sd(t,n)):(Me(t),t.flags&=-16777217):(e.memoizedProps!==o&&rn(t),Me(t),t.flags&=-16777217),null;case 27:Vr(t),n=re.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==o&&rn(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return Me(t),null}e=ee.current,qi(t)?Ff(t):(e=Sp(c,o,n),t.stateNode=e,rn(t))}return Me(t),null;case 5:if(Vr(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&rn(t);else{if(!o){if(t.stateNode===null)throw Error(s(166));return Me(t),null}if(e=ee.current,qi(t))Ff(t);else{switch(c=Kl(re.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(n,{is:o.is}):c.createElement(n)}}e[nt]=t,e[ot]=o;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(et(e,n,o),n){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return Me(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&rn(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,c=rt,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[nt]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||gp(e.nodeValue,n)),e||la(t)}else e=Kl(e).createTextNode(o),e[nt]=t,t.stateNode=e}return Me(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[nt]=t}else Li(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),c=!1}else c=eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(nn(t),t):(nn(t),null)}if(nn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=o!==null,e=e!==null&&e.memoizedState!==null,n){o=t.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Nl(t,t.updateQueue),Me(t),null;case 4:return mn(),e===null&&Mu(t.stateNode.containerInfo),Me(t),null;case 10:return en(t.type),Me(t),null;case 19:if(K($e),c=t.memoizedState,c===null)return Me(t),null;if(o=(t.flags&128)!==0,d=c.rendering,d===null)if(o)er(c,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Cl(e),d!==null){for(t.flags|=128,er(c,!1),e=d.updateQueue,t.updateQueue=e,Nl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Jf(n,e),n=n.sibling;return V($e,$e.current&1|2),t.child}e=e.sibling}c.tail!==null&&Gt()>Bl&&(t.flags|=128,o=!0,er(c,!1),t.lanes=4194304)}else{if(!o)if(e=Cl(d),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Nl(t,e),er(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!ye)return Me(t),null}else 2*Gt()-c.renderingStartTime>Bl&&n!==536870912&&(t.flags|=128,o=!0,er(c,!1),t.lanes=4194304);c.isBackwards?(d.sibling=t.child,t.child=d):(e=c.last,e!==null?e.sibling=d:t.child=d,c.last=d)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Gt(),t.sibling=null,e=$e.current,V($e,o?e&1|2:e&1),t):(Me(t),null);case 22:case 23:return nn(t),zs(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Nl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&K(ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),en(Ge),Me(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function kv(e,t){switch(xs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(Ge),mn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Vr(t),null;case 13:if(nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K($e),null;case 4:return mn(),null;case 10:return en(t.type),null;case 22:case 23:return nn(t),zs(),e!==null&&K(ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return en(Ge),null;case 25:return null;default:return null}}function wd(e,t){switch(xs(t),t.tag){case 3:en(Ge),mn();break;case 26:case 27:case 5:Vr(t);break;case 4:mn();break;case 13:nn(t);break;case 19:K($e);break;case 10:en(t.type);break;case 22:case 23:nn(t),zs(),e!==null&&K(ua);break;case 24:en(Ge)}}function tr(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var c=o.next;n=c;do{if((n.tag&e)===e){o=void 0;var d=n.create,b=n.inst;o=d(),b.destroy=o}n=n.next}while(n!==c)}}catch(y){ke(t,t.return,y)}}function kn(e,t,n){try{var o=t.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var b=o.inst,y=b.destroy;if(y!==void 0){b.destroy=void 0,c=t;var S=n,C=y;try{C()}catch(N){ke(c,S,N)}}}o=o.next}while(o!==d)}}catch(N){ke(t,t.return,N)}}function Od(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{fh(t,n)}catch(o){ke(e,e.return,o)}}}function Td(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){ke(e,t,o)}}function nr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(c){ke(e,t,c)}}function Xt(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(c){ke(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){ke(e,t,c)}else n.current=null}function Ed(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(c){ke(e,e.return,c)}}function uu(e,t,n){try{var o=e.stateNode;Zv(o,e.type,n,t),o[ot]=t}catch(c){ke(e,e.return,c)}}function kd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zn(e.type)||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fu(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zl));else if(o!==4&&(o===27&&zn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}function ql(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&zn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Ad(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);et(t,o,n),t[nt]=e,t[ot]=n}catch(d){ke(e,e.return,d)}}var ln=!1,qe=!1,hu=!1,jd=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Av(e,t){if(e=e.containerInfo,Nu=to,e=Pf(e),cs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var b=0,y=-1,S=-1,C=0,N=0,B=e,D=null;t:for(;;){for(var M;B!==n||c!==0&&B.nodeType!==3||(y=b+c),B!==d||o!==0&&B.nodeType!==3||(S=b+o),B.nodeType===3&&(b+=B.nodeValue.length),(M=B.firstChild)!==null;)D=B,B=M;for(;;){if(B===e)break t;if(D===n&&++C===c&&(y=b),D===d&&++N===o&&(S=b),(M=B.nextSibling)!==null)break;B=D,D=B.parentNode}B=M}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:e,selectionRange:n},to=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,d=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,c=d.memoizedProps,d=d.memoizedState,o=n.stateNode;try{var ie=fa(n.type,c,n.elementType===n.type);e=o.getSnapshotBeforeUpdate(ie,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){ke(n,n.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Pu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function Rd(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:An(e,n),o&4&&tr(5,n);break;case 1:if(An(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(b){ke(n,n.return,b)}else{var c=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){ke(n,n.return,b)}}o&64&&Od(n),o&512&&nr(n,n.return);break;case 3:if(An(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{fh(e,t)}catch(b){ke(n,n.return,b)}}break;case 27:t===null&&o&4&&Ad(n);case 26:case 5:An(e,n),t===null&&o&4&&Ed(n),o&512&&nr(n,n.return);break;case 12:An(e,n);break;case 13:An(e,n),o&4&&Md(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qv.bind(null,n),tb(e,n))));break;case 22:if(o=n.memoizedState!==null||ln,!o){t=t!==null&&t.memoizedState!==null||qe,c=ln;var d=qe;ln=o,(qe=t)&&!d?jn(e,n,(n.subtreeFlags&8772)!==0):An(e,n),ln=c,qe=d}break;case 30:break;default:An(e,n)}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,ct=!1;function on(e,t,n){for(n=n.child;n!==null;)Dd(e,t,n),n=n.sibling}function Dd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(wi,n)}catch{}switch(n.tag){case 26:qe||Xt(n,t),on(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Xt(n,t);var o=Ce,c=ct;zn(n.type)&&(Ce=n.stateNode,ct=!1),on(e,t,n),fr(n.stateNode),Ce=o,ct=c;break;case 5:qe||Xt(n,t);case 6:if(o=Ce,c=ct,Ce=null,on(e,t,n),Ce=o,ct=c,Ce!==null)if(ct)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(d){ke(n,t,d)}else try{Ce.removeChild(n.stateNode)}catch(d){ke(n,t,d)}break;case 18:Ce!==null&&(ct?(e=Ce,_p(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),yr(e)):_p(Ce,n.stateNode));break;case 4:o=Ce,c=ct,Ce=n.stateNode.containerInfo,ct=!0,on(e,t,n),Ce=o,ct=c;break;case 0:case 11:case 14:case 15:qe||kn(2,n,t),qe||kn(4,n,t),on(e,t,n);break;case 1:qe||(Xt(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&Td(n,t,o)),on(e,t,n);break;case 21:on(e,t,n);break;case 22:qe=(o=qe)||n.memoizedState!==null,on(e,t,n),qe=o;break;default:on(e,t,n)}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(n){ke(t,t.return,n)}}function jv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new jd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new jd),t;default:throw Error(s(435,e.tag))}}function du(e,t){var n=jv(e);t.forEach(function(o){var c=Lv.bind(null,e,o);n.has(o)||(n.add(o),o.then(c,c))})}function yt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var c=n[o],d=e,b=t,y=b;e:for(;y!==null;){switch(y.tag){case 27:if(zn(y.type)){Ce=y.stateNode,ct=!1;break e}break;case 5:Ce=y.stateNode,ct=!1;break e;case 3:case 4:Ce=y.stateNode.containerInfo,ct=!0;break e}y=y.return}if(Ce===null)throw Error(s(160));Dd(d,b,c),Ce=null,ct=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}var Nt=null;function Ud(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),_t(e),o&4&&(kn(3,e,e.return),tr(3,e),kn(5,e,e.return));break;case 1:yt(t,e),_t(e),o&512&&(qe||n===null||Xt(n,n.return)),o&64&&ln&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var c=Nt;if(yt(t,e),_t(e),o&512&&(qe||n===null||Xt(n,n.return)),o&4){var d=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ei]||d[nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),et(d,o,n),d[nt]=e,Qe(d),o=d;break e;case"link":var b=Ap("link","href",c).get(o+(n.href||""));if(b){for(var y=0;y<b.length;y++)if(d=b[y],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){b.splice(y,1);break t}}d=c.createElement(o),et(d,o,n),c.head.appendChild(d);break;case"meta":if(b=Ap("meta","content",c).get(o+(n.content||""))){for(y=0;y<b.length;y++)if(d=b[y],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){b.splice(y,1);break t}}d=c.createElement(o),et(d,o,n),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[nt]=e,Qe(d),o=d}e.stateNode=o}else jp(c,e.type,e.stateNode);else e.stateNode=kp(c,o,e.memoizedProps);else d!==o?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,o===null?jp(c,e.type,e.stateNode):kp(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uu(e,e.memoizedProps,n.memoizedProps)}break;case 27:yt(t,e),_t(e),o&512&&(qe||n===null||Xt(n,n.return)),n!==null&&o&4&&uu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yt(t,e),_t(e),o&512&&(qe||n===null||Xt(n,n.return)),e.flags&32){c=e.stateNode;try{ja(c,"")}catch(M){ke(e,e.return,M)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,uu(e,c,n!==null?n.memoizedProps:c)),o&1024&&(hu=!0);break;case 6:if(yt(t,e),_t(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(M){ke(e,e.return,M)}}break;case 3:if(Fl=null,c=Nt,Nt=Jl(t.containerInfo),yt(t,e),Nt=c,_t(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{yr(t.containerInfo)}catch(M){ke(e,e.return,M)}hu&&(hu=!1,zd(e));break;case 4:o=Nt,Nt=Jl(e.stateNode.containerInfo),yt(t,e),_t(e),Nt=o;break;case 12:yt(t,e),_t(e);break;case 13:yt(t,e),_t(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(yu=Gt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,du(e,o)));break;case 22:c=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,C=ln,N=qe;if(ln=C||c,qe=N||S,yt(t,e),qe=N,ln=C,_t(e),o&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||S||ln||qe||ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(d=S.stateNode,c)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{y=S.stateNode;var B=S.memoizedProps.style,D=B!=null&&B.hasOwnProperty("display")?B.display:null;y.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(M){ke(S,S.return,M)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(M){ke(S,S.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,du(e,n))));break;case 19:yt(t,e),_t(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,du(e,o)));break;case 30:break;case 21:break;default:yt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(kd(o)){n=o;break}o=o.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var c=n.stateNode,d=cu(e);ql(e,d,c);break;case 5:var b=n.stateNode;n.flags&32&&(ja(b,""),n.flags&=-33);var y=cu(e);ql(e,y,b);break;case 3:case 4:var S=n.stateNode.containerInfo,C=cu(e);fu(e,C,S);break;default:throw Error(s(161))}}catch(N){ke(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function An(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rd(e,t.alternate,t),t=t.sibling}function ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:kn(4,t,t.return),ha(t);break;case 1:Xt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Td(t,t.return,n),ha(t);break;case 27:fr(t.stateNode);case 26:case 5:Xt(t,t.return),ha(t);break;case 22:t.memoizedState===null&&ha(t);break;case 30:ha(t);break;default:ha(t)}e=e.sibling}}function jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,c=e,d=t,b=d.flags;switch(d.tag){case 0:case 11:case 15:jn(c,d,n),tr(4,d);break;case 1:if(jn(c,d,n),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(C){ke(o,o.return,C)}if(o=d,c=o.updateQueue,c!==null){var y=o.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)ch(S[c],y)}catch(C){ke(o,o.return,C)}}n&&b&64&&Od(d),nr(d,d.return);break;case 27:Ad(d);case 26:case 5:jn(c,d,n),n&&o===null&&b&4&&Ed(d),nr(d,d.return);break;case 12:jn(c,d,n);break;case 13:jn(c,d,n),n&&b&4&&Md(c,d);break;case 22:d.memoizedState===null&&jn(c,d,n),nr(d,d.return);break;case 30:break;default:jn(c,d,n)}t=t.sibling}}function pu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Hi(n))}function gu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hi(e))}function Qt(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nd(e,t,n,o),t=t.sibling}function Nd(e,t,n,o){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(e,t,n,o),c&2048&&tr(9,t);break;case 1:Qt(e,t,n,o);break;case 3:Qt(e,t,n,o),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hi(e)));break;case 12:if(c&2048){Qt(e,t,n,o),e=t.stateNode;try{var d=t.memoizedProps,b=d.id,y=d.onPostCommit;typeof y=="function"&&y(b,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){ke(t,t.return,S)}}else Qt(e,t,n,o);break;case 13:Qt(e,t,n,o);break;case 23:break;case 22:d=t.stateNode,b=t.alternate,t.memoizedState!==null?d._visibility&2?Qt(e,t,n,o):ar(e,t):d._visibility&2?Qt(e,t,n,o):(d._visibility|=2,Za(e,t,n,o,(t.subtreeFlags&10256)!==0)),c&2048&&pu(b,t);break;case 24:Qt(e,t,n,o),c&2048&&gu(t.alternate,t);break;default:Qt(e,t,n,o)}}function Za(e,t,n,o,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var d=e,b=t,y=n,S=o,C=b.flags;switch(b.tag){case 0:case 11:case 15:Za(d,b,y,S,c),tr(8,b);break;case 23:break;case 22:var N=b.stateNode;b.memoizedState!==null?N._visibility&2?Za(d,b,y,S,c):ar(d,b):(N._visibility|=2,Za(d,b,y,S,c)),c&&C&2048&&pu(b.alternate,b);break;case 24:Za(d,b,y,S,c),c&&C&2048&&gu(b.alternate,b);break;default:Za(d,b,y,S,c)}t=t.sibling}}function ar(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,c=o.flags;switch(o.tag){case 22:ar(n,o),c&2048&&pu(o.alternate,o);break;case 24:ar(n,o),c&2048&&gu(o.alternate,o);break;default:ar(n,o)}t=t.sibling}}var ir=8192;function Ka(e){if(e.subtreeFlags&ir)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 26:Ka(e),e.flags&ir&&e.memoizedState!==null&&pb(Nt,e.memoizedState,e.memoizedProps);break;case 5:Ka(e);break;case 3:case 4:var t=Nt;Nt=Jl(e.stateNode.containerInfo),Ka(e),Nt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ir,ir=16777216,Ka(e),ir=t):Ka(e));break;default:Ka(e)}}function Ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Ze=o,Pd(o,e)}Ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bd(e),e=e.sibling}function Bd(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&kn(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):rr(e);break;default:rr(e)}}function Ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Ze=o,Pd(o,e)}Ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:kn(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Pd(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Hi(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Ze=o;else e:for(n=e;Ze!==null;){o=Ze;var c=o.sibling,d=o.return;if(Cd(o),o===n){Ze=null;break e}if(c!==null){c.return=d,Ze=c;break e}Ze=d}}}var Rv={getCacheForType:function(e){var t=at(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Cv=typeof WeakMap=="function"?WeakMap:Map,_e=0,Ae=null,he=null,me=0,xe=0,xt=null,Rn=!1,Ja=!1,mu=!1,sn=0,ze=0,Cn=0,da=0,vu=0,Dt=0,Ia=0,lr=null,ft=null,bu=!1,yu=0,Bl=1/0,Pl=null,Dn=null,We=0,Mn=null,Fa=null,Wa=0,_u=0,xu=null,Hd=null,or=0,Su=null;function St(){if((_e&2)!==0&&me!==0)return me&-me;if(q.T!==null){var e=Pa;return e!==0?e:ju()}return nf()}function Gd(){Dt===0&&(Dt=(me&536870912)===0||ye?Fc():536870912);var e=Ct.current;return e!==null&&(e.flags|=32),Dt}function wt(e,t,n){(e===Ae&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(ei(e,0),Un(e,me,Dt,!1)),Ti(e,n),((_e&2)===0||e!==Ae)&&(e===Ae&&((_e&2)===0&&(da|=n),ze===4&&Un(e,me,Dt,!1)),Vt(e))}function $d(e,t,n){if((_e&6)!==0)throw Error(s(327));var o=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Oi(e,t),c=o?Uv(e,t):Tu(e,t,!0),d=o;do{if(c===0){Ja&&!o&&Un(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!Dv(n)){c=Tu(e,t,!1),d=!1;continue}if(c===2){if(d=t,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var y=e;c=lr;var S=y.current.memoizedState.isDehydrated;if(S&&(ei(y,b).flags|=256),b=Tu(y,b,!1),b!==2){if(mu&&!S){y.errorRecoveryDisabledLanes|=d,da|=d,c=4;break e}d=ft,ft=c,d!==null&&(ft===null?ft=d:ft.push.apply(ft,d))}c=b}if(d=!1,c!==2)continue}}if(c===1){ei(e,0),Un(e,t,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Un(o,t,Dt,!Rn);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(c=yu+300-Gt(),10<c)){if(Un(o,t,Dt,!Rn),Ir(o,0,!0)!==0)break e;o.timeoutHandle=bp(Yd.bind(null,o,n,ft,Pl,bu,t,Dt,da,Ia,Rn,d,2,-0,0),c);break e}Yd(o,n,ft,Pl,bu,t,Dt,da,Ia,Rn,d,0,-0,0)}}break}while(!0);Vt(e)}function Yd(e,t,n,o,c,d,b,y,S,C,N,B,D,M){if(e.timeoutHandle=-1,B=t.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(pr={stylesheets:null,count:0,unsuspend:db},qd(t),B=gb(),B!==null)){e.cancelPendingCommit=B(Id.bind(null,e,t,d,n,o,c,b,y,S,N,1,D,M)),Un(e,d,b,!C);return}Id(e,t,d,n,o,c,b,y,S)}function Dv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var c=n[o],d=c.getSnapshot;c=c.value;try{if(!vt(d(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Un(e,t,n,o){t&=~vu,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var c=t;0<c;){var d=31-mt(c),b=1<<d;o[d]=-1,c&=~b}n!==0&&ef(e,n,t)}function Hl(){return(_e&6)===0?(sr(0),!1):!0}function wu(){if(he!==null){if(xe===0)var e=he.return;else e=he,Wt=oa=null,Ps(e),Qa=null,Fi=0,e=he;for(;e!==null;)wd(e.alternate,e),e=e.return;he=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),wu(),Ae=e,he=n=Jt(e.current,null),me=t,xe=0,xt=null,Rn=!1,Ja=Oi(e,t),mu=!1,Ia=Dt=vu=da=Cn=ze=0,ft=lr=null,bu=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var c=31-mt(o),d=1<<c;t|=e[c],o&=~d}return sn=t,ul(),n}function Xd(e,t){ue=null,q.H=Al,t===$i||t===bl?(t=sh(),xe=3):t===rh?(t=sh(),xe=4):xe=t===ud?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,he===null&&(ze=1,Ml(e,kt(t,e.current)))}function Qd(){var e=q.H;return q.H=Al,e===null?Al:e}function Vd(){var e=q.A;return q.A=Rv,e}function Ou(){ze=4,Rn||(me&4194048)!==me&&Ct.current!==null||(Ja=!0),(Cn&134217727)===0&&(da&134217727)===0||Ae===null||Un(Ae,me,Dt,!1)}function Tu(e,t,n){var o=_e;_e|=2;var c=Qd(),d=Vd();(Ae!==e||me!==t)&&(Pl=null,ei(e,t)),t=!1;var b=ze;e:do try{if(xe!==0&&he!==null){var y=he,S=xt;switch(xe){case 8:wu(),b=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(t=!0);var C=xe;if(xe=0,xt=null,ti(e,y,S,C),n&&Ja){b=0;break e}break;default:C=xe,xe=0,xt=null,ti(e,y,S,C)}}Mv(),b=ze;break}catch(N){Xd(e,N)}while(!0);return t&&e.shellSuspendCounter++,Wt=oa=null,_e=o,q.H=c,q.A=d,he===null&&(Ae=null,me=0,ul()),b}function Mv(){for(;he!==null;)Zd(he)}function Uv(e,t){var n=_e;_e|=2;var o=Qd(),c=Vd();Ae!==e||me!==t?(Pl=null,Bl=Gt()+500,ei(e,t)):Ja=Oi(e,t);e:do try{if(xe!==0&&he!==null){t=he;var d=xt;t:switch(xe){case 1:xe=0,xt=null,ti(e,t,d,1);break;case 2:case 9:if(lh(d)){xe=0,xt=null,Kd(t);break}t=function(){xe!==2&&xe!==9||Ae!==e||(xe=7),Vt(e)},d.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:lh(d)?(xe=0,xt=null,Kd(t)):(xe=0,xt=null,ti(e,t,d,7));break;case 5:var b=null;switch(he.tag){case 26:b=he.memoizedState;case 5:case 27:var y=he;if(!b||Rp(b)){xe=0,xt=null;var S=y.sibling;if(S!==null)he=S;else{var C=y.return;C!==null?(he=C,Gl(C)):he=null}break t}}xe=0,xt=null,ti(e,t,d,5);break;case 6:xe=0,xt=null,ti(e,t,d,6);break;case 8:wu(),ze=6;break e;default:throw Error(s(462))}}zv();break}catch(N){Xd(e,N)}while(!0);return Wt=oa=null,q.H=o,q.A=c,_e=n,he!==null?0:(Ae=null,me=0,ul(),ze)}function zv(){for(;he!==null&&!am();)Zd(he)}function Zd(e){var t=xd(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?Gl(e):he=t}function Kd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gd(n,t,t.pendingProps,t.type,void 0,me);break;case 11:t=gd(n,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Ps(t);default:wd(n,t),t=he=Jf(t,sn),t=xd(n,t,sn)}e.memoizedProps=e.pendingProps,t===null?Gl(e):he=t}function ti(e,t,n,o){Wt=oa=null,Ps(t),Qa=null,Fi=0;var c=t.return;try{if(Ov(e,c,t,n,me)){ze=1,Ml(e,kt(n,e.current)),he=null;return}}catch(d){if(c!==null)throw he=c,d;ze=1,Ml(e,kt(n,e.current)),he=null;return}t.flags&32768?(ye||o===1?e=!0:Ja||(me&536870912)!==0?e=!1:(Rn=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ct.current,o!==null&&o.tag===13&&(o.flags|=16384))),Jd(t,e)):Gl(t)}function Gl(e){var t=e;do{if((t.flags&32768)!==0){Jd(t,Rn);return}e=t.return;var n=Ev(t.alternate,t,sn);if(n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ze===0&&(ze=5)}function Jd(e,t){do{var n=kv(e.alternate,e);if(n!==null){n.flags&=32767,he=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=n}while(e!==null);ze=6,he=null}function Id(e,t,n,o,c,d,b,y,S){e.cancelPendingCommit=null;do $l();while(We!==0);if((_e&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(d=t.lanes|t.childLanes,d|=gs,dm(e,n,d,b,y,S),e===Ae&&(he=Ae=null,me=0),Fa=t,Mn=e,Wa=n,_u=d,xu=c,Hd=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bv(Zr,function(){return np(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=q.T,q.T=null,c=Z.p,Z.p=2,b=_e,_e|=4;try{Av(e,t,n)}finally{_e=b,Z.p=c,q.T=o}}We=1,Fd(),Wd(),ep()}}function Fd(){if(We===1){We=0;var e=Mn,t=Fa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=q.T,q.T=null;var o=Z.p;Z.p=2;var c=_e;_e|=4;try{Ud(t,e);var d=qu,b=Pf(e.containerInfo),y=d.focusedElem,S=d.selectionRange;if(b!==y&&y&&y.ownerDocument&&Bf(y.ownerDocument.documentElement,y)){if(S!==null&&cs(y)){var C=S.start,N=S.end;if(N===void 0&&(N=C),"selectionStart"in y)y.selectionStart=C,y.selectionEnd=Math.min(N,y.value.length);else{var B=y.ownerDocument||document,D=B&&B.defaultView||window;if(D.getSelection){var M=D.getSelection(),ie=y.textContent.length,te=Math.min(S.start,ie),Te=S.end===void 0?te:Math.min(S.end,ie);!M.extend&&te>Te&&(b=Te,Te=te,te=b);var j=Lf(y,te),E=Lf(y,Te);if(j&&E&&(M.rangeCount!==1||M.anchorNode!==j.node||M.anchorOffset!==j.offset||M.focusNode!==E.node||M.focusOffset!==E.offset)){var R=B.createRange();R.setStart(j.node,j.offset),M.removeAllRanges(),te>Te?(M.addRange(R),M.extend(E.node,E.offset)):(R.setEnd(E.node,E.offset),M.addRange(R))}}}}for(B=[],M=y;M=M.parentNode;)M.nodeType===1&&B.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<B.length;y++){var L=B[y];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}to=!!Nu,qu=Nu=null}finally{_e=c,Z.p=o,q.T=n}}e.current=t,We=2}}function Wd(){if(We===2){We=0;var e=Mn,t=Fa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=q.T,q.T=null;var o=Z.p;Z.p=2;var c=_e;_e|=4;try{Rd(e,t.alternate,t)}finally{_e=c,Z.p=o,q.T=n}}We=3}}function ep(){if(We===4||We===3){We=0,im();var e=Mn,t=Fa,n=Wa,o=Hd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Fa=Mn=null,tp(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Dn=null),$o(n),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(wi,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=q.T,c=Z.p,Z.p=2,q.T=null;try{for(var d=e.onRecoverableError,b=0;b<o.length;b++){var y=o[b];d(y.value,{componentStack:y.stack})}}finally{q.T=t,Z.p=c}}(Wa&3)!==0&&$l(),Vt(e),c=e.pendingLanes,(n&4194090)!==0&&(c&42)!==0?e===Su?or++:(or=0,Su=e):or=0,sr(0)}}function tp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hi(t)))}function $l(e){return Fd(),Wd(),ep(),np()}function np(){if(We!==5)return!1;var e=Mn,t=_u;_u=0;var n=$o(Wa),o=q.T,c=Z.p;try{Z.p=32>n?32:n,q.T=null,n=xu,xu=null;var d=Mn,b=Wa;if(We=0,Fa=Mn=null,Wa=0,(_e&6)!==0)throw Error(s(331));var y=_e;if(_e|=4,Bd(d.current),Nd(d,d.current,b,n),_e=y,sr(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(wi,d)}catch{}return!0}finally{Z.p=c,q.T=o,tp(e,t)}}function ap(e,t,n){t=kt(n,t),t=eu(e.stateNode,t,2),e=wn(e,t,2),e!==null&&(Ti(e,2),Vt(e))}function ke(e,t,n){if(e.tag===3)ap(e,e,n);else for(;t!==null;){if(t.tag===3){ap(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Dn===null||!Dn.has(o))){e=kt(n,e),n=od(2),o=wn(t,n,2),o!==null&&(sd(n,o,t,e),Ti(o,2),Vt(o));break}}t=t.return}}function Eu(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Cv;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(n)||(mu=!0,c.add(n),e=Nv.bind(null,e,t,n),t.then(e,e))}function Nv(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(me&n)===n&&(ze===4||ze===3&&(me&62914560)===me&&300>Gt()-yu?(_e&2)===0&&ei(e,0):vu|=n,Ia===me&&(Ia=0)),Vt(e)}function ip(e,t){t===0&&(t=Wc()),e=Na(e,t),e!==null&&(Ti(e,t),Vt(e))}function qv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ip(e,n)}function Lv(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(t),ip(e,n)}function Bv(e,t){return Bo(e,t)}var Yl=null,ni=null,ku=!1,Xl=!1,Au=!1,pa=0;function Vt(e){e!==ni&&e.next===null&&(ni===null?Yl=ni=e:ni=ni.next=e),Xl=!0,ku||(ku=!0,Hv())}function sr(e,t){if(!Au&&Xl){Au=!0;do for(var n=!1,o=Yl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var b=o.suspendedLanes,y=o.pingedLanes;d=(1<<31-mt(42|e)+1)-1,d&=c&~(b&~y),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,sp(o,d))}else d=me,d=Ir(o,o===Ae?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Oi(o,d)||(n=!0,sp(o,d));o=o.next}while(n);Au=!1}}function Pv(){rp()}function rp(){Xl=ku=!1;var e=0;pa!==0&&(Kv()&&(e=pa),pa=0);for(var t=Gt(),n=null,o=Yl;o!==null;){var c=o.next,d=lp(o,t);d===0?(o.next=null,n===null?Yl=c:n.next=c,c===null&&(ni=n)):(n=o,(e!==0||(d&3)!==0)&&(Xl=!0)),o=c}sr(e)}function lp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-mt(d),y=1<<b,S=c[b];S===-1?((y&n)===0||(y&o)!==0)&&(c[b]=hm(y,t)):S<=t&&(e.expiredLanes|=y),d&=~y}if(t=Ae,n=me,n=Ir(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Po(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Oi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&Po(o),$o(n)){case 2:case 8:n=Jc;break;case 32:n=Zr;break;case 268435456:n=Ic;break;default:n=Zr}return o=op.bind(null,e),n=Bo(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&Po(o),e.callbackPriority=2,e.callbackNode=null,2}function op(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($l()&&e.callbackNode!==n)return null;var o=me;return o=Ir(e,e===Ae?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($d(e,o,t),lp(e,Gt()),e.callbackNode!=null&&e.callbackNode===n?op.bind(null,e):null)}function sp(e,t){if($l())return null;$d(e,t,!0)}function Hv(){Iv(function(){(_e&6)!==0?Bo(Kc,Pv):rp()})}function ju(){return pa===0&&(pa=Fc()),pa}function up(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function cp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Gv(e,t,n,o,c){if(t==="submit"&&n&&n.stateNode===c){var d=up((c[ot]||null).action),b=o.submitter;b&&(t=(t=b[ot]||null)?up(t.formAction):b.getAttribute("formAction"),t!==null&&(d=t,b=null));var y=new ll("action","action",null,o,c);e.push({event:y,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pa!==0){var S=b?cp(c,b):new FormData(c);Ks(n,{pending:!0,data:S,method:c.method,action:d},null,S)}}else typeof d=="function"&&(y.preventDefault(),S=b?cp(c,b):new FormData(c),Ks(n,{pending:!0,data:S,method:c.method,action:d},d,S))},currentTarget:c}]})}}for(var Ru=0;Ru<ps.length;Ru++){var Cu=ps[Ru],$v=Cu.toLowerCase(),Yv=Cu[0].toUpperCase()+Cu.slice(1);zt($v,"on"+Yv)}zt($f,"onAnimationEnd"),zt(Yf,"onAnimationIteration"),zt(Xf,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(ov,"onTransitionRun"),zt(sv,"onTransitionStart"),zt(uv,"onTransitionCancel"),zt(Qf,"onTransitionEnd"),Ea("onMouseEnter",["mouseout","mouseover"]),Ea("onMouseLeave",["mouseout","mouseover"]),Ea("onPointerEnter",["pointerout","pointerover"]),Ea("onPointerLeave",["pointerout","pointerover"]),Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ur));function fp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],c=o.event;o=o.listeners;e:{var d=void 0;if(t)for(var b=o.length-1;0<=b;b--){var y=o[b],S=y.instance,C=y.currentTarget;if(y=y.listener,S!==d&&c.isPropagationStopped())break e;d=y,c.currentTarget=C;try{d(c)}catch(N){Dl(N)}c.currentTarget=null,d=S}else for(b=0;b<o.length;b++){if(y=o[b],S=y.instance,C=y.currentTarget,y=y.listener,S!==d&&c.isPropagationStopped())break e;d=y,c.currentTarget=C;try{d(c)}catch(N){Dl(N)}c.currentTarget=null,d=S}}}}function de(e,t){var n=t[Yo];n===void 0&&(n=t[Yo]=new Set);var o=e+"__bubble";n.has(o)||(hp(t,e,2,!1),n.add(o))}function Du(e,t,n){var o=0;t&&(o|=4),hp(n,e,o,t)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Mu(e){if(!e[Ql]){e[Ql]=!0,rf.forEach(function(n){n!=="selectionchange"&&(Xv.has(n)||Du(n,!1,e),Du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ql]||(t[Ql]=!0,Du("selectionchange",!1,t))}}function hp(e,t,n,o){switch(Np(t)){case 2:var c=bb;break;case 8:c=yb;break;default:c=Vu}n=c.bind(null,t,n,e),c=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Uu(e,t,n,o,c){var d=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var y=o.stateNode.containerInfo;if(y===c)break;if(b===4)for(b=o.return;b!==null;){var S=b.tag;if((S===3||S===4)&&b.stateNode.containerInfo===c)return;b=b.return}for(;y!==null;){if(b=wa(y),b===null)return;if(S=b.tag,S===5||S===6||S===26||S===27){o=d=b;continue e}y=y.parentNode}}o=o.return}yf(function(){var C=d,N=Wo(n),B=[];e:{var D=Vf.get(e);if(D!==void 0){var M=ll,ie=e;switch(e){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":M=Bm;break;case"focusin":ie="focus",M=rs;break;case"focusout":ie="blur",M=rs;break;case"beforeblur":case"afterblur":M=rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Gm;break;case $f:case Yf:case Xf:M=Rm;break;case Qf:M=Ym;break;case"scroll":case"scrollend":M=Tm;break;case"wheel":M=Qm;break;case"copy":case"cut":case"paste":M=Dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Of;break;case"toggle":case"beforetoggle":M=Zm}var te=(t&4)!==0,Te=!te&&(e==="scroll"||e==="scrollend"),j=te?D!==null?D+"Capture":null:D;te=[];for(var E=C,R;E!==null;){var L=E;if(R=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||R===null||j===null||(L=Ai(E,j),L!=null&&te.push(cr(E,L,R))),Te)break;E=E.return}0<te.length&&(D=new M(D,ie,null,n,N),B.push({event:D,listeners:te}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",D&&n!==Fo&&(ie=n.relatedTarget||n.fromElement)&&(wa(ie)||ie[Sa]))break e;if((M||D)&&(D=N.window===N?N:(D=N.ownerDocument)?D.defaultView||D.parentWindow:window,M?(ie=n.relatedTarget||n.toElement,M=C,ie=ie?wa(ie):null,ie!==null&&(Te=f(ie),te=ie.tag,ie!==Te||te!==5&&te!==27&&te!==6)&&(ie=null)):(M=null,ie=C),M!==ie)){if(te=Sf,L="onMouseLeave",j="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(te=Of,L="onPointerLeave",j="onPointerEnter",E="pointer"),Te=M==null?D:ki(M),R=ie==null?D:ki(ie),D=new te(L,E+"leave",M,n,N),D.target=Te,D.relatedTarget=R,L=null,wa(N)===C&&(te=new te(j,E+"enter",ie,n,N),te.target=R,te.relatedTarget=Te,L=te),Te=L,M&&ie)t:{for(te=M,j=ie,E=0,R=te;R;R=ai(R))E++;for(R=0,L=j;L;L=ai(L))R++;for(;0<E-R;)te=ai(te),E--;for(;0<R-E;)j=ai(j),R--;for(;E--;){if(te===j||j!==null&&te===j.alternate)break t;te=ai(te),j=ai(j)}te=null}else te=null;M!==null&&dp(B,D,M,te,!1),ie!==null&&Te!==null&&dp(B,Te,ie,te,!0)}}e:{if(D=C?ki(C):window,M=D.nodeName&&D.nodeName.toLowerCase(),M==="select"||M==="input"&&D.type==="file")var J=Df;else if(Rf(D))if(Mf)J=iv;else{J=nv;var fe=tv}else M=D.nodeName,!M||M.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?C&&Io(C.elementType)&&(J=Df):J=av;if(J&&(J=J(e,C))){Cf(B,J,n,N);break e}fe&&fe(e,D,C),e==="focusout"&&C&&D.type==="number"&&C.memoizedProps.value!=null&&Jo(D,"number",D.value)}switch(fe=C?ki(C):window,e){case"focusin":(Rf(fe)||fe.contentEditable==="true")&&(Ma=fe,fs=C,Ni=null);break;case"focusout":Ni=fs=Ma=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,Hf(B,n,N);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":Hf(B,n,N)}var W;if(os)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else Da?Af(e,n)&&(ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ne="onCompositionStart");ne&&(Tf&&n.locale!=="ko"&&(Da||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Da&&(W=_f()):(yn=N,ns="value"in yn?yn.value:yn.textContent,Da=!0)),fe=Vl(C,ne),0<fe.length&&(ne=new wf(ne,e,null,n,N),B.push({event:ne,listeners:fe}),W?ne.data=W:(W=jf(n),W!==null&&(ne.data=W)))),(W=Jm?Im(e,n):Fm(e,n))&&(ne=Vl(C,"onBeforeInput"),0<ne.length&&(fe=new wf("onBeforeInput","beforeinput",null,n,N),B.push({event:fe,listeners:ne}),fe.data=W)),Gv(B,e,C,n,N)}fp(B,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vl(e,t){for(var n=t+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Ai(e,n),c!=null&&o.unshift(cr(e,c,d)),c=Ai(e,t),c!=null&&o.push(cr(e,c,d))),e.tag===3)return o;e=e.return}return[]}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dp(e,t,n,o,c){for(var d=t._reactName,b=[];n!==null&&n!==o;){var y=n,S=y.alternate,C=y.stateNode;if(y=y.tag,S!==null&&S===o)break;y!==5&&y!==26&&y!==27||C===null||(S=C,c?(C=Ai(n,d),C!=null&&b.unshift(cr(n,C,S))):c||(C=Ai(n,d),C!=null&&b.push(cr(n,C,S)))),n=n.return}b.length!==0&&e.push({event:t,listeners:b})}var Qv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function pp(e){return(typeof e=="string"?e:""+e).replace(Qv,`
`).replace(Vv,"")}function gp(e,t){return t=pp(t),pp(e)===t}function Zl(){}function Oe(e,t,n,o,c,d){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ja(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ja(e,""+o);break;case"className":Wr(e,"class",o);break;case"tabIndex":Wr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(e,n,o);break;case"style":vf(e,o,d);break;case"data":if(t!=="object"){Wr(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=nl(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&Oe(e,t,"name",c.name,c,null),Oe(e,t,"formEncType",c.formEncType,c,null),Oe(e,t,"formMethod",c.formMethod,c,null),Oe(e,t,"formTarget",c.formTarget,c,null)):(Oe(e,t,"encType",c.encType,c,null),Oe(e,t,"method",c.method,c,null),Oe(e,t,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=nl(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"onScroll":o!=null&&de("scroll",e);break;case"onScrollEnd":o!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=nl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":de("beforetoggle",e),de("toggle",e),Fr(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Fr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=wm.get(n)||n,Fr(e,n,o))}}function zu(e,t,n,o,c,d){switch(n){case"style":vf(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(n=o.__html,n!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof o=="string"?ja(e,o):(typeof o=="number"||typeof o=="bigint")&&ja(e,""+o);break;case"onScroll":o!=null&&de("scroll",e);break;case"onScrollEnd":o!=null&&de("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),d=e[ot]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,c);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):Fr(e,n,o)}}}function et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var o=!1,c=!1,d;for(d in n)if(n.hasOwnProperty(d)){var b=n[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Oe(e,t,d,b,n,null)}}c&&Oe(e,t,"srcSet",n.srcSet,n,null),o&&Oe(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var y=d=b=c=null,S=null,C=null;for(o in n)if(n.hasOwnProperty(o)){var N=n[o];if(N!=null)switch(o){case"name":c=N;break;case"type":b=N;break;case"checked":S=N;break;case"defaultChecked":C=N;break;case"value":d=N;break;case"defaultValue":y=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:Oe(e,t,o,N,n,null)}}df(e,d,y,S,C,b,c,!1),el(e);return;case"select":de("invalid",e),o=b=d=null;for(c in n)if(n.hasOwnProperty(c)&&(y=n[c],y!=null))switch(c){case"value":d=y;break;case"defaultValue":b=y;break;case"multiple":o=y;default:Oe(e,t,c,y,n,null)}t=d,n=b,e.multiple=!!o,t!=null?Aa(e,!!o,t,!1):n!=null&&Aa(e,!!o,n,!0);return;case"textarea":de("invalid",e),d=c=o=null;for(b in n)if(n.hasOwnProperty(b)&&(y=n[b],y!=null))switch(b){case"value":o=y;break;case"defaultValue":c=y;break;case"children":d=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Oe(e,t,b,y,n,null)}gf(e,o,c,d),el(e);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(o=n[S],o!=null))switch(S){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,t,S,o,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(o=0;o<ur.length;o++)de(ur[o],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(o=n[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Oe(e,t,C,o,n,null)}return;default:if(Io(t)){for(N in n)n.hasOwnProperty(N)&&(o=n[N],o!==void 0&&zu(e,t,N,o,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(o=n[y],o!=null&&Oe(e,t,y,o,n,null))}function Zv(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,b=null,y=null,S=null,C=null,N=null;for(M in n){var B=n[M];if(n.hasOwnProperty(M)&&B!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":S=B;default:o.hasOwnProperty(M)||Oe(e,t,M,null,o,B)}}for(var D in o){var M=o[D];if(B=n[D],o.hasOwnProperty(D)&&(M!=null||B!=null))switch(D){case"type":d=M;break;case"name":c=M;break;case"checked":C=M;break;case"defaultChecked":N=M;break;case"value":b=M;break;case"defaultValue":y=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:M!==B&&Oe(e,t,D,M,o,B)}}Ko(e,b,y,S,C,N,d,c);return;case"select":M=b=y=D=null;for(d in n)if(S=n[d],n.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":M=S;default:o.hasOwnProperty(d)||Oe(e,t,d,null,o,S)}for(c in o)if(d=o[c],S=n[c],o.hasOwnProperty(c)&&(d!=null||S!=null))switch(c){case"value":D=d;break;case"defaultValue":y=d;break;case"multiple":b=d;default:d!==S&&Oe(e,t,c,d,o,S)}t=y,n=b,o=M,D!=null?Aa(e,!!n,D,!1):!!o!=!!n&&(t!=null?Aa(e,!!n,t,!0):Aa(e,!!n,n?[]:"",!1));return;case"textarea":M=D=null;for(y in n)if(c=n[y],n.hasOwnProperty(y)&&c!=null&&!o.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Oe(e,t,y,null,o,c)}for(b in o)if(c=o[b],d=n[b],o.hasOwnProperty(b)&&(c!=null||d!=null))switch(b){case"value":D=c;break;case"defaultValue":M=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&Oe(e,t,b,c,o,d)}pf(e,D,M);return;case"option":for(var ie in n)if(D=n[ie],n.hasOwnProperty(ie)&&D!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Oe(e,t,ie,null,o,D)}for(S in o)if(D=o[S],M=n[S],o.hasOwnProperty(S)&&D!==M&&(D!=null||M!=null))switch(S){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Oe(e,t,S,D,o,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in n)D=n[te],n.hasOwnProperty(te)&&D!=null&&!o.hasOwnProperty(te)&&Oe(e,t,te,null,o,D);for(C in o)if(D=o[C],M=n[C],o.hasOwnProperty(C)&&D!==M&&(D!=null||M!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:Oe(e,t,C,D,o,M)}return;default:if(Io(t)){for(var Te in n)D=n[Te],n.hasOwnProperty(Te)&&D!==void 0&&!o.hasOwnProperty(Te)&&zu(e,t,Te,void 0,o,D);for(N in o)D=o[N],M=n[N],!o.hasOwnProperty(N)||D===M||D===void 0&&M===void 0||zu(e,t,N,D,o,M);return}}for(var j in n)D=n[j],n.hasOwnProperty(j)&&D!=null&&!o.hasOwnProperty(j)&&Oe(e,t,j,null,o,D);for(B in o)D=o[B],M=n[B],!o.hasOwnProperty(B)||D===M||D==null&&M==null||Oe(e,t,B,D,o,M)}var Nu=null,qu=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function mp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=null;function Kv(){var e=window.event;return e&&e.type==="popstate"?e===Bu?!1:(Bu=e,!0):(Bu=null,!1)}var bp=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(e){return yp.resolve(null).then(e).catch(Fv)}:bp;function Fv(e){setTimeout(function(){throw e})}function zn(e){return e==="head"}function _p(e,t){var n=t,o=0,c=0;do{var d=n.nextSibling;if(e.removeChild(n),d&&d.nodeType===8)if(n=d.data,n==="/$"){if(0<o&&8>o){n=o;var b=e.ownerDocument;if(n&1&&fr(b.documentElement),n&2&&fr(b.body),n&4)for(n=b.head,fr(n),b=n.firstChild;b;){var y=b.nextSibling,S=b.nodeName;b[Ei]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&b.rel.toLowerCase()==="stylesheet"||n.removeChild(b),b=y}}if(c===0){e.removeChild(d),yr(t);return}c--}else n==="$"||n==="$?"||n==="$!"?c++:o=n.charCodeAt(0)-48;else o=0;n=d}while(n);yr(t)}function Pu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pu(n),Xo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Wv(e,t,n,o){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ei])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=qt(e.nextSibling),e===null)break}return null}function eb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=qt(e.nextSibling),e===null))return null;return e}function Hu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function tb(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Gu=null;function xp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Sp(e,t,n){switch(t=Kl(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function fr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xo(e)}var Mt=new Map,wp=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var un=Z.d;Z.d={f:nb,r:ab,D:ib,C:rb,L:lb,m:ob,X:ub,S:sb,M:cb};function nb(){var e=un.f(),t=Hl();return e||t}function ab(e){var t=Oa(e);t!==null&&t.tag===5&&t.type==="form"?$h(t):un.r(e)}var ii=typeof document>"u"?null:document;function Op(e,t,n){var o=ii;if(o&&typeof t=="string"&&t){var c=Et(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),wp.has(c)||(wp.add(c),e={rel:e,crossOrigin:n,href:t},o.querySelector(c)===null&&(t=o.createElement("link"),et(t,"link",e),Qe(t),o.head.appendChild(t)))}}function ib(e){un.D(e),Op("dns-prefetch",e,null)}function rb(e,t){un.C(e,t),Op("preconnect",e,t)}function lb(e,t,n){un.L(e,t,n);var o=ii;if(o&&e&&t){var c='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Et(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Et(n.imageSizes)+'"]')):c+='[href="'+Et(e)+'"]';var d=c;switch(t){case"style":d=ri(e);break;case"script":d=li(e)}Mt.has(d)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(d,e),o.querySelector(c)!==null||t==="style"&&o.querySelector(hr(d))||t==="script"&&o.querySelector(dr(d))||(t=o.createElement("link"),et(t,"link",e),Qe(t),o.head.appendChild(t)))}}function ob(e,t){un.m(e,t);var n=ii;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Et(o)+'"][href="'+Et(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=li(e)}if(!Mt.has(d)&&(e=v({rel:"modulepreload",href:e},t),Mt.set(d,e),n.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dr(d)))return}o=n.createElement("link"),et(o,"link",e),Qe(o),n.head.appendChild(o)}}}function sb(e,t,n){un.S(e,t,n);var o=ii;if(o&&e){var c=Ta(o).hoistableStyles,d=ri(e);t=t||"default";var b=c.get(d);if(!b){var y={loading:0,preload:null};if(b=o.querySelector(hr(d)))y.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(d))&&$u(e,n);var S=b=o.createElement("link");Qe(S),et(S,"link",e),S._p=new Promise(function(C,N){S.onload=C,S.onerror=N}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Il(b,t,o)}b={type:"stylesheet",instance:b,count:1,state:y},c.set(d,b)}}}function ub(e,t){un.X(e,t);var n=ii;if(n&&e){var o=Ta(n).hoistableScripts,c=li(e),d=o.get(c);d||(d=n.querySelector(dr(c)),d||(e=v({src:e,async:!0},t),(t=Mt.get(c))&&Yu(e,t),d=n.createElement("script"),Qe(d),et(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function cb(e,t){un.M(e,t);var n=ii;if(n&&e){var o=Ta(n).hoistableScripts,c=li(e),d=o.get(c);d||(d=n.querySelector(dr(c)),d||(e=v({src:e,async:!0,type:"module"},t),(t=Mt.get(c))&&Yu(e,t),d=n.createElement("script"),Qe(d),et(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Tp(e,t,n,o){var c=(c=re.current)?Jl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ri(n.href),n=Ta(c).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ri(n.href);var d=Ta(c).hoistableStyles,b=d.get(e);if(b||(c=c.ownerDocument||c,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=c.querySelector(hr(e)))&&!d._p&&(b.instance=d,b.state.loading=5),Mt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,n),d||fb(c,e,n,b.state))),t&&o===null)throw Error(s(528,""));return b}if(t&&o!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=li(n),n=Ta(c).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ri(e){return'href="'+Et(e)+'"'}function hr(e){return'link[rel="stylesheet"]['+e+"]"}function Ep(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function fb(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),et(t,"link",n),Qe(t),e.head.appendChild(t))}function li(e){return'[src="'+Et(e)+'"]'}function dr(e){return"script[async]"+e}function kp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Et(n.href)+'"]');if(o)return t.instance=o,Qe(o),o;var c=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Qe(o),et(o,"style",c),Il(o,n.precedence,e),t.instance=o;case"stylesheet":c=ri(n.href);var d=e.querySelector(hr(c));if(d)return t.state.loading|=4,t.instance=d,Qe(d),d;o=Ep(n),(c=Mt.get(c))&&$u(o,c),d=(e.ownerDocument||e).createElement("link"),Qe(d);var b=d;return b._p=new Promise(function(y,S){b.onload=y,b.onerror=S}),et(d,"link",o),t.state.loading|=4,Il(d,n.precedence,e),t.instance=d;case"script":return d=li(n.src),(c=e.querySelector(dr(d)))?(t.instance=c,Qe(c),c):(o=n,(c=Mt.get(d))&&(o=v({},n),Yu(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Qe(c),et(c,"link",o),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Il(o,n.precedence,e));return t.instance}function Il(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,b=0;b<o.length;b++){var y=o[b];if(y.dataset.precedence===t)d=y;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function $u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fl=null;function Ap(e,t,n){if(Fl===null){var o=new Map,c=Fl=new Map;c.set(n,o)}else c=Fl,o=c.get(n),o||(o=new Map,c.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var d=n[c];if(!(d[Ei]||d[nt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(t)||"";b=e+b;var y=o.get(b);y?y.push(d):o.set(b,[d])}}return o}function jp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function hb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pr=null;function db(){}function pb(e,t,n){if(pr===null)throw Error(s(475));var o=pr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=ri(n.href),d=e.querySelector(hr(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Wl.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=d,Qe(d);return}d=e.ownerDocument||e,n=Ep(n),(c=Mt.get(c))&&$u(n,c),d=d.createElement("link"),Qe(d);var b=d;b._p=new Promise(function(y,S){b.onload=y,b.onerror=S}),et(d,"link",n),t.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(o.count++,t=Wl.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}function gb(){if(pr===null)throw Error(s(475));var e=pr;return e.stylesheets&&e.count===0&&Xu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Xu(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Wl(){if(this.count--,this.count===0){if(this.stylesheets)Xu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eo=null;function Xu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eo=new Map,t.forEach(mb,e),eo=null,Wl.call(e))}function mb(e,t){if(!(t.state.loading&4)){var n=eo.get(e);if(n)var o=n.get(null);else{n=new Map,eo.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var b=c[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(n.set(b.dataset.precedence,b),o=b)}o&&n.set(null,o)}c=t.instance,b=c.getAttribute("data-precedence"),d=n.get(b)||o,d===o&&n.set(null,c),n.set(b,c),this.count++,o=Wl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var gr={$$typeof:z,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function vb(e,t,n,o,c,d,b,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.hiddenUpdates=Ho(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Cp(e,t,n,o,c,d,b,y,S,C,N,B){return e=new vb(e,t,n,b,y,S,C,B),t=1,d===!0&&(t|=24),d=bt(3,null,null,t),e.current=d,d.stateNode=e,t=Es(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:o,isDehydrated:n,cache:t},Rs(d),e}function Dp(e){return e?(e=qa,e):qa}function Mp(e,t,n,o,c,d){c=Dp(c),o.context===null?o.context=c:o.pendingContext=c,o=Sn(t),o.payload={element:n},d=d===void 0?null:d,d!==null&&(o.callback=d),n=wn(e,o,t),n!==null&&(wt(n,e,t),Xi(n,e,t))}function Up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qu(e,t){Up(e,t),(e=e.alternate)&&Up(e,t)}function zp(e){if(e.tag===13){var t=Na(e,67108864);t!==null&&wt(t,e,67108864),Qu(e,67108864)}}var to=!0;function bb(e,t,n,o){var c=q.T;q.T=null;var d=Z.p;try{Z.p=2,Vu(e,t,n,o)}finally{Z.p=d,q.T=c}}function yb(e,t,n,o){var c=q.T;q.T=null;var d=Z.p;try{Z.p=8,Vu(e,t,n,o)}finally{Z.p=d,q.T=c}}function Vu(e,t,n,o){if(to){var c=Zu(o);if(c===null)Uu(e,t,o,no,n),qp(e,o);else if(xb(c,e,t,n,o))o.stopPropagation();else if(qp(e,o),t&4&&-1<_b.indexOf(e)){for(;c!==null;){var d=Oa(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=In(d.pendingLanes);if(b!==0){var y=d;for(y.pendingLanes|=2,y.entangledLanes|=2;b;){var S=1<<31-mt(b);y.entanglements[1]|=S,b&=~S}Vt(d),(_e&6)===0&&(Bl=Gt()+500,sr(0))}}break;case 13:y=Na(d,2),y!==null&&wt(y,d,2),Hl(),Qu(d,2)}if(d=Zu(o),d===null&&Uu(e,t,o,no,n),d===c)break;c=d}c!==null&&o.stopPropagation()}else Uu(e,t,o,null,n)}}function Zu(e){return e=Wo(e),Ku(e)}var no=null;function Ku(e){if(no=null,e=wa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return no=e,null}function Np(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rm()){case Kc:return 2;case Jc:return 8;case Zr:case lm:return 32;case Ic:return 268435456;default:return 32}default:return 32}}var Ju=!1,Nn=null,qn=null,Ln=null,mr=new Map,vr=new Map,Bn=[],_b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qp(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(t.pointerId)}}function br(e,t,n,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},t!==null&&(t=Oa(t),t!==null&&zp(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function xb(e,t,n,o,c){switch(t){case"focusin":return Nn=br(Nn,e,t,n,o,c),!0;case"dragenter":return qn=br(qn,e,t,n,o,c),!0;case"mouseover":return Ln=br(Ln,e,t,n,o,c),!0;case"pointerover":var d=c.pointerId;return mr.set(d,br(mr.get(d)||null,e,t,n,o,c)),!0;case"gotpointercapture":return d=c.pointerId,vr.set(d,br(vr.get(d)||null,e,t,n,o,c)),!0}return!1}function Lp(e){var t=wa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,pm(e.priority,function(){if(n.tag===13){var o=St();o=Go(o);var c=Na(n,o);c!==null&&wt(c,n,o),Qu(n,o)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zu(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Fo=o,n.target.dispatchEvent(o),Fo=null}else return t=Oa(n),t!==null&&zp(t),e.blockedOn=n,!1;t.shift()}return!0}function Bp(e,t,n){ao(e)&&n.delete(t)}function Sb(){Ju=!1,Nn!==null&&ao(Nn)&&(Nn=null),qn!==null&&ao(qn)&&(qn=null),Ln!==null&&ao(Ln)&&(Ln=null),mr.forEach(Bp),vr.forEach(Bp)}function io(e,t){e.blockedOn===t&&(e.blockedOn=null,Ju||(Ju=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Sb)))}var ro=null;function Pp(e){ro!==e&&(ro=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ro===e&&(ro=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],c=e[t+2];if(typeof o!="function"){if(Ku(o||n)===null)continue;break}var d=Oa(n);d!==null&&(e.splice(t,3),t-=3,Ks(d,{pending:!0,data:c,method:n.method,action:o},o,c))}}))}function yr(e){function t(S){return io(S,e)}Nn!==null&&io(Nn,e),qn!==null&&io(qn,e),Ln!==null&&io(Ln,e),mr.forEach(t),vr.forEach(t);for(var n=0;n<Bn.length;n++){var o=Bn[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)Lp(n),n.blockedOn===null&&Bn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var c=n[o],d=n[o+1],b=c[ot]||null;if(typeof d=="function")b||Pp(n);else if(b){var y=null;if(d&&d.hasAttribute("formAction")){if(c=d,b=d[ot]||null)y=b.formAction;else if(Ku(c)!==null)continue}else y=b.action;typeof y=="function"?n[o+1]=y:(n.splice(o,3),o-=3),Pp(n)}}}function Iu(e){this._internalRoot=e}lo.prototype.render=Iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,o=St();Mp(n,o,e,t,null,null)},lo.prototype.unmount=Iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mp(e.current,2,null,e,null,null),Hl(),t[Sa]=null}};function lo(e){this._internalRoot=e}lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bn.length&&t!==0&&t<Bn[n].priority;n++);Bn.splice(n,0,e),n===0&&Lp(e)}};var Hp=a.version;if(Hp!=="19.1.0")throw Error(s(527,Hp,"19.1.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var wb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{wi=oo.inject(wb),gt=oo}catch{}}return xr.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,o="",c=ad,d=id,b=rd,y=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=Cp(e,1,!1,null,null,n,o,c,d,b,y,null),e[Sa]=t.current,Mu(e),new Iu(t)},xr.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var o=!1,c="",d=ad,b=id,y=rd,S=null,C=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(b=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(C=n.formState)),t=Cp(e,1,!0,t,n??null,o,c,d,b,y,S,C),t.context=Dp(null),n=t.current,o=St(),o=Go(o),c=Sn(o),c.callback=null,wn(n,c,o),n=o,t.current.lanes=n,Ti(t,n),Vt(t),e[Sa]=t.current,Mu(e),new lo(t)},xr.version="19.1.0",xr}var Ip;function qb(){if(Ip)return ec.exports;Ip=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),ec.exports=Nb(),ec.exports}var Lb=qb();ng();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(l[s]=r[s])}return l},Mr.apply(this,arguments)}var Qn;(function(l){l.Pop="POP",l.Push="PUSH",l.Replace="REPLACE"})(Qn||(Qn={}));const Fp="popstate";function Bb(l){l===void 0&&(l={});function a(u,f){let{pathname:h="/",search:m="",hash:p=""}=ya(u.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),mc("",{pathname:h,search:m,hash:p},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function r(u,f){let h=u.document.querySelector("base"),m="";if(h&&h.getAttribute("href")){let p=u.location.href,g=p.indexOf("#");m=g===-1?p:p.slice(0,g)}return m+"#"+(typeof f=="string"?f:To(f))}function s(u,f){qc(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(f)+")")}return Hb(a,r,s,l)}function He(l,a){if(l===!1||l===null||typeof l>"u")throw new Error(a)}function qc(l,a){if(!l){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Pb(){return Math.random().toString(36).substr(2,8)}function Wp(l,a){return{usr:l.state,key:l.key,idx:a}}function mc(l,a,r,s){return r===void 0&&(r=null),Mr({pathname:typeof l=="string"?l:l.pathname,search:"",hash:""},typeof a=="string"?ya(a):a,{state:r,key:a&&a.key||s||Pb()})}function To(l){let{pathname:a="/",search:r="",hash:s=""}=l;return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function ya(l){let a={};if(l){let r=l.indexOf("#");r>=0&&(a.hash=l.substr(r),l=l.substr(0,r));let s=l.indexOf("?");s>=0&&(a.search=l.substr(s),l=l.substr(0,s)),l&&(a.pathname=l)}return a}function Hb(l,a,r,s){s===void 0&&(s={});let{window:u=document.defaultView,v5Compat:f=!1}=s,h=u.history,m=Qn.Pop,p=null,g=v();g==null&&(g=0,h.replaceState(Mr({},h.state,{idx:g}),""));function v(){return(h.state||{idx:null}).idx}function _(){m=Qn.Pop;let A=v(),P=A==null?null:A-g;g=A,p&&p({action:m,location:k.location,delta:P})}function x(A,P){m=Qn.Push;let X=mc(k.location,A,P);r&&r(X,A),g=v()+1;let z=Wp(X,g),$=k.createHref(X);try{h.pushState(z,"",$)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;u.location.assign($)}f&&p&&p({action:m,location:k.location,delta:1})}function T(A,P){m=Qn.Replace;let X=mc(k.location,A,P);r&&r(X,A),g=v();let z=Wp(X,g),$=k.createHref(X);h.replaceState(z,"",$),f&&p&&p({action:m,location:k.location,delta:0})}function w(A){let P=u.location.origin!=="null"?u.location.origin:u.location.href,X=typeof A=="string"?A:To(A);return X=X.replace(/ $/,"%20"),He(P,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,P)}let k={get action(){return m},get location(){return l(u,h)},listen(A){if(p)throw new Error("A history only accepts one active listener");return u.addEventListener(Fp,_),p=A,()=>{u.removeEventListener(Fp,_),p=null}},createHref(A){return a(u,A)},createURL:w,encodeLocation(A){let P=w(A);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:x,replace:T,go(A){return h.go(A)}};return k}var e0;(function(l){l.data="data",l.deferred="deferred",l.redirect="redirect",l.error="error"})(e0||(e0={}));function Gb(l,a,r){return r===void 0&&(r="/"),$b(l,a,r)}function $b(l,a,r,s){let u=typeof a=="string"?ya(a):a,f=Lc(u.pathname||"/",r);if(f==null)return null;let h=ag(l);Yb(h);let m=null;for(let p=0;m==null&&p<h.length;++p){let g=ny(f);m=Wb(h[p],g)}return m}function ag(l,a,r,s){a===void 0&&(a=[]),r===void 0&&(r=[]),s===void 0&&(s="");let u=(f,h,m)=>{let p={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};p.relativePath.startsWith("/")&&(He(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let g=Vn([s,p.relativePath]),v=r.concat(p);f.children&&f.children.length>0&&(He(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),ag(f.children,a,v,g)),!(f.path==null&&!f.index)&&a.push({path:g,score:Ib(g,f.index),routesMeta:v})};return l.forEach((f,h)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))u(f,h);else for(let p of ig(f.path))u(f,h,p)}),a}function ig(l){let a=l.split("/");if(a.length===0)return[];let[r,...s]=a,u=r.endsWith("?"),f=r.replace(/\?$/,"");if(s.length===0)return u?[f,""]:[f];let h=ig(s.join("/")),m=[];return m.push(...h.map(p=>p===""?f:[f,p].join("/"))),u&&m.push(...h),m.map(p=>l.startsWith("/")&&p===""?"/":p)}function Yb(l){l.sort((a,r)=>a.score!==r.score?r.score-a.score:Fb(a.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const Xb=/^:[\w-]+$/,Qb=3,Vb=2,Zb=1,Kb=10,Jb=-2,t0=l=>l==="*";function Ib(l,a){let r=l.split("/"),s=r.length;return r.some(t0)&&(s+=Jb),a&&(s+=Vb),r.filter(u=>!t0(u)).reduce((u,f)=>u+(Xb.test(f)?Qb:f===""?Zb:Kb),s)}function Fb(l,a){return l.length===a.length&&l.slice(0,-1).every((s,u)=>s===a[u])?l[l.length-1]-a[a.length-1]:0}function Wb(l,a,r){let{routesMeta:s}=l,u={},f="/",h=[];for(let m=0;m<s.length;++m){let p=s[m],g=m===s.length-1,v=f==="/"?a:a.slice(f.length)||"/",_=ey({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),x=p.route;if(!_)return null;Object.assign(u,_.params),h.push({params:u,pathname:Vn([f,_.pathname]),pathnameBase:ly(Vn([f,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(f=Vn([f,_.pathnameBase]))}return h}function ey(l,a){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[r,s]=ty(l.path,l.caseSensitive,l.end),u=a.match(r);if(!u)return null;let f=u[0],h=f.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:s.reduce((g,v,_)=>{let{paramName:x,isOptional:T}=v;if(x==="*"){let k=m[_]||"";h=f.slice(0,f.length-k.length).replace(/(.)\/+$/,"$1")}const w=m[_];return T&&!w?g[x]=void 0:g[x]=(w||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:h,pattern:l}}function ty(l,a,r){a===void 0&&(a=!1),r===void 0&&(r=!0),qc(l==="*"||!l.endsWith("*")||l.endsWith("/*"),'Route path "'+l+'" will be treated as if it were '+('"'+l.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+l.replace(/\*$/,"/*")+'".'));let s=[],u="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(s.push({paramName:"*"}),u+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?u+="\\/*$":l!==""&&l!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),s]}function ny(l){try{return l.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return qc(!1,'The URL path "'+l+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+a+").")),l}}function Lc(l,a){if(a==="/")return l;if(!l.toLowerCase().startsWith(a.toLowerCase()))return null;let r=a.endsWith("/")?a.length-1:a.length,s=l.charAt(r);return s&&s!=="/"?null:l.slice(r)||"/"}function ay(l,a){a===void 0&&(a="/");let{pathname:r,search:s="",hash:u=""}=typeof l=="string"?ya(l):l;return{pathname:r?r.startsWith("/")?r:iy(r,a):a,search:oy(s),hash:sy(u)}}function iy(l,a){let r=a.replace(/\/+$/,"").split("/");return l.split("/").forEach(u=>{u===".."?r.length>1&&r.pop():u!=="."&&r.push(u)}),r.length>1?r.join("/"):"/"}function ic(l,a,r,s){return"Cannot include a '"+l+"' character in a manually specified "+("`to."+a+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ry(l){return l.filter((a,r)=>r===0||a.route.path&&a.route.path.length>0)}function rg(l,a){let r=ry(l);return a?r.map((s,u)=>u===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function lg(l,a,r,s){s===void 0&&(s=!1);let u;typeof l=="string"?u=ya(l):(u=Mr({},l),He(!u.pathname||!u.pathname.includes("?"),ic("?","pathname","search",u)),He(!u.pathname||!u.pathname.includes("#"),ic("#","pathname","hash",u)),He(!u.search||!u.search.includes("#"),ic("#","search","hash",u)));let f=l===""||u.pathname==="",h=f?"/":u.pathname,m;if(h==null)m=r;else{let _=a.length-1;if(!s&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),_-=1;u.pathname=x.join("/")}m=_>=0?a[_]:"/"}let p=ay(u,m),g=h&&h!=="/"&&h.endsWith("/"),v=(f||h===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}const Vn=l=>l.join("/").replace(/\/\/+/g,"/"),ly=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),oy=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,sy=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function uy(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}const og=["post","put","patch","delete"];new Set(og);const cy=["get",...og];new Set(cy);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(l[s]=r[s])}return l},Ur.apply(this,arguments)}const Bc=Q.createContext(null),fy=Q.createContext(null),_a=Q.createContext(null),Do=Q.createContext(null),Zn=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),sg=Q.createContext(null);function hy(l,a){let{relative:r}=a===void 0?{}:a;Lr()||He(!1);let{basename:s,navigator:u}=Q.useContext(_a),{hash:f,pathname:h,search:m}=cg(l,{relative:r}),p=h;return s!=="/"&&(p=h==="/"?s:Vn([s,h])),u.createHref({pathname:p,search:m,hash:f})}function Lr(){return Q.useContext(Do)!=null}function xi(){return Lr()||He(!1),Q.useContext(Do).location}function ug(l){Q.useContext(_a).static||Q.useLayoutEffect(l)}function dy(){let{isDataRoute:l}=Q.useContext(Zn);return l?ky():py()}function py(){Lr()||He(!1);let l=Q.useContext(Bc),{basename:a,future:r,navigator:s}=Q.useContext(_a),{matches:u}=Q.useContext(Zn),{pathname:f}=xi(),h=JSON.stringify(rg(u,r.v7_relativeSplatPath)),m=Q.useRef(!1);return ug(()=>{m.current=!0}),Q.useCallback(function(g,v){if(v===void 0&&(v={}),!m.current)return;if(typeof g=="number"){s.go(g);return}let _=lg(g,JSON.parse(h),f,v.relative==="path");l==null&&a!=="/"&&(_.pathname=_.pathname==="/"?a:Vn([a,_.pathname])),(v.replace?s.replace:s.push)(_,v.state,v)},[a,s,h,f,l])}function gy(){let{matches:l}=Q.useContext(Zn),a=l[l.length-1];return a?a.params:{}}function cg(l,a){let{relative:r}=a===void 0?{}:a,{future:s}=Q.useContext(_a),{matches:u}=Q.useContext(Zn),{pathname:f}=xi(),h=JSON.stringify(rg(u,s.v7_relativeSplatPath));return Q.useMemo(()=>lg(l,JSON.parse(h),f,r==="path"),[l,h,f,r])}function my(l,a){return vy(l,a)}function vy(l,a,r,s){Lr()||He(!1);let{navigator:u}=Q.useContext(_a),{matches:f}=Q.useContext(Zn),h=f[f.length-1],m=h?h.params:{};h&&h.pathname;let p=h?h.pathnameBase:"/";h&&h.route;let g=xi(),v;if(a){var _;let A=typeof a=="string"?ya(a):a;p==="/"||(_=A.pathname)!=null&&_.startsWith(p)||He(!1),v=A}else v=g;let x=v.pathname||"/",T=x;if(p!=="/"){let A=p.replace(/^\//,"").split("/");T="/"+x.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=Gb(l,{pathname:T}),k=Sy(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:Vn([p,u.encodeLocation?u.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:Vn([p,u.encodeLocation?u.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),f,r,s);return a&&k?Q.createElement(Do.Provider,{value:{location:Ur({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Qn.Pop}},k):k}function by(){let l=Ey(),a=uy(l)?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),r=l instanceof Error?l.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},a),r?Q.createElement("pre",{style:u},r):null,null)}const yy=Q.createElement(by,null);class _y extends Q.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){console.error("React Router caught the following error during render",a,r)}render(){return this.state.error!==void 0?Q.createElement(Zn.Provider,{value:this.props.routeContext},Q.createElement(sg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xy(l){let{routeContext:a,match:r,children:s}=l,u=Q.useContext(Bc);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),Q.createElement(Zn.Provider,{value:a},s)}function Sy(l,a,r,s){var u;if(a===void 0&&(a=[]),r===void 0&&(r=null),s===void 0&&(s=null),l==null){var f;if(!r)return null;if(r.errors)l=r.matches;else if((f=s)!=null&&f.v7_partialHydration&&a.length===0&&!r.initialized&&r.matches.length>0)l=r.matches;else return null}let h=l,m=(u=r)==null?void 0:u.errors;if(m!=null){let v=h.findIndex(_=>_.route.id&&(m==null?void 0:m[_.route.id])!==void 0);v>=0||He(!1),h=h.slice(0,Math.min(h.length,v+1))}let p=!1,g=-1;if(r&&s&&s.v7_partialHydration)for(let v=0;v<h.length;v++){let _=h[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=v),_.route.id){let{loaderData:x,errors:T}=r,w=_.route.loader&&x[_.route.id]===void 0&&(!T||T[_.route.id]===void 0);if(_.route.lazy||w){p=!0,g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}return h.reduceRight((v,_,x)=>{let T,w=!1,k=null,A=null;r&&(T=m&&_.route.id?m[_.route.id]:void 0,k=_.route.errorElement||yy,p&&(g<0&&x===0?(Ay("route-fallback"),w=!0,A=null):g===x&&(w=!0,A=_.route.hydrateFallbackElement||null)));let P=a.concat(h.slice(0,x+1)),X=()=>{let z;return T?z=k:w?z=A:_.route.Component?z=Q.createElement(_.route.Component,null):_.route.element?z=_.route.element:z=v,Q.createElement(xy,{match:_,routeContext:{outlet:v,matches:P,isDataRoute:r!=null},children:z})};return r&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?Q.createElement(_y,{location:r.location,revalidation:r.revalidation,component:k,error:T,children:X(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):X()},null)}var fg=function(l){return l.UseBlocker="useBlocker",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l}(fg||{}),hg=function(l){return l.UseBlocker="useBlocker",l.UseLoaderData="useLoaderData",l.UseActionData="useActionData",l.UseRouteError="useRouteError",l.UseNavigation="useNavigation",l.UseRouteLoaderData="useRouteLoaderData",l.UseMatches="useMatches",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l.UseRouteId="useRouteId",l}(hg||{});function wy(l){let a=Q.useContext(Bc);return a||He(!1),a}function Oy(l){let a=Q.useContext(fy);return a||He(!1),a}function Ty(l){let a=Q.useContext(Zn);return a||He(!1),a}function dg(l){let a=Ty(),r=a.matches[a.matches.length-1];return r.route.id||He(!1),r.route.id}function Ey(){var l;let a=Q.useContext(sg),r=Oy(),s=dg();return a!==void 0?a:(l=r.errors)==null?void 0:l[s]}function ky(){let{router:l}=wy(fg.UseNavigateStable),a=dg(hg.UseNavigateStable),r=Q.useRef(!1);return ug(()=>{r.current=!0}),Q.useCallback(function(u,f){f===void 0&&(f={}),r.current&&(typeof u=="number"?l.navigate(u):l.navigate(u,Ur({fromRouteId:a},f)))},[l,a])}const n0={};function Ay(l,a,r){n0[l]||(n0[l]=!0)}function jy(l,a){l==null||l.v7_startTransition,l==null||l.v7_relativeSplatPath}function ma(l){He(!1)}function Ry(l){let{basename:a="/",children:r=null,location:s,navigationType:u=Qn.Pop,navigator:f,static:h=!1,future:m}=l;Lr()&&He(!1);let p=a.replace(/^\/*/,"/"),g=Q.useMemo(()=>({basename:p,navigator:f,static:h,future:Ur({v7_relativeSplatPath:!1},m)}),[p,m,f,h]);typeof s=="string"&&(s=ya(s));let{pathname:v="/",search:_="",hash:x="",state:T=null,key:w="default"}=s,k=Q.useMemo(()=>{let A=Lc(v,p);return A==null?null:{location:{pathname:A,search:_,hash:x,state:T,key:w},navigationType:u}},[p,v,_,x,T,w,u]);return k==null?null:Q.createElement(_a.Provider,{value:g},Q.createElement(Do.Provider,{children:r,value:k}))}function Cy(l){let{children:a,location:r}=l;return my(vc(a),r)}new Promise(()=>{});function vc(l,a){a===void 0&&(a=[]);let r=[];return Q.Children.forEach(l,(s,u)=>{if(!Q.isValidElement(s))return;let f=[...a,u];if(s.type===Q.Fragment){r.push.apply(r,vc(s.props.children,f));return}s.type!==ma&&He(!1),!s.props.index||!s.props.children||He(!1);let h={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=vc(s.props.children,f)),r.push(h)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(l[s]=r[s])}return l},bc.apply(this,arguments)}function Dy(l,a){if(l==null)return{};var r={},s=Object.keys(l),u,f;for(f=0;f<s.length;f++)u=s[f],!(a.indexOf(u)>=0)&&(r[u]=l[u]);return r}function My(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Uy(l,a){return l.button===0&&(!a||a==="_self")&&!My(l)}const zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ny="6";try{window.__reactRouterVersion=Ny}catch{}const qy="startTransition",a0=Db[qy];function Ly(l){let{basename:a,children:r,future:s,window:u}=l,f=Q.useRef();f.current==null&&(f.current=Bb({window:u,v5Compat:!0}));let h=f.current,[m,p]=Q.useState({action:h.action,location:h.location}),{v7_startTransition:g}=s||{},v=Q.useCallback(_=>{g&&a0?a0(()=>p(_)):p(_)},[p,g]);return Q.useLayoutEffect(()=>h.listen(v),[h,v]),Q.useEffect(()=>jy(s),[s]),Q.createElement(Ry,{basename:a,children:r,location:m.location,navigationType:m.action,navigator:h,future:s})}const By=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Py=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dn=Q.forwardRef(function(a,r){let{onClick:s,relative:u,reloadDocument:f,replace:h,state:m,target:p,to:g,preventScrollReset:v,viewTransition:_}=a,x=Dy(a,zy),{basename:T}=Q.useContext(_a),w,k=!1;if(typeof g=="string"&&Py.test(g)&&(w=g,By))try{let z=new URL(window.location.href),$=g.startsWith("//")?new URL(z.protocol+g):new URL(g),Y=Lc($.pathname,T);$.origin===z.origin&&Y!=null?g=Y+$.search+$.hash:k=!0}catch{}let A=hy(g,{relative:u}),P=Hy(g,{replace:h,state:m,target:p,preventScrollReset:v,relative:u,viewTransition:_});function X(z){s&&s(z),z.defaultPrevented||P(z)}return Q.createElement("a",bc({},x,{href:w||A,onClick:k||f?s:X,ref:r,target:p}))});var i0;(function(l){l.UseScrollRestoration="useScrollRestoration",l.UseSubmit="useSubmit",l.UseSubmitFetcher="useSubmitFetcher",l.UseFetcher="useFetcher",l.useViewTransitionState="useViewTransitionState"})(i0||(i0={}));var r0;(function(l){l.UseFetcher="useFetcher",l.UseFetchers="useFetchers",l.UseScrollRestoration="useScrollRestoration"})(r0||(r0={}));function Hy(l,a){let{target:r,replace:s,state:u,preventScrollReset:f,relative:h,viewTransition:m}=a===void 0?{}:a,p=dy(),g=xi(),v=cg(l,{relative:h});return Q.useCallback(_=>{if(Uy(_,r)){_.preventDefault();let x=s!==void 0?s:To(g)===To(v);p(l,{replace:x,state:u,preventScrollReset:f,relative:h,viewTransition:m})}},[g,p,v,s,u,r,l,f,h,m])}const Gy="modulepreload",$y=function(l){return"/"+l},l0={},Br=function(a,r,s){let u=Promise.resolve();if(r&&r.length>0){let h=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));u=h(r.map(g=>{if(g=$y(g),g in l0)return;l0[g]=!0;const v=g.endsWith(".css"),_=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${_}`))return;const x=document.createElement("link");if(x.rel=v?"stylesheet":Gy,v||(x.as="script"),x.crossOrigin="",x.href=g,p&&x.setAttribute("nonce",p),document.head.appendChild(x),v)return new Promise((T,w)=>{x.addEventListener("load",T),x.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${g}`)))})}))}function f(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return u.then(h=>{for(const m of h||[])m.status==="rejected"&&f(m.reason);return a().catch(f)})},Yy=l=>{let a;return l?a=l:typeof fetch>"u"?a=(...r)=>Br(async()=>{const{default:s}=await Promise.resolve().then(()=>Si);return{default:s}},void 0).then(({default:s})=>s(...r)):a=fetch,(...r)=>a(...r)};class Pc extends Error{constructor(a,r="FunctionsError",s){super(a),this.name=r,this.context=s}}class Xy extends Pc{constructor(a){super("Failed to send a request to the Edge Function","FunctionsFetchError",a)}}class Qy extends Pc{constructor(a){super("Relay Error invoking the Edge Function","FunctionsRelayError",a)}}class Vy extends Pc{constructor(a){super("Edge Function returned a non-2xx status code","FunctionsHttpError",a)}}var yc;(function(l){l.Any="any",l.ApNortheast1="ap-northeast-1",l.ApNortheast2="ap-northeast-2",l.ApSouth1="ap-south-1",l.ApSoutheast1="ap-southeast-1",l.ApSoutheast2="ap-southeast-2",l.CaCentral1="ca-central-1",l.EuCentral1="eu-central-1",l.EuWest1="eu-west-1",l.EuWest2="eu-west-2",l.EuWest3="eu-west-3",l.SaEast1="sa-east-1",l.UsEast1="us-east-1",l.UsWest1="us-west-1",l.UsWest2="us-west-2"})(yc||(yc={}));var Zy=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};class Ky{constructor(a,{headers:r={},customFetch:s,region:u=yc.Any}={}){this.url=a,this.headers=r,this.region=u,this.fetch=Yy(s)}setAuth(a){this.headers.Authorization=`Bearer ${a}`}invoke(a,r={}){var s;return Zy(this,void 0,void 0,function*(){try{const{headers:u,method:f,body:h}=r;let m={},{region:p}=r;p||(p=this.region),p&&p!=="any"&&(m["x-region"]=p);let g;h&&(u&&!Object.prototype.hasOwnProperty.call(u,"Content-Type")||!u)&&(typeof Blob<"u"&&h instanceof Blob||h instanceof ArrayBuffer?(m["Content-Type"]="application/octet-stream",g=h):typeof h=="string"?(m["Content-Type"]="text/plain",g=h):typeof FormData<"u"&&h instanceof FormData?g=h:(m["Content-Type"]="application/json",g=JSON.stringify(h)));const v=yield this.fetch(`${this.url}/${a}`,{method:f||"POST",headers:Object.assign(Object.assign(Object.assign({},m),this.headers),u),body:g}).catch(w=>{throw new Xy(w)}),_=v.headers.get("x-relay-error");if(_&&_==="true")throw new Qy(v);if(!v.ok)throw new Vy(v);let x=((s=v.headers.get("Content-Type"))!==null&&s!==void 0?s:"text/plain").split(";")[0].trim(),T;return x==="application/json"?T=yield v.json():x==="application/octet-stream"?T=yield v.blob():x==="text/event-stream"?T=v:x==="multipart/form-data"?T=yield v.formData():T=yield v.text(),{data:T,error:null}}catch(u){return{data:null,error:u}}})}}var Je={},oi={},si={},ui={},ci={},fi={},Jy=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},_i=Jy();const Iy=_i.fetch,pg=_i.fetch.bind(_i),gg=_i.Headers,Fy=_i.Request,Wy=_i.Response,Si=Object.freeze(Object.defineProperty({__proto__:null,Headers:gg,Request:Fy,Response:Wy,default:pg,fetch:Iy},Symbol.toStringTag,{value:"Module"})),e1=Ab(Si);var so={},o0;function mg(){if(o0)return so;o0=1,Object.defineProperty(so,"__esModule",{value:!0});class l extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}}return so.default=l,so}var s0;function vg(){if(s0)return fi;s0=1;var l=fi&&fi.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(fi,"__esModule",{value:!0});const a=l(e1),r=l(mg());class s{constructor(f){this.shouldThrowOnError=!1,this.method=f.method,this.url=f.url,this.headers=f.headers,this.schema=f.schema,this.body=f.body,this.shouldThrowOnError=f.shouldThrowOnError,this.signal=f.signal,this.isMaybeSingle=f.isMaybeSingle,f.fetch?this.fetch=f.fetch:typeof fetch>"u"?this.fetch=a.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(f,h){return this.headers=Object.assign({},this.headers),this.headers[f]=h,this}then(f,h){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const m=this.fetch;let p=m(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async g=>{var v,_,x;let T=null,w=null,k=null,A=g.status,P=g.statusText;if(g.ok){if(this.method!=="HEAD"){const Y=await g.text();Y===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?w=Y:w=JSON.parse(Y))}const z=(v=this.headers.Prefer)===null||v===void 0?void 0:v.match(/count=(exact|planned|estimated)/),$=(_=g.headers.get("content-range"))===null||_===void 0?void 0:_.split("/");z&&$&&$.length>1&&(k=parseInt($[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(w)&&(w.length>1?(T={code:"PGRST116",details:`Results contain ${w.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},w=null,k=null,A=406,P="Not Acceptable"):w.length===1?w=w[0]:w=null)}else{const z=await g.text();try{T=JSON.parse(z),Array.isArray(T)&&g.status===404&&(w=[],T=null,A=200,P="OK")}catch{g.status===404&&z===""?(A=204,P="No Content"):T={message:z}}if(T&&this.isMaybeSingle&&(!((x=T==null?void 0:T.details)===null||x===void 0)&&x.includes("0 rows"))&&(T=null,A=200,P="OK"),T&&this.shouldThrowOnError)throw new r.default(T)}return{error:T,data:w,count:k,status:A,statusText:P}});return this.shouldThrowOnError||(p=p.catch(g=>{var v,_,x;return{error:{message:`${(v=g==null?void 0:g.name)!==null&&v!==void 0?v:"FetchError"}: ${g==null?void 0:g.message}`,details:`${(_=g==null?void 0:g.stack)!==null&&_!==void 0?_:""}`,hint:"",code:`${(x=g==null?void 0:g.code)!==null&&x!==void 0?x:""}`},data:null,count:null,status:0,statusText:""}})),p.then(f,h)}returns(){return this}overrideTypes(){return this}}return fi.default=s,fi}var u0;function bg(){if(u0)return ci;u0=1;var l=ci&&ci.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ci,"__esModule",{value:!0});const a=l(vg());class r extends a.default{select(u){let f=!1;const h=(u??"*").split("").map(m=>/\s/.test(m)&&!f?"":(m==='"'&&(f=!f),m)).join("");return this.url.searchParams.set("select",h),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(u,{ascending:f=!0,nullsFirst:h,foreignTable:m,referencedTable:p=m}={}){const g=p?`${p}.order`:"order",v=this.url.searchParams.get(g);return this.url.searchParams.set(g,`${v?`${v},`:""}${u}.${f?"asc":"desc"}${h===void 0?"":h?".nullsfirst":".nullslast"}`),this}limit(u,{foreignTable:f,referencedTable:h=f}={}){const m=typeof h>"u"?"limit":`${h}.limit`;return this.url.searchParams.set(m,`${u}`),this}range(u,f,{foreignTable:h,referencedTable:m=h}={}){const p=typeof m>"u"?"offset":`${m}.offset`,g=typeof m>"u"?"limit":`${m}.limit`;return this.url.searchParams.set(p,`${u}`),this.url.searchParams.set(g,`${f-u+1}`),this}abortSignal(u){return this.signal=u,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:u=!1,verbose:f=!1,settings:h=!1,buffers:m=!1,wal:p=!1,format:g="text"}={}){var v;const _=[u?"analyze":null,f?"verbose":null,h?"settings":null,m?"buffers":null,p?"wal":null].filter(Boolean).join("|"),x=(v=this.headers.Accept)!==null&&v!==void 0?v:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${g}; for="${x}"; options=${_};`,g==="json"?this:this}rollback(){var u;return((u=this.headers.Prefer)!==null&&u!==void 0?u:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}return ci.default=r,ci}var c0;function Hc(){if(c0)return ui;c0=1;var l=ui&&ui.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(ui,"__esModule",{value:!0});const a=l(bg());class r extends a.default{eq(u,f){return this.url.searchParams.append(u,`eq.${f}`),this}neq(u,f){return this.url.searchParams.append(u,`neq.${f}`),this}gt(u,f){return this.url.searchParams.append(u,`gt.${f}`),this}gte(u,f){return this.url.searchParams.append(u,`gte.${f}`),this}lt(u,f){return this.url.searchParams.append(u,`lt.${f}`),this}lte(u,f){return this.url.searchParams.append(u,`lte.${f}`),this}like(u,f){return this.url.searchParams.append(u,`like.${f}`),this}likeAllOf(u,f){return this.url.searchParams.append(u,`like(all).{${f.join(",")}}`),this}likeAnyOf(u,f){return this.url.searchParams.append(u,`like(any).{${f.join(",")}}`),this}ilike(u,f){return this.url.searchParams.append(u,`ilike.${f}`),this}ilikeAllOf(u,f){return this.url.searchParams.append(u,`ilike(all).{${f.join(",")}}`),this}ilikeAnyOf(u,f){return this.url.searchParams.append(u,`ilike(any).{${f.join(",")}}`),this}is(u,f){return this.url.searchParams.append(u,`is.${f}`),this}in(u,f){const h=Array.from(new Set(f)).map(m=>typeof m=="string"&&new RegExp("[,()]").test(m)?`"${m}"`:`${m}`).join(",");return this.url.searchParams.append(u,`in.(${h})`),this}contains(u,f){return typeof f=="string"?this.url.searchParams.append(u,`cs.${f}`):Array.isArray(f)?this.url.searchParams.append(u,`cs.{${f.join(",")}}`):this.url.searchParams.append(u,`cs.${JSON.stringify(f)}`),this}containedBy(u,f){return typeof f=="string"?this.url.searchParams.append(u,`cd.${f}`):Array.isArray(f)?this.url.searchParams.append(u,`cd.{${f.join(",")}}`):this.url.searchParams.append(u,`cd.${JSON.stringify(f)}`),this}rangeGt(u,f){return this.url.searchParams.append(u,`sr.${f}`),this}rangeGte(u,f){return this.url.searchParams.append(u,`nxl.${f}`),this}rangeLt(u,f){return this.url.searchParams.append(u,`sl.${f}`),this}rangeLte(u,f){return this.url.searchParams.append(u,`nxr.${f}`),this}rangeAdjacent(u,f){return this.url.searchParams.append(u,`adj.${f}`),this}overlaps(u,f){return typeof f=="string"?this.url.searchParams.append(u,`ov.${f}`):this.url.searchParams.append(u,`ov.{${f.join(",")}}`),this}textSearch(u,f,{config:h,type:m}={}){let p="";m==="plain"?p="pl":m==="phrase"?p="ph":m==="websearch"&&(p="w");const g=h===void 0?"":`(${h})`;return this.url.searchParams.append(u,`${p}fts${g}.${f}`),this}match(u){return Object.entries(u).forEach(([f,h])=>{this.url.searchParams.append(f,`eq.${h}`)}),this}not(u,f,h){return this.url.searchParams.append(u,`not.${f}.${h}`),this}or(u,{foreignTable:f,referencedTable:h=f}={}){const m=h?`${h}.or`:"or";return this.url.searchParams.append(m,`(${u})`),this}filter(u,f,h){return this.url.searchParams.append(u,`${f}.${h}`),this}}return ui.default=r,ui}var f0;function yg(){if(f0)return si;f0=1;var l=si&&si.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(si,"__esModule",{value:!0});const a=l(Hc());class r{constructor(u,{headers:f={},schema:h,fetch:m}){this.url=u,this.headers=f,this.schema=h,this.fetch=m}select(u,{head:f=!1,count:h}={}){const m=f?"HEAD":"GET";let p=!1;const g=(u??"*").split("").map(v=>/\s/.test(v)&&!p?"":(v==='"'&&(p=!p),v)).join("");return this.url.searchParams.set("select",g),h&&(this.headers.Prefer=`count=${h}`),new a.default({method:m,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(u,{count:f,defaultToNull:h=!0}={}){const m="POST",p=[];if(this.headers.Prefer&&p.push(this.headers.Prefer),f&&p.push(`count=${f}`),h||p.push("missing=default"),this.headers.Prefer=p.join(","),Array.isArray(u)){const g=u.reduce((v,_)=>v.concat(Object.keys(_)),[]);if(g.length>0){const v=[...new Set(g)].map(_=>`"${_}"`);this.url.searchParams.set("columns",v.join(","))}}return new a.default({method:m,url:this.url,headers:this.headers,schema:this.schema,body:u,fetch:this.fetch,allowEmpty:!1})}upsert(u,{onConflict:f,ignoreDuplicates:h=!1,count:m,defaultToNull:p=!0}={}){const g="POST",v=[`resolution=${h?"ignore":"merge"}-duplicates`];if(f!==void 0&&this.url.searchParams.set("on_conflict",f),this.headers.Prefer&&v.push(this.headers.Prefer),m&&v.push(`count=${m}`),p||v.push("missing=default"),this.headers.Prefer=v.join(","),Array.isArray(u)){const _=u.reduce((x,T)=>x.concat(Object.keys(T)),[]);if(_.length>0){const x=[...new Set(_)].map(T=>`"${T}"`);this.url.searchParams.set("columns",x.join(","))}}return new a.default({method:g,url:this.url,headers:this.headers,schema:this.schema,body:u,fetch:this.fetch,allowEmpty:!1})}update(u,{count:f}={}){const h="PATCH",m=[];return this.headers.Prefer&&m.push(this.headers.Prefer),f&&m.push(`count=${f}`),this.headers.Prefer=m.join(","),new a.default({method:h,url:this.url,headers:this.headers,schema:this.schema,body:u,fetch:this.fetch,allowEmpty:!1})}delete({count:u}={}){const f="DELETE",h=[];return u&&h.push(`count=${u}`),this.headers.Prefer&&h.unshift(this.headers.Prefer),this.headers.Prefer=h.join(","),new a.default({method:f,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}return si.default=r,si}var Sr={},wr={},h0;function t1(){return h0||(h0=1,Object.defineProperty(wr,"__esModule",{value:!0}),wr.version=void 0,wr.version="0.0.0-automated"),wr}var d0;function n1(){if(d0)return Sr;d0=1,Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.DEFAULT_HEADERS=void 0;const l=t1();return Sr.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${l.version}`},Sr}var p0;function a1(){if(p0)return oi;p0=1;var l=oi&&oi.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(oi,"__esModule",{value:!0});const a=l(yg()),r=l(Hc()),s=n1();class u{constructor(h,{headers:m={},schema:p,fetch:g}={}){this.url=h,this.headers=Object.assign(Object.assign({},s.DEFAULT_HEADERS),m),this.schemaName=p,this.fetch=g}from(h){const m=new URL(`${this.url}/${h}`);return new a.default(m,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(h){return new u(this.url,{headers:this.headers,schema:h,fetch:this.fetch})}rpc(h,m={},{head:p=!1,get:g=!1,count:v}={}){let _;const x=new URL(`${this.url}/rpc/${h}`);let T;p||g?(_=p?"HEAD":"GET",Object.entries(m).filter(([k,A])=>A!==void 0).map(([k,A])=>[k,Array.isArray(A)?`{${A.join(",")}}`:`${A}`]).forEach(([k,A])=>{x.searchParams.append(k,A)})):(_="POST",T=m);const w=Object.assign({},this.headers);return v&&(w.Prefer=`count=${v}`),new r.default({method:_,url:x,headers:w,schema:this.schemaName,body:T,fetch:this.fetch,allowEmpty:!1})}}return oi.default=u,oi}var g0;function i1(){if(g0)return Je;g0=1;var l=Je&&Je.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(Je,"__esModule",{value:!0}),Je.PostgrestError=Je.PostgrestBuilder=Je.PostgrestTransformBuilder=Je.PostgrestFilterBuilder=Je.PostgrestQueryBuilder=Je.PostgrestClient=void 0;const a=l(a1());Je.PostgrestClient=a.default;const r=l(yg());Je.PostgrestQueryBuilder=r.default;const s=l(Hc());Je.PostgrestFilterBuilder=s.default;const u=l(bg());Je.PostgrestTransformBuilder=u.default;const f=l(vg());Je.PostgrestBuilder=f.default;const h=l(mg());return Je.PostgrestError=h.default,Je.default={PostgrestClient:a.default,PostgrestQueryBuilder:r.default,PostgrestFilterBuilder:s.default,PostgrestTransformBuilder:u.default,PostgrestBuilder:f.default,PostgrestError:h.default},Je}var r1=i1();const l1=tg(r1),{PostgrestClient:o1,PostgrestQueryBuilder:US,PostgrestFilterBuilder:zS,PostgrestTransformBuilder:NS,PostgrestBuilder:qS,PostgrestError:LS}=l1;let _c;typeof window>"u"?_c=require("ws"):_c=window.WebSocket;const s1="2.11.10",u1={"X-Client-Info":`realtime-js/${s1}`},c1="1.0.0",_g=1e4,f1=1e3;var yi;(function(l){l[l.connecting=0]="connecting",l[l.open=1]="open",l[l.closing=2]="closing",l[l.closed=3]="closed"})(yi||(yi={}));var lt;(function(l){l.closed="closed",l.errored="errored",l.joined="joined",l.joining="joining",l.leaving="leaving"})(lt||(lt={}));var Pt;(function(l){l.close="phx_close",l.error="phx_error",l.join="phx_join",l.reply="phx_reply",l.leave="phx_leave",l.access_token="access_token"})(Pt||(Pt={}));var xc;(function(l){l.websocket="websocket"})(xc||(xc={}));var ba;(function(l){l.Connecting="connecting",l.Open="open",l.Closing="closing",l.Closed="closed"})(ba||(ba={}));class h1{constructor(){this.HEADER_LENGTH=1}decode(a,r){return a.constructor===ArrayBuffer?r(this._binaryDecode(a)):r(typeof a=="string"?JSON.parse(a):{})}_binaryDecode(a){const r=new DataView(a),s=new TextDecoder;return this._decodeBroadcast(a,r,s)}_decodeBroadcast(a,r,s){const u=r.getUint8(1),f=r.getUint8(2);let h=this.HEADER_LENGTH+2;const m=s.decode(a.slice(h,h+u));h=h+u;const p=s.decode(a.slice(h,h+f));h=h+f;const g=JSON.parse(s.decode(a.slice(h,a.byteLength)));return{ref:null,topic:m,event:p,payload:g}}}class xg{constructor(a,r){this.callback=a,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=a,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var je;(function(l){l.abstime="abstime",l.bool="bool",l.date="date",l.daterange="daterange",l.float4="float4",l.float8="float8",l.int2="int2",l.int4="int4",l.int4range="int4range",l.int8="int8",l.int8range="int8range",l.json="json",l.jsonb="jsonb",l.money="money",l.numeric="numeric",l.oid="oid",l.reltime="reltime",l.text="text",l.time="time",l.timestamp="timestamp",l.timestamptz="timestamptz",l.timetz="timetz",l.tsrange="tsrange",l.tstzrange="tstzrange"})(je||(je={}));const m0=(l,a,r={})=>{var s;const u=(s=r.skipTypes)!==null&&s!==void 0?s:[];return Object.keys(a).reduce((f,h)=>(f[h]=d1(h,l,a,u),f),{})},d1=(l,a,r,s)=>{const u=a.find(m=>m.name===l),f=u==null?void 0:u.type,h=r[l];return f&&!s.includes(f)?Sg(f,h):Sc(h)},Sg=(l,a)=>{if(l.charAt(0)==="_"){const r=l.slice(1,l.length);return v1(a,r)}switch(l){case je.bool:return p1(a);case je.float4:case je.float8:case je.int2:case je.int4:case je.int8:case je.numeric:case je.oid:return g1(a);case je.json:case je.jsonb:return m1(a);case je.timestamp:return b1(a);case je.abstime:case je.date:case je.daterange:case je.int4range:case je.int8range:case je.money:case je.reltime:case je.text:case je.time:case je.timestamptz:case je.timetz:case je.tsrange:case je.tstzrange:return Sc(a);default:return Sc(a)}},Sc=l=>l,p1=l=>{switch(l){case"t":return!0;case"f":return!1;default:return l}},g1=l=>{if(typeof l=="string"){const a=parseFloat(l);if(!Number.isNaN(a))return a}return l},m1=l=>{if(typeof l=="string")try{return JSON.parse(l)}catch(a){return console.log(`JSON parse error: ${a}`),l}return l},v1=(l,a)=>{if(typeof l!="string")return l;const r=l.length-1,s=l[r];if(l[0]==="{"&&s==="}"){let f;const h=l.slice(1,r);try{f=JSON.parse("["+h+"]")}catch{f=h?h.split(","):[]}return f.map(m=>Sg(a,m))}return l},b1=l=>typeof l=="string"?l.replace(" ","T"):l,wg=l=>{let a=l;return a=a.replace(/^ws/i,"http"),a=a.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),a.replace(/\/+$/,"")};class rc{constructor(a,r,s={},u=_g){this.channel=a,this.event=r,this.payload=s,this.timeout=u,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(a){this.timeout=a,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(a){this.payload=Object.assign(Object.assign({},this.payload),a)}receive(a,r){var s;return this._hasReceived(a)&&r((s=this.receivedResp)===null||s===void 0?void 0:s.response),this.recHooks.push({status:a,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const a=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},a),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(a,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:a,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:a,response:r}){this.recHooks.filter(s=>s.status===a).forEach(s=>s.callback(r))}_hasReceived(a){return this.receivedResp&&this.receivedResp.status===a}}var v0;(function(l){l.SYNC="sync",l.JOIN="join",l.LEAVE="leave"})(v0||(v0={}));class jr{constructor(a,r){this.channel=a,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},u=>{const{onJoin:f,onLeave:h,onSync:m}=this.caller;this.joinRef=this.channel._joinRef(),this.state=jr.syncState(this.state,u,f,h),this.pendingDiffs.forEach(p=>{this.state=jr.syncDiff(this.state,p,f,h)}),this.pendingDiffs=[],m()}),this.channel._on(s.diff,{},u=>{const{onJoin:f,onLeave:h,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(u):(this.state=jr.syncDiff(this.state,u,f,h),m())}),this.onJoin((u,f,h)=>{this.channel._trigger("presence",{event:"join",key:u,currentPresences:f,newPresences:h})}),this.onLeave((u,f,h)=>{this.channel._trigger("presence",{event:"leave",key:u,currentPresences:f,leftPresences:h})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(a,r,s,u){const f=this.cloneDeep(a),h=this.transformState(r),m={},p={};return this.map(f,(g,v)=>{h[g]||(p[g]=v)}),this.map(h,(g,v)=>{const _=f[g];if(_){const x=v.map(A=>A.presence_ref),T=_.map(A=>A.presence_ref),w=v.filter(A=>T.indexOf(A.presence_ref)<0),k=_.filter(A=>x.indexOf(A.presence_ref)<0);w.length>0&&(m[g]=w),k.length>0&&(p[g]=k)}else m[g]=v}),this.syncDiff(f,{joins:m,leaves:p},s,u)}static syncDiff(a,r,s,u){const{joins:f,leaves:h}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return s||(s=()=>{}),u||(u=()=>{}),this.map(f,(m,p)=>{var g;const v=(g=a[m])!==null&&g!==void 0?g:[];if(a[m]=this.cloneDeep(p),v.length>0){const _=a[m].map(T=>T.presence_ref),x=v.filter(T=>_.indexOf(T.presence_ref)<0);a[m].unshift(...x)}s(m,v,p)}),this.map(h,(m,p)=>{let g=a[m];if(!g)return;const v=p.map(_=>_.presence_ref);g=g.filter(_=>v.indexOf(_.presence_ref)<0),a[m]=g,u(m,g,p),g.length===0&&delete a[m]}),a}static map(a,r){return Object.getOwnPropertyNames(a).map(s=>r(s,a[s]))}static transformState(a){return a=this.cloneDeep(a),Object.getOwnPropertyNames(a).reduce((r,s)=>{const u=a[s];return"metas"in u?r[s]=u.metas.map(f=>(f.presence_ref=f.phx_ref,delete f.phx_ref,delete f.phx_ref_prev,f)):r[s]=u,r},{})}static cloneDeep(a){return JSON.parse(JSON.stringify(a))}onJoin(a){this.caller.onJoin=a}onLeave(a){this.caller.onLeave=a}onSync(a){this.caller.onSync=a}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var b0;(function(l){l.ALL="*",l.INSERT="INSERT",l.UPDATE="UPDATE",l.DELETE="DELETE"})(b0||(b0={}));var y0;(function(l){l.BROADCAST="broadcast",l.PRESENCE="presence",l.POSTGRES_CHANGES="postgres_changes",l.SYSTEM="system"})(y0||(y0={}));var hn;(function(l){l.SUBSCRIBED="SUBSCRIBED",l.TIMED_OUT="TIMED_OUT",l.CLOSED="CLOSED",l.CHANNEL_ERROR="CHANNEL_ERROR"})(hn||(hn={}));class Gc{constructor(a,r={config:{}},s){this.topic=a,this.params=r,this.socket=s,this.bindings={},this.state=lt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=a.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new rc(this,Pt.join,this.params,this.timeout),this.rejoinTimer=new xg(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=lt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(u=>u.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=lt.closed,this.socket._remove(this)}),this._onError(u=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,u),this.state=lt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=lt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Pt.reply,{},(u,f)=>{this._trigger(this._replyEventName(f),u)}),this.presence=new jr(this),this.broadcastEndpointURL=wg(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(a,r=this.timeout){var s,u;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:f,presence:h,private:m}}=this.params;this._onError(v=>a==null?void 0:a(hn.CHANNEL_ERROR,v)),this._onClose(()=>a==null?void 0:a(hn.CLOSED));const p={},g={broadcast:f,presence:h,postgres_changes:(u=(s=this.bindings.postgres_changes)===null||s===void 0?void 0:s.map(v=>v.filter))!==null&&u!==void 0?u:[],private:m};this.socket.accessTokenValue&&(p.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:g},p)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:v})=>{var _;if(this.socket.setAuth(),v===void 0){a==null||a(hn.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,T=(_=x==null?void 0:x.length)!==null&&_!==void 0?_:0,w=[];for(let k=0;k<T;k++){const A=x[k],{filter:{event:P,schema:X,table:z,filter:$}}=A,Y=v&&v[k];if(Y&&Y.event===P&&Y.schema===X&&Y.table===z&&Y.filter===$)w.push(Object.assign(Object.assign({},A),{id:Y.id}));else{this.unsubscribe(),this.state=lt.errored,a==null||a(hn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=w,a&&a(hn.SUBSCRIBED);return}}).receive("error",v=>{this.state=lt.errored,a==null||a(hn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(v).join(", ")||"error")))}).receive("timeout",()=>{a==null||a(hn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(a,r={}){return await this.send({type:"presence",event:"track",payload:a},r.timeout||this.timeout)}async untrack(a={}){return await this.send({type:"presence",event:"untrack"},a)}on(a,r,s){return this._on(a,r,s)}async send(a,r={}){var s,u;if(!this._canPush()&&a.type==="broadcast"){const{event:f,payload:h}=a,p={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:f,payload:h,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(s=r.timeout)!==null&&s!==void 0?s:this.timeout);return await((u=g.body)===null||u===void 0?void 0:u.cancel()),g.ok?"ok":"error"}catch(g){return g.name==="AbortError"?"timed out":"error"}}else return new Promise(f=>{var h,m,p;const g=this._push(a.type,a,r.timeout||this.timeout);a.type==="broadcast"&&!(!((p=(m=(h=this.params)===null||h===void 0?void 0:h.config)===null||m===void 0?void 0:m.broadcast)===null||p===void 0)&&p.ack)&&f("ok"),g.receive("ok",()=>f("ok")),g.receive("error",()=>f("error")),g.receive("timeout",()=>f("timed out"))})}updateJoinPayload(a){this.joinPush.updatePayload(a)}unsubscribe(a=this.timeout){this.state=lt.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Pt.close,"leave",this._joinRef())};return this.joinPush.destroy(),new Promise(s=>{const u=new rc(this,Pt.leave,{},a);u.receive("ok",()=>{r(),s("ok")}).receive("timeout",()=>{r(),s("timed out")}).receive("error",()=>{s("error")}),u.send(),this._canPush()||u.trigger("ok",{})})}teardown(){this.pushBuffer.forEach(a=>a.destroy()),this.rejoinTimer&&clearTimeout(this.rejoinTimer.timer),this.joinPush.destroy()}async _fetchWithTimeout(a,r,s){const u=new AbortController,f=setTimeout(()=>u.abort(),s),h=await this.socket.fetch(a,Object.assign(Object.assign({},r),{signal:u.signal}));return clearTimeout(f),h}_push(a,r,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${a}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let u=new rc(this,a,r,s);return this._canPush()?u.send():(u.startTimeout(),this.pushBuffer.push(u)),u}_onMessage(a,r,s){return r}_isMember(a){return this.topic===a}_joinRef(){return this.joinPush.ref}_trigger(a,r,s){var u,f;const h=a.toLocaleLowerCase(),{close:m,error:p,leave:g,join:v}=Pt;if(s&&[m,p,g,v].indexOf(h)>=0&&s!==this._joinRef())return;let x=this._onMessage(h,r,s);if(r&&!x)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(h)?(u=this.bindings.postgres_changes)===null||u===void 0||u.filter(T=>{var w,k,A;return((w=T.filter)===null||w===void 0?void 0:w.event)==="*"||((A=(k=T.filter)===null||k===void 0?void 0:k.event)===null||A===void 0?void 0:A.toLocaleLowerCase())===h}).map(T=>T.callback(x,s)):(f=this.bindings[h])===null||f===void 0||f.filter(T=>{var w,k,A,P,X,z;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in T){const $=T.id,Y=(w=T.filter)===null||w===void 0?void 0:w.event;return $&&((k=r.ids)===null||k===void 0?void 0:k.includes($))&&(Y==="*"||(Y==null?void 0:Y.toLocaleLowerCase())===((A=r.data)===null||A===void 0?void 0:A.type.toLocaleLowerCase()))}else{const $=(X=(P=T==null?void 0:T.filter)===null||P===void 0?void 0:P.event)===null||X===void 0?void 0:X.toLocaleLowerCase();return $==="*"||$===((z=r==null?void 0:r.event)===null||z===void 0?void 0:z.toLocaleLowerCase())}else return T.type.toLocaleLowerCase()===h}).map(T=>{if(typeof x=="object"&&"ids"in x){const w=x.data,{schema:k,table:A,commit_timestamp:P,type:X,errors:z}=w;x=Object.assign(Object.assign({},{schema:k,table:A,commit_timestamp:P,eventType:X,new:{},old:{},errors:z}),this._getPayloadRecords(w))}T.callback(x,s)})}_isClosed(){return this.state===lt.closed}_isJoined(){return this.state===lt.joined}_isJoining(){return this.state===lt.joining}_isLeaving(){return this.state===lt.leaving}_replyEventName(a){return`chan_reply_${a}`}_on(a,r,s){const u=a.toLocaleLowerCase(),f={type:u,filter:r,callback:s};return this.bindings[u]?this.bindings[u].push(f):this.bindings[u]=[f],this}_off(a,r){const s=a.toLocaleLowerCase();return this.bindings[s]=this.bindings[s].filter(u=>{var f;return!(((f=u.type)===null||f===void 0?void 0:f.toLocaleLowerCase())===s&&Gc.isEqual(u.filter,r))}),this}static isEqual(a,r){if(Object.keys(a).length!==Object.keys(r).length)return!1;for(const s in a)if(a[s]!==r[s])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(a){this._on(Pt.close,{},a)}_onError(a){this._on(Pt.error,{},r=>a(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(a=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=lt.joining,this.joinPush.resend(a))}_getPayloadRecords(a){const r={new:{},old:{}};return(a.type==="INSERT"||a.type==="UPDATE")&&(r.new=m0(a.columns,a.record)),(a.type==="UPDATE"||a.type==="DELETE")&&(r.old=m0(a.columns,a.old_record)),r}}const _0=()=>{},y1=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class _1{constructor(a,r){var s;this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers=u1,this.params={},this.timeout=_g,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=_0,this.ref=0,this.logger=_0,this.conn=null,this.sendBuffer=[],this.serializer=new h1,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=f=>{let h;return f?h=f:typeof fetch>"u"?h=(...m)=>Br(async()=>{const{default:p}=await Promise.resolve().then(()=>Si);return{default:p}},void 0).then(({default:p})=>p(...m)):h=fetch,(...m)=>h(...m)},this.endPoint=`${a}/${xc.websocket}`,this.httpEndpoint=wg(a),r!=null&&r.transport?this.transport=r.transport:this.transport=null,r!=null&&r.params&&(this.params=r.params),r!=null&&r.headers&&(this.headers=Object.assign(Object.assign({},this.headers),r.headers)),r!=null&&r.timeout&&(this.timeout=r.timeout),r!=null&&r.logger&&(this.logger=r.logger),(r!=null&&r.logLevel||r!=null&&r.log_level)&&(this.logLevel=r.logLevel||r.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),r!=null&&r.heartbeatIntervalMs&&(this.heartbeatIntervalMs=r.heartbeatIntervalMs);const u=(s=r==null?void 0:r.params)===null||s===void 0?void 0:s.apikey;if(u&&(this.accessTokenValue=u,this.apiKey=u),this.reconnectAfterMs=r!=null&&r.reconnectAfterMs?r.reconnectAfterMs:f=>[1e3,2e3,5e3,1e4][f-1]||1e4,this.encode=r!=null&&r.encode?r.encode:(f,h)=>h(JSON.stringify(f)),this.decode=r!=null&&r.decode?r.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new xg(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(r==null?void 0:r.fetch),r!=null&&r.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(r==null?void 0:r.worker)||!1,this.workerUrl=r==null?void 0:r.workerUrl}this.accessToken=(r==null?void 0:r.accessToken)||null}connect(){if(!this.conn){if(this.transport||(this.transport=_c),this.transport){typeof window<"u"&&this.transport===window.WebSocket?this.conn=new this.transport(this.endpointURL()):this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection();return}this.conn=new x1(this.endpointURL(),void 0,{close:()=>{this.conn=null}})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:c1}))}disconnect(a,r){this.conn&&(this.conn.onclose=function(){},a?this.conn.close(a,r??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset(),this.channels.forEach(s=>s.teardown()))}getChannels(){return this.channels}async removeChannel(a){const r=await a.unsubscribe();return this.channels=this.channels.filter(s=>s._joinRef!==a._joinRef),this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const a=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),a}log(a,r,s){this.logger(a,r,s)}connectionState(){switch(this.conn&&this.conn.readyState){case yi.connecting:return ba.Connecting;case yi.open:return ba.Open;case yi.closing:return ba.Closing;default:return ba.Closed}}isConnected(){return this.connectionState()===ba.Open}channel(a,r={config:{}}){const s=`realtime:${a}`,u=this.getChannels().find(f=>f.topic===s);if(u)return u;{const f=new Gc(`realtime:${a}`,r,this);return this.channels.push(f),f}}push(a){const{topic:r,event:s,payload:u,ref:f}=a,h=()=>{this.encode(a,m=>{var p;(p=this.conn)===null||p===void 0||p.send(m)})};this.log("push",`${r} ${s} (${f})`,u),this.isConnected()?h():this.sendBuffer.push(h)}async setAuth(a=null){let r=a||this.accessToken&&await this.accessToken()||this.accessTokenValue;this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(s=>{r&&s.updateJoinPayload({access_token:r,version:this.headers&&this.headers["X-Client-Info"]}),s.joinedOnce&&s._isJoined()&&s._push(Pt.access_token,{access_token:r})}))}async sendHeartbeat(){var a;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),(a=this.conn)===null||a===void 0||a.close(f1,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),await this.setAuth()}onHeartbeat(a){this.heartbeatCallback=a}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(a=>a()),this.sendBuffer=[])}_makeRef(){let a=this.ref+1;return a===this.ref?this.ref=0:this.ref=a,this.ref.toString()}_leaveOpenTopic(a){let r=this.channels.find(s=>s.topic===a&&(s._isJoined()||s._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${a}"`),r.unsubscribe())}_remove(a){this.channels=this.channels.filter(r=>r.topic!==a.topic)}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=a=>this._onConnError(a),this.conn.onmessage=a=>this._onConnMessage(a),this.conn.onclose=a=>this._onConnClose(a))}_onConnMessage(a){this.decode(a.data,r=>{let{topic:s,event:u,payload:f,ref:h}=r;s==="phoenix"&&u==="phx_reply"&&this.heartbeatCallback(r.payload.status=="ok"?"ok":"error"),h&&h===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${f.status||""} ${s} ${u} ${h&&"("+h+")"||""}`,f),Array.from(this.channels).filter(m=>m._isMember(s)).forEach(m=>m._trigger(u,f,h)),this.stateChangeCallbacks.message.forEach(m=>m(r))})}_onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const a=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(a),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this.workerRef.terminate()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(a=>a())}_onConnClose(a){this.log("transport","close",a),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(r=>r(a))}_onConnError(a){this.log("transport",a.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(r=>r(a))}_triggerChanError(){this.channels.forEach(a=>a._trigger(Pt.error))}_appendParams(a,r){if(Object.keys(r).length===0)return a;const s=a.match(/\?/)?"&":"?",u=new URLSearchParams(r);return`${a}${s}${u}`}_workerObjectUrl(a){let r;if(a)r=a;else{const s=new Blob([y1],{type:"application/javascript"});r=URL.createObjectURL(s)}return r}}class x1{constructor(a,r,s){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=yi.connecting,this.send=()=>{},this.url=null,this.url=a,this.close=s.close}}class $c extends Error{constructor(a){super(a),this.__isStorageError=!0,this.name="StorageError"}}function Ie(l){return typeof l=="object"&&l!==null&&"__isStorageError"in l}class S1 extends $c{constructor(a,r){super(a),this.name="StorageApiError",this.status=r}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class wc extends $c{constructor(a,r){super(a),this.name="StorageUnknownError",this.originalError=r}}var w1=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};const Og=l=>{let a;return l?a=l:typeof fetch>"u"?a=(...r)=>Br(async()=>{const{default:s}=await Promise.resolve().then(()=>Si);return{default:s}},void 0).then(({default:s})=>s(...r)):a=fetch,(...r)=>a(...r)},O1=()=>w1(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Br(()=>Promise.resolve().then(()=>Si),void 0)).Response:Response}),Oc=l=>{if(Array.isArray(l))return l.map(r=>Oc(r));if(typeof l=="function"||l!==Object(l))return l;const a={};return Object.entries(l).forEach(([r,s])=>{const u=r.replace(/([-_][a-z])/gi,f=>f.toUpperCase().replace(/[-_]/g,""));a[u]=Oc(s)}),a};var xa=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};const lc=l=>l.msg||l.message||l.error_description||l.error||JSON.stringify(l),T1=(l,a,r)=>xa(void 0,void 0,void 0,function*(){const s=yield O1();l instanceof s&&!(r!=null&&r.noResolveJson)?l.json().then(u=>{a(new S1(lc(u),l.status||500))}).catch(u=>{a(new wc(lc(u),u))}):a(new wc(lc(l),l))}),E1=(l,a,r,s)=>{const u={method:l,headers:(a==null?void 0:a.headers)||{}};return l==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json"},a==null?void 0:a.headers),s&&(u.body=JSON.stringify(s)),Object.assign(Object.assign({},u),r))};function Pr(l,a,r,s,u,f){return xa(this,void 0,void 0,function*(){return new Promise((h,m)=>{l(r,E1(a,s,u,f)).then(p=>{if(!p.ok)throw p;return s!=null&&s.noResolveJson?p:p.json()}).then(p=>h(p)).catch(p=>T1(p,m,s))})})}function Eo(l,a,r,s){return xa(this,void 0,void 0,function*(){return Pr(l,"GET",a,r,s)})}function Yn(l,a,r,s,u){return xa(this,void 0,void 0,function*(){return Pr(l,"POST",a,s,u,r)})}function k1(l,a,r,s,u){return xa(this,void 0,void 0,function*(){return Pr(l,"PUT",a,s,u,r)})}function A1(l,a,r,s){return xa(this,void 0,void 0,function*(){return Pr(l,"HEAD",a,Object.assign(Object.assign({},r),{noResolveJson:!0}),s)})}function Tg(l,a,r,s,u){return xa(this,void 0,void 0,function*(){return Pr(l,"DELETE",a,s,u,r)})}var ht=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};const j1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},x0={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class R1{constructor(a,r={},s,u){this.url=a,this.headers=r,this.bucketId=s,this.fetch=Og(u)}uploadOrUpdate(a,r,s,u){return ht(this,void 0,void 0,function*(){try{let f;const h=Object.assign(Object.assign({},x0),u);let m=Object.assign(Object.assign({},this.headers),a==="POST"&&{"x-upsert":String(h.upsert)});const p=h.metadata;typeof Blob<"u"&&s instanceof Blob?(f=new FormData,f.append("cacheControl",h.cacheControl),p&&f.append("metadata",this.encodeMetadata(p)),f.append("",s)):typeof FormData<"u"&&s instanceof FormData?(f=s,f.append("cacheControl",h.cacheControl),p&&f.append("metadata",this.encodeMetadata(p))):(f=s,m["cache-control"]=`max-age=${h.cacheControl}`,m["content-type"]=h.contentType,p&&(m["x-metadata"]=this.toBase64(this.encodeMetadata(p)))),u!=null&&u.headers&&(m=Object.assign(Object.assign({},m),u.headers));const g=this._removeEmptyFolders(r),v=this._getFinalPath(g),_=yield this.fetch(`${this.url}/object/${v}`,Object.assign({method:a,body:f,headers:m},h!=null&&h.duplex?{duplex:h.duplex}:{})),x=yield _.json();return _.ok?{data:{path:g,id:x.Id,fullPath:x.Key},error:null}:{data:null,error:x}}catch(f){if(Ie(f))return{data:null,error:f};throw f}})}upload(a,r,s){return ht(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",a,r,s)})}uploadToSignedUrl(a,r,s,u){return ht(this,void 0,void 0,function*(){const f=this._removeEmptyFolders(a),h=this._getFinalPath(f),m=new URL(this.url+`/object/upload/sign/${h}`);m.searchParams.set("token",r);try{let p;const g=Object.assign({upsert:x0.upsert},u),v=Object.assign(Object.assign({},this.headers),{"x-upsert":String(g.upsert)});typeof Blob<"u"&&s instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),p.append("",s)):typeof FormData<"u"&&s instanceof FormData?(p=s,p.append("cacheControl",g.cacheControl)):(p=s,v["cache-control"]=`max-age=${g.cacheControl}`,v["content-type"]=g.contentType);const _=yield this.fetch(m.toString(),{method:"PUT",body:p,headers:v}),x=yield _.json();return _.ok?{data:{path:f,fullPath:x.Key},error:null}:{data:null,error:x}}catch(p){if(Ie(p))return{data:null,error:p};throw p}})}createSignedUploadUrl(a,r){return ht(this,void 0,void 0,function*(){try{let s=this._getFinalPath(a);const u=Object.assign({},this.headers);r!=null&&r.upsert&&(u["x-upsert"]="true");const f=yield Yn(this.fetch,`${this.url}/object/upload/sign/${s}`,{},{headers:u}),h=new URL(this.url+f.url),m=h.searchParams.get("token");if(!m)throw new $c("No token returned by API");return{data:{signedUrl:h.toString(),path:a,token:m},error:null}}catch(s){if(Ie(s))return{data:null,error:s};throw s}})}update(a,r,s){return ht(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",a,r,s)})}move(a,r,s){return ht(this,void 0,void 0,function*(){try{return{data:yield Yn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:a,destinationKey:r,destinationBucket:s==null?void 0:s.destinationBucket},{headers:this.headers}),error:null}}catch(u){if(Ie(u))return{data:null,error:u};throw u}})}copy(a,r,s){return ht(this,void 0,void 0,function*(){try{return{data:{path:(yield Yn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:a,destinationKey:r,destinationBucket:s==null?void 0:s.destinationBucket},{headers:this.headers})).Key},error:null}}catch(u){if(Ie(u))return{data:null,error:u};throw u}})}createSignedUrl(a,r,s){return ht(this,void 0,void 0,function*(){try{let u=this._getFinalPath(a),f=yield Yn(this.fetch,`${this.url}/object/sign/${u}`,Object.assign({expiresIn:r},s!=null&&s.transform?{transform:s.transform}:{}),{headers:this.headers});const h=s!=null&&s.download?`&download=${s.download===!0?"":s.download}`:"";return f={signedUrl:encodeURI(`${this.url}${f.signedURL}${h}`)},{data:f,error:null}}catch(u){if(Ie(u))return{data:null,error:u};throw u}})}createSignedUrls(a,r,s){return ht(this,void 0,void 0,function*(){try{const u=yield Yn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:r,paths:a},{headers:this.headers}),f=s!=null&&s.download?`&download=${s.download===!0?"":s.download}`:"";return{data:u.map(h=>Object.assign(Object.assign({},h),{signedUrl:h.signedURL?encodeURI(`${this.url}${h.signedURL}${f}`):null})),error:null}}catch(u){if(Ie(u))return{data:null,error:u};throw u}})}download(a,r){return ht(this,void 0,void 0,function*(){const u=typeof(r==null?void 0:r.transform)<"u"?"render/image/authenticated":"object",f=this.transformOptsToQueryString((r==null?void 0:r.transform)||{}),h=f?`?${f}`:"";try{const m=this._getFinalPath(a);return{data:yield(yield Eo(this.fetch,`${this.url}/${u}/${m}${h}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(m){if(Ie(m))return{data:null,error:m};throw m}})}info(a){return ht(this,void 0,void 0,function*(){const r=this._getFinalPath(a);try{const s=yield Eo(this.fetch,`${this.url}/object/info/${r}`,{headers:this.headers});return{data:Oc(s),error:null}}catch(s){if(Ie(s))return{data:null,error:s};throw s}})}exists(a){return ht(this,void 0,void 0,function*(){const r=this._getFinalPath(a);try{return yield A1(this.fetch,`${this.url}/object/${r}`,{headers:this.headers}),{data:!0,error:null}}catch(s){if(Ie(s)&&s instanceof wc){const u=s.originalError;if([400,404].includes(u==null?void 0:u.status))return{data:!1,error:s}}throw s}})}getPublicUrl(a,r){const s=this._getFinalPath(a),u=[],f=r!=null&&r.download?`download=${r.download===!0?"":r.download}`:"";f!==""&&u.push(f);const m=typeof(r==null?void 0:r.transform)<"u"?"render/image":"object",p=this.transformOptsToQueryString((r==null?void 0:r.transform)||{});p!==""&&u.push(p);let g=u.join("&");return g!==""&&(g=`?${g}`),{data:{publicUrl:encodeURI(`${this.url}/${m}/public/${s}${g}`)}}}remove(a){return ht(this,void 0,void 0,function*(){try{return{data:yield Tg(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:a},{headers:this.headers}),error:null}}catch(r){if(Ie(r))return{data:null,error:r};throw r}})}list(a,r,s){return ht(this,void 0,void 0,function*(){try{const u=Object.assign(Object.assign(Object.assign({},j1),r),{prefix:a||""});return{data:yield Yn(this.fetch,`${this.url}/object/list/${this.bucketId}`,u,{headers:this.headers},s),error:null}}catch(u){if(Ie(u))return{data:null,error:u};throw u}})}encodeMetadata(a){return JSON.stringify(a)}toBase64(a){return typeof Buffer<"u"?Buffer.from(a).toString("base64"):btoa(a)}_getFinalPath(a){return`${this.bucketId}/${a}`}_removeEmptyFolders(a){return a.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(a){const r=[];return a.width&&r.push(`width=${a.width}`),a.height&&r.push(`height=${a.height}`),a.resize&&r.push(`resize=${a.resize}`),a.format&&r.push(`format=${a.format}`),a.quality&&r.push(`quality=${a.quality}`),r.join("&")}}const C1="2.7.1",D1={"X-Client-Info":`storage-js/${C1}`};var hi=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};class M1{constructor(a,r={},s){this.url=a,this.headers=Object.assign(Object.assign({},D1),r),this.fetch=Og(s)}listBuckets(){return hi(this,void 0,void 0,function*(){try{return{data:yield Eo(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(a){if(Ie(a))return{data:null,error:a};throw a}})}getBucket(a){return hi(this,void 0,void 0,function*(){try{return{data:yield Eo(this.fetch,`${this.url}/bucket/${a}`,{headers:this.headers}),error:null}}catch(r){if(Ie(r))return{data:null,error:r};throw r}})}createBucket(a,r={public:!1}){return hi(this,void 0,void 0,function*(){try{return{data:yield Yn(this.fetch,`${this.url}/bucket`,{id:a,name:a,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(Ie(s))return{data:null,error:s};throw s}})}updateBucket(a,r){return hi(this,void 0,void 0,function*(){try{return{data:yield k1(this.fetch,`${this.url}/bucket/${a}`,{id:a,name:a,public:r.public,file_size_limit:r.fileSizeLimit,allowed_mime_types:r.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(Ie(s))return{data:null,error:s};throw s}})}emptyBucket(a){return hi(this,void 0,void 0,function*(){try{return{data:yield Yn(this.fetch,`${this.url}/bucket/${a}/empty`,{},{headers:this.headers}),error:null}}catch(r){if(Ie(r))return{data:null,error:r};throw r}})}deleteBucket(a){return hi(this,void 0,void 0,function*(){try{return{data:yield Tg(this.fetch,`${this.url}/bucket/${a}`,{},{headers:this.headers}),error:null}}catch(r){if(Ie(r))return{data:null,error:r};throw r}})}}class U1 extends M1{constructor(a,r={},s){super(a,r,s)}from(a){return new R1(this.url,this.headers,a,this.fetch)}}const z1="2.50.0";let kr="";typeof Deno<"u"?kr="deno":typeof document<"u"?kr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?kr="react-native":kr="node";const N1={"X-Client-Info":`supabase-js-${kr}/${z1}`},q1={headers:N1},L1={schema:"public"},B1={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},P1={};var H1=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};const G1=l=>{let a;return l?a=l:typeof fetch>"u"?a=pg:a=fetch,(...r)=>a(...r)},$1=()=>typeof Headers>"u"?gg:Headers,Y1=(l,a,r)=>{const s=G1(r),u=$1();return(f,h)=>H1(void 0,void 0,void 0,function*(){var m;const p=(m=yield a())!==null&&m!==void 0?m:l;let g=new u(h==null?void 0:h.headers);return g.has("apikey")||g.set("apikey",l),g.has("Authorization")||g.set("Authorization",`Bearer ${p}`),s(f,Object.assign(Object.assign({},h),{headers:g}))})};var X1=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};function Q1(l){return l.endsWith("/")?l:l+"/"}function V1(l,a){var r,s;const{db:u,auth:f,realtime:h,global:m}=l,{db:p,auth:g,realtime:v,global:_}=a,x={db:Object.assign(Object.assign({},p),u),auth:Object.assign(Object.assign({},g),f),realtime:Object.assign(Object.assign({},v),h),global:Object.assign(Object.assign(Object.assign({},_),m),{headers:Object.assign(Object.assign({},(r=_==null?void 0:_.headers)!==null&&r!==void 0?r:{}),(s=m==null?void 0:m.headers)!==null&&s!==void 0?s:{})}),accessToken:()=>X1(this,void 0,void 0,function*(){return""})};return l.accessToken?x.accessToken=l.accessToken:delete x.accessToken,x}const Eg="2.70.0",vi=30*1e3,Tc=3,oc=Tc*vi,Z1="http://localhost:9999",K1="supabase.auth.token",J1={"X-Client-Info":`gotrue-js/${Eg}`},Ec="X-Supabase-Api-Version",kg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},I1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,F1=6e5;class Yc extends Error{constructor(a,r,s){super(a),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=s}}function le(l){return typeof l=="object"&&l!==null&&"__isAuthError"in l}class W1 extends Yc{constructor(a,r,s){super(a,r,s),this.name="AuthApiError",this.status=r,this.code=s}}function e_(l){return le(l)&&l.name==="AuthApiError"}class Ag extends Yc{constructor(a,r){super(a),this.name="AuthUnknownError",this.originalError=r}}class Kn extends Yc{constructor(a,r,s,u){super(a,s,u),this.name=r,this.status=s}}class $n extends Kn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function t_(l){return le(l)&&l.name==="AuthSessionMissingError"}class uo extends Kn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class co extends Kn{constructor(a){super(a,"AuthInvalidCredentialsError",400,void 0)}}class fo extends Kn{constructor(a,r=null){super(a,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function n_(l){return le(l)&&l.name==="AuthImplicitGrantRedirectError"}class S0 extends Kn{constructor(a,r=null){super(a,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class kc extends Kn{constructor(a,r){super(a,"AuthRetryableFetchError",r,void 0)}}function sc(l){return le(l)&&l.name==="AuthRetryableFetchError"}class w0 extends Kn{constructor(a,r,s){super(a,"AuthWeakPasswordError",r,"weak_password"),this.reasons=s}}class Rr extends Kn{constructor(a){super(a,"AuthInvalidJwtError",400,"invalid_jwt")}}const ko="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),O0=` 	
\r=`.split(""),a_=(()=>{const l=new Array(128);for(let a=0;a<l.length;a+=1)l[a]=-1;for(let a=0;a<O0.length;a+=1)l[O0[a].charCodeAt(0)]=-2;for(let a=0;a<ko.length;a+=1)l[ko[a].charCodeAt(0)]=a;return l})();function T0(l,a,r){if(l!==null)for(a.queue=a.queue<<8|l,a.queuedBits+=8;a.queuedBits>=6;){const s=a.queue>>a.queuedBits-6&63;r(ko[s]),a.queuedBits-=6}else if(a.queuedBits>0)for(a.queue=a.queue<<6-a.queuedBits,a.queuedBits=6;a.queuedBits>=6;){const s=a.queue>>a.queuedBits-6&63;r(ko[s]),a.queuedBits-=6}}function jg(l,a,r){const s=a_[l];if(s>-1)for(a.queue=a.queue<<6|s,a.queuedBits+=6;a.queuedBits>=8;)r(a.queue>>a.queuedBits-8&255),a.queuedBits-=8;else{if(s===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(l)}"`)}}function E0(l){const a=[],r=h=>{a.push(String.fromCodePoint(h))},s={utf8seq:0,codepoint:0},u={queue:0,queuedBits:0},f=h=>{l_(h,s,r)};for(let h=0;h<l.length;h+=1)jg(l.charCodeAt(h),u,f);return a.join("")}function i_(l,a){if(l<=127){a(l);return}else if(l<=2047){a(192|l>>6),a(128|l&63);return}else if(l<=65535){a(224|l>>12),a(128|l>>6&63),a(128|l&63);return}else if(l<=1114111){a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63);return}throw new Error(`Unrecognized Unicode codepoint: ${l.toString(16)}`)}function r_(l,a){for(let r=0;r<l.length;r+=1){let s=l.charCodeAt(r);if(s>55295&&s<=56319){const u=(s-55296)*1024&65535;s=(l.charCodeAt(r+1)-56320&65535|u)+65536,r+=1}i_(s,a)}}function l_(l,a,r){if(a.utf8seq===0){if(l<=127){r(l);return}for(let s=1;s<6;s+=1)if((l>>7-s&1)===0){a.utf8seq=s;break}if(a.utf8seq===2)a.codepoint=l&31;else if(a.utf8seq===3)a.codepoint=l&15;else if(a.utf8seq===4)a.codepoint=l&7;else throw new Error("Invalid UTF-8 sequence");a.utf8seq-=1}else if(a.utf8seq>0){if(l<=127)throw new Error("Invalid UTF-8 sequence");a.codepoint=a.codepoint<<6|l&63,a.utf8seq-=1,a.utf8seq===0&&r(a.codepoint)}}function o_(l){const a=[],r={queue:0,queuedBits:0},s=u=>{a.push(u)};for(let u=0;u<l.length;u+=1)jg(l.charCodeAt(u),r,s);return new Uint8Array(a)}function s_(l){const a=[];return r_(l,r=>a.push(r)),new Uint8Array(a)}function u_(l){const a=[],r={queue:0,queuedBits:0},s=u=>{a.push(u)};return l.forEach(u=>T0(u,r,s)),T0(null,r,s),a.join("")}function c_(l){return Math.round(Date.now()/1e3)+l}function f_(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){const a=Math.random()*16|0;return(l=="x"?a:a&3|8).toString(16)})}const Lt=()=>typeof window<"u"&&typeof document<"u",ga={tested:!1,writable:!1},Cr=()=>{if(!Lt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ga.tested)return ga.writable;const l=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(l,l),globalThis.localStorage.removeItem(l),ga.tested=!0,ga.writable=!0}catch{ga.tested=!0,ga.writable=!1}return ga.writable};function h_(l){const a={},r=new URL(l);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((u,f)=>{a[f]=u})}catch{}return r.searchParams.forEach((s,u)=>{a[u]=s}),a}const Rg=l=>{let a;return l?a=l:typeof fetch>"u"?a=(...r)=>Br(async()=>{const{default:s}=await Promise.resolve().then(()=>Si);return{default:s}},void 0).then(({default:s})=>s(...r)):a=fetch,(...r)=>a(...r)},d_=l=>typeof l=="object"&&l!==null&&"status"in l&&"ok"in l&&"json"in l&&typeof l.json=="function",Cg=async(l,a,r)=>{await l.setItem(a,JSON.stringify(r))},ho=async(l,a)=>{const r=await l.getItem(a);if(!r)return null;try{return JSON.parse(r)}catch{return r}},po=async(l,a)=>{await l.removeItem(a)};class Mo{constructor(){this.promise=new Mo.promiseConstructor((a,r)=>{this.resolve=a,this.reject=r})}}Mo.promiseConstructor=Promise;function uc(l){const a=l.split(".");if(a.length!==3)throw new Rr("Invalid JWT structure");for(let s=0;s<a.length;s++)if(!I1.test(a[s]))throw new Rr("JWT not in base64url format");return{header:JSON.parse(E0(a[0])),payload:JSON.parse(E0(a[1])),signature:o_(a[2]),raw:{header:a[0],payload:a[1]}}}async function p_(l){return await new Promise(a=>{setTimeout(()=>a(null),l)})}function g_(l,a){return new Promise((s,u)=>{(async()=>{for(let f=0;f<1/0;f++)try{const h=await l(f);if(!a(f,null,h)){s(h);return}}catch(h){if(!a(f,h)){u(h);return}}})()})}function m_(l){return("0"+l.toString(16)).substr(-2)}function v_(){const a=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",s=r.length;let u="";for(let f=0;f<56;f++)u+=r.charAt(Math.floor(Math.random()*s));return u}return crypto.getRandomValues(a),Array.from(a,m_).join("")}async function b_(l){const r=new TextEncoder().encode(l),s=await crypto.subtle.digest("SHA-256",r),u=new Uint8Array(s);return Array.from(u).map(f=>String.fromCharCode(f)).join("")}async function y_(l){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),l;const r=await b_(l);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function di(l,a,r=!1){const s=v_();let u=s;r&&(u+="/PASSWORD_RECOVERY"),await Cg(l,`${a}-code-verifier`,u);const f=await y_(s);return[f,s===f?"plain":"s256"]}const __=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function x_(l){const a=l.headers.get(Ec);if(!a||!a.match(__))return null;try{return new Date(`${a}T00:00:00.0Z`)}catch{return null}}function S_(l){if(!l)throw new Error("Missing exp claim");const a=Math.floor(Date.now()/1e3);if(l<=a)throw new Error("JWT has expired")}function w_(l){switch(l){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const O_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function pi(l){if(!O_.test(l))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}var T_=function(l,a){var r={};for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&a.indexOf(s)<0&&(r[s]=l[s]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(l);u<s.length;u++)a.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(l,s[u])&&(r[s[u]]=l[s[u]]);return r};const va=l=>l.msg||l.message||l.error_description||l.error||JSON.stringify(l),E_=[502,503,504];async function k0(l){var a;if(!d_(l))throw new kc(va(l),0);if(E_.includes(l.status))throw new kc(va(l),l.status);let r;try{r=await l.json()}catch(f){throw new Ag(va(f),f)}let s;const u=x_(l);if(u&&u.getTime()>=kg["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?s=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(s=r.error_code),s){if(s==="weak_password")throw new w0(va(r),l.status,((a=r.weak_password)===null||a===void 0?void 0:a.reasons)||[]);if(s==="session_not_found")throw new $n}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((f,h)=>f&&typeof h=="string",!0))throw new w0(va(r),l.status,r.weak_password.reasons);throw new W1(va(r),l.status||500,s)}const k_=(l,a,r,s)=>{const u={method:l,headers:(a==null?void 0:a.headers)||{}};return l==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},a==null?void 0:a.headers),u.body=JSON.stringify(s),Object.assign(Object.assign({},u),r))};async function pe(l,a,r,s){var u;const f=Object.assign({},s==null?void 0:s.headers);f[Ec]||(f[Ec]=kg["2024-01-01"].name),s!=null&&s.jwt&&(f.Authorization=`Bearer ${s.jwt}`);const h=(u=s==null?void 0:s.query)!==null&&u!==void 0?u:{};s!=null&&s.redirectTo&&(h.redirect_to=s.redirectTo);const m=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",p=await A_(l,a,r+m,{headers:f,noResolveJson:s==null?void 0:s.noResolveJson},{},s==null?void 0:s.body);return s!=null&&s.xform?s==null?void 0:s.xform(p):{data:Object.assign({},p),error:null}}async function A_(l,a,r,s,u,f){const h=k_(a,s,u,f);let m;try{m=await l(r,Object.assign({},h))}catch(p){throw console.error(p),new kc(va(p),0)}if(m.ok||await k0(m),s!=null&&s.noResolveJson)return m;try{return await m.json()}catch(p){await k0(p)}}function fn(l){var a;let r=null;D_(l)&&(r=Object.assign({},l),l.expires_at||(r.expires_at=c_(l.expires_in)));const s=(a=l.user)!==null&&a!==void 0?a:l;return{data:{session:r,user:s},error:null}}function A0(l){const a=fn(l);return!a.error&&l.weak_password&&typeof l.weak_password=="object"&&Array.isArray(l.weak_password.reasons)&&l.weak_password.reasons.length&&l.weak_password.message&&typeof l.weak_password.message=="string"&&l.weak_password.reasons.reduce((r,s)=>r&&typeof s=="string",!0)&&(a.data.weak_password=l.weak_password),a}function Xn(l){var a;return{data:{user:(a=l.user)!==null&&a!==void 0?a:l},error:null}}function j_(l){return{data:l,error:null}}function R_(l){const{action_link:a,email_otp:r,hashed_token:s,redirect_to:u,verification_type:f}=l,h=T_(l,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:a,email_otp:r,hashed_token:s,redirect_to:u,verification_type:f},p=Object.assign({},h);return{data:{properties:m,user:p},error:null}}function C_(l){return l}function D_(l){return l.access_token&&l.refresh_token&&l.expires_in}const cc=["global","local","others"];var M_=function(l,a){var r={};for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&a.indexOf(s)<0&&(r[s]=l[s]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(l);u<s.length;u++)a.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(l,s[u])&&(r[s[u]]=l[s[u]]);return r};class U_{constructor({url:a="",headers:r={},fetch:s}){this.url=a,this.headers=r,this.fetch=Rg(s),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(a,r=cc[0]){if(cc.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${cc.join(", ")}`);try{return await pe(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:a,noResolveJson:!0}),{data:null,error:null}}catch(s){if(le(s))return{data:null,error:s};throw s}}async inviteUserByEmail(a,r={}){try{return await pe(this.fetch,"POST",`${this.url}/invite`,{body:{email:a,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Xn})}catch(s){if(le(s))return{data:{user:null},error:s};throw s}}async generateLink(a){try{const{options:r}=a,s=M_(a,["options"]),u=Object.assign(Object.assign({},s),r);return"newEmail"in s&&(u.new_email=s==null?void 0:s.newEmail,delete u.newEmail),await pe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:u,headers:this.headers,xform:R_,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(le(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(a){try{return await pe(this.fetch,"POST",`${this.url}/admin/users`,{body:a,headers:this.headers,xform:Xn})}catch(r){if(le(r))return{data:{user:null},error:r};throw r}}async listUsers(a){var r,s,u,f,h,m,p;try{const g={nextPage:null,lastPage:0,total:0},v=await pe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(r=a==null?void 0:a.page)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:"",per_page:(f=(u=a==null?void 0:a.perPage)===null||u===void 0?void 0:u.toString())!==null&&f!==void 0?f:""},xform:C_});if(v.error)throw v.error;const _=await v.json(),x=(h=v.headers.get("x-total-count"))!==null&&h!==void 0?h:0,T=(p=(m=v.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return T.length>0&&(T.forEach(w=>{const k=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),A=JSON.parse(w.split(";")[1].split("=")[1]);g[`${A}Page`]=k}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},_),g),error:null}}catch(g){if(le(g))return{data:{users:[]},error:g};throw g}}async getUserById(a){pi(a);try{return await pe(this.fetch,"GET",`${this.url}/admin/users/${a}`,{headers:this.headers,xform:Xn})}catch(r){if(le(r))return{data:{user:null},error:r};throw r}}async updateUserById(a,r){pi(a);try{return await pe(this.fetch,"PUT",`${this.url}/admin/users/${a}`,{body:r,headers:this.headers,xform:Xn})}catch(s){if(le(s))return{data:{user:null},error:s};throw s}}async deleteUser(a,r=!1){pi(a);try{return await pe(this.fetch,"DELETE",`${this.url}/admin/users/${a}`,{headers:this.headers,body:{should_soft_delete:r},xform:Xn})}catch(s){if(le(s))return{data:{user:null},error:s};throw s}}async _listFactors(a){pi(a.userId);try{const{data:r,error:s}=await pe(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/factors`,{headers:this.headers,xform:u=>({data:{factors:u},error:null})});return{data:r,error:s}}catch(r){if(le(r))return{data:null,error:r};throw r}}async _deleteFactor(a){pi(a.userId),pi(a.id);try{return{data:await pe(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/factors/${a.id}`,{headers:this.headers}),error:null}}catch(r){if(le(r))return{data:null,error:r};throw r}}}const z_={getItem:l=>Cr()?globalThis.localStorage.getItem(l):null,setItem:(l,a)=>{Cr()&&globalThis.localStorage.setItem(l,a)},removeItem:l=>{Cr()&&globalThis.localStorage.removeItem(l)}};function j0(l={}){return{getItem:a=>l[a]||null,setItem:(a,r)=>{l[a]=r},removeItem:a=>{delete l[a]}}}function N_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const gi={debug:!!(globalThis&&Cr()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Dg extends Error{constructor(a){super(a),this.isAcquireTimeout=!0}}class q_ extends Dg{}async function L_(l,a,r){gi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",l,a);const s=new globalThis.AbortController;return a>0&&setTimeout(()=>{s.abort(),gi.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",l)},a),await Promise.resolve().then(()=>globalThis.navigator.locks.request(l,a===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:s.signal},async u=>{if(u){gi.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",l,u.name);try{return await r()}finally{gi.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",l,u.name)}}else{if(a===0)throw gi.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",l),new q_(`Acquiring an exclusive Navigator LockManager lock "${l}" immediately failed`);if(gi.debug)try{const f=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(f,null,"  "))}catch(f){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",f)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}N_();const B_={url:Z1,storageKey:K1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:J1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function R0(l,a,r){return await r()}class zr{constructor(a){var r,s;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=zr.nextInstanceID,zr.nextInstanceID+=1,this.instanceID>0&&Lt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const u=Object.assign(Object.assign({},B_),a);if(this.logDebugMessages=!!u.debug,typeof u.debug=="function"&&(this.logger=u.debug),this.persistSession=u.persistSession,this.storageKey=u.storageKey,this.autoRefreshToken=u.autoRefreshToken,this.admin=new U_({url:u.url,headers:u.headers,fetch:u.fetch}),this.url=u.url,this.headers=u.headers,this.fetch=Rg(u.fetch),this.lock=u.lock||R0,this.detectSessionInUrl=u.detectSessionInUrl,this.flowType=u.flowType,this.hasCustomAuthorizationHeader=u.hasCustomAuthorizationHeader,u.lock?this.lock=u.lock:Lt()&&(!((r=globalThis==null?void 0:globalThis.navigator)===null||r===void 0)&&r.locks)?this.lock=L_:this.lock=R0,this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?u.storage?this.storage=u.storage:Cr()?this.storage=z_:(this.memoryStorage={},this.storage=j0(this.memoryStorage)):(this.memoryStorage={},this.storage=j0(this.memoryStorage)),Lt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(f){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",f)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async f=>{this._debug("received broadcast notification from other tab or client",f),await this._notifyAllSubscribers(f.data.event,f.data.session,!1)})}this.initialize()}_debug(...a){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Eg}) ${new Date().toISOString()}`,...a),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var a;try{const r=h_(window.location.href);let s="none";if(this._isImplicitGrantCallback(r)?s="implicit":await this._isPKCECallback(r)&&(s="pkce"),Lt()&&this.detectSessionInUrl&&s!=="none"){const{data:u,error:f}=await this._getSessionFromURL(r,s);if(f){if(this._debug("#_initialize()","error detecting session from URL",f),n_(f)){const p=(a=f.details)===null||a===void 0?void 0:a.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:f}}return await this._removeSession(),{error:f}}const{session:h,redirectType:m}=u;return this._debug("#_initialize()","detected session in URL",h,"redirect type",m),await this._saveSession(h),setTimeout(async()=>{m==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return le(r)?{error:r}:{error:new Ag("Unexpected error during initialization",r)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(a){var r,s,u;try{const f=await pe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(s=(r=a==null?void 0:a.options)===null||r===void 0?void 0:r.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:(u=a==null?void 0:a.options)===null||u===void 0?void 0:u.captchaToken}},xform:fn}),{data:h,error:m}=f;if(m||!h)return{data:{user:null,session:null},error:m};const p=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:g,session:p},error:null}}catch(f){if(le(f))return{data:{user:null,session:null},error:f};throw f}}async signUp(a){var r,s,u;try{let f;if("email"in a){const{email:v,password:_,options:x}=a;let T=null,w=null;this.flowType==="pkce"&&([T,w]=await di(this.storage,this.storageKey)),f=await pe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:v,password:_,data:(r=x==null?void 0:x.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:T,code_challenge_method:w},xform:fn})}else if("phone"in a){const{phone:v,password:_,options:x}=a;f=await pe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:v,password:_,data:(s=x==null?void 0:x.data)!==null&&s!==void 0?s:{},channel:(u=x==null?void 0:x.channel)!==null&&u!==void 0?u:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:fn})}else throw new co("You must provide either an email or phone number and a password");const{data:h,error:m}=f;if(m||!h)return{data:{user:null,session:null},error:m};const p=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:g,session:p},error:null}}catch(f){if(le(f))return{data:{user:null,session:null},error:f};throw f}}async signInWithPassword(a){try{let r;if("email"in a){const{email:f,password:h,options:m}=a;r=await pe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:f,password:h,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:A0})}else if("phone"in a){const{phone:f,password:h,options:m}=a;r=await pe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:f,password:h,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:A0})}else throw new co("You must provide either an email or phone number and a password");const{data:s,error:u}=r;return u?{data:{user:null,session:null},error:u}:!s||!s.session||!s.user?{data:{user:null,session:null},error:new uo}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign({user:s.user,session:s.session},s.weak_password?{weakPassword:s.weak_password}:null),error:u})}catch(r){if(le(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOAuth(a){var r,s,u,f;return await this._handleProviderSignIn(a.provider,{redirectTo:(r=a.options)===null||r===void 0?void 0:r.redirectTo,scopes:(s=a.options)===null||s===void 0?void 0:s.scopes,queryParams:(u=a.options)===null||u===void 0?void 0:u.queryParams,skipBrowserRedirect:(f=a.options)===null||f===void 0?void 0:f.skipBrowserRedirect})}async exchangeCodeForSession(a){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(a))}async signInWithWeb3(a){const{chain:r}=a;if(r==="solana")return await this.signInWithSolana(a);throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}async signInWithSolana(a){var r,s,u,f,h,m,p,g,v,_,x,T;let w,k;if("message"in a)w=a.message,k=a.signature;else{const{chain:A,wallet:P,statement:X,options:z}=a;let $;if(Lt())if(typeof P=="object")$=P;else{const G=window;if("solana"in G&&typeof G.solana=="object"&&("signIn"in G.solana&&typeof G.solana.signIn=="function"||"signMessage"in G.solana&&typeof G.solana.signMessage=="function"))$=G.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof P!="object"||!(z!=null&&z.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");$=P}const Y=new URL((r=z==null?void 0:z.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in $&&$.signIn){const G=await $.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},z==null?void 0:z.signInWithSolana),{version:"1",domain:Y.host,uri:Y.href}),X?{statement:X}:null));let I;if(Array.isArray(G)&&G[0]&&typeof G[0]=="object")I=G[0];else if(G&&typeof G=="object"&&"signedMessage"in G&&"signature"in G)I=G;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in I&&"signature"in I&&(typeof I.signedMessage=="string"||I.signedMessage instanceof Uint8Array)&&I.signature instanceof Uint8Array)w=typeof I.signedMessage=="string"?I.signedMessage:new TextDecoder().decode(I.signedMessage),k=I.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in $)||typeof $.signMessage!="function"||!("publicKey"in $)||typeof $!="object"||!$.publicKey||!("toBase58"in $.publicKey)||typeof $.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");w=[`${Y.host} wants you to sign in with your Solana account:`,$.publicKey.toBase58(),...X?["",X,""]:[""],"Version: 1",`URI: ${Y.href}`,`Issued At: ${(u=(s=z==null?void 0:z.signInWithSolana)===null||s===void 0?void 0:s.issuedAt)!==null&&u!==void 0?u:new Date().toISOString()}`,...!((f=z==null?void 0:z.signInWithSolana)===null||f===void 0)&&f.notBefore?[`Not Before: ${z.signInWithSolana.notBefore}`]:[],...!((h=z==null?void 0:z.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${z.signInWithSolana.expirationTime}`]:[],...!((m=z==null?void 0:z.signInWithSolana)===null||m===void 0)&&m.chainId?[`Chain ID: ${z.signInWithSolana.chainId}`]:[],...!((p=z==null?void 0:z.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${z.signInWithSolana.nonce}`]:[],...!((g=z==null?void 0:z.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${z.signInWithSolana.requestId}`]:[],...!((_=(v=z==null?void 0:z.signInWithSolana)===null||v===void 0?void 0:v.resources)===null||_===void 0)&&_.length?["Resources",...z.signInWithSolana.resources.map(I=>`- ${I}`)]:[]].join(`
`);const G=await $.signMessage(new TextEncoder().encode(w),"utf8");if(!G||!(G instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");k=G}}try{const{data:A,error:P}=await pe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:w,signature:u_(k)},!((x=a.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(T=a.options)===null||T===void 0?void 0:T.captchaToken}}:null),xform:fn});if(P)throw P;return!A||!A.session||!A.user?{data:{user:null,session:null},error:new uo}:(A.session&&(await this._saveSession(A.session),await this._notifyAllSubscribers("SIGNED_IN",A.session)),{data:Object.assign({},A),error:P})}catch(A){if(le(A))return{data:{user:null,session:null},error:A};throw A}}async _exchangeCodeForSession(a){const r=await ho(this.storage,`${this.storageKey}-code-verifier`),[s,u]=(r??"").split("/");try{const{data:f,error:h}=await pe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:a,code_verifier:s},xform:fn});if(await po(this.storage,`${this.storageKey}-code-verifier`),h)throw h;return!f||!f.session||!f.user?{data:{user:null,session:null,redirectType:null},error:new uo}:(f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",f.session)),{data:Object.assign(Object.assign({},f),{redirectType:u??null}),error:h})}catch(f){if(le(f))return{data:{user:null,session:null,redirectType:null},error:f};throw f}}async signInWithIdToken(a){try{const{options:r,provider:s,token:u,access_token:f,nonce:h}=a,m=await pe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:s,id_token:u,access_token:f,nonce:h,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:fn}),{data:p,error:g}=m;return g?{data:{user:null,session:null},error:g}:!p||!p.session||!p.user?{data:{user:null,session:null},error:new uo}:(p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),{data:p,error:g})}catch(r){if(le(r))return{data:{user:null,session:null},error:r};throw r}}async signInWithOtp(a){var r,s,u,f,h;try{if("email"in a){const{email:m,options:p}=a;let g=null,v=null;this.flowType==="pkce"&&([g,v]=await di(this.storage,this.storageKey));const{error:_}=await pe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},create_user:(s=p==null?void 0:p.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:v},redirectTo:p==null?void 0:p.emailRedirectTo});return{data:{user:null,session:null},error:_}}if("phone"in a){const{phone:m,options:p}=a,{data:g,error:v}=await pe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(u=p==null?void 0:p.data)!==null&&u!==void 0?u:{},create_user:(f=p==null?void 0:p.shouldCreateUser)!==null&&f!==void 0?f:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(h=p==null?void 0:p.channel)!==null&&h!==void 0?h:"sms"}});return{data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:v}}throw new co("You must provide either an email or phone number.")}catch(m){if(le(m))return{data:{user:null,session:null},error:m};throw m}}async verifyOtp(a){var r,s;try{let u,f;"options"in a&&(u=(r=a.options)===null||r===void 0?void 0:r.redirectTo,f=(s=a.options)===null||s===void 0?void 0:s.captchaToken);const{data:h,error:m}=await pe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},a),{gotrue_meta_security:{captcha_token:f}}),redirectTo:u,xform:fn});if(m)throw m;if(!h)throw new Error("An error occurred on token verification.");const p=h.session,g=h.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(a.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),{data:{user:g,session:p},error:null}}catch(u){if(le(u))return{data:{user:null,session:null},error:u};throw u}}async signInWithSSO(a){var r,s,u;try{let f=null,h=null;return this.flowType==="pkce"&&([f,h]=await di(this.storage,this.storageKey)),await pe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in a?{provider_id:a.providerId}:null),"domain"in a?{domain:a.domain}:null),{redirect_to:(s=(r=a.options)===null||r===void 0?void 0:r.redirectTo)!==null&&s!==void 0?s:void 0}),!((u=a==null?void 0:a.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:a.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:f,code_challenge_method:h}),headers:this.headers,xform:j_})}catch(f){if(le(f))return{data:null,error:f};throw f}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async a=>{const{data:{session:r},error:s}=a;if(s)throw s;if(!r)throw new $n;const{error:u}=await pe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return{data:{user:null,session:null},error:u}})}catch(a){if(le(a))return{data:{user:null,session:null},error:a};throw a}}async resend(a){try{const r=`${this.url}/resend`;if("email"in a){const{email:s,type:u,options:f}=a,{error:h}=await pe(this.fetch,"POST",r,{headers:this.headers,body:{email:s,type:u,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},redirectTo:f==null?void 0:f.emailRedirectTo});return{data:{user:null,session:null},error:h}}else if("phone"in a){const{phone:s,type:u,options:f}=a,{data:h,error:m}=await pe(this.fetch,"POST",r,{headers:this.headers,body:{phone:s,type:u,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}}});return{data:{user:null,session:null,messageId:h==null?void 0:h.message_id},error:m}}throw new co("You must provide either an email or phone number and a type")}catch(r){if(le(r))return{data:{user:null,session:null},error:r};throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async r=>r))}async _acquireLock(a,r){this._debug("#_acquireLock","begin",a);try{if(this.lockAcquired){const s=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),u=(async()=>(await s,await r()))();return this.pendingInLock.push((async()=>{try{await u}catch{}})()),u}return await this.lock(`lock:${this.storageKey}`,a,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const s=r();for(this.pendingInLock.push((async()=>{try{await s}catch{}})()),await s;this.pendingInLock.length;){const u=[...this.pendingInLock];await Promise.all(u),this.pendingInLock.splice(0,u.length)}return await s}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(a){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await a(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let a=null;const r=await ho(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?a=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!a)return{data:{session:null},error:null};const s=a.expires_at?a.expires_at*1e3-Date.now()<oc:!1;if(this._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",a.expires_at),!s){if(this.storage.isServer){let h=this.suppressGetSessionWarning;a=new Proxy(a,{get:(p,g,v)=>(!h&&g==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),h=!0,this.suppressGetSessionWarning=!0),Reflect.get(p,g,v))})}return{data:{session:a},error:null}}const{session:u,error:f}=await this._callRefreshToken(a.refresh_token);return f?{data:{session:null},error:f}:{data:{session:u},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(a){return a?await this._getUser(a):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(a){try{return a?await pe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:a,xform:Xn}):await this._useSession(async r=>{var s,u,f;const{data:h,error:m}=r;if(m)throw m;return!(!((s=h.session)===null||s===void 0)&&s.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new $n}:await pe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(f=(u=h.session)===null||u===void 0?void 0:u.access_token)!==null&&f!==void 0?f:void 0,xform:Xn})})}catch(r){if(le(r))return t_(r)&&(await this._removeSession(),await po(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:r};throw r}}async updateUser(a,r={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(a,r))}async _updateUser(a,r={}){try{return await this._useSession(async s=>{const{data:u,error:f}=s;if(f)throw f;if(!u.session)throw new $n;const h=u.session;let m=null,p=null;this.flowType==="pkce"&&a.email!=null&&([m,p]=await di(this.storage,this.storageKey));const{data:g,error:v}=await pe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},a),{code_challenge:m,code_challenge_method:p}),jwt:h.access_token,xform:Xn});if(v)throw v;return h.user=g.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),{data:{user:h.user},error:null}})}catch(s){if(le(s))return{data:{user:null},error:s};throw s}}async setSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(a))}async _setSession(a){try{if(!a.access_token||!a.refresh_token)throw new $n;const r=Date.now()/1e3;let s=r,u=!0,f=null;const{payload:h}=uc(a.access_token);if(h.exp&&(s=h.exp,u=s<=r),u){const{session:m,error:p}=await this._callRefreshToken(a.refresh_token);if(p)return{data:{user:null,session:null},error:p};if(!m)return{data:{user:null,session:null},error:null};f=m}else{const{data:m,error:p}=await this._getUser(a.access_token);if(p)throw p;f={access_token:a.access_token,refresh_token:a.refresh_token,user:m.user,token_type:"bearer",expires_in:s-r,expires_at:s},await this._saveSession(f),await this._notifyAllSubscribers("SIGNED_IN",f)}return{data:{user:f.user,session:f},error:null}}catch(r){if(le(r))return{data:{session:null,user:null},error:r};throw r}}async refreshSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(a))}async _refreshSession(a){try{return await this._useSession(async r=>{var s;if(!a){const{data:h,error:m}=r;if(m)throw m;a=(s=h.session)!==null&&s!==void 0?s:void 0}if(!(a!=null&&a.refresh_token))throw new $n;const{session:u,error:f}=await this._callRefreshToken(a.refresh_token);return f?{data:{user:null,session:null},error:f}:u?{data:{user:u.user,session:u},error:null}:{data:{user:null,session:null},error:null}})}catch(r){if(le(r))return{data:{user:null,session:null},error:r};throw r}}async _getSessionFromURL(a,r){try{if(!Lt())throw new fo("No browser detected.");if(a.error||a.error_description||a.error_code)throw new fo(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new S0("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new fo("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!a.code)throw new S0("No code detected.");const{data:X,error:z}=await this._exchangeCodeForSession(a.code);if(z)throw z;const $=new URL(window.location.href);return $.searchParams.delete("code"),window.history.replaceState(window.history.state,"",$.toString()),{data:{session:X.session,redirectType:null},error:null}}const{provider_token:s,provider_refresh_token:u,access_token:f,refresh_token:h,expires_in:m,expires_at:p,token_type:g}=a;if(!f||!m||!h||!g)throw new fo("No session defined in URL");const v=Math.round(Date.now()/1e3),_=parseInt(m);let x=v+_;p&&(x=parseInt(p));const T=x-v;T*1e3<=vi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${T}s, should have been closer to ${_}s`);const w=x-_;v-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,x,v):v-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,x,v);const{data:k,error:A}=await this._getUser(f);if(A)throw A;const P={provider_token:s,provider_refresh_token:u,access_token:f,expires_in:_,expires_at:x,refresh_token:h,token_type:g,user:k.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:P,redirectType:a.type},error:null}}catch(s){if(le(s))return{data:{session:null,redirectType:null},error:s};throw s}}_isImplicitGrantCallback(a){return!!(a.access_token||a.error_description)}async _isPKCECallback(a){const r=await ho(this.storage,`${this.storageKey}-code-verifier`);return!!(a.code&&r)}async signOut(a={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(a))}async _signOut({scope:a}={scope:"global"}){return await this._useSession(async r=>{var s;const{data:u,error:f}=r;if(f)return{error:f};const h=(s=u.session)===null||s===void 0?void 0:s.access_token;if(h){const{error:m}=await this.admin.signOut(h,a);if(m&&!(e_(m)&&(m.status===404||m.status===401||m.status===403)))return{error:m}}return a!=="others"&&(await this._removeSession(),await po(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(a){const r=f_(),s={id:r,callback:a,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,s),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:s}}}async _emitInitialSession(a){return await this._useSession(async r=>{var s,u;try{const{data:{session:f},error:h}=r;if(h)throw h;await((s=this.stateChangeEmitters.get(a))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",f)),this._debug("INITIAL_SESSION","callback id",a,"session",f)}catch(f){await((u=this.stateChangeEmitters.get(a))===null||u===void 0?void 0:u.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",a,"error",f),console.error(f)}})}async resetPasswordForEmail(a,r={}){let s=null,u=null;this.flowType==="pkce"&&([s,u]=await di(this.storage,this.storageKey,!0));try{return await pe(this.fetch,"POST",`${this.url}/recover`,{body:{email:a,code_challenge:s,code_challenge_method:u,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(f){if(le(f))return{data:null,error:f};throw f}}async getUserIdentities(){var a;try{const{data:r,error:s}=await this.getUser();if(s)throw s;return{data:{identities:(a=r.user.identities)!==null&&a!==void 0?a:[]},error:null}}catch(r){if(le(r))return{data:null,error:r};throw r}}async linkIdentity(a){var r;try{const{data:s,error:u}=await this._useSession(async f=>{var h,m,p,g,v;const{data:_,error:x}=f;if(x)throw x;const T=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,a.provider,{redirectTo:(h=a.options)===null||h===void 0?void 0:h.redirectTo,scopes:(m=a.options)===null||m===void 0?void 0:m.scopes,queryParams:(p=a.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await pe(this.fetch,"GET",T,{headers:this.headers,jwt:(v=(g=_.session)===null||g===void 0?void 0:g.access_token)!==null&&v!==void 0?v:void 0})});if(u)throw u;return Lt()&&!(!((r=a.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(s==null?void 0:s.url),{data:{provider:a.provider,url:s==null?void 0:s.url},error:null}}catch(s){if(le(s))return{data:{provider:a.provider,url:null},error:s};throw s}}async unlinkIdentity(a){try{return await this._useSession(async r=>{var s,u;const{data:f,error:h}=r;if(h)throw h;return await pe(this.fetch,"DELETE",`${this.url}/user/identities/${a.identity_id}`,{headers:this.headers,jwt:(u=(s=f.session)===null||s===void 0?void 0:s.access_token)!==null&&u!==void 0?u:void 0})})}catch(r){if(le(r))return{data:null,error:r};throw r}}async _refreshAccessToken(a){const r=`#_refreshAccessToken(${a.substring(0,5)}...)`;this._debug(r,"begin");try{const s=Date.now();return await g_(async u=>(u>0&&await p_(200*Math.pow(2,u-1)),this._debug(r,"refreshing attempt",u),await pe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:a},headers:this.headers,xform:fn})),(u,f)=>{const h=200*Math.pow(2,u);return f&&sc(f)&&Date.now()+h-s<vi})}catch(s){if(this._debug(r,"error",s),le(s))return{data:{session:null,user:null},error:s};throw s}finally{this._debug(r,"end")}}_isValidSession(a){return typeof a=="object"&&a!==null&&"access_token"in a&&"refresh_token"in a&&"expires_at"in a}async _handleProviderSignIn(a,r){const s=await this._getUrlForProvider(`${this.url}/authorize`,a,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",a,"options",r,"url",s),Lt()&&!r.skipBrowserRedirect&&window.location.assign(s),{data:{provider:a,url:s},error:null}}async _recoverAndRefresh(){var a;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const s=await ho(this.storage,this.storageKey);if(this._debug(r,"session from storage",s),!this._isValidSession(s)){this._debug(r,"session is not valid"),s!==null&&await this._removeSession();return}const u=((a=s.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<oc;if(this._debug(r,`session has${u?"":" not"} expired with margin of ${oc}s`),u){if(this.autoRefreshToken&&s.refresh_token){const{error:f}=await this._callRefreshToken(s.refresh_token);f&&(console.error(f),sc(f)||(this._debug(r,"refresh failed with a non-retryable error, removing the session",f),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(r,"error",s),console.error(s);return}finally{this._debug(r,"end")}}async _callRefreshToken(a){var r,s;if(!a)throw new $n;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const u=`#_callRefreshToken(${a.substring(0,5)}...)`;this._debug(u,"begin");try{this.refreshingDeferred=new Mo;const{data:f,error:h}=await this._refreshAccessToken(a);if(h)throw h;if(!f.session)throw new $n;await this._saveSession(f.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",f.session);const m={session:f.session,error:null};return this.refreshingDeferred.resolve(m),m}catch(f){if(this._debug(u,"error",f),le(f)){const h={session:null,error:f};return sc(f)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(h),h}throw(s=this.refreshingDeferred)===null||s===void 0||s.reject(f),f}finally{this.refreshingDeferred=null,this._debug(u,"end")}}async _notifyAllSubscribers(a,r,s=!0){const u=`#_notifyAllSubscribers(${a})`;this._debug(u,"begin",r,`broadcast = ${s}`);try{this.broadcastChannel&&s&&this.broadcastChannel.postMessage({event:a,session:r});const f=[],h=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(a,r)}catch(p){f.push(p)}});if(await Promise.all(h),f.length>0){for(let m=0;m<f.length;m+=1)console.error(f[m]);throw f[0]}}finally{this._debug(u,"end")}}async _saveSession(a){this._debug("#_saveSession()",a),this.suppressGetSessionWarning=!0,await Cg(this.storage,this.storageKey,a)}async _removeSession(){this._debug("#_removeSession()"),await po(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const a=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{a&&Lt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",a)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const a=setInterval(()=>this._autoRefreshTokenTick(),vi);this.autoRefreshTicker=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const a=this.autoRefreshTicker;this.autoRefreshTicker=null,a&&clearInterval(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const a=Date.now();try{return await this._useSession(async r=>{const{data:{session:s}}=r;if(!s||!s.refresh_token||!s.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const u=Math.floor((s.expires_at*1e3-a)/vi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${u} ticks, a tick lasts ${vi}ms, refresh threshold is ${Tc} ticks`),u<=Tc&&await this._callRefreshToken(s.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(a){if(a.isAcquireTimeout||a instanceof Dg)this._debug("auto refresh token tick lock not available");else throw a}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Lt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(a){console.error("_handleVisibilityChange",a)}}async _onVisibilityChanged(a){const r=`#_onVisibilityChanged(${a})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),a||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(a,r,s){const u=[`provider=${encodeURIComponent(r)}`];if(s!=null&&s.redirectTo&&u.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),s!=null&&s.scopes&&u.push(`scopes=${encodeURIComponent(s.scopes)}`),this.flowType==="pkce"){const[f,h]=await di(this.storage,this.storageKey),m=new URLSearchParams({code_challenge:`${encodeURIComponent(f)}`,code_challenge_method:`${encodeURIComponent(h)}`});u.push(m.toString())}if(s!=null&&s.queryParams){const f=new URLSearchParams(s.queryParams);u.push(f.toString())}return s!=null&&s.skipBrowserRedirect&&u.push(`skip_http_redirect=${s.skipBrowserRedirect}`),`${a}?${u.join("&")}`}async _unenroll(a){try{return await this._useSession(async r=>{var s;const{data:u,error:f}=r;return f?{data:null,error:f}:await pe(this.fetch,"DELETE",`${this.url}/factors/${a.factorId}`,{headers:this.headers,jwt:(s=u==null?void 0:u.session)===null||s===void 0?void 0:s.access_token})})}catch(r){if(le(r))return{data:null,error:r};throw r}}async _enroll(a){try{return await this._useSession(async r=>{var s,u;const{data:f,error:h}=r;if(h)return{data:null,error:h};const m=Object.assign({friendly_name:a.friendlyName,factor_type:a.factorType},a.factorType==="phone"?{phone:a.phone}:{issuer:a.issuer}),{data:p,error:g}=await pe(this.fetch,"POST",`${this.url}/factors`,{body:m,headers:this.headers,jwt:(s=f==null?void 0:f.session)===null||s===void 0?void 0:s.access_token});return g?{data:null,error:g}:(a.factorType==="totp"&&(!((u=p==null?void 0:p.totp)===null||u===void 0)&&u.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),{data:p,error:null})})}catch(r){if(le(r))return{data:null,error:r};throw r}}async _verify(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:u,error:f}=r;if(f)return{data:null,error:f};const{data:h,error:m}=await pe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/verify`,{body:{code:a.code,challenge_id:a.challengeId},headers:this.headers,jwt:(s=u==null?void 0:u.session)===null||s===void 0?void 0:s.access_token});return m?{data:null,error:m}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+h.expires_in},h)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",h),{data:h,error:m})})}catch(r){if(le(r))return{data:null,error:r};throw r}})}async _challenge(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async r=>{var s;const{data:u,error:f}=r;return f?{data:null,error:f}:await pe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/challenge`,{body:{channel:a.channel},headers:this.headers,jwt:(s=u==null?void 0:u.session)===null||s===void 0?void 0:s.access_token})})}catch(r){if(le(r))return{data:null,error:r};throw r}})}async _challengeAndVerify(a){const{data:r,error:s}=await this._challenge({factorId:a.factorId});return s?{data:null,error:s}:await this._verify({factorId:a.factorId,challengeId:r.id,code:a.code})}async _listFactors(){const{data:{user:a},error:r}=await this.getUser();if(r)return{data:null,error:r};const s=(a==null?void 0:a.factors)||[],u=s.filter(h=>h.factor_type==="totp"&&h.status==="verified"),f=s.filter(h=>h.factor_type==="phone"&&h.status==="verified");return{data:{all:s,totp:u,phone:f},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async a=>{var r,s;const{data:{session:u},error:f}=a;if(f)return{data:null,error:f};if(!u)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:h}=uc(u.access_token);let m=null;h.aal&&(m=h.aal);let p=m;((s=(r=u.user.factors)===null||r===void 0?void 0:r.filter(_=>_.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(p="aal2");const v=h.amr||[];return{data:{currentLevel:m,nextLevel:p,currentAuthenticationMethods:v},error:null}}))}async fetchJwk(a,r={keys:[]}){let s=r.keys.find(h=>h.kid===a);if(s||(s=this.jwks.keys.find(h=>h.kid===a),s&&this.jwks_cached_at+F1>Date.now()))return s;const{data:u,error:f}=await pe(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(f)throw f;if(!u.keys||u.keys.length===0)throw new Rr("JWKS is empty");if(this.jwks=u,this.jwks_cached_at=Date.now(),s=u.keys.find(h=>h.kid===a),!s)throw new Rr("No matching signing key found in JWKS");return s}async getClaims(a,r={keys:[]}){try{let s=a;if(!s){const{data:T,error:w}=await this.getSession();if(w||!T.session)return{data:null,error:w};s=T.session.access_token}const{header:u,payload:f,signature:h,raw:{header:m,payload:p}}=uc(s);if(S_(f.exp),!u.kid||u.alg==="HS256"||!("crypto"in globalThis&&"subtle"in globalThis.crypto)){const{error:T}=await this.getUser(s);if(T)throw T;return{data:{claims:f,header:u,signature:h},error:null}}const g=w_(u.alg),v=await this.fetchJwk(u.kid,r),_=await crypto.subtle.importKey("jwk",v,g,!0,["verify"]);if(!await crypto.subtle.verify(g,_,h,s_(`${m}.${p}`)))throw new Rr("Invalid JWT signature");return{data:{claims:f,header:u,signature:h},error:null}}catch(s){if(le(s))return{data:null,error:s};throw s}}}zr.nextInstanceID=0;const P_=zr;class H_ extends P_{constructor(a){super(a)}}var G_=function(l,a,r,s){function u(f){return f instanceof r?f:new r(function(h){h(f)})}return new(r||(r=Promise))(function(f,h){function m(v){try{g(s.next(v))}catch(_){h(_)}}function p(v){try{g(s.throw(v))}catch(_){h(_)}}function g(v){v.done?f(v.value):u(v.value).then(m,p)}g((s=s.apply(l,a||[])).next())})};class $_{constructor(a,r,s){var u,f,h;if(this.supabaseUrl=a,this.supabaseKey=r,!a)throw new Error("supabaseUrl is required.");if(!r)throw new Error("supabaseKey is required.");const m=Q1(a),p=new URL(m);this.realtimeUrl=new URL("realtime/v1",p),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",p),this.storageUrl=new URL("storage/v1",p),this.functionsUrl=new URL("functions/v1",p);const g=`sb-${p.hostname.split(".")[0]}-auth-token`,v={db:L1,realtime:P1,auth:Object.assign(Object.assign({},B1),{storageKey:g}),global:q1},_=V1(s??{},v);this.storageKey=(u=_.auth.storageKey)!==null&&u!==void 0?u:"",this.headers=(f=_.global.headers)!==null&&f!==void 0?f:{},_.accessToken?(this.accessToken=_.accessToken,this.auth=new Proxy({},{get:(x,T)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(T)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((h=_.auth)!==null&&h!==void 0?h:{},this.headers,_.global.fetch),this.fetch=Y1(r,this._getAccessToken.bind(this),_.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},_.realtime)),this.rest=new o1(new URL("rest/v1",p).href,{headers:this.headers,schema:_.db.schema,fetch:this.fetch}),_.accessToken||this._listenForAuthEvents()}get functions(){return new Ky(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}get storage(){return new U1(this.storageUrl.href,this.headers,this.fetch)}from(a){return this.rest.from(a)}schema(a){return this.rest.schema(a)}rpc(a,r={},s={}){return this.rest.rpc(a,r,s)}channel(a,r={config:{}}){return this.realtime.channel(a,r)}getChannels(){return this.realtime.getChannels()}removeChannel(a){return this.realtime.removeChannel(a)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var a,r;return G_(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:s}=yield this.auth.getSession();return(r=(a=s.session)===null||a===void 0?void 0:a.access_token)!==null&&r!==void 0?r:null})}_initSupabaseAuthClient({autoRefreshToken:a,persistSession:r,detectSessionInUrl:s,storage:u,storageKey:f,flowType:h,lock:m,debug:p},g,v){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new H_({url:this.authUrl.href,headers:Object.assign(Object.assign({},_),g),storageKey:f,autoRefreshToken:a,persistSession:r,detectSessionInUrl:s,storage:u,flowType:h,lock:m,debug:p,fetch:v,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(a){return new _1(this.realtimeUrl.href,Object.assign(Object.assign({},a),{params:Object.assign({apikey:this.supabaseKey},a==null?void 0:a.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,s)=>{this._handleTokenChanged(r,"CLIENT",s==null?void 0:s.access_token)})}_handleTokenChanged(a,r,s){(a==="TOKEN_REFRESHED"||a==="SIGNED_IN")&&this.changedAccessToken!==s?this.changedAccessToken=s:a==="SIGNED_OUT"&&(this.realtime.setAuth(),r=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const Y_=(l,a,r)=>new $_(l,a,r);function Ye(l,a){a===void 0&&(a={});var r=a.insertAt;if(l&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",r==="top"&&s.firstChild?s.insertBefore(u,s.firstChild):s.appendChild(u),u.styleSheet?u.styleSheet.cssText=l:u.appendChild(document.createTextNode(l))}}Ye(`.react-loading-indicator-normalize,
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
}`);var ge=function(){return ge=Object.assign||function(l){for(var a,r=1,s=arguments.length;r<s;r++)for(var u in a=arguments[r])Object.prototype.hasOwnProperty.call(a,u)&&(l[u]=a[u]);return l},ge.apply(this,arguments)};function Ao(l){return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Ao(l)}var X_=/^\s+/,Q_=/\s+$/;function F(l,a){if(a=a||{},(l=l||"")instanceof F)return l;if(!(this instanceof F))return new F(l,a);var r=function(s){var u={r:0,g:0,b:0},f=1,h=null,m=null,p=null,g=!1,v=!1;typeof s=="string"&&(s=function(w){w=w.replace(X_,"").replace(Q_,"").toLowerCase();var k,A=!1;if(Ac[w])w=Ac[w],A=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(k=Bt.rgb.exec(w))?{r:k[1],g:k[2],b:k[3]}:(k=Bt.rgba.exec(w))?{r:k[1],g:k[2],b:k[3],a:k[4]}:(k=Bt.hsl.exec(w))?{h:k[1],s:k[2],l:k[3]}:(k=Bt.hsla.exec(w))?{h:k[1],s:k[2],l:k[3],a:k[4]}:(k=Bt.hsv.exec(w))?{h:k[1],s:k[2],v:k[3]}:(k=Bt.hsva.exec(w))?{h:k[1],s:k[2],v:k[3],a:k[4]}:(k=Bt.hex8.exec(w))?{r:Ot(k[1]),g:Ot(k[2]),b:Ot(k[3]),a:N0(k[4]),format:A?"name":"hex8"}:(k=Bt.hex6.exec(w))?{r:Ot(k[1]),g:Ot(k[2]),b:Ot(k[3]),format:A?"name":"hex"}:(k=Bt.hex4.exec(w))?{r:Ot(k[1]+""+k[1]),g:Ot(k[2]+""+k[2]),b:Ot(k[3]+""+k[3]),a:N0(k[4]+""+k[4]),format:A?"name":"hex8"}:(k=Bt.hex3.exec(w))?{r:Ot(k[1]+""+k[1]),g:Ot(k[2]+""+k[2]),b:Ot(k[3]+""+k[3]),format:A?"name":"hex"}:!1}(s)),Ao(s)=="object"&&(cn(s.r)&&cn(s.g)&&cn(s.b)?(_=s.r,x=s.g,T=s.b,u={r:255*De(_,255),g:255*De(x,255),b:255*De(T,255)},g=!0,v=String(s.r).substr(-1)==="%"?"prgb":"rgb"):cn(s.h)&&cn(s.s)&&cn(s.v)?(h=Ar(s.s),m=Ar(s.v),u=function(w,k,A){w=6*De(w,360),k=De(k,100),A=De(A,100);var P=Math.floor(w),X=w-P,z=A*(1-k),$=A*(1-X*k),Y=A*(1-(1-X)*k),G=P%6,I=[A,$,z,z,Y,A][G],se=[Y,A,A,$,z,z][G],ce=[z,z,Y,A,A,$][G];return{r:255*I,g:255*se,b:255*ce}}(s.h,h,m),g=!0,v="hsv"):cn(s.h)&&cn(s.s)&&cn(s.l)&&(h=Ar(s.s),p=Ar(s.l),u=function(w,k,A){var P,X,z;function $(I,se,ce){return ce<0&&(ce+=1),ce>1&&(ce-=1),ce<1/6?I+6*(se-I)*ce:ce<.5?se:ce<2/3?I+(se-I)*(2/3-ce)*6:I}if(w=De(w,360),k=De(k,100),A=De(A,100),k===0)P=X=z=A;else{var Y=A<.5?A*(1+k):A+k-A*k,G=2*A-Y;P=$(G,Y,w+1/3),X=$(G,Y,w),z=$(G,Y,w-1/3)}return{r:255*P,g:255*X,b:255*z}}(s.h,h,p),g=!0,v="hsl"),s.hasOwnProperty("a")&&(f=s.a));var _,x,T;return f=Mg(f),{ok:g,format:s.format||v,r:Math.min(255,Math.max(u.r,0)),g:Math.min(255,Math.max(u.g,0)),b:Math.min(255,Math.max(u.b,0)),a:f}}(l);this._originalInput=l,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=a.format||r.format,this._gradientType=a.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function C0(l,a,r){l=De(l,255),a=De(a,255),r=De(r,255);var s,u,f=Math.max(l,a,r),h=Math.min(l,a,r),m=(f+h)/2;if(f==h)s=u=0;else{var p=f-h;switch(u=m>.5?p/(2-f-h):p/(f+h),f){case l:s=(a-r)/p+(a<r?6:0);break;case a:s=(r-l)/p+2;break;case r:s=(l-a)/p+4}s/=6}return{h:s,s:u,l:m}}function D0(l,a,r){l=De(l,255),a=De(a,255),r=De(r,255);var s,u,f=Math.max(l,a,r),h=Math.min(l,a,r),m=f,p=f-h;if(u=f===0?0:p/f,f==h)s=0;else{switch(f){case l:s=(a-r)/p+(a<r?6:0);break;case a:s=(r-l)/p+2;break;case r:s=(l-a)/p+4}s/=6}return{h:s,s:u,v:m}}function M0(l,a,r,s){var u=[Ht(Math.round(l).toString(16)),Ht(Math.round(a).toString(16)),Ht(Math.round(r).toString(16))];return s&&u[0].charAt(0)==u[0].charAt(1)&&u[1].charAt(0)==u[1].charAt(1)&&u[2].charAt(0)==u[2].charAt(1)?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0):u.join("")}function U0(l,a,r,s){return[Ht(Ug(s)),Ht(Math.round(l).toString(16)),Ht(Math.round(a).toString(16)),Ht(Math.round(r).toString(16))].join("")}function V_(l,a){a=a===0?0:a||10;var r=F(l).toHsl();return r.s-=a/100,r.s=Uo(r.s),F(r)}function Z_(l,a){a=a===0?0:a||10;var r=F(l).toHsl();return r.s+=a/100,r.s=Uo(r.s),F(r)}function K_(l){return F(l).desaturate(100)}function J_(l,a){a=a===0?0:a||10;var r=F(l).toHsl();return r.l+=a/100,r.l=Uo(r.l),F(r)}function I_(l,a){a=a===0?0:a||10;var r=F(l).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-a/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-a/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-a/100*255))),F(r)}function F_(l,a){a=a===0?0:a||10;var r=F(l).toHsl();return r.l-=a/100,r.l=Uo(r.l),F(r)}function W_(l,a){var r=F(l).toHsl(),s=(r.h+a)%360;return r.h=s<0?360+s:s,F(r)}function ex(l){var a=F(l).toHsl();return a.h=(a.h+180)%360,F(a)}function z0(l,a){if(isNaN(a)||a<=0)throw new Error("Argument to polyad must be a positive number");for(var r=F(l).toHsl(),s=[F(l)],u=360/a,f=1;f<a;f++)s.push(F({h:(r.h+f*u)%360,s:r.s,l:r.l}));return s}function tx(l){var a=F(l).toHsl(),r=a.h;return[F(l),F({h:(r+72)%360,s:a.s,l:a.l}),F({h:(r+216)%360,s:a.s,l:a.l})]}function nx(l,a,r){a=a||6,r=r||30;var s=F(l).toHsl(),u=360/r,f=[F(l)];for(s.h=(s.h-(u*a>>1)+720)%360;--a;)s.h=(s.h+u)%360,f.push(F(s));return f}function ax(l,a){a=a||6;for(var r=F(l).toHsv(),s=r.h,u=r.s,f=r.v,h=[],m=1/a;a--;)h.push(F({h:s,s:u,v:f})),f=(f+m)%1;return h}F.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,a,r,s=this.toRgb();return l=s.r/255,a=s.g/255,r=s.b/255,.2126*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.7152*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(l){return this._a=Mg(l),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var l=D0(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=D0(this._r,this._g,this._b),a=Math.round(360*l.h),r=Math.round(100*l.s),s=Math.round(100*l.v);return this._a==1?"hsv("+a+", "+r+"%, "+s+"%)":"hsva("+a+", "+r+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var l=C0(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=C0(this._r,this._g,this._b),a=Math.round(360*l.h),r=Math.round(100*l.s),s=Math.round(100*l.l);return this._a==1?"hsl("+a+", "+r+"%, "+s+"%)":"hsla("+a+", "+r+"%, "+s+"%, "+this._roundA+")"},toHex:function(l){return M0(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return function(a,r,s,u,f){var h=[Ht(Math.round(a).toString(16)),Ht(Math.round(r).toString(16)),Ht(Math.round(s).toString(16)),Ht(Ug(u))];return f&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*De(this._r,255))+"%",g:Math.round(100*De(this._g,255))+"%",b:Math.round(100*De(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*De(this._r,255))+"%, "+Math.round(100*De(this._g,255))+"%, "+Math.round(100*De(this._b,255))+"%)":"rgba("+Math.round(100*De(this._r,255))+"%, "+Math.round(100*De(this._g,255))+"%, "+Math.round(100*De(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ix[M0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var a="#"+U0(this._r,this._g,this._b,this._a),r=a,s=this._gradientType?"GradientType = 1, ":"";if(l){var u=F(l);r="#"+U0(u._r,u._g,u._b,u._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+a+",endColorstr="+r+")"},toString:function(l){var a=!!l;l=l||this._format;var r=!1,s=this._a<1&&this._a>=0;return a||!s||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(r=this.toRgbString()),l==="prgb"&&(r=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(r=this.toHexString()),l==="hex3"&&(r=this.toHexString(!0)),l==="hex4"&&(r=this.toHex8String(!0)),l==="hex8"&&(r=this.toHex8String()),l==="name"&&(r=this.toName()),l==="hsl"&&(r=this.toHslString()),l==="hsv"&&(r=this.toHsvString()),r||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return F(this.toString())},_applyModification:function(l,a){var r=l.apply(null,[this].concat([].slice.call(a)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(J_,arguments)},brighten:function(){return this._applyModification(I_,arguments)},darken:function(){return this._applyModification(F_,arguments)},desaturate:function(){return this._applyModification(V_,arguments)},saturate:function(){return this._applyModification(Z_,arguments)},greyscale:function(){return this._applyModification(K_,arguments)},spin:function(){return this._applyModification(W_,arguments)},_applyCombination:function(l,a){return l.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(nx,arguments)},complement:function(){return this._applyCombination(ex,arguments)},monochromatic:function(){return this._applyCombination(ax,arguments)},splitcomplement:function(){return this._applyCombination(tx,arguments)},triad:function(){return this._applyCombination(z0,[3])},tetrad:function(){return this._applyCombination(z0,[4])}},F.fromRatio=function(l,a){if(Ao(l)=="object"){var r={};for(var s in l)l.hasOwnProperty(s)&&(r[s]=s==="a"?l[s]:Ar(l[s]));l=r}return F(l,a)},F.equals=function(l,a){return!(!l||!a)&&F(l).toRgbString()==F(a).toRgbString()},F.random=function(){return F.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},F.mix=function(l,a,r){r=r===0?0:r||50;var s=F(l).toRgb(),u=F(a).toRgb(),f=r/100;return F({r:(u.r-s.r)*f+s.r,g:(u.g-s.g)*f+s.g,b:(u.b-s.b)*f+s.b,a:(u.a-s.a)*f+s.a})},F.readability=function(l,a){var r=F(l),s=F(a);return(Math.max(r.getLuminance(),s.getLuminance())+.05)/(Math.min(r.getLuminance(),s.getLuminance())+.05)},F.isReadable=function(l,a,r){var s,u,f=F.readability(l,a);switch(u=!1,(s=function(h){var m,p;return m=((h=h||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(h.size||"small").toLowerCase(),m!=="AA"&&m!=="AAA"&&(m="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:m,size:p}}(r)).level+s.size){case"AAsmall":case"AAAlarge":u=f>=4.5;break;case"AAlarge":u=f>=3;break;case"AAAsmall":u=f>=7}return u},F.mostReadable=function(l,a,r){var s,u,f,h,m=null,p=0;u=(r=r||{}).includeFallbackColors,f=r.level,h=r.size;for(var g=0;g<a.length;g++)(s=F.readability(l,a[g]))>p&&(p=s,m=F(a[g]));return F.isReadable(l,m,{level:f,size:h})||!u?m:(r.includeFallbackColors=!1,F.mostReadable(l,["#fff","#000"],r))};var Ac=F.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ix=F.hexNames=function(l){var a={};for(var r in l)l.hasOwnProperty(r)&&(a[l[r]]=r);return a}(Ac);function Mg(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function De(l,a){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(l)&&(l="100%");var r=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(l);return l=Math.min(a,Math.max(0,parseFloat(l))),r&&(l=parseInt(l*a,10)/100),Math.abs(l-a)<1e-6?1:l%a/parseFloat(a)}function Uo(l){return Math.min(1,Math.max(0,l))}function Ot(l){return parseInt(l,16)}function Ht(l){return l.length==1?"0"+l:""+l}function Ar(l){return l<=1&&(l=100*l+"%"),l}function Ug(l){return Math.round(255*parseFloat(l)).toString(16)}function N0(l){return Ot(l)/255}var Gn,go,mo,Bt=(go="[\\s|\\(]+("+(Gn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")\\s*\\)?",mo="[\\s|\\(]+("+Gn+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")\\s*\\)?",{CSS_UNIT:new RegExp(Gn),rgb:new RegExp("rgb"+go),rgba:new RegExp("rgba"+mo),hsl:new RegExp("hsl"+go),hsla:new RegExp("hsla"+mo),hsv:new RegExp("hsv"+go),hsva:new RegExp("hsva"+mo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function cn(l){return!!Bt.CSS_UNIT.exec(l)}var Hr=function(l,a){var r=(typeof l=="string"?parseInt(l):l)||0;if(r>=-5&&r<=5){var s=r,u=parseFloat(a),f=u+s*(u/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:a}},Gr=function(l,a){var r=l||{},s="";switch(a){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var u={};if(r.fontSize){var f=r.fontSize;u=function(h,m){var p={};for(var g in h)Object.prototype.hasOwnProperty.call(h,g)&&m.indexOf(g)<0&&(p[g]=h[g]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(g=Object.getOwnPropertySymbols(h);v<g.length;v++)m.indexOf(g[v])<0&&Object.prototype.propertyIsEnumerable.call(h,g[v])&&(p[g[v]]=h[g[v]])}return p}(r,["fontSize"]),s=f}return{fontSize:s,styles:u}},rx={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},$r=function(l){var a=l.className,r=l.text,s=l.textColor,u=l.staticText,f=l.style;return r?Se.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(a||"").trim(),style:ge(ge(ge({},u&&rx),s&&{color:s,mixBlendMode:"unset"}),f&&f)},typeof r=="string"&&r.length?r:"loading"):null},pn="rgb(50, 205, 50)";function Yr(l,a){if(a===void 0&&(a=0),l.length===0)throw new Error("Input array cannot be empty!");var r=[];return function s(u,f){return f===void 0&&(f=0),r.push.apply(r,u),r.length<f&&s(r,f),r.slice(0,f)}(l,a)}Ye(`.atom-rli-bounding-box {
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
}`);F(pn).toRgb();Array.from({length:4},function(l,a){return"--atom-phase".concat(a+1,"-rgb")});Ye(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--commet-phase".concat(a+1,"-color")});Ye(`.OP-annulus-rli-bounding-box {
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
}`);var vo=Array.from({length:4},function(l,a){return"--OP-annulus-phase".concat(a+1,"-color")}),lx=function(l){var a,r=Gr(l==null?void 0:l.style,l==null?void 0:l.size),s=r.styles,u=r.fontSize,f=l==null?void 0:l.easing,h=Hr(l==null?void 0:l.speedPlus,"1.5s").animationPeriod,m=function(g){var v={},_=vo.length;if(g instanceof Array){for(var x=Yr(g,_),T=0;T<x.length&&!(T>=4);T++)v[vo[T]]=x[T];return v}try{if(typeof g!="string")throw new Error("Color String expected");for(var w=0;w<_;w++)v[vo[w]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),w=0;w<_;w++)v[vo[w]]=pn}return v}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),p=l!=null&&l.dense?4.3:2.9;return Se.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ge(ge(ge(ge(ge({},u&&{fontSize:u}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),m),s),role:"status","aria-live":"polite","aria-label":"Loading"},Se.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Se.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Se.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:p,strokeMiterlimit:"10"})),Se.createElement($r,{className:"OP-annulus-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))};function fc(l){return l&&l.Math===Math&&l}Ye(`.OP-dotted-rli-bounding-box {
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
}`);var mi=fc(typeof window=="object"&&window)||fc(typeof self=="object"&&self)||fc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function zg(){var l,a;return!((l=mi==null?void 0:mi.crypto)===null||l===void 0)&&l.randomUUID?mi.crypto.randomUUID():!((a=mi==null?void 0:mi.btoa)===null||a===void 0)&&a.name?mi.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var bo=Array.from({length:4},function(l,a){return"--OP-dotted-phase".concat(a+1,"-color")}),ox=function(l){var a,r=Gr(l==null?void 0:l.style,l==null?void 0:l.size),s=r.styles,u=r.fontSize,f=l==null?void 0:l.easing,h=Hr(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,m=function(g){var v={},_=bo.length;if(g instanceof Array){for(var x=Yr(g,_),T=0;T<x.length&&!(T>=4);T++)v[bo[T]]=x[T];return v}try{if(typeof g!="string")throw new Error("Color String expected");for(var w=0;w<_;w++)v[bo[w]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),w=0;w<_;w++)v[bo[w]]=pn}return v}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),p=l!=null&&l.dense?16:12;return Se.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ge(ge(ge(ge(ge({},u&&{fontSize:u}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),m),s),role:"status","aria-live":"polite","aria-label":"Loading"},Se.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:p}).map(function(g,v){var _=function(w,k,A){if(k===16){var P=360*w/k,X=k-w,z=Number.parseFloat(A)/k*X*-1;return{transform:"rotate(".concat(P,"deg)"),animationDelay:"".concat(z,"s")}}return{transform:"",animationDelay:""}}(v,p,h),x=_.animationDelay,T=_.transform;return Se.createElement("span",{key:zg(),className:"rli-d-i-b dot-shape-holder",style:T?{transform:T}:void 0},Se.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),Se.createElement($r,{className:"OP-dotted-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))};Ye(`.OP-spokes-rli-bounding-box {
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
}`);var yo=Array.from({length:4},function(l,a){return"--OP-spokes-phase".concat(a+1,"-color")}),sx=function(l){var a,r=Gr(l==null?void 0:l.style,l==null?void 0:l.size),s=r.styles,u=r.fontSize,f=l==null?void 0:l.easing,h=Hr(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,m=function(g){var v={},_=yo.length;if(g instanceof Array){for(var x=Yr(g,_),T=0;T<x.length&&!(T>=4);T++)v[yo[T]]=x[T];return v}try{if(typeof g!="string")throw new Error("Color String expected");for(var w=0;w<_;w++)v[yo[w]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),w=0;w<_;w++)v[yo[w]]=pn}return v}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),p=l!=null&&l.dense?16:12;return Se.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ge(ge(ge(ge(ge({},u&&{fontSize:u}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),m),s),role:"status","aria-live":"polite","aria-label":"Loading"},Se.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:p},function(g,v){return Se.createElement("span",{key:zg(),className:"rli-d-i-b spoke",style:ux(v,p,h)})})),Se.createElement($r,{text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor}))};function ux(l,a,r){if(a===16){var s=a-l,u=Number.parseFloat(r)/a;return{transform:"rotate(".concat(360*l/a,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((s-1)*u*-1,"s")}}}Ye(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var _o=Array.from({length:4},function(l,a){return"--OP-annulus-dual-sectors-phase".concat(a+1,"-color")}),cx=function(l){var a,r=Gr(l==null?void 0:l.style,l==null?void 0:l.size),s=r.styles,u=r.fontSize,f=l==null?void 0:l.easing,h=Hr(l==null?void 0:l.speedPlus,"1.2s").animationPeriod,m=function(g){var v={},_=_o.length;if(g instanceof Array){for(var x=Yr(g,_),T=0;T<x.length&&!(T>=4);T++)v[_o[T]]=x[T];return v}try{if(typeof g!="string")throw new Error("Color String expected");for(var w=0;w<_;w++)v[_o[w]]=g}catch(k){for(k instanceof Error?console.warn("[".concat(k.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),w=0;w<_;w++)v[_o[w]]=pn}return v}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),p=l.dense?"0.45em":"";return Se.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ge(ge(ge(ge(ge({},u&&{fontSize:u}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),m),s),role:"status","aria-live":"polite","aria-label":"Loading"},Se.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Se.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ge({},p&&{borderWidth:p})}),Se.createElement($r,{className:"OP-annulus-dual-sectors-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))};Ye(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var Or=Array.from({length:4},function(l,a){return["--OP-annulus-track-phase".concat(a+1,"-color"),"--OP-annulus-sector-phase".concat(a+1,"-color")]}),xo=function(l){return l===void 0&&(l=1),.25*l},fx=function(l){var a,r=Gr(l==null?void 0:l.style,l==null?void 0:l.size),s=r.styles,u=r.fontSize,f=l==null?void 0:l.easing,h=Hr(l==null?void 0:l.speedPlus,"1s").animationPeriod,m=function(g){var v={},_=Or.length;if(g instanceof Array){for(var x=Yr(g,_),T=0;T<x.length&&!(T>=4);T++){var w=Or[T];try{if(!(P=F(x[T])).isValid())throw new Error("Invalid Color: ".concat(P.getOriginalInput()));var k=P.setAlpha(xo(P.getAlpha())).toRgbString(),A=x[T];v[w[0]]=k,v[w[1]]=A}catch{A=pn,k=(P=F(pn)).setAlpha(xo(P.getAlpha())).toRgbString(),v[w[0]]=k,v[w[1]]=A}}return v}try{var P=F(g);if(typeof g!="string")throw new Error("Color String expected");if(!P.isValid())throw new Error("Invalid Color: ".concat(P.getOriginalInput()));A=g,k=P.setAlpha(xo(P.getAlpha())).toRgbString();for(var X=0;X<_;X++)v[(w=Or[X])[0]]=k,v[w[1]]=A}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),A=pn,k=(P=F(pn)).setAlpha(xo(P.getAlpha())).toRgbString(),X=0;X<Or.length;X++)v[(w=Or[X])[0]]=k,v[w[1]]=A}return v}((a=l==null?void 0:l.color)!==null&&a!==void 0?a:""),p=l.dense?"0.45em":"";return Se.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ge(ge(ge(ge(ge({},u&&{fontSize:u}),h&&{"--rli-animation-duration":h}),f&&{"--rli-animation-function":f}),m),s),role:"status","aria-live":"polite","aria-label":"Loading"},Se.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Se.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ge({},p&&{borderWidth:p})}),Se.createElement($r,{className:"OP-annulus-sector-text",text:l==null?void 0:l.text,textColor:l==null?void 0:l.textColor})))},hx=function(l){var a=Object(l).variant,r=a===void 0?"disc":a;return r==="dotted"?Se.createElement(ox,ge({},l)):r==="spokes"?Se.createElement(sx,ge({},l)):r==="disc"?Se.createElement(lx,ge({},l)):r==="split-disc"?Se.createElement(cx,ge({},l)):r==="track-disc"?Se.createElement(fx,ge({},l)):null};Ye(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--four-square-phase".concat(a+1,"-color")});Ye(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--mosaic-phase".concat(a+1,"-color")});Ye(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--riple-phase".concat(a+1,"-color")});Ye(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-pulsate-phase".concat(a+1,"-color")});Ye(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-brick-stack-phase".concat(a+1,"-color")});Ye(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-bob-phase".concat(a+1,"-color")});Ye(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--TD-bounce-phase".concat(a+1,"-color")});Ye(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--shape-phase".concat(a+1,"-color")});Ye(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--trophySpin-phase".concat(a+1,"-color")});Ye(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--slab-phase".concat(a+1,"-color")});Ye(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(l,a){return"--life-line-phase".concat(a+1,"-color")});function dx(){const[l,a]=Q.useState(!1),r=xi();Q.useEffect(()=>(l?(document.documentElement.classList.add("no-scroll"),document.body.classList.add("menu-open-body")):(document.documentElement.classList.remove("no-scroll"),document.body.classList.remove("menu-open-body")),()=>{document.documentElement.classList.remove("no-scroll"),document.body.classList.remove("menu-open-body")}),[l]);function s(){a(!l)}const u=()=>{a(!1)};return U.jsx("header",{className:`${l?"navMenu--open":""}`,children:U.jsxs("div",{className:"header-content",children:[U.jsx(dn,{to:"/",onClick:u,children:U.jsx("img",{src:"/img/logo-white.svg",alt:"Portfolio Logo"})}),U.jsx("iconify-icon",{className:"menuToggleBtn",icon:"material-symbols:menu-rounded",width:"24",height:"24",onClick:s}),U.jsx("nav",{className:`navMenu ${l?"navMenu--open":""}`,children:U.jsxs("ul",{children:[U.jsx("li",{children:U.jsx(dn,{to:"/",onClick:u,className:r.pathname==="/"?"active":"",children:"My"})}),U.jsx("li",{children:U.jsx(dn,{to:"/project",onClick:u,className:r.pathname==="/project"?"active":"",children:"Projects"})}),U.jsx("li",{children:U.jsx(dn,{to:"/doc",onClick:u,className:r.pathname==="/doc"?"active":"",children:"Documentation"})}),U.jsx("li",{children:U.jsx(dn,{to:"/journey",onClick:u,className:r.pathname==="/journey"?"active":"",children:"Journey"})})]})})]})})}function jc(){return jc=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(l[s]=r[s])}return l},jc.apply(this,arguments)}var px={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(l){},onComplete:function(l){},preStringTyped:function(l,a){},onStringTyped:function(l,a){},onLastStringBackspaced:function(l){},onTypingPaused:function(l,a){},onTypingResumed:function(l,a){},onReset:function(l){},onStop:function(l,a){},onStart:function(l,a){},onDestroy:function(l){}},gx=new(function(){function l(){}var a=l.prototype;return a.load=function(r,s,u){if(r.el=typeof u=="string"?document.querySelector(u):u,r.options=jc({},px,s),r.isInput=r.el.tagName.toLowerCase()==="input",r.attr=r.options.attr,r.bindInputFocusEvents=r.options.bindInputFocusEvents,r.showCursor=!r.isInput&&r.options.showCursor,r.cursorChar=r.options.cursorChar,r.cursorBlinking=!0,r.elContent=r.attr?r.el.getAttribute(r.attr):r.el.textContent,r.contentType=r.options.contentType,r.typeSpeed=r.options.typeSpeed,r.startDelay=r.options.startDelay,r.backSpeed=r.options.backSpeed,r.smartBackspace=r.options.smartBackspace,r.backDelay=r.options.backDelay,r.fadeOut=r.options.fadeOut,r.fadeOutClass=r.options.fadeOutClass,r.fadeOutDelay=r.options.fadeOutDelay,r.isPaused=!1,r.strings=r.options.strings.map(function(g){return g.trim()}),r.stringsElement=typeof r.options.stringsElement=="string"?document.querySelector(r.options.stringsElement):r.options.stringsElement,r.stringsElement){r.strings=[],r.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var f=Array.prototype.slice.apply(r.stringsElement.children),h=f.length;if(h)for(var m=0;m<h;m+=1)r.strings.push(f[m].innerHTML.trim())}for(var p in r.strPos=0,r.currentElContent=this.getCurrentElContent(r),r.currentElContent&&r.currentElContent.length>0&&(r.strPos=r.currentElContent.length-1,r.strings.unshift(r.currentElContent)),r.sequence=[],r.strings)r.sequence[p]=p;r.arrayPos=0,r.stopNum=0,r.loop=r.options.loop,r.loopCount=r.options.loopCount,r.curLoop=0,r.shuffle=r.options.shuffle,r.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},r.typingComplete=!1,r.autoInsertCss=r.options.autoInsertCss,r.autoInsertCss&&(this.appendCursorAnimationCss(r),this.appendFadeOutAnimationCss(r))},a.getCurrentElContent=function(r){return r.attr?r.el.getAttribute(r.attr):r.isInput?r.el.value:r.contentType==="html"?r.el.innerHTML:r.el.textContent},a.appendCursorAnimationCss=function(r){var s="data-typed-js-cursor-css";if(r.showCursor&&!document.querySelector("["+s+"]")){var u=document.createElement("style");u.setAttribute(s,"true"),u.innerHTML=`
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
      `,document.body.appendChild(u)}},a.appendFadeOutAnimationCss=function(r){var s="data-typed-fadeout-js-css";if(r.fadeOut&&!document.querySelector("["+s+"]")){var u=document.createElement("style");u.setAttribute(s,"true"),u.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(u)}},l}()),q0=new(function(){function l(){}var a=l.prototype;return a.typeHtmlChars=function(r,s,u){if(u.contentType!=="html")return s;var f=r.substring(s).charAt(0);if(f==="<"||f==="&"){var h;for(h=f==="<"?">":";";r.substring(s+1).charAt(0)!==h&&!(1+ ++s>r.length););s++}return s},a.backSpaceHtmlChars=function(r,s,u){if(u.contentType!=="html")return s;var f=r.substring(s).charAt(0);if(f===">"||f===";"){var h;for(h=f===">"?"<":"&";r.substring(s-1).charAt(0)!==h&&!(--s<0););s--}return s},l}()),mx=function(){function l(r,s){gx.load(this,s,r),this.begin()}var a=l.prototype;return a.toggle=function(){this.pause.status?this.start():this.stop()},a.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},a.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},a.destroy=function(){this.reset(!1),this.options.onDestroy(this)},a.reset=function(r){r===void 0&&(r=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,r&&(this.insertCursor(),this.options.onReset(this),this.begin())},a.begin=function(){var r=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){r.strPos===0?r.typewrite(r.strings[r.sequence[r.arrayPos]],r.strPos):r.backspace(r.strings[r.sequence[r.arrayPos]],r.strPos)},this.startDelay)},a.typewrite=function(r,s){var u=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var f=this.humanizer(this.typeSpeed),h=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=q0.typeHtmlChars(r,s,u);var m=0,p=r.substring(s);if(p.charAt(0)==="^"&&/^\^\d+/.test(p)){var g=1;g+=(p=/\d+/.exec(p)[0]).length,m=parseInt(p),u.temporaryPause=!0,u.options.onTypingPaused(u.arrayPos,u),r=r.substring(0,s)+r.substring(s+g),u.toggleBlinking(!0)}if(p.charAt(0)==="`"){for(;r.substring(s+h).charAt(0)!=="`"&&(h++,!(s+h>r.length)););var v=r.substring(0,s),_=r.substring(v.length+1,s+h),x=r.substring(s+h+1);r=v+_+x,h--}u.timeout=setTimeout(function(){u.toggleBlinking(!1),s>=r.length?u.doneTyping(r,s):u.keepTyping(r,s,h),u.temporaryPause&&(u.temporaryPause=!1,u.options.onTypingResumed(u.arrayPos,u))},m)},f):this.setPauseStatus(r,s,!0)},a.keepTyping=function(r,s,u){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var f=r.substring(0,s+=u);this.replaceText(f),this.typewrite(r,s)},a.doneTyping=function(r,s){var u=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){u.backspace(r,s)},this.backDelay))},a.backspace=function(r,s){var u=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var f=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=q0.backSpaceHtmlChars(r,s,u);var h=r.substring(0,s);if(u.replaceText(h),u.smartBackspace){var m=u.strings[u.arrayPos+1];u.stopNum=m&&h===m.substring(0,s)?s:0}s>u.stopNum?(s--,u.backspace(r,s)):s<=u.stopNum&&(u.arrayPos++,u.arrayPos===u.strings.length?(u.arrayPos=0,u.options.onLastStringBackspaced(),u.shuffleStringsIfNeeded(),u.begin()):u.typewrite(u.strings[u.sequence[u.arrayPos]],s))},f)}else this.setPauseStatus(r,s,!1)},a.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},a.setPauseStatus=function(r,s,u){this.pause.typewrite=u,this.pause.curString=r,this.pause.curStrPos=s},a.toggleBlinking=function(r){this.cursor&&(this.pause.status||this.cursorBlinking!==r&&(this.cursorBlinking=r,r?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},a.humanizer=function(r){return Math.round(Math.random()*r/2)+r},a.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},a.initFadeOut=function(){var r=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){r.arrayPos++,r.replaceText(""),r.strings.length>r.arrayPos?r.typewrite(r.strings[r.sequence[r.arrayPos]],0):(r.typewrite(r.strings[0],0),r.arrayPos=0)},this.fadeOutDelay)},a.replaceText=function(r){this.attr?this.el.setAttribute(this.attr,r):this.isInput?this.el.value=r:this.contentType==="html"?this.el.innerHTML=r:this.el.textContent=r},a.bindFocusEvents=function(){var r=this;this.isInput&&(this.el.addEventListener("focus",function(s){r.stop()}),this.el.addEventListener("blur",function(s){r.el.value&&r.el.value.length!==0||r.start()}))},a.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},l}();function hc({icon:l,href:a,id:r}){return U.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"social-button",id:r,children:U.jsx("iconify-icon",{icon:l})})}function vx({to:l,label:a}){return U.jsxs(dn,{to:l,className:"back-button",children:[U.jsx("iconify-icon",{icon:"ic:baseline-keyboard-backspace",width:"24",height:"24"}),a]})}function bx({icon:l,label:a,action:r}){return U.jsxs("button",{className:"open-button",onClick:r,children:[U.jsx("iconify-icon",{icon:l,width:"24",height:"24"}),a]})}function yx(){return U.jsxs("div",{className:"social-list",children:[U.jsx(hc,{href:"https://linkedin.com/in/hirakada/",icon:"mdi:linkedin",id:"linkedin"}),U.jsx(hc,{href:"https://instagram.com/hirakada/",icon:"mdi:instagram",id:"instagram"}),U.jsx(hc,{href:"https://github.com/Hirakada",icon:"mdi:github",id:"github"})]})}function Ng({iconUrl:l,name:a,type:r}){return U.jsxs("div",{className:"tag-item","data-type":r,children:[l&&U.jsx("img",{src:l,alt:a,className:"tag-icon"}),U.jsx("span",{className:"tag-name",children:a})]})}function _x({imageUrl:l,name:a,websiteUrl:r,linkedinUrl:s,roleOnProject:u}){const[f,h]=Q.useState(!1),m=Q.useRef(null),p=r&&s,g=r&&!s||!r&&s,v=r&&!s,_=s&&!r;Q.useEffect(()=>{function T(w){m.current&&!m.current.contains(w.target)&&h(!1)}return document.addEventListener("mousedown",T),()=>{document.removeEventListener("mousedown",T)}},[m]);const x=()=>{p?h(T=>!T):v?window.open(r,"_blank","noopener noreferrer"):_&&window.open(s,"_blank","noopener noreferrer")};return U.jsxs("div",{className:`collaborator-tag ${p||g?"clickable":""}`,onClick:x,ref:m,children:[l&&U.jsx("img",{src:l,alt:a,className:"collaborator-avatar"}),U.jsx("span",{className:"collaborator-name",children:a}),U.jsx("p",{className:"project-role",children:u}),p&&U.jsx("div",{className:"dropdown-indicator",children:"▼"}),p&&f&&U.jsxs("div",{className:"collaborator-dropdown",children:[U.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"dropdown-link",onClick:()=>h(!1),children:"Website"}),U.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"dropdown-link",onClick:()=>h(!1),children:"LinkedIn"})]})]})}function qg({type:l,content:a}){return console.log(l,a),U.jsxs("p",{className:"bulletTag","data-type":l,children:[U.jsx("span",{}),a]})}function Xc({id:l,coverImage:a,title:r,collaborators:s,attributes:u,projectUrl:f,descriptiveTitleSlug:h,status:m}){const p=h;return U.jsx(dn,{to:`/project/${p}`,className:"project-card-link",style:{textDecoration:"none",color:"inherit"},children:U.jsxs("div",{className:"project",children:[U.jsx("img",{src:a,alt:`Cover image for ${r}`,className:"cardImage"}),U.jsx(qg,{type:m,content:m}),U.jsx("h5",{className:"projectName",children:r}),U.jsxs("div",{className:"cardSection",children:[u&&u.length>0&&U.jsxs("ul",{className:`attributesList ${u.length>3?"enabled-info":""}`,children:[u.slice(0,3).map(g=>U.jsx("li",{className:"attributeItem",children:g.name},g.id)),u.length>3&&U.jsx("li",{className:"more-indicator",children:U.jsxs("span",{className:"more-count",children:["+",u.length-3]})})]}),s&&s.length>0&&U.jsxs("ul",{className:`collaboratorsList ${s.length>3?"enabled-info":""}`,children:[s.slice(0,3).map(g=>U.jsx("li",{className:"collaboratorItem",children:g.profileImage&&U.jsx("img",{src:g.profileImage,alt:`Profile of ${g.name}`,className:"collaborator-profile-pic"})},g.id)),s.length>3&&U.jsx("li",{className:"collaboratorItem more-indicator",children:U.jsxs("span",{className:"more-count",children:["+",s.length-3]})})]})]})]})})}function xx({projects:l,attributes:a,globalLoading:r}){const s=Q.useRef(null);let[u,f]=Q.useState([]),[h,m]=Q.useState([]);return Q.useEffect(()=>{if(!r&&s.current){const p=new mx(s.current,{strings:["UI/UX Designer","Frontend Developer","Graphic Designer","Digital Marketer"],typeSpeed:80,backSpeed:50,backDelay:1e3,loop:!0,showCursor:!1});return()=>{p.destroy()}}},[r]),Q.useEffect(()=>{if(!r){if(l&&l.length>0){let p=l.filter(g=>g.isFeatured===!0);f(p)}else f([]);if(a&&a.length>0){const p=["language","framework","tool"],g=[...a].sort((v,_)=>{const x=p.indexOf(v.type),T=p.indexOf(_.type);return x===-1&&T===-1?v.name.localeCompare(_.name):x===-1?1:T===-1||x<T?-1:x>T?1:v.name.localeCompare(_.name)});m(g)}else m([])}},[l,a,r]),U.jsxs(U.Fragment,{children:[U.jsxs("section",{className:"hero-section first-section",children:[U.jsxs("div",{className:"greeting",children:[U.jsx("h2",{children:"Hi! I am"}),U.jsx("h1",{className:"role",children:U.jsx("span",{className:"auto-type",id:"role",ref:s})})]}),U.jsx(yx,{})]}),U.jsx("div",{className:"key-skills-section",children:h.length>0?U.jsx("div",{className:"skills-grid",children:h.map(p=>U.jsx(Ng,{iconUrl:p.icon_url,name:p.name,type:p.type},p.id))}):null}),U.jsxs("section",{className:"featured-projects-section",children:[U.jsx("h2",{children:"Featured Projects"}),U.jsx("p",{className:"section-description text-description",children:"Here's a curated selection of my most impactful and innovative projects, highlighting key skills and creative solutions."}),u.length>0?U.jsx("div",{className:"normal-grid",children:u.map(p=>U.jsx(Xc,{id:p.id,coverImage:p.coverImage,title:p.title,collaborators:p.collaborators,attributes:p.attributes,projectUrl:p.projectUrl,status:p.projectStatus,descriptiveTitleSlug:p.descriptiveTitleSlug},p.id))}):null]})]})}function Sx({projects:l,attributes:a,globalLoading:r}){let[s,u]=Q.useState([]),[f,h]=Q.useState([]);return Q.useEffect(()=>{r?(u([]),h([])):(u(l||[]),h(a||[]))},[l,a,r]),r?null:U.jsx(U.Fragment,{children:U.jsxs("section",{className:"projects-section first-section",children:[U.jsx("h2",{children:"My Projects"}),U.jsx("p",{className:"section-description text-description",children:"Explore a diverse portfolio of my work, ranging from web development to graphic design, showcasing a blend of creativity and technical skill."}),s.length>0?U.jsx("div",{className:"normal-grid",children:s.map(m=>U.jsx(Xc,{id:m.id,coverImage:m.coverImage,title:m.title,collaborators:m.collaborators,attributes:m.attributes,projectUrl:m.projectUrl,status:m.projectStatus,descriptiveTitleSlug:m.descriptiveTitleSlug},m.id))}):null]})})}var So=function(l,a){return l<a?-1:l>a?1:0},L0=function(l){return l.reduce(function(a,r){return a+r},0)},wx=function(){function l(r){this.colors=r}var a=l.prototype;return a.palette=function(){return this.colors},a.map=function(r){return r},l}(),Ox=function(){function l(f,h,m){return(f<<10)+(h<<5)+m}function a(f){var h=[],m=!1;function p(){h.sort(f),m=!0}return{push:function(g){h.push(g),m=!1},peek:function(g){return m||p(),g===void 0&&(g=h.length-1),h[g]},pop:function(){return m||p(),h.pop()},size:function(){return h.length},map:function(g){return h.map(g)},debug:function(){return m||p(),h}}}function r(f,h,m,p,g,v,_){var x=this;x.r1=f,x.r2=h,x.g1=m,x.g2=p,x.b1=g,x.b2=v,x.histo=_}function s(){this.vboxes=new a(function(f,h){return So(f.vbox.count()*f.vbox.volume(),h.vbox.count()*h.vbox.volume())})}function u(f,h){if(h.count()){var m=h.r2-h.r1+1,p=h.g2-h.g1+1,g=Math.max.apply(null,[m,p,h.b2-h.b1+1]);if(h.count()==1)return[h.copy()];var v,_,x,T,w=0,k=[],A=[];if(g==m)for(v=h.r1;v<=h.r2;v++){for(T=0,_=h.g1;_<=h.g2;_++)for(x=h.b1;x<=h.b2;x++)T+=f[l(v,_,x)]||0;k[v]=w+=T}else if(g==p)for(v=h.g1;v<=h.g2;v++){for(T=0,_=h.r1;_<=h.r2;_++)for(x=h.b1;x<=h.b2;x++)T+=f[l(_,v,x)]||0;k[v]=w+=T}else for(v=h.b1;v<=h.b2;v++){for(T=0,_=h.r1;_<=h.r2;_++)for(x=h.g1;x<=h.g2;x++)T+=f[l(_,x,v)]||0;k[v]=w+=T}return k.forEach(function(P,X){A[X]=w-P}),function(P){var X,z,$,Y,G,I=P+"1",se=P+"2",ce=0;for(v=h[I];v<=h[se];v++)if(k[v]>w/2){for($=h.copy(),Y=h.copy(),G=(X=v-h[I])<=(z=h[se]-v)?Math.min(h[se]-1,~~(v+z/2)):Math.max(h[I],~~(v-1-X/2));!k[G];)G++;for(ce=A[G];!ce&&k[G-1];)ce=A[--G];return $[se]=G,Y[I]=$[se]+1,[$,Y]}}(g==m?"r":g==p?"g":"b")}}return r.prototype={volume:function(f){var h=this;return h._volume&&!f||(h._volume=(h.r2-h.r1+1)*(h.g2-h.g1+1)*(h.b2-h.b1+1)),h._volume},count:function(f){var h=this,m=h.histo;if(!h._count_set||f){var p,g,v,_=0;for(p=h.r1;p<=h.r2;p++)for(g=h.g1;g<=h.g2;g++)for(v=h.b1;v<=h.b2;v++)_+=m[l(p,g,v)]||0;h._count=_,h._count_set=!0}return h._count},copy:function(){var f=this;return new r(f.r1,f.r2,f.g1,f.g2,f.b1,f.b2,f.histo)},avg:function(f){var h=this,m=h.histo;if(!h._avg||f){var p,g,v,_,x=0,T=0,w=0,k=0;if(h.r1===h.r2&&h.g1===h.g2&&h.b1===h.b2)h._avg=[h.r1<<3,h.g1<<3,h.b1<<3];else{for(g=h.r1;g<=h.r2;g++)for(v=h.g1;v<=h.g2;v++)for(_=h.b1;_<=h.b2;_++)x+=p=m[l(g,v,_)]||0,T+=p*(g+.5)*8,w+=p*(v+.5)*8,k+=p*(_+.5)*8;h._avg=x?[~~(T/x),~~(w/x),~~(k/x)]:[~~(8*(h.r1+h.r2+1)/2),~~(8*(h.g1+h.g2+1)/2),~~(8*(h.b1+h.b2+1)/2)]}}return h._avg},contains:function(f){var h=this,m=f[0]>>3;return gval=f[1]>>3,bval=f[2]>>3,m>=h.r1&&m<=h.r2&&gval>=h.g1&&gval<=h.g2&&bval>=h.b1&&bval<=h.b2}},s.prototype={push:function(f){this.vboxes.push({vbox:f,color:f.avg()})},palette:function(){return this.vboxes.map(function(f){return f.color})},size:function(){return this.vboxes.size()},map:function(f){for(var h=this.vboxes,m=0;m<h.size();m++)if(h.peek(m).vbox.contains(f))return h.peek(m).color;return this.nearest(f)},nearest:function(f){for(var h,m,p,g=this.vboxes,v=0;v<g.size();v++)((m=Math.sqrt(Math.pow(f[0]-g.peek(v).color[0],2)+Math.pow(f[1]-g.peek(v).color[1],2)+Math.pow(f[2]-g.peek(v).color[2],2)))<h||h===void 0)&&(h=m,p=g.peek(v).color);return p},forcebw:function(){var f=this.vboxes;f.sort(function(g,v){return So(L0(g.color),L0(v.color))});var h=f[0].color;h[0]<5&&h[1]<5&&h[2]<5&&(f[0].color=[0,0,0]);var m=f.length-1,p=f[m].color;p[0]>251&&p[1]>251&&p[2]>251&&(f[m].color=[255,255,255])}},{quantize:function(f,h){if(!Number.isInteger(h)||h<1||h>256)throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");if(!f.length||h<2||h>256||!f.length||h<2||h>256)return!1;for(var m=[],p=new Set,g=0;g<f.length;g++){var v=f[g],_=v.join(",");p.has(_)||(p.add(_),m.push(v))}if(m.length<=h)return new wx(m);var x=function(X){var z,$=new Array(32768);return X.forEach(function(Y){z=l(Y[0]>>3,Y[1]>>3,Y[2]>>3),$[z]=($[z]||0)+1}),$}(f);x.forEach(function(){});var T=function(X,z){var $,Y,G,I=1e6,se=0,ce=1e6,Xe=0,dt=1e6,Le=0;return X.forEach(function(Ut){($=Ut[0]>>3)<I?I=$:$>se&&(se=$),(Y=Ut[1]>>3)<ce?ce=Y:Y>Xe&&(Xe=Y),(G=Ut[2]>>3)<dt?dt=G:G>Le&&(Le=G)}),new r(I,se,ce,Xe,dt,Le,z)}(f,x),w=new a(function(X,z){return So(X.count(),z.count())});function k(X,z){for(var $,Y=X.size(),G=0;G<1e3;){if(Y>=z||G++>1e3)return;if(($=X.pop()).count()){var I=u(x,$),se=I[0],ce=I[1];if(!se)return;X.push(se),ce&&(X.push(ce),Y++)}else X.push($),G++}}w.push(T),k(w,.75*h);for(var A=new a(function(X,z){return So(X.count()*X.volume(),z.count()*z.volume())});w.size();)A.push(w.pop());k(A,h);for(var P=new s;A.size();)P.push(A.pop());return P}}}().quantize,Lg=function(l){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=l.naturalWidth,this.height=this.canvas.height=l.naturalHeight,this.context.drawImage(l,0,0,this.width,this.height)};Lg.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var bi=function(){};bi.prototype.getColor=function(l,a){return a===void 0&&(a=10),this.getPalette(l,5,a)[0]},bi.prototype.getPalette=function(l,a,r){var s=function(m){var p=m.colorCount,g=m.quality;if(p!==void 0&&Number.isInteger(p)){if(p===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");p=Math.max(p,2),p=Math.min(p,20)}else p=10;return(g===void 0||!Number.isInteger(g)||g<1)&&(g=10),{colorCount:p,quality:g}}({colorCount:a,quality:r}),u=new Lg(l),f=function(m,p,g){for(var v,_,x,T,w,k=m,A=[],P=0;P<p;P+=g)_=k[0+(v=4*P)],x=k[v+1],T=k[v+2],((w=k[v+3])===void 0||w>=125)&&(_>250&&x>250&&T>250||A.push([_,x,T]));return A}(u.getImageData().data,u.width*u.height,s.quality),h=Ox(f,s.colorCount);return h?h.palette():null},bi.prototype.getColorFromUrl=function(l,a,r){var s=this,u=document.createElement("img");u.addEventListener("load",function(){var f=s.getPalette(u,5,r);a(f[0],l)}),u.src=l},bi.prototype.getImageData=function(l,a){var r=new XMLHttpRequest;r.open("GET",l,!0),r.responseType="arraybuffer",r.onload=function(){if(this.status==200){var s=new Uint8Array(this.response);i=s.length;for(var u=new Array(i),f=0;f<s.length;f++)u[f]=String.fromCharCode(s[f]);var h=u.join(""),m=window.btoa(h);a("data:image/png;base64,"+m)}},r.send()},bi.prototype.getColorAsync=function(l,a,r){var s=this;this.getImageData(l,function(u){var f=document.createElement("img");f.addEventListener("load",function(){var h=s.getPalette(f,5,r);a(h[0],this)}),f.src=u})};const Tx=l=>{let a=l.length,r;for(;a!==0;)r=Math.floor(Math.random()*a),a--,[l[a],l[r]]=[l[r],l[a]];return l};function Ex({projects:l,globalLoading:a}){let{descriptiveTitleSlug:r}=gy(),[s,u]=Q.useState(null),[f,h]=Q.useState(null),[m,p]=Q.useState(null);if(Q.useEffect(()=>{if(h(null),u(null),p(null),!r){h("No project slug found in URL.");return}if(!a&&l)if(l.length>0){let w=l.find(k=>k.descriptiveTitleSlug===r);if(w){if(u(w),w.coverImage){const k=new bi,A=new Image;A.addEventListener("load",function(){const P=k.getColor(A);p(`rgb(${P[0]}, ${P[1]}, ${P[2]})`)}),A.crossOrigin="Anonymous",A.src=w.coverImage}}else h("Project not found. It might have been removed or the link is invalid.")}else h("No project data available. Please visit the main projects page first.")},[r,l,a]),a)return null;if(f)return U.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen text-red-600 p-4",children:[U.jsx("h2",{children:"Error Loading Project Details"}),U.jsx("p",{children:f}),U.jsx(dn,{to:"/",className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Go back to Projects"})]});if(!s)return null;let g=l.filter(w=>w.id!==s.id),x=Tx([...g]).slice(0,3);const T=m?{backgroundImage:`radial-gradient(
            circle at center,
            ${m} 0%,
            ${m} 30%,
            rgba(${parseInt(m.slice(4,-1).split(",")[0])}, ${parseInt(m.slice(4,-1).split(",")[1])}, ${parseInt(m.slice(4,-1).split(",")[2])}, 0.8) 70%,
            transparent 100% 
        )`}:{};return U.jsxs(U.Fragment,{children:[U.jsx("section",{className:"global-spotlight-background",style:T}),U.jsx("span",{className:"back",children:U.jsx(vx,{to:"/project",label:"Back to Projects"})}),U.jsxs("section",{className:"project-detail-section",children:[s.coverImage&&U.jsx("img",{src:s.coverImage,alt:s.title,className:"project-cover-image"}),U.jsxs("div",{className:"project-detail-content",children:[U.jsx("h1",{className:"project-title",children:s.title}),U.jsx("p",{className:"project-description text-description",children:s.description}),U.jsx(qg,{type:[s.projectStatus],content:[s.projectStatus]}),s.attributes&&s.attributes.length>0&&U.jsxs("div",{className:"project-attributes",children:[U.jsx("h3",{children:"Tools:"}),U.jsx("div",{className:"attributes-grid",children:s.attributes.map(w=>U.jsx(Ng,{iconUrl:w.iconUrl,name:w.name,type:w.type},w.id))})]}),s.collaborators&&s.collaborators.length>0&&U.jsxs("div",{className:"project-collaborators",children:[U.jsx("h3",{children:"Collaborators:"}),U.jsx("div",{className:"collaborators-list",children:s.collaborators.map(w=>U.jsx(_x,{name:w.name,imageUrl:w.profileImage,websiteUrl:w.websiteUrl,linkedinUrl:w.linkedinUrl,roleOnProject:w.roleOnProject},w.id))})]}),s.projectUrl&&U.jsx(bx,{icon:"mdi:open-in-new",label:"Open Project",action:()=>window.open(s.projectUrl,"_blank","noopener noreferrer")})]})]}),U.jsxs("section",{className:"other-projects-section",children:[U.jsx("h2",{children:"Other Projects"}),U.jsx("p",{className:"section-description text-description",children:"Curious about our diverse capabilities? Take a look at these other projects to see the range of solutions and creativity we bring to the table."}),x.length>0?U.jsx("div",{className:"normal-grid",children:x.map(w=>U.jsx(Xc,{id:w.id,coverImage:w.coverImage,title:w.title,collaborators:w.collaborators,attributes:w.attributes,projectUrl:w.projectUrl,status:w.projectStatus,descriptiveTitleSlug:w.descriptiveTitleSlug},w.id))}):U.jsx("p",{children:"No other projects available."})]})]})}function kx({globalLoading:l}){if(l)return null;const a=window.location.hostname;return U.jsxs(U.Fragment,{children:[U.jsxs("section",{className:"welcome-section first-section items-start",children:[U.jsxs("div",{className:"flex flex-row items-center justify-center",children:[U.jsx("h2",{children:"Welcome to"}),U.jsx("h2",{className:"domain-name",children:a})]}),U.jsx("p",{className:"section-description text-description",children:"This page provides a comprehensive overview of the website's purpose, its key features, the technologies that power it, and how it contributes to continuous learning and professional growth."})]}),U.jsx("section",{className:"web-section"})]})}function Ax({globalLoading:l}){return l?null:U.jsx(U.Fragment,{children:U.jsxs("section",{className:"journey-section first-section",children:[U.jsx("h1",{children:"My Journey"}),U.jsx("p",{children:"This page will detail my journey, including my experiences, challenges, and milestones."})]})})}function jx(){const{pathname:l}=xi();return Q.useEffect(()=>{window.scrollTo(0,0)},[l]),null}const B0=Y_("https://haackkpsvjlpttequfou.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhYWNra3BzdmpscHR0ZXF1Zm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzUzODQsImV4cCI6MjA2NTA1MTM4NH0.KafohzUXKVzBo6Fs3lXULzXZ5XRWgCY8Jx-wONLTXuI"),Rx=l=>l.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");function Cx(){const[l,a]=Q.useState(!0);let[r,s]=Q.useState([]),[u,f]=Q.useState([]),[h,m]=Q.useState(null);const p=Q.useRef(null);return Q.useEffect(()=>{async function g(){a(!0),m(null);try{let v=sessionStorage.getItem("allProjectsData"),_=sessionStorage.getItem("allAttributesData");if(v&&_)try{console.log("App.jsx: Loading all data from sessionStorage cache."),s(JSON.parse(v)),f(JSON.parse(_)),a(!1);return}catch(P){console.error("App.jsx: Error parsing cached data:",P),sessionStorage.removeItem("allProjectsData"),sessionStorage.removeItem("allAttributesData")}console.log("App.jsx: No valid cache found. Fetching all data from Supabase.");let{data:x,error:T}=await B0.from("projects").select(`
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
                    `);if(T)throw new Error(T.message);let{data:w,error:k}=await B0.from("attributes").select("*");if(k)throw new Error(w.message);let A=x.map(P=>{let X=P.project_attributes.map(G=>({id:G.attributes.id,name:G.attributes.name,type:G.attributes.type,iconUrl:G.attributes.icon_url})),z=P.project_collaborators.map(G=>({id:G.collaborators.id,name:G.collaborators.name,profileImage:G.collaborators.profile_image_url,websiteUrl:G.collaborators.website_url,linkedinUrl:G.collaborators.linkedin_url})),$=null;P.project_images&&P.project_images.length>0&&($=[...P.project_images].sort((I,se)=>I.order-se.order)[0].image_url);let Y=Rx(P.title);return{id:P.id,title:P.title,description:P.long_description,coverImage:$,attributes:X,collaborators:z,projectImages:P.project_images,projectUrl:P.project_url,projectStatus:P.status,isFeatured:P.is_featured,descriptiveTitleSlug:Y}});s(A),f(w),sessionStorage.setItem("allProjectsData",JSON.stringify(A)),sessionStorage.setItem("allAttributesData",JSON.stringify(w))}catch(v){m(v.message||"Failed to load application data."),s([]),f([]),sessionStorage.removeItem("allProjectsData"),sessionStorage.removeItem("allAttributesData")}finally{a(!1)}}g()},[]),h?U.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen text-red-600 p-4",children:[U.jsx("h1",{children:"Application Error"}),U.jsx("p",{children:h}),U.jsx("p",{children:"Please refresh the page or try again later."})]}):U.jsxs(Ly,{basename:"/",children:[U.jsx(jx,{}),l&&U.jsx("div",{className:"flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black z-50 pointer-events-none",children:U.jsx(hx,{color:"#E0E0E0",size:"medium",text:"",textColor:""})}),U.jsx(dx,{}),U.jsx("main",{children:U.jsxs(Cy,{children:[U.jsx(ma,{path:"/",element:U.jsx(xx,{projects:r,attributes:u,globalLoading:l,firstSectionRef:p})}),U.jsx(ma,{path:"/project",element:U.jsx(Sx,{projects:r,attributes:u,globalLoading:l})}),U.jsx(ma,{path:"/project/:descriptiveTitleSlug",element:U.jsx(Ex,{projects:r,globalLoading:l})}),U.jsx(ma,{path:"/doc",element:U.jsx(kx,{globalLoading:l})}),U.jsx(ma,{path:"/journey",element:U.jsx(Ax,{globalLoading:l})}),U.jsx(ma,{path:"*",element:U.jsxs("div",{className:`
                                        flex flex-col items-center justify-center
                                        text-gray-700 bg-gray-50 p-4
                                    `,style:{minHeight:"calc(100vh - 64px)"},children:[U.jsx("h1",{className:"text-6xl font-extrabold text-red-600",children:"404"}),U.jsx("p",{className:"text-2xl mt-4",children:"Page Not Found"}),U.jsx("p",{className:"mt-2 text-lg",children:"The page you are looking for does not exist."}),U.jsx(dn,{to:"/",className:"mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300",children:"Go to Home"})]})})]})})]})}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.0
*/const Bg=Object.freeze({left:0,top:0,width:16,height:16}),jo=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Xr=Object.freeze({...Bg,...jo}),Rc=Object.freeze({...Xr,body:"",hidden:!1}),Dx=Object.freeze({width:null,height:null}),Pg=Object.freeze({...Dx,...jo});function Mx(l,a=0){const r=l.replace(/^-?[0-9.]*/,"");function s(u){for(;u<0;)u+=4;return u%4}if(r===""){const u=parseInt(l);return isNaN(u)?0:s(u)}else if(r!==l){let u=0;switch(r){case"%":u=25;break;case"deg":u=90}if(u){let f=parseFloat(l.slice(0,l.length-r.length));return isNaN(f)?0:(f=f/u,f%1===0?s(f):0)}}return a}const Ux=/[\s,]+/;function zx(l,a){a.split(Ux).forEach(r=>{switch(r.trim()){case"horizontal":l.hFlip=!0;break;case"vertical":l.vFlip=!0;break}})}const Hg={...Pg,preserveAspectRatio:""};function P0(l){const a={...Hg},r=(s,u)=>l.getAttribute(s)||u;return a.width=r("width",null),a.height=r("height",null),a.rotate=Mx(r("rotate","")),zx(a,r("flip","")),a.preserveAspectRatio=r("preserveAspectRatio",r("preserveaspectratio","")),a}function Nx(l,a){for(const r in Hg)if(l[r]!==a[r])return!0;return!1}const Gg=/^[a-z0-9]+(-[a-z0-9]+)*$/,Qr=(l,a,r,s="")=>{const u=l.split(":");if(l.slice(0,1)==="@"){if(u.length<2||u.length>3)return null;s=u.shift().slice(1)}if(u.length>3||!u.length)return null;if(u.length>1){const m=u.pop(),p=u.pop(),g={provider:u.length>0?u[0]:s,prefix:p,name:m};return a&&!wo(g)?null:g}const f=u[0],h=f.split("-");if(h.length>1){const m={provider:s,prefix:h.shift(),name:h.join("-")};return a&&!wo(m)?null:m}if(r&&s===""){const m={provider:s,prefix:"",name:f};return a&&!wo(m,r)?null:m}return null},wo=(l,a)=>l?!!((a&&l.prefix===""||l.prefix)&&l.name):!1;function qx(l,a){const r={};!l.hFlip!=!a.hFlip&&(r.hFlip=!0),!l.vFlip!=!a.vFlip&&(r.vFlip=!0);const s=((l.rotate||0)+(a.rotate||0))%4;return s&&(r.rotate=s),r}function H0(l,a){const r=qx(l,a);for(const s in Rc)s in jo?s in l&&!(s in r)&&(r[s]=jo[s]):s in a?r[s]=a[s]:s in l&&(r[s]=l[s]);return r}function Lx(l,a){const r=l.icons,s=l.aliases||Object.create(null),u=Object.create(null);function f(h){if(r[h])return u[h]=[];if(!(h in u)){u[h]=null;const m=s[h]&&s[h].parent,p=m&&f(m);p&&(u[h]=[m].concat(p))}return u[h]}return Object.keys(r).concat(Object.keys(s)).forEach(f),u}function Bx(l,a,r){const s=l.icons,u=l.aliases||Object.create(null);let f={};function h(m){f=H0(s[m]||u[m],f)}return h(a),r.forEach(h),H0(l,f)}function $g(l,a){const r=[];if(typeof l!="object"||typeof l.icons!="object")return r;l.not_found instanceof Array&&l.not_found.forEach(u=>{a(u,null),r.push(u)});const s=Lx(l);for(const u in s){const f=s[u];f&&(a(u,Bx(l,u,f)),r.push(u))}return r}const Px={provider:"",aliases:{},not_found:{},...Bg};function dc(l,a){for(const r in a)if(r in l&&typeof l[r]!=typeof a[r])return!1;return!0}function Yg(l){if(typeof l!="object"||l===null)return null;const a=l;if(typeof a.prefix!="string"||!l.icons||typeof l.icons!="object"||!dc(l,Px))return null;const r=a.icons;for(const u in r){const f=r[u];if(!u||typeof f.body!="string"||!dc(f,Rc))return null}const s=a.aliases||Object.create(null);for(const u in s){const f=s[u],h=f.parent;if(!u||typeof h!="string"||!r[h]&&!s[h]||!dc(f,Rc))return null}return a}const Ro=Object.create(null);function Hx(l,a){return{provider:l,prefix:a,icons:Object.create(null),missing:new Set}}function gn(l,a){const r=Ro[l]||(Ro[l]=Object.create(null));return r[a]||(r[a]=Hx(l,a))}function Xg(l,a){return Yg(a)?$g(a,(r,s)=>{s?l.icons[r]=s:l.missing.add(r)}):[]}function Gx(l,a,r){try{if(typeof r.body=="string")return l.icons[a]={...r},!0}catch{}return!1}function $x(l,a){let r=[];return(typeof l=="string"?[l]:Object.keys(Ro)).forEach(u=>{(typeof u=="string"&&typeof a=="string"?[a]:Object.keys(Ro[u]||{})).forEach(h=>{const m=gn(u,h);r=r.concat(Object.keys(m.icons).map(p=>(u!==""?"@"+u+":":"")+h+":"+p))})}),r}let Nr=!1;function Qg(l){return typeof l=="boolean"&&(Nr=l),Nr}function qr(l){const a=typeof l=="string"?Qr(l,!0,Nr):l;if(a){const r=gn(a.provider,a.prefix),s=a.name;return r.icons[s]||(r.missing.has(s)?null:void 0)}}function Vg(l,a){const r=Qr(l,!0,Nr);if(!r)return!1;const s=gn(r.provider,r.prefix);return a?Gx(s,r.name,a):(s.missing.add(r.name),!0)}function G0(l,a){if(typeof l!="object")return!1;if(typeof a!="string"&&(a=l.provider||""),Nr&&!a&&!l.prefix){let u=!1;return Yg(l)&&(l.prefix="",$g(l,(f,h)=>{Vg(f,h)&&(u=!0)})),u}const r=l.prefix;if(!wo({prefix:r,name:"a"}))return!1;const s=gn(a,r);return!!Xg(s,l)}function Yx(l){return!!qr(l)}function Xx(l){const a=qr(l);return a&&{...Xr,...a}}function Qx(l){const a={loaded:[],missing:[],pending:[]},r=Object.create(null);l.sort((u,f)=>u.provider!==f.provider?u.provider.localeCompare(f.provider):u.prefix!==f.prefix?u.prefix.localeCompare(f.prefix):u.name.localeCompare(f.name));let s={provider:"",prefix:"",name:""};return l.forEach(u=>{if(s.name===u.name&&s.prefix===u.prefix&&s.provider===u.provider)return;s=u;const f=u.provider,h=u.prefix,m=u.name,p=r[f]||(r[f]=Object.create(null)),g=p[h]||(p[h]=gn(f,h));let v;m in g.icons?v=a.loaded:h===""||g.missing.has(m)?v=a.missing:v=a.pending;const _={provider:f,prefix:h,name:m};v.push(_)}),a}function Zg(l,a){l.forEach(r=>{const s=r.loaderCallbacks;s&&(r.loaderCallbacks=s.filter(u=>u.id!==a))})}function Vx(l){l.pendingCallbacksFlag||(l.pendingCallbacksFlag=!0,setTimeout(()=>{l.pendingCallbacksFlag=!1;const a=l.loaderCallbacks?l.loaderCallbacks.slice(0):[];if(!a.length)return;let r=!1;const s=l.provider,u=l.prefix;a.forEach(f=>{const h=f.icons,m=h.pending.length;h.pending=h.pending.filter(p=>{if(p.prefix!==u)return!0;const g=p.name;if(l.icons[g])h.loaded.push({provider:s,prefix:u,name:g});else if(l.missing.has(g))h.missing.push({provider:s,prefix:u,name:g});else return r=!0,!0;return!1}),h.pending.length!==m&&(r||Zg([l],f.id),f.callback(h.loaded.slice(0),h.missing.slice(0),h.pending.slice(0),f.abort))})}))}let Zx=0;function Kx(l,a,r){const s=Zx++,u=Zg.bind(null,r,s);if(!a.pending.length)return u;const f={id:s,icons:a,callback:l,abort:u};return r.forEach(h=>{(h.loaderCallbacks||(h.loaderCallbacks=[])).push(f)}),u}const Cc=Object.create(null);function $0(l,a){Cc[l]=a}function Dc(l){return Cc[l]||Cc[""]}function Jx(l,a=!0,r=!1){const s=[];return l.forEach(u=>{const f=typeof u=="string"?Qr(u,a,r):u;f&&s.push(f)}),s}var Ix={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Fx(l,a,r,s){const u=l.resources.length,f=l.random?Math.floor(Math.random()*u):l.index;let h;if(l.random){let G=l.resources.slice(0);for(h=[];G.length>1;){const I=Math.floor(Math.random()*G.length);h.push(G[I]),G=G.slice(0,I).concat(G.slice(I+1))}h=h.concat(G)}else h=l.resources.slice(f).concat(l.resources.slice(0,f));const m=Date.now();let p="pending",g=0,v,_=null,x=[],T=[];typeof s=="function"&&T.push(s);function w(){_&&(clearTimeout(_),_=null)}function k(){p==="pending"&&(p="aborted"),w(),x.forEach(G=>{G.status==="pending"&&(G.status="aborted")}),x=[]}function A(G,I){I&&(T=[]),typeof G=="function"&&T.push(G)}function P(){return{startTime:m,payload:a,status:p,queriesSent:g,queriesPending:x.length,subscribe:A,abort:k}}function X(){p="failed",T.forEach(G=>{G(void 0,v)})}function z(){x.forEach(G=>{G.status==="pending"&&(G.status="aborted")}),x=[]}function $(G,I,se){const ce=I!=="success";switch(x=x.filter(Xe=>Xe!==G),p){case"pending":break;case"failed":if(ce||!l.dataAfterTimeout)return;break;default:return}if(I==="abort"){v=se,X();return}if(ce){v=se,x.length||(h.length?Y():X());return}if(w(),z(),!l.random){const Xe=l.resources.indexOf(G.resource);Xe!==-1&&Xe!==l.index&&(l.index=Xe)}p="completed",T.forEach(Xe=>{Xe(se)})}function Y(){if(p!=="pending")return;w();const G=h.shift();if(G===void 0){if(x.length){_=setTimeout(()=>{w(),p==="pending"&&(z(),X())},l.timeout);return}X();return}const I={status:"pending",resource:G,callback:(se,ce)=>{$(I,se,ce)}};x.push(I),g++,_=setTimeout(Y,l.rotate),r(G,a,I.callback)}return setTimeout(Y),P}function Kg(l){const a={...Ix,...l};let r=[];function s(){r=r.filter(m=>m().status==="pending")}function u(m,p,g){const v=Fx(a,m,p,(_,x)=>{s(),g&&g(_,x)});return r.push(v),v}function f(m){return r.find(p=>m(p))||null}return{query:u,find:f,setIndex:m=>{a.index=m},getIndex:()=>a.index,cleanup:s}}function Qc(l){let a;if(typeof l.resources=="string")a=[l.resources];else if(a=l.resources,!(a instanceof Array)||!a.length)return null;return{resources:a,path:l.path||"/",maxURL:l.maxURL||500,rotate:l.rotate||750,timeout:l.timeout||5e3,random:l.random===!0,index:l.index||0,dataAfterTimeout:l.dataAfterTimeout!==!1}}const zo=Object.create(null),Tr=["https://api.simplesvg.com","https://api.unisvg.com"],Oo=[];for(;Tr.length>0;)Tr.length===1||Math.random()>.5?Oo.push(Tr.shift()):Oo.push(Tr.pop());zo[""]=Qc({resources:["https://api.iconify.design"].concat(Oo)});function Y0(l,a){const r=Qc(a);return r===null?!1:(zo[l]=r,!0)}function No(l){return zo[l]}function Wx(){return Object.keys(zo)}function X0(){}const pc=Object.create(null);function eS(l){if(!pc[l]){const a=No(l);if(!a)return;const r=Kg(a),s={config:a,redundancy:r};pc[l]=s}return pc[l]}function Jg(l,a,r){let s,u;if(typeof l=="string"){const f=Dc(l);if(!f)return r(void 0,424),X0;u=f.send;const h=eS(l);h&&(s=h.redundancy)}else{const f=Qc(l);if(f){s=Kg(f);const h=l.resources?l.resources[0]:"",m=Dc(h);m&&(u=m.send)}}return!s||!u?(r(void 0,424),X0):s.query(a,u,r)().abort}function Q0(){}function tS(l){l.iconsLoaderFlag||(l.iconsLoaderFlag=!0,setTimeout(()=>{l.iconsLoaderFlag=!1,Vx(l)}))}function nS(l){const a=[],r=[];return l.forEach(s=>{(s.match(Gg)?a:r).push(s)}),{valid:a,invalid:r}}function Er(l,a,r){function s(){const u=l.pendingIcons;a.forEach(f=>{u&&u.delete(f),l.icons[f]||l.missing.add(f)})}if(r&&typeof r=="object")try{if(!Xg(l,r).length){s();return}}catch(u){console.error(u)}s(),tS(l)}function V0(l,a){l instanceof Promise?l.then(r=>{a(r)}).catch(()=>{a(null)}):a(l)}function aS(l,a){l.iconsToLoad?l.iconsToLoad=l.iconsToLoad.concat(a).sort():l.iconsToLoad=a,l.iconsQueueFlag||(l.iconsQueueFlag=!0,setTimeout(()=>{l.iconsQueueFlag=!1;const{provider:r,prefix:s}=l,u=l.iconsToLoad;if(delete l.iconsToLoad,!u||!u.length)return;const f=l.loadIcon;if(l.loadIcons&&(u.length>1||!f)){V0(l.loadIcons(u,s,r),v=>{Er(l,u,v)});return}if(f){u.forEach(v=>{const _=f(v,s,r);V0(_,x=>{const T=x?{prefix:s,icons:{[v]:x}}:null;Er(l,[v],T)})});return}const{valid:h,invalid:m}=nS(u);if(m.length&&Er(l,m,null),!h.length)return;const p=s.match(Gg)?Dc(r):null;if(!p){Er(l,h,null);return}p.prepare(r,s,h).forEach(v=>{Jg(r,v,_=>{Er(l,v.icons,_)})})}))}const Vc=(l,a)=>{const r=Jx(l,!0,Qg()),s=Qx(r);if(!s.pending.length){let p=!0;return a&&setTimeout(()=>{p&&a(s.loaded,s.missing,s.pending,Q0)}),()=>{p=!1}}const u=Object.create(null),f=[];let h,m;return s.pending.forEach(p=>{const{provider:g,prefix:v}=p;if(v===m&&g===h)return;h=g,m=v,f.push(gn(g,v));const _=u[g]||(u[g]=Object.create(null));_[v]||(_[v]=[])}),s.pending.forEach(p=>{const{provider:g,prefix:v,name:_}=p,x=gn(g,v),T=x.pendingIcons||(x.pendingIcons=new Set);T.has(_)||(T.add(_),u[g][v].push(_))}),f.forEach(p=>{const g=u[p.provider][p.prefix];g.length&&aS(p,g)}),a?Kx(a,s,f):Q0},iS=l=>new Promise((a,r)=>{const s=typeof l=="string"?Qr(l,!0):l;if(!s){r(l);return}Vc([s||l],u=>{if(u.length&&s){const f=qr(s);if(f){a({...Xr,...f});return}}r(l)})});function Z0(l){try{const a=typeof l=="string"?JSON.parse(l):l;if(typeof a.body=="string")return{...a}}catch{}}function rS(l,a){if(typeof l=="object")return{data:Z0(l),value:l};if(typeof l!="string")return{value:l};if(l.includes("{")){const f=Z0(l);if(f)return{data:f,value:l}}const r=Qr(l,!0,!0);if(!r)return{value:l};const s=qr(r);if(s!==void 0||!r.prefix)return{value:l,name:r,data:s};const u=Vc([r],()=>a(l,r,qr(r)));return{value:l,name:r,loading:u}}let Ig=!1;try{Ig=navigator.vendor.indexOf("Apple")===0}catch{}function lS(l,a){switch(a){case"svg":case"bg":case"mask":return a}return a!=="style"&&(Ig||l.indexOf("<a")===-1)?"svg":l.indexOf("currentColor")===-1?"bg":"mask"}const oS=/(-?[0-9.]*[0-9]+[0-9.]*)/g,sS=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Mc(l,a,r){if(a===1)return l;if(r=r||100,typeof l=="number")return Math.ceil(l*a*r)/r;if(typeof l!="string")return l;const s=l.split(oS);if(s===null||!s.length)return l;const u=[];let f=s.shift(),h=sS.test(f);for(;;){if(h){const m=parseFloat(f);isNaN(m)?u.push(f):u.push(Math.ceil(m*a*r)/r)}else u.push(f);if(f=s.shift(),f===void 0)return u.join("");h=!h}}function uS(l,a="defs"){let r="";const s=l.indexOf("<"+a);for(;s>=0;){const u=l.indexOf(">",s),f=l.indexOf("</"+a);if(u===-1||f===-1)break;const h=l.indexOf(">",f);if(h===-1)break;r+=l.slice(u+1,f).trim(),l=l.slice(0,s).trim()+l.slice(h+1)}return{defs:r,content:l}}function cS(l,a){return l?"<defs>"+l+"</defs>"+a:a}function fS(l,a,r){const s=uS(l);return cS(s.defs,a+s.content+r)}const hS=l=>l==="unset"||l==="undefined"||l==="none";function Fg(l,a){const r={...Xr,...l},s={...Pg,...a},u={left:r.left,top:r.top,width:r.width,height:r.height};let f=r.body;[r,s].forEach(k=>{const A=[],P=k.hFlip,X=k.vFlip;let z=k.rotate;P?X?z+=2:(A.push("translate("+(u.width+u.left).toString()+" "+(0-u.top).toString()+")"),A.push("scale(-1 1)"),u.top=u.left=0):X&&(A.push("translate("+(0-u.left).toString()+" "+(u.height+u.top).toString()+")"),A.push("scale(1 -1)"),u.top=u.left=0);let $;switch(z<0&&(z-=Math.floor(z/4)*4),z=z%4,z){case 1:$=u.height/2+u.top,A.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:A.unshift("rotate(180 "+(u.width/2+u.left).toString()+" "+(u.height/2+u.top).toString()+")");break;case 3:$=u.width/2+u.left,A.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}z%2===1&&(u.left!==u.top&&($=u.left,u.left=u.top,u.top=$),u.width!==u.height&&($=u.width,u.width=u.height,u.height=$)),A.length&&(f=fS(f,'<g transform="'+A.join(" ")+'">',"</g>"))});const h=s.width,m=s.height,p=u.width,g=u.height;let v,_;h===null?(_=m===null?"1em":m==="auto"?g:m,v=Mc(_,p/g)):(v=h==="auto"?p:h,_=m===null?Mc(v,g/p):m==="auto"?g:m);const x={},T=(k,A)=>{hS(A)||(x[k]=A.toString())};T("width",v),T("height",_);const w=[u.left,u.top,p,g];return x.viewBox=w.join(" "),{attributes:x,viewBox:w,body:f}}function Zc(l,a){let r=l.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in a)r+=" "+s+'="'+a[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+r+">"+l+"</svg>"}function dS(l){return l.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function pS(l){return"data:image/svg+xml,"+dS(l)}function Wg(l){return'url("'+pS(l)+'")'}const gS=()=>{let l;try{if(l=fetch,typeof l=="function")return l}catch{}};let Co=gS();function mS(l){Co=l}function vS(){return Co}function bS(l,a){const r=No(l);if(!r)return 0;let s;if(!r.maxURL)s=0;else{let u=0;r.resources.forEach(h=>{u=Math.max(u,h.length)});const f=a+".json?icons=";s=r.maxURL-u-r.path.length-f.length}return s}function yS(l){return l===404}const _S=(l,a,r)=>{const s=[],u=bS(l,a),f="icons";let h={type:f,provider:l,prefix:a,icons:[]},m=0;return r.forEach((p,g)=>{m+=p.length+1,m>=u&&g>0&&(s.push(h),h={type:f,provider:l,prefix:a,icons:[]},m=p.length),h.icons.push(p)}),s.push(h),s};function xS(l){if(typeof l=="string"){const a=No(l);if(a)return a.path}return"/"}const SS=(l,a,r)=>{if(!Co){r("abort",424);return}let s=xS(a.provider);switch(a.type){case"icons":{const f=a.prefix,m=a.icons.join(","),p=new URLSearchParams({icons:m});s+=f+".json?"+p.toString();break}case"custom":{const f=a.uri;s+=f.slice(0,1)==="/"?f.slice(1):f;break}default:r("abort",400);return}let u=503;Co(l+s).then(f=>{const h=f.status;if(h!==200){setTimeout(()=>{r(yS(h)?"abort":"next",h)});return}return u=501,f.json()}).then(f=>{if(typeof f!="object"||f===null){setTimeout(()=>{f===404?r("abort",f):r("next",u)});return}setTimeout(()=>{r("success",f)})}).catch(()=>{r("next",u)})},wS={prepare:_S,send:SS};function OS(l,a,r){gn(r||"",a).loadIcons=l}function TS(l,a,r){gn(r||"",a).loadIcon=l}const gc="data-style";let em="";function ES(l){em=l}function K0(l,a){let r=Array.from(l.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(gc));r||(r=document.createElement("style"),r.setAttribute(gc,gc),l.appendChild(r)),r.textContent=":host{display:inline-block;vertical-align:"+(a?"-0.125em":"0")+"}span,svg{display:block;margin:auto}"+em}function tm(){$0("",wS),Qg(!0);let l;try{l=window}catch{}if(l){if(l.IconifyPreload!==void 0){const r=l.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof r=="object"&&r!==null&&(r instanceof Array?r:[r]).forEach(u=>{try{(typeof u!="object"||u===null||u instanceof Array||typeof u.icons!="object"||typeof u.prefix!="string"||!G0(u))&&console.error(s)}catch{console.error(s)}})}if(l.IconifyProviders!==void 0){const r=l.IconifyProviders;if(typeof r=="object"&&r!==null)for(const s in r){const u="IconifyProviders["+s+"] is invalid.";try{const f=r[s];if(typeof f!="object"||!f||f.resources===void 0)continue;Y0(s,f)||console.error(u)}catch{console.error(u)}}}}return{iconLoaded:Yx,getIcon:Xx,listIcons:$x,addIcon:Vg,addCollection:G0,calculateSize:Mc,buildIcon:Fg,iconToHTML:Zc,svgToURL:Wg,loadIcons:Vc,loadIcon:iS,addAPIProvider:Y0,setCustomIconLoader:TS,setCustomIconsLoader:OS,appendCustomStyle:ES,_api:{getAPIConfig:No,setAPIModule:$0,sendAPIQuery:Jg,setFetch:mS,getFetch:vS,listAPIProviders:Wx}}}const Uc={"background-color":"currentColor"},nm={"background-color":"transparent"},J0={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},I0={"-webkit-mask":Uc,mask:Uc,background:nm};for(const l in I0){const a=I0[l];for(const r in J0)a[l+"-"+r]=J0[r]}function F0(l){return l?l+(l.match(/^[-0-9.]+$/)?"px":""):"inherit"}function kS(l,a,r){const s=document.createElement("span");let u=l.body;u.indexOf("<a")!==-1&&(u+="<!-- "+Date.now()+" -->");const f=l.attributes,h=Zc(u,{...f,width:a.width+"",height:a.height+""}),m=Wg(h),p=s.style,g={"--svg":m,width:F0(f.width),height:F0(f.height),...r?Uc:nm};for(const v in g)p.setProperty(v,g[v]);return s}let Dr;function AS(){try{Dr=window.trustedTypes.createPolicy("iconify",{createHTML:l=>l})}catch{Dr=null}}function jS(l){return Dr===void 0&&AS(),Dr?Dr.createHTML(l):l}function RS(l){const a=document.createElement("span"),r=l.attributes;let s="";r.width||(s="width: inherit;"),r.height||(s+="height: inherit;"),s&&(r.style=s);const u=Zc(l.body,r);return a.innerHTML=jS(u),a.firstChild}function zc(l){return Array.from(l.childNodes).find(a=>{const r=a.tagName&&a.tagName.toUpperCase();return r==="SPAN"||r==="SVG"})}function W0(l,a){const r=a.icon.data,s=a.customisations,u=Fg(r,s);s.preserveAspectRatio&&(u.attributes.preserveAspectRatio=s.preserveAspectRatio);const f=a.renderedMode;let h;switch(f){case"svg":h=RS(u);break;default:h=kS(u,{...Xr,...r},f==="mask")}const m=zc(l);m?h.tagName==="SPAN"&&m.tagName===h.tagName?m.setAttribute("style",h.getAttribute("style")):l.replaceChild(h,m):l.appendChild(h)}function eg(l,a,r){const s=r&&(r.rendered?r:r.lastRender);return{rendered:!1,inline:a,icon:l,lastRender:s}}function CS(l="iconify-icon"){let a,r;try{a=window.customElements,r=window.HTMLElement}catch{return}if(!a||!r)return;const s=a.get(l);if(s)return s;const u=["icon","mode","inline","noobserver","width","height","rotate","flip"],f=class extends r{constructor(){super();Hn(this,"_shadowRoot");Hn(this,"_initialised",!1);Hn(this,"_state");Hn(this,"_checkQueued",!1);Hn(this,"_connected",!1);Hn(this,"_observer",null);Hn(this,"_visible",!0);const p=this._shadowRoot=this.attachShadow({mode:"open"}),g=this.hasAttribute("inline");K0(p,g),this._state=eg({value:""},g),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return u.slice(0)}attributeChangedCallback(p){switch(p){case"inline":{const g=this.hasAttribute("inline"),v=this._state;g!==v.inline&&(v.inline=g,K0(this._shadowRoot,g));break}case"noobserver":{this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const p=this.getAttribute("icon");if(p&&p.slice(0,1)==="{")try{return JSON.parse(p)}catch{}return p}set icon(p){typeof p=="object"&&(p=JSON.stringify(p)),this.setAttribute("icon",p)}get inline(){return this.hasAttribute("inline")}set inline(p){p?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(p){p?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const p=this._state;if(p.rendered){const g=this._shadowRoot;if(p.renderedMode==="svg")try{g.lastChild.setCurrentTime(0);return}catch{}W0(g,p)}}get status(){const p=this._state;return p.rendered?"rendered":p.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const p=this._state,g=this.getAttribute("icon");if(g!==p.icon.value){this._iconChanged(g);return}if(!p.rendered||!this._visible)return;const v=this.getAttribute("mode"),_=P0(this);(p.attrMode!==v||Nx(p.customisations,_)||!zc(this._shadowRoot))&&this._renderIcon(p.icon,_,v)}_iconChanged(p){const g=rS(p,(v,_,x)=>{const T=this._state;if(T.rendered||this.getAttribute("icon")!==v)return;const w={value:v,name:_,data:x};w.data?this._gotIconData(w):T.icon=w});g.data?this._gotIconData(g):this._state=eg(g,this._state.inline,this._state)}_forceRender(){if(!this._visible){const p=zc(this._shadowRoot);p&&this._shadowRoot.removeChild(p);return}this._queueCheck()}_gotIconData(p){this._checkQueued=!1,this._renderIcon(p,P0(this),this.getAttribute("mode"))}_renderIcon(p,g,v){const _=lS(p.data.body,v),x=this._state.inline;W0(this._shadowRoot,this._state={rendered:!0,icon:p,inline:x,customisations:g,attrMode:v,renderedMode:_})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(p=>{const g=p.some(v=>v.isIntersecting);g!==this._visible&&(this._visible=g,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};u.forEach(m=>{m in f.prototype||Object.defineProperty(f.prototype,m,{get:function(){return this.getAttribute(m)},set:function(p){p!==null?this.setAttribute(m,p):this.removeAttribute(m)}})});const h=tm();for(const m in h)f[m]=f.prototype[m]=h[m];return a.define(l,f),f}const DS=CS()||tm(),{iconLoaded:BS,getIcon:PS,listIcons:HS,addIcon:GS,addCollection:$S,calculateSize:YS,buildIcon:XS,iconToHTML:QS,svgToURL:VS,loadIcons:ZS,loadIcon:KS,setCustomIconLoader:JS,setCustomIconsLoader:IS,addAPIProvider:FS,_api:WS}=DS;Lb.createRoot(document.getElementById("root")).render(U.jsx(Q.StrictMode,{children:U.jsx(Cx,{})}));
