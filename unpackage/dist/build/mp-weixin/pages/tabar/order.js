<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabar/order","components/uni-notice-bar/uni-notice-bar"],{"01b9":function(t,e,n){"use strict";(function(t){n("c976"),n("921b");i(n("66fd"));var e=i(n("7a9e"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"0fb4":function(t,e,n){"use strict";var i=n("c5e4"),a=n.n(i);a.a},2418:function(t,e,n){"use strict";var i=n("a0f8"),a=n.n(i);a.a},4347:function(t,e,n){"use strict";n.r(e);var i=n("d802"),a=n("76db");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2418");var r,d=n("f0c5"),c=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"999d1514",null,!1,i["a"],r);e["default"]=c.exports},"76db":function(t,e,n){"use strict";n.r(e);var i=n("ad07"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7a28":function(t,e,n){"use strict";n.r(e);var i=n("8276"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7a9e":function(t,e,n){"use strict";n.r(e);var i=n("f1fb"),a=n("7a28");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0fb4");var r,d=n("f0c5"),c=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},8276:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("ef9c")),a=o(n("d351"));o(n("4347"));function o(t){return t&&t.__esModule?t:{default:t}}var r=getApp().globalData,d=r.appid,c=r.appsecret,s=r.imgRemote,u=r.navBar,l=function(){n.e("components/w-picker/w-picker").then(function(){return resolve(n("7449"))}.bind(null,n)).catch(n.oe)},f={components:{wPicker:l},data:function(){return{is_child:"",is_miniBind:"",imgRemote:s,load:!0,navBar:u,tabList:[{name:"待审核"},{name:"备货中"},{name:"配送中"},{name:"已收货"},{name:"已取消"}],activeTab:1,lineShow:!1,showOrderType:!1,childListProps:{label:"nickname",value:"zid"},childList:[{zid:"",nickname:"当前账号"}],childzid:"",childtxt:"当前账号",isActive:"全部",orderTitle:"全部订单",type:1,search_default:!1,is_look:"",orderList:[],orderInfo:"",page:1,map:!1}},methods:{receiveOrder:function(e,n){var o=this,r=e;t.showModal({title:"提示",content:"是否确认收货？",success:function(e){if(e.confirm){var s=r,u=Math.round((new Date).getTime()/1e3),l={appid:d,id:s,timeStamp:u},f=i.default.hexMD5(a.default.objKeySort(l)+c),h={appid:d,timeStamp:u,id:s,sign:f};a.default.getRequests("receiveOrder",h,(function(e){200==e.data.code?(t.showToast({title:"确认收货成功",icon:"none"}),o.orderList.splice(n,1),o.orderList.length<=0&&o.orderLista()):t.showToast({title:e.data.msg,icon:"none"})}))}else e.cancel}})},play:function(e){var n=e;t.navigateTo({url:"/pages/order/pay?oid="+n})},orderDetailPage:function(e,n){"orderDetail"==e?t.navigateTo({url:"/pages/order/orderdetail?orderItem="+n.id}):"user"==e&&(t.showToast({title:"还未绑定微信,请去我的页面绑定微信",duration:2e3,icon:"none"}),t.navigateTo({url:"/pages/tabar/user"}))},cancelOrder:function(e,n){var o=this,r=e;t.showModal({title:"提示",content:"是否取消订单？",success:function(e){if(e.confirm){var s=r,u=Math.round((new Date).getTime()/1e3),l={appid:d,id:s,timeStamp:u},f=i.default.hexMD5(a.default.objKeySort(l)+c),h={appid:d,timeStamp:u,id:s,sign:f};a.default.getRequests("cancelOrder",h,(function(e){console.log(e),200==e.data.code?(t.showToast({title:"取消订单成功",icon:"none"}),o.orderList.splice(n,1),o.orderList.length<=0&&o.orderLista()):101==e.data.code?t.showToast({title:"订单已审核，不能取消",icon:"none"}):t.showToast({title:e.data.msg,icon:"none"})}))}else e.cancel}})},ckwl:function(e){var n=this,o=e;if(o<=0)t.showToast({title:"无物流信息",duration:2e3,icon:"none"});else{var r=Math.round((new Date).getTime()/1e3),s={appid:d,id:o,timeStamp:r},u=i.default.hexMD5(a.default.objKeySort(s)+c);e={appid:d,timeStamp:r,id:o,sign:u};a.default.postRequests("carPosition",e,(function(e){if(200==e.data.code)if(""!=e.data.data){var i=parseInt(e.data.data.latitude),a=parseInt(e.data.data.longitude);""==e.data.data.latitude||""==e.data.data.longitude?t.showToast({title:"无物流信息",duration:2e3,icon:"none"}):t.getLocation({type:"gcj02",success:function(e){n.map=!0;var o=n.bd_decrypt(a,i);t.openLocation({latitude:o.lat,longitude:o.lng})}})}else t.showToast({title:"无物流信息",duration:2e3,icon:"none"});else t.showToast({title:e.data.msg,duration:2e3,icon:"none"})}))}},bd_decrypt:function(t,e){var n=3e3*Math.PI/180,i=t-.0065,a=e-.006,o=Math.sqrt(i*i+a*a)-2e-5*Math.sin(a*n),r=Math.atan2(a,i)-3e-6*Math.cos(i*n),d=o*Math.cos(r),c=o*Math.sin(r);return{lng:d,lat:c}},oneMoreTime:function(e){var n=e;t.showModal({title:"提示",content:"是否再来一单？",success:function(e){if(e.confirm){var o=n,r=Math.round((new Date).getTime()/1e3),s={appid:d,id:o,timeStamp:r},u=i.default.hexMD5(a.default.objKeySort(s)+c),l={appid:d,timeStamp:r,id:o,sign:u};a.default.getRequests("oneMoreTime",l,(function(e){console.log(e),200==e.data.code?(t.showToast({title:"再来一单成功",duration:2e3,icon:"none"}),setTimeout((function(){t.switchTab({url:"/pages/tabar/shopcart"})}),1e3)):102==e.data.code?(t.showToast({title:"有下架商品",duration:2e3,icon:"none"}),setTimeout((function(){t.switchTab({url:"/pages/tabar/shopcart"})}),1e3)):t.showToast({title:e.data.msg,duration:2e3,icon:"none"})}))}else e.cancel}})},childInfo:function(){var t=this;t.childList=[{zid:"",nickname:"当前账号"}];var e=Math.round((new Date).getTime()/1e3),n={appid:d,timeStamp:e},o=i.default.hexMD5(a.default.objKeySort(n)+c),r={appid:d,timeStamp:e,sign:o};a.default.getRequests("childInfo",r,(function(e){if(200==e.data.code)for(var n=e.data.data,i=0;i<n.length;i++)t.childList.push(n[i])}))},orderListb:function(){var t=this;t.orderList=[],t.search_default=!1;var e=t.page,n=t.type;if("全部"!=t.isActive)var o=t.isActive+1;else o="";var r=10,s=Math.round((new Date).getTime()/1e3),u={appid:d,page:e,timeStamp:s,type:n},l=i.default.hexMD5(a.default.objKeySort(u)+c),f={appid:d,page:e,timeStamp:s,num:r,sign:l,type:n,status:o};a.default.getRequest("orderList",f,(function(e){200==e.data.code&&(e.data.data.list.length>0?(e.data.data.list.length<=9?t.load=!1:t.load=!0,t.is_look=e.data.data.is_look,t.orderInfo=e.data.data,t.orderList=e.data.data.list):(t.search_default=!0,t.load="空"))}))},orderLista:function(){var t=this;t.orderList=[],t.search_default=!1;var e=t.childzid;if("全部"!=t.isActive)var n=t.isActive+1;else n="";var o=1,r=t.type,s=10,u=Math.round((new Date).getTime()/1e3),l={appid:d,page:o,timeStamp:u,type:r},f=i.default.hexMD5(a.default.objKeySort(l)+c),h={appid:d,page:o,timeStamp:u,num:s,sign:f,type:r,select_zid:e,status:n};a.default.getRequest("orderList",h,(function(e){200==e.data.code&&(e.data.data.list.length>0?(e.data.data.list.length<=9?t.load=!1:t.load=!0,t.is_look=e.data.data.is_look,t.orderInfo=e.data.data,t.orderList=e.data.data.list):(t.search_default=!0,t.load="空"))}))},onChild:function(t){this.childtxt=t.obj.nickname,this.childzid=t.obj.zid,this.page=1,this.orderLista()},selectAccount:function(){this.$refs.account.show()},titleTab:function(t){this.orderTitle=t,this.showOrderType=!1,"未支付"==t?this.type=2:"全部订单"==t&&(this.type=1),this.page=1,this.lineShow=!1,this.activeTab=6,this.isActive="全部",this.orderLista()},changeFirst:function(t){this.isActive=t,this.lineShow=!0,this.page=1,this.orderLista()},rightClick:function(){this.showOrderType=!0},goTop:function(){t.pageScrollTo({scrollTop:0})}},onShow:function(){var e=this;if(e.is_child=t.getStorageSync("is_child"),e.is_miniBind=t.getStorageSync("is_miniBind"),e.childList=[{zid:"",nickname:"当前账号"}],t.getStorageSync("cdj_token")){var n=r.aData.show;console.log(n),0==n&&(e.orderList=[],e.childtxt="当前账号",e.childzid="",e.page=1,e.type=1,e.activeTab=6,this.lineShow=!1,e.orderTitle="全部订单",e.isActive="全部",e.orderListb(),e.goTop()),0==t.getStorageSync("is_child")&&e.childInfo()}else t.navigateTo({url:"/pages/account/login"})},onHide:function(){1==this.map?r.aData.show=!0:r.aData.show=!1},onReachBottom:function(){var e=this;if("全部"!=e.isActive)var n=e.isActive+1;else n="";var o=e.page,r=e.type,s=10,u=Math.round((new Date).getTime()/1e3),l={appid:d,page:o+1,timeStamp:u,type:r},f=i.default.hexMD5(a.default.objKeySort(l)+c),h={appid:d,page:o+1,timeStamp:u,num:s,sign:f,type:r,status:n};0==t.getStorageSync("is_child")&&(h.select_zid=e.childzid),a.default.getRequest("orderList",h,(function(t){if(200==t.data.code)if(""!=t.data.data.list){for(var n=0;n<t.data.data.list.length;n++)e.orderList.push(t.data.data.list[n]);e.is_look=t.data.data.is_look,e.page=o+1}else e.load=!1}))},onLoad:function(){r.aData.show=!1,t.hideTabBar()}};e.default=f}).call(this,n("543d")["default"])},a0f8:function(t,e,n){},ad07:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(function(){return resolve(n("abf0"))}.bind(null,n)).catch(n.oe)},a={name:"UniNoticeBar",components:{uniIcons:i},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var e=this;if(this.scrollable){var n=[],i=new Promise((function(n,i){t.createSelectorQuery().in(e).select("#".concat(e.elId)).boundingClientRect().exec((function(t){e.textWidth=t[0].width,n()}))})),a=new Promise((function(n,i){t.createSelectorQuery().in(e).select("#".concat(e.elIdBox)).boundingClientRect().exec((function(t){e.boxWidth=t[0].width,n()}))}));n.push(i),n.push(a),Promise.all(n).then((function(){e.animationDuration="".concat(e.textWidth/e.speed,"s"),e.animationDelay="-".concat(e.boxWidth/e.speed,"s"),setTimeout((function(){e.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=a}).call(this,n("543d")["default"])},c5e4:function(t,e,n){},d802:function(t,e,n){"use strict";var i={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"abf0"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},f1fb:function(t,e,n){"use strict";var i={uniNavBar:function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"8e61"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"abf0"))},mySTabs:function(){return n.e("components/s-tabs/index").then(n.bind(null,"1866"))},mySTab:function(){return n.e("components/s-tab/index").then(n.bind(null,"634e"))},myLoading:function(){return n.e("components/loading/index").then(n.bind(null,"8cd7"))},wPicker:function(){return n.e("components/w-picker/w-picker").then(n.bind(null,"7449"))},myTabar:function(){return n.e("components/tabar/index").then(n.bind(null,"e38b"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.showOrderType=!1})},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))}},[["01b9","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabar/order","components/uni-notice-bar/uni-notice-bar"],{"1c52":function(t,e,n){"use strict";n.r(e);var i=n("d561"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"20e6":function(t,e,n){"use strict";n.r(e);var i=n("c8d9"),a=n("6216");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4bb6");var r,c=n("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"326749d2",null,!1,i["a"],r);e["default"]=d.exports},"2e3e":function(t,e,n){},"3fe7":function(t,e,n){},4455:function(t,e,n){"use strict";(function(t){n("47a8"),n("921b");i(n("66fd"));var e=i(n("9451"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4bb6":function(t,e,n){"use strict";var i=n("2e3e"),a=n.n(i);a.a},"4c8b":function(t,e,n){"use strict";var i=n("3fe7"),a=n.n(i);a.a},6216:function(t,e,n){"use strict";n.r(e);var i=n("8313"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},8313:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(function(){return resolve(n("4aa4"))}.bind(null,n)).catch(n.oe)},a={name:"UniNoticeBar",components:{uniIcons:i},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var e=this;if(this.scrollable){var n=[],i=new Promise((function(n,i){t.createSelectorQuery().in(e).select("#".concat(e.elId)).boundingClientRect().exec((function(t){e.textWidth=t[0].width,n()}))})),a=new Promise((function(n,i){t.createSelectorQuery().in(e).select("#".concat(e.elIdBox)).boundingClientRect().exec((function(t){e.boxWidth=t[0].width,n()}))}));n.push(i),n.push(a),Promise.all(n).then((function(){e.animationDuration="".concat(e.textWidth/e.speed,"s"),e.animationDelay="-".concat(e.boxWidth/e.speed,"s"),setTimeout((function(){e.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=a}).call(this,n("543d")["default"])},9451:function(t,e,n){"use strict";n.r(e);var i=n("cf25"),a=n("1c52");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4c8b");var r,c=n("f0c5"),d=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=d.exports},c8d9:function(t,e,n){"use strict";var i={"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4aa4"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},cf25:function(t,e,n){"use strict";var i={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"01c8"))},"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4aa4"))},"my-s-tabs":function(){return n.e("components/s-tabs/index").then(n.bind(null,"2a09"))},"my-s-tab":function(){return n.e("components/s-tab/index").then(n.bind(null,"9b43"))},"my-loading":function(){return n.e("components/loading/index").then(n.bind(null,"068c"))},"w-picker":function(){return n.e("components/w-picker/w-picker").then(n.bind(null,"596c"))},"my-tabar":function(){return n.e("components/tabar/index").then(n.bind(null,"566b"))}},a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.showOrderType=!1})},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},d561:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("3782")),a=o(n("fe41"));o(n("20e6"));function o(t){return t&&t.__esModule?t:{default:t}}var r=getApp().globalData,c=r.appid,d=r.appsecret,s=r.imgRemote,l=r.navBar,u=function(){n.e("components/w-picker/w-picker").then(function(){return resolve(n("596c"))}.bind(null,n)).catch(n.oe)},f={components:{wPicker:u},data:function(){return{is_child:"",is_miniBind:"",imgRemote:s,load:!0,navBar:l,tabList:[{name:"待审核"},{name:"备货中"},{name:"配送中"},{name:"已收货"},{name:"已取消"}],activeTab:1,lineShow:!1,showOrderType:!1,childListProps:{label:"nickname",value:"zid"},childList:[{zid:"",nickname:"当前账号"}],childzid:"",childtxt:"当前账号",isActive:"全部",orderTitle:"全部订单",type:1,search_default:!1,is_look:"",orderList:[],orderInfo:"",page:1,map:!1}},methods:{receiveOrder:function(e,n){var o=this,r=e;t.showModal({title:"提示",content:"是否确认收货？",success:function(e){if(e.confirm){var s=r,l=Math.round((new Date).getTime()/1e3),u={appid:c,id:s,timeStamp:l},f=i.default.hexMD5(a.default.objKeySort(u)+d),h={appid:c,timeStamp:l,id:s,sign:f};a.default.getRequests("receiveOrder",h,(function(e){200==e.data.code?(t.showToast({title:"确认收货成功",icon:"none"}),o.orderList.splice(n,1),o.orderList.length<=0&&o.orderLista()):t.showToast({title:e.data.msg,icon:"none"})}))}else e.cancel}})},play:function(e){var n=e;t.navigateTo({url:"/pages/order/pay?oid="+n})},orderDetailPage:function(e,n){"orderDetail"==e?t.navigateTo({url:"/pages/order/orderdetail?orderItem="+n.id}):"user"==e&&(t.showToast({title:"还未绑定微信,请去我的页面绑定微信",duration:2e3,icon:"none"}),t.navigateTo({url:"/pages/tabar/user"}))},cancelOrder:function(e,n){var o=this,r=e;t.showModal({title:"提示",content:"是否取消订单？",success:function(e){if(e.confirm){var s=r,l=Math.round((new Date).getTime()/1e3),u={appid:c,id:s,timeStamp:l},f=i.default.hexMD5(a.default.objKeySort(u)+d),h={appid:c,timeStamp:l,id:s,sign:f};a.default.getRequests("cancelOrder",h,(function(e){console.log(e),200==e.data.code?(t.showToast({title:"取消订单成功",icon:"none"}),o.orderList.splice(n,1),o.orderList.length<=0&&o.orderLista()):101==e.data.code?t.showToast({title:"订单已审核，不能取消",icon:"none"}):t.showToast({title:e.data.msg,icon:"none"})}))}else e.cancel}})},ckwl:function(e){var n=this,o=e;if(o<=0)t.showToast({title:"无物流信息",duration:2e3,icon:"none"});else{var r=Math.round((new Date).getTime()/1e3),s={appid:c,id:o,timeStamp:r},l=i.default.hexMD5(a.default.objKeySort(s)+d);e={appid:c,timeStamp:r,id:o,sign:l};a.default.postRequests("carPosition",e,(function(e){if(200==e.data.code)if(""!=e.data.data){var i=parseInt(e.data.data.latitude),a=parseInt(e.data.data.longitude);""==e.data.data.latitude||""==e.data.data.longitude?t.showToast({title:"无物流信息",duration:2e3,icon:"none"}):t.getLocation({type:"gcj02",success:function(e){n.map=!0;var o=n.bd_decrypt(a,i);t.openLocation({latitude:o.lat,longitude:o.lng})}})}else t.showToast({title:"无物流信息",duration:2e3,icon:"none"});else t.showToast({title:e.data.msg,duration:2e3,icon:"none"})}))}},bd_decrypt:function(t,e){var n=3e3*Math.PI/180,i=t-.0065,a=e-.006,o=Math.sqrt(i*i+a*a)-2e-5*Math.sin(a*n),r=Math.atan2(a,i)-3e-6*Math.cos(i*n),c=o*Math.cos(r),d=o*Math.sin(r);return{lng:c,lat:d}},oneMoreTime:function(e){var n=e;t.showModal({title:"提示",content:"是否再来一单？",success:function(e){if(e.confirm){var o=n,r=Math.round((new Date).getTime()/1e3),s={appid:c,id:o,timeStamp:r},l=i.default.hexMD5(a.default.objKeySort(s)+d),u={appid:c,timeStamp:r,id:o,sign:l};a.default.getRequests("oneMoreTime",u,(function(e){console.log(e),200==e.data.code?(t.showToast({title:"再来一单成功",duration:2e3,icon:"none"}),setTimeout((function(){t.switchTab({url:"/pages/tabar/shopcart"})}),1e3)):102==e.data.code?(t.showToast({title:"有下架商品",duration:2e3,icon:"none"}),setTimeout((function(){t.switchTab({url:"/pages/tabar/shopcart"})}),1e3)):t.showToast({title:e.data.msg,duration:2e3,icon:"none"})}))}else e.cancel}})},childInfo:function(){var t=this;t.childList=[{zid:"",nickname:"当前账号"}];var e=Math.round((new Date).getTime()/1e3),n={appid:c,timeStamp:e},o=i.default.hexMD5(a.default.objKeySort(n)+d),r={appid:c,timeStamp:e,sign:o};a.default.getRequests("childInfo",r,(function(e){if(200==e.data.code)for(var n=e.data.data,i=0;i<n.length;i++)t.childList.push(n[i])}))},orderListb:function(){var t=this;t.orderList=[],t.search_default=!1;var e=t.page,n=t.type;if("全部"!=t.isActive)var o=t.isActive+1;else o="";var r=10,s=Math.round((new Date).getTime()/1e3),l={appid:c,page:e,timeStamp:s,type:n},u=i.default.hexMD5(a.default.objKeySort(l)+d),f={appid:c,page:e,timeStamp:s,num:r,sign:u,type:n,status:o};a.default.getRequest("orderList",f,(function(e){200==e.data.code&&(e.data.data.list.length>0?(e.data.data.list.length<=9?t.load=!1:t.load=!0,t.is_look=e.data.data.is_look,t.orderInfo=e.data.data,t.orderList=e.data.data.list):(t.search_default=!0,t.load="空"))}))},orderLista:function(){var t=this;t.orderList=[],t.search_default=!1;var e=t.childzid;if("全部"!=t.isActive)var n=t.isActive+1;else n="";var o=1,r=t.type,s=10,l=Math.round((new Date).getTime()/1e3),u={appid:c,page:o,timeStamp:l,type:r},f=i.default.hexMD5(a.default.objKeySort(u)+d),h={appid:c,page:o,timeStamp:l,num:s,sign:f,type:r,select_zid:e,status:n};a.default.getRequest("orderList",h,(function(e){200==e.data.code&&(e.data.data.list.length>0?(e.data.data.list.length<=9?t.load=!1:t.load=!0,t.is_look=e.data.data.is_look,t.orderInfo=e.data.data,t.orderList=e.data.data.list):(t.search_default=!0,t.load="空"))}))},onChild:function(t){this.childtxt=t.obj.nickname,this.childzid=t.obj.zid,this.page=1,this.orderLista()},selectAccount:function(){this.$refs.account.show()},titleTab:function(t){this.orderTitle=t,this.showOrderType=!1,"未支付"==t?this.type=2:"全部订单"==t&&(this.type=1),this.page=1,this.lineShow=!1,this.activeTab=6,this.isActive="全部",this.orderLista()},changeFirst:function(t){this.isActive=t,this.lineShow=!0,this.page=1,this.orderLista()},rightClick:function(){this.showOrderType=!0},goTop:function(){t.pageScrollTo({scrollTop:0})}},onShow:function(){var e=this;if(e.is_child=t.getStorageSync("is_child"),e.is_miniBind=t.getStorageSync("is_miniBind"),e.childList=[{zid:"",nickname:"当前账号"}],t.getStorageSync("cdj_token")){var n=r.aData.show;console.log(n),0==n&&(e.orderList=[],e.childtxt="当前账号",e.childzid="",e.page=1,e.type=1,e.activeTab=6,this.lineShow=!1,e.orderTitle="全部订单",e.isActive="全部",e.orderListb(),e.goTop()),0==t.getStorageSync("is_child")&&e.childInfo()}else t.navigateTo({url:"/pages/account/login"})},onHide:function(){1==this.map?r.aData.show=!0:r.aData.show=!1},onReachBottom:function(){var e=this;if("全部"!=e.isActive)var n=e.isActive+1;else n="";var o=e.page,r=e.type,s=10,l=Math.round((new Date).getTime()/1e3),u={appid:c,page:o+1,timeStamp:l,type:r},f=i.default.hexMD5(a.default.objKeySort(u)+d),h={appid:c,page:o+1,timeStamp:l,num:s,sign:f,type:r,status:n};0==t.getStorageSync("is_child")&&(h.select_zid=e.childzid),a.default.getRequest("orderList",h,(function(t){if(200==t.data.code)if(""!=t.data.data.list){for(var n=0;n<t.data.data.list.length;n++)e.orderList.push(t.data.data.list[n]);e.is_look=t.data.data.is_look,e.page=o+1}else e.load=!1}))},onLoad:function(){r.aData.show=!1,t.hideTabBar()}};e.default=f}).call(this,n("543d")["default"])}},[["4455","common/runtime","common/vendor"]]]);
>>>>>>> 52ce95943799934903c136bad487798e2f5bc802
