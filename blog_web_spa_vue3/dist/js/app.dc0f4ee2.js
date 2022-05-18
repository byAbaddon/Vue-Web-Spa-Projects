(function(){"use strict";var e={6003:function(e,t,a){var n=a(9242),o=a(3396);const r={class:"main"};function s(e,t,a,n,s,i){const u=(0,o.up)("header-component"),l=(0,o.up)("router-view"),c=(0,o.up)("footer-component");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u),(0,o._)("div",r,[(0,o.Wm)(l)]),(0,o.Wm)(c)])}var i=a(7139);const u=e=>((0,o.dD)("data-v-3e5eb45c"),e=e(),(0,o.Cn)(),e),l={id:"header"},c=u((()=>(0,o._)("h1",null,"MyBlog",-1))),d=(0,o.Uk)(" Welcome,  "),f={id:"nav"},m={key:0},p=(0,o.Uk)("Home"),g=(0,o.Uk)("Login"),v=(0,o.Uk)("Register"),h={key:1},b=(0,o.Uk)("Home"),w=(0,o.Uk)("About"),y=(0,o.Uk)("Logout");function _(e,t,a,r,s,u){const _=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",l,[c,(0,o.wy)((0,o._)("h2",null,[d,(0,o._)("span",null,(0,i.zw)(e.userName)+"!",1)],512),[[n.F8,e.isAuth]]),(0,o._)("nav",f,[(0,o._)("ul",null,[e.isAuth?((0,o.wg)(),(0,o.iD)("li",h,[(0,o.Wm)(_,{to:"/"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(_,{to:"/about"},{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(_,{to:"",onClick:u.logout},{default:(0,o.w5)((()=>[y])),_:1},8,["onClick"])])):((0,o.wg)(),(0,o.iD)("li",m,[(0,o.Wm)(_,{to:"/"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(_,{to:"/login"},{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(_,{to:"/register"},{default:(0,o.w5)((()=>[v])),_:1})]))])])])}var k=a(1461),S=a.n(k),C={data:()=>({isAuth:!1,userName:""}),methods:{logout(){console.log("Logout success. Storage was clear!"),localStorage.clear(),this.$router.go()}},mounted(){S().once("login",(()=>{this.isAuth=!0,this.userName=JSON.parse(localStorage.getItem("auth")).userName,console.log("Custom event!",this.userName,"login success")}))},created(){null!=localStorage.getItem("auth")&&(this.isAuth=!0,this.userName=JSON.parse(localStorage.getItem("auth")).userName)}},A=a(89);const D=(0,A.Z)(C,[["render",_],["__scopeId","data-v-3e5eb45c"]]);var E=D;const L=e=>((0,o.dD)("data-v-ac8f2682"),e=e(),(0,o.Cn)(),e),N={id:"footer"},I=L((()=>(0,o._)("h3",null,[(0,o.Uk)("© Copyright - "),(0,o._)("span",null,"2022"),(0,o.Uk)("!")],-1))),O=[I];function U(e,t,a,n,r,s){return(0,o.wg)(),(0,o.iD)("div",N,O)}var W={};const j=(0,A.Z)(W,[["render",U],["__scopeId","data-v-ac8f2682"]]);var T=j,x={data:()=>({}),components:{HeaderComponent:E,FooterComponent:T},created(){null==localStorage.getItem("auth")&&this.$router.push("/").catch((()=>{}))},beforeMount(){window.addEventListener("beforeunload",(e=>{if(null!=localStorage.getItem("auth"))return e.returnValue,void e.preventDefault()}))}};const B=(0,A.Z)(x,[["render",s]]);var P=B,R=a(678);const M=e=>((0,o.dD)("data-v-c08fb7e8"),e=e(),(0,o.Cn)(),e),q={id:"home"},F={key:0,class:"secondTabLinks"},Z={class:"background-container"},$=M((()=>(0,o._)("h1",null,"Welcome to MyBlog!",-1))),H={class:"auth-buttons"},Y=(0,o.Uk)("Login"),z=(0,o.Uk)("Register"),G=(0,o.uE)('<div class="content" data-v-c08fb7e8><h2 data-v-c08fb7e8>Blogging</h2><h2 data-v-c08fb7e8>Blogging</h2><div class="waviy" data-v-c08fb7e8><span style="--i:1;" data-v-c08fb7e8>.</span><span style="--i:2;" data-v-c08fb7e8>.</span><span style="--i:3;" data-v-c08fb7e8>.</span></div></div><div class="arrows" data-v-c08fb7e8>_________</div>',2),J=[G];function K(e,t,a,r,s,u){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",q,[e.isAuth?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",F,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.buttons,((e,a)=>((0,o.wg)(),(0,o.iD)("a",{key:a,onClick:t[0]||(t[0]=(...e)=>u.onCurrentLink&&u.onCurrentLink(...e))},(0,i.zw)(e),1)))),128))])),(0,o.wy)((0,o._)("section",Z,[$,(0,o._)("div",H,[(0,o.Wm)(l,{to:"/login"},{default:(0,o.w5)((()=>[Y])),_:1}),(0,o.Wm)(l,{to:"/register"},{default:(0,o.w5)((()=>[z])),_:1})])],512),[[n.F8,e.isAuth]]),(0,o._)("section",{class:"welcome",style:(0,i.j5)(`${e.isAuth?null:"display:block"}`)},J,4)])}var X={data:()=>({isAuth:null==localStorage.getItem("auth"),buttons:["Posts","Create","Statistics"],isShowAll:!1}),methods:{onCurrentLink(e){const t=e.target.textContent.toLowerCase();this.$router.push(t)}}};const V=(0,A.Z)(X,[["render",K],["__scopeId","data-v-c08fb7e8"]]);var Q=V;const ee=e=>((0,o.dD)("data-v-78c6f706"),e=e(),(0,o.Cn)(),e),te={id:"login"},ae=ee((()=>(0,o._)("h2",{class:"message"},null,-1))),ne={class:"color"},oe={class:"login-form"},re=ee((()=>(0,o._)("h1",null,"Login",-1))),se=ee((()=>(0,o._)("label",{for:"email"},"Email",-1))),ie=ee((()=>(0,o._)("input",{type:"text",name:"email",placeholder:"required",value:"koko4@abv.bg"},null,-1))),ue=ee((()=>(0,o._)("label",{for:"password"},"Password",-1))),le=ee((()=>(0,o._)("input",{type:"password",name:"password",placeholder:"6 symbols minlength",value:"111111"},null,-1))),ce={id:"btn"},de=ee((()=>(0,o._)("button",{id:"btnSubmit"},"Login",-1))),fe=(0,o.Uk)("Don't have an account?");function me(e,t,a,r,s,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",te,[ae,(0,o._)("div",ne,[(0,o._)("div",oe,[re,(0,o._)("form",{id:"form",onSubmit:t[1]||(t[1]=(0,n.iM)(((...e)=>i.submitLogin&&i.submitLogin(...e)),["prevent"]))},[se,ie,ue,le,(0,o._)("div",ce,[de,(0,o._)("button",{onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>i.btnReset&&i.btnReset(...e)),["prevent"])),style:{color:"red",background:"lightpink"}}," Reset ")]),(0,o.Wm)(u,{to:"/register",class:"option"},{default:(0,o.w5)((()=>[fe])),_:1})],32)])])])}var pe=a(7301);const ge=(e,t)=>(0,pe.e5)((0,pe.v0)(),e,t).then((e=>{const{uid:t,email:a}=e.user;console.log(`Success login!\nYou id: ${t}\nYou email: ${a}`);let n=a.split("@")[0];return n=n.charAt(0).toUpperCase()+n.slice(1),localStorage.setItem("auth",JSON.stringify({uid:t,email:a,userName:n})),"Success"})).catch((e=>e.message));var ve=ge,he={methods:{btnReset(e){e.target.parentElement.parentElement.reset()},submitLogin(e){let t=new FormData(e.target),a=t.get("email"),n=t.get("password");/\w{2,}@\w{2,}\.\w{2,}/.test(a)&&n.length>5&&(e.target.reset(),ve(a,n).then((e=>{document.querySelector("#btnSubmit").style.color="green",document.getElementsByClassName("message")[0].textContent=e,"Success"==e?(S().emit("login"),setTimeout((()=>{this.$router.push("/")}),2e3)):document.querySelector("#btnSubmit").style.color="white"})))}}};const be=(0,A.Z)(he,[["render",me],["__scopeId","data-v-78c6f706"]]);var we=be;const ye=e=>((0,o.dD)("data-v-421c1b39"),e=e(),(0,o.Cn)(),e),_e={id:"register"},ke=ye((()=>(0,o._)("h2",{class:"message"},null,-1))),Se={class:"color"},Ce={class:"register-form"},Ae=ye((()=>(0,o._)("h1",null,"Register",-1))),De=(0,o.uE)('<label for="email" data-v-421c1b39>Email</label><input type="text" name="email" placeholder="required" data-v-421c1b39><label for="password" data-v-421c1b39>Password</label><input type="password" name="password" placeholder="6 symbols minlength" data-v-421c1b39><label for="repeat-password" data-v-421c1b39>Repeat Password</label><input type="password" name="repeatPassword" placeholder="passwords fields must be equal" data-v-421c1b39><button id="btnSubmit" data-v-421c1b39>Submit</button>',7),Ee=(0,o.Uk)("Already have an account?");function Le(e,t,a,r,s,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",_e,[ke,(0,o._)("div",Se,[(0,o._)("div",Ce,[Ae,(0,o._)("form",{id:"form",onSubmit:t[0]||(t[0]=(0,n.iM)(((...e)=>i.submitRegistration&&i.submitRegistration(...e)),["prevent"]))},[De,(0,o.Wm)(u,{to:"/login",class:"option"},{default:(0,o.w5)((()=>[Ee])),_:1})],32)])])])}const Ne=async(e,t)=>(0,pe.Xb)((0,pe.v0)(),e,t).then((e=>{const{uid:t,email:a}=e.user;return console.log("You register was successful",t,a),"You register was successful"})).catch((e=>{const t=e.code,a=e.message;return console.log("Error register: ",t," - ",a),e.message}));var Ie=Ne,Oe={data:()=>({}),methods:{submitRegistration(e){const[t,a,n]=e.target.querySelectorAll("input");/\w{2,}@\w{2,}\.\w{2,}/.test(t.value)&&a.value.length>5&&a.value==n.value&&(document.getElementById("btnSubmit").style.color="green",Ie(t.value,a.value).then((t=>{document.getElementsByClassName("message")[0].textContent=t,"You register was successful"==t&&setTimeout((()=>{e.target.reset(),this.$router.push("/login")}),3500),setTimeout((()=>{document.getElementById("btnSubmit").style.color="white",document.getElementsByClassName("message")[0].textContent=""}),3e3)})))}}};const Ue=(0,A.Z)(Oe,[["render",Le],["__scopeId","data-v-421c1b39"]]);var We=Ue,je=a.p+"img/0.f2cc21f8.png",Te=a.p+"img/1.453f3315.png",xe=a.p+"img/2.b3226e9f.png",Be=a.p+"img/3.d34c38ee.png";const Pe={class:"main"},Re=(0,o.uE)('<div class="pictures" data-v-02399716><img src="'+je+'" data-v-02399716><img src="'+Te+'" data-v-02399716><img src="'+xe+'" data-v-02399716><img src="'+Be+'" data-v-02399716></div><div class="before-footer" data-v-02399716><h2 data-v-02399716>Get connected with us on social networks!</h2></div><div class="footer" data-v-02399716><a href="#" class="fa fa-facebook" data-v-02399716></a><a href="#" class="fa fa-twitter" data-v-02399716></a><a href="#" class="fa fa-google" data-v-02399716></a><a href="#" class="fa fa-linkedin" data-v-02399716></a><a href="#" class="fa fa-youtube" data-v-02399716></a><a href="#" class="fa fa-instagram" data-v-02399716></a><a href="#" class="fa fa-pinterest" data-v-02399716></a><a href="#" class="fa fa-snapchat-ghost" data-v-02399716></a><a href="#" class="fa fa-skype" data-v-02399716></a><a href="#" class="fa fa-android" data-v-02399716></a><a href="#" class="fa fa-dribbble" data-v-02399716></a><a href="#" class="fa fa-vimeo" data-v-02399716></a><a href="#" class="fa fa-tumblr" data-v-02399716></a><a href="#" class="fa fa-vine" data-v-02399716></a><a href="#" class="fa fa-foursquare" data-v-02399716></a><a href="#" class="fa fa-stumbleupon" data-v-02399716></a><a href="#" class="fa fa-flickr" data-v-02399716></a><a href="#" class="fa fa-yahoo" data-v-02399716></a><a href="#" class="fa fa-reddit" data-v-02399716></a><a href="#" class="fa fa-rss" data-v-02399716></a></div>',3),Me=[Re];function qe(e,t){return(0,o.wg)(),(0,o.iD)("div",Pe,Me)}const Fe={},Ze=(0,A.Z)(Fe,[["render",qe],["__scopeId","data-v-02399716"]]);var $e=Ze;const He=[{path:"/",name:"home",component:Q},{path:"/login",name:"login",component:we},{path:"/register",name:"register",component:We},{path:"/about",name:"about",component:$e},{path:"/posts",name:"posts",component:()=>a.e(151).then(a.bind(a,9151))},{path:"/posts/edit",name:"edit",component:()=>a.e(521).then(a.bind(a,7521))},{path:"/posts/delete",component:()=>a.e(476).then(a.bind(a,5476))},{path:"/create",name:"create",component:()=>a.e(637).then(a.bind(a,637))},{path:"/statistics",name:"statistics",component:()=>a.e(611).then(a.bind(a,3611))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>a.e(644).then(a.bind(a,2644))}],Ye=(0,R.p7)({history:(0,R.PO)("/"),routes:He});var ze=Ye,Ge=a(5728);let Je;(0,pe.v0)().onAuthStateChanged((async e=>{Je||(0,n.ri)(P).use(ze,Ge.f).mount("#app")}))},5728:function(e,t,a){a.d(t,{db:function(){return i},f:function(){return s}});var n=a(4275),o=a(6035);const r={apiKey:"AIzaSyDLLNHDIyaMulTpssOUevsxrXGxCGtSWOU",authDomain:"routingbase-21148.firebaseapp.com",databaseURL:"https://routingbase-21148-default-rtdb.europe-west1.firebasedatabase.app",projectId:"routingbase-21148",storageBucket:"routingbase-21148.appspot.com",messagingSenderId:"471268967740",appId:"1:471268967740:web:b446f4ac7de607737d4a39"},s=(0,n.ZF)(r),i=(0,o.ad)(s)}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{151:"909f9372",476:"39d36614",521:"81607c0d",611:"a6f56410",637:"68175264",644:"95dc67b2"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{151:"e7b45479",476:"dc93ce61",521:"42202d15",611:"0af5100b",637:"9455d3ca",644:"d7bb7ceb"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="blog_web_spa_vue3:";a.l=function(n,o,r,s){if(e[n])e[n].push(o);else{var i,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[o];var f=function(t,a){i.onerror=i.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e=function(e,t,a,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)a();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,o.parentNode.removeChild(o),n(u)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){o=s[n],r=o.getAttribute("data-href");if(r===e||r===t)return o}},n=function(n){return new Promise((function(o,r){var s=a.miniCssF(n),i=a.p+s;if(t(s,i))return o();e(n,i,o,r)}))},o={143:0};a.f.miniCss=function(e,t){var a={151:1,476:1,521:1,611:1,637:1,644:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var s=a.p+a.u(t),i=new Error,u=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,o[1](i)}};a.l(s,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],u=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(u)var c=u(a)}for(t&&t(n);l<s.length;l++)r=s[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self["webpackChunkblog_web_spa_vue3"]=self["webpackChunkblog_web_spa_vue3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6003)}));n=a.O(n)})();
//# sourceMappingURL=app.dc0f4ee2.js.map