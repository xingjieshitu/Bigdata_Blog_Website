"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[6124],{3905:(e,n,a)=>{a.d(n,{Zo:()=>k,kt:()=>u});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},k=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),f=s(a),u=l,d=f["".concat(o,".").concat(u)]||f[u]||p[u]||i;return a?t.createElement(d,r(r({ref:n},k),{},{components:a})):t.createElement(d,r({ref:n},k))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=f;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5366:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=a(7462),l=(a(7294),a(3905));const i={},r="A Scala-free Flink",c={unversionedId:"\u8ba1\u7b97\u6846\u67b6/Flink/A Scala-free Flink",id:"version-1.0/\u8ba1\u7b97\u6846\u67b6/Flink/A Scala-free Flink",title:"A Scala-free Flink",description:"A detailed blog post",source:"@site/versioned_docs/version-1.0/\u8ba1\u7b97\u6846\u67b6/Flink/A Scala-free Flink.md",sourceDirName:"\u8ba1\u7b97\u6846\u67b6/Flink",slug:"/\u8ba1\u7b97\u6846\u67b6/Flink/A Scala-free Flink",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u8ba1\u7b97\u6846\u67b6/Flink/A Scala-free Flink",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"xingjieshitu",lastUpdatedAt:1670742736,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open_Source_Book",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u7535\u5b50\u4e66/Open_Source_Book"},next:{title:"FLINK_FAQ",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u8ba1\u7b97\u6846\u67b6/Flink/FLINK_FAQ"}},o={},s=[{value:"\u535a\u6587\u7ffb\u8bd1",id:"\u535a\u6587\u7ffb\u8bd1",level:2},{value:"\u7c7b\u8def\u5f84\u548c Scala",id:"\u7c7b\u8def\u5f84\u548c-scala",level:3},{value:"\u9690\u85cf Scala",id:"\u9690\u85cf-scala",level:3},{value:"Apache Flink \u4e2d Scala \u7684\u672a\u6765",id:"apache-flink-\u4e2d-scala-\u7684\u672a\u6765",level:3}],k={toc:s};function p(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"a-scala-free-flink"},"A Scala-free Flink"),(0,l.kt)("p",null,"A detailed ",(0,l.kt)("a",{parentName:"p",href:"https://flink.apache.org/2022/02/22/scala-free.html"},"blog post")),(0,l.kt)("p",null,"already explains the ins and outs of why Scala users can now use the Flink Java API with any Scala version (including Scala 3)."),(0,l.kt)("p",null,"In the end, removing Scala is just part of a larger effort of cleaning up and updating various technologies from the Flink ecosystem."),(0,l.kt)("h2",{id:"\u535a\u6587\u7ffb\u8bd1"},"\u535a\u6587\u7ffb\u8bd1"),(0,l.kt)("h3",{id:"\u7c7b\u8def\u5f84\u548c-scala"},"\u7c7b\u8def\u5f84\u548c Scala"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u8fc7\u57fa\u4e8e JVM \u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u60a8\u53ef\u80fd\u542c\u8bf4\u8fc7\u672f\u8bed\u7c7b\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u7c7b\u8def\u5f84\u5b9a\u4e49\u4e86\u5f53\u9700\u8981\u52a0\u8f7d\u7ed9\u5b9a\u7c7b\u6587\u4ef6\u65f6 JVM \u5c06\u5728\u54ea\u91cc\u641c\u7d22\u5b83\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u7c7b\u8def\u5f84\u4e0a\u53ef\u80fd\u53ea\u6709\u4e00\u4e2a\u7c7b\u6587\u4ef6\u7684\u5b9e\u4f8b\uff0c\u8fd9\u8feb\u4f7f Flink \u5c06\u4efb\u4f55\u4f9d\u8d56\u9879\u66b4\u9732\u7ed9\u7528\u6237\u3002"),(0,l.kt)("p",null,"\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48 Flink \u793e\u533a\u52aa\u529b\u4fdd\u6301\u6211\u4eec\u7684\u7c7b\u8def\u5f84\u201c\u5e72\u51c0\u201d\u2014\u2014\u6216\u8005\u6ca1\u6709\u4e0d\u5fc5\u8981\u7684\u4f9d\u8d56\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u7ec4\u5408\u9634\u5f71\u4f9d\u8d56\u3001\u5b50\u7c7b\u52a0\u8f7d\u548c\u53ef\u9009\u7ec4\u4ef6\u7684\u63d2\u4ef6\u62bd\u8c61\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"),(0,l.kt)("p",null,"Apache Flink \u8fd0\u884c\u65f6\u4e3b\u8981\u662f\u7528 Java \u7f16\u5199\u7684\uff0c\u4f46\u5305\u542b\u5f3a\u5236 Scala \u4f7f\u7528\u9ed8\u8ba4\u7c7b\u8def\u5f84\u7684\u5173\u952e\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u800c\u4e14\u7531\u4e8e Scala \u4e0d\u4fdd\u6301\u8de8\u6b21\u8981\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u517c\u5bb9\u6027\uff0c\u8fd9\u5728\u5386\u53f2\u4e0a\u9700\u8981\u4e3a\u6240\u6709\u7248\u672c\u7684 Scala \u4ea4\u53c9\u6784\u5efa\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u7531\u4e8e\u8bb8\u591a\u539f\u56e0\u2014\u2014\u7f16\u8bd1\u5668\u7684\u91cd\u5927\u53d8\u5316\u3001\u65b0\u7684\u6807\u51c6\u5e93\u548c\u91cd\u65b0\u8bbe\u8ba1\u7684\u5b8f\u7cfb\u7edf\u2014\u2014\u8bf4\u8d77\u6765\u5bb9\u6613\u505a\u8d77\u6765\u96be\u3002"),(0,l.kt)("h3",{id:"\u9690\u85cf-scala"},"\u9690\u85cf Scala"),(0,l.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0cFlink \u5728\u51e0\u4e2a\u5173\u952e\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u4e86 Scala\uff1bMesos \u96c6\u6210\u3001\u5e8f\u5217\u5316\u5806\u6808\u3001RPC \u548c\u8868\u89c4\u5212\u5668\u3002\u793e\u533a\u6ca1\u6709\u5220\u9664\u8fd9\u4e9b\u4f9d\u8d56\u9879\u6216\u5bfb\u627e\u4ea4\u53c9\u6784\u5efa\u5b83\u4eec\u7684\u65b9\u6cd5\uff0c\u800c\u662f\u9690\u85cf\u4e86 Scala\u3002"),(0,l.kt)("p",null,"\u5b83\u4ecd\u7136\u5b58\u5728\u4e8e\u4ee3\u7801\u5e93\u4e2d\uff0c\u4f46\u4e0d\u518d\u6cc4\u6f0f\u5230\u7528\u6237\u4ee3\u7801\u7c7b\u52a0\u8f7d\u5668\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728 1.14 \u4e2d\uff0c\u6211\u4eec\u8fc8\u51fa\u4e86\u5411\u7528\u6237\u9690\u85cf Scala \u7684\u7b2c\u4e00\u6b65\u3002\u6211\u4eec\u653e\u5f03\u4e86\u5bf9\u90e8\u5206\u5728 Scala \u4e2d\u5b9e\u73b0\u7684 Apache Mesos \u7684\u652f\u6301\uff0cKubernetes \u5728\u91c7\u7528\u65b9\u9762\u8fdc\u8fdc\u8d85\u8fc7\u4e86\u5b83\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06 RPC \u7cfb\u7edf\u9694\u79bb\u5230\u4e00\u4e2a\u4e13\u7528\u7684\u7c7b\u52a0\u8f7d\u5668\u4e2d\uff0c\u5305\u62ec Akka\u3002\u901a\u8fc7\u8fd9\u4e9b\u66f4\u6539\uff0c\u8fd0\u884c\u65f6\u672c\u8eab\u4e0d\u518d\u4f9d\u8d56\u4e8e Scala\uff08\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48 flink-runtime \u5931\u53bb\u4e86\u5b83\u7684 Scala \u540e\u7f00\uff09\uff0c\u4f46 Scala \u4ecd\u7136\u5b58\u5728\u4e8e API \u5c42\u4e2d\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u53d8\u5316\uff0c\u4ee5\u53ca\u6211\u4eec\u5b9e\u65bd\u5b83\u4eec\u7684\u5bb9\u6613\u7a0b\u5ea6\uff0c\u5f00\u59cb\u8ba9\u4eba\u4eec\u60f3\u77e5\u9053\u8fd8\u6709\u4ec0\u4e48\u53ef\u80fd\u3002"),(0,l.kt)("p",null,"\u6bd5\u7adf\uff0c\u6211\u4eec\u5728\u4e0d\u5230\u4e00\u4e2a\u6708\u7684\u65f6\u95f4\u5185\u5c31\u9694\u79bb\u4e86 Akka\uff0c\u8fd9\u4e2a\u4efb\u52a1\u79ef\u538b\u4e86\u591a\u5e74\uff0c\u88ab\u8ba4\u4e3a\u592a\u8017\u65f6\u4e86\u3002"),(0,l.kt)("p",null,"\u4e0b\u4e00\u4e2a\u5408\u4e4e\u903b\u8f91\u7684\u6b65\u9aa4\u662f\u5c06 DataStream / DataSet Java API \u4e0e Scala \u5206\u79bb\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e3b\u8981\u9700\u8981\u5bf9\u4e00\u4e9b\u6d4b\u8bd5 \u7c7b\u8fdb\u884c\u5c11\u91cf\u6e05\u7406\uff0c\u8fd8\u9700\u8981\u8bc6\u522b\u4ec5\u4e0e Scala API \u76f8\u5173\u7684\u4ee3\u7801\u8def\u5f84\u3002\u7136\u540e\u5c06\u8fd9\u4e9b\u8def\u5f84\u8fc1\u79fb\u5230 Scala API \u6a21\u5757\u4e2d\uff0c\u5e76\u4e14\u4ec5\u5728\u9700\u8981\u65f6\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u4e00\u76f4\u6269\u5c55\u4ee5\u652f\u6301\u67d0\u4e9b Scala \u7c7b\u578b\u7684Kryo \u5e8f\u5217\u5316\u7a0b\u5e8f\u73b0\u5728\u4ec5\u5728\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528 Scala API \u65f6\u624d\u5305\u542b\u5b83\u4eec\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u662f\u65f6\u5019\u5904\u7406 Table API\uff0c\u7279\u522b\u662f table planner\uff0c\u5728\u64b0\u5199\u672c\u6587\u65f6\u5b83\u5305\u542b 378,655 \u884c Scala \u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u8868\u89c4\u5212\u5668\u5c06 SQL \u548c\u8868 API \u67e5\u8be2\u89e3\u6790\u3001\u89c4\u5212\u548c\u4f18\u5316\u4e3a\u9ad8\u5ea6\u4f18\u5316\u7684 Java \u4ee3\u7801\u3002\u5b83\u662f Flink \u4e2d\u6700\u5e7f\u6cdb\u7684 Scala \u4ee3\u7801\u5e93\uff0c\u4e0d\u80fd\u8f7b\u6613\u79fb\u690d\u5230 Java\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u6211\u4eec\u4ece\u4e3a RPC \u5806\u6808\u6784\u5efa\u4e13\u7528\u7c7b\u52a0\u8f7d\u5668\u548c\u4e3a\u5e8f\u5217\u5316\u5668\u7684\u6761\u4ef6\u7c7b\u52a0\u8f7d\u4e2d\u5b66\u5230\u7684\u77e5\u8bc6\uff0c\u6211\u4eec\u5c06\u89c4\u5212\u5668\u9690\u85cf\u5728\u4e00\u4e2a\u4e0d\u66b4\u9732\u5176\u4efb\u4f55\u5185\u90e8\u7ed3\u6784\u7684\u62bd\u8c61\u80cc\u540e\uff0c\u5305\u62ec Scala\u3002"),(0,l.kt)("h3",{id:"apache-flink-\u4e2d-scala-\u7684\u672a\u6765"},"Apache Flink \u4e2d Scala \u7684\u672a\u6765"),(0,l.kt)("p",null,"\u867d\u7136\u8fd9\u4e9b\u66f4\u6539\u5927\u90e8\u5206\u53d1\u751f\u5728\u5e55\u540e\uff0c\u4f46\u5b83\u4eec\u5bfc\u81f4\u4e86\u4e00\u4e2a\u975e\u5e38\u9762\u5411\u7528\u6237\u7684\u66f4\u6539\uff1a\u5220\u9664\u4e86\u8bb8\u591a scala \u540e\u7f00\u3002\u60a8\u53ef\u4ee5\u5728\u672c\u6587\u7ed3\u5c3e\u5904\u627e\u5230\u4e22\u5931 Scala \u540e\u7f00\u7684\u6240\u6709\u4f9d\u8d56\u9879\u7684\u5217\u8868\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u5bf9 Table API \u7684\u66f4\u6539\u9700\u8981\u5bf9\u6253\u5305\u548c\u5206\u53d1\u8fdb\u884c\u4e00\u4e9b\u66f4\u6539\uff0c\u4e00\u4e9b\u4f9d\u8d56\u89c4\u5212\u5668\u5185\u90e8\u7684\u9ad8\u7ea7\u7528\u6237\u53ef\u80fd\u9700\u8981\u9002\u5e94\u3002"),(0,l.kt)("p",null,"\u5c55\u671b\u672a\u6765\uff0cFlink \u5c06\u7ee7\u7eed\u652f\u6301\u9488\u5bf9 Scala 2.12 \u7f16\u8bd1\u7684 DataStream \u548c Table API \u7684 Scala \u5305\uff0c\u800c Java API \u73b0\u5728\u5df2\u89e3\u9501\uff0c\u7528\u6237\u53ef\u4ee5\u5229\u7528\u4efb\u4f55 Scala \u7248\u672c\u7684\u7ec4\u4ef6\u3002\u6211\u4eec\u5df2\u7ecf\u770b\u5230\u793e\u533a\u4e2d\u51fa\u73b0\u4e86\u65b0\u7684 Scala 3 \u5305\u88c5\u5668\uff0c\u6211\u4eec\u5f88\u9ad8\u5174\u770b\u5230\u7528\u6237\u5982\u4f55\u5728\u4ed6\u4eec\u7684\u6d41\u5a92\u4f53\u7ba1\u9053\u4e2d\u5229\u7528\u8fd9\u4e9b\u5de5\u5177\uff01"),(0,l.kt)("p",null,"flink-cep, flink-clients, flink-connector-elasticsearch-base, flink-connector-elasticsearch6, flink-connector-elasticsearch7, flink-connector-gcp-pubsub, flink-connector-hbase-1.4, flink-connector-hbase-2.2, flink-connector-hbase-base, flink-connector-jdbc, flink-connector-kafka, flink-connector-kinesis, flink-connector-nifi, flink-connector-pulsar, flink-connector-rabbitmq, flink-connector-testing, flink-connector-twitter, flink-connector-wikiedits, flink-container, flink-dstl-dfs, flink-gelly, flink-hadoop-bulk, flink-kubernetes, flink-runtime-web, flink-sql-connector-elasticsearch6, flink-sql-connector-elasticsearch7, flink-sql-connector-hbase-1.4, flink-sql-connector-hbase-2.2, flink-sql-connector-kafka, flink-sql-connector-kinesis, flink-sql-connector-rabbitmq, flink-state-processor-api, flink-statebackend-rocksdb, flink-streaming-java, flink-table-api-java-bridge, flink-test-utils, flink-yarn, flink-table-runtime, flink-table-api-java-bridge "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/configuration/overview/#which-dependencies-do-you-need"},"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/configuration/overview/#which-dependencies-do-you-need")," "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/configuration/advanced/#anatomy-of-table-dependencies"},"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/configuration/advanced/#anatomy-of-table-dependencies")," "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ariskk/flink4s"},"https://github.com/ariskk/flink4s")," "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/findify/flink-adt"},"https://github.com/findify/flink-adt")," "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/sjwiesman/flink-scala-3"},"https://github.com/sjwiesman/flink-scala-3")," "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6839\u636e\u535a\u6587\u548c flink 1.15 \u53d1\u5e03\u516c\u544a\uff0c\u76ee\u524d flink table planner \u5bf9 Scala \u7684\u9690\u85cf\u5df2\u7ecf\u5b8c\u6210\uff0c\u4e3a\u4e86\u5411\u540e\u517c\u5bb9\uff0c1.15 \u4ecd\u7136\u63d0\u4f9b\u4e86\u5e26\u6709 Scala \u540e\u7f00\u7684 Flink Table Planner\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u91cd\u65b0\u6784\u5efa\u7684\nFlink Table Planner Loader")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167306854-01764dde-4cce-4b24-ab91-b9097c4c774b.png",alt:"img"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/FLINK-25128"},"\u91cd\u7ec4table\u6a21\u5757\uff0c\u5f15\u5165flink-table-planner-loader")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/12yDUCnvcwU2mODBKTHQ1xhfOq1ujYUrXltiN_rbhT34/edit#"},"[FLINK-24427] Hiding scala in flink-table-planner.google doc")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"note \u4f7f\u7528 flink sql-client \u65f6\uff0c\u5982\u679c\u4f7f\u7528 flink-table-planner_2.12 \u5e26\u6709 Scala \u540e\u7f00\u7684 jar \u5305\u6765\u4f7f\u7528 flink Scala app \u65f6\uff0c\u9700\u5c06\u5176\u653e\u5165 opt \u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u653e\u7f6e\u5728 lib \u76ee\u5f55\u4e0b\u4f1a\u76ee\u524d\u4f1a\u5bfc\u81f4\u5f02\u5e38")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167307335-6161a7a8-9754-4c39-88e5-d1c85eb8c1dc.png",alt:"img"})))}p.isMDXComponent=!0}}]);