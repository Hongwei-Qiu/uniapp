(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/tabar/shopcart"],{4764:function(t,e,n){"use strict";var i=n("7bbb"),o=n.n(i);o.a},"6e71":function(t,e,n){"use strict";var i={"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4ac6"))},"w-picker":function(){return n.e("components/w-picker/w-picker").then(n.bind(null,"3258"))},"my-recomend":function(){return n.e("components/recomend/index").then(n.bind(null,"72f1"))},"my-loading":function(){return n.e("components/loading/index").then(n.bind(null,"efc6"))},"my-backtop":function(){return n.e("components/backtop/index").then(n.bind(null,"d521"))},"uni-popup":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"c6a8"))},"my-addcart":function(){return n.e("components/addcart/index").then(n.bind(null,"b877"))},"my-tabar":function(){return n.e("components/tabar/index").then(n.bind(null,"abb6"))},"my-mask":function(){return n.e("components/mask/index").then(n.bind(null,"5fde"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,(t.cartInfo.totalPrice-t.juanPrice-t.cartInfo.discount).toFixed(2));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"7bbb":function(t,e,n){},"85c2":function(t,e,n){"use strict";(function(t){n("1995");i(n("66fd"));var e=i(n("dda3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},"9fc6":function(t,e,n){"use strict";n.r(e);var i=n("df7c"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},dda3:function(t,e,n){"use strict";n.r(e);var i=n("6e71"),o=n("9fc6");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("4764");var r,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=s.exports},df7c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("4b89")),o=r(n("8eb6")),a=r(n("d07b"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=u(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,a=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){r=!0,o=t},f:function(){try{a||null==i.return||i.return()}finally{if(r)throw o}}}}function s(t){return f(t)||l(t)||u(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var p=function(){n.e("components/w-picker/w-picker").then(function(){return resolve(n("3258"))}.bind(null,n)).catch(n.oe)},m=function(){Promise.all([n.e("common/vendor"),n.e("components/rattenking-dtpicker/rattenking-dtpicker")]).then(function(){return resolve(n("d1fd"))}.bind(null,n)).catch(n.oe)},v=console,g=v.log,b=getApp().globalData,y=b.appid,w=b.appsecret,T=(b.imgRemote,{components:{wPicker:p,ruiDatePicker:m},data:function(){return{masktabar:!1,display:!0,scrollHeight:"",newHeight:"",title:"",contact:"",mobile:"",address:"",childzid:"",childListProps:{label:"nickname",value:"zid"},childList:[{zid:"",nickname:"当前账号"}],deliveryListProps:{label:"delivery_time_info",value:"delivery_time_id"},deliveryList:[{delivery_time_id:"",delivery_time_info:"不限"}],couponsListProps:{label:"txt",value:"id"},couponsList:[{id:"",txt:"不使用"}],deliveryId:"",deliveryTime:"不限",account:"当前账号",cash:"不使用",couponsId:"",juanPrice:0,sendDate:"",startyear:"",cartInfo:{countNum:0},reduce:"",page:1,num:10,loading:!0,showTop:!1,config:[],cartware:[],itemList:[],remark:"",gift:0,count:0}},methods:{closeCart:function(){this.$refs.addcart.onClose()},shoplist:function(){t.navigateTo({url:"/pages/shopcart/shoplist"})},deliveryPage:function(){t.navigateTo({url:"/pages/shopcart/delivery?childzid="+this.childzid})},collectBill:function(){t.switchTab({url:"/pages/tabar/index"})},childInfo:function(){var t=this,e=Math.round((new Date).getTime()/1e3),n={appid:y,timeStamp:e},o=i.default.hexMD5(a.default.objKeySort(n)+w),r=Object.assign({sign:o},n);a.default.getRequests("childInfo",r,(function(e){var n,i=e.data;200==i.code&&(n=t.childList).push.apply(n,s(i.data))}))},newArr:function(t){return t.map((function(t,e){return{id:t.id,txt:""}}))},addInfo:function(){var t=this,e=Math.round((new Date).getTime()/1e3),n={appid:y,timeStamp:e},r=i.default.hexMD5(a.default.objKeySort(n)+w),d=Object.assign({sign:r},n);a.default.getRequests("addInfo",d,(function(e){var n,i=e.data;t.cartInfo=i.data;var a=i.data,r=a.userInfo,d=a.activity_rule,u=a.totalPrice,l=a.activity_type;if(t.contact=r.contact,t.mobile=r.phone,t.address=r.address,0==i.data.countNum&&1==b.isReload&&t.indexItem(),(n=t.deliveryList).push.apply(n,s(i.data.delivery_time_list)),0!=i.data.couponsList.length){for(var f,h=t.newArr(i.data.couponsList),p=0;p<i.data.couponsList.length;p++)h[p].txt="".concat(i.data.couponsList[p].coupons_title,"(余额").concat(i.data.couponsList[p].residue,"元)");(f=t.couponsList).push.apply(f,s(h))}2==l&&(i.data.fullPrice>=d[0].price?t.gift=1:t.gift=0);var m=d.length-1;if(1==l)if(d[m].price<=u)t.reduce=(0,o.default)("已享受满<span style='color: #FF3E1E;'>".concat(d[m].price,"元</span>减<span style='color: #FF3E1E;'>").concat(d[m].reduce,"元<span>"));else{var v,g=c(d);try{for(g.s();!(v=g.n()).done;){var y=v.value;if(u<y.price)return void(t.reduce=(0,o.default)("再满<span style='color: #FF3E1E;'>".concat(y.price-u,"元</span>减<span style='color: #FF3E1E;'>").concat(y.reduce,"元</span>")))}}catch(w){g.e(w)}finally{g.f()}}}))},selectAccount:function(){this.$refs.account.show()},onConfirmAccount:function(t){if(t.value)this.address=t.obj.address,this.contact=t.obj.contact,this.mobile=t.obj.mobile;else{var e=this.cartInfo.userInfo;this.address=e.address,this.contact=e.contact,this.mobile=e.mobile}this.childzid=t.value,this.account=t.result},selectDate:function(){this.$refs.date.show()},onConfirmDate:function(t){var e=t.obj,n=e.year,i=e.month,o=e.day;this.sendDate="".concat(n,"-").concat(i,"-").concat(o)},selectTime:function(){this.$refs.delivery.show()},onConfirmDelivery:function(t){g(t),this.deliveryTime=t.result,this.deliveryId=t.value},selectCash:function(){this.$refs.cash.show()},onConfirmCash:function(t){var e=this;if(this.cash=t.result,this.couponsId=t.value,this.juanPrice=0,g(t),""!=t.obj.id){var n=Math.round((new Date).getTime()/1e3),o={appid:y,timeStamp:n,id:t.obj.id},r=i.default.hexMD5(a.default.objKeySort(o)+w),c=Object.assign({sign:r},o);a.default.getRequests("useCouponsPrice",c,(function(t){200==t.data.code?e.juanPrice=t.data.data.couponsPrice:a.default.Toast(t.data.msg)}))}},confirmOrder:function(){var e=this;if(!this.contact||!this.mobile||!this.address)return a.default.Toast("请先填写收货信息"),void setTimeout((function(){t.navigateTo({url:"../shopcart/delivery"})}),1e3);if(this.count++,1==this.count){setTimeout((function(){e.count=0}),500);var n=Math.round((new Date).getTime()/1e3),o={appid:y,timeStamp:n,send_time:this.sendDate},r=i.default.hexMD5(a.default.objKeySort(o)+w),c=Object.assign({sign:r},o),s=this;a.default.getRequests("testOrder",c,(function(e){var n=e.data.code,i=e.data.data;if(1==i.on_delivery)switch(n){case 101:t.showModal({title:"提示",content:"直接下单？",success:function(t){t.confirm&&s.order()}});break;case 300:t.showModal({title:"提示",content:"信用金即将用完，请及时结账（可以直接下单）？",success:function(t){t.confirm&&s.order()}});break;case 301:t.showModal({title:"提示",content:"信用金即将用完，请及时结账（可以合并订单）？",success:function(e){e.confirm?s.mergeOrder():e.cancel&&t.showModal({title:"提示",content:"直接下单？",success:function(t){t.confirm&&s.order()}})}});break;case 500:a.default.Toast({message:"信用金已用完，不能下单",duration:1200});break;case 200:t.showModal({title:"提示",content:"可以合并订单？",success:function(e){e.confirm?s.mergeOrder():e.cancel&&t.showModal({title:"提示",content:"直接下单？",success:function(t){t.confirm&&s.order()}})}});break}else t.showModal({title:"提示",content:"直接下单？",success:function(t){t.confirm&&s.order()}})}))}},mergeOrder:function(){var e=Math.round((new Date).getTime()/1e3),n=this.sendDate,o=3,r={appid:y,timeStamp:e,send_time:n,way:o},c=i.default.hexMD5(a.default.objKeySort(r)+w),s=Object.assign({sign:c},r);a.default.postRequests("mergeOrder",s,(function(e){200!=e.data.code?a.default.Toast(e.data.msg):(a.default.Toast("合拼订单成功"),setTimeout((function(){t.switchTab({url:"/pages/tabar/order"})}),1e3))}))},order:function(){var e=Math.round((new Date).getTime()/1e3),n=this.sendDate,o=this.childzid,r=this.deliveryTime,c=this.deliveryId,s=this.remark.replace(/\s/g,""),d="";d="不限"==r?"":r;var u=3,l={appid:y,timeStamp:e,send_time:n,way:u},f=i.default.hexMD5(a.default.objKeySort(l)+w),h=Object.assign({delivery_time_id:c,delivery_time_info:d,sign:f,remark:s,coupons_member_id:0==this.cartInfo.on_delivery?this.couponsId:0,select_zid:o},l);a.default.postRequests("addOrder",h,(function(e){var n=e.data;if(104==n.code)return a.default.Toast("超出下单时间，不能下单"),!1;if(200==n.code){if(0==n.data.on_delivery){var i=n.data.orderId;return void t.navigateTo({url:"/pages/shopcart/pay?id=".concat(i)})}a.default.Toast("下单成功"),setTimeout((function(){t.switchTab({url:"/pages/tabar/order"})}),1e3)}else 500==n.code?a.default.Toast("服务器内部错误,请稍候再试"):407==n.code?a.default.Toast("超出活动限制,请删除部分商品"):a.default.Toast(n.msg)}))},indexItem:function(){var t=this;this.itemList=[],this.page=1,this.loading=!0;var e=Math.round((new Date).getTime()/1e3),n={appid:y,timeStamp:e},o=this.num,r=(this.page,i.default.hexMD5(a.default.objKeySort(n)+w)),c=Object.assign({page:1,sign:r,num:o},n);a.default.getRequests("indexItem",c,(function(e){var n=e.data;200==n.code&&(t.itemList=n.data.list,t.config=n.data,n.data.total<=10?t.loading=!1:t.loading=!0)}))},openCart:function(t){this.$refs.popup.open(),this.cartware=t},onClose:function(){this.$refs.popup.close()},getSendTime:function(){var t=new Date,e=t.getTime()+864e5;t.setTime(e);var n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate();this.startyear=n,i<10&&(i="0"+i),o<10&&(o="0"+o),this.sendDate="".concat(n,"-").concat(i,"-").concat(o)},onShow:function(){t.getStorageSync("cdj_token")?(1!=t.getStorageSync("is_child")&&this.childInfo(),this.getSendTime(),this.addInfo()):t.navigateTo({url:"/pages/account/login"})},onHide:function(){this.childzid="",this.childList=[{zid:"",nickname:"当前账号"}],this.deliveryList=[{delivery_time_id:"",delivery_time_info:"不限"}],this.couponsList=[{id:"",txt:"不使用"}],this.deliveryId="",this.deliveryTime="不限",this.account="当前账号",this.cash="不使用",this.couponsId="",this.juanPrice=0,this.remark=""},onLoad:function(){b.isReload=!0,t.hideTabBar()}},onReachBottom:function(){var t=this,e=this,n=Math.round((new Date).getTime()/1e3),o=e.num,r=e.page,c={appid:y,timeStamp:n},d=i.default.hexMD5(a.default.objKeySort(c)+w),u={appid:y,num:o,page:r+1,timeStamp:n,sign:d};a.default.getRequests("indexItem",u,(function(e){var n,i=e.data;(i.code=200)&&(""!=i.data?((n=t.itemList).push.apply(n,s(i.data.list)),t.page+=1,t.loading=!0):t.loading=!1)}))},onPageScroll:function(t){0==t.scrollTop?this.showTop=!1:this.showTop=!0}});e.default=T}).call(this,n("c11b")["default"])}},[["85c2","common/runtime","common/vendor"]]]);