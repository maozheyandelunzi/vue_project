

<template>
    <section>
        <vue-swipe :list='list'></vue-swipe>
        <vue-nav></vue-nav>
    </section>
</template>

<script>


//引入组件
import demain from '../../js/config.js';
import Cnav from './nav.vue';
import Cswipe from '../common/swipe.vue'
    export default {
        //定义组件的数据
       data(){
           return {
               //轮播图数据
               list:[]
           }
       },
       //定义方法 发送ajax请求
       methods:{

           getLunbo(){
              let url = demain.getlunbo;
              this.$http.get(url).then(resp =>{
                  if(resp.body.status == 0 ){
                    this.list = resp.body.message;
                  }
              }) 
           }
       },
       //自动调用
       created(){
           this.getLunbo();
       },

       components:{
           'vue-swipe':Cswipe,
           'vue-nav':Cnav
       }
    }
</script>

<style>
    
</style>