

<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" @click='minusgoods'  type="button">-</button>
        <input class="mui-input-numbox" v-model="goodsnum">
        <button class="mui-btn mui-btn-numbox-plus" @click='addgoods'  type="button">+</button>
    </div>
</template>
<script>
export default {

  props:['initNum'],

   data(){
       return {
          goodsnum:this.initNum
       }
   },
   methods:{
       addgoods() {
            this.goodsnum++;

        },
        minusgoods() {
            this.goodsnum > 0 && this.goodsnum--;
        }
   },
   watch:{
       goodsnum(){
           this.$emit('send',this.goodsnum);
       }
   }
}
</script>

<style lang="less">

</style>
