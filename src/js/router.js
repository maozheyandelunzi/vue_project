

//导入包
import vueRouter from 'vue-router';

//导入index组件
import Cindex from '../component/index/index.vue';

//导入newlist组件
import CnewsList from '../component/news/list.vue';

//导入newsdetail组件
import CnewsDetail from '../component/news/detail.vue'
//导出一个路由实例
export default new vueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Cindex},
        {path:'/news/list',component:CnewsList},
        //写上id时能通过$router.query.id得到id号
        {path:'/news/detail/:id',component:CnewsDetail}
    ]
})