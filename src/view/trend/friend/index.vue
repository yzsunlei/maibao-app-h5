<template>
	<section class="body trend-friend">
    <div class="head-expand">
      <div class="head">
        <div class="title">
          <span class="txt selected">好友</span>
          <span class="txt">关注</span>
          <span class="txt">职言</span>
        </div>
        <div class="action">
          <span class="button sousuo">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="button add">
            <i class="iconfont icon-edit fz48"></i>
          </span>
        </div>
      </div>
    </div>

    <loadmore style="width:100%;" :commad="loadTrendFriendData" :param="params" :topMethod="onRefreshCallback"
               :loadMoreIconVisible="false" ref="loadmore">
      <div class="trend-list" v-if="data.list && data.list.length">
        <div class="trend-item" v-for="i in data.list">
          <div class="trend-header">
            <div class="user">
              <div class="user-avatar">
                <img class="img" :src="i.user.avatar" />
              </div>
              <div class="user-info">
                <h3 class="nickname">{{i.user.nickname || i.user.username}}</h3>
                <p class="office">{{i.user.company}}</p>
              </div>
              <div class="user-other">
                <div class="time">
                  {{i.time}}
                </div>
                <div class="delete">
                  <i class="iconfont icon-menu"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="trend-body">
            <div class="text">
              {{i.content}}
            </div>
            <div class="images">
              <a href="#" class="img-wrap" v-for="j in i.images"><img class="img" :src="j.pic" /></a>
            </div>
            <div class="btns">
              <a class="btn love">
                <i class="iconfont icon-good fz42"></i>
                <span class="num">{{i.praise_num}}</span>
              </a>
              <a class="btn share">
                <i class="iconfont icon-fenxiang fz42"></i>
                <span class="num">{{i.share_num}}</span>
              </a>
              <a class="btn comment">
                <i class="iconfont icon-comments fz42"></i>
                <span class="num">{{i.comment_num}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </loadmore>
	</section>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    data() {
      return {
        params: {
          pageIndex: 1,
          pageSize: 10,
          type: "friend"
        }
      }
    },
    computed: {
      ...mapGetters({
        data: "getTrendFriendData"
      })
    },
    methods: {
      ...mapActions({
        "loadTrendFriendData": "loadTrendFriendData",
      }),
      async onRefreshCallback() {
        this.$store.dispatch("clearTrendFriendData");
        this.$refs.loadmore.onTopLoaded(this.$refs.loadmore.uuid);
      },
    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
