import{S as Z,i as B,s as F,e as E,t as w,k,c as g,a as D,h as C,d,m as I,b as v,g as j,L as s,E as J,V as K,Z as Q,j as x,W as $,X as ee,Y as te,q as le,o as ae,$ as se}from"./index-a28671a4.js";import{m as V}from"./menuContextStore-e4e377a6.js";function Y(n){let t,a,y,c,i;return{c(){t=E("li"),a=E("strong"),y=w("Modified:"),c=k(),i=w(n[4]),this.h()},l(o){t=g(o,"LI",{class:!0});var r=D(t);a=g(r,"STRONG",{});var _=D(a);y=C(_,"Modified:"),_.forEach(d),c=I(r),i=C(r,n[4]),r.forEach(d),this.h()},h(){v(t,"class","published-date svelte-12eedmm")},m(o,r){j(o,t,r),s(t,a),s(a,y),s(t,c),s(t,i)},p:J,d(o){o&&d(t)}}}function ne(n){let t,a,y,c,i,o,r,_,p,h,l,T,q,A,M,N,O,S,b;document.title=t="3Games "+n[0];let u=n[1]!==n[2]&&Y(n);const R=n[7].default,f=K(R,n,n[6],null);return{c(){a=E("meta"),y=k(),c=E("section"),i=E("article"),o=E("h1"),r=w(n[0]),_=k(),p=E("aside"),h=E("ul"),l=E("li"),T=E("strong"),q=w("Published:"),A=k(),M=w(n[3]),N=k(),u&&u.c(),O=k(),S=E("div"),f&&f.c(),this.h()},l(e){const m=Q('[data-svelte="svelte-18u2yzh"]',document.head);a=g(m,"META",{property:!0,content:!0}),m.forEach(d),y=I(e),c=g(e,"SECTION",{class:!0});var z=D(c);i=g(z,"ARTICLE",{class:!0});var L=D(i);o=g(L,"H1",{class:!0});var H=D(o);r=C(H,n[0]),H.forEach(d),_=I(L),p=g(L,"ASIDE",{class:!0});var U=D(p);h=g(U,"UL",{class:!0});var G=D(h);l=g(G,"LI",{class:!0});var P=D(l);T=g(P,"STRONG",{});var W=D(T);q=C(W,"Published:"),W.forEach(d),A=I(P),M=C(P,n[3]),P.forEach(d),N=I(G),u&&u.l(G),G.forEach(d),U.forEach(d),O=I(L),S=g(L,"DIV",{class:!0});var X=D(S);f&&f.l(X),X.forEach(d),L.forEach(d),z.forEach(d),this.h()},h(){v(a,"property","og:title"),v(a,"content",n[0]),v(o,"class","svelte-12eedmm"),v(l,"class","published-date svelte-12eedmm"),v(h,"class","svelte-12eedmm"),v(p,"class","date-aside svelte-12eedmm"),v(S,"class","article"),v(i,"class","content"),v(c,"class","background")},m(e,m){s(document.head,a),j(e,y,m),j(e,c,m),s(c,i),s(i,o),s(o,r),s(i,_),s(i,p),s(p,h),s(h,l),s(l,T),s(T,q),s(l,A),s(l,M),s(h,N),u&&u.m(h,null),s(i,O),s(i,S),f&&f.m(S,null),b=!0},p(e,[m]){(!b||m&1)&&t!==(t="3Games "+e[0])&&(document.title=t),(!b||m&1)&&v(a,"content",e[0]),(!b||m&1)&&x(r,e[0]),e[1]!==e[2]?u?u.p(e,m):(u=Y(e),u.c(),u.m(h,null)):u&&(u.d(1),u=null),f&&f.p&&(!b||m&64)&&$(f,R,e,e[6],b?te(R,e[6],m,null):ee(e[6]),null)},i(e){b||(le(f,e),b=!0)},o(e){ae(f,e),b=!1},d(e){d(a),e&&d(y),e&&d(c),u&&u.d(),f&&f.d(e)}}}function ie(n,t,a){let{$$slots:y={},$$scope:c}=t,{title:i}=t,{date:o}=t,{modifiedDate:r}=t,{menu:_=void 0}=t,p=typeof o!="undefined"?new Date(o).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null,h=typeof r!="undefined"?new Date(r).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null;return V.subscribe(l=>{}),typeof _!="undefined"&&V.update(l=>_),se(()=>{V.update(l=>[])}),n.$$set=l=>{"title"in l&&a(0,i=l.title),"date"in l&&a(1,o=l.date),"modifiedDate"in l&&a(2,r=l.modifiedDate),"menu"in l&&a(5,_=l.menu),"$$scope"in l&&a(6,c=l.$$scope)},[i,o,r,p,h,_,c,y]}class ue extends Z{constructor(t){super(),B(this,t,ie,ne,F,{title:0,date:1,modifiedDate:2,menu:5})}}export{ue as P};
