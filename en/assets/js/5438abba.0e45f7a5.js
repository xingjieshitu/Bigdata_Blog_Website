"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[3665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,b=d["".concat(c,".").concat(h)]||d[h]||s[h]||l;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:1},i="Dolphinscheduler_FAQ",a={unversionedId:"\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",id:"\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",title:"Dolphinscheduler_FAQ",description:"Q1: Dolphinscheduler 2.0  MySQL Jdbc \u7f3a\u5931\u95ee\u9898",source:"@site/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ.md",sourceDirName:"\u5927\u6570\u636e\u6846\u67b6_FAQ",slug:"/\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/next/\u5927\u6570\u636e\u6846\u67b6_FAQ/Dolphinscheduler_FAQ",draft:!1,tags:[],version:"current",lastUpdatedBy:"xingjieshitu",lastUpdatedAt:1671360868,formattedLastUpdatedAt:"Dec 18, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Debezium_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/next/\u5927\u6570\u636e\u6846\u67b6_FAQ/Debezium_FAQ"},next:{title:"Flink_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/next/\u5927\u6570\u636e\u6846\u67b6_FAQ/FLINK_FAQ"}},c={},p=[{value:"Q1: Dolphinscheduler 2.0  MySQL Jdbc \u7f3a\u5931\u95ee\u9898",id:"q1-dolphinscheduler-20--mysql-jdbc-\u7f3a\u5931\u95ee\u9898",level:2},{value:"Q2: Dolphinscheduler \u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a bug \u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25",id:"q2-dolphinscheduler-\u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a-bug-\u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dolphinscheduler_faq"},"Dolphinscheduler_FAQ"),(0,o.kt)("h2",{id:"q1-dolphinscheduler-20--mysql-jdbc-\u7f3a\u5931\u95ee\u9898"},"Q1: Dolphinscheduler 2.0  MySQL Jdbc \u7f3a\u5931\u95ee\u9898"),(0,o.kt)("p",null,"\u5728 Dolphinscheduler/lib/plugin/task/sql \u76ee\u5f55\u4e0b\u6dfb\u52a0 Jdbc jar \u5305  Dolphinscheduler 2.0 \u4e4b\u540e\u9ed8\u8ba4\u4e0d\u542b\u76f8\u5173 jar."),(0,o.kt)("h2",{id:"q2-dolphinscheduler-\u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a-bug-\u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25"},"Q2: Dolphinscheduler \u5931\u8d25\u91cd\u8bd5\u673a\u5236\u6709\u4e00\u5b9a bug \u5bfc\u81f4\u91cd\u8bd5\u5931\u8d25"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1X44y1u7P2?spm_id_from=333.999.0.0"},"Apache DolphinScheduler 22\u5e745\u6708\u7b2c\u4e00\u6b21\u5468\u4f1a")))}s.isMDXComponent=!0}}]);