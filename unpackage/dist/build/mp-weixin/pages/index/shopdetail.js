<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/shopdetail"],{"055e":function(t,e,n){"use strict";var a={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"abf0"))},myCountdown:function(){return n.e("components/countdown/index").then(n.bind(null,"3c1a"))},myStepper:function(){return n.e("components/stepper/index").then(n.bind(null,"77a0"))},uniPopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"8df7"))},myKeyboard:function(){return n.e("components/keyboard/index").then(n.bind(null,"670e"))}},r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.arrowDirect=!1},t.e1=function(e){t.arrowDirect=!0},t.e2=function(e){return t.$refs.popup.close()})},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"0ca8":function(t,e,n){},2816:function(t,e,n){"use strict";(function(t){n("c976"),n("921b");a(n("66fd"));var e=a(n("657f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"657f":function(t,e,n){"use strict";n.r(e);var a=n("055e"),r=n("eebe");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("9c5d");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports},"9c5d":function(t,e,n){"use strict";var a=n("0ca8"),r=n.n(a);r.a},ec4c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ef9c")),r=i(n("d351"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=u(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,i=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){o=!0,r=t},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw r}}}}function u(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var c=console,l=(c.log,getApp().globalData),d=l.appid,f=l.appsecret,m=l.imgRemote,h={data:function(){return{token:t.getStorageSync("cdj_token"),kind:0,arrowDirect:!1,ware:[],recommend:[],recommendLength:"",value:1,id:"",hours:"0",minu:0,second:0,attrspec:"",spec:"",nav:!1,imgRemote:m}},methods:{leftClick:function(){t.navigateBack({delta:1})},collecting:function(){var t,e=this,n=this.ware.collect_status;t=2==n?1:2;var i=Math.round((new Date).getTime()/1e3),o={item_id:this.id,appid:d,timeStamp:i,status:t},u=a.default.hexMD5(r.default.objKeySort(o)+f),s=Object.assign({sign:u},o);r.default.getRequests("changeCollect",s,(function(a){var i=a.data;200==i.code?(e.ware.collect_status=t,n=t,1==n?r.default.Toast("取消收藏"):r.default.Toast("收藏成功")):r.default.Toast(a.msg)}))},showKey:function(){this.$refs.popup.open()},selectSpec:function(t){this.kind=t,this.attrspec=this.ware.attr[t]},getItem:function(){var t=this,e=this.id,n=Math.round((new Date).getTime()/1e3),i={id:e,appid:d,timeStamp:n},o=a.default.hexMD5(r.default.objKeySort(i)+f),u=Object.assign({sign:o},i);r.default.getRequests("getItemById",u,(function(e){var n=e.data;200==n.code?(t.info=n.data.info,t.ware=n.data,n.data.attr.length>0?(t.spec=!0,t.attrspec=n.data.attr[0]):t.spec=!1,t.hours=n.data.panicActivity.timeRemain,r.default.getRequests("itemRecommend",u,(function(e){var n=e.data;200==n.code&&(t.recommend=n.data,n.data.list.length&&(t.recommendLength=!0))}))):r.default.Toast(n.msg)}))},detailPage:function(e){t.navigateTo({url:"shopdetail?id="+e})},minus:function(){if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数");this.value--,this.value<=1&&(this.value=1)},plus:function(){if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数");this.value++},addCart:function(e){var n=this;if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数");var i,u,s=Math.round((new Date).getTime()/1e3),c=this.ware,l=this.value,m=this.kind;0==c.attr.length?(i=c.id,u=0):(i=c.attr[m].item_id,u=c.attr[m].id);var h={appid:d,timeStamp:s,item_id:i,attr_id:u,item_num:l},p=a.default.hexMD5(r.default.objKeySort(h)+f),v=Object.assign({sign:p},h);r.default.postRequests("firstChangeNum",v,(function(a){var u=a.data;if(200==u.code){r.default.Toast("加入购物车成功");var s,c=t.getStorageSync("classify"),l=[],d=o(c);try{for(d.s();!(s=d.n()).done;){var f=s.value;f.id==i&&(f.cart_num=u.data.new_num),l.push(f)}}catch(M){d.e(M)}finally{d.f()}t.setStorageSync("classify",l);var m,h=t.getStorageSync("recommed"),p=[],v=o(h);try{for(v.s();!(m=v.n()).done;){var g=m.value;g.id==i&&(g.cart_num=u.data.new_num),p.push(g)}}catch(M){v.e(M)}finally{v.f()}t.setStorageSync("recommed",p);var b,y=t.getStorageSync("collect"),_=[],w=o(y);try{for(w.s();!(b=w.n()).done;){var S=b.value;S.id==i&&(S.cart_num=u.data.new_num),_.push(S)}}catch(M){w.e(M)}finally{w.f()}t.setStorageSync("collect",_);var T,I=t.getStorageSync("search"),N=[],j=o(I);try{for(j.s();!(T=j.n()).done;){var D=T.value;D.id==i&&(D.cart_num=u.data.new_num),N.push(D)}}catch(M){j.e(M)}finally{j.f()}t.setStorageSync("search",N),n.spec?n.attrspec.cart_num=u.data.new_num:n.ware.cart_num=u.data.new_num,setTimeout((function(){1==e&&t.switchTab({url:"/pages/tabar/shopcart"})}),500)}else 406==u.code||407==u.code?r.default.Toast("超出活动购买数量"):r.default.Toast(a.data.msg)}))},toParent:function(t){!this.spec||1!=this.attrspec.is_float||Number.isInteger(Number(t.val))?(this.value=t.val,this.$refs.popup.close()):r.default.Toast("购买数量不能为小数")}},onLoad:function(t){this.id=t.id},onShow:function(){this.getItem(),getApp().globalData.isReload=!1},onPageScroll:function(t){0==t.scrollTop?this.nav=!1:this.nav=!0}};e.default=h}).call(this,n("543d")["default"])},eebe:function(t,e,n){"use strict";n.r(e);var a=n("ec4c"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a}},[["2816","common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/shopdetail"],{"5ee1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3782")),r=i(n("fe41"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=u(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,i=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){o=!0,r=t},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw r}}}}function u(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var c=console,l=(c.log,getApp().globalData),d=l.appid,f=l.appsecret,m=l.imgRemote,p={data:function(){return{token:t.getStorageSync("cdj_token"),kind:0,arrowDirect:!1,ware:[],recommend:[],recommendLength:"",value:1,id:"",hours:"0",minu:0,second:0,attrspec:"",spec:"",nav:!1,imgRemote:m}},methods:{leftClick:function(){t.navigateBack({delta:1})},collecting:function(){var t,e=this,n=this.ware.collect_status;t=2==n?1:2;var i=Math.round((new Date).getTime()/1e3),o={item_id:this.id,appid:d,timeStamp:i,status:t},u=a.default.hexMD5(r.default.objKeySort(o)+f),s=Object.assign({sign:u},o);r.default.getRequests("changeCollect",s,(function(a){var i=a.data;200==i.code?(e.ware.collect_status=t,n=t,1==n?r.default.Toast("取消收藏"):r.default.Toast("收藏成功")):r.default.Toast(a.msg)}))},showKey:function(){this.$refs.popup.open()},selectSpec:function(t){this.kind=t,this.attrspec=this.ware.attr[t]},getItem:function(){var t=this,e=this.id,n=Math.round((new Date).getTime()/1e3),i={id:e,appid:d,timeStamp:n},o=a.default.hexMD5(r.default.objKeySort(i)+f),u=Object.assign({sign:o},i);r.default.getRequests("getItemById",u,(function(e){var n=e.data;200==n.code?(t.info=n.data.info,t.ware=n.data,n.data.attr.length>0?(t.spec=!0,t.attrspec=n.data.attr[0]):t.spec=!1,t.hours=n.data.panicActivity.timeRemain,r.default.getRequests("itemRecommend",u,(function(e){var n=e.data;200==n.code&&(t.recommend=n.data,n.data.list.length&&(t.recommendLength=!0))}))):r.default.Toast(n.msg)}))},detailPage:function(e){t.navigateTo({url:"shopdetail?id="+e})},minus:function(){if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数");this.value--,this.value<=1&&(this.value=1)},plus:function(){if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数");this.value++},addCart:function(e){var n=this;if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void r.default.Toast("购买数量不能为小数");var i,u,s=Math.round((new Date).getTime()/1e3),c=this.ware,l=this.value,m=this.kind;0==c.attr.length?(i=c.id,u=0):(i=c.attr[m].item_id,u=c.attr[m].id);var p={appid:d,timeStamp:s,item_id:i,attr_id:u,item_num:l},h=a.default.hexMD5(r.default.objKeySort(p)+f),v=Object.assign({sign:h},p);r.default.postRequests("firstChangeNum",v,(function(a){var u=a.data;if(200==u.code){r.default.Toast("加入购物车成功");var s,c=t.getStorageSync("classify"),l=[],d=o(c);try{for(d.s();!(s=d.n()).done;){var f=s.value;f.id==i&&(f.cart_num=u.data.new_num),l.push(f)}}catch(D){d.e(D)}finally{d.f()}t.setStorageSync("classify",l);var m,p=t.getStorageSync("recommed"),h=[],v=o(p);try{for(v.s();!(m=v.n()).done;){var g=m.value;g.id==i&&(g.cart_num=u.data.new_num),h.push(g)}}catch(D){v.e(D)}finally{v.f()}t.setStorageSync("recommed",h);var b,y=t.getStorageSync("collect"),_=[],w=o(y);try{for(w.s();!(b=w.n()).done;){var S=b.value;S.id==i&&(S.cart_num=u.data.new_num),_.push(S)}}catch(D){w.e(D)}finally{w.f()}t.setStorageSync("collect",_);var T,N=t.getStorageSync("search"),I=[],j=o(N);try{for(j.s();!(T=j.n()).done;){var k=T.value;k.id==i&&(k.cart_num=u.data.new_num),I.push(k)}}catch(D){j.e(D)}finally{j.f()}t.setStorageSync("search",I),n.spec?n.attrspec.cart_num=u.data.new_num:n.ware.cart_num=u.data.new_num,setTimeout((function(){1==e&&t.switchTab({url:"/pages/tabar/shopcart"})}),500)}else 406==u.code||407==u.code?r.default.Toast("超出活动购买数量"):r.default.Toast(a.data.msg)}))},toParent:function(t){!this.spec||1!=this.attrspec.is_float||Number.isInteger(Number(t.val))?(this.value=t.val,this.$refs.popup.close()):r.default.Toast("购买数量不能为小数")}},onLoad:function(t){this.id=t.id},onShow:function(){this.getItem(),getApp().globalData.isReload=!1},onPageScroll:function(t){0==t.scrollTop?this.nav=!1:this.nav=!0}};e.default=p}).call(this,n("543d")["default"])},"70ba":function(t,e,n){},7285:function(t,e,n){"use strict";var a={"uni-icons":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"4aa4"))},"my-countdown":function(){return n.e("components/countdown/index").then(n.bind(null,"79fd"))},"my-stepper":function(){return n.e("components/stepper/index").then(n.bind(null,"181c"))},"uni-popup":function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"4939"))},"my-keyboard":function(){return n.e("components/keyboard/index").then(n.bind(null,"2a6a"))}},r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.arrowDirect=!1},t.e1=function(e){t.arrowDirect=!0},t.e2=function(e){return t.$refs.popup.close()})},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"84df":function(t,e,n){"use strict";n.r(e);var a=n("7285"),r=n("fdae");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("b019");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=s.exports},b019:function(t,e,n){"use strict";var a=n("70ba"),r=n.n(a);r.a},eec1:function(t,e,n){"use strict";(function(t){n("47a8"),n("921b");a(n("66fd"));var e=a(n("84df"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},fdae:function(t,e,n){"use strict";n.r(e);var a=n("5ee1"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a}},[["eec1","common/runtime","common/vendor"]]]);
>>>>>>> 52ce95943799934903c136bad487798e2f5bc802
