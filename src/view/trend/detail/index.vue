<template>
	<section class="body trend-detail">
    <div class="trend-item">
      <div class="trend-header">
        <div class="user">
          <div class="user-avatar">
            <img class="img" :src="detail.user.avatar" />
          </div>
          <div class="user-info">
            <h3 class="nickname">{{detail.user.nickname || detail.user.username}}</h3>
            <p class="office">{{detail.user.company}}</p>
          </div>
          <div class="user-other">
            <div class="time">
              {{detail.time}}
            </div>
            <div class="delete">
              <i class="iconfont icon-menu"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="trend-body">
        <div class="text">
          {{detail.content}}
        </div>
        <div class="images">
          <a href="#" class="img-wrap" v-for="j in detail.images"><img class="img" :src="j.pic" /></a>
        </div>
        <div class="btns">
          <a class="btn love">
            <i class="iconfont icon-good fz42"></i>
            <span class="num">{{detail.praise_num}}</span>
          </a>
          <a class="btn share">
            <i class="iconfont icon-fenxiang fz42"></i>
            <span class="num">{{detail.share_num}}</span>
          </a>
          <a class="btn comment">
            <i class="iconfont icon-comments fz42"></i>
            <span class="num">{{detail.comment_num}}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="trend-comments">
      <h2 class="title">全部<strong>{{detail.comments.length}}</strong>条评论</h2>
      <div class="wrap">
        <div class="item" v-for="k in detail.comments">
          <div class="user-avatar">
            <img class="img" :src="k.avatar"/>
          </div>
          <div class="comment-info">
            <h3 class="nickname"><a href="#"> {{k.nickname || k.username}} * {{k.position}}</a></h3>
            <p class="office">{{k.company}}</p>
            <p class="comment">{{k.content}}</p>
          </div>
          <div class="time">{{k.time}}</div>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
  import {
    TrendDetailReq
  } from '../../../common/rest';

  export default {
    data() {
      return {
        detail: {}
      }
    },
    methods: {
      loadTrendDetail() {
        TrendDetailReq()
          .then((data) => {
            this.detail = data.data;
          });
      }
    },
    created() {
      this.loadTrendDetail();
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
