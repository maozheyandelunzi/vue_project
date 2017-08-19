<template>
    <section class="shopcartlist">
        <vue-title :title="msg"></vue-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,i) in list" :key="i">
    
                <mt-switch v-model="item.selected"></mt-switch>
    
                <a href="javascript:;">
    
                    <img class="mui-media-object mui-pull-left" :src="item.src">
                    <div>
                        <p style="color:skyblue;white-space:pre-wrap;">{{item.title}}</p>
                        <div style="margin-top:35px">
                            <strong style="color:red">￥{{item.sell_price}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <vue-buynum :initNum="getnum(item.id)" @send="change(item.id,$event)" ></vue-buynum>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span @click="remove(item.id)" style="color:#666">删除</span>
                        </div>
                    </div>
                </a>
            </li>
    
        </ul>
        <div style="background:#ccc" class="mui-card-content-inner total">
            <p style="color:#000">总计(不含运费)</p>
            <p>已选择商品{{shopSelected}}件,总价:{{priceSum}}元</p>
            <span @click="buyshop" class="mui-btn mui-btn-success">
                逛完了,去买单
            </span>
        </div>
    </section>
</template>

<script>
//引入头部
import title from '../common/title.vue';

import config from '../../js/config.js';

import storage from '../../js/goods.js';
//引入
import buynum from '../common/buyNum.vue';

//引入toast
import {Toast} from 'mint-ui';

export default {
    data() {
        return {
            msg: '购物车',
            list: [],
        }
    },
    methods: {
        getshopcartlist() {

            this.$http.get(config.getShopcartlist + storage.getKey()).then(resp => {
                if (resp.body.status == 0) {

                    this.list = resp.body.message.map(function (v, i) {
                        v.selected=true;
                        v.src = config.imgDemain + v.thumb_path;
                        return v;
                    })
                    
                }
            })
        },
        getnum(id){
            return storage.get(id);
        },
        //更新数据
        change(id,num){
           this.list[0].selected=!this.list[0].selected;
           this.list[0].selected=!this.list[0].selected;
           //设置数据
           storage.set(id,num);
           document.querySelector('.mui-badge').innerHTML=storage.get();
        },
        remove(id){
            
            //第一种做法
            // this.list=this.list.filter(item =>item.id!=id);
            //第二种做法
            let i = this.list.findIndex(item =>item.id==id);
            i>-1 && this.list.splice(i,1);
            storage.remove(id);
            document.querySelector('.mui-badge').innerHTML=storage.get();
        },
        buyshop(){
            //点击购买                         遍历之后有一次为true就行
                                             //有选择,总和不是0件
            let flag = this.list.some(item =>item.selected&&storage.get(item.id))
        
           if(!flag){
              Toast({
                  message:'老大,好歹选一个呗'
              })
           }
                  //看看document.cookie能不能匹配到/SESSIONID=\W+/    
           else if(!/SESSIONID=\w+/.test(document.cookie)){
               //跳到登录页面
               this.$router.push({path:'login',query:{nextpage:'/buyshop'}})  
           }else{
               this.$router.push('/buyshop');
           }
        }
    },
    computed:{
       //监听属性的变化
       shopSelected(){
           //定义一个新的数组,如果被选择就把数量存到一个数组里面去
           //没有就是0

           let shopArr = this.list.map(item =>item.selected? +storage.get(item.id):0);

           //返回 注意:防止报错 是空数组不能求和
           return shopArr.length && shopArr.reduce((v1,v2) =>v1+v2)
       },
       priceSum(){
           let priceArr = this.list.map(item =>item.selected?storage.get(item.id)*item.sell_price:0);
           return priceArr.length && priceArr.reduce((v1,v2) =>v1+v2);
       }
    },
    components: {
        'vue-title': title,
        'vue-buynum':buynum
    },
    created() {
        this.getshopcartlist();
    }
}
</script>


<style lang="less">
.shopcartlist {
    .mui-table-view .mui-media-object {
        line-height: 100px;
        max-width: 100px;
        height: 100px;
    }

    .mint-switch {
        float: left;
        transform: translateY(115%);
    }
    .total {
        position: relative;
        span {
            position: absolute;
            right: 30px;
            top: 35px;
        }
    }
}
</style>
