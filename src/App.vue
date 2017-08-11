

<template>
    <main>
        <vue-header></vue-header>
        <router-view></router-view>
        <vue-footer></vue-footer>
    </main>
</template>



<script>

// 引入子组件
import Cheader from './component/home/header.vue';
import Cfooter from './component/home/footer.vue';
    
   export default {
       components:{
           'vue-header':Cheader,
           'vue-footer':Cfooter
       }
   }

</script>


<style>
    
</style>