(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/recommed"],{"2cd8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ef9c")),o=i(n("d351"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return d(t)||s(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var f=getApp().globalData,p=console,m=(p.log,f.navBar),g=f.imgRemote,h=f.appid,b=f.appsecret,v={data:function(){return{navBar:m,imgRemote:g,config:[],list:[],page:1,num:10,arrObj:[],index:"",cartware:[]}},methods:{leftClick:function(e){t.navigateBack({delta:1})},toParent:function(e){var n=this,i=e.arrObj,r=Math.round((new Date).getTime()/1e3),u={appid:h,timeStamp:r,item_id:i.id,attr_id:0,item_num:e.val},c=a.default.hexMD5(o.default.objKeySort(u)+b),s=Object.assign({sign:c},u);o.default.postRequests("changeNum",s,(function(a){var i=a.data;200==i.code?(t.showToast({title:"加入购物车成功",icon:"none",duration:2e3}),n.list[n.index].cart_num=e.val):407==i.code||406==i.code?o.default.Toast("购买数量不能超过活动数量"):o.default.Toast(a.data.msg)})),this.$refs.popup.close()},getIndexSelect:function(){var t=this,e=this.page,n=this.num,i=(this.list,Math.round((new Date).getTime()/1e3)),r={appid:h,timeStamp:i},u=a.default.hexMD5(o.default.objKeySort(r)+b),c=Object.assign({sign:u,page:e,num:n},r);o.default.getRequests("itemCommon",c,(function(e){var n=e.data;200==n.code&&(t.config=n.data,0==n.data.list.length?(t.list=[],t.bitmap=!0):(t.list=n.data.list,n.data.list.length<10?t.loading=!1:t.loading=!0))}))},openCart:function(t){this.cartware=t,this.$refs.cart.open()},onClose:function(){this.$refs.cart.close()},showKey:function(t,e){this.arrObj=t,this.index=e,this.$refs.popup.open()}},onHide:function(){t.setStorageSync("recommed",this.list),console.log(this.list)},onShow:function(){console.log(this.page),1==this.page?this.getIndexSelect():this.list=t.getStorageSync("recommed")},onReachBottom:function(){var t=this,e=this.page,n=this.num,i=(this.list,Math.round((new Date).getTime()/1e3)),u={appid:h,timeStamp:i},c=a.default.hexMD5(o.default.objKeySort(u)+b),s=Object.assign({sign:c,page:e+1,num:n},u);o.default.getRequests("itemCommon",s,(function(e){var n;200==e.data.code&&(0!=e.data.data.list.length?((n=t.list).push.apply(n,r(e.data.data.list)),t.page+=1,t.loading=!0):t.loading=!1)}))}};e.default=v}).call(this,n("543d")["default"])},"357b":function(t,e,n){"use strict";n.r(e);var a=n("2cd8"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},8431:function(t,e,n){"use strict";var a=n("cdba"),o=n.n(a);o.a},a15a:function(t,e,n){"use strict";n.r(e);var a=n("c256"),o=n("357b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("8431");var r,u=n("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},c256:function(t,e,n){"use strict";var a={uniNavBar:function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"8e61"))},myProfile:function(){return n.e("components/profile/index").then(n.bind(null,"37c8"))},myLoading:function(){return n.e("components/loading/index").then(n.bind(null,"8cd7"))},uniPopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"8df7"))},myAddcart:function(){return n.e("components/addcart/index").then(n.bind(null,"729f"))},myKeyboard:function(){return n.e("components/keyboard/index").then(n.bind(null,"670e"))}},o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){return t.$refs.popup.close()})},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},ca78:function(t,e,n){"use strict";(function(t){n("c976"),n("921b");a(n("66fd"));var e=a(n("a15a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cdba:function(t,e,n){}},[["ca78","common/runtime","common/vendor"]]]);