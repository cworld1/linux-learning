"use strict";(self.webpackChunklinux_learning=self.webpackChunklinux_learning||[]).push([[8753],{9613:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(9496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),k=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=k(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=k(n),s=l,N=m["".concat(u,".").concat(s)]||m[s]||d[s]||r;return n?a.createElement(N,i(i({ref:e},o),{},{components:n})):a.createElement(N,i({ref:e},o))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[m]="string"==typeof t?t:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4102:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=n(8957),l=(n(9496),n(9613));const r={},i="\u7f51\u7edc\u914d\u7f6e\u4e0e\u7f51\u7edc\u5de5\u5177",p={unversionedId:"main/network-config-and-tools",id:"main/network-config-and-tools",title:"\u7f51\u7edc\u914d\u7f6e\u4e0e\u7f51\u7edc\u5de5\u5177",description:"\u5173\u4e8e Linux \u7f51\u7edc\u914d\u7f6e\u53ca\u76f8\u5173\u5de5\u5177\u7684\u8bb2\u89e3\u3002",source:"@site/docs/main/08-network-config-and-tools.md",sourceDirName:"main",slug:"/main/network-config-and-tools",permalink:"/en/docs/main/network-config-and-tools",draft:!1,editUrl:"https://github.com/cworld1/linux-learning/blob/main/docs/main/08-network-config-and-tools.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u6237\u7ba1\u7406\u548c\u6743\u9650\u7ba1\u7406",permalink:"/en/docs/main/account-and-authority-manage"},next:{title:"\u8fdb\u7a0b\u7ba1\u7406",permalink:"/en/docs/main/process-management"}},u={},k=[{value:"\u5185\u5bb9\u8981\u70b9",id:"\u5185\u5bb9\u8981\u70b9",level:2},{value:"Linux \u7684\u7f51\u7edc\u652f\u6301",id:"linux-\u7684\u7f51\u7edc\u652f\u6301",level:2},{value:"Linux \u7684\u7f51\u7edc\u63a5\u53e3",id:"linux-\u7684\u7f51\u7edc\u63a5\u53e3",level:3},{value:"Linux \u4e0b\u5e38\u89c1\u7684\u7f51\u7edc\u63a5\u53e3",id:"linux-\u4e0b\u5e38\u89c1\u7684\u7f51\u7edc\u63a5\u53e3",level:3},{value:"\u4e34\u65f6\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570",id:"\u4e34\u65f6\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570",level:2},{value:"\u914d\u7f6e\u7f51\u7edc\u53c2\u6570\u7684\u65b9\u6cd5",id:"\u914d\u7f6e\u7f51\u7edc\u53c2\u6570\u7684\u65b9\u6cd5",level:3},{value:"\u7ba1\u7406\u4ee5\u592a\u7f51\u63a5\u53e3",id:"\u7ba1\u7406\u4ee5\u592a\u7f51\u63a5\u53e3",level:3},{value:"ifconfig \u547d\u4ee4\u8be6\u89e3",id:"ifconfig-\u547d\u4ee4\u8be6\u89e3",level:3},{value:"\u6c38\u4e45\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570",id:"\u6c38\u4e45\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570",level:2},{value:"RHEL/CentOS \u4e2d\u7684 TCP/IP \u914d\u7f6e\u6587\u4ef6",id:"rhelcentos-\u4e2d\u7684-tcpip-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e\u6587\u4ef6",id:"\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u7cfb\u7edf\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6",id:"\u7cfb\u7edf\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u67e5\u770b Linux \u5185\u6838\u8def\u7531\u8868",id:"\u67e5\u770b-linux-\u5185\u6838\u8def\u7531\u8868",level:3},{value:"route \u547d\u4ee4\u8be6\u89e3",id:"route-\u547d\u4ee4\u8be6\u89e3",level:3},{value:"\u8bbe\u7f6e\u4e3b\u673a\u540d\u548c\u5305\u8f6c\u53d1",id:"\u8bbe\u7f6e\u4e3b\u673a\u540d\u548c\u5305\u8f6c\u53d1",level:3},{value:"\u7f51\u7edc\u63a5\u53e3\u7684\u9759\u6001\u8def\u7531\u914d\u7f6e\u6587\u4ef6",id:"\u7f51\u7edc\u63a5\u53e3\u7684\u9759\u6001\u8def\u7531\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u8bbe\u7f6e\u5305\u8f6c\u53d1",id:"\u8bbe\u7f6e\u5305\u8f6c\u53d1",level:3},{value:"\u7f51\u7edc\u6d4b\u8bd5\u5de5\u5177",id:"\u7f51\u7edc\u6d4b\u8bd5\u5de5\u5177",level:2},{value:"\u7f51\u7edc\u68c0\u6d4b\u7684\u5e38\u7528\u5de5\u5177",id:"\u7f51\u7edc\u68c0\u6d4b\u7684\u5e38\u7528\u5de5\u5177",level:3},{value:"\u7f51\u7edc\u6d4b\u8bd5\uff08ping\u3001traceroute\uff09",id:"\u7f51\u7edc\u6d4b\u8bd5pingtraceroute",level:3},{value:"\u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u76f8\u5173\uff08netstat\u3001lsof\u3001nmap\uff09",id:"\u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u76f8\u5173netstatlsofnmap",level:3},{value:"dig \u547d\u4ee4\u8be6\u89e3",id:"dig-\u547d\u4ee4\u8be6\u89e3",level:3}],o={toc:k},m="wrapper";function d(t){let{components:e,...n}=t;return(0,l.kt)(m,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f51\u7edc\u914d\u7f6e\u4e0e\u7f51\u7edc\u5de5\u5177"},"\u7f51\u7edc\u914d\u7f6e\u4e0e\u7f51\u7edc\u5de5\u5177"),(0,l.kt)("p",null,"\u5173\u4e8e Linux \u7f51\u7edc\u914d\u7f6e\u53ca\u76f8\u5173\u5de5\u5177\u7684\u8bb2\u89e3\u3002"),(0,l.kt)("h2",{id:"\u5185\u5bb9\u8981\u70b9"},"\u5185\u5bb9\u8981\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56de\u987e\u7f51\u7edc\u7684\u76f8\u5173\u77e5\u8bc6"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4ee5\u592a\u7f51\u7edc\u63a5\u53e3\uff08\u914d\u7f6e IP \u5730\u5740\u3001\u5b50\u7f51\u63a9\u7801\u3001\u9ed8\u8ba4\u7f51\u5173\u3001DNS\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7f51\u7edc\u68c0\u6d4b\u5de5\u5177")),(0,l.kt)("h2",{id:"linux-\u7684\u7f51\u7edc\u652f\u6301"},"Linux \u7684\u7f51\u7edc\u652f\u6301"),(0,l.kt)("p",null,"Linux \u652f\u6301\u5404\u79cd\u534f\u8bae\u7c7b\u578b\u7684\u7f51\u7edc\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TCP/IP\u3001NetBIOS/NetBEUI\u3001IPX/SPX\u3001AppleTake \u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u7f51\u7edc\u5e95\u5c42\u4e5f\u652f\u6301 Ethernet\u3001Token Ring\u3001ATM\u3001PPP\uff08PPPoE\uff09\u3001FDDI\u3001Frame Relay \u7b49\u7f51\u7edc\u534f\u8bae\u3002")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u7f51\u7edc\u534f\u8bae\u662f Linux \u5185\u6838\u63d0\u4f9b\u7684\u529f\u80fd\uff0c\u5177\u4f53\u7684\u652f\u6301\u60c5\u51b5\u7531\u5185\u6838\u7f16\u8bd1\u53c2\u6570\u51b3\u5b9a\u3002"),(0,l.kt)("p",null,"RHEL/CentOS \u7684 Linux \u5185\u6838\u9ed8\u8ba4\u652f\u6301\u4e0a\u8ff0\u7684\u7f51\u7edc\u534f\u8bae\u3002"),(0,l.kt)("h3",{id:"linux-\u7684\u7f51\u7edc\u63a5\u53e3"},"Linux \u7684\u7f51\u7edc\u63a5\u53e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linux \u652f\u6301\u4f17\u591a\u7c7b\u578b\u7684\u7f51\u7edc\u63a5\u53e3\uff1a\u6bcf\u4e00\u4e2a\u7f51\u7edc\u63a5\u53e3\u8bbe\u5907\u5728 Linux \u7684\u5185\u6838\u4e2d\u90fd\u6709\u76f8\u5e94\u7684\u8bbe\u5907\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u79cd\u7f51\u7edc\u63a5\u53e3\u8bbe\u5907\uff08\u7f51\u7edc\u9002\u914d\u5668\uff09\u90fd\u9700\u8981\u76f8\u5e94\u7684\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f\uff1a\u7f51\u7edc\u63a5\u53e3\u8bbe\u5907\u7684\u9a71\u52a8\u7a0b\u5e8f\u88ab\u7f16\u8bd1\u5728\u7cfb\u7edf\u5185\u6838\u4e2d\uff0c\u6216\u8005\u88ab\u7f16\u8bd1\u4e3a\u7cfb\u7edf\u5185\u6838\u6a21\u5757\u4ee5\u4fbf\u8ba9\u7cfb\u7edf\u5185\u6838\u8fdb\u884c\u8c03\u7528")),(0,l.kt)("p",null,"RHEL/CentOS \u9ed8\u8ba4\u662f\u91c7\u7528\u5185\u6838\u6a21\u5757\uff08Module\uff09\u7684\u65b9\u5f0f\u5728\u7cfb\u7edf\u5f15\u5bfc\u65f6\u9a71\u52a8\u7f51\u7edc\u63a5\u53e3\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"/lib/modules/$(uname -r)/kernel/drivers/net")," \u76ee\u5f55\u4e0b\u53ef\u4ee5\u627e\u5230\u53ef\u52a0\u8f7d\u7684\u9a71\u52a8"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4ece\u7cfb\u7edf\u5185\u6838\u6a21\u5757\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/modprobe.conf")," \u4e2d\u67e5\u770b\u7cfb\u7edf\u52a0\u8f7d\u7684\u7f51\u5361\u9a71\u52a8\u6a21\u5757")),(0,l.kt)("h3",{id:"linux-\u4e0b\u5e38\u89c1\u7684\u7f51\u7edc\u63a5\u53e3"},"Linux \u4e0b\u5e38\u89c1\u7684\u7f51\u7edc\u63a5\u53e3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u592a\u7f51\u63a5\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"eth",(0,l.kt)("strong",{parentName:"td"},"X")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u6700\u5e38\u7528\u7684\u7f51\u7edc\u63a5\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u73af\u63a5\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"tr",(0,l.kt)("strong",{parentName:"td"},"X")),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u51fa\u73b0\u5728\u5c11\u6570\u7eaf IBM \u73af\u5883\u7684\u7f51\u7edc\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5149\u7ea4\u5206\u5e03\u5f0f\u6570\u636e\u63a5\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"fddi",(0,l.kt)("strong",{parentName:"td"},"X")),(0,l.kt)("td",{parentName:"tr",align:null},"FDDI \u63a5\u53e3\u8bbe\u5907\u6602\u8d35\uff0c\u901a\u5e38\u7528\u4e8e\u6838\u5fc3\u7f51\u6216\u9ad8\u901f\u7f51\u7edc\u4e2d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u70b9\u5bf9\u70b9\u534f\u8bae\u63a5\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"ppp",(0,l.kt)("strong",{parentName:"td"},"X")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e Modem/ADSL \u62e8\u53f7\u7f51\u7edc\u6216\u57fa\u4e8e PPTP \u534f\u8bae\u7684 VPN \u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u56de\u73af\u63a5\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"lo"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u652f\u6301 UNIX Domain Socket \u6280\u672f\u7684\u8fdb\u7a0b\u76f8\u4e92\u901a\u4fe1\uff08IPC\uff09")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"X"),"\u662f\u4ece 0 \u5f00\u59cb\u7684\u6574\u6570\u3002\u5982\uff1aeth0 \u4ee3\u8868\u7b2c\u4e00\u5757\u4ee5\u592a\u7f51\u5361\uff0ceth1 \u4ee3\u8868\u7b2c\u4e8c\u5757\u4ee5\u592a\u7f51\u5361\u7b49\u3002")),(0,l.kt)("h2",{id:"\u4e34\u65f6\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570"},"\u4e34\u65f6\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u7f51\u7edc\u53c2\u6570\u7684\u65b9\u6cd5"},"\u914d\u7f6e\u7f51\u7edc\u53c2\u6570\u7684\u65b9\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e34\u65f6\u6027\u7f51\u7edc\u914d\u7f6e"),(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u547d\u4ee4\u4fee\u6539\u5f53\u524d\u5185\u6838\u4e2d\u7684\u7f51\u7edc\u76f8\u5173\u53c2\u6570\u5b9e\u73b0\uff0c\u4e3b\u8981\u6709\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ifconfig"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"route"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"hostname"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"sysctl -w"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"\u7279\u5f81\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u540e\u7acb\u5373\u751f\u6548"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u5f00\u673a\u540e\u5931\u6548"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6c38\u4e45\u6027\u7f51\u7edc\u914d\u7f6e"),(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u76f4\u63a5\u4fee\u6539\u7f51\u7edc\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u5b9e\u73b0\u3002"),(0,l.kt)("p",{parentName:"li"},"\u7279\u5f81\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u4e3a\u4e86\u4f7f\u4e4b\u7acb\u5373\u751f\u6548\uff0c\u9700\u8981\u901a\u8fc7\u91cd\u65b0\u542f\u52a8\u7f51\u7edc\u670d\u52a1\u6216\u6307\u5b9a\u7684\u7f51\u7edc\u63a5\u53e3\u8bbe\u5907\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u5f00\u673a\u540e\u4fdd\u7559\u6240\u6709\u914d\u7f6e")))),(0,l.kt)("h3",{id:"\u7ba1\u7406\u4ee5\u592a\u7f51\u63a5\u53e3"},"\u7ba1\u7406\u4ee5\u592a\u7f51\u63a5\u53e3"),(0,l.kt)("p",null,"\u7f51\u7edc\u63a5\u53e3\u547d\u540d\uff1aeth0\u3001eth1 \u7b49\u7b49"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u522b\u540d\uff08aliases\uff09\uff0c\u5355\u4e2a\u8bbe\u5907\u53ef\u5177\u5907\u591a\u4e2a\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u522b\u540d\u88ab\u6807\u8bc6\u4e3a\uff08eth0:1\uff0ceth0:2\uff09\u7b49\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u522b\u540d\u88ab\u5f53\u4f5c\u5355\u72ec\u7684\u63a5\u53e3\u5bf9\u5f85"),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e00\u5757\u7269\u7406\u7f51\u5361\u7684\u591a\u4e2a\u522b\u540d\uff08\u5305\u62ec\u7269\u7406\u7f51\u5361\u81ea\u8eab\uff09\u53ea\u80fd\u6709\u4e00\u4e2a\u63a5\u53e3\u4f7f\u7528 DHCP \u52a8\u6001\u5206\u914d\u7f51\u7edc\u53c2\u6570")),(0,l.kt)("p",null,"\u67e5\u770b\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"ifconfig [ethx]")),(0,l.kt)("p",null,"\u7f51\u7edc\u63a5\u53e3\u7684\u542f\u7528\u4e0e\u505c\u7528\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ifup ethx"),"\uff1a\u542f\u7528\u6307\u5b9a\u7684\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ifdown ethx"),"\uff1a\u7981\u7528\u6307\u5b9a\u7684\u63a5\u53e3")),(0,l.kt)("h3",{id:"ifconfig-\u547d\u4ee4\u8be6\u89e3"},"ifconfig \u547d\u4ee4\u8be6\u89e3"),(0,l.kt)("p",null,"ifconfig \u547d\u4ee4\u53ef\u4ee5\u4e34\u65f6\u5730\u8bbe\u7f6e\u7f51\u7edc\u63a5\u53e3\u7684 IP \u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u683c\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"ifconfig <\u7f51\u7edc\u63a5\u53e3> <IP\u5730\u5740> [netmask <\u5b50\u7f51\u63a9\u7801>] [broadcast <\u5e7f\u64ad\u5730\u5740>]")),(0,l.kt)("p",null,"\u5f53 IP \u5730\u5740\u4f7f\u7528\u6807\u51c6 A\u3001B\u3001C \u7c7b\u5730\u5740\u65f6\uff0c\u5e7f\u64ad\u5730\u5740\u548c\u5b50\u7f51\u63a9\u7801\u53ef\u4ee5\u7701\u7565\u3002"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig eth0 10.0.0.10 netmask 255.255.255.0 broadcast 10.0.0.255\nifconfig eth0 192.168.0.10\nifconfig eth0:0 192.168.1.10\n")),(0,l.kt)("h2",{id:"\u6c38\u4e45\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570"},"\u6c38\u4e45\u6027\u914d\u7f6e\u7f51\u7edc\u53c2\u6570"),(0,l.kt)("h3",{id:"rhelcentos-\u4e2d\u7684-tcpip-\u914d\u7f6e\u6587\u4ef6"},"RHEL/CentOS \u4e2d\u7684 TCP/IP \u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/sysconfig/network"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u4e86\u4e3b\u673a\u6700\u57fa\u672c\u7684\u7f51\u7edc\u4fe1\u606f\u7528\u4e8e\u7cfb\u7edf\u542f\u52a8\uff0c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u7531 rc.sysinit \u8bfb\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/sysconfig/network-scripts/ifcfg-ethX"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u592a\u7f51\u63a5\u53e3\u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/sysconfig/network-scripts/route-ethX"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u592a\u7f51\u63a5\u53e3\u7684\u9759\u6001\u8def\u7531\u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e3b\u673a\u540d\u6620\u5c04\u4e3a IP \u5730\u5740\u7684\u9759\u6001\u89e3\u6790\u6620\u5c04\u529f\u80fd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/resolv.conf"),(0,l.kt)("td",{parentName:"tr",align:null},"DNS \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/host.conf"),(0,l.kt)("td",{parentName:"tr",align:null},"DNS \u5ba2\u6237\u7aef\u7684\u63a7\u5236\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/etc/services"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e3b\u673a\u7684\u5404\u4e2a\u7f51\u8def\u670d\u52a1\u7684\u7aef\u53e3\u53f7")))),(0,l.kt)("h3",{id:"\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e\u6587\u4ef6"},"\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/ifcfg-ethX")),(0,l.kt)("p",null,"\uff08\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\u53c2\u89c1 /usr/share/doc/initscripts-","*","/sysconfig.txt\uff09"),(0,l.kt)("p",null,"\u5e38\u7528\u9009\u9879\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7f51\u7edc\u63a5\u53e3\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEVICE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bbe\u5907\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HWADDR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7f51\u5361\u7684 MAC \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOTPROTO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u83b7\u53d6\u7f51\u7edc\u53c2\u6570\u7684\u65b9\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ONBOOT"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u662f\u5426\u5728\u542f\u52a8\u65f6\u542f\u7528\u8bbe\u5907")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IPADDR"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u9759\u6001 IP \u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NETMASK"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b50\u7f51\u63a9\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BROADCAST"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5e7f\u64ad\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GATEWAY"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8bbe\u5907\u7684\u7f51\u5173")))),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("p",null,"\u9759\u6001\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/sysconfig/network-scripts/ifcfg-eth0\n# Type=Ethernet\n# DEVICE=eth0\n# HWADDR=00:02:8A:A6:30:45\n# BOOTPROTO=static # \u9759\u6001\u5206\u914d\n# ONBOOT=yes\n# IPADDR=192.168.0.123\n# NETMASK=255.255.255.0\n# BROADCAST=192.168.0.255\n# GATEWAY=192.168.0.1\n")),(0,l.kt)("p",null,"\u52a8\u6001\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/sysconfig/network-scripts/ifcfg-eth0\n# Type=Ethernet\n# DEVICE=eth0\n# HWADDR=00:02:8A:A6:30:45\n# BOOTPROTO=dhcp\n# ONBOOT=yes\n")),(0,l.kt)("h3",{id:"\u7cfb\u7edf\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6"},"\u7cfb\u7edf\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u7528\u4e8e\u6c38\u4e45\u6027\u914d\u7f6e\u4e3b\u673a\u540d\u548c\u9ed8\u8ba4\u7f51\u5173\u7b49\u3002"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network")),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/sysconfig/network\n# NETWORKING=yes\n# HOSTNAME=centos1.ls-al.loc\n# GATEWAY=192.168.1.254\n")),(0,l.kt)("h3",{id:"\u67e5\u770b-linux-\u5185\u6838\u8def\u7531\u8868"},"\u67e5\u770b Linux \u5185\u6838\u8def\u7531\u8868"),(0,l.kt)("p",null,"\u67e5\u770b\u8def\u7531\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"route")),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"route\n# Kernel IP routing table\n# Destination  Gateway      Genmask         Flags Metric Ref Use Iface\n# 192.168.0.0  *            255.255.255.0   U     0      0     0 eth0\n# 192.168.1.0  *            255.255.255.0   U     0      0     0 eth1\n# 192.19.12    192.168.1.1  255.255.255.0   U     0      0     0 eth1\n# default      localhost    0.0.0.0         UG    0      0     0 eth0\n")),(0,l.kt)("p",null,"\u8def\u7531\u7684\u79cd\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5230\u4e3b\u673a\u7684\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u5230\u7f51\u7edc\u7684\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7f51\u5173")),(0,l.kt)("h3",{id:"route-\u547d\u4ee4\u8be6\u89e3"},"route \u547d\u4ee4\u8be6\u89e3"),(0,l.kt)("p",null,"route \u547d\u4ee4\u53ef\u4ee5\u4e34\u65f6\u5730\u8bbe\u7f6e\u5185\u6838\u8def\u7531\u8868\u3002"),(0,l.kt)("p",null,"\u683c\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"route add|del [-net|-host] <target [netmask Netmask]> [gw Gateway] [[dev] Interface]")),(0,l.kt)("p",null,"\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"del"),"\uff1a\u8868\u793a\u6dfb\u52a0\u6216\u5220\u9664\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-net")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"-host"),"\uff1a\u8868\u793a\u6dfb\u52a0\u5230\u4e3b\u673a\u6216\u7f51\u7edc\u7684\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"target"),"\uff1a\u6307\u5b9a\u76ee\u6807\u4e3b\u673a\u6216\u7f51\u7edc\u5730\u5740\uff0c\u82e5\u76ee\u6807\u4e3a\u7f51\u7edc\u5730\u5740\u65f6\uff0c\u9700\u4f7f\u7528 netmask \u6307\u5b9a\u5b50\u7f51\u63a9\u7801"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gw"),"\uff1a\u7528\u4e8e\u6307\u5b9a\u7f51\u5173\u7684 IP \u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev"),"\uff1a\u7528\u4e8e\u6307\u5b9a\u8def\u7531\u7684\u7f51\u7edc\u63a5\u53e3\uff08dev \u5173\u952e\u5b57\u53ef\u7701\u7565\uff09")),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("p",null,"\u6dfb\u52a0\u8def\u7531\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6dfb\u52a0\u5230\u4e3b\u673a\u7684\u8def\u7531\nroute add -host 192.168.1.2 dev eth0:0\nroute add -host 10.20.30.148 gw 10.20.30.40\n# \u6dfb\u52a0\u5230\u7f51\u7edc\u7684\u8def\u7531\nroute add -net 10.20.30.40 netmask 255.255.255.248 eth0\nroute add -net 10.20.30.48 netmask 255.255.255.248 gw 10.20.30.41\nroute add -net 192.168.1.0/24 eth1\n# \u6dfb\u52a0\u9ed8\u8ba4\u7f51\u5173\u8def\u7531\nroute add default gw 192.168.1.1\n")),(0,l.kt)("p",null,"\u5220\u9664\u8def\u7531\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u5230\u4e3b\u673a\u7684\u8def\u7531\nroute del -host 192.168.1.2 dev eth0:0\nroute del -host 10.20.30.148 gw 10.20.30.40\n# \u5220\u9664\u5230\u7f51\u7edc\u7684\u8def\u7531\nroute del -net 10.20.30.40 netmask 255.255.255.248 eth0\nroute del -net 10.20.30.48 netmask 255.255.255.248 gw 10.20.30.41\nroute del -net 192.168.1.0/24 eth1\n# \u5220\u9664\u9ed8\u8ba4\u7f51\u5173\u8def\u7531\nroute del default gw 192.168.1.1\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u4e3b\u673a\u540d\u548c\u5305\u8f6c\u53d1"},"\u8bbe\u7f6e\u4e3b\u673a\u540d\u548c\u5305\u8f6c\u53d1"),(0,l.kt)("p",null,"\u4f7f\u7528 hostname \u547d\u4ee4\u53ef\u4ee5\u4e34\u65f6\u5730\u4fee\u6539\u4e3b\u673a\u540d\u3002"),(0,l.kt)("p",null,"\u683c\u5f0f\uff1ahostname <\u4e3b\u673a\u540d>"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"hostname centos1.ls-al.loc\n")),(0,l.kt)("p",null,"\u4f7f\u7528 sysctl \u547d\u4ee4\u53ef\u4ee5\u4e34\u65f6\u5730\u5f00\u542f\u5185\u6838\u7684\u5305\u8f6c\u53d1\uff0c\u7528\u4e8e\u4e34\u65f6\u8c03\u6574\u5185\u6838\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5f00\u542f\u5185\u6838\u7684\u5305\u8f6c\u53d1\u529f\u80fd\nsysctl -w net.ipv4.ip_forward=1\n# \u540c\u7406\u4e5f\u53ef\u5199\u4f5c\necho "1" > /proc/sys/net/ipv4/ip_forward\n')),(0,l.kt)("h3",{id:"\u7f51\u7edc\u63a5\u53e3\u7684\u9759\u6001\u8def\u7531\u914d\u7f6e\u6587\u4ef6"},"\u7f51\u7edc\u63a5\u53e3\u7684\u9759\u6001\u8def\u7531\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u7f51\u7edc\u63a5\u53e3\u5747\u53ef\u6709\u5176\u9759\u6001\u8def\u7531\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network-scripts/route-ethX")),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u914d\u7f6e\u7f51\u7edc\u63a5\u53e3eth0\u7684\u9759\u6001\u8def\u7531\nvim /etc/sysconfig/network-scripts/route-eth0\n# 192.168.2.0/24  via  172.16.10.88\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u5305\u8f6c\u53d1"},"\u8bbe\u7f6e\u5305\u8f6c\u53d1"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf"),"\uff08\u6c38\u4e45\u6027\u914d\u7f6e\u5305\u8f6c\u53d1\uff09"),(0,l.kt)("p",null,"\u786e\u4fdd\u5982\u4e0b\u914d\u7f6e\u884c\u5b58\u5728\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"net.ipv4.ip_forward = 1\n")),(0,l.kt)("p",null,"sysctl \u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u548c\u4fee\u6539\u5305\u8f6c\u53d1\u914d\u7f6e"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u662f\u5426\u652f\u6301\u5305\u8f6c\u53d1\nsysctl  net.ipv4.ip_forward\n# \u4f7f\u914d\u7f6e\u6587\u4ef6\u7684\u4fee\u6539\u5728\u5f53\u524d\u73af\u5883\u4e0b\u751f\u6548\nsysctl  -p\n")),(0,l.kt)("h2",{id:"\u7f51\u7edc\u6d4b\u8bd5\u5de5\u5177"},"\u7f51\u7edc\u6d4b\u8bd5\u5de5\u5177"),(0,l.kt)("h3",{id:"\u7f51\u7edc\u68c0\u6d4b\u7684\u5e38\u7528\u5de5\u5177"},"\u7f51\u7edc\u68c0\u6d4b\u7684\u5e38\u7528\u5de5\u5177"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4\u5de5\u5177"),(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ifconfig"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u7f51\u7edc\u63a5\u53e3\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"route"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u8def\u7531\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ping"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u7f51\u7edc\u8fde\u901a\u6027")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"netstat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u7f51\u7edc\u72b6\u6001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lsof"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u6307\u5b9a IP\u3001\u7aef\u53e3\u7684\u8fdb\u7a0b\u7684\u5f53\u524d\u8fd0\u884c\u60c5\u51b5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host/dig/nslookup"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b DNS \u89e3\u6790")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"traceroute"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u5230\u76ee\u7684\u4e3b\u673a\u6240\u7ecf\u8fc7\u7684\u8def\u7531\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcpdump"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u672c\u673a\u7f51\u7edc\u6d41\u91cf\u7684\u72b6\u6001")))),(0,l.kt)("h3",{id:"\u7f51\u7edc\u6d4b\u8bd5pingtraceroute"},"\u7f51\u7edc\u6d4b\u8bd5\uff08ping\u3001traceroute\uff09"),(0,l.kt)("p",null,"ping \u547d\u4ee4\uff1a\u7528\u4e8e\u6d4b\u8bd5\u7f51\u7edc\u7684\u8fde\u901a\u6027\u3002"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ping www.sina.con.cn\nping -c 4 192.168.1.12\n")),(0,l.kt)("p",null,"traceroute \u547d\u4ee4\uff1a\u7528\u4e8e\u663e\u793a\u6570\u636e\u5305\u5230\u8fbe\u76ee\u7684\u4e3b\u673a\u6240\u7ecf\u8fc7\u7684\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"traceroute www.sina.com.cn\n")),(0,l.kt)("h3",{id:"\u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u76f8\u5173netstatlsofnmap"},"\u67e5\u770b\u7f51\u7edc\u7aef\u53e3\u76f8\u5173\uff08netstat\u3001lsof\u3001nmap\uff09"),(0,l.kt)("p",null,"netstat \u547d\u4ee4\uff1a\u67e5\u770b\u7f51\u7edc\u7aef\u53e3"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"netstat -an\nnetstat -lunpt\n")),(0,l.kt)("p",null,"lsof \u547d\u4ee4\uff1a\u67e5\u770b\u5728\u6307\u5b9a IP \u548c/\u6216 \u7aef\u53e3\u4e0a\u6253\u5f00\u7684\u8fdb\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u6307\u5b9aIP\u7684\u8fdb\u7a0b\u7684\u8fd0\u884c\u60c5\u51b5\nlsof -i @192.168.0.200\nlsof -n -i UDP@192.168.0.200\n# \u67e5\u770b\u6307\u5b9a\u7aef\u53e3\u8fd0\u884c\u7684\u7a0b\u5e8f\nlsof -i :ssh\nlsof -i :22\n")),(0,l.kt)("p",null,"nmap \u547d\u4ee4\uff1a\u7aef\u53e3\u626b\u63cf"),(0,l.kt)("h3",{id:"dig-\u547d\u4ee4\u8be6\u89e3"},"dig \u547d\u4ee4\u8be6\u89e3"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636e/etc/resolv.conf \u4e2d\u7684 DNS \u670d\u52a1\u5668\u914d\u7f6e\u67e5\u8be2 ls-al.me \u7684 IP \u5730\u5740\ndig ls-al.me\n# \u5411\u6307\u5b9a\u7684DNS\u670d\u52a1\u5668\u67e5\u8be2 g.cn \u7684IP\u5730\u5740\ndig @202.106.196.115 g.cn\n# \u53cd\u5411\u67e5\u8be2 192.168.0.252 \u6240\u5bf9\u5e94\u7684\u57df\u540d\ndig -x 192.168.0.252\n")))}d.isMDXComponent=!0}}]);