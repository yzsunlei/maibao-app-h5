<template>
	<section class="body social-explore-location">
    <loadmore style="width:100%;" :commad="loadSocialExploreLocationData" :param="params" :topMethod="onRefreshCallback"
              :loadMoreIconVisible="false" ref="loadmore">
      <div class="wrap">
        <div class="item" v-for="it in data.list">
          <div class="avatar">
            <img class="img" :src="it.avatar" />
          </div>
          <div class="info">
            <h3 class="name">{{it.nickname || it.username}}</h3>
            <p class="position">{{it.company}} {{it.position}}</p>
            <p class="connect">
              <i class="iconfont icon-weizhi"></i>
              <span class="text">距你<strong>{{it.distance_num || "500"}}</strong>m</span>
            </p>
          </div>
          <div class="button">
            <i class="iconfont icon-add"></i>
            <span class="text">好友</span>
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
        },
      }
    },
    computed: {
      ...mapGetters({
        data: "getSocialExploreLocationData"
      })
    },
    methods: {
      ...mapActions({
        "loadSocialExploreLocationData": "loadSocialExploreLocationData",
      }),
      async onRefreshCallback() {
        this.$store.dispatch("clearSocialExploreLocationData");
        this.$refs["loadmore"].onTopLoaded(this.$refs["loadmore"].uuid);
      },
    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
