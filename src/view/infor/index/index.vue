<template>
	<section class="body infor-index">
    <div class="head-expand">
      <div class="head">
        <div class="title">
          <span class="txt">消息</span>
        </div>
        <div class="action">
          <span class="button sousuo">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="button add">
            <i class="iconfont icon-account fz48"></i>
          </span>
        </div>
      </div>
    </div>

    <div class="infors">
      <div class="item" v-for="i in list">
        <div class="avatar">
          <img class="img" :src="i.pic" />
        </div>
        <div class="info">
          <h3 class="title">{{i.title}}</h3>
          <p class="desc">{{i.desc}}</p>
        </div>
        <div class="time">{{i.time}}</div>
      </div>
    </div>
	</section>
</template>

<script>
  import {
    InforIndexReq
  } from '../../../common/rest';

  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      loadInforList() {
        InforIndexReq()
          .then((data) => {
            this.list = data.data.list;
          });
      }
    },
    created() {
      this.loadInforList();
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
