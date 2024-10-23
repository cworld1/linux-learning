"use strict";(self.webpackChunklinux_learning=self.webpackChunklinux_learning||[]).push([[471],{9613:(n,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var t=r(9496);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var i=t.createContext({}),p=function(n){var e=t.useContext(i),r=e;return n&&(r="function"==typeof n?n(e):c(c({},e),n)),r},s=function(n){var e=p(n.components);return t.createElement(i.Provider,{value:e},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,o=n.originalType,i=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(f,c(c({ref:e},s),{},{components:r})):t.createElement(f,c({ref:e},s))}));function f(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l[u]="string"==typeof n?n:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9145:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(8957),a=(r(9496),r(9613));const o={},c="Anacron \u4efb\u52a1",l={unversionedId:"ex/anacron-task",id:"ex/anacron-task",title:"Anacron \u4efb\u52a1",description:"crond \u548c anacron",source:"@site/docs/ex/02-anacron-task.md",sourceDirName:"ex",slug:"/ex/anacron-task",permalink:"/linux-learning/docs/ex/anacron-task",draft:!1,editUrl:"https://github.com/cworld1/linux-learning/blob/main/docs/ex/02-anacron-task.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shell \u811a\u672c",permalink:"/linux-learning/docs/ex/shell-script"}},i={},p=[{value:"crond \u548c anacron",id:"crond-\u548c-anacron",level:2},{value:"\u7cfb\u7edf\u7684 anacron \u4efb\u52a1",id:"\u7cfb\u7edf\u7684-anacron-\u4efb\u52a1",level:2}],s={toc:p},u="wrapper";function d(n){let{components:e,...r}=n;return(0,a.kt)(u,(0,t.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anacron-\u4efb\u52a1"},"Anacron \u4efb\u52a1"),(0,a.kt)("h2",{id:"crond-\u548c-anacron"},"crond \u548c anacron"),(0,a.kt)("p",null,"crond \u5047\u5b9a\u670d\u52a1\u5668\u662f 24","*","7 \u5168\u5929\u5019\u8fd0\u884c\u7684\uff0c\u5f53\u7cfb\u7edf\u65f6\u95f4\u53d8\u5316\u6216\u6709\u4e00\u6bb5\u5173\u673a\u65f6\u95f4\u5c31\u4f1a\u9057\u6f0f\u8fd9\u4e00\u65f6\u95f4\u6bb5\u5e94\u8be5\u6267\u884c\u7684 cron \u4efb\u52a1\u3002anacron\uff08anachronistic cron\uff09 \u662f ",(0,a.kt)("strong",{parentName:"p"},"crond \u7684\u4e00\u4e2a\u8fde\u7eed\u65f6\u95f4\u7248\u672c"),"\uff0c\u5b83\u8fd0\u884c\u8ba1\u7b97\u673a\u5173\u673a\u65f6 crond \u6ca1\u6709\u8fd0\u884c\u7684\u4efb\u52a1,\u7528\u4e8e\u7b14\u8bb0\u672c\u7535\u8111\u3001\u53f0\u5f0f\u673a\u3001\u5de5\u4f5c\u7ad9\u7b49\u4e0d\u4e00\u76f4\u5f00\u673a\u7684\u7cfb\u7edf\uff0c\u5bf9\u5076\u5c14\u8981\u5173\u673a\u7684\u670d\u52a1\u5668\u4e5f\u5f88\u6709\u7528\u3002"),(0,a.kt)("p",null,"\u82e5\u670d\u52a1\u5668 24","*","7 \u5168\u5929\u5019\u8fd0\u884c\uff0c\u65e0\u9700\u5f00\u542f anacron \u5b88\u62a4\u8fdb\u7a0b\u3002\u6bcf\u4e2a\u7528\u6237\u90fd\u53ef\u4ee5\u5b89\u6392\u81ea\u5df1\u7684 cron \u4efb\u52a1\u3002\u8d85\u7ea7\u7528\u6237\u53ef\u4ee5\u7ba1\u7406\u7cfb\u7edf\u7684 cron \u4efb\u52a1\u548c anacron \u4efb\u52a1\u3002"),(0,a.kt)("h2",{id:"\u7cfb\u7edf\u7684-anacron-\u4efb\u52a1"},"\u7cfb\u7edf\u7684 anacron \u4efb\u52a1"),(0,a.kt)("p",null,"anacron \u5728 /var/spool/anacron \u4e2d\u4fdd\u7559\u65f6\u95f4\u6233\u6587\u4ef6\uff0c\u8bb0\u5f55\u4f5c\u4e1a\u8fd0\u884c\u7684\u65f6\u95f4\u3002\u5f53 anacron \u8fd0\u884c\u65f6\uff0c\u5b83\u68c0\u67e5\u81ea\u4f5c\u4e1a\u4e0a\u4e00\u6b21\u8fd0\u884c\u4ee5\u6765\u662f\u5426\u5df2\u7ecf\u7ecf\u8fc7\u4e86\u6240\u9700\u7684\u5929\u6570\uff0c\u5982\u679c\u9700\u8981\uff0c\u5c31\u8fd0\u884c\u4f5c\u4e1a\u3002"),(0,a.kt)("p",null,"anacron \u7684\u4efb\u52a1\u8868\u5b58\u50a8\u5728 /etc/anacrontab \u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u9879\u4efb\u52a1\uff0canacron \u5148\u5224\u5b9a\u8be5\u4efb\u52a1\u662f\u5426\u5df2\u5728\u914d\u7f6e\u6587\u4ef6\u7684\u5468\u671f\u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684\u671f\u95f4\u5185\u88ab\u6267\u884c\u4e86\u3002\u5982\u679c\u5b83\u5728\u7ed9\u5b9a\u5468\u671f\u5185\u8fd8\u6ca1\u6709\u88ab\u6267\u884c\uff0canacron \u4f1a\u7b49\u5f85\u5ef6\u8fdf\u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684\u5206\u949f\u6570\uff0c\u7136\u540e\u518d\u6b21\u5c1d\u8bd5\u6267\u884c\u547d\u4ee4\u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u5f53\u4efb\u52a1\u5b8c\u6210\u540e\uff0canacron \u4f1a\u5c06\u6b64\u65e5\u671f\u8bb0\u5f55\u5728 /var/spo ol/anacron \u76ee\u5f55\u7684\u65f6\u95f4\u6233\uff08Timestamp\uff09\u6587\u4ef6\u4e2d\uff0c\u9ed8\u8ba4\u7684\u65f6\u95f4\u6233\u6587\u4ef6\u6709\u4e09\u4e2a\uff1acron.daily\uff0ccron.monthly \u548c cron.weekly\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls /var/spool/anacron/\n")),(0,a.kt)("p",null,"/etc/anacrontab \u9ed8\u8ba4\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/anacrontab\n# SHELL=/bin/sh\n# PATH=/sbin:/bin:/usr/sbin:/usr/bin\n# MAILTO=root\n# # \u82e51\u5929\u4e4b\u5185\u6ca1\u6709\u8fd0\u884c\u201c\u65e5\u4efb\u52a1\u201d\uff0c\u5219 65 \u5206\u949f\u4e4b\u540e\u8fd0\u884c\u5b83\n# 1       65      cron.daily          run-parts /etc/cron.daily\n# # \u82e57\u5929\u4e4b\u5185\u6ca1\u6709\u8fd0\u884c\u201c\u5468\u4efb\u52a1\u201d\uff0c\u5219 70 \u5206\u949f\u4e4b\u540e\u8fd0\u884c\u5b83\n# 7       70      cron.weekly         run-parts /etc/cron.weekly\n# # \u82e530\u5929\u4e4b\u5185\u6ca1\u6709\u8fd0\u884c\u201c\u6708\u4efb\u52a1\u201d\uff0c\u5219 75 \u5206\u949f\u4e4b\u540e\u8fd0\u884c\u5b83\n# 30      75      cron.monthly        run-parts /etc/cron.monthly\n")))}d.isMDXComponent=!0}}]);