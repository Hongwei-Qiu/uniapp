(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/userAddress"],{"0b9d":function(t,e,a){"use strict";var n={uniNavBar:function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"8e61"))},uniIcons:function(){return Promise.all([a.e("common/vendor"),a.e("components/uni-icons/uni-icons")]).then(a.bind(null,"abf0"))}},s=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},2391:function(t,e,a){"use strict";var n=a("2e79"),s=a.n(n);s.a},"2e79":function(t,e,a){},5188:function(t,e,a){"use strict";a.r(e);var n=a("7646"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},"73dd0":function(t,e,a){"use strict";a.r(e);var n=a("0b9d"),s=a("5188");for(var i in s)"default"!==i&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("2391");var o,d=a("f0c5"),r=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=r.exports},7646:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("ef9c")),s=i(a("d351"));function i(t){return t&&t.__esModule?t:{default:t}}var o=console,d=(o.log,getApp().globalData),r=d.appid,u=d.appsecret,c=(d.imgRemote,d.navBar),l={data:function(){return{address:"",contact:"",details:"",mobile:"",navBar:c,lat:"",lng:""}},methods:{leftClick:function(){this.hide=!0,t.switchTab({url:"/pages/tabar/user"})},mapPage:function(){var e=this;t.chooseLocation({success:function(t){e.address=t.address;var a=e.tobdMap(t.longitude,t.latitude);e.lng=a.lng,e.lat=a.lat}})},tobdMap:function(t,e){var a=52.35987755982988,n=t,s=e,i=Math.sqrt(n*n+s*s)+2e-5*Math.sin(s*a),o=Math.atan2(s,n)+3e-6*Math.cos(n*a),d=i*Math.cos(o)+.0065,r=i*Math.sin(o)+.006;return{lng:d,lat:r}},memberAddressInfo:function(){var t=this,e=Math.round((new Date).getTime()/1e3),a={appid:r,timeStamp:e},i=n.default.hexMD5(s.default.objKeySort(a)+u),o=Object.assign({sign:i},a);s.default.getRequests("memberAddressInfo",o,(function(e){if(200==e.data.code){var a=e.data.data;t.contact=a.contact,t.mobile=a.phone,t.address=a.address,t.details=a.details}}))},submit:function(){var e=Math.round((new Date).getTime()/1e3),a={appid:r,timeStamp:e,contact:this.contact.replace(/\s+/g,""),mobile:this.mobile.replace(/\s+/g,""),address:this.address.replace(/\s+/g,"")},i=n.default.hexMD5(s.default.objKeySort(a)+u),o=Object.assign({sign:i,details:this.details.replace(/\s+/g,""),latitude:this.lat,longitude:this.lng},a);s.default.postRequests("updateAddress",o,(function(e){200==e.data.code?(s.default.Toast("保存成功"),setTimeout((function(){t.switchTab({url:"/pages/tabar/user"})}),1e3)):s.default.Toast(e.data.msg)}))}},onLoad:function(e){var a=t.getStorageSync("userAddress");a&&(this.contact=a.contact,this.mobile=a.mobile,this.address=a.address,this.details=a.details),this.lat=e.lat,this.lng=e.lng;var n=e.count||1;1==n&&this&&this.memberAddressInfo()},onHide:function(){1==this.hide&&t.removeStorage({key:"userAddress"})}};e.default=l}).call(this,a("543d")["default"])},cfe2:function(t,e,a){"use strict";(function(t){a("c976"),a("921b");n(a("66fd"));var e=n(a("73dd0"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])}},[["cfe2","common/runtime","common/vendor"]]]);