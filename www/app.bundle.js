(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){"use strict";n.r(e);var u=n(2),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(29)),o=i(n(30)),r=i(n(31));function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{currentPage:"home",pages:["home","news","settings"],openSide:!1}},components:{home:u.default,news:o.default,settings:r.default}}},function(t,e,n){"use strict";n.r(e);var u=n(4),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u,o=n(13),r=(u=o)&&u.__esModule?u:{default:u};e.default={props:["toggleMenu"],components:{customToolbar:r.default}}},function(t,e,n){"use strict";n.r(e);var u=n(6),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","action"]}},function(t,e,n){"use strict";n.r(e);var u=n(8),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u,o=n(13),r=(u=o)&&u.__esModule?u:{default:u};e.default={props:["toggleMenu"],components:{customToolbar:r.default}}},function(t,e,n){"use strict";n.r(e);var u=n(10),o=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u,o=n(13),r=(u=o)&&u.__esModule?u:{default:u};e.default={props:["toggleMenu"],components:{customToolbar:r.default}}},,,function(t,e,n){"use strict";n.r(e);var u=n(18),o=n(5);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(0),a=Object(i.a)(o.default,u.a,u.b,!1,null,null,null);a.options.__file="src/components/toolbar.vue",e.default=a.exports},function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-splitter",[n("v-ons-splitter-side",{attrs:{swipeable:"",width:"150px",collapse:"",side:"left",open:t.openSide},on:{"update:open":function(e){t.openSide=e}}},[n("v-ons-page",[n("v-ons-list",[n("v-ons-list-header",[t._v("Menu")]),t._v(" "),t._l(t.pages,function(e){return n("v-ons-list-item",{key:e,attrs:{tappable:"",modifier:"chevron"},on:{click:function(n){t.currentPage=e,t.openSide=!1}}},[n("div",{staticClass:"center"},[t._v(t._s(e))])])})],2)],1)],1),t._v(" "),n("v-ons-splitter-content",[n(t.currentPage,{tag:"div",attrs:{"toggle-menu":function(){return t.openSide=!t.openSide}}})],1)],1)},o=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",{attrs:{title:"Home",action:this.toggleMenu}}),this._v(" "),e("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Welcome home.\n  ")])],1)},o=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",{attrs:{title:"News",action:this.toggleMenu}}),this._v(" "),e("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Some news here.\n  ")])],1)},o=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",{attrs:{title:"Settings",action:this.toggleMenu}}),this._v(" "),e("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Change the settings.\n  ")])],1)},o=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-toolbar",[e("div",{staticClass:"left"},[e("v-ons-toolbar-button",{on:{click:this.action}},[e("v-ons-icon",{attrs:{icon:"ion-navicon, material:md-menu"}})],1)],1),this._v(" "),e("div",{staticClass:"center"},[this._v(this._s(this.title))])])},o=[];u._withStripped=!0,n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},,,function(t,e,n){t.exports=n(22)},function(t,e,n){"use strict";n(23),n(24);var u=a(n(25)),o=a(n(27)),r=a(n(20)),i=a(n(28));function a(t){return t&&t.__esModule?t:{default:t}}r.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),u.default.use(o.default),new u.default({el:"#app",template:"<app></app>",components:{App:i.default}})},,,,,,function(t,e,n){"use strict";n.r(e);var u=n(14),o=n(1);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(0),a=Object(i.a)(o.default,u.a,u.b,!1,null,null,null);a.options.__file="src/App.vue",e.default=a.exports},function(t,e,n){"use strict";n.r(e);var u=n(15),o=n(3);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(0),a=Object(i.a)(o.default,u.a,u.b,!1,null,null,null);a.options.__file="src/components/homePage.vue",e.default=a.exports},function(t,e,n){"use strict";n.r(e);var u=n(16),o=n(7);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(0),a=Object(i.a)(o.default,u.a,u.b,!1,null,null,null);a.options.__file="src/components/newsPage.vue",e.default=a.exports},function(t,e,n){"use strict";n.r(e);var u=n(17),o=n(9);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(0),a=Object(i.a)(o.default,u.a,u.b,!1,null,null,null);a.options.__file="src/components/settingsPage.vue",e.default=a.exports}],[[21,1,2]]]);