<template>
    <section>
        <vue-title :title="msg"></vue-title>
        <div class="mui-card">
            <div class="mui-card-header">{{detail.title}}</div>
            <div class="mui-card-footer">
                <span>添加时间:{{detail.add_time|formatD('YYYY-MM-DD')}}</span>
                <span>点击量:{{detail.click}}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="detail.content">
    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//引入公共头部
import title from '../common/title.vue';

//引入配置文件
import config from '../../js/config.js';

export default {

    data() {
        return {
            msg: '商品详情',
            detail: {}
        }
    },

    components: {
        'vue-title': title
    },
    methods: {
        getDetail() {
            // console.log(config.getnewsDetail + this.$route.params.id);
            this.$http.get(config.getnewsDetail + this.$route.params.id).then(resp => {
                resp.body.status == 0 && (this.detail = resp.body.message[0])
            })
        }
    },
    created() {
        this.getDetail();
    }
}
</script>


<style lang="less">

</style>