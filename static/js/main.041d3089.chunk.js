(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(7),i=c.n(n),j=(c(13),c(6)),r=c(3),l=(c(14),c(8)),d=c.n(l),b=c(0);var o=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=i[0],o=i[1],h=Object(s.useState)([]),x=Object(r.a)(h,2),m=x[0],u=x[1],O=Object(s.useState)(!1),p=Object(r.a)(O,2);return p[0],p[1],(new Date).getDay(),Object(b.jsx)("div",{className:"app",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row text-center",children:[Object(b.jsx)("h1",{className:"col-md-12 mt-5",children:"ToDo List"}),Object(b.jsxs)("div",{className:"input-group col-md-12 mt-4 mb-3",children:[Object(b.jsx)("div",{className:"input-group-prepend",children:Object(b.jsx)("span",{className:"input-group-text bg-success text-white",children:"Add To Do"})}),Object(b.jsx)("input",{type:"text",value:l,onChange:function(e){return o(e.target.value)},className:"form-control"}),Object(b.jsx)("div",{className:"input-group-append",children:Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",onSubmit:function(e){e.preventDefault()},onClick:function(){var e={id:Date.now(),text:l,time:d()().format("LLLL"),status:!1};a([].concat(Object(j.a)(c),[e])),o("")},children:"Add"})})]}),Object(b.jsx)("div",{className:"col-md-12",children:c.map((function(e){return console.log(e),Object(b.jsx)("div",{className:"card bg-warning mt-2",children:Object(b.jsxs)("div",{className:"card-body",children:[e.text,Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){a(c.filter((function(t){return t.id===e.id&&(t.status?t.status=!1:t.status=!0),t})))},children:Object(b.jsx)("i",{className:"fas fa-check"})}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){window.confirm("Are you sure you want to remove this ?")&&(u([].concat(Object(j.a)(m),[e])),a(c.filter((function(t){return t.id!==e.id?t:null}))))},children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})]})})}))}),Object(b.jsxs)("div",{className:"col-md-12 text-center mt-4",children:[Object(b.jsx)("h2",{children:"Active Tasks"}),Object(b.jsxs)("table",{className:"table-striped table table-hover table-bordered mt-4",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Time"}),Object(b.jsx)("th",{scope:"col",children:"To Do"}),Object(b.jsx)("th",{scope:"col",children:"Completed"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.time}),Object(b.jsx)("td",{children:e.text}),Object(b.jsxs)("td",{children:[" ",e.status?Object(b.jsx)("i",{className:"fas fa-check text-success"}):Object(b.jsx)("i",{className:"fas fa-times text-danger"})," "]})]})}))})]})]}),Object(b.jsxs)("div",{className:"col-md-12 text-center mt-4",children:[Object(b.jsx)("h2",{children:"Removed Tasks"}),Object(b.jsxs)("table",{className:"table-striped table table-hover table-bordered  mt-4",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Time"}),Object(b.jsx)("th",{scope:"col",children:"To Do"}),Object(b.jsx)("th",{scope:"col",children:"Completed"})]})}),Object(b.jsx)("tbody",{children:m.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.time}),Object(b.jsx)("td",{children:e.text}),Object(b.jsxs)("td",{children:[" ",e.status?Object(b.jsx)("i",{className:"fas fa-check text-success"}):Object(b.jsx)("i",{className:"fas fa-times text-danger"})," "]})]})}))})]})]})]})})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.041d3089.chunk.js.map