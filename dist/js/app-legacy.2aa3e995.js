(function(){"use strict";var t={1868:function(t,n,r){r(6992),r(8674),r(9601),r(7727),r(9773);var e=r(9963),o=r(6252);function i(t,n,r,e,i,u){var a=(0,o.up)("Main");return(0,o.wg)(),(0,o.j4)(a)}var u=r(1457),a=r(2452),c=r(4610),s=r(9246),l=r(7737),f=r(941),d=(0,o._)("span",null,"Início",-1),m=(0,o.Uk)("mdi-history"),p=(0,o._)("span",null,"GitHub",-1),v=(0,o.Uk)("mdi-map-marker"),h=(0,o._)("span",null,"Favoritos",-1),g=(0,o.Uk)("mdi-heart");function w(t,n,r,e,i,w){var y=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(u.q,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(f.O,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(a.L,{elevation:"4",outlined:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(c.N,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(s.T,{onClick:n[0]||(n[0]=function(n){return t.$router.push({name:"home"})})},{default:(0,o.w5)((function(){return[d,(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[m]})),_:1})]})),_:1}),(0,o.Wm)(s.T,{onClick:n[1]||(n[1]=function(n){return t.$router.push({name:"git-hub"})})},{default:(0,o.w5)((function(){return[p,(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[v]})),_:1})]})),_:1}),(0,o.Wm)(s.T,{onClick:n[2]||(n[2]=function(n){return t.$router.push({name:"favorites"})})},{default:(0,o.w5)((function(){return[h,(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[g]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,o.Wm)(y)]})),_:1})]})),_:1})}var y={name:"Main",data:function(){return{}}},_=r(3744);const k=(0,_.Z)(y,[["render",w]]);var b=k,W={name:"App",components:{Main:b}};const j=(0,_.Z)(W,[["render",i]]);var U=j,x=r(2119),O=r(5957),C=(r(2222),r(6654)),M=r(6094),R=r(9440),T=r(9719),F=r(7404),z=r(7695),B=r(7506),L=r(7074),S=(0,o.Uk)(" Ateliware - GitHub Api ");function q(t,n,r,e,i,u){var a=(0,o.up)("v-card-content");return(0,o.wg)(),(0,o.j4)(F._,{elevation:"2","max-width":"1000",class:"mx-auto my-12 cardRepositories"},{default:(0,o.w5)((function(){return[(0,o.Wm)(z.E,null,{default:(0,o.w5)((function(){return[S]})),_:1}),(0,o.Wm)(B.J),(0,o.Wm)(a,{class:"d-flex justify-center align-center py-15"},{default:(0,o.w5)((function(){return[(0,o._)("div",null,[(0,o.Wm)(L.f,{src:C,width:"150"})]),(0,o._)("div",null,[(0,o.Wm)(L.f,{src:M,width:"250"})]),(0,o._)("div",null,[(0,o.Wm)(L.f,{src:R,width:"150"})]),(0,o._)("div",null,[(0,o.Wm)(L.f,{src:T,width:"150",class:"ml-5"})])]})),_:1})]})),_:1})}var H={name:"Home"};const P=(0,_.Z)(H,[["render",q]]);var E=P,Z=[{path:"/",name:"home",component:E}],A=(r(4916),r(4765),r(2526),r(1817),r(3577)),D=r(413),I=r(3857),$=r(9128),J=r(5539),N=r(3590),V=r(3732),G=r(1266),K=(0,o.Uk)("Repositório favoritado com sucesso."),Y=(0,o.Uk)(" Pesquisar Repositório no GitHub "),Q=(0,o.Uk)("mdi-check-circle"),X=(0,o.Uk)("Pesquisar"),tt=(0,o.Uk)("mdi-star"),nt=(0,o.Uk)("mdi-star"),rt=(0,o.Uk)("Favoritar");function et(t,n,r,e,i,u){var a=(0,o.up)("Card"),c=(0,o.up)("v-list-item-content");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i.success?((0,o.wg)(),(0,o.j4)(D.w,{key:0,type:"success"},{default:(0,o.w5)((function(){return[K]})),_:1})):(0,o.kq)("",!0),i.error?((0,o.wg)(),(0,o.j4)(D.w,{key:1,type:"error"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,A.zw)(i.errorMessage),1)]})),_:1})):(0,o.kq)("",!0),(0,o.Wm)(a,{class:"mx-auto my-12"},{title:(0,o.w5)((function(){return[Y]})),content:(0,o.w5)((function(){return[(0,o.Wm)(G.h,{modelValue:i.search,"onUpdate:modelValue":n[0]||(n[0]=function(t){return i.search=t}),label:"Digite nome do repositório Git",placeholder:"digite o nome",outlined:"",dense:""},null,8,["modelValue"])]})),actions:(0,o.w5)((function(){return[(0,o.Wm)(s.T,{color:"primary",rounded:"lg",loading:t.loading,onClick:n[1]||(n[1]=function(t){return u.actionSearch()})},{default:(0,o.w5)((function(){return[(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[Q]})),_:1}),X]})),_:1},8,["loading"]),i.loadingBtnSearch?((0,o.wg)(),(0,o.j4)(V.L,{key:0,class:"ml-5",indeterminate:"",color:"primary"})):(0,o.kq)("",!0)]})),_:1}),i.displayCard?((0,o.wg)(),(0,o.j4)(a,{key:2,class:"mx-auto my-12"},{title:(0,o.w5)((function(){return[(0,o.Uk)((0,A.zw)(i.repository.full_name),1)]})),content:(0,o.w5)((function(){return[(0,o.Wm)($.l,null,{default:(0,o.w5)((function(){var t;return[(0,o.Wm)(L.f,{"max-width":"80",src:null===(t=i.repository.organization)||void 0===t?void 0:t.avatar_url,class:"mr-5"},null,8,["src"]),(0,o.Wm)(c,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(J.V,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,A.zw)(i.repository.description),1)]})),_:1}),(0,o.Wm)(N.o,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,A.zw)(i.repository.html_url),1)]})),_:1}),(0,o.Wm)(I.v,{class:"mt-3",size:"x-small",color:"primary"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,A.zw)(i.repository.stargazers_count)+" ",1),(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[tt]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),actions:(0,o.w5)((function(){return[(0,o.Wm)(s.T,{color:"secondary",rounded:"lg",loading:t.loading,onClick:n[2]||(n[2]=function(t){return u.actionFavorite()})},{default:(0,o.w5)((function(){return[(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[nt]})),_:1}),rt]})),_:1},8,["loading"]),i.loadingBtnFavorite?((0,o.wg)(),(0,o.j4)(V.L,{key:0,class:"ml-5",indeterminate:"",color:"primary"})):(0,o.kq)("",!0)]})),_:1})):(0,o.kq)("",!0)],64)}r(1539);var ot=r(8534),it=(r(5666),r(9669)),ut=r.n(it);ut().defaults.baseURL="https://ateliware.api.mgetech.com.br/api/v1",ut().interceptors.request.use(function(){var t=(0,ot.Z)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.headers={api_key:"base64:wMpjcDnogmIW+tjQ4/iFtW/Jyp34S42WRf/RA3skKDw="},t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),(function(t){Promise.reject(t)}));var at=ut(),ct=r(6334);function st(t,n,r,e,i,u){var a=(0,o.up)("v-card-content");return(0,o.wg)(),(0,o.j4)(F._,{elevation:"2","max-width":"1000"},{default:(0,o.w5)((function(){return[(0,o.Wm)(z.E,null,{default:(0,o.w5)((function(){return[(0,o.WI)(t.$slots,"title")]})),_:3}),(0,o.Wm)(B.J),(0,o.Wm)(a,null,{default:(0,o.w5)((function(){return[(0,o.WI)(t.$slots,"content")]})),_:3}),(0,o.Wm)(B.J),(0,o.Wm)(ct.h,null,{default:(0,o.w5)((function(){return[(0,o.WI)(t.$slots,"actions")]})),_:3})]})),_:3})}var lt={};const ft=(0,_.Z)(lt,[["render",st]]);var dt=ft,mt={name:"SearchRepository",components:{Card:dt},data:function(){return{search:"",repository:{},loader:!1,displayCard:!1,success:!1,error:!1,errorMessage:"",loadingBtnSearch:!1,loadingBtnFavorite:!1}},methods:{actionSearch:function(){var t=this;""===this.search&&(this.errorMessage="Digite o nome do repositório",this.error=!0),this.loadingBtnSearch=!0,at.post("/github/get-repository-by-name",{name:this.search}).then((function(n){t.repository=n.data,t.displayCard=!0,t.success=!1,t.error=!1})).catch((function(){})).finally((function(){t.search="",t.loadingBtnSearch=!1}))},actionFavorite:function(){var t=this;this.loadingBtnFavorite=!0;var n={github_id:this.repository.id,name:this.repository.full_name,description:this.repository.description,url:this.repository.html_url,avatar_url:this.repository.organization.avatar_url,stargazers_count:this.repository.stargazers_count,language:this.repository.language};at.post("/repositories",n).then((function(){t.repository={},t.displayCard=!1,t.success=!0})).catch((function(n){var r,e;t.errorMessage="Erro ao favoritar",null!==(r=n.response)&&void 0!==r&&null!==(e=r.data)&&void 0!==e&&e.error&&(t.errorMessage=n.response.data.message),t.error=!0})).finally((function(){t.loadingBtnFavorite=!1}))}}};const pt=(0,_.Z)(mt,[["render",et]]);var vt=pt,ht=[{path:"/pesquisar-rerpositorio",name:"git-hub",component:vt}],gt=(r(8309),r(1923)),wt=function(t){return(0,o.dD)("data-v-7d36fe30"),t=t(),(0,o.Cn)(),t},yt=(0,o.Uk)(" Repositórios Favoritos "),_t={class:"mr-5"},kt={class:"content-main"},bt=(0,o.Uk)("mdi-star"),Wt=wt((function(){return(0,o._)("br",null,null,-1)})),jt=(0,o.Uk)("mdi-star"),Ut=(0,o.Uk)(" Desfavoritar ");function xt(t,n,r,e,i,u){var a=(0,o.up)("v-list-item-content"),c=(0,o.up)("Card");return(0,o.wg)(),(0,o.j4)(c,{class:"mx-auto my-12"},{title:(0,o.w5)((function(){return[yt,t.loadingBtnUnFavorite?((0,o.wg)(),(0,o.j4)(V.L,{key:0,class:"ml-5",indeterminate:"",color:"primary"})):(0,o.kq)("",!0)]})),content:(0,o.w5)((function(){return[(0,o.Wm)(gt.iE,{"two-line":""},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.repositories,(function(t){return(0,o.wg)(),(0,o.j4)($.l,{key:t.id},{default:(0,o.w5)((function(){return[(0,o.Wm)(a,{class:"d-flex list-item-content"},{default:(0,o.w5)((function(){return[(0,o._)("div",_t,[(0,o.Wm)(L.f,{width:"80",src:t.avatar_url},null,8,["src"])]),(0,o._)("div",kt,[(0,o.Wm)(J.V,{innerHTML:t.name},null,8,["innerHTML"]),(0,o.Wm)(N.o,{innerHTML:t.description},null,8,["innerHTML"]),(0,o.Wm)(N.o,{innerHTML:t.url,class:"mt-3"},null,8,["innerHTML"]),(0,o.Wm)(I.v,{class:"mt-3",size:"x-small",color:"primary"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,A.zw)(t.stargazers_count)+" ",1),(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[bt]})),_:1})]})),_:2},1024),Wt,(0,o.Wm)(s.T,{color:"secondary",rounded:"lg",size:"small",class:"mt-5",onClick:function(n){return u.destroyRepository(t.id)}},{default:(0,o.w5)((function(){return[(0,o.Wm)(l.t,null,{default:(0,o.w5)((function(){return[jt]})),_:1}),Ut]})),_:2},1032,["onClick"]),(0,o.Wm)(B.J,{class:"mt-3"})])]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})]})),_:1})}var Ot={name:"Favorites",components:{Card:dt},data:function(){return{repositories:[],loadingBtnUnFavorite:!1}},mounted:function(){this.getRepositories()},methods:{getRepositories:function(){var t=this;at.get("/repositories").then((function(n){t.repositories=n.data})).catch((function(){}))},destroyRepository:function(t){var n=this;this.loadingBtnUnFavorite=!0,at["delete"]("/repositories/".concat(t)).then((function(){n.getRepositories()})).finally((function(){n.loadingBtnUnFavorite=!1}))}}};const Ct=(0,_.Z)(Ot,[["render",xt],["__scopeId","data-v-7d36fe30"]]);var Mt=Ct,Rt=[{path:"/favoritos",name:"favorites",component:Mt}],Tt=[].concat((0,O.Z)(Z),(0,O.Z)(ht),(0,O.Z)(Rt)),Ft=x.p7({history:x.r5(),routes:Tt}),zt=Ft,Bt=r(4359),Lt=(0,Bt.Rd)();r(8783),r(3948);function St(){return qt.apply(this,arguments)}function qt(){return qt=(0,ot.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.e(461).then(r.t.bind(r,5933,23));case 2:n=t.sent,n.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}});case 4:case"end":return t.stop()}}),t)}))),qt.apply(this,arguments)}St(),(0,e.ri)(U).use(zt).use(Lt).mount("#app")},9719:function(t,n,r){t.exports=r.p+"img/rails.2c95b35a..svg"},6654:function(t,n,r){t.exports=r.p+"img/git.85861fa8..jpeg"},6094:function(t,n,r){t.exports=r.p+"img/laravel.12581b2f..jpeg"},9440:function(t,n,r){t.exports=r.p+"img/vue.12e197aa..jpeg"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(n,e,o,i){if(!e){var u=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,c=0;c<e.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,o,i]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){var t,n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};r.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"===typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"===typeof e.then)return e}var i=Object.create(null);r.r(i);var u={};t=t||[null,n({}),n([]),n(n)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){u[t]=function(){return e[t]}}));return u["default"]=function(){return e},r.d(i,u),i}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(n,e){return r.f[e](t,n),n}),[]))}}(),function(){r.u=function(t){return"js/webfontloader-legacy.9e989c1e.js"}}(),function(){r.miniCssF=function(t){return"css/"+{143:"app",998:"chunk-vendors"}[t]+"."+{143:"cedc1dc4",998:"1a747344"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="github-front:";r.l=function(e,o,i,u){if(t[e])t[e].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=e),t[e]=[o];var d=function(n,r){a.onerror=a.onload=null,clearTimeout(m);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(r)})),n)return n(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.f.j=function(n,e){var o=r.o(t,n)?t[n]:void 0;if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(r,e){o=t[n]=[r,e]}));e.push(o[2]=i);var u=r.p+r.u(n),a=new Error,c=function(e){if(r.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};r.l(u,c,"chunk-"+n,n)}},r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,u=e[0],a=e[1],c=e[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(n&&n(e);s<u.length;s++)i=u[s],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},e=self["webpackChunkgithub_front"]=self["webpackChunkgithub_front"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(1868)}));e=r.O(e)})();
//# sourceMappingURL=app-legacy.2aa3e995.js.map