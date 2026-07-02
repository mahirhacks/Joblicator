(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function s(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(m){if(m.ep)return;m.ep=!0;const h=s(m);fetch(m.href,h)}})();var qr={exports:{}},Yn={};var pm;function C0(){if(pm)return Yn;pm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(r,m,h){var v=null;if(h!==void 0&&(v=""+h),m.key!==void 0&&(v=""+m.key),"key"in m){h={};for(var j in m)j!=="key"&&(h[j]=m[j])}else h=m;return m=h.ref,{$$typeof:u,type:r,key:v,ref:m!==void 0?m:null,props:h}}return Yn.Fragment=o,Yn.jsx=s,Yn.jsxs=s,Yn}var gm;function _0(){return gm||(gm=1,qr.exports=C0()),qr.exports}var d=_0(),Gr={exports:{}},le={};var vm;function O0(){if(vm)return le;vm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),M=Symbol.iterator;function _(S){return S===null||typeof S!="object"?null:(S=M&&S[M]||S["@@iterator"],typeof S=="function"?S:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,H={};function K(S,q,V){this.props=S,this.context=q,this.refs=H,this.updater=V||D}K.prototype.isReactComponent={},K.prototype.setState=function(S,q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,q,"setState")},K.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Q(){}Q.prototype=K.prototype;function X(S,q,V){this.props=S,this.context=q,this.refs=H,this.updater=V||D}var I=X.prototype=new Q;I.constructor=X,B(I,K.prototype),I.isPureReactComponent=!0;var re=Array.isArray;function Z(){}var G={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function J(S,q,V){var $=V.ref;return{$$typeof:u,type:S,key:q,ref:$!==void 0?$:null,props:V}}function ie(S,q){return J(S.type,q,S.props)}function Pe(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function Qe(S){var q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(V){return q[V]})}var ft=/\/+/g;function at(S,q){return typeof S=="object"&&S!==null&&S.key!=null?Qe(""+S.key):q.toString(36)}function Oe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Z,Z):(S.status="pending",S.then(function(q){S.status==="pending"&&(S.status="fulfilled",S.value=q)},function(q){S.status==="pending"&&(S.status="rejected",S.reason=q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function w(S,q,V,$,te){var se=typeof S;(se==="undefined"||se==="boolean")&&(S=null);var be=!1;if(S===null)be=!0;else switch(se){case"bigint":case"string":case"number":be=!0;break;case"object":switch(S.$$typeof){case u:case o:be=!0;break;case R:return be=S._init,w(be(S._payload),q,V,$,te)}}if(be)return te=te(S),be=$===""?"."+at(S,0):$,re(te)?(V="",be!=null&&(V=be.replace(ft,"$&/")+"/"),w(te,q,V,"",function(Va){return Va})):te!=null&&(Pe(te)&&(te=ie(te,V+(te.key==null||S&&S.key===te.key?"":(""+te.key).replace(ft,"$&/")+"/")+be)),q.push(te)),1;be=0;var tt=$===""?".":$+":";if(re(S))for(var Ue=0;Ue<S.length;Ue++)$=S[Ue],se=tt+at($,Ue),be+=w($,q,V,se,te);else if(Ue=_(S),typeof Ue=="function")for(S=Ue.call(S),Ue=0;!($=S.next()).done;)$=$.value,se=tt+at($,Ue++),be+=w($,q,V,se,te);else if(se==="object"){if(typeof S.then=="function")return w(Oe(S),q,V,$,te);throw q=String(S),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return be}function T(S,q,V){if(S==null)return S;var $=[],te=0;return w(S,$,"","",function(se){return q.call(V,se,te++)}),$}function k(S){if(S._status===-1){var q=S._result;q=q(),q.then(function(V){(S._status===0||S._status===-1)&&(S._status=1,S._result=V)},function(V){(S._status===0||S._status===-1)&&(S._status=2,S._result=V)}),S._status===-1&&(S._status=0,S._result=q)}if(S._status===1)return S._result.default;throw S._result}var ae=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ue={map:T,forEach:function(S,q,V){T(S,function(){q.apply(this,arguments)},V)},count:function(S){var q=0;return T(S,function(){q++}),q},toArray:function(S){return T(S,function(q){return q})||[]},only:function(S){if(!Pe(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return le.Activity=E,le.Children=ue,le.Component=K,le.Fragment=s,le.Profiler=m,le.PureComponent=X,le.StrictMode=r,le.Suspense=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(S){return G.H.useMemoCache(S)}},le.cache=function(S){return function(){return S.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(S,q,V){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var $=B({},S.props),te=S.key;if(q!=null)for(se in q.key!==void 0&&(te=""+q.key),q)!oe.call(q,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&q.ref===void 0||($[se]=q[se]);var se=arguments.length-2;if(se===1)$.children=V;else if(1<se){for(var be=Array(se),tt=0;tt<se;tt++)be[tt]=arguments[tt+2];$.children=be}return J(S.type,te,$)},le.createContext=function(S){return S={$$typeof:v,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},le.createElement=function(S,q,V){var $,te={},se=null;if(q!=null)for($ in q.key!==void 0&&(se=""+q.key),q)oe.call(q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(te[$]=q[$]);var be=arguments.length-2;if(be===1)te.children=V;else if(1<be){for(var tt=Array(be),Ue=0;Ue<be;Ue++)tt[Ue]=arguments[Ue+2];te.children=tt}if(S&&S.defaultProps)for($ in be=S.defaultProps,be)te[$]===void 0&&(te[$]=be[$]);return J(S,se,te)},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:j,render:S}},le.isValidElement=Pe,le.lazy=function(S){return{$$typeof:R,_payload:{_status:-1,_result:S},_init:k}},le.memo=function(S,q){return{$$typeof:p,type:S,compare:q===void 0?null:q}},le.startTransition=function(S){var q=G.T,V={};G.T=V;try{var $=S(),te=G.S;te!==null&&te(V,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Z,ae)}catch(se){ae(se)}finally{q!==null&&V.types!==null&&(q.types=V.types),G.T=q}},le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(S){return G.H.use(S)},le.useActionState=function(S,q,V){return G.H.useActionState(S,q,V)},le.useCallback=function(S,q){return G.H.useCallback(S,q)},le.useContext=function(S){return G.H.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S,q){return G.H.useDeferredValue(S,q)},le.useEffect=function(S,q){return G.H.useEffect(S,q)},le.useEffectEvent=function(S){return G.H.useEffectEvent(S)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(S,q,V){return G.H.useImperativeHandle(S,q,V)},le.useInsertionEffect=function(S,q){return G.H.useInsertionEffect(S,q)},le.useLayoutEffect=function(S,q){return G.H.useLayoutEffect(S,q)},le.useMemo=function(S,q){return G.H.useMemo(S,q)},le.useOptimistic=function(S,q){return G.H.useOptimistic(S,q)},le.useReducer=function(S,q,V){return G.H.useReducer(S,q,V)},le.useRef=function(S){return G.H.useRef(S)},le.useState=function(S){return G.H.useState(S)},le.useSyncExternalStore=function(S,q,V){return G.H.useSyncExternalStore(S,q,V)},le.useTransition=function(){return G.H.useTransition()},le.version="19.2.7",le}var ym;function to(){return ym||(ym=1,Gr.exports=O0()),Gr.exports}var b=to(),Xr={exports:{}},qn={},Qr={exports:{}},Zr={};var bm;function D0(){return bm||(bm=1,(function(u){function o(w,T){var k=w.length;w.push(T);e:for(;0<k;){var ae=k-1>>>1,ue=w[ae];if(0<m(ue,T))w[ae]=T,w[k]=ue,k=ae;else break e}}function s(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var T=w[0],k=w.pop();if(k!==T){w[0]=k;e:for(var ae=0,ue=w.length,S=ue>>>1;ae<S;){var q=2*(ae+1)-1,V=w[q],$=q+1,te=w[$];if(0>m(V,k))$<ue&&0>m(te,V)?(w[ae]=te,w[$]=k,ae=$):(w[ae]=V,w[q]=k,ae=q);else if($<ue&&0>m(te,k))w[ae]=te,w[$]=k,ae=$;else break e}}return T}function m(w,T){var k=w.sortIndex-T.sortIndex;return k!==0?k:w.id-T.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;u.unstable_now=function(){return h.now()}}else{var v=Date,j=v.now();u.unstable_now=function(){return v.now()-j}}var x=[],p=[],R=1,E=null,M=3,_=!1,D=!1,B=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function I(w){for(var T=s(p);T!==null;){if(T.callback===null)r(p);else if(T.startTime<=w)r(p),T.sortIndex=T.expirationTime,o(x,T);else break;T=s(p)}}function re(w){if(B=!1,I(w),!D)if(s(x)!==null)D=!0,Z||(Z=!0,Qe());else{var T=s(p);T!==null&&Oe(re,T.startTime-w)}}var Z=!1,G=-1,oe=5,J=-1;function ie(){return H?!0:!(u.unstable_now()-J<oe)}function Pe(){if(H=!1,Z){var w=u.unstable_now();J=w;var T=!0;try{e:{D=!1,B&&(B=!1,Q(G),G=-1),_=!0;var k=M;try{t:{for(I(w),E=s(x);E!==null&&!(E.expirationTime>w&&ie());){var ae=E.callback;if(typeof ae=="function"){E.callback=null,M=E.priorityLevel;var ue=ae(E.expirationTime<=w);if(w=u.unstable_now(),typeof ue=="function"){E.callback=ue,I(w),T=!0;break t}E===s(x)&&r(x),I(w)}else r(x);E=s(x)}if(E!==null)T=!0;else{var S=s(p);S!==null&&Oe(re,S.startTime-w),T=!1}}break e}finally{E=null,M=k,_=!1}T=void 0}}finally{T?Qe():Z=!1}}}var Qe;if(typeof X=="function")Qe=function(){X(Pe)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,at=ft.port2;ft.port1.onmessage=Pe,Qe=function(){at.postMessage(null)}}else Qe=function(){K(Pe,0)};function Oe(w,T){G=K(function(){w(u.unstable_now())},T)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(w){w.callback=null},u.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<w?Math.floor(1e3/w):5},u.unstable_getCurrentPriorityLevel=function(){return M},u.unstable_next=function(w){switch(M){case 1:case 2:case 3:var T=3;break;default:T=M}var k=M;M=T;try{return w()}finally{M=k}},u.unstable_requestPaint=function(){H=!0},u.unstable_runWithPriority=function(w,T){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var k=M;M=w;try{return T()}finally{M=k}},u.unstable_scheduleCallback=function(w,T,k){var ae=u.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ae+k:ae):k=ae,w){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=k+ue,w={id:R++,callback:T,priorityLevel:w,startTime:k,expirationTime:ue,sortIndex:-1},k>ae?(w.sortIndex=k,o(p,w),s(x)===null&&w===s(p)&&(B?(Q(G),G=-1):B=!0,Oe(re,k-ae))):(w.sortIndex=ue,o(x,w),D||_||(D=!0,Z||(Z=!0,Qe()))),w},u.unstable_shouldYield=ie,u.unstable_wrapCallback=function(w){var T=M;return function(){var k=M;M=T;try{return w.apply(this,arguments)}finally{M=k}}}})(Zr)),Zr}var xm;function M0(){return xm||(xm=1,Qr.exports=D0()),Qr.exports}var Vr={exports:{}},et={};var Sm;function U0(){if(Sm)return et;Sm=1;var u=to();function o(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)p+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(x,p,R){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:E==null?null:""+E,children:x,containerInfo:p,implementation:R}}var v=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,et.createPortal=function(x,p){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return h(x,p,null,R)},et.flushSync=function(x){var p=v.T,R=r.p;try{if(v.T=null,r.p=2,x)return x()}finally{v.T=p,r.p=R,r.d.f()}},et.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(x,p))},et.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},et.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var R=p.as,E=j(R,p.crossOrigin),M=typeof p.integrity=="string"?p.integrity:void 0,_=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;R==="style"?r.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:M,fetchPriority:_}):R==="script"&&r.d.X(x,{crossOrigin:E,integrity:M,fetchPriority:_,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},et.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var R=j(p.as,p.crossOrigin);r.d.M(x,{crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(x)},et.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var R=p.as,E=j(R,p.crossOrigin);r.d.L(x,R,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},et.preloadModule=function(x,p){if(typeof x=="string")if(p){var R=j(p.as,p.crossOrigin);r.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:R,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(x)},et.requestFormReset=function(x){r.d.r(x)},et.unstable_batchedUpdates=function(x,p){return x(p)},et.useFormState=function(x,p,R){return v.H.useFormState(x,p,R)},et.useFormStatus=function(){return v.H.useHostTransitionStatus()},et.version="19.2.7",et}var Em;function w0(){if(Em)return Vr.exports;Em=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Vr.exports=U0(),Vr.exports}var zm;function H0(){if(zm)return qn;zm=1;var u=M0(),o=to(),s=w0();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(h(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return x(n),e;if(i===a)return x(n),t;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,f=n.child;f;){if(f===l){c=!0,l=n,a=i;break}if(f===a){c=!0,a=n,l=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===l){c=!0,l=i,a=n;break}if(f===a){c=!0,a=i,l=n;break}f=f.sibling}if(!c)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,M=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=Pe&&e[Pe]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case K:return"Profiler";case H:return"StrictMode";case re:return"Suspense";case Z:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case X:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:at(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return at(e(t))}catch{}}return null}var Oe=Array.isArray,w=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},ae=[],ue=-1;function S(e){return{current:e}}function q(e){0>ue||(e.current=ae[ue],ae[ue]=null,ue--)}function V(e,t){ue++,ae[ue]=e.current,e.current=t}var $=S(null),te=S(null),se=S(null),be=S(null);function tt(e,t){switch(V(se,t),V(te,e),V($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bd(t),e=Yd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q($),V($,e)}function Ue(){q($),q(te),q(se)}function Va(e){e.memoizedState!==null&&V(be,e);var t=$.current,l=Yd(t,e.type);t!==l&&(V(te,e),V($,l))}function kn(e){te.current===e&&(q($),q(te)),be.current===e&&(q(be),wn._currentValue=k)}var Eu,mo;function Hl(e){if(Eu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Eu=t&&t[1]||"",mo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Eu+e+mo}var zu=!1;function Tu(e,t){if(!e||zu)return"";zu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(O){var C=O}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(O){C=O}e.call(Y.prototype)}}else{try{throw Error()}catch(O){C=O}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(O){if(O&&C&&typeof O.stack=="string")return[O.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var g=c.split(`
`),A=f.split(`
`);for(n=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(a===g.length||n===A.length)for(a=g.length-1,n=A.length-1;1<=a&&0<=n&&g[a]!==A[n];)n--;for(;1<=a&&0<=n;a--,n--)if(g[a]!==A[n]){if(a!==1||n!==1)do if(a--,n--,0>n||g[a]!==A[n]){var U=`
`+g[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=n);break}}}finally{zu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Hl(l):""}function uh(e,t){switch(e.tag){case 26:case 27:case 5:return Hl(e.type);case 16:return Hl("Lazy");case 13:return e.child!==t&&t!==null?Hl("Suspense Fallback"):Hl("Suspense");case 19:return Hl("SuspenseList");case 0:case 15:return Tu(e.type,!1);case 11:return Tu(e.type.render,!1);case 1:return Tu(e.type,!0);case 31:return Hl("Activity");default:return""}}function ho(e){try{var t="",l=null;do t+=uh(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ju=Object.prototype.hasOwnProperty,Nu=u.unstable_scheduleCallback,Au=u.unstable_cancelCallback,ch=u.unstable_shouldYield,rh=u.unstable_requestPaint,dt=u.unstable_now,oh=u.unstable_getCurrentPriorityLevel,po=u.unstable_ImmediatePriority,go=u.unstable_UserBlockingPriority,Jn=u.unstable_NormalPriority,sh=u.unstable_LowPriority,vo=u.unstable_IdlePriority,fh=u.log,dh=u.unstable_setDisableYieldValue,ka=null,mt=null;function sl(e){if(typeof fh=="function"&&dh(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ka,e)}catch{}}var ht=Math.clz32?Math.clz32:ph,mh=Math.log,hh=Math.LN2;function ph(e){return e>>>=0,e===0?32:31-(mh(e)/hh|0)|0}var Kn=256,$n=262144,Wn=4194304;function Ll(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=Ll(a):(c&=f,c!==0?n=Ll(c):l||(l=f&~e,l!==0&&(n=Ll(l))))):(f=a&~i,f!==0?n=Ll(f):c!==0?n=Ll(c):l||(l=a&~e,l!==0&&(n=Ll(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Ja(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var e=Wn;return Wn<<=1,(Wn&62914560)===0&&(Wn=4194304),e}function Ru(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ka(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vh(e,t,l,a,n,i){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,A=e.hiddenUpdates;for(l=c&~l;0<l;){var U=31-ht(l),Y=1<<U;f[U]=0,g[U]=-1;var C=A[U];if(C!==null)for(A[U]=null,U=0;U<C.length;U++){var O=C[U];O!==null&&(O.lane&=-536870913)}l&=~Y}a!==0&&bo(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function bo(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ht(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function xo(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ht(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function So(e,t){var l=t&-t;return l=(l&42)!==0?1:Cu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _u(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Eo(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:rm(e.type))}function zo(e,t){var l=T.p;try{return T.p=e,t()}finally{T.p=l}}var fl=Math.random().toString(36).slice(2),Ke="__reactFiber$"+fl,nt="__reactProps$"+fl,aa="__reactContainer$"+fl,Ou="__reactEvents$"+fl,yh="__reactListeners$"+fl,bh="__reactHandles$"+fl,To="__reactResources$"+fl,$a="__reactMarker$"+fl;function Du(e){delete e[Ke],delete e[nt],delete e[Ou],delete e[yh],delete e[bh]}function na(e){var t=e[Ke];if(t)return t;for(var l=e.parentNode;l;){if(t=l[aa]||l[Ke]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=kd(e);e!==null;){if(l=e[Ke])return l;e=kd(e)}return t}e=l,l=e.parentNode}return null}function ia(e){if(e=e[Ke]||e[aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ua(e){var t=e[To];return t||(t=e[To]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[$a]=!0}var jo=new Set,No={};function Bl(e,t){ca(e,t),ca(e+"Capture",t)}function ca(e,t){for(No[e]=t,e=0;e<t.length;e++)jo.add(t[e])}var xh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ao={},Ro={};function Sh(e){return ju.call(Ro,e)?!0:ju.call(Ao,e)?!1:xh.test(e)?Ro[e]=!0:(Ao[e]=!0,!1)}function In(e,t,l){if(Sh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Pn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Vt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Co(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eh(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mu(e){if(!e._valueTracker){var t=Co(e)?"checked":"value";e._valueTracker=Eh(e,t,""+e[t])}}function _o(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Co(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zh=/[\n"\\]/g;function Tt(e){return e.replace(zh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uu(e,t,l,a,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?wu(e,c,zt(t)):l!=null?wu(e,c,zt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+zt(f):e.removeAttribute("name")}function Oo(e,t,l,a,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Mu(e);return}l=l!=null?""+zt(l):"",t=t!=null?""+zt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Mu(e)}function wu(e,t,l){t==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ra(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+zt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Do(e,t,l){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+zt(l):""}function Mo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(r(92));if(Oe(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=zt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Mu(e)}function oa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Th=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Th.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function wo(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Uo(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Uo(e,i,t[i])}function Hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return Nh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var Lu=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,fa=null;function Ho(e){var t=ia(e);if(t&&(e=t.stateNode)){var l=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Uu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[nt]||null;if(!n)throw Error(r(90));Uu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&_o(a)}break e;case"textarea":Do(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ra(e,!!l.multiple,t,!1)}}}var Yu=!1;function Lo(e,t,l){if(Yu)return e(t,l);Yu=!0;try{var a=e(t);return a}finally{if(Yu=!1,(sa!==null||fa!==null)&&(Xi(),sa&&(t=sa,e=fa,fa=sa=null,Ho(t),e)))for(t=0;t<e.length;t++)Ho(e[t])}}function Fa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[nt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(Jt)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){qu=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{qu=!1}var dl=null,Gu=null,li=null;function Bo(){if(li)return li;var e,t=Gu,l=t.length,a,n="value"in dl?dl.value:dl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[i-a];a++);return li=n.slice(e,1<a?1-a:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Yo(){return!1}function it(e){function t(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:Yo,this.isPropagationStopped=Yo,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=it(Yl),Pa=E({},Yl,{view:0,detail:0}),Ah=it(Pa),Xu,Qu,en,ui=E({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&e.type==="mousemove"?(Xu=e.screenX-en.screenX,Qu=e.screenY-en.screenY):Qu=Xu=0,en=e),Xu)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),qo=it(ui),Rh=E({},ui,{dataTransfer:0}),Ch=it(Rh),_h=E({},Pa,{relatedTarget:0}),Zu=it(_h),Oh=E({},Yl,{animationName:0,elapsedTime:0,pseudoElement:0}),Dh=it(Oh),Mh=E({},Yl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uh=it(Mh),wh=E({},Yl,{data:0}),Go=it(wh),Hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bh[e])?!!t[e]:!1}function Vu(){return Yh}var qh=E({},Pa,{key:function(e){if(e.key){var t=Hh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gh=it(qh),Xh=E({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=it(Xh),Qh=E({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Zh=it(Qh),Vh=E({},Yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=it(Vh),Jh=E({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kh=it(Jh),$h=E({},Yl,{newState:0,oldState:0}),Wh=it($h),Fh=[9,13,27,32],ku=Jt&&"CompositionEvent"in window,tn=null;Jt&&"documentMode"in document&&(tn=document.documentMode);var Ih=Jt&&"TextEvent"in window&&!tn,Qo=Jt&&(!ku||tn&&8<tn&&11>=tn),Zo=" ",Vo=!1;function ko(e,t){switch(e){case"keyup":return Fh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var da=!1;function Ph(e,t){switch(e){case"compositionend":return Jo(t);case"keypress":return t.which!==32?null:(Vo=!0,Zo);case"textInput":return e=t.data,e===Zo&&Vo?null:e;default:return null}}function ep(e,t){if(da)return e==="compositionend"||!ku&&ko(e,t)?(e=Bo(),li=Gu=dl=null,da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qo&&t.locale!=="ko"?null:t.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tp[e.type]:t==="textarea"}function $o(e,t,l,a){sa?fa?fa.push(a):fa=[a]:sa=a,t=$i(t,"onChange"),0<t.length&&(l=new ii("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var ln=null,an=null;function lp(e){Dd(e,0)}function ci(e){var t=Wa(e);if(_o(t))return e}function Wo(e,t){if(e==="change")return t}var Fo=!1;if(Jt){var Ju;if(Jt){var Ku="oninput"in document;if(!Ku){var Io=document.createElement("div");Io.setAttribute("oninput","return;"),Ku=typeof Io.oninput=="function"}Ju=Ku}else Ju=!1;Fo=Ju&&(!document.documentMode||9<document.documentMode)}function Po(){ln&&(ln.detachEvent("onpropertychange",es),an=ln=null)}function es(e){if(e.propertyName==="value"&&ci(an)){var t=[];$o(t,an,e,Bu(e)),Lo(lp,t)}}function ap(e,t,l){e==="focusin"?(Po(),ln=t,an=l,ln.attachEvent("onpropertychange",es)):e==="focusout"&&Po()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(an)}function ip(e,t){if(e==="click")return ci(t)}function up(e,t){if(e==="input"||e==="change")return ci(t)}function cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:cp;function nn(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ju.call(t,n)||!pt(e[n],t[n]))return!1}return!0}function ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ls(e,t){var l=ts(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ts(l)}}function as(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?as(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ns(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ei(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var rp=Jt&&"documentMode"in document&&11>=document.documentMode,ma=null,Wu=null,un=null,Fu=!1;function is(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Fu||ma==null||ma!==ei(a)||(a=ma,"selectionStart"in a&&$u(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),un&&nn(un,a)||(un=a,a=$i(Wu,"onSelect"),0<a.length&&(t=new ii("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ma)))}function ql(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ha={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionrun:ql("Transition","TransitionRun"),transitionstart:ql("Transition","TransitionStart"),transitioncancel:ql("Transition","TransitionCancel"),transitionend:ql("Transition","TransitionEnd")},Iu={},us={};Jt&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function Gl(e){if(Iu[e])return Iu[e];if(!ha[e])return e;var t=ha[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in us)return Iu[e]=t[l];return e}var cs=Gl("animationend"),rs=Gl("animationiteration"),os=Gl("animationstart"),op=Gl("transitionrun"),sp=Gl("transitionstart"),fp=Gl("transitioncancel"),ss=Gl("transitionend"),fs=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ut(e,t){fs.set(e,t),Bl(t,[e])}var ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jt=[],pa=0,ec=0;function oi(){for(var e=pa,t=ec=pa=0;t<e;){var l=jt[t];jt[t++]=null;var a=jt[t];jt[t++]=null;var n=jt[t];jt[t++]=null;var i=jt[t];if(jt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&ds(l,n,i)}}function si(e,t,l,a){jt[pa++]=e,jt[pa++]=t,jt[pa++]=l,jt[pa++]=a,ec|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function tc(e,t,l,a){return si(e,t,l,a),fi(e)}function Xl(e,t){return si(e,null,null,t),fi(e)}function ds(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ht(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function fi(e){if(50<Rn)throw Rn=0,sr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ga={};function dp(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,l,a){return new dp(e,t,l,a)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var l=e.alternate;return l===null?(l=gt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ms(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,l,a,n,i){var c=0;if(a=e,typeof e=="function")lc(e)&&(c=1);else if(typeof e=="string")c=v0(e,l,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=gt(31,l,t,n),e.elementType=J,e.lanes=i,e;case B:return Ql(l.children,n,i,t);case H:c=8,n|=24;break;case K:return e=gt(12,l,t,n|2),e.elementType=K,e.lanes=i,e;case re:return e=gt(13,l,t,n),e.elementType=re,e.lanes=i,e;case Z:return e=gt(19,l,t,n),e.elementType=Z,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:c=10;break e;case Q:c=9;break e;case I:c=11;break e;case G:c=14;break e;case oe:c=16,a=null;break e}c=29,l=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=gt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Ql(e,t,l,a){return e=gt(7,e,a,t),e.lanes=l,e}function ac(e,t,l){return e=gt(6,e,null,t),e.lanes=l,e}function hs(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function nc(e,t,l){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ps=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var l=ps.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ho(t)},ps.set(e,t),t)}return{value:e,source:t,stack:ho(t)}}var va=[],ya=0,mi=null,cn=0,At=[],Rt=0,ml=null,qt=1,Gt="";function $t(e,t){va[ya++]=cn,va[ya++]=mi,mi=e,cn=t}function gs(e,t,l){At[Rt++]=qt,At[Rt++]=Gt,At[Rt++]=ml,ml=e;var a=qt;e=Gt;var n=32-ht(a)-1;a&=~(1<<n),l+=1;var i=32-ht(t)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,qt=1<<32-ht(t)+n|l<<n|a,Gt=i+e}else qt=1<<i|l<<n|a,Gt=e}function ic(e){e.return!==null&&($t(e,1),gs(e,1,0))}function uc(e){for(;e===mi;)mi=va[--ya],va[ya]=null,cn=va[--ya],va[ya]=null;for(;e===ml;)ml=At[--Rt],At[Rt]=null,Gt=At[--Rt],At[Rt]=null,qt=At[--Rt],At[Rt]=null}function vs(e,t){At[Rt++]=qt,At[Rt++]=Gt,At[Rt++]=ml,qt=t.id,Gt=t.overflow,ml=e}var $e=null,Ne=null,pe=!1,hl=null,Ct=!1,cc=Error(r(519));function pl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rn(Nt(t,e)),cc}function ys(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Ke]=e,t[nt]=a,l){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(l=0;l<_n.length;l++)de(_n[l],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),Oo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Mo(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Hd(t.textContent,l)?(a.popover!=null&&(de("beforetoggle",t),de("toggle",t)),a.onScroll!=null&&de("scroll",t),a.onScrollEnd!=null&&de("scrollend",t),a.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||pl(e,!0)}function bs(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:$e=$e.return}}function ba(e){if(e!==$e)return!1;if(!pe)return bs(e),pe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||jr(e.type,e.memoizedProps)),l=!l),l&&Ne&&pl(e),bs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ne=Vd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ne=Vd(e)}else t===27?(t=Ne,Cl(e.type)?(e=_r,_r=null,Ne=e):Ne=t):Ne=$e?Ot(e.stateNode.nextSibling):null;return!0}function Zl(){Ne=$e=null,pe=!1}function rc(){var e=hl;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),hl=null),e}function rn(e){hl===null?hl=[e]:hl.push(e)}var oc=S(null),Vl=null,Wt=null;function gl(e,t,l){V(oc,t._currentValue),t._currentValue=l}function Ft(e){e._currentValue=oc.current,q(oc)}function sc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function fc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var g=0;g<t.length;g++)if(f.context===t[g]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),sc(i.return,l,e),a||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),sc(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function xa(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var f=n.type;pt(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===be.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(wn):e=[wn])}n=n.return}e!==null&&fc(t,e,l,a),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kl(e){Vl=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return xs(Vl,e)}function pi(e,t){return Vl===null&&kl(e),xs(e,t)}function xs(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Wt===null){if(e===null)throw Error(r(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return l}var mp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},hp=u.unstable_scheduleCallback,pp=u.unstable_NormalPriority,Be={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dc(){return{controller:new mp,data:new Map,refCount:0}}function on(e){e.refCount--,e.refCount===0&&hp(pp,function(){e.controller.abort()})}var sn=null,mc=0,Sa=0,Ea=null;function gp(e,t){if(sn===null){var l=sn=[];mc=0,Sa=gr(),Ea={status:"pending",value:void 0,then:function(a){l.push(a)}}}return mc++,t.then(Ss,Ss),t}function Ss(){if(--mc===0&&sn!==null){Ea!==null&&(Ea.status="fulfilled");var e=sn;sn=null,Sa=0,Ea=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function vp(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Es=w.S;w.S=function(e,t){ud=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gp(e,t),Es!==null&&Es(e,t)};var Jl=S(null);function hc(){var e=Jl.current;return e!==null?e:je.pooledCache}function gi(e,t){t===null?V(Jl,Jl.current):V(Jl,t.pool)}function zs(){var e=hc();return e===null?null:{parent:Be._currentValue,pool:e}}var za=Error(r(460)),pc=Error(r(474)),vi=Error(r(542)),yi={then:function(){}};function Ts(e){return e=e.status,e==="fulfilled"||e==="rejected"}function js(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(kt,kt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,As(e),e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,As(e),e}throw $l=t,za}}function Kl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?($l=l,za):l}}var $l=null;function Ns(){if($l===null)throw Error(r(459));var e=$l;return $l=null,e}function As(e){if(e===za||e===vi)throw Error(r(483))}var Ta=null,fn=0;function bi(e){var t=fn;return fn+=1,Ta===null&&(Ta=[]),js(Ta,e,t)}function dn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===M?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rs(e){function t(z,y){if(e){var N=z.deletions;N===null?(z.deletions=[y],z.flags|=16):N.push(y)}}function l(z,y){if(!e)return null;for(;y!==null;)t(z,y),y=y.sibling;return null}function a(z){for(var y=new Map;z!==null;)z.key!==null?y.set(z.key,z):y.set(z.index,z),z=z.sibling;return y}function n(z,y){return z=Kt(z,y),z.index=0,z.sibling=null,z}function i(z,y,N){return z.index=N,e?(N=z.alternate,N!==null?(N=N.index,N<y?(z.flags|=67108866,y):N):(z.flags|=67108866,y)):(z.flags|=1048576,y)}function c(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function f(z,y,N,L){return y===null||y.tag!==6?(y=ac(N,z.mode,L),y.return=z,y):(y=n(y,N),y.return=z,y)}function g(z,y,N,L){var P=N.type;return P===B?U(z,y,N.props.children,L,N.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===oe&&Kl(P)===y.type)?(y=n(y,N.props),dn(y,N),y.return=z,y):(y=di(N.type,N.key,N.props,null,z.mode,L),dn(y,N),y.return=z,y)}function A(z,y,N,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==N.containerInfo||y.stateNode.implementation!==N.implementation?(y=nc(N,z.mode,L),y.return=z,y):(y=n(y,N.children||[]),y.return=z,y)}function U(z,y,N,L,P){return y===null||y.tag!==7?(y=Ql(N,z.mode,L,P),y.return=z,y):(y=n(y,N),y.return=z,y)}function Y(z,y,N){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ac(""+y,z.mode,N),y.return=z,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _:return N=di(y.type,y.key,y.props,null,z.mode,N),dn(N,y),N.return=z,N;case D:return y=nc(y,z.mode,N),y.return=z,y;case oe:return y=Kl(y),Y(z,y,N)}if(Oe(y)||Qe(y))return y=Ql(y,z.mode,N,null),y.return=z,y;if(typeof y.then=="function")return Y(z,bi(y),N);if(y.$$typeof===X)return Y(z,pi(z,y),N);xi(z,y)}return null}function C(z,y,N,L){var P=y!==null?y.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return P!==null?null:f(z,y,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return N.key===P?g(z,y,N,L):null;case D:return N.key===P?A(z,y,N,L):null;case oe:return N=Kl(N),C(z,y,N,L)}if(Oe(N)||Qe(N))return P!==null?null:U(z,y,N,L,null);if(typeof N.then=="function")return C(z,y,bi(N),L);if(N.$$typeof===X)return C(z,y,pi(z,N),L);xi(z,N)}return null}function O(z,y,N,L,P){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return z=z.get(N)||null,f(y,z,""+L,P);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _:return z=z.get(L.key===null?N:L.key)||null,g(y,z,L,P);case D:return z=z.get(L.key===null?N:L.key)||null,A(y,z,L,P);case oe:return L=Kl(L),O(z,y,N,L,P)}if(Oe(L)||Qe(L))return z=z.get(N)||null,U(y,z,L,P,null);if(typeof L.then=="function")return O(z,y,N,bi(L),P);if(L.$$typeof===X)return O(z,y,N,pi(y,L),P);xi(y,L)}return null}function W(z,y,N,L){for(var P=null,ge=null,F=y,ce=y=0,he=null;F!==null&&ce<N.length;ce++){F.index>ce?(he=F,F=null):he=F.sibling;var ve=C(z,F,N[ce],L);if(ve===null){F===null&&(F=he);break}e&&F&&ve.alternate===null&&t(z,F),y=i(ve,y,ce),ge===null?P=ve:ge.sibling=ve,ge=ve,F=he}if(ce===N.length)return l(z,F),pe&&$t(z,ce),P;if(F===null){for(;ce<N.length;ce++)F=Y(z,N[ce],L),F!==null&&(y=i(F,y,ce),ge===null?P=F:ge.sibling=F,ge=F);return pe&&$t(z,ce),P}for(F=a(F);ce<N.length;ce++)he=O(F,z,ce,N[ce],L),he!==null&&(e&&he.alternate!==null&&F.delete(he.key===null?ce:he.key),y=i(he,y,ce),ge===null?P=he:ge.sibling=he,ge=he);return e&&F.forEach(function(Ul){return t(z,Ul)}),pe&&$t(z,ce),P}function ee(z,y,N,L){if(N==null)throw Error(r(151));for(var P=null,ge=null,F=y,ce=y=0,he=null,ve=N.next();F!==null&&!ve.done;ce++,ve=N.next()){F.index>ce?(he=F,F=null):he=F.sibling;var Ul=C(z,F,ve.value,L);if(Ul===null){F===null&&(F=he);break}e&&F&&Ul.alternate===null&&t(z,F),y=i(Ul,y,ce),ge===null?P=Ul:ge.sibling=Ul,ge=Ul,F=he}if(ve.done)return l(z,F),pe&&$t(z,ce),P;if(F===null){for(;!ve.done;ce++,ve=N.next())ve=Y(z,ve.value,L),ve!==null&&(y=i(ve,y,ce),ge===null?P=ve:ge.sibling=ve,ge=ve);return pe&&$t(z,ce),P}for(F=a(F);!ve.done;ce++,ve=N.next())ve=O(F,z,ce,ve.value,L),ve!==null&&(e&&ve.alternate!==null&&F.delete(ve.key===null?ce:ve.key),y=i(ve,y,ce),ge===null?P=ve:ge.sibling=ve,ge=ve);return e&&F.forEach(function(R0){return t(z,R0)}),pe&&$t(z,ce),P}function Te(z,y,N,L){if(typeof N=="object"&&N!==null&&N.type===B&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case _:e:{for(var P=N.key;y!==null;){if(y.key===P){if(P=N.type,P===B){if(y.tag===7){l(z,y.sibling),L=n(y,N.props.children),L.return=z,z=L;break e}}else if(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===oe&&Kl(P)===y.type){l(z,y.sibling),L=n(y,N.props),dn(L,N),L.return=z,z=L;break e}l(z,y);break}else t(z,y);y=y.sibling}N.type===B?(L=Ql(N.props.children,z.mode,L,N.key),L.return=z,z=L):(L=di(N.type,N.key,N.props,null,z.mode,L),dn(L,N),L.return=z,z=L)}return c(z);case D:e:{for(P=N.key;y!==null;){if(y.key===P)if(y.tag===4&&y.stateNode.containerInfo===N.containerInfo&&y.stateNode.implementation===N.implementation){l(z,y.sibling),L=n(y,N.children||[]),L.return=z,z=L;break e}else{l(z,y);break}else t(z,y);y=y.sibling}L=nc(N,z.mode,L),L.return=z,z=L}return c(z);case oe:return N=Kl(N),Te(z,y,N,L)}if(Oe(N))return W(z,y,N,L);if(Qe(N)){if(P=Qe(N),typeof P!="function")throw Error(r(150));return N=P.call(N),ee(z,y,N,L)}if(typeof N.then=="function")return Te(z,y,bi(N),L);if(N.$$typeof===X)return Te(z,y,pi(z,N),L);xi(z,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,y!==null&&y.tag===6?(l(z,y.sibling),L=n(y,N),L.return=z,z=L):(l(z,y),L=ac(N,z.mode,L),L.return=z,z=L),c(z)):l(z,y)}return function(z,y,N,L){try{fn=0;var P=Te(z,y,N,L);return Ta=null,P}catch(F){if(F===za||F===vi)throw F;var ge=gt(29,F,null,z.mode);return ge.lanes=L,ge.return=z,ge}}}var Wl=Rs(!0),Cs=Rs(!1),vl=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=fi(e),ds(e,null,l),t}return si(e,a,t,l),fi(e)}function mn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,xo(e,l)}}function yc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var bc=!1;function hn(){if(bc){var e=Ea;if(e!==null)throw e}}function pn(e,t,l,a){bc=!1;var n=e.updateQueue;vl=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var g=f,A=g.next;g.next=null,c===null?i=A:c.next=A,c=g;var U=e.alternate;U!==null&&(U=U.updateQueue,f=U.lastBaseUpdate,f!==c&&(f===null?U.firstBaseUpdate=A:f.next=A,U.lastBaseUpdate=g))}if(i!==null){var Y=n.baseState;c=0,U=A=g=null,f=i;do{var C=f.lane&-536870913,O=C!==f.lane;if(O?(me&C)===C:(a&C)===C){C!==0&&C===Sa&&(bc=!0),U!==null&&(U=U.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var W=e,ee=f;C=t;var Te=l;switch(ee.tag){case 1:if(W=ee.payload,typeof W=="function"){Y=W.call(Te,Y,C);break e}Y=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ee.payload,C=typeof W=="function"?W.call(Te,Y,C):W,C==null)break e;Y=E({},Y,C);break e;case 2:vl=!0}}C=f.callback,C!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[C]:O.push(C))}else O={lane:C,tag:f.tag,payload:f.payload,callback:f.callback,next:null},U===null?(A=U=O,g=Y):U=U.next=O,c|=C;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;O=f,f=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);U===null&&(g=Y),n.baseState=g,n.firstBaseUpdate=A,n.lastBaseUpdate=U,i===null&&(n.shared.lanes=0),Tl|=c,e.lanes=c,e.memoizedState=Y}}function _s(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Os(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)_s(l[e],t)}var ja=S(null),Si=S(0);function Ds(e,t){e=ul,V(Si,e),V(ja,t),ul=e|t.baseLanes}function xc(){V(Si,ul),V(ja,ja.current)}function Sc(){ul=Si.current,q(ja),q(Si)}var vt=S(null),_t=null;function xl(e){var t=e.alternate;V(we,we.current&1),V(vt,e),_t===null&&(t===null||ja.current!==null||t.memoizedState!==null)&&(_t=e)}function Ec(e){V(we,we.current),V(vt,e),_t===null&&(_t=e)}function Ms(e){e.tag===22?(V(we,we.current),V(vt,e),_t===null&&(_t=e)):Sl()}function Sl(){V(we,we.current),V(vt,vt.current)}function yt(e){q(vt),_t===e&&(_t=null),q(we)}var we=S(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Rr(l)||Cr(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ne=null,Ee=null,Ye=null,zi=!1,Na=!1,Fl=!1,Ti=0,gn=0,Aa=null,yp=0;function De(){throw Error(r(321))}function zc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!pt(e[l],t[l]))return!1;return!0}function Tc(e,t,l,a,n,i){return It=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?vf:Yc,Fl=!1,i=l(a,n),Fl=!1,Na&&(i=ws(t,l,a,n)),Us(e),i}function Us(e){w.H=bn;var t=Ee!==null&&Ee.next!==null;if(It=0,Ye=Ee=ne=null,zi=!1,gn=0,Aa=null,t)throw Error(r(300));e===null||qe||(e=e.dependencies,e!==null&&hi(e)&&(qe=!0))}function ws(e,t,l,a){ne=e;var n=0;do{if(Na&&(Aa=null),gn=0,Na=!1,25<=n)throw Error(r(301));if(n+=1,Ye=Ee=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=yf,i=t(l,a)}while(Na);return i}function bp(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?vn(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ne.flags|=1024),t}function jc(){var e=Ti!==0;return Ti=0,e}function Nc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ac(e){if(zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zi=!1}It=0,Ye=Ee=ne=null,Na=!1,gn=Ti=0,Aa=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ne.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function He(){if(Ee===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ye===null?ne.memoizedState:Ye.next;if(t!==null)Ye=t,Ee=e;else{if(e===null)throw ne.alternate===null?Error(r(467)):Error(r(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ye===null?ne.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vn(e){var t=gn;return gn+=1,Aa===null&&(Aa=[]),e=js(Aa,e,t),t=ne,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?vf:Yc),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vn(e);if(e.$$typeof===X)return We(e)}throw Error(r(438,String(e)))}function Rc(e){var t=null,l=ne.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ne.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ji(),ne.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=ie;return t.index++,l}function Pt(e,t){return typeof t=="function"?t(e):t}function Ai(e){var t=He();return Cc(t,Ee,e)}function Cc(e,t,l){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,g=null,A=t,U=!1;do{var Y=A.lane&-536870913;if(Y!==A.lane?(me&Y)===Y:(It&Y)===Y){var C=A.revertLane;if(C===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),Y===Sa&&(U=!0);else if((It&C)===C){A=A.next,C===Sa&&(U=!0);continue}else Y={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(f=g=Y,c=i):g=g.next=Y,ne.lanes|=C,Tl|=C;Y=A.action,Fl&&l(i,Y),i=A.hasEagerState?A.eagerState:l(i,Y)}else C={lane:Y,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(f=g=C,c=i):g=g.next=C,ne.lanes|=Y,Tl|=Y;A=A.next}while(A!==null&&A!==t);if(g===null?c=i:g.next=f,!pt(i,e.memoizedState)&&(qe=!0,U&&(l=Ea,l!==null)))throw l;e.memoizedState=i,e.baseState=c,e.baseQueue=g,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function _c(e){var t=He(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);pt(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Hs(e,t,l){var a=ne,n=He(),i=pe;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=t();var c=!pt((Ee||n).memoizedState,l);if(c&&(n.memoizedState=l,qe=!0),n=n.queue,Mc(Ys.bind(null,a,n,e),[e]),n.getSnapshot!==t||c||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ra(9,{destroy:void 0},Bs.bind(null,a,n,l,t),null),je===null)throw Error(r(349));i||(It&127)!==0||Ls(a,t,l)}return l}function Ls(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ne.updateQueue,t===null?(t=ji(),ne.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Bs(e,t,l,a){t.value=l,t.getSnapshot=a,qs(t)&&Gs(e)}function Ys(e,t,l){return l(function(){qs(t)&&Gs(e)})}function qs(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!pt(e,l)}catch{return!0}}function Gs(e){var t=Xl(e,2);t!==null&&st(t,e,2)}function Oc(e){var t=lt();if(typeof e=="function"){var l=e;if(e=l(),Fl){sl(!0);try{l()}finally{sl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Xs(e,t,l,a){return e.baseState=l,Cc(e,Ee,typeof a=="function"?a:Pt)}function xp(e,t,l,a,n){if(_i(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};w.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Qs(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Qs(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=w.T,c={};w.T=c;try{var f=l(n,a),g=w.S;g!==null&&g(c,f),Zs(e,t,f)}catch(A){Dc(e,t,A)}finally{i!==null&&c.types!==null&&(i.types=c.types),w.T=i}}else try{i=l(n,a),Zs(e,t,i)}catch(A){Dc(e,t,A)}}function Zs(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Vs(e,t,a)},function(a){return Dc(e,t,a)}):Vs(e,t,l)}function Vs(e,t,l){t.status="fulfilled",t.value=l,ks(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Qs(e,l)))}function Dc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,ks(t),t=t.next;while(t!==a)}e.action=null}function ks(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Js(e,t){return t}function Ks(e,t){if(pe){var l=je.formState;if(l!==null){e:{var a=ne;if(pe){if(Ne){t:{for(var n=Ne,i=Ct;n.nodeType!==8;){if(!i){n=null;break t}if(n=Ot(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ne=Ot(n.nextSibling),a=n.data==="F!";break e}}pl(a)}a=!1}a&&(t=l[0])}}return l=lt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:t},l.queue=a,l=hf.bind(null,ne,a),a.dispatch=l,a=Oc(!1),i=Bc.bind(null,ne,!1,a.queue),a=lt(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=xp.bind(null,ne,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function $s(e){var t=He();return Ws(t,Ee,e)}function Ws(e,t,l){if(t=Cc(e,t,Js)[0],e=Ai(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=vn(t)}catch(c){throw c===za?vi:c}else a=t;t=He();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(ne.flags|=2048,Ra(9,{destroy:void 0},Sp.bind(null,n,l),null)),[a,i,e]}function Sp(e,t){e.action=t}function Fs(e){var t=He(),l=Ee;if(l!==null)return Ws(t,l,e);He(),t=t.memoizedState,l=He();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ra(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ne.updateQueue,t===null&&(t=ji(),ne.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Is(){return He().memoizedState}function Ri(e,t,l,a){var n=lt();ne.flags|=e,n.memoizedState=Ra(1|t,{destroy:void 0},l,a===void 0?null:a)}function Ci(e,t,l,a){var n=He();a=a===void 0?null:a;var i=n.memoizedState.inst;Ee!==null&&a!==null&&zc(a,Ee.memoizedState.deps)?n.memoizedState=Ra(t,i,l,a):(ne.flags|=e,n.memoizedState=Ra(1|t,i,l,a))}function Ps(e,t){Ri(8390656,8,e,t)}function Mc(e,t){Ci(2048,8,e,t)}function Ep(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=ji(),ne.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ef(e){var t=He().memoizedState;return Ep({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function tf(e,t){return Ci(4,2,e,t)}function lf(e,t){return Ci(4,4,e,t)}function af(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nf(e,t,l){l=l!=null?l.concat([e]):null,Ci(4,4,af.bind(null,t,e),l)}function Uc(){}function uf(e,t){var l=He();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&zc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function cf(e,t){var l=He();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&zc(t,a[1]))return a[0];if(a=e(),Fl){sl(!0);try{e()}finally{sl(!1)}}return l.memoizedState=[a,t],a}function wc(e,t,l){return l===void 0||(It&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=rd(),ne.lanes|=e,Tl|=e,l)}function rf(e,t,l,a){return pt(l,t)?l:ja.current!==null?(e=wc(e,l,a),pt(e,t)||(qe=!0),e):(It&42)===0||(It&1073741824)!==0&&(me&261930)===0?(qe=!0,e.memoizedState=l):(e=rd(),ne.lanes|=e,Tl|=e,t)}function of(e,t,l,a,n){var i=T.p;T.p=i!==0&&8>i?i:8;var c=w.T,f={};w.T=f,Bc(e,!1,t,l);try{var g=n(),A=w.S;if(A!==null&&A(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var U=vp(g,a);yn(e,t,U,St(e))}else yn(e,t,a,St(e))}catch(Y){yn(e,t,{then:function(){},status:"rejected",reason:Y},St())}finally{T.p=i,c!==null&&f.types!==null&&(c.types=f.types),w.T=c}}function zp(){}function Hc(e,t,l,a){if(e.tag!==5)throw Error(r(476));var n=sf(e).queue;of(e,n,t,k,l===null?zp:function(){return ff(e),l(a)})}function sf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:k},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ff(e){var t=sf(e);t.next===null&&(t=e.alternate.memoizedState),yn(e,t.next.queue,{},St())}function Lc(){return We(wn)}function df(){return He().memoizedState}function mf(){return He().memoizedState}function Tp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=St();e=yl(l);var a=bl(t,e,l);a!==null&&(st(a,t,l),mn(a,t,l)),t={cache:dc()},e.payload=t;return}t=t.return}}function jp(e,t,l){var a=St();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_i(e)?pf(t,l):(l=tc(e,t,l,a),l!==null&&(st(l,e,a),gf(l,t,a)))}function hf(e,t,l){var a=St();yn(e,t,l,a)}function yn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(_i(e))pf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,l);if(n.hasEagerState=!0,n.eagerState=f,pt(f,c))return si(e,t,n,0),je===null&&oi(),!1}catch{}if(l=tc(e,t,n,a),l!==null)return st(l,e,a),gf(l,t,a),!0}return!1}function Bc(e,t,l,a){if(a={lane:2,revertLane:gr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(e)){if(t)throw Error(r(479))}else t=tc(e,l,a,2),t!==null&&st(t,e,2)}function _i(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function pf(e,t){Na=zi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function gf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,xo(e,l)}}var bn={readContext:We,use:Ni,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};bn.useEffectEvent=De;var vf={readContext:We,use:Ni,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Ps,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ri(4194308,4,af.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){Ri(4,2,e,t)},useMemo:function(e,t){var l=lt();t=t===void 0?null:t;var a=e();if(Fl){sl(!0);try{e()}finally{sl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=lt();if(l!==void 0){var n=l(t);if(Fl){sl(!0);try{l(t)}finally{sl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=jp.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=Oc(e);var t=e.queue,l=hf.bind(null,ne,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Uc,useDeferredValue:function(e,t){var l=lt();return wc(l,e,t)},useTransition:function(){var e=Oc(!1);return e=of.bind(null,ne,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ne,n=lt();if(pe){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),je===null)throw Error(r(349));(me&127)!==0||Ls(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Ps(Ys.bind(null,a,i,e),[e]),a.flags|=2048,Ra(9,{destroy:void 0},Bs.bind(null,a,i,l,t),null),l},useId:function(){var e=lt(),t=je.identifierPrefix;if(pe){var l=Gt,a=qt;l=(a&~(1<<32-ht(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ti++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=yp++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lc,useFormState:Ks,useActionState:Ks,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Bc.bind(null,ne,!0,l),l.dispatch=t,[e,t]},useMemoCache:Rc,useCacheRefresh:function(){return lt().memoizedState=Tp.bind(null,ne)},useEffectEvent:function(e){var t=lt(),l={impl:e};return t.memoizedState=l,function(){if((ye&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},Yc={readContext:We,use:Ni,useCallback:uf,useContext:We,useEffect:Mc,useImperativeHandle:nf,useInsertionEffect:tf,useLayoutEffect:lf,useMemo:cf,useReducer:Ai,useRef:Is,useState:function(){return Ai(Pt)},useDebugValue:Uc,useDeferredValue:function(e,t){var l=He();return rf(l,Ee.memoizedState,e,t)},useTransition:function(){var e=Ai(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:vn(e),t]},useSyncExternalStore:Hs,useId:df,useHostTransitionStatus:Lc,useFormState:$s,useActionState:$s,useOptimistic:function(e,t){var l=He();return Xs(l,Ee,e,t)},useMemoCache:Rc,useCacheRefresh:mf};Yc.useEffectEvent=ef;var yf={readContext:We,use:Ni,useCallback:uf,useContext:We,useEffect:Mc,useImperativeHandle:nf,useInsertionEffect:tf,useLayoutEffect:lf,useMemo:cf,useReducer:_c,useRef:Is,useState:function(){return _c(Pt)},useDebugValue:Uc,useDeferredValue:function(e,t){var l=He();return Ee===null?wc(l,e,t):rf(l,Ee.memoizedState,e,t)},useTransition:function(){var e=_c(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:vn(e),t]},useSyncExternalStore:Hs,useId:df,useHostTransitionStatus:Lc,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){var l=He();return Ee!==null?Xs(l,Ee,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Rc,useCacheRefresh:mf};yf.useEffectEvent=ef;function qc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:E({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Gc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=St(),n=yl(a);n.payload=t,l!=null&&(n.callback=l),t=bl(e,n,a),t!==null&&(st(t,e,a),mn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=St(),n=yl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=bl(e,n,a),t!==null&&(st(t,e,a),mn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=St(),a=yl(l);a.tag=2,t!=null&&(a.callback=t),t=bl(e,a,l),t!==null&&(st(t,e,l),mn(t,e,l))}};function bf(e,t,l,a,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!nn(l,a)||!nn(n,i):!0}function xf(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Gc.enqueueReplaceState(t,t.state,null)}function Il(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=E({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Sf(e){ri(e)}function Ef(e){console.error(e)}function zf(e){ri(e)}function Oi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Tf(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Xc(e,t,l){return l=yl(l),l.tag=3,l.payload={element:null},l.callback=function(){Oi(e,t)},l}function jf(e){return e=yl(e),e.tag=3,e}function Nf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Tf(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Tf(t,l,a),typeof n!="function"&&(jl===null?jl=new Set([this]):jl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Np(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&xa(t,l,n,!0),l=vt.current,l!==null){switch(l.tag){case 31:case 13:return _t===null?Qi():l.alternate===null&&Me===0&&(Me=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===yi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),mr(e,a,n)),!1;case 22:return l.flags|=65536,a===yi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),mr(e,a,n)),!1}throw Error(r(435,l.tag))}return mr(e,a,n),Qi(),!1}if(pe)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==cc&&(e=Error(r(422),{cause:a}),rn(Nt(e,l)))):(a!==cc&&(t=Error(r(423),{cause:a}),rn(Nt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Nt(a,l),n=Xc(e.stateNode,a,n),yc(e,n),Me!==4&&(Me=2)),!1;var i=Error(r(520),{cause:a});if(i=Nt(i,l),An===null?An=[i]:An.push(i),Me!==4&&(Me=2),t===null)return!0;a=Nt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Xc(l.stateNode,a,e),yc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(jl===null||!jl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=jf(n),Nf(n,e,l,a),yc(l,n),!1}l=l.return}while(l!==null);return!1}var Qc=Error(r(461)),qe=!1;function Fe(e,t,l,a){t.child=e===null?Cs(t,null,l,a):Wl(t,e.child,l,a)}function Af(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return kl(t),a=Tc(e,t,l,c,i,n),f=jc(),e!==null&&!qe?(Nc(e,t,n),el(e,t,n)):(pe&&f&&ic(t),t.flags|=1,Fe(e,t,a,n),t.child)}function Rf(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!lc(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,Cf(e,t,i,a,n)):(e=di(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Fc(e,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:nn,l(c,a)&&e.ref===t.ref)return el(e,t,n)}return t.flags|=1,e=Kt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(nn(i,a)&&e.ref===t.ref)if(qe=!1,t.pendingProps=a=i,Fc(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,el(e,t,n)}return Zc(e,t,l,a,n)}function _f(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Of(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gi(t,i!==null?i.cachePool:null),i!==null?Ds(t,i):xc(),Ms(t);else return a=t.lanes=536870912,Of(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(gi(t,i.cachePool),Ds(t,i),Sl(),t.memoizedState=null):(e!==null&&gi(t,null),xc(),Sl());return Fe(e,t,n,l),t.child}function xn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Of(e,t,l,a,n){var i=hc();return i=i===null?null:{parent:Be._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&gi(t,null),xc(),Ms(t),e!==null&&xa(e,t,a,!0),t.childLanes=n,null}function Di(e,t){return t=Ui({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Df(e,t,l){return Wl(t,e.child,null,l),e=Di(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function Ap(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(pe){if(a.mode==="hidden")return e=Di(t,a),t.lanes=536870912,xn(null,e);if(Ec(t),(e=Ne)?(e=Zd(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ml!==null?{id:qt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},l=hs(e),l.return=t,t.child=l,$e=t,Ne=null)):e=null,e===null)throw pl(t);return t.lanes=536870912,null}return Di(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Ec(t),n)if(t.flags&256)t.flags&=-257,t=Df(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(qe||xa(e,t,l,!1),n=(l&e.childLanes)!==0,qe||n){if(a=je,a!==null&&(c=So(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,Xl(e,c),st(a,e,c),Qc;Qi(),t=Df(e,t,l)}else e=i.treeContext,Ne=Ot(c.nextSibling),$e=t,pe=!0,hl=null,Ct=!1,e!==null&&vs(t,e),t=Di(t,a),t.flags|=4096;return t}return e=Kt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Mi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Zc(e,t,l,a,n){return kl(t),l=Tc(e,t,l,a,void 0,n),a=jc(),e!==null&&!qe?(Nc(e,t,n),el(e,t,n)):(pe&&a&&ic(t),t.flags|=1,Fe(e,t,l,n),t.child)}function Mf(e,t,l,a,n,i){return kl(t),t.updateQueue=null,l=ws(t,a,l,n),Us(e),a=jc(),e!==null&&!qe?(Nc(e,t,i),el(e,t,i)):(pe&&a&&ic(t),t.flags|=1,Fe(e,t,l,i),t.child)}function Uf(e,t,l,a,n){if(kl(t),t.stateNode===null){var i=ga,c=l.contextType;typeof c=="object"&&c!==null&&(i=We(c)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Gc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},gc(t),c=l.contextType,i.context=typeof c=="object"&&c!==null?We(c):ga,i.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(qc(t,l,c,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Gc.enqueueReplaceState(i,i.state,null),pn(t,a,i,n),hn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,g=Il(l,f);i.props=g;var A=i.context,U=l.contextType;c=ga,typeof U=="object"&&U!==null&&(c=We(U));var Y=l.getDerivedStateFromProps;U=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||A!==c)&&xf(t,i,a,c),vl=!1;var C=t.memoizedState;i.state=C,pn(t,a,i,n),hn(),A=t.memoizedState,f||C!==A||vl?(typeof Y=="function"&&(qc(t,l,Y,a),A=t.memoizedState),(g=vl||bf(t,l,g,a,C,A,c))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=c,a=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,vc(e,t),c=t.memoizedProps,U=Il(l,c),i.props=U,Y=t.pendingProps,C=i.context,A=l.contextType,g=ga,typeof A=="object"&&A!==null&&(g=We(A)),f=l.getDerivedStateFromProps,(A=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==Y||C!==g)&&xf(t,i,a,g),vl=!1,C=t.memoizedState,i.state=C,pn(t,a,i,n),hn();var O=t.memoizedState;c!==Y||C!==O||vl||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof f=="function"&&(qc(t,l,f,a),O=t.memoizedState),(U=vl||bf(t,l,U,a,C,O,g)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,O,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,O,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),i.props=a,i.state=O,i.context=g,a=U):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Mi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Wl(t,e.child,null,n),t.child=Wl(t,null,l,n)):Fe(e,t,l,n),t.memoizedState=i.state,e=t.child):e=el(e,t,n),e}function wf(e,t,l,a){return Zl(),t.flags|=256,Fe(e,t,l,a),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kc(e){return{baseLanes:e,cachePool:zs()}}function Jc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=xt),e}function Hf(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(pe){if(n?xl(t):Sl(),(e=Ne)?(e=Zd(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ml!==null?{id:qt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},l=hs(e),l.return=t,t.child=l,$e=t,Ne=null)):e=null,e===null)throw pl(t);return Cr(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(Sl(),n=t.mode,f=Ui({mode:"hidden",children:f},n),a=Ql(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=kc(l),a.childLanes=Jc(e,c,l),t.memoizedState=Vc,xn(null,a)):(xl(t),Kc(t,f))}var g=e.memoizedState;if(g!==null&&(f=g.dehydrated,f!==null)){if(i)t.flags&256?(xl(t),t.flags&=-257,t=$c(e,t,l)):t.memoizedState!==null?(Sl(),t.child=e.child,t.flags|=128,t=null):(Sl(),f=a.fallback,n=t.mode,a=Ui({mode:"visible",children:a.children},n),f=Ql(f,n,l,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,Wl(t,e.child,null,l),a=t.child,a.memoizedState=kc(l),a.childLanes=Jc(e,c,l),t.memoizedState=Vc,t=xn(null,a));else if(xl(t),Cr(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;c=A,a=Error(r(419)),a.stack="",a.digest=c,rn({value:a,source:null,stack:null}),t=$c(e,t,l)}else if(qe||xa(e,t,l,!1),c=(l&e.childLanes)!==0,qe||c){if(c=je,c!==null&&(a=So(c,l),a!==0&&a!==g.retryLane))throw g.retryLane=a,Xl(e,a),st(c,e,a),Qc;Rr(f)||Qi(),t=$c(e,t,l)}else Rr(f)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ne=Ot(f.nextSibling),$e=t,pe=!0,hl=null,Ct=!1,e!==null&&vs(t,e),t=Kc(t,a.children),t.flags|=4096);return t}return n?(Sl(),f=a.fallback,n=t.mode,g=e.child,A=g.sibling,a=Kt(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,A!==null?f=Kt(A,f):(f=Ql(f,n,l,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,xn(null,a),a=t.child,f=e.child.memoizedState,f===null?f=kc(l):(n=f.cachePool,n!==null?(g=Be._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=zs(),f={baseLanes:f.baseLanes|l,cachePool:n}),a.memoizedState=f,a.childLanes=Jc(e,c,l),t.memoizedState=Vc,xn(e.child,a)):(xl(t),l=e.child,e=l.sibling,l=Kt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function Kc(e,t){return t=Ui({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ui(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function $c(e,t,l){return Wl(t,e.child,null,l),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),sc(e.return,t,l)}function Wc(e,t,l,a,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=i)}function Bf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var c=we.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,V(we,c),Fe(e,t,a,l),a=pe?cn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lf(e,l,t);else if(e.tag===19)Lf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Ei(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Wc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Wc(t,!0,l,null,i,a);break;case"together":Wc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Tl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(xa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Kt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Kt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Rp(e,t,l){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),gl(t,Be,e.memoizedState.cache),Zl();break;case 27:case 5:Va(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:gl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ec(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(xl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Hf(e,t,l):(xl(t),e=el(e,t,l),e!==null?e.sibling:null);xl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(xa(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Bf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),V(we,we.current),a)break;return null;case 22:return t.lanes=0,_f(e,t,l,t.pendingProps);case 24:gl(t,Be,e.memoizedState.cache)}return el(e,t,l)}function Yf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Fc(e,l)&&(t.flags&128)===0)return qe=!1,Rp(e,t,l);qe=(e.flags&131072)!==0}else qe=!1,pe&&(t.flags&1048576)!==0&&gs(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Kl(t.elementType),t.type=e,typeof e=="function")lc(e)?(a=Il(e,a),t.tag=1,t=Uf(null,t,e,a,l)):(t.tag=0,t=Zc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===I){t.tag=11,t=Af(null,t,e,a,l);break e}else if(n===G){t.tag=14,t=Rf(null,t,e,a,l);break e}}throw t=at(e)||e,Error(r(306,t,""))}}return t;case 0:return Zc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Il(a,t.pendingProps),Uf(e,t,a,n,l);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,vc(e,t),pn(t,a,null,l);var c=t.memoizedState;if(a=c.cache,gl(t,Be,a),a!==i.cache&&fc(t,[Be],l,!0),hn(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=wf(e,t,a,l);break e}else if(a!==n){n=Nt(Error(r(424)),t),rn(n),t=wf(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=Ot(e.firstChild),$e=t,pe=!0,hl=null,Ct=!0,l=Cs(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Zl(),a===n){t=el(e,t,l);break e}Fe(e,t,a,l)}t=t.child}return t;case 26:return Mi(e,t),e===null?(l=Wd(t.type,null,t.pendingProps,null))?t.memoizedState=l:pe||(l=t.type,e=t.pendingProps,a=Wi(se.current).createElement(l),a[Ke]=t,a[nt]=e,Ie(a,l,e),Ze(a),t.stateNode=a):t.memoizedState=Wd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Va(t),e===null&&pe&&(a=t.stateNode=Jd(t.type,t.pendingProps,se.current),$e=t,Ct=!0,n=Ne,Cl(t.type)?(_r=n,Ne=Ot(a.firstChild)):Ne=n),Fe(e,t,t.pendingProps.children,l),Mi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&pe&&((n=a=Ne)&&(a=n0(a,t.type,t.pendingProps,Ct),a!==null?(t.stateNode=a,$e=t,Ne=Ot(a.firstChild),Ct=!1,n=!0):n=!1),n||pl(t)),Va(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,jr(n,i)?a=null:c!==null&&jr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Tc(e,t,bp,null,null,l),wn._currentValue=n),Mi(e,t),Fe(e,t,a,l),t.child;case 6:return e===null&&pe&&((e=l=Ne)&&(l=i0(l,t.pendingProps,Ct),l!==null?(t.stateNode=l,$e=t,Ne=null,e=!0):e=!1),e||pl(t)),null;case 13:return Hf(e,t,l);case 4:return tt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Wl(t,null,a,l):Fe(e,t,a,l),t.child;case 11:return Af(e,t,t.type,t.pendingProps,l);case 7:return Fe(e,t,t.pendingProps,l),t.child;case 8:return Fe(e,t,t.pendingProps.children,l),t.child;case 12:return Fe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,gl(t,t.type,a.value),Fe(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,kl(t),n=We(n),a=a(n),t.flags|=1,Fe(e,t,a,l),t.child;case 14:return Rf(e,t,t.type,t.pendingProps,l);case 15:return Cf(e,t,t.type,t.pendingProps,l);case 19:return Bf(e,t,l);case 31:return Ap(e,t,l);case 22:return _f(e,t,l,t.pendingProps);case 24:return kl(t),a=We(Be),e===null?(n=hc(),n===null&&(n=je,i=dc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},gc(t),gl(t,Be,n)):((e.lanes&l)!==0&&(vc(e,t),pn(t,null,null,l),hn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),gl(t,Be,a)):(a=i.cache,gl(t,Be,a),a!==n.cache&&fc(t,[Be],l,!0))),Fe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function tl(e){e.flags|=4}function Ic(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(dd())e.flags|=8192;else throw $l=yi,pc}else e.flags&=-16777217}function qf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tm(t))if(dd())e.flags|=8192;else throw $l=yi,pc}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yo():536870912,e.lanes|=t,Da|=t)}function Sn(e,t){if(!pe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Cp(e,t,l){var a=t.pendingProps;switch(uc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Be),Ue(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ba(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rc())),Ae(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(tl(t),i!==null?(Ae(t),qf(t,i)):(Ae(t),Ic(t,n,null,a,l))):i?i!==e.memoizedState?(tl(t),Ae(t),qf(t,i)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&tl(t),Ae(t),Ic(t,n,e,a,l)),null;case 27:if(kn(t),l=se.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ae(t),null}e=$.current,ba(t)?ys(t):(e=Jd(n,a,l),t.stateNode=e,tl(t))}return Ae(t),null;case 5:if(kn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ae(t),null}if(i=$.current,ba(t))ys(t);else{var c=Wi(se.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}i[Ke]=t,i[nt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Ie(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&tl(t)}}return Ae(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=se.current,ba(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=$e,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Hd(e.nodeValue,l)),e||pl(t,!0)}else e=Wi(e).createTextNode(a),e[Ke]=t,t.stateNode=e}return Ae(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ba(t),l!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ke]=t}else Zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else l=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ae(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ba(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ke]=t}else Zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),n=!1}else n=rc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),wi(t,t.updateQueue),Ae(t),null);case 4:return Ue(),e===null&&xr(t.stateNode.containerInfo),Ae(t),null;case 10:return Ft(t.type),Ae(t),null;case 19:if(q(we),a=t.memoizedState,a===null)return Ae(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Sn(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,Sn(a,!1),e=i.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)ms(l,e),l=l.sibling;return V(we,we.current&1|2),pe&&$t(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>qi&&(t.flags|=128,n=!0,Sn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),Sn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!pe)return Ae(t),null}else 2*dt()-a.renderingStartTime>qi&&l!==536870912&&(t.flags|=128,n=!0,Sn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,l=we.current,V(we,n?l&1|2:l&1),pe&&$t(t,a.treeForkCount),e):(Ae(t),null);case 22:case 23:return yt(t),Sc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),l=t.updateQueue,l!==null&&wi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&q(Jl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Be),Ae(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function _p(e,t){switch(uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Be),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kn(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(r(340));Zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(we),null;case 4:return Ue(),null;case 10:return Ft(t.type),null;case 22:case 23:return yt(t),Sc(),e!==null&&q(Jl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Be),null;case 25:return null;default:return null}}function Gf(e,t){switch(uc(t),t.tag){case 3:Ft(Be),Ue();break;case 26:case 27:case 5:kn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:q(we);break;case 10:Ft(t.type);break;case 22:case 23:yt(t),Sc(),e!==null&&q(Jl);break;case 24:Ft(Be)}}function En(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(f){Se(t,t.return,f)}}function El(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var g=l,A=f;try{A()}catch(U){Se(n,g,U)}}}a=a.next}while(a!==i)}}catch(U){Se(t,t.return,U)}}function Xf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Os(t,l)}catch(a){Se(e,e.return,a)}}}function Qf(e,t,l){l.props=Il(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Se(e,t,a)}}function zn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Se(e,t,n)}}function Xt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Se(e,t,n)}else l.current=null}function Zf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Se(e,e.return,n)}}function Pc(e,t,l){try{var a=e.stateNode;Ip(a,e.type,l,t),a[nt]=t}catch(n){Se(e,e.return,n)}}function Vf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cl(e.type)||e.tag===4}function er(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=kt));else if(a!==4&&(a===27&&Cl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(tr(e,t,l),e=e.sibling;e!==null;)tr(e,t,l),e=e.sibling}function Hi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Cl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Hi(e,t,l),e=e.sibling;e!==null;)Hi(e,t,l),e=e.sibling}function kf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ie(t,a,l),t[Ke]=e,t[nt]=l}catch(i){Se(e,e.return,i)}}var ll=!1,Ge=!1,lr=!1,Jf=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Op(e,t){if(e=e.containerInfo,zr=au,e=ns(e),$u(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var c=0,f=-1,g=-1,A=0,U=0,Y=e,C=null;t:for(;;){for(var O;Y!==l||n!==0&&Y.nodeType!==3||(f=c+n),Y!==i||a!==0&&Y.nodeType!==3||(g=c+a),Y.nodeType===3&&(c+=Y.nodeValue.length),(O=Y.firstChild)!==null;)C=Y,Y=O;for(;;){if(Y===e)break t;if(C===l&&++A===n&&(f=c),C===i&&++U===a&&(g=c),(O=Y.nextSibling)!==null)break;Y=C,C=Y.parentNode}Y=O}l=f===-1||g===-1?null:{start:f,end:g}}else l=null}l=l||{start:0,end:0}}else l=null;for(Tr={focusedElem:e,selectionRange:l},au=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var W=Il(l.type,n);e=a.getSnapshotBeforeUpdate(W,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Se(l,l.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Ar(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ar(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function Kf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:nl(e,l),a&4&&En(5,l);break;case 1:if(nl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){Se(l,l.return,c)}else{var n=Il(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Se(l,l.return,c)}}a&64&&Xf(l),a&512&&zn(l,l.return);break;case 3:if(nl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Os(e,t)}catch(c){Se(l,l.return,c)}}break;case 27:t===null&&a&4&&kf(l);case 26:case 5:nl(e,l),t===null&&a&4&&Zf(l),a&512&&zn(l,l.return);break;case 12:nl(e,l);break;case 31:nl(e,l),a&4&&Ff(e,l);break;case 13:nl(e,l),a&4&&If(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=qp.bind(null,l),u0(e,l))));break;case 22:if(a=l.memoizedState!==null||ll,!a){t=t!==null&&t.memoizedState!==null||Ge,n=ll;var i=Ge;ll=a,(Ge=t)&&!i?il(e,l,(l.subtreeFlags&8772)!==0):nl(e,l),ll=n,Ge=i}break;case 30:break;default:nl(e,l)}}function $f(e){var t=e.alternate;t!==null&&(e.alternate=null,$f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Du(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,ut=!1;function al(e,t,l){for(l=l.child;l!==null;)Wf(e,t,l),l=l.sibling}function Wf(e,t,l){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ka,l)}catch{}switch(l.tag){case 26:Ge||Xt(l,t),al(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ge||Xt(l,t);var a=Ce,n=ut;Cl(l.type)&&(Ce=l.stateNode,ut=!1),al(e,t,l),Dn(l.stateNode),Ce=a,ut=n;break;case 5:Ge||Xt(l,t);case 6:if(a=Ce,n=ut,Ce=null,al(e,t,l),Ce=a,ut=n,Ce!==null)if(ut)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(l.stateNode)}catch(i){Se(l,t,i)}else try{Ce.removeChild(l.stateNode)}catch(i){Se(l,t,i)}break;case 18:Ce!==null&&(ut?(e=Ce,Xd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),qa(e)):Xd(Ce,l.stateNode));break;case 4:a=Ce,n=ut,Ce=l.stateNode.containerInfo,ut=!0,al(e,t,l),Ce=a,ut=n;break;case 0:case 11:case 14:case 15:El(2,l,t),Ge||El(4,l,t),al(e,t,l);break;case 1:Ge||(Xt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Qf(l,t,a)),al(e,t,l);break;case 21:al(e,t,l);break;case 22:Ge=(a=Ge)||l.memoizedState!==null,al(e,t,l),Ge=a;break;default:al(e,t,l)}}function Ff(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qa(e)}catch(l){Se(t,t.return,l)}}}function If(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qa(e)}catch(l){Se(t,t.return,l)}}function Dp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jf),t;default:throw Error(r(435,e.tag))}}function Li(e,t){var l=Dp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Gp.bind(null,e,a);a.then(n,n)}})}function ct(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Cl(f.type)){Ce=f.stateNode,ut=!1;break e}break;case 5:Ce=f.stateNode,ut=!1;break e;case 3:case 4:Ce=f.stateNode.containerInfo,ut=!0;break e}f=f.return}if(Ce===null)throw Error(r(160));Wf(i,c,n),Ce=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}var wt=null;function Pf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),rt(e),a&4&&(El(3,e,e.return),En(3,e),El(5,e,e.return));break;case 1:ct(t,e),rt(e),a&512&&(Ge||l===null||Xt(l,l.return)),a&64&&ll&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=wt;if(ct(t,e),rt(e),a&512&&(Ge||l===null||Xt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[$a]||i[Ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ie(i,a,l),i[Ke]=e,Ze(i),a=i;break e;case"link":var c=Pd("link","href",n).get(a+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(a),Ie(i,a,l),n.head.appendChild(i);break;case"meta":if(c=Pd("meta","content",n).get(a+(l.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break t}}i=n.createElement(a),Ie(i,a,l),n.head.appendChild(i);break;default:throw Error(r(468,a))}i[Ke]=e,Ze(i),a=i}e.stateNode=a}else em(n,e.type,e.stateNode);else e.stateNode=Id(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?em(n,e.type,e.stateNode):Id(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Pc(e,e.memoizedProps,l.memoizedProps)}break;case 27:ct(t,e),rt(e),a&512&&(Ge||l===null||Xt(l,l.return)),l!==null&&a&4&&Pc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ct(t,e),rt(e),a&512&&(Ge||l===null||Xt(l,l.return)),e.flags&32){n=e.stateNode;try{oa(n,"")}catch(W){Se(e,e.return,W)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Pc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(lr=!0);break;case 6:if(ct(t,e),rt(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(W){Se(e,e.return,W)}}break;case 3:if(Pi=null,n=wt,wt=Fi(t.containerInfo),ct(t,e),wt=n,rt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{qa(t.containerInfo)}catch(W){Se(e,e.return,W)}lr&&(lr=!1,ed(e));break;case 4:a=wt,wt=Fi(e.stateNode.containerInfo),ct(t,e),rt(e),wt=a;break;case 12:ct(t,e),rt(e);break;case 31:ct(t,e),rt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 13:ct(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Yi=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 22:n=e.memoizedState!==null;var g=l!==null&&l.memoizedState!==null,A=ll,U=Ge;if(ll=A||n,Ge=U||g,ct(t,e),Ge=U,ll=A,rt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||g||ll||Ge||Pl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){g=l=t;try{if(i=g.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=g.stateNode;var Y=g.memoizedProps.style,C=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;f.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(W){Se(g,g.return,W)}}}else if(t.tag===6){if(l===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(W){Se(g,g.return,W)}}}else if(t.tag===18){if(l===null){g=t;try{var O=g.stateNode;n?Qd(O,!0):Qd(g.stateNode,!1)}catch(W){Se(g,g.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Li(e,l))));break;case 19:ct(t,e),rt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 30:break;case 21:break;default:ct(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Vf(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,i=er(e);Hi(e,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(oa(c,""),l.flags&=-33);var f=er(e);Hi(e,f,c);break;case 3:case 4:var g=l.stateNode.containerInfo,A=er(e);tr(e,A,g);break;default:throw Error(r(161))}}catch(U){Se(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ed(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Kf(e,t.alternate,t),t=t.sibling}function Pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:El(4,t,t.return),Pl(t);break;case 1:Xt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Qf(t,t.return,l),Pl(t);break;case 27:Dn(t.stateNode);case 26:case 5:Xt(t,t.return),Pl(t);break;case 22:t.memoizedState===null&&Pl(t);break;case 30:Pl(t);break;default:Pl(t)}e=e.sibling}}function il(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:il(n,i,l),En(4,i);break;case 1:if(il(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){Se(a,a.return,A)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)_s(g[n],f)}catch(A){Se(a,a.return,A)}}l&&c&64&&Xf(i),zn(i,i.return);break;case 27:kf(i);case 26:case 5:il(n,i,l),l&&a===null&&c&4&&Zf(i),zn(i,i.return);break;case 12:il(n,i,l);break;case 31:il(n,i,l),l&&c&4&&Ff(n,i);break;case 13:il(n,i,l),l&&c&4&&If(n,i);break;case 22:i.memoizedState===null&&il(n,i,l),zn(i,i.return);break;case 30:break;default:il(n,i,l)}t=t.sibling}}function ar(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&on(l))}function nr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e))}function Ht(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)td(e,t,l,a),t=t.sibling}function td(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,l,a),n&2048&&En(9,t);break;case 1:Ht(e,t,l,a);break;case 3:Ht(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e)));break;case 12:if(n&2048){Ht(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Se(t,t.return,g)}}else Ht(e,t,l,a);break;case 31:Ht(e,t,l,a);break;case 13:Ht(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(e,t,l,a):Tn(e,t):i._visibility&2?Ht(e,t,l,a):(i._visibility|=2,Ca(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ar(c,t);break;case 24:Ht(e,t,l,a),n&2048&&nr(t.alternate,t);break;default:Ht(e,t,l,a)}}function Ca(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,f=l,g=a,A=c.flags;switch(c.tag){case 0:case 11:case 15:Ca(i,c,f,g,n),En(8,c);break;case 23:break;case 22:var U=c.stateNode;c.memoizedState!==null?U._visibility&2?Ca(i,c,f,g,n):Tn(i,c):(U._visibility|=2,Ca(i,c,f,g,n)),n&&A&2048&&ar(c.alternate,c);break;case 24:Ca(i,c,f,g,n),n&&A&2048&&nr(c.alternate,c);break;default:Ca(i,c,f,g,n)}t=t.sibling}}function Tn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Tn(l,a),n&2048&&ar(a.alternate,a);break;case 24:Tn(l,a),n&2048&&nr(a.alternate,a);break;default:Tn(l,a)}t=t.sibling}}var jn=8192;function _a(e,t,l){if(e.subtreeFlags&jn)for(e=e.child;e!==null;)ld(e,t,l),e=e.sibling}function ld(e,t,l){switch(e.tag){case 26:_a(e,t,l),e.flags&jn&&e.memoizedState!==null&&y0(l,wt,e.memoizedState,e.memoizedProps);break;case 5:_a(e,t,l);break;case 3:case 4:var a=wt;wt=Fi(e.stateNode.containerInfo),_a(e,t,l),wt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=jn,jn=16777216,_a(e,t,l),jn=a):_a(e,t,l));break;default:_a(e,t,l)}}function ad(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ve=a,id(a,e)}ad(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nd(e),e=e.sibling}function nd(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&El(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):Nn(e);break;default:Nn(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ve=a,id(a,e)}ad(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:El(8,t,t.return),Bi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function id(e,t){for(;Ve!==null;){var l=Ve;switch(l.tag){case 0:case 11:case 15:El(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:on(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ve=a;else e:for(l=e;Ve!==null;){a=Ve;var n=a.sibling,i=a.return;if($f(a),a===l){Ve=null;break e}if(n!==null){n.return=i,Ve=n;break e}Ve=i}}}var Mp={getCacheForType:function(e){var t=We(Be),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return We(Be).controller.signal}},Up=typeof WeakMap=="function"?WeakMap:Map,ye=0,je=null,fe=null,me=0,xe=0,bt=null,zl=!1,Oa=!1,ir=!1,ul=0,Me=0,Tl=0,ea=0,ur=0,xt=0,Da=0,An=null,ot=null,cr=!1,Yi=0,ud=0,qi=1/0,Gi=null,jl=null,Xe=0,Nl=null,Ma=null,cl=0,rr=0,or=null,cd=null,Rn=0,sr=null;function St(){return(ye&2)!==0&&me!==0?me&-me:w.T!==null?gr():Eo()}function rd(){if(xt===0)if((me&536870912)===0||pe){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),xt=e}else xt=536870912;return e=vt.current,e!==null&&(e.flags|=32),xt}function st(e,t,l){(e===je&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Ua(e,0),Al(e,me,xt,!1)),Ka(e,l),((ye&2)===0||e!==je)&&(e===je&&((ye&2)===0&&(ea|=l),Me===4&&Al(e,me,xt,!1)),Qt(e))}function od(e,t,l){if((ye&6)!==0)throw Error(r(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ja(e,t),n=a?Lp(e,t):dr(e,t,!0),i=a;do{if(n===0){Oa&&!a&&Al(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!wp(l)){n=dr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=An;var g=f.current.memoizedState.isDehydrated;if(g&&(Ua(f,c).flags|=256),c=dr(f,c,!1),c!==2){if(ir&&!g){f.errorRecoveryDisabledLanes|=i,ea|=i,n=4;break e}i=ot,ot=n,i!==null&&(ot===null?ot=i:ot.push.apply(ot,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ua(e,0),Al(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Al(a,t,xt,!zl);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=Yi+300-dt(),10<n)){if(Al(a,t,xt,!zl),Fn(a,0,!0)!==0)break e;cl=t,a.timeoutHandle=qd(sd.bind(null,a,l,ot,Gi,cr,t,xt,ea,Da,zl,i,"Throttled",-0,0),n);break e}sd(a,l,ot,Gi,cr,t,xt,ea,Da,zl,i,null,-0,0)}}break}while(!0);Qt(e)}function sd(e,t,l,a,n,i,c,f,g,A,U,Y,C,O){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},ld(t,i,Y);var W=(i&62914560)===i?Yi-dt():(i&4194048)===i?ud-dt():0;if(W=b0(Y,W),W!==null){cl=i,e.cancelPendingCommit=W(yd.bind(null,e,t,i,l,a,n,c,f,g,U,Y,null,C,O)),Al(e,i,c,!A);return}}yd(e,t,i,l,a,n,c,f,g)}function wp(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!pt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Al(e,t,l,a){t&=~ur,t&=~ea,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-ht(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&bo(e,l,t)}function Xi(){return(ye&6)===0?(Cn(0),!1):!0}function fr(){if(fe!==null){if(xe===0)var e=fe.return;else e=fe,Wt=Vl=null,Ac(e),Ta=null,fn=0,e=fe;for(;e!==null;)Gf(e.alternate,e),e=e.return;fe=null}}function Ua(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,t0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),cl=0,fr(),je=e,fe=l=Kt(e.current,null),me=t,xe=0,bt=null,zl=!1,Oa=Ja(e,t),ir=!1,Da=xt=ur=ea=Tl=Me=0,ot=An=null,cr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-ht(a),i=1<<n;t|=e[n],a&=~i}return ul=t,oi(),l}function fd(e,t){ne=null,w.H=bn,t===za||t===vi?(t=Ns(),xe=3):t===pc?(t=Ns(),xe=4):xe=t===Qc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,fe===null&&(Me=1,Oi(e,Nt(t,e.current)))}function dd(){var e=vt.current;return e===null?!0:(me&4194048)===me?_t===null:(me&62914560)===me||(me&536870912)!==0?e===_t:!1}function md(){var e=w.H;return w.H=bn,e===null?bn:e}function hd(){var e=w.A;return w.A=Mp,e}function Qi(){Me=4,zl||(me&4194048)!==me&&vt.current!==null||(Oa=!0),(Tl&134217727)===0&&(ea&134217727)===0||je===null||Al(je,me,xt,!1)}function dr(e,t,l){var a=ye;ye|=2;var n=md(),i=hd();(je!==e||me!==t)&&(Gi=null,Ua(e,t)),t=!1;var c=Me;e:do try{if(xe!==0&&fe!==null){var f=fe,g=bt;switch(xe){case 8:fr(),c=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var A=xe;if(xe=0,bt=null,wa(e,f,g,A),l&&Oa){c=0;break e}break;default:A=xe,xe=0,bt=null,wa(e,f,g,A)}}Hp(),c=Me;break}catch(U){fd(e,U)}while(!0);return t&&e.shellSuspendCounter++,Wt=Vl=null,ye=a,w.H=n,w.A=i,fe===null&&(je=null,me=0,oi()),c}function Hp(){for(;fe!==null;)pd(fe)}function Lp(e,t){var l=ye;ye|=2;var a=md(),n=hd();je!==e||me!==t?(Gi=null,qi=dt()+500,Ua(e,t)):Oa=Ja(e,t);e:do try{if(xe!==0&&fe!==null){t=fe;var i=bt;t:switch(xe){case 1:xe=0,bt=null,wa(e,t,i,1);break;case 2:case 9:if(Ts(i)){xe=0,bt=null,gd(t);break}t=function(){xe!==2&&xe!==9||je!==e||(xe=7),Qt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Ts(i)?(xe=0,bt=null,gd(t)):(xe=0,bt=null,wa(e,t,i,7));break;case 5:var c=null;switch(fe.tag){case 26:c=fe.memoizedState;case 5:case 27:var f=fe;if(c?tm(c):f.stateNode.complete){xe=0,bt=null;var g=f.sibling;if(g!==null)fe=g;else{var A=f.return;A!==null?(fe=A,Zi(A)):fe=null}break t}}xe=0,bt=null,wa(e,t,i,5);break;case 6:xe=0,bt=null,wa(e,t,i,6);break;case 8:fr(),Me=6;break e;default:throw Error(r(462))}}Bp();break}catch(U){fd(e,U)}while(!0);return Wt=Vl=null,w.H=a,w.A=n,ye=l,fe!==null?0:(je=null,me=0,oi(),Me)}function Bp(){for(;fe!==null&&!ch();)pd(fe)}function pd(e){var t=Yf(e.alternate,e,ul);e.memoizedProps=e.pendingProps,t===null?Zi(e):fe=t}function gd(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Mf(l,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Mf(l,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Ac(t);default:Gf(l,t),t=fe=ms(t,ul),t=Yf(l,t,ul)}e.memoizedProps=e.pendingProps,t===null?Zi(e):fe=t}function wa(e,t,l,a){Wt=Vl=null,Ac(t),Ta=null,fn=0;var n=t.return;try{if(Np(e,n,t,l,me)){Me=1,Oi(e,Nt(l,e.current)),fe=null;return}}catch(i){if(n!==null)throw fe=n,i;Me=1,Oi(e,Nt(l,e.current)),fe=null;return}t.flags&32768?(pe||a===1?e=!0:Oa||(me&536870912)!==0?e=!1:(zl=e=!0,(a===2||a===9||a===3||a===6)&&(a=vt.current,a!==null&&a.tag===13&&(a.flags|=16384))),vd(t,e)):Zi(t)}function Zi(e){var t=e;do{if((t.flags&32768)!==0){vd(t,zl);return}e=t.return;var l=Cp(t.alternate,t,ul);if(l!==null){fe=l;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Me===0&&(Me=5)}function vd(e,t){do{var l=_p(e.alternate,e);if(l!==null){l.flags&=32767,fe=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=l}while(e!==null);Me=6,fe=null}function yd(e,t,l,a,n,i,c,f,g){e.cancelPendingCommit=null;do Vi();while(Xe!==0);if((ye&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=ec,vh(e,l,i,c,f,g),e===je&&(fe=je=null,me=0),Ma=t,Nl=e,cl=l,rr=i,or=n,cd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xp(Jn,function(){return zd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null,n=T.p,T.p=2,c=ye,ye|=4;try{Op(e,t,l)}finally{ye=c,T.p=n,w.T=a}}Xe=1,bd(),xd(),Sd()}}function bd(){if(Xe===1){Xe=0;var e=Nl,t=Ma,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null;var a=T.p;T.p=2;var n=ye;ye|=4;try{Pf(t,e);var i=Tr,c=ns(e.containerInfo),f=i.focusedElem,g=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&as(f.ownerDocument.documentElement,f)){if(g!==null&&$u(f)){var A=g.start,U=g.end;if(U===void 0&&(U=A),"selectionStart"in f)f.selectionStart=A,f.selectionEnd=Math.min(U,f.value.length);else{var Y=f.ownerDocument||document,C=Y&&Y.defaultView||window;if(C.getSelection){var O=C.getSelection(),W=f.textContent.length,ee=Math.min(g.start,W),Te=g.end===void 0?ee:Math.min(g.end,W);!O.extend&&ee>Te&&(c=Te,Te=ee,ee=c);var z=ls(f,ee),y=ls(f,Te);if(z&&y&&(O.rangeCount!==1||O.anchorNode!==z.node||O.anchorOffset!==z.offset||O.focusNode!==y.node||O.focusOffset!==y.offset)){var N=Y.createRange();N.setStart(z.node,z.offset),O.removeAllRanges(),ee>Te?(O.addRange(N),O.extend(y.node,y.offset)):(N.setEnd(y.node,y.offset),O.addRange(N))}}}}for(Y=[],O=f;O=O.parentNode;)O.nodeType===1&&Y.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<Y.length;f++){var L=Y[f];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}au=!!zr,Tr=zr=null}finally{ye=n,T.p=a,w.T=l}}e.current=t,Xe=2}}function xd(){if(Xe===2){Xe=0;var e=Nl,t=Ma,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=w.T,w.T=null;var a=T.p;T.p=2;var n=ye;ye|=4;try{Kf(e,t.alternate,t)}finally{ye=n,T.p=a,w.T=l}}Xe=3}}function Sd(){if(Xe===4||Xe===3){Xe=0,rh();var e=Nl,t=Ma,l=cl,a=cd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Ma=Nl=null,Ed(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(jl=null),_u(l),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ka,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=w.T,n=T.p,T.p=2,w.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var f=a[c];i(f.value,{componentStack:f.stack})}}finally{w.T=t,T.p=n}}(cl&3)!==0&&Vi(),Qt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===sr?Rn++:(Rn=0,sr=e):Rn=0,Cn(0)}}function Ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,on(t)))}function Vi(){return bd(),xd(),Sd(),zd()}function zd(){if(Xe!==5)return!1;var e=Nl,t=rr;rr=0;var l=_u(cl),a=w.T,n=T.p;try{T.p=32>l?32:l,w.T=null,l=or,or=null;var i=Nl,c=cl;if(Xe=0,Ma=Nl=null,cl=0,(ye&6)!==0)throw Error(r(331));var f=ye;if(ye|=4,nd(i.current),td(i,i.current,c,l),ye=f,Cn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ka,i)}catch{}return!0}finally{T.p=n,w.T=a,Ed(e,t)}}function Td(e,t,l){t=Nt(l,t),t=Xc(e.stateNode,t,2),e=bl(e,t,2),e!==null&&(Ka(e,2),Qt(e))}function Se(e,t,l){if(e.tag===3)Td(e,e,l);else for(;t!==null;){if(t.tag===3){Td(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(jl===null||!jl.has(a))){e=Nt(l,e),l=jf(2),a=bl(t,l,2),a!==null&&(Nf(l,a,t,e),Ka(a,2),Qt(a));break}}t=t.return}}function mr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Up;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(ir=!0,n.add(l),e=Yp.bind(null,e,t,l),t.then(e,e))}function Yp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,je===e&&(me&l)===l&&(Me===4||Me===3&&(me&62914560)===me&&300>dt()-Yi?(ye&2)===0&&Ua(e,0):ur|=l,Da===me&&(Da=0)),Qt(e)}function jd(e,t){t===0&&(t=yo()),e=Xl(e,t),e!==null&&(Ka(e,t),Qt(e))}function qp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),jd(e,l)}function Gp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),jd(e,l)}function Xp(e,t){return Nu(e,t)}var ki=null,Ha=null,hr=!1,Ji=!1,pr=!1,Rl=0;function Qt(e){e!==Ha&&e.next===null&&(Ha===null?ki=Ha=e:Ha=Ha.next=e),Ji=!0,hr||(hr=!0,Zp())}function Cn(e,t){if(!pr&&Ji){pr=!0;do for(var l=!1,a=ki;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-ht(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,Cd(a,i))}else i=me,i=Fn(a,a===je?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ja(a,i)||(l=!0,Cd(a,i));a=a.next}while(l);pr=!1}}function Qp(){Nd()}function Nd(){Ji=hr=!1;var e=0;Rl!==0&&e0()&&(e=Rl);for(var t=dt(),l=null,a=ki;a!==null;){var n=a.next,i=Ad(a,t);i===0?(a.next=null,l===null?ki=n:l.next=n,n===null&&(Ha=l)):(l=a,(e!==0||(i&3)!==0)&&(Ji=!0)),a=n}Xe!==0&&Xe!==5||Cn(e),Rl!==0&&(Rl=0)}function Ad(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-ht(i),f=1<<c,g=n[c];g===-1?((f&l)===0||(f&a)!==0)&&(n[c]=gh(f,t)):g<=t&&(e.expiredLanes|=f),i&=~f}if(t=je,l=me,l=Fn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Au(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ja(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Au(a),_u(l)){case 2:case 8:l=go;break;case 32:l=Jn;break;case 268435456:l=vo;break;default:l=Jn}return a=Rd.bind(null,e),l=Nu(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Au(a),e.callbackPriority=2,e.callbackNode=null,2}function Rd(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Vi()&&e.callbackNode!==l)return null;var a=me;return a=Fn(e,e===je?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(od(e,a,t),Ad(e,dt()),e.callbackNode!=null&&e.callbackNode===l?Rd.bind(null,e):null)}function Cd(e,t){if(Vi())return null;od(e,t,!0)}function Zp(){l0(function(){(ye&6)!==0?Nu(po,Qp):Nd()})}function gr(){if(Rl===0){var e=Sa;e===0&&(e=Kn,Kn<<=1,(Kn&261888)===0&&(Kn=256)),Rl=e}return Rl}function _d(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function Od(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Vp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=_d((n[nt]||null).action),c=a.submitter;c&&(t=(t=c[nt]||null)?_d(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new ii("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Rl!==0){var g=c?Od(n,c):new FormData(n);Hc(l,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(f.preventDefault(),g=c?Od(n,c):new FormData(n),Hc(l,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var vr=0;vr<Pu.length;vr++){var yr=Pu[vr],kp=yr.toLowerCase(),Jp=yr[0].toUpperCase()+yr.slice(1);Ut(kp,"on"+Jp)}Ut(cs,"onAnimationEnd"),Ut(rs,"onAnimationIteration"),Ut(os,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(op,"onTransitionRun"),Ut(sp,"onTransitionStart"),Ut(fp,"onTransitionCancel"),Ut(ss,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),Bl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));function Dd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var f=a[c],g=f.instance,A=f.currentTarget;if(f=f.listener,g!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=A;try{i(n)}catch(U){ri(U)}n.currentTarget=null,i=g}else for(c=0;c<a.length;c++){if(f=a[c],g=f.instance,A=f.currentTarget,f=f.listener,g!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=A;try{i(n)}catch(U){ri(U)}n.currentTarget=null,i=g}}}}function de(e,t){var l=t[Ou];l===void 0&&(l=t[Ou]=new Set);var a=e+"__bubble";l.has(a)||(Md(t,e,2,!1),l.add(a))}function br(e,t,l){var a=0;t&&(a|=4),Md(l,e,a,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[Ki]){e[Ki]=!0,jo.forEach(function(l){l!=="selectionchange"&&(Kp.has(l)||br(l,!1,e),br(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,br("selectionchange",!1,t))}}function Md(e,t,l,a){switch(rm(t)){case 2:var n=E0;break;case 8:n=z0;break;default:n=wr}l=n.bind(null,t,l,e),n=void 0,!qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Sr(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=a.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=na(f),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){a=i=c;continue e}f=f.parentNode}}a=a.return}Lo(function(){var A=i,U=Bu(l),Y=[];e:{var C=fs.get(e);if(C!==void 0){var O=ii,W=e;switch(e){case"keypress":if(ai(l)===0)break e;case"keydown":case"keyup":O=Gh;break;case"focusin":W="focus",O=Zu;break;case"focusout":W="blur",O=Zu;break;case"beforeblur":case"afterblur":O=Zu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Zh;break;case cs:case rs:case os:O=Dh;break;case ss:O=kh;break;case"scroll":case"scrollend":O=Ah;break;case"wheel":O=Kh;break;case"copy":case"cut":case"paste":O=Uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Xo;break;case"toggle":case"beforetoggle":O=Wh}var ee=(t&4)!==0,Te=!ee&&(e==="scroll"||e==="scrollend"),z=ee?C!==null?C+"Capture":null:C;ee=[];for(var y=A,N;y!==null;){var L=y;if(N=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||N===null||z===null||(L=Fa(y,z),L!=null&&ee.push(On(y,L,N))),Te)break;y=y.return}0<ee.length&&(C=new O(C,W,null,l,U),Y.push({event:C,listeners:ee}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",C&&l!==Lu&&(W=l.relatedTarget||l.fromElement)&&(na(W)||W[aa]))break e;if((O||C)&&(C=U.window===U?U:(C=U.ownerDocument)?C.defaultView||C.parentWindow:window,O?(W=l.relatedTarget||l.toElement,O=A,W=W?na(W):null,W!==null&&(Te=h(W),ee=W.tag,W!==Te||ee!==5&&ee!==27&&ee!==6)&&(W=null)):(O=null,W=A),O!==W)){if(ee=qo,L="onMouseLeave",z="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Xo,L="onPointerLeave",z="onPointerEnter",y="pointer"),Te=O==null?C:Wa(O),N=W==null?C:Wa(W),C=new ee(L,y+"leave",O,l,U),C.target=Te,C.relatedTarget=N,L=null,na(U)===A&&(ee=new ee(z,y+"enter",W,l,U),ee.target=N,ee.relatedTarget=Te,L=ee),Te=L,O&&W)t:{for(ee=$p,z=O,y=W,N=0,L=z;L;L=ee(L))N++;L=0;for(var P=y;P;P=ee(P))L++;for(;0<N-L;)z=ee(z),N--;for(;0<L-N;)y=ee(y),L--;for(;N--;){if(z===y||y!==null&&z===y.alternate){ee=z;break t}z=ee(z),y=ee(y)}ee=null}else ee=null;O!==null&&Ud(Y,C,O,ee,!1),W!==null&&Te!==null&&Ud(Y,Te,W,ee,!0)}}e:{if(C=A?Wa(A):window,O=C.nodeName&&C.nodeName.toLowerCase(),O==="select"||O==="input"&&C.type==="file")var ge=Wo;else if(Ko(C))if(Fo)ge=up;else{ge=np;var F=ap}else O=C.nodeName,!O||O.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?A&&Hu(A.elementType)&&(ge=Wo):ge=ip;if(ge&&(ge=ge(e,A))){$o(Y,ge,l,U);break e}F&&F(e,C,A),e==="focusout"&&A&&C.type==="number"&&A.memoizedProps.value!=null&&wu(C,"number",C.value)}switch(F=A?Wa(A):window,e){case"focusin":(Ko(F)||F.contentEditable==="true")&&(ma=F,Wu=A,un=null);break;case"focusout":un=Wu=ma=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,is(Y,l,U);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":is(Y,l,U)}var ce;if(ku)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else da?ko(e,l)&&(he="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(he="onCompositionStart");he&&(Qo&&l.locale!=="ko"&&(da||he!=="onCompositionStart"?he==="onCompositionEnd"&&da&&(ce=Bo()):(dl=U,Gu="value"in dl?dl.value:dl.textContent,da=!0)),F=$i(A,he),0<F.length&&(he=new Go(he,e,null,l,U),Y.push({event:he,listeners:F}),ce?he.data=ce:(ce=Jo(l),ce!==null&&(he.data=ce)))),(ce=Ih?Ph(e,l):ep(e,l))&&(he=$i(A,"onBeforeInput"),0<he.length&&(F=new Go("onBeforeInput","beforeinput",null,l,U),Y.push({event:F,listeners:he}),F.data=ce)),Vp(Y,e,A,l,U)}Dd(Y,t)})}function On(e,t,l){return{instance:e,listener:t,currentTarget:l}}function $i(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fa(e,l),n!=null&&a.unshift(On(e,n,i)),n=Fa(e,t),n!=null&&a.push(On(e,n,i))),e.tag===3)return a;e=e.return}return[]}function $p(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,l,a,n){for(var i=t._reactName,c=[];l!==null&&l!==a;){var f=l,g=f.alternate,A=f.stateNode;if(f=f.tag,g!==null&&g===a)break;f!==5&&f!==26&&f!==27||A===null||(g=A,n?(A=Fa(l,i),A!=null&&c.unshift(On(l,A,g))):n||(A=Fa(l,i),A!=null&&c.push(On(l,A,g)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var Wp=/\r\n?/g,Fp=/\u0000|\uFFFD/g;function wd(e){return(typeof e=="string"?e:""+e).replace(Wp,`
`).replace(Fp,"")}function Hd(e,t){return t=wd(t),wd(e)===t}function ze(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||oa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&oa(e,""+a);break;case"className":Pn(e,"class",a);break;case"tabIndex":Pn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,l,a);break;case"style":wo(e,a,i);break;case"data":if(t!=="object"){Pn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&ze(e,t,"name",n.name,n,null),ze(e,t,"formEncType",n.formEncType,n,null),ze(e,t,"formMethod",n.formMethod,n,null),ze(e,t,"formTarget",n.formTarget,n,null)):(ze(e,t,"encType",n.encType,n,null),ze(e,t,"method",n.method,n,null),ze(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=kt);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ti(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":de("beforetoggle",e),de("toggle",e),In(e,"popover",a);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":In(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=jh.get(l)||l,In(e,l,a))}}function Er(e,t,l,a,n,i){switch(l){case"style":wo(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof a=="string"?oa(e,a):(typeof a=="number"||typeof a=="bigint")&&oa(e,""+a);break;case"onScroll":a!=null&&de("scroll",e);break;case"onScrollEnd":a!=null&&de("scrollend",e);break;case"onClick":a!=null&&(e.onclick=kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!No.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[nt]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):In(e,l,a)}}}function Ie(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,i,c,l,null)}}n&&ze(e,t,"srcSet",l.srcSet,l,null),a&&ze(e,t,"src",l.src,l,null);return;case"input":de("invalid",e);var f=i=c=n=null,g=null,A=null;for(a in l)if(l.hasOwnProperty(a)){var U=l[a];if(U!=null)switch(a){case"name":n=U;break;case"type":c=U;break;case"checked":g=U;break;case"defaultChecked":A=U;break;case"value":i=U;break;case"defaultValue":f=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,t));break;default:ze(e,t,a,U,l,null)}}Oo(e,i,f,g,A,c,n,!1);return;case"select":de("invalid",e),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:ze(e,t,n,f,l,null)}t=i,l=c,e.multiple=!!a,t!=null?ra(e,!!a,t,!1):l!=null&&ra(e,!!a,l,!0);return;case"textarea":de("invalid",e),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:ze(e,t,c,f,l,null)}Mo(e,a,n,i);return;case"option":for(g in l)l.hasOwnProperty(g)&&(a=l[g],a!=null)&&(g==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ze(e,t,g,a,l,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(a=0;a<_n.length;a++)de(_n[a],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in l)if(l.hasOwnProperty(A)&&(a=l[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,A,a,l,null)}return;default:if(Hu(t)){for(U in l)l.hasOwnProperty(U)&&(a=l[U],a!==void 0&&Er(e,t,U,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&ze(e,t,f,a,l,null))}function Ip(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,g=null,A=null,U=null;for(O in l){var Y=l[O];if(l.hasOwnProperty(O)&&Y!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":g=Y;default:a.hasOwnProperty(O)||ze(e,t,O,null,a,Y)}}for(var C in a){var O=a[C];if(Y=l[C],a.hasOwnProperty(C)&&(O!=null||Y!=null))switch(C){case"type":i=O;break;case"name":n=O;break;case"checked":A=O;break;case"defaultChecked":U=O;break;case"value":c=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==Y&&ze(e,t,C,O,a,Y)}}Uu(e,c,f,g,A,U,i,n);return;case"select":O=c=f=C=null;for(i in l)if(g=l[i],l.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":O=g;default:a.hasOwnProperty(i)||ze(e,t,i,null,a,g)}for(n in a)if(i=a[n],g=l[n],a.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":C=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==g&&ze(e,t,n,i,a,g)}t=f,l=c,a=O,C!=null?ra(e,!!l,C,!1):!!a!=!!l&&(t!=null?ra(e,!!l,t,!0):ra(e,!!l,l?[]:"",!1));return;case"textarea":O=C=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ze(e,t,f,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":C=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&ze(e,t,c,n,a,i)}Do(e,C,O);return;case"option":for(var W in l)C=l[W],l.hasOwnProperty(W)&&C!=null&&!a.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:ze(e,t,W,null,a,C));for(g in a)C=a[g],O=l[g],a.hasOwnProperty(g)&&C!==O&&(C!=null||O!=null)&&(g==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":ze(e,t,g,C,a,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in l)C=l[ee],l.hasOwnProperty(ee)&&C!=null&&!a.hasOwnProperty(ee)&&ze(e,t,ee,null,a,C);for(A in a)if(C=a[A],O=l[A],a.hasOwnProperty(A)&&C!==O&&(C!=null||O!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(137,t));break;default:ze(e,t,A,C,a,O)}return;default:if(Hu(t)){for(var Te in l)C=l[Te],l.hasOwnProperty(Te)&&C!==void 0&&!a.hasOwnProperty(Te)&&Er(e,t,Te,void 0,a,C);for(U in a)C=a[U],O=l[U],!a.hasOwnProperty(U)||C===O||C===void 0&&O===void 0||Er(e,t,U,C,a,O);return}}for(var z in l)C=l[z],l.hasOwnProperty(z)&&C!=null&&!a.hasOwnProperty(z)&&ze(e,t,z,null,a,C);for(Y in a)C=a[Y],O=l[Y],!a.hasOwnProperty(Y)||C===O||C==null&&O==null||ze(e,t,Y,C,a,O)}function Ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Pp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,c=n.initiatorType,f=n.duration;if(i&&f&&Ld(c)){for(c=0,f=n.responseEnd,a+=1;a<l.length;a++){var g=l[a],A=g.startTime;if(A>f)break;var U=g.transferSize,Y=g.initiatorType;U&&Ld(Y)&&(g=g.responseEnd,c+=U*(g<f?1:(f-A)/(g-A)))}if(--a,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zr=null,Tr=null;function Wi(e){return e.nodeType===9?e:e.ownerDocument}function Bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function jr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nr=null;function e0(){var e=window.event;return e&&e.type==="popstate"?e===Nr?!1:(Nr=e,!0):(Nr=null,!1)}var qd=typeof setTimeout=="function"?setTimeout:void 0,t0=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(e){return Gd.resolve(null).then(e).catch(a0)}:qd;function a0(e){setTimeout(function(){throw e})}function Cl(e){return e==="head"}function Xd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),qa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Dn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Dn(l);for(var i=l.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[$a]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&Dn(e.ownerDocument.body);l=n}while(l);qa(t)}function Qd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Ar(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ar(l),Du(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function n0(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[$a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function i0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ot(e.nextSibling),e===null))return null;return e}function Zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function Rr(e){return e.data==="$?"||e.data==="$~"}function Cr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function u0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _r=null;function Vd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Ot(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Jd(e,t,l){switch(t=Wi(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Du(e)}var Dt=new Map,Kd=new Set;function Fi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rl=T.d;T.d={f:c0,r:r0,D:o0,C:s0,L:f0,m:d0,X:h0,S:m0,M:p0};function c0(){var e=rl.f(),t=Xi();return e||t}function r0(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?ff(t):rl.r(e)}var La=typeof document>"u"?null:document;function $d(e,t,l){var a=La;if(a&&typeof t=="string"&&t){var n=Tt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Kd.has(n)||(Kd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ie(t,"link",e),Ze(t),a.head.appendChild(t)))}}function o0(e){rl.D(e),$d("dns-prefetch",e,null)}function s0(e,t){rl.C(e,t),$d("preconnect",e,t)}function f0(e,t,l){rl.L(e,t,l);var a=La;if(a&&e&&t){var n='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Tt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Tt(l.imageSizes)+'"]')):n+='[href="'+Tt(e)+'"]';var i=n;switch(t){case"style":i=Ba(e);break;case"script":i=Ya(e)}Dt.has(i)||(e=E({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Dt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Mn(i))||t==="script"&&a.querySelector(Un(i))||(t=a.createElement("link"),Ie(t,"link",e),Ze(t),a.head.appendChild(t)))}}function d0(e,t){rl.m(e,t);var l=La;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Tt(a)+'"][href="'+Tt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ya(e)}if(!Dt.has(i)&&(e=E({rel:"modulepreload",href:e},t),Dt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Un(i)))return}a=l.createElement("link"),Ie(a,"link",e),Ze(a),l.head.appendChild(a)}}}function m0(e,t,l){rl.S(e,t,l);var a=La;if(a&&e){var n=ua(a).hoistableStyles,i=Ba(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(Mn(i)))f.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Dt.get(i))&&Or(e,l);var g=c=a.createElement("link");Ze(g),Ie(g,"link",e),g._p=new Promise(function(A,U){g.onload=A,g.onerror=U}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ii(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function h0(e,t){rl.X(e,t);var l=La;if(l&&e){var a=ua(l).hoistableScripts,n=Ya(e),i=a.get(n);i||(i=l.querySelector(Un(n)),i||(e=E({src:e,async:!0},t),(t=Dt.get(n))&&Dr(e,t),i=l.createElement("script"),Ze(i),Ie(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function p0(e,t){rl.M(e,t);var l=La;if(l&&e){var a=ua(l).hoistableScripts,n=Ya(e),i=a.get(n);i||(i=l.querySelector(Un(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=Dt.get(n))&&Dr(e,t),i=l.createElement("script"),Ze(i),Ie(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Wd(e,t,l,a){var n=(n=se.current)?Fi(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ba(l.href),l=ua(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ba(l.href);var i=ua(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Mn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Dt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Dt.set(e,l),i||g0(n,e,l,c.state))),t&&a===null)throw Error(r(528,""));return c}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ya(l),l=ua(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ba(e){return'href="'+Tt(e)+'"'}function Mn(e){return'link[rel="stylesheet"]['+e+"]"}function Fd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function g0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ie(t,"link",l),Ze(t),e.head.appendChild(t))}function Ya(e){return'[src="'+Tt(e)+'"]'}function Un(e){return"script[async]"+e}function Id(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Tt(l.href)+'"]');if(a)return t.instance=a,Ze(a),a;var n=E({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),Ie(a,"style",n),Ii(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ba(l.href);var i=e.querySelector(Mn(n));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;a=Fd(l),(n=Dt.get(n))&&Or(a,n),i=(e.ownerDocument||e).createElement("link"),Ze(i);var c=i;return c._p=new Promise(function(f,g){c.onload=f,c.onerror=g}),Ie(i,"link",a),t.state.loading|=4,Ii(i,l.precedence,e),t.instance=i;case"script":return i=Ya(l.src),(n=e.querySelector(Un(i)))?(t.instance=n,Ze(n),n):(a=l,(n=Dt.get(i))&&(a=E({},l),Dr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),Ie(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ii(a,l.precedence,e));return t.instance}function Ii(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pi=null;function Pd(e,t,l){if(Pi===null){var a=new Map,n=Pi=new Map;n.set(l,a)}else n=Pi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[$a]||i[Ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=a.get(c);f?f.push(i):a.set(c,[i])}}return a}function em(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function v0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function y0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ba(a.href),i=t.querySelector(Mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ze(i);return}i=t.ownerDocument||t,a=Fd(a),(n=Dt.get(n))&&Or(a,n),i=i.createElement("link"),Ze(i);var c=i;c._p=new Promise(function(f,g){c.onload=f,c.onerror=g}),Ie(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=eu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Mr=0;function b0(e,t){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Mr===0&&(Mr=62500*Pp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Mr?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function lu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,t.forEach(x0,e),tu=null,eu.call(e))}function x0(e,t){if(!(t.state.loading&4)){var l=tu.get(e);if(l)var a=l.get(null);else{l=new Map,tu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=eu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var wn={$$typeof:X,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function S0(e,t,l,a,n,i,c,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ru(0),this.hiddenUpdates=Ru(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function lm(e,t,l,a,n,i,c,f,g,A,U,Y){return e=new S0(e,t,l,c,g,A,U,Y,f),t=1,i===!0&&(t|=24),i=gt(3,null,null,t),e.current=i,i.stateNode=e,t=dc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},gc(i),e}function am(e){return e?(e=ga,e):ga}function nm(e,t,l,a,n,i){n=am(n),a.context===null?a.context=n:a.pendingContext=n,a=yl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=bl(e,a,t),l!==null&&(st(l,e,t),mn(l,e,t))}function im(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ur(e,t){im(e,t),(e=e.alternate)&&im(e,t)}function um(e){if(e.tag===13||e.tag===31){var t=Xl(e,67108864);t!==null&&st(t,e,67108864),Ur(e,67108864)}}function cm(e){if(e.tag===13||e.tag===31){var t=St();t=Cu(t);var l=Xl(e,t);l!==null&&st(l,e,t),Ur(e,t)}}var au=!0;function E0(e,t,l,a){var n=w.T;w.T=null;var i=T.p;try{T.p=2,wr(e,t,l,a)}finally{T.p=i,w.T=n}}function z0(e,t,l,a){var n=w.T;w.T=null;var i=T.p;try{T.p=8,wr(e,t,l,a)}finally{T.p=i,w.T=n}}function wr(e,t,l,a){if(au){var n=Hr(a);if(n===null)Sr(e,t,a,nu,l),om(e,a);else if(j0(n,e,t,l,a))a.stopPropagation();else if(om(e,a),t&4&&-1<T0.indexOf(e)){for(;n!==null;){var i=ia(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ll(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var g=1<<31-ht(c);f.entanglements[1]|=g,c&=~g}Qt(i),(ye&6)===0&&(qi=dt()+500,Cn(0))}}break;case 31:case 13:f=Xl(i,2),f!==null&&st(f,i,2),Xi(),Ur(i,2)}if(i=Hr(a),i===null&&Sr(e,t,a,nu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Sr(e,t,a,null,l)}}function Hr(e){return e=Bu(e),Lr(e)}var nu=null;function Lr(e){if(nu=null,e=na(e),e!==null){var t=h(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=v(t),e!==null)return e;e=null}else if(l===31){if(e=j(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nu=e,null}function rm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oh()){case po:return 2;case go:return 8;case Jn:case sh:return 32;case vo:return 268435456;default:return 32}default:return 32}}var Br=!1,_l=null,Ol=null,Dl=null,Hn=new Map,Ln=new Map,Ml=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function om(e,t){switch(e){case"focusin":case"focusout":_l=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Dl=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(t.pointerId)}}function Bn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ia(t),t!==null&&um(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function j0(e,t,l,a,n){switch(t){case"focusin":return _l=Bn(_l,e,t,l,a,n),!0;case"dragenter":return Ol=Bn(Ol,e,t,l,a,n),!0;case"mouseover":return Dl=Bn(Dl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Hn.set(i,Bn(Hn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Ln.set(i,Bn(Ln.get(i)||null,e,t,l,a,n)),!0}return!1}function sm(e){var t=na(e.target);if(t!==null){var l=h(t);if(l!==null){if(t=l.tag,t===13){if(t=v(l),t!==null){e.blockedOn=t,zo(e.priority,function(){cm(l)});return}}else if(t===31){if(t=j(l),t!==null){e.blockedOn=t,zo(e.priority,function(){cm(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Hr(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Lu=a,l.target.dispatchEvent(a),Lu=null}else return t=ia(l),t!==null&&um(t),e.blockedOn=l,!1;t.shift()}return!0}function fm(e,t,l){iu(e)&&l.delete(t)}function N0(){Br=!1,_l!==null&&iu(_l)&&(_l=null),Ol!==null&&iu(Ol)&&(Ol=null),Dl!==null&&iu(Dl)&&(Dl=null),Hn.forEach(fm),Ln.forEach(fm)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,Br||(Br=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,N0)))}var cu=null;function dm(e){cu!==e&&(cu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Lr(a||l)===null)continue;break}var i=ia(l);i!==null&&(e.splice(t,3),t-=3,Hc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function qa(e){function t(g){return uu(g,e)}_l!==null&&uu(_l,e),Ol!==null&&uu(Ol,e),Dl!==null&&uu(Dl,e),Hn.forEach(t),Ln.forEach(t);for(var l=0;l<Ml.length;l++){var a=Ml[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ml.length&&(l=Ml[0],l.blockedOn===null);)sm(l),l.blockedOn===null&&Ml.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[nt]||null;if(typeof i=="function")c||dm(l);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[nt]||null)f=c.formAction;else if(Lr(n)!==null)continue}else f=c.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),dm(l)}}}function mm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Yr(e){this._internalRoot=e}ru.prototype.render=Yr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,a=St();nm(l,a,e,t,null,null)},ru.prototype.unmount=Yr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nm(e.current,2,null,e,null,null),Xi(),t[aa]=null}};function ru(e){this._internalRoot=e}ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eo();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ml.length&&t!==0&&t<Ml[l].priority;l++);Ml.splice(l,0,e),l===0&&sm(e)}};var hm=o.version;if(hm!=="19.2.7")throw Error(r(527,hm,"19.2.7"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var A0={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{ka=ou.inject(A0),mt=ou}catch{}}return qn.createRoot=function(e,t){if(!m(e))throw Error(r(299));var l=!1,a="",n=Sf,i=Ef,c=zf;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lm(e,1,!1,null,null,l,a,null,n,i,c,mm),e[aa]=t.current,xr(e),new Yr(t)},qn.hydrateRoot=function(e,t,l){if(!m(e))throw Error(r(299));var a=!1,n="",i=Sf,c=Ef,f=zf,g=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(g=l.formState)),t=lm(e,1,!0,t,l??null,a,n,g,i,c,f,mm),t.context=am(null),l=t.current,a=St(),a=Cu(a),n=yl(a),n.callback=null,bl(l,n,a),l=a,t.current.lanes=l,Ka(t,l),Qt(t),e[aa]=t.current,xr(e),new ru(t)},qn.version="19.2.7",qn}var Tm;function L0(){if(Tm)return Xr.exports;Tm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Xr.exports=H0(),Xr.exports}var B0=L0();var lo=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Um=/^[\\/]{2}/;function Y0(u,o){return o+u.replace(/\\/g,"/")}var jm="popstate";function Nm(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function q0(u={}){function o(r,m){let h=m.state?.masked,{pathname:v,search:j,hash:x}=h||r.location;return Ir("",{pathname:v,search:j,hash:x},m.state&&m.state.usr||null,m.state&&m.state.key||"default",h?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function s(r,m){return typeof m=="string"?m:Xn(m)}return X0(o,s,null,u)}function _e(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Mt(u,o){if(!u){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function G0(){return Math.random().toString(36).substring(2,10)}function Am(u,o){return{usr:u.state,key:u.key,idx:o,masked:u.mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function Ir(u,o,s=null,r,m){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof o=="string"?Xa(o):o,state:s,key:o&&o.key||r||G0(),mask:m}}function Xn({pathname:u="/",search:o="",hash:s=""}){return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function Xa(u){let o={};if(u){let s=u.indexOf("#");s>=0&&(o.hash=u.substring(s),u=u.substring(0,s));let r=u.indexOf("?");r>=0&&(o.search=u.substring(r),u=u.substring(0,r)),u&&(o.pathname=u)}return o}function X0(u,o,s,r={}){let{window:m=document.defaultView,v5Compat:h=!1}=r,v=m.history,j="POP",x=null,p=R();p==null&&(p=0,v.replaceState({...v.state,idx:p},""));function R(){return(v.state||{idx:null}).idx}function E(){j="POP";let H=R(),K=H==null?null:H-p;p=H,x&&x({action:j,location:B.location,delta:K})}function M(H,K){j="PUSH";let Q=Nm(H)?H:Ir(B.location,H,K);p=R()+1;let X=Am(Q,p),I=B.createHref(Q.mask||Q);try{v.pushState(X,"",I)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;m.location.assign(I)}h&&x&&x({action:j,location:B.location,delta:1})}function _(H,K){j="REPLACE";let Q=Nm(H)?H:Ir(B.location,H,K);p=R();let X=Am(Q,p),I=B.createHref(Q.mask||Q);v.replaceState(X,"",I),h&&x&&x({action:j,location:B.location,delta:0})}function D(H){return Q0(m,H)}let B={get action(){return j},get location(){return u(m,v)},listen(H){if(x)throw new Error("A history only accepts one active listener");return m.addEventListener(jm,E),x=H,()=>{m.removeEventListener(jm,E),x=null}},createHref(H){return o(m,H)},createURL:D,encodeLocation(H){let K=D(H);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:M,replace:_,go(H){return v.go(H)}};return B}function Q0(u,o,s=!1){let r="http://localhost";u&&(r=u.location.origin!=="null"?u.location.origin:u.location.href),_e(r,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:Xn(o);return m=m.replace(/ $/,"%20"),!s&&Um.test(m)&&(m=r+m),new URL(m,r)}function wm(u,o,s="/"){return Z0(u,o,s,!1)}function Z0(u,o,s,r,m){let h=typeof o=="string"?Xa(o):o,v=ol(h.pathname||"/",s);if(v==null)return null;let j=V0(u),x=null,p=lg(v);for(let R=0;x==null&&R<j.length;++R)x=tg(j[R],p,r);return x}function V0(u){let o=Hm(u);return k0(o),o}function Hm(u,o=[],s=[],r="",m=!1){let h=(v,j,x=m,p)=>{let R={relativePath:p===void 0?v.path||"":p,caseSensitive:v.caseSensitive===!0,childrenIndex:j,route:v};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(r)&&x)return;_e(R.relativePath.startsWith(r),`Absolute route path "${R.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(r.length)}let E=Lt([r,R.relativePath]),M=s.concat(R);v.children&&v.children.length>0&&(_e(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Hm(v.children,o,M,E,x)),!(v.path==null&&!v.index)&&o.push({path:E,score:P0(E,v.index),routesMeta:M.map((_,D)=>{let[B,H]=Ym(_.relativePath,_.caseSensitive,D===M.length-1);return{..._,matcher:B,compiledParams:H}})})};return u.forEach((v,j)=>{if(v.path===""||!v.path?.includes("?"))h(v,j);else for(let x of Lm(v.path))h(v,j,!0,x)}),o}function Lm(u){let o=u.split("/");if(o.length===0)return[];let[s,...r]=o,m=s.endsWith("?"),h=s.replace(/\?$/,"");if(r.length===0)return m?[h,""]:[h];let v=Lm(r.join("/")),j=[];return j.push(...v.map(x=>x===""?h:[h,x].join("/"))),m&&j.push(...v),j.map(x=>u.startsWith("/")&&x===""?"/":x)}function k0(u){u.sort((o,s)=>o.score!==s.score?s.score-o.score:eg(o.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var J0=/^:[\w-]+$/,K0=3,$0=2,W0=1,F0=10,I0=-2,Rm=u=>u==="*";function P0(u,o){let s=u.split("/"),r=s.length;return s.some(Rm)&&(r+=I0),o&&(r+=$0),s.filter(m=>!Rm(m)).reduce((m,h)=>m+(J0.test(h)?K0:h===""?W0:F0),r)}function eg(u,o){return u.length===o.length&&u.slice(0,-1).every((r,m)=>r===o[m])?u[u.length-1]-o[o.length-1]:0}function tg(u,o,s=!1){let{routesMeta:r}=u,m={},h="/",v=[];for(let j=0;j<r.length;++j){let x=r[j],p=j===r.length-1,R=h==="/"?o:o.slice(h.length)||"/",E={path:x.relativePath,caseSensitive:x.caseSensitive,end:p},M=x.matcher&&x.compiledParams?Bm(E,R,x.matcher,x.compiledParams):hu(E,R),_=x.route;if(!M&&p&&s&&!r[r.length-1].route.index&&(M=hu({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},R)),!M)return null;Object.assign(m,M.params),v.push({params:m,pathname:Lt([h,M.pathname]),pathnameBase:ig(Lt([h,M.pathnameBase])),route:_}),M.pathnameBase!=="/"&&(h=Lt([h,M.pathnameBase]))}return v}function hu(u,o){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,r]=Ym(u.path,u.caseSensitive,u.end);return Bm(u,o,s,r)}function Bm(u,o,s,r){let m=o.match(s);if(!m)return null;let h=m[0],v=h.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:r.reduce((p,{paramName:R,isOptional:E},M)=>{if(R==="*"){let D=j[M]||"";v=h.slice(0,h.length-D.length).replace(/(.)\/+$/,"$1")}const _=j[M];return E&&!_?p[R]=void 0:p[R]=(_||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:v,pattern:u}}function Ym(u,o=!1,s=!0){Mt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,j,x,p,R)=>{if(r.push({paramName:j,isOptional:x!=null}),x){let E=R.charAt(p+v.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),r]}function lg(u){try{return u.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Mt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),u}}function ol(u,o){if(o==="/")return u;if(!u.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,r=u.charAt(s);return r&&r!=="/"?null:u.slice(s)||"/"}function ag(u,o="/"){let{pathname:s,search:r="",hash:m=""}=typeof u=="string"?Xa(u):u,h;return s?(s=qm(s),s.startsWith("/")?h=Cm(s.substring(1),"/"):h=Cm(s,o)):h=o,{pathname:h,search:ug(r),hash:cg(m)}}function Cm(u,o){let s=pu(o).split("/");return u.split("/").forEach(m=>{m===".."?s.length>1&&s.pop():m!=="."&&s.push(m)}),s.length>1?s.join("/"):"/"}function kr(u,o,s,r){return`Cannot include a '${u}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ng(u){return u.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function ao(u){let o=ng(u);return o.map((s,r)=>r===o.length-1?s.pathname:s.pathnameBase)}function yu(u,o,s,r=!1){let m;typeof u=="string"?m=Xa(u):(m={...u},_e(!m.pathname||!m.pathname.includes("?"),kr("?","pathname","search",m)),_e(!m.pathname||!m.pathname.includes("#"),kr("#","pathname","hash",m)),_e(!m.search||!m.search.includes("#"),kr("#","search","hash",m)));let h=u===""||m.pathname==="",v=h?"/":m.pathname,j;if(v==null)j=s;else{let E=o.length-1;if(!r&&v.startsWith("..")){let M=v.split("/");for(;M[0]==="..";)M.shift(),E-=1;m.pathname=M.join("/")}j=E>=0?o[E]:"/"}let x=ag(m,j),p=v&&v!=="/"&&v.endsWith("/"),R=(h||v===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(p||R)&&(x.pathname+="/"),x}var qm=u=>u.replace(/[\\/]{2,}/g,"/"),Lt=u=>qm(u.join("/")),pu=u=>u.replace(/\/+$/,""),ig=u=>pu(u).replace(/^\/*/,"/"),ug=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,cg=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,rg=class{constructor(u,o,s,r=!1){this.status=u,this.statusText=o||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function og(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function sg(u){let o=u.map(s=>s.route.path).filter(Boolean);return Lt(o)||"/"}var Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xm(u,o){let s=u;if(typeof s!="string"||!lo.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,m=!1;if(Gm)try{let h=new URL(window.location.href),v=Um.test(s)?new URL(Y0(s,h.protocol)):new URL(s),j=ol(v.pathname,o);v.origin===h.origin&&j!=null?s=j+v.search+v.hash:m=!0}catch{Mt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:m,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Qm=["POST","PUT","PATCH","DELETE"];new Set(Qm);var fg=["GET",...Qm];new Set(fg);var dg=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function mg(u){try{return dg.includes(new URL(u).protocol)}catch{return!1}}var Qa=b.createContext(null);Qa.displayName="DataRouter";var bu=b.createContext(null);bu.displayName="DataRouterState";var Zm=b.createContext(!1);function hg(){return b.useContext(Zm)}var Vm=b.createContext({isTransitioning:!1});Vm.displayName="ViewTransition";var pg=b.createContext(new Map);pg.displayName="Fetchers";var gg=b.createContext(null);gg.displayName="Await";var Et=b.createContext(null);Et.displayName="Navigation";var Qn=b.createContext(null);Qn.displayName="Location";var Bt=b.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var no=b.createContext(null);no.displayName="RouteError";var km="REACT_ROUTER_ERROR",vg="REDIRECT",yg="ROUTE_ERROR_RESPONSE";function bg(u){if(u.startsWith(`${km}:${vg}:{`))try{let o=JSON.parse(u.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function xg(u){if(u.startsWith(`${km}:${yg}:{`))try{let o=JSON.parse(u.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new rg(o.status,o.statusText,o.data)}catch{}}function Sg(u,{relative:o}={}){_e(Za(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=b.useContext(Et),{hash:m,pathname:h,search:v}=Zn(u,{relative:o}),j=h;return s!=="/"&&(j=h==="/"?s:Lt([s,h])),r.createHref({pathname:j,search:v,hash:m})}function Za(){return b.useContext(Qn)!=null}function Yt(){return _e(Za(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Qn).location}var Jm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Km(u){b.useContext(Et).static||b.useLayoutEffect(u)}function io(){let{isDataRoute:u}=b.useContext(Bt);return u?Hg():Eg()}function Eg(){_e(Za(),"useNavigate() may be used only in the context of a <Router> component.");let u=b.useContext(Qa),{basename:o,navigator:s}=b.useContext(Et),{matches:r}=b.useContext(Bt),{pathname:m}=Yt(),h=JSON.stringify(ao(r)),v=b.useRef(!1);return Km(()=>{v.current=!0}),b.useCallback((x,p={})=>{if(Mt(v.current,Jm),!v.current)return;if(typeof x=="number"){s.go(x);return}let R=yu(x,JSON.parse(h),m,p.relative==="path");u==null&&o!=="/"&&(R.pathname=R.pathname==="/"?o:Lt([o,R.pathname])),(p.replace?s.replace:s.push)(R,p.state,p)},[o,s,h,m,u])}var zg=b.createContext(null);function Tg(u){let o=b.useContext(Bt).outlet;return b.useMemo(()=>o&&b.createElement(zg.Provider,{value:u},o),[o,u])}function Zn(u,{relative:o}={}){let{matches:s}=b.useContext(Bt),{pathname:r}=Yt(),m=JSON.stringify(ao(s));return b.useMemo(()=>yu(u,JSON.parse(m),r,o==="path"),[u,m,r,o])}function jg(u,o){return $m(u,o)}function $m(u,o,s){_e(Za(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=b.useContext(Et),{matches:m}=b.useContext(Bt),h=m[m.length-1],v=h?h.params:{},j=h?h.pathname:"/",x=h?h.pathnameBase:"/",p=h&&h.route;{let H=p&&p.path||"";Fm(j,!p||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let R=Yt(),E;if(o){let H=typeof o=="string"?Xa(o):o;_e(x==="/"||H.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${H.pathname}" was given in the \`location\` prop.`),E=H}else E=R;let M=E.pathname||"/",_=M;if(x!=="/"){let H=x.replace(/^\//,"").split("/");_="/"+M.replace(/^\//,"").split("/").slice(H.length).join("/")}let D=s&&s.state.matches.length?s.state.matches.map(H=>Object.assign(H,{route:s.manifest[H.route.id]||H.route})):wm(u,{pathname:_});Mt(p||D!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Mt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=_g(D&&D.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:Lt([x,r.encodeLocation?r.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?x:Lt([x,r.encodeLocation?r.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),m,s);return o&&B?b.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...E},navigationType:"POP"}},B):B}function Ng(){let u=wg(),o=og(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:r},h={padding:"2px 4px",backgroundColor:r},v=null;return console.error("Error handled by React Router default ErrorBoundary:",u),v=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:h},"ErrorBoundary")," or"," ",b.createElement("code",{style:h},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},o),s?b.createElement("pre",{style:m},s):null,v)}var Ag=b.createElement(Ng,null),Wm=class extends b.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){this.props.onError?this.props.onError(u,o):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=xg(u.digest);s&&(u=s)}let o=u!==void 0?b.createElement(Bt.Provider,{value:this.props.routeContext},b.createElement(no.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?b.createElement(Rg,{error:u},o):o}};Wm.contextType=Zm;var Jr=new WeakMap;function Rg({children:u,error:o}){let{basename:s}=b.useContext(Et);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let r=bg(o.digest);if(r){let m=Jr.get(o);if(m)throw m;let h=Xm(r.location,s),v=h.absoluteURL||h.to;if(mg(v))throw new Error("Invalid redirect location");if(Gm&&!Jr.get(o))if(h.isExternal||r.reloadDocument)window.location.href=v;else{const j=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:r.replace}));throw Jr.set(o,j),j}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${v}`})}}return u}function Cg({routeContext:u,match:o,children:s}){let r=b.useContext(Qa);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(Bt.Provider,{value:u},s)}function _g(u,o=[],s){let r=s?.state;if(u==null){if(!r)return null;if(r.errors)u=r.matches;else if(o.length===0&&!r.initialized&&r.matches.length>0)u=r.matches;else return null}let m=u,h=r?.errors;if(h!=null){let R=m.findIndex(E=>E.route.id&&h?.[E.route.id]!==void 0);_e(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),m=m.slice(0,Math.min(m.length,R+1))}let v=!1,j=-1;if(s&&r){v=r.renderFallback;for(let R=0;R<m.length;R++){let E=m[R];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(j=R),E.route.id){let{loaderData:M,errors:_}=r,D=E.route.loader&&!M.hasOwnProperty(E.route.id)&&(!_||_[E.route.id]===void 0);if(E.route.lazy||D){s.isStatic&&(v=!0),j>=0?m=m.slice(0,j+1):m=[m[0]];break}}}}let x=s?.onError,p=r&&x?(R,E)=>{x(R,{location:r.location,params:r.matches?.[0]?.params??{},pattern:sg(r.matches),errorInfo:E})}:void 0;return m.reduceRight((R,E,M)=>{let _,D=!1,B=null,H=null;r&&(_=h&&E.route.id?h[E.route.id]:void 0,B=E.route.errorElement||Ag,v&&(j<0&&M===0?(Fm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,H=null):j===M&&(D=!0,H=E.route.hydrateFallbackElement||null)));let K=o.concat(m.slice(0,M+1)),Q=()=>{let X;return _?X=B:D?X=H:E.route.Component?X=b.createElement(E.route.Component,null):E.route.element?X=E.route.element:X=R,b.createElement(Cg,{match:E,routeContext:{outlet:R,matches:K,isDataRoute:r!=null},children:X})};return r&&(E.route.ErrorBoundary||E.route.errorElement||M===0)?b.createElement(Wm,{location:r.location,revalidation:r.revalidation,component:B,error:_,children:Q(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:p}):Q()},null)}function uo(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Og(u){let o=b.useContext(Qa);return _e(o,uo(u)),o}function Dg(u){let o=b.useContext(bu);return _e(o,uo(u)),o}function Mg(u){let o=b.useContext(Bt);return _e(o,uo(u)),o}function co(u){let o=Mg(u),s=o.matches[o.matches.length-1];return _e(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function Ug(){return co("useRouteId")}function wg(){let u=b.useContext(no),o=Dg("useRouteError"),s=co("useRouteError");return u!==void 0?u:o.errors?.[s]}function Hg(){let{router:u}=Og("useNavigate"),o=co("useNavigate"),s=b.useRef(!1);return Km(()=>{s.current=!0}),b.useCallback(async(m,h={})=>{Mt(s.current,Jm),s.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:o,...h}))},[u,o])}var _m={};function Fm(u,o,s){!o&&!_m[u]&&(_m[u]=!0,Mt(!1,s))}b.memo(Lg);function Lg({routes:u,manifest:o,future:s,state:r,isStatic:m,onError:h}){return $m(u,void 0,{manifest:o,state:r,isStatic:m,onError:h})}function Bg({to:u,replace:o,state:s,relative:r}){_e(Za(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=b.useContext(Et);Mt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=b.useContext(Bt),{pathname:v}=Yt(),j=io(),x=yu(u,ao(h),v,r==="path"),p=JSON.stringify(x);return b.useEffect(()=>{j(JSON.parse(p),{replace:o,state:s,relative:r})},[j,p,r,o,s]),null}function Yg(u){return Tg(u.context)}function wl(u){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qg({basename:u="/",children:o=null,location:s,navigationType:r="POP",navigator:m,static:h=!1,useTransitions:v}){_e(!Za(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=u.replace(/^\/*/,"/"),x=b.useMemo(()=>({basename:j,navigator:m,static:h,useTransitions:v,future:{}}),[j,m,h,v]);typeof s=="string"&&(s=Xa(s));let{pathname:p="/",search:R="",hash:E="",state:M=null,key:_="default",mask:D}=s,B=b.useMemo(()=>{let H=ol(p,j);return H==null?null:{location:{pathname:H,search:R,hash:E,state:M,key:_,mask:D},navigationType:r}},[j,p,R,E,M,_,r,D]);return Mt(B!=null,`<Router basename="${j}"> is not able to match the URL "${p}${R}${E}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:b.createElement(Et.Provider,{value:x},b.createElement(Qn.Provider,{children:o,value:B}))}function Gg({children:u,location:o}){return jg(Pr(u),o)}function Pr(u,o=[]){let s=[];return b.Children.forEach(u,(r,m)=>{if(!b.isValidElement(r))return;let h=[...o,m];if(r.type===b.Fragment){s.push.apply(s,Pr(r.props.children,h));return}_e(r.type===wl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!r.props.index||!r.props.children,"An index route cannot have child routes.");let v={id:r.props.id||h.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(v.children=Pr(r.props.children,h)),s.push(v)}),s}var du="get",mu="application/x-www-form-urlencoded";function xu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Xg(u){return xu(u)&&u.tagName.toLowerCase()==="button"}function Qg(u){return xu(u)&&u.tagName.toLowerCase()==="form"}function Zg(u){return xu(u)&&u.tagName.toLowerCase()==="input"}function Vg(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function kg(u,o){return u.button===0&&(!o||o==="_self")&&!Vg(u)}function eo(u=""){return new URLSearchParams(typeof u=="string"||Array.isArray(u)||u instanceof URLSearchParams?u:Object.keys(u).reduce((o,s)=>{let r=u[s];return o.concat(Array.isArray(r)?r.map(m=>[s,m]):[[s,r]])},[]))}function Jg(u,o){let s=eo(u);return o&&o.forEach((r,m)=>{s.has(m)||o.getAll(m).forEach(h=>{s.append(m,h)})}),s}var su=null;function Kg(){if(su===null)try{new FormData(document.createElement("form"),0),su=!1}catch{su=!0}return su}var $g=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kr(u){return u!=null&&!$g.has(u)?(Mt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mu}"`),null):u}function Wg(u,o){let s,r,m,h,v;if(Qg(u)){let j=u.getAttribute("action");r=j?ol(j,o):null,s=u.getAttribute("method")||du,m=Kr(u.getAttribute("enctype"))||mu,h=new FormData(u)}else if(Xg(u)||Zg(u)&&(u.type==="submit"||u.type==="image")){let j=u.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=u.getAttribute("formaction")||j.getAttribute("action");if(r=x?ol(x,o):null,s=u.getAttribute("formmethod")||j.getAttribute("method")||du,m=Kr(u.getAttribute("formenctype"))||Kr(j.getAttribute("enctype"))||mu,h=new FormData(j,u),!Kg()){let{name:p,type:R,value:E}=u;if(R==="image"){let M=p?`${p}.`:"";h.append(`${M}x`,"0"),h.append(`${M}y`,"0")}else p&&h.append(p,E)}}else{if(xu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=du,r=null,m=mu,v=u}return h&&m==="text/plain"&&(v=h,h=void 0),{action:r,method:s.toLowerCase(),encType:m,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ro(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Im(u,o,s,r){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${r}`:m.pathname=`${m.pathname}.${r}`:m.pathname==="/"?m.pathname=`_root.${r}`:o&&ol(m.pathname,o)==="/"?m.pathname=`${pu(o)}/_root.${r}`:m.pathname=`${pu(m.pathname)}.${r}`,m}async function Fg(u,o){if(u.id in o)return o[u.id];try{let s=await import(u.module);return o[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ig(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function Pg(u,o,s){let r=await Promise.all(u.map(async m=>{let h=o.routes[m.route.id];if(h){let v=await Fg(h,s);return v.links?v.links():[]}return[]}));return av(r.flat(1).filter(Ig).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Om(u,o,s,r,m,h){let v=(x,p)=>s[p]?x.route.id!==s[p].route.id:!0,j=(x,p)=>s[p].pathname!==x.pathname||s[p].route.path?.endsWith("*")&&s[p].params["*"]!==x.params["*"];return h==="assets"?o.filter((x,p)=>v(x,p)||j(x,p)):h==="data"?o.filter((x,p)=>{let R=r.routes[x.route.id];if(!R||!R.hasLoader)return!1;if(v(x,p)||j(x,p))return!0;if(x.route.shouldRevalidate){let E=x.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function ev(u,o,{includeHydrateFallback:s}={}){return tv(u.map(r=>{let m=o.routes[r.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),s&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function tv(u){return[...new Set(u)]}function lv(u){let o={},s=Object.keys(u).sort();for(let r of s)o[r]=u[r];return o}function av(u,o){let s=new Set;return new Set(o),u.reduce((r,m)=>{let h=JSON.stringify(lv(m));return s.has(h)||(s.add(h),r.push({key:h,link:m})),r},[])}function oo(){let u=b.useContext(Qa);return ro(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function nv(){let u=b.useContext(bu);return ro(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var so=b.createContext(void 0);so.displayName="FrameworkContext";function Su(){let u=b.useContext(so);return ro(u,"You must render this element inside a <HydratedRouter> element"),u}function iv(u,o){let s=b.useContext(so),[r,m]=b.useState(!1),[h,v]=b.useState(!1),{onFocus:j,onBlur:x,onMouseEnter:p,onMouseLeave:R,onTouchStart:E}=o,M=b.useRef(null);b.useEffect(()=>{if(u==="render"&&v(!0),u==="viewport"){let B=K=>{K.forEach(Q=>{v(Q.isIntersecting)})},H=new IntersectionObserver(B,{threshold:.5});return M.current&&H.observe(M.current),()=>{H.disconnect()}}},[u]),b.useEffect(()=>{if(r){let B=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(B)}}},[r]);let _=()=>{m(!0)},D=()=>{m(!1),v(!1)};return s?u!=="intent"?[h,M,{}]:[h,M,{onFocus:Gn(j,_),onBlur:Gn(x,D),onMouseEnter:Gn(p,_),onMouseLeave:Gn(R,D),onTouchStart:Gn(E,_)}]:[!1,M,{}]}function Gn(u,o){return s=>{u&&u(s),s.defaultPrevented||o(s)}}function uv({page:u,...o}){let s=hg(),{nonce:r}=Su(),{router:m}=oo(),h=b.useMemo(()=>wm(m.routes,u,m.basename),[m.routes,u,m.basename]);return h?(o.nonce==null&&r&&(o={...o,nonce:r}),s?b.createElement(rv,{page:u,matches:h,...o}):b.createElement(ov,{page:u,matches:h,...o})):null}function cv(u){let{manifest:o,routeModules:s}=Su(),[r,m]=b.useState([]);return b.useEffect(()=>{let h=!1;return Pg(u,o,s).then(v=>{h||m(v)}),()=>{h=!0}},[u,o,s]),r}function rv({page:u,matches:o,...s}){let r=Yt(),{future:m}=Su(),{basename:h}=oo(),v=b.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let j=Im(u,h,m.v8_trailingSlashAwareDataRequests,"rsc"),x=!1,p=[];for(let R of o)typeof R.route.shouldRevalidate=="function"?x=!0:p.push(R.route.id);return x&&p.length>0&&j.searchParams.set("_routes",p.join(",")),[j.pathname+j.search]},[h,m.v8_trailingSlashAwareDataRequests,u,r,o]);return b.createElement(b.Fragment,null,v.map(j=>b.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...s})))}function ov({page:u,matches:o,...s}){let r=Yt(),{future:m,manifest:h,routeModules:v}=Su(),{basename:j}=oo(),{loaderData:x,matches:p}=nv(),R=b.useMemo(()=>Om(u,o,p,h,r,"data"),[u,o,p,h,r]),E=b.useMemo(()=>Om(u,o,p,h,r,"assets"),[u,o,p,h,r]),M=b.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let B=new Set,H=!1;if(o.forEach(Q=>{let X=h.routes[Q.route.id];!X||!X.hasLoader||(!R.some(I=>I.route.id===Q.route.id)&&Q.route.id in x&&v[Q.route.id]?.shouldRevalidate||X.hasClientLoader?H=!0:B.add(Q.route.id))}),B.size===0)return[];let K=Im(u,j,m.v8_trailingSlashAwareDataRequests,"data");return H&&B.size>0&&K.searchParams.set("_routes",o.filter(Q=>B.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[K.pathname+K.search]},[j,m.v8_trailingSlashAwareDataRequests,x,r,h,R,o,u,v]),_=b.useMemo(()=>ev(E,h),[E,h]),D=cv(E);return b.createElement(b.Fragment,null,M.map(B=>b.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...s})),_.map(B=>b.createElement("link",{key:B,rel:"modulepreload",href:B,...s})),D.map(({key:B,link:H})=>b.createElement("link",{key:B,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function sv(...u){return o=>{u.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fv&&(window.__reactRouterVersion="7.18.1")}catch{}function dv({basename:u,children:o,useTransitions:s,window:r}){let m=b.useRef();m.current==null&&(m.current=q0({window:r,v5Compat:!0}));let h=m.current,[v,j]=b.useState({action:h.action,location:h.location}),x=b.useCallback(p=>{s===!1?j(p):b.startTransition(()=>j(p))},[s]);return b.useLayoutEffect(()=>h.listen(x),[h,x]),b.createElement(qg,{basename:u,children:o,location:v.location,navigationType:v.action,navigator:h,useTransitions:s})}var fo=b.forwardRef(function({onClick:o,discover:s="render",prefetch:r="none",relative:m,reloadDocument:h,replace:v,mask:j,state:x,target:p,to:R,preventScrollReset:E,viewTransition:M,defaultShouldRevalidate:_,...D},B){let{basename:H,navigator:K,useTransitions:Q}=b.useContext(Et),X=typeof R=="string"&&lo.test(R),I=Xm(R,H);R=I.to;let re=Sg(R,{relative:m}),Z=Yt(),G=null;if(j){let Oe=yu(j,[],Z.mask?Z.mask.pathname:"/",!0);H!=="/"&&(Oe.pathname=Oe.pathname==="/"?H:Lt([H,Oe.pathname])),G=K.createHref(Oe)}let[oe,J,ie]=iv(r,D),Pe=pv(R,{replace:v,mask:j,state:x,target:p,preventScrollReset:E,relative:m,viewTransition:M,defaultShouldRevalidate:_,useTransitions:Q});function Qe(Oe){o&&o(Oe),Oe.defaultPrevented||Pe(Oe)}let ft=!(I.isExternal||h),at=b.createElement("a",{...D,...ie,href:(ft?G:void 0)||I.absoluteURL||re,onClick:ft?Qe:o,ref:sv(B,J),target:p,"data-discover":!X&&s==="render"?"true":void 0});return oe&&!X?b.createElement(b.Fragment,null,at,b.createElement(uv,{page:re})):at});fo.displayName="Link";var Pm=b.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:r="",end:m=!1,style:h,to:v,viewTransition:j,children:x,...p},R){let E=Zn(v,{relative:p.relative}),M=Yt(),_=b.useContext(bu),{navigator:D,basename:B}=b.useContext(Et),H=_!=null&&Sv(E)&&j===!0,K=D.encodeLocation?D.encodeLocation(E).pathname:E.pathname,Q=M.pathname,X=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(Q=Q.toLowerCase(),X=X?X.toLowerCase():null,K=K.toLowerCase()),X&&B&&(X=ol(X,B)||X);const I=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let re=Q===K||!m&&Q.startsWith(K)&&Q.charAt(I)==="/",Z=X!=null&&(X===K||!m&&X.startsWith(K)&&X.charAt(K.length)==="/"),G={isActive:re,isPending:Z,isTransitioning:H},oe=re?o:void 0,J;typeof r=="function"?J=r(G):J=[r,re?"active":null,Z?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ie=typeof h=="function"?h(G):h;return b.createElement(fo,{...p,"aria-current":oe,className:J,ref:R,style:ie,to:v,viewTransition:j},typeof x=="function"?x(G):x)});Pm.displayName="NavLink";var mv=b.forwardRef(({discover:u="render",fetcherKey:o,navigate:s,reloadDocument:r,replace:m,state:h,method:v=du,action:j,onSubmit:x,relative:p,preventScrollReset:R,viewTransition:E,defaultShouldRevalidate:M,..._},D)=>{let{useTransitions:B}=b.useContext(Et),H=bv(),K=xv(j,{relative:p}),Q=v.toLowerCase()==="get"?"get":"post",X=typeof j=="string"&&lo.test(j),I=re=>{if(x&&x(re),re.defaultPrevented)return;re.preventDefault();let Z=re.nativeEvent.submitter,G=Z?.getAttribute("formmethod")||v,oe=()=>H(Z||re.currentTarget,{fetcherKey:o,method:G,navigate:s,replace:m,state:h,relative:p,preventScrollReset:R,viewTransition:E,defaultShouldRevalidate:M});B&&s!==!1?b.startTransition(()=>oe()):oe()};return b.createElement("form",{ref:D,method:Q,action:K,onSubmit:r?x:I,..._,"data-discover":!X&&u==="render"?"true":void 0})});mv.displayName="Form";function hv(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eh(u){let o=b.useContext(Qa);return _e(o,hv(u)),o}function pv(u,{target:o,replace:s,mask:r,state:m,preventScrollReset:h,relative:v,viewTransition:j,defaultShouldRevalidate:x,useTransitions:p}={}){let R=io(),E=Yt(),M=Zn(u,{relative:v});return b.useCallback(_=>{if(kg(_,o)){_.preventDefault();let D=s!==void 0?s:Xn(E)===Xn(M),B=()=>R(u,{replace:D,mask:r,state:m,preventScrollReset:h,relative:v,viewTransition:j,defaultShouldRevalidate:x});p?b.startTransition(()=>B()):B()}},[E,R,M,s,r,m,o,u,h,v,j,x,p])}function gv(u){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=b.useRef(eo(u)),s=b.useRef(!1),r=Yt(),m=b.useMemo(()=>Jg(r.search,s.current?null:o.current),[r.search]),h=io(),v=b.useCallback((j,x)=>{const p=eo(typeof j=="function"?j(new URLSearchParams(m)):j);s.current=!0,h("?"+p,x)},[h,m]);return[m,v]}var vv=0,yv=()=>`__${String(++vv)}__`;function bv(){let{router:u}=eh("useSubmit"),{basename:o}=b.useContext(Et),s=Ug(),r=u.fetch,m=u.navigate;return b.useCallback(async(h,v={})=>{let{action:j,method:x,encType:p,formData:R,body:E}=Wg(h,o);if(v.navigate===!1){let M=v.fetcherKey||yv();await r(M,s,v.action||j,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:R,body:E,formMethod:v.method||x,formEncType:v.encType||p,flushSync:v.flushSync})}else await m(v.action||j,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:R,body:E,formMethod:v.method||x,formEncType:v.encType||p,replace:v.replace,state:v.state,fromRouteId:s,flushSync:v.flushSync,viewTransition:v.viewTransition})},[r,m,o,s])}function xv(u,{relative:o}={}){let{basename:s}=b.useContext(Et),r=b.useContext(Bt);_e(r,"useFormAction must be used inside a RouteContext");let[m]=r.matches.slice(-1),h={...Zn(u||".",{relative:o})},v=Yt();if(u==null){h.search=v.search;let j=new URLSearchParams(h.search),x=j.getAll("index");if(x.some(R=>R==="")){j.delete("index"),x.filter(E=>E).forEach(E=>j.append("index",E));let R=j.toString();h.search=R?`?${R}`:""}}return(!u||u===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:Lt([s,h.pathname])),Xn(h)}function Sv(u,{relative:o}={}){let s=b.useContext(Vm);_e(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=eh("useViewTransitionState"),m=Zn(u,{relative:o});if(!s.isTransitioning)return!1;let h=ol(s.currentLocation.pathname,r)||s.currentLocation.pathname,v=ol(s.nextLocation.pathname,r)||s.nextLocation.pathname;return hu(m.pathname,v)!=null||hu(m.pathname,h)!=null}const Ev=[{to:"/profile",label:"Your Profile",icon:"👤"},{to:"/jobs",label:"Jobs",icon:"💼"},{to:"/applications",label:"Applications",icon:"📋"},{to:"/templates",label:"Templates",icon:"🎨"},{to:"/review",label:"Review",icon:"✏️"}];function zv({collapsed:u,onToggle:o}){return d.jsxs("aside",{className:`sidebar ${u?"collapsed":""}`,children:[d.jsxs("div",{className:"sidebar-header",children:[d.jsx("button",{type:"button",className:"sidebar-toggle",onClick:o,"aria-label":"Toggle sidebar",children:"☰"}),!u&&d.jsx("span",{className:"sidebar-brand",children:"Joblication"})]}),d.jsx("nav",{className:"sidebar-nav",children:Ev.map(s=>d.jsxs(Pm,{to:s.to,className:({isActive:r})=>`sidebar-link ${r?"active":""}`,title:s.label,children:[d.jsx("span",{className:"sidebar-icon",children:s.icon}),!u&&d.jsx("span",{children:s.label})]},s.to))})]})}function Tv(){const[u,o]=b.useState(!1);return d.jsxs("div",{className:"app-shell",children:[d.jsx(zv,{collapsed:u,onToggle:()=>o(s=>!s)}),d.jsx("main",{className:"app-main",children:d.jsx(Yg,{})})]})}const ta={"Content-Type":"application/json"};async function Le(u,o={}){const s=await fetch(u,o),r=await s.json().catch(()=>({}));if(!s.ok)throw new Error(r.error||`Request failed (${s.status})`);return r}const Re={health:()=>Le("/api/health"),config:()=>Le("/api/config"),getProfile:()=>Le("/api/profile"),saveProfile:u=>Le("/api/profile",{method:"PUT",headers:ta,body:JSON.stringify({profile:u})}),listJobs:()=>Le("/api/applications"),getJob:u=>Le(`/api/applications/${encodeURIComponent(u)}`),createJob:u=>Le("/api/applications",{method:"POST",headers:ta,body:JSON.stringify(u)}),updateJob:(u,o)=>Le(`/api/applications/${encodeURIComponent(u)}`,{method:"PUT",headers:ta,body:JSON.stringify(o)}),deleteJob:u=>Le(`/api/applications/${encodeURIComponent(u)}`,{method:"DELETE"}),scrapeUrl:u=>Le("/api/applications/scrape",{method:"POST",headers:ta,body:JSON.stringify({url:u})}),listApplications:()=>Le("/api/applications/view"),listOutputs:()=>Le("/api/outputs"),fileUrl:(u,o)=>`/api/files/${encodeURIComponent(u)}/${encodeURIComponent(o)}`,getReview:u=>Le(`/api/review/${encodeURIComponent(u)}`),saveReview:(u,o)=>Le(`/api/review/${encodeURIComponent(u)}`,{method:"PUT",headers:ta,body:JSON.stringify(o)}),rebuild:u=>Le(`/api/build/${encodeURIComponent(u)}`,{method:"POST"}),listTemplates:()=>Le("/api/templates"),getTemplate:u=>Le(`/api/templates/${encodeURIComponent(u)}`),saveTemplate:(u,o)=>Le(`/api/templates/${encodeURIComponent(u)}`,{method:"PUT",headers:ta,body:JSON.stringify(o)}),createTemplate:u=>Le("/api/templates",{method:"POST",headers:ta,body:JSON.stringify(u)}),generateStatus:()=>Le("/api/generate/status"),startGenerate:()=>Le("/api/generate",{method:"POST"})},th=b.createContext(null);function jv({children:u}){const[o,s]=b.useState(null),r=b.useRef(null),m=b.useCallback((v,j="success")=>{clearTimeout(r.current),s({message:v,type:j}),r.current=setTimeout(()=>s(null),3500)},[]),h=b.useMemo(()=>({showToast:m}),[m]);return d.jsxs(th.Provider,{value:h,children:[u,o&&d.jsx("div",{className:`toast show ${o.type}`,role:"status","aria-live":"polite",children:o.message})]})}function Vn(){const u=b.useContext(th);if(!u)throw new Error("useToast must be used within ToastProvider");return u}function la(u){return u.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,o=>o.toUpperCase())}function Nv(u){return u.includes("email")?"email":u.includes("phone")?"tel":u==="url"||u.includes("portfolio")||u.includes("github")||u.includes("linkedin")?"url":u.includes("Date")||u==="date"?"date":"text"}function Je({id:u,label:o,value:s,onChange:r,type:m,multiline:h,rows:v=4,hint:j,onKeyDown:x}){const p=u||o.replace(/\s+/g,"_").toLowerCase(),R=m||Nv(p),E=!!s;return h?d.jsxs("div",{className:`md-field ${E?"md-field-filled":""}`,children:[d.jsx("label",{htmlFor:p,children:o}),d.jsx("textarea",{id:p,className:"md-input md-textarea",rows:v,value:s??"",onChange:M=>r(M.target.value),onKeyDown:x}),j&&d.jsx("span",{className:"md-hint",children:j})]}):d.jsxs("div",{className:`md-field ${E?"md-field-filled":""}`,children:[d.jsx("label",{htmlFor:p,children:o}),d.jsx("input",{id:p,className:"md-input",type:R,value:s??"",onChange:M=>r(M.target.value)}),j&&d.jsx("span",{className:"md-hint",children:j})]})}function lh({children:u,columns:o=2}){return d.jsx("div",{className:`md-grid md-grid-${o}`,children:u})}const Av=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],Rv=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],Cv=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],_v=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],Ov=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],Dv=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],Mv={contact:{type:"object",fields:Av},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:Rv,singular:"education"},experience:{type:"entities",fields:Cv,singular:"experience"},projects:{type:"entities",fields:_v,singular:"project"},certifications:{type:"entities",fields:Ov,singular:"certification"},achievements:{type:"entities",fields:Dv,singular:"achievement"}};function Uv(u){return Mv[u]||{type:"dynamic"}}function gu(u){return u&&typeof u=="object"&&!Array.isArray(u)}function wv(u){if(typeof u=="string"||!gu(u))return"text";const o=Object.values(u);return!o.length||o.every(s=>typeof s=="string")?"keyValue":o.every(s=>gu(s))?"entities":"keyValue"}function ah({fields:u,value:o,onChange:s}){const r=o||{};return d.jsx(lh,{children:u.map(m=>d.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:d.jsx(Je,{id:m.key,label:m.label,value:r[m.key],multiline:m.multiline,rows:m.rows,onChange:h=>s({...r,[m.key]:h})})},m.key))})}function Hv(u){const o=Object.entries(u||{});return o.sort((s,r)=>{const m=parseInt(String(s[0]).split("_").pop(),10)||0,h=parseInt(String(r[0]).split("_").pop(),10)||0;return m-h}),o.map(([,s])=>s)}function $r(u){const o={};return u.forEach((s,r)=>{o[`title_${r+1}`]=s}),o}function Lv({value:u,onChange:o}){const s=Hv(u);function r(v,j){const x=[...s];x[v]=j,o($r(x))}function m(v){o($r(s.filter((j,x)=>x!==v)))}function h(){o($r([...s,""]))}return d.jsxs("div",{className:"md-title-list",children:[s.map((v,j)=>d.jsxs("div",{className:"md-title-row",children:[d.jsx(Je,{id:`title_text_${j}`,label:"Title text",value:v,onChange:x=>r(j,x)}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(j),"aria-label":"Remove title",children:"✕"})]},`title-${j}`)),d.jsx("button",{type:"button",className:"md-outlined-btn",onClick:h,children:"+ Add title"})]})}function nh({value:u,onChange:o,keyLabel:s="Key",valueLabel:r="Value",valueOptional:m,stacked:h}){const v=Object.entries(u||{});function j(E,M,_){const D={...u||{}};delete D[E],M.trim()&&(D[M.trim()]=_),o(D)}function x(E,M){o({...u||{},[E]:M})}function p(E){const M={...u||{}};delete M[E],o(M)}function R(){const E=s.toLowerCase().replace(/\s+/g,"_");let M=v.length+1,_=`${E}_${M}`;for(;(u||{})[_];)M+=1,_=`${E}_${M}`;o({...u||{},[_]:""})}return d.jsxs("div",{className:"md-kv-list",children:[v.map(([E,M])=>d.jsx("div",{className:`md-kv-row ${h?"md-kv-row-stacked":""}`,children:h?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"md-kv-stacked-fields",children:[d.jsx(Je,{label:s,value:E,onChange:_=>j(E,_,M)}),d.jsx(Je,{label:r,value:M,onChange:_=>x(E,_),multiline:!0,rows:2})]}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>p(E),"aria-label":"Remove",children:"✕"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Je,{label:s,value:E,onChange:_=>j(E,_,M)}),!m&&d.jsx(Je,{label:r,value:M,onChange:_=>x(E,_),multiline:String(M).length>60,rows:2}),m&&d.jsx(Je,{label:r,value:M,onChange:_=>x(E,_),hint:"Optional"}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>p(E),"aria-label":"Remove",children:"✕"})]})},E)),d.jsxs("button",{type:"button",className:"md-text-btn",onClick:R,children:["+ Add ",s.toLowerCase()]})]})}function ih({value:u,onChange:o,fields:s,singular:r,sectionKey:m}){const h=Object.entries(u||{}),v=r||m.replace(/s$/,"");function j(p){const R={...u||{}};delete R[p],o(R)}function x(){const p=Object.keys(u||{}).map(_=>parseInt(_.split("_").pop(),10)).filter(_=>!Number.isNaN(_)),R=p.length?Math.max(...p)+1:1,E=`${v}_${R}`,M=s.reduce((_,D)=>({..._,[D.key]:""}),{});o({...u||{},[E]:M})}return d.jsxs("div",{className:"md-entity-list",children:[h.map(([p,R])=>d.jsxs("article",{className:"md-card",children:[d.jsxs("header",{className:"md-card-header",children:[d.jsx("h3",{children:R.name||R.degree||R.company||R.position||la(p)}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>j(p),"aria-label":"Remove entry",children:"✕"})]}),d.jsx(ah,{fields:s,value:R,onChange:E=>o({...u||{},[p]:E})})]},p)),d.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:x,children:["+ Add ",la(r||m)]})]})}function Bv({sectionKey:u,value:o,onChange:s}){const r=wv(o);if(r==="text")return d.jsx(Je,{label:la(u),value:typeof o=="string"?o:JSON.stringify(o,null,2),onChange:s,multiline:!0,rows:8});if(r==="keyValue")return d.jsx(nh,{value:gu(o)?o:{},onChange:s,keyLabel:"Item",valueLabel:"Value"});if(r==="entities"){const m=Object.values(o||{}).find(gu)||{},h=Object.keys(m).map(v=>({key:v,label:la(v),multiline:v==="description"||String(m[v]).length>80,rows:4}));return d.jsx(ih,{sectionKey:u,value:o,onChange:s,fields:h.length?h:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:u.replace(/s$/,"")})}return d.jsx(Je,{label:la(u),value:JSON.stringify(o,null,2),onChange:()=>{},multiline:!0,rows:10})}function Yv({sectionKey:u,value:o,onChange:s}){const r=Uv(u);return r.type==="text"?d.jsx(Je,{label:r.label||la(u),value:typeof o=="string"?o:"",onChange:s,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):r.type==="object"?d.jsx(ah,{fields:r.fields,value:o,onChange:s}):r.type==="titles"?d.jsx(Lv,{value:o,onChange:s}):r.type==="keyValue"?d.jsx(nh,{value:o||{},onChange:s,keyLabel:r.keyLabel,valueLabel:r.valueLabel,valueOptional:r.valueOptional,stacked:r.stacked}):r.type==="entities"?d.jsx(ih,{sectionKey:u,value:o,onChange:s,fields:r.fields,singular:r.singular}):d.jsx(Bv,{sectionKey:u,value:o,onChange:s})}const vu=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],qv={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function Wr(u){return qv[u]||la(u)}const Dm=new Set(vu);function Gv(u){const o=vu.filter(r=>u.includes(r)),s=u.filter(r=>!vu.includes(r)).sort();return[...o,...s]}function Xv(){const{showToast:u}=Vn(),[o,s]=b.useState(null),[r,m]=b.useState("contact"),[h,v]=b.useState([]),[j,x]=b.useState(!0),[p,R]=b.useState(!1),E=b.useCallback(async()=>{x(!0);try{const X=(await Re.getProfile()).profile||{};s(X),v(Object.keys(X).filter(I=>!Dm.has(I)))}catch(Q){u(Q.message,"error")}finally{x(!1)}},[u]);b.useEffect(()=>{E()},[E]);const M=b.useMemo(()=>{const Q=o?Object.keys(o):[];return Gv([...new Set([...vu,...Q,...h])]).filter(I=>o&&I in o)},[o,h]);function _(Q,X){s(I=>({...I,[Q]:X}))}function D(){const Q=window.prompt("New section name (e.g. Publications):");if(!Q)return;const X=Q.trim().toLowerCase().replace(/\s+/g,"_");X&&(v(I=>I.includes(X)?I:[...I,X]),s(I=>({...I,[X]:I[X]||{}})),m(X))}function B(){window.confirm(`Delete section "${Wr(r)}"?`)&&(s(Q=>{const X={...Q};return delete X[r],X}),v(Q=>Q.filter(X=>X!==r)),m("contact"))}async function H(){R(!0);try{await Re.saveProfile(o),u("Profile saved")}catch(Q){u(Q.message,"error")}finally{R(!1)}}if(j||!o)return d.jsx("div",{className:"profile-page",children:d.jsxs("div",{className:"profile-loading",children:[d.jsx("div",{className:"md-spinner"}),d.jsx("p",{children:"Loading profile…"})]})});const K=!Dm.has(r);return d.jsx("div",{className:"profile-page",children:d.jsxs("div",{className:"profile-layout",children:[d.jsx("main",{className:"profile-main",children:d.jsxs("div",{className:"profile-main-inner",children:[d.jsxs("div",{className:"profile-section-head",children:[d.jsx("h1",{children:Wr(r)}),K&&d.jsx("button",{type:"button",className:"md-text-btn danger",onClick:B,children:"Delete section"})]}),d.jsx("div",{className:"profile-form-surface",children:d.jsx(Yv,{sectionKey:r,value:o[r],onChange:Q=>_(r,Q)})})]})}),d.jsxs("aside",{className:"profile-sidebar",children:[d.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[d.jsx("p",{className:"profile-nav-label",children:"Sections"}),d.jsx("ul",{children:M.map(Q=>d.jsx("li",{children:d.jsx("button",{type:"button",className:`profile-nav-item ${r===Q?"active":""}`,onClick:()=>m(Q),children:Wr(Q)})},Q))})]}),d.jsxs("div",{className:"profile-sidebar-actions",children:[d.jsx("button",{type:"button",className:"md-filled-btn",onClick:H,disabled:p,children:p?"Saving…":"Save profile"}),d.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:D,children:"+ Section"})]})]})]})})}const Fr={company:"",title:"",location:"",url:"",about:"",description:""};function Qv(u){const o=u.split(`
`).map(r=>r.trim()).filter(Boolean),s=u.match(/https?:\/\/[^\s]+/i);return{url:s?s[0]:"",title:o[0]||"",description:u,about:o.slice(0,3).join(" ")}}function Zv(u){return u?u.split("_").slice(0,-2).join(" ").replace(/\b\w/g,s=>s.toUpperCase()):""}function Vv({draft:u,onChange:o}){return d.jsxs(d.Fragment,{children:[d.jsxs(lh,{children:[d.jsx(Je,{id:"job_company",label:"Company",value:u.company,onChange:s=>o({...u,company:s})}),d.jsx(Je,{id:"job_title",label:"Job title",value:u.title,onChange:s=>o({...u,title:s})}),d.jsx(Je,{id:"job_location",label:"Location",value:u.location,onChange:s=>o({...u,location:s})}),d.jsx(Je,{id:"job_url",label:"Job URL",value:u.url,onChange:s=>o({...u,url:s})})]}),d.jsx("div",{className:"md-field-span-wrap",children:d.jsx(Je,{id:"job_about",label:"About",value:u.about,onChange:s=>o({...u,about:s}),multiline:!0,rows:4,hint:"Company or role overview."})}),d.jsx("div",{className:"md-field-span-wrap",children:d.jsx(Je,{id:"job_description",label:"Description",value:u.description,onChange:s=>o({...u,description:s}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function kv(){const{showToast:u}=Vn(),[o,s]=b.useState([]),[r,m]=b.useState(null),[h,v]=b.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[j,x]=b.useState(""),[p,R]=b.useState(Fr),[E,M]=b.useState(!1),[_,D]=b.useState(!1),B=b.useRef(null),H=b.useCallback(async()=>{try{const Z=await Re.listJobs();s(Z.applications||[])}catch(Z){u(Z.message,"error")}},[u]);b.useEffect(()=>{H()},[H]),b.useEffect(()=>{B.current?.scrollIntoView({behavior:"smooth"})},[h]);async function K(Z){m(Z),M(!0);try{const G=await Re.getJob(Z);R({company:Zv(Z),title:G.title||"",location:G.location||"",url:G.url||"",about:G.about||"",description:G.description||""})}catch(G){u(G.message,"error")}}async function Q(){const Z=j.trim();if(!(!Z||_)){v(G=>[...G,{role:"user",content:Z}]),x(""),D(!0);try{if(/^https?:\/\//i.test(Z)||Z.includes("linkedin.com")||Z.includes("jobs.")){const oe=await Re.scrapeUrl(Z);R(J=>({...J,url:oe.url,title:J.title||oe.title||"",about:oe.about||J.about,description:oe.description||J.description})),v(J=>[...J,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),M(!0)}else{const oe=Qv(Z);R(J=>({...J,...oe,description:Z})),v(J=>[...J,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),M(!0)}}catch(G){v(oe=>[...oe,{role:"assistant",content:`Error: ${G.message}`}])}finally{D(!1)}}}async function X(){if(!p.company.trim()||!p.title.trim()){u("Company and title are required","error");return}D(!0);try{if(r)await Re.updateJob(r,p),u("Job updated");else{const Z=await Re.createJob(p);m(Z.slug),u("Job saved")}await H(),M(!0)}catch(Z){u(Z.message,"error")}finally{D(!1)}}async function I(){if(!(!r||!window.confirm("Delete this job?")))try{await Re.deleteJob(r),m(null),R(Fr),M(!1),await H(),u("Job deleted")}catch(Z){u(Z.message,"error")}}function re(){m(null),R(Fr),M(!0)}return d.jsx("div",{className:"profile-page jobs-page",children:d.jsxs("div",{className:"profile-layout",children:[d.jsx("main",{className:"profile-main jobs-main",children:d.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[E?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"profile-section-head",children:[d.jsx("h1",{children:r?"Edit job":"New job"}),r&&d.jsx("button",{type:"button",className:"md-text-btn danger",onClick:I,children:"Delete job"})]}),d.jsx("div",{className:"profile-form-surface",children:d.jsx(Vv,{draft:p,onChange:R})})]}):d.jsxs("div",{className:"jobs-welcome",children:[d.jsx("h1",{children:"Jobs"}),d.jsx("p",{className:"jobs-welcome-text",children:"Paste a job URL or description in the chat below, or select a job from the sidebar."})]}),d.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[d.jsxs("div",{className:"jobs-chat-messages",children:[h.map((Z,G)=>d.jsxs("div",{className:`jobs-chat-bubble ${Z.role}`,children:[d.jsx("span",{className:"jobs-chat-label",children:Z.role==="user"?"You":"Joblication"}),d.jsx("p",{children:Z.content})]},G)),d.jsx("div",{ref:B})]}),d.jsxs("div",{className:"jobs-chat-composer",children:[d.jsx("div",{className:"jobs-chat-input-wrap",children:d.jsx(Je,{id:"job_intake",label:"Paste URL or job description",value:j,onChange:x,multiline:!0,rows:3,onKeyDown:Z=>{Z.key==="Enter"&&!Z.shiftKey&&(Z.preventDefault(),Q())}})}),d.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:Q,disabled:_,children:_?"…":"Send"})]})]})]})}),d.jsxs("aside",{className:"profile-sidebar jobs-sidebar",children:[d.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[d.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),d.jsxs("ul",{children:[o.map(Z=>d.jsx("li",{children:d.jsxs("button",{type:"button",className:`profile-nav-item ${r===Z.slug?"active":""}`,onClick:()=>K(Z.slug),children:[d.jsx("span",{className:"jobs-nav-title",children:Z.title||Z.slug}),Z.location&&d.jsx("span",{className:"jobs-nav-meta",children:Z.location})]})},Z.slug)),!o.length&&d.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),d.jsxs("div",{className:"profile-sidebar-actions",children:[d.jsx("button",{type:"button",className:"md-filled-btn",onClick:X,disabled:_||!E,children:_?"Saving…":"Save job"}),d.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:re,children:"+ New job"})]})]})]})})}const Jv=["unsubmitted","submitted","rejected","interview","accepted"];function Kv(){const{showToast:u}=Vn(),[o,s]=b.useState([]),[r,m]=b.useState(!1),[h,v]=b.useState(null),[j,x]=b.useState(!0),p=b.useCallback(async()=>{x(!0);try{const _=await Re.listApplications();s(_.applications||[])}catch(_){u(_.message,"error")}finally{x(!1)}},[u]),R=b.useCallback(async()=>{try{const _=await Re.generateStatus();v(_),_.running?setTimeout(R,2e3):(m(!1),_.error?u(_.error,"error"):_.step==="complete"&&(u("Generation complete"),p()))}catch{m(!1)}},[p,u]);b.useEffect(()=>{p()},[p]);async function E(_,D){try{await Re.updateJob(_,{status:D}),s(B=>B.map(H=>H.slug===_?{...H,status:D}:H))}catch(B){u(B.message,"error")}}async function M(){m(!0);try{await Re.startGenerate(),R()}catch(_){m(!1),u(_.message,"error")}}return d.jsxs("div",{className:"applications-page",children:[d.jsxs("header",{className:"page-header",children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Applications"}),d.jsx("p",{className:"subtitle",children:"Track CVs, cover letters, and application status."})]}),d.jsx("button",{type:"button",className:"btn btn-primary",onClick:M,disabled:r,children:r?`Generating… ${h?.step||""}`:"Generate all"})]}),j?d.jsx("p",{className:"muted",children:"Loading…"}):d.jsxs("div",{className:"app-grid",children:[o.map(_=>d.jsxs("article",{className:"app-card",children:[d.jsxs("div",{className:"app-card-head",children:[d.jsx("h3",{children:_.title||_.slug}),d.jsx("select",{value:_.status,onChange:D=>E(_.slug,D.target.value),className:`status-select status-${_.status}`,children:Jv.map(D=>d.jsx("option",{value:D,children:D},D))})]}),d.jsx("p",{className:"muted small",children:_.slug}),d.jsx("div",{className:"app-card-files",children:_.has_output?_.files.map(D=>d.jsxs("a",{href:Re.fileUrl(_.output_folder,D),target:"_blank",rel:"noreferrer",className:"file-link",children:[D.endsWith(".pdf")?"📄":"🌐"," ",D]},D)):d.jsx("span",{className:"muted small",children:"No outputs yet — run Generate"})}),d.jsx("div",{className:"app-card-actions",children:d.jsx(fo,{to:`/review?slug=${encodeURIComponent(_.slug)}`,className:"btn btn-ghost btn-sm",children:"Review & edit"})})]},_.slug)),!o.length&&d.jsx("p",{className:"muted",children:"Add jobs first, then generate applications."})]})]})}function fu(u,o,s){return Math.min(s,Math.max(o,u))}function $v(u){return Math.round(u*10)/10}function Wv({layout:u,sections:o,activeSection:s,onSelectSection:r,onUpdateSection:m}){const h=b.useRef(null),v=b.useRef(null),j=u.pageWidth||595,x=u.pageHeight||842,p=u.zoom||1,R=[...o].sort((D,B)=>(D.zIndex??1)-(B.zIndex??1)),E=b.useCallback(()=>{v.current=null},[]),M=b.useCallback(D=>{const B=v.current,H=h.current;if(!B||!H)return;const K=H.getBoundingClientRect(),Q=(D.clientX-B.startX)/K.width*100,X=(D.clientY-B.startY)/K.height*100,I=u.snapToGrid?u.gridSize||1:0,re=Z=>I>0?Math.round(Z/I)*I:$v(Z);if(B.mode==="move"){const Z=100-B.origW,G=100-B.origH;m(B.id,{x:re(fu(B.origX+Q,0,Z)),y:re(fu(B.origY+X,0,G))})}else B.mode==="resize"&&m(B.id,{w:re(fu(B.origW+Q,8,100-B.origX)),h:re(fu(B.origH+X,4,100-B.origY))})},[u.snapToGrid,u.gridSize,m]);b.useEffect(()=>(window.addEventListener("pointermove",M),window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}),[M,E]);function _(D,B,H){B.locked||(D.stopPropagation(),D.preventDefault(),v.current={id:B.id,mode:H,startX:D.clientX,startY:D.clientY,origX:B.x,origY:B.y,origW:B.w,origH:B.h},r(B.id))}return d.jsxs("div",{className:"ps-workspace",children:[d.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(D,B)=>d.jsx("span",{style:{left:`${B/11*100}%`},children:Math.round(j/11*B)},B))}),d.jsx("div",{className:"ps-canvas-scroll",children:d.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${p})`,transformOrigin:"top center"},children:d.jsxs("div",{ref:h,className:"ps-canvas",style:{width:j,minHeight:x,padding:u.pagePadding,fontSize:`${u.fontSize}px`,lineHeight:u.lineHeight,fontFamily:u.fontFamily||"Georgia, serif",backgroundColor:u.pageBackground||"#ffffff"},onClick:()=>r(null),onKeyDown:()=>{},role:"presentation",children:[u.showGrid&&d.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${u.gridSize||5}% ${u.gridSize||5}%`}}),R.filter(D=>D.visible!==!1).map(D=>{const B=s===D.id;return d.jsxs("div",{className:`ps-layer ${B?"selected":""} ${D.locked?"locked":""}`,style:{left:`${D.x}%`,top:`${D.y}%`,width:`${D.w}%`,minHeight:`${D.h}%`,zIndex:D.zIndex??1,opacity:D.opacity??1,fontSize:D.fontSize?`${D.fontSize}px`:void 0,textAlign:D.textAlign||"left",padding:D.padding??8,backgroundColor:D.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:H=>{H.stopPropagation(),r(D.id)},onPointerDown:H=>_(H,D,"move"),onKeyDown:()=>{},role:"button",tabIndex:0,children:[d.jsx("span",{className:"ps-layer-label",children:D.label}),d.jsx("p",{className:"ps-layer-preview",children:"Section content"}),B&&!D.locked&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"ps-handle ps-handle-nw"}),d.jsx("span",{className:"ps-handle ps-handle-ne"}),d.jsx("span",{className:"ps-handle ps-handle-sw"}),d.jsx("span",{className:"ps-handle ps-handle-se",onPointerDown:H=>_(H,D,"resize")}),d.jsx("span",{className:"ps-handle ps-handle-n"}),d.jsx("span",{className:"ps-handle ps-handle-s"}),d.jsx("span",{className:"ps-handle ps-handle-w"}),d.jsx("span",{className:"ps-handle ps-handle-e"})]})]},D.id)})]})})})]})}const Ga={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function Mm(u){if(!u)return{...Ga,sections:Ga.sections.map(s=>({...s}))};const o=(u.sections||Ga.sections).map(s=>({...Ga.sections[0],...s}));return{...Ga,...u,sections:o}}function ke({label:u,children:o}){return d.jsxs("div",{className:"ps-prop-row",children:[d.jsx("label",{children:u}),o]})}function Zt({value:u,onChange:o,min:s,max:r,step:m=1,unit:h="%"}){return d.jsxs("div",{className:"ps-range-field",children:[d.jsx("input",{type:"range",min:s,max:r,step:m,value:u,onChange:v=>o(Number(v.target.value))}),d.jsx("input",{type:"number",className:"ps-num-input",min:s,max:r,step:m,value:u,onChange:v=>o(Number(v.target.value))}),d.jsx("span",{className:"ps-unit",children:h})]})}function Fv(){const{showToast:u}=Vn(),[o,s]=b.useState({}),[r,m]=b.useState({}),[h,v]=b.useState(""),[j,x]=b.useState(""),[p,R]=b.useState("cv"),[E,M]=b.useState(""),[_,D]=b.useState(()=>Mm(null)),[B,H]=b.useState("contact"),[K,Q]=b.useState("layer"),[X,I]=b.useState(!1),re=b.useMemo(()=>({...o,...r}),[o,r]),Z=_.sections||[],G=Z.find(T=>T.id===B),oe=b.useCallback(async()=>{try{const T=await Re.listTemplates();s(T.catalog||{}),m(T.custom||{});const k=Object.keys({...T.catalog||{},...T.custom||{}});k.length&&!h&&v(k[0])}catch(T){u(T.message,"error")}},[h,u]),J=b.useCallback(async T=>{if(T)try{const k=await Re.getTemplate(T);x(k.name||T),R(k.category||"cv"),M(k.source||"");const ae=Mm(k.layout);D(ae),ae.sections?.length&&H(ae.sections[0].id)}catch(k){u(k.message,"error")}},[u]);b.useEffect(()=>{oe()},[oe]),b.useEffect(()=>{h&&J(h)},[h,J]);const ie=b.useCallback((T,k)=>{D(ae=>({...ae,sections:ae.sections.map(ue=>ue.id===T?{...ue,...k}:ue)}))},[]);function Pe(){const T=window.prompt("Layer name:");if(!T)return;const k=T.toLowerCase().replace(/\s+/g,"_"),ae=Math.max(0,...Z.map(ue=>ue.zIndex??1));D(ue=>({...ue,sections:[...ue.sections,{id:k,label:T,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:ae+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),H(k)}function Qe(){!G||!window.confirm(`Delete layer "${G.label}"?`)||(D(T=>({...T,sections:T.sections.filter(k=>k.id!==B)})),H(Z[0]?.id||""))}function ft(T,k){const ae=[...Z].sort(($,te)=>($.zIndex??1)-(te.zIndex??1)),ue=ae.findIndex($=>$.id===T),S=k==="up"?ue+1:ue-1;if(S<0||S>=ae.length)return;const q=ae[ue],V=ae[S];ie(q.id,{zIndex:V.zIndex??S+1}),ie(V.id,{zIndex:q.zIndex??ue+1})}async function at(){I(!0);try{await Re.saveTemplate(h,{name:j,category:p,source:E,layout:_}),u("Template saved"),await oe()}catch(T){u(T.message,"error")}finally{I(!1)}}async function Oe(){const T=window.prompt("Template id (e.g. my_cv):");if(T){I(!0);try{await Re.createTemplate({id:T,name:T,category:"cv",source:`<!-- Custom template -->
`,layout:Ga}),v(T),await oe(),u("Template created")}catch(k){u(k.message,"error")}finally{I(!1)}}}const w=[...Z].sort((T,k)=>(k.zIndex??1)-(T.zIndex??1));return d.jsxs("div",{className:"ps-editor",children:[d.jsxs("header",{className:"ps-toolbar",children:[d.jsxs("div",{className:"ps-toolbar-left",children:[d.jsx("select",{value:h,onChange:T=>v(T.target.value),className:"ps-select",children:Object.entries(re).map(([T,k])=>d.jsx("option",{value:T,children:k.name||T},T))}),d.jsx("button",{type:"button",className:"ps-tool-btn",onClick:Oe,children:"New"}),d.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:at,disabled:X,children:X?"Saving…":"Save"})]}),d.jsx("div",{className:"ps-toolbar-center",children:d.jsx("span",{className:"ps-doc-name",children:j||"Untitled"})}),d.jsxs("div",{className:"ps-toolbar-right",children:[d.jsxs("label",{className:"ps-zoom-label",children:["Zoom",d.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:_.zoom||.85,onChange:T=>D({..._,zoom:Number(T.target.value)})}),d.jsxs("span",{children:[Math.round((_.zoom||.85)*100),"%"]})]}),d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:_.snapToGrid,onChange:T=>D({..._,snapToGrid:T.target.checked})}),"Snap"]}),d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:_.showGrid,onChange:T=>D({..._,showGrid:T.target.checked})}),"Grid"]})]})]}),d.jsxs("div",{className:"ps-body",children:[d.jsxs("aside",{className:"ps-panel ps-layers",children:[d.jsxs("div",{className:"ps-panel-head",children:[d.jsx("h3",{children:"Layers"}),d.jsx("button",{type:"button",className:"ps-icon-btn",onClick:Pe,title:"Add layer",children:"+"})]}),d.jsx("ul",{className:"ps-layer-list",children:w.map(T=>d.jsxs("li",{children:[d.jsxs("button",{type:"button",className:`ps-layer-item ${B===T.id?"active":""}`,onClick:()=>H(T.id),children:[d.jsx("span",{className:`ps-eye ${T.visible!==!1?"on":"off"}`,onClick:k=>{k.stopPropagation(),ie(T.id,{visible:!T.visible})},onKeyDown:()=>{},role:"button",tabIndex:0,title:T.visible!==!1?"Hide layer":"Show layer"}),d.jsx("span",{className:"ps-layer-name",children:T.label}),T.locked&&d.jsx("span",{className:"ps-lock-badge",children:"L"})]}),d.jsxs("div",{className:"ps-layer-actions",children:[d.jsx("button",{type:"button",className:"ps-mini-btn",onClick:()=>ft(T.id,"up"),title:"Bring forward",children:"▲"}),d.jsx("button",{type:"button",className:"ps-mini-btn",onClick:()=>ft(T.id,"down"),title:"Send backward",children:"▼"})]})]},T.id))})]}),d.jsx(Wv,{layout:_,sections:Z,activeSection:B,onSelectSection:H,onUpdateSection:ie}),d.jsxs("aside",{className:"ps-panel ps-properties",children:[d.jsxs("div",{className:"ps-tabs",children:[d.jsx("button",{type:"button",className:K==="document"?"active":"",onClick:()=>Q("document"),children:"Document"}),d.jsx("button",{type:"button",className:K==="layer"?"active":"",onClick:()=>Q("layer"),children:"Layer"}),d.jsx("button",{type:"button",className:K==="source"?"active":"",onClick:()=>Q("source"),children:"Source"})]}),K==="document"&&d.jsxs("div",{className:"ps-props",children:[d.jsx(Je,{label:"Template name",value:j,onChange:x}),d.jsx(ke,{label:"Category",children:d.jsxs("select",{value:p,onChange:T=>R(T.target.value),className:"ps-select full",children:[d.jsx("option",{value:"cv",children:"CV"}),d.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),d.jsx(ke,{label:"Page width (px)",children:d.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageWidth,onChange:T=>D({..._,pageWidth:Number(T.target.value)})})}),d.jsx(ke,{label:"Page height (px)",children:d.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageHeight,onChange:T=>D({..._,pageHeight:Number(T.target.value)})})}),d.jsx(ke,{label:"Padding (px)",children:d.jsx(Zt,{value:_.pagePadding,onChange:T=>D({..._,pagePadding:T}),min:0,max:120,unit:"px"})}),d.jsx(ke,{label:"Background",children:d.jsx("input",{type:"color",className:"ps-color-input",value:_.pageBackground||"#ffffff",onChange:T=>D({..._,pageBackground:T.target.value})})}),d.jsx(ke,{label:"Base font size",children:d.jsx(Zt,{value:_.fontSize,onChange:T=>D({..._,fontSize:T}),min:8,max:18,unit:"px"})}),d.jsx(ke,{label:"Line height",children:d.jsx(Zt,{value:_.lineHeight,onChange:T=>D({..._,lineHeight:T}),min:1,max:2,step:.05,unit:""})}),d.jsx(ke,{label:"Font family",children:d.jsx("input",{className:"ps-text-input full",value:_.fontFamily||"",onChange:T=>D({..._,fontFamily:T.target.value})})}),d.jsx(ke,{label:"Grid size",children:d.jsx(Zt,{value:_.gridSize||5,onChange:T=>D({..._,gridSize:T}),min:1,max:20,unit:"%"})})]}),K==="layer"&&G&&d.jsxs("div",{className:"ps-props",children:[d.jsx("h4",{className:"ps-layer-title",children:G.label}),d.jsx(ke,{label:"X position",children:d.jsx(Zt,{value:G.x,onChange:T=>ie(G.id,{x:T}),min:0,max:95})}),d.jsx(ke,{label:"Y position",children:d.jsx(Zt,{value:G.y,onChange:T=>ie(G.id,{y:T}),min:0,max:95})}),d.jsx(ke,{label:"Width",children:d.jsx(Zt,{value:G.w,onChange:T=>ie(G.id,{w:T}),min:8,max:100})}),d.jsx(ke,{label:"Height",children:d.jsx(Zt,{value:G.h,onChange:T=>ie(G.id,{h:T}),min:4,max:80})}),d.jsx(ke,{label:"Opacity",children:d.jsx(Zt,{value:Math.round((G.opacity??1)*100),onChange:T=>ie(G.id,{opacity:T/100}),min:10,max:100,unit:"%"})}),d.jsx(ke,{label:"Layer padding",children:d.jsx(Zt,{value:G.padding??8,onChange:T=>ie(G.id,{padding:T}),min:0,max:32,unit:"px"})}),d.jsx(ke,{label:"Text align",children:d.jsxs("select",{className:"ps-select full",value:G.textAlign||"left",onChange:T=>ie(G.id,{textAlign:T.target.value}),children:[d.jsx("option",{value:"left",children:"Left"}),d.jsx("option",{value:"center",children:"Center"}),d.jsx("option",{value:"right",children:"Right"}),d.jsx("option",{value:"justify",children:"Justify"})]})}),d.jsx(ke,{label:"Fill color",children:d.jsx("input",{type:"color",className:"ps-color-input",value:G.bgColor?.startsWith("#")?G.bgColor:"#e8f0fe",onChange:T=>ie(G.id,{bgColor:T.target.value})})}),d.jsx(ke,{label:"Font size override",children:d.jsx("input",{type:"number",className:"ps-num-input full",placeholder:"Inherit",value:G.fontSize??"",onChange:T=>ie(G.id,{fontSize:T.target.value?Number(T.target.value):void 0})})}),d.jsxs("div",{className:"ps-check-group",children:[d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:G.visible!==!1,onChange:T=>ie(G.id,{visible:T.target.checked})}),"Visible"]}),d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:!!G.locked,onChange:T=>ie(G.id,{locked:T.target.checked})}),"Lock"]})]}),d.jsx("button",{type:"button",className:"ps-danger-btn",onClick:Qe,children:"Delete layer"})]}),K==="layer"&&!G&&d.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),K==="source"&&d.jsx("textarea",{className:"ps-source-editor",value:E,onChange:T=>M(T.target.value)})]})]})]})}function Iv(){const{showToast:u}=Vn(),[o,s]=gv(),[r,m]=b.useState([]),[h,v]=b.useState(o.get("slug")||""),[j,x]=b.useState(null),[p,R]=b.useState(""),[E,M]=b.useState(""),[_,D]=b.useState("cv"),[B,H]=b.useState(!1),[K,Q]=b.useState([]),X=b.useCallback(async()=>{try{const J=await Re.listApplications();m(J.applications||[]),!h&&J.applications?.length&&v(J.applications[0].slug)}catch(J){u(J.message,"error")}},[u,h]),I=b.useCallback(async()=>{if(h)try{const J=await Re.getReview(h);x(J),R(JSON.stringify(J.stage_2||{},null,2)),M(JSON.stringify(J.stage_3||{},null,2));const ie=await Re.listOutputs();Q(ie.outputs||[])}catch(J){u(J.message,"error")}},[h,u]);b.useEffect(()=>{X()},[X]),b.useEffect(()=>{h&&(s({slug:h}),I())},[h,I,s]);const re=b.useMemo(()=>K.find(ie=>ie.folder.toLowerCase().includes(h.replace(/_/g,"").slice(0,12)))?.folder,[K,h]),Z=b.useMemo(()=>(r.find(ie=>ie.slug===h)?.files||[]).filter(ie=>ie.endsWith(".pdf")),[r,h]);async function G(){H(!0);try{let J,ie;try{J=JSON.parse(p),ie=JSON.parse(E)}catch(Pe){throw new Error(`Invalid JSON: ${Pe.message}`)}await Re.saveReview(h,{app_key:j?.app_key,stage_2:J,stage_3:ie}),u("Saved edits"),await I()}catch(J){u(J.message,"error")}finally{H(!1)}}async function oe(){H(!0);try{await Re.saveReview(h,{app_key:j?.app_key,stage_2:JSON.parse(p),stage_3:JSON.parse(E)}),await Re.rebuild(h),u("PDFs rebuilt — open links below"),await X(),await I()}catch(J){u(J.message,"error")}finally{H(!1)}}return d.jsxs("div",{className:"review-page",children:[d.jsxs("header",{className:"page-header",children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Review"}),d.jsx("p",{className:"subtitle",children:"Edit generated content and export PDFs per application."})]}),d.jsxs("div",{className:"header-actions",children:[d.jsx("select",{value:h,onChange:J=>v(J.target.value),className:"select",children:r.map(J=>d.jsx("option",{value:J.slug,children:J.title||J.slug},J.slug))}),d.jsx("button",{type:"button",className:"btn btn-ghost",onClick:G,disabled:B,children:"Save"}),d.jsx("button",{type:"button",className:"btn btn-primary",onClick:oe,disabled:B,children:B?"Working…":"Save & export PDF"})]})]}),d.jsxs("div",{className:"review-tabs",children:[d.jsx("button",{type:"button",className:_==="cv"?"active":"",onClick:()=>D("cv"),children:"CV (stage 2)"}),d.jsx("button",{type:"button",className:_==="letter"?"active":"",onClick:()=>D("letter"),children:"Cover letter (stage 3)"}),d.jsx("button",{type:"button",className:_==="preview"?"active":"",onClick:()=>D("preview"),children:"Preview / PDF"})]}),d.jsxs("div",{className:"review-body",children:[_==="cv"&&d.jsx("textarea",{className:"code-area full",value:p,onChange:J=>R(J.target.value)}),_==="letter"&&d.jsx("textarea",{className:"code-area full",value:E,onChange:J=>M(J.target.value)}),_==="preview"&&d.jsxs("div",{className:"preview-panel",children:[!j?.stage_2&&d.jsx("p",{className:"muted",children:"No generated content yet. Run Generate from Applications."}),d.jsxs("div",{className:"export-links",children:[Z.map(J=>d.jsxs("a",{href:Re.fileUrl(re||r.find(ie=>ie.slug===h)?.output_folder,J),target:"_blank",rel:"noreferrer",className:"btn btn-primary",children:["Download ",J]},J)),(r.find(J=>J.slug===h)?.files||[]).filter(J=>J.endsWith(".html")).map(J=>d.jsxs("a",{href:Re.fileUrl(re||r.find(ie=>ie.slug===h)?.output_folder,J),target:"_blank",rel:"noreferrer",className:"btn btn-ghost",children:["View ",J]},J))]})]})]})]})}function Pv(){return d.jsx(Gg,{children:d.jsxs(wl,{element:d.jsx(Tv,{}),children:[d.jsx(wl,{index:!0,element:d.jsx(Bg,{to:"/jobs",replace:!0})}),d.jsx(wl,{path:"profile",element:d.jsx(Xv,{})}),d.jsx(wl,{path:"jobs",element:d.jsx(kv,{})}),d.jsx(wl,{path:"applications",element:d.jsx(Kv,{})}),d.jsx(wl,{path:"templates",element:d.jsx(Fv,{})}),d.jsx(wl,{path:"review",element:d.jsx(Iv,{})})]})})}const ey=`
@import url("https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,400;6..144,500;6..144,600&family=Roboto:wght@400;500&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --bg: #212121;
  --bg-elevated: #2f2f2f;
  --surface: #303030;
  --surface-hover: #3a3a3a;
  --border: #444;
  --text: #ececec;
  --muted: #9b9b9b;
  --accent: #10a37f;
  --accent-hover: #0d8c6d;
  --success: #10a37f;
  --error: #ef4444;
  --radius: 12px;
  --sidebar-w: 260px;
  --sidebar-collapsed: 64px;
  --font: "Segoe UI", system-ui, -apple-system, sans-serif;
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
  line-height: 1.5;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.app-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

/* Sidebar */
.sidebar {
  width: var(--sidebar-w);
  background: var(--bg-elevated);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: width 0.2s;
}

.sidebar.collapsed {
  width: var(--sidebar-collapsed);
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-bottom: 1px solid var(--border);
}

.sidebar-brand {
  font-weight: 650;
  font-size: 1.05rem;
}

.sidebar-toggle {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 8px;
  padding: 0.35rem 0.55rem;
  cursor: pointer;
}

.sidebar-nav {
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
  transition: background 0.15s, color 0.15s;
}

.sidebar-link:hover {
  background: var(--surface-hover);
  color: var(--text);
}

.sidebar-link.active {
  background: var(--surface);
  color: var(--text);
}

.sidebar-icon {
  font-size: 1.1rem;
  width: 1.5rem;
  text-align: center;
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
  border-color: var(--accent);
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
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover:not(:disabled) {
  background: var(--accent-hover);
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

/* Profile — Google Material-inspired */
.profile-page {
  --md-primary: #8ab4f8;
  --md-primary-container: #1a3a5c;
  --md-surface: #1e1e1e;
  --md-surface-2: #2d2d2d;
  --md-surface-3: #3c3c3c;
  --md-outline: #5f6368;
  --md-on-surface: #e8eaed;
  --md-on-surface-variant: #9aa0a6;
  --md-radius: 12px;
  --profile-sidebar-w: 280px;
  font-family: "Google Sans Flex", "Roboto", var(--font);
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
  color: var(--md-on-surface-variant);
}

.md-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--md-surface-3);
  border-top-color: var(--md-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
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
  padding: 2rem 2.5rem 3rem;
}

.profile-main-inner {
  max-width: 920px;
}

.profile-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.profile-section-head h1 {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--md-on-surface);
}

.profile-form-surface {
  background: var(--md-surface);
  border: 1px solid #3c4043;
  border-radius: var(--md-radius);
  padding: 1.5rem 1.75rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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
  background: var(--md-surface);
  border-left: 1px solid #3c4043;
  padding: 1.25rem 0 1.25rem 1rem;
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
  border-top: 1px solid #3c4043;
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
  padding: 0.65rem 0.85rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--md-on-surface-variant);
  font: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.profile-nav-item:hover {
  background: var(--md-surface-2);
  color: var(--md-on-surface);
}

.profile-nav-item.active {
  background: var(--md-primary-container);
  color: var(--md-primary);
}

.md-filled-btn {
  width: 100%;
  padding: 0.7rem 1.25rem;
  border: none;
  border-radius: 999px;
  background: var(--md-primary);
  color: #202124;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.15s, opacity 0.15s;
}

.md-filled-btn:hover:not(:disabled) {
  filter: brightness(1.08);
}

.md-filled-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.md-outlined-btn {
  padding: 0.55rem 1.1rem;
  border: 1px solid var(--md-outline);
  border-radius: 999px;
  background: transparent;
  color: var(--md-primary);
  font: inherit;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}

.md-outlined-btn:hover {
  background: rgba(138, 180, 248, 0.08);
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
  color: #f28b82;
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
  border-color: var(--md-primary);
  box-shadow: 0 0 0 1px var(--md-primary);
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
  border-radius: 8px;
  border: 1px solid #3c4043;
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
  border: 1px solid #3c4043;
  border-radius: var(--md-radius);
  padding: 1.25rem 1.35rem 1.5rem;
}

.md-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #3c4043;
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
  border: 1px solid #3c4043;
  border-radius: var(--md-radius);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.jobs-chat-messages {
  max-height: 220px;
  overflow-y: auto;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.jobs-chat-bubble {
  max-width: 640px;
}

.jobs-chat-bubble.user {
  align-self: flex-end;
  background: var(--md-surface-2);
  border: 1px solid #3c4043;
  border-radius: var(--md-radius);
  padding: 0.75rem 1rem;
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
  border-top: 1px solid #3c4043;
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

/* Applications */
.applications-page {
  padding-bottom: 2rem;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 0 1.5rem 1.5rem;
}

.app-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem;
}

.app-card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.app-card-head h3 {
  margin: 0;
  font-size: 1rem;
}

.status-select {
  width: auto;
  font-size: 0.78rem;
  padding: 0.25rem 0.4rem;
}

.app-card-files {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0.75rem 0;
}

.file-link {
  color: var(--accent);
  font-size: 0.85rem;
  text-decoration: none;
}

.file-link:hover {
  text-decoration: underline;
}

.app-card-actions {
  margin-top: 0.5rem;
}

/* Photoshop-style template editor */
.ps-editor {
  --ps-bg: #323232;
  --ps-panel: #2b2b2b;
  --ps-panel-border: #1a1a1a;
  --ps-text: #e8e8e8;
  --ps-muted: #9a9a9a;
  --ps-accent: #2f8cef;
  --ps-accent-dim: #1a4a8a;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: calc(100vh - 1px);
  background: var(--ps-bg);
  color: var(--ps-text);
  font-family: "Segoe UI", system-ui, sans-serif;
}

.ps-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.45rem 0.75rem;
  background: #3c3c3c;
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
  background: #252525;
  border: 1px solid #555;
  color: var(--ps-text);
  border-radius: 4px;
  padding: 0.35rem 0.5rem;
  font-size: 0.82rem;
}

.ps-select.full,
.ps-text-input.full,
.ps-num-input.full {
  width: 100%;
}

.ps-tool-btn {
  padding: 0.35rem 0.75rem;
  border: 1px solid #555;
  border-radius: 4px;
  background: #454545;
  color: var(--ps-text);
  font-size: 0.82rem;
  cursor: pointer;
}

.ps-tool-btn:hover {
  background: #505050;
}

.ps-tool-btn.primary {
  background: var(--ps-accent);
  border-color: #1a5cb0;
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

.ps-layer-list li {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.35rem;
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
}

.ps-canvas-stage {
  transition: transform 0.1s ease;
}

.ps-canvas {
  position: relative;
  box-shadow: 0 0 0 1px #111, 0 8px 40px rgba(0, 0, 0, 0.5);
  color: #111;
  user-select: none;
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
  pointer-events: none;
}

.ps-handle-se {
  right: -5px;
  bottom: -5px;
  pointer-events: auto;
  cursor: nwse-resize;
}

.ps-handle-nw { top: -5px; left: -5px; }
.ps-handle-ne { top: -5px; right: -5px; }
.ps-handle-sw { bottom: -5px; left: -5px; }
.ps-handle-n { top: -5px; left: 50%; transform: translateX(-50%); }
.ps-handle-s { bottom: -5px; left: 50%; transform: translateX(-50%); }
.ps-handle-w { left: -5px; top: 50%; transform: translateY(-50%); }
.ps-handle-e { right: -5px; top: 50%; transform: translateY(-50%); }

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
  accent-color: var(--ps-accent);
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
.review-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.review-tabs {
  display: flex;
  gap: 0.25rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--border);
}

.review-tabs button {
  background: transparent;
  border: none;
  color: var(--muted);
  padding: 0.65rem 1rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  font: inherit;
  font-size: 0.88rem;
}

.review-tabs button.active {
  color: var(--text);
  border-bottom-color: var(--accent);
}

.review-body {
  flex: 1;
  padding: 1rem 1.5rem;
  overflow: auto;
}

.preview-panel {
  padding: 1rem 0;
}

.export-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%) translateY(1rem);
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 1000;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast.success {
  background: #1a3d32;
  color: var(--success);
  border: 1px solid #2d6b55;
}

.toast.error {
  background: #3d1f22;
  color: var(--error);
  border: 1px solid #6b2d35;
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
`;function ty(){return d.jsx("style",{children:ey})}B0.createRoot(document.getElementById("root")).render(d.jsx(b.StrictMode,{children:d.jsxs(dv,{children:[d.jsx(ty,{}),d.jsx(jv,{children:d.jsx(Pv,{})})]})}));
