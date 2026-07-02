(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))c(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function f(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(m){if(m.ep)return;m.ep=!0;const p=f(m);fetch(m.href,p)}})();var Qc={exports:{}},Yn={};var xm;function Hg(){if(xm)return Yn;xm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(c,m,p){var g=null;if(p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),"key"in m){p={};for(var j in m)j!=="key"&&(p[j]=m[j])}else p=m;return m=p.ref,{$$typeof:r,type:c,key:g,ref:m!==void 0?m:null,props:p}}return Yn.Fragment=s,Yn.jsx=f,Yn.jsxs=f,Yn}var Sm;function Bg(){return Sm||(Sm=1,Qc.exports=Hg()),Qc.exports}var o=Bg(),Vc={exports:{}},ie={};var jm;function Yg(){if(jm)return ie;jm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=D&&E[D]||E["@@iterator"],typeof E=="function"?E:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,q={};function _(E,Y,J){this.props=E,this.context=Y,this.refs=q,this.updater=J||X}_.prototype.isReactComponent={},_.prototype.setState=function(E,Y){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,Y,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function z(){}z.prototype=_.prototype;function H(E,Y,J){this.props=E,this.context=Y,this.refs=q,this.updater=J||X}var K=H.prototype=new z;K.constructor=H,Q(K,_.prototype),K.isPureReactComponent=!0;var te=Array.isArray;function V(){}var G={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function ae(E,Y,J){var W=J.ref;return{$$typeof:r,type:E,key:Y,ref:W!==void 0?W:null,props:J}}function oe(E,Y){return ae(E.type,Y,E.props)}function Ue(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function Re(E){var Y={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(J){return Y[J]})}var at=/\/+/g;function Ye(E,Y){return typeof E=="object"&&E!==null&&E.key!=null?Re(""+E.key):Y.toString(36)}function Ae(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(V,V):(E.status="pending",E.then(function(Y){E.status==="pending"&&(E.status="fulfilled",E.value=Y)},function(Y){E.status==="pending"&&(E.status="rejected",E.reason=Y)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function U(E,Y,J,W,ne){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var ge=!1;if(E===null)ge=!0;else switch(le){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(E.$$typeof){case r:case s:ge=!0;break;case C:return ge=E._init,U(ge(E._payload),Y,J,W,ne)}}if(ge)return ne=ne(E),ge=W===""?"."+Ye(E,0):W,te(ne)?(J="",ge!=null&&(J=ge.replace(at,"$&/")+"/"),U(ne,Y,J,"",function(Zl){return Zl})):ne!=null&&(Ue(ne)&&(ne=oe(ne,J+(ne.key==null||E&&E.key===ne.key?"":(""+ne.key).replace(at,"$&/")+"/")+ge)),Y.push(ne)),1;ge=0;var lt=W===""?".":W+":";if(te(E))for(var ke=0;ke<E.length;ke++)W=E[ke],le=lt+Ye(W,ke),ge+=U(W,Y,J,le,ne);else if(ke=M(E),typeof ke=="function")for(E=ke.call(E),ke=0;!(W=E.next()).done;)W=W.value,le=lt+Ye(W,ke++),ge+=U(W,Y,J,le,ne);else if(le==="object"){if(typeof E.then=="function")return U(Ae(E),Y,J,W,ne);throw Y=String(E),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ge}function x(E,Y,J){if(E==null)return E;var W=[],ne=0;return U(E,W,"","",function(le){return Y.call(J,le,ne++)}),W}function Z(E){if(E._status===-1){var Y=E._result;Y=Y(),Y.then(function(J){(E._status===0||E._status===-1)&&(E._status=1,E._result=J)},function(J){(E._status===0||E._status===-1)&&(E._status=2,E._result=J)}),E._status===-1&&(E._status=0,E._result=Y)}if(E._status===1)return E._result.default;throw E._result}var re=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},se={map:x,forEach:function(E,Y,J){x(E,function(){Y.apply(this,arguments)},J)},count:function(E){var Y=0;return x(E,function(){Y++}),Y},toArray:function(E){return x(E,function(Y){return Y})||[]},only:function(E){if(!Ue(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ie.Activity=w,ie.Children=se,ie.Component=_,ie.Fragment=f,ie.Profiler=m,ie.PureComponent=H,ie.StrictMode=c,ie.Suspense=y,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ie.__COMPILER_RUNTIME={__proto__:null,c:function(E){return G.H.useMemoCache(E)}},ie.cache=function(E){return function(){return E.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(E,Y,J){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var W=Q({},E.props),ne=E.key;if(Y!=null)for(le in Y.key!==void 0&&(ne=""+Y.key),Y)!ee.call(Y,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&Y.ref===void 0||(W[le]=Y[le]);var le=arguments.length-2;if(le===1)W.children=J;else if(1<le){for(var ge=Array(le),lt=0;lt<le;lt++)ge[lt]=arguments[lt+2];W.children=ge}return ae(E.type,ne,W)},ie.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},ie.createElement=function(E,Y,J){var W,ne={},le=null;if(Y!=null)for(W in Y.key!==void 0&&(le=""+Y.key),Y)ee.call(Y,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ne[W]=Y[W]);var ge=arguments.length-2;if(ge===1)ne.children=J;else if(1<ge){for(var lt=Array(ge),ke=0;ke<ge;ke++)lt[ke]=arguments[ke+2];ne.children=lt}if(E&&E.defaultProps)for(W in ge=E.defaultProps,ge)ne[W]===void 0&&(ne[W]=ge[W]);return ae(E,le,ne)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(E){return{$$typeof:j,render:E}},ie.isValidElement=Ue,ie.lazy=function(E){return{$$typeof:C,_payload:{_status:-1,_result:E},_init:Z}},ie.memo=function(E,Y){return{$$typeof:h,type:E,compare:Y===void 0?null:Y}},ie.startTransition=function(E){var Y=G.T,J={};G.T=J;try{var W=E(),ne=G.S;ne!==null&&ne(J,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(V,re)}catch(le){re(le)}finally{Y!==null&&J.types!==null&&(Y.types=J.types),G.T=Y}},ie.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ie.use=function(E){return G.H.use(E)},ie.useActionState=function(E,Y,J){return G.H.useActionState(E,Y,J)},ie.useCallback=function(E,Y){return G.H.useCallback(E,Y)},ie.useContext=function(E){return G.H.useContext(E)},ie.useDebugValue=function(){},ie.useDeferredValue=function(E,Y){return G.H.useDeferredValue(E,Y)},ie.useEffect=function(E,Y){return G.H.useEffect(E,Y)},ie.useEffectEvent=function(E){return G.H.useEffectEvent(E)},ie.useId=function(){return G.H.useId()},ie.useImperativeHandle=function(E,Y,J){return G.H.useImperativeHandle(E,Y,J)},ie.useInsertionEffect=function(E,Y){return G.H.useInsertionEffect(E,Y)},ie.useLayoutEffect=function(E,Y){return G.H.useLayoutEffect(E,Y)},ie.useMemo=function(E,Y){return G.H.useMemo(E,Y)},ie.useOptimistic=function(E,Y){return G.H.useOptimistic(E,Y)},ie.useReducer=function(E,Y,J){return G.H.useReducer(E,Y,J)},ie.useRef=function(E){return G.H.useRef(E)},ie.useState=function(E){return G.H.useState(E)},ie.useSyncExternalStore=function(E,Y,J){return G.H.useSyncExternalStore(E,Y,J)},ie.useTransition=function(){return G.H.useTransition()},ie.version="19.2.7",ie}var Em;function uo(){return Em||(Em=1,Vc.exports=Yg()),Vc.exports}var b=uo(),Zc={exports:{}},qn={},Jc={exports:{}},Kc={};var zm;function qg(){return zm||(zm=1,(function(r){function s(U,x){var Z=U.length;U.push(x);e:for(;0<Z;){var re=Z-1>>>1,se=U[re];if(0<m(se,x))U[re]=x,U[Z]=se,Z=re;else break e}}function f(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var x=U[0],Z=U.pop();if(Z!==x){U[0]=Z;e:for(var re=0,se=U.length,E=se>>>1;re<E;){var Y=2*(re+1)-1,J=U[Y],W=Y+1,ne=U[W];if(0>m(J,Z))W<se&&0>m(ne,J)?(U[re]=ne,U[W]=Z,re=W):(U[re]=J,U[Y]=Z,re=Y);else if(W<se&&0>m(ne,Z))U[re]=ne,U[W]=Z,re=W;else break e}}return x}function m(U,x){var Z=U.sortIndex-x.sortIndex;return Z!==0?Z:U.id-x.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var g=Date,j=g.now();r.unstable_now=function(){return g.now()-j}}var y=[],h=[],C=1,w=null,D=3,M=!1,X=!1,Q=!1,q=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function K(U){for(var x=f(h);x!==null;){if(x.callback===null)c(h);else if(x.startTime<=U)c(h),x.sortIndex=x.expirationTime,s(y,x);else break;x=f(h)}}function te(U){if(Q=!1,K(U),!X)if(f(y)!==null)X=!0,V||(V=!0,Re());else{var x=f(h);x!==null&&Ae(te,x.startTime-U)}}var V=!1,G=-1,ee=5,ae=-1;function oe(){return q?!0:!(r.unstable_now()-ae<ee)}function Ue(){if(q=!1,V){var U=r.unstable_now();ae=U;var x=!0;try{e:{X=!1,Q&&(Q=!1,z(G),G=-1),M=!0;var Z=D;try{t:{for(K(U),w=f(y);w!==null&&!(w.expirationTime>U&&oe());){var re=w.callback;if(typeof re=="function"){w.callback=null,D=w.priorityLevel;var se=re(w.expirationTime<=U);if(U=r.unstable_now(),typeof se=="function"){w.callback=se,K(U),x=!0;break t}w===f(y)&&c(y),K(U)}else c(y);w=f(y)}if(w!==null)x=!0;else{var E=f(h);E!==null&&Ae(te,E.startTime-U),x=!1}}break e}finally{w=null,D=Z,M=!1}x=void 0}}finally{x?Re():V=!1}}}var Re;if(typeof H=="function")Re=function(){H(Ue)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Ye=at.port2;at.port1.onmessage=Ue,Re=function(){Ye.postMessage(null)}}else Re=function(){_(Ue,0)};function Ae(U,x){G=_(function(){U(r.unstable_now())},x)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(U){switch(D){case 1:case 2:case 3:var x=3;break;default:x=D}var Z=D;D=x;try{return U()}finally{D=Z}},r.unstable_requestPaint=function(){q=!0},r.unstable_runWithPriority=function(U,x){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=D;D=U;try{return x()}finally{D=Z}},r.unstable_scheduleCallback=function(U,x,Z){var re=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Z+se,U={id:C++,callback:x,priorityLevel:U,startTime:Z,expirationTime:se,sortIndex:-1},Z>re?(U.sortIndex=Z,s(h,U),f(y)===null&&U===f(h)&&(Q?(z(G),G=-1):Q=!0,Ae(te,Z-re))):(U.sortIndex=se,s(y,U),X||M||(X=!0,V||(V=!0,Re()))),U},r.unstable_shouldYield=oe,r.unstable_wrapCallback=function(U){var x=D;return function(){var Z=D;D=x;try{return U.apply(this,arguments)}finally{D=Z}}}})(Kc)),Kc}var wm;function Gg(){return wm||(wm=1,Jc.exports=qg()),Jc.exports}var $c={exports:{}},tt={};var Tm;function Xg(){if(Tm)return tt;Tm=1;var r=uo();function s(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)h+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function p(y,h,C){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:w==null?null:""+w,children:y,containerInfo:h,implementation:C}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(y,h){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return p(y,h,null,C)},tt.flushSync=function(y){var h=g.T,C=c.p;try{if(g.T=null,c.p=2,y)return y()}finally{g.T=h,c.p=C,c.d.f()}},tt.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(y,h))},tt.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},tt.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var C=h.as,w=j(C,h.crossOrigin),D=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;C==="style"?c.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:w,integrity:D,fetchPriority:M}):C==="script"&&c.d.X(y,{crossOrigin:w,integrity:D,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},tt.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var C=j(h.as,h.crossOrigin);c.d.M(y,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(y)},tt.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var C=h.as,w=j(C,h.crossOrigin);c.d.L(y,C,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},tt.preloadModule=function(y,h){if(typeof y=="string")if(h){var C=j(h.as,h.crossOrigin);c.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(y)},tt.requestFormReset=function(y){c.d.r(y)},tt.unstable_batchedUpdates=function(y,h){return y(h)},tt.useFormState=function(y,h,C){return g.H.useFormState(y,h,C)},tt.useFormStatus=function(){return g.H.useHostTransitionStatus()},tt.version="19.2.7",tt}var Nm;function Qg(){if(Nm)return $c.exports;Nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),$c.exports=Xg(),$c.exports}var Cm;function Vg(){if(Cm)return qn;Cm=1;var r=Gg(),s=uo(),f=Qg();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(c(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return y(n),e;if(i===l)return y(n),t;i=i.sibling}throw Error(c(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,d=n.child;d;){if(d===a){u=!0,a=n,l=i;break}if(d===l){u=!0,l=n,a=i;break}d=d.sibling}if(!u){for(d=i.child;d;){if(d===a){u=!0,a=i,l=n;break}if(d===l){u=!0,l=i,a=n;break}d=d.sibling}if(!u)throw Error(c(189))}}if(a.alternate!==l)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,D=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),H=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),Ue=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Ue&&e[Ue]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function Ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case _:return"Profiler";case q:return"StrictMode";case te:return"Suspense";case V:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case H:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:Ye(e.type)||"Memo";case ee:t=e._payload,e=e._init;try{return Ye(e(t))}catch{}}return null}var Ae=Array.isArray,U=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},re=[],se=-1;function E(e){return{current:e}}function Y(e){0>se||(e.current=re[se],re[se]=null,se--)}function J(e,t){se++,re[se]=e.current,e.current=t}var W=E(null),ne=E(null),le=E(null),ge=E(null);function lt(e,t){switch(J(le,t),J(ne,e),J(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Xd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Xd(t),e=Qd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(W),J(W,e)}function ke(){Y(W),Y(ne),Y(le)}function Zl(e){e.memoizedState!==null&&J(ge,e);var t=W.current,a=Qd(t,e.type);t!==a&&(J(ne,e),J(W,a))}function Jn(e){ne.current===e&&(Y(W),Y(ne)),ge.current===e&&(Y(ge),kn._currentValue=Z)}var Tr,bo;function ka(e){if(Tr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Tr=t&&t[1]||"",bo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tr+e+bo}var Nr=!1;function Cr(e,t){if(!e||Nr)return"";Nr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(O){var A=O}Reflect.construct(e,[],B)}else{try{B.call()}catch(O){A=O}e.call(B.prototype)}}else{try{throw Error()}catch(O){A=O}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(O){if(O&&A&&typeof O.stack=="string")return[O.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],d=i[1];if(u&&d){var v=u.split(`
`),R=d.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<R.length&&!R[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===R.length)for(l=v.length-1,n=R.length-1;1<=l&&0<=n&&v[l]!==R[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==R[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==R[n]){var k=`
`+v[l].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=l&&0<=n);break}}}finally{Nr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function hp(e,t){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return e.child!==t&&t!==null?ka("Suspense Fallback"):ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return Cr(e.type,!1);case 11:return Cr(e.type.render,!1);case 1:return Cr(e.type,!0);case 31:return ka("Activity");default:return""}}function yo(e){try{var t="",a=null;do t+=hp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Rr=Object.prototype.hasOwnProperty,Ar=r.unstable_scheduleCallback,_r=r.unstable_cancelCallback,gp=r.unstable_shouldYield,vp=r.unstable_requestPaint,dt=r.unstable_now,bp=r.unstable_getCurrentPriorityLevel,xo=r.unstable_ImmediatePriority,So=r.unstable_UserBlockingPriority,Kn=r.unstable_NormalPriority,yp=r.unstable_LowPriority,jo=r.unstable_IdlePriority,xp=r.log,Sp=r.unstable_setDisableYieldValue,Jl=null,mt=null;function sa(e){if(typeof xp=="function"&&Sp(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Jl,e)}catch{}}var pt=Math.clz32?Math.clz32:zp,jp=Math.log,Ep=Math.LN2;function zp(e){return e>>>=0,e===0?32:31-(jp(e)/Ep|0)|0}var $n=256,Wn=262144,Fn=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function In(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~i,l!==0?n=La(l):(u&=d,u!==0?n=La(u):a||(a=d&~e,a!==0&&(n=La(a))))):(d=l&~i,d!==0?n=La(d):u!==0?n=La(u):a||(a=l&~e,a!==0&&(n=La(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eo(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function Or(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tp(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,R=e.hiddenUpdates;for(a=u&~a;0<a;){var k=31-pt(a),B=1<<k;d[k]=0,v[k]=-1;var A=R[k];if(A!==null)for(R[k]=null,k=0;k<A.length;k++){var O=A[k];O!==null&&(O.lane&=-536870913)}a&=~B}l!==0&&zo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function zo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function wo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function To(e,t){var a=t&-t;return a=(a&42)!==0?1:Mr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Mr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function No(){var e=x.p;return e!==0?e:(e=window.event,e===void 0?32:mm(e.type))}function Co(e,t){var a=x.p;try{return x.p=e,t()}finally{x.p=a}}var fa=Math.random().toString(36).slice(2),We="__reactFiber$"+fa,it="__reactProps$"+fa,ll="__reactContainer$"+fa,Ur="__reactEvents$"+fa,Np="__reactListeners$"+fa,Cp="__reactHandles$"+fa,Ro="__reactResources$"+fa,Wl="__reactMarker$"+fa;function kr(e){delete e[We],delete e[it],delete e[Ur],delete e[Np],delete e[Cp]}function nl(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ll]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Fd(e);e!==null;){if(a=e[We])return a;e=Fd(e)}return t}e=a,a=e.parentNode}return null}function il(e){if(e=e[We]||e[ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function rl(e){var t=e[Ro];return t||(t=e[Ro]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Wl]=!0}var Ao=new Set,_o={};function Ha(e,t){ul(e,t),ul(e+"Capture",t)}function ul(e,t){for(_o[e]=t,e=0;e<t.length;e++)Ao.add(t[e])}var Rp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oo={},Mo={};function Ap(e){return Rr.call(Mo,e)?!0:Rr.call(Oo,e)?!1:Rp.test(e)?Mo[e]=!0:(Oo[e]=!0,!1)}function Pn(e,t,a){if(Ap(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ei(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Vt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lr(e){if(!e._valueTracker){var t=Do(e)?"checked":"value";e._valueTracker=_p(e,t,""+e[t])}}function Uo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Do(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Op=/[\n"\\]/g;function zt(e){return e.replace(Op,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hr(e,t,a,l,n,i,u,d){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Br(e,u,Et(t)):a!=null?Br(e,u,Et(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Et(d):e.removeAttribute("name")}function ko(e,t,a,l,n,i,u,d){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Lr(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Lr(e)}function Br(e,t,a){t==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Lo(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function Ho(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(c(92));if(Ae(l)){if(1<l.length)throw Error(c(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Lr(e)}function ol(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Mp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Mp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yo(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Bo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Bo(e,i,t[i])}function Yr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(e){return Up.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var qr=null;function Gr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,fl=null;function qo(e){var t=il(e);if(t&&(e=t.stateNode)){var a=e[it]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[it]||null;if(!n)throw Error(c(90));Hr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Uo(l)}break e;case"textarea":Lo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&cl(e,!!a.multiple,t,!1)}}}var Xr=!1;function Go(e,t,a){if(Xr)return e(t,a);Xr=!0;try{var l=e(t);return l}finally{if(Xr=!1,(sl!==null||fl!==null)&&(Xi(),sl&&(t=sl,e=fl,fl=sl=null,qo(t),e)))for(t=0;t<e.length;t++)qo(e[t])}}function Il(e,t){var a=e.stateNode;if(a===null)return null;var l=a[it]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qr=!1;if(Jt)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{Qr=!1}var da=null,Vr=null,li=null;function Xo(){if(li)return li;var e,t=Vr,a=t.length,l,n="value"in da?da.value:da.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return li=n.slice(e,1<l?1-l:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function Qo(){return!1}function rt(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:Qo,this.isPropagationStopped=Qo,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=rt(Ba),en=w({},Ba,{view:0,detail:0}),kp=rt(en),Zr,Jr,tn,ui=w({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$r,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(Zr=e.screenX-tn.screenX,Jr=e.screenY-tn.screenY):Jr=Zr=0,tn=e),Zr)},movementY:function(e){return"movementY"in e?e.movementY:Jr}}),Vo=rt(ui),Lp=w({},ui,{dataTransfer:0}),Hp=rt(Lp),Bp=w({},en,{relatedTarget:0}),Kr=rt(Bp),Yp=w({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=rt(Yp),Gp=w({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xp=rt(Gp),Qp=w({},Ba,{data:0}),Zo=rt(Qp),Vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jp[e])?!!t[e]:!1}function $r(){return Kp}var $p=w({},en,{key:function(e){if(e.key){var t=Vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$r,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wp=rt($p),Fp=w({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=rt(Fp),Ip=w({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$r}),Pp=rt(Ip),eh=w({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=rt(eh),ah=w({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lh=rt(ah),nh=w({},Ba,{newState:0,oldState:0}),ih=rt(nh),rh=[9,13,27,32],Wr=Jt&&"CompositionEvent"in window,an=null;Jt&&"documentMode"in document&&(an=document.documentMode);var uh=Jt&&"TextEvent"in window&&!an,Ko=Jt&&(!Wr||an&&8<an&&11>=an),$o=" ",Wo=!1;function Fo(e,t){switch(e){case"keyup":return rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Io(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function ch(e,t){switch(e){case"compositionend":return Io(t);case"keypress":return t.which!==32?null:(Wo=!0,$o);case"textInput":return e=t.data,e===$o&&Wo?null:e;default:return null}}function oh(e,t){if(dl)return e==="compositionend"||!Wr&&Fo(e,t)?(e=Xo(),li=Vr=da=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ko&&t.locale!=="ko"?null:t.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sh[e.type]:t==="textarea"}function es(e,t,a,l){sl?fl?fl.push(l):fl=[l]:sl=l,t=Wi(t,"onChange"),0<t.length&&(a=new ri("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var ln=null,nn=null;function fh(e){Ld(e,0)}function ci(e){var t=Fl(e);if(Uo(t))return e}function ts(e,t){if(e==="change")return t}var as=!1;if(Jt){var Fr;if(Jt){var Ir="oninput"in document;if(!Ir){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),Ir=typeof ls.oninput=="function"}Fr=Ir}else Fr=!1;as=Fr&&(!document.documentMode||9<document.documentMode)}function ns(){ln&&(ln.detachEvent("onpropertychange",is),nn=ln=null)}function is(e){if(e.propertyName==="value"&&ci(nn)){var t=[];es(t,nn,e,Gr(e)),Go(fh,t)}}function dh(e,t,a){e==="focusin"?(ns(),ln=t,nn=a,ln.attachEvent("onpropertychange",is)):e==="focusout"&&ns()}function mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(nn)}function ph(e,t){if(e==="click")return ci(t)}function hh(e,t){if(e==="input"||e==="change")return ci(t)}function gh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:gh;function rn(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Rr.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function us(e,t){var a=rs(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rs(a)}}function cs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function os(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ti(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vh=Jt&&"documentMode"in document&&11>=document.documentMode,ml=null,eu=null,un=null,tu=!1;function ss(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||ml==null||ml!==ti(l)||(l=ml,"selectionStart"in l&&Pr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),un&&rn(un,l)||(un=l,l=Wi(eu,"onSelect"),0<l.length&&(t=new ri("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=ml)))}function Ya(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},au={},fs={};Jt&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function qa(e){if(au[e])return au[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in fs)return au[e]=t[a];return e}var ds=qa("animationend"),ms=qa("animationiteration"),ps=qa("animationstart"),bh=qa("transitionrun"),yh=qa("transitionstart"),xh=qa("transitioncancel"),hs=qa("transitionend"),gs=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function Dt(e,t){gs.set(e,t),Ha(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wt=[],hl=0,nu=0;function si(){for(var e=hl,t=nu=hl=0;t<e;){var a=wt[t];wt[t++]=null;var l=wt[t];wt[t++]=null;var n=wt[t];wt[t++]=null;var i=wt[t];if(wt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&vs(a,n,i)}}function fi(e,t,a,l){wt[hl++]=e,wt[hl++]=t,wt[hl++]=a,wt[hl++]=l,nu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function iu(e,t,a,l){return fi(e,t,a,l),di(e)}function Ga(e,t){return fi(e,null,null,t),di(e)}function vs(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function di(e){if(50<Rn)throw Rn=0,pc=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gl={};function Sh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,a,l){return new Sh(e,t,a,l)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kt(e,t){var a=e.alternate;return a===null?(a=gt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bs(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")ru(e)&&(u=1);else if(typeof e=="string")u=Tg(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=gt(31,a,t,n),e.elementType=ae,e.lanes=i,e;case Q:return Xa(a.children,n,i,t);case q:u=8,n|=24;break;case _:return e=gt(12,a,t,n|2),e.elementType=_,e.lanes=i,e;case te:return e=gt(13,a,t,n),e.elementType=te,e.lanes=i,e;case V:return e=gt(19,a,t,n),e.elementType=V,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:u=10;break e;case z:u=9;break e;case K:u=11;break e;case G:u=14;break e;case ee:u=16,l=null;break e}u=29,a=Error(c(130,e===null?"null":typeof e,"")),l=null}return t=gt(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Xa(e,t,a,l){return e=gt(7,e,l,t),e.lanes=a,e}function uu(e,t,a){return e=gt(6,e,null,t),e.lanes=a,e}function ys(e){var t=gt(18,null,null,0);return t.stateNode=e,t}function cu(e,t,a){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xs=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var a=xs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:yo(t)},xs.set(e,t),t)}return{value:e,source:t,stack:yo(t)}}var vl=[],bl=0,pi=null,cn=0,Nt=[],Ct=0,ma=null,Yt=1,qt="";function $t(e,t){vl[bl++]=cn,vl[bl++]=pi,pi=e,cn=t}function Ss(e,t,a){Nt[Ct++]=Yt,Nt[Ct++]=qt,Nt[Ct++]=ma,ma=e;var l=Yt;e=qt;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Yt=1<<32-pt(t)+n|a<<n|l,qt=i+e}else Yt=1<<i|a<<n|l,qt=e}function ou(e){e.return!==null&&($t(e,1),Ss(e,1,0))}function su(e){for(;e===pi;)pi=vl[--bl],vl[bl]=null,cn=vl[--bl],vl[bl]=null;for(;e===ma;)ma=Nt[--Ct],Nt[Ct]=null,qt=Nt[--Ct],Nt[Ct]=null,Yt=Nt[--Ct],Nt[Ct]=null}function js(e,t){Nt[Ct++]=Yt,Nt[Ct++]=qt,Nt[Ct++]=ma,Yt=t.id,qt=t.overflow,ma=e}var Fe=null,Te=null,he=!1,pa=null,Rt=!1,fu=Error(c(519));function ha(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw on(Tt(t,e)),fu}function Es(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[We]=e,t[it]=l,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<_n.length;a++)de(_n[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),ko(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),Ho(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||qd(t.textContent,a)?(l.popover!=null&&(de("beforetoggle",t),de("toggle",t)),l.onScroll!=null&&de("scroll",t),l.onScrollEnd!=null&&de("scrollend",t),l.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ha(e,!0)}function zs(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Fe=Fe.return}}function yl(e){if(e!==Fe)return!1;if(!he)return zs(e),he=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rc(e.type,e.memoizedProps)),a=!a),a&&Te&&ha(e),zs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Te=Wd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Te=Wd(e)}else t===27?(t=Te,Ra(e.type)?(e=Dc,Dc=null,Te=e):Te=t):Te=Fe?_t(e.stateNode.nextSibling):null;return!0}function Qa(){Te=Fe=null,he=!1}function du(){var e=pa;return e!==null&&(st===null?st=e:st.push.apply(st,e),pa=null),e}function on(e){pa===null?pa=[e]:pa.push(e)}var mu=E(null),Va=null,Wt=null;function ga(e,t,a){J(mu,t._currentValue),t._currentValue=a}function Ft(e){e._currentValue=mu.current,Y(mu)}function pu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function hu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var d=i;i=n;for(var v=0;v<t.length;v++)if(d.context===t[v]){i.lanes|=a,d=i.alternate,d!==null&&(d.lanes|=a),pu(i.return,a,e),l||(u=null);break e}i=d.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(c(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),pu(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function xl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var d=n.type;ht(n.pendingProps.value,u.value)||(e!==null?e.push(d):e=[d])}}else if(n===ge.current){if(u=n.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(kn):e=[kn])}n=n.return}e!==null&&hu(t,e,a,l),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Va=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return ws(Va,e)}function gi(e,t){return Va===null&&Za(e),ws(e,t)}function ws(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(c(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var jh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Eh=r.unstable_scheduleCallback,zh=r.unstable_NormalPriority,qe={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new jh,data:new Map,refCount:0}}function sn(e){e.refCount--,e.refCount===0&&Eh(zh,function(){e.controller.abort()})}var fn=null,vu=0,Sl=0,jl=null;function wh(e,t){if(fn===null){var a=fn=[];vu=0,Sl=xc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return vu++,t.then(Ts,Ts),t}function Ts(){if(--vu===0&&fn!==null){jl!==null&&(jl.status="fulfilled");var e=fn;fn=null,Sl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Th(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Ns=U.S;U.S=function(e,t){fd=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&wh(e,t),Ns!==null&&Ns(e,t)};var Ja=E(null);function bu(){var e=Ja.current;return e!==null?e:we.pooledCache}function vi(e,t){t===null?J(Ja,Ja.current):J(Ja,t.pool)}function Cs(){var e=bu();return e===null?null:{parent:qe._currentValue,pool:e}}var El=Error(c(460)),yu=Error(c(474)),bi=Error(c(542)),yi={then:function(){}};function Rs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function As(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Zt,Zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Os(e),e}throw $a=t,El}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,El):a}}var $a=null;function _s(){if($a===null)throw Error(c(459));var e=$a;return $a=null,e}function Os(e){if(e===El||e===bi)throw Error(c(483))}var zl=null,dn=0;function xi(e){var t=dn;return dn+=1,zl===null&&(zl=[]),As(zl,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Si(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ms(e){function t(T,S){if(e){var N=T.deletions;N===null?(T.deletions=[S],T.flags|=16):N.push(S)}}function a(T,S){if(!e)return null;for(;S!==null;)t(T,S),S=S.sibling;return null}function l(T){for(var S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function n(T,S){return T=Kt(T,S),T.index=0,T.sibling=null,T}function i(T,S,N){return T.index=N,e?(N=T.alternate,N!==null?(N=N.index,N<S?(T.flags|=67108866,S):N):(T.flags|=67108866,S)):(T.flags|=1048576,S)}function u(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function d(T,S,N,L){return S===null||S.tag!==6?(S=uu(N,T.mode,L),S.return=T,S):(S=n(S,N),S.return=T,S)}function v(T,S,N,L){var I=N.type;return I===Q?k(T,S,N.props.children,L,N.key):S!==null&&(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ee&&Ka(I)===S.type)?(S=n(S,N.props),mn(S,N),S.return=T,S):(S=mi(N.type,N.key,N.props,null,T.mode,L),mn(S,N),S.return=T,S)}function R(T,S,N,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=cu(N,T.mode,L),S.return=T,S):(S=n(S,N.children||[]),S.return=T,S)}function k(T,S,N,L,I){return S===null||S.tag!==7?(S=Xa(N,T.mode,L,I),S.return=T,S):(S=n(S,N),S.return=T,S)}function B(T,S,N){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=uu(""+S,T.mode,N),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case M:return N=mi(S.type,S.key,S.props,null,T.mode,N),mn(N,S),N.return=T,N;case X:return S=cu(S,T.mode,N),S.return=T,S;case ee:return S=Ka(S),B(T,S,N)}if(Ae(S)||Re(S))return S=Xa(S,T.mode,N,null),S.return=T,S;if(typeof S.then=="function")return B(T,xi(S),N);if(S.$$typeof===H)return B(T,gi(T,S),N);Si(T,S)}return null}function A(T,S,N,L){var I=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return I!==null?null:d(T,S,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case M:return N.key===I?v(T,S,N,L):null;case X:return N.key===I?R(T,S,N,L):null;case ee:return N=Ka(N),A(T,S,N,L)}if(Ae(N)||Re(N))return I!==null?null:k(T,S,N,L,null);if(typeof N.then=="function")return A(T,S,xi(N),L);if(N.$$typeof===H)return A(T,S,gi(T,N),L);Si(T,N)}return null}function O(T,S,N,L,I){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return T=T.get(N)||null,d(S,T,""+L,I);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return T=T.get(L.key===null?N:L.key)||null,v(S,T,L,I);case X:return T=T.get(L.key===null?N:L.key)||null,R(S,T,L,I);case ee:return L=Ka(L),O(T,S,N,L,I)}if(Ae(L)||Re(L))return T=T.get(N)||null,k(S,T,L,I,null);if(typeof L.then=="function")return O(T,S,N,xi(L),I);if(L.$$typeof===H)return O(T,S,N,gi(S,L),I);Si(S,L)}return null}function $(T,S,N,L){for(var I=null,ve=null,F=S,ce=S=0,pe=null;F!==null&&ce<N.length;ce++){F.index>ce?(pe=F,F=null):pe=F.sibling;var be=A(T,F,N[ce],L);if(be===null){F===null&&(F=pe);break}e&&F&&be.alternate===null&&t(T,F),S=i(be,S,ce),ve===null?I=be:ve.sibling=be,ve=be,F=pe}if(ce===N.length)return a(T,F),he&&$t(T,ce),I;if(F===null){for(;ce<N.length;ce++)F=B(T,N[ce],L),F!==null&&(S=i(F,S,ce),ve===null?I=F:ve.sibling=F,ve=F);return he&&$t(T,ce),I}for(F=l(F);ce<N.length;ce++)pe=O(F,T,ce,N[ce],L),pe!==null&&(e&&pe.alternate!==null&&F.delete(pe.key===null?ce:pe.key),S=i(pe,S,ce),ve===null?I=pe:ve.sibling=pe,ve=pe);return e&&F.forEach(function(Da){return t(T,Da)}),he&&$t(T,ce),I}function P(T,S,N,L){if(N==null)throw Error(c(151));for(var I=null,ve=null,F=S,ce=S=0,pe=null,be=N.next();F!==null&&!be.done;ce++,be=N.next()){F.index>ce?(pe=F,F=null):pe=F.sibling;var Da=A(T,F,be.value,L);if(Da===null){F===null&&(F=pe);break}e&&F&&Da.alternate===null&&t(T,F),S=i(Da,S,ce),ve===null?I=Da:ve.sibling=Da,ve=Da,F=pe}if(be.done)return a(T,F),he&&$t(T,ce),I;if(F===null){for(;!be.done;ce++,be=N.next())be=B(T,be.value,L),be!==null&&(S=i(be,S,ce),ve===null?I=be:ve.sibling=be,ve=be);return he&&$t(T,ce),I}for(F=l(F);!be.done;ce++,be=N.next())be=O(F,T,ce,be.value,L),be!==null&&(e&&be.alternate!==null&&F.delete(be.key===null?ce:be.key),S=i(be,S,ce),ve===null?I=be:ve.sibling=be,ve=be);return e&&F.forEach(function(Lg){return t(T,Lg)}),he&&$t(T,ce),I}function ze(T,S,N,L){if(typeof N=="object"&&N!==null&&N.type===Q&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case M:e:{for(var I=N.key;S!==null;){if(S.key===I){if(I=N.type,I===Q){if(S.tag===7){a(T,S.sibling),L=n(S,N.props.children),L.return=T,T=L;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ee&&Ka(I)===S.type){a(T,S.sibling),L=n(S,N.props),mn(L,N),L.return=T,T=L;break e}a(T,S);break}else t(T,S);S=S.sibling}N.type===Q?(L=Xa(N.props.children,T.mode,L,N.key),L.return=T,T=L):(L=mi(N.type,N.key,N.props,null,T.mode,L),mn(L,N),L.return=T,T=L)}return u(T);case X:e:{for(I=N.key;S!==null;){if(S.key===I)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){a(T,S.sibling),L=n(S,N.children||[]),L.return=T,T=L;break e}else{a(T,S);break}else t(T,S);S=S.sibling}L=cu(N,T.mode,L),L.return=T,T=L}return u(T);case ee:return N=Ka(N),ze(T,S,N,L)}if(Ae(N))return $(T,S,N,L);if(Re(N)){if(I=Re(N),typeof I!="function")throw Error(c(150));return N=I.call(N),P(T,S,N,L)}if(typeof N.then=="function")return ze(T,S,xi(N),L);if(N.$$typeof===H)return ze(T,S,gi(T,N),L);Si(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,S!==null&&S.tag===6?(a(T,S.sibling),L=n(S,N),L.return=T,T=L):(a(T,S),L=uu(N,T.mode,L),L.return=T,T=L),u(T)):a(T,S)}return function(T,S,N,L){try{dn=0;var I=ze(T,S,N,L);return zl=null,I}catch(F){if(F===El||F===bi)throw F;var ve=gt(29,F,null,T.mode);return ve.lanes=L,ve.return=T,ve}}}var Wa=Ms(!0),Ds=Ms(!1),va=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ye&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=di(e),vs(e,null,a),t}return fi(e,l,t,a),di(e)}function pn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wo(e,a)}}function ju(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Eu=!1;function hn(){if(Eu){var e=jl;if(e!==null)throw e}}function gn(e,t,a,l){Eu=!1;var n=e.updateQueue;va=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,d=n.shared.pending;if(d!==null){n.shared.pending=null;var v=d,R=v.next;v.next=null,u===null?i=R:u.next=R,u=v;var k=e.alternate;k!==null&&(k=k.updateQueue,d=k.lastBaseUpdate,d!==u&&(d===null?k.firstBaseUpdate=R:d.next=R,k.lastBaseUpdate=v))}if(i!==null){var B=n.baseState;u=0,k=R=v=null,d=i;do{var A=d.lane&-536870913,O=A!==d.lane;if(O?(me&A)===A:(l&A)===A){A!==0&&A===Sl&&(Eu=!0),k!==null&&(k=k.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var $=e,P=d;A=t;var ze=a;switch(P.tag){case 1:if($=P.payload,typeof $=="function"){B=$.call(ze,B,A);break e}B=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=P.payload,A=typeof $=="function"?$.call(ze,B,A):$,A==null)break e;B=w({},B,A);break e;case 2:va=!0}}A=d.callback,A!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[A]:O.push(A))}else O={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},k===null?(R=k=O,v=B):k=k.next=O,u|=A;if(d=d.next,d===null){if(d=n.shared.pending,d===null)break;O=d,d=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);k===null&&(v=B),n.baseState=v,n.firstBaseUpdate=R,n.lastBaseUpdate=k,i===null&&(n.shared.lanes=0),za|=u,e.lanes=u,e.memoizedState=B}}function Us(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function ks(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Us(a[e],t)}var wl=E(null),ji=E(0);function Ls(e,t){e=ra,J(ji,e),J(wl,t),ra=e|t.baseLanes}function zu(){J(ji,ra),J(wl,wl.current)}function wu(){ra=ji.current,Y(wl),Y(ji)}var vt=E(null),At=null;function xa(e){var t=e.alternate;J(Le,Le.current&1),J(vt,e),At===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(At=e)}function Tu(e){J(Le,Le.current),J(vt,e),At===null&&(At=e)}function Hs(e){e.tag===22?(J(Le,Le.current),J(vt,e),At===null&&(At=e)):Sa()}function Sa(){J(Le,Le.current),J(vt,vt.current)}function bt(e){Y(vt),At===e&&(At=null),Y(Le)}var Le=E(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Oc(a)||Mc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var It=0,ue=null,je=null,Ge=null,zi=!1,Tl=!1,Fa=!1,wi=0,vn=0,Nl=null,Nh=0;function Me(){throw Error(c(321))}function Nu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Cu(e,t,a,l,n,i){return It=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?jf:Xu,Fa=!1,i=a(l,n),Fa=!1,Tl&&(i=Ys(t,a,l,n)),Bs(e),i}function Bs(e){U.H=xn;var t=je!==null&&je.next!==null;if(It=0,Ge=je=ue=null,zi=!1,vn=0,Nl=null,t)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&hi(e)&&(Xe=!0))}function Ys(e,t,a,l){ue=e;var n=0;do{if(Tl&&(Nl=null),vn=0,Tl=!1,25<=n)throw Error(c(301));if(n+=1,Ge=je=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}U.H=Ef,i=t(a,l)}while(Tl);return i}function Ch(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ue.flags|=1024),t}function Ru(){var e=wi!==0;return wi=0,e}function Au(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function _u(e){if(zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zi=!1}It=0,Ge=je=ue=null,Tl=!1,vn=wi=0,Nl=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ue.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function He(){if(je===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ge===null?ue.memoizedState:Ge.next;if(t!==null)Ge=t,je=e;else{if(e===null)throw ue.alternate===null?Error(c(467)):Error(c(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ge===null?ue.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=vn;return vn+=1,Nl===null&&(Nl=[]),e=As(Nl,e,t),t=ue,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?jf:Xu),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===H)return Ie(e)}throw Error(c(438,String(e)))}function Ou(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ti(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=oe;return t.index++,a}function Pt(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=He();return Mu(t,je,e)}function Mu(e,t,a){var l=e.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var d=u=null,v=null,R=t,k=!1;do{var B=R.lane&-536870913;if(B!==R.lane?(me&B)===B:(It&B)===B){var A=R.revertLane;if(A===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),B===Sl&&(k=!0);else if((It&A)===A){R=R.next,A===Sl&&(k=!0);continue}else B={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(d=v=B,u=i):v=v.next=B,ue.lanes|=A,za|=A;B=R.action,Fa&&a(i,B),i=R.hasEagerState?R.eagerState:a(i,B)}else A={lane:B,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},v===null?(d=v=A,u=i):v=v.next=A,ue.lanes|=B,za|=B;R=R.next}while(R!==null&&R!==t);if(v===null?u=i:v.next=d,!ht(i,e.memoizedState)&&(Xe=!0,k&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=v,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Du(e){var t=He(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ht(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function qs(e,t,a){var l=ue,n=He(),i=he;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var u=!ht((je||n).memoizedState,a);if(u&&(n.memoizedState=a,Xe=!0),n=n.queue,Lu(Qs.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Ge!==null&&Ge.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},Xs.bind(null,l,n,a,t),null),we===null)throw Error(c(349));i||(It&127)!==0||Gs(l,t,a)}return a}function Gs(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Ti(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Xs(e,t,a,l){t.value=a,t.getSnapshot=l,Vs(t)&&Zs(e)}function Qs(e,t,a){return a(function(){Vs(t)&&Zs(e)})}function Vs(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Zs(e){var t=Ga(e,2);t!==null&&ft(t,e,2)}function Uu(e){var t=nt();if(typeof e=="function"){var a=e;if(e=a(),Fa){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function Js(e,t,a,l){return e.baseState=a,Mu(e,je,typeof l=="function"?l:Pt)}function Rh(e,t,a,l,n){if(_i(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};U.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ks(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ks(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=U.T,u={};U.T=u;try{var d=a(n,l),v=U.S;v!==null&&v(u,d),$s(e,t,d)}catch(R){ku(e,t,R)}finally{i!==null&&u.types!==null&&(i.types=u.types),U.T=i}}else try{i=a(n,l),$s(e,t,i)}catch(R){ku(e,t,R)}}function $s(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ws(e,t,l)},function(l){return ku(e,t,l)}):Ws(e,t,a)}function Ws(e,t,a){t.status="fulfilled",t.value=a,Fs(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ks(e,a)))}function ku(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Fs(t),t=t.next;while(t!==l)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Is(e,t){return t}function Ps(e,t){if(he){var a=we.formState;if(a!==null){e:{var l=ue;if(he){if(Te){t:{for(var n=Te,i=Rt;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Te=_t(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=nt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},a.queue=l,a=yf.bind(null,ue,l),l.dispatch=a,l=Uu(!1),i=Gu.bind(null,ue,!1,l.queue),l=nt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Rh.bind(null,ue,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function ef(e){var t=He();return tf(t,je,e)}function tf(e,t,a){if(t=Mu(e,t,Is)[0],e=Ci(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bn(t)}catch(u){throw u===El?bi:u}else l=t;t=He();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Cl(9,{destroy:void 0},Ah.bind(null,n,a),null)),[l,i,e]}function Ah(e,t){e.action=t}function af(e){var t=He(),a=je;if(a!==null)return tf(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Ti(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function lf(){return He().memoizedState}function Ri(e,t,a,l){var n=nt();ue.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ai(e,t,a,l){var n=He();l=l===void 0?null:l;var i=n.memoizedState.inst;je!==null&&l!==null&&Nu(l,je.memoizedState.deps)?n.memoizedState=Cl(t,i,a,l):(ue.flags|=e,n.memoizedState=Cl(1|t,i,a,l))}function nf(e,t){Ri(8390656,8,e,t)}function Lu(e,t){Ai(2048,8,e,t)}function _h(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=Ti(),ue.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function rf(e){var t=He().memoizedState;return _h({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function uf(e,t){return Ai(4,2,e,t)}function cf(e,t){return Ai(4,4,e,t)}function of(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,a){a=a!=null?a.concat([e]):null,Ai(4,4,of.bind(null,t,e),a)}function Hu(){}function ff(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Nu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function df(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Nu(t,l[1]))return l[0];if(l=e(),Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function Bu(e,t,a){return a===void 0||(It&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=md(),ue.lanes|=e,za|=e,a)}function mf(e,t,a,l){return ht(a,t)?a:wl.current!==null?(e=Bu(e,a,l),ht(e,t)||(Xe=!0),e):(It&42)===0||(It&1073741824)!==0&&(me&261930)===0?(Xe=!0,e.memoizedState=a):(e=md(),ue.lanes|=e,za|=e,t)}function pf(e,t,a,l,n){var i=x.p;x.p=i!==0&&8>i?i:8;var u=U.T,d={};U.T=d,Gu(e,!1,t,a);try{var v=n(),R=U.S;if(R!==null&&R(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=Th(v,l);yn(e,t,k,St(e))}else yn(e,t,l,St(e))}catch(B){yn(e,t,{then:function(){},status:"rejected",reason:B},St())}finally{x.p=i,u!==null&&d.types!==null&&(u.types=d.types),U.T=u}}function Oh(){}function Yu(e,t,a,l){if(e.tag!==5)throw Error(c(476));var n=hf(e).queue;pf(e,n,t,Z,a===null?Oh:function(){return gf(e),a(l)})}function hf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gf(e){var t=hf(e);t.next===null&&(t=e.alternate.memoizedState),yn(e,t.next.queue,{},St())}function qu(){return Ie(kn)}function vf(){return He().memoizedState}function bf(){return He().memoizedState}function Mh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=ba(a);var l=ya(t,e,a);l!==null&&(ft(l,t,a),pn(l,t,a)),t={cache:gu()},e.payload=t;return}t=t.return}}function Dh(e,t,a){var l=St();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_i(e)?xf(t,a):(a=iu(e,t,a,l),a!==null&&(ft(a,e,l),Sf(a,t,l)))}function yf(e,t,a){var l=St();yn(e,t,a,l)}function yn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_i(e))xf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,d=i(u,a);if(n.hasEagerState=!0,n.eagerState=d,ht(d,u))return fi(e,t,n,0),we===null&&si(),!1}catch{}if(a=iu(e,t,n,l),a!==null)return ft(a,e,l),Sf(a,t,l),!0}return!1}function Gu(e,t,a,l){if(l={lane:2,revertLane:xc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_i(e)){if(t)throw Error(c(479))}else t=iu(e,a,l,2),t!==null&&ft(t,e,2)}function _i(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function xf(e,t){Tl=zi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Sf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wo(e,a)}}var xn={readContext:Ie,use:Ni,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};xn.useEffectEvent=Me;var jf={readContext:Ie,use:Ni,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:nf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ri(4194308,4,of.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){Ri(4,2,e,t)},useMemo:function(e,t){var a=nt();t=t===void 0?null:t;var l=e();if(Fa){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=nt();if(a!==void 0){var n=a(t);if(Fa){sa(!0);try{a(t)}finally{sa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Dh.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Uu(e);var t=e.queue,a=yf.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Hu,useDeferredValue:function(e,t){var a=nt();return Bu(a,e,t)},useTransition:function(){var e=Uu(!1);return e=pf.bind(null,ue,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ue,n=nt();if(he){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),we===null)throw Error(c(349));(me&127)!==0||Gs(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,nf(Qs.bind(null,l,i,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Xs.bind(null,l,i,a,t),null),a},useId:function(){var e=nt(),t=we.identifierPrefix;if(he){var a=qt,l=Yt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=wi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qu,useFormState:Ps,useActionState:Ps,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gu.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ou,useCacheRefresh:function(){return nt().memoizedState=Mh.bind(null,ue)},useEffectEvent:function(e){var t=nt(),a={impl:e};return t.memoizedState=a,function(){if((ye&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Ie,use:Ni,useCallback:ff,useContext:Ie,useEffect:Lu,useImperativeHandle:sf,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:df,useReducer:Ci,useRef:lf,useState:function(){return Ci(Pt)},useDebugValue:Hu,useDeferredValue:function(e,t){var a=He();return mf(a,je.memoizedState,e,t)},useTransition:function(){var e=Ci(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:qs,useId:vf,useHostTransitionStatus:qu,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var a=He();return Js(a,je,e,t)},useMemoCache:Ou,useCacheRefresh:bf};Xu.useEffectEvent=rf;var Ef={readContext:Ie,use:Ni,useCallback:ff,useContext:Ie,useEffect:Lu,useImperativeHandle:sf,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:df,useReducer:Du,useRef:lf,useState:function(){return Du(Pt)},useDebugValue:Hu,useDeferredValue:function(e,t){var a=He();return je===null?Bu(a,e,t):mf(a,je.memoizedState,e,t)},useTransition:function(){var e=Du(Pt)[0],t=He().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:qs,useId:vf,useHostTransitionStatus:qu,useFormState:af,useActionState:af,useOptimistic:function(e,t){var a=He();return je!==null?Js(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:bf};Ef.useEffectEvent=rf;function Qu(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vu={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=St(),n=ba(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ya(e,n,l),t!==null&&(ft(t,e,l),pn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),l=ba(a);l.tag=2,t!=null&&(l.callback=t),t=ya(e,l,a),t!==null&&(ft(t,e,a),pn(t,e,a))}};function zf(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!rn(a,l)||!rn(n,i):!0}function wf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Vu.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function Tf(e){oi(e)}function Nf(e){console.error(e)}function Cf(e){oi(e)}function Oi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Rf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Zu(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Oi(e,t)},a}function Af(e){return e=ba(e),e.tag=3,e}function _f(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Rf(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Rf(t,a,l),typeof n!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Uh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,n,!0),a=vt.current,a!==null){switch(a.tag){case 31:case 13:return At===null?Qi():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),vc(e,l,n)),!1;case 22:return a.flags|=65536,l===yi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),vc(e,l,n)),!1}throw Error(c(435,a.tag))}return vc(e,l,n),Qi(),!1}if(he)return t=vt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==fu&&(e=Error(c(422),{cause:l}),on(Tt(e,a)))):(l!==fu&&(t=Error(c(423),{cause:l}),on(Tt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Tt(l,a),n=Zu(e.stateNode,l,n),ju(e,n),De!==4&&(De=2)),!1;var i=Error(c(520),{cause:l});if(i=Tt(i,a),Cn===null?Cn=[i]:Cn.push(i),De!==4&&(De=2),t===null)return!0;l=Tt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Zu(a.stateNode,l,e),ju(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Af(n),_f(n,e,a,l),ju(a,n),!1}a=a.return}while(a!==null);return!1}var Ju=Error(c(461)),Xe=!1;function Pe(e,t,a,l){t.child=e===null?Ds(t,null,a,l):Wa(t,e.child,a,l)}function Of(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var d in l)d!=="ref"&&(u[d]=l[d])}else u=l;return Za(t),l=Cu(e,t,a,u,i,n),d=Ru(),e!==null&&!Xe?(Au(e,t,n),ea(e,t,n)):(he&&d&&ou(t),t.flags|=1,Pe(e,t,l,n),t.child)}function Mf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Df(e,t,i,l,n)):(e=mi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!tc(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:rn,a(u,l)&&e.ref===t.ref)return ea(e,t,n)}return t.flags|=1,e=Kt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Df(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(rn(i,l)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=l=i,tc(e,n))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,ea(e,t,n)}return Ku(e,t,a,l,n)}function Uf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return kf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vi(t,i!==null?i.cachePool:null),i!==null?Ls(t,i):zu(),Hs(t);else return l=t.lanes=536870912,kf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(vi(t,i.cachePool),Ls(t,i),Sa(),t.memoizedState=null):(e!==null&&vi(t,null),zu(),Sa());return Pe(e,t,n,a),t.child}function Sn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kf(e,t,a,l,n){var i=bu();return i=i===null?null:{parent:qe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&vi(t,null),zu(),Hs(t),e!==null&&xl(e,t,l,!0),t.childLanes=n,null}function Mi(e,t){return t=Ui({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lf(e,t,a){return Wa(t,e.child,null,a),e=Mi(t,t.pendingProps),e.flags|=2,bt(t),t.memoizedState=null,e}function kh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(he){if(l.mode==="hidden")return e=Mi(t,l),t.lanes=536870912,Sn(null,e);if(Tu(t),(e=Te)?(e=$d(e,Rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=ys(e),a.return=t,t.child=a,Fe=t,Te=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Mi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Tu(t),n)if(t.flags&256)t.flags&=-257,t=Lf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Xe||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Xe||n){if(l=we,l!==null&&(u=To(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ga(e,u),ft(l,e,u),Ju;Qi(),t=Lf(e,t,a)}else e=i.treeContext,Te=_t(u.nextSibling),Fe=t,he=!0,pa=null,Rt=!1,e!==null&&js(t,e),t=Mi(t,l),t.flags|=4096;return t}return e=Kt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ku(e,t,a,l,n){return Za(t),a=Cu(e,t,a,l,void 0,n),l=Ru(),e!==null&&!Xe?(Au(e,t,n),ea(e,t,n)):(he&&l&&ou(t),t.flags|=1,Pe(e,t,a,n),t.child)}function Hf(e,t,a,l,n,i){return Za(t),t.updateQueue=null,a=Ys(t,l,a,n),Bs(e),l=Ru(),e!==null&&!Xe?(Au(e,t,i),ea(e,t,i)):(he&&l&&ou(t),t.flags|=1,Pe(e,t,a,i),t.child)}function Bf(e,t,a,l,n){if(Za(t),t.stateNode===null){var i=gl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ie(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},xu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ie(u):gl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Qu(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Vu.enqueueReplaceState(i,i.state,null),gn(t,l,i,n),hn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var d=t.memoizedProps,v=Ia(a,d);i.props=v;var R=i.context,k=a.contextType;u=gl,typeof k=="object"&&k!==null&&(u=Ie(k));var B=a.getDerivedStateFromProps;k=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,k||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||R!==u)&&wf(t,i,l,u),va=!1;var A=t.memoizedState;i.state=A,gn(t,l,i,n),hn(),R=t.memoizedState,d||A!==R||va?(typeof B=="function"&&(Qu(t,a,B,l),R=t.memoizedState),(v=va||zf(t,a,v,l,A,R,u))?(k||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),i.props=l,i.state=R,i.context=u,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Su(e,t),u=t.memoizedProps,k=Ia(a,u),i.props=k,B=t.pendingProps,A=i.context,R=a.contextType,v=gl,typeof R=="object"&&R!==null&&(v=Ie(R)),d=a.getDerivedStateFromProps,(R=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==B||A!==v)&&wf(t,i,l,v),va=!1,A=t.memoizedState,i.state=A,gn(t,l,i,n),hn();var O=t.memoizedState;u!==B||A!==O||va||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof d=="function"&&(Qu(t,a,d,l),O=t.memoizedState),(k=va||zf(t,a,k,l,A,O,v)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(R||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=v,l=k):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Di(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Wa(t,e.child,null,n),t.child=Wa(t,null,a,n)):Pe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ea(e,t,n),e}function Yf(e,t,a,l){return Qa(),t.flags|=256,Pe(e,t,a,l),t.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:Cs()}}function Fu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function qf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(he){if(n?xa(t):Sa(),(e=Te)?(e=$d(e,Rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Yt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},a=ys(e),a.return=t,t.child=a,Fe=t,Te=null)):e=null,e===null)throw ha(t);return Mc(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,n?(Sa(),n=t.mode,d=Ui({mode:"hidden",children:d},n),l=Xa(l,n,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Wu(a),l.childLanes=Fu(e,u,a),t.memoizedState=$u,Sn(null,l)):(xa(t),Iu(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(i)t.flags&256?(xa(t),t.flags&=-257,t=Pu(e,t,a)):t.memoizedState!==null?(Sa(),t.child=e.child,t.flags|=128,t=null):(Sa(),d=l.fallback,n=t.mode,l=Ui({mode:"visible",children:l.children},n),d=Xa(d,n,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Wa(t,e.child,null,a),l=t.child,l.memoizedState=Wu(a),l.childLanes=Fu(e,u,a),t.memoizedState=$u,t=Sn(null,l));else if(xa(t),Mc(d)){if(u=d.nextSibling&&d.nextSibling.dataset,u)var R=u.dgst;u=R,l=Error(c(419)),l.stack="",l.digest=u,on({value:l,source:null,stack:null}),t=Pu(e,t,a)}else if(Xe||xl(e,t,a,!1),u=(a&e.childLanes)!==0,Xe||u){if(u=we,u!==null&&(l=To(u,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,Ga(e,l),ft(u,e,l),Ju;Oc(d)||Qi(),t=Pu(e,t,a)}else Oc(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Te=_t(d.nextSibling),Fe=t,he=!0,pa=null,Rt=!1,e!==null&&js(t,e),t=Iu(t,l.children),t.flags|=4096);return t}return n?(Sa(),d=l.fallback,n=t.mode,v=e.child,R=v.sibling,l=Kt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,R!==null?d=Kt(R,d):(d=Xa(d,n,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,Sn(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Wu(a):(n=d.cachePool,n!==null?(v=qe._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=Cs(),d={baseLanes:d.baseLanes|a,cachePool:n}),l.memoizedState=d,l.childLanes=Fu(e,u,a),t.memoizedState=$u,Sn(e.child,l)):(xa(t),a=e.child,e=a.sibling,a=Kt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Iu(e,t){return t=Ui({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ui(e,t){return e=gt(22,e,null,t),e.lanes=0,e}function Pu(e,t,a){return Wa(t,e.child,null,a),e=Iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),pu(e.return,t,a)}function ec(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Xf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Le.current,d=(u&2)!==0;if(d?(u=u&1|2,t.flags|=128):u&=1,J(Le,u),Pe(e,t,l,a),l=he?cn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gf(e,a,t);else if(e.tag===19)Gf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ei(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ec(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ei(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ec(t,!0,a,null,i,l);break;case"together":ec(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ea(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),za|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Kt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Kt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function tc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Lh(e,t,a){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),ga(t,qe,e.memoizedState.cache),Qa();break;case 27:case 5:Zl(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:ga(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qf(e,t,a):(xa(t),e=ea(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Xf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),J(Le,Le.current),l)break;return null;case 22:return t.lanes=0,Uf(e,t,a,t.pendingProps);case 24:ga(t,qe,e.memoizedState.cache)}return ea(e,t,a)}function Qf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!tc(e,a)&&(t.flags&128)===0)return Xe=!1,Lh(e,t,a);Xe=(e.flags&131072)!==0}else Xe=!1,he&&(t.flags&1048576)!==0&&Ss(t,cn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")ru(e)?(l=Ia(e,l),t.tag=1,t=Bf(null,t,e,l,a)):(t.tag=0,t=Ku(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===K){t.tag=11,t=Of(null,t,e,l,a);break e}else if(n===G){t.tag=14,t=Mf(null,t,e,l,a);break e}}throw t=Ye(e)||e,Error(c(306,t,""))}}return t;case 0:return Ku(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ia(l,t.pendingProps),Bf(e,t,l,n,a);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(c(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Su(e,t),gn(t,l,null,a);var u=t.memoizedState;if(l=u.cache,ga(t,qe,l),l!==i.cache&&hu(t,[qe],a,!0),hn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Yf(e,t,l,a);break e}else if(l!==n){n=Tt(Error(c(424)),t),on(n),t=Yf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Te=_t(e.firstChild),Fe=t,he=!0,pa=null,Rt=!0,a=Ds(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qa(),l===n){t=ea(e,t,a);break e}Pe(e,t,l,a)}t=t.child}return t;case 26:return Di(e,t),e===null?(a=tm(t.type,null,t.pendingProps,null))?t.memoizedState=a:he||(a=t.type,e=t.pendingProps,l=Fi(le.current).createElement(a),l[We]=t,l[it]=e,et(l,a,e),Ze(l),t.stateNode=l):t.memoizedState=tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Zl(t),e===null&&he&&(l=t.stateNode=Id(t.type,t.pendingProps,le.current),Fe=t,Rt=!0,n=Te,Ra(t.type)?(Dc=n,Te=_t(l.firstChild)):Te=n),Pe(e,t,t.pendingProps.children,a),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&he&&((n=l=Te)&&(l=mg(l,t.type,t.pendingProps,Rt),l!==null?(t.stateNode=l,Fe=t,Te=_t(l.firstChild),Rt=!1,n=!0):n=!1),n||ha(t)),Zl(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Rc(n,i)?l=null:u!==null&&Rc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Cu(e,t,Ch,null,null,a),kn._currentValue=n),Di(e,t),Pe(e,t,l,a),t.child;case 6:return e===null&&he&&((e=a=Te)&&(a=pg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Fe=t,Te=null,e=!0):e=!1),e||ha(t)),null;case 13:return qf(e,t,a);case 4:return lt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Wa(t,null,l,a):Pe(e,t,l,a),t.child;case 11:return Of(e,t,t.type,t.pendingProps,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ga(t,t.type,l.value),Pe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Za(t),n=Ie(n),l=l(n),t.flags|=1,Pe(e,t,l,a),t.child;case 14:return Mf(e,t,t.type,t.pendingProps,a);case 15:return Df(e,t,t.type,t.pendingProps,a);case 19:return Xf(e,t,a);case 31:return kh(e,t,a);case 22:return Uf(e,t,a,t.pendingProps);case 24:return Za(t),l=Ie(qe),e===null?(n=bu(),n===null&&(n=we,i=gu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},xu(t),ga(t,qe,n)):((e.lanes&a)!==0&&(Su(e,t),gn(t,null,null,a),hn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ga(t,qe,l)):(l=i.cache,ga(t,qe,l),l!==n.cache&&hu(t,[qe],a,!0))),Pe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ta(e){e.flags|=4}function ac(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(vd())e.flags|=8192;else throw $a=yi,yu}else e.flags&=-16777217}function Vf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rm(t))if(vd())e.flags|=8192;else throw $a=yi,yu}function ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Eo():536870912,e.lanes|=t,Ol|=t)}function jn(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Hh(e,t,a){var l=t.pendingProps;switch(su(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ft(qe),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,du())),Ne(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ta(t),i!==null?(Ne(t),Vf(t,i)):(Ne(t),ac(t,n,null,l,a))):i?i!==e.memoizedState?(ta(t),Ne(t),Vf(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ta(t),Ne(t),ac(t,n,e,l,a)),null;case 27:if(Jn(t),a=le.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}e=W.current,yl(t)?Es(t):(e=Id(n,l,a),t.stateNode=e,ta(t))}return Ne(t),null;case 5:if(Jn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(!l){if(t.stateNode===null)throw Error(c(166));return Ne(t),null}if(i=W.current,yl(t))Es(t);else{var u=Fi(le.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[We]=t,i[it]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(et(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ta(t)}}return Ne(t),ac(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ta(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(c(166));if(e=le.current,yl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||qd(e.nodeValue,a)),e||ha(t,!0)}else e=Fi(e).createTextNode(l),e[We]=t,t.stateNode=e}return Ne(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=yl(t),a!==null){if(e===null){if(!l)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else a=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(bt(t),t):(bt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=yl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[We]=t}else Qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(bt(t),t):(bt(t),null)}return bt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ki(t,t.updateQueue),Ne(t),null);case 4:return ke(),e===null&&zc(t.stateNode.containerInfo),Ne(t),null;case 10:return Ft(t.type),Ne(t),null;case 19:if(Y(Le),l=t.memoizedState,l===null)return Ne(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)jn(l,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ei(e),i!==null){for(t.flags|=128,jn(l,!1),e=i.updateQueue,t.updateQueue=e,ki(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bs(a,e),a=a.sibling;return J(Le,Le.current&1|2),he&&$t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&dt()>qi&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ei(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,ki(t,e),jn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!he)return Ne(t),null}else 2*dt()-l.renderingStartTime>qi&&a!==536870912&&(t.flags|=128,n=!0,jn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=dt(),e.sibling=null,a=Le.current,J(Le,n?a&1|2:a&1),he&&$t(t,l.treeForkCount),e):(Ne(t),null);case 22:case 23:return bt(t),wu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),a=t.updateQueue,a!==null&&ki(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Y(Ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ft(qe),Ne(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Bh(e,t){switch(su(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ft(qe),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jn(t),null;case 31:if(t.memoizedState!==null){if(bt(t),t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Le),null;case 4:return ke(),null;case 10:return Ft(t.type),null;case 22:case 23:return bt(t),wu(),e!==null&&Y(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ft(qe),null;case 25:return null;default:return null}}function Zf(e,t){switch(su(t),t.tag){case 3:Ft(qe),ke();break;case 26:case 27:case 5:Jn(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&bt(t);break;case 13:bt(t);break;case 19:Y(Le);break;case 10:Ft(t.type);break;case 22:case 23:bt(t),wu(),e!==null&&Y(Ja);break;case 24:Ft(qe)}}function En(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(d){Se(t,t.return,d)}}function ja(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,d=u.destroy;if(d!==void 0){u.destroy=void 0,n=t;var v=a,R=d;try{R()}catch(k){Se(n,v,k)}}}l=l.next}while(l!==i)}}catch(k){Se(t,t.return,k)}}function Jf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ks(t,a)}catch(l){Se(e,e.return,l)}}}function Kf(e,t,a){a.props=Ia(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function zn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Se(e,t,n)}}function Gt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Se(e,t,n)}else a.current=null}function $f(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Se(e,e.return,n)}}function lc(e,t,a){try{var l=e.stateNode;ug(l,e.type,a,t),l[it]=t}catch(n){Se(e,e.return,n)}}function Wf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Zt));else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ic(e,t,a),e=e.sibling;e!==null;)ic(e,t,a),e=e.sibling}function Li(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Li(e,t,a),e=e.sibling;e!==null;)Li(e,t,a),e=e.sibling}function Ff(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,l,a),t[We]=e,t[it]=a}catch(i){Se(e,e.return,i)}}var aa=!1,Qe=!1,rc=!1,If=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Yh(e,t){if(e=e.containerInfo,Nc=nr,e=os(e),Pr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,d=-1,v=-1,R=0,k=0,B=e,A=null;t:for(;;){for(var O;B!==a||n!==0&&B.nodeType!==3||(d=u+n),B!==i||l!==0&&B.nodeType!==3||(v=u+l),B.nodeType===3&&(u+=B.nodeValue.length),(O=B.firstChild)!==null;)A=B,B=O;for(;;){if(B===e)break t;if(A===a&&++R===n&&(d=u),A===i&&++k===l&&(v=u),(O=B.nextSibling)!==null)break;B=A,A=B.parentNode}B=O}a=d===-1||v===-1?null:{start:d,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:e,selectionRange:a},nr=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=Ia(a.type,n);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Se(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)_c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function Pf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),l&4&&En(5,a);break;case 1:if(na(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){Se(a,a.return,u)}else{var n=Ia(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Se(a,a.return,u)}}l&64&&Jf(a),l&512&&zn(a,a.return);break;case 3:if(na(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ks(e,t)}catch(u){Se(a,a.return,u)}}break;case 27:t===null&&l&4&&Ff(a);case 26:case 5:na(e,a),t===null&&l&4&&$f(a),l&512&&zn(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),l&4&&ad(e,a);break;case 13:na(e,a),l&4&&ld(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$h.bind(null,a),hg(e,a))));break;case 22:if(l=a.memoizedState!==null||aa,!l){t=t!==null&&t.memoizedState!==null||Qe,n=aa;var i=Qe;aa=l,(Qe=t)&&!i?ia(e,a,(a.subtreeFlags&8772)!==0):na(e,a),aa=n,Qe=i}break;case 30:break;default:na(e,a)}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&kr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,ut=!1;function la(e,t,a){for(a=a.child;a!==null;)td(e,t,a),a=a.sibling}function td(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:Qe||Gt(a,t),la(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Gt(a,t);var l=_e,n=ut;Ra(a.type)&&(_e=a.stateNode,ut=!1),la(e,t,a),Mn(a.stateNode),_e=l,ut=n;break;case 5:Qe||Gt(a,t);case 6:if(l=_e,n=ut,_e=null,la(e,t,a),_e=l,ut=n,_e!==null)if(ut)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(a.stateNode)}catch(i){Se(a,t,i)}else try{_e.removeChild(a.stateNode)}catch(i){Se(a,t,i)}break;case 18:_e!==null&&(ut?(e=_e,Jd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yl(e)):Jd(_e,a.stateNode));break;case 4:l=_e,n=ut,_e=a.stateNode.containerInfo,ut=!0,la(e,t,a),_e=l,ut=n;break;case 0:case 11:case 14:case 15:ja(2,a,t),Qe||ja(4,a,t),la(e,t,a);break;case 1:Qe||(Gt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Kf(a,t,l)),la(e,t,a);break;case 21:la(e,t,a);break;case 22:Qe=(l=Qe)||a.memoizedState!==null,la(e,t,a),Qe=l;break;default:la(e,t,a)}}function ad(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yl(e)}catch(a){Se(t,t.return,a)}}}function ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yl(e)}catch(a){Se(t,t.return,a)}}function qh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new If),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new If),t;default:throw Error(c(435,e.tag))}}function Hi(e,t){var a=qh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Wh.bind(null,e,l);l.then(n,n)}})}function ct(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 27:if(Ra(d.type)){_e=d.stateNode,ut=!1;break e}break;case 5:_e=d.stateNode,ut=!1;break e;case 3:case 4:_e=d.stateNode.containerInfo,ut=!0;break e}d=d.return}if(_e===null)throw Error(c(160));td(i,u,n),_e=null,ut=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)nd(t,e),t=t.sibling}var Ut=null;function nd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ot(e),l&4&&(ja(3,e,e.return),En(3,e),ja(5,e,e.return));break;case 1:ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ut;if(ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Wl]||i[We]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),et(i,l,a),i[We]=e,Ze(i),l=i;break e;case"link":var u=nm("link","href",n).get(l+(a.href||""));if(u){for(var d=0;d<u.length;d++)if(i=u[d],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;case"meta":if(u=nm("meta","content",n).get(l+(a.content||""))){for(d=0;d<u.length;d++)if(i=u[d],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(d,1);break t}}i=n.createElement(l),et(i,l,a),n.head.appendChild(i);break;default:throw Error(c(468,l))}i[We]=e,Ze(i),l=i}e.stateNode=l}else im(n,e.type,e.stateNode);else e.stateNode=lm(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?im(n,e.type,e.stateNode):lm(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),a!==null&&l&4&&lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ct(t,e),ot(e),l&512&&(Qe||a===null||Gt(a,a.return)),e.flags&32){n=e.stateNode;try{ol(n,"")}catch($){Se(e,e.return,$)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,lc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(rc=!0);break;case 6:if(ct(t,e),ot(e),l&4){if(e.stateNode===null)throw Error(c(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch($){Se(e,e.return,$)}}break;case 3:if(er=null,n=Ut,Ut=Ii(t.containerInfo),ct(t,e),Ut=n,ot(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Yl(t.containerInfo)}catch($){Se(e,e.return,$)}rc&&(rc=!1,id(e));break;case 4:l=Ut,Ut=Ii(e.stateNode.containerInfo),ct(t,e),ot(e),Ut=l;break;case 12:ct(t,e),ot(e);break;case 31:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 13:ct(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yi=dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,R=aa,k=Qe;if(aa=R||n,Qe=k||v,ct(t,e),Qe=k,aa=R,ot(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||aa||Qe||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{d=v.stateNode;var B=v.memoizedProps.style,A=B!=null&&B.hasOwnProperty("display")?B.display:null;d.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch($){Se(v,v.return,$)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch($){Se(v,v.return,$)}}}else if(t.tag===18){if(a===null){v=t;try{var O=v.stateNode;n?Kd(O,!0):Kd(v.stateNode,!1)}catch($){Se(v,v.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hi(e,a))));break;case 19:ct(t,e),ot(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hi(e,l)));break;case 30:break;case 21:break;default:ct(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Wf(l)){a=l;break}l=l.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var n=a.stateNode,i=nc(e);Li(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(ol(u,""),a.flags&=-33);var d=nc(e);Li(e,d,u);break;case 3:case 4:var v=a.stateNode.containerInfo,R=nc(e);ic(e,R,v);break;default:throw Error(c(161))}}catch(k){Se(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function id(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;id(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Pf(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),Pa(t);break;case 1:Gt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Kf(t,t.return,a),Pa(t);break;case 27:Mn(t.stateNode);case 26:case 5:Gt(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ia(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ia(n,i,a),En(4,i);break;case 1:if(ia(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(R){Se(l,l.return,R)}if(l=i,n=l.updateQueue,n!==null){var d=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Us(v[n],d)}catch(R){Se(l,l.return,R)}}a&&u&64&&Jf(i),zn(i,i.return);break;case 27:Ff(i);case 26:case 5:ia(n,i,a),a&&l===null&&u&4&&$f(i),zn(i,i.return);break;case 12:ia(n,i,a);break;case 31:ia(n,i,a),a&&u&4&&ad(n,i);break;case 13:ia(n,i,a),a&&u&4&&ld(n,i);break;case 22:i.memoizedState===null&&ia(n,i,a),zn(i,i.return);break;case 30:break;default:ia(n,i,a)}t=t.sibling}}function uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&sn(a))}function cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rd(e,t,a,l),t=t.sibling}function rd(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),n&2048&&En(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sn(e)));break;case 12:if(n&2048){kt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,d=i.onPostCommit;typeof d=="function"&&d(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Se(t,t.return,v)}}else kt(e,t,a,l);break;case 31:kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?kt(e,t,a,l):wn(e,t):i._visibility&2?kt(e,t,a,l):(i._visibility|=2,Rl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&uc(u,t);break;case 24:kt(e,t,a,l),n&2048&&cc(t.alternate,t);break;default:kt(e,t,a,l)}}function Rl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,d=a,v=l,R=u.flags;switch(u.tag){case 0:case 11:case 15:Rl(i,u,d,v,n),En(8,u);break;case 23:break;case 22:var k=u.stateNode;u.memoizedState!==null?k._visibility&2?Rl(i,u,d,v,n):wn(i,u):(k._visibility|=2,Rl(i,u,d,v,n)),n&&R&2048&&uc(u.alternate,u);break;case 24:Rl(i,u,d,v,n),n&&R&2048&&cc(u.alternate,u);break;default:Rl(i,u,d,v,n)}t=t.sibling}}function wn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:wn(a,l),n&2048&&uc(l.alternate,l);break;case 24:wn(a,l),n&2048&&cc(l.alternate,l);break;default:wn(a,l)}t=t.sibling}}var Tn=8192;function Al(e,t,a){if(e.subtreeFlags&Tn)for(e=e.child;e!==null;)ud(e,t,a),e=e.sibling}function ud(e,t,a){switch(e.tag){case 26:Al(e,t,a),e.flags&Tn&&e.memoizedState!==null&&Ng(a,Ut,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,a);break;case 3:case 4:var l=Ut;Ut=Ii(e.stateNode.containerInfo),Al(e,t,a),Ut=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Tn,Tn=16777216,Al(e,t,a),Tn=l):Al(e,t,a));break;default:Al(e,t,a)}}function cd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,sd(l,e)}cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)od(e),e=e.sibling}function od(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):Nn(e);break;default:Nn(e)}}function Bi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Je=l,sd(l,e)}cd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Bi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function sd(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:sn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Je=l;else e:for(a=e;Je!==null;){l=Je;var n=l.sibling,i=l.return;if(ed(l),l===a){Je=null;break e}if(n!==null){n.return=i,Je=n;break e}Je=i}}}var Gh={getCacheForType:function(e){var t=Ie(qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(qe).controller.signal}},Xh=typeof WeakMap=="function"?WeakMap:Map,ye=0,we=null,fe=null,me=0,xe=0,yt=null,Ea=!1,_l=!1,oc=!1,ra=0,De=0,za=0,el=0,sc=0,xt=0,Ol=0,Cn=null,st=null,fc=!1,Yi=0,fd=0,qi=1/0,Gi=null,wa=null,Ve=0,Ta=null,Ml=null,ua=0,dc=0,mc=null,dd=null,Rn=0,pc=null;function St(){return(ye&2)!==0&&me!==0?me&-me:U.T!==null?xc():No()}function md(){if(xt===0)if((me&536870912)===0||he){var e=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),xt=e}else xt=536870912;return e=vt.current,e!==null&&(e.flags|=32),xt}function ft(e,t,a){(e===we&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Na(e,me,xt,!1)),$l(e,a),((ye&2)===0||e!==we)&&(e===we&&((ye&2)===0&&(el|=a),De===4&&Na(e,me,xt,!1)),Xt(e))}function pd(e,t,a){if((ye&6)!==0)throw Error(c(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Kl(e,t),n=l?Zh(e,t):gc(e,t,!0),i=l;do{if(n===0){_l&&!l&&Na(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Qh(a)){n=gc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var d=e;n=Cn;var v=d.current.memoizedState.isDehydrated;if(v&&(Dl(d,u).flags|=256),u=gc(d,u,!1),u!==2){if(oc&&!v){d.errorRecoveryDisabledLanes|=i,el|=i,n=4;break e}i=st,st=n,i!==null&&(st===null?st=i:st.push.apply(st,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Na(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Na(l,t,xt,!Ea);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=Yi+300-dt(),10<n)){if(Na(l,t,xt,!Ea),In(l,0,!0)!==0)break e;ua=t,l.timeoutHandle=Vd(hd.bind(null,l,a,st,Gi,fc,t,xt,el,Ol,Ea,i,"Throttled",-0,0),n);break e}hd(l,a,st,Gi,fc,t,xt,el,Ol,Ea,i,null,-0,0)}}break}while(!0);Xt(e)}function hd(e,t,a,l,n,i,u,d,v,R,k,B,A,O){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},ud(t,i,B);var $=(i&62914560)===i?Yi-dt():(i&4194048)===i?fd-dt():0;if($=Cg(B,$),$!==null){ua=i,e.cancelPendingCommit=$(Ed.bind(null,e,t,i,a,l,n,u,d,v,k,B,null,A,O)),Na(e,i,u,!R);return}}Ed(e,t,i,a,l,n,u,d,v)}function Qh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Na(e,t,a,l){t&=~sc,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&zo(e,a,t)}function Xi(){return(ye&6)===0?(An(0),!1):!0}function hc(){if(fe!==null){if(xe===0)var e=fe.return;else e=fe,Wt=Va=null,_u(e),zl=null,dn=0,e=fe;for(;e!==null;)Zf(e.alternate,e),e=e.return;fe=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,hc(),we=e,fe=a=Kt(e.current,null),me=t,xe=0,yt=null,Ea=!1,_l=Kl(e,t),oc=!1,Ol=xt=sc=el=za=De=0,st=Cn=null,fc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return ra=t,si(),a}function gd(e,t){ue=null,U.H=xn,t===El||t===bi?(t=_s(),xe=3):t===yu?(t=_s(),xe=4):xe=t===Ju?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,fe===null&&(De=1,Oi(e,Tt(t,e.current)))}function vd(){var e=vt.current;return e===null?!0:(me&4194048)===me?At===null:(me&62914560)===me||(me&536870912)!==0?e===At:!1}function bd(){var e=U.H;return U.H=xn,e===null?xn:e}function yd(){var e=U.A;return U.A=Gh,e}function Qi(){De=4,Ea||(me&4194048)!==me&&vt.current!==null||(_l=!0),(za&134217727)===0&&(el&134217727)===0||we===null||Na(we,me,xt,!1)}function gc(e,t,a){var l=ye;ye|=2;var n=bd(),i=yd();(we!==e||me!==t)&&(Gi=null,Dl(e,t)),t=!1;var u=De;e:do try{if(xe!==0&&fe!==null){var d=fe,v=yt;switch(xe){case 8:hc(),u=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(t=!0);var R=xe;if(xe=0,yt=null,Ul(e,d,v,R),a&&_l){u=0;break e}break;default:R=xe,xe=0,yt=null,Ul(e,d,v,R)}}Vh(),u=De;break}catch(k){gd(e,k)}while(!0);return t&&e.shellSuspendCounter++,Wt=Va=null,ye=l,U.H=n,U.A=i,fe===null&&(we=null,me=0,si()),u}function Vh(){for(;fe!==null;)xd(fe)}function Zh(e,t){var a=ye;ye|=2;var l=bd(),n=yd();we!==e||me!==t?(Gi=null,qi=dt()+500,Dl(e,t)):_l=Kl(e,t);e:do try{if(xe!==0&&fe!==null){t=fe;var i=yt;t:switch(xe){case 1:xe=0,yt=null,Ul(e,t,i,1);break;case 2:case 9:if(Rs(i)){xe=0,yt=null,Sd(t);break}t=function(){xe!==2&&xe!==9||we!==e||(xe=7),Xt(e)},i.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:Rs(i)?(xe=0,yt=null,Sd(t)):(xe=0,yt=null,Ul(e,t,i,7));break;case 5:var u=null;switch(fe.tag){case 26:u=fe.memoizedState;case 5:case 27:var d=fe;if(u?rm(u):d.stateNode.complete){xe=0,yt=null;var v=d.sibling;if(v!==null)fe=v;else{var R=d.return;R!==null?(fe=R,Vi(R)):fe=null}break t}}xe=0,yt=null,Ul(e,t,i,5);break;case 6:xe=0,yt=null,Ul(e,t,i,6);break;case 8:hc(),De=6;break e;default:throw Error(c(462))}}Jh();break}catch(k){gd(e,k)}while(!0);return Wt=Va=null,U.H=l,U.A=n,ye=a,fe!==null?0:(we=null,me=0,si(),De)}function Jh(){for(;fe!==null&&!gp();)xd(fe)}function xd(e){var t=Qf(e.alternate,e,ra);e.memoizedProps=e.pendingProps,t===null?Vi(e):fe=t}function Sd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Hf(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Hf(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:_u(t);default:Zf(a,t),t=fe=bs(t,ra),t=Qf(a,t,ra)}e.memoizedProps=e.pendingProps,t===null?Vi(e):fe=t}function Ul(e,t,a,l){Wt=Va=null,_u(t),zl=null,dn=0;var n=t.return;try{if(Uh(e,n,t,a,me)){De=1,Oi(e,Tt(a,e.current)),fe=null;return}}catch(i){if(n!==null)throw fe=n,i;De=1,Oi(e,Tt(a,e.current)),fe=null;return}t.flags&32768?(he||l===1?e=!0:_l||(me&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),jd(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){jd(t,Ea);return}e=t.return;var a=Hh(t.alternate,t,ra);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);De===0&&(De=5)}function jd(e,t){do{var a=Bh(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);De=6,fe=null}function Ed(e,t,a,l,n,i,u,d,v){e.cancelPendingCommit=null;do Zi();while(Ve!==0);if((ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=nu,Tp(e,a,i,u,d,v),e===we&&(fe=we=null,me=0),Ml=t,Ta=e,ua=a,dc=i,mc=n,dd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fh(Kn,function(){return Cd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,n=x.p,x.p=2,u=ye,ye|=4;try{Yh(e,t,a)}finally{ye=u,x.p=n,U.T=l}}Ve=1,zd(),wd(),Td()}}function zd(){if(Ve===1){Ve=0;var e=Ta,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var l=x.p;x.p=2;var n=ye;ye|=4;try{nd(t,e);var i=Cc,u=os(e.containerInfo),d=i.focusedElem,v=i.selectionRange;if(u!==d&&d&&d.ownerDocument&&cs(d.ownerDocument.documentElement,d)){if(v!==null&&Pr(d)){var R=v.start,k=v.end;if(k===void 0&&(k=R),"selectionStart"in d)d.selectionStart=R,d.selectionEnd=Math.min(k,d.value.length);else{var B=d.ownerDocument||document,A=B&&B.defaultView||window;if(A.getSelection){var O=A.getSelection(),$=d.textContent.length,P=Math.min(v.start,$),ze=v.end===void 0?P:Math.min(v.end,$);!O.extend&&P>ze&&(u=ze,ze=P,P=u);var T=us(d,P),S=us(d,ze);if(T&&S&&(O.rangeCount!==1||O.anchorNode!==T.node||O.anchorOffset!==T.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var N=B.createRange();N.setStart(T.node,T.offset),O.removeAllRanges(),P>ze?(O.addRange(N),O.extend(S.node,S.offset)):(N.setEnd(S.node,S.offset),O.addRange(N))}}}}for(B=[],O=d;O=O.parentNode;)O.nodeType===1&&B.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<B.length;d++){var L=B[d];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}nr=!!Nc,Cc=Nc=null}finally{ye=n,x.p=l,U.T=a}}e.current=t,Ve=2}}function wd(){if(Ve===2){Ve=0;var e=Ta,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var l=x.p;x.p=2;var n=ye;ye|=4;try{Pf(e,t.alternate,t)}finally{ye=n,x.p=l,U.T=a}}Ve=3}}function Td(){if(Ve===4||Ve===3){Ve=0,vp();var e=Ta,t=Ml,a=ua,l=dd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Ml=Ta=null,Nd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(wa=null),Dr(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=U.T,n=x.p,x.p=2,U.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var d=l[u];i(d.value,{componentStack:d.stack})}}finally{U.T=t,x.p=n}}(ua&3)!==0&&Zi(),Xt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===pc?Rn++:(Rn=0,pc=e):Rn=0,An(0)}}function Nd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sn(t)))}function Zi(){return zd(),wd(),Td(),Cd()}function Cd(){if(Ve!==5)return!1;var e=Ta,t=dc;dc=0;var a=Dr(ua),l=U.T,n=x.p;try{x.p=32>a?32:a,U.T=null,a=mc,mc=null;var i=Ta,u=ua;if(Ve=0,Ml=Ta=null,ua=0,(ye&6)!==0)throw Error(c(331));var d=ye;if(ye|=4,od(i.current),rd(i,i.current,u,a),ye=d,An(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Jl,i)}catch{}return!0}finally{x.p=n,U.T=l,Nd(e,t)}}function Rd(e,t,a){t=Tt(a,t),t=Zu(e.stateNode,t,2),e=ya(e,t,2),e!==null&&($l(e,2),Xt(e))}function Se(e,t,a){if(e.tag===3)Rd(e,e,a);else for(;t!==null;){if(t.tag===3){Rd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=Tt(a,e),a=Af(2),l=ya(t,a,2),l!==null&&(_f(a,l,t,e),$l(l,2),Xt(l));break}}t=t.return}}function vc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Xh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(oc=!0,n.add(a),e=Kh.bind(null,e,t,a),t.then(e,e))}function Kh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(me&a)===a&&(De===4||De===3&&(me&62914560)===me&&300>dt()-Yi?(ye&2)===0&&Dl(e,0):sc|=a,Ol===me&&(Ol=0)),Xt(e)}function Ad(e,t){t===0&&(t=Eo()),e=Ga(e,t),e!==null&&($l(e,t),Xt(e))}function $h(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ad(e,a)}function Wh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(t),Ad(e,a)}function Fh(e,t){return Ar(e,t)}var Ji=null,kl=null,bc=!1,Ki=!1,yc=!1,Ca=0;function Xt(e){e!==kl&&e.next===null&&(kl===null?Ji=kl=e:kl=kl.next=e),Ki=!0,bc||(bc=!0,Ph())}function An(e,t){if(!yc&&Ki){yc=!0;do for(var a=!1,l=Ji;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,d=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(u&~d),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Dd(l,i))}else i=me,i=In(l,l===we?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Kl(l,i)||(a=!0,Dd(l,i));l=l.next}while(a);yc=!1}}function Ih(){_d()}function _d(){Ki=bc=!1;var e=0;Ca!==0&&og()&&(e=Ca);for(var t=dt(),a=null,l=Ji;l!==null;){var n=l.next,i=Od(l,t);i===0?(l.next=null,a===null?Ji=n:a.next=n,n===null&&(kl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ki=!0)),l=n}Ve!==0&&Ve!==5||An(e),Ca!==0&&(Ca=0)}function Od(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-pt(i),d=1<<u,v=n[u];v===-1?((d&a)===0||(d&l)!==0)&&(n[u]=wp(d,t)):v<=t&&(e.expiredLanes|=d),i&=~d}if(t=we,a=me,a=In(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&_r(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&_r(l),Dr(a)){case 2:case 8:a=So;break;case 32:a=Kn;break;case 268435456:a=jo;break;default:a=Kn}return l=Md.bind(null,e),a=Ar(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&_r(l),e.callbackPriority=2,e.callbackNode=null,2}function Md(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zi()&&e.callbackNode!==a)return null;var l=me;return l=In(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(pd(e,l,t),Od(e,dt()),e.callbackNode!=null&&e.callbackNode===a?Md.bind(null,e):null)}function Dd(e,t){if(Zi())return null;pd(e,t,!0)}function Ph(){fg(function(){(ye&6)!==0?Ar(xo,Ih):_d()})}function xc(){if(Ca===0){var e=Sl;e===0&&(e=$n,$n<<=1,($n&261888)===0&&($n=256)),Ca=e}return Ca}function Ud(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ai(""+e)}function kd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function eg(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Ud((n[it]||null).action),u=l.submitter;u&&(t=(t=u[it]||null)?Ud(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var d=new ri("action","action",null,l,n);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var v=u?kd(n,u):new FormData(n);Yu(a,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(d.preventDefault(),v=u?kd(n,u):new FormData(n),Yu(a,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var Sc=0;Sc<lu.length;Sc++){var jc=lu[Sc],tg=jc.toLowerCase(),ag=jc[0].toUpperCase()+jc.slice(1);Dt(tg,"on"+ag)}Dt(ds,"onAnimationEnd"),Dt(ms,"onAnimationIteration"),Dt(ps,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(bh,"onTransitionRun"),Dt(yh,"onTransitionStart"),Dt(xh,"onTransitionCancel"),Dt(hs,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ha("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));function Ld(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var d=l[u],v=d.instance,R=d.currentTarget;if(d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=R;try{i(n)}catch(k){oi(k)}n.currentTarget=null,i=v}else for(u=0;u<l.length;u++){if(d=l[u],v=d.instance,R=d.currentTarget,d=d.listener,v!==i&&n.isPropagationStopped())break e;i=d,n.currentTarget=R;try{i(n)}catch(k){oi(k)}n.currentTarget=null,i=v}}}}function de(e,t){var a=t[Ur];a===void 0&&(a=t[Ur]=new Set);var l=e+"__bubble";a.has(l)||(Hd(t,e,2,!1),a.add(l))}function Ec(e,t,a){var l=0;t&&(l|=4),Hd(a,e,l,t)}var $i="_reactListening"+Math.random().toString(36).slice(2);function zc(e){if(!e[$i]){e[$i]=!0,Ao.forEach(function(a){a!=="selectionchange"&&(lg.has(a)||Ec(a,!1,e),Ec(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$i]||(t[$i]=!0,Ec("selectionchange",!1,t))}}function Hd(e,t,a,l){switch(mm(t)){case 2:var n=_g;break;case 8:n=Og;break;default:n=Bc}a=n.bind(null,t,a,e),n=void 0,!Qr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function wc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var d=l.stateNode.containerInfo;if(d===n)break;if(u===4)for(u=l.return;u!==null;){var v=u.tag;if((v===3||v===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;d!==null;){if(u=nl(d),u===null)return;if(v=u.tag,v===5||v===6||v===26||v===27){l=i=u;continue e}d=d.parentNode}}l=l.return}Go(function(){var R=i,k=Gr(a),B=[];e:{var A=gs.get(e);if(A!==void 0){var O=ri,$=e;switch(e){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":O=Wp;break;case"focusin":$="focus",O=Kr;break;case"focusout":$="blur",O=Kr;break;case"beforeblur":case"afterblur":O=Kr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Pp;break;case ds:case ms:case ps:O=qp;break;case hs:O=th;break;case"scroll":case"scrollend":O=kp;break;case"wheel":O=lh;break;case"copy":case"cut":case"paste":O=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Jo;break;case"toggle":case"beforetoggle":O=ih}var P=(t&4)!==0,ze=!P&&(e==="scroll"||e==="scrollend"),T=P?A!==null?A+"Capture":null:A;P=[];for(var S=R,N;S!==null;){var L=S;if(N=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||N===null||T===null||(L=Il(S,T),L!=null&&P.push(On(S,L,N))),ze)break;S=S.return}0<P.length&&(A=new O(A,$,null,a,k),B.push({event:A,listeners:P}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",A&&a!==qr&&($=a.relatedTarget||a.fromElement)&&(nl($)||$[ll]))break e;if((O||A)&&(A=k.window===k?k:(A=k.ownerDocument)?A.defaultView||A.parentWindow:window,O?($=a.relatedTarget||a.toElement,O=R,$=$?nl($):null,$!==null&&(ze=p($),P=$.tag,$!==ze||P!==5&&P!==27&&P!==6)&&($=null)):(O=null,$=R),O!==$)){if(P=Vo,L="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(P=Jo,L="onPointerLeave",T="onPointerEnter",S="pointer"),ze=O==null?A:Fl(O),N=$==null?A:Fl($),A=new P(L,S+"leave",O,a,k),A.target=ze,A.relatedTarget=N,L=null,nl(k)===R&&(P=new P(T,S+"enter",$,a,k),P.target=N,P.relatedTarget=ze,L=P),ze=L,O&&$)t:{for(P=ng,T=O,S=$,N=0,L=T;L;L=P(L))N++;L=0;for(var I=S;I;I=P(I))L++;for(;0<N-L;)T=P(T),N--;for(;0<L-N;)S=P(S),L--;for(;N--;){if(T===S||S!==null&&T===S.alternate){P=T;break t}T=P(T),S=P(S)}P=null}else P=null;O!==null&&Bd(B,A,O,P,!1),$!==null&&ze!==null&&Bd(B,ze,$,P,!0)}}e:{if(A=R?Fl(R):window,O=A.nodeName&&A.nodeName.toLowerCase(),O==="select"||O==="input"&&A.type==="file")var ve=ts;else if(Po(A))if(as)ve=hh;else{ve=mh;var F=dh}else O=A.nodeName,!O||O.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?R&&Yr(R.elementType)&&(ve=ts):ve=ph;if(ve&&(ve=ve(e,R))){es(B,ve,a,k);break e}F&&F(e,A,R),e==="focusout"&&R&&A.type==="number"&&R.memoizedProps.value!=null&&Br(A,"number",A.value)}switch(F=R?Fl(R):window,e){case"focusin":(Po(F)||F.contentEditable==="true")&&(ml=F,eu=R,un=null);break;case"focusout":un=eu=ml=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,ss(B,a,k);break;case"selectionchange":if(vh)break;case"keydown":case"keyup":ss(B,a,k)}var ce;if(Wr)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else dl?Fo(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Ko&&a.locale!=="ko"&&(dl||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&dl&&(ce=Xo()):(da=k,Vr="value"in da?da.value:da.textContent,dl=!0)),F=Wi(R,pe),0<F.length&&(pe=new Zo(pe,e,null,a,k),B.push({event:pe,listeners:F}),ce?pe.data=ce:(ce=Io(a),ce!==null&&(pe.data=ce)))),(ce=uh?ch(e,a):oh(e,a))&&(pe=Wi(R,"onBeforeInput"),0<pe.length&&(F=new Zo("onBeforeInput","beforeinput",null,a,k),B.push({event:F,listeners:pe}),F.data=ce)),eg(B,e,R,a,k)}Ld(B,t)})}function On(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Wi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Il(e,a),n!=null&&l.unshift(On(e,n,i)),n=Il(e,t),n!=null&&l.push(On(e,n,i))),e.tag===3)return l;e=e.return}return[]}function ng(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var d=a,v=d.alternate,R=d.stateNode;if(d=d.tag,v!==null&&v===l)break;d!==5&&d!==26&&d!==27||R===null||(v=R,n?(R=Il(a,i),R!=null&&u.unshift(On(a,R,v))):n||(R=Il(a,i),R!=null&&u.push(On(a,R,v)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var ig=/\r\n?/g,rg=/\u0000|\uFFFD/g;function Yd(e){return(typeof e=="string"?e:""+e).replace(ig,`
`).replace(rg,"")}function qd(e,t){return t=Yd(t),Yd(e)===t}function Ee(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ol(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ol(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,a,l);break;case"style":Yo(e,l,i);break;case"data":if(t!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ee(e,t,"name",n.name,n,null),Ee(e,t,"formEncType",n.formEncType,n,null),Ee(e,t,"formMethod",n.formMethod,n,null),Ee(e,t,"formTarget",n.formTarget,n,null)):(Ee(e,t,"encType",n.encType,n,null),Ee(e,t,"method",n.method,n,null),Ee(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ai(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ai(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":de("beforetoggle",e),de("toggle",e),Pn(e,"popover",l);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dp.get(a)||a,Pn(e,a,l))}}function Tc(e,t,a,l,n,i){switch(a){case"style":Yo(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ol(e,l):(typeof l=="number"||typeof l=="bigint")&&ol(e,""+l);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_o.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[it]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Pn(e,a,l)}}}function et(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,i,u,a,null)}}n&&Ee(e,t,"srcSet",a.srcSet,a,null),l&&Ee(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var d=i=u=n=null,v=null,R=null;for(l in a)if(a.hasOwnProperty(l)){var k=a[l];if(k!=null)switch(l){case"name":n=k;break;case"type":u=k;break;case"checked":v=k;break;case"defaultChecked":R=k;break;case"value":i=k;break;case"defaultValue":d=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:Ee(e,t,l,k,a,null)}}ko(e,i,d,v,R,u,n,!1);return;case"select":de("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":i=d;break;case"defaultValue":u=d;break;case"multiple":l=d;default:Ee(e,t,n,d,a,null)}t=i,a=u,e.multiple=!!l,t!=null?cl(e,!!l,t,!1):a!=null&&cl(e,!!l,a,!0);return;case"textarea":de("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(d=a[u],d!=null))switch(u){case"value":l=d;break;case"defaultValue":n=d;break;case"children":i=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ee(e,t,u,d,a,null)}Ho(e,l,n,i);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ee(e,t,v,l,a,null));return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(l=0;l<_n.length;l++)de(_n[l],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ee(e,t,R,l,a,null)}return;default:if(Yr(t)){for(k in a)a.hasOwnProperty(k)&&(l=a[k],l!==void 0&&Tc(e,t,k,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&Ee(e,t,d,l,a,null))}function ug(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,d=null,v=null,R=null,k=null;for(O in a){var B=a[O];if(a.hasOwnProperty(O)&&B!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":v=B;default:l.hasOwnProperty(O)||Ee(e,t,O,null,l,B)}}for(var A in l){var O=l[A];if(B=a[A],l.hasOwnProperty(A)&&(O!=null||B!=null))switch(A){case"type":i=O;break;case"name":n=O;break;case"checked":R=O;break;case"defaultChecked":k=O;break;case"value":u=O;break;case"defaultValue":d=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:O!==B&&Ee(e,t,A,O,l,B)}}Hr(e,u,d,v,R,k,i,n);return;case"select":O=u=d=A=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":O=v;default:l.hasOwnProperty(i)||Ee(e,t,i,null,l,v)}for(n in l)if(i=l[n],v=a[n],l.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":A=i;break;case"defaultValue":d=i;break;case"multiple":u=i;default:i!==v&&Ee(e,t,n,i,l,v)}t=d,a=u,l=O,A!=null?cl(e,!!a,A,!1):!!l!=!!a&&(t!=null?cl(e,!!a,t,!0):cl(e,!!a,a?[]:"",!1));return;case"textarea":O=A=null;for(d in a)if(n=a[d],a.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ee(e,t,d,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":A=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==i&&Ee(e,t,u,n,l,i)}Lo(e,A,O);return;case"option":for(var $ in a)A=a[$],a.hasOwnProperty($)&&A!=null&&!l.hasOwnProperty($)&&($==="selected"?e.selected=!1:Ee(e,t,$,null,l,A));for(v in l)A=l[v],O=a[v],l.hasOwnProperty(v)&&A!==O&&(A!=null||O!=null)&&(v==="selected"?e.selected=A&&typeof A!="function"&&typeof A!="symbol":Ee(e,t,v,A,l,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)A=a[P],a.hasOwnProperty(P)&&A!=null&&!l.hasOwnProperty(P)&&Ee(e,t,P,null,l,A);for(R in l)if(A=l[R],O=a[R],l.hasOwnProperty(R)&&A!==O&&(A!=null||O!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:Ee(e,t,R,A,l,O)}return;default:if(Yr(t)){for(var ze in a)A=a[ze],a.hasOwnProperty(ze)&&A!==void 0&&!l.hasOwnProperty(ze)&&Tc(e,t,ze,void 0,l,A);for(k in l)A=l[k],O=a[k],!l.hasOwnProperty(k)||A===O||A===void 0&&O===void 0||Tc(e,t,k,A,l,O);return}}for(var T in a)A=a[T],a.hasOwnProperty(T)&&A!=null&&!l.hasOwnProperty(T)&&Ee(e,t,T,null,l,A);for(B in l)A=l[B],O=a[B],!l.hasOwnProperty(B)||A===O||A==null&&O==null||Ee(e,t,B,A,l,O)}function Gd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,d=n.duration;if(i&&d&&Gd(u)){for(u=0,d=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],R=v.startTime;if(R>d)break;var k=v.transferSize,B=v.initiatorType;k&&Gd(B)&&(v=v.responseEnd,u+=k*(v<d?1:(d-R)/(v-R)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nc=null,Cc=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function Xd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function og(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,sg=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(dg)}:Vd;function dg(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Jd(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Yl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,d=i.nodeName;i[Wl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Mn(e.ownerDocument.body);a=n}while(a);Yl(t)}function Kd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function _c(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_c(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=_t(e.nextSibling),e===null)break}return null}function pg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_t(e.nextSibling),e===null))return null;return e}function $d(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_t(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$?"||e.data==="$~"}function Mc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function hg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Dc=null;function Wd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return _t(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Id(e,t,a){switch(t=Fi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);kr(e)}var Ot=new Map,Pd=new Set;function Ii(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=x.d;x.d={f:gg,r:vg,D:bg,C:yg,L:xg,m:Sg,X:Eg,S:jg,M:zg};function gg(){var e=ca.f(),t=Xi();return e||t}function vg(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?gf(t):ca.r(e)}var Ll=typeof document>"u"?null:document;function em(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var n=zt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Pd.has(n)||(Pd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function bg(e){ca.D(e),em("dns-prefetch",e,null)}function yg(e,t){ca.C(e,t),em("preconnect",e,t)}function xg(e,t,a){ca.L(e,t,a);var l=Ll;if(l&&e&&t){var n='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+zt(a.imageSizes)+'"]')):n+='[href="'+zt(e)+'"]';var i=n;switch(t){case"style":i=Hl(e);break;case"script":i=Bl(e)}Ot.has(i)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ot.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Dn(i))||t==="script"&&l.querySelector(Un(i))||(t=l.createElement("link"),et(t,"link",e),Ze(t),l.head.appendChild(t)))}}function Sg(e,t){ca.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Bl(e)}if(!Ot.has(i)&&(e=w({rel:"modulepreload",href:e},t),Ot.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Un(i)))return}l=a.createElement("link"),et(l,"link",e),Ze(l),a.head.appendChild(l)}}}function jg(e,t,a){ca.S(e,t,a);var l=Ll;if(l&&e){var n=rl(l).hoistableStyles,i=Hl(e);t=t||"default";var u=n.get(i);if(!u){var d={loading:0,preload:null};if(u=l.querySelector(Dn(i)))d.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ot.get(i))&&Uc(e,a);var v=u=l.createElement("link");Ze(v),et(v,"link",e),v._p=new Promise(function(R,k){v.onload=R,v.onerror=k}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Pi(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:d},n.set(i,u)}}}function Eg(e,t){ca.X(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=w({src:e,async:!0},t),(t=Ot.get(n))&&kc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function zg(e,t){ca.M(e,t);var a=Ll;if(a&&e){var l=rl(a).hoistableScripts,n=Bl(e),i=l.get(n);i||(i=a.querySelector(Un(n)),i||(e=w({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&kc(e,t),i=a.createElement("script"),Ze(i),et(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function tm(e,t,a,l){var n=(n=le.current)?Ii(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Hl(a.href),a=rl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hl(a.href);var i=rl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Dn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Ot.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ot.set(e,a),i||wg(n,e,a,u.state))),t&&l===null)throw Error(c(528,""));return u}if(t&&l!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bl(a),a=rl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Hl(e){return'href="'+zt(e)+'"'}function Dn(e){return'link[rel="stylesheet"]['+e+"]"}function am(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function wg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),et(t,"link",a),Ze(t),e.head.appendChild(t))}function Bl(e){return'[src="'+zt(e)+'"]'}function Un(e){return"script[async]"+e}function lm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+zt(a.href)+'"]');if(l)return t.instance=l,Ze(l),l;var n=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),et(l,"style",n),Pi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Hl(a.href);var i=e.querySelector(Dn(n));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;l=am(a),(n=Ot.get(n))&&Uc(l,n),i=(e.ownerDocument||e).createElement("link"),Ze(i);var u=i;return u._p=new Promise(function(d,v){u.onload=d,u.onerror=v}),et(i,"link",l),t.state.loading|=4,Pi(i,a.precedence,e),t.instance=i;case"script":return i=Bl(a.src),(n=e.querySelector(Un(i)))?(t.instance=n,Ze(n),n):(l=a,(n=Ot.get(i))&&(l=w({},a),kc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),et(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Pi(l,a.precedence,e));return t.instance}function Pi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var d=l[u];if(d.dataset.precedence===t)i=d;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var er=null;function nm(e,t,a){if(er===null){var l=new Map,n=er=new Map;n.set(a,l)}else n=er,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Wl]||i[We]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var d=l.get(u);d?d.push(i):l.set(u,[i])}}return l}function im(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Tg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ng(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Hl(l.href),i=t.querySelector(Dn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ze(i);return}i=t.ownerDocument||t,l=am(l),(n=Ot.get(n))&&Uc(l,n),i=i.createElement("link"),Ze(i);var u=i;u._p=new Promise(function(d,v){u.onload=d,u.onerror=v}),et(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Lc=0;function Cg(e,t){return e.stylesheets&&e.count===0&&lr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Lc===0&&(Lc=62500*cg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Lc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ar=null;function lr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ar=new Map,t.forEach(Rg,e),ar=null,tr.call(e))}function Rg(e,t){if(!(t.state.loading&4)){var a=ar.get(e);if(a)var l=a.get(null);else{a=new Map,ar.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=tr.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var kn={$$typeof:H,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ag(e,t,a,l,n,i,u,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.hiddenUpdates=Or(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function um(e,t,a,l,n,i,u,d,v,R,k,B){return e=new Ag(e,t,a,u,v,R,k,B,d),t=1,i===!0&&(t|=24),i=gt(3,null,null,t),e.current=i,i.stateNode=e,t=gu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},xu(i),e}function cm(e){return e?(e=gl,e):gl}function om(e,t,a,l,n,i){n=cm(n),l.context===null?l.context=n:l.pendingContext=n,l=ba(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(e,l,t),a!==null&&(ft(a,e,t),pn(a,e,t))}function sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Hc(e,t){sm(e,t),(e=e.alternate)&&sm(e,t)}function fm(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&ft(t,e,67108864),Hc(e,67108864)}}function dm(e){if(e.tag===13||e.tag===31){var t=St();t=Mr(t);var a=Ga(e,t);a!==null&&ft(a,e,t),Hc(e,t)}}var nr=!0;function _g(e,t,a,l){var n=U.T;U.T=null;var i=x.p;try{x.p=2,Bc(e,t,a,l)}finally{x.p=i,U.T=n}}function Og(e,t,a,l){var n=U.T;U.T=null;var i=x.p;try{x.p=8,Bc(e,t,a,l)}finally{x.p=i,U.T=n}}function Bc(e,t,a,l){if(nr){var n=Yc(l);if(n===null)wc(e,t,l,ir,a),pm(e,l);else if(Dg(n,e,t,a,l))l.stopPropagation();else if(pm(e,l),t&4&&-1<Mg.indexOf(e)){for(;n!==null;){var i=il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=La(i.pendingLanes);if(u!==0){var d=i;for(d.pendingLanes|=2,d.entangledLanes|=2;u;){var v=1<<31-pt(u);d.entanglements[1]|=v,u&=~v}Xt(i),(ye&6)===0&&(qi=dt()+500,An(0))}}break;case 31:case 13:d=Ga(i,2),d!==null&&ft(d,i,2),Xi(),Hc(i,2)}if(i=Yc(l),i===null&&wc(e,t,l,ir,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else wc(e,t,l,null,a)}}function Yc(e){return e=Gr(e),qc(e)}var ir=null;function qc(e){if(ir=null,e=nl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ir=e,null}function mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bp()){case xo:return 2;case So:return 8;case Kn:case yp:return 32;case jo:return 268435456;default:return 32}default:return 32}}var Gc=!1,Aa=null,_a=null,Oa=null,Ln=new Map,Hn=new Map,Ma=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pm(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Bn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Dg(e,t,a,l,n){switch(t){case"focusin":return Aa=Bn(Aa,e,t,a,l,n),!0;case"dragenter":return _a=Bn(_a,e,t,a,l,n),!0;case"mouseover":return Oa=Bn(Oa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Ln.set(i,Bn(Ln.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Hn.set(i,Bn(Hn.get(i)||null,e,t,a,l,n)),!0}return!1}function hm(e){var t=nl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Co(e.priority,function(){dm(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,Co(e.priority,function(){dm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Yc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);qr=l,a.target.dispatchEvent(l),qr=null}else return t=il(a),t!==null&&fm(t),e.blockedOn=a,!1;t.shift()}return!0}function gm(e,t,a){rr(e)&&a.delete(t)}function Ug(){Gc=!1,Aa!==null&&rr(Aa)&&(Aa=null),_a!==null&&rr(_a)&&(_a=null),Oa!==null&&rr(Oa)&&(Oa=null),Ln.forEach(gm),Hn.forEach(gm)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Gc||(Gc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ug)))}var cr=null;function vm(e){cr!==e&&(cr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cr===e&&(cr=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(qc(l||a)===null)continue;break}var i=il(a);i!==null&&(e.splice(t,3),t-=3,Yu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Yl(e){function t(v){return ur(v,e)}Aa!==null&&ur(Aa,e),_a!==null&&ur(_a,e),Oa!==null&&ur(Oa,e),Ln.forEach(t),Hn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)hm(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[it]||null;if(typeof i=="function")u||vm(a);else if(u){var d=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[it]||null)d=u.formAction;else if(qc(n)!==null)continue}else d=u.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),vm(a)}}}function bm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Xc(e){this._internalRoot=e}or.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,l=St();om(a,l,e,t,null,null)},or.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;om(e.current,2,null,e,null,null),Xi(),t[ll]=null}};function or(e){this._internalRoot=e}or.prototype.unstable_scheduleHydration=function(e){if(e){var t=No();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&hm(e)}};var ym=s.version;if(ym!=="19.2.7")throw Error(c(527,ym,"19.2.7"));x.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var kg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Jl=sr.inject(kg),mt=sr}catch{}}return qn.createRoot=function(e,t){if(!m(e))throw Error(c(299));var a=!1,l="",n=Tf,i=Nf,u=Cf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=um(e,1,!1,null,null,a,l,null,n,i,u,bm),e[ll]=t.current,zc(e),new Xc(t)},qn.hydrateRoot=function(e,t,a){if(!m(e))throw Error(c(299));var l=!1,n="",i=Tf,u=Nf,d=Cf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=um(e,1,!0,t,a??null,l,n,v,i,u,d,bm),t.context=cm(null),a=t.current,l=St(),l=Mr(l),n=ba(l),n.callback=null,ya(a,n,l),a=l,t.current.lanes=a,$l(t,a),Xt(t),e[ll]=t.current,zc(e),new or(t)},qn.version="19.2.7",qn}var Rm;function Zg(){if(Rm)return Zc.exports;Rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Zc.exports=Vg(),Zc.exports}var Jg=Zg();var co=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,qm=/^[\\/]{2}/;function Kg(r,s){return s+r.replace(/\\/g,"/")}var Am="popstate";function _m(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function $g(r={}){function s(c,m){let p=m.state?.masked,{pathname:g,search:j,hash:y}=p||c.location;return ao("",{pathname:g,search:j,hash:y},m.state&&m.state.usr||null,m.state&&m.state.key||"default",p?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function f(c,m){return typeof m=="string"?m:Xn(m)}return Fg(s,f,null,r)}function Oe(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Mt(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Wg(){return Math.random().toString(36).substring(2,10)}function Om(r,s){return{usr:r.state,key:r.key,idx:s,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function ao(r,s,f=null,c,m){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?Xl(s):s,state:f,key:s&&s.key||c||Wg(),mask:m}}function Xn({pathname:r="/",search:s="",hash:f=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),f&&f!=="#"&&(r+=f.charAt(0)==="#"?f:"#"+f),r}function Xl(r){let s={};if(r){let f=r.indexOf("#");f>=0&&(s.hash=r.substring(f),r=r.substring(0,f));let c=r.indexOf("?");c>=0&&(s.search=r.substring(c),r=r.substring(0,c)),r&&(s.pathname=r)}return s}function Fg(r,s,f,c={}){let{window:m=document.defaultView,v5Compat:p=!1}=c,g=m.history,j="POP",y=null,h=C();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function C(){return(g.state||{idx:null}).idx}function w(){j="POP";let q=C(),_=q==null?null:q-h;h=q,y&&y({action:j,location:Q.location,delta:_})}function D(q,_){j="PUSH";let z=_m(q)?q:ao(Q.location,q,_);h=C()+1;let H=Om(z,h),K=Q.createHref(z.mask||z);try{g.pushState(H,"",K)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;m.location.assign(K)}p&&y&&y({action:j,location:Q.location,delta:1})}function M(q,_){j="REPLACE";let z=_m(q)?q:ao(Q.location,q,_);h=C();let H=Om(z,h),K=Q.createHref(z.mask||z);g.replaceState(H,"",K),p&&y&&y({action:j,location:Q.location,delta:0})}function X(q){return Ig(m,q)}let Q={get action(){return j},get location(){return r(m,g)},listen(q){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(Am,w),y=q,()=>{m.removeEventListener(Am,w),y=null}},createHref(q){return s(m,q)},createURL:X,encodeLocation(q){let _=X(q);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:D,replace:M,go(q){return g.go(q)}};return Q}function Ig(r,s,f=!1){let c="http://localhost";r&&(c=r.location.origin!=="null"?r.location.origin:r.location.href),Oe(c,"No window.location.(origin|href) available to create URL");let m=typeof s=="string"?s:Xn(s);return m=m.replace(/ $/,"%20"),!f&&qm.test(m)&&(m=c+m),new URL(m,c)}function Gm(r,s,f="/"){return Pg(r,s,f,!1)}function Pg(r,s,f,c,m){let p=typeof s=="string"?Xl(s):s,g=oa(p.pathname||"/",f);if(g==null)return null;let j=e0(r),y=null,h=f0(g);for(let C=0;y==null&&C<j.length;++C)y=s0(j[C],h,c);return y}function e0(r){let s=Xm(r);return t0(s),s}function Xm(r,s=[],f=[],c="",m=!1){let p=(g,j,y=m,h)=>{let C={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:j,route:g};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(c)&&y)return;Oe(C.relativePath.startsWith(c),`Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(c.length)}let w=Lt([c,C.relativePath]),D=f.concat(C);g.children&&g.children.length>0&&(Oe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Xm(g.children,s,D,w,y)),!(g.path==null&&!g.index)&&s.push({path:w,score:c0(w,g.index),routesMeta:D.map((M,X)=>{let[Q,q]=Zm(M.relativePath,M.caseSensitive,X===D.length-1);return{...M,matcher:Q,compiledParams:q}})})};return r.forEach((g,j)=>{if(g.path===""||!g.path?.includes("?"))p(g,j);else for(let y of Qm(g.path))p(g,j,!0,y)}),s}function Qm(r){let s=r.split("/");if(s.length===0)return[];let[f,...c]=s,m=f.endsWith("?"),p=f.replace(/\?$/,"");if(c.length===0)return m?[p,""]:[p];let g=Qm(c.join("/")),j=[];return j.push(...g.map(y=>y===""?p:[p,y].join("/"))),m&&j.push(...g),j.map(y=>r.startsWith("/")&&y===""?"/":y)}function t0(r){r.sort((s,f)=>s.score!==f.score?f.score-s.score:o0(s.routesMeta.map(c=>c.childrenIndex),f.routesMeta.map(c=>c.childrenIndex)))}var a0=/^:[\w-]+$/,l0=3,n0=2,i0=1,r0=10,u0=-2,Mm=r=>r==="*";function c0(r,s){let f=r.split("/"),c=f.length;return f.some(Mm)&&(c+=u0),s&&(c+=n0),f.filter(m=>!Mm(m)).reduce((m,p)=>m+(a0.test(p)?l0:p===""?i0:r0),c)}function o0(r,s){return r.length===s.length&&r.slice(0,-1).every((c,m)=>c===s[m])?r[r.length-1]-s[s.length-1]:0}function s0(r,s,f=!1){let{routesMeta:c}=r,m={},p="/",g=[];for(let j=0;j<c.length;++j){let y=c[j],h=j===c.length-1,C=p==="/"?s:s.slice(p.length)||"/",w={path:y.relativePath,caseSensitive:y.caseSensitive,end:h},D=y.matcher&&y.compiledParams?Vm(w,C,y.matcher,y.compiledParams):vr(w,C),M=y.route;if(!D&&h&&f&&!c[c.length-1].route.index&&(D=vr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},C)),!D)return null;Object.assign(m,D.params),g.push({params:m,pathname:Lt([p,D.pathname]),pathnameBase:p0(Lt([p,D.pathnameBase])),route:M}),D.pathnameBase!=="/"&&(p=Lt([p,D.pathnameBase]))}return g}function vr(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[f,c]=Zm(r.path,r.caseSensitive,r.end);return Vm(r,s,f,c)}function Vm(r,s,f,c){let m=s.match(f);if(!m)return null;let p=m[0],g=p.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:c.reduce((h,{paramName:C,isOptional:w},D)=>{if(C==="*"){let X=j[D]||"";g=p.slice(0,p.length-X.length).replace(/(.)\/+$/,"$1")}const M=j[D];return w&&!M?h[C]=void 0:h[C]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:g,pattern:r}}function Zm(r,s=!1,f=!0){Mt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],m="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,j,y,h,C)=>{if(c.push({paramName:j,isOptional:y!=null}),y){let w=C.charAt(h+g.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(c.push({paramName:"*"}),m+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":r!==""&&r!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,s?void 0:"i"),c]}function f0(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Mt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function oa(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let f=s.endsWith("/")?s.length-1:s.length,c=r.charAt(f);return c&&c!=="/"?null:r.slice(f)||"/"}function d0(r,s="/"){let{pathname:f,search:c="",hash:m=""}=typeof r=="string"?Xl(r):r,p;return f?(f=Jm(f),f.startsWith("/")?p=Dm(f.substring(1),"/"):p=Dm(f,s)):p=s,{pathname:p,search:h0(c),hash:g0(m)}}function Dm(r,s){let f=br(s).split("/");return r.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Wc(r,s,f,c){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function m0(r){return r.filter((s,f)=>f===0||s.route.path&&s.route.path.length>0)}function oo(r){let s=m0(r);return s.map((f,c)=>c===s.length-1?f.pathname:f.pathnameBase)}function jr(r,s,f,c=!1){let m;typeof r=="string"?m=Xl(r):(m={...r},Oe(!m.pathname||!m.pathname.includes("?"),Wc("?","pathname","search",m)),Oe(!m.pathname||!m.pathname.includes("#"),Wc("#","pathname","hash",m)),Oe(!m.search||!m.search.includes("#"),Wc("#","search","hash",m)));let p=r===""||m.pathname==="",g=p?"/":m.pathname,j;if(g==null)j=f;else{let w=s.length-1;if(!c&&g.startsWith("..")){let D=g.split("/");for(;D[0]==="..";)D.shift(),w-=1;m.pathname=D.join("/")}j=w>=0?s[w]:"/"}let y=d0(m,j),h=g&&g!=="/"&&g.endsWith("/"),C=(p||g===".")&&f.endsWith("/");return!y.pathname.endsWith("/")&&(h||C)&&(y.pathname+="/"),y}var Jm=r=>r.replace(/[\\/]{2,}/g,"/"),Lt=r=>Jm(r.join("/")),br=r=>r.replace(/\/+$/,""),p0=r=>br(r).replace(/^\/*/,"/"),h0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,g0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,v0=class{constructor(r,s,f,c=!1){this.status=r,this.statusText=s||"",this.internal=c,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function b0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function y0(r){let s=r.map(f=>f.route.path).filter(Boolean);return Lt(s)||"/"}var Km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $m(r,s){let f=r;if(typeof f!="string"||!co.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let c=f,m=!1;if(Km)try{let p=new URL(window.location.href),g=qm.test(f)?new URL(Kg(f,p.protocol)):new URL(f),j=oa(g.pathname,s);g.origin===p.origin&&j!=null?f=j+g.search+g.hash:m=!0}catch{Mt(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Wm=["POST","PUT","PATCH","DELETE"];new Set(Wm);var x0=["GET",...Wm];new Set(x0);var S0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function j0(r){try{return S0.includes(new URL(r).protocol)}catch{return!1}}var Ql=b.createContext(null);Ql.displayName="DataRouter";var Er=b.createContext(null);Er.displayName="DataRouterState";var Fm=b.createContext(!1);function E0(){return b.useContext(Fm)}var Im=b.createContext({isTransitioning:!1});Im.displayName="ViewTransition";var z0=b.createContext(new Map);z0.displayName="Fetchers";var w0=b.createContext(null);w0.displayName="Await";var jt=b.createContext(null);jt.displayName="Navigation";var Qn=b.createContext(null);Qn.displayName="Location";var Ht=b.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var so=b.createContext(null);so.displayName="RouteError";var Pm="REACT_ROUTER_ERROR",T0="REDIRECT",N0="ROUTE_ERROR_RESPONSE";function C0(r){if(r.startsWith(`${Pm}:${T0}:{`))try{let s=JSON.parse(r.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function R0(r){if(r.startsWith(`${Pm}:${N0}:{`))try{let s=JSON.parse(r.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new v0(s.status,s.statusText,s.data)}catch{}}function A0(r,{relative:s}={}){Oe(Vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:c}=b.useContext(jt),{hash:m,pathname:p,search:g}=Vn(r,{relative:s}),j=p;return f!=="/"&&(j=p==="/"?f:Lt([f,p])),c.createHref({pathname:j,search:g,hash:m})}function Vl(){return b.useContext(Qn)!=null}function Bt(){return Oe(Vl(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Qn).location}var ep="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tp(r){b.useContext(jt).static||b.useLayoutEffect(r)}function fo(){let{isDataRoute:r}=b.useContext(Ht);return r?V0():_0()}function _0(){Oe(Vl(),"useNavigate() may be used only in the context of a <Router> component.");let r=b.useContext(Ql),{basename:s,navigator:f}=b.useContext(jt),{matches:c}=b.useContext(Ht),{pathname:m}=Bt(),p=JSON.stringify(oo(c)),g=b.useRef(!1);return tp(()=>{g.current=!0}),b.useCallback((y,h={})=>{if(Mt(g.current,ep),!g.current)return;if(typeof y=="number"){f.go(y);return}let C=jr(y,JSON.parse(p),m,h.relative==="path");r==null&&s!=="/"&&(C.pathname=C.pathname==="/"?s:Lt([s,C.pathname])),(h.replace?f.replace:f.push)(C,h.state,h)},[s,f,p,m,r])}var O0=b.createContext(null);function M0(r){let s=b.useContext(Ht).outlet;return b.useMemo(()=>s&&b.createElement(O0.Provider,{value:r},s),[s,r])}function Vn(r,{relative:s}={}){let{matches:f}=b.useContext(Ht),{pathname:c}=Bt(),m=JSON.stringify(oo(f));return b.useMemo(()=>jr(r,JSON.parse(m),c,s==="path"),[r,m,c,s])}function D0(r,s){return ap(r,s)}function ap(r,s,f){Oe(Vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=b.useContext(jt),{matches:m}=b.useContext(Ht),p=m[m.length-1],g=p?p.params:{},j=p?p.pathname:"/",y=p?p.pathnameBase:"/",h=p&&p.route;{let q=h&&h.path||"";np(j,!h||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let C=Bt(),w;if(s){let q=typeof s=="string"?Xl(s):s;Oe(y==="/"||q.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),w=q}else w=C;let D=w.pathname||"/",M=D;if(y!=="/"){let q=y.replace(/^\//,"").split("/");M="/"+D.replace(/^\//,"").split("/").slice(q.length).join("/")}let X=f&&f.state.matches.length?f.state.matches.map(q=>Object.assign(q,{route:f.manifest[q.route.id]||q.route})):Gm(r,{pathname:M});Mt(h||X!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Mt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=B0(X&&X.map(q=>Object.assign({},q,{params:Object.assign({},g,q.params),pathname:Lt([y,c.encodeLocation?c.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:Lt([y,c.encodeLocation?c.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),m,f);return s&&Q?b.createElement(Qn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...w},navigationType:"POP"}},Q):Q}function U0(){let r=Q0(),s=b0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),f=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},s),f?b.createElement("pre",{style:m},f):null,g)}var k0=b.createElement(U0,null),lp=class extends b.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.onError?this.props.onError(r,s):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const f=R0(r.digest);f&&(r=f)}let s=r!==void 0?b.createElement(Ht.Provider,{value:this.props.routeContext},b.createElement(so.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?b.createElement(L0,{error:r},s):s}};lp.contextType=Fm;var Fc=new WeakMap;function L0({children:r,error:s}){let{basename:f}=b.useContext(jt);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let c=C0(s.digest);if(c){let m=Fc.get(s);if(m)throw m;let p=$m(c.location,f),g=p.absoluteURL||p.to;if(j0(g))throw new Error("Invalid redirect location");if(Km&&!Fc.get(s))if(p.isExternal||c.reloadDocument)window.location.href=g;else{const j=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw Fc.set(s,j),j}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${g}`})}}return r}function H0({routeContext:r,match:s,children:f}){let c=b.useContext(Ql);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),b.createElement(Ht.Provider,{value:r},f)}function B0(r,s=[],f){let c=f?.state;if(r==null){if(!c)return null;if(c.errors)r=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)r=c.matches;else return null}let m=r,p=c?.errors;if(p!=null){let C=m.findIndex(w=>w.route.id&&p?.[w.route.id]!==void 0);Oe(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),m=m.slice(0,Math.min(m.length,C+1))}let g=!1,j=-1;if(f&&c){g=c.renderFallback;for(let C=0;C<m.length;C++){let w=m[C];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(j=C),w.route.id){let{loaderData:D,errors:M}=c,X=w.route.loader&&!D.hasOwnProperty(w.route.id)&&(!M||M[w.route.id]===void 0);if(w.route.lazy||X){f.isStatic&&(g=!0),j>=0?m=m.slice(0,j+1):m=[m[0]];break}}}}let y=f?.onError,h=c&&y?(C,w)=>{y(C,{location:c.location,params:c.matches?.[0]?.params??{},pattern:y0(c.matches),errorInfo:w})}:void 0;return m.reduceRight((C,w,D)=>{let M,X=!1,Q=null,q=null;c&&(M=p&&w.route.id?p[w.route.id]:void 0,Q=w.route.errorElement||k0,g&&(j<0&&D===0?(np("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,q=null):j===D&&(X=!0,q=w.route.hydrateFallbackElement||null)));let _=s.concat(m.slice(0,D+1)),z=()=>{let H;return M?H=Q:X?H=q:w.route.Component?H=b.createElement(w.route.Component,null):w.route.element?H=w.route.element:H=C,b.createElement(H0,{match:w,routeContext:{outlet:C,matches:_,isDataRoute:c!=null},children:H})};return c&&(w.route.ErrorBoundary||w.route.errorElement||D===0)?b.createElement(lp,{location:c.location,revalidation:c.revalidation,component:Q,error:M,children:z(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:h}):z()},null)}function mo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y0(r){let s=b.useContext(Ql);return Oe(s,mo(r)),s}function q0(r){let s=b.useContext(Er);return Oe(s,mo(r)),s}function G0(r){let s=b.useContext(Ht);return Oe(s,mo(r)),s}function po(r){let s=G0(r),f=s.matches[s.matches.length-1];return Oe(f.route.id,`${r} can only be used on routes that contain a unique "id"`),f.route.id}function X0(){return po("useRouteId")}function Q0(){let r=b.useContext(so),s=q0("useRouteError"),f=po("useRouteError");return r!==void 0?r:s.errors?.[f]}function V0(){let{router:r}=Y0("useNavigate"),s=po("useNavigate"),f=b.useRef(!1);return tp(()=>{f.current=!0}),b.useCallback(async(m,p={})=>{Mt(f.current,ep),f.current&&(typeof m=="number"?await r.navigate(m):await r.navigate(m,{fromRouteId:s,...p}))},[r,s])}var Um={};function np(r,s,f){!s&&!Um[r]&&(Um[r]=!0,Mt(!1,f))}b.memo(Z0);function Z0({routes:r,manifest:s,future:f,state:c,isStatic:m,onError:p}){return ap(r,void 0,{manifest:s,state:c,isStatic:m,onError:p})}function J0({to:r,replace:s,state:f,relative:c}){Oe(Vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=b.useContext(jt);Mt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=b.useContext(Ht),{pathname:g}=Bt(),j=fo(),y=jr(r,oo(p),g,c==="path"),h=JSON.stringify(y);return b.useEffect(()=>{j(JSON.parse(h),{replace:s,state:f,relative:c})},[j,h,c,s,f]),null}function K0(r){return M0(r.context)}function Ua(r){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $0({basename:r="/",children:s=null,location:f,navigationType:c="POP",navigator:m,static:p=!1,useTransitions:g}){Oe(!Vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let j=r.replace(/^\/*/,"/"),y=b.useMemo(()=>({basename:j,navigator:m,static:p,useTransitions:g,future:{}}),[j,m,p,g]);typeof f=="string"&&(f=Xl(f));let{pathname:h="/",search:C="",hash:w="",state:D=null,key:M="default",mask:X}=f,Q=b.useMemo(()=>{let q=oa(h,j);return q==null?null:{location:{pathname:q,search:C,hash:w,state:D,key:M,mask:X},navigationType:c}},[j,h,C,w,D,M,c,X]);return Mt(Q!=null,`<Router basename="${j}"> is not able to match the URL "${h}${C}${w}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:b.createElement(jt.Provider,{value:y},b.createElement(Qn.Provider,{children:s,value:Q}))}function W0({children:r,location:s}){return D0(lo(r),s)}function lo(r,s=[]){let f=[];return b.Children.forEach(r,(c,m)=>{if(!b.isValidElement(c))return;let p=[...s,m];if(c.type===b.Fragment){f.push.apply(f,lo(c.props.children,p));return}Oe(c.type===Ua,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=lo(c.props.children,p)),f.push(g)}),f}var pr="get",hr="application/x-www-form-urlencoded";function zr(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function F0(r){return zr(r)&&r.tagName.toLowerCase()==="button"}function I0(r){return zr(r)&&r.tagName.toLowerCase()==="form"}function P0(r){return zr(r)&&r.tagName.toLowerCase()==="input"}function ev(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function tv(r,s){return r.button===0&&(!s||s==="_self")&&!ev(r)}function no(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((s,f)=>{let c=r[f];return s.concat(Array.isArray(c)?c.map(m=>[f,m]):[[f,c]])},[]))}function av(r,s){let f=no(r);return s&&s.forEach((c,m)=>{f.has(m)||s.getAll(m).forEach(p=>{f.append(m,p)})}),f}var fr=null;function lv(){if(fr===null)try{new FormData(document.createElement("form"),0),fr=!1}catch{fr=!0}return fr}var nv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ic(r){return r!=null&&!nv.has(r)?(Mt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hr}"`),null):r}function iv(r,s){let f,c,m,p,g;if(I0(r)){let j=r.getAttribute("action");c=j?oa(j,s):null,f=r.getAttribute("method")||pr,m=Ic(r.getAttribute("enctype"))||hr,p=new FormData(r)}else if(F0(r)||P0(r)&&(r.type==="submit"||r.type==="image")){let j=r.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||j.getAttribute("action");if(c=y?oa(y,s):null,f=r.getAttribute("formmethod")||j.getAttribute("method")||pr,m=Ic(r.getAttribute("formenctype"))||Ic(j.getAttribute("enctype"))||hr,p=new FormData(j,r),!lv()){let{name:h,type:C,value:w}=r;if(C==="image"){let D=h?`${h}.`:"";p.append(`${D}x`,"0"),p.append(`${D}y`,"0")}else h&&p.append(h,w)}}else{if(zr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=pr,c=null,m=hr,g=r}return p&&m==="text/plain"&&(g=p,p=void 0),{action:c,method:f.toLowerCase(),encType:m,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ho(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function ip(r,s,f,c){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${c}`:m.pathname=`${m.pathname}.${c}`:m.pathname==="/"?m.pathname=`_root.${c}`:s&&oa(m.pathname,s)==="/"?m.pathname=`${br(s)}/_root.${c}`:m.pathname=`${br(m.pathname)}.${c}`,m}async function rv(r,s){if(r.id in s)return s[r.id];try{let f=await import(r.module);return s[r.id]=f,f}catch(f){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function cv(r,s,f){let c=await Promise.all(r.map(async m=>{let p=s.routes[m.route.id];if(p){let g=await rv(p,f);return g.links?g.links():[]}return[]}));return dv(c.flat(1).filter(uv).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function km(r,s,f,c,m,p){let g=(y,h)=>f[h]?y.route.id!==f[h].route.id:!0,j=(y,h)=>f[h].pathname!==y.pathname||f[h].route.path?.endsWith("*")&&f[h].params["*"]!==y.params["*"];return p==="assets"?s.filter((y,h)=>g(y,h)||j(y,h)):p==="data"?s.filter((y,h)=>{let C=c.routes[y.route.id];if(!C||!C.hasLoader)return!1;if(g(y,h)||j(y,h))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function ov(r,s,{includeHydrateFallback:f}={}){return sv(r.map(c=>{let m=s.routes[c.route.id];if(!m)return[];let p=[m.module];return m.clientActionModule&&(p=p.concat(m.clientActionModule)),m.clientLoaderModule&&(p=p.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(p=p.concat(m.hydrateFallbackModule)),m.imports&&(p=p.concat(m.imports)),p}).flat(1))}function sv(r){return[...new Set(r)]}function fv(r){let s={},f=Object.keys(r).sort();for(let c of f)s[c]=r[c];return s}function dv(r,s){let f=new Set;return new Set(s),r.reduce((c,m)=>{let p=JSON.stringify(fv(m));return f.has(p)||(f.add(p),c.push({key:p,link:m})),c},[])}function go(){let r=b.useContext(Ql);return ho(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function mv(){let r=b.useContext(Er);return ho(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var vo=b.createContext(void 0);vo.displayName="FrameworkContext";function wr(){let r=b.useContext(vo);return ho(r,"You must render this element inside a <HydratedRouter> element"),r}function pv(r,s){let f=b.useContext(vo),[c,m]=b.useState(!1),[p,g]=b.useState(!1),{onFocus:j,onBlur:y,onMouseEnter:h,onMouseLeave:C,onTouchStart:w}=s,D=b.useRef(null);b.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let Q=_=>{_.forEach(z=>{g(z.isIntersecting)})},q=new IntersectionObserver(Q,{threshold:.5});return D.current&&q.observe(D.current),()=>{q.disconnect()}}},[r]),b.useEffect(()=>{if(c){let Q=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Q)}}},[c]);let M=()=>{m(!0)},X=()=>{m(!1),g(!1)};return f?r!=="intent"?[p,D,{}]:[p,D,{onFocus:Gn(j,M),onBlur:Gn(y,X),onMouseEnter:Gn(h,M),onMouseLeave:Gn(C,X),onTouchStart:Gn(w,M)}]:[!1,D,{}]}function Gn(r,s){return f=>{r&&r(f),f.defaultPrevented||s(f)}}function hv({page:r,...s}){let f=E0(),{nonce:c}=wr(),{router:m}=go(),p=b.useMemo(()=>Gm(m.routes,r,m.basename),[m.routes,r,m.basename]);return p?(s.nonce==null&&c&&(s={...s,nonce:c}),f?b.createElement(vv,{page:r,matches:p,...s}):b.createElement(bv,{page:r,matches:p,...s})):null}function gv(r){let{manifest:s,routeModules:f}=wr(),[c,m]=b.useState([]);return b.useEffect(()=>{let p=!1;return cv(r,s,f).then(g=>{p||m(g)}),()=>{p=!0}},[r,s,f]),c}function vv({page:r,matches:s,...f}){let c=Bt(),{future:m}=wr(),{basename:p}=go(),g=b.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let j=ip(r,p,m.v8_trailingSlashAwareDataRequests,"rsc"),y=!1,h=[];for(let C of s)typeof C.route.shouldRevalidate=="function"?y=!0:h.push(C.route.id);return y&&h.length>0&&j.searchParams.set("_routes",h.join(",")),[j.pathname+j.search]},[p,m.v8_trailingSlashAwareDataRequests,r,c,s]);return b.createElement(b.Fragment,null,g.map(j=>b.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...f})))}function bv({page:r,matches:s,...f}){let c=Bt(),{future:m,manifest:p,routeModules:g}=wr(),{basename:j}=go(),{loaderData:y,matches:h}=mv(),C=b.useMemo(()=>km(r,s,h,p,c,"data"),[r,s,h,p,c]),w=b.useMemo(()=>km(r,s,h,p,c,"assets"),[r,s,h,p,c]),D=b.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let Q=new Set,q=!1;if(s.forEach(z=>{let H=p.routes[z.route.id];!H||!H.hasLoader||(!C.some(K=>K.route.id===z.route.id)&&z.route.id in y&&g[z.route.id]?.shouldRevalidate||H.hasClientLoader?q=!0:Q.add(z.route.id))}),Q.size===0)return[];let _=ip(r,j,m.v8_trailingSlashAwareDataRequests,"data");return q&&Q.size>0&&_.searchParams.set("_routes",s.filter(z=>Q.has(z.route.id)).map(z=>z.route.id).join(",")),[_.pathname+_.search]},[j,m.v8_trailingSlashAwareDataRequests,y,c,p,C,s,r,g]),M=b.useMemo(()=>ov(w,p),[w,p]),X=gv(w);return b.createElement(b.Fragment,null,D.map(Q=>b.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...f})),M.map(Q=>b.createElement("link",{key:Q,rel:"modulepreload",href:Q,...f})),X.map(({key:Q,link:q})=>b.createElement("link",{key:Q,nonce:f.nonce,...q,crossOrigin:q.crossOrigin??f.crossOrigin})))}function yv(...r){return s=>{r.forEach(f=>{typeof f=="function"?f(s):f!=null&&(f.current=s)})}}var xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xv&&(window.__reactRouterVersion="7.18.1")}catch{}function Sv({basename:r,children:s,useTransitions:f,window:c}){let m=b.useRef();m.current==null&&(m.current=$g({window:c,v5Compat:!0}));let p=m.current,[g,j]=b.useState({action:p.action,location:p.location}),y=b.useCallback(h=>{f===!1?j(h):b.startTransition(()=>j(h))},[f]);return b.useLayoutEffect(()=>p.listen(y),[p,y]),b.createElement($0,{basename:r,children:s,location:g.location,navigationType:g.action,navigator:p,useTransitions:f})}var yr=b.forwardRef(function({onClick:s,discover:f="render",prefetch:c="none",relative:m,reloadDocument:p,replace:g,mask:j,state:y,target:h,to:C,preventScrollReset:w,viewTransition:D,defaultShouldRevalidate:M,...X},Q){let{basename:q,navigator:_,useTransitions:z}=b.useContext(jt),H=typeof C=="string"&&co.test(C),K=$m(C,q);C=K.to;let te=A0(C,{relative:m}),V=Bt(),G=null;if(j){let Ae=jr(j,[],V.mask?V.mask.pathname:"/",!0);q!=="/"&&(Ae.pathname=Ae.pathname==="/"?q:Lt([q,Ae.pathname])),G=_.createHref(Ae)}let[ee,ae,oe]=pv(c,X),Ue=zv(C,{replace:g,mask:j,state:y,target:h,preventScrollReset:w,relative:m,viewTransition:D,defaultShouldRevalidate:M,useTransitions:z});function Re(Ae){s&&s(Ae),Ae.defaultPrevented||Ue(Ae)}let at=!(K.isExternal||p),Ye=b.createElement("a",{...X,...oe,href:(at?G:void 0)||K.absoluteURL||te,onClick:at?Re:s,ref:yv(Q,ae),target:h,"data-discover":!H&&f==="render"?"true":void 0});return ee&&!H?b.createElement(b.Fragment,null,Ye,b.createElement(hv,{page:te})):Ye});yr.displayName="Link";var rp=b.forwardRef(function({"aria-current":s="page",caseSensitive:f=!1,className:c="",end:m=!1,style:p,to:g,viewTransition:j,children:y,...h},C){let w=Vn(g,{relative:h.relative}),D=Bt(),M=b.useContext(Er),{navigator:X,basename:Q}=b.useContext(jt),q=M!=null&&Av(w)&&j===!0,_=X.encodeLocation?X.encodeLocation(w).pathname:w.pathname,z=D.pathname,H=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;f||(z=z.toLowerCase(),H=H?H.toLowerCase():null,_=_.toLowerCase()),H&&Q&&(H=oa(H,Q)||H);const K=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let te=z===_||!m&&z.startsWith(_)&&z.charAt(K)==="/",V=H!=null&&(H===_||!m&&H.startsWith(_)&&H.charAt(_.length)==="/"),G={isActive:te,isPending:V,isTransitioning:q},ee=te?s:void 0,ae;typeof c=="function"?ae=c(G):ae=[c,te?"active":null,V?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let oe=typeof p=="function"?p(G):p;return b.createElement(yr,{...h,"aria-current":ee,className:ae,ref:C,style:oe,to:g,viewTransition:j},typeof y=="function"?y(G):y)});rp.displayName="NavLink";var jv=b.forwardRef(({discover:r="render",fetcherKey:s,navigate:f,reloadDocument:c,replace:m,state:p,method:g=pr,action:j,onSubmit:y,relative:h,preventScrollReset:C,viewTransition:w,defaultShouldRevalidate:D,...M},X)=>{let{useTransitions:Q}=b.useContext(jt),q=Cv(),_=Rv(j,{relative:h}),z=g.toLowerCase()==="get"?"get":"post",H=typeof j=="string"&&co.test(j),K=te=>{if(y&&y(te),te.defaultPrevented)return;te.preventDefault();let V=te.nativeEvent.submitter,G=V?.getAttribute("formmethod")||g,ee=()=>q(V||te.currentTarget,{fetcherKey:s,method:G,navigate:f,replace:m,state:p,relative:h,preventScrollReset:C,viewTransition:w,defaultShouldRevalidate:D});Q&&f!==!1?b.startTransition(()=>ee()):ee()};return b.createElement("form",{ref:X,method:z,action:_,onSubmit:c?y:K,...M,"data-discover":!H&&r==="render"?"true":void 0})});jv.displayName="Form";function Ev(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function up(r){let s=b.useContext(Ql);return Oe(s,Ev(r)),s}function zv(r,{target:s,replace:f,mask:c,state:m,preventScrollReset:p,relative:g,viewTransition:j,defaultShouldRevalidate:y,useTransitions:h}={}){let C=fo(),w=Bt(),D=Vn(r,{relative:g});return b.useCallback(M=>{if(tv(M,s)){M.preventDefault();let X=f!==void 0?f:Xn(w)===Xn(D),Q=()=>C(r,{replace:X,mask:c,state:m,preventScrollReset:p,relative:g,viewTransition:j,defaultShouldRevalidate:y});h?b.startTransition(()=>Q()):Q()}},[w,C,D,f,c,m,s,r,p,g,j,y,h])}function wv(r){Mt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let s=b.useRef(no(r)),f=b.useRef(!1),c=Bt(),m=b.useMemo(()=>av(c.search,f.current?null:s.current),[c.search]),p=fo(),g=b.useCallback((j,y)=>{const h=no(typeof j=="function"?j(new URLSearchParams(m)):j);f.current=!0,p("?"+h,y)},[p,m]);return[m,g]}var Tv=0,Nv=()=>`__${String(++Tv)}__`;function Cv(){let{router:r}=up("useSubmit"),{basename:s}=b.useContext(jt),f=X0(),c=r.fetch,m=r.navigate;return b.useCallback(async(p,g={})=>{let{action:j,method:y,encType:h,formData:C,body:w}=iv(p,s);if(g.navigate===!1){let D=g.fetcherKey||Nv();await c(D,f,g.action||j,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:w,formMethod:g.method||y,formEncType:g.encType||h,flushSync:g.flushSync})}else await m(g.action||j,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:w,formMethod:g.method||y,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:f,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,m,s,f])}function Rv(r,{relative:s}={}){let{basename:f}=b.useContext(jt),c=b.useContext(Ht);Oe(c,"useFormAction must be used inside a RouteContext");let[m]=c.matches.slice(-1),p={...Vn(r||".",{relative:s})},g=Bt();if(r==null){p.search=g.search;let j=new URLSearchParams(p.search),y=j.getAll("index");if(y.some(C=>C==="")){j.delete("index"),y.filter(w=>w).forEach(w=>j.append("index",w));let C=j.toString();p.search=C?`?${C}`:""}}return(!r||r===".")&&m.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(p.pathname=p.pathname==="/"?f:Lt([f,p.pathname])),Xn(p)}function Av(r,{relative:s}={}){let f=b.useContext(Im);Oe(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=up("useViewTransitionState"),m=Vn(r,{relative:s});if(!f.isTransitioning)return!1;let p=oa(f.currentLocation.pathname,c)||f.currentLocation.pathname,g=oa(f.nextLocation.pathname,c)||f.nextLocation.pathname;return vr(m.pathname,g)!=null||vr(m.pathname,p)!=null}function _v(){return o.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"7",r:"3.25",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("path",{d:"M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Ov(){return o.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"3",y:"6",width:"14",height:"10",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("path",{d:"M7 6V5a3 3 0 0 1 6 0v1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function io(){return o.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"4",y:"3",width:"12",height:"14",rx:"1.5",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("path",{d:"M7 7.5h6M7 10.5h6M7 13.5h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Mv(){return o.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"3",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("rect",{x:"11",y:"3",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("rect",{x:"3",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("rect",{x:"11",y:"11",width:"6",height:"6",rx:"1",stroke:"currentColor",strokeWidth:"1.5"})]})}function Dv(){return o.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M5 4.5h10M5 8.5h7M5 12.5h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("path",{d:"M14 12.5l2 2 3.5-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Uv(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5",fill:"url(#logo-grad)"}),o.jsx("path",{d:"M8 15V9l4 3 4-3v6",stroke:"#fff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"logo-grad",x1:"3",y1:"3",x2:"21",y2:"21",children:[o.jsx("stop",{stopColor:"#818cf8"}),o.jsx("stop",{offset:"1",stopColor:"#6366f1"})]})})]})}function kv(){return o.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M3.5 8.5l3 3 6-6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Lv(){return o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("path",{d:"M8 5v3.5M8 11h.01",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Hv(){return o.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}function Bv(){return o.jsxs("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[o.jsx("path",{d:"M4 2.5h5l3.5 3.5V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z",stroke:"currentColor",strokeWidth:"1.25"}),o.jsx("path",{d:"M9 2.5V6h3.5",stroke:"currentColor",strokeWidth:"1.25"})]})}function Yv(){return o.jsx("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:o.jsx("path",{d:"M6 3.5h6.5V10M9.5 6.5L3 13",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round"})})}const qv=[{to:"/profile",label:"Profile",icon:_v},{to:"/jobs",label:"Jobs",icon:Ov},{to:"/applications",label:"Applications",icon:io},{to:"/templates",label:"Templates",icon:Mv},{to:"/review",label:"Review",icon:Dv}];function Gv(){return o.jsxs("aside",{className:"sidebar",children:[o.jsx("div",{className:"sidebar-header",children:o.jsxs("div",{className:"sidebar-brand",children:[o.jsx(Uv,{}),o.jsxs("div",{className:"sidebar-brand-text",children:[o.jsx("span",{className:"sidebar-brand-name",children:"Joblication"}),o.jsx("span",{className:"sidebar-brand-tag",children:"Application studio"})]})]})}),o.jsxs("nav",{className:"sidebar-nav","aria-label":"Main navigation",children:[o.jsx("p",{className:"sidebar-nav-label",children:"Workspace"}),qv.map(r=>o.jsxs(rp,{to:r.to,className:({isActive:s})=>`sidebar-link ${s?"active":""}`,children:[o.jsx("span",{className:"sidebar-link-icon",children:o.jsx(r.icon,{})}),o.jsx("span",{className:"sidebar-link-label",children:r.label})]},r.to))]}),o.jsx("div",{className:"sidebar-footer",children:o.jsx("p",{children:"Tailored CVs & cover letters"})})]})}function Xv(){return o.jsxs("div",{className:"app-shell",children:[o.jsx(Gv,{}),o.jsx("main",{className:"app-main",children:o.jsx(K0,{})})]})}const tl={"Content-Type":"application/json"};async function Be(r,s={}){const f=await fetch(r,s),c=await f.json().catch(()=>({}));if(!f.ok)throw new Error(c.error||`Request failed (${f.status})`);return c}const Ce={health:()=>Be("/api/health"),config:()=>Be("/api/config"),getProfile:()=>Be("/api/profile"),saveProfile:r=>Be("/api/profile",{method:"PUT",headers:tl,body:JSON.stringify({profile:r})}),listJobs:()=>Be("/api/applications"),getJob:r=>Be(`/api/applications/${encodeURIComponent(r)}`),createJob:r=>Be("/api/applications",{method:"POST",headers:tl,body:JSON.stringify(r)}),updateJob:(r,s)=>Be(`/api/applications/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(s)}),deleteJob:r=>Be(`/api/applications/${encodeURIComponent(r)}`,{method:"DELETE"}),scrapeUrl:r=>Be("/api/applications/scrape",{method:"POST",headers:tl,body:JSON.stringify({url:r})}),listApplications:()=>Be("/api/applications/view"),listOutputs:()=>Be("/api/outputs"),fileUrl:(r,s)=>`/api/files/${encodeURIComponent(r)}/${encodeURIComponent(s)}`,getReview:r=>Be(`/api/review/${encodeURIComponent(r)}`),saveReview:(r,s)=>Be(`/api/review/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(s)}),rebuild:r=>Be(`/api/build/${encodeURIComponent(r)}`,{method:"POST"}),listTemplates:()=>Be("/api/templates"),getTemplate:r=>Be(`/api/templates/${encodeURIComponent(r)}`),saveTemplate:(r,s)=>Be(`/api/templates/${encodeURIComponent(r)}`,{method:"PUT",headers:tl,body:JSON.stringify(s)}),createTemplate:r=>Be("/api/templates",{method:"POST",headers:tl,body:JSON.stringify(r)}),generateStatus:()=>Be("/api/generate/status"),startGenerate:()=>Be("/api/generate",{method:"POST"})},cp=b.createContext(null);function Qv({children:r}){const[s,f]=b.useState(null),c=b.useRef(null),m=b.useCallback((g,j="success")=>{clearTimeout(c.current),f({message:g,type:j}),c.current=setTimeout(()=>f(null),3800)},[]),p=b.useMemo(()=>({showToast:m}),[m]);return o.jsxs(cp.Provider,{value:p,children:[r,s&&o.jsxs("div",{className:`toast show ${s.type}`,role:"status","aria-live":"polite",children:[o.jsx("span",{className:"toast-icon",children:s.type==="error"?o.jsx(Lv,{}):o.jsx(kv,{})}),o.jsx("span",{className:"toast-message",children:s.message})]})]})}function Zn(){const r=b.useContext(cp);if(!r)throw new Error("useToast must be used within ToastProvider");return r}function op({label:r="Loading…"}){return o.jsxs("div",{className:"page-loading",children:[o.jsx("div",{className:"page-loading-spinner"}),o.jsx("p",{children:r})]})}function Lm({icon:r,title:s,description:f,action:c}){return o.jsxs("div",{className:"empty-state",children:[r&&o.jsx("div",{className:"empty-state-icon",children:o.jsx(r,{})}),o.jsx("h3",{children:s}),f&&o.jsx("p",{children:f}),c]})}function al(r){return r.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b\w/g,s=>s.toUpperCase())}function Vv(r){return r.includes("email")?"email":r.includes("phone")?"tel":r==="url"||r.includes("portfolio")||r.includes("github")||r.includes("linkedin")?"url":r.includes("Date")||r==="date"?"date":"text"}function $e({id:r,label:s,value:f,onChange:c,type:m,multiline:p,rows:g=4,hint:j,onKeyDown:y}){const h=r||s.replace(/\s+/g,"_").toLowerCase(),C=m||Vv(h),w=!!f;return p?o.jsxs("div",{className:`md-field ${w?"md-field-filled":""}`,children:[o.jsx("label",{htmlFor:h,children:s}),o.jsx("textarea",{id:h,className:"md-input md-textarea",rows:g,value:f??"",onChange:D=>c(D.target.value),onKeyDown:y}),j&&o.jsx("span",{className:"md-hint",children:j})]}):o.jsxs("div",{className:`md-field ${w?"md-field-filled":""}`,children:[o.jsx("label",{htmlFor:h,children:s}),o.jsx("input",{id:h,className:"md-input",type:C,value:f??"",onChange:D=>c(D.target.value)}),j&&o.jsx("span",{className:"md-hint",children:j})]})}function sp({children:r,columns:s=2}){return o.jsx("div",{className:`md-grid md-grid-${s}`,children:r})}const Zv=[{key:"name",label:"Full name"},{key:"email",label:"Email"},{key:"phone",label:"Phone"},{key:"address",label:"Street address"},{key:"city",label:"City"},{key:"state",label:"State / region"},{key:"zip",label:"Postal code"},{key:"country",label:"Country"},{key:"portfolio",label:"Portfolio URL"},{key:"github",label:"GitHub URL"},{key:"linkedin",label:"LinkedIn URL"}],Jv=[{key:"degree",label:"Degree"},{key:"field",label:"Field of study"},{key:"school",label:"School"},{key:"cgpa",label:"GPA / CGPA"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"courses",label:"Relevant coursework",multiline:!0,rows:3,fullWidth:!0}],Kv=[{key:"company",label:"Company"},{key:"position",label:"Position"},{key:"location",label:"Location"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"description",label:"Description",multiline:!0,rows:5,fullWidth:!0}],$v=[{key:"name",label:"Project name"},{key:"url",label:"URL"},{key:"startDate",label:"Start date"},{key:"endDate",label:"End date"},{key:"technologies",label:"Technologies"},{key:"description",label:"Description",multiline:!0,rows:4,fullWidth:!0}],Wv=[{key:"name",label:"Certification name"},{key:"issuer",label:"Issuer"},{key:"date",label:"Date earned"},{key:"url",label:"Credential URL"}],Fv=[{key:"name",label:"Achievement"},{key:"date",label:"Date"},{key:"description",label:"Description",multiline:!0,rows:3,fullWidth:!0}],Iv={contact:{type:"object",fields:Zv},summary:{type:"text",label:"Professional summary"},titles:{type:"titles"},skills:{type:"keyValue",keyLabel:"Skill",valueLabel:"Description",stacked:!0},languages:{type:"keyValue",keyLabel:"Language",valueLabel:"Proficiency"},interests:{type:"keyValue",keyLabel:"Interest area",valueLabel:"Details"},education:{type:"entities",fields:Jv,singular:"education"},experience:{type:"entities",fields:Kv,singular:"experience"},projects:{type:"entities",fields:$v,singular:"project"},certifications:{type:"entities",fields:Wv,singular:"certification"},achievements:{type:"entities",fields:Fv,singular:"achievement"}};function Pv(r){return Iv[r]||{type:"dynamic"}}function xr(r){return r&&typeof r=="object"&&!Array.isArray(r)}function eb(r){if(typeof r=="string"||!xr(r))return"text";const s=Object.values(r);return!s.length||s.every(f=>typeof f=="string")?"keyValue":s.every(f=>xr(f))?"entities":"keyValue"}function fp({fields:r,value:s,onChange:f}){const c=s||{};return o.jsx(sp,{children:r.map(m=>o.jsx("div",{className:m.fullWidth?"md-field-span":void 0,children:o.jsx($e,{id:m.key,label:m.label,value:c[m.key],multiline:m.multiline,rows:m.rows,onChange:p=>f({...c,[m.key]:p})})},m.key))})}function tb(r){const s=Object.entries(r||{});return s.sort((f,c)=>{const m=parseInt(String(f[0]).split("_").pop(),10)||0,p=parseInt(String(c[0]).split("_").pop(),10)||0;return m-p}),s.map(([,f])=>f)}function Pc(r){const s={};return r.forEach((f,c)=>{s[`title_${c+1}`]=f}),s}function ab({value:r,onChange:s}){const f=tb(r);function c(g,j){const y=[...f];y[g]=j,s(Pc(y))}function m(g){s(Pc(f.filter((j,y)=>y!==g)))}function p(){s(Pc([...f,""]))}return o.jsxs("div",{className:"md-title-list",children:[f.map((g,j)=>o.jsxs("div",{className:"md-title-row",children:[o.jsx($e,{id:`title_text_${j}`,label:"Title text",value:g,onChange:y=>c(j,y)}),o.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>m(j),"aria-label":"Remove title",children:"✕"})]},`title-${j}`)),o.jsx("button",{type:"button",className:"md-outlined-btn",onClick:p,children:"+ Add title"})]})}function dp({value:r,onChange:s,keyLabel:f="Key",valueLabel:c="Value",valueOptional:m,stacked:p}){const g=Object.entries(r||{});function j(w,D,M){const X={...r||{}};delete X[w],D.trim()&&(X[D.trim()]=M),s(X)}function y(w,D){s({...r||{},[w]:D})}function h(w){const D={...r||{}};delete D[w],s(D)}function C(){const w=f.toLowerCase().replace(/\s+/g,"_");let D=g.length+1,M=`${w}_${D}`;for(;(r||{})[M];)D+=1,M=`${w}_${D}`;s({...r||{},[M]:""})}return o.jsxs("div",{className:"md-kv-list",children:[g.map(([w,D])=>o.jsx("div",{className:`md-kv-row ${p?"md-kv-row-stacked":""}`,children:p?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"md-kv-stacked-fields",children:[o.jsx($e,{label:f,value:w,onChange:M=>j(w,M,D)}),o.jsx($e,{label:c,value:D,onChange:M=>y(w,M),multiline:!0,rows:2})]}),o.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(w),"aria-label":"Remove",children:"✕"})]}):o.jsxs(o.Fragment,{children:[o.jsx($e,{label:f,value:w,onChange:M=>j(w,M,D)}),!m&&o.jsx($e,{label:c,value:D,onChange:M=>y(w,M),multiline:String(D).length>60,rows:2}),m&&o.jsx($e,{label:c,value:D,onChange:M=>y(w,M),hint:"Optional"}),o.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>h(w),"aria-label":"Remove",children:"✕"})]})},w)),o.jsxs("button",{type:"button",className:"md-text-btn",onClick:C,children:["+ Add ",f.toLowerCase()]})]})}function mp({value:r,onChange:s,fields:f,singular:c,sectionKey:m}){const p=Object.entries(r||{}),g=c||m.replace(/s$/,"");function j(h){const C={...r||{}};delete C[h],s(C)}function y(){const h=Object.keys(r||{}).map(M=>parseInt(M.split("_").pop(),10)).filter(M=>!Number.isNaN(M)),C=h.length?Math.max(...h)+1:1,w=`${g}_${C}`,D=f.reduce((M,X)=>({...M,[X.key]:""}),{});s({...r||{},[w]:D})}return o.jsxs("div",{className:"md-entity-list",children:[p.map(([h,C])=>o.jsxs("article",{className:"md-card",children:[o.jsxs("header",{className:"md-card-header",children:[o.jsx("h3",{children:C.name||C.degree||C.company||C.position||al(h)}),o.jsx("button",{type:"button",className:"md-icon-btn",onClick:()=>j(h),"aria-label":"Remove entry",children:"✕"})]}),o.jsx(fp,{fields:f,value:C,onChange:w=>s({...r||{},[h]:w})})]},h)),o.jsxs("button",{type:"button",className:"md-outlined-btn",onClick:y,children:["+ Add ",al(c||m)]})]})}function lb({sectionKey:r,value:s,onChange:f}){const c=eb(s);if(c==="text")return o.jsx($e,{label:al(r),value:typeof s=="string"?s:JSON.stringify(s,null,2),onChange:f,multiline:!0,rows:8});if(c==="keyValue")return o.jsx(dp,{value:xr(s)?s:{},onChange:f,keyLabel:"Item",valueLabel:"Value"});if(c==="entities"){const m=Object.values(s||{}).find(xr)||{},p=Object.keys(m).map(g=>({key:g,label:al(g),multiline:g==="description"||String(m[g]).length>80,rows:4}));return o.jsx(mp,{sectionKey:r,value:s,onChange:f,fields:p.length?p:[{key:"name",label:"Name"},{key:"description",label:"Description",multiline:!0}],singular:r.replace(/s$/,"")})}return o.jsx($e,{label:al(r),value:JSON.stringify(s,null,2),onChange:()=>{},multiline:!0,rows:10})}function nb({sectionKey:r,value:s,onChange:f}){const c=Pv(r);return c.type==="text"?o.jsx($e,{label:c.label||al(r),value:typeof s=="string"?s:"",onChange:f,multiline:!0,rows:8,hint:"A concise overview recruiters see first."}):c.type==="object"?o.jsx(fp,{fields:c.fields,value:s,onChange:f}):c.type==="titles"?o.jsx(ab,{value:s,onChange:f}):c.type==="keyValue"?o.jsx(dp,{value:s||{},onChange:f,keyLabel:c.keyLabel,valueLabel:c.valueLabel,valueOptional:c.valueOptional,stacked:c.stacked}):c.type==="entities"?o.jsx(mp,{sectionKey:r,value:s,onChange:f,fields:c.fields,singular:c.singular}):o.jsx(lb,{sectionKey:r,value:s,onChange:f})}const Sr=["contact","summary","titles","experience","education","skills","projects","certifications","achievements","languages","interests"],ib={contact:"Contact",summary:"Summary",titles:"Job titles",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects",certifications:"Certifications",achievements:"Achievements",languages:"Languages",interests:"Interests"};function dr(r){return ib[r]||al(r)}const Hm=new Set(Sr);function rb(r){const s=Sr.filter(c=>r.includes(c)),f=r.filter(c=>!Sr.includes(c)).sort();return[...s,...f]}function ub(){const{showToast:r}=Zn(),[s,f]=b.useState(null),[c,m]=b.useState("contact"),[p,g]=b.useState([]),[j,y]=b.useState(!0),[h,C]=b.useState(!1),w=b.useCallback(async()=>{y(!0);try{const H=(await Ce.getProfile()).profile||{};f(H),g(Object.keys(H).filter(K=>!Hm.has(K)))}catch(z){r(z.message,"error")}finally{y(!1)}},[r]);b.useEffect(()=>{w()},[w]);const D=b.useMemo(()=>{const z=s?Object.keys(s):[];return rb([...new Set([...Sr,...z,...p])]).filter(K=>s&&K in s)},[s,p]);function M(z,H){f(K=>({...K,[z]:H}))}function X(){const z=window.prompt("New section name (e.g. Publications):");if(!z)return;const H=z.trim().toLowerCase().replace(/\s+/g,"_");H&&(g(K=>K.includes(H)?K:[...K,H]),f(K=>({...K,[H]:K[H]||{}})),m(H))}function Q(){window.confirm(`Delete section "${dr(c)}"?`)&&(f(z=>{const H={...z};return delete H[c],H}),g(z=>z.filter(H=>H!==c)),m("contact"))}async function q(){C(!0);try{await Ce.saveProfile(s),r("Profile saved")}catch(z){r(z.message,"error")}finally{C(!1)}}if(j||!s)return o.jsx("div",{className:"profile-page",children:o.jsx(op,{label:"Loading profile…"})});const _=!Hm.has(c);return o.jsx("div",{className:"profile-page",children:o.jsxs("div",{className:"profile-layout",children:[o.jsx("main",{className:"profile-main",children:o.jsxs("div",{className:"profile-main-inner",children:[o.jsxs("div",{className:"profile-section-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:dr(c)}),o.jsxs("p",{className:"page-lead",children:["Edit your ",dr(c).toLowerCase()," details for tailored applications."]})]}),_&&o.jsx("button",{type:"button",className:"md-text-btn danger",onClick:Q,children:"Delete section"})]}),o.jsx("div",{className:"profile-form-surface",children:o.jsx(nb,{sectionKey:c,value:s[c],onChange:z=>M(c,z)})})]})}),o.jsxs("aside",{className:"profile-sidebar",children:[o.jsxs("nav",{className:"profile-nav","aria-label":"Profile sections",children:[o.jsx("p",{className:"profile-nav-label",children:"Sections"}),o.jsx("ul",{children:D.map(z=>o.jsx("li",{children:o.jsx("button",{type:"button",className:`profile-nav-item ${c===z?"active":""}`,onClick:()=>m(z),children:dr(z)})},z))})]}),o.jsxs("div",{className:"profile-sidebar-actions",children:[o.jsx("button",{type:"button",className:"md-filled-btn",onClick:q,disabled:h,children:h?"Saving…":"Save profile"}),o.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:X,children:"+ Section"})]})]})]})})}const eo={company:"",title:"",location:"",url:"",about:"",description:""};function cb(r){const s=r.split(`
`).map(c=>c.trim()).filter(Boolean),f=r.match(/https?:\/\/[^\s]+/i);return{url:f?f[0]:"",title:s[0]||"",description:r,about:s.slice(0,3).join(" ")}}function ob(r){return r?r.split("_").slice(0,-2).join(" ").replace(/\b\w/g,f=>f.toUpperCase()):""}function sb({draft:r,onChange:s}){return o.jsxs(o.Fragment,{children:[o.jsxs(sp,{children:[o.jsx($e,{id:"job_company",label:"Company",value:r.company,onChange:f=>s({...r,company:f})}),o.jsx($e,{id:"job_title",label:"Job title",value:r.title,onChange:f=>s({...r,title:f})}),o.jsx($e,{id:"job_location",label:"Location",value:r.location,onChange:f=>s({...r,location:f})}),o.jsx($e,{id:"job_url",label:"Job URL",value:r.url,onChange:f=>s({...r,url:f})})]}),o.jsx("div",{className:"md-field-span-wrap",children:o.jsx($e,{id:"job_about",label:"About",value:r.about,onChange:f=>s({...r,about:f}),multiline:!0,rows:4,hint:"Company or role overview."})}),o.jsx("div",{className:"md-field-span-wrap",children:o.jsx($e,{id:"job_description",label:"Description",value:r.description,onChange:f=>s({...r,description:f}),multiline:!0,rows:10,hint:"Requirements, responsibilities, qualifications…"})})]})}function fb(){const{showToast:r}=Zn(),[s,f]=b.useState([]),[c,m]=b.useState(null),[p,g]=b.useState([{role:"assistant",content:"Paste a job URL and I'll try to scrape it, or drop the full job description below. Then review the form and save."}]),[j,y]=b.useState(""),[h,C]=b.useState(eo),[w,D]=b.useState(!1),[M,X]=b.useState(!1),Q=b.useRef(null),q=b.useCallback(async()=>{try{const V=await Ce.listJobs();f(V.applications||[])}catch(V){r(V.message,"error")}},[r]);b.useEffect(()=>{q()},[q]),b.useEffect(()=>{Q.current?.scrollIntoView({behavior:"smooth"})},[p]);async function _(V){m(V),D(!0);try{const G=await Ce.getJob(V);C({company:ob(V),title:G.title||"",location:G.location||"",url:G.url||"",about:G.about||"",description:G.description||""})}catch(G){r(G.message,"error")}}async function z(){const V=j.trim();if(!(!V||M)){g(G=>[...G,{role:"user",content:V}]),y(""),X(!0);try{if(/^https?:\/\//i.test(V)||V.includes("linkedin.com")||V.includes("jobs.")){const ee=await Ce.scrapeUrl(V);C(ae=>({...ae,url:ee.url,title:ae.title||ee.title||"",about:ee.about||ae.about,description:ee.description||ae.description})),g(ae=>[...ae,{role:"assistant",content:"Fetched the posting. Set company and title, then save."}]),D(!0)}else{const ee=cb(V);C(ae=>({...ae,...ee,description:V})),g(ae=>[...ae,{role:"assistant",content:"Got the description. Fill in company and title, then save."}]),D(!0)}}catch(G){g(ee=>[...ee,{role:"assistant",content:`Error: ${G.message}`}])}finally{X(!1)}}}async function H(){if(!h.company.trim()||!h.title.trim()){r("Company and title are required","error");return}X(!0);try{if(c)await Ce.updateJob(c,h),r("Job updated");else{const V=await Ce.createJob(h);m(V.slug),r("Job saved")}await q(),D(!0)}catch(V){r(V.message,"error")}finally{X(!1)}}async function K(){if(!(!c||!window.confirm("Delete this job?")))try{await Ce.deleteJob(c),m(null),C(eo),D(!1),await q(),r("Job deleted")}catch(V){r(V.message,"error")}}function te(){m(null),C(eo),D(!0)}return o.jsx("div",{className:"profile-page jobs-page",children:o.jsxs("div",{className:"profile-layout",children:[o.jsx("main",{className:"profile-main jobs-main",children:o.jsxs("div",{className:"profile-main-inner jobs-main-inner",children:[w?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"profile-section-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:c?"Edit job":"New job"}),o.jsx("p",{className:"page-lead",children:c?"Update role details before generating documents.":"Add a role to start tailoring your application."})]}),c&&o.jsx("button",{type:"button",className:"md-text-btn danger",onClick:K,children:"Delete job"})]}),o.jsx("div",{className:"profile-form-surface",children:o.jsx(sb,{draft:h,onChange:C})})]}):o.jsxs("div",{className:"jobs-welcome",children:[o.jsx("h1",{children:"Jobs"}),o.jsx("p",{className:"page-lead",children:"Paste a job URL or description in the chat below, or select a saved role from the sidebar."})]}),o.jsxs("section",{className:"jobs-chat","aria-label":"Job intake chat",children:[o.jsxs("div",{className:"jobs-chat-messages",children:[p.map((V,G)=>o.jsxs("div",{className:`jobs-chat-bubble ${V.role}`,children:[o.jsx("span",{className:"jobs-chat-label",children:V.role==="user"?"You":"Joblication"}),o.jsx("p",{children:V.content})]},G)),o.jsx("div",{ref:Q})]}),o.jsxs("div",{className:"jobs-chat-composer",children:[o.jsx("div",{className:"jobs-chat-input-wrap",children:o.jsx($e,{id:"job_intake",label:"Paste URL or job description",value:j,onChange:y,multiline:!0,rows:3,onKeyDown:V=>{V.key==="Enter"&&!V.shiftKey&&(V.preventDefault(),z())}})}),o.jsx("button",{type:"button",className:"md-filled-btn jobs-send-btn",onClick:z,disabled:M,children:M?"…":"Send"})]})]})]})}),o.jsxs("aside",{className:"profile-sidebar jobs-sidebar",children:[o.jsxs("nav",{className:"profile-nav","aria-label":"Your jobs",children:[o.jsx("p",{className:"profile-nav-label",children:"Your jobs"}),o.jsxs("ul",{children:[s.map(V=>o.jsx("li",{children:o.jsxs("button",{type:"button",className:`profile-nav-item ${c===V.slug?"active":""}`,onClick:()=>_(V.slug),children:[o.jsx("span",{className:"jobs-nav-title",children:V.title||V.slug}),V.location&&o.jsx("span",{className:"jobs-nav-meta",children:V.location})]})},V.slug)),!s.length&&o.jsx("li",{className:"jobs-empty",children:"No jobs yet"})]})]}),o.jsxs("div",{className:"profile-sidebar-actions",children:[o.jsx("button",{type:"button",className:"md-filled-btn",onClick:H,disabled:M||!w,children:M?"Saving…":"Save job"}),o.jsx("button",{type:"button",className:"md-outlined-btn full",onClick:te,children:"+ New job"})]})]})]})})}const ro=[{value:"unsubmitted",label:"Unsubmitted"},{value:"submitted",label:"Submitted"},{value:"interview",label:"Interview"},{value:"accepted",label:"Accepted"},{value:"rejected",label:"Rejected"}],db=Object.fromEntries(ro.map(r=>[r.value,r.label]));function mb(r){const s={all:r.length,unsubmitted:0,submitted:0,interview:0,accepted:0,rejected:0,withOutput:0};for(const f of r)s[f.status]!==void 0&&(s[f.status]+=1),f.has_output&&(s.withOutput+=1);return s}function pb(){const{showToast:r}=Zn(),[s,f]=b.useState([]),[c,m]=b.useState(!1),[p,g]=b.useState(null),[j,y]=b.useState(!0),[h,C]=b.useState("all"),w=b.useCallback(async()=>{y(!0);try{const z=await Ce.listApplications();f(z.applications||[])}catch(z){r(z.message,"error")}finally{y(!1)}},[r]),D=b.useCallback(async()=>{try{const z=await Ce.generateStatus();g(z),z.running?setTimeout(D,2e3):(m(!1),z.error?r(z.error,"error"):z.step==="complete"&&(r("Generation complete"),w()))}catch{m(!1)}},[w,r]);b.useEffect(()=>{w()},[w]);const M=b.useMemo(()=>mb(s),[s]),X=b.useMemo(()=>h==="all"?s:h==="with_output"?s.filter(z=>z.has_output):s.filter(z=>z.status===h),[s,h]);async function Q(z,H){try{await Ce.updateJob(z,{status:H}),f(K=>K.map(te=>te.slug===z?{...te,status:H}:te))}catch(K){r(K.message,"error")}}async function q(){m(!0);try{await Ce.startGenerate(),D()}catch(z){m(!1),r(z.message,"error")}}const _=[{key:"all",label:"All applications",count:M.all},{key:"with_output",label:"Ready to review",count:M.withOutput},...ro.map(z=>({key:z.value,label:z.label,count:M[z.value]}))];return j?o.jsx("div",{className:"profile-page",children:o.jsx(op,{label:"Loading applications…"})}):o.jsx("div",{className:"profile-page applications-page",children:o.jsxs("div",{className:"profile-layout",children:[o.jsx("main",{className:"profile-main",children:o.jsxs("div",{className:"profile-main-inner applications-main-inner",children:[o.jsxs("div",{className:"profile-section-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Applications"}),o.jsx("p",{className:"page-lead",children:"Track generated documents and pipeline status for each role."})]}),o.jsxs("button",{type:"button",className:"md-filled-btn applications-generate-btn",onClick:q,disabled:c||!s.length,children:[o.jsx(Hv,{}),c?`Generating… ${p?.step||""}`:"Generate all"]})]}),c&&o.jsxs("div",{className:"generation-banner",children:[o.jsx("div",{className:"generation-banner-track",children:o.jsx("div",{className:"generation-banner-fill"})}),o.jsxs("p",{children:["Running pipeline",p?.step?` — ${p.step}`:"…"]})]}),s.length?X.length?o.jsx("div",{className:"applications-grid",children:X.map(z=>o.jsxs("article",{className:"application-card",children:[o.jsxs("div",{className:"application-card-top",children:[o.jsxs("div",{children:[o.jsx("h3",{children:z.title||z.slug}),o.jsx("p",{className:"application-card-slug",children:z.slug})]}),o.jsx("select",{value:z.status,onChange:H=>Q(z.slug,H.target.value),className:`status-pill status-${z.status}`,"aria-label":"Application status",children:ro.map(H=>o.jsx("option",{value:H.value,children:H.label},H.value))})]}),o.jsxs("div",{className:"application-card-body",children:[o.jsx("span",{className:`output-badge ${z.has_output?"ready":"pending"}`,children:z.has_output?"Documents ready":"Awaiting generation"}),z.has_output?o.jsx("ul",{className:"application-files",children:z.files.map(H=>o.jsx("li",{children:o.jsxs("a",{href:Ce.fileUrl(z.output_folder,H),target:"_blank",rel:"noreferrer",className:"application-file-link",children:[o.jsx(Bv,{}),o.jsx("span",{children:H.replace(/.*\//,"")}),o.jsx(Yv,{})]})},H))}):o.jsx("p",{className:"application-hint",children:"Run Generate all to create CV and cover letter."})]}),o.jsxs("div",{className:"application-card-footer",children:[o.jsx(yr,{to:`/review?slug=${encodeURIComponent(z.slug)}`,className:"md-text-btn",children:"Review & edit"}),o.jsx("span",{className:"application-status-label",children:db[z.status]})]})]},z.slug))}):o.jsx(Lm,{icon:io,title:"No matches",description:"Try a different filter from the sidebar."}):o.jsx(Lm,{icon:io,title:"No applications yet",description:"Add jobs from the Jobs page, then generate tailored CVs and cover letters here.",action:o.jsx(yr,{to:"/jobs",className:"md-outlined-btn",children:"Go to Jobs"})})]})}),o.jsxs("aside",{className:"profile-sidebar applications-sidebar",children:[o.jsxs("nav",{className:"profile-nav","aria-label":"Filter applications",children:[o.jsx("p",{className:"profile-nav-label",children:"Filter"}),o.jsx("ul",{children:_.map(z=>o.jsx("li",{children:o.jsxs("button",{type:"button",className:`profile-nav-item filter-item ${h===z.key?"active":""}`,onClick:()=>C(z.key),children:[o.jsx("span",{className:"filter-label",children:z.label}),o.jsx("span",{className:"filter-count",children:z.count})]})},z.key))})]}),o.jsxs("div",{className:"profile-sidebar-actions",children:[o.jsxs("div",{className:"applications-stats",children:[o.jsxs("div",{className:"stat-block",children:[o.jsx("span",{className:"stat-value",children:M.all}),o.jsx("span",{className:"stat-label",children:"Total"})]}),o.jsxs("div",{className:"stat-block",children:[o.jsx("span",{className:"stat-value",children:M.withOutput}),o.jsx("span",{className:"stat-label",children:"Generated"})]})]}),o.jsx("button",{type:"button",className:"md-filled-btn",onClick:q,disabled:c||!s.length,children:c?"Generating…":"Generate all"})]})]})]})})}const hb=["nw","n","ne","e","se","s","sw","w"],gb={nw:"nwse-resize",n:"ns-resize",ne:"nesw-resize",e:"ew-resize",se:"nwse-resize",s:"ns-resize",sw:"nesw-resize",w:"ew-resize"};function Gl(r,s,f){return Math.min(f,Math.max(s,r))}function vb(r){return Math.round(r*10)/10}function bb(r,s,f,c){let{x:m,y:p,w:g,h:j}=s;const y=8,h=4;return r.includes("e")&&(g+=f),r.includes("w")&&(m+=f,g-=f),r.includes("s")&&(j+=c),r.includes("n")&&(p+=c,j-=c),g<y&&(r.includes("w")&&(m-=y-g),g=y),j<h&&(r.includes("n")&&(p-=h-j),j=h),m=Gl(m,0,100-y),p=Gl(p,0,100-h),g=Gl(g,y,100-m),j=Gl(j,h,100-p),{x:m,y:p,w:g,h:j}}function yb({layout:r,sections:s,activeSection:f,onSelectSection:c,onUpdateSection:m}){const p=b.useRef(null),g=b.useRef(null),j=b.useRef(null),y=b.useRef(!1),h=r.pageWidth||595,C=r.pageHeight||842,w=r.zoom||1,D=[...s].sort((_,z)=>(_.zIndex??1)-(z.zIndex??1)),M=b.useCallback(()=>{const _=j.current;if(_?.mode==="pan"&&_.scrollEl?.releasePointerCapture)try{_.scrollEl.releasePointerCapture(_.pointerId)}catch{}j.current=null,document.body.classList.remove("ps-dragging","ps-panning")},[]),X=b.useCallback(_=>{const z=j.current;if(!z)return;if(z.mode==="pan"){const ae=g.current;if(!ae)return;const oe=_.clientX-z.startX,Ue=_.clientY-z.startY;(Math.abs(oe)>2||Math.abs(Ue)>2)&&(y.current=!0),ae.scrollLeft=z.origScrollLeft-oe,ae.scrollTop=z.origScrollTop-Ue;return}const H=p.current;if(!H)return;const K=H.getBoundingClientRect(),te=(_.clientX-z.startX)/K.width*100,V=(_.clientY-z.startY)/K.height*100,G=r.snapToGrid?r.gridSize||1:0,ee=ae=>G>0?Math.round(ae/G)*G:vb(ae);if(z.mode==="move"){const ae=100-z.origW,oe=100-z.origH;m(z.id,{x:ee(Gl(z.origX+te,0,ae)),y:ee(Gl(z.origY+V,0,oe))})}else if(z.mode.startsWith("resize-")){const ae=z.mode.slice(7),oe=bb(ae,{x:z.origX,y:z.origY,w:z.origW,h:z.origH},te,V);m(z.id,{x:ee(oe.x),y:ee(oe.y),w:ee(oe.w),h:ee(oe.h)})}},[r.snapToGrid,r.gridSize,m]);b.useEffect(()=>(window.addEventListener("pointermove",X),window.addEventListener("pointerup",M),window.addEventListener("pointercancel",M),()=>{window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",M),window.removeEventListener("pointercancel",M)}),[X,M]);function Q(_){if(_.button!==0||_.target.closest(".ps-layer")||_.target.closest(".ps-handle"))return;const z=g.current;z&&(_.preventDefault(),y.current=!1,z.setPointerCapture?.(_.pointerId),j.current={mode:"pan",startX:_.clientX,startY:_.clientY,origScrollLeft:z.scrollLeft,origScrollTop:z.scrollTop,pointerId:_.pointerId,scrollEl:z},document.body.classList.add("ps-panning"))}function q(_,z,H){z.locked||(_.stopPropagation(),_.preventDefault(),j.current={id:z.id,mode:H,startX:_.clientX,startY:_.clientY,origX:z.x,origY:z.y,origW:z.w,origH:z.h},document.body.classList.add("ps-dragging"),c(z.id))}return o.jsxs("div",{className:"ps-workspace",children:[o.jsx("div",{className:"ps-ruler ps-ruler-top","aria-hidden":!0,children:Array.from({length:12},(_,z)=>o.jsx("span",{style:{left:`${z/11*100}%`},children:Math.round(h/11*z)},z))}),o.jsx("div",{className:"ps-canvas-scroll",ref:g,onPointerDown:Q,children:o.jsx("div",{className:"ps-canvas-stage",style:{transform:`scale(${w})`,transformOrigin:"top center"},children:o.jsxs("div",{ref:p,className:"ps-canvas",style:{width:h,minHeight:C,padding:r.pagePadding,fontSize:`${r.fontSize}px`,lineHeight:r.lineHeight,fontFamily:r.fontFamily||"Georgia, serif",backgroundColor:r.pageBackground||"#ffffff"},onClick:()=>{if(y.current){y.current=!1;return}c(null)},onKeyDown:()=>{},role:"presentation",children:[r.showGrid&&o.jsx("div",{className:"ps-canvas-grid",style:{backgroundSize:`${r.gridSize||5}% ${r.gridSize||5}%`}}),D.filter(_=>_.visible!==!1).map(_=>{const z=f===_.id;return o.jsxs("div",{className:`ps-layer ${z?"selected":""} ${_.locked?"locked":""}`,style:{left:`${_.x}%`,top:`${_.y}%`,width:`${_.w}%`,height:`${_.h}%`,zIndex:_.zIndex??1,opacity:_.opacity??1,fontSize:_.fontSize?`${_.fontSize}px`:void 0,textAlign:_.textAlign||"left",padding:_.padding??8,backgroundColor:_.bgColor||"rgba(47, 140, 239, 0.06)"},onClick:H=>{H.stopPropagation(),c(_.id)},onPointerDown:H=>{H.target.closest(".ps-handle")||q(H,_,"move")},onKeyDown:()=>{},role:"button",tabIndex:0,children:[o.jsx("span",{className:"ps-layer-label",children:_.label}),o.jsx("p",{className:"ps-layer-preview",children:"Section content"}),z&&!_.locked&&o.jsx(o.Fragment,{children:hb.map(H=>o.jsx("span",{className:`ps-handle ps-handle-${H}`,style:{cursor:gb[H]},onPointerDown:K=>q(K,_,`resize-${H}`)},H))})]},_.id)})]})})})]})}function pp(){return o.jsxs("svg",{className:"ps-layer-grip-icon",viewBox:"0 0 10 16",fill:"currentColor","aria-hidden":"true",children:[o.jsx("circle",{cx:"2.5",cy:"2.5",r:"1.1"}),o.jsx("circle",{cx:"7.5",cy:"2.5",r:"1.1"}),o.jsx("circle",{cx:"2.5",cy:"8",r:"1.1"}),o.jsx("circle",{cx:"7.5",cy:"8",r:"1.1"}),o.jsx("circle",{cx:"2.5",cy:"13.5",r:"1.1"}),o.jsx("circle",{cx:"7.5",cy:"13.5",r:"1.1"})]})}function xb({layer:r,activeId:s,onSelect:f,onToggleVisible:c,isGhost:m}){return o.jsxs(o.Fragment,{children:[o.jsx("span",{className:`ps-layer-grip ${m?"ghost":""}`,"aria-hidden":m,children:o.jsx(pp,{})}),o.jsxs("button",{type:"button",className:`ps-layer-item ${s===r.id?"active":""}`,onClick:m?void 0:()=>f(r.id),tabIndex:m?-1:0,children:[o.jsx("span",{className:`ps-eye ${r.visible!==!1?"on":"off"}`,onClick:m?void 0:p=>{p.stopPropagation(),c(r.id,r.visible!==!1)},onKeyDown:()=>{},role:"button",tabIndex:m?-1:0,title:r.visible!==!1?"Hide layer":"Show layer"}),o.jsx("span",{className:"ps-layer-name",children:r.label}),r.locked&&o.jsx("span",{className:"ps-lock-badge",children:"L"})]})]})}function Bm(r,s,f,c){const m=f.filter(p=>p.id!==s);for(let p=0;p<m.length;p++){const g=c.current[m[p].id];if(!g)continue;const j=g.getBoundingClientRect();if(r<j.top+j.height/2)return p}return m.length}function Sb({layers:r,activeId:s,onSelect:f,onReorder:c,onToggleVisible:m}){const[p,g]=b.useState(null),j=b.useRef(null),y=b.useRef({}),h=b.useRef(0),C=b.useRef(0),w=b.useRef(null),D=b.useCallback(()=>{const _=w.current,z=C.current;_!=null&&h.current!==z&&c(_,h.current),w.current=null,h.current=0,C.current=0,g(null),document.body.classList.remove("ps-layer-sorting")},[c]);b.useEffect(()=>{if(!p)return;const _=z=>{const H=Bm(z.clientY,p.id,r,y);h.current=H,g(K=>!K||K.insertAt===H&&K.ghostY===z.clientY-K.offsetY?K:{...K,insertAt:H,ghostY:z.clientY-K.offsetY})};return window.addEventListener("pointermove",_),window.addEventListener("pointerup",D),window.addEventListener("pointercancel",D),()=>{window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",D),window.removeEventListener("pointercancel",D)}},[p,r,D]);function M(_,z){_.preventDefault(),_.stopPropagation();const H=_.currentTarget.closest(".ps-layer-row"),K=j.current;if(!H||!K)return;const te=H.getBoundingClientRect(),V=K.getBoundingClientRect(),G=Bm(_.clientY,z.id,r,y);_.currentTarget.setPointerCapture(_.pointerId),w.current=z.id,h.current=G,C.current=G,document.body.classList.add("ps-layer-sorting"),g({id:z.id,layer:z,offsetY:_.clientY-te.top,width:V.width-8,height:te.height,ghostX:V.left+4,ghostY:te.top,insertAt:G,pointerId:_.pointerId})}const X=p?r.find(_=>_.id===p.id):null,Q=p?r.filter(_=>_.id!==p.id):r,q=[];for(let _=0;_<=Q.length;_++)if(p&&p.insertAt===_&&q.push(o.jsx("li",{className:"ps-layer-placeholder",style:{height:p.height},"aria-hidden":!0},"placeholder")),_<Q.length){const z=Q[_];q.push(o.jsxs("li",{ref:H=>{y.current[z.id]=H},"data-layer-id":z.id,className:["ps-layer-row",p?"ps-layer-row-shifting":""].filter(Boolean).join(" "),children:[o.jsx("button",{type:"button",className:"ps-layer-grip","aria-label":`Reorder ${z.label}`,onPointerDown:H=>M(H,z),children:o.jsx(pp,{})}),o.jsxs("button",{type:"button",className:`ps-layer-item ${s===z.id?"active":""}`,onClick:()=>f(z.id),children:[o.jsx("span",{className:`ps-eye ${z.visible!==!1?"on":"off"}`,onClick:H=>{H.stopPropagation(),m(z.id,z.visible!==!1)},onKeyDown:()=>{},role:"button",tabIndex:0,title:z.visible!==!1?"Hide layer":"Show layer"}),o.jsx("span",{className:"ps-layer-name",children:z.label}),z.locked&&o.jsx("span",{className:"ps-lock-badge",children:"L"})]})]},z.id))}return o.jsxs(o.Fragment,{children:[o.jsx("ul",{ref:j,className:`ps-layer-list ${p?"is-sorting":""}`,children:q}),p&&X&&o.jsx("div",{className:"ps-layer-ghost",style:{left:p.ghostX,top:p.ghostY,width:p.width,minHeight:p.height},"aria-hidden":!0,children:o.jsx(xb,{layer:X,activeId:s,onSelect:f,onToggleVisible:m,isGhost:!0})})]})}const gr=[{label:"Georgia",value:"Georgia, serif",group:"Serif"},{label:"Times New Roman",value:"'Times New Roman', Times, serif",group:"Serif"},{label:"Garamond",value:"Garamond, 'Times New Roman', serif",group:"Serif"},{label:"Palatino",value:"'Palatino Linotype', Palatino, serif",group:"Serif"},{label:"Merriweather",value:"'Merriweather', Georgia, serif",group:"Serif",google:"Merriweather"},{label:"Lora",value:"'Lora', Georgia, serif",group:"Serif",google:"Lora"},{label:"Libre Baskerville",value:"'Libre Baskerville', Georgia, serif",group:"Serif",google:"Libre Baskerville"},{label:"Source Serif 4",value:"'Source Serif 4', Georgia, serif",group:"Serif",google:"Source Serif 4"},{label:"Crimson Text",value:"'Crimson Text', Georgia, serif",group:"Serif",google:"Crimson Text"},{label:"Arial",value:"Arial, Helvetica, sans-serif",group:"Sans-serif"},{label:"Helvetica",value:"Helvetica, Arial, sans-serif",group:"Sans-serif"},{label:"Calibri",value:"Calibri, 'Segoe UI', sans-serif",group:"Sans-serif"},{label:"Verdana",value:"Verdana, Geneva, sans-serif",group:"Sans-serif"},{label:"Tahoma",value:"Tahoma, Geneva, sans-serif",group:"Sans-serif"},{label:"Open Sans",value:"'Open Sans', Arial, sans-serif",group:"Sans-serif",google:"Open Sans"},{label:"Roboto",value:"'Roboto', Arial, sans-serif",group:"Sans-serif",google:"Roboto"},{label:"Lato",value:"'Lato', Arial, sans-serif",group:"Sans-serif",google:"Lato"},{label:"Inter",value:"'Inter', Arial, sans-serif",group:"Sans-serif",google:"Inter"},{label:"Montserrat",value:"'Montserrat', Arial, sans-serif",group:"Sans-serif",google:"Montserrat"},{label:"Source Sans 3",value:"'Source Sans 3', Arial, sans-serif",group:"Sans-serif",google:"Source Sans 3"},{label:"Poppins",value:"'Poppins', Arial, sans-serif",group:"Sans-serif",google:"Poppins"},{label:"Courier New",value:"'Courier New', Courier, monospace",group:"Monospace"},{label:"Consolas",value:"Consolas, 'Courier New', monospace",group:"Monospace"}],jb=[...new Set(gr.filter(r=>r.google).map(r=>r.google))];let to=!1;function Eb(){if(to||typeof document>"u")return;const r="joblication-template-fonts";if(document.getElementById(r)){to=!0;return}const s=jb.map(c=>`family=${c.replace(/ /g,"+")}:wght@400;600`).join("&"),f=document.createElement("link");f.id=r,f.rel="stylesheet",f.href=`https://fonts.googleapis.com/css2?${s}&display=swap`,document.head.appendChild(f),to=!0}function zb({value:r,onChange:s}){const f=b.useRef(null),c=b.useRef(null);b.useEffect(()=>{Eb()},[]);const m=b.useMemo(()=>{const g=r?.trim();return!g||gr.some(j=>j.value===g)?gr:[{label:"Custom",value:g,group:"Custom"},...gr]},[r]),p=b.useMemo(()=>{const g=new Map;for(const j of m)g.has(j.group)||g.set(j.group,[]),g.get(j.group).push(j);return[...g.entries()]},[m]);return b.useEffect(()=>{c.current?.scrollIntoView({block:"nearest"})},[r]),o.jsx("div",{className:"ps-font-picker",children:o.jsx("div",{className:"ps-font-picker-list",ref:f,role:"listbox","aria-label":"Font family",children:p.map(([g,j])=>o.jsxs("div",{className:"ps-font-picker-group",children:[o.jsx("p",{className:"ps-font-picker-group-label",children:g}),j.map(y=>{const h=r===y.value;return o.jsxs("button",{type:"button",ref:h?c:null,role:"option","aria-selected":h,className:`ps-font-option ${h?"active":""}`,style:{fontFamily:y.value},onClick:()=>s(y.value),children:[o.jsx("span",{className:"ps-font-option-name",children:y.label}),o.jsx("span",{className:"ps-font-option-sample",children:"The quick brown fox"})]},y.value)})]},g))})})}const ql={pageWidth:595,pageHeight:842,pagePadding:40,pageBackground:"#ffffff",fontSize:11,lineHeight:1.45,fontFamily:"Georgia, serif",zoom:.85,snapToGrid:!0,gridSize:5,showGrid:!0,sections:[{id:"contact",label:"Contact",x:5,y:3,w:90,h:8,visible:!0,locked:!1,zIndex:1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"summary",label:"Summary",x:5,y:12,w:90,h:10,visible:!0,locked:!1,zIndex:2,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"experience",label:"Experience",x:5,y:24,w:90,h:30,visible:!0,locked:!1,zIndex:3,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"skills",label:"Skills",x:5,y:56,w:90,h:12,visible:!0,locked:!1,zIndex:4,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"},{id:"education",label:"Education",x:5,y:70,w:90,h:12,visible:!0,locked:!1,zIndex:5,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]};function Ym(r){if(!r)return{...ql,sections:ql.sections.map(f=>({...f}))};const s=(r.sections||ql.sections).map(f=>({...ql.sections[0],...f}));return{...ql,...r,sections:s}}function Ke({label:r,children:s}){return o.jsxs("div",{className:"ps-prop-row",children:[o.jsx("label",{children:r}),s]})}function Qt({value:r,onChange:s,min:f,max:c,step:m=1,unit:p="%"}){return o.jsxs("div",{className:"ps-range-field",children:[o.jsx("input",{type:"range",min:f,max:c,step:m,value:r,onChange:g=>s(Number(g.target.value))}),o.jsx("input",{type:"number",className:"ps-num-input",min:f,max:c,step:m,value:r,onChange:g=>s(Number(g.target.value))}),o.jsx("span",{className:"ps-unit",children:p})]})}function wb(){const{showToast:r}=Zn(),[s,f]=b.useState({}),[c,m]=b.useState({}),[p,g]=b.useState(""),[j,y]=b.useState(""),[h,C]=b.useState("cv"),[w,D]=b.useState(""),[M,X]=b.useState(()=>Ym(null)),[Q,q]=b.useState("contact"),[_,z]=b.useState("layer"),[H,K]=b.useState(!1),te=b.useMemo(()=>({...s,...c}),[s,c]),V=M.sections||[],G=V.find(x=>x.id===Q),ee=b.useCallback(async()=>{try{const x=await Ce.listTemplates();f(x.catalog||{}),m(x.custom||{});const Z=Object.keys({...x.catalog||{},...x.custom||{}});Z.length&&!p&&g(Z[0])}catch(x){r(x.message,"error")}},[p,r]),ae=b.useCallback(async x=>{if(x)try{const Z=await Ce.getTemplate(x);y(Z.name||x),C(Z.category||"cv"),D(Z.source||"");const re=Ym(Z.layout);X(re),re.sections?.length&&q(re.sections[0].id)}catch(Z){r(Z.message,"error")}},[r]);b.useEffect(()=>{ee()},[ee]),b.useEffect(()=>{p&&ae(p)},[p,ae]);const oe=b.useCallback((x,Z)=>{X(re=>({...re,sections:re.sections.map(se=>se.id===x?{...se,...Z}:se)}))},[]);function Ue(){const x=window.prompt("Layer name:");if(!x)return;const Z=x.toLowerCase().replace(/\s+/g,"_"),re=Math.max(0,...V.map(se=>se.zIndex??1));X(se=>({...se,sections:[...se.sections,{id:Z,label:x,x:10,y:10,w:80,h:10,visible:!0,locked:!1,zIndex:re+1,opacity:1,textAlign:"left",padding:8,bgColor:"rgba(47, 140, 239, 0.06)"}]})),q(Z)}function Re(){!G||!window.confirm(`Delete layer "${G.label}"?`)||(X(x=>({...x,sections:x.sections.filter(Z=>Z.id!==Q)})),q(V[0]?.id||""))}const at=b.useCallback((x,Z)=>{X(re=>{const se=[...re.sections].sort((le,ge)=>(ge.zIndex??1)-(le.zIndex??1)),E=se.findIndex(le=>le.id===x);if(E<0)return re;const Y=se[E],J=se.filter(le=>le.id!==x),W=Math.max(0,Math.min(Z,J.length));J.splice(W,0,Y);const ne=J.map((le,ge)=>({...le,zIndex:J.length-ge}));return{...re,sections:ne}})},[]);async function Ye(){K(!0);try{await Ce.saveTemplate(p,{name:j,category:h,source:w,layout:M}),r("Template saved"),await ee()}catch(x){r(x.message,"error")}finally{K(!1)}}async function Ae(){const x=window.prompt("Template id (e.g. my_cv):");if(x){K(!0);try{await Ce.createTemplate({id:x,name:x,category:"cv",source:`<!-- Custom template -->
`,layout:ql}),g(x),await ee(),r("Template created")}catch(Z){r(Z.message,"error")}finally{K(!1)}}}const U=[...V].sort((x,Z)=>(Z.zIndex??1)-(x.zIndex??1));return o.jsxs("div",{className:"ps-editor",children:[o.jsxs("header",{className:"ps-toolbar",children:[o.jsxs("div",{className:"ps-toolbar-left",children:[o.jsx("select",{value:p,onChange:x=>g(x.target.value),className:"ps-select",children:Object.entries(te).map(([x,Z])=>o.jsx("option",{value:x,children:Z.name||x},x))}),o.jsx("button",{type:"button",className:"ps-tool-btn",onClick:Ae,children:"New"}),o.jsx("button",{type:"button",className:"ps-tool-btn primary",onClick:Ye,disabled:H,children:H?"Saving…":"Save"})]}),o.jsx("div",{className:"ps-toolbar-center",children:o.jsx("span",{className:"ps-doc-name",children:j||"Untitled"})}),o.jsxs("div",{className:"ps-toolbar-right",children:[o.jsxs("label",{className:"ps-zoom-label",children:["Zoom",o.jsx("input",{type:"range",min:.5,max:1.25,step:.05,value:M.zoom||.85,onChange:x=>X({...M,zoom:Number(x.target.value)})}),o.jsxs("span",{children:[Math.round((M.zoom||.85)*100),"%"]})]}),o.jsxs("label",{className:"ps-check-inline",children:[o.jsx("input",{type:"checkbox",checked:M.snapToGrid,onChange:x=>X({...M,snapToGrid:x.target.checked})}),"Snap"]}),o.jsxs("label",{className:"ps-check-inline",children:[o.jsx("input",{type:"checkbox",checked:M.showGrid,onChange:x=>X({...M,showGrid:x.target.checked})}),"Grid"]})]})]}),o.jsxs("div",{className:"ps-body",children:[o.jsxs("aside",{className:"ps-panel ps-layers",children:[o.jsxs("div",{className:"ps-panel-head",children:[o.jsx("h3",{children:"Layers"}),o.jsx("button",{type:"button",className:"ps-icon-btn",onClick:Ue,title:"Add layer",children:"+"})]}),o.jsx(Sb,{layers:U,activeId:Q,onSelect:q,onReorder:at,onToggleVisible:(x,Z)=>oe(x,{visible:!Z})})]}),o.jsx(yb,{layout:M,sections:V,activeSection:Q,onSelectSection:q,onUpdateSection:oe}),o.jsxs("aside",{className:"ps-panel ps-properties",children:[o.jsxs("div",{className:"ps-tabs",children:[o.jsx("button",{type:"button",className:_==="document"?"active":"",onClick:()=>z("document"),children:"Document"}),o.jsx("button",{type:"button",className:_==="layer"?"active":"",onClick:()=>z("layer"),children:"Layer"}),o.jsx("button",{type:"button",className:_==="source"?"active":"",onClick:()=>z("source"),children:"Source"})]}),_==="document"&&o.jsxs("div",{className:"ps-props",children:[o.jsx($e,{label:"Template name",value:j,onChange:y}),o.jsx(Ke,{label:"Category",children:o.jsxs("select",{value:h,onChange:x=>C(x.target.value),className:"ps-select full",children:[o.jsx("option",{value:"cv",children:"CV"}),o.jsx("option",{value:"cover_letter",children:"Cover letter"})]})}),o.jsx(Ke,{label:"Page width (px)",children:o.jsx("input",{type:"number",className:"ps-num-input full",value:M.pageWidth,onChange:x=>X({...M,pageWidth:Number(x.target.value)})})}),o.jsx(Ke,{label:"Page height (px)",children:o.jsx("input",{type:"number",className:"ps-num-input full",value:M.pageHeight,onChange:x=>X({...M,pageHeight:Number(x.target.value)})})}),o.jsx(Ke,{label:"Padding (px)",children:o.jsx(Qt,{value:M.pagePadding,onChange:x=>X({...M,pagePadding:x}),min:0,max:120,unit:"px"})}),o.jsx(Ke,{label:"Background",children:o.jsx("input",{type:"color",className:"ps-color-input",value:M.pageBackground||"#ffffff",onChange:x=>X({...M,pageBackground:x.target.value})})}),o.jsx(Ke,{label:"Base font size",children:o.jsx(Qt,{value:M.fontSize,onChange:x=>X({...M,fontSize:x}),min:8,max:18,unit:"px"})}),o.jsx(Ke,{label:"Line height",children:o.jsx(Qt,{value:M.lineHeight,onChange:x=>X({...M,lineHeight:x}),min:1,max:2,step:.05,unit:""})}),o.jsx(Ke,{label:"Font family",children:o.jsx(zb,{value:M.fontFamily||"Georgia, serif",onChange:x=>X({...M,fontFamily:x})})}),o.jsx(Ke,{label:"Grid size",children:o.jsx(Qt,{value:M.gridSize||5,onChange:x=>X({...M,gridSize:x}),min:1,max:20,unit:"%"})})]}),_==="layer"&&G&&o.jsxs("div",{className:"ps-props",children:[o.jsx("h4",{className:"ps-layer-title",children:G.label}),o.jsx(Ke,{label:"X position",children:o.jsx(Qt,{value:G.x,onChange:x=>oe(G.id,{x}),min:0,max:95})}),o.jsx(Ke,{label:"Y position",children:o.jsx(Qt,{value:G.y,onChange:x=>oe(G.id,{y:x}),min:0,max:95})}),o.jsx(Ke,{label:"Width",children:o.jsx(Qt,{value:G.w,onChange:x=>oe(G.id,{w:x}),min:8,max:100})}),o.jsx(Ke,{label:"Height",children:o.jsx(Qt,{value:G.h,onChange:x=>oe(G.id,{h:x}),min:4,max:80})}),o.jsx(Ke,{label:"Opacity",children:o.jsx(Qt,{value:Math.round((G.opacity??1)*100),onChange:x=>oe(G.id,{opacity:x/100}),min:10,max:100,unit:"%"})}),o.jsx(Ke,{label:"Layer padding",children:o.jsx(Qt,{value:G.padding??8,onChange:x=>oe(G.id,{padding:x}),min:0,max:32,unit:"px"})}),o.jsx(Ke,{label:"Text align",children:o.jsxs("select",{className:"ps-select full",value:G.textAlign||"left",onChange:x=>oe(G.id,{textAlign:x.target.value}),children:[o.jsx("option",{value:"left",children:"Left"}),o.jsx("option",{value:"center",children:"Center"}),o.jsx("option",{value:"right",children:"Right"}),o.jsx("option",{value:"justify",children:"Justify"})]})}),o.jsx(Ke,{label:"Fill color",children:o.jsx("input",{type:"color",className:"ps-color-input",value:G.bgColor?.startsWith("#")?G.bgColor:"#e8f0fe",onChange:x=>oe(G.id,{bgColor:x.target.value})})}),o.jsx(Ke,{label:"Font size override",children:o.jsx("input",{type:"number",className:"ps-num-input full",placeholder:"Inherit",value:G.fontSize??"",onChange:x=>oe(G.id,{fontSize:x.target.value?Number(x.target.value):void 0})})}),o.jsxs("div",{className:"ps-check-group",children:[o.jsxs("label",{className:"ps-check-inline",children:[o.jsx("input",{type:"checkbox",checked:G.visible!==!1,onChange:x=>oe(G.id,{visible:x.target.checked})}),"Visible"]}),o.jsxs("label",{className:"ps-check-inline",children:[o.jsx("input",{type:"checkbox",checked:!!G.locked,onChange:x=>oe(G.id,{locked:x.target.checked})}),"Lock"]})]}),o.jsx("button",{type:"button",className:"ps-danger-btn",onClick:Re,children:"Delete layer"})]}),_==="layer"&&!G&&o.jsx("p",{className:"ps-empty-props",children:"Select a layer on the canvas or from the list."}),_==="source"&&o.jsx("textarea",{className:"ps-source-editor",value:w,onChange:x=>D(x.target.value)})]})]})]})}function mr(r,s){return(r||[]).find(f=>f.toLowerCase().includes(s))}function Tb(){const{showToast:r}=Zn(),[s,f]=wv(),[c,m]=b.useState([]),[p,g]=b.useState(s.get("slug")||""),[j,y]=b.useState(null),[h,C]=b.useState(""),[w,D]=b.useState(""),[M,X]=b.useState("preview"),[Q,q]=b.useState("cv"),[_,z]=b.useState("html"),[H,K]=b.useState(!1),te=b.useCallback(async()=>{try{const x=await Ce.listApplications();m(x.applications||[]),!p&&x.applications?.length&&g(x.applications[0].slug)}catch(x){r(x.message,"error")}},[r,p]),V=b.useCallback(async()=>{if(p)try{const x=await Ce.getReview(p);y(x),C(JSON.stringify(x.stage_2||{},null,2)),D(JSON.stringify(x.stage_3||{},null,2))}catch(x){r(x.message,"error")}},[p,r]);b.useEffect(()=>{te()},[te]),b.useEffect(()=>{p&&(f({slug:p}),V())},[p,V,f]);const G=j?.output_folder||c.find(x=>x.slug===p)?.output_folder,ee=j?.files?.length?j.files:c.find(x=>x.slug===p)?.files||[],ae=mr(ee,"_cv.html"),oe=mr(ee,"_cv.pdf"),Ue=mr(ee,"_cover_letter.html"),Re=mr(ee,"_cover_letter.pdf"),at=b.useMemo(()=>Q==="cv"?_==="pdf"?oe:ae:_==="pdf"?Re:Ue,[Q,_,ae,oe,Ue,Re]),Ye=G&&at?Ce.fileUrl(G,at):null;async function Ae(){K(!0);try{let x,Z;try{x=JSON.parse(h),Z=JSON.parse(w)}catch(re){throw new Error(`Invalid JSON: ${re.message}`)}await Ce.saveReview(p,{app_key:j?.app_key,stage_2:x,stage_3:Z}),r("Saved edits"),await V()}catch(x){r(x.message,"error")}finally{K(!1)}}async function U(){K(!0);try{await Ce.saveReview(p,{app_key:j?.app_key,stage_2:JSON.parse(h),stage_3:JSON.parse(w)}),await Ce.rebuild(p),r("PDFs rebuilt"),await te(),await V(),X("preview"),z("pdf")}catch(x){r(x.message,"error")}finally{K(!1)}}return o.jsx("div",{className:"profile-page review-page",children:o.jsxs("div",{className:"profile-layout review-layout",children:[o.jsx("main",{className:"profile-main review-main",children:o.jsxs("div",{className:"profile-main-inner review-main-inner",children:[o.jsxs("div",{className:"profile-section-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Review"}),o.jsx("p",{className:"page-lead",children:"Preview generated documents and fine-tune CV and cover letter content."})]}),o.jsxs("div",{className:"header-actions",children:[o.jsx("select",{value:p,onChange:x=>g(x.target.value),className:"ps-select",children:c.map(x=>o.jsx("option",{value:x.slug,children:x.title||x.slug},x.slug))}),o.jsx("button",{type:"button",className:"md-outlined-btn",onClick:Ae,disabled:H,children:"Save edits"}),o.jsx("button",{type:"button",className:"md-filled-btn",onClick:U,disabled:H,children:H?"Working…":"Save & export PDF"})]})]}),o.jsxs("div",{className:"review-tabs",children:[o.jsx("button",{type:"button",className:M==="preview"?"active":"",onClick:()=>X("preview"),children:"Preview"}),o.jsx("button",{type:"button",className:M==="cv"?"active":"",onClick:()=>X("cv"),children:"CV JSON"}),o.jsx("button",{type:"button",className:M==="letter"?"active":"",onClick:()=>X("letter"),children:"Letter JSON"})]}),M==="preview"&&o.jsxs("div",{className:"review-preview-panel",children:[!G&&o.jsxs("p",{className:"muted review-empty",children:["No generated files yet. Run ",o.jsx("strong",{children:"Generate all"})," from Applications, then return here."]}),G&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"review-preview-toolbar",children:[o.jsxs("div",{className:"review-preview-switch",children:[o.jsx("button",{type:"button",className:Q==="cv"?"active":"",onClick:()=>q("cv"),children:"CV"}),o.jsx("button",{type:"button",className:Q==="letter"?"active":"",onClick:()=>q("letter"),children:"Cover letter"})]}),o.jsxs("div",{className:"review-preview-switch",children:[o.jsx("button",{type:"button",className:_==="html"?"active":"",onClick:()=>z("html"),disabled:!(Q==="cv"?ae:Ue),children:"HTML"}),o.jsx("button",{type:"button",className:_==="pdf"?"active":"",onClick:()=>z("pdf"),disabled:!(Q==="cv"?oe:Re),children:"PDF"})]}),Ye&&o.jsx("a",{href:Ye,target:"_blank",rel:"noreferrer",className:"md-text-btn",children:"Open in new tab"})]}),Ye?o.jsx("div",{className:"review-preview-frame-wrap",children:o.jsx("iframe",{title:`${Q} ${_} preview`,src:Ye,className:"review-preview-frame"},Ye)}):o.jsx("p",{className:"muted review-empty",children:_==="pdf"?"PDF not found — run Save & export PDF.":"HTML preview not available."}),o.jsxs("div",{className:"review-download-row",children:[oe&&o.jsx("a",{href:Ce.fileUrl(G,oe),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download CV PDF"}),Re&&o.jsx("a",{href:Ce.fileUrl(G,Re),target:"_blank",rel:"noreferrer",className:"md-outlined-btn",children:"Download letter PDF"})]})]})]}),M==="cv"&&o.jsx("textarea",{className:"code-area review-editor",value:h,onChange:x=>C(x.target.value)}),M==="letter"&&o.jsx("textarea",{className:"code-area review-editor",value:w,onChange:x=>D(x.target.value)})]})}),o.jsx("aside",{className:"profile-sidebar review-sidebar",children:o.jsxs("nav",{className:"profile-nav",children:[o.jsx("p",{className:"profile-nav-label",children:"Applications"}),o.jsxs("ul",{children:[c.map(x=>o.jsx("li",{children:o.jsxs("button",{type:"button",className:`profile-nav-item ${p===x.slug?"active":""}`,onClick:()=>g(x.slug),children:[o.jsx("span",{className:"jobs-nav-title",children:x.title||x.slug}),o.jsx("span",{className:"jobs-nav-meta",children:x.has_output?"Has output":"No output yet"})]})},x.slug)),!c.length&&o.jsx("li",{className:"jobs-empty",children:"No applications"})]})]})})]})})}function Nb(){return o.jsx(W0,{children:o.jsxs(Ua,{element:o.jsx(Xv,{}),children:[o.jsx(Ua,{index:!0,element:o.jsx(J0,{to:"/jobs",replace:!0})}),o.jsx(Ua,{path:"profile",element:o.jsx(ub,{})}),o.jsx(Ua,{path:"jobs",element:o.jsx(fb,{})}),o.jsx(Ua,{path:"applications",element:o.jsx(pb,{})}),o.jsx(Ua,{path:"templates",element:o.jsx(wb,{})}),o.jsx(Ua,{path:"review",element:o.jsx(Tb,{})})]})})}const Cb=`
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
`;function Rb(){return o.jsx("style",{children:Cb})}Jg.createRoot(document.getElementById("root")).render(o.jsx(b.StrictMode,{children:o.jsxs(Sv,{children:[o.jsx(Rb,{}),o.jsx(Qv,{children:o.jsx(Nb,{})})]})}));
