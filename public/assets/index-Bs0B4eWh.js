(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bd(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const qe={},li=[],Wn=()=>{},xy=()=>!1,Ac=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ad=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Rd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kb=Object.prototype.hasOwnProperty,Ve=(n,e)=>Kb.call(n,e),ge=Array.isArray,ci=n=>Rc(n)==="[object Map]",Dy=n=>Rc(n)==="[object Set]",_e=n=>typeof n=="function",ct=n=>typeof n=="string",rr=n=>typeof n=="symbol",Xe=n=>n!==null&&typeof n=="object",My=n=>(Xe(n)||_e(n))&&_e(n.then)&&_e(n.catch),Ly=Object.prototype.toString,Rc=n=>Ly.call(n),Qb=n=>Rc(n).slice(8,-1),Vy=n=>Rc(n)==="[object Object]",Sd=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,So=bd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sc=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Yb=/-(\w)/g,yn=Sc(n=>n.replace(Yb,(e,t)=>t?t.toUpperCase():"")),Jb=/\B([A-Z])/g,Fr=Sc(n=>n.replace(Jb,"-$1").toLowerCase()),Cc=Sc(n=>n.charAt(0).toUpperCase()+n.slice(1)),xu=Sc(n=>n?`on${Cc(n)}`:""),Bs=(n,e)=>!Object.is(n,e),yl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Fy=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},gh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let sm;const Pc=()=>sm||(sm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ma(n){if(ge(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=ct(s)?tA(s):ma(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ct(n)||Xe(n))return n}const Xb=/;(?![^(]*\))/g,Zb=/:([^]+)/,eA=/\/\*[^]*?\*\//g;function tA(n){const e={};return n.replace(eA,"").split(Xb).forEach(t=>{if(t){const s=t.split(Zb);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Cd(n){let e="";if(ct(n))e=n;else if(ge(n))for(let t=0;t<n.length;t++){const s=Cd(n[t]);s&&(e+=s+" ")}else if(Xe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const nA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sA=bd(nA);function Uy(n){return!!n||n===""}const $y=n=>!!(n&&n.__v_isRef===!0),$e=n=>ct(n)?n:n==null?"":ge(n)||Xe(n)&&(n.toString===Ly||!_e(n.toString))?$y(n)?$e(n.value):JSON.stringify(n,By,2):String(n),By=(n,e)=>$y(e)?By(n,e.value):ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[Du(s,i)+" =>"]=r,t),{})}:Dy(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Du(t))}:rr(e)?Du(e):Xe(e)&&!ge(e)&&!Vy(e)?String(e):e,Du=(n,e="")=>{var t;return rr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class jy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Qt;try{return Qt=this,e()}finally{Qt=t}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){this._on>0&&--this._on===0&&(Qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function qy(n){return new jy(n)}function rA(){return Qt}let He;const Mu=new WeakSet;class Hy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mu.has(this)&&(Mu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rm(this),Gy(this);const e=He,t=Pn;He=this,Pn=!0;try{return this.fn()}finally{Ky(this),He=e,Pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nd(e);this.deps=this.depsTail=void 0,rm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_h(this)&&this.run()}get dirty(){return _h(this)}}let Wy=0,Co,Po;function zy(n,e=!1){if(n.flags|=8,e){n.next=Po,Po=n;return}n.next=Co,Co=n}function Pd(){Wy++}function kd(){if(--Wy>0)return;if(Po){let e=Po;for(Po=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Co;){let e=Co;for(Co=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Gy(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ky(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Nd(s),iA(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function _h(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Qy(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===zo)||(n.globalVersion=zo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_h(n))))return;n.flags|=2;const e=n.dep,t=He,s=Pn;He=n,Pn=!0;try{Gy(n);const r=n.fn(n._value);(e.version===0||Bs(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{He=t,Pn=s,Ky(n),n.flags&=-3}}function Nd(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Nd(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function iA(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Pn=!0;const Yy=[];function vs(){Yy.push(Pn),Pn=!1}function Es(){const n=Yy.pop();Pn=n===void 0?!0:n}function rm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=He;He=void 0;try{e()}finally{He=t}}}let zo=0;class oA{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Od{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!He||!Pn||He===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==He)t=this.activeLink=new oA(He,this),He.deps?(t.prevDep=He.depsTail,He.depsTail.nextDep=t,He.depsTail=t):He.deps=He.depsTail=t,Jy(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=He.depsTail,t.nextDep=void 0,He.depsTail.nextDep=t,He.depsTail=t,He.deps===t&&(He.deps=s)}return t}trigger(e){this.version++,zo++,this.notify(e)}notify(e){Pd();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{kd()}}}function Jy(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Jy(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yh=new WeakMap,br=Symbol(""),vh=Symbol(""),Go=Symbol("");function kt(n,e,t){if(Pn&&He){let s=yh.get(n);s||yh.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Od),r.map=s,r.key=t),r.track()}}function us(n,e,t,s,r,i){const o=yh.get(n);if(!o){zo++;return}const a=c=>{c&&c.trigger()};if(Pd(),e==="clear")o.forEach(a);else{const c=ge(n),u=c&&Sd(t);if(c&&t==="length"){const h=Number(s);o.forEach((d,m)=>{(m==="length"||m===Go||!rr(m)&&m>=h)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Go)),e){case"add":c?u&&a(o.get("length")):(a(o.get(br)),ci(n)&&a(o.get(vh)));break;case"delete":c||(a(o.get(br)),ci(n)&&a(o.get(vh)));break;case"set":ci(n)&&a(o.get(br));break}}kd()}function Jr(n){const e=Le(n);return e===n?e:(kt(e,"iterate",Go),gn(n)?e:e.map(Et))}function kc(n){return kt(n=Le(n),"iterate",Go),n}const aA={__proto__:null,[Symbol.iterator](){return Lu(this,Symbol.iterator,Et)},concat(...n){return Jr(this).concat(...n.map(e=>ge(e)?Jr(e):e))},entries(){return Lu(this,"entries",n=>(n[1]=Et(n[1]),n))},every(n,e){return as(this,"every",n,e,void 0,arguments)},filter(n,e){return as(this,"filter",n,e,t=>t.map(Et),arguments)},find(n,e){return as(this,"find",n,e,Et,arguments)},findIndex(n,e){return as(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return as(this,"findLast",n,e,Et,arguments)},findLastIndex(n,e){return as(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return as(this,"forEach",n,e,void 0,arguments)},includes(...n){return Vu(this,"includes",n)},indexOf(...n){return Vu(this,"indexOf",n)},join(n){return Jr(this).join(n)},lastIndexOf(...n){return Vu(this,"lastIndexOf",n)},map(n,e){return as(this,"map",n,e,void 0,arguments)},pop(){return uo(this,"pop")},push(...n){return uo(this,"push",n)},reduce(n,...e){return im(this,"reduce",n,e)},reduceRight(n,...e){return im(this,"reduceRight",n,e)},shift(){return uo(this,"shift")},some(n,e){return as(this,"some",n,e,void 0,arguments)},splice(...n){return uo(this,"splice",n)},toReversed(){return Jr(this).toReversed()},toSorted(n){return Jr(this).toSorted(n)},toSpliced(...n){return Jr(this).toSpliced(...n)},unshift(...n){return uo(this,"unshift",n)},values(){return Lu(this,"values",Et)}};function Lu(n,e,t){const s=kc(n),r=s[e]();return s!==n&&!gn(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const lA=Array.prototype;function as(n,e,t,s,r,i){const o=kc(n),a=o!==n&&!gn(n),c=o[e];if(c!==lA[e]){const d=c.apply(n,i);return a?Et(d):d}let u=t;o!==n&&(a?u=function(d,m){return t.call(this,Et(d),m,n)}:t.length>2&&(u=function(d,m){return t.call(this,d,m,n)}));const h=c.call(o,u,s);return a&&r?r(h):h}function im(n,e,t,s){const r=kc(n);let i=t;return r!==n&&(gn(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,Et(a),c,n)}),r[e](i,...s)}function Vu(n,e,t){const s=Le(n);kt(s,"iterate",Go);const r=s[e](...t);return(r===-1||r===!1)&&Md(t[0])?(t[0]=Le(t[0]),s[e](...t)):r}function uo(n,e,t=[]){vs(),Pd();const s=Le(n)[e].apply(n,t);return kd(),Es(),s}const cA=bd("__proto__,__v_isRef,__isVue"),Xy=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(rr));function uA(n){rr(n)||(n=String(n));const e=Le(this);return kt(e,"has",n),e.hasOwnProperty(n)}class Zy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?EA:sv:i?nv:tv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ge(e);if(!r){let c;if(o&&(c=aA[t]))return c;if(t==="hasOwnProperty")return uA}const a=Reflect.get(e,t,Ft(e)?e:s);return(rr(t)?Xy.has(t):cA(t))||(r||kt(e,"get",t),i)?a:Ft(a)?o&&Sd(t)?a:a.value:Xe(a)?r?iv(a):Nc(a):a}}class ev extends Zy{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];if(!this._isShallow){const c=Ks(i);if(!gn(s)&&!Ks(s)&&(i=Le(i),s=Le(s)),!ge(e)&&Ft(i)&&!Ft(s))return c||(i.value=s),!0}const o=ge(e)&&Sd(t)?Number(t)<e.length:Ve(e,t),a=Reflect.set(e,t,s,Ft(e)?e:r);return e===Le(r)&&(o?Bs(s,i)&&us(e,"set",t,s):us(e,"add",t,s)),a}deleteProperty(e,t){const s=Ve(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&us(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!rr(t)||!Xy.has(t))&&kt(e,"has",t),s}ownKeys(e){return kt(e,"iterate",ge(e)?"length":br),Reflect.ownKeys(e)}}class hA extends Zy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dA=new ev,fA=new hA,pA=new ev(!0);const Eh=n=>n,nl=n=>Reflect.getPrototypeOf(n);function mA(n,e,t){return function(...s){const r=this.__v_raw,i=Le(r),o=ci(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...s),h=t?Eh:e?Vl:Et;return!e&&kt(i,"iterate",c?vh:br),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function sl(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function gA(n,e){const t={get(r){const i=this.__v_raw,o=Le(i),a=Le(r);n||(Bs(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:c}=nl(o),u=e?Eh:n?Vl:Et;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&kt(Le(r),"iterate",br),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Le(i),a=Le(r);return n||(Bs(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Le(a),u=e?Eh:n?Vl:Et;return!n&&kt(c,"iterate",br),a.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return Ut(t,n?{add:sl("add"),set:sl("set"),delete:sl("delete"),clear:sl("clear")}:{add(r){!e&&!gn(r)&&!Ks(r)&&(r=Le(r));const i=Le(this);return nl(i).has.call(i,r)||(i.add(r),us(i,"add",r,r)),this},set(r,i){!e&&!gn(i)&&!Ks(i)&&(i=Le(i));const o=Le(this),{has:a,get:c}=nl(o);let u=a.call(o,r);u||(r=Le(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Bs(i,h)&&us(o,"set",r,i):us(o,"add",r,i),this},delete(r){const i=Le(this),{has:o,get:a}=nl(i);let c=o.call(i,r);c||(r=Le(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&us(i,"delete",r,void 0),u},clear(){const r=Le(this),i=r.size!==0,o=r.clear();return i&&us(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=mA(r,n,e)}),t}function xd(n,e){const t=gA(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(Ve(t,r)&&r in s?t:s,r,i)}const _A={get:xd(!1,!1)},yA={get:xd(!1,!0)},vA={get:xd(!0,!1)};const tv=new WeakMap,nv=new WeakMap,sv=new WeakMap,EA=new WeakMap;function wA(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TA(n){return n.__v_skip||!Object.isExtensible(n)?0:wA(Qb(n))}function Nc(n){return Ks(n)?n:Dd(n,!1,dA,_A,tv)}function rv(n){return Dd(n,!1,pA,yA,nv)}function iv(n){return Dd(n,!0,fA,vA,sv)}function Dd(n,e,t,s,r){if(!Xe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=TA(n);if(i===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,i===2?s:t);return r.set(n,a),a}function ui(n){return Ks(n)?ui(n.__v_raw):!!(n&&n.__v_isReactive)}function Ks(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function Md(n){return n?!!n.__v_raw:!1}function Le(n){const e=n&&n.__v_raw;return e?Le(e):n}function ov(n){return!Ve(n,"__v_skip")&&Object.isExtensible(n)&&Fy(n,"__v_skip",!0),n}const Et=n=>Xe(n)?Nc(n):n,Vl=n=>Xe(n)?iv(n):n;function Ft(n){return n?n.__v_isRef===!0:!1}function we(n){return av(n,!1)}function IA(n){return av(n,!0)}function av(n,e){return Ft(n)?n:new bA(n,e)}class bA{constructor(e,t){this.dep=new Od,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Le(e),this._value=t?e:Et(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||gn(e)||Ks(e);e=s?e:Le(e),Bs(e,t)&&(this._rawValue=e,this._value=s?e:Et(e),this.dep.trigger())}}function Lt(n){return Ft(n)?n.value:n}function om(n){return _e(n)?n():Lt(n)}const AA={get:(n,e,t)=>e==="__v_raw"?n:Lt(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function lv(n){return ui(n)?n:new Proxy(n,AA)}class RA{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Od(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return zy(this,!0),!0}get value(){const e=this.dep.track();return Qy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function SA(n,e,t=!1){let s,r;return _e(n)?s=n:(s=n.get,r=n.set),new RA(s,r,t)}const rl={},Fl=new WeakMap;let _r;function CA(n,e=!1,t=_r){if(t){let s=Fl.get(t);s||Fl.set(t,s=[]),s.push(n)}}function PA(n,e,t=qe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=t,u=H=>r?H:gn(H)||r===!1||r===0?hs(H,1):hs(H);let h,d,m,g,E=!1,C=!1;if(Ft(n)?(d=()=>n.value,E=gn(n)):ui(n)?(d=()=>u(n),E=!0):ge(n)?(C=!0,E=n.some(H=>ui(H)||gn(H)),d=()=>n.map(H=>{if(Ft(H))return H.value;if(ui(H))return u(H);if(_e(H))return c?c(H,2):H()})):_e(n)?e?d=c?()=>c(n,2):n:d=()=>{if(m){vs();try{m()}finally{Es()}}const H=_r;_r=h;try{return c?c(n,3,[g]):n(g)}finally{_r=H}}:d=Wn,e&&r){const H=d,ie=r===!0?1/0:r;d=()=>hs(H(),ie)}const R=rA(),L=()=>{h.stop(),R&&R.active&&Rd(R.effects,h)};if(i&&e){const H=e;e=(...ie)=>{H(...ie),L()}}let M=C?new Array(n.length).fill(rl):rl;const U=H=>{if(!(!(h.flags&1)||!h.dirty&&!H))if(e){const ie=h.run();if(r||E||(C?ie.some((pe,A)=>Bs(pe,M[A])):Bs(ie,M))){m&&m();const pe=_r;_r=h;try{const A=[ie,M===rl?void 0:C&&M[0]===rl?[]:M,g];M=ie,c?c(e,3,A):e(...A)}finally{_r=pe}}}else h.run()};return a&&a(U),h=new Hy(d),h.scheduler=o?()=>o(U,!1):U,g=H=>CA(H,!1,h),m=h.onStop=()=>{const H=Fl.get(h);if(H){if(c)c(H,4);else for(const ie of H)ie();Fl.delete(h)}},e?s?U(!0):M=h.run():o?o(U.bind(null,!0),!0):h.run(),L.pause=h.pause.bind(h),L.resume=h.resume.bind(h),L.stop=L,L}function hs(n,e=1/0,t){if(e<=0||!Xe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ft(n))hs(n.value,e,t);else if(ge(n))for(let s=0;s<n.length;s++)hs(n[s],e,t);else if(Dy(n)||ci(n))n.forEach(s=>{hs(s,e,t)});else if(Vy(n)){for(const s in n)hs(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&hs(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ga(n,e,t,s){try{return s?n(...s):n()}catch(r){Oc(r,e,t)}}function Xn(n,e,t,s){if(_e(n)){const r=ga(n,e,t,s);return r&&My(r)&&r.catch(i=>{Oc(i,e,t)}),r}if(ge(n)){const r=[];for(let i=0;i<n.length;i++)r.push(Xn(n[i],e,t,s));return r}}function Oc(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,c,u)===!1)return}a=a.parent}if(i){vs(),ga(i,null,10,[n,c,u]),Es();return}}kA(n,t,r,s,o)}function kA(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const Ht=[];let $n=-1;const hi=[];let Ds=null,Zr=0;const cv=Promise.resolve();let Ul=null;function uv(n){const e=Ul||cv;return n?e.then(this?n.bind(this):n):e}function NA(n){let e=$n+1,t=Ht.length;for(;e<t;){const s=e+t>>>1,r=Ht[s],i=Ko(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function Ld(n){if(!(n.flags&1)){const e=Ko(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=Ko(t)?Ht.push(n):Ht.splice(NA(e),0,n),n.flags|=1,hv()}}function hv(){Ul||(Ul=cv.then(fv))}function OA(n){ge(n)?hi.push(...n):Ds&&n.id===-1?Ds.splice(Zr+1,0,n):n.flags&1||(hi.push(n),n.flags|=1),hv()}function am(n,e,t=$n+1){for(;t<Ht.length;t++){const s=Ht[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Ht.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function dv(n){if(hi.length){const e=[...new Set(hi)].sort((t,s)=>Ko(t)-Ko(s));if(hi.length=0,Ds){Ds.push(...e);return}for(Ds=e,Zr=0;Zr<Ds.length;Zr++){const t=Ds[Zr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ds=null,Zr=0}}const Ko=n=>n.id==null?n.flags&2?-1:1/0:n.id;function fv(n){try{for($n=0;$n<Ht.length;$n++){const e=Ht[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ga(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<Ht.length;$n++){const e=Ht[$n];e&&(e.flags&=-2)}$n=-1,Ht.length=0,dv(),Ul=null,(Ht.length||hi.length)&&fv()}}let rn=null,pv=null;function $l(n){const e=rn;return rn=n,pv=n&&n.type.__scopeId||null,e}function wt(n,e=rn,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&_m(-1);const i=$l(e);let o;try{o=n(...r)}finally{$l(i),s._d&&_m(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Qo(n,e){if(rn===null)return n;const t=Lc(rn),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=qe]=e[r];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&hs(o),s.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function mr(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(vs(),Xn(c,t,8,[n.el,a,n,e]),Es())}}const xA=Symbol("_vte"),DA=n=>n.__isTeleport,MA=Symbol("_leaveCb");function Vd(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vd(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function De(n,e){return _e(n)?Ut({name:n.name},e,{setup:n}):n}function mv(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ko(n,e,t,s,r=!1){if(ge(n)){n.forEach((E,C)=>ko(E,e&&(ge(e)?e[C]:e),t,s,r));return}if(No(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ko(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?Lc(s.component):s.el,o=r?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===qe?a.refs={}:a.refs,d=a.setupState,m=Le(d),g=d===qe?xy:E=>Ve(m,E);if(u!=null&&u!==c){if(ct(u))h[u]=null,g(u)&&(d[u]=null);else if(Ft(u)){u.value=null;const E=e;E.k&&(h[E.k]=null)}}if(_e(c))ga(c,a,12,[o,h]);else{const E=ct(c),C=Ft(c);if(E||C){const R=()=>{if(n.f){const L=E?g(c)?d[c]:h[c]:c.value;if(r)ge(L)&&Rd(L,i);else if(ge(L))L.includes(i)||L.push(i);else if(E)h[c]=[i],g(c)&&(d[c]=h[c]);else{const M=[i];c.value=M,n.k&&(h[n.k]=M)}}else E?(h[c]=o,g(c)&&(d[c]=o)):C&&(c.value=o,n.k&&(h[n.k]=o))};o?(R.id=-1,nn(R,t)):R()}}}Pc().requestIdleCallback;Pc().cancelIdleCallback;const No=n=>!!n.type.__asyncLoader,gv=n=>n.type.__isKeepAlive;function LA(n,e){_v(n,"a",e)}function VA(n,e){_v(n,"da",e)}function _v(n,e,t=Dt){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(xc(e,s,t),t){let r=t.parent;for(;r&&r.parent;)gv(r.parent.vnode)&&FA(s,e,t,r),r=r.parent}}function FA(n,e,t,s){const r=xc(e,n,s,!0);yv(()=>{Rd(s[e],r)},t)}function xc(n,e,t=Dt,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{vs();const a=_a(t),c=Xn(e,t,n,o);return a(),Es(),c});return s?r.unshift(i):r.push(i),i}}const As=n=>(e,t=Dt)=>{(!Jo||n==="sp")&&xc(n,(...s)=>e(...s),t)},UA=As("bm"),Di=As("m"),$A=As("bu"),BA=As("u"),jA=As("bum"),yv=As("um"),qA=As("sp"),HA=As("rtg"),WA=As("rtc");function zA(n,e=Dt){xc("ec",n,e)}const GA="components";function ir(n,e){return QA(GA,n,!0,e)||n}const KA=Symbol.for("v-ndc");function QA(n,e,t=!0,s=!1){const r=rn||Dt;if(r){const i=r.type;{const a=M0(i,!1);if(a&&(a===e||a===yn(e)||a===Cc(yn(e))))return i}const o=lm(r[n]||i[n],e)||lm(r.appContext[n],e);return!o&&s?i:o}}function lm(n,e){return n&&(n[e]||n[yn(e)]||n[Cc(yn(e))])}function fs(n,e,t,s){let r;const i=t,o=ge(n);if(o||ct(n)){const a=o&&ui(n);let c=!1,u=!1;a&&(c=!gn(n),u=Ks(n),n=kc(n)),r=new Array(n.length);for(let h=0,d=n.length;h<d;h++)r[h]=e(c?u?Vl(Et(n[h])):Et(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,i)}else if(Xe(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(n[h],h,c,i)}}else r=[];return r}const wh=n=>n?Uv(n)?Lc(n):wh(n.parent):null,Oo=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wh(n.parent),$root:n=>wh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ev(n),$forceUpdate:n=>n.f||(n.f=()=>{Ld(n.update)}),$nextTick:n=>n.n||(n.n=uv.bind(n.proxy)),$watch:n=>g0.bind(n)}),Fu=(n,e)=>n!==qe&&!n.__isScriptSetup&&Ve(n,e),YA={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(Fu(s,e))return o[e]=1,s[e];if(r!==qe&&Ve(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&Ve(u,e))return o[e]=3,i[e];if(t!==qe&&Ve(t,e))return o[e]=4,t[e];Th&&(o[e]=0)}}const h=Oo[e];let d,m;if(h)return e==="$attrs"&&kt(n.attrs,"get",""),h(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==qe&&Ve(t,e))return o[e]=4,t[e];if(m=c.config.globalProperties,Ve(m,e))return m[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return Fu(r,e)?(r[e]=t,!0):s!==qe&&Ve(s,e)?(s[e]=t,!0):Ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:i,type:o}},a){let c,u;return!!(t[a]||n!==qe&&a[0]!=="$"&&Ve(n,a)||Fu(e,a)||(c=i[0])&&Ve(c,a)||Ve(s,a)||Ve(Oo,a)||Ve(r.config.globalProperties,a)||(u=o.__cssModules)&&u[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cm(n){return ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Th=!0;function JA(n){const e=Ev(n),t=n.proxy,s=n.ctx;Th=!1,e.beforeCreate&&um(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:E,activated:C,deactivated:R,beforeDestroy:L,beforeUnmount:M,destroyed:U,unmounted:H,render:ie,renderTracked:pe,renderTriggered:A,errorCaptured:v,serverPrefetch:I,expose:S,inheritAttrs:P,components:N,directives:T,filters:Bt}=e;if(u&&XA(u,s,null),o)for(const Se in o){const Ie=o[Se];_e(Ie)&&(s[Se]=Ie.bind(t))}if(r){const Se=r.call(t,t);Xe(Se)&&(n.data=Nc(Se))}if(Th=!0,i)for(const Se in i){const Ie=i[Se],en=_e(Ie)?Ie.bind(t,t):_e(Ie.get)?Ie.get.bind(t,t):Wn,wn=!_e(Ie)&&_e(Ie.set)?Ie.set.bind(t):Wn,un=In({get:en,set:wn});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>un.value,set:Ze=>un.value=Ze})}if(a)for(const Se in a)vv(a[Se],s,t,Se);if(c){const Se=_e(c)?c.call(t):c;Reflect.ownKeys(Se).forEach(Ie=>{vl(Ie,Se[Ie])})}h&&um(h,n,"c");function it(Se,Ie){ge(Ie)?Ie.forEach(en=>Se(en.bind(t))):Ie&&Se(Ie.bind(t))}if(it(UA,d),it(Di,m),it($A,g),it(BA,E),it(LA,C),it(VA,R),it(zA,v),it(WA,pe),it(HA,A),it(jA,M),it(yv,H),it(qA,I),ge(S))if(S.length){const Se=n.exposed||(n.exposed={});S.forEach(Ie=>{Object.defineProperty(Se,Ie,{get:()=>t[Ie],set:en=>t[Ie]=en,enumerable:!0})})}else n.exposed||(n.exposed={});ie&&n.render===Wn&&(n.render=ie),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),T&&(n.directives=T),I&&mv(n)}function XA(n,e,t=Wn){ge(n)&&(n=Ih(n));for(const s in n){const r=n[s];let i;Xe(r)?"default"in r?i=_n(r.from||s,r.default,!0):i=_n(r.from||s):i=_n(r),Ft(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function um(n,e,t){Xn(ge(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function vv(n,e,t,s){let r=s.includes(".")?xv(t,s):()=>t[s];if(ct(n)){const i=e[n];_e(i)&&Ar(r,i)}else if(_e(n))Ar(r,n.bind(t));else if(Xe(n))if(ge(n))n.forEach(i=>vv(i,e,t,s));else{const i=_e(n.handler)?n.handler.bind(t):e[n.handler];_e(i)&&Ar(r,i,n)}}function Ev(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!t&&!s?c=e:(c={},r.length&&r.forEach(u=>Bl(c,u,o,!0)),Bl(c,e,o)),Xe(e)&&i.set(e,c),c}function Bl(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&Bl(n,i,t,!0),r&&r.forEach(o=>Bl(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=ZA[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const ZA={data:hm,props:dm,emits:dm,methods:vo,computed:vo,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:vo,directives:vo,watch:t0,provide:hm,inject:e0};function hm(n,e){return e?n?function(){return Ut(_e(n)?n.call(this,this):n,_e(e)?e.call(this,this):e)}:e:n}function e0(n,e){return vo(Ih(n),Ih(e))}function Ih(n){if(ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function vo(n,e){return n?Ut(Object.create(null),n,e):e}function dm(n,e){return n?ge(n)&&ge(e)?[...new Set([...n,...e])]:Ut(Object.create(null),cm(n),cm(e??{})):e}function t0(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const s in e)t[s]=qt(n[s],e[s]);return t}function wv(){return{app:null,config:{isNativeTag:xy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n0=0;function s0(n,e){return function(s,r=null){_e(s)||(s=Ut({},s)),r!=null&&!Xe(r)&&(r=null);const i=wv(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:n0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:V0,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&_e(h.install)?(o.add(h),h.install(u,...d)):_e(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!c){const g=u._ceVNode||ue(s,r);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Lc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Xn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=di;di=u;try{return h()}finally{di=d}}};return u}}let di=null;function vl(n,e){if(Dt){let t=Dt.provides;const s=Dt.parent&&Dt.parent.provides;s===t&&(t=Dt.provides=Object.create(s)),t[n]=e}}function _n(n,e,t=!1){const s=Fv();if(s||di){let r=di?di._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&_e(e)?e.call(s&&s.proxy):e}}const Tv={},Iv=()=>Object.create(Tv),bv=n=>Object.getPrototypeOf(n)===Tv;function r0(n,e,t,s=!1){const r={},i=Iv();n.propsDefaults=Object.create(null),Av(n,e,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:rv(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function i0(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,a=Le(r),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Dc(n.emitsOptions,m))continue;const g=e[m];if(c)if(Ve(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const E=yn(m);r[E]=bh(c,a,E,g,n,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Av(n,e,r,i)&&(u=!0);let h;for(const d in a)(!e||!Ve(e,d)&&((h=Fr(d))===d||!Ve(e,h)))&&(c?t&&(t[d]!==void 0||t[h]!==void 0)&&(r[d]=bh(c,a,d,void 0,n,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!Ve(e,d))&&(delete i[d],u=!0)}u&&us(n.attrs,"set","")}function Av(n,e,t,s){const[r,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(So(c))continue;const u=e[c];let h;r&&Ve(r,h=yn(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:Dc(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Le(t),u=a||qe;for(let h=0;h<i.length;h++){const d=i[h];t[d]=bh(r,c,d,u[d],n,!Ve(u,d))}}return o}function bh(n,e,t,s,r,i){const o=n[t];if(o!=null){const a=Ve(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=r;if(t in u)s=u[t];else{const h=_a(r);s=u[t]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(t,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Fr(t))&&(s=!0))}return s}const o0=new WeakMap;function Rv(n,e,t=!1){const s=t?o0:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},a=[];let c=!1;if(!_e(n)){const h=d=>{c=!0;const[m,g]=Rv(d,e,!0);Ut(o,m),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return Xe(n)&&s.set(n,li),li;if(ge(i))for(let h=0;h<i.length;h++){const d=yn(i[h]);fm(d)&&(o[d]=qe)}else if(i)for(const h in i){const d=yn(h);if(fm(d)){const m=i[h],g=o[d]=ge(m)||_e(m)?{type:m}:Ut({},m),E=g.type;let C=!1,R=!0;if(ge(E))for(let L=0;L<E.length;++L){const M=E[L],U=_e(M)&&M.name;if(U==="Boolean"){C=!0;break}else U==="String"&&(R=!1)}else C=_e(E)&&E.name==="Boolean";g[0]=C,g[1]=R,(C||Ve(g,"default"))&&a.push(d)}}const u=[o,a];return Xe(n)&&s.set(n,u),u}function fm(n){return n[0]!=="$"&&!So(n)}const Fd=n=>n==="_"||n==="_ctx"||n==="$stable",Ud=n=>ge(n)?n.map(jn):[jn(n)],a0=(n,e,t)=>{if(e._n)return e;const s=wt((...r)=>Ud(e(...r)),t);return s._c=!1,s},Sv=(n,e,t)=>{const s=n._ctx;for(const r in n){if(Fd(r))continue;const i=n[r];if(_e(i))e[r]=a0(r,i,s);else if(i!=null){const o=Ud(i);e[r]=()=>o}}},Cv=(n,e)=>{const t=Ud(e);n.slots.default=()=>t},Pv=(n,e,t)=>{for(const s in e)(t||!Fd(s))&&(n[s]=e[s])},l0=(n,e,t)=>{const s=n.slots=Iv();if(n.vnode.shapeFlag&32){const r=e._;r?(Pv(s,e,t),t&&Fy(s,"_",r,!0)):Sv(e,s)}else e&&Cv(n,e)},c0=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,o=qe;if(s.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Pv(r,e,t):(i=!e.$stable,Sv(e,r)),o=e}else e&&(Cv(n,e),o={default:1});if(i)for(const a in r)!Fd(a)&&o[a]==null&&delete r[a]},nn=I0;function u0(n){return h0(n)}function h0(n,e){const t=Pc();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=Wn,insertStaticContent:E}=n,C=(w,b,k,F=null,q=null,$=null,Y=void 0,G=null,z=!!b.dynamicChildren)=>{if(w===b)return;w&&!ho(w,b)&&(F=V(w),Ze(w,q,$,!0),w=null),b.patchFlag===-2&&(z=!1,b.dynamicChildren=null);const{type:W,ref:le,shapeFlag:Z}=b;switch(W){case Mc:R(w,b,k,F);break;case Qs:L(w,b,k,F);break;case El:w==null&&M(b,k,F,Y);break;case tt:N(w,b,k,F,q,$,Y,G,z);break;default:Z&1?ie(w,b,k,F,q,$,Y,G,z):Z&6?T(w,b,k,F,q,$,Y,G,z):(Z&64||Z&128)&&W.process(w,b,k,F,q,$,Y,G,z,re)}le!=null&&q?ko(le,w&&w.ref,$,b||w,!b):le==null&&w&&w.ref!=null&&ko(w.ref,null,$,w,!0)},R=(w,b,k,F)=>{if(w==null)s(b.el=a(b.children),k,F);else{const q=b.el=w.el;b.children!==w.children&&u(q,b.children)}},L=(w,b,k,F)=>{w==null?s(b.el=c(b.children||""),k,F):b.el=w.el},M=(w,b,k,F)=>{[w.el,w.anchor]=E(w.children,b,k,F,w.el,w.anchor)},U=({el:w,anchor:b},k,F)=>{let q;for(;w&&w!==b;)q=m(w),s(w,k,F),w=q;s(b,k,F)},H=({el:w,anchor:b})=>{let k;for(;w&&w!==b;)k=m(w),r(w),w=k;r(b)},ie=(w,b,k,F,q,$,Y,G,z)=>{b.type==="svg"?Y="svg":b.type==="math"&&(Y="mathml"),w==null?pe(b,k,F,q,$,Y,G,z):I(w,b,q,$,Y,G,z)},pe=(w,b,k,F,q,$,Y,G)=>{let z,W;const{props:le,shapeFlag:Z,transition:oe,dirs:fe}=w;if(z=w.el=o(w.type,$,le&&le.is,le),Z&8?h(z,w.children):Z&16&&v(w.children,z,null,F,q,Uu(w,$),Y,G),fe&&mr(w,null,F,"created"),A(z,w,w.scopeId,Y,F),le){for(const ve in le)ve!=="value"&&!So(ve)&&i(z,ve,null,le[ve],$,F);"value"in le&&i(z,"value",null,le.value,$),(W=le.onVnodeBeforeMount)&&Fn(W,F,w)}fe&&mr(w,null,F,"beforeMount");const ce=d0(q,oe);ce&&oe.beforeEnter(z),s(z,b,k),((W=le&&le.onVnodeMounted)||ce||fe)&&nn(()=>{W&&Fn(W,F,w),ce&&oe.enter(z),fe&&mr(w,null,F,"mounted")},q)},A=(w,b,k,F,q)=>{if(k&&g(w,k),F)for(let $=0;$<F.length;$++)g(w,F[$]);if(q){let $=q.subTree;if(b===$||Mv($.type)&&($.ssContent===b||$.ssFallback===b)){const Y=q.vnode;A(w,Y,Y.scopeId,Y.slotScopeIds,q.parent)}}},v=(w,b,k,F,q,$,Y,G,z=0)=>{for(let W=z;W<w.length;W++){const le=w[W]=G?Ms(w[W]):jn(w[W]);C(null,le,b,k,F,q,$,Y,G)}},I=(w,b,k,F,q,$,Y)=>{const G=b.el=w.el;let{patchFlag:z,dynamicChildren:W,dirs:le}=b;z|=w.patchFlag&16;const Z=w.props||qe,oe=b.props||qe;let fe;if(k&&gr(k,!1),(fe=oe.onVnodeBeforeUpdate)&&Fn(fe,k,b,w),le&&mr(b,w,k,"beforeUpdate"),k&&gr(k,!0),(Z.innerHTML&&oe.innerHTML==null||Z.textContent&&oe.textContent==null)&&h(G,""),W?S(w.dynamicChildren,W,G,k,F,Uu(b,q),$):Y||Ie(w,b,G,null,k,F,Uu(b,q),$,!1),z>0){if(z&16)P(G,Z,oe,k,q);else if(z&2&&Z.class!==oe.class&&i(G,"class",null,oe.class,q),z&4&&i(G,"style",Z.style,oe.style,q),z&8){const ce=b.dynamicProps;for(let ve=0;ve<ce.length;ve++){const Ce=ce[ve],mt=Z[Ce],gt=oe[Ce];(gt!==mt||Ce==="value")&&i(G,Ce,mt,gt,q,k)}}z&1&&w.children!==b.children&&h(G,b.children)}else!Y&&W==null&&P(G,Z,oe,k,q);((fe=oe.onVnodeUpdated)||le)&&nn(()=>{fe&&Fn(fe,k,b,w),le&&mr(b,w,k,"updated")},F)},S=(w,b,k,F,q,$,Y)=>{for(let G=0;G<b.length;G++){const z=w[G],W=b[G],le=z.el&&(z.type===tt||!ho(z,W)||z.shapeFlag&198)?d(z.el):k;C(z,W,le,null,F,q,$,Y,!0)}},P=(w,b,k,F,q)=>{if(b!==k){if(b!==qe)for(const $ in b)!So($)&&!($ in k)&&i(w,$,b[$],null,q,F);for(const $ in k){if(So($))continue;const Y=k[$],G=b[$];Y!==G&&$!=="value"&&i(w,$,G,Y,q,F)}"value"in k&&i(w,"value",b.value,k.value,q)}},N=(w,b,k,F,q,$,Y,G,z)=>{const W=b.el=w?w.el:a(""),le=b.anchor=w?w.anchor:a("");let{patchFlag:Z,dynamicChildren:oe,slotScopeIds:fe}=b;fe&&(G=G?G.concat(fe):fe),w==null?(s(W,k,F),s(le,k,F),v(b.children||[],k,le,q,$,Y,G,z)):Z>0&&Z&64&&oe&&w.dynamicChildren?(S(w.dynamicChildren,oe,k,q,$,Y,G),(b.key!=null||q&&b===q.subTree)&&kv(w,b,!0)):Ie(w,b,k,le,q,$,Y,G,z)},T=(w,b,k,F,q,$,Y,G,z)=>{b.slotScopeIds=G,w==null?b.shapeFlag&512?q.ctx.activate(b,k,F,Y,z):Bt(b,k,F,q,$,Y,z):cn(w,b,z)},Bt=(w,b,k,F,q,$,Y)=>{const G=w.component=k0(w,F,q);if(gv(w)&&(G.ctx.renderer=re),N0(G,!1,Y),G.asyncDep){if(q&&q.registerDep(G,it,Y),!w.el){const z=G.subTree=ue(Qs);L(null,z,b,k),w.placeholder=z.el}}else it(G,w,b,k,q,$,Y)},cn=(w,b,k)=>{const F=b.component=w.component;if(w0(w,b,k))if(F.asyncDep&&!F.asyncResolved){Se(F,b,k);return}else F.next=b,F.update();else b.el=w.el,F.vnode=b},it=(w,b,k,F,q,$,Y)=>{const G=()=>{if(w.isMounted){let{next:Z,bu:oe,u:fe,parent:ce,vnode:ve}=w;{const At=Nv(w);if(At){Z&&(Z.el=ve.el,Se(w,Z,Y)),At.asyncDep.then(()=>{w.isUnmounted||G()});return}}let Ce=Z,mt;gr(w,!1),Z?(Z.el=ve.el,Se(w,Z,Y)):Z=ve,oe&&yl(oe),(mt=Z.props&&Z.props.onVnodeBeforeUpdate)&&Fn(mt,ce,Z,ve),gr(w,!0);const gt=mm(w),hn=w.subTree;w.subTree=gt,C(hn,gt,d(hn.el),V(hn),w,q,$),Z.el=gt.el,Ce===null&&T0(w,gt.el),fe&&nn(fe,q),(mt=Z.props&&Z.props.onVnodeUpdated)&&nn(()=>Fn(mt,ce,Z,ve),q)}else{let Z;const{el:oe,props:fe}=b,{bm:ce,m:ve,parent:Ce,root:mt,type:gt}=w,hn=No(b);gr(w,!1),ce&&yl(ce),!hn&&(Z=fe&&fe.onVnodeBeforeMount)&&Fn(Z,Ce,b),gr(w,!0);{mt.ce&&mt.ce._def.shadowRoot!==!1&&mt.ce._injectChildStyle(gt);const At=w.subTree=mm(w);C(null,At,k,F,w,q,$),b.el=At.el}if(ve&&nn(ve,q),!hn&&(Z=fe&&fe.onVnodeMounted)){const At=b;nn(()=>Fn(Z,Ce,At),q)}(b.shapeFlag&256||Ce&&No(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&w.a&&nn(w.a,q),w.isMounted=!0,b=k=F=null}};w.scope.on();const z=w.effect=new Hy(G);w.scope.off();const W=w.update=z.run.bind(z),le=w.job=z.runIfDirty.bind(z);le.i=w,le.id=w.uid,z.scheduler=()=>Ld(le),gr(w,!0),W()},Se=(w,b,k)=>{b.component=w;const F=w.vnode.props;w.vnode=b,w.next=null,i0(w,b.props,F,k),c0(w,b.children,k),vs(),am(w),Es()},Ie=(w,b,k,F,q,$,Y,G,z=!1)=>{const W=w&&w.children,le=w?w.shapeFlag:0,Z=b.children,{patchFlag:oe,shapeFlag:fe}=b;if(oe>0){if(oe&128){wn(W,Z,k,F,q,$,Y,G,z);return}else if(oe&256){en(W,Z,k,F,q,$,Y,G,z);return}}fe&8?(le&16&&Kt(W,q,$),Z!==W&&h(k,Z)):le&16?fe&16?wn(W,Z,k,F,q,$,Y,G,z):Kt(W,q,$,!0):(le&8&&h(k,""),fe&16&&v(Z,k,F,q,$,Y,G,z))},en=(w,b,k,F,q,$,Y,G,z)=>{w=w||li,b=b||li;const W=w.length,le=b.length,Z=Math.min(W,le);let oe;for(oe=0;oe<Z;oe++){const fe=b[oe]=z?Ms(b[oe]):jn(b[oe]);C(w[oe],fe,k,null,q,$,Y,G,z)}W>le?Kt(w,q,$,!0,!1,Z):v(b,k,F,q,$,Y,G,z,Z)},wn=(w,b,k,F,q,$,Y,G,z)=>{let W=0;const le=b.length;let Z=w.length-1,oe=le-1;for(;W<=Z&&W<=oe;){const fe=w[W],ce=b[W]=z?Ms(b[W]):jn(b[W]);if(ho(fe,ce))C(fe,ce,k,null,q,$,Y,G,z);else break;W++}for(;W<=Z&&W<=oe;){const fe=w[Z],ce=b[oe]=z?Ms(b[oe]):jn(b[oe]);if(ho(fe,ce))C(fe,ce,k,null,q,$,Y,G,z);else break;Z--,oe--}if(W>Z){if(W<=oe){const fe=oe+1,ce=fe<le?b[fe].el:F;for(;W<=oe;)C(null,b[W]=z?Ms(b[W]):jn(b[W]),k,ce,q,$,Y,G,z),W++}}else if(W>oe)for(;W<=Z;)Ze(w[W],q,$,!0),W++;else{const fe=W,ce=W,ve=new Map;for(W=ce;W<=oe;W++){const _t=b[W]=z?Ms(b[W]):jn(b[W]);_t.key!=null&&ve.set(_t.key,W)}let Ce,mt=0;const gt=oe-ce+1;let hn=!1,At=0;const Cs=new Array(gt);for(W=0;W<gt;W++)Cs[W]=0;for(W=fe;W<=Z;W++){const _t=w[W];if(mt>=gt){Ze(_t,q,$,!0);continue}let dn;if(_t.key!=null)dn=ve.get(_t.key);else for(Ce=ce;Ce<=oe;Ce++)if(Cs[Ce-ce]===0&&ho(_t,b[Ce])){dn=Ce;break}dn===void 0?Ze(_t,q,$,!0):(Cs[dn-ce]=W+1,dn>=At?At=dn:hn=!0,C(_t,b[dn],k,null,q,$,Y,G,z),mt++)}const Ji=hn?f0(Cs):li;for(Ce=Ji.length-1,W=gt-1;W>=0;W--){const _t=ce+W,dn=b[_t],$a=b[_t+1],zr=_t+1<le?$a.el||$a.placeholder:F;Cs[W]===0?C(null,dn,k,zr,q,$,Y,G,z):hn&&(Ce<0||W!==Ji[Ce]?un(dn,k,zr,2):Ce--)}}},un=(w,b,k,F,q=null)=>{const{el:$,type:Y,transition:G,children:z,shapeFlag:W}=w;if(W&6){un(w.component.subTree,b,k,F);return}if(W&128){w.suspense.move(b,k,F);return}if(W&64){Y.move(w,b,k,re);return}if(Y===tt){s($,b,k);for(let Z=0;Z<z.length;Z++)un(z[Z],b,k,F);s(w.anchor,b,k);return}if(Y===El){U(w,b,k);return}if(F!==2&&W&1&&G)if(F===0)G.beforeEnter($),s($,b,k),nn(()=>G.enter($),q);else{const{leave:Z,delayLeave:oe,afterLeave:fe}=G,ce=()=>{w.ctx.isUnmounted?r($):s($,b,k)},ve=()=>{$._isLeaving&&$[MA](!0),Z($,()=>{ce(),fe&&fe()})};oe?oe($,ce,ve):ve()}else s($,b,k)},Ze=(w,b,k,F=!1,q=!1)=>{const{type:$,props:Y,ref:G,children:z,dynamicChildren:W,shapeFlag:le,patchFlag:Z,dirs:oe,cacheIndex:fe}=w;if(Z===-2&&(q=!1),G!=null&&(vs(),ko(G,null,k,w,!0),Es()),fe!=null&&(b.renderCache[fe]=void 0),le&256){b.ctx.deactivate(w);return}const ce=le&1&&oe,ve=!No(w);let Ce;if(ve&&(Ce=Y&&Y.onVnodeBeforeUnmount)&&Fn(Ce,b,w),le&6)Vn(w.component,k,F);else{if(le&128){w.suspense.unmount(k,F);return}ce&&mr(w,null,b,"beforeUnmount"),le&64?w.type.remove(w,b,k,re,F):W&&!W.hasOnce&&($!==tt||Z>0&&Z&64)?Kt(W,b,k,!1,!0):($===tt&&Z&384||!q&&le&16)&&Kt(z,b,k),F&&et(w)}(ve&&(Ce=Y&&Y.onVnodeUnmounted)||ce)&&nn(()=>{Ce&&Fn(Ce,b,w),ce&&mr(w,null,b,"unmounted")},k)},et=w=>{const{type:b,el:k,anchor:F,transition:q}=w;if(b===tt){Ss(k,F);return}if(b===El){H(w);return}const $=()=>{r(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:Y,delayLeave:G}=q,z=()=>Y(k,$);G?G(w.el,$,z):z()}else $()},Ss=(w,b)=>{let k;for(;w!==b;)k=m(w),r(w),w=k;r(b)},Vn=(w,b,k)=>{const{bum:F,scope:q,job:$,subTree:Y,um:G,m:z,a:W}=w;pm(z),pm(W),F&&yl(F),q.stop(),$&&($.flags|=8,Ze(Y,w,b,k)),G&&nn(G,b),nn(()=>{w.isUnmounted=!0},b)},Kt=(w,b,k,F=!1,q=!1,$=0)=>{for(let Y=$;Y<w.length;Y++)Ze(w[Y],b,k,F,q)},V=w=>{if(w.shapeFlag&6)return V(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const b=m(w.anchor||w.el),k=b&&b[xA];return k?m(k):b};let ee=!1;const X=(w,b,k)=>{w==null?b._vnode&&Ze(b._vnode,null,null,!0):C(b._vnode||null,w,b,null,null,null,k),b._vnode=w,ee||(ee=!0,am(),dv(),ee=!1)},re={p:C,um:Ze,m:un,r:et,mt:Bt,mc:v,pc:Ie,pbc:S,n:V,o:n};return{render:X,hydrate:void 0,createApp:s0(X)}}function Uu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function gr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function d0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function kv(n,e,t=!1){const s=n.children,r=e.children;if(ge(s)&&ge(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ms(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&kv(o,a)),a.type===Mc&&a.patchFlag!==-1&&(a.el=o.el),a.type===Qs&&!a.el&&(a.el=o.el)}}function f0(n){const e=n.slice(),t=[0];let s,r,i,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(r=t[t.length-1],n[r]<u){e[s]=r,t.push(s);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function Nv(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nv(e)}function pm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const p0=Symbol.for("v-scx"),m0=()=>_n(p0);function Ar(n,e,t){return Ov(n,e,t)}function Ov(n,e,t=qe){const{immediate:s,deep:r,flush:i,once:o}=t,a=Ut({},t),c=e&&s||!e&&i!=="post";let u;if(Jo){if(i==="sync"){const g=m0();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Wn,g.resume=Wn,g.pause=Wn,g}}const h=Dt;a.call=(g,E,C)=>Xn(g,h,E,C);let d=!1;i==="post"?a.scheduler=g=>{nn(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,E)=>{E?g():Ld(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=PA(n,e,a);return Jo&&(u?u.push(m):c&&m()),m}function g0(n,e,t){const s=this.proxy,r=ct(n)?n.includes(".")?xv(s,n):()=>s[n]:n.bind(s,s);let i;_e(e)?i=e:(i=e.handler,t=e);const o=_a(this),a=Ov(r,i.bind(s),t);return o(),a}function xv(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const _0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yn(e)}Modifiers`]||n[`${Fr(e)}Modifiers`];function y0(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||qe;let r=t;const i=e.startsWith("update:"),o=i&&_0(s,e.slice(7));o&&(o.trim&&(r=t.map(h=>ct(h)?h.trim():h)),o.number&&(r=t.map(gh)));let a,c=s[a=xu(e)]||s[a=xu(yn(e))];!c&&i&&(c=s[a=xu(Fr(e))]),c&&Xn(c,n,6,r);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Xn(u,n,6,r)}}function Dv(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},a=!1;if(!_e(n)){const c=u=>{const h=Dv(u,e,!0);h&&(a=!0,Ut(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Xe(n)&&s.set(n,null),null):(ge(i)?i.forEach(c=>o[c]=null):Ut(o,i),Xe(n)&&s.set(n,o),o)}function Dc(n,e){return!n||!Ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(n,e[0].toLowerCase()+e.slice(1))||Ve(n,Fr(e))||Ve(n,e))}function mm(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:E,inheritAttrs:C}=n,R=$l(n);let L,M;try{if(t.shapeFlag&4){const H=r||s,ie=H;L=jn(u.call(ie,H,h,d,g,m,E)),M=a}else{const H=e;L=jn(H.length>1?H(d,{attrs:a,slots:o,emit:c}):H(d,null)),M=e.props?a:v0(a)}}catch(H){xo.length=0,Oc(H,n,1),L=ue(Qs)}let U=L;if(M&&C!==!1){const H=Object.keys(M),{shapeFlag:ie}=U;H.length&&ie&7&&(i&&H.some(Ad)&&(M=E0(M,i)),U=wi(U,M,!1,!0))}return t.dirs&&(U=wi(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(t.dirs):t.dirs),t.transition&&Vd(U,t.transition),L=U,$l(R),L}const v0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ac(t))&&((e||(e={}))[t]=n[t]);return e},E0=(n,e)=>{const t={};for(const s in n)(!Ad(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function w0(n,e,t){const{props:s,children:r,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?gm(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==s[m]&&!Dc(u,m))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?gm(s,o,u):!0:!!o;return!1}function gm(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==n[i]&&!Dc(t,i))return!0}return!1}function T0({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Mv=n=>n.__isSuspense;function I0(n,e){e&&e.pendingBranch?ge(n)?e.effects.push(...n):e.effects.push(n):OA(n)}const tt=Symbol.for("v-fgt"),Mc=Symbol.for("v-txt"),Qs=Symbol.for("v-cmt"),El=Symbol.for("v-stc"),xo=[];let on=null;function Q(n=!1){xo.push(on=n?null:[])}function b0(){xo.pop(),on=xo[xo.length-1]||null}let Yo=1;function _m(n,e=!1){Yo+=n,n<0&&on&&e&&(on.hasOnce=!0)}function Lv(n){return n.dynamicChildren=Yo>0?on||li:null,b0(),Yo>0&&on&&on.push(n),n}function ne(n,e,t,s,r,i){return Lv(y(n,e,t,s,r,i,!0))}function or(n,e,t,s,r){return Lv(ue(n,e,t,s,r,!0))}function jl(n){return n?n.__v_isVNode===!0:!1}function ho(n,e){return n.type===e.type&&n.key===e.key}const Vv=({key:n})=>n??null,wl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ct(n)||Ft(n)||_e(n)?{i:rn,r:n,k:e,f:!!t}:n:null);function y(n,e=null,t=null,s=0,r=null,i=n===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Vv(e),ref:e&&wl(e),scopeId:pv,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(Bd(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=ct(t)?8:16),Yo>0&&!o&&on&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&on.push(c),c}const ue=A0;function A0(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===KA)&&(n=Qs),jl(n)){const a=wi(n,e,!0);return t&&Bd(a,t),Yo>0&&!i&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(L0(n)&&(n=n.__vccOpts),e){e=R0(e);let{class:a,style:c}=e;a&&!ct(a)&&(e.class=Cd(a)),Xe(c)&&(Md(c)&&!ge(c)&&(c=Ut({},c)),e.style=ma(c))}const o=ct(n)?1:Mv(n)?128:DA(n)?64:Xe(n)?4:_e(n)?2:0;return y(n,e,t,s,r,o,i,!0)}function R0(n){return n?Md(n)||bv(n)?Ut({},n):n:null}function wi(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?S0(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Vv(u),ref:e&&e.ref?t&&i?ge(i)?i.concat(wl(e)):[i,wl(e)]:wl(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wi(n.ssContent),ssFallback:n.ssFallback&&wi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&Vd(h,c.clone(h)),h}function Jt(n=" ",e=0){return ue(Mc,null,n,e)}function $d(n,e){const t=ue(El,null,n);return t.staticCount=e,t}function zt(n="",e=!1){return e?(Q(),or(Qs,null,n)):ue(Qs,null,n)}function jn(n){return n==null||typeof n=="boolean"?ue(Qs):ge(n)?ue(tt,null,n.slice()):jl(n)?Ms(n):ue(Mc,null,String(n))}function Ms(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wi(n)}function Bd(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(ge(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Bd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!bv(e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:rn},t=32):(e=String(e),s&64?(t=16,e=[Jt(e)]):t=8);n.children=e,n.shapeFlag|=t}function S0(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Cd([e.class,s.class]));else if(r==="style")e.style=ma([e.style,s.style]);else if(Ac(r)){const i=e[r],o=s[r];o&&i!==o&&!(ge(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Fn(n,e,t,s=null){Xn(n,e,7,[t,s])}const C0=wv();let P0=0;function k0(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||C0,i={uid:P0++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rv(s,r),emitsOptions:Dv(s,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:s.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=y0.bind(null,i),n.ce&&n.ce(i),i}let Dt=null;const Fv=()=>Dt||rn;let ql,Ah;{const n=Pc(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ql=e("__VUE_INSTANCE_SETTERS__",t=>Dt=t),Ah=e("__VUE_SSR_SETTERS__",t=>Jo=t)}const _a=n=>{const e=Dt;return ql(n),n.scope.on(),()=>{n.scope.off(),ql(e)}},ym=()=>{Dt&&Dt.scope.off(),ql(null)};function Uv(n){return n.vnode.shapeFlag&4}let Jo=!1;function N0(n,e=!1,t=!1){e&&Ah(e);const{props:s,children:r}=n.vnode,i=Uv(n);r0(n,s,i,e),l0(n,r,t||e);const o=i?O0(n,e):void 0;return e&&Ah(!1),o}function O0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,YA);const{setup:s}=t;if(s){vs();const r=n.setupContext=s.length>1?D0(n):null,i=_a(n),o=ga(s,n,0,[n.props,r]),a=My(o);if(Es(),i(),(a||n.sp)&&!No(n)&&mv(n),a){if(o.then(ym,ym),e)return o.then(c=>{vm(n,c)}).catch(c=>{Oc(c,n,0)});n.asyncDep=o}else vm(n,o)}else $v(n)}function vm(n,e,t){_e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Xe(e)&&(n.setupState=lv(e)),$v(n)}function $v(n,e,t){const s=n.type;n.render||(n.render=s.render||Wn);{const r=_a(n);vs();try{JA(n)}finally{Es(),r()}}}const x0={get(n,e){return kt(n,"get",""),n[e]}};function D0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,x0),slots:n.slots,emit:n.emit,expose:e}}function Lc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(lv(ov(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Oo)return Oo[t](n)},has(e,t){return t in e||t in Oo}})):n.proxy}function M0(n,e=!0){return _e(n)?n.displayName||n.name:n.name||e&&n.__name}function L0(n){return _e(n)&&"__vccOpts"in n}const In=(n,e)=>SA(n,e,Jo);function Bv(n,e,t){const s=arguments.length;return s===2?Xe(e)&&!ge(e)?jl(e)?ue(n,null,[e]):ue(n,e):ue(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&jl(t)&&(t=[t]),ue(n,e,t))}const V0="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rh;const Em=typeof window<"u"&&window.trustedTypes;if(Em)try{Rh=Em.createPolicy("vue",{createHTML:n=>n})}catch{}const jv=Rh?n=>Rh.createHTML(n):n=>n,F0="http://www.w3.org/2000/svg",U0="http://www.w3.org/1998/Math/MathML",cs=typeof document<"u"?document:null,wm=cs&&cs.createElement("template"),$0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?cs.createElementNS(F0,n):e==="mathml"?cs.createElementNS(U0,n):t?cs.createElement(n,{is:t}):cs.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>cs.createTextNode(n),createComment:n=>cs.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>cs.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{wm.innerHTML=jv(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=wm.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},B0=Symbol("_vtc");function j0(n,e,t){const s=n[B0];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Tm=Symbol("_vod"),q0=Symbol("_vsh"),H0=Symbol(""),W0=/(^|;)\s*display\s*:/;function z0(n,e,t){const s=n.style,r=ct(t);let i=!1;if(t&&!r){if(e)if(ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Tl(s,a,"")}else for(const o in e)t[o]==null&&Tl(s,o,"");for(const o in t)o==="display"&&(i=!0),Tl(s,o,t[o])}else if(r){if(e!==t){const o=s[H0];o&&(t+=";"+o),s.cssText=t,i=W0.test(t)}}else e&&n.removeAttribute("style");Tm in n&&(n[Tm]=i?s.display:"",n[q0]&&(s.display="none"))}const Im=/\s*!important$/;function Tl(n,e,t){if(ge(t))t.forEach(s=>Tl(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=G0(n,e);Im.test(t)?n.setProperty(Fr(s),t.replace(Im,""),"important"):n[s]=t}}const bm=["Webkit","Moz","ms"],$u={};function G0(n,e){const t=$u[e];if(t)return t;let s=yn(e);if(s!=="filter"&&s in n)return $u[e]=s;s=Cc(s);for(let r=0;r<bm.length;r++){const i=bm[r]+s;if(i in n)return $u[e]=i}return e}const Am="http://www.w3.org/1999/xlink";function Rm(n,e,t,s,r,i=sA(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Am,e.slice(6,e.length)):n.setAttributeNS(Am,e,t):t==null||i&&!Uy(t)?n.removeAttribute(e):n.setAttribute(e,i?"":rr(t)?String(t):t)}function Sm(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jv(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Uy(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function ei(n,e,t,s){n.addEventListener(e,t,s)}function K0(n,e,t,s){n.removeEventListener(e,t,s)}const Cm=Symbol("_vei");function Q0(n,e,t,s,r=null){const i=n[Cm]||(n[Cm]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Y0(e);if(s){const u=i[e]=Z0(s,r);ei(n,a,u,c)}else o&&(K0(n,a,o,c),i[e]=void 0)}}const Pm=/(?:Once|Passive|Capture)$/;function Y0(n){let e;if(Pm.test(n)){e={};let s;for(;s=n.match(Pm);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fr(n.slice(2)),e]}let Bu=0;const J0=Promise.resolve(),X0=()=>Bu||(J0.then(()=>Bu=0),Bu=Date.now());function Z0(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Xn(eR(s,t.value),e,5,[s])};return t.value=n,t.attached=X0(),t}function eR(n,e){if(ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const km=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,tR=(n,e,t,s,r,i)=>{const o=r==="svg";e==="class"?j0(n,s,o):e==="style"?z0(n,t,s):Ac(e)?Ad(e)||Q0(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nR(n,e,s,o))?(Sm(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rm(n,e,s,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ct(s))?Sm(n,yn(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Rm(n,e,s,o))};function nR(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&km(e)&&_e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return km(e)&&ct(t)?!1:e in n}const Nm=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ge(e)?t=>yl(e,t):e};function sR(n){n.target.composing=!0}function Om(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ju=Symbol("_assign"),Xo={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[ju]=Nm(r);const i=s||r.props&&r.props.type==="number";ei(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=gh(a)),n[ju](a)}),t&&ei(n,"change",()=>{n.value=n.value.trim()}),e||(ei(n,"compositionstart",sR),ei(n,"compositionend",Om),ei(n,"change",Om))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},o){if(n[ju]=Nm(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?gh(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===c)||(n.value=c))}},rR=Ut({patchProp:tR},$0);let xm;function iR(){return xm||(xm=u0(rR))}const oR=((...n)=>{const e=iR().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=lR(s);if(!r)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,aR(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function aR(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lR(n){return ct(n)?document.querySelector(n):n}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const cR=Symbol();var Dm;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Dm||(Dm={}));function uR(){const n=qy(!0),e=n.run(()=>we({}));let t=[],s=[];const r=ov({install(i){r._a=i,i.provide(cR,r),i.config.globalProperties.$pinia=r,s.forEach(o=>t.push(o)),s=[]},use(i){return this._a?t.push(i):s.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const hR=()=>{};var Mm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(n,e){if(!n)throw Mi(e)},Mi=function(n){return new Error("Firebase Database ("+qv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},dR=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(t[h],t[d],t[m],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const d=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new fR;const m=i<<2|a>>4;if(s.push(m),u!==64){const g=a<<4&240|u>>2;if(s.push(g),d!==64){const E=u<<6&192|d;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wv=function(n){const e=Hv(n);return Vc.encodeByteArray(e,!0)},Hl=function(n){return Wv(n).replace(/\./g,"")},Wl=function(n){try{return Vc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(n){return zv(void 0,n)}function zv(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!mR(t)||(n[t]=zv(n[t],e[t]));return n}function mR(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=()=>gR().__FIREBASE_DEFAULTS__,yR=()=>{if(typeof process>"u"||typeof Mm>"u")return;const n=Mm.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wl(n[1]);return e&&JSON.parse(e)},Fc=()=>{try{return hR()||_R()||yR()||vR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gv=n=>Fc()?.emulatorHosts?.[n],ER=n=>{const e=Gv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Kv=()=>Fc()?.config,Qv=n=>Fc()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yv(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Hl(JSON.stringify(t)),Hl(JSON.stringify(o)),""].join(".")}const Do={};function TR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Do))Do[e]?n.emulator.push(e):n.prod.push(e);return n}function IR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Lm=!1;function Jv(n,e){if(typeof window>"u"||typeof document>"u"||!Li(window.location.host)||Do[n]===e||Do[n]||Lm)return;Do[n]=e;function t(m){return`__firebase__banner__${m}`}const s="__firebase__banner",i=TR().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Lm=!0,o()},m}function h(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=IR(s),g=t("text"),E=document.getElementById(g)||document.createElement("span"),C=t("learnmore"),R=document.getElementById(C)||document.createElement("a"),L=t("preprendIcon"),M=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const U=m.element;a(U),h(R,C);const H=u();c(M,L),U.append(M,E,R,H),document.body.appendChild(U)}i?(E.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function bR(){const n=Fc()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SR(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CR(){return qv.NODE_ADMIN===!0}function PR(){return!bR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zv(){try{return typeof indexedDB=="object"}catch{return!1}}function kR(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="FirebaseError";class ns extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=NR,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?OR(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ns(r,a,s)}}function OR(n,e){return n.replace(xR,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const xR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){return JSON.parse(n)}function Tt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=ea(Wl(i[0])||""),t=ea(Wl(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},DR=function(n){const e=eE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},MR=function(n){const e=eE(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ti(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Sh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zl(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Sr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Vm(i)&&Vm(o)){if(!Sr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Vm(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Eo(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function wo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const m=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const m=(r<<5|r>>>27)+u+c+h+s[d]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function VR(n,e){const t=new FR(n,e);return t.subscribe.bind(t)}class FR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");UR(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=qu),r.error===void 0&&(r.error=qu),r.complete===void 0&&(r.complete=qu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qu(){}function $R(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,J(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Uc=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n){return n&&n._delegate?n._delegate:n}class On{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Zo;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HR(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qR(n){return n===yr?void 0:n}function HR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Te||(Te={}));const zR={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},GR=Te.INFO,KR={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},QR=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=KR[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=GR,this._logHandler=QR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const YR=(n,e)=>e.some(t=>n instanceof t);let Fm,Um;function JR(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XR(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tE=new WeakMap,Ch=new WeakMap,nE=new WeakMap,Hu=new WeakMap,qd=new WeakMap;function ZR(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(js(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&tE.set(t,n)}).catch(()=>{}),qd.set(e,n),e}function eS(n){if(Ch.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ch.set(n,e)}let Ph={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ch.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return js(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tS(n){Ph=n(Ph)}function nS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Wu(this),e,...t);return nE.set(s,e.sort?e.sort():[e]),js(s)}:XR().includes(n)?function(...e){return n.apply(Wu(this),e),js(tE.get(this))}:function(...e){return js(n.apply(Wu(this),e))}}function sS(n){return typeof n=="function"?nS(n):(n instanceof IDBTransaction&&eS(n),YR(n,JR())?new Proxy(n,Ph):n)}function js(n){if(n instanceof IDBRequest)return ZR(n);if(Hu.has(n))return Hu.get(n);const e=sS(n);return e!==n&&(Hu.set(n,e),qd.set(e,n)),e}const Wu=n=>qd.get(n);function rS(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=js(o);return s&&o.addEventListener("upgradeneeded",c=>{s(js(o.result),c.oldVersion,c.newVersion,js(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const iS=["get","getKey","getAll","getAllKeys","count"],oS=["put","add","delete","clear"],zu=new Map;function $m(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zu.get(e))return zu.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=oS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||iS.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return zu.set(e,i),i}tS(n=>({...n,get:(e,t,s)=>$m(e,t)||n.get(e,t,s),has:(e,t)=>!!$m(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lS(n){return n.getComponent()?.type==="VERSION"}const kh="@firebase/app",Bm="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new ya("@firebase/app"),cS="@firebase/app-compat",uS="@firebase/analytics-compat",hS="@firebase/analytics",dS="@firebase/app-check-compat",fS="@firebase/app-check",pS="@firebase/auth",mS="@firebase/auth-compat",gS="@firebase/database",_S="@firebase/data-connect",yS="@firebase/database-compat",vS="@firebase/functions",ES="@firebase/functions-compat",wS="@firebase/installations",TS="@firebase/installations-compat",IS="@firebase/messaging",bS="@firebase/messaging-compat",AS="@firebase/performance",RS="@firebase/performance-compat",SS="@firebase/remote-config",CS="@firebase/remote-config-compat",PS="@firebase/storage",kS="@firebase/storage-compat",NS="@firebase/firestore",OS="@firebase/ai",xS="@firebase/firestore-compat",DS="firebase",MS="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="[DEFAULT]",LS={[kh]:"fire-core",[cS]:"fire-core-compat",[hS]:"fire-analytics",[uS]:"fire-analytics-compat",[fS]:"fire-app-check",[dS]:"fire-app-check-compat",[pS]:"fire-auth",[mS]:"fire-auth-compat",[gS]:"fire-rtdb",[_S]:"fire-data-connect",[yS]:"fire-rtdb-compat",[vS]:"fire-fn",[ES]:"fire-fn-compat",[wS]:"fire-iid",[TS]:"fire-iid-compat",[IS]:"fire-fcm",[bS]:"fire-fcm-compat",[AS]:"fire-perf",[RS]:"fire-perf-compat",[SS]:"fire-rc",[CS]:"fire-rc-compat",[PS]:"fire-gcs",[kS]:"fire-gcs-compat",[NS]:"fire-fst",[xS]:"fire-fst-compat",[OS]:"fire-vertex","fire-js":"fire-js",[DS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Map,VS=new Map,Oh=new Map;function jm(n,e){try{n.container.addComponent(e)}catch(t){ws.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if(Oh.has(e))return ws.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,n);for(const t of Gl.values())jm(t,n);for(const t of VS.values())jm(t,n);return!0}function Hd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qs=new Vi("app","Firebase",FS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=MS;function sE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Nh,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw qs.create("bad-app-name",{appName:String(r)});if(t||(t=Kv()),!t)throw qs.create("no-options");const i=Gl.get(r);if(i){if(Sr(t,i.options)&&Sr(s,i.config))return i;throw qs.create("duplicate-app",{appName:r})}const o=new WR(r);for(const c of Oh.values())o.addComponent(c);const a=new US(t,s,o);return Gl.set(r,a),a}function Wd(n=Nh){const e=Gl.get(n);if(!e&&n===Nh&&Kv())return sE();if(!e)throw qs.create("no-app",{appName:n});return e}function an(n,e,t){let s=LS[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ws.warn(o.join(" "));return}Zn(new On(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="firebase-heartbeat-database",BS=1,ta="firebase-heartbeat-store";let Gu=null;function rE(){return Gu||(Gu=rS($S,BS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ta)}catch(t){console.warn(t)}}}}).catch(n=>{throw qs.create("idb-open",{originalErrorMessage:n.message})})),Gu}async function jS(n){try{const t=(await rE()).transaction(ta),s=await t.objectStore(ta).get(iE(n));return await t.done,s}catch(e){if(e instanceof ns)ws.warn(e.message);else{const t=qs.create("idb-get",{originalErrorMessage:e?.message});ws.warn(t.message)}}}async function qm(n,e){try{const s=(await rE()).transaction(ta,"readwrite");await s.objectStore(ta).put(e,iE(n)),await s.done}catch(t){if(t instanceof ns)ws.warn(t.message);else{const s=qs.create("idb-set",{originalErrorMessage:t?.message});ws.warn(s.message)}}}function iE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=1024,HS=30;class WS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GS(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hm();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>HS){const r=KS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ws.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hm(),{heartbeatsToSend:t,unsentEntries:s}=zS(this._heartbeatsCache.heartbeats),r=Hl(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return ws.warn(e),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function zS(n,e=qS){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Wm(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Wm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class GS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zv()?kR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wm(n){return Hl(JSON.stringify({version:2,heartbeats:n})).length}function KS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(n){Zn(new On("platform-logger",e=>new aS(e),"PRIVATE")),Zn(new On("heartbeat",e=>new WS(e),"PRIVATE")),an(kh,Bm,n),an(kh,Bm,"esm2020"),an("fire-js","")}QS("");function oE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YS=oE,aE=new Vi("auth","Firebase",oE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new ya("@firebase/auth");function JS(n,...e){Kl.logLevel<=Te.WARN&&Kl.warn(`Auth (${ar}): ${n}`,...e)}function Il(n,...e){Kl.logLevel<=Te.ERROR&&Kl.error(`Auth (${ar}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,...e){throw Gd(n,...e)}function kn(n,...e){return Gd(n,...e)}function zd(n,e,t){const s={...YS(),[e]:t};return new Vi("auth","Firebase",s).create(e,{appName:n.name})}function _s(n){return zd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function XS(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&vn(n,"argument-error"),zd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gd(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return aE.create(n,...e)}function he(n,e,...t){if(!n)throw Gd(e,...t)}function ps(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Il(e),new Error(e)}function Ts(n,e){n||ps(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){return typeof self<"u"&&self.location?.href||""}function ZS(){return zm()==="http:"||zm()==="https:"}function zm(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZS()||RR()||"connection"in navigator)?navigator.onLine:!0}function tC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ts(t>e,"Short delay should be less than long delay!"),this.isMobile=jd()||Xv()}get(){return eC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e){Ts(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ps("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ps("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ps("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rC=new va(3e4,6e4);function lr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function cr(n,e,t,s,r={}){return cE(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Fi({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...i};return AR()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Li(n.emulatorConfig.host)&&(u.credentials="include"),lE.fetch()(await uE(n,n.config.apiHost,t,a),u)})}async function cE(n,e,t){n._canInitEmulator=!1;const s={...nC,...e};try{const r=new oC(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw il(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw il(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw il(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw il(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zd(n,h,u);vn(n,h)}}catch(r){if(r instanceof ns)throw r;vn(n,"network-request-failed",{message:String(r)})}}async function Ea(n,e,t,s,r={}){const i=await cr(n,e,t,s,r);return"mfaPendingCredential"in i&&vn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function uE(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?Kd(n.config,r):`${n.config.apiScheme}://${r}`;return sC.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function iC(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(kn(this.auth,"network-request-failed")),rC.get())})}}function il(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=kn(n,e,s);return r.customData._tokenResponse=t,r}function Gm(n){return n!==void 0&&n.enterprise!==void 0}class aC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lC(n,e){return cr(n,"GET","/v2/recaptchaConfig",lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(n,e){return cr(n,"POST","/v1/accounts:delete",e)}async function Ql(n,e){return cr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uC(n,e=!1){const t=Gt(n),s=await t.getIdToken(e),r=Qd(s);he(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:Mo(Ku(r.auth_time)),issuedAtTime:Mo(Ku(r.iat)),expirationTime:Mo(Ku(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ku(n){return Number(n)*1e3}function Qd(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const r=Wl(t);return r?JSON.parse(r):(Il("Failed to decode base64 JWT payload"),null)}catch(r){return Il("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Km(n){const e=Qd(n);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ns&&hC(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function hC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(n){const e=n.auth,t=await n.getIdToken(),s=await na(n,Ql(e,{idToken:t}));he(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=r.providerUserInfo?.length?hE(r.providerUserInfo):[],o=pC(n.providerData,i),a=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!o?.length,u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Dh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function fC(n){const e=Gt(n);await Yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pC(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hE(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(n,e){const t=await cE(n,{},async()=>{const s=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await uE(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&Li(n.emulatorConfig.host)&&(c.credentials="include"),lE.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gC(n,e){return cr(n,"POST","/v2/accounts:revokeToken",lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=Km(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await mC(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new fi;return s&&(he(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(he(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return ps("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n,e){he(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class An{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new dC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Dh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await na(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uC(this,e)}reload(){return fC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new An({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Yl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(_s(this.auth));const e=await this.getIdToken();return await na(this,cC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:g,providerData:E,stsTokenManager:C}=t;he(d&&C,e,"internal-error");const R=fi.fromJSON(this.name,C);he(typeof d=="string",e,"internal-error"),Os(s,e.name),Os(r,e.name),he(typeof m=="boolean",e,"internal-error"),he(typeof g=="boolean",e,"internal-error"),Os(i,e.name),Os(o,e.name),Os(a,e.name),Os(c,e.name),Os(u,e.name),Os(h,e.name);const L=new An({uid:d,auth:e,email:r,emailVerified:m,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(L.providerData=E.map(M=>({...M}))),c&&(L._redirectEventId=c),L}static async _fromIdTokenResponse(e,t,s=!1){const r=new fi;r.updateFromServerResponse(t);const i=new An({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yl(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];he(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?hE(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new fi;a.updateFromIdToken(s);const c=new An({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Dh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Map;function ms(n){Ts(n instanceof Function,"Expected a class definition");let e=Qm.get(n);return e?(Ts(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qm.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dE.type="NONE";const Ym=dE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n,e,t){return`firebase:${n}:${e}:${t}`}class pi{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=bl(this.userKey,r.apiKey,i),this.fullPersistenceKey=bl("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ql(this.auth,{idToken:e}).catch(()=>{});return t?An._fromGetAccountInfoResponse(this.auth,t,e):null}return An._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new pi(ms(Ym),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ms(Ym);const o=bl(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const m=await Ql(e,{idToken:h}).catch(()=>{});if(!m)break;d=await An._fromGetAccountInfoResponse(e,m,h)}else d=An._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pi(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new pi(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yE(e))return"Blackberry";if(vE(e))return"Webos";if(pE(e))return"Safari";if((e.includes("chrome/")||mE(e))&&!e.includes("edge/"))return"Chrome";if(_E(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function fE(n=$t()){return/firefox\//i.test(n)}function pE(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mE(n=$t()){return/crios\//i.test(n)}function gE(n=$t()){return/iemobile/i.test(n)}function _E(n=$t()){return/android/i.test(n)}function yE(n=$t()){return/blackberry/i.test(n)}function vE(n=$t()){return/webos/i.test(n)}function Yd(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _C(n=$t()){return Yd(n)&&!!window.navigator?.standalone}function yC(){return SR()&&document.documentMode===10}function EE(n=$t()){return Yd(n)||_E(n)||vE(n)||yE(n)||/windows phone/i.test(n)||gE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n,e=[]){let t;switch(n){case"Browser":t=Jm($t());break;case"Worker":t=`${Jm($t())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ar}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(n,e={}){return cr(n,"GET","/v2/passwordPolicy",lr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=6;class TC{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.beforeStateQueue=new vC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ms(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ql(this,{idToken:e}),s=await An._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Wt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yl(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(_s(this));const t=e?Gt(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ms(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EC(this),t=new TC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await gC(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ms(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[ms(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&JS(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ur(n){return Gt(n)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=VR(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(n){$c=n}function TE(n){return $c.loadJS(n)}function AC(){return $c.recaptchaEnterpriseScript}function RC(){return $c.gapiScript}function SC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class CC{constructor(){this.enterprise=new PC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class PC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const kC="recaptcha-enterprise",IE="NO_RECAPTCHA";class NC{constructor(e){this.type=kC,this.auth=ur(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{lC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new aC(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Gm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(IE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CC().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&Gm(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=AC();c.length!==0&&(c+=a),TE(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Zm(n,e,t,s=!1,r=!1){const i=new NC(n);let o;if(r)o=IE;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mh(n,e,t,s,r){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Zm(n,e,t,t==="getOobCode");return s(n,i)}else return s(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zm(n,e,t,t==="getOobCode");return s(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(n,e){const t=Hd(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Sr(i,e??{}))return r;vn(r,"already-initialized")}return t.initialize({options:e})}function OC(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ms);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function xC(n,e,t){const s=ur(n);he(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=AE(e),{host:o,port:a}=DC(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){he(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),he(Sr(u,s.config.emulator)&&Sr(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Li(o)?(Yv(`${i}//${o}${c}`),Jv("Auth",!0)):MC()}function AE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DC(n){const e=AE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:eg(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:eg(o)}}}function eg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function MC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ps("not implemented")}_getIdTokenResponse(e){return ps("not implemented")}_linkToIdToken(e,t){return ps("not implemented")}_getReauthenticationResolver(e){return ps("not implemented")}}async function LC(n,e){return cr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(n,e){return Ea(n,"POST","/v1/accounts:signInWithPassword",lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(n,e){return Ea(n,"POST","/v1/accounts:signInWithEmailLink",lr(n,e))}async function UC(n,e){return Ea(n,"POST","/v1/accounts:signInWithEmailLink",lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends Jd{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new sa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new sa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,t,"signInWithPassword",VC);case"emailLink":return FC(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,s,"signUpPassword",LC);case"emailLink":return UC(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n,e){return Ea(n,"POST","/v1/accounts:signInWithIdp",lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="http://localhost";class Cr extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new Cr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mi(e,t)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jC(n){const e=Eo(wo(n)).link,t=e?Eo(wo(e)).deep_link_id:null,s=Eo(wo(n)).deep_link_id;return(s?Eo(wo(s)).link:null)||s||t||e||n}class Xd{constructor(e){const t=Eo(wo(e)),s=t.apiKey??null,r=t.oobCode??null,i=BC(t.mode??null);he(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=jC(e);try{return new Xd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(e,t){return sa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Xd.parseLink(t);return he(s,"argument-error"),sa._fromEmailAndCode(e,s.code,s.tenantId)}}Ui.PROVIDER_ID="password";Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends wa{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vs.credential(e.oauthAccessToken)}catch{return null}}}Vs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cr._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ds.credential(t,s)}catch{return null}}}ds.GOOGLE_SIGN_IN_METHOD="google.com";ds.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends wa{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fs.credentialFromTaggedObject(e)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fs.credential(e.oauthAccessToken)}catch{return null}}}Fs.GITHUB_SIGN_IN_METHOD="github.com";Fs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends wa{constructor(){super("twitter.com")}static credential(e,t){return Cr._fromParams({providerId:Us.PROVIDER_ID,signInMethod:Us.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Us.credentialFromTaggedObject(e)}static credentialFromError(e){return Us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Us.credential(t,s)}catch{return null}}}Us.TWITTER_SIGN_IN_METHOD="twitter.com";Us.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(n,e){return Ea(n,"POST","/v1/accounts:signUp",lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await An._fromIdTokenResponse(e,s,r),o=tg(s);return new Pr({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=tg(s);return new Pr({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function tg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends ns{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Jl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Jl(e,t,s,r)}}function RE(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jl._fromErrorAndOperation(n,i,e,s):i})}async function HC(n,e,t=!1){const s=await na(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pr._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(n,e,t=!1){const{auth:s}=n;if(Wt(s.app))return Promise.reject(_s(s));const r="reauthenticate";try{const i=await na(n,RE(s,r,e,n),t);he(i.idToken,s,"internal-error");const o=Qd(i.idToken);he(o,s,"internal-error");const{sub:a}=o;return he(n.uid===a,s,"user-mismatch"),Pr._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&vn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(n,e,t=!1){if(Wt(n.app))return Promise.reject(_s(n));const s="signIn",r=await RE(n,s,e),i=await Pr._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function zC(n,e){return SE(ur(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(n){const e=ur(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GC(n,e,t){if(Wt(n.app))return Promise.reject(_s(n));const s=ur(n),o=await Mh(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&CE(n),c}),a=await Pr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function KC(n,e,t){return Wt(n.app)?Promise.reject(_s(n)):zC(Gt(n),Ui.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&CE(n),s})}function PE(n,e,t,s){return Gt(n).onIdTokenChanged(e,t,s)}function QC(n,e,t){return Gt(n).beforeAuthStateChanged(e,t)}function YC(n){return Gt(n).signOut()}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=1e3,XC=10;class NE extends kE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);yC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,XC):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},JC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}NE.type="LOCAL";const OE=NE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE extends kE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xE.type="SESSION";const ef=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Bc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await ZC(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=tf("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function t1(n){zn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function n1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s1(){return navigator?.serviceWorker?.controller||null}function r1(){return DE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firebaseLocalStorageDb",i1=1,Zl="firebaseLocalStorage",LE="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jc(n,e){return n.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function o1(){const n=indexedDB.deleteDatabase(ME);return new Ta(n).toPromise()}function Lh(){const n=indexedDB.open(ME,i1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Zl,{keyPath:LE})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Zl)?e(s):(s.close(),await o1(),e(await Lh()))})})}async function ng(n,e,t){const s=jc(n,!0).put({[LE]:e,value:t});return new Ta(s).toPromise()}async function a1(n,e){const t=jc(n,!1).get(e),s=await new Ta(t).toPromise();return s===void 0?null:s.value}function sg(n,e){const t=jc(n,!0).delete(e);return new Ta(t).toPromise()}const l1=800,c1=3;class VE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>c1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bc._getInstance(r1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await n1(),!this.activeServiceWorker)return;this.sender=new e1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||s1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lh();return await ng(e,Xl,"1"),await sg(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ng(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>a1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=jc(r,!1).getAll();return new Ta(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VE.type="LOCAL";const FE=VE;new va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n,e){return e?ms(e):(he(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function u1(n){return SE(n.auth,new nf(n),n.bypassAuthState)}function h1(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),WC(t,new nf(n),n.bypassAuthState)}async function d1(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),HC(t,new nf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return u1;case"linkViaPopup":case"linkViaRedirect":return d1;case"reauthViaPopup":case"reauthViaRedirect":return h1;default:vn(this.auth,"internal-error")}}resolve(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new va(2e3,1e4);async function p1(n,e,t){if(Wt(n.app))return Promise.reject(kn(n,"operation-not-supported-in-this-environment"));const s=ur(n);XS(n,e,Zd);const r=UE(s,t);return new Er(s,"signInViaPopup",e,r).executeNotNull()}class Er extends $E{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Ts(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,f1.get())};e()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="pendingRedirect",Al=new Map;class g1 extends $E{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Al.get(this.auth._key());if(!e){try{const s=await _1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Al.set(this.auth._key(),e)}return this.bypassAuthState||Al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _1(n,e){const t=E1(e),s=v1(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function y1(n,e){Al.set(n._key(),e)}function v1(n){return ms(n._redirectPersistence)}function E1(n){return bl(m1,n.config.apiKey,n.name)}async function w1(n,e,t=!1){if(Wt(n.app))return Promise.reject(_s(n));const s=ur(n),r=UE(s,e),o=await new g1(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=600*1e3;class I1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!b1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!BE(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(kn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=T1&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function BE({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function b1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(n,e={}){return cr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S1=/^https?/;async function C1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await A1(n);for(const t of e)try{if(P1(t))return}catch{}vn(n,"unauthorized-domain")}function P1(n){const e=xh(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!S1.test(t))return!1;if(R1.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=new va(3e4,6e4);function ig(){const n=zn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function N1(n){return new Promise((e,t)=>{function s(){ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ig(),t(kn(n,"network-request-failed"))},timeout:k1.get()})}if(zn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(zn().gapi?.load)s();else{const r=SC("iframefcb");return zn()[r]=()=>{gapi.load?s():t(kn(n,"network-request-failed"))},TE(`${RC()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw Rl=null,e})}let Rl=null;function O1(n){return Rl=Rl||N1(n),Rl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new va(5e3,15e3),D1="__/auth/iframe",M1="emulator/auth/iframe",L1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F1(n){const e=n.config;he(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Kd(e,M1):`https://${n.config.authDomain}/${D1}`,s={apiKey:e.apiKey,appName:n.name,v:ar},r=V1.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Fi(s).slice(1)}`}async function U1(n){const e=await O1(n),t=zn().gapi;return he(t,n,"internal-error"),e.open({where:document.body,url:F1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L1,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=kn(n,"network-request-failed"),a=zn().setTimeout(()=>{i(o)},x1.get());function c(){zn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},B1=500,j1=600,q1="_blank",H1="http://localhost";class og{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W1(n,e,t,s=B1,r=j1){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...$1,width:s.toString(),height:r.toString(),top:i,left:o},u=$t().toLowerCase();t&&(a=mE(u)?q1:t),fE(u)&&(e=e||H1,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,E])=>`${m}${g}=${E},`,"");if(_C(u)&&a!=="_self")return z1(e||"",a),new og(null);const d=window.open(e||"",a,h);he(d,n,"popup-blocked");try{d.focus()}catch{}return new og(d)}function z1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="__/auth/handler",K1="emulator/auth/handler",Q1=encodeURIComponent("fac");async function ag(n,e,t,s,r,i){he(n.config.authDomain,n,"auth-domain-config-required"),he(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ar,eventId:r};if(e instanceof Zd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Sh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof wa){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${Q1}=${encodeURIComponent(c)}`:"";return`${Y1(n)}?${Fi(a).slice(1)}${u}`}function Y1({config:n}){return n.emulator?Kd(n,K1):`https://${n.authDomain}/${G1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="webStorageSupport";class J1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ef,this._completeRedirectFn=w1,this._overrideRedirectResult=y1}async _openPopup(e,t,s,r){Ts(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ag(e,t,s,xh(),r);return W1(e,i,tf())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await ag(e,t,s,xh(),r);return t1(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Ts(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await U1(e),s=new I1(e);return t.register("authEvent",r=>(he(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qu,{type:Qu},r=>{const i=r?.[0]?.[Qu];i!==void 0&&t(!!i),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=C1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return EE()||pE()||Yd()}}const jE=J1;var lg="@firebase/auth",cg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eP(n){Zn(new On("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wE(n)},u=new IC(s,r,i,c);return OC(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Zn(new On("auth-internal",e=>{const t=ur(e.getProvider("auth").getImmediate());return(s=>new X1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(lg,cg,Z1(n)),an(lg,cg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=300,nP=Qv("authIdTokenMaxAge")||tP;let ug=null;const sP=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>nP)return;const r=t?.token;ug!==r&&(ug=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function qc(n=Wd()){const e=Hd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bE(n,{popupRedirectResolver:jE,persistence:[FE,OE,ef]}),s=Qv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=sP(i.toString());QC(t,o,()=>o(t.currentUser)),PE(t,a=>o(a))}}const r=Gv("auth");return r&&xC(t,`http://${r}`),t}function rP(){return document.getElementsByTagName("head")?.[0]??document}bC({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=kn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",rP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eP("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=new Map,oP={activated:!1,tokenObservers:[]};function xn(n){return iP.get(n)||{...oP}}const hg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t,s,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Zo,this.pending.promise.catch(t=>{}),await lP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Zo,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function lP(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},ec=new Vi("appCheck","AppCheck",cP);function qE(n){if(!xn(n).activated)throw ec.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="firebase-app-check-database",hP=1,Vh="firebase-app-check-store";let ol=null;function dP(){return ol||(ol=new Promise((n,e)=>{try{const t=indexedDB.open(uP,hP);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{e(ec.create("storage-open",{originalErrorMessage:s.target.error?.message}))},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Vh,{keyPath:"compositeKey"})}}}catch(t){e(ec.create("storage-open",{originalErrorMessage:t?.message}))}}),ol)}function fP(n,e){return pP(mP(n),e)}async function pP(n,e){const s=(await dP()).transaction(Vh,"readwrite"),i=s.objectStore(Vh).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{a(ec.create("storage-set",{originalErrorMessage:c.target.error?.message}))}})}function mP(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new ya("@firebase/app-check");function dg(n,e){return Zv()?fP(n,e).catch(t=>{Fh.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP={error:"UNKNOWN_ERROR"};function _P(n){return Vc.encodeString(JSON.stringify(n),!1)}async function Uh(n,e=!1,t=!1){const s=n.app;qE(s);const r=xn(s);let i=r.token,o;if(i&&!To(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(To(u)?i=u:await dg(s,void 0))}if(!e&&i&&To(i))return{token:i.token};let a=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await xn(s).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Fh.warn(u.message):t&&Fh.error(u),o=u}let c;return i?o?To(i)?c={token:i.token,internalError:o}:c=pg(o):(c={token:i.token},r.token=i,await dg(s,i)):c=pg(o),a&&wP(s,c),c}async function yP(n){const e=n.app;qE(e);const{provider:t}=xn(e);{const{token:s}=await t.getToken();return{token:s}}}function vP(n,e,t,s){const{app:r}=n,i=xn(r),o={next:t,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&To(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),fg(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>fg(n))}function HE(n,e){const t=xn(n),s=t.tokenObservers.filter(r=>r.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function fg(n){const{app:e}=n,t=xn(e);let s=t.tokenRefresher;s||(s=EP(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function EP(n){const{app:e}=n;return new aP(async()=>{const t=xn(e);let s;if(t.token?s=await Uh(n,!0):s=await Uh(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=xn(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-300*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},hg.RETRIAL_MIN_WAIT,hg.RETRIAL_MAX_WAIT)}function wP(n,e){const t=xn(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function To(n){return n.expireTimeMillis-Date.now()>0}function pg(n){return{token:_P(gP),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=xn(this.app);for(const t of e)HE(this.app,t.next);return Promise.resolve()}}function IP(n,e){return new TP(n,e)}function bP(n){return{getToken:e=>Uh(n,e),getLimitedUseToken:()=>yP(n),addTokenListener:e=>vP(n,"INTERNAL",e),removeTokenListener:e=>HE(n.app,e)}}const AP="@firebase/app-check",RP="0.11.0",SP="app-check",mg="app-check-internal";function CP(){Zn(new On(SP,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return IP(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(mg).initialize()})),Zn(new On(mg,n=>{const e=n.getProvider("app-check").getImmediate();return bP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),an(AP,RP)}CP();var PP="firebase",kP="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(PP,kP,"app");const WE=Symbol("firebaseApp");function sf(n){return Fv()&&_n(WE,null)||Wd(n)}const al=new WeakMap;function NP(n,e){if(!al.has(n)){const t=qy(!0);al.set(n,t);const{unmount:s}=e;e.unmount=()=>{s.call(e),t.stop(),al.delete(n)}}return al.get(n)}const zE=new WeakMap;function ss(n){return zE.get(sf(n))}const ll=new WeakMap;function OP(n){const e=sf(n);if(!ll.has(e)){let t;const r=[new Promise(i=>{t=i}),i=>{ll.set(e,i),t(i.value)}];ll.set(e,r)}return ll.get(e)}function xP(n,e){PE(e,t=>{const s=OP();n.value=t,Array.isArray(s)&&s[1](n)})}var gg={};const _g="@firebase/database",yg="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GE="";function DP(n){GE=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ea(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Rs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MP(e)}}catch{}return new LP},wr=KE("localStorage"),VP=KE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new ya("@firebase/database"),FP=(function(){let n=1;return function(){return n++}})(),QE=function(n){const e=BR(n),t=new LR;t.update(e);const s=t.digest();return Vc.encodeByteArray(s)},Ia=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ia.apply(null,s):typeof s=="object"?e+=Tt(s):e+=s,e+=" "}return e};let Lo=null,vg=!0;const UP=function(n,e){J(!0,"Can't turn on custom loggers persistently."),gi.logLevel=Te.VERBOSE,Lo=gi.log.bind(gi)},Nt=function(...n){if(vg===!0&&(vg=!1,Lo===null&&VP.get("logging_enabled")===!0&&UP()),Lo){const e=Ia.apply(null,n);Lo(e)}},ba=function(n){return function(...e){Nt(n,...e)}},$h=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ia(...n);gi.error(e)},kr=function(...n){const e=`FIREBASE FATAL ERROR: ${Ia(...n)}`;throw gi.error(e),new Error(e)},ln=function(...n){const e="FIREBASE WARNING: "+Ia(...n);gi.warn(e)},$P=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ln("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},YE=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},BP=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ii="[MIN_NAME]",Nr="[MAX_NAME]",$i=function(n,e){if(n===e)return 0;if(n===Ii||e===Nr)return-1;if(e===Ii||n===Nr)return 1;{const t=Eg(n),s=Eg(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},jP=function(n,e){return n===e?0:n<e?-1:1},fo=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Tt(e))},rf=function(n){if(typeof n!="object"||n===null)return Tt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Tt(e[s]),t+=":",t+=rf(n[e[s]]);return t+="}",t},JE=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function En(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const XE=function(n){J(!YE(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let m=parseInt(h.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},qP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},WP=new RegExp("^-?(0*)\\d{1,10}$"),zP=-2147483648,GP=2147483647,Eg=function(n){if(WP.test(n)){const e=Number(n);if(e>=zP&&e<=GP)return e}return null},Aa=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ln("Exception was thrown by user callback.",t),e},Math.floor(0))}},KP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Wt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){ln(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ln(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="5",ZE="v",ew="s",tw="r",nw="f",sw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rw="ls",iw="p",Bh="ac",ow="websocket",aw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,t,s,r,i=!1,o="",a=!1,c=!1,u=null){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function XP(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function lw(n,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let s;if(e===ow)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===aw)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XP(n)&&(t.ns=n.namespace);const r=[];return En(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.counters_={}}incrementCounter(e,t=1){Rs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return pR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu={},Ju={};function af(n){const e=n.toString();return Yu[e]||(Yu[e]=new ZP),Yu[e]}function ek(n,e){const t=n.toString();return Ju[t]||(Ju[t]=e()),Ju[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Aa(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="start",nk="close",sk="pLPCommand",rk="pRTLPCB",cw="id",uw="pw",hw="ser",ik="cb",ok="seg",ak="ts",lk="d",ck="dframe",dw=1870,fw=30,uk=dw-fw,hk=25e3,dk=3e4;class oi{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ba(e),this.stats_=af(t),this.urlFn=c=>(this.appCheckToken&&(c[Bh]=this.appCheckToken),lw(t,aw,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new tk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dk)),BP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lf((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wg)this.id=a,this.password=c;else if(o===nk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[wg]="t",s[hw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ik]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ZE]=of,this.transportSessionId&&(s[ew]=this.transportSessionId),this.lastSessionId&&(s[rw]=this.lastSessionId),this.applicationId&&(s[iw]=this.applicationId),this.appCheckToken&&(s[Bh]=this.appCheckToken),typeof location<"u"&&location.hostname&&sw.test(location.hostname)&&(s[tw]=nw);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qP()&&!HP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Wv(t),r=JE(s,uk);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[ck]="t",s[cw]=e,s[uw]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Tt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class lf{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FP(),window[sk+this.uniqueCallbackIdentifier]=e,window[rk+this.uniqueCallbackIdentifier]=t,this.myIFrame=lf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Nt("frame writing exception"),a.stack&&Nt(a.stack),Nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cw]=this.myID,e[uw]=this.myPW,e[hw]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fw+s.length<=dw;){const o=this.pendingSegs.shift();s=s+"&"+ok+r+"="+o.seg+"&"+ak+r+"="+o.ts+"&"+lk+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(hk)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=16384,pk=45e3;let tc=null;typeof MozWebSocket<"u"?tc=MozWebSocket:typeof WebSocket<"u"&&(tc=WebSocket);class bn{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ba(this.connId),this.stats_=af(t),this.connURL=bn.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[ZE]=of,typeof location<"u"&&location.hostname&&sw.test(location.hostname)&&(o[tw]=nw),t&&(o[ew]=t),s&&(o[rw]=s),r&&(o[Bh]=r),i&&(o[iw]=i),lw(e,ow,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let s;CR(),this.mySock=new tc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&tc!==null&&!bn.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ea(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=JE(t,fk);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bn.responsesRequiredToBeHealthy=2;bn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{static get ALL_TRANSPORTS(){return[oi,bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=bn&&bn.isAvailable();let s=t&&!bn.previouslyFailed();if(e.webSocketOnly&&(t||ln("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bn];else{const r=this.transports_=[];for(const i of ra.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ra.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ra.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=6e4,gk=5e3,_k=10*1024,yk=100*1024,Xu="t",Tg="d",vk="s",Ig="r",Ek="e",bg="o",Ag="a",Rg="n",Sg="p",wk="h";class Tk{constructor(e,t,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ba("c:"+this.id+":"),this.transportManager_=new ra(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Vo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_k?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xu in e){const t=e[Xu];t===Ag?this.upgradeIfSecondaryHealthy_():t===Ig?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=fo("t",e),s=fo("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ag,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=fo("t",e),s=fo("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=fo(Xu,e);if(Tg in e){const s=e[Tg];if(t===wk){const r={...s};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Rg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===vk?this.onConnectionShutdown_(s):t===Ig?this.onReset_(s):t===Ek?$h("Server Error: "+s):t===bg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$h("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),of!==s&&ln("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Vo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends mw{static getInstance(){return new nc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=32,Pg=768;class Je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Be(){return new Je("")}function ke(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ys(n){return n.pieces_.length-n.pieceNum_}function Qe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Je(n.pieces_,e)}function gw(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ik(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _w(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function yw(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Je(e,0)}function pt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Je)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new Je(t,0)}function Re(n){return n.pieceNum_>=n.pieces_.length}function mn(n,e){const t=ke(n),s=ke(e);if(t===null)return e;if(t===s)return mn(Qe(n),Qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function vw(n,e){if(Ys(n)!==Ys(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Rn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ys(n)>Ys(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class bk{constructor(e,t){this.errorPrefix_=t,this.parts_=_w(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Uc(this.parts_[s]);Ew(this)}}function Ak(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Uc(e),Ew(n)}function Rk(n){const e=n.parts_.pop();n.byteLength_-=Uc(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ew(n){if(n.byteLength_>Pg)throw new Error(n.errorPrefix_+"has a key path longer than "+Pg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Cg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cg+") or object contains a cycle "+vr(n))}function vr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends mw{static getInstance(){return new cf}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=1e3,Sk=300*1e3,kg=30*1e3,Ck=1.3,Pk=3e4,kk="server_kill",Ng=3;class ys extends pw{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ys.nextPersistentConnectionId_++,this.log_=ba("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=po,this.maxReconnectDelay_=Sk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(Tt(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new Zo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;ys.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Rs(e,"w")){const s=Ti(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();ln(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=DR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):$h("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pk&&(this.reconnectDelay_=po),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ck)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ys.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(d){J(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,a=new Tk(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,g=>{ln(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(kk)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ln(d),c())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sh(this.interruptReasons_)&&(this.reconnectDelay_=po,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>rf(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new Je(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){Nt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ng&&(this.reconnectDelay_=kg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Nt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ng&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+GE.replace(/\./g,"-")]=1,jd()?e["framework.cordova"]=1:Xv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nc.getInstance().currentlyOnline();return Sh(this.interruptReasons_)&&e}}ys.nextPersistentConnectionId_=0;ys.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ne(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ne(Ii,e),r=new Ne(Ii,t);return this.compare(s,r)!==0}minPost(){return Ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;class ww extends Hc{static get __EMPTY_NODE(){return cl}static set __EMPTY_NODE(e){cl=e}compare(e,t){return $i(e.name,t.name)}isDefinedOn(e){throw Mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(Nr,cl)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Ne(e,cl)}toString(){return".key"}}const _i=new ww;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul=class{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},sn=class Io{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Io.RED,this.left=r??qn.EMPTY_NODE,this.right=i??qn.EMPTY_NODE}copy(e,t,s,r,i){return new Io(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return qn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return qn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Io.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Io.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};sn.RED=!0;sn.BLACK=!1;class Nk{copy(e,t,s,r,i){return this}insert(e,t,s){return new sn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let qn=class Sl{constructor(e,t=Sl.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Sl(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,sn.BLACK,null,null))}remove(e){return new Sl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,sn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ul(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ul(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ul(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ul(this.root_,null,this.comparator_,!0,e)}};qn.EMPTY_NODE=new Nk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(n,e){return $i(n.name,e.name)}function uf(n,e){return $i(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh;function xk(n){jh=n}const Tw=function(n){return typeof n=="number"?"number:"+XE(n):"string:"+n},Iw=function(n){if(n.isLeafNode()){const e=n.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rs(e,".sv"),"Priority must be a string or number.")}else J(n===jh||n.isEmpty(),"priority of unexpected type.");J(n===jh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Og;class dt{static set __childrenNodeConstructor(e){Og=e}static get __childrenNodeConstructor(){return Og}constructor(e,t=dt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new dt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:ke(e)===".priority"?this.priorityNode_:dt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:dt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ke(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(J(s!==".priority"||Ys(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,dt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tw(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=XE(this.value_):e+=this.value_,this.lazyHash_=QE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===dt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof dt.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=dt.VALUE_TYPE_ORDER.indexOf(t),i=dt.VALUE_TYPE_ORDER.indexOf(s);return J(r>=0,"Unknown leaf type: "+t),J(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}dt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bw,Aw;function Dk(n){bw=n}function Mk(n){Aw=n}class Lk extends Hc{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?$i(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(Nr,new dt("[PRIORITY-POST]",Aw))}makePost(e,t){const s=bw(e);return new Ne(t,new dt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Vt=new Lk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=Math.log(2);class Fk{constructor(e){const t=i=>parseInt(Math.log(i)/Vk,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sc=function(n,e,t,s){n.sort(e);const r=function(c,u){const h=u-c;let d,m;if(h===0)return null;if(h===1)return d=n[c],m=t?t(d):d,new sn(m,d.node,sn.BLACK,null,null);{const g=parseInt(h/2,10)+c,E=r(c,g),C=r(g+1,u);return d=n[g],m=t?t(d):d,new sn(m,d.node,sn.BLACK,E,C)}},i=function(c){let u=null,h=null,d=n.length;const m=function(E,C){const R=d-E,L=d;d-=E;const M=r(R+1,L),U=n[R],H=t?t(U):U;g(new sn(H,U.node,C,null,M))},g=function(E){u?(u.left=E,u=E):(h=E,u=E)};for(let E=0;E<c.count;++E){const C=c.nextBitIsOne(),R=Math.pow(2,c.count-(E+1));C?m(R,sn.BLACK):(m(R,sn.BLACK),m(R,sn.RED))}return h},o=new Fk(n.length),a=i(o);return new qn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu;const Xr={};class gs{static get Default(){return J(Xr&&Vt,"ChildrenNode.ts has not been loaded"),Zu=Zu||new gs({".priority":Xr},{".priority":Vt}),Zu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ti(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof qn?t:null}hasIndex(e){return Rs(this.indexSet_,e.toString())}addIndex(e,t){J(e!==_i,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Ne.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=sc(s,e.getCompare()):a=Xr;const c=e.toString(),u={...this.indexSet_};u[c]=e;const h={...this.indexes_};return h[c]=a,new gs(h,u)}addToIndexes(e,t){const s=zl(this.indexes_,(r,i)=>{const o=Ti(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),r===Xr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Ne.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),sc(a,o.getCompare())}else return Xr;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Ne(e.name,a))),c.insert(e,e.node)}});return new gs(s,this.indexSet_)}removeFromIndexes(e,t){const s=zl(this.indexes_,r=>{if(r===Xr)return r;{const i=t.get(e.name);return i?r.remove(new Ne(e.name,i)):r}});return new gs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;class Fe{static get EMPTY_NODE(){return mo||(mo=new Fe(new qn(uf),null,gs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Iw(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mo}updatePriority(e){return this.children_.isEmpty()?this:new Fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mo:t}}getChild(e){const t=ke(e);return t===null?this:this.getImmediateChild(t).getChild(Qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ne(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?mo:this.priorityNode_;return new Fe(r,o,i)}}updateChild(e,t){const s=ke(e);if(s===null)return t;{J(ke(e)!==".priority"||Ys(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Qe(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(Vt,(o,a)=>{t[o]=a.val(e),s++,i&&Fe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tw(this.getPriority().val())+":"),this.forEachChild(Vt,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":QE(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ne(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ne(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ne(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ne.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ne.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ra?-1:0}withIndex(e){if(e===_i||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Fe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_i||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Vt),r=t.getIterator(Vt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_i?null:this.indexMap_.get(e.toString())}}Fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Uk extends Fe{constructor(){super(new qn(uf),Fe.EMPTY_NODE,gs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Fe.EMPTY_NODE}isEmpty(){return!1}}const Ra=new Uk;Object.defineProperties(Ne,{MIN:{value:new Ne(Ii,Fe.EMPTY_NODE)},MAX:{value:new Ne(Nr,Ra)}});ww.__EMPTY_NODE=Fe.EMPTY_NODE;dt.__childrenNodeConstructor=Fe;xk(Ra);Mk(Ra);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=!0;function Ot(n,e=null){if(n===null)return Fe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new dt(t,Ot(e))}if(!(n instanceof Array)&&$k){const t=[];let s=!1;if(En(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ot(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Ne(o,c)))}}),t.length===0)return Fe.EMPTY_NODE;const i=sc(t,Ok,o=>o.name,uf);if(s){const o=sc(t,Vt.getCompare());return new Fe(i,Ot(e),new gs({".priority":o},{".priority":Vt}))}else return new Fe(i,Ot(e),gs.Default)}else{let t=Fe.EMPTY_NODE;return En(n,(s,r)=>{if(Rs(n,s)&&s.substring(0,1)!=="."){const i=Ot(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(Ot(e))}}Dk(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk extends Hc{constructor(e){super(),this.indexPath_=e,J(!Re(e)&&ke(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?$i(e.name,t.name):i}makePost(e,t){const s=Ot(e),r=Fe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ne(t,r)}maxPost(){const e=Fe.EMPTY_NODE.updateChild(this.indexPath_,Ra);return new Ne(Nr,e)}toString(){return _w(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk extends Hc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?$i(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(e,t){const s=Ot(e);return new Ne(t,s)}toString(){return".value"}}const qk=new jk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(n){return{type:"value",snapshotNode:n}}function Wk(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function zk(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function xg(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Gk(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Vt}copy(){const e=new hf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Vt?t="$priority":n.index_===qk?t="$value":n.index_===_i?t="$key":(J(n.index_ instanceof Bk,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Tt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Tt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Tt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Tt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Tt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Mg(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Vt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends pw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ba("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=rc.getListenId_(e,s),a={};this.listens_[o]=a;const c=Dg(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),Ti(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",r(m,null)}})}unlisten(e,t){const s=rc.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Dg(e._queryParams),s=e._path.toString(),r=new Zo;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ea(a.responseText)}catch{ln("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&ln("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.rootNode_=Fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return{value:null,children:new Map}}function Rw(n,e,t){if(Re(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ke(e);n.children.has(s)||n.children.set(s,ic());const r=n.children.get(s);e=Qe(e),Rw(r,e,t)}}function qh(n,e,t){n.value!==null?t(e,n.value):Qk(n,(s,r)=>{const i=new Je(e.toString()+"/"+s);qh(r,i,t)})}function Qk(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&En(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=10*1e3,Jk=30*1e3,Xk=300*1e3;class Zk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Yk(e);const s=Lg+(Jk-Lg)*Math.random();Vo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;En(e,(r,i)=>{i>0&&Rs(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),Vo(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Hn||(Hn={}));function Sw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pw(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Hn.ACK_USER_WRITE,this.source=Sw()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Je(e));return new oc(Be(),t,this.revert)}}else return J(ke(this.path)===e,"operationForChild called for unrelated child."),new oc(Qe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Hn.OVERWRITE}operationForChild(e){return Re(this.path)?new Or(this.source,Be(),this.snap.getImmediateChild(e)):new Or(this.source,Qe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Hn.MERGE}operationForChild(e){if(Re(this.path)){const t=this.children.subtree(new Je(e));return t.isEmpty()?null:t.value?new Or(this.source,Be(),t.value):new ia(this.source,Be(),t)}else return J(ke(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ia(this.source,Qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const t=ke(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function eN(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Gk(o.childName,o.snapshotNode))}),go(n,r,"child_removed",e,s,t),go(n,r,"child_added",e,s,t),go(n,r,"child_moved",i,s,t),go(n,r,"child_changed",e,s,t),go(n,r,"value",e,s,t),r}function go(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>nN(n,a,c)),o.forEach(a=>{const c=tN(n,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function tN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function nN(n,e,t){if(e.childName==null||t.childName==null)throw Mi("Should only compare child_ events.");const s=new Ne(e.childName,e.snapshotNode),r=new Ne(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(n,e){return{eventCache:n,serverCache:e}}function Fo(n,e,t,s){return kw(new df(e,t,s),n.serverCache)}function Nw(n,e,t,s){return kw(n.eventCache,new df(e,t,s))}function Hh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;const sN=()=>(eh||(eh=new qn(jP)),eh);class Ke{static fromObject(e){let t=new Ke(null);return En(e,(s,r)=>{t=t.set(new Je(s),r)}),t}constructor(e,t=sN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Be(),value:this.value};if(Re(e))return null;{const s=ke(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Qe(e),t);return i!=null?{path:pt(new Je(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const t=ke(e),s=this.children.get(t);return s!==null?s.subtree(Qe(e)):new Ke(null)}}set(e,t){if(Re(e))return new Ke(t,this.children);{const s=ke(e),i=(this.children.get(s)||new Ke(null)).set(Qe(e),t),o=this.children.insert(s,i);return new Ke(this.value,o)}}remove(e){if(Re(e))return this.children.isEmpty()?new Ke(null):new Ke(null,this.children);{const t=ke(e),s=this.children.get(t);if(s){const r=s.remove(Qe(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Ke(null):new Ke(this.value,i)}else return this}}get(e){if(Re(e))return this.value;{const t=ke(e),s=this.children.get(t);return s?s.get(Qe(e)):null}}setTree(e,t){if(Re(e))return t;{const s=ke(e),i=(this.children.get(s)||new Ke(null)).setTree(Qe(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Ke(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(pt(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Be(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(Re(e))return null;{const i=ke(e),o=this.children.get(i);return o?o.findOnPath_(Qe(e),pt(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Be(),t)}foreachOnPath_(e,t,s){if(Re(e))return this;{this.value&&s(t,this.value);const r=ke(e),i=this.children.get(r);return i?i.foreachOnPath_(Qe(e),pt(t,r),s):new Ke(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(pt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.writeTree_=e}static empty(){return new Nn(new Ke(null))}}function Uo(n,e,t){if(Re(e))return new Nn(new Ke(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=mn(r,e);return i=i.updateChild(o,t),new Nn(n.writeTree_.set(r,i))}else{const r=new Ke(t),i=n.writeTree_.setTree(e,r);return new Nn(i)}}}function Vg(n,e,t){let s=n;return En(t,(r,i)=>{s=Uo(s,pt(e,r),i)}),s}function Fg(n,e){if(Re(e))return Nn.empty();{const t=n.writeTree_.setTree(e,new Ke(null));return new Nn(t)}}function Wh(n,e){return Ur(n,e)!=null}function Ur(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(mn(t.path,e)):null}function Ug(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Vt,(s,r)=>{e.push(new Ne(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ne(s,r.value))}),e}function Hs(n,e){if(Re(e))return n;{const t=Ur(n,e);return t!=null?new Nn(new Ke(t)):new Nn(n.writeTree_.subtree(e))}}function zh(n){return n.writeTree_.isEmpty()}function bi(n,e){return Ow(Be(),n.writeTree_,e)}function Ow(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=Ow(pt(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(pt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(n,e){return Fw(e,n)}function rN(n,e,t,s,r){J(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=Uo(n.visibleWrites,e,t)),n.lastWriteId=s}function iN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function oN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&aN(a,s.path)?r=!1:Rn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return lN(n),!0;if(s.snap)n.visibleWrites=Fg(n.visibleWrites,s.path);else{const a=s.children;En(a,c=>{n.visibleWrites=Fg(n.visibleWrites,pt(s.path,c))})}return!0}else return!1}function aN(n,e){if(n.snap)return Rn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Rn(pt(n.path,t),e))return!0;return!1}function lN(n){n.visibleWrites=Dw(n.allWrites,cN,Be()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cN(n){return n.visible}function Dw(n,e,t){let s=Nn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)Rn(t,o)?(a=mn(t,o),s=Uo(s,a,i.snap)):Rn(o,t)&&(a=mn(o,t),s=Uo(s,Be(),i.snap.getChild(a)));else if(i.children){if(Rn(t,o))a=mn(t,o),s=Vg(s,a,i.children);else if(Rn(o,t))if(a=mn(o,t),Re(a))s=Vg(s,Be(),i.children);else{const c=Ti(i.children,ke(a));if(c){const u=c.getChild(Qe(a));s=Uo(s,Be(),u)}}}else throw Mi("WriteRecord should have .snap or .children")}}return s}function Mw(n,e,t,s,r){if(!s&&!r){const i=Ur(n.visibleWrites,e);if(i!=null)return i;{const o=Hs(n.visibleWrites,e);if(zh(o))return t;if(t==null&&!Wh(o,Be()))return null;{const a=t||Fe.EMPTY_NODE;return bi(o,a)}}}else{const i=Hs(n.visibleWrites,e);if(!r&&zh(i))return t;if(!r&&t==null&&!Wh(i,Be()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(Rn(u.path,e)||Rn(e,u.path))},a=Dw(n.allWrites,o,e),c=t||Fe.EMPTY_NODE;return bi(a,c)}}}function uN(n,e,t){let s=Fe.EMPTY_NODE;const r=Ur(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Vt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Hs(n.visibleWrites,e);return t.forEachChild(Vt,(o,a)=>{const c=bi(Hs(i,new Je(o)),a);s=s.updateImmediateChild(o,c)}),Ug(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Hs(n.visibleWrites,e);return Ug(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function hN(n,e,t,s,r){J(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=pt(e,t);if(Wh(n.visibleWrites,i))return null;{const o=Hs(n.visibleWrites,i);return zh(o)?r.getChild(t):bi(o,r.getChild(t))}}function dN(n,e,t,s){const r=pt(e,t),i=Ur(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Hs(n.visibleWrites,r);return bi(o,s.getNode().getImmediateChild(t))}else return null}function fN(n,e){return Ur(n.visibleWrites,e)}function pN(n,e,t,s,r,i,o){let a;const c=Hs(n.visibleWrites,e),u=Ur(c,Be());if(u!=null)a=u;else if(t!=null)a=bi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),m=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=m.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=m.getNext();return h}else return[]}function mN(){return{visibleWrites:Nn.empty(),allWrites:[],lastWriteId:-1}}function Gh(n,e,t,s){return Mw(n.writeTree,n.treePath,e,t,s)}function Lw(n,e){return uN(n.writeTree,n.treePath,e)}function $g(n,e,t,s){return hN(n.writeTree,n.treePath,e,t,s)}function ac(n,e){return fN(n.writeTree,pt(n.treePath,e))}function gN(n,e,t,s,r,i){return pN(n.writeTree,n.treePath,e,t,s,r,i)}function ff(n,e,t){return dN(n.writeTree,n.treePath,e,t)}function Vw(n,e){return Fw(pt(n.treePath,e),n.writeTree)}function Fw(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,xg(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,zk(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,Wk(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,xg(s,e.snapshotNode,r.oldSnap));else throw Mi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Uw=new yN;class pf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new df(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ff(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=gN(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}function vN(n,e){J(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function EN(n,e,t,s,r){const i=new _N;let o,a;if(t.type===Hn.OVERWRITE){const u=t;u.source.fromUser?o=Kh(n,e,u.path,u.snap,s,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Re(u.path),o=lc(n,e,u.path,u.snap,s,r,a,i))}else if(t.type===Hn.MERGE){const u=t;u.source.fromUser?o=TN(n,e,u.path,u.children,s,r,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Qh(n,e,u.path,u.children,s,r,a,i))}else if(t.type===Hn.ACK_USER_WRITE){const u=t;u.revert?o=AN(n,e,u.path,s,r,i):o=IN(n,e,u.path,u.affectedTree,s,r,i)}else if(t.type===Hn.LISTEN_COMPLETE)o=bN(n,e,t.path,s,i);else throw Mi("Unknown operation type: "+t.type);const c=i.getChanges();return wN(e,o,c),{viewCache:o,changes:c}}function wN(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Hh(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(Hk(Hh(e)))}}function $w(n,e,t,s,r,i){const o=e.eventCache;if(ac(s,t)!=null)return e;{let a,c;if(Re(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),h=u instanceof Fe?u:Fe.EMPTY_NODE,d=Lw(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Gh(s,xr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ke(t);if(u===".priority"){J(Ys(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=$g(s,t,h,c);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=Qe(t);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=$g(s,t,o.getNode(),c);m!=null?d=o.getNode().getImmediateChild(u).updateChild(h,m):d=o.getNode().getImmediateChild(u)}else d=ff(s,u,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),u,d,h,r,i):a=o.getNode()}}return Fo(e,a,o.isFullyInitialized()||Re(t),n.filter.filtersNodes())}}function lc(n,e,t,s,r,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(Re(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=ke(t);if(!c.isCompleteForPath(t)&&Ys(t)>1)return e;const E=Qe(t),R=c.getNode().getImmediateChild(g).updateChild(E,s);g===".priority"?u=h.updatePriority(c.getNode(),R):u=h.updateChild(c.getNode(),g,R,E,Uw,null)}const d=Nw(e,u,c.isFullyInitialized()||Re(t),h.filtersNodes()),m=new pf(r,d,i);return $w(n,d,t,r,m,a)}function Kh(n,e,t,s,r,i,o){const a=e.eventCache;let c,u;const h=new pf(r,e,i);if(Re(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Fo(e,u,!0,n.filter.filtersNodes());else{const d=ke(t);if(d===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=Fo(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=Qe(t),g=a.getNode().getImmediateChild(d);let E;if(Re(m))E=s;else{const C=h.getCompleteChild(d);C!=null?gw(m)===".priority"&&C.getChild(yw(m)).isEmpty()?E=C:E=C.updateChild(m,s):E=Fe.EMPTY_NODE}if(g.equals(E))c=e;else{const C=n.filter.updateChild(a.getNode(),d,E,m,h,o);c=Fo(e,C,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Bg(n,e){return n.eventCache.isCompleteForChild(e)}function TN(n,e,t,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=pt(t,c);Bg(e,ke(h))&&(a=Kh(n,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=pt(t,c);Bg(e,ke(h))||(a=Kh(n,a,h,u,r,i,o))}),a}function jg(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Qh(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Re(t)?u=s:u=new Ke(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,m)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),E=jg(n,g,m);c=lc(n,c,new Je(d),E,r,i,o,a)}}),u.children.inorderTraversal((d,m)=>{const g=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!h.hasChild(d)&&!g){const E=e.serverCache.getNode().getImmediateChild(d),C=jg(n,E,m);c=lc(n,c,new Je(d),C,r,i,o,a)}}),c}function IN(n,e,t,s,r,i,o){if(ac(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Re(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return lc(n,e,t,c.getNode().getChild(t),r,i,a,o);if(Re(t)){let u=new Ke(null);return c.getNode().forEachChild(_i,(h,d)=>{u=u.set(new Je(h),d)}),Qh(n,e,t,u,r,i,a,o)}else return e}else{let u=new Ke(null);return s.foreach((h,d)=>{const m=pt(t,h);c.isCompleteForPath(m)&&(u=u.set(h,c.getNode().getChild(m)))}),Qh(n,e,t,u,r,i,a,o)}}function bN(n,e,t,s,r){const i=e.serverCache,o=Nw(e,i.getNode(),i.isFullyInitialized()||Re(t),i.isFiltered());return $w(n,o,t,s,Uw,r)}function AN(n,e,t,s,r,i){let o;if(ac(s,t)!=null)return e;{const a=new pf(s,e,r),c=e.eventCache.getNode();let u;if(Re(t)||ke(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Gh(s,xr(e));else{const d=e.serverCache.getNode();J(d instanceof Fe,"serverChildren would be complete if leaf node"),h=Lw(s,d)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=ke(t);let d=ff(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=n.filter.updateChild(c,h,d,Qe(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,Fe.EMPTY_NODE,Qe(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gh(s,xr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||ac(s,Be())!=null,Fo(e,u,o,n.filter.filtersNodes())}}function RN(n,e){const t=xr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Re(e)&&!t.getImmediateChild(ke(e)).isEmpty())?t.getChild(e):null}function qg(n,e,t,s){e.type===Hn.MERGE&&e.source.queryId!==null&&(J(xr(n.viewCache_),"We should always have a full cache before handling merges"),J(Hh(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=EN(n.processor_,r,e,t,s);return vN(n.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,SN(n,i.changes,i.viewCache.eventCache.getNode())}function SN(n,e,t,s){const r=n.eventRegistrations_;return eN(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg;function CN(n){J(!Hg,"__referenceConstructor has already been defined"),Hg=n}function mf(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return J(i!=null,"SyncTree gave us an op for an invalid query."),qg(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(qg(o,e,t,s));return i}}function gf(n,e){let t=null;for(const s of n.views.values())t=t||RN(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wg;function PN(n){J(!Wg,"__referenceConstructor has already been defined"),Wg=n}class zg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ke(null),this.pendingWriteTree_=mN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kN(n,e,t,s,r){return rN(n.pendingWriteTree_,e,t,s,r),r?zc(n,new Or(Sw(),e,t)):[]}function ai(n,e,t=!1){const s=iN(n.pendingWriteTree_,e);if(oN(n.pendingWriteTree_,e)){let i=new Ke(null);return s.snap!=null?i=i.set(Be(),!0):En(s.children,o=>{i=i.set(new Je(o),!0)}),zc(n,new oc(s.path,i,t))}else return[]}function Wc(n,e,t){return zc(n,new Or(Cw(),e,t))}function NN(n,e,t){const s=Ke.fromObject(t);return zc(n,new ia(Cw(),e,s))}function ON(n,e,t,s){const r=Hw(n,s);if(r!=null){const i=Ww(r),o=i.path,a=i.queryId,c=mn(o,e),u=new Or(Pw(a),c,t);return zw(n,o,u)}else return[]}function xN(n,e,t,s){const r=Hw(n,s);if(r){const i=Ww(r),o=i.path,a=i.queryId,c=mn(o,e),u=Ke.fromObject(t),h=new ia(Pw(a),c,u);return zw(n,o,h)}else return[]}function Bw(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=mn(o,e),u=gf(a,c);if(u)return u});return Mw(r,e,i,t,!0)}function zc(n,e){return jw(e,n.syncPointTree_,null,xw(n.pendingWriteTree_,Be()))}function jw(n,e,t,s){if(Re(n.path))return qw(n,e,t,s);{const r=e.get(Be());t==null&&r!=null&&(t=gf(r,Be()));let i=[];const o=ke(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=Vw(s,o);i=i.concat(jw(a,c,u,h))}return r&&(i=i.concat(mf(r,n,s,t))),i}}function qw(n,e,t,s){const r=e.get(Be());t==null&&r!=null&&(t=gf(r,Be()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=Vw(s,o),h=n.operationForChild(o);h&&(i=i.concat(qw(h,a,c,u)))}),r&&(i=i.concat(mf(r,n,s,t))),i}function Hw(n,e){return n.tagToQueryMap.get(e)}function Ww(n){const e=n.indexOf("$");return J(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Je(n.substr(0,e))}}function zw(n,e,t){const s=n.syncPointTree_.get(e);J(s,"Missing sync point for query tag that we're tracking");const r=xw(n.pendingWriteTree_,e);return mf(s,t,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _f(t)}node(){return this.node_}}class yf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=pt(this.path_,e);return new yf(this.syncTree_,t)}node(){return Bw(this.syncTree_,this.path_)}}const DN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Gg=function(n,e,t){if(!n||typeof n!="object")return n;if(J(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return MN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return LN(n[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},MN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+n)}},LN=function(n,e,t){n.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&J(!1,"Unexpected increment value: "+s);const r=e.node();if(J(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},VN=function(n,e,t,s){return vf(e,new yf(t,n),s)},FN=function(n,e,t){return vf(n,new _f(e),t)};function vf(n,e,t){const s=n.getPriority().val(),r=Gg(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=Gg(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new dt(a,Ot(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new dt(r))),o.forEachChild(Vt,(a,c)=>{const u=vf(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function wf(n,e){let t=e instanceof Je?e:new Je(e),s=n,r=ke(t);for(;r!==null;){const i=Ti(s.node.children,r)||{children:{},childCount:0};s=new Ef(r,s,i),t=Qe(t),r=ke(t)}return s}function Bi(n){return n.node.value}function Gw(n,e){n.node.value=e,Yh(n)}function Kw(n){return n.node.childCount>0}function UN(n){return Bi(n)===void 0&&!Kw(n)}function Gc(n,e){En(n.node.children,(t,s)=>{e(new Ef(t,n,s))})}function Qw(n,e,t,s){t&&e(n),Gc(n,r=>{Qw(r,e,!0)})}function $N(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Sa(n){return new Je(n.parent===null?n.name:Sa(n.parent)+"/"+n.name)}function Yh(n){n.parent!==null&&BN(n.parent,n.name,n)}function BN(n,e,t){const s=UN(t),r=Rs(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,Yh(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,Yh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=/[\[\].#$\/\u0000-\u001F\u007F]/,qN=/[\[\].#$\u0000-\u001F\u007F]/,th=10*1024*1024,Yw=function(n){return typeof n=="string"&&n.length!==0&&!jN.test(n)},HN=function(n){return typeof n=="string"&&n.length!==0&&!qN.test(n)},WN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),HN(n)},Jw=function(n,e,t){const s=t instanceof Je?new bk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+vr(s));if(typeof e=="function")throw new Error(n+"contains a function "+vr(s)+" with contents = "+e.toString());if(YE(e))throw new Error(n+"contains "+e.toString()+" "+vr(s));if(typeof e=="string"&&e.length>th/3&&Uc(e)>th)throw new Error(n+"contains a string greater than "+th+" utf8 bytes "+vr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(En(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Yw(o)))throw new Error(n+" contains an invalid key ("+o+") "+vr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ak(s,o),Jw(n,a,s),Rk(s)}),r&&i)throw new Error(n+' contains ".value" child '+vr(s)+" in addition to actual children.")}},zN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!WN(t))throw new Error($R(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function KN(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!vw(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function $r(n,e,t){KN(n,t),QN(n,s=>Rn(s,e)||Rn(e,s))}function QN(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(YN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function YN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Lo&&Nt("event: "+t.toString()),Aa(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN="repo_interrupt",XN=25;class ZN{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ic(),this.transactionQueueTree_=new Ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eO(n,e,t){if(n.stats_=af(n.repoInfo_),n.forceRestClient_||KP())n.server_=new rc(n.repoInfo_,(s,r,i,o)=>{Kg(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Qg(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ys(n.repoInfo_,e,(s,r,i,o)=>{Kg(n,s,r,i,o)},s=>{Qg(n,s)},s=>{nO(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ek(n.repoInfo_,()=>new Zk(n.stats_,n.server_)),n.infoData_=new Kk,n.infoSyncTree_=new zg({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Wc(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tf(n,"connected",!1),n.serverSyncTree_=new zg({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);$r(n.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function tO(n){const t=n.infoData_.getNode(new Je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Xw(n){return DN({timestamp:tO(n)})}function Kg(n,e,t,s,r){n.dataUpdateCount++;const i=new Je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=zl(t,u=>Ot(u));o=xN(n.serverSyncTree_,i,c,r)}else{const c=Ot(t);o=ON(n.serverSyncTree_,i,c,r)}else if(s){const c=zl(t,u=>Ot(u));o=NN(n.serverSyncTree_,i,c)}else{const c=Ot(t);o=Wc(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=bf(n,i)),$r(n.eventQueue_,a,o)}function Qg(n,e){Tf(n,"connected",e),e===!1&&rO(n)}function nO(n,e){En(e,(t,s)=>{Tf(n,t,s)})}function Tf(n,e,t){const s=new Je("/.info/"+e),r=Ot(t);n.infoData_.updateSnapshot(s,r);const i=Wc(n.infoSyncTree_,s,r);$r(n.eventQueue_,s,i)}function sO(n){return n.nextWriteId_++}function rO(n){Zw(n,"onDisconnectEvents");const e=Xw(n),t=ic();qh(n.onDisconnect_,Be(),(r,i)=>{const o=VN(r,i,n.serverSyncTree_,e);Rw(t,r,o)});let s=[];qh(t,Be(),(r,i)=>{s=s.concat(Wc(n.serverSyncTree_,r,i));const o=lO(n,r);bf(n,o)}),n.onDisconnect_=ic(),$r(n.eventQueue_,Be(),s)}function iO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(JN)}function Zw(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Nt(t,...e)}function eT(n,e,t){return Bw(n.serverSyncTree_,e,t)||Fe.EMPTY_NODE}function If(n,e=n.transactionQueueTree_){if(e||Kc(n,e),Bi(e)){const t=nT(n,e);J(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&oO(n,Sa(e),t)}else Kw(e)&&Gc(e,t=>{If(n,t)})}function oO(n,e,t){const s=t.map(u=>u.currentWriteId),r=eT(n,e,s);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=mn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{Zw(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let m=0;m<t.length;m++)t[m].status=2,h=h.concat(ai(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&d.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Kc(n,wf(n.transactionQueueTree_,e)),If(n,n.transactionQueueTree_),$r(n.eventQueue_,e,h);for(let m=0;m<d.length;m++)Aa(d[m])}else{if(u==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{ln("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=u}bf(n,e)}},o)}function bf(n,e){const t=tT(n,e),s=Sa(t),r=nT(n,t);return aO(n,r,s),s}function aO(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=mn(t,c.path);let h=!1,d;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,r=r.concat(ai(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=XN)h=!0,d="maxretry",r=r.concat(ai(n.serverSyncTree_,c.currentWriteId,!0));else{const m=eT(n,c.path,o);c.currentInputSnapshot=m;const g=e[a].update(m.val());if(g!==void 0){Jw("transaction failed: Data returned ",g,c.path);let E=Ot(g);typeof g=="object"&&g!=null&&Rs(g,".priority")||(E=E.updatePriority(m.getPriority()));const R=c.currentWriteId,L=Xw(n),M=FN(E,m,L);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=M,c.currentWriteId=sO(n),o.splice(o.indexOf(R),1),r=r.concat(kN(n.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),r=r.concat(ai(n.serverSyncTree_,R,!0))}else h=!0,d="nodata",r=r.concat(ai(n.serverSyncTree_,c.currentWriteId,!0))}$r(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,(function(m){setTimeout(m,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Kc(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Aa(s[a]);If(n,n.transactionQueueTree_)}function tT(n,e){let t,s=n.transactionQueueTree_;for(t=ke(e);t!==null&&Bi(s)===void 0;)s=wf(s,t),e=Qe(e),t=ke(e);return s}function nT(n,e){const t=[];return sT(n,e,t),t.sort((s,r)=>s.order-r.order),t}function sT(n,e,t){const s=Bi(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);Gc(e,r=>{sT(n,r,t)})}function Kc(n,e){const t=Bi(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,Gw(e,t.length>0?t:void 0)}Gc(e,s=>{Kc(n,s)})}function lO(n,e){const t=Sa(tT(n,e)),s=wf(n.transactionQueueTree_,e);return $N(s,r=>{nh(n,r)}),nh(n,s),Qw(s,r=>{nh(n,r)}),t}function nh(n,e){const t=Bi(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(J(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(ai(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Gw(e,void 0):t.length=i+1,$r(n.eventQueue_,Sa(e),r);for(let o=0;o<s.length;o++)Aa(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function uO(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ln(`Invalid query segment '${t}' in query '${n}'`)}return e}const Yg=function(n,e){const t=hO(n),s=t.namespace;t.domain==="firebase.com"&&kr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&kr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||$P();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new JP(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new Je(t.pathString)}},hO=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(r=cO(n.substring(h,d)));const m=uO(n.substring(Math.min(n.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),t=e.substring(E+1),i=s}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return Re(this._path)?null:gw(this._path)}get ref(){return new ji(this._repo,this._path)}get _queryIdentifier(){const e=Mg(this._queryParams),t=rf(e);return t==="{}"?"default":t}get _queryObject(){return Mg(this._queryParams)}isEqual(e){if(e=Gt(e),!(e instanceof Af))return!1;const t=this._repo===e._repo,s=vw(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ik(this._path)}}class ji extends Af{constructor(e,t){super(e,t,new hf,!1)}get parent(){const e=yw(this._path);return e===null?null:new ji(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}CN(ji);PN(ji);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO="FIREBASE_DATABASE_EMULATOR_HOST",Jh={};let fO=!1;function pO(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||kr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Yg(i,r),a=o.repoInfo,c;typeof process<"u"&&gg&&(c=gg[dO]),c?(i=`http://${c}?ns=${a.namespace}`,o=Yg(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new YP(n.name,n.options,e);zN("Invalid Firebase Database URL",o),Re(o.path)||kr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=gO(a,n,u,new QP(n,t));return new _O(h,n)}function mO(n,e){const t=Jh[e];(!t||t[n.key]!==n)&&kr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),iO(n),delete t[n.key]}function gO(n,e,t,s){let r=Jh[e.name];r||(r={},Jh[e.name]=r);let i=r[n.toURLString()];return i&&kr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ZN(n,fO,t,s),r[n.toURLString()]=i,i}class _O{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ji(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(n){DP(ar),Zn(new On("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return pO(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),an(_g,yg,n),an(_g,yg,"esm2020")}ys.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ys.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};yO();var Jg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ws,rT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function I(){}I.prototype=v.prototype,A.D=v.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(S,P,N){for(var T=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)T[Bt-2]=arguments[Bt];return v.prototype[P].apply(S,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,v,I){I||(I=0);var S=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)S[P]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(P=0;16>P;++P)S[P]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=A.g[0],I=A.g[1],P=A.g[2];var N=A.g[3],T=v+(N^I&(P^N))+S[0]+3614090360&4294967295;v=I+(T<<7&4294967295|T>>>25),T=N+(P^v&(I^P))+S[1]+3905402710&4294967295,N=v+(T<<12&4294967295|T>>>20),T=P+(I^N&(v^I))+S[2]+606105819&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(v^P&(N^v))+S[3]+3250441966&4294967295,I=P+(T<<22&4294967295|T>>>10),T=v+(N^I&(P^N))+S[4]+4118548399&4294967295,v=I+(T<<7&4294967295|T>>>25),T=N+(P^v&(I^P))+S[5]+1200080426&4294967295,N=v+(T<<12&4294967295|T>>>20),T=P+(I^N&(v^I))+S[6]+2821735955&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(v^P&(N^v))+S[7]+4249261313&4294967295,I=P+(T<<22&4294967295|T>>>10),T=v+(N^I&(P^N))+S[8]+1770035416&4294967295,v=I+(T<<7&4294967295|T>>>25),T=N+(P^v&(I^P))+S[9]+2336552879&4294967295,N=v+(T<<12&4294967295|T>>>20),T=P+(I^N&(v^I))+S[10]+4294925233&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(v^P&(N^v))+S[11]+2304563134&4294967295,I=P+(T<<22&4294967295|T>>>10),T=v+(N^I&(P^N))+S[12]+1804603682&4294967295,v=I+(T<<7&4294967295|T>>>25),T=N+(P^v&(I^P))+S[13]+4254626195&4294967295,N=v+(T<<12&4294967295|T>>>20),T=P+(I^N&(v^I))+S[14]+2792965006&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(v^P&(N^v))+S[15]+1236535329&4294967295,I=P+(T<<22&4294967295|T>>>10),T=v+(P^N&(I^P))+S[1]+4129170786&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(v^I))+S[6]+3225465664&4294967295,N=v+(T<<9&4294967295|T>>>23),T=P+(v^I&(N^v))+S[11]+643717713&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(P^N))+S[0]+3921069994&4294967295,I=P+(T<<20&4294967295|T>>>12),T=v+(P^N&(I^P))+S[5]+3593408605&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(v^I))+S[10]+38016083&4294967295,N=v+(T<<9&4294967295|T>>>23),T=P+(v^I&(N^v))+S[15]+3634488961&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(P^N))+S[4]+3889429448&4294967295,I=P+(T<<20&4294967295|T>>>12),T=v+(P^N&(I^P))+S[9]+568446438&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(v^I))+S[14]+3275163606&4294967295,N=v+(T<<9&4294967295|T>>>23),T=P+(v^I&(N^v))+S[3]+4107603335&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(P^N))+S[8]+1163531501&4294967295,I=P+(T<<20&4294967295|T>>>12),T=v+(P^N&(I^P))+S[13]+2850285829&4294967295,v=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(v^I))+S[2]+4243563512&4294967295,N=v+(T<<9&4294967295|T>>>23),T=P+(v^I&(N^v))+S[7]+1735328473&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^v&(P^N))+S[12]+2368359562&4294967295,I=P+(T<<20&4294967295|T>>>12),T=v+(I^P^N)+S[5]+4294588738&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^P)+S[8]+2272392833&4294967295,N=v+(T<<11&4294967295|T>>>21),T=P+(N^v^I)+S[11]+1839030562&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^v)+S[14]+4259657740&4294967295,I=P+(T<<23&4294967295|T>>>9),T=v+(I^P^N)+S[1]+2763975236&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^P)+S[4]+1272893353&4294967295,N=v+(T<<11&4294967295|T>>>21),T=P+(N^v^I)+S[7]+4139469664&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^v)+S[10]+3200236656&4294967295,I=P+(T<<23&4294967295|T>>>9),T=v+(I^P^N)+S[13]+681279174&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^P)+S[0]+3936430074&4294967295,N=v+(T<<11&4294967295|T>>>21),T=P+(N^v^I)+S[3]+3572445317&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^v)+S[6]+76029189&4294967295,I=P+(T<<23&4294967295|T>>>9),T=v+(I^P^N)+S[9]+3654602809&4294967295,v=I+(T<<4&4294967295|T>>>28),T=N+(v^I^P)+S[12]+3873151461&4294967295,N=v+(T<<11&4294967295|T>>>21),T=P+(N^v^I)+S[15]+530742520&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^v)+S[2]+3299628645&4294967295,I=P+(T<<23&4294967295|T>>>9),T=v+(P^(I|~N))+S[0]+4096336452&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~P))+S[7]+1126891415&4294967295,N=v+(T<<10&4294967295|T>>>22),T=P+(v^(N|~I))+S[14]+2878612391&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~v))+S[5]+4237533241&4294967295,I=P+(T<<21&4294967295|T>>>11),T=v+(P^(I|~N))+S[12]+1700485571&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~P))+S[3]+2399980690&4294967295,N=v+(T<<10&4294967295|T>>>22),T=P+(v^(N|~I))+S[10]+4293915773&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~v))+S[1]+2240044497&4294967295,I=P+(T<<21&4294967295|T>>>11),T=v+(P^(I|~N))+S[8]+1873313359&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~P))+S[15]+4264355552&4294967295,N=v+(T<<10&4294967295|T>>>22),T=P+(v^(N|~I))+S[6]+2734768916&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~v))+S[13]+1309151649&4294967295,I=P+(T<<21&4294967295|T>>>11),T=v+(P^(I|~N))+S[4]+4149444226&4294967295,v=I+(T<<6&4294967295|T>>>26),T=N+(I^(v|~P))+S[11]+3174756917&4294967295,N=v+(T<<10&4294967295|T>>>22),T=P+(v^(N|~I))+S[2]+718787259&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~v))+S[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+P&4294967295,A.g[3]=A.g[3]+N&4294967295}s.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var I=v-this.blockSize,S=this.B,P=this.h,N=0;N<v;){if(P==0)for(;N<=I;)r(this,A,N),N+=this.blockSize;if(typeof A=="string"){for(;N<v;)if(S[P++]=A.charCodeAt(N++),P==this.blockSize){r(this,S),P=0;break}}else for(;N<v;)if(S[P++]=A[N++],P==this.blockSize){r(this,S),P=0;break}}this.h=P,this.o+=v},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var I=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=I&255,I/=256;for(this.u(A),A=Array(16),v=I=0;4>v;++v)for(var S=0;32>S;S+=8)A[I++]=this.g[v]>>>S&255;return A};function i(A,v){var I=a;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=v(A)}function o(A,v){this.h=v;for(var I=[],S=!0,P=A.length-1;0<=P;P--){var N=A[P]|0;S&&N==v||(I[P]=N,S=!1)}this.g=I}var a={};function c(A){return-128<=A&&128>A?i(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return R(u(-A));for(var v=[],I=1,S=0;A>=I;S++)v[S]=A/I|0,I*=4294967296;return new o(v,0)}function h(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return R(h(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(v,8)),S=d,P=0;P<A.length;P+=8){var N=Math.min(8,A.length-P),T=parseInt(A.substring(P,P+N),v);8>N?(N=u(Math.pow(v,N)),S=S.j(N).add(u(T))):(S=S.j(I),S=S.add(u(T)))}return S}var d=c(0),m=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(C(this))return-R(this).m();for(var A=0,v=1,I=0;I<this.g.length;I++){var S=this.i(I);A+=(0<=S?S:4294967296+S)*v,v*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(C(this))return"-"+R(this).toString(A);for(var v=u(Math.pow(A,6)),I=this,S="";;){var P=H(I,v).g;I=L(I,P.j(v));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=P,E(I))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function C(A){return A.h==-1}n.l=function(A){return A=L(this,A),C(A)?-1:E(A)?0:1};function R(A){for(var v=A.g.length,I=[],S=0;S<v;S++)I[S]=~A.g[S];return new o(I,~A.h).add(m)}n.abs=function(){return C(this)?R(this):this},n.add=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],S=0,P=0;P<=v;P++){var N=S+(this.i(P)&65535)+(A.i(P)&65535),T=(N>>>16)+(this.i(P)>>>16)+(A.i(P)>>>16);S=T>>>16,N&=65535,T&=65535,I[P]=T<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function L(A,v){return A.add(R(v))}n.j=function(A){if(E(this)||E(A))return d;if(C(this))return C(A)?R(this).j(R(A)):R(R(this).j(A));if(C(A))return R(this.j(R(A)));if(0>this.l(g)&&0>A.l(g))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,I=[],S=0;S<2*v;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<A.g.length;P++){var N=this.i(S)>>>16,T=this.i(S)&65535,Bt=A.i(P)>>>16,cn=A.i(P)&65535;I[2*S+2*P]+=T*cn,M(I,2*S+2*P),I[2*S+2*P+1]+=N*cn,M(I,2*S+2*P+1),I[2*S+2*P+1]+=T*Bt,M(I,2*S+2*P+1),I[2*S+2*P+2]+=N*Bt,M(I,2*S+2*P+2)}for(S=0;S<v;S++)I[S]=I[2*S+1]<<16|I[2*S];for(S=v;S<2*v;S++)I[S]=0;return new o(I,0)};function M(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function U(A,v){this.g=A,this.h=v}function H(A,v){if(E(v))throw Error("division by zero");if(E(A))return new U(d,d);if(C(A))return v=H(R(A),v),new U(R(v.g),R(v.h));if(C(v))return v=H(A,R(v)),new U(R(v.g),v.h);if(30<A.g.length){if(C(A)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,S=v;0>=S.l(A);)I=ie(I),S=ie(S);var P=pe(I,1),N=pe(S,1);for(S=pe(S,2),I=pe(I,2);!E(S);){var T=N.add(S);0>=T.l(A)&&(P=P.add(I),N=T),S=pe(S,1),I=pe(I,1)}return v=L(A,P.j(v)),new U(P,v)}for(P=d;0<=A.l(v);){for(I=Math.max(1,Math.floor(A.m()/v.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=u(I),T=N.j(v);C(T)||0<T.l(A);)I-=S,N=u(I),T=N.j(v);E(N)&&(N=m),P=P.add(N),A=L(A,T)}return new U(P,A)}n.A=function(A){return H(this,A).h},n.and=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],S=0;S<v;S++)I[S]=this.i(S)&A.i(S);return new o(I,this.h&A.h)},n.or=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],S=0;S<v;S++)I[S]=this.i(S)|A.i(S);return new o(I,this.h|A.h)},n.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),I=[],S=0;S<v;S++)I[S]=this.i(S)^A.i(S);return new o(I,this.h^A.h)};function ie(A){for(var v=A.g.length+1,I=[],S=0;S<v;S++)I[S]=A.i(S)<<1|A.i(S-1)>>>31;return new o(I,A.h)}function pe(A,v){var I=v>>5;v%=32;for(var S=A.g.length-I,P=[],N=0;N<S;N++)P[N]=0<v?A.i(N+I)>>>v|A.i(N+I+1)<<32-v:A.i(N+I);return new o(P,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,rT=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ws=o}).apply(typeof Jg<"u"?Jg:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iT,bo,oT,Cl,Xh,aT,lT,cT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,p){return l==Array.prototype||l==Object.prototype||(l[f]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var f=0;f<l.length;++f){var p=l[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function r(l,f){if(f)e:{var p=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var O=l[_];if(!(O in p))break e;p=p[O]}l=l[l.length-1],_=p[l],f=f(_),f!=_&&f!=null&&e(p,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var p=0,_=!1,O={next:function(){if(!_&&p<l.length){var D=p++;return{value:f(D,l[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}r("Array.prototype.values",function(l){return l||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,p){return l.call.apply(l.bind,arguments)}function d(l,f,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function m(l,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(l,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function E(l,f){function p(){}p.prototype=f.prototype,l.aa=f.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,O,D){for(var K=Array(arguments.length-2),je=2;je<arguments.length;je++)K[je-2]=arguments[je];return f.prototype[O].apply(_,K)}}function C(l){const f=l.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=l[_];return p}return[]}function R(l,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const O=l.length||0,D=_.length||0;l.length=O+D;for(let K=0;K<D;K++)l[O+K]=_[K]}else l.push(_)}}class L{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function M(l){return/^[\s\xa0]*$/.test(l)}function U(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function H(l){return H[" "](l),l}H[" "]=function(){};var ie=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function pe(l,f,p){for(const _ in l)f.call(p,l[_],_,l)}function A(l,f){for(const p in l)f.call(void 0,l[p],p,l)}function v(l){const f={};for(const p in l)f[p]=l[p];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,f){let p,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(p in _)l[p]=_[p];for(let D=0;D<I.length;D++)p=I[D],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function P(l){var f=1;l=l.split(":");const p=[];for(;0<f&&l.length;)p.push(l.shift()),f--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function T(){var l=en;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Bt{constructor(){this.h=this.g=null}add(f,p){const _=cn.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var cn=new L(()=>new it,l=>l.reset());class it{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,Ie=!1,en=new Bt,wn=()=>{const l=a.Promise.resolve(void 0);Se=()=>{l.then(un)}};var un=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){N(p)}var f=cn;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Ie=!1};function Ze(){this.s=this.s,this.C=this.C}Ze.prototype.s=!1,Ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function et(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var Ss=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return l})();function Vn(l,f){if(et.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ie){e:{try{H(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else p=="mouseover"?f=l.fromElement:p=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Kt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Vn.aa.h.call(this)}}E(Vn,et);var Kt={2:"touch",3:"pen",4:"mouse"};Vn.prototype.h=function(){Vn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(l,f,p,_,O){this.listener=l,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=O,this.key=++ee,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Oe(l){this.src=l,this.g={},this.h=0}Oe.prototype.add=function(l,f,p,_,O){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var K=b(l,f,_,O);return-1<K?(f=l[K],p||(f.fa=!1)):(f=new X(f,this.src,D,!!_,O),f.fa=p,l.push(f)),f};function w(l,f){var p=f.type;if(p in l.g){var _=l.g[p],O=Array.prototype.indexOf.call(_,f,void 0),D;(D=0<=O)&&Array.prototype.splice.call(_,O,1),D&&(re(f),l.g[p].length==0&&(delete l.g[p],l.h--))}}function b(l,f,p,_){for(var O=0;O<l.length;++O){var D=l[O];if(!D.da&&D.listener==f&&D.capture==!!p&&D.ha==_)return O}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function q(l,f,p,_,O){if(Array.isArray(f)){for(var D=0;D<f.length;D++)q(l,f[D],p,_,O);return null}return p=fe(p),l&&l[V]?l.K(f,p,u(_)?!!_.capture:!1,O):$(l,f,p,!1,_,O)}function $(l,f,p,_,O,D){if(!f)throw Error("Invalid event type");var K=u(O)?!!O.capture:!!O,je=Z(l);if(je||(l[k]=je=new Oe(l)),p=je.add(f,p,_,K,D),p.proxy)return p;if(_=Y(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Ss||(O=K),O===void 0&&(O=!1),l.addEventListener(f.toString(),_,O);else if(l.attachEvent)l.attachEvent(W(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Y(){function l(p){return f.call(l.src,l.listener,p)}const f=le;return l}function G(l,f,p,_,O){if(Array.isArray(f))for(var D=0;D<f.length;D++)G(l,f[D],p,_,O);else _=u(_)?!!_.capture:!!_,p=fe(p),l&&l[V]?(l=l.i,f=String(f).toString(),f in l.g&&(D=l.g[f],p=b(D,p,_,O),-1<p&&(re(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[f],l.h--)))):l&&(l=Z(l))&&(f=l.g[f.toString()],l=-1,f&&(l=b(f,p,_,O)),(p=-1<l?f[l]:null)&&z(p))}function z(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[V])w(f.i,l);else{var p=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(p,_,l.capture):f.detachEvent?f.detachEvent(W(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=Z(f))?(w(p,l),p.h==0&&(p.src=null,f[k]=null)):re(l)}}}function W(l){return l in F?F[l]:F[l]="on"+l}function le(l,f){if(l.da)l=!0;else{f=new Vn(f,this);var p=l.listener,_=l.ha||l.src;l.fa&&z(l),l=p.call(_,f)}return l}function Z(l){return l=l[k],l instanceof Oe?l:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(l){return typeof l=="function"?l:(l[oe]||(l[oe]=function(f){return l.handleEvent(f)}),l[oe])}function ce(){Ze.call(this),this.i=new Oe(this),this.M=this,this.F=null}E(ce,Ze),ce.prototype[V]=!0,ce.prototype.removeEventListener=function(l,f,p,_){G(this,l,f,p,_)};function ve(l,f){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new et(f,l);else if(f instanceof et)f.target=f.target||l;else{var O=f;f=new et(_,l),S(f,O)}if(O=!0,p)for(var D=p.length-1;0<=D;D--){var K=f.g=p[D];O=Ce(K,_,!0,f)&&O}if(K=f.g=l,O=Ce(K,_,!0,f)&&O,O=Ce(K,_,!1,f)&&O,p)for(D=0;D<p.length;D++)K=f.g=p[D],O=Ce(K,_,!1,f)&&O}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var p=l.g[f],_=0;_<p.length;_++)re(p[_]);delete l.g[f],l.h--}}this.F=null},ce.prototype.K=function(l,f,p,_){return this.i.add(String(l),f,!1,p,_)},ce.prototype.L=function(l,f,p,_){return this.i.add(String(l),f,!0,p,_)};function Ce(l,f,p,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,D=0;D<f.length;++D){var K=f[D];if(K&&!K.da&&K.capture==p){var je=K.listener,yt=K.ha||K.src;K.fa&&w(l.i,K),O=je.call(yt,_)!==!1&&O}}return O&&!_.defaultPrevented}function mt(l,f,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function gt(l){l.g=mt(()=>{l.g=null,l.i&&(l.i=!1,gt(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class hn extends Ze{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(l){Ze.call(this),this.h=l,this.g={}}E(At,Ze);var Cs=[];function Ji(l){pe(l.g,function(f,p){this.g.hasOwnProperty(p)&&z(f)},l),l.g={}}At.prototype.N=function(){At.aa.N.call(this),Ji(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _t=a.JSON.stringify,dn=a.JSON.parse,$a=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function zr(){}zr.prototype.h=null;function dp(l){return l.h||(l.h=l.i())}function fp(){}var Xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vu(){et.call(this,"d")}E(vu,et);function Eu(){et.call(this,"c")}E(Eu,et);var hr={},pp=null;function Ba(){return pp=pp||new ce}hr.La="serverreachability";function mp(l){et.call(this,hr.La,l)}E(mp,et);function Zi(l){const f=Ba();ve(f,new mp(f))}hr.STAT_EVENT="statevent";function gp(l,f){et.call(this,hr.STAT_EVENT,l),this.stat=f}E(gp,et);function jt(l){const f=Ba();ve(f,new gp(f,l))}hr.Ma="timingevent";function _p(l,f){et.call(this,hr.Ma,l),this.size=f}E(_p,et);function eo(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function to(){this.g=!0}to.prototype.xa=function(){this.g=!1};function Ab(l,f,p,_,O,D){l.info(function(){if(l.g)if(D)for(var K="",je=D.split("&"),yt=0;yt<je.length;yt++){var xe=je[yt].split("=");if(1<xe.length){var Rt=xe[0];xe=xe[1];var St=Rt.split("_");K=2<=St.length&&St[1]=="type"?K+(Rt+"="+xe+"&"):K+(Rt+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+f+`
`+p+`
`+K})}function Rb(l,f,p,_,O,D,K){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+f+`
`+p+`
`+D+" "+K})}function Gr(l,f,p,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Cb(l,p)+(_?" "+_:"")})}function Sb(l,f){l.info(function(){return"TIMEOUT: "+f})}to.prototype.info=function(){};function Cb(l,f){if(!l.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var D=O[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<O.length;K++)O[K]=""}}}}return _t(p)}catch{return f}}var ja={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wu;function qa(){}E(qa,zr),qa.prototype.g=function(){return new XMLHttpRequest},qa.prototype.i=function(){return{}},wu=new qa;function Ps(l,f,p,_){this.j=l,this.i=f,this.l=p,this.R=_||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vp}function vp(){this.i=null,this.g="",this.h=!1}var Ep={},Tu={};function Iu(l,f,p){l.L=1,l.v=Ga(is(f)),l.m=p,l.P=!0,wp(l,null)}function wp(l,f){l.F=Date.now(),Ha(l),l.A=is(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Mp(p.i,"t",_),l.C=0,p=l.j.J,l.h=new vp,l.g=Zp(l.j,p?f:null,!l.m),0<l.O&&(l.M=new hn(m(l.Y,l,l.g),l.O)),f=l.U,p=l.g,_=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Cs[0]=O.toString()),O=Cs);for(var D=0;D<O.length;D++){var K=q(p,O[D],_||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Zi(),Ab(l.i,l.u,l.A,l.l,l.R,l.m)}Ps.prototype.ca=function(l){l=l.target;const f=this.M;f&&os(l)==3?f.j():this.Y(l)},Ps.prototype.Y=function(l){try{if(l==this.g)e:{const St=os(this.g);var f=this.g.Ba();const Yr=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||jp(this.g)))){this.J||St!=4||f==7||(f==8||0>=Yr?Zi(3):Zi(2)),bu(this);var p=this.g.Z();this.X=p;t:if(Tp(this)){var _=jp(this.g);l="";var O=_.length,D=os(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),no(this);var K="";break t}this.h.i=new a.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(D&&f==O-1)});_.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Rb(this.i,this.u,this.A,this.l,this.R,St,p),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(je)){var xe=je;break t}}xe=null}if(p=xe)Gr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Au(this,p);else{this.o=!1,this.s=3,jt(12),dr(this),no(this);break e}}if(this.P){p=!0;let Tn;for(;!this.J&&this.C<K.length;)if(Tn=Pb(this,K),Tn==Tu){St==4&&(this.s=4,jt(14),p=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==Ep){this.s=4,jt(15),Gr(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else Gr(this.i,this.l,Tn,null),Au(this,Tn);if(Tp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||K.length!=0||this.h.h||(this.s=1,jt(16),p=!1),this.o=this.o&&p,!p)Gr(this.i,this.l,K,"[Invalid Chunked Response]"),dr(this),no(this);else if(0<K.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Nu(Rt),Rt.M=!0,jt(11))}}else Gr(this.i,this.l,K,null),Au(this,K);St==4&&dr(this),this.o&&!this.J&&(St==4?Qp(this.j,this):(this.o=!1,Ha(this)))}else zb(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),dr(this),no(this)}}}catch{}finally{}};function Tp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Pb(l,f){var p=l.C,_=f.indexOf(`
`,p);return _==-1?Tu:(p=Number(f.substring(p,_)),isNaN(p)?Ep:(_+=1,_+p>f.length?Tu:(f=f.slice(_,_+p),l.C=_+p,f)))}Ps.prototype.cancel=function(){this.J=!0,dr(this)};function Ha(l){l.S=Date.now()+l.I,Ip(l,l.I)}function Ip(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=eo(m(l.ba,l),f)}function bu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ps.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Sb(this.i,this.A),this.L!=2&&(Zi(),jt(17)),dr(this),this.s=2,no(this)):Ip(this,this.S-l)};function no(l){l.j.G==0||l.J||Qp(l.j,l)}function dr(l){bu(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ji(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Au(l,f){try{var p=l.j;if(p.G!=0&&(p.g==l||Ru(p.h,l))){if(!l.K&&Ru(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Za(p),Ja(p);else break e;ku(p),jt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=eo(m(p.Za,p),6e3));if(1>=Rp(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else pr(p,11)}else if((l.K||p.g==l)&&Za(p),!M(f))for(O=p.Da.g.parse(f),f=0;f<O.length;f++){let xe=O[f];if(p.T=xe[0],xe=xe[1],p.G==2)if(xe[0]=="c"){p.K=xe[1],p.ia=xe[2];const Rt=xe[3];Rt!=null&&(p.la=Rt,p.j.info("VER="+p.la));const St=xe[4];St!=null&&(p.Aa=St,p.j.info("SVER="+p.Aa));const Yr=xe[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(_=1.5*Yr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Tn=l.g;if(Tn){const tl=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tl){var D=_.h;D.g||tl.indexOf("spdy")==-1&&tl.indexOf("quic")==-1&&tl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Su(D,D.h),D.h=null))}if(_.D){const Ou=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ou&&(_.ya=Ou,Ge(_.I,_.D,Ou))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=l;if(_.qa=Xp(_,_.J?_.ia:null,_.W),K.K){Sp(_.h,K);var je=K,yt=_.L;yt&&(je.I=yt),je.B&&(bu(je),Ha(je)),_.g=K}else Gp(_);0<p.i.length&&Xa(p)}else xe[0]!="stop"&&xe[0]!="close"||pr(p,7);else p.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?pr(p,7):Pu(p):xe[0]!="noop"&&p.l&&p.l.ta(xe),p.v=0)}}Zi(4)}catch{}}var kb=class{constructor(l,f){this.g=l,this.map=f}};function bp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ap(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Rp(l){return l.h?1:l.g?l.g.size:0}function Ru(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Su(l,f){l.g?l.g.add(f):l.h=f}function Sp(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}bp.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const p of l.g.values())f=f.concat(p.D);return f}return C(l.i)}function Nb(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],p=l.length,_=0;_<p;_++)f.push(l[_]);return f}f=[],p=0;for(_ in l)f[p++]=l[_];return f}function Ob(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var p=0;p<l;p++)f.push(p);return f}f=[],p=0;for(const _ in l)f[p++]=_;return f}}}function Pp(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var p=Ob(l),_=Nb(l),O=_.length,D=0;D<O;D++)f.call(void 0,_[D],p&&p[D],l)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xb(l,f){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),O=null;if(0<=_){var D=l[p].substring(0,_);O=l[p].substring(_+1)}else D=l[p];f(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fr){this.h=l.h,Wa(this,l.j),this.o=l.o,this.g=l.g,za(this,l.s),this.l=l.l;var f=l.i,p=new io;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Np(this,p),this.m=l.m}else l&&(f=String(l).match(kp))?(this.h=!1,Wa(this,f[1]||"",!0),this.o=so(f[2]||""),this.g=so(f[3]||"",!0),za(this,f[4]),this.l=so(f[5]||"",!0),Np(this,f[6]||"",!0),this.m=so(f[7]||"")):(this.h=!1,this.i=new io(null,this.h))}fr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(ro(f,Op,!0),":");var p=this.g;return(p||f=="file")&&(l.push("//"),(f=this.o)&&l.push(ro(f,Op,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ro(p,p.charAt(0)=="/"?Lb:Mb,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ro(p,Fb)),l.join("")};function is(l){return new fr(l)}function Wa(l,f,p){l.j=p?so(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function za(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Np(l,f,p){f instanceof io?(l.i=f,Ub(l.i,l.h)):(p||(f=ro(f,Vb)),l.i=new io(f,l.h))}function Ge(l,f,p){l.i.set(f,p)}function Ga(l){return Ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function so(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ro(l,f,p){return typeof l=="string"?(l=encodeURI(l).replace(f,Db),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Db(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Op=/[#\/\?@]/g,Mb=/[#\?:]/g,Lb=/[#\?]/g,Vb=/[#\?@]/g,Fb=/#/g;function io(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function ks(l){l.g||(l.g=new Map,l.h=0,l.i&&xb(l.i,function(f,p){l.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}n=io.prototype,n.add=function(l,f){ks(this),this.i=null,l=Kr(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(f),this.h+=1,this};function xp(l,f){ks(l),f=Kr(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Dp(l,f){return ks(l),f=Kr(l,f),l.g.has(f)}n.forEach=function(l,f){ks(this),this.g.forEach(function(p,_){p.forEach(function(O){l.call(f,O,_,this)},this)},this)},n.na=function(){ks(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const O=l[_];for(let D=0;D<O.length;D++)p.push(f[_])}return p},n.V=function(l){ks(this);let f=[];if(typeof l=="string")Dp(this,l)&&(f=f.concat(this.g.get(Kr(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)f=f.concat(l[p])}return f},n.set=function(l,f){return ks(this),this.i=null,l=Kr(this,l),Dp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},n.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mp(l,f,p){xp(l,f),0<p.length&&(l.i=null,l.g.set(Kr(l,f),C(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const D=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var O=D;K[_]!==""&&(O+="="+encodeURIComponent(String(K[_]))),l.push(O)}}return this.i=l.join("&")};function Kr(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Ub(l,f){f&&!l.j&&(ks(l),l.i=null,l.g.forEach(function(p,_){var O=_.toLowerCase();_!=O&&(xp(this,_),Mp(this,O,p))},l)),l.j=f}function $b(l,f){const p=new to;if(a.Image){const _=new Image;_.onload=g(Ns,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(Ns,p,"TestLoadImage: error",!1,f,_),_.onabort=g(Ns,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(Ns,p,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function Bb(l,f){const p=new to,_=new AbortController,O=setTimeout(()=>{_.abort(),Ns(p,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(D=>{clearTimeout(O),D.ok?Ns(p,"TestPingServer: ok",!0,f):Ns(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Ns(p,"TestPingServer: error",!1,f)})}function Ns(l,f,p,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(p)}catch{}}function jb(){this.g=new $a}function qb(l,f,p){const _=p||"";try{Pp(l,function(O,D){let K=O;u(O)&&(K=_t(O)),f.push(_+D+"="+encodeURIComponent(K))})}catch(O){throw f.push(_+"type="+encodeURIComponent("_badmap")),O}}function Ka(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Ka,zr),Ka.prototype.g=function(){return new Qa(this.l,this.j)},Ka.prototype.i=(function(l){return function(){return l}})({});function Qa(l,f){ce.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Qa,ce),n=Qa.prototype,n.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,ao(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?oo(this):ao(this),this.readyState==3&&Lp(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,oo(this))},n.Qa=function(l){this.g&&(this.response=l,oo(this))},n.ga=function(){this.g&&oo(this)};function oo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ao(l)}n.setRequestHeader=function(l,f){this.u.append(l,f)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=f.next();return l.join(`\r
`)};function ao(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Vp(l){let f="";return pe(l,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function Cu(l,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Vp(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ge(l,f,p))}function st(l){ce.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(st,ce);var Hb=/^https?$/i,Wb=["POST","PUT"];n=st.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wu.g(),this.v=this.o?dp(this.o):dp(wu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(D){Fp(this,D);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)p.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())p.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Wb,f,void 0))||_||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of p)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bp(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){Fp(this,D)}};function Fp(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Up(l),Ya(l)}function Up(l){l.A||(l.A=!0,ve(l,"complete"),ve(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ve(this,"complete"),ve(this,"abort"),Ya(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),st.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$p(this):this.bb())},n.bb=function(){$p(this)};function $p(l){if(l.h&&typeof o<"u"&&(!l.v[1]||os(l)!=4||l.Z()!=2)){if(l.u&&os(l)==4)mt(l.Ea,0,l);else if(ve(l,"readystatechange"),os(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=K===0){var O=String(l.D).match(kp)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),_=!Hb.test(O?O.toLowerCase():"")}p=_}if(p)ve(l,"complete"),ve(l,"success");else{l.m=6;try{var D=2<os(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",Up(l)}}finally{Ya(l)}}}}function Ya(l,f){if(l.g){Bp(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ve(l,"ready");try{p.onreadystatechange=_}catch{}}}function Bp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function os(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<os(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),dn(f)}};function jp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function zb(l){const f={};l=(l.g&&2<=os(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(M(l[_]))continue;var p=P(l[_]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=f[O]||[];f[O]=D,D.push(p)}A(f,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lo(l,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||f}function qp(l){this.Aa=0,this.i=[],this.j=new to,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lo("baseRetryDelayMs",5e3,l),this.cb=lo("retryDelaySeedMs",1e4,l),this.Wa=lo("forwardChannelMaxRetries",2,l),this.wa=lo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new bp(l&&l.concurrentRequestLimit),this.Da=new jb,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qp.prototype,n.la=8,n.G=1,n.connect=function(l,f,p,_){jt(0),this.W=l,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Xp(this,null,this.W),Xa(this)};function Pu(l){if(Hp(l),l.G==3){var f=l.U++,p=is(l.I);if(Ge(p,"SID",l.K),Ge(p,"RID",f),Ge(p,"TYPE","terminate"),co(l,p),f=new Ps(l,l.j,f),f.L=2,f.v=Ga(is(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=Zp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ha(f)}Jp(l)}function Ja(l){l.g&&(Nu(l),l.g.cancel(),l.g=null)}function Hp(l){Ja(l),l.u&&(a.clearTimeout(l.u),l.u=null),Za(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Xa(l){if(!Ap(l.h)&&!l.s){l.s=!0;var f=l.Ga;Se||wn(),Ie||(Se(),Ie=!0),en.add(f,l),l.B=0}}function Gb(l,f){return Rp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=eo(m(l.Ga,l,f),Yp(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new Ps(this,this.j,l);let D=this.o;if(this.S&&(D?(D=v(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(O.H=D,D=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=zp(this,O,f),p=is(this.I),Ge(p,"RID",l),Ge(p,"CVER",22),this.D&&Ge(p,"X-HTTP-Session-Id",this.D),co(this,p),D&&(this.O?f="headers="+encodeURIComponent(String(Vp(D)))+"&"+f:this.m&&Cu(p,this.m,D)),Su(this.h,O),this.Ua&&Ge(p,"TYPE","init"),this.P?(Ge(p,"$req",f),Ge(p,"SID","null"),O.T=!0,Iu(O,p,null)):Iu(O,p,f),this.G=2}}else this.G==3&&(l?Wp(this,l):this.i.length==0||Ap(this.h)||Wp(this))};function Wp(l,f){var p;f?p=f.l:p=l.U++;const _=is(l.I);Ge(_,"SID",l.K),Ge(_,"RID",p),Ge(_,"AID",l.T),co(l,_),l.m&&l.o&&Cu(_,l.m,l.o),p=new Ps(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),f&&(l.i=f.D.concat(l.i)),f=zp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Su(l.h,p),Iu(p,_,f)}function co(l,f){l.H&&pe(l.H,function(p,_){Ge(f,_,p)}),l.l&&Pp({},function(p,_){Ge(f,_,p)})}function zp(l,f,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let D=-1;for(;;){const K=["count="+p];D==-1?0<p?(D=O[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let je=!0;for(let yt=0;yt<p;yt++){let xe=O[yt].g;const Rt=O[yt].map;if(xe-=D,0>xe)D=Math.max(0,O[yt].g-100),je=!1;else try{qb(Rt,K,"req"+xe+"_")}catch{_&&_(Rt)}}if(je){_=K.join("&");break e}}}return l=l.i.splice(0,p),f.D=l,_}function Gp(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Se||wn(),Ie||(Se(),Ie=!0),en.add(f,l),l.v=0}}function ku(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=eo(m(l.Fa,l),Yp(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Kp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=eo(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),Ja(this),Kp(this))};function Nu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Kp(l){l.g=new Ps(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=is(l.qa);Ge(f,"RID","rpc"),Ge(f,"SID",l.K),Ge(f,"AID",l.T),Ge(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ge(f,"TO",l.ja),Ge(f,"TYPE","xmlhttp"),co(l,f),l.m&&l.o&&Cu(f,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ga(is(f)),p.m=null,p.P=!0,wp(p,l)}n.Za=function(){this.C!=null&&(this.C=null,Ja(this),ku(this),jt(19))};function Za(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Qp(l,f){var p=null;if(l.g==f){Za(l),Nu(l),l.g=null;var _=2}else if(Ru(l.h,f))p=f.D,Sp(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;_=Ba(),ve(_,new _p(_,p)),Xa(l)}else Gp(l);else if(O=f.s,O==3||O==0&&0<f.X||!(_==1&&Gb(l,f)||_==2&&ku(l)))switch(p&&0<p.length&&(f=l.h,f.i=f.i.concat(p)),O){case 1:pr(l,5);break;case 4:pr(l,10);break;case 3:pr(l,6);break;default:pr(l,2)}}}function Yp(l,f){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*f}function pr(l,f){if(l.j.info("Error code "+f),f==2){var p=m(l.fb,l),_=l.Xa;const O=!_;_=new fr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wa(_,"https"),Ga(_),O?$b(_.toString(),p):Bb(_.toString(),p)}else jt(2);l.G=0,l.l&&l.l.sa(f),Jp(l),Hp(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Jp(l){if(l.G=0,l.ka=[],l.l){const f=Cp(l.h);(f.length!=0||l.i.length!=0)&&(R(l.ka,f),R(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function Xp(l,f,p){var _=p instanceof fr?is(p):new fr(p);if(_.g!="")f&&(_.g=f+"."+_.g),za(_,_.s);else{var O=a.location;_=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var D=new fr(null);_&&Wa(D,_),f&&(D.g=f),O&&za(D,O),p&&(D.l=p),_=D}return p=l.D,f=l.ya,p&&f&&Ge(_,p,f),Ge(_,"VER",l.la),co(l,_),_}function Zp(l,f,p){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new st(new Ka({eb:p})):new st(l.pa),f.Ha(l.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function em(){}n=em.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function el(){}el.prototype.g=function(l,f){return new tn(l,f)};function tn(l,f){ce.call(this),this.g=new qp(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!M(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!M(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Qr(this)}E(tn,ce),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Pu(this.g)},tn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=_t(l),l=p);f.i.push(new kb(f.Ya++,l)),f.G==3&&Xa(f)},tn.prototype.N=function(){this.g.l=null,delete this.j,Pu(this.g),delete this.g,tn.aa.N.call(this)};function tm(l){vu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const p in f){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}E(tm,vu);function nm(){Eu.call(this),this.status=1}E(nm,Eu);function Qr(l){this.g=l}E(Qr,em),Qr.prototype.ua=function(){ve(this.g,"a")},Qr.prototype.ta=function(l){ve(this.g,new tm(l))},Qr.prototype.sa=function(l){ve(this.g,new nm)},Qr.prototype.ra=function(){ve(this.g,"b")},el.prototype.createWebChannel=el.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,cT=function(){return new el},lT=function(){return Ba()},aT=hr,Xh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ja.NO_ERROR=0,ja.TIMEOUT=8,ja.HTTP_ERROR=6,Cl=ja,yp.COMPLETE="complete",oT=yp,fp.EventType=Xi,Xi.OPEN="a",Xi.CLOSE="b",Xi.ERROR="c",Xi.MESSAGE="d",ce.prototype.listen=ce.prototype.K,bo=fp,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,iT=st}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const Xg="@firebase/firestore",Zg="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new ya("@firebase/firestore");function ti(){return Dr.logLevel}function te(n,...e){if(Dr.logLevel<=Te.DEBUG){const t=e.map(Rf);Dr.debug(`Firestore (${qi}): ${n}`,...t)}}function Is(n,...e){if(Dr.logLevel<=Te.ERROR){const t=e.map(Rf);Dr.error(`Firestore (${qi}): ${n}`,...t)}}function Ai(n,...e){if(Dr.logLevel<=Te.WARN){const t=e.map(Rf);Dr.warn(`Firestore (${qi}): ${n}`,...t)}}function Rf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,uT(n,s,t)}function uT(n,e,t){let s=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Is(s),new Error(s)}function Ue(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||uT(e,r,s)}function ye(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends ns{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Pt.UNAUTHENTICATED)))}shutdown(){}}class EO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wO{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new zs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zs,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zs)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string",31837,{l:s}),new hT(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new Pt(e)}}class TO{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class IO{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new TO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class e_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const s=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new e_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new e_(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=AO(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function be(n,e){return n<e?-1:n>e?1:0}function Zh(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return sh(r)===sh(i)?be(r,i):sh(r)?1:-1}return be(n.length,e.length)}const RO=55296,SO=57343;function sh(n){const e=n.charCodeAt(0);return e>=RO&&e<=SO}function Ri(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="__name__";class Bn{constructor(e,t,s){t===void 0?t=0:t>e.length&&de(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&de(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Bn.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return be(e.length,t.length)}static compareSegments(e,t){const s=Bn.isNumericId(e),r=Bn.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Bn.extractNumericId(e).compare(Bn.extractNumericId(t)):Zh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ws.fromString(e.substring(4,e.length-2))}}class We extends Bn{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const CO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Bn{construct(e,t,s){return new It(e,t,s)}static isValidIdentifier(e){return CO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===t_}static keyField(){return new It([t_])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new se(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new se(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new se(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(t)}static emptyPath(){return new It([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(We.fromString(e))}static fromName(e){return new ae(We.fromString(e).popFirst(5))}static empty(){return new ae(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n,e,t){if(!t)throw new se(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function PO(n,e,t,s){if(e===!0&&s===!0)throw new se(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function n_(n){if(!ae.isDocumentKey(n))throw new se(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function s_(n){if(ae.isDocumentKey(n))throw new se(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":de(12329,{type:typeof n})}function Si(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qc(n);throw new se(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ca(n,e){if(!fT(n))throw new se(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new se(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=-62135596800,i_=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*i_);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<r_)throw new se(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/i_}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ca(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-r_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:lt("string",Ye._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new Ye(0,0))}static max(){return new me(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=-1;function kO(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=me.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Js(r,ae.empty(),e)}function NO(n){return new Js(n.readTime,n.key,oa)}class Js{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Js(me.min(),ae.empty(),oa)}static max(){return new Js(me.max(),ae.empty(),oa)}}function OO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==xO)throw n;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):j.reject(t)}static resolve(e){return new j(((t,s)=>{t(e)}))}static reject(e){return new j(((t,s)=>{s(e)}))}static waitFor(e){return new j(((t,s)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(c=>s(c)))})),o=!0,i===r&&t()}))}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next((r=>r?j.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new j(((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next((h=>{o[u]=h,++a,a===i&&s(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new j(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function MO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=-1;function Jc(n){return n==null}function cc(n){return n===0&&1/n==-1/0}function LO(n){return typeof n=="number"&&Number.isInteger(n)&&!cc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="";function VO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=o_(e)),e=FO(n.get(t),e);return o_(e)}function FO(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case pT:t+="";break;default:t+=i}}return t}function o_(n){return n+pT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Br(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function mT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||vt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}}class dl{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??vt.RED,this.left=r??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new vt(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return vt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new vt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new l_(this.data.getIterator())}getIteratorFrom(e){return new l_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ht(this.comparator);return t.data=e,t}}class l_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Sn([])}unionWith(e){let t=new ht(It.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Sn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gT("Invalid base64 string: "+i):i}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const UO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xs(n){if(Ue(!!n,39018),typeof n=="string"){let e=0;const t=UO.exec(n);if(Ue(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zs(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="server_timestamp",yT="__type__",vT="__previous_value__",ET="__local_write_time__";function Pf(n){return(n?.mapValue?.fields||{})[yT]?.stringValue===_T}function Xc(n){const e=n.mapValue.fields[vT];return Pf(e)?Xc(e):e}function aa(n){const e=Xs(n.mapValue.fields[ET].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,t,s,r,i,o,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const uc="(default)";class la{constructor(e,t){this.projectId=e,this.database=t||uc}static empty(){return new la("","")}get isDefaultDatabase(){return this.database===uc}isEqual(e){return e instanceof la&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="__type__",BO="__max__",fl={mapValue:{}},TT="__vector__",hc="value";function er(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pf(n)?4:qO(n)?9007199254740991:jO(n)?10:11:de(28295,{value:n})}function es(n,e){if(n===e)return!0;const t=er(n);if(t!==er(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return aa(n).isEqual(aa(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Xs(r.timestampValue),a=Xs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Zs(r.bytesValue).isEqual(Zs(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return rt(r.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(r.geoPointValue.longitude)===rt(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return rt(r.integerValue)===rt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=rt(r.doubleValue),a=rt(i.doubleValue);return o===a?cc(o)===cc(a):isNaN(o)&&isNaN(a)}return!1})(n,e);case 9:return Ri(n.arrayValue.values||[],e.arrayValue.values||[],es);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(a_(o)!==a_(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!es(o[c],a[c])))return!1;return!0})(n,e);default:return de(52216,{left:n})}}function ca(n,e){return(n.values||[]).find((t=>es(t,e)))!==void 0}function Ci(n,e){if(n===e)return 0;const t=er(n),s=er(e);if(t!==s)return be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=rt(i.integerValue||i.doubleValue),c=rt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,e);case 3:return c_(n.timestampValue,e.timestampValue);case 4:return c_(aa(n),aa(e));case 5:return Zh(n.stringValue,e.stringValue);case 6:return(function(i,o){const a=Zs(i),c=Zs(o);return a.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=be(a[u],c[u]);if(h!==0)return h}return be(a.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=be(rt(i.latitude),rt(o.latitude));return a!==0?a:be(rt(i.longitude),rt(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return u_(n.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},c=o.fields||{},u=a[hc]?.arrayValue,h=c[hc]?.arrayValue,d=be(u?.values?.length||0,h?.values?.length||0);return d!==0?d:u_(u,h)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===fl.mapValue&&o===fl.mapValue)return 0;if(i===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=Zh(c[d],h[d]);if(m!==0)return m;const g=Ci(a[c[d]],u[h[d]]);if(g!==0)return g}return be(c.length,h.length)})(n.mapValue,e.mapValue);default:throw de(23264,{he:t})}}function c_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Xs(n),s=Xs(e),r=be(t.seconds,s.seconds);return r!==0?r:be(t.nanos,s.nanos)}function u_(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Ci(t[r],s[r]);if(i)return i}return be(t.length,s.length)}function Pi(n){return ed(n)}function ed(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Xs(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=ed(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${ed(t.fields[o])}`;return r+"}"})(n.mapValue):de(61005,{value:n})}function Pl(n){switch(er(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(n);return e?16+Pl(e):16;case 5:return 2*n.stringValue.length;case 6:return Zs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Pl(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Br(s.fields,((i,o)=>{r+=i.length+Pl(o)})),r})(n.mapValue);default:throw de(13486,{value:n})}}function h_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function td(n){return!!n&&"integerValue"in n}function kf(n){return!!n&&"arrayValue"in n}function d_(n){return!!n&&"nullValue"in n}function f_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kl(n){return!!n&&"mapValue"in n}function jO(n){return(n?.mapValue?.fields||{})[wT]?.stringValue===TT}function $o(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Br(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=$o(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$o(n.arrayValue.values[t]);return e}return{...n}}function qO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===BO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!kl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$o(t)}setAll(e){let t=It.emptyPath(),s={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=$o(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());kl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return es(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];kl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Br(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new fn($o(this.value))}}function IT(n){const e=[];return Br(n.fields,((t,s)=>{const r=new It([t]);if(kl(s)){const i=IT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xt(e,0,me.min(),me.min(),me.min(),fn.empty(),0)}static newFoundDocument(e,t,s,r){return new xt(e,1,t,me.min(),s,r,0)}static newNoDocument(e,t){return new xt(e,2,t,me.min(),me.min(),fn.empty(),0)}static newUnknownDocument(e,t){return new xt(e,3,t,me.min(),me.min(),fn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.position=e,this.inclusive=t}}function p_(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=ae.comparator(ae.fromName(o.referenceValue),t.key):s=Ci(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function m_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!es(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t="asc"){this.field=e,this.dir=t}}function HO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{}class at extends bT{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new zO(e,t,s):t==="array-contains"?new QO(e,s):t==="in"?new YO(e,s):t==="not-in"?new JO(e,s):t==="array-contains-any"?new XO(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new GO(e,s):new KO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ci(t,this.value)):t!==null&&er(this.value)===er(t)&&this.matchesComparison(Ci(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends bT{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Dn(e,t)}matches(e){return AT(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function AT(n){return n.op==="and"}function RT(n){return WO(n)&&AT(n)}function WO(n){for(const e of n.filters)if(e instanceof Dn)return!1;return!0}function nd(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+Pi(n.value);if(RT(n))return n.filters.map((e=>nd(e))).join(",");{const e=n.filters.map((t=>nd(t))).join(",");return`${n.op}(${e})`}}function ST(n,e){return n instanceof at?(function(s,r){return r instanceof at&&s.op===r.op&&s.field.isEqual(r.field)&&es(s.value,r.value)})(n,e):n instanceof Dn?(function(s,r){return r instanceof Dn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,a)=>i&&ST(o,r.filters[a])),!0):!1})(n,e):void de(19439)}function CT(n){return n instanceof at?(function(t){return`${t.field.canonicalString()} ${t.op} ${Pi(t.value)}`})(n):n instanceof Dn?(function(t){return t.op.toString()+" {"+t.getFilters().map(CT).join(" ,")+"}"})(n):"Filter"}class zO extends at{constructor(e,t,s){super(e,t,s),this.key=ae.fromName(s.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class GO extends at{constructor(e,t){super(e,"in",t),this.keys=PT("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class KO extends at{constructor(e,t){super(e,"not-in",t),this.keys=PT("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function PT(n,e){return(e.arrayValue?.values||[]).map((t=>ae.fromName(t.referenceValue)))}class QO extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kf(t)&&ca(t.arrayValue,this.value)}}class YO extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ca(this.value.arrayValue,t)}}class JO extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ca(this.value.arrayValue,t)}}class XO extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ca(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function g_(n,e=null,t=[],s=[],r=null,i=null,o=null){return new ZO(n,e,t,s,r,i,o)}function Nf(n){const e=ye(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>nd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Jc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Pi(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Pi(s))).join(",")),e.Te=t}return e.Te}function Of(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!HO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ST(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!m_(n.startAt,e.startAt)&&m_(n.endAt,e.endAt)}function sd(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ex(n,e,t,s,r,i,o,a){return new Pa(n,e,t,s,r,i,o,a)}function kT(n){return new Pa(n)}function __(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function NT(n){return n.collectionGroup!==null}function Bo(n){const e=ye(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(It.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new fc(i,s))})),t.has(It.keyField().canonicalString())||e.Ie.push(new fc(It.keyField(),s))}return e.Ie}function Gn(n){const e=ye(n);return e.Ee||(e.Ee=tx(e,Bo(n))),e.Ee}function tx(n,e){if(n.limitType==="F")return g_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new fc(r.field,i)}));const t=n.endAt?new dc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new dc(n.startAt.position,n.startAt.inclusive):null;return g_(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function rd(n,e){const t=n.filters.concat([e]);return new Pa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function id(n,e,t){return new Pa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zc(n,e){return Of(Gn(n),Gn(e))&&n.limitType===e.limitType}function OT(n){return`${Nf(Gn(n))}|lt:${n.limitType}`}function ni(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>CT(r))).join(", ")}]`),Jc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Pi(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Pi(r))).join(",")),`Target(${s})`})(Gn(n))}; limitType=${n.limitType})`}function eu(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ae.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Bo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,a,c){const u=p_(o,a,c);return o.inclusive?u<=0:u<0})(s.startAt,Bo(s),r)||s.endAt&&!(function(o,a,c){const u=p_(o,a,c);return o.inclusive?u>=0:u>0})(s.endAt,Bo(s),r))})(n,e)}function nx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xT(n){return(e,t)=>{let s=!1;for(const r of Bo(n)){const i=sx(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function sx(n,e,t){const s=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Ci(c,u):de(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return de(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return mT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new nt(ae.comparator);function bs(){return rx}const DT=new nt(ae.comparator);function Ao(...n){let e=DT;for(const t of n)e=e.insert(t.key,t);return e}function MT(n){let e=DT;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Tr(){return jo()}function LT(){return jo()}function jo(){return new jr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ix=new nt(ae.comparator),ox=new ht(ae.comparator);function Ae(...n){let e=ox;for(const t of n)e=e.add(t);return e}const ax=new ht(be);function lx(){return ax}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function VT(n){return{integerValue:""+n}}function cx(n,e){return LO(e)?VT(e):xf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this._=void 0}}function ux(n,e,t){return n instanceof pc?(function(r,i){const o={fields:{[yT]:{stringValue:_T},[ET]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Pf(i)&&(i=Xc(i)),i&&(o.fields[vT]=i),{mapValue:o}})(t,e):n instanceof ua?UT(n,e):n instanceof ha?$T(n,e):(function(r,i){const o=FT(r,i),a=y_(o)+y_(r.Ae);return td(o)&&td(r.Ae)?VT(a):xf(r.serializer,a)})(n,e)}function hx(n,e,t){return n instanceof ua?UT(n,e):n instanceof ha?$T(n,e):t}function FT(n,e){return n instanceof mc?(function(s){return td(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class pc extends tu{}class ua extends tu{constructor(e){super(),this.elements=e}}function UT(n,e){const t=BT(e);for(const s of n.elements)t.some((r=>es(r,s)))||t.push(s);return{arrayValue:{values:t}}}class ha extends tu{constructor(e){super(),this.elements=e}}function $T(n,e){let t=BT(e);for(const s of n.elements)t=t.filter((r=>!es(r,s)));return{arrayValue:{values:t}}}class mc extends tu{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function y_(n){return rt(n.integerValue||n.doubleValue)}function BT(n){return kf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function dx(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof ua&&r instanceof ua||s instanceof ha&&r instanceof ha?Ri(s.elements,r.elements,es):s instanceof mc&&r instanceof mc?es(s.Ae,r.Ae):s instanceof pc&&r instanceof pc})(n.transform,e.transform)}class fx{constructor(e,t){this.version=e,this.transformResults=t}}class Kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class nu{}function jT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new HT(n.key,Kn.none()):new ka(n.key,n.data,Kn.none());{const t=n.data,s=fn.empty();let r=new ht(It.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new qr(n.key,s,new Sn(r.toArray()),Kn.none())}}function px(n,e,t){n instanceof ka?(function(r,i,o){const a=r.value.clone(),c=E_(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof qr?(function(r,i,o){if(!Nl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=E_(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(qT(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function qo(n,e,t,s){return n instanceof ka?(function(i,o,a,c){if(!Nl(i.precondition,o))return a;const u=i.value.clone(),h=w_(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,s):n instanceof qr?(function(i,o,a,c){if(!Nl(i.precondition,o))return a;const u=w_(i.fieldTransforms,c,o),h=o.data;return h.setAll(qT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(n,e,t,s):(function(i,o,a){return Nl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function mx(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=FT(s.transform,r||null);i!=null&&(t===null&&(t=fn.empty()),t.set(s.field,i))}return t||null}function v_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ri(s,r,((i,o)=>dx(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ka extends nu{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class qr extends nu{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qT(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function E_(n,e,t){const s=new Map;Ue(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,hx(o,a,t[r]))}return s}function w_(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,ux(i,o,e))}return s}class HT extends nu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gx extends nu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&px(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qo(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qo(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=LT();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=jT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ae())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,((t,s)=>v_(t,s)))&&Ri(this.baseMutations,e.baseMutations,((t,s)=>v_(t,s)))}}class Df{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Ue(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return ix})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Df(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Pe;function Ex(n){switch(n){case B.OK:return de(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return de(15467,{code:n})}}function WT(n){if(n===void 0)return Is("GRPC error has no .code"),B.UNKNOWN;switch(n){case ot.OK:return B.OK;case ot.CANCELLED:return B.CANCELLED;case ot.UNKNOWN:return B.UNKNOWN;case ot.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ot.INTERNAL:return B.INTERNAL;case ot.UNAVAILABLE:return B.UNAVAILABLE;case ot.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ot.NOT_FOUND:return B.NOT_FOUND;case ot.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ot.ABORTED:return B.ABORTED;case ot.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ot.DATA_LOSS:return B.DATA_LOSS;default:return de(39323,{code:n})}}(Pe=ot||(ot={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=new Ws([4294967295,4294967295],0);function T_(n){const e=wx().encode(n),t=new rT;return t.update(e),new Uint8Array(t.digest())}function I_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ws([t,s],0),new Ws([r,i],0)]}class Mf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ro(`Invalid padding: ${t}`);if(s<0)throw new Ro(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ro(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ro(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ws.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Ws.fromNumber(s)));return r.compare(Tx)===1&&(r=new Ws([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=T_(e),[s,r]=I_(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mf(i,r,t);return s.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=T_(e),[s,r]=I_(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new su(me.min(),r,new nt(be),bs(),Ae())}}class Na{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Na(s,t,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class zT{constructor(e,t){this.targetId=e,this.Ce=t}}class GT{constructor(e,t,s=bt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class b_{constructor(){this.ve=0,this.Fe=A_(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ae(),t=Ae(),s=Ae();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:de(38017,{changeType:i})}})),new Na(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=A_()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ix{constructor(e){this.Ge=e,this.ze=new Map,this.je=bs(),this.Je=pl(),this.He=pl(),this.Ye=new nt(be)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:de(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(sd(i))if(s===0){const o=new ae(i.path);this.et(t,o,xt.newNoDocument(o,me.min()))}else Ue(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const a=this.ut(e),c=a?this.ct(a,e,o):1;if(c!==0){this.it(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Zs(s).toUint8Array()}catch(c){if(c instanceof gT)return Ai("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Mf(o,r,i)}catch(c){return Ai(c instanceof Ro?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.ge===0?null:a}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&sd(a.target)){const c=new ae(a.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,xt.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let s=Ae();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(s=s.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const r=new su(e,t,this.Ye,this.je,s);return this.je=bs(),this.Je=pl(),this.He=pl(),this.Ye=new nt(be),r}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new b_,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ht(be),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ht(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new b_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function pl(){return new nt(ae.comparator)}function A_(){return new nt(ae.comparator)}const bx={asc:"ASCENDING",desc:"DESCENDING"},Ax={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Rx={and:"AND",or:"OR"};class Sx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function od(n,e){return n.useProto3Json||Jc(e)?e:{value:e}}function gc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cx(n,e){return gc(n,e.toTimestamp())}function Qn(n){return Ue(!!n,49232),me.fromTimestamp((function(t){const s=Xs(t);return new Ye(s.seconds,s.nanos)})(n))}function Lf(n,e){return ad(n,e).canonicalString()}function ad(n,e){const t=(function(r){return new We(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function QT(n){const e=We.fromString(n);return Ue(eI(e),10190,{key:e.toString()}),e}function ld(n,e){return Lf(n.databaseId,e.path)}function rh(n,e){const t=QT(e);if(t.get(1)!==n.databaseId.projectId)throw new se(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(JT(t))}function YT(n,e){return Lf(n.databaseId,e)}function Px(n){const e=QT(n);return e.length===4?We.emptyPath():JT(e)}function cd(n){return new We(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function JT(n){return Ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function R_(n,e,t){return{name:ld(n,e),fields:t.value.mapValue.fields}}function kx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(Ue(h===void 0||typeof h=="string",58123),bt.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),bt.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?B.UNKNOWN:WT(u.code);return new se(h,u.message||"")})(o);t=new GT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=rh(n,s.document.name),i=Qn(s.document.updateTime),o=s.document.createTime?Qn(s.document.createTime):me.min(),a=new fn({mapValue:{fields:s.document.fields}}),c=xt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Ol(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=rh(n,s.document),i=s.readTime?Qn(s.readTime):me.min(),o=xt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Ol([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=rh(n,s.document),i=s.removedTargetIds||[];t=new Ol([],i,r,null)}else{if(!("filter"in e))return de(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new vx(r,i),a=s.targetId;t=new zT(a,o)}}return t}function Nx(n,e){let t;if(e instanceof ka)t={update:R_(n,e.key,e.value)};else if(e instanceof HT)t={delete:ld(n,e.key)};else if(e instanceof qr)t={update:R_(n,e.key,e.data),updateMask:$x(e.fieldMask)};else{if(!(e instanceof gx))return de(16599,{Vt:e.type});t={verify:ld(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const a=o.transform;if(a instanceof pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof mc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw de(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Cx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)})(n,e.precondition)),t}function Ox(n,e){return n&&n.length>0?(Ue(e!==void 0,14353),n.map((t=>(function(r,i){let o=r.updateTime?Qn(r.updateTime):Qn(i);return o.isEqual(me.min())&&(o=Qn(i)),new fx(o,r.transformResults||[])})(t,e)))):[]}function xx(n,e){return{documents:[YT(n,e.path)]}}function Dx(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=YT(n,r);const i=(function(u){if(u.length!==0)return ZT(Dn.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(m){return{field:si(m.field),direction:Vx(m.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=od(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:r}}function Mx(n){let e=Px(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Ue(s===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(d){const m=XT(d);return m instanceof Dn&&RT(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(d){return d.map((m=>(function(E){return new fc(ri(E.field),(function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(m)))})(t.orderBy));let a=null;t.limit&&(a=(function(d){let m;return m=typeof d=="object"?d.value:d,Jc(m)?null:m})(t.limit));let c=null;t.startAt&&(c=(function(d){const m=!!d.before,g=d.values||[];return new dc(g,m)})(t.startAt));let u=null;return t.endAt&&(u=(function(d){const m=!d.before,g=d.values||[];return new dc(g,m)})(t.endAt)),ex(e,r,o,i,a,"F",c,u)}function Lx(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function XT(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ri(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=ri(t.unaryFilter.field);return at.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ri(t.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(t.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}})(n):n.fieldFilter!==void 0?(function(t){return at.create(ri(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Dn.create(t.compositeFilter.filters.map((s=>XT(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return de(1026)}})(t.compositeFilter.op))})(n):de(30097,{filter:n})}function Vx(n){return bx[n]}function Fx(n){return Ax[n]}function Ux(n){return Rx[n]}function si(n){return{fieldPath:n.canonicalString()}}function ri(n){return It.fromServerFormat(n.fieldPath)}function ZT(n){return n instanceof at?(function(t){if(t.op==="=="){if(f_(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NAN"}};if(d_(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(f_(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NOT_NAN"}};if(d_(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(t.field),op:Fx(t.op),value:t.value}}})(n):n instanceof Dn?(function(t){const s=t.getFilters().map((r=>ZT(r)));return s.length===1?s[0]:{compositeFilter:{op:Ux(t.op),filters:s}}})(n):de(54877,{filter:n})}function $x(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function eI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,s,r,i=me.min(),o=me.min(),a=bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.yt=e}}function jx(n){const e=Mx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.Cn=new Hx}addToCollectionParentIndex(e,t){return this.Cn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(Js.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(Js.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class Hx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ht(We.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ht(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tI=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(tI,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ki(0)}static cr(){return new ki(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="LruGarbageCollector",Wx=1048576;function P_([n,e],[t,s]){const r=be(n,t);return r===0?be(e,s):r}class zx{constructor(e){this.Ir=e,this.buffer=new ht(P_),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();P_(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(C_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wi(t)?te(C_,"Ignoring IndexedDB error during garbage collection: ",t):await Hi(t)}await this.Vr(3e5)}))}}class Kx{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Yc.ce);const s=new zx(t);return this.mr.forEachTarget(e,(r=>s.Ar(r.sequenceNumber))).next((()=>this.mr.pr(e,(r=>s.Ar(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(S_)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),S_):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r)))).next((d=>(s=d,a=Date.now(),this.removeTargets(e,s,t)))).next((d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((d=>(u=Date.now(),ti()<=Te.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d}))))}}function Qx(n,e){return new Kx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.changes=new jr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&qo(s.mutation,r,Sn.empty(),Ye.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ae()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ae()){const r=Tr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let o=Ao();return i.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Tr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ae())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,s,r){let i=bs();const o=jo(),a=(function(){return jo()})();return t.forEach(((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof qr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),qo(h.mutation,u,h.mutation.getFieldMask(),Ye.now())):o.set(u.key,Sn.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>a.set(u,new Jx(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const s=jo();let r=new nt(((o,a)=>o-a)),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||Sn.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(r.get(a.batchId)||Ae()).add(c);r=r.insert(a.batchId,d)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=LT();h.forEach((m=>{if(!i.has(m)){const g=jT(t.get(m),s.get(m));g!==null&&d.set(m,g),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):NT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):j.resolve(Tr());let a=oa,c=i;return o.next((u=>j.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next((m=>{c=c.insert(h,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,Ae()))).next((h=>({batchId:a,changes:MT(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((s=>{let r=Ao();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,i).next((a=>j.forEach(a,(c=>{const u=(function(d,m){return new Pa(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((h=>{h.forEach(((d,m)=>{o=o.insert(d,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((o=>{i.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,xt.newInvalidDocument(h)))}));let a=Ao();return o.forEach(((c,u)=>{const h=i.get(c);h!==void 0&&qo(h.mutation,u,Sn.empty(),Ye.now()),eu(t,u)&&(a=a.insert(c,u))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return j.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Qn(r.createTime)}})(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(r){return{name:r.name,query:jx(r.bundledQuery),readTime:Qn(r.readTime)}})(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.overlays=new nt(ae.comparator),this.qr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Tr();return j.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),j.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const r=Tr(),i=t.length+1,o=new ae(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return j.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new nt(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Tr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return j.resolve(a)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new yx(t,s));let i=this.qr.get(t);i===void 0&&(i=Ae(),this.qr.set(t,i)),this.qr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.Qr=new ht(ft.$r),this.Ur=new ht(ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new ft(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new ft(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ae(new We([])),s=new ft(t,e),r=new ft(t,e+1),i=[];return this.Ur.forEachInRange([s,r],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ae(new We([])),s=new ft(t,e),r=new ft(t,e+1);let i=Ae();return this.Ur.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ft(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ft{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ae.comparator(e.key,t.key)||be(e.Yr,t.Yr)}static Kr(e,t){return be(e.Yr,t.Yr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ht(ft.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _x(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.Zr=this.Zr.add(new ft(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,t){return j.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ei(s),i=r<0?0:r;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Cf:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ft(t,0),r=new ft(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],(o=>{const a=this.Xr(o.Yr);i.push(a)})),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ht(be);return t.forEach((r=>{const i=new ft(r,0),o=new ft(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(a=>{s=s.add(a.Yr)}))})),j.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;ae.isDocumentKey(i)||(i=i.child(""));const o=new ft(new ae(i),0);let a=new ht(be);return this.Zr.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Yr)),!0)}),o),j.resolve(this.ti(a))}ti(e){const t=[];return e.forEach((s=>{const r=this.Xr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){Ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return j.forEach(t.mutations,(r=>{const i=new ft(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new ft(t,0),r=this.Zr.firstAfterOrEqual(s);return j.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.ri=e,this.docs=(function(){return new nt(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():xt.newInvalidDocument(t))}getEntries(e,t){let s=bs();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():xt.newInvalidDocument(r))})),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=bs();const o=t.path,a=new ae(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||OO(NO(h),s)<=0||(r.has(h.key)||eu(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,t,s,r){de(9500)}ii(e,t){return j.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new rD(this)}getSize(e){return j.resolve(this.size)}}class rD extends Yx{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)})),j.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.persistence=e,this.si=new jr((t=>Nf(t)),Of),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.oi=0,this._i=new Vf,this.targetCount=0,this.ai=ki.ur()}forEachTarget(e,t){return this.si.forEach(((s,r)=>t(r))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),j.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ki(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Pr(t),j.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.si.forEach(((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),j.waitFor(i).next((()=>r))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),j.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.ui={},this.overlays={},this.ci=new Yc(0),this.li=!1,this.li=!0,this.hi=new tD,this.referenceDelegate=e(this),this.Pi=new iD(this),this.indexManager=new qx,this.remoteDocumentCache=(function(r){return new sD(r)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new Bx(t),this.Ii=new Zx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new nD(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const r=new oD(this.ci.next());return this.referenceDelegate.Ei(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ai(e,t){return j.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class oD extends DO{constructor(e){super(),this.currentSequenceNumber=e}}class Ff{constructor(e){this.persistence=e,this.Ri=new Vf,this.Vi=null}static mi(e){return new Ff(e)}get fi(){if(this.Vi)return this.Vi;throw de(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((r=>this.fi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.fi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(s=>{const r=ae.fromPath(s);return this.gi(e,r).next((i=>{i||t.removeEntry(r,me.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return j.or([()=>j.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class _c{constructor(e,t){this.persistence=e,this.pi=new jr((s=>VO(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Qx(this,t)}static mi(e,t){return new _c(e,t)}Ei(){}di(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return j.forEach(this.pi,((s,r)=>this.br(e,s,r).next((i=>i?j.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,(o=>this.br(e,o,t).next((a=>{a||(s++,i.removeEntry(o,me.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pl(e.data.value)),t}br(e,t,s){return j.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return j.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=r}static As(e,t){let s=Ae(),r=Ae();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Uf(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return PR()?8:MO($t())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ys(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,t,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new aD;return this.Ss(e,t,o).next((a=>{if(i.result=a,this.Vs)return this.bs(e,t,o,a.size)}))})).next((()=>i.result))}bs(e,t,s,r){return s.documentReadCount<this.fs?(ti()<=Te.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ni(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(ti()<=Te.DEBUG&&te("QueryEngine","Query:",ni(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(ti()<=Te.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ni(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(t))):j.resolve())}ys(e,t){if(__(t))return j.resolve(null);let s=Gn(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=id(t,null,"F"),s=Gn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=Ae(...i);return this.ps.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,s).next((c=>{const u=this.Ds(t,a);return this.Cs(t,u,o,c.readTime)?this.ys(e,id(t,null,"F")):this.vs(e,u,t,c)}))))})))))}ws(e,t,s,r){return __(t)||r.isEqual(me.min())?j.resolve(null):this.ps.getDocuments(e,s).next((i=>{const o=this.Ds(t,i);return this.Cs(t,o,s,r)?j.resolve(null):(ti()<=Te.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ni(t)),this.vs(e,o,t,kO(r,oa)).next((a=>a)))}))}Ds(e,t){let s=new ht(xT(e));return t.forEach(((r,i)=>{eu(e,i)&&(s=s.add(i))})),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,s){return ti()<=Te.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ni(t)),this.ps.getDocumentsMatchingQuery(e,t,Js.min(),s)}vs(e,t,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="LocalStore",cD=3e8;class uD{constructor(e,t,s,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new nt(be),this.xs=new jr((i=>Nf(i)),Of),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function hD(n,e,t,s){return new uD(n,e,t,s)}async function sI(n,e){const t=ye(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],a=[];let c=Ae();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function dD(n,e){const t=ye(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(a,c,u,h){const d=u.batch,m=d.keys();let g=j.resolve();return m.forEach((E=>{g=g.next((()=>h.getEntry(c,E))).next((C=>{const R=u.docVersions.get(E);Ue(R!==null,48541),C.version.compareTo(R)<0&&(d.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,d)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(a){let c=Ae();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function rI(n){const e=ye(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function fD(n,e){const t=ye(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const a=[];e.targetChanges.forEach(((h,d)=>{const m=r.get(d);if(!m)return;a.push(t.Pi.removeMatchingKeys(i,h.removedDocuments,d).next((()=>t.Pi.addMatchingKeys(i,h.addedDocuments,d))));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),(function(C,R,L){return C.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=cD?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(m,g,h)&&a.push(t.Pi.updateTargetData(i,g))}));let c=bs(),u=Ae();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(pD(i,o,e.documentUpdates).next((h=>{c=h.ks,u=h.qs}))),!s.isEqual(me.min())){const h=t.Pi.getLastRemoteSnapshotVersion(i).next((d=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s)));a.push(h)}return j.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(t.Ms=r,i)))}function pD(n,e,t){let s=Ae(),r=Ae();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let o=bs();return t.forEach(((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te($f,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)})),{ks:o,qs:r}}))}function mD(n,e){const t=ye(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Cf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function gD(n,e){const t=ye(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.Pi.getTargetData(s,e).next((i=>i?(r=i,j.resolve(r)):t.Pi.allocateTargetId(s).next((o=>(r=new $s(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function ud(n,e,t){const s=ye(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Wi(o))throw o;te($f,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function k_(n,e,t){const s=ye(n);let r=me.min(),i=Ae();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const d=ye(c),m=d.xs.get(h);return m!==void 0?j.resolve(d.Ms.get(m)):d.Pi.getTargetData(u,h)})(s,o,Gn(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,a.targetId).next((c=>{i=c}))})).next((()=>s.Fs.getDocumentsMatchingQuery(o,e,t?r:me.min(),t?i:Ae()))).next((a=>(_D(s,nx(e),a),{documents:a,Qs:i})))))}function _D(n,e,t){let s=n.Os.get(e)||me.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Os.set(e,s)}class N_{constructor(){this.activeTargetIds=lx()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yD{constructor(){this.Mo=new N_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new N_,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="ConnectivityMonitor";class x_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(O_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(O_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml=null;function hd(){return ml===null?ml=(function(){return 268435456+Math.round(2147483648*Math.random())})():ml++,"0x"+ml.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="RestConnection",ED={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wD{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===uc?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,t,s,r,i){const o=hd(),a=this.zo(e,t.toUriEncodedString());te(ih,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(a),h=Li(u);return this.Jo(e,a,c,s,h).then((d=>(te(ih,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw Ai(ih,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",s),d}))}Ho(e,t,s,r,i,o){return this.Go(e,t,s,r,i)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+qi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}zo(e,t){const s=ED[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class ID extends wD{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const o=hd();return new Promise(((a,c)=>{const u=new iT;u.setWithCredentials(!0),u.listenOnce(oT.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Cl.NO_ERROR:const d=u.getResponseJson();te(Ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Cl.TIMEOUT:te(Ct,`RPC '${e}' ${o} timed out`),c(new se(B.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const m=u.getStatus();if(te(Ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g?.error;if(E&&E.status&&E.message){const C=(function(L){const M=L.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(M)>=0?M:B.UNKNOWN})(E.status);c(new se(C,E.message))}else c(new se(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new se(B.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{te(Ct,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);te(Ct,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,s,15)}))}T_(e,t,s){const r=hd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cT(),a=lT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");te(Ct,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);this.I_(d);let m=!1,g=!1;const E=new TD({Yo:R=>{g?te(Ct,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(m||(te(Ct,`Opening RPC '${e}' stream ${r} transport.`),d.open(),m=!0),te(Ct,`RPC '${e}' stream ${r} sending:`,R),d.send(R))},Zo:()=>d.close()}),C=(R,L,M)=>{R.listen(L,(U=>{try{M(U)}catch(H){setTimeout((()=>{throw H}),0)}}))};return C(d,bo.EventType.OPEN,(()=>{g||(te(Ct,`RPC '${e}' stream ${r} transport opened.`),E.o_())})),C(d,bo.EventType.CLOSE,(()=>{g||(g=!0,te(Ct,`RPC '${e}' stream ${r} transport closed`),E.a_(),this.E_(d))})),C(d,bo.EventType.ERROR,(R=>{g||(g=!0,Ai(Ct,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),E.a_(new se(B.UNAVAILABLE,"The operation could not be completed")))})),C(d,bo.EventType.MESSAGE,(R=>{if(!g){const L=R.data[0];Ue(!!L,16349);const M=L,U=M?.error||M[0]?.error;if(U){te(Ct,`RPC '${e}' stream ${r} received error:`,U);const H=U.status;let ie=(function(v){const I=ot[v];if(I!==void 0)return WT(I)})(H),pe=U.message;ie===void 0&&(ie=B.INTERNAL,pe="Unknown error status: "+H+" with message "+U.message),g=!0,E.a_(new se(ie,pe)),d.close()}else te(Ct,`RPC '${e}' stream ${r} received:`,L),E.u_(L)}})),C(a,aT.STAT_EVENT,(R=>{R.stat===Xh.PROXY?te(Ct,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===Xh.NOPROXY&&te(Ct,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{E.__()}),0),E}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function oh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n){return new Sx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&te("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="PersistentStream";class oI{constructor(e,t,s,r,i,o,a,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iI(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Is(t.toString()),Is("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new se(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(D_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(te(D_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bD extends oI{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=kx(this.serializer,e),s=(function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?Qn(o.readTime):me.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=cd(this.serializer),t.addTarget=(function(i,o){let a;const c=o.target;if(a=sd(c)?{documents:xx(i,c)}:{query:Dx(i,c).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KT(i,o.resumeToken);const u=od(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){a.readTime=gc(i,o.snapshotVersion.toTimestamp());const u=od(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const s=Lx(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=cd(this.serializer),t.removeTarget=e,this.q_(t)}}class AD extends oI{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Ox(e.writeResults,e.commitTime),s=Qn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=cd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Nx(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{}class SD extends RD{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new se(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,ad(t,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(B.UNKNOWN,i.toString())}))}Ho(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Ho(e,ad(t,s),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(B.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class CD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Is(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="RemoteStore";class PD{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{s.enqueueAndForget((async()=>{Hr(this)&&(te(Mr,"Restarting streams for network reachability change."),await(async function(c){const u=ye(c);u.Ea.add(4),await Oa(u),u.Ra.set("Unknown"),u.Ea.delete(4),await iu(u)})(this))}))})),this.Ra=new CD(s,r)}}async function iu(n){if(Hr(n))for(const e of n.da)await e(!0)}async function Oa(n){for(const e of n.da)await e(!1)}function aI(n,e){const t=ye(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Hf(t)?qf(t):zi(t).O_()&&jf(t,e))}function Bf(n,e){const t=ye(n),s=zi(t);t.Ia.delete(e),s.O_()&&lI(t,e),t.Ia.size===0&&(s.O_()?s.L_():Hr(t)&&t.Ra.set("Unknown"))}function jf(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zi(n).Y_(e)}function lI(n,e){n.Va.Ue(e),zi(n).Z_(e)}function qf(n){n.Va=new Ix({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),zi(n).start(),n.Ra.ua()}function Hf(n){return Hr(n)&&!zi(n).x_()&&n.Ia.size>0}function Hr(n){return ye(n).Ea.size===0}function cI(n){n.Va=void 0}async function kD(n){n.Ra.set("Online")}async function ND(n){n.Ia.forEach(((e,t)=>{jf(n,e)}))}async function OD(n,e){cI(n),Hf(n)?(n.Ra.ha(e),qf(n)):n.Ra.set("Unknown")}async function xD(n,e,t){if(n.Ra.set("Online"),e instanceof GT&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds)r.Ia.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Ia.delete(a),r.Va.removeTarget(a))})(n,e)}catch(s){te(Mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yc(n,s)}else if(e instanceof Ol?n.Va.Ze(e):e instanceof zT?n.Va.st(e):n.Va.tt(e),!t.isEqual(me.min()))try{const s=await rI(n.localStore);t.compareTo(s)>=0&&await(function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),a.targetMismatches.forEach(((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),lI(i,c);const d=new $s(h.target,c,u,h.sequenceNumber);jf(i,d)})),i.remoteSyncer.applyRemoteEvent(a)})(n,t)}catch(s){te(Mr,"Failed to raise snapshot:",s),await yc(n,s)}}async function yc(n,e,t){if(!Wi(e))throw e;n.Ea.add(1),await Oa(n),n.Ra.set("Offline"),t||(t=()=>rI(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{te(Mr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await iu(n)}))}function uI(n,e){return e().catch((t=>yc(n,t,e)))}async function ou(n){const e=ye(n),t=tr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cf;for(;DD(e);)try{const r=await mD(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,MD(e,r)}catch(r){await yc(e,r)}hI(e)&&dI(e)}function DD(n){return Hr(n)&&n.Ta.length<10}function MD(n,e){n.Ta.push(e);const t=tr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function hI(n){return Hr(n)&&!tr(n).x_()&&n.Ta.length>0}function dI(n){tr(n).start()}async function LD(n){tr(n).ra()}async function VD(n){const e=tr(n);for(const t of n.Ta)e.ea(t.mutations)}async function FD(n,e,t){const s=n.Ta.shift(),r=Df.from(s,e,t);await uI(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await ou(n)}async function UD(n,e){e&&tr(n).X_&&await(async function(s,r){if((function(o){return Ex(o)&&o!==B.ABORTED})(r.code)){const i=s.Ta.shift();tr(s).B_(),await uI(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ou(s)}})(n,e),hI(n)&&dI(n)}async function M_(n,e){const t=ye(n);t.asyncQueue.verifyOperationInProgress(),te(Mr,"RemoteStore received new credentials");const s=Hr(t);t.Ea.add(3),await Oa(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await iu(t)}async function $D(n,e){const t=ye(n);e?(t.Ea.delete(2),await iu(t)):e||(t.Ea.add(2),await Oa(t),t.Ra.set("Unknown"))}function zi(n){return n.ma||(n.ma=(function(t,s,r){const i=ye(t);return i.sa(),new bD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:kD.bind(null,n),t_:ND.bind(null,n),r_:OD.bind(null,n),H_:xD.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Hf(n)?qf(n):n.Ra.set("Unknown")):(await n.ma.stop(),cI(n))}))),n.ma}function tr(n){return n.fa||(n.fa=(function(t,s,r){const i=ye(t);return i.sa(),new AD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:LD.bind(null,n),r_:UD.bind(null,n),ta:VD.bind(null,n),na:FD.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ou(n)):(await n.fa.stop(),n.Ta.length>0&&(te(Mr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Wf(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zf(n,e){if(Is("AsyncQueue",`${e}: ${n}`),Wi(n))return new se(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ae.comparator(t.key,s.key):(t,s)=>ae.comparator(t.key,s.key),this.keyedMap=Ao(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.ga=new nt(ae.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):de(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ni{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Ni(e,t,yi.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class jD{constructor(){this.queries=V_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=ye(t),i=r.queries;r.queries=V_(),i.forEach(((o,a)=>{for(const c of a.Sa)c.onError(s)}))})(this,new se(B.ABORTED,"Firestore shutting down"))}}function V_(){return new jr((n=>OT(n)),Zc)}async function qD(n,e){const t=ye(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new BD,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=zf(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Gf(t)}async function HD(n,e){const t=ye(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function WD(n,e){const t=ye(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.Sa)a.Fa(r)&&(s=!0);o.wa=r}}s&&Gf(t)}function zD(n,e,t){const s=ye(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function Gf(n){n.Ca.forEach((e=>{e.next()}))}var dd,F_;(F_=dd||(dd={})).Ma="default",F_.Cache="cache";class GD{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ni(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==dd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.key=e}}class pI{constructor(e){this.key=e}}class KD{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ae(),this.mutatedKeys=Ae(),this.eu=xT(e),this.tu=new yi(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new L_,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,d)=>{const m=r.get(h),g=eu(this.query,d)?d:null,E=!!m&&this.mutatedKeys.has(m.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;m&&g?m.data.isEqual(g.data)?E!==C&&(s.track({type:3,doc:g}),R=!0):this.su(m,g)||(s.track({type:2,doc:g}),R=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(a=!0)):!m&&g?(s.track({type:0,doc:g}),R=!0):m&&!g&&(s.track({type:1,doc:m}),R=!0,(c||u)&&(a=!0)),R&&(g?(o=o.add(g),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Cs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,d)=>(function(g,E){const C=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Rt:R})}};return C(g)-C(E)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(s),r=r??!1;const a=t&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Ni(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new L_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ae(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new pI(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new fI(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ae();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ni.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Kf="SyncEngine";class QD{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class YD{constructor(e){this.key=e,this.hu=!1}}class JD{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jr((a=>OT(a)),Zc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(ae.comparator),this.Au=new Map,this.Ru=new Vf,this.Vu={},this.mu=new Map,this.fu=ki.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function XD(n,e,t=!0){const s=EI(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await mI(s,e,t,!0),r}async function ZD(n,e){const t=EI(n);await mI(t,e,!0,!1)}async function mI(n,e,t,s){const r=await gD(n.localStore,Gn(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await eM(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&aI(n.remoteStore,r),a}async function eM(n,e,t,s,r){n.pu=(d,m,g)=>(async function(C,R,L,M){let U=R.view.ru(L);U.Cs&&(U=await k_(C.localStore,R.query,!1).then((({documents:A})=>R.view.ru(A,U))));const H=M&&M.targetChanges.get(R.targetId),ie=M&&M.targetMismatches.get(R.targetId)!=null,pe=R.view.applyChanges(U,C.isPrimaryClient,H,ie);return $_(C,R.targetId,pe.au),pe.snapshot})(n,d,m,g);const i=await k_(n.localStore,e,!0),o=new KD(e,i.Qs),a=o.ru(i.documents),c=Na.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);$_(n,t,u.au);const h=new QD(e,t,o);return n.Tu.set(e,h),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function tM(n,e,t){const s=ye(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter((o=>!Zc(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ud(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Bf(s.remoteStore,r.targetId),fd(s,r.targetId)})).catch(Hi)):(fd(s,r.targetId),await ud(s.localStore,r.targetId,!0))}async function nM(n,e){const t=ye(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Bf(t.remoteStore,s.targetId))}async function sM(n,e,t){const s=uM(n);try{const r=await(function(o,a){const c=ye(o),u=Ye.now(),h=a.reduce(((g,E)=>g.add(E.key)),Ae());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let E=bs(),C=Ae();return c.Ns.getEntries(g,h).next((R=>{E=R,E.forEach(((L,M)=>{M.isValidDocument()||(C=C.add(L))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,E))).next((R=>{d=R;const L=[];for(const M of a){const U=mx(M,d.get(M.key).overlayedDocument);U!=null&&L.push(new qr(M.key,U,IT(U.value.mapValue),Kn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,L,a)})).next((R=>{m=R;const L=R.applyToLocalDocumentSet(d,C);return c.documentOverlayCache.saveOverlays(g,R.batchId,L)}))})).then((()=>({batchId:m.batchId,changes:MT(d)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,a,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new nt(be)),u=u.insert(a,c),o.Vu[o.currentUser.toKey()]=u})(s,r.batchId,t),await xa(s,r.changes),await ou(s.remoteStore)}catch(r){const i=zf(r,"Failed to persist write");t.reject(i)}}async function gI(n,e){const t=ye(n);try{const s=await fD(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Au.get(i);o&&(Ue(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Ue(o.hu,14607):r.removedDocuments.size>0&&(Ue(o.hu,42227),o.hu=!1))})),await xa(t,s,e)}catch(s){await Hi(s)}}function U_(n,e,t){const s=ye(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const c=ye(o);c.onlineState=a;let u=!1;c.queries.forEach(((h,d)=>{for(const m of d.Sa)m.va(a)&&(u=!0)})),u&&Gf(c)})(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rM(n,e,t){const s=ye(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new nt(ae.comparator);o=o.insert(i,xt.newNoDocument(i,me.min()));const a=Ae().add(i),c=new su(me.min(),new Map,new nt(be),o,a);await gI(s,c),s.du=s.du.remove(i),s.Au.delete(e),Qf(s)}else await ud(s.localStore,e,!1).then((()=>fd(s,e,t))).catch(Hi)}async function iM(n,e){const t=ye(n),s=e.batch.batchId;try{const r=await dD(t.localStore,e);yI(t,s,null),_I(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await xa(t,r)}catch(r){await Hi(r)}}async function oM(n,e,t){const s=ye(n);try{const r=await(function(o,a){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next((d=>(Ue(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>c.localDocuments.getDocuments(u,h)))}))})(s.localStore,e);yI(s,e,t),_I(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await xa(s,r)}catch(r){await Hi(r)}}function _I(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function yI(n,e,t){const s=ye(n);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function fd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||vI(n,s)}))}function vI(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Bf(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Qf(n))}function $_(n,e,t){for(const s of t)s instanceof fI?(n.Ru.addReference(s.key,e),aM(n,s)):s instanceof pI?(te(Kf,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||vI(n,s.key)):de(19791,{wu:s})}function aM(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(te(Kf,"New document in limbo: "+t),n.Eu.add(s),Qf(n))}function Qf(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ae(We.fromString(e)),s=n.fu.next();n.Au.set(s,new YD(t)),n.du=n.du.insert(t,s),aI(n.remoteStore,new $s(Gn(kT(t.path)),s,"TargetPurposeLimboResolution",Yc.ce))}}async function xa(n,e,t){const s=ye(n),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((a,c)=>{o.push(s.pu(c,e,t).then((u=>{if((u||t)&&s.isPrimaryClient){const h=u?!u.fromCache:t?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){r.push(u);const h=Uf.As(c.targetId,u);i.push(h)}})))})),await Promise.all(o),s.Pu.H_(r),await(async function(c,u){const h=ye(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>j.forEach(u,(m=>j.forEach(m.Es,(g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g))).next((()=>j.forEach(m.ds,(g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))))))}catch(d){if(!Wi(d))throw d;te($f,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.Ms.get(m),E=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(E);h.Ms=h.Ms.insert(m,C)}}})(s.localStore,i))}async function lM(n,e){const t=ye(n);if(!t.currentUser.isEqual(e)){te(Kf,"User change. New user:",e.toKey());const s=await sI(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((c=>{c.reject(new se(B.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await xa(t,s.Ls)}}function cM(n,e){const t=ye(n),s=t.Au.get(e);if(s&&s.hu)return Ae().add(s.key);{let r=Ae();const i=t.Iu.get(e);if(!i)return r;for(const o of i){const a=t.Tu.get(o);r=r.unionWith(a.view.nu)}return r}}function EI(n){const e=ye(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rM.bind(null,e),e.Pu.H_=WD.bind(null,e.eventManager),e.Pu.yu=zD.bind(null,e.eventManager),e}function uM(n){const e=ye(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oM.bind(null,e),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return hD(this.persistence,new lD,e.initialUser,this.serializer)}Cu(e){return new nI(Ff.mi,this.serializer)}Du(e){return new yD}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class hM extends vc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof _c,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Gx(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new nI((s=>_c.mi(s,t)),this.serializer)}}class pd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>U_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lM.bind(null,this.syncEngine),await $D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new jD})()}createDatastore(e){const t=ru(e.databaseInfo.databaseId),s=(function(i){return new ID(i)})(e.databaseInfo);return(function(i,o,a,c){return new SD(i,o,a,c)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,o,a){return new PD(s,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>U_(this.syncEngine,t,0)),(function(){return x_.v()?new x_:new vD})())}createSyncEngine(e,t){return(function(r,i,o,a,c,u,h){const d=new JD(r,i,o,a,c,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=ye(t);te(Mr,"RemoteStore shutting down."),s.Ea.add(5),await Oa(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}pd.provider={build:()=>new pd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Is("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="FirestoreClient";class fM{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Pt.UNAUTHENTICATED,this.clientId=Sf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{te(nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(te(nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=zf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ah(n,e){n.asyncQueue.verifyOperationInProgress(),te(nr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await sI(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function B_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pM(n);te(nr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>M_(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>M_(e.remoteStore,r))),n._onlineComponents=e}async function pM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){te(nr,"Using user provided OfflineComponentProvider");try{await ah(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Ai("Error using user provided cache. Falling back to memory cache: "+t),await ah(n,new vc)}}else te(nr,"Using default OfflineComponentProvider"),await ah(n,new hM(void 0));return n._offlineComponents}async function wI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(te(nr,"Using user provided OnlineComponentProvider"),await B_(n,n._uninitializedComponentsProvider._online)):(te(nr,"Using default OnlineComponentProvider"),await B_(n,new pd))),n._onlineComponents}function mM(n){return wI(n).then((e=>e.syncEngine))}async function gM(n){const e=await wI(n),t=e.eventManager;return t.onListen=XD.bind(null,e.syncEngine),t.onUnlisten=tM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZD.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nM.bind(null,e.syncEngine),t}function _M(n,e,t={}){const s=new zs;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,c,u){const h=new dM({next:m=>{h.Nu(),o.enqueueAndForget((()=>HD(i,d))),m.fromCache&&c.source==="server"?u.reject(new se(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new GD(a,h,{includeMetadataChanges:!0,qa:!0});return qD(i,d)})(await gM(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="firestore.googleapis.com",q_=!0;class H_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=II,this.ssl=q_}else this.host=e.host,this.ssl=e.ssl??q_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Wx)throw new se(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TI(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new vO;switch(s.type){case"firstParty":return new IO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=j_.get(t);s&&(te("ComponentProvider","Removing Datastore"),j_.delete(t),s.terminate())})(this),Promise.resolve()}}function yM(n,e,t,s={}){n=Si(n,au);const r=Li(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;r&&(Yv(`https://${a}`),Jv("Firestore",!0)),i.host!==II&&i.host!==a&&Ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:r,emulatorOptions:s};if(!Sr(c,o)&&(n._setSettings(c),s.mockUserToken)){let u,h;if(typeof s.mockUserToken=="string")u=s.mockUserToken,h=Pt.MOCK_USER;else{u=wR(s.mockUserToken,n._app?.options.projectId);const d=s.mockUserToken.sub||s.mockUserToken.user_id;if(!d)throw new se(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Pt(d)}n._authCredentials=new EO(new hT(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gi(this.firestore,e,this._query)}}class ut{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ca(t,ut._jsonSchema))return new ut(e,s||null,new ae(We.fromString(t.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:lt("string",ut._jsonSchemaVersion),referencePath:lt("string")};class Gs extends Gi{constructor(e,t,s){super(e,t,kT(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new ae(e))}withConverter(e){return new Gs(this.firestore,e,this._path)}}function sr(n,e,...t){if(n=Gt(n),dT("collection","path",e),n instanceof au){const s=We.fromString(e,...t);return s_(s),new Gs(n,null,s)}{if(!(n instanceof ut||n instanceof Gs))throw new se(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(We.fromString(e,...t));return s_(s),new Gs(n.firestore,null,s)}}function Yf(n,e,...t){if(n=Gt(n),arguments.length===1&&(e=Sf.newId()),dT("doc","path",e),n instanceof au){const s=We.fromString(e,...t);return n_(s),new ut(n,null,new ae(s))}{if(!(n instanceof ut||n instanceof Gs))throw new se(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(We.fromString(e,...t));return n_(s),new ut(n.firestore,n instanceof Gs?n.converter:null,new ae(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="AsyncQueue";class z_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iI(this,"async_queue_retry"),this._c=()=>{const s=oh();s&&te(W_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=oh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=oh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new zs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Wi(e))throw e;te(W_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Is("INTERNAL UNHANDLED ERROR: ",G_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Wf.createAndSchedule(this,e,t,s,(i=>this.hc(i)));return this.tc.push(r),r}uc(){this.nc&&de(47125,{Pc:G_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function G_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class lu extends au{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new z_,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new z_(e),this._firestoreClient=void 0,await e}}}function vM(n,e){const t=typeof n=="object"?n:Wd(),s=typeof n=="string"?n:uc,r=Hd(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ER("firestore");i&&yM(r,...i)}return r}function bI(n){if(n._terminated)throw new se(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||EM(n),n._firestoreClient}function EM(n){const e=n._freezeSettings(),t=(function(r,i,o,a){return new $O(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,TI(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new fM(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(bt.fromBase64String(e))}catch(t){throw new se(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ca(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:lt("string",pn._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if(Ca(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:lt("string",Yn._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ca(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jn(e.vectorValues);throw new se(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:lt("string",Jn._jsonSchemaVersion),vectorValues:lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=/^__.*__$/;class TM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ka(e,this.data,t,this.fieldTransforms)}}function RI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ac:n})}}class Xf{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Xf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){const t=this.path?.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ec(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(RI(this.Ac)&&wM.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class IM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ru(e)}Cc(e,t,s,r=!1){return new Xf({Ac:e,methodName:t,Dc:s,path:It.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zf(n){const e=n._freezeSettings(),t=ru(n._databaseId);return new IM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function SI(n,e,t,s,r,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,e,t,r);kI("Data must be an object, but it was:",o,s);const a=CI(s,o);let c,u;if(i.merge)c=new Sn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=AM(e,d,t);if(!o.contains(m))throw new se(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);SM(h,m)||h.push(m)}c=new Sn(h),u=o.fieldTransforms.filter((d=>c.covers(d.field)))}else c=null,u=o.fieldTransforms;return new TM(new fn(a),c,u)}function bM(n,e,t,s=!1){return ep(t,n.Cc(s?4:3,e))}function ep(n,e){if(PI(n=Gt(n)))return kI("Unsupported field value:",e,n),CI(n,e);if(n instanceof AI)return(function(s,r){if(!RI(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const a of s){let c=ep(a,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=Gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cx(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ye.fromDate(s);return{timestampValue:gc(r.serializer,i)}}if(s instanceof Ye){const i=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:gc(r.serializer,i)}}if(s instanceof Yn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof pn)return{bytesValue:KT(r.serializer,s._byteString)};if(s instanceof ut){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lf(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Jn)return(function(o,a){return{mapValue:{fields:{[wT]:{stringValue:TT},[hc]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw a.Sc("VectorValues must only contain numeric values.");return xf(a.serializer,u)}))}}}}}})(s,r);throw r.Sc(`Unsupported field value: ${Qc(s)}`)})(n,e)}function CI(n,e){const t={};return mT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(n,((s,r)=>{const i=ep(r,e.mc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function PI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ye||n instanceof Yn||n instanceof pn||n instanceof ut||n instanceof AI||n instanceof Jn)}function kI(n,e,t){if(!PI(t)||!fT(t)){const s=Qc(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function AM(n,e,t){if((e=Gt(e))instanceof Jf)return e._internalPath;if(typeof e=="string")return NI(n,e);throw Ec("Field path arguments must be of type string or ",n,!1,void 0,t)}const RM=new RegExp("[~\\*/\\[\\]]");function NI(n,e,t){if(e.search(RM)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Jf(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ec(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new se(B.INVALID_ARGUMENT,a+n+c)}function SM(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CM extends OI{data(){return super.data()}}function tp(n,e){return typeof e=="string"?NI(n,e):e instanceof Jf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class np{}class kM extends np{}function Da(n,e,...t){let s=[];e instanceof np&&s.push(e),s=s.concat(t),(function(i){const o=i.filter((c=>c instanceof sp)).length,a=i.filter((c=>c instanceof cu)).length;if(o>1||o>0&&a>0)throw new se(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class cu extends kM{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new cu(e,t,s)}_apply(e){const t=this._parse(e);return xI(e._query,t),new Gi(e.firestore,e.converter,rd(e._query,t))}_parse(e){const t=Zf(e.firestore);return(function(i,o,a,c,u,h,d){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new se(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Q_(d,h);const E=[];for(const C of d)E.push(K_(c,i,C));m={arrayValue:{values:E}}}else m=K_(c,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Q_(d,h),m=bM(a,o,d,h==="in"||h==="not-in");return at.create(u,h,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Lr(n,e,t){const s=e,r=tp("where",n);return cu._create(r,s,t)}class sp extends np{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sp(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)xI(o,c),o=rd(o,c)})(e._query,t),new Gi(e.firestore,e.converter,rd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function K_(n,e,t){if(typeof(t=Gt(t))=="string"){if(t==="")throw new se(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NT(e)&&t.indexOf("/")!==-1)throw new se(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!ae.isDocumentKey(s))throw new se(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return h_(n,new ae(s))}if(t instanceof ut)return h_(n,t._key);throw new se(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(t)}.`)}function Q_(n,e){if(!Array.isArray(n)||n.length===0)throw new se(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xI(n,e){const t=(function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class NM{convertValue(e,t="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Br(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){const t=e.fields?.[hc].arrayValue?.values?.map((s=>rt(s.doubleValue)));return new Jn(t)}convertGeoPoint(e){return new Yn(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(aa(e));default:return null}}convertTimestamp(e){const t=Xs(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);Ue(eI(s),9688,{name:e});const r=new la(s.get(1),s.get(3)),i=new ae(s.popFirst(5));return r.isEqual(t)||Is(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class gl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vi extends OI{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(tp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vi._jsonSchemaVersion="firestore/documentSnapshot/1.0",vi._jsonSchema={type:lt("string",vi._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class xl extends vi{data(e={}){return super.data(e)}}class Ei{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gl(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new xl(this._firestore,this._userDataWriter,s.key,s,new gl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{const c=new xl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new gl(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const c=new xl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new gl(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:OM(a.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Sf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:n})}}Ei._jsonSchemaVersion="firestore/querySnapshot/1.0",Ei._jsonSchema={type:lt("string",Ei._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class xM extends NM{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function Ma(n){n=Si(n,Gi);const e=Si(n.firestore,lu),t=bI(e),s=new xM(e);return PM(n._query),_M(t,n._query).then((r=>new Ei(e,s,n,r)))}function MI(n,e,t){n=Si(n,ut);const s=Si(n.firestore,lu),r=DI(n.converter,e);return LI(s,[SI(Zf(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Kn.none())])}function rp(n,e){const t=Si(n.firestore,lu),s=Yf(n),r=DI(n.converter,e);return LI(t,[SI(Zf(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Kn.exists(!1))]).then((()=>s))}function LI(n,e){return(function(s,r){const i=new zs;return s.asyncQueue.enqueueAndForget((async()=>sM(await mM(s),r,i))),i.promise})(bI(n),e)}(function(e,t=!0){(function(r){qi=r})(ar),Zn(new On("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new lu(new wO(s.getProvider("auth-internal")),new bO(o,s.getProvider("app-check-internal")),(function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new la(u.options.projectId,h)})(o,r),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),an(Xg,Zg,e),an(Xg,Zg,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="firebasestorage.googleapis.com",DM="storageBucket",MM=120*1e3,LM=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends ns{constructor(e,t,s=0){super(lh(e),`Firebase Storage: ${t} (${lh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rs.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ts;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ts||(ts={}));function lh(n){return"storage/"+n}function VM(){const n="An unknown error occurred, please check the error payload for server response.";return new rs(ts.UNKNOWN,n)}function FM(){return new rs(ts.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UM(){return new rs(ts.CANCELED,"User canceled the upload/download.")}function $M(n){return new rs(ts.INVALID_URL,"Invalid URL '"+n+"'.")}function BM(n){return new rs(ts.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Y_(n){return new rs(ts.INVALID_ARGUMENT,n)}function FI(){return new rs(ts.APP_DELETED,"The Firebase app was deleted.")}function jM(n){return new rs(ts.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Cn.makeFromUrl(e,t)}catch{return new Cn(e,"")}if(s.path==="")return s;throw BM(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(H){H.path_=decodeURIComponent(H.path)}const h="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${r}/o${m}`,"i"),E={bucket:1,path:3},C=t===VI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",L=new RegExp(`^https?://${C}/${r}/${R}`,"i"),U=[{regex:a,indices:c,postModify:i},{regex:g,indices:E,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let H=0;H<U.length;H++){const ie=U[H],pe=ie.regex.exec(e);if(pe){const A=pe[ie.indices.bucket];let v=pe[ie.indices.path];v||(v=""),s=new Cn(A,v),ie.postModify(s);break}}if(s==null)throw $M(e);return s}}class qM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...R){u||(u=!0,e.apply(null,R))}function d(R){r=setTimeout(()=>{r=null,n(g,c())},R)}function m(){i&&clearTimeout(i)}function g(R,...L){if(u){m();return}if(R){m(),h.call(null,R,...L);return}if(c()||o){m(),h.call(null,R,...L);return}s<64&&(s*=2);let U;a===1?(a=2,U=0):U=(s+Math.random())*1e3,d(U)}let E=!1;function C(R){E||(E=!0,m(),!u&&(r!==null?(R||(a=2),clearTimeout(r),d(0)):R||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,C(!0)},t),C}function WM(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(n){return n!==void 0}function J_(n,e,t,s){if(s<e)throw Y_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Y_(`Invalid value for '${n}'. Expected ${t} or less.`)}function GM(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var wc;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(wc||(wc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,t,s,r,i,o,a,c,u,h,d,m=!0,g=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=m,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,C)=>{this.resolve_=E,this.reject_=C,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new _l(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===wc.NO_ERROR,c=i.getStatus();if(!a||KM(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===wc.ABORT;s(!1,new _l(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new _l(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());zM(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=VM();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?FI():UM();o(c)}else{const c=FM();o(c)}};this.canceled_?t(!1,new _l(!1,null,!0)):this.backoffId_=HM(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _l{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function YM(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function JM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ZM(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function e2(n,e,t,s,r,i,o=!0,a=!1){const c=GM(n.urlParams),u=n.url+c,h=Object.assign({},n.headers);return XM(h,e),YM(h,t),JM(h,i),ZM(h,s),new QM(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function n2(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this._service=e,t instanceof Cn?this._location=t:this._location=Cn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Tc(e,t)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return n2(this._location.path)}get storage(){return this._service}get parent(){const e=t2(this._location.path);if(e===null)return null;const t=new Cn(this._location.bucket,e);return new Tc(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw jM(e)}}function X_(n,e){const t=e?.[DM];return t==null?null:Cn.makeFromBucketSpec(t,n)}class s2{constructor(e,t,s,r,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=VI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MM,this._maxUploadRetryTime=LM,this._requests=new Set,r!=null?this._bucket=Cn.makeFromBucketSpec(r,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tc(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new qM(FI());{const o=e2(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const Z_="@firebase/storage",ey="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2="storage";function i2(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new s2(t,s,r,e,ar)}function o2(){Zn(new On(r2,i2,"PUBLIC").setMultipleInstances(!0)),an(Z_,ey,""),an(Z_,ey,"esm2020")}o2();function Wr(n){return vM(sf(n))}function a2(n){return c2({initialUser:n,dependencies:{popupRedirectResolver:jE,persistence:[FE,OE,ef]}})}const l2=Symbol("VueFireAuth");function c2({dependencies:n,initialUser:e}){return(t,s)=>{const[r,i]=u2(t,s,e,n);xP(r,i)}}function u2(n,e,t,s,r=bE(n,s)){const i=NP(n,e).run(()=>we(t));return zE.set(n,i),e.provide(l2,r),[i,r]}function h2(n,{firebaseApp:e,modules:t=[]}){n.provide(WE,e);for(const s of t)s(e,n)}const d2=sE({apiKey:"AIzaSyDpmzGzYAiJKS7iJyeeDEPQNpmTT-NTfBw",authDomain:"nuxt-news-73a0a.firebaseapp.com",projectId:"nuxt-news-73a0a",storageBucket:"nuxt-news-73a0a.firebasestorage.app",messagingSenderId:"377026663071",appId:"1:377026663071:web:90096c1319a4b140c3c8aa",measurementId:"G-TWWEGCC6CZ"});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ii=typeof document<"u";function UI(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function f2(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&UI(n.default)}const Me=Object.assign;function ch(n,e){const t={};for(const s in e){const r=e[s];t[s]=Mn(r)?r.map(n):n(r)}return t}const Ho=()=>{},Mn=Array.isArray,$I=/#/g,p2=/&/g,m2=/\//g,g2=/=/g,_2=/\?/g,BI=/\+/g,y2=/%5B/g,v2=/%5D/g,jI=/%5E/g,E2=/%60/g,qI=/%7B/g,w2=/%7C/g,HI=/%7D/g,T2=/%20/g;function ip(n){return encodeURI(""+n).replace(w2,"|").replace(y2,"[").replace(v2,"]")}function I2(n){return ip(n).replace(qI,"{").replace(HI,"}").replace(jI,"^")}function md(n){return ip(n).replace(BI,"%2B").replace(T2,"+").replace($I,"%23").replace(p2,"%26").replace(E2,"`").replace(qI,"{").replace(HI,"}").replace(jI,"^")}function b2(n){return md(n).replace(g2,"%3D")}function A2(n){return ip(n).replace($I,"%23").replace(_2,"%3F")}function R2(n){return n==null?"":A2(n).replace(m2,"%2F")}function da(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const S2=/\/$/,C2=n=>n.replace(S2,"");function uh(n,e,t="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=n(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=O2(s??e,t),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:da(o)}}function P2(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ty(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function k2(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&Oi(e.matched[s],t.matched[r])&&WI(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Oi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function WI(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!N2(n[t],e[t]))return!1;return!0}function N2(n,e){return Mn(n)?ny(n,e):Mn(e)?ny(e,n):n===e}function ny(n,e){return Mn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function O2(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const xs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fa;(function(n){n.pop="pop",n.push="push"})(fa||(fa={}));var Wo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Wo||(Wo={}));function x2(n){if(!n)if(ii){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),C2(n)}const D2=/^[^#]+#/;function M2(n,e){return n.replace(D2,"#")+e}function L2(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const uu=()=>({left:window.scrollX,top:window.scrollY});function V2(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=L2(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sy(n,e){return(history.state?history.state.position-e:-1)+n}const gd=new Map;function F2(n,e){gd.set(n,e)}function U2(n){const e=gd.get(n);return gd.delete(n),e}let $2=()=>location.protocol+"//"+location.host;function zI(n,e){const{pathname:t,search:s,hash:r}=e,i=n.indexOf("#");if(i>-1){let a=r.includes(n.slice(i))?n.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ty(c,"")}return ty(t,n)+s+r}function B2(n,e,t,s){let r=[],i=[],o=null;const a=({state:m})=>{const g=zI(n,location),E=t.value,C=e.value;let R=0;if(m){if(t.value=g,e.value=m,o&&o===E){o=null;return}R=C?m.position-C.position:0}else s(g);r.forEach(L=>{L(t.value,E,{delta:R,type:fa.pop,direction:R?R>0?Wo.forward:Wo.back:Wo.unknown})})};function c(){o=t.value}function u(m){r.push(m);const g=()=>{const E=r.indexOf(m);E>-1&&r.splice(E,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Me({},m.state,{scroll:uu()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function ry(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?uu():null}}function j2(n){const{history:e,location:t}=window,s={value:zI(n,t)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=n.indexOf("#"),m=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:$2()+n+c;try{e[h?"replaceState":"pushState"](u,"",m),r.value=u}catch(g){console.error(g),t[h?"replace":"assign"](m)}}function o(c,u){const h=Me({},e.state,ry(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Me({},r.value,e.state,{forward:c,scroll:uu()});i(h.current,h,!0);const d=Me({},ry(s.value,c,null),{position:h.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function q2(n){n=x2(n);const e=j2(n),t=B2(n,e.state,e.location,e.replace);function s(i,o=!0){o||t.pauseListeners(),history.go(i)}const r=Me({location:"",base:n,go:s,createHref:M2.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function H2(n){return typeof n=="string"||n&&typeof n=="object"}function GI(n){return typeof n=="string"||typeof n=="symbol"}const KI=Symbol("");var iy;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(iy||(iy={}));function xi(n,e){return Me(new Error,{type:n,[KI]:!0},e)}function ls(n,e){return n instanceof Error&&KI in n&&(e==null||!!(n.type&e))}const oy="[^/]+?",W2={sensitive:!1,strict:!1,start:!0,end:!0},z2=/[.+*?^${}()[\]/\\]/g;function G2(n,e){const t=Me({},W2,e),s=[];let r=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(t.sensitive?.25:0);if(m.type===0)d||(r+="/"),r+=m.value.replace(z2,"\\$&"),g+=40;else if(m.type===1){const{value:E,repeatable:C,optional:R,regexp:L}=m;i.push({name:E,repeatable:C,optional:R});const M=L||oy;if(M!==oy){g+=10;try{new RegExp(`(${M})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${E}" (${M}): `+H.message)}}let U=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(U=R&&u.length<2?`(?:/${U})`:"/"+U),R&&(U+="?"),r+=U,g+=20,R&&(g+=-8),C&&(g+=-20),M===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",E=i[m-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const m of n){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:E,repeatable:C,optional:R}=g,L=E in u?u[E]:"";if(Mn(L)&&!C)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const M=Mn(L)?L.join("/"):L;if(!M)if(R)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);h+=M}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function K2(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function QI(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const i=K2(s[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-s.length)===1){if(ay(s))return 1;if(ay(r))return-1}return r.length-s.length}function ay(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Q2={type:0,value:""},Y2=/[a-zA-Z0-9_]/;function J2(n){if(!n)return[[]];if(n==="/")return[[Q2]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${u}": ${g}`)}let t=0,s=t;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function d(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),t=1):m();break;case 4:m(),t=s;break;case 1:c==="("?t=2:Y2.test(c)?m():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function X2(n,e,t){const s=G2(J2(n.path),t),r=Me(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Z2(n,e){const t=[],s=new Map;e=hy({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,m,g){const E=!g,C=cy(d);C.aliasOf=g&&g.record;const R=hy(e,d),L=[C];if("alias"in d){const H=typeof d.alias=="string"?[d.alias]:d.alias;for(const ie of H)L.push(cy(Me({},C,{components:g?g.record.components:C.components,path:ie,aliasOf:g?g.record:C})))}let M,U;for(const H of L){const{path:ie}=H;if(m&&ie[0]!=="/"){const pe=m.record.path,A=pe[pe.length-1]==="/"?"":"/";H.path=m.record.path+(ie&&A+ie)}if(M=X2(H,m,R),g?g.alias.push(M):(U=U||M,U!==M&&U.alias.push(M),E&&d.name&&!uy(M)&&o(d.name)),YI(M)&&c(M),C.children){const pe=C.children;for(let A=0;A<pe.length;A++)i(pe[A],M,g&&g.children[A])}g=g||M}return U?()=>{o(U)}:Ho}function o(d){if(GI(d)){const m=s.get(d);m&&(s.delete(d),t.splice(t.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=t.indexOf(d);m>-1&&(t.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function c(d){const m=nL(d,t);t.splice(m,0,d),d.record.name&&!uy(d)&&s.set(d.record.name,d)}function u(d,m){let g,E={},C,R;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw xi(1,{location:d});R=g.record.name,E=Me(ly(m.params,g.keys.filter(U=>!U.optional).concat(g.parent?g.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),d.params&&ly(d.params,g.keys.map(U=>U.name))),C=g.stringify(E)}else if(d.path!=null)C=d.path,g=t.find(U=>U.re.test(C)),g&&(E=g.parse(C),R=g.record.name);else{if(g=m.name?s.get(m.name):t.find(U=>U.re.test(m.path)),!g)throw xi(1,{location:d,currentLocation:m});R=g.record.name,E=Me({},m.params,d.params),C=g.stringify(E)}const L=[];let M=g;for(;M;)L.unshift(M.record),M=M.parent;return{name:R,path:C,params:E,matched:L,meta:tL(L)}}n.forEach(d=>i(d));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function ly(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function cy(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:eL(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function eL(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function uy(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function tL(n){return n.reduce((e,t)=>Me(e,t.meta),{})}function hy(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function nL(n,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;QI(n,e[i])<0?s=i:t=i+1}const r=sL(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function sL(n){let e=n;for(;e=e.parent;)if(YI(e)&&QI(n,e)===0)return e}function YI({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function rL(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(BI," "),o=i.indexOf("="),a=da(o<0?i:i.slice(0,o)),c=o<0?null:da(i.slice(o+1));if(a in e){let u=e[a];Mn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function dy(n){let e="";for(let t in n){const s=n[t];if(t=b2(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Mn(s)?s.map(i=>i&&md(i)):[s&&md(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function iL(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Mn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const oL=Symbol(""),fy=Symbol(""),hu=Symbol(""),op=Symbol(""),_d=Symbol("");function _o(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ls(n,e,t,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(xi(4,{from:t,to:e})):m instanceof Error?c(m):H2(m)?c(xi(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>n.call(s&&s.instances[r],e,t,u));let d=Promise.resolve(h);n.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function hh(n,e,t,s,r=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(UI(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Ls(h,t,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=f2(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Ls(g,t,s,o,a,r)()}))}}return i}function py(n){const e=_n(hu),t=_n(op),s=In(()=>{const c=Lt(n.to);return e.resolve(c)}),r=In(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=t.matched;if(!h||!d.length)return-1;const m=d.findIndex(Oi.bind(null,h));if(m>-1)return m;const g=my(c[u-2]);return u>1&&my(h)===g&&d[d.length-1].path!==g?d.findIndex(Oi.bind(null,c[u-2])):m}),i=In(()=>r.value>-1&&hL(t.params,s.value.params)),o=In(()=>r.value>-1&&r.value===t.matched.length-1&&WI(t.params,s.value.params));function a(c={}){if(uL(c)){const u=e[Lt(n.replace)?"replace":"push"](Lt(n.to)).catch(Ho);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:In(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function aL(n){return n.length===1?n[0]:n}const lL=De({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:py,setup(n,{slots:e}){const t=Nc(py(n)),{options:s}=_n(hu),r=In(()=>({[gy(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[gy(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&aL(e.default(t));return n.custom?i:Bv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),cL=lL;function uL(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function hL(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Mn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function my(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const gy=(n,e,t)=>n??e??t,dL=De({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=_n(_d),r=In(()=>n.route||s.value),i=_n(fy,0),o=In(()=>{let u=Lt(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=In(()=>r.value.matched[o.value]);vl(fy,In(()=>o.value+1)),vl(oL,a),vl(_d,r);const c=we();return Ar(()=>[c.value,a.value,n.name],([u,h,d],[m,g,E])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Oi(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=r.value,h=n.name,d=a.value,m=d&&d.components[h];if(!m)return _y(t.default,{Component:m,route:u});const g=d.props[h],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,R=Bv(m,Me({},E,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return _y(t.default,{Component:R,route:u})||R}}});function _y(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const fL=dL;function pL(n){const e=Z2(n.routes,n),t=n.parseQuery||rL,s=n.stringifyQuery||dy,r=n.history,i=_o(),o=_o(),a=_o(),c=IA(xs);let u=xs;ii&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ch.bind(null,V=>""+V),d=ch.bind(null,R2),m=ch.bind(null,da);function g(V,ee){let X,re;return GI(V)?(X=e.getRecordMatcher(V),re=ee):re=V,e.addRoute(re,X)}function E(V){const ee=e.getRecordMatcher(V);ee&&e.removeRoute(ee)}function C(){return e.getRoutes().map(V=>V.record)}function R(V){return!!e.getRecordMatcher(V)}function L(V,ee){if(ee=Me({},ee||c.value),typeof V=="string"){const k=uh(t,V,ee.path),F=e.resolve({path:k.path},ee),q=r.createHref(k.fullPath);return Me(k,F,{params:m(F.params),hash:da(k.hash),redirectedFrom:void 0,href:q})}let X;if(V.path!=null)X=Me({},V,{path:uh(t,V.path,ee.path).path});else{const k=Me({},V.params);for(const F in k)k[F]==null&&delete k[F];X=Me({},V,{params:d(k)}),ee.params=d(ee.params)}const re=e.resolve(X,ee),Oe=V.hash||"";re.params=h(m(re.params));const w=P2(s,Me({},V,{hash:I2(Oe),path:re.path})),b=r.createHref(w);return Me({fullPath:w,hash:Oe,query:s===dy?iL(V.query):V.query||{}},re,{redirectedFrom:void 0,href:b})}function M(V){return typeof V=="string"?uh(t,V,c.value.path):Me({},V)}function U(V,ee){if(u!==V)return xi(8,{from:ee,to:V})}function H(V){return A(V)}function ie(V){return H(Me(M(V),{replace:!0}))}function pe(V){const ee=V.matched[V.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let re=typeof X=="function"?X(V):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=M(re):{path:re},re.params={}),Me({query:V.query,hash:V.hash,params:re.path!=null?{}:V.params},re)}}function A(V,ee){const X=u=L(V),re=c.value,Oe=V.state,w=V.force,b=V.replace===!0,k=pe(X);if(k)return A(Me(M(k),{state:typeof k=="object"?Me({},Oe,k.state):Oe,force:w,replace:b}),ee||X);const F=X;F.redirectedFrom=ee;let q;return!w&&k2(s,re,X)&&(q=xi(16,{to:F,from:re}),un(re,re,!0,!1)),(q?Promise.resolve(q):S(F,re)).catch($=>ls($)?ls($,2)?$:wn($):Ie($,F,re)).then($=>{if($){if(ls($,2))return A(Me({replace:b},M($.to),{state:typeof $.to=="object"?Me({},Oe,$.to.state):Oe,force:w}),ee||F)}else $=N(F,re,!0,b,Oe);return P(F,re,$),$})}function v(V,ee){const X=U(V,ee);return X?Promise.reject(X):Promise.resolve()}function I(V){const ee=Ss.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(V):V()}function S(V,ee){let X;const[re,Oe,w]=mL(V,ee);X=hh(re.reverse(),"beforeRouteLeave",V,ee);for(const k of re)k.leaveGuards.forEach(F=>{X.push(Ls(F,V,ee))});const b=v.bind(null,V,ee);return X.push(b),Kt(X).then(()=>{X=[];for(const k of i.list())X.push(Ls(k,V,ee));return X.push(b),Kt(X)}).then(()=>{X=hh(Oe,"beforeRouteUpdate",V,ee);for(const k of Oe)k.updateGuards.forEach(F=>{X.push(Ls(F,V,ee))});return X.push(b),Kt(X)}).then(()=>{X=[];for(const k of w)if(k.beforeEnter)if(Mn(k.beforeEnter))for(const F of k.beforeEnter)X.push(Ls(F,V,ee));else X.push(Ls(k.beforeEnter,V,ee));return X.push(b),Kt(X)}).then(()=>(V.matched.forEach(k=>k.enterCallbacks={}),X=hh(w,"beforeRouteEnter",V,ee,I),X.push(b),Kt(X))).then(()=>{X=[];for(const k of o.list())X.push(Ls(k,V,ee));return X.push(b),Kt(X)}).catch(k=>ls(k,8)?k:Promise.reject(k))}function P(V,ee,X){a.list().forEach(re=>I(()=>re(V,ee,X)))}function N(V,ee,X,re,Oe){const w=U(V,ee);if(w)return w;const b=ee===xs,k=ii?history.state:{};X&&(re||b?r.replace(V.fullPath,Me({scroll:b&&k&&k.scroll},Oe)):r.push(V.fullPath,Oe)),c.value=V,un(V,ee,X,b),wn()}let T;function Bt(){T||(T=r.listen((V,ee,X)=>{if(!Vn.listening)return;const re=L(V),Oe=pe(re);if(Oe){A(Me(Oe,{replace:!0,force:!0}),re).catch(Ho);return}u=re;const w=c.value;ii&&F2(sy(w.fullPath,X.delta),uu()),S(re,w).catch(b=>ls(b,12)?b:ls(b,2)?(A(Me(M(b.to),{force:!0}),re).then(k=>{ls(k,20)&&!X.delta&&X.type===fa.pop&&r.go(-1,!1)}).catch(Ho),Promise.reject()):(X.delta&&r.go(-X.delta,!1),Ie(b,re,w))).then(b=>{b=b||N(re,w,!1),b&&(X.delta&&!ls(b,8)?r.go(-X.delta,!1):X.type===fa.pop&&ls(b,20)&&r.go(-1,!1)),P(re,w,b)}).catch(Ho)}))}let cn=_o(),it=_o(),Se;function Ie(V,ee,X){wn(V);const re=it.list();return re.length?re.forEach(Oe=>Oe(V,ee,X)):console.error(V),Promise.reject(V)}function en(){return Se&&c.value!==xs?Promise.resolve():new Promise((V,ee)=>{cn.add([V,ee])})}function wn(V){return Se||(Se=!V,Bt(),cn.list().forEach(([ee,X])=>V?X(V):ee()),cn.reset()),V}function un(V,ee,X,re){const{scrollBehavior:Oe}=n;if(!ii||!Oe)return Promise.resolve();const w=!X&&U2(sy(V.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return uv().then(()=>Oe(V,ee,w)).then(b=>b&&V2(b)).catch(b=>Ie(b,V,ee))}const Ze=V=>r.go(V);let et;const Ss=new Set,Vn={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:R,getRoutes:C,resolve:L,options:n,push:H,replace:ie,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:it.add,isReady:en,install(V){const ee=this;V.component("RouterLink",cL),V.component("RouterView",fL),V.config.globalProperties.$router=ee,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Lt(c)}),ii&&!et&&c.value===xs&&(et=!0,H(r.location).catch(Oe=>{}));const X={};for(const Oe in xs)Object.defineProperty(X,Oe,{get:()=>c.value[Oe],enumerable:!0});V.provide(hu,ee),V.provide(op,rv(X)),V.provide(_d,c);const re=V.unmount;Ss.add(V),V.unmount=function(){Ss.delete(V),Ss.size<1&&(u=xs,T&&T(),T=null,c.value=xs,et=!1,Se=!1),re()}}};function Kt(V){return V.reduce((ee,X)=>ee.then(()=>I(X)),Promise.resolve())}return Vn}function mL(n,e){const t=[],s=[],r=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>Oi(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>Oi(u,c))||r.push(c))}return[t,s,r]}function Ki(){return _n(hu)}function JI(n){return _n(op)}const gL={key:0},_L={key:1},yL={class:"dropdown dropdown-end me-4"},vL={tabindex:"0",role:"button",class:"btn btn-ghost"},EL={key:0},wL={class:"avatar"},TL={class:"ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring-2 ring-offset-2"},IL=["src"],bL={tabindex:"0",class:"dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-4 shadow-sm"},AL={class:"mt-3"},RL={class:"mt-3"},SL={key:2,class:"btn btn-neutral ms-4"},CL=De({name:"SignOut",__name:"SignOut",setup(n){const e=qc(),t=we(""),s=we(""),r=Ki(),i=ss(),o=()=>{t.value="",s.value="",YC(e).then(()=>{s.value="¡Hasta luego!",setTimeout(()=>{r.push("/")},1500)}).catch(a=>{const c=a.code;t.value=a.message,console.log(c,t)})};return(a,c)=>{const u=ir("RouterLink");return Q(),ne("main",null,[t.value?(Q(),ne("div",gL)):zt("",!0),Lt(i)?(Q(),ne("div",_L,[y("div",yL,[y("div",vL,[Lt(i).photoURL?(Q(),ne("div",EL,[y("div",wL,[y("div",TL,[y("img",{src:Lt(i).photoURL},null,8,IL)])])])):zt("",!0),c[0]||(c[0]=y("div",null,[y("div",{class:"avatar"},[y("div",{class:"ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring-2 ring-offset-2"},[y("img",{src:"https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"})])])],-1))]),y("ul",bL,[y("li",AL,[ue(u,{to:"/profile"},{default:wt(()=>[...c[1]||(c[1]=[Jt("Profile",-1)])]),_:1})]),y("li",RL,[ue(u,{to:"/profile/upload"},{default:wt(()=>[...c[2]||(c[2]=[Jt("Create",-1)])]),_:1})]),y("li",{class:"mt-3"},[y("button",{onClick:o,class:"btn btn-neutral"},"SignOut")])])])])):(Q(),ne("button",SL,[ue(u,{to:"/login"},{default:wt(()=>[...c[3]||(c[3]=[Jt("Login",-1)])]),_:1})]))])}}});var dh={exports:{}},yy;function PL(){return yy||(yy=1,(function(n,e){function t(){var o=document.querySelector("[data-toggle-theme]"),a=o?o.getAttribute("data-key"):null;(function(c=localStorage.getItem(a||"theme")){localStorage.getItem(a||"theme")&&(document.documentElement.setAttribute("data-theme",c),o&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(u=>{u.classList.add(o.getAttribute("data-act-class"))}))})(),o&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(c=>{c.addEventListener("click",function(){var u=c.getAttribute("data-toggle-theme");if(u){var h=u.split(",");document.documentElement.getAttribute("data-theme")==h[0]?h.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(a||"theme")):(document.documentElement.setAttribute("data-theme",h[1]),localStorage.setItem(a||"theme",h[1])):(document.documentElement.setAttribute("data-theme",h[0]),localStorage.setItem(a||"theme",h[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(d=>{d.classList.toggle(this.getAttribute("data-act-class"))})})})}function s(){var o=document.querySelector("[data-set-theme='']"),a=o?o.getAttribute("data-key"):null;(function(c=localStorage.getItem(a||"theme")){if(c!=null&&c!="")if(localStorage.getItem(a||"theme")&&localStorage.getItem(a||"theme")!=""){document.documentElement.setAttribute("data-theme",c);var u=document.querySelector("[data-set-theme='"+c.toString()+"']");u&&([...document.querySelectorAll("[data-set-theme]")].forEach(h=>{h.classList.remove(h.getAttribute("data-act-class"))}),u.getAttribute("data-act-class")&&u.classList.add(u.getAttribute("data-act-class")))}else{var u=document.querySelector("[data-set-theme='']");u.getAttribute("data-act-class")&&u.classList.add(u.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(u=>{u.classList.remove(u.getAttribute("data-act-class"))}),c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class"))})})}function r(){var o=document.querySelector("select[data-choose-theme]"),a=o?o.getAttribute("data-key"):null;(function(c=localStorage.getItem(a||"theme")){if(localStorage.getItem(a||"theme")){document.documentElement.setAttribute("data-theme",c);var u=document.querySelector("select[data-choose-theme] [value='"+c.toString()+"']");u&&[...document.querySelectorAll("select[data-choose-theme] [value='"+c.toString()+"']")].forEach(h=>{h.selected=!0})}})(),o&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(c=>{c.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(a||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(a||"theme")+"']")].forEach(u=>{u.selected=!0})})})}function i(o=!0){o===!0?document.addEventListener("DOMContentLoaded",function(a){t(),r(),s()}):(t(),r(),s())}n.exports={themeChange:i}})(dh)),dh.exports}var kL=PL();const NL={class:"swap swap-rotate"},OL=De({__name:"ThemeToggle",setup(n){return Di(()=>{kL.themeChange(!1)}),(e,t)=>(Q(),ne("label",NL,[...t[0]||(t[0]=[$d('<input data-choose-theme type="checkbox" class="theme-controller" value="dark"><svg class="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg><svg class="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg>',3)])]))}}),xL={class:"navbar bg-base-100 shadow-sm"},DL={class:"navbar-start"},ML={class:"dropdown"},LL={tabindex:"0",class:"menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"},VL={class:"navbar-center hidden lg:flex"},FL={class:"menu menu-horizontal px-1"},UL={class:"navbar-end"},$L=De({name:"NavBar",__name:"Navbar",setup(n){return(e,t)=>{const s=ir("RouterLink");return Q(),ne("div",xL,[y("div",DL,[y("div",ML,[t[3]||(t[3]=y("div",{tabindex:"0",role:"button",class:"btn btn-ghost lg:hidden"},[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1)),y("ul",LL,[y("li",null,[ue(s,{to:"/feed"},{default:wt(()=>[...t[0]||(t[0]=[Jt("Feed",-1)])]),_:1})]),y("li",null,[ue(s,{to:"/profile/favorites"},{default:wt(()=>[...t[1]||(t[1]=[Jt("Favorites",-1)])]),_:1})]),y("li",null,[ue(s,{to:"/profile/myphotos"},{default:wt(()=>[...t[2]||(t[2]=[Jt("Posts",-1)])]),_:1})])])]),t[4]||(t[4]=y("a",{href:"/",class:"btn btn-ghost text-xl"},"Home",-1))]),y("div",VL,[y("ul",FL,[y("li",null,[ue(s,{to:"/feed"},{default:wt(()=>[...t[5]||(t[5]=[Jt("Feed",-1)])]),_:1})]),y("li",null,[ue(s,{to:"/profile/favorites"},{default:wt(()=>[...t[6]||(t[6]=[Jt("Favorites",-1)])]),_:1})]),y("li",null,[ue(s,{to:"/profile/myphotos"},{default:wt(()=>[...t[7]||(t[7]=[Jt("Posts",-1)])]),_:1})])])]),y("div",UL,[ue(OL),ue(CL)])])}}}),BL={class:"footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"},jL=De({name:"FooterComponent",__name:"Footer",setup(n){return(e,t)=>(Q(),ne("footer",BL,[...t[0]||(t[0]=[$d('<nav class="grid grid-flow-col gap-4"><a class="link link-hover">About us</a><a class="link link-hover">Contact</a><a class="link link-hover">Jobs</a><a class="link link-hover">Press kit</a></nav><nav><div class="grid grid-flow-col gap-4"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></div></nav><aside><p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p></aside>',3)])]))}}),qL={class:"flex flex-col min-h-screen"},HL={key:0},WL={class:"flex flex-grow justify-center items-center"},zL={key:1},GL=De({__name:"App",setup(n){return(e,t)=>{const s=ir("router-view");return Q(),ne("div",qL,[["/","/login"].includes(e.$route.path)?zt("",!0):(Q(),ne("div",HL,[ue($L)])),y("main",WL,[ue(s)]),["/","/login"].includes(e.$route.path)?zt("",!0):(Q(),ne("div",zL,[ue(jL)]))])}}}),ap=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},KL={},QL={class:"hero min-h-screen min-w-screen p-0 m-0 w-full",style:{"background-image":"url(https://images.unsplash.com/photo-1756091710842-f86df05c949a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}},YL={class:"hero-content text-neutral-content text-center"},JL={class:"flex flex-col gap-6 max-w-md"},XL={class:"flex justify-center items-center mx-auto gap-4"},ZL={class:"btn btn-primary"},eV={class:"btn btn-primary"};function tV(n,e){const t=ir("RouterLink");return Q(),ne("div",QL,[e[4]||(e[4]=y("div",{class:"hero-overlay"},null,-1)),y("div",YL,[y("div",JL,[e[2]||(e[2]=y("h1",{class:"mb-5 text-5xl font-bold"},"App Images",-1)),e[3]||(e[3]=y("p",{class:"mb-5"},"Social media for photographers. Share, discover and grow your community",-1)),y("div",XL,[y("button",ZL,[ue(t,{to:"/feed"},{default:wt(()=>[...e[0]||(e[0]=[Jt("Get Started",-1)])]),_:1})]),y("button",eV,[ue(t,{to:"/login"},{default:wt(()=>[...e[1]||(e[1]=[Jt("Login",-1)])]),_:1})])])])])])}const nV=ap(KL,[["render",tV]]),sV=De({__name:"HomeView",setup(n){return(e,t)=>(Q(),or(nV))}}),rV={class:"fieldset"},iV={key:0},oV={class:"toast toast-top toast-center"},aV={class:"alert alert-error"},lV={key:1},cV={class:"toast toast-top toast-center"},uV={class:"alert alert-info"},hV=De({name:"RegisterComponent",__name:"Register",setup(n){const e=we(""),t=we(""),s=qc(),r=we(""),i=we(""),o=Ki(),a=()=>{if(r.value="",i.value="",!e.value||!t.value){r.value="El email y la contraseña son obligatorios.";return}GC(s,e.value,t.value).then(c=>{const u=c.user;console.log(u),i.value="¡Cuenta creada con éxito!",setTimeout(()=>{o.push("/feed")},2e3)}).catch(c=>{const u=c.code;r.value=c.message,console.log(u,r)})};return(c,u)=>(Q(),ne(tt,null,[y("div",null,[y("fieldset",rV,[u[2]||(u[2]=y("label",{class:"label"},"Email",-1)),Qo(y("input",{type:"email",class:"input",placeholder:"Email","onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h)},null,512),[[Xo,e.value]]),u[3]||(u[3]=y("label",{class:"label"},"Password",-1)),Qo(y("input",{type:"password",class:"input",placeholder:"Password","onUpdate:modelValue":u[1]||(u[1]=h=>t.value=h)},null,512),[[Xo,t.value]]),y("button",{onClick:a,class:"btn btn-neutral mt-4"},"Register")])]),r.value?(Q(),ne("div",iV,[y("div",oV,[y("div",aV,[y("span",null,$e(r.value),1)])])])):zt("",!0),i.value?(Q(),ne("div",lV,[y("div",cV,[y("div",uV,[y("span",null,$e(i.value),1)])])])):zt("",!0)],64))}}),dV={class:"fieldset"},fV={key:0},pV={class:"toast toast-top toast-center"},mV={class:"alert alert-error"},gV={key:1},_V={class:"toast toast-top toast-center"},yV={class:"alert alert-info"},vV=De({name:"SignInComponent",__name:"SignIn",setup(n){const e=we(""),t=we(""),s=qc(),r=we(""),i=we(""),o=Ki(),a=()=>{if(r.value="",i.value="",!e.value||!t.value){r.value="El email y la contraseña son obligatorios.";return}KC(s,e.value,t.value).then(c=>{const u=c.user;console.log(u),i.value="¡Inicio de sesión con éxito!",setTimeout(()=>{o.push("/feed")},2e3)}).catch(c=>{const u=c.code;r.value=c.message,console.log(u,r)})};return(c,u)=>(Q(),ne(tt,null,[y("div",null,[y("fieldset",dV,[u[2]||(u[2]=y("label",{class:"label"},"Email",-1)),Qo(y("input",{type:"email",class:"input",placeholder:"Email","onUpdate:modelValue":u[0]||(u[0]=h=>e.value=h)},null,512),[[Xo,e.value]]),u[3]||(u[3]=y("label",{class:"label"},"Password",-1)),Qo(y("input",{type:"password",class:"input",placeholder:"Password","onUpdate:modelValue":u[1]||(u[1]=h=>t.value=h)},null,512),[[Xo,t.value]]),y("button",{onClick:a,class:"btn btn-neutral mt-4"},"Login")])]),r.value?(Q(),ne("div",fV,[y("div",pV,[y("div",mV,[y("span",null,$e(r.value),1)])])])):zt("",!0),i.value?(Q(),ne("div",gV,[y("div",_V,[y("div",yV,[y("span",null,$e(i.value),1)])])])):zt("",!0)],64))}}),EV={class:"card"},wV={class:"card-body"},TV={key:0},IV=De({name:"SignInWithGoogle",__name:"SignInWithGoogle",setup(n){const e=we(""),t=qc(),s=we(""),r=we(""),i=Ki(),o=()=>{s.value="",r.value="";const a=new ds;p1(t,a).then(c=>{const u=c.user;console.log("Usuario de Google:",u),r.value="¡Inicio de sesión con éxito!",setTimeout(()=>{i.push("/feed")},1500)}).catch(c=>{const u=c.code;s.value=c.message,e.value=c.customData.email,console.log(u,s)})};return(a,c)=>(Q(),ne("div",EV,[y("div",wV,[c[1]||(c[1]=y("h2",{class:"card-title"},"Login With Google",-1)),c[2]||(c[2]=y("p",null,"If you don't have an account, you can login with Google",-1)),s.value?(Q(),ne("div",TV,$e(s.value),1)):zt("",!0),y("div",{class:"card-actions justify-center mt-5"},[y("button",{onClick:o,class:"btn bg-white text-black border-[#e5e5e5]"},[...c[0]||(c[0]=[$d('<svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg> Login with Google ',2)])])])])]))}}),bV={class:"hero bg-base min-h-screen"},AV={class:"hero-content flex-col lg:flex-row-reverse"},RV={class:"card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl"},SV={class:"card-body"},CV={class:"tabs tabs-lift"},PV={class:"tab-content bg-base-100 border-base-300 p-6"},kV={class:"tab-content bg-base-100 border-base-300 p-6"},NV={class:"tab-content bg-base-100 border-base-300 p-6"},OV=De({__name:"LoginView",setup(n){const e=ss(),t=Ki();return e.value&&t.push("/feed"),(s,r)=>(Q(),ne("main",null,[y("div",bV,[y("div",AV,[r[3]||(r[3]=y("div",{class:"text-center lg:text-left ms-6"},[y("h1",{class:"text-5xl font-bold"},"Login now!"),y("p",{class:"py-6"}," Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. ")],-1)),y("div",RV,[y("div",SV,[y("div",CV,[r[0]||(r[0]=y("input",{type:"radio",name:"my_tabs_3",class:"tab","aria-label":"Register",checked:""},null,-1)),y("div",PV,[ue(hV)]),r[1]||(r[1]=y("input",{type:"radio",name:"my_tabs_3",class:"tab","aria-label":"Login"},null,-1)),y("div",kV,[ue(vV)]),r[2]||(r[2]=y("input",{type:"radio",name:"my_tabs_3",class:"tab","aria-label":"Google"},null,-1)),y("div",NV,[ue(IV)])])])])])])]))}});typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const vy=()=>{};function xV(n,e){function t(...s){return new Promise((r,i)=>{Promise.resolve(n(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(r).catch(i)})}return t}function DV(n,e={}){let t,s,r=vy;const i=c=>{clearTimeout(c),r(),r=vy};let o;return c=>{const u=om(n),h=om(e.maxWait);return t&&i(t),u<=0||h!==void 0&&h<=0?(s&&(i(s),s=void 0),Promise.resolve(c())):new Promise((d,m)=>{r=e.rejectOnCancel?m:d,o=c,h&&!s&&(s=setTimeout(()=>{t&&i(t),s=void 0,d(o())},h)),t=setTimeout(()=>{s&&i(s),s=void 0,d(c())},u)})}}function MV(n,e=200,t={}){return xV(DV(e,t),n)}function XI(n,e){return function(){return n.apply(e,arguments)}}const{toString:LV}=Object.prototype,{getPrototypeOf:lp}=Object,{iterator:du,toStringTag:ZI}=Symbol,fu=(n=>e=>{const t=LV.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ln=n=>(n=n.toLowerCase(),e=>fu(e)===n),pu=n=>e=>typeof e===n,{isArray:Qi}=Array,pa=pu("undefined");function La(n){return n!==null&&!pa(n)&&n.constructor!==null&&!pa(n.constructor)&&Xt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const eb=Ln("ArrayBuffer");function VV(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&eb(n.buffer),e}const FV=pu("string"),Xt=pu("function"),tb=pu("number"),Va=n=>n!==null&&typeof n=="object",UV=n=>n===!0||n===!1,Dl=n=>{if(fu(n)!=="object")return!1;const e=lp(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(ZI in n)&&!(du in n)},$V=n=>{if(!Va(n)||La(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},BV=Ln("Date"),jV=Ln("File"),qV=Ln("Blob"),HV=Ln("FileList"),WV=n=>Va(n)&&Xt(n.pipe),zV=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Xt(n.append)&&((e=fu(n))==="formdata"||e==="object"&&Xt(n.toString)&&n.toString()==="[object FormData]"))},GV=Ln("URLSearchParams"),[KV,QV,YV,JV]=["ReadableStream","Request","Response","Headers"].map(Ln),XV=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fa(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let s,r;if(typeof n!="object"&&(n=[n]),Qi(n))for(s=0,r=n.length;s<r;s++)e.call(null,n[s],s,n);else{if(La(n))return;const i=t?Object.getOwnPropertyNames(n):Object.keys(n),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,n[a],a,n)}}function nb(n,e){if(La(n))return null;e=e.toLowerCase();const t=Object.keys(n);let s=t.length,r;for(;s-- >0;)if(r=t[s],e===r.toLowerCase())return r;return null}const Ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sb=n=>!pa(n)&&n!==Ir;function yd(){const{caseless:n}=sb(this)&&this||{},e={},t=(s,r)=>{const i=n&&nb(e,r)||r;Dl(e[i])&&Dl(s)?e[i]=yd(e[i],s):Dl(s)?e[i]=yd({},s):Qi(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Fa(arguments[s],t);return e}const ZV=(n,e,t,{allOwnKeys:s}={})=>(Fa(e,(r,i)=>{t&&Xt(r)?n[i]=XI(r,t):n[i]=r},{allOwnKeys:s}),n),e4=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),t4=(n,e,t,s)=>{n.prototype=Object.create(e.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},n4=(n,e,t,s)=>{let r,i,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),i=r.length;i-- >0;)o=r[i],(!s||s(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&lp(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},s4=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const s=n.indexOf(e,t);return s!==-1&&s===t},r4=n=>{if(!n)return null;if(Qi(n))return n;let e=n.length;if(!tb(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},i4=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&lp(Uint8Array)),o4=(n,e)=>{const s=(n&&n[du]).call(n);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(n,i[0],i[1])}},a4=(n,e)=>{let t;const s=[];for(;(t=n.exec(e))!==null;)s.push(t);return s},l4=Ln("HTMLFormElement"),c4=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,s,r){return s.toUpperCase()+r}),Ey=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),u4=Ln("RegExp"),rb=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),s={};Fa(t,(r,i)=>{let o;(o=e(r,i,n))!==!1&&(s[i]=o||r)}),Object.defineProperties(n,s)},h4=n=>{rb(n,(e,t)=>{if(Xt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const s=n[t];if(Xt(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},d4=(n,e)=>{const t={},s=r=>{r.forEach(i=>{t[i]=!0})};return Qi(n)?s(n):s(String(n).split(e)),t},f4=()=>{},p4=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function m4(n){return!!(n&&Xt(n.append)&&n[ZI]==="FormData"&&n[du])}const g4=n=>{const e=new Array(10),t=(s,r)=>{if(Va(s)){if(e.indexOf(s)>=0)return;if(La(s))return s;if(!("toJSON"in s)){e[r]=s;const i=Qi(s)?[]:{};return Fa(s,(o,a)=>{const c=t(o,r+1);!pa(c)&&(i[a]=c)}),e[r]=void 0,i}}return s};return t(n,0)},_4=Ln("AsyncFunction"),y4=n=>n&&(Va(n)||Xt(n))&&Xt(n.then)&&Xt(n.catch),ib=((n,e)=>n?setImmediate:e?((t,s)=>(Ir.addEventListener("message",({source:r,data:i})=>{r===Ir&&i===t&&s.length&&s.shift()()},!1),r=>{s.push(r),Ir.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Xt(Ir.postMessage)),v4=typeof queueMicrotask<"u"?queueMicrotask.bind(Ir):typeof process<"u"&&process.nextTick||ib,E4=n=>n!=null&&Xt(n[du]),x={isArray:Qi,isArrayBuffer:eb,isBuffer:La,isFormData:zV,isArrayBufferView:VV,isString:FV,isNumber:tb,isBoolean:UV,isObject:Va,isPlainObject:Dl,isEmptyObject:$V,isReadableStream:KV,isRequest:QV,isResponse:YV,isHeaders:JV,isUndefined:pa,isDate:BV,isFile:jV,isBlob:qV,isRegExp:u4,isFunction:Xt,isStream:WV,isURLSearchParams:GV,isTypedArray:i4,isFileList:HV,forEach:Fa,merge:yd,extend:ZV,trim:XV,stripBOM:e4,inherits:t4,toFlatObject:n4,kindOf:fu,kindOfTest:Ln,endsWith:s4,toArray:r4,forEachEntry:o4,matchAll:a4,isHTMLForm:l4,hasOwnProperty:Ey,hasOwnProp:Ey,reduceDescriptors:rb,freezeMethods:h4,toObjectSet:d4,toCamelCase:c4,noop:f4,toFiniteNumber:p4,findKey:nb,global:Ir,isContextDefined:sb,isSpecCompliantForm:m4,toJSONObject:g4,isAsyncFn:_4,isThenable:y4,setImmediate:ib,asap:v4,isIterable:E4};function Ee(n,e,t,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}x.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.status}}});const ob=Ee.prototype,ab={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ab[n]={value:n}});Object.defineProperties(Ee,ab);Object.defineProperty(ob,"isAxiosError",{value:!0});Ee.from=(n,e,t,s,r,i)=>{const o=Object.create(ob);return x.toFlatObject(n,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),Ee.call(o,n.message,e,t,s,r),o.cause=n,o.name=n.name,i&&Object.assign(o,i),o};const w4=null;function vd(n){return x.isPlainObject(n)||x.isArray(n)}function lb(n){return x.endsWith(n,"[]")?n.slice(0,-2):n}function wy(n,e,t){return n?n.concat(e).map(function(r,i){return r=lb(r),!t&&i?"["+r+"]":r}).join(t?".":""):e}function T4(n){return x.isArray(n)&&!n.some(vd)}const I4=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function mu(n,e,t){if(!x.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=x.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,R){return!x.isUndefined(R[C])});const s=t.metaTokens,r=t.visitor||h,i=t.dots,o=t.indexes,c=(t.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(r))throw new TypeError("visitor must be a function");function u(E){if(E===null)return"";if(x.isDate(E))return E.toISOString();if(x.isBoolean(E))return E.toString();if(!c&&x.isBlob(E))throw new Ee("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(E)||x.isTypedArray(E)?c&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function h(E,C,R){let L=E;if(E&&!R&&typeof E=="object"){if(x.endsWith(C,"{}"))C=s?C:C.slice(0,-2),E=JSON.stringify(E);else if(x.isArray(E)&&T4(E)||(x.isFileList(E)||x.endsWith(C,"[]"))&&(L=x.toArray(E)))return C=lb(C),L.forEach(function(U,H){!(x.isUndefined(U)||U===null)&&e.append(o===!0?wy([C],H,i):o===null?C:C+"[]",u(U))}),!1}return vd(E)?!0:(e.append(wy(R,C,i),u(E)),!1)}const d=[],m=Object.assign(I4,{defaultVisitor:h,convertValue:u,isVisitable:vd});function g(E,C){if(!x.isUndefined(E)){if(d.indexOf(E)!==-1)throw Error("Circular reference detected in "+C.join("."));d.push(E),x.forEach(E,function(L,M){(!(x.isUndefined(L)||L===null)&&r.call(e,L,x.isString(M)?M.trim():M,C,m))===!0&&g(L,C?C.concat(M):[M])}),d.pop()}}if(!x.isObject(n))throw new TypeError("data must be an object");return g(n),e}function Ty(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function cp(n,e){this._pairs=[],n&&mu(n,this,e)}const cb=cp.prototype;cb.append=function(e,t){this._pairs.push([e,t])};cb.toString=function(e){const t=e?function(s){return e.call(this,s,Ty)}:Ty;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function b4(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ub(n,e,t){if(!e)return n;const s=t&&t.encode||b4;x.isFunction(t)&&(t={serialize:t});const r=t&&t.serialize;let i;if(r?i=r(e,t):i=x.isURLSearchParams(e)?e.toString():new cp(e,t).toString(s),i){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+i}return n}class Iy{constructor(){this.handlers=[]}use(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(s){s!==null&&e(s)})}}const hb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},A4=typeof URLSearchParams<"u"?URLSearchParams:cp,R4=typeof FormData<"u"?FormData:null,S4=typeof Blob<"u"?Blob:null,C4={isBrowser:!0,classes:{URLSearchParams:A4,FormData:R4,Blob:S4},protocols:["http","https","file","blob","url","data"]},up=typeof window<"u"&&typeof document<"u",Ed=typeof navigator=="object"&&navigator||void 0,P4=up&&(!Ed||["ReactNative","NativeScript","NS"].indexOf(Ed.product)<0),k4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",N4=up&&window.location.href||"http://localhost",O4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:up,hasStandardBrowserEnv:P4,hasStandardBrowserWebWorkerEnv:k4,navigator:Ed,origin:N4},Symbol.toStringTag,{value:"Module"})),Mt={...O4,...C4};function x4(n,e){return mu(n,new Mt.classes.URLSearchParams,{visitor:function(t,s,r,i){return Mt.isNode&&x.isBuffer(t)?(this.append(s,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function D4(n){return x.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function M4(n){const e={},t=Object.keys(n);let s;const r=t.length;let i;for(s=0;s<r;s++)i=t[s],e[i]=n[i];return e}function db(n){function e(t,s,r,i){let o=t[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=t.length;return o=!o&&x.isArray(r)?r.length:o,c?(x.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!x.isObject(r[o]))&&(r[o]=[]),e(t,s,r[o],i)&&x.isArray(r[o])&&(r[o]=M4(r[o])),!a)}if(x.isFormData(n)&&x.isFunction(n.entries)){const t={};return x.forEachEntry(n,(s,r)=>{e(D4(s),r,t,0)}),t}return null}function L4(n,e,t){if(x.isString(n))try{return(e||JSON.parse)(n),x.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(n)}const Ua={transitional:hb,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const s=t.getContentType()||"",r=s.indexOf("application/json")>-1,i=x.isObject(e);if(i&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return r?JSON.stringify(db(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e)||x.isReadableStream(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return x4(e,this.formSerializer).toString();if((a=x.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return mu(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),L4(e)):e}],transformResponse:[function(e){const t=this.transitional||Ua.transitional,s=t&&t.forcedJSONParsing,r=this.responseType==="json";if(x.isResponse(e)||x.isReadableStream(e))return e;if(e&&x.isString(e)&&(s&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ee.from(a,Ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mt.classes.FormData,Blob:Mt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],n=>{Ua.headers[n]={}});const V4=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),F4=n=>{const e={};let t,s,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!t||e[t]&&V4[t])&&(t==="set-cookie"?e[t]?e[t].push(s):e[t]=[s]:e[t]=e[t]?e[t]+", "+s:s)}),e},by=Symbol("internals");function yo(n){return n&&String(n).trim().toLowerCase()}function Ml(n){return n===!1||n==null?n:x.isArray(n)?n.map(Ml):String(n)}function U4(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=t.exec(n);)e[s[1]]=s[2];return e}const $4=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function fh(n,e,t,s,r){if(x.isFunction(s))return s.call(this,e,t);if(r&&(e=t),!!x.isString(e)){if(x.isString(s))return e.indexOf(s)!==-1;if(x.isRegExp(s))return s.test(e)}}function B4(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,s)=>t.toUpperCase()+s)}function j4(n,e){const t=x.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+t,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}let Zt=class{constructor(e){e&&this.set(e)}set(e,t,s){const r=this;function i(a,c,u){const h=yo(c);if(!h)throw new Error("header name must be a non-empty string");const d=x.findKey(r,h);(!d||r[d]===void 0||u===!0||u===void 0&&r[d]!==!1)&&(r[d||c]=Ml(a))}const o=(a,c)=>x.forEach(a,(u,h)=>i(u,h,c));if(x.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(x.isString(e)&&(e=e.trim())&&!$4(e))o(F4(e),t);else if(x.isObject(e)&&x.isIterable(e)){let a={},c,u;for(const h of e){if(!x.isArray(h))throw TypeError("Object iterator must return a key-value pair");a[u=h[0]]=(c=a[u])?x.isArray(c)?[...c,h[1]]:[c,h[1]]:h[1]}o(a,t)}else e!=null&&i(t,e,s);return this}get(e,t){if(e=yo(e),e){const s=x.findKey(this,e);if(s){const r=this[s];if(!t)return r;if(t===!0)return U4(r);if(x.isFunction(t))return t.call(this,r,s);if(x.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=yo(e),e){const s=x.findKey(this,e);return!!(s&&this[s]!==void 0&&(!t||fh(this,this[s],s,t)))}return!1}delete(e,t){const s=this;let r=!1;function i(o){if(o=yo(o),o){const a=x.findKey(s,o);a&&(!t||fh(s,s[a],a,t))&&(delete s[a],r=!0)}}return x.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let s=t.length,r=!1;for(;s--;){const i=t[s];(!e||fh(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const t=this,s={};return x.forEach(this,(r,i)=>{const o=x.findKey(s,i);if(o){t[o]=Ml(r),delete t[i];return}const a=e?B4(i):String(i).trim();a!==i&&delete t[i],t[a]=Ml(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return x.forEach(this,(s,r)=>{s!=null&&s!==!1&&(t[r]=e&&x.isArray(s)?s.join(", "):s)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const s=new this(e);return t.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[by]=this[by]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=yo(o);s[a]||(j4(r,o),s[a]=!0)}return x.isArray(e)?e.forEach(i):i(e),this}};Zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(Zt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(s){this[t]=s}}});x.freezeMethods(Zt);function ph(n,e){const t=this||Ua,s=e||t,r=Zt.from(s.headers);let i=s.data;return x.forEach(n,function(a){i=a.call(t,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function fb(n){return!!(n&&n.__CANCEL__)}function Yi(n,e,t){Ee.call(this,n??"canceled",Ee.ERR_CANCELED,e,t),this.name="CanceledError"}x.inherits(Yi,Ee,{__CANCEL__:!0});function pb(n,e,t){const s=t.config.validateStatus;!t.status||!s||s(t.status)?n(t):e(new Ee("Request failed with status code "+t.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function q4(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function H4(n,e){n=n||10;const t=new Array(n),s=new Array(n);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),h=s[i];o||(o=u),t[r]=c,s[r]=u;let d=i,m=0;for(;d!==r;)m+=t[d++],d=d%n;if(r=(r+1)%n,r===i&&(i=(i+1)%n),u-o<e)return;const g=h&&u-h;return g?Math.round(m*1e3/g):void 0}}function W4(n,e){let t=0,s=1e3/e,r,i;const o=(u,h=Date.now())=>{t=h,r=null,i&&(clearTimeout(i),i=null),n(...u)};return[(...u)=>{const h=Date.now(),d=h-t;d>=s?o(u,h):(r=u,i||(i=setTimeout(()=>{i=null,o(r)},s-d)))},()=>r&&o(r)]}const Ic=(n,e,t=3)=>{let s=0;const r=H4(50,250);return W4(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-s,u=r(c),h=o<=a;s=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};n(d)},t)},Ay=(n,e)=>{const t=n!=null;return[s=>e[0]({lengthComputable:t,total:n,loaded:s}),e[1]]},Ry=n=>(...e)=>x.asap(()=>n(...e)),z4=Mt.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Mt.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Mt.origin),Mt.navigator&&/(msie|trident)/i.test(Mt.navigator.userAgent)):()=>!0,G4=Mt.hasStandardBrowserEnv?{write(n,e,t,s,r,i){const o=[n+"="+encodeURIComponent(e)];x.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),x.isString(s)&&o.push("path="+s),x.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function K4(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Q4(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function mb(n,e,t){let s=!K4(e);return n&&(s||t==!1)?Q4(n,e):e}const Sy=n=>n instanceof Zt?{...n}:n;function Vr(n,e){e=e||{};const t={};function s(u,h,d,m){return x.isPlainObject(u)&&x.isPlainObject(h)?x.merge.call({caseless:m},u,h):x.isPlainObject(h)?x.merge({},h):x.isArray(h)?h.slice():h}function r(u,h,d,m){if(x.isUndefined(h)){if(!x.isUndefined(u))return s(void 0,u,d,m)}else return s(u,h,d,m)}function i(u,h){if(!x.isUndefined(h))return s(void 0,h)}function o(u,h){if(x.isUndefined(h)){if(!x.isUndefined(u))return s(void 0,u)}else return s(void 0,h)}function a(u,h,d){if(d in e)return s(u,h);if(d in n)return s(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h,d)=>r(Sy(u),Sy(h),d,!0)};return x.forEach(Object.keys({...n,...e}),function(h){const d=c[h]||r,m=d(n[h],e[h],h);x.isUndefined(m)&&d!==a||(t[h]=m)}),t}const gb=n=>{const e=Vr({},n);let{data:t,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Zt.from(o),e.url=ub(mb(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(x.isFormData(t)){if(Mt.hasStandardBrowserEnv||Mt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...h]=c?c.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Mt.hasStandardBrowserEnv&&(s&&x.isFunction(s)&&(s=s(e)),s||s!==!1&&z4(e.url))){const u=r&&i&&G4.read(i);u&&o.set(r,u)}return e},Y4=typeof XMLHttpRequest<"u",J4=Y4&&function(n){return new Promise(function(t,s){const r=gb(n);let i=r.data;const o=Zt.from(r.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:u}=r,h,d,m,g,E;function C(){g&&g(),E&&E(),r.cancelToken&&r.cancelToken.unsubscribe(h),r.signal&&r.signal.removeEventListener("abort",h)}let R=new XMLHttpRequest;R.open(r.method.toUpperCase(),r.url,!0),R.timeout=r.timeout;function L(){if(!R)return;const U=Zt.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),ie={data:!a||a==="text"||a==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:U,config:n,request:R};pb(function(A){t(A),C()},function(A){s(A),C()},ie),R=null}"onloadend"in R?R.onloadend=L:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(L)},R.onabort=function(){R&&(s(new Ee("Request aborted",Ee.ECONNABORTED,n,R)),R=null)},R.onerror=function(){s(new Ee("Network Error",Ee.ERR_NETWORK,n,R)),R=null},R.ontimeout=function(){let H=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const ie=r.transitional||hb;r.timeoutErrorMessage&&(H=r.timeoutErrorMessage),s(new Ee(H,ie.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,n,R)),R=null},i===void 0&&o.setContentType(null),"setRequestHeader"in R&&x.forEach(o.toJSON(),function(H,ie){R.setRequestHeader(ie,H)}),x.isUndefined(r.withCredentials)||(R.withCredentials=!!r.withCredentials),a&&a!=="json"&&(R.responseType=r.responseType),u&&([m,E]=Ic(u,!0),R.addEventListener("progress",m)),c&&R.upload&&([d,g]=Ic(c),R.upload.addEventListener("progress",d),R.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(h=U=>{R&&(s(!U||U.type?new Yi(null,n,R):U),R.abort(),R=null)},r.cancelToken&&r.cancelToken.subscribe(h),r.signal&&(r.signal.aborted?h():r.signal.addEventListener("abort",h)));const M=q4(r.url);if(M&&Mt.protocols.indexOf(M)===-1){s(new Ee("Unsupported protocol "+M+":",Ee.ERR_BAD_REQUEST,n));return}R.send(i||null)})},X4=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let s=new AbortController,r;const i=function(u){if(!r){r=!0,a();const h=u instanceof Error?u:this.reason;s.abort(h instanceof Ee?h:new Yi(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,i(new Ee(`timeout ${e} of ms exceeded`,Ee.ETIMEDOUT))},e);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),n=null)};n.forEach(u=>u.addEventListener("abort",i));const{signal:c}=s;return c.unsubscribe=()=>x.asap(a),c}},Z4=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let s=0,r;for(;s<t;)r=s+e,yield n.slice(s,r),s=r},eF=async function*(n,e){for await(const t of tF(n))yield*Z4(t,e)},tF=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:s}=await e.read();if(t)break;yield s}}finally{await e.cancel()}},Cy=(n,e,t,s)=>{const r=eF(n,e);let i=0,o,a=c=>{o||(o=!0,s&&s(c))};return new ReadableStream({async pull(c){try{const{done:u,value:h}=await r.next();if(u){a(),c.close();return}let d=h.byteLength;if(t){let m=i+=d;t(m)}c.enqueue(new Uint8Array(h))}catch(u){throw a(u),u}},cancel(c){return a(c),r.return()}},{highWaterMark:2})},gu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_b=gu&&typeof ReadableStream=="function",nF=gu&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),yb=(n,...e)=>{try{return!!n(...e)}catch{return!1}},sF=_b&&yb(()=>{let n=!1;const e=new Request(Mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e}),Py=64*1024,wd=_b&&yb(()=>x.isReadableStream(new Response("").body)),bc={stream:wd&&(n=>n.body)};gu&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!bc[e]&&(bc[e]=x.isFunction(n[e])?t=>t[e]():(t,s)=>{throw new Ee(`Response type '${e}' is not supported`,Ee.ERR_NOT_SUPPORT,s)})})})(new Response);const rF=async n=>{if(n==null)return 0;if(x.isBlob(n))return n.size;if(x.isSpecCompliantForm(n))return(await new Request(Mt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(x.isArrayBufferView(n)||x.isArrayBuffer(n))return n.byteLength;if(x.isURLSearchParams(n)&&(n=n+""),x.isString(n))return(await nF(n)).byteLength},iF=async(n,e)=>{const t=x.toFiniteNumber(n.getContentLength());return t??rF(e)},oF=gu&&(async n=>{let{url:e,method:t,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:h,withCredentials:d="same-origin",fetchOptions:m}=gb(n);u=u?(u+"").toLowerCase():"text";let g=X4([r,i&&i.toAbortSignal()],o),E;const C=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let R;try{if(c&&sF&&t!=="get"&&t!=="head"&&(R=await iF(h,s))!==0){let ie=new Request(e,{method:"POST",body:s,duplex:"half"}),pe;if(x.isFormData(s)&&(pe=ie.headers.get("content-type"))&&h.setContentType(pe),ie.body){const[A,v]=Ay(R,Ic(Ry(c)));s=Cy(ie.body,Py,A,v)}}x.isString(d)||(d=d?"include":"omit");const L="credentials"in Request.prototype;E=new Request(e,{...m,signal:g,method:t.toUpperCase(),headers:h.normalize().toJSON(),body:s,duplex:"half",credentials:L?d:void 0});let M=await fetch(E,m);const U=wd&&(u==="stream"||u==="response");if(wd&&(a||U&&C)){const ie={};["status","statusText","headers"].forEach(I=>{ie[I]=M[I]});const pe=x.toFiniteNumber(M.headers.get("content-length")),[A,v]=a&&Ay(pe,Ic(Ry(a),!0))||[];M=new Response(Cy(M.body,Py,A,()=>{v&&v(),C&&C()}),ie)}u=u||"text";let H=await bc[x.findKey(bc,u)||"text"](M,n);return!U&&C&&C(),await new Promise((ie,pe)=>{pb(ie,pe,{data:H,headers:Zt.from(M.headers),status:M.status,statusText:M.statusText,config:n,request:E})})}catch(L){throw C&&C(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,n,E),{cause:L.cause||L}):Ee.from(L,L&&L.code,n,E)}}),Td={http:w4,xhr:J4,fetch:oF};x.forEach(Td,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const ky=n=>`- ${n}`,aF=n=>x.isFunction(n)||n===null||n===!1,vb={getAdapter:n=>{n=x.isArray(n)?n:[n];const{length:e}=n;let t,s;const r={};for(let i=0;i<e;i++){t=n[i];let o;if(s=t,!aF(t)&&(s=Td[(o=String(t)).toLowerCase()],s===void 0))throw new Ee(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ky).join(`
`):" "+ky(i[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Td};function mh(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Yi(null,n)}function Ny(n){return mh(n),n.headers=Zt.from(n.headers),n.data=ph.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),vb.getAdapter(n.adapter||Ua.adapter)(n).then(function(s){return mh(n),s.data=ph.call(n,n.transformResponse,s),s.headers=Zt.from(s.headers),s},function(s){return fb(s)||(mh(n),s&&s.response&&(s.response.data=ph.call(n,n.transformResponse,s.response),s.response.headers=Zt.from(s.response.headers))),Promise.reject(s)})}const Eb="1.11.0",_u={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{_u[n]=function(s){return typeof s===n||"a"+(e<1?"n ":" ")+n}});const Oy={};_u.transitional=function(e,t,s){function r(i,o){return"[Axios v"+Eb+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new Ee(r(o," has been removed"+(t?" in "+t:"")),Ee.ERR_DEPRECATED);return t&&!Oy[o]&&(Oy[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,a):!0}};_u.spelling=function(e){return(t,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function lF(n,e,t){if(typeof n!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=n[i],c=a===void 0||o(a,i,n);if(c!==!0)throw new Ee("option "+i+" must be "+c,Ee.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Ee("Unknown option "+i,Ee.ERR_BAD_OPTION)}}const Ll={assertOptions:lF,validators:_u},Un=Ll.validators;let Rr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Iy,response:new Iy}}async request(e,t){try{return await this._request(e,t)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Vr(this.defaults,t);const{transitional:s,paramsSerializer:r,headers:i}=t;s!==void 0&&Ll.assertOptions(s,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),r!=null&&(x.isFunction(r)?t.paramsSerializer={serialize:r}:Ll.assertOptions(r,{encode:Un.function,serialize:Un.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),Ll.assertOptions(t,{baseUrl:Un.spelling("baseURL"),withXsrfToken:Un.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&x.merge(i.common,i[t.method]);i&&x.forEach(["delete","get","head","post","put","patch","common"],E=>{delete i[E]}),t.headers=Zt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(t)===!1||(c=c&&C.synchronous,a.unshift(C.fulfilled,C.rejected))});const u=[];this.interceptors.response.forEach(function(C){u.push(C.fulfilled,C.rejected)});let h,d=0,m;if(!c){const E=[Ny.bind(this),void 0];for(E.unshift(...a),E.push(...u),m=E.length,h=Promise.resolve(t);d<m;)h=h.then(E[d++],E[d++]);return h}m=a.length;let g=t;for(d=0;d<m;){const E=a[d++],C=a[d++];try{g=E(g)}catch(R){C.call(this,R);break}}try{h=Ny.call(this,g)}catch(E){return Promise.reject(E)}for(d=0,m=u.length;d<m;)h=h.then(u[d++],u[d++]);return h}getUri(e){e=Vr(this.defaults,e);const t=mb(e.baseURL,e.url,e.allowAbsoluteUrls);return ub(t,e.params,e.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(e){Rr.prototype[e]=function(t,s){return this.request(Vr(s||{},{method:e,url:t,data:(s||{}).data}))}});x.forEach(["post","put","patch"],function(e){function t(s){return function(i,o,a){return this.request(Vr(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Rr.prototype[e]=t(),Rr.prototype[e+"Form"]=t(!0)});let cF=class wb{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new Yi(i,o,a),t(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=s=>{e.abort(s)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new wb(function(r){e=r}),cancel:e}}};function uF(n){return function(t){return n.apply(null,t)}}function hF(n){return x.isObject(n)&&n.isAxiosError===!0}const Id={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Id).forEach(([n,e])=>{Id[e]=n});function Tb(n){const e=new Rr(n),t=XI(Rr.prototype.request,e);return x.extend(t,Rr.prototype,e,{allOwnKeys:!0}),x.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Tb(Vr(n,r))},t}const ze=Tb(Ua);ze.Axios=Rr;ze.CanceledError=Yi;ze.CancelToken=cF;ze.isCancel=fb;ze.VERSION=Eb;ze.toFormData=mu;ze.AxiosError=Ee;ze.Cancel=ze.CanceledError;ze.all=function(e){return Promise.all(e)};ze.spread=uF;ze.isAxiosError=hF;ze.mergeConfig=Vr;ze.AxiosHeaders=Zt;ze.formToJSON=n=>db(x.isHTMLForm(n)?new FormData(n):n);ze.getAdapter=vb.getAdapter;ze.HttpStatusCode=Id;ze.default=ze;const{Axios:e3,AxiosError:t3,CanceledError:n3,isCancel:s3,CancelToken:r3,VERSION:i3,all:o3,Cancel:a3,isAxiosError:l3,spread:c3,toFormData:u3,AxiosHeaders:h3,HttpStatusCode:d3,formToJSON:f3,getAdapter:p3,mergeConfig:m3}=ze,dF={key:0,class:"toast toast-top toast-start"},fF={class:"alert alert-success"},pF={class:"card card-border bg-base-100 w-96 card-lg shadow-lg"},mF=["src","alt"],gF={class:"card-body"},_F={class:"flex items-center gap-4"},yF={class:"avatar"},vF={class:"ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2"},EF=["src"],wF={class:"card-actions justify-end items-center gap-4"},TF=["data-tip"],IF={class:"flex items-center gap-2"},bF={key:0,class:"tooltip ms-4 cursor-pointer","data-tip":"Favorite"},AF={key:1,class:"tooltip","data-tip":"add to favorites"},RF=De({name:"CardImage",__name:"Card",props:{image:{}},setup(n){const e=ss(),t=Wr(),s=we(""),r=we(!1),i=we("");async function o(u){if(!e.value)return;const h=Da(sr(t,"favorites"),Lr("user_id","==",e.value.uid),Lr("image_id","==",u.id)),d=await Ma(h);r.value=!d.empty}async function a(u){if(!e.value){s.value="Debes iniciar sesión para marcar una foto como favorita.";return}try{const h=Yf(t,"favorites",`${e.value.uid}_${u.id}`);await MI(h,{user_id:e.value.uid,image_id:u.id,image:u.urls.regular}),setTimeout(()=>{i.value="Fav added!"},2e3),r.value=!0}catch(h){console.error("Error al añadir:",h)}}const c=n;return Di(()=>{o(c.image)}),(u,h)=>{const d=ir("RouterLink");return Q(),ne(tt,null,[i.value?(Q(),ne("div",dF,[y("div",fF,[y("span",null,$e(i.value),1)])])):zt("",!0),y("div",pF,[ue(d,{to:`/photos/${u.image.id}`},{default:wt(()=>[y("figure",null,[y("img",{src:u.image.urls.regular,alt:u.image.title},null,8,mF)])]),_:1},8,["to"]),y("div",gF,[ue(d,{to:`/users/${u.image.user.username}`},{default:wt(()=>[y("div",_F,[y("div",yF,[y("div",vF,[y("img",{src:u.image.user.profile_image.small,width:"100",height:"100"},null,8,EF)])]),y("h2",null,$e(u.image.user.name),1)])]),_:1},8,["to"]),y("div",wF,[y("div",{class:"tooltip","data-tip":u.image.color},[y("div",{class:"badge badge-primary badge-md",style:ma({backgroundColor:u.image.color})},null,4)],8,TF),y("div",IF,[r.value?(Q(),ne("div",bF," ❤️ ")):(Q(),ne("div",AF,[y("button",{onClick:h[0]||(h[0]=m=>a(u.image)),class:"btn btn-ghost"},[...h[1]||(h[1]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"size-[2.2em]"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})],-1)])])]))])])])])],64)}}}),SF={class:"h-screen flex justify-center items-center"},hp=De({name:"LoaderComponent",__name:"Loader",setup(n){return(e,t)=>(Q(),ne("div",SF,[...t[0]||(t[0]=[y("div",null,[y("span",{class:"loading loading-spinner loading-lg"})],-1)])]))}}),CF={VITE_API_KEY:"_Lo9ruec1rqQ_-ERrp_NHgqbfBdANyAzPYaSLwGdXh0",VITE_BASE_URL:"https://api.unsplash.com/"},PF={key:0,class:"flex flex-col justify-center items-center gap-10"},kF={class:"mt-8"},NF={class:"input"},OF={class:"grid grid-cols-1 gap-8"},xF={class:"join p-8 my-6"},DF={class:"join-item btn"},MF={key:1},LF="search/photos",VF=De({name:"FeedComponent",__name:"Feed",setup(n){const{VITE_BASE_URL:e,VITE_API_KEY:t}=CF,s=`${e}${LF}?client_id=${t}&query=`,r=we("nature"),i=we([]),o=we(1),a=we(!1),c=()=>o.value++,u=()=>{o.value>1&&o.value--};async function h(){if(r.value){a.value=!0;try{const m=await ze.get(`${s}${r.value}&page=${o.value}&per_page=24`);i.value=m.data.results}finally{a.value=!1}}}const d=MV(h,1500);return Ar([r,o],([m],[g])=>{m!==g?(o.value=1,d()):h()},{immediate:!0}),(m,g)=>(Q(),ne("div",null,[a.value?(Q(),ne("div",MF,[ue(hp)])):(Q(),ne("div",PF,[y("div",kF,[y("label",NF,[g[1]||(g[1]=y("svg",{class:"h-[1em] opacity-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[y("g",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"2.5",fill:"none",stroke:"currentColor"},[y("circle",{cx:"11",cy:"11",r:"8"}),y("path",{d:"m21 21-4.3-4.3"})])],-1)),Qo(y("input",{type:"search",class:"input input-primary",placeholder:"Search","onUpdate:modelValue":g[0]||(g[0]=E=>r.value=E)},null,512),[[Xo,r.value]])])]),y("div",OF,[(Q(!0),ne(tt,null,fs(i.value,E=>(Q(),or(RF,{key:E.id,image:E},null,8,["image"]))),128))]),y("div",null,[y("div",xF,[y("button",{onClick:u,class:"join-item btn"},"«"),y("button",DF,"Page "+$e(o.value),1),y("button",{onClick:c,class:"join-item btn"},"»")])])]))]))}}),FF=De({__name:"FeedView",setup(n){return(e,t)=>(Q(),ne("div",null,[t[0]||(t[0]=y("div",{class:"hero-content text-center"},[y("div",{class:"max-w-md"},[y("h1",{class:"text-5xl font-bold"},"Feed")])],-1)),ue(VF)]))}});function UF(n,e){return Q(),ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{d:"M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),y("path",{"fill-rule":"evenodd",d:"M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z","clip-rule":"evenodd"})])}function $F(n,e){return Q(),ne("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[y("path",{d:"m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"})])}const BF={class:"card bg-base-100 image-full w-96 shadow-sm"},jF=["src"],qF={class:"card-body"},HF={class:"card-title"},WF={class:"card-actions justify-end"},zF={class:"btn btn-primary"},GF=["href"],KF=De({name:"CardCollection",__name:"CardColecction",props:{image:{}},setup(n){return(e,t)=>(Q(),ne("div",BF,[y("figure",null,[y("img",{src:e.image.cover_photo.urls.small,alt:"Shoes"},null,8,jF)]),y("div",qF,[y("h2",HF,$e(e.image.title),1),y("p",null,$e(e.image.cover_photo.description),1),y("div",WF,[y("button",zF,[y("a",{href:e.image.links.html},"Ver",8,GF)])])])]))}}),QF={key:0,class:"toast toast-top toast-center"},YF={class:"alert alert-success"},JF={class:"bg-base px-2"},XF={class:"pt-6"},ZF={class:"flex justify-between"},eU={class:"breadcrumbs text-sm"},tU={key:0,class:"hidden md:flex tooltip ms-4 cursor-pointer","data-tip":"Favorite"},nU={key:1,class:"hidden md:flex tooltip","data-tip":"add to favorites"},sU={class:"mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8"},rU=["src","alt"],iU={class:"mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"},oU={class:"lg:col-span-2 lg:border-r lg:border-base-200 lg:pr-8"},aU={class:"flex gap-4"},lU={class:"flex items-center gap-4"},cU={class:"avatar"},uU={class:"ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2"},hU=["src"],dU={class:"text-2xl font-bold tracking-tight sm:text-3xl"},fU={class:"mt-4 lg:row-span-3 lg:mt-0"},pU={class:"flex gap-4"},mU={class:"text-3xl tracking-tight"},gU={class:"mt-6"},_U={class:"flex items-center"},yU={class:"flex gap-4 items-center"},vU={class:"text-3xl tracking-tight"},EU={class:"mt-10"},wU={class:"flex items-center gap-4"},TU={class:"text-3xl tracking-tight"},IU={class:"mt-10"},bU={"aria-label":"Choose a size",class:"mt-4"},AU={class:"grid grid-cols-3 gap-4"},RU={class:"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16"},SU={class:"space-y-6"},CU={class:"text-base"},PU={class:"mt-10"},kU={class:"mt-4"},NU={role:"list",class:"list-disc space-y-2 pl-4 text-sm"},OU={class:"text-base"},xU={class:"mt-10"},DU={class:"mt-4 space-y-6"},MU={class:"text-sm"},LU={class:"pt-6"},VU={class:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6"},FU=De({name:"PhotoDetails",__name:"PhotoDetails",props:{image:{}},setup(n){const e=ss(),t=Wr(),s=we(""),r=we(""),i=we(!1);async function o(h){if(!e.value)return;const d=Da(sr(t,"favorites"),Lr("user_id","==",e.value.uid),Lr("image_id","==",h.id)),m=await Ma(d);i.value=!m.empty}async function a(h){if(!e.value){s.value="Debes iniciar sesión para marcar una foto como favorita.";return}try{await rp(sr(t,"follow"),{username:h.user.username,userImage:h.user.profile_image.small,user_id:e.value.uid}),r.value="Follow!"}catch(d){console.error("Error al añadir:",d)}}async function c(h){if(!e.value){s.value="Debes iniciar sesión para marcar una foto como favorita.";return}try{const d=Yf(t,"favorites",`${e.value.uid}_${h.id}`);await MI(d,{user_id:e.value.uid,image_id:h.id,image:h.urls.regular}),setTimeout(()=>{r.value="Fav added!"},2e3)}catch(d){console.error("Error al añadir:",d)}}const u=n;return Di(()=>{o(u.image)}),(h,d)=>{const m=ir("RouterLink");return Q(),ne(tt,null,[r.value?(Q(),ne("div",QF,[y("div",YF,[y("span",null,$e(r.value),1)])])):zt("",!0),y("div",JF,[y("div",XF,[y("div",ZF,[y("div",eU,[y("ul",null,[(Q(!0),ne(tt,null,fs(h.image.topics,g=>(Q(),ne("li",{key:g.id},[y("a",null,$e(g.title),1)]))),128))])]),i.value?(Q(),ne("div",tU," ❤️ ")):(Q(),ne("div",nU,[y("button",{onClick:d[0]||(d[0]=g=>c(h.image)),class:"btn btn-ghost ms-4 cursor-pointer"},[...d[3]||(d[3]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"size-[2.2em] cursor-pointer"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})],-1)])])]))]),y("div",sU,[y("img",{src:h.image.urls.full,alt:h.image.description,class:"size-full rounded-lg object-cover"},null,8,rU)]),y("div",iU,[y("div",oU,[y("div",aU,[ue(m,{to:`/users/${h.image.user.username}`},{default:wt(()=>[y("div",lU,[y("div",cU,[y("div",uU,[y("img",{src:h.image.user.profile_image.small,width:"100",height:"100"},null,8,hU)])]),y("h1",dU,$e(h.image.user.name),1)])]),_:1},8,["to"]),y("div",null,[y("button",{onClick:d[1]||(d[1]=g=>a(h.image)),class:"btn"},[...d[4]||(d[4]=[Jt(" Follow ",-1),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"size-[1.2em]"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})],-1)])])])])]),y("div",fU,[d[8]||(d[8]=y("h2",{class:"sr-only"},"Product information",-1)),y("div",pU,[ue(Lt($F),{class:"size-6 text-primary"}),y("p",mU,$e(h.image.likes),1)]),y("div",gU,[d[5]||(d[5]=y("h3",{class:"sr-only"},"Views",-1)),y("div",_U,[y("div",yU,[ue(Lt(UF),{class:"size-6 text-primary"}),y("a",vU,$e(h.image.views),1)])])]),y("div",EU,[y("div",null,[d[6]||(d[6]=y("h3",{class:"text-sm font-medium mb-4"},"Color",-1)),y("div",wU,[y("div",{class:"badge badge-xl",style:ma({backgroundColor:h.image.color})},null,4),y("p",TU,$e(h.image.color),1)])]),y("div",IU,[d[7]||(d[7]=y("div",{class:"flex items-center justify-between"},[y("h3",{class:"text-sm font-medium"},"Tags")],-1)),y("fieldset",bU,[y("div",AU,[(Q(!0),ne(tt,null,fs(h.image.tags,g=>(Q(),ne("div",{key:g.title,class:"badge badge-primary badge-lg p-4 text-xs"},$e(g.title),1))),128))])])]),y("button",{onClick:d[2]||(d[2]=g=>c(h.image)),class:"btn btn-primary mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden"}," Add to favorites ")])]),y("div",RU,[y("div",null,[d[9]||(d[9]=y("h3",{class:"sr-only"},"Description",-1)),y("div",SU,[y("p",CU,$e(h.image.description),1)])]),y("div",PU,[d[10]||(d[10]=y("h3",{class:"text-sm font-medium"},"Slugs",-1)),y("div",kU,[y("ul",NU,[(Q(!0),ne(tt,null,fs(h.image.alternative_slugs,g=>(Q(),ne("li",{key:g,class:"text-base"},[y("span",OU,$e(g),1)]))),128))])])]),y("div",xU,[d[11]||(d[11]=y("h2",{class:"text-sm font-medium"},"Details",-1)),y("div",DU,[y("p",MU,$e(h.image.alt_description),1)])])])])]),d[13]||(d[13]=y("div",{class:"divider"},null,-1)),y("div",LU,[d[12]||(d[12]=y("div",{class:"max-w-md"},[y("h1",{class:"text-5xl font-bold"},"Related Collections"),y("p",{class:"py-6"},"Provident cupiditate voluptatem et in.")],-1)),y("div",VU,[(Q(!0),ne(tt,null,fs(h.image.related_collections.results,g=>(Q(),or(KF,{key:g.id,image:g},null,8,["image"]))),128))])])])],64)}}}),UU={VITE_API_KEY:"_Lo9ruec1rqQ_-ERrp_NHgqbfBdANyAzPYaSLwGdXh0",VITE_BASE_URL:"https://api.unsplash.com/"},$U={key:0},BU={key:1},jU="photos/",qU=De({name:"PhotoView",__name:"PhotoView",setup(n){const e=JI(),t=we(null),s=we(!1),r=we(""),{VITE_BASE_URL:i,VITE_API_KEY:o}=UU,a=`${i}${jU}`,c=async()=>{const u=e.params.id;if(u){s.value=!0,r.value="";try{const h=await ze.get(`${a}${u}?client_id=${o}`);t.value=h.data}catch(h){console.error("Error fetching photo:",h),ze.isAxiosError(h)?r.value=`Error: ${h.response?.status} - ${h.response?.statusText}`:r.value="Ocurrió un error inesperado al cargar la imagen."}finally{s.value=!1}}};return Ar(()=>e.params.id,()=>{c()}),Di(()=>{c()}),(u,h)=>s.value?zt("",!0):(Q(),ne("div",$U,[t.value?(Q(),or(FU,{key:0,image:t.value},null,8,["image"])):(Q(),ne("div",BU,[ue(hp)]))]))}}),HU=ap(qU,[["__scopeId","data-v-8942bad3"]]),WU={class:"bg-base-100 py-24 sm:py-32"},zU={class:"mx-auto max-w-7xl px-6 lg:px-8"},GU={class:"mx-auto max-w-2xl lg:mx-0"},KU={class:"flex items-center gap-4 mb-4"},QU={class:"avatar"},YU={class:"ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2"},JU=["src"],XU={class:"text-4xl font-semibold tracking-tight text-pretty sm:text-5xl"},ZU={class:"mt-2 text-lg/8"},e6={class:"mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"},t6=["src"],n6=De({name:"UserDetails",__name:"UserDetails",props:{user:{}},setup(n){const e=ss(),t=Wr(),s=we(""),r=we("");async function i(o){if(!e.value){s.value="Debes iniciar sesión para marcar una foto como favorita.";return}try{await rp(sr(t,"follow"),{username:o.username,userImage:o.profile_image.small,user_id:e.value.uid}),r.value="Follow!"}catch(a){console.error("Error al añadir:",a)}}return(o,a)=>{const c=ir("RouterLink");return Q(),ne("div",WU,[y("div",zU,[y("div",GU,[y("div",KU,[y("div",QU,[y("div",YU,[y("img",{src:o.user.profile_image.medium},null,8,JU)])]),y("h2",XU,$e(o.user.name),1),y("button",{onClick:a[0]||(a[0]=u=>i(o.user)),class:"btn me-4"},[...a[1]||(a[1]=[Jt(" Follow ",-1),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"size-[1.2em]"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})],-1)])])]),y("p",ZU,$e(o.user.bio),1)]),y("div",e6,[(Q(!0),ne(tt,null,fs(o.user.photos,u=>(Q(),ne("div",{key:u.id},[ue(c,{to:`/photos/${u.id}`},{default:wt(()=>[y("img",{src:u.urls.regular,class:"w-full"},null,8,t6)]),_:2},1032,["to"])]))),128))])])])}}}),s6={VITE_API_KEY:"_Lo9ruec1rqQ_-ERrp_NHgqbfBdANyAzPYaSLwGdXh0",VITE_BASE_URL:"https://api.unsplash.com/"},r6={key:0},i6={key:1},o6="users/",a6=De({name:"UserView",__name:"UserView",setup(n){const e=JI(),t=we(null),s=we(!1),r=we(""),{VITE_BASE_URL:i,VITE_API_KEY:o}=s6,a=`${i}${o6}`,c=async()=>{const u=e.params.username;if(u){s.value=!0,r.value="";try{const h=await ze.get(`${a}${u}?client_id=${o}`);t.value=h.data}catch(h){console.error("Error fetching user:",h),ze.isAxiosError(h)?r.value=`Error: ${h.response?.status} - ${h.response?.statusText}`:r.value="Ocurrió un error inesperado al cargar la imagen."}finally{s.value=!1}}};return Ar(()=>e.params.username,()=>{c()}),Di(()=>{c()}),(u,h)=>s.value?zt("",!0):(Q(),ne("div",r6,[t.value?(Q(),or(n6,{key:0,user:t.value},null,8,["user"])):(Q(),ne("div",i6,[ue(hp)]))]))}}),l6=ap(a6,[["__scopeId","data-v-21fb6a8b"]]),c6={class:"card w-96"},u6={class:"card-body"},h6=["src","alt"],d6=De({name:"ImageComponent",__name:"ImageCard",props:{image:{}},setup(n){return(e,t)=>{const s=ir("RouterLink");return Q(),ne("div",c6,[y("div",u6,[ue(s,{to:`/photos/${e.image.image_id}`},{default:wt(()=>[y("img",{src:e.image.image,alt:e.image.id,class:"w-full object-cover rounded-xl"},null,8,h6)]),_:1},8,["to"])])])}}}),f6={class:"grid grid-cols-1 gap-4"},Ib=De({name:"FavoritesComponent",__name:"Favorites",setup(n){const e=ss(),t=Wr(),s=we([]),r=we("");console.log(e);async function i(){if(!e.value){r.value="Debes iniciar sesión para ver o guardar tus favoritos.";return}try{const o=sr(t,"favorites"),a=Da(o,Lr("user_id","==",e.value.uid)),c=await Ma(a);s.value=c.docs.map(u=>({id:u.id,...u.data()})),console.log("Get collection!",s.value)}catch(o){console.error("Error al obtener:",o)}}return i(),(o,a)=>(Q(),ne("div",f6,[(Q(!0),ne(tt,null,fs(s.value,c=>(Q(),or(d6,{key:c.id,image:c},null,8,["image"]))),128))]))}}),p6={key:0,class:"flex justify-center items-center gap-4 mb-4"},m6={key:0},g6={class:"avatar"},_6={class:"ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2"},y6=["src"],v6=De({name:"ProfileComponent",__name:"Profile",setup(n){const e=ss();return console.log(e),(t,s)=>Lt(e)?(Q(),ne("div",p6,[Lt(e).photoURL?(Q(),ne("div",m6,[y("div",g6,[y("div",_6,[y("img",{src:Lt(e).photoURL},null,8,y6)])])])):zt("",!0),s[0]||(s[0]=y("div",null,[y("div",{class:"avatar"},[y("div",{class:"ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2"},[y("img",{src:"https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"})])])],-1)),y("div",null,[y("h2",null,$e(Lt(e).email),1)])])):zt("",!0)}}),E6={class:"card bg-base-100 w-96 shadow-sm"},w6={class:"px-10 pt-10"},T6=["src","alt"],I6={class:"card-body items-center text-center"},b6={class:"card-title"},A6=De({name:"ImageComponent",__name:"ImageCard",props:{image:{}},setup(n){return(e,t)=>(Q(),ne("div",E6,[y("figure",w6,[y("img",{src:e.image.image,alt:e.image.name,class:"rounded-xl"},null,8,T6)]),y("div",I6,[y("h2",b6,$e(e.image.name),1),y("p",null,$e(e.image.createdAt),1)])]))}}),R6={class:"grid grid-cols-1 gap-4"},bb=De({name:"StorageComponent",__name:"Storage",setup(n){const e=ss(),t=Wr(),s=we([]),r=we("");async function i(){if(!e.value){r.value="Debes iniciar sesión para ver o subir tus fotos.";return}try{const o=sr(t,"storage"),a=Da(o,Lr("user_id","==",e.value.uid)),c=await Ma(a);s.value=c.docs.map(u=>({id:u.id,...u.data()})),console.log("Get collection!",s.value)}catch(o){console.error("Error al obtener:",o)}}return i(),(o,a)=>(Q(),ne("div",R6,[(Q(!0),ne(tt,null,fs(s.value,c=>(Q(),or(A6,{key:c.id,image:c},null,8,["image"]))),128))]))}}),S6={id:"my_modal_1",class:"modal"},C6={class:"modal-box"},P6={class:"list bg-base-100 rounded-box shadow-md"},k6=["src"],N6={class:"text-xs uppercase font-semibold opacity-60"},O6=De({name:"FollowsComponent",__name:"Follows",setup(n){const e=ss(),t=Wr(),s=we([]),r=we("");async function i(){if(!e.value){r.value="Debes iniciar sesión para ver o guardar tus favoritos.";return}try{const o=sr(t,"follow"),a=Da(o,Lr("user_id","==",e.value.uid)),c=await Ma(a);s.value=c.docs.map(u=>({id:u.id,...u.data()})),console.log("Get collection!",s.value)}catch(o){console.error("Error al obtener:",o)}}return i(),(o,a)=>(Q(),ne(tt,null,[a[2]||(a[2]=y("button",{class:"btn btn-primary w-60 mx-auto",onclick:"my_modal_1.showModal()"},"Follows",-1)),y("dialog",S6,[y("div",C6,[y("ul",P6,[a[0]||(a[0]=y("li",{class:"p-4 pb-2 text-xs opacity-60 tracking-wide"},"My follows",-1)),(Q(!0),ne(tt,null,fs(s.value,c=>(Q(),ne("li",{key:c.id,class:"list-row"},[y("div",null,[y("img",{class:"size-10 rounded-box",src:c.userImage},null,8,k6)]),y("div",null,[y("div",null,$e(c.username),1),y("div",N6,$e(c.user_id),1)])]))),128))]),a[1]||(a[1]=y("div",{class:"modal-action"},[y("form",{method:"dialog"},[y("button",{class:"btn"},"Close")])],-1))])])],64))}}),x6={class:"flex flex-col mt-10"},D6={class:"flex flex-col gap-4"},M6={class:"tabs tabs-border flex justify-center items-center mx-auto"},L6={class:"tab-content"},V6={class:"flex justify-center items-center"},F6={class:"tab-content"},U6={class:"flex justify-center items-center"},$6=De({__name:"ProfileView",setup(n){return(e,t)=>(Q(),ne("div",x6,[y("div",D6,[ue(v6),ue(O6)]),t[2]||(t[2]=y("div",{class:"divider"},null,-1)),y("div",M6,[t[0]||(t[0]=y("input",{type:"radio",name:"my_tabs_1",class:"tab","aria-label":"Favorites",checked:""},null,-1)),y("div",L6,[y("div",V6,[ue(Ib)])]),t[1]||(t[1]=y("input",{type:"radio",name:"my_tabs_1",class:"tab","aria-label":"My Posts"},null,-1)),y("div",F6,[y("div",U6,[ue(bb)])])])]))}}),B6={class:"p-4"},j6=De({name:"UploadComponent",__name:"Upload",setup(n){const e=ss(),t=Wr(),s=we(""),r=Ki(),i="https://api.cloudinary.com/v1_1/dmwlb93o3/upload",o="app_images";function a(u){const h=u.target.files?.[0];h&&(console.log(h),c(h))}async function c(u){if(!e.value){s.value="Debes iniciar sesión para subir una foto.";return}const h=new FormData;h.append("file",u),h.append("upload_preset",o);try{const m=(await ze.post(i,h,{headers:{"Content-Type":"multipart/form-data"}})).data.secure_url;await rp(sr(t,"storage"),{user_id:e.value.uid,image:m,name:u.name,createdAt:new Date}),console.log("Foto subida!"),setTimeout(()=>{r.push("/profile")},1500)}catch(d){console.error("Error al añadir:",d)}}return(u,h)=>(Q(),ne("div",null,[h[0]||(h[0]=y("p",{class:"my-4"},"Upload your pic and see in your posts tabs",-1)),y("div",B6,[y("input",{type:"file",class:"file-input",onChange:a},null,32)])]))}}),q6={class:"flex flex-col gap-6"},H6=De({__name:"UploadView",setup(n){return(e,t)=>(Q(),ne("div",q6,[t[0]||(t[0]=y("div",{class:"hero-content text-center"},[y("div",{class:"max-w-md"},[y("h1",{class:"text-5xl font-bold"},"Upload")])],-1)),ue(j6)]))}}),W6={class:"flex flex-col gap-6"},z6=De({__name:"FavoritesView",setup(n){return(e,t)=>(Q(),ne("div",W6,[t[0]||(t[0]=y("div",{class:"hero-content text-center"},[y("div",{class:"max-w-md"},[y("h1",{class:"text-5xl font-bold"},"Favorites")])],-1)),ue(Ib)]))}}),G6={class:"flex flex-col gap-6"},K6=De({__name:"MyPhotosView",setup(n){return(e,t)=>(Q(),ne("div",G6,[t[0]||(t[0]=y("div",{class:"hero-content text-center"},[y("div",{class:"max-w-md"},[y("h1",{class:"text-5xl font-bold"},"My posts")])],-1)),ue(bb)]))}}),Q6=pL({history:q2("/"),routes:[{path:"/",name:"home",component:sV},{path:"/login",name:"login",component:OV},{path:"/feed",name:"feed",component:FF},{path:"/photos/:id",name:"photos",component:HU},{path:"/users/:username",name:"users",component:l6},{path:"/profile",name:"profile",component:$6},{path:"/profile/favorites",name:"favorites",component:z6},{path:"/profile/myphotos",name:"myphotos",component:K6},{path:"/profile/upload",name:"upload",component:H6}]}),yu=oR(GL);yu.use(uR());yu.use(Q6);yu.use(h2,{firebaseApp:d2,modules:[a2()]});yu.mount("#app");
