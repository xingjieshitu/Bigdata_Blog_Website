"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[9047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,b=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Flink","Calculation framework"],title:"Comparison between Flink OLAP and Trino TPC-DS"},i="Comparison between Flink OLAP and Trino TPC-DS",l={permalink:"/Bigdata_Blog_Website/en/blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4",source:"@site/i18n/en/docusaurus-plugin-content-blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4.md",title:"Comparison between Flink OLAP and Trino TPC-DS",description:"\u672c\u6587\u4e3a\u793e\u533a\u90ae\u4ef6\u5185\u5bb9\u63d0\u53d6",date:"2022-12-11T07:12:16.000Z",formattedDate:"December 11, 2022",tags:[{label:"Flink",permalink:"/Bigdata_Blog_Website/en/blog/tags/flink"},{label:"Calculation framework",permalink:"/Bigdata_Blog_Website/en/blog/tags/calculation-framework"}],readingTime:.26,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Flink","Calculation framework"],title:"Comparison between Flink OLAP and Trino TPC-DS"},prevItem:{title:"Doris Integrate other systems",permalink:"/Bigdata_Blog_Website/en/blog/Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf"},nextItem:{title:"Hbase and ClickHouse application scenarios",permalink:"/Bigdata_Blog_Website/en/blog/Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u793e\u533a\u90ae\u4ef6\u5185\u5bb9\u63d0\u53d6")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282457-7ed1794c-99bf-4f57-8b73-6be3e93d4e82.png",alt:"img"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282486-0ad6f589-2049-4968-a9a5-40d7d3ec2f73.png",alt:"img"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167282548-0d1c4754-e895-454e-9ad1-0d1ad00df6a8.png",alt:"img"})))}u.isMDXComponent=!0}}]);