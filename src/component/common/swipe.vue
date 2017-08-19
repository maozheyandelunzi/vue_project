<template>
   
   <article class='swipe'>
       <mt-swipe :auto="2000">
            <mt-swipe-item v-for='(item,i) in list' :key='i'>
                <a :href="item.url">
                   <img :src="item.img" alt="图片">
                </a>
            </mt-swipe-item>
       </mt-swipe>
    
   </article>
  
</template>

<script>
    

    
    export default {
       
       props:['list'],
  

    }
</script>

<style lang="less">
    .swipe{
        height:200px;
        img{
            height:100%;
            width:100%;
        }
    }
</style>