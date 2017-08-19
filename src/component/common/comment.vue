


<template>
    <section class="comment">
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>提交谬论</h3>
                </div>
            <div class="mui-card-content">
                <textarea v-model="comment" id="textarea" rows="5" placeholder="请写上您的评论"></textarea>
                <button @click='commit' type="button" class="mui-btn mui-btn-royal mui-btn-block">发 表</button>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header"><h3>评论列表</h3></div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
				 <li v-for="(item,i) in Clist" :key="i" class="mui-table-view-cell">
                     <p>
                         <span>{{i+1}}楼</span>&nbsp;&nbsp;&nbsp;
                         <span>评论人:{{item.user_name}}</span>&nbsp;&nbsp;&nbsp;
                         <span>时间:{{item.add_time|formatD('YYYY-MM-DD')}}</span>
                     </p>
                     <div>{{item.content}}</div>
                 </li>
                 <button ref='btn' @click="getComment" type="button" class="mui-btn mui-btn-success mui-btn-block">加载更多>>></button>
			</ul>
            </div>
        </div>
    </section>
</template>

<script>

//引入配置文件
import config from '../../js/config.js'
//引入toast
import {Toast} from 'mint-ui';

export default {
    props: ['id'],
    data() {
        return {
            comment: '',
            pageindex:1,
            Clist:[]
        }
    },
    methods: {
        commit() {

            this.$http.post(config.pushComment + this.id, { content: this.comment }, { emulateJSON: true }).then(resp => {

                if (resp.body.status == 0) {
                    
                    Toast({
                        message: '操作成功',
                        iconClass: 'icon icon-success'
                    });
                    this.Clist.unshift({
                        user_name:'大侠',
                        add_time:new Date(),
                        content:this.comment
                    });
                    this.comment = '';
                }

            })
        },

        getComment(){
            this.$http.get(config.getComment +this.id+'?pageindex='+this.pageindex).then(resp =>{

                if(resp.body.status==0&&resp.body.message.length>0){
                     this.Clist.push(...resp.body.message);
                    // this.Clist=resp.body.message;
                     this.pageindex++;
                }else if(resp.body.message.length==0){
                     //不让点击
                     this.$refs.btn.disabled=true;
                }
            })
        }
    },
    created(){
        this.getComment();
    }
        
}
</script>

<style lang='less'>

</style>

