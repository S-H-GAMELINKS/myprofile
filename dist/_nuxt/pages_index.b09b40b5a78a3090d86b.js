webpackJsonp([2],{"/TYz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("KrYO"),a=n("iA8U"),s=!1;var o=function(t){s||n("Cbun")},r=n("VU/8")(i.a,a.a,!1,o,null,null);r.options.__file="pages\\index.vue",e.default=r.exports},"0MJc":function(t,e,n){"use strict";var i=n("UJG8"),a=n("6aV8"),s=n("VU/8")(i.a,a.a,!1,null,null,null);s.options.__file="components\\AppLogo.vue",e.a=s.exports},"4lJ3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:4}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",[t._v("Menu")])]),n("el-menu-item",{attrs:{index:"1-1"}},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Top")])],1),n("el-menu-item",{attrs:{index:"1-2"}},[n("nuxt-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),n("el-submenu",{attrs:{index:"1-3"}},[n("template",{slot:"title"},[t._v("Products")]),t._l(t.product,function(e,i,a){return n("div",{key:a},[n("el-menu-item",{attrs:{index:-2-a}},[n("nuxt-link",{attrs:{to:e.link}},[t._v(t._s(e.name))])],1)],1)})],2),n("el-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[t._v("SNS")]),t._l(t.sns,function(e,i,a){return n("div",{key:a},[n("el-menu-item",{attrs:{index:-3-a}},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])],1)})],2),n("el-submenu",{attrs:{index:"1-5"}},[n("template",{slot:"title"},[t._v("Work")]),t._l(t.work,function(e,i,a){return n("div",{key:a},[n("el-menu-item",{attrs:{index:-4-a}},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])],1)})],2),n("el-menu-item",{attrs:{index:"1-6"}},[n("a",{attrs:{href:"http://gamelinks007.hatenablog.com/"}},[t._v("Blog")])])],2)],1)],1)],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},"6aV8":function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"anime",rawName:"v-anime",value:{rotate:"1turn",backgroundColor:"#000",duration:2e3,loop:!1},expression:"{ rotate: '1turn', backgroundColor: '#000', duration: 2000, loop: false }"}]},[e("svg",{attrs:{width:"128",height:"128",viewBox:"0 0 128 128"}},[e("polygon",{attrs:{points:"64 68.73508918222262 8.574 99.9935923731656 63.35810017508558 67.62284396863708 64 3.993592373165592 64.64189982491442 67.62284396863708 119.426 99.9935923731656",fill:"navy"}})])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},Cbun:function(t,e,n){var i=n("aAz8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("50361570",i,!1,{sourceMap:!1})},H57L:function(t,e,n){var i=n("eX6w");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("0e4ea3c6",i,!1,{sourceMap:!1})},HV3p:function(t,e,n){"use strict";e.a={data:function(){return{product:[{link:"/game",name:"Game"},{link:"/other",name:"Other"}],sns:[{link:"https://gamelinks007.net/@S_H_",name:"Mastodon"},{link:"https://github.com/S-H-GAMELINKS",name:"GitHub"},{link:"https://twitter.com/GAME_LINKS_",name:"Twitter"},{link:"https://qiita.com/S_H_",name:"Qiita"},{link:"https://speakerdeck.com/gamelinks007",name:"SpeckerDeck"}],work:[{link:"https://www.lancers.jp/profile/S_H_",name:"Lancers"},{link:"https://crowdworks.jp/public/employees/1497011",name:"CrowdWorks"},{link:"https://coconala.com/users/410038",name:"Coconala"},{link:"https://skima.jp/u/id33529/",name:"Skima"}]}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},KrYO:function(t,e,n){"use strict";var i=n("0MJc"),a=n("n4Vl");e.a={components:{NavMenu:a.a,AppLogo:i.a}}},UJG8:function(t,e,n){"use strict";e.a={name:"my-component",data:function(){return{}},mounted:function(){this.$anime({targets:"polygon",points:"64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"})}}},aAz8:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},eX6w:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"a{color:#fff}",""])},iA8U:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"side-menu"},[e("nav-menu")],1),e("section",{staticClass:"container"},[e("div",[e("app-logo"),e("h1",{staticClass:"title"},[this._v("\r\n        S.H.\r\n      ")]),e("h2",{staticClass:"subtitle"},[this._v("\r\n        GAMELINKS\r\n      ")])],1)])])};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},n4Vl:function(t,e,n){"use strict";var i=n("HV3p"),a=n("4lJ3"),s=!1;var o=function(t){s||n("H57L")},r=n("VU/8")(i.a,a.a,!1,o,null,null);r.options.__file="components\\NavMenu.vue",e.a=r.exports}});