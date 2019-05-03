<template>
	<section class="body social-index">
    <div class="head-expand">
      <div class="head">
        <div class="title">
          <span class="txt">人脉</span>
        </div>
        <div class="action">
          <span class="button sousuo">
            <i class="iconfont icon-sousuo"></i>
          </span>
            <span class="button add">
            <i class="iconfont icon-add"></i>
          </span>
        </div>
      </div>
    </div>

    <div class="links">
      <div class="group">
        <mt-cell is-link :to="{name: 'social_friend'}">
          <div class="title" slot="title">
            <i class="iconfont icon-account" style="color: blue"></i>
            <span class="text">我的好友</span>
          </div>
        </mt-cell>
        <mt-cell is-link :to="{name: 'social_explore'}">
          <div class="title" slot="title">
            <i class="iconfont icon-move" style="color: orangered"></i>
            <span class="text">人脉探索</span>
          </div>
        </mt-cell>
      </div>
      <div class="group">
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-form" style="color: red"></i>
            <span class="text">求知招聘</span>
          </div>
        </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-pin" style="color: red"></i>
            <span class="text">急速找人</span>
          </div>
        </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-xiaoxi" style="color: orange"></i>
            <span class="text">脉课堂</span>
          </div>
        </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-favorite" style="color: orange"></i>
            <span class="text">职场进阶</span>
          </div>
        </mt-cell>
      </div>
    </div>
	</section>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
