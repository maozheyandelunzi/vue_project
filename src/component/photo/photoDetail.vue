<template>
    <section class="photodetail">
        <lg-preview></lg-preview>
        <vue-title :title="msg"></vue-title>
          
        <div class="mui-card-content-inner">
    
            <h3 style="color: #333;">{{info.title}}</h3>
            <p>
                <span>添加时间:{{info.add_time|formatD('YYYY-MM-DD')}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{{info.click+10}} 次浏览</span>&nbsp;&nbsp;&nbsp;
                <span>点击量: {{info.click+1}}</span>
    
            </p>
        </div>
        <ul class="mui-table-view mui-grid-view">
            <li v-for="(item,i) in img" :key="i" class="mui-table-view-cell mui-media mui-col-xs-4">
                <img v-preview="item.src" class="mui-media-object img-preview" :src="item.src">
            </li>
    
        </ul>
        <div class="mui-card-content-inner" style='color:#888'>
            <div v-html="info.content"></div>
        </div>
        <vue-comment :id='info.id'></vue-comment> 
    </section>
</template>


<script>

//导入头部
import title from '../common/title.vue';
//导入配置路劲文件
import config from '../../js/config.js';
//导入评论部分
import comment from '../common/comment.vue';
export default {
    data() {
        return {
            msg: '图片详情',
            info: {},
            img: [],
        }
    },
    components: {
        'vue-title': title,
        "vue-comment":comment
    },

    methods: {
        getInfo() {
            this.$http.get(config.getImginfo + this.$route.params.id).then(resp => {
                resp.body.status == 0 && (this.info = resp.body.message[0])
            })
        },
        getImg() {
            this.$http.get(config.getImgmin + this.$route.params.id).then(resp => {
                console.log(this.$preview);
                if (resp.body.status == 0) {
                    this.img = resp.body.message.map(function (v, i) {
                        v.src = config.imgDemain + v.src;
                        return v;
                    })
                }
            })
        }
    },
    created() {
        this.getImg();
        this.getInfo();
    },
}
</script>

<style lang='less'>
     .lg-preview-img{
         width: 100%;
     }
</style>
