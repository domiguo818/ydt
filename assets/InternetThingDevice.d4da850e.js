import{a as r}from"./list.4ee33aa9.js";import{d as p,r as E,u as F,o as a,c as o,F as h,e as v,b as e,t as s,p as C,m as g,_ as B}from"./index.0639f48c.js";const I=n=>(C("data-v-fbd89a75"),n=n(),g(),n),f={id:"QuDataStatics-page"},m=["onClick"],y={class:"header"},A={class:"title"},D={class:"main"},T={class:"left"},L={class:"right"},k=I(()=>e("p",{class:"no-list"},"\u6CA1\u6709\u66F4\u591A\u4E86",-1)),x=p({__name:"InternetThingDevice",setup(n){const c=E(),i=F();(async()=>{const u=await r({pageNum:1,pageSize:10});c.value=u.list})();const _=u=>{console.log(u.id),i.push({path:"/list/ListBasicInform",query:{id:u.id}})},d=["\u57CE\u5E02\u516C\u5171\u89C6\u9891","\u57CE\u5E02\u5B89\u5168\u611F\u77E5","\u57CE\u5E02\u5EFA\u8BBE\u611F\u77E5","\u57CE\u5E02\u4EA4\u901A\u611F\u77E5","\u57CE\u5E02\u73AF\u5883\u611F\u77E5","\u57CE\u5E02\u8FD0\u884C\u611F\u77E5"];return(u,S)=>(a(),o("div",f,[(a(!0),o(h,null,v(c.value,(t,l)=>(a(),o("div",{class:"dataList-item",key:l,onClick:b=>_(t)},[e("header",y,[e("h1",A,s(t.name),1)]),e("main",D,[e("div",T,[e("p",null,"\u8BBE\u5907\u7C7B\u578B\uFF1A"+s(t.typeName),1),e("p",null,"\u5F52\u5C5E\u90E8\u95E8\uFF1A"+s(t.orgName),1)]),e("div",L,[e("p",null,"\u8BBE\u5907\u7F16\u7801\uFF1A"+s(t.deviceCode),1),e("p",null,"\u8BBE\u5907\u529F\u80FD\uFF1A"+s(d[t.functionType]),1)])])],8,m))),128)),k]))}});const q=B(x,[["__scopeId","data-v-fbd89a75"]]);export{q as default};
