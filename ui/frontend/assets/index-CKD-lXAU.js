(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();var Qc={exports:{}},Yn={};var ym;function Yg(){if(ym)return Yn;ym=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function f(c,m,p){var h=null;if(p!==void 0&&(h=""+p),m.key!==void 0&&(h=""+m.key),"key"in m){p={};for(var j in m)j!=="key"&&(p[j]=m[j])}else p=m;return m=p.ref,{$$typeof:r,type:c,key:h,ref:m!==void 0?m:null,props:p}}return Yn.Fragment=o,Yn.jsx=f,Yn.jsxs=f,Yn}var xm;function qg(){return xm||(xm=1,Qc.exports=Yg()),Qc.exports}var s=qg(),Vc={exports:{}},re={};var Sm;function Gg(){if(Sm)return re;Sm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),h=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),_=Symbol.iterator;function O(E){return E===null||typeof E!="object"?null:(E=_&&E[_]||E["@@iterator"],typeof E=="function"?E:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,Y={};function X(E,B,K){this.props=E,this.context=B,this.refs=Y,this.updater=K||Q}X.prototype.isReactComponent={},X.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},X.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function q(){}q.prototype=X.prototype;function G(E,B,K){this.props=E,this.context=B,this.refs=Y,this.updater=K||Q}var $=G.prototype=new q;$.constructor=G,V($,X.prototype),$.isPureReactComponent=!0;var Z=Array.isArray;function U(){}var L={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function fe(E,B,K){var I=K.ref;return{$$typeof:r,type:E,key:B,ref:I!==void 0?I:null,props:K}}function ge(E,B){return fe(E.type,B,E.props)}function W(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function ne(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(K){return B[K]})}var ye=/\/+/g;function Re(E,B){return typeof E=="object"&&E!==null&&E.key!=null?ne(""+E.key):B.toString(36)}function Me(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(U,U):(E.status="pending",E.then(function(B){E.status==="pending"&&(E.status="fulfilled",E.value=B)},function(B){E.status==="pending"&&(E.status="rejected",E.reason=B)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,B,K,I,ie){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var be=!1;if(E===null)be=!0;else switch(le){case"bigint":case"string":case"number":be=!0;break;case"object":switch(E.$$typeof){case r:case o:be=!0;break;case N:return be=E._init,M(be(E._payload),B,K,I,ie)}}if(be)return ie=ie(E),be=I===""?"."+Re(E,0):I,Z(ie)?(K="",be!=null&&(K=be.replace(ye,"$&/")+"/"),M(ie,B,K,"",function(Zl){return Zl})):ie!=null&&(W(ie)&&(ie=ge(ie,K+(ie.key==null||E&&E.key===ie.key?"":(""+ie.key).replace(ye,"$&/")+"/")+be)),B.push(ie)),1;be=0;var lt=I===""?".":I+":";if(Z(E))for(var He=0;He<E.length;He++)I=E[He],le=lt+Re(I,He),be+=M(I,B,K,le,ie);else if(He=O(E),typeof He=="function")for(E=He.call(E),He=0;!(I=E.next()).done;)I=I.value,le=lt+Re(I,He++),be+=M(I,B,K,le,ie);else if(le==="object"){if(typeof E.then=="function")return M(Me(E),B,K,I,ie);throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return be}function x(E,B,K){if(E==null)return E;var I=[],ie=0;return M(E,I,"","",function(le){return B.call(K,le,ie++)}),I}function J(E){if(E._status===-1){var B=E._result;B=B(),B.then(function(K){(E._status===0||E._status===-1)&&(E._status=1,E._result=K)},function(K){(E._status===0||E._status===-1)&&(E._status=2,E._result=K)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var ue=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},se={map:x,forEach:function(E,B,K){x(E,function(){B.apply(this,arguments)},K)},count:function(E){var B=0;return x(E,function(){B++}),B},toArray:function(E){return x(E,function(B){return B})||[]},only:function(E){if(!W(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return re.Activity=w,re.Children=se,re.Component=X,re.Fragment=f,re.Profiler=m,re.PureComponent=G,re.StrictMode=c,re.Suspense=y,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return L.H.useMemoCache(E)}},re.cache=function(E){return function(){return E.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(E,B,K){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var I=V({},E.props),ie=E.key;if(B!=null)for(le in B.key!==void 0&&(ie=""+B.key),B)!ae.call(B,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&B.ref===void 0||(I[le]=B[le]);var le=arguments.length-2;if(le===1)I.children=K;else if(1<le){for(var be=Array(le),lt=0;lt<le;lt++)be[lt]=arguments[lt+2];I.children=be}return fe(E.type,ie,I)},re.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},re.createElement=function(E,B,K){var I,ie={},le=null;if(B!=null)for(I in B.key!==void 0&&(le=""+B.key),B)ae.call(B,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ie[I]=B[I]);var be=arguments.length-2;if(be===1)ie.children=K;else if(1<be){for(var lt=Array(be),He=0;He<be;He++)lt[He]=arguments[He+2];ie.children=lt}if(E&&E.defaultProps)for(I in be=E.defaultProps,be)ie[I]===void 0&&(ie[I]=be[I]);return fe(E,le,ie)},re.createRef=function(){return{current:null}},re.forwardRef=function(E){return{$$typeof:j,render:E}},re.isValidElement=W,re.lazy=function(E){return{$$typeof:N,_payload:{_status:-1,_result:E},_init:J}},re.memo=function(E,B){return{$$typeof:g,type:E,compare:B===void 0?null:B}},re.startTransition=function(E){var B=L.T,K={};L.T=K;try{var I=E(),ie=L.S;ie!==null&&ie(K,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(U,ue)}catch(le){ue(le)}finally{B!==null&&K.types!==null&&(B.types=K.types),L.T=B}},re.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},re.use=function(E){return L.H.use(E)},re.useActionState=function(E,B,K){return L.H.useActionState(E,B,K)},re.useCallback=function(E,B){return L.H.useCallback(E,B)},re.useContext=function(E){return L.H.useContext(E)},re.useDebugValue=function(){},re.useDeferredValue=function(E,B){return L.H.useDeferredValue(E,B)},re.useEffect=function(E,B){return L.H.useEffect(E,B)},re.useEffectEvent=function(E){return L.H.useEffectEvent(E)},re.useId=function(){return L.H.useId()},re.useImperativeHandle=function(E,B,K){return L.H.useImperativeHandle(E,B,K)},re.useInsertionEffect=function(E,B){return L.H.useInsertionEffect(E,B)},re.useLayoutEffect=function(E,B){return L.H.useLayoutEffect(E,B)},re.useMemo=function(E,B){return L.H.useMemo(E,B)},re.useOptimistic=function(E,B){return L.H.useOptimistic(E,B)},re.useReducer=function(E,B,K){return L.H.useReducer(E,B,K)},re.useRef=function(E){return L.H.useRef(E)},re.useState=function(E){return L.H.useState(E)},re.useSyncExternalStore=function(E,B,K){return L.H.useSyncExternalStore(E,B,K)},re.useTransition=function(){return L.H.useTransition()},re.version="19.2.7",re}var jm;function ro(){return jm||(jm=1,Vc.exports=Gg()),Vc.exports}var b=ro(),Zc={exports:{}},qn={},Jc={exports:{}},Kc={};var Em;function Xg(){return Em||(Em=1,(function(r){function o(M,x){var J=M.length;M.push(x);e:for(;0<J;){var ue=J-1>>>1,se=M[ue];if(0<m(se,x))M[ue]=x,M[J]=se,J=ue;else break e}}function f(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var x=M[0],J=M.pop();if(J!==x){M[0]=J;e:for(var ue=0,se=M.length,E=se>>>1;ue<E;){var B=2*(ue+1)-1,K=M[B],I=B+1,ie=M[I];if(0>m(K,J))I<se&&0>m(ie,K)?(M[ue]=ie,M[I]=J,ue=I):(M[ue]=K,M[B]=J,ue=B);else if(I<se&&0>m(ie,J))M[ue]=ie,M[I]=J,ue=I;else break e}}return x}function m(M,x){var J=M.sortIndex-x.sortIndex;return J!==0?J:M.id-x.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var h=Date,j=h.now();r.unstable_now=function(){return h.now()-j}}var y=[],g=[],N=1,w=null,_=3,O=!1,Q=!1,V=!1,Y=!1,X=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function $(M){for(var x=f(g);x!==null;){if(x.callback===null)c(g);else if(x.startTime<=M)c(g),x.sortIndex=x.expirationTime,o(y,x);else break;x=f(g)}}function Z(M){if(V=!1,$(M),!Q)if(f(y)!==null)Q=!0,U||(U=!0,ne());else{var x=f(g);x!==null&&Me(Z,x.startTime-M)}}var U=!1,L=-1,ae=5,fe=-1;function ge(){return Y?!0:!(r.unstable_now()-fe<ae)}function W(){if(Y=!1,U){var M=r.unstable_now();fe=M;var x=!0;try{e:{Q=!1,V&&(V=!1,q(L),L=-1),O=!0;var J=_;try{t:{for($(M),w=f(y);w!==null&&!(w.expirationTime>M&&ge());){var ue=w.callback;if(typeof ue=="function"){w.callback=null,_=w.priorityLevel;var se=ue(w.expirationTime<=M);if(M=r.unstable_now(),typeof se=="function"){w.callback=se,$(M),x=!0;break t}w===f(y)&&c(y),$(M)}else c(y);w=f(y)}if(w!==null)x=!0;else{var E=f(g);E!==null&&Me(Z,E.startTime-M),x=!1}}break e}finally{w=null,_=J,O=!1}x=void 0}}finally{x?ne():U=!1}}}var ne;if(typeof G=="function")ne=function(){G(W)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Re=ye.port2;ye.port1.onmessage=W,ne=function(){Re.postMessage(null)}}else ne=function(){X(W,0)};function Me(M,x){L=X(function(){M(r.unstable_now())},x)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(M){switch(_){case 1:case 2:case 3:var x=3;break;default:x=_}var J=_;_=x;try{return M()}finally{_=J}},r.unstable_requestPaint=function(){Y=!0},r.unstable_runWithPriority=function(M,x){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var J=_;_=M;try{return x()}finally{_=J}},r.unstable_scheduleCallback=function(M,x,J){var ue=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,M){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=J+se,M={id:N++,callback:x,priorityLevel:M,startTime:J,expirationTime:se,sortIndex:-1},J>ue?(M.sortIndex=J,o(g,M),f(y)===null&&M===f(g)&&(V?(q(L),L=-1):V=!0,Me(Z,J-ue))):(M.sortIndex=se,o(y,M),Q||O||(Q=!0,U||(U=!0,ne()))),M},r.unstable_shouldYield=ge,r.unstable_wrapCallback=function(M){var x=_;return function(){var J=_;_=x;try{return M.apply(this,arguments)}finally{_=J}}}})(Kc)),Kc}var wm;function Qg(){return wm||(wm=1,Jc.exports=Xg()),Jc.exports}var $c={exports:{}},at={};var zm;function Vg(){if(zm)return at;zm=1;var r=ro();function o(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)g+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(o(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(y,g,N){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:w==null?null:""+w,children:y,containerInfo:g,implementation:N}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,at.createPortal=function(y,g){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return p(y,g,null,N)},at.flushSync=function(y){var g=h.T,N=c.p;try{if(h.T=null,c.p=2,y)return y()}finally{h.T=g,c.p=N,c.d.f()}},at.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(y,g))},at.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},at.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var N=g.as,w=j(N,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;N==="style"?c.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:_,fetchPriority:O}):N==="script"&&c.d.X(y,{crossOrigin:w,integrity:_,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},at.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var N=j(g.as,g.crossOrigin);c.d.M(y,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(y)},at.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var N=g.as,w=j(N,g.crossOrigin);c.d.L(y,N,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},at.preloadModule=function(y,g){if(typeof y=="string")if(g){var N=j(g.as,g.crossOrigin);c.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(y)},at.requestFormReset=function(y){c.d.r(y)},at.unstable_batchedUpdates=function(y,g){return y(g)},at.useFormState=function(y,g,N){return h.H.useFormState(y,g,N)},at.useFormStatus=function(){return h.H.useHostTransitionStatus()},at.version="19.2.7",at}var Nm;function Zg(){if(Nm)return $c.exports;Nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),$c.exports=Vg(),$c.exports}var Tm;function Jg(){if(Tm)return qn;Tm=1;var r=Qg(),o=ro(),f=Zg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return y(n),e;if(i===l)return y(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,d=n.child;d;){if(d===a){u=!0,a=n,l=i;break}if(d===l){u=!0,l=n,a=i;break}d=d.sibling}if(!u){for(d=i.child;d;){if(d===a){u=!0,a=i,l=n;break}if(d===l){u=!0,l=i,a=n;break}d=d.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,_=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),G=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case X:return"Profiler";case Y:return"StrictMode";case Z:return"Suspense";case U:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case G:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:Re(e.type)||"Memo";case ae:t=e._payload,e=e._init;try{return Re(e(t))}catch{}}return null}var Me=Array.isArray,M=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ue=[],se=-1;function E(e){return{current:e}}function B(e){0>se||(e.current=ue[se],ue[se]=null,se--)}function K(e,t){se++,ue[se]=e.current,e.current=t}var I=E(null),ie=E(null),le=E(null),be=E(null);function lt(e,t){switch(K(le,t),K(ie,e),K(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gd(t),e=Xd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(I),K(I,e)}function He(){B(I),B(ie),B(le)}function Zl(e){e.memoizedState!==null&&K(be,e);var t=I.current,a=Xd(t,e.type);t!==a&&(K(ie,e),K(I,a))}function Jn(e){ie.current===e&&(B(I),B(ie)),be.current===e&&(B(be),kn._currentValue=J)}var Nr,vo;function ka(e){if(Nr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Nr=t&&t[1]||"",vo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nr+e+vo}var Tr=!1;function Cr(e,t){if(!e||Tr)return"";Tr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(A){var R=A}Reflect.construct(e,[],H)}else{try{H.call()}catch(A){R=A}e.call(H.prototype)}}else{try{throw Error()}catch(A){R=A}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(A){if(A&&R&&typeof A.stack=="string")return[A.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],d=i[1];if(u&&d){var v=u.split(`
`),C=d.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<C.length&&!C[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===C.length)for(l=v.length-1,n=C.length-1;1<=l&&0<=n&&v[l]!==C[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==C[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==C[n]){var D=`
`+v[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=n);break}}}finally{Tr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function vp(e,t){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return e.child!==t&&t!==null?ka("Suspense Fallback"):ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return Cr(e.type,!1);case 11:return Cr(e.type.render,!1);case 1:return Cr(e.type,!0);case 31:return ka("Activity");default:return""}}function bo(e){try{var t="",a=null;do t+=vp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Rr=Object.prototype.hasOwnProperty,Ar=r.unstable_scheduleCallback,_r=r.unstable_cancelCallback,bp=r.unstable_shouldYield,yp=r.unstable_requestPaint,dt=r.unstable_now,xp=r.unstable_getCurrentPriorityLevel,yo=r.unstable_ImmediatePriority,xo=r.unstable_UserBlockingPriority,Kn=r.unstable_NormalPriority,Sp=r.unstable_LowPriority,So=r.unstable_IdlePriority,jp=r.log,Ep=r.unstable_setDisableYieldValue,Jl=null,mt=null;function sa(e){if(typeof jp=="function"&&Ep(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Jl,e)}catch{}}var pt=Math.clz32?Math.clz32:Np,wp=Math.log,zp=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(wp(e)/zp|0)|0}var $n=256,Wn=262144,Fn=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=La(l):(u&=d,u!==0?n=La(u):a||(a=d&~e,a!==0&&(n=La(a))))):(d=l&~i,d!==0?n=La(d):u!==0?n=La(u):a||(a=l&~e,a!==0&&(n=La(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Tp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function Or(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Cp(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,C=e.hiddenUpdates;for(a=u&~a;0<a;){var D=31-pt(a),H=1<<D;d[D]=0,v[D]=-1;var R=C[D];if(R!==null)for(C[D]=null,D=0;D<R.length;D++){var A=R[D];A!==null&&(A.lane&=-536870913)}a&=~H}l!==0&&Eo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Eo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function wo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function zo(e,t){var a=t&-t;return a=(a&42)!==0?1:Mr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Mr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function No(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:dm(e.type))}function To(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var fa=Math.random().toString(36).slice(2),Fe="__reactFiber$"+fa,it="__reactProps$"+fa,ll="__reactContainer$"+fa,Ur="__reactEvents$"+fa,Rp="__reactListeners$"+fa,Ap="__reactHandles$"+fa,Co="__reactResources$"+fa,Wl="__reactMarker$"+fa;function kr(e){delete e[Fe],delete e[it],delete e[Ur],delete e[Rp],delete e[Ap]}function nl(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Wd(e);e!==null;){if(a=e[Fe])return a;e=Wd(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[Fe]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function rl(e){var t=e[Co];return t||(t=e[Co]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Wl]=!0}var Ro=new Set,Ao={};function Ha(e,t){ul(e,t),ul(e+"Capture",t)}function ul(e,t){for(Ao[e]=t,e=0;e<t.length;e++)Ro.add(t[e])}var _p=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_o={},Oo={};function Op(e){return Rr.call(Oo,e)?!0:Rr.call(_o,e)?!1:_p.test(e)?Oo[e]=!0:(_o[e]=!0,!1)}function Pn(e,t,a){if(Op(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ei(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){if(!e._valueTracker){var t=Mo(e)?"checked":"value";e._valueTracker=Mp(e,t,""+e[t])}}function Do(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Mo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dp=/[\n"\\]/g;function wt(e){return e.replace(Dp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hr(e,t,a,l,n,i,u,d){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Br(e,u,Et(t)):a!=null?Br(e,u,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Et(d):e.removeAttribute("name")}function Uo(e,t,a,l,n,i,u,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Lr(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Lr(e)}function Br(e,t,a){t==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ko(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Lo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Me(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Lr(e)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Up=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ho(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Up.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Bo(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Ho(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Ho(e,i,t[i])}function Yr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(e){return Lp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var qr=null;function Gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,fl=null;function Yo(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(c(90));Hr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Do(l)}break e;case"textarea":ko(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var Xr=!1;function qo(e,t,a){if(Xr)return e(t,a);Xr=!0;try{var l=e(t);return l}finally{if(Xr=!1,(sl!==null||fl!==null)&&(Xi(),sl&&(t=sl,e=fl,fl=sl=null,Yo(t),e)))for(t=0;t<e.length;t++)Yo(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=!1;if(Jt)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Qr=!1}var da=null,Vr=null,li=null;function Go(){if(li)return li;var e,t=Vr,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return li=n.slice(e,1<l?1-l:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Xo(){return!1}function rt(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Xo,this.isPropagationStopped=Xo,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=rt(Ba),en=w({},Ba,{view:0,detail:0}),Hp=rt(en),Zr,Jr,tn,ui=w({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$r,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(Zr=e.screenX-tn.screenX,Jr=e.screenY-tn.screenY):Jr=Zr=0,tn=e),Zr)},movementY:function(e){return"movementY"in e?e.movementY:Jr}}),Qo=rt(ui),Bp=w({},ui,{dataTransfer:0}),Yp=rt(Bp),qp=w({},en,{relatedTarget:0}),Kr=rt(qp),Gp=w({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=rt(Gp),Qp=w({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vp=rt(Qp),Zp=w({},Ba,{data:0}),Vo=rt(Zp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$p[e])?!!t[e]:!1}function $r(){return Wp}var Fp=w({},en,{key:function(e){if(e.key){var t=Jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$r,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ip=rt(Fp),Pp=w({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=rt(Pp),eh=w({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$r}),th=rt(eh),ah=w({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=rt(ah),nh=w({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ih=rt(nh),rh=w({},Ba,{newState:0,oldState:0}),uh=rt(rh),ch=[9,13,27,32],Wr=Jt&&"CompositionEvent"in window,an=null;Jt&&"documentMode"in document&&(an=document.documentMode);var oh=Jt&&"TextEvent"in window&&!an,Jo=Jt&&(!Wr||an&&8<an&&11>=an),Ko=" ",$o=!1;function Wo(e,t){switch(e){case"keyup":return ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function sh(e,t){switch(e){case"compositionend":return Fo(t);case"keypress":return t.which!==32?null:($o=!0,Ko);case"textInput":return e=t.data,e===Ko&&$o?null:e;default:return null}}function fh(e,t){if(dl)return e==="compositionend"||!Wr&&Wo(e,t)?(e=Go(),li=Vr=da=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jo&&t.locale!=="ko"?null:t.data;default:return null}}var dh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dh[e.type]:t==="textarea"}function Po(e,t,a,l){sl?fl?fl.push(l):fl=[l]:sl=l,t=Wi(t,"onChange"),0<t.length&&(a=new ri("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ln=null,nn=null;function mh(e){kd(e,0)}function ci(e){var t=Fl(e);if(Do(t))return e}function es(e,t){if(e==="change")return t}var ts=!1;if(Jt){var Fr;if(Jt){var Ir="oninput"in document;if(!Ir){var as=document.createElement("div");as.setAttribute("oninput","return;"),Ir=typeof as.oninput=="function"}Fr=Ir}else Fr=!1;ts=Fr&&(!document.documentMode||9<document.documentMode)}function ls(){ln&&(ln.detachEvent("onpropertychange",ns),nn=ln=null)}function ns(e){if(e.propertyName==="value"&&ci(nn)){var t=[];Po(t,nn,e,Gr(e)),qo(mh,t)}}function ph(e,t,a){e==="focusin"?(ls(),ln=t,nn=a,ln.attachEvent("onpropertychange",ns)):e==="focusout"&&ls()}function hh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(nn)}function gh(e,t){if(e==="click")return ci(t)}function vh(e,t){if(e==="input"||e==="change")return ci(t)}function bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:bh;function rn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Rr.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var a=is(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=is(a)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ti(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yh=Jt&&"documentMode"in document&&11>=document.documentMode,ml=null,eu=null,un=null,tu=!1;function os(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||ml==null||ml!==ti(l)||(l=ml,"selectionStart"in l&&Pr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),un&&rn(un,l)||(un=l,l=Wi(eu,"onSelect"),0<l.length&&(t=new ri("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},au={},ss={};Jt&&(ss=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function qa(e){if(au[e])return au[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ss)return au[e]=t[a];return e}var fs=qa("animationend"),ds=qa("animationiteration"),ms=qa("animationstart"),xh=qa("transitionrun"),Sh=qa("transitionstart"),jh=qa("transitioncancel"),ps=qa("transitionend"),hs=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function Dt(e,t){hs.set(e,t),Ha(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],hl=0,nu=0;function si(){for(var e=hl,t=nu=hl=0;t<e;){var a=zt[t];zt[t++]=null;var l=zt[t];zt[t++]=null;var n=zt[t];zt[t++]=null;var i=zt[t];if(zt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&gs(a,n,i)}}function fi(e,t,a,l){zt[hl++]=e,zt[hl++]=t,zt[hl++]=a,zt[hl++]=l,nu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function iu(e,t,a,l){return fi(e,t,a,l),di(e)}function Ga(e,t){return fi(e,null,null,t),di(e)}function gs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function di(e){if(50<Rn)throw Rn=0,pc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function Eh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new Eh(e,t,a,l)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")ru(e)&&(u=1);else if(typeof e=="string")u=Cg(e,a,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=gt(31,a,t,n),e.elementType=fe,e.lanes=i,e;case V:return Xa(a.children,n,i,t);case Y:u=8,n|=24;break;case X:return e=gt(12,a,t,n|2),e.elementType=X,e.lanes=i,e;case Z:return e=gt(13,a,t,n),e.elementType=Z,e.lanes=i,e;case U:return e=gt(19,a,t,n),e.elementType=U,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:u=10;break e;case q:u=9;break e;case $:u=11;break e;case L:u=14;break e;case ae:u=16,l=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=gt(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Xa(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function uu(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function bs(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function cu(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ys=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=ys.get(e);return a!==void 0?a:(t={value:e,source:t,stack:bo(t)},ys.set(e,t),t)}return{value:e,source:t,stack:bo(t)}}var vl=[],bl=0,pi=null,cn=0,Tt=[],Ct=0,ma=null,Yt=1,qt="";function $t(e,t){vl[bl++]=cn,vl[bl++]=pi,pi=e,cn=t}function xs(e,t,a){Tt[Ct++]=Yt,Tt[Ct++]=qt,Tt[Ct++]=ma,ma=e;var l=Yt;e=qt;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Yt=1<<32-pt(t)+n|a<<n|l,qt=i+e}else Yt=1<<i|a<<n|l,qt=e}function ou(e){e.return!==null&&($t(e,1),xs(e,1,0))}function su(e){for(;e===pi;)pi=vl[--bl],vl[bl]=null,cn=vl[--bl],vl[bl]=null;for(;e===ma;)ma=Tt[--Ct],Tt[Ct]=null,qt=Tt[--Ct],Tt[Ct]=null,Yt=Tt[--Ct],Tt[Ct]=null}function Ss(e,t){Tt[Ct++]=Yt,Tt[Ct++]=qt,Tt[Ct++]=ma,Yt=t.id,qt=t.overflow,ma=e}var Ie=null,_e=null,ve=!1,pa=null,Rt=!1,fu=Error(c(519));function ha(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw on(Nt(t,e)),fu}function js(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Fe]=e,t[it]=l,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<_n.length;a++)me(_n[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Uo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),Lo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Yd(t.textContent,a)?(l.popover!=null&&(me("beforetoggle",t),me("toggle",t)),l.onScroll!=null&&me("scroll",t),l.onScrollEnd!=null&&me("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function Es(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Ie=Ie.return}}function yl(e){if(e!==Ie)return!1;if(!ve)return Es(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rc(e.type,e.memoizedProps)),a=!a),a&&_e&&ha(e),Es(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=$d(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));_e=$d(e)}else t===27?(t=_e,Ra(e.type)?(e=Dc,Dc=null,_e=e):_e=t):_e=Ie?_t(e.stateNode.nextSibling):null;return!0}function Qa(){_e=Ie=null,ve=!1}function du(){var e=pa;return e!==null&&(st===null?st=e:st.push.apply(st,e),pa=null),e}function on(e){pa===null?pa=[e]:pa.push(e)}var mu=E(null),Va=null,Wt=null;function ga(e,t,a){K(mu,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=mu.current,B(mu)}function pu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function hu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),pu(i.return,a,e),l||(u=null);break e}i=d.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),pu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function xl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var d=n.type;ht(n.pendingProps.value,u.value)||(e!==null?e.push(d):e=[d])}}else if(n===be.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(kn):e=[kn])}n=n.return}e!==null&&hu(t,e,a,l),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return ws(Va,e)}function gi(e,t){return Va===null&&Za(e),ws(e,t)}function ws(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(c(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var wh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},zh=r.unstable_scheduleCallback,Nh=r.unstable_NormalPriority,Ge={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new wh,data:new Map,refCount:0}}function sn(e){e.refCount--,e.refCount===0&&zh(Nh,function(){e.controller.abort()})}var fn=null,vu=0,Sl=0,jl=null;function Th(e,t){if(fn===null){var a=fn=[];vu=0,Sl=xc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return vu++,t.then(zs,zs),t}function zs(){if(--vu===0&&fn!==null){jl!==null&&(jl.status="fulfilled");var e=fn;fn=null,Sl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ch(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ns=M.S;M.S=function(e,t){sd=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Th(e,t),Ns!==null&&Ns(e,t)};var Ja=E(null);function bu(){var e=Ja.current;return e!==null?e:Ce.pooledCache}function vi(e,t){t===null?K(Ja,Ja.current):K(Ja,t.pool)}function Ts(){var e=bu();return e===null?null:{parent:Ge._currentValue,pool:e}}var El=Error(c(460)),yu=Error(c(474)),bi=Error(c(542)),yi={then:function(){}};function Cs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_s(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_s(e),e}throw $a=t,El}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,El):a}}var $a=null;function As(){if($a===null)throw Error(c(459));var e=$a;return $a=null,e}function _s(e){if(e===El||e===bi)throw Error(c(483))}var wl=null,dn=0;function xi(e){var t=dn;return dn+=1,wl===null&&(wl=[]),Rs(wl,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Si(e,t){throw t.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Os(e){function t(z,S){if(e){var T=z.deletions;T===null?(z.deletions=[S],z.flags|=16):T.push(S)}}function a(z,S){if(!e)return null;for(;S!==null;)t(z,S),S=S.sibling;return null}function l(z){for(var S=new Map;z!==null;)z.key!==null?S.set(z.key,z):S.set(z.index,z),z=z.sibling;return S}function n(z,S){return z=Kt(z,S),z.index=0,z.sibling=null,z}function i(z,S,T){return z.index=T,e?(T=z.alternate,T!==null?(T=T.index,T<S?(z.flags|=67108866,S):T):(z.flags|=67108866,S)):(z.flags|=1048576,S)}function u(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function d(z,S,T,k){return S===null||S.tag!==6?(S=uu(T,z.mode,k),S.return=z,S):(S=n(S,T),S.return=z,S)}function v(z,S,T,k){var ee=T.type;return ee===V?D(z,S,T.props.children,k,T.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ae&&Ka(ee)===S.type)?(S=n(S,T.props),mn(S,T),S.return=z,S):(S=mi(T.type,T.key,T.props,null,z.mode,k),mn(S,T),S.return=z,S)}function C(z,S,T,k){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=cu(T,z.mode,k),S.return=z,S):(S=n(S,T.children||[]),S.return=z,S)}function D(z,S,T,k,ee){return S===null||S.tag!==7?(S=Xa(T,z.mode,k,ee),S.return=z,S):(S=n(S,T),S.return=z,S)}function H(z,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=uu(""+S,z.mode,T),S.return=z,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return T=mi(S.type,S.key,S.props,null,z.mode,T),mn(T,S),T.return=z,T;case Q:return S=cu(S,z.mode,T),S.return=z,S;case ae:return S=Ka(S),H(z,S,T)}if(Me(S)||ne(S))return S=Xa(S,z.mode,T,null),S.return=z,S;if(typeof S.then=="function")return H(z,xi(S),T);if(S.$$typeof===G)return H(z,gi(z,S),T);Si(z,S)}return null}function R(z,S,T,k){var ee=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return ee!==null?null:d(z,S,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return T.key===ee?v(z,S,T,k):null;case Q:return T.key===ee?C(z,S,T,k):null;case ae:return T=Ka(T),R(z,S,T,k)}if(Me(T)||ne(T))return ee!==null?null:D(z,S,T,k,null);if(typeof T.then=="function")return R(z,S,xi(T),k);if(T.$$typeof===G)return R(z,S,gi(z,T),k);Si(z,T)}return null}function A(z,S,T,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return z=z.get(T)||null,d(S,z,""+k,ee);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case O:return z=z.get(k.key===null?T:k.key)||null,v(S,z,k,ee);case Q:return z=z.get(k.key===null?T:k.key)||null,C(S,z,k,ee);case ae:return k=Ka(k),A(z,S,T,k,ee)}if(Me(k)||ne(k))return z=z.get(T)||null,D(S,z,k,ee,null);if(typeof k.then=="function")return A(z,S,T,xi(k),ee);if(k.$$typeof===G)return A(z,S,T,gi(S,k),ee);Si(S,k)}return null}function F(z,S,T,k){for(var ee=null,xe=null,P=S,oe=S=0,he=null;P!==null&&oe<T.length;oe++){P.index>oe?(he=P,P=null):he=P.sibling;var Se=R(z,P,T[oe],k);if(Se===null){P===null&&(P=he);break}e&&P&&Se.alternate===null&&t(z,P),S=i(Se,S,oe),xe===null?ee=Se:xe.sibling=Se,xe=Se,P=he}if(oe===T.length)return a(z,P),ve&&$t(z,oe),ee;if(P===null){for(;oe<T.length;oe++)P=H(z,T[oe],k),P!==null&&(S=i(P,S,oe),xe===null?ee=P:xe.sibling=P,xe=P);return ve&&$t(z,oe),ee}for(P=l(P);oe<T.length;oe++)he=A(P,z,oe,T[oe],k),he!==null&&(e&&he.alternate!==null&&P.delete(he.key===null?oe:he.key),S=i(he,S,oe),xe===null?ee=he:xe.sibling=he,xe=he);return e&&P.forEach(function(Da){return t(z,Da)}),ve&&$t(z,oe),ee}function te(z,S,T,k){if(T==null)throw Error(c(151));for(var ee=null,xe=null,P=S,oe=S=0,he=null,Se=T.next();P!==null&&!Se.done;oe++,Se=T.next()){P.index>oe?(he=P,P=null):he=P.sibling;var Da=R(z,P,Se.value,k);if(Da===null){P===null&&(P=he);break}e&&P&&Da.alternate===null&&t(z,P),S=i(Da,S,oe),xe===null?ee=Da:xe.sibling=Da,xe=Da,P=he}if(Se.done)return a(z,P),ve&&$t(z,oe),ee;if(P===null){for(;!Se.done;oe++,Se=T.next())Se=H(z,Se.value,k),Se!==null&&(S=i(Se,S,oe),xe===null?ee=Se:xe.sibling=Se,xe=Se);return ve&&$t(z,oe),ee}for(P=l(P);!Se.done;oe++,Se=T.next())Se=A(P,z,oe,Se.value,k),Se!==null&&(e&&Se.alternate!==null&&P.delete(Se.key===null?oe:Se.key),S=i(Se,S,oe),xe===null?ee=Se:xe.sibling=Se,xe=Se);return e&&P.forEach(function(Bg){return t(z,Bg)}),ve&&$t(z,oe),ee}function Te(z,S,T,k){if(typeof T=="object"&&T!==null&&T.type===V&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case O:e:{for(var ee=T.key;S!==null;){if(S.key===ee){if(ee=T.type,ee===V){if(S.tag===7){a(z,S.sibling),k=n(S,T.props.children),k.return=z,z=k;break e}}else if(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===ae&&Ka(ee)===S.type){a(z,S.sibling),k=n(S,T.props),mn(k,T),k.return=z,z=k;break e}a(z,S);break}else t(z,S);S=S.sibling}T.type===V?(k=Xa(T.props.children,z.mode,k,T.key),k.return=z,z=k):(k=mi(T.type,T.key,T.props,null,z.mode,k),mn(k,T),k.return=z,z=k)}return u(z);case Q:e:{for(ee=T.key;S!==null;){if(S.key===ee)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){a(z,S.sibling),k=n(S,T.children||[]),k.return=z,z=k;break e}else{a(z,S);break}else t(z,S);S=S.sibling}k=cu(T,z.mode,k),k.return=z,z=k}return u(z);case ae:return T=Ka(T),Te(z,S,T,k)}if(Me(T))return F(z,S,T,k);if(ne(T)){if(ee=ne(T),typeof ee!="function")throw Error(c(150));return T=ee.call(T),te(z,S,T,k)}if(typeof T.then=="function")return Te(z,S,xi(T),k);if(T.$$typeof===G)return Te(z,S,gi(z,T),k);Si(z,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(a(z,S.sibling),k=n(S,T),k.return=z,z=k):(a(z,S),k=uu(T,z.mode,k),k.return=z,z=k),u(z)):a(z,S)}return function(z,S,T,k){try{dn=0;var ee=Te(z,S,T,k);return wl=null,ee}catch(P){if(P===El||P===bi)throw P;var xe=gt(29,P,null,z.mode);return xe.lanes=k,xe.return=z,xe}}}var Wa=Os(!0),Ms=Os(!1),va=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=di(e),gs(e,null,a),t}return fi(e,l,t,a),di(e)}function pn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wo(e,a)}}function ju(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Eu=!1;function hn(){if(Eu){var e=jl;if(e!==null)throw e}}function gn(e,t,a,l){Eu=!1;var n=e.updateQueue;va=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var v=d,C=v.next;v.next=null,u===null?i=C:u.next=C,u=v;var D=e.alternate;D!==null&&(D=D.updateQueue,d=D.lastBaseUpdate,d!==u&&(d===null?D.firstBaseUpdate=C:d.next=C,D.lastBaseUpdate=v))}if(i!==null){var H=n.baseState;u=0,D=C=v=null,d=i;do{var R=d.lane&-536870913,A=R!==d.lane;if(A?(pe&R)===R:(l&R)===R){R!==0&&R===Sl&&(Eu=!0),D!==null&&(D=D.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var F=e,te=d;R=t;var Te=a;switch(te.tag){case 1:if(F=te.payload,typeof F=="function"){H=F.call(Te,H,R);break e}H=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=te.payload,R=typeof F=="function"?F.call(Te,H,R):F,R==null)break e;H=w({},H,R);break e;case 2:va=!0}}R=d.callback,R!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[R]:A.push(R))}else A={lane:R,tag:d.tag,payload:d.payload,callback:d.callback,next:null},D===null?(C=D=A,v=H):D=D.next=A,u|=R;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;A=d,d=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);D===null&&(v=H),n.baseState=v,n.firstBaseUpdate=C,n.lastBaseUpdate=D,i===null&&(n.shared.lanes=0),wa|=u,e.lanes=u,e.memoizedState=H}}function Ds(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Us(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ds(a[e],t)}var zl=E(null),ji=E(0);function ks(e,t){e=ra,K(ji,e),K(zl,t),ra=e|t.baseLanes}function wu(){K(ji,ra),K(zl,zl.current)}function zu(){ra=ji.current,B(zl),B(ji)}var vt=E(null),At=null;function xa(e){var t=e.alternate;K(Be,Be.current&1),K(vt,e),At===null&&(t===null||zl.current!==null||t.memoizedState!==null)&&(At=e)}function Nu(e){K(Be,Be.current),K(vt,e),At===null&&(At=e)}function Ls(e){e.tag===22?(K(Be,Be.current),K(vt,e),At===null&&(At=e)):Sa()}function Sa(){K(Be,Be.current),K(vt,vt.current)}function bt(e){B(vt),At===e&&(At=null),B(Be)}var Be=E(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Oc(a)||Mc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ce=null,ze=null,Xe=null,wi=!1,Nl=!1,Fa=!1,zi=0,vn=0,Tl=null,Rh=0;function ke(){throw Error(c(321))}function Tu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Cu(e,t,a,l,n,i){return It=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Sf:Xu,Fa=!1,i=a(l,n),Fa=!1,Nl&&(i=Bs(t,a,l,n)),Hs(e),i}function Hs(e){M.H=xn;var t=ze!==null&&ze.next!==null;if(It=0,Xe=ze=ce=null,wi=!1,vn=0,Tl=null,t)throw Error(c(300));e===null||Qe||(e=e.dependencies,e!==null&&hi(e)&&(Qe=!0))}function Bs(e,t,a,l){ce=e;var n=0;do{if(Nl&&(Tl=null),vn=0,Nl=!1,25<=n)throw Error(c(301));if(n+=1,Xe=ze=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=jf,i=t(a,l)}while(Nl);return i}function Ah(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ce.flags|=1024),t}function Ru(){var e=zi!==0;return zi=0,e}function Au(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function _u(e){if(wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wi=!1}It=0,Xe=ze=ce=null,Nl=!1,vn=zi=0,Tl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ce.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ye(){if(ze===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Xe===null?ce.memoizedState:Xe.next;if(t!==null)Xe=t,ze=e;else{if(e===null)throw ce.alternate===null?Error(c(467)):Error(c(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Xe===null?ce.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=vn;return vn+=1,Tl===null&&(Tl=[]),e=Rs(Tl,e,t),t=ce,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Sf:Xu),e}function Ti(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===G)return Pe(e)}throw Error(c(438,String(e)))}function Ou(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ni(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ge;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=Ye();return Mu(t,ze,e)}function Mu(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=u=null,v=null,C=t,D=!1;do{var H=C.lane&-536870913;if(H!==C.lane?(pe&H)===H:(It&H)===H){var R=C.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),H===Sl&&(D=!0);else if((It&R)===R){C=C.next,R===Sl&&(D=!0);continue}else H={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(d=v=H,u=i):v=v.next=H,ce.lanes|=R,wa|=R;H=C.action,Fa&&a(i,H),i=C.hasEagerState?C.eagerState:a(i,H)}else R={lane:H,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},v===null?(d=v=R,u=i):v=v.next=R,ce.lanes|=H,wa|=H;C=C.next}while(C!==null&&C!==t);if(v===null?u=i:v.next=d,!ht(i,e.memoizedState)&&(Qe=!0,D&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=v,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Du(e){var t=Ye(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ht(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Ys(e,t,a){var l=ce,n=Ye(),i=ve;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!ht((ze||n).memoizedState,a);if(u&&(n.memoizedState=a,Qe=!0),n=n.queue,Lu(Xs.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},Gs.bind(null,l,n,a,t),null),Ce===null)throw Error(c(349));i||(It&127)!==0||qs(l,t,a)}return a}function qs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Ni(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gs(e,t,a,l){t.value=a,t.getSnapshot=l,Qs(t)&&Vs(e)}function Xs(e,t,a){return a(function(){Qs(t)&&Vs(e)})}function Qs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Vs(e){var t=Ga(e,2);t!==null&&ft(t,e,2)}function Uu(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Fa){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Zs(e,t,a,l){return e.baseState=a,Mu(e,ze,typeof l=="function"?l:Pt)}function _h(e,t,a,l,n){if(_i(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Js(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Js(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,u={};M.T=u;try{var d=a(n,l),v=M.S;v!==null&&v(u,d),Ks(e,t,d)}catch(C){ku(e,t,C)}finally{i!==null&&u.types!==null&&(i.types=u.types),M.T=i}}else try{i=a(n,l),Ks(e,t,i)}catch(C){ku(e,t,C)}}function Ks(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){$s(e,t,l)},function(l){return ku(e,t,l)}):$s(e,t,a)}function $s(e,t,a){t.status="fulfilled",t.value=a,Ws(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Js(e,a)))}function ku(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ws(t),t=t.next;while(t!==l)}e.action=null}function Ws(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Fs(e,t){return t}function Is(e,t){if(ve){var a=Ce.formState;if(a!==null){e:{var l=ce;if(ve){if(_e){t:{for(var n=_e,i=Rt;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){_e=_t(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:t},a.queue=l,a=bf.bind(null,ce,l),l.dispatch=a,l=Uu(!1),i=Gu.bind(null,ce,!1,l.queue),l=nt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=_h.bind(null,ce,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ps(e){var t=Ye();return ef(t,ze,e)}function ef(e,t,a){if(t=Mu(e,t,Fs)[0],e=Ci(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bn(t)}catch(u){throw u===El?bi:u}else l=t;t=Ye();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,Cl(9,{destroy:void 0},Oh.bind(null,n,a),null)),[l,i,e]}function Oh(e,t){e.action=t}function tf(e){var t=Ye(),a=ze;if(a!==null)return ef(t,a,e);Ye(),t=t.memoizedState,a=Ye();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Ni(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function af(){return Ye().memoizedState}function Ri(e,t,a,l){var n=nt();ce.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ai(e,t,a,l){var n=Ye();l=l===void 0?null:l;var i=n.memoizedState.inst;ze!==null&&l!==null&&Tu(l,ze.memoizedState.deps)?n.memoizedState=Cl(t,i,a,l):(ce.flags|=e,n.memoizedState=Cl(1|t,i,a,l))}function lf(e,t){Ri(8390656,8,e,t)}function Lu(e,t){Ai(2048,8,e,t)}function Mh(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Ni(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function nf(e){var t=Ye().memoizedState;return Mh({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function rf(e,t){return Ai(4,2,e,t)}function uf(e,t){return Ai(4,4,e,t)}function cf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,a){a=a!=null?a.concat([e]):null,Ai(4,4,cf.bind(null,t,e),a)}function Hu(){}function sf(e,t){var a=Ye();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Tu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ff(e,t){var a=Ye();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Tu(t,l[1]))return l[0];if(l=e(),Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function Bu(e,t,a){return a===void 0||(It&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=dd(),ce.lanes|=e,wa|=e,a)}function df(e,t,a,l){return ht(a,t)?a:zl.current!==null?(e=Bu(e,a,l),ht(e,t)||(Qe=!0),e):(It&42)===0||(It&1073741824)!==0&&(pe&261930)===0?(Qe=!0,e.memoizedState=a):(e=dd(),ce.lanes|=e,wa|=e,t)}function mf(e,t,a,l,n){var i=x.p;x.p=i!==0&&8>i?i:8;var u=M.T,d={};M.T=d,Gu(e,!1,t,a);try{var v=n(),C=M.S;if(C!==null&&C(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var D=Ch(v,l);yn(e,t,D,St(e))}else yn(e,t,l,St(e))}catch(H){yn(e,t,{then:function(){},status:"rejected",reason:H},St())}finally{x.p=i,u!==null&&d.types!==null&&(u.types=d.types),M.T=u}}function Dh(){}function Yu(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=pf(e).queue;mf(e,n,t,J,a===null?Dh:function(){return hf(e),a(l)})}function pf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hf(e){var t=pf(e);t.next===null&&(t=e.alternate.memoizedState),yn(e,t.next.queue,{},St())}function qu(){return Pe(kn)}function gf(){return Ye().memoizedState}function vf(){return Ye().memoizedState}function Uh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=ba(a);var l=ya(t,e,a);l!==null&&(ft(l,t,a),pn(l,t,a)),t={cache:gu()},e.payload=t;return}t=t.return}}function kh(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(e)?yf(t,a):(a=iu(e,t,a,l),a!==null&&(ft(a,e,l),xf(a,t,l)))}function bf(e,t,a){var l=St();yn(e,t,a,l)}function yn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_i(e))yf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,d=i(u,a);if(n.hasEagerState=!0,n.eagerState=d,ht(d,u))return fi(e,t,n,0),Ce===null&&si(),!1}catch{}if(a=iu(e,t,n,l),a!==null)return ft(a,e,l),xf(a,t,l),!0}return!1}function Gu(e,t,a,l){if(l={lane:2,revertLane:xc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_i(e)){if(t)throw Error(c(479))}else t=iu(e,a,l,2),t!==null&&ft(t,e,2)}function _i(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function yf(e,t){Nl=wi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wo(e,a)}}var xn={readContext:Pe,use:Ti,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};xn.useEffectEvent=ke;var Sf={readContext:Pe,use:Ti,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:lf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ri(4194308,4,cf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){Ri(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var l=e();if(Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=nt();if(a!==void 0){var n=a(t);if(Fa){sa(!0);try{a(t)}finally{sa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=kh.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Uu(e);var t=e.queue,a=bf.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Hu,useDeferredValue:function(e,t){var a=nt();return Bu(a,e,t)},useTransition:function(){var e=Uu(!1);return e=mf.bind(null,ce,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ce,n=nt();if(ve){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ce===null)throw Error(c(349));(pe&127)!==0||qs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,lf(Xs.bind(null,l,i,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Gs.bind(null,l,i,a,t),null),a},useId:function(){var e=nt(),t=Ce.identifierPrefix;if(ve){var a=qt,l=Yt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=zi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Rh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qu,useFormState:Is,useActionState:Is,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gu.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ou,useCacheRefresh:function(){return nt().memoizedState=Uh.bind(null,ce)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Pe,use:Ti,useCallback:sf,useContext:Pe,useEffect:Lu,useImperativeHandle:of,useInsertionEffect:rf,useLayoutEffect:uf,useMemo:ff,useReducer:Ci,useRef:af,useState:function(){return Ci(Pt)},useDebugValue:Hu,useDeferredValue:function(e,t){var a=Ye();return df(a,ze.memoizedState,e,t)},useTransition:function(){var e=Ci(Pt)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Ys,useId:gf,useHostTransitionStatus:qu,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var a=Ye();return Zs(a,ze,e,t)},useMemoCache:Ou,useCacheRefresh:vf};Xu.useEffectEvent=nf;var jf={readContext:Pe,use:Ti,useCallback:sf,useContext:Pe,useEffect:Lu,useImperativeHandle:of,useInsertionEffect:rf,useLayoutEffect:uf,useMemo:ff,useReducer:Du,useRef:af,useState:function(){return Du(Pt)},useDebugValue:Hu,useDeferredValue:function(e,t){var a=Ye();return ze===null?Bu(a,e,t):df(a,ze.memoizedState,e,t)},useTransition:function(){var e=Du(Pt)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:Ys,useId:gf,useHostTransitionStatus:qu,useFormState:tf,useActionState:tf,useOptimistic:function(e,t){var a=Ye();return ze!==null?Zs(a,ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:vf};jf.useEffectEvent=nf;function Qu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(ft(t,e,a),pn(t,e,a))}};function Ef(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!rn(a,l)||!rn(n,i):!0}function wf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Vu.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function zf(e){oi(e)}function Nf(e){console.error(e)}function Tf(e){oi(e)}function Oi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Cf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Zu(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Oi(e,t)},a}function Rf(e){return e=ba(e),e.tag=3,e}function Af(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Cf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Cf(t,a,l),typeof n!="function"&&(za===null?za=new Set([this]):za.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Lh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return At===null?Qi():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),vc(e,l,n)),!1;case 22:return a.flags|=65536,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),vc(e,l,n)),!1}throw Error(c(435,a.tag))}return vc(e,l,n),Qi(),!1}if(ve)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==fu&&(e=Error(c(422),{cause:l}),on(Nt(e,a)))):(l!==fu&&(t=Error(c(423),{cause:l}),on(Nt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Nt(l,a),n=Zu(e.stateNode,l,n),ju(e,n),Le!==4&&(Le=2)),!1;var i=Error(c(520),{cause:l});if(i=Nt(i,a),Cn===null?Cn=[i]:Cn.push(i),Le!==4&&(Le=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Zu(a.stateNode,l,e),ju(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(za===null||!za.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Rf(n),Af(n,e,a,l),ju(a,n),!1}a=a.return}while(a!==null);return!1}var Ju=Error(c(461)),Qe=!1;function et(e,t,a,l){t.child=e===null?Ms(t,null,a,l):Wa(t,e.child,a,l)}function _f(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var d in l)d!=="ref"&&(u[d]=l[d])}else u=l;return Za(t),l=Cu(e,t,a,u,i,n),d=Ru(),e!==null&&!Qe?(Au(e,t,n),ea(e,t,n)):(ve&&d&&ou(t),t.flags|=1,et(e,t,l,n),t.child)}function Of(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Mf(e,t,i,l,n)):(e=mi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!tc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:rn,a(u,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(rn(i,l)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=l=i,tc(e,n))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,ea(e,t,n)}return Ku(e,t,a,l,n)}function Df(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Uf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,i!==null?i.cachePool:null),i!==null?ks(t,i):wu(),Ls(t);else return l=t.lanes=536870912,Uf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(vi(t,i.cachePool),ks(t,i),Sa(),t.memoizedState=null):(e!==null&&vi(t,null),wu(),Sa());return et(e,t,n,a),t.child}function Sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uf(e,t,a,l,n){var i=bu();return i=i===null?null:{parent:Ge._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&vi(t,null),wu(),Ls(t),e!==null&&xl(e,t,l,!0),t.childLanes=n,null}function Mi(e,t){return t=Ui({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kf(e,t,a){return Wa(t,e.child,null,a),e=Mi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function Hh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(l.mode==="hidden")return e=Mi(t,l),t.lanes=536870912,Sn(null,e);if(Nu(t),(e=_e)?(e=Kd(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=bs(e),a.return=t,t.child=a,Ie=t,_e=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Mi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Nu(t),n)if(t.flags&256)t.flags&=-257,t=kf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Qe||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Qe||n){if(l=Ce,l!==null&&(u=zo(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ga(e,u),ft(l,e,u),Ju;Qi(),t=kf(e,t,a)}else e=i.treeContext,_e=_t(u.nextSibling),Ie=t,ve=!0,pa=null,Rt=!1,e!==null&&Ss(t,e),t=Mi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ku(e,t,a,l,n){return Za(t),a=Cu(e,t,a,l,void 0,n),l=Ru(),e!==null&&!Qe?(Au(e,t,n),ea(e,t,n)):(ve&&l&&ou(t),t.flags|=1,et(e,t,a,n),t.child)}function Lf(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=Bs(t,l,a,n),Hs(e),l=Ru(),e!==null&&!Qe?(Au(e,t,i),ea(e,t,i)):(ve&&l&&ou(t),t.flags|=1,et(e,t,a,i),t.child)}function Hf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=gl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Pe(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},xu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Pe(u):gl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Qu(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Vu.enqueueReplaceState(i,i.state,null),gn(t,l,i,n),hn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=Ia(a,d);i.props=v;var C=i.context,D=a.contextType;u=gl,typeof D=="object"&&D!==null&&(u=Pe(D));var H=a.getDerivedStateFromProps;D=typeof H=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||C!==u)&&wf(t,i,l,u),va=!1;var R=t.memoizedState;i.state=R,gn(t,l,i,n),hn(),C=t.memoizedState,d||R!==C||va?(typeof H=="function"&&(Qu(t,a,H,l),C=t.memoizedState),(v=va||Ef(t,a,v,l,R,C,u))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=u,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Su(e,t),u=t.memoizedProps,D=Ia(a,u),i.props=D,H=t.pendingProps,R=i.context,C=a.contextType,v=gl,typeof C=="object"&&C!==null&&(v=Pe(C)),d=a.getDerivedStateFromProps,(C=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==H||R!==v)&&wf(t,i,l,v),va=!1,R=t.memoizedState,i.state=R,gn(t,l,i,n),hn();var A=t.memoizedState;u!==H||R!==A||va||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof d=="function"&&(Qu(t,a,d,l),A=t.memoizedState),(D=va||Ef(t,a,D,l,R,A,v)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=v,l=D):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Di(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Wa(t,e.child,null,n),t.child=Wa(t,null,a,n)):et(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function Bf(e,t,a,l){return Qa(),t.flags|=256,et(e,t,a,l),t.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:Ts()}}function Fu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function Yf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(n?xa(t):Sa(),(e=_e)?(e=Kd(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=bs(e),a.return=t,t.child=a,Ie=t,_e=null)):e=null,e===null)throw ha(t);return Mc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(Sa(),n=t.mode,d=Ui({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Wu(a),l.childLanes=Fu(e,u,a),t.memoizedState=$u,Sn(null,l)):(xa(t),Iu(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(xa(t),t.flags&=-257,t=Pu(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),d=l.fallback,n=t.mode,l=Ui({mode:"visible",children:l.children},n),d=Xa(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Wa(t,e.child,null,a),l=t.child,l.memoizedState=Wu(a),l.childLanes=Fu(e,u,a),t.memoizedState=$u,t=Sn(null,l));else if(xa(t),Mc(d)){if(u=d.nextSibling&&d.nextSibling.dataset,u)var C=u.dgst;u=C,l=Error(c(419)),l.stack="",l.digest=u,on({value:l,source:null,stack:null}),t=Pu(e,t,a)}else if(Qe||xl(e,t,a,!1),u=(a&e.childLanes)!==0,Qe||u){if(u=Ce,u!==null&&(l=zo(u,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Ga(e,l),ft(u,e,l),Ju;Oc(d)||Qi(),t=Pu(e,t,a)}else Oc(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,_e=_t(d.nextSibling),Ie=t,ve=!0,pa=null,Rt=!1,e!==null&&Ss(t,e),t=Iu(t,l.children),t.flags|=4096);return t}return n?(Sa(),d=l.fallback,n=t.mode,v=e.child,C=v.sibling,l=Kt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,C!==null?d=Kt(C,d):(d=Xa(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,Sn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Wu(a):(n=d.cachePool,n!==null?(v=Ge._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=Ts(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Fu(e,u,a),t.memoizedState=$u,Sn(e.child,l)):(xa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Iu(e,t){return t=Ui({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ui(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Pu(e,t,a){return Wa(t,e.child,null,a),e=Iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),pu(e.return,t,a)}function ec(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Gf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Be.current,d=(u&2)!==0;if(d?(u=u&1|2,t.flags|=128):u&=1,K(Be,u),et(e,t,l,a),l=ve?cn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,a,t);else if(e.tag===19)qf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ec(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ec(t,!0,a,null,i,l);break;case"together":ec(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function tc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Bh(e,t,a){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),ga(t,Ge,e.memoizedState.cache),Qa();break;case 27:case 5:Zl(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Nu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Yf(e,t,a):(xa(t),e=ea(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Gf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),K(Be,Be.current),l)break;return null;case 22:return t.lanes=0,Df(e,t,a,t.pendingProps);case 24:ga(t,Ge,e.memoizedState.cache)}return ea(e,t,a)}function Xf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!tc(e,a)&&(t.flags&128)===0)return Qe=!1,Bh(e,t,a);Qe=(e.flags&131072)!==0}else Qe=!1,ve&&(t.flags&1048576)!==0&&xs(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")ru(e)?(l=Ia(e,l),t.tag=1,t=Hf(null,t,e,l,a)):(t.tag=0,t=Ku(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===$){t.tag=11,t=_f(null,t,e,l,a);break e}else if(n===L){t.tag=14,t=Of(null,t,e,l,a);break e}}throw t=Re(e)||e,Error(c(306,t,""))}}return t;case 0:return Ku(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ia(l,t.pendingProps),Hf(e,t,l,n,a);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Su(e,t),gn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ga(t,Ge,l),l!==i.cache&&hu(t,[Ge],a,!0),hn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bf(e,t,l,a);break e}else if(l!==n){n=Nt(Error(c(424)),t),on(n),t=Bf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=_t(e.firstChild),Ie=t,ve=!0,pa=null,Rt=!0,a=Ms(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===n){t=ea(e,t,a);break e}et(e,t,l,a)}t=t.child}return t;case 26:return Di(e,t),e===null?(a=em(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,l=Fi(le.current).createElement(a),l[Fe]=t,l[it]=e,tt(l,a,e),Je(l),t.stateNode=l):t.memoizedState=em(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zl(t),e===null&&ve&&(l=t.stateNode=Fd(t.type,t.pendingProps,le.current),Ie=t,Rt=!0,n=_e,Ra(t.type)?(Dc=n,_e=_t(l.firstChild)):_e=n),et(e,t,t.pendingProps.children,a),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((n=l=_e)&&(l=hg(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Ie=t,_e=_t(l.firstChild),Rt=!1,n=!0):n=!1),n||ha(t)),Zl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Rc(n,i)?l=null:u!==null&&Rc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Cu(e,t,Ah,null,null,a),kn._currentValue=n),Di(e,t),et(e,t,l,a),t.child;case 6:return e===null&&ve&&((e=a=_e)&&(a=gg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Ie=t,_e=null,e=!0):e=!1),e||ha(t)),null;case 13:return Yf(e,t,a);case 4:return lt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wa(t,null,l,a):et(e,t,l,a),t.child;case 11:return _f(e,t,t.type,t.pendingProps,a);case 7:return et(e,t,t.pendingProps,a),t.child;case 8:return et(e,t,t.pendingProps.children,a),t.child;case 12:return et(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ga(t,t.type,l.value),et(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Pe(n),l=l(n),t.flags|=1,et(e,t,l,a),t.child;case 14:return Of(e,t,t.type,t.pendingProps,a);case 15:return Mf(e,t,t.type,t.pendingProps,a);case 19:return Gf(e,t,a);case 31:return Hh(e,t,a);case 22:return Df(e,t,a,t.pendingProps);case 24:return Za(t),l=Pe(Ge),e===null?(n=bu(),n===null&&(n=Ce,i=gu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},xu(t),ga(t,Ge,n)):((e.lanes&a)!==0&&(Su(e,t),gn(t,null,null,a),hn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ga(t,Ge,l)):(l=i.cache,ga(t,Ge,l),l!==n.cache&&hu(t,[Ge],a,!0))),et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ta(e){e.flags|=4}function ac(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(gd())e.flags|=8192;else throw $a=yi,yu}else e.flags&=-16777217}function Qf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!im(t))if(gd())e.flags|=8192;else throw $a=yi,yu}function ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jo():536870912,e.lanes|=t,Ol|=t)}function jn(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Yh(e,t,a){var l=t.pendingProps;switch(su(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(Ge),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,du())),Oe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Oe(t),Qf(t,i)):(Oe(t),ac(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Oe(t),Qf(t,i)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Oe(t),ac(t,n,e,l,a)),null;case 27:if(Jn(t),a=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}e=I.current,yl(t)?js(t):(e=Fd(n,l,a),t.stateNode=e,ta(t))}return Oe(t),null;case 5:if(Jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Oe(t),null}if(i=I.current,yl(t))js(t);else{var u=Fi(le.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Fe]=t,i[it]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(tt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Oe(t),ac(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,yl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ie,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Yd(e.nodeValue,a)),e||ha(t,!0)}else e=Fi(e).createTextNode(l),e[Fe]=t,t.stateNode=e}return Oe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Fe]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else a=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Oe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Fe]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),n=!1}else n=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ki(t,t.updateQueue),Oe(t),null);case 4:return He(),e===null&&wc(t.stateNode.containerInfo),Oe(t),null;case 10:return Ft(t.type),Oe(t),null;case 19:if(B(Be),l=t.memoizedState,l===null)return Oe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)jn(l,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,jn(l,!1),e=i.updateQueue,t.updateQueue=e,ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)vs(a,e),a=a.sibling;return K(Be,Be.current&1|2),ve&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&dt()>qi&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ki(t,e),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ve)return Oe(t),null}else 2*dt()-l.renderingStartTime>qi&&a!==536870912&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=dt(),e.sibling=null,a=Be.current,K(Be,n?a&1|2:a&1),ve&&$t(t,l.treeForkCount),e):(Oe(t),null);case 22:case 23:return bt(t),zu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),a=t.updateQueue,a!==null&&ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&B(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(Ge),Oe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function qh(e,t){switch(su(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(Ge),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Be),null;case 4:return He(),null;case 10:return Ft(t.type),null;case 22:case 23:return bt(t),zu(),e!==null&&B(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(Ge),null;case 25:return null;default:return null}}function Vf(e,t){switch(su(t),t.tag){case 3:Ft(Ge),He();break;case 26:case 27:case 5:Jn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:B(Be);break;case 10:Ft(t.type);break;case 22:case 23:bt(t),zu(),e!==null&&B(Ja);break;case 24:Ft(Ge)}}function En(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(d){we(t,t.return,d)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,d=u.destroy;if(d!==void 0){u.destroy=void 0,n=t;var v=a,C=d;try{C()}catch(D){we(n,v,D)}}}l=l.next}while(l!==i)}}catch(D){we(t,t.return,D)}}function Zf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Us(t,a)}catch(l){we(e,e.return,l)}}}function Jf(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){we(e,t,l)}}function wn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){we(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){we(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){we(e,t,n)}else a.current=null}function Kf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){we(e,e.return,n)}}function lc(e,t,a){try{var l=e.stateNode;og(l,e.type,a,t),l[it]=t}catch(n){we(e,e.return,n)}}function $f(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ic(e,t,a),e=e.sibling;e!==null;)ic(e,t,a),e=e.sibling}function Li(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Li(e,t,a),e=e.sibling;e!==null;)Li(e,t,a),e=e.sibling}function Wf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);tt(t,l,a),t[Fe]=e,t[it]=a}catch(i){we(e,e.return,i)}}var aa=!1,Ve=!1,rc=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Gh(e,t){if(e=e.containerInfo,Tc=nr,e=cs(e),Pr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,d=-1,v=-1,C=0,D=0,H=e,R=null;t:for(;;){for(var A;H!==a||n!==0&&H.nodeType!==3||(d=u+n),H!==i||l!==0&&H.nodeType!==3||(v=u+l),H.nodeType===3&&(u+=H.nodeValue.length),(A=H.firstChild)!==null;)R=H,H=A;for(;;){if(H===e)break t;if(R===a&&++C===n&&(d=u),R===i&&++D===l&&(v=u),(A=H.nextSibling)!==null)break;H=R,R=H.parentNode}H=A}a=d===-1||v===-1?null:{start:d,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:e,selectionRange:a},nr=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var F=Ia(a.type,n);e=l.getSnapshotBeforeUpdate(F,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){we(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function If(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&En(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){we(a,a.return,u)}else{var n=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){we(a,a.return,u)}}l&64&&Zf(a),l&512&&wn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Us(e,t)}catch(u){we(a,a.return,u)}}break;case 27:t===null&&l&4&&Wf(a);case 26:case 5:na(e,a),t===null&&l&4&&Kf(a),l&512&&wn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&td(e,a);break;case 13:na(e,a),l&4&&ad(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Fh.bind(null,a),vg(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Ve,n=aa;var i=Ve;aa=l,(Ve=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Ve=i}break;case 30:break;default:na(e,a)}}function Pf(e){var t=e.alternate;t!==null&&(e.alternate=null,Pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&kr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,ut=!1;function la(e,t,a){for(a=a.child;a!==null;)ed(e,t,a),a=a.sibling}function ed(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:Ve||Gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ve||Gt(a,t);var l=De,n=ut;Ra(a.type)&&(De=a.stateNode,ut=!1),la(e,t,a),Mn(a.stateNode),De=l,ut=n;break;case 5:Ve||Gt(a,t);case 6:if(l=De,n=ut,De=null,la(e,t,a),De=l,ut=n,De!==null)if(ut)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(a.stateNode)}catch(i){we(a,t,i)}else try{De.removeChild(a.stateNode)}catch(i){we(a,t,i)}break;case 18:De!==null&&(ut?(e=De,Zd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Zd(De,a.stateNode));break;case 4:l=De,n=ut,De=a.stateNode.containerInfo,ut=!0,la(e,t,a),De=l,ut=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Ve||ja(4,a,t),la(e,t,a);break;case 1:Ve||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Jf(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Ve=(l=Ve)||a.memoizedState!==null,la(e,t,a),Ve=l;break;default:la(e,t,a)}}function td(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){we(t,t.return,a)}}}function ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){we(t,t.return,a)}}function Xh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ff),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ff),t;default:throw Error(c(435,e.tag))}}function Hi(e,t){var a=Xh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Ih.bind(null,e,l);l.then(n,n)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 27:if(Ra(d.type)){De=d.stateNode,ut=!1;break e}break;case 5:De=d.stateNode,ut=!1;break e;case 3:case 4:De=d.stateNode.containerInfo,ut=!0;break e}d=d.return}if(De===null)throw Error(c(160));ed(i,u,n),De=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}var Ut=null;function ld(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ot(e),l&4&&(ja(3,e,e.return),En(3,e),ja(5,e,e.return));break;case 1:ct(t,e),ot(e),l&512&&(Ve||a===null||Gt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(ct(t,e),ot(e),l&512&&(Ve||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[Fe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),tt(i,l,a),i[Fe]=e,Je(i),l=i;break e;case"link":var u=lm("link","href",n).get(l+(a.href||""));if(u){for(var d=0;d<u.length;d++)if(i=u[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(d,1);break t}}i=n.createElement(l),tt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=lm("meta","content",n).get(l+(a.content||""))){for(d=0;d<u.length;d++)if(i=u[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(d,1);break t}}i=n.createElement(l),tt(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[Fe]=e,Je(i),l=i}e.stateNode=l}else nm(n,e.type,e.stateNode);else e.stateNode=am(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?nm(n,e.type,e.stateNode):am(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),ot(e),l&512&&(Ve||a===null||Gt(a,a.return)),a!==null&&l&4&&lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),ot(e),l&512&&(Ve||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{ol(n,"")}catch(F){we(e,e.return,F)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,lc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(rc=!0);break;case 6:if(ct(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(F){we(e,e.return,F)}}break;case 3:if(er=null,n=Ut,Ut=Ii(t.containerInfo),ct(t,e),Ut=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch(F){we(e,e.return,F)}rc&&(rc=!1,nd(e));break;case 4:l=Ut,Ut=Ii(e.stateNode.containerInfo),ct(t,e),ot(e),Ut=l;break;case 12:ct(t,e),ot(e);break;case 31:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 13:ct(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yi=dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,C=aa,D=Ve;if(aa=C||n,Ve=D||v,ct(t,e),Ve=D,aa=C,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||aa||Ve||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{d=v.stateNode;var H=v.memoizedProps.style,R=H!=null&&H.hasOwnProperty("display")?H.display:null;d.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(F){we(v,v.return,F)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch(F){we(v,v.return,F)}}}else if(t.tag===18){if(a===null){v=t;try{var A=v.stateNode;n?Jd(A,!0):Jd(v.stateNode,!1)}catch(F){we(v,v.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hi(e,a))));break;case 19:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 30:break;case 21:break;default:ct(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if($f(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=nc(e);Li(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ol(u,""),a.flags&=-33);var d=nc(e);Li(e,d,u);break;case 3:case 4:var v=a.stateNode.containerInfo,C=nc(e);ic(e,C,v);break;default:throw Error(c(161))}}catch(D){we(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)If(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),Pa(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Jf(t,t.return,a),Pa(t);break;case 27:Mn(t.stateNode);case 26:case 5:Gt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),En(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(C){we(l,l.return,C)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Ds(v[n],d)}catch(C){we(l,l.return,C)}}a&&u&64&&Zf(i),wn(i,i.return);break;case 27:Wf(i);case 26:case 5:ia(n,i,a),a&&l===null&&u&4&&Kf(i),wn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&u&4&&td(n,i);break;case 13:ia(n,i,a),a&&u&4&&ad(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),wn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sn(a))}function cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)id(e,t,a,l),t=t.sibling}function id(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),n&2048&&En(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e)));break;case 12:if(n&2048){kt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,d=i.onPostCommit;typeof d=="function"&&d(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){we(t,t.return,v)}}else kt(e,t,a,l);break;case 31:kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?kt(e,t,a,l):zn(e,t):i._visibility&2?kt(e,t,a,l):(i._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&uc(u,t);break;case 24:kt(e,t,a,l),n&2048&&cc(t.alternate,t);break;default:kt(e,t,a,l)}}function Rl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,d=a,v=l,C=u.flags;switch(u.tag){case 0:case 11:case 15:Rl(i,u,d,v,n),En(8,u);break;case 23:break;case 22:var D=u.stateNode;u.memoizedState!==null?D._visibility&2?Rl(i,u,d,v,n):zn(i,u):(D._visibility|=2,Rl(i,u,d,v,n)),n&&C&2048&&uc(u.alternate,u);break;case 24:Rl(i,u,d,v,n),n&&C&2048&&cc(u.alternate,u);break;default:Rl(i,u,d,v,n)}t=t.sibling}}function zn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:zn(a,l),n&2048&&uc(l.alternate,l);break;case 24:zn(a,l),n&2048&&cc(l.alternate,l);break;default:zn(a,l)}t=t.sibling}}var Nn=8192;function Al(e,t,a){if(e.subtreeFlags&Nn)for(e=e.child;e!==null;)rd(e,t,a),e=e.sibling}function rd(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&Nn&&e.memoizedState!==null&&Rg(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Ut;Ut=Ii(e.stateNode.containerInfo),Al(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Nn,Nn=16777216,Al(e,t,a),Nn=l):Al(e,t,a));break;default:Al(e,t,a)}}function ud(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,od(l,e)}ud(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cd(e),e=e.sibling}function cd(e){switch(e.tag){case 0:case 11:case 15:Tn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Tn(e);break;case 12:Tn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):Tn(e);break;default:Tn(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,od(l,e)}ud(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Bi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function od(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ke=l;else e:for(a=e;Ke!==null;){l=Ke;var n=l.sibling,i=l.return;if(Pf(l),l===a){Ke=null;break e}if(n!==null){n.return=i,Ke=n;break e}Ke=i}}}var Qh={getCacheForType:function(e){var t=Pe(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Pe(Ge).controller.signal}},Vh=typeof WeakMap=="function"?WeakMap:Map,je=0,Ce=null,de=null,pe=0,Ee=0,yt=null,Ea=!1,_l=!1,oc=!1,ra=0,Le=0,wa=0,el=0,sc=0,xt=0,Ol=0,Cn=null,st=null,fc=!1,Yi=0,sd=0,qi=1/0,Gi=null,za=null,Ze=0,Na=null,Ml=null,ua=0,dc=0,mc=null,fd=null,Rn=0,pc=null;function St(){return(je&2)!==0&&pe!==0?pe&-pe:M.T!==null?xc():No()}function dd(){if(xt===0)if((pe&536870912)===0||ve){var e=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),xt=e}else xt=536870912;return e=vt.current,e!==null&&(e.flags|=32),xt}function ft(e,t,a){(e===Ce&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Ta(e,pe,xt,!1)),$l(e,a),((je&2)===0||e!==Ce)&&(e===Ce&&((je&2)===0&&(el|=a),Le===4&&Ta(e,pe,xt,!1)),Xt(e))}function md(e,t,a){if((je&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),n=l?Kh(e,t):gc(e,t,!0),i=l;do{if(n===0){_l&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Zh(a)){n=gc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var d=e;n=Cn;var v=d.current.memoizedState.isDehydrated;if(v&&(Dl(d,u).flags|=256),u=gc(d,u,!1),u!==2){if(oc&&!v){d.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,xt,!Ea);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Yi+300-dt(),10<n)){if(Ta(l,t,xt,!Ea),In(l,0,!0)!==0)break e;ua=t,l.timeoutHandle=Qd(pd.bind(null,l,a,st,Gi,fc,t,xt,el,Ol,Ea,i,"Throttled",-0,0),n);break e}pd(l,a,st,Gi,fc,t,xt,el,Ol,Ea,i,null,-0,0)}}break}while(!0);Xt(e)}function pd(e,t,a,l,n,i,u,d,v,C,D,H,R,A){if(e.timeoutHandle=-1,H=t.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},rd(t,i,H);var F=(i&62914560)===i?Yi-dt():(i&4194048)===i?sd-dt():0;if(F=Ag(H,F),F!==null){ua=i,e.cancelPendingCommit=F(jd.bind(null,e,t,i,a,l,n,u,d,v,D,H,null,R,A)),Ta(e,i,u,!C);return}}jd(e,t,i,a,l,n,u,d,v)}function Zh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~sc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Eo(e,a,t)}function Xi(){return(je&6)===0?(An(0),!1):!0}function hc(){if(de!==null){if(Ee===0)var e=de.return;else e=de,Wt=Va=null,_u(e),wl=null,dn=0,e=de;for(;e!==null;)Vf(e.alternate,e),e=e.return;de=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,hc(),Ce=e,de=a=Kt(e.current,null),pe=t,Ee=0,yt=null,Ea=!1,_l=Kl(e,t),oc=!1,Ol=xt=sc=el=wa=Le=0,st=Cn=null,fc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return ra=t,si(),a}function hd(e,t){ce=null,M.H=xn,t===El||t===bi?(t=As(),Ee=3):t===yu?(t=As(),Ee=4):Ee=t===Ju?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,de===null&&(Le=1,Oi(e,Nt(t,e.current)))}function gd(){var e=vt.current;return e===null?!0:(pe&4194048)===pe?At===null:(pe&62914560)===pe||(pe&536870912)!==0?e===At:!1}function vd(){var e=M.H;return M.H=xn,e===null?xn:e}function bd(){var e=M.A;return M.A=Qh,e}function Qi(){Le=4,Ea||(pe&4194048)!==pe&&vt.current!==null||(_l=!0),(wa&134217727)===0&&(el&134217727)===0||Ce===null||Ta(Ce,pe,xt,!1)}function gc(e,t,a){var l=je;je|=2;var n=vd(),i=bd();(Ce!==e||pe!==t)&&(Gi=null,Dl(e,t)),t=!1;var u=Le;e:do try{if(Ee!==0&&de!==null){var d=de,v=yt;switch(Ee){case 8:hc(),u=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var C=Ee;if(Ee=0,yt=null,Ul(e,d,v,C),a&&_l){u=0;break e}break;default:C=Ee,Ee=0,yt=null,Ul(e,d,v,C)}}Jh(),u=Le;break}catch(D){hd(e,D)}while(!0);return t&&e.shellSuspendCounter++,Wt=Va=null,je=l,M.H=n,M.A=i,de===null&&(Ce=null,pe=0,si()),u}function Jh(){for(;de!==null;)yd(de)}function Kh(e,t){var a=je;je|=2;var l=vd(),n=bd();Ce!==e||pe!==t?(Gi=null,qi=dt()+500,Dl(e,t)):_l=Kl(e,t);e:do try{if(Ee!==0&&de!==null){t=de;var i=yt;t:switch(Ee){case 1:Ee=0,yt=null,Ul(e,t,i,1);break;case 2:case 9:if(Cs(i)){Ee=0,yt=null,xd(t);break}t=function(){Ee!==2&&Ee!==9||Ce!==e||(Ee=7),Xt(e)},i.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Cs(i)?(Ee=0,yt=null,xd(t)):(Ee=0,yt=null,Ul(e,t,i,7));break;case 5:var u=null;switch(de.tag){case 26:u=de.memoizedState;case 5:case 27:var d=de;if(u?im(u):d.stateNode.complete){Ee=0,yt=null;var v=d.sibling;if(v!==null)de=v;else{var C=d.return;C!==null?(de=C,Vi(C)):de=null}break t}}Ee=0,yt=null,Ul(e,t,i,5);break;case 6:Ee=0,yt=null,Ul(e,t,i,6);break;case 8:hc(),Le=6;break e;default:throw Error(c(462))}}$h();break}catch(D){hd(e,D)}while(!0);return Wt=Va=null,M.H=l,M.A=n,je=a,de!==null?0:(Ce=null,pe=0,si(),Le)}function $h(){for(;de!==null&&!bp();)yd(de)}function yd(e){var t=Xf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Vi(e):de=t}function xd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Lf(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=Lf(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:_u(t);default:Vf(a,t),t=de=vs(t,ra),t=Xf(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Vi(e):de=t}function Ul(e,t,a,l){Wt=Va=null,_u(t),wl=null,dn=0;var n=t.return;try{if(Lh(e,n,t,a,pe)){Le=1,Oi(e,Nt(a,e.current)),de=null;return}}catch(i){if(n!==null)throw de=n,i;Le=1,Oi(e,Nt(a,e.current)),de=null;return}t.flags&32768?(ve||l===1?e=!0:_l||(pe&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Sd(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){Sd(t,Ea);return}e=t.return;var a=Yh(t.alternate,t,ra);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Le===0&&(Le=5)}function Sd(e,t){do{var a=qh(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Le=6,de=null}function jd(e,t,a,l,n,i,u,d,v){e.cancelPendingCommit=null;do Zi();while(Ze!==0);if((je&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=nu,Cp(e,a,i,u,d,v),e===Ce&&(de=Ce=null,pe=0),Ml=t,Na=e,ua=a,dc=i,mc=n,fd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ph(Kn,function(){return Td(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=x.p,x.p=2,u=je,je|=4;try{Gh(e,t,a)}finally{je=u,x.p=n,M.T=l}}Ze=1,Ed(),wd(),zd()}}function Ed(){if(Ze===1){Ze=0;var e=Na,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=x.p;x.p=2;var n=je;je|=4;try{ld(t,e);var i=Cc,u=cs(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(u!==d&&d&&d.ownerDocument&&us(d.ownerDocument.documentElement,d)){if(v!==null&&Pr(d)){var C=v.start,D=v.end;if(D===void 0&&(D=C),"selectionStart"in d)d.selectionStart=C,d.selectionEnd=Math.min(D,d.value.length);else{var H=d.ownerDocument||document,R=H&&H.defaultView||window;if(R.getSelection){var A=R.getSelection(),F=d.textContent.length,te=Math.min(v.start,F),Te=v.end===void 0?te:Math.min(v.end,F);!A.extend&&te>Te&&(u=Te,Te=te,te=u);var z=rs(d,te),S=rs(d,Te);if(z&&S&&(A.rangeCount!==1||A.anchorNode!==z.node||A.anchorOffset!==z.offset||A.focusNode!==S.node||A.focusOffset!==S.offset)){var T=H.createRange();T.setStart(z.node,z.offset),A.removeAllRanges(),te>Te?(A.addRange(T),A.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),A.addRange(T))}}}}for(H=[],A=d;A=A.parentNode;)A.nodeType===1&&H.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<H.length;d++){var k=H[d];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}nr=!!Tc,Cc=Tc=null}finally{je=n,x.p=l,M.T=a}}e.current=t,Ze=2}}function wd(){if(Ze===2){Ze=0;var e=Na,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=x.p;x.p=2;var n=je;je|=4;try{If(e,t.alternate,t)}finally{je=n,x.p=l,M.T=a}}Ze=3}}function zd(){if(Ze===4||Ze===3){Ze=0,yp();var e=Na,t=Ml,a=ua,l=fd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Ml=Na=null,Nd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(za=null),Dr(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=x.p,x.p=2,M.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var d=l[u];i(d.value,{componentStack:d.stack})}}finally{M.T=t,x.p=n}}(ua&3)!==0&&Zi(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===pc?Rn++:(Rn=0,pc=e):Rn=0,An(0)}}function Nd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sn(t)))}function Zi(){return Ed(),wd(),zd(),Td()}function Td(){if(Ze!==5)return!1;var e=Na,t=dc;dc=0;var a=Dr(ua),l=M.T,n=x.p;try{x.p=32>a?32:a,M.T=null,a=mc,mc=null;var i=Na,u=ua;if(Ze=0,Ml=Na=null,ua=0,(je&6)!==0)throw Error(c(331));var d=je;if(je|=4,cd(i.current),id(i,i.current,u,a),je=d,An(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Jl,i)}catch{}return!0}finally{x.p=n,M.T=l,Nd(e,t)}}function Cd(e,t,a){t=Nt(a,t),t=Zu(e.stateNode,t,2),e=ya(e,t,2),e!==null&&($l(e,2),Xt(e))}function we(e,t,a){if(e.tag===3)Cd(e,e,a);else for(;t!==null;){if(t.tag===3){Cd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=Nt(a,e),a=Rf(2),l=ya(t,a,2),l!==null&&(Af(a,l,t,e),$l(l,2),Xt(l));break}}t=t.return}}function vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Vh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(oc=!0,n.add(a),e=Wh.bind(null,e,t,a),t.then(e,e))}function Wh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ce===e&&(pe&a)===a&&(Le===4||Le===3&&(pe&62914560)===pe&&300>dt()-Yi?(je&2)===0&&Dl(e,0):sc|=a,Ol===pe&&(Ol=0)),Xt(e)}function Rd(e,t){t===0&&(t=jo()),e=Ga(e,t),e!==null&&($l(e,t),Xt(e))}function Fh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Rd(e,a)}function Ih(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Rd(e,a)}function Ph(e,t){return Ar(e,t)}var Ji=null,kl=null,bc=!1,Ki=!1,yc=!1,Ca=0;function Xt(e){e!==kl&&e.next===null&&(kl===null?Ji=kl=e:kl=kl.next=e),Ki=!0,bc||(bc=!0,tg())}function An(e,t){if(!yc&&Ki){yc=!0;do for(var a=!1,l=Ji;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(u&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Md(l,i))}else i=pe,i=In(l,l===Ce?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Kl(l,i)||(a=!0,Md(l,i));l=l.next}while(a);yc=!1}}function eg(){Ad()}function Ad(){Ki=bc=!1;var e=0;Ca!==0&&fg()&&(e=Ca);for(var t=dt(),a=null,l=Ji;l!==null;){var n=l.next,i=_d(l,t);i===0?(l.next=null,a===null?Ji=n:a.next=n,n===null&&(kl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ki=!0)),l=n}Ze!==0&&Ze!==5||An(e),Ca!==0&&(Ca=0)}function _d(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-pt(i),d=1<<u,v=n[u];v===-1?((d&a)===0||(d&l)!==0)&&(n[u]=Tp(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=Ce,a=pe,a=In(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_r(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&_r(l),Dr(a)){case 2:case 8:a=xo;break;case 32:a=Kn;break;case 268435456:a=So;break;default:a=Kn}return l=Od.bind(null,e),a=Ar(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&_r(l),e.callbackPriority=2,e.callbackNode=null,2}function Od(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zi()&&e.callbackNode!==a)return null;var l=pe;return l=In(e,e===Ce?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(md(e,l,t),_d(e,dt()),e.callbackNode!=null&&e.callbackNode===a?Od.bind(null,e):null)}function Md(e,t){if(Zi())return null;md(e,t,!0)}function tg(){mg(function(){(je&6)!==0?Ar(yo,eg):Ad()})}function xc(){if(Ca===0){var e=Sl;e===0&&(e=$n,$n<<=1,($n&261888)===0&&($n=256)),Ca=e}return Ca}function Dd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ai(""+e)}function Ud(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ag(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Dd((n[it]||null).action),u=l.submitter;u&&(t=(t=u[it]||null)?Dd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var d=new ri("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var v=u?Ud(n,u):new FormData(n);Yu(a,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=u?Ud(n,u):new FormData(n),Yu(a,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var Sc=0;Sc<lu.length;Sc++){var jc=lu[Sc],lg=jc.toLowerCase(),ng=jc[0].toUpperCase()+jc.slice(1);Dt(lg,"on"+ng)}Dt(fs,"onAnimationEnd"),Dt(ds,"onAnimationIteration"),Dt(ms,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(xh,"onTransitionRun"),Dt(Sh,"onTransitionStart"),Dt(jh,"onTransitionCancel"),Dt(ps,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ig=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));function kd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var d=l[u],v=d.instance,C=d.currentTarget;if(d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=C;try{i(n)}catch(D){oi(D)}n.currentTarget=null,i=v}else for(u=0;u<l.length;u++){if(d=l[u],v=d.instance,C=d.currentTarget,d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=C;try{i(n)}catch(D){oi(D)}n.currentTarget=null,i=v}}}}function me(e,t){var a=t[Ur];a===void 0&&(a=t[Ur]=new Set);var l=e+"__bubble";a.has(l)||(Ld(t,e,2,!1),a.add(l))}function Ec(e,t,a){var l=0;t&&(l|=4),Ld(a,e,l,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[$i]){e[$i]=!0,Ro.forEach(function(a){a!=="selectionchange"&&(ig.has(a)||Ec(a,!1,e),Ec(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,Ec("selectionchange",!1,t))}}function Ld(e,t,a,l){switch(dm(t)){case 2:var n=Mg;break;case 8:n=Dg;break;default:n=Bc}a=n.bind(null,t,a,e),n=void 0,!Qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function zc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var d=l.stateNode.containerInfo;if(d===n)break;if(u===4)for(u=l.return;u!==null;){var v=u.tag;if((v===3||v===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;d!==null;){if(u=nl(d),u===null)return;if(v=u.tag,v===5||v===6||v===26||v===27){l=i=u;continue e}d=d.parentNode}}l=l.return}qo(function(){var C=i,D=Gr(a),H=[];e:{var R=hs.get(e);if(R!==void 0){var A=ri,F=e;switch(e){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":A=Ip;break;case"focusin":F="focus",A=Kr;break;case"focusout":F="blur",A=Kr;break;case"beforeblur":case"afterblur":A=Kr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=th;break;case fs:case ds:case ms:A=Xp;break;case ps:A=lh;break;case"scroll":case"scrollend":A=Hp;break;case"wheel":A=ih;break;case"copy":case"cut":case"paste":A=Vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Zo;break;case"toggle":case"beforetoggle":A=uh}var te=(t&4)!==0,Te=!te&&(e==="scroll"||e==="scrollend"),z=te?R!==null?R+"Capture":null:R;te=[];for(var S=C,T;S!==null;){var k=S;if(T=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||T===null||z===null||(k=Il(S,z),k!=null&&te.push(On(S,k,T))),Te)break;S=S.return}0<te.length&&(R=new A(R,F,null,a,D),H.push({event:R,listeners:te}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",R&&a!==qr&&(F=a.relatedTarget||a.fromElement)&&(nl(F)||F[ll]))break e;if((A||R)&&(R=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,A?(F=a.relatedTarget||a.toElement,A=C,F=F?nl(F):null,F!==null&&(Te=p(F),te=F.tag,F!==Te||te!==5&&te!==27&&te!==6)&&(F=null)):(A=null,F=C),A!==F)){if(te=Qo,k="onMouseLeave",z="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(te=Zo,k="onPointerLeave",z="onPointerEnter",S="pointer"),Te=A==null?R:Fl(A),T=F==null?R:Fl(F),R=new te(k,S+"leave",A,a,D),R.target=Te,R.relatedTarget=T,k=null,nl(D)===C&&(te=new te(z,S+"enter",F,a,D),te.target=T,te.relatedTarget=Te,k=te),Te=k,A&&F)t:{for(te=rg,z=A,S=F,T=0,k=z;k;k=te(k))T++;k=0;for(var ee=S;ee;ee=te(ee))k++;for(;0<T-k;)z=te(z),T--;for(;0<k-T;)S=te(S),k--;for(;T--;){if(z===S||S!==null&&z===S.alternate){te=z;break t}z=te(z),S=te(S)}te=null}else te=null;A!==null&&Hd(H,R,A,te,!1),F!==null&&Te!==null&&Hd(H,Te,F,te,!0)}}e:{if(R=C?Fl(C):window,A=R.nodeName&&R.nodeName.toLowerCase(),A==="select"||A==="input"&&R.type==="file")var xe=es;else if(Io(R))if(ts)xe=vh;else{xe=hh;var P=ph}else A=R.nodeName,!A||A.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?C&&Yr(C.elementType)&&(xe=es):xe=gh;if(xe&&(xe=xe(e,C))){Po(H,xe,a,D);break e}P&&P(e,R,C),e==="focusout"&&C&&R.type==="number"&&C.memoizedProps.value!=null&&Br(R,"number",R.value)}switch(P=C?Fl(C):window,e){case"focusin":(Io(P)||P.contentEditable==="true")&&(ml=P,eu=C,un=null);break;case"focusout":un=eu=ml=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,os(H,a,D);break;case"selectionchange":if(yh)break;case"keydown":case"keyup":os(H,a,D)}var oe;if(Wr)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else dl?Wo(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Jo&&a.locale!=="ko"&&(dl||he!=="onCompositionStart"?he==="onCompositionEnd"&&dl&&(oe=Go()):(da=D,Vr="value"in da?da.value:da.textContent,dl=!0)),P=Wi(C,he),0<P.length&&(he=new Vo(he,e,null,a,D),H.push({event:he,listeners:P}),oe?he.data=oe:(oe=Fo(a),oe!==null&&(he.data=oe)))),(oe=oh?sh(e,a):fh(e,a))&&(he=Wi(C,"onBeforeInput"),0<he.length&&(P=new Vo("onBeforeInput","beforeinput",null,a,D),H.push({event:P,listeners:he}),P.data=oe)),ag(H,e,C,a,D)}kd(H,t)})}function On(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(On(e,n,i)),n=Il(e,t),n!=null&&l.push(On(e,n,i))),e.tag===3)return l;e=e.return}return[]}function rg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var d=a,v=d.alternate,C=d.stateNode;if(d=d.tag,v!==null&&v===l)break;d!==5&&d!==26&&d!==27||C===null||(v=C,n?(C=Il(a,i),C!=null&&u.unshift(On(a,C,v))):n||(C=Il(a,i),C!=null&&u.push(On(a,C,v)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var ug=/\r\n?/g,cg=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(ug,`
`).replace(cg,"")}function Yd(e,t){return t=Bd(t),Bd(e)===t}function Ne(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,a,l);break;case"style":Bo(e,l,i);break;case"data":if(t!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ne(e,t,"name",n.name,n,null),Ne(e,t,"formEncType",n.formEncType,n,null),Ne(e,t,"formMethod",n.formMethod,n,null),Ne(e,t,"formTarget",n.formTarget,n,null)):(Ne(e,t,"encType",n.encType,n,null),Ne(e,t,"method",n.method,n,null),Ne(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ai(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":me("beforetoggle",e),me("toggle",e),Pn(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kp.get(a)||a,Pn(e,a,l))}}function Nc(e,t,a,l,n,i){switch(a){case"style":Bo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ao.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Pn(e,a,l)}}}function tt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ne(e,t,i,u,a,null)}}n&&Ne(e,t,"srcSet",a.srcSet,a,null),l&&Ne(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var d=i=u=n=null,v=null,C=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":n=D;break;case"type":u=D;break;case"checked":v=D;break;case"defaultChecked":C=D;break;case"value":i=D;break;case"defaultValue":d=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Ne(e,t,l,D,a,null)}}Uo(e,i,d,v,C,u,n,!1);return;case"select":me("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":u=d;break;case"multiple":l=d;default:Ne(e,t,n,d,a,null)}t=i,a=u,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":me("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(d=a[u],d!=null))switch(u){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ne(e,t,u,d,a,null)}Lo(e,l,n,i);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ne(e,t,v,l,a,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<_n.length;l++)me(_n[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ne(e,t,C,l,a,null)}return;default:if(Yr(t)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&Nc(e,t,D,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Ne(e,t,d,l,a,null))}function og(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,d=null,v=null,C=null,D=null;for(A in a){var H=a[A];if(a.hasOwnProperty(A)&&H!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":v=H;default:l.hasOwnProperty(A)||Ne(e,t,A,null,l,H)}}for(var R in l){var A=l[R];if(H=a[R],l.hasOwnProperty(R)&&(A!=null||H!=null))switch(R){case"type":i=A;break;case"name":n=A;break;case"checked":C=A;break;case"defaultChecked":D=A;break;case"value":u=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==H&&Ne(e,t,R,A,l,H)}}Hr(e,u,d,v,C,D,i,n);return;case"select":A=u=d=R=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":A=v;default:l.hasOwnProperty(i)||Ne(e,t,i,null,l,v)}for(n in l)if(i=l[n],v=a[n],l.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":R=i;break;case"defaultValue":d=i;break;case"multiple":u=i;default:i!==v&&Ne(e,t,n,i,l,v)}t=d,a=u,l=A,R!=null?cl(e,!!a,R,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":A=R=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ne(e,t,d,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":R=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&Ne(e,t,u,n,l,i)}ko(e,R,A);return;case"option":for(var F in a)R=a[F],a.hasOwnProperty(F)&&R!=null&&!l.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:Ne(e,t,F,null,l,R));for(v in l)R=l[v],A=a[v],l.hasOwnProperty(v)&&R!==A&&(R!=null||A!=null)&&(v==="selected"?e.selected=R&&typeof R!="function"&&typeof R!="symbol":Ne(e,t,v,R,l,A));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)R=a[te],a.hasOwnProperty(te)&&R!=null&&!l.hasOwnProperty(te)&&Ne(e,t,te,null,l,R);for(C in l)if(R=l[C],A=a[C],l.hasOwnProperty(C)&&R!==A&&(R!=null||A!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Ne(e,t,C,R,l,A)}return;default:if(Yr(t)){for(var Te in a)R=a[Te],a.hasOwnProperty(Te)&&R!==void 0&&!l.hasOwnProperty(Te)&&Nc(e,t,Te,void 0,l,R);for(D in l)R=l[D],A=a[D],!l.hasOwnProperty(D)||R===A||R===void 0&&A===void 0||Nc(e,t,D,R,l,A);return}}for(var z in a)R=a[z],a.hasOwnProperty(z)&&R!=null&&!l.hasOwnProperty(z)&&Ne(e,t,z,null,l,R);for(H in l)R=l[H],A=a[H],!l.hasOwnProperty(H)||R===A||R==null&&A==null||Ne(e,t,H,R,l,A)}function qd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,d=n.duration;if(i&&d&&qd(u)){for(u=0,d=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],C=v.startTime;if(C>d)break;var D=v.transferSize,H=v.initiatorType;D&&qd(H)&&(v=v.responseEnd,u+=D*(v<d?1:(d-C)/(v-C)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tc=null,Cc=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function fg(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var Qd=typeof setTimeout=="function"?setTimeout:void 0,dg=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(e){return Vd.resolve(null).then(e).catch(pg)}:Qd;function pg(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Zd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,d=i.nodeName;i[Wl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Mn(e.ownerDocument.body);a=n}while(a);Yl(t)}function Jd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_c(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function hg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function gg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function Kd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$?"||e.data==="$~"}function Mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dc=null;function $d(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Fd(e,t,a){switch(t=Fi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);kr(e)}var Ot=new Map,Id=new Set;function Ii(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=x.d;x.d={f:bg,r:yg,D:xg,C:Sg,L:jg,m:Eg,X:zg,S:wg,M:Ng};function bg(){var e=ca.f(),t=Xi();return e||t}function yg(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?hf(t):ca.r(e)}var Ll=typeof document>"u"?null:document;function Pd(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var n=wt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Id.has(n)||(Id.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),tt(t,"link",e),Je(t),l.head.appendChild(t)))}}function xg(e){ca.D(e),Pd("dns-prefetch",e,null)}function Sg(e,t){ca.C(e,t),Pd("preconnect",e,t)}function jg(e,t,a){ca.L(e,t,a);var l=Ll;if(l&&e&&t){var n='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+wt(a.imageSizes)+'"]')):n+='[href="'+wt(e)+'"]';var i=n;switch(t){case"style":i=Hl(e);break;case"script":i=Bl(e)}Ot.has(i)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Dn(i))||t==="script"&&l.querySelector(Un(i))||(t=l.createElement("link"),tt(t,"link",e),Je(t),l.head.appendChild(t)))}}function Eg(e,t){ca.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!Ot.has(i)&&(e=w({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Un(i)))return}l=a.createElement("link"),tt(l,"link",e),Je(l),a.head.appendChild(l)}}}function wg(e,t,a){ca.S(e,t,a);var l=Ll;if(l&&e){var n=rl(l).hoistableStyles,i=Hl(e);t=t||"default";var u=n.get(i);if(!u){var d={loading:0,preload:null};if(u=l.querySelector(Dn(i)))d.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Uc(e,a);var v=u=l.createElement("link");Je(v),tt(v,"link",e),v._p=new Promise(function(C,D){v.onload=C,v.onerror=D}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Pi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:d},n.set(i,u)}}}function zg(e,t){ca.X(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=w({src:e,async:!0},t),(t=Ot.get(n))&&kc(e,t),i=a.createElement("script"),Je(i),tt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Ng(e,t){ca.M(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=w({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&kc(e,t),i=a.createElement("script"),Je(i),tt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function em(e,t,a,l){var n=(n=le.current)?Ii(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Hl(a.href),a=rl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hl(a.href);var i=rl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Dn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||Tg(n,e,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(a),a=rl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Hl(e){return'href="'+wt(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function tm(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Tg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),tt(t,"link",a),Je(t),e.head.appendChild(t))}function Bl(e){return'[src="'+wt(e)+'"]'}function Un(e){return"script[async]"+e}function am(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return t.instance=l,Je(l),l;var n=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Je(l),tt(l,"style",n),Pi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Hl(a.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Je(i),i;l=tm(a),(n=Ot.get(n))&&Uc(l,n),i=(e.ownerDocument||e).createElement("link"),Je(i);var u=i;return u._p=new Promise(function(d,v){u.onload=d,u.onerror=v}),tt(i,"link",l),t.state.loading|=4,Pi(i,a.precedence,e),t.instance=i;case"script":return i=Bl(a.src),(n=e.querySelector(Un(i)))?(t.instance=n,Je(n),n):(l=a,(n=Ot.get(i))&&(l=w({},a),kc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Je(n),tt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Pi(l,a.precedence,e));return t.instance}function Pi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var d=l[u];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var er=null;function lm(e,t,a){if(er===null){var l=new Map,n=er=new Map;n.set(a,l)}else n=er,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[Fe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var d=l.get(u);d?d.push(i):l.set(u,[i])}}return l}function nm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Cg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function im(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Rg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Hl(l.href),i=t.querySelector(Dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Je(i);return}i=t.ownerDocument||t,l=tm(l),(n=Ot.get(n))&&Uc(l,n),i=i.createElement("link"),Je(i);var u=i;u._p=new Promise(function(d,v){u.onload=d,u.onerror=v}),tt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Lc=0;function Ag(e,t){return e.stylesheets&&e.count===0&&lr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Lc===0&&(Lc=62500*sg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Lc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ar=null;function lr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ar=new Map,t.forEach(_g,e),ar=null,tr.call(e))}function _g(e,t){if(!(t.state.loading&4)){var a=ar.get(e);if(a)var l=a.get(null);else{a=new Map,ar.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=tr.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var kn={$$typeof:G,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Og(e,t,a,l,n,i,u,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.hiddenUpdates=Or(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function rm(e,t,a,l,n,i,u,d,v,C,D,H){return e=new Og(e,t,a,u,v,C,D,H,d),t=1,i===!0&&(t|=24),i=gt(3,null,null,t),e.current=i,i.stateNode=e,t=gu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},xu(i),e}function um(e){return e?(e=gl,e):gl}function cm(e,t,a,l,n,i){n=um(n),l.context===null?l.context=n:l.pendingContext=n,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(ft(a,e,t),pn(a,e,t))}function om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Hc(e,t){om(e,t),(e=e.alternate)&&om(e,t)}function sm(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ft(t,e,67108864),Hc(e,67108864)}}function fm(e){if(e.tag===13||e.tag===31){var t=St();t=Mr(t);var a=Ga(e,t);a!==null&&ft(a,e,t),Hc(e,t)}}var nr=!0;function Mg(e,t,a,l){var n=M.T;M.T=null;var i=x.p;try{x.p=2,Bc(e,t,a,l)}finally{x.p=i,M.T=n}}function Dg(e,t,a,l){var n=M.T;M.T=null;var i=x.p;try{x.p=8,Bc(e,t,a,l)}finally{x.p=i,M.T=n}}function Bc(e,t,a,l){if(nr){var n=Yc(l);if(n===null)zc(e,t,l,ir,a),mm(e,l);else if(kg(n,e,t,a,l))l.stopPropagation();else if(mm(e,l),t&4&&-1<Ug.indexOf(e)){for(;n!==null;){var i=il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=La(i.pendingLanes);if(u!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;u;){var v=1<<31-pt(u);d.entanglements[1]|=v,u&=~v}Xt(i),(je&6)===0&&(qi=dt()+500,An(0))}}break;case 31:case 13:d=Ga(i,2),d!==null&&ft(d,i,2),Xi(),Hc(i,2)}if(i=Yc(l),i===null&&zc(e,t,l,ir,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else zc(e,t,l,null,a)}}function Yc(e){return e=Gr(e),qc(e)}var ir=null;function qc(e){if(ir=null,e=nl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ir=e,null}function dm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xp()){case yo:return 2;case xo:return 8;case Kn:case Sp:return 32;case So:return 268435456;default:return 32}default:return 32}}var Gc=!1,Aa=null,_a=null,Oa=null,Ln=new Map,Hn=new Map,Ma=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mm(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&sm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function kg(e,t,a,l,n){switch(t){case"focusin":return Aa=Bn(Aa,e,t,a,l,n),!0;case"dragenter":return _a=Bn(_a,e,t,a,l,n),!0;case"mouseover":return Oa=Bn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Ln.set(i,Bn(Ln.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Hn.set(i,Bn(Hn.get(i)||null,e,t,a,l,n)),!0}return!1}function pm(e){var t=nl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,To(e.priority,function(){fm(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,To(e.priority,function(){fm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Yc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);qr=l,a.target.dispatchEvent(l),qr=null}else return t=il(a),t!==null&&sm(t),e.blockedOn=a,!1;t.shift()}return!0}function hm(e,t,a){rr(e)&&a.delete(t)}function Lg(){Gc=!1,Aa!==null&&rr(Aa)&&(Aa=null),_a!==null&&rr(_a)&&(_a=null),Oa!==null&&rr(Oa)&&(Oa=null),Ln.forEach(hm),Hn.forEach(hm)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Lg)))}var cr=null;function gm(e){cr!==e&&(cr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cr===e&&(cr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(qc(l||a)===null)continue;break}var i=il(a);i!==null&&(e.splice(t,3),t-=3,Yu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Yl(e){function t(v){return ur(v,e)}Aa!==null&&ur(Aa,e),_a!==null&&ur(_a,e),Oa!==null&&ur(Oa,e),Ln.forEach(t),Hn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)pm(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[it]||null;if(typeof i=="function")u||gm(a);else if(u){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[it]||null)d=u.formAction;else if(qc(n)!==null)continue}else d=u.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),gm(a)}}}function vm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Xc(e){this._internalRoot=e}or.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=St();cm(a,l,e,t,null,null)},or.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cm(e.current,2,null,e,null,null),Xi(),t[ll]=null}};function or(e){this._internalRoot=e}or.prototype.unstable_scheduleHydration=function(e){if(e){var t=No();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&pm(e)}};var bm=o.version;if(bm!=="19.2.7")throw Error(c(527,bm,"19.2.7"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Hg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Jl=sr.inject(Hg),mt=sr}catch{}}return qn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=zf,i=Nf,u=Tf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=rm(e,1,!1,null,null,a,l,null,n,i,u,vm),e[ll]=t.current,wc(e),new Xc(t)},qn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=zf,u=Nf,d=Tf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=rm(e,1,!0,t,a??null,l,n,v,i,u,d,vm),t.context=um(null),a=t.current,l=St(),l=Mr(l),n=ba(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,$l(t,a),Xt(t),e[ll]=t.current,wc(e),new or(t)},qn.version="19.2.7",qn}var Cm;function Kg(){if(Cm)return Zc.exports;Cm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Zc.exports=Jg(),Zc.exports}var $g=Kg();var uo=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Gm=/^[\\/]{2}/;function Wg(r,o){return o+r.replace(/\\/g,"/")}var Rm="popstate";function Am(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Fg(r={}){function o(c,m){let p=m.state?.masked,{pathname:h,search:j,hash:y}=p||c.location;return ao("",{pathname:h,search:j,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function f(c,m){return typeof m=="string"?m:Xn(m)}return Pg(o,f,null,r)}function Ue(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Mt(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Ig(){return Math.random().toString(36).substring(2,10)}function _m(r,o){return{usr:r.state,key:r.key,idx:o,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function ao(r,o,f=null,c,m){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Xl(o):o,state:f,key:o&&o.key||c||Ig(),mask:m}}function Xn({pathname:r="/",search:o="",hash:f=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Xl(r){let o={};if(r){let f=r.indexOf("#");f>=0&&(o.hash=r.substring(f),r=r.substring(0,f));let c=r.indexOf("?");c>=0&&(o.search=r.substring(c),r=r.substring(0,c)),r&&(o.pathname=r)}return o}function Pg(r,o,f,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,h=m.history,j="POP",y=null,g=N();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function N(){return(h.state||{idx:null}).idx}function w(){j="POP";let Y=N(),X=Y==null?null:Y-g;g=Y,y&&y({action:j,location:V.location,delta:X})}function _(Y,X){j="PUSH";let q=Am(Y)?Y:ao(V.location,Y,X);g=N()+1;let G=_m(q,g),$=V.createHref(q.mask||q);try{h.pushState(G,"",$)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;m.location.assign($)}p&&y&&y({action:j,location:V.location,delta:1})}function O(Y,X){j="REPLACE";let q=Am(Y)?Y:ao(V.location,Y,X);g=N();let G=_m(q,g),$=V.createHref(q.mask||q);h.replaceState(G,"",$),p&&y&&y({action:j,location:V.location,delta:0})}function Q(Y){return e0(m,Y)}let V={get action(){return j},get location(){return r(m,h)},listen(Y){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(Rm,w),y=Y,()=>{m.removeEventListener(Rm,w),y=null}},createHref(Y){return o(m,Y)},createURL:Q,encodeLocation(Y){let X=Q(Y);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:_,replace:O,go(Y){return h.go(Y)}};return V}function e0(r,o,f=!1){let c="http://localhost";r&&(c=r.location.origin!=="null"?r.location.origin:r.location.href),Ue(c,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:Xn(o);return m=m.replace(/ $/,"%20"),!f&&Gm.test(m)&&(m=c+m),new URL(m,c)}function Xm(r,o,f="/"){return t0(r,o,f,!1)}function t0(r,o,f,c,m){let p=typeof o=="string"?Xl(o):o,h=oa(p.pathname||"/",f);if(h==null)return null;let j=a0(r),y=null,g=m0(h);for(let N=0;y==null&&N<j.length;++N)y=d0(j[N],g,c);return y}function a0(r){let o=Qm(r);return l0(o),o}function Qm(r,o=[],f=[],c="",m=!1){let p=(h,j,y=m,g)=>{let N={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:j,route:h};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(c)&&y)return;Ue(N.relativePath.startsWith(c),`Absolute route path "${N.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(c.length)}let w=Lt([c,N.relativePath]),_=f.concat(N);h.children&&h.children.length>0&&(Ue(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Qm(h.children,o,_,w,y)),!(h.path==null&&!h.index)&&o.push({path:w,score:s0(w,h.index),routesMeta:_.map((O,Q)=>{let[V,Y]=Jm(O.relativePath,O.caseSensitive,Q===_.length-1);return{...O,matcher:V,compiledParams:Y}})})};return r.forEach((h,j)=>{if(h.path===""||!h.path?.includes("?"))p(h,j);else for(let y of Vm(h.path))p(h,j,!0,y)}),o}function Vm(r){let o=r.split("/");if(o.length===0)return[];let[f,...c]=o,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let h=Vm(c.join("/")),j=[];return j.push(...h.map(y=>y===""?p:[p,y].join("/"))),m&&j.push(...h),j.map(y=>r.startsWith("/")&&y===""?"/":y)}function l0(r){r.sort((o,f)=>o.score!==f.score?f.score-o.score:f0(o.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var n0=/^:[\w-]+$/,i0=3,r0=2,u0=1,c0=10,o0=-2,Om=r=>r==="*";function s0(r,o){let f=r.split("/"),c=f.length;return f.some(Om)&&(c+=o0),o&&(c+=r0),f.filter(m=>!Om(m)).reduce((m,p)=>m+(n0.test(p)?i0:p===""?u0:c0),c)}function f0(r,o){return r.length===o.length&&r.slice(0,-1).every((c,m)=>c===o[m])?r[r.length-1]-o[o.length-1]:0}function d0(r,o,f=!1){let{routesMeta:c}=r,m={},p="/",h=[];for(let j=0;j<c.length;++j){let y=c[j],g=j===c.length-1,N=p==="/"?o:o.slice(p.length)||"/",w={path:y.relativePath,caseSensitive:y.caseSensitive,end:g},_=y.matcher&&y.compiledParams?Zm(w,N,y.matcher,y.compiledParams):vr(w,N),O=y.route;if(!_&&g&&f&&!c[c.length-1].route.index&&(_=vr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},N)),!_)return null;Object.assign(m,_.params),h.push({params:m,pathname:Lt([p,_.pathname]),pathnameBase:g0(Lt([p,_.pathnameBase])),route:O}),_.pathnameBase!=="/"&&(p=Lt([p,_.pathnameBase]))}return h}function vr(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,c]=Jm(r.path,r.caseSensitive,r.end);return Zm(r,o,f,c)}function Zm(r,o,f,c){let m=o.match(f);if(!m)return null;let p=m[0],h=p.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:c.reduce((g,{paramName:N,isOptional:w},_)=>{if(N==="*"){let Q=j[_]||"";h=p.slice(0,p.length-Q.length).replace(/(.)\/+$/,"$1")}const O=j[_];return w&&!O?g[N]=void 0:g[N]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:h,pattern:r}}function Jm(r,o=!1,f=!0){Mt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,j,y,g,N)=>{if(c.push({paramName:j,isOptional:y!=null}),y){let w=N.charAt(g+h.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),c]}function m0(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Mt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function oa(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let f=o.endsWith("/")?o.length-1:o.length,c=r.charAt(f);return c&&c!=="/"?null:r.slice(f)||"/"}function p0(r,o="/"){let{pathname:f,search:c="",hash:m=""}=typeof r=="string"?Xl(r):r,p;return f?(f=Km(f),f.startsWith("/")?p=Mm(f.substring(1),"/"):p=Mm(f,o)):p=o,{pathname:p,search:v0(c),hash:b0(m)}}function Mm(r,o){let f=br(o).split("/");return r.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Wc(r,o,f,c){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function h0(r){return r.filter((o,f)=>f===0||o.route.path&&o.route.path.length>0)}function co(r){let o=h0(r);return o.map((f,c)=>c===o.length-1?f.pathname:f.pathnameBase)}function Sr(r,o,f,c=!1){let m;typeof r=="string"?m=Xl(r):(m={...r},Ue(!m.pathname||!m.pathname.includes("?"),Wc("?","pathname","search",m)),Ue(!m.pathname||!m.pathname.includes("#"),Wc("#","pathname","hash",m)),Ue(!m.search||!m.search.includes("#"),Wc("#","search","hash",m)));let p=r===""||m.pathname==="",h=p?"/":m.pathname,j;if(h==null)j=f;else{let w=o.length-1;if(!c&&h.startsWith("..")){let _=h.split("/");for(;_[0]==="..";)_.shift(),w-=1;m.pathname=_.join("/")}j=w>=0?o[w]:"/"}let y=p0(m,j),g=h&&h!=="/"&&h.endsWith("/"),N=(p||h===".")&&f.endsWith("/");return!y.pathname.endsWith("/")&&(g||N)&&(y.pathname+="/"),y}var Km=r=>r.replace(/[\\/]{2,}/g,"/"),Lt=r=>Km(r.join("/")),br=r=>r.replace(/\/+$/,""),g0=r=>br(r).replace(/^\/*/,"/"),v0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,b0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,y0=class{constructor(r,o,f,c=!1){this.status=r,this.statusText=o||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function x0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function S0(r){let o=r.map(f=>f.route.path).filter(Boolean);return Lt(o)||"/"}var $m=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Wm(r,o){let f=r;if(typeof f!="string"||!uo.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,m=!1;if($m)try{let p=new URL(window.location.href),h=Gm.test(f)?new URL(Wg(f,p.protocol)):new URL(f),j=oa(h.pathname,o);h.origin===p.origin&&j!=null?f=j+h.search+h.hash:m=!0}catch{Mt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fm=["POST","PUT","PATCH","DELETE"];new Set(Fm);var j0=["GET",...Fm];new Set(j0);var E0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function w0(r){try{return E0.includes(new URL(r).protocol)}catch{return!1}}var Ql=b.createContext(null);Ql.displayName="DataRouter";var jr=b.createContext(null);jr.displayName="DataRouterState";var Im=b.createContext(!1);function z0(){return b.useContext(Im)}var Pm=b.createContext({isTransitioning:!1});Pm.displayName="ViewTransition";var N0=b.createContext(new Map);N0.displayName="Fetchers";var T0=b.createContext(null);T0.displayName="Await";var jt=b.createContext(null);jt.displayName="Navigation";var Qn=b.createContext(null);Qn.displayName="Location";var Ht=b.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var oo=b.createContext(null);oo.displayName="RouteError";var ep="REACT_ROUTER_ERROR",C0="REDIRECT",R0="ROUTE_ERROR_RESPONSE";function A0(r){if(r.startsWith(`${ep}:${C0}:{`))try{let o=JSON.parse(r.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function _0(r){if(r.startsWith(`${ep}:${R0}:{`))try{let o=JSON.parse(r.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new y0(o.status,o.statusText,o.data)}catch{}}function O0(r,{relative:o}={}){Ue(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=b.useContext(jt),{hash:m,pathname:p,search:h}=Vn(r,{relative:o}),j=p;return f!=="/"&&(j=p==="/"?f:Lt([f,p])),c.createHref({pathname:j,search:h,hash:m})}function Vl(){return b.useContext(Qn)!=null}function Bt(){return Ue(Vl(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Qn).location}var tp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ap(r){b.useContext(jt).static||b.useLayoutEffect(r)}function so(){let{isDataRoute:r}=b.useContext(Ht);return r?J0():M0()}function M0(){Ue(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let r=b.useContext(Ql),{basename:o,navigator:f}=b.useContext(jt),{matches:c}=b.useContext(Ht),{pathname:m}=Bt(),p=JSON.stringify(co(c)),h=b.useRef(!1);return ap(()=>{h.current=!0}),b.useCallback((y,g={})=>{if(Mt(h.current,tp),!h.current)return;if(typeof y=="number"){f.go(y);return}let N=Sr(y,JSON.parse(p),m,g.relative==="path");r==null&&o!=="/"&&(N.pathname=N.pathname==="/"?o:Lt([o,N.pathname])),(g.replace?f.replace:f.push)(N,g.state,g)},[o,f,p,m,r])}var D0=b.createContext(null);function U0(r){let o=b.useContext(Ht).outlet;return b.useMemo(()=>o&&b.createElement(D0.Provider,{value:r},o),[o,r])}function Vn(r,{relative:o}={}){let{matches:f}=b.useContext(Ht),{pathname:c}=Bt(),m=JSON.stringify(co(f));return b.useMemo(()=>Sr(r,JSON.parse(m),c,o==="path"),[r,m,c,o])}function k0(r,o){return lp(r,o)}function lp(r,o,f){Ue(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=b.useContext(jt),{matches:m}=b.useContext(Ht),p=m[m.length-1],h=p?p.params:{},j=p?p.pathname:"/",y=p?p.pathnameBase:"/",g=p&&p.route;{let Y=g&&g.path||"";ip(j,!g||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let N=Bt(),w;if(o){let Y=typeof o=="string"?Xl(o):o;Ue(y==="/"||Y.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),w=Y}else w=N;let _=w.pathname||"/",O=_;if(y!=="/"){let Y=y.replace(/^\//,"").split("/");O="/"+_.replace(/^\//,"").split("/").slice(Y.length).join("/")}let Q=f&&f.state.matches.length?f.state.matches.map(Y=>Object.assign(Y,{route:f.manifest[Y.route.id]||Y.route})):Xm(r,{pathname:O});Mt(g||Q!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Mt(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=q0(Q&&Q.map(Y=>Object.assign({},Y,{params:Object.assign({},h,Y.params),pathname:Lt([y,c.encodeLocation?c.encodeLocation(Y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?y:Lt([y,c.encodeLocation?c.encodeLocation(Y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),m,f);return o&&V?b.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...w},navigationType:"POP"}},V):V}function L0(){let r=Z0(),o=x0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},o),f?b.createElement("pre",{style:m},f):null,h)}var H0=b.createElement(L0,null),np=class extends b.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){this.props.onError?this.props.onError(r,o):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const f=_0(r.digest);f&&(r=f)}let o=r!==void 0?b.createElement(Ht.Provider,{value:this.props.routeContext},b.createElement(oo.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?b.createElement(B0,{error:r},o):o}};np.contextType=Im;var Fc=new WeakMap;function B0({children:r,error:o}){let{basename:f}=b.useContext(jt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=A0(o.digest);if(c){let m=Fc.get(o);if(m)throw m;let p=Wm(c.location,f),h=p.absoluteURL||p.to;if(w0(h))throw new Error("Invalid redirect location");if($m&&!Fc.get(o))if(p.isExternal||c.reloadDocument)window.location.href=h;else{const j=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Fc.set(o,j),j}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return r}function Y0({routeContext:r,match:o,children:f}){let c=b.useContext(Ql);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),b.createElement(Ht.Provider,{value:r},f)}function q0(r,o=[],f){let c=f?.state;if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let m=r,p=c?.errors;if(p!=null){let N=m.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);Ue(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,N+1))}let h=!1,j=-1;if(f&&c){h=c.renderFallback;for(let N=0;N<m.length;N++){let w=m[N];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(j=N),w.route.id){let{loaderData:_,errors:O}=c,Q=w.route.loader&&!_.hasOwnProperty(w.route.id)&&(!O||O[w.route.id]===void 0);if(w.route.lazy||Q){f.isStatic&&(h=!0),j>=0?m=m.slice(0,j+1):m=[m[0]];break}}}}let y=f?.onError,g=c&&y?(N,w)=>{y(N,{location:c.location,params:c.matches?.[0]?.params??{},pattern:S0(c.matches),errorInfo:w})}:void 0;return m.reduceRight((N,w,_)=>{let O,Q=!1,V=null,Y=null;c&&(O=p&&w.route.id?p[w.route.id]:void 0,V=w.route.errorElement||H0,h&&(j<0&&_===0?(ip("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Q=!0,Y=null):j===_&&(Q=!0,Y=w.route.hydrateFallbackElement||null)));let X=o.concat(m.slice(0,_+1)),q=()=>{let G;return O?G=V:Q?G=Y:w.route.Component?G=b.createElement(w.route.Component,null):w.route.element?G=w.route.element:G=N,b.createElement(Y0,{match:w,routeContext:{outlet:N,matches:X,isDataRoute:c!=null},children:G})};return c&&(w.route.ErrorBoundary||w.route.errorElement||_===0)?b.createElement(np,{location:c.location,revalidation:c.revalidation,component:V,error:O,children:q(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:g}):q()},null)}function fo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G0(r){let o=b.useContext(Ql);return Ue(o,fo(r)),o}function X0(r){let o=b.useContext(jr);return Ue(o,fo(r)),o}function Q0(r){let o=b.useContext(Ht);return Ue(o,fo(r)),o}function mo(r){let o=Q0(r),f=o.matches[o.matches.length-1];return Ue(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function V0(){return mo("useRouteId")}function Z0(){let r=b.useContext(oo),o=X0("useRouteError"),f=mo("useRouteError");return r!==void 0?r:o.errors?.[f]}function J0(){let{router:r}=G0("useNavigate"),o=mo("useNavigate"),f=b.useRef(!1);return ap(()=>{f.current=!0}),b.useCallback(async(m,p={})=>{Mt(f.current,tp),f.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:o,...p}))},[r,o])}var Dm={};function ip(r,o,f){!o&&!Dm[r]&&(Dm[r]=!0,Mt(!1,f))}b.memo(K0);function K0({routes:r,manifest:o,future:f,state:c,isStatic:m,onError:p}){return lp(r,void 0,{manifest:o,state:c,isStatic:m,onError:p})}function $0({to:r,replace:o,state:f,relative:c}){Ue(Vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=b.useContext(jt);Mt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=b.useContext(Ht),{pathname:h}=Bt(),j=so(),y=Sr(r,co(p),h,c==="path"),g=JSON.stringify(y);return b.useEffect(()=>{j(JSON.parse(g),{replace:o,state:f,relative:c})},[j,g,c,o,f]),null}function W0(r){return U0(r.context)}function Ua(r){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function F0({basename:r="/",children:o=null,location:f,navigationType:c="POP",navigator:m,static:p=!1,useTransitions:h}){Ue(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=r.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:j,navigator:m,static:p,useTransitions:h,future:{}}),[j,m,p,h]);typeof f=="string"&&(f=Xl(f));let{pathname:g="/",search:N="",hash:w="",state:_=null,key:O="default",mask:Q}=f,V=b.useMemo(()=>{let Y=oa(g,j);return Y==null?null:{location:{pathname:Y,search:N,hash:w,state:_,key:O,mask:Q},navigationType:c}},[j,g,N,w,_,O,c,Q]);return Mt(V!=null,`<Router basename="${j}"> is not able to match the URL "${g}${N}${w}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:b.createElement(jt.Provider,{value:y},b.createElement(Qn.Provider,{children:o,value:V}))}function I0({children:r,location:o}){return k0(lo(r),o)}function lo(r,o=[]){let f=[];return b.Children.forEach(r,(c,m)=>{if(!b.isValidElement(c))return;let p=[...o,m];if(c.type===b.Fragment){f.push.apply(f,lo(c.props.children,p));return}Ue(c.type===Ua,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=lo(c.props.children,p)),f.push(h)}),f}var pr="get",hr="application/x-www-form-urlencoded";function Er(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function P0(r){return Er(r)&&r.tagName.toLowerCase()==="button"}function ev(r){return Er(r)&&r.tagName.toLowerCase()==="form"}function tv(r){return Er(r)&&r.tagName.toLowerCase()==="input"}function av(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function lv(r,o){return r.button===0&&(!o||o==="_self")&&!av(r)}function no(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((o,f)=>{let c=r[f];return o.concat(Array.isArray(c)?c.map(m=>[f,m]):[[f,c]])},[]))}function nv(r,o){let f=no(r);return o&&o.forEach((c,m)=>{f.has(m)||o.getAll(m).forEach(p=>{f.append(m,p)})}),f}var fr=null;function iv(){if(fr===null)try{new FormData(document.createElement("form"),0),fr=!1}catch{fr=!0}return fr}var rv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ic(r){return r!=null&&!rv.has(r)?(Mt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hr}"`),null):r}function uv(r,o){let f,c,m,p,h;if(ev(r)){let j=r.getAttribute("action");c=j?oa(j,o):null,f=r.getAttribute("method")||pr,m=Ic(r.getAttribute("enctype"))||hr,p=new FormData(r)}else if(P0(r)||tv(r)&&(r.type==="submit"||r.type==="image")){let j=r.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||j.getAttribute("action");if(c=y?oa(y,o):null,f=r.getAttribute("formmethod")||j.getAttribute("method")||pr,m=Ic(r.getAttribute("formenctype"))||Ic(j.getAttribute("enctype"))||hr,p=new FormData(j,r),!iv()){let{name:g,type:N,value:w}=r;if(N==="image"){let _=g?`${g}.`:"";p.append(`${_}x`,"0"),p.append(`${_}y`,"0")}else g&&p.append(g,w)}}else{if(Er(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=pr,c=null,m=hr,h=r}return p&&m==="text/plain"&&(h=p,p=void 0),{action:c,method:f.toLowerCase(),encType:m,formData:p,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function po(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function rp(r,o,f,c){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:o&&oa(m.pathname,o)==="/"?m.pathname=`${br(o)}/_root.${c}`:m.pathname=`${br(m.pathname)}.${c}`,m}async function cv(r,o){if(r.id in o)return o[r.id];try{let f=await import(r.module);return o[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ov(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function sv(r,o,f){let c=await Promise.all(r.map(async m=>{let p=o.routes[m.route.id];if(p){let h=await cv(p,f);return h.links?h.links():[]}return[]}));return pv(c.flat(1).filter(ov).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Um(r,o,f,c,m,p){let h=(y,g)=>f[g]?y.route.id!==f[g].route.id:!0,j=(y,g)=>f[g].pathname!==y.pathname||f[g].route.path?.endsWith("*")&&f[g].params["*"]!==y.params["*"];return p==="assets"?o.filter((y,g)=>h(y,g)||j(y,g)):p==="data"?o.filter((y,g)=>{let N=c.routes[y.route.id];if(!N||!N.hasLoader)return!1;if(h(y,g)||j(y,g))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function fv(r,o,{includeHydrateFallback:f}={}){return dv(r.map(c=>{let m=o.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function dv(r){return[...new Set(r)]}function mv(r){let o={},f=Object.keys(r).sort();for(let c of f)o[c]=r[c];return o}function pv(r,o){let f=new Set;return new Set(o),r.reduce((c,m)=>{let p=JSON.stringify(mv(m));return f.has(p)||(f.add(p),c.push({key:p,link:m})),c},[])}function ho(){let r=b.useContext(Ql);return po(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function hv(){let r=b.useContext(jr);return po(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var go=b.createContext(void 0);go.displayName="FrameworkContext";function wr(){let r=b.useContext(go);return po(r,"You must render this element inside a <HydratedRouter> element"),r}function gv(r,o){let f=b.useContext(go),[c,m]=b.useState(!1),[p,h]=b.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:g,onMouseLeave:N,onTouchStart:w}=o,_=b.useRef(null);b.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let V=X=>{X.forEach(q=>{h(q.isIntersecting)})},Y=new IntersectionObserver(V,{threshold:.5});return _.current&&Y.observe(_.current),()=>{Y.disconnect()}}},[r]),b.useEffect(()=>{if(c){let V=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(V)}}},[c]);let O=()=>{m(!0)},Q=()=>{m(!1),h(!1)};return f?r!=="intent"?[p,_,{}]:[p,_,{onFocus:Gn(j,O),onBlur:Gn(y,Q),onMouseEnter:Gn(g,O),onMouseLeave:Gn(N,Q),onTouchStart:Gn(w,O)}]:[!1,_,{}]}function Gn(r,o){return f=>{r&&r(f),f.defaultPrevented||o(f)}}function vv({page:r,...o}){let f=z0(),{nonce:c}=wr(),{router:m}=ho(),p=b.useMemo(()=>Xm(m.routes,r,m.basename),[m.routes,r,m.basename]);return p?(o.nonce==null&&c&&(o={...o,nonce:c}),f?b.createElement(yv,{page:r,matches:p,...o}):b.createElement(xv,{page:r,matches:p,...o})):null}function bv(r){let{manifest:o,routeModules:f}=wr(),[c,m]=b.useState([]);return b.useEffect(()=>{let p=!1;return sv(r,o,f).then(h=>{p||m(h)}),()=>{p=!0}},[r,o,f]),c}function yv({page:r,matches:o,...f}){let c=Bt(),{future:m}=wr(),{basename:p}=ho(),h=b.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let j=rp(r,p,m.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,g=[];for(let N of o)typeof N.route.shouldRevalidate=="function"?y=!0:g.push(N.route.id);return y&&g.length>0&&j.searchParams.set("_routes",g.join(",")),[j.pathname+j.search]},[p,m.v8_trailingSlashAwareDataRequests,r,c,o]);return b.createElement(b.Fragment,null,h.map(j=>b.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...f})))}function xv({page:r,matches:o,...f}){let c=Bt(),{future:m,manifest:p,routeModules:h}=wr(),{basename:j}=ho(),{loaderData:y,matches:g}=hv(),N=b.useMemo(()=>Um(r,o,g,p,c,"data"),[r,o,g,p,c]),w=b.useMemo(()=>Um(r,o,g,p,c,"assets"),[r,o,g,p,c]),_=b.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let V=new Set,Y=!1;if(o.forEach(q=>{let G=p.routes[q.route.id];!G||!G.hasLoader||(!N.some($=>$.route.id===q.route.id)&&q.route.id in y&&h[q.route.id]?.shouldRevalidate||G.hasClientLoader?Y=!0:V.add(q.route.id))}),V.size===0)return[];let X=rp(r,j,m.v8_trailingSlashAwareDataRequests,"data");return Y&&V.size>0&&X.searchParams.set("_routes",o.filter(q=>V.has(q.route.id)).map(q=>q.route.id).join(",")),[X.pathname+X.search]},[j,m.v8_trailingSlashAwareDataRequests,y,c,p,N,o,r,h]),O=b.useMemo(()=>fv(w,p),[w,p]),Q=bv(w);return b.createElement(b.Fragment,null,_.map(V=>b.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...f})),O.map(V=>b.createElement("link",{key:V,rel:"modulepreload",href:V,...f})),Q.map(({key:V,link:Y})=>b.createElement("link",{key:V,nonce:f.nonce,...Y,crossOrigin:Y.crossOrigin??f.crossOrigin})))}function Sv(...r){return o=>{r.forEach(f=>{typeof f=="function"?f(o):f!=null&&(f.current=o)})}}var jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jv&&(window.__reactRouterVersion="7.18.1")}catch{}function Ev({basename:r,children:o,useTransitions:f,window:c}){let m=b.useRef();m.current==null&&(m.current=Fg({window:c,v5Compat:!0}));let p=m.current,[h,j]=b.useState({action:p.action,location:p.location}),y=b.useCallback(g=>{f===!1?j(g):b.startTransition(()=>j(g))},[f]);return b.useLayoutEffect(()=>p.listen(y),[p,y]),b.createElement(F0,{basename:r,children:o,location:h.location,navigationType:h.action,navigator:p,useTransitions:f})}var zr=b.forwardRef(function({onClick:o,discover:f="render",prefetch:c="none",relative:m,reloadDocument:p,replace:h,mask:j,state:y,target:g,to:N,preventScrollReset:w,viewTransition:_,defaultShouldRevalidate:O,...Q},V){let{basename:Y,navigator:X,useTransitions:q}=b.useContext(jt),G=typeof N=="string"&&uo.test(N),$=Wm(N,Y);N=$.to;let Z=O0(N,{relative:m}),U=Bt(),L=null;if(j){let Me=Sr(j,[],U.mask?U.mask.pathname:"/",!0);Y!=="/"&&(Me.pathname=Me.pathname==="/"?Y:Lt([Y,Me.pathname])),L=X.createHref(Me)}let[ae,fe,ge]=gv(c,Q),W=Nv(N,{replace:h,mask:j,state:y,target:g,preventScrollReset:w,relative:m,viewTransition:_,defaultShouldRevalidate:O,useTransitions:q});function ne(Me){o&&o(Me),Me.defaultPrevented||W(Me)}let ye=!($.isExternal||p),Re=b.createElement("a",{...Q,...ge,href:(ye?L:void 0)||$.absoluteURL||Z,onClick:ye?ne:o,ref:Sv(V,fe),target:g,"data-discover":!G&&f==="render"?"true":void 0});return ae&&!G?b.createElement(b.Fragment,null,Re,b.createElement(vv,{page:Z})):Re});zr.displayName="Link";var up=b.forwardRef(function({"aria-current":o="page",caseSensitive:f=!1,className:c="",end:m=!1,style:p,to:h,viewTransition:j,children:y,...g},N){let w=Vn(h,{relative:g.relative}),_=Bt(),O=b.useContext(jr),{navigator:Q,basename:V}=b.useContext(jt),Y=O!=null&&Ov(w)&&j===!0,X=Q.encodeLocation?Q.encodeLocation(w).pathname:w.pathname,q=_.pathname,G=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;f||(q=q.toLowerCase(),G=G?G.toLowerCase():null,X=X.toLowerCase()),G&&V&&(G=oa(G,V)||G);const $=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let Z=q===X||!m&&q.startsWith(X)&&q.charAt($)==="/",U=G!=null&&(G===X||!m&&G.startsWith(X)&&G.charAt(X.length)==="/"),L={isActive:Z,isPending:U,isTransitioning:Y},ae=Z?o:void 0,fe;typeof c=="function"?fe=c(L):fe=[c,Z?"active":null,U?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let ge=typeof p=="function"?p(L):p;return b.createElement(zr,{...g,"aria-current":ae,className:fe,ref:N,style:ge,to:h,viewTransition:j},typeof y=="function"?y(L):y)});up.displayName="NavLink";var wv=b.forwardRef(({discover:r="render",fetcherKey:o,navigate:f,reloadDocument:c,replace:m,state:p,method:h=pr,action:j,onSubmit:y,relative:g,preventScrollReset:N,viewTransition:w,defaultShouldRevalidate:_,...O},Q)=>{let{useTransitions:V}=b.useContext(jt),Y=Av(),X=_v(j,{relative:g}),q=h.toLowerCase()==="get"?"get":"post",G=typeof j=="string"&&uo.test(j),$=Z=>{if(y&&y(Z),Z.defaultPrevented)return;Z.preventDefault();let U=Z.nativeEvent.submitter,L=U?.getAttribute("formmethod")||h,ae=()=>Y(U||Z.currentTarget,{fetcherKey:o,method:L,navigate:f,replace:m,state:p,relative:g,preventScrollReset:N,viewTransition:w,defaultShouldRevalidate:_});V&&f!==!1?b.startTransition(()=>ae()):ae()};return b.createElement("form",{ref:Q,method:q,action:X,onSubmit:c?y:$,...O,"data-discover":!G&&r==="render"?"true":void 0})});wv.displayName="Form";function zv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cp(r){let o=b.useContext(Ql);return Ue(o,zv(r)),o}function Nv(r,{target:o,replace:f,mask:c,state:m,preventScrollReset:p,relative:h,viewTransition:j,defaultShouldRevalidate:y,useTransitions:g}={}){let N=so(),w=Bt(),_=Vn(r,{relative:h});return b.useCallback(O=>{if(lv(O,o)){O.preventDefault();let Q=f!==void 0?f:Xn(w)===Xn(_),V=()=>N(r,{replace:Q,mask:c,state:m,preventScrollReset:p,relative:h,viewTransition:j,defaultShouldRevalidate:y});g?b.startTransition(()=>V()):V()}},[w,N,_,f,c,m,o,r,p,h,j,y,g])}function Tv(r){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=b.useRef(no(r)),f=b.useRef(!1),c=Bt(),m=b.useMemo(()=>nv(c.search,f.current?null:o.current),[c.search]),p=so(),h=b.useCallback((j,y)=>{const g=no(typeof j=="function"?j(new URLSearchParams(m)):j);f.current=!0,p("?"+g,y)},[p,m]);return[m,h]}var Cv=0,Rv=()=>`__${String(++Cv)}__`;function Av(){let{router:r}=cp("useSubmit"),{basename:o}=b.useContext(jt),f=V0(),c=r.fetch,m=r.navigate;return b.useCallback(async(p,h={})=>{let{action:j,method:y,encType:g,formData:N,body:w}=uv(p,o);if(h.navigate===!1){let _=h.fetcherKey||Rv();await c(_,f,h.action||j,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:N,body:w,formMethod:h.method||y,formEncType:h.encType||g,flushSync:h.flushSync})}else await m(h.action||j,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:N,body:w,formMethod:h.method||y,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:f,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,m,o,f])}function _v(r,{relative:o}={}){let{basename:f}=b.useContext(jt),c=b.useContext(Ht);Ue(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Vn(r||".",{relative:o})},h=Bt();if(r==null){p.search=h.search;let j=new URLSearchParams(p.search),y=j.getAll("index");if(y.some(N=>N==="")){j.delete("index"),y.filter(w=>w).forEach(w=>j.append("index",w));let N=j.toString();p.search=N?`?${N}`:""}}return(!r||r===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Lt([f,p.pathname])),Xn(p)}function Ov(r,{relative:o}={}){let f=b.useContext(Pm);Ue(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=cp("useViewTransitionState"),m=Vn(r,{relative:o});if(!f.isTransitioning)return!1;let p=oa(f.currentLocation.pathname,c)||f.currentLocation.pathname,h=oa(f.nextLocation.pathname,c)||f.nextLocation.pathname;return vr(m.pathname,h)!=null||vr(m.pathname,p)!=null}function Mv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"10",cy:"7",r:"3.25",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Dv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"6",width:"14",height:"10",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 6V5a3 3 0 0 1 6 0v1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function io(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"4",y:"3",width:"12",height:"14",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M7 7.5h6M7 10.5h6M7 13.5h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Uv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"3",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("rect",{x:"11",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})}function kv(){return s.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M5 4.5h10M5 8.5h7M5 12.5h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M14 12.5l2 2 3.5-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Lv(){return s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5",fill:"url(#logo-grad)"}),s.jsx("path",{d:"M8 15V9l4 3 4-3v6",stroke:"#fff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"logo-grad",x1:"3",y1:"3",x2:"21",y2:"21",children:[s.jsx("stop",{stopColor:"#818cf8"}),s.jsx("stop",{offset:"1",stopColor:"#6366f1"})]})})]})}function Hv(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M3.5 8.5l3 3 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Bv(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M8 5v3.5M8 11h.01",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function km(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}function Yv(){return s.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 2.5h5l3.5 3.5V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z",stroke:"currentColor",strokeWidth:"1.25"}),s.jsx("path",{d:"M9 2.5V6h3.5",stroke:"currentColor",strokeWidth:"1.25"})]})}function qv(){return s.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M6 3.5h6.5V10M9.5 6.5L3 13",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}const Gv=[{to:"/profile",label:"Profile",icon:Mv},{to:"/jobs",label:"Jobs",icon:Dv},{to:"/applications",label:"Applications",icon:io},{to:"/templates",label:"Templates",icon:Uv},{to:"/review",label:"Review",icon:kv}];function Xv(){return s.jsxs("aside",{className:"sidebar",children:[s.jsx("div",{className:"sidebar-header",children:s.jsxs("div",{className:"sidebar-brand",children:[s.jsx(Lv,{}),s.jsxs("div",{className:"sidebar-brand-text",children:[s.jsx("span",{className:"sidebar-brand-name",children:"Joblication"}),s.jsx("span",{className:"sidebar-brand-tag",children:"Application studio"})]})]})}),s.jsxs("nav",{className:"sidebar-nav","aria-label":"Main navigation",children:[s.jsx("p",{className:"sidebar-nav-label",children:"Workspace"}),Gv.map(r=>s.jsxs(up,{to:r.to,className:({isActive:o})=>`sidebar-link ${o?"active":""}`,children:[s.jsx("span",{className:"sidebar-link-icon",children:s.jsx(r.icon,{})}),s.jsx("span",{className:"sidebar-link-label",children:r.label})]},r.to))]}),s.jsx("div",{className:"sidebar-footer",children:s.jsx("p",{children:"Tailored CVs & cover letters"})})]})}function Qv(){return s.jsxs("div",{className:"app-shell",children:[s.jsx(Xv,{}),s.jsx("main",{className:"app-main",children:s.jsx(W0,{})})]})}const tl={"Content-Type":"application/json"};async function qe(r,o={}){const f=await fetch(r,o),c=await f.json().catch(()=>({}));if(!f.ok)throw new Error(c.error||`Request failed (${f.status})`);return c}const Ae={health:()=>qe("/api/health"),config:()=>qe("/api/config"),getProfile:()=>qe("/api/profile"),saveProfile:r=>qe("/api/profile",{method:"PUT",headers:tl,body:JSON.stringify({profile:r})}),listJobs:()=>qe("/api/applications"),getJob:r=>qe(`/api/applications/${encodeURIComponent(r)}`),createJob:r=>qe("/api/applications",{method:"POST",headers:tl,body:JSON.stringify(r)}),updateJob:(r,o)=>qe(`/api/applications/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),deleteJob:r=>qe(`/api/applications/${encodeURIComponent(r)}`,{method:"DELETE"}),scrapeUrl:r=>qe("/api/applications/scrape",{method:"POST",headers:tl,body:JSON.stringify({url:r})}),listApplications:()=>qe("/api/applications/view"),listOutputs:()=>qe("/api/outputs"),fileUrl:(r,o)=>`/api/files/${encodeURIComponent(r)}/${encodeURIComponent(o)}`,getReview:r=>qe(`/api/review/${encodeURIComponent(r)}`),saveReview:(r,o)=>qe(`/api/review/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),rebuild:r=>qe(`/api/build/${encodeURIComponent(r)}`,{method:"POST"}),listTemplates:()=>qe("/api/templates"),getTemplate:r=>qe(`/api/templates/${encodeURIComponent(r)}`),saveTemplate:(r,o)=>qe(`/api/templates/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(o)}),createTemplate:r=>qe("/api/templates",{method:"POST",headers:tl,body:JSON.stringify(r)}),generateStatus:()=>qe("/api/generate/status"),startGenerate:()=>qe("/api/generate",{method:"POST"})},op=b.createContext(null);function Vv({children:r}){const[o,f]=b.useState(null),c=b.useRef(null),m=b.useCallback((h,j="success")=>{clearTimeout(c.current),f({message:h,type:j}),c.current=setTimeout(()=>f(null),3800)},[]),p=b.useMemo(()=>({showToast:m}),[m]);return s.jsxs(op.Provider,{value:p,children:[r,o&&s.jsxs("div",{className:`toast show ${o.type}`,role:"status","aria-live":"polite",children:[s.jsx("span",{className:"toast-icon",children:o.type==="error"?s.jsx(Bv,{}):s.jsx(Hv,{})}),s.jsx("span",{className:"toast-message",children:o.message})]})]})}function Zn(){const r=b.useContext(op);if(!r)throw new Error("useToast must be used within ToastProvider");return r}function sp({label:r="Loading…"}){return s.jsxs("div",{className:"page-loading",children:[s.jsx("div",{className:"page-loading-spinner"}),s.jsx("p",{children:r})]})}function Lm({icon:r,title:o,description:f,action:c}){return s.jsxs("div",{className:"empty-state",children:[r&&s.jsx("div",{className:"empty-state-icon",children:s.jsx(r,{})}),s.jsx("h3",{children:o}),f&&s.jsx("p",{children:f}),c]})}function al(r){return r.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,o=>o.toUpperCase())}function Zv(r){return r.includes("email")?"email":r.includes("phone")?"tel":r==="url"||r.includes("portfolio")||r.includes("github")||r.includes("linkedin")?"url":r.includes("Date")||r==="date"?"date":"text"}function We({id:r,label:o,value:f,onChange:c,type:m,multiline:p,rows:h=4,hint:j,onKeyDown:y}){const g=r||o.replace(/\s+/g,"_").toLowerCase(),N=m||Zv(g),w=!!f;return p?s.jsxs("div",{className:`md-field ${w?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:g,children:o}),s.jsx("textarea",{id:g,className:"md-input md-textarea",rows:h,value:f??"",onChange:_=>c(_.target.value),onKeyDown:y}),j&&s.jsx("span",{className:"md-hint",children:j})]}):s.jsxs("div",{className:`md-field ${w?"md-field-filled":""}`,children:[s.jsx("label",{htmlFor:g,children:o}),s.jsx("input",{id:g,className:"md-input",type:N,value:f??"",onChange:_=>c(_.target.value)}),j&&s.jsx("span",{className:"md-hint",children:j})]})}function fp({children:r,columns:o=2}){return s.jsx("div",{className:`md-grid md-grid-${o}`,children:r})}const Jv=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],Kv=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],$v=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],Wv=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],Fv=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],Iv=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],Pv={contact:{type:"object",fields:Jv},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:Kv,singular:"education"},experience:{type:"entities",fields:$v,singular:"experience"},projects:{type:"entities",fields:Wv,singular:"project"},certifications:{type:"entities",fields:Fv,singular:"certification"},achievements:{type:"entities",fields:Iv,singular:"achievement"}};function eb(r){return Pv[r]||{type:"dynamic"}}function yr(r){return r&&typeof r=="object"&&!Array.isArray(r)}function tb(r){if(typeof r=="string"||!yr(r))return"text";const o=Object.values(r);return!o.length||o.every(f=>typeof f=="string")?"keyValue":o.every(f=>yr(f))?"entities":"keyValue"}function dp({fields:r,value:o,onChange:f}){const c=o||{};return s.jsx(fp,{children:r.map(m=>s.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:s.jsx(We,{id:m.key,label:m.label,value:c[m.key],multiline:m.multiline,rows:m.rows,onChange:p=>f({...c,[m.key]:p})})},m.key))})}function ab(r){const o=Object.entries(r||{});return o.sort((f,c)=>{const m=parseInt(String(f[0]).split("_").pop(),10)||0,p=parseInt(String(c[0]).split("_").pop(),10)||0;return m-p}),o.map(([,f])=>f)}function Pc(r){const o={};return r.forEach((f,c)=>{o[`title_${c+1}`]=f}),o}function lb({value:r,onChange:o}){const f=ab(r);function c(h,j){const y=[...f];y[h]=j,o(Pc(y))}function m(h){o(Pc(f.filter((j,y)=>y!==h)))}function p(){o(Pc([...f,""]))}return s.jsxs("div",{className:"md-title-list",children:[f.map((h,j)=>s.jsxs("div",{className:"md-title-row",children:[s.jsx(We,{id:`title_text_${j}`,label:"Title text",value:h,onChange:y=>c(j,y)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(j),"aria-label":"Remove title",children:"✕"})]},`title-${j}`)),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:p,children:"+ Add title"})]})}function mp({value:r,onChange:o,keyLabel:f="Key",valueLabel:c="Value",valueOptional:m,stacked:p}){const h=Object.entries(r||{});function j(w,_,O){const Q={...r||{}};delete Q[w],_.trim()&&(Q[_.trim()]=O),o(Q)}function y(w,_){o({...r||{},[w]:_})}function g(w){const _={...r||{}};delete _[w],o(_)}function N(){const w=f.toLowerCase().replace(/\s+/g,"_");let _=h.length+1,O=`${w}_${_}`;for(;(r||{})[O];)_+=1,O=`${w}_${_}`;o({...r||{},[O]:""})}return s.jsxs("div",{className:"md-kv-list",children:[h.map(([w,_])=>s.jsx("div",{className:`md-kv-row ${p?"md-kv-row-stacked":""}`,children:p?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"md-kv-stacked-fields",children:[s.jsx(We,{label:f,value:w,onChange:O=>j(w,O,_)}),s.jsx(We,{label:c,value:_,onChange:O=>y(w,O),multiline:!0,rows:2})]}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>g(w),"aria-label":"Remove",children:"✕"})]}):s.jsxs(s.Fragment,{children:[s.jsx(We,{label:f,value:w,onChange:O=>j(w,O,_)}),!m&&s.jsx(We,{label:c,value:_,onChange:O=>y(w,O),multiline:String(_).length>60,rows:2}),m&&s.jsx(We,{label:c,value:_,onChange:O=>y(w,O),hint:"Optional"}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>g(w),"aria-label":"Remove",children:"✕"})]})},w)),s.jsxs("button",{type:"button",className:"md-text-btn",onClick:N,children:["+ Add ",f.toLowerCase()]})]})}function pp({value:r,onChange:o,fields:f,singular:c,sectionKey:m}){const p=Object.entries(r||{}),h=c||m.replace(/s$/,"");function j(g){const N={...r||{}};delete N[g],o(N)}function y(){const g=Object.keys(r||{}).map(O=>parseInt(O.split("_").pop(),10)).filter(O=>!Number.isNaN(O)),N=g.length?Math.max(...g)+1:1,w=`${h}_${N}`,_=f.reduce((O,Q)=>({...O,[Q.key]:""}),{});o({...r||{},[w]:_})}return s.jsxs("div",{className:"md-entity-list",children:[p.map(([g,N])=>s.jsxs("article",{className:"md-card",children:[s.jsxs("header",{className:"md-card-header",children:[s.jsx("h3",{children:N.name||N.degree||N.company||N.position||al(g)}),s.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>j(g),"aria-label":"Remove entry",children:"✕"})]}),s.jsx(dp,{fields:f,value:N,onChange:w=>o({...r||{},[g]:w})})]},g)),s.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:y,children:["+ Add ",al(c||m)]})]})}function nb({sectionKey:r,value:o,onChange:f}){const c=tb(o);if(c==="text")return s.jsx(We,{label:al(r),value:typeof o=="string"?o:JSON.stringify(o,null,2),onChange:f,multiline:!0,rows:8});if(c==="keyValue")return s.jsx(mp,{value:yr(o)?o:{},onChange:f,keyLabel:"Item",valueLabel:"Value"});if(c==="entities"){const m=Object.values(o||{}).find(yr)||{},p=Object.keys(m).map(h=>({key:h,label:al(h),multiline:h==="description"||String(m[h]).length>80,rows:4}));return s.jsx(pp,{sectionKey:r,value:o,onChange:f,fields:p.length?p:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:r.replace(/s$/,"")})}return s.jsx(We,{label:al(r),value:JSON.stringify(o,null,2),onChange:()=>{},multiline:!0,rows:10})}function ib({sectionKey:r,value:o,onChange:f}){const c=eb(r);return c.type==="text"?s.jsx(We,{label:c.label||al(r),value:typeof o=="string"?o:"",onChange:f,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):c.type==="object"?s.jsx(dp,{fields:c.fields,value:o,onChange:f}):c.type==="titles"?s.jsx(lb,{value:o,onChange:f}):c.type==="keyValue"?s.jsx(mp,{value:o||{},onChange:f,keyLabel:c.keyLabel,valueLabel:c.valueLabel,valueOptional:c.valueOptional,stacked:c.stacked}):c.type==="entities"?s.jsx(pp,{sectionKey:r,value:o,onChange:f,fields:c.fields,singular:c.singular}):s.jsx(nb,{sectionKey:r,value:o,onChange:f})}const xr=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],rb={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function dr(r){return rb[r]||al(r)}const Hm=new Set(xr);function ub(r){const o=xr.filter(c=>r.includes(c)),f=r.filter(c=>!xr.includes(c)).sort();return[...o,...f]}function cb(){const{showToast:r}=Zn(),[o,f]=b.useState(null),[c,m]=b.useState("contact"),[p,h]=b.useState([]),[j,y]=b.useState(!0),[g,N]=b.useState(!1),w=b.useCallback(async()=>{y(!0);try{const G=(await Ae.getProfile()).profile||{};f(G),h(Object.keys(G).filter($=>!Hm.has($)))}catch(q){r(q.message,"error")}finally{y(!1)}},[r]);b.useEffect(()=>{w()},[w]);const _=b.useMemo(()=>{const q=o?Object.keys(o):[];return ub([...new Set([...xr,...q,...p])]).filter($=>o&&$ in o)},[o,p]);function O(q,G){f($=>({...$,[q]:G}))}function Q(){const q=window.prompt("New section name (e.g. Publications):");if(!q)return;const G=q.trim().toLowerCase().replace(/\s+/g,"_");G&&(h($=>$.includes(G)?$:[...$,G]),f($=>({...$,[G]:$[G]||{}})),m(G))}function V(){window.confirm(`Delete section "${dr(c)}"?`)&&(f(q=>{const G={...q};return delete G[c],G}),h(q=>q.filter(G=>G!==c)),m("contact"))}async function Y(){N(!0);try{await Ae.saveProfile(o),r("Profile saved")}catch(q){r(q.message,"error")}finally{N(!1)}}if(j||!o)return s.jsx("div",{className:"profile-page",children:s.jsx(sp,{label:"Loading profile…"})});const X=!Hm.has(c);return s.jsx("div",{className:"profile-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:dr(c)}),s.jsxs("p",{className:"page-lead",children:["Edit your ",dr(c).toLowerCase()," details for tailored applications."]})]}),X&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:V,children:"Delete section"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(ib,{sectionKey:c,value:o[c],onChange:q=>O(c,q)})})]})}),s.jsxs("aside",{className:"profile-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[s.jsx("p",{className:"profile-nav-label",children:"Sections"}),s.jsx("ul",{children:_.map(q=>s.jsx("li",{children:s.jsx("button",{type:"button",className:`profile-nav-item ${c===q?"active":""}`,onClick:()=>m(q),children:dr(q)})},q))})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:Y,disabled:g,children:g?"Saving…":"Save profile"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:Q,children:"+ Section"})]})]})]})})}const eo={company:"",title:"",location:"",url:"",about:"",description:""};function ob(r){const o=r.split(`
`).map(c=>c.trim()).filter(Boolean),f=r.match(/https?:\/\/[^\s]+/i);return{url:f?f[0]:"",title:o[0]||"",description:r,about:o.slice(0,3).join(" ")}}function sb(r){return r?r.split("_").slice(0,-2).join(" ").replace(/\b\w/g,f=>f.toUpperCase()):""}function fb({draft:r,onChange:o}){return s.jsxs(s.Fragment,{children:[s.jsxs(fp,{children:[s.jsx(We,{id:"job_company",label:"Company",value:r.company,onChange:f=>o({...r,company:f})}),s.jsx(We,{id:"job_title",label:"Job title",value:r.title,onChange:f=>o({...r,title:f})}),s.jsx(We,{id:"job_location",label:"Location",value:r.location,onChange:f=>o({...r,location:f})}),s.jsx(We,{id:"job_url",label:"Job URL",value:r.url,onChange:f=>o({...r,url:f})})]}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx(We,{id:"job_about",label:"About",value:r.about,onChange:f=>o({...r,about:f}),multiline:!0,rows:4,hint:"Company or role overview."})}),s.jsx("div",{className:"md-field-span-wrap",children:s.jsx(We,{id:"job_description",label:"Description",value:r.description,onChange:f=>o({...r,description:f}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function db(){const{showToast:r}=Zn(),[o,f]=b.useState([]),[c,m]=b.useState(null),[p,h]=b.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[j,y]=b.useState(""),[g,N]=b.useState(eo),[w,_]=b.useState(!1),[O,Q]=b.useState(!1),V=b.useRef(null),Y=b.useCallback(async()=>{try{const U=await Ae.listJobs();f(U.applications||[])}catch(U){r(U.message,"error")}},[r]);b.useEffect(()=>{Y()},[Y]),b.useEffect(()=>{V.current?.scrollIntoView({behavior:"smooth"})},[p]);async function X(U){m(U),_(!0);try{const L=await Ae.getJob(U);N({company:sb(U),title:L.title||"",location:L.location||"",url:L.url||"",about:L.about||"",description:L.description||""})}catch(L){r(L.message,"error")}}async function q(){const U=j.trim();if(!(!U||O)){h(L=>[...L,{role:"user",content:U}]),y(""),Q(!0);try{if(/^https?:\/\//i.test(U)||U.includes("linkedin.com")||U.includes("jobs.")){const ae=await Ae.scrapeUrl(U);N(fe=>({...fe,url:ae.url,title:fe.title||ae.title||"",about:ae.about||fe.about,description:ae.description||fe.description})),h(fe=>[...fe,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),_(!0)}else{const ae=ob(U);N(fe=>({...fe,...ae,description:U})),h(fe=>[...fe,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),_(!0)}}catch(L){h(ae=>[...ae,{role:"assistant",content:`Error: ${L.message}`}])}finally{Q(!1)}}}async function G(){if(!g.company.trim()||!g.title.trim()){r("Company and title are required","error");return}Q(!0);try{if(c)await Ae.updateJob(c,g),r("Job updated");else{const U=await Ae.createJob(g);m(U.slug),r("Job saved")}await Y(),_(!0)}catch(U){r(U.message,"error")}finally{Q(!1)}}async function $(){if(!(!c||!window.confirm("Delete this job?")))try{await Ae.deleteJob(c),m(null),N(eo),_(!1),await Y(),r("Job deleted")}catch(U){r(U.message,"error")}}function Z(){m(null),N(eo),_(!0)}return s.jsx("div",{className:"profile-page jobs-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main jobs-main",children:s.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[w?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:c?"Edit job":"New job"}),s.jsx("p",{className:"page-lead",children:c?"Update role details before generating documents.":"Add a role to start tailoring your application."})]}),c&&s.jsx("button",{type:"button",className:"md-text-btn danger",onClick:$,children:"Delete job"})]}),s.jsx("div",{className:"profile-form-surface",children:s.jsx(fb,{draft:g,onChange:N})})]}):s.jsxs("div",{className:"jobs-welcome",children:[s.jsx("h1",{children:"Jobs"}),s.jsx("p",{className:"page-lead",children:"Paste a job URL or description in the chat below, or select a saved role from the sidebar."})]}),s.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[s.jsxs("div",{className:"jobs-chat-messages",children:[p.map((U,L)=>s.jsxs("div",{className:`jobs-chat-bubble ${U.role}`,children:[s.jsx("span",{className:"jobs-chat-label",children:U.role==="user"?"You":"Joblication"}),s.jsx("p",{children:U.content})]},L)),s.jsx("div",{ref:V})]}),s.jsxs("div",{className:"jobs-chat-composer",children:[s.jsx("div",{className:"jobs-chat-input-wrap",children:s.jsx(We,{id:"job_intake",label:"Paste URL or job description",value:j,onChange:y,multiline:!0,rows:3,onKeyDown:U=>{U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),q())}})}),s.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:q,disabled:O,children:O?"…":"Send"})]})]})]})}),s.jsxs("aside",{className:"profile-sidebar jobs-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[s.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),s.jsxs("ul",{children:[o.map(U=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${c===U.slug?"active":""}`,onClick:()=>X(U.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:U.title||U.slug}),U.location&&s.jsx("span",{className:"jobs-nav-meta",children:U.location})]})},U.slug)),!o.length&&s.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),s.jsxs("div",{className:"profile-sidebar-actions",children:[s.jsx("button",{type:"button",className:"md-filled-btn",onClick:G,disabled:O||!w,children:O?"Saving…":"Save job"}),s.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:Z,children:"+ New job"})]})]})]})})}const hp=[{value:"unsubmitted",label:"Unsubmitted"},{value:"submitted",label:"Submitted"},{value:"interview",label:"Interview"},{value:"accepted",label:"Accepted"},{value:"rejected",label:"Rejected"}];function mb(r){const o={all:r.length,unsubmitted:0,submitted:0,interview:0,accepted:0,rejected:0,withOutput:0};for(const f of r)o[f.status]!==void 0&&(o[f.status]+=1),f.has_output&&(o.withOutput+=1);return o}function pb({app:r,selectMode:o,selected:f,onToggleSelect:c,onUpdateStatus:m}){function p(){o&&c(r.slug)}return s.jsxs("article",{className:["application-card",o?"selectable":"",f?"is-selected":""].filter(Boolean).join(" "),onClick:o?p:void 0,onKeyDown:o?h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),c(r.slug))}:void 0,role:o?"button":void 0,tabIndex:o?0:void 0,children:[o&&s.jsx("div",{className:"application-card-check","aria-hidden":!o,children:s.jsx("input",{type:"checkbox",checked:f,onChange:()=>c(r.slug),onClick:h=>h.stopPropagation(),"aria-label":`Select ${r.title||r.slug}`})}),s.jsxs("div",{className:"application-card-inner",children:[s.jsxs("header",{className:"application-card-header",children:[s.jsx("h3",{children:r.title||r.slug}),s.jsx("p",{className:"application-card-slug",children:r.slug})]}),s.jsxs("div",{className:"application-card-meta",children:[s.jsx("span",{className:`output-badge ${r.has_output?"ready":"pending"}`,children:r.has_output?"Documents ready":"Awaiting generation"}),!o&&s.jsx("select",{value:r.status,onChange:h=>m(r.slug,h.target.value),className:`status-pill status-${r.status}`,"aria-label":"Application status",onClick:h=>h.stopPropagation(),children:hp.map(h=>s.jsx("option",{value:h.value,children:h.label},h.value))})]}),s.jsx("div",{className:"application-card-body",children:r.has_output?s.jsx("ul",{className:"application-files",children:r.files.map(h=>s.jsx("li",{children:s.jsxs("a",{href:Ae.fileUrl(r.output_folder,h),target:"_blank",rel:"noreferrer",className:"application-file-link",onClick:j=>j.stopPropagation(),children:[s.jsx(Yv,{}),s.jsx("span",{children:h.replace(/.*\//,"")}),s.jsx(qv,{})]})},h))}):s.jsx("p",{className:"application-hint",children:"Generate to create CV and cover letter for this role."})}),!o&&s.jsx("footer",{className:"application-card-footer",children:s.jsx(zr,{to:`/review?slug=${encodeURIComponent(r.slug)}`,className:"md-text-btn",onClick:h=>h.stopPropagation(),children:"Review & edit"})})]})]})}function hb(){const{showToast:r}=Zn(),[o,f]=b.useState([]),[c,m]=b.useState(!1),[p,h]=b.useState(null),[j,y]=b.useState(!0),[g,N]=b.useState("all"),[w,_]=b.useState(!1),[O,Q]=b.useState(()=>new Set),V=b.useCallback(async()=>{y(!0);try{const W=await Ae.listApplications();f(W.applications||[])}catch(W){r(W.message,"error")}finally{y(!1)}},[r]),Y=b.useCallback(async()=>{try{const W=await Ae.generateStatus();h(W),W.running?setTimeout(Y,2e3):(m(!1),W.error?r(W.error,"error"):W.step==="complete"&&(r("Generation complete"),V()))}catch{m(!1)}},[V,r]);b.useEffect(()=>{V()},[V]);const X=b.useMemo(()=>mb(o),[o]),q=b.useMemo(()=>g==="all"?o:g==="with_output"?o.filter(W=>W.has_output):o.filter(W=>W.status===g),[o,g]),G=O.size;function $(){_(!1),Q(new Set)}function Z(W){Q(ne=>{const ye=new Set(ne);return ye.has(W)?ye.delete(W):ye.add(W),ye})}async function U(W,ne){try{await Ae.updateJob(W,{status:ne}),f(ye=>ye.map(Re=>Re.slug===W?{...Re,status:ne}:Re))}catch(ye){r(ye.message,"error")}}async function L(){m(!0);try{await Ae.startGenerate(),Y()}catch(W){m(!1),r(W.message,"error")}}async function ae(){G&&(r(G===1?"Starting generation for 1 application":`Starting generation (${G} selected)`),await L())}async function fe(){if(!G)return;const W=G===1?"Delete this application?":`Delete ${G} applications?`;if(!window.confirm(W))return;const ne=[...O];let ye=0;for(const Re of ne)try{await Ae.deleteJob(Re)}catch{ye+=1}ye?r(`Deleted ${ne.length-ye} of ${ne.length}`,ye===ne.length?"error":"success"):r(G===1?"Application deleted":`${G} applications deleted`),$(),await V()}const ge=[{key:"all",label:"All applications",count:X.all},{key:"with_output",label:"Ready to review",count:X.withOutput},...hp.map(W=>({key:W.value,label:W.label,count:X[W.value]}))];return j?s.jsx("div",{className:"profile-page",children:s.jsx(sp,{label:"Loading applications…"})}):s.jsx("div",{className:"profile-page applications-page",children:s.jsxs("div",{className:"profile-layout",children:[s.jsx("main",{className:"profile-main",children:s.jsxs("div",{className:"profile-main-inner applications-main-inner",children:[s.jsxs("div",{className:"applications-page-header",children:[s.jsx("h1",{children:"Applications"}),s.jsx("p",{className:"page-lead",children:"Track generated documents and pipeline status for each role."})]}),o.length>0&&s.jsx("div",{className:`applications-toolbar ${w?"selecting":""}`,children:w?s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:$,children:"Cancel"}),s.jsx("span",{className:"applications-selection-count",children:G?`${G} selected`:"Select applications"}),s.jsx("div",{className:"applications-toolbar-spacer"}),s.jsxs("button",{type:"button",className:"md-filled-btn applications-toolbar-primary",onClick:ae,disabled:!G||c,children:[s.jsx(km,{}),c?"Generating…":`Generate${G?` (${G})`:""}`]}),s.jsxs("button",{type:"button",className:"md-outlined-btn applications-toolbar-danger",onClick:fe,disabled:!G,children:["Delete",G?` (${G})`:""]})]}):s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:()=>_(!0),children:"Select"}),s.jsx("div",{className:"applications-toolbar-spacer"}),s.jsxs("button",{type:"button",className:"md-filled-btn applications-toolbar-primary",onClick:L,disabled:c,children:[s.jsx(km,{}),c?`Generating… ${p?.step||""}`:"Generate all"]})]})}),c&&s.jsxs("div",{className:"generation-banner",children:[s.jsx("div",{className:"generation-banner-track",children:s.jsx("div",{className:"generation-banner-fill"})}),s.jsxs("p",{children:["Running pipeline",p?.step?` — ${p.step}`:"…"]})]}),o.length?q.length?s.jsx("div",{className:"applications-grid",children:q.map(W=>s.jsx(pb,{app:W,selectMode:w,selected:O.has(W.slug),onToggleSelect:Z,onUpdateStatus:U},W.slug))}):s.jsx(Lm,{icon:io,title:"No matches",description:"Try a different filter from the sidebar."}):s.jsx(Lm,{icon:io,title:"No applications yet",description:"Add jobs from the Jobs page, then generate tailored CVs and cover letters here.",action:s.jsx(zr,{to:"/jobs",className:"md-outlined-btn",children:"Go to Jobs"})})]})}),s.jsxs("aside",{className:"profile-sidebar applications-sidebar",children:[s.jsxs("nav",{className:"profile-nav","aria-label":"Filter applications",children:[s.jsx("p",{className:"profile-nav-label",children:"Filter"}),s.jsx("ul",{children:ge.map(W=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item filter-item ${g===W.key?"active":""}`,onClick:()=>N(W.key),children:[s.jsx("span",{className:"filter-label",children:W.label}),s.jsx("span",{className:"filter-count",children:W.count})]})},W.key))})]}),s.jsx("div",{className:"profile-sidebar-actions",children:s.jsxs("div",{className:"applications-stats",children:[s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:X.all}),s.jsx("span",{className:"stat-label",children:"Total"})]}),s.jsxs("div",{className:"stat-block",children:[s.jsx("span",{className:"stat-value",children:X.withOutput}),s.jsx("span",{className:"stat-label",children:"Generated"})]})]})})]})]})})}const gb=["nw","n","ne","e","se","s","sw","w"],vb={nw:"nwse-resize",n:"ns-resize",ne:"nesw-resize",e:"ew-resize",se:"nwse-resize",s:"ns-resize",sw:"nesw-resize",w:"ew-resize"};function Gl(r,o,f){return Math.min(f,Math.max(o,r))}function Bm(r){return Math.round(r*10)/10}function bb(r,o,f){const c=f||5,m=r*c/100;return{cellPx:m,stepX:c,stepY:m/o*100}}function yb(r,o,f){return{snapX:p=>f&&r>0?Math.round(p/r)*r:Bm(p),snapY:p=>f&&o>0?Math.round(p/o)*o:Bm(p)}}function xb(r,o,f,c){let{x:m,y:p,w:h,h:j}=o;const y=8,g=4;return r.includes("e")&&(h+=f),r.includes("w")&&(m+=f,h-=f),r.includes("s")&&(j+=c),r.includes("n")&&(p+=c,j-=c),h<y&&(r.includes("w")&&(m-=y-h),h=y),j<g&&(r.includes("n")&&(p-=g-j),j=g),m=Gl(m,0,100-y),p=Gl(p,0,100-g),h=Gl(h,y,100-m),j=Gl(j,g,100-p),{x:m,y:p,w:h,h:j}}function Sb({layout:r,sections:o,activeSection:f,onSelectSection:c,onUpdateSection:m}){const p=b.useRef(null),h=b.useRef(null),j=b.useRef(null),y=b.useRef(!1),g=r.pageWidth||595,N=r.pageHeight||842,w=r.zoom||1,_=bb(g,N,r.gridSize),O=r.snapToGrid,{snapX:Q,snapY:V}=yb(_.stepX,_.stepY,O),Y=[...o].sort((Z,U)=>(Z.zIndex??1)-(U.zIndex??1)),X=b.useCallback(()=>{const Z=j.current;if(Z?.mode==="pan"&&Z.scrollEl?.releasePointerCapture)try{Z.scrollEl.releasePointerCapture(Z.pointerId)}catch{}j.current=null,document.body.classList.remove("ps-dragging","ps-panning")},[]),q=b.useCallback(Z=>{const U=j.current;if(!U)return;if(U.mode==="pan"){const W=h.current;if(!W)return;const ne=Z.clientX-U.startX,ye=Z.clientY-U.startY;(Math.abs(ne)>2||Math.abs(ye)>2)&&(y.current=!0),W.scrollLeft=U.origScrollLeft-ne,W.scrollTop=U.origScrollTop-ye;return}const L=p.current;if(!L)return;const ae=L.getBoundingClientRect(),fe=(Z.clientX-U.startX)/ae.width*100,ge=(Z.clientY-U.startY)/ae.height*100;if(U.mode==="move"){const W=100-U.origW,ne=100-U.origH;m(U.id,{x:Q(Gl(U.origX+fe,0,W)),y:V(Gl(U.origY+ge,0,ne))})}else if(U.mode.startsWith("resize-")){const W=U.mode.slice(7),ne=xb(W,{x:U.origX,y:U.origY,w:U.origW,h:U.origH},fe,ge);m(U.id,{x:Q(ne.x),y:V(ne.y),w:Q(ne.w),h:V(ne.h)})}},[m,Q,V]);b.useEffect(()=>(window.addEventListener("pointermove",q),window.addEventListener("pointerup",X),window.addEventListener("pointercancel",X),()=>{window.removeEventListener("pointermove",q),window.removeEventListener("pointerup",X),window.removeEventListener("pointercancel",X)}),[q,X]);function G(Z){if(Z.button!==0||Z.target.closest(".ps-layer")||Z.target.closest(".ps-handle"))return;const U=h.current;U&&(Z.preventDefault(),y.current=!1,U.setPointerCapture?.(Z.pointerId),j.current={mode:"pan",startX:Z.clientX,startY:Z.clientY,origScrollLeft:U.scrollLeft,origScrollTop:U.scrollTop,pointerId:Z.pointerId,scrollEl:U},document.body.classList.add("ps-panning"))}function $(Z,U,L){U.locked||(Z.stopPropagation(),Z.preventDefault(),j.current={id:U.id,mode:L,startX:Z.clientX,startY:Z.clientY,origX:U.x,origY:U.y,origW:U.w,origH:U.h},document.body.classList.add("ps-dragging"),c(U.id))}return s.jsxs("div",{className:"ps-workspace",children:[s.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(Z,U)=>s.jsx("span",{style:{left:`${U/11*100}%`},children:Math.round(g/11*U)},U))}),s.jsx("div",{className:"ps-canvas-scroll",ref:h,onPointerDown:G,children:s.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${w})`,transformOrigin:"top center"},children:s.jsxs("div",{ref:p,className:"ps-canvas",style:{width:g,minHeight:N,padding:r.pagePadding,fontSize:`${r.fontSize}px`,lineHeight:r.lineHeight,fontFamily:r.fontFamily||"Georgia, serif",backgroundColor:r.pageBackground||"#ffffff"},onClick:()=>{if(y.current){y.current=!1;return}c(null)},onKeyDown:()=>{},role:"presentation",children:[r.showGrid&&s.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${_.cellPx}px ${_.cellPx}px`}}),Y.filter(Z=>Z.visible!==!1).map(Z=>{const U=f===Z.id;return s.jsxs("div",{className:`ps-layer ${U?"selected":""} ${Z.locked?"locked":""}`,style:{left:`${Z.x}%`,top:`${Z.y}%`,width:`${Z.w}%`,height:`${Z.h}%`,zIndex:Z.zIndex??1,opacity:Z.opacity??1,fontSize:Z.fontSize?`${Z.fontSize}px`:void 0,textAlign:Z.textAlign||"left",padding:Z.padding??8,backgroundColor:Z.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:L=>{L.stopPropagation(),c(Z.id)},onPointerDown:L=>{L.target.closest(".ps-handle")||$(L,Z,"move")},onKeyDown:()=>{},role:"button",tabIndex:0,children:[s.jsx("span",{className:"ps-layer-label",children:Z.label}),s.jsx("p",{className:"ps-layer-preview",children:"Section content"}),U&&!Z.locked&&s.jsx(s.Fragment,{children:gb.map(L=>s.jsx("span",{className:`ps-handle ps-handle-${L}`,style:{cursor:vb[L]},onPointerDown:ae=>$(ae,Z,`resize-${L}`)},L))})]},Z.id)})]})})})]})}function gp(){return s.jsxs("svg",{className:"ps-layer-grip-icon",viewBox:"0 0 10 16",fill:"currentColor","aria-hidden":"true",children:[s.jsx("circle",{cx:"2.5",cy:"2.5",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"2.5",r:"1.1"}),s.jsx("circle",{cx:"2.5",cy:"8",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"8",r:"1.1"}),s.jsx("circle",{cx:"2.5",cy:"13.5",r:"1.1"}),s.jsx("circle",{cx:"7.5",cy:"13.5",r:"1.1"})]})}function jb({layer:r,activeId:o,onSelect:f,onToggleVisible:c,isGhost:m}){return s.jsxs(s.Fragment,{children:[s.jsx("span",{className:`ps-layer-grip ${m?"ghost":""}`,"aria-hidden":m,children:s.jsx(gp,{})}),s.jsxs("button",{type:"button",className:`ps-layer-item ${o===r.id?"active":""}`,onClick:m?void 0:()=>f(r.id),tabIndex:m?-1:0,children:[s.jsx("span",{className:`ps-eye ${r.visible!==!1?"on":"off"}`,onClick:m?void 0:p=>{p.stopPropagation(),c(r.id,r.visible!==!1)},onKeyDown:()=>{},role:"button",tabIndex:m?-1:0,title:r.visible!==!1?"Hide layer":"Show layer"}),s.jsx("span",{className:"ps-layer-name",children:r.label}),r.locked&&s.jsx("span",{className:"ps-lock-badge",children:"L"})]})]})}function Ym(r,o,f,c){const m=f.filter(p=>p.id!==o);for(let p=0;p<m.length;p++){const h=c.current[m[p].id];if(!h)continue;const j=h.getBoundingClientRect();if(r<j.top+j.height/2)return p}return m.length}function Eb({layers:r,activeId:o,onSelect:f,onReorder:c,onToggleVisible:m}){const[p,h]=b.useState(null),j=b.useRef(null),y=b.useRef({}),g=b.useRef(0),N=b.useRef(0),w=b.useRef(null),_=b.useCallback(()=>{const X=w.current,q=N.current;X!=null&&g.current!==q&&c(X,g.current),w.current=null,g.current=0,N.current=0,h(null),document.body.classList.remove("ps-layer-sorting")},[c]);b.useEffect(()=>{if(!p)return;const X=q=>{const G=Ym(q.clientY,p.id,r,y);g.current=G,h($=>!$||$.insertAt===G&&$.ghostY===q.clientY-$.offsetY?$:{...$,insertAt:G,ghostY:q.clientY-$.offsetY})};return window.addEventListener("pointermove",X),window.addEventListener("pointerup",_),window.addEventListener("pointercancel",_),()=>{window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",_)}},[p,r,_]);function O(X,q){X.preventDefault(),X.stopPropagation();const G=X.currentTarget.closest(".ps-layer-row"),$=j.current;if(!G||!$)return;const Z=G.getBoundingClientRect(),U=$.getBoundingClientRect(),L=Ym(X.clientY,q.id,r,y);X.currentTarget.setPointerCapture(X.pointerId),w.current=q.id,g.current=L,N.current=L,document.body.classList.add("ps-layer-sorting"),h({id:q.id,layer:q,offsetY:X.clientY-Z.top,width:U.width-8,height:Z.height,ghostX:U.left+4,ghostY:Z.top,insertAt:L,pointerId:X.pointerId})}const Q=p?r.find(X=>X.id===p.id):null,V=p?r.filter(X=>X.id!==p.id):r,Y=[];for(let X=0;X<=V.length;X++)if(p&&p.insertAt===X&&Y.push(s.jsx("li",{className:"ps-layer-placeholder",style:{height:p.height},"aria-hidden":!0},"placeholder")),X<V.length){const q=V[X];Y.push(s.jsxs("li",{ref:G=>{y.current[q.id]=G},"data-layer-id":q.id,className:["ps-layer-row",p?"ps-layer-row-shifting":""].filter(Boolean).join(" "),children:[s.jsx("button",{type:"button",className:"ps-layer-grip","aria-label":`Reorder ${q.label}`,onPointerDown:G=>O(G,q),children:s.jsx(gp,{})}),s.jsxs("button",{type:"button",className:`ps-layer-item ${o===q.id?"active":""}`,onClick:()=>f(q.id),children:[s.jsx("span",{className:`ps-eye ${q.visible!==!1?"on":"off"}`,onClick:G=>{G.stopPropagation(),m(q.id,q.visible!==!1)},onKeyDown:()=>{},role:"button",tabIndex:0,title:q.visible!==!1?"Hide layer":"Show layer"}),s.jsx("span",{className:"ps-layer-name",children:q.label}),q.locked&&s.jsx("span",{className:"ps-lock-badge",children:"L"})]})]},q.id))}return s.jsxs(s.Fragment,{children:[s.jsx("ul",{ref:j,className:`ps-layer-list ${p?"is-sorting":""}`,children:Y}),p&&Q&&s.jsx("div",{className:"ps-layer-ghost",style:{left:p.ghostX,top:p.ghostY,width:p.width,minHeight:p.height},"aria-hidden":!0,children:s.jsx(jb,{layer:Q,activeId:o,onSelect:f,onToggleVisible:m,isGhost:!0})})]})}const gr=[{label:"Georgia",value:"Georgia, serif",group:"Serif"},{label:"Times New Roman",value:"'Times New Roman', Times, serif",group:"Serif"},{label:"Garamond",value:"Garamond, 'Times New Roman', serif",group:"Serif"},{label:"Palatino",value:"'Palatino Linotype', Palatino, serif",group:"Serif"},{label:"Merriweather",value:"'Merriweather', Georgia, serif",group:"Serif",google:"Merriweather"},{label:"Lora",value:"'Lora', Georgia, serif",group:"Serif",google:"Lora"},{label:"Libre Baskerville",value:"'Libre Baskerville', Georgia, serif",group:"Serif",google:"Libre Baskerville"},{label:"Source Serif 4",value:"'Source Serif 4', Georgia, serif",group:"Serif",google:"Source Serif 4"},{label:"Crimson Text",value:"'Crimson Text', Georgia, serif",group:"Serif",google:"Crimson Text"},{label:"Arial",value:"Arial, Helvetica, sans-serif",group:"Sans-serif"},{label:"Helvetica",value:"Helvetica, Arial, sans-serif",group:"Sans-serif"},{label:"Calibri",value:"Calibri, 'Segoe UI', sans-serif",group:"Sans-serif"},{label:"Verdana",value:"Verdana, Geneva, sans-serif",group:"Sans-serif"},{label:"Tahoma",value:"Tahoma, Geneva, sans-serif",group:"Sans-serif"},{label:"Open Sans",value:"'Open Sans', Arial, sans-serif",group:"Sans-serif",google:"Open Sans"},{label:"Roboto",value:"'Roboto', Arial, sans-serif",group:"Sans-serif",google:"Roboto"},{label:"Lato",value:"'Lato', Arial, sans-serif",group:"Sans-serif",google:"Lato"},{label:"Inter",value:"'Inter', Arial, sans-serif",group:"Sans-serif",google:"Inter"},{label:"Montserrat",value:"'Montserrat', Arial, sans-serif",group:"Sans-serif",google:"Montserrat"},{label:"Source Sans 3",value:"'Source Sans 3', Arial, sans-serif",group:"Sans-serif",google:"Source Sans 3"},{label:"Poppins",value:"'Poppins', Arial, sans-serif",group:"Sans-serif",google:"Poppins"},{label:"Courier New",value:"'Courier New', Courier, monospace",group:"Monospace"},{label:"Consolas",value:"Consolas, 'Courier New', monospace",group:"Monospace"}],wb=[...new Set(gr.filter(r=>r.google).map(r=>r.google))];let to=!1;function zb(){if(to||typeof document>"u")return;const r="joblication-template-fonts";if(document.getElementById(r)){to=!0;return}const o=wb.map(c=>`family=${c.replace(/ /g,"+")}:wght@400;600`).join("&"),f=document.createElement("link");f.id=r,f.rel="stylesheet",f.href=`https://fonts.googleapis.com/css2?${o}&display=swap`,document.head.appendChild(f),to=!0}function Nb({value:r,onChange:o}){const f=b.useRef(null),c=b.useRef(null);b.useEffect(()=>{zb()},[]);const m=b.useMemo(()=>{const h=r?.trim();return!h||gr.some(j=>j.value===h)?gr:[{label:"Custom",value:h,group:"Custom"},...gr]},[r]),p=b.useMemo(()=>{const h=new Map;for(const j of m)h.has(j.group)||h.set(j.group,[]),h.get(j.group).push(j);return[...h.entries()]},[m]);return b.useEffect(()=>{c.current?.scrollIntoView({block:"nearest"})},[r]),s.jsx("div",{className:"ps-font-picker",children:s.jsx("div",{className:"ps-font-picker-list",ref:f,role:"listbox","aria-label":"Font family",children:p.map(([h,j])=>s.jsxs("div",{className:"ps-font-picker-group",children:[s.jsx("p",{className:"ps-font-picker-group-label",children:h}),j.map(y=>{const g=r===y.value;return s.jsxs("button",{type:"button",ref:g?c:null,role:"option","aria-selected":g,className:`ps-font-option ${g?"active":""}`,style:{fontFamily:y.value},onClick:()=>o(y.value),children:[s.jsx("span",{className:"ps-font-option-name",children:y.label}),s.jsx("span",{className:"ps-font-option-sample",children:"The quick brown fox"})]},y.value)})]},h))})})}const ql={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function qm(r){if(!r)return{...ql,sections:ql.sections.map(f=>({...f}))};const o=(r.sections||ql.sections).map(f=>({...ql.sections[0],...f}));return{...ql,...r,sections:o}}function $e({label:r,children:o}){return s.jsxs("div",{className:"ps-prop-row",children:[s.jsx("label",{children:r}),o]})}function Qt({value:r,onChange:o,min:f,max:c,step:m=1,unit:p="%"}){return s.jsxs("div",{className:"ps-range-field",children:[s.jsx("input",{type:"range",min:f,max:c,step:m,value:r,onChange:h=>o(Number(h.target.value))}),s.jsx("input",{type:"number",className:"ps-num-input",min:f,max:c,step:m,value:r,onChange:h=>o(Number(h.target.value))}),s.jsx("span",{className:"ps-unit",children:p})]})}function Tb(){const{showToast:r}=Zn(),[o,f]=b.useState({}),[c,m]=b.useState({}),[p,h]=b.useState(""),[j,y]=b.useState(""),[g,N]=b.useState("cv"),[w,_]=b.useState(""),[O,Q]=b.useState(()=>qm(null)),[V,Y]=b.useState("contact"),[X,q]=b.useState("layer"),[G,$]=b.useState(!1),Z=b.useMemo(()=>({...o,...c}),[o,c]),U=O.sections||[],L=U.find(x=>x.id===V),ae=b.useCallback(async()=>{try{const x=await Ae.listTemplates();f(x.catalog||{}),m(x.custom||{});const J=Object.keys({...x.catalog||{},...x.custom||{}});J.length&&!p&&h(J[0])}catch(x){r(x.message,"error")}},[p,r]),fe=b.useCallback(async x=>{if(x)try{const J=await Ae.getTemplate(x);y(J.name||x),N(J.category||"cv"),_(J.source||"");const ue=qm(J.layout);Q(ue),ue.sections?.length&&Y(ue.sections[0].id)}catch(J){r(J.message,"error")}},[r]);b.useEffect(()=>{ae()},[ae]),b.useEffect(()=>{p&&fe(p)},[p,fe]);const ge=b.useCallback((x,J)=>{Q(ue=>({...ue,sections:ue.sections.map(se=>se.id===x?{...se,...J}:se)}))},[]);function W(){const x=window.prompt("Layer name:");if(!x)return;const J=x.toLowerCase().replace(/\s+/g,"_"),ue=Math.max(0,...U.map(se=>se.zIndex??1));Q(se=>({...se,sections:[...se.sections,{id:J,label:x,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:ue+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),Y(J)}function ne(){!L||!window.confirm(`Delete layer "${L.label}"?`)||(Q(x=>({...x,sections:x.sections.filter(J=>J.id!==V)})),Y(U[0]?.id||""))}const ye=b.useCallback((x,J)=>{Q(ue=>{const se=[...ue.sections].sort((le,be)=>(be.zIndex??1)-(le.zIndex??1)),E=se.findIndex(le=>le.id===x);if(E<0)return ue;const B=se[E],K=se.filter(le=>le.id!==x),I=Math.max(0,Math.min(J,K.length));K.splice(I,0,B);const ie=K.map((le,be)=>({...le,zIndex:K.length-be}));return{...ue,sections:ie}})},[]);async function Re(){$(!0);try{await Ae.saveTemplate(p,{name:j,category:g,source:w,layout:O}),r("Template saved"),await ae()}catch(x){r(x.message,"error")}finally{$(!1)}}async function Me(){const x=window.prompt("Template id (e.g. my_cv):");if(x){$(!0);try{await Ae.createTemplate({id:x,name:x,category:"cv",source:`<!-- Custom template -->
`,layout:ql}),h(x),await ae(),r("Template created")}catch(J){r(J.message,"error")}finally{$(!1)}}}const M=[...U].sort((x,J)=>(J.zIndex??1)-(x.zIndex??1));return s.jsxs("div",{className:"ps-editor",children:[s.jsxs("header",{className:"ps-toolbar",children:[s.jsxs("div",{className:"ps-toolbar-left",children:[s.jsx("select",{value:p,onChange:x=>h(x.target.value),className:"ps-select",children:Object.entries(Z).map(([x,J])=>s.jsx("option",{value:x,children:J.name||x},x))}),s.jsx("button",{type:"button",className:"ps-tool-btn",onClick:Me,children:"New"}),s.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:Re,disabled:G,children:G?"Saving…":"Save"})]}),s.jsx("div",{className:"ps-toolbar-center",children:s.jsx("span",{className:"ps-doc-name",children:j||"Untitled"})}),s.jsxs("div",{className:"ps-toolbar-right",children:[s.jsxs("label",{className:"ps-zoom-label",children:["Zoom",s.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:O.zoom||.85,onChange:x=>Q({...O,zoom:Number(x.target.value)})}),s.jsxs("span",{children:[Math.round((O.zoom||.85)*100),"%"]})]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:O.snapToGrid,onChange:x=>Q({...O,snapToGrid:x.target.checked})}),"Snap"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:O.showGrid,onChange:x=>Q({...O,showGrid:x.target.checked})}),"Grid"]})]})]}),s.jsxs("div",{className:"ps-body",children:[s.jsxs("aside",{className:"ps-panel ps-layers",children:[s.jsxs("div",{className:"ps-panel-head",children:[s.jsx("h3",{children:"Layers"}),s.jsx("button",{type:"button",className:"ps-icon-btn",onClick:W,title:"Add layer",children:"+"})]}),s.jsx(Eb,{layers:M,activeId:V,onSelect:Y,onReorder:ye,onToggleVisible:(x,J)=>ge(x,{visible:!J})})]}),s.jsx(Sb,{layout:O,sections:U,activeSection:V,onSelectSection:Y,onUpdateSection:ge}),s.jsxs("aside",{className:"ps-panel ps-properties",children:[s.jsxs("div",{className:"ps-tabs",children:[s.jsx("button",{type:"button",className:X==="document"?"active":"",onClick:()=>q("document"),children:"Document"}),s.jsx("button",{type:"button",className:X==="layer"?"active":"",onClick:()=>q("layer"),children:"Layer"}),s.jsx("button",{type:"button",className:X==="source"?"active":"",onClick:()=>q("source"),children:"Source"})]}),X==="document"&&s.jsxs("div",{className:"ps-props",children:[s.jsx(We,{label:"Template name",value:j,onChange:y}),s.jsx($e,{label:"Category",children:s.jsxs("select",{value:g,onChange:x=>N(x.target.value),className:"ps-select full",children:[s.jsx("option",{value:"cv",children:"CV"}),s.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),s.jsx($e,{label:"Page width (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:O.pageWidth,onChange:x=>Q({...O,pageWidth:Number(x.target.value)})})}),s.jsx($e,{label:"Page height (px)",children:s.jsx("input",{type:"number",className:"ps-num-input full",value:O.pageHeight,onChange:x=>Q({...O,pageHeight:Number(x.target.value)})})}),s.jsx($e,{label:"Padding (px)",children:s.jsx(Qt,{value:O.pagePadding,onChange:x=>Q({...O,pagePadding:x}),min:0,max:120,unit:"px"})}),s.jsx($e,{label:"Background",children:s.jsx("input",{type:"color",className:"ps-color-input",value:O.pageBackground||"#ffffff",onChange:x=>Q({...O,pageBackground:x.target.value})})}),s.jsx($e,{label:"Base font size",children:s.jsx(Qt,{value:O.fontSize,onChange:x=>Q({...O,fontSize:x}),min:8,max:18,unit:"px"})}),s.jsx($e,{label:"Line height",children:s.jsx(Qt,{value:O.lineHeight,onChange:x=>Q({...O,lineHeight:x}),min:1,max:2,step:.05,unit:""})}),s.jsx($e,{label:"Font family",children:s.jsx(Nb,{value:O.fontFamily||"Georgia, serif",onChange:x=>Q({...O,fontFamily:x})})}),s.jsx($e,{label:"Grid size",children:s.jsx(Qt,{value:O.gridSize||5,onChange:x=>Q({...O,gridSize:x}),min:1,max:20,unit:"%"})})]}),X==="layer"&&L&&s.jsxs("div",{className:"ps-props",children:[s.jsx("h4",{className:"ps-layer-title",children:L.label}),s.jsx($e,{label:"X position",children:s.jsx(Qt,{value:L.x,onChange:x=>ge(L.id,{x}),min:0,max:95})}),s.jsx($e,{label:"Y position",children:s.jsx(Qt,{value:L.y,onChange:x=>ge(L.id,{y:x}),min:0,max:95})}),s.jsx($e,{label:"Width",children:s.jsx(Qt,{value:L.w,onChange:x=>ge(L.id,{w:x}),min:8,max:100})}),s.jsx($e,{label:"Height",children:s.jsx(Qt,{value:L.h,onChange:x=>ge(L.id,{h:x}),min:4,max:80})}),s.jsx($e,{label:"Opacity",children:s.jsx(Qt,{value:Math.round((L.opacity??1)*100),onChange:x=>ge(L.id,{opacity:x/100}),min:10,max:100,unit:"%"})}),s.jsx($e,{label:"Layer padding",children:s.jsx(Qt,{value:L.padding??8,onChange:x=>ge(L.id,{padding:x}),min:0,max:32,unit:"px"})}),s.jsx($e,{label:"Text align",children:s.jsxs("select",{className:"ps-select full",value:L.textAlign||"left",onChange:x=>ge(L.id,{textAlign:x.target.value}),children:[s.jsx("option",{value:"left",children:"Left"}),s.jsx("option",{value:"center",children:"Center"}),s.jsx("option",{value:"right",children:"Right"}),s.jsx("option",{value:"justify",children:"Justify"})]})}),s.jsx($e,{label:"Fill color",children:s.jsx("input",{type:"color",className:"ps-color-input",value:L.bgColor?.startsWith("#")?L.bgColor:"#e8f0fe",onChange:x=>ge(L.id,{bgColor:x.target.value})})}),s.jsx($e,{label:"Font size override",children:s.jsx("input",{type:"number",className:"ps-num-input full",placeholder:"Inherit",value:L.fontSize??"",onChange:x=>ge(L.id,{fontSize:x.target.value?Number(x.target.value):void 0})})}),s.jsxs("div",{className:"ps-check-group",children:[s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:L.visible!==!1,onChange:x=>ge(L.id,{visible:x.target.checked})}),"Visible"]}),s.jsxs("label",{className:"ps-check-inline",children:[s.jsx("input",{type:"checkbox",checked:!!L.locked,onChange:x=>ge(L.id,{locked:x.target.checked})}),"Lock"]})]}),s.jsx("button",{type:"button",className:"ps-danger-btn",onClick:ne,children:"Delete layer"})]}),X==="layer"&&!L&&s.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),X==="source"&&s.jsx("textarea",{className:"ps-source-editor",value:w,onChange:x=>_(x.target.value)})]})]})]})}function mr(r,o){return(r||[]).find(f=>f.toLowerCase().includes(o))}function Cb(){const{showToast:r}=Zn(),[o,f]=Tv(),[c,m]=b.useState([]),[p,h]=b.useState(o.get("slug")||""),[j,y]=b.useState(null),[g,N]=b.useState(""),[w,_]=b.useState(""),[O,Q]=b.useState("preview"),[V,Y]=b.useState("cv"),[X,q]=b.useState("html"),[G,$]=b.useState(!1),Z=b.useCallback(async()=>{try{const x=await Ae.listApplications();m(x.applications||[]),!p&&x.applications?.length&&h(x.applications[0].slug)}catch(x){r(x.message,"error")}},[r,p]),U=b.useCallback(async()=>{if(p)try{const x=await Ae.getReview(p);y(x),N(JSON.stringify(x.stage_2||{},null,2)),_(JSON.stringify(x.stage_3||{},null,2))}catch(x){r(x.message,"error")}},[p,r]);b.useEffect(()=>{Z()},[Z]),b.useEffect(()=>{p&&(f({slug:p}),U())},[p,U,f]);const L=j?.output_folder||c.find(x=>x.slug===p)?.output_folder,ae=j?.files?.length?j.files:c.find(x=>x.slug===p)?.files||[],fe=mr(ae,"_cv.html"),ge=mr(ae,"_cv.pdf"),W=mr(ae,"_cover_letter.html"),ne=mr(ae,"_cover_letter.pdf"),ye=b.useMemo(()=>V==="cv"?X==="pdf"?ge:fe:X==="pdf"?ne:W,[V,X,fe,ge,W,ne]),Re=L&&ye?Ae.fileUrl(L,ye):null;async function Me(){$(!0);try{let x,J;try{x=JSON.parse(g),J=JSON.parse(w)}catch(ue){throw new Error(`Invalid JSON: ${ue.message}`)}await Ae.saveReview(p,{app_key:j?.app_key,stage_2:x,stage_3:J}),r("Saved edits"),await U()}catch(x){r(x.message,"error")}finally{$(!1)}}async function M(){$(!0);try{await Ae.saveReview(p,{app_key:j?.app_key,stage_2:JSON.parse(g),stage_3:JSON.parse(w)}),await Ae.rebuild(p),r("PDFs rebuilt"),await Z(),await U(),Q("preview"),q("pdf")}catch(x){r(x.message,"error")}finally{$(!1)}}return s.jsx("div",{className:"profile-page review-page",children:s.jsxs("div",{className:"profile-layout review-layout",children:[s.jsx("main",{className:"profile-main review-main",children:s.jsxs("div",{className:"profile-main-inner review-main-inner",children:[s.jsxs("div",{className:"profile-section-head",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Review"}),s.jsx("p",{className:"page-lead",children:"Preview generated documents and fine-tune CV and cover letter content."})]}),s.jsxs("div",{className:"header-actions",children:[s.jsx("select",{value:p,onChange:x=>h(x.target.value),className:"ps-select",children:c.map(x=>s.jsx("option",{value:x.slug,children:x.title||x.slug},x.slug))}),s.jsx("button",{type:"button",className:"md-outlined-btn",onClick:Me,disabled:G,children:"Save edits"}),s.jsx("button",{type:"button",className:"md-filled-btn",onClick:M,disabled:G,children:G?"Working…":"Save & export PDF"})]})]}),s.jsxs("div",{className:"review-tabs",children:[s.jsx("button",{type:"button",className:O==="preview"?"active":"",onClick:()=>Q("preview"),children:"Preview"}),s.jsx("button",{type:"button",className:O==="cv"?"active":"",onClick:()=>Q("cv"),children:"CV JSON"}),s.jsx("button",{type:"button",className:O==="letter"?"active":"",onClick:()=>Q("letter"),children:"Letter JSON"})]}),O==="preview"&&s.jsxs("div",{className:"review-preview-panel",children:[!L&&s.jsxs("p",{className:"muted review-empty",children:["No generated files yet. Run ",s.jsx("strong",{children:"Generate all"})," from Applications, then return here."]}),L&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"review-preview-toolbar",children:[s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:V==="cv"?"active":"",onClick:()=>Y("cv"),children:"CV"}),s.jsx("button",{type:"button",className:V==="letter"?"active":"",onClick:()=>Y("letter"),children:"Cover letter"})]}),s.jsxs("div",{className:"review-preview-switch",children:[s.jsx("button",{type:"button",className:X==="html"?"active":"",onClick:()=>q("html"),disabled:!(V==="cv"?fe:W),children:"HTML"}),s.jsx("button",{type:"button",className:X==="pdf"?"active":"",onClick:()=>q("pdf"),disabled:!(V==="cv"?ge:ne),children:"PDF"})]}),Re&&s.jsx("a",{href:Re,target:"_blank",rel:"noreferrer",className:"md-text-btn",children:"Open in new tab"})]}),Re?s.jsx("div",{className:"review-preview-frame-wrap",children:s.jsx("iframe",{title:`${V} ${X} preview`,src:Re,className:"review-preview-frame"},Re)}):s.jsx("p",{className:"muted review-empty",children:X==="pdf"?"PDF not found — run Save & export PDF.":"HTML preview not available."}),s.jsxs("div",{className:"review-download-row",children:[ge&&s.jsx("a",{href:Ae.fileUrl(L,ge),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download CV PDF"}),ne&&s.jsx("a",{href:Ae.fileUrl(L,ne),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download letter PDF"})]})]})]}),O==="cv"&&s.jsx("textarea",{className:"code-area review-editor",value:g,onChange:x=>N(x.target.value)}),O==="letter"&&s.jsx("textarea",{className:"code-area review-editor",value:w,onChange:x=>_(x.target.value)})]})}),s.jsx("aside",{className:"profile-sidebar review-sidebar",children:s.jsxs("nav",{className:"profile-nav",children:[s.jsx("p",{className:"profile-nav-label",children:"Applications"}),s.jsxs("ul",{children:[c.map(x=>s.jsx("li",{children:s.jsxs("button",{type:"button",className:`profile-nav-item ${p===x.slug?"active":""}`,onClick:()=>h(x.slug),children:[s.jsx("span",{className:"jobs-nav-title",children:x.title||x.slug}),s.jsx("span",{className:"jobs-nav-meta",children:x.has_output?"Has output":"No output yet"})]})},x.slug)),!c.length&&s.jsx("li",{className:"jobs-empty",children:"No applications"})]})]})})]})})}function Rb(){return s.jsx(I0,{children:s.jsxs(Ua,{element:s.jsx(Qv,{}),children:[s.jsx(Ua,{index:!0,element:s.jsx($0,{to:"/jobs",replace:!0})}),s.jsx(Ua,{path:"profile",element:s.jsx(cb,{})}),s.jsx(Ua,{path:"jobs",element:s.jsx(db,{})}),s.jsx(Ua,{path:"applications",element:s.jsx(hb,{})}),s.jsx(Ua,{path:"templates",element:s.jsx(Tb,{})}),s.jsx(Ua,{path:"review",element:s.jsx(Cb,{})})]})})}const Ab=`
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
`;function _b(){return s.jsx("style",{children:Ab})}$g.createRoot(document.getElementById("root")).render(s.jsx(b.StrictMode,{children:s.jsxs(Ev,{children:[s.jsx(_b,{}),s.jsx(Vv,{children:s.jsx(Rb,{})})]})}));
