<template>
	<section class="body trend-send">
    <div class="trend-form">
      <div class="text">
        <textarea class="content" placeholder="说点什么吧..." v-model="trend.content"></textarea>
      </div>
      <div class="image-list">
        <div class="image-item" v-for="i in trend.images"><img class="img" :src="i.pic" /></div>
        <div class="image-item add-item" @click="addImage"><span class="btn">+</span></div>
      </div>
    </div>
    <div class="trend-additional">
      <mt-cell is-link>
        <div class="title" slot="title">
          <i class="iconfont icon-weizhi"></i>
          <span class="text">添加位置</span>
        </div>
      </mt-cell>
      <mt-cell is-link>
        <div class="title" slot="title">
          <i class="iconfont icon-pin"></i>
          <span class="text">添加标签</span>
        </div>
      </mt-cell>
    </div>
  </section>
</template>

<script>
  import {
    TrendSendReq
  } from '../../../common/rest';

  export default {
    data() {
      return {
        trend: {}
      }
    },
    methods: {
      postTrend() {
        TrendSendReq()
          .then((data) => {
            this.$router.replace("/trend/friend");
          });
      },
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
