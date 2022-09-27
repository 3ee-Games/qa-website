import{S as ge,i as pe,s as Ee,e as h,k as L,t as V,c as u,a as m,m as T,h as C,d as c,b as _,H as A,g as y,I as r,J as Ie,L as be,R as ie,j as B,N as Z,E as oe,w as ke,X as Ge,x as Ne,y as Le,q as Te,o as Oe,B as $e}from"../../chunks/index-299456bd.js";function ne(n,l,a){const t=n.slice();return t[1]=l[a],t}function re(n,l,a){const t=n.slice();return t[4]=l[a],t}function ce(n,l,a){const t=n.slice();return t[7]=l[a],t}function fe(n){let l,a,t,e,i;return{c(){l=h("div"),a=h("div"),t=h("img"),this.h()},l(o){l=u(o,"DIV",{class:!0});var s=m(l);a=u(s,"DIV",{class:!0});var f=m(a);t=u(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(c),s.forEach(c),this.h()},h(){ie(t.src,e="/"+n[1].meta.image)||_(t,"src",e),_(t,"alt",i=n[1].meta.title),_(t,"class","svelte-t6o0oi"),_(a,"class","svg-container svelte-t6o0oi"),_(l,"class","svg svelte-t6o0oi")},m(o,s){y(o,l,s),r(l,a),r(a,t)},p(o,s){s&1&&!ie(t.src,e="/"+o[1].meta.image)&&_(t,"src",e),s&1&&i!==(i=o[1].meta.title)&&_(t,"alt",i)},d(o){o&&c(l)}}}function he(n){let l,a=n[1].meta.content,t=[];for(let e=0;e<a.length;e+=1)t[e]=ue(ce(n,a,e));return{c(){l=h("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){l=u(e,"UL",{class:!0});var i=m(l);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(c),this.h()},h(){_(l,"class","svelte-t6o0oi")},m(e,i){y(e,l,i);for(let o=0;o<t.length;o+=1)t[o].m(l,null)},p(e,i){if(i&1){a=e[1].meta.content;let o;for(o=0;o<a.length;o+=1){const s=ce(e,a,o);t[o]?t[o].p(s,i):(t[o]=ue(s),t[o].c(),t[o].m(l,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=a.length}},d(e){e&&c(l),Z(t,e)}}}function ue(n){let l,a,t,e,i,o,s,f=n[7].name+"",O,d,g=n[7].description+"",G,$;return{c(){l=h("li"),a=h("ion-list"),t=h("ion-item"),e=h("ion-icon"),o=L(),s=h("strong"),O=V(f),d=V(": "),G=V(g),$=L(),this.h()},l(v){l=u(v,"LI",{class:!0});var E=m(l);a=u(E,"ION-LIST",{});var M=m(a);t=u(M,"ION-ITEM",{});var D=m(t);e=u(D,"ION-ICON",{name:!0,"item-start":!0,class:!0}),m(e).forEach(c),o=T(D),s=u(D,"STRONG",{class:!0});var H=m(s);O=C(H,f),d=C(H,": "),H.forEach(c),G=C(D,g),D.forEach(c),M.forEach(c),$=T(E),E.forEach(c),this.h()},h(){A(e,"name",i=n[7].icon),A(e,"item-start",""),A(e,"class","icon-feature svelte-t6o0oi"),_(s,"class","svelte-t6o0oi"),_(l,"class","svelte-t6o0oi")},m(v,E){y(v,l,E),r(l,a),r(a,t),r(t,e),r(t,o),r(t,s),r(s,O),r(s,d),r(t,G),r(l,$)},p(v,E){E&1&&i!==(i=v[7].icon)&&A(e,"name",i),E&1&&f!==(f=v[7].name+"")&&B(O,f),E&1&&g!==(g=v[7].description+"")&&B(G,g)},d(v){v&&c(l)}}}function me(n){let l,a,t=n[1].meta.categories,e=[];for(let i=0;i<t.length;i+=1)e[i]=_e(re(n,t,i));return{c(){l=h("aside"),a=h("ul");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){l=u(i,"ASIDE",{class:!0});var o=m(l);a=u(o,"UL",{class:!0});var s=m(a);for(let f=0;f<e.length;f+=1)e[f].l(s);s.forEach(c),o.forEach(c),this.h()},h(){_(a,"class","svelte-t6o0oi"),_(l,"class","categories svelte-t6o0oi")},m(i,o){y(i,l,o),r(l,a);for(let s=0;s<e.length;s+=1)e[s].m(a,null)},p(i,o){if(o&1){t=i[1].meta.categories;let s;for(s=0;s<t.length;s+=1){const f=re(i,t,s);e[s]?e[s].p(f,o):(e[s]=_e(f),e[s].c(),e[s].m(a,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=t.length}},d(i){i&&c(l),Z(e,i)}}}function _e(n){let l,a,t=ve(n[4])+"",e,i;return{c(){l=h("li"),a=h("span"),e=V(t),i=L(),this.h()},l(o){l=u(o,"LI",{class:!0});var s=m(l);a=u(s,"SPAN",{class:!0});var f=m(a);e=C(f,t),f.forEach(c),i=T(s),s.forEach(c),this.h()},h(){_(a,"class","highlight accent"),_(l,"class","svelte-t6o0oi")},m(o,s){y(o,l,s),r(l,a),r(a,e),r(l,i)},p(o,s){s&1&&t!==(t=ve(o[4])+"")&&B(e,t)},d(o){o&&c(l)}}}function de(n){let l,a,t,e,i,o,s=n[1].meta.title+"",f,O,d,g=n[1].meta.description+"",G,$,v,E,M,D,H,K,N,U,P=n[1].meta.title+"",R,Q,J,X,q,W,Y,x,I=typeof n[1].meta.image!="undefined"&&fe(n),b=typeof n[1].meta.content!="undefined"&&he(n),k=n[1].meta.categories.length>0&&me(n);return{c(){l=h("li"),a=h("div"),t=h("div"),e=h("div"),I&&I.c(),i=L(),o=h("h3"),f=V(s),O=L(),d=h("h3"),G=V(g),$=L(),v=h("button"),E=h("ion-icon"),M=L(),D=h("span"),H=V("See More"),K=L(),N=h("div"),U=h("h3"),R=V(P),Q=L(),b&&b.c(),J=L(),k&&k.c(),X=L(),q=h("ion-icon"),W=L(),this.h()},l(p){l=u(p,"LI",{class:!0});var S=m(l);a=u(S,"DIV",{class:!0});var ee=m(a);t=u(ee,"DIV",{class:!0});var z=m(t);e=u(z,"DIV",{class:!0});var j=m(e);I&&I.l(j),i=T(j),o=u(j,"H3",{class:!0});var te=m(o);f=C(te,s),te.forEach(c),O=T(j),d=u(j,"H3",{class:!0});var le=m(d);G=C(le,g),le.forEach(c),$=T(j),v=u(j,"BUTTON",{class:!0});var F=m(v);E=u(F,"ION-ICON",{class:!0,name:!0}),m(E).forEach(c),M=T(F),D=u(F,"SPAN",{});var se=m(D);H=C(se,"See More"),se.forEach(c),F.forEach(c),j.forEach(c),K=T(z),N=u(z,"DIV",{class:!0});var w=m(N);U=u(w,"H3",{class:!0});var ae=m(U);R=C(ae,P),ae.forEach(c),Q=T(w),b&&b.l(w),J=T(w),k&&k.l(w),X=T(w),q=u(w,"ION-ICON",{class:!0,name:!0}),m(q).forEach(c),w.forEach(c),z.forEach(c),ee.forEach(c),W=T(S),S.forEach(c),this.h()},h(){_(o,"class","highlight large title svelte-t6o0oi"),_(d,"class","description svelte-t6o0oi"),A(E,"class","icon svelte-t6o0oi"),A(E,"name","game-controller-sharp"),_(v,"class","svelte-t6o0oi"),_(e,"class","flip-card-front svelte-t6o0oi"),_(U,"class","highlight large title svelte-t6o0oi"),A(q,"class","icon icon-blue svelte-t6o0oi"),A(q,"name","arrow-back-circle-sharp"),_(N,"class","flip-card-back svelte-t6o0oi"),_(t,"class","flip-card-inner svelte-t6o0oi"),_(a,"class","flip-card svelte-t6o0oi"),_(l,"class","svelte-t6o0oi")},m(p,S){y(p,l,S),r(l,a),r(a,t),r(t,e),I&&I.m(e,null),r(e,i),r(e,o),r(o,f),r(e,O),r(e,d),r(d,G),r(e,$),r(e,v),r(v,E),r(v,M),r(v,D),r(D,H),r(t,K),r(t,N),r(N,U),r(U,R),r(N,Q),b&&b.m(N,null),r(N,J),k&&k.m(N,null),r(N,X),r(N,q),r(l,W),Y||(x=Ie(a,"click",be(De)),Y=!0)},p(p,S){typeof p[1].meta.image!="undefined"?I?I.p(p,S):(I=fe(p),I.c(),I.m(e,i)):I&&(I.d(1),I=null),S&1&&s!==(s=p[1].meta.title+"")&&B(f,s),S&1&&g!==(g=p[1].meta.description+"")&&B(G,g),S&1&&P!==(P=p[1].meta.title+"")&&B(R,P),typeof p[1].meta.content!="undefined"?b?b.p(p,S):(b=he(p),b.c(),b.m(N,J)):b&&(b.d(1),b=null),p[1].meta.categories.length>0?k?k.p(p,S):(k=me(p),k.c(),k.m(N,X)):k&&(k.d(1),k=null)},d(p){p&&c(l),I&&I.d(),b&&b.d(),k&&k.d(),Y=!1,x()}}}function Se(n){let l,a,t=n[0],e=[];for(let i=0;i<t.length;i+=1)e[i]=de(ne(n,t,i));return{c(){l=h("div"),a=h("ul");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){l=u(i,"DIV",{class:!0});var o=m(l);a=u(o,"UL",{class:!0});var s=m(a);for(let f=0;f<e.length;f+=1)e[f].l(s);s.forEach(c),o.forEach(c),this.h()},h(){_(a,"class","svelte-t6o0oi"),_(l,"class","grid-content")},m(i,o){y(i,l,o),r(l,a);for(let s=0;s<e.length;s+=1)e[s].m(a,null)},p(i,[o]){if(o&1){t=i[0];let s;for(s=0;s<t.length;s+=1){const f=ne(i,t,s);e[s]?e[s].p(f,o):(e[s]=de(f),e[s].c(),e[s].m(a,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=t.length}},i:oe,o:oe,d(i){i&&c(l),Z(e,i)}}}function De(n){if(n.currentTarget.classList.contains("flipped")){n.currentTarget.classList.remove("flipped");return}n.currentTarget.classList.add("flipped")}function ve(n){for(var l=n.split("-"),a=0;a<l.length;a++){var t=l[a];l[a]=t.charAt(0).toUpperCase()+t.slice(1)}return l.join(" ")}function Ve(n,l,a){let{games:t}=l;return n.$$set=e=>{"games"in e&&a(0,t=e.games)},[t]}class Ce extends ge{constructor(l){super(),pe(this,l,Ve,Se,Ee,{games:0})}}function ye(n){let l,a,t,e,i,o,s,f,O;return f=new Ce({props:{games:n[0]}}),{c(){l=h("meta"),a=L(),t=h("section"),e=h("div"),i=h("h1"),o=V("Games"),s=L(),ke(f.$$.fragment),this.h()},l(d){const g=Ge('[data-svelte="svelte-1jauilk"]',document.head);l=u(g,"META",{property:!0,content:!0}),g.forEach(c),a=T(d),t=u(d,"SECTION",{class:!0});var G=m(t);e=u(G,"DIV",{class:!0});var $=m(e);i=u($,"H1",{});var v=m(i);o=C(v,"Games"),v.forEach(c),s=T($),Ne(f.$$.fragment,$),$.forEach(c),G.forEach(c),this.h()},h(){document.title="3Games - Game Library",_(l,"property","og:title"),_(l,"content","3Games Game Library"),_(e,"class","content"),_(t,"class","background")},m(d,g){r(document.head,l),y(d,a,g),y(d,t,g),r(t,e),r(e,i),r(i,o),r(e,s),Le(f,e,null),O=!0},p(d,[g]){const G={};g&1&&(G.games=d[0]),f.$set(G)},i(d){O||(Te(f.$$.fragment,d),O=!0)},o(d){Oe(f.$$.fragment,d),O=!1},d(d){c(l),d&&c(a),d&&c(t),$e(f)}}}const Ae=async({fetch:n})=>({props:{games:await(await n("/api/games.json")).json()}});function je(n,l,a){let{games:t}=l;return n.$$set=e=>{"games"in e&&a(0,t=e.games)},[t]}class He extends ge{constructor(l){super(),pe(this,l,je,ye,Ee,{games:0})}}export{He as default,Ae as load};
