(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myinfo"],{"88fb":function(t,e,a){"use strict";a.r(e);var n=a("98b6"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"98b6":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3782")),o=i(a("fe41"));function i(t){return t&&t.__esModule?t:{default:t}}var r=getApp().globalData,u=r.appid,c=r.appsecret,l=r.imgRemote,d=r.navBar,f=function(){a.e("components/ling-imgcropper/ling-imgcropper").then(function(){return resolve(a("28b0"))}.bind(null,a)).catch(a.oe)},m={components:{ImageCropper:f},data:function(){return{tempFilePath:"",cropFilePath:"",showtitle:!0,navBar:d,imgUrl:r.imgUrl,imgRemote:l,phone:"",memberInfoData:"",member_default:"",nickname:"",password:"",confirmPwd:"",imgPath:""}},methods:{memberInfo:function(){var t=this,e=Math.round((new Date).getTime()/1e3),a={appid:u,timeStamp:e},i=n.default.hexMD5(o.default.objKeySort(a)+c),r={appid:u,timeStamp:e,sign:i};o.default.getRequests("memberInfo",r,(function(e){if(200==e.data.code){var a=/^(\d{3})\d*(\d{4})$/;t.memberInfoData=e.data.data.info,t.cropFilePath=t.memberInfoData.logo,t.nickname=t.memberInfoData.nickname,t.member_default=e.data.data.member_default,t.phone=e.data.data.info.phone.replace(a,"$1****$2")}}))},leftClick:function(){t.navigateBack({delta:1})},bindPhonePage:function(){t.navigateTo({url:"bindphone"})},upload:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],success:function(t){e.showtitle=!1,e.tempFilePath=t.tempFilePaths.shift()}})},confirm:function(e){this.showtitle=!0,this.tempFilePath="";var a=e.detail.tempFilePath,i="avatars",l=Math.round((new Date).getTime()/1e3),d={appid:u,type:i,timeStamp:l},f=n.default.hexMD5(o.default.objKeySort(d)+c),m=this;t.uploadFile({method:"POST",url:r.rootUrl+"uploadImg",name:"img",header:{Accept:"application/json","content-type":"application/json",Authorization:t.getStorageSync("cdj_token")},formData:{appid:u,timeStamp:l,type:i,img:a,sign:f},filePath:a,success:function(t){var e=JSON.parse(t.data);m.imgPath=e.data.path,m.cropFilePath=e.data.src,m.uploadAvatar()}})},uploadAvatar:function(){var e=this,a=e.imgPath,i=Math.round((new Date).getTime()/1e3),r={appid:u,img:a,timeStamp:i},l=n.default.hexMD5(o.default.objKeySort(r)+c),d={appid:u,img:a,timeStamp:i,sign:l};o.default.postRequests("uploadAvatar",d,(function(e){200==e.data.code&&t.showToast({title:"更换头像成功",icon:"none"})}))},cancel:function(){this.showtitle=!0}},onShow:function(){var t=this;t.memberInfo()}};e.default=m}).call(this,a("543d")["default"])},"9dad":function(t,e,a){"use strict";var n={"uni-nav-bar":function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"01c8"))},"uni-icons":function(){return Promise.all([a.e("common/vendor"),a.e("components/uni-icons/uni-icons")]).then(a.bind(null,"4aa4"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},c01a:function(t,e,a){},c32c:function(t,e,a){"use strict";(function(t){a("47a8"),a("921b");n(a("66fd"));var e=n(a("e6de"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},e6de:function(t,e,a){"use strict";a.r(e);var n=a("9dad"),o=a("88fb");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("f833");var r,u=a("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=c.exports},f833:function(t,e,a){"use strict";var n=a("c01a"),o=a.n(n);o.a}},[["c32c","common/runtime","common/vendor"]]]);