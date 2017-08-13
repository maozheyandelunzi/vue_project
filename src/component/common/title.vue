<template>

      <div class="mint-header title">
        <div class="mint-header-button is-left">
            <div @click='goback' class="router-link-active">
                <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
                    <label class="mint-button-text">返回</label>
                </button>
            </div>
        </div>
        <h1 class="mint-header-title">{{title}}</h1>
        <div class="mint-header-button is-right"></div>
      </div>

</template>

<script>
    export default {
         props:['title'],
         methods:{
             goback(){
                 //go()里的参数有俩个,一个是1,一个-1,-1就是后退,1就是前进
                 this.$router.go(-1);
             }
         } 
    }
</script>


<style lang="less">
    .title{
        background: greenyellow;
    }
</style>