(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/collect"],{"30ee":function(t,e,n){"use strict";var a=n("f062"),o=n.n(a);o.a},5158:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3782")),o=i(n("fe41"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return s(t)||l(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var f=getApp().globalData,p=console,g=(p.log,f.navBar),m=f.imgRemote,h=f.appid,b=f.appsecret,v={data:function(){return{navBar:g,imgRemote:m,config:[],list:[],page:1,num:10,arrObj:{},cartware:[],count:1,bitmap:!0,loading:!0}},methods:{closeCart:function(){this.$refs.addcart.onClose()},closeKey:function(){this.$refs.keyboard.cancel()},leftClick:function(){t.navigateBack({delta:1})},rightClick:function(){this.list.length?t.showModal({content:"确定将收藏商品全部清空吗？",success:function(e){if(e.confirm){var n=Math.round((new Date).getTime()/1e3),i={appid:h,timeStamp:n},r=a.default.hexMD5(o.default.objKeySort(i)+b),u=Object.assign({sign:r},i);o.default.getRequests("deleteCollect",u,(function(e){var n=e.data;200==n.code?(o.default.Toast("成功清空收藏列表"),setTimeout((function(){t.navigateBack({delta:1})}),1e3)):o.default.Toast(e.data.msg)}))}}}):o.default.Toast("没有可以清空的商品")},cancelCollect:function(t,e){var n=this;if(this.count++,2==this.count){var i=Math.round((new Date).getTime()/1e3),r={item_id:t.id,appid:h,timeStamp:i,status:1},u=a.default.hexMD5(o.default.objKeySort(r)+b),c=Object.assign({sign:u},r);o.default.getRequests("changeCollect",c,(function(t){var a=t.data;n.count=1,200==a.code?(n.list.splice(e,1),o.default.Toast("取消收藏")):o.default.Toast(a.msg)}))}},getIndexSelect:function(){var e=this,n=this.page,i=this.num;this.list;if(1==n){var r=Math.round((new Date).getTime()/1e3),u={appid:h,timeStamp:r},c=a.default.hexMD5(o.default.objKeySort(u)+b),l=Object.assign({sign:c,page:n,num:i},u);o.default.getRequests("getIndexSelect",l,(function(t){var n=t.data;200==n.code&&(e.config=n.data,0==n.data.list.length?(e.list=[],e.bitmap=!1):(e.list=n.data.list,n.data.list.length<10?e.loading=!1:e.loading=!0))}))}else this.list=t.getStorageSync("collect")},openCart:function(t){this.cartware=t,this.$refs.cart.open()},onClose:function(){this.$refs.cart.close()},showKey:function(t,e){console.log(45),this.arrObj=t,this.index=e,this.$refs.popup.open()},toParent:function(t){var e=this,n=t.arrObj,i=Math.round((new Date).getTime()/1e3),r={appid:h,timeStamp:i,item_id:n.id,attr_id:0,item_num:t.val},u=a.default.hexMD5(o.default.objKeySort(r)+b),c=Object.assign({sign:u},r);o.default.postRequests("changeNum",c,(function(n){var a=n.data;200==a.code?(o.default.Toast("加入购物车成功"),e.list[e.index].cart_num=t.val):407==a.code||406==a.code?o.default.Toast("购买数量不能超过活动数量"):o.default.Toast(n.data.msg)})),this.$refs.popup.close()}},onHide:function(){t.setStorageSync("collect",this.list)},onShow:function(){1==this.page?this.getIndexSelect():this.list=t.getStorageSync("collect")},onReachBottom:function(){var t=this,e=this.page,n=this.num,i=(this.list,Math.round((new Date).getTime()/1e3)),u={appid:h,timeStamp:i},c=a.default.hexMD5(o.default.objKeySort(u)+b),l=Object.assign({sign:c,page:e+1,num:n},u);o.default.getRequests("getIndexSelect",l,(function(e){var n;200==e.data.code&&(0!=e.data.data.list.length?((n=t.list).push.apply(n,r(e.data.data.list)),t.page+=1,t.loading=!0):t.loading=!1)}))}};e.default=v}).call(this,n("543d")["default"])},afaf:function(t,e,n){"use strict";n.r(e);var a=n("5158"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},dd55:function(t,e,n){"use strict";n.r(e);var a=n("df3e"),o=n("afaf");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("30ee");var r,u=n("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},df3e:function(t,e,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"01c8"))},"my-profile":function(){return n.e("components/profile/index").then(n.bind(null,"5738"))},"my-loading":function(){return n.e("components/loading/index").then(n.bind(null,"068c"))},"uni-popup":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"4939"))},"my-keyboard":function(){return n.e("components/keyboard/index").then(n.bind(null,"2a6a"))},"my-addcart":function(){return n.e("components/addcart/index").then(n.bind(null,"2687"))}},o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){return t.$refs.popup.close()})},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},f062:function(t,e,n){},f36c:function(t,e,n){"use strict";(function(t){n("47a8"),n("921b");a(n("66fd"));var e=a(n("dd55"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f36c","common/runtime","common/vendor"]]]);