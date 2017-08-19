<template>
    <section class="goodsdetail">
        <vue-title :title="msg"></vue-title>
        <vue-swipe :list='goodsList'></vue-swipe>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        <span>市场价:</span>
                        <del style='color:#666'>￥{{goodsInfo.market_price}}</del>
                        <span>促销价:</span>
                        <strong style='color:red;font-size:20px'>￥{{goodsInfo.sell_price}}</strong>
                    </p>
                    <div>
                        购买数量:
                        <vue-num :initNum='goodsnum' @send='numchange'></vue-num>
                    </div>
                    <p style="margin-top:20px">
                        <router-link to='/shopcart/list' class="mui-btn mui-btn-danger">
                            立即购买
                        </router-link>
                        <button @click="joinGoods" style="float:right" type="button" class="mui-btn mui-btn-danger">
                            加入购物车
                        </button>
                    </p>
                </div>
            </div>
        </div>
        <mt-navbar class="mui-card" v-model="selected">
            <mt-tab-item id="comment">评论</mt-tab-item>
            <mt-tab-item id="info">图文介绍</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="comment">
                <vue-comment :id='id'></vue-comment>
            </mt-tab-container-item>
            <mt-tab-container-item id="info">
                <div class="mui-card">
                    <div class="mui-card-header">{{goodsText.title}}</div>
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner" v-html="goodsText.content">
    
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </section>
</template>

<script>
//引入头部
import title from '../common/title.vue';

//引入轮播图
import swipe from '../common/swipe.vue';

//引入配置路劲文件
import config from '../../js/config.js';

//评论
import comment from '../common/comment.vue';

//公共数量
import buyNum from '../common/buyNum.vue';

import Cgoods from '../../js/goods.js';

export default {
    data() {
        return {
            msg: '商品详情',
            goodsList: [],
            goodsText: {},
            goodsInfo: {},
            selected: '',
            id: this.$route.params.id,
            goodsnum: Cgoods.get(this.$route.params.id),
        }
    },

    methods: {
        getlunbo() {
            this.$http.get(config.getImgmin + this.id).then(resp => {
                if (resp.body.status == 0) {
                    this.goodsList = resp.body.message.map(function (v, i) {
                        v.img = config.imgDemain + v.src;
                        return v;
                    })
                }
            })
        },
        getGoodsText() {
            this.$http.get(config.getGoodsText + this.id).then(resp => {
                resp.body.status == 0 && (this.goodsText = resp.body.message[0]);
            })
        },
        getGoodsInfo() {
            this.$http.get(config.getGoodsInfo + this.id).then(resp => {
                resp.body.status == 0 && (this.goodsInfo = resp.body.message[0]);
            })
        },
        numchange(num) {
            this.goodsnum = num;
        },

        joinGoods() {
            Cgoods.set(this.id, this.goodsnum);
            // console.log(this.$route.params.id);
           document.querySelector('.mui-badge').innerHTML=Cgoods.get();
        }

    },
    created() {
        this.getlunbo();
        this.getGoodsText();
        this.getGoodsInfo();
    },
    components: {
        'vue-title': title,
        'vue-swipe': swipe,
        'vue-comment': comment,
        'vue-num': buyNum
    }
}
</script>
<style lang="less">

</style>
