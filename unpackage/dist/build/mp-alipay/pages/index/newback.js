(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/index/newback"],{"26ba":function(t,e,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"f858"))}},o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},4826:function(t,e,n){},a7c1:function(t,e,n){"use strict";n.r(e);var a=n("c7b4"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=o.a},af42:function(t,e,n){"use strict";var a=n("4826"),o=n.n(a);o.a},b675:function(t,e,n){"use strict";n.r(e);var a=n("26ba"),o=n("a7c1");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("af42");var i,u=n("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=c.exports},c7b4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("4b89")),o=r(n("d07b"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=u(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,r=!0,i=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return r=t.done,t},e:function(t){i=!0,o=t},f:function(){try{r||null==a.return||a.return()}finally{if(i)throw o}}}}function u(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var f=getApp().globalData,l=f.appid,s=f.navBar,d=f.appsecret,m=f.rootUrl,p=(f.imgUrl,{data:function(){return{imgUrl:f.imgUrl,img:[],contents:"",navBar:s,count:0}},methods:{leftClick:function(){t.navigateBack({delta:1})},deletePhoto:function(t){var e=this.img;e.splice(t,1)},uploadImg:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){for(var r=n.tempFilePaths,i="feed",u=Math.round((new Date).getTime()/1e3),c={appid:l,type:i,timeStamp:u},f=a.default.hexMD5(o.default.objKeySort(c)+d),s=0;s<r.length;s++)t.uploadFile({method:"POST",url:m+"/mobileOrder/uploadImg",name:"img",header:{Authorization:t.getStorageSync("cdj_token")},formData:{appid:l,timeStamp:u,type:i,img:r,sign:f},filePath:r[s],success:function(n){var a=JSON.parse(n.data);200==a.code?e.img.push(a.data):401==a.code?(o.default.Toast("请先登录"),setTimeout((function(){t.navigateTo({url:"/pages/account/login"})}),1e3)):o.default.Toast(a.msg)}})}})},feedBack:function(){var e=this;if(this.count++,1==this.count){setTimeout((function(){e.count=0}),1e3);var n,r=this,u=r.img,c=[],f=i(u);try{for(f.s();!(n=f.n()).done;){var s=n.value;c.push(s.path)}}catch(h){f.e(h)}finally{f.f()}console.log(c);var m=r.contents,p=Math.round((new Date).getTime()/1e3),g={appid:l,contents:m,timeStamp:p},v=a.default.hexMD5(o.default.objKeySort(g)+d),b={appid:l,contents:m,img:c,timeStamp:p,sign:v};o.default.postRequests("feedBack",b,(function(e){200==e.data.code?(o.default.Toast("提交成功"),setTimeout((function(){t.switchTab({url:"/pages/tabar/index"})}),1e3)):o.default.Toast(e.data.msg)}))}}},onShow:function(){t.setNavigationBarTitle({title:t.getStorageSync("titleKey")})}});e.default=p}).call(this,n("c11b")["default"])},cad7:function(t,e,n){"use strict";(function(t){n("1995");a(n("66fd"));var e=a(n("b675"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])}},[["cad7","common/runtime","common/vendor"]]]);