
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabar/index","pages/tabar/classify","pages/tabar/order","pages/tabar/shopcart","pages/tabar/user","pages/index/shopdetail","pages/index/collect","pages/index/recommed","pages/index/newback","pages/index/search","pages/index/flashsale","pages/account/login","pages/account/selectway","pages/account/forget","pages/account/register","pages/account/service","pages/account/treaty","pages/account/bind","pages/account/404","pages/order/orderdetail","pages/order/address","pages/order/pay","pages/order/fenjian","pages/shopcart/delivery","pages/shopcart/pay","pages/shopcart/address","pages/shopcart/shoplist","pages/user/accountmange","pages/user/accountadd","pages/user/accountedit","pages/user/modifypwd","pages/user/receipt","pages/user/invest","pages/user/investlist","pages/user/investrecord","pages/user/bill","pages/user/billdetail","pages/user/cash","pages/user/cashdetail","pages/user/myinfo","pages/user/bindphone","pages/user/userAddress","pages/user/address","pages/user/purchase_detail","pages/user/purchase_record"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":" ","navigationBarBackgroundColor":"#F0F0F0","backgroundColor":"#F8F8F8","titleNView":false},"tabBar":{"color":"#999999","selectedColor":"#009A44","list":[{"pagePath":"pages/tabar/index"},{"pagePath":"pages/tabar/classify"},{"pagePath":"pages/tabar/shopcart"},{"pagePath":"pages/tabar/order"},{"pagePath":"pages/tabar/user"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"菜东家","compilerVersion":"2.8.6","entryPagePath":"pages/tabar/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabar/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabar/classify","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabar/order","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabar/shopcart","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/tabar/user","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/index/shopdetail","meta":{},"window":{}},{"path":"/pages/index/collect","meta":{},"window":{}},{"path":"/pages/index/recommed","meta":{},"window":{}},{"path":"/pages/index/newback","meta":{},"window":{}},{"path":"/pages/index/search","meta":{},"window":{}},{"path":"/pages/index/flashsale","meta":{},"window":{}},{"path":"/pages/account/login","meta":{},"window":{}},{"path":"/pages/account/selectway","meta":{},"window":{}},{"path":"/pages/account/forget","meta":{},"window":{}},{"path":"/pages/account/register","meta":{},"window":{}},{"path":"/pages/account/service","meta":{},"window":{}},{"path":"/pages/account/treaty","meta":{},"window":{}},{"path":"/pages/account/bind","meta":{},"window":{}},{"path":"/pages/account/404","meta":{},"window":{}},{"path":"/pages/order/orderdetail","meta":{},"window":{}},{"path":"/pages/order/address","meta":{},"window":{}},{"path":"/pages/order/pay","meta":{},"window":{}},{"path":"/pages/order/fenjian","meta":{},"window":{}},{"path":"/pages/shopcart/delivery","meta":{},"window":{}},{"path":"/pages/shopcart/pay","meta":{},"window":{}},{"path":"/pages/shopcart/address","meta":{},"window":{}},{"path":"/pages/shopcart/shoplist","meta":{},"window":{}},{"path":"/pages/user/accountmange","meta":{},"window":{}},{"path":"/pages/user/accountadd","meta":{},"window":{}},{"path":"/pages/user/accountedit","meta":{},"window":{}},{"path":"/pages/user/modifypwd","meta":{},"window":{}},{"path":"/pages/user/receipt","meta":{},"window":{}},{"path":"/pages/user/invest","meta":{},"window":{}},{"path":"/pages/user/investlist","meta":{},"window":{}},{"path":"/pages/user/investrecord","meta":{},"window":{}},{"path":"/pages/user/bill","meta":{},"window":{}},{"path":"/pages/user/billdetail","meta":{},"window":{}},{"path":"/pages/user/cash","meta":{},"window":{}},{"path":"/pages/user/cashdetail","meta":{},"window":{}},{"path":"/pages/user/myinfo","meta":{},"window":{}},{"path":"/pages/user/bindphone","meta":{},"window":{}},{"path":"/pages/user/userAddress","meta":{},"window":{}},{"path":"/pages/user/address","meta":{},"window":{}},{"path":"/pages/user/purchase_detail","meta":{},"window":{}},{"path":"/pages/user/purchase_record","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
