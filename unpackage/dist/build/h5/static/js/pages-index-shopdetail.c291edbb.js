(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-shopdetail"],{"0329":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgwOUNERUYzNUVCNDExRUFBRjJDRjk1ODczNjRFRTc1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgwOUNERUY0NUVCNDExRUFBRjJDRjk1ODczNjRFRTc1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODA5Q0RFRjE1RUI0MTFFQUFGMkNGOTU4NzM2NEVFNzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODA5Q0RFRjI1RUI0MTFFQUFGMkNGOTU4NzM2NEVFNzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YtDJPAAABj0lEQVR42mJkmOXCgAfIAXEUEDsCsRYQiwLxbyB+AsQPgfgAEK/8n7r7Pi4DGHFYADK4A4jDgJiZAT/4B7IEiCuAFj1Cl2TCosEPiK8AcSQRhsPMAKm9yjjbNZKQBflAvB6IeRlIBzxAvBRoSSEuC8KBuB+Hr4gFjEDcC7QkHN0CUJjPgSqgFIDMmAO0RA7ZgnaoF6kFQGZ1wlKRPJC+R2HQ4EpdSiBDI2hgOCx0IpigmYhWwJEFSOjAeK2mSQwleqEMbEwsZJn2698fhp5LqxmqT8+DCemAfCAC41FiOAiA9OZpByALiaKEPch2kCvIBb+Beidd3YBRFoEKLmkaxcFTkA+u0jCSr4As2EdDC/YzQYvafzQwHFyMgyx4AMSraGDBKmD98ACWisqB+AsVDf8CNRNeRIBqolQg/k8Fw0FmpMJqN+R8sAKICymMD5DhpUDDV+Cq0SYCcSAQfyYzWGKAhvcSqpM3QcunFUT65h9UrTbQ8GXEtiqwNVu0gVgMKv4KmkH3Q1PLPVwGAAQYAHZlakSdcu1wAAAAAElFTkSuQmCC"},"1d64":function(t,e,i){"use strict";var a=i("cc59"),n=i.n(a);n.a},"2f12":function(t,e,i){"use strict";var a={"uni-icons":i("4ac6").default,"my-countdown":i("4225").default,"my-stepper":i("b7a4").default,"uni-popup":i("c6a8").default,"my-keyboard":i("ae27").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"shop_detail"},[a("v-uni-view",{staticClass:"nab_title",class:t.nav?"nab_title1":"nab_title2"},[a("v-uni-view",{staticStyle:{height:"80rpx","line-height":"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[a("uni-icons",{staticStyle:{"margin-left":"5rpx"},attrs:{type:"arrowleft",size:"24",color:"#1a1a1a"}})],1)],1),a("v-uni-view",{staticClass:"good_info"},[a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column"}},[a("v-uni-image",{staticClass:"good_img",attrs:{src:""==t.ware.img?t.imgRemote+t.ware.item_default:t.ware.img,mode:"aspectFit"}}),1==t.ware.is_activity||1==t.attrspec.is_activity?a("v-uni-view",{staticClass:"active_time"},[a("v-uni-view",{staticClass:"remain_num"},[t.spec?[t.attrspec.activity_num>t.attrspec.cart_num?a("v-uni-text",[t._v("剩余:"+t._s(t.attrspec.activity_num-t.attrspec.cart_num)+"件")]):a("v-uni-text",[t._v("剩余:0件")])]:[t.ware.activity_num>t.ware.cart_num?a("v-uni-text",[t._v("剩余:"+t._s(t.ware.activity_num-t.ware.cart_num)+"件")]):a("v-uni-text",[t._v("剩余:0件")])]],2),t._v("正在抢购"),a("my-countdown",{staticStyle:{"line-height":"21px"},attrs:{time:t.hours,lineC:"white",bgC:"none"}}),t._v("结束")],1):t._e()],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{},[t._v(t._s(t.ware.title))]),t.ware.desribe?a("v-uni-view",{staticClass:"gray_font"},[t._v(t._s(t.ware.desribe))]):t._e(),a("v-uni-view",{staticClass:"align_center"},[t._l(t.ware.label,(function(e,i){return a("v-uni-view",{key:i,staticClass:"red_tag"},[t._v(t._s(e))])})),3==t.ware.is_activity||3==t.attrspec.is_activity?a("v-uni-view",{staticClass:"gift_info"},[a("v-uni-view",{staticClass:"hidden"},[t._v(t._s(t.ware.activity_rule))]),t.arrowDirect?a("uni-icons",{attrs:{type:"arrowdown",size:"36rpx",color:"white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.arrowDirect=!1}}}):a("uni-icons",{attrs:{type:"arrowup",size:"36rpx",color:"white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.arrowDirect=!0}}})],1):t._e()],2),t.arrowDirect?a("v-uni-view",{staticClass:"gift_label"},[t._v(t._s(t.ware.activity_rule))]):t._e(),2==t.ware.is_activity||2==t.attrspec.is_activity?a("v-uni-view",{},t._l(t.ware.activity_rule,(function(e,i){return a("v-uni-text",{key:i,staticClass:"full_reduction"},[t._v("满"+t._s(e.price)+"减"+t._s(e.reduce))])})),1):t._e(),a("v-uni-view",{staticClass:"judge_price"},[t.token?[1==t.ware.is_look?[t.spec?[1==t.attrspec.is_activity?[t.attrspec.activity_num>t.attrspec.cart_num?a("v-uni-view",[a("v-uni-text",{staticClass:"red_font"},[t._v("￥"+t._s(t.attrspec.activity_price)+"/"+t._s(t.attrspec.unit))]),a("v-uni-text",{staticClass:"line_through gray_font add_leftpx"},[t._v("￥"+t._s(t.attrspec.attr_price)+"/"+t._s(t.attrspec.unit))])],1):a("v-uni-view",[a("v-uni-text",{staticClass:"red_font"},[t._v("￥"+t._s(t.attrspec.attr_price)+"/"+t._s(t.attrspec.unit))])],1)]:[a("v-uni-view",{staticClass:"red_font"},[1==t.attrspec.market_price?a("v-uni-text",[t._v("时价")]):a("v-uni-text",[t._v("￥"+t._s(t.attrspec.attr_price)+"/"+t._s(t.attrspec.unit))])],1)]]:[1==t.ware.is_activity?[t.ware.activity_num>t.ware.cart_num?a("v-uni-view",[a("v-uni-text",{staticClass:"red_font"},[t._v("￥"+t._s(t.ware.activity_price)+"/"+t._s(t.ware.unit))]),a("v-uni-text",{staticClass:"line_through gray_font add_leftpx twelve"},[t._v("￥"+t._s(t.ware.price)+"/"+t._s(t.ware.unit))])],1):a("v-uni-view",[a("v-uni-text",{staticClass:"red_font"},[t._v("￥"+t._s(t.ware.price)+"/"+t._s(t.ware.unit))])],1)]:[a("v-uni-view",{staticClass:"red_font"},[1==t.ware.market_price?a("v-uni-text",[t._v("时价")]):a("v-uni-text",[t._v("￥"+t._s(t.ware.price)+"/"+t._s(t.ware.unit))])],1)]]]:[a("v-uni-view",{staticClass:"red_font"},[t._v("￥***")])]]:[t.spec?a("v-uni-view",{staticClass:"red_font"},[1==t.attrspec.market_price?a("v-uni-text",[t._v("时价")]):a("v-uni-text",[t._v("￥"+t._s(t.attrspec.attr_price)+"/"+t._s(t.attrspec.unit))])],1):a("v-uni-view",{staticClass:"red_font"},[1==t.ware.market_price?a("v-uni-text",[t._v("时价")]):a("v-uni-text",[t._v("￥"+t._s(t.ware.price)+"/"+t._s(t.ware.unit))])],1)]],2),a("v-uni-view",{staticClass:"cart_num"},[t.spec?a("v-uni-view",{staticClass:"select_spec"},[a("v-uni-view",{staticClass:"spec_name"},[t._v("选择规格")]),a("v-uni-view",t._l(t.ware.attr,(function(e,i){return a("v-uni-text",{class:t.kind==i?"active_spec":"inactive_spec",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSpec(i)}}},[t._v(t._s(e.attr_title))])})),1)],1):t._e(),a("v-uni-view",{staticClass:"flex_left_right buy_num"},[a("v-uni-text",[t._v("购买数量")]),a("my-stepper",{attrs:{val:t.value},on:{minus:function(e){arguments[0]=e=t.$handleEvent(e),t.minus.apply(void 0,arguments)},plus:function(e){arguments[0]=e=t.$handleEvent(e),t.plus.apply(void 0,arguments)},showKey:function(e){arguments[0]=e=t.$handleEvent(e),t.showKey.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view"),a("v-uni-view")],1),t.recommendLength?a("v-uni-view",{staticClass:"simary"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"line_border"}),a("v-uni-text",[t._v("相似商品")])],1),a("v-uni-view",{staticClass:"all_good"},t._l(t.recommend.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"column",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detailPage(e.id)}}},[a("v-uni-view",[a("v-uni-view",{staticClass:"column_img"},[t.recommend.logo&&1==t.recommend.shuiyin?a("v-uni-image",{staticClass:"shuiyin1",attrs:{src:t.recommend.logo,mode:"aspectFit"}}):t._e(),a("v-uni-image",{staticClass:"good_img",attrs:{src:""==e.img?t.imgRemote+t.recommend.item_default:e.img,mode:"aspectFit"}})],1),a("v-uni-view",[t._v(t._s(e.title))])],1),a("v-uni-view",[a("v-uni-view",[a("v-uni-view",{},t._l(e.label,(function(e,i){return a("v-uni-text",{key:i,staticClass:"red_tag"},[t._v(t._s(e))])})),1),a("v-uni-view",{staticClass:"red_font"},[t.token?[1==t.recommend.is_look?[e.attr.length?[a("v-uni-text",[t._v("￥"+t._s(e.area_price)+"/"+t._s(e.unit))])]:[1==e.market_price?a("v-uni-text",[t._v("时价")]):a("v-uni-text",[t._v("￥"+t._s(e.price)+"/"+t._s(e.unit))])]]:[t._v("￥***")]]:[e.attr.length?[a("v-uni-text",[t._v("￥"+t._s(e.area_price)+"/"+t._s(e.unit))])]:[1==e.market_price?a("v-uni-text",[t._v("时价")]):a("v-uni-text",[t._v("￥"+t._s(e.price)+"/"+t._s(e.unit))])]]],2)],1)],1)],1)})),1)],1):t._e(),a("v-uni-view",{staticClass:"picture_text_detail"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticClass:"line_border"}),a("v-uni-text",[t._v("图文详情")])],1),a("v-uni-view",{},[t.ware.info?a("v-uni-view",{domProps:{innerHTML:t._s(t.ware.info)}}):a("v-uni-view",{staticClass:"bitmap"},[a("v-uni-image",{attrs:{src:i("2fac"),mode:"aspectFit"}})],1)],1)],1),a("v-uni-view",{staticStyle:{height:"50px"}}),a("v-uni-view",{staticClass:"is_add_cart"},[a("v-uni-view",{staticClass:"operateing"},[a("v-uni-view",{staticClass:"collect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collecting.apply(void 0,arguments)}}},[2==t.ware.collect_status?a("v-uni-text",{staticClass:"iconfont icon-alreadystar center",staticStyle:{color:"orange"}}):a("v-uni-text",{staticClass:"iconfont icon-xing center"}),a("v-uni-text",[t._v("收藏")])],1),a("v-uni-view",{staticClass:"addcart_method"},[a("v-uni-view",{staticClass:"self_buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addCart.apply(void 0,arguments)}}},[t._v("加入购物车")]),a("v-uni-view",{staticClass:"other_buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addCart(!0)}}},[t._v("立即购买")])],1)],1)],1),a("uni-popup",{ref:"popup",attrs:{type:"bottom"},on:{maskInfo:function(e){arguments[0]=e=t.$handleEvent(e),t.closeKey.apply(void 0,arguments)}}},[a("my-keyboard",{ref:"keyboard",attrs:{arrObj:t.ware},on:{cancelKey:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popup.close()},toParent:function(e){arguments[0]=e=t.$handleEvent(e),t.toParent.apply(void 0,arguments)}}})],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},"2fac":function(t,e,i){t.exports=i.p+"static/img/no_content.abece34c.png"},3170:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".my_countdown[data-v-d9a4d2d0]{color:#fff;font-size:%?24?%}.my_countdown .text[data-v-d9a4d2d0]{padding:0 2px;border-radius:2px}",""]),t.exports=e},4225:function(t,e,i){"use strict";i.r(e);var a=i("6e44"),n=i("4e56");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("7463");var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"d9a4d2d0",null,!1,a["a"],c);e["default"]=r.exports},"4bb4":function(t,e,i){var a=i("f9d9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("36e5160f",a,!0,{sourceMap:!1,shadowMode:!1})},"4e56":function(t,e,i){"use strict";i.r(e);var a=i("ef78"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"54f8":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return n}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var a=i("dde1");function n(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(a["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,c=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){o=!0,s=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(o)throw s}}}}},"5f91":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"my_stepper addcart"},[a("v-uni-image",{attrs:{src:i("0329"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.minus.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"align_center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showkey.apply(void 0,arguments)}}},[a("v-uni-input",{staticClass:"input_value",attrs:{type:"number",disabled:"true"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("v-uni-image",{attrs:{src:i("eb75"),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.plus.apply(void 0,arguments)}}})],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},"6e44":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"my_countdown"},[i("v-uni-text",{staticClass:"text",style:{background:t.bgC}},[t._v(t._s(t.hour))]),i("v-uni-text",{staticClass:"text",style:{color:t.lineC}},[t._v(":")]),i("v-uni-text",{staticClass:"text",style:{background:t.bgC}},[t._v(t._s(t.minus))]),i("v-uni-text",{staticClass:"text",style:{color:t.lineC}},[t._v(":")]),i("v-uni-text",{staticClass:"text",style:{background:t.bgC}},[t._v(t._s(t.second))])],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},7463:function(t,e,i){"use strict";var a=i("e183"),n=i.n(a);n.a},"8dc3":function(t,e,i){"use strict";i.r(e);var a=i("c492"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"8dfb":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".my_stepper[data-v-18cfec0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?38?%}.my_stepper .input_value[data-v-18cfec0a]{width:%?80?%;height:auto;text-align:center}",""]),t.exports=e},"94fd":function(t,e,i){"use strict";i.r(e);var a=i("2f12"),n=i("8dc3");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("fd96");var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"4a5dc9ab",null,!1,a["a"],c);e["default"]=r.exports},b7a4:function(t,e,i){"use strict";i.r(e);var a=i("5f91"),n=i("e013");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("1d64");var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"18cfec0a",null,!1,a["a"],c);e["default"]=r.exports},c492:function(t,e,i){"use strict";(function(t){var a=i("ee27");i("a9e3"),i("8ba4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("54f8")),s=a(i("4b89")),c=a(i("d07b")),o=t,r=(o.log,getApp().globalData),l=r.appid,d=r.appsecret,u=r.imgRemote,v={data:function(){return{token:uni.getStorageSync("cdj_token"),kind:0,arrowDirect:!1,ware:{},recommend:[],recommendLength:"",value:1,id:"",hours:"0",minu:0,second:0,attrspec:"",spec:"",nav:!1,count:0,imgRemote:u}},methods:{closeKey:function(){this.$refs.keyboard.cancel()},leftClick:function(){uni.navigateBack({delta:1})},collecting:function(){var t=this;if(this.count++,1==this.count){var e,i=this.ware.collect_status;e=2==i?1:2;var a=Math.round((new Date).getTime()/1e3),n={item_id:this.id,appid:l,timeStamp:a,status:e},o=s.default.hexMD5(c.default.objKeySort(n)+d),r=Object.assign({sign:o},n);c.default.getRequests("changeCollect",r,(function(a){var n=a.data;200==n.code?(t.count=0,t.ware.collect_status=e,i=e,1==i?c.default.Toast("取消收藏"):c.default.Toast("收藏成功")):c.default.Toast(a.msg)}))}},showKey:function(){this.$refs.popup.open()},selectSpec:function(t){this.kind=t,this.attrspec=this.ware.attr[t]},getItem:function(){var t=this,e=this.id,i=Math.round((new Date).getTime()/1e3),a={id:e,appid:l,timeStamp:i},n=s.default.hexMD5(c.default.objKeySort(a)+d),o=Object.assign({sign:n},a);c.default.getRequests("getItemById",o,(function(e){var i=e.data;200==i.code?(t.info=i.data.info,t.ware=i.data,i.data.attr.length>0?(t.spec=!0,t.attrspec=i.data.attr[0]):t.spec=!1,t.hours=i.data.panicActivity.timeRemain,c.default.getRequests("itemRecommend",o,(function(e){var i=e.data;200==i.code&&(t.recommend=i.data,i.data.list.length&&(t.recommendLength=!0))}))):c.default.Toast(i.msg)}))},detailPage:function(t){uni.navigateTo({url:"shopdetail?id="+t})},minus:function(){if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void c.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void c.default.Toast("购买数量不能为小数");this.value--,this.value<=1&&(this.value=1)},plus:function(){if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void c.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void c.default.Toast("购买数量不能为小数");this.value++},addCart:function(t){var e=this;if(this.spec){if(1==this.attrspec.is_float&&!Number.isInteger(Number(this.value)))return void c.default.Toast("购买数量不能为小数")}else if(1==this.ware.is_float&&!Number.isInteger(Number(this.value)))return void c.default.Toast("购买数量不能为小数");if(1!=t||(this.count++,1==this.count)){var i,a,o=Math.round((new Date).getTime()/1e3),r=this.ware,u=this.value,v=this.kind;0==r.attr.length?(i=r.id,a=0):(i=r.attr[v].item_id,a=r.attr[v].id);var f={appid:l,timeStamp:o,item_id:i,attr_id:a,item_num:u},p=s.default.hexMD5(c.default.objKeySort(f)+d),_=Object.assign({sign:p},f);c.default.postRequests("firstChangeNum",_,(function(a){var s=a.data;if(200==s.code){c.default.Toast("加入购物车成功");var o,r=uni.getStorageSync("classify"),l=[],d=(0,n.default)(r);try{for(d.s();!(o=d.n()).done;){var u=o.value;u.id==i&&(u.cart_num=s.data.new_num),l.push(u)}}catch(I){d.e(I)}finally{d.f()}uni.setStorageSync("classify",l);var v,f=uni.getStorageSync("recommed"),p=[],_=(0,n.default)(f);try{for(_.s();!(v=_.n()).done;){var h=v.value;h.id==i&&(h.cart_num=s.data.new_num),p.push(h)}}catch(I){_.e(I)}finally{_.f()}uni.setStorageSync("recommed",p);var m,b=uni.getStorageSync("collect"),g=[],w=(0,n.default)(b);try{for(w.s();!(m=w.n()).done;){var y=m.value;y.id==i&&(y.cart_num=s.data.new_num),g.push(y)}}catch(I){w.e(I)}finally{w.f()}uni.setStorageSync("collect",g);var x,k=uni.getStorageSync("search"),A=[],C=(0,n.default)(k);try{for(C.s();!(x=C.n()).done;){var R=x.value;R.id==i&&(R.cart_num=s.data.new_num),A.push(R)}}catch(I){C.e(I)}finally{C.f()}uni.setStorageSync("search",A),e.spec?e.attrspec.cart_num=s.data.new_num:e.ware.cart_num=s.data.new_num,setTimeout((function(){1==t&&uni.switchTab({url:"/pages/tabar/shopcart"})}),300)}else 406==s.code||407==s.code?c.default.Toast("超出活动购买数量"):c.default.Toast(a.data.msg)}))}},toParent:function(t){!this.spec||1!=this.attrspec.is_float||Number.isInteger(Number(t.val))?(this.value=t.val,this.$refs.popup.close()):c.default.Toast("购买数量不能为小数")}},onLoad:function(t){this.id=t.id},onShow:function(){this.getItem(),getApp().globalData.isReload=!1},onPageScroll:function(t){0==t.scrollTop?this.nav=!1:this.nav=!0}};e.default=v}).call(this,i("5a52")["default"])},cc59:function(t,e,i){var a=i("8dfb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8afd1088",a,!0,{sourceMap:!1,shadowMode:!1})},cf64:function(t,e,i){"use strict";i("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["val","min"],data:function(){return{value:this.val}},watch:{val:function(t){this.value=t}},methods:{minus:function(){this.$emit("minus",parseFloat(this.value))},plus:function(){this.$emit("plus",parseFloat(this.value))},showkey:function(){this.$emit("showKey")}}};e.default=a},e013:function(t,e,i){"use strict";i.r(e);var a=i("cf64"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},e183:function(t,e,i){var a=i("3170");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("034ce9f3",a,!0,{sourceMap:!1,shadowMode:!1})},eb75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk4NURDREIzNUVCNDExRUE4Njk4RUM3NUEwRTc2MzhFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk4NURDREI0NUVCNDExRUE4Njk4RUM3NUEwRTc2MzhFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTg1RENEQjE1RUI0MTFFQTg2OThFQzc1QTBFNzYzOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTg1RENEQjI1RUI0MTFFQTg2OThFQzc1QTBFNzYzOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7JUaY4AAABwElEQVR42rRWTS8DURR98yps2KmNhL2KnR/QhIWN2KiPlYhhR5oQEmuhiZUlZeWjrQXpTpqovRXRra+wsVWJaM04d9xpRjOvU/Sd5OS2bzrn9N65970xbNsWKhg7g10Ik2AU7AHDYAl8Ah/ACzBtm7k7pYafAQtvgDEwJGrDIhNwBUaPgQYQH0bYB9vE71AEZ2Fy5F2UVeILCCd+4mv90+J1KutEBVrBA2jEfTPAhTEEcjf87i7PnImQIcWHVRYtu0O1MiHBCWSSrmTANU+qxAkkTmiWTUGlIo0ka1ZKtM4pNgqklXAM4NSNOC4ajxhpSxaXGgwcbclDpAtRQ2wP0FR2uq242Ddaz4P0BXXY5vWxWL3cc5eeKYN299t/xN0Om4+MeJfCP2pP7vQv/ooS7t0qnFb1rKdENafHzHknvl5Pp0QFjQ/5hgzONRrkJW+1lgZxZxuXqO09PmQ0GGRI2+2iZd7PG4Uia35vEXwSmbzV+uLTtirDFNRwpOWebtLThimEuOp5JK7S4q387sxKgPgSa2k5Mucgfqg8MjmTLEIvmKqzuyz+baRaXPlWoXhtiYAdfOmFBzTP3XKr0vgSYAD4/aha79p8MwAAAABJRU5ErkJggg=="},ef78:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{time:{type:Number,default:0},bgC:{type:String,default:"black"},lineC:{type:String,default:"black"}},data:function(){return{totaltime:this.time,hour:"00",minus:"00",second:"00"}},methods:{start:function(){var t=this;setInterval((function(){t.totaltime--,t.totaltime<=0?window.location.reload():t.countDown()}),1e3)},countDown:function(){this.hour=Math.floor(this.totaltime/3600),this.minus=Math.floor(this.totaltime/60%60),this.second=Math.floor(this.totaltime%60),this.hour<10&&(this.hour="0"+this.hour),this.minus<10&&(this.minus="0"+this.minus),this.second<10&&(this.second="0"+this.second)}},created:function(){this.start()}};e.default=a},f9d9:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".shop_detail .good_info .active_time[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#f7c0b7;color:#fff;height:%?60?%}.shop_detail .good_info .gift_info[data-v-4a5dc9ab]{background:red;width:50%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:10px;color:#fff;border-radius:%?6?%;padding:0 1px}.shop_detail .good_info .good_img[data-v-4a5dc9ab]{width:100%;height:%?458?%;margin-top:%?20?%}.shop_detail .good_info .gift_label[data-v-4a5dc9ab]{font-size:%?24?%;color:grey}.shop_detail .good_info .judge_price[data-v-4a5dc9ab]{padding:%?5?% 0 %?20?%}.shop_detail .info[data-v-4a5dc9ab]{padding:%?20?% %?20?% 0}.shop_detail .info .full_reduction[data-v-4a5dc9ab]{color:grey;border:1px solid red;font-size:%?20?%;border-radius:2px;margin-right:%?10?%;height:%?10?%;padding:0 1px}.shop_detail .select_spec .spec_name[data-v-4a5dc9ab]{height:%?80?%;line-height:%?80?%}.shop_detail .select_spec uni-text[data-v-4a5dc9ab]{border-radius:%?10?%;padding:0 %?4?%;margin-right:%?10?%}.shop_detail .select_spec .active_spec[data-v-4a5dc9ab]{background:#87cd7c;color:#fff;border:#87cd7c 1px solid}.shop_detail .select_spec .inactive_spec[data-v-4a5dc9ab]{color:#87cd7c;border:#87cd7c 1px solid}.shop_detail .info .cart_num[data-v-4a5dc9ab]{border-top:1px solid #f7f6f6}.shop_detail .info .buy_num[data-v-4a5dc9ab]{height:%?80?%}.shop_detail .good_info .remain_num[data-v-4a5dc9ab]{position:absolute;right:%?20?%;margin-top:%?15?%;font-size:%?20?%}.shop_detail .simary .good_img[data-v-4a5dc9ab]{width:%?180?%;height:%?120?%}.shop_detail .picture_text_detail[data-v-4a5dc9ab]{padding:0 %?20?%}.shop_detail .simary[data-v-4a5dc9ab]{padding:0 0 %?20?% %?20?%}.shop_detail .simary[data-v-4a5dc9ab],\n.shop_detail .picture_text_detail[data-v-4a5dc9ab]{margin-top:%?10?%}.shop_detail .simary .title[data-v-4a5dc9ab],\n.shop_detail .picture_text_detail .title[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-weight:700;height:%?80?%}.shop_detail .simary .title uni-text[data-v-4a5dc9ab],\n.shop_detail .picture_text_detail .title uni-text[data-v-4a5dc9ab]{margin-right:%?10?%}.shop_detail .simary .all_good[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:scroll}.shop_detail .simary .all_good .column[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.shop_detail .simary .all_good .column .column_img[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.shop_detail .simary .all_good .shuiyin1[data-v-4a5dc9ab]{width:%?60?%;height:%?20?%}.shop_detail .simary .all_good>uni-view[data-v-4a5dc9ab]{width:30%;-webkit-flex-shrink:0;flex-shrink:0}.shop_detail .simary .all_good[data-v-4a5dc9ab]::-webkit-scrollbar{display:none}.shop_detail>uni-view[data-v-4a5dc9ab]{background:#fff}.shop_detail .bitmap[data-v-4a5dc9ab]{text-align:center;padding:25% 0 50%}.shop_detail .bitmap uni-image[data-v-4a5dc9ab]{width:50%}.shop_detail .is_add_cart[data-v-4a5dc9ab]{position:fixed;bottom:0;width:100%;background:#fff;border-top:1px solid #e7f6f6;height:50px}.shop_detail .is_add_cart .operateing[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?20?% 0 %?35?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50px}.shop_detail .is_add_cart .addcart_method[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;color:#fff}.shop_detail .is_add_cart .addcart_method>uni-view[data-v-4a5dc9ab]{height:30px;padding:0 %?20?%;line-height:30px}.shop_detail .is_add_cart .addcart_method .self_buy[data-v-4a5dc9ab]{background:#addb8c;border-radius:%?10?% 0 0 %?10?%}.shop_detail .is_add_cart .collect[data-v-4a5dc9ab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:grey}.shop_detail .is_add_cart .addcart_method .other_buy[data-v-4a5dc9ab]{background:#009a44;border-radius:0 %?12?% %?12?% 0}.shop_detail .judge_price .add_leftpx[data-v-4a5dc9ab]{margin-left:%?10?%}.shop_detail .nab_title[data-v-4a5dc9ab]{position:fixed;width:100%;z-index:5}.shop_detail .nab_title1[data-v-4a5dc9ab]{background:#fff!important;border-bottom:1px solid #efefef}.shop_detail .nab_title2[data-v-4a5dc9ab]{background:transparent!important}",""]),t.exports=e},fd96:function(t,e,i){"use strict";var a=i("4bb4"),n=i.n(a);n.a}}]);