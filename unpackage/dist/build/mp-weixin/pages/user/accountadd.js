(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/accountadd"],{"4b8d":function(t,e,n){"use strict";n.r(e);var a=n("ecdc"),o=n("fecd");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("e359");var u,d=n("f0c5"),c=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},"550a":function(t,e,n){"use strict";(function(t){n("c976"),n("921b");a(n("66fd"));var e=a(n("4b8d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6a2b":function(t,e,n){},e359:function(t,e,n){"use strict";var a=n("6a2b"),o=n.n(a);o.a},ecdc:function(t,e,n){"use strict";var a={uniNavBar:function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"8e61"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"abf0"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},ef31:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ef9c")),o=i(n("d351"));function i(t){return t&&t.__esModule?t:{default:t}}var u=console,d=(u.log,getApp().globalData),c=d.appid,s=d.appsecret,r=(d.imgRemote,d.navBar),l={data:function(){return{navBar:r,nickname:"",contact:"",mobile:"",password:"",address:"",details:"",longitude:"",latitude:"",hide:!0}},methods:{leftClick:function(){this.hide=!0,t.navigateTo({url:"accountmange"})},mapPage:function(){var e=this;t.chooseLocation({success:function(t){e.address=t.address;var n=e.tobdMap(t.longitude,t.latitude);e.lng=n.lng,e.lat=n.lat},fail:function(t){console.log(t)}})},tobdMap:function(t,e){var n=52.35987755982988,a=t,o=e,i=Math.sqrt(a*a+o*o)+2e-5*Math.sin(o*n),u=Math.atan2(o,a)+3e-6*Math.cos(a*n),d=i*Math.cos(u)+.0065,c=i*Math.sin(u)+.006;return{lng:d,lat:c}},formSubmit:function(){var e=this,n=e.nickname,i=e.contact,u=e.mobile,d=e.password,r=e.address,l=e.longitude,f=e.latitude,m=e.details,p=Math.round((new Date).getTime()/1e3),h={address:r,appid:c,contact:i,mobile:u,nickname:n,password:d,timeStamp:p},g=a.default.hexMD5(o.default.objKeySort(h)+s);if(""==n)return o.default.Toast("名称不能为空"),!1;if(""==i)return o.default.Toast("联系人不能为空"),!1;if(""==u)return o.default.Toast("手机号不能为空"),!1;if(d.length<6)return o.default.Toast("密码不能小于六位数"),!1;var b={address:r,appid:c,contact:i,mobile:u,nickname:n,password:d,timeStamp:p,sign:g,longitude:l,latitude:f,details:m};o.default.postRequests("addChild",b,(function(e){200==e.data.code?(o.default.Toast("添加成功"),setTimeout((function(){t.navigateTo({url:"accountmange"})}),1e3)):o.default.Toast(e.data.msg)}))}},onLoad:function(e){var n=t.getStorageSync("append");console.log(t.getStorageSync("append")),n&&(this.nickname=n.childInfo,this.contact=n.contact,this.mobile=n.mobile,this.password=n.password,this.address=n.address,this.details=n.details),this.latitude=e.lat,this.longitude=e.lng},onHide:function(){1==this.hide&&t.removeStorage({key:"append"})}};e.default=l}).call(this,n("543d")["default"])},fecd:function(t,e,n){"use strict";n.r(e);var a=n("ef31"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a}},[["550a","common/runtime","common/vendor"]]]);