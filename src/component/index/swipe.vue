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
    
    import demain from '../../js/config.js';
    
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
       }

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