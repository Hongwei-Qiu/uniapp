(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabar/classify"],{"365e":function(t,e,n){"use strict";var i=n("38fc"),a=n.n(i);a.a},"38fc":function(t,e,n){},7383:function(t,e,n){"use strict";n.r(e);var i=n("b6b3"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b6b3:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("4b89")),a=s(n("d07b")),o=s(n("8eb6"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t){return f(t)||u(t)||c(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var h=function(){n.e("components/uni-drawer/uni-drawer").then(function(){return resolve(n("d3da"))}.bind(null,n)).catch(n.oe)},p=getApp().globalData,m=p.appid,b=p.appsecret,g=(p.imgRemote,console),v=(g.log,{components:{uniDrawer:h},data:function(){return{waitLoad:!1,kind:0,active:-1,activeTab:0,loading:!0,firstId:"",secondId:"",page:1,num:10,firstCate:[],secondCate:[],bitmap:!0,list:[{price:1}],config:[],cartware:[],arrObj:{},index:"",textInfo:""}},methods:{closeCart:function(){this.$refs.addcart.onClose()},closeKey:function(){a.default.showTabBar(),this.$refs.keyboard.cancel()},cancelKey:function(){a.default.showTabBar(),this.$refs.popup.close()},toParent:function(t){var e=this,n=t.arrObj,o=Math.round((new Date).getTime()/1e3),s={appid:m,timeStamp:o,item_id:n.id,attr_id:0,item_num:t.val},r=i.default.hexMD5(a.default.objKeySort(s)+b),d=Object.assign({sign:r},s);a.default.postRequests("changeNum",d,(function(n){var i=n.data;200==i.code?(a.default.Toast("加入购物车成功"),e.list[e.index].cart_num=t.val):407==i.code||406==i.code?a.default.Toast("购买数量不能超过活动数量"):a.default.Toast(n.data.msg)})),this.$refs.popup.close()},mpItem:function(){var t=this;this.list=[],this.bitmap=!0,this.loading=!0,this.page=1;var e=Math.round((new Date).getTime()/1e3),n={appid:m,timeStamp:e},s=this.firstId,r=this.secondId,d=(this.page,this.num),c=i.default.hexMD5(a.default.objKeySort(n)+b),u=Object.assign({sign:c,firstId:s,secondId:r,page:1,num:d},n);a.default.getRequests("mpItemList",u,(function(e){var n=e.data;200==n.code&&(s||(s=n.data.firstCate[0].id),s&&n.data.firstCate.map((function(e,n){s==e.id&&(t.activeTab=n)})),t.config=n.data,t.firstCate=n.data.firstCate,t.secondCate=n.data.secondCate,t.list=n.data.list,n.data.list.length?(t.loading=!1,t.bitmap=!0,t.kind==t.secondCate.length-1?t.textInfo=(0,o.default)("没有更多呢"):(t.textInfo=(0,o.default)("上滑或点击<span class='red_font'>"+t.secondCate[t.kind+1].name+"</span>进入下一分类"),console.log(t.secondCate))):(t.bitmap=!1,t.loading=!1))}))},changeFirst:function(t){this.firstId=this.firstCate[t].id,this.secondId="",this.kind=0,getApp().globalData.classId="",this.mpItem()},changeSecond:function(t){this.secondId=this.secondCate[t].id,this.kind=t,this.mpItem()},nextSecond:function(){"没有更多呢"!=this.textInfo&&(this.secondId=this.secondCate[this.kind+1].id,this.kind+=1,this.mpItem())},openCart:function(t){this.cartware=t,this.$refs.cart.open()},onClose:function(){this.$refs.cart.close()},showKey:function(t,e){this.arrObj=t,this.index=e,this.$refs.popup.open()},showDraw:function(){this.$refs.drawer.open(),a.default.hideTabBar()},selectSort:function(t){this.active=t},cancelSort:function(){this.active=-1,a.default.showTabBar(),this.$refs.drawer.close()},deterSort:function(){-1!=this.active?(this.firstId=this.firstCate[this.active].id,this.activeTab=this.active,this.secondId="",this.kind=0,this.mpItem(),this.cancelSort()):a.default.Toast("请先选择分类")}},onShow:function(){var e=getApp().globalData.classId;1==p.isReload?(this.kind=0,this.active=-1,this.activeTab=0,this.loading=!0,this.firstId="",this.secondId="",this.page=1,this.num=10,e&&(this.firstId=e),this.mpItem()):this.list=t.getStorageSync("classify")},onHide:function(){t.setStorageSync("classify",this.list)},onReachBottom:function(){var t=this,e=this,n=Math.round((new Date).getTime()/1e3),s=e.num,d=e.page,c=(e.list,e.secondId),u=e.firstId,f={appid:m,timeStamp:n},l=i.default.hexMD5(a.default.objKeySort(f)+b),h={appid:m,num:s,page:d+1,firstId:u,secondId:c,timeStamp:n,sign:l};this.loading=!0,a.default.getRequests("mpItemList",h,(function(e){var n;200==e.data.code&&(0!=e.data.data.list.length?((n=t.list).push.apply(n,r(e.data.data.list)),t.page+=1,t.loading=!0):(t.loading=!1,t.kind==t.secondCate.length-1?t.textInfo=(0,o.default)("没有更多呢"):t.textInfo=(0,o.default)("上滑或点击<span class='red_font'>"+t.secondCate[t.kind+1].name+"</span>进入下一分类")))}))},onLoad:function(e){p.isReload=!0,t.hideTabBar()}});e.default=v}).call(this,n("543d")["default"])},d499:function(t,e,n){"use strict";(function(t){n("1995"),n("921b");i(n("66fd"));var e=i(n("d6b7"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d6b7:function(t,e,n){"use strict";n.r(e);var i=n("ff46"),a=n("7383");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("365e");var s,r=n("f0c5"),d=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=d.exports},ff46:function(t,e,n){"use strict";var i={"my-search":function(){return n.e("components/search/index").then(n.bind(null,"82f1"))},"my-s-tabs":function(){return n.e("components/s-tabs/index").then(n.bind(null,"b4d7"))},"my-s-tab":function(){return n.e("components/s-tab/index").then(n.bind(null,"68be"))},"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4ac6"))},"my-profile":function(){return n.e("components/profile/index").then(n.bind(null,"9177"))},"uni-popup":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"c6a8"))},"my-keyboard":function(){return n.e("components/keyboard/index").then(n.bind(null,"ae27"))},"my-addcart":function(){return n.e("components/addcart/index").then(n.bind(null,"b877"))},"uni-drawer":function(){return n.e("components/uni-drawer/uni-drawer").then(n.bind(null,"d3da"))},"my-tabar":function(){return n.e("components/tabar/index").then(n.bind(null,"abb6"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))}},[["d499","common/runtime","common/vendor"]]]);