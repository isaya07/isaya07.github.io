import{c as H,a as I,o as l,b as d,d as t,e as v,n as g,f as E,r as k,g as O,h as M,i as u,w as _,u as G,F as N,j as S,t as Y,p as D,k as F,l as z,m as Z,v as K,q as U,R as L,s as W,x as X,y as J,T as Q,z as ii,A as ei,B as ai,V as ti}from"./vendor.dbf499e9.js";const oi=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};oi();const ni="modulepreload",C={},ri="/",x=function(a,o){return!o||o.length===0?a():Promise.all(o.map(n=>{if(n=`${ri}${n}`,n in C)return;C[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":ni,e||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),e)return new Promise((b,c)=>{s.addEventListener("load",b),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>a())},P=[{name:"Acceuil",path:"/",alias:"/acceuil",icon:"MyHome",component:()=>x(()=>import("./MainPage.3d08030b.js"),["assets/MainPage.3d08030b.js","assets/MainPage.18c9f743.css","assets/vendor.dbf499e9.js","assets/ContentBox.0bece590.js"]),meta:{description:"Novelec entreprise d'\xE9lectricit\xE9 g\xE9n\xE9rale et tertiaire, d\xE9pannage, domotique, r\xE9novation",title:"Acceuil"}},{name:"Electricit\xE9",path:"/electricite",icon:"HomeLightningBoltOutline",component:()=>x(()=>import("./ElectricitePage.46381e7a.js"),["assets/ElectricitePage.46381e7a.js","assets/BandeauItem.20f85ac1.js","assets/MainPage.18c9f743.css","assets/vendor.dbf499e9.js","assets/ContentBox.0bece590.js"]),meta:{description:"Novelec entreprise d'\xE9lectricit\xE9 g\xE9n\xE9rale et tertiaire, d\xE9pannage, r\xE9novation",title:"Electricit\xE9"}},{name:"Plomberie",path:"/plomberie",icon:"HomePlumbing",component:()=>x(()=>import("./PlomberiePage.aed7d2cb.js"),["assets/PlomberiePage.aed7d2cb.js","assets/BandeauItem.20f85ac1.js","assets/MainPage.18c9f743.css","assets/vendor.dbf499e9.js","assets/ContentBox.0bece590.js"]),meta:{description:"Sp\xE9cialis\xE9 en domotique l'entreprise Novelec r\xE9alise pour vous un habit\xE2t simple, fonctionnel et connect\xE9",title:"Plomberie"}},{name:"Domotique",path:"/domotique",icon:"HomeAssistant",component:()=>x(()=>import("./DomotiquePage.01e9d9f1.js"),["assets/DomotiquePage.01e9d9f1.js","assets/BandeauItem.20f85ac1.js","assets/MainPage.18c9f743.css","assets/vendor.dbf499e9.js","assets/ContentBox.0bece590.js"]),meta:{description:"Sp\xE9cialis\xE9 en domotique l'entreprise Novelec r\xE9alise pour vous un habit\xE2t simple, fonctionnel et connect\xE9",title:"Domotique"}},{name:"Pompe a Chaleur",path:"/pompeachaleur",icon:"HeatPumpOutline",component:()=>x(()=>import("./PompePage.dbd6861d.js"),["assets/PompePage.dbd6861d.js","assets/BandeauItem.20f85ac1.js","assets/MainPage.18c9f743.css","assets/vendor.dbf499e9.js","assets/ContentBox.0bece590.js"]),meta:{description:"Sp\xE9cialis\xE9 en domotique l'entreprise Novelec r\xE9alise pour vous un habit\xE2t simple, fonctionnel et connect\xE9",title:"Pompe a Chaleur"}},{name:"Contact",path:"/contact",icon:"EmailOutline",component:()=>x(()=>import("./ContactPage.3acaba92.js"),["assets/ContactPage.3acaba92.js","assets/vendor.dbf499e9.js"]),meta:{description:"Nous contact\xE9, nous localis\xE9",title:"Contact"}}];function T(i=[],a=[]){for(let o=0,n=i.length;o<n;o++){let e=i[o];e.path&&a.push(e),e.component||T(e.children,a)}return a}const V=T(P);V.push({name:"Dolibarr",path:"/dolibarr",beforeEnter(){location.href="http://192.168.1.52"}});const y=H({history:I("/"),linkActiveClass:"is-active",routes:V,scrollBehavior(){return new Promise(i=>{setTimeout(()=>{i({top:0})},500)})}});function B(i,a,o){const n=document.head.querySelector(i);o==null?n.removeAttribute(a):n.setAttribute(a,o)}function w(i,a){B(`meta[${i}]`,"content",a)}y.beforeEach((i,a,o)=>{document.title=i.meta.title,w('itemprop="name"',i.meta.title),w('property="og:title"',i.meta.title),w('name="description"',i.meta.description),w('itemprop="description"',i.meta.description),w('property="og:description"',i.meta.description),B('link[rel="canonical"]',"href","http://www.novelec43.fr"+i.fullPath),w('property="og:url"',"http://www.novelec43.fr"+i.fullPath),o()});var si="/assets/logo.51524099.webp";const li={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},di=t("path",{fill:"currentColor",d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"},null,-1),ci=[di];function bi(i,a){return l(),d("svg",li,ci)}var fi={name:"mdi-email-outline",render:bi};const mi={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ui=t("path",{fill:"currentColor",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14v14m-7-1c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.75-2.08c-.55-.1-1.05-.32-1.5-.62l1.5-1.5v2.12m1.5 0v-2.11l1.5 1.5c-.45.3-.95.51-1.5.61m2.56-1.67l-1.5-1.5h2.11c-.1.55-.31 1.05-.61 1.5m.61-3h-2.11l1.5-1.5c.3.45.51.95.61 1.5m-3.17-3.17c.55.1 1.05.32 1.5.62l-1.5 1.5V8.08M12 11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-.75-2.92v2.11l-1.5-1.5c.45-.3.95-.51 1.5-.61M8.69 9.75l1.5 1.5H8.08c.1-.55.31-1.05.61-1.5m1.5 3l-1.5 1.5c-.3-.44-.51-.95-.62-1.5h2.12Z"},null,-1),hi=[ui];function pi(i,a){return l(),d("svg",mi,hi)}var vi={name:"mdi-heat-pump-outline",render:pi};const gi={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xi=t("path",{fill:"currentColor",d:"M21.8 13H20v8h-7v-3.33l2.79-2.79l.71.12a2.1 2.1 0 1 0 0-4.2a2.1 2.1 0 0 0-2.1 2.1l.1.71l-1.5 1.52V9.65c.66-.36 1.1-1.05 1.1-1.85A2.1 2.1 0 0 0 12 5.7a2.1 2.1 0 0 0-2.1 2.1c0 .8.44 1.49 1.1 1.85v5.48l-1.5-1.52l.1-.71a2.1 2.1 0 0 0-2.1-2.1a2.1 2.1 0 0 0-2.1 2.1A2.1 2.1 0 0 0 7.5 15l.71-.12L11 17.67V21H4v-8H2.25c-.42 0-.83 0-.83-.21c.01-.22.43-.64.86-1.07L11 3c.33-.33.67-.67 1-.67c.33 0 .67.34 1 .67l4 4V6h2v3l2.78 2.78c.4.4.81.81.82 1.02c0 .2-.4.2-.8.2M7.5 12a.9.9 0 0 1 .9.9a.9.9 0 0 1-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9m9 0c.5 0 .9.4.9.9s-.4.9-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9M12 6.9c.5 0 .9.4.9.9s-.4.9-.9.9s-.9-.4-.9-.9s.4-.9.9-.9Z"},null,-1),wi=[xi];function ki(i,a){return l(),d("svg",gi,wi)}var yi={name:"mdi-home-assistant",render:ki};const zi={width:"1.2em",height:"1.2em",viewBox:"0 0 24 24"},_i=t("path",{fill:"currentColor",d:"m5 20v-8h-3l10-9 10 9h-3v8h-14m7-14.31-5 4.5v7.81h10v-7.81l-5-4.5"},null,-1),Gi=t("path",{fill:"currentColor",d:"m15.082 13.817v0.83751h-1.2563v-0.72026l1.2563-0.11725m0-0.41875c0-0.46063-0.41875-0.83751-0.92126-0.83751h-2.8475v-0.41875h-2.0938v4.6063h2.0938v-2.969l3.7688-0.38106m-5.8625-1.675h2.0938v-0.83751l2.2445-0.74957c0.15913-0.05025 0.268-0.201 0.268-0.3685 0-0.27219-0.268-0.46063-0.52344-0.3685l-4.0828 1.4866z","stroke-width":".41875"},null,-1),ji=[_i,Gi];function qi(i,a){return l(),d("svg",zi,ji)}var $i={name:"my-home-plumbing",render:qi};const Li={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ci=t("path",{fill:"currentColor",d:"M5 20v-8H2l10-9l10 9h-3v8H5m7-14.31l-5 4.5V18h10v-7.81l-5-4.5M11.5 18v-4H9l3.5-7v4H15l-3.5 7Z"},null,-1),Ai=[Ci];function Ei(i,a){return l(),d("svg",Li,Ai)}var Mi={name:"mdi-home-lightning-bolt-outline",render:Ei};const Ni={width:"1.2em",height:"1.2em",viewBox:"0 0 24 24"},Pi=t("path",{fill:"currentColor",d:"m16.084 2.2227c-0.96338 0-0.11716 0.00228-1.2891 0.00228-3.42e-4 0.55729-6.84e-4 1.7017-1e-3 2.2591l-2.9008-1.7064 0.0014 1.8142 9.7588 5.5323c0.87533 0.32343 1.4413-1.0424 0.59722-1.3465l-6.1647-3.6622c-4.19e-4 -0.96422-9.26e-4 -1.9286-0.0013-2.8928zm-4.5544 0.55627c-3.5485 2.0589-7.0905 4.1288-10.636 6.1928-0.48557 0.75141 0.5881 1.5425 1.2045 0.99439l9.4311-5.3742zm4.1657 5.2932c-0.83077-0.042091-0.10162 1.008-0.5462 1.4518-0.5133 1.3259-1.7716 2.1325-2.5056 3.3198-0.75016 1.0971-1.6768 2.4111-1.2678 3.8048 0.48025 0.60466 0.71107 1.0099 0.49184 1.7878-1.0111-0.50057-0.11928-1.7478-0.932-2.4969-0.82044-0.9968-2.1072-1.4044-3.0923-2.1887-0.42726-0.2162-0.79381-1.9193-1.0851-0.99884 0.093339 1.8273 0.28111 3.8621 1.5585 5.2845 0.62179 0.68744 1.6508 0.89486 2.4795 0.45506 0.80432-0.18246 0.9047 1.4629 1.4267 1.5786 0.87997 0.06189 0.2301-0.64862 0.34159-1.2047-0.05786-0.69435 0.01964-1.2314 0.797-1.1904 1.7417-0.5935 3.0206-2.2331 3.1764-4.0669 0.21969-1.876-0.18489-3.783-0.84266-5.5358zm-11.031 1.0294c-0.50954 0.33692-1.0197 0.67296-1.5295 1.0095v10.042h1.4902zm14.094 0c0.01387 3.6838 0.02717 7.3676 0.04065 11.051h1.4902v-10.042zm2.095 11.74-18.242 0.0073c-0.12954 0.34942-0.12403 0.45031-0.043612 0.82389 5.9075-0.0019 12.398-0.0039 18.305-0.0059 0.06819-0.27295 0.0512-0.55262-0.01953-0.8253z","stroke-width":".41875"},null,-1),Ti=[Pi];function Vi(i,a){return l(),d("svg",Ni,Ti)}var Bi={name:"my-home",render:Vi};const Ri={__name:"IconItem",props:{icon:{type:String,default:""},style:{type:String,default:null}},setup(i){return(a,o)=>{const n=Bi,e=Mi,r=$i,s=yi,b=vi,c=fi;return i.icon=="MyHome"?(l(),v(n,{key:0,style:g(i.style)},null,8,["style"])):i.icon=="HomeLightningBoltOutline"?(l(),v(e,{key:1,style:g(i.style)},null,8,["style"])):i.icon=="HomePlumbing"?(l(),v(r,{key:2,style:g(i.style)},null,8,["style"])):i.icon=="HomeAssistant"?(l(),v(s,{key:3,style:g(i.style)},null,8,["style"])):i.icon=="HeatPumpOutline"?(l(),v(b,{key:4,style:g(i.style)},null,8,["style"])):i.icon=="EmailOutline"?(l(),v(c,{key:5,style:g(i.style)},null,8,["style"])):E("",!0)}}};var $=(i,a)=>{const o=i.__vccOpts||i;for(const[n,e]of a)o[n]=e;return o};const j=i=>(D("data-v-2542518e"),i=i(),F(),i),Hi={class:"navbar-brand left-burger"},Ii=j(()=>t("span",{"aria-hidden":"true"},null,-1)),Oi=j(()=>t("span",{"aria-hidden":"true"},null,-1)),Si=j(()=>t("span",{"aria-hidden":"true"},null,-1)),Yi=[Ii,Oi,Si],Di=["src"],Fi=j(()=>t("button",{class:"button is-danger is-rounded is-responsive"},[t("strong",null,[t("a",{class:"has-text-white",href:"tel:+33686415953"},"06 86 41 59 53")])],-1)),Zi=[Fi],Ki={class:"navbar-start is-justify-content-center"},Ui={key:0,class:"icon is-nav-icon has-text-danger is-size-4 is-size-3-widescreen"},Wi={class:"is-size-6 is-size-5-widescreen"},Xi={__name:"NavBar",setup(i){const a=P,o=k(null),n=k(null),e=k(null),r=k(null);let s=!1;function b(){s=!s,n.value.classList.toggle("is-active"),e.value.classList.toggle("is-active")}return O(()=>{window.onscroll=()=>{window.scrollY>20?(o.value.classList.add("shrink"),o.value.classList.remove("is-spaced")):(o.value.classList.remove("shrink"),o.value.classList.add("is-spaced"))};function c(){let h=document.querySelector(".navbar-brand");if(r.value.parentNode){let R=r.value.parentNode.removeChild(r.value);h.appendChild(R)}}function p(){if(r.value.parentNode){let h=r.value.parentNode.removeChild(r.value);o.value.appendChild(h)}}const f=window.matchMedia("(max-width: 1023px)"),m=window.matchMedia("(min-width: 1024px)");f.addEventListener("change",h=>{h.matches&&c()}),m.addEventListener("change",h=>{h.matches&&p()}),m.matches&&p()}),y.beforeEach((c,p,f)=>{s&&b(),f()}),(c,p)=>{const f=M("router-link");return l(),d("nav",{id:"topbar",ref_key:"topbar",ref:o,class:"navbar has-shadow is-fixed-top has-text-weight-bold is-spaced","aria-label":"main navigation"},[t("div",Hi,[t("div",{ref_key:"burger",ref:n,role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarNovelec",onClick:p[0]||(p[0]=m=>b())},Yi,512),u(f,{class:"navbar-item",to:"/"},{default:_(()=>[t("img",{class:"mr-2",src:G(si),alt:"Logo",width:"160"},null,8,Di)]),_:1}),t("div",{ref_key:"telBut",ref:r,class:"navbar-item tel"},Zi,512)]),t("div",{id:"navbarNovelec",ref_key:"menu",ref:e,class:"navbar-menu"},[t("div",Ki,[(l(!0),d(N,null,S(G(a),(m,h)=>(l(),v(f,{key:h,to:m.path,class:"navbar-item"},{default:_(()=>[m.icon?(l(),d("span",Ui,[u(Ri,{class:"is-align-self-center is-align-items-center",icon:m.icon},null,8,["icon"])])):E("",!0),t("span",Wi,Y(m.name),1)]),_:2},1032,["to"]))),128))])],512)],512)}}};var Ji=$(Xi,[["__scopeId","data-v-2542518e"]]);const Qi={},ie={class:"footer is-fixed-bottom"},ee=t("div",{class:"content has-text-centered",itemscope:"",itemtype:"http://schema.org/Organization"},[t("span",{itemprop:"name"},[t("strong",null,"Novelec"),z(" - Lilian Monchalin")]),t("div",{itemprop:"address",itemscope:"",itemtype:"http://schema.org/PostalAddress"},[t("span",{itemprop:"streetAddress"},"24 Route du Puy"),z(" - "),t("span",{itemprop:"postalCode"},"43800"),z(" - "),t("span",{itemprop:"addressLocality"},"Rosi\xE8res, France")]),t("strong",null,"Tel: "),t("span",{itemprop:"telephone"},"06 86 41 59 53"),z(" - "),t("strong",null,"Courriel: "),t("a",{href:"mailto:contact@novelec.info",itemprop:"email"}," contact@novelec.info "),t("p",null,[t("strong",null,"\xA9 2022 Novelec - Lilian Monchalin."),z(" Tous droits r\xE9serv\xE9s")])],-1),ae=[ee];function te(i,a){return l(),d("footer",ie,ae)}var oe=$(Qi,[["render",te]]);const ne={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},re=t("path",{fill:"currentColor",d:"m12 7l5 5h-3v4h-4v-4H7l5-5m0 15A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m0-2a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8Z"},null,-1),se=[re];function le(i,a){return l(),d("svg",ne,se)}var de={name:"mdi-arrow-up-bold-circle-outline",render:le};const ce={data(){return{visible:!1}},mounted:function(){window.addEventListener("scroll",this.scrollListener)},beforeUnmount:function(){window.removeEventListener("scroll",this.scrollListener)},methods:{scrollTop:function(){this.intervalId=setInterval(()=>{window.pageYOffset===0&&clearInterval(this.intervalId),window.scroll(0,window.pageYOffset-50)},20)},scrollListener:function(){this.visible=window.scrollY>150}}};function be(i,a,o,n,e,r){const s=de;return Z((l(),d("a",{class:"bottom-right",onClick:a[0]||(a[0]=(...b)=>r.scrollTop&&r.scrollTop(...b))},[t("a",null,[u(s,{style:{"font-size":"2.5em"}})])],512)),[[K,e.visible]])}var fe=$(ce,[["render",be],["__scopeId","data-v-35124657"]]);const A=k(new Map);function me(){function i(a,...o){A.value.set(a,o),console.log(a,o)}return{emit:i,bus:A}}const ue={__name:"App",setup(i){const a="6LeEME0UAAAAAJKfpsqLI0iOTTYAkN9XMc_3FfLk",n=J().appContext.config.globalProperties.$Progress;U(()=>{n.start()});const e=k(L);console.log(e),W("VueRecaptcha",e),y.beforeEach((c,p,f)=>{n.start(),f()}),y.afterEach(()=>{n.finish()});const{emit:r}=me();function s(){console.log("Expired")}function b(c){r("recaptchaVerify",c)}return(c,p)=>{const f=M("vue-progress-bar");return l(),d(N,null,[u(f),t("header",null,[u(Ji)]),t("main",null,[u(G(X),null,{default:_(({Component:m})=>[u(Q,{name:"fade",mode:"out-in"},{default:_(()=>[(l(),v(ii(m)))]),_:2},1024)]),_:1}),u(fe)]),u(oe),u(G(L),{ref_key:"vueRecaptcha",ref:e,size:"invisible",sitekey:a,language:"fr",onVerify:b,onExpired:s},null,512)],64)}}};const q=ei(ue);q.use(y);q.use(ai,{config:{id:"G-1KK4R70CX1"},router:y,enabled:!0});q.use(ti,{color:"#aa0000",failedColor:"#aa0000",thickness:"3px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1});q.mount("#app");export{x as _,Bi as a,Ri as b,$ as c,fi as d,me as u};
