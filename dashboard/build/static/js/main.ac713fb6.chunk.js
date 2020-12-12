(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{231:function(e){e.exports=JSON.parse('[{"name":"entryType","readonly":true,"description":"Returns the type of the \'resource\'."},{"name":"name","readonly":true,"description":"Returns the resources URL."},{"name":"startTime","readonly":true,"description":"Returns the timestamp for the time a resource fetch started. This value is equivalent to PerformanceEntry.fetchStart."},{"name":"duration","readonly":true,"description":"Returns a timestamp that is the difference between the responseEnd and the startTime properties."},{"name":"initiatorType","readonly":true,"description":"A string representing the type of resource that initiated the performance entry, as specified in PerformanceResourceTiming.initiatorType."},{"name":"nextHopProtocol","readonly":true,"description":"A string representing the network protocol used to fetch the resource, as identified by the ALPN Protocol ID (RFC7301)"},{"name":"workerStart","readonly":true,"description":"Returns a DOMHighResTimeStamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running. If the resource is not intercepted by a Service Worker the property will always return 0."},{"name":"redirectStart","readonly":true,"description":"A DOMHighResTimeStamp that represents the start time of the fetch which initiates the redirect."},{"name":"redirectEnd","readonly":true,"description":"A DOMHighResTimeStamp immediately after receiving the last byte of the response of the last redirect."},{"name":"fetchStart","readonly":true,"description":"A DOMHighResTimeStamp immediately before the browser starts to fetch the resource."},{"name":"domainLookupStart","readonly":true,"description":"A DOMHighResTimeStamp immediately before the browser starts the domain name lookup for the resource."},{"name":"domainLookupEnd","readonly":true,"description":"A DOMHighResTimeStamp representing the time immediately after the browser finishes the domain name lookup for the resource."},{"name":"connectStart","readonly":true,"description":"A DOMHighResTimeStamp immediately before the browser starts to establish the connection to the server to retrieve the resource."},{"name":"connectEnd","readonly":true,"description":"A DOMHighResTimeStamp immediately after the browser finishes establishing the connection to the server to retrieve the resource."},{"name":"secureConnectionStart","readonly":true,"description":"A DOMHighResTimeStamp immediately before the browser starts the handshake process to secure the current connection."},{"name":"requestStart","readonly":true,"description":"A DOMHighResTimeStamp immediately before the browser starts requesting the resource from the server."},{"name":"responseStart","readonly":true,"description":"A DOMHighResTimeStamp immediately after the browser receives the first byte of the response from the server."},{"name":"responseEnd","readonly":true,"description":"A DOMHighResTimeStamp immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first."},{"name":"transferSize","readonly":true,"description":"A number representing the size (in octets) of the fetched resource. The size includes the response header fields plus the response payload body."},{"name":"encodedBodySize","readonly":true,"description":"A number representing the size (in octets) received from the fetch (HTTP or cache), of the payload body, before removing any applied content-codings."},{"name":"decodedBodySize","readonly":true,"description":"A number that is the size (in octets) received from the fetch (HTTP or cache) of the message body, after removing any applied content-codings."},{"name":"serverTiming","readonly":true,"description":"An array of PerformanceServerTiming entries containing server timing metrics."}]')},251:function(e,t,a){e.exports=a(529)},256:function(e,t,a){},521:function(e,t,a){},522:function(e,t,a){},523:function(e,t,a){},524:function(e,t,a){},525:function(e,t,a){},526:function(e,t,a){},529:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),c=a.n(l),o=(a(256),a(132)),i=a(39),m=a(2),s=function(){var e=Object(i.f)();return r.a.createElement(m.t,{type:"dark",theme:"primary",expand:"md"},r.a.createElement(m.u,{href:"#"},"Resources Analytics"),r.a.createElement(m.q,{navbar:!0},[{slug:"",name:"Home"},{slug:"comparative",name:"Compare"},{slug:"geolocation",name:"Geolocation"},{slug:"groupResource",name:"Group Resource"},{slug:"groupType",name:"Group Type"},{slug:"session",name:"Session"},{slug:"ip",name:"IP"},{slug:"raw",name:"Basic"}].map((function(t){return r.a.createElement(m.r,null,r.a.createElement(m.s,{active:e.pathname==="/".concat(t.slug),href:"#/".concat(t.slug)},t.name))}))))},u=a(53),E=a(11),d=a(7),p=a(230),h=a.n(p).a.create({baseURL:"http://3.21.156.211:3005/",timeout:18e4,validateStatus:function(e){return e<400}});h.interceptors.response.use((function(e){return e}),(function(e){var t,a,n,r;return 400===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&(null===e||void 0===e||null===(a=e.response)||void 0===a||null===(n=a.data)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.mensagem)&&console.log({error:e}),Promise.reject(e)}));var f=h,g=a(54),y=a(231),v=function(e){return e?Math.round(100*(e+Number.EPSILON))/100:"\u2014"},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=0>t?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},T={all:void 0,script:void 0,img:"success",xmlhttprequest:"warning",css:"info",fetch:"danger",other:"dark"},S=y.reduce((function(e,t){return Object(u.a)({},e,Object(g.a)({},t.name,t))}),{});function j(e){var t=e,a=Math.floor(t/864e5);t%=864e5;var n=Math.floor(t/36e5);t%=36e5;var r=Math.floor(t/6e4);return t%=6e4,{days:a,hours:n,minutes:r,seconds:Math.floor(t/1e3),milliseconds:t%=1e3}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[];if(e.days){var n=e.days+" day";1!==e.days&&(n+="s"),a.push(n)}if(e.hours){var r=e.hours+" hour";1!==e.hours&&(r+="s"),a.push(r)}if(e.minutes){var l=e.minutes+" minute";1!==e.minutes&&(l+="s"),a.push(l)}if(e.seconds){var c=e.seconds+" second";1!==e.seconds&&(c+="s"),a.push(c)}if(t&&e.milliseconds){var o=v(e.milliseconds)+" millisecond";1!==e.milliseconds&&(o+="s"),a.push(o)}return 0===a.length?"instantly":a.join(" ")}var w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=j(v(e));return O(a,t)},N=function(e){var t=e.isLoading,a=e.children;return t?r.a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:"300px"}},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",stroke:"#007bff"},r.a.createElement("g",{fill:"none","fill-rule":"evenodd","stroke-width":"2"},r.a.createElement("circle",{cx:"22",cy:"22",r:"1"},r.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"22",cy:"22",r:"1"},r.a.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))))):a},k=(a(521),function(e){var t=e.list,a=e.count,l=void 0===a?5:a,c=Object(n.useState)(l),o=Object(E.a)(c,2),i=o[0],m=o[1],s=t.slice(0,i),u=Math.min(t.length-s.length,l);return r.a.createElement(r.a.Fragment,null,s.slice(0,i).map((function(e,t){return r.a.createElement(n.Fragment,{key:t},e)})),r.a.createElement("div",{onClick:function(){m(i+u)}},u>0&&r.a.createElement("center",{className:"show-more-link"},"show ",u," more of ",t.length," items")))}),R=(a(522),function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(E.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){l(!0),f.get("/info").then((function(e){s(e.data)})).catch((function(e){s(null),console.log(e)})).then((function(){l(!1)}))}),[]);var p=i&&!a&&Object.keys(i.groupByInitiatorType).map((function(e){return Object(u.a)({iniType:e},i.groupByInitiatorType[e])}));return r.a.createElement(N,{isLoading:a},r.a.createElement(m.j,{className:"pt-4"},i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Dashboard"))),r.a.createElement(m.w,null,r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.g,null,"Avg. Duration"),r.a.createElement("span",{className:"result-resume"},w(i.avgTimeDuration,!0))))),r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.g,null,"Avg. Transfer Size"),r.a.createElement("span",{className:"result-resume"},b(i.avgTransferSize))))),r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.g,null,"Avg. Response"),r.a.createElement("span",{className:"result-resume"},w(i.avgTimeResponse)))))),r.a.createElement(m.w,null,r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.g,null,"Resources used"),r.a.createElement("span",{className:"result-resume"},i.count," times")))),r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.g,null,"Cached used"),r.a.createElement("span",{className:"result-resume"},i.fullChacedCount," times")))),r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.g,null,"Most used type"),r.a.createElement("span",{className:"result-resume"},String(i.biggestInitiator.name).toUpperCase()))))),r.a.createElement(m.w,{className:"pt-5 mt-3 pb-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Initiator type relation"))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(d.b,{width:500,height:300,data:p,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"iniType"}),r.a.createElement(d.p,{scale:"sqrt",domain:["auto","auto"]}),r.a.createElement(d.n,null),r.a.createElement(d.d,null),r.a.createElement(d.a,{dataKey:"avgTimeDuration",fill:"#17C671"}))),r.a.createElement(m.h,null,r.a.createElement(d.b,{width:500,height:300,data:p,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"iniType"}),r.a.createElement(d.p,{scale:"sqrt",domain:["auto","auto"]}),r.a.createElement(d.n,null),r.a.createElement(d.d,null),r.a.createElement(d.a,{dataKey:"avgTimeResponse",fill:"#FFB400"})))))))),r.a.createElement(m.w,{className:"pt-5 mt-3 pb-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Overview by initiator type"))),r.a.createElement(k,{count:3,list:Object.keys(i.groupByInitiatorType).map((function(e){var t=i.groupByInitiatorType,a=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.w,null,r.a.createElement(m.h,null,r.a.createElement(m.a,{theme:T[a]},a))),r.a.createElement(m.w,null,r.a.createElement(m.h,null,"\xa0")),r.a.createElement(m.w,null,r.a.createElement(m.h,null,r.a.createElement("h6",{style:{color:"gray"}},"Request"),w(t[a].avgTimeDuration,!0)),r.a.createElement(m.h,null,r.a.createElement("h6",{style:{color:"gray"}},"Transfer size"),b(t[a].avgTransferSize)),r.a.createElement(m.h,null,r.a.createElement("h6",{style:{color:"gray"}},"Response"),w(t[a].avgTimeResponse,!0))))))}))}))))}),x=(a(523),function(e){var t=e.request,a=e.resumed;return r.a.createElement(m.c,{key:t._id,className:"mb-3 mt-3 request-card-content"},r.a.createElement(m.f,null,r.a.createElement(m.a,{theme:T[t.initiatorType]},t.initiatorType),"\xa0\xa0",r.a.createElement("strong",null,t.name)),r.a.createElement(m.d,null,Object.keys(t).map((function(e){return 0!==t[e]?r.a.createElement("div",{className:"property-wrapper",title:(S[e]||{description:""}).description},r.a.createElement("span",{className:"property-name"},e)," ",r.a.createElement("span",{className:"property-content"},JSON.stringify(t[e]))):null})),!a&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("br",null),r.a.createElement("h5",null,"Timeline"),r.a.createElement(m.v,{multi:!0},[{name:"Redirect",magicMath:function(e){return e.redirectEnd-e.redirectStart}},{name:"fetch",magicMath:function(e){return e.connectStart-e.fetchStart}},{name:"domainLookup",magicMath:function(e){return e.domainLookupEnd-e.domainLookupStart}},{name:"connect",magicMath:function(e){return e.connectEnd-e.connectStart}},{name:"request",magicMath:function(e){return(e.responseStart||e.responseEnd)-e.requestStart}},{name:"response",magicMath:function(e){return e.responseEnd-e.responseStart}}].map((function(e,a){return r.a.createElement(m.v,{bar:!0,value:(n=t.duration,l=e.magicMath(t),100*l/n),theme:a%2===1?"":"success"},e.name);var n,l}))))),r.a.createElement(m.e,null,"Report created at\xa0\xa0",r.a.createElement(m.a,{theme:"light"},new Date(t.dateAdded).toLocaleString())))}),D=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(E.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)("all"),d=Object(E.a)(u,2),p=d[0],h=d[1];Object(n.useEffect)((function(){l(!0),f.get("/info/raw/").then((function(e){s(e.data)})).catch((function(e){s(null),console.log(e)})).then((function(){l(!1)}))}),[]);var g=(i||[]).filter((function(e){return"all"===p||e.initiatorType===p})).splice(0,30);return r.a.createElement(N,{isLoading:a},r.a.createElement(m.j,{className:"pt-4"},i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.w,null,r.a.createElement(m.h,null,r.a.createElement(m.n,{onChange:function(e){var t=e.target.value;h(t)},value:p},Object.keys(T).map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement(k,{list:g.map((function(e){return r.a.createElement(x,{key:e._id,request:e})}))}))))))},A=function(e){e.title;var t=e.item,a=Object(n.useState)(!1),l=Object(E.a)(a,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return o(!c)}},r.a.createElement(m.a,null,t.count),r.a.createElement("div",{style:{display:"inline-block",paddingLeft:"10px"}},r.a.createElement("strong",null,t.hostName),"\xa0 (see ",c?"less":"more",")")),r.a.createElement(m.i,{open:c},r.a.createElement("div",{className:"p-3 mt-3 border rounded"},r.a.createElement(k,{list:t.data.map((function(e){return r.a.createElement("div",null,e.iniType,r.a.createElement("hr",null))}))}))))},M=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(E.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)([]),p=Object(E.a)(u,2),h=p[0],g=p[1],y=Object(n.useState)([]),v=Object(E.a)(y,2),b=v[0],T=v[1];return Object(n.useEffect)((function(){l(!0),f.get("/info/group/resource").then((function(e){var t=e.data;s(e.data);var a=Object.keys(t).map((function(e){return{iniType:e,count:t[e].length,url:new URL(e),host:new URL(e).host}})).sort((function(e,t){return t.count-e.count}));g(a);var n,r=(n="host",a.reduce((function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e}),{})),l=Object.keys(r).map((function(e){return{hostName:e,count:r[e].length,data:r[e]}})).sort((function(e,t){return t.count-e.count}));T(l)})).catch((function(e){s(null)})).then((function(){l(!1)}))}),[]),r.a.createElement(N,{isLoading:a},r.a.createElement(m.j,{className:"pt-4"},i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Group resource"))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.f,null,r.a.createElement("h5",{style:{marginBottom:"0px"}},"Most called hosts")),r.a.createElement(m.d,null,r.a.createElement(m.o,null,r.a.createElement(k,{list:b.map((function(e){return r.a.createElement(m.p,null,r.a.createElement(A,{item:e}))}))})),r.a.createElement("div",{style:{marginTop:"70px"}},r.a.createElement(d.l,{width:"100%",height:400},r.a.createElement(d.b,{layout:"horizontal",data:b,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"hostName"}),r.a.createElement(d.p,null),r.a.createElement(d.n,null),r.a.createElement(d.d,null),r.a.createElement(d.a,{dataKey:"count",fill:"#17C671"})))))))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.f,null,r.a.createElement("h5",{style:{marginBottom:"0px"}},"Most called resources")),r.a.createElement(m.d,null,r.a.createElement(m.o,null,r.a.createElement(k,{list:h.map((function(e){return r.a.createElement(m.p,null,r.a.createElement(m.a,null,e.count),r.a.createElement("div",{style:{display:"inline-block",paddingLeft:"10px"}},e.iniType," - ",e.url.host))}))})),r.a.createElement("div",{style:{marginTop:"70px"}},r.a.createElement(d.l,{height:400},r.a.createElement(d.b,{layout:"horizontal",data:h.slice(0,40),margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"iniType"}),r.a.createElement(d.p,null),r.a.createElement(d.n,null),r.a.createElement(d.d,null),r.a.createElement(d.a,{dataKey:"count",fill:"#17C671"})))))))))))},C=(a(524),function(e){var t=e.title,a=e.badge,l=e.children,c=Object(n.useState)(!1),o=Object(E.a)(c,2),i=o[0],s=o[1];return r.a.createElement("div",{className:"toggle-item"},r.a.createElement("div",{className:"header",onClick:function(){return s(!i)}},r.a.createElement("span",{className:"title"},t),r.a.createElement("span",{className:"badge-special"}," ",a&&r.a.createElement(m.a,null,a)),r.a.createElement("span",{className:"plus"},i?"-":"+")),i&&r.a.createElement("div",null,l))}),B=function(e){var t=e.objectData,a=e.count;return t?r.a.createElement("div",{className:"show-raw-list"},r.a.createElement(k,{count:10,list:Object.keys(t).sort((function(e,a){return t[a].length-t[e].length})).map((function(e){return r.a.createElement(C,{key:e,title:e,badge:t[e].length},r.a.createElement(k,{list:t[e].map((function(e){return r.a.createElement(x,{request:e,resumed:!0})})),count:a||2}))}))})):null},z=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(E.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){l(!0),f.get("/info/group/initType").then((function(e){s(e.data)})).catch((function(e){s(null),console.log(e)})).then((function(){l(!1)}))}),[]);var u=i&&!a&&Object.keys(i).map((function(e){return{iniType:e,count:i[e].length}})).sort((function(e,t){return t.count-e.count}));return r.a.createElement(N,{isLoading:a},r.a.createElement(m.j,{className:"pt-4"},i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Group type"))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.f,null,r.a.createElement("h5",{style:{marginBottom:"0px"}},"Resources used count by type")),r.a.createElement(m.d,null,r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(d.l,{width:"100%",height:300},r.a.createElement(d.b,{width:500,height:300,data:u,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"iniType"}),r.a.createElement(d.p,null),r.a.createElement(d.n,null),r.a.createElement(d.d,null),r.a.createElement(d.a,{dataKey:"count",fill:"#17C671"})))))))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(B,{objectData:i}))))))},F=function(e){var t=e.x,a=e.y,n=(e.stroke,e.payload);return r.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")"),style:{fontSize:"10px",fontWeight:"bold"}},r.a.createElement("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)"},n.value))},L=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(E.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){l(!0),f.get("/info/group/ip").then((function(e){s(e.data)})).catch((function(e){s(null),console.log(e)})).then((function(){l(!1)}))}),[]);var u=i&&!a&&Object.keys(i).map((function(e){return{iniType:e.replace("::ffff:",""),count:i[e].length}})).sort((function(e,t){return t.count-e.count}));return r.a.createElement(N,{isLoading:a},r.a.createElement(m.j,{className:"pt-4"},i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Internet Protocol"))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.f,null,r.a.createElement("h5",{style:{marginBottom:"0px"}},"Resources used count by IP")),r.a.createElement(m.d,null,r.a.createElement("div",{style:{marginTop:"70px"}},r.a.createElement(d.l,{width:"100%",height:300},r.a.createElement(d.b,{width:500,height:300,data:u,margin:{top:5,right:30,left:20,bottom:85}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"iniType",tick:r.a.createElement(F,null),interval:0}),r.a.createElement(d.p,null),r.a.createElement(d.n,null),r.a.createElement(d.a,{dataKey:"count",fill:"#17C671"})))))))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(B,{objectData:i,count:1}))))))},q=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(E.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){l(!0),f.get("/info/group/session").then((function(e){s(e.data)})).catch((function(e){s(null),console.log(e)})).then((function(){l(!1)}))}),[]);var u=i&&!a&&Object.keys(i).map((function(e){return{iniType:e,count:i[e].length}})).sort((function(e,t){return t.count-e.count}));return r.a.createElement(N,{isLoading:a},r.a.createElement(m.j,{className:"pt-4"},i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Sessions"))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.f,null,r.a.createElement("h5",{style:{marginBottom:"0px"}},"Resources used count by session")),r.a.createElement(m.d,null,r.a.createElement("div",{style:{marginTop:"70px"}},r.a.createElement(d.l,{width:"100%",height:300},r.a.createElement(d.b,{width:500,height:300,data:u,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"iniType"}),r.a.createElement(d.p,null),r.a.createElement(d.n,null),r.a.createElement(d.d,null),r.a.createElement(d.a,{dataKey:"count",fill:"#17C671"})))))))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(B,{objectData:i}))))))},I=a(94),K=function(e){var t=Math.PI/180,a=e.cx,n=e.cy,l=e.midAngle,c=e.innerRadius,o=e.outerRadius,i=e.startAngle,m=e.endAngle,s=e.fill,u=e.payload,E=e.percent,p=e.value,h=Math.sin(-t*l),f=Math.cos(-t*l),g=a+(o+10)*f,y=n+(o+10)*h,v=a+(o+30)*f,b=n+(o+30)*h,T=v+22*(f>=0?1:-1),S=b,j=f>=0?"start":"end";return r.a.createElement("g",null,r.a.createElement("text",{style:{fontSize:"13px"},x:a,y:n,dy:8,textAnchor:"middle",fill:"black"},u.name),r.a.createElement(d.m,{cx:a,cy:n,innerRadius:c,outerRadius:o,startAngle:i,endAngle:m,fill:s}),r.a.createElement(d.m,{cx:a,cy:n,startAngle:i,endAngle:m,innerRadius:o+6,outerRadius:o+10,fill:s}),r.a.createElement("path",{d:"M".concat(g,",").concat(y,"L").concat(v,",").concat(b,"L").concat(T,",").concat(S),stroke:s,fill:"none"}),r.a.createElement("circle",{cx:T,cy:S,r:2,fill:s,stroke:"none"}),r.a.createElement("text",{style:{fontSize:"10px"},x:T+12*(f>=0?1:-1),y:S,textAnchor:j,fill:"#333"},"".concat(p," Times")),r.a.createElement("text",{style:{fontSize:"10px"},x:T+12*(f>=0?1:-1),y:S,dy:18,textAnchor:j,fill:"#999"},"(Rate ".concat((100*E).toFixed(2),"%)")))},H=function(e){var t=e.data,a=e.shouldTransformData,l=Object(n.useState)(0),c=Object(E.a)(l,2),o=c[0],i=c[1],s=a?function(e){var t=0,a=0,n=0,r=0,l=0,c={},o={};e.forEach((function(e){t+=e.duration,a+=0==e.transferSize?1:0,l+=e.transferSize||0,n+=e.redirectEnd-e.redirectStart,r+=e.responseEnd-e.responseStart,o[e.initiatorType]||(c[e.initiatorType]={},o[e.initiatorType]={count:0,fullDuration:0,fullRedirectDuration:0,fullResponseDuration:0,fullTransferSize:0}),o[e.initiatorType].count+=1,o[e.initiatorType].fullDuration+=e.duration,o[e.initiatorType].fullRedirectDuration+=e.redirectEnd-e.redirectStart,o[e.initiatorType].fullResponseDuration+=e.responseEnd-e.responseStart,o[e.initiatorType].fullTransferSize+=e.transferSize||0}));var i=t/e.length,m=n/e.length,s=r/e.length,u=l/e.length,E={name:"-",value:0};return Object.keys(o).forEach((function(e){var t=o[e].count;E.value<t&&(E={name:e,value:t}),c[e].avgTimeDuration=o[e].fullDuration/t,c[e].avgTimeRedirect=o[e].fullRedirectDuration/t,c[e].avgTimeResponse=o[e].fullResponseDuration/t,c[e].avgTransferSize=o[e].fullTransferSize/t})),{count:e.length,fullChacedCount:a,avgTimeDuration:i,avgTimeRedirect:m,avgTimeResponse:s,avgTransferSize:u,groupByInitiatorType:c,biggestInitiator:E}}(t):t,u=s&&Object.keys(s).length>0,p=u?Object.keys(s.groupByInitiatorType).reduce((function(e,t){return[].concat(Object(I.a)(e),[{name:(a=t,"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)),value:s.groupByInitiatorType[t].avgTimeDuration}]);var a}),[]):[],h=u?[{name:"Normal Request",value:s.count-s.fullChacedCount},{name:"Cached Request",value:s.fullChacedCount}]:[],f={marginBottom:"0px",fontSize:"15px"};return u?r.a.createElement(m.j,null,r.a.createElement(m.w,null,r.a.createElement(m.h,null,r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(d.l,{width:"100%",height:300},r.a.createElement(d.k,{cx:140,cy:140,outerRadius:100,data:p},r.a.createElement(d.h,null),r.a.createElement(d.g,{dataKey:"name"}),r.a.createElement(d.i,null),r.a.createElement(d.j,{name:"Mike",dataKey:"value",fill:"#17c671",fillOpacity:.7}))))),r.a.createElement(m.h,null,r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(d.l,{width:"100%",height:300},r.a.createElement(d.f,null,r.a.createElement(d.e,{activeIndex:o,activeShape:K,data:h,cx:140,innerRadius:60,outerRadius:80,fill:"#FFB400",dataKey:"value",onMouseEnter:function(e,t){i(t)}}))))),r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.d,null,r.a.createElement(m.g,{style:f},"Avg. transfer size"),r.a.createElement("span",{className:"result-resume-small"},b(s.avgTransferSize)),r.a.createElement("hr",null),r.a.createElement(m.g,{style:f},"Avg. response time"),r.a.createElement("span",{className:"result-resume-small"},w(s.avgTimeResponse)),r.a.createElement("hr",null),r.a.createElement(m.g,{style:f},"Avg. request duration"),r.a.createElement("span",{className:"result-resume-small"},w(s.avgTimeDuration,!0))))))):null},P=function(e){var t=e.x,a=e.y,n=(e.stroke,e.payload);return r.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")"),style:{fontSize:"10px",fontWeight:"bold"}},r.a.createElement("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)"},n.value))},G=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(E.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){l(!0),f.get("/info/group/geolocation").then((function(e){s(e.data)})).catch((function(e){s(null),console.log(e)})).then((function(){l(!1)}))}),[]);var u=function(e){var t=[];return function e(a,n){var r=Boolean(a),l=Array.isArray(a),c="object"===typeof a;r&&(l?t.push({Cidade:n,Recursos:a.length}):c&&Object.keys(a).forEach((function(t){var r="".concat(n?n+" / ":""," ").concat(t);e(a[t],r)})))}(e,""),t.filter((function(e){return e.Recursos})).sort((function(e,t){return t.Recursos-e.Recursos}))}(i);return r.a.createElement(N,{isLoading:a},r.a.createElement(m.j,{className:"pt-4"},i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement("h3",null,"Geolocation"))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.f,null,r.a.createElement("h5",{style:{marginBottom:"0px"}},"Location subsections")),r.a.createElement(m.d,null,function e(t,a){return r.a.createElement("div",{className:a>0?"pt-4":""},Array.isArray(t)?r.a.createElement("div",null,r.a.createElement(H,{data:t,shouldTransformData:!0}),r.a.createElement(k,{list:t.map((function(e){return r.a.createElement(x,{key:e._id,request:e})})),count:2})):"object"===typeof t?Object.keys(t).sort((function(e,t){return e.property-t.property})).map((function(n){var l=Array.isArray(t[n]),c="object"===typeof t[n],o=l?t[n].length:c?Object.keys(t[n]).length:"-",i=0===o?"Empty":1===o?"One item":"".concat(o," subitems");return r.a.createElement(C,{key:"".concat(a+1).concat(n),title:n,badge:i},e(t[n],a+1))})):r.a.createElement("hr",null))}(i,0))))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"mb-3 mt-3"},r.a.createElement(m.f,null,r.a.createElement("h5",{style:{marginBottom:"0px"}},"Cities visualization")),r.a.createElement(m.d,null,r.a.createElement(m.h,null,r.a.createElement("div",{style:{marginTop:"30px",marginBottom:"60px"},className:"bigtext"},r.a.createElement(d.l,{width:"100%",height:300},r.a.createElement(d.b,{data:u,margin:{top:5,right:30,left:20,bottom:90}},r.a.createElement(d.c,{strokeDasharray:"3 3"}),r.a.createElement(d.o,{dataKey:"Cidade",tick:r.a.createElement(P,null),interval:0}),r.a.createElement(d.p,null),r.a.createElement(d.n,null),r.a.createElement(d.a,{dataKey:"Recursos",fill:"#FFB400"}))))))))))))},U={name:void 0,initiatorType:void 0},W=function(e){e.shouldTransformData;var t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)({}),i=Object(E.a)(o,2),s=i[0],d=i[1],p=Object(n.useState)(U),h=Object(E.a)(p,2),y=h[0],v=h[1],b=function(e,t){v(Object(u.a)({},y,Object(g.a)({},t,e.target.value)))};return r.a.createElement(N,{isLoading:l},r.a.createElement(m.k,null,r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.l,null,r.a.createElement("label",{htmlFor:"#initiator"},"Initiator type"),r.a.createElement(m.n,{id:"#initiator",value:y.initiatorType,onChange:function(e){b(e,"initiatorType")}},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Select..."),r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"script"},"script"),r.a.createElement("option",{value:"img"},"img"),r.a.createElement("option",{value:"xmlhttprequest"},"xmlhttprequest"),r.a.createElement("option",{value:"css"},"css"),r.a.createElement("option",{value:"fetch"},"fetch"),r.a.createElement("option",{value:"other"},"other")))),r.a.createElement(m.h,null,r.a.createElement(m.l,null,r.a.createElement("label",{htmlFor:"#name"},"Resource name"),r.a.createElement(m.m,{value:y.name,type:"text",id:"#name",placeholder:"...",onChange:function(e){b(e,"name")}})))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement(m.l,null,r.a.createElement("label",{htmlFor:"#dateStart"},"Date start"),r.a.createElement(m.m,{type:"date",id:"#dateStart",value:y.dateStart,placeholder:"...",onChange:function(e){b(e,"dateStart")}}))),r.a.createElement(m.h,null,r.a.createElement(m.l,null,r.a.createElement("label",{htmlFor:"#dateEnd"},"Date end"),r.a.createElement(m.m,{type:"date",id:"#dateEnd",value:y.dateEnd,placeholder:"...",onChange:function(e){b(e,"dateEnd")}})))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(m.h,null,r.a.createElement("div",{className:"button-group"},r.a.createElement("div",{className:"options-wrapper"},r.a.createElement(m.b,{onClick:function(){c(!0),f.post("/info/filtered/",y).then((function(e){d(e.data)})).catch((function(){d({}),c(!1)})).finally((function(){c(!1)}))}},"Filter"),r.a.createElement(m.b,{outline:!0,onClick:function(){v({name:""})}},"Reset"))))),r.a.createElement(m.w,{className:"pt-3"},r.a.createElement(H,{data:s,shouldTransformData:!1}))))};a(525);var J=function(){var e=Object(n.useState)(["1","2"]),t=Object(E.a)(e,2),a=t[0],l=t[1];return r.a.createElement(m.j,{className:"pt-4"},r.a.createElement(m.j,{className:"pt-4"},r.a.createElement(m.b,{style:{float:"right"},onClick:function(){l([].concat(Object(I.a)(a),[([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))]))}},"Add new report for comparison"),r.a.createElement("h3",null,"Compare")),r.a.createElement(m.j,{className:"pt-4"},a.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("h5",null,"Report ",t+1),r.a.createElement(W,{key:e}))}))))};a(526);var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(s,null),r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/groupType"},r.a.createElement(z,null)),r.a.createElement(i.a,{path:"/groupResource"},r.a.createElement(M,null)),r.a.createElement(i.a,{path:"/raw"},r.a.createElement(D,null)),r.a.createElement(i.a,{path:"/ip"},r.a.createElement(L,null)),r.a.createElement(i.a,{path:"/session"},r.a.createElement(q,null)),r.a.createElement(i.a,{path:"/geolocation"},r.a.createElement(G,null)),r.a.createElement(i.a,{path:"/comparative"},r.a.createElement(J,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(R,null))))),r.a.createElement("center",null,r.a.createElement("p",{className:"footer"},"Resource analytics, 2020")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(527),a(528);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[251,1,2]]]);
//# sourceMappingURL=main.ac713fb6.chunk.js.map