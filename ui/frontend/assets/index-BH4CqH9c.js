(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();var Xc={exports:{}},Yn={};var bm;function Dg(){if(bm)return Yn;bm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(c,m,p){var v=null;if(p!==void 0&&(v=""+p),m.key!==void 0&&(v=""+m.key),"key"in m){p={};for(var z in m)z!=="key"&&(p[z]=m[z])}else p=m;return m=p.ref,{$$typeof:u,type:c,key:v,ref:m!==void 0?m:null,props:p}}return Yn.Fragment=o,Yn.jsx=f,Yn.jsxs=f,Yn}var ym;function Ug(){return ym||(ym=1,Xc.exports=Dg()),Xc.exports}var s=Ug(),Qc={exports:{}},le={};var xm;function Hg(){if(xm)return le;xm=1;var u=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),v=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),A=Symbol.iterator;function _(j){return j===null||typeof j!="object"?null:(j=A&&j[A]||j["@@iterator"],typeof j=="function"?j:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,H={};function J(j,Y,Z){this.props=j,this.context=Y,this.refs=H,this.updater=Z||M}J.prototype.isReactComponent={},J.prototype.setState=function(j,Y){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Y,"setState")},J.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function L(){}L.prototype=J.prototype;function X(j,Y,Z){this.props=j,this.context=Y,this.refs=H,this.updater=Z||M}var F=X.prototype=new L;F.constructor=X,B(F,J.prototype),F.isPureReactComponent=!0;var ee=Array.isArray;function Q(){}var G={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function pe(j,Y,Z){var $=Z.ref;return{$$typeof:u,type:j,key:Y,ref:$!==void 0?$:null,props:Z}}function ye(j,Y){return pe(j.type,Y,j.props)}function Ve(j){return typeof j=="object"&&j!==null&&j.$$typeof===u}function Ae(j){var Y={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Z){return Y[Z]})}var at=/\/+/g;function ke(j,Y){return typeof j=="object"&&j!==null&&j.key!=null?Ae(""+j.key):Y.toString(36)}function Re(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Q,Q):(j.status="pending",j.then(function(Y){j.status==="pending"&&(j.status="fulfilled",j.value=Y)},function(Y){j.status==="pending"&&(j.status="rejected",j.reason=Y)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function D(j,Y,Z,$,ae){var te=typeof j;(te==="undefined"||te==="boolean")&&(j=null);var he=!1;if(j===null)he=!0;else switch(te){case"bigint":case"string":case"number":he=!0;break;case"object":switch(j.$$typeof){case u:case o:he=!0;break;case w:return he=j._init,D(he(j._payload),Y,Z,$,ae)}}if(he)return ae=ae(j),he=$===""?"."+ke(j,0):$,ee(ae)?(Z="",he!=null&&(Z=he.replace(at,"$&/")+"/"),D(ae,Y,Z,"",function(Zl){return Zl})):ae!=null&&(Ve(ae)&&(ae=ye(ae,Z+(ae.key==null||j&&j.key===ae.key?"":(""+ae.key).replace(at,"$&/")+"/")+he)),Y.push(ae)),1;he=0;var lt=$===""?".":$+":";if(ee(j))for(var Ue=0;Ue<j.length;Ue++)$=j[Ue],te=lt+ke($,Ue),he+=D($,Y,Z,te,ae);else if(Ue=_(j),typeof Ue=="function")for(j=Ue.call(j),Ue=0;!($=j.next()).done;)$=$.value,te=lt+ke($,Ue++),he+=D($,Y,Z,te,ae);else if(te==="object"){if(typeof j.then=="function")return D(Re(j),Y,Z,$,ae);throw Y=String(j),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return he}function x(j,Y,Z){if(j==null)return j;var $=[],ae=0;return D(j,$,"","",function(te){return Y.call(Z,te,ae++)}),$}function V(j){if(j._status===-1){var Y=j._result;Y=Y(),Y.then(function(Z){(j._status===0||j._status===-1)&&(j._status=1,j._result=Z)},function(Z){(j._status===0||j._status===-1)&&(j._status=2,j._result=Z)}),j._status===-1&&(j._status=0,j._result=Y)}if(j._status===1)return j._result.default;throw j._result}var ne=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},ce={map:x,forEach:function(j,Y,Z){x(j,function(){Y.apply(this,arguments)},Z)},count:function(j){var Y=0;return x(j,function(){Y++}),Y},toArray:function(j){return x(j,function(Y){return Y})||[]},only:function(j){if(!Ve(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return le.Activity=E,le.Children=ce,le.Component=J,le.Fragment=f,le.Profiler=m,le.PureComponent=X,le.StrictMode=c,le.Suspense=b,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(j){return G.H.useMemoCache(j)}},le.cache=function(j){return function(){return j.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(j,Y,Z){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var $=B({},j.props),ae=j.key;if(Y!=null)for(te in Y.key!==void 0&&(ae=""+Y.key),Y)!re.call(Y,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Y.ref===void 0||($[te]=Y[te]);var te=arguments.length-2;if(te===1)$.children=Z;else if(1<te){for(var he=Array(te),lt=0;lt<te;lt++)he[lt]=arguments[lt+2];$.children=he}return pe(j.type,ae,$)},le.createContext=function(j){return j={$$typeof:v,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:p,_context:j},j},le.createElement=function(j,Y,Z){var $,ae={},te=null;if(Y!=null)for($ in Y.key!==void 0&&(te=""+Y.key),Y)re.call(Y,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ae[$]=Y[$]);var he=arguments.length-2;if(he===1)ae.children=Z;else if(1<he){for(var lt=Array(he),Ue=0;Ue<he;Ue++)lt[Ue]=arguments[Ue+2];ae.children=lt}if(j&&j.defaultProps)for($ in he=j.defaultProps,he)ae[$]===void 0&&(ae[$]=he[$]);return pe(j,te,ae)},le.createRef=function(){return{current:null}},le.forwardRef=function(j){return{$$typeof:z,render:j}},le.isValidElement=Ve,le.lazy=function(j){return{$$typeof:w,_payload:{_status:-1,_result:j},_init:V}},le.memo=function(j,Y){return{$$typeof:h,type:j,compare:Y===void 0?null:Y}},le.startTransition=function(j){var Y=G.T,Z={};G.T=Z;try{var $=j(),ae=G.S;ae!==null&&ae(Z,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Q,ne)}catch(te){ne(te)}finally{Y!==null&&Z.types!==null&&(Y.types=Z.types),G.T=Y}},le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(j){return G.H.use(j)},le.useActionState=function(j,Y,Z){return G.H.useActionState(j,Y,Z)},le.useCallback=function(j,Y){return G.H.useCallback(j,Y)},le.useContext=function(j){return G.H.useContext(j)},le.useDebugValue=function(){},le.useDeferredValue=function(j,Y){return G.H.useDeferredValue(j,Y)},le.useEffect=function(j,Y){return G.H.useEffect(j,Y)},le.useEffectEvent=function(j){return G.H.useEffectEvent(j)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(j,Y,Z){return G.H.useImperativeHandle(j,Y,Z)},le.useInsertionEffect=function(j,Y){return G.H.useInsertionEffect(j,Y)},le.useLayoutEffect=function(j,Y){return G.H.useLayoutEffect(j,Y)},le.useMemo=function(j,Y){return G.H.useMemo(j,Y)},le.useOptimistic=function(j,Y){return G.H.useOptimistic(j,Y)},le.useReducer=function(j,Y,Z){return G.H.useReducer(j,Y,Z)},le.useRef=function(j){return G.H.useRef(j)},le.useState=function(j){return G.H.useState(j)},le.useSyncExternalStore=function(j,Y,Z){return G.H.useSyncExternalStore(j,Y,Z)},le.useTransition=function(){return G.H.useTransition()},le.version="19.2.7",le}var Sm;function io(){return Sm||(Sm=1,Qc.exports=Hg()),Qc.exports}var y=io(),Vc={exports:{}},qn={},Zc={exports:{}},Jc={};var jm;function Lg(){return jm||(jm=1,(function(u){function o(D,x){var V=D.length;D.push(x);e:for(;0<V;){var ne=V-1>>>1,ce=D[ne];if(0<m(ce,x))D[ne]=x,D[V]=ce,V=ne;else break e}}function f(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var x=D[0],V=D.pop();if(V!==x){D[0]=V;e:for(var ne=0,ce=D.length,j=ce>>>1;ne<j;){var Y=2*(ne+1)-1,Z=D[Y],$=Y+1,ae=D[$];if(0>m(Z,V))$<ce&&0>m(ae,Z)?(D[ne]=ae,D[$]=V,ne=$):(D[ne]=Z,D[Y]=V,ne=Y);else if($<ce&&0>m(ae,V))D[ne]=ae,D[$]=V,ne=$;else break e}}return x}function m(D,x){var V=D.sortIndex-x.sortIndex;return V!==0?V:D.id-x.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;u.unstable_now=function(){return p.now()}}else{var v=Date,z=v.now();u.unstable_now=function(){return v.now()-z}}var b=[],h=[],w=1,E=null,A=3,_=!1,M=!1,B=!1,H=!1,J=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function F(D){for(var x=f(h);x!==null;){if(x.callback===null)c(h);else if(x.startTime<=D)c(h),x.sortIndex=x.expirationTime,o(b,x);else break;x=f(h)}}function ee(D){if(B=!1,F(D),!M)if(f(b)!==null)M=!0,Q||(Q=!0,Ae());else{var x=f(h);x!==null&&Re(ee,x.startTime-D)}}var Q=!1,G=-1,re=5,pe=-1;function ye(){return H?!0:!(u.unstable_now()-pe<re)}function Ve(){if(H=!1,Q){var D=u.unstable_now();pe=D;var x=!0;try{e:{M=!1,B&&(B=!1,L(G),G=-1),_=!0;var V=A;try{t:{for(F(D),E=f(b);E!==null&&!(E.expirationTime>D&&ye());){var ne=E.callback;if(typeof ne=="function"){E.callback=null,A=E.priorityLevel;var ce=ne(E.expirationTime<=D);if(D=u.unstable_now(),typeof ce=="function"){E.callback=ce,F(D),x=!0;break t}E===f(b)&&c(b),F(D)}else c(b);E=f(b)}if(E!==null)x=!0;else{var j=f(h);j!==null&&Re(ee,j.startTime-D),x=!1}}break e}finally{E=null,A=V,_=!1}x=void 0}}finally{x?Ae():Q=!1}}}var Ae;if(typeof X=="function")Ae=function(){X(Ve)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ke=at.port2;at.port1.onmessage=Ve,Ae=function(){ke.postMessage(null)}}else Ae=function(){J(Ve,0)};function Re(D,x){G=J(function(){D(u.unstable_now())},x)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(D){D.callback=null},u.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<D?Math.floor(1e3/D):5},u.unstable_getCurrentPriorityLevel=function(){return A},u.unstable_next=function(D){switch(A){case 1:case 2:case 3:var x=3;break;default:x=A}var V=A;A=x;try{return D()}finally{A=V}},u.unstable_requestPaint=function(){H=!0},u.unstable_runWithPriority=function(D,x){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=A;A=D;try{return x()}finally{A=V}},u.unstable_scheduleCallback=function(D,x,V){var ne=u.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ne+V:ne):V=ne,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=V+ce,D={id:w++,callback:x,priorityLevel:D,startTime:V,expirationTime:ce,sortIndex:-1},V>ne?(D.sortIndex=V,o(h,D),f(b)===null&&D===f(h)&&(B?(L(G),G=-1):B=!0,Re(ee,V-ne))):(D.sortIndex=ce,o(b,D),M||_||(M=!0,Q||(Q=!0,Ae()))),D},u.unstable_shouldYield=ye,u.unstable_wrapCallback=function(D){var x=A;return function(){var V=A;A=x;try{return D.apply(this,arguments)}finally{A=V}}}})(Jc)),Jc}var Em;function Bg(){return Em||(Em=1,Zc.exports=Lg()),Zc.exports}var Kc={exports:{}},tt={};var zm;function kg(){if(zm)return tt;zm=1;var u=io();function o(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(b,h,w){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:E==null?null:""+E,children:b,containerInfo:h,implementation:w}}var v=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(b,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return p(b,h,null,w)},tt.flushSync=function(b){var h=v.T,w=c.p;try{if(v.T=null,c.p=2,b)return b()}finally{v.T=h,c.p=w,c.d.f()}},tt.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(b,h))},tt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},tt.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var w=h.as,E=z(w,h.crossOrigin),A=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?c.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:E,integrity:A,fetchPriority:_}):w==="script"&&c.d.X(b,{crossOrigin:E,integrity:A,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},tt.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=z(h.as,h.crossOrigin);c.d.M(b,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(b)},tt.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,E=z(w,h.crossOrigin);c.d.L(b,w,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},tt.preloadModule=function(b,h){if(typeof b=="string")if(h){var w=z(h.as,h.crossOrigin);c.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(b)},tt.requestFormReset=function(b){c.d.r(b)},tt.unstable_batchedUpdates=function(b,h){return b(h)},tt.useFormState=function(b,h,w){return v.H.useFormState(b,h,w)},tt.useFormStatus=function(){return v.H.useHostTransitionStatus()},tt.version="19.2.7",tt}var Tm;function Yg(){if(Tm)return Kc.exports;Tm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Kc.exports=kg(),Kc.exports}var wm;function qg(){if(wm)return qn;wm=1;var u=Bg(),o=io(),f=Yg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return b(n),e;if(i===l)return b(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,d=n.child;d;){if(d===a){r=!0,a=n,l=i;break}if(d===l){r=!0,l=n,a=i;break}d=d.sibling}if(!r){for(d=i.child;d;){if(d===a){r=!0,a=i,l=n;break}if(d===l){r=!0,l=i,a=n;break}d=d.sibling}if(!r)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,A=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),X=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),ye=Symbol.for("react.memo_cache_sentinel"),Ve=Symbol.iterator;function Ae(e){return e===null||typeof e!="object"?null:(e=Ve&&e[Ve]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case J:return"Profiler";case H:return"StrictMode";case ee:return"Suspense";case Q:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case X:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Re=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ne=[],ce=-1;function j(e){return{current:e}}function Y(e){0>ce||(e.current=ne[ce],ne[ce]=null,ce--)}function Z(e,t){ce++,ne[ce]=e.current,e.current=t}var $=j(null),ae=j(null),te=j(null),he=j(null);function lt(e,t){switch(Z(te,t),Z(ae,e),Z($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qd(t),e=Gd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y($),Z($,e)}function Ue(){Y($),Y(ae),Y(te)}function Zl(e){e.memoizedState!==null&&Z(he,e);var t=$.current,a=Gd(t,e.type);t!==a&&(Z(ae,e),Z($,a))}function Jn(e){ae.current===e&&(Y($),Y(ae)),he.current===e&&(Y(he),Hn._currentValue=V)}var Tu,go;function Ha(e){if(Tu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Tu=t&&t[1]||"",go=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tu+e+go}var wu=!1;function Nu(e,t){if(!e||wu)return"";wu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(O){var R=O}Reflect.construct(e,[],q)}else{try{q.call()}catch(O){R=O}e.call(q.prototype)}}else{try{throw Error()}catch(O){R=O}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(O){if(O&&R&&typeof O.stack=="string")return[O.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],d=i[1];if(r&&d){var g=r.split(`
`),C=d.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<C.length&&!C[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===C.length)for(l=g.length-1,n=C.length-1;1<=l&&0<=n&&g[l]!==C[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==C[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==C[n]){var U=`
`+g[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=n);break}}}finally{wu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ha(a):""}function fp(e,t){switch(e.tag){case 26:case 27:case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return e.child!==t&&t!==null?Ha("Suspense Fallback"):Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return Nu(e.type,!1);case 11:return Nu(e.type.render,!1);case 1:return Nu(e.type,!0);case 31:return Ha("Activity");default:return""}}function vo(e){try{var t="",a=null;do t+=fp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Cu=Object.prototype.hasOwnProperty,Au=u.unstable_scheduleCallback,Ru=u.unstable_cancelCallback,dp=u.unstable_shouldYield,mp=u.unstable_requestPaint,dt=u.unstable_now,pp=u.unstable_getCurrentPriorityLevel,bo=u.unstable_ImmediatePriority,yo=u.unstable_UserBlockingPriority,Kn=u.unstable_NormalPriority,hp=u.unstable_LowPriority,xo=u.unstable_IdlePriority,gp=u.log,vp=u.unstable_setDisableYieldValue,Jl=null,mt=null;function sa(e){if(typeof gp=="function"&&vp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Jl,e)}catch{}}var pt=Math.clz32?Math.clz32:xp,bp=Math.log,yp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(bp(e)/yp|0)|0}var $n=256,Wn=262144,Fn=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=La(l):(r&=d,r!==0?n=La(r):a||(a=d&~e,a!==0&&(n=La(a))))):(d=l&~i,d!==0?n=La(d):r!==0?n=La(r):a||(a=l&~e,a!==0&&(n=La(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function So(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function _u(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jp(e,t,a,l,n,i){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,g=e.expirationTimes,C=e.hiddenUpdates;for(a=r&~a;0<a;){var U=31-pt(a),q=1<<U;d[U]=0,g[U]=-1;var R=C[U];if(R!==null)for(C[U]=null,U=0;U<R.length;U++){var O=R[U];O!==null&&(O.lane&=-536870913)}a&=~q}l!==0&&jo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function jo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Eo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function zo(e,t){var a=t&-t;return a=(a&42)!==0?1:Ou(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function To(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:fm(e.type))}function wo(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var fa=Math.random().toString(36).slice(2),We="__reactFiber$"+fa,it="__reactProps$"+fa,ll="__reactContainer$"+fa,Du="__reactEvents$"+fa,Ep="__reactListeners$"+fa,zp="__reactHandles$"+fa,No="__reactResources$"+fa,Wl="__reactMarker$"+fa;function Uu(e){delete e[We],delete e[it],delete e[Du],delete e[Ep],delete e[zp]}function nl(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=$d(e);e!==null;){if(a=e[We])return a;e=$d(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[We]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ul(e){var t=e[No];return t||(t=e[No]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Wl]=!0}var Co=new Set,Ao={};function Ba(e,t){rl(e,t),rl(e+"Capture",t)}function rl(e,t){for(Ao[e]=t,e=0;e<t.length;e++)Co.add(t[e])}var Tp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ro={},_o={};function wp(e){return Cu.call(_o,e)?!0:Cu.call(Ro,e)?!1:Tp.test(e)?_o[e]=!0:(Ro[e]=!0,!1)}function Pn(e,t,a){if(wp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ei(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Np(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hu(e){if(!e._valueTracker){var t=Oo(e)?"checked":"value";e._valueTracker=Np(e,t,""+e[t])}}function Mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Oo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cp=/[\n"\\]/g;function zt(e){return e.replace(Cp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lu(e,t,a,l,n,i,r,d){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Bu(e,r,Et(t)):a!=null?Bu(e,r,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Et(d):e.removeAttribute("name")}function Do(e,t,a,l,n,i,r,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Hu(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Hu(e)}function Bu(e,t,a){t==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Uo(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Ho(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Re(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Hu(e)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ap=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Ap.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Bo(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Lo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Lo(e,i,t[i])}function ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(e){return _p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Yu=null;function qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,fl=null;function ko(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(c(90));Lu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Mo(l)}break e;case"textarea":Uo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var Gu=!1;function Yo(e,t,a){if(Gu)return e(t,a);Gu=!0;try{var l=e(t);return l}finally{if(Gu=!1,(sl!==null||fl!==null)&&(Xi(),sl&&(t=sl,e=fl,fl=sl=null,ko(t),e)))for(t=0;t<e.length;t++)ko(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(Jt)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Xu=!1}var da=null,Qu=null,li=null;function qo(){if(li)return li;var e,t=Qu,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(l=1;l<=r&&t[a-l]===n[i-l];l++);return li=n.slice(e,1<l?1-l:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Go(){return!1}function ut(e){function t(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Go,this.isPropagationStopped=Go,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=ut(ka),en=E({},ka,{view:0,detail:0}),Op=ut(en),Vu,Zu,tn,ri=E({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(Vu=e.screenX-tn.screenX,Zu=e.screenY-tn.screenY):Zu=Vu=0,tn=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:Zu}}),Xo=ut(ri),Mp=E({},ri,{dataTransfer:0}),Dp=ut(Mp),Up=E({},en,{relatedTarget:0}),Ju=ut(Up),Hp=E({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=ut(Hp),Bp=E({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=ut(Bp),Yp=E({},ka,{data:0}),Qo=ut(Yp),qp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xp[e])?!!t[e]:!1}function Ku(){return Qp}var Vp=E({},en,{key:function(e){if(e.key){var t=qp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=ut(Vp),Jp=E({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vo=ut(Jp),Kp=E({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),$p=ut(Kp),Wp=E({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=ut(Wp),Ip=E({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=ut(Ip),eh=E({},ka,{newState:0,oldState:0}),th=ut(eh),ah=[9,13,27,32],$u=Jt&&"CompositionEvent"in window,an=null;Jt&&"documentMode"in document&&(an=document.documentMode);var lh=Jt&&"TextEvent"in window&&!an,Zo=Jt&&(!$u||an&&8<an&&11>=an),Jo=" ",Ko=!1;function $o(e,t){switch(e){case"keyup":return ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function nh(e,t){switch(e){case"compositionend":return Wo(t);case"keypress":return t.which!==32?null:(Ko=!0,Jo);case"textInput":return e=t.data,e===Jo&&Ko?null:e;default:return null}}function ih(e,t){if(dl)return e==="compositionend"||!$u&&$o(e,t)?(e=qo(),li=Qu=da=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zo&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function Io(e,t,a,l){sl?fl?fl.push(l):fl=[l]:sl=l,t=Wi(t,"onChange"),0<t.length&&(a=new ui("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ln=null,nn=null;function rh(e){Ud(e,0)}function ci(e){var t=Fl(e);if(Mo(t))return e}function Po(e,t){if(e==="change")return t}var es=!1;if(Jt){var Wu;if(Jt){var Fu="oninput"in document;if(!Fu){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),Fu=typeof ts.oninput=="function"}Wu=Fu}else Wu=!1;es=Wu&&(!document.documentMode||9<document.documentMode)}function as(){ln&&(ln.detachEvent("onpropertychange",ls),nn=ln=null)}function ls(e){if(e.propertyName==="value"&&ci(nn)){var t=[];Io(t,nn,e,qu(e)),Yo(rh,t)}}function ch(e,t,a){e==="focusin"?(as(),ln=t,nn=a,ln.attachEvent("onpropertychange",ls)):e==="focusout"&&as()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(nn)}function sh(e,t){if(e==="click")return ci(t)}function fh(e,t){if(e==="input"||e==="change")return ci(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:dh;function un(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Cu.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,t){var a=ns(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ns(a)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ti(e.document)}return t}function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mh=Jt&&"documentMode"in document&&11>=document.documentMode,ml=null,Pu=null,rn=null,er=!1;function cs(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;er||ml==null||ml!==ti(l)||(l=ml,"selectionStart"in l&&Iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),rn&&un(rn,l)||(rn=l,l=Wi(Pu,"onSelect"),0<l.length&&(t=new ui("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},tr={},os={};Jt&&(os=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function qa(e){if(tr[e])return tr[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in os)return tr[e]=t[a];return e}var ss=qa("animationend"),fs=qa("animationiteration"),ds=qa("animationstart"),ph=qa("transitionrun"),hh=qa("transitionstart"),gh=qa("transitioncancel"),ms=qa("transitionend"),ps=new Map,ar="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ar.push("scrollEnd");function Dt(e,t){ps.set(e,t),Ba(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],hl=0,lr=0;function si(){for(var e=hl,t=lr=hl=0;t<e;){var a=Tt[t];Tt[t++]=null;var l=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var i=Tt[t];if(Tt[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&hs(a,n,i)}}function fi(e,t,a,l){Tt[hl++]=e,Tt[hl++]=t,Tt[hl++]=a,Tt[hl++]=l,lr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function nr(e,t,a,l){return fi(e,t,a,l),di(e)}function Ga(e,t){return fi(e,null,null,t),di(e)}function hs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function di(e){if(50<An)throw An=0,mc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function vh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new vh(e,t,a,l)}function ir(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,a,l,n,i){var r=0;if(l=e,typeof e=="function")ir(e)&&(r=1);else if(typeof e=="string")r=jg(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pe:return e=gt(31,a,t,n),e.elementType=pe,e.lanes=i,e;case B:return Xa(a.children,n,i,t);case H:r=8,n|=24;break;case J:return e=gt(12,a,t,n|2),e.elementType=J,e.lanes=i,e;case ee:return e=gt(13,a,t,n),e.elementType=ee,e.lanes=i,e;case Q:return e=gt(19,a,t,n),e.elementType=Q,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:r=10;break e;case L:r=9;break e;case F:r=11;break e;case G:r=14;break e;case re:r=16,l=null;break e}r=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=gt(r,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Xa(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function ur(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function vs(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function rr(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bs=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=bs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:vo(t)},bs.set(e,t),t)}return{value:e,source:t,stack:vo(t)}}var vl=[],bl=0,pi=null,cn=0,Nt=[],Ct=0,ma=null,Yt=1,qt="";function $t(e,t){vl[bl++]=cn,vl[bl++]=pi,pi=e,cn=t}function ys(e,t,a){Nt[Ct++]=Yt,Nt[Ct++]=qt,Nt[Ct++]=ma,ma=e;var l=Yt;e=qt;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Yt=1<<32-pt(t)+n|a<<n|l,qt=i+e}else Yt=1<<i|a<<n|l,qt=e}function cr(e){e.return!==null&&($t(e,1),ys(e,1,0))}function or(e){for(;e===pi;)pi=vl[--bl],vl[bl]=null,cn=vl[--bl],vl[bl]=null;for(;e===ma;)ma=Nt[--Ct],Nt[Ct]=null,qt=Nt[--Ct],Nt[Ct]=null,Yt=Nt[--Ct],Nt[Ct]=null}function xs(e,t){Nt[Ct++]=Yt,Nt[Ct++]=qt,Nt[Ct++]=ma,Yt=t.id,qt=t.overflow,ma=e}var Fe=null,we=null,me=!1,pa=null,At=!1,sr=Error(c(519));function ha(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw on(wt(t,e)),sr}function Ss(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[it]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<_n.length;a++)se(_n[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Do(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Ho(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||kd(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function js(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Fe=Fe.return}}function yl(e){if(e!==Fe)return!1;if(!me)return js(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cc(e.type,e.memoizedProps)),a=!a),a&&we&&ha(e),js(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));we=Kd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));we=Kd(e)}else t===27?(t=we,Aa(e.type)?(e=Mc,Mc=null,we=e):we=t):we=Fe?_t(e.stateNode.nextSibling):null;return!0}function Qa(){we=Fe=null,me=!1}function fr(){var e=pa;return e!==null&&(st===null?st=e:st.push.apply(st,e),pa=null),e}function on(e){pa===null?pa=[e]:pa.push(e)}var dr=j(null),Va=null,Wt=null;function ga(e,t,a){Z(dr,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=dr.current,Y(dr)}function mr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function pr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var g=0;g<t.length;g++)if(d.context===t[g]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),mr(i.return,a,e),l||(r=null);break e}i=d.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(c(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),mr(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function xl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var d=n.type;ht(n.pendingProps.value,r.value)||(e!==null?e.push(d):e=[d])}}else if(n===he.current){if(r=n.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Hn):e=[Hn])}n=n.return}e!==null&&pr(t,e,a,l),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Es(Va,e)}function gi(e,t){return Va===null&&Za(e),Es(e,t)}function Es(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(c(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},yh=u.unstable_scheduleCallback,xh=u.unstable_NormalPriority,Ye={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hr(){return{controller:new bh,data:new Map,refCount:0}}function sn(e){e.refCount--,e.refCount===0&&yh(xh,function(){e.controller.abort()})}var fn=null,gr=0,Sl=0,jl=null;function Sh(e,t){if(fn===null){var a=fn=[];gr=0,Sl=yc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return gr++,t.then(zs,zs),t}function zs(){if(--gr===0&&fn!==null){jl!==null&&(jl.status="fulfilled");var e=fn;fn=null,Sl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ts=D.S;D.S=function(e,t){od=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sh(e,t),Ts!==null&&Ts(e,t)};var Ja=j(null);function vr(){var e=Ja.current;return e!==null?e:Te.pooledCache}function vi(e,t){t===null?Z(Ja,Ja.current):Z(Ja,t.pool)}function ws(){var e=vr();return e===null?null:{parent:Ye._currentValue,pool:e}}var El=Error(c(460)),br=Error(c(474)),bi=Error(c(542)),yi={then:function(){}};function Ns(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rs(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rs(e),e}throw $a=t,El}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,El):a}}var $a=null;function As(){if($a===null)throw Error(c(459));var e=$a;return $a=null,e}function Rs(e){if(e===El||e===bi)throw Error(c(483))}var zl=null,dn=0;function xi(e){var t=dn;return dn+=1,zl===null&&(zl=[]),Cs(zl,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Si(e,t){throw t.$$typeof===A?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _s(e){function t(T,S){if(e){var N=T.deletions;N===null?(T.deletions=[S],T.flags|=16):N.push(S)}}function a(T,S){if(!e)return null;for(;S!==null;)t(T,S),S=S.sibling;return null}function l(T){for(var S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function n(T,S){return T=Kt(T,S),T.index=0,T.sibling=null,T}function i(T,S,N){return T.index=N,e?(N=T.alternate,N!==null?(N=N.index,N<S?(T.flags|=67108866,S):N):(T.flags|=67108866,S)):(T.flags|=1048576,S)}function r(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function d(T,S,N,k){return S===null||S.tag!==6?(S=ur(N,T.mode,k),S.return=T,S):(S=n(S,N),S.return=T,S)}function g(T,S,N,k){var I=N.type;return I===B?U(T,S,N.props.children,k,N.key):S!==null&&(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===re&&Ka(I)===S.type)?(S=n(S,N.props),mn(S,N),S.return=T,S):(S=mi(N.type,N.key,N.props,null,T.mode,k),mn(S,N),S.return=T,S)}function C(T,S,N,k){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=rr(N,T.mode,k),S.return=T,S):(S=n(S,N.children||[]),S.return=T,S)}function U(T,S,N,k,I){return S===null||S.tag!==7?(S=Xa(N,T.mode,k,I),S.return=T,S):(S=n(S,N),S.return=T,S)}function q(T,S,N){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ur(""+S,T.mode,N),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return N=mi(S.type,S.key,S.props,null,T.mode,N),mn(N,S),N.return=T,N;case M:return S=rr(S,T.mode,N),S.return=T,S;case re:return S=Ka(S),q(T,S,N)}if(Re(S)||Ae(S))return S=Xa(S,T.mode,N,null),S.return=T,S;if(typeof S.then=="function")return q(T,xi(S),N);if(S.$$typeof===X)return q(T,gi(T,S),N);Si(T,S)}return null}function R(T,S,N,k){var I=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return I!==null?null:d(T,S,""+N,k);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _:return N.key===I?g(T,S,N,k):null;case M:return N.key===I?C(T,S,N,k):null;case re:return N=Ka(N),R(T,S,N,k)}if(Re(N)||Ae(N))return I!==null?null:U(T,S,N,k,null);if(typeof N.then=="function")return R(T,S,xi(N),k);if(N.$$typeof===X)return R(T,S,gi(T,N),k);Si(T,N)}return null}function O(T,S,N,k,I){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return T=T.get(N)||null,d(S,T,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case _:return T=T.get(k.key===null?N:k.key)||null,g(S,T,k,I);case M:return T=T.get(k.key===null?N:k.key)||null,C(S,T,k,I);case re:return k=Ka(k),O(T,S,N,k,I)}if(Re(k)||Ae(k))return T=T.get(N)||null,U(S,T,k,I,null);if(typeof k.then=="function")return O(T,S,N,xi(k),I);if(k.$$typeof===X)return O(T,S,N,gi(S,k),I);Si(S,k)}return null}function K(T,S,N,k){for(var I=null,ge=null,W=S,ue=S=0,de=null;W!==null&&ue<N.length;ue++){W.index>ue?(de=W,W=null):de=W.sibling;var ve=R(T,W,N[ue],k);if(ve===null){W===null&&(W=de);break}e&&W&&ve.alternate===null&&t(T,W),S=i(ve,S,ue),ge===null?I=ve:ge.sibling=ve,ge=ve,W=de}if(ue===N.length)return a(T,W),me&&$t(T,ue),I;if(W===null){for(;ue<N.length;ue++)W=q(T,N[ue],k),W!==null&&(S=i(W,S,ue),ge===null?I=W:ge.sibling=W,ge=W);return me&&$t(T,ue),I}for(W=l(W);ue<N.length;ue++)de=O(W,T,ue,N[ue],k),de!==null&&(e&&de.alternate!==null&&W.delete(de.key===null?ue:de.key),S=i(de,S,ue),ge===null?I=de:ge.sibling=de,ge=de);return e&&W.forEach(function(Da){return t(T,Da)}),me&&$t(T,ue),I}function P(T,S,N,k){if(N==null)throw Error(c(151));for(var I=null,ge=null,W=S,ue=S=0,de=null,ve=N.next();W!==null&&!ve.done;ue++,ve=N.next()){W.index>ue?(de=W,W=null):de=W.sibling;var Da=R(T,W,ve.value,k);if(Da===null){W===null&&(W=de);break}e&&W&&Da.alternate===null&&t(T,W),S=i(Da,S,ue),ge===null?I=Da:ge.sibling=Da,ge=Da,W=de}if(ve.done)return a(T,W),me&&$t(T,ue),I;if(W===null){for(;!ve.done;ue++,ve=N.next())ve=q(T,ve.value,k),ve!==null&&(S=i(ve,S,ue),ge===null?I=ve:ge.sibling=ve,ge=ve);return me&&$t(T,ue),I}for(W=l(W);!ve.done;ue++,ve=N.next())ve=O(W,T,ue,ve.value,k),ve!==null&&(e&&ve.alternate!==null&&W.delete(ve.key===null?ue:ve.key),S=i(ve,S,ue),ge===null?I=ve:ge.sibling=ve,ge=ve);return e&&W.forEach(function(Mg){return t(T,Mg)}),me&&$t(T,ue),I}function ze(T,S,N,k){if(typeof N=="object"&&N!==null&&N.type===B&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case _:e:{for(var I=N.key;S!==null;){if(S.key===I){if(I=N.type,I===B){if(S.tag===7){a(T,S.sibling),k=n(S,N.props.children),k.return=T,T=k;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===re&&Ka(I)===S.type){a(T,S.sibling),k=n(S,N.props),mn(k,N),k.return=T,T=k;break e}a(T,S);break}else t(T,S);S=S.sibling}N.type===B?(k=Xa(N.props.children,T.mode,k,N.key),k.return=T,T=k):(k=mi(N.type,N.key,N.props,null,T.mode,k),mn(k,N),k.return=T,T=k)}return r(T);case M:e:{for(I=N.key;S!==null;){if(S.key===I)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){a(T,S.sibling),k=n(S,N.children||[]),k.return=T,T=k;break e}else{a(T,S);break}else t(T,S);S=S.sibling}k=rr(N,T.mode,k),k.return=T,T=k}return r(T);case re:return N=Ka(N),ze(T,S,N,k)}if(Re(N))return K(T,S,N,k);if(Ae(N)){if(I=Ae(N),typeof I!="function")throw Error(c(150));return N=I.call(N),P(T,S,N,k)}if(typeof N.then=="function")return ze(T,S,xi(N),k);if(N.$$typeof===X)return ze(T,S,gi(T,N),k);Si(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,S!==null&&S.tag===6?(a(T,S.sibling),k=n(S,N),k.return=T,T=k):(a(T,S),k=ur(N,T.mode,k),k.return=T,T=k),r(T)):a(T,S)}return function(T,S,N,k){try{dn=0;var I=ze(T,S,N,k);return zl=null,I}catch(W){if(W===El||W===bi)throw W;var ge=gt(29,W,null,T.mode);return ge.lanes=k,ge.return=T,ge}}}var Wa=_s(!0),Os=_s(!1),va=!1;function yr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=di(e),hs(e,null,a),t}return fi(e,l,t,a),di(e)}function pn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Eo(e,a)}}function Sr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jr=!1;function hn(){if(jr){var e=jl;if(e!==null)throw e}}function gn(e,t,a,l){jr=!1;var n=e.updateQueue;va=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var g=d,C=g.next;g.next=null,r===null?i=C:r.next=C,r=g;var U=e.alternate;U!==null&&(U=U.updateQueue,d=U.lastBaseUpdate,d!==r&&(d===null?U.firstBaseUpdate=C:d.next=C,U.lastBaseUpdate=g))}if(i!==null){var q=n.baseState;r=0,U=C=g=null,d=i;do{var R=d.lane&-536870913,O=R!==d.lane;if(O?(fe&R)===R:(l&R)===R){R!==0&&R===Sl&&(jr=!0),U!==null&&(U=U.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var K=e,P=d;R=t;var ze=a;switch(P.tag){case 1:if(K=P.payload,typeof K=="function"){q=K.call(ze,q,R);break e}q=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=P.payload,R=typeof K=="function"?K.call(ze,q,R):K,R==null)break e;q=E({},q,R);break e;case 2:va=!0}}R=d.callback,R!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[R]:O.push(R))}else O={lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},U===null?(C=U=O,g=q):U=U.next=O,r|=R;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;O=d,d=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);U===null&&(g=q),n.baseState=g,n.firstBaseUpdate=C,n.lastBaseUpdate=U,i===null&&(n.shared.lanes=0),za|=r,e.lanes=r,e.memoizedState=q}}function Ms(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Ds(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ms(a[e],t)}var Tl=j(null),ji=j(0);function Us(e,t){e=ua,Z(ji,e),Z(Tl,t),ua=e|t.baseLanes}function Er(){Z(ji,ua),Z(Tl,Tl.current)}function zr(){ua=ji.current,Y(Tl),Y(ji)}var vt=j(null),Rt=null;function xa(e){var t=e.alternate;Z(He,He.current&1),Z(vt,e),Rt===null&&(t===null||Tl.current!==null||t.memoizedState!==null)&&(Rt=e)}function Tr(e){Z(He,He.current),Z(vt,e),Rt===null&&(Rt=e)}function Hs(e){e.tag===22?(Z(He,He.current),Z(vt,e),Rt===null&&(Rt=e)):Sa()}function Sa(){Z(He,He.current),Z(vt,vt.current)}function bt(e){Y(vt),Rt===e&&(Rt=null),Y(He)}var He=j(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_c(a)||Oc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ie=null,je=null,qe=null,zi=!1,wl=!1,Fa=!1,Ti=0,vn=0,Nl=null,Eh=0;function Me(){throw Error(c(321))}function wr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Nr(e,t,a,l,n,i){return It=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?xf:Gr,Fa=!1,i=a(l,n),Fa=!1,wl&&(i=Bs(t,a,l,n)),Ls(e),i}function Ls(e){D.H=xn;var t=je!==null&&je.next!==null;if(It=0,qe=je=ie=null,zi=!1,vn=0,Nl=null,t)throw Error(c(300));e===null||Ge||(e=e.dependencies,e!==null&&hi(e)&&(Ge=!0))}function Bs(e,t,a,l){ie=e;var n=0;do{if(wl&&(Nl=null),vn=0,wl=!1,25<=n)throw Error(c(301));if(n+=1,qe=je=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=Sf,i=t(a,l)}while(wl);return i}function zh(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ie.flags|=1024),t}function Cr(){var e=Ti!==0;return Ti=0,e}function Ar(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Rr(e){if(zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zi=!1}It=0,qe=je=ie=null,wl=!1,vn=Ti=0,Nl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ie.memoizedState=qe=e:qe=qe.next=e,qe}function Le(){if(je===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=qe===null?ie.memoizedState:qe.next;if(t!==null)qe=t,je=e;else{if(e===null)throw ie.alternate===null?Error(c(467)):Error(c(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},qe===null?ie.memoizedState=qe=e:qe=qe.next=e}return qe}function wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=vn;return vn+=1,Nl===null&&(Nl=[]),e=Cs(Nl,e,t),t=ie,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?xf:Gr),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===X)return Ie(e)}throw Error(c(438,String(e)))}function _r(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=wi(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ye;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=Le();return Or(t,je,e)}function Or(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=r=null,g=null,C=t,U=!1;do{var q=C.lane&-536870913;if(q!==C.lane?(fe&q)===q:(It&q)===q){var R=C.revertLane;if(R===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),q===Sl&&(U=!0);else if((It&R)===R){C=C.next,R===Sl&&(U=!0);continue}else q={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(d=g=q,r=i):g=g.next=q,ie.lanes|=R,za|=R;q=C.action,Fa&&a(i,q),i=C.hasEagerState?C.eagerState:a(i,q)}else R={lane:q,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(d=g=R,r=i):g=g.next=R,ie.lanes|=q,za|=q;C=C.next}while(C!==null&&C!==t);if(g===null?r=i:g.next=d,!ht(i,e.memoizedState)&&(Ge=!0,U&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=r,e.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mr(e){var t=Le(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);ht(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function ks(e,t,a){var l=ie,n=Le(),i=me;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var r=!ht((je||n).memoizedState,a);if(r&&(n.memoizedState=a,Ge=!0),n=n.queue,Hr(Gs.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},qs.bind(null,l,n,a,t),null),Te===null)throw Error(c(349));i||(It&127)!==0||Ys(l,t,a)}return a}function Ys(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=wi(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qs(e,t,a,l){t.value=a,t.getSnapshot=l,Xs(t)&&Qs(e)}function Gs(e,t,a){return a(function(){Xs(t)&&Qs(e)})}function Xs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Qs(e){var t=Ga(e,2);t!==null&&ft(t,e,2)}function Dr(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Fa){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Vs(e,t,a,l){return e.baseState=a,Or(e,je,typeof l=="function"?l:Pt)}function Th(e,t,a,l,n){if(_i(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};D.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Zs(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Zs(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=D.T,r={};D.T=r;try{var d=a(n,l),g=D.S;g!==null&&g(r,d),Js(e,t,d)}catch(C){Ur(e,t,C)}finally{i!==null&&r.types!==null&&(i.types=r.types),D.T=i}}else try{i=a(n,l),Js(e,t,i)}catch(C){Ur(e,t,C)}}function Js(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ks(e,t,l)},function(l){return Ur(e,t,l)}):Ks(e,t,a)}function Ks(e,t,a){t.status="fulfilled",t.value=a,$s(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Zs(e,a)))}function Ur(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,$s(t),t=t.next;while(t!==l)}e.action=null}function $s(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ws(e,t){return t}function Fs(e,t){if(me){var a=Te.formState;if(a!==null){e:{var l=ie;if(me){if(we){t:{for(var n=we,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){we=_t(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},a.queue=l,a=vf.bind(null,ie,l),l.dispatch=a,l=Dr(!1),i=qr.bind(null,ie,!1,l.queue),l=nt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Th.bind(null,ie,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Is(e){var t=Le();return Ps(t,je,e)}function Ps(e,t,a){if(t=Or(e,t,Ws)[0],e=Ci(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bn(t)}catch(r){throw r===El?bi:r}else l=t;t=Le();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,Cl(9,{destroy:void 0},wh.bind(null,n,a),null)),[l,i,e]}function wh(e,t){e.action=t}function ef(e){var t=Le(),a=je;if(a!==null)return Ps(t,a,e);Le(),t=t.memoizedState,a=Le();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ie.updateQueue,t===null&&(t=wi(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function tf(){return Le().memoizedState}function Ai(e,t,a,l){var n=nt();ie.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ri(e,t,a,l){var n=Le();l=l===void 0?null:l;var i=n.memoizedState.inst;je!==null&&l!==null&&wr(l,je.memoizedState.deps)?n.memoizedState=Cl(t,i,a,l):(ie.flags|=e,n.memoizedState=Cl(1|t,i,a,l))}function af(e,t){Ai(8390656,8,e,t)}function Hr(e,t){Ri(2048,8,e,t)}function Nh(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=wi(),ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function lf(e){var t=Le().memoizedState;return Nh({ref:t,nextImpl:e}),function(){if((be&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function nf(e,t){return Ri(4,2,e,t)}function uf(e,t){return Ri(4,4,e,t)}function rf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cf(e,t,a){a=a!=null?a.concat([e]):null,Ri(4,4,rf.bind(null,t,e),a)}function Lr(){}function of(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&wr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function sf(e,t){var a=Le();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&wr(t,l[1]))return l[0];if(l=e(),Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function Br(e,t,a){return a===void 0||(It&1073741824)!==0&&(fe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=fd(),ie.lanes|=e,za|=e,a)}function ff(e,t,a,l){return ht(a,t)?a:Tl.current!==null?(e=Br(e,a,l),ht(e,t)||(Ge=!0),e):(It&42)===0||(It&1073741824)!==0&&(fe&261930)===0?(Ge=!0,e.memoizedState=a):(e=fd(),ie.lanes|=e,za|=e,t)}function df(e,t,a,l,n){var i=x.p;x.p=i!==0&&8>i?i:8;var r=D.T,d={};D.T=d,qr(e,!1,t,a);try{var g=n(),C=D.S;if(C!==null&&C(d,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var U=jh(g,l);yn(e,t,U,St(e))}else yn(e,t,l,St(e))}catch(q){yn(e,t,{then:function(){},status:"rejected",reason:q},St())}finally{x.p=i,r!==null&&d.types!==null&&(r.types=d.types),D.T=r}}function Ch(){}function kr(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=mf(e).queue;df(e,n,t,V,a===null?Ch:function(){return pf(e),a(l)})}function mf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function pf(e){var t=mf(e);t.next===null&&(t=e.alternate.memoizedState),yn(e,t.next.queue,{},St())}function Yr(){return Ie(Hn)}function hf(){return Le().memoizedState}function gf(){return Le().memoizedState}function Ah(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=ba(a);var l=ya(t,e,a);l!==null&&(ft(l,t,a),pn(l,t,a)),t={cache:hr()},e.payload=t;return}t=t.return}}function Rh(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(e)?bf(t,a):(a=nr(e,t,a,l),a!==null&&(ft(a,e,l),yf(a,t,l)))}function vf(e,t,a){var l=St();yn(e,t,a,l)}function yn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_i(e))bf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,d=i(r,a);if(n.hasEagerState=!0,n.eagerState=d,ht(d,r))return fi(e,t,n,0),Te===null&&si(),!1}catch{}if(a=nr(e,t,n,l),a!==null)return ft(a,e,l),yf(a,t,l),!0}return!1}function qr(e,t,a,l){if(l={lane:2,revertLane:yc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_i(e)){if(t)throw Error(c(479))}else t=nr(e,a,l,2),t!==null&&ft(t,e,2)}function _i(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function bf(e,t){wl=zi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Eo(e,a)}}var xn={readContext:Ie,use:Ni,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};xn.useEffectEvent=Me;var xf={readContext:Ie,use:Ni,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:af,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ai(4194308,4,rf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){Ai(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var l=e();if(Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=nt();if(a!==void 0){var n=a(t);if(Fa){sa(!0);try{a(t)}finally{sa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Rh.bind(null,ie,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Dr(e);var t=e.queue,a=vf.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Lr,useDeferredValue:function(e,t){var a=nt();return Br(a,e,t)},useTransition:function(){var e=Dr(!1);return e=df.bind(null,ie,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ie,n=nt();if(me){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Te===null)throw Error(c(349));(fe&127)!==0||Ys(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,af(Gs.bind(null,l,i,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},qs.bind(null,l,i,a,t),null),a},useId:function(){var e=nt(),t=Te.identifierPrefix;if(me){var a=qt,l=Yt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ti++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Eh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yr,useFormState:Fs,useActionState:Fs,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=qr.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:_r,useCacheRefresh:function(){return nt().memoizedState=Ah.bind(null,ie)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((be&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Gr={readContext:Ie,use:Ni,useCallback:of,useContext:Ie,useEffect:Hr,useImperativeHandle:cf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:sf,useReducer:Ci,useRef:tf,useState:function(){return Ci(Pt)},useDebugValue:Lr,useDeferredValue:function(e,t){var a=Le();return ff(a,je.memoizedState,e,t)},useTransition:function(){var e=Ci(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:ks,useId:hf,useHostTransitionStatus:Yr,useFormState:Is,useActionState:Is,useOptimistic:function(e,t){var a=Le();return Vs(a,je,e,t)},useMemoCache:_r,useCacheRefresh:gf};Gr.useEffectEvent=lf;var Sf={readContext:Ie,use:Ni,useCallback:of,useContext:Ie,useEffect:Hr,useImperativeHandle:cf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:sf,useReducer:Mr,useRef:tf,useState:function(){return Mr(Pt)},useDebugValue:Lr,useDeferredValue:function(e,t){var a=Le();return je===null?Br(a,e,t):ff(a,je.memoizedState,e,t)},useTransition:function(){var e=Mr(Pt)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:ks,useId:hf,useHostTransitionStatus:Yr,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var a=Le();return je!==null?Vs(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_r,useCacheRefresh:gf};Sf.useEffectEvent=lf;function Xr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(ft(t,e,a),pn(t,e,a))}};function jf(e,t,a,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!un(a,l)||!un(n,i):!0}function Ef(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Qr.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function zf(e){oi(e)}function Tf(e){console.error(e)}function wf(e){oi(e)}function Oi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Nf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Vr(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Oi(e,t)},a}function Cf(e){return e=ba(e),e.tag=3,e}function Af(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Nf(t,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Nf(t,a,l),typeof n!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function _h(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return Rt===null?Qi():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),gc(e,l,n)),!1;case 22:return a.flags|=65536,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),gc(e,l,n)),!1}throw Error(c(435,a.tag))}return gc(e,l,n),Qi(),!1}if(me)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==sr&&(e=Error(c(422),{cause:l}),on(wt(e,a)))):(l!==sr&&(t=Error(c(423),{cause:l}),on(wt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=wt(l,a),n=Vr(e.stateNode,l,n),Sr(e,n),De!==4&&(De=2)),!1;var i=Error(c(520),{cause:l});if(i=wt(i,a),Cn===null?Cn=[i]:Cn.push(i),De!==4&&(De=2),t===null)return!0;l=wt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Vr(a.stateNode,l,e),Sr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ta===null||!Ta.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Cf(n),Af(n,e,a,l),Sr(a,n),!1}a=a.return}while(a!==null);return!1}var Zr=Error(c(461)),Ge=!1;function Pe(e,t,a,l){t.child=e===null?Os(t,null,a,l):Wa(t,e.child,a,l)}function Rf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var r={};for(var d in l)d!=="ref"&&(r[d]=l[d])}else r=l;return Za(t),l=Nr(e,t,a,r,i,n),d=Cr(),e!==null&&!Ge?(Ar(e,t,n),ea(e,t,n)):(me&&d&&cr(t),t.flags|=1,Pe(e,t,l,n),t.child)}function _f(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ir(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Of(e,t,i,l,n)):(e=mi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ec(e,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:un,a(r,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(un(i,l)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=l=i,ec(e,n))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,ea(e,t,n)}return Jr(e,t,a,l,n)}function Mf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Df(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,i!==null?i.cachePool:null),i!==null?Us(t,i):Er(),Hs(t);else return l=t.lanes=536870912,Df(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(vi(t,i.cachePool),Us(t,i),Sa(),t.memoizedState=null):(e!==null&&vi(t,null),Er(),Sa());return Pe(e,t,n,a),t.child}function Sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Df(e,t,a,l,n){var i=vr();return i=i===null?null:{parent:Ye._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&vi(t,null),Er(),Hs(t),e!==null&&xl(e,t,l,!0),t.childLanes=n,null}function Mi(e,t){return t=Ui({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uf(e,t,a){return Wa(t,e.child,null,a),e=Mi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Oh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=Mi(t,l),t.lanes=536870912,Sn(null,e);if(Tr(t),(e=we)?(e=Jd(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=vs(e),a.return=t,t.child=a,Fe=t,we=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Mi(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Tr(t),n)if(t.flags&256)t.flags&=-257,t=Uf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Ge||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Ge||n){if(l=Te,l!==null&&(r=zo(l,a),r!==0&&r!==i.retryLane))throw i.retryLane=r,Ga(e,r),ft(l,e,r),Zr;Qi(),t=Uf(e,t,a)}else e=i.treeContext,we=_t(r.nextSibling),Fe=t,me=!0,pa=null,At=!1,e!==null&&xs(t,e),t=Mi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Jr(e,t,a,l,n){return Za(t),a=Nr(e,t,a,l,void 0,n),l=Cr(),e!==null&&!Ge?(Ar(e,t,n),ea(e,t,n)):(me&&l&&cr(t),t.flags|=1,Pe(e,t,a,n),t.child)}function Hf(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=Bs(t,l,a,n),Ls(e),l=Cr(),e!==null&&!Ge?(Ar(e,t,i),ea(e,t,i)):(me&&l&&cr(t),t.flags|=1,Pe(e,t,a,i),t.child)}function Lf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=gl,r=a.contextType;typeof r=="object"&&r!==null&&(i=Ie(r)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},yr(t),r=a.contextType,i.context=typeof r=="object"&&r!==null?Ie(r):gl,i.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Xr(t,a,r,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Qr.enqueueReplaceState(i,i.state,null),gn(t,l,i,n),hn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,g=Ia(a,d);i.props=g;var C=i.context,U=a.contextType;r=gl,typeof U=="object"&&U!==null&&(r=Ie(U));var q=a.getDerivedStateFromProps;U=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||C!==r)&&Ef(t,i,l,r),va=!1;var R=t.memoizedState;i.state=R,gn(t,l,i,n),hn(),C=t.memoizedState,d||R!==C||va?(typeof q=="function"&&(Xr(t,a,q,l),C=t.memoizedState),(g=va||jf(t,a,g,l,R,C,r))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=r,l=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,xr(e,t),r=t.memoizedProps,U=Ia(a,r),i.props=U,q=t.pendingProps,R=i.context,C=a.contextType,g=gl,typeof C=="object"&&C!==null&&(g=Ie(C)),d=a.getDerivedStateFromProps,(C=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==q||R!==g)&&Ef(t,i,l,g),va=!1,R=t.memoizedState,i.state=R,gn(t,l,i,n),hn();var O=t.memoizedState;r!==q||R!==O||va||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof d=="function"&&(Xr(t,a,d,l),O=t.memoizedState),(U=va||jf(t,a,U,l,R,O,g)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=g,l=U):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Di(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Wa(t,e.child,null,n),t.child=Wa(t,null,a,n)):Pe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function Bf(e,t,a,l){return Qa(),t.flags|=256,Pe(e,t,a,l),t.child}var Kr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $r(e){return{baseLanes:e,cachePool:ws()}}function Wr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function kf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?xa(t):Sa(),(e=we)?(e=Jd(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=vs(e),a.return=t,t.child=a,Fe=t,we=null)):e=null,e===null)throw ha(t);return Oc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(Sa(),n=t.mode,d=Ui({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=$r(a),l.childLanes=Wr(e,r,a),t.memoizedState=Kr,Sn(null,l)):(xa(t),Fr(t,d))}var g=e.memoizedState;if(g!==null&&(d=g.dehydrated,d!==null)){if(i)t.flags&256?(xa(t),t.flags&=-257,t=Ir(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),d=l.fallback,n=t.mode,l=Ui({mode:"visible",children:l.children},n),d=Xa(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Wa(t,e.child,null,a),l=t.child,l.memoizedState=$r(a),l.childLanes=Wr(e,r,a),t.memoizedState=Kr,t=Sn(null,l));else if(xa(t),Oc(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r)var C=r.dgst;r=C,l=Error(c(419)),l.stack="",l.digest=r,on({value:l,source:null,stack:null}),t=Ir(e,t,a)}else if(Ge||xl(e,t,a,!1),r=(a&e.childLanes)!==0,Ge||r){if(r=Te,r!==null&&(l=zo(r,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,Ga(e,l),ft(r,e,l),Zr;_c(d)||Qi(),t=Ir(e,t,a)}else _c(d)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,we=_t(d.nextSibling),Fe=t,me=!0,pa=null,At=!1,e!==null&&xs(t,e),t=Fr(t,l.children),t.flags|=4096);return t}return n?(Sa(),d=l.fallback,n=t.mode,g=e.child,C=g.sibling,l=Kt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,C!==null?d=Kt(C,d):(d=Xa(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,Sn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=$r(a):(n=d.cachePool,n!==null?(g=Ye._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=ws(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Wr(e,r,a),t.memoizedState=Kr,Sn(e.child,l)):(xa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function Fr(e,t){return t=Ui({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ui(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Ir(e,t,a){return Wa(t,e.child,null,a),e=Fr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),mr(e.return,t,a)}function Pr(e,t,a,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=a,r.tailMode=n,r.treeForkCount=i)}function qf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=He.current,d=(r&2)!==0;if(d?(r=r&1|2,t.flags|=128):r&=1,Z(He,r),Pe(e,t,l,a),l=me?cn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,a,t);else if(e.tag===19)Yf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Pr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Pr(t,!0,a,null,i,l);break;case"together":Pr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ec(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Mh(e,t,a){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),ga(t,Ye,e.memoizedState.cache),Qa();break;case 27:case 5:Zl(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?kf(e,t,a):(xa(t),e=ea(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return qf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Z(He,He.current),l)break;return null;case 22:return t.lanes=0,Mf(e,t,a,t.pendingProps);case 24:ga(t,Ye,e.memoizedState.cache)}return ea(e,t,a)}function Gf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!ec(e,a)&&(t.flags&128)===0)return Ge=!1,Mh(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,me&&(t.flags&1048576)!==0&&ys(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")ir(e)?(l=Ia(e,l),t.tag=1,t=Lf(null,t,e,l,a)):(t.tag=0,t=Jr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===F){t.tag=11,t=Rf(null,t,e,l,a);break e}else if(n===G){t.tag=14,t=_f(null,t,e,l,a);break e}}throw t=ke(e)||e,Error(c(306,t,""))}}return t;case 0:return Jr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ia(l,t.pendingProps),Lf(e,t,l,n,a);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,xr(e,t),gn(t,l,null,a);var r=t.memoizedState;if(l=r.cache,ga(t,Ye,l),l!==i.cache&&pr(t,[Ye],a,!0),hn(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bf(e,t,l,a);break e}else if(l!==n){n=wt(Error(c(424)),t),on(n),t=Bf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=_t(e.firstChild),Fe=t,me=!0,pa=null,At=!0,a=Os(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===n){t=ea(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Di(e,t),e===null?(a=Pd(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=Fi(te.current).createElement(a),l[We]=t,l[it]=e,et(l,a,e),Ze(l),t.stateNode=l):t.memoizedState=Pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zl(t),e===null&&me&&(l=t.stateNode=Wd(t.type,t.pendingProps,te.current),Fe=t,At=!0,n=we,Aa(t.type)?(Mc=n,we=_t(l.firstChild)):we=n),Pe(e,t,t.pendingProps.children,a),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=l=we)&&(l=og(l,t.type,t.pendingProps,At),l!==null?(t.stateNode=l,Fe=t,we=_t(l.firstChild),At=!1,n=!0):n=!1),n||ha(t)),Zl(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Cc(n,i)?l=null:r!==null&&Cc(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=Nr(e,t,zh,null,null,a),Hn._currentValue=n),Di(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=we)&&(a=sg(a,t.pendingProps,At),a!==null?(t.stateNode=a,Fe=t,we=null,e=!0):e=!1),e||ha(t)),null;case 13:return kf(e,t,a);case 4:return lt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wa(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return Rf(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ga(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Ie(n),l=l(n),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return _f(e,t,t.type,t.pendingProps,a);case 15:return Of(e,t,t.type,t.pendingProps,a);case 19:return qf(e,t,a);case 31:return Oh(e,t,a);case 22:return Mf(e,t,a,t.pendingProps);case 24:return Za(t),l=Ie(Ye),e===null?(n=vr(),n===null&&(n=Te,i=hr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},yr(t),ga(t,Ye,n)):((e.lanes&a)!==0&&(xr(e,t),gn(t,null,null,a),hn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ga(t,Ye,l)):(l=i.cache,ga(t,Ye,l),l!==n.cache&&pr(t,[Ye],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ta(e){e.flags|=4}function tc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(hd())e.flags|=8192;else throw $a=yi,br}else e.flags&=-16777217}function Xf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nm(t))if(hd())e.flags|=8192;else throw $a=yi,br}function Hi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?So():536870912,e.lanes|=t,Ol|=t)}function jn(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Dh(e,t,a){var l=t.pendingProps;switch(or(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Ye),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fr())),Ne(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Ne(t),Xf(t,i)):(Ne(t),tc(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Ne(t),Xf(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Ne(t),tc(t,n,e,l,a)),null;case 27:if(Jn(t),a=te.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}e=$.current,yl(t)?Ss(t):(e=Wd(n,l,a),t.stateNode=e,ta(t))}return Ne(t),null;case 5:if(Jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}if(i=$.current,yl(t))Ss(t);else{var r=Fi(te.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[We]=t,i[it]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(et(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Ne(t),tc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=te.current,yl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||kd(e.nodeValue,a)),e||ha(t,!0)}else e=Fi(e).createTextNode(l),e[We]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=fr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=fr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Hi(t,t.updateQueue),Ne(t),null);case 4:return Ue(),e===null&&Ec(t.stateNode.containerInfo),Ne(t),null;case 10:return Ft(t.type),Ne(t),null;case 19:if(Y(He),l=t.memoizedState,l===null)return Ne(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)jn(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,jn(l,!1),e=i.updateQueue,t.updateQueue=e,Hi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)gs(a,e),a=a.sibling;return Z(He,He.current&1|2),me&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&dt()>qi&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Hi(t,e),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!me)return Ne(t),null}else 2*dt()-l.renderingStartTime>qi&&a!==536870912&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=dt(),e.sibling=null,a=He.current,Z(He,n?a&1|2:a&1),me&&$t(t,l.treeForkCount),e):(Ne(t),null);case 22:case 23:return bt(t),zr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&Hi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Y(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Ye),Ne(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Uh(e,t){switch(or(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Ye),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(He),null;case 4:return Ue(),null;case 10:return Ft(t.type),null;case 22:case 23:return bt(t),zr(),e!==null&&Y(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Ye),null;case 25:return null;default:return null}}function Qf(e,t){switch(or(t),t.tag){case 3:Ft(Ye),Ue();break;case 26:case 27:case 5:Jn(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:Y(He);break;case 10:Ft(t.type);break;case 22:case 23:bt(t),zr(),e!==null&&Y(Ja);break;case 24:Ft(Ye)}}function En(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(d){Se(t,t.return,d)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,d=r.destroy;if(d!==void 0){r.destroy=void 0,n=t;var g=a,C=d;try{C()}catch(U){Se(n,g,U)}}}l=l.next}while(l!==i)}}catch(U){Se(t,t.return,U)}}function Vf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ds(t,a)}catch(l){Se(e,e.return,l)}}}function Zf(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function zn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Se(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Se(e,t,n)}else a.current=null}function Jf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Se(e,e.return,n)}}function ac(e,t,a){try{var l=e.stateNode;lg(l,e.type,a,t),l[it]=t}catch(n){Se(e,e.return,n)}}function Kf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,a),e=e.sibling;e!==null;)nc(e,t,a),e=e.sibling}function Li(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Li(e,t,a),e=e.sibling;e!==null;)Li(e,t,a),e=e.sibling}function $f(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,l,a),t[We]=e,t[it]=a}catch(i){Se(e,e.return,i)}}var aa=!1,Xe=!1,ic=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Hh(e,t){if(e=e.containerInfo,wc=nu,e=rs(e),Iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var r=0,d=-1,g=-1,C=0,U=0,q=e,R=null;t:for(;;){for(var O;q!==a||n!==0&&q.nodeType!==3||(d=r+n),q!==i||l!==0&&q.nodeType!==3||(g=r+l),q.nodeType===3&&(r+=q.nodeValue.length),(O=q.firstChild)!==null;)R=q,q=O;for(;;){if(q===e)break t;if(R===a&&++C===n&&(d=r),R===i&&++U===l&&(g=r),(O=q.nextSibling)!==null)break;q=R,R=q.parentNode}q=O}a=d===-1||g===-1?null:{start:d,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:e,selectionRange:a},nu=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var K=Ia(a.type,n);e=l.getSnapshotBeforeUpdate(K,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Se(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Rc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Rc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Ff(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&En(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){Se(a,a.return,r)}else{var n=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Se(a,a.return,r)}}l&64&&Vf(a),l&512&&zn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ds(e,t)}catch(r){Se(a,a.return,r)}}break;case 27:t===null&&l&4&&$f(a);case 26:case 5:na(e,a),t===null&&l&4&&Jf(a),l&512&&zn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&ed(e,a);break;case 13:na(e,a),l&4&&td(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vh.bind(null,a),fg(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Xe,n=aa;var i=Xe;aa=l,(Xe=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Xe=i}break;case 30:break;default:na(e,a)}}function If(e){var t=e.alternate;t!==null&&(e.alternate=null,If(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Uu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,rt=!1;function la(e,t,a){for(a=a.child;a!==null;)Pf(e,t,a),a=a.sibling}function Pf(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:Xe||Gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Gt(a,t);var l=_e,n=rt;Aa(a.type)&&(_e=a.stateNode,rt=!1),la(e,t,a),Mn(a.stateNode),_e=l,rt=n;break;case 5:Xe||Gt(a,t);case 6:if(l=_e,n=rt,_e=null,la(e,t,a),_e=l,rt=n,_e!==null)if(rt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(i){Se(a,t,i)}else try{_e.removeChild(a.stateNode)}catch(i){Se(a,t,i)}break;case 18:_e!==null&&(rt?(e=_e,Vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Vd(_e,a.stateNode));break;case 4:l=_e,n=rt,_e=a.stateNode.containerInfo,rt=!0,la(e,t,a),_e=l,rt=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Xe||ja(4,a,t),la(e,t,a);break;case 1:Xe||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Zf(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Xe=(l=Xe)||a.memoizedState!==null,la(e,t,a),Xe=l;break;default:la(e,t,a)}}function ed(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){Se(t,t.return,a)}}}function td(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){Se(t,t.return,a)}}function Lh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wf),t;default:throw Error(c(435,e.tag))}}function Bi(e,t){var a=Lh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Zh.bind(null,e,l);l.then(n,n)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,r=t,d=r;e:for(;d!==null;){switch(d.tag){case 27:if(Aa(d.type)){_e=d.stateNode,rt=!1;break e}break;case 5:_e=d.stateNode,rt=!1;break e;case 3:case 4:_e=d.stateNode.containerInfo,rt=!0;break e}d=d.return}if(_e===null)throw Error(c(160));Pf(i,r,n),_e=null,rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ad(t,e),t=t.sibling}var Ut=null;function ad(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ot(e),l&4&&(ja(3,e,e.return),En(3,e),ja(5,e,e.return));break;case 1:ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),et(i,l,a),i[We]=e,Ze(i),l=i;break e;case"link":var r=am("link","href",n).get(l+(a.href||""));if(r){for(var d=0;d<r.length;d++)if(i=r[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;case"meta":if(r=am("meta","content",n).get(l+(a.content||""))){for(d=0;d<r.length;d++)if(i=r[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[We]=e,Ze(i),l=i}e.stateNode=l}else lm(n,e.type,e.stateNode);else e.stateNode=tm(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?lm(n,e.type,e.stateNode):tm(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ac(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),a!==null&&l&4&&ac(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),ot(e),l&512&&(Xe||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{ol(n,"")}catch(K){Se(e,e.return,K)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,ac(e,n,a!==null?a.memoizedProps:n)),l&1024&&(ic=!0);break;case 6:if(ct(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(K){Se(e,e.return,K)}}break;case 3:if(eu=null,n=Ut,Ut=Ii(t.containerInfo),ct(t,e),Ut=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(K){Se(e,e.return,K)}ic&&(ic=!1,ld(e));break;case 4:l=Ut,Ut=Ii(e.stateNode.containerInfo),ct(t,e),ot(e),Ut=l;break;case 12:ct(t,e),ot(e);break;case 31:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 13:ct(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yi=dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,C=aa,U=Xe;if(aa=C||n,Xe=U||g,ct(t,e),Xe=U,aa=C,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||aa||Xe||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(i=g.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=g.stateNode;var q=g.memoizedProps.style,R=q!=null&&q.hasOwnProperty("display")?q.display:null;d.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(K){Se(g,g.return,K)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(K){Se(g,g.return,K)}}}else if(t.tag===18){if(a===null){g=t;try{var O=g.stateNode;n?Zd(O,!0):Zd(g.stateNode,!1)}catch(K){Se(g,g.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Bi(e,a))));break;case 19:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 30:break;case 21:break;default:ct(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Kf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=lc(e);Li(e,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(ol(r,""),a.flags&=-33);var d=lc(e);Li(e,d,r);break;case 3:case 4:var g=a.stateNode.containerInfo,C=lc(e);nc(e,C,g);break;default:throw Error(c(161))}}catch(U){Se(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ff(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),Pa(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Zf(t,t.return,a),Pa(t);break;case 27:Mn(t.stateNode);case 26:case 5:Gt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),En(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(C){Se(l,l.return,C)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)Ms(g[n],d)}catch(C){Se(l,l.return,C)}}a&&r&64&&Vf(i),zn(i,i.return);break;case 27:$f(i);case 26:case 5:ia(n,i,a),a&&l===null&&r&4&&Jf(i),zn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&r&4&&ed(n,i);break;case 13:ia(n,i,a),a&&r&4&&td(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),zn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sn(a))}function rc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e))}function Ht(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nd(e,t,a,l),t=t.sibling}function nd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,a,l),n&2048&&En(9,t);break;case 1:Ht(e,t,a,l);break;case 3:Ht(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e)));break;case 12:if(n&2048){Ht(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,d=i.onPostCommit;typeof d=="function"&&d(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Se(t,t.return,g)}}else Ht(e,t,a,l);break;case 31:Ht(e,t,a,l);break;case 13:Ht(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Ht(e,t,a,l):Tn(e,t):i._visibility&2?Ht(e,t,a,l):(i._visibility|=2,Al(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&uc(r,t);break;case 24:Ht(e,t,a,l),n&2048&&rc(t.alternate,t);break;default:Ht(e,t,a,l)}}function Al(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,d=a,g=l,C=r.flags;switch(r.tag){case 0:case 11:case 15:Al(i,r,d,g,n),En(8,r);break;case 23:break;case 22:var U=r.stateNode;r.memoizedState!==null?U._visibility&2?Al(i,r,d,g,n):Tn(i,r):(U._visibility|=2,Al(i,r,d,g,n)),n&&C&2048&&uc(r.alternate,r);break;case 24:Al(i,r,d,g,n),n&&C&2048&&rc(r.alternate,r);break;default:Al(i,r,d,g,n)}t=t.sibling}}function Tn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Tn(a,l),n&2048&&uc(l.alternate,l);break;case 24:Tn(a,l),n&2048&&rc(l.alternate,l);break;default:Tn(a,l)}t=t.sibling}}var wn=8192;function Rl(e,t,a){if(e.subtreeFlags&wn)for(e=e.child;e!==null;)id(e,t,a),e=e.sibling}function id(e,t,a){switch(e.tag){case 26:Rl(e,t,a),e.flags&wn&&e.memoizedState!==null&&Eg(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Rl(e,t,a);break;case 3:case 4:var l=Ut;Ut=Ii(e.stateNode.containerInfo),Rl(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=wn,wn=16777216,Rl(e,t,a),wn=l):Rl(e,t,a));break;default:Rl(e,t,a)}}function ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,cd(l,e)}ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rd(e),e=e.sibling}function rd(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ki(e)):Nn(e);break;default:Nn(e)}}function ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,cd(l,e)}ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),ki(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ki(t));break;default:ki(t)}e=e.sibling}}function cd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Je=l;else e:for(a=e;Je!==null;){l=Je;var n=l.sibling,i=l.return;if(If(l),l===a){Je=null;break e}if(n!==null){n.return=i,Je=n;break e}Je=i}}}var Bh={getCacheForType:function(e){var t=Ie(Ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ye).controller.signal}},kh=typeof WeakMap=="function"?WeakMap:Map,be=0,Te=null,oe=null,fe=0,xe=0,yt=null,Ea=!1,_l=!1,cc=!1,ua=0,De=0,za=0,el=0,oc=0,xt=0,Ol=0,Cn=null,st=null,sc=!1,Yi=0,od=0,qi=1/0,Gi=null,Ta=null,Qe=0,wa=null,Ml=null,ra=0,fc=0,dc=null,sd=null,An=0,mc=null;function St(){return(be&2)!==0&&fe!==0?fe&-fe:D.T!==null?yc():To()}function fd(){if(xt===0)if((fe&536870912)===0||me){var e=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),xt=e}else xt=536870912;return e=vt.current,e!==null&&(e.flags|=32),xt}function ft(e,t,a){(e===Te&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Na(e,fe,xt,!1)),$l(e,a),((be&2)===0||e!==Te)&&(e===Te&&((be&2)===0&&(el|=a),De===4&&Na(e,fe,xt,!1)),Xt(e))}function dd(e,t,a){if((be&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),n=l?Gh(e,t):hc(e,t,!0),i=l;do{if(n===0){_l&&!l&&Na(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Yh(a)){n=hc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var d=e;n=Cn;var g=d.current.memoizedState.isDehydrated;if(g&&(Dl(d,r).flags|=256),r=hc(d,r,!1),r!==2){if(cc&&!g){d.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Na(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Na(l,t,xt,!Ea);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Yi+300-dt(),10<n)){if(Na(l,t,xt,!Ea),In(l,0,!0)!==0)break e;ra=t,l.timeoutHandle=Xd(md.bind(null,l,a,st,Gi,sc,t,xt,el,Ol,Ea,i,"Throttled",-0,0),n);break e}md(l,a,st,Gi,sc,t,xt,el,Ol,Ea,i,null,-0,0)}}break}while(!0);Xt(e)}function md(e,t,a,l,n,i,r,d,g,C,U,q,R,O){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},id(t,i,q);var K=(i&62914560)===i?Yi-dt():(i&4194048)===i?od-dt():0;if(K=zg(q,K),K!==null){ra=i,e.cancelPendingCommit=K(Sd.bind(null,e,t,i,a,l,n,r,d,g,U,q,null,R,O)),Na(e,i,r,!C);return}}Sd(e,t,i,a,l,n,r,d,g)}function Yh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,a,l){t&=~oc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&jo(e,a,t)}function Xi(){return(be&6)===0?(Rn(0),!1):!0}function pc(){if(oe!==null){if(xe===0)var e=oe.return;else e=oe,Wt=Va=null,Rr(e),zl=null,dn=0,e=oe;for(;e!==null;)Qf(e.alternate,e),e=e.return;oe=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ug(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,pc(),Te=e,oe=a=Kt(e.current,null),fe=t,xe=0,yt=null,Ea=!1,_l=Kl(e,t),cc=!1,Ol=xt=oc=el=za=De=0,st=Cn=null,sc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return ua=t,si(),a}function pd(e,t){ie=null,D.H=xn,t===El||t===bi?(t=As(),xe=3):t===br?(t=As(),xe=4):xe=t===Zr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,oe===null&&(De=1,Oi(e,wt(t,e.current)))}function hd(){var e=vt.current;return e===null?!0:(fe&4194048)===fe?Rt===null:(fe&62914560)===fe||(fe&536870912)!==0?e===Rt:!1}function gd(){var e=D.H;return D.H=xn,e===null?xn:e}function vd(){var e=D.A;return D.A=Bh,e}function Qi(){De=4,Ea||(fe&4194048)!==fe&&vt.current!==null||(_l=!0),(za&134217727)===0&&(el&134217727)===0||Te===null||Na(Te,fe,xt,!1)}function hc(e,t,a){var l=be;be|=2;var n=gd(),i=vd();(Te!==e||fe!==t)&&(Gi=null,Dl(e,t)),t=!1;var r=De;e:do try{if(xe!==0&&oe!==null){var d=oe,g=yt;switch(xe){case 8:pc(),r=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var C=xe;if(xe=0,yt=null,Ul(e,d,g,C),a&&_l){r=0;break e}break;default:C=xe,xe=0,yt=null,Ul(e,d,g,C)}}qh(),r=De;break}catch(U){pd(e,U)}while(!0);return t&&e.shellSuspendCounter++,Wt=Va=null,be=l,D.H=n,D.A=i,oe===null&&(Te=null,fe=0,si()),r}function qh(){for(;oe!==null;)bd(oe)}function Gh(e,t){var a=be;be|=2;var l=gd(),n=vd();Te!==e||fe!==t?(Gi=null,qi=dt()+500,Dl(e,t)):_l=Kl(e,t);e:do try{if(xe!==0&&oe!==null){t=oe;var i=yt;t:switch(xe){case 1:xe=0,yt=null,Ul(e,t,i,1);break;case 2:case 9:if(Ns(i)){xe=0,yt=null,yd(t);break}t=function(){xe!==2&&xe!==9||Te!==e||(xe=7),Xt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Ns(i)?(xe=0,yt=null,yd(t)):(xe=0,yt=null,Ul(e,t,i,7));break;case 5:var r=null;switch(oe.tag){case 26:r=oe.memoizedState;case 5:case 27:var d=oe;if(r?nm(r):d.stateNode.complete){xe=0,yt=null;var g=d.sibling;if(g!==null)oe=g;else{var C=d.return;C!==null?(oe=C,Vi(C)):oe=null}break t}}xe=0,yt=null,Ul(e,t,i,5);break;case 6:xe=0,yt=null,Ul(e,t,i,6);break;case 8:pc(),De=6;break e;default:throw Error(c(462))}}Xh();break}catch(U){pd(e,U)}while(!0);return Wt=Va=null,D.H=l,D.A=n,be=a,oe!==null?0:(Te=null,fe=0,si(),De)}function Xh(){for(;oe!==null&&!dp();)bd(oe)}function bd(e){var t=Gf(e.alternate,e,ua);e.memoizedProps=e.pendingProps,t===null?Vi(e):oe=t}function yd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hf(a,t,t.pendingProps,t.type,void 0,fe);break;case 11:t=Hf(a,t,t.pendingProps,t.type.render,t.ref,fe);break;case 5:Rr(t);default:Qf(a,t),t=oe=gs(t,ua),t=Gf(a,t,ua)}e.memoizedProps=e.pendingProps,t===null?Vi(e):oe=t}function Ul(e,t,a,l){Wt=Va=null,Rr(t),zl=null,dn=0;var n=t.return;try{if(_h(e,n,t,a,fe)){De=1,Oi(e,wt(a,e.current)),oe=null;return}}catch(i){if(n!==null)throw oe=n,i;De=1,Oi(e,wt(a,e.current)),oe=null;return}t.flags&32768?(me||l===1?e=!0:_l||(fe&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),xd(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){xd(t,Ea);return}e=t.return;var a=Dh(t.alternate,t,ua);if(a!==null){oe=a;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);De===0&&(De=5)}function xd(e,t){do{var a=Uh(e.alternate,e);if(a!==null){a.flags&=32767,oe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=a}while(e!==null);De=6,oe=null}function Sd(e,t,a,l,n,i,r,d,g){e.cancelPendingCommit=null;do Zi();while(Qe!==0);if((be&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=lr,jp(e,a,i,r,d,g),e===Te&&(oe=Te=null,fe=0),Ml=t,wa=e,ra=a,fc=i,dc=n,sd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jh(Kn,function(){return wd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,n=x.p,x.p=2,r=be,be|=4;try{Hh(e,t,a)}finally{be=r,x.p=n,D.T=l}}Qe=1,jd(),Ed(),zd()}}function jd(){if(Qe===1){Qe=0;var e=wa,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=x.p;x.p=2;var n=be;be|=4;try{ad(t,e);var i=Nc,r=rs(e.containerInfo),d=i.focusedElem,g=i.selectionRange;if(r!==d&&d&&d.ownerDocument&&us(d.ownerDocument.documentElement,d)){if(g!==null&&Iu(d)){var C=g.start,U=g.end;if(U===void 0&&(U=C),"selectionStart"in d)d.selectionStart=C,d.selectionEnd=Math.min(U,d.value.length);else{var q=d.ownerDocument||document,R=q&&q.defaultView||window;if(R.getSelection){var O=R.getSelection(),K=d.textContent.length,P=Math.min(g.start,K),ze=g.end===void 0?P:Math.min(g.end,K);!O.extend&&P>ze&&(r=ze,ze=P,P=r);var T=is(d,P),S=is(d,ze);if(T&&S&&(O.rangeCount!==1||O.anchorNode!==T.node||O.anchorOffset!==T.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var N=q.createRange();N.setStart(T.node,T.offset),O.removeAllRanges(),P>ze?(O.addRange(N),O.extend(S.node,S.offset)):(N.setEnd(S.node,S.offset),O.addRange(N))}}}}for(q=[],O=d;O=O.parentNode;)O.nodeType===1&&q.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<q.length;d++){var k=q[d];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}nu=!!wc,Nc=wc=null}finally{be=n,x.p=l,D.T=a}}e.current=t,Qe=2}}function Ed(){if(Qe===2){Qe=0;var e=wa,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=x.p;x.p=2;var n=be;be|=4;try{Ff(e,t.alternate,t)}finally{be=n,x.p=l,D.T=a}}Qe=3}}function zd(){if(Qe===4||Qe===3){Qe=0,mp();var e=wa,t=Ml,a=ra,l=sd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Ml=wa=null,Td(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ta=null),Mu(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,n=x.p,x.p=2,D.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var d=l[r];i(d.value,{componentStack:d.stack})}}finally{D.T=t,x.p=n}}(ra&3)!==0&&Zi(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===mc?An++:(An=0,mc=e):An=0,Rn(0)}}function Td(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sn(t)))}function Zi(){return jd(),Ed(),zd(),wd()}function wd(){if(Qe!==5)return!1;var e=wa,t=fc;fc=0;var a=Mu(ra),l=D.T,n=x.p;try{x.p=32>a?32:a,D.T=null,a=dc,dc=null;var i=wa,r=ra;if(Qe=0,Ml=wa=null,ra=0,(be&6)!==0)throw Error(c(331));var d=be;if(be|=4,rd(i.current),nd(i,i.current,r,a),be=d,Rn(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Jl,i)}catch{}return!0}finally{x.p=n,D.T=l,Td(e,t)}}function Nd(e,t,a){t=wt(a,t),t=Vr(e.stateNode,t,2),e=ya(e,t,2),e!==null&&($l(e,2),Xt(e))}function Se(e,t,a){if(e.tag===3)Nd(e,e,a);else for(;t!==null;){if(t.tag===3){Nd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ta===null||!Ta.has(l))){e=wt(a,e),a=Cf(2),l=ya(t,a,2),l!==null&&(Af(a,l,t,e),$l(l,2),Xt(l));break}}t=t.return}}function gc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new kh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(cc=!0,n.add(a),e=Qh.bind(null,e,t,a),t.then(e,e))}function Qh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(fe&a)===a&&(De===4||De===3&&(fe&62914560)===fe&&300>dt()-Yi?(be&2)===0&&Dl(e,0):oc|=a,Ol===fe&&(Ol=0)),Xt(e)}function Cd(e,t){t===0&&(t=So()),e=Ga(e,t),e!==null&&($l(e,t),Xt(e))}function Vh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cd(e,a)}function Zh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Cd(e,a)}function Jh(e,t){return Au(e,t)}var Ji=null,Hl=null,vc=!1,Ki=!1,bc=!1,Ca=0;function Xt(e){e!==Hl&&e.next===null&&(Hl===null?Ji=Hl=e:Hl=Hl.next=e),Ki=!0,vc||(vc=!0,$h())}function Rn(e,t){if(!bc&&Ki){bc=!0;do for(var a=!1,l=Ji;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(r&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Od(l,i))}else i=fe,i=In(l,l===Te?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Kl(l,i)||(a=!0,Od(l,i));l=l.next}while(a);bc=!1}}function Kh(){Ad()}function Ad(){Ki=vc=!1;var e=0;Ca!==0&&ig()&&(e=Ca);for(var t=dt(),a=null,l=Ji;l!==null;){var n=l.next,i=Rd(l,t);i===0?(l.next=null,a===null?Ji=n:a.next=n,n===null&&(Hl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ki=!0)),l=n}Qe!==0&&Qe!==5||Rn(e),Ca!==0&&(Ca=0)}function Rd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-pt(i),d=1<<r,g=n[r];g===-1?((d&a)===0||(d&l)!==0)&&(n[r]=Sp(d,t)):g<=t&&(e.expiredLanes|=d),i&=~d}if(t=Te,a=fe,a=In(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ru(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ru(l),Mu(a)){case 2:case 8:a=yo;break;case 32:a=Kn;break;case 268435456:a=xo;break;default:a=Kn}return l=_d.bind(null,e),a=Au(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ru(l),e.callbackPriority=2,e.callbackNode=null,2}function _d(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zi()&&e.callbackNode!==a)return null;var l=fe;return l=In(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(dd(e,l,t),Rd(e,dt()),e.callbackNode!=null&&e.callbackNode===a?_d.bind(null,e):null)}function Od(e,t){if(Zi())return null;dd(e,t,!0)}function $h(){rg(function(){(be&6)!==0?Au(bo,Kh):Ad()})}function yc(){if(Ca===0){var e=Sl;e===0&&(e=$n,$n<<=1,($n&261888)===0&&($n=256)),Ca=e}return Ca}function Md(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ai(""+e)}function Dd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Md((n[it]||null).action),r=l.submitter;r&&(t=(t=r[it]||null)?Md(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var d=new ui("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var g=r?Dd(n,r):new FormData(n);kr(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(d.preventDefault(),g=r?Dd(n,r):new FormData(n),kr(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var xc=0;xc<ar.length;xc++){var Sc=ar[xc],Fh=Sc.toLowerCase(),Ih=Sc[0].toUpperCase()+Sc.slice(1);Dt(Fh,"on"+Ih)}Dt(ss,"onAnimationEnd"),Dt(fs,"onAnimationIteration"),Dt(ds,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(ph,"onTransitionRun"),Dt(hh,"onTransitionStart"),Dt(gh,"onTransitionCancel"),Dt(ms,"onTransitionEnd"),rl("onMouseEnter",["mouseout","mouseover"]),rl("onMouseLeave",["mouseout","mouseover"]),rl("onPointerEnter",["pointerout","pointerover"]),rl("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));function Ud(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var d=l[r],g=d.instance,C=d.currentTarget;if(d=d.listener,g!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=C;try{i(n)}catch(U){oi(U)}n.currentTarget=null,i=g}else for(r=0;r<l.length;r++){if(d=l[r],g=d.instance,C=d.currentTarget,d=d.listener,g!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=C;try{i(n)}catch(U){oi(U)}n.currentTarget=null,i=g}}}}function se(e,t){var a=t[Du];a===void 0&&(a=t[Du]=new Set);var l=e+"__bubble";a.has(l)||(Hd(t,e,2,!1),a.add(l))}function jc(e,t,a){var l=0;t&&(l|=4),Hd(a,e,l,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function Ec(e){if(!e[$i]){e[$i]=!0,Co.forEach(function(a){a!=="selectionchange"&&(Ph.has(a)||jc(a,!1,e),jc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,jc("selectionchange",!1,t))}}function Hd(e,t,a,l){switch(fm(t)){case 2:var n=Ng;break;case 8:n=Cg;break;default:n=Bc}a=n.bind(null,t,a,e),n=void 0,!Xu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function zc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var d=l.stateNode.containerInfo;if(d===n)break;if(r===4)for(r=l.return;r!==null;){var g=r.tag;if((g===3||g===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;d!==null;){if(r=nl(d),r===null)return;if(g=r.tag,g===5||g===6||g===26||g===27){l=i=r;continue e}d=d.parentNode}}l=l.return}Yo(function(){var C=i,U=qu(a),q=[];e:{var R=ps.get(e);if(R!==void 0){var O=ui,K=e;switch(e){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":O=Zp;break;case"focusin":K="focus",O=Ju;break;case"focusout":K="blur",O=Ju;break;case"beforeblur":case"afterblur":O=Ju;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=$p;break;case ss:case fs:case ds:O=Lp;break;case ms:O=Fp;break;case"scroll":case"scrollend":O=Op;break;case"wheel":O=Pp;break;case"copy":case"cut":case"paste":O=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Vo;break;case"toggle":case"beforetoggle":O=th}var P=(t&4)!==0,ze=!P&&(e==="scroll"||e==="scrollend"),T=P?R!==null?R+"Capture":null:R;P=[];for(var S=C,N;S!==null;){var k=S;if(N=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||N===null||T===null||(k=Il(S,T),k!=null&&P.push(On(S,k,N))),ze)break;S=S.return}0<P.length&&(R=new O(R,K,null,a,U),q.push({event:R,listeners:P}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",R&&a!==Yu&&(K=a.relatedTarget||a.fromElement)&&(nl(K)||K[ll]))break e;if((O||R)&&(R=U.window===U?U:(R=U.ownerDocument)?R.defaultView||R.parentWindow:window,O?(K=a.relatedTarget||a.toElement,O=C,K=K?nl(K):null,K!==null&&(ze=p(K),P=K.tag,K!==ze||P!==5&&P!==27&&P!==6)&&(K=null)):(O=null,K=C),O!==K)){if(P=Xo,k="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(P=Vo,k="onPointerLeave",T="onPointerEnter",S="pointer"),ze=O==null?R:Fl(O),N=K==null?R:Fl(K),R=new P(k,S+"leave",O,a,U),R.target=ze,R.relatedTarget=N,k=null,nl(U)===C&&(P=new P(T,S+"enter",K,a,U),P.target=N,P.relatedTarget=ze,k=P),ze=k,O&&K)t:{for(P=eg,T=O,S=K,N=0,k=T;k;k=P(k))N++;k=0;for(var I=S;I;I=P(I))k++;for(;0<N-k;)T=P(T),N--;for(;0<k-N;)S=P(S),k--;for(;N--;){if(T===S||S!==null&&T===S.alternate){P=T;break t}T=P(T),S=P(S)}P=null}else P=null;O!==null&&Ld(q,R,O,P,!1),K!==null&&ze!==null&&Ld(q,ze,K,P,!0)}}e:{if(R=C?Fl(C):window,O=R.nodeName&&R.nodeName.toLowerCase(),O==="select"||O==="input"&&R.type==="file")var ge=Po;else if(Fo(R))if(es)ge=fh;else{ge=oh;var W=ch}else O=R.nodeName,!O||O.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?C&&ku(C.elementType)&&(ge=Po):ge=sh;if(ge&&(ge=ge(e,C))){Io(q,ge,a,U);break e}W&&W(e,R,C),e==="focusout"&&C&&R.type==="number"&&C.memoizedProps.value!=null&&Bu(R,"number",R.value)}switch(W=C?Fl(C):window,e){case"focusin":(Fo(W)||W.contentEditable==="true")&&(ml=W,Pu=C,rn=null);break;case"focusout":rn=Pu=ml=null;break;case"mousedown":er=!0;break;case"contextmenu":case"mouseup":case"dragend":er=!1,cs(q,a,U);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":cs(q,a,U)}var ue;if($u)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else dl?$o(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Zo&&a.locale!=="ko"&&(dl||de!=="onCompositionStart"?de==="onCompositionEnd"&&dl&&(ue=qo()):(da=U,Qu="value"in da?da.value:da.textContent,dl=!0)),W=Wi(C,de),0<W.length&&(de=new Qo(de,e,null,a,U),q.push({event:de,listeners:W}),ue?de.data=ue:(ue=Wo(a),ue!==null&&(de.data=ue)))),(ue=lh?nh(e,a):ih(e,a))&&(de=Wi(C,"onBeforeInput"),0<de.length&&(W=new Qo("onBeforeInput","beforeinput",null,a,U),q.push({event:W,listeners:de}),W.data=ue)),Wh(q,e,C,a,U)}Ud(q,t)})}function On(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(On(e,n,i)),n=Il(e,t),n!=null&&l.push(On(e,n,i))),e.tag===3)return l;e=e.return}return[]}function eg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ld(e,t,a,l,n){for(var i=t._reactName,r=[];a!==null&&a!==l;){var d=a,g=d.alternate,C=d.stateNode;if(d=d.tag,g!==null&&g===l)break;d!==5&&d!==26&&d!==27||C===null||(g=C,n?(C=Il(a,i),C!=null&&r.unshift(On(a,C,g))):n||(C=Il(a,i),C!=null&&r.push(On(a,C,g)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var tg=/\r\n?/g,ag=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(tg,`
`).replace(ag,"")}function kd(e,t){return t=Bd(t),Bd(e)===t}function Ee(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,a,l);break;case"style":Bo(e,l,i);break;case"data":if(t!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ai(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Pn(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rp.get(a)||a,Pn(e,a,l))}}function Tc(e,t,a,l,n,i){switch(a){case"style":Bo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Pn(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,i,r,a,null)}}n&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var d=i=r=n=null,g=null,C=null;for(l in a)if(a.hasOwnProperty(l)){var U=a[l];if(U!=null)switch(l){case"name":n=U;break;case"type":r=U;break;case"checked":g=U;break;case"defaultChecked":C=U;break;case"value":i=U;break;case"defaultValue":d=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:Ee(e,t,l,U,a,null)}}Do(e,i,d,g,C,r,n,!1);return;case"select":se("invalid",e),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":r=d;break;case"multiple":l=d;default:Ee(e,t,n,d,a,null)}t=i,a=r,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(d=a[r],d!=null))switch(r){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ee(e,t,r,d,a,null)}Ho(e,l,n,i);return;case"option":for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null)&&(g==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,g,l,a,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<_n.length;l++)se(_n[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,C,l,a,null)}return;default:if(ku(t)){for(U in a)a.hasOwnProperty(U)&&(l=a[U],l!==void 0&&Tc(e,t,U,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Ee(e,t,d,l,a,null))}function lg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,d=null,g=null,C=null,U=null;for(O in a){var q=a[O];if(a.hasOwnProperty(O)&&q!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":g=q;default:l.hasOwnProperty(O)||Ee(e,t,O,null,l,q)}}for(var R in l){var O=l[R];if(q=a[R],l.hasOwnProperty(R)&&(O!=null||q!=null))switch(R){case"type":i=O;break;case"name":n=O;break;case"checked":C=O;break;case"defaultChecked":U=O;break;case"value":r=O;break;case"defaultValue":d=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:O!==q&&Ee(e,t,R,O,l,q)}}Lu(e,r,d,g,C,U,i,n);return;case"select":O=r=d=R=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":O=g;default:l.hasOwnProperty(i)||Ee(e,t,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":R=i;break;case"defaultValue":d=i;break;case"multiple":r=i;default:i!==g&&Ee(e,t,n,i,l,g)}t=d,a=r,l=O,R!=null?cl(e,!!a,R,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":O=R=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ee(e,t,d,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":R=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&Ee(e,t,r,n,l,i)}Uo(e,R,O);return;case"option":for(var K in a)R=a[K],a.hasOwnProperty(K)&&R!=null&&!l.hasOwnProperty(K)&&(K==="selected"?e.selected=!1:Ee(e,t,K,null,l,R));for(g in l)R=l[g],O=a[g],l.hasOwnProperty(g)&&R!==O&&(R!=null||O!=null)&&(g==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Ee(e,t,g,R,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)R=a[P],a.hasOwnProperty(P)&&R!=null&&!l.hasOwnProperty(P)&&Ee(e,t,P,null,l,R);for(C in l)if(R=l[C],O=a[C],l.hasOwnProperty(C)&&R!==O&&(R!=null||O!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Ee(e,t,C,R,l,O)}return;default:if(ku(t)){for(var ze in a)R=a[ze],a.hasOwnProperty(ze)&&R!==void 0&&!l.hasOwnProperty(ze)&&Tc(e,t,ze,void 0,l,R);for(U in l)R=l[U],O=a[U],!l.hasOwnProperty(U)||R===O||R===void 0&&O===void 0||Tc(e,t,U,R,l,O);return}}for(var T in a)R=a[T],a.hasOwnProperty(T)&&R!=null&&!l.hasOwnProperty(T)&&Ee(e,t,T,null,l,R);for(q in l)R=l[q],O=a[q],!l.hasOwnProperty(q)||R===O||R==null&&O==null||Ee(e,t,q,R,l,O)}function Yd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ng(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,r=n.initiatorType,d=n.duration;if(i&&d&&Yd(r)){for(r=0,d=n.responseEnd,l+=1;l<a.length;l++){var g=a[l],C=g.startTime;if(C>d)break;var U=g.transferSize,q=g.initiatorType;U&&Yd(q)&&(g=g.responseEnd,r+=U*(g<d?1:(d-C)/(g-C)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wc=null,Nc=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function ig(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var Xd=typeof setTimeout=="function"?setTimeout:void 0,ug=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,rg=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(cg)}:Xd;function cg(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Vd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mn(a);for(var i=a.firstChild;i;){var r=i.nextSibling,d=i.nodeName;i[Wl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=r}}else a==="body"&&Mn(e.ownerDocument.body);a=n}while(a);Yl(t)}function Zd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Rc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rc(a),Uu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function og(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function sg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Jd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function _c(e){return e.data==="$?"||e.data==="$~"}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mc=null;function Kd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function $d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Wd(e,t,a){switch(t=Fi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Uu(e)}var Ot=new Map,Fd=new Set;function Ii(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=x.d;x.d={f:dg,r:mg,D:pg,C:hg,L:gg,m:vg,X:yg,S:bg,M:xg};function dg(){var e=ca.f(),t=Xi();return e||t}function mg(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?pf(t):ca.r(e)}var Ll=typeof document>"u"?null:document;function Id(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var n=zt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Fd.has(n)||(Fd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function pg(e){ca.D(e),Id("dns-prefetch",e,null)}function hg(e,t){ca.C(e,t),Id("preconnect",e,t)}function gg(e,t,a){ca.L(e,t,a);var l=Ll;if(l&&e&&t){var n='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+zt(a.imageSizes)+'"]')):n+='[href="'+zt(e)+'"]';var i=n;switch(t){case"style":i=Bl(e);break;case"script":i=kl(e)}Ot.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Dn(i))||t==="script"&&l.querySelector(Un(i))||(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function vg(e,t){ca.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=kl(e)}if(!Ot.has(i)&&(e=E({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Un(i)))return}l=a.createElement("link"),et(l,"link",e),Ze(l),a.head.appendChild(l)}}}function bg(e,t,a){ca.S(e,t,a);var l=Ll;if(l&&e){var n=ul(l).hoistableStyles,i=Bl(e);t=t||"default";var r=n.get(i);if(!r){var d={loading:0,preload:null};if(r=l.querySelector(Dn(i)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Dc(e,a);var g=r=l.createElement("link");Ze(g),et(g,"link",e),g._p=new Promise(function(C,U){g.onload=C,g.onerror=U}),g.addEventListener("load",function(){d.loading|=1}),g.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Pi(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:d},n.set(i,r)}}}function yg(e,t){ca.X(e,t);var a=Ll;if(a&&e){var l=ul(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=E({src:e,async:!0},t),(t=Ot.get(n))&&Uc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function xg(e,t){ca.M(e,t);var a=Ll;if(a&&e){var l=ul(a).hoistableScripts,n=kl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Uc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Pd(e,t,a,l){var n=(n=te.current)?Ii(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Bl(a.href),a=ul(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bl(a.href);var i=ul(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Dn(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||Sg(n,e,a,r.state))),t&&l===null)throw Error(c(528,""));return r}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=kl(a),a=ul(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Bl(e){return'href="'+zt(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function em(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Sg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Ze(t),e.head.appendChild(t))}function kl(e){return'[src="'+zt(e)+'"]'}function Un(e){return"script[async]"+e}function tm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(l)return t.instance=l,Ze(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),et(l,"style",n),Pi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Bl(a.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;l=em(a),(n=Ot.get(n))&&Dc(l,n),i=(e.ownerDocument||e).createElement("link"),Ze(i);var r=i;return r._p=new Promise(function(d,g){r.onload=d,r.onerror=g}),et(i,"link",l),t.state.loading|=4,Pi(i,a.precedence,e),t.instance=i;case"script":return i=kl(a.src),(n=e.querySelector(Un(i)))?(t.instance=n,Ze(n),n):(l=a,(n=Ot.get(i))&&(l=E({},a),Uc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),et(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Pi(l,a.precedence,e));return t.instance}function Pi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var d=l[r];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Dc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eu=null;function am(e,t,a){if(eu===null){var l=new Map,n=eu=new Map;n.set(a,l)}else n=eu,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var d=l.get(r);d?d.push(i):l.set(r,[i])}}return l}function lm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function jg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Bl(l.href),i=t.querySelector(Dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ze(i);return}i=t.ownerDocument||t,l=em(l),(n=Ot.get(n))&&Dc(l,n),i=i.createElement("link"),Ze(i);var r=i;r._p=new Promise(function(d,g){r.onload=d,r.onerror=g}),et(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Hc=0;function zg(e,t){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Hc===0&&(Hc=62500*ng());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Hc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function lu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,t.forEach(Tg,e),au=null,tu.call(e))}function Tg(e,t){if(!(t.state.loading&4)){var a=au.get(e);if(a)var l=a.get(null);else{a=new Map,au.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=tu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Hn={$$typeof:X,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function wg(e,t,a,l,n,i,r,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.hiddenUpdates=_u(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function im(e,t,a,l,n,i,r,d,g,C,U,q){return e=new wg(e,t,a,r,g,C,U,q,d),t=1,i===!0&&(t|=24),i=gt(3,null,null,t),e.current=i,i.stateNode=e,t=hr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},yr(i),e}function um(e){return e?(e=gl,e):gl}function rm(e,t,a,l,n,i){n=um(n),l.context===null?l.context=n:l.pendingContext=n,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(ft(a,e,t),pn(a,e,t))}function cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lc(e,t){cm(e,t),(e=e.alternate)&&cm(e,t)}function om(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ft(t,e,67108864),Lc(e,67108864)}}function sm(e){if(e.tag===13||e.tag===31){var t=St();t=Ou(t);var a=Ga(e,t);a!==null&&ft(a,e,t),Lc(e,t)}}var nu=!0;function Ng(e,t,a,l){var n=D.T;D.T=null;var i=x.p;try{x.p=2,Bc(e,t,a,l)}finally{x.p=i,D.T=n}}function Cg(e,t,a,l){var n=D.T;D.T=null;var i=x.p;try{x.p=8,Bc(e,t,a,l)}finally{x.p=i,D.T=n}}function Bc(e,t,a,l){if(nu){var n=kc(l);if(n===null)zc(e,t,l,iu,a),dm(e,l);else if(Rg(n,e,t,a,l))l.stopPropagation();else if(dm(e,l),t&4&&-1<Ag.indexOf(e)){for(;n!==null;){var i=il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=La(i.pendingLanes);if(r!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;r;){var g=1<<31-pt(r);d.entanglements[1]|=g,r&=~g}Xt(i),(be&6)===0&&(qi=dt()+500,Rn(0))}}break;case 31:case 13:d=Ga(i,2),d!==null&&ft(d,i,2),Xi(),Lc(i,2)}if(i=kc(l),i===null&&zc(e,t,l,iu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else zc(e,t,l,null,a)}}function kc(e){return e=qu(e),Yc(e)}var iu=null;function Yc(e){if(iu=null,e=nl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return iu=e,null}function fm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pp()){case bo:return 2;case yo:return 8;case Kn:case hp:return 32;case xo:return 268435456;default:return 32}default:return 32}}var qc=!1,Ra=null,_a=null,Oa=null,Ln=new Map,Bn=new Map,Ma=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dm(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function kn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&om(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Rg(e,t,a,l,n){switch(t){case"focusin":return Ra=kn(Ra,e,t,a,l,n),!0;case"dragenter":return _a=kn(_a,e,t,a,l,n),!0;case"mouseover":return Oa=kn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Ln.set(i,kn(Ln.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Bn.set(i,kn(Bn.get(i)||null,e,t,a,l,n)),!0}return!1}function mm(e){var t=nl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,wo(e.priority,function(){sm(a)});return}}else if(t===31){if(t=z(a),t!==null){e.blockedOn=t,wo(e.priority,function(){sm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=kc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Yu=l,a.target.dispatchEvent(l),Yu=null}else return t=il(a),t!==null&&om(t),e.blockedOn=a,!1;t.shift()}return!0}function pm(e,t,a){uu(e)&&a.delete(t)}function _g(){qc=!1,Ra!==null&&uu(Ra)&&(Ra=null),_a!==null&&uu(_a)&&(_a=null),Oa!==null&&uu(Oa)&&(Oa=null),Ln.forEach(pm),Bn.forEach(pm)}function ru(e,t){e.blockedOn===t&&(e.blockedOn=null,qc||(qc=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,_g)))}var cu=null;function hm(e){cu!==e&&(cu=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Yc(l||a)===null)continue;break}var i=il(a);i!==null&&(e.splice(t,3),t-=3,kr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Yl(e){function t(g){return ru(g,e)}Ra!==null&&ru(Ra,e),_a!==null&&ru(_a,e),Oa!==null&&ru(Oa,e),Ln.forEach(t),Bn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)mm(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[it]||null;if(typeof i=="function")r||hm(a);else if(r){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[it]||null)d=r.formAction;else if(Yc(n)!==null)continue}else d=r.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),hm(a)}}}function gm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Gc(e){this._internalRoot=e}ou.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=St();rm(a,l,e,t,null,null)},ou.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rm(e.current,2,null,e,null,null),Xi(),t[ll]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=To();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&mm(e)}};var vm=o.version;if(vm!=="19.2.7")throw Error(c(527,vm,"19.2.7"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Og={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Jl=su.inject(Og),mt=su}catch{}}return qn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=zf,i=Tf,r=wf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=im(e,1,!1,null,null,a,l,null,n,i,r,gm),e[ll]=t.current,Ec(e),new Gc(t)},qn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=zf,r=Tf,d=wf,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=im(e,1,!0,t,a??null,l,n,g,i,r,d,gm),t.context=um(null),a=t.current,l=St(),l=Ou(l),n=ba(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,$l(t,a),Xt(t),e[ll]=t.current,Ec(e),new ou(t)},qn.version="19.2.7",qn}var Nm;function Gg(){if(Nm)return Vc.exports;Nm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(o){console.error(o)}}return u(),Vc.exports=qg(),Vc.exports}var Xg=Gg();var uo=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Bm=/^[\\/]{2}/;function Qg(u,o){return o+u.replace(/\\/g,"/")}var Cm="popstate";function Am(u){return typeof u=="object"&&u!=null&&"pathname"in u&&"search"in u&&"hash"in u&&"state"in u&&"key"in u}function Vg(u={}){function o(c,m){let p=m.state?.masked,{pathname:v,search:z,hash:b}=p||c.location;return eo("",{pathname:v,search:z,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function f(c,m){return typeof m=="string"?m:Xn(m)}return Jg(o,f,null,u)}function Oe(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function Mt(u,o){if(!u){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Zg(){return Math.random().toString(36).substring(2,10)}function Rm(u,o){return{usr:u.state,key:u.key,idx:o,masked:u.mask?{pathname:u.pathname,search:u.search,hash:u.hash}:void 0}}function eo(u,o,f=null,c,m){return{pathname:typeof u=="string"?u:u.pathname,search:"",hash:"",...typeof o=="string"?Xl(o):o,state:f,key:o&&o.key||c||Zg(),mask:m}}function Xn({pathname:u="/",search:o="",hash:f=""}){return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function Xl(u){let o={};if(u){let f=u.indexOf("#");f>=0&&(o.hash=u.substring(f),u=u.substring(0,f));let c=u.indexOf("?");c>=0&&(o.search=u.substring(c),u=u.substring(0,c)),u&&(o.pathname=u)}return o}function Jg(u,o,f,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,v=m.history,z="POP",b=null,h=w();h==null&&(h=0,v.replaceState({...v.state,idx:h},""));function w(){return(v.state||{idx:null}).idx}function E(){z="POP";let H=w(),J=H==null?null:H-h;h=H,b&&b({action:z,location:B.location,delta:J})}function A(H,J){z="PUSH";let L=Am(H)?H:eo(B.location,H,J);h=w()+1;let X=Rm(L,h),F=B.createHref(L.mask||L);try{v.pushState(X,"",F)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;m.location.assign(F)}p&&b&&b({action:z,location:B.location,delta:1})}function _(H,J){z="REPLACE";let L=Am(H)?H:eo(B.location,H,J);h=w();let X=Rm(L,h),F=B.createHref(L.mask||L);v.replaceState(X,"",F),p&&b&&b({action:z,location:B.location,delta:0})}function M(H){return Kg(m,H)}let B={get action(){return z},get location(){return u(m,v)},listen(H){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(Cm,E),b=H,()=>{m.removeEventListener(Cm,E),b=null}},createHref(H){return o(m,H)},createURL:M,encodeLocation(H){let J=M(H);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:A,replace:_,go(H){return v.go(H)}};return B}function Kg(u,o,f=!1){let c="http://localhost";u&&(c=u.location.origin!=="null"?u.location.origin:u.location.href),Oe(c,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:Xn(o);return m=m.replace(/ $/,"%20"),!f&&Bm.test(m)&&(m=c+m),new URL(m,c)}function km(u,o,f="/"){return $g(u,o,f,!1)}function $g(u,o,f,c,m){let p=typeof o=="string"?Xl(o):o,v=oa(p.pathname||"/",f);if(v==null)return null;let z=Wg(u),b=null,h=rv(v);for(let w=0;b==null&&w<z.length;++w)b=uv(z[w],h,c);return b}function Wg(u){let o=Ym(u);return Fg(o),o}function Ym(u,o=[],f=[],c="",m=!1){let p=(v,z,b=m,h)=>{let w={relativePath:h===void 0?v.path||"":h,caseSensitive:v.caseSensitive===!0,childrenIndex:z,route:v};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(c)&&b)return;Oe(w.relativePath.startsWith(c),`Absolute route path "${w.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(c.length)}let E=Lt([c,w.relativePath]),A=f.concat(w);v.children&&v.children.length>0&&(Oe(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Ym(v.children,o,A,E,b)),!(v.path==null&&!v.index)&&o.push({path:E,score:nv(E,v.index),routesMeta:A.map((_,M)=>{let[B,H]=Xm(_.relativePath,_.caseSensitive,M===A.length-1);return{..._,matcher:B,compiledParams:H}})})};return u.forEach((v,z)=>{if(v.path===""||!v.path?.includes("?"))p(v,z);else for(let b of qm(v.path))p(v,z,!0,b)}),o}function qm(u){let o=u.split("/");if(o.length===0)return[];let[f,...c]=o,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let v=qm(c.join("/")),z=[];return z.push(...v.map(b=>b===""?p:[p,b].join("/"))),m&&z.push(...v),z.map(b=>u.startsWith("/")&&b===""?"/":b)}function Fg(u){u.sort((o,f)=>o.score!==f.score?f.score-o.score:iv(o.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var Ig=/^:[\w-]+$/,Pg=3,ev=2,tv=1,av=10,lv=-2,_m=u=>u==="*";function nv(u,o){let f=u.split("/"),c=f.length;return f.some(_m)&&(c+=lv),o&&(c+=ev),f.filter(m=>!_m(m)).reduce((m,p)=>m+(Ig.test(p)?Pg:p===""?tv:av),c)}function iv(u,o){return u.length===o.length&&u.slice(0,-1).every((c,m)=>c===o[m])?u[u.length-1]-o[o.length-1]:0}function uv(u,o,f=!1){let{routesMeta:c}=u,m={},p="/",v=[];for(let z=0;z<c.length;++z){let b=c[z],h=z===c.length-1,w=p==="/"?o:o.slice(p.length)||"/",E={path:b.relativePath,caseSensitive:b.caseSensitive,end:h},A=b.matcher&&b.compiledParams?Gm(E,w,b.matcher,b.compiledParams):gu(E,w),_=b.route;if(!A&&h&&f&&!c[c.length-1].route.index&&(A=gu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},w)),!A)return null;Object.assign(m,A.params),v.push({params:m,pathname:Lt([p,A.pathname]),pathnameBase:sv(Lt([p,A.pathnameBase])),route:_}),A.pathnameBase!=="/"&&(p=Lt([p,A.pathnameBase]))}return v}function gu(u,o){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[f,c]=Xm(u.path,u.caseSensitive,u.end);return Gm(u,o,f,c)}function Gm(u,o,f,c){let m=o.match(f);if(!m)return null;let p=m[0],v=p.replace(/(.)\/+$/,"$1"),z=m.slice(1);return{params:c.reduce((h,{paramName:w,isOptional:E},A)=>{if(w==="*"){let M=z[A]||"";v=p.slice(0,p.length-M.length).replace(/(.)\/+$/,"$1")}const _=z[A];return E&&!_?h[w]=void 0:h[w]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:v,pattern:u}}function Xm(u,o=!1,f=!0){Mt(u==="*"||!u.endsWith("*")||u.endsWith("/*"),`Route path "${u}" will be treated as if it were "${u.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/,"/*")}".`);let c=[],m="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,z,b,h,w)=>{if(c.push({paramName:z,isOptional:b!=null}),b){let E=w.charAt(h+v.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return u.endsWith("*")?(c.push({paramName:"*"}),m+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":u!==""&&u!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),c]}function rv(u){try{return u.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Mt(!1,`The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),u}}function oa(u,o){if(o==="/")return u;if(!u.toLowerCase().startsWith(o.toLowerCase()))return null;let f=o.endsWith("/")?o.length-1:o.length,c=u.charAt(f);return c&&c!=="/"?null:u.slice(f)||"/"}function cv(u,o="/"){let{pathname:f,search:c="",hash:m=""}=typeof u=="string"?Xl(u):u,p;return f?(f=Qm(f),f.startsWith("/")?p=Om(f.substring(1),"/"):p=Om(f,o)):p=o,{pathname:p,search:fv(c),hash:dv(m)}}function Om(u,o){let f=vu(o).split("/");return u.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function $c(u,o,f,c){return`Cannot include a '${u}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ov(u){return u.filter((o,f)=>f===0||o.route.path&&o.route.path.length>0)}function ro(u){let o=ov(u);return o.map((f,c)=>c===o.length-1?f.pathname:f.pathnameBase)}function Su(u,o,f,c=!1){let m;typeof u=="string"?m=Xl(u):(m={...u},Oe(!m.pathname||!m.pathname.includes("?"),$c("?","pathname","search",m)),Oe(!m.pathname||!m.pathname.includes("#"),$c("#","pathname","hash",m)),Oe(!m.search||!m.search.includes("#"),$c("#","search","hash",m)));let p=u===""||m.pathname==="",v=p?"/":m.pathname,z;if(v==null)z=f;else{let E=o.length-1;if(!c&&v.startsWith("..")){let A=v.split("/");for(;A[0]==="..";)A.shift(),E-=1;m.pathname=A.join("/")}z=E>=0?o[E]:"/"}let b=cv(m,z),h=v&&v!=="/"&&v.endsWith("/"),w=(p||v===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(h||w)&&(b.pathname+="/"),b}var Qm=u=>u.replace(/[\\/]{2,}/g,"/"),Lt=u=>Qm(u.join("/")),vu=u=>u.replace(/\/+$/,""),sv=u=>vu(u).replace(/^\/*/,"/"),fv=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,dv=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u,mv=class{constructor(u,o,f,c=!1){this.status=u,this.statusText=o||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function pv(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}function hv(u){let o=u.map(f=>f.route.path).filter(Boolean);return Lt(o)||"/"}var Vm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zm(u,o){let f=u;if(typeof f!="string"||!uo.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,m=!1;if(Vm)try{let p=new URL(window.location.href),v=Bm.test(f)?new URL(Qg(f,p.protocol)):new URL(f),z=oa(v.pathname,o);v.origin===p.origin&&z!=null?f=z+v.search+v.hash:m=!0}catch{Mt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jm=["POST","PUT","PATCH","DELETE"];new Set(Jm);var gv=["GET",...Jm];new Set(gv);var vv=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function bv(u){try{return vv.includes(new URL(u).protocol)}catch{return!1}}var Ql=y.createContext(null);Ql.displayName="DataRouter";var ju=y.createContext(null);ju.displayName="DataRouterState";var Km=y.createContext(!1);function yv(){return y.useContext(Km)}var $m=y.createContext({isTransitioning:!1});$m.displayName="ViewTransition";var xv=y.createContext(new Map);xv.displayName="Fetchers";var Sv=y.createContext(null);Sv.displayName="Await";var jt=y.createContext(null);jt.displayName="Navigation";var Qn=y.createContext(null);Qn.displayName="Location";var Bt=y.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var co=y.createContext(null);co.displayName="RouteError";var Wm="REACT_ROUTER_ERROR",jv="REDIRECT",Ev="ROUTE_ERROR_RESPONSE";function zv(u){if(u.startsWith(`${Wm}:${jv}:{`))try{let o=JSON.parse(u.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Tv(u){if(u.startsWith(`${Wm}:${Ev}:{`))try{let o=JSON.parse(u.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new mv(o.status,o.statusText,o.data)}catch{}}function wv(u,{relative:o}={}){Oe(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=y.useContext(jt),{hash:m,pathname:p,search:v}=Vn(u,{relative:o}),z=p;return f!=="/"&&(z=p==="/"?f:Lt([f,p])),c.createHref({pathname:z,search:v,hash:m})}function Vl(){return y.useContext(Qn)!=null}function kt(){return Oe(Vl(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Qn).location}var Fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Im(u){y.useContext(jt).static||y.useLayoutEffect(u)}function oo(){let{isDataRoute:u}=y.useContext(Bt);return u?qv():Nv()}function Nv(){Oe(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let u=y.useContext(Ql),{basename:o,navigator:f}=y.useContext(jt),{matches:c}=y.useContext(Bt),{pathname:m}=kt(),p=JSON.stringify(ro(c)),v=y.useRef(!1);return Im(()=>{v.current=!0}),y.useCallback((b,h={})=>{if(Mt(v.current,Fm),!v.current)return;if(typeof b=="number"){f.go(b);return}let w=Su(b,JSON.parse(p),m,h.relative==="path");u==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:Lt([o,w.pathname])),(h.replace?f.replace:f.push)(w,h.state,h)},[o,f,p,m,u])}var Cv=y.createContext(null);function Av(u){let o=y.useContext(Bt).outlet;return y.useMemo(()=>o&&y.createElement(Cv.Provider,{value:u},o),[o,u])}function Vn(u,{relative:o}={}){let{matches:f}=y.useContext(Bt),{pathname:c}=kt(),m=JSON.stringify(ro(f));return y.useMemo(()=>Su(u,JSON.parse(m),c,o==="path"),[u,m,c,o])}function Rv(u,o){return Pm(u,o)}function Pm(u,o,f){Oe(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=y.useContext(jt),{matches:m}=y.useContext(Bt),p=m[m.length-1],v=p?p.params:{},z=p?p.pathname:"/",b=p?p.pathnameBase:"/",h=p&&p.route;{let H=h&&h.path||"";tp(z,!h||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${z}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let w=kt(),E;if(o){let H=typeof o=="string"?Xl(o):o;Oe(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),E=H}else E=w;let A=E.pathname||"/",_=A;if(b!=="/"){let H=b.replace(/^\//,"").split("/");_="/"+A.replace(/^\//,"").split("/").slice(H.length).join("/")}let M=f&&f.state.matches.length?f.state.matches.map(H=>Object.assign(H,{route:f.manifest[H.route.id]||H.route})):km(u,{pathname:_});Mt(h||M!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Mt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Uv(M&&M.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:Lt([b,c.encodeLocation?c.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:Lt([b,c.encodeLocation?c.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),m,f);return o&&B?y.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...E},navigationType:"POP"}},B):B}function _v(){let u=Yv(),o=pv(u)?`${u.status} ${u.statusText}`:u instanceof Error?u.message:JSON.stringify(u),f=u instanceof Error?u.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",u),v=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:p},"ErrorBoundary")," or"," ",y.createElement("code",{style:p},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},o),f?y.createElement("pre",{style:m},f):null,v)}var Ov=y.createElement(_v,null),ep=class extends y.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){this.props.onError?this.props.onError(u,o):console.error("React Router caught the following error during render",u)}render(){let u=this.state.error;if(this.context&&typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){const f=Tv(u.digest);f&&(u=f)}let o=u!==void 0?y.createElement(Bt.Provider,{value:this.props.routeContext},y.createElement(co.Provider,{value:u,children:this.props.component})):this.props.children;return this.context?y.createElement(Mv,{error:u},o):o}};ep.contextType=Km;var Wc=new WeakMap;function Mv({children:u,error:o}){let{basename:f}=y.useContext(jt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=zv(o.digest);if(c){let m=Wc.get(o);if(m)throw m;let p=Zm(c.location,f),v=p.absoluteURL||p.to;if(bv(v))throw new Error("Invalid redirect location");if(Vm&&!Wc.get(o))if(p.isExternal||c.reloadDocument)window.location.href=v;else{const z=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Wc.set(o,z),z}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${v}`})}}return u}function Dv({routeContext:u,match:o,children:f}){let c=y.useContext(Ql);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),y.createElement(Bt.Provider,{value:u},f)}function Uv(u,o=[],f){let c=f?.state;if(u==null){if(!c)return null;if(c.errors)u=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)u=c.matches;else return null}let m=u,p=c?.errors;if(p!=null){let w=m.findIndex(E=>E.route.id&&p?.[E.route.id]!==void 0);Oe(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,w+1))}let v=!1,z=-1;if(f&&c){v=c.renderFallback;for(let w=0;w<m.length;w++){let E=m[w];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(z=w),E.route.id){let{loaderData:A,errors:_}=c,M=E.route.loader&&!A.hasOwnProperty(E.route.id)&&(!_||_[E.route.id]===void 0);if(E.route.lazy||M){f.isStatic&&(v=!0),z>=0?m=m.slice(0,z+1):m=[m[0]];break}}}}let b=f?.onError,h=c&&b?(w,E)=>{b(w,{location:c.location,params:c.matches?.[0]?.params??{},pattern:hv(c.matches),errorInfo:E})}:void 0;return m.reduceRight((w,E,A)=>{let _,M=!1,B=null,H=null;c&&(_=p&&E.route.id?p[E.route.id]:void 0,B=E.route.errorElement||Ov,v&&(z<0&&A===0?(tp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,H=null):z===A&&(M=!0,H=E.route.hydrateFallbackElement||null)));let J=o.concat(m.slice(0,A+1)),L=()=>{let X;return _?X=B:M?X=H:E.route.Component?X=y.createElement(E.route.Component,null):E.route.element?X=E.route.element:X=w,y.createElement(Dv,{match:E,routeContext:{outlet:w,matches:J,isDataRoute:c!=null},children:X})};return c&&(E.route.ErrorBoundary||E.route.errorElement||A===0)?y.createElement(ep,{location:c.location,revalidation:c.revalidation,component:B,error:_,children:L(),routeContext:{outlet:null,matches:J,isDataRoute:!0},onError:h}):L()},null)}function so(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hv(u){let o=y.useContext(Ql);return Oe(o,so(u)),o}function Lv(u){let o=y.useContext(ju);return Oe(o,so(u)),o}function Bv(u){let o=y.useContext(Bt);return Oe(o,so(u)),o}function fo(u){let o=Bv(u),f=o.matches[o.matches.length-1];return Oe(f.route.id,`${u} can only be used on routes that contain a unique "id"`),f.route.id}function kv(){return fo("useRouteId")}function Yv(){let u=y.useContext(co),o=Lv("useRouteError"),f=fo("useRouteError");return u!==void 0?u:o.errors?.[f]}function qv(){let{router:u}=Hv("useNavigate"),o=fo("useNavigate"),f=y.useRef(!1);return Im(()=>{f.current=!0}),y.useCallback(async(m,p={})=>{Mt(f.current,Fm),f.current&&(typeof m=="number"?await u.navigate(m):await u.navigate(m,{fromRouteId:o,...p}))},[u,o])}var Mm={};function tp(u,o,f){!o&&!Mm[u]&&(Mm[u]=!0,Mt(!1,f))}y.memo(Gv);function Gv({routes:u,manifest:o,future:f,state:c,isStatic:m,onError:p}){return Pm(u,void 0,{manifest:o,state:c,isStatic:m,onError:p})}function Xv({to:u,replace:o,state:f,relative:c}){Oe(Vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=y.useContext(jt);Mt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=y.useContext(Bt),{pathname:v}=kt(),z=oo(),b=Su(u,ro(p),v,c==="path"),h=JSON.stringify(b);return y.useEffect(()=>{z(JSON.parse(h),{replace:o,state:f,relative:c})},[z,h,c,o,f]),null}function Qv(u){return Av(u.context)}function Ua(u){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vv({basename:u="/",children:o=null,location:f,navigationType:c="POP",navigator:m,static:p=!1,useTransitions:v}){Oe(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=u.replace(/^\/*/,"/"),b=y.useMemo(()=>({basename:z,navigator:m,static:p,useTransitions:v,future:{}}),[z,m,p,v]);typeof f=="string"&&(f=Xl(f));let{pathname:h="/",search:w="",hash:E="",state:A=null,key:_="default",mask:M}=f,B=y.useMemo(()=>{let H=oa(h,z);return H==null?null:{location:{pathname:H,search:w,hash:E,state:A,key:_,mask:M},navigationType:c}},[z,h,w,E,A,_,c,M]);return Mt(B!=null,`<Router basename="${z}"> is not able to match the URL "${h}${w}${E}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:y.createElement(jt.Provider,{value:b},y.createElement(Qn.Provider,{children:o,value:B}))}function Zv({children:u,location:o}){return Rv(to(u),o)}function to(u,o=[]){let f=[];return y.Children.forEach(u,(c,m)=>{if(!y.isValidElement(c))return;let p=[...o,m];if(c.type===y.Fragment){f.push.apply(f,to(c.props.children,p));return}Oe(c.type===Ua,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let v={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(v.children=to(c.props.children,p)),f.push(v)}),f}var pu="get",hu="application/x-www-form-urlencoded";function Eu(u){return typeof HTMLElement<"u"&&u instanceof HTMLElement}function Jv(u){return Eu(u)&&u.tagName.toLowerCase()==="button"}function Kv(u){return Eu(u)&&u.tagName.toLowerCase()==="form"}function $v(u){return Eu(u)&&u.tagName.toLowerCase()==="input"}function Wv(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Fv(u,o){return u.button===0&&(!o||o==="_self")&&!Wv(u)}function ao(u=""){return new URLSearchParams(typeof u=="string"||Array.isArray(u)||u instanceof URLSearchParams?u:Object.keys(u).reduce((o,f)=>{let c=u[f];return o.concat(Array.isArray(c)?c.map(m=>[f,m]):[[f,c]])},[]))}function Iv(u,o){let f=ao(u);return o&&o.forEach((c,m)=>{f.has(m)||o.getAll(m).forEach(p=>{f.append(m,p)})}),f}var fu=null;function Pv(){if(fu===null)try{new FormData(document.createElement("form"),0),fu=!1}catch{fu=!0}return fu}var e0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fc(u){return u!=null&&!e0.has(u)?(Mt(!1,`"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):u}function t0(u,o){let f,c,m,p,v;if(Kv(u)){let z=u.getAttribute("action");c=z?oa(z,o):null,f=u.getAttribute("method")||pu,m=Fc(u.getAttribute("enctype"))||hu,p=new FormData(u)}else if(Jv(u)||$v(u)&&(u.type==="submit"||u.type==="image")){let z=u.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=u.getAttribute("formaction")||z.getAttribute("action");if(c=b?oa(b,o):null,f=u.getAttribute("formmethod")||z.getAttribute("method")||pu,m=Fc(u.getAttribute("formenctype"))||Fc(z.getAttribute("enctype"))||hu,p=new FormData(z,u),!Pv()){let{name:h,type:w,value:E}=u;if(w==="image"){let A=h?`${h}.`:"";p.append(`${A}x`,"0"),p.append(`${A}y`,"0")}else h&&p.append(h,E)}}else{if(Eu(u))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=pu,c=null,m=hu,v=u}return p&&m==="text/plain"&&(v=p,p=void 0),{action:c,method:f.toLowerCase(),encType:m,formData:p,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mo(u,o){if(u===!1||u===null||typeof u>"u")throw new Error(o)}function ap(u,o,f,c){let m=typeof u=="string"?new URL(u,typeof window>"u"?"server://singlefetch/":window.location.origin):u;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:o&&oa(m.pathname,o)==="/"?m.pathname=`${vu(o)}/_root.${c}`:m.pathname=`${vu(m.pathname)}.${c}`,m}async function a0(u,o){if(u.id in o)return o[u.id];try{let f=await import(u.module);return o[u.id]=f,f}catch(f){return console.error(`Error loading route module \`${u.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function l0(u){return u==null?!1:u.href==null?u.rel==="preload"&&typeof u.imageSrcSet=="string"&&typeof u.imageSizes=="string":typeof u.rel=="string"&&typeof u.href=="string"}async function n0(u,o,f){let c=await Promise.all(u.map(async m=>{let p=o.routes[m.route.id];if(p){let v=await a0(p,f);return v.links?v.links():[]}return[]}));return c0(c.flat(1).filter(l0).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Dm(u,o,f,c,m,p){let v=(b,h)=>f[h]?b.route.id!==f[h].route.id:!0,z=(b,h)=>f[h].pathname!==b.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==b.params["*"];return p==="assets"?o.filter((b,h)=>v(b,h)||z(b,h)):p==="data"?o.filter((b,h)=>{let w=c.routes[b.route.id];if(!w||!w.hasLoader)return!1;if(v(b,h)||z(b,h))return!0;if(b.route.shouldRevalidate){let E=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(u,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function i0(u,o,{includeHydrateFallback:f}={}){return u0(u.map(c=>{let m=o.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function u0(u){return[...new Set(u)]}function r0(u){let o={},f=Object.keys(u).sort();for(let c of f)o[c]=u[c];return o}function c0(u,o){let f=new Set;return new Set(o),u.reduce((c,m)=>{let p=JSON.stringify(r0(m));return f.has(p)||(f.add(p),c.push({key:p,link:m})),c},[])}function po(){let u=y.useContext(Ql);return mo(u,"You must render this element inside a <DataRouterContext.Provider> element"),u}function o0(){let u=y.useContext(ju);return mo(u,"You must render this element inside a <DataRouterStateContext.Provider> element"),u}var ho=y.createContext(void 0);ho.displayName="FrameworkContext";function zu(){let u=y.useContext(ho);return mo(u,"You must render this element inside a <HydratedRouter> element"),u}function s0(u,o){let f=y.useContext(ho),[c,m]=y.useState(!1),[p,v]=y.useState(!1),{onFocus:z,onBlur:b,onMouseEnter:h,onMouseLeave:w,onTouchStart:E}=o,A=y.useRef(null);y.useEffect(()=>{if(u==="render"&&v(!0),u==="viewport"){let B=J=>{J.forEach(L=>{v(L.isIntersecting)})},H=new IntersectionObserver(B,{threshold:.5});return A.current&&H.observe(A.current),()=>{H.disconnect()}}},[u]),y.useEffect(()=>{if(c){let B=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(B)}}},[c]);let _=()=>{m(!0)},M=()=>{m(!1),v(!1)};return f?u!=="intent"?[p,A,{}]:[p,A,{onFocus:Gn(z,_),onBlur:Gn(b,M),onMouseEnter:Gn(h,_),onMouseLeave:Gn(w,M),onTouchStart:Gn(E,_)}]:[!1,A,{}]}function Gn(u,o){return f=>{u&&u(f),f.defaultPrevented||o(f)}}function f0({page:u,...o}){let f=yv(),{nonce:c}=zu(),{router:m}=po(),p=y.useMemo(()=>km(m.routes,u,m.basename),[m.routes,u,m.basename]);return p?(o.nonce==null&&c&&(o={...o,nonce:c}),f?y.createElement(m0,{page:u,matches:p,...o}):y.createElement(p0,{page:u,matches:p,...o})):null}function d0(u){let{manifest:o,routeModules:f}=zu(),[c,m]=y.useState([]);return y.useEffect(()=>{let p=!1;return n0(u,o,f).then(v=>{p||m(v)}),()=>{p=!0}},[u,o,f]),c}function m0({page:u,matches:o,...f}){let c=kt(),{future:m}=zu(),{basename:p}=po(),v=y.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let z=ap(u,p,m.v8_trailingSlashAwareDataRequests,"rsc"),b=!1,h=[];for(let w of o)typeof w.route.shouldRevalidate=="function"?b=!0:h.push(w.route.id);return b&&h.length>0&&z.searchParams.set("_routes",h.join(",")),[z.pathname+z.search]},[p,m.v8_trailingSlashAwareDataRequests,u,c,o]);return y.createElement(y.Fragment,null,v.map(z=>y.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...f})))}function p0({page:u,matches:o,...f}){let c=kt(),{future:m,manifest:p,routeModules:v}=zu(),{basename:z}=po(),{loaderData:b,matches:h}=o0(),w=y.useMemo(()=>Dm(u,o,h,p,c,"data"),[u,o,h,p,c]),E=y.useMemo(()=>Dm(u,o,h,p,c,"assets"),[u,o,h,p,c]),A=y.useMemo(()=>{if(u===c.pathname+c.search+c.hash)return[];let B=new Set,H=!1;if(o.forEach(L=>{let X=p.routes[L.route.id];!X||!X.hasLoader||(!w.some(F=>F.route.id===L.route.id)&&L.route.id in b&&v[L.route.id]?.shouldRevalidate||X.hasClientLoader?H=!0:B.add(L.route.id))}),B.size===0)return[];let J=ap(u,z,m.v8_trailingSlashAwareDataRequests,"data");return H&&B.size>0&&J.searchParams.set("_routes",o.filter(L=>B.has(L.route.id)).map(L=>L.route.id).join(",")),[J.pathname+J.search]},[z,m.v8_trailingSlashAwareDataRequests,b,c,p,w,o,u,v]),_=y.useMemo(()=>i0(E,p),[E,p]),M=d0(E);return y.createElement(y.Fragment,null,A.map(B=>y.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...f})),_.map(B=>y.createElement("link",{key:B,rel:"modulepreload",href:B,...f})),M.map(({key:B,link:H})=>y.createElement("link",{key:B,nonce:f.nonce,...H,crossOrigin:H.crossOrigin??f.crossOrigin})))}function h0(...u){return o=>{u.forEach(f=>{typeof f=="function"?f(o):f!=null&&(f.current=o)})}}var g0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{g0&&(window.__reactRouterVersion="7.18.1")}catch{}function v0({basename:u,children:o,useTransitions:f,window:c}){let m=y.useRef();m.current==null&&(m.current=Vg({window:c,v5Compat:!0}));let p=m.current,[v,z]=y.useState({action:p.action,location:p.location}),b=y.useCallback(h=>{f===!1?z(h):y.startTransition(()=>z(h))},[f]);return y.useLayoutEffect(()=>p.listen(b),[p,b]),y.createElement(Vv,{basename:u,children:o,location:v.location,navigationType:v.action,navigator:p,useTransitions:f})}var bu=y.forwardRef(function({onClick:o,discover:f="render",prefetch:c="none",relative:m,reloadDocument:p,replace:v,mask:z,state:b,target:h,to:w,preventScrollReset:E,viewTransition:A,defaultShouldRevalidate:_,...M},B){let{basename:H,navigator:J,useTransitions:L}=y.useContext(jt),X=typeof w=="string"&&uo.test(w),F=Zm(w,H);w=F.to;let ee=wv(w,{relative:m}),Q=kt(),G=null;if(z){let Re=Su(z,[],Q.mask?Q.mask.pathname:"/",!0);H!=="/"&&(Re.pathname=Re.pathname==="/"?H:Lt([H,Re.pathname])),G=J.createHref(Re)}let[re,pe,ye]=s0(c,M),Ve=x0(w,{replace:v,mask:z,state:b,target:h,preventScrollReset:E,relative:m,viewTransition:A,defaultShouldRevalidate:_,useTransitions:L});function Ae(Re){o&&o(Re),Re.defaultPrevented||Ve(Re)}let at=!(F.isExternal||p),ke=y.createElement("a",{...M,...ye,href:(at?G:void 0)||F.absoluteURL||ee,onClick:at?Ae:o,ref:h0(B,pe),target:h,"data-discover":!X&&f==="render"?"true":void 0});return re&&!X?y.createElement(y.Fragment,null,ke,y.createElement(f0,{page:ee})):ke});bu.displayName="Link";var lp=y.forwardRef(function({"aria-current":o="page",caseSensitive:f=!1,className:c="",end:m=!1,style:p,to:v,viewTransition:z,children:b,...h},w){let E=Vn(v,{relative:h.relative}),A=kt(),_=y.useContext(ju),{navigator:M,basename:B}=y.useContext(jt),H=_!=null&&w0(E)&&z===!0,J=M.encodeLocation?M.encodeLocation(E).pathname:E.pathname,L=A.pathname,X=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;f||(L=L.toLowerCase(),X=X?X.toLowerCase():null,J=J.toLowerCase()),X&&B&&(X=oa(X,B)||X);const F=J!=="/"&&J.endsWith("/")?J.length-1:J.length;let ee=L===J||!m&&L.startsWith(J)&&L.charAt(F)==="/",Q=X!=null&&(X===J||!m&&X.startsWith(J)&&X.charAt(J.length)==="/"),G={isActive:ee,isPending:Q,isTransitioning:H},re=ee?o:void 0,pe;typeof c=="function"?pe=c(G):pe=[c,ee?"active":null,Q?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ye=typeof p=="function"?p(G):p;return y.createElement(bu,{...h,"aria-current":re,className:pe,ref:w,style:ye,to:v,viewTransition:z},typeof b=="function"?b(G):b)});lp.displayName="NavLink";var b0=y.forwardRef(({discover:u="render",fetcherKey:o,navigate:f,reloadDocument:c,replace:m,state:p,method:v=pu,action:z,onSubmit:b,relative:h,preventScrollReset:w,viewTransition:E,defaultShouldRevalidate:A,..._},M)=>{let{useTransitions:B}=y.useContext(jt),H=z0(),J=T0(z,{relative:h}),L=v.toLowerCase()==="get"?"get":"post",X=typeof z=="string"&&uo.test(z),F=ee=>{if(b&&b(ee),ee.defaultPrevented)return;ee.preventDefault();let Q=ee.nativeEvent.submitter,G=Q?.getAttribute("formmethod")||v,re=()=>H(Q||ee.currentTarget,{fetcherKey:o,method:G,navigate:f,replace:m,state:p,relative:h,preventScrollReset:w,viewTransition:E,defaultShouldRevalidate:A});B&&f!==!1?y.startTransition(()=>re()):re()};return y.createElement("form",{ref:M,method:L,action:J,onSubmit:c?b:F,..._,"data-discover":!X&&u==="render"?"true":void 0})});b0.displayName="Form";function y0(u){return`${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function np(u){let o=y.useContext(Ql);return Oe(o,y0(u)),o}function x0(u,{target:o,replace:f,mask:c,state:m,preventScrollReset:p,relative:v,viewTransition:z,defaultShouldRevalidate:b,useTransitions:h}={}){let w=oo(),E=kt(),A=Vn(u,{relative:v});return y.useCallback(_=>{if(Fv(_,o)){_.preventDefault();let M=f!==void 0?f:Xn(E)===Xn(A),B=()=>w(u,{replace:M,mask:c,state:m,preventScrollReset:p,relative:v,viewTransition:z,defaultShouldRevalidate:b});h?y.startTransition(()=>B()):B()}},[E,w,A,f,c,m,o,u,p,v,z,b,h])}function S0(u){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=y.useRef(ao(u)),f=y.useRef(!1),c=kt(),m=y.useMemo(()=>Iv(c.search,f.current?null:o.current),[c.search]),p=oo(),v=y.useCallback((z,b)=>{const h=ao(typeof z=="function"?z(new URLSearchParams(m)):z);f.current=!0,p("?"+h,b)},[p,m]);return[m,v]}var j0=0,E0=()=>`__${String(++j0)}__`;function z0(){let{router:u}=np("useSubmit"),{basename:o}=y.useContext(jt),f=kv(),c=u.fetch,m=u.navigate;return y.useCallback(async(p,v={})=>{let{action:z,method:b,encType:h,formData:w,body:E}=t0(p,o);if(v.navigate===!1){let A=v.fetcherKey||E0();await c(A,f,v.action||z,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:w,body:E,formMethod:v.method||b,formEncType:v.encType||h,flushSync:v.flushSync})}else await m(v.action||z,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:w,body:E,formMethod:v.method||b,formEncType:v.encType||h,replace:v.replace,state:v.state,fromRouteId:f,flushSync:v.flushSync,viewTransition:v.viewTransition})},[c,m,o,f])}function T0(u,{relative:o}={}){let{basename:f}=y.useContext(jt),c=y.useContext(Bt);Oe(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Vn(u||".",{relative:o})},v=kt();if(u==null){p.search=v.search;let z=new URLSearchParams(p.search),b=z.getAll("index");if(b.some(w=>w==="")){z.delete("index"),b.filter(E=>E).forEach(E=>z.append("index",E));let w=z.toString();p.search=w?`?${w}`:""}}return(!u||u===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Lt([f,p.pathname])),Xn(p)}function w0(u,{relative:o}={}){let f=y.useContext($m);Oe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=np("useViewTransitionState"),m=Vn(u,{relative:o});if(!f.isTransitioning)return!1;let p=oa(f.currentLocation.pathname,c)||f.currentLocation.pathname,v=oa(f.nextLocation.pathname,c)||f.nextLocation.pathname;return gu(m.pathname,v)!=null||gu(m.pathname,p)!=null}function N0(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"10",cy:"7",r:"3.25",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function C0(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"6",width:"14",height:"10",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 6V5a3 3 0 0 1 6 0v1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function lo(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"4",y:"3",width:"12",height:"14",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 7.5h6M7 10.5h6M7 13.5h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function A0(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"3",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})}function R0(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M5 4.5h10M5 8.5h7M5 12.5h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M14 12.5l2 2 3.5-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function _0(){return s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5",fill:"url(#logo-grad)"}),s.jsx("path",{d:"M8 15V9l4 3 4-3v6",stroke:"#fff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"logo-grad",x1:"3",y1:"3",x2:"21",y2:"21",children:[s.jsx("stop",{stopColor:"#818cf8"}),s.jsx("stop",{offset:"1",stopColor:"#6366f1"})]})})]})}function O0(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M3.5 8.5l3 3 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function M0(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M8 5v3.5M8 11h.01",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function D0(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}function U0(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 2.5h5l3.5 3.5V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M9 2.5V6h3.5",stroke:"currentColor",strokeWidth:"1.25"})]})}function H0(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M6 3.5h6.5V10M9.5 6.5L3 13",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}const L0=[{to:"/profile",label:"Profile",icon:N0},{to:"/jobs",label:"Jobs",icon:C0},{to:"/applications",label:"Applications",icon:lo},{to:"/templates",label:"Templates",icon:A0},{to:"/review",label:"Review",icon:R0}];function B0(){return s.jsxs("aside",{className:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs("div",{className:"sidebar-brand",children:[s.jsx(_0,{}),s.jsxs("div",{className:"sidebar-brand-text",children:[s.jsx("span",{className:"sidebar-brand-name",children:"Joblication"}),s.jsx("span",{className:"sidebar-brand-tag",children:"Application studio"})]})]})}),s.jsxs("nav",{className:"sidebar-nav","aria-label":"Main navigation",children:[s.jsx("p",{className:"sidebar-nav-label",children:"Workspace"}),L0.map(u=>s.jsxs(lp,{to:u.to,className:({isActive:o})=>`sidebar-link ${o?"active":""}`,children:[s.jsx("span",{className:"sidebar-link-icon",children:s.jsx(u.icon,{})}),s.jsx("span",{className:"sidebar-link-label",children:u.label})]},u.to))]}),s.jsx("div",{className:"sidebar-footer",children:s.jsx("p",{children:"Tailored CVs & cover letters"})})]})}function k0(){return s.jsxs("div",{className:"app-shell",children:[s.jsx(B0,{}),s.jsx("main",{className:"app-main",children:s.jsx(Qv,{})})]})}const tl={"Content-Type":"application/json"};async function Be(u,o={}){const f=await fetch(u,o),c=await f.json().catch(()=>({}));if(!f.ok)throw new Error(c.error||`Request failed (${f.status})`);return c}const Ce={health:()=>Be("/api/health"),config:()=>Be("/api/config"),getProfile:()=>Be("/api/profile"),saveProfile:u=>Be("/api/profile",{method:"PUT",headers:tl,body:JSON.stringify({profile:u})}),listJobs:()=>Be("/api/applications"),getJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`),createJob:u=>Be("/api/applications",{method:"POST",headers:tl,body:JSON.stringify(u)}),updateJob:(u,o)=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),deleteJob:u=>Be(`/api/applications/${encodeURIComponent(u)}`,{method:"DELETE"}),scrapeUrl:u=>Be("/api/applications/scrape",{method:"POST",headers:tl,body:JSON.stringify({url:u})}),listApplications:()=>Be("/api/applications/view"),listOutputs:()=>Be("/api/outputs"),fileUrl:(u,o)=>`/api/files/${encodeURIComponent(u)}/${encodeURIComponent(o)}`,getReview:u=>Be(`/api/review/${encodeURIComponent(u)}`),saveReview:(u,o)=>Be(`/api/review/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),rebuild:u=>Be(`/api/build/${encodeURIComponent(u)}`,{method:"POST"}),listTemplates:()=>Be("/api/templates"),getTemplate:u=>Be(`/api/templates/${encodeURIComponent(u)}`),saveTemplate:(u,o)=>Be(`/api/templates/${encodeURIComponent(u)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),createTemplate:u=>Be("/api/templates",{method:"POST",headers:tl,body:JSON.stringify(u)}),generateStatus:()=>Be("/api/generate/status"),startGenerate:()=>Be("/api/generate",{method:"POST"})},ip=y.createContext(null);function Y0({children:u}){const[o,f]=y.useState(null),c=y.useRef(null),m=y.useCallback((v,z="success")=>{clearTimeout(c.current),f({message:v,type:z}),c.current=setTimeout(()=>f(null),3800)},[]),p=y.useMemo(()=>({showToast:m}),[m]);return s.jsxs(ip.Provider,{value:p,children:[u,o&&s.jsxs("div",{className:`toast show ${o.type}`,role:"status","aria-live":"polite",children:[s.jsx("span",{className:"toast-icon",children:o.type==="error"?s.jsx(M0,{}):s.jsx(O0,{})}),s.jsx("span",{className:"toast-message",children:o.message})]})]})}function Zn(){const u=y.useContext(ip);if(!u)throw new Error("useToast must be used within ToastProvider");return u}function up({label:u="Loading…"}){return s.jsxs("div",{className:"page-loading",children:[s.jsx("div",{className:"page-loading-spinner"}),s.jsx("p",{children:u})]})}function Um({icon:u,title:o,description:f,action:c}){return s.jsxs("div",{className:"empty-state",children:[u&&s.jsx("div",{className:"empty-state-icon",children:s.jsx(u,{})}),s.jsx("h3",{children:o}),f&&s.jsx("p",{children:f}),c]})}function al(u){return u.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,o=>o.toUpperCase())}function q0(u){return u.includes("email")?"email":u.includes("phone")?"tel":u==="url"||u.includes("portfolio")||u.includes("github")||u.includes("linkedin")?"url":u.includes("Date")||u==="date"?"date":"text"}function $e({id:u,label:o,value:f,onChange:c,type:m,multiline:p,rows:v=4,hint:z,onKeyDown:b}){const h=u||o.replace(/\s+/g,"_").toLowerCase(),w=m||q0(h),E=!!f;return p?s.jsxs("div",{className:`md-field ${E?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:o}),s.jsx("textarea",{id:h,className:"md-input md-textarea",rows:v,value:f??"",onChange:A=>c(A.target.value),onKeyDown:b}),z&&s.jsx("span",{className:"md-hint",children:z})]}):s.jsxs("div",{className:`md-field ${E?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:o}),s.jsx("input",{id:h,className:"md-input",type:w,value:f??"",onChange:A=>c(A.target.value)}),z&&s.jsx("span",{className:"md-hint",children:z})]})}function rp({children:u,columns:o=2}){return s.jsx("div",{className:`md-grid md-grid-${o}`,children:u})}const G0=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],X0=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],Q0=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],V0=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],Z0=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],J0=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],K0={contact:{type:"object",fields:G0},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:X0,singular:"education"},experience:{type:"entities",fields:Q0,singular:"experience"},projects:{type:"entities",fields:V0,singular:"project"},certifications:{type:"entities",fields:Z0,singular:"certification"},achievements:{type:"entities",fields:J0,singular:"achievement"}};function $0(u){return K0[u]||{type:"dynamic"}}function yu(u){return u&&typeof u=="object"&&!Array.isArray(u)}function W0(u){if(typeof u=="string"||!yu(u))return"text";const o=Object.values(u);return!o.length||o.every(f=>typeof f=="string")?"keyValue":o.every(f=>yu(f))?"entities":"keyValue"}function cp({fields:u,value:o,onChange:f}){const c=o||{};return s.jsx(rp,{children:u.map(m=>s.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:s.jsx($e,{id:m.key,label:m.label,value:c[m.key],multiline:m.multiline,rows:m.rows,onChange:p=>f({...c,[m.key]:p})})},m.key))})}function F0(u){const o=Object.entries(u||{});return o.sort((f,c)=>{const m=parseInt(String(f[0]).split("_").pop(),10)||0,p=parseInt(String(c[0]).split("_").pop(),10)||0;return m-p}),o.map(([,f])=>f)}function Ic(u){const o={};return u.forEach((f,c)=>{o[`title_${c+1}`]=f}),o}function I0({value:u,onChange:o}){const f=F0(u);function c(v,z){const b=[...f];b[v]=z,o(Ic(b))}function m(v){o(Ic(f.filter((z,b)=>b!==v)))}function p(){o(Ic([...f,""]))}return s.jsxs("div",{className:"md-title-list",children:[f.map((v,z)=>s.jsxs("div",{className:"md-title-row",children:[s.jsx($e,{id:`title_text_${z}`,label:"Title text",value:v,onChange:b=>c(z,b)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(z),"aria-label":"Remove title",children:"✕"})]},`title-${z}`)),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:p,children:"+ Add title"})]})}function op({value:u,onChange:o,keyLabel:f="Key",valueLabel:c="Value",valueOptional:m,stacked:p}){const v=Object.entries(u||{});function z(E,A,_){const M={...u||{}};delete M[E],A.trim()&&(M[A.trim()]=_),o(M)}function b(E,A){o({...u||{},[E]:A})}function h(E){const A={...u||{}};delete A[E],o(A)}function w(){const E=f.toLowerCase().replace(/\s+/g,"_");let A=v.length+1,_=`${E}_${A}`;for(;(u||{})[_];)A+=1,_=`${E}_${A}`;o({...u||{},[_]:""})}return s.jsxs("div",{className:"md-kv-list",children:[v.map(([E,A])=>s.jsx("div",{className:`md-kv-row ${p?"md-kv-row-stacked":""}`,children:p?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"md-kv-stacked-fields",children:[s.jsx($e,{label:f,value:E,onChange:_=>z(E,_,A)}),s.jsx($e,{label:c,value:A,onChange:_=>b(E,_),multiline:!0,rows:2})]}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(E),"aria-label":"Remove",children:"✕"})]}):s.jsxs(s.Fragment,{children:[s.jsx($e,{label:f,value:E,onChange:_=>z(E,_,A)}),!m&&s.jsx($e,{label:c,value:A,onChange:_=>b(E,_),multiline:String(A).length>60,rows:2}),m&&s.jsx($e,{label:c,value:A,onChange:_=>b(E,_),hint:"Optional"}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(E),"aria-label":"Remove",children:"✕"})]})},E)),s.jsxs("button",{type:"button",className:"md-text-btn",onClick:w,children:["+ Add ",f.toLowerCase()]})]})}function sp({value:u,onChange:o,fields:f,singular:c,sectionKey:m}){const p=Object.entries(u||{}),v=c||m.replace(/s$/,"");function z(h){const w={...u||{}};delete w[h],o(w)}function b(){const h=Object.keys(u||{}).map(_=>parseInt(_.split("_").pop(),10)).filter(_=>!Number.isNaN(_)),w=h.length?Math.max(...h)+1:1,E=`${v}_${w}`,A=f.reduce((_,M)=>({..._,[M.key]:""}),{});o({...u||{},[E]:A})}return s.jsxs("div",{className:"md-entity-list",children:[p.map(([h,w])=>s.jsxs("article",{className:"md-card",children:[s.jsxs("header",{className:"md-card-header",children:[s.jsx("h3",{children:w.name||w.degree||w.company||w.position||al(h)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>z(h),"aria-label":"Remove entry",children:"✕"})]}),s.jsx(cp,{fields:f,value:w,onChange:E=>o({...u||{},[h]:E})})]},h)),s.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:b,children:["+ Add ",al(c||m)]})]})}function P0({sectionKey:u,value:o,onChange:f}){const c=W0(o);if(c==="text")return s.jsx($e,{label:al(u),value:typeof o=="string"?o:JSON.stringify(o,null,2),onChange:f,multiline:!0,rows:8});if(c==="keyValue")return s.jsx(op,{value:yu(o)?o:{},onChange:f,keyLabel:"Item",valueLabel:"Value"});if(c==="entities"){const m=Object.values(o||{}).find(yu)||{},p=Object.keys(m).map(v=>({key:v,label:al(v),multiline:v==="description"||String(m[v]).length>80,rows:4}));return s.jsx(sp,{sectionKey:u,value:o,onChange:f,fields:p.length?p:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:u.replace(/s$/,"")})}return s.jsx($e,{label:al(u),value:JSON.stringify(o,null,2),onChange:()=>{},multiline:!0,rows:10})}function eb({sectionKey:u,value:o,onChange:f}){const c=$0(u);return c.type==="text"?s.jsx($e,{label:c.label||al(u),value:typeof o=="string"?o:"",onChange:f,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):c.type==="object"?s.jsx(cp,{fields:c.fields,value:o,onChange:f}):c.type==="titles"?s.jsx(I0,{value:o,onChange:f}):c.type==="keyValue"?s.jsx(op,{value:o||{},onChange:f,keyLabel:c.keyLabel,valueLabel:c.valueLabel,valueOptional:c.valueOptional,stacked:c.stacked}):c.type==="entities"?s.jsx(sp,{sectionKey:u,value:o,onChange:f,fields:c.fields,singular:c.singular}):s.jsx(P0,{sectionKey:u,value:o,onChange:f})}const xu=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],tb={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function du(u){return tb[u]||al(u)}const Hm=new Set(xu);function ab(u){const o=xu.filter(c=>u.includes(c)),f=u.filter(c=>!xu.includes(c)).sort();return[...o,...f]}function lb(){const{showToast:u}=Zn(),[o,f]=y.useState(null),[c,m]=y.useState("contact"),[p,v]=y.useState([]),[z,b]=y.useState(!0),[h,w]=y.useState(!1),E=y.useCallback(async()=>{b(!0);try{const X=(await Ce.getProfile()).profile||{};f(X),v(Object.keys(X).filter(F=>!Hm.has(F)))}catch(L){u(L.message,"error")}finally{b(!1)}},[u]);y.useEffect(()=>{E()},[E]);const A=y.useMemo(()=>{const L=o?Object.keys(o):[];return ab([...new Set([...xu,...L,...p])]).filter(F=>o&&F in o)},[o,p]);function _(L,X){f(F=>({...F,[L]:X}))}function M(){const L=window.prompt("New section name (e.g. Publications):");if(!L)return;const X=L.trim().toLowerCase().replace(/\s+/g,"_");X&&(v(F=>F.includes(X)?F:[...F,X]),f(F=>({...F,[X]:F[X]||{}})),m(X))}function B(){window.confirm(`Delete section "${du(c)}"?`)&&(f(L=>{const X={...L};return delete X[c],X}),v(L=>L.filter(X=>X!==c)),m("contact"))}async function H(){w(!0);try{await Ce.saveProfile(o),u("Profile saved")}catch(L){u(L.message,"error")}finally{w(!1)}}if(z||!o)return s.jsx("div",{className:"profile-page",children:s.jsx(up,{label:"Loading profile…"})});const J=!Hm.has(c);return s.jsx("div",{className:"profile-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:du(c)}),s.jsxs("p",{className:"page-lead",children:["Edit your ",du(c).toLowerCase()," details for tailored applications."]})]}),J&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:B,children:"Delete section"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(eb,{sectionKey:c,value:o[c],onChange:L=>_(c,L)})})]})}),s.jsxs("aside",{className:"profile-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[s.jsx("p",{className:"profile-nav-label",children:"Sections"}),s.jsx("ul",{children:A.map(L=>s.jsx("li",{children:s.jsx("button",{type:"button",className:`profile-nav-item ${c===L?"active":""}`,onClick:()=>m(L),children:du(L)})},L))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:H,disabled:h,children:h?"Saving…":"Save profile"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:M,children:"+ Section"})]})]})]})})}const Pc={company:"",title:"",location:"",url:"",about:"",description:""};function nb(u){const o=u.split(`
`).map(c=>c.trim()).filter(Boolean),f=u.match(/https?:\/\/[^\s]+/i);return{url:f?f[0]:"",title:o[0]||"",description:u,about:o.slice(0,3).join(" ")}}function ib(u){return u?u.split("_").slice(0,-2).join(" ").replace(/\b\w/g,f=>f.toUpperCase()):""}function ub({draft:u,onChange:o}){return s.jsxs(s.Fragment,{children:[s.jsxs(rp,{children:[s.jsx($e,{id:"job_company",label:"Company",value:u.company,onChange:f=>o({...u,company:f})}),s.jsx($e,{id:"job_title",label:"Job title",value:u.title,onChange:f=>o({...u,title:f})}),s.jsx($e,{id:"job_location",label:"Location",value:u.location,onChange:f=>o({...u,location:f})}),s.jsx($e,{id:"job_url",label:"Job URL",value:u.url,onChange:f=>o({...u,url:f})})]}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_about",label:"About",value:u.about,onChange:f=>o({...u,about:f}),multiline:!0,rows:4,hint:"Company or role overview."})}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_description",label:"Description",value:u.description,onChange:f=>o({...u,description:f}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function rb(){const{showToast:u}=Zn(),[o,f]=y.useState([]),[c,m]=y.useState(null),[p,v]=y.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[z,b]=y.useState(""),[h,w]=y.useState(Pc),[E,A]=y.useState(!1),[_,M]=y.useState(!1),B=y.useRef(null),H=y.useCallback(async()=>{try{const Q=await Ce.listJobs();f(Q.applications||[])}catch(Q){u(Q.message,"error")}},[u]);y.useEffect(()=>{H()},[H]),y.useEffect(()=>{B.current?.scrollIntoView({behavior:"smooth"})},[p]);async function J(Q){m(Q),A(!0);try{const G=await Ce.getJob(Q);w({company:ib(Q),title:G.title||"",location:G.location||"",url:G.url||"",about:G.about||"",description:G.description||""})}catch(G){u(G.message,"error")}}async function L(){const Q=z.trim();if(!(!Q||_)){v(G=>[...G,{role:"user",content:Q}]),b(""),M(!0);try{if(/^https?:\/\//i.test(Q)||Q.includes("linkedin.com")||Q.includes("jobs.")){const re=await Ce.scrapeUrl(Q);w(pe=>({...pe,url:re.url,title:pe.title||re.title||"",about:re.about||pe.about,description:re.description||pe.description})),v(pe=>[...pe,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),A(!0)}else{const re=nb(Q);w(pe=>({...pe,...re,description:Q})),v(pe=>[...pe,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),A(!0)}}catch(G){v(re=>[...re,{role:"assistant",content:`Error: ${G.message}`}])}finally{M(!1)}}}async function X(){if(!h.company.trim()||!h.title.trim()){u("Company and title are required","error");return}M(!0);try{if(c)await Ce.updateJob(c,h),u("Job updated");else{const Q=await Ce.createJob(h);m(Q.slug),u("Job saved")}await H(),A(!0)}catch(Q){u(Q.message,"error")}finally{M(!1)}}async function F(){if(!(!c||!window.confirm("Delete this job?")))try{await Ce.deleteJob(c),m(null),w(Pc),A(!1),await H(),u("Job deleted")}catch(Q){u(Q.message,"error")}}function ee(){m(null),w(Pc),A(!0)}return s.jsx("div",{className:"profile-page jobs-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main jobs-main",children:s.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[E?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:c?"Edit job":"New job"}),s.jsx("p",{className:"page-lead",children:c?"Update role details before generating documents.":"Add a role to start tailoring your application."})]}),c&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:F,children:"Delete job"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(ub,{draft:h,onChange:w})})]}):s.jsxs("div",{className:"jobs-welcome",children:[s.jsx("h1",{children:"Jobs"}),s.jsx("p",{className:"page-lead",children:"Paste a job URL or description in the chat below, or select a saved role from the sidebar."})]}),s.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[s.jsxs("div",{className:"jobs-chat-messages",children:[p.map((Q,G)=>s.jsxs("div",{className:`jobs-chat-bubble ${Q.role}`,children:[s.jsx("span",{className:"jobs-chat-label",children:Q.role==="user"?"You":"Joblication"}),s.jsx("p",{children:Q.content})]},G)),s.jsx("div",{ref:B})]}),s.jsxs("div",{className:"jobs-chat-composer",children:[s.jsx("div",{className:"jobs-chat-input-wrap",children:s.jsx($e,{id:"job_intake",label:"Paste URL or job description",value:z,onChange:b,multiline:!0,rows:3,onKeyDown:Q=>{Q.key==="Enter"&&!Q.shiftKey&&(Q.preventDefault(),L())}})}),s.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:L,disabled:_,children:_?"…":"Send"})]})]})]})}),s.jsxs("aside",{className:"profile-sidebar jobs-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[s.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),s.jsxs("ul",{children:[o.map(Q=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${c===Q.slug?"active":""}`,onClick:()=>J(Q.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:Q.title||Q.slug}),Q.location&&s.jsx("span",{className:"jobs-nav-meta",children:Q.location})]})},Q.slug)),!o.length&&s.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:X,disabled:_||!E,children:_?"Saving…":"Save job"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:ee,children:"+ New job"})]})]})]})})}const no=[{value:"unsubmitted",label:"Unsubmitted"},{value:"submitted",label:"Submitted"},{value:"interview",label:"Interview"},{value:"accepted",label:"Accepted"},{value:"rejected",label:"Rejected"}],cb=Object.fromEntries(no.map(u=>[u.value,u.label]));function ob(u){const o={all:u.length,unsubmitted:0,submitted:0,interview:0,accepted:0,rejected:0,withOutput:0};for(const f of u)o[f.status]!==void 0&&(o[f.status]+=1),f.has_output&&(o.withOutput+=1);return o}function sb(){const{showToast:u}=Zn(),[o,f]=y.useState([]),[c,m]=y.useState(!1),[p,v]=y.useState(null),[z,b]=y.useState(!0),[h,w]=y.useState("all"),E=y.useCallback(async()=>{b(!0);try{const L=await Ce.listApplications();f(L.applications||[])}catch(L){u(L.message,"error")}finally{b(!1)}},[u]),A=y.useCallback(async()=>{try{const L=await Ce.generateStatus();v(L),L.running?setTimeout(A,2e3):(m(!1),L.error?u(L.error,"error"):L.step==="complete"&&(u("Generation complete"),E()))}catch{m(!1)}},[E,u]);y.useEffect(()=>{E()},[E]);const _=y.useMemo(()=>ob(o),[o]),M=y.useMemo(()=>h==="all"?o:h==="with_output"?o.filter(L=>L.has_output):o.filter(L=>L.status===h),[o,h]);async function B(L,X){try{await Ce.updateJob(L,{status:X}),f(F=>F.map(ee=>ee.slug===L?{...ee,status:X}:ee))}catch(F){u(F.message,"error")}}async function H(){m(!0);try{await Ce.startGenerate(),A()}catch(L){m(!1),u(L.message,"error")}}const J=[{key:"all",label:"All applications",count:_.all},{key:"with_output",label:"Ready to review",count:_.withOutput},...no.map(L=>({key:L.value,label:L.label,count:_[L.value]}))];return z?s.jsx("div",{className:"profile-page",children:s.jsx(up,{label:"Loading applications…"})}):s.jsx("div",{className:"profile-page applications-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner applications-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Applications"}),s.jsx("p",{className:"page-lead",children:"Track generated documents and pipeline status for each role."})]}),s.jsxs("button",{type:"button",className:"md-filled-btn applications-generate-btn",onClick:H,disabled:c||!o.length,children:[s.jsx(D0,{}),c?`Generating… ${p?.step||""}`:"Generate all"]})]}),c&&s.jsxs("div",{className:"generation-banner",children:[s.jsx("div",{className:"generation-banner-track",children:s.jsx("div",{className:"generation-banner-fill"})}),s.jsxs("p",{children:["Running pipeline",p?.step?` — ${p.step}`:"…"]})]}),o.length?M.length?s.jsx("div",{className:"applications-grid",children:M.map(L=>s.jsxs("article",{className:"application-card",children:[s.jsxs("div",{className:"application-card-top",children:[s.jsxs("div",{children:[s.jsx("h3",{children:L.title||L.slug}),s.jsx("p",{className:"application-card-slug",children:L.slug})]}),s.jsx("select",{value:L.status,onChange:X=>B(L.slug,X.target.value),className:`status-pill status-${L.status}`,"aria-label":"Application status",children:no.map(X=>s.jsx("option",{value:X.value,children:X.label},X.value))})]}),s.jsxs("div",{className:"application-card-body",children:[s.jsx("span",{className:`output-badge ${L.has_output?"ready":"pending"}`,children:L.has_output?"Documents ready":"Awaiting generation"}),L.has_output?s.jsx("ul",{className:"application-files",children:L.files.map(X=>s.jsx("li",{children:s.jsxs("a",{href:Ce.fileUrl(L.output_folder,X),target:"_blank",rel:"noreferrer",className:"application-file-link",children:[s.jsx(U0,{}),s.jsx("span",{children:X.replace(/.*\//,"")}),s.jsx(H0,{})]})},X))}):s.jsx("p",{className:"application-hint",children:"Run Generate all to create CV and cover letter."})]}),s.jsxs("div",{className:"application-card-footer",children:[s.jsx(bu,{to:`/review?slug=${encodeURIComponent(L.slug)}`,className:"md-text-btn",children:"Review & edit"}),s.jsx("span",{className:"application-status-label",children:cb[L.status]})]})]},L.slug))}):s.jsx(Um,{icon:lo,title:"No matches",description:"Try a different filter from the sidebar."}):s.jsx(Um,{icon:lo,title:"No applications yet",description:"Add jobs from the Jobs page, then generate tailored CVs and cover letters here.",action:s.jsx(bu,{to:"/jobs",className:"md-outlined-btn",children:"Go to Jobs"})})]})}),s.jsxs("aside",{className:"profile-sidebar applications-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Filter applications",children:[s.jsx("p",{className:"profile-nav-label",children:"Filter"}),s.jsx("ul",{children:J.map(L=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item filter-item ${h===L.key?"active":""}`,onClick:()=>w(L.key),children:[s.jsx("span",{className:"filter-label",children:L.label}),s.jsx("span",{className:"filter-count",children:L.count})]})},L.key))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsxs("div",{className:"applications-stats",children:[s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:_.all}),s.jsx("span",{className:"stat-label",children:"Total"})]}),s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:_.withOutput}),s.jsx("span",{className:"stat-label",children:"Generated"})]})]}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:H,disabled:c||!o.length,children:c?"Generating…":"Generate all"})]})]})]})})}const fb=["nw","n","ne","e","se","s","sw","w"],db={nw:"nwse-resize",n:"ns-resize",ne:"nesw-resize",e:"ew-resize",se:"nwse-resize",s:"ns-resize",sw:"nesw-resize",w:"ew-resize"};function Gl(u,o,f){return Math.min(f,Math.max(o,u))}function mb(u){return Math.round(u*10)/10}function pb(u,o,f,c){let{x:m,y:p,w:v,h:z}=o;const b=8,h=4;return u.includes("e")&&(v+=f),u.includes("w")&&(m+=f,v-=f),u.includes("s")&&(z+=c),u.includes("n")&&(p+=c,z-=c),v<b&&(u.includes("w")&&(m-=b-v),v=b),z<h&&(u.includes("n")&&(p-=h-z),z=h),m=Gl(m,0,100-b),p=Gl(p,0,100-h),v=Gl(v,b,100-m),z=Gl(z,h,100-p),{x:m,y:p,w:v,h:z}}function hb({layout:u,sections:o,activeSection:f,onSelectSection:c,onUpdateSection:m}){const p=y.useRef(null),v=y.useRef(null),z=u.pageWidth||595,b=u.pageHeight||842,h=u.zoom||1,w=[...o].sort((M,B)=>(M.zIndex??1)-(B.zIndex??1)),E=y.useCallback(()=>{v.current=null,document.body.classList.remove("ps-dragging")},[]),A=y.useCallback(M=>{const B=v.current,H=p.current;if(!B||!H)return;const J=H.getBoundingClientRect(),L=(M.clientX-B.startX)/J.width*100,X=(M.clientY-B.startY)/J.height*100,F=u.snapToGrid?u.gridSize||1:0,ee=Q=>F>0?Math.round(Q/F)*F:mb(Q);if(B.mode==="move"){const Q=100-B.origW,G=100-B.origH;m(B.id,{x:ee(Gl(B.origX+L,0,Q)),y:ee(Gl(B.origY+X,0,G))})}else if(B.mode.startsWith("resize-")){const Q=B.mode.slice(7),G=pb(Q,{x:B.origX,y:B.origY,w:B.origW,h:B.origH},L,X);m(B.id,{x:ee(G.x),y:ee(G.y),w:ee(G.w),h:ee(G.h)})}},[u.snapToGrid,u.gridSize,m]);y.useEffect(()=>(window.addEventListener("pointermove",A),window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}),[A,E]);function _(M,B,H){B.locked||(M.stopPropagation(),M.preventDefault(),v.current={id:B.id,mode:H,startX:M.clientX,startY:M.clientY,origX:B.x,origY:B.y,origW:B.w,origH:B.h},document.body.classList.add("ps-dragging"),c(B.id))}return s.jsxs("div",{className:"ps-workspace",children:[s.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(M,B)=>s.jsx("span",{style:{left:`${B/11*100}%`},children:Math.round(z/11*B)},B))}),s.jsx("div",{className:"ps-canvas-scroll",children:s.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${h})`,transformOrigin:"top center"},children:s.jsxs("div",{ref:p,className:"ps-canvas",style:{width:z,minHeight:b,padding:u.pagePadding,fontSize:`${u.fontSize}px`,lineHeight:u.lineHeight,fontFamily:u.fontFamily||"Georgia, serif",backgroundColor:u.pageBackground||"#ffffff"},onClick:()=>c(null),onKeyDown:()=>{},role:"presentation",children:[u.showGrid&&s.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${u.gridSize||5}% ${u.gridSize||5}%`}}),w.filter(M=>M.visible!==!1).map(M=>{const B=f===M.id;return s.jsxs("div",{className:`ps-layer ${B?"selected":""} ${M.locked?"locked":""}`,style:{left:`${M.x}%`,top:`${M.y}%`,width:`${M.w}%`,height:`${M.h}%`,zIndex:M.zIndex??1,opacity:M.opacity??1,fontSize:M.fontSize?`${M.fontSize}px`:void 0,textAlign:M.textAlign||"left",padding:M.padding??8,backgroundColor:M.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:H=>{H.stopPropagation(),c(M.id)},onPointerDown:H=>{H.target.closest(".ps-handle")||_(H,M,"move")},onKeyDown:()=>{},role:"button",tabIndex:0,children:[s.jsx("span",{className:"ps-layer-label",children:M.label}),s.jsx("p",{className:"ps-layer-preview",children:"Section content"}),B&&!M.locked&&s.jsx(s.Fragment,{children:fb.map(H=>s.jsx("span",{className:`ps-handle ps-handle-${H}`,style:{cursor:db[H]},onPointerDown:J=>_(J,M,`resize-${H}`)},H))})]},M.id)})]})})})]})}function gb(){return s.jsxs("svg",{className:"ps-layer-grip-icon",viewBox:"0 0 10 16",fill:"currentColor","aria-hidden":"true",children:[s.jsx("circle",{cx:"2.5",cy:"2.5",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"2.5",r:"1.1"}),s.jsx("circle",{cx:"2.5",cy:"8",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"8",r:"1.1"}),s.jsx("circle",{cx:"2.5",cy:"13.5",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"13.5",r:"1.1"})]})}function vb({layers:u,activeId:o,onSelect:f,onReorder:c,onToggleVisible:m}){const[p,v]=y.useState(null),[z,b]=y.useState(null),h=y.useRef(null),w=y.useCallback(()=>{const A=h.current;A&&z&&A!==z&&c(A,z),h.current=null,v(null),b(null)},[z,c]);y.useEffect(()=>{if(!p)return;const A=_=>{const H=document.elementFromPoint(_.clientX,_.clientY)?.closest("[data-layer-id]")?.getAttribute("data-layer-id");H&&b(H)};return window.addEventListener("pointermove",A),window.addEventListener("pointerup",w),window.addEventListener("pointercancel",w),()=>{window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w)}},[p,w]);function E(A,_){A.preventDefault(),A.stopPropagation(),h.current=_,v(_),b(_)}return s.jsx("ul",{className:"ps-layer-list",children:u.map(A=>s.jsxs("li",{"data-layer-id":A.id,className:["ps-layer-row",p===A.id?"dragging":"",z===A.id&&p&&p!==A.id?"drop-target":""].filter(Boolean).join(" "),children:[s.jsx("button",{type:"button",className:"ps-layer-grip","aria-label":`Reorder ${A.label}`,onPointerDown:_=>E(_,A.id),children:s.jsx(gb,{})}),s.jsxs("button",{type:"button",className:`ps-layer-item ${o===A.id?"active":""}`,onClick:()=>f(A.id),children:[s.jsx("span",{className:`ps-eye ${A.visible!==!1?"on":"off"}`,onClick:_=>{_.stopPropagation(),m(A.id,A.visible!==!1)},onKeyDown:()=>{},role:"button",tabIndex:0,title:A.visible!==!1?"Hide layer":"Show layer"}),s.jsx("span",{className:"ps-layer-name",children:A.label}),A.locked&&s.jsx("span",{className:"ps-lock-badge",children:"L"})]})]},A.id))})}const ql={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function Lm(u){if(!u)return{...ql,sections:ql.sections.map(f=>({...f}))};const o=(u.sections||ql.sections).map(f=>({...ql.sections[0],...f}));return{...ql,...u,sections:o}}function Ke({label:u,children:o}){return s.jsxs("div",{className:"ps-prop-row",children:[s.jsx("label",{children:u}),o]})}function Qt({value:u,onChange:o,min:f,max:c,step:m=1,unit:p="%"}){return s.jsxs("div",{className:"ps-range-field",children:[s.jsx("input",{type:"range",min:f,max:c,step:m,value:u,onChange:v=>o(Number(v.target.value))}),s.jsx("input",{type:"number",className:"ps-num-input",min:f,max:c,step:m,value:u,onChange:v=>o(Number(v.target.value))}),s.jsx("span",{className:"ps-unit",children:p})]})}function bb(){const{showToast:u}=Zn(),[o,f]=y.useState({}),[c,m]=y.useState({}),[p,v]=y.useState(""),[z,b]=y.useState(""),[h,w]=y.useState("cv"),[E,A]=y.useState(""),[_,M]=y.useState(()=>Lm(null)),[B,H]=y.useState("contact"),[J,L]=y.useState("layer"),[X,F]=y.useState(!1),ee=y.useMemo(()=>({...o,...c}),[o,c]),Q=_.sections||[],G=Q.find(x=>x.id===B),re=y.useCallback(async()=>{try{const x=await Ce.listTemplates();f(x.catalog||{}),m(x.custom||{});const V=Object.keys({...x.catalog||{},...x.custom||{}});V.length&&!p&&v(V[0])}catch(x){u(x.message,"error")}},[p,u]),pe=y.useCallback(async x=>{if(x)try{const V=await Ce.getTemplate(x);b(V.name||x),w(V.category||"cv"),A(V.source||"");const ne=Lm(V.layout);M(ne),ne.sections?.length&&H(ne.sections[0].id)}catch(V){u(V.message,"error")}},[u]);y.useEffect(()=>{re()},[re]),y.useEffect(()=>{p&&pe(p)},[p,pe]);const ye=y.useCallback((x,V)=>{M(ne=>({...ne,sections:ne.sections.map(ce=>ce.id===x?{...ce,...V}:ce)}))},[]);function Ve(){const x=window.prompt("Layer name:");if(!x)return;const V=x.toLowerCase().replace(/\s+/g,"_"),ne=Math.max(0,...Q.map(ce=>ce.zIndex??1));M(ce=>({...ce,sections:[...ce.sections,{id:V,label:x,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:ne+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),H(V)}function Ae(){!G||!window.confirm(`Delete layer "${G.label}"?`)||(M(x=>({...x,sections:x.sections.filter(V=>V.id!==B)})),H(Q[0]?.id||""))}const at=y.useCallback((x,V)=>{M(ne=>{const ce=[...ne.sections].sort((te,he)=>(he.zIndex??1)-(te.zIndex??1)),j=ce.findIndex(te=>te.id===x),Y=ce.findIndex(te=>te.id===V);if(j<0||Y<0||j===Y)return ne;const Z=[...ce],[$]=Z.splice(j,1);Z.splice(Y,0,$);const ae=Z.map((te,he)=>({...te,zIndex:Z.length-he}));return{...ne,sections:ae}})},[]);async function ke(){F(!0);try{await Ce.saveTemplate(p,{name:z,category:h,source:E,layout:_}),u("Template saved"),await re()}catch(x){u(x.message,"error")}finally{F(!1)}}async function Re(){const x=window.prompt("Template id (e.g. my_cv):");if(x){F(!0);try{await Ce.createTemplate({id:x,name:x,category:"cv",source:`<!-- Custom template -->
`,layout:ql}),v(x),await re(),u("Template created")}catch(V){u(V.message,"error")}finally{F(!1)}}}const D=[...Q].sort((x,V)=>(V.zIndex??1)-(x.zIndex??1));return s.jsxs("div",{className:"ps-editor",children:[s.jsxs("header",{className:"ps-toolbar",children:[s.jsxs("div",{className:"ps-toolbar-left",children:[s.jsx("select",{value:p,onChange:x=>v(x.target.value),className:"ps-select",children:Object.entries(ee).map(([x,V])=>s.jsx("option",{value:x,children:V.name||x},x))}),s.jsx("button",{type:"button",className:"ps-tool-btn",onClick:Re,children:"New"}),s.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:ke,disabled:X,children:X?"Saving…":"Save"})]}),s.jsx("div",{className:"ps-toolbar-center",children:s.jsx("span",{className:"ps-doc-name",children:z||"Untitled"})}),s.jsxs("div",{className:"ps-toolbar-right",children:[s.jsxs("label",{className:"ps-zoom-label",children:["Zoom",s.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:_.zoom||.85,onChange:x=>M({..._,zoom:Number(x.target.value)})}),s.jsxs("span",{children:[Math.round((_.zoom||.85)*100),"%"]})]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:_.snapToGrid,onChange:x=>M({..._,snapToGrid:x.target.checked})}),"Snap"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:_.showGrid,onChange:x=>M({..._,showGrid:x.target.checked})}),"Grid"]})]})]}),s.jsxs("div",{className:"ps-body",children:[s.jsxs("aside",{className:"ps-panel ps-layers",children:[s.jsxs("div",{className:"ps-panel-head",children:[s.jsx("h3",{children:"Layers"}),s.jsx("button",{type:"button",className:"ps-icon-btn",onClick:Ve,title:"Add layer",children:"+"})]}),s.jsx(vb,{layers:D,activeId:B,onSelect:H,onReorder:at,onToggleVisible:(x,V)=>ye(x,{visible:!V})})]}),s.jsx(hb,{layout:_,sections:Q,activeSection:B,onSelectSection:H,onUpdateSection:ye}),s.jsxs("aside",{className:"ps-panel ps-properties",children:[s.jsxs("div",{className:"ps-tabs",children:[s.jsx("button",{type:"button",className:J==="document"?"active":"",onClick:()=>L("document"),children:"Document"}),s.jsx("button",{type:"button",className:J==="layer"?"active":"",onClick:()=>L("layer"),children:"Layer"}),s.jsx("button",{type:"button",className:J==="source"?"active":"",onClick:()=>L("source"),children:"Source"})]}),J==="document"&&s.jsxs("div",{className:"ps-props",children:[s.jsx($e,{label:"Template name",value:z,onChange:b}),s.jsx(Ke,{label:"Category",children:s.jsxs("select",{value:h,onChange:x=>w(x.target.value),className:"ps-select full",children:[s.jsx("option",{value:"cv",children:"CV"}),s.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),s.jsx(Ke,{label:"Page width (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageWidth,onChange:x=>M({..._,pageWidth:Number(x.target.value)})})}),s.jsx(Ke,{label:"Page height (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:_.pageHeight,onChange:x=>M({..._,pageHeight:Number(x.target.value)})})}),s.jsx(Ke,{label:"Padding (px)",children:s.jsx(Qt,{value:_.pagePadding,onChange:x=>M({..._,pagePadding:x}),min:0,max:120,unit:"px"})}),s.jsx(Ke,{label:"Background",children:s.jsx("input",{type:"color",className:"ps-color-input",value:_.pageBackground||"#ffffff",onChange:x=>M({..._,pageBackground:x.target.value})})}),s.jsx(Ke,{label:"Base font size",children:s.jsx(Qt,{value:_.fontSize,onChange:x=>M({..._,fontSize:x}),min:8,max:18,unit:"px"})}),s.jsx(Ke,{label:"Line height",children:s.jsx(Qt,{value:_.lineHeight,onChange:x=>M({..._,lineHeight:x}),min:1,max:2,step:.05,unit:""})}),s.jsx(Ke,{label:"Font family",children:s.jsx("input",{className:"ps-text-input full",value:_.fontFamily||"",onChange:x=>M({..._,fontFamily:x.target.value})})}),s.jsx(Ke,{label:"Grid size",children:s.jsx(Qt,{value:_.gridSize||5,onChange:x=>M({..._,gridSize:x}),min:1,max:20,unit:"%"})})]}),J==="layer"&&G&&s.jsxs("div",{className:"ps-props",children:[s.jsx("h4",{className:"ps-layer-title",children:G.label}),s.jsx(Ke,{label:"X position",children:s.jsx(Qt,{value:G.x,onChange:x=>ye(G.id,{x}),min:0,max:95})}),s.jsx(Ke,{label:"Y position",children:s.jsx(Qt,{value:G.y,onChange:x=>ye(G.id,{y:x}),min:0,max:95})}),s.jsx(Ke,{label:"Width",children:s.jsx(Qt,{value:G.w,onChange:x=>ye(G.id,{w:x}),min:8,max:100})}),s.jsx(Ke,{label:"Height",children:s.jsx(Qt,{value:G.h,onChange:x=>ye(G.id,{h:x}),min:4,max:80})}),s.jsx(Ke,{label:"Opacity",children:s.jsx(Qt,{value:Math.round((G.opacity??1)*100),onChange:x=>ye(G.id,{opacity:x/100}),min:10,max:100,unit:"%"})}),s.jsx(Ke,{label:"Layer padding",children:s.jsx(Qt,{value:G.padding??8,onChange:x=>ye(G.id,{padding:x}),min:0,max:32,unit:"px"})}),s.jsx(Ke,{label:"Text align",children:s.jsxs("select",{className:"ps-select full",value:G.textAlign||"left",onChange:x=>ye(G.id,{textAlign:x.target.value}),children:[s.jsx("option",{value:"left",children:"Left"}),s.jsx("option",{value:"center",children:"Center"}),s.jsx("option",{value:"right",children:"Right"}),s.jsx("option",{value:"justify",children:"Justify"})]})}),s.jsx(Ke,{label:"Fill color",children:s.jsx("input",{type:"color",className:"ps-color-input",value:G.bgColor?.startsWith("#")?G.bgColor:"#e8f0fe",onChange:x=>ye(G.id,{bgColor:x.target.value})})}),s.jsx(Ke,{label:"Font size override",children:s.jsx("input",{type:"number",className:"ps-num-input full",placeholder:"Inherit",value:G.fontSize??"",onChange:x=>ye(G.id,{fontSize:x.target.value?Number(x.target.value):void 0})})}),s.jsxs("div",{className:"ps-check-group",children:[s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:G.visible!==!1,onChange:x=>ye(G.id,{visible:x.target.checked})}),"Visible"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:!!G.locked,onChange:x=>ye(G.id,{locked:x.target.checked})}),"Lock"]})]}),s.jsx("button",{type:"button",className:"ps-danger-btn",onClick:Ae,children:"Delete layer"})]}),J==="layer"&&!G&&s.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),J==="source"&&s.jsx("textarea",{className:"ps-source-editor",value:E,onChange:x=>A(x.target.value)})]})]})]})}function mu(u,o){return(u||[]).find(f=>f.toLowerCase().includes(o))}function yb(){const{showToast:u}=Zn(),[o,f]=S0(),[c,m]=y.useState([]),[p,v]=y.useState(o.get("slug")||""),[z,b]=y.useState(null),[h,w]=y.useState(""),[E,A]=y.useState(""),[_,M]=y.useState("preview"),[B,H]=y.useState("cv"),[J,L]=y.useState("html"),[X,F]=y.useState(!1),ee=y.useCallback(async()=>{try{const x=await Ce.listApplications();m(x.applications||[]),!p&&x.applications?.length&&v(x.applications[0].slug)}catch(x){u(x.message,"error")}},[u,p]),Q=y.useCallback(async()=>{if(p)try{const x=await Ce.getReview(p);b(x),w(JSON.stringify(x.stage_2||{},null,2)),A(JSON.stringify(x.stage_3||{},null,2))}catch(x){u(x.message,"error")}},[p,u]);y.useEffect(()=>{ee()},[ee]),y.useEffect(()=>{p&&(f({slug:p}),Q())},[p,Q,f]);const G=z?.output_folder||c.find(x=>x.slug===p)?.output_folder,re=z?.files?.length?z.files:c.find(x=>x.slug===p)?.files||[],pe=mu(re,"_cv.html"),ye=mu(re,"_cv.pdf"),Ve=mu(re,"_cover_letter.html"),Ae=mu(re,"_cover_letter.pdf"),at=y.useMemo(()=>B==="cv"?J==="pdf"?ye:pe:J==="pdf"?Ae:Ve,[B,J,pe,ye,Ve,Ae]),ke=G&&at?Ce.fileUrl(G,at):null;async function Re(){F(!0);try{let x,V;try{x=JSON.parse(h),V=JSON.parse(E)}catch(ne){throw new Error(`Invalid JSON: ${ne.message}`)}await Ce.saveReview(p,{app_key:z?.app_key,stage_2:x,stage_3:V}),u("Saved edits"),await Q()}catch(x){u(x.message,"error")}finally{F(!1)}}async function D(){F(!0);try{await Ce.saveReview(p,{app_key:z?.app_key,stage_2:JSON.parse(h),stage_3:JSON.parse(E)}),await Ce.rebuild(p),u("PDFs rebuilt"),await ee(),await Q(),M("preview"),L("pdf")}catch(x){u(x.message,"error")}finally{F(!1)}}return s.jsx("div",{className:"profile-page review-page",children:s.jsxs("div",{className:"profile-layout review-layout",children:[s.jsx("main",{className:"profile-main review-main",children:s.jsxs("div",{className:"profile-main-inner review-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Review"}),s.jsx("p",{className:"page-lead",children:"Preview generated documents and fine-tune CV and cover letter content."})]}),s.jsxs("div",{className:"header-actions",children:[s.jsx("select",{value:p,onChange:x=>v(x.target.value),className:"ps-select",children:c.map(x=>s.jsx("option",{value:x.slug,children:x.title||x.slug},x.slug))}),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:Re,disabled:X,children:"Save edits"}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:D,disabled:X,children:X?"Working…":"Save & export PDF"})]})]}),s.jsxs("div",{className:"review-tabs",children:[s.jsx("button",{type:"button",className:_==="preview"?"active":"",onClick:()=>M("preview"),children:"Preview"}),s.jsx("button",{type:"button",className:_==="cv"?"active":"",onClick:()=>M("cv"),children:"CV JSON"}),s.jsx("button",{type:"button",className:_==="letter"?"active":"",onClick:()=>M("letter"),children:"Letter JSON"})]}),_==="preview"&&s.jsxs("div",{className:"review-preview-panel",children:[!G&&s.jsxs("p",{className:"muted review-empty",children:["No generated files yet. Run ",s.jsx("strong",{children:"Generate all"})," from Applications, then return here."]}),G&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"review-preview-toolbar",children:[s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:B==="cv"?"active":"",onClick:()=>H("cv"),children:"CV"}),s.jsx("button",{type:"button",className:B==="letter"?"active":"",onClick:()=>H("letter"),children:"Cover letter"})]}),s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:J==="html"?"active":"",onClick:()=>L("html"),disabled:!(B==="cv"?pe:Ve),children:"HTML"}),s.jsx("button",{type:"button",className:J==="pdf"?"active":"",onClick:()=>L("pdf"),disabled:!(B==="cv"?ye:Ae),children:"PDF"})]}),ke&&s.jsx("a",{href:ke,target:"_blank",rel:"noreferrer",className:"md-text-btn",children:"Open in new tab"})]}),ke?s.jsx("div",{className:"review-preview-frame-wrap",children:s.jsx("iframe",{title:`${B} ${J} preview`,src:ke,className:"review-preview-frame"},ke)}):s.jsx("p",{className:"muted review-empty",children:J==="pdf"?"PDF not found — run Save & export PDF.":"HTML preview not available."}),s.jsxs("div",{className:"review-download-row",children:[ye&&s.jsx("a",{href:Ce.fileUrl(G,ye),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download CV PDF"}),Ae&&s.jsx("a",{href:Ce.fileUrl(G,Ae),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download letter PDF"})]})]})]}),_==="cv"&&s.jsx("textarea",{className:"code-area review-editor",value:h,onChange:x=>w(x.target.value)}),_==="letter"&&s.jsx("textarea",{className:"code-area review-editor",value:E,onChange:x=>A(x.target.value)})]})}),s.jsx("aside",{className:"profile-sidebar review-sidebar",children:s.jsxs("nav",{className:"profile-nav",children:[s.jsx("p",{className:"profile-nav-label",children:"Applications"}),s.jsxs("ul",{children:[c.map(x=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${p===x.slug?"active":""}`,onClick:()=>v(x.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:x.title||x.slug}),s.jsx("span",{className:"jobs-nav-meta",children:x.has_output?"Has output":"No output yet"})]})},x.slug)),!c.length&&s.jsx("li",{className:"jobs-empty",children:"No applications"})]})]})})]})})}function xb(){return s.jsx(Zv,{children:s.jsxs(Ua,{element:s.jsx(k0,{}),children:[s.jsx(Ua,{index:!0,element:s.jsx(Xv,{to:"/jobs",replace:!0})}),s.jsx(Ua,{path:"profile",element:s.jsx(lb,{})}),s.jsx(Ua,{path:"jobs",element:s.jsx(rb,{})}),s.jsx(Ua,{path:"applications",element:s.jsx(sb,{})}),s.jsx(Ua,{path:"templates",element:s.jsx(bb,{})}),s.jsx(Ua,{path:"review",element:s.jsx(yb,{})})]})})}const Sb=`
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
`;function jb(){return s.jsx("style",{children:Sb})}Xg.createRoot(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsxs(v0,{children:[s.jsx(jb,{}),s.jsx(Y0,{children:s.jsx(xb,{})})]})}));
