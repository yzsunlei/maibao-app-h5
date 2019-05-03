<template>
	<section class="body trend-follow">
    <div class="head-expand">
      <div class="head">
        <div class="title">
          <span class="txt">好友</span>
          <span class="txt selected">关注</span>
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

    <div class="toutiao">
      <div class="image-text">
        <div class="pic">
          <img class="img" src="../../../asset/image/pic.png" />
        </div>
        <div class="info">
          <p class="title">上了名校才知道，任何人之间的差距就是...</p>
          <p class="connect"><span class="num">18</span>个同行喜欢</p>
        </div>
      </div>
      <div class="texts">
        <p class="item" v-for="i in toutiaos.list"><i class="iconfont icon-clock"></i><span class="txt">{{i.title}}</span></p>
      </div>
      <div class="more">
        <span class="text">查看更多行业头条</span>
      </div>
    </div>

    <div class="topics">
      <h2 class="title">
        你可能感兴趣的主题
        <span class="more">更多主题<i class="iconfont icon-more"></i></span>
      </h2>
      <div class="wrap">
        <div class="item" v-for="i in topics.list">
          <div class="pic">
            <img class="img" :src="i.pic" />
          </div>
          <div class="name">{{i.title}}</div>
          <div class="button" @click="addTrendFollow">
            <i class="iconfont icon-add"></i>
            <span class="text">好友</span>
          </div>
        </div>
      </div>
    </div>


    <div class="recommend-list">
      <h2 class="title">猜你喜欢</h2>
      <loadmore style="width:100%;" :commad="loadTrendFollowData" :param="params" :topMethod="onRefreshCallback"
                :loadMoreIconVisible="false" ref="loadmore">
        <div class="trend-item" v-for="i in recommands.list">
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
      </loadmore>
    </div>
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
        params_toutiao: {
          pageIndex: 1,
          pageSize: 3,
        },
        params_topic: {
          pageIndex: 1,
          pageSize: 3,
        },
        params_recommand: {
          pageIndex: 1,
          pageSize: 10,
          type: "follow"
        }
      }
    },
    computed: {
      ...mapGetters({
        topics: "getTrendTopicData",
        toutiaos: "getTrendToutiaoData",
        recommands: "getTrendFollowData",
      })
    },
    methods: {
      ...mapActions({
        "loadTrendToutiaoData": "loadTrendToutiaoData",
        "loadTrendTopicData": "loadTrendTopicData",
        "loadTrendFollowData": "loadTrendFollowData",
      }),
      async onRefreshCallback() {
        this.$store.dispatch("clearTrendFollowData");
        this.$refs.loadmore.onTopLoaded(this.$refs.loadmore.uuid);
      },
      addTrendFollow() {
        TrendFollowAddReq()
          .then((data) => {

          });
      }
    },
    created() {
      this.$store.dispatch("loadTrendToutiaoData", this.params_toutiao);
      this.$store.dispatch("loadTrendTopicData", this.params_topic);
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
