(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[6],{227:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(227),o=n(6),u=n(0),a=n.n(u),i=n(19),s=function(e){return{isAuth:e.auth_user.isAuth}};function l(e){return Object(i.b)(s)((function(t){var n=t.isAuth,u=Object(r.a)(t,["isAuth"]);return n?a.a.createElement(e,u):a.a.createElement(o.a,{to:"/login"})}))}},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(59);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,u=s}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},240:function(e,t,n){"use strict";function r(e,t){return e===t}function o(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}n.d(t,"k",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"j",(function(){return d})),n.d(t,"h",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return b}));var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=0,i=r.pop(),s=u(r),l=e.apply(void 0,[function(){return a++,i.apply(null,arguments)}].concat(n)),c=e((function(){for(var e=[],t=s.length,n=0;n<t;n++)e.push(s[n].apply(null,arguments));return l.apply(null,e)}));return c.resultFunc=i,c.dependencies=s,c.recomputations=function(){return a},c.resetRecomputations=function(){return a=0},c}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,u=null;return function(){return o(t,n,arguments)||(u=e.apply(null,arguments)),n=arguments,u}}));var i=function(e){return e.users.users},s=(a(i,(function(e){e.filter((function(e){return!0}))})),function(e){return e.users.pageSize}),l=function(e){return e.users.totalUsersCount},c=function(e){return e.users.currentPage},f=function(e){return e.users.isFetching},p=function(e){return e.users.followingInProgress},g=function(e){return e.profile.profile},d=function(e){return e.profile.userId},h=function(e){return e.profile.status},m=function(e){return e.auth_user.userId},b=function(e){return e.auth_user.isAuth}},254:function(e,t,n){e.exports={selectedPage:"users_selectedPage__24oKy",userContainer:"users_userContainer__3iWuD",table:"users_table__k_ILz"}},300:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__fTvvD",paginator:"Paginator_paginator__2fkZt"}},316:function(e,t,n){"use strict";n.r(t);var r=n(41),o=n(42),u=n(44),a=n(43),i=n(19),s=n(82),l=n(0),c=n.n(l),f=n(234),p=n(300),g=n.n(p),d=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var o=Math.ceil(t/20),u=Object(l.useState)(1),a=Object(f.a)(u,2),i=a[0],s=a[1],p=20*(i-1)+1,d=20*i;return c.a.createElement("div",{className:g.a.paginator},i>1&&c.a.createElement("button",{onClick:function(){s(i-1)}},"PREV"),n.filter((function(e){return e>=p&&e<=d})).map((function(t){return c.a.createElement("span",{key:t,style:{display:"alignItems"},className:e.currentPage===t?g.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)}},t,"-")})),o>i&&c.a.createElement("button",{onClick:function(){s(i+1)}},"NEXT"))},h=n(9),m=n(254),b=n.n(m),v=c.a.memo((function(e){var t,n=e.user,r=e.follow,o=e.unfollow,u=e.folloingInProgress;return null!=n.status&&(t=n.status.substr(0,15)),c.a.createElement("div",{key:n.id},c.a.createElement("div",{className:b.a.table},c.a.createElement(h.b,{to:"/Profile/"+n.id},c.a.createElement("img",{src:n.photos.small?n.photos.small:"https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg",alt:n.name,width:"150px"})),c.a.createElement("div",{style:{padding:"20px"}},c.a.createElement("b",{style:{fontSize:"18px"}},n.name),c.a.createElement("div",null," ",t),n.followed?c.a.createElement("div",{style:{paddingTop:"20px"}},c.a.createElement("button",{disabled:u.some((function(e){return e===n.id})),onClick:function(){o(n.id)}},"unfollow")):c.a.createElement("div",{style:{paddingTop:"20px"}},c.a.createElement("button",{disabled:u.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"follow")))))})),y=n(64),P=c.a.memo((function(e){var t=e.users,n=e.pageSize,r=e.totalUsersCount,o=e.currentPage,u=e.onPageChanged,a=e.follow,i=e.unfollow,s=e.folloingInProgress,l=e.isFetching;return c.a.createElement("div",null,c.a.createElement(d,{totalUsersCount:r,pageSize:n,currentPage:o,onPageChanged:u}),l?c.a.createElement(y.a,null):c.a.createElement("div",{className:b.a.userContainer},t.map((function(e){return c.a.createElement(v,{key:e.id,follow:a,folloingInProgress:s,unfollow:i,user:e})}))))})),w=n(228),j=n(23),E=n(240),C=function(e){Object(u.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return(e=t.call.apply(t,[this].concat(u))).onPageChanged=function(t){var n=e.props.pageSize;e.props.setCurrentPage(t),e.props.getUsersThunkCreator(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsersThunkCreator(t,n)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(P,{totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,pageSize:this.props.pageSize,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,folloingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching}))}}]),n}(c.a.Component);t.default=Object(j.d)(Object(i.b)((function(e){return{users:Object(E.k)(e),pageSize:Object(E.f)(e),totalUsersCount:Object(E.i)(e),currentPage:Object(E.b)(e),isFetching:Object(E.e)(e),followingInProgress:Object(E.c)(e),isAuth:Object(E.d)(e)}}),{follow:s.a,unfollow:s.e,setCurrentPage:s.c,setIsFollowingProgress:s.d,getUsersThunkCreator:s.b}),w.a)(C)}}]);
//# sourceMappingURL=6.80934b4a.chunk.js.map