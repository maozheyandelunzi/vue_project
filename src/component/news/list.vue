<template>

     <section class='newsList'>
         <vue-title :title='msg'></vue-title>
         <ul class="mui-table-view">
				<li v-for='(item,i) in list' :key='item.id' class="mui-table-view-cell mui-media">
					<router-link :to="'/news/detail/'+ item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div  class="mui-media-body">
                           <div class='mui-ellipsis'>{{item.title}}</div>
							<p class='mui-ellipsis'>
                               <span>创建时间:{{item.add_time|formatD('YYYY-MM-DD')}}</span>
                               <span class="float-right">点击量:{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
     </section>

</template>


<script>
  import demain from '../../js/config.js';
  
  //引入头部公共组件
  import title from '../common/title.vue';
    export default {
        //列表数据
        data(){
            return {
                list:[],
                msg:'商品列表'
            }
        },
        methods:{
           getnewList(){
             this.$http.get(demain.getnewList).then(resp =>{
                 resp.body.status==0 && (this.list = resp.body.message);
             })
           } 
        },
        created(){
            this.getnewList();
        },
        components:{
            'vue-title':title
        }
    }
</script>


<style lang="less">
    .float-right{
        float: right;
    }
</style>