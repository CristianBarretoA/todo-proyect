(this["webpackJsonptodo-proyect"]=this["webpackJsonptodo-proyect"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),a=n.n(r),s=n(6),l=n(2);var d=n(0),i=c.a.createContext(u);function u(e){var t,n=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),r=o[0],a=o[1],s=c.a.useState(!0),d=Object(l.a)(s,2),i=d[0],u=d[1],j=c.a.useState(t),O=Object(l.a)(j,2),b=O[0],m=O[1];return c.a.useEffect((function(){setTimeout((function(){try{var n=localStorage.getItem(e),o=n?JSON.parse(n):function(){return localStorage.setItem(e,JSON.stringify(t)),[]};m(o),u(!1)}catch(r){a(r)}}),2e3)})),{item:b,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),m(t)}catch(r){a(r)}},loading:i,error:r}}("TODOS_V1",[]),o=n.item,r=n.saveItem,a=n.loading,u=n.error,j=c.a.useState(""),O=Object(l.a)(j,2),b=O[0],m=O[1],x=c.a.useState(!1),f=Object(l.a)(x,2),p=f[0],h=f[1],g=o.filter((function(e){return!!e.completed})).length,v=o.length;t=!b.length>=1?o:o.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(d.jsx)(i.Provider,{value:{loading:a,error:u,totalTodos:v,completedTodos:g,searchValue:b,setSearchValue:m,searchedTodos:t,toggleCompleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),n=Object(s.a)(o);n[t].completed=!0,r(n)},deleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),n=Object(s.a)(o);n.splice(t,1),r(n)},todos:o,setTodo:r,openModal:p,setOpenModal:h,addTodo:function(e){var t=Object(s.a)(o);t.push({completed:!1,text:e}),r(t)}},children:e.children})}n(14);function j(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(d.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})}n(15);function O(){var e=Object(o.useContext)(i),t=e.searchValue,n=e.setSearchValue;return Object(d.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){n(e.target.value)}})}n(16);function b(e){return Object(d.jsx)("section",{children:Object(d.jsx)("ul",{children:e.children})})}n(17),n(18);var m=n(8),x={check:function(e){return Object(d.jsx)(m.a,{color:e,className:"Icon-svg Icon-svg--check"})},delete:function(e){return Object(d.jsx)(m.b,{color:e,className:"Icon-svg Icon-svg--delete"})}};var f=function(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,c=e.onClick;return Object(d.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:c,children:x[t](o)})};function p(e){var t=e.completed,n=e.onComplete;return Object(d.jsx)(f,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function h(e){var t=e.onDelete;return Object(d.jsx)(f,{type:"delete",onClick:t})}function g(e){return Object(d.jsxs)("li",{className:"TodoItem",children:[Object(d.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onCompleted,children:Object(d.jsx)(p,{completed:e.completed,onComplete:e.onCompleted})}),Object(d.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(d.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDeleted,children:Object(d.jsx)(h,{onDelete:e.onDeleted})})]})}n(19);function v(e){return Object(d.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(20);function T(e){var t=e.children;return a.a.createPortal(Object(d.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(21);function C(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],r=c.a.useContext(i),a=r.addTodo,s=r.setOpenModal;return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),s(!1)},children:[Object(d.jsx)("label",{children:"Agrega tu nuevo TODO"}),Object(d.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Cortar cebolla"}),Object(d.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(d.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){s(!1)},children:"Cancelar"}),Object(d.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}var I=function(e){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsxs)("p",{children:["An error has occurred: ",e.error]})})};n(22);function N(){return Object(d.jsxs)("div",{className:"LoadingTodo-container",children:[Object(d.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(d.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs"}),Object(d.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}var S=function(e){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)("p",{children:"\xa1Crea tu primer TODO!"})})};function k(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,r=e.toggleCompleteTodo,a=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(O,{}),Object(d.jsxs)(b,{children:[t&&Object(d.jsx)(I,{error:t}),n&&Object(d.jsx)(N,{}),!n&&!o.length&&Object(d.jsx)(S,{}),o.map((function(e){return Object(d.jsx)(g,{text:e.text,completed:e.completed,onCompleted:function(){return r(e.text)},onDeleted:function(){return a(e.text)}},e.text)}))]}),!!s&&Object(d.jsx)(T,{children:Object(d.jsx)(C,{})}),Object(d.jsx)(v,{setOpenModal:l})]})}var y=function(){return Object(d.jsx)(u,{children:Object(d.jsx)(k,{})})};n(23);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.1a6bc2ca.chunk.js.map