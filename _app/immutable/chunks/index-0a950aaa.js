function N(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function q(){return Object.create(null)}function y(t){t.forEach(L)}function I(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function at(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(G(n,e))}function _t(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(n.dirty.length,r.length);for(let o=0;o<u;o+=1)s[o]=n.dirty[o]|r[o];return s}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,s){if(r){const u=P(n,e,i,s);t.p(u,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t){return t==null?"":t}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:Q(1,r,g=>n[e[g]].claim_order,l))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const s=[],u=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);o>=c;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);s.reverse(),u.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<u.length;c++){for(;l<s.length&&u[c].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(u[c],f)}}function U(t,n){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){v&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function bt(){return S(" ")}function $t(){return S("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Et(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:Z(t,n,e)}function kt(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){nt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function B(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const s=[];for(let u=0;u<r.attributes.length;u++){const o=r.attributes[u];e[o.name]||s.push(o.name)}s.forEach(u=>r.removeAttribute(u))},()=>i(n))}function At(t,n,e){return B(t,n,e,X)}function Nt(t,n,e){return B(t,n,e,Y)}function et(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function St(t){return et(t," ")}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ct(t,n){t.value=n==null?"":n}function qt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}function it(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Dt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function m(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Lt(t){d().$$.on_mount.push(t)}function Pt(t){d().$$.after_update.push(t)}function Tt(t){d().$$.on_destroy.push(t)}function Bt(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=it(n,e,{cancelable:i});return r.slice().forEach(u=>{u.call(t,s)}),!s.defaultPrevented}return!0}}function Ot(t,n){return d().$$.context.set(t,n),n}function zt(t){return d().$$.context.get(t)}const h=[],M=[],$=[],D=[],O=Promise.resolve();let k=!1;function z(){k||(k=!0,O.then(F))}function Ft(){return z(),O}function A(t){$.push(t)}const E=new Set;let b=0;function F(){const t=p;do{for(;b<h.length;){const n=h[b];b++,m(n),rt(n.$$)}for(m(null),h.length=0,b=0;M.length;)M.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];E.has(e)||(E.add(e),e())}$.length=0}while(h.length);for(;D.length;)D.pop()();k=!1,E.clear(),m(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let _;function Ht(){_={r:0,c:[],p:_}}function It(){_.r||y(_.c),_=_.p}function ct(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Wt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Gt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=n[s];if(o){for(const c in u)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[s]=o}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Jt(t){return typeof t=="object"&&t!==null?t:{}}function Kt(t){t&&t.c()}function Qt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:u,after_update:o}=t.$$;r&&r.m(n,e),i||A(()=>{const c=s.map(L).filter(I);u?u.push(...c):y(c),t.$$.on_mount=[]}),o.forEach(A)}function ot(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Rt(t,n,e,i,r,s,u,o=[-1]){const c=p;m(t);const l=t.$$={fragment:null,ctx:null,props:s,update:N,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};u&&u(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,g,...j)=>{const C=j.length?j[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=C)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](C),f&&lt(t,a)),g}):[],l.update(),f=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const a=tt(n.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),K(),F()}m(c)}class Ut{$destroy(){ot(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{at as $,Jt as A,ot as B,H as C,Ft as D,N as E,G as F,y as G,I as H,ft as I,Et as J,U as K,wt as L,Mt as M,xt as N,Y as O,Nt as P,_t as Q,ht as R,Ut as S,mt as T,dt as U,zt as V,Dt as W,pt as X,Tt as Y,Bt as Z,Ct as _,tt as a,vt as a0,kt as a1,yt as a2,Z as b,At as c,V as d,X as e,qt as f,gt as g,et as h,Rt as i,jt as j,bt as k,$t as l,St as m,Ht as n,Wt as o,It as p,ct as q,Ot as r,st as s,S as t,Pt as u,Lt as v,Kt as w,Qt as x,ut as y,Gt as z};
