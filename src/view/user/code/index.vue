<template>
	<section class="body user-code">
    <div class="modal"></div>

    <div class="card">
      <div class="tool">
        <span class="close">
          <i class="iconfont icon-close"></i>
        </span>
      </div>
      <div class="head">
        <div class="avatar">
          <img class="img" :src="user.avatar" />
        </div>
        <div class="info">
          <h3 class="name">{{user.nickname || user.username}}</h3>
          <p class="position">{{user.company}} {{user.position}}</p>
        </div>
      </div>
      <div class="body">
        <img class="img" src="../../../asset/image/default.png" />
      </div>
    </div>
	</section>
</template>

<script>
  import {
    UserInfoDetailReq,
  } from '../../../common/rest';

  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      loadUserInfo() {
        UserInfoDetailReq()
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
