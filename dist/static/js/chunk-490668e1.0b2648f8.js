(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-490668e1"],{3238:function(t,e,s){"use strict";var n=s("cc4e"),a=s.n(n);a.a},"3dfb":function(t){t.exports={"china-phone":"+86 2 33 44 55 66","us-phone":"+11 222 333 444",email:"support@shark.com"}},"5ebe":function(t,e,s){},7159:function(t,e,s){t.exports=s.p+"static/img/img.146655c9.jpg"},"7ed4":function(t,e,s){"use strict";var n=s("2b0e"),a=new n["default"];e["a"]=a},"95db":function(t,e,s){"use strict";var n=s("fb1d"),a=s.n(n);a.a},bfe9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("router-view")],1)],1)],1)],1),s("v-footer")],1)},a=[],i=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),s("div",{staticClass:"logo"},[t._v("后台管理系统")]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1),t.message?s("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("router-link",{attrs:{to:"/user"}},[s("el-dropdown-item",[t._v("个人中心")])],1),s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])}),l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:s("7159")}})])}],o=s("7ed4"),c={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("ms_username");return t||this.name}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,o["a"].$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},r=c,u=(s("ef42"),s("2877")),d=Object(u["a"])(r,i,l,!1,null,"c40766e0",null),m=d.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer theme-color"},[s("el-row",[s("el-col",{attrs:{span:15}},[s("p",{staticStyle:{"margin-left":"100px"}},[t._v("Copyright 2016 All rights reserved.")])]),s("el-col",{attrs:{span:9}},[s("p",[s("span",[t._v("China: "+t._s(t.config["china-phone"]))]),s("span",{staticClass:"botton-margin"},[t._v("US: "+t._s(t.config["us-phone"]))]),s("span",{staticClass:"botton-margin"},[t._v(t._s(t.config["email"]))])])])],1)],1)},f=[],p=s("3dfb"),g={data:function(){return{config:{}}},computed:{},methods:{},mounted:function(){this.config=p}},v=g,b=(s("3238"),Object(u["a"])(v,h,f,!1,null,"8bace14c",null)),_=b.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v(t._s(e.title))])})],2):s("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]})],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},x=[],w=(s("a481"),{data:function(){return{collapse:!1,items:[{index:"user",title:"主账号信息"},{index:"subUser",title:"子账号信息"},{index:"userManage",title:"用户管理"},{index:"fileManage",title:"课件管理"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;o["a"].$on("collapse",function(e){t.collapse=e})}}),k=w,$=(s("95db"),Object(u["a"])(k,C,x,!1,null,"9893d5a4",null)),L=$.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)}),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},S=[],y={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){var e=this.tagsList.some(function(e){return e.path===t.fullPath});e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),o["a"].$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),o["a"].$on("close_current_tags",function(){for(var e=0,s=t.tagsList.length;e<s;e++){var n=t.tagsList[e];if(n.path===t.$route.fullPath){e<s-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}})}},T=y,q=(s("c5f3"),Object(u["a"])(T,F,S,!1,null,null,null)),E=q.exports,R={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:m,vSidebar:L,vTags:E,vFooter:_},created:function(){var t=this;o["a"].$on("collapse",function(e){t.collapse=e}),o["a"].$on("tags",function(e){for(var s=[],n=0,a=e.length;n<a;n++)e[n].name&&s.push(e[n].name);t.tagsList=s})}},O=R,j=Object(u["a"])(O,n,a,!1,null,null,null);e["default"]=j.exports},c5f3:function(t,e,s){"use strict";var n=s("5ebe"),a=s.n(n);a.a},cc4e:function(t,e,s){},e6ba:function(t,e,s){},ef42:function(t,e,s){"use strict";var n=s("e6ba"),a=s.n(n);a.a},fb1d:function(t,e,s){}}]);