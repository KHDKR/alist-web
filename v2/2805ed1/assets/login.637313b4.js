import{h as e,J as s,j as t,r as a,R as r,C as n,V as o,ac as l,ad as i,X as d,x as c}from"./vendor.1fd8fd08.js";import{c as m,a as u}from"./index.02764415.js";import"./index.a83e34dd.js";import"./index.6342c349.js";import"./index.esm.4af2ea23.js";import"./useTitle.500cc51b.js";const p=()=>{const{t:p}=e(),f=s(),g=t(),[j,x]=a.exports.useState(""),E=()=>{m(j),u.get("login").then((e=>{const s=e.data;200===s.code?(g({title:p(s.message),status:"success",duration:3e3,isClosable:!0}),f.push("settings")):g({title:p(s.message),status:"error",duration:3e3,isClosable:!0})}))};return r.createElement(n,{p:"4",h:"full"},r.createElement(o,{w:{base:"full",md:"50%"}},r.createElement(l,{isRequired:!0},r.createElement(i,null,p("password")),r.createElement(d,{type:"password",value:j,onChange:e=>x(e.target.value),onKeyUp:e=>{"Enter"===e.key&&E()}})),r.createElement(c,{onClick:E},p("login"))))};export{p as default};
