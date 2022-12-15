"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[5710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(a),d=r,k=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="Kafka_Interview",s={unversionedId:"\u9762\u8bd5/Kafka_Interview",id:"version-1.1/\u9762\u8bd5/Kafka_Interview",title:"Kafka_Interview",description:"Kafka \u5982\u4f55\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\uff1f",source:"@site/versioned_docs/version-1.1/\u9762\u8bd5/Kafka_Interview.md",sourceDirName:"\u9762\u8bd5",slug:"/\u9762\u8bd5/Kafka_Interview",permalink:"/Bigdata_Blog_Website/en/docs/\u9762\u8bd5/Kafka_Interview",draft:!1,tags:[],version:"1.1",lastUpdatedBy:"xingjieshitu",lastUpdatedAt:1671078044,formattedLastUpdatedAt:"Dec 15, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hive_Optimization",permalink:"/Bigdata_Blog_Website/en/docs/\u9762\u8bd5/Hive_Optimization"}},l={},c=[{value:"Kafka \u5982\u4f55\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\uff1f",id:"kafka-\u5982\u4f55\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5",level:2},{value:"Kafka \u65e5\u5fd7\u4fdd\u5b58\u65f6\u95f4\u591a\u4e45\u5408\u9002\uff1f",id:"kafka-\u65e5\u5fd7\u4fdd\u5b58\u65f6\u95f4\u591a\u4e45\u5408\u9002",level:2},{value:"Kafka \u7684\u6570\u636e\u91cf\u5e94\u8be5\u5982\u4f55\u8ba1\u7b97\u5462\uff1f",id:"kafka-\u7684\u6570\u636e\u91cf\u5e94\u8be5\u5982\u4f55\u8ba1\u7b97\u5462",level:2},{value:"Kafka \u7684\u786c\u76d8\u5927\u5c0f\u5e94\u8be5\u4e3a\u591a\u5c11\uff1f",id:"kafka-\u7684\u786c\u76d8\u5927\u5c0f\u5e94\u8be5\u4e3a\u591a\u5c11",level:2},{value:"Kafka \u6709\u591a\u5c11\u4e2a topic\uff1f",id:"kafka-\u6709\u591a\u5c11\u4e2a-topic",level:2},{value:"Kafka \u7684\u5206\u533a\u5206\u914d\u7b56\u7565\u662f\u4ec0\u4e48\uff1f",id:"kafka-\u7684\u5206\u533a\u5206\u914d\u7b56\u7565\u662f\u4ec0\u4e48",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka_interview"},"Kafka_Interview"),(0,r.kt)("h2",{id:"kafka-\u5982\u4f55\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5"},"Kafka \u5982\u4f55\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\uff1f"),(0,r.kt)("p",null,"Kafka\u5b98\u65b9\u81ea\u5e26\u538b\u529b\u6d4b\u8bd5\u811a\u672c\uff08kafka-consumer-perf-test.sh\u3001kafka-producer-perf-test.sh\uff09\u3002Kafka\u538b\u6d4b\u65f6\uff0c\u53ef\u4ee5\u67e5\u770b\u5230\u54ea\u4e2a\u5730\u65b9\u51fa\u73b0\u4e86\u74f6\u9888\uff08CPU\uff0c\u5185\u5b58\uff0c\u7f51\u7edcIO\uff09\u3002\u4e00\u822c\u90fd\u662f\u7f51\u7edcIO\u8fbe\u5230\u74f6\u9888\u3002"),(0,r.kt)("h2",{id:"kafka-\u65e5\u5fd7\u4fdd\u5b58\u65f6\u95f4\u591a\u4e45\u5408\u9002"},"Kafka \u65e5\u5fd7\u4fdd\u5b58\u65f6\u95f4\u591a\u4e45\u5408\u9002\uff1f"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u662f7\u5929\uff0c\u751f\u4ea7\u73af\u5883\u4e00\u822c\u8c03\u6574\u4e3a3\u5929\u3002"),(0,r.kt)("h2",{id:"kafka-\u7684\u6570\u636e\u91cf\u5e94\u8be5\u5982\u4f55\u8ba1\u7b97\u5462"},"Kafka \u7684\u6570\u636e\u91cf\u5e94\u8be5\u5982\u4f55\u8ba1\u7b97\u5462\uff1f"),(0,r.kt)("p",null,"\u6bcf\u5929\u603b\u6570\u636e\u91cf100g\uff0c\u6bcf\u5929\u4ea7\u751f1\u4ebf\u6761\u65e5\u5fd7\uff0c 10000\u4e07/24/60/60=1150\u6761/\u6bcf\u79d2\u949f\n\u5e73\u5747\u6bcf\u79d2\u949f\uff1a1150\u6761\n\u4f4e\u8c37\u6bcf\u79d2\u949f\uff1a50\u6761\n\u9ad8\u5cf0\u6bcf\u79d2\u949f\uff1a1150\u6761*\uff082-20\u500d\uff09=2300\u6761-23000\u6761\n\u6bcf\u6761\u65e5\u5fd7\u5927\u5c0f\uff1a0.5k-2k\uff08\u53d61k\uff09\n\u6bcf\u79d2\u591a\u5c11\u6570\u636e\u91cf\uff1a2.0M-20MB"),(0,r.kt)("h2",{id:"kafka-\u7684\u786c\u76d8\u5927\u5c0f\u5e94\u8be5\u4e3a\u591a\u5c11"},"Kafka \u7684\u786c\u76d8\u5927\u5c0f\u5e94\u8be5\u4e3a\u591a\u5c11\uff1f"),(0,r.kt)("p",null,"\u6bcf\u5929\u7684\u6570\u636e\u91cf100g",(0,r.kt)("em",{parentName:"p"},"2\u4e2a\u526f\u672c"),"3\u5929/70%"),(0,r.kt)("h2",{id:"kafka-\u6709\u591a\u5c11\u4e2a-topic"},"Kafka \u6709\u591a\u5c11\u4e2a topic\uff1f"),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\uff1a\u591a\u5c11\u4e2a\u65e5\u5fd7\u7c7b\u578b\u5c31\u591a\u5c11\u4e2aTopic\u3002\u4e5f\u6709\u5bf9\u65e5\u5fd7\u7c7b\u578b\u8fdb\u884c\u5408\u5e76\u7684\u3002\n\u4e00\u822c\u8fd8\u6709\u5404\u79cd\u6d4b\u8bd5\u548c\u5e9f\u5f03\u7684topic\uff0c\u51e0\u5341\u4e2a\u5230\u4e0a\u767e\u4e2a\u90fd\u5f88\u6b63\u5e38\uff0c\u5e38\u7528\u7684\u4f1a\u5c11\u4e00\u4e9b\u3002"),(0,r.kt)("h2",{id:"kafka-\u7684\u5206\u533a\u5206\u914d\u7b56\u7565\u662f\u4ec0\u4e48"},"Kafka \u7684\u5206\u533a\u5206\u914d\u7b56\u7565\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Select between the "range" or "roundrobin" strategy for assigning partitions to consumer streams.\nThe round-robin partition assignor lays out all the available partitions and all the available consumer threads. It then proceeds to do a round-robin assignment from partition to consumer thread. If the subscriptions of all consumer instances are identical, then the partitions will be uniformly distributed. (i.e., the partition ownership counts will be within a delta of exactly one across all consumer threads.) Round-robin assignment is permitted only if: (a) Every topic has the same number of streams within a consumer instance (b) The set of subscribed topics is identical for every consumer instance within the group.\nRange partitioning works on a per-topic basis. For each topic, we lay out the available partitions in numeric order and the consumer threads in lexicographic order. We then divide the number of partitions by the total number of consumer streams (threads) to determine the number of partitions to assign to each consumer. If it does not evenly divide, then the first few consumers will have one extra partition.')),(0,r.kt)("p",null,"\u9ed8\u8ba4\u53c2\u6570\u4e3arange"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/148711590-0e498bf9-86d4-47db-8555-9fec538940e4.png",alt:"image"})),(0,r.kt)("p",null,"roundrobin \u4f7f\u7528\u524d\u63d0\uff1a\n\uff08a\uff09\u6bcf\u4e2a\u4e3b\u9898\u5728\u4f7f\u7528\u8005\u5b9e\u4f8b\u4e2d\u5177\u6709\u76f8\u540c\u6570\u91cf\u7684\u6d41\uff08b\uff09\u96c6\u5408 \u5bf9\u4e8e\u8be5\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u6d88\u8d39\u8005\u5b9e\u4f8b\uff0c\u5df2\u8ba2\u9605\u4e3b\u9898\u7684\u6570\u91cf\u90fd\u662f\u76f8\u540c\u7684\u3002"))}u.isMDXComponent=!0}}]);