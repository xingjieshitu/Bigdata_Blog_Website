"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[9353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),y=o,d=m["".concat(i,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,c={unversionedId:"\u6570\u636e\u5e93/MySQL/MySQL_FAQ",id:"version-1.0/\u6570\u636e\u5e93/MySQL/MySQL_FAQ",title:"MySQL_FAQ",description:"Q1: MySQL Error \u201cToo many connections\u201d and how to resolve it",source:"@site/versioned_docs/version-1.0/\u6570\u636e\u5e93/MySQL/MySQL_FAQ.md",sourceDirName:"\u6570\u636e\u5e93/MySQL",slug:"/\u6570\u636e\u5e93/MySQL/MySQL_FAQ",permalink:"/Bigdata_Blog_Website/docs/1.0/\u6570\u636e\u5e93/MySQL/MySQL_FAQ",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"skylines",lastUpdatedAt:1671077155,formattedLastUpdatedAt:"2022\u5e7412\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf\u6570\u4ed3\u3001\u5b9e\u65f6\u6570\u4ed3\u4e0eData Lakehouse",permalink:"/Bigdata_Blog_Website/docs/1.0/\u6570\u636e\u5e93/Hudi/\u79bb\u7ebf\u6570\u4ed3\u3001\u5b9e\u65f6\u6570\u4ed3\u4e0eData Lakehouse"},next:{title:"Oracle_FAQ",permalink:"/Bigdata_Blog_Website/docs/1.0/\u6570\u636e\u5e93/Oracle/Oracle_FAQ"}},i={},s=[{value:"Q1: MySQL Error \u201cToo many connections\u201d and how to resolve it",id:"q1-mysql-error-too-many-connections-and-how-to-resolve-it",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"q1-mysql-error-too-many-connections-and-how-to-resolve-it"},"Q1: MySQL Error \u201cToo many connections\u201d and how to resolve it"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.thegeekdiary.com/mysql-error-too-many-connections-and-how-to-resolve-it/"},"\u89e3\u51b3\u65b9\u6848\u539f\u6587")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Solution")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mysql \u2013u root \u2013p\nmysql> SHOW VARIABLES LIKE 'max_connections';\n+-----------------+-------+\n| Variable_name   | Value |\n+-----------------+-------+\n| max_connections | 151   |\n+-----------------+-------+\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Changing the max_connections parameter (Temporarily)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mysql \u2013u root \u2013p\nmysql> SET GLOBAL max_connections = 512;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Changing the max_connections parameter (Permanently)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# vi /etc/my.cnf\nmax_connections = 512\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For CentOS/RHEL 6:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# service mysqld restart\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For CentOS/RHEL 7:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# systemctl restart mysqld\n")))}u.isMDXComponent=!0}}]);