(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[6,8],{228:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(227),r=n(6),u=n(0),o=n.n(u),c=n(19),i=function(e){return{isAuth:e.auth_user.isAuth}};function l(e){return Object(c.b)(i)((function(t){var n=t.isAuth,u=Object(a.a)(t,["isAuth"]);return n?o.a.createElement(e,u):o.a.createElement(r.a,{to:"/login"})}))}},229:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var a=n(227),r=n(231),u=n.n(r),o=n(0),c=n.n(o),i=n(109),l=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:u.a.formControl+""+(o?u.a.error:"")},r,c.a.createElement("div",null,o&&c.a.createElement("span",null,a)))},s=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("textarea",Object.assign({},t,n)))},m=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(l,e,c.a.createElement("input",Object.assign({},t,n)))};function d(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",u)}},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}}},231:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3d2ED",error:"FormsControls_error__1gDGv"}},239:function(e,t,n){e.exports={dialogs:"Bonus_dialogs__3dpck",box:"Bonus_box__3p-V6",name:"Bonus_name__34NwY"}},241:function(e,t,n){"use strict";n.r(t),n.d(t,"Login",(function(){return b})),n.d(t,"BonusForm",(function(){return E})),n.d(t,"BonusReduxForm",(function(){return p}));var a=n(0),r=n.n(a),u=n(109),o=n(110),c=n(230),i=n(229),l=n(19),s=n(26),m=n(6),d=Object(o.a)({form:"login"})((function(e){var t=Object(l.d)((function(e){return e.auth_user.captchaUrl}));return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement("b",null,"mail"),r.a.createElement(u.a,{name:"inputLogin",type:"text",component:i.a,placeholder:"Login",validate:[c.b]})),r.a.createElement("div",null,r.a.createElement("b",null,"password"),r.a.createElement(u.a,{name:"inputPassword",type:"password",component:i.a,placeholder:"Password",validate:[c.b]})),r.a.createElement("div",null,r.a.createElement(u.a,{name:"inputCheckbox",type:"checkbox",component:"input"}),"remember me"),e.error&&r.a.createElement("div",null,e.error),t&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"captcha"})),r.a.createElement(u.a,{name:"captcha",type:"text",component:"input"})),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),b=function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile/".concat(e.userId)}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(d,{onSubmit:function(t){e.login(t.inputLogin,t.inputPassword,t.inputCheckbox,t.captcha)}}),r.a.createElement("div",null,r.a.createElement("b",null,"Email:")," free@samuraijs.com"),r.a.createElement("div",null,r.a.createElement("b",null,"Password:")," free"))};t.default=Object(l.b)((function(e){return{isAuth:e.auth_user.isAuth,userId:e.auth_user.userId}}),{login:s.d})(b);var f=Object(c.a)(10),E=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(u.a,{name:"BonusTextarea",type:"text",component:i.b,validate:[c.b,f],placeholder:"Message"}),r.a.createElement("div",null,r.a.createElement("button",null,"add mes")))},p=Object(o.a)({form:"BonusMessage"})(E)},314:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(239),o=n.n(u),c=n(9),i=function(e){return r.a.createElement("div",{className:o.a.name},r.a.createElement("img",{src:e.img,alt:""}),r.a.createElement(c.b,{to:"/Bonus/"+e.id,activeClassName:o.a.active},e.name))},l=function(e){return r.a.createElement("div",{className:o.a.day}," ",e.message)},s=n(241),m=r.a.memo((function(e){var t=e.bonusPage.messagesBonusData.map((function(e){return r.a.createElement(l,{message:e.message})})),n=e.bonusPage.dialogsBonusData.map((function(e){return r.a.createElement(i,{id:e.id,name:e.name,img:e.img})}));return r.a.createElement("div",{className:o.a.dialogs},r.a.createElement("div",{className:o.a.box},n),r.a.createElement("div",{className:o.a.box},r.a.createElement("h3",null,"\u041f\u0440\u0438\u0432\u0435\u0442 \u043a\u0430\u043a \u0434\u0435\u043b\u0430?"),t,r.a.createElement(s.BonusReduxForm,{onSubmit:function(t){e.addPostBonusText(t.BonusTextarea),t.BonusTextarea=""}})))})),d=n(19),b=n(66),f=n(23),E=n(228);t.default=Object(f.d)(Object(d.b)((function(e){return{bonusPage:e.bonusPage,isAuth:e.auth_user.isAuth}}),(function(e){return{addPostBonusText:function(t){e(Object(b.a)(t))}}})),E.a)(m)}}]);
//# sourceMappingURL=6.5ff9f6ac.chunk.js.map