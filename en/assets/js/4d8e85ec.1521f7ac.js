"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[3231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},s=void 0,i={unversionedId:"\u5bb9\u5668\u5316/Kubernetes/Kubernetes \u535a\u6587\u63a8\u8350",id:"version-1.0/\u5bb9\u5668\u5316/Kubernetes/Kubernetes \u535a\u6587\u63a8\u8350",title:"Kubernetes \u535a\u6587\u63a8\u8350",description:"Kubernetes Handbook\u2014\u2014Kubernetes \u4e2d\u6587\u6307\u5357/\u4e91\u539f\u751f\u5e94\u7528\u67b6\u6784\u5b9e\u6218\u624b\u518c",source:"@site/versioned_docs/version-1.0/\u5bb9\u5668\u5316/Kubernetes/Kubernetes \u535a\u6587\u63a8\u8350.md",sourceDirName:"\u5bb9\u5668\u5316/Kubernetes",slug:"/\u5bb9\u5668\u5316/Kubernetes/Kubernetes \u535a\u6587\u63a8\u8350",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u5bb9\u5668\u5316/Kubernetes/Kubernetes \u535a\u6587\u63a8\u8350",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"xingjieshitu",lastUpdatedAt:1670742736,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to BigData Blog",permalink:"/Bigdata_Blog_Website/en/docs/1.0/overview"},next:{title:"Kubernetes_Study",permalink:"/Bigdata_Blog_Website/en/docs/1.0/\u5bb9\u5668\u5316/Kubernetes/Kubernetes_Study"}},c={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://jimmysong.io/kubernetes-handbook/"},"Kubernetes Handbook\u2014\u2014Kubernetes \u4e2d\u6587\u6307\u5357/\u4e91\u539f\u751f\u5e94\u7528\u67b6\u6784\u5b9e\u6218\u624b\u518c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.qikqiak.com/k8s-book/"},"\u4eceDocker\u5230Kubernetes\u8fdb\u9636")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://xuthus.cc/linux/vagrant-create-k8s.html#%E9%9B%86%E7%BE%A4%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE"},"\u5229\u7528Vagrant\u521b\u5efak8s\u96c6\u7fa4")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/yitianyouyitian/p/10143217.html"},"\u4f7f\u7528kubeadm\u521b\u5efakubernets\u96c6\u7fa4 ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?__biz=MzA5MTc0NTMwNQ==&mid=2650718974&idx=2&sn=625d57b356f8b0c26ed8f581fcacfb9a&chksm=887ddf88bf0a569ec2f9983c31cf5beed8f0ac898b1bae258bd439ffef9814026831520e45fa&mpshare=1&scene=24&srcid=&sharer_sharetime=1588783535589&sharer_shareid=5f0af8bdae5d555684a506bc1addb2f8#rd"},"\u6211\u82b1\u4e8610\u4e2a\u5c0f\u65f6\uff0c\u5199\u51fa\u4e86\u8fd9\u7bc7K8S\u67b6\u6784\u89e3\u6790")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/757181"},"K8s \u4ece\u61f5\u5708\u5230\u719f\u7ec3-\u96c6\u7fa4\u4f38\u7f29\u539f\u7406")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/xgjianstart/article/details/54943531"},"\u5927\u6570\u636e\u5e73\u53f0Docker\u5e94\u7528\u4e4b\u8def")))}u.isMDXComponent=!0}}]);