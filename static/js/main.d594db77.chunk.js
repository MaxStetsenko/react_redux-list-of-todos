(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c,r=n(8),s=n.n(r),a=n(3),o=(n(25),n(9)),u=n(16),l=n(2),i=n(5),d=n(4),j=n.n(d),b="https://mate.academy/students-api",p=function(){var e=Object(i.a)(j.a.mark((function e(){var t,n,c,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=[],e.prev=2,e.next=5,fetch("".concat(b).concat(t));case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),new Error("Error with request ".concat(e.t0));case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),f=function(){return p("/todos")},h=function(e){return p("/users/".concat(e))},O="SET_USER",m="CLEAR_USER",v={setUser:function(e){return{type:O,payload:e}},fetchUser:function(e){var t=this;return function(){var n=Object(i.a)(j.a.mark((function n(c){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h(e);case 3:r=n.sent,c(t.setUser(r)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},clearUser:function(){return{type:m}}},x={user:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{user:null});default:return e}};!function(e){e.All="All",e.Completed="Completed",e.NotCompleted="Not completed"}(c||(c={}));var y={todos:[],showStatus:c.All},N="SET_TODOS",g="SET_TODOS_STATUS",S="DELETE_TODO",U={setTodos:function(e){return{type:N,payload:e}},fetchTodos:function(){var e=this;return function(){var t=Object(i.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f();case 3:c=t.sent,n(e.setTodos(c)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setStatus:function(e){return{type:g,payload:e}},deleteTodo:function(e){return{type:S,payload:e}}};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(l.a)(Object(l.a)({},e),{},{todos:t.payload});case g:return Object(l.a)(Object(l.a)({},e),{},{showStatus:t.payload});case S:return Object(l.a)(Object(l.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});default:return e}},C=Object(o.b)({todos:k,selectedUser:w}),T=Object(o.c)(C,Object(o.a)(u.a)),E=n(7),I=n(0),L=n.n(I),_=n(17),A=n.n(_),D=n(6),R=n.n(D),V=n(1),q=L.a.memo((function(e){var t=e.todos,n=e.handleSetUserId,c=e.selectedUserId,r=Object(a.b)();return Object(V.jsx)("ul",{className:"list-group",children:!!t.length&&t.map((function(e){return Object(V.jsxs)("li",{className:R()("list-group-item d-flex",{"list-group-item-warning":!e.completed,"list-group-item-success":e.completed}),children:[Object(V.jsx)("input",{className:"form-check-input me-1",type:"checkbox",checked:e.completed,readOnly:!0}),e.title,Object(V.jsx)("button",{type:"button",className:"badge bg-primary",onClick:function(){return t=e.id,void r(U.deleteTodo(t));var t},children:"Delete"}),Object(V.jsxs)("button",{type:"button",className:R()("badge bg-primary rounded-pill ms-auto",{"bg-success":c===e.userId}),onClick:function(){return n(e.userId)},children:["User Id: - \u2002",e.userId]})]},e.id)}))})})),B=(n(39),function(e){var t=e.user,n=Object(a.b)();return Object(V.jsx)(V.Fragment,{children:t?Object(V.jsxs)("div",{className:"User",children:[Object(V.jsxs)("div",{className:"UserSelectedInfo",children:["Selected user:",t.id]}),Object(V.jsxs)("div",{className:"UserBody",children:[Object(V.jsxs)("div",{className:"UserName",children:["Name:\u2002",t.name]}),Object(V.jsxs)("div",{className:"UserMail",children:["Email:\u2002",t.email]}),Object(V.jsxs)("div",{className:"UserPhone",children:["Phone:\u2002",t.phone]})]}),Object(V.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){n(v.clearUser())},children:"Clear"})]}):Object(V.jsx)("div",{className:"User",children:"User not selected"})})}),F=function(e){var t=e.dropdownList,n=e.defaultValue,c=e.switchValue,r=Object(I.useState)(!1),s=Object(E.a)(r,2),a=s[0],o=s[1];return Object(V.jsxs)("div",{className:"dropdown w-100",children:[Object(V.jsx)("button",{className:R()("btn btn-secondary dropdown-toggle w-100",{show:a}),type:"button","aria-expanded":"false",onClick:function(){return o(!a)},children:n}),Object(V.jsx)("ul",{className:R()("dropdown-menu dropdown-menu-dark",{show:a}),children:!!t.length&&t.map((function(e){return n!==e&&Object(V.jsx)("li",{children:Object(V.jsx)("button",{type:"button",className:"dropdown-item",onClick:function(){return c(e),void o(!a)},children:e})},e)}))})]})},J=function(e){var t=e.query,n=e.setQuery,c=e.dropdownList,r=e.status,s=e.handleStatus;return Object(V.jsxs)("div",{className:"TodoListFilters mb-4 d-flex",children:[Object(V.jsx)("input",{type:"text",className:"form-control me-3",placeholder:"Search",value:t,onChange:function(e){return n(e.target.value)}}),Object(V.jsx)("div",{className:"w-25",children:Object(V.jsx)(F,{defaultValue:r,switchValue:s,dropdownList:c})})]})},M=(n(40),function(){var e=Object(a.b)(),t=Object(I.useMemo)((function(){return Object.values(c)}),[]),n=Object(I.useState)(0),r=Object(E.a)(n,2),s=r[0],o=r[1],u=Object(I.useState)(""),l=Object(E.a)(u,2),i=l[0],d=l[1],j=Object(I.useState)(""),b=Object(E.a)(j,2),p=b[0],f=b[1],h=Object(a.c)((function(e){return e.todos.todos})),O=Object(a.c)((function(e){return e.selectedUser.user})),m=Object(a.c)((function(e){return e.todos.showStatus}));console.log(O);var x=h;Object(I.useEffect)((function(){e(U.fetchTodos())}),[]),Object(I.useEffect)((function(){(null===O||void 0===O?void 0:O.id)!==s&&e(v.fetchUser(s))}),[s]);var w=Object(I.useCallback)(A()((function(e){f(e)}),1e3),[]);m.length&&function(){switch(m){case c.All:x=h;break;case c.Completed:x=x.filter((function(e){return e.completed}));break;case c.NotCompleted:x=x.filter((function(e){return!e.completed}))}}(),i.length&&(x=x.filter((function(e){var t=p.toLowerCase();return e.title.toLowerCase().includes(t)})));var y=Object(I.useCallback)((function(e){e!==s&&o(e)}),[s]);return Object(V.jsx)("div",{className:"App",children:Object(V.jsx)("div",{className:"container",children:Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)("div",{className:"col-sm-12 mb-3",children:Object(V.jsx)("h1",{children:"Redux list of todos"})}),Object(V.jsxs)("div",{className:"col-sm-8",children:[Object(V.jsx)(J,{query:i,setQuery:function(e){d(e),w(e)},dropdownList:t,status:m,handleStatus:function(t){e(U.setStatus(t))}}),Object(V.jsx)(q,{todos:x,handleSetUserId:y,selectedUserId:s})]}),Object(V.jsx)("div",{className:"col-sm-4",children:Object(V.jsx)(B,{user:O})})]})})})}),P=function(){return Object(V.jsx)(a.a,{store:T,children:Object(V.jsx)(M,{})})};s.a.render(Object(V.jsx)(P,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d594db77.chunk.js.map