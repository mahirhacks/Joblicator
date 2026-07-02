(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();var Qc={exports:{}},Yn={};var xm;function Lg(){if(xm)return Yn;xm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(c,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var j in m)j!=="key"&&(p[j]=m[j])}else p=m;return m=p.ref,{$$typeof:u,type:c,key:g,ref:m!==void 0?m:null,props:p}}return Yn.Fragment=o,Yn.jsx=f,Yn.jsxs=f,Yn}var Sm;function kg(){return Sm||(Sm=1,Qc.exports=Lg()),Qc.exports}var s=kg(),Vc={exports:{}},ne={};var jm;function Hg(){if(jm)return ne;jm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),R=Symbol.iterator;function O(E){return E===null||typeof E!="object"?null:(E=R&&E[R]||E["@@iterator"],typeof E=="function"?E:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function L(E,H,Z){this.props=E,this.context=H,this.refs=Y,this.updater=Z||G}L.prototype.isReactComponent={},L.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},L.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function T(){}T.prototype=L.prototype;function q(E,H,Z){this.props=E,this.context=H,this.refs=Y,this.updater=Z||G}var W=q.prototype=new T;W.constructor=q,Q(W,L.prototype),W.isPureReactComponent=!0;var ue=Array.isArray;function J(){}var X={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(E,H,Z){var $=Z.ref;return{$$typeof:u,type:E,key:H,ref:$!==void 0?$:null,props:Z}}function oe(E,H){return te(E.type,H,E.props)}function Ue(E){return typeof E=="object"&&E!==null&&E.$$typeof===u}function Ae(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return H[Z]})}var at=/\/+/g;function Ye(E,H){return typeof E=="object"&&E!==null&&E.key!=null?Ae(""+E.key):H.toString(36)}function Re(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(J,J):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function D(E,H,Z,$,le){var ae=typeof E;(ae==="undefined"||ae==="boolean")&&(E=null);var ge=!1;if(E===null)ge=!0;else switch(ae){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(E.$$typeof){case u:case o:ge=!0;break;case N:return ge=E._init,D(ge(E._payload),H,Z,$,le)}}if(ge)return le=le(E),ge=$===""?"."+Ye(E,0):$,ue(le)?(Z="",ge!=null&&(Z=ge.replace(at,"$&/")+"/"),D(le,H,Z,"",function(Zl){return Zl})):le!=null&&(Ue(le)&&(le=oe(le,Z+(le.key==null||E&&E.key===le.key?"":(""+le.key).replace(at,"$&/")+"/")+ge)),H.push(le)),1;ge=0;var lt=$===""?".":$+":";if(ue(E))for(var Le=0;Le<E.length;Le++)$=E[Le],ae=lt+Ye($,Le),ge+=D($,H,Z,ae,le);else if(Le=O(E),typeof Le=="function")for(E=Le.call(E),Le=0;!($=E.next()).done;)$=$.value,ae=lt+Ye($,Le++),ge+=D($,H,Z,ae,le);else if(ae==="object"){if(typeof E.then=="function")return D(Re(E),H,Z,$,le);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ge}function x(E,H,Z){if(E==null)return E;var $=[],le=0;return D(E,$,"","",function(ae){return H.call(Z,ae,le++)}),$}function V(E){if(E._status===-1){var H=E._result;H=H(),H.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=H)}if(E._status===1)return E._result.default;throw E._result}var ie=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},se={map:x,forEach:function(E,H,Z){x(E,function(){H.apply(this,arguments)},Z)},count:function(E){var H=0;return x(E,function(){H++}),H},toArray:function(E){return x(E,function(H){return H})||[]},only:function(E){if(!Ue(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ne.Activity=z,ne.Children=se,ne.Component=L,ne.Fragment=f,ne.Profiler=m,ne.PureComponent=q,ne.StrictMode=c,ne.Suspense=b,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,ne.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},ne.cache=function(E){return function(){return E.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(E,H,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=Q({},E.props),le=E.key;if(H!=null)for(ae in H.key!==void 0&&(le=""+H.key),H)!ee.call(H,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&H.ref===void 0||($[ae]=H[ae]);var ae=arguments.length-2;if(ae===1)$.children=Z;else if(1<ae){for(var ge=Array(ae),lt=0;lt<ae;lt++)ge[lt]=arguments[lt+2];$.children=ge}return te(E.type,le,$)},ne.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},ne.createElement=function(E,H,Z){var $,le={},ae=null;if(H!=null)for($ in H.key!==void 0&&(ae=""+H.key),H)ee.call(H,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(le[$]=H[$]);var ge=arguments.length-2;if(ge===1)le.children=Z;else if(1<ge){for(var lt=Array(ge),Le=0;Le<ge;Le++)lt[Le]=arguments[Le+2];le.children=lt}if(E&&E.defaultProps)for($ in ge=E.defaultProps,ge)le[$]===void 0&&(le[$]=ge[$]);return te(E,ae,le)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(E){return{$$typeof:j,render:E}},ne.isValidElement=Ue,ne.lazy=function(E){return{$$typeof:N,_payload:{_status:-1,_result:E},_init:V}},ne.memo=function(E,H){return{$$typeof:h,type:E,compare:H===void 0?null:H}},ne.startTransition=function(E){var H=X.T,Z={};X.T=Z;try{var $=E(),le=X.S;le!==null&&le(Z,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(J,ie)}catch(ae){ie(ae)}finally{H!==null&&Z.types!==null&&(H.types=Z.types),X.T=H}},ne.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},ne.use=function(E){return X.H.use(E)},ne.useActionState=function(E,H,Z){return X.H.useActionState(E,H,Z)},ne.useCallback=function(E,H){return X.H.useCallback(E,H)},ne.useContext=function(E){return X.H.useContext(E)},ne.useDebugValue=function(){},ne.useDeferredValue=function(E,H){return X.H.useDeferredValue(E,H)},ne.useEffect=function(E,H){return X.H.useEffect(E,H)},ne.useEffectEvent=function(E){return X.H.useEffectEvent(E)},ne.useId=function(){return X.H.useId()},ne.useImperativeHandle=function(E,H,Z){return X.H.useImperativeHandle(E,H,Z)},ne.useInsertionEffect=function(E,H){return X.H.useInsertionEffect(E,H)},ne.useLayoutEffect=function(E,H){return X.H.useLayoutEffect(E,H)},ne.useMemo=function(E,H){return X.H.useMemo(E,H)},ne.useOptimistic=function(E,H){return X.H.useOptimistic(E,H)},ne.useReducer=function(E,H,Z){return X.H.useReducer(E,H,Z)},ne.useRef=function(E){return X.H.useRef(E)},ne.useState=function(E){return X.H.useState(E)},ne.useSyncExternalStore=function(E,H,Z){return X.H.useSyncExternalStore(E,H,Z)},ne.useTransition=function(){return X.H.useTransition()},ne.version="19.2.7",ne}var Em;function ro(){return Em||(Em=1,Vc.exports=Hg()),Vc.exports}var y=ro(),Zc={exports:{}},qn={},Jc={exports:{}},Kc={};var zm;function Bg(){return zm||(zm=1,(function(u){function o(D,x){var V=D.length;D.push(x);e:for(;0<V;){var ie=V-1>>>1,se=D[ie];if(0<m(se,x))D[ie]=x,D[V]=se,V=ie;else break e}}function f(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var x=D[0],V=D.pop();if(V!==x){D[0]=V;e:for(var ie=0,se=D.length,E=se>>>1;ie<E;){var H=2*(ie+1)-1,Z=D[H],$=H+1,le=D[$];if(0>m(Z,V))$<se&&0>m(le,Z)?(D[ie]=le,D[$]=V,ie=$):(D[ie]=Z,D[H]=V,ie=H);else if($<se&&0>m(le,V))D[ie]=le,D[$]=V,ie=$;else break e}}return x}function m(D,x){var V=D.sortIndex-x.sortIndex;return V!==0?V:D.id-x.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var g=Date,j=g.now();u.unstable_now=function(){return g.now()-j}}var b=[],h=[],N=1,z=null,R=3,O=!1,G=!1,Q=!1,Y=!1,L=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function W(D){for(var x=f(h);x!==null;){if(x.callback===null)c(h);else if(x.startTime<=D)c(h),x.sortIndex=x.expirationTime,o(b,x);else break;x=f(h)}}function ue(D){if(Q=!1,W(D),!G)if(f(b)!==null)G=!0,J||(J=!0,Ae());else{var x=f(h);x!==null&&Re(ue,x.startTime-D)}}var J=!1,X=-1,ee=5,te=-1;function oe(){return Y?!0:!(u.unstable_now()-te<ee)}function Ue(){if(Y=!1,J){var D=u.unstable_now();te=D;var x=!0;try{e:{G=!1,Q&&(Q=!1,T(X),X=-1),O=!0;var V=R;try{t:{for(W(D),z=f(b);z!==null&&!(z.expirationTime>D&&oe());){var ie=z.callback;if(typeof ie=="function"){z.callback=null,R=z.priorityLevel;var se=ie(z.expirationTime<=D);if(D=u.unstable_now(),typeof se=="function"){z.callback=se,W(D),x=!0;break t}z===f(b)&&c(b),W(D)}else c(b);z=f(b)}if(z!==null)x=!0;else{var E=f(h);E!==null&&Re(ue,E.startTime-D),x=!1}}break e}finally{z=null,R=V,O=!1}x=void 0}}finally{x?Ae():J=!1}}}var Ae;if(typeof q=="function")Ae=function(){q(Ue)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Ye=at.port2;at.port1.onmessage=Ue,Ae=function(){Ye.postMessage(null)}}else Ae=function(){L(Ue,0)};function Re(D,x){X=L(function(){D(u.unstable_now())},x)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(D){D.callback=null},u.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<D?Math.floor(1e3/D):5},u.unstable_getCurrentPriorityLevel=function(){return R},u.unstable_next=function(D){switch(R){case 1:case 2:case 3:var x=3;break;default:x=R}var V=R;R=x;try{return D()}finally{R=V}},u.unstable_requestPaint=function(){Y=!0},u.unstable_runWithPriority=function(D,x){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=R;R=D;try{return x()}finally{R=V}},u.unstable_scheduleCallback=function(D,x,V){var ie=u.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ie+V:ie):V=ie,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,D={id:N++,callback:x,priorityLevel:D,startTime:V,expirationTime:se,sortIndex:-1},V>ie?(D.sortIndex=V,o(h,D),f(b)===null&&D===f(h)&&(Q?(T(X),X=-1):Q=!0,Re(ue,V-ie))):(D.sortIndex=se,o(b,D),G||O||(G=!0,J||(J=!0,Ae()))),D},u.unstable_shouldYield=oe,u.unstable_wrapCallback=function(D){var x=R;return function(){var V=R;R=x;try{return D.apply(this,arguments)}finally{R=V}}}})(Kc)),Kc}var wm;function Yg(){return wm||(wm=1,Jc.exports=Bg()),Jc.exports}var $c={exports:{}},tt={};var Tm;function qg(){if(Tm)return tt;Tm=1;var u=ro();function o(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)h+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(b,h,N){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:z==null?null:""+z,children:b,containerInfo:h,implementation:N}}var g=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(b,h){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return p(b,h,null,N)},tt.flushSync=function(b){var h=g.T,N=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=h,c.p=N,c.d.f()}},tt.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(b,h))},tt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},tt.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var N=h.as,z=j(N,h.crossOrigin),R=typeof h.integrity=="string"?h.integrity:void 0,O=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;N==="style"?c.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:z,integrity:R,fetchPriority:O}):N==="script"&&c.d.X(b,{crossOrigin:z,integrity:R,fetchPriority:O,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},tt.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var N=j(h.as,h.crossOrigin);c.d.M(b,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(b)},tt.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var N=h.as,z=j(N,h.crossOrigin);c.d.L(b,N,{crossOrigin:z,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},tt.preloadModule=function(b,h){if(typeof b=="string")if(h){var N=j(h.as,h.crossOrigin);c.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(b)},tt.requestFormReset=function(b){c.d.r(b)},tt.unstable_batchedUpdates=function(b,h){return b(h)},tt.useFormState=function(b,h,N){return g.H.useFormState(b,h,N)},tt.useFormStatus=function(){return g.H.useHostTransitionStatus()},tt.version="19.2.7",tt}var Nm;function Gg(){if(Nm)return $c.exports;Nm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),$c.exports=qg(),$c.exports}var Cm;function Xg(){if(Cm)return qn;Cm=1;var u=Yg(),o=ro(),f=Gg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return b(n),e;if(i===l)return b(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,d=n.child;d;){if(d===a){r=!0,a=n,l=i;break}if(d===l){r=!0,l=n,a=i;break}d=d.sibling}if(!r){for(d=i.child;d;){if(d===a){r=!0,a=i,l=n;break}if(d===l){r=!0,l=i,a=n;break}d=d.sibling}if(!r)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,R=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),q=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case L:return"Profiler";case Y:return"StrictMode";case ue:return"Suspense";case J:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case q:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var Re=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ie=[],se=-1;function E(e){return{current:e}}function H(e){0>se||(e.current=ie[se],ie[se]=null,se--)}function Z(e,t){se++,ie[se]=e.current,e.current=t}var $=E(null),le=E(null),ae=E(null),ge=E(null);function lt(e,t){switch(Z(ae,t),Z(le,e),Z($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xd(t),e=Qd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H($),Z($,e)}function Le(){H($),H(le),H(ae)}function Zl(e){e.memoizedState!==null&&Z(ge,e);var t=$.current,a=Qd(t,e.type);t!==a&&(Z(le,e),Z($,a))}function Jn(e){le.current===e&&(H($),H(le)),ge.current===e&&(H(ge),Ln._currentValue=V)}var Tu,bo;function La(e){if(Tu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Tu=t&&t[1]||"",bo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tu+e+bo}var Nu=!1;function Cu(e,t){if(!e||Nu)return"";Nu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(M){var _=M}Reflect.construct(e,[],B)}else{try{B.call()}catch(M){_=M}e.call(B.prototype)}}else{try{throw Error()}catch(M){_=M}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(M){if(M&&_&&typeof M.stack=="string")return[M.stack,_.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],d=i[1];if(r&&d){var v=r.split(`
`),A=d.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===A.length)for(l=v.length-1,n=A.length-1;1<=l&&0<=n&&v[l]!==A[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==A[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==A[n]){var U=`
`+v[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=n);break}}}finally{Nu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?La(a):""}function mp(e,t){switch(e.tag){case 26:case 27:case 5:return La(e.type);case 16:return La("Lazy");case 13:return e.child!==t&&t!==null?La("Suspense Fallback"):La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return Cu(e.type,!1);case 11:return Cu(e.type.render,!1);case 1:return Cu(e.type,!0);case 31:return La("Activity");default:return""}}function yo(e){try{var t="",a=null;do t+=mp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Au=Object.prototype.hasOwnProperty,Ru=u.unstable_scheduleCallback,_u=u.unstable_cancelCallback,pp=u.unstable_shouldYield,hp=u.unstable_requestPaint,dt=u.unstable_now,gp=u.unstable_getCurrentPriorityLevel,xo=u.unstable_ImmediatePriority,So=u.unstable_UserBlockingPriority,Kn=u.unstable_NormalPriority,vp=u.unstable_LowPriority,jo=u.unstable_IdlePriority,bp=u.log,yp=u.unstable_setDisableYieldValue,Jl=null,mt=null;function sa(e){if(typeof bp=="function"&&yp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Jl,e)}catch{}}var pt=Math.clz32?Math.clz32:jp,xp=Math.log,Sp=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-(xp(e)/Sp|0)|0}var $n=256,Wn=262144,Fn=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=ka(l):(r&=d,r!==0?n=ka(r):a||(a=d&~e,a!==0&&(n=ka(a))))):(d=l&~i,d!==0?n=ka(d):r!==0?n=ka(r):a||(a=l&~e,a!==0&&(n=ka(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ep(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eo(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function Ou(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zp(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(a=r&~a;0<a;){var U=31-pt(a),B=1<<U;d[U]=0,v[U]=-1;var _=A[U];if(_!==null)for(A[U]=null,U=0;U<_.length;U++){var M=_[U];M!==null&&(M.lane&=-536870913)}a&=~B}l!==0&&zo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function zo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function wo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function To(e,t){var a=t&-t;return a=(a&42)!==0?1:Mu(a),(a&(e.suspendedLanes|t))!==0?0:a}function Mu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function No(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:mm(e.type))}function Co(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var fa=Math.random().toString(36).slice(2),We="__reactFiber$"+fa,it="__reactProps$"+fa,ll="__reactContainer$"+fa,Uu="__reactEvents$"+fa,wp="__reactListeners$"+fa,Tp="__reactHandles$"+fa,Ao="__reactResources$"+fa,Wl="__reactMarker$"+fa;function Lu(e){delete e[We],delete e[it],delete e[Uu],delete e[wp],delete e[Tp]}function nl(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Fd(e);e!==null;){if(a=e[We])return a;e=Fd(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[We]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ul(e){var t=e[Ao];return t||(t=e[Ao]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Wl]=!0}var Ro=new Set,_o={};function Ha(e,t){rl(e,t),rl(e+"Capture",t)}function rl(e,t){for(_o[e]=t,e=0;e<t.length;e++)Ro.add(t[e])}var Np=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oo={},Mo={};function Cp(e){return Au.call(Mo,e)?!0:Au.call(Oo,e)?!1:Np.test(e)?Mo[e]=!0:(Oo[e]=!0,!1)}function Pn(e,t,a){if(Cp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ei(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ap(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ku(e){if(!e._valueTracker){var t=Do(e)?"checked":"value";e._valueTracker=Ap(e,t,""+e[t])}}function Uo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Do(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rp=/[\n"\\]/g;function zt(e){return e.replace(Rp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hu(e,t,a,l,n,i,r,d){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Bu(e,r,Et(t)):a!=null?Bu(e,r,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Et(d):e.removeAttribute("name")}function Lo(e,t,a,l,n,i,r,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ku(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),ku(e)}function Bu(e,t,a){t==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ko(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Ho(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Re(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ku(e)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _p=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||_p.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yo(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Bo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Bo(e,i,t[i])}function Yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(e){return Mp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var qu=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,fl=null;function qo(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(c(90));Hu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Uo(l)}break e;case"textarea":ko(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var Xu=!1;function Go(e,t,a){if(Xu)return e(t,a);Xu=!0;try{var l=e(t);return l}finally{if(Xu=!1,(sl!==null||fl!==null)&&(Xi(),sl&&(t=sl,e=fl,fl=sl=null,qo(t),e)))for(t=0;t<e.length;t++)qo(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(Jt)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Qu=!1}var da=null,Vu=null,li=null;function Xo(){if(li)return li;var e,t=Vu,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return li=n.slice(e,1<l?1-l:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Qo(){return!1}function ut(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Qo,this.isPropagationStopped=Qo,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=ut(Ba),en=z({},Ba,{view:0,detail:0}),Dp=ut(en),Zu,Ju,tn,ri=z({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(Zu=e.screenX-tn.screenX,Ju=e.screenY-tn.screenY):Ju=Zu=0,tn=e),Zu)},movementY:function(e){return"movementY"in e?e.movementY:Ju}}),Vo=ut(ri),Up=z({},ri,{dataTransfer:0}),Lp=ut(Up),kp=z({},en,{relatedTarget:0}),Ku=ut(kp),Hp=z({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=ut(Hp),Yp=z({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qp=ut(Yp),Gp=z({},Ba,{data:0}),Zo=ut(Gp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vp[e])?!!t[e]:!1}function $u(){return Zp}var Jp=z({},en,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kp=ut(Jp),$p=z({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=ut($p),Wp=z({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),Fp=ut(Wp),Ip=z({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=ut(Ip),eh=z({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),th=ut(eh),ah=z({},Ba,{newState:0,oldState:0}),lh=ut(ah),nh=[9,13,27,32],Wu=Jt&&"CompositionEvent"in window,an=null;Jt&&"documentMode"in document&&(an=document.documentMode);var ih=Jt&&"TextEvent"in window&&!an,Ko=Jt&&(!Wu||an&&8<an&&11>=an),$o=" ",Wo=!1;function Fo(e,t){switch(e){case"keyup":return nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Io(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function uh(e,t){switch(e){case"compositionend":return Io(t);case"keypress":return t.which!==32?null:(Wo=!0,$o);case"textInput":return e=t.data,e===$o&&Wo?null:e;default:return null}}function rh(e,t){if(dl)return e==="compositionend"||!Wu&&Fo(e,t)?(e=Xo(),li=Vu=da=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ko&&t.locale!=="ko"?null:t.data;default:return null}}var ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ch[e.type]:t==="textarea"}function es(e,t,a,l){sl?fl?fl.push(l):fl=[l]:sl=l,t=Wi(t,"onChange"),0<t.length&&(a=new ui("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ln=null,nn=null;function oh(e){kd(e,0)}function ci(e){var t=Fl(e);if(Uo(t))return e}function ts(e,t){if(e==="change")return t}var as=!1;if(Jt){var Fu;if(Jt){var Iu="oninput"in document;if(!Iu){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),Iu=typeof ls.oninput=="function"}Fu=Iu}else Fu=!1;as=Fu&&(!document.documentMode||9<document.documentMode)}function ns(){ln&&(ln.detachEvent("onpropertychange",is),nn=ln=null)}function is(e){if(e.propertyName==="value"&&ci(nn)){var t=[];es(t,nn,e,Gu(e)),Go(oh,t)}}function sh(e,t,a){e==="focusin"?(ns(),ln=t,nn=a,ln.attachEvent("onpropertychange",is)):e==="focusout"&&ns()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(nn)}function dh(e,t){if(e==="click")return ci(t)}function mh(e,t){if(e==="input"||e==="change")return ci(t)}function ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:ph;function un(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Au.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var a=us(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=us(a)}}function cs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function os(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ti(e.document)}return t}function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hh=Jt&&"documentMode"in document&&11>=document.documentMode,ml=null,er=null,rn=null,tr=!1;function ss(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tr||ml==null||ml!==ti(l)||(l=ml,"selectionStart"in l&&Pu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),rn&&un(rn,l)||(rn=l,l=Wi(er,"onSelect"),0<l.length&&(t=new ui("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},ar={},fs={};Jt&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function qa(e){if(ar[e])return ar[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in fs)return ar[e]=t[a];return e}var ds=qa("animationend"),ms=qa("animationiteration"),ps=qa("animationstart"),gh=qa("transitionrun"),vh=qa("transitionstart"),bh=qa("transitioncancel"),hs=qa("transitionend"),gs=new Map,lr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lr.push("scrollEnd");function Dt(e,t){gs.set(e,t),Ha(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],hl=0,nr=0;function si(){for(var e=hl,t=nr=hl=0;t<e;){var a=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&vs(a,n,i)}}function fi(e,t,a,l){wt[hl++]=e,wt[hl++]=t,wt[hl++]=a,wt[hl++]=l,nr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ir(e,t,a,l){return fi(e,t,a,l),di(e)}function Ga(e,t){return fi(e,null,null,t),di(e)}function vs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function di(e){if(50<An)throw An=0,pc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function yh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new yh(e,t,a,l)}function ur(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")ur(e)&&(r=1);else if(typeof e=="string")r=zg(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=gt(31,a,t,n),e.elementType=te,e.lanes=i,e;case Q:return Xa(a.children,n,i,t);case Y:r=8,n|=24;break;case L:return e=gt(12,a,t,n|2),e.elementType=L,e.lanes=i,e;case ue:return e=gt(13,a,t,n),e.elementType=ue,e.lanes=i,e;case J:return e=gt(19,a,t,n),e.elementType=J,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:r=10;break e;case T:r=9;break e;case W:r=11;break e;case X:r=14;break e;case ee:r=16,l=null;break e}r=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=gt(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Xa(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function rr(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function ys(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function cr(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xs=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var a=xs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:yo(t)},xs.set(e,t),t)}return{value:e,source:t,stack:yo(t)}}var vl=[],bl=0,pi=null,cn=0,Nt=[],Ct=0,ma=null,Yt=1,qt="";function $t(e,t){vl[bl++]=cn,vl[bl++]=pi,pi=e,cn=t}function Ss(e,t,a){Nt[Ct++]=Yt,Nt[Ct++]=qt,Nt[Ct++]=ma,ma=e;var l=Yt;e=qt;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Yt=1<<32-pt(t)+n|a<<n|l,qt=i+e}else Yt=1<<i|a<<n|l,qt=e}function or(e){e.return!==null&&($t(e,1),Ss(e,1,0))}function sr(e){for(;e===pi;)pi=vl[--bl],vl[bl]=null,cn=vl[--bl],vl[bl]=null;for(;e===ma;)ma=Nt[--Ct],Nt[Ct]=null,qt=Nt[--Ct],Nt[Ct]=null,Yt=Nt[--Ct],Nt[Ct]=null}function js(e,t){Nt[Ct++]=Yt,Nt[Ct++]=qt,Nt[Ct++]=ma,Yt=t.id,qt=t.overflow,ma=e}var Fe=null,Te=null,he=!1,pa=null,At=!1,fr=Error(c(519));function ha(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw on(Tt(t,e)),fr}function Es(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[it]=l,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<_n.length;a++)de(_n[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Lo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Ho(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||qd(t.textContent,a)?(l.popover!=null&&(de("beforetoggle",t),de("toggle",t)),l.onScroll!=null&&de("scroll",t),l.onScrollEnd!=null&&de("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function zs(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Fe=Fe.return}}function yl(e){if(e!==Fe)return!1;if(!he)return zs(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ac(e.type,e.memoizedProps)),a=!a),a&&Te&&ha(e),zs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Te=Wd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Te=Wd(e)}else t===27?(t=Te,Aa(e.type)?(e=Dc,Dc=null,Te=e):Te=t):Te=Fe?_t(e.stateNode.nextSibling):null;return!0}function Qa(){Te=Fe=null,he=!1}function dr(){var e=pa;return e!==null&&(st===null?st=e:st.push.apply(st,e),pa=null),e}function on(e){pa===null?pa=[e]:pa.push(e)}var mr=E(null),Va=null,Wt=null;function ga(e,t,a){Z(mr,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=mr.current,H(mr)}function pr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function hr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),pr(i.return,a,e),l||(r=null);break e}i=d.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(c(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),pr(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function xl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var d=n.type;ht(n.pendingProps.value,r.value)||(e!==null?e.push(d):e=[d])}}else if(n===ge.current){if(r=n.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Ln):e=[Ln])}n=n.return}e!==null&&hr(t,e,a,l),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return ws(Va,e)}function gi(e,t){return Va===null&&Za(e),ws(e,t)}function ws(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(c(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var xh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Sh=u.unstable_scheduleCallback,jh=u.unstable_NormalPriority,qe={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gr(){return{controller:new xh,data:new Map,refCount:0}}function sn(e){e.refCount--,e.refCount===0&&Sh(jh,function(){e.controller.abort()})}var fn=null,vr=0,Sl=0,jl=null;function Eh(e,t){if(fn===null){var a=fn=[];vr=0,Sl=xc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return vr++,t.then(Ts,Ts),t}function Ts(){if(--vr===0&&fn!==null){jl!==null&&(jl.status="fulfilled");var e=fn;fn=null,Sl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ns=D.S;D.S=function(e,t){fd=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Eh(e,t),Ns!==null&&Ns(e,t)};var Ja=E(null);function br(){var e=Ja.current;return e!==null?e:we.pooledCache}function vi(e,t){t===null?Z(Ja,Ja.current):Z(Ja,t.pool)}function Cs(){var e=br();return e===null?null:{parent:qe._currentValue,pool:e}}var El=Error(c(460)),yr=Error(c(474)),bi=Error(c(542)),yi={then:function(){}};function As(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e}throw $a=t,El}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,El):a}}var $a=null;function _s(){if($a===null)throw Error(c(459));var e=$a;return $a=null,e}function Os(e){if(e===El||e===bi)throw Error(c(483))}var zl=null,dn=0;function xi(e){var t=dn;return dn+=1,zl===null&&(zl=[]),Rs(zl,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Si(e,t){throw t.$$typeof===R?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ms(e){function t(w,S){if(e){var C=w.deletions;C===null?(w.deletions=[S],w.flags|=16):C.push(S)}}function a(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function l(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function n(w,S){return w=Kt(w,S),w.index=0,w.sibling=null,w}function i(w,S,C){return w.index=C,e?(C=w.alternate,C!==null?(C=C.index,C<S?(w.flags|=67108866,S):C):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function r(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function d(w,S,C,k){return S===null||S.tag!==6?(S=rr(C,w.mode,k),S.return=w,S):(S=n(S,C),S.return=w,S)}function v(w,S,C,k){var I=C.type;return I===Q?U(w,S,C.props.children,k,C.key):S!==null&&(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ee&&Ka(I)===S.type)?(S=n(S,C.props),mn(S,C),S.return=w,S):(S=mi(C.type,C.key,C.props,null,w.mode,k),mn(S,C),S.return=w,S)}function A(w,S,C,k){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=cr(C,w.mode,k),S.return=w,S):(S=n(S,C.children||[]),S.return=w,S)}function U(w,S,C,k,I){return S===null||S.tag!==7?(S=Xa(C,w.mode,k,I),S.return=w,S):(S=n(S,C),S.return=w,S)}function B(w,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=rr(""+S,w.mode,C),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return C=mi(S.type,S.key,S.props,null,w.mode,C),mn(C,S),C.return=w,C;case G:return S=cr(S,w.mode,C),S.return=w,S;case ee:return S=Ka(S),B(w,S,C)}if(Re(S)||Ae(S))return S=Xa(S,w.mode,C,null),S.return=w,S;if(typeof S.then=="function")return B(w,xi(S),C);if(S.$$typeof===q)return B(w,gi(w,S),C);Si(w,S)}return null}function _(w,S,C,k){var I=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return I!==null?null:d(w,S,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case O:return C.key===I?v(w,S,C,k):null;case G:return C.key===I?A(w,S,C,k):null;case ee:return C=Ka(C),_(w,S,C,k)}if(Re(C)||Ae(C))return I!==null?null:U(w,S,C,k,null);if(typeof C.then=="function")return _(w,S,xi(C),k);if(C.$$typeof===q)return _(w,S,gi(w,C),k);Si(w,C)}return null}function M(w,S,C,k,I){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return w=w.get(C)||null,d(S,w,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case O:return w=w.get(k.key===null?C:k.key)||null,v(S,w,k,I);case G:return w=w.get(k.key===null?C:k.key)||null,A(S,w,k,I);case ee:return k=Ka(k),M(w,S,C,k,I)}if(Re(k)||Ae(k))return w=w.get(C)||null,U(S,w,k,I,null);if(typeof k.then=="function")return M(w,S,C,xi(k),I);if(k.$$typeof===q)return M(w,S,C,gi(S,k),I);Si(S,k)}return null}function K(w,S,C,k){for(var I=null,ve=null,F=S,ce=S=0,pe=null;F!==null&&ce<C.length;ce++){F.index>ce?(pe=F,F=null):pe=F.sibling;var be=_(w,F,C[ce],k);if(be===null){F===null&&(F=pe);break}e&&F&&be.alternate===null&&t(w,F),S=i(be,S,ce),ve===null?I=be:ve.sibling=be,ve=be,F=pe}if(ce===C.length)return a(w,F),he&&$t(w,ce),I;if(F===null){for(;ce<C.length;ce++)F=B(w,C[ce],k),F!==null&&(S=i(F,S,ce),ve===null?I=F:ve.sibling=F,ve=F);return he&&$t(w,ce),I}for(F=l(F);ce<C.length;ce++)pe=M(F,w,ce,C[ce],k),pe!==null&&(e&&pe.alternate!==null&&F.delete(pe.key===null?ce:pe.key),S=i(pe,S,ce),ve===null?I=pe:ve.sibling=pe,ve=pe);return e&&F.forEach(function(Da){return t(w,Da)}),he&&$t(w,ce),I}function P(w,S,C,k){if(C==null)throw Error(c(151));for(var I=null,ve=null,F=S,ce=S=0,pe=null,be=C.next();F!==null&&!be.done;ce++,be=C.next()){F.index>ce?(pe=F,F=null):pe=F.sibling;var Da=_(w,F,be.value,k);if(Da===null){F===null&&(F=pe);break}e&&F&&Da.alternate===null&&t(w,F),S=i(Da,S,ce),ve===null?I=Da:ve.sibling=Da,ve=Da,F=pe}if(be.done)return a(w,F),he&&$t(w,ce),I;if(F===null){for(;!be.done;ce++,be=C.next())be=B(w,be.value,k),be!==null&&(S=i(be,S,ce),ve===null?I=be:ve.sibling=be,ve=be);return he&&$t(w,ce),I}for(F=l(F);!be.done;ce++,be=C.next())be=M(F,w,ce,be.value,k),be!==null&&(e&&be.alternate!==null&&F.delete(be.key===null?ce:be.key),S=i(be,S,ce),ve===null?I=be:ve.sibling=be,ve=be);return e&&F.forEach(function(Ug){return t(w,Ug)}),he&&$t(w,ce),I}function ze(w,S,C,k){if(typeof C=="object"&&C!==null&&C.type===Q&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case O:e:{for(var I=C.key;S!==null;){if(S.key===I){if(I=C.type,I===Q){if(S.tag===7){a(w,S.sibling),k=n(S,C.props.children),k.return=w,w=k;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ee&&Ka(I)===S.type){a(w,S.sibling),k=n(S,C.props),mn(k,C),k.return=w,w=k;break e}a(w,S);break}else t(w,S);S=S.sibling}C.type===Q?(k=Xa(C.props.children,w.mode,k,C.key),k.return=w,w=k):(k=mi(C.type,C.key,C.props,null,w.mode,k),mn(k,C),k.return=w,w=k)}return r(w);case G:e:{for(I=C.key;S!==null;){if(S.key===I)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){a(w,S.sibling),k=n(S,C.children||[]),k.return=w,w=k;break e}else{a(w,S);break}else t(w,S);S=S.sibling}k=cr(C,w.mode,k),k.return=w,w=k}return r(w);case ee:return C=Ka(C),ze(w,S,C,k)}if(Re(C))return K(w,S,C,k);if(Ae(C)){if(I=Ae(C),typeof I!="function")throw Error(c(150));return C=I.call(C),P(w,S,C,k)}if(typeof C.then=="function")return ze(w,S,xi(C),k);if(C.$$typeof===q)return ze(w,S,gi(w,C),k);Si(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(a(w,S.sibling),k=n(S,C),k.return=w,w=k):(a(w,S),k=rr(C,w.mode,k),k.return=w,w=k),r(w)):a(w,S)}return function(w,S,C,k){try{dn=0;var I=ze(w,S,C,k);return zl=null,I}catch(F){if(F===El||F===bi)throw F;var ve=gt(29,F,null,w.mode);return ve.lanes=k,ve.return=w,ve}}}var Wa=Ms(!0),Ds=Ms(!1),va=!1;function xr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ye&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=di(e),vs(e,null,a),t}return fi(e,l,t,a),di(e)}function pn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wo(e,a)}}function jr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Er=!1;function hn(){if(Er){var e=jl;if(e!==null)throw e}}function gn(e,t,a,l){Er=!1;var n=e.updateQueue;va=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var v=d,A=v.next;v.next=null,r===null?i=A:r.next=A,r=v;var U=e.alternate;U!==null&&(U=U.updateQueue,d=U.lastBaseUpdate,d!==r&&(d===null?U.firstBaseUpdate=A:d.next=A,U.lastBaseUpdate=v))}if(i!==null){var B=n.baseState;r=0,U=A=v=null,d=i;do{var _=d.lane&-536870913,M=_!==d.lane;if(M?(me&_)===_:(l&_)===_){_!==0&&_===Sl&&(Er=!0),U!==null&&(U=U.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var K=e,P=d;_=t;var ze=a;switch(P.tag){case 1:if(K=P.payload,typeof K=="function"){B=K.call(ze,B,_);break e}B=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=P.payload,_=typeof K=="function"?K.call(ze,B,_):K,_==null)break e;B=z({},B,_);break e;case 2:va=!0}}_=d.callback,_!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[_]:M.push(_))}else M={lane:_,tag:d.tag,payload:d.payload,callback:d.callback,next:null},U===null?(A=U=M,v=B):U=U.next=M,r|=_;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;M=d,d=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);U===null&&(v=B),n.baseState=v,n.firstBaseUpdate=A,n.lastBaseUpdate=U,i===null&&(n.shared.lanes=0),za|=r,e.lanes=r,e.memoizedState=B}}function Us(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ls(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Us(a[e],t)}var wl=E(null),ji=E(0);function ks(e,t){e=ua,Z(ji,e),Z(wl,t),ua=e|t.baseLanes}function zr(){Z(ji,ua),Z(wl,wl.current)}function wr(){ua=ji.current,H(wl),H(ji)}var vt=E(null),Rt=null;function xa(e){var t=e.alternate;Z(ke,ke.current&1),Z(vt,e),Rt===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(Rt=e)}function Tr(e){Z(ke,ke.current),Z(vt,e),Rt===null&&(Rt=e)}function Hs(e){e.tag===22?(Z(ke,ke.current),Z(vt,e),Rt===null&&(Rt=e)):Sa()}function Sa(){Z(ke,ke.current),Z(vt,vt.current)}function bt(e){H(vt),Rt===e&&(Rt=null),H(ke)}var ke=E(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Oc(a)||Mc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,re=null,je=null,Ge=null,zi=!1,Tl=!1,Fa=!1,wi=0,vn=0,Nl=null,wh=0;function Me(){throw Error(c(321))}function Nr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Cr(e,t,a,l,n,i){return It=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?jf:Xr,Fa=!1,i=a(l,n),Fa=!1,Tl&&(i=Ys(t,a,l,n)),Bs(e),i}function Bs(e){D.H=xn;var t=je!==null&&je.next!==null;if(It=0,Ge=je=re=null,zi=!1,vn=0,Nl=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&hi(e)&&(Xe=!0))}function Ys(e,t,a,l){re=e;var n=0;do{if(Tl&&(Nl=null),vn=0,Tl=!1,25<=n)throw Error(c(301));if(n+=1,Ge=je=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Ef,i=t(a,l)}while(Tl);return i}function Th(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(re.flags|=1024),t}function Ar(){var e=wi!==0;return wi=0,e}function Rr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function _r(e){if(zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zi=!1}It=0,Ge=je=re=null,Tl=!1,vn=wi=0,Nl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function He(){if(je===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ge===null?re.memoizedState:Ge.next;if(t!==null)Ge=t,je=e;else{if(e===null)throw re.alternate===null?Error(c(467)):Error(c(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ge===null?re.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=vn;return vn+=1,Nl===null&&(Nl=[]),e=Rs(Nl,e,t),t=re,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?jf:Xr),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===q)return Ie(e)}throw Error(c(438,String(e)))}function Or(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ti(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=oe;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=He();return Mr(t,je,e)}function Mr(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=r=null,v=null,A=t,U=!1;do{var B=A.lane&-536870913;if(B!==A.lane?(me&B)===B:(It&B)===B){var _=A.revertLane;if(_===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),B===Sl&&(U=!0);else if((It&_)===_){A=A.next,_===Sl&&(U=!0);continue}else B={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(d=v=B,r=i):v=v.next=B,re.lanes|=_,za|=_;B=A.action,Fa&&a(i,B),i=A.hasEagerState?A.eagerState:a(i,B)}else _={lane:B,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(d=v=_,r=i):v=v.next=_,re.lanes|=B,za|=B;A=A.next}while(A!==null&&A!==t);if(v===null?r=i:v.next=d,!ht(i,e.memoizedState)&&(Xe=!0,U&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=v,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Dr(e){var t=He(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);ht(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function qs(e,t,a){var l=re,n=He(),i=he;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var r=!ht((je||n).memoizedState,a);if(r&&(n.memoizedState=a,Xe=!0),n=n.queue,kr(Qs.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},Xs.bind(null,l,n,a,t),null),we===null)throw Error(c(349));i||(It&127)!==0||Gs(l,t,a)}return a}function Gs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=Ti(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Xs(e,t,a,l){t.value=a,t.getSnapshot=l,Vs(t)&&Zs(e)}function Qs(e,t,a){return a(function(){Vs(t)&&Zs(e)})}function Vs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Zs(e){var t=Ga(e,2);t!==null&&ft(t,e,2)}function Ur(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Fa){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Js(e,t,a,l){return e.baseState=a,Mr(e,je,typeof l=="function"?l:Pt)}function Nh(e,t,a,l,n){if(_i(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};D.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ks(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ks(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=D.T,r={};D.T=r;try{var d=a(n,l),v=D.S;v!==null&&v(r,d),$s(e,t,d)}catch(A){Lr(e,t,A)}finally{i!==null&&r.types!==null&&(i.types=r.types),D.T=i}}else try{i=a(n,l),$s(e,t,i)}catch(A){Lr(e,t,A)}}function $s(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ws(e,t,l)},function(l){return Lr(e,t,l)}):Ws(e,t,a)}function Ws(e,t,a){t.status="fulfilled",t.value=a,Fs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ks(e,a)))}function Lr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Fs(t),t=t.next;while(t!==l)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Is(e,t){return t}function Ps(e,t){if(he){var a=we.formState;if(a!==null){e:{var l=re;if(he){if(Te){t:{for(var n=Te,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Te=_t(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},a.queue=l,a=yf.bind(null,re,l),l.dispatch=a,l=Ur(!1),i=Gr.bind(null,re,!1,l.queue),l=nt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Nh.bind(null,re,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ef(e){var t=He();return tf(t,je,e)}function tf(e,t,a){if(t=Mr(e,t,Is)[0],e=Ci(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bn(t)}catch(r){throw r===El?bi:r}else l=t;t=He();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(re.flags|=2048,Cl(9,{destroy:void 0},Ch.bind(null,n,a),null)),[l,i,e]}function Ch(e,t){e.action=t}function af(e){var t=He(),a=je;if(a!==null)return tf(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=re.updateQueue,t===null&&(t=Ti(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function lf(){return He().memoizedState}function Ai(e,t,a,l){var n=nt();re.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ri(e,t,a,l){var n=He();l=l===void 0?null:l;var i=n.memoizedState.inst;je!==null&&l!==null&&Nr(l,je.memoizedState.deps)?n.memoizedState=Cl(t,i,a,l):(re.flags|=e,n.memoizedState=Cl(1|t,i,a,l))}function nf(e,t){Ai(8390656,8,e,t)}function kr(e,t){Ri(2048,8,e,t)}function Ah(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=Ti(),re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function uf(e){var t=He().memoizedState;return Ah({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function rf(e,t){return Ri(4,2,e,t)}function cf(e,t){return Ri(4,4,e,t)}function of(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,a){a=a!=null?a.concat([e]):null,Ri(4,4,of.bind(null,t,e),a)}function Hr(){}function ff(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Nr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function df(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Nr(t,l[1]))return l[0];if(l=e(),Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function Br(e,t,a){return a===void 0||(It&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=md(),re.lanes|=e,za|=e,a)}function mf(e,t,a,l){return ht(a,t)?a:wl.current!==null?(e=Br(e,a,l),ht(e,t)||(Xe=!0),e):(It&42)===0||(It&1073741824)!==0&&(me&261930)===0?(Xe=!0,e.memoizedState=a):(e=md(),re.lanes|=e,za|=e,t)}function pf(e,t,a,l,n){var i=x.p;x.p=i!==0&&8>i?i:8;var r=D.T,d={};D.T=d,Gr(e,!1,t,a);try{var v=n(),A=D.S;if(A!==null&&A(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var U=zh(v,l);yn(e,t,U,St(e))}else yn(e,t,l,St(e))}catch(B){yn(e,t,{then:function(){},status:"rejected",reason:B},St())}finally{x.p=i,r!==null&&d.types!==null&&(r.types=d.types),D.T=r}}function Rh(){}function Yr(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=hf(e).queue;pf(e,n,t,V,a===null?Rh:function(){return gf(e),a(l)})}function hf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gf(e){var t=hf(e);t.next===null&&(t=e.alternate.memoizedState),yn(e,t.next.queue,{},St())}function qr(){return Ie(Ln)}function vf(){return He().memoizedState}function bf(){return He().memoizedState}function _h(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=ba(a);var l=ya(t,e,a);l!==null&&(ft(l,t,a),pn(l,t,a)),t={cache:gr()},e.payload=t;return}t=t.return}}function Oh(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(e)?xf(t,a):(a=ir(e,t,a,l),a!==null&&(ft(a,e,l),Sf(a,t,l)))}function yf(e,t,a){var l=St();yn(e,t,a,l)}function yn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_i(e))xf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,d=i(r,a);if(n.hasEagerState=!0,n.eagerState=d,ht(d,r))return fi(e,t,n,0),we===null&&si(),!1}catch{}if(a=ir(e,t,n,l),a!==null)return ft(a,e,l),Sf(a,t,l),!0}return!1}function Gr(e,t,a,l){if(l={lane:2,revertLane:xc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_i(e)){if(t)throw Error(c(479))}else t=ir(e,a,l,2),t!==null&&ft(t,e,2)}function _i(e){var t=e.alternate;return e===re||t!==null&&t===re}function xf(e,t){Tl=zi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Sf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wo(e,a)}}var xn={readContext:Ie,use:Ni,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};xn.useEffectEvent=Me;var jf={readContext:Ie,use:Ni,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:nf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ai(4194308,4,of.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){Ai(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var l=e();if(Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=nt();if(a!==void 0){var n=a(t);if(Fa){sa(!0);try{a(t)}finally{sa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Oh.bind(null,re,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ur(e);var t=e.queue,a=yf.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Hr,useDeferredValue:function(e,t){var a=nt();return Br(a,e,t)},useTransition:function(){var e=Ur(!1);return e=pf.bind(null,re,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=re,n=nt();if(he){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),we===null)throw Error(c(349));(me&127)!==0||Gs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,nf(Qs.bind(null,l,i,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Xs.bind(null,l,i,a,t),null),a},useId:function(){var e=nt(),t=we.identifierPrefix;if(he){var a=qt,l=Yt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=wh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qr,useFormState:Ps,useActionState:Ps,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gr.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:Or,useCacheRefresh:function(){return nt().memoizedState=_h.bind(null,re)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((ye&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Xr={readContext:Ie,use:Ni,useCallback:ff,useContext:Ie,useEffect:kr,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:cf,useMemo:df,useReducer:Ci,useRef:lf,useState:function(){return Ci(Pt)},useDebugValue:Hr,useDeferredValue:function(e,t){var a=He();return mf(a,je.memoizedState,e,t)},useTransition:function(){var e=Ci(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:qs,useId:vf,useHostTransitionStatus:qr,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var a=He();return Js(a,je,e,t)},useMemoCache:Or,useCacheRefresh:bf};Xr.useEffectEvent=uf;var Ef={readContext:Ie,use:Ni,useCallback:ff,useContext:Ie,useEffect:kr,useImperativeHandle:sf,useInsertionEffect:rf,useLayoutEffect:cf,useMemo:df,useReducer:Dr,useRef:lf,useState:function(){return Dr(Pt)},useDebugValue:Hr,useDeferredValue:function(e,t){var a=He();return je===null?Br(a,e,t):mf(a,je.memoizedState,e,t)},useTransition:function(){var e=Dr(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:qs,useId:vf,useHostTransitionStatus:qr,useFormState:af,useActionState:af,useOptimistic:function(e,t){var a=He();return je!==null?Js(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Or,useCacheRefresh:bf};Ef.useEffectEvent=uf;function Qr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(ft(t,e,a),pn(t,e,a))}};function zf(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!un(a,l)||!un(n,i):!0}function wf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Vr.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=z({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Tf(e){oi(e)}function Nf(e){console.error(e)}function Cf(e){oi(e)}function Oi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Af(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Zr(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Oi(e,t)},a}function Rf(e){return e=ba(e),e.tag=3,e}function _f(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Af(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Af(t,a,l),typeof n!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Mh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?Qi():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),vc(e,l,n)),!1;case 22:return a.flags|=65536,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),vc(e,l,n)),!1}throw Error(c(435,a.tag))}return vc(e,l,n),Qi(),!1}if(he)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==fr&&(e=Error(c(422),{cause:l}),on(Tt(e,a)))):(l!==fr&&(t=Error(c(423),{cause:l}),on(Tt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Tt(l,a),n=Zr(e.stateNode,l,n),jr(e,n),De!==4&&(De=2)),!1;var i=Error(c(520),{cause:l});if(i=Tt(i,a),Cn===null?Cn=[i]:Cn.push(i),De!==4&&(De=2),t===null)return!0;l=Tt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Zr(a.stateNode,l,e),jr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Rf(n),_f(n,e,a,l),jr(a,n),!1}a=a.return}while(a!==null);return!1}var Jr=Error(c(461)),Xe=!1;function Pe(e,t,a,l){t.child=e===null?Ds(t,null,a,l):Wa(t,e.child,a,l)}function Of(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var d in l)d!=="ref"&&(r[d]=l[d])}else r=l;return Za(t),l=Cr(e,t,a,r,i,n),d=Ar(),e!==null&&!Xe?(Rr(e,t,n),ea(e,t,n)):(he&&d&&or(t),t.flags|=1,Pe(e,t,l,n),t.child)}function Mf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ur(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Df(e,t,i,l,n)):(e=mi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!tc(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:un,a(r,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Df(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(un(i,l)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=l=i,tc(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,ea(e,t,n)}return Kr(e,t,a,l,n)}function Uf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Lf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,i!==null?i.cachePool:null),i!==null?ks(t,i):zr(),Hs(t);else return l=t.lanes=536870912,Lf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(vi(t,i.cachePool),ks(t,i),Sa(),t.memoizedState=null):(e!==null&&vi(t,null),zr(),Sa());return Pe(e,t,n,a),t.child}function Sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lf(e,t,a,l,n){var i=br();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&vi(t,null),zr(),Hs(t),e!==null&&xl(e,t,l,!0),t.childLanes=n,null}function Mi(e,t){return t=Ui({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kf(e,t,a){return Wa(t,e.child,null,a),e=Mi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Dh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(l.mode==="hidden")return e=Mi(t,l),t.lanes=536870912,Sn(null,e);if(Tr(t),(e=Te)?(e=$d(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=ys(e),a.return=t,t.child=a,Fe=t,Te=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Mi(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Tr(t),n)if(t.flags&256)t.flags&=-257,t=kf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Xe||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Xe||n){if(l=we,l!==null&&(r=To(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,Ga(e,r),ft(l,e,r),Jr;Qi(),t=kf(e,t,a)}else e=i.treeContext,Te=_t(r.nextSibling),Fe=t,he=!0,pa=null,At=!1,e!==null&&js(t,e),t=Mi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Kr(e,t,a,l,n){return Za(t),a=Cr(e,t,a,l,void 0,n),l=Ar(),e!==null&&!Xe?(Rr(e,t,n),ea(e,t,n)):(he&&l&&or(t),t.flags|=1,Pe(e,t,a,n),t.child)}function Hf(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=Ys(t,l,a,n),Bs(e),l=Ar(),e!==null&&!Xe?(Rr(e,t,i),ea(e,t,i)):(he&&l&&or(t),t.flags|=1,Pe(e,t,a,i),t.child)}function Bf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=gl,r=a.contextType;typeof r=="object"&&r!==null&&(i=Ie(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},xr(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?Ie(r):gl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Qr(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Vr.enqueueReplaceState(i,i.state,null),gn(t,l,i,n),hn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=Ia(a,d);i.props=v;var A=i.context,U=a.contextType;r=gl,typeof U=="object"&&U!==null&&(r=Ie(U));var B=a.getDerivedStateFromProps;U=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||A!==r)&&wf(t,i,l,r),va=!1;var _=t.memoizedState;i.state=_,gn(t,l,i,n),hn(),A=t.memoizedState,d||_!==A||va?(typeof B=="function"&&(Qr(t,a,B,l),A=t.memoizedState),(v=va||zf(t,a,v,l,_,A,r))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=r,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Sr(e,t),r=t.memoizedProps,U=Ia(a,r),i.props=U,B=t.pendingProps,_=i.context,A=a.contextType,v=gl,typeof A=="object"&&A!==null&&(v=Ie(A)),d=a.getDerivedStateFromProps,(A=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==B||_!==v)&&wf(t,i,l,v),va=!1,_=t.memoizedState,i.state=_,gn(t,l,i,n),hn();var M=t.memoizedState;r!==B||_!==M||va||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof d=="function"&&(Qr(t,a,d,l),M=t.memoizedState),(U=va||zf(t,a,U,l,_,M,v)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,M,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,M,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=v,l=U):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Di(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Wa(t,e.child,null,n),t.child=Wa(t,null,a,n)):Pe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function Yf(e,t,a,l){return Qa(),t.flags|=256,Pe(e,t,a,l),t.child}var $r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wr(e){return{baseLanes:e,cachePool:Cs()}}function Fr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function qf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(n?xa(t):Sa(),(e=Te)?(e=$d(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=ys(e),a.return=t,t.child=a,Fe=t,Te=null)):e=null,e===null)throw ha(t);return Mc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(Sa(),n=t.mode,d=Ui({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Wr(a),l.childLanes=Fr(e,r,a),t.memoizedState=$r,Sn(null,l)):(xa(t),Ir(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(xa(t),t.flags&=-257,t=Pr(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),d=l.fallback,n=t.mode,l=Ui({mode:"visible",children:l.children},n),d=Xa(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Wa(t,e.child,null,a),l=t.child,l.memoizedState=Wr(a),l.childLanes=Fr(e,r,a),t.memoizedState=$r,t=Sn(null,l));else if(xa(t),Mc(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r)var A=r.dgst;r=A,l=Error(c(419)),l.stack="",l.digest=r,on({value:l,source:null,stack:null}),t=Pr(e,t,a)}else if(Xe||xl(e,t,a,!1),r=(a&e.childLanes)!==0,Xe||r){if(r=we,r!==null&&(l=To(r,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Ga(e,l),ft(r,e,l),Jr;Oc(d)||Qi(),t=Pr(e,t,a)}else Oc(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Te=_t(d.nextSibling),Fe=t,he=!0,pa=null,At=!1,e!==null&&js(t,e),t=Ir(t,l.children),t.flags|=4096);return t}return n?(Sa(),d=l.fallback,n=t.mode,v=e.child,A=v.sibling,l=Kt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,A!==null?d=Kt(A,d):(d=Xa(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,Sn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Wr(a):(n=d.cachePool,n!==null?(v=qe._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=Cs(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Fr(e,r,a),t.memoizedState=$r,Sn(e.child,l)):(xa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Ir(e,t){return t=Ui({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ui(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Pr(e,t,a){return Wa(t,e.child,null,a),e=Ir(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),pr(e.return,t,a)}function ec(e,t,a,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function Xf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=ke.current,d=(r&2)!==0;if(d?(r=r&1|2,t.flags|=128):r&=1,Z(ke,r),Pe(e,t,l,a),l=he?cn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gf(e,a,t);else if(e.tag===19)Gf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ec(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ec(t,!0,a,null,i,l);break;case"together":ec(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function tc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Uh(e,t,a){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),ga(t,qe,e.memoizedState.cache),Qa();break;case 27:case 5:Zl(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qf(e,t,a):(xa(t),e=ea(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Xf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Z(ke,ke.current),l)break;return null;case 22:return t.lanes=0,Uf(e,t,a,t.pendingProps);case 24:ga(t,qe,e.memoizedState.cache)}return ea(e,t,a)}function Qf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!tc(e,a)&&(t.flags&128)===0)return Xe=!1,Uh(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,he&&(t.flags&1048576)!==0&&Ss(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")ur(e)?(l=Ia(e,l),t.tag=1,t=Bf(null,t,e,l,a)):(t.tag=0,t=Kr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===W){t.tag=11,t=Of(null,t,e,l,a);break e}else if(n===X){t.tag=14,t=Mf(null,t,e,l,a);break e}}throw t=Ye(e)||e,Error(c(306,t,""))}}return t;case 0:return Kr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ia(l,t.pendingProps),Bf(e,t,l,n,a);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Sr(e,t),gn(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ga(t,qe,l),l!==i.cache&&hr(t,[qe],a,!0),hn(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Yf(e,t,l,a);break e}else if(l!==n){n=Tt(Error(c(424)),t),on(n),t=Yf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Te=_t(e.firstChild),Fe=t,he=!0,pa=null,At=!0,a=Ds(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===n){t=ea(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Di(e,t),e===null?(a=tm(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=Fi(ae.current).createElement(a),l[We]=t,l[it]=e,et(l,a,e),Ze(l),t.stateNode=l):t.memoizedState=tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zl(t),e===null&&he&&(l=t.stateNode=Id(t.type,t.pendingProps,ae.current),Fe=t,At=!0,n=Te,Aa(t.type)?(Dc=n,Te=_t(l.firstChild)):Te=n),Pe(e,t,t.pendingProps.children,a),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((n=l=Te)&&(l=fg(l,t.type,t.pendingProps,At),l!==null?(t.stateNode=l,Fe=t,Te=_t(l.firstChild),At=!1,n=!0):n=!1),n||ha(t)),Zl(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Ac(n,i)?l=null:r!==null&&Ac(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=Cr(e,t,Th,null,null,a),Ln._currentValue=n),Di(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=Te)&&(a=dg(a,t.pendingProps,At),a!==null?(t.stateNode=a,Fe=t,Te=null,e=!0):e=!1),e||ha(t)),null;case 13:return qf(e,t,a);case 4:return lt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wa(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return Of(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ga(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Ie(n),l=l(n),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return Mf(e,t,t.type,t.pendingProps,a);case 15:return Df(e,t,t.type,t.pendingProps,a);case 19:return Xf(e,t,a);case 31:return Dh(e,t,a);case 22:return Uf(e,t,a,t.pendingProps);case 24:return Za(t),l=Ie(qe),e===null?(n=br(),n===null&&(n=we,i=gr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},xr(t),ga(t,qe,n)):((e.lanes&a)!==0&&(Sr(e,t),gn(t,null,null,a),hn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ga(t,qe,l)):(l=i.cache,ga(t,qe,l),l!==n.cache&&hr(t,[qe],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ta(e){e.flags|=4}function ac(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(vd())e.flags|=8192;else throw $a=yi,yr}else e.flags&=-16777217}function Vf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!um(t))if(vd())e.flags|=8192;else throw $a=yi,yr}function Li(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Eo():536870912,e.lanes|=t,Ol|=t)}function jn(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Lh(e,t,a){var l=t.pendingProps;switch(sr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(qe),Le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dr())),Ne(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Ne(t),Vf(t,i)):(Ne(t),ac(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Ne(t),Vf(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Ne(t),ac(t,n,e,l,a)),null;case 27:if(Jn(t),a=ae.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}e=$.current,yl(t)?Es(t):(e=Id(n,l,a),t.stateNode=e,ta(t))}return Ne(t),null;case 5:if(Jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}if(i=$.current,yl(t))Es(t);else{var r=Fi(ae.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[We]=t,i[it]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(et(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Ne(t),ac(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ae.current,yl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||qd(e.nodeValue,a)),e||ha(t,!0)}else e=Fi(e).createTextNode(l),e[We]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=dr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=dr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Li(t,t.updateQueue),Ne(t),null);case 4:return Le(),e===null&&zc(t.stateNode.containerInfo),Ne(t),null;case 10:return Ft(t.type),Ne(t),null;case 19:if(H(ke),l=t.memoizedState,l===null)return Ne(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)jn(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,jn(l,!1),e=i.updateQueue,t.updateQueue=e,Li(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bs(a,e),a=a.sibling;return Z(ke,ke.current&1|2),he&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&dt()>qi&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Li(t,e),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!he)return Ne(t),null}else 2*dt()-l.renderingStartTime>qi&&a!==536870912&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=dt(),e.sibling=null,a=ke.current,Z(ke,n?a&1|2:a&1),he&&$t(t,l.treeForkCount),e):(Ne(t),null);case 22:case 23:return bt(t),wr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&Li(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&H(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(qe),Ne(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function kh(e,t){switch(sr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(qe),Le(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(ke),null;case 4:return Le(),null;case 10:return Ft(t.type),null;case 22:case 23:return bt(t),wr(),e!==null&&H(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(qe),null;case 25:return null;default:return null}}function Zf(e,t){switch(sr(t),t.tag){case 3:Ft(qe),Le();break;case 26:case 27:case 5:Jn(t);break;case 4:Le();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:H(ke);break;case 10:Ft(t.type);break;case 22:case 23:bt(t),wr(),e!==null&&H(Ja);break;case 24:Ft(qe)}}function En(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(d){Se(t,t.return,d)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,d=r.destroy;if(d!==void 0){r.destroy=void 0,n=t;var v=a,A=d;try{A()}catch(U){Se(n,v,U)}}}l=l.next}while(l!==i)}}catch(U){Se(t,t.return,U)}}function Jf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ls(t,a)}catch(l){Se(e,e.return,l)}}}function Kf(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function zn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Se(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Se(e,t,n)}else a.current=null}function $f(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Se(e,e.return,n)}}function lc(e,t,a){try{var l=e.stateNode;ig(l,e.type,a,t),l[it]=t}catch(n){Se(e,e.return,n)}}function Wf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ic(e,t,a),e=e.sibling;e!==null;)ic(e,t,a),e=e.sibling}function ki(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ki(e,t,a),e=e.sibling;e!==null;)ki(e,t,a),e=e.sibling}function Ff(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,l,a),t[We]=e,t[it]=a}catch(i){Se(e,e.return,i)}}var aa=!1,Qe=!1,uc=!1,If=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Hh(e,t){if(e=e.containerInfo,Nc=nu,e=os(e),Pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,d=-1,v=-1,A=0,U=0,B=e,_=null;t:for(;;){for(var M;B!==a||n!==0&&B.nodeType!==3||(d=r+n),B!==i||l!==0&&B.nodeType!==3||(v=r+l),B.nodeType===3&&(r+=B.nodeValue.length),(M=B.firstChild)!==null;)_=B,B=M;for(;;){if(B===e)break t;if(_===a&&++A===n&&(d=r),_===i&&++U===l&&(v=r),(M=B.nextSibling)!==null)break;B=_,_=B.parentNode}B=M}a=d===-1||v===-1?null:{start:d,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:e,selectionRange:a},nu=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var K=Ia(a.type,n);e=l.getSnapshotBeforeUpdate(K,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Se(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Pf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&En(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){Se(a,a.return,r)}else{var n=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Se(a,a.return,r)}}l&64&&Jf(a),l&512&&zn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ls(e,t)}catch(r){Se(a,a.return,r)}}break;case 27:t===null&&l&4&&Ff(a);case 26:case 5:na(e,a),t===null&&l&4&&$f(a),l&512&&zn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&ad(e,a);break;case 13:na(e,a),l&4&&ld(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Jh.bind(null,a),mg(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Qe,n=aa;var i=Qe;aa=l,(Qe=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Qe=i}break;case 30:break;default:na(e,a)}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,rt=!1;function la(e,t,a){for(a=a.child;a!==null;)td(e,t,a),a=a.sibling}function td(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:Qe||Gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Gt(a,t);var l=_e,n=rt;Aa(a.type)&&(_e=a.stateNode,rt=!1),la(e,t,a),Mn(a.stateNode),_e=l,rt=n;break;case 5:Qe||Gt(a,t);case 6:if(l=_e,n=rt,_e=null,la(e,t,a),_e=l,rt=n,_e!==null)if(rt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(i){Se(a,t,i)}else try{_e.removeChild(a.stateNode)}catch(i){Se(a,t,i)}break;case 18:_e!==null&&(rt?(e=_e,Jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Jd(_e,a.stateNode));break;case 4:l=_e,n=rt,_e=a.stateNode.containerInfo,rt=!0,la(e,t,a),_e=l,rt=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Qe||ja(4,a,t),la(e,t,a);break;case 1:Qe||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Kf(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Qe=(l=Qe)||a.memoizedState!==null,la(e,t,a),Qe=l;break;default:la(e,t,a)}}function ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){Se(t,t.return,a)}}}function ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){Se(t,t.return,a)}}function Bh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new If),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new If),t;default:throw Error(c(435,e.tag))}}function Hi(e,t){var a=Bh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Kh.bind(null,e,l);l.then(n,n)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,d=r;e:for(;d!==null;){switch(d.tag){case 27:if(Aa(d.type)){_e=d.stateNode,rt=!1;break e}break;case 5:_e=d.stateNode,rt=!1;break e;case 3:case 4:_e=d.stateNode.containerInfo,rt=!0;break e}d=d.return}if(_e===null)throw Error(c(160));td(i,r,n),_e=null,rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)nd(t,e),t=t.sibling}var Ut=null;function nd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ot(e),l&4&&(ja(3,e,e.return),En(3,e),ja(5,e,e.return));break;case 1:ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),et(i,l,a),i[We]=e,Ze(i),l=i;break e;case"link":var r=nm("link","href",n).get(l+(a.href||""));if(r){for(var d=0;d<r.length;d++)if(i=r[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;case"meta":if(r=nm("meta","content",n).get(l+(a.content||""))){for(d=0;d<r.length;d++)if(i=r[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[We]=e,Ze(i),l=i}e.stateNode=l}else im(n,e.type,e.stateNode);else e.stateNode=lm(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?im(n,e.type,e.stateNode):lm(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),a!==null&&l&4&&lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{ol(n,"")}catch(K){Se(e,e.return,K)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,lc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(uc=!0);break;case 6:if(ct(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(K){Se(e,e.return,K)}}break;case 3:if(eu=null,n=Ut,Ut=Ii(t.containerInfo),ct(t,e),Ut=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(K){Se(e,e.return,K)}uc&&(uc=!1,id(e));break;case 4:l=Ut,Ut=Ii(e.stateNode.containerInfo),ct(t,e),ot(e),Ut=l;break;case 12:ct(t,e),ot(e);break;case 31:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 13:ct(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yi=dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,A=aa,U=Qe;if(aa=A||n,Qe=U||v,ct(t,e),Qe=U,aa=A,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||aa||Qe||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=v.stateNode;var B=v.memoizedProps.style,_=B!=null&&B.hasOwnProperty("display")?B.display:null;d.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(K){Se(v,v.return,K)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch(K){Se(v,v.return,K)}}}else if(t.tag===18){if(a===null){v=t;try{var M=v.stateNode;n?Kd(M,!0):Kd(v.stateNode,!1)}catch(K){Se(v,v.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hi(e,a))));break;case 19:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 30:break;case 21:break;default:ct(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Wf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=nc(e);ki(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(ol(r,""),a.flags&=-33);var d=nc(e);ki(e,d,r);break;case 3:case 4:var v=a.stateNode.containerInfo,A=nc(e);ic(e,A,v);break;default:throw Error(c(161))}}catch(U){Se(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function id(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;id(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pf(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),Pa(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Kf(t,t.return,a),Pa(t);break;case 27:Mn(t.stateNode);case 26:case 5:Gt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),En(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){Se(l,l.return,A)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Us(v[n],d)}catch(A){Se(l,l.return,A)}}a&&r&64&&Jf(i),zn(i,i.return);break;case 27:Ff(i);case 26:case 5:ia(n,i,a),a&&l===null&&r&4&&$f(i),zn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&r&4&&ad(n,i);break;case 13:ia(n,i,a),a&&r&4&&ld(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),zn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function rc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sn(a))}function cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e))}function Lt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ud(e,t,a,l),t=t.sibling}function ud(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,l),n&2048&&En(9,t);break;case 1:Lt(e,t,a,l);break;case 3:Lt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e)));break;case 12:if(n&2048){Lt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,d=i.onPostCommit;typeof d=="function"&&d(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Se(t,t.return,v)}}else Lt(e,t,a,l);break;case 31:Lt(e,t,a,l);break;case 13:Lt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Lt(e,t,a,l):wn(e,t):i._visibility&2?Lt(e,t,a,l):(i._visibility|=2,Al(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&rc(r,t);break;case 24:Lt(e,t,a,l),n&2048&&cc(t.alternate,t);break;default:Lt(e,t,a,l)}}function Al(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,d=a,v=l,A=r.flags;switch(r.tag){case 0:case 11:case 15:Al(i,r,d,v,n),En(8,r);break;case 23:break;case 22:var U=r.stateNode;r.memoizedState!==null?U._visibility&2?Al(i,r,d,v,n):wn(i,r):(U._visibility|=2,Al(i,r,d,v,n)),n&&A&2048&&rc(r.alternate,r);break;case 24:Al(i,r,d,v,n),n&&A&2048&&cc(r.alternate,r);break;default:Al(i,r,d,v,n)}t=t.sibling}}function wn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:wn(a,l),n&2048&&rc(l.alternate,l);break;case 24:wn(a,l),n&2048&&cc(l.alternate,l);break;default:wn(a,l)}t=t.sibling}}var Tn=8192;function Rl(e,t,a){if(e.subtreeFlags&Tn)for(e=e.child;e!==null;)rd(e,t,a),e=e.sibling}function rd(e,t,a){switch(e.tag){case 26:Rl(e,t,a),e.flags&Tn&&e.memoizedState!==null&&wg(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Rl(e,t,a);break;case 3:case 4:var l=Ut;Ut=Ii(e.stateNode.containerInfo),Rl(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Tn,Tn=16777216,Rl(e,t,a),Tn=l):Rl(e,t,a));break;default:Rl(e,t,a)}}function cd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,sd(l,e)}cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)od(e),e=e.sibling}function od(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):Nn(e);break;default:Nn(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,sd(l,e)}cd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Bi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function sd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Je=l;else e:for(a=e;Je!==null;){l=Je;var n=l.sibling,i=l.return;if(ed(l),l===a){Je=null;break e}if(n!==null){n.return=i,Je=n;break e}Je=i}}}var Yh={getCacheForType:function(e){var t=Ie(qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(qe).controller.signal}},qh=typeof WeakMap=="function"?WeakMap:Map,ye=0,we=null,fe=null,me=0,xe=0,yt=null,Ea=!1,_l=!1,oc=!1,ua=0,De=0,za=0,el=0,sc=0,xt=0,Ol=0,Cn=null,st=null,fc=!1,Yi=0,fd=0,qi=1/0,Gi=null,wa=null,Ve=0,Ta=null,Ml=null,ra=0,dc=0,mc=null,dd=null,An=0,pc=null;function St(){return(ye&2)!==0&&me!==0?me&-me:D.T!==null?xc():No()}function md(){if(xt===0)if((me&536870912)===0||he){var e=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),xt=e}else xt=536870912;return e=vt.current,e!==null&&(e.flags|=32),xt}function ft(e,t,a){(e===we&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Na(e,me,xt,!1)),$l(e,a),((ye&2)===0||e!==we)&&(e===we&&((ye&2)===0&&(el|=a),De===4&&Na(e,me,xt,!1)),Xt(e))}function pd(e,t,a){if((ye&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),n=l?Qh(e,t):gc(e,t,!0),i=l;do{if(n===0){_l&&!l&&Na(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Gh(a)){n=gc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var d=e;n=Cn;var v=d.current.memoizedState.isDehydrated;if(v&&(Dl(d,r).flags|=256),r=gc(d,r,!1),r!==2){if(oc&&!v){d.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Na(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Na(l,t,xt,!Ea);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Yi+300-dt(),10<n)){if(Na(l,t,xt,!Ea),In(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=Vd(hd.bind(null,l,a,st,Gi,fc,t,xt,el,Ol,Ea,i,"Throttled",-0,0),n);break e}hd(l,a,st,Gi,fc,t,xt,el,Ol,Ea,i,null,-0,0)}}break}while(!0);Xt(e)}function hd(e,t,a,l,n,i,r,d,v,A,U,B,_,M){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},rd(t,i,B);var K=(i&62914560)===i?Yi-dt():(i&4194048)===i?fd-dt():0;if(K=Tg(B,K),K!==null){ra=i,e.cancelPendingCommit=K(Ed.bind(null,e,t,i,a,l,n,r,d,v,U,B,null,_,M)),Na(e,i,r,!A);return}}Ed(e,t,i,a,l,n,r,d,v)}function Gh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,a,l){t&=~sc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&zo(e,a,t)}function Xi(){return(ye&6)===0?(Rn(0),!1):!0}function hc(){if(fe!==null){if(xe===0)var e=fe.return;else e=fe,Wt=Va=null,_r(e),zl=null,dn=0,e=fe;for(;e!==null;)Zf(e.alternate,e),e=e.return;fe=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,hc(),we=e,fe=a=Kt(e.current,null),me=t,xe=0,yt=null,Ea=!1,_l=Kl(e,t),oc=!1,Ol=xt=sc=el=za=De=0,st=Cn=null,fc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return ua=t,si(),a}function gd(e,t){re=null,D.H=xn,t===El||t===bi?(t=_s(),xe=3):t===yr?(t=_s(),xe=4):xe=t===Jr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,fe===null&&(De=1,Oi(e,Tt(t,e.current)))}function vd(){var e=vt.current;return e===null?!0:(me&4194048)===me?Rt===null:(me&62914560)===me||(me&536870912)!==0?e===Rt:!1}function bd(){var e=D.H;return D.H=xn,e===null?xn:e}function yd(){var e=D.A;return D.A=Yh,e}function Qi(){De=4,Ea||(me&4194048)!==me&&vt.current!==null||(_l=!0),(za&134217727)===0&&(el&134217727)===0||we===null||Na(we,me,xt,!1)}function gc(e,t,a){var l=ye;ye|=2;var n=bd(),i=yd();(we!==e||me!==t)&&(Gi=null,Dl(e,t)),t=!1;var r=De;e:do try{if(xe!==0&&fe!==null){var d=fe,v=yt;switch(xe){case 8:hc(),r=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var A=xe;if(xe=0,yt=null,Ul(e,d,v,A),a&&_l){r=0;break e}break;default:A=xe,xe=0,yt=null,Ul(e,d,v,A)}}Xh(),r=De;break}catch(U){gd(e,U)}while(!0);return t&&e.shellSuspendCounter++,Wt=Va=null,ye=l,D.H=n,D.A=i,fe===null&&(we=null,me=0,si()),r}function Xh(){for(;fe!==null;)xd(fe)}function Qh(e,t){var a=ye;ye|=2;var l=bd(),n=yd();we!==e||me!==t?(Gi=null,qi=dt()+500,Dl(e,t)):_l=Kl(e,t);e:do try{if(xe!==0&&fe!==null){t=fe;var i=yt;t:switch(xe){case 1:xe=0,yt=null,Ul(e,t,i,1);break;case 2:case 9:if(As(i)){xe=0,yt=null,Sd(t);break}t=function(){xe!==2&&xe!==9||we!==e||(xe=7),Xt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:As(i)?(xe=0,yt=null,Sd(t)):(xe=0,yt=null,Ul(e,t,i,7));break;case 5:var r=null;switch(fe.tag){case 26:r=fe.memoizedState;case 5:case 27:var d=fe;if(r?um(r):d.stateNode.complete){xe=0,yt=null;var v=d.sibling;if(v!==null)fe=v;else{var A=d.return;A!==null?(fe=A,Vi(A)):fe=null}break t}}xe=0,yt=null,Ul(e,t,i,5);break;case 6:xe=0,yt=null,Ul(e,t,i,6);break;case 8:hc(),De=6;break e;default:throw Error(c(462))}}Vh();break}catch(U){gd(e,U)}while(!0);return Wt=Va=null,D.H=l,D.A=n,ye=a,fe!==null?0:(we=null,me=0,si(),De)}function Vh(){for(;fe!==null&&!pp();)xd(fe)}function xd(e){var t=Qf(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Vi(e):fe=t}function Sd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hf(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Hf(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:_r(t);default:Zf(a,t),t=fe=bs(t,ua),t=Qf(a,t,ua)}e.memoizedProps=e.pendingProps,t===null?Vi(e):fe=t}function Ul(e,t,a,l){Wt=Va=null,_r(t),zl=null,dn=0;var n=t.return;try{if(Mh(e,n,t,a,me)){De=1,Oi(e,Tt(a,e.current)),fe=null;return}}catch(i){if(n!==null)throw fe=n,i;De=1,Oi(e,Tt(a,e.current)),fe=null;return}t.flags&32768?(he||l===1?e=!0:_l||(me&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),jd(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){jd(t,Ea);return}e=t.return;var a=Lh(t.alternate,t,ua);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);De===0&&(De=5)}function jd(e,t){do{var a=kh(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);De=6,fe=null}function Ed(e,t,a,l,n,i,r,d,v){e.cancelPendingCommit=null;do Zi();while(Ve!==0);if((ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=nr,zp(e,a,i,r,d,v),e===we&&(fe=we=null,me=0),Ml=t,Ta=e,ra=a,dc=i,mc=n,dd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$h(Kn,function(){return Cd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=x.p,x.p=2,r=ye,ye|=4;try{Hh(e,t,a)}finally{ye=r,x.p=n,D.T=l}}Ve=1,zd(),wd(),Td()}}function zd(){if(Ve===1){Ve=0;var e=Ta,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=x.p;x.p=2;var n=ye;ye|=4;try{nd(t,e);var i=Cc,r=os(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(r!==d&&d&&d.ownerDocument&&cs(d.ownerDocument.documentElement,d)){if(v!==null&&Pu(d)){var A=v.start,U=v.end;if(U===void 0&&(U=A),"selectionStart"in d)d.selectionStart=A,d.selectionEnd=Math.min(U,d.value.length);else{var B=d.ownerDocument||document,_=B&&B.defaultView||window;if(_.getSelection){var M=_.getSelection(),K=d.textContent.length,P=Math.min(v.start,K),ze=v.end===void 0?P:Math.min(v.end,K);!M.extend&&P>ze&&(r=ze,ze=P,P=r);var w=rs(d,P),S=rs(d,ze);if(w&&S&&(M.rangeCount!==1||M.anchorNode!==w.node||M.anchorOffset!==w.offset||M.focusNode!==S.node||M.focusOffset!==S.offset)){var C=B.createRange();C.setStart(w.node,w.offset),M.removeAllRanges(),P>ze?(M.addRange(C),M.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),M.addRange(C))}}}}for(B=[],M=d;M=M.parentNode;)M.nodeType===1&&B.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<B.length;d++){var k=B[d];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}nu=!!Nc,Cc=Nc=null}finally{ye=n,x.p=l,D.T=a}}e.current=t,Ve=2}}function wd(){if(Ve===2){Ve=0;var e=Ta,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=x.p;x.p=2;var n=ye;ye|=4;try{Pf(e,t.alternate,t)}finally{ye=n,x.p=l,D.T=a}}Ve=3}}function Td(){if(Ve===4||Ve===3){Ve=0,hp();var e=Ta,t=Ml,a=ra,l=dd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Ml=Ta=null,Nd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wa=null),Du(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=x.p,x.p=2,D.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var d=l[r];i(d.value,{componentStack:d.stack})}}finally{D.T=t,x.p=n}}(ra&3)!==0&&Zi(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===pc?An++:(An=0,pc=e):An=0,Rn(0)}}function Nd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sn(t)))}function Zi(){return zd(),wd(),Td(),Cd()}function Cd(){if(Ve!==5)return!1;var e=Ta,t=dc;dc=0;var a=Du(ra),l=D.T,n=x.p;try{x.p=32>a?32:a,D.T=null,a=mc,mc=null;var i=Ta,r=ra;if(Ve=0,Ml=Ta=null,ra=0,(ye&6)!==0)throw Error(c(331));var d=ye;if(ye|=4,od(i.current),ud(i,i.current,r,a),ye=d,Rn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Jl,i)}catch{}return!0}finally{x.p=n,D.T=l,Nd(e,t)}}function Ad(e,t,a){t=Tt(a,t),t=Zr(e.stateNode,t,2),e=ya(e,t,2),e!==null&&($l(e,2),Xt(e))}function Se(e,t,a){if(e.tag===3)Ad(e,e,a);else for(;t!==null;){if(t.tag===3){Ad(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=Tt(a,e),a=Rf(2),l=ya(t,a,2),l!==null&&(_f(a,l,t,e),$l(l,2),Xt(l));break}}t=t.return}}function vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new qh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(oc=!0,n.add(a),e=Zh.bind(null,e,t,a),t.then(e,e))}function Zh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(me&a)===a&&(De===4||De===3&&(me&62914560)===me&&300>dt()-Yi?(ye&2)===0&&Dl(e,0):sc|=a,Ol===me&&(Ol=0)),Xt(e)}function Rd(e,t){t===0&&(t=Eo()),e=Ga(e,t),e!==null&&($l(e,t),Xt(e))}function Jh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rd(e,a)}function Kh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Rd(e,a)}function $h(e,t){return Ru(e,t)}var Ji=null,Ll=null,bc=!1,Ki=!1,yc=!1,Ca=0;function Xt(e){e!==Ll&&e.next===null&&(Ll===null?Ji=Ll=e:Ll=Ll.next=e),Ki=!0,bc||(bc=!0,Fh())}function Rn(e,t){if(!yc&&Ki){yc=!0;do for(var a=!1,l=Ji;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(r&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Dd(l,i))}else i=me,i=In(l,l===we?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Kl(l,i)||(a=!0,Dd(l,i));l=l.next}while(a);yc=!1}}function Wh(){_d()}function _d(){Ki=bc=!1;var e=0;Ca!==0&&rg()&&(e=Ca);for(var t=dt(),a=null,l=Ji;l!==null;){var n=l.next,i=Od(l,t);i===0?(l.next=null,a===null?Ji=n:a.next=n,n===null&&(Ll=a)):(a=l,(e!==0||(i&3)!==0)&&(Ki=!0)),l=n}Ve!==0&&Ve!==5||Rn(e),Ca!==0&&(Ca=0)}function Od(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-pt(i),d=1<<r,v=n[r];v===-1?((d&a)===0||(d&l)!==0)&&(n[r]=Ep(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=we,a=me,a=In(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_u(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&_u(l),Du(a)){case 2:case 8:a=So;break;case 32:a=Kn;break;case 268435456:a=jo;break;default:a=Kn}return l=Md.bind(null,e),a=Ru(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&_u(l),e.callbackPriority=2,e.callbackNode=null,2}function Md(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zi()&&e.callbackNode!==a)return null;var l=me;return l=In(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(pd(e,l,t),Od(e,dt()),e.callbackNode!=null&&e.callbackNode===a?Md.bind(null,e):null)}function Dd(e,t){if(Zi())return null;pd(e,t,!0)}function Fh(){og(function(){(ye&6)!==0?Ru(xo,Wh):_d()})}function xc(){if(Ca===0){var e=Sl;e===0&&(e=$n,$n<<=1,($n&261888)===0&&($n=256)),Ca=e}return Ca}function Ud(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ai(""+e)}function Ld(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ih(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Ud((n[it]||null).action),r=l.submitter;r&&(t=(t=r[it]||null)?Ud(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var d=new ui("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var v=r?Ld(n,r):new FormData(n);Yr(a,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=r?Ld(n,r):new FormData(n),Yr(a,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var Sc=0;Sc<lr.length;Sc++){var jc=lr[Sc],Ph=jc.toLowerCase(),eg=jc[0].toUpperCase()+jc.slice(1);Dt(Ph,"on"+eg)}Dt(ds,"onAnimationEnd"),Dt(ms,"onAnimationIteration"),Dt(ps,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(gh,"onTransitionRun"),Dt(vh,"onTransitionStart"),Dt(bh,"onTransitionCancel"),Dt(hs,"onTransitionEnd"),rl("onMouseEnter",["mouseout","mouseover"]),rl("onMouseLeave",["mouseout","mouseover"]),rl("onPointerEnter",["pointerout","pointerover"]),rl("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));function kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var d=l[r],v=d.instance,A=d.currentTarget;if(d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=A;try{i(n)}catch(U){oi(U)}n.currentTarget=null,i=v}else for(r=0;r<l.length;r++){if(d=l[r],v=d.instance,A=d.currentTarget,d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=A;try{i(n)}catch(U){oi(U)}n.currentTarget=null,i=v}}}}function de(e,t){var a=t[Uu];a===void 0&&(a=t[Uu]=new Set);var l=e+"__bubble";a.has(l)||(Hd(t,e,2,!1),a.add(l))}function Ec(e,t,a){var l=0;t&&(l|=4),Hd(a,e,l,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function zc(e){if(!e[$i]){e[$i]=!0,Ro.forEach(function(a){a!=="selectionchange"&&(tg.has(a)||Ec(a,!1,e),Ec(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,Ec("selectionchange",!1,t))}}function Hd(e,t,a,l){switch(mm(t)){case 2:var n=Ag;break;case 8:n=Rg;break;default:n=Bc}a=n.bind(null,t,a,e),n=void 0,!Qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function wc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var d=l.stateNode.containerInfo;if(d===n)break;if(r===4)for(r=l.return;r!==null;){var v=r.tag;if((v===3||v===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;d!==null;){if(r=nl(d),r===null)return;if(v=r.tag,v===5||v===6||v===26||v===27){l=i=r;continue e}d=d.parentNode}}l=l.return}Go(function(){var A=i,U=Gu(a),B=[];e:{var _=gs.get(e);if(_!==void 0){var M=ui,K=e;switch(e){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":M=Kp;break;case"focusin":K="focus",M=Ku;break;case"focusout":K="blur",M=Ku;break;case"beforeblur":case"afterblur":M=Ku;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Fp;break;case ds:case ms:case ps:M=Bp;break;case hs:M=Pp;break;case"scroll":case"scrollend":M=Dp;break;case"wheel":M=th;break;case"copy":case"cut":case"paste":M=qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Jo;break;case"toggle":case"beforetoggle":M=lh}var P=(t&4)!==0,ze=!P&&(e==="scroll"||e==="scrollend"),w=P?_!==null?_+"Capture":null:_;P=[];for(var S=A,C;S!==null;){var k=S;if(C=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||C===null||w===null||(k=Il(S,w),k!=null&&P.push(On(S,k,C))),ze)break;S=S.return}0<P.length&&(_=new M(_,K,null,a,U),B.push({event:_,listeners:P}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",_&&a!==qu&&(K=a.relatedTarget||a.fromElement)&&(nl(K)||K[ll]))break e;if((M||_)&&(_=U.window===U?U:(_=U.ownerDocument)?_.defaultView||_.parentWindow:window,M?(K=a.relatedTarget||a.toElement,M=A,K=K?nl(K):null,K!==null&&(ze=p(K),P=K.tag,K!==ze||P!==5&&P!==27&&P!==6)&&(K=null)):(M=null,K=A),M!==K)){if(P=Vo,k="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(P=Jo,k="onPointerLeave",w="onPointerEnter",S="pointer"),ze=M==null?_:Fl(M),C=K==null?_:Fl(K),_=new P(k,S+"leave",M,a,U),_.target=ze,_.relatedTarget=C,k=null,nl(U)===A&&(P=new P(w,S+"enter",K,a,U),P.target=C,P.relatedTarget=ze,k=P),ze=k,M&&K)t:{for(P=ag,w=M,S=K,C=0,k=w;k;k=P(k))C++;k=0;for(var I=S;I;I=P(I))k++;for(;0<C-k;)w=P(w),C--;for(;0<k-C;)S=P(S),k--;for(;C--;){if(w===S||S!==null&&w===S.alternate){P=w;break t}w=P(w),S=P(S)}P=null}else P=null;M!==null&&Bd(B,_,M,P,!1),K!==null&&ze!==null&&Bd(B,ze,K,P,!0)}}e:{if(_=A?Fl(A):window,M=_.nodeName&&_.nodeName.toLowerCase(),M==="select"||M==="input"&&_.type==="file")var ve=ts;else if(Po(_))if(as)ve=mh;else{ve=fh;var F=sh}else M=_.nodeName,!M||M.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?A&&Yu(A.elementType)&&(ve=ts):ve=dh;if(ve&&(ve=ve(e,A))){es(B,ve,a,U);break e}F&&F(e,_,A),e==="focusout"&&A&&_.type==="number"&&A.memoizedProps.value!=null&&Bu(_,"number",_.value)}switch(F=A?Fl(A):window,e){case"focusin":(Po(F)||F.contentEditable==="true")&&(ml=F,er=A,rn=null);break;case"focusout":rn=er=ml=null;break;case"mousedown":tr=!0;break;case"contextmenu":case"mouseup":case"dragend":tr=!1,ss(B,a,U);break;case"selectionchange":if(hh)break;case"keydown":case"keyup":ss(B,a,U)}var ce;if(Wu)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else dl?Fo(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Ko&&a.locale!=="ko"&&(dl||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&dl&&(ce=Xo()):(da=U,Vu="value"in da?da.value:da.textContent,dl=!0)),F=Wi(A,pe),0<F.length&&(pe=new Zo(pe,e,null,a,U),B.push({event:pe,listeners:F}),ce?pe.data=ce:(ce=Io(a),ce!==null&&(pe.data=ce)))),(ce=ih?uh(e,a):rh(e,a))&&(pe=Wi(A,"onBeforeInput"),0<pe.length&&(F=new Zo("onBeforeInput","beforeinput",null,a,U),B.push({event:F,listeners:pe}),F.data=ce)),Ih(B,e,A,a,U)}kd(B,t)})}function On(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(On(e,n,i)),n=Il(e,t),n!=null&&l.push(On(e,n,i))),e.tag===3)return l;e=e.return}return[]}function ag(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bd(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var d=a,v=d.alternate,A=d.stateNode;if(d=d.tag,v!==null&&v===l)break;d!==5&&d!==26&&d!==27||A===null||(v=A,n?(A=Il(a,i),A!=null&&r.unshift(On(a,A,v))):n||(A=Il(a,i),A!=null&&r.push(On(a,A,v)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var lg=/\r\n?/g,ng=/\u0000|\uFFFD/g;function Yd(e){return(typeof e=="string"?e:""+e).replace(lg,`
`).replace(ng,"")}function qd(e,t){return t=Yd(t),Yd(e)===t}function Ee(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,a,l);break;case"style":Yo(e,l,i);break;case"data":if(t!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ai(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":de("beforetoggle",e),de("toggle",e),Pn(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Op.get(a)||a,Pn(e,a,l))}}function Tc(e,t,a,l,n,i){switch(a){case"style":Yo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_o.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Pn(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,i,r,a,null)}}n&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var d=i=r=n=null,v=null,A=null;for(l in a)if(a.hasOwnProperty(l)){var U=a[l];if(U!=null)switch(l){case"name":n=U;break;case"type":r=U;break;case"checked":v=U;break;case"defaultChecked":A=U;break;case"value":i=U;break;case"defaultValue":d=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Ee(e,t,l,U,a,null)}}Lo(e,i,d,v,A,r,n,!1);return;case"select":de("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":r=d;break;case"multiple":l=d;default:Ee(e,t,n,d,a,null)}t=i,a=r,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":de("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(d=a[r],d!=null))switch(r){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ee(e,t,r,d,a,null)}Ho(e,l,n,i);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,v,l,a,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(l=0;l<_n.length;l++)de(_n[l],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(l=a[A],l!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,A,l,a,null)}return;default:if(Yu(t)){for(U in a)a.hasOwnProperty(U)&&(l=a[U],l!==void 0&&Tc(e,t,U,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Ee(e,t,d,l,a,null))}function ig(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,d=null,v=null,A=null,U=null;for(M in a){var B=a[M];if(a.hasOwnProperty(M)&&B!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=B;default:l.hasOwnProperty(M)||Ee(e,t,M,null,l,B)}}for(var _ in l){var M=l[_];if(B=a[_],l.hasOwnProperty(_)&&(M!=null||B!=null))switch(_){case"type":i=M;break;case"name":n=M;break;case"checked":A=M;break;case"defaultChecked":U=M;break;case"value":r=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:M!==B&&Ee(e,t,_,M,l,B)}}Hu(e,r,d,v,A,U,i,n);return;case"select":M=r=d=_=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":M=v;default:l.hasOwnProperty(i)||Ee(e,t,i,null,l,v)}for(n in l)if(i=l[n],v=a[n],l.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":_=i;break;case"defaultValue":d=i;break;case"multiple":r=i;default:i!==v&&Ee(e,t,n,i,l,v)}t=d,a=r,l=M,_!=null?cl(e,!!a,_,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":M=_=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ee(e,t,d,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":_=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&Ee(e,t,r,n,l,i)}ko(e,_,M);return;case"option":for(var K in a)_=a[K],a.hasOwnProperty(K)&&_!=null&&!l.hasOwnProperty(K)&&(K==="selected"?e.selected=!1:Ee(e,t,K,null,l,_));for(v in l)_=l[v],M=a[v],l.hasOwnProperty(v)&&_!==M&&(_!=null||M!=null)&&(v==="selected"?e.selected=_&&typeof _!="function"&&typeof _!="symbol":Ee(e,t,v,_,l,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)_=a[P],a.hasOwnProperty(P)&&_!=null&&!l.hasOwnProperty(P)&&Ee(e,t,P,null,l,_);for(A in l)if(_=l[A],M=a[A],l.hasOwnProperty(A)&&_!==M&&(_!=null||M!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:Ee(e,t,A,_,l,M)}return;default:if(Yu(t)){for(var ze in a)_=a[ze],a.hasOwnProperty(ze)&&_!==void 0&&!l.hasOwnProperty(ze)&&Tc(e,t,ze,void 0,l,_);for(U in l)_=l[U],M=a[U],!l.hasOwnProperty(U)||_===M||_===void 0&&M===void 0||Tc(e,t,U,_,l,M);return}}for(var w in a)_=a[w],a.hasOwnProperty(w)&&_!=null&&!l.hasOwnProperty(w)&&Ee(e,t,w,null,l,_);for(B in l)_=l[B],M=a[B],!l.hasOwnProperty(B)||_===M||_==null&&M==null||Ee(e,t,B,_,l,M)}function Gd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ug(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,d=n.duration;if(i&&d&&Gd(r)){for(r=0,d=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],A=v.startTime;if(A>d)break;var U=v.transferSize,B=v.initiatorType;U&&Gd(B)&&(v=v.responseEnd,r+=U*(v<d?1:(d-A)/(v-A)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nc=null,Cc=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function Xd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ac(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=null;function rg(){var e=window.event;return e&&e.type==="popstate"?e===Rc?!1:(Rc=e,!0):(Rc=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,cg=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(sg)}:Vd;function sg(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Jd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mn(a);for(var i=a.firstChild;i;){var r=i.nextSibling,d=i.nodeName;i[Wl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&Mn(e.ownerDocument.body);a=n}while(a);Yl(t)}function Kd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_c(a),Lu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function dg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function $d(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$?"||e.data==="$~"}function Mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dc=null;function Wd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Id(e,t,a){switch(t=Fi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lu(e)}var Ot=new Map,Pd=new Set;function Ii(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=x.d;x.d={f:pg,r:hg,D:gg,C:vg,L:bg,m:yg,X:Sg,S:xg,M:jg};function pg(){var e=ca.f(),t=Xi();return e||t}function hg(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?gf(t):ca.r(e)}var kl=typeof document>"u"?null:document;function em(e,t,a){var l=kl;if(l&&typeof t=="string"&&t){var n=zt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Pd.has(n)||(Pd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function gg(e){ca.D(e),em("dns-prefetch",e,null)}function vg(e,t){ca.C(e,t),em("preconnect",e,t)}function bg(e,t,a){ca.L(e,t,a);var l=kl;if(l&&e&&t){var n='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+zt(a.imageSizes)+'"]')):n+='[href="'+zt(e)+'"]';var i=n;switch(t){case"style":i=Hl(e);break;case"script":i=Bl(e)}Ot.has(i)||(e=z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Dn(i))||t==="script"&&l.querySelector(Un(i))||(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function yg(e,t){ca.m(e,t);var a=kl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!Ot.has(i)&&(e=z({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Un(i)))return}l=a.createElement("link"),et(l,"link",e),Ze(l),a.head.appendChild(l)}}}function xg(e,t,a){ca.S(e,t,a);var l=kl;if(l&&e){var n=ul(l).hoistableStyles,i=Hl(e);t=t||"default";var r=n.get(i);if(!r){var d={loading:0,preload:null};if(r=l.querySelector(Dn(i)))d.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Uc(e,a);var v=r=l.createElement("link");Ze(v),et(v,"link",e),v._p=new Promise(function(A,U){v.onload=A,v.onerror=U}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Pi(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:d},n.set(i,r)}}}function Sg(e,t){ca.X(e,t);var a=kl;if(a&&e){var l=ul(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=z({src:e,async:!0},t),(t=Ot.get(n))&&Lc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function jg(e,t){ca.M(e,t);var a=kl;if(a&&e){var l=ul(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=z({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Lc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function tm(e,t,a,l){var n=(n=ae.current)?Ii(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Hl(a.href),a=ul(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hl(a.href);var i=ul(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Dn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||Eg(n,e,a,r.state))),t&&l===null)throw Error(c(528,""));return r}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(a),a=ul(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Hl(e){return'href="'+zt(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function am(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function Eg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Ze(t),e.head.appendChild(t))}function Bl(e){return'[src="'+zt(e)+'"]'}function Un(e){return"script[async]"+e}function lm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(l)return t.instance=l,Ze(l),l;var n=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),et(l,"style",n),Pi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Hl(a.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;l=am(a),(n=Ot.get(n))&&Uc(l,n),i=(e.ownerDocument||e).createElement("link"),Ze(i);var r=i;return r._p=new Promise(function(d,v){r.onload=d,r.onerror=v}),et(i,"link",l),t.state.loading|=4,Pi(i,a.precedence,e),t.instance=i;case"script":return i=Bl(a.src),(n=e.querySelector(Un(i)))?(t.instance=n,Ze(n),n):(l=a,(n=Ot.get(i))&&(l=z({},a),Lc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),et(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Pi(l,a.precedence,e));return t.instance}function Pi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var d=l[r];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eu=null;function nm(e,t,a){if(eu===null){var l=new Map,n=eu=new Map;n.set(a,l)}else n=eu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var d=l.get(r);d?d.push(i):l.set(r,[i])}}return l}function im(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function zg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function um(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Hl(l.href),i=t.querySelector(Dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ze(i);return}i=t.ownerDocument||t,l=am(l),(n=Ot.get(n))&&Uc(l,n),i=i.createElement("link"),Ze(i);var r=i;r._p=new Promise(function(d,v){r.onload=d,r.onerror=v}),et(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var kc=0;function Tg(e,t){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&kc===0&&(kc=62500*ug());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>kc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function lu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,t.forEach(Ng,e),au=null,tu.call(e))}function Ng(e,t){if(!(t.state.loading&4)){var a=au.get(e);if(a)var l=a.get(null);else{a=new Map,au.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=tu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Ln={$$typeof:q,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Cg(e,t,a,l,n,i,r,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.hiddenUpdates=Ou(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function rm(e,t,a,l,n,i,r,d,v,A,U,B){return e=new Cg(e,t,a,r,v,A,U,B,d),t=1,i===!0&&(t|=24),i=gt(3,null,null,t),e.current=i,i.stateNode=e,t=gr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},xr(i),e}function cm(e){return e?(e=gl,e):gl}function om(e,t,a,l,n,i){n=cm(n),l.context===null?l.context=n:l.pendingContext=n,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(ft(a,e,t),pn(a,e,t))}function sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Hc(e,t){sm(e,t),(e=e.alternate)&&sm(e,t)}function fm(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ft(t,e,67108864),Hc(e,67108864)}}function dm(e){if(e.tag===13||e.tag===31){var t=St();t=Mu(t);var a=Ga(e,t);a!==null&&ft(a,e,t),Hc(e,t)}}var nu=!0;function Ag(e,t,a,l){var n=D.T;D.T=null;var i=x.p;try{x.p=2,Bc(e,t,a,l)}finally{x.p=i,D.T=n}}function Rg(e,t,a,l){var n=D.T;D.T=null;var i=x.p;try{x.p=8,Bc(e,t,a,l)}finally{x.p=i,D.T=n}}function Bc(e,t,a,l){if(nu){var n=Yc(l);if(n===null)wc(e,t,l,iu,a),pm(e,l);else if(Og(n,e,t,a,l))l.stopPropagation();else if(pm(e,l),t&4&&-1<_g.indexOf(e)){for(;n!==null;){var i=il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=ka(i.pendingLanes);if(r!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;r;){var v=1<<31-pt(r);d.entanglements[1]|=v,r&=~v}Xt(i),(ye&6)===0&&(qi=dt()+500,Rn(0))}}break;case 31:case 13:d=Ga(i,2),d!==null&&ft(d,i,2),Xi(),Hc(i,2)}if(i=Yc(l),i===null&&wc(e,t,l,iu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else wc(e,t,l,null,a)}}function Yc(e){return e=Gu(e),qc(e)}var iu=null;function qc(e){if(iu=null,e=nl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return iu=e,null}function mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gp()){case xo:return 2;case So:return 8;case Kn:case vp:return 32;case jo:return 268435456;default:return 32}default:return 32}}var Gc=!1,Ra=null,_a=null,Oa=null,kn=new Map,Hn=new Map,Ma=[],_g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pm(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Og(e,t,a,l,n){switch(t){case"focusin":return Ra=Bn(Ra,e,t,a,l,n),!0;case"dragenter":return _a=Bn(_a,e,t,a,l,n),!0;case"mouseover":return Oa=Bn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return kn.set(i,Bn(kn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Hn.set(i,Bn(Hn.get(i)||null,e,t,a,l,n)),!0}return!1}function hm(e){var t=nl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Co(e.priority,function(){dm(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,Co(e.priority,function(){dm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Yc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);qu=l,a.target.dispatchEvent(l),qu=null}else return t=il(a),t!==null&&fm(t),e.blockedOn=a,!1;t.shift()}return!0}function gm(e,t,a){uu(e)&&a.delete(t)}function Mg(){Gc=!1,Ra!==null&&uu(Ra)&&(Ra=null),_a!==null&&uu(_a)&&(_a=null),Oa!==null&&uu(Oa)&&(Oa=null),kn.forEach(gm),Hn.forEach(gm)}function ru(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Mg)))}var cu=null;function vm(e){cu!==e&&(cu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(qc(l||a)===null)continue;break}var i=il(a);i!==null&&(e.splice(t,3),t-=3,Yr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Yl(e){function t(v){return ru(v,e)}Ra!==null&&ru(Ra,e),_a!==null&&ru(_a,e),Oa!==null&&ru(Oa,e),kn.forEach(t),Hn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)hm(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[it]||null;if(typeof i=="function")r||vm(a);else if(r){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[it]||null)d=r.formAction;else if(qc(n)!==null)continue}else d=r.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),vm(a)}}}function bm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Xc(e){this._internalRoot=e}ou.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=St();om(a,l,e,t,null,null)},ou.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;om(e.current,2,null,e,null,null),Xi(),t[ll]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=No();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&hm(e)}};var ym=o.version;if(ym!=="19.2.7")throw Error(c(527,ym,"19.2.7"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Dg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Jl=su.inject(Dg),mt=su}catch{}}return qn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=Tf,i=Nf,r=Cf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=rm(e,1,!1,null,null,a,l,null,n,i,r,bm),e[ll]=t.current,zc(e),new Xc(t)},qn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=Tf,r=Nf,d=Cf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=rm(e,1,!0,t,a??null,l,n,v,i,r,d,bm),t.context=cm(null),a=t.current,l=St(),l=Mu(l),n=ba(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,$l(t,a),Xt(t),e[ll]=t.current,zc(e),new ou(t)},qn.version="19.2.7",qn}var Am;function Qg(){if(Am)return Zc.exports;Am=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Zc.exports=Xg(),Zc.exports}var Vg=Qg();var co=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ym=/^[\\/]{2}/;function Zg(u,o){return o+u.replace(/\\/g,"/")}var Rm="popstate";function _m(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function Jg(u={}){function o(c,m){let p=m.state?.masked,{pathname:g,search:j,hash:b}=p||c.location;return ao("",{pathname:g,search:j,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function f(c,m){return typeof m=="string"?m:Xn(m)}return $g(o,f,null,u)}function Oe(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Mt(u,o){if(!u){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Kg(){return Math.random().toString(36).substring(2,10)}function Om(u,o){return{usr:u.state,key:u.key,idx:o,masked:u.mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function ao(u,o,f=null,c,m){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof o=="string"?Xl(o):o,state:f,key:o&&o.key||c||Kg(),mask:m}}function Xn({pathname:u="/",search:o="",hash:f=""}){return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function Xl(u){let o={};if(u){let f=u.indexOf("#");f>=0&&(o.hash=u.substring(f),u=u.substring(0,f));let c=u.indexOf("?");c>=0&&(o.search=u.substring(c),u=u.substring(0,c)),u&&(o.pathname=u)}return o}function $g(u,o,f,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,g=m.history,j="POP",b=null,h=N();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function N(){return(g.state||{idx:null}).idx}function z(){j="POP";let Y=N(),L=Y==null?null:Y-h;h=Y,b&&b({action:j,location:Q.location,delta:L})}function R(Y,L){j="PUSH";let T=_m(Y)?Y:ao(Q.location,Y,L);h=N()+1;let q=Om(T,h),W=Q.createHref(T.mask||T);try{g.pushState(q,"",W)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;m.location.assign(W)}p&&b&&b({action:j,location:Q.location,delta:1})}function O(Y,L){j="REPLACE";let T=_m(Y)?Y:ao(Q.location,Y,L);h=N();let q=Om(T,h),W=Q.createHref(T.mask||T);g.replaceState(q,"",W),p&&b&&b({action:j,location:Q.location,delta:0})}function G(Y){return Wg(m,Y)}let Q={get action(){return j},get location(){return u(m,g)},listen(Y){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(Rm,z),b=Y,()=>{m.removeEventListener(Rm,z),b=null}},createHref(Y){return o(m,Y)},createURL:G,encodeLocation(Y){let L=G(Y);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:R,replace:O,go(Y){return g.go(Y)}};return Q}function Wg(u,o,f=!1){let c="http://localhost";u&&(c=u.location.origin!=="null"?u.location.origin:u.location.href),Oe(c,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:Xn(o);return m=m.replace(/ $/,"%20"),!f&&Ym.test(m)&&(m=c+m),new URL(m,c)}function qm(u,o,f="/"){return Fg(u,o,f,!1)}function Fg(u,o,f,c,m){let p=typeof o=="string"?Xl(o):o,g=oa(p.pathname||"/",f);if(g==null)return null;let j=Ig(u),b=null,h=o0(g);for(let N=0;b==null&&N<j.length;++N)b=c0(j[N],h,c);return b}function Ig(u){let o=Gm(u);return Pg(o),o}function Gm(u,o=[],f=[],c="",m=!1){let p=(g,j,b=m,h)=>{let N={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:j,route:g};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(c)&&b)return;Oe(N.relativePath.startsWith(c),`Absolute route path "${N.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(c.length)}let z=kt([c,N.relativePath]),R=f.concat(N);g.children&&g.children.length>0&&(Oe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),Gm(g.children,o,R,z,b)),!(g.path==null&&!g.index)&&o.push({path:z,score:u0(z,g.index),routesMeta:R.map((O,G)=>{let[Q,Y]=Vm(O.relativePath,O.caseSensitive,G===R.length-1);return{...O,matcher:Q,compiledParams:Y}})})};return u.forEach((g,j)=>{if(g.path===""||!g.path?.includes("?"))p(g,j);else for(let b of Xm(g.path))p(g,j,!0,b)}),o}function Xm(u){let o=u.split("/");if(o.length===0)return[];let[f,...c]=o,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let g=Xm(c.join("/")),j=[];return j.push(...g.map(b=>b===""?p:[p,b].join("/"))),m&&j.push(...g),j.map(b=>u.startsWith("/")&&b===""?"/":b)}function Pg(u){u.sort((o,f)=>o.score!==f.score?f.score-o.score:r0(o.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var e0=/^:[\w-]+$/,t0=3,a0=2,l0=1,n0=10,i0=-2,Mm=u=>u==="*";function u0(u,o){let f=u.split("/"),c=f.length;return f.some(Mm)&&(c+=i0),o&&(c+=a0),f.filter(m=>!Mm(m)).reduce((m,p)=>m+(e0.test(p)?t0:p===""?l0:n0),c)}function r0(u,o){return u.length===o.length&&u.slice(0,-1).every((c,m)=>c===o[m])?u[u.length-1]-o[o.length-1]:0}function c0(u,o,f=!1){let{routesMeta:c}=u,m={},p="/",g=[];for(let j=0;j<c.length;++j){let b=c[j],h=j===c.length-1,N=p==="/"?o:o.slice(p.length)||"/",z={path:b.relativePath,caseSensitive:b.caseSensitive,end:h},R=b.matcher&&b.compiledParams?Qm(z,N,b.matcher,b.compiledParams):vu(z,N),O=b.route;if(!R&&h&&f&&!c[c.length-1].route.index&&(R=vu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},N)),!R)return null;Object.assign(m,R.params),g.push({params:m,pathname:kt([p,R.pathname]),pathnameBase:d0(kt([p,R.pathnameBase])),route:O}),R.pathnameBase!=="/"&&(p=kt([p,R.pathnameBase]))}return g}function vu(u,o){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,c]=Vm(u.path,u.caseSensitive,u.end);return Qm(u,o,f,c)}function Qm(u,o,f,c){let m=o.match(f);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:c.reduce((h,{paramName:N,isOptional:z},R)=>{if(N==="*"){let G=j[R]||"";g=p.slice(0,p.length-G.length).replace(/(.)\/+$/,"$1")}const O=j[R];return z&&!O?h[N]=void 0:h[N]=(O||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:g,pattern:u}}function Vm(u,o=!1,f=!0){Mt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,j,b,h,N)=>{if(c.push({paramName:j,isOptional:b!=null}),b){let z=N.charAt(h+g.length);return z&&z!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),c]}function o0(u){try{return u.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Mt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),u}}function oa(u,o){if(o==="/")return u;if(!u.toLowerCase().startsWith(o.toLowerCase()))return null;let f=o.endsWith("/")?o.length-1:o.length,c=u.charAt(f);return c&&c!=="/"?null:u.slice(f)||"/"}function s0(u,o="/"){let{pathname:f,search:c="",hash:m=""}=typeof u=="string"?Xl(u):u,p;return f?(f=Zm(f),f.startsWith("/")?p=Dm(f.substring(1),"/"):p=Dm(f,o)):p=o,{pathname:p,search:m0(c),hash:p0(m)}}function Dm(u,o){let f=bu(o).split("/");return u.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Wc(u,o,f,c){return`Cannot include a '${u}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function f0(u){return u.filter((o,f)=>f===0||o.route.path&&o.route.path.length>0)}function oo(u){let o=f0(u);return o.map((f,c)=>c===o.length-1?f.pathname:f.pathnameBase)}function ju(u,o,f,c=!1){let m;typeof u=="string"?m=Xl(u):(m={...u},Oe(!m.pathname||!m.pathname.includes("?"),Wc("?","pathname","search",m)),Oe(!m.pathname||!m.pathname.includes("#"),Wc("#","pathname","hash",m)),Oe(!m.search||!m.search.includes("#"),Wc("#","search","hash",m)));let p=u===""||m.pathname==="",g=p?"/":m.pathname,j;if(g==null)j=f;else{let z=o.length-1;if(!c&&g.startsWith("..")){let R=g.split("/");for(;R[0]==="..";)R.shift(),z-=1;m.pathname=R.join("/")}j=z>=0?o[z]:"/"}let b=s0(m,j),h=g&&g!=="/"&&g.endsWith("/"),N=(p||g===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(h||N)&&(b.pathname+="/"),b}var Zm=u=>u.replace(/[\\/]{2,}/g,"/"),kt=u=>Zm(u.join("/")),bu=u=>u.replace(/\/+$/,""),d0=u=>bu(u).replace(/^\/*/,"/"),m0=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,p0=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,h0=class{constructor(u,o,f,c=!1){this.status=u,this.statusText=o||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function g0(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function v0(u){let o=u.map(f=>f.route.path).filter(Boolean);return kt(o)||"/"}var Jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Km(u,o){let f=u;if(typeof f!="string"||!co.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,m=!1;if(Jm)try{let p=new URL(window.location.href),g=Ym.test(f)?new URL(Zg(f,p.protocol)):new URL(f),j=oa(g.pathname,o);g.origin===p.origin&&j!=null?f=j+g.search+g.hash:m=!0}catch{Mt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $m=["POST","PUT","PATCH","DELETE"];new Set($m);var b0=["GET",...$m];new Set(b0);var y0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function x0(u){try{return y0.includes(new URL(u).protocol)}catch{return!1}}var Ql=y.createContext(null);Ql.displayName="DataRouter";var Eu=y.createContext(null);Eu.displayName="DataRouterState";var Wm=y.createContext(!1);function S0(){return y.useContext(Wm)}var Fm=y.createContext({isTransitioning:!1});Fm.displayName="ViewTransition";var j0=y.createContext(new Map);j0.displayName="Fetchers";var E0=y.createContext(null);E0.displayName="Await";var jt=y.createContext(null);jt.displayName="Navigation";var Qn=y.createContext(null);Qn.displayName="Location";var Ht=y.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var so=y.createContext(null);so.displayName="RouteError";var Im="REACT_ROUTER_ERROR",z0="REDIRECT",w0="ROUTE_ERROR_RESPONSE";function T0(u){if(u.startsWith(`${Im}:${z0}:{`))try{let o=JSON.parse(u.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function N0(u){if(u.startsWith(`${Im}:${w0}:{`))try{let o=JSON.parse(u.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new h0(o.status,o.statusText,o.data)}catch{}}function C0(u,{relative:o}={}){Oe(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=y.useContext(jt),{hash:m,pathname:p,search:g}=Vn(u,{relative:o}),j=p;return f!=="/"&&(j=p==="/"?f:kt([f,p])),c.createHref({pathname:j,search:g,hash:m})}function Vl(){return y.useContext(Qn)!=null}function Bt(){return Oe(Vl(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Qn).location}var Pm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ep(u){y.useContext(jt).static||y.useLayoutEffect(u)}function fo(){let{isDataRoute:u}=y.useContext(Ht);return u?X0():A0()}function A0(){Oe(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let u=y.useContext(Ql),{basename:o,navigator:f}=y.useContext(jt),{matches:c}=y.useContext(Ht),{pathname:m}=Bt(),p=JSON.stringify(oo(c)),g=y.useRef(!1);return ep(()=>{g.current=!0}),y.useCallback((b,h={})=>{if(Mt(g.current,Pm),!g.current)return;if(typeof b=="number"){f.go(b);return}let N=ju(b,JSON.parse(p),m,h.relative==="path");u==null&&o!=="/"&&(N.pathname=N.pathname==="/"?o:kt([o,N.pathname])),(h.replace?f.replace:f.push)(N,h.state,h)},[o,f,p,m,u])}var R0=y.createContext(null);function _0(u){let o=y.useContext(Ht).outlet;return y.useMemo(()=>o&&y.createElement(R0.Provider,{value:u},o),[o,u])}function Vn(u,{relative:o}={}){let{matches:f}=y.useContext(Ht),{pathname:c}=Bt(),m=JSON.stringify(oo(f));return y.useMemo(()=>ju(u,JSON.parse(m),c,o==="path"),[u,m,c,o])}function O0(u,o){return tp(u,o)}function tp(u,o,f){Oe(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=y.useContext(jt),{matches:m}=y.useContext(Ht),p=m[m.length-1],g=p?p.params:{},j=p?p.pathname:"/",b=p?p.pathnameBase:"/",h=p&&p.route;{let Y=h&&h.path||"";lp(j,!h||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let N=Bt(),z;if(o){let Y=typeof o=="string"?Xl(o):o;Oe(b==="/"||Y.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),z=Y}else z=N;let R=z.pathname||"/",O=R;if(b!=="/"){let Y=b.replace(/^\//,"").split("/");O="/"+R.replace(/^\//,"").split("/").slice(Y.length).join("/")}let G=f&&f.state.matches.length?f.state.matches.map(Y=>Object.assign(Y,{route:f.manifest[Y.route.id]||Y.route})):qm(u,{pathname:O});Mt(h||G!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),Mt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=k0(G&&G.map(Y=>Object.assign({},Y,{params:Object.assign({},g,Y.params),pathname:kt([b,c.encodeLocation?c.encodeLocation(Y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?b:kt([b,c.encodeLocation?c.encodeLocation(Y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),m,f);return o&&Q?y.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...z},navigationType:"POP"}},Q):Q}function M0(){let u=G0(),o=g0(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",u),g=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:p},"ErrorBoundary")," or"," ",y.createElement("code",{style:p},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},o),f?y.createElement("pre",{style:m},f):null,g)}var D0=y.createElement(M0,null),ap=class extends y.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){this.props.onError?this.props.onError(u,o):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const f=N0(u.digest);f&&(u=f)}let o=u!==void 0?y.createElement(Ht.Provider,{value:this.props.routeContext},y.createElement(so.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?y.createElement(U0,{error:u},o):o}};ap.contextType=Wm;var Fc=new WeakMap;function U0({children:u,error:o}){let{basename:f}=y.useContext(jt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=T0(o.digest);if(c){let m=Fc.get(o);if(m)throw m;let p=Km(c.location,f),g=p.absoluteURL||p.to;if(x0(g))throw new Error("Invalid redirect location");if(Jm&&!Fc.get(o))if(p.isExternal||c.reloadDocument)window.location.href=g;else{const j=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Fc.set(o,j),j}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return u}function L0({routeContext:u,match:o,children:f}){let c=y.useContext(Ql);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),y.createElement(Ht.Provider,{value:u},f)}function k0(u,o=[],f){let c=f?.state;if(u==null){if(!c)return null;if(c.errors)u=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)u=c.matches;else return null}let m=u,p=c?.errors;if(p!=null){let N=m.findIndex(z=>z.route.id&&p?.[z.route.id]!==void 0);Oe(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,N+1))}let g=!1,j=-1;if(f&&c){g=c.renderFallback;for(let N=0;N<m.length;N++){let z=m[N];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(j=N),z.route.id){let{loaderData:R,errors:O}=c,G=z.route.loader&&!R.hasOwnProperty(z.route.id)&&(!O||O[z.route.id]===void 0);if(z.route.lazy||G){f.isStatic&&(g=!0),j>=0?m=m.slice(0,j+1):m=[m[0]];break}}}}let b=f?.onError,h=c&&b?(N,z)=>{b(N,{location:c.location,params:c.matches?.[0]?.params??{},pattern:v0(c.matches),errorInfo:z})}:void 0;return m.reduceRight((N,z,R)=>{let O,G=!1,Q=null,Y=null;c&&(O=p&&z.route.id?p[z.route.id]:void 0,Q=z.route.errorElement||D0,g&&(j<0&&R===0?(lp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,Y=null):j===R&&(G=!0,Y=z.route.hydrateFallbackElement||null)));let L=o.concat(m.slice(0,R+1)),T=()=>{let q;return O?q=Q:G?q=Y:z.route.Component?q=y.createElement(z.route.Component,null):z.route.element?q=z.route.element:q=N,y.createElement(L0,{match:z,routeContext:{outlet:N,matches:L,isDataRoute:c!=null},children:q})};return c&&(z.route.ErrorBoundary||z.route.errorElement||R===0)?y.createElement(ap,{location:c.location,revalidation:c.revalidation,component:Q,error:O,children:T(),routeContext:{outlet:null,matches:L,isDataRoute:!0},onError:h}):T()},null)}function mo(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H0(u){let o=y.useContext(Ql);return Oe(o,mo(u)),o}function B0(u){let o=y.useContext(Eu);return Oe(o,mo(u)),o}function Y0(u){let o=y.useContext(Ht);return Oe(o,mo(u)),o}function po(u){let o=Y0(u),f=o.matches[o.matches.length-1];return Oe(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function q0(){return po("useRouteId")}function G0(){let u=y.useContext(so),o=B0("useRouteError"),f=po("useRouteError");return u!==void 0?u:o.errors?.[f]}function X0(){let{router:u}=H0("useNavigate"),o=po("useNavigate"),f=y.useRef(!1);return ep(()=>{f.current=!0}),y.useCallback(async(m,p={})=>{Mt(f.current,Pm),f.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:o,...p}))},[u,o])}var Um={};function lp(u,o,f){!o&&!Um[u]&&(Um[u]=!0,Mt(!1,f))}y.memo(Q0);function Q0({routes:u,manifest:o,future:f,state:c,isStatic:m,onError:p}){return tp(u,void 0,{manifest:o,state:c,isStatic:m,onError:p})}function V0({to:u,replace:o,state:f,relative:c}){Oe(Vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=y.useContext(jt);Mt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=y.useContext(Ht),{pathname:g}=Bt(),j=fo(),b=ju(u,oo(p),g,c==="path"),h=JSON.stringify(b);return y.useEffect(()=>{j(JSON.parse(h),{replace:o,state:f,relative:c})},[j,h,c,o,f]),null}function Z0(u){return _0(u.context)}function Ua(u){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function J0({basename:u="/",children:o=null,location:f,navigationType:c="POP",navigator:m,static:p=!1,useTransitions:g}){Oe(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=u.replace(/^\/*/,"/"),b=y.useMemo(()=>({basename:j,navigator:m,static:p,useTransitions:g,future:{}}),[j,m,p,g]);typeof f=="string"&&(f=Xl(f));let{pathname:h="/",search:N="",hash:z="",state:R=null,key:O="default",mask:G}=f,Q=y.useMemo(()=>{let Y=oa(h,j);return Y==null?null:{location:{pathname:Y,search:N,hash:z,state:R,key:O,mask:G},navigationType:c}},[j,h,N,z,R,O,c,G]);return Mt(Q!=null,`<Router basename="${j}"> is not able to match the URL "${h}${N}${z}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:y.createElement(jt.Provider,{value:b},y.createElement(Qn.Provider,{children:o,value:Q}))}function K0({children:u,location:o}){return O0(lo(u),o)}function lo(u,o=[]){let f=[];return y.Children.forEach(u,(c,m)=>{if(!y.isValidElement(c))return;let p=[...o,m];if(c.type===y.Fragment){f.push.apply(f,lo(c.props.children,p));return}Oe(c.type===Ua,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=lo(c.props.children,p)),f.push(g)}),f}var pu="get",hu="application/x-www-form-urlencoded";function zu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function $0(u){return zu(u)&&u.tagName.toLowerCase()==="button"}function W0(u){return zu(u)&&u.tagName.toLowerCase()==="form"}function F0(u){return zu(u)&&u.tagName.toLowerCase()==="input"}function I0(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function P0(u,o){return u.button===0&&(!o||o==="_self")&&!I0(u)}function no(u=""){return new URLSearchParams(typeof u=="string"||Array.isArray(u)||u instanceof URLSearchParams?u:Object.keys(u).reduce((o,f)=>{let c=u[f];return o.concat(Array.isArray(c)?c.map(m=>[f,m]):[[f,c]])},[]))}function ev(u,o){let f=no(u);return o&&o.forEach((c,m)=>{f.has(m)||o.getAll(m).forEach(p=>{f.append(m,p)})}),f}var fu=null;function tv(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var av=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ic(u){return u!=null&&!av.has(u)?(Mt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):u}function lv(u,o){let f,c,m,p,g;if(W0(u)){let j=u.getAttribute("action");c=j?oa(j,o):null,f=u.getAttribute("method")||pu,m=Ic(u.getAttribute("enctype"))||hu,p=new FormData(u)}else if($0(u)||F0(u)&&(u.type==="submit"||u.type==="image")){let j=u.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=u.getAttribute("formaction")||j.getAttribute("action");if(c=b?oa(b,o):null,f=u.getAttribute("formmethod")||j.getAttribute("method")||pu,m=Ic(u.getAttribute("formenctype"))||Ic(j.getAttribute("enctype"))||hu,p=new FormData(j,u),!tv()){let{name:h,type:N,value:z}=u;if(N==="image"){let R=h?`${h}.`:"";p.append(`${R}x`,"0"),p.append(`${R}y`,"0")}else h&&p.append(h,z)}}else{if(zu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=pu,c=null,m=hu,g=u}return p&&m==="text/plain"&&(g=p,p=void 0),{action:c,method:f.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ho(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function np(u,o,f,c){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:o&&oa(m.pathname,o)==="/"?m.pathname=`${bu(o)}/_root.${c}`:m.pathname=`${bu(m.pathname)}.${c}`,m}async function nv(u,o){if(u.id in o)return o[u.id];try{let f=await import(u.module);return o[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iv(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function uv(u,o,f){let c=await Promise.all(u.map(async m=>{let p=o.routes[m.route.id];if(p){let g=await nv(p,f);return g.links?g.links():[]}return[]}));return sv(c.flat(1).filter(iv).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Lm(u,o,f,c,m,p){let g=(b,h)=>f[h]?b.route.id!==f[h].route.id:!0,j=(b,h)=>f[h].pathname!==b.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==b.params["*"];return p==="assets"?o.filter((b,h)=>g(b,h)||j(b,h)):p==="data"?o.filter((b,h)=>{let N=c.routes[b.route.id];if(!N||!N.hasLoader)return!1;if(g(b,h)||j(b,h))return!0;if(b.route.shouldRevalidate){let z=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function rv(u,o,{includeHydrateFallback:f}={}){return cv(u.map(c=>{let m=o.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function cv(u){return[...new Set(u)]}function ov(u){let o={},f=Object.keys(u).sort();for(let c of f)o[c]=u[c];return o}function sv(u,o){let f=new Set;return new Set(o),u.reduce((c,m)=>{let p=JSON.stringify(ov(m));return f.has(p)||(f.add(p),c.push({key:p,link:m})),c},[])}function go(){let u=y.useContext(Ql);return ho(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function fv(){let u=y.useContext(Eu);return ho(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var vo=y.createContext(void 0);vo.displayName="FrameworkContext";function wu(){let u=y.useContext(vo);return ho(u,"You must render this element inside a <HydratedRouter> element"),u}function dv(u,o){let f=y.useContext(vo),[c,m]=y.useState(!1),[p,g]=y.useState(!1),{onFocus:j,onBlur:b,onMouseEnter:h,onMouseLeave:N,onTouchStart:z}=o,R=y.useRef(null);y.useEffect(()=>{if(u==="render"&&g(!0),u==="viewport"){let Q=L=>{L.forEach(T=>{g(T.isIntersecting)})},Y=new IntersectionObserver(Q,{threshold:.5});return R.current&&Y.observe(R.current),()=>{Y.disconnect()}}},[u]),y.useEffect(()=>{if(c){let Q=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Q)}}},[c]);let O=()=>{m(!0)},G=()=>{m(!1),g(!1)};return f?u!=="intent"?[p,R,{}]:[p,R,{onFocus:Gn(j,O),onBlur:Gn(b,G),onMouseEnter:Gn(h,O),onMouseLeave:Gn(N,G),onTouchStart:Gn(z,O)}]:[!1,R,{}]}function Gn(u,o){return f=>{u&&u(f),f.defaultPrevented||o(f)}}function mv({page:u,...o}){let f=S0(),{nonce:c}=wu(),{router:m}=go(),p=y.useMemo(()=>qm(m.routes,u,m.basename),[m.routes,u,m.basename]);return p?(o.nonce==null&&c&&(o={...o,nonce:c}),f?y.createElement(hv,{page:u,matches:p,...o}):y.createElement(gv,{page:u,matches:p,...o})):null}function pv(u){let{manifest:o,routeModules:f}=wu(),[c,m]=y.useState([]);return y.useEffect(()=>{let p=!1;return uv(u,o,f).then(g=>{p||m(g)}),()=>{p=!0}},[u,o,f]),c}function hv({page:u,matches:o,...f}){let c=Bt(),{future:m}=wu(),{basename:p}=go(),g=y.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let j=np(u,p,m.v8_trailingSlashAwareDataRequests,"rsc"),b=!1,h=[];for(let N of o)typeof N.route.shouldRevalidate=="function"?b=!0:h.push(N.route.id);return b&&h.length>0&&j.searchParams.set("_routes",h.join(",")),[j.pathname+j.search]},[p,m.v8_trailingSlashAwareDataRequests,u,c,o]);return y.createElement(y.Fragment,null,g.map(j=>y.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...f})))}function gv({page:u,matches:o,...f}){let c=Bt(),{future:m,manifest:p,routeModules:g}=wu(),{basename:j}=go(),{loaderData:b,matches:h}=fv(),N=y.useMemo(()=>Lm(u,o,h,p,c,"data"),[u,o,h,p,c]),z=y.useMemo(()=>Lm(u,o,h,p,c,"assets"),[u,o,h,p,c]),R=y.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let Q=new Set,Y=!1;if(o.forEach(T=>{let q=p.routes[T.route.id];!q||!q.hasLoader||(!N.some(W=>W.route.id===T.route.id)&&T.route.id in b&&g[T.route.id]?.shouldRevalidate||q.hasClientLoader?Y=!0:Q.add(T.route.id))}),Q.size===0)return[];let L=np(u,j,m.v8_trailingSlashAwareDataRequests,"data");return Y&&Q.size>0&&L.searchParams.set("_routes",o.filter(T=>Q.has(T.route.id)).map(T=>T.route.id).join(",")),[L.pathname+L.search]},[j,m.v8_trailingSlashAwareDataRequests,b,c,p,N,o,u,g]),O=y.useMemo(()=>rv(z,p),[z,p]),G=pv(z);return y.createElement(y.Fragment,null,R.map(Q=>y.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...f})),O.map(Q=>y.createElement("link",{key:Q,rel:"modulepreload",href:Q,...f})),G.map(({key:Q,link:Y})=>y.createElement("link",{key:Q,nonce:f.nonce,...Y,crossOrigin:Y.crossOrigin??f.crossOrigin})))}function vv(...u){return o=>{u.forEach(f=>{typeof f=="function"?f(o):f!=null&&(f.current=o)})}}var bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bv&&(window.__reactRouterVersion="7.18.1")}catch{}function yv({basename:u,children:o,useTransitions:f,window:c}){let m=y.useRef();m.current==null&&(m.current=Jg({window:c,v5Compat:!0}));let p=m.current,[g,j]=y.useState({action:p.action,location:p.location}),b=y.useCallback(h=>{f===!1?j(h):y.startTransition(()=>j(h))},[f]);return y.useLayoutEffect(()=>p.listen(b),[p,b]),y.createElement(J0,{basename:u,children:o,location:g.location,navigationType:g.action,navigator:p,useTransitions:f})}var yu=y.forwardRef(function({onClick:o,discover:f="render",prefetch:c="none",relative:m,reloadDocument:p,replace:g,mask:j,state:b,target:h,to:N,preventScrollReset:z,viewTransition:R,defaultShouldRevalidate:O,...G},Q){let{basename:Y,navigator:L,useTransitions:T}=y.useContext(jt),q=typeof N=="string"&&co.test(N),W=Km(N,Y);N=W.to;let ue=C0(N,{relative:m}),J=Bt(),X=null;if(j){let Re=ju(j,[],J.mask?J.mask.pathname:"/",!0);Y!=="/"&&(Re.pathname=Re.pathname==="/"?Y:kt([Y,Re.pathname])),X=L.createHref(Re)}let[ee,te,oe]=dv(c,G),Ue=jv(N,{replace:g,mask:j,state:b,target:h,preventScrollReset:z,relative:m,viewTransition:R,defaultShouldRevalidate:O,useTransitions:T});function Ae(Re){o&&o(Re),Re.defaultPrevented||Ue(Re)}let at=!(W.isExternal||p),Ye=y.createElement("a",{...G,...oe,href:(at?X:void 0)||W.absoluteURL||ue,onClick:at?Ae:o,ref:vv(Q,te),target:h,"data-discover":!q&&f==="render"?"true":void 0});return ee&&!q?y.createElement(y.Fragment,null,Ye,y.createElement(mv,{page:ue})):Ye});yu.displayName="Link";var ip=y.forwardRef(function({"aria-current":o="page",caseSensitive:f=!1,className:c="",end:m=!1,style:p,to:g,viewTransition:j,children:b,...h},N){let z=Vn(g,{relative:h.relative}),R=Bt(),O=y.useContext(Eu),{navigator:G,basename:Q}=y.useContext(jt),Y=O!=null&&Cv(z)&&j===!0,L=G.encodeLocation?G.encodeLocation(z).pathname:z.pathname,T=R.pathname,q=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;f||(T=T.toLowerCase(),q=q?q.toLowerCase():null,L=L.toLowerCase()),q&&Q&&(q=oa(q,Q)||q);const W=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let ue=T===L||!m&&T.startsWith(L)&&T.charAt(W)==="/",J=q!=null&&(q===L||!m&&q.startsWith(L)&&q.charAt(L.length)==="/"),X={isActive:ue,isPending:J,isTransitioning:Y},ee=ue?o:void 0,te;typeof c=="function"?te=c(X):te=[c,ue?"active":null,J?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let oe=typeof p=="function"?p(X):p;return y.createElement(yu,{...h,"aria-current":ee,className:te,ref:N,style:oe,to:g,viewTransition:j},typeof b=="function"?b(X):b)});ip.displayName="NavLink";var xv=y.forwardRef(({discover:u="render",fetcherKey:o,navigate:f,reloadDocument:c,replace:m,state:p,method:g=pu,action:j,onSubmit:b,relative:h,preventScrollReset:N,viewTransition:z,defaultShouldRevalidate:R,...O},G)=>{let{useTransitions:Q}=y.useContext(jt),Y=Tv(),L=Nv(j,{relative:h}),T=g.toLowerCase()==="get"?"get":"post",q=typeof j=="string"&&co.test(j),W=ue=>{if(b&&b(ue),ue.defaultPrevented)return;ue.preventDefault();let J=ue.nativeEvent.submitter,X=J?.getAttribute("formmethod")||g,ee=()=>Y(J||ue.currentTarget,{fetcherKey:o,method:X,navigate:f,replace:m,state:p,relative:h,preventScrollReset:N,viewTransition:z,defaultShouldRevalidate:R});Q&&f!==!1?y.startTransition(()=>ee()):ee()};return y.createElement("form",{ref:G,method:T,action:L,onSubmit:c?b:W,...O,"data-discover":!q&&u==="render"?"true":void 0})});xv.displayName="Form";function Sv(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function up(u){let o=y.useContext(Ql);return Oe(o,Sv(u)),o}function jv(u,{target:o,replace:f,mask:c,state:m,preventScrollReset:p,relative:g,viewTransition:j,defaultShouldRevalidate:b,useTransitions:h}={}){let N=fo(),z=Bt(),R=Vn(u,{relative:g});return y.useCallback(O=>{if(P0(O,o)){O.preventDefault();let G=f!==void 0?f:Xn(z)===Xn(R),Q=()=>N(u,{replace:G,mask:c,state:m,preventScrollReset:p,relative:g,viewTransition:j,defaultShouldRevalidate:b});h?y.startTransition(()=>Q()):Q()}},[z,N,R,f,c,m,o,u,p,g,j,b,h])}function Ev(u){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=y.useRef(no(u)),f=y.useRef(!1),c=Bt(),m=y.useMemo(()=>ev(c.search,f.current?null:o.current),[c.search]),p=fo(),g=y.useCallback((j,b)=>{const h=no(typeof j=="function"?j(new URLSearchParams(m)):j);f.current=!0,p("?"+h,b)},[p,m]);return[m,g]}var zv=0,wv=()=>`__${String(++zv)}__`;function Tv(){let{router:u}=up("useSubmit"),{basename:o}=y.useContext(jt),f=q0(),c=u.fetch,m=u.navigate;return y.useCallback(async(p,g={})=>{let{action:j,method:b,encType:h,formData:N,body:z}=lv(p,o);if(g.navigate===!1){let R=g.fetcherKey||wv();await c(R,f,g.action||j,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:N,body:z,formMethod:g.method||b,formEncType:g.encType||h,flushSync:g.flushSync})}else await m(g.action||j,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:N,body:z,formMethod:g.method||b,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,m,o,f])}function Nv(u,{relative:o}={}){let{basename:f}=y.useContext(jt),c=y.useContext(Ht);Oe(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Vn(u||".",{relative:o})},g=Bt();if(u==null){p.search=g.search;let j=new URLSearchParams(p.search),b=j.getAll("index");if(b.some(N=>N==="")){j.delete("index"),b.filter(z=>z).forEach(z=>j.append("index",z));let N=j.toString();p.search=N?`?${N}`:""}}return(!u||u===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:kt([f,p.pathname])),Xn(p)}function Cv(u,{relative:o}={}){let f=y.useContext(Fm);Oe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=up("useViewTransitionState"),m=Vn(u,{relative:o});if(!f.isTransitioning)return!1;let p=oa(f.currentLocation.pathname,c)||f.currentLocation.pathname,g=oa(f.nextLocation.pathname,c)||f.nextLocation.pathname;return vu(m.pathname,g)!=null||vu(m.pathname,p)!=null}function Av(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"10",cy:"7",r:"3.25",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Rv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"6",width:"14",height:"10",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 6V5a3 3 0 0 1 6 0v1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function io(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"4",y:"3",width:"12",height:"14",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 7.5h6M7 10.5h6M7 13.5h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function _v(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"3",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})}function Ov(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M5 4.5h10M5 8.5h7M5 12.5h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M14 12.5l2 2 3.5-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Mv(){return s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5",fill:"url(#logo-grad)"}),s.jsx("path",{d:"M8 15V9l4 3 4-3v6",stroke:"#fff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"logo-grad",x1:"3",y1:"3",x2:"21",y2:"21",children:[s.jsx("stop",{stopColor:"#818cf8"}),s.jsx("stop",{offset:"1",stopColor:"#6366f1"})]})})]})}function Dv(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M3.5 8.5l3 3 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Uv(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M8 5v3.5M8 11h.01",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Lv(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}function kv(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 2.5h5l3.5 3.5V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M9 2.5V6h3.5",stroke:"currentColor",strokeWidth:"1.25"})]})}function Hv(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M6 3.5h6.5V10M9.5 6.5L3 13",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}const Bv=[{to:"/profile",label:"Profile",icon:Av},{to:"/jobs",label:"Jobs",icon:Rv},{to:"/applications",label:"Applications",icon:io},{to:"/templates",label:"Templates",icon:_v},{to:"/review",label:"Review",icon:Ov}];function Yv(){return s.jsxs("aside",{className:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs("div",{className:"sidebar-brand",children:[s.jsx(Mv,{}),s.jsxs("div",{className:"sidebar-brand-text",children:[s.jsx("span",{className:"sidebar-brand-name",children:"Joblication"}),s.jsx("span",{className:"sidebar-brand-tag",children:"Application studio"})]})]})}),s.jsxs("nav",{className:"sidebar-nav","aria-label":"Main navigation",children:[s.jsx("p",{className:"sidebar-nav-label",children:"Workspace"}),Bv.map(u=>s.jsxs(ip,{to:u.to,className:({isActive:o})=>`sidebar-link ${o?"active":""}`,children:[s.jsx("span",{className:"sidebar-link-icon",children:s.jsx(u.icon,{})}),s.jsx("span",{className:"sidebar-link-label",children:u.label})]},u.to))]}),s.jsx("div",{className:"sidebar-footer",children:s.jsx("p",{children:"Tailored CVs & cover letters"})})]})}function qv(){return s.jsxs("div",{className:"app-shell",children:[s.jsx(Yv,{}),s.jsx("main",{className:"app-main",children:s.jsx(Z0,{})})]})}const tl={"Content-Type":"application/json"};async function Be(u,o={}){const f=await fetch(u,o),c=await f.json().catch(()=>({}));if(!f.ok)throw new Error(c.error||`Request failed (${f.status})`);return c}const Ce={health:()=>Be("/api/health"),config:()=>Be("/api/config"),getProfile:()=>Be("/api/profile"),saveProfile:u=>Be("/api/profile",{method:"PUT",headers:tl,body:JSON.stringify({profile:u})}),listJobs:()=>Be("/api/applications"),getJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`),createJob:u=>Be("/api/applications",{method:"POST",headers:tl,body:JSON.stringify(u)}),updateJob:(u,o)=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),deleteJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"DELETE"}),scrapeUrl:u=>Be("/api/applications/scrape",{method:"POST",headers:tl,body:JSON.stringify({url:u})}),listApplications:()=>Be("/api/applications/view"),listOutputs:()=>Be("/api/outputs"),fileUrl:(u,o)=>`/api/files/${encodeURIComponent(u)}/${encodeURIComponent(o)}`,getReview:u=>Be(`/api/review/${encodeURIComponent(u)}`),saveReview:(u,o)=>Be(`/api/review/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),rebuild:u=>Be(`/api/build/${encodeURIComponent(u)}`,{method:"POST"}),listTemplates:()=>Be("/api/templates"),getTemplate:u=>Be(`/api/templates/${encodeURIComponent(u)}`),saveTemplate:(u,o)=>Be(`/api/templates/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),createTemplate:u=>Be("/api/templates",{method:"POST",headers:tl,body:JSON.stringify(u)}),generateStatus:()=>Be("/api/generate/status"),startGenerate:()=>Be("/api/generate",{method:"POST"})},rp=y.createContext(null);function Gv({children:u}){const[o,f]=y.useState(null),c=y.useRef(null),m=y.useCallback((g,j="success")=>{clearTimeout(c.current),f({message:g,type:j}),c.current=setTimeout(()=>f(null),3800)},[]),p=y.useMemo(()=>({showToast:m}),[m]);return s.jsxs(rp.Provider,{value:p,children:[u,o&&s.jsxs("div",{className:`toast show ${o.type}`,role:"status","aria-live":"polite",children:[s.jsx("span",{className:"toast-icon",children:o.type==="error"?s.jsx(Uv,{}):s.jsx(Dv,{})}),s.jsx("span",{className:"toast-message",children:o.message})]})]})}function Zn(){const u=y.useContext(rp);if(!u)throw new Error("useToast must be used within ToastProvider");return u}function cp({label:u="Loading…"}){return s.jsxs("div",{className:"page-loading",children:[s.jsx("div",{className:"page-loading-spinner"}),s.jsx("p",{children:u})]})}function km({icon:u,title:o,description:f,action:c}){return s.jsxs("div",{className:"empty-state",children:[u&&s.jsx("div",{className:"empty-state-icon",children:s.jsx(u,{})}),s.jsx("h3",{children:o}),f&&s.jsx("p",{children:f}),c]})}function al(u){return u.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,o=>o.toUpperCase())}function Xv(u){return u.includes("email")?"email":u.includes("phone")?"tel":u==="url"||u.includes("portfolio")||u.includes("github")||u.includes("linkedin")?"url":u.includes("Date")||u==="date"?"date":"text"}function $e({id:u,label:o,value:f,onChange:c,type:m,multiline:p,rows:g=4,hint:j,onKeyDown:b}){const h=u||o.replace(/\s+/g,"_").toLowerCase(),N=m||Xv(h),z=!!f;return p?s.jsxs("div",{className:`md-field ${z?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:o}),s.jsx("textarea",{id:h,className:"md-input md-textarea",rows:g,value:f??"",onChange:R=>c(R.target.value),onKeyDown:b}),j&&s.jsx("span",{className:"md-hint",children:j})]}):s.jsxs("div",{className:`md-field ${z?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:o}),s.jsx("input",{id:h,className:"md-input",type:N,value:f??"",onChange:R=>c(R.target.value)}),j&&s.jsx("span",{className:"md-hint",children:j})]})}function op({children:u,columns:o=2}){return s.jsx("div",{className:`md-grid md-grid-${o}`,children:u})}const Qv=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],Vv=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],Zv=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],Jv=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],Kv=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],$v=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],Wv={contact:{type:"object",fields:Qv},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:Vv,singular:"education"},experience:{type:"entities",fields:Zv,singular:"experience"},projects:{type:"entities",fields:Jv,singular:"project"},certifications:{type:"entities",fields:Kv,singular:"certification"},achievements:{type:"entities",fields:$v,singular:"achievement"}};function Fv(u){return Wv[u]||{type:"dynamic"}}function xu(u){return u&&typeof u=="object"&&!Array.isArray(u)}function Iv(u){if(typeof u=="string"||!xu(u))return"text";const o=Object.values(u);return!o.length||o.every(f=>typeof f=="string")?"keyValue":o.every(f=>xu(f))?"entities":"keyValue"}function sp({fields:u,value:o,onChange:f}){const c=o||{};return s.jsx(op,{children:u.map(m=>s.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:s.jsx($e,{id:m.key,label:m.label,value:c[m.key],multiline:m.multiline,rows:m.rows,onChange:p=>f({...c,[m.key]:p})})},m.key))})}function Pv(u){const o=Object.entries(u||{});return o.sort((f,c)=>{const m=parseInt(String(f[0]).split("_").pop(),10)||0,p=parseInt(String(c[0]).split("_").pop(),10)||0;return m-p}),o.map(([,f])=>f)}function Pc(u){const o={};return u.forEach((f,c)=>{o[`title_${c+1}`]=f}),o}function eb({value:u,onChange:o}){const f=Pv(u);function c(g,j){const b=[...f];b[g]=j,o(Pc(b))}function m(g){o(Pc(f.filter((j,b)=>b!==g)))}function p(){o(Pc([...f,""]))}return s.jsxs("div",{className:"md-title-list",children:[f.map((g,j)=>s.jsxs("div",{className:"md-title-row",children:[s.jsx($e,{id:`title_text_${j}`,label:"Title text",value:g,onChange:b=>c(j,b)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(j),"aria-label":"Remove title",children:"✕"})]},`title-${j}`)),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:p,children:"+ Add title"})]})}function fp({value:u,onChange:o,keyLabel:f="Key",valueLabel:c="Value",valueOptional:m,stacked:p}){const g=Object.entries(u||{});function j(z,R,O){const G={...u||{}};delete G[z],R.trim()&&(G[R.trim()]=O),o(G)}function b(z,R){o({...u||{},[z]:R})}function h(z){const R={...u||{}};delete R[z],o(R)}function N(){const z=f.toLowerCase().replace(/\s+/g,"_");let R=g.length+1,O=`${z}_${R}`;for(;(u||{})[O];)R+=1,O=`${z}_${R}`;o({...u||{},[O]:""})}return s.jsxs("div",{className:"md-kv-list",children:[g.map(([z,R])=>s.jsx("div",{className:`md-kv-row ${p?"md-kv-row-stacked":""}`,children:p?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"md-kv-stacked-fields",children:[s.jsx($e,{label:f,value:z,onChange:O=>j(z,O,R)}),s.jsx($e,{label:c,value:R,onChange:O=>b(z,O),multiline:!0,rows:2})]}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(z),"aria-label":"Remove",children:"✕"})]}):s.jsxs(s.Fragment,{children:[s.jsx($e,{label:f,value:z,onChange:O=>j(z,O,R)}),!m&&s.jsx($e,{label:c,value:R,onChange:O=>b(z,O),multiline:String(R).length>60,rows:2}),m&&s.jsx($e,{label:c,value:R,onChange:O=>b(z,O),hint:"Optional"}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(z),"aria-label":"Remove",children:"✕"})]})},z)),s.jsxs("button",{type:"button",className:"md-text-btn",onClick:N,children:["+ Add ",f.toLowerCase()]})]})}function dp({value:u,onChange:o,fields:f,singular:c,sectionKey:m}){const p=Object.entries(u||{}),g=c||m.replace(/s$/,"");function j(h){const N={...u||{}};delete N[h],o(N)}function b(){const h=Object.keys(u||{}).map(O=>parseInt(O.split("_").pop(),10)).filter(O=>!Number.isNaN(O)),N=h.length?Math.max(...h)+1:1,z=`${g}_${N}`,R=f.reduce((O,G)=>({...O,[G.key]:""}),{});o({...u||{},[z]:R})}return s.jsxs("div",{className:"md-entity-list",children:[p.map(([h,N])=>s.jsxs("article",{className:"md-card",children:[s.jsxs("header",{className:"md-card-header",children:[s.jsx("h3",{children:N.name||N.degree||N.company||N.position||al(h)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>j(h),"aria-label":"Remove entry",children:"✕"})]}),s.jsx(sp,{fields:f,value:N,onChange:z=>o({...u||{},[h]:z})})]},h)),s.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:b,children:["+ Add ",al(c||m)]})]})}function tb({sectionKey:u,value:o,onChange:f}){const c=Iv(o);if(c==="text")return s.jsx($e,{label:al(u),value:typeof o=="string"?o:JSON.stringify(o,null,2),onChange:f,multiline:!0,rows:8});if(c==="keyValue")return s.jsx(fp,{value:xu(o)?o:{},onChange:f,keyLabel:"Item",valueLabel:"Value"});if(c==="entities"){const m=Object.values(o||{}).find(xu)||{},p=Object.keys(m).map(g=>({key:g,label:al(g),multiline:g==="description"||String(m[g]).length>80,rows:4}));return s.jsx(dp,{sectionKey:u,value:o,onChange:f,fields:p.length?p:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:u.replace(/s$/,"")})}return s.jsx($e,{label:al(u),value:JSON.stringify(o,null,2),onChange:()=>{},multiline:!0,rows:10})}function ab({sectionKey:u,value:o,onChange:f}){const c=Fv(u);return c.type==="text"?s.jsx($e,{label:c.label||al(u),value:typeof o=="string"?o:"",onChange:f,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):c.type==="object"?s.jsx(sp,{fields:c.fields,value:o,onChange:f}):c.type==="titles"?s.jsx(eb,{value:o,onChange:f}):c.type==="keyValue"?s.jsx(fp,{value:o||{},onChange:f,keyLabel:c.keyLabel,valueLabel:c.valueLabel,valueOptional:c.valueOptional,stacked:c.stacked}):c.type==="entities"?s.jsx(dp,{sectionKey:u,value:o,onChange:f,fields:c.fields,singular:c.singular}):s.jsx(tb,{sectionKey:u,value:o,onChange:f})}const Su=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],lb={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function du(u){return lb[u]||al(u)}const Hm=new Set(Su);function nb(u){const o=Su.filter(c=>u.includes(c)),f=u.filter(c=>!Su.includes(c)).sort();return[...o,...f]}function ib(){const{showToast:u}=Zn(),[o,f]=y.useState(null),[c,m]=y.useState("contact"),[p,g]=y.useState([]),[j,b]=y.useState(!0),[h,N]=y.useState(!1),z=y.useCallback(async()=>{b(!0);try{const q=(await Ce.getProfile()).profile||{};f(q),g(Object.keys(q).filter(W=>!Hm.has(W)))}catch(T){u(T.message,"error")}finally{b(!1)}},[u]);y.useEffect(()=>{z()},[z]);const R=y.useMemo(()=>{const T=o?Object.keys(o):[];return nb([...new Set([...Su,...T,...p])]).filter(W=>o&&W in o)},[o,p]);function O(T,q){f(W=>({...W,[T]:q}))}function G(){const T=window.prompt("New section name (e.g. Publications):");if(!T)return;const q=T.trim().toLowerCase().replace(/\s+/g,"_");q&&(g(W=>W.includes(q)?W:[...W,q]),f(W=>({...W,[q]:W[q]||{}})),m(q))}function Q(){window.confirm(`Delete section "${du(c)}"?`)&&(f(T=>{const q={...T};return delete q[c],q}),g(T=>T.filter(q=>q!==c)),m("contact"))}async function Y(){N(!0);try{await Ce.saveProfile(o),u("Profile saved")}catch(T){u(T.message,"error")}finally{N(!1)}}if(j||!o)return s.jsx("div",{className:"profile-page",children:s.jsx(cp,{label:"Loading profile…"})});const L=!Hm.has(c);return s.jsx("div",{className:"profile-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:du(c)}),s.jsxs("p",{className:"page-lead",children:["Edit your ",du(c).toLowerCase()," details for tailored applications."]})]}),L&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:Q,children:"Delete section"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(ab,{sectionKey:c,value:o[c],onChange:T=>O(c,T)})})]})}),s.jsxs("aside",{className:"profile-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[s.jsx("p",{className:"profile-nav-label",children:"Sections"}),s.jsx("ul",{children:R.map(T=>s.jsx("li",{children:s.jsx("button",{type:"button",className:`profile-nav-item ${c===T?"active":""}`,onClick:()=>m(T),children:du(T)})},T))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:Y,disabled:h,children:h?"Saving…":"Save profile"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:G,children:"+ Section"})]})]})]})})}const eo={company:"",title:"",location:"",url:"",about:"",description:""};function ub(u){const o=u.split(`
`).map(c=>c.trim()).filter(Boolean),f=u.match(/https?:\/\/[^\s]+/i);return{url:f?f[0]:"",title:o[0]||"",description:u,about:o.slice(0,3).join(" ")}}function rb(u){return u?u.split("_").slice(0,-2).join(" ").replace(/\b\w/g,f=>f.toUpperCase()):""}function cb({draft:u,onChange:o}){return s.jsxs(s.Fragment,{children:[s.jsxs(op,{children:[s.jsx($e,{id:"job_company",label:"Company",value:u.company,onChange:f=>o({...u,company:f})}),s.jsx($e,{id:"job_title",label:"Job title",value:u.title,onChange:f=>o({...u,title:f})}),s.jsx($e,{id:"job_location",label:"Location",value:u.location,onChange:f=>o({...u,location:f})}),s.jsx($e,{id:"job_url",label:"Job URL",value:u.url,onChange:f=>o({...u,url:f})})]}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_about",label:"About",value:u.about,onChange:f=>o({...u,about:f}),multiline:!0,rows:4,hint:"Company or role overview."})}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_description",label:"Description",value:u.description,onChange:f=>o({...u,description:f}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function ob(){const{showToast:u}=Zn(),[o,f]=y.useState([]),[c,m]=y.useState(null),[p,g]=y.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[j,b]=y.useState(""),[h,N]=y.useState(eo),[z,R]=y.useState(!1),[O,G]=y.useState(!1),Q=y.useRef(null),Y=y.useCallback(async()=>{try{const J=await Ce.listJobs();f(J.applications||[])}catch(J){u(J.message,"error")}},[u]);y.useEffect(()=>{Y()},[Y]),y.useEffect(()=>{Q.current?.scrollIntoView({behavior:"smooth"})},[p]);async function L(J){m(J),R(!0);try{const X=await Ce.getJob(J);N({company:rb(J),title:X.title||"",location:X.location||"",url:X.url||"",about:X.about||"",description:X.description||""})}catch(X){u(X.message,"error")}}async function T(){const J=j.trim();if(!(!J||O)){g(X=>[...X,{role:"user",content:J}]),b(""),G(!0);try{if(/^https?:\/\//i.test(J)||J.includes("linkedin.com")||J.includes("jobs.")){const ee=await Ce.scrapeUrl(J);N(te=>({...te,url:ee.url,title:te.title||ee.title||"",about:ee.about||te.about,description:ee.description||te.description})),g(te=>[...te,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),R(!0)}else{const ee=ub(J);N(te=>({...te,...ee,description:J})),g(te=>[...te,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),R(!0)}}catch(X){g(ee=>[...ee,{role:"assistant",content:`Error: ${X.message}`}])}finally{G(!1)}}}async function q(){if(!h.company.trim()||!h.title.trim()){u("Company and title are required","error");return}G(!0);try{if(c)await Ce.updateJob(c,h),u("Job updated");else{const J=await Ce.createJob(h);m(J.slug),u("Job saved")}await Y(),R(!0)}catch(J){u(J.message,"error")}finally{G(!1)}}async function W(){if(!(!c||!window.confirm("Delete this job?")))try{await Ce.deleteJob(c),m(null),N(eo),R(!1),await Y(),u("Job deleted")}catch(J){u(J.message,"error")}}function ue(){m(null),N(eo),R(!0)}return s.jsx("div",{className:"profile-page jobs-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main jobs-main",children:s.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[z?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:c?"Edit job":"New job"}),s.jsx("p",{className:"page-lead",children:c?"Update role details before generating documents.":"Add a role to start tailoring your application."})]}),c&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:W,children:"Delete job"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(cb,{draft:h,onChange:N})})]}):s.jsxs("div",{className:"jobs-welcome",children:[s.jsx("h1",{children:"Jobs"}),s.jsx("p",{className:"page-lead",children:"Paste a job URL or description in the chat below, or select a saved role from the sidebar."})]}),s.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[s.jsxs("div",{className:"jobs-chat-messages",children:[p.map((J,X)=>s.jsxs("div",{className:`jobs-chat-bubble ${J.role}`,children:[s.jsx("span",{className:"jobs-chat-label",children:J.role==="user"?"You":"Joblication"}),s.jsx("p",{children:J.content})]},X)),s.jsx("div",{ref:Q})]}),s.jsxs("div",{className:"jobs-chat-composer",children:[s.jsx("div",{className:"jobs-chat-input-wrap",children:s.jsx($e,{id:"job_intake",label:"Paste URL or job description",value:j,onChange:b,multiline:!0,rows:3,onKeyDown:J=>{J.key==="Enter"&&!J.shiftKey&&(J.preventDefault(),T())}})}),s.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:T,disabled:O,children:O?"…":"Send"})]})]})]})}),s.jsxs("aside",{className:"profile-sidebar jobs-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[s.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),s.jsxs("ul",{children:[o.map(J=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${c===J.slug?"active":""}`,onClick:()=>L(J.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:J.title||J.slug}),J.location&&s.jsx("span",{className:"jobs-nav-meta",children:J.location})]})},J.slug)),!o.length&&s.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:q,disabled:O||!z,children:O?"Saving…":"Save job"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:ue,children:"+ New job"})]})]})]})})}const uo=[{value:"unsubmitted",label:"Unsubmitted"},{value:"submitted",label:"Submitted"},{value:"interview",label:"Interview"},{value:"accepted",label:"Accepted"},{value:"rejected",label:"Rejected"}],sb=Object.fromEntries(uo.map(u=>[u.value,u.label]));function fb(u){const o={all:u.length,unsubmitted:0,submitted:0,interview:0,accepted:0,rejected:0,withOutput:0};for(const f of u)o[f.status]!==void 0&&(o[f.status]+=1),f.has_output&&(o.withOutput+=1);return o}function db(){const{showToast:u}=Zn(),[o,f]=y.useState([]),[c,m]=y.useState(!1),[p,g]=y.useState(null),[j,b]=y.useState(!0),[h,N]=y.useState("all"),z=y.useCallback(async()=>{b(!0);try{const T=await Ce.listApplications();f(T.applications||[])}catch(T){u(T.message,"error")}finally{b(!1)}},[u]),R=y.useCallback(async()=>{try{const T=await Ce.generateStatus();g(T),T.running?setTimeout(R,2e3):(m(!1),T.error?u(T.error,"error"):T.step==="complete"&&(u("Generation complete"),z()))}catch{m(!1)}},[z,u]);y.useEffect(()=>{z()},[z]);const O=y.useMemo(()=>fb(o),[o]),G=y.useMemo(()=>h==="all"?o:h==="with_output"?o.filter(T=>T.has_output):o.filter(T=>T.status===h),[o,h]);async function Q(T,q){try{await Ce.updateJob(T,{status:q}),f(W=>W.map(ue=>ue.slug===T?{...ue,status:q}:ue))}catch(W){u(W.message,"error")}}async function Y(){m(!0);try{await Ce.startGenerate(),R()}catch(T){m(!1),u(T.message,"error")}}const L=[{key:"all",label:"All applications",count:O.all},{key:"with_output",label:"Ready to review",count:O.withOutput},...uo.map(T=>({key:T.value,label:T.label,count:O[T.value]}))];return j?s.jsx("div",{className:"profile-page",children:s.jsx(cp,{label:"Loading applications…"})}):s.jsx("div",{className:"profile-page applications-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner applications-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Applications"}),s.jsx("p",{className:"page-lead",children:"Track generated documents and pipeline status for each role."})]}),s.jsxs("button",{type:"button",className:"md-filled-btn applications-generate-btn",onClick:Y,disabled:c||!o.length,children:[s.jsx(Lv,{}),c?`Generating… ${p?.step||""}`:"Generate all"]})]}),c&&s.jsxs("div",{className:"generation-banner",children:[s.jsx("div",{className:"generation-banner-track",children:s.jsx("div",{className:"generation-banner-fill"})}),s.jsxs("p",{children:["Running pipeline",p?.step?` — ${p.step}`:"…"]})]}),o.length?G.length?s.jsx("div",{className:"applications-grid",children:G.map(T=>s.jsxs("article",{className:"application-card",children:[s.jsxs("div",{className:"application-card-top",children:[s.jsxs("div",{children:[s.jsx("h3",{children:T.title||T.slug}),s.jsx("p",{className:"application-card-slug",children:T.slug})]}),s.jsx("select",{value:T.status,onChange:q=>Q(T.slug,q.target.value),className:`status-pill status-${T.status}`,"aria-label":"Application status",children:uo.map(q=>s.jsx("option",{value:q.value,children:q.label},q.value))})]}),s.jsxs("div",{className:"application-card-body",children:[s.jsx("span",{className:`output-badge ${T.has_output?"ready":"pending"}`,children:T.has_output?"Documents ready":"Awaiting generation"}),T.has_output?s.jsx("ul",{className:"application-files",children:T.files.map(q=>s.jsx("li",{children:s.jsxs("a",{href:Ce.fileUrl(T.output_folder,q),target:"_blank",rel:"noreferrer",className:"application-file-link",children:[s.jsx(kv,{}),s.jsx("span",{children:q.replace(/.*\//,"")}),s.jsx(Hv,{})]})},q))}):s.jsx("p",{className:"application-hint",children:"Run Generate all to create CV and cover letter."})]}),s.jsxs("div",{className:"application-card-footer",children:[s.jsx(yu,{to:`/review?slug=${encodeURIComponent(T.slug)}`,className:"md-text-btn",children:"Review & edit"}),s.jsx("span",{className:"application-status-label",children:sb[T.status]})]})]},T.slug))}):s.jsx(km,{icon:io,title:"No matches",description:"Try a different filter from the sidebar."}):s.jsx(km,{icon:io,title:"No applications yet",description:"Add jobs from the Jobs page, then generate tailored CVs and cover letters here.",action:s.jsx(yu,{to:"/jobs",className:"md-outlined-btn",children:"Go to Jobs"})})]})}),s.jsxs("aside",{className:"profile-sidebar applications-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Filter applications",children:[s.jsx("p",{className:"profile-nav-label",children:"Filter"}),s.jsx("ul",{children:L.map(T=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item filter-item ${h===T.key?"active":""}`,onClick:()=>N(T.key),children:[s.jsx("span",{className:"filter-label",children:T.label}),s.jsx("span",{className:"filter-count",children:T.count})]})},T.key))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsxs("div",{className:"applications-stats",children:[s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:O.all}),s.jsx("span",{className:"stat-label",children:"Total"})]}),s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:O.withOutput}),s.jsx("span",{className:"stat-label",children:"Generated"})]})]}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:Y,disabled:c||!o.length,children:c?"Generating…":"Generate all"})]})]})]})})}const mb=["nw","n","ne","e","se","s","sw","w"],pb={nw:"nwse-resize",n:"ns-resize",ne:"nesw-resize",e:"ew-resize",se:"nwse-resize",s:"ns-resize",sw:"nesw-resize",w:"ew-resize"};function Gl(u,o,f){return Math.min(f,Math.max(o,u))}function hb(u){return Math.round(u*10)/10}function gb(u,o,f,c){let{x:m,y:p,w:g,h:j}=o;const b=8,h=4;return u.includes("e")&&(g+=f),u.includes("w")&&(m+=f,g-=f),u.includes("s")&&(j+=c),u.includes("n")&&(p+=c,j-=c),g<b&&(u.includes("w")&&(m-=b-g),g=b),j<h&&(u.includes("n")&&(p-=h-j),j=h),m=Gl(m,0,100-b),p=Gl(p,0,100-h),g=Gl(g,b,100-m),j=Gl(j,h,100-p),{x:m,y:p,w:g,h:j}}function vb({layout:u,sections:o,activeSection:f,onSelectSection:c,onUpdateSection:m}){const p=y.useRef(null),g=y.useRef(null),j=y.useRef(null),b=y.useRef(!1),h=u.pageWidth||595,N=u.pageHeight||842,z=u.zoom||1,R=[...o].sort((L,T)=>(L.zIndex??1)-(T.zIndex??1)),O=y.useCallback(()=>{const L=j.current;if(L?.mode==="pan"&&L.scrollEl?.releasePointerCapture)try{L.scrollEl.releasePointerCapture(L.pointerId)}catch{}j.current=null,document.body.classList.remove("ps-dragging","ps-panning")},[]),G=y.useCallback(L=>{const T=j.current;if(!T)return;if(T.mode==="pan"){const te=g.current;if(!te)return;const oe=L.clientX-T.startX,Ue=L.clientY-T.startY;(Math.abs(oe)>2||Math.abs(Ue)>2)&&(b.current=!0),te.scrollLeft=T.origScrollLeft-oe,te.scrollTop=T.origScrollTop-Ue;return}const q=p.current;if(!q)return;const W=q.getBoundingClientRect(),ue=(L.clientX-T.startX)/W.width*100,J=(L.clientY-T.startY)/W.height*100,X=u.snapToGrid?u.gridSize||1:0,ee=te=>X>0?Math.round(te/X)*X:hb(te);if(T.mode==="move"){const te=100-T.origW,oe=100-T.origH;m(T.id,{x:ee(Gl(T.origX+ue,0,te)),y:ee(Gl(T.origY+J,0,oe))})}else if(T.mode.startsWith("resize-")){const te=T.mode.slice(7),oe=gb(te,{x:T.origX,y:T.origY,w:T.origW,h:T.origH},ue,J);m(T.id,{x:ee(oe.x),y:ee(oe.y),w:ee(oe.w),h:ee(oe.h)})}},[u.snapToGrid,u.gridSize,m]);y.useEffect(()=>(window.addEventListener("pointermove",G),window.addEventListener("pointerup",O),window.addEventListener("pointercancel",O),()=>{window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",O),window.removeEventListener("pointercancel",O)}),[G,O]);function Q(L){if(L.button!==0||L.target.closest(".ps-layer")||L.target.closest(".ps-handle"))return;const T=g.current;T&&(L.preventDefault(),b.current=!1,T.setPointerCapture?.(L.pointerId),j.current={mode:"pan",startX:L.clientX,startY:L.clientY,origScrollLeft:T.scrollLeft,origScrollTop:T.scrollTop,pointerId:L.pointerId,scrollEl:T},document.body.classList.add("ps-panning"))}function Y(L,T,q){T.locked||(L.stopPropagation(),L.preventDefault(),j.current={id:T.id,mode:q,startX:L.clientX,startY:L.clientY,origX:T.x,origY:T.y,origW:T.w,origH:T.h},document.body.classList.add("ps-dragging"),c(T.id))}return s.jsxs("div",{className:"ps-workspace",children:[s.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(L,T)=>s.jsx("span",{style:{left:`${T/11*100}%`},children:Math.round(h/11*T)},T))}),s.jsx("div",{className:"ps-canvas-scroll",ref:g,onPointerDown:Q,children:s.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${z})`,transformOrigin:"top center"},children:s.jsxs("div",{ref:p,className:"ps-canvas",style:{width:h,minHeight:N,padding:u.pagePadding,fontSize:`${u.fontSize}px`,lineHeight:u.lineHeight,fontFamily:u.fontFamily||"Georgia, serif",backgroundColor:u.pageBackground||"#ffffff"},onClick:()=>{if(b.current){b.current=!1;return}c(null)},onKeyDown:()=>{},role:"presentation",children:[u.showGrid&&s.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${u.gridSize||5}% ${u.gridSize||5}%`}}),R.filter(L=>L.visible!==!1).map(L=>{const T=f===L.id;return s.jsxs("div",{className:`ps-layer ${T?"selected":""} ${L.locked?"locked":""}`,style:{left:`${L.x}%`,top:`${L.y}%`,width:`${L.w}%`,height:`${L.h}%`,zIndex:L.zIndex??1,opacity:L.opacity??1,fontSize:L.fontSize?`${L.fontSize}px`:void 0,textAlign:L.textAlign||"left",padding:L.padding??8,backgroundColor:L.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:q=>{q.stopPropagation(),c(L.id)},onPointerDown:q=>{q.target.closest(".ps-handle")||Y(q,L,"move")},onKeyDown:()=>{},role:"button",tabIndex:0,children:[s.jsx("span",{className:"ps-layer-label",children:L.label}),s.jsx("p",{className:"ps-layer-preview",children:"Section content"}),T&&!L.locked&&s.jsx(s.Fragment,{children:mb.map(q=>s.jsx("span",{className:`ps-handle ps-handle-${q}`,style:{cursor:pb[q]},onPointerDown:W=>Y(W,L,`resize-${q}`)},q))})]},L.id)})]})})})]})}function bb(){return s.jsxs("svg",{className:"ps-layer-grip-icon",viewBox:"0 0 10 16",fill:"currentColor","aria-hidden":"true",children:[s.jsx("circle",{cx:"2.5",cy:"2.5",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"2.5",r:"1.1"}),s.jsx("circle",{cx:"2.5",cy:"8",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"8",r:"1.1"}),s.jsx("circle",{cx:"2.5",cy:"13.5",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"13.5",r:"1.1"})]})}function yb({layers:u,activeId:o,onSelect:f,onReorder:c,onToggleVisible:m}){const[p,g]=y.useState(null),[j,b]=y.useState(null),h=y.useRef(null),N=y.useCallback(()=>{const R=h.current;R&&j&&R!==j&&c(R,j),h.current=null,g(null),b(null)},[j,c]);y.useEffect(()=>{if(!p)return;const R=O=>{const Y=document.elementFromPoint(O.clientX,O.clientY)?.closest("[data-layer-id]")?.getAttribute("data-layer-id");Y&&b(Y)};return window.addEventListener("pointermove",R),window.addEventListener("pointerup",N),window.addEventListener("pointercancel",N),()=>{window.removeEventListener("pointermove",R),window.removeEventListener("pointerup",N),window.removeEventListener("pointercancel",N)}},[p,N]);function z(R,O){R.preventDefault(),R.stopPropagation(),h.current=O,g(O),b(O)}return s.jsx("ul",{className:"ps-layer-list",children:u.map(R=>s.jsxs("li",{"data-layer-id":R.id,className:["ps-layer-row",p===R.id?"dragging":"",j===R.id&&p&&p!==R.id?"drop-target":""].filter(Boolean).join(" "),children:[s.jsx("button",{type:"button",className:"ps-layer-grip","aria-label":`Reorder ${R.label}`,onPointerDown:O=>z(O,R.id),children:s.jsx(bb,{})}),s.jsxs("button",{type:"button",className:`ps-layer-item ${o===R.id?"active":""}`,onClick:()=>f(R.id),children:[s.jsx("span",{className:`ps-eye ${R.visible!==!1?"on":"off"}`,onClick:O=>{O.stopPropagation(),m(R.id,R.visible!==!1)},onKeyDown:()=>{},role:"button",tabIndex:0,title:R.visible!==!1?"Hide layer":"Show layer"}),s.jsx("span",{className:"ps-layer-name",children:R.label}),R.locked&&s.jsx("span",{className:"ps-lock-badge",children:"L"})]})]},R.id))})}const gu=[{label:"Georgia",value:"Georgia, serif",group:"Serif"},{label:"Times New Roman",value:"'Times New Roman', Times, serif",group:"Serif"},{label:"Garamond",value:"Garamond, 'Times New Roman', serif",group:"Serif"},{label:"Palatino",value:"'Palatino Linotype', Palatino, serif",group:"Serif"},{label:"Merriweather",value:"'Merriweather', Georgia, serif",group:"Serif",google:"Merriweather"},{label:"Lora",value:"'Lora', Georgia, serif",group:"Serif",google:"Lora"},{label:"Libre Baskerville",value:"'Libre Baskerville', Georgia, serif",group:"Serif",google:"Libre Baskerville"},{label:"Source Serif 4",value:"'Source Serif 4', Georgia, serif",group:"Serif",google:"Source Serif 4"},{label:"Crimson Text",value:"'Crimson Text', Georgia, serif",group:"Serif",google:"Crimson Text"},{label:"Arial",value:"Arial, Helvetica, sans-serif",group:"Sans-serif"},{label:"Helvetica",value:"Helvetica, Arial, sans-serif",group:"Sans-serif"},{label:"Calibri",value:"Calibri, 'Segoe UI', sans-serif",group:"Sans-serif"},{label:"Verdana",value:"Verdana, Geneva, sans-serif",group:"Sans-serif"},{label:"Tahoma",value:"Tahoma, Geneva, sans-serif",group:"Sans-serif"},{label:"Open Sans",value:"'Open Sans', Arial, sans-serif",group:"Sans-serif",google:"Open Sans"},{label:"Roboto",value:"'Roboto', Arial, sans-serif",group:"Sans-serif",google:"Roboto"},{label:"Lato",value:"'Lato', Arial, sans-serif",group:"Sans-serif",google:"Lato"},{label:"Inter",value:"'Inter', Arial, sans-serif",group:"Sans-serif",google:"Inter"},{label:"Montserrat",value:"'Montserrat', Arial, sans-serif",group:"Sans-serif",google:"Montserrat"},{label:"Source Sans 3",value:"'Source Sans 3', Arial, sans-serif",group:"Sans-serif",google:"Source Sans 3"},{label:"Poppins",value:"'Poppins', Arial, sans-serif",group:"Sans-serif",google:"Poppins"},{label:"Courier New",value:"'Courier New', Courier, monospace",group:"Monospace"},{label:"Consolas",value:"Consolas, 'Courier New', monospace",group:"Monospace"}],xb=[...new Set(gu.filter(u=>u.google).map(u=>u.google))];let to=!1;function Sb(){if(to||typeof document>"u")return;const u="joblication-template-fonts";if(document.getElementById(u)){to=!0;return}const o=xb.map(c=>`family=${c.replace(/ /g,"+")}:wght@400;600`).join("&"),f=document.createElement("link");f.id=u,f.rel="stylesheet",f.href=`https://fonts.googleapis.com/css2?${o}&display=swap`,document.head.appendChild(f),to=!0}function jb({value:u,onChange:o}){const f=y.useRef(null),c=y.useRef(null);y.useEffect(()=>{Sb()},[]);const m=y.useMemo(()=>{const g=u?.trim();return!g||gu.some(j=>j.value===g)?gu:[{label:"Custom",value:g,group:"Custom"},...gu]},[u]),p=y.useMemo(()=>{const g=new Map;for(const j of m)g.has(j.group)||g.set(j.group,[]),g.get(j.group).push(j);return[...g.entries()]},[m]);return y.useEffect(()=>{c.current?.scrollIntoView({block:"nearest"})},[u]),s.jsx("div",{className:"ps-font-picker",children:s.jsx("div",{className:"ps-font-picker-list",ref:f,role:"listbox","aria-label":"Font family",children:p.map(([g,j])=>s.jsxs("div",{className:"ps-font-picker-group",children:[s.jsx("p",{className:"ps-font-picker-group-label",children:g}),j.map(b=>{const h=u===b.value;return s.jsxs("button",{type:"button",ref:h?c:null,role:"option","aria-selected":h,className:`ps-font-option ${h?"active":""}`,style:{fontFamily:b.value},onClick:()=>o(b.value),children:[s.jsx("span",{className:"ps-font-option-name",children:b.label}),s.jsx("span",{className:"ps-font-option-sample",children:"The quick brown fox"})]},b.value)})]},g))})})}const ql={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function Bm(u){if(!u)return{...ql,sections:ql.sections.map(f=>({...f}))};const o=(u.sections||ql.sections).map(f=>({...ql.sections[0],...f}));return{...ql,...u,sections:o}}function Ke({label:u,children:o}){return s.jsxs("div",{className:"ps-prop-row",children:[s.jsx("label",{children:u}),o]})}function Qt({value:u,onChange:o,min:f,max:c,step:m=1,unit:p="%"}){return s.jsxs("div",{className:"ps-range-field",children:[s.jsx("input",{type:"range",min:f,max:c,step:m,value:u,onChange:g=>o(Number(g.target.value))}),s.jsx("input",{type:"number",className:"ps-num-input",min:f,max:c,step:m,value:u,onChange:g=>o(Number(g.target.value))}),s.jsx("span",{className:"ps-unit",children:p})]})}function Eb(){const{showToast:u}=Zn(),[o,f]=y.useState({}),[c,m]=y.useState({}),[p,g]=y.useState(""),[j,b]=y.useState(""),[h,N]=y.useState("cv"),[z,R]=y.useState(""),[O,G]=y.useState(()=>Bm(null)),[Q,Y]=y.useState("contact"),[L,T]=y.useState("layer"),[q,W]=y.useState(!1),ue=y.useMemo(()=>({...o,...c}),[o,c]),J=O.sections||[],X=J.find(x=>x.id===Q),ee=y.useCallback(async()=>{try{const x=await Ce.listTemplates();f(x.catalog||{}),m(x.custom||{});const V=Object.keys({...x.catalog||{},...x.custom||{}});V.length&&!p&&g(V[0])}catch(x){u(x.message,"error")}},[p,u]),te=y.useCallback(async x=>{if(x)try{const V=await Ce.getTemplate(x);b(V.name||x),N(V.category||"cv"),R(V.source||"");const ie=Bm(V.layout);G(ie),ie.sections?.length&&Y(ie.sections[0].id)}catch(V){u(V.message,"error")}},[u]);y.useEffect(()=>{ee()},[ee]),y.useEffect(()=>{p&&te(p)},[p,te]);const oe=y.useCallback((x,V)=>{G(ie=>({...ie,sections:ie.sections.map(se=>se.id===x?{...se,...V}:se)}))},[]);function Ue(){const x=window.prompt("Layer name:");if(!x)return;const V=x.toLowerCase().replace(/\s+/g,"_"),ie=Math.max(0,...J.map(se=>se.zIndex??1));G(se=>({...se,sections:[...se.sections,{id:V,label:x,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:ie+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),Y(V)}function Ae(){!X||!window.confirm(`Delete layer "${X.label}"?`)||(G(x=>({...x,sections:x.sections.filter(V=>V.id!==Q)})),Y(J[0]?.id||""))}const at=y.useCallback((x,V)=>{G(ie=>{const se=[...ie.sections].sort((ae,ge)=>(ge.zIndex??1)-(ae.zIndex??1)),E=se.findIndex(ae=>ae.id===x),H=se.findIndex(ae=>ae.id===V);if(E<0||H<0||E===H)return ie;const Z=[...se],[$]=Z.splice(E,1);Z.splice(H,0,$);const le=Z.map((ae,ge)=>({...ae,zIndex:Z.length-ge}));return{...ie,sections:le}})},[]);async function Ye(){W(!0);try{await Ce.saveTemplate(p,{name:j,category:h,source:z,layout:O}),u("Template saved"),await ee()}catch(x){u(x.message,"error")}finally{W(!1)}}async function Re(){const x=window.prompt("Template id (e.g. my_cv):");if(x){W(!0);try{await Ce.createTemplate({id:x,name:x,category:"cv",source:`<!-- Custom template -->
`,layout:ql}),g(x),await ee(),u("Template created")}catch(V){u(V.message,"error")}finally{W(!1)}}}const D=[...J].sort((x,V)=>(V.zIndex??1)-(x.zIndex??1));return s.jsxs("div",{className:"ps-editor",children:[s.jsxs("header",{className:"ps-toolbar",children:[s.jsxs("div",{className:"ps-toolbar-left",children:[s.jsx("select",{value:p,onChange:x=>g(x.target.value),className:"ps-select",children:Object.entries(ue).map(([x,V])=>s.jsx("option",{value:x,children:V.name||x},x))}),s.jsx("button",{type:"button",className:"ps-tool-btn",onClick:Re,children:"New"}),s.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:Ye,disabled:q,children:q?"Saving…":"Save"})]}),s.jsx("div",{className:"ps-toolbar-center",children:s.jsx("span",{className:"ps-doc-name",children:j||"Untitled"})}),s.jsxs("div",{className:"ps-toolbar-right",children:[s.jsxs("label",{className:"ps-zoom-label",children:["Zoom",s.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:O.zoom||.85,onChange:x=>G({...O,zoom:Number(x.target.value)})}),s.jsxs("span",{children:[Math.round((O.zoom||.85)*100),"%"]})]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:O.snapToGrid,onChange:x=>G({...O,snapToGrid:x.target.checked})}),"Snap"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:O.showGrid,onChange:x=>G({...O,showGrid:x.target.checked})}),"Grid"]})]})]}),s.jsxs("div",{className:"ps-body",children:[s.jsxs("aside",{className:"ps-panel ps-layers",children:[s.jsxs("div",{className:"ps-panel-head",children:[s.jsx("h3",{children:"Layers"}),s.jsx("button",{type:"button",className:"ps-icon-btn",onClick:Ue,title:"Add layer",children:"+"})]}),s.jsx(yb,{layers:D,activeId:Q,onSelect:Y,onReorder:at,onToggleVisible:(x,V)=>oe(x,{visible:!V})})]}),s.jsx(vb,{layout:O,sections:J,activeSection:Q,onSelectSection:Y,onUpdateSection:oe}),s.jsxs("aside",{className:"ps-panel ps-properties",children:[s.jsxs("div",{className:"ps-tabs",children:[s.jsx("button",{type:"button",className:L==="document"?"active":"",onClick:()=>T("document"),children:"Document"}),s.jsx("button",{type:"button",className:L==="layer"?"active":"",onClick:()=>T("layer"),children:"Layer"}),s.jsx("button",{type:"button",className:L==="source"?"active":"",onClick:()=>T("source"),children:"Source"})]}),L==="document"&&s.jsxs("div",{className:"ps-props",children:[s.jsx($e,{label:"Template name",value:j,onChange:b}),s.jsx(Ke,{label:"Category",children:s.jsxs("select",{value:h,onChange:x=>N(x.target.value),className:"ps-select full",children:[s.jsx("option",{value:"cv",children:"CV"}),s.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),s.jsx(Ke,{label:"Page width (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:O.pageWidth,onChange:x=>G({...O,pageWidth:Number(x.target.value)})})}),s.jsx(Ke,{label:"Page height (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:O.pageHeight,onChange:x=>G({...O,pageHeight:Number(x.target.value)})})}),s.jsx(Ke,{label:"Padding (px)",children:s.jsx(Qt,{value:O.pagePadding,onChange:x=>G({...O,pagePadding:x}),min:0,max:120,unit:"px"})}),s.jsx(Ke,{label:"Background",children:s.jsx("input",{type:"color",className:"ps-color-input",value:O.pageBackground||"#ffffff",onChange:x=>G({...O,pageBackground:x.target.value})})}),s.jsx(Ke,{label:"Base font size",children:s.jsx(Qt,{value:O.fontSize,onChange:x=>G({...O,fontSize:x}),min:8,max:18,unit:"px"})}),s.jsx(Ke,{label:"Line height",children:s.jsx(Qt,{value:O.lineHeight,onChange:x=>G({...O,lineHeight:x}),min:1,max:2,step:.05,unit:""})}),s.jsx(Ke,{label:"Font family",children:s.jsx(jb,{value:O.fontFamily||"Georgia, serif",onChange:x=>G({...O,fontFamily:x})})}),s.jsx(Ke,{label:"Grid size",children:s.jsx(Qt,{value:O.gridSize||5,onChange:x=>G({...O,gridSize:x}),min:1,max:20,unit:"%"})})]}),L==="layer"&&X&&s.jsxs("div",{className:"ps-props",children:[s.jsx("h4",{className:"ps-layer-title",children:X.label}),s.jsx(Ke,{label:"X position",children:s.jsx(Qt,{value:X.x,onChange:x=>oe(X.id,{x}),min:0,max:95})}),s.jsx(Ke,{label:"Y position",children:s.jsx(Qt,{value:X.y,onChange:x=>oe(X.id,{y:x}),min:0,max:95})}),s.jsx(Ke,{label:"Width",children:s.jsx(Qt,{value:X.w,onChange:x=>oe(X.id,{w:x}),min:8,max:100})}),s.jsx(Ke,{label:"Height",children:s.jsx(Qt,{value:X.h,onChange:x=>oe(X.id,{h:x}),min:4,max:80})}),s.jsx(Ke,{label:"Opacity",children:s.jsx(Qt,{value:Math.round((X.opacity??1)*100),onChange:x=>oe(X.id,{opacity:x/100}),min:10,max:100,unit:"%"})}),s.jsx(Ke,{label:"Layer padding",children:s.jsx(Qt,{value:X.padding??8,onChange:x=>oe(X.id,{padding:x}),min:0,max:32,unit:"px"})}),s.jsx(Ke,{label:"Text align",children:s.jsxs("select",{className:"ps-select full",value:X.textAlign||"left",onChange:x=>oe(X.id,{textAlign:x.target.value}),children:[s.jsx("option",{value:"left",children:"Left"}),s.jsx("option",{value:"center",children:"Center"}),s.jsx("option",{value:"right",children:"Right"}),s.jsx("option",{value:"justify",children:"Justify"})]})}),s.jsx(Ke,{label:"Fill color",children:s.jsx("input",{type:"color",className:"ps-color-input",value:X.bgColor?.startsWith("#")?X.bgColor:"#e8f0fe",onChange:x=>oe(X.id,{bgColor:x.target.value})})}),s.jsx(Ke,{label:"Font size override",children:s.jsx("input",{type:"number",className:"ps-num-input full",placeholder:"Inherit",value:X.fontSize??"",onChange:x=>oe(X.id,{fontSize:x.target.value?Number(x.target.value):void 0})})}),s.jsxs("div",{className:"ps-check-group",children:[s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:X.visible!==!1,onChange:x=>oe(X.id,{visible:x.target.checked})}),"Visible"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:!!X.locked,onChange:x=>oe(X.id,{locked:x.target.checked})}),"Lock"]})]}),s.jsx("button",{type:"button",className:"ps-danger-btn",onClick:Ae,children:"Delete layer"})]}),L==="layer"&&!X&&s.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),L==="source"&&s.jsx("textarea",{className:"ps-source-editor",value:z,onChange:x=>R(x.target.value)})]})]})]})}function mu(u,o){return(u||[]).find(f=>f.toLowerCase().includes(o))}function zb(){const{showToast:u}=Zn(),[o,f]=Ev(),[c,m]=y.useState([]),[p,g]=y.useState(o.get("slug")||""),[j,b]=y.useState(null),[h,N]=y.useState(""),[z,R]=y.useState(""),[O,G]=y.useState("preview"),[Q,Y]=y.useState("cv"),[L,T]=y.useState("html"),[q,W]=y.useState(!1),ue=y.useCallback(async()=>{try{const x=await Ce.listApplications();m(x.applications||[]),!p&&x.applications?.length&&g(x.applications[0].slug)}catch(x){u(x.message,"error")}},[u,p]),J=y.useCallback(async()=>{if(p)try{const x=await Ce.getReview(p);b(x),N(JSON.stringify(x.stage_2||{},null,2)),R(JSON.stringify(x.stage_3||{},null,2))}catch(x){u(x.message,"error")}},[p,u]);y.useEffect(()=>{ue()},[ue]),y.useEffect(()=>{p&&(f({slug:p}),J())},[p,J,f]);const X=j?.output_folder||c.find(x=>x.slug===p)?.output_folder,ee=j?.files?.length?j.files:c.find(x=>x.slug===p)?.files||[],te=mu(ee,"_cv.html"),oe=mu(ee,"_cv.pdf"),Ue=mu(ee,"_cover_letter.html"),Ae=mu(ee,"_cover_letter.pdf"),at=y.useMemo(()=>Q==="cv"?L==="pdf"?oe:te:L==="pdf"?Ae:Ue,[Q,L,te,oe,Ue,Ae]),Ye=X&&at?Ce.fileUrl(X,at):null;async function Re(){W(!0);try{let x,V;try{x=JSON.parse(h),V=JSON.parse(z)}catch(ie){throw new Error(`Invalid JSON: ${ie.message}`)}await Ce.saveReview(p,{app_key:j?.app_key,stage_2:x,stage_3:V}),u("Saved edits"),await J()}catch(x){u(x.message,"error")}finally{W(!1)}}async function D(){W(!0);try{await Ce.saveReview(p,{app_key:j?.app_key,stage_2:JSON.parse(h),stage_3:JSON.parse(z)}),await Ce.rebuild(p),u("PDFs rebuilt"),await ue(),await J(),G("preview"),T("pdf")}catch(x){u(x.message,"error")}finally{W(!1)}}return s.jsx("div",{className:"profile-page review-page",children:s.jsxs("div",{className:"profile-layout review-layout",children:[s.jsx("main",{className:"profile-main review-main",children:s.jsxs("div",{className:"profile-main-inner review-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Review"}),s.jsx("p",{className:"page-lead",children:"Preview generated documents and fine-tune CV and cover letter content."})]}),s.jsxs("div",{className:"header-actions",children:[s.jsx("select",{value:p,onChange:x=>g(x.target.value),className:"ps-select",children:c.map(x=>s.jsx("option",{value:x.slug,children:x.title||x.slug},x.slug))}),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:Re,disabled:q,children:"Save edits"}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:D,disabled:q,children:q?"Working…":"Save & export PDF"})]})]}),s.jsxs("div",{className:"review-tabs",children:[s.jsx("button",{type:"button",className:O==="preview"?"active":"",onClick:()=>G("preview"),children:"Preview"}),s.jsx("button",{type:"button",className:O==="cv"?"active":"",onClick:()=>G("cv"),children:"CV JSON"}),s.jsx("button",{type:"button",className:O==="letter"?"active":"",onClick:()=>G("letter"),children:"Letter JSON"})]}),O==="preview"&&s.jsxs("div",{className:"review-preview-panel",children:[!X&&s.jsxs("p",{className:"muted review-empty",children:["No generated files yet. Run ",s.jsx("strong",{children:"Generate all"})," from Applications, then return here."]}),X&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"review-preview-toolbar",children:[s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:Q==="cv"?"active":"",onClick:()=>Y("cv"),children:"CV"}),s.jsx("button",{type:"button",className:Q==="letter"?"active":"",onClick:()=>Y("letter"),children:"Cover letter"})]}),s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:L==="html"?"active":"",onClick:()=>T("html"),disabled:!(Q==="cv"?te:Ue),children:"HTML"}),s.jsx("button",{type:"button",className:L==="pdf"?"active":"",onClick:()=>T("pdf"),disabled:!(Q==="cv"?oe:Ae),children:"PDF"})]}),Ye&&s.jsx("a",{href:Ye,target:"_blank",rel:"noreferrer",className:"md-text-btn",children:"Open in new tab"})]}),Ye?s.jsx("div",{className:"review-preview-frame-wrap",children:s.jsx("iframe",{title:`${Q} ${L} preview`,src:Ye,className:"review-preview-frame"},Ye)}):s.jsx("p",{className:"muted review-empty",children:L==="pdf"?"PDF not found — run Save & export PDF.":"HTML preview not available."}),s.jsxs("div",{className:"review-download-row",children:[oe&&s.jsx("a",{href:Ce.fileUrl(X,oe),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download CV PDF"}),Ae&&s.jsx("a",{href:Ce.fileUrl(X,Ae),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download letter PDF"})]})]})]}),O==="cv"&&s.jsx("textarea",{className:"code-area review-editor",value:h,onChange:x=>N(x.target.value)}),O==="letter"&&s.jsx("textarea",{className:"code-area review-editor",value:z,onChange:x=>R(x.target.value)})]})}),s.jsx("aside",{className:"profile-sidebar review-sidebar",children:s.jsxs("nav",{className:"profile-nav",children:[s.jsx("p",{className:"profile-nav-label",children:"Applications"}),s.jsxs("ul",{children:[c.map(x=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${p===x.slug?"active":""}`,onClick:()=>g(x.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:x.title||x.slug}),s.jsx("span",{className:"jobs-nav-meta",children:x.has_output?"Has output":"No output yet"})]})},x.slug)),!c.length&&s.jsx("li",{className:"jobs-empty",children:"No applications"})]})]})})]})})}function wb(){return s.jsx(K0,{children:s.jsxs(Ua,{element:s.jsx(qv,{}),children:[s.jsx(Ua,{index:!0,element:s.jsx(V0,{to:"/jobs",replace:!0})}),s.jsx(Ua,{path:"profile",element:s.jsx(ib,{})}),s.jsx(Ua,{path:"jobs",element:s.jsx(ob,{})}),s.jsx(Ua,{path:"applications",element:s.jsx(db,{})}),s.jsx(Ua,{path:"templates",element:s.jsx(Eb,{})}),s.jsx(Ua,{path:"review",element:s.jsx(zb,{})})]})})}const Tb=`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --bg: #09090b;
  --bg-elevated: #111114;
  --surface: #18181c;
  --surface-2: #222228;
  --surface-hover: #2a2a32;
  --border: rgba(255, 255, 255, 0.07);
  --border-strong: rgba(255, 255, 255, 0.12);
  --text: #fafafa;
  --muted: #a1a1aa;
  --muted-2: #71717a;
  --accent: #818cf8;
  --accent-hover: #a5b4fc;
  --accent-strong: #6366f1;
  --accent-muted: rgba(99, 102, 241, 0.14);
  --accent-glow: rgba(99, 102, 241, 0.35);
  --success: #34d399;
  --success-muted: rgba(52, 211, 153, 0.12);
  --error: #f87171;
  --error-muted: rgba(248, 113, 113, 0.12);
  --warning: #fbbf24;
  --radius-sm: 8px;
  --radius: 12px;
  --radius-lg: 16px;
  --radius-full: 999px;
  --sidebar-w: 248px;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.45);
  --shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.55);
  --font: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, Consolas, monospace;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --transition: 0.18s var(--ease);
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
}

body {
  line-height: 1.55;
  letter-spacing: -0.011em;
}

::selection {
  background: var(--accent-muted);
  color: var(--text);
}

.app-shell {
  min-height: 100vh;
}

.app-main {
  margin-left: var(--sidebar-w);
  min-height: 100vh;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.08), transparent),
    var(--bg);
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: var(--sidebar-w);
  height: 100vh;
  background: linear-gradient(180deg, #121216 0%, #0e0e11 100%);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 1.35rem 1.15rem 1.1rem;
  flex-shrink: 0;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.sidebar-brand svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.sidebar-brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.sidebar-brand-name {
  font-weight: 650;
  font-size: 0.98rem;
  letter-spacing: -0.02em;
  color: var(--text);
}

.sidebar-brand-tag {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.sidebar-nav {
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  overflow: hidden;
  flex: 1;
}

.sidebar-nav-label {
  margin: 0 0 0.5rem;
  padding: 0 0.65rem;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted-2);
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.62rem 0.75rem;
  border-radius: var(--radius-sm);
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
  white-space: nowrap;
  position: relative;
}

.sidebar-link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  opacity: 0.75;
  transition: opacity var(--transition);
}

.sidebar-link-icon svg {
  width: 18px;
  height: 18px;
}

.sidebar-link:hover {
  background: var(--surface);
  color: var(--text);
}

.sidebar-link:hover .sidebar-link-icon {
  opacity: 1;
}

.sidebar-link.active {
  background: var(--accent-muted);
  color: var(--accent-hover);
  box-shadow: inset 0 0 0 1px rgba(129, 140, 248, 0.2);
}

.sidebar-link.active .sidebar-link-icon {
  opacity: 1;
  color: var(--accent);
}

.sidebar-footer {
  padding: 1rem 1.15rem 1.25rem;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}

.sidebar-footer p {
  margin: 0;
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--muted-2);
}

/* Shared page chrome */
.page-lead {
  margin: 0.35rem 0 0;
  font-size: 0.92rem;
  color: var(--muted);
  max-width: 52ch;
  line-height: 1.5;
}

.page-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 60vh;
  color: var(--muted);
}

.page-loading-spinner,
.md-spinner {
  width: 36px;
  height: 36px;
  border: 2.5px solid var(--surface-2);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.5rem 2rem;
  background: var(--surface);
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius-lg);
}

.empty-state-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius);
  background: var(--accent-muted);
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.empty-state-icon svg {
  width: 26px;
  height: 26px;
}

.empty-state h3 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.empty-state p {
  margin: 0 0 1.25rem;
  max-width: 36ch;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

/* Page chrome */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem 0.75rem;
  flex-wrap: wrap;
}

.page-header.compact {
  padding-bottom: 0.25rem;
}

.page-header h1 {
  margin: 0 0 0.25rem;
  font-size: 1.35rem;
  font-weight: 650;
  letter-spacing: -0.025em;
}

.subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.page-center {
  padding: 3rem;
  text-align: center;
}

.muted {
  color: var(--muted);
}

.small {
  font-size: 0.85rem;
}

/* Forms */
label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--muted);
  margin: 0.5rem 0 0.35rem;
}

input,
textarea,
select,
.select {
  width: 100%;
  padding: 0.6rem 0.75rem;
  font: inherit;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--accent-strong);
  box-shadow: 0 0 0 3px var(--accent-muted);
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.checkbox-row input {
  width: auto;
}

/* Range sliders — thin track, circular thumb */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 18px;
  background: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: none;
}

input[type="range"]:focus {
  outline: none;
  box-shadow: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 3px;
  border-radius: 999px;
  background: var(--surface-2);
  box-shadow: inset 0 0 0 1px var(--border-strong);
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  margin-top: -6px;
  border-radius: 50%;
  background: linear-gradient(180deg, #c4cbfc 0%, var(--accent) 45%, var(--accent-strong) 100%);
  border: 2px solid rgba(255, 255, 255, 0.92);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.12);
  transition: transform 0.12s var(--ease), box-shadow 0.12s var(--ease);
}

input[type="range"]:hover::-webkit-slider-thumb {
  transform: scale(1.1);
}

input[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.05);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5), 0 0 0 3px var(--accent-muted);
}

input[type="range"]:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 3px var(--accent-muted);
}

input[type="range"]::-moz-range-track {
  height: 3px;
  border-radius: 999px;
  background: var(--surface-2);
  box-shadow: inset 0 0 0 1px var(--border-strong);
}

input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(180deg, #c4cbfc 0%, var(--accent) 45%, var(--accent-strong) 100%);
  border: 2px solid rgba(255, 255, 255, 0.92);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.12);
  transition: transform 0.12s var(--ease), box-shadow 0.12s var(--ease);
}

input[type="range"]:hover::-moz-range-thumb {
  transform: scale(1.1);
}

input[type="range"]:active::-moz-range-thumb {
  transform: scale(1.05);
}

input[type="range"]:focus-visible::-moz-range-thumb {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 3px var(--accent-muted);
}

input[type="range"]:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  transform: none;
}

.ps-editor input[type="range"]::-webkit-slider-runnable-track,
.ps-editor input[type="range"]::-moz-range-track {
  background: #2a2a30;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.ps-editor input[type="range"]::-webkit-slider-thumb,
.ps-editor input[type="range"]::-moz-range-thumb {
  background: linear-gradient(180deg, #a5b4fc 0%, var(--ps-accent) 50%, var(--accent-strong) 100%);
}

.btn {
  padding: 0.55rem 1rem;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-sm {
  padding: 0.4rem 0.7rem;
  font-size: 0.8rem;
}

.btn-primary {
  background: linear-gradient(180deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.btn-primary:hover:not(:disabled) {
  filter: brightness(1.06);
}

.btn-ghost {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
}

.btn-ghost:hover:not(:disabled) {
  color: var(--text);
  background: var(--surface-hover);
}

.btn.danger,
.btn-ghost.danger {
  color: var(--error);
  border-color: #5c2a2a;
}

.full-width {
  width: 100%;
  margin-top: 0.5rem;
}

.code-area {
  width: 100%;
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 0.82rem;
  line-height: 1.45;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  padding: 0.75rem;
  resize: vertical;
}

.code-area.full {
  min-height: calc(100vh - 220px);
}

.field-error {
  color: var(--error);
  font-size: 0.85rem;
}

/* Profile & workspace pages */
.profile-page {
  --md-primary: var(--accent);
  --md-primary-container: var(--accent-muted);
  --md-surface: var(--surface);
  --md-surface-2: var(--surface-2);
  --md-surface-3: var(--surface-hover);
  --md-outline: var(--border-strong);
  --md-on-surface: var(--text);
  --md-on-surface-variant: var(--muted);
  --md-radius: var(--radius);
  --profile-sidebar-w: 272px;
  font-family: var(--font);
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1px);
}

.profile-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 60vh;
  color: var(--muted);
}

.profile-layout {
  display: flex;
  width: 100%;
  flex: 1;
  min-height: calc(100vh - 1px);
}

.profile-main {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding: 2.25rem 2.75rem 3rem;
}

.profile-main-inner {
  max-width: 920px;
}

.profile-section-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.profile-section-head h1 {
  margin: 0;
  font-size: 1.85rem;
  font-weight: 650;
  letter-spacing: -0.03em;
  color: var(--md-on-surface);
}

.profile-form-surface {
  background: var(--md-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.65rem 1.85rem 2rem;
  box-shadow: var(--shadow-sm);
}

.profile-page input,
.profile-page textarea {
  background: var(--md-surface-2);
  border: 1px solid var(--md-outline);
  color: var(--md-on-surface);
}

.profile-page input:focus,
.profile-page textarea:focus {
  border-color: var(--md-primary);
  box-shadow: 0 0 0 1px var(--md-primary);
}

.profile-sidebar {
  width: var(--profile-sidebar-w);
  flex-shrink: 0;
  background: linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg) 100%);
  border-left: 1px solid var(--border);
  padding: 1.35rem 0 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.profile-nav {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
}

.profile-sidebar-actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: auto;
  padding: 1rem 1rem 0 0;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}

.profile-nav-label {
  margin: 0 0 0.5rem;
  padding: 0 1rem 0 0;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--md-on-surface-variant);
}

.profile-nav ul {
  list-style: none;
  margin: 0;
  padding: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.profile-nav-item {
  width: 100%;
  text-align: left;
  padding: 0.62rem 0.85rem;
  border: none;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--md-on-surface-variant);
  font: inherit;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
}

.profile-nav-item:hover {
  background: var(--md-surface-2);
  color: var(--md-on-surface);
}

.profile-nav-item.active {
  background: var(--md-primary-container);
  color: var(--accent-hover);
  box-shadow: inset 0 0 0 1px rgba(129, 140, 248, 0.18);
}

.md-filled-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: 100%;
  padding: 0.72rem 1.25rem;
  border: none;
  border-radius: var(--radius-sm);
  background: linear-gradient(180deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: #fff;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter var(--transition), opacity var(--transition), transform var(--transition);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.md-filled-btn svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.md-filled-btn:hover:not(:disabled) {
  filter: brightness(1.07);
}

.md-filled-btn:active:not(:disabled) {
  transform: translateY(1px);
}

.md-filled-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.md-outlined-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.58rem 1.1rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--accent-hover);
  font: inherit;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--transition), border-color var(--transition);
}

.md-outlined-btn:hover {
  background: var(--accent-muted);
  border-color: rgba(129, 140, 248, 0.35);
}

.md-outlined-btn.full {
  width: 100%;
}

.md-text-btn {
  border: none;
  background: none;
  color: var(--md-primary);
  font: inherit;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
}

.md-text-btn.danger {
  color: var(--error);
}

.md-icon-btn {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--md-on-surface-variant);
  cursor: pointer;
  font-size: 1rem;
  align-self: center;
}

.md-icon-btn:hover {
  background: rgba(242, 139, 130, 0.12);
  color: #f28b82;
}

.md-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  min-width: 0;
}

.profile-page label {
  margin: 0;
}

.md-field > label {
  display: block;
  position: static;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--md-on-surface-variant);
  margin-bottom: 0.4rem;
  padding-left: 0.1rem;
}

.md-grid {
  display: grid;
  gap: 1.25rem 1.5rem;
  align-items: start;
}

.md-grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.md-field-span {
  grid-column: 1 / -1;
}

@media (max-width: 720px) {
  .md-grid-2 {
    grid-template-columns: 1fr;
  }

  .profile-layout {
    flex-direction: column;
  }

  .profile-sidebar {
    position: relative;
    width: 100%;
    height: auto;
    border-left: none;
    border-top: 1px solid #3c4043;
    order: -1;
  }

  .profile-main {
    padding: 1.25rem;
  }
}

.md-input {
  width: 100%;
  padding: 0.7rem 0.85rem;
  font: inherit;
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--md-on-surface);
  background: var(--md-surface-2);
  border: 1px solid var(--md-outline);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  margin: 0;
}

.md-input:focus {
  border-color: var(--accent-strong);
  box-shadow: 0 0 0 3px var(--accent-muted);
}

.md-field:focus-within > label {
  color: var(--md-primary);
}

.md-textarea {
  min-height: 100px;
  resize: vertical;
}

.md-hint {
  display: block;
  margin-top: 0.35rem;
  font-size: 0.75rem;
  color: var(--md-on-surface-variant);
}

.md-title-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.md-title-row {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
}

.md-title-row .md-field {
  flex: 1;
  min-width: 0;
}

.md-title-row .md-icon-btn {
  flex-shrink: 0;
  margin-bottom: 0.15rem;
}

.md-kv-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.md-kv-row {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  align-items: end;
  padding: 1.25rem;
  background: var(--md-surface-2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}

.md-kv-row .md-icon-btn {
  margin-bottom: 0.15rem;
}

.md-kv-row-stacked {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  grid-template-columns: unset;
}

.md-kv-stacked-fields {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.md-kv-row-stacked .md-icon-btn {
  flex-shrink: 0;
  margin-top: 1.65rem;
}

@media (max-width: 640px) {
  .md-kv-row {
    grid-template-columns: 1fr;
  }
}

.md-entity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.md-card {
  background: var(--md-surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem 1.35rem 1.5rem;
}

.md-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.md-card-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--md-on-surface);
}

.md-card .md-grid {
  margin-top: 0.25rem;
}

/* Editor layout (Templates) */
.template-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 1px);
}

.editor-layout,
.template-layout {
  display: grid;
  grid-template-columns: 220px 1fr 300px;
  gap: 0;
  flex: 1;
  min-height: 0;
  border-top: 1px solid var(--border);
}

.editor-panels {
  background: var(--bg-elevated);
  border-right: 1px solid var(--border);
  padding: 1rem;
  overflow-y: auto;
}

.right-panel {
  border-right: none;
  border-left: 1px solid var(--border);
}

.editor-panels h3,
.editor-panels h4 {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.section-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.section-item {
  width: 100%;
  text-align: left;
  padding: 0.55rem 0.65rem;
  border: none;
  background: transparent;
  color: var(--muted);
  border-radius: 8px;
  cursor: pointer;
  font: inherit;
  font-size: 0.88rem;
}

.section-item:hover,
.section-item.active {
  background: var(--surface);
  color: var(--text);
}

.editor-canvas {
  padding: 1.25rem;
  overflow-y: auto;
  background: var(--bg);
}

.canvas-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.canvas-toolbar h2 {
  margin: 0;
  font-size: 1.1rem;
}

.map-toolbar {
  margin-bottom: 0.75rem;
}

.map-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.75rem;
  margin-bottom: 0.75rem;
}

.map-card summary {
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.md-field-span-wrap {
  margin-top: 0.25rem;
}

.md-field-span-wrap .md-field {
  margin-bottom: 0;
}

/* Jobs page */
.jobs-page .jobs-main-inner {
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: calc(100vh - 4rem);
}

.jobs-welcome h1 {
  margin: 0 0 0.35rem;
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--md-on-surface);
}

.jobs-welcome-text {
  margin: 0;
  color: var(--md-on-surface-variant);
  font-size: 0.95rem;
}

.jobs-chat {
  margin-top: auto;
  background: var(--md-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.jobs-chat-messages {
  max-height: 240px;
  overflow-y: auto;
  padding: 1.15rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.jobs-chat-bubble {
  max-width: 640px;
}

.jobs-chat-bubble.user {
  align-self: flex-end;
  background: var(--accent-muted);
  border: 1px solid rgba(129, 140, 248, 0.22);
  border-radius: var(--radius);
  padding: 0.8rem 1rem;
}

.jobs-chat-bubble.assistant p {
  margin: 0;
}

.jobs-chat-bubble.user p {
  margin: 0;
}

.jobs-chat-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--md-on-surface-variant);
  margin-bottom: 0.35rem;
}

.jobs-chat-composer {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--border);
  background: var(--md-surface-2);
}

.jobs-chat-input-wrap {
  flex: 1;
  min-width: 0;
}

.jobs-chat-input-wrap .md-field {
  margin-bottom: 0;
}

.jobs-send-btn {
  width: auto;
  min-width: 5.5rem;
  flex-shrink: 0;
  margin-bottom: 0.15rem;
}

.jobs-sidebar .profile-nav-item {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  border-radius: 12px;
  height: auto;
}

.jobs-nav-title {
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3;
}

.jobs-nav-meta {
  font-size: 0.75rem;
  color: var(--md-on-surface-variant);
  font-weight: 400;
}

.jobs-sidebar .profile-nav-item.active .jobs-nav-meta {
  color: rgba(138, 180, 248, 0.75);
}

.jobs-empty {
  padding: 0.75rem;
  font-size: 0.85rem;
  color: var(--md-on-surface-variant);
  list-style: none;
}

@media (max-width: 720px) {
  .jobs-chat-composer {
    flex-direction: column;
    align-items: stretch;
  }

  .jobs-send-btn {
    width: 100%;
  }
}

/* Legacy chat classes — unused */
.chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.chat-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  flex: 1;
  min-height: 0;
  border-top: 1px solid var(--border);
}

.chat-main {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-bubble {
  max-width: 720px;
  padding: 0.85rem 1rem;
  border-radius: var(--radius);
}

.chat-bubble.user {
  align-self: flex-end;
  background: var(--surface);
  border: 1px solid var(--border);
}

.chat-bubble.assistant {
  align-self: flex-start;
  background: transparent;
}

.bubble-label {
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 0.35rem;
  font-weight: 600;
}

.bubble-body {
  white-space: pre-wrap;
  font-size: 0.95rem;
}

.chat-composer {
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid var(--border);
  background: var(--bg-elevated);
}

.chat-composer textarea {
  flex: 1;
  resize: none;
  min-height: 52px;
}

.chat-right-panel {
  background: var(--bg-elevated);
  border-left: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border);
}

.panel-header h3 {
  margin: 0;
  font-size: 0.95rem;
}

.job-list {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  overflow-y: auto;
  flex: 0 0 auto;
  max-height: 40%;
}

.job-item {
  width: 100%;
  text-align: left;
  padding: 0.65rem 0.75rem;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.job-item:hover,
.job-item.active {
  background: var(--surface);
}

.job-title {
  font-size: 0.88rem;
  font-weight: 600;
}

.job-meta {
  font-size: 0.75rem;
  color: var(--muted);
}

.empty-hint {
  padding: 1rem;
  font-size: 0.85rem;
}

.job-editor {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 1rem 1rem;
  border-top: 1px solid var(--border);
}

.job-editor h4 {
  margin: 0 0 0.5rem;
}

.panel-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.jobs-sidebar .profile-nav-item.active .jobs-nav-meta {
  color: var(--accent);
}

/* Applications */
.applications-page .profile-section-head {
  align-items: flex-start;
}

.applications-generate-btn {
  width: auto;
  flex-shrink: 0;
}

.applications-main-inner {
  max-width: 1080px;
}

.generation-banner {
  margin-bottom: 1.5rem;
  padding: 1rem 1.15rem;
  background: var(--accent-muted);
  border: 1px solid rgba(129, 140, 248, 0.22);
  border-radius: var(--radius);
}

.generation-banner p {
  margin: 0.65rem 0 0;
  font-size: 0.85rem;
  color: var(--accent-hover);
}

.generation-banner-track {
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.generation-banner-fill {
  height: 100%;
  width: 40%;
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  border-radius: var(--radius-full);
  animation: gen-pulse 1.4s ease-in-out infinite;
}

@keyframes gen-pulse {
  0%, 100% { transform: translateX(-20%); opacity: 0.7; }
  50% { transform: translateX(180%); opacity: 1; }
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.application-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
}

.application-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.application-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.15rem 1.25rem 0.85rem;
}

.application-card-top h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.application-card-slug {
  margin: 0.3rem 0 0;
  font-size: 0.75rem;
  color: var(--muted-2);
  font-family: var(--font-mono);
}

.status-pill {
  width: auto;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.35rem 0.55rem;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%23a1a1aa' d='M1 1l4 4 4-4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.45rem center;
  padding-right: 1.35rem;
}

.status-unsubmitted { background: var(--surface-2); color: var(--muted); border-color: var(--border); }
.status-submitted { background: var(--accent-muted); color: var(--accent-hover); border-color: rgba(129, 140, 248, 0.25); }
.status-interview { background: rgba(251, 191, 36, 0.12); color: var(--warning); border-color: rgba(251, 191, 36, 0.25); }
.status-accepted { background: var(--success-muted); color: var(--success); border-color: rgba(52, 211, 153, 0.25); }
.status-rejected { background: var(--error-muted); color: var(--error); border-color: rgba(248, 113, 113, 0.25); }

.application-card-body {
  padding: 0 1.25rem 1rem;
  flex: 1;
}

.output-badge {
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.28rem 0.55rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.75rem;
}

.output-badge.ready {
  background: var(--success-muted);
  color: var(--success);
}

.output-badge.pending {
  background: var(--surface-2);
  color: var(--muted-2);
}

.application-files {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.application-file-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.65rem;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  font-size: 0.8rem;
  transition: background var(--transition), border-color var(--transition);
}

.application-file-link:hover {
  background: var(--surface-hover);
  border-color: var(--border-strong);
}

.application-file-link span {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.application-file-link svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--muted);
}

.application-file-link svg:last-child {
  opacity: 0.5;
}

.application-hint {
  margin: 0;
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.45;
}

.application-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.15);
}

.application-status-label {
  font-size: 0.72rem;
  color: var(--muted-2);
}

.filter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.filter-count {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: var(--radius-full);
  background: var(--surface-2);
  color: var(--muted);
}

.profile-nav-item.active .filter-count {
  background: rgba(129, 140, 248, 0.2);
  color: var(--accent-hover);
}

.applications-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
  margin-bottom: 0.25rem;
}

.stat-block {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.75rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
}

.stat-value {
  font-size: 1.35rem;
  font-weight: 650;
  letter-spacing: -0.03em;
  color: var(--text);
}

.stat-label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted-2);
}

/* Photoshop-style template editor */
.ps-editor {
  --ps-bg: #0c0c0e;
  --ps-panel: #141418;
  --ps-panel-border: rgba(255, 255, 255, 0.06);
  --ps-text: #fafafa;
  --ps-muted: #a1a1aa;
  --ps-accent: #818cf8;
  --ps-accent-dim: rgba(99, 102, 241, 0.22);
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: calc(100vh - 1px);
  background: var(--ps-bg);
  color: var(--ps-text);
  font-family: var(--font);
}

.ps-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.55rem 0.85rem;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--ps-panel-border);
  flex-shrink: 0;
  flex-wrap: wrap;
}

.ps-toolbar-left,
.ps-toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ps-toolbar-center {
  flex: 1;
  text-align: center;
}

.ps-doc-name {
  font-size: 0.85rem;
  color: var(--ps-muted);
}

.ps-select {
  background: var(--surface);
  border: 1px solid var(--border-strong);
  color: var(--ps-text);
  border-radius: var(--radius-sm);
  padding: 0.4rem 0.55rem;
  font-size: 0.82rem;
}

.ps-select.full,
.ps-text-input.full,
.ps-num-input.full {
  width: 100%;
}

.ps-tool-btn {
  padding: 0.4rem 0.8rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  color: var(--ps-text);
  font-size: 0.82rem;
  cursor: pointer;
  transition: background var(--transition);
}

.ps-tool-btn:hover {
  background: var(--surface-hover);
}

.ps-tool-btn.primary {
  background: linear-gradient(180deg, var(--ps-accent) 0%, var(--accent-strong) 100%);
  border-color: transparent;
  color: #fff;
}

.ps-zoom-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--ps-muted);
}

.ps-zoom-label input[type="range"] {
  width: 80px;
}

.ps-check-inline {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--ps-muted);
}

.ps-body {
  display: grid;
  grid-template-columns: 220px 1fr 300px;
  flex: 1;
  min-height: 0;
}

.ps-panel {
  background: var(--ps-panel);
  border-right: 1px solid var(--ps-panel-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ps-properties {
  border-right: none;
  border-left: 1px solid var(--ps-panel-border);
}

.ps-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--ps-panel-border);
}

.ps-panel-head h3 {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

.ps-icon-btn {
  width: 24px;
  height: 24px;
  border: 1px solid #555;
  border-radius: 3px;
  background: #454545;
  color: var(--ps-text);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
}

.ps-layer-list {
  list-style: none;
  margin: 0;
  padding: 0.35rem 0;
  overflow-y: auto;
  flex: 1;
}

.ps-layer-list li,
.ps-layer-row {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  padding: 0 0.35rem;
  border-radius: 4px;
  transition: background 0.12s ease;
}

.ps-layer-row.dragging {
  opacity: 0.55;
}

.ps-layer-row.drop-target {
  background: rgba(129, 140, 248, 0.12);
  box-shadow: inset 0 0 0 1px rgba(129, 140, 248, 0.35);
}

.ps-layer-grip {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 28px;
  flex-shrink: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--ps-muted);
  cursor: grab;
  padding: 0;
  touch-action: none;
}

.ps-layer-grip:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--ps-text);
}

.ps-layer-grip:active {
  cursor: grabbing;
}

.ps-layer-grip-icon {
  width: 10px;
  height: 16px;
}

.ps-layer-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.5rem;
  border: none;
  border-radius: 3px;
  background: transparent;
  color: var(--ps-text);
  font: inherit;
  font-size: 0.82rem;
  cursor: pointer;
  text-align: left;
  min-width: 0;
}

.ps-layer-item:hover {
  background: #383838;
}

.ps-layer-item.active {
  background: var(--ps-accent-dim);
  outline: 1px solid var(--ps-accent);
}

.ps-eye {
  width: 14px;
  height: 14px;
  border-radius: 2px;
  flex-shrink: 0;
  border: 1px solid #666;
  background: #555;
}

.ps-eye.on {
  background: var(--ps-accent);
  border-color: #1a5cb0;
}

.ps-eye.off {
  background: #333;
  opacity: 0.5;
}

.ps-layer-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ps-lock-badge {
  font-size: 0.65rem;
  padding: 0.1rem 0.25rem;
  background: #555;
  border-radius: 2px;
  color: #ccc;
}

.ps-layer-actions {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.ps-mini-btn {
  width: 18px;
  height: 14px;
  padding: 0;
  border: none;
  background: #454545;
  color: #aaa;
  font-size: 0.55rem;
  cursor: pointer;
  line-height: 1;
}

.ps-mini-btn:hover {
  background: #555;
  color: #fff;
}

.ps-workspace {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  background: var(--ps-bg);
  background-image:
    linear-gradient(45deg, #2a2a2a 25%, transparent 25%),
    linear-gradient(-45deg, #2a2a2a 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #2a2a2a 75%),
    linear-gradient(-45deg, transparent 75%, #2a2a2a 75%);
  background-size: 16px 16px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0;
}

.ps-ruler {
  position: relative;
  height: 20px;
  background: #3a3a3a;
  border-bottom: 1px solid #222;
  flex-shrink: 0;
}

.ps-ruler span {
  position: absolute;
  top: 2px;
  font-size: 0.6rem;
  color: #888;
  transform: translateX(-50%);
}

.ps-canvas-scroll {
  flex: 1;
  overflow: auto;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  cursor: grab;
  touch-action: none;
}

.ps-canvas-scroll:active,
body.ps-panning .ps-canvas-scroll {
  cursor: grabbing;
}

.ps-canvas-stage {
  transition: transform 0.1s ease;
  flex-shrink: 0;
}

.ps-canvas {
  position: relative;
  box-shadow: 0 0 0 1px #111, 0 8px 40px rgba(0, 0, 0, 0.5);
  color: #111;
  user-select: none;
  cursor: grab;
}

body.ps-panning .ps-canvas {
  cursor: grabbing;
}

.ps-canvas-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.35;
  background-image:
    linear-gradient(to right, rgba(47, 140, 239, 0.25) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(47, 140, 239, 0.25) 1px, transparent 1px);
}

.ps-layer {
  position: absolute;
  border: 1px solid rgba(47, 140, 239, 0.45);
  border-radius: 2px;
  cursor: move;
  box-sizing: border-box;
  touch-action: none;
  overflow: hidden;
}

.ps-layer.selected {
  border: 2px solid var(--ps-accent);
  box-shadow: 0 0 0 1px rgba(47, 140, 239, 0.4);
}

.ps-layer.locked {
  cursor: not-allowed;
  opacity: 0.7;
}

.ps-layer-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #555;
  pointer-events: none;
}

.ps-layer-preview {
  margin: 0.2rem 0 0;
  font-size: 0.7rem;
  color: #888;
  pointer-events: none;
}

.ps-handle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1px solid var(--ps-accent);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  pointer-events: auto;
  z-index: 2;
  touch-action: none;
}

body.ps-dragging {
  user-select: none;
  cursor: inherit;
}

body.ps-dragging .ps-layer {
  cursor: inherit;
}

.ps-handle-nw { top: -5px; left: -5px; cursor: nwse-resize; }
.ps-handle-ne { top: -5px; right: -5px; cursor: nesw-resize; }
.ps-handle-sw { bottom: -5px; left: -5px; cursor: nesw-resize; }
.ps-handle-se { right: -5px; bottom: -5px; cursor: nwse-resize; }
.ps-handle-n { top: -5px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }
.ps-handle-s { bottom: -5px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }
.ps-handle-w { left: -5px; top: 50%; transform: translateY(-50%); cursor: ew-resize; }
.ps-handle-e { right: -5px; top: 50%; transform: translateY(-50%); cursor: ew-resize; }

.ps-tabs {
  display: flex;
  border-bottom: 1px solid var(--ps-panel-border);
  flex-shrink: 0;
}

.ps-tabs button {
  flex: 1;
  padding: 0.55rem 0.35rem;
  border: none;
  background: transparent;
  color: var(--ps-muted);
  font-size: 0.75rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.ps-tabs button.active {
  color: var(--ps-text);
  border-bottom-color: var(--ps-accent);
  background: #333;
}

.ps-props {
  padding: 0.75rem;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.ps-props .md-field > label {
  color: var(--ps-muted);
}

.ps-props .md-input {
  background: #252525;
  border-color: #555;
  color: var(--ps-text);
}

.ps-prop-row label {
  display: block;
  font-size: 0.72rem;
  color: var(--ps-muted);
  margin-bottom: 0.3rem;
}

.ps-range-field {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.ps-range-field input[type="range"] {
  flex: 1;
  min-width: 0;
}

.ps-num-input {
  width: 52px;
  padding: 0.25rem 0.35rem;
  background: #252525;
  border: 1px solid #555;
  border-radius: 3px;
  color: var(--ps-text);
  font-size: 0.78rem;
}

.ps-unit {
  font-size: 0.7rem;
  color: var(--ps-muted);
  width: 1.5rem;
}

.ps-text-input {
  padding: 0.35rem 0.5rem;
  background: #252525;
  border: 1px solid #555;
  border-radius: 3px;
  color: var(--ps-text);
  font-size: 0.82rem;
}

.ps-font-picker {
  width: 100%;
}

.ps-font-picker-list {
  max-height: 220px;
  overflow-y: auto;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: var(--surface);
  padding: 0.35rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.ps-font-picker-list::-webkit-scrollbar {
  width: 6px;
}

.ps-font-picker-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-full);
}

.ps-font-picker-group + .ps-font-picker-group {
  margin-top: 0.5rem;
}

.ps-font-picker-group-label {
  margin: 0 0 0.25rem;
  padding: 0 0.45rem;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--ps-muted);
}

.ps-font-option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
  width: 100%;
  padding: 0.5rem 0.55rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--ps-text);
  text-align: left;
  cursor: pointer;
  transition: background 0.12s ease, box-shadow 0.12s ease;
}

.ps-font-option:hover {
  background: rgba(255, 255, 255, 0.05);
}

.ps-font-option.active {
  background: var(--ps-accent-dim);
  box-shadow: inset 0 0 0 1px rgba(129, 140, 248, 0.35);
}

.ps-font-option-name {
  font-size: 0.72rem;
  font-weight: 600;
  font-family: var(--font);
  color: var(--ps-muted);
  letter-spacing: 0.02em;
}

.ps-font-option-sample {
  font-size: 0.95rem;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.ps-color-input {
  width: 100%;
  height: 32px;
  padding: 2px;
  border: 1px solid #555;
  border-radius: 3px;
  background: #252525;
  cursor: pointer;
}

.ps-layer-title {
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.ps-check-group {
  display: flex;
  gap: 1rem;
  margin-top: 0.25rem;
}

.ps-danger-btn {
  margin-top: 0.5rem;
  padding: 0.45rem;
  border: 1px solid #8b3a3a;
  border-radius: 4px;
  background: transparent;
  color: #f28b82;
  font-size: 0.8rem;
  cursor: pointer;
}

.ps-danger-btn:hover {
  background: rgba(242, 139, 130, 0.1);
}

.ps-empty-props {
  padding: 1rem 0.75rem;
  font-size: 0.82rem;
  color: var(--ps-muted);
  margin: 0;
}

.ps-source-editor {
  flex: 1;
  width: 100%;
  min-height: 300px;
  margin: 0;
  padding: 0.75rem;
  border: none;
  background: #1e1e1e;
  color: #d4d4d4;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 0.78rem;
  line-height: 1.45;
  resize: none;
}

@media (max-width: 960px) {
  .ps-body {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }

  .ps-layers {
    max-height: 160px;
    border-right: none;
    border-bottom: 1px solid var(--ps-panel-border);
  }

  .ps-properties {
    max-height: 280px;
    border-left: none;
    border-top: 1px solid var(--ps-panel-border);
  }
}

/* Legacy template canvas (deprecated) */
.template-canvas-wrap {
  padding: 1.5rem;
  overflow: auto;
  background: #1a1a1a;
  display: flex;
  justify-content: center;
}

.template-canvas {
  position: relative;
  width: 595px;
  min-height: 842px;
  background: #fff;
  color: #111;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
  border-radius: 4px;
}

.template-block {
  position: absolute;
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  background: rgba(16, 163, 127, 0.08);
}

.template-block.selected {
  border-color: var(--accent);
  background: rgba(16, 163, 127, 0.15);
}

.block-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #666;
}

.block-placeholder {
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: #999;
}

/* Review */
.review-layout {
  min-height: calc(100vh - 1px);
}

.review-main-inner {
  max-width: none;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1px);
}

.review-page .profile-section-head {
  flex-wrap: wrap;
  gap: 0.75rem;
}

.review-page .profile-section-head .header-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.review-tabs {
  display: flex;
  gap: 0.15rem;
  margin-bottom: 1.25rem;
  padding: 0.2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  width: fit-content;
}

.review-tabs button {
  background: transparent;
  border: none;
  color: var(--muted);
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background var(--transition), color var(--transition);
}

.review-tabs button.active {
  color: var(--text);
  background: var(--accent-muted);
  box-shadow: inset 0 0 0 1px rgba(129, 140, 248, 0.2);
}

.review-preview-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--md-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.review-empty {
  padding: 2rem 1.5rem;
  margin: 0;
}

.review-preview-toolbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.8rem 1rem;
  background: var(--md-surface-2);
  border-bottom: 1px solid var(--border);
}

.review-preview-switch {
  display: flex;
  gap: 0.15rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.2rem;
}

.review-preview-switch button {
  border: none;
  background: transparent;
  color: var(--muted);
  padding: 0.38rem 0.75rem;
  border-radius: 6px;
  font: inherit;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
}

.review-preview-switch button.active {
  background: var(--accent-muted);
  color: var(--accent-hover);
}

.review-preview-switch button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.review-preview-frame-wrap {
  flex: 1;
  min-height: 480px;
  background: #525252;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.review-preview-frame {
  width: 100%;
  max-width: 820px;
  height: 100%;
  min-height: 460px;
  border: none;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
}

.review-download-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 0.85rem 1rem;
  border-top: 1px solid var(--border);
}

.review-download-row .md-outlined-btn {
  text-decoration: none;
}

.review-sidebar .profile-nav-item {
  flex-direction: column;
  align-items: flex-start;
}

.review-editor {
  flex: 1;
  min-height: calc(100vh - 220px);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  border-radius: var(--radius);
}

/* Toast */
.toast {
  position: fixed;
  bottom: 1.75rem;
  left: 50%;
  transform: translateX(-50%) translateY(1rem);
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.15rem;
  border-radius: var(--radius);
  font-size: 0.88rem;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.22s var(--ease), transform 0.22s var(--ease);
  z-index: 1000;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(12px);
}

.toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.toast-icon svg {
  width: 16px;
  height: 16px;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast.success {
  background: rgba(24, 35, 32, 0.92);
  color: var(--success);
  border: 1px solid rgba(52, 211, 153, 0.3);
}

.toast.error {
  background: rgba(35, 24, 26, 0.92);
  color: var(--error);
  border: 1px solid rgba(248, 113, 113, 0.3);
}

@media (max-width: 960px) {
  .editor-layout,
  .template-layout,
  .chat-layout {
    grid-template-columns: 1fr;
  }

  .editor-panels.left-panel,
  .chat-right-panel {
    display: none;
  }
}
`;function Nb(){return s.jsx("style",{children:Tb})}Vg.createRoot(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsxs(yv,{children:[s.jsx(Nb,{}),s.jsx(Gv,{children:s.jsx(wb,{})})]})}));
