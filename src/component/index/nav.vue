<template>
 
    <section>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			    <router-link to='/news/list'>
		                    <span style='color:skyblue' class="mui-icon mui-icon-home"></span>
		                    <div  class="mui-media-body">新闻资讯</div>
			   </router-link>
			   </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/photo/list/0'>
		                    <span style='color:green' class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/goods/list'>
		                    <span style='color:red' class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
		                    <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span style='color:hotpink' class="mui-icon mui-icon-chatboxes"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span style='color:blue' class="mui-icon mui-icon-videocam"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span style='color:yellow' class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
        
    </section>
  
</template>

<script>
    export default {

    }
</script>

<style lang="less">
    
</style>