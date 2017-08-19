

//导入包
import vueRouter from 'vue-router';

//导入index组件
import Cindex from '../component/index/index.vue';

//导入newlist组件
import CnewsList from '../component/news/list.vue';

//导入newsdetail组件
import CnewsDetail from '../component/news/detail.vue';

//导入CphotoList组件
import CphotoList from '../component/photo/photoList.vue';
import CphotoDetail from '../component/photo/photoDetail.vue';

//导入商品列表组件
import CgoodsList from '../component/goods/goodsList.vue';
import CgoodsDetail from '../component/goods/goodsDetail.vue';

//购物车
import Cshopcartlist from '../component/shopcart/shopList.vue';

//导入登录及购买页
import Cbuyshop from '../component/user/buyshop.vue';
import Clogin from '../component/user/login.vue';

//导出一个路由实例
export default new vueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Cindex},
        {path:'/news/list',component:CnewsList},
        //写上id时能通过$router.query.id得到id号
        {path:'/news/detail/:id',component:CnewsDetail},
        //配置图片列表路由
        {path:'/photo/list/:id',component:CphotoList},
        {path:'/photo/detail/:id',component:CphotoDetail},
        //配置商品列表路由
        {path:'/goods/list',component:CgoodsList},
        {path:'/goods/detail/:id',component:CgoodsDetail},
        
        //购物车路由
        {path:'/shopcart/list',component:Cshopcartlist},

        //登录页和购买页
        {path:'/buyshop',component:Cbuyshop},
        {path:'/login',component:Clogin},

    ]
})