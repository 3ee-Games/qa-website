import{S as $o,i as Mo,s as Bo,e as s,t as r,c as n,a as l,h as f,d as t,b as u,f as Yo,$ as Co,g as h,K as o,j as No,l as Oo,E as Wt,C as Qt,w as Go,x as Jo,y as Wo,z as Xo,A as Uo,q as Qo,o as zo,B as Ko,X as Do,k as p,m}from"../../chunks/index-0a950aaa.js";import{P as Vo}from"../../chunks/_post-9b3fa608.js";function Fo(_){let a,c,d,g,v,k,y,W,H,I,L,j,C,E,x,T,N;return{c(){a=s("iframe"),c=r("See the Pen "),d=s("a"),g=r("Code Pen"),k=r(`
		by `),y=r(_[0]),W=r(" ("),H=s("a"),I=r("@"),L=r(_[0]),C=r(`) on
		`),E=s("a"),x=r("CodePen"),T=r("."),this.h()},l(b){a=n(b,"IFRAME",{height:!0,style:!0,scrolling:!0,title:!0,src:!0,frameborder:!0,loading:!0,allowtransparency:!0});var w=l(a);c=f(w,"See the Pen "),d=n(w,"A",{href:!0});var ee=l(d);g=f(ee,"Code Pen"),ee.forEach(t),k=f(w,`
		by `),y=f(w,_[0]),W=f(w," ("),H=n(w,"A",{href:!0});var O=l(H);I=f(O,"@"),L=f(O,_[0]),O.forEach(t),C=f(w,`) on
		`),E=n(w,"A",{href:!0});var S=l(E);x=f(S,"CodePen"),S.forEach(t),T=f(w,"."),w.forEach(t),this.h()},h(){u(d,"href",v="https://codepen.io/"+_[0]+"/pen/"+_[1]),u(H,"href",j="https://codepen.io/"+_[0]),u(E,"href","https://codepen.io"),u(a,"height","500"),Yo(a,"width","100%"),u(a,"scrolling","no"),u(a,"title","React Hooks - useMousePosition"),Co(a.src,N="https://codepen.io/"+_[0]+"/embed/preview/"+_[1]+"?default-tab=js%2Cresult&editable=true&theme-id=dark")||u(a,"src",N),u(a,"frameborder","no"),u(a,"loading","lazy"),u(a,"allowtransparency","true"),a.allowFullscreen="true"},m(b,w){h(b,a,w),o(a,c),o(a,d),o(d,g),o(a,k),o(a,y),o(a,W),o(a,H),o(H,I),o(H,L),o(a,C),o(a,E),o(E,x),o(a,T)},p(b,w){w&3&&v!==(v="https://codepen.io/"+b[0]+"/pen/"+b[1])&&u(d,"href",v),w&1&&No(y,b[0]),w&1&&No(L,b[0]),w&1&&j!==(j="https://codepen.io/"+b[0])&&u(H,"href",j),w&3&&!Co(a.src,N="https://codepen.io/"+b[0]+"/embed/preview/"+b[1]+"?default-tab=js%2Cresult&editable=true&theme-id=dark")&&u(a,"src",N)},d(b){b&&t(a)}}}function Zo(_){let a,c=typeof _[0]!="undefined"&&typeof _[1]!="undefined"&&Fo(_);return{c(){c&&c.c(),a=Oo()},l(d){c&&c.l(d),a=Oo()},m(d,g){c&&c.m(d,g),h(d,a,g)},p(d,[g]){typeof d[0]!="undefined"&&typeof d[1]!="undefined"?c?c.p(d,g):(c=Fo(d),c.c(),c.m(a.parentNode,a)):c&&(c.d(1),c=null)},i:Wt,o:Wt,d(d){c&&c.d(d),d&&t(a)}}}function ea(_,a,c){let{user:d}=a,{hash:g}=a;return _.$$set=v=>{"user"in v&&c(0,d=v.user),"hash"in v&&c(1,g=v.hash)},[d,g]}class ta extends $o{constructor(a){super(),Mo(this,a,ea,Zo,Bo,{user:0,hash:1})}}function oa(_){let a,c,d,g,v,k,y,W,H,I,L,j,C,E,x,T,N,b,w,ee,O,S,de,Ve,Ze,pe,et,Te,te,tt,je,oe,me,ot,Ce,R,ae,ve,at,st,nt,se,we,lt,it,rt,ne,_e,ft,ht,ut,le,ge,ct,dt,Ne,ie,be,pt,Oe,re,mt,Ue,U,ke,vt,wt,Ee,_t,De,D,gt,Q,bt,kt,Fe,fe,ye,Et,qe,F,q,Pe,yt,$e,he,Pt,Me,z,Be,$,M,He,Ht,Ge,ue,xt,Je,B,G,xe,Rt,We,ce,St,Qe,P,Re,K,It,Lt,Se,Y,At,Tt,Ie,X,jt,Ct,Le,V,Nt,Ot,Ae,Z,Ut,ze;return z=new ta({props:{user:"halvves",hash:"qQxPNo"}}),{c(){a=s("p"),c=r("In this video, we show developing a game with Phaser and using React for the user interface. Using React to alleviate the burden of handling the UI in Canvas. RequestAnimationFrame can be expensive and should be used for the game only. The canvas game shouldn\u2019t be wasting valuable updates for the UI."),d=p(),g=s("p"),v=r("The game we\u2019re developing is using Next.js (a React framework) and Phaser (javascript game engine). Next.js compiles a static html version of the game that can be used iOS/Android webview for mobile, NW.js/Electron for desktop (similar to what Discord does)."),k=p(),y=s("p"),W=r("The game is a NextJS application that from there, it builds the Phaser game and game starts up normally. However, the Nextjs application is handling the UI elements like in the video: merchant dialog, player bag, player armory, and other dialogs like the death dialog."),H=p(),I=s("blockquote"),L=s("p"),j=r("This is a similar approach to older console games that used Scaleform - which under the hood was using Flash and overlaying the UI created by a Flash developer. From there, Scaleform would sit on top of the c++ game engine."),C=p(),E=s("h2"),x=s("a"),T=s("span"),N=r("Writing the bridge between Canvas and React"),b=p(),w=s("p"),ee=r("For the bridge to work between Phaser and React, use an event listener:"),O=p(),S=s("ul"),de=s("li"),Ve=r("addEventListener on the document object to send objects back and forth."),Ze=p(),pe=s("li"),et=r("The implementation of addEventListener is contained within a hook that implements an Effect Hook: useEffect so that state can be passed in."),Te=p(),te=s("p"),tt=r("The performance issue that was solved here was to convert the class components (Bag, Armory, DeathDialog, MerchantDialog) to functional components and then use hooks to manage the add/remove listeners."),je=p(),oe=s("p"),me=s("strong"),ot=r("Types of Hooks"),Ce=p(),R=s("ul"),ae=s("li"),ve=s("strong"),at=r("State Hooks:"),st=r(" useState - called inside a function component to add some local state.  (example: a counter)"),nt=p(),se=s("li"),we=s("strong"),lt=r("Effect Hooks:"),it=r(" useEffect - perform side effects from a function component. (example: listening to an event fire from the DOM)"),rt=p(),ne=s("li"),_e=s("strong"),ft=r("Context Hooks:"),ht=r(" useContext - subscribe to React context without introducing nesting.  (example: Dark & Light themes)"),ut=p(),le=s("li"),ge=s("strong"),ct=r("Reducer Hooks:"),dt=r(" useReducer - And useReducer lets you manage local state of complex components with a reducer.  (dealing with complex state logic)"),Ne=p(),ie=s("p"),be=s("strong"),pt=r("Rules of using Hooks"),Oe=p(),re=s("p"),mt=r("Take the time to learn hooks and using functional components."),Ue=p(),U=s("ul"),ke=s("li"),vt=r("Call Hooks at top level only: Only call Hooks at the top level. Don\u2019t call Hooks inside loops, conditions, or nested functions."),wt=p(),Ee=s("li"),_t=r("Functional Components only: Only call Hooks from React function components. Don\u2019t call Hooks from regular JavaScript functions. (See Custom Hooks.)"),De=p(),D=s("p"),gt=r("If you are using class components, do not worry - porting class components to functional components is trivial.  Simply follow the "),Q=s("a"),bt=r("pattern of functional components"),kt=r(" when porting classes."),Fe=p(),fe=s("blockquote"),ye=s("p"),Et=r("Pay close attention to useState when rewriting your new functional components. Once you spend time writing functional components, we find you\u2019ll enjoy using them and paired with hooks makes the component design simple to implement and iterate on the design of the interface."),qe=p(),F=s("h2"),q=s("a"),Pe=s("span"),yt=r("A Simple Example"),$e=p(),he=s("p"),Pt=r("Below is a bare bones example of a using a Hook and implementing useEffect to attach events with addEventListener.  Use this example to experiment with different types of hooks."),Me=p(),Go(z.$$.fragment),Be=p(),$=s("h2"),M=s("a"),He=s("span"),Ht=r("Have a solid understanding of Hooks"),Ge=p(),ue=s("p"),xt=r("Taking the time to understand hooks and why we are using them is the first important building block to building the bridge between the game engine and UI. Pick the areas that you need side effects - the Effect Hook, which allows for data fetching, DOM updates, and for our example for the bridge: we use addEventListener within useEffect.  In the callback for useEffect, pass in removeEventListener to clean up that instance of the event listener."),Je=p(),B=s("h2"),G=s("a"),xe=s("span"),Rt=r("Resources and frameworks"),We=p(),ce=s("p"),St=r("Here\u2019s all the resources and frameworks used in the video:"),Qe=p(),P=s("ul"),Re=s("li"),K=s("a"),It=r("Phaser with a React UI Youtube video"),Lt=p(),Se=s("li"),Y=s("a"),At=r("Phaser JS - HTML5 game engine"),Tt=p(),Ie=s("li"),X=s("a"),jt=r("Next.js"),Ct=p(),Le=s("li"),V=s("a"),Nt=r("React"),Ot=p(),Ae=s("li"),Z=s("a"),Ut=r("Hooks at a glance"),this.h()},l(e){a=n(e,"P",{});var i=l(a);c=f(i,"In this video, we show developing a game with Phaser and using React for the user interface. Using React to alleviate the burden of handling the UI in Canvas. RequestAnimationFrame can be expensive and should be used for the game only. The canvas game shouldn\u2019t be wasting valuable updates for the UI."),i.forEach(t),d=m(e),g=n(e,"P",{});var zt=l(g);v=f(zt,"The game we\u2019re developing is using Next.js (a React framework) and Phaser (javascript game engine). Next.js compiles a static html version of the game that can be used iOS/Android webview for mobile, NW.js/Electron for desktop (similar to what Discord does)."),zt.forEach(t),k=m(e),y=n(e,"P",{});var Kt=l(y);W=f(Kt,"The game is a NextJS application that from there, it builds the Phaser game and game starts up normally. However, the Nextjs application is handling the UI elements like in the video: merchant dialog, player bag, player armory, and other dialogs like the death dialog."),Kt.forEach(t),H=m(e),I=n(e,"BLOCKQUOTE",{});var Yt=l(I);L=n(Yt,"P",{});var Xt=l(L);j=f(Xt,"This is a similar approach to older console games that used Scaleform - which under the hood was using Flash and overlaying the UI created by a Flash developer. From there, Scaleform would sit on top of the c++ game engine."),Xt.forEach(t),Yt.forEach(t),C=m(e),E=n(e,"H2",{id:!0});var Dt=l(E);x=n(Dt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Vt=l(x);T=n(Vt,"SPAN",{class:!0}),l(T).forEach(t),Vt.forEach(t),N=f(Dt,"Writing the bridge between Canvas and React"),Dt.forEach(t),b=m(e),w=n(e,"P",{});var Zt=l(w);ee=f(Zt,"For the bridge to work between Phaser and React, use an event listener:"),Zt.forEach(t),O=m(e),S=n(e,"UL",{});var Ke=l(S);de=n(Ke,"LI",{});var eo=l(de);Ve=f(eo,"addEventListener on the document object to send objects back and forth."),eo.forEach(t),Ze=m(Ke),pe=n(Ke,"LI",{});var to=l(pe);et=f(to,"The implementation of addEventListener is contained within a hook that implements an Effect Hook: useEffect so that state can be passed in."),to.forEach(t),Ke.forEach(t),Te=m(e),te=n(e,"P",{});var oo=l(te);tt=f(oo,"The performance issue that was solved here was to convert the class components (Bag, Armory, DeathDialog, MerchantDialog) to functional components and then use hooks to manage the add/remove listeners."),oo.forEach(t),je=m(e),oe=n(e,"P",{});var ao=l(oe);me=n(ao,"STRONG",{});var so=l(me);ot=f(so,"Types of Hooks"),so.forEach(t),ao.forEach(t),Ce=m(e),R=n(e,"UL",{});var J=l(R);ae=n(J,"LI",{});var Ft=l(ae);ve=n(Ft,"STRONG",{});var no=l(ve);at=f(no,"State Hooks:"),no.forEach(t),st=f(Ft," useState - called inside a function component to add some local state.  (example: a counter)"),Ft.forEach(t),nt=m(J),se=n(J,"LI",{});var qt=l(se);we=n(qt,"STRONG",{});var lo=l(we);lt=f(lo,"Effect Hooks:"),lo.forEach(t),it=f(qt," useEffect - perform side effects from a function component. (example: listening to an event fire from the DOM)"),qt.forEach(t),rt=m(J),ne=n(J,"LI",{});var $t=l(ne);_e=n($t,"STRONG",{});var io=l(_e);ft=f(io,"Context Hooks:"),io.forEach(t),ht=f($t," useContext - subscribe to React context without introducing nesting.  (example: Dark & Light themes)"),$t.forEach(t),ut=m(J),le=n(J,"LI",{});var Mt=l(le);ge=n(Mt,"STRONG",{});var ro=l(ge);ct=f(ro,"Reducer Hooks:"),ro.forEach(t),dt=f(Mt," useReducer - And useReducer lets you manage local state of complex components with a reducer.  (dealing with complex state logic)"),Mt.forEach(t),J.forEach(t),Ne=m(e),ie=n(e,"P",{});var fo=l(ie);be=n(fo,"STRONG",{});var ho=l(be);pt=f(ho,"Rules of using Hooks"),ho.forEach(t),fo.forEach(t),Oe=m(e),re=n(e,"P",{});var uo=l(re);mt=f(uo,"Take the time to learn hooks and using functional components."),uo.forEach(t),Ue=m(e),U=n(e,"UL",{});var Ye=l(U);ke=n(Ye,"LI",{});var co=l(ke);vt=f(co,"Call Hooks at top level only: Only call Hooks at the top level. Don\u2019t call Hooks inside loops, conditions, or nested functions."),co.forEach(t),wt=m(Ye),Ee=n(Ye,"LI",{});var po=l(Ee);_t=f(po,"Functional Components only: Only call Hooks from React function components. Don\u2019t call Hooks from regular JavaScript functions. (See Custom Hooks.)"),po.forEach(t),Ye.forEach(t),De=m(e),D=n(e,"P",{});var Xe=l(D);gt=f(Xe,"If you are using class components, do not worry - porting class components to functional components is trivial.  Simply follow the "),Q=n(Xe,"A",{href:!0,rel:!0});var mo=l(Q);bt=f(mo,"pattern of functional components"),mo.forEach(t),kt=f(Xe," when porting classes."),Xe.forEach(t),Fe=m(e),fe=n(e,"BLOCKQUOTE",{});var vo=l(fe);ye=n(vo,"P",{});var wo=l(ye);Et=f(wo,"Pay close attention to useState when rewriting your new functional components. Once you spend time writing functional components, we find you\u2019ll enjoy using them and paired with hooks makes the component design simple to implement and iterate on the design of the interface."),wo.forEach(t),vo.forEach(t),qe=m(e),F=n(e,"H2",{id:!0});var Bt=l(F);q=n(Bt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _o=l(q);Pe=n(_o,"SPAN",{class:!0}),l(Pe).forEach(t),_o.forEach(t),yt=f(Bt,"A Simple Example"),Bt.forEach(t),$e=m(e),he=n(e,"P",{});var go=l(he);Pt=f(go,"Below is a bare bones example of a using a Hook and implementing useEffect to attach events with addEventListener.  Use this example to experiment with different types of hooks."),go.forEach(t),Me=m(e),Jo(z.$$.fragment,e),Be=m(e),$=n(e,"H2",{id:!0});var Gt=l($);M=n(Gt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var bo=l(M);He=n(bo,"SPAN",{class:!0}),l(He).forEach(t),bo.forEach(t),Ht=f(Gt,"Have a solid understanding of Hooks"),Gt.forEach(t),Ge=m(e),ue=n(e,"P",{});var ko=l(ue);xt=f(ko,"Taking the time to understand hooks and why we are using them is the first important building block to building the bridge between the game engine and UI. Pick the areas that you need side effects - the Effect Hook, which allows for data fetching, DOM updates, and for our example for the bridge: we use addEventListener within useEffect.  In the callback for useEffect, pass in removeEventListener to clean up that instance of the event listener."),ko.forEach(t),Je=m(e),B=n(e,"H2",{id:!0});var Jt=l(B);G=n(Jt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Eo=l(G);xe=n(Eo,"SPAN",{class:!0}),l(xe).forEach(t),Eo.forEach(t),Rt=f(Jt,"Resources and frameworks"),Jt.forEach(t),We=m(e),ce=n(e,"P",{});var yo=l(ce);St=f(yo,"Here\u2019s all the resources and frameworks used in the video:"),yo.forEach(t),Qe=m(e),P=n(e,"UL",{});var A=l(P);Re=n(A,"LI",{});var Po=l(Re);K=n(Po,"A",{href:!0,rel:!0});var Ho=l(K);It=f(Ho,"Phaser with a React UI Youtube video"),Ho.forEach(t),Po.forEach(t),Lt=m(A),Se=n(A,"LI",{});var xo=l(Se);Y=n(xo,"A",{href:!0,rel:!0});var Ro=l(Y);At=f(Ro,"Phaser JS - HTML5 game engine"),Ro.forEach(t),xo.forEach(t),Tt=m(A),Ie=n(A,"LI",{});var So=l(Ie);X=n(So,"A",{href:!0,rel:!0});var Io=l(X);jt=f(Io,"Next.js"),Io.forEach(t),So.forEach(t),Ct=m(A),Le=n(A,"LI",{});var Lo=l(Le);V=n(Lo,"A",{href:!0,rel:!0});var Ao=l(V);Nt=f(Ao,"React"),Ao.forEach(t),Lo.forEach(t),Ot=m(A),Ae=n(A,"LI",{});var To=l(Ae);Z=n(To,"A",{href:!0,rel:!0});var jo=l(Z);Ut=f(jo,"Hooks at a glance"),jo.forEach(t),To.forEach(t),A.forEach(t),this.h()},h(){u(T,"class","icon icon-link"),u(x,"aria-hidden","true"),u(x,"tabindex","-1"),u(x,"href","#writing-the-bridge-between-canvas-and-react"),u(E,"id","writing-the-bridge-between-canvas-and-react"),u(Q,"href","https://reactjs.org/tutorial/tutorial.html#function-components"),u(Q,"rel","nofollow"),u(Pe,"class","icon icon-link"),u(q,"aria-hidden","true"),u(q,"tabindex","-1"),u(q,"href","#a-simple-example"),u(F,"id","a-simple-example"),u(He,"class","icon icon-link"),u(M,"aria-hidden","true"),u(M,"tabindex","-1"),u(M,"href","#have-a-solid-understanding-of-hooks"),u($,"id","have-a-solid-understanding-of-hooks"),u(xe,"class","icon icon-link"),u(G,"aria-hidden","true"),u(G,"tabindex","-1"),u(G,"href","#resources-and-frameworks"),u(B,"id","resources-and-frameworks"),u(K,"href","https://www.youtube.com/watch?v=EDbW7lbtHOA"),u(K,"rel","nofollow"),u(Y,"href","https://phaser.io/"),u(Y,"rel","nofollow"),u(X,"href","https://nextjs.org/"),u(X,"rel","nofollow"),u(V,"href","https://reactjs.org/"),u(V,"rel","nofollow"),u(Z,"href","https://reactjs.org/docs/hooks-overview.html#state-hook"),u(Z,"rel","nofollow")},m(e,i){h(e,a,i),o(a,c),h(e,d,i),h(e,g,i),o(g,v),h(e,k,i),h(e,y,i),o(y,W),h(e,H,i),h(e,I,i),o(I,L),o(L,j),h(e,C,i),h(e,E,i),o(E,x),o(x,T),o(E,N),h(e,b,i),h(e,w,i),o(w,ee),h(e,O,i),h(e,S,i),o(S,de),o(de,Ve),o(S,Ze),o(S,pe),o(pe,et),h(e,Te,i),h(e,te,i),o(te,tt),h(e,je,i),h(e,oe,i),o(oe,me),o(me,ot),h(e,Ce,i),h(e,R,i),o(R,ae),o(ae,ve),o(ve,at),o(ae,st),o(R,nt),o(R,se),o(se,we),o(we,lt),o(se,it),o(R,rt),o(R,ne),o(ne,_e),o(_e,ft),o(ne,ht),o(R,ut),o(R,le),o(le,ge),o(ge,ct),o(le,dt),h(e,Ne,i),h(e,ie,i),o(ie,be),o(be,pt),h(e,Oe,i),h(e,re,i),o(re,mt),h(e,Ue,i),h(e,U,i),o(U,ke),o(ke,vt),o(U,wt),o(U,Ee),o(Ee,_t),h(e,De,i),h(e,D,i),o(D,gt),o(D,Q),o(Q,bt),o(D,kt),h(e,Fe,i),h(e,fe,i),o(fe,ye),o(ye,Et),h(e,qe,i),h(e,F,i),o(F,q),o(q,Pe),o(F,yt),h(e,$e,i),h(e,he,i),o(he,Pt),h(e,Me,i),Wo(z,e,i),h(e,Be,i),h(e,$,i),o($,M),o(M,He),o($,Ht),h(e,Ge,i),h(e,ue,i),o(ue,xt),h(e,Je,i),h(e,B,i),o(B,G),o(G,xe),o(B,Rt),h(e,We,i),h(e,ce,i),o(ce,St),h(e,Qe,i),h(e,P,i),o(P,Re),o(Re,K),o(K,It),o(P,Lt),o(P,Se),o(Se,Y),o(Y,At),o(P,Tt),o(P,Ie),o(Ie,X),o(X,jt),o(P,Ct),o(P,Le),o(Le,V),o(V,Nt),o(P,Ot),o(P,Ae),o(Ae,Z),o(Z,Ut),ze=!0},p:Wt,i(e){ze||(Qo(z.$$.fragment,e),ze=!0)},o(e){zo(z.$$.fragment,e),ze=!1},d(e){e&&t(a),e&&t(d),e&&t(g),e&&t(k),e&&t(y),e&&t(H),e&&t(I),e&&t(C),e&&t(E),e&&t(b),e&&t(w),e&&t(O),e&&t(S),e&&t(Te),e&&t(te),e&&t(je),e&&t(oe),e&&t(Ce),e&&t(R),e&&t(Ne),e&&t(ie),e&&t(Oe),e&&t(re),e&&t(Ue),e&&t(U),e&&t(De),e&&t(D),e&&t(Fe),e&&t(fe),e&&t(qe),e&&t(F),e&&t($e),e&&t(he),e&&t(Me),Ko(z,e),e&&t(Be),e&&t($),e&&t(Ge),e&&t(ue),e&&t(Je),e&&t(B),e&&t(We),e&&t(ce),e&&t(Qe),e&&t(P)}}}function aa(_){let a,c;const d=[_[0],qo];let g={$$slots:{default:[oa]},$$scope:{ctx:_}};for(let v=0;v<d.length;v+=1)g=Qt(g,d[v]);return a=new Vo({props:g}),{c(){Go(a.$$.fragment)},l(v){Jo(a.$$.fragment,v)},m(v,k){Wo(a,v,k),c=!0},p(v,[k]){const y=k&1?Xo(d,[k&1&&Uo(v[0]),k&0&&Uo(qo)]):{};k&2&&(y.$$scope={dirty:k,ctx:v}),a.$set(y)},i(v){c||(Qo(a.$$.fragment,v),c=!0)},o(v){zo(a.$$.fragment,v),c=!1},d(v){Ko(a,v)}}}const qo={title:"Phaser game with a React UI",date:"2020-06-11",modifiedDate:"2022-05-30",youtubeId:"EDbW7lbtHOA",categories:["phaser","react","game development"],svg:"Ocean",seoImage:"https://boatr.s3.amazonaws.com/static/media/uploads/blog/phaser_react.jpg",shortDescription:"In this video, we show developing a game with Phaser and using React for the user interface. Using React to alleviate the burden of handling the UI in Canvas. RequestAnimationFrame can be expensive and should be used for the game only.",author:"3ee Games",codePen:{user:"halvves",hash:"qQxPNo"}};function sa(_,a,c){return _.$$set=d=>{c(0,a=Qt(Qt({},a),Do(d)))},a=Do(a),[a]}class ia extends $o{constructor(a){super(),Mo(this,a,sa,aa,Bo,{})}}export{ia as default,qo as metadata};
