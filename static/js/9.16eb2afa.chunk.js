(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[9],{220:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return s}));var c=t(24),r=function(){return{type:c.a}},s=function(e,n){return console.log(e),404===e.response.status?(console.log(404),function(e){return console.log(402),{type:c.e,props:e}}(n)):500===e.response.status?function(e){return{type:c.f,props:e}}(n):function(e){return{type:c.g,error:e}}(e)}},221:function(e,n,t){"use strict";t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return d})),t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return j}));var c=t(24),r=t(223),s=t.n(r).a.create({baseURL:"http://brokerage.herokuapp.com",headers:{headerType:"example header type"}}),o=t(220),u=function(e,n){return function(t){s.get(e).then((function(e){var n;t((n=e.data,{type:c.d,data:n}))})).catch((function(e){t(o.b(e,n))}))}},i=function(e,n,t){return function(r){s.post(e,n).then((function(e){r(function(e){return{type:c.h,response:e}}(e))})).catch((function(e){r(o.b(e,t))}))}},d=function(e,n,t){return function(r){s.put(e,n).then((function(e){r(function(e){return{type:c.i,response:e}}(e))})).catch((function(e){r(o.b(e,t))}))}},a=function(e,n){return function(t){s.delete(e).then((function(e){t(function(e){return{type:c.c,response:e}}(e))})).catch((function(e){console.log("error",e),t(o.b(e,n))}))}},j=function(e,n){return{type:c.b,props:n,url:e}}},266:function(e,n,t){"use strict";t.r(n);var c=t(14),r=t(9),s=t(1),o=t(94),u=t(15),i=t(221),d=t(227),a=t.n(d),j=function(e){var n=null;return e.accounts&&(n=e.accounts.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.accountType}),Object(r.jsx)("td",{children:Object(r.jsx)(a.a,{format:"MM/DD/YYYY",children:e.dateCreated})})]},e.id)}))),Object(r.jsx)(u.l,{children:Object(r.jsx)(u.b,{md:12,children:Object(r.jsxs)(u.m,{responsive:!0,striped:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Account type"}),Object(r.jsx)("th",{children:"Date created"})]})}),Object(r.jsx)("tbody",{children:n})]})})})};n.default=function(e){var n=Object(o.c)();Object(s.useEffect)((function(){var t="/api/owner/"+e.match.params.id+"/account";n(i.c(t,Object(c.a)({},e)))}),[e,n]);var t=Object(o.d)((function(e){return e.repository.data}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(u.n,{children:[Object(r.jsxs)(u.l,{children:[Object(r.jsx)(u.b,{md:3,children:Object(r.jsx)("strong",{children:"Owner name:"})}),Object(r.jsx)(u.b,{md:3,children:t.name})]}),Object(r.jsxs)(u.l,{children:[Object(r.jsx)(u.b,{md:3,children:Object(r.jsx)("strong",{children:"Date of birth:"})}),Object(r.jsx)(u.b,{md:3,children:Object(r.jsx)(a.a,{format:"MM/DD/YYYY",children:t.dateOfBirth})})]}),function(e){return e.accounts&&e.accounts.length<=2?Object(r.jsxs)(u.l,{children:[Object(r.jsx)(u.b,{md:3,children:Object(r.jsx)("strong",{children:"Type of user:"})}),Object(r.jsx)(u.b,{md:3,children:Object(r.jsx)("span",{className:"text-success",children:"Beginner user."})})]}):Object(r.jsxs)(u.l,{children:[Object(r.jsx)(u.b,{md:3,children:Object(r.jsx)("strong",{children:"Type of user:"})}),Object(r.jsx)(u.b,{md:3,children:Object(r.jsx)("span",{className:"text-info",children:"Advanced user."})})]})}(t)]}),Object(r.jsx)(j,{accounts:t.accounts})]})}}}]);
//# sourceMappingURL=9.16eb2afa.chunk.js.map