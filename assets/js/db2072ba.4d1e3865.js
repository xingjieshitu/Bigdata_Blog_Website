"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[1627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,b=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Flink","\u8ba1\u7b97\u6846\u67b6"]},i=void 0,l={permalink:"/Bigdata_Blog_Website/blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4",source:"@site/blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4.md",title:"Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4",description:"\u672c\u6587\u4e3a\u793e\u533a\u90ae\u4ef6\u5185\u5bb9\u63d0\u53d6",date:"2022-12-11T07:12:16.000Z",formattedDate:"2022\u5e7412\u670811\u65e5",tags:[{label:"Flink",permalink:"/Bigdata_Blog_Website/blog/tags/flink"},{label:"\u8ba1\u7b97\u6846\u67b6",permalink:"/Bigdata_Blog_Website/blog/tags/\u8ba1\u7b97\u6846\u67b6"}],readingTime:.26,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Flink","\u8ba1\u7b97\u6846\u67b6"]},prevItem:{title:"Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf",permalink:"/Bigdata_Blog_Website/blog/Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf"},nextItem:{title:"Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f",permalink:"/Bigdata_Blog_Website/blog/Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u793e\u533a\u90ae\u4ef6\u5185\u5bb9\u63d0\u53d6")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282457-7ed1794c-99bf-4f57-8b73-6be3e93d4e82.png",alt:"img"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282486-0ad6f589-2049-4968-a9a5-40d7d3ec2f73.png",alt:"img"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282548-0d1c4754-e895-454e-9ad1-0d1ad00df6a8.png",alt:"img"})))}u.isMDXComponent=!0}}]);