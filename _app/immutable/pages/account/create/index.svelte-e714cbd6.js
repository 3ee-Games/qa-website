import{S as pe,i as de,s as me,l as fe,g as A,n as Ee,o as W,p as ke,q as Y,d as c,_ as we,v as Ce,k as N,e as h,t as w,m as O,c as p,a as m,h as C,b as f,H as S,I as n,$ as z,J as M,E as he,a0 as ge,w as _e,x as ve,y as ye,B as be,X as Ie}from"../../../chunks/index-299456bd.js";import{a as Ne}from"../../../chunks/accountStore-af10db85.js";import{C as Oe}from"../../../chunks/Captcha-f37fdb77.js";import{g as Ae}from"../../../chunks/navigation-0e6511d1.js";import"../../../chunks/index-c05afa88.js";import"../../../chunks/singletons-d1fb5791.js";function Pe(d){let t,e,r,s,l,a,o,u,_,v,i,y,g,I,P,F,G,k,$,T,B,X,V,K,Q,Z,j,H,x,ee,L,te,re;function se(E,b){if(E[6])return Se;if(E[5])return De}let U=se(d),D=U&&U(d);function oe(E,b){return E[5]?Be:$e}let R=oe(d),q=R(d);return{c(){D&&D.c(),t=N(),e=h("form"),r=h("label"),s=w("your email address:"),l=N(),a=h("input"),u=N(),_=h("label"),v=w("desired username:"),i=N(),y=h("input"),I=N(),P=h("label"),F=w("come up with a secure password:"),G=N(),k=h("input"),$=N(),T=h("p"),B=h("ion-icon"),X=w(` By creating a 3ee Account, you
			automatically agree to our `),V=h("a"),K=w("terms of service"),Q=w("."),Z=N(),j=h("p"),H=h("ion-icon"),x=w(` We may need to make sure you're a
			human. Don't worry, our captchas are fun.`),ee=N(),L=h("div"),q.c(),this.h()},l(E){D&&D.l(E),t=O(E),e=p(E,"FORM",{class:!0});var b=m(e);r=p(b,"LABEL",{for:!0});var ne=m(r);s=C(ne,"your email address:"),ne.forEach(c),l=O(b),a=p(b,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0,class:!0}),u=O(b),_=p(b,"LABEL",{for:!0});var le=m(_);v=C(le,"desired username:"),le.forEach(c),i=O(b),y=p(b,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0,class:!0}),I=O(b),P=p(b,"LABEL",{for:!0});var ce=m(P);F=C(ce,"come up with a secure password:"),ce.forEach(c),G=O(b),k=p(b,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0}),$=O(b),T=p(b,"P",{});var J=m(T);B=p(J,"ION-ICON",{class:!0,name:!0}),m(B).forEach(c),X=C(J,` By creating a 3ee Account, you
			automatically agree to our `),V=p(J,"A",{href:!0});var ue=m(V);K=C(ue,"terms of service"),ue.forEach(c),Q=C(J,"."),J.forEach(c),Z=O(b),j=p(b,"P",{});var ae=m(j);H=p(ae,"ION-ICON",{class:!0,name:!0}),m(H).forEach(c),x=C(ae,` We may need to make sure you're a
			human. Don't worry, our captchas are fun.`),ae.forEach(c),ee=O(b),L=p(b,"DIV",{id:!0});var ie=m(L);q.l(ie),ie.forEach(c),b.forEach(c),this.h()},h(){f(r,"for","email"),f(a,"name","email"),f(a,"id","email"),f(a,"placeholder","enter your email address"),f(a,"type","email"),a.required="true",f(a,"class",o=d[6]?"validation-error":""),f(_,"for","username"),f(y,"name","username"),f(y,"id","username"),f(y,"placeholder","enter a username"),f(y,"type","text"),y.required="true",f(y,"class",g=d[6]?"validation-error":""),f(P,"for","password"),f(k,"name","password"),f(k,"id","password"),f(k,"placeholder","enter a secure password"),f(k,"type","password"),k.required="true",S(B,"class","shield-checkmark svelte-kuyvbp"),S(B,"name","shield-checkmark"),f(V,"href","/account/terms/"),S(H,"class","shield-checkmark svelte-kuyvbp"),S(H,"name","game-controller"),f(L,"id","form-footer"),f(e,"class","svelte-kuyvbp")},m(E,b){D&&D.m(E,b),A(E,t,b),A(E,e,b),n(e,r),n(r,s),n(e,l),n(e,a),z(a,d[1]),n(e,u),n(e,_),n(_,v),n(e,i),n(e,y),z(y,d[2]),n(e,I),n(e,P),n(P,F),n(e,G),n(e,k),z(k,d[3]),n(e,$),n(e,T),n(T,B),n(T,X),n(T,V),n(V,K),n(T,Q),n(e,Z),n(e,j),n(j,H),n(j,x),n(e,ee),n(e,L),q.m(L,null),te||(re=[M(a,"input",d[8]),M(y,"input",d[9]),M(k,"input",d[10]),M(e,"submit",d[7])],te=!0)},p(E,b){U!==(U=se(E))&&(D&&D.d(1),D=U&&U(E),D&&(D.c(),D.m(t.parentNode,t))),b&64&&o!==(o=E[6]?"validation-error":"")&&f(a,"class",o),b&2&&a.value!==E[1]&&z(a,E[1]),b&64&&g!==(g=E[6]?"validation-error":"")&&f(y,"class",g),b&4&&y.value!==E[2]&&z(y,E[2]),b&8&&k.value!==E[3]&&z(k,E[3]),R!==(R=oe(E))&&(q.d(1),q=R(E),q&&(q.c(),q.m(L,null)))},i:he,o:he,d(E){D&&D.d(E),E&&c(t),E&&c(e),q.d(),te=!1,ge(re)}}}function Te(d){let t,e;return t=new Oe({props:{game:d[0]}}),{c(){_e(t.$$.fragment)},l(r){ve(t.$$.fragment,r)},m(r,s){ye(t,r,s),e=!0},p(r,s){const l={};s&1&&(l.game=r[0]),t.$set(l)},i(r){e||(Y(t.$$.fragment,r),e=!0)},o(r){W(t.$$.fragment,r),e=!1},d(r){be(t,r)}}}function De(d){let t,e,r,s;return{c(){t=h("div"),e=h("p"),r=h("ion-icon"),s=w(" The captcha was not correct. Please try below."),this.h()},l(l){t=p(l,"DIV",{class:!0});var a=m(t);e=p(a,"P",{class:!0});var o=m(e);r=p(o,"ION-ICON",{class:!0,name:!0}),m(r).forEach(c),s=C(o," The captcha was not correct. Please try below."),o.forEach(c),a.forEach(c),this.h()},h(){S(r,"class","shield-x"),S(r,"name","shield-x"),f(e,"class","error"),f(t,"class","error-container")},m(l,a){A(l,t,a),n(t,e),n(e,r),n(e,s)},d(l){l&&c(t)}}}function Se(d){let t,e,r,s,l,a,o,u,_;return{c(){t=h("div"),e=h("p"),r=w("Your email or username are unavailable."),s=N(),l=h("p"),a=w("If you have an account, "),o=h("a"),u=w("login"),_=w(" now."),this.h()},l(v){t=p(v,"DIV",{class:!0});var i=m(t);e=p(i,"P",{class:!0});var y=m(e);r=C(y,"Your email or username are unavailable."),y.forEach(c),s=O(i),l=p(i,"P",{class:!0});var g=m(l);a=C(g,"If you have an account, "),o=p(g,"A",{href:!0});var I=m(o);u=C(I,"login"),I.forEach(c),_=C(g," now."),g.forEach(c),i.forEach(c),this.h()},h(){f(e,"class","error"),f(o,"href","/account/login/"),f(l,"class","error-description svelte-kuyvbp"),f(t,"class","error-container")},m(v,i){A(v,t,i),n(t,e),n(e,r),n(t,s),n(t,l),n(l,a),n(l,o),n(o,u),n(l,_)},d(v){v&&c(t)}}}function $e(d){let t,e,r,s,l;return{c(){t=h("button"),e=h("ion-icon"),r=N(),s=h("span"),l=w("Create Account"),this.h()},l(a){t=p(a,"BUTTON",{class:!0});var o=m(t);e=p(o,"ION-ICON",{class:!0,name:!0}),m(e).forEach(c),r=O(o),s=p(o,"SPAN",{});var u=m(s);l=C(u,"Create Account"),u.forEach(c),o.forEach(c),this.h()},h(){S(e,"class","icon svelte-kuyvbp"),S(e,"name","rocket-sharp"),f(t,"class","svelte-kuyvbp")},m(a,o){A(a,t,o),n(t,e),n(t,r),n(t,s),n(s,l)},d(a){a&&c(t)}}}function Be(d){let t,e,r,s,l,a,o,u,_,v;return{c(){t=h("div"),e=h("p"),r=h("ion-icon"),s=w(" The captcha was not correct. Please try again."),l=N(),a=h("button"),o=h("ion-icon"),u=N(),_=h("span"),v=w("Try again"),this.h()},l(i){t=p(i,"DIV",{class:!0});var y=m(t);e=p(y,"P",{class:!0});var g=m(e);r=p(g,"ION-ICON",{class:!0,name:!0}),m(r).forEach(c),s=C(g," The captcha was not correct. Please try again."),g.forEach(c),l=O(y),a=p(y,"BUTTON",{class:!0});var I=m(a);o=p(I,"ION-ICON",{class:!0,name:!0}),m(o).forEach(c),u=O(I),_=p(I,"SPAN",{});var P=m(_);v=C(P,"Try again"),P.forEach(c),I.forEach(c),y.forEach(c),this.h()},h(){S(r,"class","shield-x"),S(r,"name","shield-x"),f(e,"class","error"),S(o,"class","icon svelte-kuyvbp"),S(o,"name","rocket-sharp"),f(a,"class","alert svelte-kuyvbp"),f(t,"class","error-container")},m(i,y){A(i,t,y),n(t,e),n(e,r),n(e,s),n(t,l),n(t,a),n(a,o),n(a,u),n(a,_),n(_,v)},d(i){i&&c(t)}}}function qe(d){let t,e,r,s;const l=[Te,Pe],a=[];function o(u,_){return u[4]?0:1}return t=o(d),e=a[t]=l[t](d),{c(){e.c(),r=fe()},l(u){e.l(u),r=fe()},m(u,_){a[t].m(u,_),A(u,r,_),s=!0},p(u,[_]){let v=t;t=o(u),t===v?a[t].p(u,_):(Ee(),W(a[v],1,1,()=>{a[v]=null}),ke(),e=a[t],e?e.p(u,_):(e=a[t]=l[t](u),e.c()),Y(e,1),e.m(r.parentNode,r))},i(u){s||(Y(e),s=!0)},o(u){W(e),s=!1},d(u){a[t].d(u),u&&c(r)}}}function Le(d,t,e){let r=null,s="tester66@test.com",l="eeper45",a="test",o=!1,u=!1,_={},v=!1;const i=we();Ce(async()=>{const k=await fetch("https://3ee.dev/captcha/start/",{method:"GET",mode:"cors"});e(0,r=await k.json()),window.addEventListener("message",function($){const T=$.data,B=JSON.parse(T);e(4,o=!1),i("onCaptchaEvent",{showCaptcha:o}),B.message==="onPlayCaptchaEnd"&&B.success?y(B.session):g()})});async function y(k){e(5,u=!1),_.guid=k;const $=await fetch("https://3ee.dev/account/create/",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},mode:"cors",body:JSON.stringify(_)});try{if($.ok){const T=await $.json();Ne.set(T),T.token&&(e(6,v=!1),i("createAccountSuccess"))}else e(6,v=!0)}catch{e(6,v=!0)}}function g(){e(5,u=!0)}async function I(k){k.preventDefault(),o||(e(4,o=!0),i("onCaptchaEvent",{showCaptcha:o}));const $=new FormData(k.target);_=Object.fromEntries($.entries())}function P(){s=this.value,e(1,s)}function F(){l=this.value,e(2,l)}function G(){a=this.value,e(3,a)}return[r,s,l,a,o,u,v,I,P,F,G]}class Ve extends pe{constructor(t){super(),de(this,t,Le,qe,me,{})}}function je(d){let t,e,r,s,l;return{c(){t=h("h1"),e=w("Create your Account"),r=N(),s=h("h2"),l=w("Ready for your adventure to begin? Get started by creating an account."),this.h()},l(a){t=p(a,"H1",{});var o=m(t);e=C(o,"Create your Account"),o.forEach(c),r=O(a),s=p(a,"H2",{class:!0});var u=m(s);l=C(u,"Ready for your adventure to begin? Get started by creating an account."),u.forEach(c),this.h()},h(){f(s,"class","svelte-h6vuyh")},m(a,o){A(a,t,o),n(t,e),A(a,r,o),A(a,s,o),n(s,l)},d(a){a&&c(t),a&&c(r),a&&c(s)}}}function He(d){let t,e,r,s,l;return{c(){t=h("h1"),e=w("Are you human?"),r=N(),s=h("h2"),l=w("Please solve the Captcha Puzzle to continue."),this.h()},l(a){t=p(a,"H1",{});var o=m(t);e=C(o,"Are you human?"),o.forEach(c),r=O(a),s=p(a,"H2",{class:!0});var u=m(s);l=C(u,"Please solve the Captcha Puzzle to continue."),u.forEach(c),this.h()},h(){f(s,"class","svelte-h6vuyh")},m(a,o){A(a,t,o),n(t,e),A(a,r,o),A(a,s,o),n(s,l)},d(a){a&&c(t),a&&c(r),a&&c(s)}}}function Ue(d){let t,e,r,s,l,a,o;function u(i,y){return i[0]?He:je}let _=u(d),v=_(d);return a=new Ve({}),a.$on("createAccountSuccess",d[1]),a.$on("onCaptchaEvent",d[2]),{c(){t=N(),e=h("section"),r=h("div"),s=h("div"),v.c(),l=N(),_e(a.$$.fragment),this.h()},l(i){Ie('[data-svelte="svelte-qohrfk"]',document.head).forEach(c),t=O(i),e=p(i,"SECTION",{class:!0});var g=m(e);r=p(g,"DIV",{class:!0});var I=m(r);s=p(I,"DIV",{class:!0});var P=m(s);v.l(P),P.forEach(c),l=O(I),ve(a.$$.fragment,I),I.forEach(c),g.forEach(c),this.h()},h(){document.title="Create your Account",f(s,"class","promo"),f(r,"class","content"),f(e,"class","background")},m(i,y){A(i,t,y),A(i,e,y),n(e,r),n(r,s),v.m(s,null),n(r,l),ye(a,r,null),o=!0},p(i,[y]){_!==(_=u(i))&&(v.d(1),v=_(i),v&&(v.c(),v.m(s,null)))},i(i){o||(Y(a.$$.fragment,i),o=!0)},o(i){W(a.$$.fragment,i),o=!1},d(i){i&&c(t),i&&c(e),v.d(),be(a)}}}function ze(d,t,e){let r,s=!1;function l(o){Ae("/account/new/")}function a(o){e(3,s=o.detail.showCaptcha)}return d.$$.update=()=>{d.$$.dirty&8&&e(0,r=s)},[r,l,a,s]}class Ye extends pe{constructor(t){super(),de(this,t,ze,Ue,me,{})}}export{Ye as default};
