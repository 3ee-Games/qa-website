import{S as te,i as se,s as ae,e as y,c as E,a as k,d as h,b as M,g as $,t as v,k as D,h as g,m as T,O as X,I as c,J as F,L as Q,K as V,j as O,a0 as le,N as ne,l as W,E as J,_ as oe,v as re,w as ie,X as ce,x as ue,y as fe,q as he,o as pe,B as _e}from"../../../chunks/index-299456bd.js";import{g as de}from"../../../chunks/navigation-0e6511d1.js";import{a as me}from"../../../chunks/accountStore-af10db85.js";import{s as ve}from"../../../chunks/messagingStore-df35cd50.js";import"../../../chunks/singletons-d1fb5791.js";import"../../../chunks/index-c05afa88.js";function Y(s,e,o){const t=s.slice();return t[8]=e[o],t}function ge(s){let e,o,t,a,i,l,_,p,r=s[2]!==1?"s":"",n,u,m,b,A,N=s[1]!==1?"s":"",P,G,j,C,w,H,U,S;return{c(){e=y("p"),o=v("Hail, "),t=y("span"),a=v(s[3]),i=v(`, you have
		`),l=y("span"),_=v(s[2]),p=v(`
		new message`),n=v(r),u=v(` and
		`),m=y("span"),b=v(s[1]),A=v(`
		message`),P=v(N),G=v(" that we are processing."),j=D(),C=y("p"),w=v("Need help? "),H=y("a"),U=v("Contact us"),S=v(" anytime!"),this.h()},l(f){e=E(f,"P",{});var d=k(e);o=g(d,"Hail, "),t=E(d,"SPAN",{class:!0});var L=k(t);a=g(L,s[3]),L.forEach(h),i=g(d,`, you have
		`),l=E(d,"SPAN",{class:!0});var I=k(l);_=g(I,s[2]),I.forEach(h),p=g(d,`
		new message`),n=g(d,r),u=g(d,` and
		`),m=E(d,"SPAN",{class:!0});var q=k(m);b=g(q,s[1]),q.forEach(h),A=g(d,`
		message`),P=g(d,N),G=g(d," that we are processing."),d.forEach(h),j=T(f),C=E(f,"P",{});var z=k(C);w=g(z,"Need help? "),H=E(z,"A",{href:!0});var K=k(H);U=g(K,"Contact us"),K.forEach(h),S=g(z," anytime!"),z.forEach(h),this.h()},h(){M(t,"class","highlight accent"),M(l,"class","highlight"),M(m,"class","highlight"),M(H,"href","/contact/")},m(f,d){$(f,e,d),c(e,o),c(e,t),c(t,a),c(e,i),c(e,l),c(l,_),c(e,p),c(e,n),c(e,u),c(e,m),c(m,b),c(e,A),c(e,P),c(e,G),$(f,j,d),$(f,C,d),c(C,w),c(C,H),c(H,U),c(C,S)},p(f,d){d&4&&O(_,f[2]),d&4&&r!==(r=f[2]!==1?"s":"")&&O(n,r),d&2&&O(b,f[1]),d&2&&N!==(N=f[1]!==1?"s":"")&&O(P,N)},d(f){f&&h(e),f&&h(j),f&&h(C)}}}function ye(s){let e,o,t,a,i,l,_,p,r,n,u;return{c(){e=y("p"),o=v("Hello, "),t=y("span"),a=v(s[3]),i=v(", you have no messages."),l=D(),_=y("p"),p=v("Need help? "),r=y("a"),n=v("Contact us"),u=v(" anytime!"),this.h()},l(m){e=E(m,"P",{});var b=k(e);o=g(b,"Hello, "),t=E(b,"SPAN",{class:!0});var A=k(t);a=g(A,s[3]),A.forEach(h),i=g(b,", you have no messages."),b.forEach(h),l=T(m),_=E(m,"P",{});var N=k(_);p=g(N,"Need help? "),r=E(N,"A",{href:!0});var P=k(r);n=g(P,"Contact us"),P.forEach(h),u=g(N," anytime!"),N.forEach(h),this.h()},h(){M(t,"class","highlight accent"),M(r,"href","/contact/")},m(m,b){$(m,e,b),c(e,o),c(e,t),c(t,a),c(e,i),$(m,l,b),$(m,_,b),c(_,p),c(_,r),c(r,n),c(_,u)},p:J,d(m){m&&h(e),m&&h(l),m&&h(_)}}}function Z(s){let e,o=s[0],t=[];for(let a=0;a<o.length;a+=1)t[a]=x(Y(s,o,a));return{c(){e=y("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=E(a,"UL",{class:!0});var i=k(e);for(let l=0;l<t.length;l+=1)t[l].l(i);i.forEach(h),this.h()},h(){M(e,"class","svelte-1tivc51")},m(a,i){$(a,e,i);for(let l=0;l<t.length;l+=1)t[l].m(e,null)},p(a,i){if(i&17){o=a[0];let l;for(l=0;l<o.length;l+=1){const _=Y(a,o,l);t[l]?t[l].p(_,i):(t[l]=x(_),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},d(a){a&&h(e),ne(t,a)}}}function R(s){let e,o;return{c(){e=y("h3"),o=v("New!"),this.h()},l(t){e=E(t,"H3",{class:!0});var a=k(e);o=g(a,"New!"),a.forEach(h),this.h()},h(){M(e,"class","unread svelte-1tivc51")},m(t,a){$(t,e,a),c(e,o)},d(t){t&&h(e)}}}function x(s){var H,U;let e,o,t,a=s[8].subject+"",i,l,_,p,r,n=B((U=(H=s[8])==null?void 0:H.status)==null?void 0:U.status_type)+"",u,m,b,A,N=ee(s[8].updated)+"",P,G,j,C,w=!s[8].read&&s[8].status.status_type===1&&R();return{c(){e=y("li"),o=y("h3"),t=y("a"),i=v(a),_=D(),w&&w.c(),p=D(),r=y("h3"),u=v(n),b=D(),A=y("p"),P=v(N),G=D(),this.h()},l(S){e=E(S,"LI",{class:!0});var f=k(e);o=E(f,"H3",{class:!0});var d=k(o);t=E(d,"A",{href:!0});var L=k(t);i=g(L,a),L.forEach(h),d.forEach(h),_=T(f),w&&w.l(f),p=T(f),r=E(f,"H3",{class:!0});var I=k(r);u=g(I,n),I.forEach(h),b=T(f),A=E(f,"P",{class:!0});var q=k(A);P=g(q,N),q.forEach(h),G=T(f),f.forEach(h),this.h()},h(){var S,f;M(t,"href",l=""),M(o,"class","svelte-1tivc51"),M(r,"class",m=X(B((f=(S=s[8])==null?void 0:S.status)==null?void 0:f.status_type))+" svelte-1tivc51"),M(A,"class","publish-date svelte-1tivc51"),M(e,"class","svelte-1tivc51")},m(S,f){$(S,e,f),c(e,o),c(o,t),c(t,i),c(e,_),w&&w.m(e,null),c(e,p),c(e,r),c(r,u),c(e,b),c(e,A),c(A,P),c(e,G),j||(C=[F(t,"click",Q(function(){V(s[4](s[8]))&&s[4](s[8]).apply(this,arguments)})),F(e,"click",Q(function(){V(s[4](s[8]))&&s[4](s[8]).apply(this,arguments)}))],j=!0)},p(S,f){var d,L,I,q;s=S,f&1&&a!==(a=s[8].subject+"")&&O(i,a),!s[8].read&&s[8].status.status_type===1?w||(w=R(),w.c(),w.m(e,p)):w&&(w.d(1),w=null),f&1&&n!==(n=B((L=(d=s[8])==null?void 0:d.status)==null?void 0:L.status_type)+"")&&O(u,n),f&1&&m!==(m=X(B((q=(I=s[8])==null?void 0:I.status)==null?void 0:q.status_type))+" svelte-1tivc51")&&M(r,"class",m),f&1&&N!==(N=ee(s[8].updated)+"")&&O(P,N)},d(S){S&&h(e),w&&w.d(),j=!1,le(C)}}}function Ee(s){let e,o,t,a,i;function l(n,u){return typeof n[0]=="undefined"||n[0].length===0?ye:ge}let _=l(s),p=_(s),r=s[0].length>0&&Z(s);return{c(){e=y("h1"),o=v("Messages"),t=D(),p.c(),a=D(),r&&r.c(),i=W()},l(n){e=E(n,"H1",{});var u=k(e);o=g(u,"Messages"),u.forEach(h),t=T(n),p.l(n),a=T(n),r&&r.l(n),i=W()},m(n,u){$(n,e,u),c(e,o),$(n,t,u),p.m(n,u),$(n,a,u),r&&r.m(n,u),$(n,i,u)},p(n,[u]){_===(_=l(n))&&p?p.p(n,u):(p.d(1),p=_(n),p&&(p.c(),p.m(a.parentNode,a))),n[0].length>0?r?r.p(n,u):(r=Z(n),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},i:J,o:J,d(n){n&&h(e),n&&h(t),p.d(n),n&&h(a),r&&r.d(n),n&&h(i)}}}function ee(s){return typeof s!="undefined"?new Date(s).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):null}function B(s){return s===0?"processing":"complete"}function ke(s,e,o){let t,a,i;me.subscribe(u=>{i=u});const l=i==null?void 0:i.token,_=i==null?void 0:i.username;let p=[];const r=oe();re(async()=>{const u=await fetch("https://3ee.dev/account/contact/",{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Token "+l},mode:"cors"});o(0,p=await u.json()),typeof p!="undefined"&&p.length>0&&p.sort(function(m,b){return new Date(b.updated)-new Date(m.updated)})});function n(u){ve.update(m=>u),r("onSelectMessage")}return s.$$.update=()=>{s.$$.dirty&1&&o(2,t=p.filter(u=>u.read===!1&&u.status.status_type===1&&u.active).length),s.$$.dirty&1&&o(1,a=p.filter(u=>u.status.status_type===0&&u.active).length)},[p,a,t,_,n]}class be extends te{constructor(e){super(),se(this,e,ke,Ee,ae,{})}}function we(s){let e,o,t,a,i;return a=new be({}),a.$on("onSelectMessage",s[0]),{c(){e=D(),o=y("section"),t=y("article"),ie(a.$$.fragment),this.h()},l(l){ce('[data-svelte="svelte-1itotn5"]',document.head).forEach(h),e=T(l),o=E(l,"SECTION",{class:!0});var p=k(o);t=E(p,"ARTICLE",{class:!0});var r=k(t);ue(a.$$.fragment,r),r.forEach(h),p.forEach(h),this.h()},h(){document.title="Messages from 3ee.com support",M(t,"class","content"),M(o,"class","background")},m(l,_){$(l,e,_),$(l,o,_),c(o,t),fe(a,t,null),i=!0},p:J,i(l){i||(he(a.$$.fragment,l),i=!0)},o(l){pe(a.$$.fragment,l),i=!1},d(l){l&&h(e),l&&h(o),_e(a)}}}function Ne(s){function e(o){de("/account/messages/response")}return[e]}class He extends te{constructor(e){super(),se(this,e,Ne,we,ae,{})}}export{He as default};
