(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-suyuan-journey"],{"07d3":function(n,t,e){"use strict";var a={myS_tabbar:e("1cd4").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"journey"},[e("div",{staticClass:"solution"},[0!=n.journey.sign_for_time?e("div",[e("i",{staticClass:"iconfont icon-yuandian"}),e("p",[n._v("已签收")]),e("p",[n._v("签收时间: "+n._s(n.journey.sign_for_time))])]):n._e(),0!=n.journey.delivery_time?e("div",[e("i",{staticClass:"iconfont icon-yuandian"}),e("p",[n._v("配送")]),e("p",[n._v("配送时间:"+n._s(n.journey.delivery_time))])]):n._e(),0!=n.journey.sorting_time?e("div",[e("i",{staticClass:"iconfont icon-yuandian"}),e("p",[n._v("分拣")]),e("p",[n._v("分拣时间: "+n._s(n.journey.sorting_time))])]):n._e(),0!=n.journey.storage_time?e("div",[e("i",{staticClass:"iconfont icon-yuandian"}),e("p",[n._v("入库")]),e("p",[n._v("入库时间: "+n._s(n.journey.storage_time))])]):n._e(),0!=n.journey.purchase_time?e("div",[e("i",{staticClass:"iconfont icon-yuandian"}),e("p",[n._v("采购")]),e("p",[n._v("采购时间: "+n._s(n.journey.purchase_time))])]):n._e(),0!=n.journey.created_at?e("div",[e("i",{staticClass:"iconfont icon-yuandian"}),e("p",[n._v("下单")]),e("p",[n._v("下单时间: "+n._s(n.journey.created_at))])]):n._e()]),n._m(0),e("my-s_tabbar",{attrs:{activeIndex:"2"}})],1)},o=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("address",{staticClass:"center"},[n._v("技术支持:黑蚂蚁科技"),e("br"),n._v("Coryright ©2016-2019")])}];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},"1cd4":function(n,t,e){"use strict";e.r(t);var a=e("3674"),i=e("74f0");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("4c14");var r,c=e("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"40f94f0b",null,!1,a["a"],r);t["default"]=u.exports},2934:function(n,t,e){"use strict";var a=e("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("4b89")),o=a(e("d07b")),r=getApp().globalData,c=r.appid,u=r.appsecret,s=(r.imgRemote,r.navBar,{data:function(){return{details:!1,journey:[],status1:!0,status2:!0}},created:function(){this.traceBack()},methods:{traceBack:function(){var n=this,t=localStorage.getItem("shopId"),e=Math.round((new Date).getTime()/1e3),a={appid:c,old:t,timeStamp:e},r=i.default.hexMD5(o.default.objKeySort(a)+u),s=Object.assign({sign:r},a);o.default.getRequests("traceBack",s,(function(t){200==t.data.code&&(n.journey=t.data.data.info,1==n.journey.order_status?(n.status1=!1,n.status2=!1):2==n.journey.order_status?n.status1=!1:(n.status1=!0,n.status2=!0))}))}}});t.default=s},3674:function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticStyle:{height:"50px"}}),e("div",{staticClass:"suyuan_tabar"},[e("ul",{staticClass:"suyuan_nav"},n._l(n.nav,(function(t,a){return e("li",{on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.color(t)}}},[n.activeIndex==a?e("img",{attrs:{src:n.imgPath+t.activeimg}}):e("img",{attrs:{src:n.imgPath+t.img}}),e("span",{class:{green:n.activeIndex==a}},[n._v(n._s(t.title))])])})),0)])])},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},"3c9c":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,".suyuan_tabar[data-v-40f94f0b]{position:fixed;bottom:0;width:100%}.suyuan_nav[data-v-40f94f0b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:0;background:#f5f5f5;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50px;font-size:12px}.suyuan_nav img[data-v-40f94f0b]{display:block;width:25%;margin:0 25% 2% 25%}.suyuan_nav li[data-v-40f94f0b]{height:100%;width:25%;list-style:none;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.suyuan_nav li .green[data-v-40f94f0b]{color:#009a44}.suyuan_nav li span[data-v-40f94f0b]{color:#9c9c9c}",""]),n.exports=t},"4b89":function(n,t,e){e("d3b7"),e("ac1f"),e("25f0"),e("5319");var a=function(n,t){return n<<t|n>>>32-t},i=function(n,t){var e,a,i,o,r;return i=2147483648&n,o=2147483648&t,e=1073741824&n,a=1073741824&t,r=(1073741823&n)+(1073741823&t),e&a?2147483648^r^i^o:e|a?1073741824&r?3221225472^r^i^o:1073741824^r^i^o:r^i^o},o=function(n,t,e){return n&t|~n&e},r=function(n,t,e){return n&e|t&~e},c=function(n,t,e){return n^t^e},u=function(n,t,e){return t^(n|~e)},s=function(n,t,e,r,c,u,s){return n=i(n,i(i(o(t,e,r),c),s)),i(a(n,u),t)},d=function(n,t,e,o,c,u,s){return n=i(n,i(i(r(t,e,o),c),s)),i(a(n,u),t)},l=function(n,t,e,o,r,u,s){return n=i(n,i(i(c(t,e,o),r),s)),i(a(n,u),t)},f=function(n,t,e,o,r,c,s){return n=i(n,i(i(u(t,e,o),r),s)),i(a(n,c),t)},g=function(n){var t,e=n.length,a=e+8,i=(a-a%64)/64,o=16*(i+1),r=Array(o-1),c=0,u=0;while(u<e)t=(u-u%4)/4,c=u%4*8,r[t]=r[t]|n.charCodeAt(u)<<c,u++;return t=(u-u%4)/4,c=u%4*8,r[t]=r[t]|128<<c,r[o-2]=e<<3,r[o-1]=e>>>29,r},p=function(n){var t,e,a="",i="";for(e=0;e<=3;e++)t=n>>>8*e&255,i="0"+t.toString(16),a+=i.substr(i.length-2,2);return a},v=function(n){n=n.replace(/\x0d\x0a/g,"\n");for(var t="",e=0;e<n.length;e++){var a=n.charCodeAt(e);a<128?t+=String.fromCharCode(a):a>127&&a<2048?(t+=String.fromCharCode(a>>6|192),t+=String.fromCharCode(63&a|128)):(t+=String.fromCharCode(a>>12|224),t+=String.fromCharCode(a>>6&63|128),t+=String.fromCharCode(63&a|128))}return t};function h(n){var t,e,a,o,r,c,u,h,y,b=Array(),m=7,_=12,j=17,w=22,x=5,k=9,S=14,C=20,T=4,M=11,z=16,A=23,O=6,q=10,D=15,B=21;for(n=v(n),b=g(n),c=1732584193,u=4023233417,h=2562383102,y=271733878,t=0;t<b.length;t+=16)e=c,a=u,o=h,r=y,c=s(c,u,h,y,b[t+0],m,3614090360),y=s(y,c,u,h,b[t+1],_,3905402710),h=s(h,y,c,u,b[t+2],j,606105819),u=s(u,h,y,c,b[t+3],w,3250441966),c=s(c,u,h,y,b[t+4],m,4118548399),y=s(y,c,u,h,b[t+5],_,1200080426),h=s(h,y,c,u,b[t+6],j,2821735955),u=s(u,h,y,c,b[t+7],w,4249261313),c=s(c,u,h,y,b[t+8],m,1770035416),y=s(y,c,u,h,b[t+9],_,2336552879),h=s(h,y,c,u,b[t+10],j,4294925233),u=s(u,h,y,c,b[t+11],w,2304563134),c=s(c,u,h,y,b[t+12],m,1804603682),y=s(y,c,u,h,b[t+13],_,4254626195),h=s(h,y,c,u,b[t+14],j,2792965006),u=s(u,h,y,c,b[t+15],w,1236535329),c=d(c,u,h,y,b[t+1],x,4129170786),y=d(y,c,u,h,b[t+6],k,3225465664),h=d(h,y,c,u,b[t+11],S,643717713),u=d(u,h,y,c,b[t+0],C,3921069994),c=d(c,u,h,y,b[t+5],x,3593408605),y=d(y,c,u,h,b[t+10],k,38016083),h=d(h,y,c,u,b[t+15],S,3634488961),u=d(u,h,y,c,b[t+4],C,3889429448),c=d(c,u,h,y,b[t+9],x,568446438),y=d(y,c,u,h,b[t+14],k,3275163606),h=d(h,y,c,u,b[t+3],S,4107603335),u=d(u,h,y,c,b[t+8],C,1163531501),c=d(c,u,h,y,b[t+13],x,2850285829),y=d(y,c,u,h,b[t+2],k,4243563512),h=d(h,y,c,u,b[t+7],S,1735328473),u=d(u,h,y,c,b[t+12],C,2368359562),c=l(c,u,h,y,b[t+5],T,4294588738),y=l(y,c,u,h,b[t+8],M,2272392833),h=l(h,y,c,u,b[t+11],z,1839030562),u=l(u,h,y,c,b[t+14],A,4259657740),c=l(c,u,h,y,b[t+1],T,2763975236),y=l(y,c,u,h,b[t+4],M,1272893353),h=l(h,y,c,u,b[t+7],z,4139469664),u=l(u,h,y,c,b[t+10],A,3200236656),c=l(c,u,h,y,b[t+13],T,681279174),y=l(y,c,u,h,b[t+0],M,3936430074),h=l(h,y,c,u,b[t+3],z,3572445317),u=l(u,h,y,c,b[t+6],A,76029189),c=l(c,u,h,y,b[t+9],T,3654602809),y=l(y,c,u,h,b[t+12],M,3873151461),h=l(h,y,c,u,b[t+15],z,530742520),u=l(u,h,y,c,b[t+2],A,3299628645),c=f(c,u,h,y,b[t+0],O,4096336452),y=f(y,c,u,h,b[t+7],q,1126891415),h=f(h,y,c,u,b[t+14],D,2878612391),u=f(u,h,y,c,b[t+5],B,4237533241),c=f(c,u,h,y,b[t+12],O,1700485571),y=f(y,c,u,h,b[t+3],q,2399980690),h=f(h,y,c,u,b[t+10],D,4293915773),u=f(u,h,y,c,b[t+1],B,2240044497),c=f(c,u,h,y,b[t+8],O,1873313359),y=f(y,c,u,h,b[t+15],q,4264355552),h=f(h,y,c,u,b[t+6],D,2734768916),u=f(u,h,y,c,b[t+13],B,1309151649),c=f(c,u,h,y,b[t+4],O,4149444226),y=f(y,c,u,h,b[t+11],q,3174756917),h=f(h,y,c,u,b[t+2],D,718787259),u=f(u,h,y,c,b[t+9],B,3951481745),c=i(c,e),u=i(u,a),h=i(h,o),y=i(y,r);var P=p(c)+p(u)+p(h)+p(y);return P.toLowerCase()}n.exports={hexMD5:h}},"4c14":function(n,t,e){"use strict";var a=e("6837"),i=e.n(a);i.a},6837:function(n,t,e){var a=e("3c9c");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("4fa584e2",a,!0,{sourceMap:!1,shadowMode:!1})},"70a4":function(n,t,e){var a=e("8420");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("3bc76776",a,!0,{sourceMap:!1,shadowMode:!1})},"74f0":function(n,t,e){"use strict";e.r(t);var a=e("b016"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},8420:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* @import "//at.alicdn.com/t/font_1480408_n96i4988y6.css"; */.journey[data-v-6f61cb4c]{position:fixed;width:100%;height:100%}.journey address[data-v-6f61cb4c]{text-align:center;font-size:10px;\n\t/* padding: 8% 0; */position:fixed;bottom:60px;width:100%;font-style:normal}.journey[data-v-6f61cb4c]{background:#c5e3d0;padding-top:3%}.journey .solution[data-v-6f61cb4c]{background:#fff;padding:4% 4%;margin:0 3%;box-shadow:0 1px 2px grey;border-radius:5px}.journey .solution div[data-v-6f61cb4c]{border-left:2px solid #1a763d;font-size:14px;height:16.6%}.journey .solution div[data-v-6f61cb4c]:nth-child(n+2){color:grey;border-left:2px solid grey;padding:0 0 12% 4%}.journey .solution div[data-v-6f61cb4c]:nth-child(1){padding:4% 0 10% 4%}.journey .solution div:first-child i+p[data-v-6f61cb4c]{color:#1a763d}.journey .solution div i[data-v-6f61cb4c]{position:fixed;left:5.2%}.journey .solution div:first-child i[data-v-6f61cb4c]{color:#1a763d}@media(max-width:320px){.journey .solution div i[data-v-6f61cb4c]{left:4.6%}}@media(min-width:320px max-width:360px){.journey .solution div i[data-v-6f61cb4c]{left:5.5%}}@media(min-width:360px max-width:412px){.journey .solution div i[data-v-6f61cb4c]{left:5.8%}}',""]),n.exports=t},"8a70":function(n,t,e){"use strict";var a=e("70a4"),i=e.n(a);i.a},b016:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="/pages",i="../../new/static/img/",o={props:["activeIndex"],data:function(){return{imgPath:i,nav:[{title:"查询结果",link:a+"/suyuan/index",activeimg:"resultgreen.png",img:"resultgray.png"},{title:"产品介绍",link:a+"/suyuan/product",activeimg:"productgreen.png",img:"productgray.png"},{title:"全程追溯",link:a+"/suyuan/journey",activeimg:"journeygreen.png",img:"journeygray.png"},{title:"质检报告",link:a+"/suyuan/quantity",activeimg:"quantitygreen.png",img:"quantitygray.png"}]}},methods:{color:function(n){this.$route.query.id;this.$router.push({path:n.link})}}};t.default=o},b38c:function(n,t,e){"use strict";e.r(t);var a=e("07d3"),i=e("df6a");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("8a70");var r,c=e("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"6f61cb4c",null,!1,a["a"],r);t["default"]=u.exports},d07b:function(n,t,e){e("4160"),e("4e82"),e("b64b"),e("d3b7"),e("25f0"),e("159b");var a=getApp(),i={active:a.globalData.active},o=a.globalData.rootUrl+"/mobileOrder/";if(uni.getStorageSync("cdj_token"))var r={Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")};function c(n,t,e){uni.showLoading({title:"加载中...",duration:2e3,mask:!0,success:function(a){uni.request({url:o+n,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(t,i),success:function(n){e(n),void 0!=n.header.authorization&&uni.setStorageSync("cdj_token",n.header.authorization),400==n.data.code&&uni.showToast({title:n.data.msg,icon:"none",duration:1e3,success:function(){}}),401==n.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==n.data.code&&uni.navigateTo({url:"/pages/account/404"}),uni.hideLoading()},fail:function(n){uni.showModal({title:n.data,content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(n){},complete:function(n){}})}function u(n,t,e){uni.setNavigationBarTitle({title:uni.getStorageSync("titleKey")}),uni.request({url:o+n,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(t,i),success:function(n){e(n),void 0!=n.header.authorization&&uni.setStorageSync("cdj_token",n.header.authorization),401==n.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==n.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==n.data.code&&uni.navigateTo({url:"/pages/account/service"})},fail:function(n){uni.showModal({title:n.data,content:"网络出错，请刷新重试",showCancel:!1})}})}function s(n,t,e){uni.showLoading({title:"加载中",mask:!0,success:function(a){uni.request({url:o+n,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(t,i),success:function(n){e(n),void 0!=n.header.authorization&&uni.setStorageSync("cdj_token",n.header.authorization),400==n.data.code&&uni.showToast({title:n.data.msg,icon:"none",duration:1e3,success:function(){}}),401==n.data.code&&uni.navigateTo({url:"/pages/account/login"}),403==n.data.code&&uni.showToast({title:"账号已禁用",icon:"none",duration:1e3,success:function(){uni.navigateTo({url:"/pages/account/login"})}}),404==n.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==n.data.code&&uni.showToast({title:"抱歉，您的服务已到期，请联系《菜东家》工作人员续费！",icon:"none",duration:2e3}),uni.hideLoading()},fail:function(n){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(n){},complete:function(n){}})}function d(n,t,e){uni.setNavigationBarTitle({title:uni.getStorageSync("titleKey")}),uni.request({url:o+n,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(t,i),success:function(n){e(n),void 0!=n.header.authorization&&uni.setStorageSync("cdj_token",n.header.authorization),401==n.data.code&&uni.navigateTo({url:"/pages/account/login"})},fail:function(n){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})}function l(n){for(var t=Object.keys(n).sort(),e={},a="",i=0;i<t.length;i++)e[t[i]]=n[t[i]];return Object.keys(e).forEach((function(n){a+="&"+n+"="+e[n]})),a.substr(1)}function f(n){uni.showToast({title:n,icon:"none",duration:1e3})}function g(){var n=new Date,t=n.getMonth(),e=++t,a=new Date(n.getFullYear(),e,1),i=864e5;return new Date(a.getTime()-i)}function p(){var n=new Date,t=n.getFullYear().toString(),e=(n.getMonth()+1).toString(),a="";a=e<10?"0"+e:e;n.getDate().toString();var i=g().getDate(),o=t+"-"+a+"-01",r=t+"-"+a+"-"+i,c=[o,r];return c}function v(n){return new Promise((function(t,e){window.init=function(){t(BMap)};var a=document.createElement("script");a.type="text/javascript",a.src="http://api.map.baidu.com/api?v=2.0&ak="+n+"&callback=init",a.onerror=e,document.head.appendChild(a)}))}function h(){}function y(){}n.exports={getRequest:c,getRequests:u,postRequest:s,postRequests:d,Toast:f,hideTabBar:h,showTabBar:y,header:r,objKeySort:l,thedefaulttime:p,MP:v}},df6a:function(n,t,e){"use strict";e.r(t);var a=e("2934"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a}}]);