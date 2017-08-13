

<template>
    <section>
        <vue-swipe></vue-swipe>
        <vue-nav></vue-nav>
    </section>
</template>

<script>


//引入组件
import Cswipe from './swipe.vue';
import Cnav from './nav.vue';

    export default {
       components:{
           'vue-swipe':Cswipe,
           'vue-nav':Cnav
       }
    }
</script>

<style>
    
</style>