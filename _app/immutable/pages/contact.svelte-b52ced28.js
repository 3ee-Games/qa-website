import{S as x,i as ee,s as te,l as Z,g as N,n as le,o as Y,p as ce,q as K,d as l,I as ue,a0 as ie,v as fe,e as _,t as w,k as A,c as b,a as v,h as P,m as I,b as y,K as i,a1 as D,L as J,G as oe,E as H,w as ae,x as ne,y as se,B as re,J as L,Z as pe}from"../chunks/index-506650de.js";import{g as Q}from"../chunks/navigation-0e6511d1.js";import{p as de}from"../chunks/stores-2d3cdd9a.js";import{a as me}from"../chunks/accountStore-cc5ca2b2.js";import{C as he}from"../chunks/Captcha-490b9974.js";import{s as F}from"../chunks/messagingStore-9f4ca57a.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/index-10b1f58e.js";function _e(m){let e,t,o,a,u,n,c,s,f,d,h,r,p,k,T;function S(C,E){return typeof C[7]=="undefined"?ve:ye}let U=S(m)(m),g=typeof m[7]=="undefined"&&Ee(m);function O(C,E){return C[2]?Ce:ke}let M=O(m),j=M(m);return{c(){U.c(),e=A(),t=_("form"),g&&g.c(),o=A(),a=_("label"),u=w("subject:"),n=A(),c=_("input"),s=A(),f=_("label"),d=w("message:"),h=A(),r=_("textarea"),p=A(),j.c(),this.h()},l(C){U.l(C),e=I(C),t=b(C,"FORM",{class:!0});var E=v(t);g&&g.l(E),o=I(E),a=b(E,"LABEL",{for:!0});var G=v(a);u=P(G,"subject:"),G.forEach(l),n=I(E),c=b(E,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),s=I(E),f=b(E,"LABEL",{for:!0});var R=v(f);d=P(R,"message:"),R.forEach(l),h=I(E),r=b(E,"TEXTAREA",{name:!0,id:!0,placeholder:!0,type:!0,class:!0}),v(r).forEach(l),p=I(E),j.l(E),E.forEach(l),this.h()},h(){y(a,"for","subject"),y(c,"name","subject"),y(c,"id","subject"),y(c,"placeholder","what type of problem?"),y(c,"type","text"),c.required="true",y(f,"for","body"),y(r,"name","body"),y(r,"id","body"),y(r,"placeholder","How can we assist you?"),y(r,"type","text"),r.required="true",y(r,"class","svelte-osobnu"),y(t,"class","svelte-osobnu")},m(C,E){U.m(C,E),N(C,e,E),N(C,t,E),g&&g.m(t,null),i(t,o),i(t,a),i(a,u),i(t,n),i(t,c),D(c,m[5]),i(t,s),i(t,f),i(f,d),i(t,h),i(t,r),D(r,m[6]),i(t,p),j.m(t,null),k||(T=[J(c,"input",m[13]),J(r,"input",m[14]),J(t,"submit",m[10])],k=!0)},p(C,E){U.p(C,E),typeof C[7]=="undefined"&&g.p(C,E),E&32&&c.value!==C[5]&&D(c,C[5]),E&64&&D(r,C[6]),M===(M=O(C))&&j?j.p(C,E):(j.d(1),j=M(C),j&&(j.c(),j.m(t,null)))},i:H,o:H,d(C){U.d(C),C&&l(e),C&&l(t),g&&g.d(),j.d(),k=!1,oe(T)}}}function be(m){let e,t;return e=new he({props:{game:m[1]}}),{c(){ae(e.$$.fragment)},l(o){ne(e.$$.fragment,o)},m(o,a){se(e,o,a),t=!0},p(o,a){const u={};a&2&&(u.game=o[1]),e.$set(u)},i(o){t||(K(e.$$.fragment,o),t=!0)},o(o){Y(e.$$.fragment,o),t=!1},d(o){re(e,o)}}}function ye(m){let e,t,o,a,u,n,c,s,f,d,h,r;return{c(){e=_("p"),t=w("Greetings, "),o=_("span"),a=w(m[8]),u=w(`. Submit a support request. You'll
			be able to track the status and edit your support request.`),n=A(),c=_("p"),s=_("ion-icon"),f=w(` Stop by our
			`),d=_("a"),h=w("Discord server"),r=w(" for support from our community."),this.h()},l(p){e=b(p,"P",{});var k=v(e);t=P(k,"Greetings, "),o=b(k,"SPAN",{class:!0});var T=v(o);a=P(T,m[8]),T.forEach(l),u=P(k,`. Submit a support request. You'll
			be able to track the status and edit your support request.`),k.forEach(l),n=I(p),c=b(p,"P",{});var S=v(c);s=b(S,"ION-ICON",{class:!0,name:!0}),v(s).forEach(l),f=P(S,` Stop by our
			`),d=b(S,"A",{href:!0});var q=v(d);h=P(q,"Discord server"),q.forEach(l),r=P(S," for support from our community."),S.forEach(l),this.h()},h(){y(o,"class","highlight accent"),L(s,"class","icon logo-discord svelte-osobnu"),L(s,"name","logo-discord"),y(d,"href","/account/conduct")},m(p,k){N(p,e,k),i(e,t),i(e,o),i(o,a),i(e,u),N(p,n,k),N(p,c,k),i(c,s),i(c,f),i(c,d),i(d,h),i(c,r)},p:H,d(p){p&&l(e),p&&l(n),p&&l(c)}}}function ve(m){let e,t,o,a,u,n,c,s,f,d,h,r,p,k,T,S,q,U;return{c(){e=_("p"),t=w("Greetings, "),o=_("span"),a=w("traveler"),u=w(`. If you have 3Games account,
			`),n=_("a"),c=w("login"),s=w(`
			to track, modify your support requests, and avoid playing a captcha. If you do not have an account,
			you can
			`),f=_("a"),d=w("create one now"),h=w("."),r=A(),p=_("p"),k=_("ion-icon"),T=w(` Stop by our
			`),S=_("a"),q=w("Discord server"),U=w(" for support from our community."),this.h()},l(g){e=b(g,"P",{});var O=v(e);t=P(O,"Greetings, "),o=b(O,"SPAN",{class:!0});var M=v(o);a=P(M,"traveler"),M.forEach(l),u=P(O,`. If you have 3Games account,
			`),n=b(O,"A",{href:!0});var j=v(n);c=P(j,"login"),j.forEach(l),s=P(O,`
			to track, modify your support requests, and avoid playing a captcha. If you do not have an account,
			you can
			`),f=b(O,"A",{href:!0});var C=v(f);d=P(C,"create one now"),C.forEach(l),h=P(O,"."),O.forEach(l),r=I(g),p=b(g,"P",{});var E=v(p);k=b(E,"ION-ICON",{class:!0,name:!0}),v(k).forEach(l),T=P(E,` Stop by our
			`),S=b(E,"A",{href:!0});var G=v(S);q=P(G,"Discord server"),G.forEach(l),U=P(E," for support from our community."),E.forEach(l),this.h()},h(){y(o,"class","highlight accent"),y(n,"href","/account/login"),y(f,"href","/account/create"),L(k,"class","icon logo-discord svelte-osobnu"),L(k,"name","logo-discord"),y(S,"href","/account/conduct")},m(g,O){N(g,e,O),i(e,t),i(e,o),i(o,a),i(e,u),i(e,n),i(n,c),i(e,s),i(e,f),i(f,d),i(e,h),N(g,r,O),N(g,p,O),i(p,k),i(p,T),i(p,S),i(S,q),i(p,U)},p:H,d(g){g&&l(e),g&&l(r),g&&l(p)}}}function Ee(m){let e,t,o,a,u,n,c,s,f,d,h;return{c(){e=_("label"),t=w("your email address:"),o=A(),a=_("input"),u=A(),n=_("label"),c=w("name:"),s=A(),f=_("input"),this.h()},l(r){e=b(r,"LABEL",{for:!0});var p=v(e);t=P(p,"your email address:"),p.forEach(l),o=I(r),a=b(r,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),u=I(r),n=b(r,"LABEL",{for:!0});var k=v(n);c=P(k,"name:"),k.forEach(l),s=I(r),f=b(r,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),this.h()},h(){y(e,"for","email"),y(a,"name","email"),y(a,"id","email"),y(a,"placeholder","enter your email address"),y(a,"type","email"),a.required="true",y(n,"for","name"),y(f,"name","name"),y(f,"id","name"),y(f,"placeholder","enter your name"),y(f,"type","text"),f.required="true"},m(r,p){N(r,e,p),i(e,t),N(r,o,p),N(r,a,p),D(a,m[3]),N(r,u,p),N(r,n,p),i(n,c),N(r,s,p),N(r,f,p),D(f,m[4]),d||(h=[J(a,"input",m[11]),J(f,"input",m[12])],d=!0)},p(r,p){p&8&&a.value!==r[3]&&D(a,r[3]),p&16&&f.value!==r[4]&&D(f,r[4])},d(r){r&&l(e),r&&l(o),r&&l(a),r&&l(u),r&&l(n),r&&l(s),r&&l(f),d=!1,oe(h)}}}function ke(m){let e,t,o;function a(c,s){return c[9]?Ne:ge}let n=a(m)(m);return{c(){e=_("button"),t=_("ion-icon"),o=A(),n.c(),this.h()},l(c){e=b(c,"BUTTON",{class:!0});var s=v(e);t=b(s,"ION-ICON",{class:!0,name:!0}),v(t).forEach(l),o=I(s),n.l(s),s.forEach(l),this.h()},h(){L(t,"class","icon svelte-osobnu"),L(t,"name","send-sharp"),y(e,"class","svelte-osobnu")},m(c,s){N(c,e,s),i(e,t),i(e,o),n.m(e,null)},p:H,d(c){c&&l(e),n.d()}}}function Ce(m){let e,t,o,a,u,n,c,s,f;return{c(){e=_("p"),t=_("ion-icon"),o=w(" The captcha was not correct. Please try again."),a=A(),u=_("button"),n=_("ion-icon"),c=A(),s=_("span"),f=w("Try again"),this.h()},l(d){e=b(d,"P",{class:!0});var h=v(e);t=b(h,"ION-ICON",{class:!0,name:!0}),v(t).forEach(l),o=P(h," The captcha was not correct. Please try again."),h.forEach(l),a=I(d),u=b(d,"BUTTON",{class:!0});var r=v(u);n=b(r,"ION-ICON",{class:!0,name:!0}),v(n).forEach(l),c=I(r),s=b(r,"SPAN",{});var p=v(s);f=P(p,"Try again"),p.forEach(l),r.forEach(l),this.h()},h(){L(t,"class","shield-x"),L(t,"name","shield-x"),y(e,"class","error"),L(n,"class","icon svelte-osobnu"),L(n,"name","rocket-sharp"),y(u,"class","alert svelte-osobnu")},m(d,h){N(d,e,h),i(e,t),i(e,o),N(d,a,h),N(d,u,h),i(u,n),i(u,c),i(u,s),i(s,f)},p:H,d(d){d&&l(e),d&&l(a),d&&l(u)}}}function ge(m){let e,t;return{c(){e=_("span"),t=w("Submit")},l(o){e=b(o,"SPAN",{});var a=v(e);t=P(a,"Submit"),a.forEach(l)},m(o,a){N(o,e,a),i(e,t)},d(o){o&&l(e)}}}function Ne(m){let e,t;return{c(){e=_("span"),t=w("Update")},l(o){e=b(o,"SPAN",{});var a=v(e);t=P(a,"Update"),a.forEach(l)},m(o,a){N(o,e,a),i(e,t)},d(o){o&&l(e)}}}function we(m){let e,t,o,a;const u=[be,_e],n=[];function c(s,f){return s[0]&&typeof s[7]=="undefined"?0:1}return e=c(m),t=n[e]=u[e](m),{c(){t.c(),o=Z()},l(s){t.l(s),o=Z()},m(s,f){n[e].m(s,f),N(s,o,f),a=!0},p(s,[f]){let d=e;e=c(s),e===d?n[e].p(s,f):(le(),Y(n[d],1,1,()=>{n[d]=null}),ce(),t=n[e],t?t.p(s,f):(t=n[e]=u[e](s),t.c()),K(t,1),t.m(o.parentNode,o))},i(s){a||(K(t),a=!0)},o(s){Y(t),a=!1},d(s){n[e].d(s),s&&l(o)}}}function Pe(m,e,t){let o;ue(m,de,$=>t(19,o=$));let a;me.subscribe($=>{a=$});let u;F.subscribe($=>{u=$});const n=a.token,c=a.username;let s=!1,f=null,d=!1;const h=o.url.searchParams.has("edit")&&typeof n!="undefined",r=o.url.searchParams.has("undo")&&typeof n!="undefined";let p="",k="",T=(h||r)&&typeof u.subject=="string"?u.subject:"",S=(h||r)&&typeof u.body=="string"?u.body:"",q={},U={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};typeof n!="undefined"&&(U.Authorization="Token "+n);const g=ie();fe(async()=>{const $=await fetch("https://3ee.dev/captcha/start/",{method:"GET",mode:"cors"});t(1,f=await $.json()),window.addEventListener("message",function(z){const V=z.data,B=JSON.parse(V);t(0,s=!1),g("onCaptchaEvent",{showCaptcha:s}),B.message==="onPlayCaptchaEnd"&&B.success?O():M()})});async function O(){t(2,d=!1);const z=await(await fetch("https://3ee.dev/account/contact/",{method:"POST",headers:U,mode:"cors",body:JSON.stringify(q)})).json();typeof z!="undefined"&&typeof z.created!="undefined"&&(F.update(V=>z),g("onMessageCreated"))}function M(){t(2,d=!0)}async function j($){$.preventDefault();const z=new FormData($.target);if(q=Object.fromEntries(z.entries()),!s&&typeof n=="undefined"){t(0,s=!0),g("onCaptchaEvent",{showCaptcha:s});return}if(h){const W=`https://3ee.dev/account/contact/${u.id}/`,X=await(await fetch(W,{method:"PATCH",headers:U,mode:"cors",body:JSON.stringify(q)})).json();typeof X.updated!="undefined"&&(F.update(Ue=>X),g("onMessageUpdated"));return}const B=await(await fetch("https://3ee.dev/account/contact/",{method:"POST",headers:U,mode:"cors",body:JSON.stringify(q)})).json();if(typeof B!="undefined"&&typeof B.created!="undefined"){if(F.update(W=>B),r){g("onMessageUpdated");return}g("onMessageCreated")}}function C(){p=this.value,t(3,p)}function E(){k=this.value,t(4,k)}function G(){T=this.value,t(5,T)}function R(){S=this.value,t(6,S)}return[s,f,d,p,k,T,S,n,c,h,j,C,E,G,R]}class Se extends x{constructor(e){super(),ee(this,e,Pe,we,te,{})}}function Oe(m){let e,t;return{c(){e=_("h1"),t=w("Contact Us")},l(o){e=b(o,"H1",{});var a=v(e);t=P(a,"Contact Us"),a.forEach(l)},m(o,a){N(o,e,a),i(e,t)},d(o){o&&l(e)}}}function Ae(m){let e,t,o,a,u;return{c(){e=_("h1"),t=w("Are you human?"),o=A(),a=_("h2"),u=w("Please solve the Captcha Puzzle to continue."),this.h()},l(n){e=b(n,"H1",{});var c=v(e);t=P(c,"Are you human?"),c.forEach(l),o=I(n),a=b(n,"H2",{class:!0});var s=v(a);u=P(s,"Please solve the Captcha Puzzle to continue."),s.forEach(l),this.h()},h(){y(a,"class","svelte-1615z4m")},m(n,c){N(n,e,c),i(e,t),N(n,o,c),N(n,a,c),i(a,u)},d(n){n&&l(e),n&&l(o),n&&l(a)}}}function Ie(m){let e,t,o,a,u,n,c;function s(h,r){return h[0]?Ae:Oe}let f=s(m),d=f(m);return n=new Se({}),n.$on("onCaptchaEvent",m[1]),n.$on("onMessageUpdated",m[3]),n.$on("onMessageCreated",m[2]),{c(){e=A(),t=_("section"),o=_("div"),d.c(),a=A(),u=_("article"),ae(n.$$.fragment),this.h()},l(h){pe('[data-svelte="svelte-pt07nh"]',document.head).forEach(l),e=I(h),t=b(h,"SECTION",{class:!0});var p=v(t);o=b(p,"DIV",{class:!0});var k=v(o);d.l(k),a=I(k),u=b(k,"ARTICLE",{class:!0});var T=v(u);ne(n.$$.fragment,T),T.forEach(l),k.forEach(l),p.forEach(l),this.h()},h(){document.title="Welcome to 3Games | Contact",y(u,"class","svelte-1615z4m"),y(o,"class","content svelte-1615z4m"),y(t,"class","background")},m(h,r){N(h,e,r),N(h,t,r),i(t,o),d.m(o,null),i(o,a),i(o,u),se(n,u,null),c=!0},p(h,[r]){f!==(f=s(h))&&(d.d(1),d=f(h),d&&(d.c(),d.m(o,a)))},i(h){c||(K(n.$$.fragment,h),c=!0)},o(h){Y(n.$$.fragment,h),c=!1},d(h){h&&l(e),h&&l(t),d.d(),re(n)}}}const He=!1;function Te(m,e,t){let o,a=!1;function u(s){t(4,a=s.detail.showCaptcha)}function n(s){Q("/account/messages/response")}function c(s){Q("/account/messages/response#heading-message")}return m.$$.update=()=>{m.$$.dirty&16&&t(0,o=a)},[o,u,n,c,a]}class Je extends x{constructor(e){super(),ee(this,e,Te,Ie,te,{})}}export{Je as default,He as prerender};
