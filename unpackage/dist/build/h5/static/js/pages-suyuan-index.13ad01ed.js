(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-suyuan-index"],{"00ac":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"*[data-v-520627de]{padding:0;margin:0}.suyuan_index[data-v-520627de]{\n\t\t/*position: fixed;*/height:100vh;background:#c5e3d0}.suyuan_index img[data-v-520627de]{width:100%;height:30vh;object-fit:contain}.red[data-v-520627de]{color:red}.suyuan_index .img_deal[data-v-520627de]{border-bottom:5px solid #ef9428;background:#fff}.white[data-v-520627de]{background:#fff}.suyuan_index .info[data-v-520627de]{width:82%;margin:0 auto;padding:0 4%}.suyuan_index .info tr[data-v-520627de]:nth-child(n+2){font-size:12px}.suyuan_index .info table tr td[data-v-520627de]:first-child{width:33%;color:#6bb885;margin-left:1%}.suyuan_index .info table tr th[data-v-520627de]{color:#6bb885}.suyuan_index p[data-v-520627de]{text-align:center;margin:2% 0 3% 0;font-weight:500}.suyuan_index .info tr[data-v-520627de]{\n\t\t/*vertical-align: sub;*/height:32px}.suyuan_index .info tr[data-v-520627de]:last-child{vertical-align:sub}.suyuan_index .info tr td[data-v-520627de]:first-child{font-weight:550;font-size:14px}.suyuan_index .info tr:last-child td[data-v-520627de]{font-size:13px;padding:0 0 2% 0}.suyuan_index .info tr td:last-child div[data-v-520627de]{height:54px;overflow:hidden}.suyuan_index .info tr th[data-v-520627de]{border-bottom:1px solid #ddd}.center[data-v-520627de]{text-align:center}.suyuan_index address[data-v-520627de]{font-size:10px;font-style:normal;bottom:10%;margin-top:11%;text-align:center;width:100%}.suyuan_index table[data-v-520627de]{width:100%}@media (max-height:568px){.suyuan_index .info tr td:last-child div[data-v-520627de]{height:16px;overflow:hidden}}",""]),t.exports=e},"0bf6":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suyuan_tabar"},[n("ul",{staticClass:"suyuan_nav"},t._l(t.nav,(function(e,a){return n("li",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.color(e)}}},[t.activeIndex==a?n("img",{attrs:{src:t.imgPath+e.activeimg}}):n("img",{attrs:{src:t.imgPath+e.img}}),n("span",{class:{green:t.activeIndex==a}},[t._v(t._s(e.title))])])})),0)])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"1a4a":function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("3782")),o=a(n("fe41")),r=getApp().globalData,u=r.appid,c=r.appsecret,d=(r.imgRemote,r.navBar,{data:function(){return{details:!1,index:[],message:""}},onShow:function(){this.result()},methods:{result:function(){var t=this,e=this,n=uni.getStorageSync("resultId"),a=Math.round((new Date).getTime()/1e3),r={appid:u,old:n,timeStamp:a},d=i.default.hexMD5(o.default.objKeySort(r)+c),s=Object.assign({sign:d},r);o.default.getRequests("result",s,(function(n){var a=n.data.data;if(200==n.data.code){t.message=a.company_name;var i=document.getElementById("musicinfo");i.innerHTML='<audio id="musicid" src="http://api.ew80yun.com/tts.php?txt=恭喜,你查询的是'.concat(t.message,'销售的正品!!!" preload="preload" autoplay="autoplay"></audio>'),e.index=a.item,t.describle=a.item.describe,localStorage.setItem("shopId",n.data.data.item.id)}}))}}});e.default=d},2122:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a="/pages",i="../../new/static/img/",o={props:["activeIndex"],data:function(){return{imgPath:i,nav:[{title:"查询结果",link:a+"/suyuan/index",activeimg:"resultgreen.png",img:"resultgray.png"},{title:"产品介绍",link:a+"/suyuan/product",activeimg:"productgreen.png",img:"productgray.png"},{title:"全程追溯",link:a+"/suyuan/journey",activeimg:"journeygreen.png",img:"journeygray.png"},{title:"质检报告",link:a+"/suyuan/quantity",activeimg:"quantitygreen.png",img:"quantitygray.png"}]}},methods:{color:function(t){this.$route.query.id;this.$router.push({path:t.link})}}};e.default=o},2459:function(t,e,n){"use strict";var a={"my-s_tabbar":n("5a23").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"suyuan_index",attrs:{id:"suyuan"}},[n("div",{staticClass:"img_deal"},[n("img",{attrs:{src:t.index.img,onerror:"javascript:this.src='images/suyuan/defaultimg.png';"}})]),n("div",{staticClass:"musicinfo",staticStyle:{display:"block"},attrs:{id:"musicinfo"}}),n("p",{staticClass:"red"},[t._v("恭喜,你查询的是"+t._s(t.message)+"销售的正品!!!")]),n("div",{staticClass:"info white"},[n("table",[t._m(0),n("tr",{staticStyle:{height:"10px"}}),n("tr",[n("td",[t._v("商品名称")]),n("td",[t._v(t._s(t.index.title))])]),n("tr",[n("td",[t._v("商品规格")]),n("td",[t._v(t._s(t.index.attr_title))])]),n("tr",[n("td",[t._v("商品单位")]),n("td",[t._v(t._s(t.index.unit))])]),n("tr",[n("td",[t._v("商品售价")]),n("td",[t._v(t._s(t.index.price)+"元")])]),n("tr",[n("td",[t._v("商品数量")]),n("td",[t._v(t._s(t.index.weight)+t._s(t.index.unit))])]),n("tr",{staticStyle:{height:"6px"}}),n("tr",[n("td",[t._v("商品描述")]),n("td",[n("div",[t._v(t._s(t.index.describe))])])])])]),t._m(1),n("div",{staticStyle:{height:"1rem"}}),n("my-s_tabbar",{attrs:{activeIndex:"0"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{colspan:"6"}},[t._v("商品信息")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("address",{staticClass:"center"},[t._v("技术支持:黑蚂蚁科技"),n("br"),t._v("Coryright ©2016-2019")])}];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},3005:function(t,e,n){"use strict";var a=n("fa7f"),i=n.n(a);i.a},3782:function(t,e,n){n("d3b7"),n("ac1f"),n("25f0"),n("5319");var a=function(t,e){return t<<e|t>>>32-e},i=function(t,e){var n,a,i,o,r;return i=2147483648&t,o=2147483648&e,n=1073741824&t,a=1073741824&e,r=(1073741823&t)+(1073741823&e),n&a?2147483648^r^i^o:n|a?1073741824&r?3221225472^r^i^o:1073741824^r^i^o:r^i^o},o=function(t,e,n){return t&e|~t&n},r=function(t,e,n){return t&n|e&~n},u=function(t,e,n){return t^e^n},c=function(t,e,n){return e^(t|~n)},d=function(t,e,n,r,u,c,d){return t=i(t,i(i(o(e,n,r),u),d)),i(a(t,c),e)},s=function(t,e,n,o,u,c,d){return t=i(t,i(i(r(e,n,o),u),d)),i(a(t,c),e)},l=function(t,e,n,o,r,c,d){return t=i(t,i(i(u(e,n,o),r),d)),i(a(t,c),e)},f=function(t,e,n,o,r,u,d){return t=i(t,i(i(c(e,n,o),r),d)),i(a(t,u),e)},g=function(t){var e,n=t.length,a=n+8,i=(a-a%64)/64,o=16*(i+1),r=Array(o-1),u=0,c=0;while(c<n)e=(c-c%4)/4,u=c%4*8,r[e]=r[e]|t.charCodeAt(c)<<u,c++;return e=(c-c%4)/4,u=c%4*8,r[e]=r[e]|128<<u,r[o-2]=n<<3,r[o-1]=n>>>29,r},p=function(t){var e,n,a="",i="";for(n=0;n<=3;n++)e=t>>>8*n&255,i="0"+e.toString(16),a+=i.substr(i.length-2,2);return a},h=function(t){t=t.replace(/\x0d\x0a/g,"\n");for(var e="",n=0;n<t.length;n++){var a=t.charCodeAt(n);a<128?e+=String.fromCharCode(a):a>127&&a<2048?(e+=String.fromCharCode(a>>6|192),e+=String.fromCharCode(63&a|128)):(e+=String.fromCharCode(a>>12|224),e+=String.fromCharCode(a>>6&63|128),e+=String.fromCharCode(63&a|128))}return e};function v(t){var e,n,a,o,r,u,c,v,m,y=Array(),b=7,_=12,x=17,w=22,k=5,j=9,S=14,C=20,A=4,T=11,z=16,M=23,O=6,q=10,D=15,E=21;for(t=h(t),y=g(t),u=1732584193,c=4023233417,v=2562383102,m=271733878,e=0;e<y.length;e+=16)n=u,a=c,o=v,r=m,u=d(u,c,v,m,y[e+0],b,3614090360),m=d(m,u,c,v,y[e+1],_,3905402710),v=d(v,m,u,c,y[e+2],x,606105819),c=d(c,v,m,u,y[e+3],w,3250441966),u=d(u,c,v,m,y[e+4],b,4118548399),m=d(m,u,c,v,y[e+5],_,1200080426),v=d(v,m,u,c,y[e+6],x,2821735955),c=d(c,v,m,u,y[e+7],w,4249261313),u=d(u,c,v,m,y[e+8],b,1770035416),m=d(m,u,c,v,y[e+9],_,2336552879),v=d(v,m,u,c,y[e+10],x,4294925233),c=d(c,v,m,u,y[e+11],w,2304563134),u=d(u,c,v,m,y[e+12],b,1804603682),m=d(m,u,c,v,y[e+13],_,4254626195),v=d(v,m,u,c,y[e+14],x,2792965006),c=d(c,v,m,u,y[e+15],w,1236535329),u=s(u,c,v,m,y[e+1],k,4129170786),m=s(m,u,c,v,y[e+6],j,3225465664),v=s(v,m,u,c,y[e+11],S,643717713),c=s(c,v,m,u,y[e+0],C,3921069994),u=s(u,c,v,m,y[e+5],k,3593408605),m=s(m,u,c,v,y[e+10],j,38016083),v=s(v,m,u,c,y[e+15],S,3634488961),c=s(c,v,m,u,y[e+4],C,3889429448),u=s(u,c,v,m,y[e+9],k,568446438),m=s(m,u,c,v,y[e+14],j,3275163606),v=s(v,m,u,c,y[e+3],S,4107603335),c=s(c,v,m,u,y[e+8],C,1163531501),u=s(u,c,v,m,y[e+13],k,2850285829),m=s(m,u,c,v,y[e+2],j,4243563512),v=s(v,m,u,c,y[e+7],S,1735328473),c=s(c,v,m,u,y[e+12],C,2368359562),u=l(u,c,v,m,y[e+5],A,4294588738),m=l(m,u,c,v,y[e+8],T,2272392833),v=l(v,m,u,c,y[e+11],z,1839030562),c=l(c,v,m,u,y[e+14],M,4259657740),u=l(u,c,v,m,y[e+1],A,2763975236),m=l(m,u,c,v,y[e+4],T,1272893353),v=l(v,m,u,c,y[e+7],z,4139469664),c=l(c,v,m,u,y[e+10],M,3200236656),u=l(u,c,v,m,y[e+13],A,681279174),m=l(m,u,c,v,y[e+0],T,3936430074),v=l(v,m,u,c,y[e+3],z,3572445317),c=l(c,v,m,u,y[e+6],M,76029189),u=l(u,c,v,m,y[e+9],A,3654602809),m=l(m,u,c,v,y[e+12],T,3873151461),v=l(v,m,u,c,y[e+15],z,530742520),c=l(c,v,m,u,y[e+2],M,3299628645),u=f(u,c,v,m,y[e+0],O,4096336452),m=f(m,u,c,v,y[e+7],q,1126891415),v=f(v,m,u,c,y[e+14],D,2878612391),c=f(c,v,m,u,y[e+5],E,4237533241),u=f(u,c,v,m,y[e+12],O,1700485571),m=f(m,u,c,v,y[e+3],q,2399980690),v=f(v,m,u,c,y[e+10],D,4293915773),c=f(c,v,m,u,y[e+1],E,2240044497),u=f(u,c,v,m,y[e+8],O,1873313359),m=f(m,u,c,v,y[e+15],q,4264355552),v=f(v,m,u,c,y[e+6],D,2734768916),c=f(c,v,m,u,y[e+13],E,1309151649),u=f(u,c,v,m,y[e+4],O,4149444226),m=f(m,u,c,v,y[e+11],q,3174756917),v=f(v,m,u,c,y[e+2],D,718787259),c=f(c,v,m,u,y[e+9],E,3951481745),u=i(u,n),c=i(c,a),v=i(v,o),m=i(m,r);var P=p(u)+p(c)+p(v)+p(m);return P.toLowerCase()}t.exports={hexMD5:v}},"5a23":function(t,e,n){"use strict";n.r(e);var a=n("0bf6"),i=n("918e");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("8ebd");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"29524918",null,!1,a["a"],r);e["default"]=c.exports},"5bfd":function(t,e,n){"use strict";n.r(e);var a=n("1a4a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"789a":function(t,e,n){var a=n("c1b1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1e686659",a,!0,{sourceMap:!1,shadowMode:!1})},"8ebd":function(t,e,n){"use strict";var a=n("789a"),i=n.n(a);i.a},"918e":function(t,e,n){"use strict";n.r(e);var a=n("2122"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},c1b1:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".suyuan_tabar[data-v-29524918]{position:fixed;bottom:0;width:100%}.suyuan_nav[data-v-29524918]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:0;background:#f5f5f5;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:50px;font-size:12px}.suyuan_nav img[data-v-29524918]{display:block;width:25%;margin:0 25% 2% 25%}.suyuan_nav li[data-v-29524918]{height:100%;width:25%;list-style:none;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.suyuan_nav li .green[data-v-29524918]{color:#009a44}.suyuan_nav li span[data-v-29524918]{color:#9c9c9c}",""]),t.exports=e},e2de:function(t,e,n){"use strict";n.r(e);var a=n("2459"),i=n("5bfd");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3005");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"520627de",null,!1,a["a"],r);e["default"]=c.exports},fa7f:function(t,e,n){var a=n("00ac");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d33ffa46",a,!0,{sourceMap:!1,shadowMode:!1})},fe41:function(t,e,n){n("4160"),n("4e82"),n("b64b"),n("d3b7"),n("25f0"),n("159b");var a=getApp(),i={active:a.globalData.active},o=a.globalData.rootUrl+"/mobileOrder/";if(uni.getStorageSync("cdj_token"))var r={Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")};function u(t,e,n){uni.showLoading({title:"加载中...",duration:2e3,mask:!0,success:function(a){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:1e3,success:function(){}}),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),uni.hideLoading()},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function c(t,e,n){uni.request({url:o+t,method:"GET",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==t.data.code&&uni.navigateTo({url:"/pages/account/service"})},fail:function(t){uni.showModal({title:t.data,content:"网络出错，请刷新重试",showCancel:!1})}})}function d(t,e,n){uni.showLoading({title:"加载中",mask:!0,success:function(a){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),400==t.data.code&&uni.showToast({title:t.data.msg,icon:"none",duration:1e3,success:function(){}}),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"}),403==t.data.code&&uni.showToast({title:"账号已禁用",icon:"none",duration:1e3,success:function(){uni.navigateTo({url:"/pages/account/login"})}}),404==t.data.code&&uni.navigateTo({url:"/pages/account/404"}),408==t.data.code&&uni.showToast({title:"抱歉，您的服务已到期，请联系《菜东家》工作人员续费！",icon:"none",duration:2e3}),uni.hideLoading()},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})},fail:function(t){},complete:function(t){}})}function s(t,e,n){uni.request({url:o+t,method:"POST",header:{Accept:"application/json","content-type":"application/json",Authorization:uni.getStorageSync("cdj_token")},data:Object.assign(e,i),success:function(t){n(t),void 0!=t.header.Authorization&&uni.setStorageSync("cdj_token",t.header.Authorization),401==t.data.code&&uni.navigateTo({url:"/pages/account/login"})},fail:function(t){uni.showModal({title:"网络错误",content:"网络出错，请刷新重试",showCancel:!1})}})}function l(t){for(var e=Object.keys(t).sort(),n={},a="",i=0;i<e.length;i++)n[e[i]]=t[e[i]];return Object.keys(n).forEach((function(t){a+="&"+t+"="+n[t]})),a.substr(1)}function f(t){uni.showToast({title:t,icon:"none",duration:1e3})}function g(){var t=new Date,e=t.getMonth(),n=++e,a=new Date(t.getFullYear(),n,1),i=864e5;return new Date(a.getTime()-i)}function p(){var t=new Date,e=t.getFullYear().toString(),n=(t.getMonth()+1).toString(),a="";a=n<10?"0"+n:n;t.getDate().toString();var i=g().getDate(),o=e+"-"+a+"-01",r=e+"-"+a+"-"+i,u=[o,r];return u}function h(t){return new Promise((function(e,n){window.init=function(){e(BMap)};var a=document.createElement("script");a.type="text/javascript",a.src="http://api.map.baidu.com/api?v=2.0&ak="+t+"&callback=init",a.onerror=n,document.head.appendChild(a)}))}t.exports={getRequest:u,getRequests:c,postRequest:d,postRequests:s,Toast:f,header:r,objKeySort:l,thedefaulttime:p,MP:h}}}]);