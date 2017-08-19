//一:引入第三方文件
//vue文件
import Vue from 'vue';

//vue-resource  ajax请求插件
import vueResource from 'vue-resource';

//vue-router 路由插件
import vueRouter from 'vue-router';

//mint-ui vue的插件  css 样式
import MintUi from 'mint-ui';
import  'mint-ui/lib/style.css';

//引入Mui 
import 'mui/dist/css/mui.css';
//引入css
import 'mui/examples/hello-mui/css/icons-extra.css';

//引入filter.js
import './js/filter.js';

//引入vue-preview插件
import Vuepreview from 'vue-picture-preview';




//调用插件 因为如vue-resource的插件里在window环境下(浏览器)并且有全局的vue才会调用
//         而我们进行模块化开发没有全局的vue所以要手动启用插件
// if (typeof window !== 'undefined' && window.Vue) {
//     window.Vue.use(plugin);
// }
// if (inBrowser && window.Vue) {
//   window.Vue.use(VueRouter);
// }

//导入路由
import router from './js/router.js';

//启动插件
Vue.use(vueResource);
Vue.use(vueRouter);
Vue.use(MintUi);
Vue.use(Vuepreview);

//组件导入
import App from './App.vue';

new Vue({
    el: '#app',
    //渲染
    render: c => c(App),
    //设置路由
    router
})