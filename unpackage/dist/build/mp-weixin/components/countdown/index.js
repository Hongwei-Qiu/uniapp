(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/countdown/index"],{"4ee8":function(t,n,e){"use strict";var i=e("c04b"),u=e.n(i);u.a},7256:function(t,n,e){"use strict";e.r(n);var i=e("9793"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},"79fd":function(t,n,e){"use strict";e.r(n);var i=e("ba06"),u=e("7256");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("4ee8");var r,a=e("f0c5"),s=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=s.exports},9793:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{time:{type:Number,default:0},bgC:{type:String,default:"black"},lineC:{type:String,default:"black"}},data:function(){return{totaltime:this.time,hour:"00",minus:"00",second:"00"}},methods:{start:function(){var n=this;setInterval((function(){if(n.totaltime--,n.totaltime<=0){var e=getCurrentPages();t.reLaunch({url:"/"+e[0].route})}else n.countDown()}),1e3)},countDown:function(){this.hour=Math.floor(this.totaltime/3600),this.minus=Math.floor(this.totaltime/60%60),this.second=Math.floor(this.totaltime%60),this.hour<10&&(this.hour="0"+this.hour),this.minus<10&&(this.minus="0"+this.minus),this.second<10&&(this.second="0"+this.second)}},created:function(){this.start()}};n.default=e}).call(this,e("543d")["default"])},ba06:function(t,n,e){"use strict";var i,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},c04b:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/countdown/index-create-component',
    {
        'components/countdown/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("79fd"))
        })
    },
    [['components/countdown/index-create-component']]
]);
