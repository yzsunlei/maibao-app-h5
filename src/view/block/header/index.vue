<template>
  <header class="mint-header">
    <div class="mint-header-button is-left">
      <router-link :to="{}" class="router-link-active">
        <button class="mint-button mint-button--default mint-button--normal">
	        <span class="mint-button-icon">
	          <i class="iconfont icon-back fz38"></i>
	        </span>
        </button>
      </router-link>
    </div>
    <h1 class="mint-header-title fz34">{{title}}</h1>
    <div class="mint-header-button is-right">
      <a href="#" class="router-link-active">
        <button class="mint-button mint-button--default mint-button--normal">
	        <span class="mint-button-icon">
	          <i class="iconfont icon-fenxiang fz38"></i>
	        </span>
        </button>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data() {
    	return {
    		title: '脉宝'
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
