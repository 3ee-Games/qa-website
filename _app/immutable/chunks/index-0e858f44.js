function N(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function q(){return Object.create(null)}function y(t){t.forEach(L)}function I(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function at(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(G(n,e))}function _t(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(n.dirty.length,r.length);for(let u=0;u<l;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,s){if(r){const l=P(n,e,i,s);t.p(l,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t){return t==null?"":t}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=o?r+1:Q(1,r,g=>n[e[g]].claim_order,o))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const s=[],l=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);u>=c;u--)l.push(n[u]);u--}for(;u>=0;u--)l.push(n[u]);s.reverse(),l.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<l.length;c++){for(;o<s.length&&l[c].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(l[c],f)}}function U(t,n){if(E){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){E&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function xt(){return S(" ")}function $t(){return S("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:Z(t,n,e)}function kt(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,r=!1){nt(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(n(u)){const c=e(u);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(n(u)){const c=e(u);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function B(t,n,e,i){return T(t,r=>r.nodeName===n,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const u=r.attributes[l];e[u.name]||s.push(u.name)}s.forEach(l=>r.removeAttribute(l))},()=>i(n))}function At(t,n,e){return B(t,n,e,X)}function Nt(t,n,e){return B(t,n,e,Y)}function et(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function St(t){return et(t," ")}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ct(t,n){t.value=n==null?"":n}function qt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}function it(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Dt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function m(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function Lt(t){d().$$.on_mount.push(t)}function Pt(t){d().$$.after_update.push(t)}function Tt(t){d().$$.on_destroy.push(t)}function Bt(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=it(n,e,{cancelable:i});return r.slice().forEach(l=>{l.call(t,s)}),!s.defaultPrevented}return!0}}function Ot(t,n){return d().$$.context.set(t,n),n}function zt(t){return d().$$.context.get(t)}function Ft(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],M=[],$=[],D=[],O=Promise.resolve();let k=!1;function z(){k||(k=!0,O.then(F))}function Ht(){return z(),O}function A(t){$.push(t)}const v=new Set;let x=0;function F(){const t=p;do{for(;x<h.length;){const n=h[x];x++,m(n),rt(n.$$)}for(m(null),h.length=0,x=0;M.length;)M.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];v.has(e)||(v.add(e),e())}$.length=0}while(h.length);for(;D.length;)D.pop()();k=!1,v.clear(),m(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let _;function It(){_={r:0,c:[],p:_}}function Wt(){_.r||y(_.c),_=_.p}function ct(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Gt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Jt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const l=t[s],u=n[s];if(u){for(const c in l)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[s]=u}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Kt(t){return typeof t=="object"&&t!==null?t:{}}function Qt(t){t&&t.c()}function Rt(t,n){t&&t.l(n)}function lt(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:l,after_update:u}=t.$$;r&&r.m(n,e),i||A(()=>{const c=s.map(L).filter(I);l?l.push(...c):y(c),t.$$.on_mount=[]}),u.forEach(A)}function ut(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ut(t,n,e,i,r,s,l,u=[-1]){const c=p;m(t);const o=t.$$={fragment:null,ctx:null,props:s,update:N,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};l&&l(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(a,g,...j)=>{const C=j.length?j[0]:g;return o.ctx&&r(o.ctx[a],o.ctx[a]=C)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](C),f&&ot(t,a)),g}):[],o.update(),f=!0,y(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){J();const a=tt(n.target);o.fragment&&o.fragment.l(a),a.forEach(V)}else o.fragment&&o.fragment.c();n.intro&&ct(t.$$.fragment),lt(t,n.target,n.anchor,n.customElement),K(),F()}m(c)}class Vt{$destroy(){ut(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Bt as $,Kt as A,ut as B,H as C,Ht as D,N as E,G as F,y as G,I as H,ft as I,vt as J,U as K,wt as L,yt as M,Mt as N,bt as O,Y as P,Nt as Q,at as R,Vt as S,_t as T,ht as U,mt as V,dt as W,zt as X,Dt as Y,pt as Z,Tt as _,tt as a,Ct as a0,Et as a1,Ft as a2,kt as a3,Z as b,At as c,V as d,X as e,qt as f,gt as g,et as h,Ut as i,jt as j,xt as k,$t as l,St as m,It as n,Gt as o,Wt as p,ct as q,Ot as r,st as s,S as t,Pt as u,Lt as v,Qt as w,Rt as x,lt as y,Jt as z};
