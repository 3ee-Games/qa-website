import{S as Z,i as x,s as ee,e as g,t as C,k as j,c as v,a as m,h as L,d as n,m as D,b as p,g as O,K as a,L as te,H as se,j as I,E as N,N as ae,_ as le,v as oe,w as re,X as ne,x as ce,y as he,q as ie,o as ue,B as fe}from"../../../chunks/index-1918a0f6.js";import{g as de}from"../../../chunks/navigation-0e6511d1.js";import{a as Q}from"../../../chunks/accountStore-dfa5264b.js";import{s as _e}from"../../../chunks/messagingStore-5d86f8b3.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/index-fc6d8b78.js";function U(r,e,c){const l=r.slice();return l[5]=e[c],l}function V(r){var k,q;let e,c,l=W((q=(k=r[5])==null?void 0:k.status)==null?void 0:q.status_type)+"",o,d,t,_=r[5].subject+"",f,$,M,E=r[5].body+"",T,w,A,H;return{c(){e=g("tr"),c=g("td"),o=C(l),d=j(),t=g("td"),f=C(_),$=j(),M=g("td"),T=C(E),w=j(),this.h()},l(y){e=v(y,"TR",{class:!0});var i=m(e);c=v(i,"TD",{class:!0});var b=m(c);o=L(b,l),b.forEach(n),d=D(i),t=v(i,"TD",{class:!0});var h=m(t);f=L(h,_),h.forEach(n),$=D(i),M=v(i,"TD",{class:!0});var s=m(M);T=L(s,E),s.forEach(n),w=D(i),i.forEach(n),this.h()},h(){p(c,"class","svelte-1shtgav"),p(t,"class","svelte-1shtgav"),p(M,"class","svelte-1shtgav"),p(e,"class","svelte-1shtgav")},m(y,i){O(y,e,i),a(e,c),a(c,o),a(e,d),a(e,t),a(t,f),a(e,$),a(e,M),a(M,T),a(e,w),A||(H=te(e,"click",function(){se(r[1](r[5]))&&r[1](r[5]).apply(this,arguments)}),A=!0)},p(y,i){var b,h;r=y,i&1&&l!==(l=W((h=(b=r[5])==null?void 0:b.status)==null?void 0:h.status_type)+"")&&I(o,l),i&1&&_!==(_=r[5].subject+"")&&I(f,_),i&1&&E!==(E=r[5].body+"")&&I(T,E)},d(y){y&&n(e),A=!1,H()}}}function ge(r){let e,c,l,o,d,t,_,f,$,M,E,T,w,A,H,k,q,y,i,b=r[0],h=[];for(let s=0;s<b.length;s+=1)h[s]=V(U(r,b,s));return{c(){e=g("h1"),c=C("Messages"),l=j(),o=g("table"),d=g("thead"),t=g("tr"),_=g("th"),f=g("h4"),$=C("status"),M=j(),E=g("th"),T=g("h4"),w=C("subject"),A=j(),H=g("th"),k=g("h4"),q=C("message"),y=j(),i=g("tbody");for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){e=v(s,"H1",{});var S=m(e);c=L(S,"Messages"),S.forEach(n),l=D(s),o=v(s,"TABLE",{class:!0});var u=m(o);d=v(u,"THEAD",{class:!0});var R=m(d);t=v(R,"TR",{class:!0});var B=m(t);_=v(B,"TH",{class:!0});var G=m(_);f=v(G,"H4",{class:!0});var K=m(f);$=L(K,"status"),K.forEach(n),G.forEach(n),M=D(B),E=v(B,"TH",{class:!0});var P=m(E);T=v(P,"H4",{class:!0});var X=m(T);w=L(X,"subject"),X.forEach(n),P.forEach(n),A=D(B),H=v(B,"TH",{class:!0});var Y=m(H);k=v(Y,"H4",{class:!0});var F=m(k);q=L(F,"message"),F.forEach(n),Y.forEach(n),B.forEach(n),R.forEach(n),y=D(u),i=v(u,"TBODY",{class:!0});var J=m(i);for(let z=0;z<h.length;z+=1)h[z].l(J);J.forEach(n),u.forEach(n),this.h()},h(){p(f,"class","highlight large"),p(_,"class","svelte-1shtgav"),p(T,"class","highlight large"),p(E,"class","svelte-1shtgav"),p(k,"class","highlight large"),p(H,"class","svelte-1shtgav"),p(t,"class","svelte-1shtgav"),p(d,"class","svelte-1shtgav"),p(i,"class","svelte-1shtgav"),p(o,"class","zebra svelte-1shtgav")},m(s,S){O(s,e,S),a(e,c),O(s,l,S),O(s,o,S),a(o,d),a(d,t),a(t,_),a(_,f),a(f,$),a(t,M),a(t,E),a(E,T),a(T,w),a(t,A),a(t,H),a(H,k),a(k,q),a(o,y),a(o,i);for(let u=0;u<h.length;u+=1)h[u].m(i,null)},p(s,[S]){if(S&3){b=s[0];let u;for(u=0;u<b.length;u+=1){const R=U(s,b,u);h[u]?h[u].p(R,S):(h[u]=V(R),h[u].c(),h[u].m(i,null))}for(;u<h.length;u+=1)h[u].d(1);h.length=b.length}},i:N,o:N,d(s){s&&n(e),s&&n(l),s&&n(o),ae(h,s)}}}function W(r){return r===0?"processing":"complete"}function ve(r,e,c){let l;Q.useLocalStorage(),Q.subscribe(f=>{l=f});const o=l==null?void 0:l.token;let d=[];const t=le();oe(async()=>{const f=await fetch("https://3ee.dev/account/contact/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Token "+o},mode:"cors"});c(0,d=await f.json())});function _(f){_e.update($=>f),t("onSelectMessage")}return[d,_]}class me extends Z{constructor(e){super(),x(this,e,ve,ge,ee,{})}}function pe(r){let e,c,l,o,d;return o=new me({}),o.$on("onSelectMessage",r[0]),{c(){e=j(),c=g("section"),l=g("article"),re(o.$$.fragment),this.h()},l(t){ne('[data-svelte="svelte-1itotn5"]',document.head).forEach(n),e=D(t),c=v(t,"SECTION",{class:!0});var f=m(c);l=v(f,"ARTICLE",{class:!0});var $=m(l);ce(o.$$.fragment,$),$.forEach(n),f.forEach(n),this.h()},h(){document.title="Messages from 3ee.com support",p(l,"class","content"),p(c,"class","background")},m(t,_){O(t,e,_),O(t,c,_),a(c,l),he(o,l,null),d=!0},p:N,i(t){d||(ie(o.$$.fragment,t),d=!0)},o(t){ue(o.$$.fragment,t),d=!1},d(t){t&&n(e),t&&n(c),fe(o)}}}function Ee(r){function e(c){de("/account/messages/response")}return[e]}class ke extends Z{constructor(e){super(),x(this,e,Ee,pe,ee,{})}}export{ke as default};
