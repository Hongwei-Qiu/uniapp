(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-suyuan-quantity"],{"0b1b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".detection[data-v-ab38aeae]{position:fixed;height:100%;width:100%}.quantity[data-v-ab38aeae]{background:#c5e3d0;padding:3% 0 8%}.quantity .table table[data-v-ab38aeae]{border:1px solid #000;margin:0 auto}.quantity .table[data-v-ab38aeae]{width:93%;background:#fff;margin:0 auto;height:82%;-webkit-box-shadow:0 1px 2px grey;box-shadow:0 1px 2px grey;border-radius:5px}.quantity .table .menu[data-v-ab38aeae]{font-size:8px;display:-webkit-box;display:-webkit-flex;display:flex;padding:5px 0}.quantity .table table tr[data-v-ab38aeae]{border:1px solid #000;text-align:center}.quantity .table table tr[data-v-ab38aeae]:first-child{height:36px}.quantity .table table tr[data-v-ab38aeae]:nth-child(n+2){height:25px;font-size:12px}.quantity .table table tr:nth-child(n+2) td[data-v-ab38aeae]{width:20%}.quantity .table table tr td[data-v-ab38aeae]{border:1px solid #000}.quantity .table .audit[data-v-ab38aeae]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 4%;font-size:12px;position:fixed;bottom:24%;width:93%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.quantity .table>p[data-v-ab38aeae]{padding:2% 0 0 4%;font-size:14px}.quantity .table .menu p[data-v-ab38aeae]{font-size:8px;width:50%}\n\n/*.quantity address{font-size:14px;margin:0 auto;width:100%;text-align: center;}*/.detection .img[data-v-ab38aeae]{display:-webkit-box;display:-webkit-flex;display:flex;height:86%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.detection .img img[data-v-ab38aeae]{width:30%}.detection address[data-v-ab38aeae]{font-style:normal;position:fixed;font-size:10px;margin:0 auto;width:100%;text-align:center;bottom:10%}body[data-v-ab38aeae]{height:100%!important}",""]),t.exports=e},"0bf6":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suyuan_tabar"},[a("ul",{staticClass:"suyuan_nav"},t._l(t.nav,(function(e,n){return a("li",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.color(e)}}},[t.activeIndex==n?a("img",{attrs:{src:t.imgPath+e.activeimg}}):a("img",{attrs:{src:t.imgPath+e.img}}),a("span",{class:{green:t.activeIndex==n}},[t._v(t._s(e.title))])])})),0)])},o=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},2122:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="/pages",i="../../new/static/img/",o={props:["activeIndex"],data:function(){return{imgPath:i,nav:[{title:"查询结果",link:n+"/suyuan/index",activeimg:"resultgreen.png",img:"resultgray.png"},{title:"产品介绍",link:n+"/suyuan/product",activeimg:"productgreen.png",img:"productgray.png"},{title:"全程追溯",link:n+"/suyuan/journey",activeimg:"journeygreen.png",img:"journeygray.png"},{title:"质检报告",link:n+"/suyuan/quantity",activeimg:"quantitygreen.png",img:"quantitygray.png"}]}},methods:{color:function(t){this.$route.query.id;this.$router.push({path:t.link})}}};e.default=o},"24ca":function(t,e,a){var n=a("0b1b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("ddcc9590",n,!0,{sourceMap:!1,shadowMode:!1})},"30f6":function(t,e,a){"use strict";a.r(e);var n=a("4a67"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},3782:function(t,e,a){a("d3b7"),a("ac1f"),a("25f0"),a("5319");var n=function(t,e){return t<<e|t>>>32-e},i=function(t,e){var a,n,i,o,r;return i=2147483648&t,o=2147483648&e,a=1073741824&t,n=1073741824&e,r=(1073741823&t)+(1073741823&e),a&n?2147483648^r^i^o:a|n?1073741824&r?3221225472^r^i^o:1073741824^r^i^o:r^i^o},o=function(t,e,a){return t&e|~t&a},r=function(t,e,a){return t&a|e&~a},c=function(t,e,a){return t^e^a},u=function(t,e,a){return e^(t|~a)},s=function(t,e,a,r,c,u,s){return t=i(t,i(i(o(e,a,r),c),s)),i(n(t,u),e)},d=function(t,e,a,o,c,u,s){return t=i(t,i(i(r(e,a,o),c),s)),i(n(t,u),e)},l=function(t,e,a,o,r,u,s){return t=i(t,i(i(c(e,a,o),r),s)),i(n(t,u),e)},f=function(t,e,a,o,r,c,s){return t=i(t,i(i(u(e,a,o),r),s)),i(n(t,c),e)},p=function(t){var e,a=t.length,n=a+8,i=(n-n%64)/64,o=16*(i+1),r=Array(o-1),c=0,u=0;while(u<a)e=(u-u%4)/4,c=u%4*8,r[e]=r[e]|t.charCodeAt(u)<<c,u++;return e=(u-u%4)/4,c=u%4*8,r[e]=r[e]|128<<c,r[o-2]=a<<3,r[o-1]=a>>>29,r},g=function(t){var e,a,n="",i="";for(a=0;a<=3;a++)e=t>>>8*a&255,i="0"+e.toString(16),n+=i.substr(i.length-2,2);return n},b=function(t){t=t.replace(/\x0d\x0a/g,"\n");for(var e="",a=0;a<t.length;a++){var n=t.charCodeAt(a);n<128?e+=String.fromCharCode(n):n>127&&n<2048?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128))}return e};function v(t){var e,a,n,o,r,c,u,v,h,y=Array(),m=7,w=12,x=17,_=22,k=5,j=9,S=14,C=20,q=4,A=11,T=16,z=23,M=6,O=10,D=15,P=21;for(t=b(t),y=p(t),c=1732584193,u=4023233417,v=2562383102,h=271733878,e=0;e<y.length;e+=16)a=c,n=u,o=v,r=h,c=s(c,u,v,h,y[e+0],m,3614090360),h=s(h,c,u,v,y[e+1],w,3905402710),v=s(v,h,c,u,y[e+2],x,606105819),u=s(u,v,h,c,y[e+3],_,3250441966),c=s(c,u,v,h,y[e+4],m,4118548399),h=s(h,c,u,v,y[e+5],w,1200080426),v=s(v,h,c,u,y[e+6],x,2821735955),u=s(u,v,h,c,y[e+7],_,4249261313),c=s(c,u,v,h,y[e+8],m,1770035416),h=s(h,c,u,v,y[e+9],w,2336552879),v=s(v,h,c,u,y[e+10],x,4294925233),u=s(u,v,h,c,y[e+11],_,2304563134),c=s(c,u,v,h,y[e+12],m,1804603682),h=s(h,c,u,v,y[e+13],w,4254626195),v=s(v,h,c,u,y[e+14],x,2792965006),u=s(u,v,h,c,y[e+15],_,1236535329),c=d(c,u,v,h,y[e+1],k,4129170786),h=d(h,c,u,v,y[e+6],j,3225465664),v=d(v,h,c,u,y[e+11],S,643717713),u=d(u,v,h,c,y[e+0],C,3921069994),c=d(c,u,v,h,y[e+5],k,3593408605),h=d(h,c,u,v,y[e+10],j,38016083),v=d(v,h,c,u,y[e+15],S,3634488961),u=d(u,v,h,c,y[e+4],C,3889429448),c=d(c,u,v,h,y[e+9],k,568446438),h=d(h,c,u,v,y[e+14],j,3275163606),v=d(v,h,c,u,y[e+3],S,4107603335),u=d(u,v,h,c,y[e+8],C,1163531501),c=d(c,u,v,h,y[e+13],k,2850285829),h=d(h,c,u,v,y[e+2],j,4243563512),v=d(v,h,c,u,y[e+7],S,1735328473),u=d(u,v,h,c,y[e+12],C,2368359562),c=l(c,u,v,h,y[e+5],q,4294588738),h=l(h,c,u,v,y[e+8],A,2272392833),v=l(v,h,c,u,y[e+11],T,1839030562),u=l(u,v,h,c,y[e+14],z,4259657740),c=l(c,u,v,h,y[e+1],q,2763975236),h=l(h,c,u,v,y[e+4],A,1272893353),v=l(v,h,c,u,y[e+7],T,4139469664),u=l(u,v,h,c,y[e+10],z,3200236656),c=l(c,u,v,h,y[e+13],q,681279174),h=l(h,c,u,v,y[e+0],A,3936430074),v=l(v,h,c,u,y[e+3],T,3572445317),u=l(u,v,h,c,y[e+6],z,76029189),c=l(c,u,v,h,y[e+9],q,3654602809),h=l(h,c,u,v,y[e+12],A,3873151461),v=l(v,h,c,u,y[e+15],T,530742520),u=l(u,v,h,c,y[e+2],z,3299628645),c=f(c,u,v,h,y[e+0],M,4096336452),h=f(h,c,u,v,y[e+7],O,1126891415),v=f(v,h,c,u,y[e+14],D,2878612391),u=f(u,v,h,c,y[e+5],P,4237533241),c=f(c,u,v,h,y[e+12],M,1700485571),h=f(h,c,u,v,y[e+3],O,2399980690),v=f(v,h,c,u,y[e+10],D,4293915773),u=f(u,v,h,c,y[e+1],P,2240044497),c=f(c,u,v,h,y[e+8],M,1873313359),h=f(h,c,u,v,y[e+15],O,4264355552),v=f(v,h,c,u,y[e+6],D,2734768916),u=f(u,v,h,c,y[e+13],P,1309151649),c=f(c,u,v,h,y[e+4],M,4149444226),h=f(h,c,u,v,y[e+11],O,3174756917),v=f(v,h,c,u,y[e+2],D,718787259),u=f(u,v,h,c,y[e+9],P,3951481745),c=i(c,a),u=i(u,n),v=i(v,o),h=i(h,r);var E=g(c)+g(u)+g(v)+g(h);return E.toLowerCase()}t.exports={hexMD5:v}},"4a67":function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("3782")),o=n(a("fe41")),r=getApp().globalData,c=r.appid,u=r.appsecret,s=(r.imgRemote,r.navBar,{data:function(){return{show:!0,title:[{name:"序号"},{name:"检测项目"},{name:"样品名称"},{name:"抑制率(%)"},{name:"检测结果"}],observe:{info:{title:"",date:"",inspector:""}}}},created:function(){this.result()},methods:{result:function(){var t=this,e=(localStorage.getItem("resultId"),Math.round((new Date).getTime()/1e3)),a={appid:c,timeStamp:e},n=i.default.hexMD5(o.default.objKeySort(a)+u),r=Object.assign({sign:n},a);o.default.getRequests("tbTesting",r,(function(e){var a=e.data.data;200==e.data.code&&(a.test.length?t.observe=a:t.show=!1)}))}}});e.default=s},"5a23":function(t,e,a){"use strict";a.r(e);var n=a("0bf6"),i=a("918e");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8ebd");var r,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"29524918",null,!1,n["a"],r);e["default"]=u.exports},"66d0":function(t,e,a){"use strict";a.r(e);var n=a("f460"),i=a("30f6");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("82db");var r,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"ab38aeae",null,!1,n["a"],r);e["default"]=u.exports},"789a":function(t,e,a){var n=a("c1b1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1e686659",n,!0,{sourceMap:!1,shadowMode:!1})},"82db":function(t,e,a){"use strict";var n=a("24ca"),i=a.n(n);i.a},"8ebd":function(t,e,a){"use strict";var n=a("789a"),i=a.n(n);i.a},"918e":function(t,e,a){"use strict";a.r(e);var n=a("2122"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c1b1:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".suyuan_tabar[data-v-29524918]{position:fixed;bottom:0;width:100%}.suyuan_nav[data-v-29524918]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:0;background:#f5f5f5;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50px;font-size:12px}.suyuan_nav img[data-v-29524918]{display:block;width:25%;margin:0 25% 2% 25%}.suyuan_nav li[data-v-29524918]{height:100%;width:25%;list-style:none;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.suyuan_nav li .green[data-v-29524918]{color:#009a44}.suyuan_nav li span[data-v-29524918]{color:#9c9c9c}",""]),t.exports=e},ebfe:function(t,e,a){t.exports=a.p+"static/img/detection.5467b4f9.png"},f460:function(t,e,a){"use strict";var n={"my-s_tabbar":a("5a23").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detection",class:{quantity:t.show}},[t.show?n("div",{staticClass:"table"},[n("div",{staticClass:"menu"},[n("p",[t._v(t._s(t.observe.info.date))]),n("p",[t._v(t._s(t.observe.info.title))])]),n("table",{attrs:{width:"92%"}},[n("tr",[n("th",{attrs:{colspan:"5"}},[t._v(t._s(t.observe.info.title))])]),n("tr",t._l(t.title,(function(e,a){return n("td",[t._v(t._s(e.name))])})),0),t._l(t.observe.test,(function(e,a){return n("tr",[n("td",[t._v(t._s(a+1))]),n("td",[t._v(t._s(e.project_name))]),n("td",[t._v(t._s(e.sample_name))]),n("td",[t._v(t._s(e.test_value))]),n("td",[t._v(t._s(e.test_value))])])}))],2),n("p",[t._v("检测单位:菜东家蔬果农残检测中心")]),n("div",{staticClass:"audit"},[n("span",[t._v("检测时间:"+t._s(t.observe.info.date))]),n("span",[t._v("主检:　"+t._s(t.observe.info.inspector))]),n("span",[t._v("审核:　"+t._s(t.observe.info.inspector))])])]):n("div",{staticClass:"img"},[n("img",{attrs:{src:a("ebfe")}})]),t._m(0),n("my-s_tabbar",{attrs:{activeIndex:"3"}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("address",{staticClass:"center"},[t._v("技术支持:黑蚂蚁科技"),a("br"),t._v("Coryright ©2016-2019")])}];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},fe41:function(t,e,a){a("4160"),a("4e82"),a("b64b"),a("d3b7"),a("25f0"),a("159b");var n=getApp(),i={active:n.globalData.active},o=n.globalData.rootUrl+"/mobileOrder/";if(uni.getStorageSync("cdj_token"))var r={Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")};function c(t,e,a){uni.showLoading({title:"加载中...",duration:2e3,mask:!0,success:function(n){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){a(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:1e3,success:function(){}}),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),uni.hideLoading()},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function u(t,e,a){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){a(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==t.data.code&&uni.navigateTo({url:"/pages/account/service"})},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})}function s(t,e,a){uni.showLoading({title:"加载中",mask:!0,success:function(n){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){a(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:1e3,success:function(){}}),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),403==t.data.code&&uni.showToast({title:"账号已禁用",icon:"none",duration:1e3,success:function(){uni.navigateTo({url:"/pages/account/login"})}}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==t.data.code&&uni.showToast({title:"抱歉，您的服务已到期，请联系《菜东家》工作人员续费！",icon:"none",duration:2e3}),uni.hideLoading()},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function d(t,e,a){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){a(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"})},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})}function l(t){for(var e=Object.keys(t).sort(),a={},n="",i=0;i<e.length;i++)a[e[i]]=t[e[i]];return Object.keys(a).forEach((function(t){n+="&"+t+"="+a[t]})),n.substr(1)}function f(t){uni.showToast({title:t,icon:"none",duration:1e3})}function p(){var t=new Date,e=t.getMonth(),a=++e,n=new Date(t.getFullYear(),a,1),i=864e5;return new Date(n.getTime()-i)}function g(){var t=new Date,e=t.getFullYear().toString(),a=(t.getMonth()+1).toString(),n="";n=a<10?"0"+a:a;t.getDate().toString();var i=p().getDate(),o=e+"-"+n+"-01",r=e+"-"+n+"-"+i,c=[o,r];return c}function b(t){return new Promise((function(e,a){window.init=function(){e(BMap)};var n=document.createElement("script");n.type="text/javascript",n.src="http://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",n.onerror=a,document.head.appendChild(n)}))}t.exports={getRequest:c,getRequests:u,postRequest:s,postRequests:d,Toast:f,header:r,objKeySort:l,thedefaulttime:g,MP:b}}}]);