import{S as te,i as se,s as ae,e as y,c as E,a as k,d as h,b as N,g as $,t as d,k as T,h as v,m as j,M as X,I as c,J as F,L as Q,K as V,j as O,a0 as le,O as ne,l as W,E as J,_ as oe,v as re,w as ie,X as ce,x as ue,y as fe,q as he,o as pe,B as _e}from"../../../chunks/index-b0e60546.js";import{g as me}from"../../../chunks/navigation-0e6511d1.js";import{a as de}from"../../../chunks/accountStore-fb474891.js";import{s as ve}from"../../../chunks/messagingStore-98d8aafa.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/index-f2a0ff0f.js";function Y(s,e,o){const t=s.slice();return t[8]=e[o],t}function ge(s){let e,o,t,a,i,l,_,p,r=s[2]>1?"s":"",n,u,g,w,A,M=s[1]>1?"s":"",P,G,L,C,b,H,U,S;return{c(){e=y("p"),o=d("Hail, "),t=y("span"),a=d(s[3]),i=d(", you have "),l=y("span"),_=d(s[2]),p=d(" new message"),n=d(r),u=d(" and "),g=y("span"),w=d(s[1]),A=d(" message"),P=d(M),G=d(` that we are
		processing.`),L=T(),C=y("p"),b=d("Need help? "),H=y("a"),U=d("Contact us"),S=d(" anytime!"),this.h()},l(f){e=E(f,"P",{});var m=k(e);o=v(m,"Hail, "),t=E(m,"SPAN",{class:!0});var D=k(t);a=v(D,s[3]),D.forEach(h),i=v(m,", you have "),l=E(m,"SPAN",{class:!0});var I=k(l);_=v(I,s[2]),I.forEach(h),p=v(m," new message"),n=v(m,r),u=v(m," and "),g=E(m,"SPAN",{class:!0});var q=k(g);w=v(q,s[1]),q.forEach(h),A=v(m," message"),P=v(m,M),G=v(m,` that we are
		processing.`),m.forEach(h),L=j(f),C=E(f,"P",{});var z=k(C);b=v(z,"Need help? "),H=E(z,"A",{href:!0});var K=k(H);U=v(K,"Contact us"),K.forEach(h),S=v(z," anytime!"),z.forEach(h),this.h()},h(){N(t,"class","highlight accent"),N(l,"class","highlight"),N(g,"class","highlight"),N(H,"href","/contact/")},m(f,m){$(f,e,m),c(e,o),c(e,t),c(t,a),c(e,i),c(e,l),c(l,_),c(e,p),c(e,n),c(e,u),c(e,g),c(g,w),c(e,A),c(e,P),c(e,G),$(f,L,m),$(f,C,m),c(C,b),c(C,H),c(H,U),c(C,S)},p(f,m){m&4&&O(_,f[2]),m&4&&r!==(r=f[2]>1?"s":"")&&O(n,r),m&2&&O(w,f[1]),m&2&&M!==(M=f[1]>1?"s":"")&&O(P,M)},d(f){f&&h(e),f&&h(L),f&&h(C)}}}function ye(s){let e,o,t,a,i,l,_,p,r,n,u;return{c(){e=y("p"),o=d("Hello, "),t=y("span"),a=d(s[3]),i=d(", you have no messages."),l=T(),_=y("p"),p=d("Need help? "),r=y("a"),n=d("Contact us"),u=d(" anytime!"),this.h()},l(g){e=E(g,"P",{});var w=k(e);o=v(w,"Hello, "),t=E(w,"SPAN",{class:!0});var A=k(t);a=v(A,s[3]),A.forEach(h),i=v(w,", you have no messages."),w.forEach(h),l=j(g),_=E(g,"P",{});var M=k(_);p=v(M,"Need help? "),r=E(M,"A",{href:!0});var P=k(r);n=v(P,"Contact us"),P.forEach(h),u=v(M," anytime!"),M.forEach(h),this.h()},h(){N(t,"class","highlight accent"),N(r,"href","/contact/")},m(g,w){$(g,e,w),c(e,o),c(e,t),c(t,a),c(e,i),$(g,l,w),$(g,_,w),c(_,p),c(_,r),c(r,n),c(_,u)},p:J,d(g){g&&h(e),g&&h(l),g&&h(_)}}}function Z(s){let e,o=s[0],t=[];for(let a=0;a<o.length;a+=1)t[a]=x(Y(s,o,a));return{c(){e=y("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=E(a,"UL",{class:!0});var i=k(e);for(let l=0;l<t.length;l+=1)t[l].l(i);i.forEach(h),this.h()},h(){N(e,"class","svelte-1tivc51")},m(a,i){$(a,e,i);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(a,i){if(i&17){o=a[0];let l;for(l=0;l<o.length;l+=1){const _=Y(a,o,l);t[l]?t[l].p(_,i):(t[l]=x(_),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},d(a){a&&h(e),ne(t,a)}}}function R(s){let e,o;return{c(){e=y("h3"),o=d("New!"),this.h()},l(t){e=E(t,"H3",{class:!0});var a=k(e);o=v(a,"New!"),a.forEach(h),this.h()},h(){N(e,"class","unread svelte-1tivc51")},m(t,a){$(t,e,a),c(e,o)},d(t){t&&h(e)}}}function x(s){var H,U;let e,o,t,a=s[8].subject+"",i,l,_,p,r,n=B((U=(H=s[8])==null?void 0:H.status)==null?void 0:U.status_type)+"",u,g,w,A,M=ee(s[8].created)+"",P,G,L,C,b=!s[8].read&&s[8].status.status_type===1&&R();return{c(){e=y("li"),o=y("h3"),t=y("a"),i=d(a),_=T(),b&&b.c(),p=T(),r=y("h3"),u=d(n),w=T(),A=y("p"),P=d(M),G=T(),this.h()},l(S){e=E(S,"LI",{class:!0});var f=k(e);o=E(f,"H3",{class:!0});var m=k(o);t=E(m,"A",{href:!0});var D=k(t);i=v(D,a),D.forEach(h),m.forEach(h),_=j(f),b&&b.l(f),p=j(f),r=E(f,"H3",{class:!0});var I=k(r);u=v(I,n),I.forEach(h),w=j(f),A=E(f,"P",{class:!0});var q=k(A);P=v(q,M),q.forEach(h),G=j(f),f.forEach(h),this.h()},h(){var S,f;N(t,"href",l=""),N(o,"class","svelte-1tivc51"),N(r,"class",g=X(B((f=(S=s[8])==null?void 0:S.status)==null?void 0:f.status_type))+" svelte-1tivc51"),N(A,"class","publish-date svelte-1tivc51"),N(e,"class","svelte-1tivc51")},m(S,f){$(S,e,f),c(e,o),c(o,t),c(t,i),c(e,_),b&&b.m(e,null),c(e,p),c(e,r),c(r,u),c(e,w),c(e,A),c(A,P),c(e,G),L||(C=[F(t,"click",Q(function(){V(s[4](s[8]))&&s[4](s[8]).apply(this,arguments)})),F(e,"click",Q(function(){V(s[4](s[8]))&&s[4](s[8]).apply(this,arguments)}))],L=!0)},p(S,f){var m,D,I,q;s=S,f&1&&a!==(a=s[8].subject+"")&&O(i,a),!s[8].read&&s[8].status.status_type===1?b||(b=R(),b.c(),b.m(e,p)):b&&(b.d(1),b=null),f&1&&n!==(n=B((D=(m=s[8])==null?void 0:m.status)==null?void 0:D.status_type)+"")&&O(u,n),f&1&&g!==(g=X(B((q=(I=s[8])==null?void 0:I.status)==null?void 0:q.status_type))+" svelte-1tivc51")&&N(r,"class",g),f&1&&M!==(M=ee(s[8].created)+"")&&O(P,M)},d(S){S&&h(e),b&&b.d(),L=!1,le(C)}}}function Ee(s){let e,o,t,a,i;function l(n,u){return typeof n[0]=="undefined"||n[0].length===0?ye:ge}let _=l(s),p=_(s),r=s[0].length>0&&Z(s);return{c(){e=y("h1"),o=d("Messages"),t=T(),p.c(),a=T(),r&&r.c(),i=W()},l(n){e=E(n,"H1",{});var u=k(e);o=v(u,"Messages"),u.forEach(h),t=j(n),p.l(n),a=j(n),r&&r.l(n),i=W()},m(n,u){$(n,e,u),c(e,o),$(n,t,u),p.m(n,u),$(n,a,u),r&&r.m(n,u),$(n,i,u)},p(n,[u]){_===(_=l(n))&&p?p.p(n,u):(p.d(1),p=_(n),p&&(p.c(),p.m(a.parentNode,a))),n[0].length>0?r?r.p(n,u):(r=Z(n),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},i:J,o:J,d(n){n&&h(e),n&&h(t),p.d(n),n&&h(a),r&&r.d(n),n&&h(i)}}}function ee(s){return typeof s!="undefined"?new Date(s).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null}function B(s){return s===0?"processing":"complete"}function ke(s,e,o){let t,a,i;de.subscribe(u=>{i=u});const l=i==null?void 0:i.token,_=i==null?void 0:i.username;let p=[];const r=oe();re(async()=>{const u=await fetch("https://3ee.dev/account/contact/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Token "+l},mode:"cors"});o(0,p=await u.json())});function n(u){ve.update(g=>u),r("onSelectMessage")}return s.$$.update=()=>{s.$$.dirty&1&&o(2,t=p.filter(u=>u.read===!1&&u.status.status_type===1&&u.active).length),s.$$.dirty&1&&o(1,a=p.filter(u=>u.status.status_type===0&&u.active).length)},[p,a,t,_,n]}class be extends te{constructor(e){super(),se(this,e,ke,Ee,ae,{})}}function we(s){let e,o,t,a,i;return a=new be({}),a.$on("onSelectMessage",s[0]),{c(){e=T(),o=y("section"),t=y("article"),ie(a.$$.fragment),this.h()},l(l){ce('[data-svelte="svelte-1itotn5"]',document.head).forEach(h),e=j(l),o=E(l,"SECTION",{class:!0});var p=k(o);t=E(p,"ARTICLE",{class:!0});var r=k(t);ue(a.$$.fragment,r),r.forEach(h),p.forEach(h),this.h()},h(){document.title="Messages from 3ee.com support",N(t,"class","content"),N(o,"class","background")},m(l,_){$(l,e,_),$(l,o,_),c(o,t),fe(a,t,null),i=!0},p:J,i(l){i||(he(a.$$.fragment,l),i=!0)},o(l){pe(a.$$.fragment,l),i=!1},d(l){l&&h(e),l&&h(o),_e(a)}}}function Me(s){function e(o){me("/account/messages/response")}return[e]}class He extends te{constructor(e){super(),se(this,e,Me,we,ae,{})}}export{He as default};
