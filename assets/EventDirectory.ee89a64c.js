import{g as E}from"./list.4ee33aa9.js";import{d as p,u as F,r as _,o as a,c,F as v,e as C,b as t,t as u,p as h,m as B,_ as m}from"./index.0639f48c.js";const y=s=>(h("data-v-6618ecd5"),s=s(),B(),s),f={id:"QuDataStatics-page"},g=["onClick"],A={class:"header"},D={class:"title"},L={class:"main"},N={class:"left"},k={class:"right"},S=y(()=>t("p",{class:"no-list"},"\u6CA1\u6709\u66F4\u591A\u4E86",-1)),I=p({__name:"EventDirectory",setup(s){const r=F(),n=_();_(!1),(async()=>{const o=await E({pageNum:1,pageSize:10});n.value=o.list})();const l=o=>{r.push({path:"/list/ListEventDirectory",query:{id:o}})},d=["\u57CE\u5E02\u516C\u5171\u89C6\u9891","\u57CE\u5E02\u5B89\u5168\u611F\u77E5","\u57CE\u5E02\u5EFA\u8BBE\u611F\u77E5","\u57CE\u5E02\u4EA4\u901A\u611F\u77E5","\u57CE\u5E02\u73AF\u5883\u611F\u77E5","\u57CE\u5E02\u8FD0\u884C\u611F\u77E5"];return(o,T)=>(a(),c("div",f,[(a(!0),c(v,null,C(n.value,(e,i)=>(a(),c("div",{class:"dataList-item",key:i,onClick:w=>l(i)},[t("header",A,[t("h1",D,u(e.eventName),1)]),t("main",L,[t("div",N,[t("p",null,"\u8BBE\u5907\u7C7B\u578B\uFF1A"+u(e.iotList[0].typeName),1),t("p",null,"\u5F52\u5C5E\u90E8\u95E8\uFF1A"+u(e.iotList[0].orgName),1)]),t("div",k,[t("p",null,"\u8BBE\u5907\u7F16\u7801\uFF1A"+u(e.iotList[0].deviceCode),1),t("p",null,"\u8BBE\u5907\u529F\u80FD\uFF1A"+u(d[e.iotList[0].functionType]),1)])])],8,g))),128)),S]))}});const q=m(I,[["__scopeId","data-v-6618ecd5"]]);export{q as default};
