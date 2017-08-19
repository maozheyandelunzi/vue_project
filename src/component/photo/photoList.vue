

<template>
    <section class="photoList">
        <vue-title :title="msg"></vue-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <router-link to="/photo/list/0">
                    全部
                </router-link>
            </li>
            <li class="mui-table-view-cell" v-for='(item,i) in title' :key='item.id'>
                <router-link :to="'/photo/list/'+item.id">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    
        <div class="mui-card" v-for='(item,i) in imglist' :key='item.id'>
            <router-link :to="'/photo/detail/'+item.id">
                <div class="mui-card-header mui-card-media" style="height:80vw;">
                    <img style='width:100%;height:100%' v-lazy="item.img_url"></img>
                </div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>{{item.title}}</p>
                        <p style="color: #333;">{{item.zhaiyao}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    
    </section>
</template>


<script>

//引入公共配置
import config from '../../js/config.js';
import title from '../common/title.vue';
export default {
    components: {
        'vue-title': title
    },
    data() {
        return {
            title: [],
            imglist: [],
            msg: '美图列表'
        }
    },
    watch: {
        $route() {
            this.getImglist(this.$route.params.id);
        }
    },
    methods: {
        getTitle() {
            this.$http.get(config.getTitle).then(resp => {
                resp.body.status == 0 && (this.title = resp.body.message);
            })
        },
        getImglist(id) {
            this.$http.get(config.getImglist + id).then(resp => {

                if (resp.body.status == 0) {
                    this.imglist = resp.body.message.map(function (v, i) {
                        v.img_url = config.imgDemain + v.img_url;
                        return v;
                    })
                }

            })
        },

    },
    created() {
        this.getTitle();
        this.getImglist(this.$route.params.id);
    },

}
</script>
<style lang='less'>
.photoList {
    ul {
        overflow: hidden;
        li {
            float: left;
            color: yellowgreen;
        }
    }
    .mui-table-view-cell:after {
        height: 0;
    }

    [lazy=loading] {
        width: 40px;
        height: 300px;
        background: #888;
        margin: auto;
    }
}
</style>
