import{S as Z,i as x,s as tt,e as g,t as C,k as j,c as v,a as m,h as L,d as n,m as D,b as p,g as O,K as a,L as et,H as st,j as I,E as N,N as at,_ as lt,v as ot,w as rt,X as nt,x as ct,y as ht,q as it,o as ut,B as ft}from"../../../chunks/index-1918a0f6.js";import{g as dt}from"../../../chunks/navigation-0e6511d1.js";import{a as Q}from"../../../chunks/accountStore-dfa5264b.js";import{s as _t}from"../../../chunks/messagingStore-5d86f8b3.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/index-fc6d8b78.js";function U(r,t,c){const l=r.slice();return l[5]=t[c],l}function V(r){var k,q;let t,c,l=W((q=(k=r[5])==null?void 0:k.status)==null?void 0:q.status_type)+"",o,d,e,_=r[5].subject+"",f,$,M,E=r[5].body+"",T,w,A,H;return{c(){t=g("tr"),c=g("td"),o=C(l),d=j(),e=g("td"),f=C(_),$=j(),M=g("td"),T=C(E),w=j(),this.h()},l(y){t=v(y,"TR",{class:!0});var i=m(t);c=v(i,"TD",{class:!0});var b=m(c);o=L(b,l),b.forEach(n),d=D(i),e=v(i,"TD",{class:!0});var h=m(e);f=L(h,_),h.forEach(n),$=D(i),M=v(i,"TD",{class:!0});var s=m(M);T=L(s,E),s.forEach(n),w=D(i),i.forEach(n),this.h()},h(){p(c,"class","svelte-1shtgav"),p(e,"class","svelte-1shtgav"),p(M,"class","svelte-1shtgav"),p(t,"class","svelte-1shtgav")},m(y,i){O(y,t,i),a(t,c),a(c,o),a(t,d),a(t,e),a(e,f),a(t,$),a(t,M),a(M,T),a(t,w),A||(H=et(t,"click",function(){st(r[1](r[5]))&&r[1](r[5]).apply(this,arguments)}),A=!0)},p(y,i){var b,h;r=y,i&1&&l!==(l=W((h=(b=r[5])==null?void 0:b.status)==null?void 0:h.status_type)+"")&&I(o,l),i&1&&_!==(_=r[5].subject+"")&&I(f,_),i&1&&E!==(E=r[5].body+"")&&I(T,E)},d(y){y&&n(t),A=!1,H()}}}function gt(r){let t,c,l,o,d,e,_,f,$,M,E,T,w,A,H,k,q,y,i,b=r[0],h=[];for(let s=0;s<b.length;s+=1)h[s]=V(U(r,b,s));return{c(){t=g("h1"),c=C("Messages"),l=j(),o=g("table"),d=g("thead"),e=g("tr"),_=g("th"),f=g("h4"),$=C("status"),M=j(),E=g("th"),T=g("h4"),w=C("subject"),A=j(),H=g("th"),k=g("h4"),q=C("message"),y=j(),i=g("tbody");for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){t=v(s,"H1",{});var S=m(t);c=L(S,"Messages"),S.forEach(n),l=D(s),o=v(s,"TABLE",{class:!0});var u=m(o);d=v(u,"THEAD",{class:!0});var R=m(d);e=v(R,"TR",{class:!0});var B=m(e);_=v(B,"TH",{class:!0});var G=m(_);f=v(G,"H4",{class:!0});var K=m(f);$=L(K,"status"),K.forEach(n),G.forEach(n),M=D(B),E=v(B,"TH",{class:!0});var P=m(E);T=v(P,"H4",{class:!0});var X=m(T);w=L(X,"subject"),X.forEach(n),P.forEach(n),A=D(B),H=v(B,"TH",{class:!0});var Y=m(H);k=v(Y,"H4",{class:!0});var F=m(k);q=L(F,"message"),F.forEach(n),Y.forEach(n),B.forEach(n),R.forEach(n),y=D(u),i=v(u,"TBODY",{class:!0});var J=m(i);for(let z=0;z<h.length;z+=1)h[z].l(J);J.forEach(n),u.forEach(n),this.h()},h(){p(f,"class","highlight large"),p(_,"class","svelte-1shtgav"),p(T,"class","highlight large"),p(E,"class","svelte-1shtgav"),p(k,"class","highlight large"),p(H,"class","svelte-1shtgav"),p(e,"class","svelte-1shtgav"),p(d,"class","svelte-1shtgav"),p(i,"class","svelte-1shtgav"),p(o,"class","zebra svelte-1shtgav")},m(s,S){O(s,t,S),a(t,c),O(s,l,S),O(s,o,S),a(o,d),a(d,e),a(e,_),a(_,f),a(f,$),a(e,M),a(e,E),a(E,T),a(T,w),a(e,A),a(e,H),a(H,k),a(k,q),a(o,y),a(o,i);for(let u=0;u<h.length;u+=1)h[u].m(i,null)},p(s,[S]){if(S&3){b=s[0];let u;for(u=0;u<b.length;u+=1){const R=U(s,b,u);h[u]?h[u].p(R,S):(h[u]=V(R),h[u].c(),h[u].m(i,null))}for(;u<h.length;u+=1)h[u].d(1);h.length=b.length}},i:N,o:N,d(s){s&&n(t),s&&n(l),s&&n(o),at(h,s)}}}function W(r){return r===0?"processing":"complete"}function vt(r,t,c){let l;Q.useLocalStorage(),Q.subscribe(f=>{l=f});const o=l==null?void 0:l.token;let d=[];const e=lt();ot(async()=>{const f=await fetch("http://localhost:8000/account/contact/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Token "+o},mode:"cors"});c(0,d=await f.json())});function _(f){_t.update($=>f),e("onSelectMessage")}return[d,_]}class mt extends Z{constructor(t){super(),x(this,t,vt,gt,tt,{})}}function pt(r){let t,c,l,o,d;return o=new mt({}),o.$on("onSelectMessage",r[0]),{c(){t=j(),c=g("section"),l=g("article"),rt(o.$$.fragment),this.h()},l(e){nt('[data-svelte="svelte-1itotn5"]',document.head).forEach(n),t=D(e),c=v(e,"SECTION",{class:!0});var f=m(c);l=v(f,"ARTICLE",{class:!0});var $=m(l);ct(o.$$.fragment,$),$.forEach(n),f.forEach(n),this.h()},h(){document.title="Messages from 3ee.com support",p(l,"class","content"),p(c,"class","background")},m(e,_){O(e,t,_),O(e,c,_),a(c,l),ht(o,l,null),d=!0},p:N,i(e){d||(it(o.$$.fragment,e),d=!0)},o(e){ut(o.$$.fragment,e),d=!1},d(e){e&&n(t),e&&n(c),ft(o)}}}function Et(r){function t(c){dt("/account/messages/response")}return[t]}class kt extends Z{constructor(t){super(),x(this,t,Et,pt,tt,{})}}export{kt as default};
