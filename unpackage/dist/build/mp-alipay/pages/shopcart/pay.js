(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/shopcart/pay"],{"183e":function(t,a,e){"use strict";(function(t){e("1995");n(e("66fd"));var a=n(e("6de8"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("c11b")["createPage"])},"218a":function(t,a,e){"use strict";var n={"uni-nav-bar":function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"f858"))}},i=function(){var t=this,a=t.$createElement;t._self._c},u=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return n}))},"2ac7":function(t,a,e){"use strict";e.r(a);var n=e("3018"),i=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);a["default"]=i.a},3018:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(e("4b89")),i=u(e("d07b"));function u(t){return t&&t.__esModule?t:{default:t}}var o=console,r=o.log,c=getApp().globalData,s=c.appid,d=c.appsecret,f=(c.imgRemote,c.navBar),l={data:function(){return{navBar:f,id:"",is_miniBind:t.getStorageSync("is_miniBind"),list:[],isDisable:!0,count:0}},methods:{leftClick:function(){t.navigateBack({delta:1})},cancelPay:function(){t.switchTab({url:"/pages/tabar/shopcart"})},bindWechat:function(){var a=this;this.count++,1==this.count&&(setTimeout((function(){a.count=0}),1e3),i.default.Toast("该账号未绑定微信，请先绑定再来支付"),setTimeout((function(){t.switchTab({url:"/pages/tabar/user"})}),1e3))},payOrder:function(){console.log(132);var a=this.id,e=Math.round((new Date).getTime()/1e3),u={appid:s,timeStamp:e,oid:a,type:"mini"},o=n.default.hexMD5(i.default.objKeySort(u)+d),c=Object.assign({sign:o,pay:"alipay"},u);i.default.postRequests("payTemOrder",c,(function(a){var e=a.data;if(200==e.code){if(1==e.data.payType&&(i.default.Toast("支付成功"),setTimeout((function(){t.switchTab({url:"/pages/tabar/order"})}),1e3)),r(a.data.data.wxParams),2==a.data.data.payType){var n=a.data.data.alipayParams;t.requestPayment({provider:"alipay",orderInfo:n.trade_no,success:function(a){9e3==a.resultCode&&(i.default.Toast("充值成功"),setTimeout((function(){t.switchTab({url:"/pages/tabar/order"})}),1e3))},fail:function(t){console.log(t),i.default.Toast("充值失败")}})}}else i.default.Toast(e.msg)}))},temOrder:function(){var t=this,a=Math.round((new Date).getTime()/1e3),e={appid:s,timeStamp:a,id:this.id},u=n.default.hexMD5(i.default.objKeySort(e)+d),o=Object.assign({sign:u},e);i.default.getRequests("temOrderMsg",o,(function(a){var e=a.data;200==e.code?t.list=e.data:i.default.Toast(e.msg)}))}},onShow:function(){this.temOrder()},onLoad:function(t){this.id=t.id}};a.default=l}).call(this,e("c11b")["default"])},"6de8":function(t,a,e){"use strict";e.r(a);var n=e("218a"),i=e("2ac7");for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);e("c3e0");var o,r=e("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);a["default"]=c.exports},c3e0:function(t,a,e){"use strict";var n=e("d268"),i=e.n(n);i.a},d268:function(t,a,e){}},[["183e","common/runtime","common/vendor"]]]);