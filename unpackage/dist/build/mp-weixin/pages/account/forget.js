(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/account/forget"],{"05d5":function(e,t,a){},2034:function(e,t,a){"use strict";(function(e){a("47a8"),a("921b");n(a("66fd"));var t=n(a("7f68"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"5e03":function(e,t,a){"use strict";var n={"uni-nav-bar":function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"01c8"))},"my-identifyingcode":function(){return a.e("components/identifyingcode/index").then(a.bind(null,"858d"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.back=!1})},s=[];a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n}))},"67c4":function(e,t,a){"use strict";var n=a("05d5"),o=a.n(n);o.a},"7f68":function(e,t,a){"use strict";a.r(t);var n=a("5e03"),o=a("c0f7");for(var s in o)"default"!==s&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("67c4");var i,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=u.exports},baca:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a("3782")),o=s(a("fe41"));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(){a.e("components/helang-moveVerify/helang-moveVerify").then(function(){return resolve(a("bf09"))}.bind(null,a)).catch(a.oe)},r=getApp().globalData,u=r.navBar,c=r.appid,f=r.appsecret,d={components:{moveVerify:i},data:function(){return{resultData:{},mobile:"",password:"",confirm_pwd:"",verify_code:"",secret_str:"",navBar:u,back:!0}},methods:{leftClick:function(){e.hideKeyboard(),setTimeout((function(){e.navigateBack({delta:1})}),300)},verifyResult:function(e){this.resultData=e,1!=this.resultData.flag||this.captcha()},verifyReset:function(){this.$refs.verifyElement.reset(),this.resultData={}},captcha:function(){var t=this,a=Math.round((new Date).getTime()/1e3),s={appid:c,timeStamp:a},i=n.default.hexMD5(o.default.objKeySort(s)+f),r=Object.assign({sign:i},s);o.default.getRequests("random",r,(function(a){var n=a.data;200==n.code?(t.secret_str=n.data.number,e.setStorageSync("laravel_session",a.header["Set-Cookie"])):o.default.Toast(n.msg)}))},getCode:function(){var t=this,a=Math.round((new Date).getTime()/1e3);if(t.mobile){var s=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;if(s.test(t.mobile))if(t.secret_str){var i={appid:c,mobile:t.mobile,timeStamp:a},u=n.default.hexMD5(f+t.secret_str),d=n.default.hexMD5(o.default.objKeySort(i)+f),l=Object.assign({sign:d,secret_str:u},i);e.request({url:r.rootUrl+"/mobileOrder/sendCodeNot",method:"POST",header:{"content-type":"application/json",cookie:e.getStorageSync("laravel_session")},data:l,success:function(e){200==e.data.code?(t.secret_str=e.data.data.random_str,o.default.Toast("验证码已发送到你手机中，请注意查收"),t.$refs.code.sendCode()):(t.verifyReset(),o.default.Toast(e.data.msg))}})}else o.default.Toast("请拖动滑块验证");else o.default.Toast("不能输入特殊字符和空格")}else o.default.Toast("手机号不能为空")},forget:function(){var t=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;if(this.mobile)if(this.password)if(console.log(this.password.length),this.password.length<6)o.default.Toast("请设置六位及以上的密码");else if(this.password==this.confirm_pwd)if(t.test(this.mobile)&&t.test(this.password)&&t.test(this.confirm_pwd))if(this.verify_code){var a=Math.round((new Date).getTime()/1e3),s={appid:c,timeStamp:a,mobile:this.mobile,password:this.password,confirm_pwd:this.confirm_pwd,verify_code:this.verify_code},i=n.default.hexMD5(o.default.objKeySort(s)+f),u=Object.assign({sign:i},s),d=this;e.request({url:r.rootUrl+"/mobileOrder/forgetPassword",method:"POST",data:u,header:{"content-type":"application/json",cookie:e.getStorageSync("laravel_session")},success:function(t){200==t.data.code?(o.default.Toast("修改成功,去登陆"),setTimeout((function(){e.navigateTo({url:"./login"})}),1e3)):(d.verifyReset(),o.default.Toast(t.data.msg))}})}else o.default.Toast("请输入验证码");else o.default.Toast("不能输入特殊字符和空格");else o.default.Toast("请确保密码一致");else o.default.Toast("密码不能为空");else o.default.Toast("手机号不能为空")}}};t.default=d}).call(this,a("543d")["default"])},c0f7:function(e,t,a){"use strict";a.r(t);var n=a("baca"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a}},[["2034","common/runtime","common/vendor"]]]);