(this.webpackJsonpseacher=this.webpackJsonpseacher||[]).push([[0],{33:function(e,a,t){e.exports=t(64)},38:function(e,a,t){},46:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=(t(38),t(15)),s=t.n(l),i=t(30),m=t(27),u=t.n(m),h=function(e){return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"searcher"},r.a.createElement("form",{onSubmit:e.getSearch,className:"searcher"},r.a.createElement("input",{type:"text",name:"search",className:"searcherTerm",placeholder:"Enter Search Here"}),r.a.createElement("button",{className:"searcherButton"},r.a.createElement(u.a,null)))))},d=t(4),g=t(85),p=t(88),E=t(90),f=t(83),v=t(86),b=t(89),w=t(84),k=t(87),y=Object(d.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(f.a),N=Object(d.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(w.a),S=Object(g.a)({table:{minWidth:700}}),j=function(e){var a=e.rows;a||(a=[]);var t=S();return r.a.createElement("div",{className:"searchBody"},r.a.createElement(v.a,{component:k.a},r.a.createElement(p.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(b.a,null,r.a.createElement(w.a,null,r.a.createElement(y,null,"id"),r.a.createElement(y,{align:"right"},"Weergavenaam"),r.a.createElement(y,{align:"right"},"Score"))),r.a.createElement(E.a,null,a.map((function(e){return r.a.createElement(N,{key:e.weergavenaam},r.a.createElement(y,{component:"th",scope:"row"},e.id),r.a.createElement(y,{align:"right"},e.weergavenaam),r.a.createElement(y,{align:"right"},e.score))}))))))},x=(t(46),t(29)),O=t.n(x),B=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("h1",{className:"center"},"Find Address"),r.a.createElement(h,{getSearch:function(e){var a;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==(a=e.target.elements.search.value)){t.next=3;break}return t.abrupt("return");case 3:return e.preventDefault(),t.next=6,s.a.awrap(O.a.get("https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?fq=type:adres&q=".concat(a,"&start=0&rows=20&fq=*:*")).then((function(e){c(e.data.response.docs)})));case 6:case"end":return t.stop()}}))}}),r.a.createElement(j,{rows:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.a48a7c04.chunk.js.map