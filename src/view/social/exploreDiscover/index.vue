<template>
	<section class="body social-explore-discover">
    <div class="wrap">
      <div class="category" v-for="i in list">
        <h2 class="title">{{i.c_name}}</h2>
        <div class="square">
          <div class="item">
            <div class="avatar">
              <img class="img" :src="user.avatar" />
            </div>
            <div class="info">
              <h3 class="name">{{user.nickname || user.username}}</h3>
              <p class="company">{{user.company}}</p>
              <p class="position">{{user.position}}</p>
            </div>
          </div>
          <div class="item" v-for="j in i.c_list">
            <div class="avatar">
              <img class="img" :src="j.avatar" />
            </div>
            <div class="info">
              <h3 class="name">{{j.nickname || j.username}}</h3>
              <p class="company">{{j.company}}</p>
              <p class="position">{{j.position}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
	</section>
</template>

<<script>
  import {
    UserInfoReq,
    SocialExploreDiscoverReq,
  } from '../../../common/rest';

  export default {
    data() {
      return {
        user: {},
        list: []
      }
    },
    methods: {
      loadUserInfo() {
        UserInfoReq()
          .then((data) => {
            this.user = data.data;
          });
      },
      loadFriendExplore() {
        SocialExploreDiscoverReq()
          .then((data) => {
            this.list = data.data.list;
          });
      }
    },
    created() {
      this.loadUserInfo();
      this.loadFriendExplore();
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
