(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-account-login"],{"01c8":function(t,e,n){"use strict";n.r(e);var i=n("36c3"),a=n("811b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("da3a");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"629040f7",null,!1,i["a"],r);e["default"]=s.exports},"0769":function(t,e,n){"use strict";n.r(e);var i=n("54e5"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"081d":function(t,e,n){var i=n("9f65");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("54b6ce83",i,!0,{sourceMap:!1,shadowMode:!1})},"0c1f":function(t,e,n){"use strict";var i={"uni-nav-bar":n("01c8").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"login"},[i("v-uni-view",[i("uni-nav-bar",{attrs:{"left-icon":"arrowleft","status-bar":t.navBar,fixed:"true"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"logo_width"},[i("v-uni-image",{staticClass:"login_logo",attrs:{src:t.logo,mode:"aspectFit"}})],1)],1),i("v-uni-view",{staticClass:"login_method"},[i("v-uni-view",{staticClass:"mobilelogin"},[i("v-uni-view",{staticClass:"phone align_center"},[i("v-uni-text",{staticClass:"iconfont icon-yonghu"}),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号码","placeholder-class":"place_style"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),i("v-uni-view",{staticClass:"password align_center"},[i("v-uni-text",{staticClass:"iconfont icon-mima"}),i("v-uni-input",{attrs:{password:!0,placeholder:"请输入密码","placeholder-class":"place_style"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"determine_mobile",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.mobileLogin.apply(void 0,arguments)}}},[t._v("登录")]),i("v-uni-view",{staticClass:"flex_left_right"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pageUrl("register")}}},[t._v("立即注册")]),i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pageUrl("forget")}}},[t._v("忘记密码")])],1)],1),t.display?i("v-uni-view",{staticClass:"wechat_login"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"divider gray_font"},[t._v("其他登录")]),i("v-uni-view",{staticClass:"weixin_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"weixin_img",attrs:{src:n("256b"),mode:""}}),i("v-uni-text",[t._v("微信登录")])],1),i("v-uni-view",{staticClass:"read_treaty",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pageUrl("treaty")}}},[t._v("已阅读并同意"),i("v-uni-text",[t._v("注册协议")])],1)],1)],1):t._e()],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"111d":function(t,e,n){"use strict";var i=n("9814"),a=n.n(i);a.a},"256b":function(t,e,n){t.exports=n.p+"static/img/wechat.c57d693c.png"},"36c3":function(t,e,n){"use strict";var i={"uni-status-bar":n("96c1").default,"uni-icons":n("4aa4").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[n("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},3782:function(t,e,n){n("d3b7"),n("ac1f"),n("25f0"),n("5319");var i=function(t,e){return t<<e|t>>>32-e},a=function(t,e){var n,i,a,o,r;return a=2147483648&t,o=2147483648&e,n=1073741824&t,i=1073741824&e,r=(1073741823&t)+(1073741823&e),n&i?2147483648^r^a^o:n|i?1073741824&r?3221225472^r^a^o:1073741824^r^a^o:r^a^o},o=function(t,e,n){return t&e|~t&n},r=function(t,e,n){return t&n|e&~n},c=function(t,e,n){return t^e^n},s=function(t,e,n){return e^(t|~n)},u=function(t,e,n,r,c,s,u){return t=a(t,a(a(o(e,n,r),c),u)),a(i(t,s),e)},l=function(t,e,n,o,c,s,u){return t=a(t,a(a(r(e,n,o),c),u)),a(i(t,s),e)},d=function(t,e,n,o,r,s,u){return t=a(t,a(a(c(e,n,o),r),u)),a(i(t,s),e)},f=function(t,e,n,o,r,c,u){return t=a(t,a(a(s(e,n,o),r),u)),a(i(t,c),e)},v=function(t){var e,n=t.length,i=n+8,a=(i-i%64)/64,o=16*(a+1),r=Array(o-1),c=0,s=0;while(s<n)e=(s-s%4)/4,c=s%4*8,r[e]=r[e]|t.charCodeAt(s)<<c,s++;return e=(s-s%4)/4,c=s%4*8,r[e]=r[e]|128<<c,r[o-2]=n<<3,r[o-1]=n>>>29,r},b=function(t){var e,n,i="",a="";for(n=0;n<=3;n++)e=t>>>8*n&255,a="0"+e.toString(16),i+=a.substr(a.length-2,2);return i},g=function(t){t=t.replace(/\x0d\x0a/g,"\n");for(var e="",n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e+=String.fromCharCode(i):i>127&&i<2048?(e+=String.fromCharCode(i>>6|192),e+=String.fromCharCode(63&i|128)):(e+=String.fromCharCode(i>>12|224),e+=String.fromCharCode(i>>6&63|128),e+=String.fromCharCode(63&i|128))}return e};function p(t){var e,n,i,o,r,c,s,p,h,w=Array(),x=7,_=12,y=17,m=22,k=5,S=9,C=14,j=20,T=4,z=11,A=16,M=23,O=6,B=10,E=15,L=21;for(t=g(t),w=v(t),c=1732584193,s=4023233417,p=2562383102,h=271733878,e=0;e<w.length;e+=16)n=c,i=s,o=p,r=h,c=u(c,s,p,h,w[e+0],x,3614090360),h=u(h,c,s,p,w[e+1],_,3905402710),p=u(p,h,c,s,w[e+2],y,606105819),s=u(s,p,h,c,w[e+3],m,3250441966),c=u(c,s,p,h,w[e+4],x,4118548399),h=u(h,c,s,p,w[e+5],_,1200080426),p=u(p,h,c,s,w[e+6],y,2821735955),s=u(s,p,h,c,w[e+7],m,4249261313),c=u(c,s,p,h,w[e+8],x,1770035416),h=u(h,c,s,p,w[e+9],_,2336552879),p=u(p,h,c,s,w[e+10],y,4294925233),s=u(s,p,h,c,w[e+11],m,2304563134),c=u(c,s,p,h,w[e+12],x,1804603682),h=u(h,c,s,p,w[e+13],_,4254626195),p=u(p,h,c,s,w[e+14],y,2792965006),s=u(s,p,h,c,w[e+15],m,1236535329),c=l(c,s,p,h,w[e+1],k,4129170786),h=l(h,c,s,p,w[e+6],S,3225465664),p=l(p,h,c,s,w[e+11],C,643717713),s=l(s,p,h,c,w[e+0],j,3921069994),c=l(c,s,p,h,w[e+5],k,3593408605),h=l(h,c,s,p,w[e+10],S,38016083),p=l(p,h,c,s,w[e+15],C,3634488961),s=l(s,p,h,c,w[e+4],j,3889429448),c=l(c,s,p,h,w[e+9],k,568446438),h=l(h,c,s,p,w[e+14],S,3275163606),p=l(p,h,c,s,w[e+3],C,4107603335),s=l(s,p,h,c,w[e+8],j,1163531501),c=l(c,s,p,h,w[e+13],k,2850285829),h=l(h,c,s,p,w[e+2],S,4243563512),p=l(p,h,c,s,w[e+7],C,1735328473),s=l(s,p,h,c,w[e+12],j,2368359562),c=d(c,s,p,h,w[e+5],T,4294588738),h=d(h,c,s,p,w[e+8],z,2272392833),p=d(p,h,c,s,w[e+11],A,1839030562),s=d(s,p,h,c,w[e+14],M,4259657740),c=d(c,s,p,h,w[e+1],T,2763975236),h=d(h,c,s,p,w[e+4],z,1272893353),p=d(p,h,c,s,w[e+7],A,4139469664),s=d(s,p,h,c,w[e+10],M,3200236656),c=d(c,s,p,h,w[e+13],T,681279174),h=d(h,c,s,p,w[e+0],z,3936430074),p=d(p,h,c,s,w[e+3],A,3572445317),s=d(s,p,h,c,w[e+6],M,76029189),c=d(c,s,p,h,w[e+9],T,3654602809),h=d(h,c,s,p,w[e+12],z,3873151461),p=d(p,h,c,s,w[e+15],A,530742520),s=d(s,p,h,c,w[e+2],M,3299628645),c=f(c,s,p,h,w[e+0],O,4096336452),h=f(h,c,s,p,w[e+7],B,1126891415),p=f(p,h,c,s,w[e+14],E,2878612391),s=f(s,p,h,c,w[e+5],L,4237533241),c=f(c,s,p,h,w[e+12],O,1700485571),h=f(h,c,s,p,w[e+3],B,2399980690),p=f(p,h,c,s,w[e+10],E,4293915773),s=f(s,p,h,c,w[e+1],L,2240044497),c=f(c,s,p,h,w[e+8],O,1873313359),h=f(h,c,s,p,w[e+15],B,4264355552),p=f(p,h,c,s,w[e+6],E,2734768916),s=f(s,p,h,c,w[e+13],L,1309151649),c=f(c,s,p,h,w[e+4],O,4149444226),h=f(h,c,s,p,w[e+11],B,3174756917),p=f(p,h,c,s,w[e+2],E,718787259),s=f(s,p,h,c,w[e+9],L,3951481745),c=a(c,n),s=a(s,i),p=a(p,o),h=a(h,r);var I=b(c)+b(s)+b(p)+b(h);return I.toLowerCase()}t.exports={hexMD5:p}},"42c2":function(t,e,n){"use strict";n.r(e);var i=n("0c1f"),a=n("d269");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("111d");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"6f2873ff",null,!1,i["a"],r);e["default"]=s.exports},"54e5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};e.default=a},"77cc":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"79fd":function(t,e,n){"use strict";var i=n("d732"),a=n.n(i);a.a},"7e83":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-status-bar[data-v-e60af736]{width:%?750?%;height:20px}',""]),t.exports=e},"811b":function(t,e,n){"use strict";n.r(e);var i=n("8d28"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"8d28":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("96c1")),o=i(n("4aa4")),r={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcons:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!1},border:{type:[String,Boolean],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=r},"96c1":function(t,e,n){"use strict";n.r(e);var i=n("77cc"),a=n("0769");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("79fd");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e60af736",null,!1,i["a"],r);e["default"]=s.exports},9814:function(t,e,n){var i=n("9b4a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("04a697cc",i,!0,{sourceMap:!1,shadowMode:!1})},"9b4a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'uni-page-body[data-v-6f2873ff]{background:#fff}\n\n/* .login{position: fixed;width:100%;height:100%;} */.logo_width[data-v-6f2873ff]{text-align:center;margin:%?60?% 0 %?80?%}.login .login_logo[data-v-6f2873ff]{width:100%;height:%?92?%}.login .login_method[data-v-6f2873ff]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.login .phone[data-v-6f2873ff],\n.login .password[data-v-6f2873ff]{display:-webkit-box;display:-webkit-flex;display:flex}.login .mobilelogin[data-v-6f2873ff]{width:%?580?%;height:%?600?%;margin:0 auto}.login .determine_mobile[data-v-6f2873ff]{background:#009a44;height:%?80?%;color:#fff;border-radius:%?12?%;line-height:%?80?%;text-align:center;font-size:%?32?%;margin:%?60?% 0 %?20?%}.login .phone[data-v-6f2873ff],\n.login .password[data-v-6f2873ff]{border-bottom:1px solid #c2c2c2;margin-top:%?50?%}.login .phone .iconfont[data-v-6f2873ff],\n.login .password .iconfont[data-v-6f2873ff]{color:#46c68a;margin-right:%?5?%}.login .password .iconfont[data-v-6f2873ff]{margin-top:%?2?%;font-size:%?35?%}.wechat_login[data-v-6f2873ff]{position:fixed!important;z-index:0;bottom:%?20?%;width:100%;text-align:center;font-size:%?24?%}.wechat_login .divider[data-v-6f2873ff]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?20?%}.wechat_login .divider[data-v-6f2873ff]:before{content:"";display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;height:1px;border-color:#eaeaea;border-style:solid;border-width:1px 0 0;margin-right:%?20?%}.wechat_login .divider[data-v-6f2873ff]:after{margin-left:%?20?%;content:"";display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;height:1px;border-color:#eaeaea;border-style:solid;border-width:1px 0 0}.wechat_login .weixin_img[data-v-6f2873ff]{width:%?90?%;height:%?90?%;margin-bottom:%?5?%}.login .weixin_button[data-v-6f2873ff]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:%?41?% 0 %?89?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wechat_login .read_treaty[data-v-6f2873ff]{font-size:%?20?%}.wechat_login .read_treaty uni-text[data-v-6f2873ff]{color:#1ea55a}.login .place_style[data-v-6f2873ff]{font-size:%?28?%;color:#c2c2c2}.login uni-button[data-v-6f2873ff]{background:none;line-height:normal}.login uni-button[data-v-6f2873ff]::after{border:none}body.?%PAGE?%[data-v-6f2873ff]{background:#fff}',""]),t.exports=e},"9d63":function(t,e,n){"use strict";(function(t){var i=n("ee27");n("c975"),n("baa5"),n("ac1f"),n("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3782")),o=i(n("fe41")),r=getApp().globalData,c=r.navBar,s=r.appid,u=r.appsecret,l=(r.isWeixin,{data:function(){return{display:!0,navBar:c,logo:"",mobile:"",password:""}},methods:{clickLeft:function(){uni.switchTab({url:"/pages/tabar/index"})},pageUrl:function(t){uni.navigateTo({url:t})},mobileLogin:function(){var e=this.mobile,n=this.password,i=Math.round((new Date).getTime()/1e3);if(e)if(n)if(n.length<6)o.default.Toast("密码不能少于六位");else{var r={mobile:e,password:n,appid:s,timeStamp:i},c=a.default.hexMD5(o.default.objKeySort(r)+u),l=Object.assign({sign:c},r);o.default.postRequests("login",l,(function(e){var n=e.data;200==n.code?(o.default.Toast("登录成功，将跳转到首页"),uni.setStorageSync("cdj_token",n.data.token),uni.setStorageSync("is_child",n.data.is_child),t.log(n),uni.setStorageSync("is_miniBind",n.data.is_bind),uni.switchTab({url:"/pages/tabar/index"})):o.default.Toast(n.msg)}))}else o.default.Toast("密码不能为空，请输入密码");else o.default.Toast("手机号码不能为空，请输入手机号")},wechatLogin:function(){var t=Math.round((new Date).getTime()/1e3),e={appid:s,timeStamp:t},n=a.default.hexMD5(o.default.objKeySort(e)+u),i=Object.assign({sign:n},e);o.default.getRequests("wxConfig",i,(function(t){var e=t.data;if(200==e.code){uni.setStorageSync("isWeixin",!0);var n=r.rootUrl+"/#/pages/account/login",i=encodeURIComponent(n),a="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e.data.appId+"&redirect_uri="+i+"&response_type=code&scope=snsapi_userinfo#wechat_redirect";window.location.href=a}else 500==e.code?o.default.Toast("微信服务器出错"):o.default.Toast(e.msg)}))}},onShow:function(){var t=this,e=Math.round((new Date).getTime()/1e3),n={appid:s,timeStamp:e},i=a.default.hexMD5(o.default.objKeySort(n)+u),c=Object.assign({sign:i},n);o.default.getRequests("indexAd",c,(function(e){var n=e.data;200==n.code&&(t.logo=n.data.logo)}));var l=location.search,d=l.substring(l.indexOf("=")+1,l.lastIndexOf("&")),f=uni.getStorageSync("isWeixin");if(f&&d){var v={appid:s,timeStamp:e,code:d},b=a.default.hexMD5(o.default.objKeySort(v)+u),g=Object.assign({sign:b},v);o.default.postRequests("wxLogin",g,(function(t){var e=t.data;uni.clearStorageSync("isWeixin"),200==e.code?(uni.setStorageSync("cdj_token",e.data.token),uni.setStorageSync("is_miniBind",e.data.is_bind),uni.setStorageSync("is_child",e.data.is_child),window.location.href=r.rootUrl):201==e.code?wx.navigateTo({url:"selectway?identifying="+e.data.identifying}):(o.default.Toast(e.msg),setTimeout((function(){window.location.href=r.rootUrl+"/#/pages/account/login"}),1e3))}))}},onReady:function(){var t=this;window.onresize=function(){t.display=!t.display}},onHide:function(){}});e.default=l}).call(this,n("5a52")["default"])},"9f65":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-nav-bar-text[data-v-629040f7]{font-size:%?32?%}.uni-nav-bar-right-text[data-v-629040f7]{font-size:%?28?%}.uni-navbar[data-v-629040f7]{width:%?750?%}.uni-navbar__content[data-v-629040f7]{position:relative;width:%?750?%;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-629040f7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navbar__header[data-v-629040f7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-629040f7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-629040f7]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-629040f7]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;padding-right:%?20?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-629040f7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-629040f7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-629040f7]{height:44px}.uni-navbar--fixed[data-v-629040f7]{position:fixed;z-index:2}.uni-navbar--shadow[data-v-629040f7]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-629040f7]{border-bottom-width:%?1?%;border-bottom-color:#c8c7cc}',""]),t.exports=e},baa5:function(t,e,n){var i=n("23e7"),a=n("e58c");i({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},d269:function(t,e,n){"use strict";n.r(e);var i=n("9d63"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d732:function(t,e,n){var i=n("7e83");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("088513c4",i,!0,{sourceMap:!1,shadowMode:!1})},da3a:function(t,e,n){"use strict";var i=n("081d"),a=n.n(i);a.a},fe41:function(t,e,n){n("4160"),n("4e82"),n("b64b"),n("d3b7"),n("25f0"),n("159b");var i=getApp(),a={active:i.globalData.active},o=i.globalData.rootUrl+"/mobileOrder/";if(uni.getStorageSync("cdj_token"))var r={Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")};function c(t,e,n){uni.showLoading({title:"加载中...",duration:2e3,mask:!0,success:function(i){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,a),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:2e3,success:function(){}}),401==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/account/login"})}),2e3),404==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/account/404"})}),2e3),uni.hideLoading()},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function s(t,e,n){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,a),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/account/login"})}),2e3),404==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/account/404"})}),2e3),408==t.data.code&&uni.navigateTo({url:"/pages/account/service"})},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})}function u(t,e,n){uni.showLoading({title:"加载中",mask:!0,success:function(i){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,a),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:2e3,success:function(){}}),401==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/account/login"})}),2e3),403==t.data.code&&uni.showToast({title:"账号已禁用",icon:"none",duration:2e3,success:function(){uni.navigateTo({url:"/pages/account/login"})}}),404==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/account/404"})}),2e3),408==t.data.code&&uni.showToast({title:"抱歉，您的服务已到期，请联系《菜东家》工作人员续费！",icon:"none",duration:2e3}),uni.hideLoading()},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function l(t,e,n){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,a),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&setTimeout((function(){uni.navigateTo({url:"/pages/account/login"})}),2e3)},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})}function d(t){for(var e=Object.keys(t).sort(),n={},i="",a=0;a<e.length;a++)n[e[a]]=t[e[a]];return Object.keys(n).forEach((function(t){i+="&"+t+"="+n[t]})),i.substr(1)}function f(t){uni.showToast({title:t,icon:"none",duration:1e3})}function v(){var t=new Date,e=t.getFullYear().toString(),n=(t.getMonth()+1).toString(),i="";i=n<10?"0"+n:n;var a=t.getDate().toString(),o=e+"-"+i+"-01",r=e+"-"+i+"-"+a,c=[o,r];return c}function b(t){return new Promise((function(e,n){window.init=function(){e(BMap)};var i=document.createElement("script");i.type="text/javascript",i.src="http://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",i.onerror=n,document.head.appendChild(i)}))}t.exports={getRequest:c,getRequests:s,postRequest:u,postRequests:l,Toast:f,header:r,objKeySort:d,thedefaulttime:v,MP:b}}}]);