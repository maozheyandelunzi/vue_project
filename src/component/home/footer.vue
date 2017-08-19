<template>
  
  <footer>
     <nav class="mui-bar mui-bar-tab">
			<router-link to='/' class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to='/self' class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/shopcart/list" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{allgoods}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		<div></div>
  </footer>
  
</template>

<script>
   import goodsSum from '../../js/goods.js'
    export default {
        data(){
            return {
                allgoods:goodsSum.get(),
            }
        }
    }
</script>

<style lang='less'>
    footer{
		div{
			height:50px;
		}
	}
</style>
