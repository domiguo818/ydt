import{g}from"./project.6645bf95.js";import{d as D,r as p,u as x,y as A,o as n,c as _,F as N,e as S,a as i,w as u,x as d,b as t,t as a,v as j,p as y,m as I,_ as L}from"./index.0639f48c.js";const c=e=>(y("data-v-1dbffd5f"),e=e(),I(),e),B={id:"project-page"},P=["onClick"],k={class:"title"},b={class:"option"},R={class:"item"},T=c(()=>t("p",{class:"title"},"\u90E8\u95E8\uFF1A",-1)),w={class:"content"},G={class:"item"},V=c(()=>t("p",{class:"title"},"\u5E74\u4EFD\uFF1A",-1)),M={class:"content"},O={class:"item"},U=c(()=>t("p",{class:"title"},"\u72B6\u6001\uFF1A",-1)),q={class:"content"},z=c(()=>t("p",{class:"no-list"},"\u6CA1\u6709\u66F4\u591A\u4E86",-1)),Y=D({__name:"index",setup(e){const l=p(),f=x();A(),p();const h=s=>({1:"\u8C0B\u5212\u4E2D",2:"\u7533\u62A5\u4E2D",3:"\u5EFA\u8BBE\u4E2D",4:"\u8FD0\u884C\u4E2D",5:"\u529F\u80FD\u53D8\u66F4\u4E2D"})[s];(async()=>{const s=await g();console.log(s),l.value=s.list})();const m=s=>{f.push({path:"/project/ItemList",query:{index:s}})};return(s,v)=>{const F=d("f-tag"),C=d("f-header"),E=d("f-main");return n(),_("div",B,[(n(!0),_(N,null,S(l.value,(o,r)=>(n(),_("div",{class:"dataList-item",key:r,onClick:H=>m(r)},[i(C,{class:"header"},{default:u(()=>[t("h3",k,a(o.projName),1),t("div",b,[i(F,{simple:"",type:"success",size:"mini"},{default:u(()=>[j("IRS")]),_:1})])]),_:2},1024),i(E,null,{default:u(()=>[t("div",null,[t("div",R,[T,t("p",w,a(o.orgName),1)]),t("div",G,[V,t("p",M,a(o.budgetYear),1)])]),t("div",null,[t("div",O,[U,t("p",q,a(h(o.projState)),1)])])]),_:2},1024)],8,P))),128)),z])}}});const Q=L(Y,[["__scopeId","data-v-1dbffd5f"]]);export{Q as default};
