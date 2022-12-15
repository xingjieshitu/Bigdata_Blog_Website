"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[9901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),v=i,y=d["".concat(u,".").concat(v)]||d[v]||s[v]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const l={sidebar_position:1},o="Hive_Interview",a={unversionedId:"\u9762\u8bd5/Hive_Interview",id:"version-1.1/\u9762\u8bd5/Hive_Interview",title:"Hive_Interview",description:"Hive\u7684\u67b6\u6784",source:"@site/versioned_docs/version-1.1/\u9762\u8bd5/Hive_Interview.md",sourceDirName:"\u9762\u8bd5",slug:"/\u9762\u8bd5/Hive_Interview",permalink:"/Bigdata_Blog_Website/en/docs/\u9762\u8bd5/Hive_Interview",draft:!1,tags:[],version:"1.1",lastUpdatedBy:"xingjieshitu",lastUpdatedAt:1670742736,formattedLastUpdatedAt:"Dec 11, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Open_Source_Book",permalink:"/Bigdata_Blog_Website/en/docs/\u7535\u5b50\u4e66/Open_Source_Book"},next:{title:"Hive_Optimization",permalink:"/Bigdata_Blog_Website/en/docs/\u9762\u8bd5/Hive_Optimization"}},u={},p=[{value:"Hive\u7684\u67b6\u6784",id:"hive\u7684\u67b6\u6784",level:2},{value:"Hive\u548c\u6570\u636e\u5e93\u6bd4\u8f83",id:"hive\u548c\u6570\u636e\u5e93\u6bd4\u8f83",level:2},{value:"\u5185\u90e8\u8868\u548c\u5916\u90e8\u8868",id:"\u5185\u90e8\u8868\u548c\u5916\u90e8\u8868",level:2},{value:"4\u4e2aBy\u533a\u522b",id:"4\u4e2aby\u533a\u522b",level:2},{value:"\u7cfb\u7edf\u51fd\u6570",id:"\u7cfb\u7edf\u51fd\u6570",level:2},{value:"\u81ea\u5b9a\u4e49UDF\u3001UDTF\u51fd\u6570",id:"\u81ea\u5b9a\u4e49udfudtf\u51fd\u6570",level:2},{value:"\u7a97\u53e3\u51fd\u6570",id:"\u7a97\u53e3\u51fd\u6570",level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hive_interview"},"Hive_Interview"),(0,i.kt)("h2",{id:"hive\u7684\u67b6\u6784"},"Hive\u7684\u67b6\u6784"),(0,i.kt)("p",null,"Hive\u5143\u6570\u636e\u9ed8\u8ba4\u5b58\u50a8\u5728derby\u6570\u636e\u5e93\uff0c\u4e0d\u652f\u6301\u591a\u5ba2\u6237\u7aef\u8bbf\u95ee\uff0c\u6240\u4ee5\u5c06\u5143\u6570\u636e\u5b58\u50a8\u5728MySQl\uff0c\u652f\u6301\u591a\u5ba2\u6237\u7aef\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/164068515-09016e87-362d-4b98-a16f-585bc83668ae.png",alt:"img"})),(0,i.kt)("h2",{id:"hive\u548c\u6570\u636e\u5e93\u6bd4\u8f83"},"Hive\u548c\u6570\u636e\u5e93\u6bd4\u8f83"),(0,i.kt)("p",null,"Hive \u548c\u6570\u636e\u5e93\u9664\u4e86\u62e5\u6709\u7c7b\u4f3c\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u518d\u65e0\u7c7b\u4f3c\u4e4b\u5904\u3002\n1\uff09\u6570\u636e\u5b58\u50a8\u4f4d\u7f6e\nHive \u5b58\u50a8\u5728 HDFS \u3002\u6570\u636e\u5e93\u5c06\u6570\u636e\u4fdd\u5b58\u5728\u5757\u8bbe\u5907\u6216\u8005\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002\n2\uff09\u6570\u636e\u66f4\u65b0\nHive\u4e2d\u4e0d\u5efa\u8bae\u5bf9\u6570\u636e\u7684\u6539\u5199\u3002\u800c\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u901a\u5e38\u662f\u9700\u8981\u7ecf\u5e38\u8fdb\u884c\u4fee\u6539\u7684\uff0c\n3\uff09\u6267\u884c\u5ef6\u8fdf\nHive \u6267\u884c\u5ef6\u8fdf\u8f83\u9ad8\u3002\u6570\u636e\u5e93\u7684\u6267\u884c\u5ef6\u8fdf\u8f83\u4f4e\u3002\u5f53\u7136\uff0c\u8fd9\u4e2a\u662f\u6709\u6761\u4ef6\u7684\uff0c\u5373\u6570\u636e\u89c4\u6a21\u8f83\u5c0f\uff0c\u5f53\u6570\u636e\u89c4\u6a21\u5927\u5230\u8d85\u8fc7\u6570\u636e\u5e93\u7684\u5904\u7406\u80fd\u529b\u7684\u65f6\u5019\uff0cHive\u7684\u5e76\u884c\u8ba1\u7b97\u663e\u7136\u80fd\u4f53\u73b0\u51fa\u4f18\u52bf\u3002\n4\uff09\u6570\u636e\u89c4\u6a21\nHive\u652f\u6301\u5f88\u5927\u89c4\u6a21\u7684\u6570\u636e\u8ba1\u7b97\uff1b\u6570\u636e\u5e93\u53ef\u4ee5\u652f\u6301\u7684\u6570\u636e\u89c4\u6a21\u8f83\u5c0f\u3002"),(0,i.kt)("h2",{id:"\u5185\u90e8\u8868\u548c\u5916\u90e8\u8868"},"\u5185\u90e8\u8868\u548c\u5916\u90e8\u8868"),(0,i.kt)("p",null,"\u5143\u6570\u636e\u3001\u539f\u59cb\u6570\u636e\n1\uff09\u5220\u9664\u6570\u636e\u65f6\uff1a\n\u5185\u90e8\u8868\uff1a\u5143\u6570\u636e\u3001\u539f\u59cb\u6570\u636e\uff0c\u5168\u5220\u9664\n\u5916\u90e8\u8868\uff1a\u5143\u6570\u636e \u53ea\u5220\u9664\n2\uff09\u5728\u516c\u53f8\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u4ec0\u4e48\u65f6\u5019\u521b\u5efa\u5185\u90e8\u8868\uff0c\u4ec0\u4e48\u65f6\u5019\u521b\u5efa\u5916\u90e8\u8868\uff1f\n\u5728\u516c\u53f8\u4e2d\u7edd\u5927\u591a\u6570\u573a\u666f\u90fd\u662f\u5916\u90e8\u8868\u3002\n\u81ea\u5df1\u4f7f\u7528\u7684\u4e34\u65f6\u8868\uff0c\u624d\u4f1a\u521b\u5efa\u5185\u90e8\u8868\uff1b"),(0,i.kt)("h2",{id:"4\u4e2aby\u533a\u522b"},"4\u4e2aBy\u533a\u522b"),(0,i.kt)("p",null,"1\uff09Order By\uff1a\u5168\u5c40\u6392\u5e8f\uff0c\u53ea\u6709\u4e00\u4e2aReducer\uff1b\n2\uff09Sort By\uff1a\u5206\u533a\u5185\u6709\u5e8f\uff1b\n3\uff09Distrbute By\uff1a\u7c7b\u4f3cMR\u4e2dPartition\uff0c\u8fdb\u884c\u5206\u533a\uff0c\u7ed3\u5408sort by\u4f7f\u7528\u3002\n4\uff09 Cluster By\uff1a\u5f53Distribute by\u548cSorts by\u5b57\u6bb5\u76f8\u540c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528Cluster by\u65b9\u5f0f\u3002Cluster by\u9664\u4e86\u5177\u6709Distribute by\u7684\u529f\u80fd\u5916\u8fd8\u517c\u5177Sort by\u7684\u529f\u80fd\u3002\u4f46\u662f\u6392\u5e8f\u53ea\u80fd\u662f\u5347\u5e8f\u6392\u5e8f\uff0c\u4e0d\u80fd\u6307\u5b9a\u6392\u5e8f\u89c4\u5219\u4e3aASC\u6216\u8005DESC\u3002\n\u5728\u751f\u4ea7\u73af\u5883\u4e2dOrder By\u7528\u7684\u6bd4\u8f83\u5c11\uff0c\u5bb9\u6613\u5bfc\u81f4OOM\u3002\n\u5728\u751f\u4ea7\u73af\u5883\u4e2dSort By + Distrbute By\u7528\u7684\u591a\u3002"),(0,i.kt)("h2",{id:"\u7cfb\u7edf\u51fd\u6570"},"\u7cfb\u7edf\u51fd\u6570"),(0,i.kt)("p",null,"1\uff09date_add\u3001date_sub\u51fd\u6570\uff08\u52a0\u51cf\u65e5\u671f\uff09\n2\uff09next_day\u51fd\u6570\uff08\u5468\u6307\u6807\u76f8\u5173\uff09\n3\uff09date_format\u51fd\u6570\uff08\u6839\u636e\u683c\u5f0f\u6574\u7406\u65e5\u671f\uff09\n4\uff09last_day\u51fd\u6570\uff08\u6c42\u5f53\u6708\u6700\u540e\u4e00\u5929\u65e5\u671f\uff09\n5\uff09collect_set\u51fd\u6570\n6\uff09get_json_object\u89e3\u6790json\u51fd\u6570\n7\uff09NVL\uff08\u8868\u8fbe\u5f0f1\uff0c\u8868\u8fbe\u5f0f2\uff09\n\u5982\u679c\u8868\u8fbe\u5f0f1\u4e3a\u7a7a\u503c\uff0cNVL\u8fd4\u56de\u503c\u4e3a\u8868\u8fbe\u5f0f2\u7684\u503c\uff0c\u5426\u5219\u8fd4\u56de\u8868\u8fbe\u5f0f1\u7684\u503c\u3002"),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49udfudtf\u51fd\u6570"},"\u81ea\u5b9a\u4e49UDF\u3001UDTF\u51fd\u6570"),(0,i.kt)("p",null,"1\uff09\u5728\u9879\u76ee\u4e2d\u81ea\u5b9a\u4e49\u8fc7UDF\u3001UDTF\u51fd\u6570\uff0c\u4ed6\u4eec\u5904\u7406\u4e86\u4ec0\u4e48\u95ee\u9898\uff0c\u81ea\u5b9a\u4e49\u6b65\u9aa4\uff1f\n\uff081\uff09\u7528UDF\u51fd\u6570\u89e3\u6790\u516c\u5171\u5b57\u6bb5\uff1b\u7528UDTF\u51fd\u6570\u89e3\u6790\u4e8b\u4ef6\u5b57\u6bb5\u3002\n\uff082\uff09\u81ea\u5b9a\u4e49UDF\uff1a\u7ee7\u627fUDF\uff0c\u91cd\u5199evaluate\u65b9\u6cd5\n\uff083\uff09\u81ea\u5b9a\u4e49UDTF\uff1a\u7ee7\u627f\u81eaGenericUDTF\uff0c\u91cd\u51993\u4e2a\u65b9\u6cd5\uff1ainitialize(\u81ea\u5b9a\u4e49\u8f93\u51fa\u7684\u5217\u540d\u548c\u7c7b\u578b)\uff0cprocess\uff08\u5c06\u7ed3\u679c\u8fd4\u56deforward(result)\uff09\uff0cclose\n2\uff09\u4e3a\u4ec0\u4e48\u8981\u81ea\u5b9a\u4e49UDF/UDTF\uff1f\n\u56e0\u4e3a\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u53ef\u4ee5\u81ea\u5df1\u57cb\u70b9Log\u6253\u5370\u65e5\u5fd7\uff0c\u51fa\u9519\u6216\u8005\u6570\u636e\u5f02\u5e38\uff0c\u65b9\u4fbf\u8c03\u8bd5\u3002"),(0,i.kt)("h2",{id:"\u7a97\u53e3\u51fd\u6570"},"\u7a97\u53e3\u51fd\u6570"),(0,i.kt)("p",null,"1\uff09Rank\n\uff081\uff09RANK() \u6392\u5e8f\u76f8\u540c\u65f6\u4f1a\u91cd\u590d\uff0c\u603b\u6570\u4e0d\u4f1a\u53d8"),(0,i.kt)("p",null,"\uff082\uff09DENSE_RANK() \u6392\u5e8f\u76f8\u540c\u65f6\u4f1a\u91cd\u590d\uff0c\u603b\u6570\u4f1a\u51cf\u5c11"),(0,i.kt)("p",null,"\uff083\uff09ROW_NUMBER() \u4f1a\u6839\u636e\u987a\u5e8f\u8ba1\u7b97"),(0,i.kt)("p",null,"2\uff09 OVER()\uff1a\u6307\u5b9a\u5206\u6790\u51fd\u6570\u5de5\u4f5c\u7684\u6570\u636e\u7a97\u53e3\u5927\u5c0f\uff0c\u8fd9\u4e2a\u6570\u636e\u7a97\u53e3\u5927\u5c0f\u53ef\u80fd\u4f1a\u968f\u7740\u884c\u7684\u53d8\u800c\u53d8\u5316\n\uff081\uff09CURRENT ROW\uff1a\u5f53\u524d\u884c"),(0,i.kt)("p",null,"\uff082\uff09n PRECEDING\uff1a\u5f80\u524dn\u884c\u6570\u636e"),(0,i.kt)("p",null,"\uff083\uff09 n FOLLOWING\uff1a\u5f80\u540en\u884c\u6570\u636e"),(0,i.kt)("p",null,"\uff084\uff09UNBOUNDED\uff1a\u8d77\u70b9\uff0cUNBOUNDED PRECEDING \u8868\u793a\u4ece\u524d\u9762\u7684\u8d77\u70b9\uff0c UNBOUNDED FOLLOWING\u8868\u793a\u5230\u540e\u9762\u7684\u7ec8\u70b9"),(0,i.kt)("p",null,"\uff085\uff09 LAG(col,n)\uff1a\u5f80\u524d\u7b2cn\u884c\u6570\u636e"),(0,i.kt)("p",null,"\uff086\uff09LEAD(col,n)\uff1a\u5f80\u540e\u7b2cn\u884c\u6570\u636e"),(0,i.kt)("p",null,"\uff087\uff09 NTILE(n)\uff1a\u628a\u6709\u5e8f\u5206\u533a\u4e2d\u7684\u884c\u5206\u53d1\u5230\u6307\u5b9a\u6570\u636e\u7684\u7ec4\u4e2d\uff0c\u5404\u4e2a\u7ec4\u6709\u7f16\u53f7\uff0c\u7f16\u53f7\u4ece1\u5f00\u59cb\uff0c\u5bf9\u4e8e\u6bcf\u4e00\u884c\uff0cNTILE\u8fd4\u56de\u6b64\u884c\u6240\u5c5e\u7684\u7ec4\u7684\u7f16\u53f7\u3002\n\u6ce8\u610f\uff1an\u5fc5\u987b\u4e3aint\u7c7b\u578b\u3002"))}s.isMDXComponent=!0}}]);