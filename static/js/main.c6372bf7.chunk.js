(this.webpackJsonptask_tracker=this.webpackJsonptask_tracker||[]).push([[0],{29:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(7),l=n.n(u),j=n(11),d=n(10),b=n(8),h=n(2),p=n(1),f=function(t){var e=t.color,n=t.text,r=t.onClickParam;return Object(p.jsx)("button",{onClick:r,style:{backgroundColor:e},className:"btn",children:n})};f.defaultProps={color:"green",text:"Add"};var x=f,O=function(t){var e=t.title,n=t.toggleActionAdd,r=t.showAddTaskProp,c=Object(h.e)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{children:e}),"/"===c.pathname&&Object(p.jsx)(x,{onClickParam:n,text:r?"close":"add",color:r?"red":"green"})]})};O.defaultProps={title:"Task Tracker"};var m=O,v=function(){return Object(p.jsxs)("footer",{children:[Object(p.jsx)("p",{children:"Copyright \xa9 2021"}),Object(p.jsx)(b.b,{to:"/about",children:"About"})]})},k=n(23),g=function(t){var e=t.taskObject,n=t.deleteProp,r=t.toggleProp;return Object(p.jsxs)("div",{className:"task ".concat(e.reminder?"reminder":""),onDoubleClick:function(){return r(e.id)},children:[Object(p.jsxs)("h3",{children:[e.text,Object(p.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(e.id)}})]}),Object(p.jsx)("p",{children:e.dayntime})]})},y=function(t){var e=t.collection,n=t.actionDelete,r=t.actionToggle;return Object(p.jsx)(p.Fragment,{children:e.map((function(t,e){return Object(p.jsx)(g,{taskObject:t,deleteProp:n,toggleProp:r},e)}))})},w=function(t){var e=t.actionAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(!1),b=Object(d.a)(j,2),h=b[0],f=b[1];return Object(p.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),a?(e({text:a,dayntime:u,reminder:h}),s(""),l(""),f(!1)):alert("write text please")},children:[Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Task"}),Object(p.jsx)("input",{type:"text",placeholder:"add task",value:a,onChange:function(t){return s(t.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Day & Time"}),Object(p.jsx)("input",{type:"text",placeholder:"add day n time",value:u,onChange:function(t){return l(t.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control form-control-check",children:[Object(p.jsx)("label",{children:"Set Reminder"}),Object(p.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(t){return f(t.currentTarget.checked)}})]}),Object(p.jsx)("input",{type:"submit",value:"save task",className:"btn btn-block"})]})},C=function(){return Object(p.jsxs)("div",{style:{textAlign:"center"},children:[Object(p.jsx)("h4",{children:"Version 1.0.0"}),Object(p.jsx)(b.b,{to:"/",children:"Go Back"})]})},T=function(){var t=Object(r.useState)(!1),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:e=t.sent,f(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var x=function(){var t=Object(j.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(j.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(j.a)(l.a.mark((function t(e){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,f([].concat(Object(i.a)(u),[r]));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(j.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks/".concat(e),{method:"DELETE"});case 2:f(u.filter((function(t){return t.id!==e})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(j.a)(l.a.mark((function t(e){var n,r,c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:return n=t.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),t.next=6,fetch("http://localhost:5000/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=t.sent,t.next=9,c.json();case 9:a=t.sent,f(u.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{reminder:a.reminder}):t})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(m,{toggleActionAdd:function(){return c(!n)},showAddTaskProp:n}),Object(p.jsx)(h.a,{path:"/",exact:!0,render:function(t){return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(w,{actionAdd:k}),u.length>0?Object(p.jsx)(y,{collection:u,actionDelete:g,actionToggle:T}):"No Tasks to show"]})}}),Object(p.jsx)(h.a,{path:"/about",component:C}),Object(p.jsx)(v,{})]})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),P()}},[[37,1,2]]]);
//# sourceMappingURL=main.c6372bf7.chunk.js.map