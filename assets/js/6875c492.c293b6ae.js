"use strict";(self.webpackChunklinux_learning=self.webpackChunklinux_learning||[]).push([[8610],{1500:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(5661),r=a(6523);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9318:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(6507),r=a(7624);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},8195:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(9496),l=a(5924),r=a(5661),o=a(3020),s=a(4141),i=a(8376),g=a(3867),c=a(7087),m=a(1500),p=a(608),u=a(9318);function d(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:a}),n.createElement(p.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:l,listMetadata:o}=e;const s=d(t);return n.createElement(c.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(g.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.Z,{items:a}),n.createElement(m.Z,{metadata:o}))}function b(e){return n.createElement(s.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(E,e))}},5288:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(5571),r=a(1047);function o(e){const{colorMode:t}=(0,l.I)();let{type:a,category:o,categoryId:s}=e;return o="Website giscus",s="DIC_kwDOIddfXs4CStsN",n.createElement(r.Z,{id:"comments",repo:"cworld1/linux-learning",repoId:"R_kgDOIddfXg",category:o,categoryId:s,mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}},7624:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9496),l=a(5161),r=a(5288),o=a(6507);function s(e){const{isBlogPostPage:t}=(0,o.C)();return n.createElement(n.Fragment,null,n.createElement(l.Z,e),t&&n.createElement(r.Z,{type:"blog"}))}}}]);