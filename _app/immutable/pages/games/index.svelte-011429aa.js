import{S as Le,i as Ne,s as Te,e as u,k as G,t as D,c as h,a as m,m as L,h as V,d as c,b as _,J as w,g as A,K as r,L as se,R as me,j as P,O as ne,G as Oe,E as _e,w as Se,Y as $e,x as De,y as Ve,q as Ce,o as Ae,B as Ue}from"../../chunks/index-8bf1f2ff.js";function de(o,l,a){const t=o.slice();return t[1]=l[a],t}function ge(o,l,a){const t=o.slice();return t[4]=l[a],t}function ve(o,l,a){const t=o.slice();return t[7]=l[a],t}function pe(o){let l,a,t,e,n;return{c(){l=u("div"),a=u("div"),t=u("img"),this.h()},l(i){l=h(i,"DIV",{class:!0});var s=m(l);a=h(s,"DIV",{class:!0});var f=m(a);t=h(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(c),s.forEach(c),this.h()},h(){me(t.src,e="/"+o[1].meta.image)||_(t,"src",e),_(t,"alt",n=o[1].meta.title),_(t,"class","svelte-1gufomy"),_(a,"class","svg-container svelte-1gufomy"),_(l,"class","svg svelte-1gufomy")},m(i,s){A(i,l,s),r(l,a),r(a,t)},p(i,s){s&1&&!me(t.src,e="/"+i[1].meta.image)&&_(t,"src",e),s&1&&n!==(n=i[1].meta.title)&&_(t,"alt",n)},d(i){i&&c(l)}}}function Ee(o){let l,a=o[1].meta.content,t=[];for(let e=0;e<a.length;e+=1)t[e]=ye(ve(o,a,e));return{c(){l=u("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){l=h(e,"UL",{class:!0});var n=m(l);for(let i=0;i<t.length;i+=1)t[i].l(n);n.forEach(c),this.h()},h(){_(l,"class","svelte-1gufomy")},m(e,n){A(e,l,n);for(let i=0;i<t.length;i+=1)t[i].m(l,null)},p(e,n){if(n&1){a=e[1].meta.content;let i;for(i=0;i<a.length;i+=1){const s=ve(e,a,i);t[i]?t[i].p(s,n):(t[i]=ye(s),t[i].c(),t[i].m(l,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}},d(e){e&&c(l),ne(t,e)}}}function ye(o){let l,a,t,e,n,i,s,f=o[7].name+"",T,d,v=o[7].description+"",k,O;return{c(){l=u("li"),a=u("ion-list"),t=u("ion-item"),e=u("ion-icon"),i=G(),s=u("strong"),T=D(f),d=D(": "),k=D(v),O=G(),this.h()},l(g){l=h(g,"LI",{class:!0});var E=m(l);a=h(E,"ION-LIST",{});var q=m(a);t=h(q,"ION-ITEM",{});var $=m(t);e=h($,"ION-ICON",{name:!0,"item-start":!0,class:!0}),m(e).forEach(c),i=L($),s=h($,"STRONG",{class:!0});var M=m(s);T=V(M,f),d=V(M,": "),M.forEach(c),k=V($,v),$.forEach(c),q.forEach(c),O=L(E),E.forEach(c),this.h()},h(){w(e,"name",n=o[7].icon),w(e,"item-start",""),w(e,"class","icon-feature svelte-1gufomy"),_(s,"class","svelte-1gufomy"),_(l,"class","svelte-1gufomy")},m(g,E){A(g,l,E),r(l,a),r(a,t),r(t,e),r(t,i),r(t,s),r(s,T),r(s,d),r(t,k),r(l,O)},p(g,E){E&1&&n!==(n=g[7].icon)&&w(e,"name",n),E&1&&f!==(f=g[7].name+"")&&P(T,f),E&1&&v!==(v=g[7].description+"")&&P(k,v)},d(g){g&&c(l)}}}function be(o){let l,a,t=o[1].meta.categories,e=[];for(let n=0;n<t.length;n+=1)e[n]=Ie(ge(o,t,n));return{c(){l=u("aside"),a=u("ul");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){l=h(n,"ASIDE",{class:!0});var i=m(l);a=h(i,"UL",{class:!0});var s=m(a);for(let f=0;f<e.length;f+=1)e[f].l(s);s.forEach(c),i.forEach(c),this.h()},h(){_(a,"class","svelte-1gufomy"),_(l,"class","categories svelte-1gufomy")},m(n,i){A(n,l,i),r(l,a);for(let s=0;s<e.length;s+=1)e[s].m(a,null)},p(n,i){if(i&1){t=n[1].meta.categories;let s;for(s=0;s<t.length;s+=1){const f=ge(n,t,s);e[s]?e[s].p(f,i):(e[s]=Ie(f),e[s].c(),e[s].m(a,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=t.length}},d(n){n&&c(l),ne(e,n)}}}function Ie(o){let l,a,t=Ge(o[4])+"",e,n;return{c(){l=u("li"),a=u("span"),e=D(t),n=G(),this.h()},l(i){l=h(i,"LI",{class:!0});var s=m(l);a=h(s,"SPAN",{class:!0});var f=m(a);e=V(f,t),f.forEach(c),n=L(s),s.forEach(c),this.h()},h(){_(a,"class","highlight accent"),_(l,"class","svelte-1gufomy")},m(i,s){A(i,l,s),r(l,a),r(a,e),r(l,n)},p(i,s){s&1&&t!==(t=Ge(i[4])+"")&&P(e,t)},d(i){i&&c(l)}}}function ke(o){let l,a,t,e,n,i,s=o[1].meta.title+"",f,T,d,v=o[1].meta.description+"",k,O,g,E,q,$,M,X,N,H,R=o[1].meta.title+"",K,Z,Y,z,C,B,x,J,ee,te,le,ie,y=typeof o[1].meta.image!="undefined"&&pe(o),b=typeof o[1].meta.content!="undefined"&&Ee(o),I=o[1].meta.categories.length>0&&be(o);return{c(){l=u("li"),a=u("div"),t=u("div"),e=u("div"),y&&y.c(),n=G(),i=u("h3"),f=D(s),T=G(),d=u("h3"),k=D(v),O=G(),g=u("button"),E=u("ion-icon"),q=G(),$=u("span"),M=D("See More"),X=G(),N=u("div"),H=u("h3"),K=D(R),Z=G(),b&&b.c(),Y=G(),I&&I.c(),z=G(),C=u("button"),B=u("ion-icon"),x=G(),J=u("span"),ee=D("See Less"),te=G(),this.h()},l(p){l=h(p,"LI",{class:!0});var S=m(l);a=h(S,"DIV",{class:!0});var oe=m(a);t=h(oe,"DIV",{class:!0});var F=m(t);e=h(F,"DIV",{class:!0});var U=m(e);y&&y.l(U),n=L(U),i=h(U,"H3",{class:!0});var re=m(i);f=V(re,s),re.forEach(c),T=L(U),d=h(U,"H3",{class:!0});var ce=m(d);k=V(ce,v),ce.forEach(c),O=L(U),g=h(U,"BUTTON",{class:!0});var Q=m(g);E=h(Q,"ION-ICON",{class:!0,name:!0}),m(E).forEach(c),q=L(Q),$=h(Q,"SPAN",{});var fe=m($);M=V(fe,"See More"),fe.forEach(c),Q.forEach(c),U.forEach(c),X=L(F),N=h(F,"DIV",{class:!0});var j=m(N);H=h(j,"H3",{class:!0});var ue=m(H);K=V(ue,R),ue.forEach(c),Z=L(j),b&&b.l(j),Y=L(j),I&&I.l(j),z=L(j),C=h(j,"BUTTON",{class:!0});var W=m(C);B=h(W,"ION-ICON",{class:!0,name:!0}),m(B).forEach(c),x=L(W),J=h(W,"SPAN",{});var he=m(J);ee=V(he,"See Less"),he.forEach(c),W.forEach(c),j.forEach(c),F.forEach(c),oe.forEach(c),te=L(S),S.forEach(c),this.h()},h(){_(i,"class","highlight large title svelte-1gufomy"),_(d,"class","description svelte-1gufomy"),w(E,"class","icon svelte-1gufomy"),w(E,"name","game-controller-sharp"),_(g,"class","svelte-1gufomy"),_(e,"class","flip-card-front svelte-1gufomy"),_(H,"class","highlight large title svelte-1gufomy"),w(B,"class","icon svelte-1gufomy"),w(B,"name","arrow-back-circle-sharp"),_(C,"class","svelte-1gufomy"),_(N,"class","flip-card-back svelte-1gufomy"),_(t,"class","flip-card-inner svelte-1gufomy"),_(a,"class","flip-card svelte-1gufomy"),_(l,"class","svelte-1gufomy")},m(p,S){A(p,l,S),r(l,a),r(a,t),r(t,e),y&&y.m(e,null),r(e,n),r(e,i),r(i,f),r(e,T),r(e,d),r(d,k),r(e,O),r(e,g),r(g,E),r(g,q),r(g,$),r($,M),r(t,X),r(t,N),r(N,H),r(H,K),r(N,Z),b&&b.m(N,null),r(N,Y),I&&I.m(N,null),r(N,z),r(N,C),r(C,B),r(C,x),r(C,J),r(J,ee),r(l,te),le||(ie=[se(g,"click",ae),se(C,"click",ae),se(a,"click",ae)],le=!0)},p(p,S){typeof p[1].meta.image!="undefined"?y?y.p(p,S):(y=pe(p),y.c(),y.m(e,n)):y&&(y.d(1),y=null),S&1&&s!==(s=p[1].meta.title+"")&&P(f,s),S&1&&v!==(v=p[1].meta.description+"")&&P(k,v),S&1&&R!==(R=p[1].meta.title+"")&&P(K,R),typeof p[1].meta.content!="undefined"?b?b.p(p,S):(b=Ee(p),b.c(),b.m(N,Y)):b&&(b.d(1),b=null),p[1].meta.categories.length>0?I?I.p(p,S):(I=be(p),I.c(),I.m(N,z)):I&&(I.d(1),I=null)},d(p){p&&c(l),y&&y.d(),b&&b.d(),I&&I.d(),le=!1,Oe(ie)}}}function je(o){let l,a,t=o[0],e=[];for(let n=0;n<t.length;n+=1)e[n]=ke(de(o,t,n));return{c(){l=u("div"),a=u("ul");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){l=h(n,"DIV",{class:!0});var i=m(l);a=h(i,"UL",{class:!0});var s=m(a);for(let f=0;f<e.length;f+=1)e[f].l(s);s.forEach(c),i.forEach(c),this.h()},h(){_(a,"class","svelte-1gufomy"),_(l,"class","grid-content")},m(n,i){A(n,l,i),r(l,a);for(let s=0;s<e.length;s+=1)e[s].m(a,null)},p(n,[i]){if(i&1){t=n[0];let s;for(s=0;s<t.length;s+=1){const f=de(n,t,s);e[s]?e[s].p(f,i):(e[s]=ke(f),e[s].c(),e[s].m(a,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=t.length}},i:_e,o:_e,d(n){n&&c(l),ne(e,n)}}}function ae(o){if(o.currentTarget.classList.contains("flipped")){o.currentTarget.classList.remove("flipped");return}o.currentTarget.classList.add("flipped")}function Ge(o){for(var l=o.split("-"),a=0;a<l.length;a++){var t=l[a];l[a]=t.charAt(0).toUpperCase()+t.slice(1)}return l.join(" ")}function we(o,l,a){let{games:t}=l;return o.$$set=e=>{"games"in e&&a(0,t=e.games)},[t]}class Me extends Le{constructor(l){super(),Ne(this,l,we,je,Te,{games:0})}}function qe(o){let l,a,t,e,n,i,s,f,T;return f=new Me({props:{games:o[0]}}),{c(){l=u("meta"),a=G(),t=u("section"),e=u("div"),n=u("h1"),i=D("Games"),s=G(),Se(f.$$.fragment),this.h()},l(d){const v=$e('[data-svelte="svelte-1jauilk"]',document.head);l=h(v,"META",{property:!0,content:!0}),v.forEach(c),a=L(d),t=h(d,"SECTION",{class:!0});var k=m(t);e=h(k,"DIV",{class:!0});var O=m(e);n=h(O,"H1",{});var g=m(n);i=V(g,"Games"),g.forEach(c),s=L(O),De(f.$$.fragment,O),O.forEach(c),k.forEach(c),this.h()},h(){document.title="3Games - Game Library",_(l,"property","og:title"),_(l,"content","3Games Game Library"),_(e,"class","content"),_(t,"class","background")},m(d,v){r(document.head,l),A(d,a,v),A(d,t,v),r(t,e),r(e,n),r(n,i),r(e,s),Ve(f,e,null),T=!0},p(d,[v]){const k={};v&1&&(k.games=d[0]),f.$set(k)},i(d){T||(Ce(f.$$.fragment,d),T=!0)},o(d){Ae(f.$$.fragment,d),T=!1},d(d){c(l),d&&c(a),d&&c(t),Ue(f)}}}const Pe=async({fetch:o})=>({props:{games:await(await o("/api/games.json")).json()}});function He(o,l,a){let{games:t}=l;return o.$$set=e=>{"games"in e&&a(0,t=e.games)},[t]}class Re extends Le{constructor(l){super(),Ne(this,l,He,qe,Te,{games:0})}}export{Re as default,Pe as load};
