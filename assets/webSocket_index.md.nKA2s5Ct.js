import{_ as t,c as o,o as a,m as e,a as n}from"./chunks/framework.Xe-pYyW9.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"webSocket/index.md","filePath":"webSocket/index.md","lastUpdated":null}'),s={name:"webSocket/index.md"},l=e("h2",{id:"协议规范",tabindex:"-1"},[n("协议规范 "),e("a",{class:"header-anchor",href:"#协议规范","aria-label":'Permalink to "协议规范"'},"​")],-1),c=e("blockquote",null,[e("p",null,"由于websocket协议的特性，既要考虑并发处理，也需要考虑前台端的报文对象序列化难易成度。我们使用基于json的序列化规范处理协议的底层通讯传输。")],-1),r=e("p",null,"THEX系统目前主要使用二个Webscoket服务端分别为",-1),d=e("ul",null,[e("li",null,[e("a",{href:"./order#K线盘口基本信息"},"订单sockete服务")]),e("li",null,[e("a",{href:"./kline#连接WebSocket"},"K线 socket 服务")])],-1),i=e("p",null,"以上服务多是以请求订阅的方式进行客户端与服务端进和数据的传输",-1),_=[l,c,r,d,i];function h(p,u,k,f,m,b){return a(),o("div",null,_)}const w=t(s,[["render",h]]);export{S as __pageData,w as default};