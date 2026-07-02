(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();var Zo={exports:{}},qn={};var Sm;function Gg(){if(Sm)return qn;Sm=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(o,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var z in m)z!=="key"&&(p[z]=m[z])}else p=m;return m=p.ref,{$$typeof:r,type:o,key:g,ref:m!==void 0?m:null,props:p}}return qn.Fragment=c,qn.jsx=f,qn.jsxs=f,qn}var jm;function Xg(){return jm||(jm=1,Zo.exports=Gg()),Zo.exports}var s=Xg(),Jo={exports:{}},re={};var Em;function Qg(){if(Em)return re;Em=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),R=Symbol.iterator;function O(E){return E===null||typeof E!="object"?null:(E=R&&E[R]||E["@@iterator"],typeof E=="function"?E:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Y={};function Z(E,B,K){this.props=E,this.context=B,this.refs=Y,this.updater=K||q}Z.prototype.isReactComponent={},Z.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},Z.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function V(){}V.prototype=Z.prototype;function X(E,B,K){this.props=E,this.context=B,this.refs=Y,this.updater=K||q}var P=X.prototype=new V;P.constructor=X,G(P,Z.prototype),P.isPureReactComponent=!0;var Q=Array.isArray;function U(){}var L={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function ce(E,B,K){var F=K.ref;return{$$typeof:r,type:E,key:B,ref:F!==void 0?F:null,props:K}}function ge(E,B){return ce(E.type,B,E.props)}function $(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function ne(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(K){return B[K]})}var ye=/\/+/g;function Re(E,B){return typeof E=="object"&&E!==null&&E.key!=null?ne(""+E.key):B.toString(36)}function Me(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(U,U):(E.status="pending",E.then(function(B){E.status==="pending"&&(E.status="fulfilled",E.value=B)},function(B){E.status==="pending"&&(E.status="rejected",E.reason=B)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,B,K,F,ie){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var be=!1;if(E===null)be=!0;else switch(le){case"bigint":case"string":case"number":be=!0;break;case"object":switch(E.$$typeof){case r:case c:be=!0;break;case N:return be=E._init,M(be(E._payload),B,K,F,ie)}}if(be)return ie=ie(E),be=F===""?"."+Re(E,0):F,Q(ie)?(K="",be!=null&&(K=be.replace(ye,"$&/")+"/"),M(ie,B,K,"",function(Jl){return Jl})):ie!=null&&($(ie)&&(ie=ge(ie,K+(ie.key==null||E&&E.key===ie.key?"":(""+ie.key).replace(ye,"$&/")+"/")+be)),B.push(ie)),1;be=0;var lt=F===""?".":F+":";if(Q(E))for(var He=0;He<E.length;He++)F=E[He],le=lt+Re(F,He),be+=M(F,B,K,le,ie);else if(He=O(E),typeof He=="function")for(E=He.call(E),He=0;!(F=E.next()).done;)F=F.value,le=lt+Re(F,He++),be+=M(F,B,K,le,ie);else if(le==="object"){if(typeof E.then=="function")return M(Me(E),B,K,F,ie);throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return be}function x(E,B,K){if(E==null)return E;var F=[],ie=0;return M(E,F,"","",function(le){return B.call(K,le,ie++)}),F}function J(E){if(E._status===-1){var B=E._result;B=B(),B.then(function(K){(E._status===0||E._status===-1)&&(E._status=1,E._result=K)},function(K){(E._status===0||E._status===-1)&&(E._status=2,E._result=K)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var ue=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},fe={map:x,forEach:function(E,B,K){x(E,function(){B.apply(this,arguments)},K)},count:function(E){var B=0;return x(E,function(){B++}),B},toArray:function(E){return x(E,function(B){return B})||[]},only:function(E){if(!$(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return re.Activity=j,re.Children=fe,re.Component=Z,re.Fragment=f,re.Profiler=m,re.PureComponent=X,re.StrictMode=o,re.Suspense=y,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return L.H.useMemoCache(E)}},re.cache=function(E){return function(){return E.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(E,B,K){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var F=G({},E.props),ie=E.key;if(B!=null)for(le in B.key!==void 0&&(ie=""+B.key),B)!ee.call(B,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&B.ref===void 0||(F[le]=B[le]);var le=arguments.length-2;if(le===1)F.children=K;else if(1<le){for(var be=Array(le),lt=0;lt<le;lt++)be[lt]=arguments[lt+2];F.children=be}return ce(E.type,ie,F)},re.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},re.createElement=function(E,B,K){var F,ie={},le=null;if(B!=null)for(F in B.key!==void 0&&(le=""+B.key),B)ee.call(B,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(ie[F]=B[F]);var be=arguments.length-2;if(be===1)ie.children=K;else if(1<be){for(var lt=Array(be),He=0;He<be;He++)lt[He]=arguments[He+2];ie.children=lt}if(E&&E.defaultProps)for(F in be=E.defaultProps,be)ie[F]===void 0&&(ie[F]=be[F]);return ce(E,le,ie)},re.createRef=function(){return{current:null}},re.forwardRef=function(E){return{$$typeof:z,render:E}},re.isValidElement=$,re.lazy=function(E){return{$$typeof:N,_payload:{_status:-1,_result:E},_init:J}},re.memo=function(E,B){return{$$typeof:h,type:E,compare:B===void 0?null:B}},re.startTransition=function(E){var B=L.T,K={};L.T=K;try{var F=E(),ie=L.S;ie!==null&&ie(K,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(U,ue)}catch(le){ue(le)}finally{B!==null&&K.types!==null&&(B.types=K.types),L.T=B}},re.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},re.use=function(E){return L.H.use(E)},re.useActionState=function(E,B,K){return L.H.useActionState(E,B,K)},re.useCallback=function(E,B){return L.H.useCallback(E,B)},re.useContext=function(E){return L.H.useContext(E)},re.useDebugValue=function(){},re.useDeferredValue=function(E,B){return L.H.useDeferredValue(E,B)},re.useEffect=function(E,B){return L.H.useEffect(E,B)},re.useEffectEvent=function(E){return L.H.useEffectEvent(E)},re.useId=function(){return L.H.useId()},re.useImperativeHandle=function(E,B,K){return L.H.useImperativeHandle(E,B,K)},re.useInsertionEffect=function(E,B){return L.H.useInsertionEffect(E,B)},re.useLayoutEffect=function(E,B){return L.H.useLayoutEffect(E,B)},re.useMemo=function(E,B){return L.H.useMemo(E,B)},re.useOptimistic=function(E,B){return L.H.useOptimistic(E,B)},re.useReducer=function(E,B,K){return L.H.useReducer(E,B,K)},re.useRef=function(E){return L.H.useRef(E)},re.useState=function(E){return L.H.useState(E)},re.useSyncExternalStore=function(E,B,K){return L.H.useSyncExternalStore(E,B,K)},re.useTransition=function(){return L.H.useTransition()},re.version="19.2.7",re}var zm;function cc(){return zm||(zm=1,Jo.exports=Qg()),Jo.exports}var b=cc(),Ko={exports:{}},Gn={},$o={exports:{}},Wo={};var wm;function Vg(){return wm||(wm=1,(function(r){function c(M,x){var J=M.length;M.push(x);e:for(;0<J;){var ue=J-1>>>1,fe=M[ue];if(0<m(fe,x))M[ue]=x,M[J]=fe,J=ue;else break e}}function f(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var x=M[0],J=M.pop();if(J!==x){M[0]=J;e:for(var ue=0,fe=M.length,E=fe>>>1;ue<E;){var B=2*(ue+1)-1,K=M[B],F=B+1,ie=M[F];if(0>m(K,J))F<fe&&0>m(ie,K)?(M[ue]=ie,M[F]=J,ue=F):(M[ue]=K,M[B]=J,ue=B);else if(F<fe&&0>m(ie,J))M[ue]=ie,M[F]=J,ue=F;else break e}}return x}function m(M,x){var J=M.sortIndex-x.sortIndex;return J!==0?J:M.id-x.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var g=Date,z=g.now();r.unstable_now=function(){return g.now()-z}}var y=[],h=[],N=1,j=null,R=3,O=!1,q=!1,G=!1,Y=!1,Z=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function P(M){for(var x=f(h);x!==null;){if(x.callback===null)o(h);else if(x.startTime<=M)o(h),x.sortIndex=x.expirationTime,c(y,x);else break;x=f(h)}}function Q(M){if(G=!1,P(M),!q)if(f(y)!==null)q=!0,U||(U=!0,ne());else{var x=f(h);x!==null&&Me(Q,x.startTime-M)}}var U=!1,L=-1,ee=5,ce=-1;function ge(){return Y?!0:!(r.unstable_now()-ce<ee)}function $(){if(Y=!1,U){var M=r.unstable_now();ce=M;var x=!0;try{e:{q=!1,G&&(G=!1,V(L),L=-1),O=!0;var J=R;try{t:{for(P(M),j=f(y);j!==null&&!(j.expirationTime>M&&ge());){var ue=j.callback;if(typeof ue=="function"){j.callback=null,R=j.priorityLevel;var fe=ue(j.expirationTime<=M);if(M=r.unstable_now(),typeof fe=="function"){j.callback=fe,P(M),x=!0;break t}j===f(y)&&o(y),P(M)}else o(y);j=f(y)}if(j!==null)x=!0;else{var E=f(h);E!==null&&Me(Q,E.startTime-M),x=!1}}break e}finally{j=null,R=J,O=!1}x=void 0}}finally{x?ne():U=!1}}}var ne;if(typeof X=="function")ne=function(){X($)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Re=ye.port2;ye.port1.onmessage=$,ne=function(){Re.postMessage(null)}}else ne=function(){Z($,0)};function Me(M,x){L=Z(function(){M(r.unstable_now())},x)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(M){switch(R){case 1:case 2:case 3:var x=3;break;default:x=R}var J=R;R=x;try{return M()}finally{R=J}},r.unstable_requestPaint=function(){Y=!0},r.unstable_runWithPriority=function(M,x){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var J=R;R=M;try{return x()}finally{R=J}},r.unstable_scheduleCallback=function(M,x,J){var ue=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,M){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,M={id:N++,callback:x,priorityLevel:M,startTime:J,expirationTime:fe,sortIndex:-1},J>ue?(M.sortIndex=J,c(h,M),f(y)===null&&M===f(h)&&(G?(V(L),L=-1):G=!0,Me(Q,J-ue))):(M.sortIndex=fe,c(y,M),q||O||(q=!0,U||(U=!0,ne()))),M},r.unstable_shouldYield=ge,r.unstable_wrapCallback=function(M){var x=R;return function(){var J=R;R=x;try{return M.apply(this,arguments)}finally{R=J}}}})(Wo)),Wo}var Nm;function Zg(){return Nm||(Nm=1,$o.exports=Vg()),$o.exports}var Fo={exports:{}},at={};var Tm;function Jg(){if(Tm)return at;Tm=1;var r=cc();function c(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)h+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var o={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(y,h,N){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:j==null?null:""+j,children:y,containerInfo:h,implementation:N}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,at.createPortal=function(y,h){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return p(y,h,null,N)},at.flushSync=function(y){var h=g.T,N=o.p;try{if(g.T=null,o.p=2,y)return y()}finally{g.T=h,o.p=N,o.d.f()}},at.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(y,h))},at.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},at.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var N=h.as,j=z(N,h.crossOrigin),R=typeof h.integrity=="string"?h.integrity:void 0,O=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;N==="style"?o.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:j,integrity:R,fetchPriority:O}):N==="script"&&o.d.X(y,{crossOrigin:j,integrity:R,fetchPriority:O,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},at.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var N=z(h.as,h.crossOrigin);o.d.M(y,{crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(y)},at.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var N=h.as,j=z(N,h.crossOrigin);o.d.L(y,N,{crossOrigin:j,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},at.preloadModule=function(y,h){if(typeof y=="string")if(h){var N=z(h.as,h.crossOrigin);o.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:N,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(y)},at.requestFormReset=function(y){o.d.r(y)},at.unstable_batchedUpdates=function(y,h){return y(h)},at.useFormState=function(y,h,N){return g.H.useFormState(y,h,N)},at.useFormStatus=function(){return g.H.useHostTransitionStatus()},at.version="19.2.7",at}var Cm;function Kg(){if(Cm)return Fo.exports;Cm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Fo.exports=Jg(),Fo.exports}var Rm;function $g(){if(Rm)return Gn;Rm=1;var r=Zg(),c=cc(),f=Kg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(o(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return y(n),e;if(i===l)return y(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,d=n.child;d;){if(d===a){u=!0,a=n,l=i;break}if(d===l){u=!0,l=n,a=i;break}d=d.sibling}if(!u){for(d=i.child;d;){if(d===a){u=!0,a=i,l=n;break}if(d===l){u=!0,l=i,a=n;break}d=d.sibling}if(!u)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,R=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),X=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Z:return"Profiler";case Y:return"StrictMode";case Q:return"Suspense";case U:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case X:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var Me=Array.isArray,M=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ue=[],fe=-1;function E(e){return{current:e}}function B(e){0>fe||(e.current=ue[fe],ue[fe]=null,fe--)}function K(e,t){fe++,ue[fe]=e.current,e.current=t}var F=E(null),ie=E(null),le=E(null),be=E(null);function lt(e,t){switch(K(le,t),K(ie,e),K(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qd(t),e=Vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(F),K(F,e)}function He(){B(F),B(ie),B(le)}function Jl(e){e.memoizedState!==null&&K(be,e);var t=F.current,a=Vd(t,e.type);t!==a&&(K(ie,e),K(F,a))}function Kn(e){ie.current===e&&(B(F),B(ie)),be.current===e&&(B(be),Ln._currentValue=J)}var Tr,yc;function ka(e){if(Tr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Tr=t&&t[1]||"",yc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tr+e+yc}var Cr=!1;function Rr(e,t){if(!e||Cr)return"";Cr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(_){var A=_}Reflect.construct(e,[],H)}else{try{H.call()}catch(_){A=_}e.call(H.prototype)}}else{try{throw Error()}catch(_){A=_}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(_){if(_&&A&&typeof _.stack=="string")return[_.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],d=i[1];if(u&&d){var v=u.split(`
`),C=d.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<C.length&&!C[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===C.length)for(l=v.length-1,n=C.length-1;1<=l&&0<=n&&v[l]!==C[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==C[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==C[n]){var D=`
`+v[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{Cr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function yp(e,t){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return e.child!==t&&t!==null?ka("Suspense Fallback"):ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return Rr(e.type,!1);case 11:return Rr(e.type.render,!1);case 1:return Rr(e.type,!0);case 31:return ka("Activity");default:return""}}function xc(e){try{var t="",a=null;do t+=yp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ar=Object.prototype.hasOwnProperty,_r=r.unstable_scheduleCallback,Or=r.unstable_cancelCallback,xp=r.unstable_shouldYield,Sp=r.unstable_requestPaint,dt=r.unstable_now,jp=r.unstable_getCurrentPriorityLevel,Sc=r.unstable_ImmediatePriority,jc=r.unstable_UserBlockingPriority,$n=r.unstable_NormalPriority,Ep=r.unstable_LowPriority,Ec=r.unstable_IdlePriority,zp=r.log,wp=r.unstable_setDisableYieldValue,Kl=null,mt=null;function sa(e){if(typeof zp=="function"&&wp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Kl,e)}catch{}}var pt=Math.clz32?Math.clz32:Cp,Np=Math.log,Tp=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(Np(e)/Tp|0)|0}var Wn=256,Fn=262144,In=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=La(l):(u&=d,u!==0?n=La(u):a||(a=d&~e,a!==0&&(n=La(a))))):(d=l&~i,d!==0?n=La(d):u!==0?n=La(u):a||(a=l&~e,a!==0&&(n=La(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function $l(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(){var e=In;return In<<=1,(In&62914560)===0&&(In=4194304),e}function Mr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Wl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ap(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,C=e.hiddenUpdates;for(a=u&~a;0<a;){var D=31-pt(a),H=1<<D;d[D]=0,v[D]=-1;var A=C[D];if(A!==null)for(C[D]=null,D=0;D<A.length;D++){var _=A[D];_!==null&&(_.lane&=-536870913)}a&=~H}l!==0&&wc(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function wc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Nc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Tc(e,t){var a=t&-t;return a=(a&42)!==0?1:Dr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Dr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cc(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:pm(e.type))}function Rc(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var fa=Math.random().toString(36).slice(2),We="__reactFiber$"+fa,it="__reactProps$"+fa,ll="__reactContainer$"+fa,kr="__reactEvents$"+fa,_p="__reactListeners$"+fa,Op="__reactHandles$"+fa,Ac="__reactResources$"+fa,Fl="__reactMarker$"+fa;function Lr(e){delete e[We],delete e[it],delete e[kr],delete e[_p],delete e[Op]}function nl(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Id(e);e!==null;){if(a=e[We])return a;e=Id(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[We]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Il(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function rl(e){var t=e[Ac];return t||(t=e[Ac]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Fl]=!0}var _c=new Set,Oc={};function Ha(e,t){ul(e,t),ul(e+"Capture",t)}function ul(e,t){for(Oc[e]=t,e=0;e<t.length;e++)_c.add(t[e])}var Mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mc={},Dc={};function Dp(e){return Ar.call(Dc,e)?!0:Ar.call(Mc,e)?!1:Mp.test(e)?Dc[e]=!0:(Mc[e]=!0,!1)}function ei(e,t,a){if(Dp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ti(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){if(!e._valueTracker){var t=Uc(e)?"checked":"value";e._valueTracker=Up(e,t,""+e[t])}}function kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Uc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kp=/[\n"\\]/g;function zt(e){return e.replace(kp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Br(e,t,a,l,n,i,u,d){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Yr(e,u,Et(t)):a!=null?Yr(e,u,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Et(d):e.removeAttribute("name")}function Lc(e,t,a,l,n,i,u,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Hr(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Hr(e)}function Yr(e,t,a){t==="number"&&ai(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ol(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Hc(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Bc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Me(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Hr(e)}function cl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Lp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Lp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qc(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Yc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Yc(e,i,t[i])}function qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function li(e){return Bp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Gr=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,fl=null;function Gc(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Br(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(o(90));Br(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&kc(l)}break e;case"textarea":Hc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ol(e,!!a.multiple,t,!1)}}}var Qr=!1;function Xc(e,t,a){if(Qr)return e(t,a);Qr=!0;try{var l=e(t);return l}finally{if(Qr=!1,(sl!==null||fl!==null)&&(Qi(),sl&&(t=sl,e=fl,fl=sl=null,Gc(t),e)))for(t=0;t<e.length;t++)Gc(e[t])}}function Pl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vr=!1;if(Jt)try{var en={};Object.defineProperty(en,"passive",{get:function(){Vr=!0}}),window.addEventListener("test",en,en),window.removeEventListener("test",en,en)}catch{Vr=!1}var da=null,Zr=null,ni=null;function Qc(){if(ni)return ni;var e,t=Zr,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return ni=n.slice(e,1<l?1-l:void 0)}function ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function Vc(){return!1}function rt(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:Vc,this.isPropagationStopped=Vc,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=rt(Ba),tn=j({},Ba,{view:0,detail:0}),Yp=rt(tn),Jr,Kr,an,oi=j({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==an&&(an&&e.type==="mousemove"?(Jr=e.screenX-an.screenX,Kr=e.screenY-an.screenY):Kr=Jr=0,an=e),Jr)},movementY:function(e){return"movementY"in e?e.movementY:Kr}}),Zc=rt(oi),qp=j({},oi,{dataTransfer:0}),Gp=rt(qp),Xp=j({},tn,{relatedTarget:0}),$r=rt(Xp),Qp=j({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=rt(Qp),Zp=j({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=rt(Zp),Kp=j({},Ba,{data:0}),Jc=rt(Kp),$p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function Wr(){return Ip}var Pp=j({},tn,{key:function(e){if(e.key){var t=$p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wr,charCode:function(e){return e.type==="keypress"?ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eh=rt(Pp),th=j({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=rt(th),ah=j({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wr}),lh=rt(ah),nh=j({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=rt(nh),rh=j({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=rt(rh),oh=j({},Ba,{newState:0,oldState:0}),ch=rt(oh),sh=[9,13,27,32],Fr=Jt&&"CompositionEvent"in window,ln=null;Jt&&"documentMode"in document&&(ln=document.documentMode);var fh=Jt&&"TextEvent"in window&&!ln,$c=Jt&&(!Fr||ln&&8<ln&&11>=ln),Wc=" ",Fc=!1;function Ic(e,t){switch(e){case"keyup":return sh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function dh(e,t){switch(e){case"compositionend":return Pc(t);case"keypress":return t.which!==32?null:(Fc=!0,Wc);case"textInput":return e=t.data,e===Wc&&Fc?null:e;default:return null}}function mh(e,t){if(dl)return e==="compositionend"||!Fr&&Ic(e,t)?(e=Qc(),ni=Zr=da=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $c&&t.locale!=="ko"?null:t.data;default:return null}}var ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ph[e.type]:t==="textarea"}function ts(e,t,a,l){sl?fl?fl.push(l):fl=[l]:sl=l,t=Fi(t,"onChange"),0<t.length&&(a=new ui("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var nn=null,rn=null;function hh(e){Hd(e,0)}function ci(e){var t=Il(e);if(kc(t))return e}function as(e,t){if(e==="change")return t}var ls=!1;if(Jt){var Ir;if(Jt){var Pr="oninput"in document;if(!Pr){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),Pr=typeof ns.oninput=="function"}Ir=Pr}else Ir=!1;ls=Ir&&(!document.documentMode||9<document.documentMode)}function is(){nn&&(nn.detachEvent("onpropertychange",rs),rn=nn=null)}function rs(e){if(e.propertyName==="value"&&ci(rn)){var t=[];ts(t,rn,e,Xr(e)),Xc(hh,t)}}function gh(e,t,a){e==="focusin"?(is(),nn=t,rn=a,nn.attachEvent("onpropertychange",rs)):e==="focusout"&&is()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(rn)}function bh(e,t){if(e==="click")return ci(t)}function yh(e,t){if(e==="input"||e==="change")return ci(t)}function xh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:xh;function un(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ar.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function os(e,t){var a=us(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=us(a)}}function cs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ss(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ai(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ai(e.document)}return t}function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sh=Jt&&"documentMode"in document&&11>=document.documentMode,ml=null,tu=null,on=null,au=!1;function fs(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||ml==null||ml!==ai(l)||(l=ml,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),on&&un(on,l)||(on=l,l=Fi(tu,"onSelect"),0<l.length&&(t=new ui("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},lu={},ds={};Jt&&(ds=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function qa(e){if(lu[e])return lu[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ds)return lu[e]=t[a];return e}var ms=qa("animationend"),ps=qa("animationiteration"),hs=qa("animationstart"),jh=qa("transitionrun"),Eh=qa("transitionstart"),zh=qa("transitioncancel"),gs=qa("transitionend"),vs=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function Dt(e,t){vs.set(e,t),Ha(t,[e])}var si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],hl=0,iu=0;function fi(){for(var e=hl,t=iu=hl=0;t<e;){var a=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&bs(a,n,i)}}function di(e,t,a,l){wt[hl++]=e,wt[hl++]=t,wt[hl++]=a,wt[hl++]=l,iu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ru(e,t,a,l){return di(e,t,a,l),mi(e)}function Ga(e,t){return di(e,null,null,t),mi(e)}function bs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function mi(e){if(50<An)throw An=0,go=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function wh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new wh(e,t,a,l)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ys(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function pi(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")uu(e)&&(u=1);else if(typeof e=="string")u=Ag(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=gt(31,a,t,n),e.elementType=ce,e.lanes=i,e;case G:return Xa(a.children,n,i,t);case Y:u=8,n|=24;break;case Z:return e=gt(12,a,t,n|2),e.elementType=Z,e.lanes=i,e;case Q:return e=gt(13,a,t,n),e.elementType=Q,e.lanes=i,e;case U:return e=gt(19,a,t,n),e.elementType=U,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:u=10;break e;case V:u=9;break e;case P:u=11;break e;case L:u=14;break e;case ee:u=16,l=null;break e}u=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=gt(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Xa(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function ou(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function xs(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function cu(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ss=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=Ss.get(e);return a!==void 0?a:(t={value:e,source:t,stack:xc(t)},Ss.set(e,t),t)}return{value:e,source:t,stack:xc(t)}}var vl=[],bl=0,hi=null,cn=0,Tt=[],Ct=0,ma=null,Yt=1,qt="";function $t(e,t){vl[bl++]=cn,vl[bl++]=hi,hi=e,cn=t}function js(e,t,a){Tt[Ct++]=Yt,Tt[Ct++]=qt,Tt[Ct++]=ma,ma=e;var l=Yt;e=qt;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Yt=1<<32-pt(t)+n|a<<n|l,qt=i+e}else Yt=1<<i|a<<n|l,qt=e}function su(e){e.return!==null&&($t(e,1),js(e,1,0))}function fu(e){for(;e===hi;)hi=vl[--bl],vl[bl]=null,cn=vl[--bl],vl[bl]=null;for(;e===ma;)ma=Tt[--Ct],Tt[Ct]=null,qt=Tt[--Ct],Tt[Ct]=null,Yt=Tt[--Ct],Tt[Ct]=null}function Es(e,t){Tt[Ct++]=Yt,Tt[Ct++]=qt,Tt[Ct++]=ma,Yt=t.id,qt=t.overflow,ma=e}var Fe=null,_e=null,ve=!1,pa=null,Rt=!1,du=Error(o(519));function ha(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sn(Nt(t,e)),du}function zs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[it]=l,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<On.length;a++)me(On[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Lc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),Bc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Gd(t.textContent,a)?(l.popover!=null&&(me("beforetoggle",t),me("toggle",t)),l.onScroll!=null&&me("scroll",t),l.onScrollEnd!=null&&me("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function ws(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Fe=Fe.return}}function yl(e){if(e!==Fe)return!1;if(!ve)return ws(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_o(e.type,e.memoizedProps)),a=!a),a&&_e&&ha(e),ws(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=Fd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=Fd(e)}else t===27?(t=_e,Ra(e.type)?(e=ko,ko=null,_e=e):_e=t):_e=Fe?_t(e.stateNode.nextSibling):null;return!0}function Qa(){_e=Fe=null,ve=!1}function mu(){var e=pa;return e!==null&&(st===null?st=e:st.push.apply(st,e),pa=null),e}function sn(e){pa===null?pa=[e]:pa.push(e)}var pu=E(null),Va=null,Wt=null;function ga(e,t,a){K(pu,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=pu.current,B(pu)}function hu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function gu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),hu(i.return,a,e),l||(u=null);break e}i=d.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),hu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function xl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var d=n.type;ht(n.pendingProps.value,u.value)||(e!==null?e.push(d):e=[d])}}else if(n===be.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Ln):e=[Ln])}n=n.return}e!==null&&gu(t,e,a,l),t.flags|=262144}function gi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Ns(Va,e)}function vi(e,t){return Va===null&&Za(e),Ns(e,t)}function Ns(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(o(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var Nh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Th=r.unstable_scheduleCallback,Ch=r.unstable_NormalPriority,Ge={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new Nh,data:new Map,refCount:0}}function fn(e){e.refCount--,e.refCount===0&&Th(Ch,function(){e.controller.abort()})}var dn=null,bu=0,Sl=0,jl=null;function Rh(e,t){if(dn===null){var a=dn=[];bu=0,Sl=jo(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return bu++,t.then(Ts,Ts),t}function Ts(){if(--bu===0&&dn!==null){jl!==null&&(jl.status="fulfilled");var e=dn;dn=null,Sl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ah(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Cs=M.S;M.S=function(e,t){dd=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Rh(e,t),Cs!==null&&Cs(e,t)};var Ja=E(null);function yu(){var e=Ja.current;return e!==null?e:Ce.pooledCache}function bi(e,t){t===null?K(Ja,Ja.current):K(Ja,t.pool)}function Rs(){var e=yu();return e===null?null:{parent:Ge._currentValue,pool:e}}var El=Error(o(460)),xu=Error(o(474)),yi=Error(o(542)),xi={then:function(){}};function As(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _s(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ms(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ms(e),e}throw $a=t,El}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,El):a}}var $a=null;function Os(){if($a===null)throw Error(o(459));var e=$a;return $a=null,e}function Ms(e){if(e===El||e===yi)throw Error(o(483))}var zl=null,mn=0;function Si(e){var t=mn;return mn+=1,zl===null&&(zl=[]),_s(zl,e,t)}function pn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ji(e,t){throw t.$$typeof===R?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ds(e){function t(w,S){if(e){var T=w.deletions;T===null?(w.deletions=[S],w.flags|=16):T.push(S)}}function a(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function l(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function n(w,S){return w=Kt(w,S),w.index=0,w.sibling=null,w}function i(w,S,T){return w.index=T,e?(T=w.alternate,T!==null?(T=T.index,T<S?(w.flags|=67108866,S):T):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function u(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function d(w,S,T,k){return S===null||S.tag!==6?(S=ou(T,w.mode,k),S.return=w,S):(S=n(S,T),S.return=w,S)}function v(w,S,T,k){var te=T.type;return te===G?D(w,S,T.props.children,k,T.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ee&&Ka(te)===S.type)?(S=n(S,T.props),pn(S,T),S.return=w,S):(S=pi(T.type,T.key,T.props,null,w.mode,k),pn(S,T),S.return=w,S)}function C(w,S,T,k){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=cu(T,w.mode,k),S.return=w,S):(S=n(S,T.children||[]),S.return=w,S)}function D(w,S,T,k,te){return S===null||S.tag!==7?(S=Xa(T,w.mode,k,te),S.return=w,S):(S=n(S,T),S.return=w,S)}function H(w,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ou(""+S,w.mode,T),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return T=pi(S.type,S.key,S.props,null,w.mode,T),pn(T,S),T.return=w,T;case q:return S=cu(S,w.mode,T),S.return=w,S;case ee:return S=Ka(S),H(w,S,T)}if(Me(S)||ne(S))return S=Xa(S,w.mode,T,null),S.return=w,S;if(typeof S.then=="function")return H(w,Si(S),T);if(S.$$typeof===X)return H(w,vi(w,S),T);ji(w,S)}return null}function A(w,S,T,k){var te=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return te!==null?null:d(w,S,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return T.key===te?v(w,S,T,k):null;case q:return T.key===te?C(w,S,T,k):null;case ee:return T=Ka(T),A(w,S,T,k)}if(Me(T)||ne(T))return te!==null?null:D(w,S,T,k,null);if(typeof T.then=="function")return A(w,S,Si(T),k);if(T.$$typeof===X)return A(w,S,vi(w,T),k);ji(w,T)}return null}function _(w,S,T,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return w=w.get(T)||null,d(S,w,""+k,te);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case O:return w=w.get(k.key===null?T:k.key)||null,v(S,w,k,te);case q:return w=w.get(k.key===null?T:k.key)||null,C(S,w,k,te);case ee:return k=Ka(k),_(w,S,T,k,te)}if(Me(k)||ne(k))return w=w.get(T)||null,D(S,w,k,te,null);if(typeof k.then=="function")return _(w,S,T,Si(k),te);if(k.$$typeof===X)return _(w,S,T,vi(S,k),te);ji(S,k)}return null}function W(w,S,T,k){for(var te=null,xe=null,I=S,se=S=0,he=null;I!==null&&se<T.length;se++){I.index>se?(he=I,I=null):he=I.sibling;var Se=A(w,I,T[se],k);if(Se===null){I===null&&(I=he);break}e&&I&&Se.alternate===null&&t(w,I),S=i(Se,S,se),xe===null?te=Se:xe.sibling=Se,xe=Se,I=he}if(se===T.length)return a(w,I),ve&&$t(w,se),te;if(I===null){for(;se<T.length;se++)I=H(w,T[se],k),I!==null&&(S=i(I,S,se),xe===null?te=I:xe.sibling=I,xe=I);return ve&&$t(w,se),te}for(I=l(I);se<T.length;se++)he=_(I,w,se,T[se],k),he!==null&&(e&&he.alternate!==null&&I.delete(he.key===null?se:he.key),S=i(he,S,se),xe===null?te=he:xe.sibling=he,xe=he);return e&&I.forEach(function(Da){return t(w,Da)}),ve&&$t(w,se),te}function ae(w,S,T,k){if(T==null)throw Error(o(151));for(var te=null,xe=null,I=S,se=S=0,he=null,Se=T.next();I!==null&&!Se.done;se++,Se=T.next()){I.index>se?(he=I,I=null):he=I.sibling;var Da=A(w,I,Se.value,k);if(Da===null){I===null&&(I=he);break}e&&I&&Da.alternate===null&&t(w,I),S=i(Da,S,se),xe===null?te=Da:xe.sibling=Da,xe=Da,I=he}if(Se.done)return a(w,I),ve&&$t(w,se),te;if(I===null){for(;!Se.done;se++,Se=T.next())Se=H(w,Se.value,k),Se!==null&&(S=i(Se,S,se),xe===null?te=Se:xe.sibling=Se,xe=Se);return ve&&$t(w,se),te}for(I=l(I);!Se.done;se++,Se=T.next())Se=_(I,w,se,Se.value,k),Se!==null&&(e&&Se.alternate!==null&&I.delete(Se.key===null?se:Se.key),S=i(Se,S,se),xe===null?te=Se:xe.sibling=Se,xe=Se);return e&&I.forEach(function(qg){return t(w,qg)}),ve&&$t(w,se),te}function Te(w,S,T,k){if(typeof T=="object"&&T!==null&&T.type===G&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case O:e:{for(var te=T.key;S!==null;){if(S.key===te){if(te=T.type,te===G){if(S.tag===7){a(w,S.sibling),k=n(S,T.props.children),k.return=w,w=k;break e}}else if(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ee&&Ka(te)===S.type){a(w,S.sibling),k=n(S,T.props),pn(k,T),k.return=w,w=k;break e}a(w,S);break}else t(w,S);S=S.sibling}T.type===G?(k=Xa(T.props.children,w.mode,k,T.key),k.return=w,w=k):(k=pi(T.type,T.key,T.props,null,w.mode,k),pn(k,T),k.return=w,w=k)}return u(w);case q:e:{for(te=T.key;S!==null;){if(S.key===te)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){a(w,S.sibling),k=n(S,T.children||[]),k.return=w,w=k;break e}else{a(w,S);break}else t(w,S);S=S.sibling}k=cu(T,w.mode,k),k.return=w,w=k}return u(w);case ee:return T=Ka(T),Te(w,S,T,k)}if(Me(T))return W(w,S,T,k);if(ne(T)){if(te=ne(T),typeof te!="function")throw Error(o(150));return T=te.call(T),ae(w,S,T,k)}if(typeof T.then=="function")return Te(w,S,Si(T),k);if(T.$$typeof===X)return Te(w,S,vi(w,T),k);ji(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(a(w,S.sibling),k=n(S,T),k.return=w,w=k):(a(w,S),k=ou(T,w.mode,k),k.return=w,w=k),u(w)):a(w,S)}return function(w,S,T,k){try{mn=0;var te=Te(w,S,T,k);return zl=null,te}catch(I){if(I===El||I===yi)throw I;var xe=gt(29,I,null,w.mode);return xe.lanes=k,xe.return=w,xe}}}var Wa=Ds(!0),Us=Ds(!1),va=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=mi(e),bs(e,null,a),t}return di(e,l,t,a),mi(e)}function hn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Nc(e,a)}}function Eu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var zu=!1;function gn(){if(zu){var e=jl;if(e!==null)throw e}}function vn(e,t,a,l){zu=!1;var n=e.updateQueue;va=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var v=d,C=v.next;v.next=null,u===null?i=C:u.next=C,u=v;var D=e.alternate;D!==null&&(D=D.updateQueue,d=D.lastBaseUpdate,d!==u&&(d===null?D.firstBaseUpdate=C:d.next=C,D.lastBaseUpdate=v))}if(i!==null){var H=n.baseState;u=0,D=C=v=null,d=i;do{var A=d.lane&-536870913,_=A!==d.lane;if(_?(pe&A)===A:(l&A)===A){A!==0&&A===Sl&&(zu=!0),D!==null&&(D=D.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var W=e,ae=d;A=t;var Te=a;switch(ae.tag){case 1:if(W=ae.payload,typeof W=="function"){H=W.call(Te,H,A);break e}H=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=ae.payload,A=typeof W=="function"?W.call(Te,H,A):W,A==null)break e;H=j({},H,A);break e;case 2:va=!0}}A=d.callback,A!==null&&(e.flags|=64,_&&(e.flags|=8192),_=n.callbacks,_===null?n.callbacks=[A]:_.push(A))}else _={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},D===null?(C=D=_,v=H):D=D.next=_,u|=A;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;_=d,d=_.next,_.next=null,n.lastBaseUpdate=_,n.shared.pending=null}}while(!0);D===null&&(v=H),n.baseState=v,n.firstBaseUpdate=C,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),za|=u,e.lanes=u,e.memoizedState=H}}function ks(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Ls(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ks(a[e],t)}var wl=E(null),Ei=E(0);function Hs(e,t){e=ra,K(Ei,e),K(wl,t),ra=e|t.baseLanes}function wu(){K(Ei,ra),K(wl,wl.current)}function Nu(){ra=Ei.current,B(wl),B(Ei)}var vt=E(null),At=null;function xa(e){var t=e.alternate;K(Be,Be.current&1),K(vt,e),At===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(At=e)}function Tu(e){K(Be,Be.current),K(vt,e),At===null&&(At=e)}function Bs(e){e.tag===22?(K(Be,Be.current),K(vt,e),At===null&&(At=e)):Sa()}function Sa(){K(Be,Be.current),K(vt,vt.current)}function bt(e){B(vt),At===e&&(At=null),B(Be)}var Be=E(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Do(a)||Uo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,oe=null,we=null,Xe=null,wi=!1,Nl=!1,Fa=!1,Ni=0,bn=0,Tl=null,_h=0;function ke(){throw Error(o(321))}function Cu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Ru(e,t,a,l,n,i){return It=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ef:Qu,Fa=!1,i=a(l,n),Fa=!1,Nl&&(i=qs(t,a,l,n)),Ys(e),i}function Ys(e){M.H=Sn;var t=we!==null&&we.next!==null;if(It=0,Xe=we=oe=null,wi=!1,bn=0,Tl=null,t)throw Error(o(300));e===null||Qe||(e=e.dependencies,e!==null&&gi(e)&&(Qe=!0))}function qs(e,t,a,l){oe=e;var n=0;do{if(Nl&&(Tl=null),bn=0,Nl=!1,25<=n)throw Error(o(301));if(n+=1,Xe=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=zf,i=t(a,l)}while(Nl);return i}function Oh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?yn(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(oe.flags|=1024),t}function Au(){var e=Ni!==0;return Ni=0,e}function _u(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ou(e){if(wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wi=!1}It=0,Xe=we=oe=null,Nl=!1,bn=Ni=0,Tl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?oe.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(we===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Xe===null?oe.memoizedState:Xe.next;if(t!==null)Xe=t,we=e;else{if(e===null)throw oe.alternate===null?Error(o(467)):Error(o(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Xe===null?oe.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yn(e){var t=bn;return bn+=1,Tl===null&&(Tl=[]),e=_s(Tl,e,t),t=oe,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ef:Qu),e}function Ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yn(e);if(e.$$typeof===X)return Ie(e)}throw Error(o(438,String(e)))}function Mu(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ti(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ge;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function Ri(e){var t=Ye();return Du(t,we,e)}function Du(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=u=null,v=null,C=t,D=!1;do{var H=C.lane&-536870913;if(H!==C.lane?(pe&H)===H:(It&H)===H){var A=C.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),H===Sl&&(D=!0);else if((It&A)===A){C=C.next,A===Sl&&(D=!0);continue}else H={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(d=v=H,u=i):v=v.next=H,oe.lanes|=A,za|=A;H=C.action,Fa&&a(i,H),i=C.hasEagerState?C.eagerState:a(i,H)}else A={lane:H,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(d=v=A,u=i):v=v.next=A,oe.lanes|=H,za|=H;C=C.next}while(C!==null&&C!==t);if(v===null?u=i:v.next=d,!ht(i,e.memoizedState)&&(Qe=!0,D&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=v,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Uu(e){var t=Ye(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ht(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Gs(e,t,a){var l=oe,n=Ye(),i=ve;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var u=!ht((we||n).memoizedState,a);if(u&&(n.memoizedState=a,Qe=!0),n=n.queue,Hu(Vs.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},Qs.bind(null,l,n,a,t),null),Ce===null)throw Error(o(349));i||(It&127)!==0||Xs(l,t,a)}return a}function Xs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Ti(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qs(e,t,a,l){t.value=a,t.getSnapshot=l,Zs(t)&&Js(e)}function Vs(e,t,a){return a(function(){Zs(t)&&Js(e)})}function Zs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Js(e){var t=Ga(e,2);t!==null&&ft(t,e,2)}function ku(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Fa){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Ks(e,t,a,l){return e.baseState=a,Du(e,we,typeof l=="function"?l:Pt)}function Mh(e,t,a,l,n){if(Oi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,$s(t,i)):(i.next=a.next,t.pending=a.next=i)}}function $s(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,u={};M.T=u;try{var d=a(n,l),v=M.S;v!==null&&v(u,d),Ws(e,t,d)}catch(C){Lu(e,t,C)}finally{i!==null&&u.types!==null&&(i.types=u.types),M.T=i}}else try{i=a(n,l),Ws(e,t,i)}catch(C){Lu(e,t,C)}}function Ws(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Fs(e,t,l)},function(l){return Lu(e,t,l)}):Fs(e,t,a)}function Fs(e,t,a){t.status="fulfilled",t.value=a,Is(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,$s(e,a)))}function Lu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Is(t),t=t.next;while(t!==l)}e.action=null}function Is(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ps(e,t){return t}function ef(e,t){if(ve){var a=Ce.formState;if(a!==null){e:{var l=oe;if(ve){if(_e){t:{for(var n=_e,i=Rt;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){_e=_t(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},a.queue=l,a=xf.bind(null,oe,l),l.dispatch=a,l=ku(!1),i=Xu.bind(null,oe,!1,l.queue),l=nt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Mh.bind(null,oe,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function tf(e){var t=Ye();return af(t,we,e)}function af(e,t,a){if(t=Du(e,t,Ps)[0],e=Ri(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=yn(t)}catch(u){throw u===El?yi:u}else l=t;t=Ye();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,Cl(9,{destroy:void 0},Dh.bind(null,n,a),null)),[l,i,e]}function Dh(e,t){e.action=t}function lf(e){var t=Ye(),a=we;if(a!==null)return af(t,a,e);Ye(),t=t.memoizedState,a=Ye();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Ti(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function nf(){return Ye().memoizedState}function Ai(e,t,a,l){var n=nt();oe.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function _i(e,t,a,l){var n=Ye();l=l===void 0?null:l;var i=n.memoizedState.inst;we!==null&&l!==null&&Cu(l,we.memoizedState.deps)?n.memoizedState=Cl(t,i,a,l):(oe.flags|=e,n.memoizedState=Cl(1|t,i,a,l))}function rf(e,t){Ai(8390656,8,e,t)}function Hu(e,t){_i(2048,8,e,t)}function Uh(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Ti(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function uf(e){var t=Ye().memoizedState;return Uh({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function of(e,t){return _i(4,2,e,t)}function cf(e,t){return _i(4,4,e,t)}function sf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ff(e,t,a){a=a!=null?a.concat([e]):null,_i(4,4,sf.bind(null,t,e),a)}function Bu(){}function df(e,t){var a=Ye();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Cu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function mf(e,t){var a=Ye();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Cu(t,l[1]))return l[0];if(l=e(),Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function Yu(e,t,a){return a===void 0||(It&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=pd(),oe.lanes|=e,za|=e,a)}function pf(e,t,a,l){return ht(a,t)?a:wl.current!==null?(e=Yu(e,a,l),ht(e,t)||(Qe=!0),e):(It&42)===0||(It&1073741824)!==0&&(pe&261930)===0?(Qe=!0,e.memoizedState=a):(e=pd(),oe.lanes|=e,za|=e,t)}function hf(e,t,a,l,n){var i=x.p;x.p=i!==0&&8>i?i:8;var u=M.T,d={};M.T=d,Xu(e,!1,t,a);try{var v=n(),C=M.S;if(C!==null&&C(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var D=Ah(v,l);xn(e,t,D,St(e))}else xn(e,t,l,St(e))}catch(H){xn(e,t,{then:function(){},status:"rejected",reason:H},St())}finally{x.p=i,u!==null&&d.types!==null&&(u.types=d.types),M.T=u}}function kh(){}function qu(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=gf(e).queue;hf(e,n,t,J,a===null?kh:function(){return vf(e),a(l)})}function gf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vf(e){var t=gf(e);t.next===null&&(t=e.alternate.memoizedState),xn(e,t.next.queue,{},St())}function Gu(){return Ie(Ln)}function bf(){return Ye().memoizedState}function yf(){return Ye().memoizedState}function Lh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=ba(a);var l=ya(t,e,a);l!==null&&(ft(l,t,a),hn(l,t,a)),t={cache:vu()},e.payload=t;return}t=t.return}}function Hh(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Oi(e)?Sf(t,a):(a=ru(e,t,a,l),a!==null&&(ft(a,e,l),jf(a,t,l)))}function xf(e,t,a){var l=St();xn(e,t,a,l)}function xn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oi(e))Sf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,d=i(u,a);if(n.hasEagerState=!0,n.eagerState=d,ht(d,u))return di(e,t,n,0),Ce===null&&fi(),!1}catch{}if(a=ru(e,t,n,l),a!==null)return ft(a,e,l),jf(a,t,l),!0}return!1}function Xu(e,t,a,l){if(l={lane:2,revertLane:jo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Oi(e)){if(t)throw Error(o(479))}else t=ru(e,a,l,2),t!==null&&ft(t,e,2)}function Oi(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Sf(e,t){Nl=wi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function jf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Nc(e,a)}}var Sn={readContext:Ie,use:Ci,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};Sn.useEffectEvent=ke;var Ef={readContext:Ie,use:Ci,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:rf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ai(4194308,4,sf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){Ai(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var l=e();if(Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=nt();if(a!==void 0){var n=a(t);if(Fa){sa(!0);try{a(t)}finally{sa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Hh.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=ku(e);var t=e.queue,a=xf.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(e,t){var a=nt();return Yu(a,e,t)},useTransition:function(){var e=ku(!1);return e=hf.bind(null,oe,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=oe,n=nt();if(ve){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ce===null)throw Error(o(349));(pe&127)!==0||Xs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,rf(Vs.bind(null,l,i,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Qs.bind(null,l,i,a,t),null),a},useId:function(){var e=nt(),t=Ce.identifierPrefix;if(ve){var a=qt,l=Yt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ni++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=_h++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gu,useFormState:ef,useActionState:ef,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Xu.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Mu,useCacheRefresh:function(){return nt().memoizedState=Lh.bind(null,oe)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:Ie,use:Ci,useCallback:df,useContext:Ie,useEffect:Hu,useImperativeHandle:ff,useInsertionEffect:of,useLayoutEffect:cf,useMemo:mf,useReducer:Ri,useRef:nf,useState:function(){return Ri(Pt)},useDebugValue:Bu,useDeferredValue:function(e,t){var a=Ye();return pf(a,we.memoizedState,e,t)},useTransition:function(){var e=Ri(Pt)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:yn(e),t]},useSyncExternalStore:Gs,useId:bf,useHostTransitionStatus:Gu,useFormState:tf,useActionState:tf,useOptimistic:function(e,t){var a=Ye();return Ks(a,we,e,t)},useMemoCache:Mu,useCacheRefresh:yf};Qu.useEffectEvent=uf;var zf={readContext:Ie,use:Ci,useCallback:df,useContext:Ie,useEffect:Hu,useImperativeHandle:ff,useInsertionEffect:of,useLayoutEffect:cf,useMemo:mf,useReducer:Uu,useRef:nf,useState:function(){return Uu(Pt)},useDebugValue:Bu,useDeferredValue:function(e,t){var a=Ye();return we===null?Yu(a,e,t):pf(a,we.memoizedState,e,t)},useTransition:function(){var e=Uu(Pt)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:yn(e),t]},useSyncExternalStore:Gs,useId:bf,useHostTransitionStatus:Gu,useFormState:lf,useActionState:lf,useOptimistic:function(e,t){var a=Ye();return we!==null?Ks(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:yf};zf.useEffectEvent=uf;function Vu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),hn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),hn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(ft(t,e,a),hn(t,e,a))}};function wf(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!un(a,l)||!un(n,i):!0}function Nf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Zu.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Tf(e){si(e)}function Cf(e){console.error(e)}function Rf(e){si(e)}function Mi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Af(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ju(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Mi(e,t)},a}function _f(e){return e=ba(e),e.tag=3,e}function Of(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Af(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Af(t,a,l),typeof n!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Bh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return At===null?Vi():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),yo(e,l,n)),!1;case 22:return a.flags|=65536,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),yo(e,l,n)),!1}throw Error(o(435,a.tag))}return yo(e,l,n),Vi(),!1}if(ve)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==du&&(e=Error(o(422),{cause:l}),sn(Nt(e,a)))):(l!==du&&(t=Error(o(423),{cause:l}),sn(Nt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Nt(l,a),n=Ju(e.stateNode,l,n),Eu(e,n),Le!==4&&(Le=2)),!1;var i=Error(o(520),{cause:l});if(i=Nt(i,a),Rn===null?Rn=[i]:Rn.push(i),Le!==4&&(Le=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Ju(a.stateNode,l,e),Eu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=_f(n),Of(n,e,a,l),Eu(a,n),!1}a=a.return}while(a!==null);return!1}var Ku=Error(o(461)),Qe=!1;function Pe(e,t,a,l){t.child=e===null?Us(t,null,a,l):Wa(t,e.child,a,l)}function Mf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var d in l)d!=="ref"&&(u[d]=l[d])}else u=l;return Za(t),l=Ru(e,t,a,u,i,n),d=Au(),e!==null&&!Qe?(_u(e,t,n),ea(e,t,n)):(ve&&d&&su(t),t.flags|=1,Pe(e,t,l,n),t.child)}function Df(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!uu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Uf(e,t,i,l,n)):(e=pi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!ao(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:un,a(u,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(un(i,l)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=l=i,ao(e,n))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ea(e,t,n)}return $u(e,t,a,l,n)}function kf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Lf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bi(t,i!==null?i.cachePool:null),i!==null?Hs(t,i):wu(),Bs(t);else return l=t.lanes=536870912,Lf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(bi(t,i.cachePool),Hs(t,i),Sa(),t.memoizedState=null):(e!==null&&bi(t,null),wu(),Sa());return Pe(e,t,n,a),t.child}function jn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lf(e,t,a,l,n){var i=yu();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&bi(t,null),wu(),Bs(t),e!==null&&xl(e,t,l,!0),t.childLanes=n,null}function Di(e,t){return t=ki({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hf(e,t,a){return Wa(t,e.child,null,a),e=Di(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Yh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(l.mode==="hidden")return e=Di(t,l),t.lanes=536870912,jn(null,e);if(Tu(t),(e=_e)?(e=Wd(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=xs(e),a.return=t,t.child=a,Fe=t,_e=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Di(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Tu(t),n)if(t.flags&256)t.flags&=-257,t=Hf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Qe||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Qe||n){if(l=Ce,l!==null&&(u=Tc(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ga(e,u),ft(l,e,u),Ku;Vi(),t=Hf(e,t,a)}else e=i.treeContext,_e=_t(u.nextSibling),Fe=t,ve=!0,pa=null,Rt=!1,e!==null&&Es(t,e),t=Di(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ui(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function $u(e,t,a,l,n){return Za(t),a=Ru(e,t,a,l,void 0,n),l=Au(),e!==null&&!Qe?(_u(e,t,n),ea(e,t,n)):(ve&&l&&su(t),t.flags|=1,Pe(e,t,a,n),t.child)}function Bf(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=qs(t,l,a,n),Ys(e),l=Au(),e!==null&&!Qe?(_u(e,t,i),ea(e,t,i)):(ve&&l&&su(t),t.flags|=1,Pe(e,t,a,i),t.child)}function Yf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=gl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ie(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Su(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ie(u):gl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Vu(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Zu.enqueueReplaceState(i,i.state,null),vn(t,l,i,n),gn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=Ia(a,d);i.props=v;var C=i.context,D=a.contextType;u=gl,typeof D=="object"&&D!==null&&(u=Ie(D));var H=a.getDerivedStateFromProps;D=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||C!==u)&&Nf(t,i,l,u),va=!1;var A=t.memoizedState;i.state=A,vn(t,l,i,n),gn(),C=t.memoizedState,d||A!==C||va?(typeof H=="function"&&(Vu(t,a,H,l),C=t.memoizedState),(v=va||wf(t,a,v,l,A,C,u))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=u,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,ju(e,t),u=t.memoizedProps,D=Ia(a,u),i.props=D,H=t.pendingProps,A=i.context,C=a.contextType,v=gl,typeof C=="object"&&C!==null&&(v=Ie(C)),d=a.getDerivedStateFromProps,(C=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==H||A!==v)&&Nf(t,i,l,v),va=!1,A=t.memoizedState,i.state=A,vn(t,l,i,n),gn();var _=t.memoizedState;u!==H||A!==_||va||e!==null&&e.dependencies!==null&&gi(e.dependencies)?(typeof d=="function"&&(Vu(t,a,d,l),_=t.memoizedState),(D=va||wf(t,a,D,l,A,_,v)||e!==null&&e.dependencies!==null&&gi(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,_,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,_,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=_),i.props=l,i.state=_,i.context=v,l=D):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ui(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Wa(t,e.child,null,n),t.child=Wa(t,null,a,n)):Pe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function qf(e,t,a,l){return Qa(),t.flags|=256,Pe(e,t,a,l),t.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(e){return{baseLanes:e,cachePool:Rs()}}function Iu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function Gf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(n?xa(t):Sa(),(e=_e)?(e=Wd(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=xs(e),a.return=t,t.child=a,Fe=t,_e=null)):e=null,e===null)throw ha(t);return Uo(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(Sa(),n=t.mode,d=ki({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Fu(a),l.childLanes=Iu(e,u,a),t.memoizedState=Wu,jn(null,l)):(xa(t),Pu(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(xa(t),t.flags&=-257,t=eo(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),d=l.fallback,n=t.mode,l=ki({mode:"visible",children:l.children},n),d=Xa(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Wa(t,e.child,null,a),l=t.child,l.memoizedState=Fu(a),l.childLanes=Iu(e,u,a),t.memoizedState=Wu,t=jn(null,l));else if(xa(t),Uo(d)){if(u=d.nextSibling&&d.nextSibling.dataset,u)var C=u.dgst;u=C,l=Error(o(419)),l.stack="",l.digest=u,sn({value:l,source:null,stack:null}),t=eo(e,t,a)}else if(Qe||xl(e,t,a,!1),u=(a&e.childLanes)!==0,Qe||u){if(u=Ce,u!==null&&(l=Tc(u,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Ga(e,l),ft(u,e,l),Ku;Do(d)||Vi(),t=eo(e,t,a)}else Do(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,_e=_t(d.nextSibling),Fe=t,ve=!0,pa=null,Rt=!1,e!==null&&Es(t,e),t=Pu(t,l.children),t.flags|=4096);return t}return n?(Sa(),d=l.fallback,n=t.mode,v=e.child,C=v.sibling,l=Kt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,C!==null?d=Kt(C,d):(d=Xa(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,jn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Fu(a):(n=d.cachePool,n!==null?(v=Ge._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=Rs(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Iu(e,u,a),t.memoizedState=Wu,jn(e.child,l)):(xa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Pu(e,t){return t=ki({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ki(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function eo(e,t,a){return Wa(t,e.child,null,a),e=Pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),hu(e.return,t,a)}function to(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Qf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Be.current,d=(u&2)!==0;if(d?(u=u&1|2,t.flags|=128):u&=1,K(Be,u),Pe(e,t,l,a),l=ve?cn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xf(e,a,t);else if(e.tag===19)Xf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&zi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),to(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&zi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}to(t,!0,a,null,i,l);break;case"together":to(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ao(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gi(e)))}function qh(e,t,a){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),ga(t,Ge,e.memoizedState.cache),Qa();break;case 27:case 5:Jl(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Gf(e,t,a):(xa(t),e=ea(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Qf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),K(Be,Be.current),l)break;return null;case 22:return t.lanes=0,kf(e,t,a,t.pendingProps);case 24:ga(t,Ge,e.memoizedState.cache)}return ea(e,t,a)}function Vf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!ao(e,a)&&(t.flags&128)===0)return Qe=!1,qh(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,ve&&(t.flags&1048576)!==0&&js(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")uu(e)?(l=Ia(e,l),t.tag=1,t=Yf(null,t,e,l,a)):(t.tag=0,t=$u(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===P){t.tag=11,t=Mf(null,t,e,l,a);break e}else if(n===L){t.tag=14,t=Df(null,t,e,l,a);break e}}throw t=Re(e)||e,Error(o(306,t,""))}}return t;case 0:return $u(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ia(l,t.pendingProps),Yf(e,t,l,n,a);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,ju(e,t),vn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ga(t,Ge,l),l!==i.cache&&gu(t,[Ge],a,!0),gn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qf(e,t,l,a);break e}else if(l!==n){n=Nt(Error(o(424)),t),sn(n),t=qf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=_t(e.firstChild),Fe=t,ve=!0,pa=null,Rt=!0,a=Us(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===n){t=ea(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Ui(e,t),e===null?(a=am(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,l=Ii(le.current).createElement(a),l[We]=t,l[it]=e,et(l,a,e),Je(l),t.stateNode=l):t.memoizedState=am(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Jl(t),e===null&&ve&&(l=t.stateNode=Pd(t.type,t.pendingProps,le.current),Fe=t,Rt=!0,n=_e,Ra(t.type)?(ko=n,_e=_t(l.firstChild)):_e=n),Pe(e,t,t.pendingProps.children,a),Ui(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((n=l=_e)&&(l=vg(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Fe=t,_e=_t(l.firstChild),Rt=!1,n=!0):n=!1),n||ha(t)),Jl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,_o(n,i)?l=null:u!==null&&_o(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ru(e,t,Oh,null,null,a),Ln._currentValue=n),Ui(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&ve&&((e=a=_e)&&(a=bg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Fe=t,_e=null,e=!0):e=!1),e||ha(t)),null;case 13:return Gf(e,t,a);case 4:return lt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wa(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return Mf(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ga(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Ie(n),l=l(n),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return Df(e,t,t.type,t.pendingProps,a);case 15:return Uf(e,t,t.type,t.pendingProps,a);case 19:return Qf(e,t,a);case 31:return Yh(e,t,a);case 22:return kf(e,t,a,t.pendingProps);case 24:return Za(t),l=Ie(Ge),e===null?(n=yu(),n===null&&(n=Ce,i=vu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Su(t),ga(t,Ge,n)):((e.lanes&a)!==0&&(ju(e,t),vn(t,null,null,a),gn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ga(t,Ge,l)):(l=i.cache,ga(t,Ge,l),l!==n.cache&&gu(t,[Ge],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function ta(e){e.flags|=4}function lo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(bd())e.flags|=8192;else throw $a=xi,xu}else e.flags&=-16777217}function Zf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!um(t))if(bd())e.flags|=8192;else throw $a=xi,xu}function Li(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zc():536870912,e.lanes|=t,Ol|=t)}function En(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Gh(e,t,a){var l=t.pendingProps;switch(fu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Ge),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mu())),Oe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Oe(t),Zf(t,i)):(Oe(t),lo(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Oe(t),Zf(t,i)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Oe(t),lo(t,n,e,l,a)),null;case 27:if(Kn(t),a=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Oe(t),null}e=F.current,yl(t)?zs(t):(e=Pd(n,l,a),t.stateNode=e,ta(t))}return Oe(t),null;case 5:if(Kn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Oe(t),null}if(i=F.current,yl(t))zs(t);else{var u=Ii(le.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[We]=t,i[it]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(et(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Oe(t),lo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=le.current,yl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Gd(e.nodeValue,a)),e||ha(t,!0)}else e=Ii(e).createTextNode(l),e[We]=t,t.stateNode=e}return Oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else a=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Oe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),n=!1}else n=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Li(t,t.updateQueue),Oe(t),null);case 4:return He(),e===null&&No(t.stateNode.containerInfo),Oe(t),null;case 10:return Ft(t.type),Oe(t),null;case 19:if(B(Be),l=t.memoizedState,l===null)return Oe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)En(l,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=zi(e),i!==null){for(t.flags|=128,En(l,!1),e=i.updateQueue,t.updateQueue=e,Li(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ys(a,e),a=a.sibling;return K(Be,Be.current&1|2),ve&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&dt()>Gi&&(t.flags|=128,n=!0,En(l,!1),t.lanes=4194304)}else{if(!n)if(e=zi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Li(t,e),En(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ve)return Oe(t),null}else 2*dt()-l.renderingStartTime>Gi&&a!==536870912&&(t.flags|=128,n=!0,En(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=dt(),e.sibling=null,a=Be.current,K(Be,n?a&1|2:a&1),ve&&$t(t,l.treeForkCount),e):(Oe(t),null);case 22:case 23:return bt(t),Nu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&Li(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&B(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Ge),Oe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Xh(e,t){switch(fu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Ge),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(o(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Be),null;case 4:return He(),null;case 10:return Ft(t.type),null;case 22:case 23:return bt(t),Nu(),e!==null&&B(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Ge),null;case 25:return null;default:return null}}function Jf(e,t){switch(fu(t),t.tag){case 3:Ft(Ge),He();break;case 26:case 27:case 5:Kn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:B(Be);break;case 10:Ft(t.type);break;case 22:case 23:bt(t),Nu(),e!==null&&B(Ja);break;case 24:Ft(Ge)}}function zn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(d){ze(t,t.return,d)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,d=u.destroy;if(d!==void 0){u.destroy=void 0,n=t;var v=a,C=d;try{C()}catch(D){ze(n,v,D)}}}l=l.next}while(l!==i)}}catch(D){ze(t,t.return,D)}}function Kf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ls(t,a)}catch(l){ze(e,e.return,l)}}}function $f(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ze(e,t,l)}}function wn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ze(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ze(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ze(e,t,n)}else a.current=null}function Wf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ze(e,e.return,n)}}function no(e,t,a){try{var l=e.stateNode;fg(l,e.type,a,t),l[it]=t}catch(n){ze(e,e.return,n)}}function Ff(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function io(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ro(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ro(e,t,a),e=e.sibling;e!==null;)ro(e,t,a),e=e.sibling}function Hi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Hi(e,t,a),e=e.sibling;e!==null;)Hi(e,t,a),e=e.sibling}function If(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,l,a),t[We]=e,t[it]=a}catch(i){ze(e,e.return,i)}}var aa=!1,Ve=!1,uo=!1,Pf=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Qh(e,t){if(e=e.containerInfo,Ro=ir,e=ss(e),eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,d=-1,v=-1,C=0,D=0,H=e,A=null;t:for(;;){for(var _;H!==a||n!==0&&H.nodeType!==3||(d=u+n),H!==i||l!==0&&H.nodeType!==3||(v=u+l),H.nodeType===3&&(u+=H.nodeValue.length),(_=H.firstChild)!==null;)A=H,H=_;for(;;){if(H===e)break t;if(A===a&&++C===n&&(d=u),A===i&&++D===l&&(v=u),(_=H.nextSibling)!==null)break;H=A,A=H.parentNode}H=_}a=d===-1||v===-1?null:{start:d,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ao={focusedElem:e,selectionRange:a},ir=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var W=Ia(a.type,n);e=l.getSnapshotBeforeUpdate(W,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){ze(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Mo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function ed(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&zn(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){ze(a,a.return,u)}else{var n=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ze(a,a.return,u)}}l&64&&Kf(a),l&512&&wn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ls(e,t)}catch(u){ze(a,a.return,u)}}break;case 27:t===null&&l&4&&If(a);case 26:case 5:na(e,a),t===null&&l&4&&Wf(a),l&512&&wn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&ld(e,a);break;case 13:na(e,a),l&4&&nd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ph.bind(null,a),yg(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Ve,n=aa;var i=Ve;aa=l,(Ve=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Ve=i}break;case 30:break;default:na(e,a)}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ut=!1;function la(e,t,a){for(a=a.child;a!==null;)ad(e,t,a),a=a.sibling}function ad(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Kl,a)}catch{}switch(a.tag){case 26:Ve||Gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Gt(a,t);var l=De,n=ut;Ra(a.type)&&(De=a.stateNode,ut=!1),la(e,t,a),Dn(a.stateNode),De=l,ut=n;break;case 5:Ve||Gt(a,t);case 6:if(l=De,n=ut,De=null,la(e,t,a),De=l,ut=n,De!==null)if(ut)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(i){ze(a,t,i)}else try{De.removeChild(a.stateNode)}catch(i){ze(a,t,i)}break;case 18:De!==null&&(ut?(e=De,Kd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Kd(De,a.stateNode));break;case 4:l=De,n=ut,De=a.stateNode.containerInfo,ut=!0,la(e,t,a),De=l,ut=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Ve||ja(4,a,t),la(e,t,a);break;case 1:Ve||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&$f(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Ve=(l=Ve)||a.memoizedState!==null,la(e,t,a),Ve=l;break;default:la(e,t,a)}}function ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){ze(t,t.return,a)}}}function nd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){ze(t,t.return,a)}}function Vh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pf),t;default:throw Error(o(435,e.tag))}}function Bi(e,t){var a=Vh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=eg.bind(null,e,l);l.then(n,n)}})}function ot(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 27:if(Ra(d.type)){De=d.stateNode,ut=!1;break e}break;case 5:De=d.stateNode,ut=!1;break e;case 3:case 4:De=d.stateNode.containerInfo,ut=!0;break e}d=d.return}if(De===null)throw Error(o(160));ad(i,u,n),De=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)id(t,e),t=t.sibling}var Ut=null;function id(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(t,e),ct(e),l&4&&(ja(3,e,e.return),zn(3,e),ja(5,e,e.return));break;case 1:ot(t,e),ct(e),l&512&&(Ve||a===null||Gt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(ot(t,e),ct(e),l&512&&(Ve||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Fl]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),et(i,l,a),i[We]=e,Je(i),l=i;break e;case"link":var u=im("link","href",n).get(l+(a.href||""));if(u){for(var d=0;d<u.length;d++)if(i=u[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;case"meta":if(u=im("meta","content",n).get(l+(a.content||""))){for(d=0;d<u.length;d++)if(i=u[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[We]=e,Je(i),l=i}e.stateNode=l}else rm(n,e.type,e.stateNode);else e.stateNode=nm(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?rm(n,e.type,e.stateNode):nm(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&no(e,e.memoizedProps,a.memoizedProps)}break;case 27:ot(t,e),ct(e),l&512&&(Ve||a===null||Gt(a,a.return)),a!==null&&l&4&&no(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ot(t,e),ct(e),l&512&&(Ve||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{cl(n,"")}catch(W){ze(e,e.return,W)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,no(e,n,a!==null?a.memoizedProps:n)),l&1024&&(uo=!0);break;case 6:if(ot(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(W){ze(e,e.return,W)}}break;case 3:if(tr=null,n=Ut,Ut=Pi(t.containerInfo),ot(t,e),Ut=n,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(W){ze(e,e.return,W)}uo&&(uo=!1,rd(e));break;case 4:l=Ut,Ut=Pi(e.stateNode.containerInfo),ot(t,e),ct(e),Ut=l;break;case 12:ot(t,e),ct(e);break;case 31:ot(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 13:ot(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qi=dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,C=aa,D=Ve;if(aa=C||n,Ve=D||v,ot(t,e),Ve=D,aa=C,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||aa||Ve||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{d=v.stateNode;var H=v.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(W){ze(v,v.return,W)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch(W){ze(v,v.return,W)}}}else if(t.tag===18){if(a===null){v=t;try{var _=v.stateNode;n?$d(_,!0):$d(v.stateNode,!1)}catch(W){ze(v,v.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Bi(e,a))));break;case 19:ot(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 30:break;case 21:break;default:ot(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ff(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=io(e);Hi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(cl(u,""),a.flags&=-33);var d=io(e);Hi(e,d,u);break;case 3:case 4:var v=a.stateNode.containerInfo,C=io(e);ro(e,C,v);break;default:throw Error(o(161))}}catch(D){ze(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ed(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),Pa(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&$f(t,t.return,a),Pa(t);break;case 27:Dn(t.stateNode);case 26:case 5:Gt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),zn(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(C){ze(l,l.return,C)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)ks(v[n],d)}catch(C){ze(l,l.return,C)}}a&&u&64&&Kf(i),wn(i,i.return);break;case 27:If(i);case 26:case 5:ia(n,i,a),a&&l===null&&u&4&&Wf(i),wn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&u&4&&ld(n,i);break;case 13:ia(n,i,a),a&&u&4&&nd(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),wn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function oo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fn(a))}function co(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fn(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ud(e,t,a,l),t=t.sibling}function ud(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),n&2048&&zn(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fn(e)));break;case 12:if(n&2048){kt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,d=i.onPostCommit;typeof d=="function"&&d(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){ze(t,t.return,v)}}else kt(e,t,a,l);break;case 31:kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?kt(e,t,a,l):Nn(e,t):i._visibility&2?kt(e,t,a,l):(i._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&oo(u,t);break;case 24:kt(e,t,a,l),n&2048&&co(t.alternate,t);break;default:kt(e,t,a,l)}}function Rl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,d=a,v=l,C=u.flags;switch(u.tag){case 0:case 11:case 15:Rl(i,u,d,v,n),zn(8,u);break;case 23:break;case 22:var D=u.stateNode;u.memoizedState!==null?D._visibility&2?Rl(i,u,d,v,n):Nn(i,u):(D._visibility|=2,Rl(i,u,d,v,n)),n&&C&2048&&oo(u.alternate,u);break;case 24:Rl(i,u,d,v,n),n&&C&2048&&co(u.alternate,u);break;default:Rl(i,u,d,v,n)}t=t.sibling}}function Nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Nn(a,l),n&2048&&oo(l.alternate,l);break;case 24:Nn(a,l),n&2048&&co(l.alternate,l);break;default:Nn(a,l)}t=t.sibling}}var Tn=8192;function Al(e,t,a){if(e.subtreeFlags&Tn)for(e=e.child;e!==null;)od(e,t,a),e=e.sibling}function od(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&Tn&&e.memoizedState!==null&&_g(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Ut;Ut=Pi(e.stateNode.containerInfo),Al(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Tn,Tn=16777216,Al(e,t,a),Tn=l):Al(e,t,a));break;default:Al(e,t,a)}}function cd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,fd(l,e)}cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sd(e),e=e.sibling}function sd(e){switch(e.tag){case 0:case 11:case 15:Cn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Cn(e);break;case 12:Cn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yi(e)):Cn(e);break;default:Cn(e)}}function Yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,fd(l,e)}cd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Yi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Yi(t));break;default:Yi(t)}e=e.sibling}}function fd(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ke=l;else e:for(a=e;Ke!==null;){l=Ke;var n=l.sibling,i=l.return;if(td(l),l===a){Ke=null;break e}if(n!==null){n.return=i,Ke=n;break e}Ke=i}}}var Zh={getCacheForType:function(e){var t=Ie(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(Ge).controller.signal}},Jh=typeof WeakMap=="function"?WeakMap:Map,je=0,Ce=null,de=null,pe=0,Ee=0,yt=null,Ea=!1,_l=!1,so=!1,ra=0,Le=0,za=0,el=0,fo=0,xt=0,Ol=0,Rn=null,st=null,mo=!1,qi=0,dd=0,Gi=1/0,Xi=null,wa=null,Ze=0,Na=null,Ml=null,ua=0,po=0,ho=null,md=null,An=0,go=null;function St(){return(je&2)!==0&&pe!==0?pe&-pe:M.T!==null?jo():Cc()}function pd(){if(xt===0)if((pe&536870912)===0||ve){var e=Fn;Fn<<=1,(Fn&3932160)===0&&(Fn=262144),xt=e}else xt=536870912;return e=vt.current,e!==null&&(e.flags|=32),xt}function ft(e,t,a){(e===Ce&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Ta(e,pe,xt,!1)),Wl(e,a),((je&2)===0||e!==Ce)&&(e===Ce&&((je&2)===0&&(el|=a),Le===4&&Ta(e,pe,xt,!1)),Xt(e))}function hd(e,t,a){if((je&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||$l(e,t),n=l?Wh(e,t):bo(e,t,!0),i=l;do{if(n===0){_l&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Kh(a)){n=bo(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var d=e;n=Rn;var v=d.current.memoizedState.isDehydrated;if(v&&(Dl(d,u).flags|=256),u=bo(d,u,!1),u!==2){if(so&&!v){d.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,xt,!Ea);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=qi+300-dt(),10<n)){if(Ta(l,t,xt,!Ea),Pn(l,0,!0)!==0)break e;ua=t,l.timeoutHandle=Zd(gd.bind(null,l,a,st,Xi,mo,t,xt,el,Ol,Ea,i,"Throttled",-0,0),n);break e}gd(l,a,st,Xi,mo,t,xt,el,Ol,Ea,i,null,-0,0)}}break}while(!0);Xt(e)}function gd(e,t,a,l,n,i,u,d,v,C,D,H,A,_){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},od(t,i,H);var W=(i&62914560)===i?qi-dt():(i&4194048)===i?dd-dt():0;if(W=Og(H,W),W!==null){ua=i,e.cancelPendingCommit=W(zd.bind(null,e,t,i,a,l,n,u,d,v,D,H,null,A,_)),Ta(e,i,u,!C);return}}zd(e,t,i,a,l,n,u,d,v)}function Kh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~fo,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&wc(e,a,t)}function Qi(){return(je&6)===0?(_n(0),!1):!0}function vo(){if(de!==null){if(Ee===0)var e=de.return;else e=de,Wt=Va=null,Ou(e),zl=null,mn=0,e=de;for(;e!==null;)Jf(e.alternate,e),e=e.return;de=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,pg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,vo(),Ce=e,de=a=Kt(e.current,null),pe=t,Ee=0,yt=null,Ea=!1,_l=$l(e,t),so=!1,Ol=xt=fo=el=za=Le=0,st=Rn=null,mo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return ra=t,fi(),a}function vd(e,t){oe=null,M.H=Sn,t===El||t===yi?(t=Os(),Ee=3):t===xu?(t=Os(),Ee=4):Ee=t===Ku?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,de===null&&(Le=1,Mi(e,Nt(t,e.current)))}function bd(){var e=vt.current;return e===null?!0:(pe&4194048)===pe?At===null:(pe&62914560)===pe||(pe&536870912)!==0?e===At:!1}function yd(){var e=M.H;return M.H=Sn,e===null?Sn:e}function xd(){var e=M.A;return M.A=Zh,e}function Vi(){Le=4,Ea||(pe&4194048)!==pe&&vt.current!==null||(_l=!0),(za&134217727)===0&&(el&134217727)===0||Ce===null||Ta(Ce,pe,xt,!1)}function bo(e,t,a){var l=je;je|=2;var n=yd(),i=xd();(Ce!==e||pe!==t)&&(Xi=null,Dl(e,t)),t=!1;var u=Le;e:do try{if(Ee!==0&&de!==null){var d=de,v=yt;switch(Ee){case 8:vo(),u=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var C=Ee;if(Ee=0,yt=null,Ul(e,d,v,C),a&&_l){u=0;break e}break;default:C=Ee,Ee=0,yt=null,Ul(e,d,v,C)}}$h(),u=Le;break}catch(D){vd(e,D)}while(!0);return t&&e.shellSuspendCounter++,Wt=Va=null,je=l,M.H=n,M.A=i,de===null&&(Ce=null,pe=0,fi()),u}function $h(){for(;de!==null;)Sd(de)}function Wh(e,t){var a=je;je|=2;var l=yd(),n=xd();Ce!==e||pe!==t?(Xi=null,Gi=dt()+500,Dl(e,t)):_l=$l(e,t);e:do try{if(Ee!==0&&de!==null){t=de;var i=yt;t:switch(Ee){case 1:Ee=0,yt=null,Ul(e,t,i,1);break;case 2:case 9:if(As(i)){Ee=0,yt=null,jd(t);break}t=function(){Ee!==2&&Ee!==9||Ce!==e||(Ee=7),Xt(e)},i.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:As(i)?(Ee=0,yt=null,jd(t)):(Ee=0,yt=null,Ul(e,t,i,7));break;case 5:var u=null;switch(de.tag){case 26:u=de.memoizedState;case 5:case 27:var d=de;if(u?um(u):d.stateNode.complete){Ee=0,yt=null;var v=d.sibling;if(v!==null)de=v;else{var C=d.return;C!==null?(de=C,Zi(C)):de=null}break t}}Ee=0,yt=null,Ul(e,t,i,5);break;case 6:Ee=0,yt=null,Ul(e,t,i,6);break;case 8:vo(),Le=6;break e;default:throw Error(o(462))}}Fh();break}catch(D){vd(e,D)}while(!0);return Wt=Va=null,M.H=l,M.A=n,je=a,de!==null?0:(Ce=null,pe=0,fi(),Le)}function Fh(){for(;de!==null&&!xp();)Sd(de)}function Sd(e){var t=Vf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Zi(e):de=t}function jd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Bf(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=Bf(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:Ou(t);default:Jf(a,t),t=de=ys(t,ra),t=Vf(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Zi(e):de=t}function Ul(e,t,a,l){Wt=Va=null,Ou(t),zl=null,mn=0;var n=t.return;try{if(Bh(e,n,t,a,pe)){Le=1,Mi(e,Nt(a,e.current)),de=null;return}}catch(i){if(n!==null)throw de=n,i;Le=1,Mi(e,Nt(a,e.current)),de=null;return}t.flags&32768?(ve||l===1?e=!0:_l||(pe&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ed(t,e)):Zi(t)}function Zi(e){var t=e;do{if((t.flags&32768)!==0){Ed(t,Ea);return}e=t.return;var a=Gh(t.alternate,t,ra);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Le===0&&(Le=5)}function Ed(e,t){do{var a=Xh(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Le=6,de=null}function zd(e,t,a,l,n,i,u,d,v){e.cancelPendingCommit=null;do Ji();while(Ze!==0);if((je&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=iu,Ap(e,a,i,u,d,v),e===Ce&&(de=Ce=null,pe=0),Ml=t,Na=e,ua=a,po=i,ho=n,md=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tg($n,function(){return Rd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=x.p,x.p=2,u=je,je|=4;try{Qh(e,t,a)}finally{je=u,x.p=n,M.T=l}}Ze=1,wd(),Nd(),Td()}}function wd(){if(Ze===1){Ze=0;var e=Na,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=x.p;x.p=2;var n=je;je|=4;try{id(t,e);var i=Ao,u=ss(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(u!==d&&d&&d.ownerDocument&&cs(d.ownerDocument.documentElement,d)){if(v!==null&&eu(d)){var C=v.start,D=v.end;if(D===void 0&&(D=C),"selectionStart"in d)d.selectionStart=C,d.selectionEnd=Math.min(D,d.value.length);else{var H=d.ownerDocument||document,A=H&&H.defaultView||window;if(A.getSelection){var _=A.getSelection(),W=d.textContent.length,ae=Math.min(v.start,W),Te=v.end===void 0?ae:Math.min(v.end,W);!_.extend&&ae>Te&&(u=Te,Te=ae,ae=u);var w=os(d,ae),S=os(d,Te);if(w&&S&&(_.rangeCount!==1||_.anchorNode!==w.node||_.anchorOffset!==w.offset||_.focusNode!==S.node||_.focusOffset!==S.offset)){var T=H.createRange();T.setStart(w.node,w.offset),_.removeAllRanges(),ae>Te?(_.addRange(T),_.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),_.addRange(T))}}}}for(H=[],_=d;_=_.parentNode;)_.nodeType===1&&H.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<H.length;d++){var k=H[d];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}ir=!!Ro,Ao=Ro=null}finally{je=n,x.p=l,M.T=a}}e.current=t,Ze=2}}function Nd(){if(Ze===2){Ze=0;var e=Na,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=x.p;x.p=2;var n=je;je|=4;try{ed(e,t.alternate,t)}finally{je=n,x.p=l,M.T=a}}Ze=3}}function Td(){if(Ze===4||Ze===3){Ze=0,Sp();var e=Na,t=Ml,a=ua,l=md;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Ml=Na=null,Cd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wa=null),Ur(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=x.p,x.p=2,M.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var d=l[u];i(d.value,{componentStack:d.stack})}}finally{M.T=t,x.p=n}}(ua&3)!==0&&Ji(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===go?An++:(An=0,go=e):An=0,_n(0)}}function Cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fn(t)))}function Ji(){return wd(),Nd(),Td(),Rd()}function Rd(){if(Ze!==5)return!1;var e=Na,t=po;po=0;var a=Ur(ua),l=M.T,n=x.p;try{x.p=32>a?32:a,M.T=null,a=ho,ho=null;var i=Na,u=ua;if(Ze=0,Ml=Na=null,ua=0,(je&6)!==0)throw Error(o(331));var d=je;if(je|=4,sd(i.current),ud(i,i.current,u,a),je=d,_n(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Kl,i)}catch{}return!0}finally{x.p=n,M.T=l,Cd(e,t)}}function Ad(e,t,a){t=Nt(a,t),t=Ju(e.stateNode,t,2),e=ya(e,t,2),e!==null&&(Wl(e,2),Xt(e))}function ze(e,t,a){if(e.tag===3)Ad(e,e,a);else for(;t!==null;){if(t.tag===3){Ad(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=Nt(a,e),a=_f(2),l=ya(t,a,2),l!==null&&(Of(a,l,t,e),Wl(l,2),Xt(l));break}}t=t.return}}function yo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Jh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(so=!0,n.add(a),e=Ih.bind(null,e,t,a),t.then(e,e))}function Ih(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(pe&a)===a&&(Le===4||Le===3&&(pe&62914560)===pe&&300>dt()-qi?(je&2)===0&&Dl(e,0):fo|=a,Ol===pe&&(Ol=0)),Xt(e)}function _d(e,t){t===0&&(t=zc()),e=Ga(e,t),e!==null&&(Wl(e,t),Xt(e))}function Ph(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),_d(e,a)}function eg(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),_d(e,a)}function tg(e,t){return _r(e,t)}var Ki=null,kl=null,xo=!1,$i=!1,So=!1,Ca=0;function Xt(e){e!==kl&&e.next===null&&(kl===null?Ki=kl=e:kl=kl.next=e),$i=!0,xo||(xo=!0,lg())}function _n(e,t){if(!So&&$i){So=!0;do for(var a=!1,l=Ki;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(u&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Ud(l,i))}else i=pe,i=Pn(l,l===Ce?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||$l(l,i)||(a=!0,Ud(l,i));l=l.next}while(a);So=!1}}function ag(){Od()}function Od(){$i=xo=!1;var e=0;Ca!==0&&mg()&&(e=Ca);for(var t=dt(),a=null,l=Ki;l!==null;){var n=l.next,i=Md(l,t);i===0?(l.next=null,a===null?Ki=n:a.next=n,n===null&&(kl=a)):(a=l,(e!==0||(i&3)!==0)&&($i=!0)),l=n}Ze!==0&&Ze!==5||_n(e),Ca!==0&&(Ca=0)}function Md(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-pt(i),d=1<<u,v=n[u];v===-1?((d&a)===0||(d&l)!==0)&&(n[u]=Rp(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=Ce,a=pe,a=Pn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Or(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$l(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Or(l),Ur(a)){case 2:case 8:a=jc;break;case 32:a=$n;break;case 268435456:a=Ec;break;default:a=$n}return l=Dd.bind(null,e),a=_r(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Or(l),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ji()&&e.callbackNode!==a)return null;var l=pe;return l=Pn(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(hd(e,l,t),Md(e,dt()),e.callbackNode!=null&&e.callbackNode===a?Dd.bind(null,e):null)}function Ud(e,t){if(Ji())return null;hd(e,t,!0)}function lg(){hg(function(){(je&6)!==0?_r(Sc,ag):Od()})}function jo(){if(Ca===0){var e=Sl;e===0&&(e=Wn,Wn<<=1,(Wn&261888)===0&&(Wn=256)),Ca=e}return Ca}function kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:li(""+e)}function Ld(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ng(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=kd((n[it]||null).action),u=l.submitter;u&&(t=(t=u[it]||null)?kd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var d=new ui("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var v=u?Ld(n,u):new FormData(n);qu(a,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=u?Ld(n,u):new FormData(n),qu(a,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var Eo=0;Eo<nu.length;Eo++){var zo=nu[Eo],ig=zo.toLowerCase(),rg=zo[0].toUpperCase()+zo.slice(1);Dt(ig,"on"+rg)}Dt(ms,"onAnimationEnd"),Dt(ps,"onAnimationIteration"),Dt(hs,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(jh,"onTransitionRun"),Dt(Eh,"onTransitionStart"),Dt(zh,"onTransitionCancel"),Dt(gs,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function Hd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var d=l[u],v=d.instance,C=d.currentTarget;if(d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=C;try{i(n)}catch(D){si(D)}n.currentTarget=null,i=v}else for(u=0;u<l.length;u++){if(d=l[u],v=d.instance,C=d.currentTarget,d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=C;try{i(n)}catch(D){si(D)}n.currentTarget=null,i=v}}}}function me(e,t){var a=t[kr];a===void 0&&(a=t[kr]=new Set);var l=e+"__bubble";a.has(l)||(Bd(t,e,2,!1),a.add(l))}function wo(e,t,a){var l=0;t&&(l|=4),Bd(a,e,l,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function No(e){if(!e[Wi]){e[Wi]=!0,_c.forEach(function(a){a!=="selectionchange"&&(ug.has(a)||wo(a,!1,e),wo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,wo("selectionchange",!1,t))}}function Bd(e,t,a,l){switch(pm(t)){case 2:var n=Ug;break;case 8:n=kg;break;default:n=qo}a=n.bind(null,t,a,e),n=void 0,!Vr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function To(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var d=l.stateNode.containerInfo;if(d===n)break;if(u===4)for(u=l.return;u!==null;){var v=u.tag;if((v===3||v===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;d!==null;){if(u=nl(d),u===null)return;if(v=u.tag,v===5||v===6||v===26||v===27){l=i=u;continue e}d=d.parentNode}}l=l.return}Xc(function(){var C=i,D=Xr(a),H=[];e:{var A=vs.get(e);if(A!==void 0){var _=ui,W=e;switch(e){case"keypress":if(ii(a)===0)break e;case"keydown":case"keyup":_=eh;break;case"focusin":W="focus",_=$r;break;case"focusout":W="blur",_=$r;break;case"beforeblur":case"afterblur":_=$r;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=lh;break;case ms:case ps:case hs:_=Vp;break;case gs:_=ih;break;case"scroll":case"scrollend":_=Yp;break;case"wheel":_=uh;break;case"copy":case"cut":case"paste":_=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Kc;break;case"toggle":case"beforetoggle":_=ch}var ae=(t&4)!==0,Te=!ae&&(e==="scroll"||e==="scrollend"),w=ae?A!==null?A+"Capture":null:A;ae=[];for(var S=C,T;S!==null;){var k=S;if(T=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||T===null||w===null||(k=Pl(S,w),k!=null&&ae.push(Mn(S,k,T))),Te)break;S=S.return}0<ae.length&&(A=new _(A,W,null,a,D),H.push({event:A,listeners:ae}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",A&&a!==Gr&&(W=a.relatedTarget||a.fromElement)&&(nl(W)||W[ll]))break e;if((_||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,_?(W=a.relatedTarget||a.toElement,_=C,W=W?nl(W):null,W!==null&&(Te=p(W),ae=W.tag,W!==Te||ae!==5&&ae!==27&&ae!==6)&&(W=null)):(_=null,W=C),_!==W)){if(ae=Zc,k="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Kc,k="onPointerLeave",w="onPointerEnter",S="pointer"),Te=_==null?A:Il(_),T=W==null?A:Il(W),A=new ae(k,S+"leave",_,a,D),A.target=Te,A.relatedTarget=T,k=null,nl(D)===C&&(ae=new ae(w,S+"enter",W,a,D),ae.target=T,ae.relatedTarget=Te,k=ae),Te=k,_&&W)t:{for(ae=og,w=_,S=W,T=0,k=w;k;k=ae(k))T++;k=0;for(var te=S;te;te=ae(te))k++;for(;0<T-k;)w=ae(w),T--;for(;0<k-T;)S=ae(S),k--;for(;T--;){if(w===S||S!==null&&w===S.alternate){ae=w;break t}w=ae(w),S=ae(S)}ae=null}else ae=null;_!==null&&Yd(H,A,_,ae,!1),W!==null&&Te!==null&&Yd(H,Te,W,ae,!0)}}e:{if(A=C?Il(C):window,_=A.nodeName&&A.nodeName.toLowerCase(),_==="select"||_==="input"&&A.type==="file")var xe=as;else if(es(A))if(ls)xe=yh;else{xe=vh;var I=gh}else _=A.nodeName,!_||_.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?C&&qr(C.elementType)&&(xe=as):xe=bh;if(xe&&(xe=xe(e,C))){ts(H,xe,a,D);break e}I&&I(e,A,C),e==="focusout"&&C&&A.type==="number"&&C.memoizedProps.value!=null&&Yr(A,"number",A.value)}switch(I=C?Il(C):window,e){case"focusin":(es(I)||I.contentEditable==="true")&&(ml=I,tu=C,on=null);break;case"focusout":on=tu=ml=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,fs(H,a,D);break;case"selectionchange":if(Sh)break;case"keydown":case"keyup":fs(H,a,D)}var se;if(Fr)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else dl?Ic(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&($c&&a.locale!=="ko"&&(dl||he!=="onCompositionStart"?he==="onCompositionEnd"&&dl&&(se=Qc()):(da=D,Zr="value"in da?da.value:da.textContent,dl=!0)),I=Fi(C,he),0<I.length&&(he=new Jc(he,e,null,a,D),H.push({event:he,listeners:I}),se?he.data=se:(se=Pc(a),se!==null&&(he.data=se)))),(se=fh?dh(e,a):mh(e,a))&&(he=Fi(C,"onBeforeInput"),0<he.length&&(I=new Jc("onBeforeInput","beforeinput",null,a,D),H.push({event:I,listeners:he}),I.data=se)),ng(H,e,C,a,D)}Hd(H,t)})}function Mn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Fi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Pl(e,a),n!=null&&l.unshift(Mn(e,n,i)),n=Pl(e,t),n!=null&&l.push(Mn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function og(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var d=a,v=d.alternate,C=d.stateNode;if(d=d.tag,v!==null&&v===l)break;d!==5&&d!==26&&d!==27||C===null||(v=C,n?(C=Pl(a,i),C!=null&&u.unshift(Mn(a,C,v))):n||(C=Pl(a,i),C!=null&&u.push(Mn(a,C,v)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var cg=/\r\n?/g,sg=/\u0000|\uFFFD/g;function qd(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(sg,"")}function Gd(e,t){return t=qd(t),qd(e)===t}function Ne(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||cl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&cl(e,""+l);break;case"className":ti(e,"class",l);break;case"tabIndex":ti(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ti(e,a,l);break;case"style":qc(e,l,i);break;case"data":if(t!=="object"){ti(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=li(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",n.name,n,null),Ne(e,t,"formEncType",n.formEncType,n,null),Ne(e,t,"formMethod",n.formMethod,n,null),Ne(e,t,"formTarget",n.formTarget,n,null)):(Ne(e,t,"encType",n.encType,n,null),Ne(e,t,"method",n.method,n,null),Ne(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=li(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=li(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":me("beforetoggle",e),me("toggle",e),ei(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ei(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hp.get(a)||a,ei(e,a,l))}}function Co(e,t,a,l,n,i){switch(a){case"style":qc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?cl(e,l):(typeof l=="number"||typeof l=="bigint")&&cl(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ei(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,i,u,a,null)}}n&&Ne(e,t,"srcSet",a.srcSet,a,null),l&&Ne(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var d=i=u=n=null,v=null,C=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":u=D;break;case"checked":v=D;break;case"defaultChecked":C=D;break;case"value":i=D;break;case"defaultValue":d=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:Ne(e,t,l,D,a,null)}}Lc(e,i,d,v,C,u,n,!1);return;case"select":me("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":u=d;break;case"multiple":l=d;default:Ne(e,t,n,d,a,null)}t=i,a=u,e.multiple=!!l,t!=null?ol(e,!!l,t,!1):a!=null&&ol(e,!!l,a,!0);return;case"textarea":me("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(d=a[u],d!=null))switch(u){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:Ne(e,t,u,d,a,null)}Bc(e,l,n,i);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ne(e,t,v,l,a,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<On.length;l++)me(On[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ne(e,t,C,l,a,null)}return;default:if(qr(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&Co(e,t,D,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Ne(e,t,d,l,a,null))}function fg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,d=null,v=null,C=null,D=null;for(_ in a){var H=a[_];if(a.hasOwnProperty(_)&&H!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":v=H;default:l.hasOwnProperty(_)||Ne(e,t,_,null,l,H)}}for(var A in l){var _=l[A];if(H=a[A],l.hasOwnProperty(A)&&(_!=null||H!=null))switch(A){case"type":i=_;break;case"name":n=_;break;case"checked":C=_;break;case"defaultChecked":D=_;break;case"value":u=_;break;case"defaultValue":d=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:_!==H&&Ne(e,t,A,_,l,H)}}Br(e,u,d,v,C,D,i,n);return;case"select":_=u=d=A=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":_=v;default:l.hasOwnProperty(i)||Ne(e,t,i,null,l,v)}for(n in l)if(i=l[n],v=a[n],l.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":A=i;break;case"defaultValue":d=i;break;case"multiple":u=i;default:i!==v&&Ne(e,t,n,i,l,v)}t=d,a=u,l=_,A!=null?ol(e,!!a,A,!1):!!l!=!!a&&(t!=null?ol(e,!!a,t,!0):ol(e,!!a,a?[]:"",!1));return;case"textarea":_=A=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ne(e,t,d,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":A=n;break;case"defaultValue":_=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&Ne(e,t,u,n,l,i)}Hc(e,A,_);return;case"option":for(var W in a)A=a[W],a.hasOwnProperty(W)&&A!=null&&!l.hasOwnProperty(W)&&(W==="selected"?e.selected=!1:Ne(e,t,W,null,l,A));for(v in l)A=l[v],_=a[v],l.hasOwnProperty(v)&&A!==_&&(A!=null||_!=null)&&(v==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ne(e,t,v,A,l,_));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)A=a[ae],a.hasOwnProperty(ae)&&A!=null&&!l.hasOwnProperty(ae)&&Ne(e,t,ae,null,l,A);for(C in l)if(A=l[C],_=a[C],l.hasOwnProperty(C)&&A!==_&&(A!=null||_!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:Ne(e,t,C,A,l,_)}return;default:if(qr(t)){for(var Te in a)A=a[Te],a.hasOwnProperty(Te)&&A!==void 0&&!l.hasOwnProperty(Te)&&Co(e,t,Te,void 0,l,A);for(D in l)A=l[D],_=a[D],!l.hasOwnProperty(D)||A===_||A===void 0&&_===void 0||Co(e,t,D,A,l,_);return}}for(var w in a)A=a[w],a.hasOwnProperty(w)&&A!=null&&!l.hasOwnProperty(w)&&Ne(e,t,w,null,l,A);for(H in l)A=l[H],_=a[H],!l.hasOwnProperty(H)||A===_||A==null&&_==null||Ne(e,t,H,A,l,_)}function Xd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,d=n.duration;if(i&&d&&Xd(u)){for(u=0,d=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],C=v.startTime;if(C>d)break;var D=v.transferSize,H=v.initiatorType;D&&Xd(H)&&(v=v.responseEnd,u+=D*(v<d?1:(d-C)/(v-C)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ro=null,Ao=null;function Ii(e){return e.nodeType===9?e:e.ownerDocument}function Qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oo=null;function mg(){var e=window.event;return e&&e.type==="popstate"?e===Oo?!1:(Oo=e,!0):(Oo=null,!1)}var Zd=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(e){return Jd.resolve(null).then(e).catch(gg)}:Zd;function gg(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Kd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Dn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Dn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,d=i.nodeName;i[Fl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Dn(e.ownerDocument.body);a=n}while(a);Yl(t)}function $d(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Mo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mo(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function bg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Wd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Do(e){return e.data==="$?"||e.data==="$~"}function Uo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ko=null;function Fd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Pd(e,t,a){switch(t=Ii(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Dn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lr(e)}var Ot=new Map,em=new Set;function Pi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=x.d;x.d={f:xg,r:Sg,D:jg,C:Eg,L:zg,m:wg,X:Tg,S:Ng,M:Cg};function xg(){var e=oa.f(),t=Qi();return e||t}function Sg(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?vf(t):oa.r(e)}var Ll=typeof document>"u"?null:document;function tm(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var n=zt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),em.has(n)||(em.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),et(t,"link",e),Je(t),l.head.appendChild(t)))}}function jg(e){oa.D(e),tm("dns-prefetch",e,null)}function Eg(e,t){oa.C(e,t),tm("preconnect",e,t)}function zg(e,t,a){oa.L(e,t,a);var l=Ll;if(l&&e&&t){var n='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+zt(a.imageSizes)+'"]')):n+='[href="'+zt(e)+'"]';var i=n;switch(t){case"style":i=Hl(e);break;case"script":i=Bl(e)}Ot.has(i)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Un(i))||t==="script"&&l.querySelector(kn(i))||(t=l.createElement("link"),et(t,"link",e),Je(t),l.head.appendChild(t)))}}function wg(e,t){oa.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!Ot.has(i)&&(e=j({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(kn(i)))return}l=a.createElement("link"),et(l,"link",e),Je(l),a.head.appendChild(l)}}}function Ng(e,t,a){oa.S(e,t,a);var l=Ll;if(l&&e){var n=rl(l).hoistableStyles,i=Hl(e);t=t||"default";var u=n.get(i);if(!u){var d={loading:0,preload:null};if(u=l.querySelector(Un(i)))d.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Lo(e,a);var v=u=l.createElement("link");Je(v),et(v,"link",e),v._p=new Promise(function(C,D){v.onload=C,v.onerror=D}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,er(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:d},n.set(i,u)}}}function Tg(e,t){oa.X(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(kn(n)),i||(e=j({src:e,async:!0},t),(t=Ot.get(n))&&Ho(e,t),i=a.createElement("script"),Je(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Cg(e,t){oa.M(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(kn(n)),i||(e=j({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Ho(e,t),i=a.createElement("script"),Je(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function am(e,t,a,l){var n=(n=le.current)?Pi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Hl(a.href),a=rl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hl(a.href);var i=rl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Un(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||Rg(n,e,a,u.state))),t&&l===null)throw Error(o(528,""));return u}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(a),a=rl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Hl(e){return'href="'+zt(e)+'"'}function Un(e){return'link[rel="stylesheet"]['+e+"]"}function lm(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Rg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Je(t),e.head.appendChild(t))}function Bl(e){return'[src="'+zt(e)+'"]'}function kn(e){return"script[async]"+e}function nm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(l)return t.instance=l,Je(l),l;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Je(l),et(l,"style",n),er(l,a.precedence,e),t.instance=l;case"stylesheet":n=Hl(a.href);var i=e.querySelector(Un(n));if(i)return t.state.loading|=4,t.instance=i,Je(i),i;l=lm(a),(n=Ot.get(n))&&Lo(l,n),i=(e.ownerDocument||e).createElement("link"),Je(i);var u=i;return u._p=new Promise(function(d,v){u.onload=d,u.onerror=v}),et(i,"link",l),t.state.loading|=4,er(i,a.precedence,e),t.instance=i;case"script":return i=Bl(a.src),(n=e.querySelector(kn(i)))?(t.instance=n,Je(n),n):(l=a,(n=Ot.get(i))&&(l=j({},a),Ho(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Je(n),et(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,er(l,a.precedence,e));return t.instance}function er(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var d=l[u];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Lo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ho(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var tr=null;function im(e,t,a){if(tr===null){var l=new Map,n=tr=new Map;n.set(a,l)}else n=tr,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Fl]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var d=l.get(u);d?d.push(i):l.set(u,[i])}}return l}function rm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ag(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function um(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _g(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Hl(l.href),i=t.querySelector(Un(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ar.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Je(i);return}i=t.ownerDocument||t,l=lm(l),(n=Ot.get(n))&&Lo(l,n),i=i.createElement("link"),Je(i);var u=i;u._p=new Promise(function(d,v){u.onload=d,u.onerror=v}),et(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ar.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Bo=0;function Og(e,t){return e.stylesheets&&e.count===0&&nr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&nr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Bo===0&&(Bo=62500*dg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Bo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function ar(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lr=null;function nr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lr=new Map,t.forEach(Mg,e),lr=null,ar.call(e))}function Mg(e,t){if(!(t.state.loading&4)){var a=lr.get(e);if(a)var l=a.get(null);else{a=new Map,lr.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=ar.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Ln={$$typeof:X,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Dg(e,t,a,l,n,i,u,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.hiddenUpdates=Mr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function om(e,t,a,l,n,i,u,d,v,C,D,H){return e=new Dg(e,t,a,u,v,C,D,H,d),t=1,i===!0&&(t|=24),i=gt(3,null,null,t),e.current=i,i.stateNode=e,t=vu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Su(i),e}function cm(e){return e?(e=gl,e):gl}function sm(e,t,a,l,n,i){n=cm(n),l.context===null?l.context=n:l.pendingContext=n,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(ft(a,e,t),hn(a,e,t))}function fm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Yo(e,t){fm(e,t),(e=e.alternate)&&fm(e,t)}function dm(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ft(t,e,67108864),Yo(e,67108864)}}function mm(e){if(e.tag===13||e.tag===31){var t=St();t=Dr(t);var a=Ga(e,t);a!==null&&ft(a,e,t),Yo(e,t)}}var ir=!0;function Ug(e,t,a,l){var n=M.T;M.T=null;var i=x.p;try{x.p=2,qo(e,t,a,l)}finally{x.p=i,M.T=n}}function kg(e,t,a,l){var n=M.T;M.T=null;var i=x.p;try{x.p=8,qo(e,t,a,l)}finally{x.p=i,M.T=n}}function qo(e,t,a,l){if(ir){var n=Go(l);if(n===null)To(e,t,l,rr,a),hm(e,l);else if(Hg(n,e,t,a,l))l.stopPropagation();else if(hm(e,l),t&4&&-1<Lg.indexOf(e)){for(;n!==null;){var i=il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=La(i.pendingLanes);if(u!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;u;){var v=1<<31-pt(u);d.entanglements[1]|=v,u&=~v}Xt(i),(je&6)===0&&(Gi=dt()+500,_n(0))}}break;case 31:case 13:d=Ga(i,2),d!==null&&ft(d,i,2),Qi(),Yo(i,2)}if(i=Go(l),i===null&&To(e,t,l,rr,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else To(e,t,l,null,a)}}function Go(e){return e=Xr(e),Xo(e)}var rr=null;function Xo(e){if(rr=null,e=nl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return rr=e,null}function pm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jp()){case Sc:return 2;case jc:return 8;case $n:case Ep:return 32;case Ec:return 268435456;default:return 32}default:return 32}}var Qo=!1,Aa=null,_a=null,Oa=null,Hn=new Map,Bn=new Map,Ma=[],Lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hm(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function Yn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&dm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Hg(e,t,a,l,n){switch(t){case"focusin":return Aa=Yn(Aa,e,t,a,l,n),!0;case"dragenter":return _a=Yn(_a,e,t,a,l,n),!0;case"mouseover":return Oa=Yn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Hn.set(i,Yn(Hn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Bn.set(i,Yn(Bn.get(i)||null,e,t,a,l,n)),!0}return!1}function gm(e){var t=nl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){mm(a)});return}}else if(t===31){if(t=z(a),t!==null){e.blockedOn=t,Rc(e.priority,function(){mm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Go(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Gr=l,a.target.dispatchEvent(l),Gr=null}else return t=il(a),t!==null&&dm(t),e.blockedOn=a,!1;t.shift()}return!0}function vm(e,t,a){ur(e)&&a.delete(t)}function Bg(){Qo=!1,Aa!==null&&ur(Aa)&&(Aa=null),_a!==null&&ur(_a)&&(_a=null),Oa!==null&&ur(Oa)&&(Oa=null),Hn.forEach(vm),Bn.forEach(vm)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Bg)))}var cr=null;function bm(e){cr!==e&&(cr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cr===e&&(cr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Xo(l||a)===null)continue;break}var i=il(a);i!==null&&(e.splice(t,3),t-=3,qu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Yl(e){function t(v){return or(v,e)}Aa!==null&&or(Aa,e),_a!==null&&or(_a,e),Oa!==null&&or(Oa,e),Hn.forEach(t),Bn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)gm(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[it]||null;if(typeof i=="function")u||bm(a);else if(u){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[it]||null)d=u.formAction;else if(Xo(n)!==null)continue}else d=u.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),bm(a)}}}function ym(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Vo(e){this._internalRoot=e}sr.prototype.render=Vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=St();sm(a,l,e,t,null,null)},sr.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sm(e.current,2,null,e,null,null),Qi(),t[ll]=null}};function sr(e){this._internalRoot=e}sr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&gm(e)}};var xm=c.version;if(xm!=="19.2.7")throw Error(o(527,xm,"19.2.7"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Yg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fr.isDisabled&&fr.supportsFiber)try{Kl=fr.inject(Yg),mt=fr}catch{}}return Gn.createRoot=function(e,t){if(!m(e))throw Error(o(299));var a=!1,l="",n=Tf,i=Cf,u=Rf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=om(e,1,!1,null,null,a,l,null,n,i,u,ym),e[ll]=t.current,No(e),new Vo(t)},Gn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(o(299));var l=!1,n="",i=Tf,u=Cf,d=Rf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=om(e,1,!0,t,a??null,l,n,v,i,u,d,ym),t.context=cm(null),a=t.current,l=St(),l=Dr(l),n=ba(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,Wl(t,a),Xt(t),e[ll]=t.current,No(e),new sr(t)},Gn.version="19.2.7",Gn}var Am;function Wg(){if(Am)return Ko.exports;Am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Ko.exports=$g(),Ko.exports}var Fg=Wg();var sc=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Qm=/^[\\/]{2}/;function Ig(r,c){return c+r.replace(/\\/g,"/")}var _m="popstate";function Om(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Pg(r={}){function c(o,m){let p=m.state?.masked,{pathname:g,search:z,hash:y}=p||o.location;return nc("",{pathname:g,search:z,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function f(o,m){return typeof m=="string"?m:Qn(m)}return t0(c,f,null,r)}function Ue(r,c){if(r===!1||r===null||typeof r>"u")throw new Error(c)}function Mt(r,c){if(!r){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function e0(){return Math.random().toString(36).substring(2,10)}function Mm(r,c){return{usr:r.state,key:r.key,idx:c,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function nc(r,c,f=null,o,m){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof c=="string"?Ql(c):c,state:f,key:c&&c.key||o||e0(),mask:m}}function Qn({pathname:r="/",search:c="",hash:f=""}){return c&&c!=="?"&&(r+=c.charAt(0)==="?"?c:"?"+c),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Ql(r){let c={};if(r){let f=r.indexOf("#");f>=0&&(c.hash=r.substring(f),r=r.substring(0,f));let o=r.indexOf("?");o>=0&&(c.search=r.substring(o),r=r.substring(0,o)),r&&(c.pathname=r)}return c}function t0(r,c,f,o={}){let{window:m=document.defaultView,v5Compat:p=!1}=o,g=m.history,z="POP",y=null,h=N();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function N(){return(g.state||{idx:null}).idx}function j(){z="POP";let Y=N(),Z=Y==null?null:Y-h;h=Y,y&&y({action:z,location:G.location,delta:Z})}function R(Y,Z){z="PUSH";let V=Om(Y)?Y:nc(G.location,Y,Z);h=N()+1;let X=Mm(V,h),P=G.createHref(V.mask||V);try{g.pushState(X,"",P)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;m.location.assign(P)}p&&y&&y({action:z,location:G.location,delta:1})}function O(Y,Z){z="REPLACE";let V=Om(Y)?Y:nc(G.location,Y,Z);h=N();let X=Mm(V,h),P=G.createHref(V.mask||V);g.replaceState(X,"",P),p&&y&&y({action:z,location:G.location,delta:0})}function q(Y){return a0(m,Y)}let G={get action(){return z},get location(){return r(m,g)},listen(Y){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(_m,j),y=Y,()=>{m.removeEventListener(_m,j),y=null}},createHref(Y){return c(m,Y)},createURL:q,encodeLocation(Y){let Z=q(Y);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:R,replace:O,go(Y){return g.go(Y)}};return G}function a0(r,c,f=!1){let o="http://localhost";r&&(o=r.location.origin!=="null"?r.location.origin:r.location.href),Ue(o,"No window.location.(origin|href) available to create URL");let m=typeof c=="string"?c:Qn(c);return m=m.replace(/ $/,"%20"),!f&&Qm.test(m)&&(m=o+m),new URL(m,o)}function Vm(r,c,f="/"){return l0(r,c,f,!1)}function l0(r,c,f,o,m){let p=typeof c=="string"?Ql(c):c,g=ca(p.pathname||"/",f);if(g==null)return null;let z=n0(r),y=null,h=h0(g);for(let N=0;y==null&&N<z.length;++N)y=p0(z[N],h,o);return y}function n0(r){let c=Zm(r);return i0(c),c}function Zm(r,c=[],f=[],o="",m=!1){let p=(g,z,y=m,h)=>{let N={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:z,route:g};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(o)&&y)return;Ue(N.relativePath.startsWith(o),`Absolute route path "${N.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(o.length)}let j=Lt([o,N.relativePath]),R=f.concat(N);g.children&&g.children.length>0&&(Ue(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),Zm(g.children,c,R,j,y)),!(g.path==null&&!g.index)&&c.push({path:j,score:d0(j,g.index),routesMeta:R.map((O,q)=>{let[G,Y]=$m(O.relativePath,O.caseSensitive,q===R.length-1);return{...O,matcher:G,compiledParams:Y}})})};return r.forEach((g,z)=>{if(g.path===""||!g.path?.includes("?"))p(g,z);else for(let y of Jm(g.path))p(g,z,!0,y)}),c}function Jm(r){let c=r.split("/");if(c.length===0)return[];let[f,...o]=c,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(o.length===0)return m?[p,""]:[p];let g=Jm(o.join("/")),z=[];return z.push(...g.map(y=>y===""?p:[p,y].join("/"))),m&&z.push(...g),z.map(y=>r.startsWith("/")&&y===""?"/":y)}function i0(r){r.sort((c,f)=>c.score!==f.score?f.score-c.score:m0(c.routesMeta.map(o=>o.childrenIndex),f.routesMeta.map(o=>o.childrenIndex)))}var r0=/^:[\w-]+$/,u0=3,o0=2,c0=1,s0=10,f0=-2,Dm=r=>r==="*";function d0(r,c){let f=r.split("/"),o=f.length;return f.some(Dm)&&(o+=f0),c&&(o+=o0),f.filter(m=>!Dm(m)).reduce((m,p)=>m+(r0.test(p)?u0:p===""?c0:s0),o)}function m0(r,c){return r.length===c.length&&r.slice(0,-1).every((o,m)=>o===c[m])?r[r.length-1]-c[c.length-1]:0}function p0(r,c,f=!1){let{routesMeta:o}=r,m={},p="/",g=[];for(let z=0;z<o.length;++z){let y=o[z],h=z===o.length-1,N=p==="/"?c:c.slice(p.length)||"/",j={path:y.relativePath,caseSensitive:y.caseSensitive,end:h},R=y.matcher&&y.compiledParams?Km(j,N,y.matcher,y.compiledParams):vr(j,N),O=y.route;if(!R&&h&&f&&!o[o.length-1].route.index&&(R=vr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},N)),!R)return null;Object.assign(m,R.params),g.push({params:m,pathname:Lt([p,R.pathname]),pathnameBase:b0(Lt([p,R.pathnameBase])),route:O}),R.pathnameBase!=="/"&&(p=Lt([p,R.pathnameBase]))}return g}function vr(r,c){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,o]=$m(r.path,r.caseSensitive,r.end);return Km(r,c,f,o)}function Km(r,c,f,o){let m=c.match(f);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),z=m.slice(1);return{params:o.reduce((h,{paramName:N,isOptional:j},R)=>{if(N==="*"){let q=z[R]||"";g=p.slice(0,p.length-q.length).replace(/(.)\/+$/,"$1")}const O=z[R];return j&&!O?h[N]=void 0:h[N]=(O||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:g,pattern:r}}function $m(r,c=!1,f=!0){Mt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,z,y,h,N)=>{if(o.push({paramName:z,isOptional:y!=null}),y){let j=N.charAt(h+g.length);return j&&j!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,c?void 0:"i"),o]}function h0(r){try{return r.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Mt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),r}}function ca(r,c){if(c==="/")return r;if(!r.toLowerCase().startsWith(c.toLowerCase()))return null;let f=c.endsWith("/")?c.length-1:c.length,o=r.charAt(f);return o&&o!=="/"?null:r.slice(f)||"/"}function g0(r,c="/"){let{pathname:f,search:o="",hash:m=""}=typeof r=="string"?Ql(r):r,p;return f?(f=Wm(f),f.startsWith("/")?p=Um(f.substring(1),"/"):p=Um(f,c)):p=c,{pathname:p,search:y0(o),hash:x0(m)}}function Um(r,c){let f=br(c).split("/");return r.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Io(r,c,f,o){return`Cannot include a '${r}' character in a manually specified \`to.${c}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function v0(r){return r.filter((c,f)=>f===0||c.route.path&&c.route.path.length>0)}function fc(r){let c=v0(r);return c.map((f,o)=>o===c.length-1?f.pathname:f.pathnameBase)}function Sr(r,c,f,o=!1){let m;typeof r=="string"?m=Ql(r):(m={...r},Ue(!m.pathname||!m.pathname.includes("?"),Io("?","pathname","search",m)),Ue(!m.pathname||!m.pathname.includes("#"),Io("#","pathname","hash",m)),Ue(!m.search||!m.search.includes("#"),Io("#","search","hash",m)));let p=r===""||m.pathname==="",g=p?"/":m.pathname,z;if(g==null)z=f;else{let j=c.length-1;if(!o&&g.startsWith("..")){let R=g.split("/");for(;R[0]==="..";)R.shift(),j-=1;m.pathname=R.join("/")}z=j>=0?c[j]:"/"}let y=g0(m,z),h=g&&g!=="/"&&g.endsWith("/"),N=(p||g===".")&&f.endsWith("/");return!y.pathname.endsWith("/")&&(h||N)&&(y.pathname+="/"),y}var Wm=r=>r.replace(/[\\/]{2,}/g,"/"),Lt=r=>Wm(r.join("/")),br=r=>r.replace(/\/+$/,""),b0=r=>br(r).replace(/^\/*/,"/"),y0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,x0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,S0=class{constructor(r,c,f,o=!1){this.status=r,this.statusText=c||"",this.internal=o,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function j0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function E0(r){let c=r.map(f=>f.route.path).filter(Boolean);return Lt(c)||"/"}var Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Im(r,c){let f=r;if(typeof f!="string"||!sc.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let o=f,m=!1;if(Fm)try{let p=new URL(window.location.href),g=Qm.test(f)?new URL(Ig(f,p.protocol)):new URL(f),z=ca(g.pathname,c);g.origin===p.origin&&z!=null?f=z+g.search+g.hash:m=!0}catch{Mt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pm=["POST","PUT","PATCH","DELETE"];new Set(Pm);var z0=["GET",...Pm];new Set(z0);var w0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function N0(r){try{return w0.includes(new URL(r).protocol)}catch{return!1}}var Vl=b.createContext(null);Vl.displayName="DataRouter";var jr=b.createContext(null);jr.displayName="DataRouterState";var ep=b.createContext(!1);function T0(){return b.useContext(ep)}var tp=b.createContext({isTransitioning:!1});tp.displayName="ViewTransition";var C0=b.createContext(new Map);C0.displayName="Fetchers";var R0=b.createContext(null);R0.displayName="Await";var jt=b.createContext(null);jt.displayName="Navigation";var Vn=b.createContext(null);Vn.displayName="Location";var Ht=b.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var dc=b.createContext(null);dc.displayName="RouteError";var ap="REACT_ROUTER_ERROR",A0="REDIRECT",_0="ROUTE_ERROR_RESPONSE";function O0(r){if(r.startsWith(`${ap}:${A0}:{`))try{let c=JSON.parse(r.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function M0(r){if(r.startsWith(`${ap}:${_0}:{`))try{let c=JSON.parse(r.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new S0(c.status,c.statusText,c.data)}catch{}}function D0(r,{relative:c}={}){Ue(Zl(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:o}=b.useContext(jt),{hash:m,pathname:p,search:g}=Zn(r,{relative:c}),z=p;return f!=="/"&&(z=p==="/"?f:Lt([f,p])),o.createHref({pathname:z,search:g,hash:m})}function Zl(){return b.useContext(Vn)!=null}function Bt(){return Ue(Zl(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Vn).location}var lp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function np(r){b.useContext(jt).static||b.useLayoutEffect(r)}function mc(){let{isDataRoute:r}=b.useContext(Ht);return r?$0():U0()}function U0(){Ue(Zl(),"useNavigate() may be used only in the context of a <Router> component.");let r=b.useContext(Vl),{basename:c,navigator:f}=b.useContext(jt),{matches:o}=b.useContext(Ht),{pathname:m}=Bt(),p=JSON.stringify(fc(o)),g=b.useRef(!1);return np(()=>{g.current=!0}),b.useCallback((y,h={})=>{if(Mt(g.current,lp),!g.current)return;if(typeof y=="number"){f.go(y);return}let N=Sr(y,JSON.parse(p),m,h.relative==="path");r==null&&c!=="/"&&(N.pathname=N.pathname==="/"?c:Lt([c,N.pathname])),(h.replace?f.replace:f.push)(N,h.state,h)},[c,f,p,m,r])}var k0=b.createContext(null);function L0(r){let c=b.useContext(Ht).outlet;return b.useMemo(()=>c&&b.createElement(k0.Provider,{value:r},c),[c,r])}function Zn(r,{relative:c}={}){let{matches:f}=b.useContext(Ht),{pathname:o}=Bt(),m=JSON.stringify(fc(f));return b.useMemo(()=>Sr(r,JSON.parse(m),o,c==="path"),[r,m,o,c])}function H0(r,c){return ip(r,c)}function ip(r,c,f){Ue(Zl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=b.useContext(jt),{matches:m}=b.useContext(Ht),p=m[m.length-1],g=p?p.params:{},z=p?p.pathname:"/",y=p?p.pathnameBase:"/",h=p&&p.route;{let Y=h&&h.path||"";up(z,!h||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${z}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let N=Bt(),j;if(c){let Y=typeof c=="string"?Ql(c):c;Ue(y==="/"||Y.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),j=Y}else j=N;let R=j.pathname||"/",O=R;if(y!=="/"){let Y=y.replace(/^\//,"").split("/");O="/"+R.replace(/^\//,"").split("/").slice(Y.length).join("/")}let q=f&&f.state.matches.length?f.state.matches.map(Y=>Object.assign(Y,{route:f.manifest[Y.route.id]||Y.route})):Vm(r,{pathname:O});Mt(h||q!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),Mt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=X0(q&&q.map(Y=>Object.assign({},Y,{params:Object.assign({},g,Y.params),pathname:Lt([y,o.encodeLocation?o.encodeLocation(Y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?y:Lt([y,o.encodeLocation?o.encodeLocation(Y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),m,f);return c&&G?b.createElement(Vn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...j},navigationType:"POP"}},G):G}function B0(){let r=K0(),c=j0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},p={padding:"2px 4px",backgroundColor:o},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},c),f?b.createElement("pre",{style:m},f):null,g)}var Y0=b.createElement(B0,null),rp=class extends b.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,c){return c.location!==r.location||c.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:c.error,location:c.location,revalidation:r.revalidation||c.revalidation}}componentDidCatch(r,c){this.props.onError?this.props.onError(r,c):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const f=M0(r.digest);f&&(r=f)}let c=r!==void 0?b.createElement(Ht.Provider,{value:this.props.routeContext},b.createElement(dc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?b.createElement(q0,{error:r},c):c}};rp.contextType=ep;var Po=new WeakMap;function q0({children:r,error:c}){let{basename:f}=b.useContext(jt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let o=O0(c.digest);if(o){let m=Po.get(c);if(m)throw m;let p=Im(o.location,f),g=p.absoluteURL||p.to;if(N0(g))throw new Error("Invalid redirect location");if(Fm&&!Po.get(c))if(p.isExternal||o.reloadDocument)window.location.href=g;else{const z=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:o.replace}));throw Po.set(c,z),z}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return r}function G0({routeContext:r,match:c,children:f}){let o=b.useContext(Vl);return o&&o.static&&o.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=c.route.id),b.createElement(Ht.Provider,{value:r},f)}function X0(r,c=[],f){let o=f?.state;if(r==null){if(!o)return null;if(o.errors)r=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)r=o.matches;else return null}let m=r,p=o?.errors;if(p!=null){let N=m.findIndex(j=>j.route.id&&p?.[j.route.id]!==void 0);Ue(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,N+1))}let g=!1,z=-1;if(f&&o){g=o.renderFallback;for(let N=0;N<m.length;N++){let j=m[N];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(z=N),j.route.id){let{loaderData:R,errors:O}=o,q=j.route.loader&&!R.hasOwnProperty(j.route.id)&&(!O||O[j.route.id]===void 0);if(j.route.lazy||q){f.isStatic&&(g=!0),z>=0?m=m.slice(0,z+1):m=[m[0]];break}}}}let y=f?.onError,h=o&&y?(N,j)=>{y(N,{location:o.location,params:o.matches?.[0]?.params??{},pattern:E0(o.matches),errorInfo:j})}:void 0;return m.reduceRight((N,j,R)=>{let O,q=!1,G=null,Y=null;o&&(O=p&&j.route.id?p[j.route.id]:void 0,G=j.route.errorElement||Y0,g&&(z<0&&R===0?(up("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,Y=null):z===R&&(q=!0,Y=j.route.hydrateFallbackElement||null)));let Z=c.concat(m.slice(0,R+1)),V=()=>{let X;return O?X=G:q?X=Y:j.route.Component?X=b.createElement(j.route.Component,null):j.route.element?X=j.route.element:X=N,b.createElement(G0,{match:j,routeContext:{outlet:N,matches:Z,isDataRoute:o!=null},children:X})};return o&&(j.route.ErrorBoundary||j.route.errorElement||R===0)?b.createElement(rp,{location:o.location,revalidation:o.revalidation,component:G,error:O,children:V(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:h}):V()},null)}function pc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q0(r){let c=b.useContext(Vl);return Ue(c,pc(r)),c}function V0(r){let c=b.useContext(jr);return Ue(c,pc(r)),c}function Z0(r){let c=b.useContext(Ht);return Ue(c,pc(r)),c}function hc(r){let c=Z0(r),f=c.matches[c.matches.length-1];return Ue(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function J0(){return hc("useRouteId")}function K0(){let r=b.useContext(dc),c=V0("useRouteError"),f=hc("useRouteError");return r!==void 0?r:c.errors?.[f]}function $0(){let{router:r}=Q0("useNavigate"),c=hc("useNavigate"),f=b.useRef(!1);return np(()=>{f.current=!0}),b.useCallback(async(m,p={})=>{Mt(f.current,lp),f.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:c,...p}))},[r,c])}var km={};function up(r,c,f){!c&&!km[r]&&(km[r]=!0,Mt(!1,f))}b.memo(W0);function W0({routes:r,manifest:c,future:f,state:o,isStatic:m,onError:p}){return ip(r,void 0,{manifest:c,state:o,isStatic:m,onError:p})}function F0({to:r,replace:c,state:f,relative:o}){Ue(Zl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=b.useContext(jt);Mt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=b.useContext(Ht),{pathname:g}=Bt(),z=mc(),y=Sr(r,fc(p),g,o==="path"),h=JSON.stringify(y);return b.useEffect(()=>{z(JSON.parse(h),{replace:c,state:f,relative:o})},[z,h,o,c,f]),null}function I0(r){return L0(r.context)}function Ua(r){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function P0({basename:r="/",children:c=null,location:f,navigationType:o="POP",navigator:m,static:p=!1,useTransitions:g}){Ue(!Zl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=r.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:z,navigator:m,static:p,useTransitions:g,future:{}}),[z,m,p,g]);typeof f=="string"&&(f=Ql(f));let{pathname:h="/",search:N="",hash:j="",state:R=null,key:O="default",mask:q}=f,G=b.useMemo(()=>{let Y=ca(h,z);return Y==null?null:{location:{pathname:Y,search:N,hash:j,state:R,key:O,mask:q},navigationType:o}},[z,h,N,j,R,O,o,q]);return Mt(G!=null,`<Router basename="${z}"> is not able to match the URL "${h}${N}${j}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:b.createElement(jt.Provider,{value:y},b.createElement(Vn.Provider,{children:c,value:G}))}function ev({children:r,location:c}){return H0(ic(r),c)}function ic(r,c=[]){let f=[];return b.Children.forEach(r,(o,m)=>{if(!b.isValidElement(o))return;let p=[...c,m];if(o.type===b.Fragment){f.push.apply(f,ic(o.props.children,p));return}Ue(o.type===Ua,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!o.props.index||!o.props.children,"An index route cannot have child routes.");let g={id:o.props.id||p.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(g.children=ic(o.props.children,p)),f.push(g)}),f}var hr="get",gr="application/x-www-form-urlencoded";function Er(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function tv(r){return Er(r)&&r.tagName.toLowerCase()==="button"}function av(r){return Er(r)&&r.tagName.toLowerCase()==="form"}function lv(r){return Er(r)&&r.tagName.toLowerCase()==="input"}function nv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function iv(r,c){return r.button===0&&(!c||c==="_self")&&!nv(r)}function rc(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((c,f)=>{let o=r[f];return c.concat(Array.isArray(o)?o.map(m=>[f,m]):[[f,o]])},[]))}function rv(r,c){let f=rc(r);return c&&c.forEach((o,m)=>{f.has(m)||c.getAll(m).forEach(p=>{f.append(m,p)})}),f}var dr=null;function uv(){if(dr===null)try{new FormData(document.createElement("form"),0),dr=!1}catch{dr=!0}return dr}var ov=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ec(r){return r!=null&&!ov.has(r)?(Mt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gr}"`),null):r}function cv(r,c){let f,o,m,p,g;if(av(r)){let z=r.getAttribute("action");o=z?ca(z,c):null,f=r.getAttribute("method")||hr,m=ec(r.getAttribute("enctype"))||gr,p=new FormData(r)}else if(tv(r)||lv(r)&&(r.type==="submit"||r.type==="image")){let z=r.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||z.getAttribute("action");if(o=y?ca(y,c):null,f=r.getAttribute("formmethod")||z.getAttribute("method")||hr,m=ec(r.getAttribute("formenctype"))||ec(z.getAttribute("enctype"))||gr,p=new FormData(z,r),!uv()){let{name:h,type:N,value:j}=r;if(N==="image"){let R=h?`${h}.`:"";p.append(`${R}x`,"0"),p.append(`${R}y`,"0")}else h&&p.append(h,j)}}else{if(Er(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=hr,o=null,m=gr,g=r}return p&&m==="text/plain"&&(g=p,p=void 0),{action:o,method:f.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gc(r,c){if(r===!1||r===null||typeof r>"u")throw new Error(c)}function op(r,c,f,o){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${o}`:m.pathname=`${m.pathname}.${o}`:m.pathname==="/"?m.pathname=`_root.${o}`:c&&ca(m.pathname,c)==="/"?m.pathname=`${br(c)}/_root.${o}`:m.pathname=`${br(m.pathname)}.${o}`,m}async function sv(r,c){if(r.id in c)return c[r.id];try{let f=await import(r.module);return c[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function dv(r,c,f){let o=await Promise.all(r.map(async m=>{let p=c.routes[m.route.id];if(p){let g=await sv(p,f);return g.links?g.links():[]}return[]}));return gv(o.flat(1).filter(fv).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Lm(r,c,f,o,m,p){let g=(y,h)=>f[h]?y.route.id!==f[h].route.id:!0,z=(y,h)=>f[h].pathname!==y.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==y.params["*"];return p==="assets"?c.filter((y,h)=>g(y,h)||z(y,h)):p==="data"?c.filter((y,h)=>{let N=o.routes[y.route.id];if(!N||!N.hasLoader)return!1;if(g(y,h)||z(y,h))return!0;if(y.route.shouldRevalidate){let j=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function mv(r,c,{includeHydrateFallback:f}={}){return pv(r.map(o=>{let m=c.routes[o.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function pv(r){return[...new Set(r)]}function hv(r){let c={},f=Object.keys(r).sort();for(let o of f)c[o]=r[o];return c}function gv(r,c){let f=new Set;return new Set(c),r.reduce((o,m)=>{let p=JSON.stringify(hv(m));return f.has(p)||(f.add(p),o.push({key:p,link:m})),o},[])}function vc(){let r=b.useContext(Vl);return gc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function vv(){let r=b.useContext(jr);return gc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bc=b.createContext(void 0);bc.displayName="FrameworkContext";function zr(){let r=b.useContext(bc);return gc(r,"You must render this element inside a <HydratedRouter> element"),r}function bv(r,c){let f=b.useContext(bc),[o,m]=b.useState(!1),[p,g]=b.useState(!1),{onFocus:z,onBlur:y,onMouseEnter:h,onMouseLeave:N,onTouchStart:j}=c,R=b.useRef(null);b.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let G=Z=>{Z.forEach(V=>{g(V.isIntersecting)})},Y=new IntersectionObserver(G,{threshold:.5});return R.current&&Y.observe(R.current),()=>{Y.disconnect()}}},[r]),b.useEffect(()=>{if(o){let G=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(G)}}},[o]);let O=()=>{m(!0)},q=()=>{m(!1),g(!1)};return f?r!=="intent"?[p,R,{}]:[p,R,{onFocus:Xn(z,O),onBlur:Xn(y,q),onMouseEnter:Xn(h,O),onMouseLeave:Xn(N,q),onTouchStart:Xn(j,O)}]:[!1,R,{}]}function Xn(r,c){return f=>{r&&r(f),f.defaultPrevented||c(f)}}function yv({page:r,...c}){let f=T0(),{nonce:o}=zr(),{router:m}=vc(),p=b.useMemo(()=>Vm(m.routes,r,m.basename),[m.routes,r,m.basename]);return p?(c.nonce==null&&o&&(c={...c,nonce:o}),f?b.createElement(Sv,{page:r,matches:p,...c}):b.createElement(jv,{page:r,matches:p,...c})):null}function xv(r){let{manifest:c,routeModules:f}=zr(),[o,m]=b.useState([]);return b.useEffect(()=>{let p=!1;return dv(r,c,f).then(g=>{p||m(g)}),()=>{p=!0}},[r,c,f]),o}function Sv({page:r,matches:c,...f}){let o=Bt(),{future:m}=zr(),{basename:p}=vc(),g=b.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let z=op(r,p,m.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,h=[];for(let N of c)typeof N.route.shouldRevalidate=="function"?y=!0:h.push(N.route.id);return y&&h.length>0&&z.searchParams.set("_routes",h.join(",")),[z.pathname+z.search]},[p,m.v8_trailingSlashAwareDataRequests,r,o,c]);return b.createElement(b.Fragment,null,g.map(z=>b.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...f})))}function jv({page:r,matches:c,...f}){let o=Bt(),{future:m,manifest:p,routeModules:g}=zr(),{basename:z}=vc(),{loaderData:y,matches:h}=vv(),N=b.useMemo(()=>Lm(r,c,h,p,o,"data"),[r,c,h,p,o]),j=b.useMemo(()=>Lm(r,c,h,p,o,"assets"),[r,c,h,p,o]),R=b.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let G=new Set,Y=!1;if(c.forEach(V=>{let X=p.routes[V.route.id];!X||!X.hasLoader||(!N.some(P=>P.route.id===V.route.id)&&V.route.id in y&&g[V.route.id]?.shouldRevalidate||X.hasClientLoader?Y=!0:G.add(V.route.id))}),G.size===0)return[];let Z=op(r,z,m.v8_trailingSlashAwareDataRequests,"data");return Y&&G.size>0&&Z.searchParams.set("_routes",c.filter(V=>G.has(V.route.id)).map(V=>V.route.id).join(",")),[Z.pathname+Z.search]},[z,m.v8_trailingSlashAwareDataRequests,y,o,p,N,c,r,g]),O=b.useMemo(()=>mv(j,p),[j,p]),q=xv(j);return b.createElement(b.Fragment,null,R.map(G=>b.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...f})),O.map(G=>b.createElement("link",{key:G,rel:"modulepreload",href:G,...f})),q.map(({key:G,link:Y})=>b.createElement("link",{key:G,nonce:f.nonce,...Y,crossOrigin:Y.crossOrigin??f.crossOrigin})))}function Ev(...r){return c=>{r.forEach(f=>{typeof f=="function"?f(c):f!=null&&(f.current=c)})}}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zv&&(window.__reactRouterVersion="7.18.1")}catch{}function wv({basename:r,children:c,useTransitions:f,window:o}){let m=b.useRef();m.current==null&&(m.current=Pg({window:o,v5Compat:!0}));let p=m.current,[g,z]=b.useState({action:p.action,location:p.location}),y=b.useCallback(h=>{f===!1?z(h):b.startTransition(()=>z(h))},[f]);return b.useLayoutEffect(()=>p.listen(y),[p,y]),b.createElement(P0,{basename:r,children:c,location:g.location,navigationType:g.action,navigator:p,useTransitions:f})}var wr=b.forwardRef(function({onClick:c,discover:f="render",prefetch:o="none",relative:m,reloadDocument:p,replace:g,mask:z,state:y,target:h,to:N,preventScrollReset:j,viewTransition:R,defaultShouldRevalidate:O,...q},G){let{basename:Y,navigator:Z,useTransitions:V}=b.useContext(jt),X=typeof N=="string"&&sc.test(N),P=Im(N,Y);N=P.to;let Q=D0(N,{relative:m}),U=Bt(),L=null;if(z){let Me=Sr(z,[],U.mask?U.mask.pathname:"/",!0);Y!=="/"&&(Me.pathname=Me.pathname==="/"?Y:Lt([Y,Me.pathname])),L=Z.createHref(Me)}let[ee,ce,ge]=bv(o,q),$=Cv(N,{replace:g,mask:z,state:y,target:h,preventScrollReset:j,relative:m,viewTransition:R,defaultShouldRevalidate:O,useTransitions:V});function ne(Me){c&&c(Me),Me.defaultPrevented||$(Me)}let ye=!(P.isExternal||p),Re=b.createElement("a",{...q,...ge,href:(ye?L:void 0)||P.absoluteURL||Q,onClick:ye?ne:c,ref:Ev(G,ce),target:h,"data-discover":!X&&f==="render"?"true":void 0});return ee&&!X?b.createElement(b.Fragment,null,Re,b.createElement(yv,{page:Q})):Re});wr.displayName="Link";var cp=b.forwardRef(function({"aria-current":c="page",caseSensitive:f=!1,className:o="",end:m=!1,style:p,to:g,viewTransition:z,children:y,...h},N){let j=Zn(g,{relative:h.relative}),R=Bt(),O=b.useContext(jr),{navigator:q,basename:G}=b.useContext(jt),Y=O!=null&&Dv(j)&&z===!0,Z=q.encodeLocation?q.encodeLocation(j).pathname:j.pathname,V=R.pathname,X=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;f||(V=V.toLowerCase(),X=X?X.toLowerCase():null,Z=Z.toLowerCase()),X&&G&&(X=ca(X,G)||X);const P=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let Q=V===Z||!m&&V.startsWith(Z)&&V.charAt(P)==="/",U=X!=null&&(X===Z||!m&&X.startsWith(Z)&&X.charAt(Z.length)==="/"),L={isActive:Q,isPending:U,isTransitioning:Y},ee=Q?c:void 0,ce;typeof o=="function"?ce=o(L):ce=[o,Q?"active":null,U?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let ge=typeof p=="function"?p(L):p;return b.createElement(wr,{...h,"aria-current":ee,className:ce,ref:N,style:ge,to:g,viewTransition:z},typeof y=="function"?y(L):y)});cp.displayName="NavLink";var Nv=b.forwardRef(({discover:r="render",fetcherKey:c,navigate:f,reloadDocument:o,replace:m,state:p,method:g=hr,action:z,onSubmit:y,relative:h,preventScrollReset:N,viewTransition:j,defaultShouldRevalidate:R,...O},q)=>{let{useTransitions:G}=b.useContext(jt),Y=Ov(),Z=Mv(z,{relative:h}),V=g.toLowerCase()==="get"?"get":"post",X=typeof z=="string"&&sc.test(z),P=Q=>{if(y&&y(Q),Q.defaultPrevented)return;Q.preventDefault();let U=Q.nativeEvent.submitter,L=U?.getAttribute("formmethod")||g,ee=()=>Y(U||Q.currentTarget,{fetcherKey:c,method:L,navigate:f,replace:m,state:p,relative:h,preventScrollReset:N,viewTransition:j,defaultShouldRevalidate:R});G&&f!==!1?b.startTransition(()=>ee()):ee()};return b.createElement("form",{ref:q,method:V,action:Z,onSubmit:o?y:P,...O,"data-discover":!X&&r==="render"?"true":void 0})});Nv.displayName="Form";function Tv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sp(r){let c=b.useContext(Vl);return Ue(c,Tv(r)),c}function Cv(r,{target:c,replace:f,mask:o,state:m,preventScrollReset:p,relative:g,viewTransition:z,defaultShouldRevalidate:y,useTransitions:h}={}){let N=mc(),j=Bt(),R=Zn(r,{relative:g});return b.useCallback(O=>{if(iv(O,c)){O.preventDefault();let q=f!==void 0?f:Qn(j)===Qn(R),G=()=>N(r,{replace:q,mask:o,state:m,preventScrollReset:p,relative:g,viewTransition:z,defaultShouldRevalidate:y});h?b.startTransition(()=>G()):G()}},[j,N,R,f,o,m,c,r,p,g,z,y,h])}function Rv(r){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let c=b.useRef(rc(r)),f=b.useRef(!1),o=Bt(),m=b.useMemo(()=>rv(o.search,f.current?null:c.current),[o.search]),p=mc(),g=b.useCallback((z,y)=>{const h=rc(typeof z=="function"?z(new URLSearchParams(m)):z);f.current=!0,p("?"+h,y)},[p,m]);return[m,g]}var Av=0,_v=()=>`__${String(++Av)}__`;function Ov(){let{router:r}=sp("useSubmit"),{basename:c}=b.useContext(jt),f=J0(),o=r.fetch,m=r.navigate;return b.useCallback(async(p,g={})=>{let{action:z,method:y,encType:h,formData:N,body:j}=cv(p,c);if(g.navigate===!1){let R=g.fetcherKey||_v();await o(R,f,g.action||z,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:N,body:j,formMethod:g.method||y,formEncType:g.encType||h,flushSync:g.flushSync})}else await m(g.action||z,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:N,body:j,formMethod:g.method||y,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[o,m,c,f])}function Mv(r,{relative:c}={}){let{basename:f}=b.useContext(jt),o=b.useContext(Ht);Ue(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),p={...Zn(r||".",{relative:c})},g=Bt();if(r==null){p.search=g.search;let z=new URLSearchParams(p.search),y=z.getAll("index");if(y.some(N=>N==="")){z.delete("index"),y.filter(j=>j).forEach(j=>z.append("index",j));let N=z.toString();p.search=N?`?${N}`:""}}return(!r||r===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Lt([f,p.pathname])),Qn(p)}function Dv(r,{relative:c}={}){let f=b.useContext(tp);Ue(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=sp("useViewTransitionState"),m=Zn(r,{relative:c});if(!f.isTransitioning)return!1;let p=ca(f.currentLocation.pathname,o)||f.currentLocation.pathname,g=ca(f.nextLocation.pathname,o)||f.nextLocation.pathname;return vr(m.pathname,g)!=null||vr(m.pathname,p)!=null}function Uv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"10",cy:"7",r:"3.25",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function kv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"6",width:"14",height:"10",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 6V5a3 3 0 0 1 6 0v1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function uc(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"4",y:"3",width:"12",height:"14",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 7.5h6M7 10.5h6M7 13.5h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Lv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"3",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})}function Hv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M5 4.5h10M5 8.5h7M5 12.5h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M14 12.5l2 2 3.5-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Bv(){return s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5",fill:"url(#logo-grad)"}),s.jsx("path",{d:"M8 15V9l4 3 4-3v6",stroke:"#fff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"logo-grad",x1:"3",y1:"3",x2:"21",y2:"21",children:[s.jsx("stop",{stopColor:"#818cf8"}),s.jsx("stop",{offset:"1",stopColor:"#6366f1"})]})})]})}function Yv(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M3.5 8.5l3 3 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function qv(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M8 5v3.5M8 11h.01",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Hm(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}function Gv(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 2.5h5l3.5 3.5V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M9 2.5V6h3.5",stroke:"currentColor",strokeWidth:"1.25"})]})}function Xv(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M6 3.5h6.5V10M9.5 6.5L3 13",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}const Qv=[{to:"/profile",label:"Profile",icon:Uv},{to:"/jobs",label:"Jobs",icon:kv},{to:"/applications",label:"Applications",icon:uc},{to:"/templates",label:"Templates",icon:Lv},{to:"/review",label:"Review",icon:Hv}];function Vv(){return s.jsxs("aside",{className:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs("div",{className:"sidebar-brand",children:[s.jsx(Bv,{}),s.jsxs("div",{className:"sidebar-brand-text",children:[s.jsx("span",{className:"sidebar-brand-name",children:"Joblication"}),s.jsx("span",{className:"sidebar-brand-tag",children:"Application studio"})]})]})}),s.jsxs("nav",{className:"sidebar-nav","aria-label":"Main navigation",children:[s.jsx("p",{className:"sidebar-nav-label",children:"Workspace"}),Qv.map(r=>s.jsxs(cp,{to:r.to,className:({isActive:c})=>`sidebar-link ${c?"active":""}`,children:[s.jsx("span",{className:"sidebar-link-icon",children:s.jsx(r.icon,{})}),s.jsx("span",{className:"sidebar-link-label",children:r.label})]},r.to))]}),s.jsx("div",{className:"sidebar-footer",children:s.jsx("p",{children:"Tailored CVs & cover letters"})})]})}function Zv(){return s.jsxs("div",{className:"app-shell",children:[s.jsx(Vv,{}),s.jsx("main",{className:"app-main",children:s.jsx(I0,{})})]})}const tl={"Content-Type":"application/json"};async function qe(r,c={}){const f=await fetch(r,c),o=await f.json().catch(()=>({}));if(!f.ok)throw new Error(o.error||`Request failed (${f.status})`);return o}const Ae={health:()=>qe("/api/health"),config:()=>qe("/api/config"),getProfile:()=>qe("/api/profile"),saveProfile:r=>qe("/api/profile",{method:"PUT",headers:tl,body:JSON.stringify({profile:r})}),listJobs:()=>qe("/api/applications"),getJob:r=>qe(`/api/applications/${encodeURIComponent(r)}`),createJob:r=>qe("/api/applications",{method:"POST",headers:tl,body:JSON.stringify(r)}),updateJob:(r,c)=>qe(`/api/applications/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(c)}),deleteJob:r=>qe(`/api/applications/${encodeURIComponent(r)}`,{method:"DELETE"}),scrapeUrl:r=>qe("/api/applications/scrape",{method:"POST",headers:tl,body:JSON.stringify({url:r})}),listApplications:()=>qe("/api/applications/view"),listOutputs:()=>qe("/api/outputs"),fileUrl:(r,c)=>`/api/files/${encodeURIComponent(r)}/${encodeURIComponent(c)}`,getReview:r=>qe(`/api/review/${encodeURIComponent(r)}`),saveReview:(r,c)=>qe(`/api/review/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(c)}),rebuild:r=>qe(`/api/build/${encodeURIComponent(r)}`,{method:"POST"}),listTemplates:()=>qe("/api/templates"),getTemplate:r=>qe(`/api/templates/${encodeURIComponent(r)}`),saveTemplate:(r,c)=>qe(`/api/templates/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(c)}),createTemplate:r=>qe("/api/templates",{method:"POST",headers:tl,body:JSON.stringify(r)}),generateStatus:()=>qe("/api/generate/status"),startGenerate:()=>qe("/api/generate",{method:"POST"})},fp=b.createContext(null);function Jv({children:r}){const[c,f]=b.useState(null),o=b.useRef(null),m=b.useCallback((g,z="success")=>{clearTimeout(o.current),f({message:g,type:z}),o.current=setTimeout(()=>f(null),3800)},[]),p=b.useMemo(()=>({showToast:m}),[m]);return s.jsxs(fp.Provider,{value:p,children:[r,c&&s.jsxs("div",{className:`toast show ${c.type}`,role:"status","aria-live":"polite",children:[s.jsx("span",{className:"toast-icon",children:c.type==="error"?s.jsx(qv,{}):s.jsx(Yv,{})}),s.jsx("span",{className:"toast-message",children:c.message})]})]})}function Nr(){const r=b.useContext(fp);if(!r)throw new Error("useToast must be used within ToastProvider");return r}function dp({label:r="Loading…"}){return s.jsxs("div",{className:"page-loading",children:[s.jsx("div",{className:"page-loading-spinner"}),s.jsx("p",{children:r})]})}function Bm({icon:r,title:c,description:f,action:o}){return s.jsxs("div",{className:"empty-state",children:[r&&s.jsx("div",{className:"empty-state-icon",children:s.jsx(r,{})}),s.jsx("h3",{children:c}),f&&s.jsx("p",{children:f}),o]})}function al(r){return r.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,c=>c.toUpperCase())}function Kv(r){return r.includes("email")?"email":r.includes("phone")?"tel":r==="url"||r.includes("portfolio")||r.includes("github")||r.includes("linkedin")?"url":r.includes("Date")||r==="date"?"date":"text"}function $e({id:r,label:c,value:f,onChange:o,type:m,multiline:p,rows:g=4,hint:z,onKeyDown:y}){const h=r||c.replace(/\s+/g,"_").toLowerCase(),N=m||Kv(h),j=!!f;return p?s.jsxs("div",{className:`md-field ${j?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:c}),s.jsx("textarea",{id:h,className:"md-input md-textarea",rows:g,value:f??"",onChange:R=>o(R.target.value),onKeyDown:y}),z&&s.jsx("span",{className:"md-hint",children:z})]}):s.jsxs("div",{className:`md-field ${j?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:h,children:c}),s.jsx("input",{id:h,className:"md-input",type:N,value:f??"",onChange:R=>o(R.target.value)}),z&&s.jsx("span",{className:"md-hint",children:z})]})}function mp({children:r,columns:c=2}){return s.jsx("div",{className:`md-grid md-grid-${c}`,children:r})}const $v=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],Wv=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],Fv=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],Iv=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],Pv=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],eb=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],tb={contact:{type:"object",fields:$v},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:Wv,singular:"education"},experience:{type:"entities",fields:Fv,singular:"experience"},projects:{type:"entities",fields:Iv,singular:"project"},certifications:{type:"entities",fields:Pv,singular:"certification"},achievements:{type:"entities",fields:eb,singular:"achievement"}};function ab(r){return tb[r]||{type:"dynamic"}}function yr(r){return r&&typeof r=="object"&&!Array.isArray(r)}function lb(r){if(typeof r=="string"||!yr(r))return"text";const c=Object.values(r);return!c.length||c.every(f=>typeof f=="string")?"keyValue":c.every(f=>yr(f))?"entities":"keyValue"}function pp({fields:r,value:c,onChange:f}){const o=c||{};return s.jsx(mp,{children:r.map(m=>s.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:s.jsx($e,{id:m.key,label:m.label,value:o[m.key],multiline:m.multiline,rows:m.rows,onChange:p=>f({...o,[m.key]:p})})},m.key))})}function nb(r){const c=Object.entries(r||{});return c.sort((f,o)=>{const m=parseInt(String(f[0]).split("_").pop(),10)||0,p=parseInt(String(o[0]).split("_").pop(),10)||0;return m-p}),c.map(([,f])=>f)}function tc(r){const c={};return r.forEach((f,o)=>{c[`title_${o+1}`]=f}),c}function ib({value:r,onChange:c}){const f=nb(r);function o(g,z){const y=[...f];y[g]=z,c(tc(y))}function m(g){c(tc(f.filter((z,y)=>y!==g)))}function p(){c(tc([...f,""]))}return s.jsxs("div",{className:"md-title-list",children:[f.map((g,z)=>s.jsxs("div",{className:"md-title-row",children:[s.jsx($e,{id:`title_text_${z}`,label:"Title text",value:g,onChange:y=>o(z,y)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(z),"aria-label":"Remove title",children:"✕"})]},`title-${z}`)),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:p,children:"+ Add title"})]})}function hp({value:r,onChange:c,keyLabel:f="Key",valueLabel:o="Value",valueOptional:m,stacked:p}){const g=Object.entries(r||{});function z(j,R,O){const q={...r||{}};delete q[j],R.trim()&&(q[R.trim()]=O),c(q)}function y(j,R){c({...r||{},[j]:R})}function h(j){const R={...r||{}};delete R[j],c(R)}function N(){const j=f.toLowerCase().replace(/\s+/g,"_");let R=g.length+1,O=`${j}_${R}`;for(;(r||{})[O];)R+=1,O=`${j}_${R}`;c({...r||{},[O]:""})}return s.jsxs("div",{className:"md-kv-list",children:[g.map(([j,R])=>s.jsx("div",{className:`md-kv-row ${p?"md-kv-row-stacked":""}`,children:p?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"md-kv-stacked-fields",children:[s.jsx($e,{label:f,value:j,onChange:O=>z(j,O,R)}),s.jsx($e,{label:o,value:R,onChange:O=>y(j,O),multiline:!0,rows:2})]}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(j),"aria-label":"Remove",children:"✕"})]}):s.jsxs(s.Fragment,{children:[s.jsx($e,{label:f,value:j,onChange:O=>z(j,O,R)}),!m&&s.jsx($e,{label:o,value:R,onChange:O=>y(j,O),multiline:String(R).length>60,rows:2}),m&&s.jsx($e,{label:o,value:R,onChange:O=>y(j,O),hint:"Optional"}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(j),"aria-label":"Remove",children:"✕"})]})},j)),s.jsxs("button",{type:"button",className:"md-text-btn",onClick:N,children:["+ Add ",f.toLowerCase()]})]})}function gp({value:r,onChange:c,fields:f,singular:o,sectionKey:m}){const p=Object.entries(r||{}),g=o||m.replace(/s$/,"");function z(h){const N={...r||{}};delete N[h],c(N)}function y(){const h=Object.keys(r||{}).map(O=>parseInt(O.split("_").pop(),10)).filter(O=>!Number.isNaN(O)),N=h.length?Math.max(...h)+1:1,j=`${g}_${N}`,R=f.reduce((O,q)=>({...O,[q.key]:""}),{});c({...r||{},[j]:R})}return s.jsxs("div",{className:"md-entity-list",children:[p.map(([h,N])=>s.jsxs("article",{className:"md-card",children:[s.jsxs("header",{className:"md-card-header",children:[s.jsx("h3",{children:N.name||N.degree||N.company||N.position||al(h)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>z(h),"aria-label":"Remove entry",children:"✕"})]}),s.jsx(pp,{fields:f,value:N,onChange:j=>c({...r||{},[h]:j})})]},h)),s.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:y,children:["+ Add ",al(o||m)]})]})}function rb({sectionKey:r,value:c,onChange:f}){const o=lb(c);if(o==="text")return s.jsx($e,{label:al(r),value:typeof c=="string"?c:JSON.stringify(c,null,2),onChange:f,multiline:!0,rows:8});if(o==="keyValue")return s.jsx(hp,{value:yr(c)?c:{},onChange:f,keyLabel:"Item",valueLabel:"Value"});if(o==="entities"){const m=Object.values(c||{}).find(yr)||{},p=Object.keys(m).map(g=>({key:g,label:al(g),multiline:g==="description"||String(m[g]).length>80,rows:4}));return s.jsx(gp,{sectionKey:r,value:c,onChange:f,fields:p.length?p:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:r.replace(/s$/,"")})}return s.jsx($e,{label:al(r),value:JSON.stringify(c,null,2),onChange:()=>{},multiline:!0,rows:10})}function ub({sectionKey:r,value:c,onChange:f}){const o=ab(r);return o.type==="text"?s.jsx($e,{label:o.label||al(r),value:typeof c=="string"?c:"",onChange:f,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):o.type==="object"?s.jsx(pp,{fields:o.fields,value:c,onChange:f}):o.type==="titles"?s.jsx(ib,{value:c,onChange:f}):o.type==="keyValue"?s.jsx(hp,{value:c||{},onChange:f,keyLabel:o.keyLabel,valueLabel:o.valueLabel,valueOptional:o.valueOptional,stacked:o.stacked}):o.type==="entities"?s.jsx(gp,{sectionKey:r,value:c,onChange:f,fields:o.fields,singular:o.singular}):s.jsx(rb,{sectionKey:r,value:c,onChange:f})}const xr=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],ob={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function mr(r){return ob[r]||al(r)}function cb(r,c){if(!r||typeof window>"u")return c;try{const f=localStorage.getItem(r),o=Number(f);if(f&&Number.isFinite(o))return o}catch{}return c}function Jn({className:r="",storageKey:c,defaultWidth:f=272,minWidth:o=220,maxWidth:m=520,children:p}){const[g,z]=b.useState(()=>cb(c,f)),y=b.useRef(null);b.useEffect(()=>{if(c)try{localStorage.setItem(c,String(g))}catch{}},[g,c]);const h=b.useCallback(R=>{const O=y.current;if(!O)return;const q=O.startX-R.clientX,G=Math.min(m,Math.max(o,O.startWidth+q));z(G)},[o,m]),N=b.useCallback(()=>{y.current=null,document.body.classList.remove("sidebar-resizing")},[]);b.useEffect(()=>(window.addEventListener("pointermove",h),window.addEventListener("pointerup",N),window.addEventListener("pointercancel",N),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",N),window.removeEventListener("pointercancel",N)}),[h,N]);function j(R){R.preventDefault(),R.stopPropagation(),y.current={startX:R.clientX,startWidth:g},document.body.classList.add("sidebar-resizing")}return s.jsxs("aside",{className:`resizable-sidebar ${r}`.trim(),style:{width:g},children:[s.jsx("div",{className:"sidebar-resize-handle",onPointerDown:j,role:"separator","aria-orientation":"vertical","aria-label":"Resize sidebar",tabIndex:0,onKeyDown:R=>{R.key==="ArrowLeft"&&z(O=>Math.min(m,O+8)),R.key==="ArrowRight"&&z(O=>Math.max(o,O-8))}}),p]})}const Ym=new Set(xr);function sb(r){const c=xr.filter(o=>r.includes(o)),f=r.filter(o=>!xr.includes(o)).sort();return[...c,...f]}function fb(){const{showToast:r}=Nr(),[c,f]=b.useState(null),[o,m]=b.useState("contact"),[p,g]=b.useState([]),[z,y]=b.useState(!0),[h,N]=b.useState(!1),j=b.useCallback(async()=>{y(!0);try{const X=(await Ae.getProfile()).profile||{};f(X),g(Object.keys(X).filter(P=>!Ym.has(P)))}catch(V){r(V.message,"error")}finally{y(!1)}},[r]);b.useEffect(()=>{j()},[j]);const R=b.useMemo(()=>{const V=c?Object.keys(c):[];return sb([...new Set([...xr,...V,...p])]).filter(P=>c&&P in c)},[c,p]);function O(V,X){f(P=>({...P,[V]:X}))}function q(){const V=window.prompt("New section name (e.g. Publications):");if(!V)return;const X=V.trim().toLowerCase().replace(/\s+/g,"_");X&&(g(P=>P.includes(X)?P:[...P,X]),f(P=>({...P,[X]:P[X]||{}})),m(X))}function G(){window.confirm(`Delete section "${mr(o)}"?`)&&(f(V=>{const X={...V};return delete X[o],X}),g(V=>V.filter(X=>X!==o)),m("contact"))}async function Y(){N(!0);try{await Ae.saveProfile(c),r("Profile saved")}catch(V){r(V.message,"error")}finally{N(!1)}}if(z||!c)return s.jsx("div",{className:"profile-page",children:s.jsx(dp,{label:"Loading profile…"})});const Z=!Ym.has(o);return s.jsx("div",{className:"profile-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:mr(o)}),s.jsxs("p",{className:"page-lead",children:["Edit your ",mr(o).toLowerCase()," details for tailored applications."]})]}),Z&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:G,children:"Delete section"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(ub,{sectionKey:o,value:c[o],onChange:V=>O(o,V)})})]})}),s.jsxs(Jn,{className:"profile-sidebar",storageKey:"joblication.sidebar.profile",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[s.jsx("p",{className:"profile-nav-label",children:"Sections"}),s.jsx("ul",{children:R.map(V=>s.jsx("li",{children:s.jsx("button",{type:"button",className:`profile-nav-item ${o===V?"active":""}`,onClick:()=>m(V),children:mr(V)})},V))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:Y,disabled:h,children:h?"Saving…":"Save profile"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:q,children:"+ Section"})]})]})]})})}const ac={company:"",title:"",location:"",url:"",about:"",description:""};function db(r){const c=r.split(`
`).map(o=>o.trim()).filter(Boolean),f=r.match(/https?:\/\/[^\s]+/i);return{url:f?f[0]:"",title:c[0]||"",description:r,about:c.slice(0,3).join(" ")}}function mb(r){return r?r.split("_").slice(0,-2).join(" ").replace(/\b\w/g,f=>f.toUpperCase()):""}function pb({draft:r,onChange:c}){return s.jsxs(s.Fragment,{children:[s.jsxs(mp,{children:[s.jsx($e,{id:"job_company",label:"Company",value:r.company,onChange:f=>c({...r,company:f})}),s.jsx($e,{id:"job_title",label:"Job title",value:r.title,onChange:f=>c({...r,title:f})}),s.jsx($e,{id:"job_location",label:"Location",value:r.location,onChange:f=>c({...r,location:f})}),s.jsx($e,{id:"job_url",label:"Job URL",value:r.url,onChange:f=>c({...r,url:f})})]}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_about",label:"About",value:r.about,onChange:f=>c({...r,about:f}),multiline:!0,rows:4,hint:"Company or role overview."})}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx($e,{id:"job_description",label:"Description",value:r.description,onChange:f=>c({...r,description:f}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function hb(){const{showToast:r}=Nr(),[c,f]=b.useState([]),[o,m]=b.useState(null),[p,g]=b.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[z,y]=b.useState(""),[h,N]=b.useState(ac),[j,R]=b.useState(!1),[O,q]=b.useState(!1),G=b.useRef(null),Y=b.useCallback(async()=>{try{const U=await Ae.listJobs();f(U.applications||[])}catch(U){r(U.message,"error")}},[r]);b.useEffect(()=>{Y()},[Y]),b.useEffect(()=>{G.current?.scrollIntoView({behavior:"smooth"})},[p]);async function Z(U){m(U),R(!0);try{const L=await Ae.getJob(U);N({company:mb(U),title:L.title||"",location:L.location||"",url:L.url||"",about:L.about||"",description:L.description||""})}catch(L){r(L.message,"error")}}async function V(){const U=z.trim();if(!(!U||O)){g(L=>[...L,{role:"user",content:U}]),y(""),q(!0);try{if(/^https?:\/\//i.test(U)||U.includes("linkedin.com")||U.includes("jobs.")){const ee=await Ae.scrapeUrl(U);N(ce=>({...ce,url:ee.url,title:ce.title||ee.title||"",about:ee.about||ce.about,description:ee.description||ce.description})),g(ce=>[...ce,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),R(!0)}else{const ee=db(U);N(ce=>({...ce,...ee,description:U})),g(ce=>[...ce,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),R(!0)}}catch(L){g(ee=>[...ee,{role:"assistant",content:`Error: ${L.message}`}])}finally{q(!1)}}}async function X(){if(!h.company.trim()||!h.title.trim()){r("Company and title are required","error");return}q(!0);try{if(o)await Ae.updateJob(o,h),r("Job updated");else{const U=await Ae.createJob(h);m(U.slug),r("Job saved")}await Y(),R(!0)}catch(U){r(U.message,"error")}finally{q(!1)}}async function P(){if(!(!o||!window.confirm("Delete this job?")))try{await Ae.deleteJob(o),m(null),N(ac),R(!1),await Y(),r("Job deleted")}catch(U){r(U.message,"error")}}function Q(){m(null),N(ac),R(!0)}return s.jsx("div",{className:"profile-page jobs-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main jobs-main",children:s.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[j?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:o?"Edit job":"New job"}),s.jsx("p",{className:"page-lead",children:o?"Update role details before generating documents.":"Add a role to start tailoring your application."})]}),o&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:P,children:"Delete job"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(pb,{draft:h,onChange:N})})]}):s.jsxs("div",{className:"jobs-welcome",children:[s.jsx("h1",{children:"Jobs"}),s.jsx("p",{className:"page-lead",children:"Paste a job URL or description in the chat below, or select a saved role from the sidebar."})]}),s.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[s.jsxs("div",{className:"jobs-chat-messages",children:[p.map((U,L)=>s.jsxs("div",{className:`jobs-chat-bubble ${U.role}`,children:[s.jsx("span",{className:"jobs-chat-label",children:U.role==="user"?"You":"Joblication"}),s.jsx("p",{children:U.content})]},L)),s.jsx("div",{ref:G})]}),s.jsxs("div",{className:"jobs-chat-composer",children:[s.jsx("div",{className:"jobs-chat-input-wrap",children:s.jsx($e,{id:"job_intake",label:"Paste URL or job description",value:z,onChange:y,multiline:!0,rows:3,onKeyDown:U=>{U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),V())}})}),s.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:V,disabled:O,children:O?"…":"Send"})]})]})]})}),s.jsxs(Jn,{className:"profile-sidebar jobs-sidebar",storageKey:"joblication.sidebar.jobs",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[s.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),s.jsxs("ul",{children:[c.map(U=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${o===U.slug?"active":""}`,onClick:()=>Z(U.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:U.title||U.slug}),U.location&&s.jsx("span",{className:"jobs-nav-meta",children:U.location})]})},U.slug)),!c.length&&s.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:X,disabled:O||!j,children:O?"Saving…":"Save job"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:Q,children:"+ New job"})]})]})]})})}const vp=[{value:"unsubmitted",label:"Unsubmitted"},{value:"submitted",label:"Submitted"},{value:"interview",label:"Interview"},{value:"accepted",label:"Accepted"},{value:"rejected",label:"Rejected"}];function gb(r){const c={all:r.length,unsubmitted:0,submitted:0,interview:0,accepted:0,rejected:0,withOutput:0};for(const f of r)c[f.status]!==void 0&&(c[f.status]+=1),f.has_output&&(c.withOutput+=1);return c}function vb({app:r,selectMode:c,selected:f,onToggleSelect:o,onUpdateStatus:m}){function p(){c&&o(r.slug)}return s.jsxs("article",{className:["application-card",c?"selectable":"",f?"is-selected":""].filter(Boolean).join(" "),onClick:c?p:void 0,onKeyDown:c?g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),o(r.slug))}:void 0,role:c?"button":void 0,tabIndex:c?0:void 0,children:[c&&s.jsx("div",{className:"application-card-check","aria-hidden":!c,children:s.jsx("input",{type:"checkbox",checked:f,onChange:()=>o(r.slug),onClick:g=>g.stopPropagation(),"aria-label":`Select ${r.title||r.slug}`})}),s.jsxs("div",{className:"application-card-inner",children:[s.jsxs("header",{className:"application-card-header",children:[s.jsx("h3",{children:r.title||r.slug}),s.jsx("p",{className:"application-card-slug",children:r.slug})]}),s.jsxs("div",{className:"application-card-meta",children:[s.jsx("span",{className:`output-badge ${r.has_output?"ready":"pending"}`,children:r.has_output?"Documents ready":"Awaiting generation"}),!c&&s.jsx("select",{value:r.status,onChange:g=>m(r.slug,g.target.value),className:`status-pill status-${r.status}`,"aria-label":"Application status",onClick:g=>g.stopPropagation(),children:vp.map(g=>s.jsx("option",{value:g.value,children:g.label},g.value))})]}),s.jsx("div",{className:"application-card-body",children:r.has_output?s.jsx("ul",{className:"application-files",children:r.files.map(g=>s.jsx("li",{children:s.jsxs("a",{href:Ae.fileUrl(r.output_folder,g),target:"_blank",rel:"noreferrer",className:"application-file-link",onClick:z=>z.stopPropagation(),children:[s.jsx(Gv,{}),s.jsx("span",{children:g.replace(/.*\//,"")}),s.jsx(Xv,{})]})},g))}):s.jsx("p",{className:"application-hint",children:"Generate to create CV and cover letter for this role."})}),!c&&s.jsx("footer",{className:"application-card-footer",children:s.jsx(wr,{to:`/review?slug=${encodeURIComponent(r.slug)}`,className:"md-text-btn",onClick:g=>g.stopPropagation(),children:"Review & edit"})})]})]})}function bb(){const{showToast:r}=Nr(),[c,f]=b.useState([]),[o,m]=b.useState(!1),[p,g]=b.useState(null),[z,y]=b.useState(!0),[h,N]=b.useState("all"),[j,R]=b.useState(!1),[O,q]=b.useState(()=>new Set),G=b.useCallback(async()=>{y(!0);try{const $=await Ae.listApplications();f($.applications||[])}catch($){r($.message,"error")}finally{y(!1)}},[r]),Y=b.useCallback(async()=>{try{const $=await Ae.generateStatus();g($),$.running?setTimeout(Y,2e3):(m(!1),$.error?r($.error,"error"):$.step==="complete"&&(r("Generation complete"),G()))}catch{m(!1)}},[G,r]);b.useEffect(()=>{G()},[G]);const Z=b.useMemo(()=>gb(c),[c]),V=b.useMemo(()=>h==="all"?c:h==="with_output"?c.filter($=>$.has_output):c.filter($=>$.status===h),[c,h]),X=O.size;function P(){R(!1),q(new Set)}function Q($){q(ne=>{const ye=new Set(ne);return ye.has($)?ye.delete($):ye.add($),ye})}async function U($,ne){try{await Ae.updateJob($,{status:ne}),f(ye=>ye.map(Re=>Re.slug===$?{...Re,status:ne}:Re))}catch(ye){r(ye.message,"error")}}async function L(){m(!0);try{await Ae.startGenerate(),Y()}catch($){m(!1),r($.message,"error")}}async function ee(){X&&(r(X===1?"Starting generation for 1 application":`Starting generation (${X} selected)`),await L())}async function ce(){if(!X)return;const $=X===1?"Delete this application?":`Delete ${X} applications?`;if(!window.confirm($))return;const ne=[...O];let ye=0;for(const Re of ne)try{await Ae.deleteJob(Re)}catch{ye+=1}ye?r(`Deleted ${ne.length-ye} of ${ne.length}`,ye===ne.length?"error":"success"):r(X===1?"Application deleted":`${X} applications deleted`),P(),await G()}const ge=[{key:"all",label:"All applications",count:Z.all},{key:"with_output",label:"Ready to review",count:Z.withOutput},...vp.map($=>({key:$.value,label:$.label,count:Z[$.value]}))];return z?s.jsx("div",{className:"profile-page",children:s.jsx(dp,{label:"Loading applications…"})}):s.jsx("div",{className:"profile-page applications-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner applications-main-inner",children:[s.jsxs("div",{className:"applications-page-header",children:[s.jsx("h1",{children:"Applications"}),s.jsx("p",{className:"page-lead",children:"Track generated documents and pipeline status for each role."})]}),c.length>0&&s.jsx("div",{className:`applications-toolbar ${j?"selecting":""}`,children:j?s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:P,children:"Cancel"}),s.jsx("span",{className:"applications-selection-count",children:X?`${X} selected`:"Select applications"}),s.jsx("div",{className:"applications-toolbar-spacer"}),s.jsxs("button",{type:"button",className:"md-filled-btn applications-toolbar-primary",onClick:ee,disabled:!X||o,children:[s.jsx(Hm,{}),o?"Generating…":`Generate${X?` (${X})`:""}`]}),s.jsxs("button",{type:"button",className:"md-outlined-btn applications-toolbar-danger",onClick:ce,disabled:!X,children:["Delete",X?` (${X})`:""]})]}):s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:()=>R(!0),children:"Select"}),s.jsx("div",{className:"applications-toolbar-spacer"}),s.jsxs("button",{type:"button",className:"md-filled-btn applications-toolbar-primary",onClick:L,disabled:o,children:[s.jsx(Hm,{}),o?`Generating… ${p?.step||""}`:"Generate all"]})]})}),o&&s.jsxs("div",{className:"generation-banner",children:[s.jsx("div",{className:"generation-banner-track",children:s.jsx("div",{className:"generation-banner-fill"})}),s.jsxs("p",{children:["Running pipeline",p?.step?` — ${p.step}`:"…"]})]}),c.length?V.length?s.jsx("div",{className:"applications-grid",children:V.map($=>s.jsx(vb,{app:$,selectMode:j,selected:O.has($.slug),onToggleSelect:Q,onUpdateStatus:U},$.slug))}):s.jsx(Bm,{icon:uc,title:"No matches",description:"Try a different filter from the sidebar."}):s.jsx(Bm,{icon:uc,title:"No applications yet",description:"Add jobs from the Jobs page, then generate tailored CVs and cover letters here.",action:s.jsx(wr,{to:"/jobs",className:"md-outlined-btn",children:"Go to Jobs"})})]})}),s.jsxs(Jn,{className:"profile-sidebar applications-sidebar",storageKey:"joblication.sidebar.applications",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Filter applications",children:[s.jsx("p",{className:"profile-nav-label",children:"Filter"}),s.jsx("ul",{children:ge.map($=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item filter-item ${h===$.key?"active":""}`,onClick:()=>N($.key),children:[s.jsx("span",{className:"filter-label",children:$.label}),s.jsx("span",{className:"filter-count",children:$.count})]})},$.key))})]}),s.jsx("div",{className:"profile-sidebar-actions",children:s.jsxs("div",{className:"applications-stats",children:[s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:Z.all}),s.jsx("span",{className:"stat-label",children:"Total"})]}),s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:Z.withOutput}),s.jsx("span",{className:"stat-label",children:"Generated"})]})]})})]})]})})}const oc=[{label:"Georgia",value:"Georgia, serif",group:"Serif"},{label:"Times New Roman",value:"'Times New Roman', Times, serif",group:"Serif"},{label:"Garamond",value:"Garamond, 'Times New Roman', serif",group:"Serif"},{label:"Palatino",value:"'Palatino Linotype', Palatino, serif",group:"Serif"},{label:"Merriweather",value:"'Merriweather', Georgia, serif",group:"Serif",google:"Merriweather"},{label:"Lora",value:"'Lora', Georgia, serif",group:"Serif",google:"Lora"},{label:"Libre Baskerville",value:"'Libre Baskerville', Georgia, serif",group:"Serif",google:"Libre Baskerville"},{label:"Source Serif 4",value:"'Source Serif 4', Georgia, serif",group:"Serif",google:"Source Serif 4"},{label:"Crimson Text",value:"'Crimson Text', Georgia, serif",group:"Serif",google:"Crimson Text"},{label:"Arial",value:"Arial, Helvetica, sans-serif",group:"Sans-serif"},{label:"Helvetica",value:"Helvetica, Arial, sans-serif",group:"Sans-serif"},{label:"Calibri",value:"Calibri, 'Segoe UI', sans-serif",group:"Sans-serif"},{label:"Verdana",value:"Verdana, Geneva, sans-serif",group:"Sans-serif"},{label:"Tahoma",value:"Tahoma, Geneva, sans-serif",group:"Sans-serif"},{label:"Open Sans",value:"'Open Sans', Arial, sans-serif",group:"Sans-serif",google:"Open Sans"},{label:"Roboto",value:"'Roboto', Arial, sans-serif",group:"Sans-serif",google:"Roboto"},{label:"Lato",value:"'Lato', Arial, sans-serif",group:"Sans-serif",google:"Lato"},{label:"Inter",value:"'Inter', Arial, sans-serif",group:"Sans-serif",google:"Inter"},{label:"Montserrat",value:"'Montserrat', Arial, sans-serif",group:"Sans-serif",google:"Montserrat"},{label:"Source Sans 3",value:"'Source Sans 3', Arial, sans-serif",group:"Sans-serif",google:"Source Sans 3"},{label:"Poppins",value:"'Poppins', Arial, sans-serif",group:"Sans-serif",google:"Poppins"},{label:"Courier New",value:"'Courier New', Courier, monospace",group:"Monospace"},{label:"Consolas",value:"Consolas, 'Courier New', monospace",group:"Monospace"}],yb=[...new Set(oc.filter(r=>r.google).map(r=>r.google))],ql="__inherit__";let lc=!1;function xb(){if(lc||typeof document>"u")return;const r="joblication-template-fonts";if(document.getElementById(r)){lc=!0;return}const c=yb.map(o=>`family=${o.replace(/ /g,"+")}:wght@400;600`).join("&"),f=document.createElement("link");f.id=r,f.rel="stylesheet",f.href=`https://fonts.googleapis.com/css2?${c}&display=swap`,document.head.appendChild(f),lc=!0}function bp({value:r,onChange:c,allowInherit:f=!1,inheritLabel:o="Inherit document",compact:m=!1}){const p=b.useRef(null),g=b.useRef(null);b.useEffect(()=>{xb()},[]);const z=b.useMemo(()=>{const h=r?.trim(),N=[...oc];return h&&!oc.some(j=>j.value===h)&&N.unshift({label:"Custom",value:h,group:"Custom"}),N},[r]),y=b.useMemo(()=>{const h=new Map;f&&h.set("Inherit",[{label:o,value:ql,group:"Inherit"}]);for(const N of z)h.has(N.group)||h.set(N.group,[]),h.get(N.group).push(N);return[...h.entries()]},[z,f,o]);return b.useEffect(()=>{g.current?.scrollIntoView({block:"nearest"})},[r]),s.jsx("div",{className:`ps-font-picker ${m?"compact":""}`,children:s.jsx("div",{className:"ps-font-picker-list",ref:p,role:"listbox","aria-label":"Font family",children:y.map(([h,N])=>s.jsxs("div",{className:"ps-font-picker-group",children:[s.jsx("p",{className:"ps-font-picker-group-label",children:h}),N.map(j=>{const R=j.value===ql?!r?.trim():r===j.value;return s.jsxs("button",{type:"button",ref:R?g:null,role:"option","aria-selected":R,className:`ps-font-option ${R?"active":""} ${j.value===ql?"inherit":""}`,style:j.value===ql?void 0:{fontFamily:j.value},onClick:()=>c(j.value===ql?"":j.value),children:[s.jsx("span",{className:"ps-font-option-name",children:j.label}),j.value!==ql&&s.jsx("span",{className:"ps-font-option-sample",children:"The quick brown fox"})]},j.value)})]},h))})})}const Sb="";function jb({bold:r,italic:c,underline:f,onChange:o}){return s.jsxs("div",{className:"ps-style-toggles",role:"group","aria-label":"Text style",children:[s.jsx("button",{type:"button",className:`ps-style-btn ${r?"active":""}`,onClick:()=>o({bold:!r}),title:"Bold",children:"B"}),s.jsx("button",{type:"button",className:`ps-style-btn ${c?"active":""}`,onClick:()=>o({italic:!c}),title:"Italic",children:"I"}),s.jsx("button",{type:"button",className:`ps-style-btn ${f?"active":""}`,onClick:()=>o({underline:!f}),title:"Underline",children:"U"})]})}function qm({title:r,prefix:c,layer:f,onPatch:o}){const m=`${c}FontFamily`,p=`${c}FontSize`,g=`${c}Bold`,z=`${c}Italic`,y=`${c}Underline`,h=`${c}Color`,N=f[m]||Sb,j=f[p]??(c==="body"?f.fontSize:void 0);return s.jsxs("div",{className:"ps-type-block",children:[s.jsx("h5",{className:"ps-type-block-title",children:r}),s.jsxs("div",{className:"ps-prop-row",children:[s.jsx("label",{children:"Font"}),s.jsx(bp,{compact:!0,allowInherit:!0,value:N,onChange:R=>o({[m]:R||void 0})})]}),s.jsxs("div",{className:"ps-type-row",children:[s.jsxs("div",{className:"ps-prop-row ps-type-size",children:[s.jsx("label",{children:"Size (px)"}),s.jsx("input",{type:"number",className:"ps-num-input full",min:6,max:48,placeholder:"Inherit",value:j??"",onChange:R=>o({[p]:R.target.value?Number(R.target.value):void 0,...c==="body"?{fontSize:void 0}:{}})})]}),s.jsxs("div",{className:"ps-prop-row ps-type-style",children:[s.jsx("label",{children:"Style"}),s.jsx(jb,{bold:!!f[g],italic:!!f[z],underline:!!f[y],onChange:R=>{const O={};"bold"in R&&(O[g]=R.bold||void 0),"italic"in R&&(O[z]=R.italic||void 0),"underline"in R&&(O[y]=R.underline||void 0),o(O)}})]})]}),s.jsxs("div",{className:"ps-prop-row",children:[s.jsx("label",{children:"Color"}),s.jsxs("div",{className:"ps-color-field",children:[s.jsx("input",{type:"color",className:"ps-color-input",value:f[h]||(c==="headline"?"#1a1a1a":"#444444"),onChange:R=>o({[h]:R.target.value})}),s.jsx("button",{type:"button",className:"ps-style-btn ps-color-reset",onClick:()=>o({[h]:void 0}),title:"Reset color",children:"Reset"})]})]})]})}function Eb(r,c){const f=c.fontFamily||"Georgia, serif",o=c.fontSize||11,m=r.bodyFontSize??r.fontSize??o,p=r.headlineFontSize??Math.round(m*1.15);return{headline:{fontFamily:r.headlineFontFamily||f,fontSize:p,fontWeight:r.headlineBold?700:600,fontStyle:r.headlineItalic?"italic":"normal",textDecoration:r.headlineUnderline?"underline":"none",color:r.headlineColor||"#1a1a1a"},body:{fontFamily:r.bodyFontFamily||f,fontSize:m,fontWeight:r.bodyBold?700:400,fontStyle:r.bodyItalic?"italic":"normal",textDecoration:r.bodyUnderline?"underline":"none",color:r.bodyColor||"#444444"}}}function zb({layer:r,onPatch:c}){return s.jsxs("div",{className:"ps-type-panel",children:[s.jsx(qm,{title:"Headline",prefix:"headline",layer:r,onPatch:c}),s.jsx(qm,{title:"Body",prefix:"body",layer:r,onPatch:c})]})}const wb=["nw","n","ne","e","se","s","sw","w"],Nb={nw:"nwse-resize",n:"ns-resize",ne:"nesw-resize",e:"ew-resize",se:"nwse-resize",s:"ns-resize",sw:"nesw-resize",w:"ew-resize"};function Xl(r,c,f){return Math.min(f,Math.max(c,r))}function Gm(r){return Math.round(r*10)/10}function Tb(r,c,f){const o=f||5,m=r*o/100;return{cellPx:m,stepX:o,stepY:m/c*100}}function Cb(r,c,f){return{snapX:p=>f&&r>0?Math.round(p/r)*r:Gm(p),snapY:p=>f&&c>0?Math.round(p/c)*c:Gm(p)}}function Rb(r,c,f,o){let{x:m,y:p,w:g,h:z}=c;const y=8,h=4;return r.includes("e")&&(g+=f),r.includes("w")&&(m+=f,g-=f),r.includes("s")&&(z+=o),r.includes("n")&&(p+=o,z-=o),g<y&&(r.includes("w")&&(m-=y-g),g=y),z<h&&(r.includes("n")&&(p-=h-z),z=h),m=Xl(m,0,100-y),p=Xl(p,0,100-h),g=Xl(g,y,100-m),z=Xl(z,h,100-p),{x:m,y:p,w:g,h:z}}function Ab({layout:r,sections:c,activeSection:f,onSelectSection:o,onUpdateSection:m}){const p=b.useRef(null),g=b.useRef(null),z=b.useRef(null),y=b.useRef(!1),h=r.pageWidth||595,N=r.pageHeight||842,j=r.zoom||1,R=Tb(h,N,r.gridSize),O=r.snapToGrid,{snapX:q,snapY:G}=Cb(R.stepX,R.stepY,O),Y=[...c].sort((Q,U)=>(Q.zIndex??1)-(U.zIndex??1)),Z=b.useCallback(()=>{const Q=z.current;if(Q?.mode==="pan"&&Q.scrollEl?.releasePointerCapture)try{Q.scrollEl.releasePointerCapture(Q.pointerId)}catch{}z.current=null,document.body.classList.remove("ps-dragging","ps-panning")},[]),V=b.useCallback(Q=>{const U=z.current;if(!U)return;if(U.mode==="pan"){const $=g.current;if(!$)return;const ne=Q.clientX-U.startX,ye=Q.clientY-U.startY;(Math.abs(ne)>2||Math.abs(ye)>2)&&(y.current=!0),$.scrollLeft=U.origScrollLeft-ne,$.scrollTop=U.origScrollTop-ye;return}const L=p.current;if(!L)return;const ee=L.getBoundingClientRect(),ce=(Q.clientX-U.startX)/ee.width*100,ge=(Q.clientY-U.startY)/ee.height*100;if(U.mode==="move"){const $=100-U.origW,ne=100-U.origH;m(U.id,{x:q(Xl(U.origX+ce,0,$)),y:G(Xl(U.origY+ge,0,ne))})}else if(U.mode.startsWith("resize-")){const $=U.mode.slice(7),ne=Rb($,{x:U.origX,y:U.origY,w:U.origW,h:U.origH},ce,ge);m(U.id,{x:q(ne.x),y:G(ne.y),w:q(ne.w),h:G(ne.h)})}},[m,q,G]);b.useEffect(()=>(window.addEventListener("pointermove",V),window.addEventListener("pointerup",Z),window.addEventListener("pointercancel",Z),()=>{window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",Z),window.removeEventListener("pointercancel",Z)}),[V,Z]);function X(Q){if(Q.button!==0||Q.target.closest(".ps-layer")||Q.target.closest(".ps-handle"))return;const U=g.current;U&&(Q.preventDefault(),y.current=!1,U.setPointerCapture?.(Q.pointerId),z.current={mode:"pan",startX:Q.clientX,startY:Q.clientY,origScrollLeft:U.scrollLeft,origScrollTop:U.scrollTop,pointerId:Q.pointerId,scrollEl:U},document.body.classList.add("ps-panning"))}function P(Q,U,L){U.locked||(Q.stopPropagation(),Q.preventDefault(),z.current={id:U.id,mode:L,startX:Q.clientX,startY:Q.clientY,origX:U.x,origY:U.y,origW:U.w,origH:U.h},document.body.classList.add("ps-dragging"),o(U.id))}return s.jsxs("div",{className:"ps-workspace",children:[s.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(Q,U)=>s.jsx("span",{style:{left:`${U/11*100}%`},children:Math.round(h/11*U)},U))}),s.jsx("div",{className:"ps-canvas-scroll",ref:g,onPointerDown:X,children:s.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${j})`,transformOrigin:"top center"},children:s.jsxs("div",{ref:p,className:"ps-canvas",style:{width:h,minHeight:N,padding:r.pagePadding,fontSize:`${r.fontSize}px`,lineHeight:r.lineHeight,fontFamily:r.fontFamily||"Georgia, serif",backgroundColor:r.pageBackground||"#ffffff"},onClick:()=>{if(y.current){y.current=!1;return}o(null)},onKeyDown:()=>{},role:"presentation",children:[r.showGrid&&s.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${R.cellPx}px ${R.cellPx}px`}}),Y.filter(Q=>Q.visible!==!1).map(Q=>{const U=f===Q.id,L=Eb(Q,r);return s.jsxs("div",{className:`ps-layer ${U?"selected":""} ${Q.locked?"locked":""}`,style:{left:`${Q.x}%`,top:`${Q.y}%`,width:`${Q.w}%`,height:`${Q.h}%`,zIndex:Q.zIndex??1,opacity:Q.opacity??1,textAlign:Q.textAlign||"left",padding:Q.padding??8,backgroundColor:Q.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:ee=>{ee.stopPropagation(),o(Q.id)},onPointerDown:ee=>{ee.target.closest(".ps-handle")||P(ee,Q,"move")},onKeyDown:()=>{},role:"button",tabIndex:0,children:[s.jsx("span",{className:"ps-layer-label",style:{fontFamily:L.headline.fontFamily,fontSize:`${L.headline.fontSize}px`,fontWeight:L.headline.fontWeight,fontStyle:L.headline.fontStyle,textDecoration:L.headline.textDecoration,color:L.headline.color},children:Q.label}),s.jsxs("p",{className:"ps-layer-preview",style:{fontFamily:L.body.fontFamily,fontSize:`${L.body.fontSize}px`,fontWeight:L.body.fontWeight,fontStyle:L.body.fontStyle,textDecoration:L.body.textDecoration,color:L.body.color},children:["Section content preview for ",Q.label.toLowerCase(),"."]}),U&&!Q.locked&&s.jsx(s.Fragment,{children:wb.map(ee=>s.jsx("span",{className:`ps-handle ps-handle-${ee}`,style:{cursor:Nb[ee]},onPointerDown:ce=>P(ce,Q,`resize-${ee}`)},ee))})]},Q.id)})]})})})]})}const Gl={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function Xm(r){if(!r)return{...Gl,sections:Gl.sections.map(f=>({...f}))};const c=(r.sections||Gl.sections).map(f=>({...Gl.sections[0],...f}));return{...Gl,...r,sections:c}}function tt({label:r,children:c}){return s.jsxs("div",{className:"ps-prop-row",children:[s.jsx("label",{children:r}),c]})}function Qt({value:r,onChange:c,min:f,max:o,step:m=1,unit:p="%"}){return s.jsxs("div",{className:"ps-range-field",children:[s.jsx("input",{type:"range",min:f,max:o,step:m,value:r,onChange:g=>c(Number(g.target.value))}),s.jsx("input",{type:"number",className:"ps-num-input",min:f,max:o,step:m,value:r,onChange:g=>c(Number(g.target.value))}),s.jsx("span",{className:"ps-unit",children:p})]})}function _b(){const{showToast:r}=Nr(),[c,f]=b.useState({}),[o,m]=b.useState({}),[p,g]=b.useState(""),[z,y]=b.useState(""),[h,N]=b.useState("cv"),[j,R]=b.useState(""),[O,q]=b.useState(()=>Xm(null)),[G,Y]=b.useState("contact"),[Z,V]=b.useState("layer"),[X,P]=b.useState(!1),Q=b.useMemo(()=>({...c,...o}),[c,o]),U=O.sections||[],L=U.find(x=>x.id===G),ee=b.useCallback(async()=>{try{const x=await Ae.listTemplates();f(x.catalog||{}),m(x.custom||{});const J=Object.keys({...x.catalog||{},...x.custom||{}});J.length&&!p&&g(J[0])}catch(x){r(x.message,"error")}},[p,r]),ce=b.useCallback(async x=>{if(x)try{const J=await Ae.getTemplate(x);y(J.name||x),N(J.category||"cv"),R(J.source||"");const ue=Xm(J.layout);q(ue),ue.sections?.length&&Y(ue.sections[0].id)}catch(J){r(J.message,"error")}},[r]);b.useEffect(()=>{ee()},[ee]),b.useEffect(()=>{p&&ce(p)},[p,ce]);const ge=b.useCallback((x,J)=>{q(ue=>({...ue,sections:ue.sections.map(fe=>fe.id===x?{...fe,...J}:fe)}))},[]);function $(){const x=window.prompt("Layer name:");if(!x)return;const J=x.toLowerCase().replace(/\s+/g,"_"),ue=Math.max(0,...U.map(fe=>fe.zIndex??1));q(fe=>({...fe,sections:[...fe.sections,{id:J,label:x,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:ue+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),Y(J)}function ne(){!L||!window.confirm(`Delete layer "${L.label}"?`)||(q(x=>({...x,sections:x.sections.filter(J=>J.id!==G)})),Y(U[0]?.id||""))}const ye=b.useCallback((x,J)=>{q(ue=>{const fe=[...ue.sections].sort((le,be)=>(be.zIndex??1)-(le.zIndex??1)),E=fe.findIndex(le=>le.id===x);if(E<0)return ue;const B=fe[E],K=fe.filter(le=>le.id!==x),F=Math.max(0,Math.min(J,K.length));K.splice(F,0,B);const ie=K.map((le,be)=>({...le,zIndex:K.length-be}));return{...ue,sections:ie}})},[]);async function Re(){P(!0);try{await Ae.saveTemplate(p,{name:z,category:h,source:j,layout:O}),r("Template saved"),await ee()}catch(x){r(x.message,"error")}finally{P(!1)}}async function Me(){const x=window.prompt("Template id (e.g. my_cv):");if(x){P(!0);try{await Ae.createTemplate({id:x,name:x,category:"cv",source:`<!-- Custom template -->
`,layout:Gl}),g(x),await ee(),r("Template created")}catch(J){r(J.message,"error")}finally{P(!1)}}}const M=[...U].sort((x,J)=>(J.zIndex??1)-(x.zIndex??1));return s.jsxs("div",{className:"ps-editor",children:[s.jsxs("header",{className:"ps-toolbar",children:[s.jsxs("div",{className:"ps-toolbar-left",children:[s.jsx("select",{value:p,onChange:x=>g(x.target.value),className:"ps-select",children:Object.entries(Q).map(([x,J])=>s.jsx("option",{value:x,children:J.name||x},x))}),s.jsx("button",{type:"button",className:"ps-tool-btn",onClick:Me,children:"New"}),s.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:Re,disabled:X,children:X?"Saving…":"Save"})]}),s.jsx("div",{className:"ps-toolbar-center",children:s.jsx("span",{className:"ps-doc-name",children:z||"Untitled"})}),s.jsxs("div",{className:"ps-toolbar-right",children:[s.jsxs("label",{className:"ps-zoom-label",children:["Zoom",s.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:O.zoom||.85,onChange:x=>q({...O,zoom:Number(x.target.value)})}),s.jsxs("span",{children:[Math.round((O.zoom||.85)*100),"%"]})]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:O.snapToGrid,onChange:x=>q({...O,snapToGrid:x.target.checked})}),"Snap"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:O.showGrid,onChange:x=>q({...O,showGrid:x.target.checked})}),"Grid"]})]})]}),s.jsxs("div",{className:"ps-body",children:[s.jsxs("aside",{className:"ps-panel ps-layers",children:[s.jsxs("div",{className:"ps-panel-head",children:[s.jsx("h3",{children:"Layers"}),s.jsx("button",{type:"button",className:"ps-icon-btn",onClick:$,title:"Add layer",children:"+"})]}),s.jsx(LayerList,{layers:M,activeId:G,onSelect:Y,onReorder:ye,onToggleVisible:(x,J)=>ge(x,{visible:!J})})]}),s.jsx(Ab,{layout:O,sections:U,activeSection:G,onSelectSection:Y,onUpdateSection:ge}),s.jsxs(Jn,{className:"ps-panel ps-properties",storageKey:"joblication.sidebar.templates",defaultWidth:300,minWidth:260,maxWidth:560,children:[s.jsxs("div",{className:"ps-tabs",children:[s.jsx("button",{type:"button",className:Z==="document"?"active":"",onClick:()=>V("document"),children:"Document"}),s.jsx("button",{type:"button",className:Z==="layer"?"active":"",onClick:()=>V("layer"),children:"Layer"}),s.jsx("button",{type:"button",className:Z==="source"?"active":"",onClick:()=>V("source"),children:"Source"})]}),Z==="document"&&s.jsxs("div",{className:"ps-props",children:[s.jsx($e,{label:"Template name",value:z,onChange:y}),s.jsx(tt,{label:"Category",children:s.jsxs("select",{value:h,onChange:x=>N(x.target.value),className:"ps-select full",children:[s.jsx("option",{value:"cv",children:"CV"}),s.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),s.jsx(tt,{label:"Page width (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:O.pageWidth,onChange:x=>q({...O,pageWidth:Number(x.target.value)})})}),s.jsx(tt,{label:"Page height (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:O.pageHeight,onChange:x=>q({...O,pageHeight:Number(x.target.value)})})}),s.jsx(tt,{label:"Padding (px)",children:s.jsx(Qt,{value:O.pagePadding,onChange:x=>q({...O,pagePadding:x}),min:0,max:120,unit:"px"})}),s.jsx(tt,{label:"Background",children:s.jsx("input",{type:"color",className:"ps-color-input",value:O.pageBackground||"#ffffff",onChange:x=>q({...O,pageBackground:x.target.value})})}),s.jsx(tt,{label:"Base font size",children:s.jsx(Qt,{value:O.fontSize,onChange:x=>q({...O,fontSize:x}),min:8,max:18,unit:"px"})}),s.jsx(tt,{label:"Line height",children:s.jsx(Qt,{value:O.lineHeight,onChange:x=>q({...O,lineHeight:x}),min:1,max:2,step:.05,unit:""})}),s.jsx(tt,{label:"Font family",children:s.jsx(bp,{value:O.fontFamily||"Georgia, serif",onChange:x=>q({...O,fontFamily:x})})}),s.jsx(tt,{label:"Grid size",children:s.jsx(Qt,{value:O.gridSize||5,onChange:x=>q({...O,gridSize:x}),min:1,max:20,unit:"%"})})]}),Z==="layer"&&L&&s.jsxs("div",{className:"ps-props",children:[s.jsx("h4",{className:"ps-layer-title",children:L.label}),s.jsx(tt,{label:"X position",children:s.jsx(Qt,{value:L.x,onChange:x=>ge(L.id,{x}),min:0,max:95})}),s.jsx(tt,{label:"Y position",children:s.jsx(Qt,{value:L.y,onChange:x=>ge(L.id,{y:x}),min:0,max:95})}),s.jsx(tt,{label:"Width",children:s.jsx(Qt,{value:L.w,onChange:x=>ge(L.id,{w:x}),min:8,max:100})}),s.jsx(tt,{label:"Height",children:s.jsx(Qt,{value:L.h,onChange:x=>ge(L.id,{h:x}),min:4,max:80})}),s.jsx(tt,{label:"Opacity",children:s.jsx(Qt,{value:Math.round((L.opacity??1)*100),onChange:x=>ge(L.id,{opacity:x/100}),min:10,max:100,unit:"%"})}),s.jsx(tt,{label:"Layer padding",children:s.jsx(Qt,{value:L.padding??8,onChange:x=>ge(L.id,{padding:x}),min:0,max:32,unit:"px"})}),s.jsx(tt,{label:"Text align",children:s.jsxs("select",{className:"ps-select full",value:L.textAlign||"left",onChange:x=>ge(L.id,{textAlign:x.target.value}),children:[s.jsx("option",{value:"left",children:"Left"}),s.jsx("option",{value:"center",children:"Center"}),s.jsx("option",{value:"right",children:"Right"}),s.jsx("option",{value:"justify",children:"Justify"})]})}),s.jsx(tt,{label:"Fill color",children:s.jsx("input",{type:"color",className:"ps-color-input",value:L.bgColor?.startsWith("#")?L.bgColor:"#e8f0fe",onChange:x=>ge(L.id,{bgColor:x.target.value})})}),s.jsx("div",{className:"ps-type-divider",children:s.jsx("span",{children:"Typography"})}),s.jsx(zb,{layer:L,onPatch:x=>ge(L.id,x)}),s.jsxs("div",{className:"ps-check-group",children:[s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:L.visible!==!1,onChange:x=>ge(L.id,{visible:x.target.checked})}),"Visible"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:!!L.locked,onChange:x=>ge(L.id,{locked:x.target.checked})}),"Lock"]})]}),s.jsx("button",{type:"button",className:"ps-danger-btn",onClick:ne,children:"Delete layer"})]}),Z==="layer"&&!L&&s.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),Z==="source"&&s.jsx("textarea",{className:"ps-source-editor",value:j,onChange:x=>R(x.target.value)})]})]})]})}function pr(r,c){return(r||[]).find(f=>f.toLowerCase().includes(c))}function Ob(){const{showToast:r}=useToast(),[c,f]=Rv(),[o,m]=b.useState([]),[p,g]=b.useState(c.get("slug")||""),[z,y]=b.useState(null),[h,N]=b.useState(""),[j,R]=b.useState(""),[O,q]=b.useState("preview"),[G,Y]=b.useState("cv"),[Z,V]=b.useState("html"),[X,P]=b.useState(!1),Q=b.useCallback(async()=>{try{const x=await Ae.listApplications();m(x.applications||[]),!p&&x.applications?.length&&g(x.applications[0].slug)}catch(x){r(x.message,"error")}},[r,p]),U=b.useCallback(async()=>{if(p)try{const x=await Ae.getReview(p);y(x),N(JSON.stringify(x.stage_2||{},null,2)),R(JSON.stringify(x.stage_3||{},null,2))}catch(x){r(x.message,"error")}},[p,r]);b.useEffect(()=>{Q()},[Q]),b.useEffect(()=>{p&&(f({slug:p}),U())},[p,U,f]);const L=z?.output_folder||o.find(x=>x.slug===p)?.output_folder,ee=z?.files?.length?z.files:o.find(x=>x.slug===p)?.files||[],ce=pr(ee,"_cv.html"),ge=pr(ee,"_cv.pdf"),$=pr(ee,"_cover_letter.html"),ne=pr(ee,"_cover_letter.pdf"),ye=b.useMemo(()=>G==="cv"?Z==="pdf"?ge:ce:Z==="pdf"?ne:$,[G,Z,ce,ge,$,ne]),Re=L&&ye?Ae.fileUrl(L,ye):null;async function Me(){P(!0);try{let x,J;try{x=JSON.parse(h),J=JSON.parse(j)}catch(ue){throw new Error(`Invalid JSON: ${ue.message}`)}await Ae.saveReview(p,{app_key:z?.app_key,stage_2:x,stage_3:J}),r("Saved edits"),await U()}catch(x){r(x.message,"error")}finally{P(!1)}}async function M(){P(!0);try{await Ae.saveReview(p,{app_key:z?.app_key,stage_2:JSON.parse(h),stage_3:JSON.parse(j)}),await Ae.rebuild(p),r("PDFs rebuilt"),await Q(),await U(),q("preview"),V("pdf")}catch(x){r(x.message,"error")}finally{P(!1)}}return s.jsx("div",{className:"profile-page review-page",children:s.jsxs("div",{className:"profile-layout review-layout",children:[s.jsx("main",{className:"profile-main review-main",children:s.jsxs("div",{className:"profile-main-inner review-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Review"}),s.jsx("p",{className:"page-lead",children:"Preview generated documents and fine-tune CV and cover letter content."})]}),s.jsxs("div",{className:"header-actions",children:[s.jsx("select",{value:p,onChange:x=>g(x.target.value),className:"ps-select",children:o.map(x=>s.jsx("option",{value:x.slug,children:x.title||x.slug},x.slug))}),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:Me,disabled:X,children:"Save edits"}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:M,disabled:X,children:X?"Working…":"Save & export PDF"})]})]}),s.jsxs("div",{className:"review-tabs",children:[s.jsx("button",{type:"button",className:O==="preview"?"active":"",onClick:()=>q("preview"),children:"Preview"}),s.jsx("button",{type:"button",className:O==="cv"?"active":"",onClick:()=>q("cv"),children:"CV JSON"}),s.jsx("button",{type:"button",className:O==="letter"?"active":"",onClick:()=>q("letter"),children:"Letter JSON"})]}),O==="preview"&&s.jsxs("div",{className:"review-preview-panel",children:[!L&&s.jsxs("p",{className:"muted review-empty",children:["No generated files yet. Run ",s.jsx("strong",{children:"Generate all"})," from Applications, then return here."]}),L&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"review-preview-toolbar",children:[s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:G==="cv"?"active":"",onClick:()=>Y("cv"),children:"CV"}),s.jsx("button",{type:"button",className:G==="letter"?"active":"",onClick:()=>Y("letter"),children:"Cover letter"})]}),s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:Z==="html"?"active":"",onClick:()=>V("html"),disabled:!(G==="cv"?ce:$),children:"HTML"}),s.jsx("button",{type:"button",className:Z==="pdf"?"active":"",onClick:()=>V("pdf"),disabled:!(G==="cv"?ge:ne),children:"PDF"})]}),Re&&s.jsx("a",{href:Re,target:"_blank",rel:"noreferrer",className:"md-text-btn",children:"Open in new tab"})]}),Re?s.jsx("div",{className:"review-preview-frame-wrap",children:s.jsx("iframe",{title:`${G} ${Z} preview`,src:Re,className:"review-preview-frame"},Re)}):s.jsx("p",{className:"muted review-empty",children:Z==="pdf"?"PDF not found — run Save & export PDF.":"HTML preview not available."}),s.jsxs("div",{className:"review-download-row",children:[ge&&s.jsx("a",{href:Ae.fileUrl(L,ge),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download CV PDF"}),ne&&s.jsx("a",{href:Ae.fileUrl(L,ne),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download letter PDF"})]})]})]}),O==="cv"&&s.jsx("textarea",{className:"code-area review-editor",value:h,onChange:x=>N(x.target.value)}),O==="letter"&&s.jsx("textarea",{className:"code-area review-editor",value:j,onChange:x=>R(x.target.value)})]})}),s.jsx(Jn,{className:"profile-sidebar review-sidebar",storageKey:"joblication.sidebar.review",children:s.jsxs("nav",{className:"profile-nav",children:[s.jsx("p",{className:"profile-nav-label",children:"Applications"}),s.jsxs("ul",{children:[o.map(x=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${p===x.slug?"active":""}`,onClick:()=>g(x.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:x.title||x.slug}),s.jsx("span",{className:"jobs-nav-meta",children:x.has_output?"Has output":"No output yet"})]})},x.slug)),!o.length&&s.jsx("li",{className:"jobs-empty",children:"No applications"})]})]})})]})})}function Mb(){return s.jsx(ev,{children:s.jsxs(Ua,{element:s.jsx(Zv,{}),children:[s.jsx(Ua,{index:!0,element:s.jsx(F0,{to:"/jobs",replace:!0})}),s.jsx(Ua,{path:"profile",element:s.jsx(fb,{})}),s.jsx(Ua,{path:"jobs",element:s.jsx(hb,{})}),s.jsx(Ua,{path:"applications",element:s.jsx(bb,{})}),s.jsx(Ua,{path:"templates",element:s.jsx(_b,{})}),s.jsx(Ua,{path:"review",element:s.jsx(Ob,{})})]})})}const Db=`
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
  min-width: 0;
}

.resizable-sidebar {
  position: relative;
  flex-shrink: 0;
  height: 100vh;
  min-height: calc(100vh - 1px);
}

.resizable-sidebar.profile-sidebar {
  position: sticky;
  top: 0;
}

.sidebar-resize-handle {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  margin-left: -3px;
  cursor: col-resize;
  z-index: 20;
  touch-action: none;
}

.sidebar-resize-handle::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  transform: translateX(-50%);
  background: transparent;
  transition: background 0.15s ease, box-shadow 0.15s ease;
}

.sidebar-resize-handle:hover::after,
body.sidebar-resizing .sidebar-resize-handle::after {
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent-glow);
}

body.sidebar-resizing {
  user-select: none;
  cursor: col-resize;
}

body.sidebar-resizing * {
  cursor: col-resize !important;
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

  .profile-sidebar,
  .resizable-sidebar.profile-sidebar {
    position: relative;
    width: 100% !important;
    height: auto;
    min-height: 0;
    border-left: none;
    border-top: 1px solid #3c4043;
    order: -1;
  }

  .sidebar-resize-handle {
    display: none;
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
.applications-page-header {
  margin-bottom: 1.25rem;
}

.applications-page-header h1 {
  margin: 0;
  font-size: 1.85rem;
  font-weight: 650;
  letter-spacing: -0.03em;
}

.applications-page-header .page-lead {
  margin-top: 0.4rem;
}

.applications-toolbar {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-bottom: 1.35rem;
  padding: 0.55rem 0.65rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.applications-toolbar.selecting {
  border-color: rgba(129, 140, 248, 0.28);
  background: rgba(99, 102, 241, 0.06);
}

.applications-toolbar-spacer {
  flex: 1;
  min-width: 0.5rem;
}

.applications-toolbar .md-filled-btn,
.applications-toolbar .md-outlined-btn {
  width: auto;
  min-height: 2.35rem;
  padding: 0.55rem 1rem;
  white-space: nowrap;
}

.applications-toolbar-primary {
  flex-shrink: 0;
}

.applications-toolbar-danger {
  color: var(--error);
  border-color: rgba(248, 113, 113, 0.35);
}

.applications-toolbar-danger:hover:not(:disabled) {
  background: var(--error-muted);
  border-color: rgba(248, 113, 113, 0.45);
  color: var(--error);
}

.applications-toolbar-danger:disabled {
  opacity: 0.45;
}

.applications-selection-count {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--muted);
  padding: 0 0.25rem;
}

.applications-main-inner {
  max-width: 1120px;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  align-items: stretch;
}

.application-card {
  position: relative;
  display: flex;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    border-color var(--transition),
    box-shadow var(--transition),
    transform var(--transition),
    background var(--transition);
}

.application-card:hover:not(.selectable) {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-sm);
}

.application-card.selectable {
  cursor: pointer;
}

.application-card.selectable:hover {
  border-color: var(--border-strong);
}

.application-card.is-selected {
  border-color: rgba(129, 140, 248, 0.55);
  background: rgba(99, 102, 241, 0.06);
  box-shadow: 0 0 0 1px rgba(129, 140, 248, 0.2);
}

.application-card-check {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  z-index: 2;
}

.application-card-check input {
  width: 1.05rem;
  height: 1.05rem;
  margin: 0;
  accent-color: var(--accent-strong);
  cursor: pointer;
}

.application-card-inner {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  width: 100%;
  padding: 1.15rem 1.2rem 0;
}

.application-card.selectable .application-card-inner {
  padding-left: 2.35rem;
}

.application-card-header {
  margin-bottom: 0.85rem;
  min-width: 0;
}

.application-card-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.35;
  word-break: break-word;
}

.application-card-slug {
  margin: 0.3rem 0 0;
  font-size: 0.72rem;
  color: var(--muted-2);
  font-family: var(--font-mono);
  word-break: break-all;
}

.application-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-bottom: 0.85rem;
}

.application-card-top {
  display: none;
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
  padding: 0 0 1rem;
  flex: 1;
  min-height: 4.5rem;
}

.output-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.28rem 0.55rem;
  border-radius: var(--radius-full);
  margin: 0;
  flex-shrink: 0;
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
  justify-content: flex-end;
  margin: 0 -1.2rem;
  padding: 0.75rem 1.2rem;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.12);
}

.application-status-label {
  display: none;
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
  display: flex;
  flex: 1;
  min-height: 0;
}

.ps-body > .ps-layers {
  width: 220px;
  flex-shrink: 0;
}

.ps-body > .ps-workspace {
  flex: 1;
  min-width: 0;
}

.resizable-sidebar.ps-properties {
  border-right: none;
  border-left: 1px solid var(--ps-panel-border);
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
  position: relative;
}

.ps-layer-list.is-sorting {
  user-select: none;
}

.ps-layer-list li,
.ps-layer-row {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  padding: 0 0.35rem;
  border-radius: 6px;
}

.ps-layer-row {
  transition:
    transform 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease,
    background 0.15s ease;
}

.ps-layer-row-shifting {
  transition:
    transform 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    margin 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease;
}

.ps-layer-placeholder {
  display: block;
  margin: 3px 0.35rem;
  border-radius: 6px;
  background: rgba(129, 140, 248, 0.1);
  border: 1px dashed rgba(129, 140, 248, 0.45);
  box-shadow: inset 0 0 12px rgba(129, 140, 248, 0.08);
  transition:
    height 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    margin 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease;
  flex-shrink: 0;
  overflow: hidden;
  animation: ps-placeholder-pulse 1.2s ease-in-out infinite;
}

@keyframes ps-placeholder-pulse {
  0%, 100% { border-color: rgba(129, 140, 248, 0.35); }
  50% { border-color: rgba(129, 140, 248, 0.65); }
}

.ps-layer-ghost {
  position: fixed;
  z-index: 600;
  display: flex;
  align-items: center;
  gap: 0.15rem;
  padding: 0 0.35rem;
  border-radius: 6px;
  background: linear-gradient(180deg, #36363f 0%, #2a2a32 100%);
  border: 1px solid rgba(165, 180, 252, 0.55);
  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.5),
    0 4px 12px rgba(99, 102, 241, 0.25),
    0 0 0 1px rgba(129, 140, 248, 0.15);
  transform: scale(1.04) rotate(-1deg);
  pointer-events: none;
  opacity: 0.97;
  animation: ps-ghost-lift 0.18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes ps-ghost-lift {
  from {
    transform: scale(1) rotate(0deg);
    opacity: 0.85;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  to {
    transform: scale(1.04) rotate(-1deg);
    opacity: 0.97;
    box-shadow:
      0 16px 40px rgba(0, 0, 0, 0.5),
      0 4px 12px rgba(99, 102, 241, 0.25);
  }
}

.ps-layer-ghost .ps-layer-grip {
  cursor: grabbing;
  color: var(--ps-accent);
}

.ps-layer-ghost .ps-layer-item {
  cursor: grabbing;
  background: rgba(129, 140, 248, 0.12);
}

body.ps-layer-sorting .ps-layer-grip {
  cursor: grabbing;
}

body.ps-layer-sorting .ps-layer-list:not(.is-sorting) .ps-layer-row {
  opacity: 0.92;
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
  line-height: 1.25;
  pointer-events: none;
}

.ps-layer-preview {
  margin: 0.35rem 0 0;
  line-height: 1.4;
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

.ps-font-picker.compact .ps-font-picker-list {
  max-height: 140px;
}

.ps-font-option.inherit .ps-font-option-name {
  font-style: italic;
}

.ps-type-divider {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0.85rem 0 0.65rem;
  color: var(--ps-muted);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.ps-type-divider::before,
.ps-type-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border-strong);
}

.ps-type-panel {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.ps-type-block {
  padding: 0.75rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.ps-type-block-title {
  margin: 0 0 0.15rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--ps-text);
  letter-spacing: 0.02em;
}

.ps-type-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
}

.ps-type-size,
.ps-type-style {
  margin: 0;
}

.ps-style-toggles {
  display: flex;
  gap: 0.3rem;
}

.ps-style-btn {
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.45rem;
  border: 1px solid var(--border-strong);
  border-radius: 6px;
  background: var(--surface);
  color: var(--ps-text);
  font: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease, color 0.12s ease;
}

.ps-style-btn:hover {
  background: var(--surface-hover);
}

.ps-style-btn.active {
  background: var(--ps-accent-dim);
  border-color: rgba(129, 140, 248, 0.45);
  color: var(--accent-hover);
}

.ps-color-field {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.ps-color-field .ps-color-input {
  flex: 1;
}

.ps-color-reset {
  font-size: 0.72rem;
  font-weight: 500;
  min-width: auto;
  padding: 0 0.55rem;
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
    flex-direction: column;
  }

  .ps-body > .ps-layers {
    width: 100%;
    max-height: 160px;
    border-right: none;
    border-bottom: 1px solid var(--ps-panel-border);
  }

  .resizable-sidebar.ps-properties {
    width: 100% !important;
    max-height: 320px;
    height: auto;
    border-left: none;
    border-top: 1px solid var(--ps-panel-border);
  }

  .sidebar-resize-handle {
    display: none;
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
`;function Ub(){return s.jsx("style",{children:Db})}Fg.createRoot(document.getElementById("root")).render(s.jsx(b.StrictMode,{children:s.jsxs(wv,{children:[s.jsx(Ub,{}),s.jsx(Jv,{children:s.jsx(Mb,{})})]})}));
