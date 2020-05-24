(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{248:function(e,t,a){e.exports=a(523)},253:function(e,t,a){},520:function(e,t,a){},523:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(20),c=a.n(r),m=(a(253),a(127)),u=a(37),o=a(5),i=function(){var e=Object(u.f)();return console.log(e),l.a.createElement(o.p,{type:"dark",theme:"primary",expand:"md"},l.a.createElement(o.q,{href:"#"},"Resources Analytics"),l.a.createElement(o.m,{navbar:!0},l.a.createElement(o.n,null,l.a.createElement(o.o,{active:"/"===e.pathname,href:"/"},"Active")),l.a.createElement(o.n,null,l.a.createElement(o.o,{active:"/raw"===e.pathname,href:"/raw"},"Raw")),l.a.createElement(o.n,null,l.a.createElement(o.o,{active:"/groupResource"===e.pathname,href:"/groupResource"},"Group Resource")),l.a.createElement(o.n,null,l.a.createElement(o.o,{active:"/groupType"===e.pathname,href:"/groupType"},"Group Type"))))},s=a(220),E=a(16),p=a(36),d=a.n(p),h=a(9),g=function(e){var t=e.isLoading,a=e.children;return t?l.a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:"300px"}},l.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",stroke:"#007bff"},l.a.createElement("g",{fill:"none","fill-rule":"evenodd","stroke-width":"2"},l.a.createElement("circle",{cx:"22",cy:"22",r:"1"},l.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),l.a.createElement("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),l.a.createElement("circle",{cx:"22",cy:"22",r:"1"},l.a.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),l.a.createElement("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))))):a},f=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),m=Object(E.a)(c,2),u=m[0],i=m[1],p=d.a.create({baseURL:"http://3.21.156.211:3005/",timeout:1e3,headers:{"X-Custom-Header":"foobar"}});Object(n.useEffect)((function(){r(!0),p.get("/info").then((function(e){i(e.data)})).catch((function(e){i(null),console.log(e)})).then((function(){r(!1)}))}),[]);var f=u&&!a&&Object.keys(u.groupByInitiatorType).map((function(e){return Object(s.a)({iniType:e},u.groupByInitiatorType[e])}));return l.a.createElement(g,{isLoading:a},l.a.createElement(o.i,{className:"pt-4"},u&&!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement("h3",null,"Average time"))),l.a.createElement(o.s,null,l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.f,null,"Request (ms)"),u.avgTimeDuration))),l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.f,null,"Redirect (ms)"),u.avgTimeRedirect))),l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.f,null,"Response (ms)"),u.avgTimeResponse)))),l.a.createElement(o.s,{className:"pt-5 mt-3 pb-3"},l.a.createElement(o.g,null,l.a.createElement("h3",null,"Initiator type relation"))),l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.c,null,l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement(h.b,{width:500,height:300,data:f,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(h.c,{strokeDasharray:"3 3"}),l.a.createElement(h.g,{dataKey:"iniType"}),l.a.createElement(h.h,null),l.a.createElement(h.f,null),l.a.createElement(h.d,null),l.a.createElement(h.a,{dataKey:"avgTimeDuration",fill:"#17C671"}))),l.a.createElement(o.g,null,l.a.createElement(h.b,{width:500,height:300,data:f,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(h.c,{strokeDasharray:"3 3"}),l.a.createElement(h.g,{dataKey:"iniType"}),l.a.createElement(h.h,null),l.a.createElement(h.f,null),l.a.createElement(h.d,null),l.a.createElement(h.a,{dataKey:"avgTimeResponse",fill:"#FFB400"}))))))))),l.a.createElement(o.s,{className:"pt-5 mt-3 pb-3"},l.a.createElement(o.g,null,l.a.createElement("h3",null,"Overview by initiator type"))),Object.keys(u.groupByInitiatorType).map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{style:{color:"gray"}},e),l.a.createElement(o.s,null,l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.f,null,"Request (ms)"),u.groupByInitiatorType[e].avgTimeDuration))),l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.f,null,"Redirect (ms)"),u.groupByInitiatorType[e].avgTimeRedirect))),l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.f,null,"Response (ms)"),u.groupByInitiatorType[e].avgTimeResponse)))))})))))},b=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),m=Object(E.a)(c,2),u=m[0],i=m[1],s=Object(n.useState)("all"),p=Object(E.a)(s,2),h=p[0],f=p[1],b=d.a.create({baseURL:"http://3.21.156.211:3005/",timeout:1e3,headers:{"X-Custom-Header":"foobar"}});Object(n.useEffect)((function(){r(!0),b.get("/info/raw/").then((function(e){i(e.data)})).catch((function(e){i(null),console.log(e)})).then((function(){r(!1)}))}),[]);var y={all:void 0,script:void 0,img:"success",xmlhttprequest:"warning",css:"info",fetch:"danger",other:"dark"},v=(u||[]).filter((function(e){return"all"===h||e.initiatorType===h})).splice(0,10),k=function(e,t){return 100*t/e};return l.a.createElement(g,{isLoading:a},l.a.createElement(o.i,{className:"pt-4"},u&&!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,null,l.a.createElement(o.g,null,l.a.createElement(o.j,{onChange:function(e){var t=e.target.value;f(t)},value:h},Object.keys(y).map((function(e){return l.a.createElement("option",{value:e},e)}))),v.map((function(e){return l.a.createElement(o.b,{key:e._id,className:"mb-3 mt-3"},l.a.createElement(o.e,null,l.a.createElement(o.a,{theme:y[e.initiatorType]},e.initiatorType),"\xa0\xa0",l.a.createElement("strong",null,e.name)),l.a.createElement(o.c,null,Object.keys(e).map((function(t){return l.a.createElement("div",null,l.a.createElement("strong",null,t)," \xa0 ",e[t])})),l.a.createElement("br",null),l.a.createElement("h5",null,"Timeline"),l.a.createElement(o.r,{multi:!0},l.a.createElement(o.r,{bar:!0,value:k(e.duration,e.redirectEnd-e.redirectStart)},"Redirect (",k(e.duration,e.redirectEnd-e.redirectStart),")"),l.a.createElement(o.r,{bar:!0,theme:"success",value:k(e.duration,e.connectStart-e.fetchStart)},"fetch  (",k(e.duration,e.connectStart-e.fetchStart),")"),l.a.createElement(o.r,{bar:!0,value:k(e.duration,e.domainLookupEnd-e.domainLookupStart)},"domainLookup  (",k(e.duration,e.domainLookupEnd-e.domainLookupStart),")"),l.a.createElement(o.r,{bar:!0,theme:"success",value:k(e.duration,e.connectEnd-e.connectStart)},"connect  (",k(e.duration,e.connectEnd-e.connectStart),")"),l.a.createElement(o.r,{bar:!0,value:k(e.duration,(e.responseStart||e.responseEnd)-e.requestStart)},"request  (",k(e.duration,(e.responseStart||e.responseEnd)-e.requestStart),")"),l.a.createElement(o.r,{bar:!0,theme:"success",value:k(e.duration,e.responseEnd-e.responseStart)},"response  (",k(e.duration,e.responseEnd-e.responseStart),")"))),l.a.createElement(o.d,null,"Report created at\xa0\xa0",l.a.createElement(o.a,{theme:"light"},new Date(e.dateAdded).toLocaleString())))})))))))},y=function(e){e.title;var t=e.item,a=Object(n.useState)(!1),r=Object(E.a)(a,2),c=r[0],m=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return m(!c)}},l.a.createElement(o.a,null,t.count),l.a.createElement("div",{style:{display:"inline-block",paddingLeft:"10px"}},l.a.createElement("strong",null,t.hostName),"\xa0 (see ",c?"less":"more",")")),l.a.createElement(o.h,{open:c},l.a.createElement("div",{className:"p-3 mt-3 border rounded"},t.data.map((function(e){return l.a.createElement("div",null,e.iniType)})))))},v=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),m=Object(E.a)(c,2),u=m[0],i=m[1],s=Object(n.useState)([]),p=Object(E.a)(s,2),f=p[0],b=p[1],v=Object(n.useState)([]),k=Object(E.a)(v,2),T=k[0],j=k[1],N=d.a.create({baseURL:"http://3.21.156.211:3005/",timeout:1e3,headers:{"X-Custom-Header":"foobar"}});return Object(n.useEffect)((function(){r(!0),N.get("/info/group/resource").then((function(e){var t=e.data;i(e.data);var a=Object.keys(t).map((function(e){return{iniType:e,count:t[e].length,url:new URL(e),host:new URL(e).host}})).sort((function(e,t){return t.count-e.count}));b(a);var n,l=(n="host",a.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})),r=Object.keys(l).map((function(e){return{hostName:e,count:l[e].length,data:l[e]}})).sort((function(e,t){return t.count-e.count}));j(r)})).catch((function(e){i(null)})).then((function(){r(!1)}))}),[]),l.a.createElement(g,{isLoading:a},l.a.createElement(o.i,{className:"pt-4"},u&&!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement("h3",null,"Group resource"))),l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.c,null,l.a.createElement("h4",null,"Most called hosts"),l.a.createElement(o.k,null,T.map((function(e){return l.a.createElement(o.l,null,l.a.createElement(y,{item:e}))}))),l.a.createElement("div",{style:{marginTop:"70px"}},l.a.createElement(h.e,{height:400},l.a.createElement(h.b,{layout:"horizontal",data:T,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(h.c,{strokeDasharray:"3 3"}),l.a.createElement(h.g,{dataKey:"hostName"}),l.a.createElement(h.h,null),l.a.createElement(h.f,null),l.a.createElement(h.d,null),l.a.createElement(h.a,{dataKey:"count",fill:"#17C671"}))))))))),l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.c,null,l.a.createElement("h4",null,"Most called resources"),l.a.createElement(o.k,null,f.map((function(e){return l.a.createElement(o.l,null,l.a.createElement(o.a,null,e.count),l.a.createElement("div",{style:{display:"inline-block",paddingLeft:"10px"}},e.iniType," - ",e.url.host))}))),l.a.createElement("div",{style:{marginTop:"70px"}},l.a.createElement(h.e,{height:400},l.a.createElement(h.b,{layout:"horizontal",data:f,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(h.c,{strokeDasharray:"3 3"}),l.a.createElement(h.g,{dataKey:"iniType"}),l.a.createElement(h.h,null),l.a.createElement(h.f,null),l.a.createElement(h.d,null),l.a.createElement(h.a,{dataKey:"count",fill:"#17C671"}))))))))))))},k=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),m=Object(E.a)(c,2),u=m[0],i=m[1],s=d.a.create({baseURL:"http://3.21.156.211:3005/",timeout:1e3,headers:{"X-Custom-Header":"foobar"}});Object(n.useEffect)((function(){r(!0),s.get("/info/group/initType").then((function(e){i(e.data)})).catch((function(e){i(null),console.log(e)})).then((function(){r(!1)}))}),[]);var p=u&&!a&&Object.keys(u).map((function(e){return{iniType:e,count:u[e].length}}));return l.a.createElement(g,{isLoading:a},l.a.createElement(o.i,{className:"pt-4"},u&&!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement("h3",null,"group type"))),l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.g,null,l.a.createElement(o.b,{className:"mb-3 mt-3"},l.a.createElement(o.s,{className:"pt-3"},l.a.createElement(o.c,null,l.a.createElement(h.b,{width:500,height:300,data:p,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(h.c,{strokeDasharray:"3 3"}),l.a.createElement(h.g,{dataKey:"iniType"}),l.a.createElement(h.h,null),l.a.createElement(h.f,null),l.a.createElement(h.d,null),l.a.createElement(h.a,{dataKey:"count",fill:"#17C671"}))))))))))};a(520);var T=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement(i,null),l.a.createElement("div",null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/groupType"},l.a.createElement(k,null)),l.a.createElement(u.a,{path:"/groupResource"},l.a.createElement(v,null)),l.a.createElement(u.a,{path:"/raw"},l.a.createElement(b,null)),l.a.createElement(u.a,{path:"/"},l.a.createElement(f,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(521),a(522);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[248,1,2]]]);
//# sourceMappingURL=main.e432669e.chunk.js.map