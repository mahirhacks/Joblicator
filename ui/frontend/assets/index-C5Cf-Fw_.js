(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&c(b)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();var Xc={exports:{}},kn={};var bm;function Dv(){if(bm)return kn;bm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(c,m,p){var b=null;if(p!==void 0&&(b=""+p),m.key!==void 0&&(b=""+m.key),"key"in m){p={};for(var T in m)T!=="key"&&(p[T]=m[T])}else p=m;return m=p.ref,{$$typeof:u,type:c,key:b,ref:m!==void 0?m:null,props:p}}return kn.Fragment=o,kn.jsx=f,kn.jsxs=f,kn}var ym;function Uv(){return ym||(ym=1,Xc.exports=Dv()),Xc.exports}var s=Uv(),Qc={exports:{}},le={};var xm;function Hv(){if(xm)return le;xm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),b=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),O=Symbol.iterator;function _(j){return j===null||typeof j!="object"?null:(j=O&&j[O]||j["@@iterator"],typeof j=="function"?j:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,k={};function J(j,q,Z){this.props=j,this.context=q,this.refs=k,this.updater=Z||M}J.prototype.isReactComponent={},J.prototype.setState=function(j,q){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,q,"setState")},J.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function H(){}H.prototype=J.prototype;function X(j,q,Z){this.props=j,this.context=q,this.refs=k,this.updater=Z||M}var F=X.prototype=new H;F.constructor=X,B(F,J.prototype),F.isPureReactComponent=!0;var ee=Array.isArray;function Q(){}var G={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function pe(j,q,Z){var K=Z.ref;return{$$typeof:u,type:j,key:q,ref:K!==void 0?K:null,props:Z}}function he(j,q){return pe(j.type,q,j.props)}function Ve(j){return typeof j=="object"&&j!==null&&j.$$typeof===u}function Ae(j){var q={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Z){return q[Z]})}var tt=/\/+/g;function ke(j,q){return typeof j=="object"&&j!==null&&j.key!=null?Ae(""+j.key):q.toString(36)}function Re(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Q,Q):(j.status="pending",j.then(function(q){j.status==="pending"&&(j.status="fulfilled",j.value=q)},function(q){j.status==="pending"&&(j.status="rejected",j.reason=q)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function D(j,q,Z,K,ae){var ce=typeof j;(ce==="undefined"||ce==="boolean")&&(j=null);var ye=!1;if(j===null)ye=!0;else switch(ce){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(j.$$typeof){case u:case o:ye=!0;break;case C:return ye=j._init,D(ye(j._payload),q,Z,K,ae)}}if(ye)return ae=ae(j),ye=K===""?"."+ke(j,0):K,ee(ae)?(Z="",ye!=null&&(Z=ye.replace(tt,"$&/")+"/"),D(ae,q,Z,"",function(Vl){return Vl})):ae!=null&&(Ve(ae)&&(ae=he(ae,Z+(ae.key==null||j&&j.key===ae.key?"":(""+ae.key).replace(tt,"$&/")+"/")+ye)),q.push(ae)),1;ye=0;var lt=K===""?".":K+":";if(ee(j))for(var Ue=0;Ue<j.length;Ue++)K=j[Ue],ce=lt+ke(K,Ue),ye+=D(K,q,Z,ce,ae);else if(Ue=_(j),typeof Ue=="function")for(j=Ue.call(j),Ue=0;!(K=j.next()).done;)K=K.value,ce=lt+ke(K,Ue++),ye+=D(K,q,Z,ce,ae);else if(ce==="object"){if(typeof j.then=="function")return D(Re(j),q,Z,K,ae);throw q=String(j),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ye}function g(j,q,Z){if(j==null)return j;var K=[],ae=0;return D(j,K,"","",function(ce){return q.call(Z,ce,ae++)}),K}function V(j){if(j._status===-1){var q=j._result;q=q(),q.then(function(Z){(j._status===0||j._status===-1)&&(j._status=1,j._result=Z)},function(Z){(j._status===0||j._status===-1)&&(j._status=2,j._result=Z)}),j._status===-1&&(j._status=0,j._result=q)}if(j._status===1)return j._result.default;throw j._result}var te=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},ie={map:g,forEach:function(j,q,Z){g(j,function(){q.apply(this,arguments)},Z)},count:function(j){var q=0;return g(j,function(){q++}),q},toArray:function(j){return g(j,function(q){return q})||[]},only:function(j){if(!Ve(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return le.Activity=E,le.Children=ie,le.Component=J,le.Fragment=f,le.Profiler=m,le.PureComponent=X,le.StrictMode=c,le.Suspense=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(j){return G.H.useMemoCache(j)}},le.cache=function(j){return function(){return j.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(j,q,Z){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var K=B({},j.props),ae=j.key;if(q!=null)for(ce in q.key!==void 0&&(ae=""+q.key),q)!re.call(q,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&q.ref===void 0||(K[ce]=q[ce]);var ce=arguments.length-2;if(ce===1)K.children=Z;else if(1<ce){for(var ye=Array(ce),lt=0;lt<ce;lt++)ye[lt]=arguments[lt+2];K.children=ye}return pe(j.type,ae,K)},le.createContext=function(j){return j={$$typeof:b,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:p,_context:j},j},le.createElement=function(j,q,Z){var K,ae={},ce=null;if(q!=null)for(K in q.key!==void 0&&(ce=""+q.key),q)re.call(q,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ae[K]=q[K]);var ye=arguments.length-2;if(ye===1)ae.children=Z;else if(1<ye){for(var lt=Array(ye),Ue=0;Ue<ye;Ue++)lt[Ue]=arguments[Ue+2];ae.children=lt}if(j&&j.defaultProps)for(K in ye=j.defaultProps,ye)ae[K]===void 0&&(ae[K]=ye[K]);return pe(j,ce,ae)},le.createRef=function(){return{current:null}},le.forwardRef=function(j){return{$$typeof:T,render:j}},le.isValidElement=Ve,le.lazy=function(j){return{$$typeof:C,_payload:{_status:-1,_result:j},_init:V}},le.memo=function(j,q){return{$$typeof:h,type:j,compare:q===void 0?null:q}},le.startTransition=function(j){var q=G.T,Z={};G.T=Z;try{var K=j(),ae=G.S;ae!==null&&ae(Z,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(Q,te)}catch(ce){te(ce)}finally{q!==null&&Z.types!==null&&(q.types=Z.types),G.T=q}},le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(j){return G.H.use(j)},le.useActionState=function(j,q,Z){return G.H.useActionState(j,q,Z)},le.useCallback=function(j,q){return G.H.useCallback(j,q)},le.useContext=function(j){return G.H.useContext(j)},le.useDebugValue=function(){},le.useDeferredValue=function(j,q){return G.H.useDeferredValue(j,q)},le.useEffect=function(j,q){return G.H.useEffect(j,q)},le.useEffectEvent=function(j){return G.H.useEffectEvent(j)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(j,q,Z){return G.H.useImperativeHandle(j,q,Z)},le.useInsertionEffect=function(j,q){return G.H.useInsertionEffect(j,q)},le.useLayoutEffect=function(j,q){return G.H.useLayoutEffect(j,q)},le.useMemo=function(j,q){return G.H.useMemo(j,q)},le.useOptimistic=function(j,q){return G.H.useOptimistic(j,q)},le.useReducer=function(j,q,Z){return G.H.useReducer(j,q,Z)},le.useRef=function(j){return G.H.useRef(j)},le.useState=function(j){return G.H.useState(j)},le.useSyncExternalStore=function(j,q,Z){return G.H.useSyncExternalStore(j,q,Z)},le.useTransition=function(){return G.H.useTransition()},le.version="19.2.7",le}var Sm;function io(){return Sm||(Sm=1,Qc.exports=Hv()),Qc.exports}var x=io(),Vc={exports:{}},Yn={},Zc={exports:{}},Jc={};var jm;function Lv(){return jm||(jm=1,(function(u){function o(D,g){var V=D.length;D.push(g);e:for(;0<V;){var te=V-1>>>1,ie=D[te];if(0<m(ie,g))D[te]=g,D[V]=ie,V=te;else break e}}function f(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var g=D[0],V=D.pop();if(V!==g){D[0]=V;e:for(var te=0,ie=D.length,j=ie>>>1;te<j;){var q=2*(te+1)-1,Z=D[q],K=q+1,ae=D[K];if(0>m(Z,V))K<ie&&0>m(ae,Z)?(D[te]=ae,D[K]=V,te=K):(D[te]=Z,D[q]=V,te=q);else if(K<ie&&0>m(ae,V))D[te]=ae,D[K]=V,te=K;else break e}}return g}function m(D,g){var V=D.sortIndex-g.sortIndex;return V!==0?V:D.id-g.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var b=Date,T=b.now();u.unstable_now=function(){return b.now()-T}}var S=[],h=[],C=1,E=null,O=3,_=!1,M=!1,B=!1,k=!1,J=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function F(D){for(var g=f(h);g!==null;){if(g.callback===null)c(h);else if(g.startTime<=D)c(h),g.sortIndex=g.expirationTime,o(S,g);else break;g=f(h)}}function ee(D){if(B=!1,F(D),!M)if(f(S)!==null)M=!0,Q||(Q=!0,Ae());else{var g=f(h);g!==null&&Re(ee,g.startTime-D)}}var Q=!1,G=-1,re=5,pe=-1;function he(){return k?!0:!(u.unstable_now()-pe<re)}function Ve(){if(k=!1,Q){var D=u.unstable_now();pe=D;var g=!0;try{e:{M=!1,B&&(B=!1,H(G),G=-1),_=!0;var V=O;try{t:{for(F(D),E=f(S);E!==null&&!(E.expirationTime>D&&he());){var te=E.callback;if(typeof te=="function"){E.callback=null,O=E.priorityLevel;var ie=te(E.expirationTime<=D);if(D=u.unstable_now(),typeof ie=="function"){E.callback=ie,F(D),g=!0;break t}E===f(S)&&c(S),F(D)}else c(S);E=f(S)}if(E!==null)g=!0;else{var j=f(h);j!==null&&Re(ee,j.startTime-D),g=!1}}break e}finally{E=null,O=V,_=!1}g=void 0}}finally{g?Ae():Q=!1}}}var Ae;if(typeof X=="function")Ae=function(){X(Ve)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ke=tt.port2;tt.port1.onmessage=Ve,Ae=function(){ke.postMessage(null)}}else Ae=function(){J(Ve,0)};function Re(D,g){G=J(function(){D(u.unstable_now())},g)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(D){D.callback=null},u.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<D?Math.floor(1e3/D):5},u.unstable_getCurrentPriorityLevel=function(){return O},u.unstable_next=function(D){switch(O){case 1:case 2:case 3:var g=3;break;default:g=O}var V=O;O=g;try{return D()}finally{O=V}},u.unstable_requestPaint=function(){k=!0},u.unstable_runWithPriority=function(D,g){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=O;O=D;try{return g()}finally{O=V}},u.unstable_scheduleCallback=function(D,g,V){var te=u.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,D){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=V+ie,D={id:C++,callback:g,priorityLevel:D,startTime:V,expirationTime:ie,sortIndex:-1},V>te?(D.sortIndex=V,o(h,D),f(S)===null&&D===f(h)&&(B?(H(G),G=-1):B=!0,Re(ee,V-te))):(D.sortIndex=ie,o(S,D),M||_||(M=!0,Q||(Q=!0,Ae()))),D},u.unstable_shouldYield=he,u.unstable_wrapCallback=function(D){var g=O;return function(){var V=O;O=g;try{return D.apply(this,arguments)}finally{O=V}}}})(Jc)),Jc}var Em;function Bv(){return Em||(Em=1,Zc.exports=Lv()),Zc.exports}var Kc={exports:{}},at={};var zm;function kv(){if(zm)return at;zm=1;var u=io();function o(S){var h="https://react.dev/errors/"+S;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)h+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+S+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(S,h,C){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:E==null?null:""+E,children:S,containerInfo:h,implementation:C}}var b=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(S,h){if(S==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,at.createPortal=function(S,h){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return p(S,h,null,C)},at.flushSync=function(S){var h=b.T,C=c.p;try{if(b.T=null,c.p=2,S)return S()}finally{b.T=h,c.p=C,c.d.f()}},at.preconnect=function(S,h){typeof S=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(S,h))},at.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},at.preinit=function(S,h){if(typeof S=="string"&&h&&typeof h.as=="string"){var C=h.as,E=T(C,h.crossOrigin),O=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;C==="style"?c.d.S(S,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:E,integrity:O,fetchPriority:_}):C==="script"&&c.d.X(S,{crossOrigin:E,integrity:O,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},at.preinitModule=function(S,h){if(typeof S=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var C=T(h.as,h.crossOrigin);c.d.M(S,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(S)},at.preload=function(S,h){if(typeof S=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var C=h.as,E=T(C,h.crossOrigin);c.d.L(S,C,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},at.preloadModule=function(S,h){if(typeof S=="string")if(h){var C=T(h.as,h.crossOrigin);c.d.m(S,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(S)},at.requestFormReset=function(S){c.d.r(S)},at.unstable_batchedUpdates=function(S,h){return S(h)},at.useFormState=function(S,h,C){return b.H.useFormState(S,h,C)},at.useFormStatus=function(){return b.H.useHostTransitionStatus()},at.version="19.2.7",at}var Tm;function Yv(){if(Tm)return Kc.exports;Tm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Kc.exports=kv(),Kc.exports}var Nm;function qv(){if(Nm)return Yn;Nm=1;var u=Bv(),o=io(),f=Yv();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(p(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return S(n),e;if(i===l)return S(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,d=n.child;d;){if(d===a){r=!0,a=n,l=i;break}if(d===l){r=!0,l=n,a=i;break}d=d.sibling}if(!r){for(d=i.child;d;){if(d===a){r=!0,a=i,l=n;break}if(d===l){r=!0,l=i,a=n;break}d=d.sibling}if(!r)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,O=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),X=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=Ve&&e[Ve]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case J:return"Profiler";case k:return"StrictMode";case ee:return"Suspense";case Q:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case X:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Re=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,g=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},te=[],ie=-1;function j(e){return{current:e}}function q(e){0>ie||(e.current=te[ie],te[ie]=null,ie--)}function Z(e,t){ie++,te[ie]=e.current,e.current=t}var K=j(null),ae=j(null),ce=j(null),ye=j(null);function lt(e,t){switch(Z(ce,t),Z(ae,e),Z(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qd(t),e=Gd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(K),Z(K,e)}function Ue(){q(K),q(ae),q(ce)}function Vl(e){e.memoizedState!==null&&Z(ye,e);var t=K.current,a=Gd(t,e.type);t!==a&&(Z(ae,e),Z(K,a))}function Zn(e){ae.current===e&&(q(K),q(ae)),ye.current===e&&(q(ye),Un._currentValue=V)}var Tu,vo;function Ha(e){if(Tu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Tu=t&&t[1]||"",vo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tu+e+vo}var Nu=!1;function wu(e,t){if(!e||Nu)return"";Nu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(R){var A=R}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(R){A=R}e.call(Y.prototype)}}else{try{throw Error()}catch(R){A=R}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],d=i[1];if(r&&d){var v=r.split(`
`),w=d.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===w.length)for(l=v.length-1,n=w.length-1;1<=l&&0<=n&&v[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==w[n]){var U=`
`+v[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=n);break}}}finally{Nu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ha(a):""}function fp(e,t){switch(e.tag){case 26:case 27:case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return e.child!==t&&t!==null?Ha("Suspense Fallback"):Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return wu(e.type,!1);case 11:return wu(e.type.render,!1);case 1:return wu(e.type,!0);case 31:return Ha("Activity");default:return""}}function go(e){try{var t="",a=null;do t+=fp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Cu=Object.prototype.hasOwnProperty,Au=u.unstable_scheduleCallback,Ru=u.unstable_cancelCallback,dp=u.unstable_shouldYield,mp=u.unstable_requestPaint,dt=u.unstable_now,pp=u.unstable_getCurrentPriorityLevel,bo=u.unstable_ImmediatePriority,yo=u.unstable_UserBlockingPriority,Jn=u.unstable_NormalPriority,hp=u.unstable_LowPriority,xo=u.unstable_IdlePriority,vp=u.log,gp=u.unstable_setDisableYieldValue,Zl=null,mt=null;function sa(e){if(typeof vp=="function"&&gp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Zl,e)}catch{}}var pt=Math.clz32?Math.clz32:xp,bp=Math.log,yp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(bp(e)/yp|0)|0}var Kn=256,$n=262144,Wn=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=La(l):(r&=d,r!==0?n=La(r):a||(a=d&~e,a!==0&&(n=La(a))))):(d=l&~i,d!==0?n=La(d):r!==0?n=La(r):a||(a=l&~e,a!==0&&(n=La(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function So(){var e=Wn;return Wn<<=1,(Wn&62914560)===0&&(Wn=4194304),e}function _u(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Kl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jp(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(a=r&~a;0<a;){var U=31-pt(a),Y=1<<U;d[U]=0,v[U]=-1;var A=w[U];if(A!==null)for(w[U]=null,U=0;U<A.length;U++){var R=A[U];R!==null&&(R.lane&=-536870913)}a&=~Y}l!==0&&jo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function jo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Eo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function zo(e,t){var a=t&-t;return a=(a&42)!==0?1:Ou(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function To(){var e=g.p;return e!==0?e:(e=window.event,e===void 0?32:fm(e.type))}function No(e,t){var a=g.p;try{return g.p=e,t()}finally{g.p=a}}var fa=Math.random().toString(36).slice(2),We="__reactFiber$"+fa,it="__reactProps$"+fa,ll="__reactContainer$"+fa,Du="__reactEvents$"+fa,Ep="__reactListeners$"+fa,zp="__reactHandles$"+fa,wo="__reactResources$"+fa,$l="__reactMarker$"+fa;function Uu(e){delete e[We],delete e[it],delete e[Du],delete e[Ep],delete e[zp]}function nl(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=$d(e);e!==null;){if(a=e[We])return a;e=$d(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[We]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ul(e){var t=e[wo];return t||(t=e[wo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[$l]=!0}var Co=new Set,Ao={};function Ba(e,t){rl(e,t),rl(e+"Capture",t)}function rl(e,t){for(Ao[e]=t,e=0;e<t.length;e++)Co.add(t[e])}var Tp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ro={},_o={};function Np(e){return Cu.call(_o,e)?!0:Cu.call(Ro,e)?!1:Tp.test(e)?_o[e]=!0:(Ro[e]=!0,!1)}function In(e,t,a){if(Np(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Pn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hu(e){if(!e._valueTracker){var t=Oo(e)?"checked":"value";e._valueTracker=wp(e,t,""+e[t])}}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Oo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cp=/[\n"\\]/g;function zt(e){return e.replace(Cp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lu(e,t,a,l,n,i,r,d){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Bu(e,r,Et(t)):a!=null?Bu(e,r,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Et(d):e.removeAttribute("name")}function Do(e,t,a,l,n,i,r,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Hu(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Hu(e)}function Bu(e,t,a){t==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Uo(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Ho(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Re(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Hu(e)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ap=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Ap.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Bo(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Lo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Lo(e,i,t[i])}function ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return _p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Yu=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,fl=null;function ko(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(c(90));Lu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Mo(l)}break e;case"textarea":Uo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var Gu=!1;function Yo(e,t,a){if(Gu)return e(t,a);Gu=!0;try{var l=e(t);return l}finally{if(Gu=!1,(sl!==null||fl!==null)&&(Gi(),sl&&(t=sl,e=fl,fl=sl=null,ko(t),e)))for(t=0;t<e.length;t++)ko(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(Jt)try{var Il={};Object.defineProperty(Il,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Il,Il),window.removeEventListener("test",Il,Il)}catch{Xu=!1}var da=null,Qu=null,ai=null;function qo(){if(ai)return ai;var e,t=Qu,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return ai=n.slice(e,1<l?1-l:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Go(){return!1}function ut(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:Go,this.isPropagationStopped=Go,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=ut(ka),Pl=E({},ka,{view:0,detail:0}),Op=ut(Pl),Vu,Zu,en,ui=E({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==en&&(en&&e.type==="mousemove"?(Vu=e.screenX-en.screenX,Zu=e.screenY-en.screenY):Zu=Vu=0,en=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),Xo=ut(ui),Mp=E({},ui,{dataTransfer:0}),Dp=ut(Mp),Up=E({},Pl,{relatedTarget:0}),Ju=ut(Up),Hp=E({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=ut(Hp),Bp=E({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=ut(Bp),Yp=E({},ka,{data:0}),Qo=ut(Yp),qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xp[e])?!!t[e]:!1}function Ku(){return Qp}var Vp=E({},Pl,{key:function(e){if(e.key){var t=qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=ut(Vp),Jp=E({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=ut(Jp),Kp=E({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),$p=ut(Kp),Wp=E({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=ut(Wp),Ip=E({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=ut(Ip),eh=E({},ka,{newState:0,oldState:0}),th=ut(eh),ah=[9,13,27,32],$u=Jt&&"CompositionEvent"in window,tn=null;Jt&&"documentMode"in document&&(tn=document.documentMode);var lh=Jt&&"TextEvent"in window&&!tn,Zo=Jt&&(!$u||tn&&8<tn&&11>=tn),Jo=" ",Ko=!1;function $o(e,t){switch(e){case"keyup":return ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function nh(e,t){switch(e){case"compositionend":return Wo(t);case"keypress":return t.which!==32?null:(Ko=!0,Jo);case"textInput":return e=t.data,e===Jo&&Ko?null:e;default:return null}}function ih(e,t){if(dl)return e==="compositionend"||!$u&&$o(e,t)?(e=qo(),ai=Qu=da=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zo&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function Io(e,t,a,l){sl?fl?fl.push(l):fl=[l]:sl=l,t=$i(t,"onChange"),0<t.length&&(a=new ii("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var an=null,ln=null;function rh(e){Ud(e,0)}function ri(e){var t=Wl(e);if(Mo(t))return e}function Po(e,t){if(e==="change")return t}var es=!1;if(Jt){var Wu;if(Jt){var Fu="oninput"in document;if(!Fu){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),Fu=typeof ts.oninput=="function"}Wu=Fu}else Wu=!1;es=Wu&&(!document.documentMode||9<document.documentMode)}function as(){an&&(an.detachEvent("onpropertychange",ls),ln=an=null)}function ls(e){if(e.propertyName==="value"&&ri(ln)){var t=[];Io(t,ln,e,qu(e)),Yo(rh,t)}}function ch(e,t,a){e==="focusin"?(as(),an=t,ln=a,an.attachEvent("onpropertychange",ls)):e==="focusout"&&as()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(ln)}function sh(e,t){if(e==="click")return ri(t)}function fh(e,t){if(e==="input"||e==="change")return ri(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:dh;function nn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Cu.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,t){var a=ns(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ns(a)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ei(e.document)}return t}function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mh=Jt&&"documentMode"in document&&11>=document.documentMode,ml=null,Pu=null,un=null,er=!1;function cs(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;er||ml==null||ml!==ei(l)||(l=ml,"selectionStart"in l&&Iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),un&&nn(un,l)||(un=l,l=$i(Pu,"onSelect"),0<l.length&&(t=new ii("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},tr={},os={};Jt&&(os=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function qa(e){if(tr[e])return tr[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in os)return tr[e]=t[a];return e}var ss=qa("animationend"),fs=qa("animationiteration"),ds=qa("animationstart"),ph=qa("transitionrun"),hh=qa("transitionstart"),vh=qa("transitioncancel"),ms=qa("transitionend"),ps=new Map,ar="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ar.push("scrollEnd");function Dt(e,t){ps.set(e,t),Ba(t,[e])}var ci=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],hl=0,lr=0;function oi(){for(var e=hl,t=lr=hl=0;t<e;){var a=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var i=Tt[t];if(Tt[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&hs(a,n,i)}}function si(e,t,a,l){Tt[hl++]=e,Tt[hl++]=t,Tt[hl++]=a,Tt[hl++]=l,lr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function nr(e,t,a,l){return si(e,t,a,l),fi(e)}function Ga(e,t){return si(e,null,null,t),fi(e)}function hs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function fi(e){if(50<Cn)throw Cn=0,mc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vl={};function gh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,a,l){return new gh(e,t,a,l)}function ir(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=vt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")ir(e)&&(r=1);else if(typeof e=="string")r=jv(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=vt(31,a,t,n),e.elementType=pe,e.lanes=i,e;case B:return Xa(a.children,n,i,t);case k:r=8,n|=24;break;case J:return e=vt(12,a,t,n|2),e.elementType=J,e.lanes=i,e;case ee:return e=vt(13,a,t,n),e.elementType=ee,e.lanes=i,e;case Q:return e=vt(19,a,t,n),e.elementType=Q,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:r=10;break e;case H:r=9;break e;case F:r=11;break e;case G:r=14;break e;case re:r=16,l=null;break e}r=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=vt(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Xa(e,t,a,l){return e=vt(7,e,l,t),e.lanes=a,e}function ur(e,t,a){return e=vt(6,e,null,t),e.lanes=a,e}function gs(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function rr(e,t,a){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bs=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=bs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:go(t)},bs.set(e,t),t)}return{value:e,source:t,stack:go(t)}}var gl=[],bl=0,mi=null,rn=0,wt=[],Ct=0,ma=null,Yt=1,qt="";function $t(e,t){gl[bl++]=rn,gl[bl++]=mi,mi=e,rn=t}function ys(e,t,a){wt[Ct++]=Yt,wt[Ct++]=qt,wt[Ct++]=ma,ma=e;var l=Yt;e=qt;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Yt=1<<32-pt(t)+n|a<<n|l,qt=i+e}else Yt=1<<i|a<<n|l,qt=e}function cr(e){e.return!==null&&($t(e,1),ys(e,1,0))}function or(e){for(;e===mi;)mi=gl[--bl],gl[bl]=null,rn=gl[--bl],gl[bl]=null;for(;e===ma;)ma=wt[--Ct],wt[Ct]=null,qt=wt[--Ct],wt[Ct]=null,Yt=wt[--Ct],wt[Ct]=null}function xs(e,t){wt[Ct++]=Yt,wt[Ct++]=qt,wt[Ct++]=ma,Yt=t.id,qt=t.overflow,ma=e}var Fe=null,Ne=null,me=!1,pa=null,At=!1,sr=Error(c(519));function ha(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cn(Nt(t,e)),sr}function Ss(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[it]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Rn.length;a++)se(Rn[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Do(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Ho(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||kd(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function js(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Fe=Fe.return}}function yl(e){if(e!==Fe)return!1;if(!me)return js(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cc(e.type,e.memoizedProps)),a=!a),a&&Ne&&ha(e),js(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ne=Kd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ne=Kd(e)}else t===27?(t=Ne,Aa(e.type)?(e=Mc,Mc=null,Ne=e):Ne=t):Ne=Fe?_t(e.stateNode.nextSibling):null;return!0}function Qa(){Ne=Fe=null,me=!1}function fr(){var e=pa;return e!==null&&(st===null?st=e:st.push.apply(st,e),pa=null),e}function cn(e){pa===null?pa=[e]:pa.push(e)}var dr=j(null),Va=null,Wt=null;function va(e,t,a){Z(dr,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=dr.current,q(dr)}function mr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function pr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),mr(i.return,a,e),l||(r=null);break e}i=d.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(c(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),mr(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function xl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var d=n.type;ht(n.pendingProps.value,r.value)||(e!==null?e.push(d):e=[d])}}else if(n===ye.current){if(r=n.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Un):e=[Un])}n=n.return}e!==null&&pr(t,e,a,l),t.flags|=262144}function pi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Es(Va,e)}function hi(e,t){return Va===null&&Za(e),Es(e,t)}function Es(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(c(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},yh=u.unstable_scheduleCallback,xh=u.unstable_NormalPriority,Ye={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hr(){return{controller:new bh,data:new Map,refCount:0}}function on(e){e.refCount--,e.refCount===0&&yh(xh,function(){e.controller.abort()})}var sn=null,vr=0,Sl=0,jl=null;function Sh(e,t){if(sn===null){var a=sn=[];vr=0,Sl=yc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return vr++,t.then(zs,zs),t}function zs(){if(--vr===0&&sn!==null){jl!==null&&(jl.status="fulfilled");var e=sn;sn=null,Sl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ts=D.S;D.S=function(e,t){od=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sh(e,t),Ts!==null&&Ts(e,t)};var Ja=j(null);function gr(){var e=Ja.current;return e!==null?e:Te.pooledCache}function vi(e,t){t===null?Z(Ja,Ja.current):Z(Ja,t.pool)}function Ns(){var e=gr();return e===null?null:{parent:Ye._currentValue,pool:e}}var El=Error(c(460)),br=Error(c(474)),gi=Error(c(542)),bi={then:function(){}};function ws(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rs(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rs(e),e}throw $a=t,El}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,El):a}}var $a=null;function As(){if($a===null)throw Error(c(459));var e=$a;return $a=null,e}function Rs(e){if(e===El||e===gi)throw Error(c(483))}var zl=null,fn=0;function yi(e){var t=fn;return fn+=1,zl===null&&(zl=[]),Cs(zl,e,t)}function dn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _s(e){function t(z,y){if(e){var N=z.deletions;N===null?(z.deletions=[y],z.flags|=16):N.push(y)}}function a(z,y){if(!e)return null;for(;y!==null;)t(z,y),y=y.sibling;return null}function l(z){for(var y=new Map;z!==null;)z.key!==null?y.set(z.key,z):y.set(z.index,z),z=z.sibling;return y}function n(z,y){return z=Kt(z,y),z.index=0,z.sibling=null,z}function i(z,y,N){return z.index=N,e?(N=z.alternate,N!==null?(N=N.index,N<y?(z.flags|=67108866,y):N):(z.flags|=67108866,y)):(z.flags|=1048576,y)}function r(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function d(z,y,N,L){return y===null||y.tag!==6?(y=ur(N,z.mode,L),y.return=z,y):(y=n(y,N),y.return=z,y)}function v(z,y,N,L){var I=N.type;return I===B?U(z,y,N.props.children,L,N.key):y!==null&&(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===re&&Ka(I)===y.type)?(y=n(y,N.props),dn(y,N),y.return=z,y):(y=di(N.type,N.key,N.props,null,z.mode,L),dn(y,N),y.return=z,y)}function w(z,y,N,L){return y===null||y.tag!==4||y.stateNode.containerInfo!==N.containerInfo||y.stateNode.implementation!==N.implementation?(y=rr(N,z.mode,L),y.return=z,y):(y=n(y,N.children||[]),y.return=z,y)}function U(z,y,N,L,I){return y===null||y.tag!==7?(y=Xa(N,z.mode,L,I),y.return=z,y):(y=n(y,N),y.return=z,y)}function Y(z,y,N){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=ur(""+y,z.mode,N),y.return=z,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _:return N=di(y.type,y.key,y.props,null,z.mode,N),dn(N,y),N.return=z,N;case M:return y=rr(y,z.mode,N),y.return=z,y;case re:return y=Ka(y),Y(z,y,N)}if(Re(y)||Ae(y))return y=Xa(y,z.mode,N,null),y.return=z,y;if(typeof y.then=="function")return Y(z,yi(y),N);if(y.$$typeof===X)return Y(z,hi(z,y),N);xi(z,y)}return null}function A(z,y,N,L){var I=y!==null?y.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return I!==null?null:d(z,y,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return N.key===I?v(z,y,N,L):null;case M:return N.key===I?w(z,y,N,L):null;case re:return N=Ka(N),A(z,y,N,L)}if(Re(N)||Ae(N))return I!==null?null:U(z,y,N,L,null);if(typeof N.then=="function")return A(z,y,yi(N),L);if(N.$$typeof===X)return A(z,y,hi(z,N),L);xi(z,N)}return null}function R(z,y,N,L,I){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return z=z.get(N)||null,d(y,z,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _:return z=z.get(L.key===null?N:L.key)||null,v(y,z,L,I);case M:return z=z.get(L.key===null?N:L.key)||null,w(y,z,L,I);case re:return L=Ka(L),R(z,y,N,L,I)}if(Re(L)||Ae(L))return z=z.get(N)||null,U(y,z,L,I,null);if(typeof L.then=="function")return R(z,y,N,yi(L),I);if(L.$$typeof===X)return R(z,y,N,hi(y,L),I);xi(y,L)}return null}function $(z,y,N,L){for(var I=null,ve=null,W=y,ue=y=0,de=null;W!==null&&ue<N.length;ue++){W.index>ue?(de=W,W=null):de=W.sibling;var ge=A(z,W,N[ue],L);if(ge===null){W===null&&(W=de);break}e&&W&&ge.alternate===null&&t(z,W),y=i(ge,y,ue),ve===null?I=ge:ve.sibling=ge,ve=ge,W=de}if(ue===N.length)return a(z,W),me&&$t(z,ue),I;if(W===null){for(;ue<N.length;ue++)W=Y(z,N[ue],L),W!==null&&(y=i(W,y,ue),ve===null?I=W:ve.sibling=W,ve=W);return me&&$t(z,ue),I}for(W=l(W);ue<N.length;ue++)de=R(W,z,ue,N[ue],L),de!==null&&(e&&de.alternate!==null&&W.delete(de.key===null?ue:de.key),y=i(de,y,ue),ve===null?I=de:ve.sibling=de,ve=de);return e&&W.forEach(function(Da){return t(z,Da)}),me&&$t(z,ue),I}function P(z,y,N,L){if(N==null)throw Error(c(151));for(var I=null,ve=null,W=y,ue=y=0,de=null,ge=N.next();W!==null&&!ge.done;ue++,ge=N.next()){W.index>ue?(de=W,W=null):de=W.sibling;var Da=A(z,W,ge.value,L);if(Da===null){W===null&&(W=de);break}e&&W&&Da.alternate===null&&t(z,W),y=i(Da,y,ue),ve===null?I=Da:ve.sibling=Da,ve=Da,W=de}if(ge.done)return a(z,W),me&&$t(z,ue),I;if(W===null){for(;!ge.done;ue++,ge=N.next())ge=Y(z,ge.value,L),ge!==null&&(y=i(ge,y,ue),ve===null?I=ge:ve.sibling=ge,ve=ge);return me&&$t(z,ue),I}for(W=l(W);!ge.done;ue++,ge=N.next())ge=R(W,z,ue,ge.value,L),ge!==null&&(e&&ge.alternate!==null&&W.delete(ge.key===null?ue:ge.key),y=i(ge,y,ue),ve===null?I=ge:ve.sibling=ge,ve=ge);return e&&W.forEach(function(Mv){return t(z,Mv)}),me&&$t(z,ue),I}function ze(z,y,N,L){if(typeof N=="object"&&N!==null&&N.type===B&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case _:e:{for(var I=N.key;y!==null;){if(y.key===I){if(I=N.type,I===B){if(y.tag===7){a(z,y.sibling),L=n(y,N.props.children),L.return=z,z=L;break e}}else if(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===re&&Ka(I)===y.type){a(z,y.sibling),L=n(y,N.props),dn(L,N),L.return=z,z=L;break e}a(z,y);break}else t(z,y);y=y.sibling}N.type===B?(L=Xa(N.props.children,z.mode,L,N.key),L.return=z,z=L):(L=di(N.type,N.key,N.props,null,z.mode,L),dn(L,N),L.return=z,z=L)}return r(z);case M:e:{for(I=N.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===N.containerInfo&&y.stateNode.implementation===N.implementation){a(z,y.sibling),L=n(y,N.children||[]),L.return=z,z=L;break e}else{a(z,y);break}else t(z,y);y=y.sibling}L=rr(N,z.mode,L),L.return=z,z=L}return r(z);case re:return N=Ka(N),ze(z,y,N,L)}if(Re(N))return $(z,y,N,L);if(Ae(N)){if(I=Ae(N),typeof I!="function")throw Error(c(150));return N=I.call(N),P(z,y,N,L)}if(typeof N.then=="function")return ze(z,y,yi(N),L);if(N.$$typeof===X)return ze(z,y,hi(z,N),L);xi(z,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,y!==null&&y.tag===6?(a(z,y.sibling),L=n(y,N),L.return=z,z=L):(a(z,y),L=ur(N,z.mode,L),L.return=z,z=L),r(z)):a(z,y)}return function(z,y,N,L){try{fn=0;var I=ze(z,y,N,L);return zl=null,I}catch(W){if(W===El||W===gi)throw W;var ve=vt(29,W,null,z.mode);return ve.lanes=L,ve.return=z,ve}}}var Wa=_s(!0),Os=_s(!1),ga=!1;function yr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=fi(e),hs(e,null,a),t}return si(e,l,t,a),fi(e)}function mn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Eo(e,a)}}function Sr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jr=!1;function pn(){if(jr){var e=jl;if(e!==null)throw e}}function hn(e,t,a,l){jr=!1;var n=e.updateQueue;ga=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var v=d,w=v.next;v.next=null,r===null?i=w:r.next=w,r=v;var U=e.alternate;U!==null&&(U=U.updateQueue,d=U.lastBaseUpdate,d!==r&&(d===null?U.firstBaseUpdate=w:d.next=w,U.lastBaseUpdate=v))}if(i!==null){var Y=n.baseState;r=0,U=w=v=null,d=i;do{var A=d.lane&-536870913,R=A!==d.lane;if(R?(fe&A)===A:(l&A)===A){A!==0&&A===Sl&&(jr=!0),U!==null&&(U=U.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var $=e,P=d;A=t;var ze=a;switch(P.tag){case 1:if($=P.payload,typeof $=="function"){Y=$.call(ze,Y,A);break e}Y=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=P.payload,A=typeof $=="function"?$.call(ze,Y,A):$,A==null)break e;Y=E({},Y,A);break e;case 2:ga=!0}}A=d.callback,A!==null&&(e.flags|=64,R&&(e.flags|=8192),R=n.callbacks,R===null?n.callbacks=[A]:R.push(A))}else R={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},U===null?(w=U=R,v=Y):U=U.next=R,r|=A;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;R=d,d=R.next,R.next=null,n.lastBaseUpdate=R,n.shared.pending=null}}while(!0);U===null&&(v=Y),n.baseState=v,n.firstBaseUpdate=w,n.lastBaseUpdate=U,i===null&&(n.shared.lanes=0),za|=r,e.lanes=r,e.memoizedState=Y}}function Ms(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ds(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ms(a[e],t)}var Tl=j(null),Si=j(0);function Us(e,t){e=ua,Z(Si,e),Z(Tl,t),ua=e|t.baseLanes}function Er(){Z(Si,ua),Z(Tl,Tl.current)}function zr(){ua=Si.current,q(Tl),q(Si)}var gt=j(null),Rt=null;function xa(e){var t=e.alternate;Z(He,He.current&1),Z(gt,e),Rt===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(Rt=e)}function Tr(e){Z(He,He.current),Z(gt,e),Rt===null&&(Rt=e)}function Hs(e){e.tag===22?(Z(He,He.current),Z(gt,e),Rt===null&&(Rt=e)):Sa()}function Sa(){Z(He,He.current),Z(gt,gt.current)}function bt(e){q(gt),Rt===e&&(Rt=null),q(He)}var He=j(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_c(a)||Oc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ne=null,je=null,qe=null,Ei=!1,Nl=!1,Fa=!1,zi=0,vn=0,wl=null,Eh=0;function Me(){throw Error(c(321))}function Nr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function wr(e,t,a,l,n,i){return It=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?xf:Gr,Fa=!1,i=a(l,n),Fa=!1,Nl&&(i=Bs(t,a,l,n)),Ls(e),i}function Ls(e){D.H=yn;var t=je!==null&&je.next!==null;if(It=0,qe=je=ne=null,Ei=!1,vn=0,wl=null,t)throw Error(c(300));e===null||Ge||(e=e.dependencies,e!==null&&pi(e)&&(Ge=!0))}function Bs(e,t,a,l){ne=e;var n=0;do{if(Nl&&(wl=null),vn=0,Nl=!1,25<=n)throw Error(c(301));if(n+=1,qe=je=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Sf,i=t(a,l)}while(Nl);return i}function zh(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?gn(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ne.flags|=1024),t}function Cr(){var e=zi!==0;return zi=0,e}function Ar(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Rr(e){if(Ei){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ei=!1}It=0,qe=je=ne=null,Nl=!1,vn=zi=0,wl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ne.memoizedState=qe=e:qe=qe.next=e,qe}function Le(){if(je===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=qe===null?ne.memoizedState:qe.next;if(t!==null)qe=t,je=e;else{if(e===null)throw ne.alternate===null?Error(c(467)):Error(c(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},qe===null?ne.memoizedState=qe=e:qe=qe.next=e}return qe}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var t=vn;return vn+=1,wl===null&&(wl=[]),e=Cs(wl,e,t),t=ne,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?xf:Gr),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===X)return Ie(e)}throw Error(c(438,String(e)))}function _r(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ti(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=he;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Le();return Or(t,je,e)}function Or(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=r=null,v=null,w=t,U=!1;do{var Y=w.lane&-536870913;if(Y!==w.lane?(fe&Y)===Y:(It&Y)===Y){var A=w.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),Y===Sl&&(U=!0);else if((It&A)===A){w=w.next,A===Sl&&(U=!0);continue}else Y={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(d=v=Y,r=i):v=v.next=Y,ne.lanes|=A,za|=A;Y=w.action,Fa&&a(i,Y),i=w.hasEagerState?w.eagerState:a(i,Y)}else A={lane:Y,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(d=v=A,r=i):v=v.next=A,ne.lanes|=Y,za|=Y;w=w.next}while(w!==null&&w!==t);if(v===null?r=i:v.next=d,!ht(i,e.memoizedState)&&(Ge=!0,U&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=v,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mr(e){var t=Le(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);ht(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ks(e,t,a){var l=ne,n=Le(),i=me;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var r=!ht((je||n).memoizedState,a);if(r&&(n.memoizedState=a,Ge=!0),n=n.queue,Hr(Gs.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},qs.bind(null,l,n,a,t),null),Te===null)throw Error(c(349));i||(It&127)!==0||Ys(l,t,a)}return a}function Ys(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=Ti(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qs(e,t,a,l){t.value=a,t.getSnapshot=l,Xs(t)&&Qs(e)}function Gs(e,t,a){return a(function(){Xs(t)&&Qs(e)})}function Xs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Qs(e){var t=Ga(e,2);t!==null&&ft(t,e,2)}function Dr(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Fa){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Vs(e,t,a,l){return e.baseState=a,Or(e,je,typeof l=="function"?l:Pt)}function Th(e,t,a,l,n){if(Ri(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};D.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Zs(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Zs(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=D.T,r={};D.T=r;try{var d=a(n,l),v=D.S;v!==null&&v(r,d),Js(e,t,d)}catch(w){Ur(e,t,w)}finally{i!==null&&r.types!==null&&(i.types=r.types),D.T=i}}else try{i=a(n,l),Js(e,t,i)}catch(w){Ur(e,t,w)}}function Js(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ks(e,t,l)},function(l){return Ur(e,t,l)}):Ks(e,t,a)}function Ks(e,t,a){t.status="fulfilled",t.value=a,$s(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Zs(e,a)))}function Ur(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,$s(t),t=t.next;while(t!==l)}e.action=null}function $s(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ws(e,t){return t}function Fs(e,t){if(me){var a=Te.formState;if(a!==null){e:{var l=ne;if(me){if(Ne){t:{for(var n=Ne,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ne=_t(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},a.queue=l,a=gf.bind(null,ne,l),l.dispatch=a,l=Dr(!1),i=qr.bind(null,ne,!1,l.queue),l=nt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Th.bind(null,ne,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Is(e){var t=Le();return Ps(t,je,e)}function Ps(e,t,a){if(t=Or(e,t,Ws)[0],e=wi(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=gn(t)}catch(r){throw r===El?gi:r}else l=t;t=Le();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,Cl(9,{destroy:void 0},Nh.bind(null,n,a),null)),[l,i,e]}function Nh(e,t){e.action=t}function ef(e){var t=Le(),a=je;if(a!==null)return Ps(t,a,e);Le(),t=t.memoizedState,a=Le();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=Ti(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function tf(){return Le().memoizedState}function Ci(e,t,a,l){var n=nt();ne.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ai(e,t,a,l){var n=Le();l=l===void 0?null:l;var i=n.memoizedState.inst;je!==null&&l!==null&&Nr(l,je.memoizedState.deps)?n.memoizedState=Cl(t,i,a,l):(ne.flags|=e,n.memoizedState=Cl(1|t,i,a,l))}function af(e,t){Ci(8390656,8,e,t)}function Hr(e,t){Ai(2048,8,e,t)}function wh(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=Ti(),ne.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function lf(e){var t=Le().memoizedState;return wh({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function nf(e,t){return Ai(4,2,e,t)}function uf(e,t){return Ai(4,4,e,t)}function rf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cf(e,t,a){a=a!=null?a.concat([e]):null,Ai(4,4,rf.bind(null,t,e),a)}function Lr(){}function of(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Nr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function sf(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Nr(t,l[1]))return l[0];if(l=e(),Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function Br(e,t,a){return a===void 0||(It&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=fd(),ne.lanes|=e,za|=e,a)}function ff(e,t,a,l){return ht(a,t)?a:Tl.current!==null?(e=Br(e,a,l),ht(e,t)||(Ge=!0),e):(It&42)===0||(It&1073741824)!==0&&(fe&261930)===0?(Ge=!0,e.memoizedState=a):(e=fd(),ne.lanes|=e,za|=e,t)}function df(e,t,a,l,n){var i=g.p;g.p=i!==0&&8>i?i:8;var r=D.T,d={};D.T=d,qr(e,!1,t,a);try{var v=n(),w=D.S;if(w!==null&&w(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var U=jh(v,l);bn(e,t,U,St(e))}else bn(e,t,l,St(e))}catch(Y){bn(e,t,{then:function(){},status:"rejected",reason:Y},St())}finally{g.p=i,r!==null&&d.types!==null&&(r.types=d.types),D.T=r}}function Ch(){}function kr(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=mf(e).queue;df(e,n,t,V,a===null?Ch:function(){return pf(e),a(l)})}function mf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pf(e){var t=mf(e);t.next===null&&(t=e.alternate.memoizedState),bn(e,t.next.queue,{},St())}function Yr(){return Ie(Un)}function hf(){return Le().memoizedState}function vf(){return Le().memoizedState}function Ah(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=ba(a);var l=ya(t,e,a);l!==null&&(ft(l,t,a),mn(l,t,a)),t={cache:hr()},e.payload=t;return}t=t.return}}function Rh(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ri(e)?bf(t,a):(a=nr(e,t,a,l),a!==null&&(ft(a,e,l),yf(a,t,l)))}function gf(e,t,a){var l=St();bn(e,t,a,l)}function bn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ri(e))bf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,d=i(r,a);if(n.hasEagerState=!0,n.eagerState=d,ht(d,r))return si(e,t,n,0),Te===null&&oi(),!1}catch{}if(a=nr(e,t,n,l),a!==null)return ft(a,e,l),yf(a,t,l),!0}return!1}function qr(e,t,a,l){if(l={lane:2,revertLane:yc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ri(e)){if(t)throw Error(c(479))}else t=nr(e,a,l,2),t!==null&&ft(t,e,2)}function Ri(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function bf(e,t){Nl=Ei=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Eo(e,a)}}var yn={readContext:Ie,use:Ni,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};yn.useEffectEvent=Me;var xf={readContext:Ie,use:Ni,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:af,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ci(4194308,4,rf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){Ci(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var l=e();if(Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=nt();if(a!==void 0){var n=a(t);if(Fa){sa(!0);try{a(t)}finally{sa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Rh.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Dr(e);var t=e.queue,a=gf.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Lr,useDeferredValue:function(e,t){var a=nt();return Br(a,e,t)},useTransition:function(){var e=Dr(!1);return e=df.bind(null,ne,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ne,n=nt();if(me){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Te===null)throw Error(c(349));(fe&127)!==0||Ys(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,af(Gs.bind(null,l,i,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},qs.bind(null,l,i,a,t),null),a},useId:function(){var e=nt(),t=Te.identifierPrefix;if(me){var a=qt,l=Yt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=zi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Eh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yr,useFormState:Fs,useActionState:Fs,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=qr.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:_r,useCacheRefresh:function(){return nt().memoizedState=Ah.bind(null,ne)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((be&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Gr={readContext:Ie,use:Ni,useCallback:of,useContext:Ie,useEffect:Hr,useImperativeHandle:cf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:sf,useReducer:wi,useRef:tf,useState:function(){return wi(Pt)},useDebugValue:Lr,useDeferredValue:function(e,t){var a=Le();return ff(a,je.memoizedState,e,t)},useTransition:function(){var e=wi(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:ks,useId:hf,useHostTransitionStatus:Yr,useFormState:Is,useActionState:Is,useOptimistic:function(e,t){var a=Le();return Vs(a,je,e,t)},useMemoCache:_r,useCacheRefresh:vf};Gr.useEffectEvent=lf;var Sf={readContext:Ie,use:Ni,useCallback:of,useContext:Ie,useEffect:Hr,useImperativeHandle:cf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:sf,useReducer:Mr,useRef:tf,useState:function(){return Mr(Pt)},useDebugValue:Lr,useDeferredValue:function(e,t){var a=Le();return je===null?Br(a,e,t):ff(a,je.memoizedState,e,t)},useTransition:function(){var e=Mr(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:ks,useId:hf,useHostTransitionStatus:Yr,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var a=Le();return je!==null?Vs(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_r,useCacheRefresh:vf};Sf.useEffectEvent=lf;function Xr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),mn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),mn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(ft(t,e,a),mn(t,e,a))}};function jf(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!nn(a,l)||!nn(n,i):!0}function Ef(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Qr.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function zf(e){ci(e)}function Tf(e){console.error(e)}function Nf(e){ci(e)}function _i(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function wf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Vr(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){_i(e,t)},a}function Cf(e){return e=ba(e),e.tag=3,e}function Af(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){wf(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){wf(t,a,l),typeof n!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function _h(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,n,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?Xi():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===bi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),vc(e,l,n)),!1;case 22:return a.flags|=65536,l===bi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),vc(e,l,n)),!1}throw Error(c(435,a.tag))}return vc(e,l,n),Xi(),!1}if(me)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==sr&&(e=Error(c(422),{cause:l}),cn(Nt(e,a)))):(l!==sr&&(t=Error(c(423),{cause:l}),cn(Nt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Nt(l,a),n=Vr(e.stateNode,l,n),Sr(e,n),De!==4&&(De=2)),!1;var i=Error(c(520),{cause:l});if(i=Nt(i,a),wn===null?wn=[i]:wn.push(i),De!==4&&(De=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Vr(a.stateNode,l,e),Sr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ta===null||!Ta.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Cf(n),Af(n,e,a,l),Sr(a,n),!1}a=a.return}while(a!==null);return!1}var Zr=Error(c(461)),Ge=!1;function Pe(e,t,a,l){t.child=e===null?Os(t,null,a,l):Wa(t,e.child,a,l)}function Rf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var d in l)d!=="ref"&&(r[d]=l[d])}else r=l;return Za(t),l=wr(e,t,a,r,i,n),d=Cr(),e!==null&&!Ge?(Ar(e,t,n),ea(e,t,n)):(me&&d&&cr(t),t.flags|=1,Pe(e,t,l,n),t.child)}function _f(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ir(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Of(e,t,i,l,n)):(e=di(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ec(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:nn,a(r,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(nn(i,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=i,ec(e,n))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,ea(e,t,n)}return Jr(e,t,a,l,n)}function Mf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Df(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,i!==null?i.cachePool:null),i!==null?Us(t,i):Er(),Hs(t);else return l=t.lanes=536870912,Df(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(vi(t,i.cachePool),Us(t,i),Sa(),t.memoizedState=null):(e!==null&&vi(t,null),Er(),Sa());return Pe(e,t,n,a),t.child}function xn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Df(e,t,a,l,n){var i=gr();return i=i===null?null:{parent:Ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&vi(t,null),Er(),Hs(t),e!==null&&xl(e,t,l,!0),t.childLanes=n,null}function Oi(e,t){return t=Di({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uf(e,t,a){return Wa(t,e.child,null,a),e=Oi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Oh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=Oi(t,l),t.lanes=536870912,xn(null,e);if(Tr(t),(e=Ne)?(e=Jd(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=gs(e),a.return=t,t.child=a,Fe=t,Ne=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Oi(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Tr(t),n)if(t.flags&256)t.flags&=-257,t=Uf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ge||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Ge||n){if(l=Te,l!==null&&(r=zo(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,Ga(e,r),ft(l,e,r),Zr;Xi(),t=Uf(e,t,a)}else e=i.treeContext,Ne=_t(r.nextSibling),Fe=t,me=!0,pa=null,At=!1,e!==null&&xs(t,e),t=Oi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Mi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Jr(e,t,a,l,n){return Za(t),a=wr(e,t,a,l,void 0,n),l=Cr(),e!==null&&!Ge?(Ar(e,t,n),ea(e,t,n)):(me&&l&&cr(t),t.flags|=1,Pe(e,t,a,n),t.child)}function Hf(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=Bs(t,l,a,n),Ls(e),l=Cr(),e!==null&&!Ge?(Ar(e,t,i),ea(e,t,i)):(me&&l&&cr(t),t.flags|=1,Pe(e,t,a,i),t.child)}function Lf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=vl,r=a.contextType;typeof r=="object"&&r!==null&&(i=Ie(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},yr(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?Ie(r):vl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Xr(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Qr.enqueueReplaceState(i,i.state,null),hn(t,l,i,n),pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=Ia(a,d);i.props=v;var w=i.context,U=a.contextType;r=vl,typeof U=="object"&&U!==null&&(r=Ie(U));var Y=a.getDerivedStateFromProps;U=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||w!==r)&&Ef(t,i,l,r),ga=!1;var A=t.memoizedState;i.state=A,hn(t,l,i,n),pn(),w=t.memoizedState,d||A!==w||ga?(typeof Y=="function"&&(Xr(t,a,Y,l),w=t.memoizedState),(v=ga||jf(t,a,v,l,A,w,r))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=r,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,xr(e,t),r=t.memoizedProps,U=Ia(a,r),i.props=U,Y=t.pendingProps,A=i.context,w=a.contextType,v=vl,typeof w=="object"&&w!==null&&(v=Ie(w)),d=a.getDerivedStateFromProps,(w=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==Y||A!==v)&&Ef(t,i,l,v),ga=!1,A=t.memoizedState,i.state=A,hn(t,l,i,n),pn();var R=t.memoizedState;r!==Y||A!==R||ga||e!==null&&e.dependencies!==null&&pi(e.dependencies)?(typeof d=="function"&&(Xr(t,a,d,l),R=t.memoizedState),(U=ga||jf(t,a,U,l,A,R,v)||e!==null&&e.dependencies!==null&&pi(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,R,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,R,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=R),i.props=l,i.state=R,i.context=v,l=U):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Mi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Wa(t,e.child,null,n),t.child=Wa(t,null,a,n)):Pe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function Bf(e,t,a,l){return Qa(),t.flags|=256,Pe(e,t,a,l),t.child}var Kr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $r(e){return{baseLanes:e,cachePool:Ns()}}function Wr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function kf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?xa(t):Sa(),(e=Ne)?(e=Jd(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=gs(e),a.return=t,t.child=a,Fe=t,Ne=null)):e=null,e===null)throw ha(t);return Oc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(Sa(),n=t.mode,d=Di({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=$r(a),l.childLanes=Wr(e,r,a),t.memoizedState=Kr,xn(null,l)):(xa(t),Fr(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(xa(t),t.flags&=-257,t=Ir(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),d=l.fallback,n=t.mode,l=Di({mode:"visible",children:l.children},n),d=Xa(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Wa(t,e.child,null,a),l=t.child,l.memoizedState=$r(a),l.childLanes=Wr(e,r,a),t.memoizedState=Kr,t=xn(null,l));else if(xa(t),Oc(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r)var w=r.dgst;r=w,l=Error(c(419)),l.stack="",l.digest=r,cn({value:l,source:null,stack:null}),t=Ir(e,t,a)}else if(Ge||xl(e,t,a,!1),r=(a&e.childLanes)!==0,Ge||r){if(r=Te,r!==null&&(l=zo(r,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Ga(e,l),ft(r,e,l),Zr;_c(d)||Xi(),t=Ir(e,t,a)}else _c(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Ne=_t(d.nextSibling),Fe=t,me=!0,pa=null,At=!1,e!==null&&xs(t,e),t=Fr(t,l.children),t.flags|=4096);return t}return n?(Sa(),d=l.fallback,n=t.mode,v=e.child,w=v.sibling,l=Kt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?d=Kt(w,d):(d=Xa(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,xn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=$r(a):(n=d.cachePool,n!==null?(v=Ye._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=Ns(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Wr(e,r,a),t.memoizedState=Kr,xn(e.child,l)):(xa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Fr(e,t){return t=Di({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Di(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function Ir(e,t,a){return Wa(t,e.child,null,a),e=Fr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),mr(e.return,t,a)}function Pr(e,t,a,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function qf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=He.current,d=(r&2)!==0;if(d?(r=r&1|2,t.flags|=128):r&=1,Z(He,r),Pe(e,t,l,a),l=me?rn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,a,t);else if(e.tag===19)Yf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ji(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Pr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ji(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Pr(t,!0,a,null,i,l);break;case"together":Pr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pi(e)))}function Mh(e,t,a){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),va(t,Ye,e.memoizedState.cache),Qa();break;case 27:case 5:Vl(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?kf(e,t,a):(xa(t),e=ea(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return qf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Z(He,He.current),l)break;return null;case 22:return t.lanes=0,Mf(e,t,a,t.pendingProps);case 24:va(t,Ye,e.memoizedState.cache)}return ea(e,t,a)}function Gf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!ec(e,a)&&(t.flags&128)===0)return Ge=!1,Mh(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,me&&(t.flags&1048576)!==0&&ys(t,rn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")ir(e)?(l=Ia(e,l),t.tag=1,t=Lf(null,t,e,l,a)):(t.tag=0,t=Jr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===F){t.tag=11,t=Rf(null,t,e,l,a);break e}else if(n===G){t.tag=14,t=_f(null,t,e,l,a);break e}}throw t=ke(e)||e,Error(c(306,t,""))}}return t;case 0:return Jr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ia(l,t.pendingProps),Lf(e,t,l,n,a);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,xr(e,t),hn(t,l,null,a);var r=t.memoizedState;if(l=r.cache,va(t,Ye,l),l!==i.cache&&pr(t,[Ye],a,!0),pn(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bf(e,t,l,a);break e}else if(l!==n){n=Nt(Error(c(424)),t),cn(n),t=Bf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ne=_t(e.firstChild),Fe=t,me=!0,pa=null,At=!0,a=Os(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===n){t=ea(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Mi(e,t),e===null?(a=Pd(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=Wi(ce.current).createElement(a),l[We]=t,l[it]=e,et(l,a,e),Ze(l),t.stateNode=l):t.memoizedState=Pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vl(t),e===null&&me&&(l=t.stateNode=Wd(t.type,t.pendingProps,ce.current),Fe=t,At=!0,n=Ne,Aa(t.type)?(Mc=n,Ne=_t(l.firstChild)):Ne=n),Pe(e,t,t.pendingProps.children,a),Mi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=l=Ne)&&(l=ov(l,t.type,t.pendingProps,At),l!==null?(t.stateNode=l,Fe=t,Ne=_t(l.firstChild),At=!1,n=!0):n=!1),n||ha(t)),Vl(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Cc(n,i)?l=null:r!==null&&Cc(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=wr(e,t,zh,null,null,a),Un._currentValue=n),Mi(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=Ne)&&(a=sv(a,t.pendingProps,At),a!==null?(t.stateNode=a,Fe=t,Ne=null,e=!0):e=!1),e||ha(t)),null;case 13:return kf(e,t,a);case 4:return lt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wa(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return Rf(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,va(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Ie(n),l=l(n),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return _f(e,t,t.type,t.pendingProps,a);case 15:return Of(e,t,t.type,t.pendingProps,a);case 19:return qf(e,t,a);case 31:return Oh(e,t,a);case 22:return Mf(e,t,a,t.pendingProps);case 24:return Za(t),l=Ie(Ye),e===null?(n=gr(),n===null&&(n=Te,i=hr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},yr(t),va(t,Ye,n)):((e.lanes&a)!==0&&(xr(e,t),hn(t,null,null,a),pn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),va(t,Ye,l)):(l=i.cache,va(t,Ye,l),l!==n.cache&&pr(t,[Ye],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ta(e){e.flags|=4}function tc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(hd())e.flags|=8192;else throw $a=bi,br}else e.flags&=-16777217}function Xf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nm(t))if(hd())e.flags|=8192;else throw $a=bi,br}function Ui(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?So():536870912,e.lanes|=t,Ol|=t)}function Sn(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Dh(e,t,a){var l=t.pendingProps;switch(or(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Ye),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fr())),we(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(we(t),Xf(t,i)):(we(t),tc(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),we(t),Xf(t,i)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),we(t),tc(t,n,e,l,a)),null;case 27:if(Zn(t),a=ce.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return we(t),null}e=K.current,yl(t)?Ss(t):(e=Wd(n,l,a),t.stateNode=e,ta(t))}return we(t),null;case 5:if(Zn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return we(t),null}if(i=K.current,yl(t))Ss(t);else{var r=Wi(ce.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[We]=t,i[it]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(et(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return we(t),tc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=ce.current,yl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||kd(e.nodeValue,a)),e||ha(t,!0)}else e=Wi(e).createTextNode(l),e[We]=t,t.stateNode=e}return we(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else a=fr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return we(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),n=!1}else n=fr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ui(t,t.updateQueue),we(t),null);case 4:return Ue(),e===null&&Ec(t.stateNode.containerInfo),we(t),null;case 10:return Ft(t.type),we(t),null;case 19:if(q(He),l=t.memoizedState,l===null)return we(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Sn(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ji(e),i!==null){for(t.flags|=128,Sn(l,!1),e=i.updateQueue,t.updateQueue=e,Ui(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)vs(a,e),a=a.sibling;return Z(He,He.current&1|2),me&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&dt()>Yi&&(t.flags|=128,n=!0,Sn(l,!1),t.lanes=4194304)}else{if(!n)if(e=ji(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ui(t,e),Sn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!me)return we(t),null}else 2*dt()-l.renderingStartTime>Yi&&a!==536870912&&(t.flags|=128,n=!0,Sn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=dt(),e.sibling=null,a=He.current,Z(He,n?a&1|2:a&1),me&&$t(t,l.treeForkCount),e):(we(t),null);case 22:case 23:return bt(t),zr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),a=t.updateQueue,a!==null&&Ui(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&q(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Ye),we(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Uh(e,t){switch(or(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Ye),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(He),null;case 4:return Ue(),null;case 10:return Ft(t.type),null;case 22:case 23:return bt(t),zr(),e!==null&&q(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Ye),null;case 25:return null;default:return null}}function Qf(e,t){switch(or(t),t.tag){case 3:Ft(Ye),Ue();break;case 26:case 27:case 5:Zn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:q(He);break;case 10:Ft(t.type);break;case 22:case 23:bt(t),zr(),e!==null&&q(Ja);break;case 24:Ft(Ye)}}function jn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(d){Se(t,t.return,d)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,d=r.destroy;if(d!==void 0){r.destroy=void 0,n=t;var v=a,w=d;try{w()}catch(U){Se(n,v,U)}}}l=l.next}while(l!==i)}}catch(U){Se(t,t.return,U)}}function Vf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ds(t,a)}catch(l){Se(e,e.return,l)}}}function Zf(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function En(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Se(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Se(e,t,n)}else a.current=null}function Jf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Se(e,e.return,n)}}function ac(e,t,a){try{var l=e.stateNode;lv(l,e.type,a,t),l[it]=t}catch(n){Se(e,e.return,n)}}function Kf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,a),e=e.sibling;e!==null;)nc(e,t,a),e=e.sibling}function Hi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hi(e,t,a),e=e.sibling;e!==null;)Hi(e,t,a),e=e.sibling}function $f(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,l,a),t[We]=e,t[it]=a}catch(i){Se(e,e.return,i)}}var aa=!1,Xe=!1,ic=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Hh(e,t){if(e=e.containerInfo,Nc=lu,e=rs(e),Iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,d=-1,v=-1,w=0,U=0,Y=e,A=null;t:for(;;){for(var R;Y!==a||n!==0&&Y.nodeType!==3||(d=r+n),Y!==i||l!==0&&Y.nodeType!==3||(v=r+l),Y.nodeType===3&&(r+=Y.nodeValue.length),(R=Y.firstChild)!==null;)A=Y,Y=R;for(;;){if(Y===e)break t;if(A===a&&++w===n&&(d=r),A===i&&++U===l&&(v=r),(R=Y.nextSibling)!==null)break;Y=A,A=Y.parentNode}Y=R}a=d===-1||v===-1?null:{start:d,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(wc={focusedElem:e,selectionRange:a},lu=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=Ia(a.type,n);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Se(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Rc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Ff(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&jn(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){Se(a,a.return,r)}else{var n=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Se(a,a.return,r)}}l&64&&Vf(a),l&512&&En(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ds(e,t)}catch(r){Se(a,a.return,r)}}break;case 27:t===null&&l&4&&$f(a);case 26:case 5:na(e,a),t===null&&l&4&&Jf(a),l&512&&En(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&ed(e,a);break;case 13:na(e,a),l&4&&td(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vh.bind(null,a),fv(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Xe,n=aa;var i=Xe;aa=l,(Xe=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Xe=i}break;case 30:break;default:na(e,a)}}function If(e){var t=e.alternate;t!==null&&(e.alternate=null,If(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Uu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,rt=!1;function la(e,t,a){for(a=a.child;a!==null;)Pf(e,t,a),a=a.sibling}function Pf(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Zl,a)}catch{}switch(a.tag){case 26:Xe||Gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Gt(a,t);var l=_e,n=rt;Aa(a.type)&&(_e=a.stateNode,rt=!1),la(e,t,a),On(a.stateNode),_e=l,rt=n;break;case 5:Xe||Gt(a,t);case 6:if(l=_e,n=rt,_e=null,la(e,t,a),_e=l,rt=n,_e!==null)if(rt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(i){Se(a,t,i)}else try{_e.removeChild(a.stateNode)}catch(i){Se(a,t,i)}break;case 18:_e!==null&&(rt?(e=_e,Vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Vd(_e,a.stateNode));break;case 4:l=_e,n=rt,_e=a.stateNode.containerInfo,rt=!0,la(e,t,a),_e=l,rt=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Xe||ja(4,a,t),la(e,t,a);break;case 1:Xe||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Zf(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Xe=(l=Xe)||a.memoizedState!==null,la(e,t,a),Xe=l;break;default:la(e,t,a)}}function ed(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){Se(t,t.return,a)}}}function td(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){Se(t,t.return,a)}}function Lh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wf),t;default:throw Error(c(435,e.tag))}}function Li(e,t){var a=Lh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Zh.bind(null,e,l);l.then(n,n)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,d=r;e:for(;d!==null;){switch(d.tag){case 27:if(Aa(d.type)){_e=d.stateNode,rt=!1;break e}break;case 5:_e=d.stateNode,rt=!1;break e;case 3:case 4:_e=d.stateNode.containerInfo,rt=!0;break e}d=d.return}if(_e===null)throw Error(c(160));Pf(i,r,n),_e=null,rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ad(t,e),t=t.sibling}var Ut=null;function ad(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ot(e),l&4&&(ja(3,e,e.return),jn(3,e),ja(5,e,e.return));break;case 1:ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[$l]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),et(i,l,a),i[We]=e,Ze(i),l=i;break e;case"link":var r=am("link","href",n).get(l+(a.href||""));if(r){for(var d=0;d<r.length;d++)if(i=r[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;case"meta":if(r=am("meta","content",n).get(l+(a.content||""))){for(d=0;d<r.length;d++)if(i=r[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[We]=e,Ze(i),l=i}e.stateNode=l}else lm(n,e.type,e.stateNode);else e.stateNode=tm(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?lm(n,e.type,e.stateNode):tm(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ac(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),a!==null&&l&4&&ac(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{ol(n,"")}catch($){Se(e,e.return,$)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,ac(e,n,a!==null?a.memoizedProps:n)),l&1024&&(ic=!0);break;case 6:if(ct(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch($){Se(e,e.return,$)}}break;case 3:if(Pi=null,n=Ut,Ut=Fi(t.containerInfo),ct(t,e),Ut=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch($){Se(e,e.return,$)}ic&&(ic=!1,ld(e));break;case 4:l=Ut,Ut=Fi(e.stateNode.containerInfo),ct(t,e),ot(e),Ut=l;break;case 12:ct(t,e),ot(e);break;case 31:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Li(e,l)));break;case 13:ct(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ki=dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Li(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,w=aa,U=Xe;if(aa=w||n,Xe=U||v,ct(t,e),Xe=U,aa=w,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||aa||Xe||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=v.stateNode;var Y=v.memoizedProps.style,A=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch($){Se(v,v.return,$)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch($){Se(v,v.return,$)}}}else if(t.tag===18){if(a===null){v=t;try{var R=v.stateNode;n?Zd(R,!0):Zd(v.stateNode,!1)}catch($){Se(v,v.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Li(e,a))));break;case 19:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Li(e,l)));break;case 30:break;case 21:break;default:ct(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Kf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=lc(e);Hi(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(ol(r,""),a.flags&=-33);var d=lc(e);Hi(e,d,r);break;case 3:case 4:var v=a.stateNode.containerInfo,w=lc(e);nc(e,w,v);break;default:throw Error(c(161))}}catch(U){Se(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ff(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),Pa(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Zf(t,t.return,a),Pa(t);break;case 27:On(t.stateNode);case 26:case 5:Gt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),jn(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){Se(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Ms(v[n],d)}catch(w){Se(l,l.return,w)}}a&&r&64&&Vf(i),En(i,i.return);break;case 27:$f(i);case 26:case 5:ia(n,i,a),a&&l===null&&r&4&&Jf(i),En(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&r&4&&ed(n,i);break;case 13:ia(n,i,a),a&&r&4&&td(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),En(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&on(a))}function rc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e))}function Ht(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nd(e,t,a,l),t=t.sibling}function nd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,a,l),n&2048&&jn(9,t);break;case 1:Ht(e,t,a,l);break;case 3:Ht(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&on(e)));break;case 12:if(n&2048){Ht(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,d=i.onPostCommit;typeof d=="function"&&d(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Se(t,t.return,v)}}else Ht(e,t,a,l);break;case 31:Ht(e,t,a,l);break;case 13:Ht(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(e,t,a,l):zn(e,t):i._visibility&2?Ht(e,t,a,l):(i._visibility|=2,Al(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&uc(r,t);break;case 24:Ht(e,t,a,l),n&2048&&rc(t.alternate,t);break;default:Ht(e,t,a,l)}}function Al(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,d=a,v=l,w=r.flags;switch(r.tag){case 0:case 11:case 15:Al(i,r,d,v,n),jn(8,r);break;case 23:break;case 22:var U=r.stateNode;r.memoizedState!==null?U._visibility&2?Al(i,r,d,v,n):zn(i,r):(U._visibility|=2,Al(i,r,d,v,n)),n&&w&2048&&uc(r.alternate,r);break;case 24:Al(i,r,d,v,n),n&&w&2048&&rc(r.alternate,r);break;default:Al(i,r,d,v,n)}t=t.sibling}}function zn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:zn(a,l),n&2048&&uc(l.alternate,l);break;case 24:zn(a,l),n&2048&&rc(l.alternate,l);break;default:zn(a,l)}t=t.sibling}}var Tn=8192;function Rl(e,t,a){if(e.subtreeFlags&Tn)for(e=e.child;e!==null;)id(e,t,a),e=e.sibling}function id(e,t,a){switch(e.tag){case 26:Rl(e,t,a),e.flags&Tn&&e.memoizedState!==null&&Ev(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Rl(e,t,a);break;case 3:case 4:var l=Ut;Ut=Fi(e.stateNode.containerInfo),Rl(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Tn,Tn=16777216,Rl(e,t,a),Tn=l):Rl(e,t,a));break;default:Rl(e,t,a)}}function ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,cd(l,e)}ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rd(e),e=e.sibling}function rd(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):Nn(e);break;default:Nn(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,cd(l,e)}ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Bi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function cd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:on(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Je=l;else e:for(a=e;Je!==null;){l=Je;var n=l.sibling,i=l.return;if(If(l),l===a){Je=null;break e}if(n!==null){n.return=i,Je=n;break e}Je=i}}}var Bh={getCacheForType:function(e){var t=Ie(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ye).controller.signal}},kh=typeof WeakMap=="function"?WeakMap:Map,be=0,Te=null,oe=null,fe=0,xe=0,yt=null,Ea=!1,_l=!1,cc=!1,ua=0,De=0,za=0,el=0,oc=0,xt=0,Ol=0,wn=null,st=null,sc=!1,ki=0,od=0,Yi=1/0,qi=null,Ta=null,Qe=0,Na=null,Ml=null,ra=0,fc=0,dc=null,sd=null,Cn=0,mc=null;function St(){return(be&2)!==0&&fe!==0?fe&-fe:D.T!==null?yc():To()}function fd(){if(xt===0)if((fe&536870912)===0||me){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),xt=e}else xt=536870912;return e=gt.current,e!==null&&(e.flags|=32),xt}function ft(e,t,a){(e===Te&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),wa(e,fe,xt,!1)),Kl(e,a),((be&2)===0||e!==Te)&&(e===Te&&((be&2)===0&&(el|=a),De===4&&wa(e,fe,xt,!1)),Xt(e))}function dd(e,t,a){if((be&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),n=l?Gh(e,t):hc(e,t,!0),i=l;do{if(n===0){_l&&!l&&wa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Yh(a)){n=hc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var d=e;n=wn;var v=d.current.memoizedState.isDehydrated;if(v&&(Dl(d,r).flags|=256),r=hc(d,r,!1),r!==2){if(cc&&!v){d.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),wa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:wa(l,t,xt,!Ea);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=ki+300-dt(),10<n)){if(wa(l,t,xt,!Ea),Fn(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=Xd(md.bind(null,l,a,st,qi,sc,t,xt,el,Ol,Ea,i,"Throttled",-0,0),n);break e}md(l,a,st,qi,sc,t,xt,el,Ol,Ea,i,null,-0,0)}}break}while(!0);Xt(e)}function md(e,t,a,l,n,i,r,d,v,w,U,Y,A,R){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},id(t,i,Y);var $=(i&62914560)===i?ki-dt():(i&4194048)===i?od-dt():0;if($=zv(Y,$),$!==null){ra=i,e.cancelPendingCommit=$(Sd.bind(null,e,t,i,a,l,n,r,d,v,U,Y,null,A,R)),wa(e,i,r,!w);return}}Sd(e,t,i,a,l,n,r,d,v)}function Yh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,a,l){t&=~oc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&jo(e,a,t)}function Gi(){return(be&6)===0?(An(0),!1):!0}function pc(){if(oe!==null){if(xe===0)var e=oe.return;else e=oe,Wt=Va=null,Rr(e),zl=null,fn=0,e=oe;for(;e!==null;)Qf(e.alternate,e),e=e.return;oe=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,pc(),Te=e,oe=a=Kt(e.current,null),fe=t,xe=0,yt=null,Ea=!1,_l=Jl(e,t),cc=!1,Ol=xt=oc=el=za=De=0,st=wn=null,sc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return ua=t,oi(),a}function pd(e,t){ne=null,D.H=yn,t===El||t===gi?(t=As(),xe=3):t===br?(t=As(),xe=4):xe=t===Zr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,oe===null&&(De=1,_i(e,Nt(t,e.current)))}function hd(){var e=gt.current;return e===null?!0:(fe&4194048)===fe?Rt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Rt:!1}function vd(){var e=D.H;return D.H=yn,e===null?yn:e}function gd(){var e=D.A;return D.A=Bh,e}function Xi(){De=4,Ea||(fe&4194048)!==fe&&gt.current!==null||(_l=!0),(za&134217727)===0&&(el&134217727)===0||Te===null||wa(Te,fe,xt,!1)}function hc(e,t,a){var l=be;be|=2;var n=vd(),i=gd();(Te!==e||fe!==t)&&(qi=null,Dl(e,t)),t=!1;var r=De;e:do try{if(xe!==0&&oe!==null){var d=oe,v=yt;switch(xe){case 8:pc(),r=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var w=xe;if(xe=0,yt=null,Ul(e,d,v,w),a&&_l){r=0;break e}break;default:w=xe,xe=0,yt=null,Ul(e,d,v,w)}}qh(),r=De;break}catch(U){pd(e,U)}while(!0);return t&&e.shellSuspendCounter++,Wt=Va=null,be=l,D.H=n,D.A=i,oe===null&&(Te=null,fe=0,oi()),r}function qh(){for(;oe!==null;)bd(oe)}function Gh(e,t){var a=be;be|=2;var l=vd(),n=gd();Te!==e||fe!==t?(qi=null,Yi=dt()+500,Dl(e,t)):_l=Jl(e,t);e:do try{if(xe!==0&&oe!==null){t=oe;var i=yt;t:switch(xe){case 1:xe=0,yt=null,Ul(e,t,i,1);break;case 2:case 9:if(ws(i)){xe=0,yt=null,yd(t);break}t=function(){xe!==2&&xe!==9||Te!==e||(xe=7),Xt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:ws(i)?(xe=0,yt=null,yd(t)):(xe=0,yt=null,Ul(e,t,i,7));break;case 5:var r=null;switch(oe.tag){case 26:r=oe.memoizedState;case 5:case 27:var d=oe;if(r?nm(r):d.stateNode.complete){xe=0,yt=null;var v=d.sibling;if(v!==null)oe=v;else{var w=d.return;w!==null?(oe=w,Qi(w)):oe=null}break t}}xe=0,yt=null,Ul(e,t,i,5);break;case 6:xe=0,yt=null,Ul(e,t,i,6);break;case 8:pc(),De=6;break e;default:throw Error(c(462))}}Xh();break}catch(U){pd(e,U)}while(!0);return Wt=Va=null,D.H=l,D.A=n,be=a,oe!==null?0:(Te=null,fe=0,oi(),De)}function Xh(){for(;oe!==null&&!dp();)bd(oe)}function bd(e){var t=Gf(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Qi(e):oe=t}function yd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hf(a,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=Hf(a,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:Rr(t);default:Qf(a,t),t=oe=vs(t,ua),t=Gf(a,t,ua)}e.memoizedProps=e.pendingProps,t===null?Qi(e):oe=t}function Ul(e,t,a,l){Wt=Va=null,Rr(t),zl=null,fn=0;var n=t.return;try{if(_h(e,n,t,a,fe)){De=1,_i(e,Nt(a,e.current)),oe=null;return}}catch(i){if(n!==null)throw oe=n,i;De=1,_i(e,Nt(a,e.current)),oe=null;return}t.flags&32768?(me||l===1?e=!0:_l||(fe&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),xd(t,e)):Qi(t)}function Qi(e){var t=e;do{if((t.flags&32768)!==0){xd(t,Ea);return}e=t.return;var a=Dh(t.alternate,t,ua);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);De===0&&(De=5)}function xd(e,t){do{var a=Uh(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);De=6,oe=null}function Sd(e,t,a,l,n,i,r,d,v){e.cancelPendingCommit=null;do Vi();while(Qe!==0);if((be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=lr,jp(e,a,i,r,d,v),e===Te&&(oe=Te=null,fe=0),Ml=t,Na=e,ra=a,fc=i,dc=n,sd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jh(Jn,function(){return Nd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=g.p,g.p=2,r=be,be|=4;try{Hh(e,t,a)}finally{be=r,g.p=n,D.T=l}}Qe=1,jd(),Ed(),zd()}}function jd(){if(Qe===1){Qe=0;var e=Na,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=g.p;g.p=2;var n=be;be|=4;try{ad(t,e);var i=wc,r=rs(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(r!==d&&d&&d.ownerDocument&&us(d.ownerDocument.documentElement,d)){if(v!==null&&Iu(d)){var w=v.start,U=v.end;if(U===void 0&&(U=w),"selectionStart"in d)d.selectionStart=w,d.selectionEnd=Math.min(U,d.value.length);else{var Y=d.ownerDocument||document,A=Y&&Y.defaultView||window;if(A.getSelection){var R=A.getSelection(),$=d.textContent.length,P=Math.min(v.start,$),ze=v.end===void 0?P:Math.min(v.end,$);!R.extend&&P>ze&&(r=ze,ze=P,P=r);var z=is(d,P),y=is(d,ze);if(z&&y&&(R.rangeCount!==1||R.anchorNode!==z.node||R.anchorOffset!==z.offset||R.focusNode!==y.node||R.focusOffset!==y.offset)){var N=Y.createRange();N.setStart(z.node,z.offset),R.removeAllRanges(),P>ze?(R.addRange(N),R.extend(y.node,y.offset)):(N.setEnd(y.node,y.offset),R.addRange(N))}}}}for(Y=[],R=d;R=R.parentNode;)R.nodeType===1&&Y.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<Y.length;d++){var L=Y[d];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}lu=!!Nc,wc=Nc=null}finally{be=n,g.p=l,D.T=a}}e.current=t,Qe=2}}function Ed(){if(Qe===2){Qe=0;var e=Na,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=g.p;g.p=2;var n=be;be|=4;try{Ff(e,t.alternate,t)}finally{be=n,g.p=l,D.T=a}}Qe=3}}function zd(){if(Qe===4||Qe===3){Qe=0,mp();var e=Na,t=Ml,a=ra,l=sd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Ml=Na=null,Td(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ta=null),Mu(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=g.p,g.p=2,D.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var d=l[r];i(d.value,{componentStack:d.stack})}}finally{D.T=t,g.p=n}}(ra&3)!==0&&Vi(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===mc?Cn++:(Cn=0,mc=e):Cn=0,An(0)}}function Td(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,on(t)))}function Vi(){return jd(),Ed(),zd(),Nd()}function Nd(){if(Qe!==5)return!1;var e=Na,t=fc;fc=0;var a=Mu(ra),l=D.T,n=g.p;try{g.p=32>a?32:a,D.T=null,a=dc,dc=null;var i=Na,r=ra;if(Qe=0,Ml=Na=null,ra=0,(be&6)!==0)throw Error(c(331));var d=be;if(be|=4,rd(i.current),nd(i,i.current,r,a),be=d,An(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Zl,i)}catch{}return!0}finally{g.p=n,D.T=l,Td(e,t)}}function wd(e,t,a){t=Nt(a,t),t=Vr(e.stateNode,t,2),e=ya(e,t,2),e!==null&&(Kl(e,2),Xt(e))}function Se(e,t,a){if(e.tag===3)wd(e,e,a);else for(;t!==null;){if(t.tag===3){wd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ta===null||!Ta.has(l))){e=Nt(a,e),a=Cf(2),l=ya(t,a,2),l!==null&&(Af(a,l,t,e),Kl(l,2),Xt(l));break}}t=t.return}}function vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new kh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(cc=!0,n.add(a),e=Qh.bind(null,e,t,a),t.then(e,e))}function Qh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(fe&a)===a&&(De===4||De===3&&(fe&62914560)===fe&&300>dt()-ki?(be&2)===0&&Dl(e,0):oc|=a,Ol===fe&&(Ol=0)),Xt(e)}function Cd(e,t){t===0&&(t=So()),e=Ga(e,t),e!==null&&(Kl(e,t),Xt(e))}function Vh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cd(e,a)}function Zh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Cd(e,a)}function Jh(e,t){return Au(e,t)}var Zi=null,Hl=null,gc=!1,Ji=!1,bc=!1,Ca=0;function Xt(e){e!==Hl&&e.next===null&&(Hl===null?Zi=Hl=e:Hl=Hl.next=e),Ji=!0,gc||(gc=!0,$h())}function An(e,t){if(!bc&&Ji){bc=!0;do for(var a=!1,l=Zi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(r&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Od(l,i))}else i=fe,i=Fn(l,l===Te?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Jl(l,i)||(a=!0,Od(l,i));l=l.next}while(a);bc=!1}}function Kh(){Ad()}function Ad(){Ji=gc=!1;var e=0;Ca!==0&&iv()&&(e=Ca);for(var t=dt(),a=null,l=Zi;l!==null;){var n=l.next,i=Rd(l,t);i===0?(l.next=null,a===null?Zi=n:a.next=n,n===null&&(Hl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ji=!0)),l=n}Qe!==0&&Qe!==5||An(e),Ca!==0&&(Ca=0)}function Rd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-pt(i),d=1<<r,v=n[r];v===-1?((d&a)===0||(d&l)!==0)&&(n[r]=Sp(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=Te,a=fe,a=Fn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ru(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ru(l),Mu(a)){case 2:case 8:a=yo;break;case 32:a=Jn;break;case 268435456:a=xo;break;default:a=Jn}return l=_d.bind(null,e),a=Au(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ru(l),e.callbackPriority=2,e.callbackNode=null,2}function _d(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vi()&&e.callbackNode!==a)return null;var l=fe;return l=Fn(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(dd(e,l,t),Rd(e,dt()),e.callbackNode!=null&&e.callbackNode===a?_d.bind(null,e):null)}function Od(e,t){if(Vi())return null;dd(e,t,!0)}function $h(){rv(function(){(be&6)!==0?Au(bo,Kh):Ad()})}function yc(){if(Ca===0){var e=Sl;e===0&&(e=Kn,Kn<<=1,(Kn&261888)===0&&(Kn=256)),Ca=e}return Ca}function Md(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function Dd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Md((n[it]||null).action),r=l.submitter;r&&(t=(t=r[it]||null)?Md(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var d=new ii("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var v=r?Dd(n,r):new FormData(n);kr(a,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=r?Dd(n,r):new FormData(n),kr(a,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var xc=0;xc<ar.length;xc++){var Sc=ar[xc],Fh=Sc.toLowerCase(),Ih=Sc[0].toUpperCase()+Sc.slice(1);Dt(Fh,"on"+Ih)}Dt(ss,"onAnimationEnd"),Dt(fs,"onAnimationIteration"),Dt(ds,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(ph,"onTransitionRun"),Dt(hh,"onTransitionStart"),Dt(vh,"onTransitionCancel"),Dt(ms,"onTransitionEnd"),rl("onMouseEnter",["mouseout","mouseover"]),rl("onMouseLeave",["mouseout","mouseover"]),rl("onPointerEnter",["pointerout","pointerover"]),rl("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rn));function Ud(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var d=l[r],v=d.instance,w=d.currentTarget;if(d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=w;try{i(n)}catch(U){ci(U)}n.currentTarget=null,i=v}else for(r=0;r<l.length;r++){if(d=l[r],v=d.instance,w=d.currentTarget,d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=w;try{i(n)}catch(U){ci(U)}n.currentTarget=null,i=v}}}}function se(e,t){var a=t[Du];a===void 0&&(a=t[Du]=new Set);var l=e+"__bubble";a.has(l)||(Hd(t,e,2,!1),a.add(l))}function jc(e,t,a){var l=0;t&&(l|=4),Hd(a,e,l,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Ec(e){if(!e[Ki]){e[Ki]=!0,Co.forEach(function(a){a!=="selectionchange"&&(Ph.has(a)||jc(a,!1,e),jc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,jc("selectionchange",!1,t))}}function Hd(e,t,a,l){switch(fm(t)){case 2:var n=wv;break;case 8:n=Cv;break;default:n=Bc}a=n.bind(null,t,a,e),n=void 0,!Xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function zc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var d=l.stateNode.containerInfo;if(d===n)break;if(r===4)for(r=l.return;r!==null;){var v=r.tag;if((v===3||v===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;d!==null;){if(r=nl(d),r===null)return;if(v=r.tag,v===5||v===6||v===26||v===27){l=i=r;continue e}d=d.parentNode}}l=l.return}Yo(function(){var w=i,U=qu(a),Y=[];e:{var A=ps.get(e);if(A!==void 0){var R=ii,$=e;switch(e){case"keypress":if(li(a)===0)break e;case"keydown":case"keyup":R=Zp;break;case"focusin":$="focus",R=Ju;break;case"focusout":$="blur",R=Ju;break;case"beforeblur":case"afterblur":R=Ju;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=$p;break;case ss:case fs:case ds:R=Lp;break;case ms:R=Fp;break;case"scroll":case"scrollend":R=Op;break;case"wheel":R=Pp;break;case"copy":case"cut":case"paste":R=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Vo;break;case"toggle":case"beforetoggle":R=th}var P=(t&4)!==0,ze=!P&&(e==="scroll"||e==="scrollend"),z=P?A!==null?A+"Capture":null:A;P=[];for(var y=w,N;y!==null;){var L=y;if(N=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||N===null||z===null||(L=Fl(y,z),L!=null&&P.push(_n(y,L,N))),ze)break;y=y.return}0<P.length&&(A=new R(A,$,null,a,U),Y.push({event:A,listeners:P}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",A&&a!==Yu&&($=a.relatedTarget||a.fromElement)&&(nl($)||$[ll]))break e;if((R||A)&&(A=U.window===U?U:(A=U.ownerDocument)?A.defaultView||A.parentWindow:window,R?($=a.relatedTarget||a.toElement,R=w,$=$?nl($):null,$!==null&&(ze=p($),P=$.tag,$!==ze||P!==5&&P!==27&&P!==6)&&($=null)):(R=null,$=w),R!==$)){if(P=Xo,L="onMouseLeave",z="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(P=Vo,L="onPointerLeave",z="onPointerEnter",y="pointer"),ze=R==null?A:Wl(R),N=$==null?A:Wl($),A=new P(L,y+"leave",R,a,U),A.target=ze,A.relatedTarget=N,L=null,nl(U)===w&&(P=new P(z,y+"enter",$,a,U),P.target=N,P.relatedTarget=ze,L=P),ze=L,R&&$)t:{for(P=ev,z=R,y=$,N=0,L=z;L;L=P(L))N++;L=0;for(var I=y;I;I=P(I))L++;for(;0<N-L;)z=P(z),N--;for(;0<L-N;)y=P(y),L--;for(;N--;){if(z===y||y!==null&&z===y.alternate){P=z;break t}z=P(z),y=P(y)}P=null}else P=null;R!==null&&Ld(Y,A,R,P,!1),$!==null&&ze!==null&&Ld(Y,ze,$,P,!0)}}e:{if(A=w?Wl(w):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var ve=Po;else if(Fo(A))if(es)ve=fh;else{ve=oh;var W=ch}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?w&&ku(w.elementType)&&(ve=Po):ve=sh;if(ve&&(ve=ve(e,w))){Io(Y,ve,a,U);break e}W&&W(e,A,w),e==="focusout"&&w&&A.type==="number"&&w.memoizedProps.value!=null&&Bu(A,"number",A.value)}switch(W=w?Wl(w):window,e){case"focusin":(Fo(W)||W.contentEditable==="true")&&(ml=W,Pu=w,un=null);break;case"focusout":un=Pu=ml=null;break;case"mousedown":er=!0;break;case"contextmenu":case"mouseup":case"dragend":er=!1,cs(Y,a,U);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":cs(Y,a,U)}var ue;if($u)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else dl?$o(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Zo&&a.locale!=="ko"&&(dl||de!=="onCompositionStart"?de==="onCompositionEnd"&&dl&&(ue=qo()):(da=U,Qu="value"in da?da.value:da.textContent,dl=!0)),W=$i(w,de),0<W.length&&(de=new Qo(de,e,null,a,U),Y.push({event:de,listeners:W}),ue?de.data=ue:(ue=Wo(a),ue!==null&&(de.data=ue)))),(ue=lh?nh(e,a):ih(e,a))&&(de=$i(w,"onBeforeInput"),0<de.length&&(W=new Qo("onBeforeInput","beforeinput",null,a,U),Y.push({event:W,listeners:de}),W.data=ue)),Wh(Y,e,w,a,U)}Ud(Y,t)})}function _n(e,t,a){return{instance:e,listener:t,currentTarget:a}}function $i(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fl(e,a),n!=null&&l.unshift(_n(e,n,i)),n=Fl(e,t),n!=null&&l.push(_n(e,n,i))),e.tag===3)return l;e=e.return}return[]}function ev(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ld(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var d=a,v=d.alternate,w=d.stateNode;if(d=d.tag,v!==null&&v===l)break;d!==5&&d!==26&&d!==27||w===null||(v=w,n?(w=Fl(a,i),w!=null&&r.unshift(_n(a,w,v))):n||(w=Fl(a,i),w!=null&&r.push(_n(a,w,v)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var tv=/\r\n?/g,av=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(av,"")}function kd(e,t){return t=Bd(t),Bd(e)===t}function Ee(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(e,""+l);break;case"className":Pn(e,"class",l);break;case"tabIndex":Pn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,a,l);break;case"style":Bo(e,l,i);break;case"data":if(t!=="object"){Pn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ti(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),In(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":In(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rp.get(a)||a,In(e,a,l))}}function Tc(e,t,a,l,n,i){switch(a){case"style":Bo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):In(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,i,r,a,null)}}n&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var d=i=r=n=null,v=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var U=a[l];if(U!=null)switch(l){case"name":n=U;break;case"type":r=U;break;case"checked":v=U;break;case"defaultChecked":w=U;break;case"value":i=U;break;case"defaultValue":d=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Ee(e,t,l,U,a,null)}}Do(e,i,d,v,w,r,n,!1);return;case"select":se("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":r=d;break;case"multiple":l=d;default:Ee(e,t,n,d,a,null)}t=i,a=r,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(d=a[r],d!=null))switch(r){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ee(e,t,r,d,a,null)}Ho(e,l,n,i);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,v,l,a,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Rn.length;l++)se(Rn[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,w,l,a,null)}return;default:if(ku(t)){for(U in a)a.hasOwnProperty(U)&&(l=a[U],l!==void 0&&Tc(e,t,U,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Ee(e,t,d,l,a,null))}function lv(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,d=null,v=null,w=null,U=null;for(R in a){var Y=a[R];if(a.hasOwnProperty(R)&&Y!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=Y;default:l.hasOwnProperty(R)||Ee(e,t,R,null,l,Y)}}for(var A in l){var R=l[A];if(Y=a[A],l.hasOwnProperty(A)&&(R!=null||Y!=null))switch(A){case"type":i=R;break;case"name":n=R;break;case"checked":w=R;break;case"defaultChecked":U=R;break;case"value":r=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:R!==Y&&Ee(e,t,A,R,l,Y)}}Lu(e,r,d,v,w,U,i,n);return;case"select":R=r=d=A=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":R=v;default:l.hasOwnProperty(i)||Ee(e,t,i,null,l,v)}for(n in l)if(i=l[n],v=a[n],l.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":A=i;break;case"defaultValue":d=i;break;case"multiple":r=i;default:i!==v&&Ee(e,t,n,i,l,v)}t=d,a=r,l=R,A!=null?cl(e,!!a,A,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":R=A=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ee(e,t,d,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":A=n;break;case"defaultValue":R=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&Ee(e,t,r,n,l,i)}Uo(e,A,R);return;case"option":for(var $ in a)A=a[$],a.hasOwnProperty($)&&A!=null&&!l.hasOwnProperty($)&&($==="selected"?e.selected=!1:Ee(e,t,$,null,l,A));for(v in l)A=l[v],R=a[v],l.hasOwnProperty(v)&&A!==R&&(A!=null||R!=null)&&(v==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ee(e,t,v,A,l,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)A=a[P],a.hasOwnProperty(P)&&A!=null&&!l.hasOwnProperty(P)&&Ee(e,t,P,null,l,A);for(w in l)if(A=l[w],R=a[w],l.hasOwnProperty(w)&&A!==R&&(A!=null||R!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Ee(e,t,w,A,l,R)}return;default:if(ku(t)){for(var ze in a)A=a[ze],a.hasOwnProperty(ze)&&A!==void 0&&!l.hasOwnProperty(ze)&&Tc(e,t,ze,void 0,l,A);for(U in l)A=l[U],R=a[U],!l.hasOwnProperty(U)||A===R||A===void 0&&R===void 0||Tc(e,t,U,A,l,R);return}}for(var z in a)A=a[z],a.hasOwnProperty(z)&&A!=null&&!l.hasOwnProperty(z)&&Ee(e,t,z,null,l,A);for(Y in l)A=l[Y],R=a[Y],!l.hasOwnProperty(Y)||A===R||A==null&&R==null||Ee(e,t,Y,A,l,R)}function Yd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,d=n.duration;if(i&&d&&Yd(r)){for(r=0,d=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],w=v.startTime;if(w>d)break;var U=v.transferSize,Y=v.initiatorType;U&&Yd(Y)&&(v=v.responseEnd,r+=U*(v<d?1:(d-w)/(v-w)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nc=null,wc=null;function Wi(e){return e.nodeType===9?e:e.ownerDocument}function qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function iv(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var Xd=typeof setTimeout=="function"?setTimeout:void 0,uv=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,rv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(cv)}:Xd;function cv(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Vd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")On(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,On(a);for(var i=a.firstChild;i;){var r=i.nextSibling,d=i.nodeName;i[$l]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&On(e.ownerDocument.body);a=n}while(a);Yl(t)}function Zd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Rc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rc(a),Uu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ov(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[$l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function sv(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function _c(e){return e.data==="$?"||e.data==="$~"}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fv(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mc=null;function Kd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function $d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Wd(e,t,a){switch(t=Wi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function On(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Uu(e)}var Ot=new Map,Fd=new Set;function Fi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=g.d;g.d={f:dv,r:mv,D:pv,C:hv,L:vv,m:gv,X:yv,S:bv,M:xv};function dv(){var e=ca.f(),t=Gi();return e||t}function mv(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?pf(t):ca.r(e)}var Ll=typeof document>"u"?null:document;function Id(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var n=zt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Fd.has(n)||(Fd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function pv(e){ca.D(e),Id("dns-prefetch",e,null)}function hv(e,t){ca.C(e,t),Id("preconnect",e,t)}function vv(e,t,a){ca.L(e,t,a);var l=Ll;if(l&&e&&t){var n='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+zt(a.imageSizes)+'"]')):n+='[href="'+zt(e)+'"]';var i=n;switch(t){case"style":i=Bl(e);break;case"script":i=kl(e)}Ot.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Mn(i))||t==="script"&&l.querySelector(Dn(i))||(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function gv(e,t){ca.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!Ot.has(i)&&(e=E({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dn(i)))return}l=a.createElement("link"),et(l,"link",e),Ze(l),a.head.appendChild(l)}}}function bv(e,t,a){ca.S(e,t,a);var l=Ll;if(l&&e){var n=ul(l).hoistableStyles,i=Bl(e);t=t||"default";var r=n.get(i);if(!r){var d={loading:0,preload:null};if(r=l.querySelector(Mn(i)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Dc(e,a);var v=r=l.createElement("link");Ze(v),et(v,"link",e),v._p=new Promise(function(w,U){v.onload=w,v.onerror=U}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Ii(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:d},n.set(i,r)}}}function yv(e,t){ca.X(e,t);var a=Ll;if(a&&e){var l=ul(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Dn(n)),i||(e=E({src:e,async:!0},t),(t=Ot.get(n))&&Uc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function xv(e,t){ca.M(e,t);var a=Ll;if(a&&e){var l=ul(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Dn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Uc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Pd(e,t,a,l){var n=(n=ce.current)?Fi(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Bl(a.href),a=ul(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bl(a.href);var i=ul(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Mn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||Sv(n,e,a,r.state))),t&&l===null)throw Error(c(528,""));return r}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kl(a),a=ul(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Bl(e){return'href="'+zt(e)+'"'}function Mn(e){return'link[rel="stylesheet"]['+e+"]"}function em(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Sv(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Ze(t),e.head.appendChild(t))}function kl(e){return'[src="'+zt(e)+'"]'}function Dn(e){return"script[async]"+e}function tm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(l)return t.instance=l,Ze(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),et(l,"style",n),Ii(l,a.precedence,e),t.instance=l;case"stylesheet":n=Bl(a.href);var i=e.querySelector(Mn(n));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;l=em(a),(n=Ot.get(n))&&Dc(l,n),i=(e.ownerDocument||e).createElement("link"),Ze(i);var r=i;return r._p=new Promise(function(d,v){r.onload=d,r.onerror=v}),et(i,"link",l),t.state.loading|=4,Ii(i,a.precedence,e),t.instance=i;case"script":return i=kl(a.src),(n=e.querySelector(Dn(i)))?(t.instance=n,Ze(n),n):(l=a,(n=Ot.get(i))&&(l=E({},a),Uc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),et(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ii(l,a.precedence,e));return t.instance}function Ii(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var d=l[r];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pi=null;function am(e,t,a){if(Pi===null){var l=new Map,n=Pi=new Map;n.set(a,l)}else n=Pi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[$l]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var d=l.get(r);d?d.push(i):l.set(r,[i])}}return l}function lm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function jv(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ev(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Bl(l.href),i=t.querySelector(Mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ze(i);return}i=t.ownerDocument||t,l=em(l),(n=Ot.get(n))&&Dc(l,n),i=i.createElement("link"),Ze(i);var r=i;r._p=new Promise(function(d,v){r.onload=d,r.onerror=v}),et(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=eu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Hc=0;function zv(e,t){return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Hc===0&&(Hc=62500*nv());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&au(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Hc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function au(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,t.forEach(Tv,e),tu=null,eu.call(e))}function Tv(e,t){if(!(t.state.loading&4)){var a=tu.get(e);if(a)var l=a.get(null);else{a=new Map,tu.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=eu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Un={$$typeof:X,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Nv(e,t,a,l,n,i,r,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.hiddenUpdates=_u(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function im(e,t,a,l,n,i,r,d,v,w,U,Y){return e=new Nv(e,t,a,r,v,w,U,Y,d),t=1,i===!0&&(t|=24),i=vt(3,null,null,t),e.current=i,i.stateNode=e,t=hr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},yr(i),e}function um(e){return e?(e=vl,e):vl}function rm(e,t,a,l,n,i){n=um(n),l.context===null?l.context=n:l.pendingContext=n,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(ft(a,e,t),mn(a,e,t))}function cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lc(e,t){cm(e,t),(e=e.alternate)&&cm(e,t)}function om(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ft(t,e,67108864),Lc(e,67108864)}}function sm(e){if(e.tag===13||e.tag===31){var t=St();t=Ou(t);var a=Ga(e,t);a!==null&&ft(a,e,t),Lc(e,t)}}var lu=!0;function wv(e,t,a,l){var n=D.T;D.T=null;var i=g.p;try{g.p=2,Bc(e,t,a,l)}finally{g.p=i,D.T=n}}function Cv(e,t,a,l){var n=D.T;D.T=null;var i=g.p;try{g.p=8,Bc(e,t,a,l)}finally{g.p=i,D.T=n}}function Bc(e,t,a,l){if(lu){var n=kc(l);if(n===null)zc(e,t,l,nu,a),dm(e,l);else if(Rv(n,e,t,a,l))l.stopPropagation();else if(dm(e,l),t&4&&-1<Av.indexOf(e)){for(;n!==null;){var i=il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=La(i.pendingLanes);if(r!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;r;){var v=1<<31-pt(r);d.entanglements[1]|=v,r&=~v}Xt(i),(be&6)===0&&(Yi=dt()+500,An(0))}}break;case 31:case 13:d=Ga(i,2),d!==null&&ft(d,i,2),Gi(),Lc(i,2)}if(i=kc(l),i===null&&zc(e,t,l,nu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else zc(e,t,l,null,a)}}function kc(e){return e=qu(e),Yc(e)}var nu=null;function Yc(e){if(nu=null,e=nl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nu=e,null}function fm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pp()){case bo:return 2;case yo:return 8;case Jn:case hp:return 32;case xo:return 268435456;default:return 32}default:return 32}}var qc=!1,Ra=null,_a=null,Oa=null,Hn=new Map,Ln=new Map,Ma=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dm(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ln.delete(t.pointerId)}}function Bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&om(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Rv(e,t,a,l,n){switch(t){case"focusin":return Ra=Bn(Ra,e,t,a,l,n),!0;case"dragenter":return _a=Bn(_a,e,t,a,l,n),!0;case"mouseover":return Oa=Bn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Hn.set(i,Bn(Hn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Ln.set(i,Bn(Ln.get(i)||null,e,t,a,l,n)),!0}return!1}function mm(e){var t=nl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,No(e.priority,function(){sm(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,No(e.priority,function(){sm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=kc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Yu=l,a.target.dispatchEvent(l),Yu=null}else return t=il(a),t!==null&&om(t),e.blockedOn=a,!1;t.shift()}return!0}function pm(e,t,a){iu(e)&&a.delete(t)}function _v(){qc=!1,Ra!==null&&iu(Ra)&&(Ra=null),_a!==null&&iu(_a)&&(_a=null),Oa!==null&&iu(Oa)&&(Oa=null),Hn.forEach(pm),Ln.forEach(pm)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,qc||(qc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,_v)))}var ru=null;function hm(e){ru!==e&&(ru=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ru===e&&(ru=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Yc(l||a)===null)continue;break}var i=il(a);i!==null&&(e.splice(t,3),t-=3,kr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Yl(e){function t(v){return uu(v,e)}Ra!==null&&uu(Ra,e),_a!==null&&uu(_a,e),Oa!==null&&uu(Oa,e),Hn.forEach(t),Ln.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)mm(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[it]||null;if(typeof i=="function")r||hm(a);else if(r){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[it]||null)d=r.formAction;else if(Yc(n)!==null)continue}else d=r.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),hm(a)}}}function vm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Gc(e){this._internalRoot=e}cu.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=St();rm(a,l,e,t,null,null)},cu.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rm(e.current,2,null,e,null,null),Gi(),t[ll]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=To();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&mm(e)}};var gm=o.version;if(gm!=="19.2.7")throw Error(c(527,gm,"19.2.7"));g.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var Ov={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Zl=ou.inject(Ov),mt=ou}catch{}}return Yn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=zf,i=Tf,r=Nf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=im(e,1,!1,null,null,a,l,null,n,i,r,vm),e[ll]=t.current,Ec(e),new Gc(t)},Yn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=zf,r=Tf,d=Nf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=im(e,1,!0,t,a??null,l,n,v,i,r,d,vm),t.context=um(null),a=t.current,l=St(),l=Ou(l),n=ba(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,Kl(t,a),Xt(t),e[ll]=t.current,Ec(e),new cu(t)},Yn.version="19.2.7",Yn}var wm;function Gv(){if(wm)return Vc.exports;wm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Vc.exports=qv(),Vc.exports}var Xv=Gv();var uo=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Bm=/^[\\/]{2}/;function Qv(u,o){return o+u.replace(/\\/g,"/")}var Cm="popstate";function Am(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function Vv(u={}){function o(c,m){let p=m.state?.masked,{pathname:b,search:T,hash:S}=p||c.location;return eo("",{pathname:b,search:T,hash:S},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function f(c,m){return typeof m=="string"?m:Gn(m)}return Jv(o,f,null,u)}function Oe(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Mt(u,o){if(!u){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Zv(){return Math.random().toString(36).substring(2,10)}function Rm(u,o){return{usr:u.state,key:u.key,idx:o,masked:u.mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function eo(u,o,f=null,c,m){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof o=="string"?Gl(o):o,state:f,key:o&&o.key||c||Zv(),mask:m}}function Gn({pathname:u="/",search:o="",hash:f=""}){return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function Gl(u){let o={};if(u){let f=u.indexOf("#");f>=0&&(o.hash=u.substring(f),u=u.substring(0,f));let c=u.indexOf("?");c>=0&&(o.search=u.substring(c),u=u.substring(0,c)),u&&(o.pathname=u)}return o}function Jv(u,o,f,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,b=m.history,T="POP",S=null,h=C();h==null&&(h=0,b.replaceState({...b.state,idx:h},""));function C(){return(b.state||{idx:null}).idx}function E(){T="POP";let k=C(),J=k==null?null:k-h;h=k,S&&S({action:T,location:B.location,delta:J})}function O(k,J){T="PUSH";let H=Am(k)?k:eo(B.location,k,J);h=C()+1;let X=Rm(H,h),F=B.createHref(H.mask||H);try{b.pushState(X,"",F)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;m.location.assign(F)}p&&S&&S({action:T,location:B.location,delta:1})}function _(k,J){T="REPLACE";let H=Am(k)?k:eo(B.location,k,J);h=C();let X=Rm(H,h),F=B.createHref(H.mask||H);b.replaceState(X,"",F),p&&S&&S({action:T,location:B.location,delta:0})}function M(k){return Kv(m,k)}let B={get action(){return T},get location(){return u(m,b)},listen(k){if(S)throw new Error("A history only accepts one active listener");return m.addEventListener(Cm,E),S=k,()=>{m.removeEventListener(Cm,E),S=null}},createHref(k){return o(m,k)},createURL:M,encodeLocation(k){let J=M(k);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:O,replace:_,go(k){return b.go(k)}};return B}function Kv(u,o,f=!1){let c="http://localhost";u&&(c=u.location.origin!=="null"?u.location.origin:u.location.href),Oe(c,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:Gn(o);return m=m.replace(/ $/,"%20"),!f&&Bm.test(m)&&(m=c+m),new URL(m,c)}function km(u,o,f="/"){return $v(u,o,f,!1)}function $v(u,o,f,c,m){let p=typeof o=="string"?Gl(o):o,b=oa(p.pathname||"/",f);if(b==null)return null;let T=Wv(u),S=null,h=r0(b);for(let C=0;S==null&&C<T.length;++C)S=u0(T[C],h,c);return S}function Wv(u){let o=Ym(u);return Fv(o),o}function Ym(u,o=[],f=[],c="",m=!1){let p=(b,T,S=m,h)=>{let C={relativePath:h===void 0?b.path||"":h,caseSensitive:b.caseSensitive===!0,childrenIndex:T,route:b};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(c)&&S)return;Oe(C.relativePath.startsWith(c),`Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(c.length)}let E=Lt([c,C.relativePath]),O=f.concat(C);b.children&&b.children.length>0&&(Oe(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Ym(b.children,o,O,E,S)),!(b.path==null&&!b.index)&&o.push({path:E,score:n0(E,b.index),routesMeta:O.map((_,M)=>{let[B,k]=Xm(_.relativePath,_.caseSensitive,M===O.length-1);return{..._,matcher:B,compiledParams:k}})})};return u.forEach((b,T)=>{if(b.path===""||!b.path?.includes("?"))p(b,T);else for(let S of qm(b.path))p(b,T,!0,S)}),o}function qm(u){let o=u.split("/");if(o.length===0)return[];let[f,...c]=o,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let b=qm(c.join("/")),T=[];return T.push(...b.map(S=>S===""?p:[p,S].join("/"))),m&&T.push(...b),T.map(S=>u.startsWith("/")&&S===""?"/":S)}function Fv(u){u.sort((o,f)=>o.score!==f.score?f.score-o.score:i0(o.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var Iv=/^:[\w-]+$/,Pv=3,e0=2,t0=1,a0=10,l0=-2,_m=u=>u==="*";function n0(u,o){let f=u.split("/"),c=f.length;return f.some(_m)&&(c+=l0),o&&(c+=e0),f.filter(m=>!_m(m)).reduce((m,p)=>m+(Iv.test(p)?Pv:p===""?t0:a0),c)}function i0(u,o){return u.length===o.length&&u.slice(0,-1).every((c,m)=>c===o[m])?u[u.length-1]-o[o.length-1]:0}function u0(u,o,f=!1){let{routesMeta:c}=u,m={},p="/",b=[];for(let T=0;T<c.length;++T){let S=c[T],h=T===c.length-1,C=p==="/"?o:o.slice(p.length)||"/",E={path:S.relativePath,caseSensitive:S.caseSensitive,end:h},O=S.matcher&&S.compiledParams?Gm(E,C,S.matcher,S.compiledParams):vu(E,C),_=S.route;if(!O&&h&&f&&!c[c.length-1].route.index&&(O=vu({path:S.relativePath,caseSensitive:S.caseSensitive,end:!1},C)),!O)return null;Object.assign(m,O.params),b.push({params:m,pathname:Lt([p,O.pathname]),pathnameBase:s0(Lt([p,O.pathnameBase])),route:_}),O.pathnameBase!=="/"&&(p=Lt([p,O.pathnameBase]))}return b}function vu(u,o){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,c]=Xm(u.path,u.caseSensitive,u.end);return Gm(u,o,f,c)}function Gm(u,o,f,c){let m=o.match(f);if(!m)return null;let p=m[0],b=p.replace(/(.)\/+$/,"$1"),T=m.slice(1);return{params:c.reduce((h,{paramName:C,isOptional:E},O)=>{if(C==="*"){let M=T[O]||"";b=p.slice(0,p.length-M.length).replace(/(.)\/+$/,"$1")}const _=T[O];return E&&!_?h[C]=void 0:h[C]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:b,pattern:u}}function Xm(u,o=!1,f=!0){Mt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(b,T,S,h,C)=>{if(c.push({paramName:T,isOptional:S!=null}),S){let E=C.charAt(h+b.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),c]}function r0(u){try{return u.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Mt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),u}}function oa(u,o){if(o==="/")return u;if(!u.toLowerCase().startsWith(o.toLowerCase()))return null;let f=o.endsWith("/")?o.length-1:o.length,c=u.charAt(f);return c&&c!=="/"?null:u.slice(f)||"/"}function c0(u,o="/"){let{pathname:f,search:c="",hash:m=""}=typeof u=="string"?Gl(u):u,p;return f?(f=Qm(f),f.startsWith("/")?p=Om(f.substring(1),"/"):p=Om(f,o)):p=o,{pathname:p,search:f0(c),hash:d0(m)}}function Om(u,o){let f=gu(o).split("/");return u.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function $c(u,o,f,c){return`Cannot include a '${u}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function o0(u){return u.filter((o,f)=>f===0||o.route.path&&o.route.path.length>0)}function ro(u){let o=o0(u);return o.map((f,c)=>c===o.length-1?f.pathname:f.pathnameBase)}function Su(u,o,f,c=!1){let m;typeof u=="string"?m=Gl(u):(m={...u},Oe(!m.pathname||!m.pathname.includes("?"),$c("?","pathname","search",m)),Oe(!m.pathname||!m.pathname.includes("#"),$c("#","pathname","hash",m)),Oe(!m.search||!m.search.includes("#"),$c("#","search","hash",m)));let p=u===""||m.pathname==="",b=p?"/":m.pathname,T;if(b==null)T=f;else{let E=o.length-1;if(!c&&b.startsWith("..")){let O=b.split("/");for(;O[0]==="..";)O.shift(),E-=1;m.pathname=O.join("/")}T=E>=0?o[E]:"/"}let S=c0(m,T),h=b&&b!=="/"&&b.endsWith("/"),C=(p||b===".")&&f.endsWith("/");return!S.pathname.endsWith("/")&&(h||C)&&(S.pathname+="/"),S}var Qm=u=>u.replace(/[\\/]{2,}/g,"/"),Lt=u=>Qm(u.join("/")),gu=u=>u.replace(/\/+$/,""),s0=u=>gu(u).replace(/^\/*/,"/"),f0=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,d0=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,m0=class{constructor(u,o,f,c=!1){this.status=u,this.statusText=o||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function p0(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function h0(u){let o=u.map(f=>f.route.path).filter(Boolean);return Lt(o)||"/"}var Vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zm(u,o){let f=u;if(typeof f!="string"||!uo.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,m=!1;if(Vm)try{let p=new URL(window.location.href),b=Bm.test(f)?new URL(Qv(f,p.protocol)):new URL(f),T=oa(b.pathname,o);b.origin===p.origin&&T!=null?f=T+b.search+b.hash:m=!0}catch{Mt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jm=["POST","PUT","PATCH","DELETE"];new Set(Jm);var v0=["GET",...Jm];new Set(v0);var g0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function b0(u){try{return g0.includes(new URL(u).protocol)}catch{return!1}}var Xl=x.createContext(null);Xl.displayName="DataRouter";var ju=x.createContext(null);ju.displayName="DataRouterState";var Km=x.createContext(!1);function y0(){return x.useContext(Km)}var $m=x.createContext({isTransitioning:!1});$m.displayName="ViewTransition";var x0=x.createContext(new Map);x0.displayName="Fetchers";var S0=x.createContext(null);S0.displayName="Await";var jt=x.createContext(null);jt.displayName="Navigation";var Xn=x.createContext(null);Xn.displayName="Location";var Bt=x.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var co=x.createContext(null);co.displayName="RouteError";var Wm="REACT_ROUTER_ERROR",j0="REDIRECT",E0="ROUTE_ERROR_RESPONSE";function z0(u){if(u.startsWith(`${Wm}:${j0}:{`))try{let o=JSON.parse(u.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function T0(u){if(u.startsWith(`${Wm}:${E0}:{`))try{let o=JSON.parse(u.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new m0(o.status,o.statusText,o.data)}catch{}}function N0(u,{relative:o}={}){Oe(Ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=x.useContext(jt),{hash:m,pathname:p,search:b}=Qn(u,{relative:o}),T=p;return f!=="/"&&(T=p==="/"?f:Lt([f,p])),c.createHref({pathname:T,search:b,hash:m})}function Ql(){return x.useContext(Xn)!=null}function kt(){return Oe(Ql(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Xn).location}var Fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Im(u){x.useContext(jt).static||x.useLayoutEffect(u)}function oo(){let{isDataRoute:u}=x.useContext(Bt);return u?q0():w0()}function w0(){Oe(Ql(),"useNavigate() may be used only in the context of a <Router> component.");let u=x.useContext(Xl),{basename:o,navigator:f}=x.useContext(jt),{matches:c}=x.useContext(Bt),{pathname:m}=kt(),p=JSON.stringify(ro(c)),b=x.useRef(!1);return Im(()=>{b.current=!0}),x.useCallback((S,h={})=>{if(Mt(b.current,Fm),!b.current)return;if(typeof S=="number"){f.go(S);return}let C=Su(S,JSON.parse(p),m,h.relative==="path");u==null&&o!=="/"&&(C.pathname=C.pathname==="/"?o:Lt([o,C.pathname])),(h.replace?f.replace:f.push)(C,h.state,h)},[o,f,p,m,u])}var C0=x.createContext(null);function A0(u){let o=x.useContext(Bt).outlet;return x.useMemo(()=>o&&x.createElement(C0.Provider,{value:u},o),[o,u])}function Qn(u,{relative:o}={}){let{matches:f}=x.useContext(Bt),{pathname:c}=kt(),m=JSON.stringify(ro(f));return x.useMemo(()=>Su(u,JSON.parse(m),c,o==="path"),[u,m,c,o])}function R0(u,o){return Pm(u,o)}function Pm(u,o,f){Oe(Ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=x.useContext(jt),{matches:m}=x.useContext(Bt),p=m[m.length-1],b=p?p.params:{},T=p?p.pathname:"/",S=p?p.pathnameBase:"/",h=p&&p.route;{let k=h&&h.path||"";tp(T,!h||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${T}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let C=kt(),E;if(o){let k=typeof o=="string"?Gl(o):o;Oe(S==="/"||k.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${k.pathname}" was given in the \`location\` prop.`),E=k}else E=C;let O=E.pathname||"/",_=O;if(S!=="/"){let k=S.replace(/^\//,"").split("/");_="/"+O.replace(/^\//,"").split("/").slice(k.length).join("/")}let M=f&&f.state.matches.length?f.state.matches.map(k=>Object.assign(k,{route:f.manifest[k.route.id]||k.route})):km(u,{pathname:_});Mt(h||M!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Mt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=U0(M&&M.map(k=>Object.assign({},k,{params:Object.assign({},b,k.params),pathname:Lt([S,c.encodeLocation?c.encodeLocation(k.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?S:Lt([S,c.encodeLocation?c.encodeLocation(k.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),m,f);return o&&B?x.createElement(Xn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...E},navigationType:"POP"}},B):B}function _0(){let u=Y0(),o=p0(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},b=null;return console.error("Error handled by React Router default ErrorBoundary:",u),b=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:p},"ErrorBoundary")," or"," ",x.createElement("code",{style:p},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},o),f?x.createElement("pre",{style:m},f):null,b)}var O0=x.createElement(_0,null),ep=class extends x.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){this.props.onError?this.props.onError(u,o):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const f=T0(u.digest);f&&(u=f)}let o=u!==void 0?x.createElement(Bt.Provider,{value:this.props.routeContext},x.createElement(co.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?x.createElement(M0,{error:u},o):o}};ep.contextType=Km;var Wc=new WeakMap;function M0({children:u,error:o}){let{basename:f}=x.useContext(jt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=z0(o.digest);if(c){let m=Wc.get(o);if(m)throw m;let p=Zm(c.location,f),b=p.absoluteURL||p.to;if(b0(b))throw new Error("Invalid redirect location");if(Vm&&!Wc.get(o))if(p.isExternal||c.reloadDocument)window.location.href=b;else{const T=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Wc.set(o,T),T}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${b}`})}}return u}function D0({routeContext:u,match:o,children:f}){let c=x.useContext(Xl);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),x.createElement(Bt.Provider,{value:u},f)}function U0(u,o=[],f){let c=f?.state;if(u==null){if(!c)return null;if(c.errors)u=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)u=c.matches;else return null}let m=u,p=c?.errors;if(p!=null){let C=m.findIndex(E=>E.route.id&&p?.[E.route.id]!==void 0);Oe(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,C+1))}let b=!1,T=-1;if(f&&c){b=c.renderFallback;for(let C=0;C<m.length;C++){let E=m[C];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(T=C),E.route.id){let{loaderData:O,errors:_}=c,M=E.route.loader&&!O.hasOwnProperty(E.route.id)&&(!_||_[E.route.id]===void 0);if(E.route.lazy||M){f.isStatic&&(b=!0),T>=0?m=m.slice(0,T+1):m=[m[0]];break}}}}let S=f?.onError,h=c&&S?(C,E)=>{S(C,{location:c.location,params:c.matches?.[0]?.params??{},pattern:h0(c.matches),errorInfo:E})}:void 0;return m.reduceRight((C,E,O)=>{let _,M=!1,B=null,k=null;c&&(_=p&&E.route.id?p[E.route.id]:void 0,B=E.route.errorElement||O0,b&&(T<0&&O===0?(tp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,k=null):T===O&&(M=!0,k=E.route.hydrateFallbackElement||null)));let J=o.concat(m.slice(0,O+1)),H=()=>{let X;return _?X=B:M?X=k:E.route.Component?X=x.createElement(E.route.Component,null):E.route.element?X=E.route.element:X=C,x.createElement(D0,{match:E,routeContext:{outlet:C,matches:J,isDataRoute:c!=null},children:X})};return c&&(E.route.ErrorBoundary||E.route.errorElement||O===0)?x.createElement(ep,{location:c.location,revalidation:c.revalidation,component:B,error:_,children:H(),routeContext:{outlet:null,matches:J,isDataRoute:!0},onError:h}):H()},null)}function so(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function H0(u){let o=x.useContext(Xl);return Oe(o,so(u)),o}function L0(u){let o=x.useContext(ju);return Oe(o,so(u)),o}function B0(u){let o=x.useContext(Bt);return Oe(o,so(u)),o}function fo(u){let o=B0(u),f=o.matches[o.matches.length-1];return Oe(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function k0(){return fo("useRouteId")}function Y0(){let u=x.useContext(co),o=L0("useRouteError"),f=fo("useRouteError");return u!==void 0?u:o.errors?.[f]}function q0(){let{router:u}=H0("useNavigate"),o=fo("useNavigate"),f=x.useRef(!1);return Im(()=>{f.current=!0}),x.useCallback(async(m,p={})=>{Mt(f.current,Fm),f.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:o,...p}))},[u,o])}var Mm={};function tp(u,o,f){!o&&!Mm[u]&&(Mm[u]=!0,Mt(!1,f))}x.memo(G0);function G0({routes:u,manifest:o,future:f,state:c,isStatic:m,onError:p}){return Pm(u,void 0,{manifest:o,state:c,isStatic:m,onError:p})}function X0({to:u,replace:o,state:f,relative:c}){Oe(Ql(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=x.useContext(jt);Mt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=x.useContext(Bt),{pathname:b}=kt(),T=oo(),S=Su(u,ro(p),b,c==="path"),h=JSON.stringify(S);return x.useEffect(()=>{T(JSON.parse(h),{replace:o,state:f,relative:c})},[T,h,c,o,f]),null}function Q0(u){return A0(u.context)}function Ua(u){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function V0({basename:u="/",children:o=null,location:f,navigationType:c="POP",navigator:m,static:p=!1,useTransitions:b}){Oe(!Ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=u.replace(/^\/*/,"/"),S=x.useMemo(()=>({basename:T,navigator:m,static:p,useTransitions:b,future:{}}),[T,m,p,b]);typeof f=="string"&&(f=Gl(f));let{pathname:h="/",search:C="",hash:E="",state:O=null,key:_="default",mask:M}=f,B=x.useMemo(()=>{let k=oa(h,T);return k==null?null:{location:{pathname:k,search:C,hash:E,state:O,key:_,mask:M},navigationType:c}},[T,h,C,E,O,_,c,M]);return Mt(B!=null,`<Router basename="${T}"> is not able to match the URL "${h}${C}${E}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:x.createElement(jt.Provider,{value:S},x.createElement(Xn.Provider,{children:o,value:B}))}function Z0({children:u,location:o}){return R0(to(u),o)}function to(u,o=[]){let f=[];return x.Children.forEach(u,(c,m)=>{if(!x.isValidElement(c))return;let p=[...o,m];if(c.type===x.Fragment){f.push.apply(f,to(c.props.children,p));return}Oe(c.type===Ua,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let b={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(b.children=to(c.props.children,p)),f.push(b)}),f}var pu="get",hu="application/x-www-form-urlencoded";function Eu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function J0(u){return Eu(u)&&u.tagName.toLowerCase()==="button"}function K0(u){return Eu(u)&&u.tagName.toLowerCase()==="form"}function $0(u){return Eu(u)&&u.tagName.toLowerCase()==="input"}function W0(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function F0(u,o){return u.button===0&&(!o||o==="_self")&&!W0(u)}function ao(u=""){return new URLSearchParams(typeof u=="string"||Array.isArray(u)||u instanceof URLSearchParams?u:Object.keys(u).reduce((o,f)=>{let c=u[f];return o.concat(Array.isArray(c)?c.map(m=>[f,m]):[[f,c]])},[]))}function I0(u,o){let f=ao(u);return o&&o.forEach((c,m)=>{f.has(m)||o.getAll(m).forEach(p=>{f.append(m,p)})}),f}var su=null;function P0(){if(su===null)try{new FormData(document.createElement("form"),0),su=!1}catch{su=!0}return su}var eg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fc(u){return u!=null&&!eg.has(u)?(Mt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):u}function tg(u,o){let f,c,m,p,b;if(K0(u)){let T=u.getAttribute("action");c=T?oa(T,o):null,f=u.getAttribute("method")||pu,m=Fc(u.getAttribute("enctype"))||hu,p=new FormData(u)}else if(J0(u)||$0(u)&&(u.type==="submit"||u.type==="image")){let T=u.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let S=u.getAttribute("formaction")||T.getAttribute("action");if(c=S?oa(S,o):null,f=u.getAttribute("formmethod")||T.getAttribute("method")||pu,m=Fc(u.getAttribute("formenctype"))||Fc(T.getAttribute("enctype"))||hu,p=new FormData(T,u),!P0()){let{name:h,type:C,value:E}=u;if(C==="image"){let O=h?`${h}.`:"";p.append(`${O}x`,"0"),p.append(`${O}y`,"0")}else h&&p.append(h,E)}}else{if(Eu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=pu,c=null,m=hu,b=u}return p&&m==="text/plain"&&(b=p,p=void 0),{action:c,method:f.toLowerCase(),encType:m,formData:p,body:b}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mo(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function ap(u,o,f,c){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:o&&oa(m.pathname,o)==="/"?m.pathname=`${gu(o)}/_root.${c}`:m.pathname=`${gu(m.pathname)}.${c}`,m}async function ag(u,o){if(u.id in o)return o[u.id];try{let f=await import(u.module);return o[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lg(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function ng(u,o,f){let c=await Promise.all(u.map(async m=>{let p=o.routes[m.route.id];if(p){let b=await ag(p,f);return b.links?b.links():[]}return[]}));return cg(c.flat(1).filter(lg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Dm(u,o,f,c,m,p){let b=(S,h)=>f[h]?S.route.id!==f[h].route.id:!0,T=(S,h)=>f[h].pathname!==S.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==S.params["*"];return p==="assets"?o.filter((S,h)=>b(S,h)||T(S,h)):p==="data"?o.filter((S,h)=>{let C=c.routes[S.route.id];if(!C||!C.hasLoader)return!1;if(b(S,h)||T(S,h))return!0;if(S.route.shouldRevalidate){let E=S.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:S.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function ig(u,o,{includeHydrateFallback:f}={}){return ug(u.map(c=>{let m=o.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function ug(u){return[...new Set(u)]}function rg(u){let o={},f=Object.keys(u).sort();for(let c of f)o[c]=u[c];return o}function cg(u,o){let f=new Set;return new Set(o),u.reduce((c,m)=>{let p=JSON.stringify(rg(m));return f.has(p)||(f.add(p),c.push({key:p,link:m})),c},[])}function po(){let u=x.useContext(Xl);return mo(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function og(){let u=x.useContext(ju);return mo(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var ho=x.createContext(void 0);ho.displayName="FrameworkContext";function zu(){let u=x.useContext(ho);return mo(u,"You must render this element inside a <HydratedRouter> element"),u}function sg(u,o){let f=x.useContext(ho),[c,m]=x.useState(!1),[p,b]=x.useState(!1),{onFocus:T,onBlur:S,onMouseEnter:h,onMouseLeave:C,onTouchStart:E}=o,O=x.useRef(null);x.useEffect(()=>{if(u==="render"&&b(!0),u==="viewport"){let B=J=>{J.forEach(H=>{b(H.isIntersecting)})},k=new IntersectionObserver(B,{threshold:.5});return O.current&&k.observe(O.current),()=>{k.disconnect()}}},[u]),x.useEffect(()=>{if(c){let B=setTimeout(()=>{b(!0)},100);return()=>{clearTimeout(B)}}},[c]);let _=()=>{m(!0)},M=()=>{m(!1),b(!1)};return f?u!=="intent"?[p,O,{}]:[p,O,{onFocus:qn(T,_),onBlur:qn(S,M),onMouseEnter:qn(h,_),onMouseLeave:qn(C,M),onTouchStart:qn(E,_)}]:[!1,O,{}]}function qn(u,o){return f=>{u&&u(f),f.defaultPrevented||o(f)}}function fg({page:u,...o}){let f=y0(),{nonce:c}=zu(),{router:m}=po(),p=x.useMemo(()=>km(m.routes,u,m.basename),[m.routes,u,m.basename]);return p?(o.nonce==null&&c&&(o={...o,nonce:c}),f?x.createElement(mg,{page:u,matches:p,...o}):x.createElement(pg,{page:u,matches:p,...o})):null}function dg(u){let{manifest:o,routeModules:f}=zu(),[c,m]=x.useState([]);return x.useEffect(()=>{let p=!1;return ng(u,o,f).then(b=>{p||m(b)}),()=>{p=!0}},[u,o,f]),c}function mg({page:u,matches:o,...f}){let c=kt(),{future:m}=zu(),{basename:p}=po(),b=x.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let T=ap(u,p,m.v8_trailingSlashAwareDataRequests,"rsc"),S=!1,h=[];for(let C of o)typeof C.route.shouldRevalidate=="function"?S=!0:h.push(C.route.id);return S&&h.length>0&&T.searchParams.set("_routes",h.join(",")),[T.pathname+T.search]},[p,m.v8_trailingSlashAwareDataRequests,u,c,o]);return x.createElement(x.Fragment,null,b.map(T=>x.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...f})))}function pg({page:u,matches:o,...f}){let c=kt(),{future:m,manifest:p,routeModules:b}=zu(),{basename:T}=po(),{loaderData:S,matches:h}=og(),C=x.useMemo(()=>Dm(u,o,h,p,c,"data"),[u,o,h,p,c]),E=x.useMemo(()=>Dm(u,o,h,p,c,"assets"),[u,o,h,p,c]),O=x.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let B=new Set,k=!1;if(o.forEach(H=>{let X=p.routes[H.route.id];!X||!X.hasLoader||(!C.some(F=>F.route.id===H.route.id)&&H.route.id in S&&b[H.route.id]?.shouldRevalidate||X.hasClientLoader?k=!0:B.add(H.route.id))}),B.size===0)return[];let J=ap(u,T,m.v8_trailingSlashAwareDataRequests,"data");return k&&B.size>0&&J.searchParams.set("_routes",o.filter(H=>B.has(H.route.id)).map(H=>H.route.id).join(",")),[J.pathname+J.search]},[T,m.v8_trailingSlashAwareDataRequests,S,c,p,C,o,u,b]),_=x.useMemo(()=>ig(E,p),[E,p]),M=dg(E);return x.createElement(x.Fragment,null,O.map(B=>x.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),_.map(B=>x.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),M.map(({key:B,link:k})=>x.createElement("link",{key:B,nonce:f.nonce,...k,crossOrigin:k.crossOrigin??f.crossOrigin})))}function hg(...u){return o=>{u.forEach(f=>{typeof f=="function"?f(o):f!=null&&(f.current=o)})}}var vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vg&&(window.__reactRouterVersion="7.18.1")}catch{}function gg({basename:u,children:o,useTransitions:f,window:c}){let m=x.useRef();m.current==null&&(m.current=Vv({window:c,v5Compat:!0}));let p=m.current,[b,T]=x.useState({action:p.action,location:p.location}),S=x.useCallback(h=>{f===!1?T(h):x.startTransition(()=>T(h))},[f]);return x.useLayoutEffect(()=>p.listen(S),[p,S]),x.createElement(V0,{basename:u,children:o,location:b.location,navigationType:b.action,navigator:p,useTransitions:f})}var bu=x.forwardRef(function({onClick:o,discover:f="render",prefetch:c="none",relative:m,reloadDocument:p,replace:b,mask:T,state:S,target:h,to:C,preventScrollReset:E,viewTransition:O,defaultShouldRevalidate:_,...M},B){let{basename:k,navigator:J,useTransitions:H}=x.useContext(jt),X=typeof C=="string"&&uo.test(C),F=Zm(C,k);C=F.to;let ee=N0(C,{relative:m}),Q=kt(),G=null;if(T){let Re=Su(T,[],Q.mask?Q.mask.pathname:"/",!0);k!=="/"&&(Re.pathname=Re.pathname==="/"?k:Lt([k,Re.pathname])),G=J.createHref(Re)}let[re,pe,he]=sg(c,M),Ve=xg(C,{replace:b,mask:T,state:S,target:h,preventScrollReset:E,relative:m,viewTransition:O,defaultShouldRevalidate:_,useTransitions:H});function Ae(Re){o&&o(Re),Re.defaultPrevented||Ve(Re)}let tt=!(F.isExternal||p),ke=x.createElement("a",{...M,...he,href:(tt?G:void 0)||F.absoluteURL||ee,onClick:tt?Ae:o,ref:hg(B,pe),target:h,"data-discover":!X&&f==="render"?"true":void 0});return re&&!X?x.createElement(x.Fragment,null,ke,x.createElement(fg,{page:ee})):ke});bu.displayName="Link";var lp=x.forwardRef(function({"aria-current":o="page",caseSensitive:f=!1,className:c="",end:m=!1,style:p,to:b,viewTransition:T,children:S,...h},C){let E=Qn(b,{relative:h.relative}),O=kt(),_=x.useContext(ju),{navigator:M,basename:B}=x.useContext(jt),k=_!=null&&Ng(E)&&T===!0,J=M.encodeLocation?M.encodeLocation(E).pathname:E.pathname,H=O.pathname,X=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;f||(H=H.toLowerCase(),X=X?X.toLowerCase():null,J=J.toLowerCase()),X&&B&&(X=oa(X,B)||X);const F=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let ee=H===J||!m&&H.startsWith(J)&&H.charAt(F)==="/",Q=X!=null&&(X===J||!m&&X.startsWith(J)&&X.charAt(J.length)==="/"),G={isActive:ee,isPending:Q,isTransitioning:k},re=ee?o:void 0,pe;typeof c=="function"?pe=c(G):pe=[c,ee?"active":null,Q?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let he=typeof p=="function"?p(G):p;return x.createElement(bu,{...h,"aria-current":re,className:pe,ref:C,style:he,to:b,viewTransition:T},typeof S=="function"?S(G):S)});lp.displayName="NavLink";var bg=x.forwardRef(({discover:u="render",fetcherKey:o,navigate:f,reloadDocument:c,replace:m,state:p,method:b=pu,action:T,onSubmit:S,relative:h,preventScrollReset:C,viewTransition:E,defaultShouldRevalidate:O,..._},M)=>{let{useTransitions:B}=x.useContext(jt),k=zg(),J=Tg(T,{relative:h}),H=b.toLowerCase()==="get"?"get":"post",X=typeof T=="string"&&uo.test(T),F=ee=>{if(S&&S(ee),ee.defaultPrevented)return;ee.preventDefault();let Q=ee.nativeEvent.submitter,G=Q?.getAttribute("formmethod")||b,re=()=>k(Q||ee.currentTarget,{fetcherKey:o,method:G,navigate:f,replace:m,state:p,relative:h,preventScrollReset:C,viewTransition:E,defaultShouldRevalidate:O});B&&f!==!1?x.startTransition(()=>re()):re()};return x.createElement("form",{ref:M,method:H,action:J,onSubmit:c?S:F,..._,"data-discover":!X&&u==="render"?"true":void 0})});bg.displayName="Form";function yg(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function np(u){let o=x.useContext(Xl);return Oe(o,yg(u)),o}function xg(u,{target:o,replace:f,mask:c,state:m,preventScrollReset:p,relative:b,viewTransition:T,defaultShouldRevalidate:S,useTransitions:h}={}){let C=oo(),E=kt(),O=Qn(u,{relative:b});return x.useCallback(_=>{if(F0(_,o)){_.preventDefault();let M=f!==void 0?f:Gn(E)===Gn(O),B=()=>C(u,{replace:M,mask:c,state:m,preventScrollReset:p,relative:b,viewTransition:T,defaultShouldRevalidate:S});h?x.startTransition(()=>B()):B()}},[E,C,O,f,c,m,o,u,p,b,T,S,h])}function Sg(u){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=x.useRef(ao(u)),f=x.useRef(!1),c=kt(),m=x.useMemo(()=>I0(c.search,f.current?null:o.current),[c.search]),p=oo(),b=x.useCallback((T,S)=>{const h=ao(typeof T=="function"?T(new URLSearchParams(m)):T);f.current=!0,p("?"+h,S)},[p,m]);return[m,b]}var jg=0,Eg=()=>`__${String(++jg)}__`;function zg(){let{router:u}=np("useSubmit"),{basename:o}=x.useContext(jt),f=k0(),c=u.fetch,m=u.navigate;return x.useCallback(async(p,b={})=>{let{action:T,method:S,encType:h,formData:C,body:E}=tg(p,o);if(b.navigate===!1){let O=b.fetcherKey||Eg();await c(O,f,b.action||T,{defaultShouldRevalidate:b.defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:C,body:E,formMethod:b.method||S,formEncType:b.encType||h,flushSync:b.flushSync})}else await m(b.action||T,{defaultShouldRevalidate:b.defaultShouldRevalidate,preventScrollReset:b.preventScrollReset,formData:C,body:E,formMethod:b.method||S,formEncType:b.encType||h,replace:b.replace,state:b.state,fromRouteId:f,flushSync:b.flushSync,viewTransition:b.viewTransition})},[c,m,o,f])}function Tg(u,{relative:o}={}){let{basename:f}=x.useContext(jt),c=x.useContext(Bt);Oe(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Qn(u||".",{relative:o})},b=kt();if(u==null){p.search=b.search;let T=new URLSearchParams(p.search),S=T.getAll("index");if(S.some(C=>C==="")){T.delete("index"),S.filter(E=>E).forEach(E=>T.append("index",E));let C=T.toString();p.search=C?`?${C}`:""}}return(!u||u===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Lt([f,p.pathname])),Gn(p)}function Ng(u,{relative:o}={}){let f=x.useContext($m);Oe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=np("useViewTransitionState"),m=Qn(u,{relative:o});if(!f.isTransitioning)return!1;let p=oa(f.currentLocation.pathname,c)||f.currentLocation.pathname,b=oa(f.nextLocation.pathname,c)||f.nextLocation.pathname;return vu(m.pathname,b)!=null||vu(m.pathname,p)!=null}function wg(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"10",cy:"7",r:"3.25",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Cg(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"6",width:"14",height:"10",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 6V5a3 3 0 0 1 6 0v1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function lo(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"4",y:"3",width:"12",height:"14",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 7.5h6M7 10.5h6M7 13.5h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Ag(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"3",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})}function Rg(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M5 4.5h10M5 8.5h7M5 12.5h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M14 12.5l2 2 3.5-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function _g(){return s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5",fill:"url(#logo-grad)"}),s.jsx("path",{d:"M8 15V9l4 3 4-3v6",stroke:"#fff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"logo-grad",x1:"3",y1:"3",x2:"21",y2:"21",children:[s.jsx("stop",{stopColor:"#818cf8"}),s.jsx("stop",{offset:"1",stopColor:"#6366f1"})]})})]})}function Og(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M3.5 8.5l3 3 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Mg(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M8 5v3.5M8 11h.01",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Dg(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}function Ug(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 2.5h5l3.5 3.5V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M9 2.5V6h3.5",stroke:"currentColor",strokeWidth:"1.25"})]})}function Hg(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M6 3.5h6.5V10M9.5 6.5L3 13",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}const Lg=[{to:"/profile",label:"Profile",icon:wg},{to:"/jobs",label:"Jobs",icon:Cg},{to:"/applications",label:"Applications",icon:lo},{to:"/templates",label:"Templates",icon:Ag},{to:"/review",label:"Review",icon:Rg}];function Bg(){return s.jsxs("aside",{className:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs("div",{className:"sidebar-brand",children:[s.jsx(_g,{}),s.jsxs("div",{className:"sidebar-brand-text",children:[s.jsx("span",{className:"sidebar-brand-name",children:"Joblication"}),s.jsx("span",{className:"sidebar-brand-tag",children:"Application studio"})]})]})}),s.jsxs("nav",{className:"sidebar-nav","aria-label":"Main navigation",children:[s.jsx("p",{className:"sidebar-nav-label",children:"Workspace"}),Lg.map(u=>s.jsxs(lp,{to:u.to,className:({isActive:o})=>`sidebar-link ${o?"active":""}`,children:[s.jsx("span",{className:"sidebar-link-icon",children:s.jsx(u.icon,{})}),s.jsx("span",{className:"sidebar-link-label",children:u.label})]},u.to))]}),s.jsx("div",{className:"sidebar-footer",children:s.jsx("p",{children:"Tailored CVs & cover letters"})})]})}function kg(){return s.jsxs("div",{className:"app-shell",children:[s.jsx(Bg,{}),s.jsx("main",{className:"app-main",children:s.jsx(Q0,{})})]})}const tl={"Content-Type":"application/json"};async function Be(u,o={}){const f=await fetch(u,o),c=await f.json().catch(()=>({}));if(!f.ok)throw new Error(c.error||`Request failed (${f.status})`);return c}const Ce={health:()=>Be("/api/health"),config:()=>Be("/api/config"),getProfile:()=>Be("/api/profile"),saveProfile:u=>Be("/api/profile",{method:"PUT",headers:tl,body:JSON.stringify({profile:u})}),listJobs:()=>Be("/api/applications"),getJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`),createJob:u=>Be("/api/applications",{method:"POST",headers:tl,body:JSON.stringify(u)}),updateJob:(u,o)=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),deleteJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"DELETE"}),scrapeUrl:u=>Be("/api/applications/scrape",{method:"POST",headers:tl,body:JSON.stringify({url:u})}),listApplications:()=>Be("/api/applications/view"),listOutputs:()=>Be("/api/outputs"),fileUrl:(u,o)=>`/api/files/${encodeURIComponent(u)}/${encodeURIComponent(o)}`,getReview:u=>Be(`/api/review/${encodeURIComponent(u)}`),saveReview:(u,o)=>Be(`/api/review/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),rebuild:u=>Be(`/api/build/${encodeURIComponent(u)}`,{method:"POST"}),listTemplates:()=>Be("/api/templates"),getTemplate:u=>Be(`/api/templates/${encodeURIComponent(u)}`),saveTemplate:(u,o)=>Be(`/api/templates/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),createTemplate:u=>Be("/api/templates",{method:"POST",headers:tl,body:JSON.stringify(u)}),generateStatus:()=>Be("/api/generate/status"),startGenerate:()=>Be("/api/generate",{method:"POST"})},ip=x.createContext(null);function Yg({children:u}){const[o,f]=x.useState(null),c=x.useRef(null),m=x.useCallback((b,T="success")=>{clearTimeout(c.current),f({message:b,type:T}),c.current=setTimeout(()=>f(null),3800)},[]),p=x.useMemo(()=>({showToast:m}),[m]);return s.jsxs(ip.Provider,{value:p,children:[u,o&&s.jsxs("div",{className:`toast show ${o.type}`,role:"status","aria-live":"polite",children:[s.jsx("span",{className:"toast-icon",children:o.type==="error"?s.jsx(Mg,{}):s.jsx(Og,{})}),s.jsx("span",{className:"toast-message",children:o.message})]})]})}function Vn(){const u=x.useContext(ip);if(!u)throw new Error("useToast must be used within ToastProvider");return u}function up({label:u="Loading…"}){return s.jsxs("div",{className:"page-loading",children:[s.jsx("div",{className:"page-loading-spinner"}),s.jsx("p",{children:u})]})}function Um({icon:u,title:o,description:f,action:c}){return s.jsxs("div",{className:"empty-state",children:[u&&s.jsx("div",{className:"empty-state-icon",children:s.jsx(u,{})}),s.jsx("h3",{children:o}),f&&s.jsx("p",{children:f}),c]})}function al(u){return u.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,o=>o.toUpperCase())}function qg(u){return u.includes("email")?"email":u.includes("phone")?"tel":u==="url"||u.includes("portfolio")||u.includes("github")||u.includes("linkedin")?"url":u.includes("Date")||u==="date"?"date":"text"}function $e({id:u,label:o,value:f,onChange:c,type:m,multiline:p,rows:b=4,hint:T,onKeyDown:S}){const h=u||o.replace(/\s+/g,"_").toLowerCase(),C=m||qg(h),E=!!f;return p?s.jsxs("div",{className:`md-field ${E?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:o}),s.jsx("textarea",{id:h,className:"md-input md-textarea",rows:b,value:f??"",onChange:O=>c(O.target.value),onKeyDown:S}),T&&s.jsx("span",{className:"md-hint",children:T})]}):s.jsxs("div",{className:`md-field ${E?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:o}),s.jsx("input",{id:h,className:"md-input",type:C,value:f??"",onChange:O=>c(O.target.value)}),T&&s.jsx("span",{className:"md-hint",children:T})]})}function rp({children:u,columns:o=2}){return s.jsx("div",{className:`md-grid md-grid-${o}`,children:u})}const Gg=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],Xg=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],Qg=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],Vg=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],Zg=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],Jg=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],Kg={contact:{type:"object",fields:Gg},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:Xg,singular:"education"},experience:{type:"entities",fields:Qg,singular:"experience"},projects:{type:"entities",fields:Vg,singular:"project"},certifications:{type:"entities",fields:Zg,singular:"certification"},achievements:{type:"entities",fields:Jg,singular:"achievement"}};function $g(u){return Kg[u]||{type:"dynamic"}}function yu(u){return u&&typeof u=="object"&&!Array.isArray(u)}function Wg(u){if(typeof u=="string"||!yu(u))return"text";const o=Object.values(u);return!o.length||o.every(f=>typeof f=="string")?"keyValue":o.every(f=>yu(f))?"entities":"keyValue"}function cp({fields:u,value:o,onChange:f}){const c=o||{};return s.jsx(rp,{children:u.map(m=>s.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:s.jsx($e,{id:m.key,label:m.label,value:c[m.key],multiline:m.multiline,rows:m.rows,onChange:p=>f({...c,[m.key]:p})})},m.key))})}function Fg(u){const o=Object.entries(u||{});return o.sort((f,c)=>{const m=parseInt(String(f[0]).split("_").pop(),10)||0,p=parseInt(String(c[0]).split("_").pop(),10)||0;return m-p}),o.map(([,f])=>f)}function Ic(u){const o={};return u.forEach((f,c)=>{o[`title_${c+1}`]=f}),o}function Ig({value:u,onChange:o}){const f=Fg(u);function c(b,T){const S=[...f];S[b]=T,o(Ic(S))}function m(b){o(Ic(f.filter((T,S)=>S!==b)))}function p(){o(Ic([...f,""]))}return s.jsxs("div",{className:"md-title-list",children:[f.map((b,T)=>s.jsxs("div",{className:"md-title-row",children:[s.jsx($e,{id:`title_text_${T}`,label:"Title text",value:b,onChange:S=>c(T,S)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(T),"aria-label":"Remove title",children:"✕"})]},`title-${T}`)),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:p,children:"+ Add title"})]})}function op({value:u,onChange:o,keyLabel:f="Key",valueLabel:c="Value",valueOptional:m,stacked:p}){const b=Object.entries(u||{});function T(E,O,_){const M={...u||{}};delete M[E],O.trim()&&(M[O.trim()]=_),o(M)}function S(E,O){o({...u||{},[E]:O})}function h(E){const O={...u||{}};delete O[E],o(O)}function C(){const E=f.toLowerCase().replace(/\s+/g,"_");let O=b.length+1,_=`${E}_${O}`;for(;(u||{})[_];)O+=1,_=`${E}_${O}`;o({...u||{},[_]:""})}return s.jsxs("div",{className:"md-kv-list",children:[b.map(([E,O])=>s.jsx("div",{className:`md-kv-row ${p?"md-kv-row-stacked":""}`,children:p?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"md-kv-stacked-fields",children:[s.jsx($e,{label:f,value:E,onChange:_=>T(E,_,O)}),s.jsx($e,{label:c,value:O,onChange:_=>S(E,_),multiline:!0,rows:2})]}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(E),"aria-label":"Remove",children:"✕"})]}):s.jsxs(s.Fragment,{children:[s.jsx($e,{label:f,value:E,onChange:_=>T(E,_,O)}),!m&&s.jsx($e,{label:c,value:O,onChange:_=>S(E,_),multiline:String(O).length>60,rows:2}),m&&s.jsx($e,{label:c,value:O,onChange:_=>S(E,_),hint:"Optional"}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(E),"aria-label":"Remove",children:"✕"})]})},E)),s.jsxs("button",{type:"button",className:"md-text-btn",onClick:C,children:["+ Add ",f.toLowerCase()]})]})}function sp({value:u,onChange:o,fields:f,singular:c,sectionKey:m}){const p=Object.entries(u||{}),b=c||m.replace(/s$/,"");function T(h){const C={...u||{}};delete C[h],o(C)}function S(){const h=Object.keys(u||{}).map(_=>parseInt(_.split("_").pop(),10)).filter(_=>!Number.isNaN(_)),C=h.length?Math.max(...h)+1:1,E=`${b}_${C}`,O=f.reduce((_,M)=>({..._,[M.key]:""}),{});o({...u||{},[E]:O})}return s.jsxs("div",{className:"md-entity-list",children:[p.map(([h,C])=>s.jsxs("article",{className:"md-card",children:[s.jsxs("header",{className:"md-card-header",children:[s.jsx("h3",{children:C.name||C.degree||C.company||C.position||al(h)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>T(h),"aria-label":"Remove entry",children:"✕"})]}),s.jsx(cp,{fields:f,value:C,onChange:E=>o({...u||{},[h]:E})})]},h)),s.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:S,children:["+ Add ",al(c||m)]})]})}function Pg({sectionKey:u,value:o,onChange:f}){const c=Wg(o);if(c==="text")return s.jsx($e,{label:al(u),value:typeof o=="string"?o:JSON.stringify(o,null,2),onChange:f,multiline:!0,rows:8});if(c==="keyValue")return s.jsx(op,{value:yu(o)?o:{},onChange:f,keyLabel:"Item",valueLabel:"Value"});if(c==="entities"){const m=Object.values(o||{}).find(yu)||{},p=Object.keys(m).map(b=>({key:b,label:al(b),multiline:b==="description"||String(m[b]).length>80,rows:4}));return s.jsx(sp,{sectionKey:u,value:o,onChange:f,fields:p.length?p:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:u.replace(/s$/,"")})}return s.jsx($e,{label:al(u),value:JSON.stringify(o,null,2),onChange:()=>{},multiline:!0,rows:10})}function eb({sectionKey:u,value:o,onChange:f}){const c=$g(u);return c.type==="text"?s.jsx($e,{label:c.label||al(u),value:typeof o=="string"?o:"",onChange:f,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):c.type==="object"?s.jsx(cp,{fields:c.fields,value:o,onChange:f}):c.type==="titles"?s.jsx(Ig,{value:o,onChange:f}):c.type==="keyValue"?s.jsx(op,{value:o||{},onChange:f,keyLabel:c.keyLabel,valueLabel:c.valueLabel,valueOptional:c.valueOptional,stacked:c.stacked}):c.type==="entities"?s.jsx(sp,{sectionKey:u,value:o,onChange:f,fields:c.fields,singular:c.singular}):s.jsx(Pg,{sectionKey:u,value:o,onChange:f})}const xu=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],tb={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function fu(u){return tb[u]||al(u)}const Hm=new Set(xu);function ab(u){const o=xu.filter(c=>u.includes(c)),f=u.filter(c=>!xu.includes(c)).sort();return[...o,...f]}function lb(){const{showToast:u}=Vn(),[o,f]=x.useState(null),[c,m]=x.useState("contact"),[p,b]=x.useState([]),[T,S]=x.useState(!0),[h,C]=x.useState(!1),E=x.useCallback(async()=>{S(!0);try{const X=(await Ce.getProfile()).profile||{};f(X),b(Object.keys(X).filter(F=>!Hm.has(F)))}catch(H){u(H.message,"error")}finally{S(!1)}},[u]);x.useEffect(()=>{E()},[E]);const O=x.useMemo(()=>{const H=o?Object.keys(o):[];return ab([...new Set([...xu,...H,...p])]).filter(F=>o&&F in o)},[o,p]);function _(H,X){f(F=>({...F,[H]:X}))}function M(){const H=window.prompt("New section name (e.g. Publications):");if(!H)return;const X=H.trim().toLowerCase().replace(/\s+/g,"_");X&&(b(F=>F.includes(X)?F:[...F,X]),f(F=>({...F,[X]:F[X]||{}})),m(X))}function B(){window.confirm(`Delete section "${fu(c)}"?`)&&(f(H=>{const X={...H};return delete X[c],X}),b(H=>H.filter(X=>X!==c)),m("contact"))}async function k(){C(!0);try{await Ce.saveProfile(o),u("Profile saved")}catch(H){u(H.message,"error")}finally{C(!1)}}if(T||!o)return s.jsx("div",{className:"profile-page",children:s.jsx(up,{label:"Loading profile…"})});const J=!Hm.has(c);return s.jsx("div",{className:"profile-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:fu(c)}),s.jsxs("p",{className:"page-lead",children:["Edit your ",fu(c).toLowerCase()," details for tailored applications."]})]}),J&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:B,children:"Delete section"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(eb,{sectionKey:c,value:o[c],onChange:H=>_(c,H)})})]})}),s.jsxs("aside",{className:"profile-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[s.jsx("p",{className:"profile-nav-label",children:"Sections"}),s.jsx("ul",{children:O.map(H=>s.jsx("li",{children:s.jsx("button",{type:"button",className:`profile-nav-item ${c===H?"active":""}`,onClick:()=>m(H),children:fu(H)})},H))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:k,disabled:h,children:h?"Saving…":"Save profile"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:M,children:"+ Section"})]})]})]})})}const Pc={company:"",title:"",location:"",url:"",about:"",description:""};function nb(u){const o=u.split(`
`).map(c=>c.trim()).filter(Boolean),f=u.match(/https?:\/\/[^\s]+/i);return{url:f?f[0]:"",title:o[0]||"",description:u,about:o.slice(0,3).join(" ")}}function ib(u){return u?u.split("_").slice(0,-2).join(" ").replace(/\b\w/g,f=>f.toUpperCase()):""}function ub({draft:u,onChange:o}){return s.jsxs(s.Fragment,{children:[s.jsxs(rp,{children:[s.jsx($e,{id:"job_company",label:"Company",value:u.company,onChange:f=>o({...u,company:f})}),s.jsx($e,{id:"job_title",label:"Job title",value:u.title,onChange:f=>o({...u,title:f})}),s.jsx($e,{id:"job_location",label:"Location",value:u.location,onChange:f=>o({...u,location:f})}),s.jsx($e,{id:"job_url",label:"Job URL",value:u.url,onChange:f=>o({...u,url:f})})]}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_about",label:"About",value:u.about,onChange:f=>o({...u,about:f}),multiline:!0,rows:4,hint:"Company or role overview."})}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_description",label:"Description",value:u.description,onChange:f=>o({...u,description:f}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function rb(){const{showToast:u}=Vn(),[o,f]=x.useState([]),[c,m]=x.useState(null),[p,b]=x.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[T,S]=x.useState(""),[h,C]=x.useState(Pc),[E,O]=x.useState(!1),[_,M]=x.useState(!1),B=x.useRef(null),k=x.useCallback(async()=>{try{const Q=await Ce.listJobs();f(Q.applications||[])}catch(Q){u(Q.message,"error")}},[u]);x.useEffect(()=>{k()},[k]),x.useEffect(()=>{B.current?.scrollIntoView({behavior:"smooth"})},[p]);async function J(Q){m(Q),O(!0);try{const G=await Ce.getJob(Q);C({company:ib(Q),title:G.title||"",location:G.location||"",url:G.url||"",about:G.about||"",description:G.description||""})}catch(G){u(G.message,"error")}}async function H(){const Q=T.trim();if(!(!Q||_)){b(G=>[...G,{role:"user",content:Q}]),S(""),M(!0);try{if(/^https?:\/\//i.test(Q)||Q.includes("linkedin.com")||Q.includes("jobs.")){const re=await Ce.scrapeUrl(Q);C(pe=>({...pe,url:re.url,title:pe.title||re.title||"",about:re.about||pe.about,description:re.description||pe.description})),b(pe=>[...pe,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),O(!0)}else{const re=nb(Q);C(pe=>({...pe,...re,description:Q})),b(pe=>[...pe,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),O(!0)}}catch(G){b(re=>[...re,{role:"assistant",content:`Error: ${G.message}`}])}finally{M(!1)}}}async function X(){if(!h.company.trim()||!h.title.trim()){u("Company and title are required","error");return}M(!0);try{if(c)await Ce.updateJob(c,h),u("Job updated");else{const Q=await Ce.createJob(h);m(Q.slug),u("Job saved")}await k(),O(!0)}catch(Q){u(Q.message,"error")}finally{M(!1)}}async function F(){if(!(!c||!window.confirm("Delete this job?")))try{await Ce.deleteJob(c),m(null),C(Pc),O(!1),await k(),u("Job deleted")}catch(Q){u(Q.message,"error")}}function ee(){m(null),C(Pc),O(!0)}return s.jsx("div",{className:"profile-page jobs-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main jobs-main",children:s.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[E?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:c?"Edit job":"New job"}),s.jsx("p",{className:"page-lead",children:c?"Update role details before generating documents.":"Add a role to start tailoring your application."})]}),c&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:F,children:"Delete job"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(ub,{draft:h,onChange:C})})]}):s.jsxs("div",{className:"jobs-welcome",children:[s.jsx("h1",{children:"Jobs"}),s.jsx("p",{className:"page-lead",children:"Paste a job URL or description in the chat below, or select a saved role from the sidebar."})]}),s.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[s.jsxs("div",{className:"jobs-chat-messages",children:[p.map((Q,G)=>s.jsxs("div",{className:`jobs-chat-bubble ${Q.role}`,children:[s.jsx("span",{className:"jobs-chat-label",children:Q.role==="user"?"You":"Joblication"}),s.jsx("p",{children:Q.content})]},G)),s.jsx("div",{ref:B})]}),s.jsxs("div",{className:"jobs-chat-composer",children:[s.jsx("div",{className:"jobs-chat-input-wrap",children:s.jsx($e,{id:"job_intake",label:"Paste URL or job description",value:T,onChange:S,multiline:!0,rows:3,onKeyDown:Q=>{Q.key==="Enter"&&!Q.shiftKey&&(Q.preventDefault(),H())}})}),s.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:H,disabled:_,children:_?"…":"Send"})]})]})]})}),s.jsxs("aside",{className:"profile-sidebar jobs-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[s.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),s.jsxs("ul",{children:[o.map(Q=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${c===Q.slug?"active":""}`,onClick:()=>J(Q.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:Q.title||Q.slug}),Q.location&&s.jsx("span",{className:"jobs-nav-meta",children:Q.location})]})},Q.slug)),!o.length&&s.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:X,disabled:_||!E,children:_?"Saving…":"Save job"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:ee,children:"+ New job"})]})]})]})})}const no=[{value:"unsubmitted",label:"Unsubmitted"},{value:"submitted",label:"Submitted"},{value:"interview",label:"Interview"},{value:"accepted",label:"Accepted"},{value:"rejected",label:"Rejected"}],cb=Object.fromEntries(no.map(u=>[u.value,u.label]));function ob(u){const o={all:u.length,unsubmitted:0,submitted:0,interview:0,accepted:0,rejected:0,withOutput:0};for(const f of u)o[f.status]!==void 0&&(o[f.status]+=1),f.has_output&&(o.withOutput+=1);return o}function sb(){const{showToast:u}=Vn(),[o,f]=x.useState([]),[c,m]=x.useState(!1),[p,b]=x.useState(null),[T,S]=x.useState(!0),[h,C]=x.useState("all"),E=x.useCallback(async()=>{S(!0);try{const H=await Ce.listApplications();f(H.applications||[])}catch(H){u(H.message,"error")}finally{S(!1)}},[u]),O=x.useCallback(async()=>{try{const H=await Ce.generateStatus();b(H),H.running?setTimeout(O,2e3):(m(!1),H.error?u(H.error,"error"):H.step==="complete"&&(u("Generation complete"),E()))}catch{m(!1)}},[E,u]);x.useEffect(()=>{E()},[E]);const _=x.useMemo(()=>ob(o),[o]),M=x.useMemo(()=>h==="all"?o:h==="with_output"?o.filter(H=>H.has_output):o.filter(H=>H.status===h),[o,h]);async function B(H,X){try{await Ce.updateJob(H,{status:X}),f(F=>F.map(ee=>ee.slug===H?{...ee,status:X}:ee))}catch(F){u(F.message,"error")}}async function k(){m(!0);try{await Ce.startGenerate(),O()}catch(H){m(!1),u(H.message,"error")}}const J=[{key:"all",label:"All applications",count:_.all},{key:"with_output",label:"Ready to review",count:_.withOutput},...no.map(H=>({key:H.value,label:H.label,count:_[H.value]}))];return T?s.jsx("div",{className:"profile-page",children:s.jsx(up,{label:"Loading applications…"})}):s.jsx("div",{className:"profile-page applications-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner applications-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Applications"}),s.jsx("p",{className:"page-lead",children:"Track generated documents and pipeline status for each role."})]}),s.jsxs("button",{type:"button",className:"md-filled-btn applications-generate-btn",onClick:k,disabled:c||!o.length,children:[s.jsx(Dg,{}),c?`Generating… ${p?.step||""}`:"Generate all"]})]}),c&&s.jsxs("div",{className:"generation-banner",children:[s.jsx("div",{className:"generation-banner-track",children:s.jsx("div",{className:"generation-banner-fill"})}),s.jsxs("p",{children:["Running pipeline",p?.step?` — ${p.step}`:"…"]})]}),o.length?M.length?s.jsx("div",{className:"applications-grid",children:M.map(H=>s.jsxs("article",{className:"application-card",children:[s.jsxs("div",{className:"application-card-top",children:[s.jsxs("div",{children:[s.jsx("h3",{children:H.title||H.slug}),s.jsx("p",{className:"application-card-slug",children:H.slug})]}),s.jsx("select",{value:H.status,onChange:X=>B(H.slug,X.target.value),className:`status-pill status-${H.status}`,"aria-label":"Application status",children:no.map(X=>s.jsx("option",{value:X.value,children:X.label},X.value))})]}),s.jsxs("div",{className:"application-card-body",children:[s.jsx("span",{className:`output-badge ${H.has_output?"ready":"pending"}`,children:H.has_output?"Documents ready":"Awaiting generation"}),H.has_output?s.jsx("ul",{className:"application-files",children:H.files.map(X=>s.jsx("li",{children:s.jsxs("a",{href:Ce.fileUrl(H.output_folder,X),target:"_blank",rel:"noreferrer",className:"application-file-link",children:[s.jsx(Ug,{}),s.jsx("span",{children:X.replace(/.*\//,"")}),s.jsx(Hg,{})]})},X))}):s.jsx("p",{className:"application-hint",children:"Run Generate all to create CV and cover letter."})]}),s.jsxs("div",{className:"application-card-footer",children:[s.jsx(bu,{to:`/review?slug=${encodeURIComponent(H.slug)}`,className:"md-text-btn",children:"Review & edit"}),s.jsx("span",{className:"application-status-label",children:cb[H.status]})]})]},H.slug))}):s.jsx(Um,{icon:lo,title:"No matches",description:"Try a different filter from the sidebar."}):s.jsx(Um,{icon:lo,title:"No applications yet",description:"Add jobs from the Jobs page, then generate tailored CVs and cover letters here.",action:s.jsx(bu,{to:"/jobs",className:"md-outlined-btn",children:"Go to Jobs"})})]})}),s.jsxs("aside",{className:"profile-sidebar applications-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Filter applications",children:[s.jsx("p",{className:"profile-nav-label",children:"Filter"}),s.jsx("ul",{children:J.map(H=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item filter-item ${h===H.key?"active":""}`,onClick:()=>C(H.key),children:[s.jsx("span",{className:"filter-label",children:H.label}),s.jsx("span",{className:"filter-count",children:H.count})]})},H.key))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsxs("div",{className:"applications-stats",children:[s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:_.all}),s.jsx("span",{className:"stat-label",children:"Total"})]}),s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:_.withOutput}),s.jsx("span",{className:"stat-label",children:"Generated"})]})]}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:k,disabled:c||!o.length,children:c?"Generating…":"Generate all"})]})]})]})})}function du(u,o,f){return Math.min(f,Math.max(o,u))}function fb(u){return Math.round(u*10)/10}function db({layout:u,sections:o,activeSection:f,onSelectSection:c,onUpdateSection:m}){const p=x.useRef(null),b=x.useRef(null),T=u.pageWidth||595,S=u.pageHeight||842,h=u.zoom||1,C=[...o].sort((M,B)=>(M.zIndex??1)-(B.zIndex??1)),E=x.useCallback(()=>{b.current=null},[]),O=x.useCallback(M=>{const B=b.current,k=p.current;if(!B||!k)return;const J=k.getBoundingClientRect(),H=(M.clientX-B.startX)/J.width*100,X=(M.clientY-B.startY)/J.height*100,F=u.snapToGrid?u.gridSize||1:0,ee=Q=>F>0?Math.round(Q/F)*F:fb(Q);if(B.mode==="move"){const Q=100-B.origW,G=100-B.origH;m(B.id,{x:ee(du(B.origX+H,0,Q)),y:ee(du(B.origY+X,0,G))})}else B.mode==="resize"&&m(B.id,{w:ee(du(B.origW+H,8,100-B.origX)),h:ee(du(B.origH+X,4,100-B.origY))})},[u.snapToGrid,u.gridSize,m]);x.useEffect(()=>(window.addEventListener("pointermove",O),window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}),[O,E]);function _(M,B,k){B.locked||(M.stopPropagation(),M.preventDefault(),b.current={id:B.id,mode:k,startX:M.clientX,startY:M.clientY,origX:B.x,origY:B.y,origW:B.w,origH:B.h},c(B.id))}return s.jsxs("div",{className:"ps-workspace",children:[s.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(M,B)=>s.jsx("span",{style:{left:`${B/11*100}%`},children:Math.round(T/11*B)},B))}),s.jsx("div",{className:"ps-canvas-scroll",children:s.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${h})`,transformOrigin:"top center"},children:s.jsxs("div",{ref:p,className:"ps-canvas",style:{width:T,minHeight:S,padding:u.pagePadding,fontSize:`${u.fontSize}px`,lineHeight:u.lineHeight,fontFamily:u.fontFamily||"Georgia, serif",backgroundColor:u.pageBackground||"#ffffff"},onClick:()=>c(null),onKeyDown:()=>{},role:"presentation",children:[u.showGrid&&s.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${u.gridSize||5}% ${u.gridSize||5}%`}}),C.filter(M=>M.visible!==!1).map(M=>{const B=f===M.id;return s.jsxs("div",{className:`ps-layer ${B?"selected":""} ${M.locked?"locked":""}`,style:{left:`${M.x}%`,top:`${M.y}%`,width:`${M.w}%`,minHeight:`${M.h}%`,zIndex:M.zIndex??1,opacity:M.opacity??1,fontSize:M.fontSize?`${M.fontSize}px`:void 0,textAlign:M.textAlign||"left",padding:M.padding??8,backgroundColor:M.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:k=>{k.stopPropagation(),c(M.id)},onPointerDown:k=>_(k,M,"move"),onKeyDown:()=>{},role:"button",tabIndex:0,children:[s.jsx("span",{className:"ps-layer-label",children:M.label}),s.jsx("p",{className:"ps-layer-preview",children:"Section content"}),B&&!M.locked&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"ps-handle ps-handle-nw"}),s.jsx("span",{className:"ps-handle ps-handle-ne"}),s.jsx("span",{className:"ps-handle ps-handle-sw"}),s.jsx("span",{className:"ps-handle ps-handle-se",onPointerDown:k=>_(k,M,"resize")}),s.jsx("span",{className:"ps-handle ps-handle-n"}),s.jsx("span",{className:"ps-handle ps-handle-s"}),s.jsx("span",{className:"ps-handle ps-handle-w"}),s.jsx("span",{className:"ps-handle ps-handle-e"})]})]},M.id)})]})})})]})}const ql={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function Lm(u){if(!u)return{...ql,sections:ql.sections.map(f=>({...f}))};const o=(u.sections||ql.sections).map(f=>({...ql.sections[0],...f}));return{...ql,...u,sections:o}}function Ke({label:u,children:o}){return s.jsxs("div",{className:"ps-prop-row",children:[s.jsx("label",{children:u}),o]})}function Qt({value:u,onChange:o,min:f,max:c,step:m=1,unit:p="%"}){return s.jsxs("div",{className:"ps-range-field",children:[s.jsx("input",{type:"range",min:f,max:c,step:m,value:u,onChange:b=>o(Number(b.target.value))}),s.jsx("input",{type:"number",className:"ps-num-input",min:f,max:c,step:m,value:u,onChange:b=>o(Number(b.target.value))}),s.jsx("span",{className:"ps-unit",children:p})]})}function mb(){const{showToast:u}=Vn(),[o,f]=x.useState({}),[c,m]=x.useState({}),[p,b]=x.useState(""),[T,S]=x.useState(""),[h,C]=x.useState("cv"),[E,O]=x.useState(""),[_,M]=x.useState(()=>Lm(null)),[B,k]=x.useState("contact"),[J,H]=x.useState("layer"),[X,F]=x.useState(!1),ee=x.useMemo(()=>({...o,...c}),[o,c]),Q=_.sections||[],G=Q.find(g=>g.id===B),re=x.useCallback(async()=>{try{const g=await Ce.listTemplates();f(g.catalog||{}),m(g.custom||{});const V=Object.keys({...g.catalog||{},...g.custom||{}});V.length&&!p&&b(V[0])}catch(g){u(g.message,"error")}},[p,u]),pe=x.useCallback(async g=>{if(g)try{const V=await Ce.getTemplate(g);S(V.name||g),C(V.category||"cv"),O(V.source||"");const te=Lm(V.layout);M(te),te.sections?.length&&k(te.sections[0].id)}catch(V){u(V.message,"error")}},[u]);x.useEffect(()=>{re()},[re]),x.useEffect(()=>{p&&pe(p)},[p,pe]);const he=x.useCallback((g,V)=>{M(te=>({...te,sections:te.sections.map(ie=>ie.id===g?{...ie,...V}:ie)}))},[]);function Ve(){const g=window.prompt("Layer name:");if(!g)return;const V=g.toLowerCase().replace(/\s+/g,"_"),te=Math.max(0,...Q.map(ie=>ie.zIndex??1));M(ie=>({...ie,sections:[...ie.sections,{id:V,label:g,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:te+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),k(V)}function Ae(){!G||!window.confirm(`Delete layer "${G.label}"?`)||(M(g=>({...g,sections:g.sections.filter(V=>V.id!==B)})),k(Q[0]?.id||""))}function tt(g,V){const te=[...Q].sort((K,ae)=>(K.zIndex??1)-(ae.zIndex??1)),ie=te.findIndex(K=>K.id===g),j=V==="up"?ie+1:ie-1;if(j<0||j>=te.length)return;const q=te[ie],Z=te[j];he(q.id,{zIndex:Z.zIndex??j+1}),he(Z.id,{zIndex:q.zIndex??ie+1})}async function ke(){F(!0);try{await Ce.saveTemplate(p,{name:T,category:h,source:E,layout:_}),u("Template saved"),await re()}catch(g){u(g.message,"error")}finally{F(!1)}}async function Re(){const g=window.prompt("Template id (e.g. my_cv):");if(g){F(!0);try{await Ce.createTemplate({id:g,name:g,category:"cv",source:`<!-- Custom template -->
`,layout:ql}),b(g),await re(),u("Template created")}catch(V){u(V.message,"error")}finally{F(!1)}}}const D=[...Q].sort((g,V)=>(V.zIndex??1)-(g.zIndex??1));return s.jsxs("div",{className:"ps-editor",children:[s.jsxs("header",{className:"ps-toolbar",children:[s.jsxs("div",{className:"ps-toolbar-left",children:[s.jsx("select",{value:p,onChange:g=>b(g.target.value),className:"ps-select",children:Object.entries(ee).map(([g,V])=>s.jsx("option",{value:g,children:V.name||g},g))}),s.jsx("button",{type:"button",className:"ps-tool-btn",onClick:Re,children:"New"}),s.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:ke,disabled:X,children:X?"Saving…":"Save"})]}),s.jsx("div",{className:"ps-toolbar-center",children:s.jsx("span",{className:"ps-doc-name",children:T||"Untitled"})}),s.jsxs("div",{className:"ps-toolbar-right",children:[s.jsxs("label",{className:"ps-zoom-label",children:["Zoom",s.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:_.zoom||.85,onChange:g=>M({..._,zoom:Number(g.target.value)})}),s.jsxs("span",{children:[Math.round((_.zoom||.85)*100),"%"]})]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:_.snapToGrid,onChange:g=>M({..._,snapToGrid:g.target.checked})}),"Snap"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:_.showGrid,onChange:g=>M({..._,showGrid:g.target.checked})}),"Grid"]})]})]}),s.jsxs("div",{className:"ps-body",children:[s.jsxs("aside",{className:"ps-panel ps-layers",children:[s.jsxs("div",{className:"ps-panel-head",children:[s.jsx("h3",{children:"Layers"}),s.jsx("button",{type:"button",className:"ps-icon-btn",onClick:Ve,title:"Add layer",children:"+"})]}),s.jsx("ul",{className:"ps-layer-list",children:D.map(g=>s.jsxs("li",{children:[s.jsxs("button",{type:"button",className:`ps-layer-item ${B===g.id?"active":""}`,onClick:()=>k(g.id),children:[s.jsx("span",{className:`ps-eye ${g.visible!==!1?"on":"off"}`,onClick:V=>{V.stopPropagation(),he(g.id,{visible:!g.visible})},onKeyDown:()=>{},role:"button",tabIndex:0,title:g.visible!==!1?"Hide layer":"Show layer"}),s.jsx("span",{className:"ps-layer-name",children:g.label}),g.locked&&s.jsx("span",{className:"ps-lock-badge",children:"L"})]}),s.jsxs("div",{className:"ps-layer-actions",children:[s.jsx("button",{type:"button",className:"ps-mini-btn",onClick:()=>tt(g.id,"up"),title:"Bring forward",children:"▲"}),s.jsx("button",{type:"button",className:"ps-mini-btn",onClick:()=>tt(g.id,"down"),title:"Send backward",children:"▼"})]})]},g.id))})]}),s.jsx(db,{layout:_,sections:Q,activeSection:B,onSelectSection:k,onUpdateSection:he}),s.jsxs("aside",{className:"ps-panel ps-properties",children:[s.jsxs("div",{className:"ps-tabs",children:[s.jsx("button",{type:"button",className:J==="document"?"active":"",onClick:()=>H("document"),children:"Document"}),s.jsx("button",{type:"button",className:J==="layer"?"active":"",onClick:()=>H("layer"),children:"Layer"}),s.jsx("button",{type:"button",className:J==="source"?"active":"",onClick:()=>H("source"),children:"Source"})]}),J==="document"&&s.jsxs("div",{className:"ps-props",children:[s.jsx($e,{label:"Template name",value:T,onChange:S}),s.jsx(Ke,{label:"Category",children:s.jsxs("select",{value:h,onChange:g=>C(g.target.value),className:"ps-select full",children:[s.jsx("option",{value:"cv",children:"CV"}),s.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),s.jsx(Ke,{label:"Page width (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageWidth,onChange:g=>M({..._,pageWidth:Number(g.target.value)})})}),s.jsx(Ke,{label:"Page height (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageHeight,onChange:g=>M({..._,pageHeight:Number(g.target.value)})})}),s.jsx(Ke,{label:"Padding (px)",children:s.jsx(Qt,{value:_.pagePadding,onChange:g=>M({..._,pagePadding:g}),min:0,max:120,unit:"px"})}),s.jsx(Ke,{label:"Background",children:s.jsx("input",{type:"color",className:"ps-color-input",value:_.pageBackground||"#ffffff",onChange:g=>M({..._,pageBackground:g.target.value})})}),s.jsx(Ke,{label:"Base font size",children:s.jsx(Qt,{value:_.fontSize,onChange:g=>M({..._,fontSize:g}),min:8,max:18,unit:"px"})}),s.jsx(Ke,{label:"Line height",children:s.jsx(Qt,{value:_.lineHeight,onChange:g=>M({..._,lineHeight:g}),min:1,max:2,step:.05,unit:""})}),s.jsx(Ke,{label:"Font family",children:s.jsx("input",{className:"ps-text-input full",value:_.fontFamily||"",onChange:g=>M({..._,fontFamily:g.target.value})})}),s.jsx(Ke,{label:"Grid size",children:s.jsx(Qt,{value:_.gridSize||5,onChange:g=>M({..._,gridSize:g}),min:1,max:20,unit:"%"})})]}),J==="layer"&&G&&s.jsxs("div",{className:"ps-props",children:[s.jsx("h4",{className:"ps-layer-title",children:G.label}),s.jsx(Ke,{label:"X position",children:s.jsx(Qt,{value:G.x,onChange:g=>he(G.id,{x:g}),min:0,max:95})}),s.jsx(Ke,{label:"Y position",children:s.jsx(Qt,{value:G.y,onChange:g=>he(G.id,{y:g}),min:0,max:95})}),s.jsx(Ke,{label:"Width",children:s.jsx(Qt,{value:G.w,onChange:g=>he(G.id,{w:g}),min:8,max:100})}),s.jsx(Ke,{label:"Height",children:s.jsx(Qt,{value:G.h,onChange:g=>he(G.id,{h:g}),min:4,max:80})}),s.jsx(Ke,{label:"Opacity",children:s.jsx(Qt,{value:Math.round((G.opacity??1)*100),onChange:g=>he(G.id,{opacity:g/100}),min:10,max:100,unit:"%"})}),s.jsx(Ke,{label:"Layer padding",children:s.jsx(Qt,{value:G.padding??8,onChange:g=>he(G.id,{padding:g}),min:0,max:32,unit:"px"})}),s.jsx(Ke,{label:"Text align",children:s.jsxs("select",{className:"ps-select full",value:G.textAlign||"left",onChange:g=>he(G.id,{textAlign:g.target.value}),children:[s.jsx("option",{value:"left",children:"Left"}),s.jsx("option",{value:"center",children:"Center"}),s.jsx("option",{value:"right",children:"Right"}),s.jsx("option",{value:"justify",children:"Justify"})]})}),s.jsx(Ke,{label:"Fill color",children:s.jsx("input",{type:"color",className:"ps-color-input",value:G.bgColor?.startsWith("#")?G.bgColor:"#e8f0fe",onChange:g=>he(G.id,{bgColor:g.target.value})})}),s.jsx(Ke,{label:"Font size override",children:s.jsx("input",{type:"number",className:"ps-num-input full",placeholder:"Inherit",value:G.fontSize??"",onChange:g=>he(G.id,{fontSize:g.target.value?Number(g.target.value):void 0})})}),s.jsxs("div",{className:"ps-check-group",children:[s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:G.visible!==!1,onChange:g=>he(G.id,{visible:g.target.checked})}),"Visible"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:!!G.locked,onChange:g=>he(G.id,{locked:g.target.checked})}),"Lock"]})]}),s.jsx("button",{type:"button",className:"ps-danger-btn",onClick:Ae,children:"Delete layer"})]}),J==="layer"&&!G&&s.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),J==="source"&&s.jsx("textarea",{className:"ps-source-editor",value:E,onChange:g=>O(g.target.value)})]})]})]})}function mu(u,o){return(u||[]).find(f=>f.toLowerCase().includes(o))}function pb(){const{showToast:u}=Vn(),[o,f]=Sg(),[c,m]=x.useState([]),[p,b]=x.useState(o.get("slug")||""),[T,S]=x.useState(null),[h,C]=x.useState(""),[E,O]=x.useState(""),[_,M]=x.useState("preview"),[B,k]=x.useState("cv"),[J,H]=x.useState("html"),[X,F]=x.useState(!1),ee=x.useCallback(async()=>{try{const g=await Ce.listApplications();m(g.applications||[]),!p&&g.applications?.length&&b(g.applications[0].slug)}catch(g){u(g.message,"error")}},[u,p]),Q=x.useCallback(async()=>{if(p)try{const g=await Ce.getReview(p);S(g),C(JSON.stringify(g.stage_2||{},null,2)),O(JSON.stringify(g.stage_3||{},null,2))}catch(g){u(g.message,"error")}},[p,u]);x.useEffect(()=>{ee()},[ee]),x.useEffect(()=>{p&&(f({slug:p}),Q())},[p,Q,f]);const G=T?.output_folder||c.find(g=>g.slug===p)?.output_folder,re=T?.files?.length?T.files:c.find(g=>g.slug===p)?.files||[],pe=mu(re,"_cv.html"),he=mu(re,"_cv.pdf"),Ve=mu(re,"_cover_letter.html"),Ae=mu(re,"_cover_letter.pdf"),tt=x.useMemo(()=>B==="cv"?J==="pdf"?he:pe:J==="pdf"?Ae:Ve,[B,J,pe,he,Ve,Ae]),ke=G&&tt?Ce.fileUrl(G,tt):null;async function Re(){F(!0);try{let g,V;try{g=JSON.parse(h),V=JSON.parse(E)}catch(te){throw new Error(`Invalid JSON: ${te.message}`)}await Ce.saveReview(p,{app_key:T?.app_key,stage_2:g,stage_3:V}),u("Saved edits"),await Q()}catch(g){u(g.message,"error")}finally{F(!1)}}async function D(){F(!0);try{await Ce.saveReview(p,{app_key:T?.app_key,stage_2:JSON.parse(h),stage_3:JSON.parse(E)}),await Ce.rebuild(p),u("PDFs rebuilt"),await ee(),await Q(),M("preview"),H("pdf")}catch(g){u(g.message,"error")}finally{F(!1)}}return s.jsx("div",{className:"profile-page review-page",children:s.jsxs("div",{className:"profile-layout review-layout",children:[s.jsx("main",{className:"profile-main review-main",children:s.jsxs("div",{className:"profile-main-inner review-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Review"}),s.jsx("p",{className:"page-lead",children:"Preview generated documents and fine-tune CV and cover letter content."})]}),s.jsxs("div",{className:"header-actions",children:[s.jsx("select",{value:p,onChange:g=>b(g.target.value),className:"ps-select",children:c.map(g=>s.jsx("option",{value:g.slug,children:g.title||g.slug},g.slug))}),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:Re,disabled:X,children:"Save edits"}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:D,disabled:X,children:X?"Working…":"Save & export PDF"})]})]}),s.jsxs("div",{className:"review-tabs",children:[s.jsx("button",{type:"button",className:_==="preview"?"active":"",onClick:()=>M("preview"),children:"Preview"}),s.jsx("button",{type:"button",className:_==="cv"?"active":"",onClick:()=>M("cv"),children:"CV JSON"}),s.jsx("button",{type:"button",className:_==="letter"?"active":"",onClick:()=>M("letter"),children:"Letter JSON"})]}),_==="preview"&&s.jsxs("div",{className:"review-preview-panel",children:[!G&&s.jsxs("p",{className:"muted review-empty",children:["No generated files yet. Run ",s.jsx("strong",{children:"Generate all"})," from Applications, then return here."]}),G&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"review-preview-toolbar",children:[s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:B==="cv"?"active":"",onClick:()=>k("cv"),children:"CV"}),s.jsx("button",{type:"button",className:B==="letter"?"active":"",onClick:()=>k("letter"),children:"Cover letter"})]}),s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:J==="html"?"active":"",onClick:()=>H("html"),disabled:!(B==="cv"?pe:Ve),children:"HTML"}),s.jsx("button",{type:"button",className:J==="pdf"?"active":"",onClick:()=>H("pdf"),disabled:!(B==="cv"?he:Ae),children:"PDF"})]}),ke&&s.jsx("a",{href:ke,target:"_blank",rel:"noreferrer",className:"md-text-btn",children:"Open in new tab"})]}),ke?s.jsx("div",{className:"review-preview-frame-wrap",children:s.jsx("iframe",{title:`${B} ${J} preview`,src:ke,className:"review-preview-frame"},ke)}):s.jsx("p",{className:"muted review-empty",children:J==="pdf"?"PDF not found — run Save & export PDF.":"HTML preview not available."}),s.jsxs("div",{className:"review-download-row",children:[he&&s.jsx("a",{href:Ce.fileUrl(G,he),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download CV PDF"}),Ae&&s.jsx("a",{href:Ce.fileUrl(G,Ae),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download letter PDF"})]})]})]}),_==="cv"&&s.jsx("textarea",{className:"code-area review-editor",value:h,onChange:g=>C(g.target.value)}),_==="letter"&&s.jsx("textarea",{className:"code-area review-editor",value:E,onChange:g=>O(g.target.value)})]})}),s.jsx("aside",{className:"profile-sidebar review-sidebar",children:s.jsxs("nav",{className:"profile-nav",children:[s.jsx("p",{className:"profile-nav-label",children:"Applications"}),s.jsxs("ul",{children:[c.map(g=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${p===g.slug?"active":""}`,onClick:()=>b(g.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:g.title||g.slug}),s.jsx("span",{className:"jobs-nav-meta",children:g.has_output?"Has output":"No output yet"})]})},g.slug)),!c.length&&s.jsx("li",{className:"jobs-empty",children:"No applications"})]})]})})]})})}function hb(){return s.jsx(Z0,{children:s.jsxs(Ua,{element:s.jsx(kg,{}),children:[s.jsx(Ua,{index:!0,element:s.jsx(X0,{to:"/jobs",replace:!0})}),s.jsx(Ua,{path:"profile",element:s.jsx(lb,{})}),s.jsx(Ua,{path:"jobs",element:s.jsx(rb,{})}),s.jsx(Ua,{path:"applications",element:s.jsx(sb,{})}),s.jsx(Ua,{path:"templates",element:s.jsx(mb,{})}),s.jsx(Ua,{path:"review",element:s.jsx(pb,{})})]})})}const vb=`
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
`;function gb(){return s.jsx("style",{children:vb})}Xv.createRoot(document.getElementById("root")).render(s.jsx(x.StrictMode,{children:s.jsxs(gg,{children:[s.jsx(gb,{}),s.jsx(Yg,{children:s.jsx(hb,{})})]})}));
