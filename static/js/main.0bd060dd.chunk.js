(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{38:function(e,t,a){e.exports=a(77)},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),i=a(2),o=a(15),s=a.n(o),u=function(){return r.a.createElement("div",{className:"markets"},r.a.createElement("h1",{style:{color:"white",textAlign:"center",fontStyle:"italic"}},'"MaRkeTs ExPerT"'),r.a.createElement(m,null))};function m(){return r.a.createElement(s.a,{symbol:"NASDAQ:TSLA",theme:o.Themes.DARK,locale:"fr"})}var p=a(1),d=a.n(p),v=a(4),E=a(33),g=a.n(E),f=a(13),h=a.n(f),b="https://ant-api-prod-2020.herokuapp.com",y="\ud83d\udc1c- LOL!",w=a(16),x=a(17),k=a.n(x),j=function(e){var t=["public","private"].map((function(e){return h()(e,"ipv4")}));return console.log("Public & Private Ips: ",t.join(", ")),function(a,n,r){return e(a,n,Object(w.a)({},r,{ips:t}))}}((function(e,t,a){console.log("WE IN HERE!");var n=a?function(e){var t=e.ips,a=e.token,n=e.payload,r=null!==t&&void 0!==t?t:[],l=Object(i.a)(r,2),c=l[0],o=l[1];console.log("MY PAYLOAD ",n);var s=a&&{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},u=Object(w.a)({},n,{PRIV_IP:c,PUB_IP:o});return console.log("BASE URL: ",b),{baseURL:b,headers:s,data:u}}(a):{baseURL:b};if("get"===e)return k.a.get(t,n);var r=n.data;return k.a.post(t,r,n)})),N=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n,r,l,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,l=h()("public","ipv4"),e.next=4,j("post","/login",{payload:{username:n,password:r}});case 4:if(c=e.sent,i=null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.token){e.next=8;break}throw Error("Something Went Wrong!");case 8:return localStorage.setItem(y,i),e.abrupt("return",{ip:l,username:n});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){localStorage.removeItem(y)},S=function(){var e=Object(v.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem(y),a=function(e){try{return g()(e).expiration<Date.now()/1e3}catch(t){return!1}},e.abrupt("return",!!t&&!a(t));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=null!==(t=localStorage.getItem(y))&&void 0!==t?t:"",e.next=4,j("get","/fax",{token:a});case 4:if(401!=(n=e.sent).status){e.next=8;break}return O(),e.abrupt("return",null);case 8:return e.abrupt("return",n.data);case 11:if(e.prev=11,e.t0=e.catch(0),401!=(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)){e.next=16;break}return O(),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),I=Object(n.createContext)(null),A=function(e){var t=e.children,a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),m=u[0],p=u[1];return r.a.createElement(I.Provider,{value:{user:c,email:m,reset:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";o(e),p(t)}}},t)},P=function(){var e=Object(n.useContext)(I);if(!e)throw new Error("\ud83d\udc1c, idk!");return e},R=a(34),B=a.n(R),L=function(){var e=P(),t=e.user,a=e.reset,l=Object(n.useState)(null),c=Object(i.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),p=m[0],d=m[1];Object(n.useEffect)((function(){T().catch((function(){return a("")})).then(s)}),[p]);var v=function(e){var t=[e.clientX,e.clientY],a=t[0],n=t[1],r=document.createElement("span");r.innerText=p?"\ud83d\udcb8":"\ud83d\udc1c",r.setAttribute("class","rain"),r.style.left=a+"px",r.style.top=n+"px",document.body.appendChild(r)};return Object(n.useEffect)((function(){return window.addEventListener("click",v),function(){return window.removeEventListener("click",v)}}),[p,v]),r.a.createElement("div",{style:{backgroundColor:"white",padding:60}},r.a.createElement("div",{style:C.photo},r.a.createElement("img",{style:C.mask,src:"mask.png",placeholder:"mr mask"})),r.a.createElement("div",{style:C.main},r.a.createElement("h1",{style:C.text},t?"Welcome, IPv4-".concat(t," "):"Ant App! ",r.a.createElement("span",{role:"img"},"\ud83d\udc1c"))),r.a.createElement("h3",null,"Money ",p?r.a.createElement("span",null,"\u2705"):r.a.createElement("span",null,"\u274c")),r.a.createElement("div",{style:{marginTop:20,marginBottom:20}},r.a.createElement(B.a,{id:"cheese-status",defaultChecked:p,onChange:function(){return d(!p)}})),r.a.createElement("h4",null,"About"),o&&r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{style:{}},r.a.createElement("div",{style:{marginTop:100,display:"flex"}},r.a.createElement("div",{style:{transform:"rotate(-15deg)",alignItems:"center",margin:"auto",marginRight:0}},r.a.createElement("img",{style:C.dog,src:"pit.png",placeholder:"Wu Tang Forever"})),r.a.createElement("div",{style:{transform:"rotate(15deg)",alignItems:"center",margin:"auto"}},r.a.createElement("img",{style:C.dog,src:"dober.png",placeholder:"Wu Tang Forever"})))))},C={main:{display:"flex",alignItems:"center"},text:{margin:"auto"},wu:{display:"flex",alignItems:"center",margin:"auto",width:300,height:300},wuButton:{alignItems:"center",margin:60,marginLeft:"auto",width:180},photo:{},mask:{width:200,height:200,borderRadius:100,borderWidth:2,borderStyle:"solid"},dog:{width:300,height:300,borderRadius:20,flex:1}},W=a(37),U=function(e){var t;return(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.statusText)?{status:e.response.status,msg:e.response.statusText}:(null===e||void 0===e?void 0:e.response)?{msg:String(e.response)}:{msg:"Unkown Error - Try Again"}},M=function(){var e=Object(W.a)(),t=e.register,a=e.handleSubmit,l=e.errors,c=P().reset,o=Object(n.useState)(null),s=Object(i.a)(o,2),u=s[0],m=s[1],p=Object(n.useState)(!1),E=Object(i.a)(p,2),g=E[0],f=E[1],h=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n,r,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.password,n=t.email,f(!0),a){e.next=6;break}return m({msg:"Must Supply a Password!"}),f(!1),e.abrupt("return");case 6:return e.prev=6,e.next=9,N({password:a,username:n});case 9:r=e.sent,l=r.ip,c(l,n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),m(U(e.t0));case 17:return e.prev=17,f(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[6,14,17,20]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"form-group"},r.a.createElement("h1",{style:{textAlign:"center",fontFamily:"Bebas Neue, cursive"}},"THE ANT APP!"),u&&r.a.createElement("div",{className:"errorBox"},u.status&&r.a.createElement("h3",null,u.status),r.a.createElement("p",null,u.msg)),r.a.createElement("form",{onSubmit:a(h)},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",id:"email",ref:t({required:!0}),name:"email",className:"form-control"}),l.email&&"required"===l.email.type&&r.a.createElement(D,null),r.a.createElement("br",null),r.a.createElement("label",null,"Password ",r.a.createElement("span",null,"\ud83e\udd2b")),r.a.createElement("input",{type:"text",id:"pass",ref:t({required:!0}),name:"password",className:"form-control"}),l.password&&"required"===l.password.type&&r.a.createElement(D,null),r.a.createElement("br",null),g?r.a.createElement("div",{className:"loader"}):r.a.createElement("input",{type:"submit",className:"btn btn-primary"})))},D=function(){return r.a.createElement("div",{style:{marginTop:20}},r.a.createElement("span",null,"This is required \u274c"))},q=function(e){var t=e.children;return r.a.createElement("div",{style:F.container},r.a.createElement("div",{style:F.main},t))},F={container:{width:"100%",height:"100%"},main:{margin:"auto",marginTop:150,maxWidth:500}},H=a(11),Y=function(e){var t=e.children;return r.a.createElement("div",{style:K.container,className:"xyz"},r.a.createElement("div",{className:"navWrap"},r.a.createElement("nav",{style:K.nav,className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("button",{style:{border:"transparent",marginRight:10,paddingBottom:10},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(H.b,{onClick:function(){return O},to:"/login",className:"nav-link active"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",{style:{color:"white"}},"Logout"))),r.a.createElement(H.b,{to:"/",className:"nav-link active"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",{style:{color:"white"}},"Home"))),r.a.createElement(H.b,{to:"/markets",className:"nav-link active"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",{style:{color:"white"}},"Markets"))),r.a.createElement("a",{href:"https://www.linkedin.com/in/antony-tokarr-9075baab/",className:"nav-link active"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",null,r.a.createElement("span",{role:"img"},"\ud83d\udc1c \ud83d\udc68\u200d\ud83d\udcbb")))))))),r.a.createElement("div",{style:K.main},t))},K={container:{width:"100%",height:"100%"},main:{marginTop:70,marginBottom:70,marginLeft:190,marginRight:190},nav:{paddingLeft:70,paddingTop:20,paddingBotton:20}},Q=a(8),z=function(e){var t,a=e.type;return r.a.createElement("div",null,r.a.createElement("p",{className:"unsupported"},r.a.createElement("h2",{style:{fontFamily:"Raleway, sans-serif",marginTop:0,paddingTop:0}},"Sorry, ",null!==(t=function(e){if(!e)return e;if(e.length<=1)return e.toUpperCase();return e.split("-").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join(" ")}(a))&&void 0!==t?t:"your platform"," is Unsupported ",r.a.createElement("span",null,"\ud83d\ude22"))),r.a.createElement("div",{style:{width:"100%",height:0,paddingBottom:"75%",position:"relative"}},r.a.createElement("iframe",{src:"https://giphy.com/embed/l4Epjcpr05QD1oebK",width:"100%",height:"100%",style:{position:"absolute",borderWidth:1,borderStyle:"solid",borderRadius:40},frameBorder:"0",className:"giphy-embed",allowFullScreen:!0})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://giphy.com/gifs/splat-nicksplat-are-you-afraid-of-the-dark-l4Epjcpr05QD1oebK"},"via GIPHY")))},J=a(20),_=(a(76),function(){var e=P().user,t=Object(n.useState)(),a=Object(i.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){S().then(c)}),[e]),J.isMobile?r.a.createElement(q,null,r.a.createElement(z,{type:"mobile"})):J.isIE?r.a.createElement(q,null,r.a.createElement(z,{type:"internet-explorer"})):void 0===l?null:l?r.a.createElement(Y,null,r.a.createElement(Q.d,null,r.a.createElement(Q.b,{exact:!0,path:"/markets",component:u}),r.a.createElement(Q.b,{exact:!0,path:"/home",component:L}),r.a.createElement(Q.b,{path:"*",render:function(){return r.a.createElement(L,null)}}))):r.a.createElement(q,null,r.a.createElement(Q.d,null,r.a.createElement(Q.b,{path:"/login",component:M}),r.a.createElement(Q.a,{from:"*",to:"/login"})))}),G=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(H.a,null,r.a.createElement(A,null,r.a.createElement(_,null))))};c.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0bd060dd.chunk.js.map