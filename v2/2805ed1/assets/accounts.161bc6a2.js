var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&s(e,a,t[a]);return e},c=(e,l)=>t(e,a(l));import{j as i,h as m,R as u,K as d,r as p,t as E,l as b,x as y,ao as f,ap as v,aq as g,ar as C,as as h,at as O,N as j,O as x,P as k,Q as w,U as S,W as q,ae as P,Y as _}from"./vendor.1fd8fd08.js";import{a as W}from"./index.02764415.js";import{F as z}from"./form-item.2143c29d.js";import"./index.a83e34dd.js";import"./index.6342c349.js";import"./index.esm.4af2ea23.js";import"./useTitle.500cc51b.js";const D={id:0,name:"",type:"",root_folder:"",status:"",index:0};function F(e){switch(e){case"string":return"";case"bool":return!1;case"select":return"";case"number":return 0}}const I=[{name:"name",label:"name",type:"string",required:!0},{name:"index",label:"index",type:"number",required:!0,description:"for sort"}],K=()=>{const e=i(),{t:t}=m(),[a,l]=u.useState([]),[n,r]=u.useState({}),[s,K]=u.useState(D),[L,N]=u.useState(!1),[Q,R]=u.useState(!1),T=d(),U=()=>{R(!0),W.get("accounts").then((a=>{R(!1);const n=a.data;200!==n.code?e({title:t(n.message),status:"error",duration:3e3,isClosable:!0}):l(n.data)}))};return p.exports.useEffect((()=>{U(),W.get("drivers").then((a=>{const l=a.data;200!==l.code?e({title:t(l.message),status:"error",duration:3e3,isClosable:!0}):r(l.data)}))}),[]),u.createElement(E,{w:"full"},u.createElement(b,null,u.createElement(y,{onClick:()=>{K(D),N(!1),T.onOpen()}},t("add")),u.createElement(y,{colorScheme:"orange",isLoading:Q,onClick:()=>{U()}},t("refresh"))),u.createElement(E,{overflowX:"auto"},u.createElement(f,{w:"full"},u.createElement(v,null,u.createElement(g,null,u.createElement(C,null,t("name")),u.createElement(C,null,t("type")),u.createElement(C,null,t("root_folder")),u.createElement(C,null,t("index")),u.createElement(C,null,t("status")),u.createElement(C,null,t("operation")))),u.createElement(h,null,a.map((a=>u.createElement(g,{key:a.id},u.createElement(O,null,a.name),u.createElement(O,null,a.type),u.createElement(O,null,a.root_folder),u.createElement(O,null,a.index),u.createElement(O,null,a.status),u.createElement(O,{whiteSpace:"nowrap"},u.createElement(y,{onClick:()=>{K(a),N(!0),T.onOpen()}},t("edit")),u.createElement(y,{colorScheme:"red",ml:"1",onClick:()=>{W.delete("account",{params:{id:a.id}}).then((a=>{const l=a.data;200!==l.code?e({title:t(l.message),status:"error",duration:3e3,isClosable:!0}):(e({title:t(l.message),status:"success",duration:3e3,isClosable:!0}),U())}))}},t("delete"))))))))),u.createElement(j,{isOpen:T.isOpen,onClose:T.onClose,size:"6xl"},u.createElement(x,null),u.createElement(k,null,u.createElement(w,null,t(L?"save":"add")),u.createElement(S,null),u.createElement(q,{pb:6},u.createElement(P,{minChildWidth:"250px",spacing:"2"},u.createElement(z,{type:"select",readOnly:L,required:!0,label:t("type"),value:s.type,values:Object.keys(n),onChange:e=>{const t=o({},s);t.type=e;for(const a of n[e])Object.keys(t).includes(a.name)||(t[a.name]=F(a.type));K(t)}}),I.map((e=>{var t;return u.createElement(z,{key:e.name,type:e.type,label:e.label,value:s[e.name],description:e.description,required:e.required,values:null==(t=e.values)?void 0:t.split(","),onChange:t=>{"bool"!==e.type?K(c(o({},s),{[e.name]:t})):K(c(o({},s),{[e.name]:!s[e.name]}))}})})),s.type&&n[s.type].map((e=>{var t;return u.createElement(z,{key:e.name,type:e.type,label:e.label,value:s[e.name],description:e.description,required:e.required,values:null==(t=e.values)?void 0:t.split(","),onChange:t=>{"bool"!==e.type?K(c(o({},s),{[e.name]:t})):K(c(o({},s),{[e.name]:!s[e.name]}))}})})))),u.createElement(_,null,u.createElement(y,{mr:3,colorScheme:"gray",onClick:T.onClose},t("cancle")),u.createElement(y,{onClick:()=>{console.log(s),W.post("account/"+(L?"save":"create"),s).then((a=>{const l=a.data;200!==l.code?(e({title:t(l.message),status:"error",duration:3e3,isClosable:!0}),L||(U(),T.onClose())):(e({title:t(l.message),status:"success",duration:3e3,isClosable:!0}),U(),T.onClose())}))}},t("save"))))))};export{K as default};
