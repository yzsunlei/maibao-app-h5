<template>
  <footer class="mint-footer">
    <div class="mint-tabbar is-fixed c-font">
      <router-link :to="{name: item.link}" class="mint-tab-item" v-for="item in tabs" :key="item.id">
        <div class="mint-tab-item-icon">
          <i class="iconfont fz42" :class="item.icon"></i>
        </div>
        <div class="mint-tab-item-label">{{item.name}}</div>
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
      	tabs: [
          {
            name: '动态',
            link: 'trend_friend',
            icon: 'icon-clock'
          },
          {
            name: '消息',
            link: 'infor_index',
            icon: 'icon-remind'
          },
          {
            name: '人脉',
            link: 'social_index',
            icon: 'icon-sousuo'
          },
          {
            name: '我的',
            link: 'user_home',
            icon: 'icon-account'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>
