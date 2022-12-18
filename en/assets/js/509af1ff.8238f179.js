"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[7923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,f=g["".concat(u,".").concat(m)]||g[m]||p[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse","Data Lake"]},l="Offline digital Warehouse, real-time digital Warehouse and DataLakeHouse",i={permalink:"/Bigdata_Blog_Website/en/blog/\u79bb\u7ebf\u6570\u4ed3\u3001\u5b9e\u65f6\u6570\u4ed3\u4e0e Data Lakehouse",source:"@site/i18n/en/docusaurus-plugin-content-blog/\u79bb\u7ebf\u6570\u4ed3\u3001\u5b9e\u65f6\u6570\u4ed3\u4e0e Data Lakehouse.md",title:"Offline digital Warehouse, real-time digital Warehouse and DataLakeHouse",description:"\u4ec0\u4e48\u662f\u6570\u636e\u4ed3\u5e93",date:"2022-12-18T10:12:34.000Z",formattedDate:"December 18, 2022",tags:[{label:"data warehouse",permalink:"/Bigdata_Blog_Website/en/blog/tags/data-warehouse"},{label:"Data Lake",permalink:"/Bigdata_Blog_Website/en/blog/tags/data-lake"}],readingTime:10.9,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse","Data Lake"]},prevItem:{title:"Digital warehouse architecture",permalink:"/Bigdata_Blog_Website/en/blog/\u6570\u4ed3\u67b6\u6784\u4f53\u7cfb"},nextItem:{title:"Centos \u914d\u7f6e\u96c6\u7fa4\u673a\u5668\u4e4b\u95f4\u514d\u5bc6\u767b\u5f55",permalink:"/Bigdata_Blog_Website/en/blog/Centos \u914d\u7f6e\u96c6\u7fa4\u673a\u5668\u4e4b\u95f4\u514d\u5bc6\u767b\u5f55"}},u={authorsImageUrls:[void 0]},s=[{value:"\u4ec0\u4e48\u662f\u6570\u636e\u4ed3\u5e93",id:"\u4ec0\u4e48\u662f\u6570\u636e\u4ed3\u5e93",level:2},{value:"\u4ec0\u4e48\u662f\u6570\u636e\u6e56",id:"\u4ec0\u4e48\u662f\u6570\u636e\u6e56",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6570\u636e\u4ed3\u5e93"},"\u4ec0\u4e48\u662f\u6570\u636e\u4ed3\u5e93"),(0,n.kt)("p",null,"\u6570\u636e\u4ed3\u5e93\u662f\u4e00\u4e2a\u4e3a\u6570\u636e\u5206\u6790\u800c\u8bbe\u8ba1\u7684\u4f01\u4e1a\u7ea7\u6570\u636e\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u4ed3\u5e93\u53ef\u96c6\u4e2d\u3001\u6574\u5408\u591a\u4e2a\u4fe1\u606f\u6e90\u7684\u5927\u91cf\u6570\u636e\uff0c\u501f\u52a9\u6570\u636e\u4ed3\u5e93\u7684\u5206\u6790\u80fd\u529b\uff0c\u4f01\u4e1a\u53ef\u4ece\u6570\u636e\u4e2d\u83b7\u5f97\u5b9d\u8d35\u7684\u4fe1\u606f\u8fdb\u800c\u6539\u8fdb\u51b3\u7b56\u3002")),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u6570\u636e\u4ed3\u5e93\u4e2d\u79ef\u7d2f\u7684\u5927\u91cf\u5386\u53f2\u6570\u636e\u5bf9\u4e8e\u6570\u636e\u79d1\u5b66\u5bb6\u548c\u4e1a\u52a1\u5206\u6790\u5e08\u4e5f\u662f\u5341\u5206\u5b9d\u8d35\u7684\u3002"),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6570\u636e\u6e56"},"\u4ec0\u4e48\u662f\u6570\u636e\u6e56"),(0,n.kt)("p",null,"\u6570\u636e\u6e56\uff08Data Lake\uff09\u548c\u6570\u636e\u5e93\u3001\u6570\u636e\u4ed3\u5e93\u4e00\u6837\uff0c\u90fd\u662f\u6570\u636e\u5b58\u50a8\u7684\u8bbe\u8ba1\u6a21\u5f0f\u3002"))}p.isMDXComponent=!0}}]);