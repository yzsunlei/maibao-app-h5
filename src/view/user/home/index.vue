<template>
  <section class="body user-home">
    <div class="user-info">
      <div class="avatar">
        <img :src="user.avatar" class="img"/>
      </div>
      <div class="info">
        <h3 class="name">{{user.nickname || user.username}}</h3>
        <p class="company">{{user.company}}</p>
        <p class="position">{{user.position}}</p>
      </div>
      <div class="action">
        <i class="iconfont icon-more"></i>
      </div>
    </div>

    <div class="user-tag">
      <div class="tag">
        <h3 class="number">{{user.friend_num}}</h3>
        <div class="title">
          <i class="iconfont icon-account"></i>
          <span class="text">好友</span>
        </div>
      </div>
      <div class="tag">
        <h3 class="number">{{user.influence_num}}</h3>
        <div class="title">
          <i class="iconfont icon-move"></i>
          <span class="text">影响力</span>
        </div>
      </div>
      <div class="tag">
        <h3 class="number">{{user.visited_num}}</h3>
        <div class="title">
          <i class="iconfont icon-clock"></i>
          <span class="text">访客</span>
        </div>
      </div>
    </div>

    <div class="user-action">
      <div class="group">
        <mt-cell is-link>
        <div class="title" slot="title">
          <i class="iconfont icon-good" style="color: orangered"></i>
          <span class="text">成为认证用户</span>
        </div>
      </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-email" style="color: red"></i>
            <span class="text">钱包</span>
          </div>
        </mt-cell>
      </div>
      <div class="group">
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-favorite" style="color: #3B79FE"></i>
            <span class="text">我的动态</span>
          </div>
        </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-pin" style="color: #3B79FE"></i>
            <span class="text">我的主题</span>
          </div>
        </mt-cell>
      </div>
      <div class="group">
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-comments"></i>
            <span class="text">意见反馈</span>
          </div>
        </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-xiaoxi"></i>
            <span class="text">在线客服</span>
          </div>
        </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-password"></i>
            <span class="text">隐私</span>
          </div>
        </mt-cell>
        <mt-cell is-link>
          <div class="title" slot="title">
            <i class="iconfont icon-set"></i>
            <span class="text">设置</span>
          </div>
        </mt-cell>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    UserInfoReq
  } from '../../../common/rest';

  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      loadUserInfo() {
        UserInfoReq()
          .then((data) => {
            this.user = data.data;
          });
      }
    },
    created() {
      this.loadUserInfo();
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
