(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{6336:function(e,t,l){Promise.resolve().then(l.bind(l,250))},250:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var s=l(7437),n=l(2265),r=l(3986),i=l(7922),a=l(504),c=l(2167),o=l(8777),x=l(6522),d=l(728),p=l(5398),m=l(4787),u=l(1396),f=l.n(u),g=l(6912);function h(e){let{time:t,label:l,timeClassName:n}=e;return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2 leading-[1em]",children:[(0,s.jsx)(c.M,{mode:"popLayout",initial:!1,children:(0,s.jsx)(o.E.div,{className:(0,r.m)("text-[32px] leading-[1em] lg:text-[64px]",n),initial:{opacity:0,y:"-0.25em",scaleY:.75,filter:"blur(0.1em)",transformOrigin:"top"},animate:{opacity:1,y:0,scaleY:1,filter:"blur(0px)"},exit:{opacity:0,y:"0.25em",scaleY:.75,filter:"blur(0.1em)",transformOrigin:"bottom"},children:t},t)}),(0,s.jsx)("div",{className:"text-[10px] font-medium leading-[1em] text-gold lg:text-[16px]",children:l})]})}function j(){let{days:e,hours:t,minutes:l,seconds:n}=(0,g.Z)();return(0,s.jsxs)("div",{className:"flex flex-col items-center gap-4 text-center",children:[(0,s.jsx)("p",{children:"距離投稿截止還有："}),(0,s.jsxs)("div",{className:"grid w-full grid-cols-4 rounded-full border-2 border-gold px-14 py-7 leading-7 lg:px-[100px] lg:py-[50px]",children:[(0,s.jsx)(h,{time:e,label:"DAYS",timeClassName:"text-pink"}),(0,s.jsx)(h,{time:t,label:"HOURS",timeClassName:"text-purple"}),(0,s.jsx)(h,{time:l,label:"MINUTES",timeClassName:"text-blue"}),(0,s.jsx)(h,{time:n,label:"SECONDS",timeClassName:"text-green"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-bold",children:"截止日期"}),(0,s.jsx)("p",{children:"海報投稿延長至 2024 年 1 月 24 日（三）23:59"}),(0,s.jsx)("p",{children:(0,s.jsx)("s",{children:"即日起至 2024 年 1 月 20 日（六）23:59"})})]})]})}function b(){let e=(0,n.useRef)(null),{scrollYProgress:t}=(0,x.v)(),l=(0,d.H)(t,[0,.5,1],[250,100,0]),r=(0,d.H)(t,[0,1],[0,-10]),i=(0,d.H)(t,[0,1],[0,100]);return(0,s.jsx)("div",{className:"fixed bottom-0 right-0 -z-10 w-[calc(100vw-70%)] xl:w-[calc(100vw-60%)]",ref:e,children:(0,s.jsx)(o.E.img,{src:"/2024/cfp/hero_corner.webp",className:"w-full",style:{x:i,y:l,skew:r}})})}function y(e){let{bgColor:t,children:l,href:n}=e;return(0,s.jsxs)(f(),{href:n,className:(0,r.m)(t,"group w-full rounded-lg px-4 pb-2 pt-10 text-center text-xl text-white transition-colors hover:bg-opacity-80 active:bg-opacity-100 lg:w-[192px]","flex items-center justify-between"),children:[l,(0,s.jsx)(a.G,{icon:i.eFW,className:"ml-2 transition-transform group-hover:translate-x-1"})]})}function v(e){let{type:t,toggleType:l,children:n,bgColor:i,buttonType:a}=e;return(0,s.jsxs)(o.E.button,{className:(0,r.m)("group relative flex items-center justify-center gap-2 rounded-full px-4 py-1 transition-colors",t===a?"text-white":"text-gray-500 hover:text-gray-600 active:text-gray-700"),onClick:()=>l(t),whileTap:{scale:.9},children:[(0,s.jsx)("div",{className:(0,r.m)(t===a?"bg-white":i,"h-1.5 w-1.5 rounded-full transition-all group-hover:scale-125")}),n,(0,s.jsx)(c.M,{children:t===a&&(0,s.jsx)(o.E.div,{className:(0,r.m)("absolute left-0 top-0 -z-10 h-full w-full rounded-full",i),initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0}})})]})}function N(){let[e,t]=(0,n.useReducer)((e,t)=>e===t?"":t,"");return(0,s.jsxs)("div",{className:"flex flex-col gap-6 overflow-hidden",children:[(0,s.jsx)(p.Z,{children:"投稿頁面"}),(0,s.jsx)(j,{}),(0,s.jsxs)("div",{className:"relative flex flex-col items-center justify-center gap-2 lg:flex-row",children:[(0,s.jsx)(y,{bgColor:"bg-purple",href:"/cfp/normal",children:"一般議程"}),(0,s.jsx)(y,{bgColor:"bg-pink",href:"/cfp/undefined",children:"開放式議程"}),(0,s.jsx)(y,{bgColor:"bg-green",href:"/cfp/poster",children:"海報"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-4 pt-16",children:[(0,s.jsxs)("div",{className:"flex max-w-[512px] flex-wrap items-center gap-6",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{className:"text-[32px] font-medium",children:"時程表"})}),(0,s.jsxs)("div",{className:"-gap-2 flex",children:[(0,s.jsx)(v,{type:"general",toggleType:t,bgColor:"bg-purple",buttonType:e,children:"一般議程"}),(0,s.jsx)(v,{type:"undefined",toggleType:t,bgColor:"bg-pink",buttonType:e,children:"開放式議程"}),(0,s.jsx)(v,{type:"poster",toggleType:t,bgColor:"bg-green",buttonType:e,children:"海報"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(m.Z,{time:[2023,"Nov.",19],type:["general","undefined","poster"],selectedType:e,name:"開始徵稿"}),(0,s.jsx)(m.Z,{time:[2024,"Jan.",20],type:["general","undefined"],selectedType:e,name:"投稿截止",desc:"至 2024 年 1 月 20 日（六）23:59"}),(0,s.jsx)(m.Z,{time:[2024,"Jan.",24],type:["poster"],selectedType:e,name:"海報投稿截止",desc:"至 2024 年 1 月 24 日（三）23:59"}),(0,s.jsx)(m.Z,{time:[2024,"Jan.","下旬"],type:["general","undefined","poster"],selectedType:e,name:"稿件錄取通知"}),(0,s.jsx)(m.Z,{time:[2024,"Jan.","下旬"],endTime:[2024,"Feb.","中旬"],type:["general","undefined"],selectedType:e,name:"試講",desc:"若稿件入選，確切時間將再與您協調"}),(0,s.jsx)(m.Z,{time:[2024,"Feb.",18],type:["poster"],selectedType:e,name:"錄取海報檔案上傳截止"}),(0,s.jsx)(m.Z,{time:[2024,"Mar.",8],type:["general","undefined"],selectedType:e,name:"彩排"}),(0,s.jsx)(m.Z,{time:[2024,"Mar.",9],type:["SITCON"],selectedType:e,name:"年會"})]})]}),(0,s.jsx)(b,{})]})}},4787:function(e,t,l){"use strict";l.d(t,{Z:function(){return Event}});var s=l(7437),n=l(3986),r=l(8777);function i(e){var t;let{time:l,isGray:r}=e;return(0,s.jsxs)("div",{className:"flex h-min p-2",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:(0,n.m)("transition-colors",r?"text-1-6":"text-4-6"),children:l[0]}),(0,s.jsx)("div",{className:(0,n.m)("text-2xl transition-colors",r?"text-1-6":"text-4-6"),children:l[1]})]}),(0,s.jsx)("div",{className:(0,n.m)("flex flex-col justify-end items-center transition-colors break-keep","string"==typeof l[2]?"text-2xl":"text-3xl lg:text-5xl",r?"text-1-6":"text-4-6"),children:(0,s.jsx)("div",{children:"string"==typeof(t=l[2])?t:t<10?"0".concat(t):"".concat(t)})})]})}function Event(e){let{time:t,endTime:l,type:a,selectedType:c,name:o,desc:x}=e,d={general:"bg-purple",undefined:"bg-pink",poster:"bg-green",SITCON:"bg-blue"},p=!!(c&&!a.includes("SITCON")&&!a.includes(c));return(0,s.jsxs)("div",{className:"lg:min-h-[110px] max-w-[512px] flex border border-1-6 rounded-lg shadow-[0px_4px_8px_0px_#0000001A] mb-6 bg-white",children:[(0,s.jsx)("div",{className:"flex flex-col",children:a.map(e=>(0,s.jsx)(r.E.div,{layout:!0,layoutId:c,className:(0,n.m)("w-[5px] flex-grow first:rounded-tl-[3.5px] last:rounded-bl-[3.5px] transition-colors",c?d[c]:d[e],p&&"bg-1-6")},e))}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i,{time:t,isGray:p}),l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:(0,n.m)("border border-white w-[94px] h-[37px] transition-colors",p?"border-r-1-6":"border-r-4-6")}),(0,s.jsx)(i,{time:l,isGray:p})]}):null]}),(0,s.jsxs)("div",{className:"text-4-6 my-2 mx-4 flex flex-col self-center",children:[(0,s.jsx)("span",{className:(0,n.m)("text-xl lg:text-[32px] font-bold transition-colors",p&&"text-1-6"),children:o}),(0,s.jsx)("span",{className:(0,n.m)("transition-colors",p&&"text-1-6"),children:x})]})]})}},5398:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var s=l(7437);function n(e){let{children:t}=e;return(0,s.jsx)("h1",{className:"text-3xl leading-normal lg:text-5xl lg:leading-[75px] border-b-[#E5C366] border-b font-bold",children:t})}},6912:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var s=l(2265),n=l(9744);function r(){let[e]=(0,s.useState)(new Date("2024-01-24T23:59:00+08:00")),[t,l]=(0,s.useState)("00"),[r,i]=(0,s.useState)("00"),[a,c]=(0,s.useState)("00"),[o,x]=(0,s.useState)("00");function d(){let t=(e.getTime()-Date.now())/1e3;t>0&&(x(("0"+Math.floor(t%60)).slice(-2)),c(("0"+Math.floor((t/=60)%60)).slice(-2)),i(("0"+Math.floor((t/=60)%24)).slice(-2)),l(("0"+Math.floor(t/=24)).slice(-2)))}return(0,n.Yz)(()=>{d()},1e3),(0,s.useEffect)(()=>{d()},[]),{days:t,hours:r,minutes:a,seconds:o}}}},function(e){e.O(0,[676,717,750,396,516,504,225,971,472,744],function(){return e(e.s=6336)}),_N_E=e.O()}]);