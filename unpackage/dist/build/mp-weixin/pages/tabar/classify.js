(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabar/classify"],{"349e":function(t,n,e){"use strict";var i={"my-search":function(){return e.e("components/search/index").then(e.bind(null,"82f1"))},"my-s-tabs":function(){return e.e("components/s-tabs/index").then(e.bind(null,"b4d7"))},"my-s-tab":function(){return e.e("components/s-tab/index").then(e.bind(null,"68be"))},"uni-icons":function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"4ac6"))},"my-profile":function(){return e.e("components/profile/index").then(e.bind(null,"9177"))},"uni-popup":function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-popup/uni-popup")]).then(e.bind(null,"c6a8"))},"my-keyboard":function(){return e.e("components/keyboard/index").then(e.bind(null,"ae27"))},"my-addcart":function(){return e.e("components/addcart/index").then(e.bind(null,"b877"))},"uni-drawer":function(){return e.e("components/uni-drawer/uni-drawer").then(e.bind(null,"d3da"))},"my-tabar":function(){return e.e("components/tabar/index").then(e.bind(null,"abb6"))},"my-mask":function(){return e.e("components/mask/index").then(e.bind(null,"5fde"))}},a=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){return t.$refs.popup.close()})},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},"365e":function(t,n,e){"use strict";var i=e("38fc"),a=e.n(i);a.a},"38fc":function(t,n,e){},7383:function(t,n,e){"use strict";e.r(n);var i=e("b6b3"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},b6b3:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=s(e("4b89")),a=s(e("d07b")),o=s(e("8eb6"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t){return f(t)||u(t)||c(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,n){if(t){if("string"===typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return l(t)}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var h=function(){e.e("components/uni-drawer/uni-drawer").then(function(){return resolve(e("d3da"))}.bind(null,e)).catch(e.oe)},p=getApp().globalData,m=p.appid,b=p.appsecret,g=(p.imgRemote,console),v=(g.log,{components:{uniDrawer:h},data:function(){return{masktabar:!1,kind:0,active:-1,activeTab:0,loading:!0,firstId:"",secondId:"",page:1,num:10,firstCate:[],secondCate:[],bitmap:!0,list:[],config:[],cartware:[],arrObj:{},index:"",textInfo:""}},methods:{closeCart:function(){this.$refs.addcart.onClose()},closeKey:function(){this.$refs.keyboard.cancel()},toParent:function(t){var n=this,e=t.arrObj,o=Math.round((new Date).getTime()/1e3),s={appid:m,timeStamp:o,item_id:e.id,attr_id:0,item_num:t.val},r=i.default.hexMD5(a.default.objKeySort(s)+b),d=Object.assign({sign:r},s);a.default.postRequests("changeNum",d,(function(e){var i=e.data;200==i.code?(a.default.Toast("加入购物车成功"),n.list[n.index].cart_num=t.val):407==i.code||406==i.code?a.default.Toast("购买数量不能超过活动数量"):a.default.Toast(e.data.msg)})),this.$refs.popup.close()},mpItem:function(){var t=this;this.list=[],this.bitmap=!0,this.loading=!0,this.page=1;var n=Math.round((new Date).getTime()/1e3),e={appid:m,timeStamp:n},s=this.firstId,r=this.secondId,d=(this.page,this.num),c=i.default.hexMD5(a.default.objKeySort(e)+b),u=Object.assign({sign:c,firstId:s,secondId:r,page:1,num:d},e);a.default.getRequests("mpItemList",u,(function(n){var e=n.data;200==e.code&&(s||(s=e.data.firstCate[0].id),s&&e.data.firstCate.map((function(n,e){s==n.id&&(t.activeTab=e)})),t.config=e.data,t.firstCate=e.data.firstCate,t.secondCate=e.data.secondCate,t.list=e.data.list,e.data.list.length?(t.loading=!1,t.bitmap=!0,t.kind==t.secondCate.length-1?t.textInfo=(0,o.default)("没有更多呢"):t.textInfo=(0,o.default)("上滑或点击<span class='red_font'>"+t.secondCate[1].name+"</span>进入下一分类")):(t.bitmap=!1,t.loading=!1))}))},changeFirst:function(t){this.firstId=this.firstCate[t].id,this.secondId="",this.kind=0,getApp().globalData.classId="",this.mpItem()},changeSecond:function(t){this.secondId=this.secondCate[t].id,this.kind=t,this.mpItem()},nextSecond:function(){"没有更多呢"!=this.textInfo&&(this.secondId=this.secondCate[this.kind+1].id,this.kind+=1,this.mpItem())},openCart:function(t){this.cartware=t,this.$refs.cart.open()},onClose:function(){this.$refs.cart.close()},showKey:function(t,n){console.log(45),this.arrObj=t,this.index=n,this.$refs.popup.open()},showDraw:function(){this.$refs.drawer.open()},selectSort:function(t){this.active=t},cancelSort:function(){this.active=-1,this.$refs.drawer.close()},deterSort:function(){-1!=this.active?(this.firstId=this.firstCate[this.active].id,this.activeTab=this.active,this.secondId="",this.kind=0,this.mpItem(),this.cancelSort()):a.default.Toast("请先选择分类")}},onShow:function(){var n=this;this.masktabar=!0,setTimeout((function(){n.masktabar=!1}),1e3);var e=getApp().globalData.classId;1==p.isReload?(this.kind=0,this.active=-1,this.activeTab=0,this.loading=!0,this.firstId="",this.secondId="",this.page=1,this.num=10,e&&(this.firstId=e),this.mpItem()):this.list=t.getStorageSync("classify")},onHide:function(){t.setStorageSync("classify",this.list)},onReachBottom:function(){var t=this,n=this,e=Math.round((new Date).getTime()/1e3),s=n.num,d=n.page,c=(n.list,n.secondId),u=n.firstId,f={appid:m,timeStamp:e},l=i.default.hexMD5(a.default.objKeySort(f)+b),h={appid:m,num:s,page:d+1,firstId:u,secondId:c,timeStamp:e,sign:l};this.loading=!0,a.default.getRequests("mpItemList",h,(function(n){var e;200==n.data.code&&(0!=n.data.data.list.length?((e=t.list).push.apply(e,r(n.data.data.list)),t.page+=1,t.loading=!0):(t.loading=!1,t.kind==t.secondCate.length-1?t.textInfo=(0,o.default)("没有更多呢"):t.textInfo=(0,o.default)("上滑或点击<span class='red_font'>"+t.secondCate[t.kind+1].name+"</span>进入下一分类")))}))},onLoad:function(n){p.isReload=!0,t.hideTabBar()}});n.default=v}).call(this,e("543d")["default"])},d499:function(t,n,e){"use strict";(function(t){e("1995"),e("921b");i(e("66fd"));var n=i(e("d6b7"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d6b7:function(t,n,e){"use strict";e.r(n);var i=e("349e"),a=e("7383");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("365e");var s,r=e("f0c5"),d=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=d.exports}},[["d499","common/runtime","common/vendor"]]]);