(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-suyuan-quantity"],{"1cd4":function(t,e,n){"use strict";n.r(e);var a=n("6322"),i=n("74f0");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("45b5");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"3d5c3f01",null,!1,a["a"],r);e["default"]=u.exports},2569:function(t,e,n){"use strict";var a={"my-s_tabbar":n("1cd4").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detection",class:{quantity:t.show}},[t.show?a("div",{staticClass:"table"},[a("div",{staticClass:"menu"},[a("p",[t._v(t._s(t.observe.info.date))]),a("p",[t._v(t._s(t.observe.info.title))])]),a("table",{attrs:{width:"92%"}},[a("tr",[a("th",{attrs:{colspan:"5"}},[t._v(t._s(t.observe.info.title))])]),a("tr",t._l(t.title,(function(e,n){return a("td",[t._v(t._s(e.name))])})),0),t._l(t.observe.test,(function(e,n){return a("tr",[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(e.project_name))]),a("td",[t._v(t._s(e.sample_name))]),a("td",[t._v(t._s(e.test_value))]),a("td",[t._v(t._s(e.test_value))])])}))],2),a("p",[t._v("检测单位:菜东家蔬果农残检测中心")]),a("div",{staticClass:"audit"},[a("span",[t._v("检测时间:"+t._s(t.observe.info.date))]),a("span",[t._v("主检:　"+t._s(t.observe.info.inspector))]),a("span",[t._v("审核:　"+t._s(t.observe.info.inspector))])])]):a("div",{staticClass:"img"},[a("img",{attrs:{src:n("57aa")}})]),t._m(0),a("my-s_tabbar",{attrs:{activeIndex:"3"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("address",{staticClass:"center"},[t._v("技术支持:黑蚂蚁科技"),n("br"),t._v("Coryright ©2016-2019")])}];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"27dc":function(t,e,n){"use strict";var a=n("bd95"),i=n.n(a);i.a},3764:function(t,e,n){var a=n("de77");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2772aa0f",a,!0,{sourceMap:!1,shadowMode:!1})},"3d1e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".detection[data-v-83f9ce14]{position:fixed;height:100%;width:100%}.quantity[data-v-83f9ce14]{background:#c5e3d0;padding:3% 0 8%}.quantity .table table[data-v-83f9ce14]{border:1px solid #000;margin:0 auto}.quantity .table[data-v-83f9ce14]{width:93%;background:#fff;margin:0 auto;height:82%;-webkit-box-shadow:0 1px 2px grey;box-shadow:0 1px 2px grey;border-radius:5px}.quantity .table .menu[data-v-83f9ce14]{font-size:8px;display:-webkit-box;display:-webkit-flex;display:flex;padding:5px 0}.quantity .table table tr[data-v-83f9ce14]{border:1px solid #000;text-align:center}.quantity .table table tr[data-v-83f9ce14]:first-child{height:36px}.quantity .table table tr[data-v-83f9ce14]:nth-child(n+2){height:25px;font-size:12px}.quantity .table table tr:nth-child(n+2) td[data-v-83f9ce14]{width:20%}.quantity .table table tr td[data-v-83f9ce14]{border:1px solid #000}.quantity .table .audit[data-v-83f9ce14]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 4%;font-size:12px;position:fixed;bottom:24%;width:93%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.quantity .table>p[data-v-83f9ce14]{padding:2% 0 0 4%;font-size:14px}.quantity .table .menu p[data-v-83f9ce14]{font-size:8px;width:50%}\n\n/*.quantity address{font-size:14px;margin:0 auto;width:100%;text-align: center;}*/.detection .img[data-v-83f9ce14]{display:-webkit-box;display:-webkit-flex;display:flex;height:86%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.detection .img img[data-v-83f9ce14]{width:30%}.detection address[data-v-83f9ce14]{font-style:normal;position:fixed;font-size:10px;margin:0 auto;width:100%;text-align:center;bottom:10%}body[data-v-83f9ce14]{height:100%!important}",""]),t.exports=e},"43c1":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("4b89")),o=a(n("d07b")),r=getApp().globalData,c=r.appid,u=r.appsecret,s=(r.imgRemote,r.navBar,{data:function(){return{show:!0,title:[{name:"序号"},{name:"检测项目"},{name:"样品名称"},{name:"抑制率(%)"},{name:"检测结果"}],observe:{info:{title:"",date:"",inspector:""}}}},created:function(){this.result()},methods:{result:function(){var t=this,e=(localStorage.getItem("resultId"),Math.round((new Date).getTime()/1e3)),n={appid:c,timeStamp:e},a=i.default.hexMD5(o.default.objKeySort(n)+u),r=Object.assign({sign:a},n);o.default.getRequests("tbTesting",r,(function(e){var n=e.data.data;200==e.data.code&&(n.test.length?t.observe=n:t.show=!1)}))}}});e.default=s},"45b5":function(t,e,n){"use strict";var a=n("3764"),i=n.n(a);i.a},"4b89":function(t,e,n){n("d3b7"),n("ac1f"),n("25f0"),n("5319");var a=function(t,e){return t<<e|t>>>32-e},i=function(t,e){var n,a,i,o,r;return i=2147483648&t,o=2147483648&e,n=1073741824&t,a=1073741824&e,r=(1073741823&t)+(1073741823&e),n&a?2147483648^r^i^o:n|a?1073741824&r?3221225472^r^i^o:1073741824^r^i^o:r^i^o},o=function(t,e,n){return t&e|~t&n},r=function(t,e,n){return t&n|e&~n},c=function(t,e,n){return t^e^n},u=function(t,e,n){return e^(t|~n)},s=function(t,e,n,r,c,u,s){return t=i(t,i(i(o(e,n,r),c),s)),i(a(t,u),e)},d=function(t,e,n,o,c,u,s){return t=i(t,i(i(r(e,n,o),c),s)),i(a(t,u),e)},l=function(t,e,n,o,r,u,s){return t=i(t,i(i(c(e,n,o),r),s)),i(a(t,u),e)},f=function(t,e,n,o,r,c,s){return t=i(t,i(i(u(e,n,o),r),s)),i(a(t,c),e)},p=function(t){var e,n=t.length,a=n+8,i=(a-a%64)/64,o=16*(i+1),r=Array(o-1),c=0,u=0;while(u<n)e=(u-u%4)/4,c=u%4*8,r[e]=r[e]|t.charCodeAt(u)<<c,u++;return e=(u-u%4)/4,c=u%4*8,r[e]=r[e]|128<<c,r[o-2]=n<<3,r[o-1]=n>>>29,r},g=function(t){var e,n,a="",i="";for(n=0;n<=3;n++)e=t>>>8*n&255,i="0"+e.toString(16),a+=i.substr(i.length-2,2);return a},v=function(t){t=t.replace(/\x0d\x0a/g,"\n");for(var e="",n=0;n<t.length;n++){var a=t.charCodeAt(n);a<128?e+=String.fromCharCode(a):a>127&&a<2048?(e+=String.fromCharCode(a>>6|192),e+=String.fromCharCode(63&a|128)):(e+=String.fromCharCode(a>>12|224),e+=String.fromCharCode(a>>6&63|128),e+=String.fromCharCode(63&a|128))}return e};function b(t){var e,n,a,o,r,c,u,b,h,y=Array(),m=7,w=12,x=17,_=22,k=5,j=9,S=14,C=20,q=4,A=11,T=16,z=23,M=6,O=10,D=15,P=21;for(t=v(t),y=p(t),c=1732584193,u=4023233417,b=2562383102,h=271733878,e=0;e<y.length;e+=16)n=c,a=u,o=b,r=h,c=s(c,u,b,h,y[e+0],m,3614090360),h=s(h,c,u,b,y[e+1],w,3905402710),b=s(b,h,c,u,y[e+2],x,606105819),u=s(u,b,h,c,y[e+3],_,3250441966),c=s(c,u,b,h,y[e+4],m,4118548399),h=s(h,c,u,b,y[e+5],w,1200080426),b=s(b,h,c,u,y[e+6],x,2821735955),u=s(u,b,h,c,y[e+7],_,4249261313),c=s(c,u,b,h,y[e+8],m,1770035416),h=s(h,c,u,b,y[e+9],w,2336552879),b=s(b,h,c,u,y[e+10],x,4294925233),u=s(u,b,h,c,y[e+11],_,2304563134),c=s(c,u,b,h,y[e+12],m,1804603682),h=s(h,c,u,b,y[e+13],w,4254626195),b=s(b,h,c,u,y[e+14],x,2792965006),u=s(u,b,h,c,y[e+15],_,1236535329),c=d(c,u,b,h,y[e+1],k,4129170786),h=d(h,c,u,b,y[e+6],j,3225465664),b=d(b,h,c,u,y[e+11],S,643717713),u=d(u,b,h,c,y[e+0],C,3921069994),c=d(c,u,b,h,y[e+5],k,3593408605),h=d(h,c,u,b,y[e+10],j,38016083),b=d(b,h,c,u,y[e+15],S,3634488961),u=d(u,b,h,c,y[e+4],C,3889429448),c=d(c,u,b,h,y[e+9],k,568446438),h=d(h,c,u,b,y[e+14],j,3275163606),b=d(b,h,c,u,y[e+3],S,4107603335),u=d(u,b,h,c,y[e+8],C,1163531501),c=d(c,u,b,h,y[e+13],k,2850285829),h=d(h,c,u,b,y[e+2],j,4243563512),b=d(b,h,c,u,y[e+7],S,1735328473),u=d(u,b,h,c,y[e+12],C,2368359562),c=l(c,u,b,h,y[e+5],q,4294588738),h=l(h,c,u,b,y[e+8],A,2272392833),b=l(b,h,c,u,y[e+11],T,1839030562),u=l(u,b,h,c,y[e+14],z,4259657740),c=l(c,u,b,h,y[e+1],q,2763975236),h=l(h,c,u,b,y[e+4],A,1272893353),b=l(b,h,c,u,y[e+7],T,4139469664),u=l(u,b,h,c,y[e+10],z,3200236656),c=l(c,u,b,h,y[e+13],q,681279174),h=l(h,c,u,b,y[e+0],A,3936430074),b=l(b,h,c,u,y[e+3],T,3572445317),u=l(u,b,h,c,y[e+6],z,76029189),c=l(c,u,b,h,y[e+9],q,3654602809),h=l(h,c,u,b,y[e+12],A,3873151461),b=l(b,h,c,u,y[e+15],T,530742520),u=l(u,b,h,c,y[e+2],z,3299628645),c=f(c,u,b,h,y[e+0],M,4096336452),h=f(h,c,u,b,y[e+7],O,1126891415),b=f(b,h,c,u,y[e+14],D,2878612391),u=f(u,b,h,c,y[e+5],P,4237533241),c=f(c,u,b,h,y[e+12],M,1700485571),h=f(h,c,u,b,y[e+3],O,2399980690),b=f(b,h,c,u,y[e+10],D,4293915773),u=f(u,b,h,c,y[e+1],P,2240044497),c=f(c,u,b,h,y[e+8],M,1873313359),h=f(h,c,u,b,y[e+15],O,4264355552),b=f(b,h,c,u,y[e+6],D,2734768916),u=f(u,b,h,c,y[e+13],P,1309151649),c=f(c,u,b,h,y[e+4],M,4149444226),h=f(h,c,u,b,y[e+11],O,3174756917),b=f(b,h,c,u,y[e+2],D,718787259),u=f(u,b,h,c,y[e+9],P,3951481745),c=i(c,n),u=i(u,a),b=i(b,o),h=i(h,r);var E=g(c)+g(u)+g(b)+g(h);return E.toLowerCase()}t.exports={hexMD5:b}},5183:function(t,e,n){"use strict";n.r(e);var a=n("43c1"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},5196:function(t,e,n){"use strict";n.r(e);var a=n("2569"),i=n("5183");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("27dc");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"83f9ce14",null,!1,a["a"],r);e["default"]=u.exports},"57aa":function(t,e,n){t.exports=n.p+"static/img/detection.5467b4f9.png"},6322:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suyuan_tabar"},[n("ul",{staticClass:"suyuan_nav"},t._l(t.nav,(function(e,a){return n("li",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.color(e)}}},[t.activeIndex==a?n("img",{attrs:{src:t.imgPath+e.activeimg}}):n("img",{attrs:{src:t.imgPath+e.img}}),n("span",{class:{green:t.activeIndex==a}},[t._v(t._s(e.title))])])})),0)])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"74f0":function(t,e,n){"use strict";n.r(e);var a=n("b016"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},b016:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="/pages",i="../../new/static/img/",o={props:["activeIndex"],data:function(){return{imgPath:i,nav:[{title:"查询结果",link:a+"/suyuan/index",activeimg:"resultgreen.png",img:"resultgray.png"},{title:"产品介绍",link:a+"/suyuan/product",activeimg:"productgreen.png",img:"productgray.png"},{title:"全程追溯",link:a+"/suyuan/journey",activeimg:"journeygreen.png",img:"journeygray.png"},{title:"质检报告",link:a+"/suyuan/quantity",activeimg:"quantitygreen.png",img:"quantitygray.png"}]}},methods:{color:function(t){this.$route.query.id;this.$router.push({path:t.link})}}};e.default=o},bd95:function(t,e,n){var a=n("3d1e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("62fc6260",a,!0,{sourceMap:!1,shadowMode:!1})},d07b:function(t,e,n){n("4160"),n("4e82"),n("b64b"),n("d3b7"),n("25f0"),n("159b");var a=getApp(),i={active:a.globalData.active},o=a.globalData.rootUrl+"/mobileOrder/";if(uni.getStorageSync("cdj_token"))var r={Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")};function c(t,e,n){uni.showLoading({title:"加载中...",duration:2e3,mask:!0,success:function(a){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:1e3,success:function(){}}),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),uni.hideLoading()},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function u(t,e,n){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==t.data.code&&uni.navigateTo({url:"/pages/account/service"})},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})}function s(t,e,n){uni.showLoading({title:"加载中",mask:!0,success:function(a){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:1e3,success:function(){}}),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),403==t.data.code&&uni.showToast({title:"账号已禁用",icon:"none",duration:1e3,success:function(){uni.navigateTo({url:"/pages/account/login"})}}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==t.data.code&&uni.showToast({title:"抱歉，您的服务已到期，请联系《菜东家》工作人员续费！",icon:"none",duration:2e3}),uni.hideLoading()},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function d(t,e,n){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"})},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})}function l(t){for(var e=Object.keys(t).sort(),n={},a="",i=0;i<e.length;i++)n[e[i]]=t[e[i]];return Object.keys(n).forEach((function(t){a+="&"+t+"="+n[t]})),a.substr(1)}function f(t){uni.showToast({title:t,icon:"none",duration:1e3})}function p(){var t=new Date,e=t.getMonth(),n=++e,a=new Date(t.getFullYear(),n,1),i=864e5;return new Date(a.getTime()-i)}function g(){var t=new Date,e=t.getFullYear().toString(),n=(t.getMonth()+1).toString(),a="";a=n<10?"0"+n:n;t.getDate().toString();var i=p().getDate(),o=e+"-"+a+"-01",r=e+"-"+a+"-"+i,c=[o,r];return c}function v(t){return new Promise((function(e,n){window.init=function(){e(BMap)};var a=document.createElement("script");a.type="text/javascript",a.src="http://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",a.onerror=n,document.head.appendChild(a)}))}t.exports={getRequest:c,getRequests:u,postRequest:s,postRequests:d,Toast:f,header:r,objKeySort:l,thedefaulttime:g,MP:v}},de77:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".suyuan_tabar[data-v-3d5c3f01]{position:fixed;bottom:0;width:100%}.suyuan_nav[data-v-3d5c3f01]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:0;background:#f5f5f5;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50px;font-size:12px}.suyuan_nav img[data-v-3d5c3f01]{display:block;width:25%;margin:0 25% 2% 25%}.suyuan_nav li[data-v-3d5c3f01]{height:100%;width:25%;list-style:none;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.suyuan_nav li .green[data-v-3d5c3f01]{color:#009a44}.suyuan_nav li span[data-v-3d5c3f01]{color:#9c9c9c}",""]),t.exports=e}}]);