(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order/orderdetail"],{2225:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("4b89")),r=o(n("d07b"));function o(t){return t&&t.__esModule?t:{default:t}}var u=getApp().globalData,i=u.appid,d=u.appsecret,c=(u.imgRemote,u.navBar),f={data:function(){return{navBar:c,id:"",orderDetail:"",detail:""}},methods:{phone:function(){var e=this;console.log(e.orderDetail),t.makePhoneCall({phoneNumber:e.orderDetail.tel})},LeftClick:function(){t.navigateBack({delta:1})},orderInfo:function(){var t=this,e=t.id,n=Math.round((new Date).getTime()/1e3),o={appid:i,id:e,timeStamp:n},u=a.default.hexMD5(r.default.objKeySort(o)+d),c={appid:i,timeStamp:n,sign:u,id:e};r.default.getRequests("orderInfo",c,(function(e){200==e.data.code?(t.orderDetail=e.data.data,t.detail=e.data.data.orderInfo):r.default.Toast(e.data.msg)}))}},onLoad:function(t){this.id=t.orderItem},onShow:function(){u.aData.show=!0;var t=this;t.orderInfo()}};e.default=f}).call(this,n("c11b")["default"])},3947:function(t,e,n){"use strict";n.r(e);var a=n("6036"),r=n("cd12");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("ce9b");var u,i=n("f0c5"),d=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=d.exports},"578f":function(t,e,n){},6036:function(t,e,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"f858"))}},r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"7e99":function(t,e,n){"use strict";(function(t){n("1995");a(n("66fd"));var e=a(n("3947"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},cd12:function(t,e,n){"use strict";n.r(e);var a=n("2225"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=r.a},ce9b:function(t,e,n){"use strict";var a=n("578f"),r=n.n(a);r.a}},[["7e99","common/runtime","common/vendor"]]]);