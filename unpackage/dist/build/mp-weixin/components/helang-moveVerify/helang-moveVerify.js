(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/helang-moveVerify/helang-moveVerify"],{"1ffc":function(t,n,e){},"295d":function(t,n,e){"use strict";e.r(n);var i=e("3033"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},3033:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"move-verify",data:function(){return{x:0,oldx:0,isOk:!1,size:{},count:0,isMove:!1}},mounted:function(){var n=this,e=function(e){return new Promise((function(i,o){var u=t.createSelectorQuery().in(n).select(e);u.fields({size:!0},(function(t){i(t.width)})).exec()}))};this.$nextTick((function(){e(".on-pathway").then((function(t){n.size.pathway=t,console.log(t),e(".on-track").then((function(t){n.size.track=t}))}))}))},methods:{onMove:function(t){this.oldx=t.detail.x},onEnd:function(){var t=this;this.isOk||this.oldx<1||(this.count++,this.x=this.oldx,this.oldx+3>this.size.pathway-this.size.track?(this.isOk=!0,this.$emit("result",{flag:!0,count:this.count})):(this.$nextTick((function(){setTimeout((function(){t.x=0,t.oldx=0}),100)})),this.$emit("result",{flag:!1,count:this.count})))},reset:function(){this.x=0,this.oldx=0,this.count=0,this.isOk=!1}}};n.default=e}).call(this,e("543d")["default"])},8330:function(t,n,e){"use strict";var i=e("1ffc"),o=e.n(i);o.a},b0fe:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}))},bf09:function(t,n,e){"use strict";e.r(n);var i=e("b0fe"),o=e("295d");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("8330");var c,s=e("f0c5"),f=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3deea30d",null,!1,i["a"],c);n["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/helang-moveVerify/helang-moveVerify-create-component',
    {
        'components/helang-moveVerify/helang-moveVerify-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bf09"))
        })
    },
    [['components/helang-moveVerify/helang-moveVerify-create-component']]
]);
