(function(){"use strict";var e={2543:function(e,t,r){r(9773);var n=r(9963),o=r(6252);function a(e,t,r,n,a,i){const s=(0,o.up)("Main");return(0,o.wg)(),(0,o.j4)(s)}var i=r(1457),s=r(2452),u=r(4610),l=r(9246),c=r(7737),d=r(941);const f=(0,o._)("span",null,"Início",-1),m=(0,o.Uk)("mdi-history"),p=(0,o._)("span",null,"GitHub",-1),h=(0,o.Uk)("mdi-map-marker"),w=(0,o._)("span",null,"Favoritos",-1),v=(0,o.Uk)("mdi-heart");function g(e,t,r,n,a,g){const _=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s.L,{elevation:"4",outlined:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u.N,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l.T,{onClick:t[0]||(t[0]=t=>e.$router.push({name:"home"}))},{default:(0,o.w5)((()=>[f,(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[m])),_:1})])),_:1}),(0,o.Wm)(l.T,{onClick:t[1]||(t[1]=t=>e.$router.push({name:"git-hub"}))},{default:(0,o.w5)((()=>[p,(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[h])),_:1})])),_:1}),(0,o.Wm)(l.T,{onClick:t[2]||(t[2]=t=>e.$router.push({name:"favorites"}))},{default:(0,o.w5)((()=>[w,(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[v])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(_)])),_:1})])),_:1})}var _={name:"Main",data(){return{}}},y=r(3744);const b=(0,y.Z)(_,[["render",g]]);var k=b,W={name:"App",components:{Main:k}};const j=(0,y.Z)(W,[["render",a]]);var O=j,U=r(2119);function T(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",null,"Home")}var C={name:"Home"};const M=(0,y.Z)(C,[["render",T]]);var x=M,z=[{path:"/",name:"home",component:x}],R=r(3577),E=r(6654),H=r(7404),P=r(7695),L=r(6334),q=r(3857),S=r(7506),D=r(7074),F=r(1923),J=r(9128),A=r(5539),N=r(3590),V=r(291);const Z=(0,o.Uk)("Repositório favoritado com sucesso."),$=(0,o.Uk)(" Pesquisar Repositório no GitHub "),G=(0,o.Uk)("mdi-check-circle"),I=(0,o.Uk)(" Pesquisar "),K=(0,o.Uk)("mdi-star"),Y=(0,o.Uk)("mdi-star"),B=(0,o.Uk)(" Favoritar ");function Q(e,t,r,n,a,i){const s=(0,o.up)("v-card-content"),u=(0,o.up)("v-list-item-content");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a.success?((0,o.wg)(),(0,o.j4)(E.w,{key:0,type:"success"},{default:(0,o.w5)((()=>[Z])),_:1})):(0,o.kq)("",!0),a.error?((0,o.wg)(),(0,o.j4)(E.w,{key:1,type:"error"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,R.zw)(a.errorMessage),1)])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(H._,{elevation:"2","max-width":"1000",class:"mx-auto my-12"},{default:(0,o.w5)((()=>[(0,o.Wm)(P.E,null,{default:(0,o.w5)((()=>[$])),_:1}),(0,o.Wm)(S.J),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(V.h,{modelValue:a.search,"onUpdate:modelValue":t[0]||(t[0]=e=>a.search=e),label:"Digite nome do repositório Git",placeholder:"digite o nome",outlined:"",dense:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(S.J),(0,o.Wm)(L.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l.T,{color:"primary",rounded:"lg",loading:e.loading,onClick:t[1]||(t[1]=e=>i.actionSearch())},{default:(0,o.w5)((()=>[(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[G])),_:1}),I])),_:1},8,["loading"])])),_:1})])),_:1}),a.displayCard?((0,o.wg)(),(0,o.j4)(H._,{key:2,"max-width":"1000",class:"mx-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(F.iE,{"three-line":""},{default:(0,o.w5)((()=>[(0,o.Wm)(P.E,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,R.zw)(a.repository.full_name),1)])),_:1}),(0,o.Wm)(S.J),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(J.l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(D.f,{"max-width":"80",src:a.repository.organization?.avatar_url,class:"mr-5"},null,8,["src"]),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A.V,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,R.zw)(a.repository.description),1)])),_:1}),(0,o.Wm)(N.o,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,R.zw)(a.repository.html_url),1)])),_:1}),(0,o.Wm)(q.v,{class:"mt-3",size:"x-small",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,R.zw)(a.repository.stargazers_count)+" ",1),(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[K])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(S.J),(0,o.Wm)(L.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l.T,{color:"secondary",rounded:"lg",loading:e.loading,onClick:t[2]||(t[2]=e=>i.actionFavorite())},{default:(0,o.w5)((()=>[(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[Y])),_:1}),B])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})):(0,o.kq)("",!0)],64)}var X=r(9669),ee=r.n(X);ee().defaults.baseURL="http://localhost:9001/api/v1",ee().interceptors.request.use((async e=>(e.headers={api_key:"base64:wMpjcDnogmIW+tjQ4/iFtW/Jyp34S42WRf/RA3skKDw="},e)),(e=>{Promise.reject(e)}));var te=ee(),re={name:"SearchRepository",data(){return{search:"vuejs/vue",repository:{},loader:!1,displayCard:!1,success:!1,error:!1,errorMessage:""}},methods:{async actionSearch(){const e=await te.post("/github/get-repository-by-name",{name:this.search});this.repository=e.data,this.displayCard=!0,this.success=!1,this.error=!1},async actionFavorite(){const e={github_id:this.repository.id,name:this.repository.full_name,description:this.repository.description,url:this.repository.html_url,avatar_url:this.repository.organization.avatar_url,stargazers_count:this.repository.stargazers_count,language:this.repository.language};await te.post("/repositories",e).then((()=>{this.repository={},this.displayCard=!1,this.success=!0})).catch((e=>{this.errorMessage="Erro ao favoritar",e.response?.data?.error&&(this.errorMessage=e.response.data.message),this.error=!0}))}}};const ne=(0,y.Z)(re,[["render",Q]]);var oe=ne,ae=[{path:"/pesquisar-rerpositorio",name:"git-hub",component:oe}];const ie=e=>((0,o.dD)("data-v-fbe5d4e2"),e=e(),(0,o.Cn)(),e),se=(0,o.Uk)(" Repositórios Favoritos "),ue={class:"mr-5"},le={class:"content-main"},ce=(0,o.Uk)("mdi-star"),de=ie((()=>(0,o._)("br",null,null,-1))),fe=(0,o.Uk)("mdi-star"),me=(0,o.Uk)(" Desfavoritar ");function pe(e,t,r,n,a,i){const s=(0,o.up)("v-list-item-content"),u=(0,o.up)("v-card-content");return(0,o.wg)(),(0,o.j4)(H._,{elevation:"2","max-width":"1000",class:"mx-auto my-12 cardRepositories"},{default:(0,o.w5)((()=>[(0,o.Wm)(P.E,null,{default:(0,o.w5)((()=>[se])),_:1}),(0,o.Wm)(S.J),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(F.iE,{"two-line":""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.repositories,(t=>((0,o.wg)(),(0,o.j4)(J.l,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"d-flex list-item-content"},{default:(0,o.w5)((()=>[(0,o._)("div",ue,[(0,o.Wm)(D.f,{width:"80",src:t.avatar_url},null,8,["src"])]),(0,o._)("div",le,[(0,o.Wm)(A.V,{innerHTML:t.name},null,8,["innerHTML"]),(0,o.Wm)(N.o,{innerHTML:t.description},null,8,["innerHTML"]),(0,o.Wm)(N.o,{innerHTML:t.url,class:"mt-3"},null,8,["innerHTML"]),(0,o.Wm)(q.v,{class:"mt-3",size:"x-small",color:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,R.zw)(t.stargazers_count)+" ",1),(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[ce])),_:1})])),_:2},1024),de,(0,o.Wm)(l.T,{color:"secondary",rounded:"lg",size:"small",class:"mt-5",loading:e.loading,onClick:e=>i.destroyRepository(t.id)},{default:(0,o.w5)((()=>[(0,o.Wm)(c.t,null,{default:(0,o.w5)((()=>[fe])),_:1}),me])),_:2},1032,["loading","onClick"]),(0,o.Wm)(S.J,{class:"mt-3"})])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}var he={data:()=>({repositories:[]}),mounted(){this.getRepositories()},methods:{async getRepositories(){const e=await te.get("/repositories");this.repositories=e.data},async destroyRepository(e){await te["delete"](`/repositories/${e}`),this.getRepositories()}}};const we=(0,y.Z)(he,[["render",pe],["__scopeId","data-v-fbe5d4e2"]]);var ve=we,ge=[{path:"/favoritos",name:"favorites",component:ve}],_e=[...z,...ae,...ge];const ye=U.p7({history:U.r5(),routes:_e});var be=ye,ke=r(4359),We=(0,ke.Rd)();async function je(){const e=await r.e(461).then(r.t.bind(r,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}je(),(0,n.ri)(O).use(be).use(We).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},r.d(a,i),a}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/webfontloader.9e989c1e.js"}}(),function(){r.miniCssF=function(e){return"css/"+{143:"app",998:"chunk-vendors"}[e]+"."+{143:"cbceb50b",998:"52c7349b"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="github-front:";r.l=function(n,o,a,i){if(e[n])e[n].push(o);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var f=function(t,r){s.onerror=s.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,u=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],u=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var c=u(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self["webpackChunkgithub_front"]=self["webpackChunkgithub_front"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(2543)}));n=r.O(n)})();
//# sourceMappingURL=app.3932af94.js.map