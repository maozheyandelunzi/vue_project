
<template>
    <section class="goodslist">
        <vue-title :title="msg"></vue-title>
        <ul class="mui-table-view mui-grid-view">
            <li v-for="(item,i) in goodslist" :key="i" class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link :to="'/goods/detail/'+item.id">
                    <div style='margin:5px;border:1px solid #ccc'>
                        <div style="padding:5px;">
                            <img class="mui-media-object" :src="item.img_url">
                            <div>
                                <p style="white-space:pre-wrap;text-align:left"> {{item.title}}</p>
                            </div>
                            <div style="background:#f7f7f7">
                                <p style="text-align:left">
                                    <span style="font-size:20px;line-height:60px;color:red">￥{{item.sell_price}}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <del style="color:#666">￥{{item.market_price}}</del>
                                </p>
                                <p style="text-align:left">
                                    <span style="color:hotpink">热卖中...</span>
                                    <span style="float:right">剩{{item.stock_quantity}}件</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="mui-pager">
            <li>
                <button ref='pre' @click="prePage">
                    上一页
                </button>
            </li>
            <li>
                <button ref="next" @click="nextPage">
                    下一页
                </button>
            </li>
        </ul>
    </section>
</template>
<script>
//引入公共头部
import title from '../common/title.vue';
//引入公共地址配置
import config from '../../js/config.js';
export default {
    data() {
        return {
            msg: '商品列表',
            pageIndex: 1,
            goodslist: [],
        }

    },
    components: {
        'vue-title': title
    },
    methods: {
        getGoods() {
            this.$http.get(config.getGoodslist + this.pageIndex).then(resp => {
                if (resp.body.status == 0) {
                    
                    this.goodslist = resp.body.message;

                    this.pageIndex==1?this.$refs.pre.disabled = true:this.$refs.pre.disabled = false;
                   this.goodslist.length<10?this.$refs.next.disabled = true:this.$refs.next.disabled = false 
                }
            })
        },
        prePage(){
           
           if(this.pageIndex<=1){
                return;
           }
           this.pageIndex--;
           this.getGoods();
        },
        nextPage(){
           
           if(this.goodslist.length<10){
               return;
           }
           this.pageIndex++;
           this.getGoods();       
        }
    },
    created() {
        this.getGoods();
    }
}
</script>
<style lang="less">

</style>
