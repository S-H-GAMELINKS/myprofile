webpackJsonp([0],{"1o1t":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},"227a":function(t,e,n){"use strict";e.a={data:function(){return{product:[{link:"/game",name:"Game"},{link:"/other",name:"Other"}],sns:[{link:"https://gamelinks007.net/@S_H_",name:"Mastodon"},{link:"https://github.com/S-H-GAMELINKS",name:"GitHub"},{link:"https://twitter.com/GAME_LINKS_",name:"Twitter"},{link:"https://qiita.com/S_H_",name:"Qiita"},{link:"https://speakerdeck.com/gamelinks007",name:"SpeckerDeck"}],work:[{link:"https://www.lancers.jp/profile/S_H_",name:"Lancers"},{link:"https://crowdworks.jp/public/employees/1497011",name:"CrowdWorks"},{link:"https://coconala.com/users/410038",name:"Coconala"},{link:"https://skima.jp/u/id33529/",name:"Skima"}]}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},"4lJ3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:4}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",[t._v("Menu")])]),n("el-menu-item",{attrs:{index:"1-1"}},[n("nuxt-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1),n("el-submenu",{attrs:{index:"1-2"}},[n("template",{slot:"title"},[t._v("Products")]),t._l(t.product,function(e,a,i){return n("div",{key:i},[n("el-menu-item",{attrs:{index:-1-i}},[n("nuxt-link",{attrs:{to:e.link}},[t._v(t._s(e.name))])],1)],1)})],2),n("el-submenu",{attrs:{index:"1-3"}},[n("template",{slot:"title"},[t._v("SNS")]),t._l(t.sns,function(e,a,i){return n("div",{key:i},[n("el-menu-item",{attrs:{index:-2-i}},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])],1)})],2),n("el-submenu",{attrs:{index:"1-4"}},[n("template",{slot:"title"},[t._v("Work")]),t._l(t.work,function(e,a,i){return n("div",{key:i},[n("el-menu-item",{attrs:{index:-3-i}},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])],1)})],2)],2)],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},"6Sjw":function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"side-menu"},[e("nav-menu")],1),e("section",{staticClass:"container"},[e("div",[e("slider",{attrs:{slides:this.slides}}),e("h1",{staticClass:"title"},[this._v("\r\n        Other\r\n      ")]),e("h2",{staticClass:"subtitle"},[this._v("\r\n        これまでに制作してきたプロダクト\r\n      ")])],1)])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},"77BC":function(t,e,n){"use strict";e.a={data:function(){return{slides:this.$parent.slides,log:console.log(this.$parent.slides)}}}},"7avc":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"a{color:#fff}",""])},"89hq":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".el-carousel__item h3{color:#475669;font-size:14px;opacity:.75;line-height:200px;margin:0}.el-carousel__item:nth-child(2n){background-color:#99a9bf}.el-carousel__item:nth-child(odd){background-color:#d3dce6}",""])},LDKh:function(t,e,n){var a=n("7avc");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("25e74666",a,!1,{sourceMap:!1})},agJ8:function(t,e,n){var a=n("1o1t");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("08ea973a",a,!1,{sourceMap:!1})},hZIQ:function(t,e,n){var a=n("89hq");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("147c894e",a,!1,{sourceMap:!1})},"l/wD":function(t,e,n){"use strict";var a=n("77BC"),i=n("pB9o"),s=!1;var o=function(t){s||n("hZIQ")},l=n("VU/8")(a.a,i.a,!1,o,null,null);l.options.__file="components\\Slider.vue",e.a=l.exports},n4Vl:function(t,e,n){"use strict";var a=n("227a"),i=n("4lJ3"),s=!1;var o=function(t){s||n("LDKh")},l=n("VU/8")(a.a,i.a,!1,o,null,null);l.options.__file="components\\NavMenu.vue",e.a=l.exports},nbFT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("uKTd"),i=n("6Sjw"),s=!1;var o=function(t){s||n("agJ8")},l=n("VU/8")(a.a,i.a,!1,o,null,null);l.options.__file="pages\\other.vue",e.default=l.exports},pB9o:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-carousel",{attrs:{interval:4e3,type:"card",width:"600"}},t._l(t.slides,function(e,a,i){return n("el-carousel-item",{key:i},[n("img",{attrs:{src:e.path,width:"300",height:"200"}}),t._v("\n    "+t._s(e.content)+"\n  ")])}))};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},uKTd:function(t,e,n){"use strict";var a=n("n4Vl"),i=n("l/wD");e.a={data:function(){return{slides:[{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""},{path:"",content:""}]}},components:{NavMenu:a.a,Slider:i.a}}}});