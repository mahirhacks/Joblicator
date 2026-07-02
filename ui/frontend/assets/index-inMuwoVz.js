(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))r(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function s(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(m){if(m.ep)return;m.ep=!0;const p=s(m);fetch(m.href,p)}})();var Gr={exports:{}},Yn={};var vm;function _v(){if(vm)return Yn;vm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(r,m,p){var y=null;if(p!==void 0&&(y=""+p),m.key!==void 0&&(y=""+m.key),"key"in m){p={};for(var T in m)T!=="key"&&(p[T]=m[T])}else p=m;return m=p.ref,{$$typeof:u,type:r,key:y,ref:m!==void 0?m:null,props:p}}return Yn.Fragment=o,Yn.jsx=s,Yn.jsxs=s,Yn}var gm;function Ov(){return gm||(gm=1,Gr.exports=_v()),Gr.exports}var d=Ov(),Xr={exports:{}},le={};var ym;function wv(){if(ym)return le;ym=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),D=Symbol.iterator;function _(S){return S===null||typeof S!="object"?null:(S=D&&S[D]||S["@@iterator"],typeof S=="function"?S:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,B={};function J(S,q,V){this.props=S,this.context=q,this.refs=B,this.updater=V||w}J.prototype.isReactComponent={},J.prototype.setState=function(S,q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,q,"setState")},J.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Q(){}Q.prototype=J.prototype;function k(S,q,V){this.props=S,this.context=q,this.refs=B,this.updater=V||w}var F=k.prototype=new Q;F.constructor=k,H(F,J.prototype),F.isPureReactComponent=!0;var ue=Array.isArray;function X(){}var G={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function pe(S,q,V){var K=V.ref;return{$$typeof:u,type:S,key:q,ref:K!==void 0?K:null,props:V}}function he(S,q){return pe(S.type,q,S.props)}function Ze(S){return typeof S=="object"&&S!==null&&S.$$typeof===u}function Re(S){var q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(V){return q[V]})}var tt=/\/+/g;function Ye(S,q){return typeof S=="object"&&S!==null&&S.key!=null?Re(""+S.key):q.toString(36)}function _e(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(X,X):(S.status="pending",S.then(function(q){S.status==="pending"&&(S.status="fulfilled",S.value=q)},function(q){S.status==="pending"&&(S.status="rejected",S.reason=q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function M(S,q,V,K,te){var re=typeof S;(re==="undefined"||re==="boolean")&&(S=null);var be=!1;if(S===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(S.$$typeof){case u:case o:be=!0;break;case C:return be=S._init,M(be(S._payload),q,V,K,te)}}if(be)return te=te(S),be=K===""?"."+Ye(S,0):K,ue(te)?(V="",be!=null&&(V=be.replace(tt,"$&/")+"/"),M(te,q,V,"",function(Za){return Za})):te!=null&&(Ze(te)&&(te=he(te,V+(te.key==null||S&&S.key===te.key?"":(""+te.key).replace(tt,"$&/")+"/")+be)),q.push(te)),1;be=0;var at=K===""?".":K+":";if(ue(S))for(var Ue=0;Ue<S.length;Ue++)K=S[Ue],re=at+Ye(K,Ue),be+=M(K,q,V,re,te);else if(Ue=_(S),typeof Ue=="function")for(S=Ue.call(S),Ue=0;!(K=S.next()).done;)K=K.value,re=at+Ye(K,Ue++),be+=M(K,q,V,re,te);else if(re==="object"){if(typeof S.then=="function")return M(_e(S),q,V,K,te);throw q=String(S),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return be}function g(S,q,V){if(S==null)return S;var K=[],te=0;return M(S,K,"","",function(re){return q.call(V,re,te++)}),K}function Z(S){if(S._status===-1){var q=S._result;q=q(),q.then(function(V){(S._status===0||S._status===-1)&&(S._status=1,S._result=V)},function(V){(S._status===0||S._status===-1)&&(S._status=2,S._result=V)}),S._status===-1&&(S._status=0,S._result=q)}if(S._status===1)return S._result.default;throw S._result}var ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ne={map:g,forEach:function(S,q,V){g(S,function(){q.apply(this,arguments)},V)},count:function(S){var q=0;return g(S,function(){q++}),q},toArray:function(S){return g(S,function(q){return q})||[]},only:function(S){if(!Ze(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return le.Activity=z,le.Children=ne,le.Component=J,le.Fragment=s,le.Profiler=m,le.PureComponent=k,le.StrictMode=r,le.Suspense=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(S){return G.H.useMemoCache(S)}},le.cache=function(S){return function(){return S.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(S,q,V){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var K=H({},S.props),te=S.key;if(q!=null)for(re in q.key!==void 0&&(te=""+q.key),q)!ce.call(q,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&q.ref===void 0||(K[re]=q[re]);var re=arguments.length-2;if(re===1)K.children=V;else if(1<re){for(var be=Array(re),at=0;at<re;at++)be[at]=arguments[at+2];K.children=be}return pe(S.type,te,K)},le.createContext=function(S){return S={$$typeof:y,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:p,_context:S},S},le.createElement=function(S,q,V){var K,te={},re=null;if(q!=null)for(K in q.key!==void 0&&(re=""+q.key),q)ce.call(q,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(te[K]=q[K]);var be=arguments.length-2;if(be===1)te.children=V;else if(1<be){for(var at=Array(be),Ue=0;Ue<be;Ue++)at[Ue]=arguments[Ue+2];te.children=at}if(S&&S.defaultProps)for(K in be=S.defaultProps,be)te[K]===void 0&&(te[K]=be[K]);return pe(S,re,te)},le.createRef=function(){return{current:null}},le.forwardRef=function(S){return{$$typeof:T,render:S}},le.isValidElement=Ze,le.lazy=function(S){return{$$typeof:C,_payload:{_status:-1,_result:S},_init:Z}},le.memo=function(S,q){return{$$typeof:h,type:S,compare:q===void 0?null:q}},le.startTransition=function(S){var q=G.T,V={};G.T=V;try{var K=S(),te=G.S;te!==null&&te(V,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(X,ee)}catch(re){ee(re)}finally{q!==null&&V.types!==null&&(q.types=V.types),G.T=q}},le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(S){return G.H.use(S)},le.useActionState=function(S,q,V){return G.H.useActionState(S,q,V)},le.useCallback=function(S,q){return G.H.useCallback(S,q)},le.useContext=function(S){return G.H.useContext(S)},le.useDebugValue=function(){},le.useDeferredValue=function(S,q){return G.H.useDeferredValue(S,q)},le.useEffect=function(S,q){return G.H.useEffect(S,q)},le.useEffectEvent=function(S){return G.H.useEffectEvent(S)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(S,q,V){return G.H.useImperativeHandle(S,q,V)},le.useInsertionEffect=function(S,q){return G.H.useInsertionEffect(S,q)},le.useLayoutEffect=function(S,q){return G.H.useLayoutEffect(S,q)},le.useMemo=function(S,q){return G.H.useMemo(S,q)},le.useOptimistic=function(S,q){return G.H.useOptimistic(S,q)},le.useReducer=function(S,q,V){return G.H.useReducer(S,q,V)},le.useRef=function(S){return G.H.useRef(S)},le.useState=function(S){return G.H.useState(S)},le.useSyncExternalStore=function(S,q,V){return G.H.useSyncExternalStore(S,q,V)},le.useTransition=function(){return G.H.useTransition()},le.version="19.2.7",le}var bm;function lo(){return bm||(bm=1,Xr.exports=wv()),Xr.exports}var E=lo(),Qr={exports:{}},qn={},kr={exports:{}},Zr={};var xm;function Dv(){return xm||(xm=1,(function(u){function o(M,g){var Z=M.length;M.push(g);e:for(;0<Z;){var ee=Z-1>>>1,ne=M[ee];if(0<m(ne,g))M[ee]=g,M[Z]=ne,Z=ee;else break e}}function s(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var g=M[0],Z=M.pop();if(Z!==g){M[0]=Z;e:for(var ee=0,ne=M.length,S=ne>>>1;ee<S;){var q=2*(ee+1)-1,V=M[q],K=q+1,te=M[K];if(0>m(V,Z))K<ne&&0>m(te,V)?(M[ee]=te,M[K]=Z,ee=K):(M[ee]=V,M[q]=Z,ee=q);else if(K<ne&&0>m(te,Z))M[ee]=te,M[K]=Z,ee=K;else break e}}return g}function m(M,g){var Z=M.sortIndex-g.sortIndex;return Z!==0?Z:M.id-g.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var y=Date,T=y.now();u.unstable_now=function(){return y.now()-T}}var x=[],h=[],C=1,z=null,D=3,_=!1,w=!1,H=!1,B=!1,J=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function F(M){for(var g=s(h);g!==null;){if(g.callback===null)r(h);else if(g.startTime<=M)r(h),g.sortIndex=g.expirationTime,o(x,g);else break;g=s(h)}}function ue(M){if(H=!1,F(M),!w)if(s(x)!==null)w=!0,X||(X=!0,Re());else{var g=s(h);g!==null&&_e(ue,g.startTime-M)}}var X=!1,G=-1,ce=5,pe=-1;function he(){return B?!0:!(u.unstable_now()-pe<ce)}function Ze(){if(B=!1,X){var M=u.unstable_now();pe=M;var g=!0;try{e:{w=!1,H&&(H=!1,Q(G),G=-1),_=!0;var Z=D;try{t:{for(F(M),z=s(x);z!==null&&!(z.expirationTime>M&&he());){var ee=z.callback;if(typeof ee=="function"){z.callback=null,D=z.priorityLevel;var ne=ee(z.expirationTime<=M);if(M=u.unstable_now(),typeof ne=="function"){z.callback=ne,F(M),g=!0;break t}z===s(x)&&r(x),F(M)}else r(x);z=s(x)}if(z!==null)g=!0;else{var S=s(h);S!==null&&_e(ue,S.startTime-M),g=!1}}break e}finally{z=null,D=Z,_=!1}g=void 0}}finally{g?Re():X=!1}}}var Re;if(typeof k=="function")Re=function(){k(Ze)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Ye=tt.port2;tt.port1.onmessage=Ze,Re=function(){Ye.postMessage(null)}}else Re=function(){J(Ze,0)};function _e(M,g){G=J(function(){M(u.unstable_now())},g)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(M){M.callback=null},u.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<M?Math.floor(1e3/M):5},u.unstable_getCurrentPriorityLevel=function(){return D},u.unstable_next=function(M){switch(D){case 1:case 2:case 3:var g=3;break;default:g=D}var Z=D;D=g;try{return M()}finally{D=Z}},u.unstable_requestPaint=function(){B=!0},u.unstable_runWithPriority=function(M,g){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=D;D=M;try{return g()}finally{D=Z}},u.unstable_scheduleCallback=function(M,g,Z){var ee=u.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ee+Z:ee):Z=ee,M){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Z+ne,M={id:C++,callback:g,priorityLevel:M,startTime:Z,expirationTime:ne,sortIndex:-1},Z>ee?(M.sortIndex=Z,o(h,M),s(x)===null&&M===s(h)&&(H?(Q(G),G=-1):H=!0,_e(ue,Z-ee))):(M.sortIndex=ne,o(x,M),w||_||(w=!0,X||(X=!0,Re()))),M},u.unstable_shouldYield=he,u.unstable_wrapCallback=function(M){var g=D;return function(){var Z=D;D=g;try{return M.apply(this,arguments)}finally{D=Z}}}})(Zr)),Zr}var Sm;function Mv(){return Sm||(Sm=1,kr.exports=Dv()),kr.exports}var Vr={exports:{}},lt={};var Em;function Uv(){if(Em)return lt;Em=1;var u=lo();function o(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)h+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var r={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(x,h,C){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:z==null?null:""+z,children:x,containerInfo:h,implementation:C}}var y=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,lt.createPortal=function(x,h){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return p(x,h,null,C)},lt.flushSync=function(x){var h=y.T,C=r.p;try{if(y.T=null,r.p=2,x)return x()}finally{y.T=h,r.p=C,r.d.f()}},lt.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(x,h))},lt.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},lt.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var C=h.as,z=T(C,h.crossOrigin),D=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;C==="style"?r.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:z,integrity:D,fetchPriority:_}):C==="script"&&r.d.X(x,{crossOrigin:z,integrity:D,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},lt.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var C=T(h.as,h.crossOrigin);r.d.M(x,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(x)},lt.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var C=h.as,z=T(C,h.crossOrigin);r.d.L(x,C,{crossOrigin:z,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},lt.preloadModule=function(x,h){if(typeof x=="string")if(h){var C=T(h.as,h.crossOrigin);r.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(x)},lt.requestFormReset=function(x){r.d.r(x)},lt.unstable_batchedUpdates=function(x,h){return x(h)},lt.useFormState=function(x,h,C){return y.H.useFormState(x,h,C)},lt.useFormStatus=function(){return y.H.useHostTransitionStatus()},lt.version="19.2.7",lt}var zm;function Hv(){if(zm)return Vr.exports;zm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Vr.exports=Uv(),Vr.exports}var jm;function Lv(){if(jm)return qn;jm=1;var u=Mv(),o=lo(),s=Hv();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(p(e)!==e)throw Error(r(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return x(n),e;if(i===a)return x(n),t;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,f=n.child;f;){if(f===l){c=!0,l=n,a=i;break}if(f===a){c=!0,a=n,l=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===l){c=!0,l=i,a=n;break}if(f===a){c=!0,a=i,l=n;break}f=f.sibling}if(!c)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,D=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),k=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),Ze=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Ze&&e[Ze]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case J:return"Profiler";case B:return"StrictMode";case ue:return"Suspense";case X:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case k:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var _e=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,g=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ee=[],ne=-1;function S(e){return{current:e}}function q(e){0>ne||(e.current=ee[ne],ee[ne]=null,ne--)}function V(e,t){ne++,ee[ne]=e.current,e.current=t}var K=S(null),te=S(null),re=S(null),be=S(null);function at(e,t){switch(V(re,t),V(te,e),V(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Yd(t),e=qd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(K),V(K,e)}function Ue(){q(K),q(te),q(re)}function Za(e){e.memoizedState!==null&&V(be,e);var t=K.current,l=qd(t,e.type);t!==l&&(V(te,e),V(K,l))}function Vn(e){te.current===e&&(q(K),q(te)),be.current===e&&(q(be),Un._currentValue=Z)}var zu,po;function Hl(e){if(zu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);zu=t&&t[1]||"",po=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zu+e+po}var ju=!1;function Tu(e,t){if(!e||ju)return"";ju=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(O){var R=O}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(O){R=O}e.call(Y.prototype)}}else{try{throw Error()}catch(O){R=O}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(O){if(O&&R&&typeof O.stack=="string")return[O.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var v=c.split(`
`),A=f.split(`
`);for(n=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;n<A.length&&!A[n].includes("DetermineComponentFrameRoot");)n++;if(a===v.length||n===A.length)for(a=v.length-1,n=A.length-1;1<=a&&0<=n&&v[a]!==A[n];)n--;for(;1<=a&&0<=n;a--,n--)if(v[a]!==A[n]){if(a!==1||n!==1)do if(a--,n--,0>n||v[a]!==A[n]){var U=`
`+v[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=n);break}}}finally{ju=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Hl(l):""}function cp(e,t){switch(e.tag){case 26:case 27:case 5:return Hl(e.type);case 16:return Hl("Lazy");case 13:return e.child!==t&&t!==null?Hl("Suspense Fallback"):Hl("Suspense");case 19:return Hl("SuspenseList");case 0:case 15:return Tu(e.type,!1);case 11:return Tu(e.type.render,!1);case 1:return Tu(e.type,!0);case 31:return Hl("Activity");default:return""}}function ho(e){try{var t="",l=null;do t+=cp(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Nu=Object.prototype.hasOwnProperty,Au=u.unstable_scheduleCallback,Cu=u.unstable_cancelCallback,rp=u.unstable_shouldYield,op=u.unstable_requestPaint,dt=u.unstable_now,sp=u.unstable_getCurrentPriorityLevel,vo=u.unstable_ImmediatePriority,go=u.unstable_UserBlockingPriority,Jn=u.unstable_NormalPriority,fp=u.unstable_LowPriority,yo=u.unstable_IdlePriority,dp=u.log,mp=u.unstable_setDisableYieldValue,Va=null,mt=null;function sl(e){if(typeof dp=="function"&&mp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Va,e)}catch{}}var pt=Math.clz32?Math.clz32:vp,pp=Math.log,hp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(pp(e)/hp|0)|0}var Kn=256,$n=262144,Wn=4194304;function Ll(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~i,a!==0?n=Ll(a):(c&=f,c!==0?n=Ll(c):l||(l=f&~e,l!==0&&(n=Ll(l))))):(f=a&~i,f!==0?n=Ll(f):c!==0?n=Ll(c):l||(l=a&~e,l!==0&&(n=Ll(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Ja(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bo(){var e=Wn;return Wn<<=1,(Wn&62914560)===0&&(Wn=4194304),e}function Ru(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ka(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yp(e,t,l,a,n,i){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var f=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(l=c&~l;0<l;){var U=31-pt(l),Y=1<<U;f[U]=0,v[U]=-1;var R=A[U];if(R!==null)for(A[U]=null,U=0;U<R.length;U++){var O=R[U];O!==null&&(O.lane&=-536870913)}l&=~Y}a!==0&&xo(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function xo(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-pt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function So(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-pt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Eo(e,t){var l=t&-t;return l=(l&42)!==0?1:_u(l),(l&(e.suspendedLanes|t))!==0?0:l}function _u(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ou(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zo(){var e=g.p;return e!==0?e:(e=window.event,e===void 0?32:om(e.type))}function jo(e,t){var l=g.p;try{return g.p=e,t()}finally{g.p=l}}var fl=Math.random().toString(36).slice(2),We="__reactFiber$"+fl,it="__reactProps$"+fl,aa="__reactContainer$"+fl,wu="__reactEvents$"+fl,bp="__reactListeners$"+fl,xp="__reactHandles$"+fl,To="__reactResources$"+fl,$a="__reactMarker$"+fl;function Du(e){delete e[We],delete e[it],delete e[wu],delete e[bp],delete e[xp]}function na(e){var t=e[We];if(t)return t;for(var l=e.parentNode;l;){if(t=l[aa]||l[We]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Jd(e);e!==null;){if(l=e[We])return l;e=Jd(e)}return t}e=l,l=e.parentNode}return null}function ia(e){if(e=e[We]||e[aa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ua(e){var t=e[To];return t||(t=e[To]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[$a]=!0}var No=new Set,Ao={};function Bl(e,t){ca(e,t),ca(e+"Capture",t)}function ca(e,t){for(Ao[e]=t,e=0;e<t.length;e++)No.add(t[e])}var Sp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},Ro={};function Ep(e){return Nu.call(Ro,e)?!0:Nu.call(Co,e)?!1:Sp.test(e)?Ro[e]=!0:(Co[e]=!0,!1)}function In(e,t,l){if(Ep(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function Pn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Zt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _o(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zp(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mu(e){if(!e._valueTracker){var t=_o(e)?"checked":"value";e._valueTracker=zp(e,t,""+e[t])}}function Oo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=_o(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jp=/[\n"\\]/g;function jt(e){return e.replace(jp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uu(e,t,l,a,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Hu(e,c,zt(t)):l!=null?Hu(e,c,zt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+zt(f):e.removeAttribute("name")}function wo(e,t,l,a,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Mu(e);return}l=l!=null?""+zt(l):"",t=t!=null?""+zt(t):l,f||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Mu(e)}function Hu(e,t,l){t==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ra(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+zt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Do(e,t,l){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+zt(l):""}function Mo(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(r(92));if(_e(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=zt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Mu(e)}function oa(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Tp.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Ho(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Uo(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Uo(e,i,t[i])}function Lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ap=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return Ap.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vt(){}var Bu=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,fa=null;function Lo(e){var t=ia(e);if(t&&(e=t.stateNode)){var l=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Uu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[it]||null;if(!n)throw Error(r(90));Uu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Oo(a)}break e;case"textarea":Do(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ra(e,!!l.multiple,t,!1)}}}var qu=!1;function Bo(e,t,l){if(qu)return e(t,l);qu=!0;try{var a=e(t);return a}finally{if(qu=!1,(sa!==null||fa!==null)&&(Xi(),sa&&(t=sa,e=fa,fa=sa=null,Lo(t),e)))for(t=0;t<e.length;t++)Lo(e[t])}}function Fa(e,t){var l=e.stateNode;if(l===null)return null;var a=l[it]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(Jt)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Gu=!1}var dl=null,Xu=null,li=null;function Yo(){if(li)return li;var e,t=Xu,l=t.length,a,n="value"in dl?dl.value:dl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[i-a];a++);return li=n.slice(e,1<a?1-a:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function qo(){return!1}function ut(e){function t(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(l=e[f],this[f]=l?l(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:qo,this.isPropagationStopped=qo,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Yl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=ut(Yl),Pa=z({},Yl,{view:0,detail:0}),Cp=ut(Pa),Qu,ku,en,ui=z({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&e.type==="mousemove"?(Qu=e.screenX-en.screenX,ku=e.screenY-en.screenY):ku=Qu=0,en=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),Go=ut(ui),Rp=z({},ui,{dataTransfer:0}),_p=ut(Rp),Op=z({},Pa,{relatedTarget:0}),Zu=ut(Op),wp=z({},Yl,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=ut(wp),Mp=z({},Yl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Up=ut(Mp),Hp=z({},Yl,{data:0}),Xo=ut(Hp),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yp[e])?!!t[e]:!1}function Vu(){return qp}var Gp=z({},Pa,{key:function(e){if(e.key){var t=Lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xp=ut(Gp),Qp=z({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=ut(Qp),kp=z({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Zp=ut(kp),Vp=z({},Yl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=ut(Vp),Kp=z({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=ut(Kp),Wp=z({},Yl,{newState:0,oldState:0}),Fp=ut(Wp),Ip=[9,13,27,32],Ju=Jt&&"CompositionEvent"in window,tn=null;Jt&&"documentMode"in document&&(tn=document.documentMode);var Pp=Jt&&"TextEvent"in window&&!tn,ko=Jt&&(!Ju||tn&&8<tn&&11>=tn),Zo=" ",Vo=!1;function Jo(e,t){switch(e){case"keyup":return Ip.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ko(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var da=!1;function eh(e,t){switch(e){case"compositionend":return Ko(t);case"keypress":return t.which!==32?null:(Vo=!0,Zo);case"textInput":return e=t.data,e===Zo&&Vo?null:e;default:return null}}function th(e,t){if(da)return e==="compositionend"||!Ju&&Jo(e,t)?(e=Yo(),li=Xu=dl=null,da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ko&&t.locale!=="ko"?null:t.data;default:return null}}var lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lh[e.type]:t==="textarea"}function Wo(e,t,l,a){sa?fa?fa.push(a):fa=[a]:sa=a,t=$i(t,"onChange"),0<t.length&&(l=new ii("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var ln=null,an=null;function ah(e){Dd(e,0)}function ci(e){var t=Wa(e);if(Oo(t))return e}function Fo(e,t){if(e==="change")return t}var Io=!1;if(Jt){var Ku;if(Jt){var $u="oninput"in document;if(!$u){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),$u=typeof Po.oninput=="function"}Ku=$u}else Ku=!1;Io=Ku&&(!document.documentMode||9<document.documentMode)}function es(){ln&&(ln.detachEvent("onpropertychange",ts),an=ln=null)}function ts(e){if(e.propertyName==="value"&&ci(an)){var t=[];Wo(t,an,e,Yu(e)),Bo(ah,t)}}function nh(e,t,l){e==="focusin"?(es(),ln=t,an=l,ln.attachEvent("onpropertychange",ts)):e==="focusout"&&es()}function ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(an)}function uh(e,t){if(e==="click")return ci(t)}function ch(e,t){if(e==="input"||e==="change")return ci(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:rh;function nn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Nu.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var l=ls(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ls(l)}}function ns(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ns(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function is(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ei(e.document)}return t}function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var oh=Jt&&"documentMode"in document&&11>=document.documentMode,ma=null,Fu=null,un=null,Iu=!1;function us(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Iu||ma==null||ma!==ei(a)||(a=ma,"selectionStart"in a&&Wu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),un&&nn(un,a)||(un=a,a=$i(Fu,"onSelect"),0<a.length&&(t=new ii("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ma)))}function ql(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var pa={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionrun:ql("Transition","TransitionRun"),transitionstart:ql("Transition","TransitionStart"),transitioncancel:ql("Transition","TransitionCancel"),transitionend:ql("Transition","TransitionEnd")},Pu={},cs={};Jt&&(cs=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Gl(e){if(Pu[e])return Pu[e];if(!pa[e])return e;var t=pa[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in cs)return Pu[e]=t[l];return e}var rs=Gl("animationend"),os=Gl("animationiteration"),ss=Gl("animationstart"),sh=Gl("transitionrun"),fh=Gl("transitionstart"),dh=Gl("transitioncancel"),fs=Gl("transitionend"),ds=new Map,ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ec.push("scrollEnd");function Mt(e,t){ds.set(e,t),Bl(t,[e])}var ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],ha=0,tc=0;function oi(){for(var e=ha,t=tc=ha=0;t<e;){var l=Tt[t];Tt[t++]=null;var a=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var i=Tt[t];if(Tt[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&ms(l,n,i)}}function si(e,t,l,a){Tt[ha++]=e,Tt[ha++]=t,Tt[ha++]=l,Tt[ha++]=a,tc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function lc(e,t,l,a){return si(e,t,l,a),fi(e)}function Xl(e,t){return si(e,null,null,t),fi(e)}function ms(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function fi(e){if(50<Cn)throw Cn=0,fr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var va={};function mh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,l,a){return new mh(e,t,l,a)}function ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var l=e.alternate;return l===null?(l=vt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ps(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,l,a,n,i){var c=0;if(a=e,typeof e=="function")ac(e)&&(c=1);else if(typeof e=="string")c=yv(e,l,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=vt(31,l,t,n),e.elementType=pe,e.lanes=i,e;case H:return Ql(l.children,n,i,t);case B:c=8,n|=24;break;case J:return e=vt(12,l,t,n|2),e.elementType=J,e.lanes=i,e;case ue:return e=vt(13,l,t,n),e.elementType=ue,e.lanes=i,e;case X:return e=vt(19,l,t,n),e.elementType=X,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:c=10;break e;case Q:c=9;break e;case F:c=11;break e;case G:c=14;break e;case ce:c=16,a=null;break e}c=29,l=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=vt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Ql(e,t,l,a){return e=vt(7,e,a,t),e.lanes=l,e}function nc(e,t,l){return e=vt(6,e,null,t),e.lanes=l,e}function hs(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function ic(e,t,l){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vs=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var l=vs.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ho(t)},vs.set(e,t),t)}return{value:e,source:t,stack:ho(t)}}var ga=[],ya=0,mi=null,cn=0,At=[],Ct=0,ml=null,qt=1,Gt="";function $t(e,t){ga[ya++]=cn,ga[ya++]=mi,mi=e,cn=t}function gs(e,t,l){At[Ct++]=qt,At[Ct++]=Gt,At[Ct++]=ml,ml=e;var a=qt;e=Gt;var n=32-pt(a)-1;a&=~(1<<n),l+=1;var i=32-pt(t)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,qt=1<<32-pt(t)+n|l<<n|a,Gt=i+e}else qt=1<<i|l<<n|a,Gt=e}function uc(e){e.return!==null&&($t(e,1),gs(e,1,0))}function cc(e){for(;e===mi;)mi=ga[--ya],ga[ya]=null,cn=ga[--ya],ga[ya]=null;for(;e===ml;)ml=At[--Ct],At[Ct]=null,Gt=At[--Ct],At[Ct]=null,qt=At[--Ct],At[Ct]=null}function ys(e,t){At[Ct++]=qt,At[Ct++]=Gt,At[Ct++]=ml,qt=t.id,Gt=t.overflow,ml=e}var Fe=null,Ne=null,me=!1,pl=null,Rt=!1,rc=Error(r(519));function hl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rn(Nt(t,e)),rc}function bs(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[We]=e,t[it]=a,l){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(l=0;l<_n.length;l++)se(_n[l],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),wo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Mo(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Ld(t.textContent,l)?(a.popover!=null&&(se("beforetoggle",t),se("toggle",t)),a.onScroll!=null&&se("scroll",t),a.onScrollEnd!=null&&se("scrollend",t),a.onClick!=null&&(t.onclick=Vt),t=!0):t=!1,t||hl(e,!0)}function xs(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Fe=Fe.return}}function ba(e){if(e!==Fe)return!1;if(!me)return xs(e),me=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Nr(e.type,e.memoizedProps)),l=!l),l&&Ne&&hl(e),xs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ne=Vd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ne=Vd(e)}else t===27?(t=Ne,Rl(e.type)?(e=Or,Or=null,Ne=e):Ne=t):Ne=Fe?Ot(e.stateNode.nextSibling):null;return!0}function kl(){Ne=Fe=null,me=!1}function oc(){var e=pl;return e!==null&&(st===null?st=e:st.push.apply(st,e),pl=null),e}function rn(e){pl===null?pl=[e]:pl.push(e)}var sc=S(null),Zl=null,Wt=null;function vl(e,t,l){V(sc,t._currentValue),t._currentValue=l}function Ft(e){e._currentValue=sc.current,q(sc)}function fc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function dc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var v=0;v<t.length;v++)if(f.context===t[v]){i.lanes|=l,f=i.alternate,f!==null&&(f.lanes|=l),fc(i.return,l,e),a||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),fc(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function xa(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var f=n.type;ht(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===be.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Un):e=[Un])}n=n.return}e!==null&&dc(t,e,l,a),t.flags|=262144}function pi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vl(e){Zl=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Ss(Zl,e)}function hi(e,t){return Zl===null&&Vl(e),Ss(e,t)}function Ss(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Wt===null){if(e===null)throw Error(r(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return l}var ph=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},hh=u.unstable_scheduleCallback,vh=u.unstable_NormalPriority,qe={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mc(){return{controller:new ph,data:new Map,refCount:0}}function on(e){e.refCount--,e.refCount===0&&hh(vh,function(){e.controller.abort()})}var sn=null,pc=0,Sa=0,Ea=null;function gh(e,t){if(sn===null){var l=sn=[];pc=0,Sa=gr(),Ea={status:"pending",value:void 0,then:function(a){l.push(a)}}}return pc++,t.then(Es,Es),t}function Es(){if(--pc===0&&sn!==null){Ea!==null&&(Ea.status="fulfilled");var e=sn;sn=null,Sa=0,Ea=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var zs=M.S;M.S=function(e,t){cd=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gh(e,t),zs!==null&&zs(e,t)};var Jl=S(null);function hc(){var e=Jl.current;return e!==null?e:Te.pooledCache}function vi(e,t){t===null?V(Jl,Jl.current):V(Jl,t.pool)}function js(){var e=hc();return e===null?null:{parent:qe._currentValue,pool:e}}var za=Error(r(460)),vc=Error(r(474)),gi=Error(r(542)),yi={then:function(){}};function Ts(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ns(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Vt,Vt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e;default:if(typeof t.status=="string")t.then(Vt,Vt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Cs(e),e}throw $l=t,za}}function Kl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?($l=l,za):l}}var $l=null;function As(){if($l===null)throw Error(r(459));var e=$l;return $l=null,e}function Cs(e){if(e===za||e===gi)throw Error(r(483))}var ja=null,fn=0;function bi(e){var t=fn;return fn+=1,ja===null&&(ja=[]),Ns(ja,e,t)}function dn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===D?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rs(e){function t(j,b){if(e){var N=j.deletions;N===null?(j.deletions=[b],j.flags|=16):N.push(b)}}function l(j,b){if(!e)return null;for(;b!==null;)t(j,b),b=b.sibling;return null}function a(j){for(var b=new Map;j!==null;)j.key!==null?b.set(j.key,j):b.set(j.index,j),j=j.sibling;return b}function n(j,b){return j=Kt(j,b),j.index=0,j.sibling=null,j}function i(j,b,N){return j.index=N,e?(N=j.alternate,N!==null?(N=N.index,N<b?(j.flags|=67108866,b):N):(j.flags|=67108866,b)):(j.flags|=1048576,b)}function c(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function f(j,b,N,L){return b===null||b.tag!==6?(b=nc(N,j.mode,L),b.return=j,b):(b=n(b,N),b.return=j,b)}function v(j,b,N,L){var I=N.type;return I===H?U(j,b,N.props.children,L,N.key):b!==null&&(b.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ce&&Kl(I)===b.type)?(b=n(b,N.props),dn(b,N),b.return=j,b):(b=di(N.type,N.key,N.props,null,j.mode,L),dn(b,N),b.return=j,b)}function A(j,b,N,L){return b===null||b.tag!==4||b.stateNode.containerInfo!==N.containerInfo||b.stateNode.implementation!==N.implementation?(b=ic(N,j.mode,L),b.return=j,b):(b=n(b,N.children||[]),b.return=j,b)}function U(j,b,N,L,I){return b===null||b.tag!==7?(b=Ql(N,j.mode,L,I),b.return=j,b):(b=n(b,N),b.return=j,b)}function Y(j,b,N){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=nc(""+b,j.mode,N),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _:return N=di(b.type,b.key,b.props,null,j.mode,N),dn(N,b),N.return=j,N;case w:return b=ic(b,j.mode,N),b.return=j,b;case ce:return b=Kl(b),Y(j,b,N)}if(_e(b)||Re(b))return b=Ql(b,j.mode,N,null),b.return=j,b;if(typeof b.then=="function")return Y(j,bi(b),N);if(b.$$typeof===k)return Y(j,hi(j,b),N);xi(j,b)}return null}function R(j,b,N,L){var I=b!==null?b.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return I!==null?null:f(j,b,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return N.key===I?v(j,b,N,L):null;case w:return N.key===I?A(j,b,N,L):null;case ce:return N=Kl(N),R(j,b,N,L)}if(_e(N)||Re(N))return I!==null?null:U(j,b,N,L,null);if(typeof N.then=="function")return R(j,b,bi(N),L);if(N.$$typeof===k)return R(j,b,hi(j,N),L);xi(j,N)}return null}function O(j,b,N,L,I){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return j=j.get(N)||null,f(b,j,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _:return j=j.get(L.key===null?N:L.key)||null,v(b,j,L,I);case w:return j=j.get(L.key===null?N:L.key)||null,A(b,j,L,I);case ce:return L=Kl(L),O(j,b,N,L,I)}if(_e(L)||Re(L))return j=j.get(N)||null,U(b,j,L,I,null);if(typeof L.then=="function")return O(j,b,N,bi(L),I);if(L.$$typeof===k)return O(j,b,N,hi(b,L),I);xi(b,L)}return null}function $(j,b,N,L){for(var I=null,ve=null,W=b,ie=b=0,de=null;W!==null&&ie<N.length;ie++){W.index>ie?(de=W,W=null):de=W.sibling;var ge=R(j,W,N[ie],L);if(ge===null){W===null&&(W=de);break}e&&W&&ge.alternate===null&&t(j,W),b=i(ge,b,ie),ve===null?I=ge:ve.sibling=ge,ve=ge,W=de}if(ie===N.length)return l(j,W),me&&$t(j,ie),I;if(W===null){for(;ie<N.length;ie++)W=Y(j,N[ie],L),W!==null&&(b=i(W,b,ie),ve===null?I=W:ve.sibling=W,ve=W);return me&&$t(j,ie),I}for(W=a(W);ie<N.length;ie++)de=O(W,j,ie,N[ie],L),de!==null&&(e&&de.alternate!==null&&W.delete(de.key===null?ie:de.key),b=i(de,b,ie),ve===null?I=de:ve.sibling=de,ve=de);return e&&W.forEach(function(Ml){return t(j,Ml)}),me&&$t(j,ie),I}function P(j,b,N,L){if(N==null)throw Error(r(151));for(var I=null,ve=null,W=b,ie=b=0,de=null,ge=N.next();W!==null&&!ge.done;ie++,ge=N.next()){W.index>ie?(de=W,W=null):de=W.sibling;var Ml=R(j,W,ge.value,L);if(Ml===null){W===null&&(W=de);break}e&&W&&Ml.alternate===null&&t(j,W),b=i(Ml,b,ie),ve===null?I=Ml:ve.sibling=Ml,ve=Ml,W=de}if(ge.done)return l(j,W),me&&$t(j,ie),I;if(W===null){for(;!ge.done;ie++,ge=N.next())ge=Y(j,ge.value,L),ge!==null&&(b=i(ge,b,ie),ve===null?I=ge:ve.sibling=ge,ve=ge);return me&&$t(j,ie),I}for(W=a(W);!ge.done;ie++,ge=N.next())ge=O(W,j,ie,ge.value,L),ge!==null&&(e&&ge.alternate!==null&&W.delete(ge.key===null?ie:ge.key),b=i(ge,b,ie),ve===null?I=ge:ve.sibling=ge,ve=ge);return e&&W.forEach(function(Rv){return t(j,Rv)}),me&&$t(j,ie),I}function je(j,b,N,L){if(typeof N=="object"&&N!==null&&N.type===H&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case _:e:{for(var I=N.key;b!==null;){if(b.key===I){if(I=N.type,I===H){if(b.tag===7){l(j,b.sibling),L=n(b,N.props.children),L.return=j,j=L;break e}}else if(b.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ce&&Kl(I)===b.type){l(j,b.sibling),L=n(b,N.props),dn(L,N),L.return=j,j=L;break e}l(j,b);break}else t(j,b);b=b.sibling}N.type===H?(L=Ql(N.props.children,j.mode,L,N.key),L.return=j,j=L):(L=di(N.type,N.key,N.props,null,j.mode,L),dn(L,N),L.return=j,j=L)}return c(j);case w:e:{for(I=N.key;b!==null;){if(b.key===I)if(b.tag===4&&b.stateNode.containerInfo===N.containerInfo&&b.stateNode.implementation===N.implementation){l(j,b.sibling),L=n(b,N.children||[]),L.return=j,j=L;break e}else{l(j,b);break}else t(j,b);b=b.sibling}L=ic(N,j.mode,L),L.return=j,j=L}return c(j);case ce:return N=Kl(N),je(j,b,N,L)}if(_e(N))return $(j,b,N,L);if(Re(N)){if(I=Re(N),typeof I!="function")throw Error(r(150));return N=I.call(N),P(j,b,N,L)}if(typeof N.then=="function")return je(j,b,bi(N),L);if(N.$$typeof===k)return je(j,b,hi(j,N),L);xi(j,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,b!==null&&b.tag===6?(l(j,b.sibling),L=n(b,N),L.return=j,j=L):(l(j,b),L=nc(N,j.mode,L),L.return=j,j=L),c(j)):l(j,b)}return function(j,b,N,L){try{fn=0;var I=je(j,b,N,L);return ja=null,I}catch(W){if(W===za||W===gi)throw W;var ve=vt(29,W,null,j.mode);return ve.lanes=L,ve.return=j,ve}}}var Wl=Rs(!0),_s=Rs(!1),gl=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=fi(e),ms(e,null,l),t}return si(e,a,t,l),fi(e)}function mn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,So(e,l)}}function bc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var xc=!1;function pn(){if(xc){var e=Ea;if(e!==null)throw e}}function hn(e,t,l,a){xc=!1;var n=e.updateQueue;gl=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var v=f,A=v.next;v.next=null,c===null?i=A:c.next=A,c=v;var U=e.alternate;U!==null&&(U=U.updateQueue,f=U.lastBaseUpdate,f!==c&&(f===null?U.firstBaseUpdate=A:f.next=A,U.lastBaseUpdate=v))}if(i!==null){var Y=n.baseState;c=0,U=A=v=null,f=i;do{var R=f.lane&-536870913,O=R!==f.lane;if(O?(fe&R)===R:(a&R)===R){R!==0&&R===Sa&&(xc=!0),U!==null&&(U=U.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var $=e,P=f;R=t;var je=l;switch(P.tag){case 1:if($=P.payload,typeof $=="function"){Y=$.call(je,Y,R);break e}Y=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=P.payload,R=typeof $=="function"?$.call(je,Y,R):$,R==null)break e;Y=z({},Y,R);break e;case 2:gl=!0}}R=f.callback,R!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[R]:O.push(R))}else O={lane:R,tag:f.tag,payload:f.payload,callback:f.callback,next:null},U===null?(A=U=O,v=Y):U=U.next=O,c|=R;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;O=f,f=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);U===null&&(v=Y),n.baseState=v,n.firstBaseUpdate=A,n.lastBaseUpdate=U,i===null&&(n.shared.lanes=0),jl|=c,e.lanes=c,e.memoizedState=Y}}function Os(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function ws(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Os(l[e],t)}var Ta=S(null),Si=S(0);function Ds(e,t){e=ul,V(Si,e),V(Ta,t),ul=e|t.baseLanes}function Sc(){V(Si,ul),V(Ta,Ta.current)}function Ec(){ul=Si.current,q(Ta),q(Si)}var gt=S(null),_t=null;function xl(e){var t=e.alternate;V(He,He.current&1),V(gt,e),_t===null&&(t===null||Ta.current!==null||t.memoizedState!==null)&&(_t=e)}function zc(e){V(He,He.current),V(gt,e),_t===null&&(_t=e)}function Ms(e){e.tag===22?(V(He,He.current),V(gt,e),_t===null&&(_t=e)):Sl()}function Sl(){V(He,He.current),V(gt,gt.current)}function yt(e){q(gt),_t===e&&(_t=null),q(He)}var He=S(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Rr(l)||_r(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ae=null,Ee=null,Ge=null,zi=!1,Na=!1,Fl=!1,ji=0,vn=0,Aa=null,bh=0;function De(){throw Error(r(321))}function jc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ht(e[l],t[l]))return!1;return!0}function Tc(e,t,l,a,n,i){return It=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?yf:qc,Fl=!1,i=l(a,n),Fl=!1,Na&&(i=Hs(t,l,a,n)),Us(e),i}function Us(e){M.H=bn;var t=Ee!==null&&Ee.next!==null;if(It=0,Ge=Ee=ae=null,zi=!1,vn=0,Aa=null,t)throw Error(r(300));e===null||Xe||(e=e.dependencies,e!==null&&pi(e)&&(Xe=!0))}function Hs(e,t,l,a){ae=e;var n=0;do{if(Na&&(Aa=null),vn=0,Na=!1,25<=n)throw Error(r(301));if(n+=1,Ge=Ee=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=bf,i=t(l,a)}while(Na);return i}function xh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?gn(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ae.flags|=1024),t}function Nc(){var e=ji!==0;return ji=0,e}function Ac(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Cc(e){if(zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zi=!1}It=0,Ge=Ee=ae=null,Na=!1,vn=ji=0,Aa=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ae.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Le(){if(Ee===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ge===null?ae.memoizedState:Ge.next;if(t!==null)Ge=t,Ee=e;else{if(e===null)throw ae.alternate===null?Error(r(467)):Error(r(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ge===null?ae.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var t=vn;return vn+=1,Aa===null&&(Aa=[]),e=Ns(Aa,e,t),t=ae,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?yf:qc),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===k)return Ie(e)}throw Error(r(438,String(e)))}function Rc(e){var t=null,l=ae.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ae.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Ti(),ae.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=he;return t.index++,l}function Pt(e,t){return typeof t=="function"?t(e):t}function Ai(e){var t=Le();return _c(t,Ee,e)}function _c(e,t,l){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,v=null,A=t,U=!1;do{var Y=A.lane&-536870913;if(Y!==A.lane?(fe&Y)===Y:(It&Y)===Y){var R=A.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),Y===Sa&&(U=!0);else if((It&R)===R){A=A.next,R===Sa&&(U=!0);continue}else Y={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(f=v=Y,c=i):v=v.next=Y,ae.lanes|=R,jl|=R;Y=A.action,Fl&&l(i,Y),i=A.hasEagerState?A.eagerState:l(i,Y)}else R={lane:Y,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(f=v=R,c=i):v=v.next=R,ae.lanes|=Y,jl|=Y;A=A.next}while(A!==null&&A!==t);if(v===null?c=i:v.next=f,!ht(i,e.memoizedState)&&(Xe=!0,U&&(l=Ea,l!==null)))throw l;e.memoizedState=i,e.baseState=c,e.baseQueue=v,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Oc(e){var t=Le(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ht(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Ls(e,t,l){var a=ae,n=Le(),i=me;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=t();var c=!ht((Ee||n).memoizedState,l);if(c&&(n.memoizedState=l,Xe=!0),n=n.queue,Mc(qs.bind(null,a,n,e),[e]),n.getSnapshot!==t||c||Ge!==null&&Ge.memoizedState.tag&1){if(a.flags|=2048,Ca(9,{destroy:void 0},Ys.bind(null,a,n,l,t),null),Te===null)throw Error(r(349));i||(It&127)!==0||Bs(a,t,l)}return l}function Bs(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ae.updateQueue,t===null?(t=Ti(),ae.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Ys(e,t,l,a){t.value=l,t.getSnapshot=a,Gs(t)&&Xs(e)}function qs(e,t,l){return l(function(){Gs(t)&&Xs(e)})}function Gs(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ht(e,l)}catch{return!0}}function Xs(e){var t=Xl(e,2);t!==null&&ft(t,e,2)}function wc(e){var t=nt();if(typeof e=="function"){var l=e;if(e=l(),Fl){sl(!0);try{l()}finally{sl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Qs(e,t,l,a){return e.baseState=l,_c(e,Ee,typeof a=="function"?a:Pt)}function Sh(e,t,l,a,n){if(_i(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,ks(t,i)):(i.next=l.next,t.pending=l.next=i)}}function ks(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=M.T,c={};M.T=c;try{var f=l(n,a),v=M.S;v!==null&&v(c,f),Zs(e,t,f)}catch(A){Dc(e,t,A)}finally{i!==null&&c.types!==null&&(i.types=c.types),M.T=i}}else try{i=l(n,a),Zs(e,t,i)}catch(A){Dc(e,t,A)}}function Zs(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Vs(e,t,a)},function(a){return Dc(e,t,a)}):Vs(e,t,l)}function Vs(e,t,l){t.status="fulfilled",t.value=l,Js(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,ks(e,l)))}function Dc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Js(t),t=t.next;while(t!==a)}e.action=null}function Js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ks(e,t){return t}function $s(e,t){if(me){var l=Te.formState;if(l!==null){e:{var a=ae;if(me){if(Ne){t:{for(var n=Ne,i=Rt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Ot(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ne=Ot(n.nextSibling),a=n.data==="F!";break e}}hl(a)}a=!1}a&&(t=l[0])}}return l=nt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:t},l.queue=a,l=hf.bind(null,ae,a),a.dispatch=l,a=wc(!1),i=Yc.bind(null,ae,!1,a.queue),a=nt(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Sh.bind(null,ae,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Ws(e){var t=Le();return Fs(t,Ee,e)}function Fs(e,t,l){if(t=_c(e,t,Ks)[0],e=Ai(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=gn(t)}catch(c){throw c===za?gi:c}else a=t;t=Le();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(ae.flags|=2048,Ca(9,{destroy:void 0},Eh.bind(null,n,l),null)),[a,i,e]}function Eh(e,t){e.action=t}function Is(e){var t=Le(),l=Ee;if(l!==null)return Fs(t,l,e);Le(),t=t.memoizedState,l=Le();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ca(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Ti(),ae.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Ps(){return Le().memoizedState}function Ci(e,t,l,a){var n=nt();ae.flags|=e,n.memoizedState=Ca(1|t,{destroy:void 0},l,a===void 0?null:a)}function Ri(e,t,l,a){var n=Le();a=a===void 0?null:a;var i=n.memoizedState.inst;Ee!==null&&a!==null&&jc(a,Ee.memoizedState.deps)?n.memoizedState=Ca(t,i,l,a):(ae.flags|=e,n.memoizedState=Ca(1|t,i,l,a))}function ef(e,t){Ci(8390656,8,e,t)}function Mc(e,t){Ri(2048,8,e,t)}function zh(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Ti(),ae.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function tf(e){var t=Le().memoizedState;return zh({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function lf(e,t){return Ri(4,2,e,t)}function af(e,t){return Ri(4,4,e,t)}function nf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uf(e,t,l){l=l!=null?l.concat([e]):null,Ri(4,4,nf.bind(null,t,e),l)}function Uc(){}function cf(e,t){var l=Le();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&jc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function rf(e,t){var l=Le();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&jc(t,a[1]))return a[0];if(a=e(),Fl){sl(!0);try{e()}finally{sl(!1)}}return l.memoizedState=[a,t],a}function Hc(e,t,l){return l===void 0||(It&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=od(),ae.lanes|=e,jl|=e,l)}function of(e,t,l,a){return ht(l,t)?l:Ta.current!==null?(e=Hc(e,l,a),ht(e,t)||(Xe=!0),e):(It&42)===0||(It&1073741824)!==0&&(fe&261930)===0?(Xe=!0,e.memoizedState=l):(e=od(),ae.lanes|=e,jl|=e,t)}function sf(e,t,l,a,n){var i=g.p;g.p=i!==0&&8>i?i:8;var c=M.T,f={};M.T=f,Yc(e,!1,t,l);try{var v=n(),A=M.S;if(A!==null&&A(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var U=yh(v,a);yn(e,t,U,St(e))}else yn(e,t,a,St(e))}catch(Y){yn(e,t,{then:function(){},status:"rejected",reason:Y},St())}finally{g.p=i,c!==null&&f.types!==null&&(c.types=f.types),M.T=c}}function jh(){}function Lc(e,t,l,a){if(e.tag!==5)throw Error(r(476));var n=ff(e).queue;sf(e,n,t,Z,l===null?jh:function(){return df(e),l(a)})}function ff(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:Z},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function df(e){var t=ff(e);t.next===null&&(t=e.alternate.memoizedState),yn(e,t.next.queue,{},St())}function Bc(){return Ie(Un)}function mf(){return Le().memoizedState}function pf(){return Le().memoizedState}function Th(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=St();e=yl(l);var a=bl(t,e,l);a!==null&&(ft(a,t,l),mn(a,t,l)),t={cache:mc()},e.payload=t;return}t=t.return}}function Nh(e,t,l){var a=St();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_i(e)?vf(t,l):(l=lc(e,t,l,a),l!==null&&(ft(l,e,a),gf(l,t,a)))}function hf(e,t,l){var a=St();yn(e,t,l,a)}function yn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(_i(e))vf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,l);if(n.hasEagerState=!0,n.eagerState=f,ht(f,c))return si(e,t,n,0),Te===null&&oi(),!1}catch{}if(l=lc(e,t,n,a),l!==null)return ft(l,e,a),gf(l,t,a),!0}return!1}function Yc(e,t,l,a){if(a={lane:2,revertLane:gr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(e)){if(t)throw Error(r(479))}else t=lc(e,l,a,2),t!==null&&ft(t,e,2)}function _i(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function vf(e,t){Na=zi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function gf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,So(e,l)}}var bn={readContext:Ie,use:Ni,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};bn.useEffectEvent=De;var yf={readContext:Ie,use:Ni,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:ef,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ci(4194308,4,nf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){Ci(4,2,e,t)},useMemo:function(e,t){var l=nt();t=t===void 0?null:t;var a=e();if(Fl){sl(!0);try{e()}finally{sl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=nt();if(l!==void 0){var n=l(t);if(Fl){sl(!0);try{l(t)}finally{sl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Nh.bind(null,ae,e),[a.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=wc(e);var t=e.queue,l=hf.bind(null,ae,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Uc,useDeferredValue:function(e,t){var l=nt();return Hc(l,e,t)},useTransition:function(){var e=wc(!1);return e=sf.bind(null,ae,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ae,n=nt();if(me){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Te===null)throw Error(r(349));(fe&127)!==0||Bs(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,ef(qs.bind(null,a,i,e),[e]),a.flags|=2048,Ca(9,{destroy:void 0},Ys.bind(null,a,i,l,t),null),l},useId:function(){var e=nt(),t=Te.identifierPrefix;if(me){var l=Gt,a=qt;l=(a&~(1<<32-pt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ji++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=bh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Bc,useFormState:$s,useActionState:$s,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Yc.bind(null,ae,!0,l),l.dispatch=t,[e,t]},useMemoCache:Rc,useCacheRefresh:function(){return nt().memoizedState=Th.bind(null,ae)},useEffectEvent:function(e){var t=nt(),l={impl:e};return t.memoizedState=l,function(){if((ye&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},qc={readContext:Ie,use:Ni,useCallback:cf,useContext:Ie,useEffect:Mc,useImperativeHandle:uf,useInsertionEffect:lf,useLayoutEffect:af,useMemo:rf,useReducer:Ai,useRef:Ps,useState:function(){return Ai(Pt)},useDebugValue:Uc,useDeferredValue:function(e,t){var l=Le();return of(l,Ee.memoizedState,e,t)},useTransition:function(){var e=Ai(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Ls,useId:mf,useHostTransitionStatus:Bc,useFormState:Ws,useActionState:Ws,useOptimistic:function(e,t){var l=Le();return Qs(l,Ee,e,t)},useMemoCache:Rc,useCacheRefresh:pf};qc.useEffectEvent=tf;var bf={readContext:Ie,use:Ni,useCallback:cf,useContext:Ie,useEffect:Mc,useImperativeHandle:uf,useInsertionEffect:lf,useLayoutEffect:af,useMemo:rf,useReducer:Oc,useRef:Ps,useState:function(){return Oc(Pt)},useDebugValue:Uc,useDeferredValue:function(e,t){var l=Le();return Ee===null?Hc(l,e,t):of(l,Ee.memoizedState,e,t)},useTransition:function(){var e=Oc(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Ls,useId:mf,useHostTransitionStatus:Bc,useFormState:Is,useActionState:Is,useOptimistic:function(e,t){var l=Le();return Ee!==null?Qs(l,Ee,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Rc,useCacheRefresh:pf};bf.useEffectEvent=tf;function Gc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:z({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Xc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=St(),n=yl(a);n.payload=t,l!=null&&(n.callback=l),t=bl(e,n,a),t!==null&&(ft(t,e,a),mn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=St(),n=yl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=bl(e,n,a),t!==null&&(ft(t,e,a),mn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=St(),a=yl(l);a.tag=2,t!=null&&(a.callback=t),t=bl(e,a,l),t!==null&&(ft(t,e,l),mn(t,e,l))}};function xf(e,t,l,a,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!nn(l,a)||!nn(n,i):!0}function Sf(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Xc.enqueueReplaceState(t,t.state,null)}function Il(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=z({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Ef(e){ri(e)}function zf(e){console.error(e)}function jf(e){ri(e)}function Oi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Tf(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Qc(e,t,l){return l=yl(l),l.tag=3,l.payload={element:null},l.callback=function(){Oi(e,t)},l}function Nf(e){return e=yl(e),e.tag=3,e}function Af(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Tf(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Tf(t,l,a),typeof n!="function"&&(Tl===null?Tl=new Set([this]):Tl.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function Ah(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&xa(t,l,n,!0),l=gt.current,l!==null){switch(l.tag){case 31:case 13:return _t===null?Qi():l.alternate===null&&Me===0&&(Me=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===yi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),pr(e,a,n)),!1;case 22:return l.flags|=65536,a===yi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),pr(e,a,n)),!1}throw Error(r(435,l.tag))}return pr(e,a,n),Qi(),!1}if(me)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==rc&&(e=Error(r(422),{cause:a}),rn(Nt(e,l)))):(a!==rc&&(t=Error(r(423),{cause:a}),rn(Nt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Nt(a,l),n=Qc(e.stateNode,a,n),bc(e,n),Me!==4&&(Me=2)),!1;var i=Error(r(520),{cause:a});if(i=Nt(i,l),An===null?An=[i]:An.push(i),Me!==4&&(Me=2),t===null)return!0;a=Nt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Qc(l.stateNode,a,e),bc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Tl===null||!Tl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Nf(n),Af(n,e,l,a),bc(l,n),!1}l=l.return}while(l!==null);return!1}var kc=Error(r(461)),Xe=!1;function Pe(e,t,l,a){t.child=e===null?_s(t,null,l,a):Wl(t,e.child,l,a)}function Cf(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var c={};for(var f in a)f!=="ref"&&(c[f]=a[f])}else c=a;return Vl(t),a=Tc(e,t,l,c,i,n),f=Nc(),e!==null&&!Xe?(Ac(e,t,n),el(e,t,n)):(me&&f&&uc(t),t.flags|=1,Pe(e,t,a,n),t.child)}function Rf(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!ac(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,_f(e,t,i,a,n)):(e=di(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ic(e,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:nn,l(c,a)&&e.ref===t.ref)return el(e,t,n)}return t.flags|=1,e=Kt(i,a),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(nn(i,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=i,Ic(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,el(e,t,n)}return Zc(e,t,l,a,n)}function Of(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return wf(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,i!==null?i.cachePool:null),i!==null?Ds(t,i):Sc(),Ms(t);else return a=t.lanes=536870912,wf(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(vi(t,i.cachePool),Ds(t,i),Sl(),t.memoizedState=null):(e!==null&&vi(t,null),Sc(),Sl());return Pe(e,t,n,l),t.child}function xn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function wf(e,t,l,a,n){var i=hc();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&vi(t,null),Sc(),Ms(t),e!==null&&xa(e,t,a,!0),t.childLanes=n,null}function wi(e,t){return t=Mi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Df(e,t,l){return Wl(t,e.child,null,l),e=wi(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function Ch(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(a.mode==="hidden")return e=wi(t,a),t.lanes=536870912,xn(null,e);if(zc(t),(e=Ne)?(e=Zd(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ml!==null?{id:qt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},l=hs(e),l.return=t,t.child=l,Fe=t,Ne=null)):e=null,e===null)throw hl(t);return t.lanes=536870912,null}return wi(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(zc(t),n)if(t.flags&256)t.flags&=-257,t=Df(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Xe||xa(e,t,l,!1),n=(l&e.childLanes)!==0,Xe||n){if(a=Te,a!==null&&(c=Eo(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,Xl(e,c),ft(a,e,c),kc;Qi(),t=Df(e,t,l)}else e=i.treeContext,Ne=Ot(c.nextSibling),Fe=t,me=!0,pl=null,Rt=!1,e!==null&&ys(t,e),t=wi(t,a),t.flags|=4096;return t}return e=Kt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Zc(e,t,l,a,n){return Vl(t),l=Tc(e,t,l,a,void 0,n),a=Nc(),e!==null&&!Xe?(Ac(e,t,n),el(e,t,n)):(me&&a&&uc(t),t.flags|=1,Pe(e,t,l,n),t.child)}function Mf(e,t,l,a,n,i){return Vl(t),t.updateQueue=null,l=Hs(t,a,l,n),Us(e),a=Nc(),e!==null&&!Xe?(Ac(e,t,i),el(e,t,i)):(me&&a&&uc(t),t.flags|=1,Pe(e,t,l,i),t.child)}function Uf(e,t,l,a,n){if(Vl(t),t.stateNode===null){var i=va,c=l.contextType;typeof c=="object"&&c!==null&&(i=Ie(c)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},gc(t),c=l.contextType,i.context=typeof c=="object"&&c!==null?Ie(c):va,i.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(Gc(t,l,c,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Xc.enqueueReplaceState(i,i.state,null),hn(t,a,i,n),pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,v=Il(l,f);i.props=v;var A=i.context,U=l.contextType;c=va,typeof U=="object"&&U!==null&&(c=Ie(U));var Y=l.getDerivedStateFromProps;U=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||A!==c)&&Sf(t,i,a,c),gl=!1;var R=t.memoizedState;i.state=R,hn(t,a,i,n),pn(),A=t.memoizedState,f||R!==A||gl?(typeof Y=="function"&&(Gc(t,l,Y,a),A=t.memoizedState),(v=gl||xf(t,l,v,a,R,A,c))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=c,a=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,yc(e,t),c=t.memoizedProps,U=Il(l,c),i.props=U,Y=t.pendingProps,R=i.context,A=l.contextType,v=va,typeof A=="object"&&A!==null&&(v=Ie(A)),f=l.getDerivedStateFromProps,(A=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==Y||R!==v)&&Sf(t,i,a,v),gl=!1,R=t.memoizedState,i.state=R,hn(t,a,i,n),pn();var O=t.memoizedState;c!==Y||R!==O||gl||e!==null&&e.dependencies!==null&&pi(e.dependencies)?(typeof f=="function"&&(Gc(t,l,f,a),O=t.memoizedState),(U=gl||xf(t,l,U,a,R,O,v)||e!==null&&e.dependencies!==null&&pi(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,O,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,O,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),i.props=a,i.state=O,i.context=v,a=U):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Di(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Wl(t,e.child,null,n),t.child=Wl(t,null,l,n)):Pe(e,t,l,n),t.memoizedState=i.state,e=t.child):e=el(e,t,n),e}function Hf(e,t,l,a){return kl(),t.flags|=256,Pe(e,t,l,a),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jc(e){return{baseLanes:e,cachePool:js()}}function Kc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=xt),e}function Lf(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?xl(t):Sl(),(e=Ne)?(e=Zd(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ml!==null?{id:qt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},l=hs(e),l.return=t,t.child=l,Fe=t,Ne=null)):e=null,e===null)throw hl(t);return _r(e)?t.lanes=32:t.lanes=536870912,null}var f=a.children;return a=a.fallback,n?(Sl(),n=t.mode,f=Mi({mode:"hidden",children:f},n),a=Ql(a,n,l,null),f.return=t,a.return=t,f.sibling=a,t.child=f,a=t.child,a.memoizedState=Jc(l),a.childLanes=Kc(e,c,l),t.memoizedState=Vc,xn(null,a)):(xl(t),$c(t,f))}var v=e.memoizedState;if(v!==null&&(f=v.dehydrated,f!==null)){if(i)t.flags&256?(xl(t),t.flags&=-257,t=Wc(e,t,l)):t.memoizedState!==null?(Sl(),t.child=e.child,t.flags|=128,t=null):(Sl(),f=a.fallback,n=t.mode,a=Mi({mode:"visible",children:a.children},n),f=Ql(f,n,l,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,Wl(t,e.child,null,l),a=t.child,a.memoizedState=Jc(l),a.childLanes=Kc(e,c,l),t.memoizedState=Vc,t=xn(null,a));else if(xl(t),_r(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;c=A,a=Error(r(419)),a.stack="",a.digest=c,rn({value:a,source:null,stack:null}),t=Wc(e,t,l)}else if(Xe||xa(e,t,l,!1),c=(l&e.childLanes)!==0,Xe||c){if(c=Te,c!==null&&(a=Eo(c,l),a!==0&&a!==v.retryLane))throw v.retryLane=a,Xl(e,a),ft(c,e,a),kc;Rr(f)||Qi(),t=Wc(e,t,l)}else Rr(f)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ne=Ot(f.nextSibling),Fe=t,me=!0,pl=null,Rt=!1,e!==null&&ys(t,e),t=$c(t,a.children),t.flags|=4096);return t}return n?(Sl(),f=a.fallback,n=t.mode,v=e.child,A=v.sibling,a=Kt(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,A!==null?f=Kt(A,f):(f=Ql(f,n,l,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,xn(null,a),a=t.child,f=e.child.memoizedState,f===null?f=Jc(l):(n=f.cachePool,n!==null?(v=qe._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=js(),f={baseLanes:f.baseLanes|l,cachePool:n}),a.memoizedState=f,a.childLanes=Kc(e,c,l),t.memoizedState=Vc,xn(e.child,a)):(xl(t),l=e.child,e=l.sibling,l=Kt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function $c(e,t){return t=Mi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Mi(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function Wc(e,t,l){return Wl(t,e.child,null,l),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),fc(e.return,t,l)}function Fc(e,t,l,a,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=i)}function Yf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var c=He.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,V(He,c),Pe(e,t,a,l),a=me?cn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bf(e,l,t);else if(e.tag===19)Bf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Ei(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Fc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Fc(t,!0,l,null,i,a);break;case"together":Fc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),jl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(xa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Kt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Kt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Ic(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pi(e)))}function Rh(e,t,l){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),vl(t,qe,e.memoizedState.cache),kl();break;case 27:case 5:Za(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:vl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,zc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(xl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Lf(e,t,l):(xl(t),e=el(e,t,l),e!==null?e.sibling:null);xl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(xa(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Yf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),V(He,He.current),a)break;return null;case 22:return t.lanes=0,Of(e,t,l,t.pendingProps);case 24:vl(t,qe,e.memoizedState.cache)}return el(e,t,l)}function qf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Ic(e,l)&&(t.flags&128)===0)return Xe=!1,Rh(e,t,l);Xe=(e.flags&131072)!==0}else Xe=!1,me&&(t.flags&1048576)!==0&&gs(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Kl(t.elementType),t.type=e,typeof e=="function")ac(e)?(a=Il(e,a),t.tag=1,t=Uf(null,t,e,a,l)):(t.tag=0,t=Zc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===F){t.tag=11,t=Cf(null,t,e,a,l);break e}else if(n===G){t.tag=14,t=Rf(null,t,e,a,l);break e}}throw t=Ye(e)||e,Error(r(306,t,""))}}return t;case 0:return Zc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Il(a,t.pendingProps),Uf(e,t,a,n,l);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,yc(e,t),hn(t,a,null,l);var c=t.memoizedState;if(a=c.cache,vl(t,qe,a),a!==i.cache&&dc(t,[qe],l,!0),pn(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Hf(e,t,a,l);break e}else if(a!==n){n=Nt(Error(r(424)),t),rn(n),t=Hf(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=Ot(e.firstChild),Fe=t,me=!0,pl=null,Rt=!0,l=_s(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(kl(),a===n){t=el(e,t,l);break e}Pe(e,t,a,l)}t=t.child}return t;case 26:return Di(e,t),e===null?(l=Fd(t.type,null,t.pendingProps,null))?t.memoizedState=l:me||(l=t.type,e=t.pendingProps,a=Wi(re.current).createElement(l),a[We]=t,a[it]=e,et(a,l,e),Ve(a),t.stateNode=a):t.memoizedState=Fd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Za(t),e===null&&me&&(a=t.stateNode=Kd(t.type,t.pendingProps,re.current),Fe=t,Rt=!0,n=Ne,Rl(t.type)?(Or=n,Ne=Ot(a.firstChild)):Ne=n),Pe(e,t,t.pendingProps.children,l),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=a=Ne)&&(a=iv(a,t.type,t.pendingProps,Rt),a!==null?(t.stateNode=a,Fe=t,Ne=Ot(a.firstChild),Rt=!1,n=!0):n=!1),n||hl(t)),Za(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,Nr(n,i)?a=null:c!==null&&Nr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Tc(e,t,xh,null,null,l),Un._currentValue=n),Di(e,t),Pe(e,t,a,l),t.child;case 6:return e===null&&me&&((e=l=Ne)&&(l=uv(l,t.pendingProps,Rt),l!==null?(t.stateNode=l,Fe=t,Ne=null,e=!0):e=!1),e||hl(t)),null;case 13:return Lf(e,t,l);case 4:return at(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Wl(t,null,a,l):Pe(e,t,a,l),t.child;case 11:return Cf(e,t,t.type,t.pendingProps,l);case 7:return Pe(e,t,t.pendingProps,l),t.child;case 8:return Pe(e,t,t.pendingProps.children,l),t.child;case 12:return Pe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,vl(t,t.type,a.value),Pe(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Vl(t),n=Ie(n),a=a(n),t.flags|=1,Pe(e,t,a,l),t.child;case 14:return Rf(e,t,t.type,t.pendingProps,l);case 15:return _f(e,t,t.type,t.pendingProps,l);case 19:return Yf(e,t,l);case 31:return Ch(e,t,l);case 22:return Of(e,t,l,t.pendingProps);case 24:return Vl(t),a=Ie(qe),e===null?(n=hc(),n===null&&(n=Te,i=mc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},gc(t),vl(t,qe,n)):((e.lanes&l)!==0&&(yc(e,t),hn(t,null,null,l),pn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),vl(t,qe,a)):(a=i.cache,vl(t,qe,a),a!==n.cache&&dc(t,[qe],l,!0))),Pe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function tl(e){e.flags|=4}function Pc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(md())e.flags|=8192;else throw $l=yi,vc}else e.flags&=-16777217}function Gf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lm(t))if(md())e.flags|=8192;else throw $l=yi,vc}function Ui(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bo():536870912,e.lanes|=t,wa|=t)}function Sn(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function _h(e,t,l){var a=t.pendingProps;switch(cc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(qe),Ue(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ba(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,oc())),Ae(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(tl(t),i!==null?(Ae(t),Gf(t,i)):(Ae(t),Pc(t,n,null,a,l))):i?i!==e.memoizedState?(tl(t),Ae(t),Gf(t,i)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&tl(t),Ae(t),Pc(t,n,e,a,l)),null;case 27:if(Vn(t),l=re.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ae(t),null}e=K.current,ba(t)?bs(t):(e=Kd(n,a,l),t.stateNode=e,tl(t))}return Ae(t),null;case 5:if(Vn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return Ae(t),null}if(i=K.current,ba(t))bs(t);else{var c=Wi(re.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}i[We]=t,i[it]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(et(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&tl(t)}}return Ae(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&tl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=re.current,ba(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Ld(e.nodeValue,l)),e||hl(t,!0)}else e=Wi(e).createTextNode(a),e[We]=t,t.stateNode=e}return Ae(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ba(t),l!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[We]=t}else kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else l=oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Ae(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ba(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[We]=t}else kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),n=!1}else n=oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ui(t,t.updateQueue),Ae(t),null);case 4:return Ue(),e===null&&Sr(t.stateNode.containerInfo),Ae(t),null;case 10:return Ft(t.type),Ae(t),null;case 19:if(q(He),a=t.memoizedState,a===null)return Ae(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Sn(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,Sn(a,!1),e=i.updateQueue,t.updateQueue=e,Ui(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)ps(l,e),l=l.sibling;return V(He,He.current&1|2),me&&$t(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&dt()>qi&&(t.flags|=128,n=!0,Sn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ui(t,e),Sn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!me)return Ae(t),null}else 2*dt()-a.renderingStartTime>qi&&l!==536870912&&(t.flags|=128,n=!0,Sn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=dt(),e.sibling=null,l=He.current,V(He,n?l&1|2:l&1),me&&$t(t,a.treeForkCount),e):(Ae(t),null);case 22:case 23:return yt(t),Ec(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),l=t.updateQueue,l!==null&&Ui(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&q(Jl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(qe),Ae(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Oh(e,t){switch(cc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(qe),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Vn(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(r(340));kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(He),null;case 4:return Ue(),null;case 10:return Ft(t.type),null;case 22:case 23:return yt(t),Ec(),e!==null&&q(Jl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(qe),null;case 25:return null;default:return null}}function Xf(e,t){switch(cc(t),t.tag){case 3:Ft(qe),Ue();break;case 26:case 27:case 5:Vn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:q(He);break;case 10:Ft(t.type);break;case 22:case 23:yt(t),Ec(),e!==null&&q(Jl);break;case 24:Ft(qe)}}function En(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(f){Se(t,t.return,f)}}function El(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var c=a.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var v=l,A=f;try{A()}catch(U){Se(n,v,U)}}}a=a.next}while(a!==i)}}catch(U){Se(t,t.return,U)}}function Qf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{ws(t,l)}catch(a){Se(e,e.return,a)}}}function kf(e,t,l){l.props=Il(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Se(e,t,a)}}function zn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Se(e,t,n)}}function Xt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Se(e,t,n)}else l.current=null}function Zf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Se(e,e.return,n)}}function er(e,t,l){try{var a=e.stateNode;Ph(a,e.type,l,t),a[it]=t}catch(n){Se(e,e.return,n)}}function Vf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rl(e.type)||e.tag===4}function tr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Vt));else if(a!==4&&(a===27&&Rl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(lr(e,t,l),e=e.sibling;e!==null;)lr(e,t,l),e=e.sibling}function Hi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Rl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Hi(e,t,l),e=e.sibling;e!==null;)Hi(e,t,l),e=e.sibling}function Jf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,a,l),t[We]=e,t[it]=l}catch(i){Se(e,e.return,i)}}var ll=!1,Qe=!1,ar=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,Je=null;function wh(e,t){if(e=e.containerInfo,jr=au,e=is(e),Wu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var c=0,f=-1,v=-1,A=0,U=0,Y=e,R=null;t:for(;;){for(var O;Y!==l||n!==0&&Y.nodeType!==3||(f=c+n),Y!==i||a!==0&&Y.nodeType!==3||(v=c+a),Y.nodeType===3&&(c+=Y.nodeValue.length),(O=Y.firstChild)!==null;)R=Y,Y=O;for(;;){if(Y===e)break t;if(R===l&&++A===n&&(f=c),R===i&&++U===a&&(v=c),(O=Y.nextSibling)!==null)break;Y=R,R=Y.parentNode}Y=O}l=f===-1||v===-1?null:{start:f,end:v}}else l=null}l=l||{start:0,end:0}}else l=null;for(Tr={focusedElem:e,selectionRange:l},au=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var $=Il(l.type,n);e=a.getSnapshotBeforeUpdate($,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(P){Se(l,l.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Cr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function $f(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:nl(e,l),a&4&&En(5,l);break;case 1:if(nl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){Se(l,l.return,c)}else{var n=Il(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Se(l,l.return,c)}}a&64&&Qf(l),a&512&&zn(l,l.return);break;case 3:if(nl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{ws(e,t)}catch(c){Se(l,l.return,c)}}break;case 27:t===null&&a&4&&Jf(l);case 26:case 5:nl(e,l),t===null&&a&4&&Zf(l),a&512&&zn(l,l.return);break;case 12:nl(e,l);break;case 31:nl(e,l),a&4&&If(e,l);break;case 13:nl(e,l),a&4&&Pf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Gh.bind(null,l),cv(e,l))));break;case 22:if(a=l.memoizedState!==null||ll,!a){t=t!==null&&t.memoizedState!==null||Qe,n=ll;var i=Qe;ll=a,(Qe=t)&&!i?il(e,l,(l.subtreeFlags&8772)!==0):nl(e,l),ll=n,Qe=i}break;case 30:break;default:nl(e,l)}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Du(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ct=!1;function al(e,t,l){for(l=l.child;l!==null;)Ff(e,t,l),l=l.sibling}function Ff(e,t,l){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Va,l)}catch{}switch(l.tag){case 26:Qe||Xt(l,t),al(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Qe||Xt(l,t);var a=Oe,n=ct;Rl(l.type)&&(Oe=l.stateNode,ct=!1),al(e,t,l),wn(l.stateNode),Oe=a,ct=n;break;case 5:Qe||Xt(l,t);case 6:if(a=Oe,n=ct,Oe=null,al(e,t,l),Oe=a,ct=n,Oe!==null)if(ct)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(l.stateNode)}catch(i){Se(l,t,i)}else try{Oe.removeChild(l.stateNode)}catch(i){Se(l,t,i)}break;case 18:Oe!==null&&(ct?(e=Oe,Qd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),qa(e)):Qd(Oe,l.stateNode));break;case 4:a=Oe,n=ct,Oe=l.stateNode.containerInfo,ct=!0,al(e,t,l),Oe=a,ct=n;break;case 0:case 11:case 14:case 15:El(2,l,t),Qe||El(4,l,t),al(e,t,l);break;case 1:Qe||(Xt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&kf(l,t,a)),al(e,t,l);break;case 21:al(e,t,l);break;case 22:Qe=(a=Qe)||l.memoizedState!==null,al(e,t,l),Qe=a;break;default:al(e,t,l)}}function If(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qa(e)}catch(l){Se(t,t.return,l)}}}function Pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qa(e)}catch(l){Se(t,t.return,l)}}function Dh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kf),t;default:throw Error(r(435,e.tag))}}function Li(e,t){var l=Dh(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Xh.bind(null,e,a);a.then(n,n)}})}function rt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Rl(f.type)){Oe=f.stateNode,ct=!1;break e}break;case 5:Oe=f.stateNode,ct=!1;break e;case 3:case 4:Oe=f.stateNode.containerInfo,ct=!0;break e}f=f.return}if(Oe===null)throw Error(r(160));Ff(i,c,n),Oe=null,ct=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ed(t,e),t=t.sibling}var Ut=null;function ed(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ot(e),a&4&&(El(3,e,e.return),En(3,e),El(5,e,e.return));break;case 1:rt(t,e),ot(e),a&512&&(Qe||l===null||Xt(l,l.return)),a&64&&ll&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ut;if(rt(t,e),ot(e),a&512&&(Qe||l===null||Xt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[$a]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),et(i,a,l),i[We]=e,Ve(i),a=i;break e;case"link":var c=em("link","href",n).get(a+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(a),et(i,a,l),n.head.appendChild(i);break;case"meta":if(c=em("meta","content",n).get(a+(l.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break t}}i=n.createElement(a),et(i,a,l),n.head.appendChild(i);break;default:throw Error(r(468,a))}i[We]=e,Ve(i),a=i}e.stateNode=a}else tm(n,e.type,e.stateNode);else e.stateNode=Pd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?tm(n,e.type,e.stateNode):Pd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&er(e,e.memoizedProps,l.memoizedProps)}break;case 27:rt(t,e),ot(e),a&512&&(Qe||l===null||Xt(l,l.return)),l!==null&&a&4&&er(e,e.memoizedProps,l.memoizedProps);break;case 5:if(rt(t,e),ot(e),a&512&&(Qe||l===null||Xt(l,l.return)),e.flags&32){n=e.stateNode;try{oa(n,"")}catch($){Se(e,e.return,$)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,er(e,n,l!==null?l.memoizedProps:n)),a&1024&&(ar=!0);break;case 6:if(rt(t,e),ot(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch($){Se(e,e.return,$)}}break;case 3:if(Pi=null,n=Ut,Ut=Fi(t.containerInfo),rt(t,e),Ut=n,ot(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{qa(t.containerInfo)}catch($){Se(e,e.return,$)}ar&&(ar=!1,td(e));break;case 4:a=Ut,Ut=Fi(e.stateNode.containerInfo),rt(t,e),ot(e),Ut=a;break;case 12:rt(t,e),ot(e);break;case 31:rt(t,e),ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 13:rt(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Yi=dt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 22:n=e.memoizedState!==null;var v=l!==null&&l.memoizedState!==null,A=ll,U=Qe;if(ll=A||n,Qe=U||v,rt(t,e),Qe=U,ll=A,ot(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||v||ll||Qe||Pl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){v=l=t;try{if(i=v.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=v.stateNode;var Y=v.memoizedProps.style,R=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;f.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch($){Se(v,v.return,$)}}}else if(t.tag===6){if(l===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch($){Se(v,v.return,$)}}}else if(t.tag===18){if(l===null){v=t;try{var O=v.stateNode;n?kd(O,!0):kd(v.stateNode,!1)}catch($){Se(v,v.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Li(e,l))));break;case 19:rt(t,e),ot(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 30:break;case 21:break;default:rt(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Vf(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,i=tr(e);Hi(e,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(oa(c,""),l.flags&=-33);var f=tr(e);Hi(e,f,c);break;case 3:case 4:var v=l.stateNode.containerInfo,A=tr(e);lr(e,A,v);break;default:throw Error(r(161))}}catch(U){Se(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function td(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;td(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$f(e,t.alternate,t),t=t.sibling}function Pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:El(4,t,t.return),Pl(t);break;case 1:Xt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&kf(t,t.return,l),Pl(t);break;case 27:wn(t.stateNode);case 26:case 5:Xt(t,t.return),Pl(t);break;case 22:t.memoizedState===null&&Pl(t);break;case 30:Pl(t);break;default:Pl(t)}e=e.sibling}}function il(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:il(n,i,l),En(4,i);break;case 1:if(il(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(A){Se(a,a.return,A)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Os(v[n],f)}catch(A){Se(a,a.return,A)}}l&&c&64&&Qf(i),zn(i,i.return);break;case 27:Jf(i);case 26:case 5:il(n,i,l),l&&a===null&&c&4&&Zf(i),zn(i,i.return);break;case 12:il(n,i,l);break;case 31:il(n,i,l),l&&c&4&&If(n,i);break;case 13:il(n,i,l),l&&c&4&&Pf(n,i);break;case 22:i.memoizedState===null&&il(n,i,l),zn(i,i.return);break;case 30:break;default:il(n,i,l)}t=t.sibling}}function nr(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&on(l))}function ir(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e))}function Ht(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ld(e,t,l,a),t=t.sibling}function ld(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,l,a),n&2048&&En(9,t);break;case 1:Ht(e,t,l,a);break;case 3:Ht(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e)));break;case 12:if(n&2048){Ht(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Se(t,t.return,v)}}else Ht(e,t,l,a);break;case 31:Ht(e,t,l,a);break;case 13:Ht(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(e,t,l,a):jn(e,t):i._visibility&2?Ht(e,t,l,a):(i._visibility|=2,Ra(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&nr(c,t);break;case 24:Ht(e,t,l,a),n&2048&&ir(t.alternate,t);break;default:Ht(e,t,l,a)}}function Ra(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,f=l,v=a,A=c.flags;switch(c.tag){case 0:case 11:case 15:Ra(i,c,f,v,n),En(8,c);break;case 23:break;case 22:var U=c.stateNode;c.memoizedState!==null?U._visibility&2?Ra(i,c,f,v,n):jn(i,c):(U._visibility|=2,Ra(i,c,f,v,n)),n&&A&2048&&nr(c.alternate,c);break;case 24:Ra(i,c,f,v,n),n&&A&2048&&ir(c.alternate,c);break;default:Ra(i,c,f,v,n)}t=t.sibling}}function jn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:jn(l,a),n&2048&&nr(a.alternate,a);break;case 24:jn(l,a),n&2048&&ir(a.alternate,a);break;default:jn(l,a)}t=t.sibling}}var Tn=8192;function _a(e,t,l){if(e.subtreeFlags&Tn)for(e=e.child;e!==null;)ad(e,t,l),e=e.sibling}function ad(e,t,l){switch(e.tag){case 26:_a(e,t,l),e.flags&Tn&&e.memoizedState!==null&&bv(l,Ut,e.memoizedState,e.memoizedProps);break;case 5:_a(e,t,l);break;case 3:case 4:var a=Ut;Ut=Fi(e.stateNode.containerInfo),_a(e,t,l),Ut=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Tn,Tn=16777216,_a(e,t,l),Tn=a):_a(e,t,l));break;default:_a(e,t,l)}}function nd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Je=a,ud(a,e)}nd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)id(e),e=e.sibling}function id(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&El(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):Nn(e);break;default:Nn(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Je=a,ud(a,e)}nd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:El(8,t,t.return),Bi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function ud(e,t){for(;Je!==null;){var l=Je;switch(l.tag){case 0:case 11:case 15:El(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:on(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Je=a;else e:for(l=e;Je!==null;){a=Je;var n=a.sibling,i=a.return;if(Wf(a),a===l){Je=null;break e}if(n!==null){n.return=i,Je=n;break e}Je=i}}}var Mh={getCacheForType:function(e){var t=Ie(qe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ie(qe).controller.signal}},Uh=typeof WeakMap=="function"?WeakMap:Map,ye=0,Te=null,oe=null,fe=0,xe=0,bt=null,zl=!1,Oa=!1,ur=!1,ul=0,Me=0,jl=0,ea=0,cr=0,xt=0,wa=0,An=null,st=null,rr=!1,Yi=0,cd=0,qi=1/0,Gi=null,Tl=null,ke=0,Nl=null,Da=null,cl=0,or=0,sr=null,rd=null,Cn=0,fr=null;function St(){return(ye&2)!==0&&fe!==0?fe&-fe:M.T!==null?gr():zo()}function od(){if(xt===0)if((fe&536870912)===0||me){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),xt=e}else xt=536870912;return e=gt.current,e!==null&&(e.flags|=32),xt}function ft(e,t,l){(e===Te&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),Al(e,fe,xt,!1)),Ka(e,l),((ye&2)===0||e!==Te)&&(e===Te&&((ye&2)===0&&(ea|=l),Me===4&&Al(e,fe,xt,!1)),Qt(e))}function sd(e,t,l){if((ye&6)!==0)throw Error(r(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ja(e,t),n=a?Bh(e,t):mr(e,t,!0),i=a;do{if(n===0){Oa&&!a&&Al(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Hh(l)){n=mr(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=An;var v=f.current.memoizedState.isDehydrated;if(v&&(Ma(f,c).flags|=256),c=mr(f,c,!1),c!==2){if(ur&&!v){f.errorRecoveryDisabledLanes|=i,ea|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Ma(e,0),Al(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Al(a,t,xt,!zl);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=Yi+300-dt(),10<n)){if(Al(a,t,xt,!zl),Fn(a,0,!0)!==0)break e;cl=t,a.timeoutHandle=Gd(fd.bind(null,a,l,st,Gi,rr,t,xt,ea,wa,zl,i,"Throttled",-0,0),n);break e}fd(a,l,st,Gi,rr,t,xt,ea,wa,zl,i,null,-0,0)}}break}while(!0);Qt(e)}function fd(e,t,l,a,n,i,c,f,v,A,U,Y,R,O){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},ad(t,i,Y);var $=(i&62914560)===i?Yi-dt():(i&4194048)===i?cd-dt():0;if($=xv(Y,$),$!==null){cl=i,e.cancelPendingCommit=$(bd.bind(null,e,t,i,l,a,n,c,f,v,U,Y,null,R,O)),Al(e,i,c,!A);return}}bd(e,t,i,l,a,n,c,f,v)}function Hh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Al(e,t,l,a){t&=~cr,t&=~ea,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&xo(e,l,t)}function Xi(){return(ye&6)===0?(Rn(0),!1):!0}function dr(){if(oe!==null){if(xe===0)var e=oe.return;else e=oe,Wt=Zl=null,Cc(e),ja=null,fn=0,e=oe;for(;e!==null;)Xf(e.alternate,e),e=e.return;oe=null}}function Ma(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,lv(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),cl=0,dr(),Te=e,oe=l=Kt(e.current,null),fe=t,xe=0,bt=null,zl=!1,Oa=Ja(e,t),ur=!1,wa=xt=cr=ea=jl=Me=0,st=An=null,rr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-pt(a),i=1<<n;t|=e[n],a&=~i}return ul=t,oi(),l}function dd(e,t){ae=null,M.H=bn,t===za||t===gi?(t=As(),xe=3):t===vc?(t=As(),xe=4):xe=t===kc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,oe===null&&(Me=1,Oi(e,Nt(t,e.current)))}function md(){var e=gt.current;return e===null?!0:(fe&4194048)===fe?_t===null:(fe&62914560)===fe||(fe&536870912)!==0?e===_t:!1}function pd(){var e=M.H;return M.H=bn,e===null?bn:e}function hd(){var e=M.A;return M.A=Mh,e}function Qi(){Me=4,zl||(fe&4194048)!==fe&&gt.current!==null||(Oa=!0),(jl&134217727)===0&&(ea&134217727)===0||Te===null||Al(Te,fe,xt,!1)}function mr(e,t,l){var a=ye;ye|=2;var n=pd(),i=hd();(Te!==e||fe!==t)&&(Gi=null,Ma(e,t)),t=!1;var c=Me;e:do try{if(xe!==0&&oe!==null){var f=oe,v=bt;switch(xe){case 8:dr(),c=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var A=xe;if(xe=0,bt=null,Ua(e,f,v,A),l&&Oa){c=0;break e}break;default:A=xe,xe=0,bt=null,Ua(e,f,v,A)}}Lh(),c=Me;break}catch(U){dd(e,U)}while(!0);return t&&e.shellSuspendCounter++,Wt=Zl=null,ye=a,M.H=n,M.A=i,oe===null&&(Te=null,fe=0,oi()),c}function Lh(){for(;oe!==null;)vd(oe)}function Bh(e,t){var l=ye;ye|=2;var a=pd(),n=hd();Te!==e||fe!==t?(Gi=null,qi=dt()+500,Ma(e,t)):Oa=Ja(e,t);e:do try{if(xe!==0&&oe!==null){t=oe;var i=bt;t:switch(xe){case 1:xe=0,bt=null,Ua(e,t,i,1);break;case 2:case 9:if(Ts(i)){xe=0,bt=null,gd(t);break}t=function(){xe!==2&&xe!==9||Te!==e||(xe=7),Qt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Ts(i)?(xe=0,bt=null,gd(t)):(xe=0,bt=null,Ua(e,t,i,7));break;case 5:var c=null;switch(oe.tag){case 26:c=oe.memoizedState;case 5:case 27:var f=oe;if(c?lm(c):f.stateNode.complete){xe=0,bt=null;var v=f.sibling;if(v!==null)oe=v;else{var A=f.return;A!==null?(oe=A,ki(A)):oe=null}break t}}xe=0,bt=null,Ua(e,t,i,5);break;case 6:xe=0,bt=null,Ua(e,t,i,6);break;case 8:dr(),Me=6;break e;default:throw Error(r(462))}}Yh();break}catch(U){dd(e,U)}while(!0);return Wt=Zl=null,M.H=a,M.A=n,ye=l,oe!==null?0:(Te=null,fe=0,oi(),Me)}function Yh(){for(;oe!==null&&!rp();)vd(oe)}function vd(e){var t=qf(e.alternate,e,ul);e.memoizedProps=e.pendingProps,t===null?ki(e):oe=t}function gd(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Mf(l,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=Mf(l,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:Cc(t);default:Xf(l,t),t=oe=ps(t,ul),t=qf(l,t,ul)}e.memoizedProps=e.pendingProps,t===null?ki(e):oe=t}function Ua(e,t,l,a){Wt=Zl=null,Cc(t),ja=null,fn=0;var n=t.return;try{if(Ah(e,n,t,l,fe)){Me=1,Oi(e,Nt(l,e.current)),oe=null;return}}catch(i){if(n!==null)throw oe=n,i;Me=1,Oi(e,Nt(l,e.current)),oe=null;return}t.flags&32768?(me||a===1?e=!0:Oa||(fe&536870912)!==0?e=!1:(zl=e=!0,(a===2||a===9||a===3||a===6)&&(a=gt.current,a!==null&&a.tag===13&&(a.flags|=16384))),yd(t,e)):ki(t)}function ki(e){var t=e;do{if((t.flags&32768)!==0){yd(t,zl);return}e=t.return;var l=_h(t.alternate,t,ul);if(l!==null){oe=l;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);Me===0&&(Me=5)}function yd(e,t){do{var l=Oh(e.alternate,e);if(l!==null){l.flags&=32767,oe=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=l}while(e!==null);Me=6,oe=null}function bd(e,t,l,a,n,i,c,f,v){e.cancelPendingCommit=null;do Zi();while(ke!==0);if((ye&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=tc,yp(e,l,i,c,f,v),e===Te&&(oe=Te=null,fe=0),Da=t,Nl=e,cl=l,or=i,sr=n,rd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qh(Jn,function(){return jd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,n=g.p,g.p=2,c=ye,ye|=4;try{wh(e,t,l)}finally{ye=c,g.p=n,M.T=a}}ke=1,xd(),Sd(),Ed()}}function xd(){if(ke===1){ke=0;var e=Nl,t=Da,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var a=g.p;g.p=2;var n=ye;ye|=4;try{ed(t,e);var i=Tr,c=is(e.containerInfo),f=i.focusedElem,v=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&ns(f.ownerDocument.documentElement,f)){if(v!==null&&Wu(f)){var A=v.start,U=v.end;if(U===void 0&&(U=A),"selectionStart"in f)f.selectionStart=A,f.selectionEnd=Math.min(U,f.value.length);else{var Y=f.ownerDocument||document,R=Y&&Y.defaultView||window;if(R.getSelection){var O=R.getSelection(),$=f.textContent.length,P=Math.min(v.start,$),je=v.end===void 0?P:Math.min(v.end,$);!O.extend&&P>je&&(c=je,je=P,P=c);var j=as(f,P),b=as(f,je);if(j&&b&&(O.rangeCount!==1||O.anchorNode!==j.node||O.anchorOffset!==j.offset||O.focusNode!==b.node||O.focusOffset!==b.offset)){var N=Y.createRange();N.setStart(j.node,j.offset),O.removeAllRanges(),P>je?(O.addRange(N),O.extend(b.node,b.offset)):(N.setEnd(b.node,b.offset),O.addRange(N))}}}}for(Y=[],O=f;O=O.parentNode;)O.nodeType===1&&Y.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<Y.length;f++){var L=Y[f];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}au=!!jr,Tr=jr=null}finally{ye=n,g.p=a,M.T=l}}e.current=t,ke=2}}function Sd(){if(ke===2){ke=0;var e=Nl,t=Da,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var a=g.p;g.p=2;var n=ye;ye|=4;try{$f(e,t.alternate,t)}finally{ye=n,g.p=a,M.T=l}}ke=3}}function Ed(){if(ke===4||ke===3){ke=0,op();var e=Nl,t=Da,l=cl,a=rd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,Da=Nl=null,zd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Tl=null),Ou(l),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Va,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,n=g.p,g.p=2,M.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var f=a[c];i(f.value,{componentStack:f.stack})}}finally{M.T=t,g.p=n}}(cl&3)!==0&&Zi(),Qt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===fr?Cn++:(Cn=0,fr=e):Cn=0,Rn(0)}}function zd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,on(t)))}function Zi(){return xd(),Sd(),Ed(),jd()}function jd(){if(ke!==5)return!1;var e=Nl,t=or;or=0;var l=Ou(cl),a=M.T,n=g.p;try{g.p=32>l?32:l,M.T=null,l=sr,sr=null;var i=Nl,c=cl;if(ke=0,Da=Nl=null,cl=0,(ye&6)!==0)throw Error(r(331));var f=ye;if(ye|=4,id(i.current),ld(i,i.current,c,l),ye=f,Rn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Va,i)}catch{}return!0}finally{g.p=n,M.T=a,zd(e,t)}}function Td(e,t,l){t=Nt(l,t),t=Qc(e.stateNode,t,2),e=bl(e,t,2),e!==null&&(Ka(e,2),Qt(e))}function Se(e,t,l){if(e.tag===3)Td(e,e,l);else for(;t!==null;){if(t.tag===3){Td(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tl===null||!Tl.has(a))){e=Nt(l,e),l=Nf(2),a=bl(t,l,2),a!==null&&(Af(l,a,t,e),Ka(a,2),Qt(a));break}}t=t.return}}function pr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Uh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(ur=!0,n.add(l),e=qh.bind(null,e,t,l),t.then(e,e))}function qh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Te===e&&(fe&l)===l&&(Me===4||Me===3&&(fe&62914560)===fe&&300>dt()-Yi?(ye&2)===0&&Ma(e,0):cr|=l,wa===fe&&(wa=0)),Qt(e)}function Nd(e,t){t===0&&(t=bo()),e=Xl(e,t),e!==null&&(Ka(e,t),Qt(e))}function Gh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Nd(e,l)}function Xh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),Nd(e,l)}function Qh(e,t){return Au(e,t)}var Vi=null,Ha=null,hr=!1,Ji=!1,vr=!1,Cl=0;function Qt(e){e!==Ha&&e.next===null&&(Ha===null?Vi=Ha=e:Ha=Ha.next=e),Ji=!0,hr||(hr=!0,Zh())}function Rn(e,t){if(!vr&&Ji){vr=!0;do for(var l=!1,a=Vi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,_d(a,i))}else i=fe,i=Fn(a,a===Te?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ja(a,i)||(l=!0,_d(a,i));a=a.next}while(l);vr=!1}}function kh(){Ad()}function Ad(){Ji=hr=!1;var e=0;Cl!==0&&tv()&&(e=Cl);for(var t=dt(),l=null,a=Vi;a!==null;){var n=a.next,i=Cd(a,t);i===0?(a.next=null,l===null?Vi=n:l.next=n,n===null&&(Ha=l)):(l=a,(e!==0||(i&3)!==0)&&(Ji=!0)),a=n}ke!==0&&ke!==5||Rn(e),Cl!==0&&(Cl=0)}function Cd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-pt(i),f=1<<c,v=n[c];v===-1?((f&l)===0||(f&a)!==0)&&(n[c]=gp(f,t)):v<=t&&(e.expiredLanes|=f),i&=~f}if(t=Te,l=fe,l=Fn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Cu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ja(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Cu(a),Ou(l)){case 2:case 8:l=go;break;case 32:l=Jn;break;case 268435456:l=yo;break;default:l=Jn}return a=Rd.bind(null,e),l=Au(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Cu(a),e.callbackPriority=2,e.callbackNode=null,2}function Rd(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Zi()&&e.callbackNode!==l)return null;var a=fe;return a=Fn(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(sd(e,a,t),Cd(e,dt()),e.callbackNode!=null&&e.callbackNode===l?Rd.bind(null,e):null)}function _d(e,t){if(Zi())return null;sd(e,t,!0)}function Zh(){av(function(){(ye&6)!==0?Au(vo,kh):Ad()})}function gr(){if(Cl===0){var e=Sa;e===0&&(e=Kn,Kn<<=1,(Kn&261888)===0&&(Kn=256)),Cl=e}return Cl}function Od(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function wd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Vh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Od((n[it]||null).action),c=a.submitter;c&&(t=(t=c[it]||null)?Od(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new ii("action","action",null,a,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Cl!==0){var v=c?wd(n,c):new FormData(n);Lc(l,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(f.preventDefault(),v=c?wd(n,c):new FormData(n),Lc(l,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var yr=0;yr<ec.length;yr++){var br=ec[yr],Jh=br.toLowerCase(),Kh=br[0].toUpperCase()+br.slice(1);Mt(Jh,"on"+Kh)}Mt(rs,"onAnimationEnd"),Mt(os,"onAnimationIteration"),Mt(ss,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(sh,"onTransitionRun"),Mt(fh,"onTransitionStart"),Mt(dh,"onTransitionCancel"),Mt(fs,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),Bl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));function Dd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var f=a[c],v=f.instance,A=f.currentTarget;if(f=f.listener,v!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=A;try{i(n)}catch(U){ri(U)}n.currentTarget=null,i=v}else for(c=0;c<a.length;c++){if(f=a[c],v=f.instance,A=f.currentTarget,f=f.listener,v!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=A;try{i(n)}catch(U){ri(U)}n.currentTarget=null,i=v}}}}function se(e,t){var l=t[wu];l===void 0&&(l=t[wu]=new Set);var a=e+"__bubble";l.has(a)||(Md(t,e,2,!1),l.add(a))}function xr(e,t,l){var a=0;t&&(a|=4),Md(l,e,a,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[Ki]){e[Ki]=!0,No.forEach(function(l){l!=="selectionchange"&&($h.has(l)||xr(l,!1,e),xr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,xr("selectionchange",!1,t))}}function Md(e,t,l,a){switch(om(t)){case 2:var n=zv;break;case 8:n=jv;break;default:n=Hr}l=n.bind(null,t,l,e),n=void 0,!Gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Er(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var f=a.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=a.return;c!==null;){var v=c.tag;if((v===3||v===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=na(f),c===null)return;if(v=c.tag,v===5||v===6||v===26||v===27){a=i=c;continue e}f=f.parentNode}}a=a.return}Bo(function(){var A=i,U=Yu(l),Y=[];e:{var R=ds.get(e);if(R!==void 0){var O=ii,$=e;switch(e){case"keypress":if(ai(l)===0)break e;case"keydown":case"keyup":O=Xp;break;case"focusin":$="focus",O=Zu;break;case"focusout":$="blur",O=Zu;break;case"beforeblur":case"afterblur":O=Zu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Zp;break;case rs:case os:case ss:O=Dp;break;case fs:O=Jp;break;case"scroll":case"scrollend":O=Cp;break;case"wheel":O=$p;break;case"copy":case"cut":case"paste":O=Up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Qo;break;case"toggle":case"beforetoggle":O=Fp}var P=(t&4)!==0,je=!P&&(e==="scroll"||e==="scrollend"),j=P?R!==null?R+"Capture":null:R;P=[];for(var b=A,N;b!==null;){var L=b;if(N=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||N===null||j===null||(L=Fa(b,j),L!=null&&P.push(On(b,L,N))),je)break;b=b.return}0<P.length&&(R=new O(R,$,null,l,U),Y.push({event:R,listeners:P}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",R&&l!==Bu&&($=l.relatedTarget||l.fromElement)&&(na($)||$[aa]))break e;if((O||R)&&(R=U.window===U?U:(R=U.ownerDocument)?R.defaultView||R.parentWindow:window,O?($=l.relatedTarget||l.toElement,O=A,$=$?na($):null,$!==null&&(je=p($),P=$.tag,$!==je||P!==5&&P!==27&&P!==6)&&($=null)):(O=null,$=A),O!==$)){if(P=Go,L="onMouseLeave",j="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(P=Qo,L="onPointerLeave",j="onPointerEnter",b="pointer"),je=O==null?R:Wa(O),N=$==null?R:Wa($),R=new P(L,b+"leave",O,l,U),R.target=je,R.relatedTarget=N,L=null,na(U)===A&&(P=new P(j,b+"enter",$,l,U),P.target=N,P.relatedTarget=je,L=P),je=L,O&&$)t:{for(P=Wh,j=O,b=$,N=0,L=j;L;L=P(L))N++;L=0;for(var I=b;I;I=P(I))L++;for(;0<N-L;)j=P(j),N--;for(;0<L-N;)b=P(b),L--;for(;N--;){if(j===b||b!==null&&j===b.alternate){P=j;break t}j=P(j),b=P(b)}P=null}else P=null;O!==null&&Ud(Y,R,O,P,!1),$!==null&&je!==null&&Ud(Y,je,$,P,!0)}}e:{if(R=A?Wa(A):window,O=R.nodeName&&R.nodeName.toLowerCase(),O==="select"||O==="input"&&R.type==="file")var ve=Fo;else if($o(R))if(Io)ve=ch;else{ve=ih;var W=nh}else O=R.nodeName,!O||O.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&Lu(A.elementType)&&(ve=Fo):ve=uh;if(ve&&(ve=ve(e,A))){Wo(Y,ve,l,U);break e}W&&W(e,R,A),e==="focusout"&&A&&R.type==="number"&&A.memoizedProps.value!=null&&Hu(R,"number",R.value)}switch(W=A?Wa(A):window,e){case"focusin":($o(W)||W.contentEditable==="true")&&(ma=W,Fu=A,un=null);break;case"focusout":un=Fu=ma=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,us(Y,l,U);break;case"selectionchange":if(oh)break;case"keydown":case"keyup":us(Y,l,U)}var ie;if(Ju)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else da?Jo(e,l)&&(de="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(de="onCompositionStart");de&&(ko&&l.locale!=="ko"&&(da||de!=="onCompositionStart"?de==="onCompositionEnd"&&da&&(ie=Yo()):(dl=U,Xu="value"in dl?dl.value:dl.textContent,da=!0)),W=$i(A,de),0<W.length&&(de=new Xo(de,e,null,l,U),Y.push({event:de,listeners:W}),ie?de.data=ie:(ie=Ko(l),ie!==null&&(de.data=ie)))),(ie=Pp?eh(e,l):th(e,l))&&(de=$i(A,"onBeforeInput"),0<de.length&&(W=new Xo("onBeforeInput","beforeinput",null,l,U),Y.push({event:W,listeners:de}),W.data=ie)),Vh(Y,e,A,l,U)}Dd(Y,t)})}function On(e,t,l){return{instance:e,listener:t,currentTarget:l}}function $i(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fa(e,l),n!=null&&a.unshift(On(e,n,i)),n=Fa(e,t),n!=null&&a.push(On(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Wh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,l,a,n){for(var i=t._reactName,c=[];l!==null&&l!==a;){var f=l,v=f.alternate,A=f.stateNode;if(f=f.tag,v!==null&&v===a)break;f!==5&&f!==26&&f!==27||A===null||(v=A,n?(A=Fa(l,i),A!=null&&c.unshift(On(l,A,v))):n||(A=Fa(l,i),A!=null&&c.push(On(l,A,v)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var Fh=/\r\n?/g,Ih=/\u0000|\uFFFD/g;function Hd(e){return(typeof e=="string"?e:""+e).replace(Fh,`
`).replace(Ih,"")}function Ld(e,t){return t=Hd(t),Hd(e)===t}function ze(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||oa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&oa(e,""+a);break;case"className":Pn(e,"class",a);break;case"tabIndex":Pn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,l,a);break;case"style":Ho(e,a,i);break;case"data":if(t!=="object"){Pn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&ze(e,t,"name",n.name,n,null),ze(e,t,"formEncType",n.formEncType,n,null),ze(e,t,"formMethod",n.formMethod,n,null),ze(e,t,"formTarget",n.formTarget,n,null)):(ze(e,t,"encType",n.encType,n,null),ze(e,t,"method",n.method,n,null),ze(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Vt);break;case"onScroll":a!=null&&se("scroll",e);break;case"onScrollEnd":a!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ti(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":se("beforetoggle",e),se("toggle",e),In(e,"popover",a);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":In(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Np.get(l)||l,In(e,l,a))}}function zr(e,t,l,a,n,i){switch(l){case"style":Ho(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof a=="string"?oa(e,a):(typeof a=="number"||typeof a=="bigint")&&oa(e,""+a);break;case"onScroll":a!=null&&se("scroll",e);break;case"onScrollEnd":a!=null&&se("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Vt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[it]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):In(e,l,a)}}}function et(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,i,c,l,null)}}n&&ze(e,t,"srcSet",l.srcSet,l,null),a&&ze(e,t,"src",l.src,l,null);return;case"input":se("invalid",e);var f=i=c=n=null,v=null,A=null;for(a in l)if(l.hasOwnProperty(a)){var U=l[a];if(U!=null)switch(a){case"name":n=U;break;case"type":c=U;break;case"checked":v=U;break;case"defaultChecked":A=U;break;case"value":i=U;break;case"defaultValue":f=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,t));break;default:ze(e,t,a,U,l,null)}}wo(e,i,f,v,A,c,n,!1);return;case"select":se("invalid",e),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":a=f;default:ze(e,t,n,f,l,null)}t=i,l=c,e.multiple=!!a,t!=null?ra(e,!!a,t,!1):l!=null&&ra(e,!!a,l,!0);return;case"textarea":se("invalid",e),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":a=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:ze(e,t,c,f,l,null)}Mo(e,a,n,i);return;case"option":for(v in l)l.hasOwnProperty(v)&&(a=l[v],a!=null)&&(v==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ze(e,t,v,a,l,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(a=0;a<_n.length;a++)se(_n[a],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in l)if(l.hasOwnProperty(A)&&(a=l[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:ze(e,t,A,a,l,null)}return;default:if(Lu(t)){for(U in l)l.hasOwnProperty(U)&&(a=l[U],a!==void 0&&zr(e,t,U,a,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null&&ze(e,t,f,a,l,null))}function Ph(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,v=null,A=null,U=null;for(O in l){var Y=l[O];if(l.hasOwnProperty(O)&&Y!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":v=Y;default:a.hasOwnProperty(O)||ze(e,t,O,null,a,Y)}}for(var R in a){var O=a[R];if(Y=l[R],a.hasOwnProperty(R)&&(O!=null||Y!=null))switch(R){case"type":i=O;break;case"name":n=O;break;case"checked":A=O;break;case"defaultChecked":U=O;break;case"value":c=O;break;case"defaultValue":f=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,t));break;default:O!==Y&&ze(e,t,R,O,a,Y)}}Uu(e,c,f,v,A,U,i,n);return;case"select":O=c=f=R=null;for(i in l)if(v=l[i],l.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":O=v;default:a.hasOwnProperty(i)||ze(e,t,i,null,a,v)}for(n in a)if(i=a[n],v=l[n],a.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":R=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==v&&ze(e,t,n,i,a,v)}t=f,l=c,a=O,R!=null?ra(e,!!l,R,!1):!!a!=!!l&&(t!=null?ra(e,!!l,t,!0):ra(e,!!l,l?[]:"",!1));return;case"textarea":O=R=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ze(e,t,f,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":R=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&ze(e,t,c,n,a,i)}Do(e,R,O);return;case"option":for(var $ in l)R=l[$],l.hasOwnProperty($)&&R!=null&&!a.hasOwnProperty($)&&($==="selected"?e.selected=!1:ze(e,t,$,null,a,R));for(v in a)R=a[v],O=l[v],a.hasOwnProperty(v)&&R!==O&&(R!=null||O!=null)&&(v==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":ze(e,t,v,R,a,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in l)R=l[P],l.hasOwnProperty(P)&&R!=null&&!a.hasOwnProperty(P)&&ze(e,t,P,null,a,R);for(A in a)if(R=a[A],O=l[A],a.hasOwnProperty(A)&&R!==O&&(R!=null||O!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:ze(e,t,A,R,a,O)}return;default:if(Lu(t)){for(var je in l)R=l[je],l.hasOwnProperty(je)&&R!==void 0&&!a.hasOwnProperty(je)&&zr(e,t,je,void 0,a,R);for(U in a)R=a[U],O=l[U],!a.hasOwnProperty(U)||R===O||R===void 0&&O===void 0||zr(e,t,U,R,a,O);return}}for(var j in l)R=l[j],l.hasOwnProperty(j)&&R!=null&&!a.hasOwnProperty(j)&&ze(e,t,j,null,a,R);for(Y in a)R=a[Y],O=l[Y],!a.hasOwnProperty(Y)||R===O||R==null&&O==null||ze(e,t,Y,R,a,O)}function Bd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ev(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,c=n.initiatorType,f=n.duration;if(i&&f&&Bd(c)){for(c=0,f=n.responseEnd,a+=1;a<l.length;a++){var v=l[a],A=v.startTime;if(A>f)break;var U=v.transferSize,Y=v.initiatorType;U&&Bd(Y)&&(v=v.responseEnd,c+=U*(v<f?1:(f-A)/(v-A)))}if(--a,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jr=null,Tr=null;function Wi(e){return e.nodeType===9?e:e.ownerDocument}function Yd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ar=null;function tv(){var e=window.event;return e&&e.type==="popstate"?e===Ar?!1:(Ar=e,!0):(Ar=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,lv=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(nv)}:Gd;function nv(e){setTimeout(function(){throw e})}function Rl(e){return e==="head"}function Qd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),qa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")wn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,wn(l);for(var i=l.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[$a]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&wn(e.ownerDocument.body);l=n}while(l);qa(t)}function kd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Cr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Cr(l),Du(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function iv(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[$a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function uv(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ot(e.nextSibling),e===null))return null;return e}function Zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function Rr(e){return e.data==="$?"||e.data==="$~"}function _r(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cv(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Or=null;function Vd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Ot(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Kd(e,t,l){switch(t=Wi(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function wn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Du(e)}var wt=new Map,$d=new Set;function Fi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rl=g.d;g.d={f:rv,r:ov,D:sv,C:fv,L:dv,m:mv,X:hv,S:pv,M:vv};function rv(){var e=rl.f(),t=Xi();return e||t}function ov(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?df(t):rl.r(e)}var La=typeof document>"u"?null:document;function Wd(e,t,l){var a=La;if(a&&typeof t=="string"&&t){var n=jt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),$d.has(n)||($d.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),et(t,"link",e),Ve(t),a.head.appendChild(t)))}}function sv(e){rl.D(e),Wd("dns-prefetch",e,null)}function fv(e,t){rl.C(e,t),Wd("preconnect",e,t)}function dv(e,t,l){rl.L(e,t,l);var a=La;if(a&&e&&t){var n='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+jt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+jt(l.imageSizes)+'"]')):n+='[href="'+jt(e)+'"]';var i=n;switch(t){case"style":i=Ba(e);break;case"script":i=Ya(e)}wt.has(i)||(e=z({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),wt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Dn(i))||t==="script"&&a.querySelector(Mn(i))||(t=a.createElement("link"),et(t,"link",e),Ve(t),a.head.appendChild(t)))}}function mv(e,t){rl.m(e,t);var l=La;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+jt(a)+'"][href="'+jt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ya(e)}if(!wt.has(i)&&(e=z({rel:"modulepreload",href:e},t),wt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Mn(i)))return}a=l.createElement("link"),et(a,"link",e),Ve(a),l.head.appendChild(a)}}}function pv(e,t,l){rl.S(e,t,l);var a=La;if(a&&e){var n=ua(a).hoistableStyles,i=Ba(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=a.querySelector(Dn(i)))f.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},l),(l=wt.get(i))&&wr(e,l);var v=c=a.createElement("link");Ve(v),et(v,"link",e),v._p=new Promise(function(A,U){v.onload=A,v.onerror=U}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ii(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function hv(e,t){rl.X(e,t);var l=La;if(l&&e){var a=ua(l).hoistableScripts,n=Ya(e),i=a.get(n);i||(i=l.querySelector(Mn(n)),i||(e=z({src:e,async:!0},t),(t=wt.get(n))&&Dr(e,t),i=l.createElement("script"),Ve(i),et(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function vv(e,t){rl.M(e,t);var l=La;if(l&&e){var a=ua(l).hoistableScripts,n=Ya(e),i=a.get(n);i||(i=l.querySelector(Mn(n)),i||(e=z({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&Dr(e,t),i=l.createElement("script"),Ve(i),et(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Fd(e,t,l,a){var n=(n=re.current)?Fi(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ba(l.href),l=ua(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ba(l.href);var i=ua(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Dn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},wt.set(e,l),i||gv(n,e,l,c.state))),t&&a===null)throw Error(r(528,""));return c}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ya(l),l=ua(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ba(e){return'href="'+jt(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function Id(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function gv(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),et(t,"link",l),Ve(t),e.head.appendChild(t))}function Ya(e){return'[src="'+jt(e)+'"]'}function Mn(e){return"script[async]"+e}function Pd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+jt(l.href)+'"]');if(a)return t.instance=a,Ve(a),a;var n=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ve(a),et(a,"style",n),Ii(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ba(l.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;a=Id(l),(n=wt.get(n))&&wr(a,n),i=(e.ownerDocument||e).createElement("link"),Ve(i);var c=i;return c._p=new Promise(function(f,v){c.onload=f,c.onerror=v}),et(i,"link",a),t.state.loading|=4,Ii(i,l.precedence,e),t.instance=i;case"script":return i=Ya(l.src),(n=e.querySelector(Mn(i)))?(t.instance=n,Ve(n),n):(a=l,(n=wt.get(i))&&(a=z({},l),Dr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ve(n),et(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ii(a,l.precedence,e));return t.instance}function Ii(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var f=a[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function wr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pi=null;function em(e,t,l){if(Pi===null){var a=new Map,n=Pi=new Map;n.set(l,a)}else n=Pi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[$a]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=a.get(c);f?f.push(i):a.set(c,[i])}}return a}function tm(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function yv(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bv(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ba(a.href),i=t.querySelector(Dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ve(i);return}i=t.ownerDocument||t,a=Id(a),(n=wt.get(n))&&wr(a,n),i=i.createElement("link"),Ve(i);var c=i;c._p=new Promise(function(f,v){c.onload=f,c.onerror=v}),et(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=eu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Mr=0;function xv(e,t){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Mr===0&&(Mr=62500*ev());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Mr?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function lu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,t.forEach(Sv,e),tu=null,eu.call(e))}function Sv(e,t){if(!(t.state.loading&4)){var l=tu.get(e);if(l)var a=l.get(null);else{l=new Map,tu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=eu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Un={$$typeof:k,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ev(e,t,l,a,n,i,c,f,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ru(0),this.hiddenUpdates=Ru(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function am(e,t,l,a,n,i,c,f,v,A,U,Y){return e=new Ev(e,t,l,c,v,A,U,Y,f),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=mc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},gc(i),e}function nm(e){return e?(e=va,e):va}function im(e,t,l,a,n,i){n=nm(n),a.context===null?a.context=n:a.pendingContext=n,a=yl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=bl(e,a,t),l!==null&&(ft(l,e,t),mn(l,e,t))}function um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Ur(e,t){um(e,t),(e=e.alternate)&&um(e,t)}function cm(e){if(e.tag===13||e.tag===31){var t=Xl(e,67108864);t!==null&&ft(t,e,67108864),Ur(e,67108864)}}function rm(e){if(e.tag===13||e.tag===31){var t=St();t=_u(t);var l=Xl(e,t);l!==null&&ft(l,e,t),Ur(e,t)}}var au=!0;function zv(e,t,l,a){var n=M.T;M.T=null;var i=g.p;try{g.p=2,Hr(e,t,l,a)}finally{g.p=i,M.T=n}}function jv(e,t,l,a){var n=M.T;M.T=null;var i=g.p;try{g.p=8,Hr(e,t,l,a)}finally{g.p=i,M.T=n}}function Hr(e,t,l,a){if(au){var n=Lr(a);if(n===null)Er(e,t,a,nu,l),sm(e,a);else if(Nv(n,e,t,l,a))a.stopPropagation();else if(sm(e,a),t&4&&-1<Tv.indexOf(e)){for(;n!==null;){var i=ia(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ll(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var v=1<<31-pt(c);f.entanglements[1]|=v,c&=~v}Qt(i),(ye&6)===0&&(qi=dt()+500,Rn(0))}}break;case 31:case 13:f=Xl(i,2),f!==null&&ft(f,i,2),Xi(),Ur(i,2)}if(i=Lr(a),i===null&&Er(e,t,a,nu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Er(e,t,a,null,l)}}function Lr(e){return e=Yu(e),Br(e)}var nu=null;function Br(e){if(nu=null,e=na(e),e!==null){var t=p(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=y(t),e!==null)return e;e=null}else if(l===31){if(e=T(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nu=e,null}function om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sp()){case vo:return 2;case go:return 8;case Jn:case fp:return 32;case yo:return 268435456;default:return 32}default:return 32}}var Yr=!1,_l=null,Ol=null,wl=null,Hn=new Map,Ln=new Map,Dl=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sm(e,t){switch(e){case"focusin":case"focusout":_l=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(t.pointerId)}}function Bn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ia(t),t!==null&&cm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Nv(e,t,l,a,n){switch(t){case"focusin":return _l=Bn(_l,e,t,l,a,n),!0;case"dragenter":return Ol=Bn(Ol,e,t,l,a,n),!0;case"mouseover":return wl=Bn(wl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Hn.set(i,Bn(Hn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Ln.set(i,Bn(Ln.get(i)||null,e,t,l,a,n)),!0}return!1}function fm(e){var t=na(e.target);if(t!==null){var l=p(t);if(l!==null){if(t=l.tag,t===13){if(t=y(l),t!==null){e.blockedOn=t,jo(e.priority,function(){rm(l)});return}}else if(t===31){if(t=T(l),t!==null){e.blockedOn=t,jo(e.priority,function(){rm(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Lr(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Bu=a,l.target.dispatchEvent(a),Bu=null}else return t=ia(l),t!==null&&cm(t),e.blockedOn=l,!1;t.shift()}return!0}function dm(e,t,l){iu(e)&&l.delete(t)}function Av(){Yr=!1,_l!==null&&iu(_l)&&(_l=null),Ol!==null&&iu(Ol)&&(Ol=null),wl!==null&&iu(wl)&&(wl=null),Hn.forEach(dm),Ln.forEach(dm)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,Yr||(Yr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Av)))}var cu=null;function mm(e){cu!==e&&(cu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Br(a||l)===null)continue;break}var i=ia(l);i!==null&&(e.splice(t,3),t-=3,Lc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function qa(e){function t(v){return uu(v,e)}_l!==null&&uu(_l,e),Ol!==null&&uu(Ol,e),wl!==null&&uu(wl,e),Hn.forEach(t),Ln.forEach(t);for(var l=0;l<Dl.length;l++){var a=Dl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Dl.length&&(l=Dl[0],l.blockedOn===null);)fm(l),l.blockedOn===null&&Dl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[it]||null;if(typeof i=="function")c||mm(l);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[it]||null)f=c.formAction;else if(Br(n)!==null)continue}else f=c.action;typeof f=="function"?l[a+1]=f:(l.splice(a,3),a-=3),mm(l)}}}function pm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function qr(e){this._internalRoot=e}ru.prototype.render=qr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,a=St();im(l,a,e,t,null,null)},ru.prototype.unmount=qr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;im(e.current,2,null,e,null,null),Xi(),t[aa]=null}};function ru(e){this._internalRoot=e}ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=zo();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Dl.length&&t!==0&&t<Dl[l].priority;l++);Dl.splice(l,0,e),l===0&&fm(e)}};var hm=o.version;if(hm!=="19.2.7")throw Error(r(527,hm,"19.2.7"));g.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var Cv={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Va=ou.inject(Cv),mt=ou}catch{}}return qn.createRoot=function(e,t){if(!m(e))throw Error(r(299));var l=!1,a="",n=Ef,i=zf,c=jf;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=am(e,1,!1,null,null,l,a,null,n,i,c,pm),e[aa]=t.current,Sr(e),new qr(t)},qn.hydrateRoot=function(e,t,l){if(!m(e))throw Error(r(299));var a=!1,n="",i=Ef,c=zf,f=jf,v=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.formState!==void 0&&(v=l.formState)),t=am(e,1,!0,t,l??null,a,n,v,i,c,f,pm),t.context=nm(null),l=t.current,a=St(),a=_u(a),n=yl(a),n.callback=null,bl(l,n,a),l=a,t.current.lanes=l,Ka(t,l),Qt(t),e[aa]=t.current,Sr(e),new ru(t)},qn.version="19.2.7",qn}var Tm;function Bv(){if(Tm)return Qr.exports;Tm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Qr.exports=Lv(),Qr.exports}var Yv=Bv();var ao=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Um=/^[\\/]{2}/;function qv(u,o){return o+u.replace(/\\/g,"/")}var Nm="popstate";function Am(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function Gv(u={}){function o(r,m){let p=m.state?.masked,{pathname:y,search:T,hash:x}=p||r.location;return Pr("",{pathname:y,search:T,hash:x},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function s(r,m){return typeof m=="string"?m:Xn(m)}return Qv(o,s,null,u)}function we(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Dt(u,o){if(!u){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Xv(){return Math.random().toString(36).substring(2,10)}function Cm(u,o){return{usr:u.state,key:u.key,idx:o,masked:u.mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function Pr(u,o,s=null,r,m){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof o=="string"?Xa(o):o,state:s,key:o&&o.key||r||Xv(),mask:m}}function Xn({pathname:u="/",search:o="",hash:s=""}){return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(u+=s.charAt(0)==="#"?s:"#"+s),u}function Xa(u){let o={};if(u){let s=u.indexOf("#");s>=0&&(o.hash=u.substring(s),u=u.substring(0,s));let r=u.indexOf("?");r>=0&&(o.search=u.substring(r),u=u.substring(0,r)),u&&(o.pathname=u)}return o}function Qv(u,o,s,r={}){let{window:m=document.defaultView,v5Compat:p=!1}=r,y=m.history,T="POP",x=null,h=C();h==null&&(h=0,y.replaceState({...y.state,idx:h},""));function C(){return(y.state||{idx:null}).idx}function z(){T="POP";let B=C(),J=B==null?null:B-h;h=B,x&&x({action:T,location:H.location,delta:J})}function D(B,J){T="PUSH";let Q=Am(B)?B:Pr(H.location,B,J);h=C()+1;let k=Cm(Q,h),F=H.createHref(Q.mask||Q);try{y.pushState(k,"",F)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;m.location.assign(F)}p&&x&&x({action:T,location:H.location,delta:1})}function _(B,J){T="REPLACE";let Q=Am(B)?B:Pr(H.location,B,J);h=C();let k=Cm(Q,h),F=H.createHref(Q.mask||Q);y.replaceState(k,"",F),p&&x&&x({action:T,location:H.location,delta:0})}function w(B){return kv(m,B)}let H={get action(){return T},get location(){return u(m,y)},listen(B){if(x)throw new Error("A history only accepts one active listener");return m.addEventListener(Nm,z),x=B,()=>{m.removeEventListener(Nm,z),x=null}},createHref(B){return o(m,B)},createURL:w,encodeLocation(B){let J=w(B);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:D,replace:_,go(B){return y.go(B)}};return H}function kv(u,o,s=!1){let r="http://localhost";u&&(r=u.location.origin!=="null"?u.location.origin:u.location.href),we(r,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:Xn(o);return m=m.replace(/ $/,"%20"),!s&&Um.test(m)&&(m=r+m),new URL(m,r)}function Hm(u,o,s="/"){return Zv(u,o,s,!1)}function Zv(u,o,s,r,m){let p=typeof o=="string"?Xa(o):o,y=ol(p.pathname||"/",s);if(y==null)return null;let T=Vv(u),x=null,h=a0(y);for(let C=0;x==null&&C<T.length;++C)x=l0(T[C],h,r);return x}function Vv(u){let o=Lm(u);return Jv(o),o}function Lm(u,o=[],s=[],r="",m=!1){let p=(y,T,x=m,h)=>{let C={relativePath:h===void 0?y.path||"":h,caseSensitive:y.caseSensitive===!0,childrenIndex:T,route:y};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(r)&&x)return;we(C.relativePath.startsWith(r),`Absolute route path "${C.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(r.length)}let z=Lt([r,C.relativePath]),D=s.concat(C);y.children&&y.children.length>0&&(we(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${z}".`),Lm(y.children,o,D,z,x)),!(y.path==null&&!y.index)&&o.push({path:z,score:e0(z,y.index),routesMeta:D.map((_,w)=>{let[H,B]=qm(_.relativePath,_.caseSensitive,w===D.length-1);return{..._,matcher:H,compiledParams:B}})})};return u.forEach((y,T)=>{if(y.path===""||!y.path?.includes("?"))p(y,T);else for(let x of Bm(y.path))p(y,T,!0,x)}),o}function Bm(u){let o=u.split("/");if(o.length===0)return[];let[s,...r]=o,m=s.endsWith("?"),p=s.replace(/\?$/,"");if(r.length===0)return m?[p,""]:[p];let y=Bm(r.join("/")),T=[];return T.push(...y.map(x=>x===""?p:[p,x].join("/"))),m&&T.push(...y),T.map(x=>u.startsWith("/")&&x===""?"/":x)}function Jv(u){u.sort((o,s)=>o.score!==s.score?s.score-o.score:t0(o.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}var Kv=/^:[\w-]+$/,$v=3,Wv=2,Fv=1,Iv=10,Pv=-2,Rm=u=>u==="*";function e0(u,o){let s=u.split("/"),r=s.length;return s.some(Rm)&&(r+=Pv),o&&(r+=Wv),s.filter(m=>!Rm(m)).reduce((m,p)=>m+(Kv.test(p)?$v:p===""?Fv:Iv),r)}function t0(u,o){return u.length===o.length&&u.slice(0,-1).every((r,m)=>r===o[m])?u[u.length-1]-o[o.length-1]:0}function l0(u,o,s=!1){let{routesMeta:r}=u,m={},p="/",y=[];for(let T=0;T<r.length;++T){let x=r[T],h=T===r.length-1,C=p==="/"?o:o.slice(p.length)||"/",z={path:x.relativePath,caseSensitive:x.caseSensitive,end:h},D=x.matcher&&x.compiledParams?Ym(z,C,x.matcher,x.compiledParams):hu(z,C),_=x.route;if(!D&&h&&s&&!r[r.length-1].route.index&&(D=hu({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},C)),!D)return null;Object.assign(m,D.params),y.push({params:m,pathname:Lt([p,D.pathname]),pathnameBase:u0(Lt([p,D.pathnameBase])),route:_}),D.pathnameBase!=="/"&&(p=Lt([p,D.pathnameBase]))}return y}function hu(u,o){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[s,r]=qm(u.path,u.caseSensitive,u.end);return Ym(u,o,s,r)}function Ym(u,o,s,r){let m=o.match(s);if(!m)return null;let p=m[0],y=p.replace(/(.)\/+$/,"$1"),T=m.slice(1);return{params:r.reduce((h,{paramName:C,isOptional:z},D)=>{if(C==="*"){let w=T[D]||"";y=p.slice(0,p.length-w.length).replace(/(.)\/+$/,"$1")}const _=T[D];return z&&!_?h[C]=void 0:h[C]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:y,pattern:u}}function qm(u,o=!1,s=!0){Dt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let r=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,T,x,h,C)=>{if(r.push({paramName:T,isOptional:x!=null}),x){let z=C.charAt(h+y.length);return z&&z!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(r.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),r]}function a0(u){try{return u.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Dt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),u}}function ol(u,o){if(o==="/")return u;if(!u.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,r=u.charAt(s);return r&&r!=="/"?null:u.slice(s)||"/"}function n0(u,o="/"){let{pathname:s,search:r="",hash:m=""}=typeof u=="string"?Xa(u):u,p;return s?(s=Gm(s),s.startsWith("/")?p=_m(s.substring(1),"/"):p=_m(s,o)):p=o,{pathname:p,search:c0(r),hash:r0(m)}}function _m(u,o){let s=vu(o).split("/");return u.split("/").forEach(m=>{m===".."?s.length>1&&s.pop():m!=="."&&s.push(m)}),s.length>1?s.join("/"):"/"}function Jr(u,o,s,r){return`Cannot include a '${u}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function i0(u){return u.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function no(u){let o=i0(u);return o.map((s,r)=>r===o.length-1?s.pathname:s.pathnameBase)}function bu(u,o,s,r=!1){let m;typeof u=="string"?m=Xa(u):(m={...u},we(!m.pathname||!m.pathname.includes("?"),Jr("?","pathname","search",m)),we(!m.pathname||!m.pathname.includes("#"),Jr("#","pathname","hash",m)),we(!m.search||!m.search.includes("#"),Jr("#","search","hash",m)));let p=u===""||m.pathname==="",y=p?"/":m.pathname,T;if(y==null)T=s;else{let z=o.length-1;if(!r&&y.startsWith("..")){let D=y.split("/");for(;D[0]==="..";)D.shift(),z-=1;m.pathname=D.join("/")}T=z>=0?o[z]:"/"}let x=n0(m,T),h=y&&y!=="/"&&y.endsWith("/"),C=(p||y===".")&&s.endsWith("/");return!x.pathname.endsWith("/")&&(h||C)&&(x.pathname+="/"),x}var Gm=u=>u.replace(/[\\/]{2,}/g,"/"),Lt=u=>Gm(u.join("/")),vu=u=>u.replace(/\/+$/,""),u0=u=>vu(u).replace(/^\/*/,"/"),c0=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,r0=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,o0=class{constructor(u,o,s,r=!1){this.status=u,this.statusText=o||"",this.internal=r,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function s0(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function f0(u){let o=u.map(s=>s.route.path).filter(Boolean);return Lt(o)||"/"}var Xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Qm(u,o){let s=u;if(typeof s!="string"||!ao.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let r=s,m=!1;if(Xm)try{let p=new URL(window.location.href),y=Um.test(s)?new URL(qv(s,p.protocol)):new URL(s),T=ol(y.pathname,o);y.origin===p.origin&&T!=null?s=T+y.search+y.hash:m=!0}catch{Dt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:m,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var km=["POST","PUT","PATCH","DELETE"];new Set(km);var d0=["GET",...km];new Set(d0);var m0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function p0(u){try{return m0.includes(new URL(u).protocol)}catch{return!1}}var Qa=E.createContext(null);Qa.displayName="DataRouter";var xu=E.createContext(null);xu.displayName="DataRouterState";var Zm=E.createContext(!1);function h0(){return E.useContext(Zm)}var Vm=E.createContext({isTransitioning:!1});Vm.displayName="ViewTransition";var v0=E.createContext(new Map);v0.displayName="Fetchers";var g0=E.createContext(null);g0.displayName="Await";var Et=E.createContext(null);Et.displayName="Navigation";var Qn=E.createContext(null);Qn.displayName="Location";var Bt=E.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var io=E.createContext(null);io.displayName="RouteError";var Jm="REACT_ROUTER_ERROR",y0="REDIRECT",b0="ROUTE_ERROR_RESPONSE";function x0(u){if(u.startsWith(`${Jm}:${y0}:{`))try{let o=JSON.parse(u.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function S0(u){if(u.startsWith(`${Jm}:${b0}:{`))try{let o=JSON.parse(u.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new o0(o.status,o.statusText,o.data)}catch{}}function E0(u,{relative:o}={}){we(ka(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:r}=E.useContext(Et),{hash:m,pathname:p,search:y}=kn(u,{relative:o}),T=p;return s!=="/"&&(T=p==="/"?s:Lt([s,p])),r.createHref({pathname:T,search:y,hash:m})}function ka(){return E.useContext(Qn)!=null}function Yt(){return we(ka(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Qn).location}var Km="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $m(u){E.useContext(Et).static||E.useLayoutEffect(u)}function uo(){let{isDataRoute:u}=E.useContext(Bt);return u?L0():z0()}function z0(){we(ka(),"useNavigate() may be used only in the context of a <Router> component.");let u=E.useContext(Qa),{basename:o,navigator:s}=E.useContext(Et),{matches:r}=E.useContext(Bt),{pathname:m}=Yt(),p=JSON.stringify(no(r)),y=E.useRef(!1);return $m(()=>{y.current=!0}),E.useCallback((x,h={})=>{if(Dt(y.current,Km),!y.current)return;if(typeof x=="number"){s.go(x);return}let C=bu(x,JSON.parse(p),m,h.relative==="path");u==null&&o!=="/"&&(C.pathname=C.pathname==="/"?o:Lt([o,C.pathname])),(h.replace?s.replace:s.push)(C,h.state,h)},[o,s,p,m,u])}var j0=E.createContext(null);function T0(u){let o=E.useContext(Bt).outlet;return E.useMemo(()=>o&&E.createElement(j0.Provider,{value:u},o),[o,u])}function kn(u,{relative:o}={}){let{matches:s}=E.useContext(Bt),{pathname:r}=Yt(),m=JSON.stringify(no(s));return E.useMemo(()=>bu(u,JSON.parse(m),r,o==="path"),[u,m,r,o])}function N0(u,o){return Wm(u,o)}function Wm(u,o,s){we(ka(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=E.useContext(Et),{matches:m}=E.useContext(Bt),p=m[m.length-1],y=p?p.params:{},T=p?p.pathname:"/",x=p?p.pathnameBase:"/",h=p&&p.route;{let B=h&&h.path||"";Im(T,!h||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${T}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let C=Yt(),z;if(o){let B=typeof o=="string"?Xa(o):o;we(x==="/"||B.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${B.pathname}" was given in the \`location\` prop.`),z=B}else z=C;let D=z.pathname||"/",_=D;if(x!=="/"){let B=x.replace(/^\//,"").split("/");_="/"+D.replace(/^\//,"").split("/").slice(B.length).join("/")}let w=s&&s.state.matches.length?s.state.matches.map(B=>Object.assign(B,{route:s.manifest[B.route.id]||B.route})):Hm(u,{pathname:_});Dt(h||w!=null,`No routes matched location "${z.pathname}${z.search}${z.hash}" `),Dt(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=O0(w&&w.map(B=>Object.assign({},B,{params:Object.assign({},y,B.params),pathname:Lt([x,r.encodeLocation?r.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?x:Lt([x,r.encodeLocation?r.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),m,s);return o&&H?E.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...z},navigationType:"POP"}},H):H}function A0(){let u=H0(),o=s0(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),s=u instanceof Error?u.stack:null,r="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},y=null;return console.error("Error handled by React Router default ErrorBoundary:",u),y=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:p},"ErrorBoundary")," or"," ",E.createElement("code",{style:p},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},o),s?E.createElement("pre",{style:m},s):null,y)}var C0=E.createElement(A0,null),Fm=class extends E.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){this.props.onError?this.props.onError(u,o):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const s=S0(u.digest);s&&(u=s)}let o=u!==void 0?E.createElement(Bt.Provider,{value:this.props.routeContext},E.createElement(io.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?E.createElement(R0,{error:u},o):o}};Fm.contextType=Zm;var Kr=new WeakMap;function R0({children:u,error:o}){let{basename:s}=E.useContext(Et);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let r=x0(o.digest);if(r){let m=Kr.get(o);if(m)throw m;let p=Qm(r.location,s),y=p.absoluteURL||p.to;if(p0(y))throw new Error("Invalid redirect location");if(Xm&&!Kr.get(o))if(p.isExternal||r.reloadDocument)window.location.href=y;else{const T=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:r.replace}));throw Kr.set(o,T),T}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${y}`})}}return u}function _0({routeContext:u,match:o,children:s}){let r=E.useContext(Qa);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),E.createElement(Bt.Provider,{value:u},s)}function O0(u,o=[],s){let r=s?.state;if(u==null){if(!r)return null;if(r.errors)u=r.matches;else if(o.length===0&&!r.initialized&&r.matches.length>0)u=r.matches;else return null}let m=u,p=r?.errors;if(p!=null){let C=m.findIndex(z=>z.route.id&&p?.[z.route.id]!==void 0);we(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,C+1))}let y=!1,T=-1;if(s&&r){y=r.renderFallback;for(let C=0;C<m.length;C++){let z=m[C];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(T=C),z.route.id){let{loaderData:D,errors:_}=r,w=z.route.loader&&!D.hasOwnProperty(z.route.id)&&(!_||_[z.route.id]===void 0);if(z.route.lazy||w){s.isStatic&&(y=!0),T>=0?m=m.slice(0,T+1):m=[m[0]];break}}}}let x=s?.onError,h=r&&x?(C,z)=>{x(C,{location:r.location,params:r.matches?.[0]?.params??{},pattern:f0(r.matches),errorInfo:z})}:void 0;return m.reduceRight((C,z,D)=>{let _,w=!1,H=null,B=null;r&&(_=p&&z.route.id?p[z.route.id]:void 0,H=z.route.errorElement||C0,y&&(T<0&&D===0?(Im("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,B=null):T===D&&(w=!0,B=z.route.hydrateFallbackElement||null)));let J=o.concat(m.slice(0,D+1)),Q=()=>{let k;return _?k=H:w?k=B:z.route.Component?k=E.createElement(z.route.Component,null):z.route.element?k=z.route.element:k=C,E.createElement(_0,{match:z,routeContext:{outlet:C,matches:J,isDataRoute:r!=null},children:k})};return r&&(z.route.ErrorBoundary||z.route.errorElement||D===0)?E.createElement(Fm,{location:r.location,revalidation:r.revalidation,component:H,error:_,children:Q(),routeContext:{outlet:null,matches:J,isDataRoute:!0},onError:h}):Q()},null)}function co(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w0(u){let o=E.useContext(Qa);return we(o,co(u)),o}function D0(u){let o=E.useContext(xu);return we(o,co(u)),o}function M0(u){let o=E.useContext(Bt);return we(o,co(u)),o}function ro(u){let o=M0(u),s=o.matches[o.matches.length-1];return we(s.route.id,`${u} can only be used on routes that contain a unique "id"`),s.route.id}function U0(){return ro("useRouteId")}function H0(){let u=E.useContext(io),o=D0("useRouteError"),s=ro("useRouteError");return u!==void 0?u:o.errors?.[s]}function L0(){let{router:u}=w0("useNavigate"),o=ro("useNavigate"),s=E.useRef(!1);return $m(()=>{s.current=!0}),E.useCallback(async(m,p={})=>{Dt(s.current,Km),s.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:o,...p}))},[u,o])}var Om={};function Im(u,o,s){!o&&!Om[u]&&(Om[u]=!0,Dt(!1,s))}E.memo(B0);function B0({routes:u,manifest:o,future:s,state:r,isStatic:m,onError:p}){return Wm(u,void 0,{manifest:o,state:r,isStatic:m,onError:p})}function Y0({to:u,replace:o,state:s,relative:r}){we(ka(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=E.useContext(Et);Dt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=E.useContext(Bt),{pathname:y}=Yt(),T=uo(),x=bu(u,no(p),y,r==="path"),h=JSON.stringify(x);return E.useEffect(()=>{T(JSON.parse(h),{replace:o,state:s,relative:r})},[T,h,r,o,s]),null}function q0(u){return T0(u.context)}function Ul(u){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function G0({basename:u="/",children:o=null,location:s,navigationType:r="POP",navigator:m,static:p=!1,useTransitions:y}){we(!ka(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=u.replace(/^\/*/,"/"),x=E.useMemo(()=>({basename:T,navigator:m,static:p,useTransitions:y,future:{}}),[T,m,p,y]);typeof s=="string"&&(s=Xa(s));let{pathname:h="/",search:C="",hash:z="",state:D=null,key:_="default",mask:w}=s,H=E.useMemo(()=>{let B=ol(h,T);return B==null?null:{location:{pathname:B,search:C,hash:z,state:D,key:_,mask:w},navigationType:r}},[T,h,C,z,D,_,r,w]);return Dt(H!=null,`<Router basename="${T}"> is not able to match the URL "${h}${C}${z}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:E.createElement(Et.Provider,{value:x},E.createElement(Qn.Provider,{children:o,value:H}))}function X0({children:u,location:o}){return N0(eo(u),o)}function eo(u,o=[]){let s=[];return E.Children.forEach(u,(r,m)=>{if(!E.isValidElement(r))return;let p=[...o,m];if(r.type===E.Fragment){s.push.apply(s,eo(r.props.children,p));return}we(r.type===Ul,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!r.props.index||!r.props.children,"An index route cannot have child routes.");let y={id:r.props.id||p.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(y.children=eo(r.props.children,p)),s.push(y)}),s}var mu="get",pu="application/x-www-form-urlencoded";function Su(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Q0(u){return Su(u)&&u.tagName.toLowerCase()==="button"}function k0(u){return Su(u)&&u.tagName.toLowerCase()==="form"}function Z0(u){return Su(u)&&u.tagName.toLowerCase()==="input"}function V0(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function J0(u,o){return u.button===0&&(!o||o==="_self")&&!V0(u)}function to(u=""){return new URLSearchParams(typeof u=="string"||Array.isArray(u)||u instanceof URLSearchParams?u:Object.keys(u).reduce((o,s)=>{let r=u[s];return o.concat(Array.isArray(r)?r.map(m=>[s,m]):[[s,r]])},[]))}function K0(u,o){let s=to(u);return o&&o.forEach((r,m)=>{s.has(m)||o.getAll(m).forEach(p=>{s.append(m,p)})}),s}var su=null;function $0(){if(su===null)try{new FormData(document.createElement("form"),0),su=!1}catch{su=!0}return su}var W0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $r(u){return u!=null&&!W0.has(u)?(Dt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pu}"`),null):u}function F0(u,o){let s,r,m,p,y;if(k0(u)){let T=u.getAttribute("action");r=T?ol(T,o):null,s=u.getAttribute("method")||mu,m=$r(u.getAttribute("enctype"))||pu,p=new FormData(u)}else if(Q0(u)||Z0(u)&&(u.type==="submit"||u.type==="image")){let T=u.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=u.getAttribute("formaction")||T.getAttribute("action");if(r=x?ol(x,o):null,s=u.getAttribute("formmethod")||T.getAttribute("method")||mu,m=$r(u.getAttribute("formenctype"))||$r(T.getAttribute("enctype"))||pu,p=new FormData(T,u),!$0()){let{name:h,type:C,value:z}=u;if(C==="image"){let D=h?`${h}.`:"";p.append(`${D}x`,"0"),p.append(`${D}y`,"0")}else h&&p.append(h,z)}}else{if(Su(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=mu,r=null,m=pu,y=u}return p&&m==="text/plain"&&(y=p,p=void 0),{action:r,method:s.toLowerCase(),encType:m,formData:p,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function oo(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Pm(u,o,s,r){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return s?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${r}`:m.pathname=`${m.pathname}.${r}`:m.pathname==="/"?m.pathname=`_root.${r}`:o&&ol(m.pathname,o)==="/"?m.pathname=`${vu(o)}/_root.${r}`:m.pathname=`${vu(m.pathname)}.${r}`,m}async function I0(u,o){if(u.id in o)return o[u.id];try{let s=await import(u.module);return o[u.id]=s,s}catch(s){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function P0(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function eg(u,o,s){let r=await Promise.all(u.map(async m=>{let p=o.routes[m.route.id];if(p){let y=await I0(p,s);return y.links?y.links():[]}return[]}));return ng(r.flat(1).filter(P0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function wm(u,o,s,r,m,p){let y=(x,h)=>s[h]?x.route.id!==s[h].route.id:!0,T=(x,h)=>s[h].pathname!==x.pathname||s[h].route.path?.endsWith("*")&&s[h].params["*"]!==x.params["*"];return p==="assets"?o.filter((x,h)=>y(x,h)||T(x,h)):p==="data"?o.filter((x,h)=>{let C=r.routes[x.route.id];if(!C||!C.hasLoader)return!1;if(y(x,h)||T(x,h))return!0;if(x.route.shouldRevalidate){let z=x.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function tg(u,o,{includeHydrateFallback:s}={}){return lg(u.map(r=>{let m=o.routes[r.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),s&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function lg(u){return[...new Set(u)]}function ag(u){let o={},s=Object.keys(u).sort();for(let r of s)o[r]=u[r];return o}function ng(u,o){let s=new Set;return new Set(o),u.reduce((r,m)=>{let p=JSON.stringify(ag(m));return s.has(p)||(s.add(p),r.push({key:p,link:m})),r},[])}function so(){let u=E.useContext(Qa);return oo(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function ig(){let u=E.useContext(xu);return oo(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var fo=E.createContext(void 0);fo.displayName="FrameworkContext";function Eu(){let u=E.useContext(fo);return oo(u,"You must render this element inside a <HydratedRouter> element"),u}function ug(u,o){let s=E.useContext(fo),[r,m]=E.useState(!1),[p,y]=E.useState(!1),{onFocus:T,onBlur:x,onMouseEnter:h,onMouseLeave:C,onTouchStart:z}=o,D=E.useRef(null);E.useEffect(()=>{if(u==="render"&&y(!0),u==="viewport"){let H=J=>{J.forEach(Q=>{y(Q.isIntersecting)})},B=new IntersectionObserver(H,{threshold:.5});return D.current&&B.observe(D.current),()=>{B.disconnect()}}},[u]),E.useEffect(()=>{if(r){let H=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(H)}}},[r]);let _=()=>{m(!0)},w=()=>{m(!1),y(!1)};return s?u!=="intent"?[p,D,{}]:[p,D,{onFocus:Gn(T,_),onBlur:Gn(x,w),onMouseEnter:Gn(h,_),onMouseLeave:Gn(C,w),onTouchStart:Gn(z,_)}]:[!1,D,{}]}function Gn(u,o){return s=>{u&&u(s),s.defaultPrevented||o(s)}}function cg({page:u,...o}){let s=h0(),{nonce:r}=Eu(),{router:m}=so(),p=E.useMemo(()=>Hm(m.routes,u,m.basename),[m.routes,u,m.basename]);return p?(o.nonce==null&&r&&(o={...o,nonce:r}),s?E.createElement(og,{page:u,matches:p,...o}):E.createElement(sg,{page:u,matches:p,...o})):null}function rg(u){let{manifest:o,routeModules:s}=Eu(),[r,m]=E.useState([]);return E.useEffect(()=>{let p=!1;return eg(u,o,s).then(y=>{p||m(y)}),()=>{p=!0}},[u,o,s]),r}function og({page:u,matches:o,...s}){let r=Yt(),{future:m}=Eu(),{basename:p}=so(),y=E.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let T=Pm(u,p,m.v8_trailingSlashAwareDataRequests,"rsc"),x=!1,h=[];for(let C of o)typeof C.route.shouldRevalidate=="function"?x=!0:h.push(C.route.id);return x&&h.length>0&&T.searchParams.set("_routes",h.join(",")),[T.pathname+T.search]},[p,m.v8_trailingSlashAwareDataRequests,u,r,o]);return E.createElement(E.Fragment,null,y.map(T=>E.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...s})))}function sg({page:u,matches:o,...s}){let r=Yt(),{future:m,manifest:p,routeModules:y}=Eu(),{basename:T}=so(),{loaderData:x,matches:h}=ig(),C=E.useMemo(()=>wm(u,o,h,p,r,"data"),[u,o,h,p,r]),z=E.useMemo(()=>wm(u,o,h,p,r,"assets"),[u,o,h,p,r]),D=E.useMemo(()=>{if(u===r.pathname+r.search+r.hash)return[];let H=new Set,B=!1;if(o.forEach(Q=>{let k=p.routes[Q.route.id];!k||!k.hasLoader||(!C.some(F=>F.route.id===Q.route.id)&&Q.route.id in x&&y[Q.route.id]?.shouldRevalidate||k.hasClientLoader?B=!0:H.add(Q.route.id))}),H.size===0)return[];let J=Pm(u,T,m.v8_trailingSlashAwareDataRequests,"data");return B&&H.size>0&&J.searchParams.set("_routes",o.filter(Q=>H.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[J.pathname+J.search]},[T,m.v8_trailingSlashAwareDataRequests,x,r,p,C,o,u,y]),_=E.useMemo(()=>tg(z,p),[z,p]),w=rg(z);return E.createElement(E.Fragment,null,D.map(H=>E.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...s})),_.map(H=>E.createElement("link",{key:H,rel:"modulepreload",href:H,...s})),w.map(({key:H,link:B})=>E.createElement("link",{key:H,nonce:s.nonce,...B,crossOrigin:B.crossOrigin??s.crossOrigin})))}function fg(...u){return o=>{u.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{dg&&(window.__reactRouterVersion="7.18.1")}catch{}function mg({basename:u,children:o,useTransitions:s,window:r}){let m=E.useRef();m.current==null&&(m.current=Gv({window:r,v5Compat:!0}));let p=m.current,[y,T]=E.useState({action:p.action,location:p.location}),x=E.useCallback(h=>{s===!1?T(h):E.startTransition(()=>T(h))},[s]);return E.useLayoutEffect(()=>p.listen(x),[p,x]),E.createElement(G0,{basename:u,children:o,location:y.location,navigationType:y.action,navigator:p,useTransitions:s})}var mo=E.forwardRef(function({onClick:o,discover:s="render",prefetch:r="none",relative:m,reloadDocument:p,replace:y,mask:T,state:x,target:h,to:C,preventScrollReset:z,viewTransition:D,defaultShouldRevalidate:_,...w},H){let{basename:B,navigator:J,useTransitions:Q}=E.useContext(Et),k=typeof C=="string"&&ao.test(C),F=Qm(C,B);C=F.to;let ue=E0(C,{relative:m}),X=Yt(),G=null;if(T){let _e=bu(T,[],X.mask?X.mask.pathname:"/",!0);B!=="/"&&(_e.pathname=_e.pathname==="/"?B:Lt([B,_e.pathname])),G=J.createHref(_e)}let[ce,pe,he]=ug(r,w),Ze=vg(C,{replace:y,mask:T,state:x,target:h,preventScrollReset:z,relative:m,viewTransition:D,defaultShouldRevalidate:_,useTransitions:Q});function Re(_e){o&&o(_e),_e.defaultPrevented||Ze(_e)}let tt=!(F.isExternal||p),Ye=E.createElement("a",{...w,...he,href:(tt?G:void 0)||F.absoluteURL||ue,onClick:tt?Re:o,ref:fg(H,pe),target:h,"data-discover":!k&&s==="render"?"true":void 0});return ce&&!k?E.createElement(E.Fragment,null,Ye,E.createElement(cg,{page:ue})):Ye});mo.displayName="Link";var ep=E.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:r="",end:m=!1,style:p,to:y,viewTransition:T,children:x,...h},C){let z=kn(y,{relative:h.relative}),D=Yt(),_=E.useContext(xu),{navigator:w,basename:H}=E.useContext(Et),B=_!=null&&Eg(z)&&T===!0,J=w.encodeLocation?w.encodeLocation(z).pathname:z.pathname,Q=D.pathname,k=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(Q=Q.toLowerCase(),k=k?k.toLowerCase():null,J=J.toLowerCase()),k&&H&&(k=ol(k,H)||k);const F=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let ue=Q===J||!m&&Q.startsWith(J)&&Q.charAt(F)==="/",X=k!=null&&(k===J||!m&&k.startsWith(J)&&k.charAt(J.length)==="/"),G={isActive:ue,isPending:X,isTransitioning:B},ce=ue?o:void 0,pe;typeof r=="function"?pe=r(G):pe=[r,ue?"active":null,X?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let he=typeof p=="function"?p(G):p;return E.createElement(mo,{...h,"aria-current":ce,className:pe,ref:C,style:he,to:y,viewTransition:T},typeof x=="function"?x(G):x)});ep.displayName="NavLink";var pg=E.forwardRef(({discover:u="render",fetcherKey:o,navigate:s,reloadDocument:r,replace:m,state:p,method:y=mu,action:T,onSubmit:x,relative:h,preventScrollReset:C,viewTransition:z,defaultShouldRevalidate:D,..._},w)=>{let{useTransitions:H}=E.useContext(Et),B=xg(),J=Sg(T,{relative:h}),Q=y.toLowerCase()==="get"?"get":"post",k=typeof T=="string"&&ao.test(T),F=ue=>{if(x&&x(ue),ue.defaultPrevented)return;ue.preventDefault();let X=ue.nativeEvent.submitter,G=X?.getAttribute("formmethod")||y,ce=()=>B(X||ue.currentTarget,{fetcherKey:o,method:G,navigate:s,replace:m,state:p,relative:h,preventScrollReset:C,viewTransition:z,defaultShouldRevalidate:D});H&&s!==!1?E.startTransition(()=>ce()):ce()};return E.createElement("form",{ref:w,method:Q,action:J,onSubmit:r?x:F,..._,"data-discover":!k&&u==="render"?"true":void 0})});pg.displayName="Form";function hg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tp(u){let o=E.useContext(Qa);return we(o,hg(u)),o}function vg(u,{target:o,replace:s,mask:r,state:m,preventScrollReset:p,relative:y,viewTransition:T,defaultShouldRevalidate:x,useTransitions:h}={}){let C=uo(),z=Yt(),D=kn(u,{relative:y});return E.useCallback(_=>{if(J0(_,o)){_.preventDefault();let w=s!==void 0?s:Xn(z)===Xn(D),H=()=>C(u,{replace:w,mask:r,state:m,preventScrollReset:p,relative:y,viewTransition:T,defaultShouldRevalidate:x});h?E.startTransition(()=>H()):H()}},[z,C,D,s,r,m,o,u,p,y,T,x,h])}function gg(u){Dt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=E.useRef(to(u)),s=E.useRef(!1),r=Yt(),m=E.useMemo(()=>K0(r.search,s.current?null:o.current),[r.search]),p=uo(),y=E.useCallback((T,x)=>{const h=to(typeof T=="function"?T(new URLSearchParams(m)):T);s.current=!0,p("?"+h,x)},[p,m]);return[m,y]}var yg=0,bg=()=>`__${String(++yg)}__`;function xg(){let{router:u}=tp("useSubmit"),{basename:o}=E.useContext(Et),s=U0(),r=u.fetch,m=u.navigate;return E.useCallback(async(p,y={})=>{let{action:T,method:x,encType:h,formData:C,body:z}=F0(p,o);if(y.navigate===!1){let D=y.fetcherKey||bg();await r(D,s,y.action||T,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:C,body:z,formMethod:y.method||x,formEncType:y.encType||h,flushSync:y.flushSync})}else await m(y.action||T,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:C,body:z,formMethod:y.method||x,formEncType:y.encType||h,replace:y.replace,state:y.state,fromRouteId:s,flushSync:y.flushSync,viewTransition:y.viewTransition})},[r,m,o,s])}function Sg(u,{relative:o}={}){let{basename:s}=E.useContext(Et),r=E.useContext(Bt);we(r,"useFormAction must be used inside a RouteContext");let[m]=r.matches.slice(-1),p={...kn(u||".",{relative:o})},y=Yt();if(u==null){p.search=y.search;let T=new URLSearchParams(p.search),x=T.getAll("index");if(x.some(C=>C==="")){T.delete("index"),x.filter(z=>z).forEach(z=>T.append("index",z));let C=T.toString();p.search=C?`?${C}`:""}}return(!u||u===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:Lt([s,p.pathname])),Xn(p)}function Eg(u,{relative:o}={}){let s=E.useContext(Vm);we(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=tp("useViewTransitionState"),m=kn(u,{relative:o});if(!s.isTransitioning)return!1;let p=ol(s.currentLocation.pathname,r)||s.currentLocation.pathname,y=ol(s.nextLocation.pathname,r)||s.nextLocation.pathname;return hu(m.pathname,y)!=null||hu(m.pathname,p)!=null}const zg=[{to:"/profile",label:"Your Profile"},{to:"/jobs",label:"Jobs"},{to:"/applications",label:"Applications"},{to:"/templates",label:"Templates"},{to:"/review",label:"Review"}];function jg(){return d.jsxs("aside",{className:"sidebar",children:[d.jsx("div",{className:"sidebar-header",children:d.jsx("span",{className:"sidebar-brand",children:"Joblication"})}),d.jsx("nav",{className:"sidebar-nav","aria-label":"Main navigation",children:zg.map(u=>d.jsx(ep,{to:u.to,className:({isActive:o})=>`sidebar-link ${o?"active":""}`,children:u.label},u.to))})]})}function Tg(){return d.jsxs("div",{className:"app-shell",children:[d.jsx(jg,{}),d.jsx("main",{className:"app-main",children:d.jsx(q0,{})})]})}const ta={"Content-Type":"application/json"};async function Be(u,o={}){const s=await fetch(u,o),r=await s.json().catch(()=>({}));if(!s.ok)throw new Error(r.error||`Request failed (${s.status})`);return r}const Ce={health:()=>Be("/api/health"),config:()=>Be("/api/config"),getProfile:()=>Be("/api/profile"),saveProfile:u=>Be("/api/profile",{method:"PUT",headers:ta,body:JSON.stringify({profile:u})}),listJobs:()=>Be("/api/applications"),getJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`),createJob:u=>Be("/api/applications",{method:"POST",headers:ta,body:JSON.stringify(u)}),updateJob:(u,o)=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"PUT",headers:ta,body:JSON.stringify(o)}),deleteJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"DELETE"}),scrapeUrl:u=>Be("/api/applications/scrape",{method:"POST",headers:ta,body:JSON.stringify({url:u})}),listApplications:()=>Be("/api/applications/view"),listOutputs:()=>Be("/api/outputs"),fileUrl:(u,o)=>`/api/files/${encodeURIComponent(u)}/${encodeURIComponent(o)}`,getReview:u=>Be(`/api/review/${encodeURIComponent(u)}`),saveReview:(u,o)=>Be(`/api/review/${encodeURIComponent(u)}`,{method:"PUT",headers:ta,body:JSON.stringify(o)}),rebuild:u=>Be(`/api/build/${encodeURIComponent(u)}`,{method:"POST"}),listTemplates:()=>Be("/api/templates"),getTemplate:u=>Be(`/api/templates/${encodeURIComponent(u)}`),saveTemplate:(u,o)=>Be(`/api/templates/${encodeURIComponent(u)}`,{method:"PUT",headers:ta,body:JSON.stringify(o)}),createTemplate:u=>Be("/api/templates",{method:"POST",headers:ta,body:JSON.stringify(u)}),generateStatus:()=>Be("/api/generate/status"),startGenerate:()=>Be("/api/generate",{method:"POST"})},lp=E.createContext(null);function Ng({children:u}){const[o,s]=E.useState(null),r=E.useRef(null),m=E.useCallback((y,T="success")=>{clearTimeout(r.current),s({message:y,type:T}),r.current=setTimeout(()=>s(null),3500)},[]),p=E.useMemo(()=>({showToast:m}),[m]);return d.jsxs(lp.Provider,{value:p,children:[u,o&&d.jsx("div",{className:`toast show ${o.type}`,role:"status","aria-live":"polite",children:o.message})]})}function Zn(){const u=E.useContext(lp);if(!u)throw new Error("useToast must be used within ToastProvider");return u}function la(u){return u.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,o=>o.toUpperCase())}function Ag(u){return u.includes("email")?"email":u.includes("phone")?"tel":u==="url"||u.includes("portfolio")||u.includes("github")||u.includes("linkedin")?"url":u.includes("Date")||u==="date"?"date":"text"}function $e({id:u,label:o,value:s,onChange:r,type:m,multiline:p,rows:y=4,hint:T,onKeyDown:x}){const h=u||o.replace(/\s+/g,"_").toLowerCase(),C=m||Ag(h),z=!!s;return p?d.jsxs("div",{className:`md-field ${z?"md-field-filled":""}`,children:[d.jsx("label",{htmlFor:h,children:o}),d.jsx("textarea",{id:h,className:"md-input md-textarea",rows:y,value:s??"",onChange:D=>r(D.target.value),onKeyDown:x}),T&&d.jsx("span",{className:"md-hint",children:T})]}):d.jsxs("div",{className:`md-field ${z?"md-field-filled":""}`,children:[d.jsx("label",{htmlFor:h,children:o}),d.jsx("input",{id:h,className:"md-input",type:C,value:s??"",onChange:D=>r(D.target.value)}),T&&d.jsx("span",{className:"md-hint",children:T})]})}function ap({children:u,columns:o=2}){return d.jsx("div",{className:`md-grid md-grid-${o}`,children:u})}const Cg=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],Rg=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],_g=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],Og=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],wg=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],Dg=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],Mg={contact:{type:"object",fields:Cg},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:Rg,singular:"education"},experience:{type:"entities",fields:_g,singular:"experience"},projects:{type:"entities",fields:Og,singular:"project"},certifications:{type:"entities",fields:wg,singular:"certification"},achievements:{type:"entities",fields:Dg,singular:"achievement"}};function Ug(u){return Mg[u]||{type:"dynamic"}}function gu(u){return u&&typeof u=="object"&&!Array.isArray(u)}function Hg(u){if(typeof u=="string"||!gu(u))return"text";const o=Object.values(u);return!o.length||o.every(s=>typeof s=="string")?"keyValue":o.every(s=>gu(s))?"entities":"keyValue"}function np({fields:u,value:o,onChange:s}){const r=o||{};return d.jsx(ap,{children:u.map(m=>d.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:d.jsx($e,{id:m.key,label:m.label,value:r[m.key],multiline:m.multiline,rows:m.rows,onChange:p=>s({...r,[m.key]:p})})},m.key))})}function Lg(u){const o=Object.entries(u||{});return o.sort((s,r)=>{const m=parseInt(String(s[0]).split("_").pop(),10)||0,p=parseInt(String(r[0]).split("_").pop(),10)||0;return m-p}),o.map(([,s])=>s)}function Wr(u){const o={};return u.forEach((s,r)=>{o[`title_${r+1}`]=s}),o}function Bg({value:u,onChange:o}){const s=Lg(u);function r(y,T){const x=[...s];x[y]=T,o(Wr(x))}function m(y){o(Wr(s.filter((T,x)=>x!==y)))}function p(){o(Wr([...s,""]))}return d.jsxs("div",{className:"md-title-list",children:[s.map((y,T)=>d.jsxs("div",{className:"md-title-row",children:[d.jsx($e,{id:`title_text_${T}`,label:"Title text",value:y,onChange:x=>r(T,x)}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(T),"aria-label":"Remove title",children:"✕"})]},`title-${T}`)),d.jsx("button",{type:"button",className:"md-outlined-btn",onClick:p,children:"+ Add title"})]})}function ip({value:u,onChange:o,keyLabel:s="Key",valueLabel:r="Value",valueOptional:m,stacked:p}){const y=Object.entries(u||{});function T(z,D,_){const w={...u||{}};delete w[z],D.trim()&&(w[D.trim()]=_),o(w)}function x(z,D){o({...u||{},[z]:D})}function h(z){const D={...u||{}};delete D[z],o(D)}function C(){const z=s.toLowerCase().replace(/\s+/g,"_");let D=y.length+1,_=`${z}_${D}`;for(;(u||{})[_];)D+=1,_=`${z}_${D}`;o({...u||{},[_]:""})}return d.jsxs("div",{className:"md-kv-list",children:[y.map(([z,D])=>d.jsx("div",{className:`md-kv-row ${p?"md-kv-row-stacked":""}`,children:p?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"md-kv-stacked-fields",children:[d.jsx($e,{label:s,value:z,onChange:_=>T(z,_,D)}),d.jsx($e,{label:r,value:D,onChange:_=>x(z,_),multiline:!0,rows:2})]}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(z),"aria-label":"Remove",children:"✕"})]}):d.jsxs(d.Fragment,{children:[d.jsx($e,{label:s,value:z,onChange:_=>T(z,_,D)}),!m&&d.jsx($e,{label:r,value:D,onChange:_=>x(z,_),multiline:String(D).length>60,rows:2}),m&&d.jsx($e,{label:r,value:D,onChange:_=>x(z,_),hint:"Optional"}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(z),"aria-label":"Remove",children:"✕"})]})},z)),d.jsxs("button",{type:"button",className:"md-text-btn",onClick:C,children:["+ Add ",s.toLowerCase()]})]})}function up({value:u,onChange:o,fields:s,singular:r,sectionKey:m}){const p=Object.entries(u||{}),y=r||m.replace(/s$/,"");function T(h){const C={...u||{}};delete C[h],o(C)}function x(){const h=Object.keys(u||{}).map(_=>parseInt(_.split("_").pop(),10)).filter(_=>!Number.isNaN(_)),C=h.length?Math.max(...h)+1:1,z=`${y}_${C}`,D=s.reduce((_,w)=>({..._,[w.key]:""}),{});o({...u||{},[z]:D})}return d.jsxs("div",{className:"md-entity-list",children:[p.map(([h,C])=>d.jsxs("article",{className:"md-card",children:[d.jsxs("header",{className:"md-card-header",children:[d.jsx("h3",{children:C.name||C.degree||C.company||C.position||la(h)}),d.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>T(h),"aria-label":"Remove entry",children:"✕"})]}),d.jsx(np,{fields:s,value:C,onChange:z=>o({...u||{},[h]:z})})]},h)),d.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:x,children:["+ Add ",la(r||m)]})]})}function Yg({sectionKey:u,value:o,onChange:s}){const r=Hg(o);if(r==="text")return d.jsx($e,{label:la(u),value:typeof o=="string"?o:JSON.stringify(o,null,2),onChange:s,multiline:!0,rows:8});if(r==="keyValue")return d.jsx(ip,{value:gu(o)?o:{},onChange:s,keyLabel:"Item",valueLabel:"Value"});if(r==="entities"){const m=Object.values(o||{}).find(gu)||{},p=Object.keys(m).map(y=>({key:y,label:la(y),multiline:y==="description"||String(m[y]).length>80,rows:4}));return d.jsx(up,{sectionKey:u,value:o,onChange:s,fields:p.length?p:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:u.replace(/s$/,"")})}return d.jsx($e,{label:la(u),value:JSON.stringify(o,null,2),onChange:()=>{},multiline:!0,rows:10})}function qg({sectionKey:u,value:o,onChange:s}){const r=Ug(u);return r.type==="text"?d.jsx($e,{label:r.label||la(u),value:typeof o=="string"?o:"",onChange:s,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):r.type==="object"?d.jsx(np,{fields:r.fields,value:o,onChange:s}):r.type==="titles"?d.jsx(Bg,{value:o,onChange:s}):r.type==="keyValue"?d.jsx(ip,{value:o||{},onChange:s,keyLabel:r.keyLabel,valueLabel:r.valueLabel,valueOptional:r.valueOptional,stacked:r.stacked}):r.type==="entities"?d.jsx(up,{sectionKey:u,value:o,onChange:s,fields:r.fields,singular:r.singular}):d.jsx(Yg,{sectionKey:u,value:o,onChange:s})}const yu=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],Gg={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function Fr(u){return Gg[u]||la(u)}const Dm=new Set(yu);function Xg(u){const o=yu.filter(r=>u.includes(r)),s=u.filter(r=>!yu.includes(r)).sort();return[...o,...s]}function Qg(){const{showToast:u}=Zn(),[o,s]=E.useState(null),[r,m]=E.useState("contact"),[p,y]=E.useState([]),[T,x]=E.useState(!0),[h,C]=E.useState(!1),z=E.useCallback(async()=>{x(!0);try{const k=(await Ce.getProfile()).profile||{};s(k),y(Object.keys(k).filter(F=>!Dm.has(F)))}catch(Q){u(Q.message,"error")}finally{x(!1)}},[u]);E.useEffect(()=>{z()},[z]);const D=E.useMemo(()=>{const Q=o?Object.keys(o):[];return Xg([...new Set([...yu,...Q,...p])]).filter(F=>o&&F in o)},[o,p]);function _(Q,k){s(F=>({...F,[Q]:k}))}function w(){const Q=window.prompt("New section name (e.g. Publications):");if(!Q)return;const k=Q.trim().toLowerCase().replace(/\s+/g,"_");k&&(y(F=>F.includes(k)?F:[...F,k]),s(F=>({...F,[k]:F[k]||{}})),m(k))}function H(){window.confirm(`Delete section "${Fr(r)}"?`)&&(s(Q=>{const k={...Q};return delete k[r],k}),y(Q=>Q.filter(k=>k!==r)),m("contact"))}async function B(){C(!0);try{await Ce.saveProfile(o),u("Profile saved")}catch(Q){u(Q.message,"error")}finally{C(!1)}}if(T||!o)return d.jsx("div",{className:"profile-page",children:d.jsxs("div",{className:"profile-loading",children:[d.jsx("div",{className:"md-spinner"}),d.jsx("p",{children:"Loading profile…"})]})});const J=!Dm.has(r);return d.jsx("div",{className:"profile-page",children:d.jsxs("div",{className:"profile-layout",children:[d.jsx("main",{className:"profile-main",children:d.jsxs("div",{className:"profile-main-inner",children:[d.jsxs("div",{className:"profile-section-head",children:[d.jsx("h1",{children:Fr(r)}),J&&d.jsx("button",{type:"button",className:"md-text-btn danger",onClick:H,children:"Delete section"})]}),d.jsx("div",{className:"profile-form-surface",children:d.jsx(qg,{sectionKey:r,value:o[r],onChange:Q=>_(r,Q)})})]})}),d.jsxs("aside",{className:"profile-sidebar",children:[d.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[d.jsx("p",{className:"profile-nav-label",children:"Sections"}),d.jsx("ul",{children:D.map(Q=>d.jsx("li",{children:d.jsx("button",{type:"button",className:`profile-nav-item ${r===Q?"active":""}`,onClick:()=>m(Q),children:Fr(Q)})},Q))})]}),d.jsxs("div",{className:"profile-sidebar-actions",children:[d.jsx("button",{type:"button",className:"md-filled-btn",onClick:B,disabled:h,children:h?"Saving…":"Save profile"}),d.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:w,children:"+ Section"})]})]})]})})}const Ir={company:"",title:"",location:"",url:"",about:"",description:""};function kg(u){const o=u.split(`
`).map(r=>r.trim()).filter(Boolean),s=u.match(/https?:\/\/[^\s]+/i);return{url:s?s[0]:"",title:o[0]||"",description:u,about:o.slice(0,3).join(" ")}}function Zg(u){return u?u.split("_").slice(0,-2).join(" ").replace(/\b\w/g,s=>s.toUpperCase()):""}function Vg({draft:u,onChange:o}){return d.jsxs(d.Fragment,{children:[d.jsxs(ap,{children:[d.jsx($e,{id:"job_company",label:"Company",value:u.company,onChange:s=>o({...u,company:s})}),d.jsx($e,{id:"job_title",label:"Job title",value:u.title,onChange:s=>o({...u,title:s})}),d.jsx($e,{id:"job_location",label:"Location",value:u.location,onChange:s=>o({...u,location:s})}),d.jsx($e,{id:"job_url",label:"Job URL",value:u.url,onChange:s=>o({...u,url:s})})]}),d.jsx("div",{className:"md-field-span-wrap",children:d.jsx($e,{id:"job_about",label:"About",value:u.about,onChange:s=>o({...u,about:s}),multiline:!0,rows:4,hint:"Company or role overview."})}),d.jsx("div",{className:"md-field-span-wrap",children:d.jsx($e,{id:"job_description",label:"Description",value:u.description,onChange:s=>o({...u,description:s}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function Jg(){const{showToast:u}=Zn(),[o,s]=E.useState([]),[r,m]=E.useState(null),[p,y]=E.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[T,x]=E.useState(""),[h,C]=E.useState(Ir),[z,D]=E.useState(!1),[_,w]=E.useState(!1),H=E.useRef(null),B=E.useCallback(async()=>{try{const X=await Ce.listJobs();s(X.applications||[])}catch(X){u(X.message,"error")}},[u]);E.useEffect(()=>{B()},[B]),E.useEffect(()=>{H.current?.scrollIntoView({behavior:"smooth"})},[p]);async function J(X){m(X),D(!0);try{const G=await Ce.getJob(X);C({company:Zg(X),title:G.title||"",location:G.location||"",url:G.url||"",about:G.about||"",description:G.description||""})}catch(G){u(G.message,"error")}}async function Q(){const X=T.trim();if(!(!X||_)){y(G=>[...G,{role:"user",content:X}]),x(""),w(!0);try{if(/^https?:\/\//i.test(X)||X.includes("linkedin.com")||X.includes("jobs.")){const ce=await Ce.scrapeUrl(X);C(pe=>({...pe,url:ce.url,title:pe.title||ce.title||"",about:ce.about||pe.about,description:ce.description||pe.description})),y(pe=>[...pe,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),D(!0)}else{const ce=kg(X);C(pe=>({...pe,...ce,description:X})),y(pe=>[...pe,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),D(!0)}}catch(G){y(ce=>[...ce,{role:"assistant",content:`Error: ${G.message}`}])}finally{w(!1)}}}async function k(){if(!h.company.trim()||!h.title.trim()){u("Company and title are required","error");return}w(!0);try{if(r)await Ce.updateJob(r,h),u("Job updated");else{const X=await Ce.createJob(h);m(X.slug),u("Job saved")}await B(),D(!0)}catch(X){u(X.message,"error")}finally{w(!1)}}async function F(){if(!(!r||!window.confirm("Delete this job?")))try{await Ce.deleteJob(r),m(null),C(Ir),D(!1),await B(),u("Job deleted")}catch(X){u(X.message,"error")}}function ue(){m(null),C(Ir),D(!0)}return d.jsx("div",{className:"profile-page jobs-page",children:d.jsxs("div",{className:"profile-layout",children:[d.jsx("main",{className:"profile-main jobs-main",children:d.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[z?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"profile-section-head",children:[d.jsx("h1",{children:r?"Edit job":"New job"}),r&&d.jsx("button",{type:"button",className:"md-text-btn danger",onClick:F,children:"Delete job"})]}),d.jsx("div",{className:"profile-form-surface",children:d.jsx(Vg,{draft:h,onChange:C})})]}):d.jsxs("div",{className:"jobs-welcome",children:[d.jsx("h1",{children:"Jobs"}),d.jsx("p",{className:"jobs-welcome-text",children:"Paste a job URL or description in the chat below, or select a job from the sidebar."})]}),d.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[d.jsxs("div",{className:"jobs-chat-messages",children:[p.map((X,G)=>d.jsxs("div",{className:`jobs-chat-bubble ${X.role}`,children:[d.jsx("span",{className:"jobs-chat-label",children:X.role==="user"?"You":"Joblication"}),d.jsx("p",{children:X.content})]},G)),d.jsx("div",{ref:H})]}),d.jsxs("div",{className:"jobs-chat-composer",children:[d.jsx("div",{className:"jobs-chat-input-wrap",children:d.jsx($e,{id:"job_intake",label:"Paste URL or job description",value:T,onChange:x,multiline:!0,rows:3,onKeyDown:X=>{X.key==="Enter"&&!X.shiftKey&&(X.preventDefault(),Q())}})}),d.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:Q,disabled:_,children:_?"…":"Send"})]})]})]})}),d.jsxs("aside",{className:"profile-sidebar jobs-sidebar",children:[d.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[d.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),d.jsxs("ul",{children:[o.map(X=>d.jsx("li",{children:d.jsxs("button",{type:"button",className:`profile-nav-item ${r===X.slug?"active":""}`,onClick:()=>J(X.slug),children:[d.jsx("span",{className:"jobs-nav-title",children:X.title||X.slug}),X.location&&d.jsx("span",{className:"jobs-nav-meta",children:X.location})]})},X.slug)),!o.length&&d.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),d.jsxs("div",{className:"profile-sidebar-actions",children:[d.jsx("button",{type:"button",className:"md-filled-btn",onClick:k,disabled:_||!z,children:_?"Saving…":"Save job"}),d.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:ue,children:"+ New job"})]})]})]})})}const Kg=["unsubmitted","submitted","rejected","interview","accepted"];function $g(){const{showToast:u}=Zn(),[o,s]=E.useState([]),[r,m]=E.useState(!1),[p,y]=E.useState(null),[T,x]=E.useState(!0),h=E.useCallback(async()=>{x(!0);try{const _=await Ce.listApplications();s(_.applications||[])}catch(_){u(_.message,"error")}finally{x(!1)}},[u]),C=E.useCallback(async()=>{try{const _=await Ce.generateStatus();y(_),_.running?setTimeout(C,2e3):(m(!1),_.error?u(_.error,"error"):_.step==="complete"&&(u("Generation complete"),h()))}catch{m(!1)}},[h,u]);E.useEffect(()=>{h()},[h]);async function z(_,w){try{await Ce.updateJob(_,{status:w}),s(H=>H.map(B=>B.slug===_?{...B,status:w}:B))}catch(H){u(H.message,"error")}}async function D(){m(!0);try{await Ce.startGenerate(),C()}catch(_){m(!1),u(_.message,"error")}}return d.jsxs("div",{className:"applications-page",children:[d.jsxs("header",{className:"page-header",children:[d.jsxs("div",{children:[d.jsx("h1",{children:"Applications"}),d.jsx("p",{className:"subtitle",children:"Track CVs, cover letters, and application status."})]}),d.jsx("button",{type:"button",className:"btn btn-primary",onClick:D,disabled:r,children:r?`Generating… ${p?.step||""}`:"Generate all"})]}),T?d.jsx("p",{className:"muted",children:"Loading…"}):d.jsxs("div",{className:"app-grid",children:[o.map(_=>d.jsxs("article",{className:"app-card",children:[d.jsxs("div",{className:"app-card-head",children:[d.jsx("h3",{children:_.title||_.slug}),d.jsx("select",{value:_.status,onChange:w=>z(_.slug,w.target.value),className:`status-select status-${_.status}`,children:Kg.map(w=>d.jsx("option",{value:w,children:w},w))})]}),d.jsx("p",{className:"muted small",children:_.slug}),d.jsx("div",{className:"app-card-files",children:_.has_output?_.files.map(w=>d.jsxs("a",{href:Ce.fileUrl(_.output_folder,w),target:"_blank",rel:"noreferrer",className:"file-link",children:[w.endsWith(".pdf")?"📄":"🌐"," ",w]},w)):d.jsx("span",{className:"muted small",children:"No outputs yet — run Generate"})}),d.jsx("div",{className:"app-card-actions",children:d.jsx(mo,{to:`/review?slug=${encodeURIComponent(_.slug)}`,className:"btn btn-ghost btn-sm",children:"Review & edit"})})]},_.slug)),!o.length&&d.jsx("p",{className:"muted",children:"Add jobs first, then generate applications."})]})]})}function fu(u,o,s){return Math.min(s,Math.max(o,u))}function Wg(u){return Math.round(u*10)/10}function Fg({layout:u,sections:o,activeSection:s,onSelectSection:r,onUpdateSection:m}){const p=E.useRef(null),y=E.useRef(null),T=u.pageWidth||595,x=u.pageHeight||842,h=u.zoom||1,C=[...o].sort((w,H)=>(w.zIndex??1)-(H.zIndex??1)),z=E.useCallback(()=>{y.current=null},[]),D=E.useCallback(w=>{const H=y.current,B=p.current;if(!H||!B)return;const J=B.getBoundingClientRect(),Q=(w.clientX-H.startX)/J.width*100,k=(w.clientY-H.startY)/J.height*100,F=u.snapToGrid?u.gridSize||1:0,ue=X=>F>0?Math.round(X/F)*F:Wg(X);if(H.mode==="move"){const X=100-H.origW,G=100-H.origH;m(H.id,{x:ue(fu(H.origX+Q,0,X)),y:ue(fu(H.origY+k,0,G))})}else H.mode==="resize"&&m(H.id,{w:ue(fu(H.origW+Q,8,100-H.origX)),h:ue(fu(H.origH+k,4,100-H.origY))})},[u.snapToGrid,u.gridSize,m]);E.useEffect(()=>(window.addEventListener("pointermove",D),window.addEventListener("pointerup",z),window.addEventListener("pointercancel",z),()=>{window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",z),window.removeEventListener("pointercancel",z)}),[D,z]);function _(w,H,B){H.locked||(w.stopPropagation(),w.preventDefault(),y.current={id:H.id,mode:B,startX:w.clientX,startY:w.clientY,origX:H.x,origY:H.y,origW:H.w,origH:H.h},r(H.id))}return d.jsxs("div",{className:"ps-workspace",children:[d.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(w,H)=>d.jsx("span",{style:{left:`${H/11*100}%`},children:Math.round(T/11*H)},H))}),d.jsx("div",{className:"ps-canvas-scroll",children:d.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${h})`,transformOrigin:"top center"},children:d.jsxs("div",{ref:p,className:"ps-canvas",style:{width:T,minHeight:x,padding:u.pagePadding,fontSize:`${u.fontSize}px`,lineHeight:u.lineHeight,fontFamily:u.fontFamily||"Georgia, serif",backgroundColor:u.pageBackground||"#ffffff"},onClick:()=>r(null),onKeyDown:()=>{},role:"presentation",children:[u.showGrid&&d.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${u.gridSize||5}% ${u.gridSize||5}%`}}),C.filter(w=>w.visible!==!1).map(w=>{const H=s===w.id;return d.jsxs("div",{className:`ps-layer ${H?"selected":""} ${w.locked?"locked":""}`,style:{left:`${w.x}%`,top:`${w.y}%`,width:`${w.w}%`,minHeight:`${w.h}%`,zIndex:w.zIndex??1,opacity:w.opacity??1,fontSize:w.fontSize?`${w.fontSize}px`:void 0,textAlign:w.textAlign||"left",padding:w.padding??8,backgroundColor:w.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:B=>{B.stopPropagation(),r(w.id)},onPointerDown:B=>_(B,w,"move"),onKeyDown:()=>{},role:"button",tabIndex:0,children:[d.jsx("span",{className:"ps-layer-label",children:w.label}),d.jsx("p",{className:"ps-layer-preview",children:"Section content"}),H&&!w.locked&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"ps-handle ps-handle-nw"}),d.jsx("span",{className:"ps-handle ps-handle-ne"}),d.jsx("span",{className:"ps-handle ps-handle-sw"}),d.jsx("span",{className:"ps-handle ps-handle-se",onPointerDown:B=>_(B,w,"resize")}),d.jsx("span",{className:"ps-handle ps-handle-n"}),d.jsx("span",{className:"ps-handle ps-handle-s"}),d.jsx("span",{className:"ps-handle ps-handle-w"}),d.jsx("span",{className:"ps-handle ps-handle-e"})]})]},w.id)})]})})})]})}const Ga={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function Mm(u){if(!u)return{...Ga,sections:Ga.sections.map(s=>({...s}))};const o=(u.sections||Ga.sections).map(s=>({...Ga.sections[0],...s}));return{...Ga,...u,sections:o}}function Ke({label:u,children:o}){return d.jsxs("div",{className:"ps-prop-row",children:[d.jsx("label",{children:u}),o]})}function kt({value:u,onChange:o,min:s,max:r,step:m=1,unit:p="%"}){return d.jsxs("div",{className:"ps-range-field",children:[d.jsx("input",{type:"range",min:s,max:r,step:m,value:u,onChange:y=>o(Number(y.target.value))}),d.jsx("input",{type:"number",className:"ps-num-input",min:s,max:r,step:m,value:u,onChange:y=>o(Number(y.target.value))}),d.jsx("span",{className:"ps-unit",children:p})]})}function Ig(){const{showToast:u}=Zn(),[o,s]=E.useState({}),[r,m]=E.useState({}),[p,y]=E.useState(""),[T,x]=E.useState(""),[h,C]=E.useState("cv"),[z,D]=E.useState(""),[_,w]=E.useState(()=>Mm(null)),[H,B]=E.useState("contact"),[J,Q]=E.useState("layer"),[k,F]=E.useState(!1),ue=E.useMemo(()=>({...o,...r}),[o,r]),X=_.sections||[],G=X.find(g=>g.id===H),ce=E.useCallback(async()=>{try{const g=await Ce.listTemplates();s(g.catalog||{}),m(g.custom||{});const Z=Object.keys({...g.catalog||{},...g.custom||{}});Z.length&&!p&&y(Z[0])}catch(g){u(g.message,"error")}},[p,u]),pe=E.useCallback(async g=>{if(g)try{const Z=await Ce.getTemplate(g);x(Z.name||g),C(Z.category||"cv"),D(Z.source||"");const ee=Mm(Z.layout);w(ee),ee.sections?.length&&B(ee.sections[0].id)}catch(Z){u(Z.message,"error")}},[u]);E.useEffect(()=>{ce()},[ce]),E.useEffect(()=>{p&&pe(p)},[p,pe]);const he=E.useCallback((g,Z)=>{w(ee=>({...ee,sections:ee.sections.map(ne=>ne.id===g?{...ne,...Z}:ne)}))},[]);function Ze(){const g=window.prompt("Layer name:");if(!g)return;const Z=g.toLowerCase().replace(/\s+/g,"_"),ee=Math.max(0,...X.map(ne=>ne.zIndex??1));w(ne=>({...ne,sections:[...ne.sections,{id:Z,label:g,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:ee+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),B(Z)}function Re(){!G||!window.confirm(`Delete layer "${G.label}"?`)||(w(g=>({...g,sections:g.sections.filter(Z=>Z.id!==H)})),B(X[0]?.id||""))}function tt(g,Z){const ee=[...X].sort((K,te)=>(K.zIndex??1)-(te.zIndex??1)),ne=ee.findIndex(K=>K.id===g),S=Z==="up"?ne+1:ne-1;if(S<0||S>=ee.length)return;const q=ee[ne],V=ee[S];he(q.id,{zIndex:V.zIndex??S+1}),he(V.id,{zIndex:q.zIndex??ne+1})}async function Ye(){F(!0);try{await Ce.saveTemplate(p,{name:T,category:h,source:z,layout:_}),u("Template saved"),await ce()}catch(g){u(g.message,"error")}finally{F(!1)}}async function _e(){const g=window.prompt("Template id (e.g. my_cv):");if(g){F(!0);try{await Ce.createTemplate({id:g,name:g,category:"cv",source:`<!-- Custom template -->
`,layout:Ga}),y(g),await ce(),u("Template created")}catch(Z){u(Z.message,"error")}finally{F(!1)}}}const M=[...X].sort((g,Z)=>(Z.zIndex??1)-(g.zIndex??1));return d.jsxs("div",{className:"ps-editor",children:[d.jsxs("header",{className:"ps-toolbar",children:[d.jsxs("div",{className:"ps-toolbar-left",children:[d.jsx("select",{value:p,onChange:g=>y(g.target.value),className:"ps-select",children:Object.entries(ue).map(([g,Z])=>d.jsx("option",{value:g,children:Z.name||g},g))}),d.jsx("button",{type:"button",className:"ps-tool-btn",onClick:_e,children:"New"}),d.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:Ye,disabled:k,children:k?"Saving…":"Save"})]}),d.jsx("div",{className:"ps-toolbar-center",children:d.jsx("span",{className:"ps-doc-name",children:T||"Untitled"})}),d.jsxs("div",{className:"ps-toolbar-right",children:[d.jsxs("label",{className:"ps-zoom-label",children:["Zoom",d.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:_.zoom||.85,onChange:g=>w({..._,zoom:Number(g.target.value)})}),d.jsxs("span",{children:[Math.round((_.zoom||.85)*100),"%"]})]}),d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:_.snapToGrid,onChange:g=>w({..._,snapToGrid:g.target.checked})}),"Snap"]}),d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:_.showGrid,onChange:g=>w({..._,showGrid:g.target.checked})}),"Grid"]})]})]}),d.jsxs("div",{className:"ps-body",children:[d.jsxs("aside",{className:"ps-panel ps-layers",children:[d.jsxs("div",{className:"ps-panel-head",children:[d.jsx("h3",{children:"Layers"}),d.jsx("button",{type:"button",className:"ps-icon-btn",onClick:Ze,title:"Add layer",children:"+"})]}),d.jsx("ul",{className:"ps-layer-list",children:M.map(g=>d.jsxs("li",{children:[d.jsxs("button",{type:"button",className:`ps-layer-item ${H===g.id?"active":""}`,onClick:()=>B(g.id),children:[d.jsx("span",{className:`ps-eye ${g.visible!==!1?"on":"off"}`,onClick:Z=>{Z.stopPropagation(),he(g.id,{visible:!g.visible})},onKeyDown:()=>{},role:"button",tabIndex:0,title:g.visible!==!1?"Hide layer":"Show layer"}),d.jsx("span",{className:"ps-layer-name",children:g.label}),g.locked&&d.jsx("span",{className:"ps-lock-badge",children:"L"})]}),d.jsxs("div",{className:"ps-layer-actions",children:[d.jsx("button",{type:"button",className:"ps-mini-btn",onClick:()=>tt(g.id,"up"),title:"Bring forward",children:"▲"}),d.jsx("button",{type:"button",className:"ps-mini-btn",onClick:()=>tt(g.id,"down"),title:"Send backward",children:"▼"})]})]},g.id))})]}),d.jsx(Fg,{layout:_,sections:X,activeSection:H,onSelectSection:B,onUpdateSection:he}),d.jsxs("aside",{className:"ps-panel ps-properties",children:[d.jsxs("div",{className:"ps-tabs",children:[d.jsx("button",{type:"button",className:J==="document"?"active":"",onClick:()=>Q("document"),children:"Document"}),d.jsx("button",{type:"button",className:J==="layer"?"active":"",onClick:()=>Q("layer"),children:"Layer"}),d.jsx("button",{type:"button",className:J==="source"?"active":"",onClick:()=>Q("source"),children:"Source"})]}),J==="document"&&d.jsxs("div",{className:"ps-props",children:[d.jsx($e,{label:"Template name",value:T,onChange:x}),d.jsx(Ke,{label:"Category",children:d.jsxs("select",{value:h,onChange:g=>C(g.target.value),className:"ps-select full",children:[d.jsx("option",{value:"cv",children:"CV"}),d.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),d.jsx(Ke,{label:"Page width (px)",children:d.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageWidth,onChange:g=>w({..._,pageWidth:Number(g.target.value)})})}),d.jsx(Ke,{label:"Page height (px)",children:d.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageHeight,onChange:g=>w({..._,pageHeight:Number(g.target.value)})})}),d.jsx(Ke,{label:"Padding (px)",children:d.jsx(kt,{value:_.pagePadding,onChange:g=>w({..._,pagePadding:g}),min:0,max:120,unit:"px"})}),d.jsx(Ke,{label:"Background",children:d.jsx("input",{type:"color",className:"ps-color-input",value:_.pageBackground||"#ffffff",onChange:g=>w({..._,pageBackground:g.target.value})})}),d.jsx(Ke,{label:"Base font size",children:d.jsx(kt,{value:_.fontSize,onChange:g=>w({..._,fontSize:g}),min:8,max:18,unit:"px"})}),d.jsx(Ke,{label:"Line height",children:d.jsx(kt,{value:_.lineHeight,onChange:g=>w({..._,lineHeight:g}),min:1,max:2,step:.05,unit:""})}),d.jsx(Ke,{label:"Font family",children:d.jsx("input",{className:"ps-text-input full",value:_.fontFamily||"",onChange:g=>w({..._,fontFamily:g.target.value})})}),d.jsx(Ke,{label:"Grid size",children:d.jsx(kt,{value:_.gridSize||5,onChange:g=>w({..._,gridSize:g}),min:1,max:20,unit:"%"})})]}),J==="layer"&&G&&d.jsxs("div",{className:"ps-props",children:[d.jsx("h4",{className:"ps-layer-title",children:G.label}),d.jsx(Ke,{label:"X position",children:d.jsx(kt,{value:G.x,onChange:g=>he(G.id,{x:g}),min:0,max:95})}),d.jsx(Ke,{label:"Y position",children:d.jsx(kt,{value:G.y,onChange:g=>he(G.id,{y:g}),min:0,max:95})}),d.jsx(Ke,{label:"Width",children:d.jsx(kt,{value:G.w,onChange:g=>he(G.id,{w:g}),min:8,max:100})}),d.jsx(Ke,{label:"Height",children:d.jsx(kt,{value:G.h,onChange:g=>he(G.id,{h:g}),min:4,max:80})}),d.jsx(Ke,{label:"Opacity",children:d.jsx(kt,{value:Math.round((G.opacity??1)*100),onChange:g=>he(G.id,{opacity:g/100}),min:10,max:100,unit:"%"})}),d.jsx(Ke,{label:"Layer padding",children:d.jsx(kt,{value:G.padding??8,onChange:g=>he(G.id,{padding:g}),min:0,max:32,unit:"px"})}),d.jsx(Ke,{label:"Text align",children:d.jsxs("select",{className:"ps-select full",value:G.textAlign||"left",onChange:g=>he(G.id,{textAlign:g.target.value}),children:[d.jsx("option",{value:"left",children:"Left"}),d.jsx("option",{value:"center",children:"Center"}),d.jsx("option",{value:"right",children:"Right"}),d.jsx("option",{value:"justify",children:"Justify"})]})}),d.jsx(Ke,{label:"Fill color",children:d.jsx("input",{type:"color",className:"ps-color-input",value:G.bgColor?.startsWith("#")?G.bgColor:"#e8f0fe",onChange:g=>he(G.id,{bgColor:g.target.value})})}),d.jsx(Ke,{label:"Font size override",children:d.jsx("input",{type:"number",className:"ps-num-input full",placeholder:"Inherit",value:G.fontSize??"",onChange:g=>he(G.id,{fontSize:g.target.value?Number(g.target.value):void 0})})}),d.jsxs("div",{className:"ps-check-group",children:[d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:G.visible!==!1,onChange:g=>he(G.id,{visible:g.target.checked})}),"Visible"]}),d.jsxs("label",{className:"ps-check-inline",children:[d.jsx("input",{type:"checkbox",checked:!!G.locked,onChange:g=>he(G.id,{locked:g.target.checked})}),"Lock"]})]}),d.jsx("button",{type:"button",className:"ps-danger-btn",onClick:Re,children:"Delete layer"})]}),J==="layer"&&!G&&d.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),J==="source"&&d.jsx("textarea",{className:"ps-source-editor",value:z,onChange:g=>D(g.target.value)})]})]})]})}function du(u,o){return(u||[]).find(s=>s.toLowerCase().includes(o))}function Pg(){const{showToast:u}=Zn(),[o,s]=gg(),[r,m]=E.useState([]),[p,y]=E.useState(o.get("slug")||""),[T,x]=E.useState(null),[h,C]=E.useState(""),[z,D]=E.useState(""),[_,w]=E.useState("preview"),[H,B]=E.useState("cv"),[J,Q]=E.useState("html"),[k,F]=E.useState(!1),ue=E.useCallback(async()=>{try{const g=await Ce.listApplications();m(g.applications||[]),!p&&g.applications?.length&&y(g.applications[0].slug)}catch(g){u(g.message,"error")}},[u,p]),X=E.useCallback(async()=>{if(p)try{const g=await Ce.getReview(p);x(g),C(JSON.stringify(g.stage_2||{},null,2)),D(JSON.stringify(g.stage_3||{},null,2))}catch(g){u(g.message,"error")}},[p,u]);E.useEffect(()=>{ue()},[ue]),E.useEffect(()=>{p&&(s({slug:p}),X())},[p,X,s]);const G=T?.output_folder||r.find(g=>g.slug===p)?.output_folder,ce=T?.files?.length?T.files:r.find(g=>g.slug===p)?.files||[],pe=du(ce,"_cv.html"),he=du(ce,"_cv.pdf"),Ze=du(ce,"_cover_letter.html"),Re=du(ce,"_cover_letter.pdf"),tt=E.useMemo(()=>H==="cv"?J==="pdf"?he:pe:J==="pdf"?Re:Ze,[H,J,pe,he,Ze,Re]),Ye=G&&tt?Ce.fileUrl(G,tt):null;async function _e(){F(!0);try{let g,Z;try{g=JSON.parse(h),Z=JSON.parse(z)}catch(ee){throw new Error(`Invalid JSON: ${ee.message}`)}await Ce.saveReview(p,{app_key:T?.app_key,stage_2:g,stage_3:Z}),u("Saved edits"),await X()}catch(g){u(g.message,"error")}finally{F(!1)}}async function M(){F(!0);try{await Ce.saveReview(p,{app_key:T?.app_key,stage_2:JSON.parse(h),stage_3:JSON.parse(z)}),await Ce.rebuild(p),u("PDFs rebuilt"),await ue(),await X(),w("preview"),Q("pdf")}catch(g){u(g.message,"error")}finally{F(!1)}}return d.jsx("div",{className:"profile-page review-page",children:d.jsxs("div",{className:"profile-layout review-layout",children:[d.jsx("main",{className:"profile-main review-main",children:d.jsxs("div",{className:"profile-main-inner review-main-inner",children:[d.jsxs("div",{className:"profile-section-head",children:[d.jsx("h1",{children:"Review"}),d.jsxs("div",{className:"header-actions",children:[d.jsx("select",{value:p,onChange:g=>y(g.target.value),className:"ps-select",children:r.map(g=>d.jsx("option",{value:g.slug,children:g.title||g.slug},g.slug))}),d.jsx("button",{type:"button",className:"md-outlined-btn",onClick:_e,disabled:k,children:"Save edits"}),d.jsx("button",{type:"button",className:"md-filled-btn",onClick:M,disabled:k,children:k?"Working…":"Save & export PDF"})]})]}),d.jsxs("div",{className:"review-tabs",children:[d.jsx("button",{type:"button",className:_==="preview"?"active":"",onClick:()=>w("preview"),children:"Preview"}),d.jsx("button",{type:"button",className:_==="cv"?"active":"",onClick:()=>w("cv"),children:"CV JSON"}),d.jsx("button",{type:"button",className:_==="letter"?"active":"",onClick:()=>w("letter"),children:"Letter JSON"})]}),_==="preview"&&d.jsxs("div",{className:"review-preview-panel",children:[!G&&d.jsxs("p",{className:"muted review-empty",children:["No generated files yet. Run ",d.jsx("strong",{children:"Generate all"})," from Applications, then return here."]}),G&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"review-preview-toolbar",children:[d.jsxs("div",{className:"review-preview-switch",children:[d.jsx("button",{type:"button",className:H==="cv"?"active":"",onClick:()=>B("cv"),children:"CV"}),d.jsx("button",{type:"button",className:H==="letter"?"active":"",onClick:()=>B("letter"),children:"Cover letter"})]}),d.jsxs("div",{className:"review-preview-switch",children:[d.jsx("button",{type:"button",className:J==="html"?"active":"",onClick:()=>Q("html"),disabled:!(H==="cv"?pe:Ze),children:"HTML"}),d.jsx("button",{type:"button",className:J==="pdf"?"active":"",onClick:()=>Q("pdf"),disabled:!(H==="cv"?he:Re),children:"PDF"})]}),Ye&&d.jsx("a",{href:Ye,target:"_blank",rel:"noreferrer",className:"md-text-btn",children:"Open in new tab"})]}),Ye?d.jsx("div",{className:"review-preview-frame-wrap",children:d.jsx("iframe",{title:`${H} ${J} preview`,src:Ye,className:"review-preview-frame"},Ye)}):d.jsx("p",{className:"muted review-empty",children:J==="pdf"?"PDF not found — run Save & export PDF.":"HTML preview not available."}),d.jsxs("div",{className:"review-download-row",children:[he&&d.jsx("a",{href:Ce.fileUrl(G,he),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download CV PDF"}),Re&&d.jsx("a",{href:Ce.fileUrl(G,Re),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download letter PDF"})]})]})]}),_==="cv"&&d.jsx("textarea",{className:"code-area review-editor",value:h,onChange:g=>C(g.target.value)}),_==="letter"&&d.jsx("textarea",{className:"code-area review-editor",value:z,onChange:g=>D(g.target.value)})]})}),d.jsx("aside",{className:"profile-sidebar review-sidebar",children:d.jsxs("nav",{className:"profile-nav",children:[d.jsx("p",{className:"profile-nav-label",children:"Applications"}),d.jsxs("ul",{children:[r.map(g=>d.jsx("li",{children:d.jsxs("button",{type:"button",className:`profile-nav-item ${p===g.slug?"active":""}`,onClick:()=>y(g.slug),children:[d.jsx("span",{className:"jobs-nav-title",children:g.title||g.slug}),d.jsx("span",{className:"jobs-nav-meta",children:g.has_output?"Has output":"No output yet"})]})},g.slug)),!r.length&&d.jsx("li",{className:"jobs-empty",children:"No applications"})]})]})})]})})}function ey(){return d.jsx(X0,{children:d.jsxs(Ul,{element:d.jsx(Tg,{}),children:[d.jsx(Ul,{index:!0,element:d.jsx(Y0,{to:"/jobs",replace:!0})}),d.jsx(Ul,{path:"profile",element:d.jsx(Qg,{})}),d.jsx(Ul,{path:"jobs",element:d.jsx(Jg,{})}),d.jsx(Ul,{path:"applications",element:d.jsx($g,{})}),d.jsx(Ul,{path:"templates",element:d.jsx(Ig,{})}),d.jsx(Ul,{path:"review",element:d.jsx(Pg,{})})]})})}const ty=`
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
  min-height: 100vh;
}

.app-main {
  margin-left: var(--sidebar-w);
  min-height: 100vh;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

/* Sidebar — fixed, non-scrolling */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: var(--sidebar-w);
  height: 100vh;
  background: var(--bg-elevated);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.sidebar-brand {
  font-weight: 650;
  font-size: 1.05rem;
}

.sidebar-nav {
  padding: 0.75rem 0.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
  flex: 1;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 0.65rem 0.85rem;
  border-radius: 10px;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.sidebar-link:hover {
  background: var(--surface-hover);
  color: var(--text);
}

.sidebar-link.active {
  background: var(--surface);
  color: var(--text);
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
  gap: 0.25rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #3c4043;
}

.review-tabs button {
  background: transparent;
  border: none;
  color: var(--md-on-surface-variant);
  padding: 0.6rem 1rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  font: inherit;
  font-size: 0.88rem;
}

.review-tabs button.active {
  color: var(--md-on-surface);
  border-bottom-color: var(--md-primary);
}

.review-preview-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--md-surface);
  border: 1px solid #3c4043;
  border-radius: var(--md-radius);
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
  padding: 0.75rem 1rem;
  background: var(--md-surface-2);
  border-bottom: 1px solid #3c4043;
}

.review-preview-switch {
  display: flex;
  gap: 0.25rem;
  background: #252525;
  border-radius: 8px;
  padding: 0.2rem;
}

.review-preview-switch button {
  border: none;
  background: transparent;
  color: var(--md-on-surface-variant);
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font: inherit;
  font-size: 0.82rem;
  cursor: pointer;
}

.review-preview-switch button.active {
  background: var(--md-primary-container);
  color: var(--md-primary);
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
  border-top: 1px solid #3c4043;
}

.review-download-row .md-outlined-btn {
  text-decoration: none;
}

.review-editor {
  flex: 1;
  min-height: calc(100vh - 220px);
  font-family: ui-monospace, Consolas, monospace;
  font-size: 0.82rem;
}

.review-sidebar .profile-nav-item {
  flex-direction: column;
  align-items: flex-start;
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
`;function ly(){return d.jsx("style",{children:ty})}Yv.createRoot(document.getElementById("root")).render(d.jsx(E.StrictMode,{children:d.jsxs(mg,{children:[d.jsx(ly,{}),d.jsx(Ng,{children:d.jsx(ey,{})})]})}));
